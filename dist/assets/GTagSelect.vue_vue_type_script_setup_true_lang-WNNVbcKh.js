import{V as m}from"./vue-multiselect-Yz8FsF-E.js";import{u as y}from"./use-model-wrapper-XtiLc3Xd.js";import{d as f,a as d,c as n,Y as b,a0 as g,K as p,G as h,j as s,as as S,Q as V}from"./index-eLyz9_Ts.js";const B={class:"flex flex-col"},x={key:0,class:"sm:text-xs inline-block text-xs font-medium text-gray-700 dark:text-white"},v=f({__name:"GTagSelect",props:{modelValue:{type:Array,default:()=>[]},trackBy:{type:String,default:""},label:{type:String,default:""},itemLabel:{type:String,default:"태그"},options:{type:Array,default:()=>[]},placeholder:{type:String,default:"태그 선택"},allowEmpty:{type:Boolean,default:!0},selectLabel:{type:String,default:"선택"},selectedLabel:{type:String,default:"취소"},deselectLabel:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},tagPlaceholder:{type:String,default:"추가"},closeOnSelect:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},openDirection:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:c}){const i=e,t=c,l=y(i,t,"modelValue"),u=o=>{const a={tagName:o};l.value.push(a),t("update:modelValue",l.value)};return(o,a)=>(d(),n("div",null,[b("div",B,[e.itemLabel?(d(),n("span",x,g(e.itemLabel),1)):p("",!0),h(s(m),{modelValue:s(l),"onUpdate:modelValue":a[0]||(a[0]=r=>S(l)?l.value=r:null),multiple:!0,taggable:!0,"track-by":e.trackBy,label:e.label,options:e.options,placeholder:e.disabled?"":e.placeholder,disabled:e.disabled||e.readonly,"select-label":e.selectLabel,"deselect-label":e.allowEmpty?e.deselectLabel:"","allow-empty":e.allowEmpty,searchable:e.searchable,"close-on-select":e.closeOnSelect,"tag-placeholder":e.tagPlaceholder,"open-direction":e.openDirection,class:V([e.itemLabel?"mt-1":""]),onTag:u},null,8,["modelValue","track-by","label","options","placeholder","disabled","select-label","deselect-label","allow-empty","searchable","close-on-select","tag-placeholder","open-direction","class"])])]))}});export{v as _};
