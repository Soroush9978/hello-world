"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1257],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||c;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<c;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1644:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const c={sidebar_label:"connector_events",title:"api.connector.connector_events"},a=void 0,l={unversionedId:"reference/backend/api/connector/connector_events",id:"reference/backend/api/connector/connector_events",title:"api.connector.connector_events",description:"ConnectorsListEvent Objects",source:"@site/docs/reference/backend/api/connector/connector_events.md",sourceDirName:"reference/backend/api/connector",slug:"/reference/backend/api/connector/connector_events",permalink:"/hello-world/docs/reference/backend/api/connector/connector_events",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"connector_events",title:"api.connector.connector_events"},sidebar:"backendSidebar",previous:{title:"connector_commands",permalink:"/hello-world/docs/reference/backend/api/connector/connector_commands"},next:{title:"network_commands",permalink:"/hello-world/docs/reference/backend/api/network/network_commands"}},i={},s=[{value:"ConnectorsListEvent Objects",id:"connectorslistevent-objects",level:2},{value:"build",id:"build",level:4}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"connectorslistevent-objects"},"ConnectorsListEvent Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@Message.define("event/connector/list")\nclass ConnectorsListEvent(Event)\n')),(0,o.kt)("p",null,"Emitted whenever the list of available connectors has been updated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connectors")," - List of all connectors.")),(0,o.kt)("h4",{id:"build"},"build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef build(message_builder: MessageBuilder,\n          *,\n          connectors: typing.List[Connector],\n          chain: Message | None = None) -> EventComposer\n")),(0,o.kt)("p",null,"Helper function to easily build this message."))}d.isMDXComponent=!0}}]);