"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7313],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>u});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=a.createContext({}),i=function(e){var n=a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=i(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(r),g=t,u=p["".concat(d,".").concat(g)]||p[g]||m[g]||s;return r?a.createElement(u,l(l({ref:n},c),{},{components:r})):a.createElement(u,l({ref:n},c))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,l=new Array(s);l[0]=g;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[p]="string"==typeof e?e:t,l[1]=o;for(var i=2;i<s;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7470:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var a=r(7462),t=(r(7294),r(3905));const s={sidebar_label:"message_handlers",title:"core.messaging.handlers.message_handlers"},l=void 0,o={unversionedId:"reference/backend/core/messaging/handlers/message_handlers",id:"reference/backend/core/messaging/handlers/message_handlers",title:"core.messaging.handlers.message_handlers",description:"MessageHandlers Objects",source:"@site/docs/reference/backend/core/messaging/handlers/message_handlers.md",sourceDirName:"reference/backend/core/messaging/handlers",slug:"/reference/backend/core/messaging/handlers/message_handlers",permalink:"/hello-world/docs/reference/backend/core/messaging/handlers/message_handlers",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"message_handlers",title:"core.messaging.handlers.message_handlers"},sidebar:"backendSidebar",previous:{title:"message_handler",permalink:"/hello-world/docs/reference/backend/core/messaging/handlers/message_handler"},next:{title:"message_service",permalink:"/hello-world/docs/reference/backend/core/messaging/handlers/message_service"}},d={},i=[{value:"MessageHandlers Objects",id:"messagehandlers-objects",level:2},{value:"add_handler",id:"add_handler",level:4},{value:"find_handlers",id:"find_handlers",level:4}],c={toc:i},p="wrapper";function m(e){let{components:n,...r}=e;return(0,t.kt)(p,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"messagehandlers-objects"},"MessageHandlers Objects"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"class MessageHandlers()\n")),(0,t.kt)("p",null,"Holds mappings for message handlers."),(0,t.kt)("h4",{id:"add_handler"},"add","_","handler"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"def add_handler(fltr: str,\n                handler: MessageHandler,\n                message_type: type[MessageType] = Message,\n                is_async: bool = False) -> None\n")),(0,t.kt)("p",null,"Adds a new message handler mapping."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"fltr")," - The message name filter."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"handler")," - The message handler."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"message_type")," - The message type the handler expects."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"is_async")," - Whether the handler should be invoked asynchronously in its own thread.")),(0,t.kt)("h4",{id:"find_handlers"},"find","_","handlers"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"def find_handlers(msg_name: MessageName) -> MessageHandlerMappings\n")),(0,t.kt)("p",null,"Finds all handlers that fit the given ",(0,t.kt)("inlineCode",{parentName:"p"},"msg_name"),"."),(0,t.kt)("p",null,"The message name filter can be a complete message name, or a wildcard pattern using asterisks (*)."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"msg_name")," - The message name (pattern).")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Returns"),":"),(0,t.kt)("p",null,"  A list of all found message handlers."))}m.isMDXComponent=!0}}]);