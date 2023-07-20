(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{456:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"💡相关阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#💡相关阅读"}},[t._v("#")]),t._v(" 💡相关阅读")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.cn/post/7241567583504728119",target:"_blank",rel:"noopener noreferrer"}},[t._v("🎉干货满满，React设计原理(一)：藏在源码里的紧箍咒，几个容易混淆的变量🎉"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("文章首发公众号：萌萌哒草头将军，最近关注有🎁，欢迎关注")])]),t._v(" "),a("h2",{attrs:{id:"💎-第二座大山-链表结构和双缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#💎-第二座大山-链表结构和双缓存机制"}},[t._v("#")]),t._v(" 💎 第二座大山：链表结构和双缓存机制")]),t._v(" "),a("p",[t._v("上篇文章中讲述了几个容易给源码阅读造成困扰的几个"),a("code",[t._v("fiber")]),t._v("相关的变量名称，这篇我将介绍下"),a("code",[t._v("Fiber")]),t._v("架构的链表结构和双缓存机制。")]),t._v(" "),a("p",[t._v("上文提到，"),a("code",[t._v("FiberNode")]),t._v("扮演多种角色时，保存着不同的数据，所以"),a("code",[t._v("FiberNode")]),t._v("保存的数据比较复杂。")]),t._v(" "),a("p",[t._v("本文重点，讲解作为"),a("code",[t._v("Fiber")]),t._v("架构的一环时，保存的链状数据结构（同时也会捎带的讲解其他的一些属性），以及双缓存机制，")]),t._v(" "),a("h3",{attrs:{id:"🚗-链表结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🚗-链表结构"}},[t._v("#")]),t._v(" 🚗 链表结构")]),t._v(" "),a("p",[a("code",[t._v("Fiber tree")]),t._v("由多个"),a("code",[t._v("FiberNode")]),t._v("节点组成的树状链表结构的数据。每个"),a("code",[t._v("FiberNode")]),t._v("\n的节点都有以下几个和"),a("code",[t._v("Fiber")]),t._v("架构相关的重要属性：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向父节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("return "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向第一个子节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向右边兄弟节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("虽然根据不同的节点类型（比如函数组件、类组件、普通元素等）数据结构会有所不同，但是它们都会使用这三个属性描述它与它们相邻节点的关系。")]),t._v(" "),a("p",[t._v("比如，有如下的代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mmdctjj"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button\n        onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'l'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("count")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRoot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nroot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("它们的"),a("code",[t._v("Fiber tree")]),t._v("示意图如下：")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac675369855f44288257f7de916e60be~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[t._v("实际的"),a("code",[t._v("Fiber")]),t._v("树状链表结构如下：")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe0441d4a31d4cf08d3359b0f65feee8~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[t._v("此时对应的是"),a("code",[t._v("mounted")]),t._v("阶段的初始状态，如果我们点击一次按钮，新的树状链状结构(对应"),a("code",[t._v("updated")]),t._v("阶段)如下：")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00db240d19b5452d9af1bfe1fc66cf79~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[t._v("对比两次的"),a("code",[t._v("Fiber")]),t._v("数据结构，从中我们可以得出结论：")]),t._v(" "),a("ul",[a("li",[t._v("🔥 在函数组件对应的链表结构中，"),a("code",[t._v("React")]),t._v("每次将更新的内容渲染在页面之后，会将组件里的每个"),a("code",[t._v("useState")]),t._v("返回的状态记录在"),a("code",[t._v("memoizedState")]),t._v("下的"),a("code",[t._v("baseState")]),t._v("属性上，返回的"),a("code",[t._v("dispatch")]),t._v("方法有"),a("code",[t._v("queue")]),t._v("属性上，同时使用"),a("code",[t._v("next")]),t._v("属性指向下一个状态。直到最后一个状态时，"),a("code",[t._v("next")]),t._v("为"),a("code",[t._v("null")]),t._v("。这是我们发现的第二条链状结构。")])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/707388b24cab4677abd24a0e751b0d76~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("ul",[a("li",[t._v("🔥 另外我们还发现，"),a("code",[t._v("button")]),t._v("所在的"),a("code",[t._v("fiber")]),t._v("结构中，"),a("code",[t._v("memoizedProps")]),t._v("、"),a("code",[t._v("pendingProps")]),t._v("属性上存在"),a("code",[t._v("children")]),t._v("、"),a("code",[t._v("onClick")]),t._v("属性")])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/321beee4d24b44e984df3e49502a8d81~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("ul",[a("li",[t._v("🔥 我们还发现，更新之后，每个"),a("code",[t._v("fiber")]),t._v("结构的"),a("code",[t._v("alternate")]),t._v("都指向了上次的自己。这其实是双缓存机制的实现，下面我们还会讲到。")])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f8503613f9941d7a2e9f2b974cd6624~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[t._v("如果我们将上面的函数组件替换为具有同样功能的类组件时（代码如下）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mmdctjj"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button\n          onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"l"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("它的树状链表结构如下：")]),t._v(" "),a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/440658c709ca403bbe80bb07668073ea~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png",width:"100%"}}),t._v(" "),a("p",[t._v("这里我们发现类组件和函数组件不一样的地方：")]),t._v(" "),a("ul",[a("li",[t._v("🔥 类组件的"),a("code",[t._v("fiber")]),t._v("结构的"),a("code",[t._v("memoizedState")]),t._v("属性仅仅对应"),a("code",[t._v("this.state")]),t._v("的值，没有了想函数组件的第二条链表。")])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e6a49f8a4bf4f218b9aeb89d1e1ca5a~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("ul",[a("li",[t._v("🔥 类组件的"),a("code",[t._v("fiber")]),t._v("结构的"),a("code",[t._v("updateQueue")]),t._v("属性承载了组件的更新信息。这里的更新我们以后会详细讲到的。")])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e261182a769243fa8798ba29e8df5664~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[t._v("总结下，"),a("code",[t._v("React")]),t._v("会为不同类型的"),a("code",[t._v("Fiber tree")]),t._v("节点创建不同的数据结构（略微不同的"),a("code",[t._v("FiberNode")]),t._v("类型），不同的数据结构更新方式也不一样。")]),t._v(" "),a("p",[t._v("除了上面说到的类组件和函数组件，还有"),a("code",[t._v("Fargement")]),t._v("、"),a("code",[t._v("Suspense")]),t._v("内置组件类型和一些别的情况下的特殊组件。")]),t._v(" "),a("h3",{attrs:{id:"🚗-双缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🚗-双缓存机制"}},[t._v("#")]),t._v(" 🚗 双缓存机制")]),t._v(" "),a("p",[t._v("上面提到，更新之后每个"),a("code",[t._v("fiber")]),t._v("节点的"),a("code",[t._v("alternate")]),t._v("属性都会指向上次的自己。其实这是"),a("code",[t._v("React")]),t._v("的一种优化策略。")]),t._v(" "),a("p",[a("code",[t._v("React")]),t._v("在运行时解析"),a("code",[t._v("vnode")]),t._v("，更新之后标记出更新前后变动的"),a("code",[t._v("dom")]),t._v("，然后渲染在页面中。如果每次都重新生成新的"),a("code",[t._v("dom")]),t._v("显然十分浪费资源。")]),t._v(" "),a("p",[t._v("所以"),a("code",[t._v("React")]),t._v("一方面会为每个"),a("code",[t._v("dom")]),t._v("绑定上次的状态，当发生变更时，快速比对，找出变动的地方。")]),t._v(" "),a("p",[t._v("另一方面，"),a("code",[t._v("React")]),t._v("还在内存中维护了一棵"),a("code",[t._v("Fiber tree")]),t._v("，变量名为"),a("code",[t._v("workInProgress")]),t._v("，用于快速切换。")]),t._v(" "),a("blockquote",[a("p",[t._v("源码中，所有带着"),a("code",[t._v("workInProgressXxx")]),t._v("的变量，都是指运行在内存中的对象。比如"),a("code",[t._v("workInProgressHook")])])]),t._v(" "),a("p",[t._v("上篇文章中提到过，每个应用都会有唯一的"),a("code",[t._v("FiberRootNode")]),t._v("实例用来维护整个应用的状态和组件信息。它有个"),a("code",[t._v("current")]),t._v("属性用于指向渲染在页面中的"),a("code",[t._v("fiber tree")]),t._v("，而每个"),a("code",[t._v("fiber")]),t._v("节点"),a("code",[t._v("alternate")]),t._v("指向另一棵树中的自己。")]),t._v(" "),a("p",[t._v("接下来我们从组件开始加载到更新，看看双缓存机制的作用过程。")]),t._v(" "),a("p",[t._v("首先是应用被建立。"),a("code",[t._v("App")]),t._v("组件还未还未加载，此时是"),a("code",[t._v("FiberRootNode")]),t._v("的"),a("code",[t._v("current")]),t._v("属性为"),a("code",[t._v("null")]),t._v("：")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7913d514d394bdcb8d69295c87e644d~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("App")]),t._v("组件解析成"),a("code",[t._v("vMNode")]),t._v("后，还在内存"),a("code",[t._v("workInProgress")]),t._v("中时：")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f809eb4e310d411899e72622146a8519~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[t._v("当将"),a("code",[t._v("vNode")]),t._v("渲染在浏览器时，"),a("code",[t._v("FiberRootNode")]),t._v("的"),a("code",[t._v("current")]),t._v("属性指向"),a("code",[t._v("workInProgress")]),t._v("，"),a("code",[t._v("workInProgress")]),t._v("置空操作：")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a202ed2eef1f47f0aeb80ea47e578586~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[t._v("此时，我们点击"),a("code",[t._v("button")]),t._v("的点击事件，触发更新，内存中又多了个一棵树：")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97619d2b8f674c988210ecf38ed85ccc~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("alternate")]),t._v("属性比对，发现是"),a("code",[t._v("App")]),t._v("组件状态发生改变了，所以从"),a("code",[t._v("App")]),t._v("组件开始替换子树，然后将"),a("code",[t._v("FiberRootNode")]),t._v("的"),a("code",[t._v("current")]),t._v("属性指向"),a("code",[t._v("workInProgress")]),t._v("成为新的"),a("code",[t._v("curent")]),t._v("属性，旧的"),a("code",[t._v("current")]),t._v("替换之后成为"),a("code",[t._v("workInProgress")]),t._v("，并置为空，等待下次的更新：")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4394ff787c1405fb320df209417b2d0~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("blockquote",[a("p",[t._v("这里我小小地剧透下，上述整个过程主要是"),a("code",[t._v("render")]),t._v("阶段地内容。具体而言，"),a("code",[t._v("render")]),t._v("阶段又可以分为三个小阶段：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("beginWork")]),t._v("阶段：顺着"),a("code",[t._v("child")]),t._v("属性向下遍历，找到变化地地方，打上"),a("code",[t._v("标记")])]),t._v(" "),a("li",[a("code",[t._v("complateWork")]),t._v("阶段：顺着"),a("code",[t._v("return")]),t._v("属性向上回归，将有"),a("code",[t._v("标记")]),t._v("的地方"),a("code",[t._v("更新")]),t._v("，此时就是更新"),a("code",[t._v("workInProgress")]),t._v("对应地"),a("code",[t._v("Fiber tree")])]),t._v(" "),a("li",[a("code",[t._v("commitRoot")]),t._v("阶段：将"),a("code",[t._v("workInProgress")]),t._v("对应的"),a("code",[t._v("Fiber tree")]),t._v("渲染到页面，同时完成上述指针的切换工作。")])])]),t._v(" "),a("h2",{attrs:{id:"🚗-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🚗-总结"}},[t._v("#")]),t._v(" 🚗 总结")]),t._v(" "),a("p",[a("code",[t._v("React")]),t._v("为不同的节点类型构建了不同的"),a("code",[t._v("fiber")]),t._v("结构和更新机制，但总的来说，它们具有同样的链表结构。")]),t._v(" "),a("p",[t._v("本文重点介绍了类组件和函数组件的一些字段区别。另外通过"),a("code",[t._v("alternate")]),t._v("引出并介绍了"),a("code",[t._v("双缓存")]),t._v("机制："),a("code",[t._v("current")]),t._v("和"),a("code",[t._v("workInProgress")]),t._v("的循环往替更新。")]),t._v(" "),a("p",[t._v("就是这两个重要的”圈“，给"),a("code",[t._v("React")]),t._v("套上了神秘的面纱。")]),t._v(" "),a("h2",{attrs:{id:"🎉-最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🎉-最后"}},[t._v("#")]),t._v(" 🎉 最后")]),t._v(" "),a("p",[t._v("如果你发现本文一些错误的地方，请不吝指正，肥肠感谢🙏")]),t._v(" "),a("p",[t._v("这是本系列的第二篇了，真的干货满满，全文近六千五字符。")]),t._v(" "),a("p",[t._v("这个系列的目的通过分析一些理论知识，降低阅读源码的难度，即使不读源码也会对"),a("code",[t._v("React")]),t._v("的设计思想有总体上的理解。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.cn/post/7241567583504728119",target:"_blank",rel:"noopener noreferrer"}},[t._v("🎉干货满满，React设计原理(一)：藏在源码里的紧箍咒，几个容易混淆的变量🎉"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/7241567583504728119",target:"_blank",rel:"noopener noreferrer"}},[t._v("🎉干货满满，React设计原理(二)：藏在源码里的两个圈，关键的链表结构和双缓存技术🎉"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("🎉干货满满，React设计原理(三)：藏在源码里的排位赛，"),a("code",[t._v("Lanu模型")]),t._v("和"),a("code",[t._v("Batched Updates")]),t._v("🎉")]),t._v(" "),a("li",[t._v("🎉干货满满，React设计原理(四)：藏在源码里的传呼机，"),a("code",[t._v("Dispatch")]),t._v("机制和事件系统🎉")]),t._v(" "),a("li",[t._v("🎉干货满满，React设计原理(五)：藏在源码里的xx，待定🎉")])]),t._v(" "),a("p",[t._v("所以对你有帮助话请给我点下赞，这对我很重要！")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e4eef4c835b47738b5376e577b3a5f1~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);