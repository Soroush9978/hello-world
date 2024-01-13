"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2077],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>u});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),i=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=i(r),g=a,u=d["".concat(c,".").concat(g)]||d[g]||m[g]||s;return r?t.createElement(u,l(l({ref:n},p),{},{components:r})):t.createElement(u,l({ref:n},p))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7912:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var t=r(7462),a=(r(7294),r(3905));const s={sidebar_label:"message_handler",title:"core.messaging.handlers.message_handler"},l=void 0,o={unversionedId:"reference/backend/core/messaging/handlers/message_handler",id:"reference/backend/core/messaging/handlers/message_handler",title:"core.messaging.handlers.message_handler",description:"MessageHandlerMapping Objects",source:"@site/docs/reference/backend/core/messaging/handlers/message_handler.md",sourceDirName:"reference/backend/core/messaging/handlers",slug:"/reference/backend/core/messaging/handlers/message_handler",permalink:"/docs/reference/backend/core/messaging/handlers/message_handler",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"message_handler",title:"core.messaging.handlers.message_handler"},sidebar:"backendSidebar",previous:{title:"message_context",permalink:"/docs/reference/backend/core/messaging/handlers/message_context"},next:{title:"message_handlers",permalink:"/docs/reference/backend/core/messaging/handlers/message_handlers"}},c={},i=[{value:"MessageHandlerMapping Objects",id:"messagehandlermapping-objects",level:2}],p={toc:i},d="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"messagehandlermapping-objects"},"MessageHandlerMapping Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass(frozen=True)\nclass MessageHandlerMapping()\n")),(0,a.kt)("p",null,"Mapping from a message name filter to a message handler."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filter")," - The message name filter."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"handler")," - The message handler."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message_type")," - The message type the handler expects."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_async")," - Whether the handler should be invoked asynchronously in its own thread.")))}m.isMDXComponent=!0}}]);