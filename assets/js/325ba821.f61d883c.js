"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=m(n),c=a,g=k["".concat(s,".").concat(c)]||k[c]||p[c]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[k]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={id:"common_web_core_messaging_networking_NetworkRouter.NetworkRouter",title:"Class: NetworkRouter",sidebar_label:"NetworkRouter",custom_edit_url:null},i=void 0,l={unversionedId:"reference/frontend/classes/common_web_core_messaging_networking_NetworkRouter.NetworkRouter",id:"reference/frontend/classes/common_web_core_messaging_networking_NetworkRouter.NetworkRouter",title:"Class: NetworkRouter",description:"common/web/core/messaging/networking/NetworkRouter.NetworkRouter",source:"@site/docs/reference/frontend/classes/common_web_core_messaging_networking_NetworkRouter.NetworkRouter.md",sourceDirName:"reference/frontend/classes",slug:"/reference/frontend/classes/common_web_core_messaging_networking_NetworkRouter.NetworkRouter",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_networking_NetworkRouter.NetworkRouter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_web_core_messaging_networking_NetworkRouter.NetworkRouter",title:"Class: NetworkRouter",sidebar_label:"NetworkRouter",custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"NetworkEngine",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_networking_NetworkEngine.NetworkEngine"},next:{title:"Connector",permalink:"/docs/reference/frontend/classes/common_web_data_entities_Connector.Connector"}},s={},m=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_compID",id:"_compid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"checkClientRouting",id:"checkclientrouting",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"checkLocalRouting",id:"checklocalrouting",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"verifyDirectMessage",id:"verifydirectmessage",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"verifyLocalMessage",id:"verifylocalmessage",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"verifyMessage",id:"verifymessage",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4}],d={toc:m},k="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_core_messaging_networking_NetworkRouter"},"common/web/core/messaging/networking/NetworkRouter"),".NetworkRouter"),(0,a.kt)("p",null,"Network routing rules and logic."),(0,a.kt)("p",null,"When a message enters the network engine in order to be sent to remote targets, it is first checked for its\nvalidity. Afterwards, the router decides through which channels (local, client) it needs to be sent."),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new NetworkRouter"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"compID"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_networking_NetworkRouter.NetworkRouter"},(0,a.kt)("inlineCode",{parentName:"a"},"NetworkRouter"))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"compID")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},(0,a.kt)("inlineCode",{parentName:"a"},"UnitID"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The component id (required to decide whether we match a given direct target).")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_networking_NetworkRouter.NetworkRouter"},(0,a.kt)("inlineCode",{parentName:"a"},"NetworkRouter"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/networking/NetworkRouter.ts#L25"},"common/web/core/messaging/networking/NetworkRouter.ts:25")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"_compid"},"_","compID"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"_","compID"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},(0,a.kt)("inlineCode",{parentName:"a"},"UnitID"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/networking/NetworkRouter.ts#L20"},"common/web/core/messaging/networking/NetworkRouter.ts:20")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"checkclientrouting"},"checkClientRouting"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"checkClientRouting"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"direction"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"msgMeta"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Checks if the message should be routed through the client."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"direction")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_core_messaging_networking_NetworkRouter.NetworkRouterDirection"},(0,a.kt)("inlineCode",{parentName:"a"},"NetworkRouterDirection"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The direction (",(0,a.kt)("em",{parentName:"td"},"IN")," or ",(0,a.kt)("em",{parentName:"td"},"OUT"),") of the message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,a.kt)("inlineCode",{parentName:"a"},"Message"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The actual message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msgMeta")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageMetaInformation"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The message meta information.")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Whether client routing should happen."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/networking/NetworkRouter.ts#L75"},"common/web/core/messaging/networking/NetworkRouter.ts:75")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"checklocalrouting"},"checkLocalRouting"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"checkLocalRouting"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"direction"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"msgMeta"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Checks if the message should be routed locally (dispatched via the message bus)."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"direction")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_core_messaging_networking_NetworkRouter.NetworkRouterDirection"},(0,a.kt)("inlineCode",{parentName:"a"},"NetworkRouterDirection"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The direction (",(0,a.kt)("em",{parentName:"td"},"IN")," or ",(0,a.kt)("em",{parentName:"td"},"OUT"),") of the message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,a.kt)("inlineCode",{parentName:"a"},"Message"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The actual message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msgMeta")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageMetaInformation"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The message meta information.")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Whether local routing should happen."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/networking/NetworkRouter.ts#L54"},"common/web/core/messaging/networking/NetworkRouter.ts:54")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"verifydirectmessage"},"verifyDirectMessage"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"verifyDirectMessage"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"direction"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"msg"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"direction")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_core_messaging_networking_NetworkRouter.NetworkRouterDirection"},(0,a.kt)("inlineCode",{parentName:"a"},"NetworkRouterDirection")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,a.kt)("inlineCode",{parentName:"a"},"Message")))))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/networking/NetworkRouter.ts#L85"},"common/web/core/messaging/networking/NetworkRouter.ts:85")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"verifylocalmessage"},"verifyLocalMessage"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"verifyLocalMessage"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"direction"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"msg"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"direction")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_core_messaging_networking_NetworkRouter.NetworkRouterDirection"},(0,a.kt)("inlineCode",{parentName:"a"},"NetworkRouterDirection")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,a.kt)("inlineCode",{parentName:"a"},"Message")))))),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/networking/NetworkRouter.ts#L80"},"common/web/core/messaging/networking/NetworkRouter.ts:80")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"verifymessage"},"verifyMessage"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"verifyMessage"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"direction"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"msg"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Verifies whether a message may enter the network engine."),(0,a.kt)("h4",{id:"parameters-5"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"direction")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/enums/common_web_core_messaging_networking_NetworkRouter.NetworkRouterDirection"},(0,a.kt)("inlineCode",{parentName:"a"},"NetworkRouterDirection"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The direction (",(0,a.kt)("em",{parentName:"td"},"IN")," or ",(0,a.kt)("em",{parentName:"td"},"OUT"),") of the message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"msg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,a.kt)("inlineCode",{parentName:"a"},"Message"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The message that wants to enter the network engine.")))),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"Error - In case the message is not valid to enter the network engine."),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/networking/NetworkRouter.ts#L37"},"common/web/core/messaging/networking/NetworkRouter.ts:37")))}p.isMDXComponent=!0}}]);