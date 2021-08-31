"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1930],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,g=d["".concat(u,".").concat(b)]||d[b]||c[b]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8515:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2,title:"Dubbo Plugin",keywords:["dubbo"],description:"dubbo plugin"},u=void 0,p={unversionedId:"plugins/dubbo-plugin",id:"version-2.3.0/plugins/dubbo-plugin",isDocsHomePage:!1,title:"Dubbo Plugin",description:"dubbo plugin",source:"@site/versioned_docs/version-2.3.0/plugins/dubbo-plugin.md",sourceDirName:"plugins",slug:"/plugins/dubbo-plugin",permalink:"/docs/2.3.0/plugins/dubbo-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/plugins/dubbo-plugin.md",version:"2.3.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Dubbo Plugin",keywords:["dubbo"],description:"dubbo plugin"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Divide Plugin",permalink:"/docs/2.3.0/plugins/divide-plugin"},next:{title:"SpringCloud Plugin",permalink:"/docs/2.3.0/plugins/spring-cloud-plugin"}},s=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Metadata",id:"metadata",children:[]}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dubbo is a plugin that converts ",(0,a.kt)("inlineCode",{parentName:"li"},"http protocol")," into ",(0,a.kt)("inlineCode",{parentName:"li"},"Dubbo protocol")," and it is also the key for gateway to realize dubbo generic service."),(0,a.kt)("li",{parentName:"ul"},"Dubbo plugin needs to cooperate with metadata to realize dubbo calls, please refer to: ",(0,a.kt)("a",{parentName:"li",href:"../design/meta-data"},"metaData"),"."),(0,a.kt)("li",{parentName:"ul"},"Apache dubbo and alibaba dubbo users both use the same plugin.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!--if you use dubbo start this--\x3e\n   <dependency>\n       <groupId>org.dromara</groupId>\n       <artifactId>soul-spring-boot-starter-plugin-alibab-dubbo</artifactId>\n       <version>${last.version}</version>\n   </dependency>\n\n   <dependency>\n       <groupId>org.dromara</groupId>\n       <artifactId>soul-spring-boot-starter-plugin-apache-dubbo</artifactId>\n       <version>${last.version}</version>\n   </dependency>\n")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-admin")," --\x3e plugin management-> ",(0,a.kt)("inlineCode",{parentName:"p"},"dubbo")," setting enable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the configuration of dubbo plugin, the configuration is as follows: Configure the registration center of dubbo."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'{"register":"zookeeper://localhost:2181"} or {"register":"nacos://localhost:8848"} \n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Plugin needs to cooperate with ",(0,a.kt)("inlineCode",{parentName:"p"},"starter")," to take effect, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"../users-guide/dubbo-proxy"},"user-dubbo"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Selectors and rules, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"../admin/selector-and-rule"},"selector"),"."))),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Every dubbo interface method corresponds to a piece of metadata, which can be found in soul-admin --\x3emetadata management."),(0,a.kt)("li",{parentName:"ul"},"Path: your http request."),(0,a.kt)("li",{parentName:"ul"},"RPC extension parameters, corresponding to some configurations of dubbo interface; If you want to adjust, please modify here, which support json format like the following fields:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'{"timeout":10000,"group":"",version":"","loadbalance":"","retries":1}\n')))}d.isMDXComponent=!0}}]);