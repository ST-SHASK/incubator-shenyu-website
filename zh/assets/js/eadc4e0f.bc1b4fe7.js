"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3474],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return o}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),g=d(a),o=r,c=g["".concat(m,".").concat(o)]||g[o]||N[o]||l;return a?n.createElement(c,i(i({ref:e},k),{},{components:a})):n.createElement(c,i({ref:e},k))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6721:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return k},default:function(){return g}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={title:"Admin\u5c5e\u6027\u914d\u7f6e",keywords:["\u914d\u7f6e"],description:"Admin\u5c5e\u6027\u914d\u7f6e"},m=void 0,d={unversionedId:"user-guide/property-config/admin-property-config",id:"version-2.4.0/user-guide/property-config/admin-property-config",isDocsHomePage:!1,title:"Admin\u5c5e\u6027\u914d\u7f6e",description:"Admin\u5c5e\u6027\u914d\u7f6e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/user-guide/property-config/admin-property-config.md",sourceDirName:"user-guide/property-config",slug:"/user-guide/property-config/admin-property-config",permalink:"/zh/docs/user-guide/property-config/admin-property-config",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/user-guide/property-config/admin-property-config.md",version:"2.4.0",frontMatter:{title:"Admin\u5c5e\u6027\u914d\u7f6e",keywords:["\u914d\u7f6e"],description:"Admin\u5c5e\u6027\u914d\u7f6e"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Authority Management",permalink:"/zh/docs/user-guide/admin-usage/authority-management"},next:{title:"\u5ba2\u6237\u7aef\u5c5e\u6027\u914d\u7f6e",permalink:"/zh/docs/user-guide/property-config/client-property-config"}},k=[{value:"\u5c5e\u6027\u914d\u7f6e",id:"\u5c5e\u6027\u914d\u7f6e",children:[]},{value:"\u5c5e\u6027\u8be6\u89e3",id:"\u5c5e\u6027\u8be6\u89e3",children:[]}],N={toc:k};function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u7bc7\u4e3b\u8981\u8bb2\u89e3\u5982\u4f55\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"admin"),"\u7aef\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"ShenYu")," \u7684\u76f8\u5173\u5c5e\u6027\u3002"),(0,l.kt)("img",{src:"/img/shenyu/config/shenyu_admin_application_config.png",width:"80%",height:"70%"}),(0,l.kt)("h3",{id:"\u5c5e\u6027\u914d\u7f6e"},"\u5c5e\u6027\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'shenyu:\n  register:\n    registerType: http #http #zookeeper #etcd #nacos #consul\n    serverLists: #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      sessionTimeout: 5000\n      connectionTimeout: 2000\n      checked: true\n      zombieCheckTimes: 5\n      scheduledTime: 10\n      nacosNameSpace: ShenyuRegisterCenter\n  database:\n    dialect: mysql\n    init_script: "META-INF/schema.sql"\n    init_enable: true\n  sync:\n    websocket:\n      enabled: true\n#      zookeeper:\n#        url: localhost:2181\n#        sessionTimeout: 5000\n#        connectionTimeout: 2000\n#      http:\n#        enabled: true\n#      nacos:\n#        url: localhost:8848\n#        namespace: 1c10d748-af86-43b9-8265-75f487d20c6c\n#        username:\n#        password:\n#        acm:\n#          enabled: false\n#          endpoint: acm.aliyun.com\n#          namespace:\n#          accessKey:\n#          secretKey:\n#    etcd:\n#      url: http://localhost:2379\n#    consul:\n#      url: http://localhost:8500\n  aes:\n    secret:\n      key: 2095132720951327\n      iv: 6075877187097700\n  ldap:\n    enabled: false\n    url: ldap://xxxx:xxx\n    bind-dn: cn=xxx,dc=xxx,dc=xxx\n    password: xxxx\n    base-dn: ou=xxx,dc=xxx,dc=xxx\n    object-class: person\n    login-field: cn\n  jwt:\n    expired-seconds: 86400000\n  shiro:\n    white-list:\n      - /\n      - /favicon.*\n      - /static/**\n      - /index**\n      - /plugin\n      - /platform/**\n      - /websocket\n      - /configs/**\n      - /shenyu-client/**\n      - /error\n      - /actuator/health\n      - /swagger-ui.html\n      - /webjars/**\n      - /swagger-resources/**\n      - /v2/api-docs\n      - /csrf\n  swagger:\n    enable: true\n\n')),(0,l.kt)("h3",{id:"\u5c5e\u6027\u8be6\u89e3"},"\u5c5e\u6027\u8be6\u89e3"),(0,l.kt)("h5",{id:"shenyuregister-\u914d\u7f6e"},"shenyu.register \u914d\u7f6e"),(0,l.kt)("p",null,"\u8fd9\u662f\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\uff0c\u5ba2\u6237\u7aef\u63a5\u5165\u539f\u7406\u8bf7\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"../../design/register-center-design"},"\u5ba2\u6237\u7aef\u63a5\u5165\u539f\u7406")," \uff0c\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a ",(0,l.kt)("a",{parentName:"p",href:"../register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e")," \u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"registerType"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"http"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f7f\u7528\u54ea\u79cd\u65b9\u5f0f\u8fdb\u884c\u670d\u52a1\u6ce8\u518c\uff0c\u5f53\u524d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"td"},"http"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"zookeeper"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"etcd"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"consul"),"\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"nacos")," \u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"serverLists"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u975e\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6e\u4e2d\u5fc3\u7684\u5730\u5740\u3002\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"td"},"http"),"\u65b9\u5f0f\u65f6\uff0c\u4e0d\u9700\u8981\u586b\u5199\uff0c\u5176\u4ed6\u7c7b\u578b\u9700\u8981\u586b\u5199\u3002\u96c6\u7fa4\u65f6\uff0c\u591a\u4e2a\u5730\u5740\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},",")," \u5206\u5f00 \u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"props"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f7f\u7528\u4e0d\u540c\u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u5c5e\u6027\u53d6\u503c\u4e0d\u540c\u3002")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"props"),"\u914d\u7f6e")),(0,l.kt)("p",null,"\u4f7f\u7528\u4e0d\u540c\u7684\u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u5c5e\u6027\u53d6\u503c\u4e0d\u540c\u3002"),(0,l.kt)("p",null,"\u5f53\u6ce8\u518c\u7c7b\u578b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"http"),"\u65f6\uff0c\u652f\u6301\u7684\u5c5e\u6027\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"checked"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5f00\u542f\u68c0\u6d4b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"zombieCheckTimes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"5"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5931\u8d25\u51e0\u6b21\u540e\u5254\u9664\u670d\u52a1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"scheduledTime"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9a\u65f6\u68c0\u6d4b\u95f4\u9694\u65f6\u95f4 \uff08\u79d2\uff09")))),(0,l.kt)("p",null,"\u5f53\u6ce8\u518c\u7c7b\u578b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"zookeeper"),"\u65f6\uff0c\u652f\u6301\u7684\u5c5e\u6027\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sessionTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"30000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"session\u8d85\u65f6\u65f6\u95f4\uff08\u6beb\u79d2\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"connectionTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff08\u6beb\u79d2\uff09")))),(0,l.kt)("p",null,"\u5f53\u6ce8\u518c\u7c7b\u578b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"etcd"),"\u65f6\uff0c\u6682\u65f6\u6ca1\u6709\u5c5e\u6027\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u5f53\u6ce8\u518c\u7c7b\u578b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"nacos"),"\u65f6\uff0c\u652f\u6301\u7684\u5c5e\u6027\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"nacosNameSpace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u547d\u540d\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"username"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"accessKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"accessKey")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"secretKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"secretKey")))),(0,l.kt)("p",null,"\u5f53\u6ce8\u518c\u7c7b\u578b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"consul"),"\u65f6\uff0c\u652f\u6301\u7684\u5c5e\u6027\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delay"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5bf9",(0,l.kt)("inlineCode",{parentName:"td"},"Metadata"),"\u7684\u76d1\u63a7\u6bcf\u6b21\u8f6e\u8be2\u7684\u95f4\u9694\u65f6\u957f\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u9ed8\u8ba4",(0,l.kt)("inlineCode",{parentName:"td"},"1"),"\u79d2\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"wait-time"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"55"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5bf9",(0,l.kt)("inlineCode",{parentName:"td"},"Metadata"),"\u7684\u76d1\u63a7\u5355\u6b21\u8bf7\u6c42\u7684\u7b49\u5f85\u65f6\u95f4\uff08\u957f\u8f6e\u8be2\u673a\u5236\uff09\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u9ed8\u8ba4",(0,l.kt)("inlineCode",{parentName:"td"},"55"),"\u79d2\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"metadata-path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"shenyu/register")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Metadata"),"\u8def\u5f84\u540d\u79f0\uff0c\u9ed8\u8ba4\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"shenyu/register"),"\u3002")))),(0,l.kt)("h5",{id:"shenyudatabase-\u914d\u7f6e"},"shenyu.database \u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u542f\u52a8\u65f6\uff0c\u6570\u636e\u5e93\u7684\u76f8\u5173\u914d\u7f6e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dialect"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"h2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"admin\u542f\u52a8\u65f6\uff0c\u4f7f\u7528\u54ea\u79cd\u6570\u636e\u5e93\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"init_script"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"META-INF/schema.h2.sql")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5e93\u521d\u59cb\u5316\u811a\u672c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"init_enable"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u8fdb\u884c\u521d\u59cb\u5316")))),(0,l.kt)("h5",{id:"shenyusync-\u914d\u7f6e"},"shenyu.sync \u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Admin"),"\u7aef\u548c\u7f51\u5173\u4f7f\u7528\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"websocket"),"\u8fdb\u884c\u6570\u636e\u540c\u6b65\u7684\u5c5e\u6027\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u542f\u7528",(0,l.kt)("inlineCode",{parentName:"td"},"websocket"),"\u8fdb\u884c\u6570\u636e\u540c\u6b65")))),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"zookeeper"),"\u8fdb\u884c\u6570\u636e\u540c\u6b65\u7684\u5c5e\u6027\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"zookeeper"),"\u7684\u8fde\u63a5\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sessionTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"session"),"\u7684\u8d85\u65f6\u65f6\u95f4\uff08\u6beb\u79d2\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"connectionTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff08\u6beb\u79d2\uff09")))),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"http\u957f\u8f6e\u8be2"),"\u8fdb\u884c\u6570\u636e\u540c\u6b65\u7684\u5c5e\u6027\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u542f\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"refreshInterval"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"5 \uff08\u5206\u949f\uff09"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9a\u65f6\u4ece\u6570\u636e\u5e93\u83b7\u53d6\u6570\u636e\u5e76\u52a0\u8f7d\u5230\u5185\u5b58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"notifyBatchSize"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6279\u91cf\u901a\u77e5\u5ba2\u6237\u7aef")))),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"nacos"),"\u8fdb\u884c\u6570\u636e\u540c\u6b65\u7684\u5c5e\u6027\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"nacos"),"\u8fde\u63a5\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u547d\u540d\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"username"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"acm"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u963f\u91cc\u4e91ACM\u670d\u52a1\u914d\u7f6e")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"acm"),"\u914d\u7f6e")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u542f\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"endpoint"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ACM\u670d\u52a1\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"accessKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"accessKey")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"secretKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"secretKey")))),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"etcd"),"\u8fdb\u884c\u6570\u636e\u540c\u6b65\u7684\u5c5e\u6027\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"etcd"),"\u8fde\u63a5\u5730\u5740")))),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"consul"),"\u8fdb\u884c\u6570\u636e\u540c\u6b65\u7684\u5c5e\u6027\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"consul"),"\u8fde\u63a5\u5730\u5740")))),(0,l.kt)("h5",{id:"shenyuaessecret-\u914d\u7f6e"},"shenyu.aes.secret \u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"aes"),"\u52a0\u5bc6\u7b97\u6cd5\u7684\u76f8\u5173\u914d\u7f6e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"key"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"2095132720951327")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"iv"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u521d\u59cb\u5411\u91cf")))),(0,l.kt)("h5",{id:"shenyuldap-\u914d\u7f6e"},"shenyu.ldap \u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Spring"),"\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"ldap"),"\u7684\u76f8\u5173\u914d\u7f6e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u542f\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ldap"),"\u8fde\u63a5\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"bind-dn"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"UserDn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"base-dn"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"searchBase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"object-class"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"person")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"filter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"login-field"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"cn")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"searchBase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"connectTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff08\u6beb\u79d2\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"readTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bfb\u53d6\u64cd\u4f5c\u8d85\u65f6\u65f6\u95f4\uff08\u6beb\u79d2\uff09")))),(0,l.kt)("h5",{id:"shenyujwt-\u914d\u7f6e"},"shenyu.jwt \u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"jwt"),"\u7684\u76f8\u5173\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"expired-seconds"),(0,l.kt)("td",{parentName:"tr",align:"left"},"long"),(0,l.kt)("td",{parentName:"tr",align:"center"},"24 ",(0,l.kt)("em",{parentName:"td"}," 60 ")," 60 * 1000L"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8fc7\u671f\u65f6\u95f4\uff08\u6beb\u79d2\uff09")))),(0,l.kt)("h5",{id:"shenyushiro-\u914d\u7f6e"},"shenyu.shiro \u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"shiro"),"\u7684\u76f8\u5173\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"white-list"),(0,l.kt)("td",{parentName:"tr",align:"left"},"List"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u767d\u540d\u5355\u5217\u8868")))))}g.isMDXComponent=!0}}]);