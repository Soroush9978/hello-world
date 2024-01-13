"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_label:"channel",title:"core.messaging.channel"},c=void 0,o={unversionedId:"reference/backend/core/messaging/channel",id:"reference/backend/core/messaging/channel",title:"core.messaging.channel",description:"Channel Objects",source:"@site/docs/reference/backend/core/messaging/channel.md",sourceDirName:"reference/backend/core/messaging",slug:"/reference/backend/core/messaging/channel",permalink:"/docs/reference/backend/core/messaging/channel",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"channel",title:"core.messaging.channel"},sidebar:"backendSidebar",previous:{title:"logger_proxy",permalink:"/docs/reference/backend/core/logging/logger_proxy"},next:{title:"command",permalink:"/docs/reference/backend/core/messaging/command"}},i={},s=[{value:"Channel Objects",id:"channel-objects",level:2},{value:"Type Objects",id:"type-objects",level:2},{value:"target_id",id:"target_id",level:4},{value:"is_local",id:"is_local",level:4},{value:"is_direct",id:"is_direct",level:4},{value:"local",id:"local",level:4},{value:"direct",id:"direct",level:4}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"channel-objects"},"Channel Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass_json\n\n@dataclass(frozen=True)\nclass Channel()\n")),(0,a.kt)("p",null,"The target of a message."),(0,a.kt)("p",null,"Message targets are represented by so-called ",(0,a.kt)("em",{parentName:"p"},"channels"),". These can be ",(0,a.kt)("em",{parentName:"p"},"local")," for messages that will only\nbe dispatched locally and not across the network or ",(0,a.kt)("em",{parentName:"p"},"direct")," for specific (remote) targets."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")," - The channel type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target")," - The actual target in case of a direct channel.")),(0,a.kt)("h2",{id:"type-objects"},"Type Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Type(StrEnum)\n")),(0,a.kt)("p",null,"The different channel types."),(0,a.kt)("h4",{id:"target_id"},"target","_","id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef target_id() -> UnitID | None\n")),(0,a.kt)("p",null,"Generates a ",(0,a.kt)("inlineCode",{parentName:"p"},"UnitID")," from the target of this channel."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  The component ID of the target, if any."),(0,a.kt)("h4",{id:"is_local"},"is","_","local"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef is_local() -> bool\n")),(0,a.kt)("p",null,"Whether this is a local channel."),(0,a.kt)("h4",{id:"is_direct"},"is","_","direct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef is_direct() -> bool\n")),(0,a.kt)("p",null,"Whether this is a direct channel."),(0,a.kt)("h4",{id:"local"},"local"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@staticmethod\ndef local() -> "Channel"\n')),(0,a.kt)("p",null,"Creates a new local channel."),(0,a.kt)("h4",{id:"direct"},"direct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@staticmethod\ndef direct(target: str | UnitID) -> "Channel"\n')),(0,a.kt)("p",null,"Creates a new direct channel."))}u.isMDXComponent=!0}}]);