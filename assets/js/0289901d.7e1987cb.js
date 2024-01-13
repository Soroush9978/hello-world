"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"items_catalog",title:"utils.items_catalog"},l=void 0,o={unversionedId:"reference/backend/utils/items_catalog",id:"reference/backend/utils/items_catalog",title:"utils.items_catalog",description:"ItemType",source:"@site/docs/reference/backend/utils/items_catalog.md",sourceDirName:"reference/backend/utils",slug:"/reference/backend/utils/items_catalog",permalink:"/hello-world/docs/reference/backend/utils/items_catalog",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"items_catalog",title:"utils.items_catalog"},sidebar:"backendSidebar",previous:{title:"setting_id",permalink:"/hello-world/docs/reference/backend/utils/config/setting_id"},next:{title:"random",permalink:"/hello-world/docs/reference/backend/utils/random"}},s={},c=[{value:"ItemType",id:"itemtype",level:4},{value:"ItemsCatalog Objects",id:"itemscatalog-objects",level:2},{value:"define",id:"define",level:4},{value:"register_item",id:"register_item",level:4},{value:"find_item",id:"find_item",level:4},{value:"items",id:"items",level:4}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"itemtype"},"ItemType"),(0,a.kt)("p",null,"pylint: disable=invalid-name"),(0,a.kt)("h2",{id:"itemscatalog-objects"},"ItemsCatalog Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class ItemsCatalog(typing.Generic[ItemType])\n")),(0,a.kt)("p",null,"Generic catalog to keep track of ",'"',"registered",'"'," items (where the definition of ",'"',"item",'"'," is completely context dependant)."),(0,a.kt)("p",null,"This is a globally accessible list of these items, associated with their respective names."),(0,a.kt)("h4",{id:"define"},"define"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef define()\n")),(0,a.kt)("p",null,"A decorator to define a new item catalog."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes"),":"),(0,a.kt)("p",null,"  This decorator must always be used for new item catalogs; otherwise, data corruption might occur."),(0,a.kt)("h4",{id:"register_item"},"register","_","item"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef register_item(cls, name: str, item: ItemType) -> None\n")),(0,a.kt)("p",null,"Registers a new item."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - The item name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"item")," - The item.")),(0,a.kt)("h4",{id:"find_item"},"find","_","item"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef find_item(cls, name: str) -> ItemType | None\n")),(0,a.kt)("p",null,"Finds the item associated with the given ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - The item name.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  The associated item, if any."),(0,a.kt)("h4",{id:"items"},"items"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef items(cls) -> typing.Tuple[str, ItemType]\n")),(0,a.kt)("p",null,"Generator to iterate over all registered items."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  Tuple consisting of the item name and the item itself."))}u.isMDXComponent=!0}}]);