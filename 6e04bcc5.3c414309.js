(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(1),i=n(9),r=(n(0),n(202)),a={id:"NotificationModule",title:"Push Notifications Module",sidebar_label:"Push Notifications Module"},c={id:"NotificationModule",title:"Push Notifications Module",description:"## 1. Overview<br/>",source:"@site/docs/Notification Module.md",permalink:"/docs/docs/NotificationModule",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Notification Module.md",sidebar_label:"Push Notifications Module",sidebar:"someSidebar",previous:{title:"Cascading Search Module",permalink:"/docs/docs/CascadingSearchModule"},next:{title:"Offline Handling Module",permalink:"/docs/docs/OfflineHandlingModule"}},s=[{value:"1. Overview<br/>",id:"1-overview",children:[]},{value:"2. Setting up Push Notifications Module into your Project<br/>",id:"2-setting-up-push-notifications-module-into-your-project",children:[{value:"2.1.1 Downoading and integrating into main app project <br/><br/>",id:"211-downoading-and-integrating-into-main-app-project",children:[]},{value:"2.1.2 Setting up Firebase in your project <br/><br/>",id:"212-setting-up-firebase-in-your-project",children:[]},{value:"2.1.3 Using the Module <br/><br/>",id:"213-using-the-module",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"1-overview"},"1. Overview",Object(r.b)("br",null)),Object(r.b)("p",null,"Push notifications are an important part of the mobile experience. Users have grown accustomed to having push notifications be a part of virtually every app that they use. "),Object(r.b)("p",null,"For an app, the most effective way to receive push notifications is via Firebase Cloud Messaging Service. Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost. Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention."),Object(r.b)("p",null,"The module that we have developed, contains a functionality to generate notifications received via FCM and also generate push notifications from within the app."),Object(r.b)("h2",{id:"2-setting-up-push-notifications-module-into-your-project"},"2. Setting up Push Notifications Module into your Project",Object(r.b)("br",null)),Object(r.b)("h3",{id:"211-downoading-and-integrating-into-main-app-project"},"2.1.1 Downoading and integrating into main app project ",Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory."),Object(r.b)("li",{parentName:"ol"},"Launch Android Studio. Open the main project where you are to integrate these modules. "),Object(r.b)("li",{parentName:"ol"},"If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the notifications_module later, using the following steps."),Object(r.b)("li",{parentName:"ol"},"Click on your app module. Select New Module Option -> Select Import Gradle Project -> Go to the downloaded project directory -> Select the module, sync your gradle. In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing."),Object(r.b)("li",{parentName:"ol"},"Please follow the same steps for the integration of notifications_module."),Object(r.b)("li",{parentName:"ol"},"Voila, the notification module has been integrated into your project. Please clean and rebuild your project.")),Object(r.b)("h3",{id:"212-setting-up-firebase-in-your-project"},"2.1.2 Setting up Firebase in your project ",Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"You must have firebase set up for your project. Set up Firebase and the FCM SDK. If you haven't already, ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://firebase.google.com/docs/android/setup"}),"add Firebase to your Android project"),"."),Object(r.b)("li",{parentName:"ol"},"In your project-level build.gradle file, make sure to include Google's Maven repository in both your buildscript and allprojects sections."),Object(r.b)("li",{parentName:"ol"},"Add the dependency for the Cloud Messaging Android library to your module (app-level) Gradle file (usually app/build.gradle)")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"implementation 'com.google.firebase:firebase-messaging:20.1.5'\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"You need to have Internet Permissions to interact with the FCM Server.")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),' <uses-permission android:name="android.permission.INTERNET" />\n')),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Voila, firebasee has been integrated into your project. Please clean and rebuild your project.")),Object(r.b)("h3",{id:"213-using-the-module"},"2.1.3 Using the Module ",Object(r.b)("br",null),Object(r.b)("br",null)),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Register the notification channel in your Application level class as follows:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"  NotificationUtils.createNotificationChannel(this);\n  //this is the instance of the Application level class of your project.\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Access the device registration token")," : On initial startup of your app, the FCM SDK generates a registration token for the client app instance. If you want to target single devices or create device groups, you'll need to access this token by extending  ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService"}),Object(r.b)("inlineCode",{parentName:"a"},"FirebaseMessagingService")),"  and overriding  ",Object(r.b)("inlineCode",{parentName:"li"},"onNewToken"),". This has already been taken care of by the module you integrated. You will just have to invoke the FirebaseMessagingService child class.",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"new PushMessagingService().\n        setContext(context, API_URL, API_KEY).  \n                            getCurrentToken(context);\n``` //Base API Url and API Key are for Fusion Auth API Integration related,\nif in case you are using Fusion auth for managing and authenticating user data.\n")))),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"3.  You are set to go, if you would send a notification from Firebase, you should receive a notification on your device. \n4. ** Sending the notification from within the app - ** \n  \nCall the following method wherever you want to send the notification\n\n")),Object(r.b)("p",null,"Intent notifyIntent = new Intent(getActivityContext(), NotificationRenderingActivity.class);",Object(r.b)("br",{parentName:"p"}),"\n","notifyIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);",Object(r.b)("br",{parentName:"p"}),"\n",'notifyIntent.putExtra(NotificationRenderingActivity.NOTIFICATION_TITLE,"Notification Title");',Object(r.b)("br",{parentName:"p"}),"\n",'notifyIntent.putExtra(NotificationRenderingActivity.NOTIFICATION_MESSAGE, "Test message");',Object(r.b)("br",{parentName:"p"}),"\n","PendingIntent pendingNotify = PendingIntent.getActivity(getActivityContext(), REQUEST_CODE,",Object(r.b)("br",{parentName:"p"}),"\n","notifyIntent, PendingIntent.FLAG_UPDATE_CURRENT);",Object(r.b)("br",{parentName:"p"}),"\n",'AppNotificationUtils.showNotification(pendingNotify, NOTIFICATION_ID, "Notification Title", "Test Notification");'),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"5.After this integration, you should be able to receive FCM Notifications on your device, as well also generate notifications from within your app. \n\n\n## FAQs\n\n**Q1) How to test the FCM Notifications?**<br/><br/>\nIn order to test and see how the FCM Notification is sent to your android device, please refer this [tutorial](https://firebase.google.com/docs/cloud-messaging/android/first-message).\n*Please note that this module is in continuous development phase, as soon as we push out new functionalities related to Push Notifications, we would keep adding the features here.*\n\n**Q2) How to manage the FCM Token?**<br/><br/>\nFCM token is user specific, hence we suggest to store the FCM token for the user in the preferences, and we prefer to update the fcm token whenever the user log-in into the application, by checking if the new user logging in is different from the last user using the app.\n\n## Coming Soon\n\n1. Notification Center in the app.\n2. Ability to read, delete and unread the app notifications.\n3. Including deep-link in the notifications to redirect user to specific app sections.\n\n\n")))}u.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||r;return n?i.a.createElement(f,c({ref:t},l,{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);