import{az as N,a as e,c as n,Y as d,d as _,ai as j,h as w,M as $,a6 as g,K as m,aj as F,G as y,al as P,am as U,k,c2 as G,l as T,o as Z,j as q,w as S,X as E,a3 as A,F as b,t as K,Q as H,C as Y,N as Q,a0 as X,y as V,e2 as J}from"./index-eLyz9_Ts.js";import{_ as I}from"./GNoData.vue_vue_type_script_setup_true_lang-rWUb5JCO.js";import{u as ee}from"./use-model-wrapper-XtiLc3Xd.js";import{G as te}from"./GVideoPlayer-1SUF8s3O.js";import{V as le}from"./main-sHItgwS4.js";const oe={},se={width:"14",height:"18",viewBox:"0 0 14 18",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function ne(l,t){return e(),n("svg",se,t[0]||(t[0]=[d("path",{d:"M13.53 5.97L8.03 0.47C7.89 0.33 7.7 0.25 7.5 0.25H3C1.48 0.25 0.25 1.48 0.25 3V15C0.25 16.52 1.48 17.75 3 17.75H11C12.52 17.75 13.75 16.52 13.75 15V6.5C13.75 6.3 13.67 6.11 13.53 5.97ZM8.25 2.81L11.19 5.75H8.25V2.81ZM11 16.25H3C2.31 16.25 1.75 15.69 1.75 15V3C1.75 2.31 2.31 1.75 3 1.75H6.75V6.5C6.75 6.91 7.09 7.25 7.5 7.25H12.25V15C12.25 15.69 11.69 16.25 11 16.25ZM11.22 9.72L9.72 14.72C9.63 15.02 9.35 15.24 9.03 15.25C9.02 15.25 9.01 15.25 9 15.25C8.69 15.25 8.42 15.06 8.3 14.78L7 11.52L5.7 14.78C5.58 15.08 5.29 15.27 4.97 15.25C4.65 15.24 4.38 15.02 4.28 14.72L2.78 9.72C2.66 9.32 2.89 8.9 3.28 8.79C3.68 8.67 4.09 8.9 4.21 9.29L5.09 12.23L6.29 9.22C6.52 8.65 7.46 8.65 7.68 9.22L8.88 12.23L9.76 9.29C9.88 8.89 10.3 8.67 10.69 8.79C11.09 8.91 11.31 9.33 11.19 9.72H11.22Z",fill:"currentColor"},null,-1)]))}const ae=N(oe,[["render",ne]]),re={},ie={width:"16",height:"12",viewBox:"0 0 16 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};function ce(l,t){return e(),n("svg",ie,t[0]||(t[0]=[d("path",{d:"M15.6704 2.14038C15.5815 1.79766 15.4032 1.4847 15.1537 1.23346C14.9042 0.982217 14.5925 0.801711 14.2504 0.710381C12.1764 0.465766 10.0887 0.355536 8.00041 0.380381C5.91214 0.355536 3.82445 0.465766 1.75041 0.710381C1.40832 0.801711 1.09662 0.982217 0.847133 1.23346C0.59765 1.4847 0.419335 1.79766 0.330408 2.14038C0.103218 3.41433 -0.00724024 4.70635 0.000408357 6.00038C-0.00762317 7.30105 0.102833 8.59975 0.330408 9.88038C0.423943 10.2176 0.604306 10.5243 0.853483 10.77C1.10266 11.0156 1.41193 11.1916 1.75041 11.2804C3.82445 11.525 5.91214 11.6352 8.00041 11.6104C10.0887 11.6352 12.1764 11.525 14.2504 11.2804C14.5889 11.1916 14.8982 11.0156 15.1473 10.77C15.3965 10.5243 15.5769 10.2176 15.6704 9.88038C15.898 8.59975 16.0084 7.30105 16.0004 6.00038C16.0081 4.70635 15.8976 3.41433 15.6704 2.14038ZM6.36041 8.39038V3.63038L10.5504 6.00038L6.36041 8.38038V8.39038Z",fill:"currentColor"},null,-1)]))}const ue=N(re,[["render",ce]]),de={class:"flex flex-col w-full"},fe={class:"flex flex-wrap p-1 gap-1 items-center"},pe=_({__name:"FileActions",props:{params:{}},setup(l){return(t,o)=>{const s=j("tooltip");return e(),n("div",de,[d("div",fe,[t.params.showOpenWindowIcon?(e(),w(g,{key:0,size:"w-4 h-4","aria-hidden":"true",icon:"arrow-top-right-on-square",class:"cursor-pointer",onClick:o[0]||(o[0]=$(a=>t.params.openWindow(t.params),["stop","prevent"]))})):m("",!0),t.params.isReadOnly?m("",!0):F((e(),w(g,{key:1,icon:"trash","aria-hidden":"true",size:"w-4 h-4",class:"cursor-pointer",onClick:o[1]||(o[1]=$(a=>t.params.onDeleteFile(a,t.params.data),["stop","prevent"]))},null,512)),[[s,"삭제"]]),F(y(g,{"aria-hidden":"true",icon:"inbox-arrow-down",size:"w-4 h-4",class:"cursor-pointer",onClick:o[2]||(o[2]=$(a=>t.params.onDownloadFile(t.params.data),["stop","prevent"]))},null,512),[[s,"다운로드"]])])])}}}),me=_({__name:"FileLIst",props:{isLoading:{type:Boolean},rowData:{},isReadOnly:{type:Boolean},headerHeight:{default:25},rowHeight:{default:25},showOpenWindowIcon:{type:Boolean,default:!0}},emits:["on-download-file","on-delete-file","selected-rows"],setup(l,{emit:t}){const o=l,s=t,a=[{headerName:"순번",filter:!1,maxWidth:60,valueGetter:"node.rowIndex",cellRenderer:i=>U(i),cellClass:"text-center"},{headerName:"파일명",field:"fileName",filter:!1,cellClass:"text-center"},{headerName:"",maxWidth:100,filter:!1,cellRenderer:pe,cellRendererParams:i=>({...i,isReadOnly:o.isReadOnly,showOpenWindowIcon:o.showOpenWindowIcon,openWindow:f=>{console.log(f,"새창열기 작업해줘야함")},onDownloadFile:f=>{s("on-download-file",f,f.ord)},onDeleteFile:(f,x)=>{s("on-delete-file",x,x.ord,f)}})}],c=i=>{s("selected-rows",i)};return(i,f)=>(e(),w(P,{"column-defs":a,"row-data":i.rowData,filter:!1,sortable:!1,"suppress-movable":!1,"row-selection":"single","header-height":i.headerHeight,"row-height":i.rowHeight,onSelectedRows:c},null,8,["row-data","header-height","row-height"]))}}),we=_({__name:"PDFViewer",props:{url:{}},setup(l){const t=l,o=k(),s=G(),a=T(()=>s.value?"dark":"light"),c=k({toolbar:{toolbarViewerRight:{presentationMode:!0,openFile:!0,print:!1,download:!1,viewBookmark:!1}},secondaryToolbar:!1});return Z(()=>{setTimeout(()=>{o.value=t.url},1e3)}),(i,f)=>(e(),w(q(le),{theme:a.value,pdf:i.url,config:c.value,"page-scale":"page-fit"},null,8,["theme","pdf","config"]))}}),he={class:"flex flex-col h-full"},ve=["src"],ye=_({__name:"ExtensionContainer",props:{url:{default:""},thumbnail:{default:""}},setup(l){const t=k(!1),o=()=>{t.value=!0};return(s,a)=>(e(),n("div",he,[d("div",{class:"h-full bg-slate-400 w-full cursor-pointer",onClick:o},[d("img",{class:"w-full h-full object-contain",src:s.thumbnail,alt:""},null,8,ve)]),t.value?(e(),w(A,{key:0,overflow:"overflow-y-hidden","modal-class":"sm:w-[90vw]","content-class":"h-[85vh] flex justify-center",onClose:a[0]||(a[0]=c=>t.value=!1)},{title:S(()=>a[1]||(a[1]=[E(" 첨부파일 ")])),content:S(()=>[y(we,{url:s.url},null,8,["url"])]),_:1})):m("",!0)]))}}),Ce={class:"flex flex-col w-full min-h-64 justify-center items-center mb-2 bg-gray-400/10 rounded dark:text-slate-300 ov"},ge=["src"],ke={key:1,class:"w-full h-full"},_e={key:2,class:"w-full h-full"},xe=_({__name:"FilePreview",props:{url:{type:String,required:!0},type:{type:String,default:""},thumbnail:{type:String,default:""}},setup(l){const t=l,o=T(()=>{const s={image:["image"],video:["video","audio"],document:["document"],null:["sequnce","premiere","project","web-nle"]};return Object.keys(s).find(c=>s[c].includes(t.type))||""});return(s,a)=>(e(),n("div",Ce,[l.url?(e(),n(b,{key:0},[o.value==="image"?(e(),n("img",{key:0,class:"w-full h-full object-contain",src:l.url,alt:""},null,8,ge)):o.value==="video"?(e(),n("div",ke,[y(te,{"video-source":{src:l.url}},null,8,["video-source"])])):o.value==="document"?(e(),n("div",_e,[y(ye,{url:l.url,thumbnail:l.thumbnail},null,8,["url","thumbnail"])])):m("",!0)],64)):(e(),w(I,{key:1,class:"w-full"}))]))}}),be={key:0},$e=["src","alt"],De={key:1},Fe={controls:"",class:"w-full"},Le=["src"],Re={class:"flex justify-between items-center text-xs font-semibold"},Ve={class:"flex items-center gap-1"},Be={class:"text-[10px]"},Oe={class:"flex items-center space-x-1.5"},Se={key:1,class:"h-full items-center"},Me=_({__name:"FileListView",props:{fileData:{type:Array,required:!0,default:()=>[]},mode:{type:String,required:!0},isPreview:{type:Boolean,default:!1},isReadOnly:{type:Boolean,default:!1},isShowDownloadBtn:{type:Boolean,default:!0},isShowFile:{type:Boolean,default:!1},fileListCustomClass:{type:String,default:""},isHideNoData:{type:Boolean,default:!1}},emits:["on-download-file","on-delete-file","on-clicked-row"],setup(l,{emit:t}){const o=l,s=t,a=ee(o,s,"fileData"),c=k(),i=k(),f=k(""),x=(p,h)=>{s("on-download-file",p,h)},B=(p,h,C)=>{s("on-delete-file",p,h,C)},L="http://192.168.1.11:9000/api/files",M=p=>{i.value=p[0].data,f.value=`${L}/${i.value.fileName}`},W=p=>{var h;return((h=p.split(".").pop())==null?void 0:h.toLowerCase())??""},z=()=>{if(a.value.length===0){c.value=[];return}const p=["docm","docx","dot","doc"],h=["jpg","webp","png","svg","raw","jpeg","tiff","gif","bmp"],C=["mp4","webm","ogv","mov"],D=["xls","xlsx"];c.value=a.value.map(v=>{const u=v instanceof File?{name:v.name,size:v.size,type:v.type}:v;u.fileUrl&&!u.fileUrl.startsWith(L)&&(u.fileUrl=`${L}/${u.fileUrl}`);const r=W(u.name);return p.includes(r)?{...u,type:"word",icon:V(ae)}:h.includes(r)?{...u,type:"image"}:C.includes(r)?{...u,type:"video",icon:V(ue)}:D.includes(r)?{...u,type:"excel",icon:V(J)}:u})};return K(()=>a.value,()=>{z()},{immediate:!0,deep:!0}),(p,h)=>{var D,v,u;const C=j("tooltip");return e(),n(b,null,[(D=c.value)!=null&&D.length?(e(),n("div",{key:0,class:H(["flex flex-col rounded dark:text-slate-300",{"h-full m-h-50":l.isPreview}])},[l.isPreview?(e(),n(b,{key:0},[y(xe,{url:f.value,type:(v=i.value)==null?void 0:v.fileType},null,8,["url","type"]),y(me,{"row-data":c.value,"is-read-only":l.isReadOnly,onOnDownloadFile:x,onOnDeleteFile:B,onSelectedRows:M},null,8,["row-data","is-read-only"])],64)):(e(),n("div",{key:1,class:H(["w-full p-2 space-y-2 flex flex-col",l.fileListCustomClass])},[(e(!0),n(b,null,Y(c.value,(r,R)=>(e(),n("div",{key:R,class:"cursor-default space-y-2 border border-primary-gray-60 rounded-[4px] p-1 py-0.5 dark:text-white"},[l.isShowFile?(e(),n(b,{key:0},[r.type==="image"?(e(),n("div",be,[d("img",{src:r.fileUrl,alt:r.fileNm,class:"w-full"},null,8,$e)])):r.type==="video"?(e(),n("div",De,[d("video",Fe,[d("source",{src:r.fileUrl},null,8,Le)])])):m("",!0)],64)):m("",!0),d("div",Re,[d("div",Ve,[r.icon?(e(),w(Q(r.icon),{key:0,class:"mr-2 w-4"})):(e(),w(g,{key:1,icon:"paper-clip",size:"w-4 h-4",class:"mr-2 w-4"})),d("p",Be,X(r==null?void 0:r.name),1)]),d("div",Oe,[l.isShowDownloadBtn?F((e(),w(g,{key:0,icon:"arrow-down-tray",size:"w-[17px] h-[17px]",class:"cursor-pointer",onClick:$(O=>x(r,R),["prevent"])},null,8,["onClick"])),[[C,"다운로드"]]):m("",!0),l.isReadOnly?m("",!0):F((e(),w(g,{key:1,icon:"x-mark",size:"w-5 h-5",class:"cursor-pointer",onClick:$(O=>B(r,R,O),["prevent"])},null,8,["onClick"])),[[C,"삭제"]])])])]))),128))],2))],2)):m("",!0),!((u=c.value)!=null&&u.length)&&!l.isHideNoData?(e(),n("div",Se,[y(I)])):m("",!0)],64)}}});export{xe as _,Me as a,me as b};
