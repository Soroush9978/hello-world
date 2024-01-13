"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1220],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),g=r,f=p["".concat(m,".").concat(g)]||p[g]||c[g]||s;return t?a.createElement(f,o(o({ref:n},d),{},{components:t})):a.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=g;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const s={id:"common_web_core_messaging_CommandReply.CommandReply",title:"Class: CommandReply",sidebar_label:"CommandReply",custom_edit_url:null},o=void 0,i={unversionedId:"reference/frontend/classes/common_web_core_messaging_CommandReply.CommandReply",id:"reference/frontend/classes/common_web_core_messaging_CommandReply.CommandReply",title:"Class: CommandReply",description:"common/web/core/messaging/CommandReply.CommandReply",source:"@site/docs/reference/frontend/classes/common_web_core_messaging_CommandReply.CommandReply.md",sourceDirName:"reference/frontend/classes",slug:"/reference/frontend/classes/common_web_core_messaging_CommandReply.CommandReply",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_CommandReply.CommandReply",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_web_core_messaging_CommandReply.CommandReply",title:"Class: CommandReply",sidebar_label:"CommandReply",custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"Command",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_Command.Command"},next:{title:"Event",permalink:"/docs/reference/frontend/classes/common_web_core_messaging_Event.Event"}},m={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"hops",id:"hops",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"message",id:"message",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"origin",id:"origin",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"sender",id:"sender",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"success",id:"success",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"target",id:"target",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"trace",id:"trace",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"unique",id:"unique",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"Category",id:"category",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"Accessors",id:"accessors",level:2},{value:"category",id:"category-1",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"Methods",id:"methods",level:2},{value:"convertToJSON",id:"converttojson",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"convertFromJSON",id:"convertfromjson",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"define",id:"define",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"messageName",id:"messagename",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-16",level:4}],d={toc:l},p="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_core_messaging_CommandReply"},"common/web/core/messaging/CommandReply"),".CommandReply"),(0,r.kt)("p",null,"A command reply message."),(0,r.kt)("p",null,"Every command needs to receive a reply in the form of a ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandReply")," message. The reply contains\ninformation about its ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", as well as a text message which is usually used to describe reasons for\nfailures."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CommandReply"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_api_connector_ConnectorCommands.ListConnectorsReply"},(0,r.kt)("inlineCode",{parentName:"a"},"ListConnectorsReply"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_api_network_NetworkCommands.PingReply"},(0,r.kt)("inlineCode",{parentName:"a"},"PingReply"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_api_project_ProjectCommands.ListProjectsReply"},(0,r.kt)("inlineCode",{parentName:"a"},"ListProjectsReply"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_api_project_ProjectCommands.CreateProjectReply"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateProjectReply"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_api_project_ProjectCommands.UpdateProjectReply"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateProjectReply"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_api_project_ProjectCommands.DeleteProjectReply"},(0,r.kt)("inlineCode",{parentName:"a"},"DeleteProjectReply"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_api_project_ProjectFeaturesCommands.UpdateProjectFeaturesReply"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateProjectFeaturesReply"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new CommandReply"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"origin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sender"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hops?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"trace?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_CommandReply.CommandReply"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReply"))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"origin")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},(0,r.kt)("inlineCode",{parentName:"a"},"UnitID"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The initial source component of the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sender")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},(0,r.kt)("inlineCode",{parentName:"a"},"UnitID"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The component from where the message came from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"target")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Channel.Channel"},(0,r.kt)("inlineCode",{parentName:"a"},"Channel"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Where the message should go to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hops")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},(0,r.kt)("inlineCode",{parentName:"a"},"UnitID")),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A list of components the message was sent through.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"trace")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A unique trace identifying messages that logically belong together.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_CommandReply.CommandReply"},(0,r.kt)("inlineCode",{parentName:"a"},"CommandReply"))),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/Message.ts#L53"},"common/web/core/messaging/Message.ts:53")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"hops"},"hops"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"hops"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},(0,r.kt)("inlineCode",{parentName:"a"},"UnitID")),"[]"),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#hops"},"hops")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/Message.ts#L42"},"common/web/core/messaging/Message.ts:42")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"message"},"message"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"message"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'""')),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/CommandReply.ts#L28"},"common/web/core/messaging/CommandReply.ts:28")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#name"},"name")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/Message.ts#L30"},"common/web/core/messaging/Message.ts:30")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"origin"},"origin"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"origin"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},(0,r.kt)("inlineCode",{parentName:"a"},"UnitID"))),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#origin"},"origin")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/Message.ts#L33"},"common/web/core/messaging/Message.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sender"},"sender"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"sender"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},(0,r.kt)("inlineCode",{parentName:"a"},"UnitID"))),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#sender"},"sender")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/Message.ts#L36"},"common/web/core/messaging/Message.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"success"},"success"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"success"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/CommandReply.ts#L27"},"common/web/core/messaging/CommandReply.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"target"},"target"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"target"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Channel.Channel"},(0,r.kt)("inlineCode",{parentName:"a"},"Channel"))),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#target"},"target")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/Message.ts#L39"},"common/web/core/messaging/Message.ts:39")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trace"},"trace"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"trace"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#trace"},"trace")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/Message.ts#L43"},"common/web/core/messaging/Message.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unique"},"unique"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"unique"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/CommandReply.ts#L30"},"common/web/core/messaging/CommandReply.ts:30")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"category"},"Category"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"Category"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"CommandReply"')),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#category"},"Category")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/CommandReply.ts#L25"},"common/web/core/messaging/CommandReply.ts:25")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"category-1"},"category"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"category"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Gets the global message category."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,"Message.category"),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/CommandReply.ts#L35"},"common/web/core/messaging/CommandReply.ts:35")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"converttojson"},"convertToJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"convertToJSON"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Converts this message to JSON."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#converttojson"},"convertToJSON")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/Message.ts#L65"},"common/web/core/messaging/Message.ts:65")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tostring"},"toString"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Gets the string representation of this message."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#tostring"},"toString")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/Message.ts#L131"},"common/web/core/messaging/Message.ts:131")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"convertfromjson"},"convertFromJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"convertFromJSON"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"msgType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message"))),(0,r.kt)("p",null,"Creates a message from JSON data."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msgType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/interfaces/common_web_core_messaging_Message.ConstructableMessage"},(0,r.kt)("inlineCode",{parentName:"a"},"ConstructableMessage")),"<",(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message type to construct.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The JSON data string.")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The created message.")),(0,r.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#convertfromjson"},"convertFromJSON")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/Message.ts#L77"},"common/web/core/messaging/Message.ts:77")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"define"},"define"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"define"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")),(0,r.kt)("p",null,"Defines a new message."),(0,r.kt)("p",null,"The decorator takes care of wrapping the new class as a dataclass, passing the correct message\nname to its constructor. It also registers the new message type in the global ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageTypesCatalog"),"."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    @Message.define("msg/command")\n    class MyCommand extends Command {\n        ...\n    }\n')),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the message.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Function")),(0,r.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#define"},"define")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/Message.ts#L105"},"common/web/core/messaging/Message.ts:105")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"messagename"},"messageName"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"messageName"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Retrieves the name of the message type on a message class basis."),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message"},"Message"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_core_messaging_Message.Message#messagename"},"messageName")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/core/messaging/Message.ts#L85"},"common/web/core/messaging/Message.ts:85")))}c.isMDXComponent=!0}}]);