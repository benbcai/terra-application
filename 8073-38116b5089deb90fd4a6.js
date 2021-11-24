"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[8073],{40996:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(67294)),r=c(a(45697)),l=c(a(47166)),o=c(a(50026)),i=c(a(66983)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=l.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:r.default.string},h=function(e){var t=e.children,a=s(e,u),r=n.default.useContext(o.default),i=(0,l.default)(m(["button",r.className]),a.className);return n.default.createElement("button",d({},a,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};h.propTypes=_;var b=h;t.default=b},59278:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(45697)),l=u(a(47166)),o=u(a(50026)),i=u(a(30866));function u(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(i.default),d={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important"])},s=function(e){var t=e.ariaLevel,a=e.variant,r=e.children,l=n.default.useContext(o.default);return n.default.createElement("div",{className:c("notice",a,l.className)},n.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"error"}(a))),n.default.createElement("div",{className:c("children")},n.default.Children.map(r,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};var m=s;t.default=m},47306:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(67294)),r=d(a(45697)),l=d(a(94184)),o=d(a(47166)),i=d(a(50026)),u=d(a(42620)),c=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.default.bind(u.default),f={title:r.default.string},_=function(e){var t=e.title,a=m(e,c),r=n.default.useContext(i.default),o=(0,l.default)(p(["placeholder",r.className]),a.className),u=p(["inner"]);return n.default.createElement("div",s({},a,{className:o}),n.default.createElement("div",{className:u},n.default.createElement("p",{className:p("title")},t)))};_.propTypes=f,_.defaultProps={title:""};var h=_;t.default=h},34261:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}});var n=o(a(59278)),r=o(a(47306)),l=o(a(40996));function o(e){return e&&e.__esModule?e:{default:e}}},48073:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(87462),r=a(44925),l=(a(67294),a(81254)),o=a(34261),i=["components"],u={};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.mdx)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"polyfills"},"Polyfills"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/application"},"terra-application")," package requires polyfills to function in some of its supported browsers. We recommend using the ",(0,l.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/@cerner/terra-polyfill"},"terra-polyfill")," package to ensure the minimum requirements are met for a project."),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import '@cerner/terra-polyfill';\n")),(0,l.mdx)(o.Notice,{variant:"caution",ariaLevel:"3",mdxType:"Notice"},"The polyfill should be imported only once for an application. Duplication may lead to increased bundle sizes and decreased performance of an application."),(0,l.mdx)(o.Notice,{ariaLevel:"3",mdxType:"Notice"},"The polyfill should be imported as early as possible in an application's lifecycle to ensure that the polyfilled features are available when they are needed."),(0,l.mdx)("h2",{id:"included-polyfills"},"Included Polyfills"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/zloirock/core-js"},(0,l.mdx)("inlineCode",{parentName:"a"},"core-js"))," - Includes polyfills for ECMAScript up to 2021: promises, symbols, collections, iterators, typed arrays, many other features",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Only stable features are included by default. Any ES features under proposal will require additional polyfills if they are used."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/regenerator-runtime"},(0,l.mdx)("inlineCode",{parentName:"a"},"regenerator-runtime"))," - Standalone runtime for Regenerator-compiled generator and async functions"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/whatwg-fetch"},"'whatwg-fetch'")," - A window.fetch polyfill"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/abortcontroller-polyfill"},"'abortcontroller-polyfill'")," - An AbortController polyfill"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/mutationobserver-shim/v/0.3.3"},"'mutationobserver-shim'")," - A polyfill for the MutationObserver API"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/wicg-inert"},"HTMLElement.inert")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/contains"},"Node.contains")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/matches"},"Element.matches")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"Intl"))),(0,l.mdx)("h3",{id:"filtering-core-js-with-babel"},"Filtering ",(0,l.mdx)("inlineCode",{parentName:"h3"},"core-js")," with Babel"),(0,l.mdx)("p",null,"The set of polyfills included by core-js an be customized by modifying the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@babel/preset-env")," configuration. See ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/zloirock/core-js#babelpreset-env"},"core-js documentation")," for more details."),(0,l.mdx)("p",null,"For example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-diff"},"module.exports = (api) => {\n  api.cache(false);\n  api.assertVersion('^7.4.4');\n\n  return {\n    presets: [\n-     '@babel/preset-env',\n+     ['@babel/preset-env', { useBuiltIns: 'entry', corejs: { version: 3.14 } }], // version should match core-js dependency version\n      '@babel/preset-react',\n    ],\n  };\n};\n")))}c.isMDXComponent=!0},66983:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",title:"Notice-module__title___6H5tc",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",accessory:"Notice-module__accessory___wkLOG",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm"}},42620:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},87462:(e,t,a)=>{function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{Z:()=>n})},44925:(e,t,a)=>{function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:()=>n})}}]);