(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const C=new Set,j=new Set;function S(s){return typeof s=="function"&&!!s.isT}function A(s){return typeof s=="object"&&s!==null&&"$on"in s&&typeof s.$on=="function"}function J(s){return"$on"in s}function K(s){return(e,r)=>{function n(){const t=Array.from(C);C.clear();const o=Array.from(j);j.clear(),t.forEach(i=>i(e,r)),o.forEach(i=>i()),C.size&&setTimeout(n)}C.size||setTimeout(n),C.add(s)}}const x=new Map;function T(s,e={}){if(A(s)||typeof s!="object")return s;const r=e.o||new Map,n=e.op||new Map,t=Array.isArray(s),o=[],i=t?[]:Object.create(s,{});for(const d in s){const h=s[d];typeof h=="object"&&h!==null?(i[d]=A(h)?h:T(h),o.push(d)):i[d]=h}const f=d=>(h,y)=>{let p=r.get(h),w=n.get(y);p||(p=new Set,r.set(h,p)),w||(w=new Set,n.set(y,w)),p[d](y),w[d](h)},l=f("add"),a=f("delete"),u=(d,h,y)=>{r.has(d)&&r.get(d).forEach(p=>p(h,y))},m={$on:l,$off:a,_em:u,_st:()=>({o:r,op:n,r:i,p:g._p}),_p:void 0},g=new Proxy(i,{has(d,h){return h in m||h in d},get(...d){const[,h]=d;if(Reflect.has(m,h))return Reflect.get(m,h);const y=Reflect.get(...d);return Q(g,h),t&&h in Array.prototype?Y(h,i,g,y):y},set(...d){const[h,y,p]=d,w=Reflect.get(h,y);if(Reflect.has(m,y))return Reflect.set(m,y,p);if(p&&A(w)){const N=w,I=N._st(),_=A(p)?Z(p,N):T(p,I);return Reflect.set(h,y,_),u(y,_),I.o.forEach((xe,R)=>{const B=Reflect.get(w,R),U=Reflect.get(_,R);B!==U&&N._em(R,U,B)}),!0}const E=Reflect.set(...d);return E&&(w!==p&&u(y,p,w),g._p&&g._p[1]._em(...g._p)),E}});return e.p&&(g._p=e.p),o.map(d=>{g[d]._p=[d,g]}),g}function Q(s,e){x.forEach(r=>{let n=r.get(s);n||(n=new Set,r.set(s,n)),n.add(e)})}function Y(s,e,r,n){const t=(...o)=>{const i=Array.prototype[s].call(e,...o);if(e.forEach((f,l)=>r._em(String(l),f)),r._p){const[f,l]=r._p;l._em(f,r)}return i};switch(s){case"shift":case"pop":case"sort":case"reverse":case"copyWithin":return t;case"unshift":case"push":case"fill":return(...o)=>t(...o.map(i=>T(i)));case"splice":return(o,i,...f)=>t(o,i,...f.map(l=>T(l)));default:return n}}function Z(s,e){const r=e._st();return r.o&&r.o.forEach((n,t)=>{n.forEach(o=>{s.$on(t,o)})}),r.p&&(s._p=r.p),s}function H(s,e){const r=Symbol();x.has(r)||x.set(r,new Map);let n=new Map;const t=K(o);function o(){x.set(r,new Map);const i=s(),f=x.get(r);return x.delete(r),n.forEach((l,a)=>{const u=f.get(a);u&&u.forEach(c=>l.delete(c)),l.forEach(c=>a.$off(c,t))}),f.forEach((l,a)=>{l.forEach(u=>a.$on(u,t))}),n=f,e?e(i):i}return J(s)&&s.$on(o),o()}const L=new WeakMap,q={},V="➳❍",X="❍⇚",z=`<!--${V}-->`,ee=`<!--${X}-->`;function W(s,...e){const r=[];let n="";const t=(f,l)=>{if(typeof f=="function"){let a=()=>{};return r.push(Object.assign((...u)=>f(...u),{e:f,$on:u=>{a=u},_up:u=>{f=u,a()}})),l+z}return Array.isArray(f)?f.reduce((a,u)=>t(u,a),l):l+f},o=()=>(n||(!e.length&&s.length===1&&s[0]===""?n="<!---->":n=s.reduce(function(l,a,u){return l+=a,e[u]!==void 0?t(e[u],l):l},"")),n),i=f=>{const l=G(o()),a=D(l,{i:0,e:r});return f?a(f):a()};return i.isT=!0,i._k=0,i._h=()=>[o(),r,i._k],i.key=f=>(i._k=f,i),i}function D(s,e){const r=document.createDocumentFragment();let n;for(;n=s.item(0);){if(n.nodeType===8&&n.nodeValue===V){r.append(oe(n,e));continue}n instanceof Element&&te(n,e),n.hasChildNodes()&&D(n.childNodes,e)(n),r.append(n),n instanceof HTMLOptionElement&&(n.selected=n.defaultSelected)}return t=>t?(t.appendChild(r),t):r}function te(s,e){var r;const n=[];let t=0,o;for(;o=s.attributes[t++];){if(e.i>=e.e.length)return;if(o.value!==z)continue;let i=o.name;const f=e.e[e.i++];if(i.charAt(0)==="@"){const l=i.substring(1);s.addEventListener(l,f),L.has(s)||L.set(s,new Map),(r=L.get(s))===null||r===void 0||r.set(l,f),n.push(i)}else{const l=i==="value"&&"value"in s||i==="checked"||i.startsWith(".")&&(i=i.substring(1));H(f,a=>{l&&(s[i]=a,s.getAttribute(i)!=a&&(a=!1)),a!==!1?s.setAttribute(i,a):(s.removeAttribute(i),t--)})}}n.forEach(i=>s.removeAttribute(i))}function ne(s){s.forEach(re)}function re(s){var e;s.remove(),(e=L.get(s))===null||e===void 0||e.forEach((r,n)=>s.removeEventListener(n,r))}function oe(s,e){const r=document.createDocumentFragment();s.remove();const n=e.e[e.i++];if(n&&S(n.e))r.appendChild(k().add(n.e)());else{let t;r.appendChild((t=H(n,o=>ie(o,t)))())}return r}function ie(s,e){const r=typeof e=="function",n=r?e:k();return Array.isArray(s)?s.forEach(t=>n.add(t)):n.add(s),r&&n._up(),n}function G(s){var e;const n=((e=q[s])!==null&&e!==void 0?e:(()=>{const t=document.createElement("template");return t.innerHTML=s,q[s]=t})()).content.cloneNode(!0);return n.normalize(),n.childNodes}function k(s=Symbol()){let e="",r={i:0,e:[]},n=[],t=[];const o=new Map,i=[],f=()=>{let m;if(n.length||a(),n.length===1&&!S(n[0].tpl)){const g=n[0];g.dom.length?g.dom[0].nodeValue=g.tpl:g.dom.push(document.createTextNode(g.tpl)),m=g.dom[0]}else m=u(D(G(e),r)());return l(),m};f.ch=()=>t,f.l=0,f.add=m=>{if(!m&&m!==0)return f;let g=[],d,h="";S(m)&&([h,g,d]=m._h()),e+=h,e+=ee;const y=d&&o.get(d),p=y||{html:h,exp:g,dom:[],tpl:m,key:d};return n.push(p),d&&(y?y.exp.forEach((w,E)=>w._up(g[E].e)):o.set(d,p)),r.e.push(...g),f.l++,f},f._up=()=>{const m=k(s);let g=0,d=t[0].dom[0];n.length||a(document.createComment(""));const h=()=>{if(!m.l)return;const p=m(),w=p.lastChild;d[g?"after":"before"](p),c(m,n,g),d=w};n.forEach((p,w)=>{const E=t[w];p.key&&p.dom.length?(h(),(!E||E.dom!==p.dom)&&d[w?"after":"before"](...p.dom),d=p.dom[p.dom.length-1]):E&&p.html===E.html&&!E.key?(h(),E.exp.forEach((N,I)=>N._up(p.exp[I].e)),p.exp=E.exp,p.dom=E.dom,d=p.dom[p.dom.length-1],se(p)&&d instanceof Text&&(d.nodeValue=p.tpl)):(E&&p.html!==E.html&&!E.key&&i.push(...E.dom),m.l||(g=w),m.add(p.tpl))}),h();let y=d==null?void 0:d.nextSibling;for(;y&&s in y;)i.push(y),y=y.nextSibling;ne(i),l()};const l=()=>{i.length=0,e="",f.l=0,r={i:0,e:[]},t=[...n],n=[]},a=m=>{e="<!---->",n.push({html:e,exp:[],dom:m?[m]:[],tpl:W`${e}`,key:0})},u=m=>{let g=0;const d=[];return m.childNodes.forEach(h=>{if(h.nodeType===8&&h.data===X){g++,d.push(h);return}Object.defineProperty(h,s,{value:s}),n[g].dom.push(h)}),d.forEach(h=>h.remove()),m},c=(m,g,d)=>{m.ch().forEach((h,y)=>{g[d+y].dom=h.dom})};return f}function se(s){return s.dom.length===1&&!S(s.tpl)}const v=W,fe=T,{ELEMENT_NODE:M,TEXT_NODE:$,CDATA_SECTION_NODE:P}=(()=>{let s=1,e=3,r=4;return typeof Node>"u"?(s=1,e=3,r=4):(s=Node.ELEMENT_NODE,e=Node.TEXT_NODE,r=Node.CDATA_SECTION_NODE),{ELEMENT_NODE:s,TEXT_NODE:e,CDATA_SECTION_NODE:r}})();function le(s){return s.replace(/[\[\]\^,();]/g,"^$&")}function ae(s,e,r){r=r??0;let n=[],t=0;do{const o=s.match(e);if(!o)break;const i=o.index;n.push(i+r),t+=i+o.length,s=s.slice(i+o.length)}while(t<s.length);return n}function ce(s,e){let r=1/0,n,t;for(let o=0;o<s.length;o++)n=Math.abs(s[o]-e),(!o||n<r)&&(n=r,t=s[o]);return t}function ue(s,e,r){let n=0,t=!1,o=0,i=!0;for(let f=0;f<s.length;f++){const l=s[f];if(l.nodeType===M){if(t||i?(n+=2,i=!1):n++,e===l)return l.tagName.toLowerCase()==="img"?{count:n,offset:r}:{count:n};o=0,t=!0}else if(l.nodeType===$||l.nodeType===P){if((t||i)&&(n++,i=!1),e===l)return{count:n,offset:(r??0)+o};o+=(l.textContent??"").length,t=!1}else continue}throw new Error("The specified node was not found in the array of siblings")}function de(s,e){function r(o){return typeof o=="number"}const n=r(s),t=r(e);return n&&t?(s||0)-(e||0):!n&&t?-1:n&&!t?1:0}function he(s,e){if(!s&&!e)return 0;if(!s&&e)return-1;if(s&&!e)return 1;let r=(s.y||0)-(e.y||0);return r||(s.x||0)-(e.x||0)}class F{constructor(e,r){this.opts=Object.assign({flattenRange:!1,stricter:!0},r||{}),this.cfi=e;const n=new RegExp(/^epubcfi\((.*)\)$/);e=e.trim();let t=e.match(n);if(!t)throw new Error("Not a valid CFI");if(t.length<2)return;e=t[1],this.parts=[];let o=[],i=0;for(;e.length;){const{parsed:f,offset:l,newDoc:a}=this.parse(e);if(!f||l===null)throw new Error("Parsing failed");if(i&&a)throw new Error("CFI is a range that spans multiple documents. This is not allowed");o.push(f),(a||e.length-l<=0)&&(i===2?this.to=o:this.parts.push(o),o=[]),e=e.slice(l),e[0]===","&&(i===0?(o.length&&this.parts.push(o),o=[]):i===1&&(o.length&&(this.from=o),o=[]),e=e.slice(1),i++)}Array.isArray(this.from)&&(this.opts.flattenRange||!Array.isArray(this.to)?(this.parts=this.parts.concat(this.from),delete this.from,delete this.to):this.isRange=!0),this.opts.stricter&&this.removeIllegalOpts()}removeIllegalOpts(e=void 0){let r;if(e)r=e;else if(this.from){if(this.removeIllegalOpts(this.from),!this.to)return;r=this.to}else r=this.parts;for(let n=0;n<r.length;n++){const t=r[n];for(let o=0;o<t.length-1;o++){const i=t[o];delete i.temporal,delete i.spatial,delete i.offset,delete i.textLocationAssertion}}}static generatePart(e,r,n){var i;let t="",o=((i=e.parentNode)==null?void 0:i.nodeName)==="spine";for(;e.parentNode;){const f=ue(e.parentNode.childNodes,e,r);!t&&f.offset&&(t=":"+f.offset);const l=e.id;if(t="/"+f.count+(l?`[${le(l)}]`:"")+t,e=e.parentNode,o&&e.nodeName==="package")break}return t}static generate(e,r,n){let t;if(e instanceof Array){let o=[];for(let i of e)o.push(this.generatePart(i.node,i.offset));t=o.join("!")}else t=this.generatePart(e,r,n);return n&&(t+=n),`epubcfi(${t})`}static toParsed(e){const r=typeof e=="string"?new F(e):e;return r.isRange?r.getFrom():r.get()}static comparePath(e,r){const n=Math.max(e.length,r.length);for(let t=0;t<n;t++){const o=e[t],i=r[t];if(!o)return-1;if(!i)return 1;const f=this.compareParts(o,i);if(f)return f}return 0}static sort(e){e.sort((r,n)=>this.compare(r,n))}static compare(e,r){let n=e.get(),t=r.get();function o(i,f){return i.isRange&&"isRange"in f}if(o(e,n)||o(r,t)){if(o(e,n)&&o(r,t)){let i=this.comparePath(n.from,t.from);return i||this.comparePath(n.to,t.to)}return o(e,n)&&(n=n.from),o(r,t)&&(t=t.from),this.comparePath(n,t)}else return this.comparePath(n,t)}static compareParts(e,r){const n=Math.max(e.length,r.length);for(let t=0;t<n;t++){const o=e[t],i=r[t];if(!o)return-1;if(!i)return 1;let f=o.nodeIndex-i.nodeIndex;if(f)return f;if(o.nodeIndex===0)return 0;if(!(t<n-1)&&(o.nodeIndex%2===0&&(f=de(o.temporal,i.temporal),f||(f=he(o.spatial,i.spatial),f))||(f=(o.offset||0)-(i.offset||0),f)))return f}return 0}decodeEntities(e,r){try{const n=e.createElementNS("http://www.w3.org/1999/xhtml","textarea");return n.innerHTML=r,n.value}catch{return r}}trueLength(e,r){return this.decodeEntities(e,r).length}getFrom(){if(!this.isRange)throw new Error("Trying to get beginning of non-range CFI");if(!this.from)return this.deepClone(this.parts);const e=this.deepClone(this.parts);return e[e.length-1]=e[e.length-1].concat(this.from),e}getTo(){if(!this.isRange)throw new Error("Trying to get end of non-range CFI");const e=this.deepClone(this.parts);return e[e.length-1]=e[e.length-1].concat(this.to),e}get(){return this.isRange?{from:this.getFrom(),to:this.getTo(),isRange:!0}:this.deepClone(this.parts)}parseSideBias(e,r){if(!r)return;const n=r.trim().match(/^(.*);s=([ba])$/);if(!n||n.length<3){typeof e.textLocationAssertion=="object"?e.textLocationAssertion.post=r:e.textLocationAssertion=r;return}n[1]&&(typeof e.textLocationAssertion=="object"?e.textLocationAssertion.post=n[1]:e.textLocationAssertion=n[1]),n[2]==="a"?e.sideBias="after":e.sideBias="before"}parseSpatialRange(e){if(!e)return;const r=e.trim().match(/^([\d\.]+):([\d\.]+)$/);if(!r||r.length<3)return;const n={x:parseInt(r[1]),y:parseInt(r[2])};if(!(typeof n.x!="number"||typeof n.y!="number"))return n}parse(e){let r={};const n=new RegExp(/[\d]/);let t=null,o=null,i=null,f=!1,l=!1,a=!1,u;for(u=0;u<=e.length;u++){const c=u<e.length?e[u]:"";if(c==="^"&&!f){f=!0;continue}if(o==="/")if(c.match(n)){t?t+=c:t=c,f=!1;continue}else t&&(r.nodeIndex=parseInt(t),t=null),i=o,o=null;if(o===":")if(c.match(n)){t?t+=c:t=c,f=!1;continue}else t&&(r.offset=parseInt(t),t=null),i=o,o=null;if(o==="@"){let m=!1;if(c.match(n)||c==="."||c===":"?c===":"&&(l?m=!0:l=!0):m=!0,m)i=o,o=null,t&&l&&(r.spatial=this.parseSpatialRange(t)),t=null;else{t?t+=c:t=c,f=!1;continue}}if(o==="~")if(c.match(n)||c==="."){t?t+=c:t=c,f=!1;continue}else t&&(r.temporal=parseFloat(t)),i=o,o=null,t=null;if(!o){if(c==="!"){u++,o=c;break}if(c===",")break;if(c==="/"){if(a)break;a=!0,i=o,o=c,f=!1;continue}if(c===":"||c==="~"||c==="@"){if(this.opts.stricter&&(c===":"&&(typeof r.temporal<"u"||typeof r.spatial<"u")||(c==="~"||c==="@")&&typeof r.offset<"u"))break;i=o,o=c,f=!1,l=!1;continue}if(c==="["&&!f&&i===":"){i=o,o="[",f=!1;continue}if(c==="["&&!f&&i==="/"){i=o,o="nodeID",f=!1;continue}}if(o==="["){c==="]"&&!f?(i=o,o=null,this.parseSideBias(r,t),t=null):c===","&&!f?(r.textLocationAssertion=t?{pre:t}:{},t=null):t?t+=c:t=c,f=!1;continue}if(o==="nodeID"){c==="]"&&!f?(i=o,o=null,r.nodeID=t,t=null):t?t+=c:t=c,f=!1;continue}f=!1}if(!r.nodeIndex&&r.nodeIndex!==0)throw new Error("Missing child node index in CFI");return{parsed:r,offset:u,newDoc:o==="!"}}getChildNodeByCFIIndex(e,r,n,t){const o=r.childNodes;if(!o.length)return{node:r,offset:0};if(n<=0)return{node:o[0],relativeToNode:"before",offset:0};let i=0,f;for(let l=0;l<o.length;l++){const a=o[l];switch(a.nodeType){case M:if(i%2===0){if(i+=2,i>=n)return a.tagName.toLowerCase()==="img"&&t?{node:a,offset:t}:{node:a,offset:0}}else{if(i+=1,i===n)return a.tagName.toLowerCase()==="img"&&t?{node:a,offset:t}:{node:a,offset:0};if(i>n)return f?{node:f,offset:this.trueLength(e,f.textContent??"")}:{node:r,offset:0}}f=a;break;case $:case P:if((i===0||i%2===0)&&(i+=1),i===n){let u=this.trueLength(e,a.textContent??"");if(t>u)t-=u;else return{node:a,offset:t}}f=a;break;default:continue}}if(n>i){const l={node:f||r,offset:0,relativeToNode:"after"};return f?l.node=f:l.node=r,this.isTextNode(l.node)&&(l.offset=this.trueLength(e,String((l.node.textContent??"").length))),l}throw new Error("this probably should not happen")}isTextNode(e){return e?e.nodeType===$||e.nodeType===P:!1}correctOffset(e,r,n,t){let o=r,i="";if(typeof t=="string"?i=this.decodeEntities(e,t):(t.pre=this.decodeEntities(e,t.pre),t.post=this.decodeEntities(e,t.post),i=t.pre+"."+t.post),!this.isTextNode(r))return{node:r,offset:0};for(;this.isTextNode(o.previousSibling);)o=o.previousSibling;const f=o,l=[];let a,u="",c=0;for(;this.isTextNode(o)&&(a=this.decodeEntities(e,o.textContent??""),l[c]=a.length,u+=a,!!o.nextSibling);)o=o.nextSibling,c++;const m=typeof t!="string"&&"pre"in t?t.pre.length:0,g=ae(u,new RegExp(i),m);if(!g.length)return{node:r,offset:n};let d=ce(g,n);if(o===r&&d===n)return{node:r,offset:n};for(c=0,o=f;d>=l[c];){if(d-=l[c],d<0)return{node:r,offset:n};if(!o.nextSibling||c+1>=l.length)return{node:r,offset:n};c++,o=o.nextSibling}return{node:o,offset:d}}resolveNode(e,r,n,t){if(t=Object.assign({},t||{}),!n)throw new Error("Missing DOM argument");let o=null;if(e===0&&(o=n.querySelector("package")),!o){for(let u of n.childNodes)if(u.nodeType===M){o=u;break}}if(!o)throw new Error("Doc incompatible with CFIs");let i=o,f=0,l;for(let u=r.length-1;u>=0;u--)if(l=r[u],!t.ignoreIDs&&l.nodeID&&(i=n.getElementById(l.nodeID))){f=u+1;break}i||(i=o);let a={node:i,offset:0};for(let u=f;u<r.length;u++)l=r[u],a=this.getChildNodeByCFIIndex(n,a.node,l.nodeIndex,l.offset),l.textLocationAssertion&&(a=this.correctOffset(n,a.node,l.offset,l.textLocationAssertion));return a}resolveURI(e,r,n){if(n=n||{},e<0||e>this.parts.length-2)throw new Error("index is out of bounds");const t=this.parts[e];if(!t)throw new Error("Missing CFI part for index: "+e);let i=this.resolveNode(e,t,r,n).node;const f=i.tagName.toLowerCase();if(f==="itemref"&&i.parentNode.tagName.toLowerCase()==="spine"){const l=i.getAttribute("idref");if(!l)throw new Error("Referenced node had not 'idref' attribute");const a=r.getElementById(l);if(!a)throw new Error("Specified node is missing from manifest");i=a;const u=i.getAttribute("href");if(!u)throw new Error("Manifest item is missing href attribute");return u}if(f==="iframe"||f==="embed"){const l=i.getAttribute("src");if(!l)throw new Error(f+" element is missing 'src' attribute");return l}if(f==="object"){const l=i.getAttribute("data");if(!l)throw new Error(f+" element is missing 'data' attribute");return l}if(f==="image"||f==="use"){const l=i.getAttribute("xlink:href");if(!l)throw new Error(f+" element is missing 'xlink:href' attribute");return l}throw new Error("No URI found")}deepClone(e){return structuredClone(e)}resolveLocation(e,r){const n=r.length-1,t=r[n];if(!t)throw new Error("Missing CFI part for index: "+n);const o=this.resolveNode(n,t,e),{nodeIndex:i,...f}=this.deepClone(t[t.length-1]),l=Object.assign({},f,o);return f.offset||delete l.offset,l}resolveLast(e,r){if(r=Object.assign({range:!1},r||{}),!this.isRange)return this.resolveLocation(e,this.parts);if(r.range){const n=e.createRange(),t=this.getFrom();t.relativeToNode==="before"?n.setStartBefore(t.node,t.offset):t.relativeToNode==="after"?n.setStartAfter(t.node,t.offset):n.setStart(t.node,t.offset);const o=this.getTo();return o.relativeToNode==="before"?n.setEndBefore(o.node,o.offset):o.relativeToNode==="after"?n.setEndAfter(o.node,o.offset):n.setEnd(o.node,o.offset),n}return{from:this.resolveLocation(e,this.getFrom()),to:this.resolveLocation(e,this.getTo()),isRange:!0}}async fetchAndParse(e){return new Promise((r,n)=>{const t=new XMLHttpRequest;t.open("GET",e),t.responseType="document",t.onload=function(){if(t.readyState===t.DONE){if(t.status<200||t.status>=300){n(new Error("Failed to get: "+e));return}r(t.responseXML)}},t.onerror=function(){n(new Error("Failed to get: "+e))},t.send()})}async resolve(e,r,n){if(r&&typeof r!="function"&&(n=r,r=null),!r){if(typeof XMLHttpRequest>"u")throw new Error("XMLHttpRequest not available. You must supply a function as the second argument.");r=this.fetchAndParse}const t=r;let o,i;typeof e=="string"?o=e:i=e;for(let f=0;f<this.parts.length-1;f++)o&&(i=await t(o)),o=this.resolveURI(f,i,n);return o&&(i=await t(o)),this.resolveLast(i,n)}}const b=fe({epubUri:"./example/content.opf",cfi:"epubcfi(/6/4[chap01ref]!/4[body01]/10[para05]/3:10)",documents:[],result:null,resultText:null});let O=location.href;function pe(s){if(O)try{new URL(s)}catch{s=new URL(s,O).href}return O=s,s}async function me(){b.documents=[];const s=new F(b.cfi),e=await s.resolve(b.epubUri,async r=>{r=pe(r);const n=await s.fetchAndParse(r);return ge(r,n),n});console.log("🚀 ~ file: epubcfi.ts:21 ~ onSubmit ~ bookmark:",JSON.stringify(e.node.textContent),e.node.parentNode,e),b.result=e,b.resultText=e.node.textContent}function ge(s,e){if(!e)return e;const r=s.split("/").at(-1)??"",n=e.documentElement.outerHTML;b.documents.push({name:r,source:n})}const ye=v`
  <main>
    <div style="margin: 12px;">
      <form
        class="grid"
        @submit="${s=>{s.preventDefault(),me()}}"
      >
        <label>EPUB: </label>
        <input
          name="epubcfi"
          type="text"
          style="width: 400px;"
          placeholder="http://uri.to/content.opf"
          value="${()=>b.epubUri}"
          @input="${s=>b.epubUri=s.target.value}"
        />

        <label>EPUB CFI: </label>
        <input
          name="epubcfi"
          type="text"
          style="width: 400px;"
          value="${()=>b.cfi}"
          @input="${s=>b.cfi=s.target.value}"
        />

        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>

    <div class="results">
      ${()=>b.resultText?v`
              <div>
                <textarea readonly>${b.resultText??""}</textarea>
              </div>
            `:"none"}
      ${()=>we}
    </div>
  </main>
`,we=v`
  <div class="documents">
    ${()=>b.documents.map(({name:s,source:e},r,n)=>v`
            <details open>
              <summary><code>${s}</code></summary>
              <div class="document">
                <figure>
                  <!--<figcaption><code>${s}</code></figcaption>-->
                  <textarea readonly>
${e.trim().replace(/</g,"&lt;")}</textarea
                  >
                </figure>
              </div>
            </details>
          `)}
  </div>
`,Ee=v`
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
`,be=v` ${ye} ${Ee} `;be(document.getElementById("app"));
