import{d as E,a as x,h as j,al as Q,am as Z,ew as ee,k as d,l as D,c6 as ae,c as G,G as c,K as F,a5 as X,ab as le,o as q,w as $,a0 as y,Y as n,a1 as O,j as r,L as H,bX as oe,a2 as C,X as z,a3 as te,ad as se,ai as re,aj as I,aG as ne,ah as S}from"./index-eLyz9_Ts.js";import{u as J}from"./program-omP_c4K3.js";import{r as de}from"./use-render-component-K20sHqiA.js";import{G as ie}from"./GSingleSelect-7u8H0FdH.js";import{G as ce}from"./GTextarea-5GIFD2Mo.js";import{_ as U}from"./UserSelect.vue_vue_type_script_setup_true_lang-Hk5THi0e.js";import"./vue-multiselect-Yz8FsF-E.js";import"./use-model-wrapper-XtiLc3Xd.js";/* empty css                                                                  */const W={TV:{id:"01",name:"TV",label:"TV",isUse:!0},PressProduction:{id:"02",name:"보도제작",label:"보도제작",isUse:!1},Radio:{id:"03",name:"라디오",label:"라디오",isUse:!0}},ue=[W.TV,W.PressProduction,W.Radio],me=E({__name:"ProgramList",props:{isLoading:{type:Boolean},rowData:{},pageInfo:{}},emits:["selected-rows","double-clicked-row","on-change-page","on-toggle-use"],setup(M,{emit:f}){const i=f,w=o=>{const p=document.createElement("div");p.className="h-full";const l={onToggle:v=>{i("on-toggle-use",{program:o.data,useYn:v})},modelValue:o.data.useYn==="Y"};return de(ee,l,p)},s=[{headerName:"순번",filter:!1,minWidth:60,maxWidth:60,valueGetter:"node.rowIndex",cellRenderer:o=>Z(o)},{headerName:"구분",field:"brdcPgmNm",filter:!1,minWidth:160},{headerName:"프로그램명",field:"brdcTypNm",filter:!1,minWidth:260},{headerName:"방송시작시간",field:"brdcStartTime",filter:!1,minWidth:260},{headerName:"PD1",field:"pd1Nm",filter:!1,minWidth:160},{headerName:"PD2",field:"pd2Nm",filter:!1,minWidth:260},{headerName:"앵커1",field:"anc1Nm",filter:!1,minWidth:160},{headerName:"앵커2",field:"anc2Nm",filter:!1,minWidth:160},{headerName:"사용여부",field:"useYn",filter:!1,minWidth:150,cellRenderer:o=>w(o)}],m=o=>{i("selected-rows",o)},h=o=>{i("double-clicked-row",o)},b=o=>{i("on-change-page",o)};return(o,p)=>(x(),j(Q,{class:"w-full h-full flex flex-col","column-defs":s,"row-data":o.rowData,"is-loading":o.isLoading,filter:!1,sortable:!1,"page-info":o.pageInfo,"suppress-movable":!1,"row-selection":"single","row-drag-managed":!0,onSelectedRows:m,onDoubleClickedRow:h,onOnChangePage:b},null,8,["row-data","is-loading","page-info"]))}}),pe={class:"flex flex-col"},fe={key:0,class:"text-xs text-error"},ve=E({__name:"ProgramTypeSelect",props:{modelValue:{default:""},ariaLabel:{default:""},label:{default:"구분"},options:{default:()=>[]},placeholder:{default:"구분 선택"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},selectLabel:{default:"선택"},deselectLabel:{default:"취소"},allowEmpty:{type:Boolean,default:!1},isAllOption:{type:Boolean,default:!1},width:{default:"w-32"},preselectFirst:{type:Boolean,default:!1}},emits:["update:modelValue","on-selected"],setup(M,{emit:f}){const i=M,w=f,s={id:"",name:"구분 전체",label:"구분 전체",isUse:!0},m=d(),h=d(ue),b=l=>{m.value=l,w("update:modelValue",l==null?void 0:l.id),w("on-selected",l==null?void 0:l.id)},o=l=>{m.value=l,w("update:modelValue",l==null?void 0:l.id)},p=D(()=>!m.value);return ae(()=>{i.isAllOption&&(h.value.unshift(s),m.value=s)}),(l,v)=>(x(),G("div",pe,[c(ie,{modelValue:m.value,"onUpdate:modelValue":v[0]||(v[0]=u=>m.value=u),multiple:!1,"track-by":"id","item-label":"label",label:l.label,options:h.value,placeholder:l.placeholder,disabled:l.disabled||l.readonly,"select-label":l.selectLabel,"deselect-label":l.deselectLabel,"preselect-first":l.preselectFirst,"allow-empty":l.allowEmpty,width:l.width,"onSelect:value":b,"onRemove:value":o},null,8,["modelValue","label","options","placeholder","disabled","select-label","deselect-label","preselect-first","allow-empty","width"]),p.value?(x(),G("div",fe,"프로그램 구분을 선택하세요.")):F("",!0)]))}}),ge={class:""},we={class:"px-2 py-4 space-y-6"},be={class:"space-y-2 text-sm"},he={class:"flex items-center gap-1.5 w-full"},ye={class:"flex space-x-2"},Pe={class:"space-y-1 flex-1"},_e={class:"text-red-600 text-xs"},Ve={class:"text-xs space-y-2"},Ce={class:"dark:text-dark-gray-200"},xe={class:"flex space-x-1.5 w-full"},Me={class:"text-xs space-y-2"},Ne={class:"dark:text-dark-gray-200"},ke={class:"flex space-x-1.5 w-full"},$e={class:"flex items-center space-x-2 justify-end"},Ie=E({__name:"ProgramInfoMoal",props:{mode:{default:"create"},programItem:{default:""}},emits:["on-create","on-edit","close"],setup(M,{emit:f}){const i=M,w=f,{t:s}=X(),{companyId:m}=le(),{fetchProgram:h}=J(),b=d(""),o=d(),p=d("00:00:00"),l=d(),v=d(),u=d(),P=d(),_=d(),g=d(),V=d(!0),N=()=>{w("close")},R=async()=>{try{const e=await h(i.programItem.id);e.success&&(b.value=e.data.brdcPgmNm,p.value=e.data.brdcStartTime,l.value=e.data.brdcDurtn,v.value=e.data.pd1Id,u.value=e.data.pd2Id,P.value=e.data.anc1Id,_.value=e.data.anc2Id,g.value=e.data.rmk,V.value=e.data.useYn==="Y",o.value=e.data.brdcTypCd)}catch(e){console.error("ProgramInfoModal: getProgram Error",e)}},k=async()=>{try{const e={anc1Id:P.value?P.value.id:null,anc2Id:_.value?_.value.id:null,brdcDurtn:l.value?parseInt(l.value,10):0,brdcPgmNm:b.value,brdcStartTime:p.value,pd1Id:v.value?v.value.id:null,pd2Id:u.value?u.value.id:null,rmk:g.value,useYn:V.value?"Y":"N",programType:o.value};i.mode==="create"?w("on-create",e):w("on-edit",e)}catch(e){console.error("CategoryInfoModal onSubmit() Error",e)}},Y=D(()=>i.mode==="create"?s("Modal.Program.CreateModal.프로그램_추가"):s("Modal.Program.EditModal.프로그램_수정")),L=D(()=>i.mode==="create"?s("Modal.Program.CreateModal.추가"):s("Modal.Program.EditModal.수정")),T=(e,a)=>{a==="brdcStartTime"?p.value=e:l.value=e},B=D(()=>!b.value||!o.value);return q(()=>{i.mode==="edit"&&R()}),(e,a)=>(x(),j(te,{"modal-class":"sm:w-1/2 2xl:w-[25vw]",onClose:N},{title:$(()=>[n("span",ge,y(Y.value),1)]),content:$(()=>[n("div",we,[n("div",be,[n("div",he,[c(ve,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t),"preselect-first":"",label:"구분",class:"w-full"},null,8,["modelValue"]),c(O,{modelValue:b.value,"onUpdate:modelValue":a[1]||(a[1]=t=>b.value=t),required:!0,label:r(s)("Modal.Program.CreateModal.프로그램_명"),class:"w-full",onKeyup:H(k,["enter"])},null,8,["modelValue","label"])]),n("div",ye,[c(oe,{modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=t=>p.value=t),name:"brdcStartTime",label:r(s)("Modal.Program.CreateModal.방송_시간"),class:"flex-1",width:"w-full",onChange:T},null,8,["modelValue","label"]),n("div",Pe,[c(O,{modelValue:l.value,"onUpdate:modelValue":a[3]||(a[3]=t=>l.value=t),type:"number",name:"duration",label:r(s)("Modal.Program.CreateModal.방송_길이"),class:"w-full"},null,8,["modelValue","label"]),n("div",_e,y(r(s)("Modal.Program.CreateModal.분단위로_입력해주세요")),1)])]),n("div",Ve,[n("div",Ce,y(r(s)("Modal.Program.CreateModal.PD")),1),n("div",xe,[c(U,{modelValue:v.value,"onUpdate:modelValue":a[4]||(a[4]=t=>v.value=t),"company-code":r(m),"allow-empty":!0,placeholder:r(s)("Modal.Program.CreateModal.PD1"),class:"w-full"},null,8,["modelValue","company-code","placeholder"]),c(U,{modelValue:u.value,"onUpdate:modelValue":a[5]||(a[5]=t=>u.value=t),"company-code":r(m),"allow-empty":!0,placeholder:r(s)("Modal.Program.CreateModal.PD2"),class:"w-full"},null,8,["modelValue","company-code","placeholder"])])]),n("div",Me,[n("div",Ne,y(r(s)("Modal.Program.CreateModal.앵커")),1),n("div",ke,[c(U,{modelValue:P.value,"onUpdate:modelValue":a[6]||(a[6]=t=>P.value=t),"company-code":r(m),"allow-empty":!0,placeholder:r(s)("Modal.Program.CreateModal.앵커1"),class:"w-full"},null,8,["modelValue","company-code","placeholder"]),c(U,{modelValue:_.value,"onUpdate:modelValue":a[7]||(a[7]=t=>_.value=t),"company-code":r(m),"allow-empty":!0,placeholder:r(s)("Modal.Program.CreateModal.앵커2"),class:"w-full"},null,8,["modelValue","company-code","placeholder"])])]),c(ce,{modelValue:g.value,"onUpdate:modelValue":a[8]||(a[8]=t=>g.value=t),label:r(s)("Modal.Program.CreateModal.비고"),rows:3},null,8,["modelValue","label"])]),n("div",$e,[c(C,{type:"secondary",onClick:a[9]||(a[9]=t=>e.$emit("close"))},{default:$(()=>[z(y(r(s)("Modal.User.CreateModal.취소")),1)]),_:1}),c(C,{disabled:B.value,onClick:k},{default:$(()=>[z(y(L.value),1)]),_:1},8,["disabled"])])])]),_:1}))}}),Se={class:"h-full"},Ue={class:"flex justify-between"},De={class:"flex items-center space-x-2"},Ee={class:"space-x-2 w-[210px]"},Re={class:"text-xl dark:text-dark-gray-200"},Ye={class:"text-xl text-gray-500"},Le={class:"space-x-1.5"},Te={class:"flex flex-col h-full"},Xe=E({__name:"AdminProgramView",setup(M){const{t:f}=X(),i=d(!1),w=J(),{fetchPrograms:s,createProgram:m,updateProgram:h,deleteProgram:b}=w,o=d(""),p=d([]),l=d(!1),v=d("create"),u=d(),P=d(se.sm),_=d({isShow:!1,page:1,totalElements:1,totalPages:1,numberOfElements:1,size:P.value}),g=async()=>{try{i.value=!0;const e={searchValue:o.value},a=await s(e);a.success&&(p.value=a.data)}catch(e){console.error("AdminProgramView: getPrograms Error",e)}finally{i.value=!1}},V=e=>{v.value=e,l.value=!0},N=()=>{l.value=!1},R=async e=>{try{(await m(e)).success&&(window.Notify.success({message:S.program.create}),await g(),N())}catch(a){console.error("AdminProgramView: onCreateCategory() Error",a)}},k=async e=>{try{(await h(u.value.id,e)).success&&(window.Notify.success({message:S.program.edit}),await g(),N())}catch(a){console.error("AdminProgramView: onCreateCategory() Error",a)}},Y=async()=>{try{(await b(u.value.id)).success&&(window.Notify.success({message:S.program.delete}),await g())}catch(e){console.error("AdminProgramView: onDelete() Error",e)}},L=e=>{u.value=e[0].data},T=e=>{u.value=e.data,V("edit")},B=async e=>{try{const a={useYn:e.useYn?"Y":"N"};(await h(e.program.id,a)).success&&(window.Notify.success({message:S.program.edit}),await g())}catch(a){console.error("AdminUserView: onChangeUseYn() Error ",a)}};return q(()=>{g()}),(e,a)=>{var K;const t=re("tooltip");return x(),G("div",Se,[n("div",Ue,[n("div",De,[n("div",Ee,[n("span",Re,y(r(f)("Program.프로그램")),1),n("span",Ye,y(r(f)("Program.프로그램수",{programs:p.value.length})),1)]),c(O,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=A=>o.value=A),width:"w-96",placeholder:r(f)("Program.프로그램명으로_검색하세요"),onKeyup:H(g,["enter"])},null,8,["modelValue","placeholder"]),c(C,{icon:"magnifying-glass",onClick:g})]),n("div",Le,[I(c(C,{icon:"arrow-path",onClick:g},null,512),[[t,r(f)("Program.새로고침")]]),I(c(C,{icon:"plus",disabled:i.value,onClick:a[1]||(a[1]=A=>V("create"))},null,8,["disabled"]),[[t,r(f)("Program.추가")]]),I(c(C,{icon:"pencil",disabled:i.value||!u.value,onClick:a[2]||(a[2]=A=>V("edit"))},null,8,["disabled"]),[[t,r(f)("Program.수정")]]),I(c(ne,{disabled:i.value||!u.value,title:(K=u.value)==null?void 0:K.brdcPgmNm,onOnConfirm:Y},null,8,["disabled","title"]),[[t,r(f)("Program.삭제")]])])]),n("div",Te,[c(me,{"is-loading":i.value,"row-data":p.value,"page-info":_.value,onSelectedRows:L,onDoubleClickedRow:T,onOnToggleUse:B},null,8,["is-loading","row-data","page-info"])]),l.value?(x(),j(Ie,{key:0,mode:v.value,"program-item":u.value,onOnCreate:R,onOnEdit:k,onClose:N},null,8,["mode","program-item"])):F("",!0)])}}});export{Xe as default};
