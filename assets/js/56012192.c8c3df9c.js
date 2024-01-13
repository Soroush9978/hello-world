"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={id:"common_web_ui_views_View.View",title:"Class: View",sidebar_label:"View",custom_edit_url:null},l=void 0,o={unversionedId:"reference/frontend/classes/common_web_ui_views_View.View",id:"reference/frontend/classes/common_web_ui_views_View.View",title:"Class: View",description:"common/web/ui/views/View.View",source:"@site/docs/reference/frontend/classes/common_web_ui_views_View.View.md",sourceDirName:"reference/frontend/classes",slug:"/reference/frontend/classes/common_web_ui_views_View.View",permalink:"/hello-world/docs/reference/frontend/classes/common_web_ui_views_View.View",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_web_ui_views_View.View",title:"Class: View",sidebar_label:"View",custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"NestedView",permalink:"/hello-world/docs/reference/frontend/classes/common_web_ui_views_NestedView.NestedView"},next:{title:"MainView",permalink:"/hello-world/docs/reference/frontend/classes/common_web_ui_views_main_MainView.MainView"}},d={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_routeName",id:"_routename",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_routeOptions",id:"_routeoptions",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_router",id:"_router",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"_subViews",id:"_subviews",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Accessors",id:"accessors",level:2},{value:"name",id:"name",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"subViews",id:"subviews",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Methods",id:"methods",level:2},{value:"defineRoute",id:"defineroute",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"mountRoute",id:"mountroute",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"navigateTo",id:"navigateto",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"route",id:"route",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-10",level:4}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/modules/common_web_ui_views_View"},"common/web/ui/views/View"),".View"),(0,i.kt)("p",null,"A class to help with routed views."),(0,i.kt)("p",null,"This class does not represent a view ",(0,i.kt)("em",{parentName:"p"},"per se"),", it is only used to work with the corresponding view.\nIt is therefore safe to instantiate this class and use its functions, as this doesn't automatically create a new view."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"View"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_ui_views_NestedView.NestedView"},(0,i.kt)("inlineCode",{parentName:"a"},"NestedView"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_ui_views_main_MainView.MainView"},(0,i.kt)("inlineCode",{parentName:"a"},"MainView"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new View"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"router"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"routeOptions?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subViews?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_ui_views_View.View"},(0,i.kt)("inlineCode",{parentName:"a"},"View"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"router")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Router")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Vue router.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The route name for this view.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"routeOptions?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"RouteRecordRaw")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Additional route options.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"subViews?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/hello-world/docs/reference/frontend/classes/common_web_ui_views_View.View"},(0,i.kt)("inlineCode",{parentName:"a"},"View")),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional sub-views of this view.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_ui_views_View.View"},(0,i.kt)("inlineCode",{parentName:"a"},"View"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/ui/views/View.ts#L22"},"common/web/ui/views/View.ts:22")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"_routename"},"_","routeName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"_","routeName"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/ui/views/View.ts#L11"},"common/web/ui/views/View.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_routeoptions"},"_","routeOptions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"_","routeOptions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"RouteRecordRaw")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/ui/views/View.ts#L12"},"common/web/ui/views/View.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_router"},"_","router"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"_","router"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Router")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/ui/views/View.ts#L10"},"common/web/ui/views/View.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_subviews"},"_","subViews"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"_","subViews"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_ui_views_View.View"},(0,i.kt)("inlineCode",{parentName:"a"},"View")),"[]"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/ui/views/View.ts#L14"},"common/web/ui/views/View.ts:14")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"name"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The route name of this view."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/ui/views/View.ts#L72"},"common/web/ui/views/View.ts:72")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subviews"},"subViews"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"subViews"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_ui_views_View.View"},(0,i.kt)("inlineCode",{parentName:"a"},"View")),"[]"),(0,i.kt)("p",null,"The sub-views of the views."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/classes/common_web_ui_views_View.View"},(0,i.kt)("inlineCode",{parentName:"a"},"View")),"[]"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/ui/views/View.ts#L79"},"common/web/ui/views/View.ts:79")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"defineroute"},"defineRoute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"defineRoute"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"RouteRecordRaw")),(0,i.kt)("p",null,"Defines the route for this view."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RouteRecordRaw")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/ui/views/View.ts#L53"},"common/web/ui/views/View.ts:53")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mountroute"},"mountRoute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"mountRoute"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"router"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"router")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Router"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/ui/views/View.ts#L32"},"common/web/ui/views/View.ts:32")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"navigateto"},"navigateTo"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"navigateTo"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"replace?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"query?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Navigates to (= activates) this view."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"replace")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether to replace the current browsing history entry.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"query?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"LocationQueryRaw")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Additional query (URL) parameters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"RouteParamsRaw")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Additional URL placeholder parameters.")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A promise that can be used to react to page load events.")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/ui/views/View.ts#L64"},"common/web/ui/views/View.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"route"},"route"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"route"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"RouteRecordRaw")),(0,i.kt)("p",null,"Gets the route of this view."),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RouteRecordRaw")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/5c44989/src/common/web/ui/views/View.ts#L39"},"common/web/ui/views/View.ts:39")))}m.isMDXComponent=!0}}]);