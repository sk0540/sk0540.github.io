(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{258:function(t,e,n){"use strict";n.r(e);var l={props:{articles:{type:Object}}},r=n(45),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"blog"}},[t._m(0),t._v(" "),t._l(t.articles.contents,(function(content){return n("article",[n("h1",{staticClass:"article-title"},[n("nuxt-link",{attrs:{to:"/myblog/"+content.id+"/"}},[t._v(t._s(content.title))])],1),t._v(" "),n("time",{domProps:{textContent:t._s(t.$dayjs(content.publishedAt).locale("ja").format("YYYY/MM/DD"))}}),t._v(" "),n("div",{staticClass:"article-content",domProps:{innerHTML:t._s(content.body)}}),t._v(" "),n("hr")])}))],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"headline",attrs:{id:"top"}},[t._v("Blog"),n("span",{staticClass:"subtext"},[t._v("ブログ")])])}],!1,null,null,null);e.default=component.exports}}]);