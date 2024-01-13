"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),f=r,g=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"configuration",title:"utils.config.configuration"},l=void 0,o={unversionedId:"reference/backend/utils/config/configuration",id:"reference/backend/utils/config/configuration",title:"utils.config.configuration",description:"Configuration Objects",source:"@site/docs/reference/backend/utils/config/configuration.md",sourceDirName:"reference/backend/utils/config",slug:"/reference/backend/utils/config/configuration",permalink:"/docs/reference/backend/utils/config/configuration",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"configuration",title:"utils.config.configuration"},sidebar:"backendSidebar",previous:{title:"network_setting_ids",permalink:"/docs/reference/backend/settings/network_setting_ids"},next:{title:"setting_id",permalink:"/docs/reference/backend/utils/config/setting_id"}},s={},u=[{value:"Configuration Objects",id:"configuration-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"load",id:"load",level:4},{value:"add_defaults",id:"add_defaults",level:4},{value:"value",id:"value",level:4},{value:"settings_file",id:"settings_file",level:4}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"configuration-objects"},"Configuration Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Configuration()\n")),(0,r.kt)("p",null,"Encapsulates configuration settings and their fallback default values."),(0,r.kt)("p",null,"Settings can be loaded from a configuration file (in ",(0,r.kt)("em",{parentName:"p"},"TOML")," format) or provided as environment variables (see below)."),(0,r.kt)("p",null,"All settings are accessed by an identifier of type ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingID"),", which represents settings in a path-like format;\n",(0,r.kt)("inlineCode",{parentName:"p"},"General.Debug"),", for example, refers to a setting called ",(0,r.kt)("inlineCode",{parentName:"p"},"Debug")," in the `",(0,r.kt)("inlineCode",{parentName:"p"},"General")," section."),(0,r.kt)("p",null,"A corresponding configuration file would look like this::"),(0,r.kt)("p",null,"[General]","\nDebug = True"),(0,r.kt)("p",null,"A setting identifier is translated to its corresponding environment variable name by replacing all dots (.) with underscores (_),\nprepending a prefix (defaults to ",(0,r.kt)("em",{parentName:"p"},"'","RDS","'"),"), as well as making everything uppercase::"),(0,r.kt)("p",null,"General.Debug -",">"," RDS_GENERAL_DEBUG"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes"),":"),(0,r.kt)("p",null,"  When accessing a setting value, a default value must ",(0,r.kt)("em",{parentName:"p"},"always")," be present. This means that before a setting can be accessed,\na default value must be added using ",(0,r.kt)("inlineCode",{parentName:"p"},"add_defaults"),"."),(0,r.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(env_prefix: str = "RDS")\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"env_prefix")," - The prefix to use when generating the environment variable name of a setting.")),(0,r.kt)("h4",{id:"load"},"load"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def load(filename: str) -> None\n")),(0,r.kt)("p",null,"Loads settings from a ",(0,r.kt)("em",{parentName:"p"},"TOML")," file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filename")," - The file to load.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FileNotFoundError")," - If the specified file doesn","'","t exist or couldn","'","t be opened.")),(0,r.kt)("h4",{id:"add_defaults"},"add","_","defaults"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def add_defaults(defaults: typing.Dict[SettingID, typing.Any]) -> None\n")),(0,r.kt)("p",null,"Adds default values for settings, merging the new defaults into the existing ones."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaults")," - A dictionary containing the new default values.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes"),":"),(0,r.kt)("p",null,"  It is always necessary to add a default value for a setting before accessing it."),(0,r.kt)("h4",{id:"value"},"value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def value(key: SettingID) -> typing.Any\n")),(0,r.kt)("p",null,"Gets the value of a setting."),(0,r.kt)("p",null,"The value is first looked up in the environment variables. If not found, the loaded settings are searched.\nIf that also fails, the defaults are used."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - The identifier of the setting.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  The value of the setting."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KeyError")," - The setting identifier was not found in the defaults.")),(0,r.kt)("h4",{id:"settings_file"},"settings","_","file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef settings_file() -> str\n")),(0,r.kt)("p",null,"The name of the currently loaded settings file."))}d.isMDXComponent=!0}}]);