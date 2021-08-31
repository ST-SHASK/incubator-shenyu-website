"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3774],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),k=i,m=s["".concat(l,".").concat(k)]||s[k]||d[k]||p;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,o=new Array(p);o[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4247:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(7462),i=n(3366),p=(n(7294),n(3905)),o=["components"],a={title:"WebSocket\u4ee3\u7406",keywords:["WebSocket"],description:"websocket\u4ee3\u7406"},l=void 0,c={unversionedId:"plugin-center/http-handle/websocket-plugin",id:"version-2.4.0/plugin-center/http-handle/websocket-plugin",isDocsHomePage:!1,title:"WebSocket\u4ee3\u7406",description:"websocket\u4ee3\u7406",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/plugin-center/http-handle/websocket-plugin.md",sourceDirName:"plugin-center/http-handle",slug:"/plugin-center/http-handle/websocket-plugin",permalink:"/zh/docs/plugin-center/http-handle/websocket-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/plugin-center/http-handle/websocket-plugin.md",version:"2.4.0",frontMatter:{title:"WebSocket\u4ee3\u7406",keywords:["WebSocket"],description:"websocket\u4ee3\u7406"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Rewrite\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/http-handle/rewrite-plugin"},next:{title:"Divide\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/rpc-proxy/divide-plugin"}},u=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u8bf7\u6c42\u8def\u5f84",id:"\u8bf7\u6c42\u8def\u5f84",children:[]},{value:"\u9009\u62e9\u5668\u548c\u89c4\u5219\u8bbe\u7f6e",id:"\u9009\u62e9\u5668\u548c\u89c4\u5219\u8bbe\u7f6e",children:[]}],d={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u901a\u8fc7",(0,p.kt)("inlineCode",{parentName:"p"},"Divide"),"\u63d2\u4ef6\u5b9e\u73b0\u4e86\u5bf9",(0,p.kt)("inlineCode",{parentName:"p"},"websocket"),"\u4ee3\u7406\u7684\u652f\u6301\u3002"),(0,p.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,p.kt)("p",null,"\u8bf7\u53c2\u8003\u8fd0\u7ef4\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,p.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,p.kt)("a",{parentName:"p",href:"../deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u542f\u52a8",(0,p.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,p.kt)("p",null,"\u542f\u52a8\u6210\u529f\u540e\uff0c\u9700\u8981\u5728\u57fa\u7840\u914d\u7f6e",(0,p.kt)("inlineCode",{parentName:"p"},"->"),"\u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a",(0,p.kt)("inlineCode",{parentName:"p"},"divide")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002 ",(0,p.kt)("inlineCode",{parentName:"p"},"Divide"),"\u63d2\u4ef6\u7684\u76f8\u5173\u4f7f\u7528\uff0c\u8bf7\u53c2\u8003\uff1a",(0,p.kt)("a",{parentName:"p",href:"../divide-plugin"},"Divide\u63d2\u4ef6")," \u3002"),(0,p.kt)("img",{src:"/img/shenyu/quick-start/http/http-plugin-enable.png",width:"60%",height:"50%"}),(0,p.kt)("p",null,"\u5728\u7f51\u5173\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u5f15\u5165",(0,p.kt)("inlineCode",{parentName:"p"},"divide"),"\u63d2\u4ef6\u7684\u76f8\u5173\u4f9d\u8d56\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!--if you use http proxy start this--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-divide</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-httpclient</artifactId>\n  <version>${project.version}</version>\n</dependency>\n")),(0,p.kt)("h2",{id:"\u8bf7\u6c42\u8def\u5f84"},"\u8bf7\u6c42\u8def\u5f84"),(0,p.kt)("p",null,"\u4f7f\u7528 Apache ShenYu \u4ee3\u7406websocket\u7684\u65f6\u5019\uff0c\u5047\u8bbe\u5176\u8bf7\u6c42\u8def\u5f84\u4e3a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"ws://localhost:9195/?module=ws&method=/websocket&rpcType=websocket\n")),(0,p.kt)("p",null,"\u53c2\u6570\u8be6\u89e3\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"localhost:9195"),"\uff1a \u662f\u7f51\u5173\u542f\u52a8\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"ip"),"\u548c\u7aef\u53e3\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"module"),"\uff08\u5fc5\u586b\uff09\uff1a\u7528\u4e8e\u9009\u62e9\u5668\u7684\u7b5b\u9009\u6761\u4ef6\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"method")," \uff08\u53c2\u6570\uff09: websocket\u8def\u5f84\uff0c\u540c\u65f6\u4e5f\u7528\u505a\u89c4\u5219\u5339\u914d\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"rpcType")," \uff1awebsocket \u5fc5\u586b\uff0c\u4e14\u5fc5\u987b\u4e3awebsocket \u3002"))),(0,p.kt)("h2",{id:"\u9009\u62e9\u5668\u548c\u89c4\u5219\u8bbe\u7f6e"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u8bbe\u7f6e"),(0,p.kt)("p",null,"\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"divide"),"\u63d2\u4ef6\u4e2d\u65b0\u589e\u4e00\u4e2a\u9009\u62e9\u5668\u914d\u7f6e\uff1a"),(0,p.kt)("img",{src:"/img/shenyu/plugin/websocket/websocket_selector.png",width:"80%"}),(0,p.kt)("p",null,"\u5728\u6761\u4ef6\u4e2d\u9009\u62e9",(0,p.kt)("inlineCode",{parentName:"p"},"query"),"\u7c7b\u578b\uff0c\u586b\u5199\u5339\u914d\u5b57\u6bb5\u548c\u53d6\u503c\uff0c\u8fd9\u91cc\u5206\u522b\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"module"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"ws")," \u3002\u8fd9\u91cc\u7684\u5b57\u6bb5\u548c\u53d6\u503c\uff0c\u5b8c\u5168\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u53ea\u8981\u80fd\u591f\u5339\u914d\u4e0a\u8bf7\u6c42\u5c31\u884c\u3002\n\u5728\u5904\u7406\u64cd\u4f5c\u4e2d\uff0c\u586b\u5199",(0,p.kt)("inlineCode",{parentName:"p"},"websocket"),"\u670d\u52a1\u7684\u5730\u5740\u3002"),(0,p.kt)("p",null,"\u5728\u8fd9\u4e00\u6761\u9009\u62e9\u5668\u4e0b\u65b0\u589e\u4e00\u6761\u89c4\u5219\uff1a"),(0,p.kt)("img",{src:"/img/shenyu/plugin/websocket/websocket_rule.png",width:"80%"}),(0,p.kt)("p",null,"\u5728\u6761\u4ef6\u4e2d\u9009\u62e9",(0,p.kt)("inlineCode",{parentName:"p"},"query"),"\u7c7b\u578b\uff0c\u586b\u5199\u5339\u914d\u5b57\u6bb5\u548c\u53d6\u503c\uff0c\u8fd9\u91cc\u5206\u522b\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"method"),"\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"websocket")," \u3002\u8fd9\u91cc\u7684\u5b57\u6bb5\u548c\u53d6\u503c\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u53ea\u8981\u80fd\u591f\u5339\u914d\u4e0a\u8bf7\u6c42\u5c31\u884c\u3002"),(0,p.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e\uff0c\u4f60\u7684\u8bf7\u6c42\u5c31\u4f1a\u88ab\u5339\u914d\u4e0a\uff0c\u7136\u540e\u518d\u8bf7\u6c42\u4ee3\u7406\u7684\u7684\u771f\u5b9e",(0,p.kt)("inlineCode",{parentName:"p"},"websocket"),"\u5730\u5740\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8080/websocket"),"\uff0c\u8fd9\u6837 Apache ShenYu \u7f51\u5173\u5c31\u5b8c\u6210\u4e86",(0,p.kt)("inlineCode",{parentName:"p"},"websocket"),"\u7684\u4ee3\u7406\u3002"))}s.isMDXComponent=!0}}]);