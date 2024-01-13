"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5300],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),v=c,f=u["".concat(a,".").concat(v)]||u[v]||d[v]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,s=new Array(o);s[0]=v;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[u]="string"==typeof e?e:c,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},2438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),c=(r(7294),r(3905));const o={sidebar_label:"service_context",title:"services.service_context"},s=void 0,i={unversionedId:"reference/backend/services/service_context",id:"reference/backend/services/service_context",title:"services.service_context",description:"ServiceContext Objects",source:"@site/docs/reference/backend/services/service_context.md",sourceDirName:"reference/backend/services",slug:"/reference/backend/services/service_context",permalink:"/docs/reference/backend/services/service_context",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"service_context",title:"services.service_context"},sidebar:"backendSidebar",previous:{title:"service",permalink:"/docs/reference/backend/services/service"},next:{title:"component_setting_ids",permalink:"/docs/reference/backend/settings/component_setting_ids"}},a={},l=[{value:"ServiceContext Objects",id:"servicecontext-objects",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,c.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"servicecontext-objects"},"ServiceContext Objects"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class ServiceContext(MessageContext)\n")),(0,c.kt)("p",null,"An execution context for messages dispatched by the message bus to a service."),(0,c.kt)("p",null,"This class is an extension to the more general ",(0,c.kt)("inlineCode",{parentName:"p"},"MessageContext")," specifically used by ",(0,c.kt)("inlineCode",{parentName:"p"},"Service")," and its message handlers."))}d.isMDXComponent=!0}}]);