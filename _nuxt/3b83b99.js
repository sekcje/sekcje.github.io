(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{297:function(e,t,n){"use strict";n.d(t,"a",(function(){return F}));var r,o=Symbol(),c=Symbol(),l=Symbol(),f=Symbol(),d=function(e){return"frag"in e};function m(e,t){c in e||(e[c]=t,Object.defineProperty(e,"parentNode",{get:function(){return this[c]||this.parentElement}}))}function y(e){l in e||(e[l]=!0,Object.defineProperty(e,"nextSibling",{get:function(){var e=this.parentNode.childNodes,t=e.indexOf(this);return t>-1&&e[t+1]||null}}))}function h(e){if(!r){var t=Object.getOwnPropertyDescriptor(Node.prototype,"childNodes");r=t.get}var n=r.apply(e),o=Array.from(n).map((function(t){return function(e,t){for(;e.parentNode!==t;){var n=e.parentNode;n&&(e=n)}return e}(t,e)}));return o.filter((function(e,t){return e!==o[t-1]}))}function v(e){f in e||(e[f]=!0,Object.defineProperties(e,{childNodes:{get:function(){return this.frag||h(this)}},firstChild:{get:function(){return this.childNodes[0]||null}}}),e.hasChildNodes=function(){return this.childNodes.length>0})}function k(){var e;(e=this.frag[0]).before.apply(e,arguments)}function w(){var e=this.frag;e.splice(0,e.length).forEach((function(e){e.remove()}))}var j=function e(t){var n;return(n=Array.prototype).concat.apply(n,t.map((function(t){return d(t)?e(t.frag):t})))};function O(e){if(d(this)){var t=this.frag.indexOf(e);if(t>-1){var n=this.frag.splice(t,1)[0];0===this.frag.length&&function(e,t){var n=e[o];t.before(n),m(n,e),e.frag.unshift(n)}(this,n),e.remove()}}else{h(this).indexOf(e)>-1&&e.remove()}return e}function S(e,t){var n=this,r=e.frag||[e];if(d(this)){var o=this.frag;if(t){var c=o.indexOf(t);c>-1&&(o.splice.apply(o,[c,0].concat(r)),t.before.apply(t,r))}else{var l=o[o.length-1];o.push.apply(o,r),l.after.apply(l,r)}D(this)}else t?this.childNodes.includes(t)&&t.before.apply(t,r):this.append.apply(this,r);return r.forEach((function(e){m(e,n)})),y(r[r.length-1]),e}function x(e){var t=this.frag;return t[t.length-1].after(e),m(e,this),D(this),t.push(e),e}function D(e){var t=e[o];e.frag[0]===t&&(e.frag.shift(),t.remove())}var F={inserted:function(element){var e=element.parentNode,t=element.nextSibling,n=element.previousSibling,r=Array.from(element.childNodes),c=document.createComment("");0===r.length&&r.push(c),element.frag=r,element[o]=c;var l=document.createDocumentFragment();l.append.apply(l,j(r)),element.replaceWith(l),r.forEach((function(e){m(e,element),y(e)})),v(element),Object.assign(element,{remove:w,appendChild:x,insertBefore:S,removeChild:O,before:k}),Object.defineProperty(element,"innerHTML",{set:function(e){var t=this,n=document.createElement("div");n.innerHTML=e;var r=this.frag.length;Array.from(n.childNodes).forEach((function(e){t.appendChild(e)})),n.append.apply(n,this.frag.splice(0,r))},get:function(){return""}}),e&&(Object.assign(e,{removeChild:O,insertBefore:S}),m(element,e),v(e)),t&&y(element),n&&y(n)},unbind:function(element){element.remove()}}},298:function(e,t,n){"use strict";n(61),n(68);t.a=function(){return{setGroupLink:function(link){return link.substring(link.indexOf("/groups/")+"/groups/".length).replace(/(?:(?![0-9A-Za-z])[\s\S])(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*/g,"")}}}},300:function(e,t,n){"use strict";var r=n(304),o=(n(150),n(41),n(40),n(31),n(20)),c=n(24),l=(n(115),n(309)),f=n(16),d=["index","isFavourite"];t.a=function(){return{memberRanges:Object(o.f)(["0+","100+","500+","1K+","2.5K+","5K+","10K+","25K+","50K+","100K+"]),getApproximateMembersCount:function(e){var t=function(e,t,n){return e>=t&&e<=n};return 0===e?null:t(e,0,100)?"0+":t(e,101,500)?"100+":t(e,501,1e3)?"500+":t(e,1001,2500)?"1K+":t(e,2501,5e3)?"2.5K+":t(e,5001,1e4)?"5K+":t(e,10001,25e3)?"10K+":t(e,25001,5e4)?"25K+":t(e,50001,75e3)?"50K+":t(e,75001,1e5)?"75K+":t(e,100001,15e4)?"100K+":t(e,150001,2e5)?"150K+":t(e,200001,25e4)?"200K+":"250K+"},deleteGroup:function(e,t){var n={lastUpdateDate:Object(l.a)(new Date,"dd/MM/R"),groups:e.groups.filter((function(e){return e.index!==t})).map((function(e){e.index,e.isFavourite;return Object(r.a)(e,d)})).sort((function(e,a){return a.members-e.members})),name:e.name},o=f.e.create({message:"Czy chcesz usunąć tą grupę?",icon:"delete",position:"bottom-right",timeout:0,actions:[{label:"Tak",color:"white",handler:function(){return c.a.database().ref(e.name).set(n)}},{label:"Nie",color:"white",handler:function(){return o()}}]})}}}},302:function(e,t,n){"use strict";n.r(t);n(42),n(28),n(40),n(57),n(36),n(58);var r=n(89),o=n(26),c=(n(31),n(224),n(93),n(61),n(116),n(75),n(2)),l=n(24),f=n(297),d=n(309),m=n(298),y=(n(115),n(151)),h=n(60),v=n(77),k=(n(150),n(300));function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={directives:{frag:f.a},props:{group:{type:Object,default:function(){}},name:{type:String,default:""}},setup:function(e,t){var n=t.emit,o=Object(k.a)().getApproximateMembersCount,f=Object(m.a)().setGroupLink,w=Object(y.a)().displayNotify,O=Object(c.k)(),form=Object(c.j)({name:e.group.name,link:"https://facebook.com/groups/".concat(e.group.link),category:e.group.category||[],keywords:void 0!==e.group.keywords?e.group.keywords.join(","):null,members:e.group.members||0,approximateMembers:o(e.group.members),canBeSent:!1,isBeingSent:!1,wasSend:!1}),S=Object(c.j)(j({},form));function x(){O.value.hide()}return Object(c.p)((function(){return j({},form)}),(function(){form.name===S.name&&form.link===S.link&&function(e,t){var n=e.sort(),r=t.sort();if(e.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(n[i]!==r[i])return!1;return!0}(Object(r.a)(form.category),Object(r.a)(S.category))&&form.keywords===S.keywords&&form.members===S.members?form.canBeSent=!1:form.canBeSent=!0})),{dataset:v.dataset,getApproximateMembersCount:o,displayNotify:w,editGroupDialog:O,form:form,submitSubmission:function(){form.isBeingSent=!0;var t=form.name,link=form.link,n=form.category,r=form.keywords,o=form.members,c={name:t,link:f(link),category:n,keywords:r?r.split(","):null,members:o};if(h.userState.isAdmin){var m=Object(d.a)(new Date,"dd/MM/R");l.a.database().ref("".concat(e.name,"/groups/").concat(e.group.index-1)).update(c).then((function(){l.a.database().ref(e.name).update({lastUpdateDate:m})})).then((function(){return x()}))}else l.a.database().ref("submissions").push(c).then((function(){form.isBeingSent=!1,form.wasSend=!0,x()}))},show:function(){O.value.show()},hide:x,onDialogHide:function(){n("hide")},userState:h.userState}}},S=n(56),component=Object(S.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[n("q-dialog",{ref:"editGroupDialog"},[n("q-card",{staticClass:"full-width"},[n("q-card-section",[n("h6",{staticClass:"text-center q-ma-none"},[e._v("Zaaktualizuj dane grupy")])]),e._v(" "),n("q-separator"),e._v(" "),n("q-form",{on:{submit:function(t){return e.submitSubmission()}}},[n("q-card-section",{staticClass:"q-py-md q-gutter-y-lg"},[n("q-input",{attrs:{color:"secondary",disable:e.form.isBeingSent,label:"Nazwa grupy",outlined:"",required:"",square:"","stack-label":""},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"segment"}})]},proxy:!0}]),model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}}),e._v(" "),n("q-input",{attrs:{color:"secondary",disable:e.form.isBeingSent,label:"Link do grupy",outlined:"",required:"",square:"","stack-label":""},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"link"}})]},proxy:!0}]),model:{value:e.form.link,callback:function(t){e.$set(e.form,"link","string"==typeof t?t.trim():t)},expression:"form.link"}}),e._v(" "),e.name.startsWith("sections")?n("q-select",{attrs:{color:"secondary",disable:e.form.isBeingSent,label:"Kategorie",multiple:"",options:e.dataset.categories,"options-dense":"","options-selected-class":"text-secondary",outlined:"",square:"","stack-label":""},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}}):e._e(),e._v(" "),e.name.startsWith("sections")?n("q-input",{attrs:{color:"secondary",disable:e.form.isBeingSent,hint:"Jeśli nazwa twojej grupy lub link do niej nie jest oczywisty, dodaj słowa kluczowe, aby można było po nich ją wyszukać.",label:"Słowa kluczowe",outlined:"",square:"","stack-label":""},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"list"}})]},proxy:!0}],null,!1,310854456),model:{value:e.form.keywords,callback:function(t){e.$set(e.form,"keywords","string"==typeof t?t.trim():t)},expression:"form.keywords"}}):e._e(),e._v(" "),n("q-input",{attrs:{color:"secondary",disable:e.form.isBeingSent,label:"Liczba członków",outlined:"",square:"","stack-label":""},on:{input:function(t){e.form.approximateMembers=e.getApproximateMembersCount(e.form.members)}},model:{value:e.form.members,callback:function(t){e.$set(e.form,"members",e._n(t))},expression:"form.members"}}),e._v(" "),n("q-input",{attrs:{color:"secondary",disable:"",label:"Orientacyjna liczba członków",outlined:"",square:"","stack-label":""},model:{value:e.form.approximateMembers,callback:function(t){e.$set(e.form,"approximateMembers",t)},expression:"form.approximateMembers"}})],1),e._v(" "),n("q-separator"),e._v(" "),n("q-card-section",{staticClass:"flex justify-end"},[n("q-btn",{attrs:{color:"secondary",disable:e.form.isBeingSent||!e.form.canBeSent,flat:"",label:"Wyślij",loading:e.form.isBeingSent,type:"submit"}})],1)],1)],1)],1),e._v(" "),e.userState.isAdmin?e._e():n("q-dialog",{model:{value:e.form.wasSend,callback:function(t){e.$set(e.form,"wasSend",t)},expression:"form.wasSend"}},[n("q-card",[n("q-card-section",[n("h6",{staticClass:"q-ma-none q-mb-md"},[e._v("Informacja")])]),e._v(" "),n("q-card-section",{staticClass:"q-pt-none"},[e._v("\n        Prośba o zaaktualizowanie danych grupy została pomyślnie wysłana.\n        Zostaną one dodane w najbliższym możliwym czasie.\n      ")]),e._v(" "),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"secondary",flat:"",label:"OK"}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);