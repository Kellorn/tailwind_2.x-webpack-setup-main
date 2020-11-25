(()=>{var e,r,t,n,o,i,c,a={536:(e,r,t)=>{"use strict";t(626),t(750),t(44)},626:e=>{e.exports='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"/> <meta name="viewport" content="width=device-width,initial-scale=1"/> <title>TailwindCSS 2.x - webpack - setup</title> </head> <body> <h1 class="text-3xl bg-red-500 text-center">Tailwind css Setup</h1> <div class="heading">Hello world</div> </body> </html> '},750:e=>{e.exports='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"/> <meta name="viewport" content="width=device-width,initial-scale=1"/> <title>Frontendfunn - Tailwindcss2.x Webpack Setup</title> </head> <body> <h1 class="bg-red-100 text-center"> Frontendfunn - Tailwindcss2.x Webpack Setup </h1> <p>This is a Sample Page included for reference</p> </body> </html> '},783:(e,r,t)=>{"use strict";var n=t(618),o=Object.create(null),i="undefined"==typeof document,c=Array.prototype.forEach;function a(){}function d(e,r){if(!r){if(!e.href)return;r=e.href.split("?")[0]}if(s(r)&&!1!==e.isLoaded&&r&&r.indexOf(".css")>-1){e.visited=!0;var t=e.cloneNode();t.isLoaded=!1,t.addEventListener("load",(function(){t.isLoaded=!0,e.parentNode.removeChild(e)})),t.addEventListener("error",(function(){t.isLoaded=!0,e.parentNode.removeChild(e)})),t.href="".concat(r,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}}function l(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&d(e)}))}function s(e){return!!/^https?:/i.test(e)}e.exports=function(e,r){if(i)return console.log("no window.document found, will not HMR CSS"),a;var t,u,p=function(e){var r=o[e];if(!r){if(document.currentScript)r=document.currentScript.src;else{var t=document.getElementsByTagName("script"),i=t[t.length-1];i&&(r=i.src)}o[e]=r}return function(e){if(!r)return null;var t=r.split(/([^\\/]+)\.js$/),o=t&&t[1];return o&&e?e.split(",").map((function(e){var t=new RegExp("".concat(o,"\\.js$"),"g");return n(r.replace(t,"".concat(e.replace(/{fileName}/g,o),".css")))})):[r.replace(".js",".css")]}}(e);return t=function(){var e=p(r.filename),t=function(e){if(!e)return!1;var r=document.querySelectorAll("link"),t=!1;return c.call(r,(function(r){if(r.href){var o=function(e,r){var t;return e=n(e,{stripWWW:!1}),r.some((function(n){e.indexOf(r)>-1&&(t=n)})),t}(r.href,e);s(o)&&!0!==r.visited&&o&&(d(r,o),t=!0)}})),t}(e);if(r.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void l();t?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),l())},50,u=0,function(){var e=this,r=arguments,n=function(){return t.apply(e,r)};clearTimeout(u),u=setTimeout(n,50)}}},618:e=>{"use strict";e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var r=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",t=e.replace(new RegExp(r,"i"),"").split("/"),n=t[0].toLowerCase().replace(/\.$/,"");return t[0]="",r+n+t.reduce((function(e,r){switch(r){case"..":e.pop();break;case".":break;default:e.push(r)}return e}),[]).join("/")}},44:(e,r,t)=>{"use strict";var n=t(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)}},d={};function l(e){if(d[e])return d[e].exports;var r=d[e]={id:e,exports:{}},t={id:e,module:r,factory:a[e],require:l};return l.i.forEach((function(e){e(t)})),r=t.module,t.factory.call(r.exports,r,r.exports,t.require),r.exports}l.m=a,l.c=d,l.i=[],l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.hu=e=>e+"."+l.h()+".hot-update.js",l.miniCssF=e=>"css/style.css",l.hmrF=()=>l.h()+".hot-update.json",l.h=()=>"e4c58d54eab09e9e8ed5",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="tailwind_2.x-webpack-setup:",l.l=(t,n,o)=>{if(e[t])e[t].push(n);else{var i,c;if(void 0!==o)for(var a=document.getElementsByTagName("script"),d=0;d<a.length;d++){var s=a[d];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){i=s;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var u=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),c&&document.head.appendChild(i)}},(()=>{var e,r,t,n,o={},i=l.c,c=[],a=[],d="idle";function s(e){d=e;for(var r=0;r<a.length;r++)a[r].call(null,e)}function u(e){if(0===r.length)return e();var t=r;return r=[],Promise.all(t).then((function(){return u(e)}))}function p(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return s("check"),l.hmrM().then((function(n){if(!n)return s(v()?"ready":"idle"),null;s("prepare");var o=[];return r=[],t=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,r){return l.hmrC[r](n.c,n.r,n.m,e,t,o),e}),[])).then((function(){return u((function(){return e?h(e):(s("ready"),o)}))}))}))}function f(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},v();var r=t.map((function(r){return r(e)}));t=void 0;var o,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return s("abort"),Promise.resolve().then((function(){throw i[0]}));s("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),s("apply");var c=function(e){o||(o=e)},a=[];return r.forEach((function(e){if(e.apply){var r=e.apply(c);if(r)for(var t=0;t<r.length;t++)a.push(r[t])}})),o?(s("fail"),Promise.resolve().then((function(){throw o}))):n?h(e).then((function(e){return a.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(s("idle"),Promise.resolve(a))}function v(){if(n)return t||(t=[]),Object.keys(l.hmrI).forEach((function(e){n.forEach((function(r){l.hmrI[e](r,t)}))})),n=void 0,!0}l.hmrD=o,l.i.push((function(h){var v,m,g,y=h.module,b=function(t,n){var o=i[n];if(!o)return t;var a=function(r){if(o.hot.active){if(i[r]){var a=i[r].parents;-1===a.indexOf(n)&&a.push(n)}else c=[n],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+n),c=[];return t(r)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var p in t)Object.prototype.hasOwnProperty.call(t,p)&&"e"!==p&&Object.defineProperty(a,p,l(p));return a.e=function(e){return function(e){switch(d){case"ready":return s("prepare"),r.push(e),u((function(){s("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(t.e(e))},a}(h.require,h.id);y.hot=(v=h.id,m=y,g={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==v,_requireSelf:function(){c=m.parents.slice(),e=v,l(v)},active:!0,accept:function(e,r){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){};else g._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":t=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](v,t)})),s("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](v,t)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(v)}},check:p,apply:f,status:function(e){if(!e)return d;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:o[v]},e=void 0,g),y.parents=c,y.children=[],c=[],h.require=b})),l.hmrC={},l.hmrI={}})(),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var r=l.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e+"../"})(),t=(e,r,t,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)t();else{var c=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=c,d.request=a,o.parentNode.removeChild(o),n(d)}},o.href=r,document.head.appendChild(o),o},n=(e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(c=t[n]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===r))return c}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var c;if((o=(c=i[n]).getAttribute("data-href"))===e||o===r)return c}},o=[],i=[],c=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),l.hmrC.miniCss=(e,r,a,d,s,u)=>{s.push(c),e.forEach((e=>{var r=l.miniCssF(e),c=l.p+r;const a=n(r,c);a&&d.push(new Promise(((r,n)=>{var d=t(e,c,(()=>{d.as="style",d.rel="preload",r()}),n);o.push(a),i.push(d)})))}))},(()=>{var e,r,t,n,o={826:0},i={};function c(e){return new Promise(((r,t)=>{i[e]=r;var n=l.p+l.hu(e),o=new Error;l.l(n,(r=>{if(i[e]){i[e]=void 0;var n=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+n+": "+c+")",o.name="ChunkLoadError",o.type=n,o.request=c,t(o)}}))}))}function a(i){function c(e){for(var r=[e],t={},n=r.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,c=o.chain,d=l.c[i];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<d.parents.length;s++){var u=d.parents[s],p=l.c[u];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===r.indexOf(u)&&(p.hot._acceptedDependencies[i]?(t[u]||(t[u]=[]),a(t[u],[i])):(delete t[u],r.push(u),n.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function a(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}l.f&&delete l.f.jsonpHmr,e=void 0;var d={},s=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in r)if(l.o(r,f)){var h,v=r[f],m=!1,g=!1,y=!1,b="";switch((h=v?c(f):{type:"disposed",moduleId:f}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(m=new Error("Aborted because "+f+" is not accepted"+b));break;case"accepted":i.onAccepted&&i.onAccepted(h),g=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(g)for(f in u[f]=v,a(s,h.outdatedModules),h.outdatedDependencies)l.o(h.outdatedDependencies,f)&&(d[f]||(d[f]=[]),a(d[f],h.outdatedDependencies[f]));y&&(a(s,[h.moduleId]),u[f]=p)}r=void 0;for(var w,E=[],_=0;_<s.length;_++){var x=s[_];l.c[x]&&l.c[x].hot._selfAccepted&&u[x]!==p&&!l.c[x].hot._selfInvalidated&&E.push({module:x,require:l.c[x].hot._requireSelf,errorHandler:l.c[x].hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete o[e]})),t=void 0;for(var r,n=s.slice();n.length>0;){var i=n.pop(),c=l.c[i];if(c){var a={},u=c.hot._disposeHandlers;for(_=0;_<u.length;_++)u[_].call(null,a);for(l.hmrD[i]=a,c.hot.active=!1,delete l.c[i],delete d[i],_=0;_<c.children.length;_++){var p=l.c[c.children[_]];p&&(e=p.parents.indexOf(i))>=0&&p.parents.splice(e,1)}}}for(var f in d)if(l.o(d,f)&&(c=l.c[f]))for(w=d[f],_=0;_<w.length;_++)r=w[_],(e=c.children.indexOf(r))>=0&&c.children.splice(e,1)},apply:function(e){for(var r in u)l.o(u,r)&&(l.m[r]=u[r]);for(var t=0;t<n.length;t++)n[t](l);for(var o in d)if(l.o(d,o)){var c=l.c[o];if(c){w=d[o];for(var a=[],p=[],f=0;f<w.length;f++){var h=w[f],v=c.hot._acceptedDependencies[h];if(v){if(-1!==a.indexOf(v))continue;a.push(v),p.push(h)}}for(var m=0;m<a.length;m++)try{a[m].call(null,w)}catch(r){i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:p[m],error:r}),i.ignoreErrored||e(r)}}}for(var g=0;g<E.length;g++){var y=E[g],b=y.module;try{y.require(b)}catch(r){if("function"==typeof y.errorHandler)try{y.errorHandler(r)}catch(t){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:b,error:t,originalError:r}),i.ignoreErrored||e(t),e(r)}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:b,error:r}),i.ignoreErrored||e(r)}}return s}}}self.webpackHotUpdatetailwind_2_x_webpack_setup=(e,t,o)=>{for(var c in t)l.o(t,c)&&(r[c]=t[c]);o&&n.push(o),i[e]&&(i[e](),i[e]=void 0)},l.hmrI.jsonp=function(e,o){r||(r={},n=[],t=[],o.push(a)),l.o(r,e)||(r[e]=l.m[e])},l.hmrC.jsonp=function(i,d,s,u,p,f){p.push(a),e={},t=d,r=s.reduce((function(e,r){return e[r]=!1,e}),{}),n=[],i.forEach((function(r){l.o(o,r)&&void 0!==o[r]&&(u.push(c(r)),e[r]=!0)})),l.f&&(l.f.jsonpHmr=function(r,t){e&&!l.o(e,r)&&l.o(o,r)&&void 0!==o[r]&&(t.push(c(r)),e[r]=!0)})},l.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),l(536)})();