(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(2),i=r(6),a=(r(0),r(85)),o={id:"Browser_Actions",title:"Browser Actions",sidebar_label:"Browser Actions"},s={unversionedId:"Browser_Actions",id:"Browser_Actions",isDocsHomePage:!1,title:"Browser Actions",description:"Web Driver",source:"@site/docs/Browser_Actions.md",permalink:"/SHAFT_Engine_Docusaurus/docs/Browser_Actions",editUrl:"https://mohabmohie.github.io/SHAFT_Engine_Docusaurus/edit/master/website/docs/Browser_Actions.md",sidebar_label:"Browser Actions",sidebar:"someSidebar",previous:{title:"IDE preparation",permalink:"/SHAFT_Engine_Docusaurus/docs/IDE_preparation"},next:{title:"Element Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Element_Actions"}},c=[{value:"Web Driver",id:"web-driver",children:[]},{value:"Browser Actions",id:"browser-actions",children:[]},{value:"Navigation",id:"navigation",children:[{value:"Navigate To URL",id:"navigate-to-url",children:[]},{value:"Navigate Back",id:"navigate-back",children:[]},{value:"Navigate Forward",id:"navigate-forward",children:[]},{value:"Refresh page",id:"refresh-page",children:[]},{value:"Get Current Url",id:"get-current-url",children:[]}]},{value:"Browser Windows&#39; Manipulation",id:"browser-windows-manipulation",children:[{value:"Full Screen Window",id:"full-screen-window",children:[]},{value:"Close Current Window",id:"close-current-window",children:[]},{value:"Get Window Title",id:"get-window-title",children:[]},{value:"Maximize Window",id:"maximize-window",children:[]},{value:"Resize Window",id:"resize-window",children:[]},{value:"Get Window Size",id:"get-window-size",children:[]},{value:"Switching Windows or tabs",id:"switching-windows-or-tabs",children:[]},{value:"Get Page Source\u200b",id:"get-page-source",children:[]}]},{value:"Sample Code Snippet",id:"sample-code-snippet",children:[]}],l={rightToc:c};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"web-driver"},"Web Driver"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In order to interact with web pages you will need an instance of ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.selenium.dev/documentation/en/webdriver/"}),"WebDriver"))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"WebDriver driver = DriverFactory.getDriver();\n")),Object(a.b)("p",null,"Upon Executing this line ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"#"}),"DriverFactory")," will detect your desired configuration from the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"#"}),"properties files"),", if you have not set those don't worry, SHAFT has a set of\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"#"}),"default configurations")," that will be used and you can always ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"#"}),"edit configurations")," .",Object(a.b)("br",null),"\nExecution environment is defaulted to Local i.e tests will be run on your own machine, so SHAFT will use ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/bonigarcia/webdrivermanager"}),"webdrivermanager")," to auto-detect your operating system and the version of the default browser , searches for the appropriate WebDriver version on your machine and download it if it can't be found,and finally run it which is openning a new browser window."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"in order to close all running driver instances use")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"DriverFactory.closeAllDrivers();\n")),Object(a.b)("h2",{id:"browser-actions"},"Browser Actions"),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://mohabmohie.github.io/SHAFT_ENGINE/apidocs/com/shaft/gui/browser/BrowserActions.html"}),"BrowserActions")," class handles browser actions like navigation and window controls"),Object(a.b)("h2",{id:"navigation"},"Navigation"),Object(a.b)("h3",{id:"navigate-to-url"},"Navigate To URL"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'BrowserActions.navigateToURL(driver,"https://www.google.com/");\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Navigates to the specified URL if it's different from the current URL, else refreshes the current page."),Object(a.b)("li",{parentName:"ul"},"To confirm successful navigation to target URL you can add a string parameter containing text that should exist in the URL after navigation like this:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'BrowserActions.navigateToURL(driver,"https://www.google.com/","google");\n')),Object(a.b)("h3",{id:"navigate-back"},"Navigate Back"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"BrowserActions.navigateBack(driver);\n")),Object(a.b)("p",null,"Navigates one step back from the browsers history"),Object(a.b)("h3",{id:"navigate-forward"},"Navigate Forward"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"BrowserActions.navigateForward(driver);\n")),Object(a.b)("p",null,"Navigates one step forward from the browsers history"),Object(a.b)("h3",{id:"refresh-page"},"Refresh page"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"BrowserActions.refreshCurrentPage(driver);\n")),Object(a.b)("p",null,"Refresh the current page."),Object(a.b)("h3",{id:"get-current-url"},"Get Current Url"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"BrowserActions.getCurrentURL(driver);\n")),Object(a.b)("p",null,"Returns the URL of the current page  as a string"),Object(a.b)("h2",{id:"browser-windows-manipulation"},"Browser Windows' Manipulation"),Object(a.b)("h3",{id:"full-screen-window"},"Full Screen Window"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"BrowserActions.fullScreenWindow(driver);\n")),Object(a.b)("p",null,"Resizes the current window to become full screen"),Object(a.b)("h3",{id:"close-current-window"},"Close Current Window"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"BrowserActions.closeCurrentWindow\u200b(driver);\n")),Object(a.b)("p",null,"Closes the current browser window"),Object(a.b)("h3",{id:"get-window-title"},"Get Window Title"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"BrowserActions.getCurrentWindowTitle(driver);\n")),Object(a.b)("p",null,"Returnss the current window title as a string"),Object(a.b)("h3",{id:"maximize-window"},"Maximize Window"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"BrowserActions.maximizeWindow(driver);\n")),Object(a.b)("p",null,"Maximizes current window size based on screen size minus 5%"),Object(a.b)("h3",{id:"resize-window"},"Resize Window"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"int width = 1440; // specify wanted window width\nint height =900; // specify wanted window height\nBrowserActions.setWindowSize\u200b(driver,width,height);\n")),Object(a.b)("p",null,"Resizes the current window size based on the provided width and height"),Object(a.b)("h3",{id:"get-window-size"},"Get Window Size"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"String windowSize = BrowserActions.getWindowSize(driver);\n")),Object(a.b)("p",null,"Returnss the current window size as a string"),Object(a.b)("h3",{id:"switching-windows-or-tabs"},"Switching Windows or tabs"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"String windowHandle = BrowserActions.getWindowHandle\u200b(driver); //store the current window handle\n/*\nsome code that opens a new window\n*/\n\ndriver.switchTo().window(windowHandle); // switch back to the original window\n")),Object(a.b)("p",null,"The method getWindowHandle\u200b() returns a String containing the window handle, which is a unique identifier to that window and is used to move between tabs and windows"),Object(a.b)("h3",{id:"get-page-source"},"Get Page Source\u200b"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"String pageSource = BrowserActions.getPageSource(driver);\n")),Object(a.b)("p",null,"Gets the current page source and returns it as a string"),Object(a.b)("h2",{id:"sample-code-snippet"},"Sample Code Snippet"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'import org.openqa.selenium.WebDriver;\nimport org.testng.annotations.Test;\n\nimport com.shaft.driver.DriverFactory;\nimport com.shaft.gui.browser.BrowserActions;\n\npublic class ShaftDemo {\n\n    int width = 515; \n    int height =500; \n    \n    @Test\n    public void browserActions_Demo() {\n        WebDriver driver = DriverFactory.getDriver();\n        BrowserActions.navigateToURL(driver,"https://www.google.com/","google");\n        System.out.println(BrowserActions.getCurrentURL(driver));\n        BrowserActions.navigateToURL(driver,"https://www.youtube.com/");\n        System.out.println(BrowserActions.getCurrentWindowTitle(driver));\n        BrowserActions.navigateBack(driver);\n        BrowserActions.navigateForward(driver);\n        BrowserActions.setWindowSize(driver, width, height);\n        System.out.println(BrowserActions.getWindowSize(driver));\n        DriverFactory.closeAllDrivers();\n    \n    }\n}\n')),Object(a.b)("p",null,"As you skim through the console output you will notice the awesome reporting SHAFT provides for each performed action, and it gets even better, please see the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"#"}),"reporting")," section for more on that."))}d.isMDXComponent=!0}}]);