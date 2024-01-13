"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[581],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>C});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},N=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(t),N=a,C=s["".concat(l,".").concat(N)]||s[N]||k[N]||i;return t?r.createElement(C,o(o({ref:n},m),{},{components:t})):r.createElement(C,o({ref:n},m))}));function C(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=N;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}N.displayName="MDXCreateElement"},109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={id:"common_web_data_stores_NetworkStore",title:"Module: common/web/data/stores/NetworkStore",sidebar_label:"common/web/data/stores/NetworkStore",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"reference/frontend/modules/common_web_data_stores_NetworkStore",id:"reference/frontend/modules/common_web_data_stores_NetworkStore",title:"Module: common/web/data/stores/NetworkStore",description:"Namespaces",source:"@site/docs/reference/frontend/modules/common_web_data_stores_NetworkStore.md",sourceDirName:"reference/frontend/modules",slug:"/reference/frontend/modules/common_web_data_stores_NetworkStore",permalink:"/hello-world/docs/reference/frontend/modules/common_web_data_stores_NetworkStore",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"common_web_data_stores_NetworkStore",title:"Module: common/web/data/stores/NetworkStore",sidebar_label:"common/web/data/stores/NetworkStore",sidebar_position:0,custom_edit_url:null},sidebar:"frontendSidebar",previous:{title:"common/web/data/stores/ComponentStore",permalink:"/hello-world/docs/reference/frontend/modules/common_web_data_stores_ComponentStore"},next:{title:"common/web/services/ComponentService",permalink:"/hello-world/docs/reference/frontend/modules/common_web_services_ComponentService"}},l={},d=[{value:"Namespaces",id:"namespaces",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Functions",id:"functions",level:2},{value:"networkStore",id:"networkstore",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],m={toc:d},s="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"namespaces"},"Namespaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hello-world/docs/reference/frontend/namespaces/common_web_data_stores_NetworkStore.networkStore"},"networkStore"))),(0,a.kt)("h2",{id:"enumerations"},"Enumerations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hello-world/docs/reference/frontend/enums/common_web_data_stores_NetworkStore.ConnectionState"},"ConnectionState"))),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"networkstore"},"networkStore"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"networkStore"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"pinia?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hot?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Store"),"<",(0,a.kt)("inlineCode",{parentName:"p"},'"networkStore"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_UnwrapAll"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Pick"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionState"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/enums/common_web_data_stores_NetworkStore.ConnectionState"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionState")),">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"reset"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"serverChannel"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"isDirect"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"isLocal"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"target?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"targetID"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ","{"," readonly type: string; readonly unit: string; readonly instance?: string ","|"," undefined; equals: (other: UnitID) =",">"," boolean; toString: () =",">"," string; } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"toString"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"serverInfo"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),": ","{"," readonly type: string; readonly unit: string; readonly instance?: string ","|"," undefined; equals: (other: UnitID) =",">"," boolean; toString: () =",">"," string; } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"version"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">","  }, ",(0,a.kt)("inlineCode",{parentName:"p"},'"connectionState"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"serverInfo"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"serverChannel"'),">",">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"Pick"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionState"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/enums/common_web_data_stores_NetworkStore.ConnectionState"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionState")),">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"reset"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"serverChannel"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"isDirect"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"isLocal"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"target?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"targetID"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ","{"," readonly type: string; readonly unit: string; readonly instance?: string ","|"," undefined; equals: (other: UnitID) =",">"," boolean; toString: () =",">"," string; } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"toString"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"serverInfo"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),": ","{"," readonly type: string; readonly unit: string; readonly instance?: string ","|"," undefined; equals: (other: UnitID) =",">"," boolean; toString: () =",">"," string; } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"version"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">","  }, ",(0,a.kt)("inlineCode",{parentName:"p"},"never"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"Pick"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionState"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/enums/common_web_data_stores_NetworkStore.ConnectionState"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionState")),">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"reset"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"serverChannel"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"isDirect"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"isLocal"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"target?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"targetID"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ","{"," readonly type: string; readonly unit: string; readonly instance?: string ","|"," undefined; equals: (other: UnitID) =",">"," boolean; toString: () =",">"," string; } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"toString"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"serverInfo"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),": ","{"," readonly type: string; readonly unit: string; readonly instance?: string ","|"," undefined; equals: (other: UnitID) =",">"," boolean; toString: () =",">"," string; } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"version"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">","  }, ",(0,a.kt)("inlineCode",{parentName:"p"},'"reset"'),">",">"),(0,a.kt)("p",null,"The global store for all network-related data."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pinia?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Pinia"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"hot?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"StoreGeneric"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Store"),"<",(0,a.kt)("inlineCode",{parentName:"p"},'"networkStore"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},"_UnwrapAll"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Pick"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionState"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/enums/common_web_data_stores_NetworkStore.ConnectionState"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionState")),">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"reset"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"serverChannel"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"isDirect"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"isLocal"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"target?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"targetID"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ","{"," readonly type: string; readonly unit: string; readonly instance?: string ","|"," undefined; equals: (other: UnitID) =",">"," boolean; toString: () =",">"," string; } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"toString"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"serverInfo"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),": ","{"," readonly type: string; readonly unit: string; readonly instance?: string ","|"," undefined; equals: (other: UnitID) =",">"," boolean; toString: () =",">"," string; } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"version"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">","  }, ",(0,a.kt)("inlineCode",{parentName:"p"},'"connectionState"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"serverInfo"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"serverChannel"'),">",">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"Pick"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionState"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/enums/common_web_data_stores_NetworkStore.ConnectionState"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionState")),">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"reset"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"serverChannel"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"isDirect"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"isLocal"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"target?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"targetID"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ","{"," readonly type: string; readonly unit: string; readonly instance?: string ","|"," undefined; equals: (other: UnitID) =",">"," boolean; toString: () =",">"," string; } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"toString"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"serverInfo"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),": ","{"," readonly type: string; readonly unit: string; readonly instance?: string ","|"," undefined; equals: (other: UnitID) =",">"," boolean; toString: () =",">"," string; } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"version"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">","  }, ",(0,a.kt)("inlineCode",{parentName:"p"},"never"),">",", ",(0,a.kt)("inlineCode",{parentName:"p"},"Pick"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionState"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<",(0,a.kt)("a",{parentName:"p",href:"/hello-world/docs/reference/frontend/enums/common_web_data_stores_NetworkStore.ConnectionState"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionState")),">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"reset"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"serverChannel"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"isDirect"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"isLocal"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"target?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"targetID"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ","{"," readonly type: string; readonly unit: string; readonly instance?: string ","|"," undefined; equals: (other: UnitID) =",">"," boolean; toString: () =",">"," string; } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"toString"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"serverInfo"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref"),"<","{"," ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),": ","{"," readonly type: string; readonly unit: string; readonly instance?: string ","|"," undefined; equals: (other: UnitID) =",">"," boolean; toString: () =",">"," string; } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"version"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">","  }, ",(0,a.kt)("inlineCode",{parentName:"p"},'"reset"'),">",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"node_modules/pinia/dist/pinia.d.ts:639"))}k.isMDXComponent=!0}}]);