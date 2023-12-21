import { html, reactive } from "@arrow-js/core";
//import CFI from "epub-cfi-resolver";
import CFI from "./lib/epub-cfi-resolver.js";

const data = reactive<{
  epubUri: string;
  cfi: string;
  documents: { name: string; source: string }[];
  result: any;
}>({
  epubUri: "http://localhost:5173/tmp/example/content.opf",
  cfi: "epubcfi(/6/4[chap01ref]!/4[body01]/10[para05]/3:10)",
  documents: [],
  result: null,
});

let _lastUri: string | null = null;

//function fetchDocument(uri: string): Promise<Document | null> {
//  console.log("uri", uri);
//
//  return new Promise((resolve, reject) => {
//    const xhr = new XMLHttpRequest();
//
//    xhr.open("GET", uri);
//    xhr.responseType = "document";
//
//    xhr.onload = function () {
//      if (xhr.readyState === xhr.DONE) {
//        if (xhr.status < 200 || xhr.status >= 300) {
//          reject(new Error("Failed to get: " + uri));
//          return;
//        }
//
//        resolve(xhr.responseXML);
//      }
//    };
//    xhr.onerror = function () {
//      reject(new Error("Failed to get: " + uri));
//    };
//
//    xhr.send();
//  });
//}

function normalizeUri(uri: string) {
  if (_lastUri) {
    try {
      new URL(uri);
    } catch (err) {
      // use last uri to normalize
      uri = new URL(uri, _lastUri).href;
    }
  }
  _lastUri = uri;
  return uri;
}

async function parseCFI() {
  data.documents = [];

  // Parse the CFI
  const cfi = new CFI(data.cfi);

  // Resolve the CFI
  const bookmark = await cfi.resolve(data.epubUri, async (uri: string) => {
    uri = normalizeUri(uri);
    const doc = await cfi.fetchAndParse(uri);
    addDocument(uri, doc);
    return doc;
  });

  console.log(
    "🚀 ~ file: epubcfi.ts:21 ~ onSubmit ~ bookmark:",
    JSON.stringify(bookmark.node.textContent),
    bookmark.node.parentNode,
    bookmark
  );
  data.result = bookmark;
}

function addDocument(uri: string, doc: Document | null) {
  if (!doc) return doc;

  const name = uri.split("/").at(-1) ?? "";
  const source = doc.documentElement.outerHTML;
  data.documents.push({ name, source });
}

async function onSubmit(ev: SubmitEvent) {
  ev.preventDefault();
  parseCFI();
}

const main = html`
  <main>
    <div style="margin: 12px;">
      <form class="grid" @submit="${onSubmit}">
        <label>EPUB: </label>
        <input
          name="epubcfi"
          type="text"
          style="width: 400px;"
          value="${() => data.epubUri}"
          @input="${(e) => (data.epubUri = e.target.value)}"
        />

        <label>EPUB CFI: </label>
        <input
          name="epubcfi"
          type="text"
          style="width: 400px;"
          value="${() => data.cfi}"
          @input="${(e) => (data.cfi = e.target.value)}"
        />

        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>

    ${() => documentViews}
  </main>
`;

const documentViews = html`
  <div class="documents">
    ${() =>
      data.documents.map(
        ({ name, source }, index, entire) =>
          html`
            <details open>
              <summary><code>${name}</code></summary>
              <div class="document">
                <figure>
                  <!--<figcaption><code>${name}</code></figcaption>-->
                  <textarea readonly>
${source.trim().replace(/</g, "&lt;")}</textarea
                  >
                </figure>
              </div>
            </details>
          `
      )}
  </div>
`;

const style = html`
  <style>
    * {
      box-sizing: border-box;
    }
    details {
      & summary {
        cursor: pointer;
        user-select: none;
      }
    }
    .documents {
      display: flex;
      flex-direction: column;
      gap: 12px;

      & .document {
        height: 300px;
        overflow: hidden;

        & > * {
          height: 100%;
        }

        & figure {
          height: 100%;
          margin: 0;
          padding: 1em 40px;

          display: flex;
          flex-direction: column;

          & figcaption {
            flex: 0 0 24px;
          }

          & textarea {
            flex: 1 1 auto;
            /*padding: 4px;*/

            /*border: 1px solid #333;*/
            overflow: scroll;
          }
        }
      }
    }

    form.grid {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      /*column-gap: 16px;
      row-grap: 4px;*/
      gap: 4px 16px;
    }
  </style>
`;

const app = html` ${main} ${style} `;

app(document.getElementById("app")!);
