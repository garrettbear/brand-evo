/*! For license information please see docs-IntroductionColor-stories-mdx.0de26f4d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_metamask_design_tokens=self.webpackChunk_metamask_design_tokens||[]).push([[181],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./docs/IntroductionColor.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>IntroductionColor_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const design_token_graphic_namespaceObject=__webpack_require__.p+"static/media/design.token.graphic.8d23ec03.svg";var src=__webpack_require__("./src/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",strong:"strong",a:"a",ul:"ul",li:"li",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Colors / Introduction"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"color",children:"Color"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Color is used to express style and communicate meaning."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"token-tiers",children:"Token Tiers"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We follow a 3 tiered system for color design tokens."}),"\n",(0,jsx_runtime.jsx)("div",{style:{textAlign:"center",backgroundColor:src.Wb.colors.background.alternative,padding:32},children:(0,jsx_runtime.jsx)("img",{width:"80%",src:design_token_graphic_namespaceObject})}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsxs)(_components.h3,{id:"brand-colors-first-tier",children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Brand colors"})," (first tier)"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["These colors ",(0,jsx_runtime.jsx)(_components.strong,{children:"SHOULD NOT"})," be used in your component styles directly. They are used as a reference for the ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/colors-themecolors--light-theme-colors",children:"Theme Colors"}),". Brand colors are used to keep track of all colors used in our app. See ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/colors-brandcolors--default-story",children:"Brand Colors"})]}),"\n",(0,jsx_runtime.jsxs)(_components.h3,{id:"theme-colors-second-tier",children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Theme Colors"})," (second tier)"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["These colors are color agnostic, semantically neutral and theme compatible design tokens that you can use in your code and styles. Please refer to the description of each token for it's intended purpose. See ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/colors-themecolors--light-theme-colors",children:"Theme Colors"})]}),"\n",(0,jsx_runtime.jsxs)(_components.h3,{id:"component-colors-third-tier",children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Component colors"})," (third tier)"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Another level of abstraction is component colors that you can use at a component specific level. We do not currently provide any component tier colors but that may change in future."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"takeaways",children:"Takeaways"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Do not use static HEX values in your code. Use the ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/colors-themecolors--light-theme-colors",children:"Theme Colors"}),". If one does not exist for your use case ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/MetaMask/design-tokens/issues/new",target:"_blank",rel:"nofollow noopener noreferrer",children:"create an issue"})," and tag it with a ",(0,jsx_runtime.jsx)(_components.code,{children:"color"})," label."]}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Make sure the design token you are using is for it's intended purpose. Please refer to the description of each token."}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.h3,{id:"next--theme-colors",children:["Next 👉 ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/colors-themecolors--light-theme-colors",children:"Theme Colors"})]}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"references",children:"References"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/cBAUPFMnbv6tHR1J8KvBI2/Brand-Colors?node-id=0%3A1",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Brand Colors Library"}),"(internal use only)"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/kdFzEC7xzSNw7cXteqgzDW/Light-Theme-Colors?node-id=0%3A1",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Light Theme Colors Library"}),"(internal use only)"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/rLKsoqpjyoKauYnFDcBIbO/Dark-Theme-Colors?node-id=0%3A1",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Dark Theme Colors Library"}),"(internal use only)"]}),"\n"]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Colors / Introduction",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const IntroductionColor_stories=componentMeta,__namedExportsOrder=["__page"]},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Wb:()=>_js__WEBPACK_IMPORTED_MODULE_0__.Wb});var _js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/js/index.ts")},"./src/js/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Wb:()=>lightTheme});var typography=__webpack_require__("./src/js/typography/index.ts");const colors={background:{default:"#FFFFFF",defaultHover:"#FAFAFA",defaultPressed:"#EBEBEB",alternative:"#F2F4F6",alternativeHover:"#EDEFF1",alternativePressed:"#DFE0E2",hover:"#00000005",pressed:"#00000014"},text:{default:"#24272A",alternative:"#535A61",muted:"#BBC0C5"},icon:{default:"#24272A",alternative:"#6A737D",muted:"#BBC0C5"},border:{default:"#BBC0C5",muted:"#D6D9DC"},overlay:{default:"#00000099",inverse:"#FCFCFC",alternative:"#000000CC"},shadow:{default:"#0000001A"},primary:{default:"#0376C9",alternative:"#0260A4",muted:"#0376C919",inverse:"#FCFCFC",disabled:"#0376C980",shadow:"#0376C933"},secondary:{default:"#F66A0A",alternative:"#C65507",muted:"#F66A0A19",inverse:"#FCFCFC",disabled:"#F66A0A80"},error:{default:"#D73847",alternative:"#B92534",muted:"#D7384719",inverse:"#FCFCFC",disabled:"#D7384780",shadow:"#D7384766"},warning:{default:"#F66A0A",alternative:"#FFC70A",muted:"#FFD33D19",inverse:"#FCFCFC",disabled:"#FFD33D80"},success:{default:"#28A745",alternative:"#1E7E34",muted:"#28A74519",inverse:"#FCFCFC",disabled:"#28A74580"},info:{default:"#0376C9",alternative:"#0260A4",muted:"#0376C919",inverse:"#FCFCFC",disabled:"#0376C980"},networks:{goerli:{default:"#1098FC",inverse:"#FCFCFC"},localhost:{default:"#BBC0C5",inverse:"#FCFCFC"},sepolia:{default:"#CFB5F0",inverse:"#FCFCFC"}},flask:{default:"#8B45B6",inverse:"#FCFCFC"}},shadows={size:{xs:{shadowColor:colors.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:4},sm:{shadowColor:colors.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:8},md:{shadowColor:colors.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:16},lg:{shadowColor:colors.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:40}}},lightTheme={colors,typography:typography.c,shadows},colors_colors={background:{default:"#24272A",defaultHover:"#282B2E",defaultPressed:"#36383B",alternative:"#141618",alternativeHover:"#191B1D",alternativePressed:"#27292A",hover:"#FFFFFF05",pressed:"#FFFFFF14"},text:{default:"#FFFFFF",alternative:"#D6D9DC",muted:"#9FA6AE"},icon:{default:"#FFFFFF",alternative:"#BBC0C5",muted:"#9FA6AE"},border:{default:"#848C96",muted:"#3B4046"},overlay:{default:"#00000099",inverse:"#FCFCFC",alternative:"#000000CC"},shadow:{default:"#00000066"},primary:{default:"#1098FC",alternative:"#43AEFC",muted:"#1098FC26",inverse:"#FCFCFC",disabled:"#1098FC80",shadow:"#1098FC66"},secondary:{default:"#F8883B",alternative:"#FAA66C",muted:"#F8883B26",inverse:"#FCFCFC",disabled:"#F8883B80"},error:{default:"#D73847",alternative:"#E06470",muted:"#D7384726",inverse:"#FCFCFC",disabled:"#D7384780",shadow:"#D7384766"},warning:{default:"#FFD33D",alternative:"#FFDF70",muted:"#FFD33D26",inverse:"#141618",disabled:"#FFD33D80"},success:{default:"#28A745",alternative:"#5DD879",muted:"#28A74526",inverse:"#FCFCFC",disabled:"#28A74580"},info:{default:"#1098FC",alternative:"#43AEFC",muted:"#1098FC26",inverse:"#FCFCFC",disabled:"#0376C980"},networks:{goerli:{default:"#1098FC",inverse:"#FCFCFC"},localhost:{default:"#BBC0C5",inverse:"#FCFCFC"},sepolia:{default:"#CFB5F0",inverse:"#FCFCFC"}},flask:{default:"#8B45B6",inverse:"#FCFCFC"}},darkTheme_colors=(colors_colors.shadow.default,colors_colors.shadow.default,colors_colors.shadow.default,colors_colors.shadow.default,colors_colors);typography.c,lightTheme.colors},"./src/js/typography/fontFamilies.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>fontFamilies});const fontFamilies={euclidCircularB:"Euclid Circular B"}},"./src/js/typography/fontSizes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>fontSizes});const fontSizes={fontSize1:10,fontSize2:12,fontSize3:14,fontSize4:16,fontSize5:18,fontSize6:24,fontSize7:32,fontSize8:48}},"./src/js/typography/fontWeights.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>fontWeights});const fontWeights={regular:"400",medium:"500",bold:"700"}},"./src/js/typography/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>typography});var fontFamilies=__webpack_require__("./src/js/typography/fontFamilies.ts"),fontSizes=__webpack_require__("./src/js/typography/fontSizes.ts"),fontWeights=__webpack_require__("./src/js/typography/fontWeights.ts"),letterSpacing=__webpack_require__("./src/js/typography/letterSpacing.ts"),lineHeights=__webpack_require__("./src/js/typography/lineHeights.ts");const typography={sDisplayMD:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize7,lineHeight:lineHeights.t.lineHeight6,letterSpacing:letterSpacing.r.letterSpacing0},sHeadingLG:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize6,lineHeight:lineHeights.t.lineHeight5,letterSpacing:letterSpacing.r.letterSpacing0},sHeadingMD:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize5,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},sHeadingSM:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize4,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},sHeadingSMRegular:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize4,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},sBodyLGMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize4,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},sBodyMD:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize3,lineHeight:lineHeights.t.lineHeight3,letterSpacing:letterSpacing.r.letterSpacing0},sBodyMDMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize3,lineHeight:lineHeights.t.lineHeight3,letterSpacing:letterSpacing.r.letterSpacing0},sBodyMDBold:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize3,lineHeight:lineHeights.t.lineHeight3,letterSpacing:letterSpacing.r.letterSpacing0},sBodySM:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize2,lineHeight:lineHeights.t.lineHeight2,letterSpacing:letterSpacing.r.letterSpacing0},sBodySMMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize2,lineHeight:lineHeights.t.lineHeight2,letterSpacing:letterSpacing.r.letterSpacing0},sBodySMBold:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize2,lineHeight:lineHeights.t.lineHeight2,letterSpacing:letterSpacing.r.letterSpacing0},sBodyXS:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize1,lineHeight:lineHeights.t.lineHeight1,letterSpacing:letterSpacing.r.letterSpacing1},sBodyXSMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize1,lineHeight:lineHeights.t.lineHeight1,letterSpacing:letterSpacing.r.letterSpacing1},lDisplayMD:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize8,lineHeight:lineHeights.t.lineHeight7,letterSpacing:letterSpacing.r.letterSpacing0},lHeadingLG:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize7,lineHeight:lineHeights.t.lineHeight6,letterSpacing:letterSpacing.r.letterSpacing0},lHeadingMD:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize6,lineHeight:lineHeights.t.lineHeight5,letterSpacing:letterSpacing.r.letterSpacing0},lHeadingSM:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize5,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},lHeadingSMRegular:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize5,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},lBodyLGMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize5,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},lBodyMD:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize4,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},lBodyMDMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize4,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},lBodyMDBold:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize4,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},lBodySM:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize3,lineHeight:lineHeights.t.lineHeight3,letterSpacing:letterSpacing.r.letterSpacing0},lBodySMMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize3,lineHeight:lineHeights.t.lineHeight3,letterSpacing:letterSpacing.r.letterSpacing0},lBodySMBold:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize3,lineHeight:lineHeights.t.lineHeight3,letterSpacing:letterSpacing.r.letterSpacing0},lBodyXS:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize2,lineHeight:lineHeights.t.lineHeight2,letterSpacing:letterSpacing.r.letterSpacing1},lBodyXSMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize2,lineHeight:lineHeights.t.lineHeight2,letterSpacing:letterSpacing.r.letterSpacing1}}},"./src/js/typography/letterSpacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>letterSpacing});const letterSpacing={letterSpacing0:0,letterSpacing1:.25}},"./src/js/typography/lineHeights.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>lineHeights});const lineHeights={lineHeight1:16,lineHeight2:20,lineHeight3:22,lineHeight4:24,lineHeight5:32,lineHeight6:40,lineHeight7:56}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);