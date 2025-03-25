import{d as G,l as V,c6 as ue,a as f,c as P,Y as t,G as e,j as y,Q as M,k as S,V as me,t as A,ai as re,aj as w,au as L,a1 as r,w as m,F as ce,a2 as k,al as F,h as E,K as T,a0 as ve,an as O,ao as fe}from"./index-eLyz9_Ts.js";import{c as I}from"./make-grid-column-aeLSdEws.js";import{h as pe}from"./html-dompurify.util-O5obI-gX.js";import{_ as U}from"./IconLabel.vue_vue_type_script_setup_true_lang-1rGRsbjZ.js";import{_ as $}from"./FormLabel.vue_vue_type_script_setup_true_lang-SB4ukE1P.js";import{_ as p}from"./FormItem.vue_vue_type_script_setup_true_lang-ZXQ_7x89.js";import{u as _e}from"./use-model-wrapper-XtiLc3Xd.js";import{u as he}from"./request-graphic-xqdmz7er.js";import{G as be}from"./GSingleSelect-7u8H0FdH.js";import{_ as se}from"./ProgramSelect.vue_vue_type_script_setup_true_lang-UHoCrnxw.js";import{_ as ge}from"./UserSearchModal.vue_vue_type_script_setup_true_lang-iHw_FmsN.js";import{_ as oe}from"./ConfirmModal.vue_vue_type_script_setup_true_lang-k_ZxaDhN.js";import{b as Ne}from"./FileListView.vue_vue_type_script_setup_true_lang-A40KFqZZ.js";import{_ as De}from"./FileDropzone.vue_vue_type_script_setup_true_lang-SVeHifZw.js";import{G as ye}from"./GVideoPlayer-1SUF8s3O.js";import{u as Se,r as ne,_ as Ce}from"./CommentV2.vue_vue_type_script_setup_true_lang-bRF2pab6.js";const x={REQUEST:{id:"0001",name:"의뢰",label:"의뢰"},ASSIGN:{id:"0002",name:"배정",label:"배정"},IMPROVEMENT_REQUEST:{id:"0003",name:"보완요청",label:"보완요청"},COMPLETE:{id:"0004",name:"완료",label:"완료"},CANCEL_REQUEST:{id:"0005",name:"의뢰취소",label:"의뢰취소"},CANCEL_ASSIGNMENT:{id:"0006",name:"배정취소",label:"배정취소"}},At=Object.values(x),ie={[x.REQUEST.id]:`의뢰 상태입니다.
배정상태인 경우에 완료 할 수 있습니다.`,[x.COMPLETE.id]:`제작완료 상태입니다.
배정상태인 경우에 완료 할 수 있습니다.`,[x.IMPROVEMENT_REQUEST.id]:`보완요청 상태입니다.
배정상태인 경우에 완료 할 수 있습니다.`},xe={class:"flex flex-col"},we=G({__name:"DesignerSelect",props:{modelValue:{default:""},ariaLabel:{default:""},label:{default:"디자이너"},options:{default:()=>[]},placeholder:{default:"디자이너 선택"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},selectLabel:{default:"선택"},deselectLabel:{default:"취소"},allowEmpty:{type:Boolean,default:!1},isAllOption:{type:Boolean,default:!1},width:{default:"w-32"}},emits:["update:modelValue","on-selected","on-removed"],setup(q,{emit:N}){const l=q,u=N,_=he(),{fetchGraphicDesigners:c}=_,g=_e(l,u,"modelValue"),R=V(()=>_.getDesignerList.map(i=>({value:i.id,label:i.userNm,phonNo:i.phonNo,inphonNo:i.inphonNo}))),h=i=>{g.value=i,u("update:modelValue",i),u("on-selected",i)},o=()=>{g.value="",u("on-removed")};return ue(async()=>{try{_.getDesignerList.length===0&&await c()}catch(i){console.error("Fail Fetch Designers",i)}}),(i,n)=>(f(),P("div",null,[t("div",xe,[e(be,{"model-value":y(g),class:M(i.width),intent:"primary","track-by":"value","item-label":"label",options:R.value,"onSelect:value":h,"onRemove:value":o},null,8,["model-value","class","options"])])]))}}),qe={class:"h-full overflow-auto"},Re={class:"py-2 space-y-2"},Ee={class:"grid grid-cols-4 gap-4"},Te={class:"bg-gray-100 p-2 rounded-lg"},Ie={class:"space-y-1 mt-1"},Pe={class:"grid grid-cols-2 gap-6"},$e={class:"flex gap-2"},ke={class:"flex gap-2"},Ae={class:"space-y-2"},Ge={class:"grid grid-cols-2 gap-6"},Le={class:"grid grid-cols-2 gap-6"},Oe={class:"flex items-center gap-2"},Me={key:1,class:"grid grid-cols-2 gap-6"},Ve={class:"flex items-center gap-2"},Ue={class:"space-y-2"},Be={class:"h-[100px] w-full"},Fe={class:"flex justify-end"},Qe={class:"mt-2"},We={class:"space-y-1 mt-1"},je={class:"grid grid-cols-2 gap-6"},ze={class:"grid grid-cols-[2fr_1fr] gap-2 items-center"},He={class:"grid grid-cols-[1fr_1fr_auto_1fr] gap-2 items-center"},Ke={class:"space-y-1"},Ye={class:"grid grid-cols-2 gap-2 items-center"},Je={class:"flex gap-1"},Xe={class:"flex gap-1"},Ze={class:"flex gap-1"},et={class:"mt-2"},tt={class:"space-y-1 mt-1"},at=["innerHTML"],lt={class:"mt-2"},st={class:"h-[150px] border rounded-lg mt-1"},ot={class:"mt-2"},nt={class:"h-[150px] border rounded-lg mt-1"},d="primary",B="flex items-center",de=G({__name:"RequestInfo",props:{detailData:{default:void 0},attachmentFileData:{default:void 0},isAllocation:{type:Boolean,default:!1}},emits:["on-update-request-status"],setup(q,{emit:N}){const l=q,u=N,_=S(!1),c=S(""),g=S(),R=S(),h=me({confirmBasic:!1,confirm:!1}),o=V(()=>{var s,a,C,D,Q,W,j,z,H,K,Y,J,X,Z,ee,te,ae,le;return{title:(s=l.detailData)==null?void 0:s.title,statusCodeName:((a=l.detailData)==null?void 0:a.statusCodeName)||"",requesterName:((C=l.detailData)==null?void 0:C.requesterName)||"",brdcPgmId:(D=l.detailData)==null?void 0:D.brdcPgmId,inputDateTime:(Q=l.detailData)==null?void 0:Q.inputDateTime,reqGrphSrcCdName:(W=l.detailData)==null?void 0:W.reqGrphSrcCdName,requesterDepartmentName:(j=l.detailData)==null?void 0:j.requesterDepartmentName,requesterPhoneNumber:(z=l.detailData)==null?void 0:z.requesterPhoneNumber,requesterInterPhoneNumber:(H=l.detailData)==null?void 0:H.requesterInterPhoneNumber,reqCnt:(K=l.detailData)==null?void 0:K.reqCnt,designerId:(Y=l.detailData)==null?void 0:Y.designerId,designerName:(J=l.detailData)==null?void 0:J.designerName,designerPhoneNumber:(X=l.detailData)==null?void 0:X.designerPhoneNumber,designerInterPhoneNumber:(Z=l.detailData)==null?void 0:Z.designerInterPhoneNumber,compltDtm:(ee=l.detailData)==null?void 0:ee.compltDtm,content:(te=l.detailData)==null?void 0:te.content,assignPhoneNumber:(ae=l.detailData)==null?void 0:ae.assignPhoneNumber,assignName:(le=l.detailData)==null?void 0:le.assignName}}),i=V(()=>l.attachmentFileData||[]),n=S({id:0,name:"",phoneNumber:"",inphoneNumber:""}),v=[I({headerName:"NO",maxWidth:60}),I({headerName:"영상",maxWidth:100}),I({headerName:"미디어ID",maxWidth:120}),I({headerName:"제목"})],b={modal:{userSearch:()=>{_.value=!_.value},userSelect:s=>{if(s.length>0){const a=s[0];n.value={id:Number(a.id),name:a.userNm||"",phoneNumber:a.phoneNumber||"",inphoneNumber:a.inphonNo||""}}}},select:{designerSelect:s=>{n.value={id:s.value,name:s.label,phoneNumber:s.phonNo,inphoneNumber:s.inphonNo}}},status:{updateRequestStatus:async s=>{try{if(l.detailData){const a=l.detailData.statusCode,C=n.value.id,D=[x.ASSIGN.id,x.IMPROVEMENT_REQUEST.id,x.COMPLETE.id];s===x.ASSIGN.id&&(D.includes(a)?(R.value="이미 배정된 상태입니다.",h.confirmBasic=!0):a===x.REQUEST.id&&(h.confirm=!0)),s===x.COMPLETE.id&&(ie[a]?(R.value=ie[a],h.confirmBasic=!0):a===x.ASSIGN.id&&(h.confirm=!0)),await u("on-update-request-status",l.detailData.id,s,C),n.value={id:0,name:"",phoneNumber:"",inphoneNumber:""}}}catch(a){console.error("ReqeustInfo updateRequestStatus Error",a)}}}};return A(()=>{var s;return(s=l.detailData)==null?void 0:s.content},async s=>{if(!s){c.value="";return}try{const a=s.replace(/(<br\s*\/?>\s*){2,}/g,"<br>").replace(/<p>\s*&nbsp;\s*<\/p>/gi,"").replace(/<p>\s*<\/p>/gi,""),C=await pe(a);c.value=C}catch(a){console.error("Error sanitizing content",a),c.value=""}},{immediate:!0}),A(()=>{var s;return(s=o.value)==null?void 0:s.brdcPgmId},s=>{s&&(g.value=s)},{immediate:!0}),A(()=>o.value.designerId,(s,a)=>{console.log(s,a)}),(s,a)=>{const C=re("tooltip");return f(),P("div",qe,[t("div",Re,[w(t("div",null,[e(r,{"model-value":o.value.title,readonly:"",class:"w-full",intent:d},null,8,["model-value"])],512),[[L,!s.isAllocation]]),w(t("div",Ee,[w(e(U,{icon:"cog",text:o.value.statusCodeName,class:M(B)},null,8,["text"]),[[C,"진행상태"]]),w(e(U,{icon:"pencilSquare",text:o.value.requesterName,class:M(B)},null,8,["text"]),[[C,"작성자"]]),w(e(U,{icon:"videoCamera",text:o.value.requesterName,class:M(B)},null,8,["text"]),[[C,"취재기자"]]),w(e(U,{icon:"clock",text:o.value.inputDateTime||"",class:M(B)},null,8,["text"]),[[C,"작성시간"]])],512),[[L,!s.isAllocation]]),t("div",Te,[e($,{label:"상세 정보"}),t("div",Ie,[t("div",Pe,[e(p,{label:"요청자"},{default:m(()=>[t("div",$e,[e(r,{"model-value":o.value.requesterDepartmentName,intent:d,disabled:""},null,8,["model-value"]),e(r,{"model-value":o.value.requesterName,intent:d,disabled:""},null,8,["model-value"])])]),_:1}),e(p,{label:"전화번호"},{default:m(()=>[t("div",ke,[e(r,{"model-value":o.value.requesterPhoneNumber,class:"flex-[2]",intent:d,disabled:""},null,8,["model-value"]),e(r,{"model-value":o.value.requesterInterPhoneNumber,class:"flex-[1]",intent:d,disabled:""},null,8,["model-value"])])]),_:1})]),t("div",Ae,[s.isAllocation?(f(),P("div",Me,[e(p,{label:"프로그램"},{default:m(()=>[e(se,{modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=D=>g.value=D),label:"",class:"w-full",disabled:""},null,8,["modelValue"])]),_:1}),e(p,{label:"요청건수"},{default:m(()=>[t("div",Ve,[e(r,{"model-value":o.value.reqCnt,readonly:"",intent:d},null,8,["model-value"]),a[7]||(a[7]=t("span",null,"/",-1)),e(r,{"model-value":o.value.statusCodeName,readonly:"",intent:d},null,8,["model-value"])])]),_:1})])):(f(),P(ce,{key:0},[t("div",Ge,[e(p,{label:"프로그램"},{default:m(()=>[e(se,{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=D=>g.value=D),label:"",class:"w-full",disabled:""},null,8,["modelValue"])]),_:1}),e(p,{label:"의뢰일시"},{default:m(()=>[e(r,{"model-value":o.value.inputDateTime,class:"w-full",intent:d,disabled:""},null,8,["model-value"])]),_:1})]),t("div",Le,[e(p,{label:"요청건수"},{default:m(()=>[t("div",Oe,[e(r,{"model-value":o.value.reqCnt,readonly:"",intent:d},null,8,["model-value"]),a[6]||(a[6]=t("span",null,"/",-1)),e(r,{"model-value":o.value.statusCodeName,readonly:"",intent:d},null,8,["model-value"])])]),_:1})])],64))]),t("div",Ue,[e(p,{label:"첨부파일"},{default:m(()=>[t("div",Be,[e(Ne,{"row-data":i.value,"is-read-only":"","show-open-window-icon":!1},null,8,["row-data"])])]),_:1}),t("div",Fe,[e(k,{"button-text":"전체다운로드",disabled:!i.value.length},null,8,["disabled"])])])]),t("div",Qe,[e($,{label:"배정정보"}),t("div",We,[w(t("div",je,[e(p,{label:"편집데스크"},{default:m(()=>[t("div",ze,[e(r,{"model-value":o.value.assignPhoneNumber,intent:d,readonly:""},null,8,["model-value"]),e(r,{"model-value":o.value.assignName,intent:d,readonly:""},null,8,["model-value"])])]),_:1}),w(e(p,{label:"디자이너"},{default:m(()=>[t("div",He,[e(r,{"model-value":o.value.designerName,intent:d,readonly:""},null,8,["model-value"]),e(r,{"model-value":o.value.designerPhoneNumber,intent:d,readonly:""},null,8,["model-value"]),a[8]||(a[8]=t("span",null,"/",-1)),e(r,{"model-value":o.value.designerInterPhoneNumber,intent:d,readonly:""},null,8,["model-value"])])]),_:1},512),[[L,!s.isAllocation]])],512),[[L,!s.isAllocation]]),w(t("div",Ke,[e(p,{label:"편집데스크"},{default:m(()=>[t("div",Ye,[e(r,{"model-value":o.value.assignPhoneNumber,intent:d,readonly:""},null,8,["model-value"]),e(r,{"model-value":o.value.assignName,intent:d,readonly:""},null,8,["model-value"])])]),_:1}),e(p,{label:"디자이너"},{default:m(()=>[t("div",Je,[t("div",Xe,[e(r,{"model-value":n.value.name||o.value.designerName,intent:d,class:"flex-grow",readonly:""},null,8,["model-value"]),e(k,{icon:"users",intent:d,class:"w-[2rem]",onClick:b.modal.userSearch},null,8,["onClick"])]),t("div",Ze,[e(r,{"model-value":n.value.phoneNumber||o.value.designerPhoneNumber,intent:d,class:"flex-grow",readonly:""},null,8,["model-value"]),a[9]||(a[9]=t("span",{class:"text-center"},"/",-1)),e(r,{"model-value":n.value.inphoneNumber||o.value.designerInterPhoneNumber,intent:d,class:"flex-grow",readonly:""},null,8,["model-value"]),e(we,{intent:d,onOnSelected:b.select.designerSelect},null,8,["onOnSelected"]),e(k,{"button-text":"배정",class:"w-[3rem]",intent:d,disabled:n.value.id===0,onClick:a[2]||(a[2]=D=>b.status.updateRequestStatus("0002"))},null,8,["disabled"]),e(k,{"button-text":"배정취소",class:"w-[4rem]",intent:d,disabled:n.value.id===0&&!o.value.designerId,onClick:a[3]||(a[3]=D=>b.status.updateRequestStatus("0006"))},null,8,["disabled"])])])]),_:1})],512),[[L,s.isAllocation]]),e(p,{label:"완료일시"},{default:m(()=>[e(r,{"model-value":o.value.compltDtm,intent:d,readonly:""},null,8,["model-value"])]),_:1})])]),t("div",et,[e($,{label:"의뢰 내용"}),t("div",tt,[t("div",{class:"leading-relaxed break-words w-full h-[300px] box-border overflow-auto border p-2 rounded-md bg-white",innerHTML:c.value},null,8,at)])]),t("div",lt,[e($,{label:"참조 영상"}),t("div",st,[e(F,{"column-defs":v,"header-height":25})])]),t("div",ot,[e($,{label:"EDL"}),t("div",nt,[e(F,{"column-defs":v,"header-height":25})])])])]),_.value?(f(),E(ge,{key:0,onSelectedRow:b.modal.userSelect,onClose:b.modal.userSearch},null,8,["onSelectedRow","onClose"])):T("",!0),h.confirmBasic?(f(),E(oe,{key:1,type:"basic",title:"Error",text:R.value,onClose:a[4]||(a[4]=D=>h.confirmBasic=!1)},null,8,["text"])):T("",!0),h.confirm?(f(),E(oe,{key:2,title:"confirm",text:"푸시 알림을 발송 하시겠습니까?",onClose:a[5]||(a[5]=D=>h.confirm=!1)})):T("",!0)])}}}),it={class:"bg-gray-100 p-4 rounded-lg"},dt={class:"flex justify-between"},rt=G({__name:"ResultRegist",setup(q){const N=S([]);return(l,u)=>(f(),P("div",null,[t("div",null,[e($,{label:"CG 결과물 등록"})]),t("div",it,[t("div",null,[e(De,{"file-data":N.value,"onUpdate:fileData":u[0]||(u[0]=_=>N.value=_),mode:"create"},null,8,["file-data"])]),t("div",null,[t("div",dt,[e(p,{label:"취재기자"},{default:m(()=>[e(r,{intent:"primary"})]),_:1}),e(p,{label:"영상기자"},{default:m(()=>[e(r,{intent:"primary"})]),_:1}),e(k,{"button-text":"등록"})])])])]))}}),ut={class:"h-[calc(100vh-210px)] flex flex-col space-y-4"},mt={class:"h-[150px] border rounded-lg"},ct={class:"flex-1"},vt=G({__name:"Contents",setup(q){const N=[I({headerName:"NO",maxWidth:60}),I({headerName:"영상",maxWidth:100}),I({headerName:"미디어ID",maxWidth:120}),I({headerName:"제목",flex:1})],l=V(()=>({src:"https://www.shutterstock.com/shutterstock/videos/3487213993/preview/stock-footage-abstract-digital-data-transfer-with-colorful-vertical-lines-on-black-background-seamless-loop.mp4",type:"video/mp4"}));return(u,_)=>(f(),P("div",ut,[t("div",mt,[e(F,{"column-defs":N})]),t("div",ct,[e(ye,{"video-source":l.value},null,8,["video-source"])])]))}}),ft={class:"flex justify-between items-center"},pt={class:"text-sm"},_t={class:"h-full"},ht=G({__name:"RequestCgComment",props:{commentData:{}},emits:["on-submit-comment","on-remove-comment","on-toggle-reaction","on-refresh-comments"],setup(q,{emit:N}){const l=q,u=N,_=S(l.commentData),c={onSubmitComment:(n,v)=>{u("on-submit-comment",n,v)},onRemoveComment:n=>{u("on-remove-comment",n)},onToggleReaction:(n,v)=>{u("on-toggle-reaction",n,v)},onRefreshComments:()=>{u("on-refresh-comments")}},{commentCount:g,transformedComments:R,handleSubmit:h,handleRemove:o,handleComment:i}=Se({commentData:_,transformer:ne,actions:c});return(n,v)=>{const b=re("tooltip");return f(),P("div",null,[t("div",ft,[t("div",pt,"("+ve(y(g))+")",1),w(e(k,{icon:"arrowPath",type:"text"},null,512),[[b,"새로고침"]])]),t("div",_t,[e(Ce,{"comment-data":y(R),transformer:y(ne),onSubmit:y(h),onRemove:y(o),onToggleReaction:y(i)},null,8,["comment-data","transformer","onSubmit","onRemove","onToggleReaction"])])])}}}),bt={class:"h-full"},Gt=G({__name:"RequestCgTabPanel",props:{detailData:{default:void 0},attachmentFileData:{default:void 0},commentData:{default:void 0}},emits:["update-request-status","submit-comment","remove-comment","toggle-reaction","refresh-comments","load-comment"],setup(q,{emit:N}){const l=q,u=N,_=S(0),c=S({requestInfo:!0,editAllocation:!0,resultRegist:!0,contents:!0,comment:!0}),g=V(()=>[{id:1,name:"CG의뢰 정보",isShow:c.value.requestInfo},{id:2,name:"편집 배정정보",isShow:c.value.editAllocation},{id:3,name:"결과물 등록",isShow:c.value.requestInfo},{id:4,name:"콘텐츠",isShow:c.value.contents},{id:3,name:"코멘트",isShow:c.value.comment}]),R=S(l.detailData),h=S(l.attachmentFileData),o=S(l.commentData);return A(()=>l.detailData,i=>{R.value=i},{immediate:!0}),A(()=>l.attachmentFileData,i=>{h.value=i},{immediate:!0}),A(()=>l.commentData,i=>{o.value=i},{immediate:!0}),(i,n)=>(f(),P("div",bt,[e(fe,{tabs:g.value,"is-plain-text-mode":!0,"is-compact-mode":!0,onChange:n[5]||(n[5]=v=>_.value=v)},{default:m(()=>[c.value.requestInfo?(f(),E(y(O),{key:0,unmount:!1,class:"h-[calc(100vh-190px)]"},{default:m(()=>[e(de,{"detail-data":i.detailData},null,8,["detail-data"])]),_:1})):T("",!0),c.value.editAllocation?(f(),E(y(O),{key:1,unmount:!1,class:"h-[calc(100vh-190px)]"},{default:m(()=>[e(de,{"detail-data":i.detailData,"is-allocation":"",onOnUpdateRequestStatus:n[0]||(n[0]=(v,b,s)=>u("update-request-status",v,b,s))},null,8,["detail-data"])]),_:1})):T("",!0),c.value.requestInfo?(f(),E(y(O),{key:2,unmount:!1},{default:m(()=>[e(rt)]),_:1})):T("",!0),c.value.contents?(f(),E(y(O),{key:3,unmount:!1},{default:m(()=>[e(vt)]),_:1})):T("",!0),c.value.comment?(f(),E(y(O),{key:4,unmount:!1},{default:m(()=>[e(ht,{"comment-data":i.commentData,onOnSubmitComment:n[1]||(n[1]=(v,b)=>u("submit-comment",v,b)),onOnRemoveComment:n[2]||(n[2]=v=>u("remove-comment",v)),onOnToggleReaction:n[3]||(n[3]=(v,b)=>u("toggle-reaction",v,b)),onOnRefreshComments:n[4]||(n[4]=()=>u("refresh-comments"))},null,8,["comment-data"])]),_:1})):T("",!0)]),_:1},8,["tabs"])]))}});export{At as R,Gt as _};
