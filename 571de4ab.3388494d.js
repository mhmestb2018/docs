(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{184:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(9),o=(t(0),t(264)),i={id:"SchemaUserSegment",title:null,sidebar_label:"User Segment Schema"},c={id:"SchemaUserSegment",title:"SchemaUserSegment",description:"```",source:"@site/docs/UCI Schema - UserSegment.md",permalink:"/docs/docs/SchemaUserSegment",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/UCI Schema - UserSegment.md",sidebar_label:"User Segment Schema",sidebar:"uciSidebar",previous:{title:"SchemaBot",permalink:"/docs/docs/SchemaBot"},next:{title:"SchemaConversationLogic",permalink:"/docs/docs/SchemaConversationLogic"}},l=[],u={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n  "all": {\n    "type": "gql",\n    "config": {\n      "gql": "query getUsers {users: getUsersByQuery(queryString: \\"id: 2c5816ea-63ff-483b-812b-1f250ebf50f3\\") {id full_name data: data_json {accountName phone roleData { block designation district }}}}",\n      "cadence": {\n        "concurrent": true,\n        "pageParam": "page", // Additional variable name to get paginated results.\n        "pagination": true,\n        "perPage": 100,\n        "retries": 0,\n        "retries-interval": 10,\n        "timeout": 60\n      },\n      "credentials": {\n        "variable": "gqlServerOdisha",\n        "vault": "diksha"\n      }\n    }\n  },\n  "byID": {\n    "type": "fusionAuth",\n    "config": {\n      "cadence": {\n        "concurrent": true,\n        "pagination": true,\n        "perPage": 100,\n        "retries": 0,\n        "retries-interval": 10,\n        "timeout": 60\n      },\n      "credentials": {\n        "variable": "gqlServerOdisha", // Authorization Header\n        "vault": "diksha"\n      }\n    }\n  },\n  "byPhone": {\n    "type": "oauth2",\n    "config": {\n      "claims": ["email", "name", "fullName"],\n      "cadence": {\n        "concurrent": true,\n        "pagination": true,\n        "perPage": 100,\n        "retries": 0,\n        "retries-interval": 10,\n        "timeout": 60\n      },\n      "credentials": {\n        "clientID": "vaultKey1",\n        "clientSecret": "vaultKey2",\n        "vault": "diksha"\n      }\n    }\n  }\n}\n\n')))}s.isMDXComponent=!0},264:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.a.createElement(f,c({ref:n},u,{components:t})):a.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);