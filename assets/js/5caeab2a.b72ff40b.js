"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const c={sidebar_label:"event",title:"core.messaging.event"},o=void 0,s={unversionedId:"reference/backend/core/messaging/event",id:"reference/backend/core/messaging/event",title:"core.messaging.event",description:"Event Objects",source:"@site/docs/reference/backend/core/messaging/event.md",sourceDirName:"reference/backend/core/messaging",slug:"/reference/backend/core/messaging/event",permalink:"/docs/reference/backend/core/messaging/event",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"event",title:"core.messaging.event"},sidebar:"backendSidebar",previous:{title:"message_dispatcher",permalink:"/docs/reference/backend/core/messaging/dispatchers/message_dispatcher"},next:{title:"message_context",permalink:"/docs/reference/backend/core/messaging/handlers/message_context"}},i={},l=[{value:"Event Objects",id:"event-objects",level:2},{value:"EventType",id:"eventtype",level:4}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"event-objects"},"Event Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass(frozen=True, kw_only=True)\nclass Event(Message)\n")),(0,a.kt)("p",null,"An event message."),(0,a.kt)("p",null,"Events are simple notifications that do not require a reply nor will ",(0,a.kt)("em",{parentName:"p"},"execute")," anything."),(0,a.kt)("h4",{id:"eventtype"},"EventType"),(0,a.kt)("p",null,"pylint: disable=invalid-name"))}d.isMDXComponent=!0}}]);