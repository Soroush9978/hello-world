"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[355],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>y});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),i=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=i(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=i(r),u=a,y=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return r?t.createElement(y,l(l({ref:n},m),{},{components:r})):t.createElement(y,l({ref:n},m))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2297:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"command_reply",title:"core.messaging.command_reply"},l=void 0,c={unversionedId:"reference/backend/core/messaging/command_reply",id:"reference/backend/core/messaging/command_reply",title:"core.messaging.command_reply",description:"CommandReply Objects",source:"@site/docs/reference/backend/core/messaging/command_reply.md",sourceDirName:"reference/backend/core/messaging",slug:"/reference/backend/core/messaging/command_reply",permalink:"/hello-world/docs/reference/backend/core/messaging/command_reply",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"command_reply",title:"core.messaging.command_reply"},sidebar:"backendSidebar",previous:{title:"command",permalink:"/hello-world/docs/reference/backend/core/messaging/command"},next:{title:"command_composer",permalink:"/hello-world/docs/reference/backend/core/messaging/composers/command_composer"}},s={},i=[{value:"CommandReply Objects",id:"commandreply-objects",level:2},{value:"FailType Objects",id:"failtype-objects",level:2},{value:"CommandReplyType",id:"commandreplytype",level:4}],m={toc:i},p="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"commandreply-objects"},"CommandReply Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass(frozen=True, kw_only=True)\nclass CommandReply(Message)\n")),(0,a.kt)("p",null,"A command reply message."),(0,a.kt)("p",null,"Every command needs to receive a reply in the form of a ",(0,a.kt)("inlineCode",{parentName:"p"},"CommandReply")," message. The reply contains\ninformation about its ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", as well as a text message which is usually used to describe reasons for\nfailures."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attributes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"success")," - Whether the command succeeded."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message")," - Arbitrary text, usually used to describe reasons for failures."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unique")," - The unique identifier of its corresponding command.")),(0,a.kt)("h2",{id:"failtype-objects"},"FailType Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class FailType(IntEnum)\n")),(0,a.kt)("p",null,"Used when a command failed."),(0,a.kt)("h4",{id:"commandreplytype"},"CommandReplyType"),(0,a.kt)("p",null,"pylint: disable=invalid-name"))}d.isMDXComponent=!0}}]);