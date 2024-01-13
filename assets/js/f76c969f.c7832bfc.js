"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=m(n),c=a,b=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return n?r.createElement(b,o(o({ref:t},d),{},{components:n})):r.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={id:"common_web_utils_DeepMerge",title:"Module: common/web/utils/DeepMerge",sidebar_label:"common/web/utils/DeepMerge",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"reference/frontend/modules/common_web_utils_DeepMerge",id:"reference/frontend/modules/common_web_utils_DeepMerge",title:"Module: common/web/utils/DeepMerge",description:"Functions",source:"@site/docs/reference/frontend/modules/common_web_utils_DeepMerge.md",sourceDirName:"reference/frontend/modules",slug:"/reference/frontend/modules/common_web_utils_DeepMerge",permalink:"/docs/reference/frontend/modules/common_web_utils_DeepMerge",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_web_utils_DeepMerge",title:"Module: common/web/utils/DeepMerge",sidebar_label:"common/web/utils/DeepMerge",sidebar_position:0,custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"common/web/ui/views/main/MainView",permalink:"/docs/reference/frontend/modules/common_web_ui_views_main_MainView"},next:{title:"common/web/utils/ItemsCatalog",permalink:"/docs/reference/frontend/modules/common_web_utils_ItemsCatalog"}},p={},m=[{value:"Functions",id:"functions",level:2},{value:"deepClone",id:"deepclone",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"deepMerge",id:"deepmerge",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:m},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"deepclone"},"deepClone"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"deepClone"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ObjType"),">","(",(0,a.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"source?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjType")),(0,a.kt)("p",null,"Deep-clones an object into another one."),(0,a.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ObjType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"object"))))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"target")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"MergeObjectType")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The target object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"source?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"MergeObjectType")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The source object, if any.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ObjType")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/DeepMerge.ts#L41"},"common/web/utils/DeepMerge.ts:41")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"deepmerge"},"deepMerge"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"deepMerge"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"ObjType"),">","(",(0,a.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"...sources"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjType")),(0,a.kt)("p",null,"Deep-merge two objects."),(0,a.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ObjType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"object"))))),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"target")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"MergeObjectType")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The target object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"...sources")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"MergeObjectType"),"[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The source objects to merge into the target.")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ObjType")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/DeepMerge.ts#L13"},"common/web/utils/DeepMerge.ts:13")))}u.isMDXComponent=!0}}]);