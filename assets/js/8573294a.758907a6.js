"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5467],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return g}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),g=o,m=s["".concat(l,".").concat(g)]||s[g]||d[g]||i;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9163:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"recovery",title:"\u5f02\u5e38\u6062\u590d",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l=void 0,p={unversionedId:"component/middleware/recovery",id:"component/middleware/recovery",title:"\u5f02\u5e38\u6062\u590d",description:"Recovery \u4e2d\u95f4\u4ef6\u7528\u4e8e\u5f02\u5e38\u6062\u590d\uff0c\u670d\u52a1\u51fa\u73b0\u5f02\u5e38\u7684\u60c5\u51b5\u4e0b\uff0c\u9632\u6b62\u7a0b\u5e8f\u76f4\u63a5\u9000\u51fa\u3002",source:"@site/docs/component/middleware/07-recovery.md",sourceDirName:"component/middleware",slug:"/component/middleware/recovery",permalink:"/docs/component/middleware/recovery",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/middleware/07-recovery.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"recovery",title:"\u5f02\u5e38\u6062\u590d",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u9650\u6d41\u5668",permalink:"/docs/component/middleware/ratelimit"},next:{title:"\u94fe\u8def\u8ffd\u8e2a",permalink:"/docs/component/middleware/tracing"}},u={},d=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"<code>WithHandler()</code>",id:"withhandler",level:4},{value:"<code>WithLogger()</code>",id:"withlogger",level:4},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"http",id:"http",level:4},{value:"grpc",id:"grpc",level:4}],s={toc:d};function g(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Recovery \u4e2d\u95f4\u4ef6\u7528\u4e8e\u5f02\u5e38\u6062\u590d\uff0c\u670d\u52a1\u51fa\u73b0\u5f02\u5e38\u7684\u60c5\u51b5\u4e0b\uff0c\u9632\u6b62\u7a0b\u5e8f\u76f4\u63a5\u9000\u51fa\u3002"),(0,i.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("p",null,"Recovery \u4e2d\u95f4\u4ef6\u4e2d\u63d0\u4f9b\u4e86\u4e24\u4e2a\u914d\u7f6e\u65b9\u6cd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"WithHandler()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"WithLogger()"),"\u3002"),(0,i.kt)("h4",{id:"withhandler"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithHandler()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func WithHandler(h HandlerFunc) Option {\n    return func(o *options) {\n        o.handler = h\n    }\n}\n")),(0,i.kt)("p",null,"\u7528\u4e8e\u8bbe\u7f6e\u670d\u52a1\u5f02\u5e38\u65f6\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"handler")," \u8fdb\u884c\u5904\u7406\uff0c\u4f8b\u5982\u6295\u9012\u5f02\u5e38\u4fe1\u606f\u5230 sentry\u3002"),(0,i.kt)("h4",{id:"withlogger"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithLogger()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func WithLogger(logger log.Logger) Option {\n    return func(o *options) {\n        o.logger = logger\n    }\n}\n")),(0,i.kt)("p",null,"\u7528\u4e8e\u8bbe\u7f6e\u4e2d\u95f4\u4ef6\u6253\u5370\u65e5\u5fd7\u65f6\u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"logger"),"\u3002"),(0,i.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("h4",{id:"http"},"http"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var opts = []http.ServerOption{\n    http.Middleware(\n        recovery.Recovery(\n      recovery.WithLogger(log.DefaultLogger),\n            recovery.WithHandler(func(ctx context.Context, req, err interface{}) error {\n                    // do someting\n                    return nil\n            }),\n    ),\n    ),\n}\nsrv := http.NewServer(opts...)\n")),(0,i.kt)("h4",{id:"grpc"},"grpc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var opts = []grpc.ServerOption{\n    grpc.Middleware(\n        recovery.Recovery(\n            recovery.WithLogger(log.DefaultLogger),\n            recovery.WithHandler(func(ctx context.Context, req, err interface{}) error {\n                // do someting\n                return nil\n            }),\n        ),\n    ),\n}\nsrv := grpc.NewServer(opts...)\n")))}g.isMDXComponent=!0}}]);