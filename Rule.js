(window.webpackJsonpMegacosmDoc=window.webpackJsonpMegacosmDoc||[]).push([[38],{519:function(e,r,n){"use strict";var t=n(3),o=n(4),s=window.console,l=function(){function e(){Object(t.a)(this,e),this.logs={default:[]},this.current=this.logs.default}return Object(o.a)(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t=r.map(function(e){return"".concat(JSON.stringify(e,function(e,r){return"function"==typeof r?"fn#fn".concat(r.toString(),"fn#fn"):r},2))});this.current.push(t)}}]),e}();r.a={start:function(){window.console=new l},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=s,e}}},930:function(c,e,r){"use strict";r.r(e);var n=r(0),t=r.n(n),n=r(499),o=r(501),s=r(519),l=r(54),a=r(931),a=r.n(a),i=Object(l.a)(a.a),u=[{name:"locale",title:Object(l.a)(""),component:r(932).default,rawText:r(933)}],a=(s.a.start(),s.a.setType("custom"),r(934),s.a.setType("max"),r(935),s.a.setType("min"),r(936),s.a.setType("range"),r(937),s.a.setType("regExp"),r(938),s.a.setType("required"),r(939),s.a.setType("type"),r(940),s.a.end()),m={custom:{text:r(941),log:a.custom},max:{text:r(942),log:a.max},min:{text:r(943),log:a.min},range:{text:r(944),log:a.range},regExp:{text:r(945),log:a.regExp},required:{text:r(946),log:a.required},type:{text:r(947),log:a.type}};e.default=Object(n.a)(function(e){return t.a.createElement(o.b,Object.assign({},e,{codes:m,source:i,examples:u}))})},931:function(e,r){e.exports="# Rule\r\n\r\n<br />\r\n\r\n<br />\r\n\r\nThe Form implements a set of data validation. That is configured through the rules property on the input component like 'Input, Select, Checkbox, ...'\r\n\r\n```\r\n<Input rules={[...rule]}>\r\n```\r\n\r\nrules is an array, each containing a rule with the following format.\r\n\r\n- Function:Completely controlled by the caller. you can theoretically do all the checking.\r\n\r\n  ```\r\n  /**\r\n   value - Current component value\r\n   formdata - All values in the form\r\n   callback - The result of verification\r\n   */\r\n  (value, formdata, callback) => {\r\n    if (/\\d+/.test(value)) callback(true)\r\n    else callback(new Error('Password at least has one numeral.'))\r\n  }\r\n  // return a Promise，do not call callback\r\n  (value) => new Promise((resolve, reject) => {\r\n    if (/\\d+/.test(value)) resolve(true)\r\n    else reject(new Error('Password at least has one numeral.'))\r\n  }\r\n  ```\r\n\r\n- Required:Determine whether the required attribute is true or not. false is not required when it is not required.\r\n\r\n  ```\r\n  { required: true, message: 'Please enter password.' }\r\n  ```\r\n\r\n- Length:Judge by the min or max property.\r\n\r\n  ```\r\n  { min: 7, message: 'Password must be at least 7 characters.' }\r\n  ```\r\n\r\n- RegExp: Judge by the RegExp. It can be a RegExp object or a string.\r\n\r\n  ```\r\n  { regExp: /[a-z]+/i, message: 'Password at least has one letter.' }\r\n  ```\r\n\r\n- Type: Some common type validation are built in.\r\n  ```\r\n  { type: 'email', message: 'Please enter a valid email.' }\r\n  ```\r\n\r\n| Property | Type             | Description                                                                                                                                                                                            |\r\n| -------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\r\n| required | bool             | whether to be required                                                                                                                                                                                 |\r\n| min      | number           | The minimum value. When type is 'number', validate the value. Otherwise, validate the value.length.                                                                                                    |\r\n| max      | number           | The maximum value. When type is 'number', validate the value. Otherwise, validate the value.length.                                                                                                    |\r\n| regExp   | string \\| RegExp | regular expression                                                                                                                                                                                     |\r\n| type     | string           | options: \\[ 'email', 'json', 'url', 'hex', 'number' ]. You can customize the regExp validation if it does not support it.                                                                              |\r\n| message  | string           | The error message. You can use the '{key}' symbol to format. Key is a property of the current rule, such as {min: 20, message: 'minimum value is {min}'}, which is formatted as 'minimum value is 20'. |\r\n\r\n## Rule\r\n\r\nRule is a function return an object contains a set of validate function.\r\n\r\n```\r\nimport { Rule } from 'megacosm'\r\n\r\nconst rule = Rule()\r\n\r\n<Input rules={[rule.required, rule.min(1)]}>\r\n```\r\n\r\n## Constructor\r\n\r\n```\r\nconst args = { key: { func, message }, ... }\r\nconst rule = Rule(args)\r\n```\r\n\r\n### Arguments\r\n\r\nThe args is optional.\r\nEach argument is an object, key is the validate function name. Each value has 2 properties, 'func' and 'message'.\r\n\r\n#### - func _function(value, formData, callback, props)_\r\n\r\nvalidate function\r\n\r\n```\r\nvalue: current field's value.\r\nformData: all form data.\r\ncallback: the callback function.\r\nprops: the props of current field.\r\n```\r\n\r\nexample:\r\n\r\n```\r\nconst rule = Rule({\r\n  customRequired: {\r\n    func: (value, formData, callback, props) => {\r\n      callback(!!value ? true : new Error(props.title + ' is required.'))\r\n    }\r\n  }\r\n})\r\n```\r\n\r\n#### - message _string || function(props)_\r\n\r\nBuilt-in rules use default error text, if you want change the default text, set message to overwrite.\r\n\r\n```\r\nif message type is string, return message.\r\nif message type is function，retrun message(props)，props is field's props.\r\n```\r\n\r\nexample：\r\n\r\n```\r\nconst rule = Rule({\r\n  required: {\r\n    message: (props) => `The field ${props.title} is required.`\r\n  },\r\n  email: {\r\n    message: 'Email is invalid.'\r\n  }\r\n})\r\n```\r\n\r\nMultiple arguments will be merged\r\n\r\n```\r\nconst funcs = {\r\n  customRequired: {\r\n    func: (value, formData, callback, props) => {\r\n      callback(!!value ? true : new Error(props.title + ' is required.'))\r\n    }\r\n  }\r\n}\r\nconst messages = {\r\n  customRequired: {\r\n    message: 'The field is required.'\r\n  }\r\n}\r\nconst rule = Rule(funcs, messages)\r\n```\r\n\r\nequivalent of\r\n\r\n```\r\nconst rule = Rule({\r\n  customRequired: {\r\n    func: (value, formData, callback, props) => {\r\n      callback(!!value ? true : new Error(props.title + ' is required.'))\r\n    },\r\n    message: 'The field is required.'\r\n  }\r\n})\r\n```\r\n\r\n### Return\r\n\r\n```\r\nconst rule = Rule()\r\n\r\n<Input rules={[rule.required(), rule.min(1)]}>\r\n// if the function has no argument, you can use it with out parentheses.\r\n<Input rules={[rule.required, rule.min(1)]}>\r\n```\r\n\r\n## Custom Validator\r\n\r\n<code name=\"custom\" />\r\n\r\n## Built-in Validator\r\n\r\n### required _function(message)_\r\n\r\n#### message|string: optional\r\n\r\n#### return: object\r\n\r\n<code name=\"required\" />\r\n\r\n### min _function(len, message)_\r\n\r\nMinimum check, automatically determines whether the check type is a string, number, or option base on the field type.\r\n\r\n#### len|integer: required\r\n\r\n#### message|string: optional\r\n\r\n#### retrun: object\r\n\r\n<code name=\"min\" />\r\n\r\n### max _function(len, message)_\r\n\r\nMax check, automatically determines whether the check type is a string, number, or option base on the field type.\r\n\r\n#### len|integer: required\r\n\r\n#### message|string: optional\r\n\r\n#### return: object\r\n\r\n<code name=\"max\" />\r\n\r\n### range _function(min, max, message)_\r\n\r\nRange check, automatically determines whether the check type is a string, number, or option base on the field type.\r\n\r\n#### min|integer: required\r\n\r\n#### max|integer: required\r\n\r\n#### message|string: optional\r\n\r\n#### return: array\r\n\r\n<code name=\"range\" />\r\n\r\n### type _\\[type](message)_\r\n\r\nType check, one of \\['email', 'integer', 'number', 'url', 'json', 'hex', 'rgb', 'ipv4']\r\n\r\n#### message|string: optional\r\n\r\n#### return: object\r\n\r\n<code name=\"type\" />\r\n\r\n### regExp _regExp(reg, message)_\r\n\r\nRegular expression check\r\n\r\n#### reg|RegExp|string: required\r\n\r\n#### message|string: optional\r\n\r\n#### return: object\r\n\r\n<code name=\"regExp\" />\r\n\r\n## Built-in Text\r\n\r\nThe current built-in validation text as follows, which can be replaced by the setLocale function\r\n\r\n```\r\nimport { setLocale } from 'megacosm'\r\nsetLocale({\r\n  rules: {\r\n    required: ...\r\n    type: ...\r\n  }\r\n})\r\n```\r\n\r\n<example name=\"locale\" />\r\n"},932:function(e,r,n){"use strict";n.r(r);var t=n(0),o=n.n(t),s=n(36);r.default=function(){return o.a.createElement("pre",null,JSON.stringify(Object(s.a)("rules"),null,2))}},933:function(e,r){e.exports="import React from 'react'\r\nimport { getLocale } from 'megacosm/locale'\r\n\r\nexport default function() {\r\n  return <pre>{JSON.stringify(getLocale('rules'), null, 2)}</pre>\r\n}\r\n"},934:function(e,r,n){"use strict";n.r(r);r=n(137),n=Object(r.b)({isExisted:{func:function(e,r,n,t){r.list.includes(e)?n(new Error(t.message.replace("{title}",t.title))):n(!0)},message:"{title} is existed."}});console.log(n.isExisted())},935:function(e,r,n){"use strict";n.r(r);r=n(137),n=Object(r.b)();console.log(n.max(100)),console.log(n.max(100,"Nubmer must less than 100."))},936:function(e,r,n){"use strict";n.r(r);r=n(137),n=Object(r.b)();console.log(n.min(1)),console.log(n.min(1,"At least select one option."))},937:function(e,r,n){"use strict";n.r(r);r=n(137),n=Object(r.b)();console.log(n.range(1,100)),console.log(n.range(1,100,"Nubmer must between 1 - 100."))},938:function(e,r,n){"use strict";n.r(r);r=n(137),n=Object(r.b)();console.log(n.regExp("^[\\d\\s ().-]+$")),console.log(n.regExp("^[\\d\\s ().-]+$","Please enter a valid tel."))},939:function(e,r,n){"use strict";n.r(r);r=n(137),n=Object(r.b)(),console.log(n.required("something wrong.")),n=Object(r.b)({required:{message:"init message."}});console.log(n.required())},940:function(e,r,n){"use strict";n.r(r);r=n(137),n=Object(r.b)();console.log(n.email()),console.log(n.email("Email is invalid.")),console.log(n.integer("Please enter a valid age.")),console.log(n.number("Please enter a valid price.")),console.log(n.url("The url is not valid.")),console.log(n.hex("The color is not valid."))},941:function(e,r){e.exports="import { Rule } from 'megacosm'\r\n\r\nconst rule = Rule({\r\n  isExisted: {\r\n    func: (value, formData, callback, props) => {\r\n      if (formData.list.includes(value)) {\r\n        callback(new Error(props.message.replace('{title}', props.title)))\r\n      } else {\r\n        callback(true)\r\n      }\r\n    },\r\n    message: '{title} is existed.',\r\n  },\r\n})\r\nconsole.log(rule.isExisted())\r\n"},942:function(e,r){e.exports="import { Rule } from 'megacosm'\r\n\r\nconst rule = Rule()\r\nconsole.log(rule.max(100))\r\nconsole.log(rule.max(100, 'Nubmer must less than 100.'))\r\n"},943:function(e,r){e.exports="import { Rule } from 'megacosm'\r\n\r\nconst rule = Rule()\r\nconsole.log(rule.min(1))\r\nconsole.log(rule.min(1, 'At least select one option.'))\r\n"},944:function(e,r){e.exports="import { Rule } from 'megacosm'\r\n\r\nconst rule = Rule()\r\nconsole.log(rule.range(1, 100))\r\nconsole.log(rule.range(1, 100, 'Nubmer must between 1 - 100.'))\r\n"},945:function(e,r){e.exports="import { Rule } from 'megacosm'\r\n\r\nconst rule = Rule()\r\nconsole.log(rule.regExp('^[\\\\d\\\\s ().-]+$'))\r\nconsole.log(rule.regExp('^[\\\\d\\\\s ().-]+$', 'Please enter a valid tel.'))\r\n"},946:function(e,r){e.exports="import { Rule } from 'megacosm'\r\n\r\nconst rule = Rule()\r\nconsole.log(rule.required('something wrong.'))\r\n\r\nconst rule2 = Rule({\r\n  required: {\r\n    message: 'init message.',\r\n  },\r\n})\r\nconsole.log(rule2.required())\r\n"},947:function(e,r){e.exports="import { Rule } from 'megacosm'\r\n\r\nconst rule = Rule()\r\nconsole.log(rule.email())\r\nconsole.log(rule.email('Email is invalid.'))\r\nconsole.log(rule.integer('Please enter a valid age.'))\r\nconsole.log(rule.number('Please enter a valid price.'))\r\nconsole.log(rule.url('The url is not valid.'))\r\nconsole.log(rule.hex('The color is not valid.'))\r\n"}}]);