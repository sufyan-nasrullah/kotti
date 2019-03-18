(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{463:function(t,e,l){"use strict";l.r(e);var v={name:"Avatar",data:function(){return{avatarData:[{name:"Beoncye",src:"https://picsum.photos/200"},{name:"Justin",src:"https://picsum.photos/100"},{name:"Simens",src:"https://picsum.photos/130"},{name:"Simens",src:"https://picsum.photos/140"},{name:"Simens",src:"https://picsum.photos/150"}]}}},n=l(0),component=Object(n.a)(v,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",[l("h1",[t._v("Avatars")]),t._v(" "),l("p",[t._v("Avatar is a round object to help identify the user information.")]),t._v(" "),l("h2",[t._v("Item")]),t._v(" "),l("div",{staticClass:"element-example"},[l("KtAvatar",{staticClass:"mr-16px",attrs:{name:"Jony O'Five",hoverable:"",src:"https://picsum.photos/200/100",showTooltip:""}}),t._v(" "),l("KtAvatar",{staticClass:"mr-16px",attrs:{name:"Jony O'Five",hoverable:"",selected:!0}}),t._v(" "),l("KtAvatar",{staticClass:"mr-16px",attrs:{name:"Jony O'Five",small:""}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),l("h2",[t._v("Grouped")]),t._v(" "),l("div",{staticClass:"element-example"},[l("kt-avatar-group",{attrs:{items:t.avatarData,showItems:3,showTooltip:"",isStack:"",hoverable:""}})],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),l("h2",[t._v("Usage")]),t._v(" "),l("h3",[t._v("Avatar Attributes")]),t._v(" "),t._m(7),t._v(" "),l("h3",[t._v("Avatar Group Attributes")]),t._v(" "),t._m(8)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Avatar has "),e("code",[this._v("name")]),this._v(" and image "),e("code",[this._v("src")]),this._v(". If no image is given,\nor image error occurs avatar will use a placeholder avatar.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Set "),e("code",[this._v("small")]),this._v(" to make the avatar smaller.")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("pre",[l("code",{staticClass:"language-html"},[l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("KtAvatar")]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"Jony O\'Five"')]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("hoverable")]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("src")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"https://picsum.photos/200/100"')]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("showTooltip")]),t._v("\n/>")]),t._v("\n"),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("KtAvatar")]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"Jony O\'Five"')]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("src")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"https://picsum.photos/200"')]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("selected")]),t._v("\n/>")]),t._v("\n"),l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("KtAvatar")]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"Jony O\'Five"')]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("small")]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("src")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"https://picsum.photos/200"')]),t._v("\n/>")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Avatars can be grouped to avatar groups. Using "),e("code",[this._v("items")]),this._v(" props to pass the "),e("code",[this._v("avatarData")]),this._v(".\nThe example of the avatar data is shown here, which has same properities as avatar item:")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("pre",[l("code",{staticClass:"language-js"},[l("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" avatarData = [\n\t{\n\t\t"),l("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'Justin'")]),t._v(",\n\t\t"),l("span",{staticClass:"hljs-attr"},[t._v("src")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'https://picsum.photos/100'")]),t._v("\n\t},\n\t{\n\t\t"),l("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'Beoncye'")]),t._v(",\n\t\t"),l("span",{staticClass:"hljs-attr"},[t._v("src")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'https://picsum.photos/200'")]),t._v("\n\t},\n\t{\n\t\t"),l("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'Simens'")]),t._v(",\n\t\t"),l("span",{staticClass:"hljs-attr"},[t._v("src")]),t._v(": "),l("span",{staticClass:"hljs-string"},[t._v("'https://picsum.photos/120'")]),t._v("\n\t}\n];\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Avatar group can be stacked by setting "),e("code",[this._v("isStack")]),this._v(".\nYou can control how many avatar items are displayed with "),e("code",[this._v("showItems")]),this._v(".")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("pre",[l("code",{staticClass:"language-html"},[l("span",{staticClass:"hljs-tag"},[t._v("<"),l("span",{staticClass:"hljs-name"},[t._v("kt-avatar-group")]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v(":items")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"avatarData"')]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v(":showItems")]),t._v("="),l("span",{staticClass:"hljs-string"},[t._v('"3"')]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("hoverable")]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("isStack")]),t._v("\n\t"),l("span",{staticClass:"hljs-attr"},[t._v("showTooltip")]),t._v("\n/>")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Attribute")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Accepted values")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Default")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("hoverable")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("add hover effects to avatar")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("name")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("avatar name")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("String")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("selected")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("avatar selecte status")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("showTooltip")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("show avatar name in tooltip")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("small")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("set avatar to small size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("src")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("avatar image")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("String")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Attribute")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Accepted values")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Default")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("isStack")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("stack avatars")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("items")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("avatar data array, each item has avatar attribute")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Array")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("showItems")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("number of items to show")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("2")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("showTooltip")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("show avatar name in tooltip")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Boolean")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("false")])])])])])}],!1,null,null,null);e.default=component.exports}}]);