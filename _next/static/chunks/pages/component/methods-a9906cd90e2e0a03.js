(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{6389:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/methods",function(){return n(6387)}])},6387:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a}});var r=n(5893),t=n(2673),i=n(3393),o=n(2702);n(9128);var l=n(2643),c=n(2771);let a=[{depth:3,value:"dismissFullscreenPlayer",id:"dismissfullscreenplayer"},{depth:3,value:"pause",id:"pause"},{depth:3,value:"presentFullscreenPlayer",id:"presentfullscreenplayer"},{depth:3,value:"resume",id:"resume"},{depth:3,value:"restoreUserInterfaceForPictureInPictureStopCompleted",id:"restoreuserinterfaceforpictureinpicturestopcompleted"},{depth:3,value:"save",id:"save"},{depth:3,value:"seek",id:"seek"},{depth:4,value:"Exact seek",id:"exact-seek"},{depth:3,value:"setVolume",id:"setvolume"},{depth:3,value:"getCurrentPosition",id:"getcurrentposition"},{depth:3,value:"setSource",id:"setsource"},{depth:3,value:"setFullScreen",id:"setfullscreen"},{depth:3,value:"nativeHtmlVideoRef",id:"nativehtmlvideoref"},{depth:3,value:"Example Usage",id:"example-usage"},{depth:2,value:"Static methods",id:"static-methods"},{depth:3,value:"getWidevineLevel",id:"getwidevinelevel"},{depth:3,value:"isCodecSupported",id:"iscodecsupported"},{depth:3,value:"isHEVCSupported",id:"ishevcsupported"},{depth:3,value:"Example Usage",id:"example-usage-1"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code",blockquote:"blockquote",a:"a",ul:"ul",li:"li",h4:"h4",pre:"pre",span:"span",h2:"h2"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"Methods"}),"\n",(0,r.jsx)(s.p,{children:"This page shows the list of available methods"}),"\n",(0,r.jsx)(s.h3,{id:"dismissfullscreenplayer",children:(0,r.jsx)(s.code,{children:"dismissFullscreenPlayer"})}),"\n",(0,r.jsx)(c.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"dismissFullscreenPlayer(): Promise<void>"})}),"\n",(0,r.jsx)(s.p,{children:"Take the player out of fullscreen mode."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"[!WARNING]\ndeprecated, use setFullScreen method instead"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"pause",children:(0,r.jsx)(s.code,{children:"pause"})}),"\n",(0,r.jsx)(c.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"pause(): Promise<void>"})}),"\n",(0,r.jsx)(s.p,{children:"Pause the video."}),"\n",(0,r.jsx)(s.h3,{id:"presentfullscreenplayer",children:(0,r.jsx)(s.code,{children:"presentFullscreenPlayer"})}),"\n",(0,r.jsx)(c.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"presentFullscreenPlayer(): Promise<void>"})}),"\n",(0,r.jsx)(s.p,{children:"Put the player in fullscreen mode."}),"\n",(0,r.jsx)(s.p,{children:"On iOS, this displays the video in a fullscreen view controller with controls."}),"\n",(0,r.jsx)(s.p,{children:"On Android, this puts the navigation controls in fullscreen mode. It is not a complete fullscreen implementation, so you will still need to apply a style that makes the width and height match your screen dimensions to get a fullscreen video."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"[!WARNING]\ndeprecated, use setFullScreen method instead"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"resume",children:(0,r.jsx)(s.code,{children:"resume"})}),"\n",(0,r.jsx)(c.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"resume(): Promise<void>"})}),"\n",(0,r.jsx)(s.p,{children:"Resume the video."}),"\n",(0,r.jsx)(s.h3,{id:"restoreuserinterfaceforpictureinpicturestopcompleted",children:(0,r.jsx)(s.code,{children:"restoreUserInterfaceForPictureInPictureStopCompleted"})}),"\n",(0,r.jsx)(c.Z,{types:["iOS"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"restoreUserInterfaceForPictureInPictureStopCompleted(restored)"})}),"\n",(0,r.jsxs)(s.p,{children:["This function corresponds to the completion handler in Apple's ",(0,r.jsx)(s.a,{href:"https://developer.apple.com/documentation/avkit/avpictureinpicturecontrollerdelegate/1614703-pictureinpicturecontroller?language=objc",children:"restoreUserInterfaceForPictureInPictureStop"}),". IMPORTANT: This function must be called after ",(0,r.jsx)(s.code,{children:"onRestoreUserInterfaceForPictureInPictureStop"})," is called."]}),"\n",(0,r.jsx)(s.h3,{id:"save",children:(0,r.jsx)(s.code,{children:"save"})}),"\n",(0,r.jsx)(c.Z,{types:["iOS"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"save(): Promise<{ uri: string }>"})}),"\n",(0,r.jsx)(s.p,{children:"Save video to your Photos with current filter prop. Returns promise."}),"\n",(0,r.jsx)(s.p,{children:"Notes:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Currently only supports highest quality export"}),"\n",(0,r.jsx)(s.li,{children:"Currently only supports MP4 export"}),"\n",(0,r.jsx)(s.li,{children:"Currently only supports exporting to user's cache directory with a generated UUID filename."}),"\n",(0,r.jsx)(s.li,{children:"User will need to remove the saved video through their Photos app"}),"\n",(0,r.jsx)(s.li,{children:"Works with cached videos as well. (Checkout video-caching example)"}),"\n",(0,r.jsx)(s.li,{children:"If the video is has not began buffering (e.g. there is no internet connection) then the save function will throw an error."}),"\n",(0,r.jsx)(s.li,{children:"If the video is buffering then the save function promise will return after the video has finished buffering and processing."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Future:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Will support multiple qualities through options"}),"\n",(0,r.jsx)(s.li,{children:"Will support more formats in the future through options"}),"\n",(0,r.jsx)(s.li,{children:"Will support custom directory and file name through options"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"seek",children:(0,r.jsx)(s.code,{children:"seek"})}),"\n",(0,r.jsx)(c.Z,{types:["All"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"seek(seconds)"})}),"\n",(0,r.jsx)(s.p,{children:"Seek to the specified position represented by seconds. seconds is a float value."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"seek()"})," can only be called after the ",(0,r.jsx)(s.code,{children:"onLoad"})," event has fired. Once completed, the ",(0,r.jsx)(s.a,{href:"./events#onseek",children:"onSeek"})," event will be called."]}),"\n",(0,r.jsx)(s.h4,{id:"exact-seek",children:"Exact seek"}),"\n",(0,r.jsx)(c.Z,{types:["iOS"]}),"\n",(0,r.jsx)(s.p,{children:"By default iOS seeks within 100 milliseconds of the target position. If you need more accuracy, you can use the seek with tolerance method:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"seek(seconds, tolerance)"})}),"\n",(0,r.jsx)(s.p,{children:"tolerance is the max distance in milliseconds from the seconds position that's allowed. Using a more exact tolerance can cause seeks to take longer. If you want to seek exactly, set tolerance to 0."}),"\n",(0,r.jsx)(s.h3,{id:"setvolume",children:(0,r.jsx)(s.code,{children:"setVolume"})}),"\n",(0,r.jsx)(c.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"setVolume(value): Promise<void>"})}),"\n",(0,r.jsxs)(s.p,{children:["This function will change the volume exactly like ",(0,r.jsx)(s.a,{href:"./props#volume",children:"volume"})," property. default value and range are the same then."]}),"\n",(0,r.jsx)(s.h3,{id:"getcurrentposition",children:(0,r.jsx)(s.code,{children:"getCurrentPosition"})}),"\n",(0,r.jsx)(c.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"getCurrentPosition(): Promise<number>"})}),"\n",(0,r.jsx)(s.p,{children:"This function retrieves and returns the precise current position of the video playback, measured in seconds.\nThis function will throw an error if player is not initialized."}),"\n",(0,r.jsx)(s.h3,{id:"setsource",children:(0,r.jsx)(s.code,{children:"setSource"})}),"\n",(0,r.jsx)(c.Z,{types:["Android","iOS"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"setSource(source: ReactVideoSource): Promise<void>"})}),"\n",(0,r.jsxs)(s.p,{children:["This function will change the source exactly like ",(0,r.jsx)(s.a,{href:"./props#source",children:"source"})," property.\nChanging source with this function will overide source provided as props."]}),"\n",(0,r.jsx)(s.h3,{id:"setfullscreen",children:(0,r.jsx)(s.code,{children:"setFullScreen"})}),"\n",(0,r.jsx)(c.Z,{types:["Android","iOS","web"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"setFullScreen(fullscreen): Promise<void>"})}),"\n",(0,r.jsxs)(s.p,{children:["If you set it to ",(0,r.jsx)(s.code,{children:"true"}),", the player enters fullscreen mode. If you set it to ",(0,r.jsx)(s.code,{children:"false"}),", the player exits fullscreen mode."]}),"\n",(0,r.jsx)(s.p,{children:"On iOS, this displays the video in a fullscreen view controller with controls."}),"\n",(0,r.jsx)(s.p,{children:"On Android, this puts the navigation controls in fullscreen mode. It is not a complete fullscreen implementation, so you will still need to apply a style that makes the width and height match your screen dimensions to get a fullscreen video."}),"\n",(0,r.jsx)(s.h3,{id:"nativehtmlvideoref",children:(0,r.jsx)(s.code,{children:"nativeHtmlVideoRef"})}),"\n",(0,r.jsx)(c.Z,{types:["web"]}),"\n",(0,r.jsx)(s.p,{children:"A ref to the underlying html video element. This can be used if you need to integrate a 3d party, web only video library (like hls.js, shaka, video.js...)."}),"\n",(0,r.jsx)(s.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"VideoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"someCoolFunctions"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".current) {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// present or dismiss fullscreen player"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".presentFullscreenPlayer"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".dismissFullscreenPlayer"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// pause or resume the video"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".pause"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".resume"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// save video to your Photos with current filter prop"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".save"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"path"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".uri;"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// seek to the specified position represented by seconds"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".seek"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// or on iOS you can seek with tolerance"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".seek"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Video"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ref"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{videoRef}"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"source"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{{uri"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://www.w3schools.com/html/mov_bbb.mp4'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}}"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})})]})}),"\n",(0,r.jsx)(s.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,r.jsx)(s.h3,{id:"getwidevinelevel",children:(0,r.jsx)(s.code,{children:"getWidevineLevel"})}),"\n",(0,r.jsx)(c.Z,{types:["Android"]}),"\n",(0,r.jsx)(s.p,{children:"Indicates whether the widevine level supported by device."}),"\n",(0,r.jsx)(s.p,{children:"Possible values are:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"0 - unable to determine widevine support (typically not supported)"}),"\n",(0,r.jsx)(s.li,{children:"1, 2, 3 - Widevine level supported"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"iscodecsupported",children:(0,r.jsx)(s.code,{children:"isCodecSupported"})}),"\n",(0,r.jsx)(c.Z,{types:["Android","web"]}),"\n",(0,r.jsx)(s.p,{children:"Indicates whether the provided codec is supported level supported by device."}),"\n",(0,r.jsx)(s.p,{children:"parameters:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"mimetype"}),": mime type of codec to query"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"width"}),", ",(0,r.jsx)(s.code,{children:"height"}),": resolution to query"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Possible results:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"hardware"})," - codec is supported by hardware"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"software"})," - codec is supported by software only"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"unsupported"})," - codec is not supported"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"ishevcsupported",children:(0,r.jsx)(s.code,{children:"isHEVCSupported"})}),"\n",(0,r.jsx)(c.Z,{types:["Android"]}),"\n",(0,r.jsx)(s.p,{children:"Helper which Indicates whether the provided HEVC/1920*1080 is supported level supported by device. It uses isCodecSupported internally."}),"\n",(0,r.jsx)(s.h3,{id:"example-usage-1",children:"Example Usage"}),"\n",(0,r.jsx)(s.pre,{"data-language":"tsx","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"tsx","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { VideoDecoderProperties } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-native-video'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"VideoDecoderProperties"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".getWidevineLevel"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((level) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"VideoDecoderProperties"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".isCodecSupported"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'video/hevc'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1920"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1080"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((support) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"VideoDecoderProperties"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".isHEVCSupported"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((support) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})})]})})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/component/methods.mdx",route:"/component/methods",timestamp:1733322951e3,pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",component:"API",other:"Other",separator_versions:{type:"separator",title:""},updating:"Updating",changelog:{title:"Changelog",newWindow:!0,href:"https://github.com/TheWidlarzGroup/react-native-video/blob/master/CHANGELOG.md"},separator_community:{type:"separator",title:""},example_apps:{title:"Example Apps",newWindow:!0,href:"https://github.com/TheWidlarzGroup/react-native-video/tree/master/examples"},projects:"Useful projects"}},{kind:"Folder",name:"component",route:"/component",children:[{kind:"Meta",data:{props:"Properties",drm:"DRM",ads:"Ads",events:"Events",methods:"Methods"}},{kind:"MdxPage",name:"ads",route:"/component/ads"},{kind:"MdxPage",name:"drm",route:"/component/drm"},{kind:"MdxPage",name:"events",route:"/component/events"},{kind:"MdxPage",name:"methods",route:"/component/methods"},{kind:"MdxPage",name:"props",route:"/component/props"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"other",route:"/other",children:[{kind:"Meta",data:{caching:"Caching",misc:"Misc",debug:"Debugging","new-arch":"New Architecture",expo:"Expo",plugin:"Plugin (experimental)"}},{kind:"MdxPage",name:"caching",route:"/other/caching"},{kind:"MdxPage",name:"debug",route:"/other/debug"},{kind:"MdxPage",name:"expo",route:"/other/expo"},{kind:"MdxPage",name:"misc",route:"/other/misc"},{kind:"MdxPage",name:"new-arch",route:"/other/new-arch"},{kind:"MdxPage",name:"plugin",route:"/other/plugin"}]},{kind:"MdxPage",name:"projects",route:"/projects"},{kind:"MdxPage",name:"updating",route:"/updating"}],flexsearch:{codeblocks:!0},title:"Methods",headings:a},pageNextRoute:"/component/methods",nextraLayout:i.ZP,themeConfig:o.Z};s.default=(0,t.j)(d)},2771:function(e,s,n){"use strict";var r=n(5893);n(7294);var t=n(7672),i=n.n(t);s.Z=function(e){let{types:s}=e;return(0,r.jsxs)("p",{className:i().paragraphStyle,children:[1!==s.length||s.includes("All")?"Platforms:":"Platform:",(0,r.jsx)("span",{className:i().spanStyle,children:" "+s.join(" | ")})]})}},2702:function(e,s,n){"use strict";var r=n(5893);n(7294),s.Z={head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"language",content:"en"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:"Video component for React Native"}),(0,r.jsx)("meta",{name:"og:title",content:"React Native Video"}),(0,r.jsx)("meta",{name:"og:description",content:"A Video component for React Native"}),(0,r.jsx)("meta",{name:"og:image",content:"https://docs.thewidlarzgroup.com/react-native-video/thumbnail.jpg"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:"React Native Video"}),(0,r.jsx)("meta",{name:"twitter:description",content:"A Video component for React Native"}),(0,r.jsx)("meta",{name:"twitter:image",content:"https://docs.thewidlarzgroup.com/react-native-video/thumbnail.jpg"}),(0,r.jsx)("meta",{name:"twitter:image:alt",content:"React Native Video"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap",rel:"stylesheet"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",href:"https://docs.thewidlarzgroup.com/react-native-video/favicon.png"}),(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-PM2TQQQMDN"}),(0,r.jsx)("script",{children:"window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', 'G-PM2TQQQMDN');"})]}),logo:(0,r.jsxs)("span",{children:["\uD83C\uDFAC ",(0,r.jsx)("strong",{children:"Video component"})," for React Native"]}),project:{link:"https://github.com/TheWidlarzGroup/react-native-video"},docsRepositoryBase:"https://github.com/TheWidlarzGroup/react-native-video/tree/master/docs/",footer:{text:(0,r.jsxs)("span",{children:["Built with ❤️ by ",(0,r.jsx)("strong",{children:"React Native Community"})]})},toc:{extraContent:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:"\n        :is(html[class~=dark]) .extra-container {\n          background-color: #87ccef;\n        }\n        :is(html[class~=dark]) .extra-text {\n          color: #171717;\n        }\n        :is(html[class~=dark]) .extra-button {\n          background-color: #171717;\n        }\n        .extra-container {\n          display: flex;\n          flex-direction: column;\n          margin-top: 0.5rem;\n          text-align: center;\n          background-color: #171717;\n          padding: 1rem;\n          gap: 1rem;\n          border-radius: 0.5rem;\n        }\n        .extra-text {\n          padding-left: 0.5rem;\n          padding-right: 0.5rem;\n          font-weight: bold;\n          color: #fff;\n        }\n        .extra-button {\n          width: 100%;\n          border: none;\n          padding: 0.5rem 1rem;\n          font-weight: 500;\n          background-color: #f9d85b;\n          transition: transform 0.3s ease, background-color 0.3s ease;\n        }\n        .extra-button:hover {\n          transform: scale(1.05);\n          background-color: #fff;\n        }\n      "}),(0,r.jsxs)("div",{className:"extra-container",children:[(0,r.jsx)("span",{className:"extra-text",children:"We are TheWidlarzGroup"}),(0,r.jsx)("a",{target:"_blank",href:"https://www.thewidlarzgroup.com/?utm_source=rnv&utm_medium=docs#Contact",className:"extra-button",rel:"noreferrer",children:"Premium support →"})]})]})},useNextSeoProps:()=>({titleTemplate:"%s – Video"})}},7672:function(e){e.exports={paragraphStyle:"PlatformsList_paragraphStyle__v_l36",spanStyle:"PlatformsList_spanStyle__ISLBH"}},5789:function(){}},function(e){e.O(0,[774,890,888,179],function(){return e(e.s=6389)}),_N_E=e.O()}]);