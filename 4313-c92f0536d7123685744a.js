"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[4313],{4313:(n,e,t)=>{t.r(e),t.d(e,{default:()=>c});var r=t(87462),o=t(44925),a=(t(67294),t(81254)),s=["components"],i={};function l(n){var e=n.components,t=(0,o.Z)(n,s);return(0,a.mdx)("wrapper",(0,r.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ts"},'class Student {\n  fullName: string;\n  constructor(public firstName: string, public middleInitial: string, public lastName: string) {\n      this.fullName = firstName + " " + middleInitial + " " + lastName;\n  }\n}\n\ninterface Person {\n  firstName: string;\n  lastName: string;\n}\n\nfunction greeter(person: Person) {\n  return "Hello, " + person.firstName + " " + person.lastName;\n}\n\nlet user = new Student("Jane", "M.", "User");\n\ndocument.body.textContent = greeter(user);\n\n')))}l.isMDXComponent=!0;var p=["components"],u={};function c(n){var e=n.components,t=(0,o.Z)(n,p);return(0,a.mdx)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)(l,{mdxType:"Ts"}))}c.isMDXComponent=!0},87462:(n,e,t)=>{function r(){return r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},r.apply(this,arguments)}t.d(e,{Z:()=>r})},44925:(n,e,t)=>{function r(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}t.d(e,{Z:()=>r})}}]);