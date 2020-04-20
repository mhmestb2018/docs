(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),i=(n(0),n(202)),a={id:"AncillaryScreensModule",title:"Ancillary Screens Module",sidebar_label:"Ancillary Screens Module"},l={id:"AncillaryScreensModule",title:"Ancillary Screens Module",description:"## 1. Overview",source:"@site/docs/Ancillary Screens Module.md",permalink:"/docs/docs/AncillaryScreensModule",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Ancillary Screens Module.md",sidebar_label:"Ancillary Screens Module",sidebar:"someSidebar",previous:{title:"Form Management Module",permalink:"/docs/docs/FormManagementModule"},next:{title:"User Profile Management Module",permalink:"/docs/docs/AndroidProfileManagementModule"}},c=[{value:"1. Overview",id:"1-overview",children:[]},{value:"2. Setting up Module in Main Application",id:"2-setting-up-module-in-main-application",children:[{value:"2.1 Integrating Module into your Project",id:"21-integrating-module-into-your-project",children:[]},{value:"2.2 Initialization and Usage of Ancillary Screens Module",id:"22-initialization-and-usage-of-ancillary-screens-module",children:[]},{value:"2.3 Using Ancillary Screens Module",id:"23-using-ancillary-screens-module",children:[]}]},{value:"3. FAQs",id:"3-faqs",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"1-overview"},"1. Overview"),Object(i.b)("p",null,"For any android app, it becomes imperative, as the usage increases and the features enhance, it is needed to provide an access control to the app. Hence, we developed a module, with certain UI modules which can be easily integrated with your app, to provide basic features which are to be generally present in almost every android application, which are Splash scree, Login Screen, Forgot Password and Reset password via OTP."),Object(i.b)("p",null,"The screens included in the Ancillary Screens Module are:"),Object(i.b)("p",null,"(i) ",Object(i.b)("strong",{parentName:"p"},"Splash Screen")," - User sees this activity in the fist time when app is launched."),Object(i.b)("p",null,"(ii) ",Object(i.b)("strong",{parentName:"p"},"Login Screen")," - User can login via user id and password, we are using FusionAuth for the management and authentication of users."),Object(i.b)("p",null,"(iii) ",Object(i.b)("strong",{parentName:"p"},"About Us Screen")," - Ability to confiure the title, icon and the description text of the About Us Screen"),Object(i.b)("p",null,"(iv) ",Object(i.b)("strong",{parentName:"p"},"Reset Password")," - User can reset the app password from the Login screen via OTP sent to his registered Mobile number"),Object(i.b)("p",null,"(v) ",Object(i.b)("strong",{parentName:"p"},"Tutorials Screen")," - In order to guide the app user about the flow of app via Youtube video, you can configure those videos inside these screens by passing in your Youtube API Key and Video ID. You can also remotely configure the video IDs."),Object(i.b)("h2",{id:"2-setting-up-module-in-main-application"},"2. Setting up Module in Main Application"),Object(i.b)("h3",{id:"21-integrating-module-into-your-project"},"2.1 Integrating Module into your Project"),Object(i.b)("p",null,"2.1.1 Unzipping and Pre-set up",Object(i.b)("br",null),Object(i.b)("br",null),"\nUnzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory. Launch Android Studio. Open the main project where you are to integrate these modules.",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("p",null,"2.1.2 Adding the Module/Android Library",Object(i.b)("br",null)),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the ancillaryscreens module later, using the following steps.",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("li",{parentName:"ol"},"Click on your app module. Select New Module Option -> Select Import Android Library -> Go to the downloaded project directory -> Select the module, sync your gradle. In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing.",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("li",{parentName:"ol"},"Please follow the same steps for the integration of ancillaryscreens module.",Object(i.b)("br",null),Object(i.b)("br",null))),Object(i.b)("p",null,"2.1.5 Editing settings.gradle",Object(i.b)("br",null)),Object(i.b)("p",null,"In the settings.gradle, Add ':ancillaryscreens' to the end of already added modules.",Object(i.b)("br",null)),Object(i.b)("h3",{id:"22-initialization-and-usage-of-ancillary-screens-module"},"2.2 Initialization and Usage of Ancillary Screens Module"),Object(i.b)("p",null,"Inside onCreate of Application class or Launcher Activity, in the manner as follows"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"AncillaryScreensDriver.init(this,\n                BASE_API_URL,\n                SEND_OTP_API_ENDPOINT,\n                RESET_PASSWORD_API_ENDPOINT,\n                APPLICATIO_ID);\n")),Object(i.b)("p",null,"The method signature of the initialisation invocation is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"/**\n* \n* @param mainApplication - Instance of Application Class (Main Application, as you will see is an Interface implemented by\nApplication class)\n* @param BASE_API_URL - String (Base API URL for the Fusion Auth, to be later used for user authentication and user data related tasks.)\n* @param SEND_OTP_API_ENDPOINT - String (API Endpoint to send OTP to the mobile number for resetting app password.)\n* @param RESET_PASSWORD_API_ENDPOINT - String (API Endpoint to post user data to reset App Password.)\n* @param APPLICATION_ID - String (Application ID sent for this app in Fusion Auth Backend.)\n*/\npublic static void init(@NonNull MainApplication mainApplication, \n@NonNull String BASE_API_URL, \n@NonNull String SEND_OTP_API_ENDPOINT, \n@NonNull String RESET_PASSWORD_API_ENDPOINT,\n@NonNull String APPLICATION_ID);\n")),Object(i.b)("h3",{id:"23-using-ancillary-screens-module"},"2.3 Using Ancillary Screens Module"),Object(i.b)("p",null,"2.3.1 In order to make Splash Screen the launcher activity for your application, please add the following statement in the AndroidManifest.xml file of this module, if not present"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'<activity\nandroid:name="com.samagra.ancillaryscreens.screens.splash.SplashActivity"\n        android:theme="@style/Theme.AppCompat.Light.NoActionBar">\n          <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n                <category android:name="android.intent.category.LAUNCHER" />\n                </intent-filter>\n                </activity>\n')),Object(i.b)("p",null,"2.3.2 Use Login Flow ",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("p",null,"The module comes in such a way that you won't need to do any config changes with respect to Login flow for the user. Same goes for the Change Password flow of the user."),Object(i.b)("p",null,"2.3.3 Using About Us Screen ",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("p",null,"To launch the About Us Screen from the module, use the following code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"AncillaryScreensDriver.launchAboutActivity(context, aboutBundle);\n")),Object(i.b)("p",null,"Here, context is the Context Instance used to launch the About Us screen, AboutBundle is bundle object containing the information transferred to the Activity to render the UI. "),Object(i.b)("p",null,"2.3.4 Using Tutorials Screen",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("p",null,"To launch the Tutorials Screen from the module, use the following code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"AncillaryScreensDriver.launchTutorialsActivity(context, tutorialBundle);\n")),Object(i.b)("p",null,"Here, context is the Context Instance used to launch the Tutorials screen, tutorialBundle is bundle object containing the information transferred to the Activity to render the UI. It contains the video id and Youtube API Key "),Object(i.b)("p",null,"2.3.5  Communication",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("p",null,"We are using RxBus to communicate back and forth with the main app module. Please refer to the SplashPresenter class of the downloaded project where we communicate back with the main app module to notify Login success and launching of home screen.",Object(i.b)("br",null),Object(i.b)("br",null)),Object(i.b)("h2",{id:"3-faqs"},"3. FAQs"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Q1. How to manage User Authentication?"),Object(i.b)("br",null),Object(i.b)("br",null),"\nWe are using Fusion Auth for the authentication of users at the time of Login. Invoking to reset the app password is also done via. Fusion Auth. You can override the backend using any other Authentication service."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Q2. How to set remotely configured data?"),Object(i.b)("br",null),Object(i.b)("br",null),"\nWe generally use Firebase Remote Config for controlling remote data, but you can are free to use your own custom APIs to get the remote data."))}u.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,h=b["".concat(a,".").concat(p)]||b[p]||d[p]||i;return n?o.a.createElement(h,l({ref:t},s,{components:n})):o.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);