(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{180:function(t,e,r){var content=r(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("9fb3cba2",content,!0,{sourceMap:!1})},188:function(t,e,r){var content=r(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("56b15182",content,!0,{sourceMap:!1})},189:function(t,e,r){var content=r(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("1cd82a20",content,!0,{sourceMap:!1})},195:function(t,e,r){"use strict";r(264);var l=r(49),n=r(77),o=r.n(n),c=r(273),f=r(276),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("nuxt"),t._v(" "),r("Wiggle")],1)],1)}),[],!1,null,null,null);e.a=component.exports;o()(component,{Wiggle:r(268).default}),o()(component,{VApp:c.a,VMain:f.a})},205:function(t,e,r){r(206),t.exports=r(207)},234:function(t,e,r){"use strict";r(180)},235:function(t,e,r){var l=r(35)(!1);l.push([t.i,"h1[data-v-915e8a7e]{font-size:20px}",""]),t.exports=l},264:function(t,e,r){"use strict";r(188)},265:function(t,e,r){var l=r(35)(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap);"]),l.push([t.i,'body,html{scroll-behavior:smooth;overflow:auto}.font{font-family:"Architects Daughter",cursive!important}',""]),t.exports=l},266:function(t,e,r){"use strict";r(189)},267:function(t,e,r){var l=r(35)(!1);l.push([t.i,".wiggly{-webkit-animation:squiggly-anim .34s linear infinite;animation:squiggly-anim .34s linear infinite}@-webkit-keyframes squiggly-anim{0%{filter:url(#squiggly-0)}25%{filter:url(#squiggly-1)}50%{filter:url(#squiggly-2)}75%{filter:url(#squiggly-3)}to{filter:url(#squiggly-4)}}@keyframes squiggly-anim{0%{filter:url(#squiggly-0)}25%{filter:url(#squiggly-1)}50%{filter:url(#squiggly-2)}75%{filter:url(#squiggly-3)}to{filter:url(#squiggly-4)}}",""]),t.exports=l},268:function(t,e,r){"use strict";r.r(e);r(266);var l=r(49),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticStyle:{display:"none"},attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[r("defs",[r("filter",{attrs:{id:"squiggly-0"}},[r("feTurbulence",{attrs:{id:"turbulence",baseFrequency:"0.02",numOctaves:"1",result:"noise",seed:"0"}}),t._v(" "),r("feDisplacementMap",{attrs:{id:"displacement",in:"SourceGraphic",in2:"noise",scale:"6"}})],1),t._v(" "),r("filter",{attrs:{id:"squiggly-1"}},[r("feTurbulence",{attrs:{id:"turbulence",baseFrequency:"0.02",numOctaves:"1",result:"noise",seed:"1"}}),t._v(" "),r("feDisplacementMap",{attrs:{in:"SourceGraphic",in2:"noise",scale:"8"}})],1),t._v(" "),r("filter",{attrs:{id:"squiggly-2"}},[r("feTurbulence",{attrs:{id:"turbulence",baseFrequency:"0.02",numOctaves:"1",result:"noise",seed:"2"}}),t._v(" "),r("feDisplacementMap",{attrs:{in:"SourceGraphic",in2:"noise",scale:"6"}})],1),t._v(" "),r("filter",{attrs:{id:"squiggly-3"}},[r("feTurbulence",{attrs:{id:"turbulence",baseFrequency:"0.02",numOctaves:"1",result:"noise",seed:"3"}}),t._v(" "),r("feDisplacementMap",{attrs:{in:"SourceGraphic",in2:"noise",scale:"8"}})],1),t._v(" "),r("filter",{attrs:{id:"squiggly-4"}},[r("feTurbulence",{attrs:{id:"turbulence",baseFrequency:"0.02",numOctaves:"1",result:"noise",seed:"4"}}),t._v(" "),r("feDisplacementMap",{attrs:{in:"SourceGraphic",in2:"noise",scale:"6"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},55:function(t,e,r){"use strict";var l={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(r(234),r(49)),o=r(77),c=r.n(o),f=r(273),v=r(275),d=r(274),y=r(276),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("v-layout",{attrs:{"fill-height":"",column:"","align-center":"","justify-center":""}},[r("div",{staticClass:"d-flex align-center justify-center mb-3"},[r("span",{staticClass:"text-h1 wiggly"},[t._v("404")]),t._v(" "),r("div",{staticClass:"d-flex align-end fill-height"},[r("span",{staticClass:"text-h4 wiggly"},[t._v("Not"),r("br"),t._v("found.")])])]),t._v(" "),r("div",{staticClass:"d-flex justify-center"},[r("v-btn",{staticClass:"wiggly",attrs:{text:"",to:"/"}},[t._v("Home")]),t._v(" "),r("v-btn",{staticClass:"wiggly",attrs:{text:"",to:"/work"}},[t._v("Work")]),t._v(" "),r("v-btn",{staticClass:"wiggly",attrs:{text:"",to:"/about"}},[t._v("About")])],1)])],1)],1)}),[],!1,null,"915e8a7e",null);e.a=component.exports;c()(component,{VApp:f.a,VBtn:v.a,VLayout:d.a,VMain:y.a})}},[[205,9,2,10]]]);