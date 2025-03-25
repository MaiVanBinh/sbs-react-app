import{dE as C,d as ee,k as te,a5 as ne,a as oe,h as re,w as $,X as F,Y as H,i as se,G as ie,a0 as le,j as ae,a2 as ce,a3 as de}from"./index-eLyz9_Ts.js";var ue=Object.defineProperty,O=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,B=(e,t)=>{for(var n in t||(t={}))he.call(t,n)&&I(e,n,t[n]);if(O)for(var n of O(t))pe.call(t,n)&&I(e,n,t[n]);return e},D=(e,t,n)=>new Promise((r,l)=>{var u=a=>{try{c(n.next(a))}catch(i){l(i)}},p=a=>{try{c(n.throw(a))}catch(i){l(i)}},c=a=>a.done?r(a.value):Promise.resolve(a.value).then(u,p);c((n=n.apply(e,t)).next())});function j(e){return!!e.shadowRoot}let V=!1;function me(){if(V)return;class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}}customElements.define("vue-to-print-shadow-dom",e),V=!0}const fe=`
  class VueToPrintShadowDom extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  }
  customElements.define('vue-to-print-shadow-dom', VueToPrintShadowDom);
`;function ge(e){const t=e.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("vue-to-print-custom-script","registry-shadow-dom"),t.innerHTML=fe,e.body.appendChild(t)}const ye=`
  function retrieveStyleSheets(styleSheetMap) {
    styleSheetMap.forEach((styleSheetStrings, tagName) => {
      const styleSheets = [];
      for (let i = styleSheetStrings.length; i--;) {
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(styleSheetStrings[i]);
        styleSheets.push(styleSheet);
      }

      const elements = document.querySelectorAll('vue-to-print-shadow-dom[original-tag-name=' + tagName + ']');
      for (let i = elements.length; i--;) {
        const element = elements[i];
        element.shadowRoot.adoptedStyleSheets = styleSheets;
      }
    });
  }
`;function we(e){const t=e.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("vue-to-print-custom-script","registry-retrieve-style-sheets-func"),t.innerHTML=ye,e.body.appendChild(t)}const M=new Map;function Y(e){me();const t=e.nodeName.toLowerCase(),n=e.shadowRoot.adoptedStyleSheets,r=document.createElement("vue-to-print-shadow-dom");r.setAttribute("original-tag-name",t),M.has(t)||M.set(t,new Set);const l=M.get(t);for(let c=n.length;c--;)l.add(n[c]);const u=r.attributes,p=e.attributes;for(let c=p.length;c--;)u.setNamedItem(p[c].cloneNode());return r}function be(){const e=new Map,t=new Map,n=Array.from(M.keys());for(let r=n.length;r--;){const l=[],u=n[r],p=Array.from(M.get(u));for(let c=p.length;c--;){const a=p[c];if(!t.has(a)){let i="";const o=Array.from(a.cssRules);for(let s=o.length;s--;)i+=o[s].cssText;t.set(a,i)}l.push(t.get(a))}e.set(u,l)}return e}function ve(e){const t=e.contentWindow||null;if(!t)throw new Error("Cannot access print window");const n=t.document;if(!n)throw new Error("Cannot access print document");ge(n),we(n);const r=be();t.retrieveStyleSheets(r)}function q(e){return!!customElements.get(e.nodeName.toLowerCase())}let G=!1;function Se(){if(G)return;class e extends HTMLElement{constructor(){super()}}customElements.define("vue-to-print-custom-element",e),G=!0}function z(e){Se();const t=e.nodeName.toLowerCase(),n=document.createElement("vue-to-print-custom-element");n.setAttribute("original-tag-name",t);const r=n.attributes,l=e.attributes;for(let u=l.length;u--;)r.setNamedItem(l[u].cloneNode());return n}function X(e){return D(this,null,function*(){e.getAttribute("src")&&(e.complete||(yield new Promise((t,n)=>{e.addEventListener("load",t,{once:!0}),e.addEventListener("error",r=>n(r.error),{once:!0})})))})}function Ee(e){return D(this,null,function*(){e.readyState>=2||(yield new Promise((t,n)=>{e.addEventListener("loadeddata",t,{once:!0}),e.addEventListener("error",r=>n(r.error),{once:!0}),e.addEventListener("stalled",()=>n(new Error("Loading video stalled, skipping")),{once:!0})}))})}function xe(e){const t=e.cloneNode(),n=t.getContext("2d");return n&&n.drawImage(e,0,0),t}function Ae(e,t){const n=e.cloneNode();return t.push(X(n)),n}function Ne(e,t){const n=e.cloneNode();n.preload="auto";const r=n.getAttribute("poster");if(r){const l=new Image;l.src=r,t.push(X(l))}else t.push(Ee(n));return n}function Pe(e){const t=e.cloneNode();switch(e.type){case"checkbox":case"radio":t.checked=e.checked;break;default:t.value=e.value;break}return t}function Ce(e){const t=e.cloneNode();return t.value=e.value,t}function Te(e){const t=e.cloneNode();return t.selected=e.selected,t}const U=new Map([["canvas",xe],["img",Ae],["video",Ne],["input",Pe],["select",Ce],["option",Te]]);function ke(e){return e.cloneNode()}function Le(e,t=[]){const n=e.nodeName.toLowerCase();return(U.has(n)?U.get(n):ke)(e,t)}function Me(e){var t;if(e.nodeName.toLowerCase()==="slot"){const n=e.assignedNodes();return n.length>0?n:Array.from(e.childNodes)}else return Array.from(((t=e.shadowRoot)!=null?t:e).childNodes)}function De(e){return D(this,null,function*(){const t=new Map,n=[];let r;j(e)?r=Y(e):q(e)?r=z(e):r=e.cloneNode(),t.set(e,r);const l=[e];for(;l.length;){const u=l.shift(),p=Me(u);if(p.length<=0)continue;const c=t.get(u),a=j(c)?c.shadowRoot:c;for(let i=0;i<p.length;i++){const o=p[i];let s;j(o)?s=Y(o):q(o)?s=z(o):s=Le(o,n),t.set(o,s),l.push(o),a.appendChild(s)}}return yield Promise.all(n),r})}const Re={copyStyles:!0,pageStyle:`
        @page {
            /* Remove browser default header (title) and footer (url) */
            margin: 0;
        }
        @media print {
            body {
                /* Tell browsers to print background colors */
                -webkit-print-color-adjust: exact; /* Chrome/Safari/Edge/Opera */
                color-adjust: exact; /* Firefox */
            }
        }
    `,removeAfterPrint:!1,suppressErrors:!1};function $e(e){e=B(B({},Re),e);let t=0,n=[],r=[];const l=o=>{const s=e.onAfterPrint,h=e.onPrintError,m=e.print,b=C(e.documentTitle);setTimeout(()=>{var v,x;if(o.contentWindow)if(o.contentWindow.focus(),m)Promise.resolve(m(o)).then(()=>s==null?void 0:s()).then(()=>a()).catch(d=>{h?h("print",d):i(["An error was thrown by the specified `print` function"])});else{if(o.contentWindow.print){const d=(x=(v=o.contentDocument)==null?void 0:v.title)!=null?x:"",R=o.ownerDocument.title;b&&(o.ownerDocument.title=b,o.contentDocument&&(o.contentDocument.title=b)),o.contentWindow.print(),b&&(o.ownerDocument.title=R,o.contentDocument&&(o.contentDocument.title=d))}else i(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);s==null||s(),a()}else i(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `vue-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"])},500)},u=o=>{const s=e.onBeforePrint,h=e.onPrintError;if(s){const m=s();m&&typeof m.then=="function"?m.then(()=>{l(o)}).catch(b=>{h&&h("onBeforePrint",b)}):l(o)}else l(o)},p=()=>{const o=e.onBeforeGetContent,s=e.onPrintError;if(o){const h=o();h&&typeof h.then=="function"?h.then(c).catch(m=>{s&&s("onBeforeGetContent",m)}):c()}else c()},c=()=>D(this,null,function*(){const o=C(e.bodyClass),s=C(e.content),h=C(e.copyStyles),m=C(e.fonts),b=C(e.pageStyle),v=C(e.nonce);let x;if(s instanceof HTMLElement?x=s:s.$el&&(x=s.$el.nodeName==="#text"?s.$el.parentElement:s.$el),x===void 0){i(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"]);return}if(x===null){i(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "vue-to-print" to be called.']);return}const d=document.createElement("iframe");d.width=`${document.documentElement.clientWidth}px`,d.height=`${document.documentElement.clientHeight}px`,d.style.position="absolute",d.style.top=`-${document.documentElement.clientHeight+100}px`,d.style.left=`-${document.documentElement.clientWidth+100}px`,d.id="printWindow",d.srcdoc="<!DOCTYPE html>";const R=x;if(!R){i(['"vue-to-print" could not locate the DOM node corresponding with the `content` prop']);return}const J=yield De(R),K=document.querySelectorAll("link[rel~='stylesheet']"),Q=m?m.length:0;t=K.length+Q,n=[],r=[];const A=(N,T)=>{if(n.includes(N)){i(["Tried to mark a resource that has already been handled",N],"debug");return}T?(i(['"vue-to-print" was unable to load a resource but will continue attempting to print the page',...T]),r.push(N)):n.push(N),n.length+r.length===t&&u(d)};d.onload=()=>D(this,null,function*(){var N,T;d.onload=null;const w=d.contentDocument||((N=d.contentWindow)==null?void 0:N.document);if(w){w.body.appendChild(J),m&&((T=d.contentDocument)!=null&&T.fonts&&typeof FontFace<"u"?m.forEach(f=>{const S=new FontFace(f.family,f.source,{weight:f.weight,style:f.style});d.contentDocument.fonts.add(S),S.loaded.then(()=>{A(S)}).catch(W=>{A(S,["Failed loading the font:",S,"Load error:",W])})}):(m.forEach(f=>A(f)),i(['"vue-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));const _=typeof b=="function"?b():b;if(typeof _!="string")i([`"vue-to-print" expected a "string" from \`pageStyle\` but received "${typeof _}". Styles from \`pageStyle\` will not be applied.`]);else{const f=w.createElement("style");v&&(f.setAttribute("nonce",v),w.head.setAttribute("nonce",v)),f.appendChild(w.createTextNode(_)),w.head.appendChild(f)}if(o&&w.body.classList.add(...o.split(" ")),h){const f=document.querySelectorAll("style, link[rel~='stylesheet']");for(let S=0,W=f.length;S<W;++S){const g=f[S];if(g.tagName.toLowerCase()==="style"){const y=w.createElement(g.tagName),E=g.sheet;if(E){let k="";try{const P=E.cssRules.length;for(let L=0;L<P;++L)typeof E.cssRules[L].cssText=="string"&&(k+=`${E.cssRules[L].cssText}\r
`)}catch{i(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",g],"warning")}y.setAttribute("id",`vue-to-print-${S}`),v&&y.setAttribute("nonce",v),y.appendChild(w.createTextNode(k)),w.head.appendChild(y)}}else if(g.getAttribute("href"))if(g.hasAttribute("disabled"))i(["`vue-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:",g],"warning"),A(g);else{const y=w.createElement(g.tagName);for(let E=0,k=g.attributes.length;E<k;++E){const P=g.attributes[E];P&&y.setAttribute(P.nodeName,P.nodeValue||"")}y.onload=()=>A(y),y.onerror=(E,k,P,L,Z)=>A(y,["Failed to load",y,"Error:",Z]),v&&y.setAttribute("nonce",v),w.head.appendChild(y)}else i(["`vue-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:",g],"warning"),A(g)}}}ve(d),(t===0||!h)&&u(d)}),a(!0),document.body.appendChild(d)}),a=o=>{const{removeAfterPrint:s}=e;if(o||s){const h=document.getElementById("printWindow");h&&document.body.removeChild(h)}},i=(o,s="error")=>{const{suppressErrors:h}=e;h||(s==="error"?console.error(o):s==="warning"?console.warn(o):s==="debug"&&console.debug(o))};return{handlePrint:p}}const _e={class:"sm:p-4 px-2 sm:px-4 md:px-6 xl:px-8 flex items-center justify-end gap-2 border-t border-gray-200"},je=ee({__name:"PrintModal",emits:["on-close"],setup(e,{emit:t}){const n=t,r=te(),{t:l}=ne(),{handlePrint:u}=$e({content:r,documentTitle:"AwesomeFileName",removeAfterPrint:!0}),p=()=>{u(),n("on-close")};return(c,a)=>(oe(),re(de,{"modal-class":"sm:w-full xl:w-[80vw] 2xl:w-[80vw] 2xl:min-w-[1000px] z-[1000]","content-class":"h-[80vh] !px-2 !py-1",onClose:a[0]||(a[0]=i=>n("on-close"))},{title:$(()=>a[1]||(a[1]=[F("Preview")])),content:$(()=>[H("div",{ref_key:"componentRef",ref:r},[se(c.$slots,"default")],512)]),bottom:$(()=>[H("div",_e,[ie(ce,{class:"w-20",onClick:p},{default:$(()=>[F(le(ae(l)("Modal.PrintModal.프린트")),1)]),_:1})])]),_:3}))}});export{je as _};
