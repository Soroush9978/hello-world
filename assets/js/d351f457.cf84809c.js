"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5239],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,f=d["".concat(s,".").concat(u)]||d[u]||g[u]||a;return r?o.createElement(f,c(c({ref:t},i),{},{components:r})):o.createElement(f,c({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},824:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_label:"storage_pool",title:"data.storage.storage_pool"},c=void 0,l={unversionedId:"reference/backend/data/storage/storage_pool",id:"reference/backend/data/storage/storage_pool",title:"data.storage.storage_pool",description:"StoragePool Objects",source:"@site/docs/reference/backend/data/storage/storage_pool.md",sourceDirName:"reference/backend/data/storage",slug:"/reference/backend/data/storage/storage_pool",permalink:"/docs/reference/backend/data/storage/storage_pool",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"storage_pool",title:"data.storage.storage_pool"},sidebar:"backendSidebar",previous:{title:"storage_exception",permalink:"/docs/reference/backend/data/storage/storage_exception"},next:{title:"connector_verifier",permalink:"/docs/reference/backend/data/verifiers/connector_verifier"}},s={},p=[{value:"StoragePool Objects",id:"storagepool-objects",level:2},{value:"connector_storage",id:"connector_storage",level:4},{value:"project_storage",id:"project_storage",level:4}],i={toc:p},d="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"storagepool-objects"},"StoragePool Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class StoragePool(abc.ABC)\n")),(0,n.kt)("p",null,"A collection of all data storages."),(0,n.kt)("h4",{id:"connector_storage"},"connector","_","storage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@property\n@abc.abstractmethod\ndef connector_storage() -> ConnectorStorage\n")),(0,n.kt)("p",null,"The connector storage."),(0,n.kt)("h4",{id:"project_storage"},"project","_","storage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@property\n@abc.abstractmethod\ndef project_storage() -> ProjectStorage\n")),(0,n.kt)("p",null,"The project storage."))}g.isMDXComponent=!0}}]);