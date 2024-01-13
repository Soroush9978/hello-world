"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,k=u["".concat(d,".").concat(f)]||u[f]||m[f]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"common_web_utils_config_Configuration.Configuration",title:"Class: Configuration",sidebar_label:"Configuration",custom_edit_url:null},l=void 0,o={unversionedId:"reference/frontend/classes/common_web_utils_config_Configuration.Configuration",id:"reference/frontend/classes/common_web_utils_config_Configuration.Configuration",title:"Class: Configuration",description:"common/web/utils/config/Configuration.Configuration",source:"@site/docs/reference/frontend/classes/common_web_utils_config_Configuration.Configuration.md",sourceDirName:"reference/frontend/classes",slug:"/reference/frontend/classes/common_web_utils_config_Configuration.Configuration",permalink:"/docs/reference/frontend/classes/common_web_utils_config_Configuration.Configuration",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common_web_utils_config_Configuration.Configuration",title:"Class: Configuration",sidebar_label:"Configuration",custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"UnitID",permalink:"/docs/reference/frontend/classes/common_web_utils_UnitID.UnitID"},next:{title:"SettingID",permalink:"/docs/reference/frontend/classes/common_web_utils_config_SettingID.SettingID"}},d={},s=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_defaults",id:"_defaults",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_env",id:"_env",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_envPrefix",id:"_envprefix",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"_settings",id:"_settings",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"addDefaults",id:"adddefaults",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"convertEnvType",id:"convertenvtype",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"load",id:"load",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"traverseSettings",id:"traversesettings",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"unfoldSettingsItem",id:"unfoldsettingsitem",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"value",id:"value",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-10",level:4}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_utils_config_Configuration"},"common/web/utils/config/Configuration"),".Configuration"),(0,r.kt)("p",null,"Encapsulates configuration settings and their fallback default values."),(0,r.kt)("p",null,"Settings can be loaded from a configuration file (in ",(0,r.kt)("em",{parentName:"p"},"TOML")," format) or provided as environment variables (see below)."),(0,r.kt)("p",null,"All settings are accessed by an identifier of type ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingID"),", which represents settings in a path-like format;\n",(0,r.kt)("inlineCode",{parentName:"p"},"General.Debug"),", for example, refers to a setting called ",(0,r.kt)("inlineCode",{parentName:"p"},"Debug")," in the `",(0,r.kt)("inlineCode",{parentName:"p"},"General")," section."),(0,r.kt)("p",null,"A corresponding configuration file would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    [General]\n    Debug = True\n")),(0,r.kt)("p",null,"A setting identifier is translated to its corresponding environment variable name by replacing all dots (.) with underscores (_),\nprepending a prefix (defaults to ",(0,r.kt)("em",{parentName:"p"},"'RDS'"),"), as well as making everything uppercase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    General.Debug -> RDS_GENERAL_DEBUG\n")),(0,r.kt)("p",null,"Notes:\nWhen accessing a setting value, a default value must ",(0,r.kt)("em",{parentName:"p"},"always")," be present. This means that before a setting can be accessed,\na default value must be added using ",(0,r.kt)("inlineCode",{parentName:"p"},"add_defaults"),"."),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Configuration"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"env"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"envPrefix?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_utils_config_Configuration.Configuration"},(0,r.kt)("inlineCode",{parentName:"a"},"Configuration"))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"env")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/modules/common_web_utils_config_Configuration#settingscontainer"},(0,r.kt)("inlineCode",{parentName:"a"},"SettingsContainer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The global environment variables.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"envPrefix")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"RDS"')),(0,r.kt)("td",{parentName:"tr",align:"left"},"The prefix to use when generating the environment variable name of a setting.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/classes/common_web_utils_config_Configuration.Configuration"},(0,r.kt)("inlineCode",{parentName:"a"},"Configuration"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/config/Configuration.ts#L49"},"common/web/utils/config/Configuration.ts:49")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_defaults"},"_","defaults"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"_","defaults"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_utils_config_Configuration#settingscontainer"},(0,r.kt)("inlineCode",{parentName:"a"},"SettingsContainer"))," = ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/config/Configuration.ts#L40"},"common/web/utils/config/Configuration.ts:40")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_env"},"_","env"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"_","env"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_utils_config_Configuration#settingscontainer"},(0,r.kt)("inlineCode",{parentName:"a"},"SettingsContainer"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/config/Configuration.ts#L42"},"common/web/utils/config/Configuration.ts:42")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_envprefix"},"_","envPrefix"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"_","envPrefix"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/config/Configuration.ts#L43"},"common/web/utils/config/Configuration.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_settings"},"_","settings"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"_","settings"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/frontend/modules/common_web_utils_config_Configuration#settingscontainer"},(0,r.kt)("inlineCode",{parentName:"a"},"SettingsContainer"))," = ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/config/Configuration.ts#L39"},"common/web/utils/config/Configuration.ts:39")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"adddefaults"},"addDefaults"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addDefaults"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"defaults"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Adds default values for settings, merging the new defaults into the existing ones."),(0,r.kt)("p",null,"Notes:\nIt is always necessary to add a default value for a setting before accessing it."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"defaults")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Map"),"<",(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_utils_config_SettingID.SettingID"},(0,r.kt)("inlineCode",{parentName:"a"},"SettingID")),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A map containing the new default values.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/config/Configuration.ts#L71"},"common/web/utils/config/Configuration.ts:71")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"convertenvtype"},"convertEnvType"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"convertEnvType"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"targetType"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"targetType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/config/Configuration.ts#L127"},"common/web/utils/config/Configuration.ts:127")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"load"},"load"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"load"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Loads settings from the global ",(0,r.kt)("em",{parentName:"p"},"TOML")," configuration file."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"Error - If the configuration data couldn't be parsed."),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/config/Configuration.ts#L59"},"common/web/utils/config/Configuration.ts:59")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"traversesettings"},"traverseSettings"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"traverseSettings"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"settings"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"settings")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/modules/common_web_utils_config_Configuration#settingscontainer"},(0,r.kt)("inlineCode",{parentName:"a"},"SettingsContainer")))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/config/Configuration.ts#L106"},"common/web/utils/config/Configuration.ts:106")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unfoldsettingsitem"},"unfoldSettingsItem"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"unfoldSettingsItem"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"settings"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"settings")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/modules/common_web_utils_config_Configuration#settingscontainer"},(0,r.kt)("inlineCode",{parentName:"a"},"SettingsContainer")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/config/Configuration.ts#L114"},"common/web/utils/config/Configuration.ts:114")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"value"},"value"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"value"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ValType"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"ValType")),(0,r.kt)("p",null,"Gets the value of a setting."),(0,r.kt)("p",null,"The value is first looked up in the environment variables. If not found, the loaded settings are searched.\nIf that also fails, the defaults are used."),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ValType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/frontend/classes/common_web_utils_config_SettingID.SettingID"},(0,r.kt)("inlineCode",{parentName:"a"},"SettingID"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The identifier of the setting.")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ValType")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The value of the setting.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"Error - The setting identifier was not found in the defaults."),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Soroush9978/rds-ng/blob/743b3aa/src/common/web/utils/config/Configuration.ts#L91"},"common/web/utils/config/Configuration.ts:91")))}m.isMDXComponent=!0}}]);