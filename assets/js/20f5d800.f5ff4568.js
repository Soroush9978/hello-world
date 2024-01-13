"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),u=a,d=f["".concat(m,".").concat(u)]||f[u]||p[u]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"event_meta_information",title:"core.messaging.meta.event_meta_information"},i=void 0,c={unversionedId:"reference/backend/core/messaging/meta/event_meta_information",id:"reference/backend/core/messaging/meta/event_meta_information",title:"core.messaging.meta.event_meta_information",description:"EventMetaInformation Objects",source:"@site/docs/reference/backend/core/messaging/meta/event_meta_information.md",sourceDirName:"reference/backend/core/messaging/meta",slug:"/reference/backend/core/messaging/meta/event_meta_information",permalink:"/docs/reference/backend/core/messaging/meta/event_meta_information",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"event_meta_information",title:"core.messaging.meta.event_meta_information"},sidebar:"backendSidebar",previous:{title:"command_reply_meta_information",permalink:"/docs/reference/backend/core/messaging/meta/command_reply_meta_information"},next:{title:"message_meta_information",permalink:"/docs/reference/backend/core/messaging/meta/message_meta_information"}},m={},s=[{value:"EventMetaInformation Objects",id:"eventmetainformation-objects",level:2}],l={toc:s},f="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"eventmetainformation-objects"},"EventMetaInformation Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@dataclasses.dataclass(frozen=True, kw_only=True)\nclass EventMetaInformation(MessageMetaInformation)\n")),(0,a.kt)("p",null,"Message meta information specific to ",(0,a.kt)("inlineCode",{parentName:"p"},"Event"),"."))}p.isMDXComponent=!0}}]);