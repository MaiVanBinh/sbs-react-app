import{d as l,a as n,h as d,al as m}from"./index-eLyz9_Ts.js";import{_ as c}from"./RequestItemImage.vue_vue_type_script_setup_true_lang-9Wg4vW2c.js";const u=l({__name:"VideoList",props:{rowData:{},pageInfo:{},removeCheckbox:{type:Boolean}},emits:["selected-row"],setup(o,{emit:a}){const i=o,r=a,t=[{headerName:"",field:"checkbox",sortable:!1,minWidth:50,headerCheckboxSelection:!0,checkboxSelection:!0,showDisabledCheckboxes:!0},{headerName:"",field:"thumbnailUrl",resizable:!1,minWidth:114,cellClass:"flex items-center justify-center flex-none",cellRenderer:c},{headerName:"제목",field:"title",minWidth:160},{headerName:"촬영기자",field:"staffs.video_reporter[0].name",minWidth:100},{headerName:"재생길이",field:"timeCode",minWidth:114},{headerName:"촬영일",minWidth:168},{headerName:"등록일시",field:"createdAt",minWidth:168},{headerName:"등록자",field:"registererId",minWidth:70}],s=e=>{r("selected-row",e)};return i.removeCheckbox&&t.shift(),(e,h)=>(n(),d(m,{"row-data":e.rowData,"page-info":e.pageInfo,"row-selection":"multiple","first-selected-row":!1,"suppress-movable":!0,"row-height":60,"column-defs":t,onSelectedRows:s},null,8,["row-data","page-info"]))}});export{u as _};
