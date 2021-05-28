(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),s=(n(0),n(264)),o={id:"auth",title:"Authentication vs Authorisation - Access Management in Software Systems",author:"Bharat Kashyap",author_title:"Technology @Samagra",author_url:"https://www.linkedin.com/in/bharat-kashyap-india/",author_image_url:"https://samagra-development.github.io/docs/img/blogbk.jpg",tags:["authentication","authorisation","bureaucrats","engineering","government","open source","govt engineers","govOS"]},r={permalink:"/docs/blog/auth",source:"@site/blog/2020-08-26-auth.md",description:"Security forms a critical part of any software application. One crucial aspect of security is managing access to an application; for citizen-facing systems that the government commissions, this becomes mission-critical: any  slip up can prove to be disastrous, as exemplified by multiple instances of the leakage of sensitive information such as a data leak that hit the State Bank of India in 2019 and a large breach of the labour department of the Government of Jharkhand in 2018.",date:"2020-08-26T00:00:00.000Z",tags:[{label:"authentication",permalink:"/docs/blog/tags/authentication"},{label:"authorisation",permalink:"/docs/blog/tags/authorisation"},{label:"bureaucrats",permalink:"/docs/blog/tags/bureaucrats"},{label:"engineering",permalink:"/docs/blog/tags/engineering"},{label:"government",permalink:"/docs/blog/tags/government"},{label:"open source",permalink:"/docs/blog/tags/open-source"},{label:"govt engineers",permalink:"/docs/blog/tags/govt-engineers"},{label:"govOS",permalink:"/docs/blog/tags/gov-os"}],title:"Authentication vs Authorisation - Access Management in Software Systems",truncated:!0,prevItem:{title:"How I fixed a bug in India's national vaccination system",permalink:"/docs/blog/cowin"},nextItem:{title:"WhatsApp to IVRS - The Tools Governments Can Use To Communicate With Citizens",permalink:"/docs/blog/communication"}},c=[{value:"What: Auth as passports and visas",id:"what-auth-as-passports-and-visas",children:[]},{value:"Single Sign On",id:"single-sign-on",children:[]},{value:"Authorisation: Access Control Lists",id:"authorisation-access-control-lists",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Security forms a critical part of any software application. One crucial aspect of security is managing access to an application; for citizen-facing systems that the government commissions, this becomes mission-critical: any  slip up can prove to be disastrous, as exemplified by multiple instances of the leakage of sensitive information such as a data leak that hit the State Bank of India in 2019 and a large breach of the labour department of the Government of Jharkhand in 2018."),Object(s.b)("p",null,"Managing access involves two distinct processes-- authentication and authorisation; terms that are often used interchangeably. This blog is the first of a series on access management in government systems. This part is aimed at explaining what these terms mean  and how they are distinct. It is also a simple introduction to the concept of a Single Sign On - SSO. "),Object(s.b)("p",null,"To better explain the difference between authentication and authorisation, we will draw an analogy to passports and visas (this might be the closest you will get to talking about visas during this period!). We end with an explanation  of the current authentication scenario in legacy software systems and how SSO can improve this landscape. Future editions in this series will speak about the implementation of access management in Indian government systems, how Aadhaar fits \u2013 and does not fit \u2013 into this picture, and what various government entities can do to implement open source auth by themselves. "),Object(s.b)("h2",{id:"what-auth-as-passports-and-visas"},"What: Auth as passports and visas"),Object(s.b)("p",null,"Consider a travel analogy: when visiting a foreign country, you will typically be required to present two documents: your Passport and a Visa. The Passport is for confirming your identity \u2013 the presence of a government-issued physical Passport is the factor that \u201cauthenticates\u201d this \u2013 and the Visa stamped on its pages indicates to the destination country what set of permissions a visitor has access to. Are they permitted to engage in employment? Are they permitted to travel throughout the region? What is the expiry date of their access? The Visa, thus, represents what a visitor is \u201cauthorized\u201d to do."),Object(s.b)("p",null,"While the travel analogy makes the distinction between the two clear, it brings up another question: when using government portals to book rail tickets, pay electricity and water bills, do you end up using a different username / password for each system? There is one government but for distinct parts of the same system, we need different credentials - is that not redundant?"),Object(s.b)("p",null,"You may manage this by having a neat notebook with a 100 credentials or you may autosave them in your browser. But is this a secure and efficient way of managing access to disparate government systems?"),Object(s.b)("h2",{id:"single-sign-on"},"Single Sign On"),Object(s.b)("p",null,"If a single Passport can work regardless of which country is being visited, why do separate government applications require separate login credentials? A single set of credentials should be sufficient to authenticate one\u2019s digital identity regardless of which application one is trying to sign in to: registering for a new driver\u2019s license or paying one\u2019s advance tax. This is what is often referred to as a \u201cSingle Sign On\u201d  (SSO) capability."),Object(s.b)("p",null,"Implementing this within a set of existing, deployed applications is possible if user identities are managed independently: think of it as needing only a single set of credentials to sign in to multiple bank account applications. Instead of the user identities \u2013 your name, bank account number \u2013 living inside each separate application, they are removed and managed centrally by a separate component, which manages your registrations to each application, and the required metadata linked with each."),Object(s.b)("p",null,Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"https://samagra-development.github.io/docs/img/blogauth.png",alt:null}))),Object(s.b)("h2",{id:"authorisation-access-control-lists"},"Authorisation: Access Control Lists"),Object(s.b)("p",null,"While this external component manages identity \u2013 or the Passport, from the earlier analogy \u2013 there is also a definite need to manage what the user is authorised to do within each application - your Visa. In most software systems, an \u201cAccess Control List\u201d (ACL) is a very standard form of accomplishing this. In the simplest terms, it is, as its name suggests, a list outlining the types of access that users have to different resources within an application. "),Object(s.b)("p",null,"This ACL layer is made to sit between any requests that the user may make from their client, to determine whether the resource requested is accessible to their assigned role and respond accordingly."),Object(s.b)("p",null,"In future posts, we will explain the state of SSO within government applications in India, the value inherent and the limitations present in the adoption of Aadhaar for digital authentication, and finally, describe a way to implement these capabilities for government systems: open-source, not vendor-locked, and inherently deployable on any infrastructure.\nEssentially, one passport and a system to grant and track visas for all travel."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"This is the first part in a series on open-source authentication and authorisation in government systems. The next part will focus on the current landscape in India, and the final part will focus on building open-source auth systems for specific use-cases")))}p.isMDXComponent=!0},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||h[d]||s;return n?i.a.createElement(m,r({ref:t},l,{components:n})):i.a.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var l=2;l<s;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);