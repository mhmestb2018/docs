(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(1),r=n(9),a=(n(0),n(215)),i={id:"AppControlPanel",title:"Mission Control Console",sidebar_label:"Mission Control Console"},c={id:"AppControlPanel",title:"Mission Control Console",description:"## 1. Overview",source:"@site/docs/Admin Mission Control.md",permalink:"/docs/docs/AppControlPanel",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Admin Mission Control.md",sidebar_label:"Mission Control Console",sidebar:"someSidebar",previous:{title:"Application Control",permalink:"/docs/docs/COAppControl"},next:{title:"User Management",permalink:"/docs/docs/UserManagement"}},s=[{value:"1. Overview",id:"1-overview",children:[]},{value:"2. Setup Module",id:"2-setup-module",children:[{value:"2.1 Basics of react-admin",id:"21-basics-of-react-admin",children:[]},{value:"2.2 At a Glance",id:"22-at-a-glance",children:[]},{value:"2.3 Whats next?",id:"23-whats-next",children:[]}]},{value:"3. FAQs",id:"3-faqs",children:[]},{value:"4. Coming Soon",id:"4-coming-soon",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"1-overview"},"1. Overview"),Object(a.b)("p",null,"A frontend Framework for building admin applications running in the browser, on top of REST/GraphQL APIs, using ES6, ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://facebook.github.io/react/"}),"React")," and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://material.io/"}),"Material Design"),". This is built over ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://marmelab.com/react-admin/"}),"React-Admin")," built by marmelab."),Object(a.b)("h2",{id:"2-setup-module"},"2. Setup Module"),Object(a.b)("p",null,"Use the following starter project to build your first app. Since this is a sample opinionated configuration feel free to make any change to it."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"git clone https://gitlab.com/ctt-samagra/opensource-packages/user-management-package/samagra-admin-module")),Object(a.b)("h3",{id:"21-basics-of-react-admin"},"2.1 Basics of react-admin"),Object(a.b)("p",null,"Read the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"./Tutorial.md"}),"Tutorial")," for a 30 minutes introduction. After that, continue reading the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"./DataProviders.md"}),"Documentation"),", or checkout the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/marmelab/react-admin/tree/master/examples/demo"}),"source code of the demo")," for an example usage."),Object(a.b)("h3",{id:"22-at-a-glance"},"2.2 At a Glance"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"// in app.js\nimport React from 'react';\nimport {render} from 'react-dom';\nimport {Admin, Resource} from 'react-admin';\nimport simpleRestProvider from 'ra-data-simple-rest';\nimport {PostList, PostEdit, PostCreate, PostIcon} from './posts';\nrender(\n  <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>\n    <Resource\n      name=\"posts\"\n      list={PostList}\n      edit={PostEdit}\n      create={PostCreate}\n      icon={PostIcon}\n    />\n  </Admin>,\n  document.getElementById('root'),\n);\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"<Resource>")," component is a configuration component that allows to define sub components for each of the admin view: ",Object(a.b)("inlineCode",{parentName:"p"},"list"),", ",Object(a.b)("inlineCode",{parentName:"p"},"edit"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"create"),". These components use Material UI and custom components from react-admin:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'// in posts.js\nimport React from \'react\';\nimport {\n  List,\n  Datagrid,\n  Edit,\n  Create,\n  SimpleForm,\n  DateField,\n  TextField,\n  EditButton,\n  TextInput,\n  DateInput,\n} from \'react-admin\';\n\nimport BookIcon from \'@material-ui/icons/Book\';\nexport const PostIcon = BookIcon;\nexport const PostList = props => (\n  <List {...props}>\n    <Datagrid>\n      <TextField source="id" />\n      <TextField source="title" />\n      <DateField source="published_at" />\n      <TextField source="average_note" />\n      <TextField source="views" />\n      <EditButton basePath="/posts" />\n    </Datagrid>\n  </List>\n);\n\nconst PostTitle = ({record}) => {\n  return <span>Post {record ? `"${record.title}"` : \'\'}</span>;\n};\n\nexport const PostEdit = props => (\n  <Edit title={<PostTitle />} {...props}>\n    <SimpleForm>\n      <TextInput disabled source="id" />\n      <TextInput source="title" />\n      <TextInput source="teaser" options={{multiLine: true}} />\n      <TextInput multiline source="body" />\n      <DateInput label="Publication date" source="published_at" />\n      <TextInput source="average_note" />\n      <TextInput disabled label="Nb views" source="views" />\n    </SimpleForm>\n  </Edit>\n);\n\nexport const PostCreate = props => (\n  <Create title="Create a Post" {...props}>\n    <SimpleForm>\n      <TextInput source="title" />\n      <TextInput source="teaser" options={{multiLine: true}} />\n      <TextInput multiline source="body" />\n      <TextInput label="Publication date" source="published_at" />\n      <TextInput source="average_note" />\n    </SimpleForm>\n  </Create>\n);\n')),Object(a.b)("h3",{id:"23-whats-next"},"2.3 Whats next?"),Object(a.b)("p",null,"Now that you have a basic understanding of how things work, let's start with adding more capabilities to it."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"./AdminAuthenticationAndAuthorisation"}),"Adding authentication and authorization")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"./AdminAddingCustomRoutes"}),"Adding Custom Routes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"./AdminAddingExternalData"}),"Adding multiple data providers"))),Object(a.b)("h2",{id:"3-faqs"},"3. FAQs"),Object(a.b)("h2",{id:"4-coming-soon"},"4. Coming Soon"),Object(a.b)("p",null,"Please review the following section to get information about planned updates to this module."))}p.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.a.createElement(b,c({ref:t},l,{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);