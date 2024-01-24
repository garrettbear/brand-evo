"use strict";(self.webpackChunk_metamask_design_tokens=self.webpackChunk_metamask_design_tokens||[]).push([[202],{"./docs/BrandColors.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CSS:()=>CSS,Figma:()=>Figma,JS:()=>JS,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BrandColors_stories});__webpack_require__("./node_modules/react/index.js");var tokens=__webpack_require__("./src/figma/tokens.json"),js=__webpack_require__("./src/js/index.ts"),getCSSVariablesFromStylesheet=__webpack_require__("./docs/utils/getCSSVariablesFromStylesheet.ts"),components=__webpack_require__("./docs/components/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",em:"em",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"brand-colors-first-tier",children:"Brand colors (first tier)"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Brand colors form the foundation of our color system. They use literal color names (like red, green, etc.) and a numeric scale (where 000 is light and 900 is dark) by default. These colors are essential to maintaining visual consistency across our products and are primarily used as a reference for the ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/colors-theme-colors--docs",children:"theme colors"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["While these colors are fundamental to our design system, they ",(0,jsx_runtime.jsx)(_components.strong,{children:"should not"})," be used directly in most cases. Instead, they should be referenced via ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/colors-theme-colors--docs",children:"theme colors"}),", which form the second tier of our design tokens."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"However, in rare cases where a color needs to remain constant across themes (e.g., white always being white, regardless of light or dark mode), the corresponding brand color can be used. Always ensure there isn't an existing theme token that could be used instead."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.em,{children:["The majority of our brand color progressions were generated using the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://0to255.com/037dd6",target:"_blank",rel:"nofollow noopener noreferrer",children:"0to255"})," tool, which helps ensure smooth and consistent color transitions."]})}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#brand-colors",children:(0,jsx_runtime.jsx)(_components.strong,{children:"Brand colors"})})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#best-practices",children:(0,jsx_runtime.jsx)(_components.strong,{children:"Best practices"})})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#references",children:(0,jsx_runtime.jsx)(_components.strong,{children:"References"})})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"brand-colors",children:"Brand colors"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Figma}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,jsx_runtime.jsxs)(_components.h3,{id:"-do-use-brand-colors-when-the-color-should-remain-the-same-across-all-themes",children:["✅ ",(0,jsx_runtime.jsx)(_components.strong,{children:"DO"}),": Use brand colors when the color should remain the same across all themes"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"fill: brandColors.white.white000;\nfill: var(--brand-colors-white-white000);\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.h3,{id:"-dont-use-brand-colors-without-checking-for-an-existing-theme-token-first",children:["❌ ",(0,jsx_runtime.jsx)(_components.strong,{children:"DON'T"}),": Use brand colors without checking for an existing theme token first"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"background-color: brandColors.blue.blue500; // Brand color instead of theme.color.primary.default\nbackground-color: var(--brand-colors-blue-blue500); // Brand color instead of var(--color-primary-default)\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.h3,{id:"-do-store-non-token-colors-in-a-global-file",children:["✅ ",(0,jsx_runtime.jsx)(_components.strong,{children:"DO"}),": Store non-token colors in a global file"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"If you need to use colors that are not included in the design tokens, store these colors in a global file in your project. This makes it easier to keep track of these colors and update them as needed. Always consider this as a last resort, and strive to use design tokens wherever possible."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"// colors.js\nexport const customColors = {\n  myCustomColor: '#abc123',\n};\n\n// colors.css\n--custom-colors-my-custom-color: #abc123;\n\n// component.js\nimport { customColors } from './colors.js';\n\nbackground-color: customColors.myCustomColor;\nbackground-color: var(--custom-colors-my-custom-color);\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.h3,{id:"-dont-use-non-token-colors-directly-in-your-components",children:["❌ ",(0,jsx_runtime.jsx)(_components.strong,{children:"DON'T"}),": Use non-token colors directly in your components"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"// Avoid\nbackground-color: #abc123; // Custom color not in design tokens or global file\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"references",children:"References"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"http://www.0to255.com/037DD6",target:"_blank",rel:"nofollow noopener noreferrer",children:"0to255"}),": The tool we used to generate our color progressions."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/cBAUPFMnbv6tHR1J8KvBI2/Brand-Colors?node-id=0%3A1",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Brand Colors Library"}),": Our internal Figma library for brand colors. Please note that this is for internal use only."]}),"\n"]})]})}const BrandColors=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},BrandColors_stories={title:"Colors/Brand Colors",component:components.H4,parameters:{docs:{page:BrandColors}}},Figma={render:()=>(0,jsx_runtime.jsx)(components.H4,{swatchData:tokens.CO.D2})},CSS={render:()=>{const cssBrandColors=(0,getCSSVariablesFromStylesheet.Z)("--brand-colors");return(0,jsx_runtime.jsx)("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:Object.values(cssBrandColors).map((_ref=>{let{color,name}=_ref;return(0,jsx_runtime.jsx)(components.bc,{color,name},name)}))})}},JS={render:()=>(0,jsx_runtime.jsx)("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fill, 300px)"},children:Object.entries(js.Fz).map((_ref2=>{let[name,color]=_ref2;return(0,jsx_runtime.jsx)(components.bc,{color,name:`brandColor.${name}`},name)}))})};Figma.parameters={...Figma.parameters,docs:{...Figma.parameters?.docs,source:{originalSource:"{\n  render: () => <ColorSwatchGroup swatchData={tokens.global.brandColors} />\n}",...Figma.parameters?.docs?.source}}},CSS.parameters={...CSS.parameters,docs:{...CSS.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const cssBrandColors = getCSSVariablesFromStylesheet('--brand-colors');\n    return <div style={{\n      display: 'grid',\n      gap: '16px',\n      gridTemplateColumns: 'repeat(auto-fill, 300px)'\n    }}>\n        {/* Mapping through each brand color and rendering a ColorSwatch component for it */}\n        {Object.values(cssBrandColors).map(({\n        color,\n        name\n      }) => <ColorSwatch key={name} color={color} name={name} />)}\n      </div>;\n  }\n}",...CSS.parameters?.docs?.source}}},JS.parameters={...JS.parameters,docs:{...JS.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    display: 'grid',\n    gap: '16px',\n    gridTemplateColumns: 'repeat(auto-fill, 300px)'\n  }}>\n      {/* Mapping through each brand color and rendering a ColorSwatch component for it */}\n      {Object.entries(brandColor).map(([name, color]) => <ColorSwatch key={name} color={color} name={`brandColor.${name}`} />)}\n    </div>\n}",...JS.parameters?.docs?.source}}};const __namedExportsOrder=["Figma","CSS","JS"]}}]);