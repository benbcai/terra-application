"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[3472],{73472:(t,e,n)=>{var u=n(95318),a=n(50008);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n(63038)),r=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!=typeof t)return{default:t};var n=c(e);if(n&&n.has(t))return n.get(t);var u={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if("default"!==r&&Object.prototype.hasOwnProperty.call(t,r)){var i=o?Object.getOwnPropertyDescriptor(t,r):null;i&&(i.get||i.set)?Object.defineProperty(u,r,i):u[r]=t[r]}u.default=t,n&&n.set(t,u);return u}(n(67294)),i=u(n(24536)),l=u(n(30187));function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(c=function(t){return t?n:e})(t)}var f=function(){var t=(0,r.useState)(),e=(0,o.default)(t,2),n=e[0],u=e[1],a=(0,r.useState)(!1),c=(0,o.default)(a,2),f=c[0],d=c[1];return r.default.createElement(r.default.Fragment,null,r.default.createElement("button",{id:"reset-button",type:"button",onClick:function(){d(!1)}},"Reset"),r.default.createElement("button",{id:"no-data-button",type:"button",onClick:function(){d(!0),u("no-data")}},"Show No Data Status View"),r.default.createElement("button",{id:"error-button",type:"button",onClick:function(){d(!0),u("error")}},"Show Error Status View"),r.default.createElement("button",{id:"no-matching-results-button",type:"button",onClick:function(){d(!0),u("no-matching-results")}},"Show No Matching Results Status View"),r.default.createElement("button",{id:"not-authorized-button",type:"button",onClick:function(){d(!0),u("not-authorized")}},"Show Not Authorized Status View"),r.default.createElement(l.default,{id:"test-status-view-container"},f&&r.default.createElement(i.default,{variant:n})))};e.default=f}}]);