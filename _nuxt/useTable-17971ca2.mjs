import{m as u}from"./entry-988f4193.mjs";function b(){const l=u({search:"",selectedCategories:[],columns:[{name:"name",label:"Nazwa",field:"name",align:"left",sortable:!0},{name:"members",label:"Liczba cz\u0142onk\xF3w",field:"members",align:"left",sortable:!0},{name:"link",label:"Link",field:"link",align:"left"},{name:"category",label:"Kategorie",field:"category",align:"left"},{name:"keywords",field:"keywords"}],pagination:{descending:!0,page:0,rowsPerPage:40,rowsCount:0}});function r(t,n,i,s){const m=n?n.toLowerCase():"";return t.filter(c=>i.some(e=>{const a=`${s(e,c)}`,f=a==null?void 0:a.toLowerCase();return(e.name==="name"||e.name==="link"||e.name==="keywords")&&f.includes(m)}))}function o(){window.scrollTo(0,0)}return{table:l,filterTable:r,scrollToTop:o}}export{b as u};
