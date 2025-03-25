import{d as R,a5 as P,k as x,t as M,a as h,c as V,Y as o,G as l,a6 as B,a0 as v,j as p,a1 as g,w,X as re,a2 as de,aa as ce,aD as pe,u as me,V as ue,l as E,o as fe,an as Y,ao as ve,h as H,K as N,eI as ye,ae as G,ag as _e,ah as be,ap as ge}from"./index-eLyz9_Ts.js";import{_ as he}from"./VDCEditor.vue_vue_type_script_setup_true_lang-IhnNo6sk.js";import{_ as xe}from"./ConfirmModal.vue_vue_type_script_setup_true_lang-k_ZxaDhN.js";import{_ as S}from"./ModalButton.vue_vue_type_script_setup_true_lang-WIw8hxFk.js";import{_ as De}from"./GDatePicker.vue_vue_type_style_index_0_lang-aP5TJiAZ.js";import{G as $}from"./GSingleSelect-7u8H0FdH.js";import{R as Ce,a as z,b as F,c as we,_ as Ie}from"./InformationReportHeader.vue_vue_type_script_setup_true_lang-qmBVFvBq.js";import{_ as Fe}from"./FileDropzone.vue_vue_type_script_setup_true_lang-SVeHifZw.js";import{u as J}from"./file-Gx0JxWZZ.js";import{F as Ve}from"./file-division-code-x51qUgaH.js";const ke={class:"text-primary-gray-40 dark:text-white"},Ne={class:"flex items-center justify-start mb-4"},Se={class:"font-bold"},Me={class:"ml-3 grid grid-cols-24 gap-2 mb-2.5 items-center"},Ue={class:"col-span-4 text-right"},$e={class:"ml-3 grid grid-cols-12 gap-2 mb-2.5 items-center"},Re={class:"col-span-2 text-right"},Le={class:"ml-3 grid grid-cols-24 gap-2 mb-2.5 items-center"},Oe={class:"col-span-4 text-right"},Ae={class:"ml-3 grid grid-cols-12 gap-2 mb-2.5 items-center"},Te={class:"col-span-2 text-right"},je={class:"ml-3 grid grid-cols-12 gap-2 mb-4"},Be={class:"flex items-center justify-start mb-4"},Ee={class:"font-bold"},Ye={class:"ml-3 grid grid-cols-12 gap-2 mb-2.5 items-center"},He={class:"col-span-2 text-right"},Ge={class:"ml-3 grid grid-cols-12 gap-2 mb-2.5 items-center"},Pe={class:"col-span-2 text-right"},ze={class:"ml-3 grid grid-cols-12 gap-2 mb-2.5 items-center"},Je={class:"col-span-2 text-right"},Ke={class:"ml-3 grid grid-cols-12 gap-2 mb-2.5 items-center"},qe={class:"col-span-2 text-right"},Qe={class:"ml-3 grid grid-cols-12 gap-2 mb-2.5 items-center"},Xe={class:"col-span-2 text-right"},We=R({__name:"InformationReportInformation",props:{dataInfo:{}},emits:["update:dataInfo"],setup(I,{emit:y}){const m=I,D=y,{t:u}=P(),a=x(m.dataInfo),b=x(),_=(r,t)=>JSON.stringify(r)!==JSON.stringify(t);return M(()=>m.dataInfo,r=>{_(a.value,r)&&(a.value=r)},{deep:!0}),M(()=>a.value,r=>{_(m.dataInfo,r)&&D("update:dataInfo",r)},{deep:!0}),M(()=>a.value.reportDivMain,r=>{if(!(r!=null&&r.code)){b.value=[F[0]];return}if(r.code===we.SNS.code){b.value=F;return}b.value=[F[0]],D("update:dataInfo",{...a.value,reportDivSub:F[0]})}),(r,t)=>(h(),V("div",ke,[o("div",Ne,[l(B,{icon:"custom-chevron",size:"w-5 h-5",class:"mr-2"}),o("p",Se,v(p(u)("Community.상세정보")),1)]),o("div",Me,[o("p",Ue,v(p(u)("Information.제보형태")),1),l($,{modelValue:a.value.reportFld,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value.reportFld=s),"track-by":"code","item-label":"label",options:p(Ce),placeholder:"제보 분류별 전체",intent:"primary",class:"col-span-20"},null,8,["modelValue","options"])]),o("div",$e,[o("p",Re,v(p(u)("Information.분류")),1),l($,{modelValue:a.value.reportDivMain,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value.reportDivMain=s),"track-by":"code","item-label":"label",options:p(z),intent:"primary",class:"col-span-5","options-limit":20},null,8,["modelValue","options"]),l($,{modelValue:a.value.reportDivSub,"onUpdate:modelValue":t[2]||(t[2]=s=>a.value.reportDivSub=s),"track-by":"code","item-label":"label",options:b.value,intent:"primary",class:"col-span-5","options-limit":20},null,8,["modelValue","options"])]),o("div",Le,[o("p",Oe,v(p(u)("Community.작성자")),1),l(g,{modelValue:a.value.inputrNm,"onUpdate:modelValue":t[3]||(t[3]=s=>a.value.inputrNm=s),readonly:"",intent:"primary",class:"col-span-10"},null,8,["modelValue"]),l(g,{modelValue:a.value.inputDeptNm,"onUpdate:modelValue":t[4]||(t[4]=s=>a.value.inputDeptNm=s),readonly:"",intent:"primary",class:"col-span-10"},null,8,["modelValue"])]),o("div",Ae,[o("p",Te,v(p(u)("Information.제보일시")),1),l(De,{modelValue:a.value.reportDtm,"onUpdate:modelValue":t[5]||(t[5]=s=>a.value.reportDtm=s),class:"col-span-10",intent:"primary",format:"yyyy-MM-dd HH:mm:ss","enable-time-picker":"","enable-seconds":"","model-type":"yyyy-MM-dd HH:mm:ss"},null,8,["modelValue"])]),o("div",je,[t[11]||(t[11]=o("p",{class:"col-span-2"},null,-1)),o("div",null,[l(de,{class:"!bg-dark-secondary text-white text-sm h-[29px] font-bold hover:!bg-primary"},{default:w(()=>[re(v(p(u)("Community.권한설정")),1)]),_:1})])]),o("div",Be,[l(B,{icon:"custom-chevron",size:"w-5 h-5",class:"mr-2"}),o("p",Ee,v(p(u)("Information.제보자 정보")),1)]),o("div",Ye,[o("p",He,v(p(u)("Information.성명")),1),l(g,{modelValue:a.value.reportNm,"onUpdate:modelValue":t[6]||(t[6]=s=>a.value.reportNm=s),intent:"primary",class:"col-span-10"},null,8,["modelValue"])]),o("div",Ge,[o("p",Pe,v(p(u)("Information.핸드폰 1")),1),l(g,{modelValue:a.value.phone1,"onUpdate:modelValue":t[7]||(t[7]=s=>a.value.phone1=s),intent:"primary",class:"col-span-10",type:"tel"},null,8,["modelValue"])]),o("div",ze,[o("p",Je,v(p(u)("Information.핸드폰 2")),1),l(g,{modelValue:a.value.phone2,"onUpdate:modelValue":t[8]||(t[8]=s=>a.value.phone2=s),intent:"primary",class:"col-span-10",type:"tel"},null,8,["modelValue"])]),o("div",Ke,[o("p",qe,v(p(u)("Information.e-mail")),1),l(g,{modelValue:a.value.email,"onUpdate:modelValue":t[9]||(t[9]=s=>a.value.email=s),intent:"primary",class:"col-span-10"},null,8,["modelValue"])]),o("div",Qe,[o("p",Xe,v(p(u)("Information.주소")),1),l(g,{modelValue:a.value.reportrAddr,"onUpdate:modelValue":t[10]||(t[10]=s=>a.value.reportrAddr=s),intent:"primary",class:"col-span-10"},null,8,["modelValue"])])]))}}),Ze={class:"text-primary-purple-500 dark:text-white"},et=R({__name:"InformationReportAttachFile",props:{fileList:{}},emits:["update:fileList"],setup(I,{emit:y}){const m=I,D=y,{fileDownload:u}=J(),a=x(m.fileList||[]),b=r=>{u(r.file)},_=(r,t)=>{t.stopPropagation(),t.preventDefault(),a.value.splice(r,1)};return M(()=>a.value,r=>{D("update:fileList",r)}),(r,t)=>(h(),V("div",Ze,[o("div",null,[l(Fe,{"file-data":a.value,"onUpdate:fileData":t[0]||(t[0]=s=>a.value=s),mode:"create","is-tripped":!0,"is-center":!0,icon:"plus-circle",message:"드래그앤 드랍 또는 클릭으로 파일을 추가하세요","custom-class-icon":"mb-2 text-primary-gray-surface-500","file-list-custom-class":"text-black dark:text-white px-0","is-show-file-list-bottom":"",onOnDownloadFile:b,onOnDeleteFile:_},{description:w(()=>t[1]||(t[1]=[o("div",{class:"mb-8 mt-2 mx-2"},[o("p",null,"* 파일 하나당 최대 200MB까지 업로드할 수 있습니다."),o("p",null,"* 등록 개수는 최대 5개 입니다.")],-1)])),_:1},8,["file-data"])])]))}}),tt={class:"dark:text-white text-xs"},ot={class:"flex justify-between flex-grow h-full overflow-y-hidden flex-wrap pt-2"},at={class:"flex flex-col w-[70%] p-5 border border-primary-gray-999 rounded-md h-[85vh]"},st={class:"flex items-center gap-2 mb-3"},it={class:"w-[40px] text-right mr-2 font-bold text-primary-gray-40 dark:text-white"},lt={class:"flex-grow overflow-y-auto"},nt={class:"flex flex-col w-[29.5%] py-2 px-1 border border-primary-gray-999 rounded-md h-[85vh]"},rt={class:"px-11 h-[50px] border-t border-primary-gray-surface flex items-center justify-center"},dt={key:0,class:"flex items-center justify-center gap-x-2 p-2 w-full"},ct={key:1,class:"flex items-center justify-center gap-x-2 w-full"},xt=R({__name:"InformationReportCreateAndEdit",props:{id:{}},setup(I){const y=I,{t:m}=P(),D=[{id:1,name:m("Community.상세정보")},{id:2,name:m("Community.첨부파일")}],u=ce(),{getUserInfo:a}=u,{fileUpload:b}=J(),_=pe(),{moveListInformationReport:r}=ge(),t=me(),s=x([]),n=x({reportTitl:"",reportCtt:"",reportNm:"",email:"",phone1:"",phone2:"",reportrAddr:"",reportDtm:"",reportFldCd:"",attcFileIds:[],inputrNm:"",inputDeptNm:"",reportDivMainCd:"",reportDivSubCd:"",reportFld:{code:"",label:""},reportDivMain:{code:"",label:""},reportDivSub:{code:"",label:""}}),L=x(),O=x([]),d=ue({isOpen:!1,title:"",content:"",type:"confirm",case:"confirm",icon:"exclamationCircle"}),A=E(()=>a),U=E(()=>!!y.id),K=e=>e.map(i=>({...i,name:i.fileName})),q=e=>{const i=z.find(f=>f.code===e.reportDivMainCd),c=F.find(f=>f.code===e.reportDivSubCd);i&&(n.value.reportDivMain=i),c&&(n.value.reportDivSub=c)},Q=e=>{n.value={...e,reportDtm:G(e.reportDtm).format("YYYY-MM-DD HH:mm:ss"),reportFld:{code:e.reportFldCd.code,label:e.reportFldCd.desciption},reportDivMain:{code:e.reportDivMainCd,label:e.reportDivMainCd},reportDivSub:{code:e.reportDivSubCd,label:e.reportDivSubCd},attcFileIds:[],inputrNm:e.inputrNm,inputDeptNm:e.inputDeptNm,reportFldCd:e.reportFldCd.code},q(e),s.value=K(e.reportAttachmentFileList),O.value=_e.cloneDeep(s.value)},X=async e=>{try{const i=await _.contactUs.basic.findOne(e);if(i.success){const c=i.data;Q(c)}}catch(i){console.error(i)}},T=async()=>{var c;if(!s.value)return[];const e=(c=s==null?void 0:s.value)==null?void 0:c.filter(f=>f instanceof File).map(async f=>{const C={fileName:f.name,fileDivisionCode:Ve.Report.id,publicYn:"Y",file:f},j=await b(C);if(j.success)return j.data.id});return await Promise.all(e)},W=()=>{d.title="Information",d.isOpen=!0,d.content=m("Community.제목을 입력하여 주세요"),d.type="basic",d.case="check-title",d.icon="customInfo"},Z=()=>{d.title="확인",d.isOpen=!0,d.content=U.value?`${m("Community.내용이 변경되었습니다")}.
${m("Community.저장하시겠습니까?")}`:m("Community.저장하시겠습니까?"),d.type="confirm",d.case=U.value?"edit":"create",d.icon="customQuestionMark"},ee=()=>{var e;(e=L.value)==null||e.onClose()},k=()=>{d.isOpen=!1},te=async e=>{const i=y.id;i&&await _.contactUs.basic.deleteAttachFile(i,{reportFileIdList:e})},oe=async()=>{const e=y.id;if(!e)return;const i=O.value.filter(f=>!s.value.some(C=>C.fileId===f.fileId)).map(f=>f.id);i.length&&await te(i);const c=await T();c.length&&await _.contactUs.basic.addAttachFile(e,{fileIdList:c})},ae=async(e,i)=>{await oe();const c=await _.contactUs.basic.update(e,{...i,attcFileIds:[]});c!=null&&c.success?(window.Notify.success({message:be.communityReporterBoard.edit}),r(t,"Edit")):window.Notify.error({message:"Success"})},se=async e=>{const i=await _.contactUs.basic.create(e);i!=null&&i.success?(window.Notify.success({message:"Success"}),r(t)):window.Notify.error({message:i.msg})},ie=()=>{if(!n.value.reportTitl){W();return}Z()},le=async()=>{var c,f,C;k();const e=await T(),i={reportTitl:n.value.reportTitl,reportCtt:n.value.reportCtt,reportNm:n.value.reportNm,email:n.value.email,phone1:n.value.phone1,phone2:n.value.phone2,reportrAddr:n.value.reportrAddr,reportDtm:ye(n.value.reportDtm)?G(n.value.reportDtm).toISOString():"",reportFldCd:(c=n.value.reportFld)==null?void 0:c.code,attcFileIds:e.length?e:[],reportDivMainCd:(f=n.value.reportDivMain)==null?void 0:f.code,reportDivSubCd:(C=n.value.reportDivSub)==null?void 0:C.code};U.value&&y.id?ae(y.id,i):se(i)},ne=e=>{n.value={...n.value,...e}};return fe(async()=>{if(y.id){await X(y.id);return}n.value.inputrNm=A.value.userNm,n.value.inputDeptNm=A.value.deptNm}),(e,i)=>(h(),V("div",tt,[l(Ie,{ref_key:"headerRef",ref:L,"is-edit-and-create":!0,onOnSave:ie},null,512),o("div",ot,[o("div",at,[o("div",st,[o("p",it,v(p(m)("Community.제목")),1),l(g,{modelValue:n.value.reportTitl,"onUpdate:modelValue":i[0]||(i[0]=c=>n.value.reportTitl=c),name:"title",class:"w-3/5",intent:"primary","custom-input-class":"rounded-none"},null,8,["modelValue"])]),o("div",lt,[l(he,{content:n.value.reportCtt,"editor-class":"h-full","onUpdate:content":i[1]||(i[1]=c=>n.value.reportCtt=c)},null,8,["content"])])]),o("div",nt,[o("div",null,[l(ve,{"is-plain-text-mode":!0,"overflow-class":!0,tabs:D,"is-compact-mode":!0,class:"justify-center space-y-3 rounded-xl"},{default:w(()=>[l(p(Y),null,{default:w(()=>[l(We,{"data-info":n.value,"onUpdate:dataInfo":ne},null,8,["data-info"])]),_:1}),l(p(Y),null,{default:w(()=>[l(et,{"file-list":s.value},null,8,["file-list"])]),_:1})]),_:1})])])]),d.isOpen?(h(),H(xe,{key:0,"use-slot":"",intent:"secondary",text:d.content,type:d.type,title:d.title,icon:d.icon,onClose:k},{bottom:w(()=>[o("div",rt,[d.type==="basic"?(h(),V("div",dt,[l(S,{text:"OK",icon:"check",onClick:k})])):N("",!0),d.type==="confirm"?(h(),V("div",ct,[l(S,{text:p(m)("Community.예"),icon:"check",onClick:le},null,8,["text"]),l(S,{type:"warning",text:p(m)("Community.아니요"),icon:"xMark",onClick:ee},null,8,["text"]),d.case==="edit"?(h(),H(S,{key:0,type:"warning",text:p(m)("Community.취소"),icon:"xMark",onClick:k},null,8,["text"])):N("",!0)])):N("",!0)])]),_:1},8,["text","type","title","icon"])):N("",!0)]))}});export{xt as _};
