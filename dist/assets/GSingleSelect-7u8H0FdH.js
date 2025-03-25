import{d as h,l as S,t as w,o as L,a as i,c as r,aj as B,au as V,Y as m,X as u,a0 as k,K as c,h as C,w as d,i as f,j as y,as as N,Q as b,G as j,c1 as $,az as D}from"./index-eLyz9_Ts.js";import{V as E}from"./vue-multiselect-Yz8FsF-E.js";import{u as G}from"./use-model-wrapper-XtiLc3Xd.js";const M=["id"],O={key:0,class:"text-red-500"},R={key:1,class:"flex justify-center items-center p-1 border border-gray-300 dark:border-dark-border rounded-md w-full h-full"},q=h({__name:"GSingleSelect",props:{intent:{type:String,default:""},modelValue:{type:[String,Number,Object],default:""},ariaLabel:{type:String,default:""},label:{type:String,default:""},options:{type:Array,default:()=>[]},trackBy:{type:String,default:""},itemLabel:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},selectLabel:{type:String,default:"선택"},selectedLabel:{type:String,default:""},deselectLabel:{type:String,default:"취소"},preselectFirst:{type:Boolean,default:!1},allowEmpty:{type:Boolean,default:!0},searchable:{type:Boolean,default:!0},showPointer:{type:Boolean,default:!0},required:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},openDirection:{type:String,default:""},customClass:{type:String,default:""},open:{type:Boolean,default:!1},maxHeight:{type:Number,default:200}},emits:["update:modelValue","select:value","remove:value","open","close"],setup(e,{emit:g}){const l=e,n=g,p=S(()=>{switch(l.intent){case"primary":return"single-select-primary !text-primary-gray-50 !shadow-none";case"secondary":return"single-select-secondary";case"tertiary":return"single-select-tertiary !text-primary-gray-50 !shadow-none";default:return""}}),s=G(l,n,"modelValue");w(()=>[l.modelValue,l.options],([a])=>{a&&l.options.length&&typeof l.modelValue!="object"&&(s.value=l.options.find(t=>t[l.trackBy]===a))},{deep:!0,immediate:!0});const v=a=>{s.value=a,n("select:value",a)},x=()=>{n("remove:value",s.value)};return L(()=>{l.modelValue&&(s.value=l.modelValue)}),(a,t)=>(i(),r("div",{class:b(["relative flex flex-col",[e.label?"space-y-1":""]])},[B(m("span",{id:e.ariaLabel,class:"flex sm:text-xs text-xs font-medium text-gray-700 dark:text-white"},[u(k(e.label),1),e.required?(i(),r("span",O," *")):c("",!0)],8,M),[[V,e.label]]),e.isLoading?c("",!0):(i(),C(y(E),{key:0,modelValue:y(s),"onUpdate:modelValue":t[0]||(t[0]=o=>N(s)?s.value=o:null),class:b([p.value,e.customClass]),multiple:!1,"track-by":e.trackBy,label:e.itemLabel,options:e.options,placeholder:e.disabled?"":e.placeholder,disabled:e.disabled||e.readonly,"select-label":e.selectLabel,"selected-label":e.selectedLabel,"deselect-label":e.allowEmpty?e.deselectLabel:"","preselect-first":e.preselectFirst,"allow-empty":e.allowEmpty,searchable:e.searchable,"show-pointer":e.showPointer,loading:e.isLoading,"open-direction":e.openDirection,"max-height":e.maxHeight,onSelect:v,onRemove:x,onOpen:t[1]||(t[1]=o=>n("open")),onClose:t[2]||(t[2]=o=>n("close"))},{noResult:d(()=>t[3]||(t[3]=[u(" 검색결과가 없습니다. ")])),noOptions:d(()=>t[4]||(t[4]=[u(" 검색결과가 없습니다. ")])),singleLabel:d(({option:o})=>[f(a.$slots,"singleLabel",{option:o},void 0,!0)]),option:d(({option:o})=>[f(a.$slots,"option",{option:o},void 0,!0)]),_:3},8,["modelValue","class","track-by","label","options","placeholder","disabled","select-label","selected-label","deselect-label","preselect-first","allow-empty","searchable","show-pointer","loading","open-direction","max-height"])),e.isLoading?(i(),r("div",R,[j($),t[5]||(t[5]=m("span",{class:"text-xs"},"Loading...",-1))])):c("",!0)],2))}}),I=D(q,[["__scopeId","data-v-202f8c40"]]);export{I as G};
