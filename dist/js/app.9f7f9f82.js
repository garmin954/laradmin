(function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"41da":function(t,e,n){},"4a00":function(t,e,n){"use strict";var a=n("cfc7"),i=n.n(a);i.a},"4e64":function(t,e,n){"use strict";var a=n("41da"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Base")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-box"},[n("el-container",[n("el-aside",{ref:"leftnav",attrs:{width:"230px"}},[n("nav-menu",{attrs:{show:t.showNav}})],1),n("el-container",[n("el-header",[n("top-menu",{on:{changenav:t.changeNav}}),n("tags-view")],1),n("el-main",[n("app-main")],1)],1)],1)],1)},r=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-box"},[n("div",{ref:"logo",staticClass:"admin-logo"},[t._v(" Yuan Lu ")]),n("transition",{staticClass:"navanmi",attrs:{name:"navanmi",type:"animation"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"",collapse:t.show,"background-color":"#2d2f30","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[t._l(t.menuList,(function(e,a){return n("el-submenu",{key:a,attrs:{index:a.toString()}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.meta.title))])]),n("el-menu-item-group",t._l(e.children,(function(e,i){return n("router-link",{key:i,attrs:{to:e.path}},[n("el-menu-item",{attrs:{index:a.toString()+"-"+i.toString()}},[t._v(t._s(e.meta.title))])],1)})),1)],2)})),n("el-submenu",{attrs:{index:"5"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页s")])]),n("el-menu-item-group",[n("router-link",{attrs:{to:"/tab"}},[n("el-menu-item",{attrs:{index:"5-1"}},[t._v("Tab")])],1)],1)],2)],2)],1)],1)},c=[],u={name:"NavMenu",props:["show"],data:function(){return{menuList:[]}},created:function(){this.reviewRoute()},watch:{},mounted:function(){var t=this.$refs["logo"];t.addEventListener("resize",(function(){t.style.width}))},methods:{reviewRoute:function(){this.menuList=this.$router["options"]["routes"]},handleOpen:function(){},handleClose:function(){}}},d=u,f=(n("4a00"),n("2877")),v=Object(f["a"])(d,l,c,!1,null,"46a2d1b4",null),m=v.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-menu-box"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-menu-item",[n("i",{ref:"cns",staticClass:"el-icon-s-unfold",on:{click:t.changenav}})]),n("el-menu-item",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"el-icon-s-platform"})])],1),n("el-menu-item",[n("i",{staticClass:"el-icon-refresh",on:{click:t.refresh}})])],1)],1)},h=[],b=(n("5319"),{name:"TopMenu",data:function(){return{activeIndex:"1",activeIndex2:"1",showNav:!1}},methods:{changenav:function(){var t=this.$refs["cns"];1==this.showNav?t.classList.replace("el-icon-s-fold","el-icon-s-unfold"):t.classList.replace("el-icon-s-unfold","el-icon-s-fold"),this.showNav=!this.showNav,this.$emit("changenav",this.showNav)},handleSelect:function(){},refresh:function(){this.$router.go(0)}}}),w=b,g=(n("9195"),Object(f["a"])(w,p,h,!1,null,"fe8f89c0",null)),_=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tags-view-container"},[n("div",{staticClass:"const-btn"},[n("div",{staticClass:"close-all",on:{click:t.closeAllNav}},[n("i",{staticClass:"el-icon-circle-close"})]),n("router-link",{attrs:{to:"/admin"}},[n("div",{staticClass:"tags-view-item nav-index"},[n("i",{staticClass:"el-icon-house"})])])],1),n("scroll-pane",{ref:"scrollPane",staticClass:"tags-view-wrap"},t._l(Array.from(t.visitedViews),(function(e){return n("router-link",{key:e.path,ref:"tag",refInFor:!0,staticClass:"tags-view-item ",class:t.isActive(e)?"active":"",attrs:{to:e.path}},[t._v(" "+t._s(e.title)+" "),n("span",{staticClass:"el-icon-close",on:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.delSelectTag(e)}}})])})),1)],1)},$=[],T=(n("a4d3"),n("e01a"),n("d28b"),n("fb6a"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-scrollbar",{ref:"scrollContainer",staticClass:"scroll-container",attrs:{vertical:!1},nativeOn:{wheel:function(e){return e.preventDefault(),t.handleScroll(e)}}},[n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},[t._t("default")],2),n("div",{staticClass:"switch-button switch-button-left el-icon-d-arrow-left"}),n("div",{staticClass:"switch-button switch-button-right el-icon-d-arrow-right"})])])],1)}),V=[],y=(n("c740"),n("b619")),C=(n("f4bd"),4),E={name:"ScrollPane",data:function(){return{left:0}},mounted:function(){this.$nextTick((function(){new y["a"](".swiper-container",{direction:"horizontal",navigation:{nextEl:".switch-button-left",prevEl:".switch-button-right"}})}))},computed:{scrollWrapper:function(){return this.$refs.scrollContainer.$refs.wrap}},methods:{handleScroll:function(t){var e=t.wheelDelta||40*-t.deltaY,n=this.scrollWrapper;n.scrollLeft=n.scrollLeft+e/4},moveToTarget:function(t){var e=this.$refs.scrollContainer.$el,n=e.offsetWidth,a=this.scrollWrapper,i=this.$parent.$refs.tag,s=null,o=null;if(i.length>0&&(s=i[0],o=i[i.length-1]),s===t)a.scrollLeft=0;else if(o===t)a.scrollLeft=a.scrollWidth-n;else{var r=i.findIndex((function(e){return e===t})),l=i[r-1],c=i[r+1],u=c.$el.offsetLeft+c.$el.offsetWidth+C,d=l.$el.offsetLeft-C;u>a.scrollLeft+n?a.scrollLeft=u-n:d<a.scrollLeft&&(a.scrollLeft=d)}}}},S=E,I=(n("944b"),Object(f["a"])(S,T,V,!1,null,null,null)),L=I.exports,O={name:"TagsView",components:{ScrollPane:L},computed:{visitedViews:function(){return this.$store.state.tagsview.visitedviews}},watch:{$route:function(){this.addViewTags(),this.moveToCurrentTag()}},methods:{isActive:function(t){return t.path==this.$route.path},addViewTags:function(){if(this.$route.name){var t=this.$route;this.$store.dispatch("addVisitedViews",t)}},delSelectTag:function(t){var e=this;this.$store.dispatch("delVisitedViews",t).then((function(n){if(e.isActive(t)){var a=n.slice(-1)[0];a?e.$router.push(a):e.$router.push("/")}}))},closeAllNav:function(){this.$store.dispatch("delAllVisitedViews",this.$router)},moveToCurrentTag:function(){var t=this,e=this.$refs.tag;this.$nextTick((function(){if(window.console.log(e),void 0!==e){var n=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var r=s.value;if(r.to.path===t.$route.path){t.$refs.scrollPane.moveToTarget(r),r.to.fullPath!==t.$route.fullPath&&t.$store.dispatch("updateVisitedView",t.$route);break}}}catch(l){a=!0,i=l}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}}}))}}},A=O,j=(n("c94c"),Object(f["a"])(A,x,$,!1,null,"3247aa04",null)),k=j.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},P=[],N={name:"AppMain"},W=N,M=Object(f["a"])(W,D,P,!1,null,"93a26530",null),B=M.exports,Y={name:"Base",components:{NavMenu:m,TopMenu:_,TagsView:k,AppMain:B},data:function(){return{showNav:!1}},computed:{},methods:{changeNav:function(t){this.showNav=t;var e=this.$refs["leftnav"].$el;e.style=1==t?"width:64px;":"width:230px"}}},z=Y,U=(n("4e64"),Object(f["a"])(z,o,r,!1,null,"91636336",null)),J=U.exports,R=(n("0fae"),n("323e")),F=n.n(R),q={name:"app",components:{Base:J},mounted:function(){}};F.a.start(),window.onload=function(){F.a.done()};var G=q,H=(n("034f"),Object(f["a"])(G,i,s,!1,null,null,null)),K=H.exports,Q=n("5c96"),X=n.n(Q),Z=(n("a5d8"),n("2f62")),tt=(n("54ba"),n("8c4f")),et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"},[t._v(" Yuan Lu ")])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"},[t._v(" Laravel ")])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"},[t._v(" Vue ")])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"},[t._v(" Element UI ")])])],1)],1)},nt=[],at={name:"Index"},it=at,st=(n("e4d0"),Object(f["a"])(it,et,nt,!1,null,"1626bdbc",null)),ot=st.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("后台 Tab")])},lt=[],ct={name:"Tab"},ut=ct,dt=Object(f["a"])(ut,rt,lt,!1,null,"0b5052fe",null),ft=dt.exports;a["default"].use(tt["a"]);var vt=new tt["a"]({routes:[{path:"/",redirect:"/index",component:B,meta:{title:"后台"},children:[{path:"/admin/admin-index",meta:{title:"首页1111"},name:"index",component:ot},{path:"/admin/tab",meta:{title:"TAB222sss"},name:"tab",component:ft},{path:"/admin/admin-index345",meta:{title:"首页1111345sss"},name:"index",component:ot},{path:"/admin/tab23432432",meta:{title:"TAB222324234"},name:"tab",component:ft},{path:"/admin/admin-index32432",meta:{title:"首页11112443sss"},name:"index",component:ot},{path:"/admin/tab34",meta:{title:"TAB22234sss"},name:"tab",component:ft},{path:"/admin/admin-index44",meta:{title:"首页111133sss"},name:"index",component:ot},{path:"/admin/tab22",meta:{title:"TAB22212"},name:"tab",component:ft},{path:"/admin/admin-index11",meta:{title:"首页111111"},name:"index",component:ot},{path:"/admin/tab1",meta:{title:"TAB2221"},name:"tab",component:ft},{path:"/admin/admin-index11s",meta:{title:"首页111111sss"},name:"index",component:ot},{path:"/admin/tab1sss",meta:{title:"TAB2221ss"},name:"tab",component:ft}]},{path:"/admin",meta:{title:"后台首页"},name:"admin",component:ot}]}),mt=(n("a434"),n("2909")),pt=n("3835"),ht={state:{visitedviews:[]},mutations:{ADD_VISITED_VIEWS:function(t,e){t.visitedviews.some((function(t){return t.path==e.path}))||"admin"!=e.name&&t.visitedviews.push({name:e.name,path:e.path,title:e.meta.title||"no-title"})},DEL_VISITED_VIEWS:function(t,e){var n=!0,a=!1,i=void 0;try{for(var s,o=t.visitedviews.entries()[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var r=Object(pt["a"])(s.value,2),l=r[0],c=r[1];if(c.path==e.path&&"admin"!=e.name){t.visitedviews.splice(l,1);break}}}catch(u){a=!0,i=u}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}},DEL_ALL_VISITED_VIEWS:function(t){t.visitedviews=[]},UPDATE_VISITED_VIEW:function(t,e){var n=!0,a=!1,i=void 0;try{for(var s,o=t.visitedViews[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var r=s.value;if(r.path===e.path){r=Object.assign(r,e);break}}}catch(l){a=!0,i=l}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}}},actions:{addVisitedViews:function(t,e){var n=t.commit;n("ADD_VISITED_VIEWS",e)},delVisitedViews:function(t,e){var n=t.commit,a=t.state;return new Promise((function(t){n("DEL_VISITED_VIEWS",e),t(Object(mt["a"])(a.visitedviews))}))},delAllVisitedViews:function(t){var e=t.commit;e("DEL_ALL_VISITED_VIEWS")},updateVisitedView:function(t,e){var n=t.commit;n("UPDATE_VISITED_VIEW",e)}}},bt=ht,wt={visitedviews:function(t){return t.tagsview.visitedviews}},gt=wt;a["default"].use(Z["a"]);var _t=new Z["a"].Store({state:{name:"YuanLu"},modules:{tagsview:bt},getters:gt}),xt=_t,$t=n("6736"),Tt=n.n($t);a["default"].use(Z["a"]),a["default"].use(X.a),a["default"].config.productionTip=!0,new a["default"]({render:function(t){return t(K)},router:vt,store:xt,Sass:Tt.a}).$mount("#app"),vt.beforeEach((function(t,e,n){F.a.start(),n()})),vt.afterEach((function(t){F.a.done()}))},"58cd":function(t,e,n){},6736:function(t,e,n){},"85ec":function(t,e,n){},9195:function(t,e,n){"use strict";var a=n("c6db"),i=n.n(a);i.a},"944b":function(t,e,n){"use strict";var a=n("b742"),i=n.n(a);i.a},"957c":function(t,e,n){},b742:function(t,e,n){},c6db:function(t,e,n){},c94c:function(t,e,n){"use strict";var a=n("58cd"),i=n.n(a);i.a},cfc7:function(t,e,n){},e4d0:function(t,e,n){"use strict";var a=n("957c"),i=n.n(a);i.a}});
//# sourceMappingURL=app.9f7f9f82.js.map