"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9257],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),m=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=m(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(r),p=n,f=d["".concat(c,".").concat(p)]||d[p]||s[p]||o;return r?i.createElement(f,a(a({ref:t},u),{},{components:r})):i.createElement(f,a({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var m=2;m<o;m++)a[m]=r[m];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7864:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s}});var i=r(7462),n=r(3366),o=(r(7294),r(3905)),a=["components"],l={id:"ratelimit",title:"Rate Limiter",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},c=void 0,m={unversionedId:"component/middleware/ratelimit",id:"component/middleware/ratelimit",title:"Rate Limiter",description:"Rate limiter middleware for server-side traffic control, with bbr limiter algorithm implemented by default.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/06-ratelimit.md",sourceDirName:"component/middleware",slug:"/component/middleware/ratelimit",permalink:"/en/docs/component/middleware/ratelimit",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/06-ratelimit.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"ratelimit",title:"Rate Limiter",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Metrics",permalink:"/en/docs/component/middleware/metrics"},next:{title:"Recovery",permalink:"/en/docs/component/middleware/recovery"}},u={},s=[{value:"Configuration",id:"configuration",level:3},{value:"<code>WithLimiter</code>",id:"withlimiter",level:4},{value:"Usage",id:"usage",level:3},{value:"Use rate limiter in Server",id:"use-rate-limiter-in-server",level:4},{value:"Trigger rate limiter",id:"trigger-rate-limiter",level:4}],d={toc:s};function p(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rate limiter middleware for server-side traffic control, with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/aegis/tree/main/ratelimit/bbr"},"bbr limiter")," algorithm implemented by default."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("h4",{id:"withlimiter"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithLimiter")),(0,o.kt)("p",null,"Used to replace the default limiter algorithm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// WithLimiter set Limiter implementation,\n// default is bbr limiter\nfunc WithLimiter(limiter ratelimit.Limiter) Option {\n    return func(o *options) {\n        o.limiter = limiter\n    }\n}\n")),(0,o.kt)("p",null,"The costom limiter nneds to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Limiter")," interface of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/aegis/blob/main/ratelimit/ratelimit.go"},"aegis/ratelimit"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Limiter is a rate limiter.\ntype Limiter interface {\n    Allow() (DoneFunc, error)\n}\n")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"use-rate-limiter-in-server"},"Use rate limiter in Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var opts = []http.ServerOption{\n    http.Middleware(\n        ratelimit.Server(),\n    ),\n}\n\nsrv := http.NewServer(opts...)\n")),(0,o.kt)("h4",{id:"trigger-rate-limiter"},"Trigger rate limiter"),(0,o.kt)("p",null,"When the rate limiter is triggered, the current request is rejected directly and and error ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrLimitExceed")," will be returned\uff0cas defined below\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// ErrLimitExceed is service unavailable due to rate limit exceeded.\nvar ErrLimitExceed = errors.New(429, "RATELIMIT", "service unavailable due to rate limit exceeded")\n')))}p.isMDXComponent=!0}}]);