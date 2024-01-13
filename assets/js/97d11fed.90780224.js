"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8160],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(a),c=r,u=p["".concat(l,".").concat(c)]||p[c]||g[c]||s;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<s;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2023:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const s={id:"common_web_core_messaging_MessageRouter.MessageRouter",title:"Class: MessageRouter",sidebar_label:"MessageRouter",custom_edit_url:null},o=void 0,i={unversionedId:"reference/frontend/classes/common_web_core_messaging_MessageRouter.MessageRouter",id:"reference/frontend/classes/common_web_core_messaging_MessageRouter.MessageRouter",title:"Class: MessageRouter",description:"common/web/core/messaging/MessageRouter.MessageRouter",source:"@site/docs/reference/frontend/classes/common_web_core_messaging_MessageRouter.MessageRouter.md",sourceDirName:"reference/frontend/classes",slug:"/reference/frontend/classes/common_web_core_messaging_MessageRouter.MessageRouter",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_MessageRouter.MessageRouter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_web_core_messaging_MessageRouter.MessageRouter",title:"Class: MessageRouter",sidebar_label:"MessageRouter",custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"MessageBus",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_MessageBus.MessageBus"},next:{title:"MessageTypesCatalog",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_MessageTypesCatalog.MessageTypesCatalog"}},l={},m=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_compID",id:"_compid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"checkLocalRouting",id:"checklocalrouting",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"checkRemoteRouting",id:"checkremoterouting",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"verifyDirectMessage",id:"verifydirectmessage",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"verifyLocalMessage",id:"verifylocalmessage",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"verifyMessage",id:"verifymessage",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4}],d={toc:m},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_core_messaging_MessageRouter"},"common/web/core/messaging/MessageRouter"),".MessageRouter"),(0,r.kt)("p",null,"Message routing rules and logic."),(0,r.kt)("p",null,"When a message enters the message bus, it is first checked for its validity.\nAfterwards, the router decides through which channels (local, remote) it needs to be sent."),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new MessageRouter"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"compID"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_MessageRouter.MessageRouter"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageRouter"))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"compID")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},(0,r.kt)("inlineCode",{parentName:"a"},"UnitID"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The component id (required to decide whether we match a given direct target).")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_MessageRouter.MessageRouter"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageRouter"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/MessageRouter.ts#L17"},"common/web/core/messaging/MessageRouter.ts:17")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_compid"},"_","compID"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"_","compID"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},(0,r.kt)("inlineCode",{parentName:"a"},"UnitID"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/MessageRouter.ts#L12"},"common/web/core/messaging/MessageRouter.ts:12")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"checklocalrouting"},"checkLocalRouting"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"checkLocalRouting"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"msgMeta"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Checks if the message should be routed locally."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msgMeta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageMetaInformation"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message meta information.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/MessageRouter.ts#L43"},"common/web/core/messaging/MessageRouter.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"checkremoterouting"},"checkRemoteRouting"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"checkRemoteRouting"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"msgMeta"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Checks if the message should be routed remotely."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msgMeta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageMetaInformation"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message meta information.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/MessageRouter.ts#L61"},"common/web/core/messaging/MessageRouter.ts:61")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"verifydirectmessage"},"verifyDirectMessage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"verifyDirectMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"msgMeta"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msgMeta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageMetaInformation")))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/MessageRouter.ts#L71"},"common/web/core/messaging/MessageRouter.ts:71")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"verifylocalmessage"},"verifyLocalMessage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"verifyLocalMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"msgMeta"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msgMeta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageMetaInformation")))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/MessageRouter.ts#L65"},"common/web/core/messaging/MessageRouter.ts:65")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"verifymessage"},"verifyMessage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"verifyMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"msg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"msgMeta"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Verifies whether a message may enter the message bus."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message that wants to enter the network engine.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msgMeta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageMetaInformation"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message meta information.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"Error - In case the message is not valid to enter the message bus."),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/MessageRouter.ts#L29"},"common/web/core/messaging/MessageRouter.ts:29")))}g.isMDXComponent=!0}}]);