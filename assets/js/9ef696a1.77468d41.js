"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1248],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=c,d=u["".concat(s,".").concat(f)]||u[f]||v[f]||o;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function d(e,r){var t=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:c,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6012:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(7462),c=(t(7294),t(3905));const o={sidebar_label:"network_service",title:"services.network_service"},a=void 0,i={unversionedId:"reference/backend/services/network_service",id:"reference/backend/services/network_service",title:"services.network_service",description:"create\\network\\service",source:"@site/docs/reference/backend/services/network_service.md",sourceDirName:"reference/backend/services",slug:"/reference/backend/services/network_service",permalink:"/docs/reference/backend/services/network_service",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"network_service",title:"services.network_service"},sidebar:"backendSidebar",previous:{title:"component_service",permalink:"/docs/reference/backend/services/component_service"},next:{title:"service",permalink:"/docs/reference/backend/services/service"}},s={},l=[{value:"create_network_service",id:"create_network_service",level:4}],p={toc:l},u="wrapper";function v(e){let{components:r,...t}=e;return(0,c.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h4",{id:"create_network_service"},"create","_","network","_","service"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"def create_network_service(comp: BackendComponent) -> Service\n")),(0,c.kt)("p",null,"Creates the network service that reacts to general networking-related messages."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"comp")," - The main component instance.")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Returns"),":"),(0,c.kt)("p",null,"  The newly created service."))}v.isMDXComponent=!0}}]);