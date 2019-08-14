!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PWA=t():e.PWA=t()}(this,function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);t.default=function(e,t=i){class r{static register(){o.isSupportedServiceWorker()&&window.addEventListener("load",()=>{navigator.serviceWorker.register(e.sw.filepath).then(e=>{console.log("PWA: Service Worker ready!"),e.update()}).catch(e=>{console.error("PWA: Service Worker registration failed with "+e)})})}static getRegistration(e){o.isSupportedServiceWorker()&&navigator.serviceWorker.getRegistration().then(t=>{e(t)}).catch(e=>{console.error("PWA: Service Worker don't registered: "+e)})}}class i{static show(e,t,i){this.isGranted()&&r.getRegistration(r=>{r?(r.showNotification(e,t),i(!0)):i(!1)})}static isDefault(){return"default"==this.getPermission()&&(console.log("PWA: Permission for Notifications are with default status."),!0)}static isGranted(){return"granted"==this.getPermission()&&(console.log("PWA: Permission for Notifications was granted!"),!0)}static isBlocked(){return"blocked"==this.getPermission()&&(console.warn("PWA: Permission for Notifications was blocked."),!0)}static isDenied(){return"denied"==this.getPermission()&&(console.warn("PWA: Permission for Notifications was denied."),!0)}static requestPermission(e){o.isSupportedNotification()&&t.requestPermission(t=>{console.log("PWA: Notification permission status:",t),e(t)})}static getPermission(){return o.isSupportedNotification()?t.permission:null}}class o{static isSupportedServiceWorker(){return"serviceWorker"in navigator||(console.error("PWA: This browser does not support service workers."),!1)}static isSupportedNotification(){return!!("Notification"in window&&navigator.serviceWorker)||(console.error("PWA: This browser does not support Notifications."),!1)}static isOffline(){return!navigator.onLine}static clearCache(){"caches"in window?(caches.keys().then(e=>{for(let t of e)caches.delete(t)}),console.log("PWA: Cache cleared!")):console.error("PWA: This browser does not support Caches API.")}}class s{static send(e,t,r){return fetch(e,{method:t,body:r})}static sendSubscription(t,r){const i=t.getKey("p256dh"),o=t.getKey("auth"),s=(PushManager.supportedContentEncodings||["aesgcm"])[0];return this.send(e.push.server.endpoint,r,JSON.stringify({endpoint:t.endpoint,publicKey:i?btoa(String.fromCharCode.apply(null,new Uint8Array(i))):null,authToken:o?btoa(String.fromCharCode.apply(null,new Uint8Array(o))):null,contentEncoding:s}))}}class n{static urlBase64ToUint8Array(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),r=window.atob(t),i=new Uint8Array(r.length);for(var o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}}return{ServiceWorker:r,Notification:i,Push:class{static subscribe(t){o.isSupportedServiceWorker()&&r.getRegistration(r=>{r&&r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:n.urlBase64ToUint8Array(e.push.server.public_key)}).then(e=>{console.log("PWA: Subscribed to push service!"),s.sendSubscription(e,"POST"),t(e)}).catch(e=>{i.isDenied()||console.error("PWA: Unable to subscribe to Push",e)})})}static unsubscribe(e){this.getSubscription(t=>{t?(s.sendSubscription(t,"DELETE"),t.unsubscribe(),console.log("PWA: Unsubscribed to push service!"),e(!0)):e(!1)})}static updateSubscription(e){this.getSubscription(t=>{t?(s.sendSubscription(t,"PUT"),console.log("PWA: Update the subscription to push service!"),e(!0)):e(!1)})}static getSubscription(e){o.isSupportedServiceWorker()&&r.getRegistration(t=>{t&&t.pushManager.getSubscription().then(t=>{null===t?(console.error("PWA: Not subscribed to push service!"),e(null)):e(t)})})}},Navigator:o,Server:s,Helper:n}}(PWA_CONFIG,Notification)}]).default});