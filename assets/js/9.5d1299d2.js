(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{185:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),n("p",[t._v("BigInt是JavaScript中的一个新的原始类型，可以用任意精度表示整数。使用BigInt，即使超出JavaScript Number 的安全整数限制，也可以安全地存储和操作大整数。")]),t._v(" "),n("p",[t._v("chrome 67+开始支持BigInt，IE11及以下不支持")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/wangmeijian/p/9217352.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接1"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://segmentfault.com/a/1190000019912017?utm_source=tag-newest",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接2"),n("OutboundLink")],1)])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"javascript整数安全范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript整数安全范围"}},[this._v("#")]),this._v(" javaScript整数安全范围")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Number是双精度浮点数,它可以表示的最大安全范围是正负9007199254740991")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//也就是2的53次方减一 ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nMath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在浏览器控制台分别输入Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER可查看对应的最大/小值")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最大/小值 加/减 1可以正确运算，但是再次加/减 1， 结果却相同，表现为丢失精度")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//9007199254740992")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//9007199254740992")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("BigInt")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建BigInt")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("number后直接加n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123n")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("BigInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123n   number需要为整数，不能带有小数")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123n")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("BigInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("运算")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9007199254740991n")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3n")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//9007199254740994n")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9007199254740994n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//9007199254740994")]),t._v("\n\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("因为BigInts是一个单独的类型，所以a BigInt永远不会等于a Number，例如 42n !== 42。")])])}],!1,null,null,null);s.default=e.exports}}]);