import{g as ce,M as Me}from"./splitpanes.es-dEoJOrhT.js";import{d as R,a5 as M,bS as pe,ae as G,a as r,c as b,G as f,al as fe,ai as Ee,Y as e,a0 as y,aj as oe,j as d,bW as Oe,l as L,Q as X,F as H,w as B,an as se,h as k,K as D,ao as Te,C as J,ab as ze,k as _,t as Z,eG as I,eH as E,v as ae,aD as ve,a6 as z,a1 as Ye,X as V,a2 as Y,at as Ve,ad as je,V as Fe,bY as de,R as me,o as We,ap as Ue,az as Ge}from"./index-eLyz9_Ts.js";import{_ as He}from"./PaginationSecondary.vue_vue_type_script_setup_true_lang-5bABwX9_.js";import{a as Qe,_ as qe}from"./BulletinBoardHeader.vue_vue_type_script_setup_true_lang-tOD6ZD7P.js";import{P as Ke}from"./PublicIcon-IoLQp8uU.js";import{_ as ye}from"./VDCEditor.vue_vue_type_script_setup_true_lang-IhnNo6sk.js";import{_ as Xe}from"./FileDropzone.vue_vue_type_script_setup_true_lang-SVeHifZw.js";import{u as Je}from"./file-Gx0JxWZZ.js";import{c as Ze}from"./comment-helper-7aBDqVRT.js";import{_ as et}from"./PostModal.vue_vue_type_script_setup_true_lang-ywCBp_X3.js";import{_ as tt}from"./PrintModal.vue_vue_type_script_setup_true_lang-ZsBYknDF.js";import{u as st}from"./use-dynamic-height-sJY6bk6Z.js";import{G as at}from"./GTextarea-5GIFD2Mo.js";import{_ as ot}from"./PermissionSettingModal.vue_vue_type_script_setup_true_lang-Cz5aOmSI.js";import"./GSingleSelect-7u8H0FdH.js";import"./vue-multiselect-Yz8FsF-E.js";import"./use-model-wrapper-XtiLc3Xd.js";import"./Comment.vue_vue_type_script_setup_true_lang-4b5dYawy.js";import"./comment.helper-kn9hfxav.js";import"./vue.runtime.esm-bundler-3P3R-Xon.js";import"./XIcon-gk7lh7BZ.js";import"./ContentHeaderButtons.vue_vue_type_script_setup_true_lang-Db8CUXqr.js";import"./ConfirmModal.vue_vue_type_script_setup_true_lang-k_ZxaDhN.js";import"./ModalButton.vue_vue_type_script_setup_true_lang-WIw8hxFk.js";import"./file-division-code-x51qUgaH.js";import"./FileListView.vue_vue_type_script_setup_true_lang-A40KFqZZ.js";import"./GNoData.vue_vue_type_script_setup_true_lang-rWUb5JCO.js";import"./GVideoPlayer-1SUF8s3O.js";import"./main-sHItgwS4.js";import"./vue-resizable.umd.min-blE9hPz6.js";/* empty css                                                                  */import"./organization-qjYuRO6g.js";import"./FormLabel.vue_vue_type_script_setup_true_lang-SB4ukE1P.js";import"./FormItem.vue_vue_type_script_setup_true_lang-ZXQ_7x89.js";import"./OrganizationSelect.vue_vue_type_script_setup_true_lang-BNuugYEX.js";const lt={class:"h-[92%] pt-4 px-2.5"},nt=R({__name:"BulletinBoardPostList",props:{isLoading:{type:Boolean},pageInfo:{},selectedRowIndex:{},rowData:{}},emits:["selected-rows","on-change-page","select-size"],setup(C,{emit:h}){const o=h,{t:i}=M(),n=[{headerName:"NO",field:"NO",maxWidth:45,valueGetter:"node.rowIndex",cellRenderer:m=>{const g=m.api.getDisplayedRowCount();return pe(m,g)},cellStyle:{textAlign:"center"}},{headerName:i("Community.제목"),field:"bulletinBbPostTitl",cellStyle:{textAlign:"left"}},{headerName:i("Community.작성자"),field:"inputrNm",maxWidth:100,cellStyle:{textAlign:"center"}},{headerName:i("Community.전송일시"),field:"inputDtm",maxWidth:100,cellStyle:{textAlign:"center"},valueGetter:m=>m.data.inputDtm?G(m.data.inputDtm).format("YYYY-MM-DD"):"-"}],l=m=>{o("selected-rows",m)},c=m=>{o("on-change-page",m)},a=m=>{o("select-size",m)},v={overlayNoRowsTemplate:`<p class="text-[24px] font-bold text-[#9C9C9C]">${i("Community.생성된 게시글이_없습니다")}</p>`};return(m,g)=>(r(),b("div",lt,[f(fe,{intent:"primary","column-defs":n,"row-data":m.rowData,"selected-row-index":m.selectedRowIndex,"is-loading":"","row-height":25,"page-info":m.pageInfo,"grid-options":v,"row-selection":"multiple",onSelectedRows:l},null,8,["row-data","selected-row-index","page-info"]),f(He,{"current-page":m.pageInfo.page,"page-info":m.pageInfo,onOnChangePage:c,onSelectSize:a},null,8,["current-page","page-info"])]))}}),it={class:"h-full text-sm flex flex-col"},rt={class:"px-2 py-4 space-y-3"},ut={class:"min-h-[26px] dark:bg-dark bg-primary-gray-80 py-1 px-3 border border-primary-gray-30 text-primary-black-100 font-roboto font-medium text-xs dark:text-white"},ct={class:"flex flex-wrap gap-x-10 text-xs gap-y-3 text-primary-gray-40 dark:text-white"},dt={class:"flex items-center gap-2"},mt={class:"flex items-center gap-2"},pt={class:"dark:bg-dark-secondary bg-primary-gray-80 p-2 border border-primary-gray-20 rounded-[3px] flex-grow overflow-y-hidden"},ft={class:"dark:bg-dark bg-white p-2 rounded-[3px] h-full"},vt=R({__name:"BulletinBoardDetail",props:{dataDetail:{}},setup(C){const{t:h}=M();return(o,i)=>{var l,c,a;const n=Ee("tooltip");return r(),b("div",it,[e("div",rt,[e("div",ut,y(((l=o.dataDetail)==null?void 0:l.bulletinBbPostTitl)||""),1),e("div",ct,[e("div",dt,[oe(f(Oe,null,null,512),[[n,d(h)("Community.작성시간")]]),e("p",null,y((c=o.dataDetail)==null?void 0:c.inputDtm),1)]),e("div",mt,[oe(f(Ke,null,null,512),[[n,d(h)("Community.공개여부")]]),e("p",null,y(d(h)("Community.공개")),1)])])]),e("div",pt,[e("div",ft,[f(ye,{content:(a=o.dataDetail)==null?void 0:a.bulletinBbPostCtt,disabled:"","spell-check":!1,"editor-class":"vdc-readonly"},null,8,["content"])])])])}}}),yt={class:"w-full flex justify-between text-xs pt-2 pb-1 px-1"},ht={class:"text-black dark:text-white"},_t=R({__name:"BulletinBoardAttachedFile",props:{dataDetail:{}},setup(C){const h=C,{t:o}=M(),{fileDownload:i,downloadAllFiles:n}=Je(),l=L(()=>{var v,m;return(m=(v=h.dataDetail)==null?void 0:v.attcFiles)==null?void 0:m.map(g=>({...g,name:g.fileNm,fileId:g.id}))}),c=async v=>{await i(v.file)},a=async()=>{var v;(v=l.value)!=null&&v.length&&await n(l.value)};return(v,m)=>{var g;return r(),b(H,null,[e("div",yt,[e("p",ht,y(d(o)("Community.등록된 파일")),1),e("p",{class:"text-primary-blue-100 text-[10px] cursor-pointer hover:no-underline underline ml-auto",onClick:a},y(d(o)("Community.전체 다운로드")),1)]),e("div",{class:X(["h-full",{"flex items-center justify-center":!((g=l.value)!=null&&g.length)}])},[f(Xe,{"file-data":l.value,mode:"read","file-list-custom-class":"!p-0 text-black","is-read-only":"","is-show-file":"",onOnDownloadFile:c},null,8,["file-data"])],2)],64)}}}),bt={class:"w-full h-full bg-white dark:bg-dark-grid"},gt=R({__name:"BulletinBoardTabPanel",props:{dataDetail:{},isLoadingComments:{type:Boolean},isShowDetail:{type:Boolean,default:!0},isShowAttachedFile:{type:Boolean,default:!0},isShowComment:{type:Boolean,default:!0},isShowVote:{type:Boolean,default:!0},commentList:{},currentBoardId:{},currentPostId:{}},emits:["on-refresh"],setup(C,{emit:h}){const o=h,i=C,{t:n}=M(),l=L(()=>[{id:1,name:n("Community.상세정보"),isShow:i.isShowDetail},{id:2,name:n("Community.첨부파일"),isShow:i.isShowAttachedFile},{id:3,name:n("Community.코멘트"),isShow:i.isShowComment}]);return(c,a)=>(r(),b("div",bt,[f(Te,{tabs:l.value,"is-plain-text-mode":!0,"is-compact-mode":!0,class:"!p-0"},{default:B(()=>[c.isShowDetail?(r(),k(d(se),{key:0,unmount:!1,class:"overflow-y-auto flex flex-col h-full"},{default:B(()=>[f(vt,{"data-detail":c.dataDetail},null,8,["data-detail"])]),_:1})):D("",!0),c.isShowAttachedFile?(r(),k(d(se),{key:1,unmount:!1,class:"overflow-y-auto flex flex-col h-full"},{default:B(()=>[f(_t,{"data-detail":c.dataDetail},null,8,["data-detail"])]),_:1})):D("",!0),c.isShowComment?(r(),k(d(se),{key:2,unmount:!1,class:"overflow-y-auto h-full pt-2"},{default:B(()=>{var v;return[f(Qe,{"comment-list":c.commentList,"current-board-id":c.currentBoardId,"current-post-id":c.currentPostId,"is-loading-comments":c.isLoadingComments,"comment-count":(v=c.dataDetail)==null?void 0:v.commentCount,onOnRefresh:a[0]||(a[0]=m=>o("on-refresh"))},null,8,["comment-list","current-board-id","current-post-id","is-loading-comments","comment-count"])]}),_:1})):D("",!0)]),_:1},8,["tabs"])]))}}),xt={class:"space-y-3"},wt={class:"flex justify-between items-center gap-4"},Ct={class:"text-xs"},Bt={key:0,class:"flex items-start gap-3 px-2"},Dt={class:"inline-block rounded-sm min-w-max px-1"},kt=["innerHTML"],he=R({__name:"BulletinBoardChildComments",props:{child:{},userList:{},userMngId:{}},setup(C){const h=C,o=L(()=>h.child.childComments.length);return(i,n)=>(r(),b("div",xt,[e("div",wt,[e("span",null,y((i.child.inputUserName||"")+" / "+(i.child.inputUserDeptName||"")),1),e("span",Ct,y(i.child.inputDateTime),1)]),i.child.isEditing?D("",!0):(r(),b("div",Bt,[e("b",Dt,"@"+y(i.child.inputUserName||""),1),e("div",{class:"mr-12",innerHTML:i.child.content},null,8,kt)])),o.value?(r(!0),b(H,{key:1},J(i.child.childComments,l=>(r(),k(he,{key:l.id,"user-mng-id":i.userMngId,child:l,"user-list":i.userList},null,8,["user-mng-id","child","user-list"]))),128)):D("",!0)]))}}),$t={class:"space-y-4 text-sm p-4 dark:text-white"},Pt={class:"space-y-1 p-3 border border-primary-gray-surface"},Nt={class:"text-sm"},It={class:"space-y-2"},Rt={class:"w-full text-xs"},St={class:"w-[70px] border border-primary-gray-surface text-center p-2"},Lt={class:"border border-primary-gray-surface p-2 px-4"},At={class:"w-[70px] border border-primary-gray-surface text-center p-2"},Mt={class:"border border-primary-gray-surface p-2 px-4"},Et={class:"space-y-1 p-3 border border-primary-gray-surface"},Ot={class:"text-sm"},Tt={class:"space-y-4"},zt={class:"space-y-2 p-3 border border-primary-gray-surface"},Yt={class:"text-sm"},Vt={class:"space-y-4"},jt={class:"flex justify-between items-center gap-4"},Ft={class:"text-[11px]"},Wt={class:"flex justify-between gap-5"},Ut=["innerHTML"],Gt={key:0,class:"ml-10 space-y-3"},Ht=R({__name:"BulletinBoardPrintTemplate",props:{commentList:{},dataDetail:{}},setup(C){const h=C,{t:o}=M(),{userMngId:i}=ze(),n=_(),l=_([]),c=L(()=>Ze(h.commentList)||0);return Z(()=>[h.commentList],()=>{l.value=h.commentList},{immediate:!0}),(a,v)=>{var m,g,A;return r(),b("div",$t,[e("div",Pt,[e("p",Nt,[e("b",null,y(d(o)("Community.기본정보")),1)]),e("div",It,[e("table",Rt,[e("tbody",null,[e("tr",null,[e("td",St,y(d(o)("Community.제목")),1),e("td",Lt,y(((m=a.dataDetail)==null?void 0:m.bulletinBbPostTitl)||""),1)]),e("tr",null,[e("td",At,y(d(o)("Community.작성일시")),1),e("td",Mt,y((g=a.dataDetail)==null?void 0:g.inputDtm),1)])])])])]),e("div",Et,[e("p",Ot,[e("b",null,y(d(o)("Community.내용")),1)]),e("div",Tt,[f(ye,{content:(A=a.dataDetail)==null?void 0:A.bulletinBbPostCtt,disabled:"","editor-class":"vdc-readonly","spell-check":!1},null,8,["content"])])]),e("div",zt,[e("p",Yt,[e("b",null,y(d(o)("Community.댓글")+" ("+c.value+")"),1)]),e("div",Vt,[(r(!0),b(H,null,J(l.value,$=>(r(),b("div",{key:$.id,class:"space-y-4 text-xs"},[e("div",jt,[e("span",null,y(($.inputUserName||"")+" / "+($.inputUserDeptName||"")),1),e("span",Ft,y($.inputDateTime),1)]),e("div",Wt,[e("div",{innerHTML:$.content},null,8,Ut)]),$.childComments.length?(r(),b("div",Gt,[(r(!0),b(H,null,J($.childComments,x=>(r(),k(he,{key:x.id,"user-mng-id":d(i),child:x,"user-list":n.value},null,8,["user-mng-id","child","user-list"]))),128))])):D("",!0)]))),128))])])])}}}),Qt={class:"w-full text-sm font-semibold text-primary-black-500 max-h-[calc(100vh-127px)] overflow-y-auto"},qt=["onClick"],Kt={class:"hover:text-primary ml-2"},Xt=R({__name:"BulletinBoardSelectList",props:{data:{},currentBoardId:{}},emits:["on-category-click","on-bulletin-click"],setup(C,{emit:h}){const o=h,i=l=>{o("on-bulletin-click",l)},n=l=>{const c=Object.values(I).find(a=>a.code===l);return c==null?void 0:c.description};return(l,c)=>(r(),b("div",null,[e("div",Qt,[(r(!0),b(H,null,J(l.data,a=>(r(),b("div",{key:a.bulletinBbId,class:"bg-primary-gray-10"},[e("div",{class:"flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50",onClick:v=>i(a)},[(r(),b("svg",{class:X([a.bulletinBbId===l.currentBoardId?"rotate-90":"","h-4 w-4 transition-transform duration-300 text-primary-gray-50 hover:text-primary-gray-900"]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c[0]||(c[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1)]),2)),e("span",Kt,y(a.bulletinBbNm),1),a.bulletinBbSts?(r(),b("div",{key:0,class:X(["ml-auto rounded-3xl text-white text-[10px] px-1 h-4 text-center flex items-center justify-center w-[42px]",a.bulletinBbSts===d(I).APPROVAL.code?"bg-[#0071FF]":"bg-[#FF0000]"])},y(n(a.bulletinBbSts)),3)):D("",!0)],8,qt)]))),128))])]))}}),Jt={class:"h-[335px]"},Zt=R({__name:"BulletinBoardUserTable",props:{permissions:{}},emits:["selected-rows","on-change-page","select-size","change-permission"],setup(C,{emit:h}){const o=h,{t:i}=M(),n={setup(a){const v=_(a.params),m=()=>{o("change-permission",v.value.rowIndex,v.value.colDef.field)};return()=>ae("div",{class:"flex items-center justify-center gap-2"},[ae("input",{type:"checkbox",checked:v.value.value,onChange:m}),ae("span",{},v.value.colDef.field===E.CAN_READ?i("Community.읽기"):i("Community.쓰기"))])}},l=[{headerName:"NO",field:"NO",maxWidth:45,valueGetter:"node.rowIndex",cellRenderer:a=>{const v=a.api.getDisplayedRowCount();return pe(a,v)},cellStyle:{textAlign:"center"}},{headerName:i("Community.이름"),field:"entityNm",cellStyle:{textAlign:"center"}},{headerName:i("Community.읽기"),field:E.CAN_READ,maxWidth:70,cellStyle:{textAlign:"center"},sortable:!1,cellRenderer:n},{headerName:i("Community.쓰기"),field:E.CAN_WRITE,maxWidth:70,cellStyle:{textAlign:"center"},sortable:!1,cellRenderer:n},{headerName:i("Community.적용일"),field:"inputDate",maxWidth:100,cellStyle:{textAlign:"center"},valueGetter:a=>a.data.inputDate?G(a.data.inputDate).format("YYYY-MM-DD"):"-"}],c=a=>{o("selected-rows",a)};return(a,v)=>(r(),b("div",Jt,[f(fe,{class:"max-h-[310px] overflow-y-auto",intent:"primary","column-defs":l,"row-data":a.permissions,"is-loading":"","row-height":25,"header-height":35,"row-selection":"multiple",onSelectedRows:c},null,8,["row-data"])]))}}),es={class:"text-xs font-bold"},ts={class:"bg-primary text-white w-full h-[30px] font-bold flex items-center pl-2.5"},ss={class:"pl-2.5 pt-2 pb-2.5"},as={class:"flex items-center justify-start mb-1"},os={class:"font-bold"},ls={class:"flex items-center justify-start mb-3 mt-2"},ns={class:"font-bold"},is={class:"flex items-center justify-between mt-2"},rs={class:"relative mr-7"},us={class:"flex items-center justify-center gap-x-2 w-full"},cs={class:"mr-3 flex-1 text-[10.5px] font-bold"},ds={class:"mr-3 flex-1 text-[10.5px] font-bold"},ms={key:0,class:"ml-2.5"},ps={class:"flex items-center justify-start mb-3 mt-2"},fs={class:"font-bold"},vs=R({__name:"BulletinBoardCreateForm",props:{createEditBoardMode:{},dataDetail:{}},emits:["refresh","on-cancel-create-board"],setup(C,{emit:h}){const o=C,i=h,{t:n}=M(),l=_({bulletinBbNm:"",permissions:[]}),c=ve(),a=_(""),v=_(""),m=_(!1),g=L(()=>{var t;return((t=o.dataDetail)==null?void 0:t.bulletinBbSts)||I.APPROVAL.code}),A=L(()=>a.value.length===0?l.value.permissions:l.value.permissions.filter(t=>{var u;return(u=t.entityNm)==null?void 0:u.toLowerCase().includes(a.value.toLowerCase())})),$=t=>{const u=t.map(w=>({permissionId:void 0,bulletinBbId:void 0,entityId:w.userMngId,entityType:w.type==="user"?"user":"dept",canRead:!0,canWrite:!0,entityNm:w.type==="user"?w.userNm:w.deptNm,inputDate:G().format("YYYY-MM-DD")}));l.value.permissions=u},x=(t,u)=>{l.value.permissions[t][u]=!l.value.permissions[t][u]},j=async()=>{var u;return(u=o.dataDetail)!=null&&u.bulletinBbId?await c.community.bulletinBoard.update(o.dataDetail.bulletinBbId,l.value):void 0},S=async()=>await c.community.bulletinBoard.create(l.value),O=async()=>{const t=o.createEditBoardMode==="create"?await S():await j();if(t!=null&&t.success){window.Notify.success({message:"success"}),i("refresh");return}window.Notify.error({message:t.msg})},F=async()=>{var t,u,w;l.value.bulletinBbNm=((t=o.dataDetail)==null?void 0:t.bulletinBbNm)||"",l.value.permissions=((u=o.dataDetail)==null?void 0:u.userPermissions)||[],v.value=((w=o.dataDetail)==null?void 0:w.returnReason)||"",a.value=""},W=async()=>{var u;if(!((u=o.dataDetail)!=null&&u.bulletinBbId))return;const t=await c.community.bulletinBoard.requestUpdateStatus(o.dataDetail.bulletinBbId);if(t!=null&&t.success){window.Notify.success({message:"success"}),i("refresh");return}window.Notify.error({message:t.msg})},Q=()=>{i("on-cancel-create-board")},N=L(()=>g.value===I.APPROVAL.code?n("Community.승인"):g.value===I.REQUEST.code?n("Community.신청중"):g.value===I.RETURN.code?n("Community.미승인"):"");return Z(()=>{var t;return[o.createEditBoardMode,(t=o.dataDetail)==null?void 0:t.bulletinBbId]},async()=>{var t;if(o.createEditBoardMode==="edit"&&((t=o.dataDetail)!=null&&t.bulletinBbId)){await F();return}l.value={bulletinBbNm:"",permissions:[]},a.value="",v.value=""},{immediate:!0}),(t,u)=>(r(),b("div",es,[e("div",null,[e("div",ts,y(d(n)("Community.게시판 생성")),1),e("div",ss,[e("div",as,[f(z,{icon:"custom-chevron",size:"w-5 h-5",class:"mr-2"}),e("p",os,y(d(n)("Community.이름")),1)]),f(Ye,{modelValue:l.value.bulletinBbNm,"onUpdate:modelValue":u[0]||(u[0]=w=>l.value.bulletinBbNm=w),intent:"primary",class:"ml-5 w-[216px]","custom-input-class":"!text-primary-black-500 !text-sm",placeholder:d(n)("Community.게시판 이름을 입력하세요"),"max-length":20,"forbid-special-char":""},null,8,["modelValue","placeholder"]),e("div",ls,[f(z,{icon:"custom-chevron",size:"w-5 h-5",class:"mr-2"}),e("p",ns,y(d(n)("Community.사용자 및 권한")),1)]),e("div",is,[f(Y,{class:"!rounded-xl !text-[10px] w-[100px] font-bold !px-1 ml-5",onClick:u[1]||(u[1]=w=>m.value=!0)},{default:B(()=>[f(z,{icon:"custom-plus",size:"w-3 h-3",class:"mr-2 text-white"}),V(" "+y(d(n)("Community.맴버 추가")),1)]),_:1}),e("div",rs,[u[5]||(u[5]=e("label",{for:"menu-search"},null,-1)),u[6]||(u[6]=e("span",{class:"absolute inset-y-0 right-[18px] flex items-center pl-3 pointer-events-none"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-[14px] w-[14px] text-primary-gray-50",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M12.9 14.32a8 8 0 111.42-1.42l4.84 4.84a1 1 0 01-1.42 1.42l-4.84-4.84zM8 14a6 6 0 100-12 6 6 0 000 12z","clip-rule":"evenodd"})])],-1)),oe(e("input",{"onUpdate:modelValue":u[2]||(u[2]=w=>a.value=w),type:"text",placeholder:"사용자 이름 검색",class:"w-full py-1 pl-2 pr-8 border border-primary-gray-30 rounded-[3px] focus:outline-none h-[27px] font-roboto font-medium text-xs dark:bg-dark-input dark:text-white placeholder-primary-gray-surface-400"},null,512),[[Ve,a.value]])])])])]),f(Zt,{permissions:A.value,onChangePermission:x},null,8,["permissions"]),e("div",us,[f(Y,{type:"primary",class:"!flex justify-between items-center w-[80px] h-[33px] !px-0",onClick:O},{default:B(()=>[f(z,{icon:"check",size:"h-5 w-5",class:"mr-2 block ml-2"}),e("p",cs,y(d(n)("Community.설정")),1)]),_:1}),f(Y,{type:"warning",class:"!flex justify-between items-center w-[80px] h-[33px] !px-0",onClick:Q},{default:B(()=>[f(z,{icon:"xMark",size:"h-5 w-5",class:"mr-2 block ml-2"}),e("p",ds,y(d(n)("Community.취소")),1)]),_:1})]),t.createEditBoardMode==="edit"?(r(),b("div",ms,[e("div",ps,[f(z,{icon:"custom-chevron",size:"w-5 h-5",class:"mr-2"}),e("p",fs,y(d(n)("Community.승인 상태")),1),f(Y,{type:g.value===d(I).APPROVAL.code?"primary":"warning",class:"!rounded-xl !text-[10px] w-[100px] font-bold !px-1 ml-10"},{default:B(()=>[V(y(N.value),1)]),_:1},8,["type"])]),g.value===d(I).RETURN.code?(r(),k(Y,{key:0,class:"!rounded-xl !text-[10px] w-[100px] font-bold !px-1 mb-3",onClick:W},{default:B(()=>[V(y(d(n)("Community.재요청")),1)]),_:1})):D("",!0),g.value!==d(I).APPROVAL.code?(r(),k(at,{key:1,modelValue:v.value,"onUpdate:modelValue":u[3]||(u[3]=w=>v.value=w),rows:3,label:"",intent:"primary","custom-class":"p-2.5 rounded-[1px]",placeholder:d(n)("Community.중복된 명칭으로 인해 승인 취소 ")},null,8,["modelValue","placeholder"])):D("",!0)])):D("",!0),m.value?(r(),k(ot,{key:1,permissions:l.value.permissions,onClose:u[4]||(u[4]=w=>m.value=!1),onOnSubmit:$},null,8,["permissions"])):D("",!0)]))}}),ys={class:"dark:text-white pl-0"},hs={class:"flex flex-grow overflow-y-hidden mr-[-8px]"},_s={key:0,class:"w-full h-full"},bs={class:"flex h-full justify-center items-center flex-col gap-y-2.5"},gs={class:"text-center text-[#9C9C9C] text-[24px] font-bold"},xs={key:1,class:"flex-grow flex"},ws={key:0,class:"h-full w-[717px]"},Cs={class:"flex h-full"},Bs={class:"flex-grow mb-14"},Ds=R({__name:"BulletinBoardView",setup(C){const{t:h}=M(),{moveEditCommunityBulletinBoard:o,moveCreateCommunityBulletinBoard:i}=Ue(),n=ve(),{dynamicHeightVh:l}=st("h-[85vh]","h-[85vh]"),c=_(je.xs),a=_([]),v=_(),m=_(!0),g=_(!1),A=_(!1),$=_(0),x=_(null),j=_([]),S=_(),O=_(),F=_(!1),W=_(!1),Q=_({page:1,totalElements:0,totalPages:1,numberOfElements:0,size:c.value}),N=_(null),t=_(null),u=_([]),w=L(()=>u.value.length===0),_e=L(()=>N.value?!1:!!t.value),ee=()=>({searchDateStart:G().subtract(6,"month").format("YYYY-MM-DD"),searchDateEnd:G().format("YYYY-MM-DD"),size:c.value,isDelete:!1,page:0,sort:"inputDtm,desc"}),T=Fe(ee()),be=()=>{x.value=null,S.value=void 0,a.value=[]},le=async()=>{try{const s=await n.community.bulletinBoard.getAll(ee());s!=null&&s.success&&(u.value=s.data.content)}catch(s){console.log("getDefaultDataList error",s)}},U=async s=>{if(s){be(),g.value=!0;try{const p=await n.community.bulletinBoard.getPostByBoardId(s,T);p!=null&&p.success&&(j.value=p.data.content.filter(P=>P.delYn==="N"),Q.value={page:T.page??0,totalPages:p.data.totalPages,totalElements:p.data.totalElements,numberOfElements:p.data.numberOfElements,size:p.data.size})}catch(p){console.log("getDataList error",p)}g.value=!1}},ge=async s=>{const p=await n.community.bulletinBoard.getDetail(s);if(p!=null&&p.success){O.value=p.data;return}window.Notify.error({message:p.msg})},xe=async s=>{if(t.value=s.bulletinBbId,s.bulletinBbSts===I.APPROVAL.code){N.value=null,await U(t.value);return}N.value="edit"},we=async(s,p)=>{if(!(!s||!p))try{const P=await n.community.bulletinBoard.getDetailPost(s,p);P.success&&(S.value=P.data)}catch(P){console.log("getDataDetail error",P)}},Ce=async s=>{T.page=s,await U(t.value)},Be=async s=>{T.page=0,T.size=Number(s),await U(t.value)},De=s=>{var p;s.length!==0&&($.value=((p=s[0])==null?void 0:p.rowIndex)||0,x.value=s[0].data.bulletinBbPostId,m.value=!1)},q=s=>{var P;if(((P=O.value)==null?void 0:P.bulletinBbSts)!==I.APPROVAL.code)return!1;const p=u.value.find(K=>K.bulletinBbId===t.value);return p!=null&&p.permission[s]?!0:(window.Notify.error({message:"Not enough permission"}),!1)},ke=()=>{t.value&&q(E.CAN_WRITE)&&i(t.value)},$e=()=>{!t.value||!x.value||q(E.CAN_WRITE)&&o(t.value,x.value)},Pe=()=>{var s;!t.value||!x.value||q(E.CAN_WRITE)&&((s=v.value)==null||s.confirmDeleteModal())},Ne=()=>{x.value&&(W.value=!0)},Ie=()=>{x.value&&(F.value=!0)},Re=async()=>{if(!t.value||!x.value||!q(E.CAN_WRITE))return;const s=await n.community.bulletinBoard.removePost(t.value,x.value);s!=null&&s.success?(window.Notify.success({message:"Success"}),await U(t.value)):window.Notify.error({message:s.msg})},ne=async()=>{if(!(!t.value||!x.value)){A.value=!0;try{const s=await n.community.bulletinBoard.getComments(t.value,x.value);s.success&&(a.value=s.data)}catch(s){console.log("Fail to get comment",s)}finally{A.value=!1}}},Se=()=>{Object.assign(T,ee())},te=async()=>{N.value=null,t.value=null,O.value=void 0,j.value=[],S.value=void 0,a.value=[]},ie=()=>{te(),N.value="create"},Le=()=>{te()},re=async()=>{te(),await le()},ue=async s=>{Se(),await re(),s.bulletinBoardId&&(await U(s.bulletinBoardId),t.value=s.bulletinBoardId)};return de(`${me.CommunityBulletinBoard}Create`,async s=>{await ue(s)}),de(`${me.CommunityBulletinBoard}Edit`,async s=>{await ue(s)}),We(async()=>{await le()}),Z(()=>x.value,async s=>{s&&(await we(t.value,s),await ne())}),Z(()=>t.value,async s=>{s&&await ge(s)},{immediate:!0}),(s,p)=>{var P,K;return r(),b("div",ys,[f(qe,{ref_key:"headerRef",ref:v,"should-show-menu":_e.value,onOnCreate:ke,onOnEdit:$e,onOnDelete:Re,onOnPrint:Ne,onOnPost:Ie,onOnCreateBoard:ie,onOnDeleteClick:Pe},null,8,["should-show-menu"]),e("div",hs,[w.value&&!N.value?(r(),b("div",_s,[e("div",bs,[e("p",gs,[V(y(d(h)("Community.생성된_게시판이_없습니다")),1),p[2]||(p[2]=e("br",null,null,-1)),V(" "+y(d(h)("Community.게시판을_생성하여_주세요")),1)]),f(Y,{class:"!rounded-xl w-[78px] !text-[10px] font-bold",onClick:ie},{default:B(()=>[V(y(d(h)("Community.게시판 생성")),1)]),_:1})])])):(r(),b("div",xs,[f(Xt,{class:"w-[250px] flex-shrink-0 border-r border-primary-gray-surface",data:u.value,"current-board-id":t.value,onOnBulletinClick:xe},null,8,["data","current-board-id"]),N.value?(r(),b("div",ws,[f(vs,{"create-edit-board-mode":N.value,"data-detail":O.value,onRefresh:re,onOnCancelCreateBoard:Le},null,8,["create-edit-board-mode","data-detail"])])):(r(),k(d(Me),{key:1,class:"default-theme primary-theme"},{default:B(()=>[f(d(ce),{class:"overflow-auto dark:!bg-dark-secondary h-full",size:"57"},{default:B(()=>[e("div",Cs,[e("div",Bs,[f(nt,{"is-deselected-all":m.value&&!x.value,"is-loading":g.value,"row-data":j.value,"page-info":Q.value,"selected-row-index":$.value,onSelectedRows:De,onOnChangePage:Ce,onSelectSize:Be},null,8,["is-deselected-all","is-loading","row-data","page-info","selected-row-index"])])])]),_:1}),f(d(ce),{class:X([d(l),"overflow-visible dark:!bg-dark-secondary p-2 border-t-0 border-primary-gray-999 rounded-[3px] ml-[-2px]"])},{default:B(()=>[N.value?D("",!0):(r(),k(gt,{key:0,"is-loading-comments":A.value,"current-board-id":t.value,"current-post-id":x.value,"comment-list":a.value,"data-detail":S.value,onOnRefresh:ne},null,8,["is-loading-comments","current-board-id","current-post-id","comment-list","data-detail"]))]),_:1},8,["class"])]),_:1}))]))]),F.value?(r(),k(et,{key:0,title:(P=S.value)==null?void 0:P.bulletinBbPostTitl,content:(K=S.value)==null?void 0:K.bulletinBbPostCtt,onOnClose:p[0]||(p[0]=Ae=>F.value=!1)},null,8,["title","content"])):D("",!0),W.value?(r(),k(tt,{key:1,onOnClose:p[1]||(p[1]=Ae=>W.value=!1)},{default:B(()=>[f(Ht,{"comment-list":a.value,"data-detail":S.value},null,8,["comment-list","data-detail"])]),_:1})):D("",!0)])}}}),ks=Ge(Ds,[["__scopeId","data-v-7090e774"]]),ra=R({__name:"CommunityBulletinBoardView",setup(C){return(h,o)=>(r(),k(ks))}});export{ra as default};
