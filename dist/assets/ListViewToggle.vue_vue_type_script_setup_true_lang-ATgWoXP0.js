import{d as m,a as c,c as b,G as d,Q as l,ak as s}from"./index-eLyz9_Ts.js";const p={class:"flex bg-white justify-end"},V=m({__name:"ListViewToggle",props:{modelValue:{}},emits:["update:modelValue"],setup(a,{emit:i}){const r=a,n=i,t=o=>({"border-none bg-primary text-white":r.modelValue===o,"border border-gray-200 bg-white text-black":r.modelValue!==o});return(o,e)=>(c(),b("div",p,[d(s,{class:l(["border border-gray-400 p-1 rounded-none rounded-tl-md rounded-bl-md hover:bg-none",t("card")]),icon:"square2Stack",onClick:e[0]||(e[0]=u=>n("update:modelValue","card"))},null,8,["class"]),d(s,{class:l(["border border-gray-400 p-1 rounded-none rounded-tr-md rounded-br-md hover:bg-none",t("list")]),icon:"listBullet",onClick:e[1]||(e[1]=u=>n("update:modelValue","list"))},null,8,["class"])]))}});export{V as _};
