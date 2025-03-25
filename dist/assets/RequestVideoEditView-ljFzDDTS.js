import{g as Y,M as ee}from"./splitpanes.es-dEoJOrhT.js";import{u as te}from"./use-dynamic-height-sJY6bk6Z.js";import{l as O,k as g,ae as H,d as R,a as v,c as N,Y as o,G as e,j as b,as as oe,Q as E,h as S,w as r,X as P,a1 as y,a2 as p,K as D,a3 as U,aj as L,au as j,a0 as ne,B as ae,am as le,al as F,ai as se,$ as ie,t as re,a7 as de,an as B,ao as ue,o as me}from"./index-eLyz9_Ts.js";import{w as ce}from"./pagination-_g_gc7Ms.js";import{u as K}from"./request-video-E7HyVAPm.js";import{u as fe}from"./use-pagination-JgK9yJDA.js";import{_ as pe}from"./GDatePicker.vue_vue_type_style_index_0_lang-aP5TJiAZ.js";import{_ as ve}from"./ContentHeaderButtons.vue_vue_type_script_setup_true_lang-Db8CUXqr.js";import{_ as he}from"./OrganizationSelect.vue_vue_type_script_setup_true_lang-BNuugYEX.js";import{u as X}from"./use-model-wrapper-XtiLc3Xd.js";import{a as _e}from"./request-video-status-code-xC1SmtSe.js";import{G as J}from"./GSingleSelect-7u8H0FdH.js";import{_ as ge}from"./ProgramSelect.vue_vue_type_script_setup_true_lang-UHoCrnxw.js";import{_}from"./FormItem.vue_vue_type_script_setup_true_lang-ZXQ_7x89.js";import{_ as Z}from"./UserSearchModal.vue_vue_type_script_setup_true_lang-iHw_FmsN.js";import{c as w}from"./make-grid-column-aeLSdEws.js";import{_ as ye}from"./BaseList.vue_vue_type_script_setup_true_lang-aJzIAVm-.js";import{G as M}from"./GTextarea-5GIFD2Mo.js";import{_ as A}from"./IconLabel.vue_vue_type_script_setup_true_lang-1rGRsbjZ.js";import{_ as be}from"./ConfirmModal.vue_vue_type_script_setup_true_lang-k_ZxaDhN.js";import{G as we}from"./GVideoPlayer-1SUF8s3O.js";import{G as Ve}from"./GDateTimePicker-bSYwb_xW.js";import"./use-date-GeeGTbYh.js";import"./organization-qjYuRO6g.js";import"./vue-multiselect-Yz8FsF-E.js";import"./program-omP_c4K3.js";import"./journalist-QNhBHHjf.js";/* empty css                                                                  *//* empty css                                                                        */function Se(a){return{startDate:a.startDate,endDate:a.endDate}}function Ce(a,d,t){const i=K(),{fetchRequestVideoList:l,startRequestVideo:n,cancelRequestVideo:u,changeRequestVideoDeadLine:c}=i;return{getRequestVideoEditList:async()=>{var f;try{const s=ce.default(Se({startDate:a.value.startDate,endDate:a.value.endDate}),d),m=await l(s);m.success&&((f=t==null?void 0:t.onListSuccess)==null||f.call(t,m.data))}catch(s){console.error("useRequestVideoActions getRequestCgList Error",s)}},processRequestVideoEdit:async f=>{var s;try{const m=await n(f);m.success&&((s=t==null?void 0:t.onListSuccess)==null||s.call(t,m.data))}catch(m){console.error("useRequestVideoActions processVideoEditRequest Error",m)}},cancelRequestVideoEdit:async f=>{var s;try{const m=await u(f);m.success&&((s=t==null?void 0:t.onCancelSuccess)==null||s.call(t,m.data))}catch(m){console.error("useRequestVideoActions cancelRequestVideoEdit Error",m)}},changeRequesetVideoEditDeadLine:async(f,s)=>{var m;try{const I=await c(f,s);I.success&&((m=t==null?void 0:t.onChangeDeadLineSuccess)==null||m.call(t,I.data))}catch(I){console.error("useRequestVideoActions changeRequesetVideoEdit Error",I)}}}}function qe(a){return{menuItems:O(()=>[{id:1,label:"작업",action:a.onWorking},{id:2,label:"취소",action:a.onCancel},{id:3,label:"요청변경",action:()=>a.toggleModal("requestChange")},{id:4,label:"인쇄",selectList:["기본","목록"]},{id:5,label:"Excel"},{id:6,label:"Post"},{id:7,label:"닫기"}])}}function xe(){const a=g({requestChange:!1});return{modals:a,toggleModal:t=>{a.value[t]=!a.value[t]}}}function $e(a){return{onSearch:async()=>{var i;try{await((i=a==null?void 0:a.onSearch)==null?void 0:i.call(a))}catch(l){console.error("useRequestVideoSearchActions onSearch Error",l)}},onChangeDate:async i=>{var l,n;try{i&&((l=a==null?void 0:a.onUpdateSearchCondition)==null||l.call(a,{startDate:i,endDate:i})),await((n=a==null?void 0:a.onSearch)==null?void 0:n.call(a))}catch(u){console.error("useRequestVideoSearchActions onChangeDate Error",u)}},onUpdateSearchCondition:a==null?void 0:a.onUpdateSearchCondition}}function Re(){const a={selectedRowIndex:g(0)},d={requestVideoEditListData:g()},t=g({startDate:H().format("YYYY-MM-DD"),endDate:H().format("YYYY-MM-DD")});return{...a,...d,requestVideoSearchCondition:t}}const De={class:"flex flex-col"},Ee=R({__name:"RequestVideoStatusSelect",props:{modelValue:{default:""},placeholder:{default:"상태 별 전체"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},selectLabel:{default:"선택"},deselectLabel:{default:"취소"},allowEmpty:{type:Boolean,default:!0},searchable:{type:Boolean,default:!1},required:{type:Boolean,default:!1},width:{default:"w-28"}},emits:["update:modelValue","on-selected"],setup(a,{emit:d}){const t=a,i=d,l=X(t,i,"modelValue"),n=c=>{l.value=c,i("update:modelValue",c),i("on-selected",c)},u=()=>{l.value="",i("update:modelValue",""),i("on-selected","")};return(c,h)=>(v(),N("div",{class:E(c.width)},[o("div",De,[e(J,{modelValue:b(l),"onUpdate:modelValue":h[0]||(h[0]=C=>oe(l)?l.value=C:null),multiple:!1,"track-by":"id","item-label":"label",intent:"primary",options:b(_e),placeholder:c.placeholder,searchable:c.searchable,disabled:c.disabled||c.readonly,"select-label":c.selectLabel,"deselect-label":c.deselectLabel,"allow-empty":c.allowEmpty,required:c.required,"onSelect:value":n,"onRemove:value":u},null,8,["modelValue","options","placeholder","searchable","disabled","select-label","deselect-label","allow-empty","required"])])],2))}}),Ne={class:"flex flex-col justify-center items-center space-y-2"},Ie={class:"flex justify-center pb-2"},T="primary",Le=R({__name:"SmsDeskConfigModal",emits:["close","on-submit"],setup(a,{emit:d}){const t=d,i=g({userSearch:!1}),l=g(""),n=g(""),u=g(""),c=g(0),h=g(0),C=g(0),q=g(null),V={button:{userSearch:f=>{q.value=f,i.value.userSearch=!i.value.userSearch},cancel:f=>{f==="edit"&&(l.value=""),f==="digital1"&&(n.value=""),f==="digital2"&&(u.value=""),f==="edit"&&(c.value=0),f==="digital1"&&(h.value=0),f==="digital2"&&(C.value=0)}},modal:{userSelect:f=>{if(q.value&&f.length){const s=f[0];q.value==="edit"?(l.value=s.userNm||"",c.value=Number(s.id)||0):q.value==="digital1"?(n.value=s.userNm||"",h.value=Number(s.id)||0):q.value==="digital2"&&(u.value=s.userNm||"",C.value=Number(s.id)||0)}i.value.userSearch=!1,q.value=null}}};return(f,s)=>(v(),S(U,{"modal-class":"w-1/3",onClose:s[10]||(s[10]=m=>t("close"))},{title:r(()=>s[11]||(s[11]=[P("SMS설정(데스크)")])),content:r(()=>[o("div",Ne,[o("div",null,[e(_,{label:"영상편집"},{default:r(()=>[e(y,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=m=>l.value=m),intent:T},null,8,["modelValue"]),e(p,{icon:"users",onClick:s[1]||(s[1]=m=>V.button.userSearch("edit"))}),e(p,{"button-text":"취소",type:"warning",onClick:s[2]||(s[2]=m=>V.button.cancel("edit"))})]),_:1})]),o("div",null,[e(_,{label:"디지털1"},{default:r(()=>[e(y,{modelValue:n.value,"onUpdate:modelValue":s[3]||(s[3]=m=>n.value=m),intent:T},null,8,["modelValue"]),e(p,{icon:"users",onClick:s[4]||(s[4]=m=>V.button.userSearch("digital1"))}),e(p,{"button-text":"취소",type:"warning",onClick:s[5]||(s[5]=m=>V.button.cancel("digital1"))})]),_:1})]),o("div",null,[e(_,{label:"디지털2"},{default:r(()=>[e(y,{modelValue:u.value,"onUpdate:modelValue":s[6]||(s[6]=m=>u.value=m),intent:T},null,8,["modelValue"]),e(p,{icon:"users",onClick:s[7]||(s[7]=m=>V.button.userSearch("digital2"))}),e(p,{"button-text":"취소",type:"warning",onClick:s[8]||(s[8]=m=>V.button.cancel("digital2"))})]),_:1})])]),i.value.userSearch?(v(),S(Z,{key:0,onSelectedRow:V.modal.userSelect,onClose:s[9]||(s[9]=()=>i.value.userSearch=!1)},null,8,["onSelectedRow"])):D("",!0)]),bottom:r(()=>[o("div",Ie,[e(p,{"button-text":"저장"})])]),_:1}))}}),Me={class:"flex flex-wrap items-start"},We={class:"flex items-center gap-2 flex-1 min-w-[1000px]"},Be={class:"flex items-center gap-x-1"},Ae={class:"flex justify-end"},Ge="primary",Te=R({__name:"RequestVideoEditHeader",props:{menuItems:{},isShowSearch:{type:Boolean,default:!0}},emits:["click:search","on-change-date"],setup(a,{emit:d}){const t=d,i=g({smsConfig:!1}),l={search:{onSearch:()=>{t("click:search")}},filter:{onChangeDate:n=>{t("on-change-date",n)}},modal:{smsConfig:()=>{i.value.smsConfig=!i.value.smsConfig}}};return(n,u)=>(v(),N("div",Me,[o("div",{class:E(["w-full flex flex-wrap items-center gap-2 m-[-0.5rem] mb-0 px-2 py-2 bg-primary-gray-900 border-y border-primary-gray-surface-500 dark:bg-dark",n.isShowSearch?"justify-between":"justify-end"])},[L(o("div",We,[o("div",null,[e(pe,{class:"w-[9rem]",intent:Ge,"onUpdate:modelValue":l.filter.onChangeDate},null,8,["onUpdate:modelValue"])]),u[1]||(u[1]=o("div",{class:"w-px h-4 bg-gray-400"},null,-1)),o("div",null,[e(he,{"hide-first-depth":""})]),u[2]||(u[2]=o("div",{class:"w-px h-4 bg-gray-400"},null,-1)),o("div",null,[e(Ee)]),u[3]||(u[3]=o("div",{class:"w-px h-4 bg-gray-400"},null,-1)),o("div",null,[e(ge,{class:"w-32",label:""})]),o("div",Be,[e(p,{icon:"magnifying-glass",onClick:l.search.onSearch},null,8,["onClick"]),e(p,{"button-text":"상세검색"}),e(p,{"button-text":"SMS 데스크 설정",onClick:l.modal.smsConfig},null,8,["onClick"]),u[0]||(u[0]=o("span",{class:"text-xs"},ne("영상편집데스크: name"),-1))])],512),[[j,n.isShowSearch]]),o("div",Ae,[e(ve,{"menu-items":n.menuItems},null,8,["menu-items"])]),i.value.smsConfig?(v(),S(Le,{key:0,onClose:l.modal.smsConfig},null,8,["onClose"])):D("",!0)],2)]))}}),je=R({__name:"RequestVideoEditList",props:{rowData:{},pageInfo:{}},setup(a){const d=[w({headerName:"NO",minWidth:80,valueGetter:"node.rowIndex",cellRenderer:t=>le(t)}),w({headerName:"취재부서",minWidth:100,field:"reporterDepartmentName",sortable:!0}),w({headerName:"취재기자",minWidth:100,field:"reporterName",sortable:!0}),w({headerName:"편집기자",minWidth:100,field:"editorName",sortable:!0}),w({headerName:"편집상태",minWidth:100}),w({headerName:"제목",minWidth:200,flex:1,field:"title"}),w({headerName:"프로그램명",minWidth:100,field:"brdcPgmNm"}),w({headerName:"편집데스크",minWidth:120}),w({headerName:"취소구분",minWidth:120,field:"requestStatusCodeName"}),w({headerName:"편집실",minWidth:120,field:"editRoom"})];return(t,i)=>(v(),S(ye,ae({"column-defs":d,"row-data":t.rowData,"page-info":t.pageInfo},t.$attrs),null,16,["row-data","page-info"]))}}),Oe={officeCode:[{id:"0001",label:"편집실401"},{id:"0002",label:"편집실402"},{id:"0003",label:"편집실403"},{id:"0004",label:"편집실404"},{id:"0005",label:"편집실405"},{id:"0006",label:"편집실406"},{id:"0007",label:"편집실407"},{id:"0008",label:"편집실408"},{id:"0009",label:"편집실409"},{id:"0010",label:"편집실410"},{id:"0011",label:"편집실411"},{id:"0012",label:"편집실412"},{id:"0013",label:"편집실313"},{id:"0014",label:"편집실314"},{id:"0015",label:"편집실315"},{id:"0016",label:"편집실316"},{id:"0017",label:"편집실317"},{id:"0018",label:"편집실318"},{id:"0019",label:"편집실319"},{id:"0020",label:"편집실320"},{id:"0021",label:"편집실321"},{id:"0022",label:"편집실322"},{id:"0023",label:"편집실323"},{id:"0024",label:"편집실324"},{id:"0029",label:"편집실325"},{id:"0030",label:"편집실326"},{id:"0031",label:"편집실327"},{id:"0032",label:"편집실328"},{id:"9001",label:"데스크1"},{id:"9002",label:"데스크2"},{id:"9003",label:"디지털뉴스편집부"},{id:"9004",label:"디지털뉴스제작부"}]},Pe=Oe,Ue={class:"flex flex-col"},Ye=R({__name:"EditorOfficeSelect",props:{modelValue:{default:""},ariaLabel:{default:""},label:{default:"편집실"},placeholder:{default:"편집실 선택"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},selectLabel:{default:"선택"},deselectLabel:{default:"취소"},allowEmpty:{type:Boolean,default:!1},width:{default:"w-32"}},emits:["update:modelValue","on-selected","on-removed"],setup(a,{emit:d}){const t=a,i=d,l=X(t,i,"modelValue"),n=O(()=>Pe.officeCode.map(h=>({value:h.id,label:h.label}))),u=h=>{l.value=h,i("update:modelValue",h),i("on-selected",h)},c=()=>{l.value="",i("on-removed")};return(h,C)=>(v(),N("div",Ue,[e(J,{"model-value":b(l),class:E(h.width),intent:"primary","track-by":"value","item-label":"label",options:n.value,"onSelect:value":u,"onRemove:value":c},null,8,["model-value","class","options"])]))}}),He={class:"space-y-2"},ze={class:"flex justify-between gap-2"},Qe={class:"h-[200px]"},Fe={class:"flex justify-center pb-2"},z="primary",Ke=R({__name:"EditorManagerModal",setup(a){const d=g(!1),t=g(!1),i=[w({headerName:"",checkboxSelection:!0}),w({headerName:"부서",sortable:!0}),w({headerName:"편집기자",sortable:!0}),w({headerName:"편집실",sortable:!0}),w({headerName:"비고"})];return(l,n)=>(v(),S(U,{"modal-class":"w-1/2"},{title:r(()=>n[3]||(n[3]=[P("편집기자/편집실관리")])),content:r(()=>[o("div",He,[o("div",ze,[o("div",null,[e(_,{label:"편집기자"},{default:r(()=>[e(y,{intent:z}),e(y,{intent:z}),e(p,{icon:"users",onClick:n[0]||(n[0]=u=>d.value=!0)})]),_:1})]),o("div",null,[e(_,{label:"편집실"},{default:r(()=>[e(Ye),e(p,{"button-text":"등록"})]),_:1})])]),o("div",Qe,[e(F,{"column-defs":i,"header-height":25})]),d.value?(v(),S(Z,{key:0,onClose:n[1]||(n[1]=u=>d.value=!1)})):D("",!0),t.value?(v(),S(be,{key:1,text:"삭제 하시겠습니까?",onClose:n[2]||(n[2]=u=>t.value=!1)})):D("",!0)])]),bottom:r(()=>[o("div",Fe,[e(p,{"button-text":"선택 삭제"})])]),_:1}))}}),Xe={class:"h-full overflow-auto"},Je={class:"border rounded-lg p-4 space-y-2"},Ze={class:"grid grid-cols-4 gap-4"},ke={class:"bg-gray-100 p-4 rounded-lg"},et={class:"space-y-2"},tt={class:"space-y-2"},ot={class:"flex items-center gap-2"},nt={class:"flex items-center gap-2"},at={class:"flex items-center gap-2"},lt={class:"flex items-center gap-x-2"},G="flex items-center",$="primary",Q=R({__name:"EditRequestInfo",props:{detailData:{default:void 0},isAllocation:{type:Boolean,default:!1}},setup(a){const d=g({manage:!1}),t={modal:{manage:()=>{d.value.manage=!d.value.manage}}};return(i,l)=>{const n=se("tooltip");return v(),N("div",Xe,[o("div",Je,[o("div",null,[e(y,{class:"w-full",readonly:""})]),o("div",Ze,[L(e(A,{icon:"cog",text:"편집완료",class:E(G)},null,512),[[n,"진행상태"]]),L(e(A,{icon:"pencilSquare",text:"TV-기술 NDS운영팀",class:E(G)},null,512),[[n,"취재기자"]]),L(e(A,{icon:"identification",text:"492391",class:E(G)},null,512),[[n,"기사ID"]]),L(e(A,{icon:"clock",text:"2024-08-24 13:37:15",class:E(G)},null,512),[[n,"작성시간"]])]),o("div",ke,[o("div",et,[o("div",null,[e(_,{label:"연결된 기사"},{default:r(()=>[e(y,{class:"w-full",intent:$,readonly:""}),e(p,{"button-text":"기사보기"})]),_:1})]),L(o("div",tt,[e(_,{label:"완료요청"},{default:r(()=>[o("div",ot,[e(y,{intent:$,readonly:""}),e(y,{intent:$,readonly:""})])]),_:1}),e(_,{label:"취재기자"},{default:r(()=>[o("div",nt,[e(y,{class:"flex-1",intent:$,readonly:""}),e(y,{class:"flex-1",intent:$,readonly:""})])]),_:1})],512),[[j,!i.isAllocation]]),L(o("div",null,[e(_,{label:"편집기자"},{default:r(()=>[o("div",at,[e(y,{intent:$}),e(p,{icon:"users"}),e(y,{intent:$}),e(p,{"button-text":"배정"}),e(p,{"button-text":"배정취소"}),e(p,{"button-text":"배정관리",onClick:t.modal.manage},null,8,["onClick"])])]),_:1}),e(_,{label:"편집실"})],512),[[j,i.isAllocation]]),o("div",null,[e(_,{label:"배정내역"},{default:r(()=>[e(M,{rows:4,class:"w-full",readonly:""})]),_:1})]),o("div",null,[e(_,{label:"Audio 정보"},{default:r(()=>[e(y,{class:"w-full",intent:$,readonly:""})]),_:1})]),o("div",null,[e(_,{label:"의뢰 내용"},{default:r(()=>[e(M,{rows:4,class:"w-full",readonly:""})]),_:1})]),o("div",null,[e(_,{label:"지시 사항"},{default:r(()=>[e(y,{class:"w-full",intent:$,readonly:""})]),_:1})]),o("div",null,[e(_,{label:"제작구분"},{default:r(()=>[e(y,{intent:$,readonly:""})]),_:1})]),o("div",null,[e(_,{label:"기사ID"},{default:r(()=>[o("div",lt,[e(y,{intent:$,readonly:""}),l[1]||(l[1]=o("span",null,"~",-1)),e(y,{intent:$,readonly:""})])]),_:1})]),o("div",null,[e(_,{label:"기사 내용"},{default:r(()=>[e(M,{rows:10,class:"w-1/2",readonly:""}),e(M,{rows:10,class:"w-1/2",readonly:""})]),_:1})])])])]),d.value.manage?(v(),S(Ke,{key:0,onClose:l[0]||(l[0]=u=>d.value.manage=!1)})):D("",!0)])}}}),st=R({__name:"RequestVideoContents.vue",setup(a){return(d,t)=>(v(),N("div",null,[o("div",null,[e(p,{"button-text":"확대"}),e(p,{"button-text":"축소"})]),o("div",null,[o("div",null,[e(ie,{label:"구성안 변경 알림"})]),o("div",null,[e(M)])])]))}}),it=R({__name:"RequestVideoSuper",setup(a){const d=[w({headerName:"NO"}),w({headerName:"제목"}),w({headerName:"날짜"}),w({headerName:"다운로드"})];return(t,i)=>(v(),N("div",null,[o("div",null,[e(p,{"button-text":"전체다운로드"})]),o("div",null,[e(F,{"column-defs":d})]),o("div",null,[e(we)])]))}}),rt=R({__name:"RequestVideoEditTabPanel",props:{commentData:{default:void 0}},emits:["submit-comment","remove-comment","refresh-comments","toggle-comment-reaction","on-load-comment"],setup(a,{emit:d}){const t=a,i=d,l=g(0),n=g({requestInfo:!0,allocationInfo:!0,contents:!0,super:!0,comment:!0}),u=O(()=>[{id:1,name:"편집 의뢰 정보",isShow:n.value.requestInfo},{id:2,name:"편집 배정 정보",isShow:n.value.allocationInfo},{id:3,name:"콘텐츠",isShow:n.value.contents},{id:4,name:"수퍼",isShow:n.value.super},{id:5,name:"코멘트",isShow:n.value.comment}]),c=async C=>{var V;switch(l.value=C,u.value[C].id){case 5:(V=t.commentData)!=null&&V.length||i("on-load-comment");break}},h=g(t.commentData);return re(()=>t.commentData,C=>{h.value=C},{immediate:!0}),(C,q)=>{const V=de("request-video-comment");return v(),N("div",null,[e(ue,{tabs:u.value,"is-plain-text-mode":!0,"is-compact-mode":!0,onChange:c},{default:r(()=>[n.value.requestInfo?(v(),S(b(B),{key:0,unmount:!1,class:"h-[calc(100vh-190px)]"},{default:r(()=>[e(Q)]),_:1})):D("",!0),n.value.allocationInfo?(v(),S(b(B),{key:1,unmount:!1},{default:r(()=>[e(Q,{"is-allocation":""})]),_:1})):D("",!0),n.value.contents?(v(),S(b(B),{key:2,unmount:!1},{default:r(()=>[e(st)]),_:1})):D("",!0),n.value.super?(v(),S(b(B),{key:3,unmount:!1},{default:r(()=>[e(it)]),_:1})):D("",!0),n.value.comment?(v(),S(b(B),{key:4,unmount:!1},{default:r(()=>[e(V)]),_:1})):D("",!0)]),_:1},8,["tabs"])])}}}),dt={class:"space-y-1"},ut={class:"flex justify-center pb-2 gap-1"},mt=R({__name:"RequestChangeModal",emits:["close","on-submit"],setup(a,{emit:d}){const t=d;return(i,l)=>(v(),S(U,{"modal-class":"w-1/4",onClose:l[2]||(l[2]=n=>t("close"))},{title:r(()=>l[3]||(l[3]=[P("요청 변경")])),content:r(()=>[o("div",dt,[o("div",null,[e(_,{label:"완료요청일"},{default:r(()=>[e(Ve,{intent:"primary",class:"w-full"})]),_:1})]),o("div",null,[e(_,{label:"제목"},{default:r(()=>[e(y,{intent:"primary",class:"w-full"})]),_:1})]),o("div",null,[e(_,{label:"의뢰 사항"},{default:r(()=>[e(M,{rows:8,class:"w-full"})]),_:1})])])]),bottom:r(()=>[o("div",ut,[e(p,{"button-text":"예",icon:"check",type:"primary",onClick:l[0]||(l[0]=n=>t("on-submit"))}),e(p,{"button-text":"아니오",icon:"x-mark",type:"warning",onClick:l[1]||(l[1]=n=>t("close"))})])]),_:1}))}}),Pt=R({__name:"RequestVideoEditView",setup(a){const d=K(),{dynamicHeightVh:t}=te("h-[77vh]","h-[85vh]"),i=g(null),{modals:l,toggleModal:n}=xe(),{requestVideoEditListData:u,requestVideoSearchCondition:c}=Re(),h=fe(),{pageInfo:C}=h,{getRequestVideoEditList:q,processRequestVideoEdit:V,cancelRequestVideoEdit:f}=Ce(c,h,{onListSuccess:x=>{u.value=x.content}}),{onSearch:s,onChangeDate:m}=$e({onSearch:async()=>{try{await q()}catch(x){console.error("Failed to get request video list",x)}},onUpdateSearchCondition:x=>{c.value={...c.value,...x}}}),I={button:{onWorking:async()=>{try{V(1)}catch(x){console.error("RequestVideoEditView onWorking Error",x)}},onCancel:async()=>{try{f(1)}catch(x){console.error("RequestVideoEditView onCancel Error",x)}}},grid:{onRowSelect:x=>{var W;d.requestVideoId=(W=x[0])==null?void 0:W.data.id}}},{menuItems:k}=qe({onWorking:I.button.onWorking,onCancel:I.button.onCancel,toggleModal:n});return me(()=>{q()}),(x,W)=>(v(),N("div",null,[e(Te,{"menu-items":b(k),"onClick:search":b(s),onOnChangeDate:b(m)},null,8,["menu-items","onClick:search","onOnChangeDate"]),o("div",null,[e(b(ee),{class:"default-theme primary-theme"},{default:r(()=>[e(b(Y),{size:"50",class:"pt-2"},{default:r(()=>[o("div",{ref_key:"gridContainer",ref:i,class:E(b(t))},[e(je,{class:"relative","row-data":b(u),"page-info":b(C)},null,8,["row-data","page-info"])],2)]),_:1}),e(b(Y),null,{default:r(()=>[e(rt)]),_:1})]),_:1})]),b(l).requestChange?(v(),S(mt,{key:0,onClose:W[0]||(W[0]=ct=>b(n)("requestChange"))})):D("",!0)]))}});export{Pt as default};
