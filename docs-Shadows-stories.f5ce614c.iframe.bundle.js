"use strict";(self.webpackChunk_metamask_design_tokens=self.webpackChunk_metamask_design_tokens||[]).push([[740],{"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_=__webpack_require__("@storybook/core-events"),dist=__webpack_require__("./node_modules/@storybook/csf/dist/index.mjs"),{document:chunk_6GSMXRCY_document,HTMLElement}=external_STORYBOOK_MODULE_GLOBAL_.global;var chunk_6GSMXRCY_navigate=params=>external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().emit(external_STORYBOOK_MODULE_CORE_EVENTS_.SELECT_STORY,params),hrefTo=(title,name)=>new Promise((resolve=>{let{location}=chunk_6GSMXRCY_document,query=function parseQuery(queryString){let query={},pairs=("?"===queryString[0]?queryString.substring(1):queryString).split("&").filter(Boolean);for(let i=0;i<pairs.length;i++){let pair=pairs[i].split("=");query[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]||"")}return query}(location.search),existingId=[].concat(query.id)[0],titleToLink=title||existingId.split("--",2)[0],path=`/story/${(0,dist.KK)(titleToLink,name)}`,sbPath=location.pathname.replace(/iframe\.html$/,"");resolve(`${location.origin+sbPath}?${Object.entries({path}).map((item=>`${item[0]}=${item[1]}`)).join("&")}`)})),linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),chunk_6GSMXRCY_navigate({kind,story}))},hasListener=!1,off=()=>{hasListener&&(hasListener=!1,chunk_6GSMXRCY_document.removeEventListener("click",linksListener))},react=((0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withLinks",parameterName:"links",wrapper:(getStory,context)=>(hasListener||(hasListener=!0,chunk_6GSMXRCY_document.addEventListener("click",linksListener)),external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().once(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,off),getStory(context))}),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await hrefTo(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&chunk_6GSMXRCY_navigate({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0}},"./docs/Shadows.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,ExampleUsage:()=>ExampleUsage,Shadow:()=>Shadow,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Shadows_stories});__webpack_require__("./node_modules/react/index.js");var js=__webpack_require__("./src/js/index.ts"),components=__webpack_require__("./docs/components/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/react/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Design Tokens/Shadows"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"shadows",children:"Shadows"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Shadows convey elevation of elements on a surface"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"shadows-shadows--shadow"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are 4 different sizes of shadow in MetaMask."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"shadows-shadows--size"})}),"\n",(0,jsx_runtime.jsxs)(_components.table,{children:[(0,jsx_runtime.jsx)(_components.thead,{children:(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.th,{children:"Size"}),(0,jsx_runtime.jsx)(_components.th,{children:"JS"}),(0,jsx_runtime.jsx)(_components.th,{children:"CSS"})]})}),(0,jsx_runtime.jsxs)(_components.tbody,{children:[(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"XS"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"shadows.size.xs"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"var(--shadow-size-xs)"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"SM"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"shadows.size.sm"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"var(--shadow-size-sm)"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"MD"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"shadows.size.md"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"var(--shadow-size-md)"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"LG"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"shadows.size.lg"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"var(--shadow-size-lg)"})})]})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"color",children:"Color"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"As well as the neutral colors for shadow 2 other colors exist that are used for the primary and error/danger button hover states"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"shadows-shadows--color"})}),"\n",(0,jsx_runtime.jsxs)(_components.table,{children:[(0,jsx_runtime.jsx)(_components.thead,{children:(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.th,{children:"Color"}),(0,jsx_runtime.jsx)(_components.th,{children:"JS"}),(0,jsx_runtime.jsx)(_components.th,{children:"CSS"})]})}),(0,jsx_runtime.jsxs)(_components.tbody,{children:[(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"neutral"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"colors.shadow.default"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"var(--color-shadow-default)"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"primary"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"colors.primary.shadow"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"var(--color-primary-shadow)"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"danger"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"colors.error.shadow"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"var(--color-error-shadow)"})})]})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Using both size and color tokens, different shadows can be applied to components."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"shadows-shadows--example-usage"})}),"\n",(0,jsx_runtime.jsxs)(_components.table,{children:[(0,jsx_runtime.jsx)(_components.thead,{children:(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.th,{children:"Component"}),(0,jsx_runtime.jsx)(_components.th,{children:"JS"}),(0,jsx_runtime.jsx)(_components.th,{children:"CSS"})]})}),(0,jsx_runtime.jsxs)(_components.tbody,{children:[(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Card"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"cardShadow: {...shadows.size.xs }"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"box-shadow: var(--shadow-size-xs) var(--color-shadow-default);"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Dropdown"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"dropdownShadow: { ...shadows.size.sm }"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"box-shadow: var(--shadow-size-sm) var(--color-shadow-default);"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Toast"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"toastShadow: { ...shadows.size.md }"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"box-shadow: var(--shadow-size-md) var(--color-shadow-default);"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Modal"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"modalShadow: { ...shadows.size.lg }"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"box-shadow: var(--shadow-size-lg) var(--color-shadow-default);"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Button Primary Hover"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"buttonPrimaryHover: { ...shadows.size.sm, shadowColor: colors.primary.shadow}"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"box-shadow: var(--shadow-size-sm) var(--color-primary-shadow);"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Button Danger Hover"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"buttonDangerHover: { ...shadows.size.sm, shadowColor: colors.primary.shadow}"})}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.code,{children:"box-shadow: var(--shadow-size-sm) var(--color-error-shadow);"})})]})]})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["NOTE: The CSS-in-JS ",(0,jsx_runtime.jsx)(_components.code,{children:"shadows.size"})," objects for React Native contain all the correct tokens for neutral shadows. For primary and error/danger shadows change the ",(0,jsx_runtime.jsx)(_components.code,{children:"shadowColor"})," key"]})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Example shape of the ",(0,jsx_runtime.jsx)(_components.code,{children:"xs"})," shadow size object from ",(0,jsx_runtime.jsx)(_components.code,{children:"shadows"})]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"size: {\n    xs: {\n      shadowColor: colors.light.shadow.default,\n      shadowOffset: {\n        width: 0,\n        height: 2,\n      },\n      shadowOpacity: 1,\n      shadowRadius: 4,\n    },\n    ...\n}\n\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"references",children:"References"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/kdFzEC7xzSNw7cXteqgzDW/%5BColor%5D-Light-Theme?node-id=753%3A719",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Light Theme Colors Library(Shadows Page)"}),"(internal use only)"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/rLKsoqpjyoKauYnFDcBIbO/%5BColor%5D-Dark-Theme?node-id=522%3A1022",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Dark Theme Colors Library(Shadows Page)"}),"(internal use only)"]}),"\n"]})]})}const Shadows_stories={title:"Shadows/Shadows",parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{size:{control:"select",options:Object.keys(js.Wb.shadows.size)},color:{control:"select",options:["default","primary","error"]}},args:{color:"default",size:"xs"}},ShadowSwatch=_ref=>{let{children,style,size="xs",color="default"}=_ref;return(0,jsx_runtime.jsx)("div",{style:{height:100,backgroundColor:"var(--color-background-default)",boxShadow:"default"===color?`var(--shadow-size-${size}) var(--color-shadow-${color}`:`var(--shadow-size-${size}) var(--color-${color}-shadow`,borderRadius:"4px",display:"grid",alignContent:"center",justifyContent:"center",textAlign:"center",...style},children})};ShadowSwatch.displayName="ShadowSwatch";const Shadow=args=>(0,jsx_runtime.jsx)("div",{style:{display:"grid",gap:"32px",gridTemplateColumns:"repeat(auto-fill, 200px)"},children:(0,jsx_runtime.jsx)(ShadowSwatch,{...args,children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"Shadow"})})});Shadow.displayName="Shadow";const Size=args=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"32px",gridTemplateColumns:"repeat(auto-fill, 200px)"},children:[(0,jsx_runtime.jsx)(ShadowSwatch,{color:args.color,size:"xs",children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"XS"})}),(0,jsx_runtime.jsx)(ShadowSwatch,{color:args.color,size:"sm",children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"SM"})}),(0,jsx_runtime.jsx)(ShadowSwatch,{color:args.color,size:"md",children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"MD"})}),(0,jsx_runtime.jsx)(ShadowSwatch,{color:args.color,size:"lg",children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"LG"})})]});Size.displayName="Size";const Color=args=>(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"32px",gridTemplateColumns:"repeat(auto-fill, 200px)"},children:[(0,jsx_runtime.jsx)(ShadowSwatch,{color:"default",size:args.size,children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"Default"})}),(0,jsx_runtime.jsx)(ShadowSwatch,{color:"primary",size:args.size,style:{backgroundColor:"var(--color-primary-default)",color:"var(--color-primary-inverse)"},children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"Primary"})}),(0,jsx_runtime.jsx)(ShadowSwatch,{color:"error",size:args.size,style:{backgroundColor:"var(--color-error-default)",color:"var(--color-error-inverse)"},children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"Error/Danger"})})]});Color.displayName="Color";const ExampleUsage=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"32px",gridTemplateColumns:"repeat(auto-fill, 200px)",marginBottom:"64px"},children:[(0,jsx_runtime.jsx)(ShadowSwatch,{style:{boxShadow:"var(--shadow-size-xs) var(--color-shadow-default)"},children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"Card"})}),(0,jsx_runtime.jsx)(ShadowSwatch,{style:{boxShadow:"var(--shadow-size-sm) var(--color-shadow-default)"},children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"Dropdown"})}),(0,jsx_runtime.jsx)(ShadowSwatch,{style:{boxShadow:"var(--shadow-size-md) var(--color-shadow-default)"},children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"Toast"})}),(0,jsx_runtime.jsx)(ShadowSwatch,{style:{boxShadow:"var(--shadow-size-lg) var(--color-shadow-default)"},children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"Modal"})})]}),(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gap:"32px",gridTemplateColumns:"repeat(auto-fill, 200px)"},children:[(0,jsx_runtime.jsx)(ShadowSwatch,{style:{boxShadow:"var(--component-button-primary-shadow)",backgroundColor:"var(--color-primary-default)",color:"var(--color-primary-inverse)"},children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"Button Primary Hover"})}),(0,jsx_runtime.jsx)(ShadowSwatch,{style:{boxShadow:"var(--component-button-danger-shadow)",backgroundColor:"var(--color-error-default)",color:"var(--color-error-inverse)"},children:(0,jsx_runtime.jsx)(components.xv,{as:"p",style:{margin:0},children:"Button Error/Danger Hover"})})]})]});ExampleUsage.displayName="ExampleUsage",Shadow.parameters={...Shadow.parameters,docs:{...Shadow.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    display: 'grid',\n    gap: '32px',\n    gridTemplateColumns: 'repeat(auto-fill, 200px)'\n  }}>\n      <ShadowSwatch {...args}>\n        <Text as=\"p\" style={{\n        margin: 0\n      }}>\n          Shadow\n        </Text>\n      </ShadowSwatch>\n    </div>;\n}",...Shadow.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'args => {\n  return <div style={{\n    display: \'grid\',\n    gap: \'32px\',\n    gridTemplateColumns: \'repeat(auto-fill, 200px)\'\n  }}>\n      <ShadowSwatch color={args.color} size="xs">\n        <Text as="p" style={{\n        margin: 0\n      }}>\n          XS\n        </Text>\n      </ShadowSwatch>\n      <ShadowSwatch color={args.color} size="sm">\n        <Text as="p" style={{\n        margin: 0\n      }}>\n          SM\n        </Text>\n      </ShadowSwatch>\n      <ShadowSwatch color={args.color} size="md">\n        <Text as="p" style={{\n        margin: 0\n      }}>\n          MD\n        </Text>\n      </ShadowSwatch>\n      <ShadowSwatch color={args.color} size="lg">\n        <Text as="p" style={{\n        margin: 0\n      }}>\n          LG\n        </Text>\n      </ShadowSwatch>\n    </div>;\n}',...Size.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    display: 'grid',\n    gap: '32px',\n    gridTemplateColumns: 'repeat(auto-fill, 200px)'\n  }}>\n      <ShadowSwatch color=\"default\" size={args.size}>\n        <Text as=\"p\" style={{\n        margin: 0\n      }}>\n          Default\n        </Text>\n      </ShadowSwatch>\n      <ShadowSwatch color=\"primary\" size={args.size} style={{\n      backgroundColor: 'var(--color-primary-default)',\n      color: 'var(--color-primary-inverse)'\n    }}>\n        <Text as=\"p\" style={{\n        margin: 0\n      }}>\n          Primary\n        </Text>\n      </ShadowSwatch>\n      <ShadowSwatch color=\"error\" size={args.size} style={{\n      backgroundColor: 'var(--color-error-default)',\n      color: 'var(--color-error-inverse)'\n    }}>\n        <Text as=\"p\" style={{\n        margin: 0\n      }}>\n          Error/Danger\n        </Text>\n      </ShadowSwatch>\n    </div>;\n}",...Color.parameters?.docs?.source}}},ExampleUsage.parameters={...ExampleUsage.parameters,docs:{...ExampleUsage.parameters?.docs,source:{originalSource:"() => {\n  return <div>\n      <div style={{\n      display: 'grid',\n      gap: '32px',\n      gridTemplateColumns: 'repeat(auto-fill, 200px)',\n      marginBottom: '64px'\n    }}>\n        <ShadowSwatch style={{\n        boxShadow: 'var(--shadow-size-xs) var(--color-shadow-default)'\n      }}>\n          <Text as=\"p\" style={{\n          margin: 0\n        }}>\n            Card\n          </Text>\n        </ShadowSwatch>\n        <ShadowSwatch style={{\n        boxShadow: 'var(--shadow-size-sm) var(--color-shadow-default)'\n      }}>\n          <Text as=\"p\" style={{\n          margin: 0\n        }}>\n            Dropdown\n          </Text>\n        </ShadowSwatch>\n        <ShadowSwatch style={{\n        boxShadow: 'var(--shadow-size-md) var(--color-shadow-default)'\n      }}>\n          <Text as=\"p\" style={{\n          margin: 0\n        }}>\n            Toast\n          </Text>\n        </ShadowSwatch>\n        <ShadowSwatch style={{\n        boxShadow: 'var(--shadow-size-lg) var(--color-shadow-default)'\n      }}>\n          <Text as=\"p\" style={{\n          margin: 0\n        }}>\n            Modal\n          </Text>\n        </ShadowSwatch>\n      </div>\n      <div style={{\n      display: 'grid',\n      gap: '32px',\n      gridTemplateColumns: 'repeat(auto-fill, 200px)'\n    }}>\n        <ShadowSwatch style={{\n        boxShadow: 'var(--component-button-primary-shadow)',\n        backgroundColor: 'var(--color-primary-default)',\n        color: 'var(--color-primary-inverse)'\n      }}>\n          <Text as=\"p\" style={{\n          margin: 0\n        }}>\n            Button Primary Hover\n          </Text>\n        </ShadowSwatch>\n        <ShadowSwatch style={{\n        boxShadow: 'var(--component-button-danger-shadow)',\n        backgroundColor: 'var(--color-error-default)',\n        color: 'var(--color-error-inverse)'\n      }}>\n          <Text as=\"p\" style={{\n          margin: 0\n        }}>\n            Button Error/Danger Hover\n          </Text>\n        </ShadowSwatch>\n      </div>\n    </div>;\n}",...ExampleUsage.parameters?.docs?.source}}};const __namedExportsOrder=["Shadow","Size","Color","ExampleUsage"];try{Shadow.displayName="Shadow",Shadow.__docgenInfo={description:"",displayName:"Shadow",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/Shadows.stories.tsx#Shadow"]={docgenInfo:Shadow.__docgenInfo,name:"Shadow",path:"docs/Shadows.stories.tsx#Shadow"})}catch(__react_docgen_typescript_loader_error){}try{Size.displayName="Size",Size.__docgenInfo={description:"",displayName:"Size",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/Shadows.stories.tsx#Size"]={docgenInfo:Size.__docgenInfo,name:"Size",path:"docs/Shadows.stories.tsx#Size"})}catch(__react_docgen_typescript_loader_error){}try{Color.displayName="Color",Color.__docgenInfo={description:"",displayName:"Color",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/Shadows.stories.tsx#Color"]={docgenInfo:Color.__docgenInfo,name:"Color",path:"docs/Shadows.stories.tsx#Color"})}catch(__react_docgen_typescript_loader_error){}}}]);