import{k as i,aq as z,ap as q,d as C,ai as H,a as w,c as g,G as o,w as b,a1 as Y,aj as G,a2 as y,Y as n,a0 as M,K as R,$ as V,h as U,l as E,o as Q,X,al as $,a3 as Z,Q as W,t as D,au as T,j as S,an as J,ao as ee}from"./index-eLyz9_Ts.js";import"./journalist-QNhBHHjf.js";import"./organization-qjYuRO6g.js";import{a as oe,b as se}from"./JournalistHeader.vue_vue_type_script_setup_true_lang-49dK_3bg.js";import{_ as k}from"./FormItem.vue_vue_type_script_setup_true_lang-ZXQ_7x89.js";import{_ as ne}from"./OpenTypeSelect.vue_vue_type_script_setup_true_lang-iyP-3dNY.js";import{_ as te}from"./UserSearchModal.vue_vue_type_script_setup_true_lang-iHw_FmsN.js";import{c as N}from"./make-grid-column-aeLSdEws.js";import{_ as F}from"./VDCEditor.vue_vue_type_script_setup_true_lang-IhnNo6sk.js";import{u as le}from"./news-source-d-EIoPzs.js";import{_ as re}from"./GDatePicker.vue_vue_type_style_index_0_lang-aP5TJiAZ.js";function lo(){const e=i(),{moveJournalists:v}=q(),{deleteTabBy:a,getActiveTab:r}=z();return{formRef:e,closedTabAndMovePage:()=>{a(r),v()},handleFormButton:async()=>{var m;if(e.value)try{await((m=e.value)==null?void 0:m.onSubmitJournalist())}catch(s){console.error("Failed onSubmitJournalist",s)}}}}const K=e=>({journBbTitl:(e==null?void 0:e.journBbTitl)||"",journBbCtt:(e==null?void 0:e.journBbCtt)||"",notiYn:(e==null?void 0:e.notiYn)||"",inputrNm:(e==null?void 0:e.inputrNm)||"",inputDtm:(e==null?void 0:e.inputDtm)||"",kind:(e==null?void 0:e.kind)||"",openYn:(e==null?void 0:e.openYn)||"",lckYn:(e==null?void 0:e.lckYn)||"",attcFiles:void 0,workerGrid:void 0,strategyGrid:void 0,scheduleGrid:void 0,newsSourceGrid:void 0,journalistBoardKinDto:(e==null?void 0:e.journalistBoardKinDto)||{newsSources:[],situationBoards:[],straMtId:0,strategies:[],workingBoards:[]}}),ae=e=>({kind:e.kind,journBbTitl:e.journBbTitl,journBbCtt:e.journBbCtt,notiYn:"N",hrnkJournBbId:0,attcFileIds:[],editYn:"Y",openYn:e.openYn,journalistBoardKindDto:{newsSources:e.journalistBoardKinDto.newsSources,situationBoards:e.journalistBoardKinDto.situationBoards,straMtId:e.journalistBoardKinDto.straMtId,strategies:e.journalistBoardKinDto.strategies,workingBoards:e.journalistBoardKinDto.workingBoards}}),de={class:"space-y-1 p-2"},ue={class:"flex flex-col w-full"},ce={key:0,class:"text-error text-xs mt-1"},ie={class:"flex flex-col w-full"},me={key:0,class:"text-error text-xs mt-1"},pe={class:"flex justify-between"},O="primary",fe=C({__name:"JournalistFormDetailInfo",props:{mode:{},formData:{},kind:{default:""},kindError:{default:""},openYn:{default:""},openYnError:{default:""}},emits:["update:user","update:kind","update:openYn"],setup(e,{emit:v}){const a=v,r=i(),p=i(!1),d=()=>{r.value&&r.value.onFocusButton()},m={modal:{userSearch:()=>{p.value=!p.value}},user:{onSelect:s=>{s.length>0&&a("update:user",s[0])}},kind:{onChange:s=>{a("update:kind",s)}},openType:{onChange:s=>{a("update:openYn",s)}}};return(s,h)=>{const u=H("tooltip");return w(),g("div",de,[o(k,{label:"작성자"},{default:b(()=>[o(Y,{intent:O,onClick:d}),o(Y,{"model-value":s.formData.inputrNm,intent:O,onClick:d},null,8,["model-value"]),G(o(y,{ref_key:"searchButtonRef",ref:r,icon:"user",onClick:m.modal.userSearch},null,8,["onClick"]),[[u,"검색"]])]),_:1}),o(k,{label:"종류"},{default:b(()=>[n("div",ue,[o(oe,{"model-value":s.kind,class:"w-full","onUpdate:modelValue":m.kind.onChange},null,8,["model-value","onUpdate:modelValue"]),s.kindError?(w(),g("span",ce,M(s.kindError),1)):R("",!0)])]),_:1}),o(k,{label:"공개여부"},{default:b(()=>[n("div",ie,[o(ne,{"model-value":s.openYn,class:"w-full","onUpdate:modelValue":m.openType.onChange},null,8,["model-value","onUpdate:modelValue"]),s.openYnError?(w(),g("span",me,M(s.openYnError),1)):R("",!0)])]),_:1}),n("div",pe,[o(V,{label:"전체편집허용"}),o(y,{"button-text":"권한설정"})]),p.value?(w(),U(te,{key:0,onSelectedRow:m.user.onSelect,onClose:m.modal.userSearch},null,8,["onSelectedRow","onClose"])):R("",!0)])}}}),he={class:"flex flex-1"},ve={class:"flex-[1] p-2 overflow-hidden h-[200px]"},_e={class:"flex-none w-1/6 flex flex-col justify-center items-center space-y-3"},we={class:"flex-[2] overflow-hidden"},be={class:"flex justify-center gap-x-2 mb-2"},xe=C({__name:"NewsSourceAddModal",props:{initialSelectedList:{default:()=>[]}},emits:["close","on-add"],setup(e,{emit:v}){const a=e,r=v,p=le(),{fetchNewsSources:d}=p,m=i(null),s=i([]),h=i(null),u=i([]),x=i([]),f=i([]),I=E(()=>f.value.length===0),B=c=>{m.value=c.api},A=c=>{h.value=c.api},_={selections:{users:()=>{u.value=m.value.getSelectedRows()},selected:()=>{x.value=h.value.getSelectedRows()}},actions:{add:()=>{if(u.value.length){const c=u.value.filter(t=>!f.value.some(j=>j.userNm===t.providerName)).map(t=>({userNm:t.providerName,deptNm:t.companyName,telNo:t.phoneNumber,phonNo:t.phoneNumber,originalId:t.newsSourceId}));c.length!==u.value.length&&window.Notify.warning({message:"이미 추가된 취재원이 있습니다."}),s.value=s.value.filter(t=>!u.value.some(j=>j.newsSourceId===t.newsSourceId)),f.value=[...f.value,...c],u.value=[],m.value.deselectAll()}},remove:()=>{x.value.length&&(f.value=f.value.filter(c=>!x.value.some(t=>t.userNm===c.userNm)),x.value=[],h.value.deselectAll())},submit:()=>{r("on-add",f.value),r("close")},close:()=>[r("close")]},data:{newsSourceList:async()=>{const t=await d({delYn:"N"});t.success&&(s.value=t.data.content)}}},L=[{headerName:"",checkboxSelection:!0,maxWidth:40},{headerName:"이름",field:"providerName",maxWidth:80},{headerName:"전화번호",field:"phoneNumber",flex:1}],l=[{headerName:"",checkboxSelection:!0,maxWidth:60},{headerName:"이름",field:"userNm",maxWidth:80},{headerName:"소속",field:"deptNm"},{headerName:"유선",field:"telNo"},{headerName:"HP",field:"phonNo"}];return Q(()=>{_.data.newsSourceList().then(()=>{var c;(c=a.initialSelectedList)!=null&&c.length&&(f.value=a.initialSelectedList.map(t=>({userNm:t.name,deptNm:t.position,telNo:t.phoneNumber,phonNo:t.phoneNumber,originalId:t.newsSourceId})),s.value=s.value.filter(t=>{var j;return!((j=a.initialSelectedList)!=null&&j.some(P=>P.newsSourceId===t.newsSourceId))}))})}),(c,t)=>(w(),U(Z,{"modal-class":"w-[70%]",onClose:_.actions.close},{title:b(()=>t[0]||(t[0]=[X("취재원 등록")])),content:b(()=>[n("div",he,[n("div",ve,[o($,{"column-defs":L,"header-height":25,"row-data":s.value,"row-selection":"multiple","first-selected-row":!1,onOnGridReady:B,onSelectedRows:_.selections.users},null,8,["row-data","onSelectedRows"])]),n("div",_e,[o(y,{"button-text":"반영",icon:"chevronDoubleRight",size:"sm",onClick:_.actions.add},null,8,["onClick"]),o(y,{"button-text":"삭제",icon:"chevronDoubleLeft",size:"sm",onClick:_.actions.remove},null,8,["onClick"])]),n("div",we,[o($,{"column-defs":l,"header-height":25,"row-data":f.value,"first-selected-row":!1,onOnGridReady:A,onSelectedRows:_.selections.selected},null,8,["row-data","onSelectedRows"])])])]),bottom:b(()=>[n("div",be,[o(y,{"button-text":"등록",type:"primary",disabled:I.value,onClick:_.actions.submit},null,8,["disabled","onClick"]),o(y,{"button-text":"취소",type:"warning",onClick:_.actions.close},null,8,["onClick"])])]),_:1},8,["onClose"]))}}),Se={class:"flex flex-col h-[calc(100vh-150px)] w-[70%] p-5 border border-primary-gray-999 rounded-md"},ye={class:"flex items-center gap-2 mb-3"},Ne={class:"flex gap-2 h-full"},ge={class:"flex-[3] overflow-y-auto"},ke={class:"flex-[2] h-[200px] p-2"},$e={class:"flex justify-between mb-2"},Ce={class:"flex justify-center"},Be=C({__name:"NewsSourceForm",props:{formData:{}},emits:["update:title","update:content","update:news-sources"],setup(e,{emit:v}){const a=v,r=i(null),p=i([]),d=i({newsSourceSearch:!1}),m=[N({headerName:"이름",field:"name"}),N({headerName:"전화번호",field:"phoneNumber"}),N({headerName:"직책",field:"position"})],s=u=>{r.value=u.api},h={form:{title:u=>{a("update:title",u)},content:u=>{a("update:content",u)}},newsSource:{onAdd:u=>{const x=u.map(f=>({name:f.userNm,phoneNumber:f.phonNo,position:f.deptNm||"",newsSourceId:f.originalId}));p.value=[...p.value,...x],a("update:news-sources",p.value)}},modal:{toggleNewsSourceAddModal:()=>{d.value.newsSourceSearch=!d.value.newsSourceSearch}}};return(u,x)=>(w(),g("div",Se,[n("div",ye,[o(k,{label:"제목",class:"w-full"},{default:b(()=>[o(Y,{intent:"primary",class:"w-1/2","custom-input-class":"rounded-none"})]),_:1})]),n("div",Ne,[n("div",ge,[o(F,{mode:"editor",content:""})]),n("div",ke,[n("div",$e,[x[0]||(x[0]=n("span",{class:"text-sm"},"취재원정보",-1)),o(V,{label:"비공개"})]),o($,{"column-defs":m,"row-data":p.value,"header-height":25,onOnGridReady:s},null,8,["row-data"]),n("div",Ce,[o(y,{icon:"plusCircle","button-text":"취재원 추가",onClick:h.modal.toggleNewsSourceAddModal},null,8,["onClick"])])])]),d.value.newsSourceSearch?(w(),U(xe,{key:0,"initial-selected-list":p.value,onOnAdd:h.newsSource.onAdd,onClose:h.modal.toggleNewsSourceAddModal},null,8,["initial-selected-list","onOnAdd","onClose"])):R("",!0)]))}}),je={class:"flex flex-col h-[calc(100vh-150px)] w-[70%] p-5 border border-primary-gray-999 rounded-md"},Re={class:"flex justify-between items-center gap-2 mb-3 p-2 rounded-md bg-gray-200"},Ye={class:"flex gap-2 rounded-md w-full h-full"},Ie={class:"flex-[3] overflow-y-auto"},Ge={class:"w-full"},Ue={class:"flex-[2] h-[200px] p-2"},Ae={class:"flex justify-center"},Te=C({__name:"SituationBoardForm",props:{formData:{}},setup(e){const v=i(null),a=i([]),r=i([]),p=[N({headerName:"기획서/기사"}),N({headerName:"이름"})],d=[N({headerName:"이름",field:"name"}),N({headerName:"형태"})],m=s=>{v.value=s.api};return(s,h)=>(w(),g("div",je,[n("div",Re,[o(k,{label:"제목",class:"w-full"},{default:b(()=>[o(Y,{intent:"primary",class:"w-full","custom-input-class":"rounded-none"})]),_:1}),o(k,{label:"날짜",class:"w-full"},{default:b(()=>[o(re,{intent:"primary"})]),_:1})]),n("div",Ye,[n("div",Ie,[n("div",{class:W([a.value.length>0?"min-h-[200px]":"h-[30px]","transition-all duration-300"])},[o($,{"column-defs":p,"row-data":a.value,"header-height":25,"no-rows-message":""},null,8,["row-data"])],2),n("div",Ge,[o(y,{type:"tertiary",icon:"plusCircle",class:"w-full"})]),n("div",null,[o(F,{mode:"editor",content:""})])]),n("div",Ue,[h[0]||(h[0]=n("div",{class:"flex justify-between mb-2"},[n("span",{class:"text-sm"},"근무표")],-1)),o($,{"column-defs":p,"row-data":a.value,"header-height":25,onOnGridReady:m},null,8,["row-data"]),h[1]||(h[1]=n("div",{class:"flex justify-between mb-2"},[n("span",{class:"text-sm"},"근무자")],-1)),o($,{"column-defs":d,"row-data":r.value,"header-height":25,onOnGridReady:m},null,8,["row-data"]),n("div",Ae,[o(y,{icon:"plusCircle","button-text":"근무자 추가"})])])])]))}}),Fe={class:"flex flex-col h-[calc(100vh-150px)] w-[70%] p-5 border border-primary-gray-999 rounded-md"},Le={class:"flex justify-between items-center gap-2 mb-3"},Me={class:"mt-2"},Je=C({__name:"WorkingBoardForm",props:{formData:{}},setup(e){const v=i(null),a=i([]),r=[N({headerName:"NO"}),N({headerName:"날짜"}),N({headerName:"이름"}),N({headerName:"형식"})],p=d=>{v.value=d.api};return(d,m)=>(w(),g("div",Fe,[n("div",Le,[o(k,{label:"제목",class:"w-full"},{default:b(()=>[o(Y,{intent:"primary",class:"w-full","custom-input-class":"rounded-none"}),o(y,{"button-text":"엑셀 업로드"}),o(y,{"button-text":"템플릿 다운로드"})]),_:1})]),n("div",{class:W(["mt-2 w-1/2",[a.value.length>0?"min-h-[200px]":"h-[30px]"]])},[o($,{"column-defs":r,"row-data":a.value,"header-height":25,"no-rows-message":"",onOnGridReady:p},null,8,["row-data"])],2),n("div",Me,[o(F,{mode:"editor",content:""})])]))}}),Ke={class:"flex flex-col h-[calc(100vh-150px)] w-[70%] p-5 border border-primary-gray-999 rounded-md"},Oe={class:"flex justify-between items-center gap-2 mb-3"},Ve=C({__name:"MediaInformationForm",setup(e){return(v,a)=>(w(),g("div",Ke,[n("div",Oe,[o(k,{label:"제목",class:"w-full"},{default:b(()=>[o(Y,{intent:"primary",class:"w-full","custom-input-class":"rounded-none"})]),_:1})]),n("div",null,[o(F,{mode:"editor",content:""})])]))}}),Ee={class:"w-full"},We={class:"flex justify-between flex-grow h-full overflow-y-hidden flex-wrap pt-2"},Pe={class:"flex flex-col h-[calc(100vh-150px)] w-[29.5%] py-2 px-1 border border-primary-gray-999 rounded-md"},ze={class:"h-full"},ro=C({__name:"JournalistForm",props:{mode:{},formData:{default:void 0}},emits:["on-submit-journlist"],setup(e,{expose:v,emit:a}){const r=e,p=a,d=i(r.mode==="create"?K():r.formData??K()),{journBbTitl:m,kind:s,kindError:h,openYn:u,oppenYnError:x,handleSubmit:f}=se(),I=i([]),B=i({detailInfo:!0,attachedFile:!0}),A=i({title:"",content:"",newsSources:[]}),_={form:{onSubmit:f(async()=>{const l=ae({...d.value,journBbTitl:A.value.title,kind:s.value,openYn:u.value,journalistBoardKinDto:{newsSources:A.value.newsSources.map(c=>({newsSourceId:c.newsSourceId}))}});p("on-submit-journlist",l)})},newsSource:{onAdd:l=>{const c=l.map(t=>({name:t.userNm,phoneNumber:t.phonNo,position:t.deptNm||"",newsSourceId:t.originalId}));I.value=[...I.value,...c]}},detail:{onUpdateUser:l=>{d.value.inputrNm=l.userNm||""},onUpdateKind:l=>{s.value=l,d.value.kind=l},onUpdateOpenYn:l=>{u.value=l,d.value.openYn=l}}},L=E(()=>[{id:1,name:"상세정보",isShow:B.value.detailInfo},{id:2,name:"첨부파일",isShow:B.value.attachedFile}].filter(l=>l.isShow));return D(()=>r.formData,l=>{l&&r.mode==="edit"&&(m.value=l.journBbTitl,s.value=l.kind,u.value=l.openYn,d.value={...d.value,...l},l.newsSourceGrid&&(I.value=l.newsSourceGrid.map(c=>({name:c.name,phoneNumber:c.tel,position:"",newsSourceId:c.id}))))}),v({onSubmitJournalist:_.form.onSubmit}),(l,c)=>(w(),g("div",Ee,[n("div",We,[G(o(Be,{"form-data":r.formData},null,8,["form-data"]),[[T,S(s)==="news_source"||!S(s)]]),G(o(Te,{"form-data":r.formData},null,8,["form-data"]),[[T,S(s)==="situation_board"]]),G(o(Je,{"form-data":r.formData},null,8,["form-data"]),[[T,S(s)==="working_board"]]),G(o(Ve,{"form-data":r.formData},null,8,["form-data"]),[[T,S(s)==="media_information"]]),n("div",Pe,[n("div",ze,[o(ee,{"is-plain-text-mode":!0,"oveflow-class":!0,tabs:L.value,"is-compact-mode":!0,class:"justify-center space-y-3 rounded-xl"},{default:b(()=>[B.value.detailInfo?(w(),U(S(J),{key:0},{default:b(()=>[o(fe,{mode:l.mode,"form-data":d.value,kind:S(s),"kind-error":S(h),"open-yn":S(u),"open-yn-error":S(x),"onUpdate:user":_.detail.onUpdateUser,"onUpdate:kind":_.detail.onUpdateKind,"onUpdate:openYn":_.detail.onUpdateOpenYn},null,8,["mode","form-data","kind","kind-error","open-yn","open-yn-error","onUpdate:user","onUpdate:kind","onUpdate:openYn"])]),_:1})):R("",!0),B.value.attachedFile?(w(),U(S(J),{key:1})):R("",!0)]),_:1},8,["tabs"])])])])]))}});export{ro as _,lo as u};
