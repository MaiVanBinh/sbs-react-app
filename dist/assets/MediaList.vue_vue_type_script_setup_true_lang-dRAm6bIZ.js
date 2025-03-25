import{d as w,a as l,c as _,aj as s,j as r,aN as c,h as i,ak as k,K as d,aG as B,am as y,aM as R,al as b}from"./index-eLyz9_Ts.js";import{r as g}from"./use-render-component-K20sHqiA.js";const j={class:"flex items-center space-x-1"},S=w({__name:"MediaAction",props:{title:{default:""},isShowConfirmButton:{type:Boolean,default:!0},isShowRejectButton:{type:Boolean,default:!0},isShowLinkButton:{type:Boolean,default:!0},isShowDeleteButton:{type:Boolean,default:!0}},emits:["on-request-confirm","on-reject","on-link","on-delete"],setup(a,{emit:u}){const o=u,t=()=>{o("on-link")},f=()=>{o("on-request-confirm")},m=()=>{o("on-reject")},p=()=>{o("on-delete")};return(n,e)=>(l(),_("div",j,[n.isShowConfirmButton?s((l(),i(k,{key:0,icon:"check-circle",title:n.title,onClick:f},null,8,["title"])),[[r(c),"검수요청"]]):d("",!0),n.isShowRejectButton?s((l(),i(k,{key:1,icon:"no-symbol",onClick:m},null,512)),[[r(c),"반려"]]):d("",!0),n.isShowLinkButton?s((l(),i(k,{key:2,icon:"arrow-top-right-on-square",onOnClick:t},null,512)),[[r(c),"MAM"]]):d("",!0),n.isShowDeleteButton?s((l(),i(B,{key:3,"button-type":"icon","icon-size":"w-5 h-5",title:`${n.title}`,onOnConfirm:p},null,8,["title"])),[[r(c),"휴지통"]]):d("",!0)]))}}),v={uploading:"gray",rendering_fail:"red",uploading_fail:"red",uploaded:"primary",checking:"blue",reviewing:"blue",reject:"red",approve:"green",send_start:"blue",send_fail:"red",send:"primary"},D=a=>v[a],M=w({__name:"MediaList",props:{isLoading:{type:Boolean,default:!1},rowData:{},selectedRowIndex:{default:0},hideActions:{type:Boolean,default:!1}},emits:["selected-rows","double-clicked-row","on-click-approve","on-click-reject","on-click-link","on-click-delete"],setup(a,{emit:u}){const o=a,t=u,f=e=>{const h=document.createElement("div"),C={title:e.data.contentTitle,contentId:1,onOnRequestConfirm:()=>{t("on-click-approve",e.data)},onOnReject:()=>{t("on-click-reject",e.data)},onOnLink:()=>{t("on-click-link",e.data)},onOnDelete:()=>{t("on-click-delete",e.data)}};return g(S,C,h)},m=[{headerName:"순번",field:"NO",filter:!1,hide:!1,sortable:!1,minWidth:60,maxWidth:60,valueGetter:"node.rowIndex",cellRenderer:e=>y(e)},{headerName:"상태",field:"statusCodeName",filter:!1,hide:!1,minWidth:100,headerClass:"justify-center",cellRenderer:R,cellRendererParams:e=>({text:e.value,color:D(e.data.statusCode)})},{headerName:"제목",field:"contentTitle",filter:!1,hide:!1,sortable:!1,minWidth:140},{headerName:"ACTIONS",field:"action",filter:!1,hide:o.hideActions,minWidth:160,cellRenderer:e=>f(e)}],p=e=>{t("selected-rows",e)},n=e=>{t("double-clicked-row",e)};return(e,h)=>(l(),i(b,{class:"w-full h-full flex flex-col","column-defs":m,"row-data":e.rowData,"is-loading":e.isLoading,filter:!1,sortable:!0,"suppress-movable":!1,onSelectedRows:p,onDoubleClickedRow:n},null,8,["row-data","is-loading"]))}});export{M as _,D as u};
