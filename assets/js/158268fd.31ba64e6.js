"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(i,".").concat(u)]||m[u]||p[u]||s;return n?r.createElement(d,l(l({ref:t},g),{},{components:n})):r.createElement(d,l({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_label:"message_service",title:"core.messaging.handlers.message_service"},l=void 0,o={unversionedId:"reference/backend/core/messaging/handlers/message_service",id:"reference/backend/core/messaging/handlers/message_service",title:"core.messaging.handlers.message_service",description:"MessageService Objects",source:"@site/docs/reference/backend/core/messaging/handlers/message_service.md",sourceDirName:"reference/backend/core/messaging/handlers",slug:"/reference/backend/core/messaging/handlers/message_service",permalink:"/hello-world/docs/reference/backend/core/messaging/handlers/message_service",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"message_service",title:"core.messaging.handlers.message_service"},sidebar:"backendSidebar",previous:{title:"message_handlers",permalink:"/hello-world/docs/reference/backend/core/messaging/handlers/message_handlers"},next:{title:"message",permalink:"/hello-world/docs/reference/backend/core/messaging/message"}},i={},c=[{value:"MessageService Objects",id:"messageservice-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"create_context",id:"create_context",level:4},{value:"create_message_builder",id:"create_message_builder",level:4},{value:"message_handlers",id:"message_handlers",level:4}],g={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"messageservice-objects"},"MessageService Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class MessageService()\n")),(0,a.kt)("p",null,"Base class for all message services."),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"message service")," wraps message handlers and proper message context creation (i.e., using a flexible context type). It\nis used by the message bus as an encapsulated layer for message dispatching."),(0,a.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(comp_id: UnitID,\n             *,\n             message_bus: MessageBusProtocol,\n             context_type: type[MessageContextType] = MessageContext)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"comp_id")," - The global component identifier."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message_bus")," - The global message bus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context_type")," - The type to use when creating a message context.")),(0,a.kt)("h4",{id:"create_context"},"create","_","context"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def create_context(msg_meta: MessageMetaInformation, *, logger: LoggerProtocol,\n                   config: Configuration) -> MessageContext\n")),(0,a.kt)("p",null,"Creates a new service context."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msg_meta")," - The meta information of the message."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logger")," - The logger to be used within the new context."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config")," - The global component configuration.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  The newly created message context."),(0,a.kt)("h4",{id:"create_message_builder"},"create","_","message","_","builder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def create_message_builder() -> MessageBuilder\n")),(0,a.kt)("p",null,"Creates a new message builder."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  The newly created message builder."),(0,a.kt)("h4",{id:"message_handlers"},"message","_","handlers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef message_handlers() -> MessageHandlers\n")),(0,a.kt)("p",null,"The message handlers maintained by this message service."))}p.isMDXComponent=!0}}]);