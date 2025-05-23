import{g as D,M as I}from"./splitpanes.es-dEoJOrhT.js";import{u as M}from"./use-dynamic-height-sJY6bk6Z.js";import{aO as B,aD as Y,l as $,k as p,ae as _,d as v,a as C,c as S,Y as m,G as d,j as i,as as G,Q as y,aj as R,au as j,a2 as q,F as N,o as x,ai as Q,w as f,ap as F}from"./index-eLyz9_Ts.js";import{w as H}from"./pagination-_g_gc7Ms.js";import{u as K}from"./use-pagination-JgK9yJDA.js";import{a as b}from"./journalist-QNhBHHjf.js";import"./organization-qjYuRO6g.js";import{u as z}from"./use-grid-T1qwEXJA.js";import{_ as T}from"./GDatePicker.vue_vue_type_style_index_0_lang-aP5TJiAZ.js";import{G as w}from"./GSingleSelect-7u8H0FdH.js";import{_ as W}from"./ContentHeaderButtons.vue_vue_type_script_setup_true_lang-Db8CUXqr.js";import{_ as J}from"./ProgramSelect.vue_vue_type_script_setup_true_lang-UHoCrnxw.js";import{u as X}from"./use-model-wrapper-XtiLc3Xd.js";import{_ as Z}from"./RequestCgTabPanel.vue_vue_type_script_setup_true_lang-M_q8k_mH.js";import"./use-date-GeeGTbYh.js";import"./vue-multiselect-Yz8FsF-E.js";import"./program-omP_c4K3.js";import"./make-grid-column-aeLSdEws.js";import"./html-dompurify.util-O5obI-gX.js";import"./purify.es-OZOo_0xz.js";import"./IconLabel.vue_vue_type_script_setup_true_lang-1rGRsbjZ.js";import"./FormLabel.vue_vue_type_script_setup_true_lang-SB4ukE1P.js";import"./FormItem.vue_vue_type_script_setup_true_lang-ZXQ_7x89.js";import"./request-graphic-xqdmz7er.js";import"./UserSearchModal.vue_vue_type_script_setup_true_lang-iHw_FmsN.js";import"./OrganizationSelect.vue_vue_type_script_setup_true_lang-BNuugYEX.js";import"./ConfirmModal.vue_vue_type_script_setup_true_lang-k_ZxaDhN.js";import"./FileListView.vue_vue_type_script_setup_true_lang-A40KFqZZ.js";import"./GNoData.vue_vue_type_script_setup_true_lang-rWUb5JCO.js";import"./GVideoPlayer-1SUF8s3O.js";import"./main-sHItgwS4.js";import"./vue.runtime.esm-bundler-3P3R-Xon.js";import"./FileDropzone.vue_vue_type_script_setup_true_lang-SVeHifZw.js";import"./CommentV2.vue_vue_type_script_setup_true_lang-bRF2pab6.js";const k=B("video-coverage",{actions:{async fetchRequestVideoCoverageList(e){try{return await Y().request.videoCoverage.findAll(e)}catch(n){console.error("store: fetchRequestVideoCoverageList Api Error",n)}}}});function ee(e){return{startDate:e.startDate,endDate:e.endDate}}function te(e,n,r){const o=k(),{fetchRequestVideoCoverageList:a}=o;return{getRequestVideoCoverageList:async()=>{var s;try{const t=H.default(ee({startDate:e.value.startDate,endDate:e.value.endDate}),n),u=await a(t);u.success&&((s=r==null?void 0:r.onListSuccess)==null||s.call(r,u.data))}catch(t){console.error("useRequestVideoCoverageActions getRequestVideoCoverageList Error",t)}}}}function oe(e){return{menuItems:$(()=>[{id:1,label:"신규",action:e.moveNewRequestVideoCoverage},{id:2,label:"의뢰"},{id:3,label:"승인"},{id:4,label:"배정"},{id:5,label:"취소"},{id:6,label:"검토"},{id:7,label:"삭제"},{id:8,label:"Post"},{id:9,label:"Excel"},{id:10,label:"인쇄"},{id:11,label:"닫기"}])}}function ae(e){return{onSearch:async()=>{var o;try{await((o=e==null?void 0:e.onSearch)==null?void 0:o.call(e))}catch(a){console.error("useRequestVideoCoverageSearchActions onSearch Error",a)}},onChangeDate:async o=>{var a,l;try{o&&((a=e==null?void 0:e.onUpdateSearchCondition)==null||a.call(e,{startDate:o,endDate:o})),await((l=e==null?void 0:e.onSearch)==null?void 0:l.call(e))}catch(s){console.error("useRequestVideoCoverageSearchActions onChangeDate Error",s)}},onUpdateSearchCondition:e==null?void 0:e.onUpdateSearchCondition}}function E(){const e={selectedRequestVideoCoverage:p()},n={requestVideoCoverageListData:p(),requestVideoCoverageDetailData:p()},r=p({startDate:_().format("YYYY-MM-DD"),endDate:_().format("YYYY-MM-DD"),statusCode:"",brdcPgmId:0}),o=p({status:void 0,program:void 0});return{...e,...n,requestVideoCoverageSearchCondition:r,filterState:o}}const re={REQUEST:{id:"request",name:"의뢰",label:"의뢰"},DISCUSSION:{id:"discussion",name:"협의중",label:"협의중"},APPROVED:{id:"approval",name:"승인완료",label:"승인완료"}},se=Object.values(re),ne={class:"flex flex-col"},ie=v({__name:"RequestVideoCoverageSelect",props:{modelValue:{default:""},placeholder:{default:"상태 별 전체"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},selectLabel:{default:"선택"},deselectLabel:{default:"취소"},allowEmpty:{type:Boolean,default:!0},searchable:{type:Boolean,default:!1},required:{type:Boolean,default:!1},width:{default:"w-28"}},emits:["update:modelValue","on-selected"],setup(e,{emit:n}){const r=e,o=n,a=X(r,o,"modelValue"),l=t=>{a.value=t,o("update:modelValue",t),o("on-selected",t)},s=()=>{a.value="",o("update:modelValue",""),o("on-selected","")};return(t,u)=>(C(),S("div",{class:y(t.width)},[m("div",ne,[d(w,{modelValue:i(a),"onUpdate:modelValue":u[0]||(u[0]=h=>G(a)?a.value=h:null),multiple:!1,"track-by":"id","item-label":"label",options:i(se),placeholder:t.placeholder,searchable:t.searchable,disabled:t.disabled||t.readonly,"select-label":t.selectLabel,"deselect-label":t.deselectLabel,"allow-empty":t.allowEmpty,required:t.required,"onSelect:value":l,"onRemove:value":s},null,8,["modelValue","options","placeholder","searchable","disabled","select-label","deselect-label","allow-empty","required"])])],2))}}),le={class:"flex items-center gap-2"},de={class:"flex gap-x-1"},ue={class:"flex items-center gap-x-1"},me={class:"flex justify-end"},ce=v({__name:"RequestVideoCoverageHeader",props:{menuItems:{},isShowSearch:{type:Boolean,default:!0}},emits:["click:search","on-change-date","on-change-status","on-change-program"],setup(e,{emit:n}){const r=n,o=E(),{filterState:a}=o,l={search:{onSearch:()=>{r("click:search")}},filter:{onChangeDate:s=>{r("on-change-date",s)},onChangeStatus:s=>{r("on-change-status",s.id)},onChangeProgrm:s=>{r("on-change-program",s.id||0)}}};return(s,t)=>(C(),S(N,null,[R(m("div",le,[m("div",null,[d(T,{class:"w-32","onUpdate:modelValue":l.filter.onChangeDate},null,8,["onUpdate:modelValue"])]),m("div",null,[d(w,{class:"w-28"})]),t[2]||(t[2]=m("div",null,null,-1)),m("div",de,[d(ie,{modelValue:i(a).status,"onUpdate:modelValue":t[0]||(t[0]=u=>i(a).status=u),onOnSelected:l.filter.onChangeStatus},null,8,["modelValue","onOnSelected"]),d(J,{modelValue:i(a).program,"onUpdate:modelValue":t[1]||(t[1]=u=>i(a).program=u),label:"",onOnSelected:l.filter.onChangeProgrm},null,8,["modelValue","onOnSelected"])]),m("div",ue,[d(q,{icon:"magnifying-glass",onClick:l.search.onSearch},null,8,["onClick"]),d(q,{"button-text":"상세검색"})])],512),[[j,s.isShowSearch]]),m("div",me,[d(W,{"menu-items":s.menuItems},null,8,["menu-items"])])],64))}}),Te=v({__name:"RequestVideoCoverageView",setup(e){const{dynamicHeightVh:n}=M("h-[74vh]","h-[80vh]"),{moveNewRequestVideoCoverage:r}=F(),o=b(),{scrollGrid:a}=z(),l=p(null),s=K(),t=E(),{requestVideoCoverageListData:u,requestVideoCoverageDetailData:h,requestVideoCoverageSearchCondition:g}=t,{getRequestVideoCoverageList:V}=te(g,s,{onListSuccess:c=>{u.value=c.content}}),{onSearch:L,onChangeDate:O}=ae({onSearch:async()=>{try{await V()}catch(c){console.error("Failed to get request video coverage list",c)}},onUpdateSearchCondition:c=>{g.value={...g.value,...c}}}),{menuItems:A}=oe({moveNewRequestVideoCoverage:r}),U=c=>{switch(c.srcKey){case"rightScroll":{a(l.value,"right");break}case"leftScroll":{a(l.value,"left");break}case"create":{r();break}}};return x(()=>{V(),o.setShortKey()}),(c,pe)=>{const P=Q("shortkey");return R((C(),S("div",{onShortkey:U},[d(ce,{"menu-items":i(A),"onClick:search":i(L),onOnChangeDate:i(O)},null,8,["menu-items","onClick:search","onOnChangeDate"]),m("div",null,[d(i(I),{class:"default-theme"},{default:f(()=>[d(i(D),{size:"50"},{default:f(()=>[m("div",{ref_key:"gridContainer",ref:l,class:y(i(n))},null,2)]),_:1}),d(i(D),null,{default:f(()=>[d(Z,{"detail-data":i(h)},null,8,["detail-data"])]),_:1})]),_:1})])],32)),[[P,i(o).currentShortkeys]])}}});export{Te as default};
