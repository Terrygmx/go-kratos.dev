"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2402],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),g=n,h=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4856:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"examples",title:"Examples",description:"Kratos examples",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l=void 0,p={unversionedId:"getting-started/examples",id:"getting-started/examples",title:"Examples",description:"Kratos examples",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/getting-started/04-examples.md",sourceDirName:"getting-started",slug:"/getting-started/examples",permalink:"/en/docs/getting-started/examples",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/getting-started/04-examples.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"examples",title:"Examples",description:"Kratos examples",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Plugins",permalink:"/en/docs/getting-started/plugin"},next:{title:"API",permalink:"/en/docs/component/api"}},c={},u=[{value:"Components&#39; Usage",id:"components-usage",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Service Discovery and Registration",id:"service-discovery-and-registration",level:4},{value:"HTTP",id:"http",level:4},{value:"RPC",id:"rpc",level:4},{value:"Trace",id:"trace",level:4},{value:"WebSocket",id:"websocket",level:4},{value:"Complete Projects",id:"complete-projects",level:3}],m={toc:u};function g(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kratos provides a wealth of sample code/projects for reference"),(0,o.kt)("h3",{id:"components-usage"},"Components' Usage"),(0,o.kt)("h4",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/config"},"config")," example of using config to parse configuration files")),(0,o.kt)("h4",{id:"service-discovery-and-registration"},"Service Discovery and Registration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/registry/consul"},"consul")," example of service registration on the server side and service registration on the client side using the consul plug-in."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/registry/etcd"},"etcd")," example of service registration on the server side and service registration on the client side using the etcd plug-in."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/registry/nacos"},"kube")," example of service registration on the server side and service registration on the client side using the kubernetes plug-in.")),(0,o.kt)("h4",{id:"http"},"HTTP"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/http/gin"},"gin")," example of use gin as the router."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/http/handler"},"handler")," example of use basic http handler."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/blob/main/examples/http/health/main.go"},"health")," example of health check API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/http/mux"},"mux")," example of use mux as the router."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/http/static"},"static")," example of static files serving."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/http/upload"},"upload")," example of file upload.")),(0,o.kt)("h4",{id:"rpc"},"RPC"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/helloworld"},"helloworld")," example of remote calls using http and gRPC.")),(0,o.kt)("h4",{id:"trace"},"Trace"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/traces"},"traces")," example of use jaeger for tracing.")),(0,o.kt)("h4",{id:"websocket"},"WebSocket"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/ws"},"ws")," example of file WebSocket.")),(0,o.kt)("h3",{id:"complete-projects"},"Complete Projects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/examples/blog"},"blog")," a simple CRUD project which includes MySQL Redis integration. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/beer-shop"},"beer-shop")," an online shop application, mono-repo microservices demo for kratos."))))}g.isMDXComponent=!0}}]);