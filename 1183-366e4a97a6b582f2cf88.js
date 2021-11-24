"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[1183],{71183:(n,e,r)=>{r.r(e),r.d(e,{default:()=>l});var t=r(87462),o=r(44925),a=(r(67294),r(81254)),i=["components"],p={};function l(n){var e=n.components,r=(0,o.Z)(n,i);return(0,a.mdx)("wrapper",(0,t.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"scss"},"scss"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},'@import "compass/reset";\n\n// variables\n$colorGreen: #008000;\n$colorGreenDark: darken($colorGreen, 10);\n\ndiv,\n.navbar,\n#header,\ninput[type="input"] {\n    font-family: "Helvetica Neue", Arial, sans-serif;\n    width: auto;\n    margin: 0 auto;\n    display: block;\n    &:hover { color: $colorGreenDark; }\n    .home {\n          background: url(\'http://placehold.it/20\') scroll no-repeat 0 0;\n    }\n    padding: {\n        left: 5px; right: 5px;\n    }\n}\n\n@for $i from 1 through 5 {\n    .span#{$i} {\n        width: 20px*$i;\n    }\n}\n\n@mixin mobile {\n  @media screen and (max-width : 600px) {\n    @content;\n  }\n}\n')))}l.isMDXComponent=!0},87462:(n,e,r)=>{function t(){return t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},t.apply(this,arguments)}r.d(e,{Z:()=>t})},44925:(n,e,r)=>{function t(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}r.d(e,{Z:()=>t})}}]);