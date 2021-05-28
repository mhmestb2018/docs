(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{159:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(1),a=n(9),o=(n(0),n(264)),c={id:"SchemaTransformer",title:null,sidebar_label:"Transformer Schema"},i={id:"SchemaTransformer",title:"SchemaTransformer",description:"```",source:"@site/docs/UCI Schema - Transformer.md",permalink:"/docs/docs/SchemaTransformer",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/UCI Schema - Transformer.md",sidebar_label:"Transformer Schema",sidebar:"uciSidebar",previous:{title:"SchemaAdapter",permalink:"/docs/docs/SchemaAdapter"},next:{title:"SchemaBot",permalink:"/docs/docs/SchemaBot"}},s=[],u={rightToc:s};function l(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),'{\n  "name": "Rasa",\n  "tags": ["generic"],\n  "type": "rest-service",\n  "config": {\n    "url": "https://callme.maybe.com", //POST request with param xMessage with xMessage XML will be sent to this URL; The response should be an xMessage XMl;\n    "cadence": {\n      "concurrent": true,\n      "pagination": true,\n      "perPage": 100,\n      "retries": 0,\n      "retries-interval": 10,\n      "timeout": 60\n    },\n    "validation":{\n      "in": "xMessage-XML-In",\n      "out": "xMessage-XML-Out"\n    },\n    "credentials": {\n      "variable": "tranformerHeadersRasa", // Authorization Header\n      "vault": "diksha"\n    }\n  }\n}\n')))}l.isMDXComponent=!0},264:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return d}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i({},r,{},e)),n},p=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=Object(t.forwardRef)((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=t,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?a.a.createElement(d,i({ref:r},u,{components:n})):a.a.createElement(d,i({ref:r},u))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);