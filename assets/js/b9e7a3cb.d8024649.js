"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5942],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(t),m=a,k=g["".concat(i,".").concat(m)]||g[m]||u[m]||l;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[g]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_label:"network_engine",title:"core.messaging.networking.network_engine"},o=void 0,s={unversionedId:"reference/backend/core/messaging/networking/network_engine",id:"reference/backend/core/messaging/networking/network_engine",title:"core.messaging.networking.network_engine",description:"NetworkEngine Objects",source:"@site/docs/reference/backend/core/messaging/networking/network_engine.md",sourceDirName:"reference/backend/core/messaging/networking",slug:"/reference/backend/core/messaging/networking/network_engine",permalink:"/hello-world/docs/reference/backend/core/messaging/networking/network_engine",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"network_engine",title:"core.messaging.networking.network_engine"},sidebar:"backendSidebar",previous:{title:"client",permalink:"/hello-world/docs/reference/backend/core/messaging/networking/client"},next:{title:"network_filter",permalink:"/hello-world/docs/reference/backend/core/messaging/networking/network_filter"}},i={},c=[{value:"NetworkEngine Objects",id:"networkengine-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"run",id:"run",level:4},{value:"process",id:"process",level:4},{value:"send_message",id:"send_message",level:4},{value:"install_filter",id:"install_filter",level:4},{value:"has_server",id:"has_server",level:4},{value:"server",id:"server",level:4},{value:"has_client",id:"has_client",level:4},{value:"client",id:"client",level:4}],p={toc:c},g="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(g,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"networkengine-objects"},"NetworkEngine Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class NetworkEngine()\n")),(0,a.kt)("p",null,"Main network management class."),(0,a.kt)("p",null,"Messages go out to other components through this class, and new messages come in from the outside world here as well.\nThe network engine takes care of listening to incoming messages, routing them properly, and sending new messages to other components."),(0,a.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(comp_data: BackendComponentData, message_bus: MessageBusProtocol)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"comp_data")," - The global component data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message_bus")," - The global message bus.")),(0,a.kt)("h4",{id:"run"},"run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def run() -> None\n")),(0,a.kt)("p",null,"Listens to incoming messages in order to properly route them."),(0,a.kt)("h4",{id:"process"},"process"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def process() -> None\n")),(0,a.kt)("p",null,"Called to perform periodic tasks."),(0,a.kt)("h4",{id:"send_message"},"send","_","message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def send_message(msg: Message, msg_meta: MessageMetaInformation) -> None\n")),(0,a.kt)("p",null,"Sends a message across the network."),(0,a.kt)("p",null,"To do so, the message is first checked for validity (whether it actually ",(0,a.kt)("em",{parentName:"p"},"may")," be sent). If it is valid, it is routed through the\nclient and/or server (the logic of this can be found in ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkRouter"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msg")," - The message to be sent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msg_meta")," - The message meta information.")),(0,a.kt)("h4",{id:"install_filter"},"install","_","filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def install_filter(fltr: NetworkFilter) -> None\n")),(0,a.kt)("p",null,"Installs a new network message filter."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fltr")," - The filter to add.")),(0,a.kt)("h4",{id:"has_server"},"has","_","server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef has_server() -> bool\n")),(0,a.kt)("p",null,"Whether the network runs a server."),(0,a.kt)("h4",{id:"server"},"server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef server() -> Server | None\n")),(0,a.kt)("p",null,"The server instance."),(0,a.kt)("h4",{id:"has_client"},"has","_","client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef has_client() -> bool\n")),(0,a.kt)("p",null,"Whether the network runs a client."),(0,a.kt)("h4",{id:"client"},"client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef client() -> Client | None\n")),(0,a.kt)("p",null,"The client instance."))}u.isMDXComponent=!0}}]);