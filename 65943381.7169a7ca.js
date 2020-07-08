(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),o=(n(0),n(233)),i={id:"COConversations",title:"Conversations & Alerts",sidebar_label:"Overview"},c={id:"COConversations",title:"Conversations & Alerts",description:"![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)",source:"@site/docs/Component Overview Conversation.md",permalink:"/docs/docs/COConversations",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Component Overview Conversation.md",sidebar_label:"Overview"},s=[{value:"1. Introduction",id:"1-introduction",children:[]},{value:"2. Use cases",id:"2-use-cases",children:[]},{value:"3. Component Design",id:"3-component-design",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/badge/Licence-MIT-blue.svg",alt:"Licence"}))),Object(o.b)("h1",{id:"component-overview"},"Component Overview"),Object(o.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(o.b)("p",null,"On-ground data collection activities conducted by different departments of the state and central governments have been increasingly conducted using mobile devices or tablets. To facilitate this upward trend of digital first data collection methods in the government, we have envisioned a opensource based modular design for a mobile application that can be scaled and reused efficiently for different governance use cases. After working closely with different state governments we have identified and abstracted common governance use cases that are typically required for on-ground data collection activities. These use cases have informed our architectural design for creating mobile applications for data collection. "),Object(o.b)("p",null,"This documentation of the Conversations & Alerts component will give you an overview of the different use cases that inform the design of the component, how you can get started to deploy this component, how you can setup different modules within this component and additional reference information in case you want to dive deeper into the implementation of this component. "),Object(o.b)("h2",{id:"2-use-cases"},"2. Use cases"),Object(o.b)("p",null,"The following list includes a set of use cases abstracted from different on-ground state department functions."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"User can create and launch logic based conversations such as a helpline, for grievance management, for taking student assessment, share updates"),Object(o.b)("li",{parentName:"ol"},"User can send conversations using multiple channels such as WhatsApp, SMS, Email, IVRS (more can be added by the user such as Telegram, Slack etc)"),Object(o.b)("li",{parentName:"ol"},"User can setup additional computations on these conversations such as auto generation of PDFs, email with data summaries (more can be added by the user)"),Object(o.b)("li",{parentName:"ol"},"User can auto send conversations using pre-configured triggers on databases")),Object(o.b)("h2",{id:"3-component-design"},"3. Component Design"),Object(o.b)("p",null,"The conversaton component is developed using ",Object(o.b)("strong",{parentName:"p"},"multi-modular architecture")," with ",Object(o.b)("strong",{parentName:"p"},"independently functioning modules"),". "),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://samagra-development.github.io/docs/img/component1v2.png",alt:null}))),Object(o.b)("p",null,"The following table provides an overview of the different modules within the Conversations & Alerts component, the opensource libraries used for each."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Module Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Conversation Channel Adapters")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1. Integrate and setup data collection tool ",Object(o.b)("br",null),"2. Manage form access and submissions.",Object(o.b)("br",null),"3. View form submissions.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"OpenSource Libraries used"),": ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/getodk/collect"}),"ODK Collect"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Conversation Logic Manner")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User can view custom designed screens at various points in the user flows such as:",Object(o.b)("br",null),"1. Application start (Splash screen)",Object(o.b)("br",null),"2. First-time login (guided onboarding screens)",Object(o.b)("br",null),"3. View information about the app (About Us screen)",Object(o.b)("br",null),"4. App usage guide/tutorials screen")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Conversation Transformer")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User can manage his/her profile and conduct the following functions:",Object(o.b)("br",null),"1. View all editable and non-editable profile data",Object(o.b)("br",null),"2. Edit profile details",Object(o.b)("br",null),"3. Reset application password")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Managing User Conversations")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User can use the application in offline mode:",Object(o.b)("br",null),"1. Add/Edit/Delete any data in different sections of the application",Object(o.b)("br",null),"2. Data is automatically synced for the user once the device is online")))))}b.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);