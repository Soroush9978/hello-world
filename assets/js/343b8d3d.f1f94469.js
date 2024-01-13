"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={id:"index",title:"Documentation",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},l="Sciebo RDS - Next Generation",i={unversionedId:"reference/frontend/index",id:"reference/frontend/index",title:"Documentation",description:"This is the repository of the next-gen version of Sciebo Research Data Services, codenamed _RDS-NG_.",source:"@site/docs/reference/frontend/index.md",sourceDirName:"reference/frontend",slug:"/reference/frontend/",permalink:"/hello-world/docs/reference/frontend/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"Documentation",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"frontendSidebar",next:{title:"Table of Contents",permalink:"/hello-world/docs/reference/frontend/modules"}},p={},d=[{value:"Directories",id:"directories",level:2},{value:"Local deployment",id:"local-deployment",level:2},{value:"Coding style",id:"coding-style",level:2}],s={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sciebo-rds---next-generation"},"Sciebo RDS - Next Generation"),(0,a.kt)("p",null,"This is the repository of the next-gen version of ",(0,a.kt)("strong",{parentName:"p"},"Sciebo")," ",(0,a.kt)("strong",{parentName:"p"},"R"),"esearch ",(0,a.kt)("strong",{parentName:"p"},"D"),"ata ",(0,a.kt)("strong",{parentName:"p"},"S"),"ervices, codenamed ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"RDS-NG")),"."),(0,a.kt)("h2",{id:"directories"},"Directories"),(0,a.kt)("p",null,"Here's a list of the main directories found within this repository:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Directory"),(0,a.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/deployment")),(0,a.kt)("td",{parentName:"tr",align:null},"All deployment related files, like Helm templates, Dockerfiles, etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/src")),(0,a.kt)("td",{parentName:"tr",align:null},"The source code for all components of RDS-NG.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/config")),(0,a.kt)("td",{parentName:"tr",align:null},"Project configuration files; note that these files are ",(0,a.kt)("em",{parentName:"td"},"not")," runtime configuration files for the various components themselves.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/scripts")),(0,a.kt)("td",{parentName:"tr",align:null},"Various helper scripts, used especially for development purposes. These are not part of the main software stack, and are usually used to perform meta-tasks like type checking, etc. Note that the scripts must be called from within the main project directory.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/docs")),(0,a.kt)("td",{parentName:"tr",align:null},"The entire developers' documentation as a Docusaurus project.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/.trunk")),(0,a.kt)("td",{parentName:"tr",align:null},"Unsorted files kept for development purposes; will be removed at some point.")))),(0,a.kt)("h2",{id:"local-deployment"},"Local deployment"),(0,a.kt)("p",null,"For easy local deployment, we have provided a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," found in ",(0,a.kt)("inlineCode",{parentName:"p"},"/deployment/containers")," that can be used to build and run all components on your local computer. To make this process even easier, an accompanying ",(0,a.kt)("inlineCode",{parentName:"p"},"makefile")," is provided supporting the following commands:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Directive"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"build")," (default)"),(0,a.kt)("td",{parentName:"tr",align:null},"Builds all containers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"build-no-cache")),(0,a.kt)("td",{parentName:"tr",align:null},"Builds all containers, ignoring previously cached steps")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"run")),(0,a.kt)("td",{parentName:"tr",align:null},"Builds and starts all containers interactively")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"logs")),(0,a.kt)("td",{parentName:"tr",align:null},"Shows all container logs")))),(0,a.kt)("p",null,"All commands (except for ",(0,a.kt)("inlineCode",{parentName:"p"},"logs"),") are also available as a development-specific version: Simply put a ",(0,a.kt)("inlineCode",{parentName:"p"},"dev-")," in front of the command, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"dev-build"),"."),(0,a.kt)("h2",{id:"coding-style"},"Coding style"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/psf/black"},"black")," (for Python) and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prettier/prettier"},"Prettier")," (for TypeScript) as code formatters. Please use those to format your code before you push, chances are there's an extension for your IDE."))}m.isMDXComponent=!0}}]);