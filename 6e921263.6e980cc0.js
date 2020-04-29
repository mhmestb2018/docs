(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var c=n(1),a=n(9),o=(n(0),n(222)),i={id:"CommunicatingAmongModules",title:"Communicating Among Modules",sidebar_label:"Communicating Among Modules"},r={id:"CommunicatingAmongModules",title:"Communicating Among Modules",description:"## 1. Overview - How to communicate among different app modules?",source:"@site/docs/Communicating Among Modules.md",permalink:"/docs/docs/CommunicatingAmongModules",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Communicating Among Modules.md",sidebar_label:"Communicating Among Modules",sidebar:"someSidebar",previous:{title:"App Logging",permalink:"/docs/docs/Grove"},next:{title:"Application Control",permalink:"/docs/docs/COAppControl"}},l=[{value:"1. Overview - How to communicate among different app modules?",id:"1-overview---how-to-communicate-among-different-app-modules",children:[]},{value:"2. Usage tips",id:"2-usage-tips",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(c.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-overview---how-to-communicate-among-different-app-modules"},"1. Overview - How to communicate among different app modules?"),Object(o.b)("p",null,"To get the context of the section, please refer ",Object(o.b)("a",Object(c.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/GettingStarted#event-configuring"}),"this section"),"."),Object(o.b)("a",{href:"https://imgflip.com/gif/3wxi92"},Object(o.b)("img",{src:"https://i.imgflip.com/3wxi92.gif",title:"made at imgflip.com"})),Object(o.b)("h2",{id:"2-usage-tips"},"2. Usage tips"),Object(o.b)("p",null,"We recommend obtaining a single instance of bus through injection or another appropriate mechanism. Alternatively, you may get a singleton like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-java"}),"Bus bus = BusProvider.getInstance();\n")),Object(o.b)("p",null,"Or You could provide a getter at your application level class to get the instance of the RxBus. (like we have used)."),Object(o.b)("p",null,"By default, the Bus enforces that all interactions occur on the main thread. "),Object(o.b)("p",null,"You can create RxBus like below."),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-java"}),"public class RxBus {\n\n    public RxBus() {\n    }\n\n    private PublishSubject<Object> bus = PublishSubject.create();\n\n    public void send(Object o) {\n        bus.onNext(o);\n    }\n\n    public Observable<Object> toObservable() {\n        return bus;\n    }\n\n}\n")),Object(o.b)("p",null,"Now, we will create the Singleton(single instance) of RxBus in our application class or at any other place as below:"),Object(o.b)("p",null,"How to access the RxBus has been mentioned above already."),Object(o.b)("p",null,"You can subscribe for an event in any class like below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-java"}),'compositeDisposable.add(this.getEventBus()\n        .toObservable().subscribeOn(Schedulers.io())\n            .observeOn(AndroidSchedulers.mainThread())\n            .subscribe(exchangeObject->{\n        if(exchangeObject instanceof ExchangeObject){\n            if(((ExchangeObject)exchangeObject).to==Modules.MAIN_APP\n                    &&((ExchangeObject)exchangeObject).from==Modules.ANCILLARY_SCREENS\n                    &&((ExchangeObject)exchangeObject).type==ExchangeObject.ExchangeObjectTypes.SIGNAL){\n                ExchangeObject.SignalExchangeObject signalExchangeObject=(ExchangeObject.SignalExchangeObject)exchangeObject;\n\n                if(signalExchangeObject.shouldStartAsNewTask){\n                    if(currentActivity!=null){\n                        CommonUtilities.startActivityAsNewTask(signalExchangeObject.intentToLaunch,currentActivity);\n                    }}\n                else\n                    startActivity(signalExchangeObject.intentToLaunch);\n            }else if(exchangeObject instanceof ExchangeObject.EventExchangeObject){\n                ExchangeObject.EventExchangeObject eventExchangeObject=(ExchangeObject.EventExchangeObject)exchangeObject;\n                Timber.d("Event Received %s ",eventExchangeObject.customEvents);\n                if(eventExchangeObject.to==Modules.MAIN_APP||eventExchangeObject.to==Modules.PROJECT){ \n                    Timber.d("Event Received %s ",eventExchangeObject.customEvents);\n                }\n            }else if(exchangeObject instanceof ExchangeObject.NotificationExchangeObject){\n                PendingIntent pendingIntent=((ExchangeObject.NotificationExchangeObject)exchangeObject).data.getIntent();\n                int notificationID=((ExchangeObject.NotificationExchangeObject)exchangeObject).data.getNotificationID();\n                int title=((ExchangeObject.NotificationExchangeObject)exchangeObject).data.getTitle();\n                String body=((ExchangeObject.NotificationExchangeObject)exchangeObject).data.getBody();\n                Timber.d("Event Received for Push Notification %s ",title); \n            }else{ \n                Timber.d("Received but not intended");\n            }\n        }\n    },Timber::e));\n\n')),Object(o.b)("p",null,"You can send an event from any other class or from the same class like below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-java"}),"MyApplication.getInstance().component().rxBus().send(new EventTypeExhangeObject());\n        \n")),Object(o.b)("p",null,"This way, you have the EventBus pattern with RxJava, RxBus. But if there is some error, it will terminate, so to avoid that check ",Object(o.b)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/JakeWharton/RxRelay"}),"RxRelay"),"."),Object(o.b)("p",null,"RxRelay: A Subject except without the ability to call onComplete or onError."))}b.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var c=n(0),a=n.n(c);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},o=Object.keys(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(c.forwardRef)((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=c,m=u["".concat(i,".").concat(p)]||u[p]||g[p]||o;return n?a.a.createElement(m,r({ref:t},s,{components:n})):a.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,i=new Array(o);i[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:c,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);