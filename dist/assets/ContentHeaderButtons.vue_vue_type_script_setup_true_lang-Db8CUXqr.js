import{d as C,k as d,aw as m,a as o,c as l,Y as c,F as u,C as v,Q as i,G as x,w as y,X as S,a0 as w,h as B,a6 as L,K as p,M as k,a2 as z,aj as I,au as N}from"./index-eLyz9_Ts.js";const T={class:"flex items-center"},V={class:"relative"},j={class:"flex items-center gap-1"},O={class:"z-20 overflow-hidden bg-white absolute left-0 min-w-[120px] text-left text-xs border shadow-sm rounded-md border-gray-300 dark:border-slate-600 dark:text-white dark:bg-dark font-roboto mt-1"},$=["onClick"],F=C({__name:"ContentHeaderButtons",props:{menuItems:{},customClassText:{},customBorder:{},customArrowClass:{}},setup(A){const a=d({}),b=t=>{const s={...a.value};Object.keys(s).forEach(e=>{e!==String(t)&&(s[e]=!1)}),s[t]=!a.value[t],a.value=s},n=d(0),_=(t,s)=>{t.action&&(n.value=s,t.action(s),setTimeout(()=>{a.value[t.id]=!1},100))},h=d(null);return m(h,()=>{a.value=Object.keys(a.value).reduce((t,s)=>(t[s]=!1,t),{})}),(t,s)=>(o(),l("div",{ref_key:"dropdownRef",ref:h,class:"menu-container"},[c("div",T,[(o(!0),l(u,null,v(t.menuItems,(e,g)=>(o(),l("div",{key:e.id,class:i(["flex items-center relative",{hidden:e.hidden}])},[c("div",V,[x(z,{type:"text",disabled:e.disabled,class:i([e.disabled?"text-gray-500":"",t.customClassText]),onClick:k(f=>{var r;return e.selectList?b(e.id):(r=e.action)==null?void 0:r.call(e)},["stop"])},{default:y(()=>[c("div",j,[S(w(e.label)+" ",1),e.selectList?(o(),B(L,{key:0,icon:"chevron-down",class:i(["transition-transform duration-200",{"rotate-180":a.value[e.id]}]),size:t.customArrowClass||"w-3 h-3"},null,8,["class","size"])):p("",!0)])]),_:2},1032,["disabled","class","onClick"]),I(c("ul",O,[(o(!0),l(u,null,v(e.selectList,(f,r)=>(o(),l("li",{key:r,class:i(["p-2 cursor-pointer transition hover:bg-primary hover:text-white font-bold",{"!bg-slate-400 text-white":n.value===r}]),onClick:k(D=>_(e,r),["stop"])},w(f),11,$))),128))],512),[[N,e.selectList&&a.value[e.id]]])]),g<t.menuItems.length-1?(o(),l("div",{key:0,class:i(["w-px h-4 bg-gray-300",t.customBorder])},null,2)):p("",!0)],2))),128))])],512))}});export{F as _};
