import{_ as D,d as N,u as M,a as P,c as T,m as A,r,s as F,o as u,j as E,i as v,g as s,w as t,n as G,f as k,k as _,v as I,x as K,y as j,z,b as L,B as O,C as J,l as Q}from"./entry-988f4193.mjs";const R=N({__name:"submissions",setup(C,{expose:o}){o();const m=M(),e=P(),V=T(),n=A({type:"Sekcja",link:"",name:"",members:0,category:[],keywords:"",canBeSent:!0,isBeingSent:!1,wasSend:!1}),f=m.public.sectionCategories;function l(){n.link=n.name=n.keywords="",n.members=0,n.category=[],n.isBeingSent=!1,e.isAdmin||(n.wasSend=!0)}function d(){n.isBeingSent=!0;const{category:q,keywords:p,link:w}=n;if(!e.isAdmin)K(j(z(),"submissions"),{category:q,keywords:p,link:w}).then(()=>l());else{const{link:b,name:y,members:g,category:a,keywords:x}=n;let S;if(n.type==="Sekcja"){const i=L();i.groups.length||i.fetch(),S=[...i.groups.map(({isFavourite:Y,...h})=>h),{link:b,name:y,members:g,category:a,keywords:x.split(", ")}]}else{const i=O();i.groups.length||i.fetch(),S=[...i.groups,{link:b,name:y,members:g}]}const B=n.type==="Sekcja"?m.public.sectionsPath:m.public.taggroupsPath,U={name:B,lastUpdateDate:new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date),groups:S};J(j(z(),B),U).then(()=>l())}}const c={runtimeConfig:m,user:e,$q:V,form:n,categories:f,resetForm:l,submitSumbission:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),W={class:"row justify-center items-center q-px-md"},Z=v("h6",{class:"q-ma-none q-mb-md"}," Informacja ",-1),H=Q(" Pro\u015Bba o dodanie grupy do spisu sekcji zosta\u0142a pomy\u015Blnie wys\u0142ana. Zostanie ona dodana w najbli\u017Cszym mo\u017Cliwym czasie. ");function X(C,o,m,e,V,n){const f=r("q-select"),l=r("q-icon"),d=r("q-input"),c=r("q-btn"),q=r("q-form"),p=r("q-card-section"),w=r("q-card-actions"),b=r("q-card"),y=r("q-dialog"),g=F("close-popup");return u(),E("div",W,[v("div",{class:G(["col-xs-12 col-sm-12 col-md-4",{"q-pt-md":e.$q.platform.is.mobile,"q-pa-lg":e.$q.platform.is.desktop}])},[s(q,{class:"q-gutter-y-md",onSubmit:e.submitSumbission},{default:t(()=>[s(f,{modelValue:e.form.type,"onUpdate:modelValue":o[0]||(o[0]=a=>e.form.type=a),color:"secondary",disable:e.form.isBeingSent,label:"Typ grupy",options:["Sekcja","Tag-grupka"],"options-dense":"","options-selected-class":"text-secondary",outlined:"",square:"","stack-label":""},null,8,["modelValue","disable"]),e.user.isAdmin?(u(),k(d,{key:0,modelValue:e.form.name,"onUpdate:modelValue":o[1]||(o[1]=a=>e.form.name=a),modelModifiers:{trim:!0},color:"secondary",disable:e.form.isBeingSent,label:"Nazwa grupy",outlined:"",required:"",square:"","stack-label":""},{append:t(()=>[s(l,{name:"create"})]),_:1},8,["modelValue","disable"])):_("",!0),e.user.isAdmin?(u(),k(d,{key:1,modelValue:e.form.members,"onUpdate:modelValue":o[2]||(o[2]=a=>e.form.members=a),modelModifiers:{number:!0},color:"secondary",disable:e.form.isBeingSent,label:"Liczba cz\u0142onk\xF3w",outlined:"",required:"",square:"","stack-label":""},{append:t(()=>[s(l,{name:"plus_one"})]),_:1},8,["modelValue","disable"])):_("",!0),s(d,{modelValue:e.form.link,"onUpdate:modelValue":o[3]||(o[3]=a=>e.form.link=a),modelModifiers:{trim:!0},color:"secondary",disable:e.form.isBeingSent,label:"Link do grupy",outlined:"",required:"",square:"","stack-label":"","error-message":"Nieprawid\u0142owy link do grupy.",error:!!e.form.link&&!/.*facebook.com\/groups\//.test(e.form.link),"hide-bottom-space":"",onError:o[4]||(o[4]=a=>e.form.canBeSent=!1)},{append:t(()=>[s(l,{name:"link"})]),_:1},8,["modelValue","disable","error"]),e.form.type==="Sekcja"?(u(),k(f,{key:2,modelValue:e.form.category,"onUpdate:modelValue":o[5]||(o[5]=a=>e.form.category=a),color:"secondary",disable:e.form.isBeingSent,options:e.categories,"options-dense":"",outlined:"",square:"","stack-label":"",label:"Kategorie",multiple:""},null,8,["modelValue","disable","options"])):_("",!0),e.form.type==="Sekcja"?(u(),k(d,{key:3,modelValue:e.form.keywords,"onUpdate:modelValue":o[6]||(o[6]=a=>e.form.keywords=a),modelModifiers:{trim:!0},"hide-bottom-space":"",color:"secondary",disable:e.form.isBeingSent,label:"S\u0142owa kluczowe",outlined:"",square:"","stack-label":"",hint:"Je\u015Bli nazwa twojej grupy lub link do niej nie jest oczywisty, dodaj s\u0142owa kluczowe, aby mo\u017Cna by\u0142o po nich j\u0105 wyszuka\u0107. Musz\u0105 by\u0107 one oddzielone przecinkiem."},{append:t(()=>[s(l,{name:"list"})]),_:1},8,["modelValue","disable"])):_("",!0),s(c,{color:"secondary",disable:!e.form.canBeSent||e.form.isBeingSent,label:"Wy\u015Blij",loading:e.form.isBeingSent,"no-caps":"",outline:"",type:"submit"},null,8,["disable","loading"])]),_:1})],2),s(y,{modelValue:e.form.wasSend,"onUpdate:modelValue":o[7]||(o[7]=a=>e.form.wasSend=a)},{default:t(()=>[s(b,null,{default:t(()=>[s(p,null,{default:t(()=>[Z]),_:1}),s(p,{class:"q-pt-none"},{default:t(()=>[H]),_:1}),s(w,{align:"right"},{default:t(()=>[I(s(c,{color:"secondary",flat:"",label:"OK"},null,512),[[g]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var ee=D(R,[["render",X]]);export{ee as default};
