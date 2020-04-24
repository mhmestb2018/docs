(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(203)),i={id:"AdminAddingCustomRoutes",title:"Adding Custom Routes",sidebar_label:"Custom Routes"},c={id:"AdminAddingCustomRoutes",title:"Adding Custom Routes",description:"For any Admin there is always a need to adding links other than resources. Admin supports adding additonal links inside the Admin from both Fuse as well as outside it.",source:"@site/docs/Admin - Adding Custom Routes.md",permalink:"/docs/docs/AdminAddingCustomRoutes",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Admin - Adding Custom Routes.md",sidebar_label:"Custom Routes",sidebar:"someSidebar",previous:{title:"Admin Authorisation",permalink:"/docs/docs/AdminAuthorisation"},next:{title:"Architecture and Design",permalink:"/docs/docs/AdminArchitectureAndDesign"}},d=[{value:"Custom Routes Addition",id:"custom-routes-addition",children:[]},{value:"Examples",id:"examples",children:[]}],s={rightToc:d};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For any Admin there is always a need to adding links other than resources. Admin supports adding additonal links inside the Admin from both Fuse as well as outside it."),Object(a.b)("h2",{id:"custom-routes-addition"},"Custom Routes Addition"),Object(a.b)("p",null,"For custom page routing we have a lazy loaded module i.e. ",Object(a.b)("em",{parentName:"p"},"ExternalModule")," which consists of all the external routing components with their separate redux."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Routing in external module is implemented using ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://reacttraining.com/react-router/web/guides/quick-start"}),"react-redux-dom")),Object(a.b)("li",{parentName:"ul"},"Path to the Externak module : ",Object(a.b)("inlineCode",{parentName:"li"},"src/e/")),Object(a.b)("li",{parentName:"ul"},"Example : ",Object(a.b)("inlineCode",{parentName:"li"},'<Route path="/e/dashboard" component={DashboardPage} icon={ComponentsIcon} />')," In the above example we have defined a route ",Object(a.b)("inlineCode",{parentName:"li"},"/e/dashboard")," which will navigate to ",Object(a.b)("em",{parentName:"li"},"Dashboard")," page component and sidebar will have an Icon of ",Object(a.b)("em",{parentName:"li"},"Component Icon"))),Object(a.b)("h2",{id:"examples"},"Examples"))}u.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=u(n),p=r,b=l["".concat(i,".").concat(p)]||l[p]||m[p]||a;return n?o.a.createElement(b,c({ref:t},s,{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);