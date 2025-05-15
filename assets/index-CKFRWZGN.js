function Pp(l,r){for(var s=0;s<r.length;s++){const c=r[s];if(typeof c!="string"&&!Array.isArray(c)){for(const f in c)if(f!=="default"&&!(f in l)){const d=Object.getOwnPropertyDescriptor(c,f);d&&Object.defineProperty(l,f,d.get?d:{enumerable:!0,get:()=>c[f]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function s(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(f){if(f.ep)return;f.ep=!0;const d=s(f);fetch(f.href,d)}})();function vh(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Gs={exports:{}},vi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1;function Ip(){if(l1)return vi;l1=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(c,f,d){var h=null;if(d!==void 0&&(h=""+d),f.key!==void 0&&(h=""+f.key),"key"in f){d={};for(var g in f)g!=="key"&&(d[g]=f[g])}else d=f;return f=d.ref,{$$typeof:l,type:c,key:h,ref:f!==void 0?f:null,props:d}}return vi.Fragment=r,vi.jsx=s,vi.jsxs=s,vi}var i1;function ph(){return i1||(i1=1,Gs.exports=Ip()),Gs.exports}var E=ph(),Vs={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function tg(){if(r1)return rt;r1=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),z=Symbol.iterator;function D(b){return b===null||typeof b!="object"?null:(b=z&&b[z]||b["@@iterator"],typeof b=="function"?b:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function N(b,H,K){this.props=b,this.context=H,this.refs=q,this.updater=K||G}N.prototype.isReactComponent={},N.prototype.setState=function(b,H){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,H,"setState")},N.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function k(){}k.prototype=N.prototype;function L(b,H,K){this.props=b,this.context=H,this.refs=q,this.updater=K||G}var V=L.prototype=new k;V.constructor=L,B(V,N.prototype),V.isPureReactComponent=!0;var et=Array.isArray,R={H:null,A:null,T:null,S:null,V:null},lt=Object.prototype.hasOwnProperty;function W(b,H,K,Z,I,vt){return K=vt.ref,{$$typeof:l,type:b,key:H,ref:K!==void 0?K:null,props:vt}}function ht(b,H){return W(b.type,H,void 0,void 0,void 0,b.props)}function Lt(b){return typeof b=="object"&&b!==null&&b.$$typeof===l}function ae(b){var H={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(K){return H[K]})}var se=/\/+/g;function Ut(b,H){return typeof b=="object"&&b!==null&&b.key!=null?ae(""+b.key):H.toString(36)}function pe(){}function fe(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(pe,pe):(b.status="pending",b.then(function(H){b.status==="pending"&&(b.status="fulfilled",b.value=H)},function(H){b.status==="pending"&&(b.status="rejected",b.reason=H)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function jt(b,H,K,Z,I){var vt=typeof b;(vt==="undefined"||vt==="boolean")&&(b=null);var it=!1;if(b===null)it=!0;else switch(vt){case"bigint":case"string":case"number":it=!0;break;case"object":switch(b.$$typeof){case l:case r:it=!0;break;case S:return it=b._init,jt(it(b._payload),H,K,Z,I)}}if(it)return I=I(b),it=Z===""?"."+Ut(b,0):Z,et(I)?(K="",it!=null&&(K=it.replace(se,"$&/")+"/"),jt(I,H,K,"",function(Sa){return Sa})):I!=null&&(Lt(I)&&(I=ht(I,K+(I.key==null||b&&b.key===I.key?"":(""+I.key).replace(se,"$&/")+"/")+it)),H.push(I)),1;it=0;var ge=Z===""?".":Z+":";if(et(b))for(var Ct=0;Ct<b.length;Ct++)Z=b[Ct],vt=ge+Ut(Z,Ct),it+=jt(Z,H,K,vt,I);else if(Ct=D(b),typeof Ct=="function")for(b=Ct.call(b),Ct=0;!(Z=b.next()).done;)Z=Z.value,vt=ge+Ut(Z,Ct++),it+=jt(Z,H,K,vt,I);else if(vt==="object"){if(typeof b.then=="function")return jt(fe(b),H,K,Z,I);throw H=String(b),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return it}function j(b,H,K){if(b==null)return b;var Z=[],I=0;return jt(b,Z,"","",function(vt){return H.call(K,vt,I++)}),Z}function Q(b){if(b._status===-1){var H=b._result;H=H(),H.then(function(K){(b._status===0||b._status===-1)&&(b._status=1,b._result=K)},function(K){(b._status===0||b._status===-1)&&(b._status=2,b._result=K)}),b._status===-1&&(b._status=0,b._result=H)}if(b._status===1)return b._result.default;throw b._result}var P=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function yt(){}return rt.Children={map:j,forEach:function(b,H,K){j(b,function(){H.apply(this,arguments)},K)},count:function(b){var H=0;return j(b,function(){H++}),H},toArray:function(b){return j(b,function(H){return H})||[]},only:function(b){if(!Lt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},rt.Component=N,rt.Fragment=s,rt.Profiler=f,rt.PureComponent=L,rt.StrictMode=c,rt.Suspense=v,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,rt.__COMPILER_RUNTIME={__proto__:null,c:function(b){return R.H.useMemoCache(b)}},rt.cache=function(b){return function(){return b.apply(null,arguments)}},rt.cloneElement=function(b,H,K){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Z=B({},b.props),I=b.key,vt=void 0;if(H!=null)for(it in H.ref!==void 0&&(vt=void 0),H.key!==void 0&&(I=""+H.key),H)!lt.call(H,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&H.ref===void 0||(Z[it]=H[it]);var it=arguments.length-2;if(it===1)Z.children=K;else if(1<it){for(var ge=Array(it),Ct=0;Ct<it;Ct++)ge[Ct]=arguments[Ct+2];Z.children=ge}return W(b.type,I,void 0,void 0,vt,Z)},rt.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:d,_context:b},b},rt.createElement=function(b,H,K){var Z,I={},vt=null;if(H!=null)for(Z in H.key!==void 0&&(vt=""+H.key),H)lt.call(H,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(I[Z]=H[Z]);var it=arguments.length-2;if(it===1)I.children=K;else if(1<it){for(var ge=Array(it),Ct=0;Ct<it;Ct++)ge[Ct]=arguments[Ct+2];I.children=ge}if(b&&b.defaultProps)for(Z in it=b.defaultProps,it)I[Z]===void 0&&(I[Z]=it[Z]);return W(b,vt,void 0,void 0,null,I)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(b){return{$$typeof:g,render:b}},rt.isValidElement=Lt,rt.lazy=function(b){return{$$typeof:S,_payload:{_status:-1,_result:b},_init:Q}},rt.memo=function(b,H){return{$$typeof:y,type:b,compare:H===void 0?null:H}},rt.startTransition=function(b){var H=R.T,K={};R.T=K;try{var Z=b(),I=R.S;I!==null&&I(K,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(yt,P)}catch(vt){P(vt)}finally{R.T=H}},rt.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},rt.use=function(b){return R.H.use(b)},rt.useActionState=function(b,H,K){return R.H.useActionState(b,H,K)},rt.useCallback=function(b,H){return R.H.useCallback(b,H)},rt.useContext=function(b){return R.H.useContext(b)},rt.useDebugValue=function(){},rt.useDeferredValue=function(b,H){return R.H.useDeferredValue(b,H)},rt.useEffect=function(b,H,K){var Z=R.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(b,H)},rt.useId=function(){return R.H.useId()},rt.useImperativeHandle=function(b,H,K){return R.H.useImperativeHandle(b,H,K)},rt.useInsertionEffect=function(b,H){return R.H.useInsertionEffect(b,H)},rt.useLayoutEffect=function(b,H){return R.H.useLayoutEffect(b,H)},rt.useMemo=function(b,H){return R.H.useMemo(b,H)},rt.useOptimistic=function(b,H){return R.H.useOptimistic(b,H)},rt.useReducer=function(b,H,K){return R.H.useReducer(b,H,K)},rt.useRef=function(b){return R.H.useRef(b)},rt.useState=function(b){return R.H.useState(b)},rt.useSyncExternalStore=function(b,H,K){return R.H.useSyncExternalStore(b,H,K)},rt.useTransition=function(){return R.H.useTransition()},rt.version="19.1.0",rt}var u1;function pu(){return u1||(u1=1,Vs.exports=tg()),Vs.exports}var mt=pu();const ta=vh(mt),c1=Pp({__proto__:null,default:ta},[mt]);var Qs={exports:{}},pi={},Zs={exports:{}},ks={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function eg(){return s1||(s1=1,function(l){function r(j,Q){var P=j.length;j.push(Q);t:for(;0<P;){var yt=P-1>>>1,b=j[yt];if(0<f(b,Q))j[yt]=Q,j[P]=b,P=yt;else break t}}function s(j){return j.length===0?null:j[0]}function c(j){if(j.length===0)return null;var Q=j[0],P=j.pop();if(P!==Q){j[0]=P;t:for(var yt=0,b=j.length,H=b>>>1;yt<H;){var K=2*(yt+1)-1,Z=j[K],I=K+1,vt=j[I];if(0>f(Z,P))I<b&&0>f(vt,Z)?(j[yt]=vt,j[I]=P,yt=I):(j[yt]=Z,j[K]=P,yt=K);else if(I<b&&0>f(vt,P))j[yt]=vt,j[I]=P,yt=I;else break t}}return Q}function f(j,Q){var P=j.sortIndex-Q.sortIndex;return P!==0?P:j.id-Q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var h=Date,g=h.now();l.unstable_now=function(){return h.now()-g}}var v=[],y=[],S=1,z=null,D=3,G=!1,B=!1,q=!1,N=!1,k=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function et(j){for(var Q=s(y);Q!==null;){if(Q.callback===null)c(y);else if(Q.startTime<=j)c(y),Q.sortIndex=Q.expirationTime,r(v,Q);else break;Q=s(y)}}function R(j){if(q=!1,et(j),!B)if(s(v)!==null)B=!0,lt||(lt=!0,Ut());else{var Q=s(y);Q!==null&&jt(R,Q.startTime-j)}}var lt=!1,W=-1,ht=5,Lt=-1;function ae(){return N?!0:!(l.unstable_now()-Lt<ht)}function se(){if(N=!1,lt){var j=l.unstable_now();Lt=j;var Q=!0;try{t:{B=!1,q&&(q=!1,L(W),W=-1),G=!0;var P=D;try{e:{for(et(j),z=s(v);z!==null&&!(z.expirationTime>j&&ae());){var yt=z.callback;if(typeof yt=="function"){z.callback=null,D=z.priorityLevel;var b=yt(z.expirationTime<=j);if(j=l.unstable_now(),typeof b=="function"){z.callback=b,et(j),Q=!0;break e}z===s(v)&&c(v),et(j)}else c(v);z=s(v)}if(z!==null)Q=!0;else{var H=s(y);H!==null&&jt(R,H.startTime-j),Q=!1}}break t}finally{z=null,D=P,G=!1}Q=void 0}}finally{Q?Ut():lt=!1}}}var Ut;if(typeof V=="function")Ut=function(){V(se)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,fe=pe.port2;pe.port1.onmessage=se,Ut=function(){fe.postMessage(null)}}else Ut=function(){k(se,0)};function jt(j,Q){W=k(function(){j(l.unstable_now())},Q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(j){j.callback=null},l.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ht=0<j?Math.floor(1e3/j):5},l.unstable_getCurrentPriorityLevel=function(){return D},l.unstable_next=function(j){switch(D){case 1:case 2:case 3:var Q=3;break;default:Q=D}var P=D;D=Q;try{return j()}finally{D=P}},l.unstable_requestPaint=function(){N=!0},l.unstable_runWithPriority=function(j,Q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var P=D;D=j;try{return Q()}finally{D=P}},l.unstable_scheduleCallback=function(j,Q,P){var yt=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?yt+P:yt):P=yt,j){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=P+b,j={id:S++,callback:Q,priorityLevel:j,startTime:P,expirationTime:b,sortIndex:-1},P>yt?(j.sortIndex=P,r(y,j),s(v)===null&&j===s(y)&&(q?(L(W),W=-1):q=!0,jt(R,P-yt))):(j.sortIndex=b,r(v,j),B||G||(B=!0,lt||(lt=!0,Ut()))),j},l.unstable_shouldYield=ae,l.unstable_wrapCallback=function(j){var Q=D;return function(){var P=D;D=Q;try{return j.apply(this,arguments)}finally{D=P}}}}(ks)),ks}var f1;function ag(){return f1||(f1=1,Zs.exports=eg()),Zs.exports}var Ks={exports:{}},ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1;function ng(){if(o1)return ie;o1=1;var l=pu();function r(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)y+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(v,y,S){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:z==null?null:""+z,children:v,containerInfo:y,implementation:S}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ie.createPortal=function(v,y){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return d(v,y,null,S)},ie.flushSync=function(v){var y=h.T,S=c.p;try{if(h.T=null,c.p=2,v)return v()}finally{h.T=y,c.p=S,c.d.f()}},ie.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,c.d.C(v,y))},ie.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},ie.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var S=y.as,z=g(S,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,G=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;S==="style"?c.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:z,integrity:D,fetchPriority:G}):S==="script"&&c.d.X(v,{crossOrigin:z,integrity:D,fetchPriority:G,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ie.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var S=g(y.as,y.crossOrigin);c.d.M(v,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&c.d.M(v)},ie.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var S=y.as,z=g(S,y.crossOrigin);c.d.L(v,S,{crossOrigin:z,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ie.preloadModule=function(v,y){if(typeof v=="string")if(y){var S=g(y.as,y.crossOrigin);c.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else c.d.m(v)},ie.requestFormReset=function(v){c.d.r(v)},ie.unstable_batchedUpdates=function(v,y){return v(y)},ie.useFormState=function(v,y,S){return h.H.useFormState(v,y,S)},ie.useFormStatus=function(){return h.H.useHostTransitionStatus()},ie.version="19.1.0",ie}var d1;function lg(){if(d1)return Ks.exports;d1=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Ks.exports=ng(),Ks.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1;function ig(){if(m1)return pi;m1=1;var l=ag(),r=pu(),s=lg();function c(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(d(t)!==t)throw Error(c(188))}function v(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(c(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var u=i.alternate;if(u===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===a)return g(i),t;if(u===n)return g(i),e;u=u.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=u;else{for(var o=!1,m=i.child;m;){if(m===a){o=!0,a=i,n=u;break}if(m===n){o=!0,n=i,a=u;break}m=m.sibling}if(!o){for(m=u.child;m;){if(m===a){o=!0,a=u,n=i;break}if(m===n){o=!0,n=u,a=i;break}m=m.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?t:e}function y(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=y(t),e!==null)return e;t=t.sibling}return null}var S=Object.assign,z=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),V=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Lt=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function Ut(t){return t===null||typeof t!="object"?null:(t=se&&t[se]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case N:return"Profiler";case q:return"StrictMode";case R:return"Suspense";case lt:return"SuspenseList";case Lt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case G:return"Portal";case V:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case et:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return e=t.displayName||null,e!==null?e:fe(t.type)||"Memo";case ht:e=t._payload,t=t._init;try{return fe(t(e))}catch{}}return null}var jt=Array.isArray,j=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},yt=[],b=-1;function H(t){return{current:t}}function K(t){0>b||(t.current=yt[b],yt[b]=null,b--)}function Z(t,e){b++,yt[b]=t.current,t.current=e}var I=H(null),vt=H(null),it=H(null),ge=H(null);function Ct(t,e){switch(Z(it,e),Z(vt,t),Z(I,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?jm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=jm(e),t=Cm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(I),Z(I,t)}function Sa(){K(I),K(vt),K(it)}function zu(t){t.memoizedState!==null&&Z(ge,t);var e=I.current,a=Cm(e,t.type);e!==a&&(Z(vt,t),Z(I,a))}function qi(t){vt.current===t&&(K(I),K(vt)),ge.current===t&&(K(ge),oi._currentValue=P)}var Mu=Object.prototype.hasOwnProperty,Nu=l.unstable_scheduleCallback,Ru=l.unstable_cancelCallback,Ry=l.unstable_shouldYield,Dy=l.unstable_requestPaint,Ve=l.unstable_now,jy=l.unstable_getCurrentPriorityLevel,oo=l.unstable_ImmediatePriority,mo=l.unstable_UserBlockingPriority,Hi=l.unstable_NormalPriority,Cy=l.unstable_LowPriority,ho=l.unstable_IdlePriority,wy=l.log,Uy=l.unstable_setDisableYieldValue,bl=null,be=null;function xa(t){if(typeof wy=="function"&&Uy(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(bl,t)}catch{}}var Se=Math.clz32?Math.clz32:Yy,qy=Math.log,Hy=Math.LN2;function Yy(t){return t>>>=0,t===0?32:31-(qy(t)/Hy|0)|0}var Yi=256,Li=4194304;function Wa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Bi(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,u=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var m=n&134217727;return m!==0?(n=m&~u,n!==0?i=Wa(n):(o&=m,o!==0?i=Wa(o):a||(a=m&~t,a!==0&&(i=Wa(a))))):(m=n&~u,m!==0?i=Wa(m):o!==0?i=Wa(o):a||(a=n&~t,a!==0&&(i=Wa(a)))),i===0?0:e!==0&&e!==i&&(e&u)===0&&(u=i&-i,a=e&-e,u>=a||u===32&&(a&4194048)!==0)?e:i}function Sl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ly(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yo(){var t=Yi;return Yi<<=1,(Yi&4194048)===0&&(Yi=256),t}function vo(){var t=Li;return Li<<=1,(Li&62914560)===0&&(Li=4194304),t}function Du(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function xl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function By(t,e,a,n,i,u){var o=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var m=t.entanglements,p=t.expirationTimes,T=t.hiddenUpdates;for(a=o&~a;0<a;){var C=31-Se(a),U=1<<C;m[C]=0,p[C]=-1;var _=T[C];if(_!==null)for(T[C]=null,C=0;C<_.length;C++){var M=_[C];M!==null&&(M.lane&=-536870913)}a&=~U}n!==0&&po(t,n,0),u!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=u&~(o&~e))}function po(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-Se(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function go(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-Se(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function ju(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Cu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bo(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:Pm(t.type))}function Xy(t,e){var a=Q.p;try{return Q.p=t,e()}finally{Q.p=a}}var Aa=Math.random().toString(36).slice(2),ne="__reactFiber$"+Aa,oe="__reactProps$"+Aa,An="__reactContainer$"+Aa,wu="__reactEvents$"+Aa,Gy="__reactListeners$"+Aa,Vy="__reactHandles$"+Aa,So="__reactResources$"+Aa,Al="__reactMarker$"+Aa;function Uu(t){delete t[ne],delete t[oe],delete t[wu],delete t[Gy],delete t[Vy]}function En(t){var e=t[ne];if(e)return e;for(var a=t.parentNode;a;){if(e=a[An]||a[ne]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Hm(t);t!==null;){if(a=t[ne])return a;t=Hm(t)}return e}t=a,a=t.parentNode}return null}function On(t){if(t=t[ne]||t[An]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function El(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(c(33))}function Tn(t){var e=t[So];return e||(e=t[So]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jt(t){t[Al]=!0}var xo=new Set,Ao={};function Pa(t,e){_n(t,e),_n(t+"Capture",e)}function _n(t,e){for(Ao[t]=e,t=0;t<e.length;t++)xo.add(e[t])}var Qy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Eo={},Oo={};function Zy(t){return Mu.call(Oo,t)?!0:Mu.call(Eo,t)?!1:Qy.test(t)?Oo[t]=!0:(Eo[t]=!0,!1)}function Xi(t,e,a){if(Zy(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Gi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function aa(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var qu,To;function zn(t){if(qu===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);qu=e&&e[1]||"",To=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qu+t+To}var Hu=!1;function Yu(t,e){if(!t||Hu)return"";Hu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(M){var _=M}Reflect.construct(t,[],U)}else{try{U.call()}catch(M){_=M}t.call(U.prototype)}}else{try{throw Error()}catch(M){_=M}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(M){if(M&&_&&typeof M.stack=="string")return[M.stack,_.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),o=u[0],m=u[1];if(o&&m){var p=o.split(`
`),T=m.split(`
`);for(i=n=0;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(n===p.length||i===T.length)for(n=p.length-1,i=T.length-1;1<=n&&0<=i&&p[n]!==T[i];)i--;for(;1<=n&&0<=i;n--,i--)if(p[n]!==T[i]){if(n!==1||i!==1)do if(n--,i--,0>i||p[n]!==T[i]){var C=`
`+p[n].replace(" at new "," at ");return t.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",t.displayName)),C}while(1<=n&&0<=i);break}}}finally{Hu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?zn(a):""}function ky(t){switch(t.tag){case 26:case 27:case 5:return zn(t.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 15:return Yu(t.type,!1);case 11:return Yu(t.type.render,!1);case 1:return Yu(t.type,!0);case 31:return zn("Activity");default:return""}}function _o(t){try{var e="";do e+=ky(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Re(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ky(t){var e=zo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,u.call(this,o)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vi(t){t._valueTracker||(t._valueTracker=Ky(t))}function Mo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=zo(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function Qi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Jy=/[\n"\\]/g;function De(t){return t.replace(Jy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Lu(t,e,a,n,i,u,o,m){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Re(e)):t.value!==""+Re(e)&&(t.value=""+Re(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?Bu(t,o,Re(e)):a!=null?Bu(t,o,Re(a)):n!=null&&t.removeAttribute("value"),i==null&&u!=null&&(t.defaultChecked=!!u),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.name=""+Re(m):t.removeAttribute("name")}function No(t,e,a,n,i,u,o,m){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;a=a!=null?""+Re(a):"",e=e!=null?""+Re(e):a,m||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=m?t.checked:!!n,t.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o)}function Bu(t,e,a){e==="number"&&Qi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Mn(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+Re(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ro(t,e,a){if(e!=null&&(e=""+Re(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Re(a):""}function Do(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(c(92));if(jt(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=Re(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function Nn(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var $y=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jo(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||$y.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Co(t,e,a){if(e!=null&&typeof e!="object")throw Error(c(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&jo(t,i,n)}else for(var u in e)e.hasOwnProperty(u)&&jo(t,u,e[u])}function Xu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zi(t){return Wy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Gu=null;function Vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rn=null,Dn=null;function wo(t){var e=On(t);if(e&&(t=e.stateNode)){var a=t[oe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Lu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+De(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[oe]||null;if(!i)throw Error(c(90));Lu(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&Mo(n)}break t;case"textarea":Ro(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Mn(t,!!a.multiple,e,!1)}}}var Qu=!1;function Uo(t,e,a){if(Qu)return t(e,a);Qu=!0;try{var n=t(e);return n}finally{if(Qu=!1,(Rn!==null||Dn!==null)&&(Rr(),Rn&&(e=Rn,t=Dn,Dn=Rn=null,wo(e),t)))for(e=0;e<t.length;e++)wo(t[e])}}function Ol(t,e){var a=t.stateNode;if(a===null)return null;var n=a[oe]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(c(231,e,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=!1;if(na)try{var Tl={};Object.defineProperty(Tl,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",Tl,Tl),window.removeEventListener("test",Tl,Tl)}catch{Zu=!1}var Ea=null,ku=null,ki=null;function qo(){if(ki)return ki;var t,e=ku,a=e.length,n,i="value"in Ea?Ea.value:Ea.textContent,u=i.length;for(t=0;t<a&&e[t]===i[t];t++);var o=a-t;for(n=1;n<=o&&e[a-n]===i[u-n];n++);return ki=i.slice(t,1<n?1-n:void 0)}function Ki(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ji(){return!0}function Ho(){return!1}function de(t){function e(a,n,i,u,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=u,this.target=o,this.currentTarget=null;for(var m in t)t.hasOwnProperty(m)&&(a=t[m],this[m]=a?a(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ji:Ho,this.isPropagationStopped=Ho,this}return S(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ji)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ji)},persist:function(){},isPersistent:Ji}),e}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=de(Ia),_l=S({},Ia,{view:0,detail:0}),Py=de(_l),Ku,Ju,zl,Fi=S({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zl&&(zl&&t.type==="mousemove"?(Ku=t.screenX-zl.screenX,Ju=t.screenY-zl.screenY):Ju=Ku=0,zl=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),Yo=de(Fi),Iy=S({},Fi,{dataTransfer:0}),tv=de(Iy),ev=S({},_l,{relatedTarget:0}),$u=de(ev),av=S({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=de(av),lv=S({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iv=de(lv),rv=S({},Ia,{data:0}),Lo=de(rv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sv[t])?!!e[t]:!1}function Fu(){return fv}var ov=S({},_l,{key:function(t){if(t.key){var e=uv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ki(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(t){return t.type==="keypress"?Ki(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ki(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dv=de(ov),mv=S({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bo=de(mv),hv=S({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),yv=de(hv),vv=S({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),pv=de(vv),gv=S({},Fi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=de(gv),Sv=S({},Ia,{newState:0,oldState:0}),xv=de(Sv),Av=[9,13,27,32],Wu=na&&"CompositionEvent"in window,Ml=null;na&&"documentMode"in document&&(Ml=document.documentMode);var Ev=na&&"TextEvent"in window&&!Ml,Xo=na&&(!Wu||Ml&&8<Ml&&11>=Ml),Go=" ",Vo=!1;function Qo(t,e){switch(t){case"keyup":return Av.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jn=!1;function Ov(t,e){switch(t){case"compositionend":return Zo(e);case"keypress":return e.which!==32?null:(Vo=!0,Go);case"textInput":return t=e.data,t===Go&&Vo?null:t;default:return null}}function Tv(t,e){if(jn)return t==="compositionend"||!Wu&&Qo(t,e)?(t=qo(),ki=ku=Ea=null,jn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xo&&e.locale!=="ko"?null:e.data;default:return null}}var _v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ko(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_v[t.type]:e==="textarea"}function Ko(t,e,a,n){Rn?Dn?Dn.push(n):Dn=[n]:Rn=n,e=qr(e,"onChange"),0<e.length&&(a=new $i("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var Nl=null,Rl=null;function zv(t){zm(t,0)}function Wi(t){var e=El(t);if(Mo(e))return t}function Jo(t,e){if(t==="change")return e}var $o=!1;if(na){var Pu;if(na){var Iu="oninput"in document;if(!Iu){var Fo=document.createElement("div");Fo.setAttribute("oninput","return;"),Iu=typeof Fo.oninput=="function"}Pu=Iu}else Pu=!1;$o=Pu&&(!document.documentMode||9<document.documentMode)}function Wo(){Nl&&(Nl.detachEvent("onpropertychange",Po),Rl=Nl=null)}function Po(t){if(t.propertyName==="value"&&Wi(Rl)){var e=[];Ko(e,Rl,t,Vu(t)),Uo(zv,e)}}function Mv(t,e,a){t==="focusin"?(Wo(),Nl=e,Rl=a,Nl.attachEvent("onpropertychange",Po)):t==="focusout"&&Wo()}function Nv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wi(Rl)}function Rv(t,e){if(t==="click")return Wi(e)}function Dv(t,e){if(t==="input"||t==="change")return Wi(e)}function jv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xe=typeof Object.is=="function"?Object.is:jv;function Dl(t,e){if(xe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Mu.call(e,i)||!xe(t[i],e[i]))return!1}return!0}function Io(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function td(t,e){var a=Io(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Io(a)}}function ed(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ed(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ad(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Qi(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Qi(t.document)}return e}function tc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Cv=na&&"documentMode"in document&&11>=document.documentMode,Cn=null,ec=null,jl=null,ac=!1;function nd(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ac||Cn==null||Cn!==Qi(n)||(n=Cn,"selectionStart"in n&&tc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),jl&&Dl(jl,n)||(jl=n,n=qr(ec,"onSelect"),0<n.length&&(e=new $i("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=Cn)))}function tn(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var wn={animationend:tn("Animation","AnimationEnd"),animationiteration:tn("Animation","AnimationIteration"),animationstart:tn("Animation","AnimationStart"),transitionrun:tn("Transition","TransitionRun"),transitionstart:tn("Transition","TransitionStart"),transitioncancel:tn("Transition","TransitionCancel"),transitionend:tn("Transition","TransitionEnd")},nc={},ld={};na&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function en(t){if(nc[t])return nc[t];if(!wn[t])return t;var e=wn[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in ld)return nc[t]=e[a];return t}var id=en("animationend"),rd=en("animationiteration"),ud=en("animationstart"),wv=en("transitionrun"),Uv=en("transitionstart"),qv=en("transitioncancel"),cd=en("transitionend"),sd=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function Be(t,e){sd.set(t,e),Pa(e,[t])}var fd=new WeakMap;function je(t,e){if(typeof t=="object"&&t!==null){var a=fd.get(t);return a!==void 0?a:(e={value:t,source:e,stack:_o(e)},fd.set(t,e),e)}return{value:t,source:e,stack:_o(e)}}var Ce=[],Un=0,ic=0;function Pi(){for(var t=Un,e=ic=Un=0;e<t;){var a=Ce[e];Ce[e++]=null;var n=Ce[e];Ce[e++]=null;var i=Ce[e];Ce[e++]=null;var u=Ce[e];if(Ce[e++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}u!==0&&od(a,i,u)}}function Ii(t,e,a,n){Ce[Un++]=t,Ce[Un++]=e,Ce[Un++]=a,Ce[Un++]=n,ic|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function rc(t,e,a,n){return Ii(t,e,a,n),tr(t)}function qn(t,e){return Ii(t,null,null,e),tr(t)}function od(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,u=t.return;u!==null;)u.childLanes|=a,n=u.alternate,n!==null&&(n.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(i=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,i&&e!==null&&(i=31-Se(a),t=u.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),u):null}function tr(t){if(50<ni)throw ni=0,ds=null,Error(c(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Hn={};function Hv(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(t,e,a,n){return new Hv(t,e,a,n)}function uc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,e){var a=t.alternate;return a===null?(a=Ae(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function dd(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function er(t,e,a,n,i,u){var o=0;if(n=t,typeof t=="function")uc(t)&&(o=1);else if(typeof t=="string")o=Lp(t,a,I.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Lt:return t=Ae(31,a,e,i),t.elementType=Lt,t.lanes=u,t;case B:return an(a.children,i,u,e);case q:o=8,i|=24;break;case N:return t=Ae(12,a,e,i|2),t.elementType=N,t.lanes=u,t;case R:return t=Ae(13,a,e,i),t.elementType=R,t.lanes=u,t;case lt:return t=Ae(19,a,e,i),t.elementType=lt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:case V:o=10;break t;case L:o=9;break t;case et:o=11;break t;case W:o=14;break t;case ht:o=16,n=null;break t}o=29,a=Error(c(130,t===null?"null":typeof t,"")),n=null}return e=Ae(o,a,e,i),e.elementType=t,e.type=n,e.lanes=u,e}function an(t,e,a,n){return t=Ae(7,t,n,e),t.lanes=a,t}function cc(t,e,a){return t=Ae(6,t,null,e),t.lanes=a,t}function sc(t,e,a){return e=Ae(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Yn=[],Ln=0,ar=null,nr=0,we=[],Ue=0,nn=null,ia=1,ra="";function ln(t,e){Yn[Ln++]=nr,Yn[Ln++]=ar,ar=t,nr=e}function md(t,e,a){we[Ue++]=ia,we[Ue++]=ra,we[Ue++]=nn,nn=t;var n=ia;t=ra;var i=32-Se(n)-1;n&=~(1<<i),a+=1;var u=32-Se(e)+i;if(30<u){var o=i-i%5;u=(n&(1<<o)-1).toString(32),n>>=o,i-=o,ia=1<<32-Se(e)+i|a<<i|n,ra=u+t}else ia=1<<u|a<<i|n,ra=t}function fc(t){t.return!==null&&(ln(t,1),md(t,1,0))}function oc(t){for(;t===ar;)ar=Yn[--Ln],Yn[Ln]=null,nr=Yn[--Ln],Yn[Ln]=null;for(;t===nn;)nn=we[--Ue],we[Ue]=null,ra=we[--Ue],we[Ue]=null,ia=we[--Ue],we[Ue]=null}var ce=null,Ht=null,gt=!1,rn=null,Qe=!1,dc=Error(c(519));function un(t){var e=Error(c(418,""));throw Ul(je(e,t)),dc}function hd(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[ne]=t,e[oe]=n,a){case"dialog":ft("cancel",e),ft("close",e);break;case"iframe":case"object":case"embed":ft("load",e);break;case"video":case"audio":for(a=0;a<ii.length;a++)ft(ii[a],e);break;case"source":ft("error",e);break;case"img":case"image":case"link":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"input":ft("invalid",e),No(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Vi(e);break;case"select":ft("invalid",e);break;case"textarea":ft("invalid",e),Do(e,n.value,n.defaultValue,n.children),Vi(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||Dm(e.textContent,a)?(n.popover!=null&&(ft("beforetoggle",e),ft("toggle",e)),n.onScroll!=null&&ft("scroll",e),n.onScrollEnd!=null&&ft("scrollend",e),n.onClick!=null&&(e.onclick=Hr),e=!0):e=!1,e||un(t)}function yd(t){for(ce=t.return;ce;)switch(ce.tag){case 5:case 13:Qe=!1;return;case 27:case 3:Qe=!0;return;default:ce=ce.return}}function Cl(t){if(t!==ce)return!1;if(!gt)return yd(t),gt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ms(t.type,t.memoizedProps)),a=!a),a&&Ht&&un(t),yd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Ht=Ge(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Ht=null}}else e===27?(e=Ht,La(t.type)?(t=js,js=null,Ht=t):Ht=e):Ht=ce?Ge(t.stateNode.nextSibling):null;return!0}function wl(){Ht=ce=null,gt=!1}function vd(){var t=rn;return t!==null&&(ye===null?ye=t:ye.push.apply(ye,t),rn=null),t}function Ul(t){rn===null?rn=[t]:rn.push(t)}var mc=H(null),cn=null,ua=null;function Oa(t,e,a){Z(mc,e._currentValue),e._currentValue=a}function ca(t){t._currentValue=mc.current,K(mc)}function hc(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function yc(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){var o=i.child;u=u.firstContext;t:for(;u!==null;){var m=u;u=i;for(var p=0;p<e.length;p++)if(m.context===e[p]){u.lanes|=a,m=u.alternate,m!==null&&(m.lanes|=a),hc(u.return,a,t),n||(o=null);break t}u=m.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(c(341));o.lanes|=a,u=o.alternate,u!==null&&(u.lanes|=a),hc(o,a,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ql(t,e,a,n){t=null;for(var i=e,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var m=i.type;xe(i.pendingProps.value,o.value)||(t!==null?t.push(m):t=[m])}}else if(i===ge.current){if(o=i.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(oi):t=[oi])}i=i.return}t!==null&&yc(e,t,a,n),e.flags|=262144}function lr(t){for(t=t.firstContext;t!==null;){if(!xe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sn(t){cn=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function le(t){return pd(cn,t)}function ir(t,e){return cn===null&&sn(t),pd(t,e)}function pd(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(c(308));ua=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ua=ua.next=e;return a}var Yv=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Lv=l.unstable_scheduleCallback,Bv=l.unstable_NormalPriority,Zt={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vc(){return{controller:new Yv,data:new Map,refCount:0}}function Hl(t){t.refCount--,t.refCount===0&&Lv(Bv,function(){t.controller.abort()})}var Yl=null,pc=0,Bn=0,Xn=null;function Xv(t,e){if(Yl===null){var a=Yl=[];pc=0,Bn=bs(),Xn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return pc++,e.then(gd,gd),e}function gd(){if(--pc===0&&Yl!==null){Xn!==null&&(Xn.status="fulfilled");var t=Yl;Yl=null,Bn=0,Xn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Gv(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var bd=j.S;j.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Xv(t,e),bd!==null&&bd(t,e)};var fn=H(null);function gc(){var t=fn.current;return t!==null?t:Nt.pooledCache}function rr(t,e){e===null?Z(fn,fn.current):Z(fn,e.pool)}function Sd(){var t=gc();return t===null?null:{parent:Zt._currentValue,pool:t}}var Ll=Error(c(460)),xd=Error(c(474)),ur=Error(c(542)),bc={then:function(){}};function Ad(t){return t=t.status,t==="fulfilled"||t==="rejected"}function cr(){}function Ed(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(cr,cr),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Td(t),t;default:if(typeof e.status=="string")e.then(cr,cr);else{if(t=Nt,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Td(t),t}throw Bl=e,Ll}}var Bl=null;function Od(){if(Bl===null)throw Error(c(459));var t=Bl;return Bl=null,t}function Td(t){if(t===Ll||t===ur)throw Error(c(483))}var Ta=!1;function Sc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(Et&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=tr(t),od(t,null,a),e}return Ii(t,n,e,a),tr(t)}function Xl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,go(t,a)}}function Ac(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?i=u=o:u=u.next=o,a=a.next}while(a!==null);u===null?i=u=e:u=u.next=e}else i=u=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Ec=!1;function Gl(){if(Ec){var t=Xn;if(t!==null)throw t}}function Vl(t,e,a,n){Ec=!1;var i=t.updateQueue;Ta=!1;var u=i.firstBaseUpdate,o=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var p=m,T=p.next;p.next=null,o===null?u=T:o.next=T,o=p;var C=t.alternate;C!==null&&(C=C.updateQueue,m=C.lastBaseUpdate,m!==o&&(m===null?C.firstBaseUpdate=T:m.next=T,C.lastBaseUpdate=p))}if(u!==null){var U=i.baseState;o=0,C=T=p=null,m=u;do{var _=m.lane&-536870913,M=_!==m.lane;if(M?(dt&_)===_:(n&_)===_){_!==0&&_===Bn&&(Ec=!0),C!==null&&(C=C.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});t:{var nt=t,tt=m;_=e;var zt=a;switch(tt.tag){case 1:if(nt=tt.payload,typeof nt=="function"){U=nt.call(zt,U,_);break t}U=nt;break t;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=tt.payload,_=typeof nt=="function"?nt.call(zt,U,_):nt,_==null)break t;U=S({},U,_);break t;case 2:Ta=!0}}_=m.callback,_!==null&&(t.flags|=64,M&&(t.flags|=8192),M=i.callbacks,M===null?i.callbacks=[_]:M.push(_))}else M={lane:_,tag:m.tag,payload:m.payload,callback:m.callback,next:null},C===null?(T=C=M,p=U):C=C.next=M,o|=_;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;M=m,m=M.next,M.next=null,i.lastBaseUpdate=M,i.shared.pending=null}}while(!0);C===null&&(p=U),i.baseState=p,i.firstBaseUpdate=T,i.lastBaseUpdate=C,u===null&&(i.shared.lanes=0),Ua|=o,t.lanes=o,t.memoizedState=U}}function _d(t,e){if(typeof t!="function")throw Error(c(191,t));t.call(e)}function zd(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_d(a[t],e)}var Gn=H(null),sr=H(0);function Md(t,e){t=ya,Z(sr,t),Z(Gn,e),ya=t|e.baseLanes}function Oc(){Z(sr,ya),Z(Gn,Gn.current)}function Tc(){ya=sr.current,K(Gn),K(sr)}var Ma=0,ut=null,Tt=null,Gt=null,fr=!1,Vn=!1,on=!1,or=0,Ql=0,Qn=null,Vv=0;function Bt(){throw Error(c(321))}function _c(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!xe(t[a],e[a]))return!1;return!0}function zc(t,e,a,n,i,u){return Ma=u,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,j.H=t===null||t.memoizedState===null?o0:d0,on=!1,u=a(n,i),on=!1,Vn&&(u=Rd(e,a,n,i)),Nd(t),u}function Nd(t){j.H=pr;var e=Tt!==null&&Tt.next!==null;if(Ma=0,Gt=Tt=ut=null,fr=!1,Ql=0,Qn=null,e)throw Error(c(300));t===null||$t||(t=t.dependencies,t!==null&&lr(t)&&($t=!0))}function Rd(t,e,a,n){ut=t;var i=0;do{if(Vn&&(Qn=null),Ql=0,Vn=!1,25<=i)throw Error(c(301));if(i+=1,Gt=Tt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}j.H=Fv,u=e(a,n)}while(Vn);return u}function Qv(){var t=j.H,e=t.useState()[0];return e=typeof e.then=="function"?Zl(e):e,t=t.useState()[0],(Tt!==null?Tt.memoizedState:null)!==t&&(ut.flags|=1024),e}function Mc(){var t=or!==0;return or=0,t}function Nc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Rc(t){if(fr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}fr=!1}Ma=0,Gt=Tt=ut=null,Vn=!1,Ql=or=0,Qn=null}function me(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?ut.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Vt(){if(Tt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Gt===null?ut.memoizedState:Gt.next;if(e!==null)Gt=e,Tt=t;else{if(t===null)throw ut.alternate===null?Error(c(467)):Error(c(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Gt===null?ut.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zl(t){var e=Ql;return Ql+=1,Qn===null&&(Qn=[]),t=Ed(Qn,t,e),e=ut,(Gt===null?e.memoizedState:Gt.next)===null&&(e=e.alternate,j.H=e===null||e.memoizedState===null?o0:d0),t}function dr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zl(t);if(t.$$typeof===V)return le(t)}throw Error(c(438,String(t)))}function jc(t){var e=null,a=ut.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=ut.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Dc(),ut.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=ae;return e.index++,a}function sa(t,e){return typeof e=="function"?e(t):e}function mr(t){var e=Vt();return Cc(e,Tt,t)}function Cc(t,e,a){var n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=t.baseQueue,u=n.pending;if(u!==null){if(i!==null){var o=i.next;i.next=u.next,u.next=o}e.baseQueue=i=u,n.pending=null}if(u=t.baseState,i===null)t.memoizedState=u;else{e=i.next;var m=o=null,p=null,T=e,C=!1;do{var U=T.lane&-536870913;if(U!==T.lane?(dt&U)===U:(Ma&U)===U){var _=T.revertLane;if(_===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),U===Bn&&(C=!0);else if((Ma&_)===_){T=T.next,_===Bn&&(C=!0);continue}else U={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},p===null?(m=p=U,o=u):p=p.next=U,ut.lanes|=_,Ua|=_;U=T.action,on&&a(u,U),u=T.hasEagerState?T.eagerState:a(u,U)}else _={lane:U,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},p===null?(m=p=_,o=u):p=p.next=_,ut.lanes|=U,Ua|=U;T=T.next}while(T!==null&&T!==e);if(p===null?o=u:p.next=m,!xe(u,t.memoizedState)&&($t=!0,C&&(a=Xn,a!==null)))throw a;t.memoizedState=u,t.baseState=o,t.baseQueue=p,n.lastRenderedState=u}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function wc(t){var e=Vt(),a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,u=e.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do u=t(u,o.action),o=o.next;while(o!==i);xe(u,e.memoizedState)||($t=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),a.lastRenderedState=u}return[u,n]}function Dd(t,e,a){var n=ut,i=Vt(),u=gt;if(u){if(a===void 0)throw Error(c(407));a=a()}else a=e();var o=!xe((Tt||i).memoizedState,a);o&&(i.memoizedState=a,$t=!0),i=i.queue;var m=wd.bind(null,n,i,t);if(kl(2048,8,m,[t]),i.getSnapshot!==e||o||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Zn(9,hr(),Cd.bind(null,n,i,a,e),null),Nt===null)throw Error(c(349));u||(Ma&124)!==0||jd(n,e,a)}return a}function jd(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ut.updateQueue,e===null?(e=Dc(),ut.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Cd(t,e,a,n){e.value=a,e.getSnapshot=n,Ud(e)&&qd(t)}function wd(t,e,a){return a(function(){Ud(e)&&qd(t)})}function Ud(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!xe(t,a)}catch{return!0}}function qd(t){var e=qn(t,2);e!==null&&ze(e,t,2)}function Uc(t){var e=me();if(typeof t=="function"){var a=t;if(t=a(),on){xa(!0);try{a()}finally{xa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e}function Hd(t,e,a,n){return t.baseState=a,Cc(t,Tt,typeof n=="function"?n:sa)}function Zv(t,e,a,n,i){if(vr(t))throw Error(c(485));if(t=e.action,t!==null){var u={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){u.listeners.push(o)}};j.T!==null?a(!0):u.isTransition=!1,n(u),a=e.pending,a===null?(u.next=e.pending=u,Yd(e,u)):(u.next=a.next,e.pending=a.next=u)}}function Yd(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var u=j.T,o={};j.T=o;try{var m=a(i,n),p=j.S;p!==null&&p(o,m),Ld(t,e,m)}catch(T){qc(t,e,T)}finally{j.T=u}}else try{u=a(i,n),Ld(t,e,u)}catch(T){qc(t,e,T)}}function Ld(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Bd(t,e,n)},function(n){return qc(t,e,n)}):Bd(t,e,a)}function Bd(t,e,a){e.status="fulfilled",e.value=a,Xd(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Yd(t,a)))}function qc(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,Xd(e),e=e.next;while(e!==n)}t.action=null}function Xd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Gd(t,e){return e}function Vd(t,e){if(gt){var a=Nt.formState;if(a!==null){t:{var n=ut;if(gt){if(Ht){e:{for(var i=Ht,u=Qe;i.nodeType!==8;){if(!u){i=null;break e}if(i=Ge(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){Ht=Ge(i.nextSibling),n=i.data==="F!";break t}}un(n)}n=!1}n&&(e=a[0])}}return a=me(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gd,lastRenderedState:e},a.queue=n,a=c0.bind(null,ut,n),n.dispatch=a,n=Uc(!1),u=Xc.bind(null,ut,!1,n.queue),n=me(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=Zv.bind(null,ut,i,u,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function Qd(t){var e=Vt();return Zd(e,Tt,t)}function Zd(t,e,a){if(e=Cc(t,e,Gd)[0],t=mr(sa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Zl(e)}catch(o){throw o===Ll?ur:o}else n=e;e=Vt();var i=e.queue,u=i.dispatch;return a!==e.memoizedState&&(ut.flags|=2048,Zn(9,hr(),kv.bind(null,i,a),null)),[n,u,t]}function kv(t,e){t.action=e}function kd(t){var e=Vt(),a=Tt;if(a!==null)return Zd(e,a,t);Vt(),e=e.memoizedState,a=Vt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Zn(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=ut.updateQueue,e===null&&(e=Dc(),ut.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function hr(){return{destroy:void 0,resource:void 0}}function Kd(){return Vt().memoizedState}function yr(t,e,a,n){var i=me();n=n===void 0?null:n,ut.flags|=t,i.memoizedState=Zn(1|e,hr(),a,n)}function kl(t,e,a,n){var i=Vt();n=n===void 0?null:n;var u=i.memoizedState.inst;Tt!==null&&n!==null&&_c(n,Tt.memoizedState.deps)?i.memoizedState=Zn(e,u,a,n):(ut.flags|=t,i.memoizedState=Zn(1|e,u,a,n))}function Jd(t,e){yr(8390656,8,t,e)}function $d(t,e){kl(2048,8,t,e)}function Fd(t,e){return kl(4,2,t,e)}function Wd(t,e){return kl(4,4,t,e)}function Pd(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Id(t,e,a){a=a!=null?a.concat([t]):null,kl(4,4,Pd.bind(null,e,t),a)}function Hc(){}function t0(t,e){var a=Vt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&_c(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function e0(t,e){var a=Vt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&_c(e,n[1]))return n[0];if(n=t(),on){xa(!0);try{t()}finally{xa(!1)}}return a.memoizedState=[n,e],n}function Yc(t,e,a){return a===void 0||(Ma&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=lm(),ut.lanes|=t,Ua|=t,a)}function a0(t,e,a,n){return xe(a,e)?a:Gn.current!==null?(t=Yc(t,a,n),xe(t,e)||($t=!0),t):(Ma&42)===0?($t=!0,t.memoizedState=a):(t=lm(),ut.lanes|=t,Ua|=t,e)}function n0(t,e,a,n,i){var u=Q.p;Q.p=u!==0&&8>u?u:8;var o=j.T,m={};j.T=m,Xc(t,!1,e,a);try{var p=i(),T=j.S;if(T!==null&&T(m,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var C=Gv(p,n);Kl(t,e,C,_e(t))}else Kl(t,e,n,_e(t))}catch(U){Kl(t,e,{then:function(){},status:"rejected",reason:U},_e())}finally{Q.p=u,j.T=o}}function Kv(){}function Lc(t,e,a,n){if(t.tag!==5)throw Error(c(476));var i=l0(t).queue;n0(t,i,e,P,a===null?Kv:function(){return i0(t),a(n)})}function l0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:P},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function i0(t){var e=l0(t).next.queue;Kl(t,e,{},_e())}function Bc(){return le(oi)}function r0(){return Vt().memoizedState}function u0(){return Vt().memoizedState}function Jv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=_e();t=_a(a);var n=za(e,t,a);n!==null&&(ze(n,e,a),Xl(n,e,a)),e={cache:vc()},t.payload=e;return}e=e.return}}function $v(t,e,a){var n=_e();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},vr(t)?s0(e,a):(a=rc(t,e,a,n),a!==null&&(ze(a,t,n),f0(a,e,n)))}function c0(t,e,a){var n=_e();Kl(t,e,a,n)}function Kl(t,e,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(vr(t))s0(e,i);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var o=e.lastRenderedState,m=u(o,a);if(i.hasEagerState=!0,i.eagerState=m,xe(m,o))return Ii(t,e,i,0),Nt===null&&Pi(),!1}catch{}finally{}if(a=rc(t,e,i,n),a!==null)return ze(a,t,n),f0(a,e,n),!0}return!1}function Xc(t,e,a,n){if(n={lane:2,revertLane:bs(),action:n,hasEagerState:!1,eagerState:null,next:null},vr(t)){if(e)throw Error(c(479))}else e=rc(t,a,n,2),e!==null&&ze(e,t,2)}function vr(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function s0(t,e){Vn=fr=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function f0(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,go(t,a)}}var pr={readContext:le,use:dr,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt},o0={readContext:le,use:dr,useCallback:function(t,e){return me().memoizedState=[t,e===void 0?null:e],t},useContext:le,useEffect:Jd,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,yr(4194308,4,Pd.bind(null,e,t),a)},useLayoutEffect:function(t,e){return yr(4194308,4,t,e)},useInsertionEffect:function(t,e){yr(4,2,t,e)},useMemo:function(t,e){var a=me();e=e===void 0?null:e;var n=t();if(on){xa(!0);try{t()}finally{xa(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=me();if(a!==void 0){var i=a(e);if(on){xa(!0);try{a(e)}finally{xa(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=$v.bind(null,ut,t),[n.memoizedState,t]},useRef:function(t){var e=me();return t={current:t},e.memoizedState=t},useState:function(t){t=Uc(t);var e=t.queue,a=c0.bind(null,ut,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Hc,useDeferredValue:function(t,e){var a=me();return Yc(a,t,e)},useTransition:function(){var t=Uc(!1);return t=n0.bind(null,ut,t.queue,!0,!1),me().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=ut,i=me();if(gt){if(a===void 0)throw Error(c(407));a=a()}else{if(a=e(),Nt===null)throw Error(c(349));(dt&124)!==0||jd(n,e,a)}i.memoizedState=a;var u={value:a,getSnapshot:e};return i.queue=u,Jd(wd.bind(null,n,u,t),[t]),n.flags|=2048,Zn(9,hr(),Cd.bind(null,n,u,a,e),null),a},useId:function(){var t=me(),e=Nt.identifierPrefix;if(gt){var a=ra,n=ia;a=(n&~(1<<32-Se(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=or++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=Vv++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Bc,useFormState:Vd,useActionState:Vd,useOptimistic:function(t){var e=me();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Xc.bind(null,ut,!0,a),a.dispatch=e,[t,e]},useMemoCache:jc,useCacheRefresh:function(){return me().memoizedState=Jv.bind(null,ut)}},d0={readContext:le,use:dr,useCallback:t0,useContext:le,useEffect:$d,useImperativeHandle:Id,useInsertionEffect:Fd,useLayoutEffect:Wd,useMemo:e0,useReducer:mr,useRef:Kd,useState:function(){return mr(sa)},useDebugValue:Hc,useDeferredValue:function(t,e){var a=Vt();return a0(a,Tt.memoizedState,t,e)},useTransition:function(){var t=mr(sa)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:Zl(t),e]},useSyncExternalStore:Dd,useId:r0,useHostTransitionStatus:Bc,useFormState:Qd,useActionState:Qd,useOptimistic:function(t,e){var a=Vt();return Hd(a,Tt,t,e)},useMemoCache:jc,useCacheRefresh:u0},Fv={readContext:le,use:dr,useCallback:t0,useContext:le,useEffect:$d,useImperativeHandle:Id,useInsertionEffect:Fd,useLayoutEffect:Wd,useMemo:e0,useReducer:wc,useRef:Kd,useState:function(){return wc(sa)},useDebugValue:Hc,useDeferredValue:function(t,e){var a=Vt();return Tt===null?Yc(a,t,e):a0(a,Tt.memoizedState,t,e)},useTransition:function(){var t=wc(sa)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:Zl(t),e]},useSyncExternalStore:Dd,useId:r0,useHostTransitionStatus:Bc,useFormState:kd,useActionState:kd,useOptimistic:function(t,e){var a=Vt();return Tt!==null?Hd(a,Tt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:jc,useCacheRefresh:u0},kn=null,Jl=0;function gr(t){var e=Jl;return Jl+=1,kn===null&&(kn=[]),Ed(kn,t,e)}function $l(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function br(t,e){throw e.$$typeof===z?Error(c(525)):(t=Object.prototype.toString.call(e),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function m0(t){var e=t._init;return e(t._payload)}function h0(t){function e(A,x){if(t){var O=A.deletions;O===null?(A.deletions=[x],A.flags|=16):O.push(x)}}function a(A,x){if(!t)return null;for(;x!==null;)e(A,x),x=x.sibling;return null}function n(A){for(var x=new Map;A!==null;)A.key!==null?x.set(A.key,A):x.set(A.index,A),A=A.sibling;return x}function i(A,x){return A=la(A,x),A.index=0,A.sibling=null,A}function u(A,x,O){return A.index=O,t?(O=A.alternate,O!==null?(O=O.index,O<x?(A.flags|=67108866,x):O):(A.flags|=67108866,x)):(A.flags|=1048576,x)}function o(A){return t&&A.alternate===null&&(A.flags|=67108866),A}function m(A,x,O,w){return x===null||x.tag!==6?(x=cc(O,A.mode,w),x.return=A,x):(x=i(x,O),x.return=A,x)}function p(A,x,O,w){var J=O.type;return J===B?C(A,x,O.props.children,w,O.key):x!==null&&(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ht&&m0(J)===x.type)?(x=i(x,O.props),$l(x,O),x.return=A,x):(x=er(O.type,O.key,O.props,null,A.mode,w),$l(x,O),x.return=A,x)}function T(A,x,O,w){return x===null||x.tag!==4||x.stateNode.containerInfo!==O.containerInfo||x.stateNode.implementation!==O.implementation?(x=sc(O,A.mode,w),x.return=A,x):(x=i(x,O.children||[]),x.return=A,x)}function C(A,x,O,w,J){return x===null||x.tag!==7?(x=an(O,A.mode,w,J),x.return=A,x):(x=i(x,O),x.return=A,x)}function U(A,x,O){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=cc(""+x,A.mode,O),x.return=A,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case D:return O=er(x.type,x.key,x.props,null,A.mode,O),$l(O,x),O.return=A,O;case G:return x=sc(x,A.mode,O),x.return=A,x;case ht:var w=x._init;return x=w(x._payload),U(A,x,O)}if(jt(x)||Ut(x))return x=an(x,A.mode,O,null),x.return=A,x;if(typeof x.then=="function")return U(A,gr(x),O);if(x.$$typeof===V)return U(A,ir(A,x),O);br(A,x)}return null}function _(A,x,O,w){var J=x!==null?x.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return J!==null?null:m(A,x,""+O,w);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case D:return O.key===J?p(A,x,O,w):null;case G:return O.key===J?T(A,x,O,w):null;case ht:return J=O._init,O=J(O._payload),_(A,x,O,w)}if(jt(O)||Ut(O))return J!==null?null:C(A,x,O,w,null);if(typeof O.then=="function")return _(A,x,gr(O),w);if(O.$$typeof===V)return _(A,x,ir(A,O),w);br(A,O)}return null}function M(A,x,O,w,J){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return A=A.get(O)||null,m(x,A,""+w,J);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case D:return A=A.get(w.key===null?O:w.key)||null,p(x,A,w,J);case G:return A=A.get(w.key===null?O:w.key)||null,T(x,A,w,J);case ht:var ct=w._init;return w=ct(w._payload),M(A,x,O,w,J)}if(jt(w)||Ut(w))return A=A.get(O)||null,C(x,A,w,J,null);if(typeof w.then=="function")return M(A,x,O,gr(w),J);if(w.$$typeof===V)return M(A,x,O,ir(x,w),J);br(x,w)}return null}function nt(A,x,O,w){for(var J=null,ct=null,F=x,at=x=0,Wt=null;F!==null&&at<O.length;at++){F.index>at?(Wt=F,F=null):Wt=F.sibling;var pt=_(A,F,O[at],w);if(pt===null){F===null&&(F=Wt);break}t&&F&&pt.alternate===null&&e(A,F),x=u(pt,x,at),ct===null?J=pt:ct.sibling=pt,ct=pt,F=Wt}if(at===O.length)return a(A,F),gt&&ln(A,at),J;if(F===null){for(;at<O.length;at++)F=U(A,O[at],w),F!==null&&(x=u(F,x,at),ct===null?J=F:ct.sibling=F,ct=F);return gt&&ln(A,at),J}for(F=n(F);at<O.length;at++)Wt=M(F,A,at,O[at],w),Wt!==null&&(t&&Wt.alternate!==null&&F.delete(Wt.key===null?at:Wt.key),x=u(Wt,x,at),ct===null?J=Wt:ct.sibling=Wt,ct=Wt);return t&&F.forEach(function(Qa){return e(A,Qa)}),gt&&ln(A,at),J}function tt(A,x,O,w){if(O==null)throw Error(c(151));for(var J=null,ct=null,F=x,at=x=0,Wt=null,pt=O.next();F!==null&&!pt.done;at++,pt=O.next()){F.index>at?(Wt=F,F=null):Wt=F.sibling;var Qa=_(A,F,pt.value,w);if(Qa===null){F===null&&(F=Wt);break}t&&F&&Qa.alternate===null&&e(A,F),x=u(Qa,x,at),ct===null?J=Qa:ct.sibling=Qa,ct=Qa,F=Wt}if(pt.done)return a(A,F),gt&&ln(A,at),J;if(F===null){for(;!pt.done;at++,pt=O.next())pt=U(A,pt.value,w),pt!==null&&(x=u(pt,x,at),ct===null?J=pt:ct.sibling=pt,ct=pt);return gt&&ln(A,at),J}for(F=n(F);!pt.done;at++,pt=O.next())pt=M(F,A,at,pt.value,w),pt!==null&&(t&&pt.alternate!==null&&F.delete(pt.key===null?at:pt.key),x=u(pt,x,at),ct===null?J=pt:ct.sibling=pt,ct=pt);return t&&F.forEach(function(Wp){return e(A,Wp)}),gt&&ln(A,at),J}function zt(A,x,O,w){if(typeof O=="object"&&O!==null&&O.type===B&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case D:t:{for(var J=O.key;x!==null;){if(x.key===J){if(J=O.type,J===B){if(x.tag===7){a(A,x.sibling),w=i(x,O.props.children),w.return=A,A=w;break t}}else if(x.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ht&&m0(J)===x.type){a(A,x.sibling),w=i(x,O.props),$l(w,O),w.return=A,A=w;break t}a(A,x);break}else e(A,x);x=x.sibling}O.type===B?(w=an(O.props.children,A.mode,w,O.key),w.return=A,A=w):(w=er(O.type,O.key,O.props,null,A.mode,w),$l(w,O),w.return=A,A=w)}return o(A);case G:t:{for(J=O.key;x!==null;){if(x.key===J)if(x.tag===4&&x.stateNode.containerInfo===O.containerInfo&&x.stateNode.implementation===O.implementation){a(A,x.sibling),w=i(x,O.children||[]),w.return=A,A=w;break t}else{a(A,x);break}else e(A,x);x=x.sibling}w=sc(O,A.mode,w),w.return=A,A=w}return o(A);case ht:return J=O._init,O=J(O._payload),zt(A,x,O,w)}if(jt(O))return nt(A,x,O,w);if(Ut(O)){if(J=Ut(O),typeof J!="function")throw Error(c(150));return O=J.call(O),tt(A,x,O,w)}if(typeof O.then=="function")return zt(A,x,gr(O),w);if(O.$$typeof===V)return zt(A,x,ir(A,O),w);br(A,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,x!==null&&x.tag===6?(a(A,x.sibling),w=i(x,O),w.return=A,A=w):(a(A,x),w=cc(O,A.mode,w),w.return=A,A=w),o(A)):a(A,x)}return function(A,x,O,w){try{Jl=0;var J=zt(A,x,O,w);return kn=null,J}catch(F){if(F===Ll||F===ur)throw F;var ct=Ae(29,F,null,A.mode);return ct.lanes=w,ct.return=A,ct}finally{}}}var Kn=h0(!0),y0=h0(!1),qe=H(null),Ze=null;function Na(t){var e=t.alternate;Z(kt,kt.current&1),Z(qe,t),Ze===null&&(e===null||Gn.current!==null||e.memoizedState!==null)&&(Ze=t)}function v0(t){if(t.tag===22){if(Z(kt,kt.current),Z(qe,t),Ze===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ze=t)}}else Ra()}function Ra(){Z(kt,kt.current),Z(qe,qe.current)}function fa(t){K(qe),Ze===t&&(Ze=null),K(kt)}var kt=H(0);function Sr(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ds(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Gc(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:S({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Vc={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=_e(),i=_a(n);i.payload=e,a!=null&&(i.callback=a),e=za(t,i,n),e!==null&&(ze(e,t,n),Xl(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=_e(),i=_a(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=za(t,i,n),e!==null&&(ze(e,t,n),Xl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=_e(),n=_a(a);n.tag=2,e!=null&&(n.callback=e),e=za(t,n,a),e!==null&&(ze(e,t,a),Xl(e,t,a))}};function p0(t,e,a,n,i,u,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,o):e.prototype&&e.prototype.isPureReactComponent?!Dl(a,n)||!Dl(i,u):!0}function g0(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&Vc.enqueueReplaceState(e,e.state,null)}function dn(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=S({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}var xr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function b0(t){xr(t)}function S0(t){console.error(t)}function x0(t){xr(t)}function Ar(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function A0(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Qc(t,e,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Ar(t,e)},a}function E0(t){return t=_a(t),t.tag=3,t}function O0(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var u=n.value;t.payload=function(){return i(u)},t.callback=function(){A0(e,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){A0(e,a,n),typeof i!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function Wv(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&ql(e,a,i,!0),a=qe.current,a!==null){switch(a.tag){case 13:return Ze===null?hs():a.alternate===null&&Yt===0&&(Yt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===bc?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),vs(t,n,i)),!1;case 22:return a.flags|=65536,n===bc?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),vs(t,n,i)),!1}throw Error(c(435,a.tag))}return vs(t,n,i),hs(),!1}if(gt)return e=qe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==dc&&(t=Error(c(422),{cause:n}),Ul(je(t,a)))):(n!==dc&&(e=Error(c(423),{cause:n}),Ul(je(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=je(n,a),i=Qc(t.stateNode,n,i),Ac(t,i),Yt!==4&&(Yt=2)),!1;var u=Error(c(520),{cause:n});if(u=je(u,a),ai===null?ai=[u]:ai.push(u),Yt!==4&&(Yt=2),e===null)return!0;n=je(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=Qc(a.stateNode,n,t),Ac(a,t),!1;case 1:if(e=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(qa===null||!qa.has(u))))return a.flags|=65536,i&=-i,a.lanes|=i,i=E0(i),O0(i,t,a,n),Ac(a,i),!1}a=a.return}while(a!==null);return!1}var T0=Error(c(461)),$t=!1;function Pt(t,e,a,n){e.child=t===null?y0(e,null,a,n):Kn(e,t.child,a,n)}function _0(t,e,a,n,i){a=a.render;var u=e.ref;if("ref"in n){var o={};for(var m in n)m!=="ref"&&(o[m]=n[m])}else o=n;return sn(e),n=zc(t,e,a,o,u,i),m=Mc(),t!==null&&!$t?(Nc(t,e,i),oa(t,e,i)):(gt&&m&&fc(e),e.flags|=1,Pt(t,e,n,i),e.child)}function z0(t,e,a,n,i){if(t===null){var u=a.type;return typeof u=="function"&&!uc(u)&&u.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=u,M0(t,e,u,n,i)):(t=er(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Pc(t,i)){var o=u.memoizedProps;if(a=a.compare,a=a!==null?a:Dl,a(o,n)&&t.ref===e.ref)return oa(t,e,i)}return e.flags|=1,t=la(u,n),t.ref=e.ref,t.return=e,e.child=t}function M0(t,e,a,n,i){if(t!==null){var u=t.memoizedProps;if(Dl(u,n)&&t.ref===e.ref)if($t=!1,e.pendingProps=n=u,Pc(t,i))(t.flags&131072)!==0&&($t=!0);else return e.lanes=t.lanes,oa(t,e,i)}return Zc(t,e,a,n,i)}function N0(t,e,a){var n=e.pendingProps,i=n.children,u=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=u!==null?u.baseLanes|a:a,t!==null){for(i=e.child=t.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;e.childLanes=u&~n}else e.childLanes=0,e.child=null;return R0(t,e,n,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&rr(e,u!==null?u.cachePool:null),u!==null?Md(e,u):Oc(),v0(e);else return e.lanes=e.childLanes=536870912,R0(t,e,u!==null?u.baseLanes|a:a,a)}else u!==null?(rr(e,u.cachePool),Md(e,u),Ra(),e.memoizedState=null):(t!==null&&rr(e,null),Oc(),Ra());return Pt(t,e,i,a),e.child}function R0(t,e,a,n){var i=gc();return i=i===null?null:{parent:Zt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&rr(e,null),Oc(),v0(e),t!==null&&ql(t,e,n,!0),null}function Er(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Zc(t,e,a,n,i){return sn(e),a=zc(t,e,a,n,void 0,i),n=Mc(),t!==null&&!$t?(Nc(t,e,i),oa(t,e,i)):(gt&&n&&fc(e),e.flags|=1,Pt(t,e,a,i),e.child)}function D0(t,e,a,n,i,u){return sn(e),e.updateQueue=null,a=Rd(e,n,a,i),Nd(t),n=Mc(),t!==null&&!$t?(Nc(t,e,u),oa(t,e,u)):(gt&&n&&fc(e),e.flags|=1,Pt(t,e,a,u),e.child)}function j0(t,e,a,n,i){if(sn(e),e.stateNode===null){var u=Hn,o=a.contextType;typeof o=="object"&&o!==null&&(u=le(o)),u=new a(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Vc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},Sc(e),o=a.contextType,u.context=typeof o=="object"&&o!==null?le(o):Hn,u.state=e.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Gc(e,a,o,n),u.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(o=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),o!==u.state&&Vc.enqueueReplaceState(u,u.state,null),Vl(e,n,u,i),Gl(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var m=e.memoizedProps,p=dn(a,m);u.props=p;var T=u.context,C=a.contextType;o=Hn,typeof C=="object"&&C!==null&&(o=le(C));var U=a.getDerivedStateFromProps;C=typeof U=="function"||typeof u.getSnapshotBeforeUpdate=="function",m=e.pendingProps!==m,C||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m||T!==o)&&g0(e,u,n,o),Ta=!1;var _=e.memoizedState;u.state=_,Vl(e,n,u,i),Gl(),T=e.memoizedState,m||_!==T||Ta?(typeof U=="function"&&(Gc(e,a,U,n),T=e.memoizedState),(p=Ta||p0(e,a,p,n,_,T,o))?(C||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=T),u.props=n,u.state=T,u.context=o,n=p):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,xc(t,e),o=e.memoizedProps,C=dn(a,o),u.props=C,U=e.pendingProps,_=u.context,T=a.contextType,p=Hn,typeof T=="object"&&T!==null&&(p=le(T)),m=a.getDerivedStateFromProps,(T=typeof m=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==U||_!==p)&&g0(e,u,n,p),Ta=!1,_=e.memoizedState,u.state=_,Vl(e,n,u,i),Gl();var M=e.memoizedState;o!==U||_!==M||Ta||t!==null&&t.dependencies!==null&&lr(t.dependencies)?(typeof m=="function"&&(Gc(e,a,m,n),M=e.memoizedState),(C=Ta||p0(e,a,C,n,_,M,p)||t!==null&&t.dependencies!==null&&lr(t.dependencies))?(T||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,M,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,M,p)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||o===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=M),u.props=n,u.state=M,u.context=p,n=C):(typeof u.componentDidUpdate!="function"||o===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,Er(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=Kn(e,t.child,null,i),e.child=Kn(e,null,a,i)):Pt(t,e,a,i),e.memoizedState=u.state,t=e.child):t=oa(t,e,i),t}function C0(t,e,a,n){return wl(),e.flags|=256,Pt(t,e,a,n),e.child}var kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kc(t){return{baseLanes:t,cachePool:Sd()}}function Jc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=He),t}function w0(t,e,a){var n=e.pendingProps,i=!1,u=(e.flags&128)!==0,o;if((o=u)||(o=t!==null&&t.memoizedState===null?!1:(kt.current&2)!==0),o&&(i=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(gt){if(i?Na(e):Ra(),gt){var m=Ht,p;if(p=m){t:{for(p=m,m=Qe;p.nodeType!==8;){if(!m){m=null;break t}if(p=Ge(p.nextSibling),p===null){m=null;break t}}m=p}m!==null?(e.memoizedState={dehydrated:m,treeContext:nn!==null?{id:ia,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},p=Ae(18,null,null,0),p.stateNode=m,p.return=e,e.child=p,ce=e,Ht=null,p=!0):p=!1}p||un(e)}if(m=e.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return Ds(m)?e.lanes=32:e.lanes=536870912,null;fa(e)}return m=n.children,n=n.fallback,i?(Ra(),i=e.mode,m=Or({mode:"hidden",children:m},i),n=an(n,i,a,null),m.return=e,n.return=e,m.sibling=n,e.child=m,i=e.child,i.memoizedState=Kc(a),i.childLanes=Jc(t,o,a),e.memoizedState=kc,n):(Na(e),$c(e,m))}if(p=t.memoizedState,p!==null&&(m=p.dehydrated,m!==null)){if(u)e.flags&256?(Na(e),e.flags&=-257,e=Fc(t,e,a)):e.memoizedState!==null?(Ra(),e.child=t.child,e.flags|=128,e=null):(Ra(),i=n.fallback,m=e.mode,n=Or({mode:"visible",children:n.children},m),i=an(i,m,a,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,Kn(e,t.child,null,a),n=e.child,n.memoizedState=Kc(a),n.childLanes=Jc(t,o,a),e.memoizedState=kc,e=i);else if(Na(e),Ds(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var T=o.dgst;o=T,n=Error(c(419)),n.stack="",n.digest=o,Ul({value:n,source:null,stack:null}),e=Fc(t,e,a)}else if($t||ql(t,e,a,!1),o=(a&t.childLanes)!==0,$t||o){if(o=Nt,o!==null&&(n=a&-a,n=(n&42)!==0?1:ju(n),n=(n&(o.suspendedLanes|a))!==0?0:n,n!==0&&n!==p.retryLane))throw p.retryLane=n,qn(t,n),ze(o,t,n),T0;m.data==="$?"||hs(),e=Fc(t,e,a)}else m.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=p.treeContext,Ht=Ge(m.nextSibling),ce=e,gt=!0,rn=null,Qe=!1,t!==null&&(we[Ue++]=ia,we[Ue++]=ra,we[Ue++]=nn,ia=t.id,ra=t.overflow,nn=e),e=$c(e,n.children),e.flags|=4096);return e}return i?(Ra(),i=n.fallback,m=e.mode,p=t.child,T=p.sibling,n=la(p,{mode:"hidden",children:n.children}),n.subtreeFlags=p.subtreeFlags&65011712,T!==null?i=la(T,i):(i=an(i,m,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,m=t.child.memoizedState,m===null?m=Kc(a):(p=m.cachePool,p!==null?(T=Zt._currentValue,p=p.parent!==T?{parent:T,pool:T}:p):p=Sd(),m={baseLanes:m.baseLanes|a,cachePool:p}),i.memoizedState=m,i.childLanes=Jc(t,o,a),e.memoizedState=kc,n):(Na(e),a=t.child,t=a.sibling,a=la(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=a,e.memoizedState=null,a)}function $c(t,e){return e=Or({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Or(t,e){return t=Ae(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Fc(t,e,a){return Kn(e,t.child,null,a),t=$c(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function U0(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),hc(t.return,e,a)}function Wc(t,e,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=a,u.tailMode=i)}function q0(t,e,a){var n=e.pendingProps,i=n.revealOrder,u=n.tail;if(Pt(t,e,n.children,a),n=kt.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&U0(t,a,e);else if(t.tag===19)U0(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(Z(kt,n),i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&Sr(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),Wc(e,!1,i,a,u);break;case"backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sr(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}Wc(e,!0,a,null,u);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oa(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Ua|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ql(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(c(153));if(e.child!==null){for(t=e.child,a=la(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=la(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Pc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&lr(t)))}function Pv(t,e,a){switch(e.tag){case 3:Ct(e,e.stateNode.containerInfo),Oa(e,Zt,t.memoizedState.cache),wl();break;case 27:case 5:zu(e);break;case 4:Ct(e,e.stateNode.containerInfo);break;case 10:Oa(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Na(e),e.flags|=128,null):(a&e.child.childLanes)!==0?w0(t,e,a):(Na(e),t=oa(t,e,a),t!==null?t.sibling:null);Na(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(ql(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return q0(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(kt,kt.current),n)break;return null;case 22:case 23:return e.lanes=0,N0(t,e,a);case 24:Oa(e,Zt,t.memoizedState.cache)}return oa(t,e,a)}function H0(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)$t=!0;else{if(!Pc(t,a)&&(e.flags&128)===0)return $t=!1,Pv(t,e,a);$t=(t.flags&131072)!==0}else $t=!1,gt&&(e.flags&1048576)!==0&&md(e,nr,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,i=n._init;if(n=i(n._payload),e.type=n,typeof n=="function")uc(n)?(t=dn(n,t),e.tag=1,e=j0(null,e,n,t,a)):(e.tag=0,e=Zc(null,e,n,t,a));else{if(n!=null){if(i=n.$$typeof,i===et){e.tag=11,e=_0(null,e,n,t,a);break t}else if(i===W){e.tag=14,e=z0(null,e,n,t,a);break t}}throw e=fe(n)||n,Error(c(306,e,""))}}return e;case 0:return Zc(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=dn(n,e.pendingProps),j0(t,e,n,i,a);case 3:t:{if(Ct(e,e.stateNode.containerInfo),t===null)throw Error(c(387));n=e.pendingProps;var u=e.memoizedState;i=u.element,xc(t,e),Vl(e,n,null,a);var o=e.memoizedState;if(n=o.cache,Oa(e,Zt,n),n!==u.cache&&yc(e,[Zt],a,!0),Gl(),n=o.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=C0(t,e,n,a);break t}else if(n!==i){i=je(Error(c(424)),e),Ul(i),e=C0(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ht=Ge(t.firstChild),ce=e,gt=!0,rn=null,Qe=!0,a=y0(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wl(),n===i){e=oa(t,e,a);break t}Pt(t,e,n,a)}e=e.child}return e;case 26:return Er(t,e),t===null?(a=Xm(e.type,null,e.pendingProps,null))?e.memoizedState=a:gt||(a=e.type,t=e.pendingProps,n=Yr(it.current).createElement(a),n[ne]=e,n[oe]=t,te(n,a,t),Jt(n),e.stateNode=n):e.memoizedState=Xm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return zu(e),t===null&&gt&&(n=e.stateNode=Ym(e.type,e.pendingProps,it.current),ce=e,Qe=!0,i=Ht,La(e.type)?(js=i,Ht=Ge(n.firstChild)):Ht=i),Pt(t,e,e.pendingProps.children,a),Er(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&gt&&((i=n=Ht)&&(n=_p(n,e.type,e.pendingProps,Qe),n!==null?(e.stateNode=n,ce=e,Ht=Ge(n.firstChild),Qe=!1,i=!0):i=!1),i||un(e)),zu(e),i=e.type,u=e.pendingProps,o=t!==null?t.memoizedProps:null,n=u.children,Ms(i,u)?n=null:o!==null&&Ms(i,o)&&(e.flags|=32),e.memoizedState!==null&&(i=zc(t,e,Qv,null,null,a),oi._currentValue=i),Er(t,e),Pt(t,e,n,a),e.child;case 6:return t===null&&gt&&((t=a=Ht)&&(a=zp(a,e.pendingProps,Qe),a!==null?(e.stateNode=a,ce=e,Ht=null,t=!0):t=!1),t||un(e)),null;case 13:return w0(t,e,a);case 4:return Ct(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Kn(e,null,n,a):Pt(t,e,n,a),e.child;case 11:return _0(t,e,e.type,e.pendingProps,a);case 7:return Pt(t,e,e.pendingProps,a),e.child;case 8:return Pt(t,e,e.pendingProps.children,a),e.child;case 12:return Pt(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,Oa(e,e.type,n.value),Pt(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,sn(e),i=le(i),n=n(i),e.flags|=1,Pt(t,e,n,a),e.child;case 14:return z0(t,e,e.type,e.pendingProps,a);case 15:return M0(t,e,e.type,e.pendingProps,a);case 19:return q0(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=Or(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=la(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return N0(t,e,a);case 24:return sn(e),n=le(Zt),t===null?(i=gc(),i===null&&(i=Nt,u=vc(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=a),i=u),e.memoizedState={parent:n,cache:i},Sc(e),Oa(e,Zt,i)):((t.lanes&a)!==0&&(xc(t,e),Vl(e,null,null,a),Gl()),i=t.memoizedState,u=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Oa(e,Zt,n)):(n=u.cache,Oa(e,Zt,n),n!==i.cache&&yc(e,[Zt],a,!0))),Pt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}function da(t){t.flags|=4}function Y0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!km(e)){if(e=qe.current,e!==null&&((dt&4194048)===dt?Ze!==null:(dt&62914560)!==dt&&(dt&536870912)===0||e!==Ze))throw Bl=bc,xd;t.flags|=8192}}function Tr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?vo():536870912,t.lanes|=e,Wn|=e)}function Fl(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function Iv(t,e,a){var n=e.pendingProps;switch(oc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return qt(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ca(Zt),Sa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Cl(e)?da(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,vd())),qt(e),null;case 26:return a=e.memoizedState,t===null?(da(e),a!==null?(qt(e),Y0(e,a)):(qt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(da(e),qt(e),Y0(e,a)):(qt(e),e.flags&=-16777217):(t.memoizedProps!==n&&da(e),qt(e),e.flags&=-16777217),null;case 27:qi(e),a=it.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&da(e);else{if(!n){if(e.stateNode===null)throw Error(c(166));return qt(e),null}t=I.current,Cl(e)?hd(e):(t=Ym(i,n,a),e.stateNode=t,da(e))}return qt(e),null;case 5:if(qi(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&da(e);else{if(!n){if(e.stateNode===null)throw Error(c(166));return qt(e),null}if(t=I.current,Cl(e))hd(e);else{switch(i=Yr(it.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}t[ne]=e,t[oe]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(te(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&da(e)}}return qt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&da(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(c(166));if(t=it.current,Cl(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=ce,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[ne]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Dm(t.nodeValue,a)),t||un(e)}else t=Yr(t).createTextNode(n),t[ne]=e,e.stateNode=t}return qt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Cl(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(c(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[ne]=e}else wl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;qt(e),i=!1}else i=vd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(fa(e),e):(fa(e),null)}if(fa(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var u=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==i&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Tr(e,e.updateQueue),qt(e),null;case 4:return Sa(),t===null&&Es(e.stateNode.containerInfo),qt(e),null;case 10:return ca(e.type),qt(e),null;case 19:if(K(kt),i=e.memoizedState,i===null)return qt(e),null;if(n=(e.flags&128)!==0,u=i.rendering,u===null)if(n)Fl(i,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Sr(t),u!==null){for(e.flags|=128,Fl(i,!1),t=u.updateQueue,e.updateQueue=t,Tr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)dd(a,t),a=a.sibling;return Z(kt,kt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ve()>Mr&&(e.flags|=128,n=!0,Fl(i,!1),e.lanes=4194304)}else{if(!n)if(t=Sr(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Tr(e,t),Fl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!gt)return qt(e),null}else 2*Ve()-i.renderingStartTime>Mr&&a!==536870912&&(e.flags|=128,n=!0,Fl(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ve(),e.sibling=null,t=kt.current,Z(kt,n?t&1|2:t&1),e):(qt(e),null);case 22:case 23:return fa(e),Tc(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),a=e.updateQueue,a!==null&&Tr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&K(fn),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ca(Zt),qt(e),null;case 25:return null;case 30:return null}throw Error(c(156,e.tag))}function tp(t,e){switch(oc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ca(Zt),Sa(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return qi(e),null;case 13:if(fa(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(c(340));wl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return K(kt),null;case 4:return Sa(),null;case 10:return ca(e.type),null;case 22:case 23:return fa(e),Tc(),t!==null&&K(fn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ca(Zt),null;case 25:return null;default:return null}}function L0(t,e){switch(oc(e),e.tag){case 3:ca(Zt),Sa();break;case 26:case 27:case 5:qi(e);break;case 4:Sa();break;case 13:fa(e);break;case 19:K(kt);break;case 10:ca(e.type);break;case 22:case 23:fa(e),Tc(),t!==null&&K(fn);break;case 24:ca(Zt)}}function Wl(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var u=a.create,o=a.inst;n=u(),o.destroy=n}a=a.next}while(a!==i)}}catch(m){Mt(e,e.return,m)}}function Da(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var u=i.next;n=u;do{if((n.tag&t)===t){var o=n.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,i=e;var p=a,T=m;try{T()}catch(C){Mt(i,p,C)}}}n=n.next}while(n!==u)}}catch(C){Mt(e,e.return,C)}}function B0(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{zd(e,a)}catch(n){Mt(t,t.return,n)}}}function X0(t,e,a){a.props=dn(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Mt(t,e,n)}}function Pl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){Mt(t,e,i)}}function ke(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Mt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Mt(t,e,i)}else a.current=null}function G0(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Mt(t,t.return,i)}}function Ic(t,e,a){try{var n=t.stateNode;xp(n,t.type,a,e),n[oe]=e}catch(i){Mt(t,t.return,i)}}function V0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&La(t.type)||t.tag===4}function ts(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||V0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&La(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function es(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Hr));else if(n!==4&&(n===27&&La(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(es(t,e,a),t=t.sibling;t!==null;)es(t,e,a),t=t.sibling}function _r(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&La(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(_r(t,e,a),t=t.sibling;t!==null;)_r(t,e,a),t=t.sibling}function Q0(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);te(e,n,a),e[ne]=t,e[oe]=a}catch(u){Mt(t,t.return,u)}}var ma=!1,Xt=!1,as=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function ep(t,e){if(t=t.containerInfo,_s=Qr,t=ad(t),tc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var o=0,m=-1,p=-1,T=0,C=0,U=t,_=null;e:for(;;){for(var M;U!==a||i!==0&&U.nodeType!==3||(m=o+i),U!==u||n!==0&&U.nodeType!==3||(p=o+n),U.nodeType===3&&(o+=U.nodeValue.length),(M=U.firstChild)!==null;)_=U,U=M;for(;;){if(U===t)break e;if(_===a&&++T===i&&(m=o),_===u&&++C===n&&(p=o),(M=U.nextSibling)!==null)break;U=_,_=U.parentNode}U=M}a=m===-1||p===-1?null:{start:m,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(zs={focusedElem:t,selectionRange:a},Qr=!1,Ft=e;Ft!==null;)if(e=Ft,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Ft=t;else for(;Ft!==null;){switch(e=Ft,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=e,i=u.memoizedProps,u=u.memoizedState,n=a.stateNode;try{var nt=dn(a.type,i,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(nt,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Mt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Rs(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(c(163))}if(t=e.sibling,t!==null){t.return=e.return,Ft=t;break}Ft=e.return}}function k0(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ja(t,a),n&4&&Wl(5,a);break;case 1:if(ja(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(o){Mt(a,a.return,o)}else{var i=dn(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){Mt(a,a.return,o)}}n&64&&B0(a),n&512&&Pl(a,a.return);break;case 3:if(ja(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{zd(t,e)}catch(o){Mt(a,a.return,o)}}break;case 27:e===null&&n&4&&Q0(a);case 26:case 5:ja(t,a),e===null&&n&4&&G0(a),n&512&&Pl(a,a.return);break;case 12:ja(t,a);break;case 13:ja(t,a),n&4&&$0(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=fp.bind(null,a),Mp(t,a))));break;case 22:if(n=a.memoizedState!==null||ma,!n){e=e!==null&&e.memoizedState!==null||Xt,i=ma;var u=Xt;ma=n,(Xt=e)&&!u?Ca(t,a,(a.subtreeFlags&8772)!==0):ja(t,a),ma=i,Xt=u}break;case 30:break;default:ja(t,a)}}function K0(t){var e=t.alternate;e!==null&&(t.alternate=null,K0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Uu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var wt=null,he=!1;function ha(t,e,a){for(a=a.child;a!==null;)J0(t,e,a),a=a.sibling}function J0(t,e,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(bl,a)}catch{}switch(a.tag){case 26:Xt||ke(a,e),ha(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xt||ke(a,e);var n=wt,i=he;La(a.type)&&(wt=a.stateNode,he=!1),ha(t,e,a),ui(a.stateNode),wt=n,he=i;break;case 5:Xt||ke(a,e);case 6:if(n=wt,i=he,wt=null,ha(t,e,a),wt=n,he=i,wt!==null)if(he)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(a.stateNode)}catch(u){Mt(a,e,u)}else try{wt.removeChild(a.stateNode)}catch(u){Mt(a,e,u)}break;case 18:wt!==null&&(he?(t=wt,qm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),yi(t)):qm(wt,a.stateNode));break;case 4:n=wt,i=he,wt=a.stateNode.containerInfo,he=!0,ha(t,e,a),wt=n,he=i;break;case 0:case 11:case 14:case 15:Xt||Da(2,a,e),Xt||Da(4,a,e),ha(t,e,a);break;case 1:Xt||(ke(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&X0(a,e,n)),ha(t,e,a);break;case 21:ha(t,e,a);break;case 22:Xt=(n=Xt)||a.memoizedState!==null,ha(t,e,a),Xt=n;break;default:ha(t,e,a)}}function $0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yi(t)}catch(a){Mt(e,e.return,a)}}function ap(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Z0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Z0),e;default:throw Error(c(435,t.tag))}}function ns(t,e){var a=ap(t);e.forEach(function(n){var i=op.bind(null,t,n);a.has(n)||(a.add(n),n.then(i,i))})}function Ee(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],u=t,o=e,m=o;t:for(;m!==null;){switch(m.tag){case 27:if(La(m.type)){wt=m.stateNode,he=!1;break t}break;case 5:wt=m.stateNode,he=!1;break t;case 3:case 4:wt=m.stateNode.containerInfo,he=!0;break t}m=m.return}if(wt===null)throw Error(c(160));J0(u,o,i),wt=null,he=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)F0(e,t),e=e.sibling}var Xe=null;function F0(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ee(e,t),Oe(t),n&4&&(Da(3,t,t.return),Wl(3,t),Da(5,t,t.return));break;case 1:Ee(e,t),Oe(t),n&512&&(Xt||a===null||ke(a,a.return)),n&64&&ma&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Xe;if(Ee(e,t),Oe(t),n&512&&(Xt||a===null||ke(a,a.return)),n&4){var u=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":u=i.getElementsByTagName("title")[0],(!u||u[Al]||u[ne]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(n),i.head.insertBefore(u,i.querySelector("head > title"))),te(u,n,a),u[ne]=t,Jt(u),n=u;break t;case"link":var o=Qm("link","href",i).get(n+(a.href||""));if(o){for(var m=0;m<o.length;m++)if(u=o[m],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(m,1);break e}}u=i.createElement(n),te(u,n,a),i.head.appendChild(u);break;case"meta":if(o=Qm("meta","content",i).get(n+(a.content||""))){for(m=0;m<o.length;m++)if(u=o[m],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(m,1);break e}}u=i.createElement(n),te(u,n,a),i.head.appendChild(u);break;default:throw Error(c(468,n))}u[ne]=t,Jt(u),n=u}t.stateNode=n}else Zm(i,t.type,t.stateNode);else t.stateNode=Vm(i,n,t.memoizedProps);else u!==n?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,n===null?Zm(i,t.type,t.stateNode):Vm(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Ic(t,t.memoizedProps,a.memoizedProps)}break;case 27:Ee(e,t),Oe(t),n&512&&(Xt||a===null||ke(a,a.return)),a!==null&&n&4&&Ic(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Ee(e,t),Oe(t),n&512&&(Xt||a===null||ke(a,a.return)),t.flags&32){i=t.stateNode;try{Nn(i,"")}catch(M){Mt(t,t.return,M)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,Ic(t,i,a!==null?a.memoizedProps:i)),n&1024&&(as=!0);break;case 6:if(Ee(e,t),Oe(t),n&4){if(t.stateNode===null)throw Error(c(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(M){Mt(t,t.return,M)}}break;case 3:if(Xr=null,i=Xe,Xe=Lr(e.containerInfo),Ee(e,t),Xe=i,Oe(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{yi(e.containerInfo)}catch(M){Mt(t,t.return,M)}as&&(as=!1,W0(t));break;case 4:n=Xe,Xe=Lr(t.stateNode.containerInfo),Ee(e,t),Oe(t),Xe=n;break;case 12:Ee(e,t),Oe(t);break;case 13:Ee(e,t),Oe(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ss=Ve()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ns(t,n)));break;case 22:i=t.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,T=ma,C=Xt;if(ma=T||i,Xt=C||p,Ee(e,t),Xt=C,ma=T,Oe(t),n&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||p||ma||Xt||mn(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){p=a=e;try{if(u=p.stateNode,i)o=u.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=p.stateNode;var U=p.memoizedProps.style,_=U!=null&&U.hasOwnProperty("display")?U.display:null;m.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(M){Mt(p,p.return,M)}}}else if(e.tag===6){if(a===null){p=e;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(M){Mt(p,p.return,M)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ns(t,a))));break;case 19:Ee(e,t),Oe(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ns(t,n)));break;case 30:break;case 21:break;default:Ee(e,t),Oe(t)}}function Oe(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(V0(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,u=ts(t);_r(t,u,i);break;case 5:var o=a.stateNode;a.flags&32&&(Nn(o,""),a.flags&=-33);var m=ts(t);_r(t,m,o);break;case 3:case 4:var p=a.stateNode.containerInfo,T=ts(t);es(t,T,p);break;default:throw Error(c(161))}}catch(C){Mt(t,t.return,C)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function W0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;W0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ja(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)k0(t,e.alternate,e),e=e.sibling}function mn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Da(4,e,e.return),mn(e);break;case 1:ke(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&X0(e,e.return,a),mn(e);break;case 27:ui(e.stateNode);case 26:case 5:ke(e,e.return),mn(e);break;case 22:e.memoizedState===null&&mn(e);break;case 30:mn(e);break;default:mn(e)}t=t.sibling}}function Ca(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,u=e,o=u.flags;switch(u.tag){case 0:case 11:case 15:Ca(i,u,a),Wl(4,u);break;case 1:if(Ca(i,u,a),n=u,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){Mt(n,n.return,T)}if(n=u,i=n.updateQueue,i!==null){var m=n.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)_d(p[i],m)}catch(T){Mt(n,n.return,T)}}a&&o&64&&B0(u),Pl(u,u.return);break;case 27:Q0(u);case 26:case 5:Ca(i,u,a),a&&n===null&&o&4&&G0(u),Pl(u,u.return);break;case 12:Ca(i,u,a);break;case 13:Ca(i,u,a),a&&o&4&&$0(i,u);break;case 22:u.memoizedState===null&&Ca(i,u,a),Pl(u,u.return);break;case 30:break;default:Ca(i,u,a)}e=e.sibling}}function ls(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Hl(a))}function is(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Hl(t))}function Ke(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)P0(t,e,a,n),e=e.sibling}function P0(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ke(t,e,a,n),i&2048&&Wl(9,e);break;case 1:Ke(t,e,a,n);break;case 3:Ke(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Hl(t)));break;case 12:if(i&2048){Ke(t,e,a,n),t=e.stateNode;try{var u=e.memoizedProps,o=u.id,m=u.onPostCommit;typeof m=="function"&&m(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){Mt(e,e.return,p)}}else Ke(t,e,a,n);break;case 13:Ke(t,e,a,n);break;case 23:break;case 22:u=e.stateNode,o=e.alternate,e.memoizedState!==null?u._visibility&2?Ke(t,e,a,n):Il(t,e):u._visibility&2?Ke(t,e,a,n):(u._visibility|=2,Jn(t,e,a,n,(e.subtreeFlags&10256)!==0)),i&2048&&ls(o,e);break;case 24:Ke(t,e,a,n),i&2048&&is(e.alternate,e);break;default:Ke(t,e,a,n)}}function Jn(t,e,a,n,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,o=e,m=a,p=n,T=o.flags;switch(o.tag){case 0:case 11:case 15:Jn(u,o,m,p,i),Wl(8,o);break;case 23:break;case 22:var C=o.stateNode;o.memoizedState!==null?C._visibility&2?Jn(u,o,m,p,i):Il(u,o):(C._visibility|=2,Jn(u,o,m,p,i)),i&&T&2048&&ls(o.alternate,o);break;case 24:Jn(u,o,m,p,i),i&&T&2048&&is(o.alternate,o);break;default:Jn(u,o,m,p,i)}e=e.sibling}}function Il(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:Il(a,n),i&2048&&ls(n.alternate,n);break;case 24:Il(a,n),i&2048&&is(n.alternate,n);break;default:Il(a,n)}e=e.sibling}}var ti=8192;function $n(t){if(t.subtreeFlags&ti)for(t=t.child;t!==null;)I0(t),t=t.sibling}function I0(t){switch(t.tag){case 26:$n(t),t.flags&ti&&t.memoizedState!==null&&Xp(Xe,t.memoizedState,t.memoizedProps);break;case 5:$n(t);break;case 3:case 4:var e=Xe;Xe=Lr(t.stateNode.containerInfo),$n(t),Xe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=ti,ti=16777216,$n(t),ti=e):$n(t));break;default:$n(t)}}function tm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ei(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Ft=n,am(n,t)}tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)em(t),t=t.sibling}function em(t){switch(t.tag){case 0:case 11:case 15:ei(t),t.flags&2048&&Da(9,t,t.return);break;case 3:ei(t);break;case 12:ei(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,zr(t)):ei(t);break;default:ei(t)}}function zr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Ft=n,am(n,t)}tm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Da(8,e,e.return),zr(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,zr(e));break;default:zr(e)}t=t.sibling}}function am(t,e){for(;Ft!==null;){var a=Ft;switch(a.tag){case 0:case 11:case 15:Da(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Hl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ft=n;else t:for(a=t;Ft!==null;){n=Ft;var i=n.sibling,u=n.return;if(K0(n),n===a){Ft=null;break t}if(i!==null){i.return=u,Ft=i;break t}Ft=u}}}var np={getCacheForType:function(t){var e=le(Zt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},lp=typeof WeakMap=="function"?WeakMap:Map,Et=0,Nt=null,st=null,dt=0,Ot=0,Te=null,wa=!1,Fn=!1,rs=!1,ya=0,Yt=0,Ua=0,hn=0,us=0,He=0,Wn=0,ai=null,ye=null,cs=!1,ss=0,Mr=1/0,Nr=null,qa=null,It=0,Ha=null,Pn=null,In=0,fs=0,os=null,nm=null,ni=0,ds=null;function _e(){if((Et&2)!==0&&dt!==0)return dt&-dt;if(j.T!==null){var t=Bn;return t!==0?t:bs()}return bo()}function lm(){He===0&&(He=(dt&536870912)===0||gt?yo():536870912);var t=qe.current;return t!==null&&(t.flags|=32),He}function ze(t,e,a){(t===Nt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(tl(t,0),Ya(t,dt,He,!1)),xl(t,a),((Et&2)===0||t!==Nt)&&(t===Nt&&((Et&2)===0&&(hn|=a),Yt===4&&Ya(t,dt,He,!1)),Je(t))}function im(t,e,a){if((Et&6)!==0)throw Error(c(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||Sl(t,e),i=n?up(t,e):ys(t,e,!0),u=n;do{if(i===0){Fn&&!n&&Ya(t,e,0,!1);break}else{if(a=t.current.alternate,u&&!ip(a)){i=ys(t,e,!1),u=!1;continue}if(i===2){if(u=e,t.errorRecoveryDisabledLanes&u)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var m=t;i=ai;var p=m.current.memoizedState.isDehydrated;if(p&&(tl(m,o).flags|=256),o=ys(m,o,!1),o!==2){if(rs&&!p){m.errorRecoveryDisabledLanes|=u,hn|=u,i=4;break t}u=ye,ye=i,u!==null&&(ye===null?ye=u:ye.push.apply(ye,u))}i=o}if(u=!1,i!==2)continue}}if(i===1){tl(t,0),Ya(t,e,0,!0);break}t:{switch(n=t,u=i,u){case 0:case 1:throw Error(c(345));case 4:if((e&4194048)!==e)break;case 6:Ya(n,e,He,!wa);break t;case 2:ye=null;break;case 3:case 5:break;default:throw Error(c(329))}if((e&62914560)===e&&(i=ss+300-Ve(),10<i)){if(Ya(n,e,He,!wa),Bi(n,0,!0)!==0)break t;n.timeoutHandle=wm(rm.bind(null,n,a,ye,Nr,cs,e,He,hn,Wn,wa,u,2,-0,0),i);break t}rm(n,a,ye,Nr,cs,e,He,hn,Wn,wa,u,0,-0,0)}}break}while(!0);Je(t)}function rm(t,e,a,n,i,u,o,m,p,T,C,U,_,M){if(t.timeoutHandle=-1,U=e.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(fi={stylesheets:null,count:0,unsuspend:Bp},I0(e),U=Gp(),U!==null)){t.cancelPendingCommit=U(mm.bind(null,t,e,u,a,n,i,o,m,p,C,1,_,M)),Ya(t,u,o,!T);return}mm(t,e,u,a,n,i,o,m,p)}function ip(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],u=i.getSnapshot;i=i.value;try{if(!xe(u(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ya(t,e,a,n){e&=~us,e&=~hn,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var u=31-Se(i),o=1<<u;n[u]=-1,i&=~o}a!==0&&po(t,a,e)}function Rr(){return(Et&6)===0?(li(0),!1):!0}function ms(){if(st!==null){if(Ot===0)var t=st.return;else t=st,ua=cn=null,Rc(t),kn=null,Jl=0,t=st;for(;t!==null;)L0(t.alternate,t),t=t.return;st=null}}function tl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ep(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ms(),Nt=t,st=a=la(t.current,null),dt=e,Ot=0,Te=null,wa=!1,Fn=Sl(t,e),rs=!1,Wn=He=us=hn=Ua=Yt=0,ye=ai=null,cs=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-Se(n),u=1<<i;e|=t[i],n&=~u}return ya=e,Pi(),a}function um(t,e){ut=null,j.H=pr,e===Ll||e===ur?(e=Od(),Ot=3):e===xd?(e=Od(),Ot=4):Ot=e===T0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Te=e,st===null&&(Yt=1,Ar(t,je(e,t.current)))}function cm(){var t=j.H;return j.H=pr,t===null?pr:t}function sm(){var t=j.A;return j.A=np,t}function hs(){Yt=4,wa||(dt&4194048)!==dt&&qe.current!==null||(Fn=!0),(Ua&134217727)===0&&(hn&134217727)===0||Nt===null||Ya(Nt,dt,He,!1)}function ys(t,e,a){var n=Et;Et|=2;var i=cm(),u=sm();(Nt!==t||dt!==e)&&(Nr=null,tl(t,e)),e=!1;var o=Yt;t:do try{if(Ot!==0&&st!==null){var m=st,p=Te;switch(Ot){case 8:ms(),o=6;break t;case 3:case 2:case 9:case 6:qe.current===null&&(e=!0);var T=Ot;if(Ot=0,Te=null,el(t,m,p,T),a&&Fn){o=0;break t}break;default:T=Ot,Ot=0,Te=null,el(t,m,p,T)}}rp(),o=Yt;break}catch(C){um(t,C)}while(!0);return e&&t.shellSuspendCounter++,ua=cn=null,Et=n,j.H=i,j.A=u,st===null&&(Nt=null,dt=0,Pi()),o}function rp(){for(;st!==null;)fm(st)}function up(t,e){var a=Et;Et|=2;var n=cm(),i=sm();Nt!==t||dt!==e?(Nr=null,Mr=Ve()+500,tl(t,e)):Fn=Sl(t,e);t:do try{if(Ot!==0&&st!==null){e=st;var u=Te;e:switch(Ot){case 1:Ot=0,Te=null,el(t,e,u,1);break;case 2:case 9:if(Ad(u)){Ot=0,Te=null,om(e);break}e=function(){Ot!==2&&Ot!==9||Nt!==t||(Ot=7),Je(t)},u.then(e,e);break t;case 3:Ot=7;break t;case 4:Ot=5;break t;case 7:Ad(u)?(Ot=0,Te=null,om(e)):(Ot=0,Te=null,el(t,e,u,7));break;case 5:var o=null;switch(st.tag){case 26:o=st.memoizedState;case 5:case 27:var m=st;if(!o||km(o)){Ot=0,Te=null;var p=m.sibling;if(p!==null)st=p;else{var T=m.return;T!==null?(st=T,Dr(T)):st=null}break e}}Ot=0,Te=null,el(t,e,u,5);break;case 6:Ot=0,Te=null,el(t,e,u,6);break;case 8:ms(),Yt=6;break t;default:throw Error(c(462))}}cp();break}catch(C){um(t,C)}while(!0);return ua=cn=null,j.H=n,j.A=i,Et=a,st!==null?0:(Nt=null,dt=0,Pi(),Yt)}function cp(){for(;st!==null&&!Ry();)fm(st)}function fm(t){var e=H0(t.alternate,t,ya);t.memoizedProps=t.pendingProps,e===null?Dr(t):st=e}function om(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=D0(a,e,e.pendingProps,e.type,void 0,dt);break;case 11:e=D0(a,e,e.pendingProps,e.type.render,e.ref,dt);break;case 5:Rc(e);default:L0(a,e),e=st=dd(e,ya),e=H0(a,e,ya)}t.memoizedProps=t.pendingProps,e===null?Dr(t):st=e}function el(t,e,a,n){ua=cn=null,Rc(e),kn=null,Jl=0;var i=e.return;try{if(Wv(t,i,e,a,dt)){Yt=1,Ar(t,je(a,t.current)),st=null;return}}catch(u){if(i!==null)throw st=i,u;Yt=1,Ar(t,je(a,t.current)),st=null;return}e.flags&32768?(gt||n===1?t=!0:Fn||(dt&536870912)!==0?t=!1:(wa=t=!0,(n===2||n===9||n===3||n===6)&&(n=qe.current,n!==null&&n.tag===13&&(n.flags|=16384))),dm(e,t)):Dr(e)}function Dr(t){var e=t;do{if((e.flags&32768)!==0){dm(e,wa);return}t=e.return;var a=Iv(e.alternate,e,ya);if(a!==null){st=a;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);Yt===0&&(Yt=5)}function dm(t,e){do{var a=tp(t.alternate,t);if(a!==null){a.flags&=32767,st=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){st=t;return}st=t=a}while(t!==null);Yt=6,st=null}function mm(t,e,a,n,i,u,o,m,p){t.cancelPendingCommit=null;do jr();while(It!==0);if((Et&6)!==0)throw Error(c(327));if(e!==null){if(e===t.current)throw Error(c(177));if(u=e.lanes|e.childLanes,u|=ic,By(t,a,u,o,m,p),t===Nt&&(st=Nt=null,dt=0),Pn=e,Ha=t,In=a,fs=u,os=i,nm=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,dp(Hi,function(){return gm(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=j.T,j.T=null,i=Q.p,Q.p=2,o=Et,Et|=4;try{ep(t,e,a)}finally{Et=o,Q.p=i,j.T=n}}It=1,hm(),ym(),vm()}}function hm(){if(It===1){It=0;var t=Ha,e=Pn,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var n=Q.p;Q.p=2;var i=Et;Et|=4;try{F0(e,t);var u=zs,o=ad(t.containerInfo),m=u.focusedElem,p=u.selectionRange;if(o!==m&&m&&m.ownerDocument&&ed(m.ownerDocument.documentElement,m)){if(p!==null&&tc(m)){var T=p.start,C=p.end;if(C===void 0&&(C=T),"selectionStart"in m)m.selectionStart=T,m.selectionEnd=Math.min(C,m.value.length);else{var U=m.ownerDocument||document,_=U&&U.defaultView||window;if(_.getSelection){var M=_.getSelection(),nt=m.textContent.length,tt=Math.min(p.start,nt),zt=p.end===void 0?tt:Math.min(p.end,nt);!M.extend&&tt>zt&&(o=zt,zt=tt,tt=o);var A=td(m,tt),x=td(m,zt);if(A&&x&&(M.rangeCount!==1||M.anchorNode!==A.node||M.anchorOffset!==A.offset||M.focusNode!==x.node||M.focusOffset!==x.offset)){var O=U.createRange();O.setStart(A.node,A.offset),M.removeAllRanges(),tt>zt?(M.addRange(O),M.extend(x.node,x.offset)):(O.setEnd(x.node,x.offset),M.addRange(O))}}}}for(U=[],M=m;M=M.parentNode;)M.nodeType===1&&U.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<U.length;m++){var w=U[m];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}Qr=!!_s,zs=_s=null}finally{Et=i,Q.p=n,j.T=a}}t.current=e,It=2}}function ym(){if(It===2){It=0;var t=Ha,e=Pn,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var n=Q.p;Q.p=2;var i=Et;Et|=4;try{k0(t,e.alternate,e)}finally{Et=i,Q.p=n,j.T=a}}It=3}}function vm(){if(It===4||It===3){It=0,Dy();var t=Ha,e=Pn,a=In,n=nm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?It=5:(It=0,Pn=Ha=null,pm(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(qa=null),Cu(a),e=e.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(bl,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=j.T,i=Q.p,Q.p=2,j.T=null;try{for(var u=t.onRecoverableError,o=0;o<n.length;o++){var m=n[o];u(m.value,{componentStack:m.stack})}}finally{j.T=e,Q.p=i}}(In&3)!==0&&jr(),Je(t),i=t.pendingLanes,(a&4194090)!==0&&(i&42)!==0?t===ds?ni++:(ni=0,ds=t):ni=0,li(0)}}function pm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Hl(e)))}function jr(t){return hm(),ym(),vm(),gm()}function gm(){if(It!==5)return!1;var t=Ha,e=fs;fs=0;var a=Cu(In),n=j.T,i=Q.p;try{Q.p=32>a?32:a,j.T=null,a=os,os=null;var u=Ha,o=In;if(It=0,Pn=Ha=null,In=0,(Et&6)!==0)throw Error(c(331));var m=Et;if(Et|=4,em(u.current),P0(u,u.current,o,a),Et=m,li(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(bl,u)}catch{}return!0}finally{Q.p=i,j.T=n,pm(t,e)}}function bm(t,e,a){e=je(a,e),e=Qc(t.stateNode,e,2),t=za(t,e,2),t!==null&&(xl(t,2),Je(t))}function Mt(t,e,a){if(t.tag===3)bm(t,t,a);else for(;e!==null;){if(e.tag===3){bm(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(qa===null||!qa.has(n))){t=je(a,t),a=E0(2),n=za(e,a,2),n!==null&&(O0(a,n,e,t),xl(n,2),Je(n));break}}e=e.return}}function vs(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new lp;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(rs=!0,i.add(a),t=sp.bind(null,t,e,a),e.then(t,t))}function sp(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Nt===t&&(dt&a)===a&&(Yt===4||Yt===3&&(dt&62914560)===dt&&300>Ve()-ss?(Et&2)===0&&tl(t,0):us|=a,Wn===dt&&(Wn=0)),Je(t)}function Sm(t,e){e===0&&(e=vo()),t=qn(t,e),t!==null&&(xl(t,e),Je(t))}function fp(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Sm(t,a)}function op(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(e),Sm(t,a)}function dp(t,e){return Nu(t,e)}var Cr=null,al=null,ps=!1,wr=!1,gs=!1,yn=0;function Je(t){t!==al&&t.next===null&&(al===null?Cr=al=t:al=al.next=t),wr=!0,ps||(ps=!0,hp())}function li(t,e){if(!gs&&wr){gs=!0;do for(var a=!1,n=Cr;n!==null;){if(t!==0){var i=n.pendingLanes;if(i===0)var u=0;else{var o=n.suspendedLanes,m=n.pingedLanes;u=(1<<31-Se(42|t)+1)-1,u&=i&~(o&~m),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Om(n,u))}else u=dt,u=Bi(n,n===Nt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||Sl(n,u)||(a=!0,Om(n,u));n=n.next}while(a);gs=!1}}function mp(){xm()}function xm(){wr=ps=!1;var t=0;yn!==0&&(Ap()&&(t=yn),yn=0);for(var e=Ve(),a=null,n=Cr;n!==null;){var i=n.next,u=Am(n,e);u===0?(n.next=null,a===null?Cr=i:a.next=i,i===null&&(al=a)):(a=n,(t!==0||(u&3)!==0)&&(wr=!0)),n=i}li(t)}function Am(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var o=31-Se(u),m=1<<o,p=i[o];p===-1?((m&a)===0||(m&n)!==0)&&(i[o]=Ly(m,e)):p<=e&&(t.expiredLanes|=m),u&=~m}if(e=Nt,a=dt,a=Bi(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Ru(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Sl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&Ru(n),Cu(a)){case 2:case 8:a=mo;break;case 32:a=Hi;break;case 268435456:a=ho;break;default:a=Hi}return n=Em.bind(null,t),a=Nu(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&Ru(n),t.callbackPriority=2,t.callbackNode=null,2}function Em(t,e){if(It!==0&&It!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(jr()&&t.callbackNode!==a)return null;var n=dt;return n=Bi(t,t===Nt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(im(t,n,e),Am(t,Ve()),t.callbackNode!=null&&t.callbackNode===a?Em.bind(null,t):null)}function Om(t,e){if(jr())return null;im(t,e,!0)}function hp(){Op(function(){(Et&6)!==0?Nu(oo,mp):xm()})}function bs(){return yn===0&&(yn=yo()),yn}function Tm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zi(""+t)}function _m(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function yp(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var u=Tm((i[oe]||null).action),o=n.submitter;o&&(e=(e=o[oe]||null)?Tm(e.formAction):o.getAttribute("formAction"),e!==null&&(u=e,o=null));var m=new $i("action","action",null,n,i);t.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(yn!==0){var p=o?_m(i,o):new FormData(i);Lc(a,{pending:!0,data:p,method:i.method,action:u},null,p)}}else typeof u=="function"&&(m.preventDefault(),p=o?_m(i,o):new FormData(i),Lc(a,{pending:!0,data:p,method:i.method,action:u},u,p))},currentTarget:i}]})}}for(var Ss=0;Ss<lc.length;Ss++){var xs=lc[Ss],vp=xs.toLowerCase(),pp=xs[0].toUpperCase()+xs.slice(1);Be(vp,"on"+pp)}Be(id,"onAnimationEnd"),Be(rd,"onAnimationIteration"),Be(ud,"onAnimationStart"),Be("dblclick","onDoubleClick"),Be("focusin","onFocus"),Be("focusout","onBlur"),Be(wv,"onTransitionRun"),Be(Uv,"onTransitionStart"),Be(qv,"onTransitionCancel"),Be(cd,"onTransitionEnd"),_n("onMouseEnter",["mouseout","mouseover"]),_n("onMouseLeave",["mouseout","mouseover"]),_n("onPointerEnter",["pointerout","pointerover"]),_n("onPointerLeave",["pointerout","pointerover"]),Pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function zm(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var o=n.length-1;0<=o;o--){var m=n[o],p=m.instance,T=m.currentTarget;if(m=m.listener,p!==u&&i.isPropagationStopped())break t;u=m,i.currentTarget=T;try{u(i)}catch(C){xr(C)}i.currentTarget=null,u=p}else for(o=0;o<n.length;o++){if(m=n[o],p=m.instance,T=m.currentTarget,m=m.listener,p!==u&&i.isPropagationStopped())break t;u=m,i.currentTarget=T;try{u(i)}catch(C){xr(C)}i.currentTarget=null,u=p}}}}function ft(t,e){var a=e[wu];a===void 0&&(a=e[wu]=new Set);var n=t+"__bubble";a.has(n)||(Mm(e,t,2,!1),a.add(n))}function As(t,e,a){var n=0;e&&(n|=4),Mm(a,t,n,e)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Es(t){if(!t[Ur]){t[Ur]=!0,xo.forEach(function(a){a!=="selectionchange"&&(gp.has(a)||As(a,!1,t),As(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ur]||(e[Ur]=!0,As("selectionchange",!1,e))}}function Mm(t,e,a,n){switch(Pm(e)){case 2:var i=Zp;break;case 8:i=kp;break;default:i=Hs}a=i.bind(null,e,a,t),i=void 0,!Zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Os(t,e,a,n,i){var u=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var m=n.stateNode.containerInfo;if(m===i)break;if(o===4)for(o=n.return;o!==null;){var p=o.tag;if((p===3||p===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;m!==null;){if(o=En(m),o===null)return;if(p=o.tag,p===5||p===6||p===26||p===27){n=u=o;continue t}m=m.parentNode}}n=n.return}Uo(function(){var T=u,C=Vu(a),U=[];t:{var _=sd.get(t);if(_!==void 0){var M=$i,nt=t;switch(t){case"keypress":if(Ki(a)===0)break t;case"keydown":case"keyup":M=dv;break;case"focusin":nt="focus",M=$u;break;case"focusout":nt="blur",M=$u;break;case"beforeblur":case"afterblur":M=$u;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=yv;break;case id:case rd:case ud:M=nv;break;case cd:M=pv;break;case"scroll":case"scrollend":M=Py;break;case"wheel":M=bv;break;case"copy":case"cut":case"paste":M=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Bo;break;case"toggle":case"beforetoggle":M=xv}var tt=(e&4)!==0,zt=!tt&&(t==="scroll"||t==="scrollend"),A=tt?_!==null?_+"Capture":null:_;tt=[];for(var x=T,O;x!==null;){var w=x;if(O=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||O===null||A===null||(w=Ol(x,A),w!=null&&tt.push(ri(x,w,O))),zt)break;x=x.return}0<tt.length&&(_=new M(_,nt,null,a,C),U.push({event:_,listeners:tt}))}}if((e&7)===0){t:{if(_=t==="mouseover"||t==="pointerover",M=t==="mouseout"||t==="pointerout",_&&a!==Gu&&(nt=a.relatedTarget||a.fromElement)&&(En(nt)||nt[An]))break t;if((M||_)&&(_=C.window===C?C:(_=C.ownerDocument)?_.defaultView||_.parentWindow:window,M?(nt=a.relatedTarget||a.toElement,M=T,nt=nt?En(nt):null,nt!==null&&(zt=d(nt),tt=nt.tag,nt!==zt||tt!==5&&tt!==27&&tt!==6)&&(nt=null)):(M=null,nt=T),M!==nt)){if(tt=Yo,w="onMouseLeave",A="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Bo,w="onPointerLeave",A="onPointerEnter",x="pointer"),zt=M==null?_:El(M),O=nt==null?_:El(nt),_=new tt(w,x+"leave",M,a,C),_.target=zt,_.relatedTarget=O,w=null,En(C)===T&&(tt=new tt(A,x+"enter",nt,a,C),tt.target=O,tt.relatedTarget=zt,w=tt),zt=w,M&&nt)e:{for(tt=M,A=nt,x=0,O=tt;O;O=nl(O))x++;for(O=0,w=A;w;w=nl(w))O++;for(;0<x-O;)tt=nl(tt),x--;for(;0<O-x;)A=nl(A),O--;for(;x--;){if(tt===A||A!==null&&tt===A.alternate)break e;tt=nl(tt),A=nl(A)}tt=null}else tt=null;M!==null&&Nm(U,_,M,tt,!1),nt!==null&&zt!==null&&Nm(U,zt,nt,tt,!0)}}t:{if(_=T?El(T):window,M=_.nodeName&&_.nodeName.toLowerCase(),M==="select"||M==="input"&&_.type==="file")var J=Jo;else if(ko(_))if($o)J=Dv;else{J=Nv;var ct=Mv}else M=_.nodeName,!M||M.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?T&&Xu(T.elementType)&&(J=Jo):J=Rv;if(J&&(J=J(t,T))){Ko(U,J,a,C);break t}ct&&ct(t,_,T),t==="focusout"&&T&&_.type==="number"&&T.memoizedProps.value!=null&&Bu(_,"number",_.value)}switch(ct=T?El(T):window,t){case"focusin":(ko(ct)||ct.contentEditable==="true")&&(Cn=ct,ec=T,jl=null);break;case"focusout":jl=ec=Cn=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,nd(U,a,C);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":nd(U,a,C)}var F;if(Wu)t:{switch(t){case"compositionstart":var at="onCompositionStart";break t;case"compositionend":at="onCompositionEnd";break t;case"compositionupdate":at="onCompositionUpdate";break t}at=void 0}else jn?Qo(t,a)&&(at="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Xo&&a.locale!=="ko"&&(jn||at!=="onCompositionStart"?at==="onCompositionEnd"&&jn&&(F=qo()):(Ea=C,ku="value"in Ea?Ea.value:Ea.textContent,jn=!0)),ct=qr(T,at),0<ct.length&&(at=new Lo(at,t,null,a,C),U.push({event:at,listeners:ct}),F?at.data=F:(F=Zo(a),F!==null&&(at.data=F)))),(F=Ev?Ov(t,a):Tv(t,a))&&(at=qr(T,"onBeforeInput"),0<at.length&&(ct=new Lo("onBeforeInput","beforeinput",null,a,C),U.push({event:ct,listeners:at}),ct.data=F)),yp(U,t,T,a,C)}zm(U,e)})}function ri(t,e,a){return{instance:t,listener:e,currentTarget:a}}function qr(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=Ol(t,a),i!=null&&n.unshift(ri(t,i,u)),i=Ol(t,e),i!=null&&n.push(ri(t,i,u))),t.tag===3)return n;t=t.return}return[]}function nl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Nm(t,e,a,n,i){for(var u=e._reactName,o=[];a!==null&&a!==n;){var m=a,p=m.alternate,T=m.stateNode;if(m=m.tag,p!==null&&p===n)break;m!==5&&m!==26&&m!==27||T===null||(p=T,i?(T=Ol(a,u),T!=null&&o.unshift(ri(a,T,p))):i||(T=Ol(a,u),T!=null&&o.push(ri(a,T,p)))),a=a.return}o.length!==0&&t.push({event:e,listeners:o})}var bp=/\r\n?/g,Sp=/\u0000|\uFFFD/g;function Rm(t){return(typeof t=="string"?t:""+t).replace(bp,`
`).replace(Sp,"")}function Dm(t,e){return e=Rm(e),Rm(t)===e}function Hr(){}function _t(t,e,a,n,i,u){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Nn(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Nn(t,""+n);break;case"className":Gi(t,"class",n);break;case"tabIndex":Gi(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Gi(t,a,n);break;case"style":Co(t,n,u);break;case"data":if(e!=="object"){Gi(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Zi(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(e!=="input"&&_t(t,e,"name",i.name,i,null),_t(t,e,"formEncType",i.formEncType,i,null),_t(t,e,"formMethod",i.formMethod,i,null),_t(t,e,"formTarget",i.formTarget,i,null)):(_t(t,e,"encType",i.encType,i,null),_t(t,e,"method",i.method,i,null),_t(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Zi(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=Hr);break;case"onScroll":n!=null&&ft("scroll",t);break;case"onScrollEnd":n!=null&&ft("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=Zi(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":ft("beforetoggle",t),ft("toggle",t),Xi(t,"popover",n);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Xi(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fy.get(a)||a,Xi(t,a,n))}}function Ts(t,e,a,n,i,u){switch(a){case"style":Co(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Nn(t,n):(typeof n=="number"||typeof n=="bigint")&&Nn(t,""+n);break;case"onScroll":n!=null&&ft("scroll",t);break;case"onScrollEnd":n!=null&&ft("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Hr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ao.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),u=t[oe]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(e,u,i),typeof n=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Xi(t,a,n)}}}function te(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",t),ft("load",t);var n=!1,i=!1,u;for(u in a)if(a.hasOwnProperty(u)){var o=a[u];if(o!=null)switch(u){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:_t(t,e,u,o,a,null)}}i&&_t(t,e,"srcSet",a.srcSet,a,null),n&&_t(t,e,"src",a.src,a,null);return;case"input":ft("invalid",t);var m=u=o=i=null,p=null,T=null;for(n in a)if(a.hasOwnProperty(n)){var C=a[n];if(C!=null)switch(n){case"name":i=C;break;case"type":o=C;break;case"checked":p=C;break;case"defaultChecked":T=C;break;case"value":u=C;break;case"defaultValue":m=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,e));break;default:_t(t,e,n,C,a,null)}}No(t,u,m,p,T,o,i,!1),Vi(t);return;case"select":ft("invalid",t),n=o=u=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":u=m;break;case"defaultValue":o=m;break;case"multiple":n=m;default:_t(t,e,i,m,a,null)}e=u,a=o,t.multiple=!!n,e!=null?Mn(t,!!n,e,!1):a!=null&&Mn(t,!!n,a,!0);return;case"textarea":ft("invalid",t),u=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(m=a[o],m!=null))switch(o){case"value":n=m;break;case"defaultValue":i=m;break;case"children":u=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:_t(t,e,o,m,a,null)}Do(t,n,i,u),Vi(t);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(n=a[p],n!=null))switch(p){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:_t(t,e,p,n,a,null)}return;case"dialog":ft("beforetoggle",t),ft("toggle",t),ft("cancel",t),ft("close",t);break;case"iframe":case"object":ft("load",t);break;case"video":case"audio":for(n=0;n<ii.length;n++)ft(ii[n],t);break;case"image":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"embed":case"source":case"link":ft("error",t),ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(n=a[T],n!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:_t(t,e,T,n,a,null)}return;default:if(Xu(e)){for(C in a)a.hasOwnProperty(C)&&(n=a[C],n!==void 0&&Ts(t,e,C,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&_t(t,e,m,n,a,null))}function xp(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,o=null,m=null,p=null,T=null,C=null;for(M in a){var U=a[M];if(a.hasOwnProperty(M)&&U!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":p=U;default:n.hasOwnProperty(M)||_t(t,e,M,null,n,U)}}for(var _ in n){var M=n[_];if(U=a[_],n.hasOwnProperty(_)&&(M!=null||U!=null))switch(_){case"type":u=M;break;case"name":i=M;break;case"checked":T=M;break;case"defaultChecked":C=M;break;case"value":o=M;break;case"defaultValue":m=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,e));break;default:M!==U&&_t(t,e,_,M,n,U)}}Lu(t,o,m,p,T,C,u,i);return;case"select":M=o=m=_=null;for(u in a)if(p=a[u],a.hasOwnProperty(u)&&p!=null)switch(u){case"value":break;case"multiple":M=p;default:n.hasOwnProperty(u)||_t(t,e,u,null,n,p)}for(i in n)if(u=n[i],p=a[i],n.hasOwnProperty(i)&&(u!=null||p!=null))switch(i){case"value":_=u;break;case"defaultValue":m=u;break;case"multiple":o=u;default:u!==p&&_t(t,e,i,u,n,p)}e=m,a=o,n=M,_!=null?Mn(t,!!a,_,!1):!!n!=!!a&&(e!=null?Mn(t,!!a,e,!0):Mn(t,!!a,a?[]:"",!1));return;case"textarea":M=_=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:_t(t,e,m,null,n,i)}for(o in n)if(i=n[o],u=a[o],n.hasOwnProperty(o)&&(i!=null||u!=null))switch(o){case"value":_=i;break;case"defaultValue":M=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==u&&_t(t,e,o,i,n,u)}Ro(t,_,M);return;case"option":for(var nt in a)if(_=a[nt],a.hasOwnProperty(nt)&&_!=null&&!n.hasOwnProperty(nt))switch(nt){case"selected":t.selected=!1;break;default:_t(t,e,nt,null,n,_)}for(p in n)if(_=n[p],M=a[p],n.hasOwnProperty(p)&&_!==M&&(_!=null||M!=null))switch(p){case"selected":t.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:_t(t,e,p,_,n,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)_=a[tt],a.hasOwnProperty(tt)&&_!=null&&!n.hasOwnProperty(tt)&&_t(t,e,tt,null,n,_);for(T in n)if(_=n[T],M=a[T],n.hasOwnProperty(T)&&_!==M&&(_!=null||M!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,e));break;default:_t(t,e,T,_,n,M)}return;default:if(Xu(e)){for(var zt in a)_=a[zt],a.hasOwnProperty(zt)&&_!==void 0&&!n.hasOwnProperty(zt)&&Ts(t,e,zt,void 0,n,_);for(C in n)_=n[C],M=a[C],!n.hasOwnProperty(C)||_===M||_===void 0&&M===void 0||Ts(t,e,C,_,n,M);return}}for(var A in a)_=a[A],a.hasOwnProperty(A)&&_!=null&&!n.hasOwnProperty(A)&&_t(t,e,A,null,n,_);for(U in n)_=n[U],M=a[U],!n.hasOwnProperty(U)||_===M||_==null&&M==null||_t(t,e,U,_,n,M)}var _s=null,zs=null;function Yr(t){return t.nodeType===9?t:t.ownerDocument}function jm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ms(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ns=null;function Ap(){var t=window.event;return t&&t.type==="popstate"?t===Ns?!1:(Ns=t,!0):(Ns=null,!1)}var wm=typeof setTimeout=="function"?setTimeout:void 0,Ep=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,Op=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(t){return Um.resolve(null).then(t).catch(Tp)}:wm;function Tp(t){setTimeout(function(){throw t})}function La(t){return t==="head"}function qm(t,e){var a=e,n=0,i=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<n&&8>n){a=n;var o=t.ownerDocument;if(a&1&&ui(o.documentElement),a&2&&ui(o.body),a&4)for(a=o.head,ui(a),o=a.firstChild;o;){var m=o.nextSibling,p=o.nodeName;o[Al]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=m}}if(i===0){t.removeChild(u),yi(e);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=u}while(a);yi(e)}function Rs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rs(a),Uu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _p(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Al])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ge(t.nextSibling),t===null)break}return null}function zp(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ge(t.nextSibling),t===null))return null;return t}function Ds(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Mp(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Ge(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var js=null;function Hm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function Ym(t,e,a){switch(e=Yr(a),t){case"html":if(t=e.documentElement,!t)throw Error(c(452));return t;case"head":if(t=e.head,!t)throw Error(c(453));return t;case"body":if(t=e.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}function ui(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Uu(t)}var Ye=new Map,Lm=new Set;function Lr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var va=Q.d;Q.d={f:Np,r:Rp,D:Dp,C:jp,L:Cp,m:wp,X:qp,S:Up,M:Hp};function Np(){var t=va.f(),e=Rr();return t||e}function Rp(t){var e=On(t);e!==null&&e.tag===5&&e.type==="form"?i0(e):va.r(t)}var ll=typeof document>"u"?null:document;function Bm(t,e,a){var n=ll;if(n&&typeof e=="string"&&e){var i=De(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Lm.has(i)||(Lm.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),te(e,"link",t),Jt(e),n.head.appendChild(e)))}}function Dp(t){va.D(t),Bm("dns-prefetch",t,null)}function jp(t,e){va.C(t,e),Bm("preconnect",t,e)}function Cp(t,e,a){va.L(t,e,a);var n=ll;if(n&&t&&e){var i='link[rel="preload"][as="'+De(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+De(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+De(a.imageSizes)+'"]')):i+='[href="'+De(t)+'"]';var u=i;switch(e){case"style":u=il(t);break;case"script":u=rl(t)}Ye.has(u)||(t=S({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Ye.set(u,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(ci(u))||e==="script"&&n.querySelector(si(u))||(e=n.createElement("link"),te(e,"link",t),Jt(e),n.head.appendChild(e)))}}function wp(t,e){va.m(t,e);var a=ll;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+De(n)+'"][href="'+De(t)+'"]',u=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=rl(t)}if(!Ye.has(u)&&(t=S({rel:"modulepreload",href:t},e),Ye.set(u,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(si(u)))return}n=a.createElement("link"),te(n,"link",t),Jt(n),a.head.appendChild(n)}}}function Up(t,e,a){va.S(t,e,a);var n=ll;if(n&&t){var i=Tn(n).hoistableStyles,u=il(t);e=e||"default";var o=i.get(u);if(!o){var m={loading:0,preload:null};if(o=n.querySelector(ci(u)))m.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Ye.get(u))&&Cs(t,a);var p=o=n.createElement("link");Jt(p),te(p,"link",t),p._p=new Promise(function(T,C){p.onload=T,p.onerror=C}),p.addEventListener("load",function(){m.loading|=1}),p.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Br(o,e,n)}o={type:"stylesheet",instance:o,count:1,state:m},i.set(u,o)}}}function qp(t,e){va.X(t,e);var a=ll;if(a&&t){var n=Tn(a).hoistableScripts,i=rl(t),u=n.get(i);u||(u=a.querySelector(si(i)),u||(t=S({src:t,async:!0},e),(e=Ye.get(i))&&ws(t,e),u=a.createElement("script"),Jt(u),te(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function Hp(t,e){va.M(t,e);var a=ll;if(a&&t){var n=Tn(a).hoistableScripts,i=rl(t),u=n.get(i);u||(u=a.querySelector(si(i)),u||(t=S({src:t,async:!0,type:"module"},e),(e=Ye.get(i))&&ws(t,e),u=a.createElement("script"),Jt(u),te(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function Xm(t,e,a,n){var i=(i=it.current)?Lr(i):null;if(!i)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=il(a.href),a=Tn(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=il(a.href);var u=Tn(i).hoistableStyles,o=u.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,o),(u=i.querySelector(ci(t)))&&!u._p&&(o.instance=u,o.state.loading=5),Ye.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ye.set(t,a),u||Yp(i,t,a,o.state))),e&&n===null)throw Error(c(528,""));return o}if(e&&n!==null)throw Error(c(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=rl(a),a=Tn(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function il(t){return'href="'+De(t)+'"'}function ci(t){return'link[rel="stylesheet"]['+t+"]"}function Gm(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function Yp(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),te(e,"link",a),Jt(e),t.head.appendChild(e))}function rl(t){return'[src="'+De(t)+'"]'}function si(t){return"script[async]"+t}function Vm(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+De(a.href)+'"]');if(n)return e.instance=n,Jt(n),n;var i=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Jt(n),te(n,"style",i),Br(n,a.precedence,t),e.instance=n;case"stylesheet":i=il(a.href);var u=t.querySelector(ci(i));if(u)return e.state.loading|=4,e.instance=u,Jt(u),u;n=Gm(a),(i=Ye.get(i))&&Cs(n,i),u=(t.ownerDocument||t).createElement("link"),Jt(u);var o=u;return o._p=new Promise(function(m,p){o.onload=m,o.onerror=p}),te(u,"link",n),e.state.loading|=4,Br(u,a.precedence,t),e.instance=u;case"script":return u=rl(a.src),(i=t.querySelector(si(u)))?(e.instance=i,Jt(i),i):(n=a,(i=Ye.get(u))&&(n=S({},a),ws(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),Jt(i),te(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Br(n,a.precedence,t));return e.instance}function Br(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,u=i,o=0;o<n.length;o++){var m=n[o];if(m.dataset.precedence===e)u=m;else if(u!==i)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Cs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ws(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Xr=null;function Qm(t,e,a){if(Xr===null){var n=new Map,i=Xr=new Map;i.set(a,n)}else i=Xr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var u=a[i];if(!(u[Al]||u[ne]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var o=u.getAttribute(e)||"";o=t+o;var m=n.get(o);m?m.push(u):n.set(o,[u])}}return n}function Zm(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Lp(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function km(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var fi=null;function Bp(){}function Xp(t,e,a){if(fi===null)throw Error(c(475));var n=fi;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=il(a.href),u=t.querySelector(ci(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Gr.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=u,Jt(u);return}u=t.ownerDocument||t,a=Gm(a),(i=Ye.get(i))&&Cs(a,i),u=u.createElement("link"),Jt(u);var o=u;o._p=new Promise(function(m,p){o.onload=m,o.onerror=p}),te(u,"link",a),e.instance=u}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Gr.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function Gp(){if(fi===null)throw Error(c(475));var t=fi;return t.stylesheets&&t.count===0&&Us(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&Us(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Gr(){if(this.count--,this.count===0){if(this.stylesheets)Us(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vr=null;function Us(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vr=new Map,e.forEach(Vp,t),Vr=null,Gr.call(t))}function Vp(t,e){if(!(e.state.loading&4)){var a=Vr.get(t);if(a)var n=a.get(null);else{a=new Map,Vr.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var o=i[u];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=e.instance,o=i.getAttribute("data-precedence"),u=a.get(o)||n,u===n&&a.set(null,i),a.set(o,i),this.count++,n=Gr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),u?u.parentNode.insertBefore(i,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var oi={$$typeof:V,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Qp(t,e,a,n,i,u,o,m){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Du(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.hiddenUpdates=Du(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Km(t,e,a,n,i,u,o,m,p,T,C,U){return t=new Qp(t,e,a,o,m,p,T,U),e=1,u===!0&&(e|=24),u=Ae(3,null,null,e),t.current=u,u.stateNode=t,e=vc(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:a,cache:e},Sc(u),t}function Jm(t){return t?(t=Hn,t):Hn}function $m(t,e,a,n,i,u){i=Jm(i),n.context===null?n.context=i:n.pendingContext=i,n=_a(e),n.payload={element:a},u=u===void 0?null:u,u!==null&&(n.callback=u),a=za(t,n,e),a!==null&&(ze(a,t,e),Xl(a,t,e))}function Fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function qs(t,e){Fm(t,e),(t=t.alternate)&&Fm(t,e)}function Wm(t){if(t.tag===13){var e=qn(t,67108864);e!==null&&ze(e,t,67108864),qs(t,67108864)}}var Qr=!0;function Zp(t,e,a,n){var i=j.T;j.T=null;var u=Q.p;try{Q.p=2,Hs(t,e,a,n)}finally{Q.p=u,j.T=i}}function kp(t,e,a,n){var i=j.T;j.T=null;var u=Q.p;try{Q.p=8,Hs(t,e,a,n)}finally{Q.p=u,j.T=i}}function Hs(t,e,a,n){if(Qr){var i=Ys(n);if(i===null)Os(t,e,n,Zr,a),Im(t,n);else if(Jp(i,t,e,a,n))n.stopPropagation();else if(Im(t,n),e&4&&-1<Kp.indexOf(t)){for(;i!==null;){var u=On(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var o=Wa(u.pendingLanes);if(o!==0){var m=u;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var p=1<<31-Se(o);m.entanglements[1]|=p,o&=~p}Je(u),(Et&6)===0&&(Mr=Ve()+500,li(0))}}break;case 13:m=qn(u,2),m!==null&&ze(m,u,2),Rr(),qs(u,2)}if(u=Ys(n),u===null&&Os(t,e,n,Zr,a),u===i)break;i=u}i!==null&&n.stopPropagation()}else Os(t,e,n,null,a)}}function Ys(t){return t=Vu(t),Ls(t)}var Zr=null;function Ls(t){if(Zr=null,t=En(t),t!==null){var e=d(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=h(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Zr=t,null}function Pm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jy()){case oo:return 2;case mo:return 8;case Hi:case Cy:return 32;case ho:return 268435456;default:return 32}default:return 32}}var Bs=!1,Ba=null,Xa=null,Ga=null,di=new Map,mi=new Map,Va=[],Kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Im(t,e){switch(t){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(e.pointerId)}}function hi(t,e,a,n,i,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:u,targetContainers:[i]},e!==null&&(e=On(e),e!==null&&Wm(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Jp(t,e,a,n,i){switch(e){case"focusin":return Ba=hi(Ba,t,e,a,n,i),!0;case"dragenter":return Xa=hi(Xa,t,e,a,n,i),!0;case"mouseover":return Ga=hi(Ga,t,e,a,n,i),!0;case"pointerover":var u=i.pointerId;return di.set(u,hi(di.get(u)||null,t,e,a,n,i)),!0;case"gotpointercapture":return u=i.pointerId,mi.set(u,hi(mi.get(u)||null,t,e,a,n,i)),!0}return!1}function t1(t){var e=En(t.target);if(e!==null){var a=d(e);if(a!==null){if(e=a.tag,e===13){if(e=h(a),e!==null){t.blockedOn=e,Xy(t.priority,function(){if(a.tag===13){var n=_e();n=ju(n);var i=qn(a,n);i!==null&&ze(i,a,n),qs(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Ys(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);Gu=n,a.target.dispatchEvent(n),Gu=null}else return e=On(a),e!==null&&Wm(e),t.blockedOn=a,!1;e.shift()}return!0}function e1(t,e,a){kr(t)&&a.delete(e)}function $p(){Bs=!1,Ba!==null&&kr(Ba)&&(Ba=null),Xa!==null&&kr(Xa)&&(Xa=null),Ga!==null&&kr(Ga)&&(Ga=null),di.forEach(e1),mi.forEach(e1)}function Kr(t,e){t.blockedOn===e&&(t.blockedOn=null,Bs||(Bs=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,$p)))}var Jr=null;function a1(t){Jr!==t&&(Jr=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Jr===t&&(Jr=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(Ls(n||a)===null)continue;break}var u=On(a);u!==null&&(t.splice(e,3),e-=3,Lc(u,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function yi(t){function e(p){return Kr(p,t)}Ba!==null&&Kr(Ba,t),Xa!==null&&Kr(Xa,t),Ga!==null&&Kr(Ga,t),di.forEach(e),mi.forEach(e);for(var a=0;a<Va.length;a++){var n=Va[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)t1(a),a.blockedOn===null&&Va.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],u=a[n+1],o=i[oe]||null;if(typeof u=="function")o||a1(a);else if(o){var m=null;if(u&&u.hasAttribute("formAction")){if(i=u,o=u[oe]||null)m=o.formAction;else if(Ls(i)!==null)continue}else m=o.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),a1(a)}}}function Xs(t){this._internalRoot=t}$r.prototype.render=Xs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(c(409));var a=e.current,n=_e();$m(a,n,t,e,null,null)},$r.prototype.unmount=Xs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$m(t.current,2,null,t,null,null),Rr(),e[An]=null}};function $r(t){this._internalRoot=t}$r.prototype.unstable_scheduleHydration=function(t){if(t){var e=bo();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Va.length&&e!==0&&e<Va[a].priority;a++);Va.splice(a,0,t),a===0&&t1(t)}};var n1=r.version;if(n1!=="19.1.0")throw Error(c(527,n1,"19.1.0"));Q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=v(e),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var Fp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{bl=Fr.inject(Fp),be=Fr}catch{}}return pi.createRoot=function(t,e){if(!f(t))throw Error(c(299));var a=!1,n="",i=b0,u=S0,o=x0,m=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(m=e.unstable_transitionCallbacks)),e=Km(t,1,!1,null,null,a,n,i,u,o,m,null),t[An]=e.current,Es(t),new Xs(e)},pi.hydrateRoot=function(t,e,a){if(!f(t))throw Error(c(299));var n=!1,i="",u=b0,o=S0,m=x0,p=null,T=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(p=a.unstable_transitionCallbacks),a.formState!==void 0&&(T=a.formState)),e=Km(t,1,!0,e,a??null,n,i,u,o,m,p,T),e.context=Jm(null),a=e.current,n=_e(),n=ju(n),i=_a(n),i.callback=null,za(a,i,n),a=n,e.current.lanes=a,xl(e,a),Je(e),t[An]=e.current,Es(t),new $r(e)},pi.version="19.1.0",pi}var h1;function rg(){if(h1)return Qs.exports;h1=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Qs.exports=ig(),Qs.exports}var ug=rg();/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function vf(l){return typeof window.Node=="object"?l instanceof window.Node:l!==null&&typeof l=="object"&&typeof l.nodeType=="number"&&typeof l.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function cg(l){var r=Object.prototype.toString.call(l),s=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?l instanceof window.NodeList:l!==null&&typeof l=="object"&&typeof l.length=="number"&&s.test(r)&&(l.length===0||vf(l[0]))}/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function Ti(l,r){if(r===void 0&&(r=document),l instanceof Array)return l.filter(vf);if(vf(l))return[l];if(cg(l))return Array.prototype.slice.call(l);if(typeof l=="string")try{var s=r.querySelectorAll(l);return Array.prototype.slice.call(s)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function pf(l){if(l.constructor!==Array)throw new TypeError("Expected array.");if(l.length===16)return l;if(l.length===6){var r=Fa();return r[0]=l[0],r[1]=l[1],r[4]=l[2],r[5]=l[3],r[12]=l[4],r[13]=l[5],r}throw new RangeError("Expected array with either 6 or 16 values.")}function Fa(){for(var l=[],r=0;r<16;r++)r%5==0?l.push(1):l.push(0);return l}function sg(l,r){for(var s=pf(l),c=pf(r),f=[],d=0;d<4;d++)for(var h=[s[d],s[d+4],s[d+8],s[d+12]],g=0;g<4;g++){var v=g*4,y=[c[v],c[v+1],c[v+2],c[v+3]],S=h[0]*y[0]+h[1]*y[1]+h[2]*y[2]+h[3]*y[3];f[d+v]=S}return f}function fg(l){if(typeof l=="string"){var r=l.match(/matrix(3d)?\(([^)]+)\)/);if(r){var s=r[2].split(", ").map(parseFloat);return pf(s)}}return Fa()}function og(l){var r=Math.PI/180*l,s=Fa();return s[5]=s[10]=Math.cos(r),s[6]=s[9]=Math.sin(r),s[9]*=-1,s}function dg(l){var r=Math.PI/180*l,s=Fa();return s[0]=s[10]=Math.cos(r),s[2]=s[8]=Math.sin(r),s[2]*=-1,s}function mg(l){var r=Math.PI/180*l,s=Fa();return s[0]=s[5]=Math.cos(r),s[1]=s[4]=Math.sin(r),s[4]*=-1,s}function y1(l,r){var s=Fa();return s[0]=l,s[5]=l,s}function hg(l){var r=Fa();return r[12]=l,r}function yg(l){var r=Fa();return r[13]=l,r}/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var gh=function(){var l=Date.now();return function(r){var s=Date.now();s-l>16?(l=s,r(s)):setTimeout(function(){return gh(r)},0)}}(),vg=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||gh;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var bh={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function pg(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function gg(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var gi={success:gg,failure:pg};function lu(l){return l!==null&&l instanceof Object&&(l.constructor===Object||Object.prototype.toString.call(l)==="[object Object]")}function Rt(l,r){if(lu(l)){var s=Object.keys(l);return s.forEach(function(c){return r(l[c],c,l)})}if(l instanceof Array)return l.forEach(function(c,f){return r(c,f,l)});throw new TypeError("Expected either an array or object literal.")}function vn(l){for(var r=[],s=arguments.length-1;s-- >0;)r[s]=arguments[s+1];if(this.constructor.debug&&console){var c="%cScrollReveal: "+l;r.forEach(function(f){return c+=`
 — `+f}),console.log(c,"color: #ea654b;")}}function Sh(){var l=this,r=function(){return{active:[],stale:[]}},s=r(),c=r(),f=r();try{Rt(Ti("[data-sr-id]"),function(d){var h=parseInt(d.getAttribute("data-sr-id"));s.active.push(h)})}catch(d){throw d}Rt(this.store.elements,function(d){s.active.indexOf(d.id)===-1&&s.stale.push(d.id)}),Rt(s.stale,function(d){return delete l.store.elements[d]}),Rt(this.store.elements,function(d){f.active.indexOf(d.containerId)===-1&&f.active.push(d.containerId),d.hasOwnProperty("sequence")&&c.active.indexOf(d.sequence.id)===-1&&c.active.push(d.sequence.id)}),Rt(this.store.containers,function(d){f.active.indexOf(d.id)===-1&&f.stale.push(d.id)}),Rt(f.stale,function(d){var h=l.store.containers[d].node;h.removeEventListener("scroll",l.delegate),h.removeEventListener("resize",l.delegate),delete l.store.containers[d]}),Rt(this.store.sequences,function(d){c.active.indexOf(d.id)===-1&&c.stale.push(d.id)}),Rt(c.stale,function(d){return delete l.store.sequences[d]})}var v1=function(){var l={},r=document.documentElement.style;function s(c,f){if(f===void 0&&(f=r),c&&typeof c=="string"){if(l[c])return l[c];if(typeof f[c]=="string")return l[c]=c;if(typeof f["-webkit-"+c]=="string")return l[c]="-webkit-"+c;throw new RangeError('Unable to find "'+c+'" style property.')}throw new TypeError("Expected a string.")}return s.clearCache=function(){return l={}},s}();function bg(l){var r=window.getComputedStyle(l.node),s=r.position,c=l.config,f={},d=l.node.getAttribute("style")||"",h=d.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];f.computed=h?h.map(function(ht){return ht.trim()}).join("; ")+";":"",f.generated=h.some(function(ht){return ht.match(/visibility\s?:\s?visible/i)})?f.computed:h.concat(["visibility: visible"]).map(function(ht){return ht.trim()}).join("; ")+";";var g=parseFloat(r.opacity),v=isNaN(parseFloat(c.opacity))?parseFloat(r.opacity):parseFloat(c.opacity),y={computed:g!==v?"opacity: "+g+";":"",generated:g!==v?"opacity: "+v+";":""},S=[];if(parseFloat(c.distance)){var z=c.origin==="top"||c.origin==="bottom"?"Y":"X",D=c.distance;(c.origin==="top"||c.origin==="left")&&(D=/^-/.test(D)?D.substr(1):"-"+D);var G=D.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),B=G[0],q=G[1];switch(q){case"em":D=parseInt(r.fontSize)*B;break;case"px":D=B;break;case"%":D=z==="Y"?l.node.getBoundingClientRect().height*B/100:l.node.getBoundingClientRect().width*B/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}z==="Y"?S.push(yg(D)):S.push(hg(D))}c.rotate.x&&S.push(og(c.rotate.x)),c.rotate.y&&S.push(dg(c.rotate.y)),c.rotate.z&&S.push(mg(c.rotate.z)),c.scale!==1&&(c.scale===0?S.push(y1(2e-4)):S.push(y1(c.scale)));var N={};if(S.length){N.property=v1("transform"),N.computed={raw:r[N.property],matrix:fg(r[N.property])},S.unshift(N.computed.matrix);var k=S.reduce(sg);N.generated={initial:N.property+": matrix3d("+k.join(", ")+");",final:N.property+": matrix3d("+N.computed.matrix.join(", ")+");"}}else N.generated={initial:"",final:""};var L={};if(y.generated||N.generated.initial){L.property=v1("transition"),L.computed=r[L.property],L.fragments=[];var V=c.delay,et=c.duration,R=c.easing;y.generated&&L.fragments.push({delayed:"opacity "+et/1e3+"s "+R+" "+V/1e3+"s",instant:"opacity "+et/1e3+"s "+R+" 0s"}),N.generated.initial&&L.fragments.push({delayed:N.property+" "+et/1e3+"s "+R+" "+V/1e3+"s",instant:N.property+" "+et/1e3+"s "+R+" 0s"});var lt=L.computed&&!L.computed.match(/all 0s|none 0s/);lt&&L.fragments.unshift({delayed:L.computed,instant:L.computed});var W=L.fragments.reduce(function(ht,Lt,ae){return ht.delayed+=ae===0?Lt.delayed:", "+Lt.delayed,ht.instant+=ae===0?Lt.instant:", "+Lt.instant,ht},{delayed:"",instant:""});L.generated={delayed:L.property+": "+W.delayed+";",instant:L.property+": "+W.instant+";"}}else L.generated={delayed:"",instant:""};return{inline:f,opacity:y,position:s,transform:N,transition:L}}function vl(l,r){r.split(";").forEach(function(s){var c=s.split(":"),f=c[0],d=c.slice(1);f&&d&&(l.style[f.trim()]=d.join(":"))})}function Qf(l){var r=this,s;try{Rt(Ti(l),function(c){var f=c.getAttribute("data-sr-id");if(f!==null){s=!0;var d=r.store.elements[f];d.callbackTimer&&window.clearTimeout(d.callbackTimer.clock),vl(d.node,d.styles.inline.generated),c.removeAttribute("data-sr-id"),delete r.store.elements[f]}})}catch(c){return vn.call(this,"Clean failed.",c.message)}if(s)try{Sh.call(this)}catch(c){return vn.call(this,"Clean failed.",c.message)}}function Sg(){var l=this;Rt(this.store.elements,function(r){vl(r.node,r.styles.inline.generated),r.node.removeAttribute("data-sr-id")}),Rt(this.store.containers,function(r){var s=r.node===document.documentElement?window:r.node;s.removeEventListener("scroll",l.delegate),s.removeEventListener("resize",l.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function _i(l){for(var r=[],s=arguments.length-1;s-- >0;)r[s]=arguments[s+1];if(lu(l))return Rt(r,function(c){Rt(c,function(f,d){lu(f)?((!l[d]||!lu(l[d]))&&(l[d]={}),_i(l[d],f)):l[d]=f})}),l;throw new TypeError("Target must be an object literal.")}function fu(l){return l===void 0&&(l=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(l)}var gf=function(){var l=0;return function(){return l++}}();function xh(){var l=this;Sh.call(this),Rt(this.store.elements,function(r){var s=[r.styles.inline.generated];r.visible?(s.push(r.styles.opacity.computed),s.push(r.styles.transform.generated.final),r.revealed=!0):(s.push(r.styles.opacity.generated),s.push(r.styles.transform.generated.initial),r.revealed=!1),vl(r.node,s.filter(function(c){return c!==""}).join(" "))}),Rt(this.store.containers,function(r){var s=r.node===document.documentElement?window:r.node;s.addEventListener("scroll",l.delegate),s.addEventListener("resize",l.delegate)}),this.delegate(),this.initTimeout=null}function xi(l,r){r===void 0&&(r={});var s=r.pristine||this.pristine,c=l.config.useDelay==="always"||l.config.useDelay==="onload"&&s||l.config.useDelay==="once"&&!l.seen,f=l.visible&&!l.revealed,d=!l.visible&&l.revealed&&l.config.reset;if(r.reveal||f)return xg.call(this,l,c);if(r.reset||d)return Ag.call(this,l)}function xg(l,r){var s=[l.styles.inline.generated,l.styles.opacity.computed,l.styles.transform.generated.final];r?s.push(l.styles.transition.generated.delayed):s.push(l.styles.transition.generated.instant),l.revealed=l.seen=!0,vl(l.node,s.filter(function(c){return c!==""}).join(" ")),Ah.call(this,l,r)}function Ag(l){var r=[l.styles.inline.generated,l.styles.opacity.generated,l.styles.transform.generated.initial,l.styles.transition.generated.instant];l.revealed=!1,vl(l.node,r.filter(function(s){return s!==""}).join(" ")),Ah.call(this,l)}function Ah(l,r){var s=this,c=r?l.config.duration+l.config.delay:l.config.duration,f=l.revealed?l.config.beforeReveal:l.config.beforeReset,d=l.revealed?l.config.afterReveal:l.config.afterReset,h=0;l.callbackTimer&&(h=Date.now()-l.callbackTimer.start,window.clearTimeout(l.callbackTimer.clock)),f(l.node),l.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){d(l.node),l.callbackTimer=null,l.revealed&&!l.config.reset&&l.config.cleanup&&Qf.call(s,l.node)},c-h)}}function Eh(l,r){if(r===void 0&&(r=this.pristine),!l.visible&&l.revealed&&l.config.reset)return xi.call(this,l,{reset:!0});var s=this.store.sequences[l.sequence.id],c=l.sequence.index;if(s){var f=new p1(s,"visible",this.store),d=new p1(s,"revealed",this.store);if(s.models={visible:f,revealed:d},!d.body.length){var h=s.members[f.body[0]],g=this.store.elements[h];if(g)return Wr.call(this,s,f.body[0],-1,r),Wr.call(this,s,f.body[0],1,r),xi.call(this,g,{reveal:!0,pristine:r})}if(!s.blocked.head&&c===[].concat(d.head).pop()&&c>=[].concat(f.body).shift())return Wr.call(this,s,c,-1,r),xi.call(this,l,{reveal:!0,pristine:r});if(!s.blocked.foot&&c===[].concat(d.foot).shift()&&c<=[].concat(f.body).pop())return Wr.call(this,s,c,1,r),xi.call(this,l,{reveal:!0,pristine:r})}}function Eg(l){var r=Math.abs(l);if(!isNaN(r))this.id=gf(),this.interval=Math.max(r,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function p1(l,r,s){var c=this;this.head=[],this.body=[],this.foot=[],Rt(l.members,function(f,d){var h=s.elements[f];h&&h[r]&&c.body.push(d)}),this.body.length&&Rt(l.members,function(f,d){var h=s.elements[f];h&&!h[r]&&(d<c.body[0]?c.head.push(d):c.foot.push(d))})}function Wr(l,r,s,c){var f=this,d=["head",null,"foot"][1+s],h=l.members[r+s],g=this.store.elements[h];l.blocked[d]=!0,setTimeout(function(){l.blocked[d]=!1,g&&Eh.call(f,g,c)},l.interval)}function Oh(l,r,s){var c=this;r===void 0&&(r={}),s===void 0&&(s=!1);var f=[],d,h=r.interval||bh.interval;try{h&&(d=new Eg(h));var g=Ti(l);if(!g.length)throw new Error("Invalid reveal target.");var v=g.reduce(function(y,S){var z={},D=S.getAttribute("data-sr-id");D?(_i(z,c.store.elements[D]),vl(z.node,z.styles.inline.computed)):(z.id=gf(),z.node=S,z.seen=!1,z.revealed=!1,z.visible=!1);var G=_i({},z.config||c.defaults,r);if(!G.mobile&&fu()||!G.desktop&&!fu())return D&&Qf.call(c,z),y;var B=Ti(G.container)[0];if(!B)throw new Error("Invalid container.");if(!B.contains(S))return y;var q;return q=Og(B,f,c.store.containers),q===null&&(q=gf(),f.push({id:q,node:B})),z.config=G,z.containerId=q,z.styles=bg(z),d&&(z.sequence={id:d.id,index:d.members.length},d.members.push(z.id)),y.push(z),y},[]);Rt(v,function(y){c.store.elements[y.id]=y,y.node.setAttribute("data-sr-id",y.id)})}catch(y){return vn.call(this,"Reveal failed.",y.message)}Rt(f,function(y){c.store.containers[y.id]={id:y.id,node:y.node}}),d&&(this.store.sequences[d.id]=d),s!==!0&&(this.store.history.push({target:l,options:r}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(xh.bind(this),0))}function Og(l){for(var r=[],s=arguments.length-1;s-- >0;)r[s]=arguments[s+1];var c=null;return Rt(r,function(f){Rt(f,function(d){c===null&&d.node===l&&(c=d.id)})}),c}function Tg(){var l=this;Rt(this.store.history,function(r){Oh.call(l,r.target,r.options,!0)}),xh.call(this)}var _g=function(l){return(l>0)-(l<0)||+l},g1=Math.sign||_g;function b1(l,r){var s=r?l.node.clientHeight:l.node.offsetHeight,c=r?l.node.clientWidth:l.node.offsetWidth,f=0,d=0,h=l.node;do isNaN(h.offsetTop)||(f+=h.offsetTop),isNaN(h.offsetLeft)||(d+=h.offsetLeft),h=h.offsetParent;while(h);return{bounds:{top:f,right:d+c,bottom:f+s,left:d},height:s,width:c}}function zg(l){var r,s;return l.node===document.documentElement?(r=window.pageYOffset,s=window.pageXOffset):(r=l.node.scrollTop,s=l.node.scrollLeft),{top:r,left:s}}function Mg(l){l===void 0&&(l={});var r=this.store.containers[l.containerId];if(r){var s=Math.max(0,Math.min(1,l.config.viewFactor)),c=l.config.viewOffset,f={top:l.geometry.bounds.top+l.geometry.height*s,right:l.geometry.bounds.right-l.geometry.width*s,bottom:l.geometry.bounds.bottom-l.geometry.height*s,left:l.geometry.bounds.left+l.geometry.width*s},d={top:r.geometry.bounds.top+r.scroll.top+c.top,right:r.geometry.bounds.right+r.scroll.left-c.right,bottom:r.geometry.bounds.bottom+r.scroll.top-c.bottom,left:r.geometry.bounds.left+r.scroll.left+c.left};return f.top<d.bottom&&f.right>d.left&&f.bottom>d.top&&f.left<d.right||l.styles.position==="fixed"}}function Ng(l,r){var s=this;l===void 0&&(l={type:"init"}),r===void 0&&(r=this.store.elements),vg(function(){var c=l.type==="init"||l.type==="resize";Rt(s.store.containers,function(f){c&&(f.geometry=b1.call(s,f,!0));var d=zg.call(s,f);f.scroll&&(f.direction={x:g1(d.left-f.scroll.left),y:g1(d.top-f.scroll.top)}),f.scroll=d}),Rt(r,function(f){(c||f.geometry===void 0)&&(f.geometry=b1.call(s,f)),f.visible=Mg.call(s,f)}),Rt(r,function(f){f.sequence?Eh.call(s,f):xi.call(s,f)}),s.pristine=!1})}function Rg(){var l=document.documentElement.style;return"transform"in l||"WebkitTransform"in l}function Dg(){var l=document.documentElement.style;return"transition"in l||"WebkitTransition"in l}var jg="4.0.9",Js,$s,Fs,Ws,Ps,Za,Is,tf;function gn(l){l===void 0&&(l={});var r=typeof this>"u"||Object.getPrototypeOf(this)!==gn.prototype;if(r)return new gn(l);if(!gn.isSupported())return vn.call(this,"Instantiation failed.","This browser is not supported."),gi.failure();var s;try{s=Za?_i({},Za,l):_i({},bh,l)}catch(f){return vn.call(this,"Invalid configuration.",f.message),gi.failure()}try{var c=Ti(s.container)[0];if(!c)throw new Error("Invalid container.")}catch(f){return vn.call(this,f.message),gi.failure()}return Za=s,!Za.mobile&&fu()||!Za.desktop&&!fu()?(vn.call(this,"This device is disabled.","desktop: "+Za.desktop,"mobile: "+Za.mobile),gi.failure()):(gi.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Js=Js||Ng.bind(this),$s=$s||Sg.bind(this),Fs=Fs||Oh.bind(this),Ws=Ws||Qf.bind(this),Ps=Ps||Tg.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Js}}),Object.defineProperty(this,"destroy",{get:function(){return $s}}),Object.defineProperty(this,"reveal",{get:function(){return Fs}}),Object.defineProperty(this,"clean",{get:function(){return Ws}}),Object.defineProperty(this,"sync",{get:function(){return Ps}}),Object.defineProperty(this,"defaults",{get:function(){return Za}}),Object.defineProperty(this,"version",{get:function(){return jg}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),tf||(tf=this))}gn.isSupported=function(){return Rg()&&Dg()};Object.defineProperty(gn,"debug",{get:function(){return Is||!1},set:function(l){return Is=typeof l=="boolean"?l:Is}});gn();const Zf=()=>{mt.useEffect(()=>{const l=gn();l.clean(".reveal-bottom, .reveal-left, .reveal-right,.reveal-child, .reveal-zoom, .reveal-fade ,.reveal-about"),l.reveal(".reveal-bottom",{origin:"bottom",distance:"40px",duration:800,viewFactor:.3,interval:100}),l.reveal(".reveal-left",{origin:"left",distance:"50px",duration:1e3,delay:100,viewFactor:.2}),l.reveal(".reveal-right",{origin:"right",distance:"60px",duration:1e3,delay:200,viewFactor:.3}),l.reveal(".reveal-about",{origin:"right",distance:"60px",duration:1e3,delay:200,viewFactor:.3}),l.reveal(".reveal-zoom",{scale:.85,duration:900,delay:300,viewFactor:.4}),l.reveal(".reveal-child",{origin:"bottom",distance:"60px",duration:2e3,interval:200,reset:!1}),l.reveal(".reveal-fade",{opacity:0,duration:800,delay:400,viewFactor:.3})},[])};var Th={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},S1=ta.createContext&&ta.createContext(Th),Cg=["attr","size","title"];function wg(l,r){if(l==null)return{};var s=Ug(l,r),c,f;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(f=0;f<d.length;f++)c=d[f],!(r.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(l,c)&&(s[c]=l[c])}return s}function Ug(l,r){if(l==null)return{};var s={};for(var c in l)if(Object.prototype.hasOwnProperty.call(l,c)){if(r.indexOf(c)>=0)continue;s[c]=l[c]}return s}function ou(){return ou=Object.assign?Object.assign.bind():function(l){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(l[c]=s[c])}return l},ou.apply(this,arguments)}function x1(l,r){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);r&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),s.push.apply(s,c)}return s}function du(l){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?x1(Object(s),!0).forEach(function(c){qg(l,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):x1(Object(s)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(s,c))})}return l}function qg(l,r,s){return r=Hg(r),r in l?Object.defineProperty(l,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[r]=s,l}function Hg(l){var r=Yg(l,"string");return typeof r=="symbol"?r:r+""}function Yg(l,r){if(typeof l!="object"||!l)return l;var s=l[Symbol.toPrimitive];if(s!==void 0){var c=s.call(l,r);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}function _h(l){return l&&l.map((r,s)=>ta.createElement(r.tag,du({key:s},r.attr),_h(r.child)))}function Le(l){return r=>ta.createElement(Lg,ou({attr:du({},l.attr)},r),_h(l.child))}function Lg(l){var r=s=>{var{attr:c,size:f,title:d}=l,h=wg(l,Cg),g=f||s.size||"1em",v;return s.className&&(v=s.className),l.className&&(v=(v?v+" ":"")+l.className),ta.createElement("svg",ou({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,c,h,{className:v,style:du(du({color:l.color||s.color},s.style),l.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),d&&ta.createElement("title",null,d),l.children)};return S1!==void 0?ta.createElement(S1.Consumer,null,s=>r(s)):r(Th)}function Bg(l){return Le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(l)}function bi(l){return Le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"},child:[]}]})(l)}function Xg(l){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"},child:[]}]})(l)}function Gg(l){return Le({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(l)}function Vg(l){return Le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(l)}function Qg(l){return Le({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(l)}function Zg(l){return Le({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(l)}var ul={},A1;function kg(){if(A1)return ul;A1=1,Object.defineProperty(ul,"__esModule",{value:!0});var l=ph(),r=pu(),s=function(){return s=Object.assign||function(v){for(var y,S=1,z=arguments.length;S<z;S++)for(var D in y=arguments[S])Object.prototype.hasOwnProperty.call(y,D)&&(v[D]=y[D]);return v},s.apply(this,arguments)};function c(v,y){var S,z;switch(y.type){case"TYPE":return s(s({},v),{speed:y.speed,text:(S=y.payload)===null||S===void 0?void 0:S.substring(0,v.text.length+1)});case"DELAY":return s(s({},v),{speed:y.payload});case"DELETE":return s(s({},v),{speed:y.speed,text:(z=y.payload)===null||z===void 0?void 0:z.substring(0,v.text.length-1)});case"COUNT":return s(s({},v),{count:v.count+1});default:return v}}var f=function(v){var y=v.words,S=y===void 0?["Hello World!","This is","a simple Typewriter"]:y,z=v.loop,D=z===void 0?1:z,G=v.typeSpeed,B=G===void 0?80:G,q=v.deleteSpeed,N=q===void 0?50:q,k=v.delaySpeed,L=k===void 0?1500:k,V=v.onLoopDone,et=v.onType,R=v.onDelete,lt=v.onDelay,W=r.useReducer(c,{speed:B,text:"",count:0}),ht=W[0],Lt=ht.speed,ae=ht.text,se=ht.count,Ut=W[1],pe=r.useRef(0),fe=r.useRef(!1),jt=r.useRef(!1),j=r.useRef(!1),Q=r.useRef(!1),P=r.useCallback(function(){var yt=se%S.length,b=S[yt];jt.current?(Ut({type:"DELETE",payload:b,speed:N}),ae===""&&(jt.current=!1,Ut({type:"COUNT"}))):(Ut({type:"TYPE",payload:b,speed:B}),j.current=!0,ae===b&&(Ut({type:"DELAY",payload:L}),j.current=!1,Q.current=!0,setTimeout(function(){Q.current=!1,jt.current=!0},L),D>0&&(pe.current+=1,pe.current/S.length===D&&(Q.current=!1,fe.current=!0)))),j.current&&et&&et(pe.current),jt.current&&R&&R(),Q.current&&lt&&lt()},[se,L,N,D,B,S,ae,et,R,lt]);return r.useEffect(function(){var yt=setTimeout(P,Lt);return fe.current&&clearTimeout(yt),function(){return clearTimeout(yt)}},[P,Lt]),r.useEffect(function(){V&&fe.current&&V()},[V]),[ae,{isType:j.current,isDelay:Q.current,isDelete:jt.current,isDone:fe.current}]},d="styles-module_blinkingCursor__yugAC",h="styles-module_blinking__9VXRT";(function(v,y){y===void 0&&(y={});var S=y.insertAt;if(typeof document<"u"){var z=document.head||document.getElementsByTagName("head")[0],D=document.createElement("style");D.type="text/css",S==="top"&&z.firstChild?z.insertBefore(D,z.firstChild):z.appendChild(D),D.styleSheet?D.styleSheet.cssText=v:D.appendChild(document.createTextNode(v))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var g=r.memo(function(v){var y=v.cursorBlinking,S=y===void 0||y,z=v.cursorStyle,D=z===void 0?"|":z,G=v.cursorColor,B=G===void 0?"inherit":G;return l.jsx("span",s({style:{color:B},className:"".concat(d," ").concat(S?h:"")},{children:D}))});return ul.Cursor=g,ul.Typewriter=function(v){var y=v.words,S=y===void 0?["Hello World!","This is","a simple Typewriter"]:y,z=v.loop,D=z===void 0?1:z,G=v.typeSpeed,B=G===void 0?80:G,q=v.deleteSpeed,N=q===void 0?50:q,k=v.delaySpeed,L=k===void 0?1500:k,V=v.cursor,et=V!==void 0&&V,R=v.cursorStyle,lt=R===void 0?"|":R,W=v.cursorColor,ht=W===void 0?"inherit":W,Lt=v.cursorBlinking,ae=Lt===void 0||Lt,se=v.onLoopDone,Ut=v.onType,pe=v.onDelay,fe=v.onDelete,jt=f({words:S,loop:D,typeSpeed:B,deleteSpeed:N,delaySpeed:L,onLoopDone:se,onType:Ut,onDelay:pe,onDelete:fe})[0];return l.jsxs(l.Fragment,{children:[l.jsx("span",{children:jt}),et&&l.jsx(g,{cursorStyle:lt,cursorColor:ht,cursorBlinking:ae})]})},ul.useTypewriter=f,ul}var bf=kg();function Kg(l){if(l.sheet)return l.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===l)return document.styleSheets[r]}function Jg(l){var r=document.createElement("style");return r.setAttribute("data-emotion",l.key),l.nonce!==void 0&&r.setAttribute("nonce",l.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var $g=function(){function l(s){var c=this;this._insertTag=function(f){var d;c.tags.length===0?c.insertionPoint?d=c.insertionPoint.nextSibling:c.prepend?d=c.container.firstChild:d=c.before:d=c.tags[c.tags.length-1].nextSibling,c.container.insertBefore(f,d),c.tags.push(f)},this.isSpeedy=s.speedy===void 0?!0:s.speedy,this.tags=[],this.ctr=0,this.nonce=s.nonce,this.key=s.key,this.container=s.container,this.prepend=s.prepend,this.insertionPoint=s.insertionPoint,this.before=null}var r=l.prototype;return r.hydrate=function(c){c.forEach(this._insertTag)},r.insert=function(c){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Jg(this));var f=this.tags[this.tags.length-1];if(this.isSpeedy){var d=Kg(f);try{d.insertRule(c,d.cssRules.length)}catch{}}else f.appendChild(document.createTextNode(c));this.ctr++},r.flush=function(){this.tags.forEach(function(c){var f;return(f=c.parentNode)==null?void 0:f.removeChild(c)}),this.tags=[],this.ctr=0},l}(),re="-ms-",mu="-moz-",bt="-webkit-",zh="comm",kf="rule",Kf="decl",Fg="@import",Mh="@keyframes",Wg="@layer",Pg=Math.abs,gu=String.fromCharCode,Ig=Object.assign;function t2(l,r){return ee(l,0)^45?(((r<<2^ee(l,0))<<2^ee(l,1))<<2^ee(l,2))<<2^ee(l,3):0}function Nh(l){return l.trim()}function e2(l,r){return(l=r.exec(l))?l[0]:l}function St(l,r,s){return l.replace(r,s)}function Sf(l,r){return l.indexOf(r)}function ee(l,r){return l.charCodeAt(r)|0}function zi(l,r,s){return l.slice(r,s)}function $e(l){return l.length}function Jf(l){return l.length}function Pr(l,r){return r.push(l),l}function a2(l,r){return l.map(r).join("")}var bu=1,hl=1,Rh=0,ve=0,Qt=0,pl="";function Su(l,r,s,c,f,d,h){return{value:l,root:r,parent:s,type:c,props:f,children:d,line:bu,column:hl,length:h,return:""}}function Si(l,r){return Ig(Su("",null,null,"",null,null,0),l,{length:-l.length},r)}function n2(){return Qt}function l2(){return Qt=ve>0?ee(pl,--ve):0,hl--,Qt===10&&(hl=1,bu--),Qt}function Me(){return Qt=ve<Rh?ee(pl,ve++):0,hl++,Qt===10&&(hl=1,bu++),Qt}function ea(){return ee(pl,ve)}function iu(){return ve}function Ci(l,r){return zi(pl,l,r)}function Mi(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dh(l){return bu=hl=1,Rh=$e(pl=l),ve=0,[]}function jh(l){return pl="",l}function ru(l){return Nh(Ci(ve-1,xf(l===91?l+2:l===40?l+1:l)))}function i2(l){for(;(Qt=ea())&&Qt<33;)Me();return Mi(l)>2||Mi(Qt)>3?"":" "}function r2(l,r){for(;--r&&Me()&&!(Qt<48||Qt>102||Qt>57&&Qt<65||Qt>70&&Qt<97););return Ci(l,iu()+(r<6&&ea()==32&&Me()==32))}function xf(l){for(;Me();)switch(Qt){case l:return ve;case 34:case 39:l!==34&&l!==39&&xf(Qt);break;case 40:l===41&&xf(l);break;case 92:Me();break}return ve}function u2(l,r){for(;Me()&&l+Qt!==57;)if(l+Qt===84&&ea()===47)break;return"/*"+Ci(r,ve-1)+"*"+gu(l===47?l:Me())}function c2(l){for(;!Mi(ea());)Me();return Ci(l,ve)}function s2(l){return jh(uu("",null,null,null,[""],l=Dh(l),0,[0],l))}function uu(l,r,s,c,f,d,h,g,v){for(var y=0,S=0,z=h,D=0,G=0,B=0,q=1,N=1,k=1,L=0,V="",et=f,R=d,lt=c,W=V;N;)switch(B=L,L=Me()){case 40:if(B!=108&&ee(W,z-1)==58){Sf(W+=St(ru(L),"&","&\f"),"&\f")!=-1&&(k=-1);break}case 34:case 39:case 91:W+=ru(L);break;case 9:case 10:case 13:case 32:W+=i2(B);break;case 92:W+=r2(iu()-1,7);continue;case 47:switch(ea()){case 42:case 47:Pr(f2(u2(Me(),iu()),r,s),v);break;default:W+="/"}break;case 123*q:g[y++]=$e(W)*k;case 125*q:case 59:case 0:switch(L){case 0:case 125:N=0;case 59+S:k==-1&&(W=St(W,/\f/g,"")),G>0&&$e(W)-z&&Pr(G>32?O1(W+";",c,s,z-1):O1(St(W," ","")+";",c,s,z-2),v);break;case 59:W+=";";default:if(Pr(lt=E1(W,r,s,y,S,f,g,V,et=[],R=[],z),d),L===123)if(S===0)uu(W,r,lt,lt,et,d,z,g,R);else switch(D===99&&ee(W,3)===110?100:D){case 100:case 108:case 109:case 115:uu(l,lt,lt,c&&Pr(E1(l,lt,lt,0,0,f,g,V,f,et=[],z),R),f,R,z,g,c?et:R);break;default:uu(W,lt,lt,lt,[""],R,0,g,R)}}y=S=G=0,q=k=1,V=W="",z=h;break;case 58:z=1+$e(W),G=B;default:if(q<1){if(L==123)--q;else if(L==125&&q++==0&&l2()==125)continue}switch(W+=gu(L),L*q){case 38:k=S>0?1:(W+="\f",-1);break;case 44:g[y++]=($e(W)-1)*k,k=1;break;case 64:ea()===45&&(W+=ru(Me())),D=ea(),S=z=$e(V=W+=c2(iu())),L++;break;case 45:B===45&&$e(W)==2&&(q=0)}}return d}function E1(l,r,s,c,f,d,h,g,v,y,S){for(var z=f-1,D=f===0?d:[""],G=Jf(D),B=0,q=0,N=0;B<c;++B)for(var k=0,L=zi(l,z+1,z=Pg(q=h[B])),V=l;k<G;++k)(V=Nh(q>0?D[k]+" "+L:St(L,/&\f/g,D[k])))&&(v[N++]=V);return Su(l,r,s,f===0?kf:g,v,y,S)}function f2(l,r,s){return Su(l,r,s,zh,gu(n2()),zi(l,2,-2),0)}function O1(l,r,s,c){return Su(l,r,s,Kf,zi(l,0,c),zi(l,c+1,-1),c)}function dl(l,r){for(var s="",c=Jf(l),f=0;f<c;f++)s+=r(l[f],f,l,r)||"";return s}function o2(l,r,s,c){switch(l.type){case Wg:if(l.children.length)break;case Fg:case Kf:return l.return=l.return||l.value;case zh:return"";case Mh:return l.return=l.value+"{"+dl(l.children,c)+"}";case kf:l.value=l.props.join(",")}return $e(s=dl(l.children,c))?l.return=l.value+"{"+s+"}":""}function d2(l){var r=Jf(l);return function(s,c,f,d){for(var h="",g=0;g<r;g++)h+=l[g](s,c,f,d)||"";return h}}function m2(l){return function(r){r.root||(r=r.return)&&l(r)}}function h2(l){var r=Object.create(null);return function(s){return r[s]===void 0&&(r[s]=l(s)),r[s]}}var y2=function(r,s,c){for(var f=0,d=0;f=d,d=ea(),f===38&&d===12&&(s[c]=1),!Mi(d);)Me();return Ci(r,ve)},v2=function(r,s){var c=-1,f=44;do switch(Mi(f)){case 0:f===38&&ea()===12&&(s[c]=1),r[c]+=y2(ve-1,s,c);break;case 2:r[c]+=ru(f);break;case 4:if(f===44){r[++c]=ea()===58?"&\f":"",s[c]=r[c].length;break}default:r[c]+=gu(f)}while(f=Me());return r},p2=function(r,s){return jh(v2(Dh(r),s))},T1=new WeakMap,g2=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var s=r.value,c=r.parent,f=r.column===c.column&&r.line===c.line;c.type!=="rule";)if(c=c.parent,!c)return;if(!(r.props.length===1&&s.charCodeAt(0)!==58&&!T1.get(c))&&!f){T1.set(r,!0);for(var d=[],h=p2(s,d),g=c.props,v=0,y=0;v<h.length;v++)for(var S=0;S<g.length;S++,y++)r.props[y]=d[v]?h[v].replace(/&\f/g,g[S]):g[S]+" "+h[v]}}},b2=function(r){if(r.type==="decl"){var s=r.value;s.charCodeAt(0)===108&&s.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ch(l,r){switch(t2(l,r)){case 5103:return bt+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return bt+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return bt+l+mu+l+re+l+l;case 6828:case 4268:return bt+l+re+l+l;case 6165:return bt+l+re+"flex-"+l+l;case 5187:return bt+l+St(l,/(\w+).+(:[^]+)/,bt+"box-$1$2"+re+"flex-$1$2")+l;case 5443:return bt+l+re+"flex-item-"+St(l,/flex-|-self/,"")+l;case 4675:return bt+l+re+"flex-line-pack"+St(l,/align-content|flex-|-self/,"")+l;case 5548:return bt+l+re+St(l,"shrink","negative")+l;case 5292:return bt+l+re+St(l,"basis","preferred-size")+l;case 6060:return bt+"box-"+St(l,"-grow","")+bt+l+re+St(l,"grow","positive")+l;case 4554:return bt+St(l,/([^-])(transform)/g,"$1"+bt+"$2")+l;case 6187:return St(St(St(l,/(zoom-|grab)/,bt+"$1"),/(image-set)/,bt+"$1"),l,"")+l;case 5495:case 3959:return St(l,/(image-set\([^]*)/,bt+"$1$`$1");case 4968:return St(St(l,/(.+:)(flex-)?(.*)/,bt+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+bt+l+l;case 4095:case 3583:case 4068:case 2532:return St(l,/(.+)-inline(.+)/,bt+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($e(l)-1-r>6)switch(ee(l,r+1)){case 109:if(ee(l,r+4)!==45)break;case 102:return St(l,/(.+:)(.+)-([^]+)/,"$1"+bt+"$2-$3$1"+mu+(ee(l,r+3)==108?"$3":"$2-$3"))+l;case 115:return~Sf(l,"stretch")?Ch(St(l,"stretch","fill-available"),r)+l:l}break;case 4949:if(ee(l,r+1)!==115)break;case 6444:switch(ee(l,$e(l)-3-(~Sf(l,"!important")&&10))){case 107:return St(l,":",":"+bt)+l;case 101:return St(l,/(.+:)([^;!]+)(;|!.+)?/,"$1"+bt+(ee(l,14)===45?"inline-":"")+"box$3$1"+bt+"$2$3$1"+re+"$2box$3")+l}break;case 5936:switch(ee(l,r+11)){case 114:return bt+l+re+St(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return bt+l+re+St(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return bt+l+re+St(l,/[svh]\w+-[tblr]{2}/,"lr")+l}return bt+l+re+l+l}return l}var S2=function(r,s,c,f){if(r.length>-1&&!r.return)switch(r.type){case Kf:r.return=Ch(r.value,r.length);break;case Mh:return dl([Si(r,{value:St(r.value,"@","@"+bt)})],f);case kf:if(r.length)return a2(r.props,function(d){switch(e2(d,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return dl([Si(r,{props:[St(d,/:(read-\w+)/,":"+mu+"$1")]})],f);case"::placeholder":return dl([Si(r,{props:[St(d,/:(plac\w+)/,":"+bt+"input-$1")]}),Si(r,{props:[St(d,/:(plac\w+)/,":"+mu+"$1")]}),Si(r,{props:[St(d,/:(plac\w+)/,re+"input-$1")]})],f)}return""})}},x2=[S2],A2=function(r){var s=r.key;if(s==="css"){var c=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(c,function(q){var N=q.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(q),q.setAttribute("data-s",""))})}var f=r.stylisPlugins||x2,d={},h,g=[];h=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+s+' "]'),function(q){for(var N=q.getAttribute("data-emotion").split(" "),k=1;k<N.length;k++)d[N[k]]=!0;g.push(q)});var v,y=[g2,b2];{var S,z=[o2,m2(function(q){S.insert(q)})],D=d2(y.concat(f,z)),G=function(N){return dl(s2(N),D)};v=function(N,k,L,V){S=L,G(N?N+"{"+k.styles+"}":k.styles),V&&(B.inserted[k.name]=!0)}}var B={key:s,sheet:new $g({key:s,container:h,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:d,registered:{},insert:v};return B.sheet.hydrate(g),B},ef={exports:{}},xt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _1;function E2(){if(_1)return xt;_1=1;var l=typeof Symbol=="function"&&Symbol.for,r=l?Symbol.for("react.element"):60103,s=l?Symbol.for("react.portal"):60106,c=l?Symbol.for("react.fragment"):60107,f=l?Symbol.for("react.strict_mode"):60108,d=l?Symbol.for("react.profiler"):60114,h=l?Symbol.for("react.provider"):60109,g=l?Symbol.for("react.context"):60110,v=l?Symbol.for("react.async_mode"):60111,y=l?Symbol.for("react.concurrent_mode"):60111,S=l?Symbol.for("react.forward_ref"):60112,z=l?Symbol.for("react.suspense"):60113,D=l?Symbol.for("react.suspense_list"):60120,G=l?Symbol.for("react.memo"):60115,B=l?Symbol.for("react.lazy"):60116,q=l?Symbol.for("react.block"):60121,N=l?Symbol.for("react.fundamental"):60117,k=l?Symbol.for("react.responder"):60118,L=l?Symbol.for("react.scope"):60119;function V(R){if(typeof R=="object"&&R!==null){var lt=R.$$typeof;switch(lt){case r:switch(R=R.type,R){case v:case y:case c:case d:case f:case z:return R;default:switch(R=R&&R.$$typeof,R){case g:case S:case B:case G:case h:return R;default:return lt}}case s:return lt}}}function et(R){return V(R)===y}return xt.AsyncMode=v,xt.ConcurrentMode=y,xt.ContextConsumer=g,xt.ContextProvider=h,xt.Element=r,xt.ForwardRef=S,xt.Fragment=c,xt.Lazy=B,xt.Memo=G,xt.Portal=s,xt.Profiler=d,xt.StrictMode=f,xt.Suspense=z,xt.isAsyncMode=function(R){return et(R)||V(R)===v},xt.isConcurrentMode=et,xt.isContextConsumer=function(R){return V(R)===g},xt.isContextProvider=function(R){return V(R)===h},xt.isElement=function(R){return typeof R=="object"&&R!==null&&R.$$typeof===r},xt.isForwardRef=function(R){return V(R)===S},xt.isFragment=function(R){return V(R)===c},xt.isLazy=function(R){return V(R)===B},xt.isMemo=function(R){return V(R)===G},xt.isPortal=function(R){return V(R)===s},xt.isProfiler=function(R){return V(R)===d},xt.isStrictMode=function(R){return V(R)===f},xt.isSuspense=function(R){return V(R)===z},xt.isValidElementType=function(R){return typeof R=="string"||typeof R=="function"||R===c||R===y||R===d||R===f||R===z||R===D||typeof R=="object"&&R!==null&&(R.$$typeof===B||R.$$typeof===G||R.$$typeof===h||R.$$typeof===g||R.$$typeof===S||R.$$typeof===N||R.$$typeof===k||R.$$typeof===L||R.$$typeof===q)},xt.typeOf=V,xt}var z1;function O2(){return z1||(z1=1,ef.exports=E2()),ef.exports}var af,M1;function T2(){if(M1)return af;M1=1;var l=O2(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};d[l.ForwardRef]=c,d[l.Memo]=f;function h(B){return l.isMemo(B)?f:d[B.$$typeof]||r}var g=Object.defineProperty,v=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,S=Object.getOwnPropertyDescriptor,z=Object.getPrototypeOf,D=Object.prototype;function G(B,q,N){if(typeof q!="string"){if(D){var k=z(q);k&&k!==D&&G(B,k,N)}var L=v(q);y&&(L=L.concat(y(q)));for(var V=h(B),et=h(q),R=0;R<L.length;++R){var lt=L[R];if(!s[lt]&&!(N&&N[lt])&&!(et&&et[lt])&&!(V&&V[lt])){var W=S(q,lt);try{g(B,lt,W)}catch{}}}}return B}return af=G,af}T2();var _2=!0;function wh(l,r,s){var c="";return s.split(" ").forEach(function(f){l[f]!==void 0?r.push(l[f]+";"):f&&(c+=f+" ")}),c}var $f=function(r,s,c){var f=r.key+"-"+s.name;(c===!1||_2===!1)&&r.registered[f]===void 0&&(r.registered[f]=s.styles)},Uh=function(r,s,c){$f(r,s,c);var f=r.key+"-"+s.name;if(r.inserted[s.name]===void 0){var d=s;do r.insert(s===d?"."+f:"",d,r.sheet,!0),d=d.next;while(d!==void 0)}};function z2(l){for(var r=0,s,c=0,f=l.length;f>=4;++c,f-=4)s=l.charCodeAt(c)&255|(l.charCodeAt(++c)&255)<<8|(l.charCodeAt(++c)&255)<<16|(l.charCodeAt(++c)&255)<<24,s=(s&65535)*1540483477+((s>>>16)*59797<<16),s^=s>>>24,r=(s&65535)*1540483477+((s>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(f){case 3:r^=(l.charCodeAt(c+2)&255)<<16;case 2:r^=(l.charCodeAt(c+1)&255)<<8;case 1:r^=l.charCodeAt(c)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var M2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},N2=/[A-Z]|^ms/g,R2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,qh=function(r){return r.charCodeAt(1)===45},N1=function(r){return r!=null&&typeof r!="boolean"},nf=h2(function(l){return qh(l)?l:l.replace(N2,"-$&").toLowerCase()}),R1=function(r,s){switch(r){case"animation":case"animationName":if(typeof s=="string")return s.replace(R2,function(c,f,d){return Fe={name:f,styles:d,next:Fe},f})}return M2[r]!==1&&!qh(r)&&typeof s=="number"&&s!==0?s+"px":s};function Ni(l,r,s){if(s==null)return"";var c=s;if(c.__emotion_styles!==void 0)return c;switch(typeof s){case"boolean":return"";case"object":{var f=s;if(f.anim===1)return Fe={name:f.name,styles:f.styles,next:Fe},f.name;var d=s;if(d.styles!==void 0){var h=d.next;if(h!==void 0)for(;h!==void 0;)Fe={name:h.name,styles:h.styles,next:Fe},h=h.next;var g=d.styles+";";return g}return D2(l,r,s)}case"function":{if(l!==void 0){var v=Fe,y=s(l);return Fe=v,Ni(l,r,y)}break}}var S=s;if(r==null)return S;var z=r[S];return z!==void 0?z:S}function D2(l,r,s){var c="";if(Array.isArray(s))for(var f=0;f<s.length;f++)c+=Ni(l,r,s[f])+";";else for(var d in s){var h=s[d];if(typeof h!="object"){var g=h;r!=null&&r[g]!==void 0?c+=d+"{"+r[g]+"}":N1(g)&&(c+=nf(d)+":"+R1(d,g)+";")}else if(Array.isArray(h)&&typeof h[0]=="string"&&(r==null||r[h[0]]===void 0))for(var v=0;v<h.length;v++)N1(h[v])&&(c+=nf(d)+":"+R1(d,h[v])+";");else{var y=Ni(l,r,h);switch(d){case"animation":case"animationName":{c+=nf(d)+":"+y+";";break}default:c+=d+"{"+y+"}"}}}return c}var D1=/label:\s*([^\s;{]+)\s*(;|$)/g,Fe;function Ff(l,r,s){if(l.length===1&&typeof l[0]=="object"&&l[0]!==null&&l[0].styles!==void 0)return l[0];var c=!0,f="";Fe=void 0;var d=l[0];if(d==null||d.raw===void 0)c=!1,f+=Ni(s,r,d);else{var h=d;f+=h[0]}for(var g=1;g<l.length;g++)if(f+=Ni(s,r,l[g]),c){var v=d;f+=v[g]}D1.lastIndex=0;for(var y="",S;(S=D1.exec(f))!==null;)y+="-"+S[1];var z=z2(f)+y;return{name:z,styles:f,next:Fe}}var j2=function(r){return r()},C2=c1.useInsertionEffect?c1.useInsertionEffect:!1,Hh=C2||j2,Yh=mt.createContext(typeof HTMLElement<"u"?A2({key:"css"}):null);Yh.Provider;var Lh=function(r){return mt.forwardRef(function(s,c){var f=mt.useContext(Yh);return r(s,f,c)})},Bh=mt.createContext({}),xu={}.hasOwnProperty,Af="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Xh=function(r,s){var c={};for(var f in s)xu.call(s,f)&&(c[f]=s[f]);return c[Af]=r,c},w2=function(r){var s=r.cache,c=r.serialized,f=r.isStringTag;return $f(s,c,f),Hh(function(){return Uh(s,c,f)}),null},U2=Lh(function(l,r,s){var c=l.css;typeof c=="string"&&r.registered[c]!==void 0&&(c=r.registered[c]);var f=l[Af],d=[c],h="";typeof l.className=="string"?h=wh(r.registered,d,l.className):l.className!=null&&(h=l.className+" ");var g=Ff(d,void 0,mt.useContext(Bh));h+=r.key+"-"+g.name;var v={};for(var y in l)xu.call(l,y)&&y!=="css"&&y!==Af&&(v[y]=l[y]);return v.className=h,s&&(v.ref=s),mt.createElement(mt.Fragment,null,mt.createElement(w2,{cache:r,serialized:g,isStringTag:typeof f=="string"}),mt.createElement(f,v))}),Gh=U2,q2=E.Fragment,Kt=function(r,s,c){return xu.call(s,"css")?E.jsx(Gh,Xh(r,s),c):E.jsx(r,s,c)},j1=function(r,s){var c=arguments;if(s==null||!xu.call(s,"css"))return mt.createElement.apply(void 0,c);var f=c.length,d=new Array(f);d[0]=Gh,d[1]=Xh(r,s);for(var h=2;h<f;h++)d[h]=c[h];return mt.createElement.apply(null,d)};(function(l){var r;r||(r=l.JSX||(l.JSX={}))})(j1||(j1={}));function Vh(){for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return Ff(r)}function X(){var l=Vh.apply(void 0,arguments),r="animation-"+l.name;return{name:r,styles:"@keyframes "+r+"{"+l.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var H2=function l(r){for(var s=r.length,c=0,f="";c<s;c++){var d=r[c];if(d!=null){var h=void 0;switch(typeof d){case"boolean":break;case"object":{if(Array.isArray(d))h=l(d);else{h="";for(var g in d)d[g]&&g&&(h&&(h+=" "),h+=g)}break}default:h=d}h&&(f&&(f+=" "),f+=h)}}return f};function Y2(l,r,s){var c=[],f=wh(l,c,s);return c.length<2?s:f+r(c)}var L2=function(r){var s=r.cache,c=r.serializedArr;return Hh(function(){for(var f=0;f<c.length;f++)Uh(s,c[f],!1)}),null},lf=Lh(function(l,r){var s=[],c=function(){for(var v=arguments.length,y=new Array(v),S=0;S<v;S++)y[S]=arguments[S];var z=Ff(y,r.registered);return s.push(z),$f(r,z,!1),r.key+"-"+z.name},f=function(){for(var v=arguments.length,y=new Array(v),S=0;S<v;S++)y[S]=arguments[S];return Y2(r.registered,c,H2(y))},d={css:c,cx:f,theme:mt.useContext(Bh)},h=l.children(d);return mt.createElement(mt.Fragment,null,mt.createElement(L2,{cache:r,serializedArr:s}),h)}),B2=Object.defineProperty,X2=(l,r,s)=>r in l?B2(l,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[r]=s,Ir=(l,r,s)=>X2(l,typeof r!="symbol"?r+"":r,s),Ef=new Map,tu=new WeakMap,C1=0,G2=void 0;function V2(l){return l?(tu.has(l)||(C1+=1,tu.set(l,C1.toString())),tu.get(l)):"0"}function Q2(l){return Object.keys(l).sort().filter(r=>l[r]!==void 0).map(r=>`${r}_${r==="root"?V2(l.root):l[r]}`).toString()}function Z2(l){const r=Q2(l);let s=Ef.get(r);if(!s){const c=new Map;let f;const d=new IntersectionObserver(h=>{h.forEach(g=>{var v;const y=g.isIntersecting&&f.some(S=>g.intersectionRatio>=S);l.trackVisibility&&typeof g.isVisible>"u"&&(g.isVisible=y),(v=c.get(g.target))==null||v.forEach(S=>{S(y,g)})})},l);f=d.thresholds||(Array.isArray(l.threshold)?l.threshold:[l.threshold||0]),s={id:r,observer:d,elements:c},Ef.set(r,s)}return s}function Qh(l,r,s={},c=G2){if(typeof window.IntersectionObserver>"u"&&c!==void 0){const v=l.getBoundingClientRect();return r(c,{isIntersecting:c,target:l,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:v,intersectionRect:v,rootBounds:v}),()=>{}}const{id:f,observer:d,elements:h}=Z2(s),g=h.get(l)||[];return h.has(l)||h.set(l,g),g.push(r),d.observe(l),function(){g.splice(g.indexOf(r),1),g.length===0&&(h.delete(l),d.unobserve(l)),h.size===0&&(d.disconnect(),Ef.delete(f))}}function k2(l){return typeof l.children!="function"}var w1=class extends mt.Component{constructor(l){super(l),Ir(this,"node",null),Ir(this,"_unobserveCb",null),Ir(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),Ir(this,"handleChange",(r,s)=>{r&&this.props.triggerOnce&&this.unobserve(),k2(this.props)||this.setState({inView:r,entry:s}),this.props.onChange&&this.props.onChange(r,s)}),this.state={inView:!!l.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(l){(l.rootMargin!==this.props.rootMargin||l.root!==this.props.root||l.threshold!==this.props.threshold||l.skip!==this.props.skip||l.trackVisibility!==this.props.trackVisibility||l.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:l,root:r,rootMargin:s,trackVisibility:c,delay:f,fallbackInView:d}=this.props;this._unobserveCb=Qh(this.node,this.handleChange,{threshold:l,root:r,rootMargin:s,trackVisibility:c,delay:f},d)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:l}=this.props;if(typeof l=="function"){const{inView:G,entry:B}=this.state;return l({inView:G,entry:B,ref:this.handleNode})}const{as:r,triggerOnce:s,threshold:c,root:f,rootMargin:d,onChange:h,skip:g,trackVisibility:v,delay:y,initialInView:S,fallbackInView:z,...D}=this.props;return mt.createElement(r||"div",{ref:this.handleNode,...D},l)}};function Zh({threshold:l,delay:r,trackVisibility:s,rootMargin:c,root:f,triggerOnce:d,skip:h,initialInView:g,fallbackInView:v,onChange:y}={}){var S;const[z,D]=mt.useState(null),G=mt.useRef(y),[B,q]=mt.useState({inView:!!g,entry:void 0});G.current=y,mt.useEffect(()=>{if(h||!z)return;let V;return V=Qh(z,(et,R)=>{q({inView:et,entry:R}),G.current&&G.current(et,R),R.isIntersecting&&d&&V&&(V(),V=void 0)},{root:f,rootMargin:c,threshold:l,trackVisibility:s,delay:r},v),()=>{V&&V()}},[Array.isArray(l)?l.toString():l,z,f,c,d,h,s,v,r]);const N=(S=B.entry)==null?void 0:S.target,k=mt.useRef(void 0);!z&&N&&!d&&!h&&k.current!==N&&(k.current=N,q({inView:!!g,entry:void 0}));const L=[D,B.inView,B.entry];return L.ref=L[0],L.inView=L[1],L.entry=L[2],L}var rf={exports:{}},At={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1;function K2(){if(U1)return At;U1=1;var l=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),g=Symbol.for("react.server_context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),B;B=Symbol.for("react.module.reference");function q(N){if(typeof N=="object"&&N!==null){var k=N.$$typeof;switch(k){case l:switch(N=N.type,N){case s:case f:case c:case y:case S:return N;default:switch(N=N&&N.$$typeof,N){case g:case h:case v:case D:case z:case d:return N;default:return k}}case r:return k}}}return At.ContextConsumer=h,At.ContextProvider=d,At.Element=l,At.ForwardRef=v,At.Fragment=s,At.Lazy=D,At.Memo=z,At.Portal=r,At.Profiler=f,At.StrictMode=c,At.Suspense=y,At.SuspenseList=S,At.isAsyncMode=function(){return!1},At.isConcurrentMode=function(){return!1},At.isContextConsumer=function(N){return q(N)===h},At.isContextProvider=function(N){return q(N)===d},At.isElement=function(N){return typeof N=="object"&&N!==null&&N.$$typeof===l},At.isForwardRef=function(N){return q(N)===v},At.isFragment=function(N){return q(N)===s},At.isLazy=function(N){return q(N)===D},At.isMemo=function(N){return q(N)===z},At.isPortal=function(N){return q(N)===r},At.isProfiler=function(N){return q(N)===f},At.isStrictMode=function(N){return q(N)===c},At.isSuspense=function(N){return q(N)===y},At.isSuspenseList=function(N){return q(N)===S},At.isValidElementType=function(N){return typeof N=="string"||typeof N=="function"||N===s||N===f||N===c||N===y||N===S||N===G||typeof N=="object"&&N!==null&&(N.$$typeof===D||N.$$typeof===z||N.$$typeof===d||N.$$typeof===h||N.$$typeof===v||N.$$typeof===B||N.getModuleId!==void 0)},At.typeOf=q,At}var q1;function J2(){return q1||(q1=1,rf.exports=K2()),rf.exports}var $2=J2();X`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;X`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;X`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;X`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;X`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;X`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;X`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;X`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;X`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;X`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;X`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;X`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;X`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const F2=X`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,W2=X`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P2=X`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,I2=X`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tb=X`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wf=X`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eb=X`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ab=X`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nb=X`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lb=X`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ib=X`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rb=X`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ub=X`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function cb({duration:l=1e3,delay:r=0,timingFunction:s="ease",keyframes:c=Wf,iterationCount:f=1}){return Vh`
    animation-duration: ${l}ms;
    animation-timing-function: ${s};
    animation-delay: ${r}ms;
    animation-name: ${c};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${f};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function sb(l){return l==null}function fb(l){return typeof l=="string"||typeof l=="number"||typeof l=="boolean"}function kh(l,r){return s=>s?l():r()}function Ri(l){return kh(l,()=>null)}function Of(l){return Ri(()=>({opacity:0}))(l)}const Pf=l=>{const{cascade:r=!1,damping:s=.5,delay:c=0,duration:f=1e3,fraction:d=0,keyframes:h=Wf,triggerOnce:g=!1,className:v,style:y,childClassName:S,childStyle:z,children:D,onVisibilityChange:G}=l,B=mt.useMemo(()=>cb({keyframes:h,duration:f}),[f,h]);return sb(D)?null:fb(D)?Kt(db,{...l,animationStyles:B,children:String(D)}):$2.isFragment(D)?Kt(Kh,{...l,animationStyles:B}):Kt(q2,{children:mt.Children.map(D,(q,N)=>{if(!mt.isValidElement(q))return null;const k=c+(r?N*f*s:0);switch(q.type){case"ol":case"ul":return Kt(lf,{children:({cx:L})=>Kt(q.type,{...q.props,className:L(v,q.props.className),style:Object.assign({},y,q.props.style),children:Kt(Pf,{...l,children:q.props.children})})});case"li":return Kt(w1,{threshold:d,triggerOnce:g,onChange:G,children:({inView:L,ref:V})=>Kt(lf,{children:({cx:et})=>Kt(q.type,{...q.props,ref:V,className:et(S,q.props.className),css:Ri(()=>B)(L),style:Object.assign({},z,q.props.style,Of(!L),{animationDelay:k+"ms"})})})});default:return Kt(w1,{threshold:d,triggerOnce:g,onChange:G,children:({inView:L,ref:V})=>Kt("div",{ref:V,className:v,css:Ri(()=>B)(L),style:Object.assign({},y,Of(!L),{animationDelay:k+"ms"}),children:Kt(lf,{children:({cx:et})=>Kt(q.type,{...q.props,className:et(S,q.props.className),style:Object.assign({},z,q.props.style)})})})})}})})},ob={display:"inline-block",whiteSpace:"pre"},db=l=>{const{animationStyles:r,cascade:s=!1,damping:c=.5,delay:f=0,duration:d=1e3,fraction:h=0,triggerOnce:g=!1,className:v,style:y,children:S,onVisibilityChange:z}=l,{ref:D,inView:G}=Zh({triggerOnce:g,threshold:h,onChange:z});return kh(()=>Kt("div",{ref:D,className:v,style:Object.assign({},y,ob),children:S.split("").map((B,q)=>Kt("span",{css:Ri(()=>r)(G),style:{animationDelay:f+q*d*c+"ms"},children:B},q))}),()=>Kt(Kh,{...l,children:S}))(s)},Kh=l=>{const{animationStyles:r,fraction:s=0,triggerOnce:c=!1,className:f,style:d,children:h,onVisibilityChange:g}=l,{ref:v,inView:y}=Zh({triggerOnce:c,threshold:s,onChange:g});return Kt("div",{ref:v,className:f,css:Ri(()=>r)(y),style:Object.assign({},d,Of(!y)),children:h})};X`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;X`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;X`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;X`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;X`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;X`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;X`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;X`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;X`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;X`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const mb=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,hb=X`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,yb=X`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,vb=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,pb=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,gb=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,bb=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Sb=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,xb=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ab=X`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Eb=X`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Ob=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Tb=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function _b(l,r,s){switch(s){case"bottom-left":return r?hb:W2;case"bottom-right":return r?yb:P2;case"down":return l?r?pb:tb:r?vb:I2;case"left":return l?r?bb:eb:r?gb:Wf;case"right":return l?r?xb:nb:r?Sb:ab;case"top-left":return r?Ab:lb;case"top-right":return r?Eb:ib;case"up":return l?r?Tb:ub:r?Ob:rb;default:return r?mb:F2}}const bn=l=>{const{big:r=!1,direction:s,reverse:c=!1,...f}=l,d=mt.useMemo(()=>_b(r,c,s),[r,s,c]);return Kt(Pf,{keyframes:d,...f})};X`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;X`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;X`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;X`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;X`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;X`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;X`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;X`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;X`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;X`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;X`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;X`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;X`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;X`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;X`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;X`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;X`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;X`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;X`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;X`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;X`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;X`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;X`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;X`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;X`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;X`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const zb=X`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Mb=X`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Nb=X`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Rb=X`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Db=X`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,jb=X`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Cb=X`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,wb=X`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Ub=X`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,qb=X`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Hb(l,r){switch(r){case"down":return l?Cb:Mb;case"left":return l?wb:Nb;case"right":return l?Ub:Rb;case"up":return l?qb:Db;default:return l?jb:zb}}const sl=l=>{const{direction:r,reverse:s=!1,...c}=l,f=mt.useMemo(()=>Hb(s,r),[r,s]);return Kt(Pf,{keyframes:f,...c})},Yb=()=>{Zf();const[l]=bf.useTypewriter({words:["Developer","Designer","Photographer"],loop:{},typeSpeed:180,delaySpeed:100});return E.jsx("div",{className:"body",children:E.jsxs("div",{className:"container",children:[E.jsxs("div",{className:"left",children:[E.jsxs("h1",{className:"reveal-left",children:["Hi,",E.jsx("br",{}),"This is ",E.jsx("span",{style:{fontWeight:"bold",color:"aqua",fontSize:"70px"},children:"Harshith"})]}),E.jsxs("h2",{className:"reveal-left",children:["I'm a",E.jsx("span",{style:{fontWeight:"bold",color:"aqua",marginLeft:"20px"},children:l}),E.jsx(bf.Cursor,{})]}),E.jsxs("div",{className:"media reveal-child",children:[E.jsx("button",{onClick:()=>window.open("https://res.cloudinary.com/dwko0nqi4/image/upload/v1744475326/harshith1_cv1_page-0001_umeb9w.jpg","download"),children:"Download CV"}),E.jsx("a",{className:"social reveal-child",href:"https://www.linkedin.com/in/donthamsetty-jaya-satya-sai-harshith-b227b3286",children:E.jsx(Bg,{})}),E.jsx("a",{className:"social reveal-child",href:"https://www.facebook.com/share/1FdyFF8gDv/",children:E.jsx(Gg,{})}),E.jsx("a",{className:"social reveal-child",href:"https://www.instagram.com/itz__harshith____?igsh=MTNqd2ExZDR6amp6dg==",children:E.jsx(Vg,{})})]})]}),E.jsx("div",{className:"right reveal-right",children:E.jsx("img",{src:"https://res.cloudinary.com/dwko0nqi4/image/upload/v1746891353/edit216_qaahuz.png",className:"image"})})]})})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Lb(l,r,s){return(r=Xb(r))in l?Object.defineProperty(l,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[r]=s,l}function H1(l,r){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);r&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),s.push.apply(s,c)}return s}function Y(l){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?H1(Object(s),!0).forEach(function(c){Lb(l,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):H1(Object(s)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(s,c))})}return l}function Bb(l,r){if(typeof l!="object"||!l)return l;var s=l[Symbol.toPrimitive];if(s!==void 0){var c=s.call(l,r);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}function Xb(l){var r=Bb(l,"string");return typeof r=="symbol"?r:r+""}const Y1=()=>{};let If={},Jh={},$h=null,Fh={mark:Y1,measure:Y1};try{typeof window<"u"&&(If=window),typeof document<"u"&&(Jh=document),typeof MutationObserver<"u"&&($h=MutationObserver),typeof performance<"u"&&(Fh=performance)}catch{}const{userAgent:L1=""}=If.navigator||{},Ka=If,Dt=Jh,B1=$h,eu=Fh;Ka.document;const ba=!!Dt.documentElement&&!!Dt.head&&typeof Dt.addEventListener=="function"&&typeof Dt.createElement=="function",Wh=~L1.indexOf("MSIE")||~L1.indexOf("Trident/");var Gb=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Vb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ph={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Qb={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ih=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ue="classic",Au="duotone",Zb="sharp",kb="sharp-duotone",ty=[ue,Au,Zb,kb],Kb={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Jb={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},$b=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Fb={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Wb=["fak","fa-kit","fakd","fa-kit-duotone"],X1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Pb=["kit"],Ib={kit:{"fa-kit":"fak"}},t3=["fak","fakd"],e3={kit:{fak:"fa-kit"}},G1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},au={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},a3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],n3=["fak","fa-kit","fakd","fa-kit-duotone"],l3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},i3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},r3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Tf={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},u3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],_f=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...a3,...u3],c3=["solid","regular","light","thin","duotone","brands"],ey=[1,2,3,4,5,6,7,8,9,10],s3=ey.concat([11,12,13,14,15,16,17,18,19,20]),f3=[...Object.keys(r3),...c3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",au.GROUP,au.SWAP_OPACITY,au.PRIMARY,au.SECONDARY].concat(ey.map(l=>"".concat(l,"x"))).concat(s3.map(l=>"w-".concat(l))),o3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const pa="___FONT_AWESOME___",zf=16,ay="fa",ny="svg-inline--fa",Sn="data-fa-i2svg",Mf="data-fa-pseudo-element",d3="data-fa-pseudo-element-pending",to="data-prefix",eo="data-icon",V1="fontawesome-i2svg",m3="async",h3=["HTML","HEAD","STYLE","SCRIPT"],ly=(()=>{try{return!0}catch{return!1}})();function wi(l){return new Proxy(l,{get(r,s){return s in r?r[s]:r[ue]}})}const iy=Y({},Ph);iy[ue]=Y(Y(Y(Y({},{"fa-duotone":"duotone"}),Ph[ue]),X1.kit),X1["kit-duotone"]);const y3=wi(iy),Nf=Y({},Fb);Nf[ue]=Y(Y(Y(Y({},{duotone:"fad"}),Nf[ue]),G1.kit),G1["kit-duotone"]);const Q1=wi(Nf),Rf=Y({},Tf);Rf[ue]=Y(Y({},Rf[ue]),e3.kit);const ao=wi(Rf),Df=Y({},i3);Df[ue]=Y(Y({},Df[ue]),Ib.kit);wi(Df);const v3=Gb,ry="fa-layers-text",p3=Vb,g3=Y({},Kb);wi(g3);const b3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],uf=Qb,S3=[...Pb,...f3],Ei=Ka.FontAwesomeConfig||{};function x3(l){var r=Dt.querySelector("script["+l+"]");if(r)return r.getAttribute(l)}function A3(l){return l===""?!0:l==="false"?!1:l==="true"?!0:l}Dt&&typeof Dt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(r=>{let[s,c]=r;const f=A3(x3(s));f!=null&&(Ei[c]=f)});const uy={styleDefault:"solid",familyDefault:ue,cssPrefix:ay,replacementClass:ny,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ei.familyPrefix&&(Ei.cssPrefix=Ei.familyPrefix);const yl=Y(Y({},uy),Ei);yl.autoReplaceSvg||(yl.observeMutations=!1);const $={};Object.keys(uy).forEach(l=>{Object.defineProperty($,l,{enumerable:!0,set:function(r){yl[l]=r,Oi.forEach(s=>s($))},get:function(){return yl[l]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(l){yl.cssPrefix=l,Oi.forEach(r=>r($))},get:function(){return yl.cssPrefix}});Ka.FontAwesomeConfig=$;const Oi=[];function E3(l){return Oi.push(l),()=>{Oi.splice(Oi.indexOf(l),1)}}const ka=zf,Pe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function O3(l){if(!l||!ba)return;const r=Dt.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=l;const s=Dt.head.childNodes;let c=null;for(let f=s.length-1;f>-1;f--){const d=s[f],h=(d.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(c=d)}return Dt.head.insertBefore(r,c),l}const T3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Di(){let l=12,r="";for(;l-- >0;)r+=T3[Math.random()*62|0];return r}function gl(l){const r=[];for(let s=(l||[]).length>>>0;s--;)r[s]=l[s];return r}function no(l){return l.classList?gl(l.classList):(l.getAttribute("class")||"").split(" ").filter(r=>r)}function cy(l){return"".concat(l).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _3(l){return Object.keys(l||{}).reduce((r,s)=>r+"".concat(s,'="').concat(cy(l[s]),'" '),"").trim()}function Eu(l){return Object.keys(l||{}).reduce((r,s)=>r+"".concat(s,": ").concat(l[s].trim(),";"),"")}function lo(l){return l.size!==Pe.size||l.x!==Pe.x||l.y!==Pe.y||l.rotate!==Pe.rotate||l.flipX||l.flipY}function z3(l){let{transform:r,containerWidth:s,iconWidth:c}=l;const f={transform:"translate(".concat(s/2," 256)")},d="translate(".concat(r.x*32,", ").concat(r.y*32,") "),h="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),g="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(d," ").concat(h," ").concat(g)},y={transform:"translate(".concat(c/2*-1," -256)")};return{outer:f,inner:v,path:y}}function M3(l){let{transform:r,width:s=zf,height:c=zf,startCentered:f=!1}=l,d="";return f&&Wh?d+="translate(".concat(r.x/ka-s/2,"em, ").concat(r.y/ka-c/2,"em) "):f?d+="translate(calc(-50% + ".concat(r.x/ka,"em), calc(-50% + ").concat(r.y/ka,"em)) "):d+="translate(".concat(r.x/ka,"em, ").concat(r.y/ka,"em) "),d+="scale(".concat(r.size/ka*(r.flipX?-1:1),", ").concat(r.size/ka*(r.flipY?-1:1),") "),d+="rotate(".concat(r.rotate,"deg) "),d}var N3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function sy(){const l=ay,r=ny,s=$.cssPrefix,c=$.replacementClass;let f=N3;if(s!==l||c!==r){const d=new RegExp("\\.".concat(l,"\\-"),"g"),h=new RegExp("\\--".concat(l,"\\-"),"g"),g=new RegExp("\\.".concat(r),"g");f=f.replace(d,".".concat(s,"-")).replace(h,"--".concat(s,"-")).replace(g,".".concat(c))}return f}let Z1=!1;function cf(){$.autoAddCss&&!Z1&&(O3(sy()),Z1=!0)}var R3={mixout(){return{dom:{css:sy,insertCss:cf}}},hooks(){return{beforeDOMElementCreation(){cf()},beforeI2svg(){cf()}}}};const ga=Ka||{};ga[pa]||(ga[pa]={});ga[pa].styles||(ga[pa].styles={});ga[pa].hooks||(ga[pa].hooks={});ga[pa].shims||(ga[pa].shims=[]);var Ie=ga[pa];const fy=[],oy=function(){Dt.removeEventListener("DOMContentLoaded",oy),hu=1,fy.map(l=>l())};let hu=!1;ba&&(hu=(Dt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Dt.readyState),hu||Dt.addEventListener("DOMContentLoaded",oy));function D3(l){ba&&(hu?setTimeout(l,0):fy.push(l))}function Ui(l){const{tag:r,attributes:s={},children:c=[]}=l;return typeof l=="string"?cy(l):"<".concat(r," ").concat(_3(s),">").concat(c.map(Ui).join(""),"</").concat(r,">")}function k1(l,r,s){if(l&&l[r]&&l[r][s])return{prefix:r,iconName:s,icon:l[r][s]}}var sf=function(r,s,c,f){var d=Object.keys(r),h=d.length,g=s,v,y,S;for(c===void 0?(v=1,S=r[d[0]]):(v=0,S=c);v<h;v++)y=d[v],S=g(S,r[y],y,r);return S};function j3(l){const r=[];let s=0;const c=l.length;for(;s<c;){const f=l.charCodeAt(s++);if(f>=55296&&f<=56319&&s<c){const d=l.charCodeAt(s++);(d&64512)==56320?r.push(((f&1023)<<10)+(d&1023)+65536):(r.push(f),s--)}else r.push(f)}return r}function jf(l){const r=j3(l);return r.length===1?r[0].toString(16):null}function C3(l,r){const s=l.length;let c=l.charCodeAt(r),f;return c>=55296&&c<=56319&&s>r+1&&(f=l.charCodeAt(r+1),f>=56320&&f<=57343)?(c-55296)*1024+f-56320+65536:c}function K1(l){return Object.keys(l).reduce((r,s)=>{const c=l[s];return!!c.icon?r[c.iconName]=c.icon:r[s]=c,r},{})}function Cf(l,r){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:c=!1}=s,f=K1(r);typeof Ie.hooks.addPack=="function"&&!c?Ie.hooks.addPack(l,K1(r)):Ie.styles[l]=Y(Y({},Ie.styles[l]||{}),f),l==="fas"&&Cf("fa",r)}const{styles:ji,shims:w3}=Ie,dy=Object.keys(ao),U3=dy.reduce((l,r)=>(l[r]=Object.keys(ao[r]),l),{});let io=null,my={},hy={},yy={},vy={},py={};function q3(l){return~S3.indexOf(l)}function H3(l,r){const s=r.split("-"),c=s[0],f=s.slice(1).join("-");return c===l&&f!==""&&!q3(f)?f:null}const gy=()=>{const l=c=>sf(ji,(f,d,h)=>(f[h]=sf(d,c,{}),f),{});my=l((c,f,d)=>(f[3]&&(c[f[3]]=d),f[2]&&f[2].filter(g=>typeof g=="number").forEach(g=>{c[g.toString(16)]=d}),c)),hy=l((c,f,d)=>(c[d]=d,f[2]&&f[2].filter(g=>typeof g=="string").forEach(g=>{c[g]=d}),c)),py=l((c,f,d)=>{const h=f[2];return c[d]=d,h.forEach(g=>{c[g]=d}),c});const r="far"in ji||$.autoFetchSvg,s=sf(w3,(c,f)=>{const d=f[0];let h=f[1];const g=f[2];return h==="far"&&!r&&(h="fas"),typeof d=="string"&&(c.names[d]={prefix:h,iconName:g}),typeof d=="number"&&(c.unicodes[d.toString(16)]={prefix:h,iconName:g}),c},{names:{},unicodes:{}});yy=s.names,vy=s.unicodes,io=Ou($.styleDefault,{family:$.familyDefault})};E3(l=>{io=Ou(l.styleDefault,{family:$.familyDefault})});gy();function ro(l,r){return(my[l]||{})[r]}function Y3(l,r){return(hy[l]||{})[r]}function pn(l,r){return(py[l]||{})[r]}function by(l){return yy[l]||{prefix:null,iconName:null}}function L3(l){const r=vy[l],s=ro("fas",l);return r||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function Ja(){return io}const Sy=()=>({prefix:null,iconName:null,rest:[]});function B3(l){let r=ue;const s=dy.reduce((c,f)=>(c[f]="".concat($.cssPrefix,"-").concat(f),c),{});return ty.forEach(c=>{(l.includes(s[c])||l.some(f=>U3[c].includes(f)))&&(r=c)}),r}function Ou(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:s=ue}=r,c=y3[s][l];if(s===Au&&!l)return"fad";const f=Q1[s][l]||Q1[s][c],d=l in Ie.styles?l:null;return f||d||null}function X3(l){let r=[],s=null;return l.forEach(c=>{const f=H3($.cssPrefix,c);f?s=f:c&&r.push(c)}),{iconName:s,rest:r}}function J1(l){return l.sort().filter((r,s,c)=>c.indexOf(r)===s)}function Tu(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:s=!1}=r;let c=null;const f=_f.concat(n3),d=J1(l.filter(z=>f.includes(z))),h=J1(l.filter(z=>!_f.includes(z))),g=d.filter(z=>(c=z,!Ih.includes(z))),[v=null]=g,y=B3(d),S=Y(Y({},X3(h)),{},{prefix:Ou(v,{family:y})});return Y(Y(Y({},S),Z3({values:l,family:y,styles:ji,config:$,canonical:S,givenPrefix:c})),G3(s,c,S))}function G3(l,r,s){let{prefix:c,iconName:f}=s;if(l||!c||!f)return{prefix:c,iconName:f};const d=r==="fa"?by(f):{},h=pn(c,f);return f=d.iconName||h||f,c=d.prefix||c,c==="far"&&!ji.far&&ji.fas&&!$.autoFetchSvg&&(c="fas"),{prefix:c,iconName:f}}const V3=ty.filter(l=>l!==ue||l!==Au),Q3=Object.keys(Tf).filter(l=>l!==ue).map(l=>Object.keys(Tf[l])).flat();function Z3(l){const{values:r,family:s,canonical:c,givenPrefix:f="",styles:d={},config:h={}}=l,g=s===Au,v=r.includes("fa-duotone")||r.includes("fad"),y=h.familyDefault==="duotone",S=c.prefix==="fad"||c.prefix==="fa-duotone";if(!g&&(v||y||S)&&(c.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(c.prefix="fab"),!c.prefix&&V3.includes(s)&&(Object.keys(d).find(D=>Q3.includes(D))||h.autoFetchSvg)){const D=$b.get(s).defaultShortPrefixId;c.prefix=D,c.iconName=pn(c.prefix,c.iconName)||c.iconName}return(c.prefix==="fa"||f==="fa")&&(c.prefix=Ja()||"fas"),c}class k3{constructor(){this.definitions={}}add(){for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];const f=s.reduce(this._pullDefinitions,{});Object.keys(f).forEach(d=>{this.definitions[d]=Y(Y({},this.definitions[d]||{}),f[d]),Cf(d,f[d]);const h=ao[ue][d];h&&Cf(h,f[d]),gy()})}reset(){this.definitions={}}_pullDefinitions(r,s){const c=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(c).map(f=>{const{prefix:d,iconName:h,icon:g}=c[f],v=g[2];r[d]||(r[d]={}),v.length>0&&v.forEach(y=>{typeof y=="string"&&(r[d][y]=g)}),r[d][h]=g}),r}}let $1=[],fl={};const ml={},K3=Object.keys(ml);function J3(l,r){let{mixoutsTo:s}=r;return $1=l,fl={},Object.keys(ml).forEach(c=>{K3.indexOf(c)===-1&&delete ml[c]}),$1.forEach(c=>{const f=c.mixout?c.mixout():{};if(Object.keys(f).forEach(d=>{typeof f[d]=="function"&&(s[d]=f[d]),typeof f[d]=="object"&&Object.keys(f[d]).forEach(h=>{s[d]||(s[d]={}),s[d][h]=f[d][h]})}),c.hooks){const d=c.hooks();Object.keys(d).forEach(h=>{fl[h]||(fl[h]=[]),fl[h].push(d[h])})}c.provides&&c.provides(ml)}),s}function wf(l,r){for(var s=arguments.length,c=new Array(s>2?s-2:0),f=2;f<s;f++)c[f-2]=arguments[f];return(fl[l]||[]).forEach(h=>{r=h.apply(null,[r,...c])}),r}function xn(l){for(var r=arguments.length,s=new Array(r>1?r-1:0),c=1;c<r;c++)s[c-1]=arguments[c];(fl[l]||[]).forEach(d=>{d.apply(null,s)})}function $a(){const l=arguments[0],r=Array.prototype.slice.call(arguments,1);return ml[l]?ml[l].apply(null,r):void 0}function Uf(l){l.prefix==="fa"&&(l.prefix="fas");let{iconName:r}=l;const s=l.prefix||Ja();if(r)return r=pn(s,r)||r,k1(xy.definitions,s,r)||k1(Ie.styles,s,r)}const xy=new k3,$3=()=>{$.autoReplaceSvg=!1,$.observeMutations=!1,xn("noAuto")},F3={i2svg:function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ba?(xn("beforeI2svg",l),$a("pseudoElements2svg",l),$a("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:r}=l;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,D3(()=>{P3({autoReplaceSvgRoot:r}),xn("watch",l)})}},W3={icon:l=>{if(l===null)return null;if(typeof l=="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:pn(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){const r=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],s=Ou(l[0]);return{prefix:s,iconName:pn(s,r)||r}}if(typeof l=="string"&&(l.indexOf("".concat($.cssPrefix,"-"))>-1||l.match(v3))){const r=Tu(l.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ja(),iconName:pn(r.prefix,r.iconName)||r.iconName}}if(typeof l=="string"){const r=Ja();return{prefix:r,iconName:pn(r,l)||l}}}},Ne={noAuto:$3,config:$,dom:F3,parse:W3,library:xy,findIconDefinition:Uf,toHtml:Ui},P3=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:r=Dt}=l;(Object.keys(Ie.styles).length>0||$.autoFetchSvg)&&ba&&$.autoReplaceSvg&&Ne.dom.i2svg({node:r})};function _u(l,r){return Object.defineProperty(l,"abstract",{get:r}),Object.defineProperty(l,"html",{get:function(){return l.abstract.map(s=>Ui(s))}}),Object.defineProperty(l,"node",{get:function(){if(!ba)return;const s=Dt.createElement("div");return s.innerHTML=l.html,s.children}}),l}function I3(l){let{children:r,main:s,mask:c,attributes:f,styles:d,transform:h}=l;if(lo(h)&&s.found&&!c.found){const{width:g,height:v}=s,y={x:g/v/2,y:.5};f.style=Eu(Y(Y({},d),{},{"transform-origin":"".concat(y.x+h.x/16,"em ").concat(y.y+h.y/16,"em")}))}return[{tag:"svg",attributes:f,children:r}]}function t4(l){let{prefix:r,iconName:s,children:c,attributes:f,symbol:d}=l;const h=d===!0?"".concat(r,"-").concat($.cssPrefix,"-").concat(s):d;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Y(Y({},f),{},{id:h}),children:c}]}]}function uo(l){const{icons:{main:r,mask:s},prefix:c,iconName:f,transform:d,symbol:h,title:g,maskId:v,titleId:y,extra:S,watchable:z=!1}=l,{width:D,height:G}=s.found?s:r,B=t3.includes(c),q=[$.replacementClass,f?"".concat($.cssPrefix,"-").concat(f):""].filter(R=>S.classes.indexOf(R)===-1).filter(R=>R!==""||!!R).concat(S.classes).join(" ");let N={children:[],attributes:Y(Y({},S.attributes),{},{"data-prefix":c,"data-icon":f,class:q,role:S.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(G)})};const k=B&&!~S.classes.indexOf("fa-fw")?{width:"".concat(D/G*16*.0625,"em")}:{};z&&(N.attributes[Sn]=""),g&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(y||Di())},children:[g]}),delete N.attributes.title);const L=Y(Y({},N),{},{prefix:c,iconName:f,main:r,mask:s,maskId:v,transform:d,symbol:h,styles:Y(Y({},k),S.styles)}),{children:V,attributes:et}=s.found&&r.found?$a("generateAbstractMask",L)||{children:[],attributes:{}}:$a("generateAbstractIcon",L)||{children:[],attributes:{}};return L.children=V,L.attributes=et,h?t4(L):I3(L)}function F1(l){const{content:r,width:s,height:c,transform:f,title:d,extra:h,watchable:g=!1}=l,v=Y(Y(Y({},h.attributes),d?{title:d}:{}),{},{class:h.classes.join(" ")});g&&(v[Sn]="");const y=Y({},h.styles);lo(f)&&(y.transform=M3({transform:f,startCentered:!0,width:s,height:c}),y["-webkit-transform"]=y.transform);const S=Eu(y);S.length>0&&(v.style=S);const z=[];return z.push({tag:"span",attributes:v,children:[r]}),d&&z.push({tag:"span",attributes:{class:"sr-only"},children:[d]}),z}function e4(l){const{content:r,title:s,extra:c}=l,f=Y(Y(Y({},c.attributes),s?{title:s}:{}),{},{class:c.classes.join(" ")}),d=Eu(c.styles);d.length>0&&(f.style=d);const h=[];return h.push({tag:"span",attributes:f,children:[r]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}const{styles:ff}=Ie;function qf(l){const r=l[0],s=l[1],[c]=l.slice(4);let f=null;return Array.isArray(c)?f={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(uf.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(uf.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(uf.PRIMARY),fill:"currentColor",d:c[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:r,height:s,icon:f}}const a4={found:!1,width:512,height:512};function n4(l,r){!ly&&!$.showMissingIcons&&l&&console.error('Icon with name "'.concat(l,'" and prefix "').concat(r,'" is missing.'))}function Hf(l,r){let s=r;return r==="fa"&&$.styleDefault!==null&&(r=Ja()),new Promise((c,f)=>{if(s==="fa"){const d=by(l)||{};l=d.iconName||l,r=d.prefix||r}if(l&&r&&ff[r]&&ff[r][l]){const d=ff[r][l];return c(qf(d))}n4(l,r),c(Y(Y({},a4),{},{icon:$.showMissingIcons&&l?$a("missingIconAbstract")||{}:{}}))})}const W1=()=>{},Yf=$.measurePerformance&&eu&&eu.mark&&eu.measure?eu:{mark:W1,measure:W1},Ai='FA "6.7.2"',l4=l=>(Yf.mark("".concat(Ai," ").concat(l," begins")),()=>Ay(l)),Ay=l=>{Yf.mark("".concat(Ai," ").concat(l," ends")),Yf.measure("".concat(Ai," ").concat(l),"".concat(Ai," ").concat(l," begins"),"".concat(Ai," ").concat(l," ends"))};var co={begin:l4,end:Ay};const cu=()=>{};function P1(l){return typeof(l.getAttribute?l.getAttribute(Sn):null)=="string"}function i4(l){const r=l.getAttribute?l.getAttribute(to):null,s=l.getAttribute?l.getAttribute(eo):null;return r&&s}function r4(l){return l&&l.classList&&l.classList.contains&&l.classList.contains($.replacementClass)}function u4(){return $.autoReplaceSvg===!0?su.replace:su[$.autoReplaceSvg]||su.replace}function c4(l){return Dt.createElementNS("http://www.w3.org/2000/svg",l)}function s4(l){return Dt.createElement(l)}function Ey(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:s=l.tag==="svg"?c4:s4}=r;if(typeof l=="string")return Dt.createTextNode(l);const c=s(l.tag);return Object.keys(l.attributes||[]).forEach(function(d){c.setAttribute(d,l.attributes[d])}),(l.children||[]).forEach(function(d){c.appendChild(Ey(d,{ceFn:s}))}),c}function f4(l){let r=" ".concat(l.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}const su={replace:function(l){const r=l[0];if(r.parentNode)if(l[1].forEach(s=>{r.parentNode.insertBefore(Ey(s),r)}),r.getAttribute(Sn)===null&&$.keepOriginalSource){let s=Dt.createComment(f4(r));r.parentNode.replaceChild(s,r)}else r.remove()},nest:function(l){const r=l[0],s=l[1];if(~no(r).indexOf($.replacementClass))return su.replace(l);const c=new RegExp("".concat($.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){const d=s[0].attributes.class.split(" ").reduce((h,g)=>(g===$.replacementClass||g.match(c)?h.toSvg.push(g):h.toNode.push(g),h),{toNode:[],toSvg:[]});s[0].attributes.class=d.toSvg.join(" "),d.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",d.toNode.join(" "))}const f=s.map(d=>Ui(d)).join(`
`);r.setAttribute(Sn,""),r.innerHTML=f}};function I1(l){l()}function Oy(l,r){const s=typeof r=="function"?r:cu;if(l.length===0)s();else{let c=I1;$.mutateApproach===m3&&(c=Ka.requestAnimationFrame||I1),c(()=>{const f=u4(),d=co.begin("mutate");l.map(f),d(),s()})}}let so=!1;function Ty(){so=!0}function Lf(){so=!1}let yu=null;function th(l){if(!B1||!$.observeMutations)return;const{treeCallback:r=cu,nodeCallback:s=cu,pseudoElementsCallback:c=cu,observeMutationsRoot:f=Dt}=l;yu=new B1(d=>{if(so)return;const h=Ja();gl(d).forEach(g=>{if(g.type==="childList"&&g.addedNodes.length>0&&!P1(g.addedNodes[0])&&($.searchPseudoElements&&c(g.target),r(g.target)),g.type==="attributes"&&g.target.parentNode&&$.searchPseudoElements&&c(g.target.parentNode),g.type==="attributes"&&P1(g.target)&&~b3.indexOf(g.attributeName))if(g.attributeName==="class"&&i4(g.target)){const{prefix:v,iconName:y}=Tu(no(g.target));g.target.setAttribute(to,v||h),y&&g.target.setAttribute(eo,y)}else r4(g.target)&&s(g.target)})}),ba&&yu.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function o4(){yu&&yu.disconnect()}function d4(l){const r=l.getAttribute("style");let s=[];return r&&(s=r.split(";").reduce((c,f)=>{const d=f.split(":"),h=d[0],g=d.slice(1);return h&&g.length>0&&(c[h]=g.join(":").trim()),c},{})),s}function m4(l){const r=l.getAttribute("data-prefix"),s=l.getAttribute("data-icon"),c=l.innerText!==void 0?l.innerText.trim():"";let f=Tu(no(l));return f.prefix||(f.prefix=Ja()),r&&s&&(f.prefix=r,f.iconName=s),f.iconName&&f.prefix||(f.prefix&&c.length>0&&(f.iconName=Y3(f.prefix,l.innerText)||ro(f.prefix,jf(l.innerText))),!f.iconName&&$.autoFetchSvg&&l.firstChild&&l.firstChild.nodeType===Node.TEXT_NODE&&(f.iconName=l.firstChild.data)),f}function h4(l){const r=gl(l.attributes).reduce((f,d)=>(f.name!=="class"&&f.name!=="style"&&(f[d.name]=d.value),f),{}),s=l.getAttribute("title"),c=l.getAttribute("data-fa-title-id");return $.autoA11y&&(s?r["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(c||Di()):(r["aria-hidden"]="true",r.focusable="false")),r}function y4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function eh(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:s,prefix:c,rest:f}=m4(l),d=h4(l),h=wf("parseNodeAttributes",{},l);let g=r.styleParser?d4(l):[];return Y({iconName:s,title:l.getAttribute("title"),titleId:l.getAttribute("data-fa-title-id"),prefix:c,transform:Pe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:f,styles:g,attributes:d}},h)}const{styles:v4}=Ie;function _y(l){const r=$.autoReplaceSvg==="nest"?eh(l,{styleParser:!1}):eh(l);return~r.extra.classes.indexOf(ry)?$a("generateLayersText",l,r):$a("generateSvgReplacementMutation",l,r)}function p4(){return[...Wb,..._f]}function ah(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ba)return Promise.resolve();const s=Dt.documentElement.classList,c=S=>s.add("".concat(V1,"-").concat(S)),f=S=>s.remove("".concat(V1,"-").concat(S)),d=$.autoFetchSvg?p4():Ih.concat(Object.keys(v4));d.includes("fa")||d.push("fa");const h=[".".concat(ry,":not([").concat(Sn,"])")].concat(d.map(S=>".".concat(S,":not([").concat(Sn,"])"))).join(", ");if(h.length===0)return Promise.resolve();let g=[];try{g=gl(l.querySelectorAll(h))}catch{}if(g.length>0)c("pending"),f("complete");else return Promise.resolve();const v=co.begin("onTree"),y=g.reduce((S,z)=>{try{const D=_y(z);D&&S.push(D)}catch(D){ly||D.name==="MissingIcon"&&console.error(D)}return S},[]);return new Promise((S,z)=>{Promise.all(y).then(D=>{Oy(D,()=>{c("active"),c("complete"),f("pending"),typeof r=="function"&&r(),v(),S()})}).catch(D=>{v(),z(D)})})}function g4(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_y(l).then(s=>{s&&Oy([s],r)})}function b4(l){return function(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const c=(r||{}).icon?r:Uf(r||{});let{mask:f}=s;return f&&(f=(f||{}).icon?f:Uf(f||{})),l(c,Y(Y({},s),{},{mask:f}))}}const S4=function(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=Pe,symbol:c=!1,mask:f=null,maskId:d=null,title:h=null,titleId:g=null,classes:v=[],attributes:y={},styles:S={}}=r;if(!l)return;const{prefix:z,iconName:D,icon:G}=l;return _u(Y({type:"icon"},l),()=>(xn("beforeDOMElementCreation",{iconDefinition:l,params:r}),$.autoA11y&&(h?y["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(g||Di()):(y["aria-hidden"]="true",y.focusable="false")),uo({icons:{main:qf(G),mask:f?qf(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:D,transform:Y(Y({},Pe),s),symbol:c,title:h,maskId:d,titleId:g,extra:{attributes:y,styles:S,classes:v}})))};var x4={mixout(){return{icon:b4(S4)}},hooks(){return{mutationObserverCallbacks(l){return l.treeCallback=ah,l.nodeCallback=g4,l}}},provides(l){l.i2svg=function(r){const{node:s=Dt,callback:c=()=>{}}=r;return ah(s,c)},l.generateSvgReplacementMutation=function(r,s){const{iconName:c,title:f,titleId:d,prefix:h,transform:g,symbol:v,mask:y,maskId:S,extra:z}=s;return new Promise((D,G)=>{Promise.all([Hf(c,h),y.iconName?Hf(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(B=>{let[q,N]=B;D([r,uo({icons:{main:q,mask:N},prefix:h,iconName:c,transform:g,symbol:v,maskId:S,title:f,titleId:d,extra:z,watchable:!0})])}).catch(G)})},l.generateAbstractIcon=function(r){let{children:s,attributes:c,main:f,transform:d,styles:h}=r;const g=Eu(h);g.length>0&&(c.style=g);let v;return lo(d)&&(v=$a("generateAbstractTransformGrouping",{main:f,transform:d,containerWidth:f.width,iconWidth:f.width})),s.push(v||f.icon),{children:s,attributes:c}}}},A4={mixout(){return{layer(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:s=[]}=r;return _u({type:"layer"},()=>{xn("beforeDOMElementCreation",{assembler:l,params:r});let c=[];return l(f=>{Array.isArray(f)?f.map(d=>{c=c.concat(d.abstract)}):c=c.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers"),...s].join(" ")},children:c}]})}}}},E4={mixout(){return{counter(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:s=null,classes:c=[],attributes:f={},styles:d={}}=r;return _u({type:"counter",content:l},()=>(xn("beforeDOMElementCreation",{content:l,params:r}),e4({content:l.toString(),title:s,extra:{attributes:f,styles:d,classes:["".concat($.cssPrefix,"-layers-counter"),...c]}})))}}}},O4={mixout(){return{text(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=Pe,title:c=null,classes:f=[],attributes:d={},styles:h={}}=r;return _u({type:"text",content:l},()=>(xn("beforeDOMElementCreation",{content:l,params:r}),F1({content:l,transform:Y(Y({},Pe),s),title:c,extra:{attributes:d,styles:h,classes:["".concat($.cssPrefix,"-layers-text"),...f]}})))}}},provides(l){l.generateLayersText=function(r,s){const{title:c,transform:f,extra:d}=s;let h=null,g=null;if(Wh){const v=parseInt(getComputedStyle(r).fontSize,10),y=r.getBoundingClientRect();h=y.width/v,g=y.height/v}return $.autoA11y&&!c&&(d.attributes["aria-hidden"]="true"),Promise.resolve([r,F1({content:r.innerHTML,width:h,height:g,transform:f,title:c,extra:d,watchable:!0})])}}};const T4=new RegExp('"',"ug"),nh=[1105920,1112319],lh=Y(Y(Y(Y({},{FontAwesome:{normal:"fas",400:"fas"}}),Jb),o3),l3),Bf=Object.keys(lh).reduce((l,r)=>(l[r.toLowerCase()]=lh[r],l),{}),_4=Object.keys(Bf).reduce((l,r)=>{const s=Bf[r];return l[r]=s[900]||[...Object.entries(s)][0][1],l},{});function z4(l){const r=l.replace(T4,""),s=C3(r,0),c=s>=nh[0]&&s<=nh[1],f=r.length===2?r[0]===r[1]:!1;return{value:jf(f?r[0]:r),isSecondary:c||f}}function M4(l,r){const s=l.replace(/^['"]|['"]$/g,"").toLowerCase(),c=parseInt(r),f=isNaN(c)?"normal":c;return(Bf[s]||{})[f]||_4[s]}function ih(l,r){const s="".concat(d3).concat(r.replace(":","-"));return new Promise((c,f)=>{if(l.getAttribute(s)!==null)return c();const h=gl(l.children).filter(D=>D.getAttribute(Mf)===r)[0],g=Ka.getComputedStyle(l,r),v=g.getPropertyValue("font-family"),y=v.match(p3),S=g.getPropertyValue("font-weight"),z=g.getPropertyValue("content");if(h&&!y)return l.removeChild(h),c();if(y&&z!=="none"&&z!==""){const D=g.getPropertyValue("content");let G=M4(v,S);const{value:B,isSecondary:q}=z4(D),N=y[0].startsWith("FontAwesome");let k=ro(G,B),L=k;if(N){const V=L3(B);V.iconName&&V.prefix&&(k=V.iconName,G=V.prefix)}if(k&&!q&&(!h||h.getAttribute(to)!==G||h.getAttribute(eo)!==L)){l.setAttribute(s,L),h&&l.removeChild(h);const V=y4(),{extra:et}=V;et.attributes[Mf]=r,Hf(k,G).then(R=>{const lt=uo(Y(Y({},V),{},{icons:{main:R,mask:Sy()},prefix:G,iconName:L,extra:et,watchable:!0})),W=Dt.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?l.insertBefore(W,l.firstChild):l.appendChild(W),W.outerHTML=lt.map(ht=>Ui(ht)).join(`
`),l.removeAttribute(s),c()}).catch(f)}else c()}else c()})}function N4(l){return Promise.all([ih(l,"::before"),ih(l,"::after")])}function R4(l){return l.parentNode!==document.head&&!~h3.indexOf(l.tagName.toUpperCase())&&!l.getAttribute(Mf)&&(!l.parentNode||l.parentNode.tagName!=="svg")}function rh(l){if(ba)return new Promise((r,s)=>{const c=gl(l.querySelectorAll("*")).filter(R4).map(N4),f=co.begin("searchPseudoElements");Ty(),Promise.all(c).then(()=>{f(),Lf(),r()}).catch(()=>{f(),Lf(),s()})})}var D4={hooks(){return{mutationObserverCallbacks(l){return l.pseudoElementsCallback=rh,l}}},provides(l){l.pseudoElements2svg=function(r){const{node:s=Dt}=r;$.searchPseudoElements&&rh(s)}}};let uh=!1;var j4={mixout(){return{dom:{unwatch(){Ty(),uh=!0}}}},hooks(){return{bootstrap(){th(wf("mutationObserverCallbacks",{}))},noAuto(){o4()},watch(l){const{observeMutationsRoot:r}=l;uh?Lf():th(wf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}};const ch=l=>{let r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce((s,c)=>{const f=c.toLowerCase().split("-"),d=f[0];let h=f.slice(1).join("-");if(d&&h==="h")return s.flipX=!0,s;if(d&&h==="v")return s.flipY=!0,s;if(h=parseFloat(h),isNaN(h))return s;switch(d){case"grow":s.size=s.size+h;break;case"shrink":s.size=s.size-h;break;case"left":s.x=s.x-h;break;case"right":s.x=s.x+h;break;case"up":s.y=s.y-h;break;case"down":s.y=s.y+h;break;case"rotate":s.rotate=s.rotate+h;break}return s},r)};var C4={mixout(){return{parse:{transform:l=>ch(l)}}},hooks(){return{parseNodeAttributes(l,r){const s=r.getAttribute("data-fa-transform");return s&&(l.transform=ch(s)),l}}},provides(l){l.generateAbstractTransformGrouping=function(r){let{main:s,transform:c,containerWidth:f,iconWidth:d}=r;const h={transform:"translate(".concat(f/2," 256)")},g="translate(".concat(c.x*32,", ").concat(c.y*32,") "),v="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),y="rotate(".concat(c.rotate," 0 0)"),S={transform:"".concat(g," ").concat(v," ").concat(y)},z={transform:"translate(".concat(d/2*-1," -256)")},D={outer:h,inner:S,path:z};return{tag:"g",attributes:Y({},D.outer),children:[{tag:"g",attributes:Y({},D.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:Y(Y({},s.icon.attributes),D.path)}]}]}}}};const of={x:0,y:0,width:"100%",height:"100%"};function sh(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return l.attributes&&(l.attributes.fill||r)&&(l.attributes.fill="black"),l}function w4(l){return l.tag==="g"?l.children:[l]}var U4={hooks(){return{parseNodeAttributes(l,r){const s=r.getAttribute("data-fa-mask"),c=s?Tu(s.split(" ").map(f=>f.trim())):Sy();return c.prefix||(c.prefix=Ja()),l.mask=c,l.maskId=r.getAttribute("data-fa-mask-id"),l}}},provides(l){l.generateAbstractMask=function(r){let{children:s,attributes:c,main:f,mask:d,maskId:h,transform:g}=r;const{width:v,icon:y}=f,{width:S,icon:z}=d,D=z3({transform:g,containerWidth:S,iconWidth:v}),G={tag:"rect",attributes:Y(Y({},of),{},{fill:"white"})},B=y.children?{children:y.children.map(sh)}:{},q={tag:"g",attributes:Y({},D.inner),children:[sh(Y({tag:y.tag,attributes:Y(Y({},y.attributes),D.path)},B))]},N={tag:"g",attributes:Y({},D.outer),children:[q]},k="mask-".concat(h||Di()),L="clip-".concat(h||Di()),V={tag:"mask",attributes:Y(Y({},of),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[G,N]},et={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:w4(z)},V]};return s.push(et,{tag:"rect",attributes:Y({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(k,")")},of)}),{children:s,attributes:c}}}},q4={provides(l){let r=!1;Ka.matchMedia&&(r=Ka.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){const s=[],c={fill:"currentColor"},f={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:Y(Y({},c),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const d=Y(Y({},f),{},{attributeName:"opacity"}),h={tag:"circle",attributes:Y(Y({},c),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||h.children.push({tag:"animate",attributes:Y(Y({},f),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Y(Y({},d),{},{values:"1;0;1;1;0;1;"})}),s.push(h),s.push({tag:"path",attributes:Y(Y({},c),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:Y(Y({},d),{},{values:"1;0;0;0;0;1;"})}]}),r||s.push({tag:"path",attributes:Y(Y({},c),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Y(Y({},d),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},H4={hooks(){return{parseNodeAttributes(l,r){const s=r.getAttribute("data-fa-symbol"),c=s===null?!1:s===""?!0:s;return l.symbol=c,l}}}},Y4=[R3,x4,A4,E4,O4,D4,j4,C4,U4,q4,H4];J3(Y4,{mixoutsTo:Ne});Ne.noAuto;Ne.config;Ne.library;Ne.dom;const Xf=Ne.parse;Ne.findIconDefinition;Ne.toHtml;const L4=Ne.icon;Ne.layer;Ne.text;Ne.counter;var df={exports:{}},mf,fh;function B4(){if(fh)return mf;fh=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return mf=l,mf}var hf,oh;function X4(){if(oh)return hf;oh=1;var l=B4();function r(){}function s(){}return s.resetWarningCache=r,hf=function(){function c(h,g,v,y,S,z){if(z!==l){var D=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw D.name="Invariant Violation",D}}c.isRequired=c;function f(){return c}var d={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:f,element:c,elementType:c,instanceOf:f,node:c,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:s,resetWarningCache:r};return d.PropTypes=d,d},hf}var dh;function G4(){return dh||(dh=1,df.exports=X4()()),df.exports}var V4=G4();const ot=vh(V4);function mh(l,r){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);r&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),s.push.apply(s,c)}return s}function We(l){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?mh(Object(s),!0).forEach(function(c){ol(l,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):mh(Object(s)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(s,c))})}return l}function vu(l){"@babel/helpers - typeof";return vu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},vu(l)}function ol(l,r,s){return r in l?Object.defineProperty(l,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[r]=s,l}function Q4(l,r){if(l==null)return{};var s={},c=Object.keys(l),f,d;for(d=0;d<c.length;d++)f=c[d],!(r.indexOf(f)>=0)&&(s[f]=l[f]);return s}function Z4(l,r){if(l==null)return{};var s=Q4(l,r),c,f;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(f=0;f<d.length;f++)c=d[f],!(r.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(l,c)&&(s[c]=l[c])}return s}function Gf(l){return k4(l)||K4(l)||J4(l)||$4()}function k4(l){if(Array.isArray(l))return Vf(l)}function K4(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function J4(l,r){if(l){if(typeof l=="string")return Vf(l,r);var s=Object.prototype.toString.call(l).slice(8,-1);if(s==="Object"&&l.constructor&&(s=l.constructor.name),s==="Map"||s==="Set")return Array.from(l);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return Vf(l,r)}}function Vf(l,r){(r==null||r>l.length)&&(r=l.length);for(var s=0,c=new Array(r);s<r;s++)c[s]=l[s];return c}function $4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F4(l){var r,s=l.beat,c=l.fade,f=l.beatFade,d=l.bounce,h=l.shake,g=l.flash,v=l.spin,y=l.spinPulse,S=l.spinReverse,z=l.pulse,D=l.fixedWidth,G=l.inverse,B=l.border,q=l.listItem,N=l.flip,k=l.size,L=l.rotation,V=l.pull,et=(r={"fa-beat":s,"fa-fade":c,"fa-beat-fade":f,"fa-bounce":d,"fa-shake":h,"fa-flash":g,"fa-spin":v,"fa-spin-reverse":S,"fa-spin-pulse":y,"fa-pulse":z,"fa-fw":D,"fa-inverse":G,"fa-border":B,"fa-li":q,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},ol(r,"fa-".concat(k),typeof k<"u"&&k!==null),ol(r,"fa-rotate-".concat(L),typeof L<"u"&&L!==null&&L!==0),ol(r,"fa-pull-".concat(V),typeof V<"u"&&V!==null),ol(r,"fa-swap-opacity",l.swapOpacity),r);return Object.keys(et).map(function(R){return et[R]?R:null}).filter(function(R){return R})}function W4(l){return l=l-0,l===l}function zy(l){return W4(l)?l:(l=l.replace(/[\-_\s]+(.)?/g,function(r,s){return s?s.toUpperCase():""}),l.substr(0,1).toLowerCase()+l.substr(1))}var P4=["style"];function I4(l){return l.charAt(0).toUpperCase()+l.slice(1)}function t5(l){return l.split(";").map(function(r){return r.trim()}).filter(function(r){return r}).reduce(function(r,s){var c=s.indexOf(":"),f=zy(s.slice(0,c)),d=s.slice(c+1).trim();return f.startsWith("webkit")?r[I4(f)]=d:r[f]=d,r},{})}function My(l,r){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof r=="string")return r;var c=(r.children||[]).map(function(v){return My(l,v)}),f=Object.keys(r.attributes||{}).reduce(function(v,y){var S=r.attributes[y];switch(y){case"class":v.attrs.className=S,delete r.attributes.class;break;case"style":v.attrs.style=t5(S);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?v.attrs[y.toLowerCase()]=S:v.attrs[zy(y)]=S}return v},{attrs:{}}),d=s.style,h=d===void 0?{}:d,g=Z4(s,P4);return f.attrs.style=We(We({},f.attrs.style),h),l.apply(void 0,[r.tag,We(We({},f.attrs),g)].concat(Gf(c)))}var Ny=!1;try{Ny=!0}catch{}function e5(){if(!Ny&&console&&typeof console.error=="function"){var l;(l=console).error.apply(l,arguments)}}function hh(l){if(l&&vu(l)==="object"&&l.prefix&&l.iconName&&l.icon)return l;if(Xf.icon)return Xf.icon(l);if(l===null)return null;if(l&&vu(l)==="object"&&l.prefix&&l.iconName)return l;if(Array.isArray(l)&&l.length===2)return{prefix:l[0],iconName:l[1]};if(typeof l=="string")return{prefix:"fas",iconName:l}}function yf(l,r){return Array.isArray(r)&&r.length>0||!Array.isArray(r)&&r?ol({},l,r):{}}var yh={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},fo=ta.forwardRef(function(l,r){var s=We(We({},yh),l),c=s.icon,f=s.mask,d=s.symbol,h=s.className,g=s.title,v=s.titleId,y=s.maskId,S=hh(c),z=yf("classes",[].concat(Gf(F4(s)),Gf((h||"").split(" ")))),D=yf("transform",typeof s.transform=="string"?Xf.transform(s.transform):s.transform),G=yf("mask",hh(f)),B=L4(S,We(We(We(We({},z),D),G),{},{symbol:d,title:g,titleId:v,maskId:y}));if(!B)return e5("Could not find icon",S),null;var q=B.abstract,N={ref:r};return Object.keys(s).forEach(function(k){yh.hasOwnProperty(k)||(N[k]=s[k])}),a5(q[0],N)});fo.displayName="FontAwesomeIcon";fo.propTypes={beat:ot.bool,border:ot.bool,beatFade:ot.bool,bounce:ot.bool,className:ot.string,fade:ot.bool,flash:ot.bool,mask:ot.oneOfType([ot.object,ot.array,ot.string]),maskId:ot.string,fixedWidth:ot.bool,inverse:ot.bool,flip:ot.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ot.oneOfType([ot.object,ot.array,ot.string]),listItem:ot.bool,pull:ot.oneOf(["right","left"]),pulse:ot.bool,rotation:ot.oneOf([0,90,180,270]),shake:ot.bool,size:ot.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ot.bool,spinPulse:ot.bool,spinReverse:ot.bool,symbol:ot.oneOfType([ot.bool,ot.string]),title:ot.string,titleId:ot.string,transform:ot.oneOfType([ot.string,ot.object]),swapOpacity:ot.bool};var a5=My.bind(null,ta.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const n5={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};function l5(l){return Le({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.084 2.914c-1.178-1.179-3.234-1.179-4.412 0l-8.379 8.379a.999.999 0 0 0 0 1.414l3 3a.997.997 0 0 0 1.414 0l8.379-8.379a3.123 3.123 0 0 0-.002-4.414zm-1.412 3L12 13.586 10.414 12l7.672-7.672a1.146 1.146 0 0 1 1.586.002 1.123 1.123 0 0 1 0 1.584zM8 15c-1.265-.634-3.5 0-3.5 2 0 1.197.5 2-1.5 3 0 0 3.25 2.25 5.5 0 1.274-1.274 1.494-4-.5-5z"},child:[]}]})(l)}const i5=()=>{const[l,r]=mt.useState(!1),s=()=>{r(!l)},c=()=>r(!l);return E.jsx("div",{className:"body",children:E.jsxs("header",{className:"navbar",children:[E.jsx("a",{className:"logo",children:"PORTFOLIO"}),E.jsxs("ul",{className:l?"navlist active":"navlist",onClick:c,children:[E.jsxs("li",{children:[E.jsx("a",{href:"#home",className:"nav-link ",children:"Home"})," "]}),E.jsxs("li",{children:[E.jsx("a",{href:"#about",className:"nav-link",children:"About"})," "]}),E.jsxs("li",{children:[E.jsx("a",{href:"#works",className:"nav-link",children:"Works"})," "]}),E.jsxs("li",{children:[E.jsx("a",{href:"#services",className:"nav-link",children:"Services"})," "]}),E.jsxs("li",{children:[E.jsx("a",{href:"#contact",className:"nav-link",children:"Contact"})," "]})]}),E.jsx("div",{className:"menu-bar ",id:"menu-icon",onClick:s,children:E.jsx(fo,{icon:n5})})]})})},r5=()=>{Zf();const[l]=bf.useTypewriter({words:["DONTHAMSETTY JAYA SATYA SAI HARSHITH"],typeSpeed:80});return E.jsxs("div",{className:"body",children:[E.jsx(bn,{direction:"down",fraction:.3,triggerOnce:!0,children:E.jsxs("h1",{className:"heading",children:["About ",E.jsx("span",{style:{color:"aqua"},children:"Me"})]})}),E.jsxs("div",{className:"container2",children:[E.jsx("div",{className:"left1",children:E.jsx(sl,{triggerOnce:"false",fraction:.5,children:E.jsx("img",{src:"https://res.cloudinary.com/dwko0nqi4/image/upload/v1746891353/edit225_oerkco.png",className:"image"})})}),E.jsx(bn,{duration:1300,direction:"right",triggerOnce:"false",fraction:.5,children:E.jsxs("div",{className:"right1 ",children:[E.jsx("h1",{className:"name",children:E.jsx("span",{style:{fontWeight:"bold",color:"aqua"},children:l})}),E.jsx("p",{className:"para",children:"Hi everyone! My name is Harshith, and I’m currently a fourth-year ECE student. I’ve always been fascinated by how technology works, and over the past year, I’ve been focusing a lot on learning HTML, CSS, and Javascript. I really enjoy solving programming challenges — especially ones that involve logic, pattern matching, or algorithms. Apart from coding, I love in Photography, Editing and Graphic Designing. As all of these I am using Photoshop, Premiere Pro, Adobe Illustrator and Figma. I’m always learning, experimenting, and pushing creative boundaries. Let’s create something beautiful together!"})]})})]})]})},nu=[{image:"https://res.cloudinary.com/dwko0nqi4/image/upload/v1744455880/child-1_d8uugm.jpg",text:E.jsx("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex amet, quaerat tempora provident obcaecati dolorem minus atque accusantium aut repudiandae soluta. Culpa sit necessitatibus accusamus reprehenderit iure odit placeat deleniti!"})},{image:"https://res.cloudinary.com/dwko0nqi4/image/upload/v1744455880/d3_inwcgn.jpg",text:E.jsx("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex amet, quaerat tempora provident obcaecati dolorem minus atque accusantium aut repudiandae soluta. Culpa sit necessitatibus accusamus reprehenderit iure odit placeat deleniti!"})},{image:"https://res.cloudinary.com/dwko0nqi4/image/upload/v1744455880/p8_m4s8s5.jpg",text:E.jsx("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex amet, quaerat tempora provident obcaecati dolorem minus atque accusantium aut repudiandae soluta. Culpa sit necessitatibus accusamus reprehenderit iure odit placeat deleniti!"})}];function u5(){Zf();const[l,r]=mt.useState(0),s=()=>{r(f=>f===0?nu.length-1:f-1)},c=()=>{r(f=>f===nu.length-1?0:f+1)};return E.jsx(E.Fragment,{children:E.jsxs("div",{style:cl.carousel,className:"body1 ",children:[E.jsx(bn,{direction:"down",fraction:.3,triggerOnce:!0,children:E.jsxs("h1",{className:"works",children:["My ",E.jsx("span",{style:{color:"aqua"},children:"Works"})]})}),E.jsxs("div",{className:"container3",children:[E.jsx(bn,{direction:"left",fraction:.5,triggerOnce:!0,children:E.jsx("div",{className:"right2",children:E.jsxs("div",{style:cl.imageWrapper,children:[E.jsx("img",{src:nu[l].image,alt:"slide",style:cl.image}),E.jsx("button",{style:{...cl.arrow,left:10},onClick:s,children:"❮"}),E.jsx("button",{style:{...cl.arrow,right:10},onClick:c,children:"❯"})]})})}),E.jsx(bn,{direction:"right",fraction:.5,triggerOnce:!0,children:E.jsx("div",{className:"left2",children:E.jsx("p",{style:cl.caption,children:nu[l].text})})})]})]})})}const cl={carousel:{textAlign:"center",fontFamily:"sans-serif"},imageWrapper:{position:"relative"},image:{width:"60%",borderRadius:"8px"},arrow:{position:"absolute",top:"100%",transform:"translateY(-50%)",backgroundColor:"aqua",color:"#fff",border:"none",fontSize:"24px",padding:"20px",cursor:"pointer",borderRadius:"40%"},caption:{marginTop:"12px",fontSize:"18px",color:"white"}};function c5(l){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m350.54 148.68-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h352a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z"},child:[]},{tag:"circle",attr:{cx:"256",cy:"272",r:"80",fill:"none",strokeMiterlimit:"10",strokeWidth:"32"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M124 158v-22h-24v22"},child:[]}]})(l)}function s5(l){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z"},child:[]},{tag:"circle",attr:{cx:"144",cy:"208",r:"32"},child:[]},{tag:"circle",attr:{cx:"152",cy:"311",r:"32"},child:[]},{tag:"circle",attr:{cx:"224",cy:"144",r:"32"},child:[]},{tag:"circle",attr:{cx:"256",cy:"367",r:"48"},child:[]},{tag:"circle",attr:{cx:"328",cy:"144",r:"32"},child:[]}]})(l)}function f5(l){return Le({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13 18V20H17V22H7V20H11V18H3C2.44772 18 2 17.5523 2 17V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V17C22 17.5523 21.5523 18 21 18H13ZM4 5V16H20V5H4ZM10 7.5L15 10.5L10 13.5V7.5Z"},child:[]}]})(l)}const o5=()=>E.jsxs("div",{className:"body2",children:[E.jsx(bn,{direction:"down",fraction:.3,triggerOnce:!0,children:E.jsxs("h1",{className:"heading",children:["My ",E.jsx("span",{style:{color:"aqua"},children:"Services"})]})}),E.jsxs("div",{className:"services-container",children:[E.jsx(sl,{duration:500,delay:0,triggerOnce:"false",fraction:.5,children:E.jsxs("div",{className:"services-box",children:[E.jsxs("div",{className:"icon",children:[E.jsx("i",{children:E.jsx(Qg,{})}),E.jsx("a",{href:"",children:E.jsx("i",{children:E.jsx(bi,{})})})]}),E.jsx("h3",{children:"Web Development"}),E.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!"})]})}),E.jsx(sl,{duration:500,delay:200,triggerOnce:"false",fraction:.5,children:E.jsxs("div",{className:"services-box",children:[E.jsxs("div",{className:"icon",children:[E.jsx("i",{children:E.jsx(l5,{})}),E.jsx("a",{href:"",children:E.jsx("i",{children:E.jsx(bi,{})})})]}),E.jsx("h3",{children:"UI/UX Design"}),E.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!"})]})}),E.jsx(sl,{duration:500,delay:400,triggerOnce:"false",fraction:.5,children:E.jsxs("div",{className:"services-box",children:[E.jsxs("div",{className:"icon",children:[E.jsx("i",{children:E.jsx(s5,{})}),E.jsx("a",{href:"",children:E.jsx("i",{children:E.jsx(bi,{})})})]}),E.jsx("h3",{children:"Graphic Design"}),E.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!"})]})})]}),E.jsxs("div",{className:"services-container1",children:[E.jsx(sl,{duration:500,delay:600,triggerOnce:"false",fraction:.3,children:E.jsxs("div",{className:"services-box",children:[E.jsxs("div",{className:"icon",children:[E.jsx("i",{children:E.jsx(f5,{})}),E.jsx("a",{href:"",children:E.jsx("i",{children:E.jsx(bi,{})})})]}),E.jsx("h3",{children:"Vedio Editing"}),E.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!"})]})}),E.jsx(sl,{duration:500,delay:800,triggerOnce:"false",fraction:.3,children:E.jsxs("div",{className:"services-box",children:[E.jsxs("div",{className:"icon",children:[E.jsx("i",{children:E.jsx(c5,{})}),E.jsx("a",{href:"",children:E.jsx("i",{children:E.jsx(bi,{})})})]}),E.jsx("h3",{children:"Photography"}),E.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!"})]})})]})]});function d5(l){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"},child:[]}]})(l)}const m5=()=>E.jsx("div",{className:"contact-container",children:E.jsxs(bn,{children:[E.jsxs("div",{className:"contact-box",children:[E.jsx("h2",{children:"Let's work Together"}),E.jsx("p",{className:"desc",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus delectus aliquam voluptates ex, in pariatur deserunt earum, voluptate reiciendis ipsam maxime deleniti dolore. Enim quam non placeat debitis soluta? "}),E.jsxs("div",{className:"contact-details",children:[E.jsx("i",{children:E.jsx(Xg,{})}),E.jsxs("div",{className:"details",children:[E.jsx("p",{children:"Phone"}),E.jsx("p",{children:"+91 863 958 2747"})]})]}),E.jsxs("div",{className:"contact-details",children:[E.jsx("i",{children:E.jsx(d5,{})}),E.jsxs("div",{className:"details",children:[E.jsx("p",{children:"Email"}),E.jsx("p",{children:"harshithsai472@gmail.com"})]})]}),E.jsxs("div",{className:"contact-details",children:[E.jsx("i",{children:E.jsx(Zg,{})}),E.jsxs("div",{className:"details",children:[E.jsx("p",{children:"Address"}),E.jsx("p",{children:"Eastreen street, near siva temple, Eluru"})]})]})]}),E.jsx("div",{className:"contact-box",children:E.jsxs("form",{action:"",children:[E.jsxs("h2",{className:"heading1",children:["Contact ",E.jsx("span",{style:{color:"aqua"},children:"Me! "})]}),E.jsxs("div",{className:"field-box",children:[E.jsx("input",{type:"text",placeholder:"Full Name",required:!0}),E.jsx("input",{type:"email",placeholder:"Email Address",required:!0}),E.jsx("input",{type:"text",placeholder:"Phone Number",required:!0}),E.jsx("input",{type:"text",placeholder:"Email Subject",required:!0}),E.jsx("textarea",{name:"",id:"",placeholder:"Your message",required:!0})]}),E.jsx("button",{type:"submit",className:"btn ",children:" Send Message"})]})})]})}),h5=()=>E.jsxs("div",{className:"body",children:[E.jsx(i5,{}),E.jsx("section",{id:"home",className:"content",children:E.jsx(Yb,{})}),E.jsx("section",{id:"about",className:"content",children:E.jsx(r5,{})}),E.jsx("section",{id:"works",className:"content",children:E.jsx(u5,{})}),E.jsx("section",{id:"services",className:"content",children:E.jsx(o5,{})}),E.jsx("section",{id:"contact",className:"content",children:E.jsx(m5,{})})]});ug.createRoot(document.getElementById("root")).render(E.jsx(mt.StrictMode,{children:E.jsx(h5,{})}));
