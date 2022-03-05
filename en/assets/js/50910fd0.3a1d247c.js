"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3109],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,d=m["".concat(c,".").concat(u)]||m[u]||g[u]||o;return r?n.createElement(d,p(p({ref:t},s),{},{components:r})):n.createElement(d,p({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4615:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return g}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),p=["components"],i={slug:"go-kratos-opentelemetry-practice",title:"Kratos \u5b66\u4e60\u7b14\u8bb0 - \u57fa\u4e8e OpenTelemetry \u7684\u94fe\u8def\u8ffd\u8e2a",description:"\u5206\u5e03\u5f0f\u8ddf\u8e2a\uff08\u4e5f\u79f0\u4e3a\u5206\u5e03\u5f0f\u8bf7\u6c42\u8ddf\u8e2a\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u5206\u6790\u548c\u76d1\u63a7\u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u6cd5\uff0c\u5c24\u5176\u662f\u4f7f\u7528\u5fae\u670d\u52a1\u67b6\u6784\u6784\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u5206\u5e03\u5f0f\u8ddf\u8e2a\u6709\u52a9\u4e8e\u7cbe\u786e\u5b9a\u4f4d\u6545\u969c\u53d1\u751f\u7684\u4f4d\u7f6e\u4ee5\u53ca\u5bfc\u81f4\u6027\u80fd\u5dee\u7684\u539f\u56e0\u3002",keywords:["Go","Kratos","OpenTracing","OpenCencus","OpenTelemetry","Google","Dapper","operation process"],author:"shenqidebaozi",author_title:"Maintainer of go-kratos",author_url:"https://github.com/shenqidebaozi",author_image_url:"https://avatars.githubusercontent.com/u/35397691?s=60&v=4",tags:["go","golang","\u94fe\u8def\u8ffd\u8e2a","OpenTelemetry","\u6e90\u7801\u5206\u6790"]},c="\u57fa\u4e8e OpenTelemetry \u7684\u94fe\u8def\u8ffd\u8e2a",l={permalink:"/en/blog/go-kratos-opentelemetry-practice",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/blog/2021-06-03-go-kratos-OpenTelemetry.md",source:"@site/blog/2021-06-03-go-kratos-OpenTelemetry.md",title:"Kratos \u5b66\u4e60\u7b14\u8bb0 - \u57fa\u4e8e OpenTelemetry \u7684\u94fe\u8def\u8ffd\u8e2a",description:"\u5206\u5e03\u5f0f\u8ddf\u8e2a\uff08\u4e5f\u79f0\u4e3a\u5206\u5e03\u5f0f\u8bf7\u6c42\u8ddf\u8e2a\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u5206\u6790\u548c\u76d1\u63a7\u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u6cd5\uff0c\u5c24\u5176\u662f\u4f7f\u7528\u5fae\u670d\u52a1\u67b6\u6784\u6784\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u5206\u5e03\u5f0f\u8ddf\u8e2a\u6709\u52a9\u4e8e\u7cbe\u786e\u5b9a\u4f4d\u6545\u969c\u53d1\u751f\u7684\u4f4d\u7f6e\u4ee5\u53ca\u5bfc\u81f4\u6027\u80fd\u5dee\u7684\u539f\u56e0\u3002",date:"2021-06-03T00:00:00.000Z",formattedDate:"June 3, 2021",tags:[{label:"go",permalink:"/en/blog/tags/go"},{label:"golang",permalink:"/en/blog/tags/golang"},{label:"\u94fe\u8def\u8ffd\u8e2a",permalink:"/en/blog/tags/\u94fe\u8def\u8ffd\u8e2a"},{label:"OpenTelemetry",permalink:"/en/blog/tags/open-telemetry"},{label:"\u6e90\u7801\u5206\u6790",permalink:"/en/blog/tags/\u6e90\u7801\u5206\u6790"}],readingTime:10.505,truncated:!1,authors:[{name:"shenqidebaozi",title:"Maintainer of go-kratos",url:"https://github.com/shenqidebaozi",imageURL:"https://avatars.githubusercontent.com/u/35397691?s=60&v=4"}],frontMatter:{slug:"go-kratos-opentelemetry-practice",title:"Kratos \u5b66\u4e60\u7b14\u8bb0 - \u57fa\u4e8e OpenTelemetry \u7684\u94fe\u8def\u8ffd\u8e2a",description:"\u5206\u5e03\u5f0f\u8ddf\u8e2a\uff08\u4e5f\u79f0\u4e3a\u5206\u5e03\u5f0f\u8bf7\u6c42\u8ddf\u8e2a\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u5206\u6790\u548c\u76d1\u63a7\u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u6cd5\uff0c\u5c24\u5176\u662f\u4f7f\u7528\u5fae\u670d\u52a1\u67b6\u6784\u6784\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u5206\u5e03\u5f0f\u8ddf\u8e2a\u6709\u52a9\u4e8e\u7cbe\u786e\u5b9a\u4f4d\u6545\u969c\u53d1\u751f\u7684\u4f4d\u7f6e\u4ee5\u53ca\u5bfc\u81f4\u6027\u80fd\u5dee\u7684\u539f\u56e0\u3002",keywords:["Go","Kratos","OpenTracing","OpenCencus","OpenTelemetry","Google","Dapper","operation process"],author:"shenqidebaozi",author_title:"Maintainer of go-kratos",author_url:"https://github.com/shenqidebaozi",author_image_url:"https://avatars.githubusercontent.com/u/35397691?s=60&v=4",tags:["go","golang","\u94fe\u8def\u8ffd\u8e2a","OpenTelemetry","\u6e90\u7801\u5206\u6790"]},prevItem:{title:"Go\u5de5\u7a0b\u5316 - \u4f9d\u8d56\u6ce8\u5165",permalink:"/en/blog/go-project-wire"},nextItem:{title:"Kratos \u5b66\u4e60\u7b14\u8bb0 - \u901a\u8fc7 layout \u7b80\u5355\u5206\u6790\u5e94\u7528\u662f\u5982\u4f55\u8dd1\u8d77\u6765\u7684",permalink:"/en/blog/go-layout-operation-process"}},s={authorsImageUrls:[void 0]},g=[{value:"\u94fe\u8def\u8ffd\u8e2a\u7684\u524d\u4e16\u4eca\u751f",id:"\u94fe\u8def\u8ffd\u8e2a\u7684\u524d\u4e16\u4eca\u751f",level:2},{value:"\u767e\u5bb6\u4e89\u8273",id:"\u767e\u5bb6\u4e89\u8273",level:3},{value:"\u4e89\u950b\u76f8\u5bf9\uff1f",id:"\u4e89\u950b\u76f8\u5bf9",level:3},{value:"OpenTelemetry \u8bde\u751f",id:"opentelemetry-\u8bde\u751f",level:3},{value:"Kratos \u7684\u94fe\u8def\u8ffd\u8e2a\u5b9e\u8df5",id:"kratos-\u7684\u94fe\u8def\u8ffd\u8e2a\u5b9e\u8df5",level:2},{value:"tracing \u4e2d\u95f4\u4ef6",id:"tracing-\u4e2d\u95f4\u4ef6",level:3},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:4},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:4},{value:"\u5728 grpc/server \u4e2d\u4f7f\u7528",id:"\u5728-grpcserver-\u4e2d\u4f7f\u7528",level:4},{value:"\u5728 grpc/client \u4e2d\u4f7f\u7528",id:"\u5728-grpcclient-\u4e2d\u4f7f\u7528",level:4},{value:"\u5728 http/server \u4e2d\u4f7f\u7528",id:"\u5728-httpserver-\u4e2d\u4f7f\u7528",level:4},{value:"\u5728 http/client \u4e2d\u4f7f\u7528",id:"\u5728-httpclient-\u4e2d\u4f7f\u7528",level:4},{value:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u5176\u4ed6\u573a\u666f\u7684 tracing",id:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u5176\u4ed6\u573a\u666f\u7684-tracing",level:4},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],m={toc:g};function u(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u94fe\u8def\u8ffd\u8e2a\u7684\u524d\u4e16\u4eca\u751f"},"\u94fe\u8def\u8ffd\u8e2a\u7684\u524d\u4e16\u4eca\u751f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5206\u5e03\u5f0f\u8ddf\u8e2a\uff08\u4e5f\u79f0\u4e3a\u5206\u5e03\u5f0f\u8bf7\u6c42\u8ddf\u8e2a\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u5206\u6790\u548c\u76d1\u63a7\u5e94\u7528\u7a0b\u5e8f\u7684\u65b9\u6cd5\uff0c\u5c24\u5176\u662f\u4f7f\u7528\u5fae\u670d\u52a1\u67b6\u6784\u6784\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u5206\u5e03\u5f0f\u8ddf\u8e2a\u6709\u52a9\u4e8e\u7cbe\u786e\u5b9a\u4f4d\u6545\u969c\u53d1\u751f\u7684\u4f4d\u7f6e\u4ee5\u53ca\u5bfc\u81f4\u6027\u80fd\u5dee\u7684\u539f\u56e0\u3002   "),(0,o.kt)("h3",{parentName:"blockquote",id:"\u8d77\u6e90"},"\u8d77\u6e90"),(0,o.kt)("p",{parentName:"blockquote"},"\u94fe\u8def\u8ffd\u8e2a(Distributed Tracing)\u3000\u4e00\u8bcd\u6700\u65e9\u51fa\u73b0\u4e8e\u8c37\u6b4c\u53d1\u5e03\u7684\u8bba\u6587 ",(0,o.kt)("strong",{parentName:"p"},"\u300aDapper, a Large-Scale Distributed Systems Tracing Infrastructure\u300b")," \u4e2d,\u8fd9\u7bc7\u8bba\u6587\u5bf9\u4e8e\u5b9e\u73b0\u94fe\u8def\u8ffd\u8e2a,\u5bf9\u4e8e\u540e\u6765\u51fa\u73b0\u7684 Jaeger\u3001Zipkin \u7b49\u5f00\u6e90\u5206\u5e03\u5f0f\u8ffd\u8e2a\u9879\u76ee\u8bbe\u8ba1\u7406\u5ff5\u4ecd\u6709\u5f88\u6df1\u7684\u5f71\u54cd\u3002")),(0,o.kt)("p",null,"\u5fae\u670d\u52a1\u67b6\u6784\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u67b6\u6784,\u4f1a\u6709\u5f88\u591a\u4e2a\u4e0d\u540c\u7684\u670d\u52a1\u3002\u4e0d\u540c\u7684\u670d\u52a1\u4e4b\u524d\u76f8\u4e92\u8c03\u7528,\u5982\u679c\u51fa\u73b0\u4e86\u9519\u8bef\u7531\u4e8e\u4e00\u4e2a\u8bf7\u6c42\u7ecf\u8fc7\u4e86 N \u4e2a\u670d\u52a1\u3002\u968f\u7740\u4e1a\u52a1\u7684\u589e\u52a0\u8d8a\u6765\u8d8a\u591a\u7684\u670d\u52a1\u4e4b\u95f4\u7684\u8c03\u7528\uff0c\u5982\u679c\u6ca1\u6709\u4e00\u4e2a\u5de5\u5177\u53bb\u8bb0\u5f55\u8c03\u7528\u94fe\uff0c\u89e3\u51b3\u95ee\u9898\u7684\u65f6\u5019\u5c31\u4f1a\u50cf\u4e0b\u9762\u56fe\u7247\u91cc\u5c0f\u732b\u54aa\u73a9\u7684\u6bdb\u7ebf\u7403\u4e00\u6837\uff0c\u6beb\u65e0\u5934\u7eea\uff0c\u65e0\u4ece\u4e0b\u624b\n",(0,o.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2dd5606765649969819396ba574a741~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}),"\n\u6240\u4ee5\u9700\u8981\u6709\u4e00\u4e2a\u5de5\u5177\u80fd\u591f\u6e05\u695a\u7684\u4e86\u89e3\u4e00\u4e2a\u8bf7\u6c42\u7ecf\u8fc7\u4e86\u54ea\u4e9b\u670d\u52a1,\u987a\u5e8f\u662f\u5982\u4f55,\u4ece\u800c\u80fd\u591f\u8f7b\u6613\u7684\u5b9a\u4f4d\u95ee\u9898\u3002\n",(0,o.kt)("img",{parentName:"p",src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7098634cefe74a3cbacf5e76c343bd81~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"})),(0,o.kt)("h3",{id:"\u767e\u5bb6\u4e89\u8273"},"\u767e\u5bb6\u4e89\u8273"),(0,o.kt)("p",null,"\u4ece\u8c37\u6b4c\u53d1\u5e03 ",(0,o.kt)("strong",{parentName:"p"},"Dapper")," \u540e\uff0c\u5206\u5e03\u5f0f\u94fe\u8def\u8ffd\u8e2a\u5de5\u5177\u8d8a\u6765\u8d8a\u591a\uff0c\u4ee5\u4e0b\u7b80\u5355\u5217\u4e3e\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u94fe\u8def\u8ffd\u8e2a\u7cfb\u7edf"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Skywalking"),(0,o.kt)("li",{parentName:"ul"},"\u963f\u91cc \u9e70\u773c"),(0,o.kt)("li",{parentName:"ul"},"\u5927\u4f17\u70b9\u8bc4 CAT"),(0,o.kt)("li",{parentName:"ul"},"Twitter Zipkin"),(0,o.kt)("li",{parentName:"ul"},"Naver pinpoint"),(0,o.kt)("li",{parentName:"ul"},"Uber Jaeger")),(0,o.kt)("h3",{id:"\u4e89\u950b\u76f8\u5bf9"},"\u4e89\u950b\u76f8\u5bf9\uff1f"),(0,o.kt)("p",null,"\u968f\u7740\u94fe\u8def\u8ffd\u8e2a\u5de5\u5177\u8d8a\u6765\u8d8a\u591a\uff0c\u5f00\u6e90\u9886\u57df\u4e3b\u8981\u5206\u4e3a\u4e24\u6d3e\uff0c\u4e00\u6d3e\u662f\u4ee5 ",(0,o.kt)("strong",{parentName:"p"},"CNCF\u6280\u672f\u59d4\u5458")," \u4f1a\u4e3a\u4e3b\u7684  ",(0,o.kt)("strong",{parentName:"p"},"OpenTracing")," \u7684\u89c4\u8303\uff0c\u4f8b\u5982 jaeger zipkin \u90fd\u662f\u9075\u5faa\u4e86",(0,o.kt)("strong",{parentName:"p"},"OpenTracing")," \u7684\u89c4\u8303\u3002\u800c\u53e6\u4e00\u6d3e\u5219\u662f\u8c37\u6b4c\u4f5c\u4e3a\u53d1\u8d77\u8005\u7684 ",(0,o.kt)("strong",{parentName:"p"},"OpenCensus"),"\uff0c\u800c\u4e14\u8c37\u6b4c\u672c\u8eab\u8fd8\u662f\u6700\u65e9\u63d0\u51fa\u94fe\u8def\u8ffd\u8e2a\u6982\u5ff5\u7684\u516c\u53f8\uff0c\u540e\u671f\u8fde\u5fae\u8f6f\u4e5f\u52a0\u5165\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"OpenCensus"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3029f1315fe34ec884858d33d41cb1ce~tplv-k3u1fbpfcp-watermark.image",alt:"\u622a\u5c4f2021-05-29 \u4e0b\u53489.56.57.png"})),(0,o.kt)("h3",{id:"opentelemetry-\u8bde\u751f"},"OpenTelemetry \u8bde\u751f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OpenTelemetric \u662f\u4e00\u7ec4 API\u3001SDK\u3001\u6a21\u7ec4\u548c\u96c6\u6210\uff0c\u4e13\u4e3a\u521b\u5efa\u548c\u7ba1\u7406\u200e\u200e\u9065\u6d4b\u6570\u636e\u200e\u200e\uff08\u5982\u8ffd\u8e2a\u3001\u6307\u6807\u548c\u65e5\u5fd7\uff09\u800c\u8bbe")),(0,o.kt)("p",null,"\u5fae\u8f6f\u52a0\u5165 ",(0,o.kt)("strong",{parentName:"p"},"OpenCensus")," \u540e\uff0c\u76f4\u63a5\u6253\u7834\u4e86\u4e4b\u524d\u5e73\u8861\u7684\u5c40\u9762\uff0c\u95f4\u63a5\u7684\u5bfc\u81f4\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"OpenTelemetry")," \u7684\u8bde\u751f\n\u8c37\u6b4c\u548c\u5fae\u8f6f\u4e0b\u5b9a\u51b3\u5fc3\u7ed3\u675f\u6c5f\u6e56\u4e4b\u4e71\uff0c\u9996\u8981\u7684\u95ee\u9898\u662f\u5982\u4f55\u6574\u5408\u4e24\u4e2a\u4e24\u4e2a\u793e\u533a\u5df2\u6709\u7684\u9879\u76ee\uff0cOpenTelemetry \u4e3b\u8981\u7684\u7406\u5ff5\u5c31\u662f\uff0c\u517c\u5bb9 ",(0,o.kt)("strong",{parentName:"p"},"OpenCensus")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"OpenTracing")," \uff0c\u53ef\u4ee5\u8ba9\u4f7f\u7528\u8005\u65e0\u9700\u6539\u52a8\u6216\u8005\u5f88\u5c0f\u7684\u6539\u52a8\u5c31\u53ef\u4ee5\u63a5\u5165 ",(0,o.kt)("strong",{parentName:"p"},"OpenTelemetry")),(0,o.kt)("h2",{id:"kratos-\u7684\u94fe\u8def\u8ffd\u8e2a\u5b9e\u8df5"},"Kratos \u7684\u94fe\u8def\u8ffd\u8e2a\u5b9e\u8df5"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Kratos \u4e00\u5957\u8f7b\u91cf\u7ea7 Go \u5fae\u670d\u52a1\u6846\u67b6\uff0c\u5305\u542b\u5927\u91cf\u5fae\u670d\u52a1\u76f8\u5173\u6846\u67b6\u53ca\u5de5\u5177\u3002")),(0,o.kt)("h3",{id:"tracing-\u4e2d\u95f4\u4ef6"},"tracing \u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"kratos \u6846\u67b6\u63d0\u4f9b\u7684\u81ea\u5e26\u4e2d\u95f4\u4ef6\u4e2d\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"tracing")," \u4e2d\u95f4\u4ef6\uff0c\u5b83\u57fa\u4e8e ",(0,o.kt)("strong",{parentName:"p"},"Opentelemetry")," \u5b9e\u73b0\u4e86kratos \u6846\u67b6\u7684\u94fe\u8def\u8ffd\u8e2a\u529f\u80fd\uff0c\u4e2d\u95f4\u4ef6\u7684\u4ee3\u7801\u53ef\u4ee5\u4ece ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/go-kratos/kratos/tree/main/middleware/tracing"},"middleware/tracing"))," \u4e2d\u770b\u5230\u3002"),(0,o.kt)("h4",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,o.kt)("p",null,"kratos \u7684\u94fe\u8def\u8ffd\u8e2a\u4e2d\u95f4\u4ef6\u7531\u4e09\u4e2a\u6587\u4ef6\u7ec4\u6210 ",(0,o.kt)("strong",{parentName:"p"},"carrie.go"),",",(0,o.kt)("strong",{parentName:"p"},"tracer.go"),",",(0,o.kt)("strong",{parentName:"p"},"tracing.go"),"\u3002client\u548c server \u7684\u5b9e\u73b0\u539f\u7406\u57fa\u672c\u76f8\u540c\uff0c\u672c\u6587\u4ee5 server \u5b9e\u73b0\u8fdb\u884c\u539f\u7406\u89e3\u6790\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9996\u5148\u5f53\u8bf7\u6c42\u8fdb\u5165\u65f6\uff0c",(0,o.kt)("strong",{parentName:"li"},"tracing")," \u4e2d\u95f4\u4ef6\u4f1a\u88ab\u8c03\u7528,\u9996\u5148\u8c03\u7528\u4e86 ",(0,o.kt)("strong",{parentName:"li"},"tracer.go")," \u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"li"},"NewTracer")," \u65b9\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Server returns a new server middleware for OpenTelemetry.\nfunc Server(opts ...Option) middleware.Middleware {\n        // \u8c03\u7528 tracer.go \u4e2d\u7684 NewTracer \u4f20\u5165\u4e86\u4e00\u4e2a SpanKindServer \u548c\u914d\u7f6e\u9879\n    tracer := NewTracer(trace.SpanKindServer, opts...)\n        // ... \u7701\u7565\u4ee3\u7801\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"tracer.go")," \u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"li"},"NewTracer")," \u65b9\u6cd5\u88ab\u8c03\u7528\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"li"},"Tracer"),",\u5b9e\u73b0\u5982\u4e0b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func NewTracer(kind trace.SpanKind, opts ...Option) *Tracer {\n    options := options{}\n    for _, o := range opts {\n        o(&options)\n    }\n    // \u5224\u65ad\u662f\u5426\u5b58\u5728 otel \u8ffd\u8e2a\u63d0\u4f9b\u8005\u914d\u7f6e\uff0c\u5982\u679c\u5b58\u5728\u5219\u8bbe\u7f6e\n    if options.TracerProvider != nil {\n        otel.SetTracerProvider(options.TracerProvider)\n    }\n    /*\n    \u5224\u65ad\u662f\u5426\u5b58\u5728 Propagators \u8bbe\u7f6e\uff0c\u5982\u679c\u5b58\u5728\u8bbe\u7f6e\u5219\u8986\u76d6\uff0c\u4e0d\u5b58\u5728\u5219\u8bbe\u7f6e\u4e00\u4e2a\u9ed8\u8ba4\u7684TextMapPropagator\n    \u6ce8\u610f\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u9ed8\u8ba4\u7684TextMapPropagator,\u94fe\u8def\u4fe1\u606f\u5219\u65e0\u6cd5\u6b63\u786e\u7684\u4f20\u9012\n    */\n    if options.Propagators != nil {\n        otel.SetTextMapPropagator(options.Propagators)\n    } else {    otel.SetTextMapPropagator(propagation.NewCompositeTextMapPropagator(propagation.Baggage{}, propagation.TraceContext{}))\n    }\n\n\n    var name string\n    // \u5224\u65ad\u5f53\u524d\u4e2d\u95f4\u4ef6\u7684\u7c7b\u578b\uff0c\u662f server \u8fd8\u662f client\n    if kind == trace.SpanKindServer {\n        name = "server"\n    } else if kind == trace.SpanKindClient {\n        name = "client"\n    } else {\n        panic(fmt.Sprintf("unsupported span kind: %v", kind))\n    }\n    // \u8c03\u7528 otel\u5305\u7684 Tracer \u65b9\u6cd5 \u4f20\u5165 name \u7528\u6765\u521b\u5efa\u4e00\u4e2a tracer \u5b9e\u4f8b\n    tracer := otel.Tracer(name)\n    return &Tracer{tracer: tracer, kind: kind}\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5224\u65ad\u5f53\u524d\u8bf7\u6c42\u7c7b\u578b\uff0c\u5904\u7406\u9700\u8981\u91c7\u96c6\u7684\u6570\u636e\uff0c\u5e76\u8c03\u7528 ",(0,o.kt)("strong",{parentName:"li"},"tracer.go")," \u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"li"},"Start")," \u65b9\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'var (\n    component string\n    operation string\n    carrier   propagation.TextMapCarrier\n)\n// \u5224\u65ad\u8bf7\u6c42\u7c7b\u578b\nif info, ok := http.FromServerContext(ctx); ok {\n    // HTTP\n    component = "HTTP"\n    // \u53d6\u51fa\u8bf7\u6c42\u7684\u5730\u5740\n    operation = info.Request.RequestURI\n    // \u8c03\u7528 otel/propagation\u5305\u4e2d\u7684 HeaderCarrier\uff0c\u4f1a\u5904\u7406 http.Header \u4ee5\u7528\u6765\u6ee1\u8db3TextMapCarrier interface\n    // TextMapCarrier \u662f\u4e00\u4e2a\u6587\u672c\u6620\u5c04\u8f7d\u4f53\uff0c\u7528\u4e8e\u627f\u8f7d\u4fe1\u606f\n    carrier = propagation.HeaderCarrier(info.Request.Header)\n    // otel.GetTextMapPropagator().Extract() \u65b9\u6cd5\u7528\u4e8e\u5c06\u6587\u672c\u6620\u5c04\u8f7d\u4f53\uff0c\u8bfb\u53d6\u5230\u4e0a\u4e0b\u6587\u4e2d\n    ctx = otel.GetTextMapPropagator().Extract(ctx, propagation.HeaderCarrier(info.Request.Header))\n} else if info, ok := grpc.FromServerContext(ctx); ok {\n    // Grpc\n    component = "gRPC"\n    operation = info.FullMethod\n    //\n    // \u8c03\u7528 grpc/metadata\u5305\u4e2dmetadata.FromIncomingContext(ctx)\u4f20\u5165 ctx\uff0c\u8f6c\u6362 grpc \u7684\u5143\u6570\u636e\n    if md, ok := metadata.FromIncomingContext(ctx); ok {\n        // \u8c03\u7528carrier.go \u4e2d\u7684 MetadataCarrier \u5c06 MD \u8f6c\u6362 \u6210\u6587\u672c\u6620\u5c04\u8f7d\u4f53\n        carrier = MetadataCarrier(md)\n    }\n}\n// \u8c03\u7528 tracer.Start \u65b9\u6cd5\nctx, span := tracer.Start(ctx, component, operation, carrier)\n// ... \u7701\u7565\u4ee3\u7801\n}\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,o.kt)("strong",{parentName:"li"},"tracing.go")," \u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"li"},"Start")," \u65b9\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (t *Tracer) Start(ctx context.Context, component string, operation string, carrier propagation.TextMapCarrier) (context.Context, trace.Span) {\n    // \u5224\u65ad\u5f53\u524d\u4e2d\u95f4\u4ef6\u5982\u679c\u662f server\u5219\u5c06 carrier \u6ce8\u5165\u5230\u4e0a\u4e0b\u6587\u4e2d\n    if t.kind == trace.SpanKindServer {\n        ctx = otel.GetTextMapPropagator().Extract(ctx, carrier)\n    }\n    // \u8c03\u7528otel/tracer \u5305\u4e2d\u7684 start \u65b9\u6cd5\uff0c\u7528\u6765\u521b\u5efa\u4e00\u4e2a span\n    ctx, span := t.tracer.Start(ctx,\n        // tracing.go \u4e2d\u58f0\u660e\u7684\u8bf7\u6c42\u8def\u7531\u4f5c\u4e3a spanName\n        operation,\n        // \u8bbe\u7f6e span \u7684\u5c5e\u6027\uff0c\u8bbe\u7f6e\u4e86\u4e00\u4e2a component\uff0ccomponent\u7684\u503c\u4e3a\u8bf7\u6c42\u7c7b\u578b\n        trace.WithAttributes(attribute.String("component", component)),\n        // \u8bbe\u7f6e span\u79cd\u7c7b\n        trace.WithSpanKind(t.kind),\n    )\n    // \u5224\u65ad\u5982\u679c\u5f53\u524d\u4e2d\u95f4\u4ef6\u662f client \u5219\u5c06 carrier \u6ce8\u5165\u5230\u8bf7\u6c42\u91cc\u9762\n    if t.kind == trace.SpanKindClient {\n        otel.GetTextMapPropagator().Inject(ctx, carrier)\n    }\n    return ctx, span\n}\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"defer")," \u58f0\u660e\u4e86\u4e00\u4e2a\u95ed\u5305\u65b9\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"// \u8fd9\u4e2a\u5730\u65b9\u8981\u6ce8\u610f\uff0c\u9700\u8981\u4f7f\u7528\u95ed\u5305\uff0c\u56e0\u4e3a defer \u7684\u53c2\u6570\u662f\u5b9e\u65f6\u8ba1\u7b97\u7684\u5982\u679c\u5f02\u5e38\u53d1\u751f\uff0cerr \u4f1a\u4e00\u76f4\u4e3a nil\n// https://github.com/go-kratos/kratos/issues/927\ndefer func() { tracer.End(ctx, span, err) }()\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"\u4e2d\u95f4\u4ef6\u7ee7\u7eed\u6267\u884c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// tracing.go 69\u884c\nreply, err = handler(ctx, req)\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"\u4e2d\u95f4\u4ef6\u8c03\u7528\u7ed3\u675f ",(0,o.kt)("strong",{parentName:"li"},"defer")," \u4e2d\u7684\u95ed\u5305\u88ab\u8c03\u7528\u540e\u6267\u884c\u4e86 ",(0,o.kt)("strong",{parentName:"li"},"tracer.go")," \u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"li"},"End")," \u65b9\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (t *Tracer) End(ctx context.Context, span trace.Span, err error) {\n    // \u5224\u65ad\u662f\u5426\u6709\u5f02\u5e38\u53d1\u751f\uff0c\u5982\u679c\u6709\u5219\u8bbe\u7f6e\u4e00\u4e9b\u5f02\u5e38\u4fe1\u606f\n    if err != nil {\n        // \u8bb0\u5f55\u5f02\u5e38\n        span.RecordError(err)\n        // \u8bbe\u7f6espan \u5c5e\u6027\n        span.SetAttributes(\n            // \u8bbe\u7f6e\u4e8b\u4ef6\u4e3a\u5f02\u5e38\n            attribute.String("event", "error"),\n            // \u8bbe\u7f6e message \u4e3a err.Error().\n            attribute.String("message", err.Error()),\n        )\n        //\u8bbe\u7f6e\u4e86 span \u7684\u72b6\u6001\n        span.SetStatus(codes.Error, err.Error())\n    } else {\n        // \u5982\u679c\u6ca1\u6709\u53d1\u751f\u5f02\u5e38\uff0cspan \u72b6\u6001\u5219\u4e3a ok\n        span.SetStatus(codes.Ok, "OK")\n    }\n    // \u4e2d\u6b62 span\n    span.End()\n}\n')),(0,o.kt)("h4",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,o.kt)("p",null,"tracing \u4e2d\u95f4\u4ef6\u7684\u4f7f\u7528\u793a\u4f8b\u53ef\u4ee5\u4ece  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/examples/traces"},"kratos/examples/traces")," ,\u8be5\u793a\u4f8b\u7b80\u5355\u7684\u5b9e\u73b0\u4e86\u8de8\u670d\u52a1\u95f4\u7684\u94fe\u8def\u8ffd\u8e2a,\u4ee5\u4e0b\u4ee3\u7801\u7247\u6bb5\u5305\u542b\u90e8\u5206\u793a\u4f8b\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// https://github.com/go-kratos/kratos/blob/7f835db398c9d0332e69b81bad4c652b4b45ae2e/examples/traces/app/message/main.go#L38\n// \u9996\u5148\u8c03\u7528otel \u5e93\u65b9\u6cd5\uff0c\u5f97\u5230\u4e00\u4e2a TracerProvider\nfunc tracerProvider(url string) (*tracesdk.TracerProvider, error) {\n    // examples/traces \u4e2d\u4f7f\u7528\u7684\u662f jaeger\uff0c\u5176\u4ed6\u65b9\u5f0f\u53ef\u4ee5\u67e5\u770b opentelemetry \u5b98\u65b9\u793a\u4f8b\n    exp, err := jaeger.NewRawExporter(jaeger.WithCollectorEndpoint(jaeger.WithEndpoint(url)))\n    if err != nil {\n        return nil, err\n    }\n    tp := tracesdk.NewTracerProvider(\n        tracesdk.WithSampler(tracesdk.AlwaysSample()),\n        // \u8bbe\u7f6e Batcher\uff0c\u6ce8\u518cjaeger\u5bfc\u51fa\u7a0b\u5e8f\n        tracesdk.WithBatcher(exp),\n        // \u8bb0\u5f55\u4e00\u4e9b\u9ed8\u8ba4\u4fe1\u606f\n        tracesdk.WithResource(resource.NewWithAttributes(\n            semconv.ServiceNameKey.String(pb.User_ServiceDesc.ServiceName),\n            attribute.String("environment", "development"),\n            attribute.Int64("ID", 1),\n        )),\n    )\n    return tp, nil\n}\n')),(0,o.kt)("h4",{id:"\u5728-grpcserver-\u4e2d\u4f7f\u7528"},"\u5728 grpc/server \u4e2d\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// https://github.com/go-kratos/kratos/blob/main/examples/traces/app/message/main.go\ngrpcSrv := grpc.NewServer(\n    grpc.Address(":9000"),\n    grpc.Middleware(\n        // Configuring tracing Middleware\n        tracing.Server(\n            tracing.WithTracerProvider(tp),\n        ),\n    ),\n)\n')),(0,o.kt)("h4",{id:"\u5728-grpcclient-\u4e2d\u4f7f\u7528"},"\u5728 grpc/client \u4e2d\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// https://github.com/go-kratos/kratos/blob/149fc0195eb62ee1fbc2728adb92e1bcd1a12c4e/examples/traces/app/user/main.go#L63\nconn, err := grpc.DialInsecure(ctx,\n    grpc.WithEndpoint("127.0.0.1:9000"),\n    grpc.WithMiddleware(\n        tracing.Client(\n            tracing.WithTracerProvider(s.tracer),\n            tracing.WithPropagators(\n                propagation.NewCompositeTextMapPropagator(propagation.Baggage{}, propagation.TraceContext{}),\n            ),\n        )\n    ),\n    grpc.WithTimeout(2*time.Second),\n)\n')),(0,o.kt)("h4",{id:"\u5728-httpserver-\u4e2d\u4f7f\u7528"},"\u5728 http/server \u4e2d\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// https://github.com/go-kratos/kratos/blob/main/examples/traces/app/user/main.go\nhttpSrv := http.NewServer(http.Address(":8000"))\nhttpSrv.HandlePrefix("/", pb.NewUserHandler(s,\n    http.Middleware(\n        // Configuring tracing middleware\n        tracing.Server(\n            tracing.WithTracerProvider(tp),\n            tracing.WithPropagators(\n                propagation.NewCompositeTextMapPropagator(propagation.Baggage{}, propagation.TraceContext{}),\n            ),\n        ),\n    ),\n)\n')),(0,o.kt)("h4",{id:"\u5728-httpclient-\u4e2d\u4f7f\u7528"},"\u5728 http/client \u4e2d\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"http.NewClient(ctx, http.WithMiddleware(\n    tracing.Client(\n        tracing.WithTracerProvider(s.tracer),\n    ),\n))\n")),(0,o.kt)("h4",{id:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u5176\u4ed6\u573a\u666f\u7684-tracing"},"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u5176\u4ed6\u573a\u666f\u7684 tracing"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u501f\u9274 ",(0,o.kt)("strong",{parentName:"p"},"kratos")," \u7684 ",(0,o.kt)("strong",{parentName:"p"},"tracing")," \u4e2d\u95f4\u4ef6\u7684\u4ee3\u7801\u6765\u5b9e\u73b0\u4f8b\u5982\u6570\u636e\u5e93\u7684 ",(0,o.kt)("strong",{parentName:"p"},"tracing"),"\uff0c\u5982\u4e0b\u9762\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u4f5c\u8005\u501f\u9274\u4e86",(0,o.kt)("strong",{parentName:"p"},"tracing")," \u4e2d\u95f4\u4ef6\uff0c\u5b9e\u73b0\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"qmgo")," \u5e93\u64cd\u4f5c ",(0,o.kt)("strong",{parentName:"p"},"MongoDB")," \u6570\u636e\u5e93\u7684 ",(0,o.kt)("strong",{parentName:"p"},"tracing"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func mongoTracer(ctx context.Context,tp trace.TracerProvider, command interface{}) {\n    var (\n        commandName string\n        failure     string\n        nanos       int64\n        reply       bson.Raw\n        queryId     int64\n        eventName   string\n    )\n    otel.SetTracerProvider(tp)\n    reply = bson.Raw{}\n    switch value := command.(type) {\n    case *event.CommandStartedEvent:\n        commandName = value.CommandName\n        reply = value.Command\n        queryId = value.RequestID\n        eventName = "CommandStartedEvent"\n    case *event.CommandSucceededEvent:\n        commandName = value.CommandName\n        nanos = value.DurationNanos\n        queryId = value.RequestID\n        eventName = "CommandSucceededEvent"\n    case *event.CommandFailedEvent:\n        commandName = value.CommandName\n        failure = value.Failure\n        nanos = value.DurationNanos\n        queryId = value.RequestID\n        eventName = "CommandFailedEvent"\n    }\n    duration, _ := time.ParseDuration(strconv.FormatInt(nanos, 10) + "ns")\n    tracer := otel.Tracer("mongodb")\n    kind := trace.SpanKindServer\n    ctx, span := tracer.Start(ctx,\n        commandName,\n        trace.WithAttributes(\n            attribute.String("event", eventName),\n            attribute.String("command", commandName),\n            attribute.String("query", reply.String()),\n            attribute.Int64("queryId", queryId),\n            attribute.String("ms", duration.String()),\n        ),\n        trace.WithSpanKind(kind),\n    )\n    if failure != "" {\n        span.RecordError(errors.New(failure))\n    }\n    span.End()\n}\n')),(0,o.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.researchgate.net/publication/239595848_Dapper_a_Large-Scale_Distributed_Systems_Tracing_Infrastructure"},"\u8c37\u6b4c\u8bba\u6587\u300aDapper, a Large-Scale Distributed Systems Tracing Infrastructure\u300b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://opentelemetry.io/"},"OpenTelemetry \u5b98\u7f51")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://static.sched.com/hosted_files/kccncosschn19chi/03/OpenTelemetry_%20Overview%20%26%20Backwards%20Compatibility%20of%20OpenTracing%20%2B%20OpenCensus%20-%20Steve%20Flanders%2C%20Omnition.pdf"},"KubeCon2019 OpenTelemetry\u5206\u4eab")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://go-kratos.dev/docs/getting-started/start"},"Kratos \u6846\u67b6")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/traces"},"traces \u793a\u4f8b"))))}u.isMDXComponent=!0}}]);