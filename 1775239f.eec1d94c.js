(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),b=n,h=d["".concat(o,".").concat(b)]||d[b]||u[b]||s;return a?r.a.createElement(h,i(i({ref:t},p),{},{components:a})):r.a.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},55:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),s=(a(0),a(105)),o={id:"Request_Builder",title:"Request Builder",sidebar_label:"Request Builder"},i={unversionedId:"API/Request_Builder",id:"API/Request_Builder",isDocsHomePage:!1,title:"Request Builder",description:"SHAFT API",source:"@site/docs/API/Request_Builder.md",permalink:"/SHAFT_Engine_Docusaurus/docs/API/Request_Builder",editUrl:"https://shafthq.github.io/SHAFT_Engine_Docusaurus/edit/master/website/docs/API/Request_Builder.md",sidebar_label:"Request Builder",sidebar:"someSidebar",previous:{title:"Touch Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Actions/Touch_Actions"},next:{title:"Response Getters",permalink:"/SHAFT_Engine_Docusaurus/docs/API/Response_Getters"}},c=[{value:"SHAFT API",id:"shaft-api",children:[]},{value:"Request Builder",id:"request-builder",children:[{value:"Request Method",id:"request-method",children:[]},{value:"Set Authentication",id:"set-authentication",children:[]},{value:"Add Cookie",id:"add-cookie",children:[]},{value:"Set Target Status Code",id:"set-target-status-code",children:[]},{value:"Set Content Type",id:"set-content-type",children:[]},{value:"Add Header",id:"add-header",children:[]},{value:"Set Request Body",id:"set-request-body",children:[]},{value:"Set Parameters",id:"set-parameters",children:[]},{value:"Set URL Arguments",id:"set-url-arguments",children:[]},{value:"Add Config",id:"add-config",children:[]},{value:"Enable URL Encoding",id:"enable-url-encoding",children:[]},{value:"Use Relaxed HTTPS Validation",id:"use-relaxed-https-validation",children:[]},{value:"Append Default Content Charset To Content Type If Undefined",id:"append-default-content-charset-to-content-type-if-undefined",children:[]}]},{value:"Sample Code Snippet",id:"sample-code-snippet",children:[]}],p={rightToc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"shaft-api"},"SHAFT API"),Object(s.b)("p",null,"In order to interact with APIs, you need an instance of SHAFT.API class and give it the base serviceURI"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'import com.shaft.driver.SHAFT;\n\nSHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\n')),Object(s.b)("p",null,"Now you have api object with the base serviceURI to start working with it with the Request Builder"),Object(s.b)("h2",{id:"request-builder"},"Request Builder"),Object(s.b)("p",null,"Now you can start building your request with the request builder and add the methods you need from the below methods.\nFinally, you need to add the ",Object(s.b)("strong",{parentName:"p"},"perform()")," method at the end to trigger the request and get back ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.javadoc.io/doc/io.rest-assured/rest-assured/3.0.1/io/restassured/response/Response.html"}),"REST-Assured response")," object to continue working with it when needed."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note:")," A request usually has only one of the following: urlArguments, parameters+type, or body"),Object(s.b)("h3",{id:"request-method"},"Request Method"),Object(s.b)("p",null,"Add the request method and give it the serviceName"),Object(s.b)("h4",{id:"get"},"Get"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/posts").perform();\n')),Object(s.b)("h4",{id:"post"},"Post"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.post("/posts").perform();\n')),Object(s.b)("h4",{id:"put"},"Put"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.put("/posts/1").perform();\n')),Object(s.b)("h4",{id:"patch"},"Patch"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.patch("/posts/1").perform();\n')),Object(s.b)("h4",{id:"delete"},"Delete"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.delete("/posts/1").perform();\n')),Object(s.b)("h3",{id:"set-authentication"},"Set Authentication"),Object(s.b)("p",null,"Set the authentication method that will be used by the API request that you're currently building. By default, this value is set to AuthenticationType.NONE but you can change it by calling this method. If you use thie method the authentication token will be saved automatically for all the following requests using the same session."),Object(s.b)("h4",{id:"authentication-type-basic"},"Authentication Type BASIC"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://postman-echo.com");\napi.get("/basic-auth").setAuthentication("postman", "password", AuthenticationType.BASIC).perform();\n')),Object(s.b)("h4",{id:"authentication-type-form"},"Authentication Type FORM"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\napi.get("serviceName").setAuthentication("username", "password", AuthenticationType.FORM).perform();\n')),Object(s.b)("h3",{id:"add-cookie"},"Add Cookie"),Object(s.b)("p",null,"Append a cookie to the current session to be used in the current and all the following requests. This feature is commonly used for authentication cookies."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\napi.post("serviceName").addCookie("session_id", "1234").perform();\n')),Object(s.b)("p",null,"You can also use it directly without a request method to be used in all the following requests."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\napi.post("serviceName").perform();\napi.addCookie("session_id", "1234");\n')),Object(s.b)("h3",{id:"set-target-status-code"},"Set Target Status Code"),Object(s.b)("p",null,"Sets the expected target status code for the API request that you're currently building. By default, this value is set to 200, but you can change it by calling the ",Object(s.b)("strong",{parentName:"p"},"setTargetStatusCode")," method."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/users").setTargetStatusCode(200).perform();\n')),Object(s.b)("h3",{id:"set-content-type"},"Set Content Type"),Object(s.b)("p",null,"Sets the content type for the API request that you're currently building.\nBy default, this value is set to ",Object(s.b)("strong",{parentName:"p"},"ContentType.ANY")," but you can change it by calling the ",Object(s.b)("strong",{parentName:"p"},"setContentType")," method and giving it the enum value you want."),Object(s.b)("p",null,"contentType Enumeration of common ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.iana.org/assignments/media-types/media-types.xhtml"}),"IANA")," content-types. This may be used to specify a request or response content-type more easily than specifying the full string each time. Example: ",Object(s.b)("strong",{parentName:"p"},"ContentType.JSON")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/users").setContentType("application/json").perform();\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/users").setContentType(ContentType.JSON).perform();\n')),Object(s.b)("h3",{id:"add-header"},"Add Header"),Object(s.b)("p",null,"Append a header to the current session ",Object(s.b)("strong",{parentName:"p"},"to be used in the current and all the following requests"),".\nThis feature is commonly used for authentication tokens and other global headers as you need"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\nString token = "@1234z"\napi.post("serviceName").addHeader("Authorization", "Bearer " + token).perform();\n')),Object(s.b)("p",null,"You can add more than one header in the same request."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\nString token = "@1234z"\napi.post("serviceName").addHeader("Authorization", "Bearer " + token).addHeader("Accept-Charset", "utf-8").perform();\n')),Object(s.b)("p",null,"You can also use it directly without a request method to set the header for all the following requests."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\napi.post("serviceName").perform();\napi.addHeader("Accept-Language", "en");\n')),Object(s.b)("h3",{id:"set-request-body"},"Set Request Body"),Object(s.b)("p",null,"Sets the body (if any) for the API request that you're currently building."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\napi.post("serviceName").setRequestBody(body).perform();\n')),Object(s.b)("h4",{id:"string-as-a-body"},"String as a Body"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://reqres.in/");\nString body = """\n         {\n            "name": "adam",\n            "job": "engineer"\n        }""";\napi.post("api/users").setRequestBody(body).setContentType(ContentType.JSON).setTargetStatusCode(201).perform();\n')),Object(s.b)("h4",{id:"hash-map-as-a-body"},"Hash Map as a Body"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://reqres.in/");\nHashMap body = new HashMap<>();\nbody.put("name", "adam");\nbody.put("job", "engineer");\napi.setRequestBody(body).setContentType(ContentType.JSON).setTargetStatusCode(201).perform();\n')),Object(s.b)("h4",{id:"jsonobject-as-a-body"},"JSONObject as a Body"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://reqres.in/");\nJSONObject body = new JSONObject();\nbody.put("name", "adam");\nbody.put("job", "engineer");\napi.setRequestBody(body).setContentType(ContentType.JSON).setTargetStatusCode(201).perform();\n')),Object(s.b)("h3",{id:"set-parameters"},"Set Parameters"),Object(s.b)("p",null,"Sets the parameters (if any) for the API request that you're currently building."),Object(s.b)("h4",{id:"parameters-type-form"},"Parameters Type FORM"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\nList<List<Object>> parameters = Arrays.asList(Arrays.asList("username", "john"), Arrays.asList("password","1234"));\napi.post("serviceName").setParameters(parameters, RestActions.ParametersType.FORM).perform();\n')),Object(s.b)("h4",{id:"parameters-type-query"},"Parameters Type QUERY"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\nList<List<Object>> parameters = Arrays.asList(Arrays.asList("search", "john"), Arrays.asList("orderBy","desc"));\napi.get("serviceName").setParameters(parameters, RestActions.ParametersType.QUERY).perform();\n')),Object(s.b)("h3",{id:"set-url-arguments"},"Set URL Arguments"),Object(s.b)("p",null,"Sets the url arguments (if any) for the API request that you're currently building."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\napi.post("serviceName").setUrlArguments("username=john&password=1234").perform();\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/comments").setUrlArguments("postId=1").setTargetStatusCode(201).perform();\n')),Object(s.b)("h3",{id:"add-config"},"Add Config"),Object(s.b)("p",null,"Append a config to the current session to be used in the current and all the following requests."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\nRestAssured.config = RestAssured.config().redirect(RedirectConfig.redirectConfig().followRedirects(false));\napi.post("serviceName").addConfig(RestAssured.config).perform();\n')),Object(s.b)("p",null,"You can also use it directly without a request method to be used for all the following requests."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\napi.post("serviceName");\nRestAssured.config = RestAssured.config().redirect(RedirectConfig.redirectConfig().followRedirects(false));\napi.addConfig(RestAssured.config).perform();\n')),Object(s.b)("h3",{id:"enable-url-encoding"},"Enable URL Encoding"),Object(s.b)("p",null,"Tells whether REST Assured should automatically encode the URI if not defined explicitly. Note that this does not affect multipart form data. Default is true."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\napi.post("serviceName").enableUrlEncoding(false).perform();\n')),Object(s.b)("h3",{id:"use-relaxed-https-validation"},"Use Relaxed HTTPS Validation"),Object(s.b)("p",null,"set useRelaxedHTTPSValidation configuration to trust all hosts regardless if the SSL certificate is invalid in the request builder 'SSL' is the protocol name by default"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\napi.get("serviceName").useRelaxedHTTPSValidation().perform();\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\napi.get("serviceName").useRelaxedHTTPSValidation("SSL").perform();\n')),Object(s.b)("h3",{id:"append-default-content-charset-to-content-type-if-undefined"},"Append Default Content Charset To Content Type If Undefined"),Object(s.b)("p",null,"Tells whether REST Assured should automatically append the content charset to the content-type header if not defined explicitly. Note that this does not affect multipart form data. Default is true."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("serviceURI");\napi.post("serviceName").appendDefaultContentCharsetToContentTypeIfUndefined(false).perform();\n')),Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("h4",{id:"please-check-the-response-validations-as-we-can-make-many-assertions-and-verifications-on-api-response-by-using-the-class-restvalidationsbuilder"},Object(s.b)("em",{parentName:"h4"},Object(s.b)("strong",{parentName:"em"}," ","*","Please check the ",Object(s.b)("a",Object(n.a)({parentName:"strong"},{href:"https://shafthq.github.io/SHAFT_Engine_Docusaurus/docs/Response"}),"Response Validations")," as we can make many assertions and verifications on API response by using the Class ",Object(s.b)("a",Object(n.a)({parentName:"strong"},{href:"https://shafthq.github.io/SHAFT_ENGINE/apidocs/com/shaft/validation/RestValidationsBuilder.html"}),"RestValidationsBuilder"),"*"," "))),Object(s.b)("h2",{id:"sample-code-snippet"},"Sample Code Snippet"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public class Test_Api {\n    SHAFT.API api;\n\n    @Test\n    public void test_get() {\n        api = new SHAFT.API("https://jsonplaceholder.typicode.com");\n        api.get("/users").perform();\n        api.assertThatResponse().extractedJsonValue("$[?(@.name==\'Chelsey Dietrich\')].id").isEqualTo("5").perform();\n    }\n    \n    @Test\n    public void test_post() {\n        api = new SHAFT.API("https://reqres.in/");\n        String body = """\n                {\n                    "name": "morpheus",\n                    "job": "leader"\n                }""";\n        api.post("api/users").setRequestBody(body).setTargetStatusCode(201).setContentType(ContentType.JSON).perform();\n        api.assertThatResponse().extractedJsonValue("name").isEqualTo("morpheus").withCustomReportMessage("Check that Morpheus exists.").perform();\n    }\n\n}\n')))}l.isMDXComponent=!0}}]);