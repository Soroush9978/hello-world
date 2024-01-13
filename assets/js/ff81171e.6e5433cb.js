"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=r,d=s["".concat(p,".").concat(f)]||s[f]||u[f]||a;return n?o.createElement(d,i(i({ref:t},m),{},{components:n})):o.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"meta_information",title:"component.meta_information"},i=void 0,l={unversionedId:"reference/backend/component/meta_information",id:"reference/backend/component/meta_information",title:"component.meta_information",description:"MetaInformation Objects",source:"@site/docs/reference/backend/component/meta_information.md",sourceDirName:"reference/backend/component",slug:"/reference/backend/component/meta_information",permalink:"/docs/reference/backend/component/meta_information",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"meta_information",title:"component.meta_information"},sidebar:"backendSidebar",previous:{title:"component_ids",permalink:"/docs/reference/backend/component/component_ids"},next:{title:"component_role",permalink:"/docs/reference/backend/component/roles/component_role"}},p={},c=[{value:"MetaInformation Objects",id:"metainformation-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"title",id:"title",level:4},{value:"version",id:"version",level:4},{value:"get_components",id:"get_components",level:4},{value:"get_component",id:"get_component",level:4}],m={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"metainformation-objects"},"MetaInformation Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class MetaInformation()\n")),(0,r.kt)("p",null,"Accesses meta information about the entire project and its various component stored in a ",(0,r.kt)("em",{parentName:"p"},"JSON")," file."),(0,r.kt)("p",null,"The JSON file needs to be structured like this::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n    &quot;global&quot;: {\n        &quot;title&quot;: &quot;RDS-NG&quot;,\n        &quot;version&quot;: &quot;0.0.1&quot;\n    },\n\n    &quot;components&quot;: {\n        &quot;gate&quot;: {\n            &quot;name&quot;: &quot;Gate service&quot;,\n            &quot;directory&quot;: &quot;gate&quot;,\n            &quot;tech&quot;: &quot;py&quot;\n        },\n        ...\n    }\n}\n")),(0,r.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(info_file: str = "/config/meta-information.json")\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"info_file")," - The JSON file to load the meta information from.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ValueError")," - If the information file couldn","'","t be loaded.")),(0,r.kt)("h4",{id:"title"},"title"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef title() -> str\n")),(0,r.kt)("p",null,"The project title."),(0,r.kt)("h4",{id:"version"},"version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef version() -> Version\n")),(0,r.kt)("p",null,"The project version (see ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org"},"https://semver.org"),")."),(0,r.kt)("h4",{id:"get_components"},"get","_","components"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_components() -> typing.List[str]\n")),(0,r.kt)("p",null,"A list of all component names."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  The names of all components."),(0,r.kt)("h4",{id:"get_component"},"get","_","component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_component(comp: str) -> typing.Dict[str, typing.Any]\n")),(0,r.kt)("p",null,"Retrieves the meta information stored for a specific component."),(0,r.kt)("p",null,"This meta information includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the component, as well as its ",(0,r.kt)("inlineCode",{parentName:"p"},"directory")," within the code structure (rooted at ",(0,r.kt)("inlineCode",{parentName:"p"},"/src"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"comp")," - The name of the component.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,"  A dictionary containing the meta information."))}u.isMDXComponent=!0}}]);