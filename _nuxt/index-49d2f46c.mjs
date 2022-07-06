import{_ as A,d as U,u as j,a as D,b as T,c as B,r as N,e as I,f as s,o as a,g as f,w as t,h as n,i as L,j as r,t as l,n as E,k as d,l as x,m as u}from"./entry-9bb69f58.mjs";import{u as O}from"./useTable-7154a835.mjs";import{u as P}from"./useGroup-eb8fb2d7.mjs";const M=U({__name:"index",setup(F,{expose:m}){m();const z=j(),o=D(),h=T();h.fetch();const V=B(),{table:i,filterTable:k,scrollToTop:v}=O(),{getApproximateMembersCount:C,deleteGroup:p,showEditGroupDialog:y}=P(),b=N(!1),_=I(()=>h.groups.filter(g=>i.selectedCategories.length?g.category&&i.selectedCategories.some(S=>{var q;return(q=g.category)==null?void 0:q.includes(S)}):g).filter(g=>b.value&&o.isLoggedIn?g.isFavourite:g)),w={runtimeConfig:z,user:o,sections:h,$q:V,table:i,filterTable:k,scrollToTop:v,getApproximateMembersCount:C,deleteGroup:p,showEditGroupDialog:y,shouldShowOnlyFavouriteGroups:b,filteredSections:_};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}),W=r("p",{class:"q-ma-none"}," Autorzy: Grzegorz Perun & Daniel Nguyen ",-1),J={class:"text-grey q-mr-xs"},Q={key:0,class:"text-secondary q-mr-xs"},R={key:1,class:"text-secondary q-mr-xs"},H=r("del",null,"JBWA",-1),K=[H],X={class:"q-mr-xs"},Y=u("Usu\u0144 grup\u0119"),Z=u("Edytuj dane grupy"),$=["id","href"],ee={class:"text-grey q-mr-xs"},oe={key:0,class:"text-secondary q-mr-xs"},te={key:1,class:"text-secondary q-mr-xs"},ne=r("del",null,"JBWA",-1),le=[ne],se={class:"q-mr-xs"},ae=["id","href"];function re(F,m,z,o,h,V){const i=s("q-icon"),k=s("q-spinner"),v=s("q-input"),C=s("q-select"),p=s("q-toggle"),y=s("q-tooltip"),b=s("q-td"),_=s("q-item-label"),w=s("q-item-section"),g=s("q-item"),S=s("q-list"),q=s("q-card"),G=s("q-table");return a(),f(G,{pagination:o.table.pagination,"onUpdate:pagination":[m[3]||(m[3]=e=>o.table.pagination=e),o.scrollToTop],"binary-state-sort":"",color:"secondary",columns:o.table.columns,grid:o.$q.platform.is.mobile,rows:o.filteredSections,dense:"",filter:o.table.search,"filter-method":o.filterTable,flat:"",loading:!o.sections.groups.length,"rows-per-page-options":[],"visible-columns":["name","members","link","category"]},{"top-left":t(()=>[n(v,{modelValue:o.table.search,"onUpdate:modelValue":m[0]||(m[0]=e=>o.table.search=e),modelModifiers:{trim:!0},class:"q-mb-sm",color:"secondary",debounce:500,dense:"",label:"Wyszukiwarka grup",loading:!o.sections.groups.length,readonly:!o.sections.groups.length},L({loading:t(()=>[n(k)]),_:2},[o.sections.groups.length>0?{name:"append",fn:t(()=>[n(i,{name:"search"})])}:void 0]),1032,["modelValue","loading","readonly"]),n(C,{modelValue:o.table.selectedCategories,"onUpdate:modelValue":m[1]||(m[1]=e=>o.table.selectedCategories=e),class:"q-mb-sm",color:"secondary",dense:"",label:"Poka\u017C kategorie",loading:!o.sections.groups.length,multiple:"",options:o.sections.categories,"options-dense":"","options-selected-class":"text-secondary",readonly:!o.sections.groups.length},{loading:t(()=>[n(k)]),_:1},8,["modelValue","loading","options","readonly"]),W,r("p",{class:E(["q-mb-sm",{"text-transparent":!o.sections.lastUpdateDate.length}])}," Ostatnia aktualizacja: "+l(o.sections.lastUpdateDate),3),o.user.isLoggedIn&&o.sections.groups.length?(a(),f(p,{key:0,modelValue:o.shouldShowOnlyFavouriteGroups,"onUpdate:modelValue":m[2]||(m[2]=e=>o.shouldShowOnlyFavouriteGroups=e),color:"secondary",label:"Wy\u015Bwietl tylko ulubione grupy","left-label":""},null,8,["modelValue"])):d("",!0)]),"body-cell-name":t(e=>[n(b,{props:e},{default:t(()=>[r("small",J,l(e.row.index)+". ",1),e.row.members?(a(),x("small",Q,l(o.getApproximateMembersCount(e.row.members)),1)):d("",!0),e.row.isSection===!1?(a(),x("small",R,K)):d("",!0),r("span",X,[u(l(e.row.name)+" ",1),o.user.isLoggedIn?(a(),f(i,{key:0,class:"cursor-pointer",size:"16px",color:"secondary",name:e.row.isFavourite?"star":"star_border",onClick:c=>o.sections.toggleFavourite(e.row.link,e.row.isFavourite)},{default:t(()=>[n(y,null,{default:t(()=>[u(l(e.row.isFavourite?"Usu\u0144 grup\u0119 z ulubionych":"Dodaj grup\u0119 do ulubionych"),1)]),_:2},1024)]),_:2},1032,["name","onClick"])):d("",!0),o.user.isLoggedIn&&o.user.isAdmin?(a(),f(i,{key:1,size:"16px",class:"cursor-pointer",color:"secondary",name:"delete_forever",onClick:c=>o.deleteGroup("sections",e.row.link)},{default:t(()=>[n(y,null,{default:t(()=>[Y]),_:1})]),_:2},1032,["onClick"])):d("",!0),n(i,{color:"secondary",class:"cursor-pointer",name:"mode_edit_outline",size:"16px",onClick:c=>o.showEditGroupDialog(e.row,o.runtimeConfig.public.sectionsPath)},{default:t(()=>[n(y,null,{default:t(()=>[Z]),_:1})]),_:2},1032,["onClick"])])]),_:2},1032,["props"])]),"body-cell-members":t(e=>[n(b,{props:e},{default:t(()=>[r("span",null,l(e.row.members!==0?e.row.members:"N/A"),1)]),_:2},1032,["props"])]),"body-cell-link":t(e=>[n(b,{props:e},{default:t(()=>[r("a",{id:e.row.name.split(" ").join("@"),class:"text-secondary",href:`https://facebook.com/groups/${e.row.link}`,rel:"noopener noreferrer",target:"_blank"}," /"+l(e.row.link),9,$)]),_:2},1032,["props"])]),"body-cell-category":t(e=>[n(b,{props:e},{default:t(()=>{var c;return[r("span",null,l((c=e.row.category)==null?void 0:c.join(", ")),1)]}),_:2},1032,["props"])]),"body-cell-keywords":t(()=>[]),item:t(e=>[n(q,{class:"col-12 q-mb-md",flat:"",props:e},{default:t(()=>[n(S,{dense:""},{default:t(()=>[n(g,null,{default:t(()=>[n(w,null,{default:t(()=>[n(_,{caption:""},{default:t(()=>[u(l(e.cols[0].label),1)]),_:2},1024),n(_,null,{default:t(()=>[r("small",ee,l(e.row.index)+".",1),e.row.members?(a(),x("small",oe,l(o.getApproximateMembersCount(e.row.members)),1)):d("",!0),e.row.isSection===!1?(a(),x("small",te,le)):d("",!0),r("span",se,[u(l(e.row.name)+" ",1),o.user.isLoggedIn?(a(),f(i,{key:0,class:"cursor-pointer",size:"16px",color:"secondary",name:e.row.isFavourite?"star":"star_border",onClick:c=>o.sections.toggleFavourite(e.row.link,e.row.isFavourite)},null,8,["name","onClick"])):d("",!0),n(i,{color:"secondary",name:"mode_edit_outline",size:"16px",onClick:c=>o.showEditGroupDialog(e.row,o.runtimeConfig.public.sectionsPath)},null,8,["onClick"]),o.user.isLoggedIn&&o.user.isAdmin?(a(),f(i,{key:1,size:"16px",class:"cursor-pointer",color:"secondary",name:"delete_forever",onClick:c=>o.deleteGroup("sections",e.row.link)},null,8,["onClick"])):d("",!0)])]),_:2},1024),n(_,{caption:""},{default:t(()=>[u(l(e.cols[1].label),1)]),_:2},1024),n(_,null,{default:t(()=>[u(l(e.row.members!==0?e.row.members:"N/A"),1)]),_:2},1024),n(_,{caption:""},{default:t(()=>[u(l(e.cols[2].label),1)]),_:2},1024),n(_,null,{default:t(()=>[r("a",{id:e.row.name.split(" ").join("@"),class:"text-secondary",href:`https://facebook.com/groups/${e.cols[1].value}`,rel:"noopener noreferrer",target:"_blank"},"/"+l(e.cols[2].value),9,ae)]),_:2},1024),e.cols[3].value?(a(),f(_,{key:0,caption:""},{default:t(()=>[u(l(e.cols[3].label),1)]),_:2},1024)):d("",!0),e.cols[3].value?(a(),f(_,{key:1},{default:t(()=>{var c;return[u(l((c=e.cols[3].value)==null?void 0:c.join(", ")),1)]}),_:2},1024)):d("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["pagination","columns","grid","rows","filter","filter-method","loading","onUpdate:pagination"])}var ue=A(M,[["render",re]]);export{ue as default};
