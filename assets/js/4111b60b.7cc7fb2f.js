"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=a,u=p["".concat(i,".").concat(c)]||p[c]||g[c]||o;return n?r.createElement(u,s(s({ref:t},m),{},{components:n})):r.createElement(u,s({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={id:"common_web_core_messaging_handlers_MessageContext.MessageContext",title:"Class: MessageContext",sidebar_label:"MessageContext",custom_edit_url:null},s=void 0,l={unversionedId:"reference/frontend/classes/common_web_core_messaging_handlers_MessageContext.MessageContext",id:"reference/frontend/classes/common_web_core_messaging_handlers_MessageContext.MessageContext",title:"Class: MessageContext",description:"common/web/core/messaging/handlers/MessageContext.MessageContext",source:"@site/docs/reference/frontend/classes/common_web_core_messaging_handlers_MessageContext.MessageContext.md",sourceDirName:"reference/frontend/classes",slug:"/reference/frontend/classes/common_web_core_messaging_handlers_MessageContext.MessageContext",permalink:"/hello-world/docs/reference/frontend/classes/common_web_core_messaging_handlers_MessageContext.MessageContext",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_web_core_messaging_handlers_MessageContext.MessageContext",title:"Class: MessageContext",sidebar_label:"MessageContext",custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"MessageDispatcher",permalink:"/hello-world/docs/reference/frontend/classes/common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher"},next:{title:"MessageHandlerMapping",permalink:"/hello-world/docs/reference/frontend/classes/common_web_core_messaging_handlers_MessageHandler.MessageHandlerMapping"}},i={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_config",id:"_config",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_logger",id:"_logger",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_msgBuilder",id:"_msgbuilder",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"_msgMeta",id:"_msgmeta",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"_requiresReply",id:"_requiresreply",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Accessors",id:"accessors",level:2},{value:"config",id:"config",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"isEntrypointClient",id:"isentrypointclient",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"isEntrypointLocal",id:"isentrypointlocal",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"isEntrypointServer",id:"isentrypointserver",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"logger",id:"logger",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"messageBuilder",id:"messagebuilder",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"Methods",id:"methods",level:2},{value:"begin",id:"begin",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"checkCommandReply",id:"checkcommandreply",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"end",id:"end",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"reportError",id:"reporterror",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-15",level:4}],m={toc:d},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/modules/common_web_core_messaging_handlers_MessageContext"},"common/web/core/messaging/handlers/MessageContext"),".MessageContext"),(0,a.kt)("p",null,"An execution context for messages dispatched by the message bus."),(0,a.kt)("p",null,"When a message handler gets executed (i.e., called by the message bus dispatchers), an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"MessageContext")," (or a subclass)\nis passed to the handler. This context can be seen as a ",(0,a.kt)("em",{parentName:"p"},"unit of work")," that exists during the execution of the handler. Its main task is to\nhold data that is specific to this single execution."),(0,a.kt)("p",null,"A message context is used as a context manager. In its ",(0,a.kt)("inlineCode",{parentName:"p"},"__exit__")," method, any exceptions will be catched, printed and passed on. This\nmakes tracing of errors that occur during message handling easier."),(0,a.kt)("p",null,"It is also possible to have message handlers receive custom subtypes of this class. See ",(0,a.kt)("inlineCode",{parentName:"p"},"WebComponent")," and its ",(0,a.kt)("inlineCode",{parentName:"p"},"create_service")," method for\ndetails."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"MessageContext"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_services_ServiceContext.ServiceContext"},(0,a.kt)("inlineCode",{parentName:"a"},"ServiceContext"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new MessageContext"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"msgMeta"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"msgBuilder"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"logger"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_core_messaging_handlers_MessageContext.MessageContext"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageContext"))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msgMeta")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/hello-world/docs/reference/frontend/classes/common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageMetaInformation"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The meta information of the message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msgBuilder")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/hello-world/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageBuilder.MessageBuilder"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageBuilder"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"A ",(0,a.kt)("inlineCode",{parentName:"td"},"MessageBuilder")," to be assigned to this context.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"logger")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/hello-world/docs/reference/frontend/classes/common_web_core_logging_LoggerProxy.LoggerProxy"},(0,a.kt)("inlineCode",{parentName:"a"},"LoggerProxy"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"A logger that is configured to automatically print the trace belonging to the message that caused the handler to be executed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"config")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/hello-world/docs/reference/frontend/classes/common_web_utils_config_Configuration.Configuration"},(0,a.kt)("inlineCode",{parentName:"a"},"Configuration"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The global component configuration.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_core_messaging_handlers_MessageContext.MessageContext"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageContext"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L35"},"common/web/core/messaging/handlers/MessageContext.ts:35")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"_config"},"_","config"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"_","config"),": ",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_utils_config_Configuration.Configuration"},(0,a.kt)("inlineCode",{parentName:"a"},"Configuration"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L25"},"common/web/core/messaging/handlers/MessageContext.ts:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_logger"},"_","logger"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"_","logger"),": ",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_core_logging_LoggerProxy.LoggerProxy"},(0,a.kt)("inlineCode",{parentName:"a"},"LoggerProxy"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L24"},"common/web/core/messaging/handlers/MessageContext.ts:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_msgbuilder"},"_","msgBuilder"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"_","msgBuilder"),": ",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageBuilder.MessageBuilder"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageBuilder"))),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L22"},"common/web/core/messaging/handlers/MessageContext.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_msgmeta"},"_","msgMeta"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"_","msgMeta"),": ",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageMetaInformation"))),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L21"},"common/web/core/messaging/handlers/MessageContext.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_requiresreply"},"_","requiresReply"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,a.kt)("strong",{parentName:"p"},"_","requiresReply"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L27"},"common/web/core/messaging/handlers/MessageContext.ts:27")),(0,a.kt)("h2",{id:"accessors"},"Accessors"),(0,a.kt)("h3",{id:"config"},"config"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"config"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_utils_config_Configuration.Configuration"},(0,a.kt)("inlineCode",{parentName:"a"},"Configuration"))),(0,a.kt)("p",null,"The global component configuration."),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_utils_config_Configuration.Configuration"},(0,a.kt)("inlineCode",{parentName:"a"},"Configuration"))),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L112"},"common/web/core/messaging/handlers/MessageContext.ts:112")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isentrypointclient"},"isEntrypointClient"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"isEntrypointClient"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Whether the message entered through the client."),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L91"},"common/web/core/messaging/handlers/MessageContext.ts:91")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isentrypointlocal"},"isEntrypointLocal"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"isEntrypointLocal"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Whether the message entered locally."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L77"},"common/web/core/messaging/handlers/MessageContext.ts:77")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isentrypointserver"},"isEntrypointServer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"isEntrypointServer"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Whether the message entered through the server."),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L84"},"common/web/core/messaging/handlers/MessageContext.ts:84")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"logger"},"logger"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"logger"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_core_logging_LoggerProxy.LoggerProxy"},(0,a.kt)("inlineCode",{parentName:"a"},"LoggerProxy"))),(0,a.kt)("p",null,"The logger to be used within this context."),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_core_logging_LoggerProxy.LoggerProxy"},(0,a.kt)("inlineCode",{parentName:"a"},"LoggerProxy"))),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L105"},"common/web/core/messaging/handlers/MessageContext.ts:105")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"messagebuilder"},"messageBuilder"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"messageBuilder"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageBuilder.MessageBuilder"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageBuilder"))),(0,a.kt)("p",null,"The message builder to be used within this context."),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_core_messaging_composers_MessageBuilder.MessageBuilder"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageBuilder"))),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L98"},"common/web/core/messaging/handlers/MessageContext.ts:98")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"begin"},"begin"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"begin"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"requiresReply"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Initiates execution within this context."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"requiresReply")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether a reply is required.")))),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L48"},"common/web/core/messaging/handlers/MessageContext.ts:48")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"checkcommandreply"},"checkCommandReply"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"checkCommandReply"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L68"},"common/web/core/messaging/handlers/MessageContext.ts:68")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"end"},"end"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"end"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Finishes execution within this context."),(0,a.kt)("h4",{id:"returns-9"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L55"},"common/web/core/messaging/handlers/MessageContext.ts:55")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"reporterror"},"reportError"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"reportError"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"err"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Reports an error occurred during context execution."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"err")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The error to report.")))),(0,a.kt)("h4",{id:"returns-10"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/core/messaging/handlers/MessageContext.ts#L64"},"common/web/core/messaging/handlers/MessageContext.ts:64")))}g.isMDXComponent=!0}}]);