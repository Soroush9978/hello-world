"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8577],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=a.createContext({}),l=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},d=function(n){var e=l(n.components);return a.createElement(o.Provider,{value:e},n.children)},c="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,o=n.parentName,d=p(n,["components","mdxType","originalType","parentName"]),c=l(t),f=r,m=c["".concat(o,".").concat(f)]||c[f]||u[f]||i;return t?a.createElement(m,s(s({ref:e},d),{},{components:t})):a.createElement(m,s({ref:e},d))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,s=new Array(i);s[0]=f;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=n,p[c]="string"==typeof n?n:r,s[1]=p;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1708:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const i={id:"frontend_src_ui_snapins_SnapIn.SnapIn",title:"Class: SnapIn",sidebar_label:"SnapIn",custom_edit_url:null},s=void 0,p={unversionedId:"reference/frontend/classes/frontend_src_ui_snapins_SnapIn.SnapIn",id:"reference/frontend/classes/frontend_src_ui_snapins_SnapIn.SnapIn",title:"Class: SnapIn",description:"frontend/src/ui/snapins/SnapIn.SnapIn",source:"@site/docs/reference/frontend/classes/frontend_src_ui_snapins_SnapIn.SnapIn.md",sourceDirName:"reference/frontend/classes",slug:"/reference/frontend/classes/frontend_src_ui_snapins_SnapIn.SnapIn",permalink:"/docs/reference/frontend/classes/frontend_src_ui_snapins_SnapIn.SnapIn",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"frontend_src_ui_snapins_SnapIn.SnapIn",title:"Class: SnapIn",sidebar_label:"SnapIn",custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"UpdateProjectAction",permalink:"/docs/reference/frontend/classes/frontend_src_ui_actions_UpdateProjectAction.UpdateProjectAction"},next:{title:"SnapInsCatalog",permalink:"/docs/reference/frontend/classes/frontend_src_ui_snapins_SnapInsCatalog.SnapInsCatalog"}},o={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_options",id:"_options",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_snapInID",id:"_snapinid",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Accessors",id:"accessors",level:2},{value:"options",id:"options",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"snapInID",id:"snapinid",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"hasTabPanel",id:"hastabpanel",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"isOptional",id:"isoptional",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4}],d={toc:l},c="wrapper";function u(n){let{components:e,...t}=n;return(0,r.kt)(c,(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/frontend_src_ui_snapins_SnapIn"},"frontend/src/ui/snapins/SnapIn"),".SnapIn"),(0,r.kt)("p",null,"A snap-in represents a certain feature aspect of a project that integrates itself automatically into the UI."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SnapIn"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/frontend_src_ui_snapins_dmp_DataManagementPlanSnapIn.DataManagementPlanSnapIn"},(0,r.kt)("inlineCode",{parentName:"a"},"DataManagementPlanSnapIn"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/frontend_src_ui_snapins_metadata_MetadataSnapIn.MetadataSnapIn"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataSnapIn"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/frontend_src_ui_snapins_summary_SummarySnapIn.SummarySnapIn"},(0,r.kt)("inlineCode",{parentName:"a"},"SummarySnapIn"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new SnapIn"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"snapInID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/frontend_src_ui_snapins_SnapIn.SnapIn"},(0,r.kt)("inlineCode",{parentName:"a"},"SnapIn"))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"snapInID")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the snap-in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/interfaces/frontend_src_ui_snapins_SnapIn.SnapInOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"SnapInOptions"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The snap-in options.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/frontend_src_ui_snapins_SnapIn.SnapIn"},(0,r.kt)("inlineCode",{parentName:"a"},"SnapIn"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/frontend/src/ui/snapins/SnapIn.ts#L50"},"frontend/src/ui/snapins/SnapIn.ts:50")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_options"},"_","options"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"_","options"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/interfaces/frontend_src_ui_snapins_SnapIn.SnapInOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"SnapInOptions"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/frontend/src/ui/snapins/SnapIn.ts#L44"},"frontend/src/ui/snapins/SnapIn.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_snapinid"},"_","snapInID"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"_","snapInID"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/frontend/src/ui/snapins/SnapIn.ts#L43"},"frontend/src/ui/snapins/SnapIn.ts:43")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"options"},"options"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"options"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/interfaces/frontend_src_ui_snapins_SnapIn.SnapInOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"SnapInOptions"))),(0,r.kt)("p",null,"The snap-in options."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/interfaces/frontend_src_ui_snapins_SnapIn.SnapInOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"SnapInOptions"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/frontend/src/ui/snapins/SnapIn.ts#L65"},"frontend/src/ui/snapins/SnapIn.ts:65")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"snapinid"},"snapInID"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"snapInID"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The ID of the snap-in."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/frontend/src/ui/snapins/SnapIn.ts#L58"},"frontend/src/ui/snapins/SnapIn.ts:58")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"hastabpanel"},"hasTabPanel"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"hasTabPanel"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether this snap-in has a tab panel."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/frontend/src/ui/snapins/SnapIn.ts#L79"},"frontend/src/ui/snapins/SnapIn.ts:79")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isoptional"},"isOptional"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isOptional"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether this snap-in is optional."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/frontend/src/ui/snapins/SnapIn.ts#L72"},"frontend/src/ui/snapins/SnapIn.ts:72")))}u.isMDXComponent=!0}}]);