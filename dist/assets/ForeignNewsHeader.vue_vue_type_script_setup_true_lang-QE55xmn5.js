import{aO as C,aD as h,k as d,ae as L,l as N,d as g,a as y,c as v,Y as b,G as c,j as m,as as S,aj as R,au as T,a2 as w,$ as _,Q as I}from"./index-eLyz9_Ts.js";import{c as O,a as k,u as A,b as F}from"./index.esm-Hbr0u7mK.js";import"./journalist-QNhBHHjf.js";import"./organization-qjYuRO6g.js";import{_ as D}from"./GDatePicker.vue_vue_type_style_index_0_lang-aP5TJiAZ.js";import{G as V}from"./GSingleSelect-7u8H0FdH.js";import{u as E}from"./use-model-wrapper-XtiLc3Xd.js";import{_ as B}from"./ContentHeaderButtons.vue_vue_type_script_setup_true_lang-Db8CUXqr.js";const te=C("foreign-news",{state:()=>({}),getters:{},actions:{async fetchForeignNewsList(o){try{return await h().foreignNews.basic.findAll(o)}catch(a){console.error("store: fetchForeignNewsList api Error",a)}},async fetchForeignNews(o){try{return await h().foreignNews.basic.findOne(o)}catch(a){console.error("store: fetchForeignNews api Error",a)}},async createForeignNews(o){try{return await h().foreignNews.basic.create(o)}catch(a){console.error("store: createForeignNews api Error",a)}}}}),P=O({titl:k().required("제목을 입력해주세요")});function oe(){const{handleSubmit:o}=A({validationSchema:P,validateOnMount:!1}),{value:a,errorMessage:t}=F("titl",void 0,{validateOnValueUpdate:!1});return{titl:a,titlError:t,handleSubmit:o}}function Y(){const o={selectedRowIndex:d(0),selectedItem:d()},a={foreignNewsListData:d([]),foreignNewsItemData:d()},t={foreignNewsSearchCondition:d({rcvDtm:L().format("YYYY-MM-DD"),rcvYn:!1})},s=d(!1),l=N(()=>o.selectedItem.value),u=d({itemType:void 0,channelType:void 0});return{...o,...a,...t,showReceivedList:s,hasSelectedItem:l,filterState:u}}const $={NORTH_KOREA:{id:"0001",name:"북한",label:"북한"},FOREIGN_PRESS:{id:"0002",name:"외신",label:"외신"},PRESS_PRODUCTION:{id:"0003",name:"보도제작",label:"보도제작"},PLANNED_COVERAGE:{id:"0004",name:"기획취재",label:"기획취재"},TAPE_RECORDING:{id:"0005",name:"테잎녹취",label:"테잎녹취"},ETC:{id:"0006",name:"기타",label:"기타"}},q=Object.values($),U={class:"flex flex-col"},M=g({__name:"ForeignNewsItemSelect",props:{modelValue:{default:""},placeholder:{default:"아이템타입"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},selectLabel:{default:"선택"},deselectLabel:{default:"취소"},allowEmpty:{type:Boolean,default:!0},searchable:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},emits:["update:modelValue","on-selected"],setup(o,{emit:a}){const t=o,s=a,l=E(t,s,"modelValue"),u=e=>{l.value=e.id,s("update:modelValue",String(e.id)),s("on-selected",e)},i=()=>{l.value="",s("update:modelValue",""),s("on-selected",{id:"",name:"",label:""})};return(e,r)=>(y(),v("div",null,[b("div",U,[c(V,{modelValue:m(l),"onUpdate:modelValue":r[0]||(r[0]=n=>S(l)?l.value=n:null),multiple:!1,"track-by":"id","item-label":"label",intent:"primary",options:m(q),placeholder:e.placeholder,searchable:e.searchable,disabled:e.disabled||e.readonly,"select-label":e.selectLabel,"deselect-label":e.deselectLabel,"allow-empty":e.allowEmpty,required:e.required,"onSelect:value":u,"onRemove:value":i},null,8,["modelValue","options","placeholder","searchable","disabled","select-label","deselect-label","allow-empty","required"])])]))}}),j={APTN:{id:"APTN",name:"APTN",label:"APTN"},RTV:{id:"RTV",name:"RTV",label:"RTV"},CNN:{id:"CNN",name:"CNN",label:"CNN"}},G=Object.values(j),H={class:"flex flex-col"},x=g({__name:"ForeignNewsReceiveSelect",props:{modelValue:{default:""},placeholder:{default:"수신채널"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},selectLabel:{default:"선택"},deselectLabel:{default:"취소"},allowEmpty:{type:Boolean,default:!0},searchable:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},emits:["update:modelValue","on-selected"],setup(o,{emit:a}){const t=o,s=a,l=E(t,s,"modelValue"),u=e=>{l.value=e.id,s("update:modelValue",String(e.id)),s("on-selected",e)},i=()=>{l.value="",s("update:modelValue",""),s("on-selected",{id:"",name:"",label:""})};return(e,r)=>(y(),v("div",null,[b("div",H,[c(V,{modelValue:m(l),"onUpdate:modelValue":r[0]||(r[0]=n=>S(l)?l.value=n:null),multiple:!1,"track-by":"id","item-label":"label",intent:"primary",options:m(G),placeholder:e.placeholder,searchable:e.searchable,disabled:e.disabled||e.readonly,"select-label":e.selectLabel,"deselect-label":e.deselectLabel,"allow-empty":e.allowEmpty,required:e.required,"onSelect:value":u,"onRemove:value":i},null,8,["modelValue","options","placeholder","searchable","disabled","select-label","deselect-label","allow-empty","required"])])]))}}),z={class:"flex items-center gap-2"},K={class:"flex items-center gap-x-1"},se=g({__name:"ForeignNewsHeader",props:{menuItems:{},isShowSearch:{type:Boolean,default:!0}},emits:["click:search","on-change-date","on-change-item-type","on-change-channel-type","on-toggle-exclusition-received-list"],setup(o,{emit:a}){const t=a,s=Y(),{filterState:l}=s,u=d(!1),i=d(!1),e=N(()=>i.value),r={search:{onSearch:()=>{t("click:search")},onDetailSearch:()=>{console.log("detail search logic.")}},filter:{onChangeDate:n=>{t("on-change-date",n)},onChangeItemType:n=>{t("on-change-item-type",n.id)},onChangeChannelType:n=>{t("on-change-channel-type",n)}},toggle:{onExclusionReceivedList:()=>{i.value=!i.value,i.value&&(l.value.channelType=void 0),t("on-toggle-exclusition-received-list",i.value)}}};return(n,p)=>(y(),v("div",{class:I(["border-t flex items-center m-[-0.5rem] mb-0 px-2 py-1 min-h-[50px] bg-primary-gray-900 border-b border-primary-gray-surface-500 dark:bg-dark",n.isShowSearch?"justify-between":"justify-end"])},[R(b("div",z,[c(D,{class:"w-[9rem]",intent:"primary","onUpdate:modelValue":r.filter.onChangeDate},null,8,["onUpdate:modelValue"]),c(M,{modelValue:m(l).itemType,"onUpdate:modelValue":p[0]||(p[0]=f=>m(l).itemType=f),class:"w-[7rem]",onOnSelected:r.filter.onChangeItemType},null,8,["modelValue","onOnSelected"]),c(x,{modelValue:m(l).channelType,"onUpdate:modelValue":p[1]||(p[1]=f=>m(l).channelType=f),class:"w-[7rem]",disabled:e.value,onOnSelected:r.filter.onChangeChannelType},null,8,["modelValue","disabled","onOnSelected"]),b("div",K,[c(w,{icon:"magnifying-glass",type:"tertiary",onClick:r.search.onSearch},null,8,["onClick"]),c(w,{"button-text":"상세검색",type:"tertiary",onClick:r.search.onDetailSearch},null,8,["onClick"]),c(_,{modelValue:u.value,"onUpdate:modelValue":p[2]||(p[2]=f=>u.value=f),label:"수신제외",checked:i.value,onChange:r.toggle.onExclusionReceivedList},null,8,["modelValue","checked","onChange"])])],512),[[T,n.isShowSearch]]),b("div",null,[c(B,{"menu-items":n.menuItems},null,8,["menu-items"])])],2))}});export{$ as I,se as _,Y as a,oe as b,M as c,x as d,te as u};
