"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[6068],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,m=c["".concat(i,".").concat(h)]||c[h]||u[h]||r;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2749:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(4137));const r={id:"Response_Validations",title:"Response Validations",sidebar_label:"Response Validations"},s=void 0,l={unversionedId:"Keywords/API/Response_Validations",id:"Keywords/API/Response_Validations",title:"Response Validations",description:"SHAFT API Response Validations",source:"@site/docs/Keywords/API/Response_Validations.md",sourceDirName:"Keywords/API",slug:"/Keywords/API/Response_Validations",permalink:"/docs/Keywords/API/Response_Validations",draft:!1,editUrl:"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Keywords/API/Response_Validations.md",tags:[],version:"current",frontMatter:{id:"Response_Validations",title:"Response Validations",sidebar_label:"Response Validations"},sidebar:"docs",previous:{title:"Response Getters",permalink:"/docs/Keywords/API/Response_Getters"},next:{title:"Overview",permalink:"/docs/Keywords/Validations/Overview"}},i={},p=[{value:"SHAFT API Response Validations",id:"shaft-api-response-validations",level:2},{value:"Body",id:"body",level:3},{value:"Usage",id:"usage",level:4},{value:"Extracted Json Value",id:"extracted-json-value",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Extracted Json Value As List",id:"extracted-json-value-as-list",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Time",id:"time",level:3},{value:"Usage",id:"usage-3",level:4},{value:"Is Equal To File Content",id:"is-equal-to-file-content",level:3},{value:"Does Not Equal File Content",id:"does-not-equal-file-content",level:3},{value:"Is Equal To File Content Ignoring Order",id:"is-equal-to-file-content-ignoring-order",level:3},{value:"Does Not Equal File Content Ignoring Order",id:"does-not-equal-file-content-ignoring-order",level:3},{value:"Contains File Content",id:"contains-file-content",level:3},{value:"Does not Contain File Content",id:"does-not-contain-file-content",level:3},{value:"Matches Schema",id:"matches-schema",level:3},{value:"Does Not Match Schema",id:"does-not-match-schema",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"shaft-api-response-validations"},"SHAFT API Response Validations"),(0,o.kt)("p",null,"Using the SHAFT API object to directly validate on the latest response directly is very convenient, let's see! ",(0,o.kt)("br",null),"\nWe need to use the SHAFT API Object then use the ",(0,o.kt)("strong",{parentName:"p"},"assertThatResponse()")," method (for hard assertion) or ",(0,o.kt)("strong",{parentName:"p"},"verifyThatResponse()")," method (for soft assertion) to access all the response validation methods, and ofcourse we need to add the ",(0,o.kt)("strong",{parentName:"p"},"perform();")," in the end to perform the validation correctly. ",(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)("h3",{id:"body"},"Body"),(0,o.kt)("p",null,"Validate on the response body ",(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("em",{parentName:"em"}," Calls the ",(0,o.kt)("a",{parentName:"em",href:"https://shafthq.github.io/SHAFT_Engine_Docusaurus/docs/Keywords/Validations/Objects"},"Object validation methods")," to contiue building your validation. "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'api.assertThatResponse().body().contains("data").perform();\n')),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'SHAFT.API api = new SHAFT.API("http://api.zippopotam.us/");\napi.get("us/90210").perform();\napi.assertThatResponse().body().contains("Beverly Hills").perform();\n')),(0,o.kt)("h3",{id:"extracted-json-value"},"Extracted Json Value"),(0,o.kt)("p",null,"Validate on an extracted value from the response body by parsing the target ",(0,o.kt)("strong",{parentName:"p"},"JSONPath.")," ",(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("em",{parentName:"em"}," To extract the desired value, please refer to these urls for examples: ",(0,o.kt)("br",null),"\nYou can learn the JSONPath Syntax from ",(0,o.kt)("a",{parentName:"em",href:"https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html"},"here")," ",(0,o.kt)("br",null),"\nAnd test your JSONPath ",(0,o.kt)("a",{parentName:"em",href:"http://jsonpath.com/"},"here")," ")),"  ",(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("em",{parentName:"em"}," Calls the ",(0,o.kt)("a",{parentName:"em",href:"https://shafthq.github.io/SHAFT_Engine_Docusaurus/docs/Keywords/Validations/Objects"},"Object validation methods")," to contiue building your validation. "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'api.assertThatResponse().extractedJsonValue("jsonPath").isEqualTo("data").perform();\n')),(0,o.kt)("h4",{id:"usage-1"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/users").perform();\napi.assertThatResponse().extractedJsonValue("$[?(@.name==\'Chelsey Dietrich\')].id").isEqualTo("5").perform();\n')),(0,o.kt)("h3",{id:"extracted-json-value-as-list"},"Extracted Json Value As List"),(0,o.kt)("p",null,"Validate on an extracted value from the response body by parsing the target ",(0,o.kt)("strong",{parentName:"p"},"JSONPath")," as list and check every item against it ",(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("em",{parentName:"em"}," To extract the desired value, please refer to these urls for examples: ",(0,o.kt)("br",null),"\nYou can learn the JSONPath Syntax from ",(0,o.kt)("a",{parentName:"em",href:"https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html"},"here")," ",(0,o.kt)("br",null),"\nAnd test your JSONPath ",(0,o.kt)("a",{parentName:"em",href:"http://jsonpath.com/"},"here")," ")),"  ",(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("em",{parentName:"em"}," Calls the ",(0,o.kt)("a",{parentName:"em",href:"https://shafthq.github.io/SHAFT_Engine_Docusaurus/docs/Keywords/Validations/Objects"},"Object validation methods")," to contiue building your validation. "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'api.assertThatResponse().extractedJsonValueAsList("jsonPath").isEqualTo("data").perform();\n')),(0,o.kt)("h4",{id:"usage-2"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/todos").perform();\napi.verifyThatResponse().extractedJsonValueAsList("$[?(@.completed==true)].completed").isEqualTo("true").perform();\n')),(0,o.kt)("h3",{id:"time"},"Time"),(0,o.kt)("p",null,"Validate on the response time. ",(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("em",{parentName:"em"}," Calls the ",(0,o.kt)("a",{parentName:"em",href:"https://shafthq.github.io/SHAFT_Engine_Docusaurus/docs/Keywords/Validations/Nums"},"Number validation methods")," to contiue building your validation. "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"api.assertThatResponse().time().isEqualTo(expectedNumberValue).perform();\n")),(0,o.kt)("h4",{id:"usage-3"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'SHAFT.API api = new SHAFT.API("http://api.zippopotam.us/");\napi.get("us/90210").perform();\napi.verifyThatResponse().isGreaterThanOrEquals(1.1).perform();\napi.verifyThatResponse().isLessThanOrEquals(100000).perform();\n')),(0,o.kt)("h3",{id:"is-equal-to-file-content"},"Is Equal To File Content"),(0,o.kt)("p",null,"Validate if the content of the provided actual response object is equal to the expected file content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'api.assertThatResponse().isEqualToFileContent("fileRelativePath").perform();\n')),(0,o.kt)("h3",{id:"does-not-equal-file-content"},"Does Not Equal File Content"),(0,o.kt)("p",null,"Validate if the content of the provided actual response object is not equal to the expected file content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'api.assertThatResponse().doesNotEqualFileContent("fileRelativePath").perform();\n')),(0,o.kt)("h3",{id:"is-equal-to-file-content-ignoring-order"},"Is Equal To File Content Ignoring Order"),(0,o.kt)("p",null,"Validate if the content of the provided actual response object is equal to the expected file content while ignoring Order of the json objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'api.assertThatResponse().isEqualToFileContentIgnoringOrder("fileRelativePath").perform();\n')),(0,o.kt)("h3",{id:"does-not-equal-file-content-ignoring-order"},"Does Not Equal File Content Ignoring Order"),(0,o.kt)("p",null,"Validate if the content of the provided actual response object is not equal to the expected file content while ignoring Order of the json objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'api.assertThatResponse().doesNotEqualFileContentIgnoringOrder("fileRelativePath").perform();\n')),(0,o.kt)("h3",{id:"contains-file-content"},"Contains File Content"),(0,o.kt)("p",null,"Validate if the content of the provided actual response object contains the expected file content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'api.assertThatResponse().containsFileContent("fileRelativePath").perform();\n')),(0,o.kt)("h3",{id:"does-not-contain-file-content"},"Does not Contain File Content"),(0,o.kt)("p",null,"Validate if the content of the provided actual response object does not contains the expected file content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'api.assertThatResponse().doesNotContainFileContent("fileRelativePath").perform();\n')),(0,o.kt)("h3",{id:"matches-schema"},"Matches Schema"),(0,o.kt)("p",null,"Validate if the content of the provided actual response object matches the schema for the expected file content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'api.assertThatResponse().matchesSchema("fileRelativePath").perform();\n')),(0,o.kt)("h3",{id:"does-not-match-schema"},"Does Not Match Schema"),(0,o.kt)("p",null,"Validate if the content of the provided actual response object does not match the schema for the expected file content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'api.assertThatResponse().doesNotMatchSchema("fileRelativePath").perform();\n')))}c.isMDXComponent=!0}}]);