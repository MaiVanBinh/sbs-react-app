import{d as y,k as r,ae as D,a as k,h as g,w as o,X as n,a0 as b,Y as f,G as a,a1 as m,a2 as v,a3 as C}from"./index-eLyz9_Ts.js";import{_ as U}from"./GDatePicker.vue_vue_type_style_index_0_lang-aP5TJiAZ.js";import{_ as u}from"./FormItem.vue_vue_type_script_setup_true_lang-ZXQ_7x89.js";const Y={class:"flex flex-col gap-y-2 flex-grow"},$={class:"flex justify-center gap-x-2 py-2"},j=y({__name:"StrategyPlanningFormModal",props:{modelValue:{}},emits:["save:modelValue","update:modelValue","close"],setup(p,{emit:V}){const c=p,d=V,e=r({...c.modelValue}),s=r(e.value.id?e.value.mtDtm:D().format("YYYY-MM-DD")),_=()=>{e.value.mtDtm=s.value,d("save:modelValue",e.value)},x=()=>{e.value.mtDtm=s.value,d("update:modelValue",e.value)},w=()=>{e.value.id?x():_()},i=()=>{d("close")};return(S,l)=>(k(),g(C,{"modal-calss":"w-1/3","content-class":"h-[30vh]",onClose:i},{title:o(()=>[n(b(e.value.id?"전략기획 수정":"전략기획 생성"),1)]),content:o(()=>[f("div",Y,[a(u,{label:"제목"},{default:o(()=>[a(m,{modelValue:e.value.titl,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value.titl=t),class:"w-1/3"},null,8,["modelValue"])]),_:1}),a(u,{label:"차수"},{default:o(()=>[a(m,{modelValue:e.value.ord,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value.ord=t),class:"w-1/3"},null,8,["modelValue"])]),_:1}),a(u,{label:"회의일자"},{default:o(()=>[a(U,{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=t=>s.value=t),class:"w-1/3"},null,8,["modelValue"])]),_:1}),a(u,{label:"비고"},{default:o(()=>[a(m,{modelValue:e.value.rmk,"onUpdate:modelValue":l[3]||(l[3]=t=>e.value.rmk=t),class:"w-full"},null,8,["modelValue"])]),_:1})]),f("div",$,[a(v,{onClick:w},{default:o(()=>l[4]||(l[4]=[n("저장")])),_:1}),a(v,{type:"secondary",onClick:i},{default:o(()=>l[5]||(l[5]=[n("취소")])),_:1})])]),_:1}))}});export{j as _};
