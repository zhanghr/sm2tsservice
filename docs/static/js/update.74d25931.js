(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./update.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/esm.js")),i={},l="wrapper";function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(b.b)(l,Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"\u98ce\u9669\u5904\u7f6e\u6307\u5357"},"\u98ce\u9669\u5904\u7f6e\u6307\u5357"),Object(b.b)("h2",{id:"\u6280\u672f\u65b9\u6848\u4ecb\u7ecd"},"\u6280\u672f\u65b9\u6848\u4ecb\u7ecd"),Object(b.b)("h3",{id:"\u5173\u952e\u8bcd"},"\u5173\u952e\u8bcd"),Object(b.b)("h4",{id:"tags"},"tags"),Object(b.b)("p",null,"\u751f\u6210\u4e0e tags \u4e00\u4e00\u5bf9\u5e94\u7684 service \u6587\u4ef6\uff0c\u6bd4\u5982 ",Object(b.b)("inlineCode",{parentName:"p"},'"User" => "UserApi.ts"')," - \u6240\u4ee5 tags \u4e00\u65e6\u8bbe\u5b9a\u4e0d\u8bb8\u66f4\u6539"),Object(b.b)("p",null,"\u5de5\u5177\u4e0d\u80fd\u5904\u7406\u4e2d\u6587 - \u6240\u4ee5\u8981\u6c42 tags \u5fc5\u987b\u4e3a\u82f1\u6587\uff0c\u6240\u4ee5 yapi \u9700\u8981\u4e2d\u82f1\u6587\u6620\u5c04"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'  "yapiConfig": {\n    "categoryMap": {\n      "\u4e2d\u6587": "English"\n    }\n  }\n')),Object(b.b)("h4",{id:"operationid"},"operationId"),Object(b.b)("p",null,"\u6bcf\u4e2a\u63a5\u53e3\u5168\u5c40\u552f\u4e00\u7684\u64cd\u4f5c id\uff0c\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"p"},"controller method name + Using + http method name"),"\uff0c\u51fa\u73b0\u91cd\u540d\u4f1a\u81ea\u589e\u4e00 - \u4f46\u987a\u5e8f\u4e0d\u53ef\u63a7\uff0c\u5de5\u5177\u901a\u8fc7 operationId \u751f\u6210\u63a5\u53e3\u8c03\u7528\u4ee3\u7801\uff0c\u56e0\u6b64\u5b58\u5728\u903b\u8f91\u9519\u4e71\u7684\u98ce\u9669\uff0c\u534f\u4f5c\u65b9\u65e0\u6cd5\u9884\u6d4b\u5e76\u544a\u77e5\u53d8\u52a8"),Object(b.b)("h4",{id:"safe"},"safe"),Object(b.b)("p",null,"\u57fa\u4e8e ",Object(b.b)("inlineCode",{parentName:"p"},"url + Using + http method")," \u751f\u6210 ",Object(b.b)("inlineCode",{parentName:"p"},"operationId")," - \u552f\u4e00\u4e14\u53ef\u63a7\uff0c\u4ee5\u4e0a\u56e0\u7d20\u7684\u53d8\u52a8\uff0c\u534f\u4f5c\u65b9\u6709\u901a\u77e5\u4e49\u52a1"),Object(b.b)("h4",{id:"strict"},"strict"),Object(b.b)("p",null,"\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"safe")," \u7684\u57fa\u7840\u4e0a\uff0c\u6dfb\u52a0\u5bf9 ",Object(b.b)("inlineCode",{parentName:"p"},"tags")," ",Object(b.b)("inlineCode",{parentName:"p"},"definitions")," \u547d\u540d\u89c4\u8303\u6821\u9a8c"),Object(b.b)("h4",{id:"dto"},"DTO"),Object(b.b)("p",null,"swagger \u5b9a\u4e49\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5bf9\u5e94\u751f\u6210 typescript interface - \u5de5\u5177\u65e0\u6cd5\u5904\u7406\u4e2d\u6587\uff0c\u56e0\u6b64 DTO \u540d\u5b57\u5fc5\u987b\u662f\u82f1\u6587"),Object(b.b)("h4",{id:"params"},"params"),Object(b.b)("p",null,"\u53c2\u6570\u3001\u53d8\u91cf\u540d\u5fc5\u987b\u662f\u5c0f\u9a7c\u5cf0\u683c\u5f0f - \u53ca\u7b26\u5408\u524d\u7aef\u4ee3\u7801\u89c4\u8303\u3001\u5408\u6cd5\u7684\u53d8\u91cf\u540d\u3001\u5c5e\u6027\u540d"),Object(b.b)("h3",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),Object(b.b)("h4",{id:"swagger"},"swagger"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'  // \u63a7\u5236\u5668\n  @Api(tags="English", description="\u4e2d\u6587\u63cf\u8ff0") // tags \u7528\u4ee5\u751f\u6210 service \u5206\u7ec4\uff0c\u9ed8\u8ba4\u503c\u4e3a any-controller \u7c7b\u540d\n  class AnyController {\n    @ApiOperation(value="\u6982\u8ff0", notes="\u8be6\u7ec6\u63cf\u8ff0")\n    @ApiParam(name = "gender", value = "\u6027\u522b", required = true) // name \u5fc5\u987b\u4f7f\u7528\u5c0f\u9a7c\u5cf0\n    public doSomething() {} // \u751f\u6210 operationId\uff0c\u6bd4\u5982 doSomethingUsingGet_1, doSomethingUsingGet_2\n  }\n\n  // DTO\n  @Data\n  @ApiModel(value="English", description="\u7528\u6237\u57fa\u672c\u4fe1\u606f") // \u5fc5\u987b\u624b\u5199 value\uff0c\u4f7f\u7528[a-zA-Z0-9]\n  public class UserVO {}\n')),Object(b.b)("h4",{id:"mock"},"mock"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"  \u63a5\u53e3\u5206\u7c7b => tags\n")),Object(b.b)("h2",{id:"\u5904\u7f6e\u6307\u5357"},"\u5904\u7f6e\u6307\u5357"),Object(b.b)("h3",{id:"\u5347\u7ea7\u5de5\u5177"},"\u5347\u7ea7\u5de5\u5177"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"npm i -D @tkit/service // \u516c\u53f8\u5185 3.0.7+\nnpm i -D sm2tsservice  // \u516c\u53f8\u5916\u90e8 1.1.8+\n")),Object(b.b)("h3",{id:"\u5904\u7f6e\u65b9\u5f0f"},"\u5904\u7f6e\u65b9\u5f0f"),Object(b.b)("h4",{id:"\u516c\u5171\u903b\u8f91"},"\u516c\u5171\u903b\u8f91"),Object(b.b)("h5",{id:"\u53c2\u6570\u683c\u5f0f\u6821\u9a8c"},"\u53c2\u6570\u683c\u5f0f\u6821\u9a8c"),Object(b.b)("p",null,"\u5de5\u5177\u8981\u6c42\u65b0\u8001\u9879\u76ee\u53c2\u6570\u5fc5\u987b\u662f\u5c0f\u9a7c\u5cf0\u82f1\u6587\u683c\u5f0f\uff0c\u5426\u5219\u62a5\u9519\uff0c\u751f\u6210\u5931\u8d25"),Object(b.b)("h4",{id:"\u7279\u6b8a\u903b\u8f91"},"\u7279\u6b8a\u903b\u8f91"),Object(b.b)("p",null,"\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"p"},"mode")," \u63a7\u5236\u5de5\u5177\u7684\u884c\u4e3a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'{\n  "guardConfig": {\n    "mode": "strict" | "safe" | undefined\n  }\n}\n')),Object(b.b)("h5",{id:"\u7ef4\u6301\u73b0\u72b6"},"\u7ef4\u6301\u73b0\u72b6"),Object(b.b)("p",null,"\u8001\u9879\u76ee\uff0c\u4e0d\u914d\u7f6e ",Object(b.b)("inlineCode",{parentName:"p"},"mode"),"\uff0c\u91cd\u65b0\u751f\u6210 service \u4ee3\u7801\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u98ce\u9669 operationId\uff0c\u5219\u629b\u51fa\u9519\u8bef\u751f\u6210\u5931\u8d25\uff0c\u8f93\u51fa\u6620\u5c04\u5173\u7cfb\uff0c\u8bf7\u624b\u52a8\u5c06\u63d0\u793a\u6dfb\u52a0\u5230\u914d\u7f6e\u6587\u4ef6\u5185\uff0c\u5e76\u63d0\u4ea4\u5230\u4ed3\u5e93\uff0c\u5982\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'  "guardConfig": {\n    "methodUrl2OperationIdMap": {\n      {\n        "get /api/xxx/xxx": "operationId",\n        ...\n      }\n    }\n  }\n')),Object(b.b)("p",null,"\u540e\u7eed\u6709\u4efb\u4f55\u53d8\u52a8\u7684\u65f6\u5019\uff0c\u5de5\u5177\u4f1a\u6839\u636e\u672c\u5730\u5df2\u6709\u6620\u5c04\u5173\u7cfb\u5bf9 swagger \u8fd4\u56de ",Object(b.b)("inlineCode",{parentName:"p"},"operationId")," \u8fdb\u884c\u6821\u6b63\uff0c\u5e76\u5bf9\u589e\u5220\u6539\u505a\u51fa\u68c0\u6d4b\u63d0\u793a\uff0c\u786e\u4fdd\u4e1a\u52a1\u903b\u8f91\u4e0d\u53d7\u5f71\u54cd"),Object(b.b)("font",{color:"red"},"\u8b66\u544a"),Object(b.b)("blockquote",null,Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"@tkit/service@3.0.7 sm2tservice@1.1.8 \u672c\u8eab\u53ca\u4ee5\u4e0b\uff0c\u4ec5\u80fd\u786e\u4fdd\u521d\u6b21\u7ed9\u51fa\u7684\u6620\u5c04\u5efa\u8bae\u6b63\u786e"),Object(b.b)("li",{parentName:"ul"},"\u540e\u7eed\u7ed9\u51fa\u589e\u91cf\u6620\u5c04\u5173\u7cfb\uff0c\u52a1\u5fc5\u4eba\u5de5\u786e\u4fdd\u65b0\u589e\u6620\u5c04 ",Object(b.b)("inlineCode",{parentName:"li"},"operationId")," \u4e0d\u4e0e\u8001\u6620\u5c04 ",Object(b.b)("inlineCode",{parentName:"li"},"operationId")," \u91cd\u590d\uff0c\u6821\u6b63\u4e3a\u4efb\u4e00\u4e0d\u91cd\u590d\u6709\u8bed\u4e49\u503c\u5373\u53ef\uff0c\u5efa\u8bae ",Object(b.b)("inlineCode",{parentName:"li"},"url + Using + http method")," - \u5426\u5219\u53ef\u80fd\u4f1a\u62a5 java ",Object(b.b)("inlineCode",{parentName:"li"},"overload")," \u9519\u8bef\uff0c\u4e14\u540e\u7eed\u65e0\u6cd5\u5347\u7ea7\u5230 ",Object(b.b)("inlineCode",{parentName:"li"},"safe")," \u6a21\u5f0f"),Object(b.b)("li",{parentName:"ul"},"\u6216\u8bf7\u5347\u7ea7\u5230 @tkit/service@3.0.8+ sm2tservice@1.1.9+"))),Object(b.b)("h5",{id:"\u5b89\u5168\u6a21\u5f0f"},"\u5b89\u5168\u6a21\u5f0f"),Object(b.b)("p",null,"\u8001\u9879\u76ee\uff0c\u4e5f\u53ef\u4ee5\u914d\u7f6e ",Object(b.b)("inlineCode",{parentName:"p"},"mode")," \u4e3a ",Object(b.b)("inlineCode",{parentName:"p"},'"safe"'),"\uff0c\u5219\u5de5\u5177\u4f1a\u57fa\u4e8e ",Object(b.b)("inlineCode",{parentName:"p"},"url + Using + http method")," \u751f\u6210\u65b0\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"operationId")," \u4ee5\u751f\u6210\u66f4\u5b89\u5168\u548c\u8bed\u4e49\u5316\u7684\u63a5\u53e3\u8c03\u7528\u4ee3\u7801\uff0c\u4f46\u9700\u6ee1\u8db3"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5df2\u4fdd\u5b58 ",Object(b.b)("inlineCode",{parentName:"li"},"methodUrl2OperationIdMap")," \u6620\u5c04\u5173\u7cfb\u9501\u5b9a"),Object(b.b)("li",{parentName:"ul"},"\u4eba\u5de5\u66f4\u65b0 service \u8c03\u7528")),Object(b.b)("p",null,"\u5de5\u5177\u4f1a\u81ea\u52a8\u751f\u6210 ",Object(b.b)("inlineCode",{parentName:"p"},"\u65e7\u63a5\u53e3\u8c03\u7528")," => ",Object(b.b)("inlineCode",{parentName:"p"},"\u65b0\u63a5\u53e3\u8c03\u7528")," \u6620\u5c04\u5173\u7cfb\uff0c\u8bf7\u81ea\u4e0a\u800c\u4e0b\u4f9d\u6b21\u5168\u5c40\u66ff\u6362\u5373\u53ef\uff0c\u5982\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'{\n  "getUserNameUsingGet_2": "getUserNameUsingGet",\n  "getUserNameUsingGet_1": "getNameUsingGet",\n}\n')),Object(b.b)("h5",{id:"\u4e25\u683c\u6a21\u5f0f"},"\u4e25\u683c\u6a21\u5f0f"),Object(b.b)("p",null,"\u65b0\u9879\u76ee\uff0c\u4e00\u5f8b\u914d\u7f6e ",Object(b.b)("inlineCode",{parentName:"p"},"mode")," \u4e3a ",Object(b.b)("inlineCode",{parentName:"p"},'"strict"'),"\uff0c\u91c7\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},'"safe"')," \u76f8\u540c\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"operationId")," \u751f\u6210\u7b56\u7565"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u8981\u6c42 swagger \u6587\u6863 ",Object(b.b)("inlineCode",{parentName:"li"},"tags")," ",Object(b.b)("inlineCode",{parentName:"li"},"definitions")," ",Object(b.b)("inlineCode",{parentName:"li"},"params")," \u7b26\u5408\u547d\u540d\u89c4\u8303"),Object(b.b)("li",{parentName:"ul"},"\u3010\u6682\u65f6\u3011\u4ecd\u8981\u6c42\u5148\u4fdd\u5b58 ",Object(b.b)("inlineCode",{parentName:"li"},"methodUrl2OperationIdMap")," \u6620\u5c04\u5173\u7cfb\u9501\u5b9a\uff0c\u518d\u91cd\u65b0\u751f\u6210"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u76f4\u63a5\u5ffd\u7565\u65e7\u3001\u65b0\u63a5\u53e3\u8c03\u7528\u6620\u5c04\u5173\u7cfb\u63d0\u793a")))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"update.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=update.ea322f7583e86bf79e8c.js.map