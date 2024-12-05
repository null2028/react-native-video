(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{5236:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/updating",function(){return t(2151)}])},2151:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return l}});var s=t(5893),i=t(2673),o=t(3393),a=t(2702);t(9128);var r=t(2643);let l=[{depth:3,value:"Version 6.0.0",id:"version-600"},{depth:4,value:"iOS",id:"ios"},{depth:5,value:"Min iOS version",id:"min-ios-version"},{depth:5,value:"linking",id:"linking"},{depth:5,value:"podspec",id:"podspec"},{depth:4,value:"Android",id:"android"},{depth:5,value:"Using app build settings",id:"using-app-build-settings"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",h3:"h3",h4:"h4",h5:"h5",p:"p",code:"code",pre:"pre",span:"span",a:"a",strong:"strong"},(0,r.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Updating"}),"\n",(0,s.jsx)(n.h3,{id:"version-600",children:"Version 6.0.0"}),"\n",(0,s.jsx)(n.h4,{id:"ios",children:"iOS"}),"\n",(0,s.jsx)(n.h5,{id:"min-ios-version",children:"Min iOS version"}),"\n",(0,s.jsxs)(n.p,{children:["From version 6.0.0, the minimum iOS version supported is 13.0. Projects that are using ",(0,s.jsx)(n.code,{children:"react-native < 0.73"})," will need to set the minimum iOS version to 13.0 in the Podfile."]}),"\n",(0,s.jsx)(n.p,{children:"You can do it by adding the following code to your Podfile:"}),"\n",(0,s.jsx)(n.pre,{"data-language":"diff","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"diff","data-theme":"default",children:[(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"#EF6270"},children:"- platform :ios, min_ios_version_supported"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"#4BB74A"},children:"+ MIN_IOS_OVERRIDE = '13.0'"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"#4BB74A"},children:"+ if Gem::Version.new(MIN_IOS_OVERRIDE) > Gem::Version.new(min_ios_version_supported)"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"#4BB74A"},children:"+   min_ios_version_supported = MIN_IOS_OVERRIDE"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"#4BB74A"},children:"+ end"})})]})}),"\n",(0,s.jsx)(n.h5,{id:"linking",children:"linking"}),"\n",(0,s.jsx)(n.p,{children:"In your project Podfile add support for static dependency linking. This is required to support the new Promises subdependency in the iOS swift conversion."}),"\n",(0,s.jsxs)(n.p,{children:["Add ",(0,s.jsx)(n.code,{children:"use_frameworks! :linkage => :static"})," just under ",(0,s.jsx)(n.code,{children:"platform :ios"})," in your ios project Podfile."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/TheWidlarzGroup/react-native-video/blob/master/examples/basic/ios/Podfile#L5",children:"See the example ios project for reference"})}),"\n",(0,s.jsx)(n.h5,{id:"podspec",children:"podspec"}),"\n",(0,s.jsx)(n.p,{children:"You can remove following lines from your podfile as they are not necessary anymore"}),"\n",(0,s.jsx)(n.pre,{"data-language":"diff","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"diff","data-theme":"default",children:[(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"#EF6270"},children:"-  `pod 'react-native-video', :path => '../node_modules/react-native-video/react-native-video.podspec'`"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"#EF6270"},children:"-  `pod 'react-native-video/VideoCaching', :path => '../node_modules/react-native-video/react-native-video.podspec'`"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["If you were previously using VideoCaching, you should $RNVideoUseVideoCaching flag in your podspec, see: ",(0,s.jsx)(n.a,{href:"https://docs.thewidlarzgroup.com/react-native-video/installation#video-caching",children:"installation section"})]}),"\n",(0,s.jsx)(n.h4,{id:"android",children:"Android"}),"\n",(0,s.jsxs)(n.p,{children:["If you are already using Exoplayer on V5, you should remove the patch done from ",(0,s.jsx)(n.strong,{children:"android/settings.gradle"})]}),"\n",(0,s.jsx)(n.pre,{"data-language":"diff","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"diff","data-theme":"default",children:[(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"#EF6270"},children:"- include ':react-native-video'"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"#EF6270"},children:"- project(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android-exoplayer')"})})]})}),"\n",(0,s.jsx)(n.h5,{id:"using-app-build-settings",children:"Using app build settings"}),"\n",(0,s.jsxs)(n.p,{children:["You will need to create a ",(0,s.jsx)(n.code,{children:"project.ext"})," section in the top-level build.gradle file (not app/build.gradle). Fill in the values from the example below using the values found in your app/build.gradle file."]}),"\n",(0,s.jsx)(n.pre,{"data-language":"groovy","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"groovy","data-theme":"default",children:[(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// Top-level build file where you can add configuration options common to all sub-projects/modules."})}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"buildscript {"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:". "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// Various other settings go here"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"allprojects {"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:". "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// Various other settings go here"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    project"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"ext {"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        compileSdkVersion "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"31"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        buildToolsVersion "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"30.0.2"'})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        minSdkVersion "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"21"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        targetSdkVersion "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"22"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["If you encounter an error ",(0,s.jsx)(n.code,{children:"Could not find com.android.support:support-annotations:27.0.0."})," reinstall your Android Support Repository."]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/updating.md",route:"/updating",timestamp:1733322951e3,pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",component:"API",other:"Other",separator_versions:{type:"separator",title:""},updating:"Updating",changelog:{title:"Changelog",newWindow:!0,href:"https://github.com/TheWidlarzGroup/react-native-video/blob/master/CHANGELOG.md"},separator_community:{type:"separator",title:""},example_apps:{title:"Example Apps",newWindow:!0,href:"https://github.com/TheWidlarzGroup/react-native-video/tree/master/examples"},projects:"Useful projects"}},{kind:"Folder",name:"component",route:"/component",children:[{kind:"Meta",data:{props:"Properties",drm:"DRM",ads:"Ads",events:"Events",methods:"Methods"}},{kind:"MdxPage",name:"ads",route:"/component/ads"},{kind:"MdxPage",name:"drm",route:"/component/drm"},{kind:"MdxPage",name:"events",route:"/component/events"},{kind:"MdxPage",name:"methods",route:"/component/methods"},{kind:"MdxPage",name:"props",route:"/component/props"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"other",route:"/other",children:[{kind:"Meta",data:{caching:"Caching",misc:"Misc",debug:"Debugging","new-arch":"New Architecture",expo:"Expo",plugin:"Plugin (experimental)"}},{kind:"MdxPage",name:"caching",route:"/other/caching"},{kind:"MdxPage",name:"debug",route:"/other/debug"},{kind:"MdxPage",name:"expo",route:"/other/expo"},{kind:"MdxPage",name:"misc",route:"/other/misc"},{kind:"MdxPage",name:"new-arch",route:"/other/new-arch"},{kind:"MdxPage",name:"plugin",route:"/other/plugin"}]},{kind:"MdxPage",name:"projects",route:"/projects"},{kind:"MdxPage",name:"updating",route:"/updating"}],flexsearch:{codeblocks:!0},title:"Updating",headings:l},pageNextRoute:"/updating",nextraLayout:o.ZP,themeConfig:a.Z};n.default=(0,i.j)(d)},2702:function(e,n,t){"use strict";var s=t(5893);t(7294),n.Z={head:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"language",content:"en"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,s.jsx)("meta",{name:"description",content:"Video component for React Native"}),(0,s.jsx)("meta",{name:"og:title",content:"React Native Video"}),(0,s.jsx)("meta",{name:"og:description",content:"A Video component for React Native"}),(0,s.jsx)("meta",{name:"og:image",content:"https://docs.thewidlarzgroup.com/react-native-video/thumbnail.jpg"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:title",content:"React Native Video"}),(0,s.jsx)("meta",{name:"twitter:description",content:"A Video component for React Native"}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://docs.thewidlarzgroup.com/react-native-video/thumbnail.jpg"}),(0,s.jsx)("meta",{name:"twitter:image:alt",content:"React Native Video"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap",rel:"stylesheet"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",href:"https://docs.thewidlarzgroup.com/react-native-video/favicon.png"}),(0,s.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-PM2TQQQMDN"}),(0,s.jsx)("script",{children:"window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', 'G-PM2TQQQMDN');"})]}),logo:(0,s.jsxs)("span",{children:["\uD83C\uDFAC ",(0,s.jsx)("strong",{children:"Video component"})," for React Native"]}),project:{link:"https://github.com/TheWidlarzGroup/react-native-video"},docsRepositoryBase:"https://github.com/TheWidlarzGroup/react-native-video/tree/master/docs/",footer:{text:(0,s.jsxs)("span",{children:["Built with ❤️ by ",(0,s.jsx)("strong",{children:"React Native Community"})]})},toc:{extraContent:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{children:"\n        :is(html[class~=dark]) .extra-container {\n          background-color: #87ccef;\n        }\n        :is(html[class~=dark]) .extra-text {\n          color: #171717;\n        }\n        :is(html[class~=dark]) .extra-button {\n          background-color: #171717;\n        }\n        .extra-container {\n          display: flex;\n          flex-direction: column;\n          margin-top: 0.5rem;\n          text-align: center;\n          background-color: #171717;\n          padding: 1rem;\n          gap: 1rem;\n          border-radius: 0.5rem;\n        }\n        .extra-text {\n          padding-left: 0.5rem;\n          padding-right: 0.5rem;\n          font-weight: bold;\n          color: #fff;\n        }\n        .extra-button {\n          width: 100%;\n          border: none;\n          padding: 0.5rem 1rem;\n          font-weight: 500;\n          background-color: #f9d85b;\n          transition: transform 0.3s ease, background-color 0.3s ease;\n        }\n        .extra-button:hover {\n          transform: scale(1.05);\n          background-color: #fff;\n        }\n      "}),(0,s.jsxs)("div",{className:"extra-container",children:[(0,s.jsx)("span",{className:"extra-text",children:"We are TheWidlarzGroup"}),(0,s.jsx)("a",{target:"_blank",href:"https://www.thewidlarzgroup.com/?utm_source=rnv&utm_medium=docs#Contact",className:"extra-button",rel:"noreferrer",children:"Premium support →"})]})]})},useNextSeoProps:()=>({titleTemplate:"%s – Video"})}},5789:function(){}},function(e){e.O(0,[774,890,888,179],function(){return e(e.s=5236)}),_N_E=e.O()}]);