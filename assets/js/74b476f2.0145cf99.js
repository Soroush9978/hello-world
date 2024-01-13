"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),i=s(r),m=a,f=i["".concat(l,".").concat(m)]||i[m]||d[m]||o;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[i]="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"project_features_commands",title:"api.project.project_features_commands"},p=void 0,c={unversionedId:"reference/backend/api/project/project_features_commands",id:"reference/backend/api/project/project_features_commands",title:"api.project.project_features_commands",description:"UpdateProjectFeaturesCommand Objects",source:"@site/docs/reference/backend/api/project/project_features_commands.md",sourceDirName:"reference/backend/api/project",slug:"/reference/backend/api/project/project_features_commands",permalink:"/hello-world/docs/reference/backend/api/project/project_features_commands",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"project_features_commands",title:"api.project.project_features_commands"},sidebar:"backendSidebar",previous:{title:"project_events",permalink:"/hello-world/docs/reference/backend/api/project/project_events"},next:{title:"backend_component",permalink:"/hello-world/docs/reference/backend/component/backend_component"}},l={},s=[{value:"UpdateProjectFeaturesCommand Objects",id:"updateprojectfeaturescommand-objects",level:2},{value:"build",id:"build",level:4},{value:"UpdateProjectFeaturesReply Objects",id:"updateprojectfeaturesreply-objects",level:2},{value:"build",id:"build-1",level:4}],u={toc:s},i="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(i,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"updateprojectfeaturescommand-objects"},"UpdateProjectFeaturesCommand Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@Message.define("command/project/features/update")\nclass UpdateProjectFeaturesCommand(Command)\n')),(0,a.kt)("p",null,"Command to update the features (data) of a project."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"project_id")," - The ID of the project to update."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"updated_features")," - List of all features (using their ID) to update."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"features")," - The new features data.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes"),":"),(0,a.kt)("p",null,"  Requires an ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateProjectFeaturesReply")," reply."),(0,a.kt)("h4",{id:"build"},"build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@staticmethod\ndef build(message_builder: MessageBuilder,\n          *,\n          project_id: ProjectID,\n          updated_features: typing.List[ProjectFeatureID],\n          features: ProjectFeatures,\n          chain: Message | None = None) -> CommandComposer\n")),(0,a.kt)("p",null,"Helper function to easily build this message."),(0,a.kt)("h2",{id:"updateprojectfeaturesreply-objects"},"UpdateProjectFeaturesReply Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@Message.define("command/project/features/update/reply")\nclass UpdateProjectFeaturesReply(CommandReply)\n')),(0,a.kt)("p",null,"Reply to ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateProjectFeaturesCommand"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"project_id")," - The ID of the updated project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"updated_features")," - List of all updated features (using their ID).")),(0,a.kt)("h4",{id:"build-1"},"build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@staticmethod\ndef build(message_builder: MessageBuilder,\n          cmd: UpdateProjectFeaturesCommand,\n          *,\n          project_id: ProjectID,\n          updated_features: typing.List[ProjectFeatureID],\n          success: bool = True,\n          message: str = "") -> CommandReplyComposer\n')),(0,a.kt)("p",null,"Helper function to easily build this message."))}d.isMDXComponent=!0}}]);