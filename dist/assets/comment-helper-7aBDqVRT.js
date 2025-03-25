const t=h=>{if(!(h!=null&&h.length))return;let r=h.length;return h.forEach(l=>{l.childComments&&l.childComments.length>0&&(r+=t(l.childComments))}),r};export{t as c};
