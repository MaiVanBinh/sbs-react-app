import{d as i,bf as d,a as u,c as m,G as n,j as f,as as p,Q as h,L as V,a1 as _,a2 as g}from"./index-eLyz9_Ts.js";const y={class:"flex items-center gap-x-1"},S=i({__name:"SearchForm",props:{fitWidthInput:{type:Boolean,default:!1},searchValue:{type:String,default:""},placeholder:{type:String,default:"검색어를 입력해주세요"}},emits:["click:search","update:searchValue"],setup(e,{emit:c}){const o=e,s=c,{searchValue:a}=d(o,s),l=()=>{s("click:search")};return(k,t)=>(u(),m("div",y,[n(_,{modelValue:f(a),"onUpdate:modelValue":t[0]||(t[0]=r=>p(a)?a.value=r:null),placeholder:e.placeholder,class:h([e.fitWidthInput?"flex-1":""]),onKeydown:V(l,["enter"])},null,8,["modelValue","placeholder","class"]),n(g,{icon:"magnifying-glass",onClick:l})]))}});export{S as _};
