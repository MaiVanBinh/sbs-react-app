import{d as c,u as p,o as i,a as r,c as u,s as l,r as d,R as m,b as h}from"./index-eLyz9_Ts.js";const v=c({__name:"Business",setup(w){const t=p(),{swalConfirm:a}=h(),o=async()=>{await a({title:'<div class="space-y-1"><div>NDS-AUTH 시스템에 접속할 수 없습니다.</div><div>ID/PW 로그인 화면으로 이동합니다.</div></div>',showCancelButton:!1}).then(async e=>{e.isConfirmed&&await d.push({name:m.Login,query:{back_url:t.path}})})},n=async()=>{try{(await l().get("/api/health")).data.api==="up"?window.location.href=`https://dev-ndsauth.sbs.co.kr/login?redirect_url=${encodeURIComponent("https://dev-nds.sbs.co.kr/sso/check-auth")}`:(window.localStorage.getItem("popup")&&localStorage.removeItem("popup"),o())}catch{(window.localStorage.getItem("popup")||"")&&localStorage.removeItem("popup"),o()}};return i(async()=>{await n()}),(e,s)=>(r(),u("div"))}});export{v as default};
