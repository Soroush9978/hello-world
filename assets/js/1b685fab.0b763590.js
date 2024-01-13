"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,l(l({ref:t},i),{},{components:n})):r.createElement(k,l({ref:t},i))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"component_role",title:"component.roles.component_role"},l=void 0,s={unversionedId:"reference/backend/component/roles/component_role",id:"reference/backend/component/roles/component_role",title:"component.roles.component_role",description:"ComponentRole Objects",source:"@site/docs/reference/backend/component/roles/component_role.md",sourceDirName:"reference/backend/component/roles",slug:"/reference/backend/component/roles/component_role",permalink:"/hello-world/docs/reference/backend/component/roles/component_role",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"component_role",title:"component.roles.component_role"},sidebar:"backendSidebar",previous:{title:"meta_information",permalink:"/hello-world/docs/reference/backend/component/meta_information"},next:{title:"leaf_role",permalink:"/hello-world/docs/reference/backend/component/roles/leaf_role"}},c={},p=[{value:"ComponentRole Objects",id:"componentrole-objects",level:2},{value:"RuntimeAspects Objects",id:"runtimeaspects-objects",level:2},{value:"NetworkingAspects Objects",id:"networkingaspects-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"name",id:"name",level:4},{value:"runtime_aspects",id:"runtime_aspects",level:4},{value:"networking_aspects",id:"networking_aspects",level:4}],i={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"componentrole-objects"},"ComponentRole Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class ComponentRole(abc.ABC)\n")),(0,o.kt)("p",null,"The role definition of a component."),(0,o.kt)("p",null,"A component role defines certain aspects of a component. This usually corresponds to having specific features\nenabled or overriding types that are used within the core."),(0,o.kt)("h2",{id:"runtimeaspects-objects"},"RuntimeAspects Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@dataclasses.dataclass(frozen=True, kw_only=True)\nclass RuntimeAspects()\n")),(0,o.kt)("p",null,"Runtime aspects of a role."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"runtime_app_type")," - The runtime (WSGI) application type to instantiate.")),(0,o.kt)("h2",{id:"networkingaspects-objects"},"NetworkingAspects Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@dataclasses.dataclass(frozen=True, kw_only=True)\nclass NetworkingAspects()\n")),(0,o.kt)("p",null,"Networking aspects of a role."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"has_server")," - Whether this role runs a server in the networking engine."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"has_client")," - Whether this role runs a client in the networking engine.")),(0,o.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(role_name: str, *, runtime_aspects: RuntimeAspects,\n             networking_aspects: NetworkingAspects)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"role_name")," - The name of the role."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"networking_aspects")," - The networking aspects to use.")),(0,o.kt)("h4",{id:"name"},"name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef name() -> str\n")),(0,o.kt)("p",null,"The name of the role."),(0,o.kt)("h4",{id:"runtime_aspects"},"runtime","_","aspects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef runtime_aspects() -> RuntimeAspects\n")),(0,o.kt)("p",null,"The runtime aspects of this role."),(0,o.kt)("h4",{id:"networking_aspects"},"networking","_","aspects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef networking_aspects() -> NetworkingAspects\n")),(0,o.kt)("p",null,"The networking aspects of the role."))}m.isMDXComponent=!0}}]);