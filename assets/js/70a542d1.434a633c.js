"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5556],{3905:(e,r,n)=>{n.d(r,{Zo:()=>i,kt:()=>g});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function m(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},i=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),l=p(n),u=o,g=l["".concat(c,".").concat(u)]||l[u]||d[u]||a;return n?t.createElement(g,s(s({ref:r},i),{},{components:n})):t.createElement(g,s({ref:r},i))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var m={};for(var c in r)hasOwnProperty.call(r,c)&&(m[c]=r[c]);m.originalType=e,m[l]="string"==typeof e?e:o,s[1]=m;for(var p=2;p<a;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5692:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>m,toc:()=>p});var t=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"command_reply_composer",title:"core.messaging.composers.command_reply_composer"},s=void 0,m={unversionedId:"reference/backend/core/messaging/composers/command_reply_composer",id:"reference/backend/core/messaging/composers/command_reply_composer",title:"core.messaging.composers.command_reply_composer",description:"CommandReplyComposer Objects",source:"@site/docs/reference/backend/core/messaging/composers/command_reply_composer.md",sourceDirName:"reference/backend/core/messaging/composers",slug:"/reference/backend/core/messaging/composers/command_reply_composer",permalink:"/docs/reference/backend/core/messaging/composers/command_reply_composer",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"command_reply_composer",title:"core.messaging.composers.command_reply_composer"},sidebar:"backendSidebar",previous:{title:"command_composer",permalink:"/docs/reference/backend/core/messaging/composers/command_composer"},next:{title:"event_composer",permalink:"/docs/reference/backend/core/messaging/composers/event_composer"}},c={},p=[{value:"CommandReplyComposer Objects",id:"commandreplycomposer-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"emit",id:"emit",level:4}],i={toc:p},l="wrapper";function d(e){let{components:r,...n}=e;return(0,o.kt)(l,(0,t.Z)({},i,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"commandreplycomposer-objects"},"CommandReplyComposer Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class CommandReplyComposer(MessageComposer)\n")),(0,o.kt)("p",null,"Composer for ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandReply")," messages."),(0,o.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(origin_id: UnitID, message_bus: MessageBusProtocol,\n             msg_type: type[MessageType], command: CommandType, **kwargs)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"origin_id")," - The component identifier of the origin of newly created messages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message_bus")," - The global message bus to use."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"msg_type")," - The message type."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"command")," - The ",(0,o.kt)("inlineCode",{parentName:"li"},"Command")," this reply is based on."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"**kwargs")," - Additional message parameters.")),(0,o.kt)("h4",{id:"emit"},"emit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def emit() -> None\n")),(0,o.kt)("p",null,"Sends the built message through the message bus."))}d.isMDXComponent=!0}}]);