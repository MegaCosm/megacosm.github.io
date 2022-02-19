(window.webpackJsonpMegacosmDoc=window.webpackJsonpMegacosmDoc||[]).push([[26],{700:function(m,n,e){"use strict";e.r(n);var t=e(0),o=e.n(t),t=e(499),r=e(501),a=e(54),c=e(701),c=e.n(c),i=Object(a.a)(c.a),s=[{name:"1-awesome",title:Object(a.a)("Base \n Create a new compoennt with url, then use it anywhere."),component:e(702).default,rawText:e(703)},{name:"2-iconfont",title:Object(a.a)('Customize Font \n You can customize an icon in <a target="_blank" href="http://iconfont.cn">iconfont.cn</a> or <a target="_blank" href="http://fontastic.me/">fontastic.me</a>, support font and svg.'),component:e(704).default,rawText:e(705)},{name:"3-size",title:Object(a.a)("Style \n Set fontSize and type to change icon size and color."),component:e(706).default,rawText:e(707)}];n.default=Object(t.a)(function(n){return o.a.createElement(r.b,Object.assign({},n,{codes:void 0,source:i,examples:s}))})},701:function(n,e){n.exports="# Icon\r\nIcon is  a function to generate a new ReactClass with css path.\r\n<br />\r\nMultiple icon components with different names can be created in a project.\r\n\r\n<example />\r\n\r\n## API\r\n\r\n### Icon *function(url, fontFamily, prefix):ReactClass*\r\nFunction, returns a new component. A project can create more than one, but fontFamily must be the unique.\r\n\r\n| Property | Type | Default | Description |\r\n| --- | --- | --- | --- |\r\n| url | string |  | The address of css or js file of the icon. If it has been introduced in the link/script tag, it can be empty. |\r\n| fontFamily | string | 'iconfont' | The font-family needs to be the same as the font-family in the introduced CSS/JS file. |\r\n| prefix | string | 'icon' | The prefix of the class |\r\n\r\n### IconComponent *Component created by the Icon function*\r\n| Property | Type | Default | Description |\r\n| --- | --- | --- | --- |\r\n| children | string | - | The unicode code of the icon. |\r\n| name | string | '' | The name of the icon class (without prefix). |\r\n| fontSize | string | - | The size of the icon, same as the style.fontSize. |\r\n| style | object | - | Extend style. |\r\n| type | string | 'default' | Built-in color, options: \\['default', 'primary', 'secondary', 'success', 'info', 'warning', 'danger'] |\r\n"},702:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),o=t(146),a=Object(o.a)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa"),c={marginRight:20};e.default=function(){return r.a.createElement("div",null,r.a.createElement(a,{style:c,name:"home"}),r.a.createElement(a,{style:c,name:"info",type:"info"}),r.a.createElement(a,{style:c,name:"check",type:"success"}),r.a.createElement(a,{style:c,name:"close",type:"danger"}))}},703:function(n,e){n.exports='/**\r\n * - Base\r\n *    -- Create a new compoennt with url, then use it anywhere.\r\n */\r\nimport React from \'react\'\r\nimport { Icon } from \'megacosm\'\r\n\r\nconst url = \'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\'\r\nconst FontAwesome = Icon(url, \'FontAwesome\', \'fa\')\r\nconst margin = { marginRight: 20 }\r\n\r\nexport default function() {\r\n  return (\r\n    <div>\r\n      <FontAwesome style={margin} name="home" />\r\n      <FontAwesome style={margin} name="info" type="info" />\r\n      <FontAwesome style={margin} name="check" type="success" />\r\n      <FontAwesome style={margin} name="close" type="danger" />\r\n    </div>\r\n  )\r\n}\r\n'},704:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),o=t(146),a=Object(o.a)("//at.alicdn.com/t/font_550076_uyvw3e8ul8w4gqfr.css"),c=Object(o.a)("//at.alicdn.com/t/font_1725436_8gldxw9bjlu.js"),i={marginRight:20};e.default=function(){return r.a.createElement("div",null,r.a.createElement(a,{style:i},""),r.a.createElement(a,{style:i,name:"info",type:"info"}),r.a.createElement(c,{style:i,name:"qingtian"}),r.a.createElement(c,{style:i,name:"wanduoyun"}))}},705:function(n,e){n.exports='/**\r\n * - Customize Font\r\n *    -- You can customize an icon in <a target="_blank" href="http://iconfont.cn">iconfont.cn</a> or <a target="_blank" href="http://fontastic.me/">fontastic.me</a>, support font and svg.\r\n */\r\nimport React from \'react\'\r\nimport { Icon } from \'megacosm\'\r\n\r\nconst FontIconfont = Icon(\'//at.alicdn.com/t/font_550076_uyvw3e8ul8w4gqfr.css\')\r\nconst SVGIconfont = Icon(\'//at.alicdn.com/t/font_1725436_8gldxw9bjlu.js\')\r\nconst margin = { marginRight: 20 }\r\n\r\nexport default function() {\r\n  return (\r\n    <div>\r\n      <FontIconfont style={margin}>&#xe64e;</FontIconfont>\r\n      <FontIconfont style={margin} name="info" type="info" />\r\n      <SVGIconfont style={margin} name="qingtian" />\r\n      <SVGIconfont style={margin} name="wanduoyun" />\r\n    </div>\r\n  )\r\n}\r\n'},706:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),a=t(178),c={marginRight:20};e.default=function(){return r.a.createElement("div",null,r.a.createElement(a.a,{style:c,name:"home"}),r.a.createElement(a.a,{style:c,name:"home",type:"info",fontSize:18}),r.a.createElement(a.a,{style:c,name:"home",type:"success",fontSize:"24px"}),r.a.createElement(a.a,{style:{fontSize:30,color:"#f5222d"},name:"home"}))}},707:function(n,e){n.exports='/**\r\n * - Style\r\n *    -- Set fontSize and type to change icon size and color.\r\n */\r\nimport React from \'react\'\r\nimport FontAwesome from \'./FontAwesome\'\r\n\r\nconst margin = { marginRight: 20 }\r\n\r\nexport default function() {\r\n  return (\r\n    <div>\r\n      <FontAwesome style={margin} name="home" />\r\n      <FontAwesome style={margin} name="home" type="info" fontSize={18} />\r\n      <FontAwesome style={margin} name="home" type="success" fontSize="24px" />\r\n      <FontAwesome style={{ fontSize: 30, color: \'#f5222d\' }} name="home" />\r\n    </div>\r\n  )\r\n}\r\n'}}]);