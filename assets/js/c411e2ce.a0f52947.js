"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4374],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=n,b=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?a.createElement(b,c(c({ref:t},l),{},{components:r})):a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_label:"project_feature",title:"data.entities.features.project_feature"},c=void 0,i={unversionedId:"reference/backend/data/entities/features/project_feature",id:"reference/backend/data/entities/features/project_feature",title:"data.entities.features.project_feature",description:"ProjectFeature Objects",source:"@site/docs/reference/backend/data/entities/features/project_feature.md",sourceDirName:"reference/backend/data/entities/features",slug:"/reference/backend/data/entities/features/project_feature",permalink:"/hello-world/docs/reference/backend/data/entities/features/project_feature",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"project_feature",title:"data.entities.features.project_feature"},sidebar:"backendSidebar",previous:{title:"metadata_feature",permalink:"/hello-world/docs/reference/backend/data/entities/features/metadata_feature"},next:{title:"project_features",permalink:"/hello-world/docs/reference/backend/data/entities/features/project_features"}},s={},u=[{value:"ProjectFeature Objects",id:"projectfeature-objects",level:2}],l={toc:u},f="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"projectfeature-objects"},"ProjectFeature Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass_json\n\n@dataclass(frozen=True, kw_only=True)\nclass ProjectFeature(abc.ABC)\n")),(0,n.kt)("p",null,"Base data class for a project feature."))}p.isMDXComponent=!0}}]);