"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[4005],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,k=m["".concat(p,".").concat(u)]||m[u]||g[u]||o;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(4137));const o={id:"BrowserStack",title:"BrowserStack Integration",sidebar_label:"BrowserStack Integration"},i=void 0,s={unversionedId:"Configuration/BrowserStack",id:"Configuration/BrowserStack",title:"BrowserStack Integration",description:"Remote Execution (BrowserStack)",source:"@site/docs/Configuration/BrowserStack.md",sourceDirName:"Configuration",slug:"/Configuration/BrowserStack",permalink:"/docs/Configuration/BrowserStack",draft:!1,editUrl:"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Configuration/BrowserStack.md",tags:[],version:"current",frontMatter:{id:"BrowserStack",title:"BrowserStack Integration",sidebar_label:"BrowserStack Integration"},sidebar:"docs",previous:{title:"Jira/Xray Integration",permalink:"/docs/Configuration/XrayIntegration"},next:{title:"Mobile",permalink:"/docs/Configuration/MobileFeatures"}},p={},l=[{value:"Remote Execution (BrowserStack)",id:"remote-execution-browserstack",level:2},{value:"Set the username and access key:",id:"set-the-username-and-access-key",level:5},{value:"Browserstack properties:",id:"browserstack-properties",level:5},{value:"To execute in web platform:",id:"to-execute-in-web-platform",level:3},{value:"Set the capabilities on browser stack configuration manager:",id:"set-the-capabilities-on-browser-stack-configuration-manager",level:5},{value:"To execute in mobile platform:",id:"to-execute-in-mobile-platform",level:3},{value:"Set the capabilities on browser stack configuration manager:",id:"set-the-capabilities-on-browser-stack-configuration-manager-1",level:5},{value:"Execute the session live:",id:"execute-the-session-live",level:5}],c={toc:l};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"remote-execution-browserstack"},"Remote Execution (BrowserStack)"),(0,n.kt)("p",null,"We can run any script using Shaft Engine via Browser stack only by setting some configurations that we can make from different locations: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"through-configuration-manager"},"Through configuration manager:"))),(0,n.kt)("p",null,"By openeing the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Platform"))," tab on ",(0,n.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", you can change the excution location as explained in the image below and then save the file and replace the corresponding configuration file in your project. Please note that once you select Remote Execution (BrowserStack) from Execution Location, the value of ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("em",{parentName:"em"},"Remote Server Details"))," will be filled automatically. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"configurationMnagerExexutionLocation",src:a(563).Z,width:"897",height:"505"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"through-properties-files"},"Through properties files:"))),(0,n.kt)("p",null,"For Web scripts, by openning the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"ExecutionPlatform.properties"))," file you can change the value of ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"executionAddress"))," to be ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"browserstack"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"propExecutionAddress",src:a(1800).Z,width:"903",height:"467"})),(0,n.kt)("h5",{id:"set-the-username-and-access-key"},"Set the username and access key:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},(0,n.kt)("a",{parentName:"em",href:"https://www.browserstack.com/users/sign_in"},"https://www.browserstack.com/users/sign_in")))," and put the business e-mail and password then click ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Sign Me In")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BrowswerStack",src:a(6041).Z,width:"906",height:"770"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Summary"))," section ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BrowswerStack",src:a(4473).Z,width:"1920",height:"1080"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copy the access key value:")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BrowswerStack",src:a(3313).Z,width:"1287",height:"565"})),(0,n.kt)("h5",{id:"browserstack-properties"},"Browserstack properties:"),(0,n.kt)("p",null,"Browser stack itself provides its own configuration manager via the configuration file ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"browserStack.properties"))," in which we can find the proper configuration and proper URLs to execute scripts on web or on mobile platfrom. As explained in the below image."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BrowswerStack",src:a(7404).Z,width:"1571",height:"750"})),(0,n.kt)("h3",{id:"to-execute-in-web-platform"},"To execute in web platform:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"through-configuration-manager-1"},"Through configuration manager:"))),(0,n.kt)("p",null,"By openeing the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Platform"))," tab on ",(0,n.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", after selecting the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Remote Execution (BrowserStack)")),", select the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Target Operating System"))," then save the file and replace the corresponding configuration file in your project. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"configurationMnagerTargertOperatingSystem",src:a(5290).Z,width:"1016",height:"702"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"through-properties-files-1"},"Through properties files:"))),(0,n.kt)("p",null,"For Web scripts, by openning the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"ExecutionPlatform.properties"))," file you can change the value of ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"targetOperatingSystem"))," to be ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"windows-64")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"linux-64")),", etc. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"configurationMnagerTargertOperatingSystem",src:a(1696).Z,width:"1012",height:"532"})),(0,n.kt)("h5",{id:"set-the-capabilities-on-browser-stack-configuration-manager"},"Set the capabilities on browser stack configuration manager:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go the Web URL: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},(0,n.kt)("a",{parentName:"em",href:"https://www.browserstack.com/automate/capabilities?tag=selenium-4"},"https://www.browserstack.com/automate/capabilities?tag=selenium-4")))," to set the username and access key that we got from the previous steps and set the main capabilities from the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Configure capabilities"))," Section on the left select the target of the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Opertaing System")),", the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Browser")),", the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Resolution"))," and the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Selenium Version")),". Once these fields are filled, the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Code"))," section will be filled automatically as explained in the below image. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BrowswerStack",src:a(9427).Z,width:"1547",height:"867"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go back to ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"browserStack.properties"))," file to set the Operating system and its version, the browser version and the selenium version. Please pay attention to make the correct mapping as all these fields are case sensitive.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BrowswerStack",src:a(6077).Z,width:"913",height:"526"})),(0,n.kt)("h3",{id:"to-execute-in-mobile-platform"},"To execute in mobile platform:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"through-configuration-manager-2"},"Through configuration manager:"))),(0,n.kt)("p",null,"By openeing the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Platform"))," tab on ",(0,n.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", after selecting the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Remote Execution (BrowserStack)")),", select the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Target Operating System"))," then save the file and replace the corresponding configuration file in your project. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"configurationMnagerTargertOperatingSystem",src:a(1674).Z,width:"1027",height:"706"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h4",{parentName:"li",id:"through-properties-files-2"},"Through properties files:"))),(0,n.kt)("p",null,"For Web scripts, by openning the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"ExecutionPlatform.properties"))," file you can change the value of ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"targetOperatingSystem"))," to be ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Android"))," or ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"iOS")),". "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"configurationMnagerTargertOperatingSystem",src:a(5314).Z,width:"1017",height:"531"})),(0,n.kt)("h5",{id:"set-the-capabilities-on-browser-stack-configuration-manager-1"},"Set the capabilities on browser stack configuration manager:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go the Web URL: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},(0,n.kt)("a",{parentName:"em",href:"https://www.browserstack.com/app-automate/capabilities?tag=w3c"},"https://www.browserstack.com/app-automate/capabilities?tag=w3c")))," to set the username and access key that we got from the previous steps and set the main capabilities from the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Configure capabilities"))," Section on the left select the target of the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Platform Name")),", the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Device Name"))," and the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Application (.apk /.aab)")),". Once these fields are filled, the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Code"))," section will be filled automatically as explained in the below image. "),(0,n.kt)("p",{parentName:"li"},"Note that for the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Application (.apk /.aab)")),", we have to pass our apk path to be make a post request to browserstack to upload the apk and recieve the response that will be on the console. We have to do that only for the first time in which we execute our suite or everytime we execute our suite on different versions."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BrowswerStack",src:a(1e3).Z,width:"1722",height:"877"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BrowswerStack",src:a(2487).Z,width:"1012",height:"257"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go back to ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"browserStack.properties"))," file to set the Operating system and its version, the android/ios version , the device name and the appium version. Please pay attention to make the correct mapping as all these fields are case sensitive.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BrowswerStack",src:a(9051).Z,width:"1016",height:"365"})),(0,n.kt)("h5",{id:"execute-the-session-live"},"Execute the session live:"),(0,n.kt)("p",null,"To see the live execution, whatever you are executing on web or mobile, just you need to go to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},(0,n.kt)("a",{parentName:"em",href:"https://automate.browserstack.com/dashboard/v2"},"https://automate.browserstack.com/dashboard/v2")))," and then click on ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Automate"))," and then we will find our execution results and all the related info. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BrowswerStack",src:a(8607).Z,width:"1243",height:"653"})))}m.isMDXComponent=!0},8607:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/BrowserStack-LiveAutomateExecution-70d11296d08845a0e955242fe2237523.jpg"},1e3:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/BrowserStack-MOB-a5d870dec2c2b7965f04a839c59f8463.jpg"},9051:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/BrowserStack-MobCapabilitites-8903fdf5fe58d498b194af3755e69792.jpg"},6041:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/BrowserStackSignIN-47a9dc5cddc16ce3863f46bec18daeef.jpg"},4473:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/BrowserStackSummary-83fcc93e8ed67ea9c4aacc3ee61bc875.png"},9427:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/BrowserStackWebCapabilities-4e8c5caad82ab84c5b7cfa14b1cbedef.jpg"},3313:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/BrowsweStack-GetTheAccessKey-39a2b4f53170773a3bb67e7d182b34eb.jpg"},5290:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CM-TargetOperatingSystem-34b12c25e2da52c8efe10da228fe8e46.jpg"},563:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CM_ExecutionAddress-22c380b51f7f16ebf6be422ed8cd0d7c.jpg"},1674:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CM_TargetOperatingSystemMob-4935f7ac314a88c9edd4132948c0a247.jpg"},2487:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Prop-APKPath-ee90d197018cf3d5e1ee821cfdef6378.jpg"},5314:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Prop-TaregetOperatingSystemMob-49fba3c624581229937bc44aa16b7a00.jpg"},1696:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Prop-TargetOperatingSystem-fb82f6a8863faa837542692a4006dd20.jpg"},7404:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Prop_BrowserStack-3986acc4e49239df685f8eb91216c64d.jpg"},6077:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Prop_BrowserStackMapped-507f61d8fffc991566cd39f8f6526dcc.jpg"},1800:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Prop_ExecutionAddress-ffb4f74eb53bd68142c179c5d462a271.jpg"}}]);