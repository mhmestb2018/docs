(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{198:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(1),o=t(9),i=(t(0),t(223)),s={id:"UserAuthorisation",title:"User Authorisation",sidebar_label:"User Authorisation"},a={id:"UserAuthorisation",title:"User Authorisation",description:"## 1. Overview",source:"@site/docs/Admin - User Authorisation.md",permalink:"/docs/docs/UserAuthorisation",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Admin - User Authorisation.md",sidebar_label:"User Authorisation",sidebar:"someSidebar",previous:{title:"User Authentication",permalink:"/docs/docs/UserAuthentication"},next:{title:"Application Data Management",permalink:"/docs/docs/AppDataManagement"}},c=[{value:"1. Overview",id:"1-overview",children:[]},{value:"2. Setup",id:"2-setup",children:[]},{value:"2.1 Setting up ACL Backend",id:"21-setting-up-acl-backend",children:[]},{value:"2.2 Configuring the Auth Provider",id:"22-configuring-the-auth-provider",children:[]},{value:"2.3 Restricting Access to Resources or Views",id:"23-restricting-access-to-resources-or-views",children:[]},{value:"2.4 Restricting Access to Fields and Inputs",id:"24-restricting-access-to-fields-and-inputs",children:[]},{value:"2.5 Restricting Access to the Dashboard",id:"25-restricting-access-to-the-dashboard",children:[]},{value:"2.6 <code>usePermissions()</code> Hook",id:"26-usepermissions-hook",children:[]},{value:"2.7 Restricting Access to a Menu",id:"27-restricting-access-to-a-menu",children:[]},{value:"3. FAQs",id:"3-faqs",children:[]},{value:"4. Coming Soon",id:"4-coming-soon",children:[]}],l={rightToc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"1-overview"},"1. Overview"),Object(i.b)("p",null,"Some applications may require fine grained permissions to enable or disable access to certain features. Since there are many different possible strategies (single role, multiple roles or rights, ACLs, etc.), Admin Console Module simply provides hooks to execute your own authorization code."),Object(i.b)("h2",{id:"2-setup"},"2. Setup"),Object(i.b)("h2",{id:"21-setting-up-acl-backend"},"2.1 Setting up ACL Backend"),Object(i.b)("p",null,"Access control is setup along with FusionAuth, this allows us to manage roles effectively for each application the user is assigned a role. This refers to the backend setup that needs to be done to show them on Admin."),Object(i.b)("p",null,"Insatallation and docs coming soon."),Object(i.b)("h2",{id:"22-configuring-the-auth-provider"},"2.2 Configuring the Auth Provider"),Object(i.b)("p",null,"Each time react-admin needs to determine the user permissions, it calls the ",Object(i.b)("inlineCode",{parentName:"p"},"authProvider.getPermissions()")," method. It's up to you to return the user permissions, be it a string (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"'admin'"),") or an array of roles (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"['post_editor', 'comment_moderator', 'super_admin']"),")."),Object(i.b)("p",null,"Following is an example where the ",Object(i.b)("inlineCode",{parentName:"p"},"authProvider")," stores the user's permissions in ",Object(i.b)("inlineCode",{parentName:"p"},"localStorage")," upon authentication, and returns these permissions when called with ",Object(i.b)("inlineCode",{parentName:"p"},"getPermissions"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// in src/authProvider.js\nimport decodeJwt from 'jwt-decode';\n\nexport default {\n  login: ({username, password}) => {\n    const request = new Request('https://mydomain.com/authenticate', {\n      method: 'POST',\n      body: JSON.stringify({username, password}),\n      headers: new Headers({'Content-Type': 'application/json'}),\n    });\n    return fetch(request)\n      .then(response => {\n        if (response.status < 200 || response.status >= 300) {\n          throw new Error(response.statusText);\n        }\n        return response.json();\n      })\n      .then(({token}) => {\n        const decodedToken = decodeJwt(token);\n        localStorage.setItem('token', token);\n        localStorage.setItem('permissions', decodedToken.permissions);\n      });\n  },\n  logout: () => {\n    localStorage.removeItem('token');\n    localStorage.removeItem('permissions');\n    return Promise.resolve();\n  },\n  checkError: error => {\n    // ...\n  },\n  checkAuth: () => {\n    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();\n  },\n  getPermissions: () => {\n    const role = localStorage.getItem('permissions');\n    return role ? Promise.resolve(role) : Promise.reject();\n  },\n};\n")),Object(i.b)("h2",{id:"23-restricting-access-to-resources-or-views"},"2.3 Restricting Access to Resources or Views"),Object(i.b)("p",null,"Permissions can be useful to restrict access to resources or their views. To do so, you must use a function as the ",Object(i.b)("inlineCode",{parentName:"p"},"<Admin>")," only child. React-admin will call this function with the permissions returned by the ",Object(i.b)("inlineCode",{parentName:"p"},"authProvider"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"<Admin dataProvider={dataProvider} authProvider={authProvider}>\n  {permissions => [\n    // Restrict access to the edit and remove views to admin only\n    <Resource\n      name=\"customers\"\n      list={VisitorList}\n      edit={permissions === 'admin' ? VisitorEdit : null}\n      icon={VisitorIcon}\n    />,\n    // Only include the categories resource for admin users\n    permissions === 'admin' ? (\n      <Resource\n        name=\"categories\"\n        list={CategoryList}\n        edit={CategoryEdit}\n        icon={CategoryIcon}\n      />\n    ) : null,\n  ]}\n</Admin>\n")),Object(i.b)("p",null,"Note that the function returns an array of React elements. This is required to avoid having to wrap them in a container element which would prevent the ",Object(i.b)("inlineCode",{parentName:"p"},"Admin")," from working."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tip"),": Even if that's possible, be careful when completely excluding a resource (like with the ",Object(i.b)("inlineCode",{parentName:"p"},"categories")," resource in this example) as it will prevent you to reference this resource in the other resource views, too."),Object(i.b)("h2",{id:"24-restricting-access-to-fields-and-inputs"},"2.4 Restricting Access to Fields and Inputs"),Object(i.b)("p",null,"You might want to display some fields or inputs only to users with specific permissions. By default, react-admin calls the ",Object(i.b)("inlineCode",{parentName:"p"},"authProvider")," for permissions for each resource routes, and passes them to the ",Object(i.b)("inlineCode",{parentName:"p"},"list"),", ",Object(i.b)("inlineCode",{parentName:"p"},"edit"),", ",Object(i.b)("inlineCode",{parentName:"p"},"create"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"show")," components."),Object(i.b)("p",null,"Here is an example of a ",Object(i.b)("inlineCode",{parentName:"p"},"Create")," view with a conditional Input based on permissions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"export const UserCreate = ({permissions, ...props}) => (\n  <Create {...props}>\n    <SimpleForm defaultValue={{role: 'user'}}>\n      <TextInput source=\"name\" validate={[required()]} />\n      {permissions === 'admin' && (\n        <TextInput source=\"role\" validate={[required()]} />\n      )}\n    </SimpleForm>\n  </Create>\n);\n")),Object(i.b)("p",null,"This also works inside an ",Object(i.b)("inlineCode",{parentName:"p"},"Edition")," view with a ",Object(i.b)("inlineCode",{parentName:"p"},"TabbedForm"),", and you can even hide a ",Object(i.b)("inlineCode",{parentName:"p"},"FormTab")," completely:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'export const UserEdit = ({permissions, ...props}) => (\n  <Edit title={<UserTitle />} {...props}>\n    <TabbedForm defaultValue={{role: \'user\'}}>\n      <FormTab label="user.form.summary">\n        {permissions === \'admin\' && <TextInput disabled source="id" />}\n        <TextInput source="name" validate={required()} />\n      </FormTab>\n      {permissions === \'admin\' && (\n        <FormTab label="user.form.security">\n          <TextInput source="role" validate={required()} />\n        </FormTab>\n      )}\n    </TabbedForm>\n  </Edit>\n);\n')),Object(i.b)("p",null,"What about the ",Object(i.b)("inlineCode",{parentName:"p"},"List")," view, the ",Object(i.b)("inlineCode",{parentName:"p"},"DataGrid"),", ",Object(i.b)("inlineCode",{parentName:"p"},"SimpleList")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Filter")," components? It works there, too. And in the next example, the ",Object(i.b)("inlineCode",{parentName:"p"},"permissions")," prop is passed down to a custom ",Object(i.b)("inlineCode",{parentName:"p"},"filters")," component."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const UserFilter = ({permissions, ...props}) => (\n  <Filter {...props}>\n    <TextInput label="user.list.search" source="q" alwaysOn />\n    <TextInput source="name" />\n    {permissions === \'admin\' && <TextInput source="role" />}\n  </Filter>\n);\n\nexport const UserList = ({permissions, ...props}) => (\n  <List\n    {...props}\n    filters={props => <UserFilter permissions={permissions} {...props} />}>\n    <Datagrid>\n      <TextField source="id" />\n      <TextField source="name" />\n      {permissions === \'admin\' && <TextField source="role" />}\n      {permissions === \'admin\' && <EditButton />}\n      <ShowButton />\n    </Datagrid>\n  </List>\n);\n')),Object(i.b)("h2",{id:"25-restricting-access-to-the-dashboard"},"2.5 Restricting Access to the Dashboard"),Object(i.b)("p",null,"React-admin injects the permissions into the component provided as a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"./Admin.md#dashboard"}),Object(i.b)("inlineCode",{parentName:"a"},"dashboard")),", too:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// in src/Dashboard.js\nimport React from 'react';\nimport Card from '@material-ui/core/Card';\nimport CardContent from '@material-ui/core/CardContent';\nimport {Title} from 'react-admin';\n\nexport default ({permissions}) => (\n  <Card>\n    <Title title=\"Dashboard\" />\n    <CardContent>Lorem ipsum sic dolor amet...</CardContent>\n    {permissions === 'admin' ? <CardContent>Sensitive data</CardContent> : null}\n  </Card>\n);\n")),Object(i.b)("h2",{id:"26-usepermissions-hook"},"2.6 ",Object(i.b)("inlineCode",{parentName:"h2"},"usePermissions()")," Hook"),Object(i.b)("p",null,"You might want to check user permissions inside a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"./Admin.md#customroutes"}),"custom page"),". That's the purpose of the ",Object(i.b)("inlineCode",{parentName:"p"},"usePermissions()")," hook, which calls the ",Object(i.b)("inlineCode",{parentName:"p"},"authProvider.getPermissions()")," method on mount, and returns the result when available:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// in src/MyPage.js\nimport React from 'react';\nimport Card from '@material-ui/core/Card';\nimport CardContent from '@material-ui/core/CardContent';\nimport {usePermissions} from 'react-admin';\n\nconst MyPage = () => {\n  const {permissions} = usePermissions();\n  return (\n    <Card>\n      <CardContent>Lorem ipsum sic dolor amet...</CardContent>\n      {permissions === 'admin' && <CardContent>Sensitive data</CardContent>}\n    </Card>\n  );\n};\n\nexport default MyPage;\n\n// in src/customRoutes.js\nimport React from 'react';\nimport {Route} from 'react-router-dom';\nimport MyPage from './MyPage';\n\nexport default [<Route exact path=\"/baz\" component={MyPage} />];\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"usePermissions")," hook is optimistic: it doesn't block rendering during the ",Object(i.b)("inlineCode",{parentName:"p"},"authProvider")," call. In the above example, the ",Object(i.b)("inlineCode",{parentName:"p"},"MyPage")," component renders even before getting the response from the ",Object(i.b)("inlineCode",{parentName:"p"},"authProvider"),". To avoid a blink in the interface while the ",Object(i.b)("inlineCode",{parentName:"p"},"authProvider")," is answering, use the ",Object(i.b)("inlineCode",{parentName:"p"},"loaded")," return value of ",Object(i.b)("inlineCode",{parentName:"p"},"usePermissions()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const MyPage = () => {\n  const {loaded, permissions} = usePermissions();\n  return loaded ? (\n    <Card>\n      <CardContent>Lorem ipsum sic dolor amet...</CardContent>\n      {permissions === 'admin' && <CardContent>Sensitive data</CardContent>}\n    </Card>\n  ) : null;\n};\n")),Object(i.b)("h2",{id:"27-restricting-access-to-a-menu"},"2.7 Restricting Access to a Menu"),Object(i.b)("p",null,"What if you want to check the permissions inside a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"./Admin.md#menu"}),"custom menu"),"? Much like getting permissions inside a custom page, you'll have to use the ",Object(i.b)("inlineCode",{parentName:"p"},"usePermissions")," hook:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'// in src/myMenu.js\nimport React from \'react\';\nimport {MenuItemLink, usePermissions} from \'react-admin\';\n\nconst Menu = ({onMenuClick, logout}) => {\n  const {permissions} = usePermissions();\n  return (\n    <div>\n      <MenuItemLink to="/posts" primaryText="Posts" onClick={onMenuClick} />\n      <MenuItemLink\n        to="/comments"\n        primaryText="Comments"\n        onClick={onMenuClick}\n      />\n      {permissions === \'admin\' && (\n        <MenuItemLink\n          to="/custom-route"\n          primaryText="Miscellaneous"\n          onClick={onMenuClick}\n        />\n      )}\n      {logout}\n    </div>\n  );\n};\n')),Object(i.b)("h2",{id:"3-faqs"},"3. FAQs"),Object(i.b)("p",null,"To be added based on incoming feedback"),Object(i.b)("h2",{id:"4-coming-soon"},"4. Coming Soon"),Object(i.b)("p",null,"Please review the following section to get information about planned updates to this module."))}p.isMDXComponent=!0},223:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},d=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return t?o.a.createElement(b,a({ref:n},l,{components:t})):o.a.createElement(b,a({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);