import{d as _,k as p,a as C,c as W,G as A,j as I,ai as De,aj as Z,h as F,a2 as H,K as R,aG as Ee,l as ee,am as Ae,al as Me,b4 as me,t as Ue,Y as $,F as Pe,C as Be,Q as Fe,a0 as te,aO as ue,aD as U,w as Y,a1 as Oe,X as ie,a3 as pe,aa as fe,aU as ne,b2 as Re,V as Ve,o as he,b0 as We,b6 as ce,ba as _e,aP as de,ah as je}from"./index-eLyz9_Ts.js";import"./vue-multiselect-Yz8FsF-E.js";import"./GSingleSelect-7u8H0FdH.js";import"./tag-Q73uuSte.js";import{_ as Ge}from"./ProgramSelect.vue_vue_type_script_setup_true_lang-UHoCrnxw.js";import"./article-type.code-5cb8riL1.js";import"./category-zIRntbmZ.js";import"./department-wnuBQoCo.js";import"./program-omP_c4K3.js";import{r as Je}from"./use-render-component-K20sHqiA.js";import{S as V,c as se,_ as qe}from"./icon-zhslyYqN.js";import"./GDatePicker.vue_vue_type_style_index_0_lang-aP5TJiAZ.js";/* empty css                                                                        */import"./code-mapper-C6rl9hti.js";import{u as Ye}from"./use-model-wrapper-XtiLc3Xd.js";import{_ as ze,a as Ke}from"./ArticleTabPanel.vue_vue_type_script_setup_true_lang-vwb57C9h.js";import{C as He}from"./cuesheet-item-code-_LsFMWbX.js";import"./NoDataIcon-o0HaqPy2.js";import"./use-date-GeeGTbYh.js";import"./GEditor.vue_vue_type_style_index_0_lang-FifEywK1.js";import"./GEditor.vue_vue_type_script_setup_true_lang-a2qGOvtc.js";import"./file-division-code-x51qUgaH.js";import"./file-Gx0JxWZZ.js";import"./ArticleTypeSelect.vue_vue_type_script_setup_true_lang-Kp5wzGNr.js";import"./SpellCheckerModal.vue_vue_type_script_setup_true_lang-Vt6XDlm8.js";import"./GMovableModal.vue_vue_type_script_setup_true_lang-elQvXjL0.js";import"./spell-check-OnBbfX8h.js";import"./PageLoader.vue_vue_type_script_setup_true_lang-ZvbvX14z.js";import"./GNoData.vue_vue_type_script_setup_true_lang-rWUb5JCO.js";import"./CuesheetPrompter-o2cqkH-a.js";import"./ArticleFileTabPanel.vue_vue_type_script_setup_true_lang-Yk1q8ET1.js";import"./GTextarea-5GIFD2Mo.js";/* empty css                                                                  */import"./FileDropzone.vue_vue_type_script_setup_true_lang-SVeHifZw.js";import"./FileListView.vue_vue_type_script_setup_true_lang-A40KFqZZ.js";import"./GVideoPlayer-1SUF8s3O.js";import"./main-sHItgwS4.js";import"./vue.runtime.esm-bundler-3P3R-Xon.js";import"./ArticleFormatSelect.vue_vue_type_script_setup_true_lang-0vSziBpo.js";import"./journalist-QNhBHHjf.js";import"./organization-qjYuRO6g.js";import"./UserSelect.vue_vue_type_script_setup_true_lang-Hk5THi0e.js";import"./ArticleDivisionSelect.vue_vue_type_script_setup_true_lang-Ln9_DwnO.js";import"./GTagSelect.vue_vue_type_script_setup_true_lang-WNNVbcKh.js";import"./GDateTimePicker-bSYwb_xW.js";import"./CoveragePlanSearch.vue_vue_type_script_setup_true_lang-kZic9Ocd.js";import"./CoveragePlanList.vue_vue_type_script_setup_true_lang-vJ0F3lvx.js";import"./DepartmentMultiSelect.vue_vue_type_script_setup_true_lang-OqmQVQH2.js";import"./coverage-plan-nI7mLZOB.js";import"./ConfirmButton.vue_vue_type_script_setup_true_lang-onM9evN8.js";import"./app-authority-code-Q9MU7mjP.js";import"./splitpanes.es-dEoJOrhT.js";import"./vue-resizable.umd.min-blE9hPz6.js";const Qe=_({__name:"CuesheetTemplateSearchForm",props:{searchCondition:{}},emits:["select:program"],setup(s,{emit:e}){const t=s,c=e,n=p(t.searchCondition),E=v=>{c("select:program",v)};return(v,y)=>(C(),W("div",null,[A(I(Ge),{modelValue:n.value.searchProgram,"onUpdate:modelValue":y[0]||(y[0]=S=>n.value.searchProgram=S),"preselect-first":"",label:"",onOnSelected:E},null,8,["modelValue"])]))}}),ve=_({__name:"CuesheetTemplateButtons",props:{isShowRefresh:{type:Boolean,default:!1},isShowCreate:{type:Boolean,default:!1},isShowEdit:{type:Boolean,default:!1},isShowDelete:{type:Boolean,default:!1},disabled:{default:()=>({refresh:!1,create:!1,edit:!1,delete:!1})},confirmTitle:{default:""},deleteCount:{default:1},tooltip:{default:()=>({refresh:"새로고침",create:"템플릿 생성",edit:"템플릿 수정",delete:"템플릿 삭제"})}},emits:["click:refresh","click:create","click:edit","click:delete"],setup(s){return(e,t)=>{const c=De("tooltip");return C(),W("div",null,[e.isShowRefresh?Z((C(),F(H,{key:0,icon:"arrow-path",disabled:e.disabled.refresh,onClick:t[0]||(t[0]=n=>e.$emit("click:refresh"))},null,8,["disabled"])),[[c,e.tooltip.refresh]]):R("",!0),e.isShowCreate?Z((C(),F(H,{key:1,icon:"plus",disabled:e.disabled.create,onClick:t[1]||(t[1]=n=>e.$emit("click:create"))},null,8,["disabled"])),[[c,e.tooltip.create]]):R("",!0),e.isShowEdit?Z((C(),F(H,{key:2,icon:"pencil",disabled:e.disabled.edit,onClick:t[2]||(t[2]=n=>e.$emit("click:edit"))},null,8,["disabled"])),[[c,e.tooltip.edit]]):R("",!0),e.isShowDelete?Z((C(),F(I(Ee),{key:3,disabled:e.disabled.delete,title:e.confirmTitle,onOnConfirm:t[3]||(t[3]=n=>e.$emit("click:delete"))},null,8,["disabled","title"])),[[c,e.tooltip.delete]]):R("",!0)])}}}),Xe={class:"flex flex-col items-end space-y-2"},Ze=_({__name:"CuesheetTemplateItemList",props:{isLoading:{type:Boolean,default:!1},canCreate:{type:Boolean,default:!1},rowData:{},iconList:{},userInfo:{}},emits:["selected-rows","click:create","click:edit","click:delete","double-clicked-row","on-clicked-icon","on-clicked-contextmenu"],setup(s,{emit:e}){const t=s,c=e,n=p([]),E={create:"아이템 생성",edit:"아이템 수정",delete:"아이템 삭제"},v=l=>{n.value=l,c("selected-rows",l)},y=ee(()=>({create:!t.canCreate,edit:!n.value.length,delete:!n.value.length})),S=l=>me(l.data.artclExtTime+l.data.cueItemTime),b=(l,f,d,m)=>{const o=document.querySelector(`button[data-button="${l}-${f.rowIndex}-${d}"]`);if(o&&o.getElementsByTagName("img").length>0){const w=o.getElementsByTagName("img")[0];w.src=m.symbolUrl;return}se({url:m.symbolUrl,css:["w-12","h-6"],targetElement:o})},L=(l,f,d,m)=>{var w,N,T,D;const o=l.querySelector(`button[data-button="${f}-${d.rowIndex}-${m}"]`);for(let g=0;g<=m;g+=1)d.data.videoSymbolList&&f===V.videoSymbol.name&&((w=d.data.videoSymbolList[g])==null?void 0:w.symbolOrd)===m?se({url:(N=d.data.videoSymbolList[g])==null?void 0:N.symbolUrl,css:["w-10","h-6"],targetElement:o}):d.data.audioSymbolList&&f===V.audioSymbol.name&&((T=d.data.audioSymbolList[g])==null?void 0:T.symbolOrd)===m&&se({url:(D=d.data.audioSymbolList[g])==null?void 0:D.symbolUrl,css:["w-10","h-6"],targetElement:o})},x=(l,f=1)=>{const d=l.colDef.field,m=document.createElement("div");m.classList.add("flex","space-x-1","items-center");for(let o=0;o<f;o+=1){const w=document.createElement("div"),N={iconList:t.iconList,rowIndex:l.rowIndex,iconIndex:o,disabled:!1,type:d,onClickedIcon:D=>{c("on-clicked-icon",{type:d,data:l.data,index:N.iconIndex,icon:D}),b(d,l,o,D)},onClickedContextmenu:(D,g)=>{c("on-clicked-contextmenu",{event:D,data:l.data,type:d},g)}},T=Je(qe,N,w);L(T,d,l,o),m.appendChild(T)}return m},j=[{headerName:"",field:"drag",sortable:!1,maxWidth:40,rowDrag:!0},{field:"checkbox",sortable:!1,maxWidth:50,headerCheckboxSelection:!0,checkboxSelection:!0,showDisabledCheckboxes:!0},{headerName:"순번",field:"no",sortable:!1,minWidth:60,maxWidth:60,valueGetter:"node.rowIndex",cellRenderer:l=>Ae(l)},{headerName:"제목",field:"cueItemTitl",minWidth:180,sortable:!1},{headerName:"V",field:V.videoSymbol.name,minWidth:180,maxWidth:180,cellClass:"flex items-center justify-center",cellRenderer:l=>x(l,3),sortable:!1},{headerName:"A",field:V.audioSymbol.name,minWidth:180,maxWidth:180,cellClass:"flex items-center justify-center",cellRenderer:l=>x(l,3),sortable:!1},{headerName:"담당",field:"updtrNm",minWidth:80,cellClass:"flex items-center",sortable:!1},{headerName:"길이",field:"cueItemTime",minWidth:80,maxWidth:100,valueGetter:S},{headerName:"광고",field:"commercial",sortable:!1}],G=()=>{c("double-clicked-row")};return(l,f)=>{var d,m;return C(),W("div",Xe,[A(I(ve),{class:"flex space-x-1.5","is-show-create":"","is-show-edit":"","is-show-delete":"",tooltip:E,disabled:y.value,"delete-count":n.value.length,"confirm-title":(m=(d=n.value[0])==null?void 0:d.data)==null?void 0:m.cueItemTitl,"onClick:create":f[0]||(f[0]=o=>l.$emit("click:create")),"onClick:edit":f[1]||(f[1]=o=>l.$emit("click:edit")),"onClick:delete":f[2]||(f[2]=o=>l.$emit("click:delete"))},null,8,["disabled","delete-count","confirm-title"]),A(Me,{"column-defs":j,"row-data":l.rowData,"is-loading":l.isLoading,"first-selected-row":!1,"row-selection":"multiple",onSelectedRows:v,onDoubleClickedRow:G},null,8,["row-data","is-loading"])])}}}),et={class:"dark:bg-dark-grid dark:text-dark-gray-200 bg-white flex flex-col border border-gray-300 dark:border-dark rounded-lg overflow-y-auto"},tt={class:"border-b dark:border-dark-border"},at={class:"w-full overflow-y-auto"},ot=["onClick"],st={class:"text-sm"},lt=_({__name:"CuesheetTemplateList",props:{isLoading:{type:Boolean},templates:{},selectedTemplate:{default:()=>({})}},emits:["update:selectedTemplate","click:template","click:refresh","click:create","click:edit","click:delete"],setup(s,{emit:e}){const t=s,c=e,n=Ye(t,c,"selectedTemplate");Ue(()=>t.templates,v=>{n.value=v[0]});const E=v=>{n.value=v,c("click:template")};return(v,y)=>{var S;return C(),W("div",et,[$("div",tt,[A(I(ve),{class:"flex justify-end space-x-1.5 p-2","is-show-refresh":"","is-show-create":"","is-show-edit":"","is-show-delete":"","confirm-title":(S=I(n))==null?void 0:S.cueTmpltNm,"onClick:refresh":y[0]||(y[0]=b=>v.$emit("click:refresh")),"onClick:create":y[1]||(y[1]=b=>v.$emit("click:create")),"onClick:edit":y[2]||(y[2]=b=>v.$emit("click:edit")),"onClick:delete":y[3]||(y[3]=b=>v.$emit("click:delete"))},null,8,["confirm-title"])]),$("div",at,[(C(!0),W(Pe,null,Be(v.templates,b=>(C(),W("div",{key:b.id,class:Fe(["dark:hover:bg-[#1e3b54] hover:bg-blue-100 border-b dark:border-dark-border p-2",[{"bg-blue-50 dark:bg-[#1e3b54]":I(n)&&b.id===I(n).id}]]),onClick:L=>E(b)},[$("span",st,te(b.cueTmpltNm),1)],10,ot))),128))])])}}}),rt=ue("cuesheet-template",{state:()=>({isLoading:!1,cuesheetTemplateList:[]}),getters:{getCuesheetTemplateList:s=>s.cuesheetTemplateList},actions:{async fetchCuesheetTemplate(s){try{const e=U();this.isLoading=!0;const t=await e.template.basic.findAll(s);return this.cuesheetTemplateList=t.data,t}catch(e){throw console.error("error",e),new Error(`Failed fetch cuesheet: ${e}`)}finally{this.isLoading=!1}},async createCuesheetTemplate(s){try{const e=U();return this.isLoading=!0,await e.template.basic.create(s)}catch(e){console.error("error",e)}finally{this.isLoading=!1}},async editCuesheetTemplate(s){try{const e=U();this.isLoading=!0;const{templateId:t,params:c}=s;return await e.template.basic.update(t,c)}catch(e){console.error("error",e)}finally{this.isLoading=!1}},async deleteCuesheetTemplate(s){try{const e=U();return this.isLoading=!0,await e.template.basic.delete(s)}catch(e){throw console.error("error",e),new Error("Fail delete cuesheet")}finally{this.isLoading=!1}}}}),ye=ue("cuesheet-template-item",{state:()=>({isLoading:!1,cuesheetTemplateItemList:[],cuesheetTemplateDetailItem:{}}),getters:{getCuesheetTemplateItemList:s=>s.cuesheetTemplateItemList},actions:{async fetchCuesheetTemplateItems(s){try{const e=U();this.isLoading=!0;const t=await e.template.detail.findAll(s);return this.cuesheetTemplateItemList=t.data,t}catch(e){throw console.error("error",e),new Error(`Failed fetch cuesheet template items: ${e}`)}finally{this.isLoading=!1}},async fetchCuesheetTemplateItem(s){try{const t=await U().template.detail.findOne(s);return this.cuesheetTemplateDetailItem=t.data,t}catch(e){console.log("error",e)}},async createCuesheetTemplateItem(s){try{const e=U();return this.isLoading=!0,await e.template.detail.create(s)}catch(e){throw console.error("error",e),new Error(`Failed create cuesheet template item: ${e}`)}finally{this.isLoading=!1}},async editCuesheetTemplateItem(s,e){try{const t=U();return this.isLoading=!0,await t.template.detail.update(s,e)}catch(t){throw console.log("error",t),new Error(`Failed update cuesheet template item: ${t}`)}finally{this.isLoading=!1}},async deleteCuesheetTemplateItem(s){try{const e=U();return this.isLoading=!0,await e.template.detail.delete(s)}catch(e){throw console.log("error",e),new Error(`Failed update cuesheet template item: ${e}`)}finally{this.isLoading=!1}}}}),it={class:"flex flex-col h-full space-y-5"},nt={class:"sm:flex sm:flex-row-reverse pt-4 pb-2"},ct={class:"space-x-3 flex items-center"},dt=_({__name:"CuesheetTemplateInfoModal",props:{mode:{},template:{}},emits:["click:close","click:create","click:edit"],setup(s,{emit:e}){const t=s,c=e,n=p(t.mode==="edit"?t.template.cueTmpltNm:""),E=ee(()=>t.mode==="create"?"생성":"수정"),v=ee(()=>!n.value),y=()=>{t.mode==="create"?c("click:create",n.value):c("click:edit",n.value)},S=()=>{c("click:close")};return(b,L)=>(C(),F(pe,{"modal-class":"2xl:w-44 2xl:min-w-[300px]",onClose:S},{title:Y(()=>[$("div",null,"큐시트 템플릿 "+te(E.value),1)]),content:Y(()=>[$("div",it,[A(Oe,{modelValue:n.value,"onUpdate:modelValue":L[0]||(L[0]=x=>n.value=x),label:"템플릿 이름","aria-label":"templateName",placeholder:"템플릿 이름",focus:!0,require:!0},null,8,["modelValue"]),$("div",nt,[$("div",ct,[A(H,{type:"secondary",class:"dark:bg-dark-secondary dark:text-white dark:hover:bg-gray-600",onClick:S},{default:Y(()=>L[1]||(L[1]=[ie("취소")])),_:1}),A(H,{disabled:v.value,onClick:y},{default:Y(()=>[ie(te(b.mode==="create"?"추가":"수정"),1)]),_:1},8,["disabled"])])])])]),_:1}))}}),mt={class:"flex flex-col h-full"},ut={class:"flex justify-center space-x-2 h-full overflow-y-hidden"},pt={class:"w-full overflow-y-auto dark:bg-dark-secondary p-1.5 border border-gray-300 dark:border-dark-border rounded-md"},ft={class:"w-[30rem] dark:bg-dark-secondary p-1.5 border border-gray-300 dark:border-dark-border rounded-md overflow-y-auto"},ht=_({__name:"CuesheetTemplateItemInfoModal",props:{mode:{},template:{},templateItem:{}},emits:["click:close","click:create","click:edit"],setup(s,{emit:e}){const t=s,c=e,n=ye(),{fetchCuesheetTemplateItem:E}=n,v=fe(),{getUserInfo:y}=v,{id:S}=y,b=p(),L=p(!1),x=p(""),j=p("00:00"),G=p("00:00"),l=p("00:00"),f=p(ne.Straight),d=p(Re.Broadcasting),m=p([]),o=p({anchorTextArray:[""],reporterTextArray:[""],captionArray:[]}),w=Ve({reporter:S,extraTime:{isPositive:!0,time:"00:00",sec:0},program:0,commercial:[]}),N=ee(()=>t.mode==="create"?"생성":"수정"),T=()=>{c("click:close")},D=()=>{const{articleCaps:k}=ce(o.value),i={cueTmpltId:t.template.id,cueItemTitl:x.value,brdcPgmId:w.program.id,inputrId:w.reporter.inputrId,cueItemDivCd:f.value.id,cueItemCtt:`${JSON.stringify(o.value.reporterTextArray)}`,cueTmpltItemCap:k};c("click:create",i),T()},g=()=>{const{articleCaps:k}=ce(o.value),i={cueTmpltId:t.template.id,cueItemTitl:x.value,brdcPgmId:w.program.id,inputrId:w.reporter.inputrId,cueItemDivCd:f.value.id,cueItemCtt:`${JSON.stringify(o.value.reporterTextArray)}`,cueTmpltItemCap:k};c("click:edit",i),T()},J=()=>{t.mode==="create"?D():g()},z=async()=>{try{L.value=!0;const k=await E(t.templateItem.id);if(console.log(k),k.success){b.value=k.data;const{cueItemTitl:i,cueItemCtt:h,cueTmpltItemCap:q,artclExtTime:K}=b.value;o.value=We({artclTypCd:ne.Straight.id,capList:q,ancMentCtt:JSON.stringify([""]),artclCtt:h||JSON.stringify([`
`])}),x.value=i,w.extraTime={isPositive:K>=0,time:me(K),sec:K}}}catch(k){console.error(k)}finally{L.value=!1}};return he(()=>{t.mode==="edit"&&z()}),(k,i)=>(C(),F(pe,{"modal-class":"sm:w-full xl:w-[80vw] 2xl:w-[80vw] 2xl:min-w-[1000px]","content-class":"h-[85vh]",onClose:T},{title:Y(()=>[$("div",null,"큐시트 템플릿 아이템 "+te(N.value),1)]),content:Y(()=>[$("div",mt,[$("div",ut,[$("div",pt,[L.value?R("",!0):(C(),F(ze,{key:0,"article-title":x.value,"onUpdate:articleTitle":i[0]||(i[0]=h=>x.value=h),"article-type":f.value,"onUpdate:articleType":i[1]||(i[1]=h=>f.value=h),"article-format":d.value,"onUpdate:articleFormat":i[2]||(i[2]=h=>d.value=h),"article-time":j.value,"onUpdate:articleTime":i[3]||(i[3]=h=>j.value=h),"anchor-time":G.value,"onUpdate:anchorTime":i[4]||(i[4]=h=>G.value=h),"report-time":l.value,"onUpdate:reportTime":i[5]||(i[5]=h=>l.value=h),"article-editor-state":o.value,"onUpdate:articleEditorState":i[6]||(i[6]=h=>o.value=h),"is-cue-template":"",class:"py-1 h-full flex flex-col overflow-hidden",onOnSave:J},null,8,["article-title","article-type","article-format","article-time","anchor-time","report-time","article-editor-state"]))]),$("div",ft,[A(Ke,{"article-meta-data-tab":w,"onUpdate:articleMetaDataTab":i[7]||(i[7]=h=>w=h),"article-file-tab":m.value,"onUpdate:articleFileTab":i[8]||(i[8]=h=>m.value=h),"is-show-drop-zone":!1,mode:k.mode==="create"?"create":"edit","is-read-only":!1,"cuesheet-item-division-code":I(He).TEMPLATE.id,class:"h-full"},null,8,["article-meta-data-tab","article-file-tab","mode","cuesheet-item-division-code"])])])])]),_:1}))}}),vt={class:"flex justify-between space-x-2 h-full overflow-hidden"},yt={class:"w-96 flex flex-col space-y-2"},ya=_({__name:"CuesheetTemplateView",setup(s){const e=rt(),{fetchCuesheetTemplate:t,createCuesheetTemplate:c,editCuesheetTemplate:n,deleteCuesheetTemplate:E}=e,v=ye(),{fetchCuesheetTemplateItems:y,createCuesheetTemplateItem:S,editCuesheetTemplateItem:b,deleteCuesheetTemplateItem:L}=v,x=_e(),{fetchIcons:j}=x,{getIcons:G}=de(x),l=fe(),{getUserInfo:f}=de(l),d=U(),m=p({searchProgram:void 0}),o=p(),w=p(),N=p(!1),T=p(!1),D=p(""),g=p(),J=p([]),z=p([]),k=async()=>{var r;try{const a={brdcPgmId:typeof m.value.searchProgram=="object"?(r=m.value.searchProgram)==null?void 0:r.id:""},u=await t(a);u.success&&(J.value=u.data)}catch(a){console.error("Failed fetch cuesheet template",a)}},i=async r=>{try{const u=await y({cueTmpltId:r});u.success&&(z.value=u.data)}catch(a){console.error("Failed fetch cuesheet",a)}},h=async()=>{await i(o.value.id)},q=async()=>{await k(),J.value.length?await i(o.value.id):z.value=[]},K=async r=>{m.value.searchProgram=r,await q()},le=r=>{w.value=r,N.value=!0},be=async r=>{var a,u;try{const P={brdcPgmNm:(a=m.value.searchProgram)==null?void 0:a.brdcPgmNm,cueTmpltNm:r,program:{id:(u=m.value.searchProgram)==null?void 0:u.id}};(await c(P)).success&&(await q(),N.value=!1)}catch(P){console.log("error",P)}},we=async r=>{try{const a={brdcPgmNm:o.value.program.brdcPgmNm,cueTmpltNm:r,program:{id:o.value.program.id}};(await n({templateId:o.value.id,params:a})).success&&(N.value=!1,window.Notify.success({message:je.cuesheetTemplate.edit}),await k(),o.value.cueTmpltNm=r)}catch(a){console.log("error",a)}},ge=async()=>{try{(await E(o.value.id)).success&&await q()}catch(r){console.error("error",r)}},ae=r=>{D.value=r,T.value=!0},Ce=async r=>{(await S(r)).success&&(await i(o.value.id),T.value=!1)},ke=async r=>{(await b(g.value.id,r)).success&&await i(o.value.id)},Te=async()=>{(await L(g.value.id)).success&&await i(o.value.id)},Ie=async r=>{var Q,B,re;const{type:a,data:u,index:P,icon:O}=r,M={cueTmpltId:(Q=o.value)==null?void 0:Q.id,newSymbolId:O.symbolId,symbolIndex:P,originSymbolId:void 0};if(a===V.videoSymbol.name||a===V.audioSymbol.name){const X=`${a}SymbolList`,oe=u[X],xe=`${a}Symbol`;if(a===V[xe].name||oe.length){const Ne=(B=oe[oe.length-1])==null?void 0:B.symbolId;M.originSymbolId=Ne||void 0}}try{(await d.template.detail.update((re=g.value)==null?void 0:re.id,M)).success&&window.Notify.success({message:"[큐시트 아이콘] 저장되었습니다."})}catch(X){console.log("Fail to create item icon",X)}},$e=async(r,a,u)=>{const{id:P}=r,O=`${a}SymbolList`,M=r[O],[Q]=M.filter(B=>B.symbolOrd===u).map(B=>B.symbolId);try{(await d.template.detail.deleteSymbol(P,Q)).success&&window.Notify.success({message:"[큐시트 아이콘] 삭제되었습니다."})}catch(B){console.error("error",B)}},Se=async(r,a)=>{const{event:u,data:P,type:O}=r,M=u.target;M&&M.tagName==="BUTTON"?console.log("아이콘이 없다.",O):M&&M.tagName==="IMG"&&(await $e(P,O,a),M.remove())},Le=r=>{var a;g.value=(a=r[0])==null?void 0:a.data,console.log(g.value)};return he(async()=>{await Promise.all([q(),j({useYn:"Y"})])}),(r,a)=>(C(),W("div",null,[$("div",vt,[$("div",yt,[A(I(Qe),{"search-condition":m.value,"onSelect:program":K},null,8,["search-condition"]),A(lt,{"selected-template":o.value,"onUpdate:selectedTemplate":a[0]||(a[0]=u=>o.value=u),class:"h-full",templates:J.value,"onClick:template":h,"onClick:refresh":k,"onClick:create":a[1]||(a[1]=u=>le("create")),"onClick:edit":a[2]||(a[2]=u=>le("edit")),"onClick:delete":ge},null,8,["selected-template","templates"])]),A(I(Ze),{class:"h-full w-full","row-data":z.value,"icon-list":I(G),"user-info":I(f),"can-create":!!J.value.length,"onClick:create":a[3]||(a[3]=u=>ae("create")),"onClick:edit":a[4]||(a[4]=u=>ae("edit")),"onClick:delete":Te,onSelectedRows:Le,onDoubleClickedRow:a[5]||(a[5]=u=>ae("edit")),onOnClickedIcon:Ie,onOnClickedContextmenu:Se},null,8,["row-data","icon-list","user-info","can-create"])]),N.value?(C(),F(I(dt),{key:0,mode:w.value,template:o.value,"onClick:close":a[6]||(a[6]=u=>N.value=!1),"onClick:create":be,"onClick:edit":we},null,8,["mode","template"])):R("",!0),T.value?(C(),F(I(ht),{key:1,mode:D.value,template:o.value,"template-item":g.value,"onClick:create":Ce,"onClick:edit":ke,"onClick:close":a[7]||(a[7]=u=>T.value=!1)},null,8,["mode","template","template-item"])):R("",!0)]))}});export{ya as default};
