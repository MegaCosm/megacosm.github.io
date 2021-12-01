(window.webpackJsonpMegacosmDoc=window.webpackJsonpMegacosmDoc||[]).push([[35],{308:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(17),o=a(4),c=a(5),s=a(6),l=a(7),m=a(15),u=a.n(m),n=a(19),f=a(75),p=a(30),m=a(28),h=a(1),d=a(73),n=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(o.a)(this,a),(e=t.call(this,e)).state={hover:0,highlight:-1},e}return Object(c.a)(a,[{key:"getValue",value:function(){var e=this.state.hover;return 0===e?this.props.value:e}},{key:"getStyle",value:function(){var e=this.props.size;if(e){e=Math.max(12,parseFloat(e));return{width:e,fontSize:e}}}},{key:"getScale",value:function(){var e=this.props.size;if(!(12<=e))return{transform:"scale(".concat(e/12,")")}}},{key:"getIcon",value:function(e,t,a){var n=this.props,r=n.repeat,o=n.allowHalf,c=this.getValue(),n=c-t,s=Array.isArray(e)?(s=e[r?c-1:t])||e[e.length-1]:e;if(n<=0||1<=n||a)return s;n={width:"".concat(100*n,"%"),display:"block",overflow:"hidden",fontSize:"inherit"};return i.a.createElement("span",{style:n,className:o&&Object(h.B)("allow-half")},s)}},{key:"handleClick",value:function(){var e=this,t=arguments.length<=0?void 0:arguments[0],a=arguments.length<=1?void 0:arguments[1],n=this.props,r=n.clearable;n.allowHalf&&Object(p.getParent)(a.target,".".concat(Object(h.B)("allow-half")))&&(t-=.5),r&&this.props.value===t&&this.setState({hover:t=0}),this.props.onChange(t),this.setState({highlight:t}),this.highlightTimer&&clearTimeout(this.highlightTimer),this.highlightTimer=setTimeout(function(){e.setState({highlight:-1})},300)}},{key:"handleHover",value:function(e){this.setState({hover:e})}},{key:"handleMove",value:function(e,t){var a=t.target.getBoundingClientRect(),n=a.x,a=a.width;this.setState({hover:e-(n+a/2>t.clientX?.5:0)})}},{key:"renderBackground",value:function(){var t=this,e=this.props,a=e.background,n=e.max,r=e.disabled,o=e.allowHalf,c=this.getStyle(),s=this.getValue();return i.a.createElement("div",{className:Object(h.B)("background")},Object(f.range)(n).map(function(e){return i.a.createElement("span",{key:e,style:Object.assign({visibility:!o&&!r&&e<s?"hidden":"visible"},c)},t.getIcon(a,e,!0))}))}},{key:"renderRate",value:function(){var t=this,e=this.props,a=e.front,n=e.max,r=e.text,o=e.allowHalf,c=this.state.highlight,s=this.getValue(),l=this.getStyle();return i.a.createElement("div",{className:Object(h.B)("front")},Object(f.range)(n).map(function(e){return i.a.createElement("span",{key:e,onClick:t.handleClick.bind(t,e+1),onMouseLeave:t.handleHover.bind(t,0),onMouseMove:o?t.handleMove.bind(t,e+1):void 0,onMouseEnter:o?void 0:t.handleHover.bind(t,e+1),style:l},e<s?t.getIcon(a,e):i.a.createElement("span",null," "),c===e+1&&i.a.createElement("i",{className:Object(h.B)("highlight")},t.getIcon(a,e)))}),i.a.createElement("span",{className:Object(h.B)("text")},r[Math.ceil(s)-1]))}},{key:"renderStatic",value:function(){var t=this,e=this.props,a=e.front,n=e.value,r=e.max,e=e.text,o=this.getStyle();return i.a.createElement("div",{className:Object(h.B)("static")},Object(f.range)(r).map(function(e){return i.a.createElement("span",{key:e,style:o},e<n&&t.getIcon(a,e))}),i.a.createElement("span",{className:Object(h.B)("text")},e[Math.ceil(n)-1]))}},{key:"render",value:function(){var e=u()(Object(h.B)("_"),this.props.className),t=Object.assign({},this.props.style,this.getScale());return i.a.createElement("div",Object.assign({className:e,style:t},Object(d.a)(this.props)),this.renderBackground(),this.props.disabled?this.renderStatic():this.renderRate())}}]),a}(n.b);n.defaultProps=Object(r.a)(Object(r.a)({},m.a),{},{repeat:!0,max:5,size:20,text:[],value:0});var b=n,g=a(46);t.a=function(t,a){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=Object(g.a)(function(e){return i.a.createElement(b,Object.assign({},n,e,{background:t,front:a||t}))});return e.displayName="MegacosmRate",e}},893:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(486),c=a(487),s=a(45),n=a(894),n=a.n(n),l=Object(s.a)(n.a),i=[{name:"01-base",title:Object(s.a)("Base \n Rate is a function that creates a new custom Rate component that specifies an icon or text."),component:a(895).default,rawText:a(896)},{name:"01-half",title:Object(s.a)("Semi selection \n Rate whether to allow semi selection."),component:a(897).default,rawText:a(898)},{name:"02-color",title:Object(s.a)("Icon color \n Set the color when the component is created."),component:a(899).default,rawText:a(900)},{name:"04-max",title:Object(s.a)("Max \n Set the maximum value of the option through the max attribute. The default value is 5."),component:a(901).default,rawText:a(902)},{name:"05-size",title:Object(s.a)("Size \n Set the size through the size property."),component:a(903).default,rawText:a(904)},{name:"06-text",title:Object(s.a)("Text \n Set text property to append text to each item."),component:a(905).default,rawText:a(906)},{name:"07-disabled",title:Object(s.a)("Disabled \n Set disabled to true make it be read-only. When disabled, value can be passed in decimals."),component:a(907).default,rawText:a(908)},{name:"08-face",title:Object(s.a)("Array \n You can use arrays to display items with different scores when creating components. In this case, values with decimals are not supported."),component:a(909).default,rawText:a(910)},{name:"09-array",title:Object(s.a)("No Repeat \n By default, the item corresponding to the current value is displayed repeatedly. Set repeat property to false to display different item by value."),component:a(911).default,rawText:a(912)},{name:"10-clearable",title:Object(s.a)("clear \n Set the clearable to clear value when click again."),component:a(913).default,rawText:a(914)}];t.default=Object(o.a)(function(e){return r.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:l,examples:i}))})},894:function(e,t){e.exports="# Rate\r\n\r\n<example />\r\n\r\n## API\r\n\r\n#### RateFunction(background, front):ReactClass\r\n\r\n| Property | Type | Default | Description |\r\n| --- | --- | --- | --- |\r\n| background | ReactElement \\| string \\| array | required | Background item for rate |\r\n| front | ReactElement \\| string \\| array | background | Front item. If it is not set, use background item |\r\n\r\n### Rate\r\n\r\n| Property | Type | Default | Description |\r\n| --- | --- | --- | --- |\r\n| defaultValue | number | | Default value |\r\n| disabled | bool | false | read-only |\r\n| max | number | 5 | The maximum value of the option, integer |\r\n| onChange | function(d) | | The callback function when the value is changing |\r\n| repeat | bool | true | When repeat is true, display item is a copy of the item corresponding to the current value |\r\n| size | number \\| string | 20 | the size of the icon |\r\n| value | number | 0 | |\r\n| clearable | bool | false | whether to allow clear when click again |\r\n| allowHalf | bool | false | Whether to allow semi selection |"},895:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),n=a(308),a=a(156),a=r.a.createElement(a.a,{name:"star"}),o=Object(n.a)(a,a);t.default=function(){return r.a.createElement(o,null)}},896:function(e,t){e.exports="/**\r\n * - Base\r\n *    -- Rate is a function that creates a new custom Rate component that specifies an icon or text.\r\n */\r\nimport React from 'react'\r\nimport { Rate } from 'megacosm'\r\nimport FontAwesome from '../Icon/FontAwesome'\r\n\r\nconst star = <FontAwesome name=\"star\" />\r\nconst StarRate = Rate(star, star)\r\n\r\nexport default function() {\r\n  return <StarRate />\r\n}\r\n"},897:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),n=a(308),a=a(156),a=r.a.createElement(a.a,{name:"star"}),o=Object(n.a)(a,a);t.default=function(){return r.a.createElement(o,{size:24,allowHalf:!0})}},898:function(e,t){e.exports="/**\r\n * - Semi selection\r\n *    -- Rate whether to allow semi selection.\r\n */\r\nimport React from 'react'\r\nimport { Rate } from 'megacosm'\r\nimport FontAwesome from '../Icon/FontAwesome'\r\n\r\nconst star = <FontAwesome name=\"star\" />\r\nconst StarRate = Rate(star, star)\r\n\r\nexport default function() {\r\n  return <StarRate size={24} allowHalf />\r\n}\r\n"},899:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(308),n=a(156),a=r.a.createElement(n.a,{name:"heart-o"}),n=r.a.createElement(n.a,{name:"heart",style:{color:"#ff4d4f"}}),c=Object(o.a)(a,n);t.default=function(){return r.a.createElement(c,{defaultValue:2})}},900:function(e,t){e.exports="/**\r\n * - Icon color\r\n *    -- Set the color when the component is created.\r\n */\r\nimport React from 'react'\r\nimport { Rate } from 'megacosm'\r\nimport FontAwesome from '../Icon/FontAwesome'\r\n\r\nconst heartBg = <FontAwesome name=\"heart-o\" />\r\nconst heart = <FontAwesome name=\"heart\" style={{ color: '#ff4d4f' }} />\r\nconst HeartRate = Rate(heartBg, heart)\r\n\r\nexport default function() {\r\n  return <HeartRate defaultValue={2} />\r\n}\r\n"},901:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),n=a(308),a=a(156),a=r.a.createElement(a.a,{name:"star"}),o=Object(n.a)(a,a);t.default=function(){return r.a.createElement(o,{max:10,defaultValue:3})}},902:function(e,t){e.exports="/**\r\n * - Max\r\n *    -- Set the maximum value of the option through the max attribute. The default value is 5.\r\n */\r\nimport React from 'react'\r\nimport { Rate } from 'megacosm'\r\nimport FontAwesome from '../Icon/FontAwesome'\r\n\r\nconst star = <FontAwesome name=\"star\" />\r\nconst StarRate = Rate(star, star)\r\n\r\nexport default function() {\r\n  return <StarRate max={10} defaultValue={3} />\r\n}\r\n"},903:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),n=a(308),a=a(156),a=r.a.createElement(a.a,{name:"star"}),o=Object(n.a)(a,a);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o,{size:14}),r.a.createElement("br",null),r.a.createElement(o,{size:20}),r.a.createElement("br",null),r.a.createElement(o,{size:40}))}},904:function(e,t){e.exports="/**\r\n * - Size\r\n *    -- Set the size through the size property.\r\n */\r\nimport React from 'react'\r\nimport { Rate } from 'megacosm'\r\nimport FontAwesome from '../Icon/FontAwesome'\r\n\r\nconst star = <FontAwesome name=\"star\" />\r\nconst StarRate = Rate(star, star)\r\n\r\nexport default function() {\r\n  return (\r\n    <div>\r\n      <StarRate size={14} />\r\n      <br />\r\n      <StarRate size={20} />\r\n      <br />\r\n      <StarRate size={40} />\r\n    </div>\r\n  )\r\n}\r\n"},905:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),n=a(308),a=a(156),a=r.a.createElement(a.a,{name:"star"}),o=Object(n.a)(a,a);t.default=function(){return r.a.createElement(o,{defaultValue:4,text:["poor","fair","good","very good","excellent"]})}},906:function(e,t){e.exports="/**\r\n * - Text\r\n *    -- Set text property to append text to each item.\r\n */\r\nimport React from 'react'\r\nimport { Rate } from 'megacosm'\r\nimport FontAwesome from '../Icon/FontAwesome'\r\n\r\nconst star = <FontAwesome name=\"star\" />\r\nconst StarRate = Rate(star, star)\r\n\r\nexport default function() {\r\n  return <StarRate defaultValue={4} text={['poor', 'fair', 'good', 'very good', 'excellent']} />\r\n}\r\n"},907:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),n=a(308),a=a(156),a=r.a.createElement(a.a,{name:"star"}),o=Object(n.a)(a,a);t.default=function(){return r.a.createElement(o,{value:3.6,disabled:!0})}},908:function(e,t){e.exports="/**\r\n * - Disabled\r\n *    -- Set disabled to true make it be read-only. When disabled, value can be passed in decimals.\r\n */\r\nimport React from 'react'\r\nimport { Rate } from 'megacosm'\r\nimport FontAwesome from '../Icon/FontAwesome'\r\n\r\nconst star = <FontAwesome name=\"star\" />\r\nconst StarRate = Rate(star, star)\r\n\r\nexport default function() {\r\n  return <StarRate value={3.6} disabled />\r\n}\r\n"},909:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(152),n=a(308),a=Object(o.a)("https://at.alicdn.com/t/font_662584_hfkafvbgwurkvs4i.css","facefont"),o=r.a.createElement(a,{name:"question"}),a=[r.a.createElement(a,{name:"cry",style:{color:"#003a8c"}}),r.a.createElement(a,{name:"sad",style:{color:"#222222"}}),r.a.createElement(a,{name:"sleeping",style:{color:"#ffa940"}}),r.a.createElement(a,{name:"happy",style:{color:"#fa541c"}}),r.a.createElement(a,{name:"lol",style:{color:"#fa541c"}})],c=Object(n.a)(o,a);t.default=function(){return r.a.createElement(c,{equal:!1,size:40,defaultValue:3})}},910:function(e,t){e.exports="/**\r\n * - Array\r\n *    -- You can use arrays to display items with different scores when creating components. In this case, values with decimals are not supported.\r\n */\r\nimport React from 'react'\r\nimport { Rate, Icon } from 'megacosm'\r\n\r\nconst FaceIcon = Icon('https://at.alicdn.com/t/font_662584_hfkafvbgwurkvs4i.css', 'facefont')\r\nconst background = <FaceIcon name=\"question\" />\r\nconst front = [\r\n  <FaceIcon name=\"cry\" style={{ color: '#003a8c' }} />,\r\n  <FaceIcon name=\"sad\" style={{ color: '#222222' }} />,\r\n  <FaceIcon name=\"sleeping\" style={{ color: '#ffa940' }} />,\r\n  <FaceIcon name=\"happy\" style={{ color: '#fa541c' }} />,\r\n  <FaceIcon name=\"lol\" style={{ color: '#fa541c' }} />,\r\n]\r\nconst TextRate = Rate(background, front)\r\n\r\nexport default function() {\r\n  return <TextRate equal={false} size={40} defaultValue={3} />\r\n}\r\n"},911:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(308),n=["A","B","C","D","E"],a=n.map(function(e){return r.a.createElement("span",{style:{color:"red"}},e)}),c=Object(o.a)(n,a);t.default=function(){return r.a.createElement(c,{repeat:!1,defaultValue:2})}},912:function(e,t){e.exports="/**\r\n * - No Repeat\r\n *    -- By default, the item corresponding to the current value is displayed repeatedly. Set repeat property to false to display different item by value.\r\n */\r\nimport React from 'react'\r\nimport { Rate } from 'megacosm'\r\n\r\nconst text = ['A', 'B', 'C', 'D', 'E']\r\nconst front = text.map(t => <span style={{ color: 'red' }}>{t}</span>)\r\nconst TextRate = Rate(text, front)\r\n\r\nexport default function() {\r\n  return <TextRate repeat={false} defaultValue={2} />\r\n}\r\n"},913:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),n=a(308),a=a(156),a=r.a.createElement(a.a,{name:"star"}),o=Object(n.a)(a,a);t.default=function(){return r.a.createElement(o,{clearable:!0})}},914:function(e,t){e.exports="/**\r\n * - clear\r\n *    -- Set the clearable to clear value when click again.\r\n */\r\nimport React from 'react'\r\nimport { Rate } from 'megacosm'\r\nimport FontAwesome from '../Icon/FontAwesome'\r\n\r\nconst star = <FontAwesome name=\"star\" />\r\nconst StarRate = Rate(star, star)\r\n\r\nexport default function() {\r\n  return <StarRate clearable />\r\n}\r\n"}}]);