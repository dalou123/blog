(window.webpackJsonp=window.webpackJsonp||[]).push([[8,34,36],{364:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));n(154);var o=n(0);function s(){const e=Object(o.d)();if(!e)throw new Error("must be called in setup");return(null==e?void 0:e.proxy)||{}}function i(){const e=Object(o.h)(!1);return Object(o.e)(()=>{e.value=!0}),Object(o.f)(()=>{e.value=!1,setTimeout(()=>{e.value=!0},100)}),{recoShowModule:e}}},370:function(e,t,n){},377:function(e,t,n){"use strict";n.r(t);var o=n(0),s=Object(o.c)({name:"DropdownTransition",setup:(e,t)=>({setHeight:e=>{e.style.height=e.scrollHeight+"px"},unsetHeight:e=>{e.style.height=""}})}),i=(n(378),n(1)),l=Object(i.a)(s,(function(){var e=this._self._c;this._self._setupProxy;return e("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.default=l.exports},378:function(e,t,n){"use strict";n(370)},380:function(e,t,n){},389:function(e,t,n){},394:function(e,t,n){"use strict";n(380)},399:function(e,t,n){"use strict";n.r(t);n(4),n(18),n(54);var o=n(0),s=n(421),i=n(403),l=n(26),r=n(364);var a=Object(o.c)({name:"SidebarLinks",components:{SidebarGroup:s.default,SidebarLink:i.default},props:["items","depth","sidebarDepth"],setup(e,t){const n=Object(r.a)(),{items:s}=Object(o.i)(e),i=Object(o.h)(0),a=()=>{const e=function(e,t){for(let n=0;n<t.length;n++){const o=t[n];if("group"===o.type&&o.children.some(t=>"page"===t.type&&Object(l.e)(e,t.path)))return n}return-1}(n.$route,s.value);e>-1&&(i.value=e)},c=()=>{const e=[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>-1!=decodeURIComponent(n.$route.fullPath).indexOf(decodeURIComponent(e.hash)));null==e||e.length<1||null==e[0].offsetTop||setTimeout((function(){window.scrollTo(0,e[0].offsetTop+160)}),100)},u=()=>{const e=document.getElementsByClassName("sidebar")[0];let t=document.getElementsByClassName("active sidebar-link")[1];if(null!=t&&null!=t&&null!=t.offsetTop||(t=document.getElementsByClassName("active sidebar-link")[0]),null==t||null==t||null==t.offsetTop)return;const n=e.clientHeight||window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o=t.offsetTop,s=t.offsetTop+t.offsetHeight,i=e.scrollTop;s<=n+i||(e.scrollTop=s+5-n);o>=i||(e.scrollTop=o-5)},p=e=>p(n.$route,e.regularPath);return a(),Object(o.e)(()=>{(()=>{const e=decodeURIComponent(n.$route.fullPath);if(!e||""==e)return;const t=[].slice.call(document.querySelectorAll(".sidebar-link"));for(let n=0;n<t.length;n++)if(-1!=decodeURIComponent(t[n].getAttribute("href")).indexOf(e))return void c()})(),u()}),Object(o.f)(()=>u()),{openGroupIndex:i,refreshIndex:a,toggleGroup:e=>{n.openGroupIndex=e===n.openGroupIndex?-1:e},isActive:p}},watch:{$route(){this.refreshIndex()}}}),c=n(1),u=Object(c.a)(a,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.items.length?t("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(n,o){return t("li",{key:o},["group"===n.type?t("SidebarGroup",{attrs:{item:n,open:o===e.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(o)}}}):t("SidebarLink",{attrs:{sidebarDepth:e.sidebarDepth,item:n}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=u.exports},403:function(e,t,n){"use strict";n.r(t);n(4),n(54);var o=n(0),s=n(26);var i=Object(o.c)({functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$site:n,$route:o,$themeConfig:i,$themeLocaleConfig:l},props:{item:r,sidebarDepth:a}}){const c=Object(s.e)(o,r.path),u="auto"===r.type?c||r.children.some(e=>Object(s.e)(o,r.basePath+"#"+e.slug)):c;return function(e,t,n,o){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:o,"sidebar-link":!0}},n)}(e,r.path,r.title||r.path,u)}}),l=(n(394),n(1)),r=Object(l.a)(i,void 0,void 0,!1,null,null,null);t.default=r.exports},409:function(e,t,n){"use strict";n(389)},421:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(26),i=n(377),l=n(364),r=Object(o.c)({name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:i.default},setup:(e,t)=>(Object(l.a)().$options.components.SidebarLinks=n(399).default,{isActive:s.e})}),a=(n(409),n(1)),c=Object(a.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?t("router-link",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):t("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),t("DropdownTransition",[e.open||!e.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,sidebarDepth:e.item.sidebarDepth,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);