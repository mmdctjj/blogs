(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{444:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("未经允许禁止转载")])]),t._v(" "),s("p",[t._v("打个广告，可以关注我哦~")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07e3c8b6824c496db93ae959348ce978~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),s("h3",{attrs:{id:"一、开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、开始"}},[t._v("#")]),t._v(" 一、开始")]),t._v(" "),s("p",[t._v("最近忙完工作，重新撸了一遍vue官方文档，发现很少被我用到的vue动画神器，JavaScript钩子函数")]),t._v(" "),s("p",[t._v("趁着周末我自己做了几个demo和大家分享下，先上图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2bed0297ec14dd68d6a5653796df45c~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4910838a46cd40f7821a7f63ec7efd25~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0cc5d2aac2e549868dd67fd73bcfdf9f~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),s("p",[t._v("温馨提示，本文需要了解的知识点如下：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.w3school.com.cn/cssref/pr_transition.asp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("css过度属性transition"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.w3school.com.cn/cssref/pr_animation.asp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("css动画属性animation"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html#%E5%8D%95%E5%85%83%E7%B4%A0-%E7%BB%84%E4%BB%B6%E7%9A%84%E8%BF%87%E6%B8%A1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue动画介绍"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html#%E5%88%97%E8%A1%A8%E8%BF%87%E6%B8%A1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue动画之列表"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("官方文档的介绍十分详细了，我就不做多余的赘述了，这里通过实践简单说下vue动画钩子函数思想以及我的使用心得")]),t._v(" "),s("h3",{attrs:{id:"二、实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、实践"}},[t._v("#")]),t._v(" 二、实践")]),t._v(" "),s("p",[t._v("以下动画实现仅是个人理解，并非标准，希望大佬们指点")]),t._v(" "),s("h4",{attrs:{id:"_1-跟进列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-跟进列表"}},[t._v("#")]),t._v(" 1.跟进列表")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/mmdctjj/good_good_study/blob/master/vue%E5%8A%A8%E7%94%BB/%E8%B7%9F%E8%BF%9B%E5%88%97%E8%A1%A8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("源代码点击这里"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("跟进列表是从下出现，回到初始位置，我在初始阶段采用了padding-top为100%，结束阶段为0%实现这个动画（margin-top也可以实现这个动画）\n"),s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5dda72174c4b4928ac14ae338116b742~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" one-in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-段落列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-段落列表"}},[t._v("#")]),t._v(" 2.段落列表")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/mmdctjj/good_good_study/blob/master/vue%E5%8A%A8%E7%94%BB/%E6%AE%B5%E8%90%BD%E5%88%97%E8%A1%A8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("源代码点击这里"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("段落列表是从右出现，回到正常位置，我在初始阶段采用了padding-left为100%，结束阶段为0%实现这个动画（margin-left也可以实现这个动画）\n"),s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/758cdd5cb2f64d70840b8c761499b274~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" one-in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_3-交错列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-交错列表"}},[t._v("#")]),t._v(" 3.交错列表")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/mmdctjj/good_good_study/blob/master/vue%E5%8A%A8%E7%94%BB/%E4%BA%A4%E9%94%99%E5%88%97%E8%A1%A8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("源代码点击这里"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("交错列表稍微复杂点，不过我们可以分解为两个动画。\n"),s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dce65f3b1b2a47eaa563d6fb47845c4d~tplv-k3u1fbpfcp-zoom-1.image",alt:""}}),t._v("\n从左下出现，高度从零变到100px（具体自己设定）")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" one-in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("从右上出现，高度从零变到100px（具体自己设定）")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" one-in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后根据列表渲染的index为奇数或偶数选择不同的动画\n"),s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56c0660e62ec468fafaeaf1e7146eccb~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEnter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("opacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" delay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" animation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'one-in 0.4s infinite'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'two-in 0.4s infinite'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'opacity 0.4s '")]),t._v("\n            el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("opacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" animation\n            el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'animation-iteration-count'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_4-更多构想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-更多构想"}},[t._v("#")]),t._v(" 4.更多构想")]),t._v(" "),s("p",[t._v("实践到这，越来越觉得页面的动画不好看，不是我们的能力差，而是我们的想象力还不够")]),t._v(" "),s("p",[t._v("翻转列表"),s("a",{attrs:{href:"https://github.com/mmdctjj/good_good_study/blob/master/vue%E5%8A%A8%E7%94%BB/%E7%BF%BB%E8%BD%AC%E5%88%97%E8%A1%A8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("源代码点击这里"),s("OutboundLink")],1),t._v(" "),s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e5ba81b11c443df98f0033317d41621~tplv-k3u1fbpfcp-zoom-1.image",alt:""}}),t._v("\n每个复杂的动画其实都是很多简单小动画的拼接，所以下次设计师拿来充满想象力的动画设计稿，先别急着掏菜刀，仔细分析下动画的组成部分，可能也没有那么难。")]),t._v(" "),s("h3",{attrs:{id:"三、思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、思想"}},[t._v("#")]),t._v(" 三、思想")]),t._v(" "),s("h4",{attrs:{id:"_1-对思想的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-对思想的理解"}},[t._v("#")]),t._v(" 1.对思想的理解")]),t._v(" "),s("p",[t._v("如果说思想，简单的说就是vue在自己封装的transition组件上检测所有子节点的插入和移除，"),s("strong",[t._v("依次")]),t._v("在这些属性作用的各个阶段抛出钩子函数接受我们前端er自定义的动画或者第三方库里的动画")]),t._v(" "),s("p",[t._v("这里的依次以插入为例指动画开始前、动画开始、动画结束，也就是对应的钩子函数beforeEntry、entry、entryTo")]),t._v(" "),s("p",[t._v("所以，vue动画的原理是将一个完整的动画在编码拆分在每个阶段，然后编译阶段重新拼接为一个完整的动画，这也就是官网这个图的含义\n"),s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e197392df8247c8b0b4a5b71c1c3a83~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"_2-实践心得"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-实践心得"}},[t._v("#")]),t._v(" 2.实践心得")]),t._v(" "),s("h5",{attrs:{id:"_2-1尽量少用过度属性做复杂的动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1尽量少用过度属性做复杂的动画"}},[t._v("#")]),t._v(" 2.1尽量少用过度属性做复杂的动画")]),t._v(" "),s("p",[t._v("过度属性要求你将过度的几个状态放在不同的钩子函数中，复杂的动画代码太多，写起来不简洁，当然，如果非要这样写，建议使用添加或移除class类的方式，我一般很少用到这过度属性")]),t._v(" "),s("h4",{attrs:{id:"_2-2多用动画属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2多用动画属性"}},[t._v("#")]),t._v(" 2.2多用动画属性")]),t._v(" "),s("p",[t._v("动画属性的好处就是可以将自定义的动画重复使用，而你只需要指定动画名")]),t._v(" "),s("h4",{attrs:{id:"_2-3多使用settiemout函数给不同dom依次设置动画延迟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3多使用settiemout函数给不同dom依次设置动画延迟"}},[t._v("#")]),t._v(" 2.3多使用setTiemout函数给不同dom依次设置动画延迟")]),t._v(" "),s("p",[t._v("想在动画上根据不同的dom设置不同的动画延迟是十分困难的，但是我们可以很方便的给dom设置动画开始时间。")]),t._v(" "),s("p",[t._v("参考文章：\n"),s("a",{attrs:{href:"https://juejin.im/post/6844903584887209997",target:"_blank",rel:"noopener noreferrer"}},[t._v("[译] 小 Tips 让你的交互动画从 “还不错” 变成 “超级棒”"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);