"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=i(r),u=a,d=p["".concat(c,".").concat(u)]||p[u]||g[u]||s;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4726:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_label:"message_composer",title:"core.messaging.composers.message_composer"},o=void 0,l={unversionedId:"reference/backend/core/messaging/composers/message_composer",id:"reference/backend/core/messaging/composers/message_composer",title:"core.messaging.composers.message_composer",description:"MessageComposer Objects",source:"@site/docs/reference/backend/core/messaging/composers/message_composer.md",sourceDirName:"reference/backend/core/messaging/composers",slug:"/reference/backend/core/messaging/composers/message_composer",permalink:"/hello-world/docs/reference/backend/core/messaging/composers/message_composer",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"message_composer",title:"core.messaging.composers.message_composer"},sidebar:"backendSidebar",previous:{title:"message_builder",permalink:"/hello-world/docs/reference/backend/core/messaging/composers/message_builder"},next:{title:"command_dispatcher",permalink:"/hello-world/docs/reference/backend/core/messaging/dispatchers/command_dispatcher"}},c={},i=[{value:"MessageComposer Objects",id:"messagecomposer-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"before",id:"before",level:4},{value:"emit",id:"emit",level:4}],m={toc:i},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"messagecomposer-objects"},"MessageComposer Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class MessageComposer(abc.ABC)\n")),(0,a.kt)("p",null,"A class to collect all information necessary to create and emit a message."),(0,a.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(origin_id: UnitID,\n             message_bus: MessageBusProtocol,\n             msg_type: type[MessageType],\n             chain: Message | None = None,\n             **kwargs)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"origin_id")," - The component identifier of the origin of newly created messages."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message_bus")," - The global message bus to use."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msg_type")," - The message type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chain")," - A message that acts as the ",(0,a.kt)("em",{parentName:"li"},"predecessor")," of the new message. Used to keep the same trace for multiple messages."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"**kwargs")," - Additional message parameters.")),(0,a.kt)("h4",{id:"before"},"before"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def before(callback: BeforeDispatchCallback) -> typing.Self\n")),(0,a.kt)("p",null,"Adds a callback that will be called immediately before the message is dispatched."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"callback")," - The callback to add.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  This composer instance to allow call chaining."),(0,a.kt)("h4",{id:"emit"},"emit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def emit(target: Channel) -> None\n")),(0,a.kt)("p",null,"Sends the built message through the message bus."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target")," - The target of the message.")))}g.isMDXComponent=!0}}]);