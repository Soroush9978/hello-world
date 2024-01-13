"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6248],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),i=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=i(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(t),u=r,b=m["".concat(s,".").concat(u)]||m[u]||d[u]||c;return t?o.createElement(b,a(a({ref:n},p),{},{components:t})):o.createElement(b,a({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var i=2;i<c;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var o=t(7462),r=(t(7294),t(3905));const c={sidebar_label:"connector_commands",title:"api.connector.connector_commands"},a=void 0,l={unversionedId:"reference/backend/api/connector/connector_commands",id:"reference/backend/api/connector/connector_commands",title:"api.connector.connector_commands",description:"ListConnectorsCommand Objects",source:"@site/docs/reference/backend/api/connector/connector_commands.md",sourceDirName:"reference/backend/api/connector",slug:"/reference/backend/api/connector/connector_commands",permalink:"/docs/reference/backend/api/connector/connector_commands",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"connector_commands",title:"api.connector.connector_commands"},sidebar:"backendSidebar",previous:{title:"component_events",permalink:"/docs/reference/backend/api/component/component_events"},next:{title:"connector_events",permalink:"/docs/reference/backend/api/connector/connector_events"}},s={},i=[{value:"ListConnectorsCommand Objects",id:"listconnectorscommand-objects",level:2},{value:"build",id:"build",level:4},{value:"ListConnectorsReply Objects",id:"listconnectorsreply-objects",level:2},{value:"build",id:"build-1",level:4}],p={toc:i},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"listconnectorscommand-objects"},"ListConnectorsCommand Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@Message.define("command/connector/list")\nclass ListConnectorsCommand(Command)\n')),(0,r.kt)("p",null,"Command to fetch all available connectors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes"),":"),(0,r.kt)("p",null,"  Requires a ",(0,r.kt)("inlineCode",{parentName:"p"},"ListConnectorsReply")," reply."),(0,r.kt)("h4",{id:"build"},"build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef build(message_builder: MessageBuilder,\n          *,\n          chain: Message | None = None) -> CommandComposer\n")),(0,r.kt)("p",null,"Helper function to easily build this message."),(0,r.kt)("h2",{id:"listconnectorsreply-objects"},"ListConnectorsReply Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@Message.define("command/connector/list/reply")\nclass ListConnectorsReply(CommandReply)\n')),(0,r.kt)("p",null,"Reply to ",(0,r.kt)("inlineCode",{parentName:"p"},"ListConnectorsCommand"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connectors")," - List of all connectors.")),(0,r.kt)("h4",{id:"build-1"},"build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@staticmethod\ndef build(message_builder: MessageBuilder,\n          cmd: ListConnectorsCommand,\n          *,\n          connectors: typing.List[Connector],\n          success: bool = True,\n          message: str = "") -> CommandReplyComposer\n')),(0,r.kt)("p",null,"Helper function to easily build this message."))}d.isMDXComponent=!0}}]);