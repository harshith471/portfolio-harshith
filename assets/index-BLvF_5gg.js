function Pg(l,r){for(var c=0;c<r.length;c++){const s=r[c];if(typeof s!="string"&&!Array.isArray(s)){for(const f in s)if(f!=="default"&&!(f in l)){const d=Object.getOwnPropertyDescriptor(s,f);d&&Object.defineProperty(l,f,d.get?d:{enumerable:!0,get:()=>s[f]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))s(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function c(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(f){if(f.ep)return;f.ep=!0;const d=c(f);fetch(f.href,d)}})();function vh(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Vs={exports:{}},vi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1;function Ig(){if(l1)return vi;l1=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(s,f,d){var h=null;if(d!==void 0&&(h=""+d),f.key!==void 0&&(h=""+f.key),"key"in f){d={};for(var b in f)b!=="key"&&(d[b]=f[b])}else d=f;return f=d.ref,{$$typeof:l,type:s,key:h,ref:f!==void 0?f:null,props:d}}return vi.Fragment=r,vi.jsx=c,vi.jsxs=c,vi}var i1;function gh(){return i1||(i1=1,Vs.exports=Ig()),Vs.exports}var p=gh(),Qs={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function tp(){if(r1)return rt;r1=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),z=Symbol.iterator;function R(S){return S===null||typeof S!="object"?null:(S=z&&S[z]||S["@@iterator"],typeof S=="function"?S:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,H={};function N(S,q,K){this.props=S,this.context=q,this.refs=H,this.updater=K||G}N.prototype.isReactComponent={},N.prototype.setState=function(S,q){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,q,"setState")},N.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function k(){}k.prototype=N.prototype;function L(S,q,K){this.props=S,this.context=q,this.refs=H,this.updater=K||G}var V=L.prototype=new k;V.constructor=L,B(V,N.prototype),V.isPureReactComponent=!0;var et=Array.isArray,j={H:null,A:null,T:null,S:null,V:null},lt=Object.prototype.hasOwnProperty;function W(S,q,K,Z,I,vt){return K=vt.ref,{$$typeof:l,type:S,key:q,ref:K!==void 0?K:null,props:vt}}function ht(S,q){return W(S.type,q,void 0,void 0,void 0,S.props)}function Lt(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function ae(S){var q={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(K){return q[K]})}var se=/\/+/g;function Ut(S,q){return typeof S=="object"&&S!==null&&S.key!=null?ae(""+S.key):q.toString(36)}function ge(){}function fe(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(ge,ge):(S.status="pending",S.then(function(q){S.status==="pending"&&(S.status="fulfilled",S.value=q)},function(q){S.status==="pending"&&(S.status="rejected",S.reason=q)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function Dt(S,q,K,Z,I){var vt=typeof S;(vt==="undefined"||vt==="boolean")&&(S=null);var it=!1;if(S===null)it=!0;else switch(vt){case"bigint":case"string":case"number":it=!0;break;case"object":switch(S.$$typeof){case l:case r:it=!0;break;case x:return it=S._init,Dt(it(S._payload),q,K,Z,I)}}if(it)return I=I(S),it=Z===""?"."+Ut(S,0):Z,et(I)?(K="",it!=null&&(K=it.replace(se,"$&/")+"/"),Dt(I,q,K,"",function(Sa){return Sa})):I!=null&&(Lt(I)&&(I=ht(I,K+(I.key==null||S&&S.key===I.key?"":(""+I.key).replace(se,"$&/")+"/")+it)),q.push(I)),1;it=0;var pe=Z===""?".":Z+":";if(et(S))for(var wt=0;wt<S.length;wt++)Z=S[wt],vt=pe+Ut(Z,wt),it+=Dt(Z,q,K,vt,I);else if(wt=R(S),typeof wt=="function")for(S=wt.call(S),wt=0;!(Z=S.next()).done;)Z=Z.value,vt=pe+Ut(Z,wt++),it+=Dt(Z,q,K,vt,I);else if(vt==="object"){if(typeof S.then=="function")return Dt(fe(S),q,K,Z,I);throw q=String(S),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return it}function D(S,q,K){if(S==null)return S;var Z=[],I=0;return Dt(S,Z,"","",function(vt){return q.call(K,vt,I++)}),Z}function Q(S){if(S._status===-1){var q=S._result;q=q(),q.then(function(K){(S._status===0||S._status===-1)&&(S._status=1,S._result=K)},function(K){(S._status===0||S._status===-1)&&(S._status=2,S._result=K)}),S._status===-1&&(S._status=0,S._result=q)}if(S._status===1)return S._result.default;throw S._result}var P=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function yt(){}return rt.Children={map:D,forEach:function(S,q,K){D(S,function(){q.apply(this,arguments)},K)},count:function(S){var q=0;return D(S,function(){q++}),q},toArray:function(S){return D(S,function(q){return q})||[]},only:function(S){if(!Lt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},rt.Component=N,rt.Fragment=c,rt.Profiler=f,rt.PureComponent=L,rt.StrictMode=s,rt.Suspense=v,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,rt.__COMPILER_RUNTIME={__proto__:null,c:function(S){return j.H.useMemoCache(S)}},rt.cache=function(S){return function(){return S.apply(null,arguments)}},rt.cloneElement=function(S,q,K){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var Z=B({},S.props),I=S.key,vt=void 0;if(q!=null)for(it in q.ref!==void 0&&(vt=void 0),q.key!==void 0&&(I=""+q.key),q)!lt.call(q,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&q.ref===void 0||(Z[it]=q[it]);var it=arguments.length-2;if(it===1)Z.children=K;else if(1<it){for(var pe=Array(it),wt=0;wt<it;wt++)pe[wt]=arguments[wt+2];Z.children=pe}return W(S.type,I,void 0,void 0,vt,Z)},rt.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},rt.createElement=function(S,q,K){var Z,I={},vt=null;if(q!=null)for(Z in q.key!==void 0&&(vt=""+q.key),q)lt.call(q,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(I[Z]=q[Z]);var it=arguments.length-2;if(it===1)I.children=K;else if(1<it){for(var pe=Array(it),wt=0;wt<it;wt++)pe[wt]=arguments[wt+2];I.children=pe}if(S&&S.defaultProps)for(Z in it=S.defaultProps,it)I[Z]===void 0&&(I[Z]=it[Z]);return W(S,vt,void 0,void 0,null,I)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(S){return{$$typeof:b,render:S}},rt.isValidElement=Lt,rt.lazy=function(S){return{$$typeof:x,_payload:{_status:-1,_result:S},_init:Q}},rt.memo=function(S,q){return{$$typeof:y,type:S,compare:q===void 0?null:q}},rt.startTransition=function(S){var q=j.T,K={};j.T=K;try{var Z=S(),I=j.S;I!==null&&I(K,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(yt,P)}catch(vt){P(vt)}finally{j.T=q}},rt.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},rt.use=function(S){return j.H.use(S)},rt.useActionState=function(S,q,K){return j.H.useActionState(S,q,K)},rt.useCallback=function(S,q){return j.H.useCallback(S,q)},rt.useContext=function(S){return j.H.useContext(S)},rt.useDebugValue=function(){},rt.useDeferredValue=function(S,q){return j.H.useDeferredValue(S,q)},rt.useEffect=function(S,q,K){var Z=j.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(S,q)},rt.useId=function(){return j.H.useId()},rt.useImperativeHandle=function(S,q,K){return j.H.useImperativeHandle(S,q,K)},rt.useInsertionEffect=function(S,q){return j.H.useInsertionEffect(S,q)},rt.useLayoutEffect=function(S,q){return j.H.useLayoutEffect(S,q)},rt.useMemo=function(S,q){return j.H.useMemo(S,q)},rt.useOptimistic=function(S,q){return j.H.useOptimistic(S,q)},rt.useReducer=function(S,q,K){return j.H.useReducer(S,q,K)},rt.useRef=function(S){return j.H.useRef(S)},rt.useState=function(S){return j.H.useState(S)},rt.useSyncExternalStore=function(S,q,K){return j.H.useSyncExternalStore(S,q,K)},rt.useTransition=function(){return j.H.useTransition()},rt.version="19.1.0",rt}var u1;function gu(){return u1||(u1=1,Qs.exports=tp()),Qs.exports}var mt=gu();const ta=vh(mt),c1=Pg({__proto__:null,default:ta},[mt]);var Zs={exports:{}},gi={},ks={exports:{}},Ks={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function ep(){return s1||(s1=1,function(l){function r(D,Q){var P=D.length;D.push(Q);t:for(;0<P;){var yt=P-1>>>1,S=D[yt];if(0<f(S,Q))D[yt]=Q,D[P]=S,P=yt;else break t}}function c(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var Q=D[0],P=D.pop();if(P!==Q){D[0]=P;t:for(var yt=0,S=D.length,q=S>>>1;yt<q;){var K=2*(yt+1)-1,Z=D[K],I=K+1,vt=D[I];if(0>f(Z,P))I<S&&0>f(vt,Z)?(D[yt]=vt,D[I]=P,yt=I):(D[yt]=Z,D[K]=P,yt=K);else if(I<S&&0>f(vt,P))D[yt]=vt,D[I]=P,yt=I;else break t}}return Q}function f(D,Q){var P=D.sortIndex-Q.sortIndex;return P!==0?P:D.id-Q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var h=Date,b=h.now();l.unstable_now=function(){return h.now()-b}}var v=[],y=[],x=1,z=null,R=3,G=!1,B=!1,H=!1,N=!1,k=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function et(D){for(var Q=c(y);Q!==null;){if(Q.callback===null)s(y);else if(Q.startTime<=D)s(y),Q.sortIndex=Q.expirationTime,r(v,Q);else break;Q=c(y)}}function j(D){if(H=!1,et(D),!B)if(c(v)!==null)B=!0,lt||(lt=!0,Ut());else{var Q=c(y);Q!==null&&Dt(j,Q.startTime-D)}}var lt=!1,W=-1,ht=5,Lt=-1;function ae(){return N?!0:!(l.unstable_now()-Lt<ht)}function se(){if(N=!1,lt){var D=l.unstable_now();Lt=D;var Q=!0;try{t:{B=!1,H&&(H=!1,L(W),W=-1),G=!0;var P=R;try{e:{for(et(D),z=c(v);z!==null&&!(z.expirationTime>D&&ae());){var yt=z.callback;if(typeof yt=="function"){z.callback=null,R=z.priorityLevel;var S=yt(z.expirationTime<=D);if(D=l.unstable_now(),typeof S=="function"){z.callback=S,et(D),Q=!0;break e}z===c(v)&&s(v),et(D)}else s(v);z=c(v)}if(z!==null)Q=!0;else{var q=c(y);q!==null&&Dt(j,q.startTime-D),Q=!1}}break t}finally{z=null,R=P,G=!1}Q=void 0}}finally{Q?Ut():lt=!1}}}var Ut;if(typeof V=="function")Ut=function(){V(se)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,fe=ge.port2;ge.port1.onmessage=se,Ut=function(){fe.postMessage(null)}}else Ut=function(){k(se,0)};function Dt(D,Q){W=k(function(){D(l.unstable_now())},Q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ht=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return R},l.unstable_next=function(D){switch(R){case 1:case 2:case 3:var Q=3;break;default:Q=R}var P=R;R=Q;try{return D()}finally{R=P}},l.unstable_requestPaint=function(){N=!0},l.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var P=R;R=D;try{return Q()}finally{R=P}},l.unstable_scheduleCallback=function(D,Q,P){var yt=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?yt+P:yt):P=yt,D){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=P+S,D={id:x++,callback:Q,priorityLevel:D,startTime:P,expirationTime:S,sortIndex:-1},P>yt?(D.sortIndex=P,r(y,D),c(v)===null&&D===c(y)&&(H?(L(W),W=-1):H=!0,Dt(j,P-yt))):(D.sortIndex=S,r(v,D),B||G||(B=!0,lt||(lt=!0,Ut()))),D},l.unstable_shouldYield=ae,l.unstable_wrapCallback=function(D){var Q=R;return function(){var P=R;R=Q;try{return D.apply(this,arguments)}finally{R=P}}}}(Ks)),Ks}var f1;function ap(){return f1||(f1=1,ks.exports=ep()),ks.exports}var Js={exports:{}},ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1;function np(){if(o1)return ie;o1=1;var l=gu();function r(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(v,y,x){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:z==null?null:""+z,children:v,containerInfo:y,implementation:x}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ie.createPortal=function(v,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return d(v,y,null,x)},ie.flushSync=function(v){var y=h.T,x=s.p;try{if(h.T=null,s.p=2,v)return v()}finally{h.T=y,s.p=x,s.d.f()}},ie.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(v,y))},ie.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},ie.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var x=y.as,z=b(x,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,G=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?s.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:z,integrity:R,fetchPriority:G}):x==="script"&&s.d.X(v,{crossOrigin:z,integrity:R,fetchPriority:G,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ie.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=b(y.as,y.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(v)},ie.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,z=b(x,y.crossOrigin);s.d.L(v,x,{crossOrigin:z,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ie.preloadModule=function(v,y){if(typeof v=="string")if(y){var x=b(y.as,y.crossOrigin);s.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(v)},ie.requestFormReset=function(v){s.d.r(v)},ie.unstable_batchedUpdates=function(v,y){return v(y)},ie.useFormState=function(v,y,x){return h.H.useFormState(v,y,x)},ie.useFormStatus=function(){return h.H.useHostTransitionStatus()},ie.version="19.1.0",ie}var d1;function lp(){if(d1)return Js.exports;d1=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Js.exports=np(),Js.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1;function ip(){if(m1)return gi;m1=1;var l=ap(),r=gu(),c=lp();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function b(t){if(d(t)!==t)throw Error(s(188))}function v(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var u=i.alternate;if(u===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===a)return b(i),t;if(u===n)return b(i),e;u=u.sibling}throw Error(s(188))}if(a.return!==n.return)a=i,n=u;else{for(var o=!1,m=i.child;m;){if(m===a){o=!0,a=i,n=u;break}if(m===n){o=!0,n=i,a=u;break}m=m.sibling}if(!o){for(m=u.child;m;){if(m===a){o=!0,a=u,n=i;break}if(m===n){o=!0,n=u,a=i;break}m=m.sibling}if(!o)throw Error(s(189))}}if(a.alternate!==n)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function y(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=y(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,z=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),V=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Lt=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function Ut(t){return t===null||typeof t!="object"?null:(t=se&&t[se]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ge?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case N:return"Profiler";case H:return"StrictMode";case j:return"Suspense";case lt:return"SuspenseList";case Lt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case G:return"Portal";case V:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case et:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return e=t.displayName||null,e!==null?e:fe(t.type)||"Memo";case ht:e=t._payload,t=t._init;try{return fe(t(e))}catch{}}return null}var Dt=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},yt=[],S=-1;function q(t){return{current:t}}function K(t){0>S||(t.current=yt[S],yt[S]=null,S--)}function Z(t,e){S++,yt[S]=t.current,t.current=e}var I=q(null),vt=q(null),it=q(null),pe=q(null);function wt(t,e){switch(Z(it,e),Z(vt,t),Z(I,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Dm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Dm(e),t=wm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(I),Z(I,t)}function Sa(){K(I),K(vt),K(it)}function Mu(t){t.memoizedState!==null&&Z(pe,t);var e=I.current,a=wm(e,t.type);e!==a&&(Z(vt,t),Z(I,a))}function Hi(t){vt.current===t&&(K(I),K(vt)),pe.current===t&&(K(pe),oi._currentValue=P)}var Nu=Object.prototype.hasOwnProperty,ju=l.unstable_scheduleCallback,Ru=l.unstable_cancelCallback,jy=l.unstable_shouldYield,Ry=l.unstable_requestPaint,Ve=l.unstable_now,Dy=l.unstable_getCurrentPriorityLevel,oo=l.unstable_ImmediatePriority,mo=l.unstable_UserBlockingPriority,qi=l.unstable_NormalPriority,wy=l.unstable_LowPriority,ho=l.unstable_IdlePriority,Cy=l.log,Uy=l.unstable_setDisableYieldValue,bl=null,be=null;function xa(t){if(typeof Cy=="function"&&Uy(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(bl,t)}catch{}}var Se=Math.clz32?Math.clz32:Yy,Hy=Math.log,qy=Math.LN2;function Yy(t){return t>>>=0,t===0?32:31-(Hy(t)/qy|0)|0}var Yi=256,Li=4194304;function Wa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Bi(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,u=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var m=n&134217727;return m!==0?(n=m&~u,n!==0?i=Wa(n):(o&=m,o!==0?i=Wa(o):a||(a=m&~t,a!==0&&(i=Wa(a))))):(m=n&~u,m!==0?i=Wa(m):o!==0?i=Wa(o):a||(a=n&~t,a!==0&&(i=Wa(a)))),i===0?0:e!==0&&e!==i&&(e&u)===0&&(u=i&-i,a=e&-e,u>=a||u===32&&(a&4194048)!==0)?e:i}function Sl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ly(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yo(){var t=Yi;return Yi<<=1,(Yi&4194048)===0&&(Yi=256),t}function vo(){var t=Li;return Li<<=1,(Li&62914560)===0&&(Li=4194304),t}function Du(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function xl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function By(t,e,a,n,i,u){var o=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var m=t.entanglements,g=t.expirationTimes,T=t.hiddenUpdates;for(a=o&~a;0<a;){var w=31-Se(a),U=1<<w;m[w]=0,g[w]=-1;var _=T[w];if(_!==null)for(T[w]=null,w=0;w<_.length;w++){var M=_[w];M!==null&&(M.lane&=-536870913)}a&=~U}n!==0&&go(t,n,0),u!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=u&~(o&~e))}function go(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-Se(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function po(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-Se(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function wu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Cu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bo(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:Pm(t.type))}function Xy(t,e){var a=Q.p;try{return Q.p=t,e()}finally{Q.p=a}}var Aa=Math.random().toString(36).slice(2),ne="__reactFiber$"+Aa,oe="__reactProps$"+Aa,xn="__reactContainer$"+Aa,Uu="__reactEvents$"+Aa,Gy="__reactListeners$"+Aa,Vy="__reactHandles$"+Aa,So="__reactResources$"+Aa,Al="__reactMarker$"+Aa;function Hu(t){delete t[ne],delete t[oe],delete t[Uu],delete t[Gy],delete t[Vy]}function An(t){var e=t[ne];if(e)return e;for(var a=t.parentNode;a;){if(e=a[xn]||a[ne]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=qm(t);t!==null;){if(a=t[ne])return a;t=qm(t)}return e}t=a,a=t.parentNode}return null}function On(t){if(t=t[ne]||t[xn]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Ol(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function En(t){var e=t[So];return e||(e=t[So]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jt(t){t[Al]=!0}var xo=new Set,Ao={};function Pa(t,e){Tn(t,e),Tn(t+"Capture",e)}function Tn(t,e){for(Ao[t]=e,t=0;t<e.length;t++)xo.add(e[t])}var Qy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oo={},Eo={};function Zy(t){return Nu.call(Eo,t)?!0:Nu.call(Oo,t)?!1:Qy.test(t)?Eo[t]=!0:(Oo[t]=!0,!1)}function Xi(t,e,a){if(Zy(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Gi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function aa(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var qu,To;function _n(t){if(qu===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);qu=e&&e[1]||"",To=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qu+t+To}var Yu=!1;function Lu(t,e){if(!t||Yu)return"";Yu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(M){var _=M}Reflect.construct(t,[],U)}else{try{U.call()}catch(M){_=M}t.call(U.prototype)}}else{try{throw Error()}catch(M){_=M}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(M){if(M&&_&&typeof M.stack=="string")return[M.stack,_.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),o=u[0],m=u[1];if(o&&m){var g=o.split(`
`),T=m.split(`
`);for(i=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(n===g.length||i===T.length)for(n=g.length-1,i=T.length-1;1<=n&&0<=i&&g[n]!==T[i];)i--;for(;1<=n&&0<=i;n--,i--)if(g[n]!==T[i]){if(n!==1||i!==1)do if(n--,i--,0>i||g[n]!==T[i]){var w=`
`+g[n].replace(" at new "," at ");return t.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",t.displayName)),w}while(1<=n&&0<=i);break}}}finally{Yu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_n(a):""}function ky(t){switch(t.tag){case 26:case 27:case 5:return _n(t.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 15:return Lu(t.type,!1);case 11:return Lu(t.type.render,!1);case 1:return Lu(t.type,!0);case 31:return _n("Activity");default:return""}}function _o(t){try{var e="";do e+=ky(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ky(t){var e=zo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,u.call(this,o)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vi(t){t._valueTracker||(t._valueTracker=Ky(t))}function Mo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=zo(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function Qi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Jy=/[\n"\\]/g;function Re(t){return t.replace(Jy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Bu(t,e,a,n,i,u,o,m){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+je(e)):t.value!==""+je(e)&&(t.value=""+je(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?Xu(t,o,je(e)):a!=null?Xu(t,o,je(a)):n!=null&&t.removeAttribute("value"),i==null&&u!=null&&(t.defaultChecked=!!u),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.name=""+je(m):t.removeAttribute("name")}function No(t,e,a,n,i,u,o,m){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;a=a!=null?""+je(a):"",e=e!=null?""+je(e):a,m||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=m?t.checked:!!n,t.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o)}function Xu(t,e,a){e==="number"&&Qi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function zn(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+je(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jo(t,e,a){if(e!=null&&(e=""+je(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+je(a):""}function Ro(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(s(92));if(Dt(n)){if(1<n.length)throw Error(s(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=je(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function Mn(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var $y=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Do(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||$y.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function wo(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&Do(t,i,n)}else for(var u in e)e.hasOwnProperty(u)&&Do(t,u,e[u])}function Gu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zi(t){return Wy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Vu=null;function Qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nn=null,jn=null;function Co(t){var e=On(t);if(e&&(t=e.stateNode)){var a=t[oe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Bu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Re(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[oe]||null;if(!i)throw Error(s(90));Bu(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&Mo(n)}break t;case"textarea":jo(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&zn(t,!!a.multiple,e,!1)}}}var Zu=!1;function Uo(t,e,a){if(Zu)return t(e,a);Zu=!0;try{var n=t(e);return n}finally{if(Zu=!1,(Nn!==null||jn!==null)&&(jr(),Nn&&(e=Nn,t=jn,jn=Nn=null,Co(e),t)))for(e=0;e<t.length;e++)Co(t[e])}}function El(t,e){var a=t.stateNode;if(a===null)return null;var n=a[oe]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=!1;if(na)try{var Tl={};Object.defineProperty(Tl,"passive",{get:function(){ku=!0}}),window.addEventListener("test",Tl,Tl),window.removeEventListener("test",Tl,Tl)}catch{ku=!1}var Oa=null,Ku=null,ki=null;function Ho(){if(ki)return ki;var t,e=Ku,a=e.length,n,i="value"in Oa?Oa.value:Oa.textContent,u=i.length;for(t=0;t<a&&e[t]===i[t];t++);var o=a-t;for(n=1;n<=o&&e[a-n]===i[u-n];n++);return ki=i.slice(t,1<n?1-n:void 0)}function Ki(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ji(){return!0}function qo(){return!1}function de(t){function e(a,n,i,u,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=u,this.target=o,this.currentTarget=null;for(var m in t)t.hasOwnProperty(m)&&(a=t[m],this[m]=a?a(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ji:qo,this.isPropagationStopped=qo,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ji)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ji)},persist:function(){},isPersistent:Ji}),e}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=de(Ia),_l=x({},Ia,{view:0,detail:0}),Py=de(_l),Ju,$u,zl,Fi=x({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zl&&(zl&&t.type==="mousemove"?(Ju=t.screenX-zl.screenX,$u=t.screenY-zl.screenY):$u=Ju=0,zl=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:$u}}),Yo=de(Fi),Iy=x({},Fi,{dataTransfer:0}),tv=de(Iy),ev=x({},_l,{relatedTarget:0}),Fu=de(ev),av=x({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=de(av),lv=x({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iv=de(lv),rv=x({},Ia,{data:0}),Lo=de(rv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sv[t])?!!e[t]:!1}function Wu(){return fv}var ov=x({},_l,{key:function(t){if(t.key){var e=uv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ki(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(t){return t.type==="keypress"?Ki(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ki(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dv=de(ov),mv=x({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bo=de(mv),hv=x({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),yv=de(hv),vv=x({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),gv=de(vv),pv=x({},Fi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=de(pv),Sv=x({},Ia,{newState:0,oldState:0}),xv=de(Sv),Av=[9,13,27,32],Pu=na&&"CompositionEvent"in window,Ml=null;na&&"documentMode"in document&&(Ml=document.documentMode);var Ov=na&&"TextEvent"in window&&!Ml,Xo=na&&(!Pu||Ml&&8<Ml&&11>=Ml),Go=" ",Vo=!1;function Qo(t,e){switch(t){case"keyup":return Av.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rn=!1;function Ev(t,e){switch(t){case"compositionend":return Zo(e);case"keypress":return e.which!==32?null:(Vo=!0,Go);case"textInput":return t=e.data,t===Go&&Vo?null:t;default:return null}}function Tv(t,e){if(Rn)return t==="compositionend"||!Pu&&Qo(t,e)?(t=Ho(),ki=Ku=Oa=null,Rn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xo&&e.locale!=="ko"?null:e.data;default:return null}}var _v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ko(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_v[t.type]:e==="textarea"}function Ko(t,e,a,n){Nn?jn?jn.push(n):jn=[n]:Nn=n,e=Hr(e,"onChange"),0<e.length&&(a=new $i("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var Nl=null,jl=null;function zv(t){zm(t,0)}function Wi(t){var e=Ol(t);if(Mo(e))return t}function Jo(t,e){if(t==="change")return e}var $o=!1;if(na){var Iu;if(na){var tc="oninput"in document;if(!tc){var Fo=document.createElement("div");Fo.setAttribute("oninput","return;"),tc=typeof Fo.oninput=="function"}Iu=tc}else Iu=!1;$o=Iu&&(!document.documentMode||9<document.documentMode)}function Wo(){Nl&&(Nl.detachEvent("onpropertychange",Po),jl=Nl=null)}function Po(t){if(t.propertyName==="value"&&Wi(jl)){var e=[];Ko(e,jl,t,Qu(t)),Uo(zv,e)}}function Mv(t,e,a){t==="focusin"?(Wo(),Nl=e,jl=a,Nl.attachEvent("onpropertychange",Po)):t==="focusout"&&Wo()}function Nv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wi(jl)}function jv(t,e){if(t==="click")return Wi(e)}function Rv(t,e){if(t==="input"||t==="change")return Wi(e)}function Dv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xe=typeof Object.is=="function"?Object.is:Dv;function Rl(t,e){if(xe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Nu.call(e,i)||!xe(t[i],e[i]))return!1}return!0}function Io(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function td(t,e){var a=Io(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Io(a)}}function ed(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ed(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ad(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Qi(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Qi(t.document)}return e}function ec(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var wv=na&&"documentMode"in document&&11>=document.documentMode,Dn=null,ac=null,Dl=null,nc=!1;function nd(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nc||Dn==null||Dn!==Qi(n)||(n=Dn,"selectionStart"in n&&ec(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Dl&&Rl(Dl,n)||(Dl=n,n=Hr(ac,"onSelect"),0<n.length&&(e=new $i("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=Dn)))}function tn(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var wn={animationend:tn("Animation","AnimationEnd"),animationiteration:tn("Animation","AnimationIteration"),animationstart:tn("Animation","AnimationStart"),transitionrun:tn("Transition","TransitionRun"),transitionstart:tn("Transition","TransitionStart"),transitioncancel:tn("Transition","TransitionCancel"),transitionend:tn("Transition","TransitionEnd")},lc={},ld={};na&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function en(t){if(lc[t])return lc[t];if(!wn[t])return t;var e=wn[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in ld)return lc[t]=e[a];return t}var id=en("animationend"),rd=en("animationiteration"),ud=en("animationstart"),Cv=en("transitionrun"),Uv=en("transitionstart"),Hv=en("transitioncancel"),cd=en("transitionend"),sd=new Map,ic="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ic.push("scrollEnd");function Be(t,e){sd.set(t,e),Pa(e,[t])}var fd=new WeakMap;function De(t,e){if(typeof t=="object"&&t!==null){var a=fd.get(t);return a!==void 0?a:(e={value:t,source:e,stack:_o(e)},fd.set(t,e),e)}return{value:t,source:e,stack:_o(e)}}var we=[],Cn=0,rc=0;function Pi(){for(var t=Cn,e=rc=Cn=0;e<t;){var a=we[e];we[e++]=null;var n=we[e];we[e++]=null;var i=we[e];we[e++]=null;var u=we[e];if(we[e++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}u!==0&&od(a,i,u)}}function Ii(t,e,a,n){we[Cn++]=t,we[Cn++]=e,we[Cn++]=a,we[Cn++]=n,rc|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function uc(t,e,a,n){return Ii(t,e,a,n),tr(t)}function Un(t,e){return Ii(t,null,null,e),tr(t)}function od(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,u=t.return;u!==null;)u.childLanes|=a,n=u.alternate,n!==null&&(n.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(i=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,i&&e!==null&&(i=31-Se(a),t=u.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),u):null}function tr(t){if(50<ni)throw ni=0,ms=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Hn={};function qv(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(t,e,a,n){return new qv(t,e,a,n)}function cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,e){var a=t.alternate;return a===null?(a=Ae(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function dd(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function er(t,e,a,n,i,u){var o=0;if(n=t,typeof t=="function")cc(t)&&(o=1);else if(typeof t=="string")o=Lg(t,a,I.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Lt:return t=Ae(31,a,e,i),t.elementType=Lt,t.lanes=u,t;case B:return an(a.children,i,u,e);case H:o=8,i|=24;break;case N:return t=Ae(12,a,e,i|2),t.elementType=N,t.lanes=u,t;case j:return t=Ae(13,a,e,i),t.elementType=j,t.lanes=u,t;case lt:return t=Ae(19,a,e,i),t.elementType=lt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:case V:o=10;break t;case L:o=9;break t;case et:o=11;break t;case W:o=14;break t;case ht:o=16,n=null;break t}o=29,a=Error(s(130,t===null?"null":typeof t,"")),n=null}return e=Ae(o,a,e,i),e.elementType=t,e.type=n,e.lanes=u,e}function an(t,e,a,n){return t=Ae(7,t,n,e),t.lanes=a,t}function sc(t,e,a){return t=Ae(6,t,null,e),t.lanes=a,t}function fc(t,e,a){return e=Ae(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var qn=[],Yn=0,ar=null,nr=0,Ce=[],Ue=0,nn=null,ia=1,ra="";function ln(t,e){qn[Yn++]=nr,qn[Yn++]=ar,ar=t,nr=e}function md(t,e,a){Ce[Ue++]=ia,Ce[Ue++]=ra,Ce[Ue++]=nn,nn=t;var n=ia;t=ra;var i=32-Se(n)-1;n&=~(1<<i),a+=1;var u=32-Se(e)+i;if(30<u){var o=i-i%5;u=(n&(1<<o)-1).toString(32),n>>=o,i-=o,ia=1<<32-Se(e)+i|a<<i|n,ra=u+t}else ia=1<<u|a<<i|n,ra=t}function oc(t){t.return!==null&&(ln(t,1),md(t,1,0))}function dc(t){for(;t===ar;)ar=qn[--Yn],qn[Yn]=null,nr=qn[--Yn],qn[Yn]=null;for(;t===nn;)nn=Ce[--Ue],Ce[Ue]=null,ra=Ce[--Ue],Ce[Ue]=null,ia=Ce[--Ue],Ce[Ue]=null}var ce=null,qt=null,pt=!1,rn=null,Qe=!1,mc=Error(s(519));function un(t){var e=Error(s(418,""));throw Ul(De(e,t)),mc}function hd(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[ne]=t,e[oe]=n,a){case"dialog":ft("cancel",e),ft("close",e);break;case"iframe":case"object":case"embed":ft("load",e);break;case"video":case"audio":for(a=0;a<ii.length;a++)ft(ii[a],e);break;case"source":ft("error",e);break;case"img":case"image":case"link":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"input":ft("invalid",e),No(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Vi(e);break;case"select":ft("invalid",e);break;case"textarea":ft("invalid",e),Ro(e,n.value,n.defaultValue,n.children),Vi(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||Rm(e.textContent,a)?(n.popover!=null&&(ft("beforetoggle",e),ft("toggle",e)),n.onScroll!=null&&ft("scroll",e),n.onScrollEnd!=null&&ft("scrollend",e),n.onClick!=null&&(e.onclick=qr),e=!0):e=!1,e||un(t)}function yd(t){for(ce=t.return;ce;)switch(ce.tag){case 5:case 13:Qe=!1;return;case 27:case 3:Qe=!0;return;default:ce=ce.return}}function wl(t){if(t!==ce)return!1;if(!pt)return yd(t),pt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ns(t.type,t.memoizedProps)),a=!a),a&&qt&&un(t),yd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){qt=Ge(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}qt=null}}else e===27?(e=qt,La(t.type)?(t=ws,ws=null,qt=t):qt=e):qt=ce?Ge(t.stateNode.nextSibling):null;return!0}function Cl(){qt=ce=null,pt=!1}function vd(){var t=rn;return t!==null&&(ye===null?ye=t:ye.push.apply(ye,t),rn=null),t}function Ul(t){rn===null?rn=[t]:rn.push(t)}var hc=q(null),cn=null,ua=null;function Ea(t,e,a){Z(hc,e._currentValue),e._currentValue=a}function ca(t){t._currentValue=hc.current,K(hc)}function yc(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function vc(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){var o=i.child;u=u.firstContext;t:for(;u!==null;){var m=u;u=i;for(var g=0;g<e.length;g++)if(m.context===e[g]){u.lanes|=a,m=u.alternate,m!==null&&(m.lanes|=a),yc(u.return,a,t),n||(o=null);break t}u=m.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=a,u=o.alternate,u!==null&&(u.lanes|=a),yc(o,a,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Hl(t,e,a,n){t=null;for(var i=e,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var m=i.type;xe(i.pendingProps.value,o.value)||(t!==null?t.push(m):t=[m])}}else if(i===pe.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(oi):t=[oi])}i=i.return}t!==null&&vc(e,t,a,n),e.flags|=262144}function lr(t){for(t=t.firstContext;t!==null;){if(!xe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sn(t){cn=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function le(t){return gd(cn,t)}function ir(t,e){return cn===null&&sn(t),gd(t,e)}function gd(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(s(308));ua=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ua=ua.next=e;return a}var Yv=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Lv=l.unstable_scheduleCallback,Bv=l.unstable_NormalPriority,Zt={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gc(){return{controller:new Yv,data:new Map,refCount:0}}function ql(t){t.refCount--,t.refCount===0&&Lv(Bv,function(){t.controller.abort()})}var Yl=null,pc=0,Ln=0,Bn=null;function Xv(t,e){if(Yl===null){var a=Yl=[];pc=0,Ln=Ss(),Bn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return pc++,e.then(pd,pd),e}function pd(){if(--pc===0&&Yl!==null){Bn!==null&&(Bn.status="fulfilled");var t=Yl;Yl=null,Ln=0,Bn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Gv(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var bd=D.S;D.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Xv(t,e),bd!==null&&bd(t,e)};var fn=q(null);function bc(){var t=fn.current;return t!==null?t:Nt.pooledCache}function rr(t,e){e===null?Z(fn,fn.current):Z(fn,e.pool)}function Sd(){var t=bc();return t===null?null:{parent:Zt._currentValue,pool:t}}var Ll=Error(s(460)),xd=Error(s(474)),ur=Error(s(542)),Sc={then:function(){}};function Ad(t){return t=t.status,t==="fulfilled"||t==="rejected"}function cr(){}function Od(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(cr,cr),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Td(t),t;default:if(typeof e.status=="string")e.then(cr,cr);else{if(t=Nt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Td(t),t}throw Bl=e,Ll}}var Bl=null;function Ed(){if(Bl===null)throw Error(s(459));var t=Bl;return Bl=null,t}function Td(t){if(t===Ll||t===ur)throw Error(s(483))}var Ta=!1;function xc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ac(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(Ot&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=tr(t),od(t,null,a),e}return Ii(t,n,e,a),tr(t)}function Xl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,po(t,a)}}function Oc(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?i=u=o:u=u.next=o,a=a.next}while(a!==null);u===null?i=u=e:u=u.next=e}else i=u=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Ec=!1;function Gl(){if(Ec){var t=Bn;if(t!==null)throw t}}function Vl(t,e,a,n){Ec=!1;var i=t.updateQueue;Ta=!1;var u=i.firstBaseUpdate,o=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var g=m,T=g.next;g.next=null,o===null?u=T:o.next=T,o=g;var w=t.alternate;w!==null&&(w=w.updateQueue,m=w.lastBaseUpdate,m!==o&&(m===null?w.firstBaseUpdate=T:m.next=T,w.lastBaseUpdate=g))}if(u!==null){var U=i.baseState;o=0,w=T=g=null,m=u;do{var _=m.lane&-536870913,M=_!==m.lane;if(M?(dt&_)===_:(n&_)===_){_!==0&&_===Ln&&(Ec=!0),w!==null&&(w=w.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});t:{var nt=t,tt=m;_=e;var zt=a;switch(tt.tag){case 1:if(nt=tt.payload,typeof nt=="function"){U=nt.call(zt,U,_);break t}U=nt;break t;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=tt.payload,_=typeof nt=="function"?nt.call(zt,U,_):nt,_==null)break t;U=x({},U,_);break t;case 2:Ta=!0}}_=m.callback,_!==null&&(t.flags|=64,M&&(t.flags|=8192),M=i.callbacks,M===null?i.callbacks=[_]:M.push(_))}else M={lane:_,tag:m.tag,payload:m.payload,callback:m.callback,next:null},w===null?(T=w=M,g=U):w=w.next=M,o|=_;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;M=m,m=M.next,M.next=null,i.lastBaseUpdate=M,i.shared.pending=null}}while(!0);w===null&&(g=U),i.baseState=g,i.firstBaseUpdate=T,i.lastBaseUpdate=w,u===null&&(i.shared.lanes=0),Ua|=o,t.lanes=o,t.memoizedState=U}}function _d(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function zd(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_d(a[t],e)}var Xn=q(null),sr=q(0);function Md(t,e){t=ya,Z(sr,t),Z(Xn,e),ya=t|e.baseLanes}function Tc(){Z(sr,ya),Z(Xn,Xn.current)}function _c(){ya=sr.current,K(Xn),K(sr)}var Ma=0,ut=null,Tt=null,Gt=null,fr=!1,Gn=!1,on=!1,or=0,Ql=0,Vn=null,Vv=0;function Bt(){throw Error(s(321))}function zc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!xe(t[a],e[a]))return!1;return!0}function Mc(t,e,a,n,i,u){return Ma=u,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?o0:d0,on=!1,u=a(n,i),on=!1,Gn&&(u=jd(e,a,n,i)),Nd(t),u}function Nd(t){D.H=gr;var e=Tt!==null&&Tt.next!==null;if(Ma=0,Gt=Tt=ut=null,fr=!1,Ql=0,Vn=null,e)throw Error(s(300));t===null||$t||(t=t.dependencies,t!==null&&lr(t)&&($t=!0))}function jd(t,e,a,n){ut=t;var i=0;do{if(Gn&&(Vn=null),Ql=0,Gn=!1,25<=i)throw Error(s(301));if(i+=1,Gt=Tt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}D.H=Fv,u=e(a,n)}while(Gn);return u}function Qv(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?Zl(e):e,t=t.useState()[0],(Tt!==null?Tt.memoizedState:null)!==t&&(ut.flags|=1024),e}function Nc(){var t=or!==0;return or=0,t}function jc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Rc(t){if(fr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}fr=!1}Ma=0,Gt=Tt=ut=null,Gn=!1,Ql=or=0,Vn=null}function me(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?ut.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Vt(){if(Tt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Gt===null?ut.memoizedState:Gt.next;if(e!==null)Gt=e,Tt=t;else{if(t===null)throw ut.alternate===null?Error(s(467)):Error(s(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Gt===null?ut.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zl(t){var e=Ql;return Ql+=1,Vn===null&&(Vn=[]),t=Od(Vn,t,e),e=ut,(Gt===null?e.memoizedState:Gt.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?o0:d0),t}function dr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zl(t);if(t.$$typeof===V)return le(t)}throw Error(s(438,String(t)))}function wc(t){var e=null,a=ut.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=ut.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Dc(),ut.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=ae;return e.index++,a}function sa(t,e){return typeof e=="function"?e(t):e}function mr(t){var e=Vt();return Cc(e,Tt,t)}function Cc(t,e,a){var n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var i=t.baseQueue,u=n.pending;if(u!==null){if(i!==null){var o=i.next;i.next=u.next,u.next=o}e.baseQueue=i=u,n.pending=null}if(u=t.baseState,i===null)t.memoizedState=u;else{e=i.next;var m=o=null,g=null,T=e,w=!1;do{var U=T.lane&-536870913;if(U!==T.lane?(dt&U)===U:(Ma&U)===U){var _=T.revertLane;if(_===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),U===Ln&&(w=!0);else if((Ma&_)===_){T=T.next,_===Ln&&(w=!0);continue}else U={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(m=g=U,o=u):g=g.next=U,ut.lanes|=_,Ua|=_;U=T.action,on&&a(u,U),u=T.hasEagerState?T.eagerState:a(u,U)}else _={lane:U,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(m=g=_,o=u):g=g.next=_,ut.lanes|=U,Ua|=U;T=T.next}while(T!==null&&T!==e);if(g===null?o=u:g.next=m,!xe(u,t.memoizedState)&&($t=!0,w&&(a=Bn,a!==null)))throw a;t.memoizedState=u,t.baseState=o,t.baseQueue=g,n.lastRenderedState=u}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Uc(t){var e=Vt(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,u=e.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do u=t(u,o.action),o=o.next;while(o!==i);xe(u,e.memoizedState)||($t=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),a.lastRenderedState=u}return[u,n]}function Rd(t,e,a){var n=ut,i=Vt(),u=pt;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=e();var o=!xe((Tt||i).memoizedState,a);o&&(i.memoizedState=a,$t=!0),i=i.queue;var m=Cd.bind(null,n,i,t);if(kl(2048,8,m,[t]),i.getSnapshot!==e||o||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Qn(9,hr(),wd.bind(null,n,i,a,e),null),Nt===null)throw Error(s(349));u||(Ma&124)!==0||Dd(n,e,a)}return a}function Dd(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ut.updateQueue,e===null?(e=Dc(),ut.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function wd(t,e,a,n){e.value=a,e.getSnapshot=n,Ud(e)&&Hd(t)}function Cd(t,e,a){return a(function(){Ud(e)&&Hd(t)})}function Ud(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!xe(t,a)}catch{return!0}}function Hd(t){var e=Un(t,2);e!==null&&ze(e,t,2)}function Hc(t){var e=me();if(typeof t=="function"){var a=t;if(t=a(),on){xa(!0);try{a()}finally{xa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e}function qd(t,e,a,n){return t.baseState=a,Cc(t,Tt,typeof n=="function"?n:sa)}function Zv(t,e,a,n,i){if(vr(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){u.listeners.push(o)}};D.T!==null?a(!0):u.isTransition=!1,n(u),a=e.pending,a===null?(u.next=e.pending=u,Yd(e,u)):(u.next=a.next,e.pending=a.next=u)}}function Yd(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var u=D.T,o={};D.T=o;try{var m=a(i,n),g=D.S;g!==null&&g(o,m),Ld(t,e,m)}catch(T){qc(t,e,T)}finally{D.T=u}}else try{u=a(i,n),Ld(t,e,u)}catch(T){qc(t,e,T)}}function Ld(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Bd(t,e,n)},function(n){return qc(t,e,n)}):Bd(t,e,a)}function Bd(t,e,a){e.status="fulfilled",e.value=a,Xd(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Yd(t,a)))}function qc(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,Xd(e),e=e.next;while(e!==n)}t.action=null}function Xd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Gd(t,e){return e}function Vd(t,e){if(pt){var a=Nt.formState;if(a!==null){t:{var n=ut;if(pt){if(qt){e:{for(var i=qt,u=Qe;i.nodeType!==8;){if(!u){i=null;break e}if(i=Ge(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){qt=Ge(i.nextSibling),n=i.data==="F!";break t}}un(n)}n=!1}n&&(e=a[0])}}return a=me(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gd,lastRenderedState:e},a.queue=n,a=c0.bind(null,ut,n),n.dispatch=a,n=Hc(!1),u=Gc.bind(null,ut,!1,n.queue),n=me(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=Zv.bind(null,ut,i,u,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function Qd(t){var e=Vt();return Zd(e,Tt,t)}function Zd(t,e,a){if(e=Cc(t,e,Gd)[0],t=mr(sa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Zl(e)}catch(o){throw o===Ll?ur:o}else n=e;e=Vt();var i=e.queue,u=i.dispatch;return a!==e.memoizedState&&(ut.flags|=2048,Qn(9,hr(),kv.bind(null,i,a),null)),[n,u,t]}function kv(t,e){t.action=e}function kd(t){var e=Vt(),a=Tt;if(a!==null)return Zd(e,a,t);Vt(),e=e.memoizedState,a=Vt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Qn(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=ut.updateQueue,e===null&&(e=Dc(),ut.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function hr(){return{destroy:void 0,resource:void 0}}function Kd(){return Vt().memoizedState}function yr(t,e,a,n){var i=me();n=n===void 0?null:n,ut.flags|=t,i.memoizedState=Qn(1|e,hr(),a,n)}function kl(t,e,a,n){var i=Vt();n=n===void 0?null:n;var u=i.memoizedState.inst;Tt!==null&&n!==null&&zc(n,Tt.memoizedState.deps)?i.memoizedState=Qn(e,u,a,n):(ut.flags|=t,i.memoizedState=Qn(1|e,u,a,n))}function Jd(t,e){yr(8390656,8,t,e)}function $d(t,e){kl(2048,8,t,e)}function Fd(t,e){return kl(4,2,t,e)}function Wd(t,e){return kl(4,4,t,e)}function Pd(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Id(t,e,a){a=a!=null?a.concat([t]):null,kl(4,4,Pd.bind(null,e,t),a)}function Yc(){}function t0(t,e){var a=Vt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&zc(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function e0(t,e){var a=Vt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&zc(e,n[1]))return n[0];if(n=t(),on){xa(!0);try{t()}finally{xa(!1)}}return a.memoizedState=[n,e],n}function Lc(t,e,a){return a===void 0||(Ma&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=lm(),ut.lanes|=t,Ua|=t,a)}function a0(t,e,a,n){return xe(a,e)?a:Xn.current!==null?(t=Lc(t,a,n),xe(t,e)||($t=!0),t):(Ma&42)===0?($t=!0,t.memoizedState=a):(t=lm(),ut.lanes|=t,Ua|=t,e)}function n0(t,e,a,n,i){var u=Q.p;Q.p=u!==0&&8>u?u:8;var o=D.T,m={};D.T=m,Gc(t,!1,e,a);try{var g=i(),T=D.S;if(T!==null&&T(m,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var w=Gv(g,n);Kl(t,e,w,_e(t))}else Kl(t,e,n,_e(t))}catch(U){Kl(t,e,{then:function(){},status:"rejected",reason:U},_e())}finally{Q.p=u,D.T=o}}function Kv(){}function Bc(t,e,a,n){if(t.tag!==5)throw Error(s(476));var i=l0(t).queue;n0(t,i,e,P,a===null?Kv:function(){return i0(t),a(n)})}function l0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:P},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function i0(t){var e=l0(t).next.queue;Kl(t,e,{},_e())}function Xc(){return le(oi)}function r0(){return Vt().memoizedState}function u0(){return Vt().memoizedState}function Jv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=_e();t=_a(a);var n=za(e,t,a);n!==null&&(ze(n,e,a),Xl(n,e,a)),e={cache:gc()},t.payload=e;return}e=e.return}}function $v(t,e,a){var n=_e();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},vr(t)?s0(e,a):(a=uc(t,e,a,n),a!==null&&(ze(a,t,n),f0(a,e,n)))}function c0(t,e,a){var n=_e();Kl(t,e,a,n)}function Kl(t,e,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(vr(t))s0(e,i);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var o=e.lastRenderedState,m=u(o,a);if(i.hasEagerState=!0,i.eagerState=m,xe(m,o))return Ii(t,e,i,0),Nt===null&&Pi(),!1}catch{}finally{}if(a=uc(t,e,i,n),a!==null)return ze(a,t,n),f0(a,e,n),!0}return!1}function Gc(t,e,a,n){if(n={lane:2,revertLane:Ss(),action:n,hasEagerState:!1,eagerState:null,next:null},vr(t)){if(e)throw Error(s(479))}else e=uc(t,a,n,2),e!==null&&ze(e,t,2)}function vr(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function s0(t,e){Gn=fr=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function f0(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,po(t,a)}}var gr={readContext:le,use:dr,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt},o0={readContext:le,use:dr,useCallback:function(t,e){return me().memoizedState=[t,e===void 0?null:e],t},useContext:le,useEffect:Jd,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,yr(4194308,4,Pd.bind(null,e,t),a)},useLayoutEffect:function(t,e){return yr(4194308,4,t,e)},useInsertionEffect:function(t,e){yr(4,2,t,e)},useMemo:function(t,e){var a=me();e=e===void 0?null:e;var n=t();if(on){xa(!0);try{t()}finally{xa(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=me();if(a!==void 0){var i=a(e);if(on){xa(!0);try{a(e)}finally{xa(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=$v.bind(null,ut,t),[n.memoizedState,t]},useRef:function(t){var e=me();return t={current:t},e.memoizedState=t},useState:function(t){t=Hc(t);var e=t.queue,a=c0.bind(null,ut,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Yc,useDeferredValue:function(t,e){var a=me();return Lc(a,t,e)},useTransition:function(){var t=Hc(!1);return t=n0.bind(null,ut,t.queue,!0,!1),me().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=ut,i=me();if(pt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),Nt===null)throw Error(s(349));(dt&124)!==0||Dd(n,e,a)}i.memoizedState=a;var u={value:a,getSnapshot:e};return i.queue=u,Jd(Cd.bind(null,n,u,t),[t]),n.flags|=2048,Qn(9,hr(),wd.bind(null,n,u,a,e),null),a},useId:function(){var t=me(),e=Nt.identifierPrefix;if(pt){var a=ra,n=ia;a=(n&~(1<<32-Se(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=or++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=Vv++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Xc,useFormState:Vd,useActionState:Vd,useOptimistic:function(t){var e=me();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Gc.bind(null,ut,!0,a),a.dispatch=e,[t,e]},useMemoCache:wc,useCacheRefresh:function(){return me().memoizedState=Jv.bind(null,ut)}},d0={readContext:le,use:dr,useCallback:t0,useContext:le,useEffect:$d,useImperativeHandle:Id,useInsertionEffect:Fd,useLayoutEffect:Wd,useMemo:e0,useReducer:mr,useRef:Kd,useState:function(){return mr(sa)},useDebugValue:Yc,useDeferredValue:function(t,e){var a=Vt();return a0(a,Tt.memoizedState,t,e)},useTransition:function(){var t=mr(sa)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:Zl(t),e]},useSyncExternalStore:Rd,useId:r0,useHostTransitionStatus:Xc,useFormState:Qd,useActionState:Qd,useOptimistic:function(t,e){var a=Vt();return qd(a,Tt,t,e)},useMemoCache:wc,useCacheRefresh:u0},Fv={readContext:le,use:dr,useCallback:t0,useContext:le,useEffect:$d,useImperativeHandle:Id,useInsertionEffect:Fd,useLayoutEffect:Wd,useMemo:e0,useReducer:Uc,useRef:Kd,useState:function(){return Uc(sa)},useDebugValue:Yc,useDeferredValue:function(t,e){var a=Vt();return Tt===null?Lc(a,t,e):a0(a,Tt.memoizedState,t,e)},useTransition:function(){var t=Uc(sa)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:Zl(t),e]},useSyncExternalStore:Rd,useId:r0,useHostTransitionStatus:Xc,useFormState:kd,useActionState:kd,useOptimistic:function(t,e){var a=Vt();return Tt!==null?qd(a,Tt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:wc,useCacheRefresh:u0},Zn=null,Jl=0;function pr(t){var e=Jl;return Jl+=1,Zn===null&&(Zn=[]),Od(Zn,t,e)}function $l(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function br(t,e){throw e.$$typeof===z?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function m0(t){var e=t._init;return e(t._payload)}function h0(t){function e(O,A){if(t){var E=O.deletions;E===null?(O.deletions=[A],O.flags|=16):E.push(A)}}function a(O,A){if(!t)return null;for(;A!==null;)e(O,A),A=A.sibling;return null}function n(O){for(var A=new Map;O!==null;)O.key!==null?A.set(O.key,O):A.set(O.index,O),O=O.sibling;return A}function i(O,A){return O=la(O,A),O.index=0,O.sibling=null,O}function u(O,A,E){return O.index=E,t?(E=O.alternate,E!==null?(E=E.index,E<A?(O.flags|=67108866,A):E):(O.flags|=67108866,A)):(O.flags|=1048576,A)}function o(O){return t&&O.alternate===null&&(O.flags|=67108866),O}function m(O,A,E,C){return A===null||A.tag!==6?(A=sc(E,O.mode,C),A.return=O,A):(A=i(A,E),A.return=O,A)}function g(O,A,E,C){var J=E.type;return J===B?w(O,A,E.props.children,C,E.key):A!==null&&(A.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ht&&m0(J)===A.type)?(A=i(A,E.props),$l(A,E),A.return=O,A):(A=er(E.type,E.key,E.props,null,O.mode,C),$l(A,E),A.return=O,A)}function T(O,A,E,C){return A===null||A.tag!==4||A.stateNode.containerInfo!==E.containerInfo||A.stateNode.implementation!==E.implementation?(A=fc(E,O.mode,C),A.return=O,A):(A=i(A,E.children||[]),A.return=O,A)}function w(O,A,E,C,J){return A===null||A.tag!==7?(A=an(E,O.mode,C,J),A.return=O,A):(A=i(A,E),A.return=O,A)}function U(O,A,E){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=sc(""+A,O.mode,E),A.return=O,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case R:return E=er(A.type,A.key,A.props,null,O.mode,E),$l(E,A),E.return=O,E;case G:return A=fc(A,O.mode,E),A.return=O,A;case ht:var C=A._init;return A=C(A._payload),U(O,A,E)}if(Dt(A)||Ut(A))return A=an(A,O.mode,E,null),A.return=O,A;if(typeof A.then=="function")return U(O,pr(A),E);if(A.$$typeof===V)return U(O,ir(O,A),E);br(O,A)}return null}function _(O,A,E,C){var J=A!==null?A.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return J!==null?null:m(O,A,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case R:return E.key===J?g(O,A,E,C):null;case G:return E.key===J?T(O,A,E,C):null;case ht:return J=E._init,E=J(E._payload),_(O,A,E,C)}if(Dt(E)||Ut(E))return J!==null?null:w(O,A,E,C,null);if(typeof E.then=="function")return _(O,A,pr(E),C);if(E.$$typeof===V)return _(O,A,ir(O,E),C);br(O,E)}return null}function M(O,A,E,C,J){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return O=O.get(E)||null,m(A,O,""+C,J);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case R:return O=O.get(C.key===null?E:C.key)||null,g(A,O,C,J);case G:return O=O.get(C.key===null?E:C.key)||null,T(A,O,C,J);case ht:var ct=C._init;return C=ct(C._payload),M(O,A,E,C,J)}if(Dt(C)||Ut(C))return O=O.get(E)||null,w(A,O,C,J,null);if(typeof C.then=="function")return M(O,A,E,pr(C),J);if(C.$$typeof===V)return M(O,A,E,ir(A,C),J);br(A,C)}return null}function nt(O,A,E,C){for(var J=null,ct=null,F=A,at=A=0,Wt=null;F!==null&&at<E.length;at++){F.index>at?(Wt=F,F=null):Wt=F.sibling;var gt=_(O,F,E[at],C);if(gt===null){F===null&&(F=Wt);break}t&&F&&gt.alternate===null&&e(O,F),A=u(gt,A,at),ct===null?J=gt:ct.sibling=gt,ct=gt,F=Wt}if(at===E.length)return a(O,F),pt&&ln(O,at),J;if(F===null){for(;at<E.length;at++)F=U(O,E[at],C),F!==null&&(A=u(F,A,at),ct===null?J=F:ct.sibling=F,ct=F);return pt&&ln(O,at),J}for(F=n(F);at<E.length;at++)Wt=M(F,O,at,E[at],C),Wt!==null&&(t&&Wt.alternate!==null&&F.delete(Wt.key===null?at:Wt.key),A=u(Wt,A,at),ct===null?J=Wt:ct.sibling=Wt,ct=Wt);return t&&F.forEach(function(Qa){return e(O,Qa)}),pt&&ln(O,at),J}function tt(O,A,E,C){if(E==null)throw Error(s(151));for(var J=null,ct=null,F=A,at=A=0,Wt=null,gt=E.next();F!==null&&!gt.done;at++,gt=E.next()){F.index>at?(Wt=F,F=null):Wt=F.sibling;var Qa=_(O,F,gt.value,C);if(Qa===null){F===null&&(F=Wt);break}t&&F&&Qa.alternate===null&&e(O,F),A=u(Qa,A,at),ct===null?J=Qa:ct.sibling=Qa,ct=Qa,F=Wt}if(gt.done)return a(O,F),pt&&ln(O,at),J;if(F===null){for(;!gt.done;at++,gt=E.next())gt=U(O,gt.value,C),gt!==null&&(A=u(gt,A,at),ct===null?J=gt:ct.sibling=gt,ct=gt);return pt&&ln(O,at),J}for(F=n(F);!gt.done;at++,gt=E.next())gt=M(F,O,at,gt.value,C),gt!==null&&(t&&gt.alternate!==null&&F.delete(gt.key===null?at:gt.key),A=u(gt,A,at),ct===null?J=gt:ct.sibling=gt,ct=gt);return t&&F.forEach(function(Wg){return e(O,Wg)}),pt&&ln(O,at),J}function zt(O,A,E,C){if(typeof E=="object"&&E!==null&&E.type===B&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case R:t:{for(var J=E.key;A!==null;){if(A.key===J){if(J=E.type,J===B){if(A.tag===7){a(O,A.sibling),C=i(A,E.props.children),C.return=O,O=C;break t}}else if(A.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ht&&m0(J)===A.type){a(O,A.sibling),C=i(A,E.props),$l(C,E),C.return=O,O=C;break t}a(O,A);break}else e(O,A);A=A.sibling}E.type===B?(C=an(E.props.children,O.mode,C,E.key),C.return=O,O=C):(C=er(E.type,E.key,E.props,null,O.mode,C),$l(C,E),C.return=O,O=C)}return o(O);case G:t:{for(J=E.key;A!==null;){if(A.key===J)if(A.tag===4&&A.stateNode.containerInfo===E.containerInfo&&A.stateNode.implementation===E.implementation){a(O,A.sibling),C=i(A,E.children||[]),C.return=O,O=C;break t}else{a(O,A);break}else e(O,A);A=A.sibling}C=fc(E,O.mode,C),C.return=O,O=C}return o(O);case ht:return J=E._init,E=J(E._payload),zt(O,A,E,C)}if(Dt(E))return nt(O,A,E,C);if(Ut(E)){if(J=Ut(E),typeof J!="function")throw Error(s(150));return E=J.call(E),tt(O,A,E,C)}if(typeof E.then=="function")return zt(O,A,pr(E),C);if(E.$$typeof===V)return zt(O,A,ir(O,E),C);br(O,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,A!==null&&A.tag===6?(a(O,A.sibling),C=i(A,E),C.return=O,O=C):(a(O,A),C=sc(E,O.mode,C),C.return=O,O=C),o(O)):a(O,A)}return function(O,A,E,C){try{Jl=0;var J=zt(O,A,E,C);return Zn=null,J}catch(F){if(F===Ll||F===ur)throw F;var ct=Ae(29,F,null,O.mode);return ct.lanes=C,ct.return=O,ct}finally{}}}var kn=h0(!0),y0=h0(!1),He=q(null),Ze=null;function Na(t){var e=t.alternate;Z(kt,kt.current&1),Z(He,t),Ze===null&&(e===null||Xn.current!==null||e.memoizedState!==null)&&(Ze=t)}function v0(t){if(t.tag===22){if(Z(kt,kt.current),Z(He,t),Ze===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ze=t)}}else ja()}function ja(){Z(kt,kt.current),Z(He,He.current)}function fa(t){K(He),Ze===t&&(Ze=null),K(kt)}var kt=q(0);function Sr(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ds(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Vc(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:x({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Qc={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=_e(),i=_a(n);i.payload=e,a!=null&&(i.callback=a),e=za(t,i,n),e!==null&&(ze(e,t,n),Xl(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=_e(),i=_a(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=za(t,i,n),e!==null&&(ze(e,t,n),Xl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=_e(),n=_a(a);n.tag=2,e!=null&&(n.callback=e),e=za(t,n,a),e!==null&&(ze(e,t,a),Xl(e,t,a))}};function g0(t,e,a,n,i,u,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,o):e.prototype&&e.prototype.isPureReactComponent?!Rl(a,n)||!Rl(i,u):!0}function p0(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&Qc.enqueueReplaceState(e,e.state,null)}function dn(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=x({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}var xr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function b0(t){xr(t)}function S0(t){console.error(t)}function x0(t){xr(t)}function Ar(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function A0(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Zc(t,e,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Ar(t,e)},a}function O0(t){return t=_a(t),t.tag=3,t}function E0(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var u=n.value;t.payload=function(){return i(u)},t.callback=function(){A0(e,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){A0(e,a,n),typeof i!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function Wv(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&Hl(e,a,i,!0),a=He.current,a!==null){switch(a.tag){case 13:return Ze===null?ys():a.alternate===null&&Yt===0&&(Yt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Sc?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),gs(t,n,i)),!1;case 22:return a.flags|=65536,n===Sc?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),gs(t,n,i)),!1}throw Error(s(435,a.tag))}return gs(t,n,i),ys(),!1}if(pt)return e=He.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==mc&&(t=Error(s(422),{cause:n}),Ul(De(t,a)))):(n!==mc&&(e=Error(s(423),{cause:n}),Ul(De(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=De(n,a),i=Zc(t.stateNode,n,i),Oc(t,i),Yt!==4&&(Yt=2)),!1;var u=Error(s(520),{cause:n});if(u=De(u,a),ai===null?ai=[u]:ai.push(u),Yt!==4&&(Yt=2),e===null)return!0;n=De(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=Zc(a.stateNode,n,t),Oc(a,t),!1;case 1:if(e=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ha===null||!Ha.has(u))))return a.flags|=65536,i&=-i,a.lanes|=i,i=O0(i),E0(i,t,a,n),Oc(a,i),!1}a=a.return}while(a!==null);return!1}var T0=Error(s(461)),$t=!1;function Pt(t,e,a,n){e.child=t===null?y0(e,null,a,n):kn(e,t.child,a,n)}function _0(t,e,a,n,i){a=a.render;var u=e.ref;if("ref"in n){var o={};for(var m in n)m!=="ref"&&(o[m]=n[m])}else o=n;return sn(e),n=Mc(t,e,a,o,u,i),m=Nc(),t!==null&&!$t?(jc(t,e,i),oa(t,e,i)):(pt&&m&&oc(e),e.flags|=1,Pt(t,e,n,i),e.child)}function z0(t,e,a,n,i){if(t===null){var u=a.type;return typeof u=="function"&&!cc(u)&&u.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=u,M0(t,e,u,n,i)):(t=er(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Ic(t,i)){var o=u.memoizedProps;if(a=a.compare,a=a!==null?a:Rl,a(o,n)&&t.ref===e.ref)return oa(t,e,i)}return e.flags|=1,t=la(u,n),t.ref=e.ref,t.return=e,e.child=t}function M0(t,e,a,n,i){if(t!==null){var u=t.memoizedProps;if(Rl(u,n)&&t.ref===e.ref)if($t=!1,e.pendingProps=n=u,Ic(t,i))(t.flags&131072)!==0&&($t=!0);else return e.lanes=t.lanes,oa(t,e,i)}return kc(t,e,a,n,i)}function N0(t,e,a){var n=e.pendingProps,i=n.children,u=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=u!==null?u.baseLanes|a:a,t!==null){for(i=e.child=t.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;e.childLanes=u&~n}else e.childLanes=0,e.child=null;return j0(t,e,n,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&rr(e,u!==null?u.cachePool:null),u!==null?Md(e,u):Tc(),v0(e);else return e.lanes=e.childLanes=536870912,j0(t,e,u!==null?u.baseLanes|a:a,a)}else u!==null?(rr(e,u.cachePool),Md(e,u),ja(),e.memoizedState=null):(t!==null&&rr(e,null),Tc(),ja());return Pt(t,e,i,a),e.child}function j0(t,e,a,n){var i=bc();return i=i===null?null:{parent:Zt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&rr(e,null),Tc(),v0(e),t!==null&&Hl(t,e,n,!0),null}function Or(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function kc(t,e,a,n,i){return sn(e),a=Mc(t,e,a,n,void 0,i),n=Nc(),t!==null&&!$t?(jc(t,e,i),oa(t,e,i)):(pt&&n&&oc(e),e.flags|=1,Pt(t,e,a,i),e.child)}function R0(t,e,a,n,i,u){return sn(e),e.updateQueue=null,a=jd(e,n,a,i),Nd(t),n=Nc(),t!==null&&!$t?(jc(t,e,u),oa(t,e,u)):(pt&&n&&oc(e),e.flags|=1,Pt(t,e,a,u),e.child)}function D0(t,e,a,n,i){if(sn(e),e.stateNode===null){var u=Hn,o=a.contextType;typeof o=="object"&&o!==null&&(u=le(o)),u=new a(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Qc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},xc(e),o=a.contextType,u.context=typeof o=="object"&&o!==null?le(o):Hn,u.state=e.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Vc(e,a,o,n),u.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(o=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),o!==u.state&&Qc.enqueueReplaceState(u,u.state,null),Vl(e,n,u,i),Gl(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var m=e.memoizedProps,g=dn(a,m);u.props=g;var T=u.context,w=a.contextType;o=Hn,typeof w=="object"&&w!==null&&(o=le(w));var U=a.getDerivedStateFromProps;w=typeof U=="function"||typeof u.getSnapshotBeforeUpdate=="function",m=e.pendingProps!==m,w||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m||T!==o)&&p0(e,u,n,o),Ta=!1;var _=e.memoizedState;u.state=_,Vl(e,n,u,i),Gl(),T=e.memoizedState,m||_!==T||Ta?(typeof U=="function"&&(Vc(e,a,U,n),T=e.memoizedState),(g=Ta||g0(e,a,g,n,_,T,o))?(w||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=T),u.props=n,u.state=T,u.context=o,n=g):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,Ac(t,e),o=e.memoizedProps,w=dn(a,o),u.props=w,U=e.pendingProps,_=u.context,T=a.contextType,g=Hn,typeof T=="object"&&T!==null&&(g=le(T)),m=a.getDerivedStateFromProps,(T=typeof m=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==U||_!==g)&&p0(e,u,n,g),Ta=!1,_=e.memoizedState,u.state=_,Vl(e,n,u,i),Gl();var M=e.memoizedState;o!==U||_!==M||Ta||t!==null&&t.dependencies!==null&&lr(t.dependencies)?(typeof m=="function"&&(Vc(e,a,m,n),M=e.memoizedState),(w=Ta||g0(e,a,w,n,_,M,g)||t!==null&&t.dependencies!==null&&lr(t.dependencies))?(T||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,M,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,M,g)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||o===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=M),u.props=n,u.state=M,u.context=g,n=w):(typeof u.componentDidUpdate!="function"||o===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,Or(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=kn(e,t.child,null,i),e.child=kn(e,null,a,i)):Pt(t,e,a,i),e.memoizedState=u.state,t=e.child):t=oa(t,e,i),t}function w0(t,e,a,n){return Cl(),e.flags|=256,Pt(t,e,a,n),e.child}var Kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jc(t){return{baseLanes:t,cachePool:Sd()}}function $c(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=qe),t}function C0(t,e,a){var n=e.pendingProps,i=!1,u=(e.flags&128)!==0,o;if((o=u)||(o=t!==null&&t.memoizedState===null?!1:(kt.current&2)!==0),o&&(i=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(pt){if(i?Na(e):ja(),pt){var m=qt,g;if(g=m){t:{for(g=m,m=Qe;g.nodeType!==8;){if(!m){m=null;break t}if(g=Ge(g.nextSibling),g===null){m=null;break t}}m=g}m!==null?(e.memoizedState={dehydrated:m,treeContext:nn!==null?{id:ia,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},g=Ae(18,null,null,0),g.stateNode=m,g.return=e,e.child=g,ce=e,qt=null,g=!0):g=!1}g||un(e)}if(m=e.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return Ds(m)?e.lanes=32:e.lanes=536870912,null;fa(e)}return m=n.children,n=n.fallback,i?(ja(),i=e.mode,m=Er({mode:"hidden",children:m},i),n=an(n,i,a,null),m.return=e,n.return=e,m.sibling=n,e.child=m,i=e.child,i.memoizedState=Jc(a),i.childLanes=$c(t,o,a),e.memoizedState=Kc,n):(Na(e),Fc(e,m))}if(g=t.memoizedState,g!==null&&(m=g.dehydrated,m!==null)){if(u)e.flags&256?(Na(e),e.flags&=-257,e=Wc(t,e,a)):e.memoizedState!==null?(ja(),e.child=t.child,e.flags|=128,e=null):(ja(),i=n.fallback,m=e.mode,n=Er({mode:"visible",children:n.children},m),i=an(i,m,a,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,kn(e,t.child,null,a),n=e.child,n.memoizedState=Jc(a),n.childLanes=$c(t,o,a),e.memoizedState=Kc,e=i);else if(Na(e),Ds(m)){if(o=m.nextSibling&&m.nextSibling.dataset,o)var T=o.dgst;o=T,n=Error(s(419)),n.stack="",n.digest=o,Ul({value:n,source:null,stack:null}),e=Wc(t,e,a)}else if($t||Hl(t,e,a,!1),o=(a&t.childLanes)!==0,$t||o){if(o=Nt,o!==null&&(n=a&-a,n=(n&42)!==0?1:wu(n),n=(n&(o.suspendedLanes|a))!==0?0:n,n!==0&&n!==g.retryLane))throw g.retryLane=n,Un(t,n),ze(o,t,n),T0;m.data==="$?"||ys(),e=Wc(t,e,a)}else m.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=g.treeContext,qt=Ge(m.nextSibling),ce=e,pt=!0,rn=null,Qe=!1,t!==null&&(Ce[Ue++]=ia,Ce[Ue++]=ra,Ce[Ue++]=nn,ia=t.id,ra=t.overflow,nn=e),e=Fc(e,n.children),e.flags|=4096);return e}return i?(ja(),i=n.fallback,m=e.mode,g=t.child,T=g.sibling,n=la(g,{mode:"hidden",children:n.children}),n.subtreeFlags=g.subtreeFlags&65011712,T!==null?i=la(T,i):(i=an(i,m,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,m=t.child.memoizedState,m===null?m=Jc(a):(g=m.cachePool,g!==null?(T=Zt._currentValue,g=g.parent!==T?{parent:T,pool:T}:g):g=Sd(),m={baseLanes:m.baseLanes|a,cachePool:g}),i.memoizedState=m,i.childLanes=$c(t,o,a),e.memoizedState=Kc,n):(Na(e),a=t.child,t=a.sibling,a=la(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=a,e.memoizedState=null,a)}function Fc(t,e){return e=Er({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Er(t,e){return t=Ae(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Wc(t,e,a){return kn(e,t.child,null,a),t=Fc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function U0(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),yc(t.return,e,a)}function Pc(t,e,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=a,u.tailMode=i)}function H0(t,e,a){var n=e.pendingProps,i=n.revealOrder,u=n.tail;if(Pt(t,e,n.children,a),n=kt.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&U0(t,a,e);else if(t.tag===19)U0(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(Z(kt,n),i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&Sr(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),Pc(e,!1,i,a,u);break;case"backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sr(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}Pc(e,!0,a,null,u);break;case"together":Pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oa(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Ua|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Hl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=la(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=la(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Ic(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&lr(t)))}function Pv(t,e,a){switch(e.tag){case 3:wt(e,e.stateNode.containerInfo),Ea(e,Zt,t.memoizedState.cache),Cl();break;case 27:case 5:Mu(e);break;case 4:wt(e,e.stateNode.containerInfo);break;case 10:Ea(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Na(e),e.flags|=128,null):(a&e.child.childLanes)!==0?C0(t,e,a):(Na(e),t=oa(t,e,a),t!==null?t.sibling:null);Na(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(Hl(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return H0(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(kt,kt.current),n)break;return null;case 22:case 23:return e.lanes=0,N0(t,e,a);case 24:Ea(e,Zt,t.memoizedState.cache)}return oa(t,e,a)}function q0(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)$t=!0;else{if(!Ic(t,a)&&(e.flags&128)===0)return $t=!1,Pv(t,e,a);$t=(t.flags&131072)!==0}else $t=!1,pt&&(e.flags&1048576)!==0&&md(e,nr,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,i=n._init;if(n=i(n._payload),e.type=n,typeof n=="function")cc(n)?(t=dn(n,t),e.tag=1,e=D0(null,e,n,t,a)):(e.tag=0,e=kc(null,e,n,t,a));else{if(n!=null){if(i=n.$$typeof,i===et){e.tag=11,e=_0(null,e,n,t,a);break t}else if(i===W){e.tag=14,e=z0(null,e,n,t,a);break t}}throw e=fe(n)||n,Error(s(306,e,""))}}return e;case 0:return kc(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=dn(n,e.pendingProps),D0(t,e,n,i,a);case 3:t:{if(wt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));n=e.pendingProps;var u=e.memoizedState;i=u.element,Ac(t,e),Vl(e,n,null,a);var o=e.memoizedState;if(n=o.cache,Ea(e,Zt,n),n!==u.cache&&vc(e,[Zt],a,!0),Gl(),n=o.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=w0(t,e,n,a);break t}else if(n!==i){i=De(Error(s(424)),e),Ul(i),e=w0(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qt=Ge(t.firstChild),ce=e,pt=!0,rn=null,Qe=!0,a=y0(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Cl(),n===i){e=oa(t,e,a);break t}Pt(t,e,n,a)}e=e.child}return e;case 26:return Or(t,e),t===null?(a=Xm(e.type,null,e.pendingProps,null))?e.memoizedState=a:pt||(a=e.type,t=e.pendingProps,n=Yr(it.current).createElement(a),n[ne]=e,n[oe]=t,te(n,a,t),Jt(n),e.stateNode=n):e.memoizedState=Xm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Mu(e),t===null&&pt&&(n=e.stateNode=Ym(e.type,e.pendingProps,it.current),ce=e,Qe=!0,i=qt,La(e.type)?(ws=i,qt=Ge(n.firstChild)):qt=i),Pt(t,e,e.pendingProps.children,a),Or(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&pt&&((i=n=qt)&&(n=_g(n,e.type,e.pendingProps,Qe),n!==null?(e.stateNode=n,ce=e,qt=Ge(n.firstChild),Qe=!1,i=!0):i=!1),i||un(e)),Mu(e),i=e.type,u=e.pendingProps,o=t!==null?t.memoizedProps:null,n=u.children,Ns(i,u)?n=null:o!==null&&Ns(i,o)&&(e.flags|=32),e.memoizedState!==null&&(i=Mc(t,e,Qv,null,null,a),oi._currentValue=i),Or(t,e),Pt(t,e,n,a),e.child;case 6:return t===null&&pt&&((t=a=qt)&&(a=zg(a,e.pendingProps,Qe),a!==null?(e.stateNode=a,ce=e,qt=null,t=!0):t=!1),t||un(e)),null;case 13:return C0(t,e,a);case 4:return wt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=kn(e,null,n,a):Pt(t,e,n,a),e.child;case 11:return _0(t,e,e.type,e.pendingProps,a);case 7:return Pt(t,e,e.pendingProps,a),e.child;case 8:return Pt(t,e,e.pendingProps.children,a),e.child;case 12:return Pt(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,Ea(e,e.type,n.value),Pt(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,sn(e),i=le(i),n=n(i),e.flags|=1,Pt(t,e,n,a),e.child;case 14:return z0(t,e,e.type,e.pendingProps,a);case 15:return M0(t,e,e.type,e.pendingProps,a);case 19:return H0(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=Er(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=la(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return N0(t,e,a);case 24:return sn(e),n=le(Zt),t===null?(i=bc(),i===null&&(i=Nt,u=gc(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=a),i=u),e.memoizedState={parent:n,cache:i},xc(e),Ea(e,Zt,i)):((t.lanes&a)!==0&&(Ac(t,e),Vl(e,null,null,a),Gl()),i=t.memoizedState,u=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Ea(e,Zt,n)):(n=u.cache,Ea(e,Zt,n),n!==i.cache&&vc(e,[Zt],a,!0))),Pt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function da(t){t.flags|=4}function Y0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!km(e)){if(e=He.current,e!==null&&((dt&4194048)===dt?Ze!==null:(dt&62914560)!==dt&&(dt&536870912)===0||e!==Ze))throw Bl=Sc,xd;t.flags|=8192}}function Tr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?vo():536870912,t.lanes|=e,Fn|=e)}function Fl(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function Iv(t,e,a){var n=e.pendingProps;switch(dc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return Ht(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ca(Zt),Sa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(wl(e)?da(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,vd())),Ht(e),null;case 26:return a=e.memoizedState,t===null?(da(e),a!==null?(Ht(e),Y0(e,a)):(Ht(e),e.flags&=-16777217)):a?a!==t.memoizedState?(da(e),Ht(e),Y0(e,a)):(Ht(e),e.flags&=-16777217):(t.memoizedProps!==n&&da(e),Ht(e),e.flags&=-16777217),null;case 27:Hi(e),a=it.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&da(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return Ht(e),null}t=I.current,wl(e)?hd(e):(t=Ym(i,n,a),e.stateNode=t,da(e))}return Ht(e),null;case 5:if(Hi(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&da(e);else{if(!n){if(e.stateNode===null)throw Error(s(166));return Ht(e),null}if(t=I.current,wl(e))hd(e);else{switch(i=Yr(it.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}t[ne]=e,t[oe]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(te(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&da(e)}}return Ht(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&da(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(s(166));if(t=it.current,wl(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=ce,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[ne]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Rm(t.nodeValue,a)),t||un(e)}else t=Yr(t).createTextNode(n),t[ne]=e,e.stateNode=t}return Ht(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=wl(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(s(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[ne]=e}else Cl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ht(e),i=!1}else i=vd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(fa(e),e):(fa(e),null)}if(fa(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var u=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==i&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Tr(e,e.updateQueue),Ht(e),null;case 4:return Sa(),t===null&&Es(e.stateNode.containerInfo),Ht(e),null;case 10:return ca(e.type),Ht(e),null;case 19:if(K(kt),i=e.memoizedState,i===null)return Ht(e),null;if(n=(e.flags&128)!==0,u=i.rendering,u===null)if(n)Fl(i,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Sr(t),u!==null){for(e.flags|=128,Fl(i,!1),t=u.updateQueue,e.updateQueue=t,Tr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)dd(a,t),a=a.sibling;return Z(kt,kt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ve()>Mr&&(e.flags|=128,n=!0,Fl(i,!1),e.lanes=4194304)}else{if(!n)if(t=Sr(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Tr(e,t),Fl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!pt)return Ht(e),null}else 2*Ve()-i.renderingStartTime>Mr&&a!==536870912&&(e.flags|=128,n=!0,Fl(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ve(),e.sibling=null,t=kt.current,Z(kt,n?t&1|2:t&1),e):(Ht(e),null);case 22:case 23:return fa(e),_c(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),a=e.updateQueue,a!==null&&Tr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&K(fn),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ca(Zt),Ht(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function tg(t,e){switch(dc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ca(Zt),Sa(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Hi(e),null;case 13:if(fa(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Cl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return K(kt),null;case 4:return Sa(),null;case 10:return ca(e.type),null;case 22:case 23:return fa(e),_c(),t!==null&&K(fn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ca(Zt),null;case 25:return null;default:return null}}function L0(t,e){switch(dc(e),e.tag){case 3:ca(Zt),Sa();break;case 26:case 27:case 5:Hi(e);break;case 4:Sa();break;case 13:fa(e);break;case 19:K(kt);break;case 10:ca(e.type);break;case 22:case 23:fa(e),_c(),t!==null&&K(fn);break;case 24:ca(Zt)}}function Wl(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var u=a.create,o=a.inst;n=u(),o.destroy=n}a=a.next}while(a!==i)}}catch(m){Mt(e,e.return,m)}}function Ra(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var u=i.next;n=u;do{if((n.tag&t)===t){var o=n.inst,m=o.destroy;if(m!==void 0){o.destroy=void 0,i=e;var g=a,T=m;try{T()}catch(w){Mt(i,g,w)}}}n=n.next}while(n!==u)}}catch(w){Mt(e,e.return,w)}}function B0(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{zd(e,a)}catch(n){Mt(t,t.return,n)}}}function X0(t,e,a){a.props=dn(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Mt(t,e,n)}}function Pl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){Mt(t,e,i)}}function ke(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Mt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Mt(t,e,i)}else a.current=null}function G0(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Mt(t,t.return,i)}}function ts(t,e,a){try{var n=t.stateNode;xg(n,t.type,a,e),n[oe]=e}catch(i){Mt(t,t.return,i)}}function V0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&La(t.type)||t.tag===4}function es(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||V0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&La(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function as(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=qr));else if(n!==4&&(n===27&&La(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(as(t,e,a),t=t.sibling;t!==null;)as(t,e,a),t=t.sibling}function _r(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&La(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(_r(t,e,a),t=t.sibling;t!==null;)_r(t,e,a),t=t.sibling}function Q0(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);te(e,n,a),e[ne]=t,e[oe]=a}catch(u){Mt(t,t.return,u)}}var ma=!1,Xt=!1,ns=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function eg(t,e){if(t=t.containerInfo,zs=Qr,t=ad(t),ec(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var o=0,m=-1,g=-1,T=0,w=0,U=t,_=null;e:for(;;){for(var M;U!==a||i!==0&&U.nodeType!==3||(m=o+i),U!==u||n!==0&&U.nodeType!==3||(g=o+n),U.nodeType===3&&(o+=U.nodeValue.length),(M=U.firstChild)!==null;)_=U,U=M;for(;;){if(U===t)break e;if(_===a&&++T===i&&(m=o),_===u&&++w===n&&(g=o),(M=U.nextSibling)!==null)break;U=_,_=U.parentNode}U=M}a=m===-1||g===-1?null:{start:m,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ms={focusedElem:t,selectionRange:a},Qr=!1,Ft=e;Ft!==null;)if(e=Ft,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Ft=t;else for(;Ft!==null;){switch(e=Ft,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=e,i=u.memoizedProps,u=u.memoizedState,n=a.stateNode;try{var nt=dn(a.type,i,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(nt,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Mt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Rs(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Ft=t;break}Ft=e.return}}function k0(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Da(t,a),n&4&&Wl(5,a);break;case 1:if(Da(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(o){Mt(a,a.return,o)}else{var i=dn(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){Mt(a,a.return,o)}}n&64&&B0(a),n&512&&Pl(a,a.return);break;case 3:if(Da(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{zd(t,e)}catch(o){Mt(a,a.return,o)}}break;case 27:e===null&&n&4&&Q0(a);case 26:case 5:Da(t,a),e===null&&n&4&&G0(a),n&512&&Pl(a,a.return);break;case 12:Da(t,a);break;case 13:Da(t,a),n&4&&$0(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=fg.bind(null,a),Mg(t,a))));break;case 22:if(n=a.memoizedState!==null||ma,!n){e=e!==null&&e.memoizedState!==null||Xt,i=ma;var u=Xt;ma=n,(Xt=e)&&!u?wa(t,a,(a.subtreeFlags&8772)!==0):Da(t,a),ma=i,Xt=u}break;case 30:break;default:Da(t,a)}}function K0(t){var e=t.alternate;e!==null&&(t.alternate=null,K0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Hu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ct=null,he=!1;function ha(t,e,a){for(a=a.child;a!==null;)J0(t,e,a),a=a.sibling}function J0(t,e,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(bl,a)}catch{}switch(a.tag){case 26:Xt||ke(a,e),ha(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xt||ke(a,e);var n=Ct,i=he;La(a.type)&&(Ct=a.stateNode,he=!1),ha(t,e,a),ui(a.stateNode),Ct=n,he=i;break;case 5:Xt||ke(a,e);case 6:if(n=Ct,i=he,Ct=null,ha(t,e,a),Ct=n,he=i,Ct!==null)if(he)try{(Ct.nodeType===9?Ct.body:Ct.nodeName==="HTML"?Ct.ownerDocument.body:Ct).removeChild(a.stateNode)}catch(u){Mt(a,e,u)}else try{Ct.removeChild(a.stateNode)}catch(u){Mt(a,e,u)}break;case 18:Ct!==null&&(he?(t=Ct,Hm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),yi(t)):Hm(Ct,a.stateNode));break;case 4:n=Ct,i=he,Ct=a.stateNode.containerInfo,he=!0,ha(t,e,a),Ct=n,he=i;break;case 0:case 11:case 14:case 15:Xt||Ra(2,a,e),Xt||Ra(4,a,e),ha(t,e,a);break;case 1:Xt||(ke(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&X0(a,e,n)),ha(t,e,a);break;case 21:ha(t,e,a);break;case 22:Xt=(n=Xt)||a.memoizedState!==null,ha(t,e,a),Xt=n;break;default:ha(t,e,a)}}function $0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yi(t)}catch(a){Mt(e,e.return,a)}}function ag(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Z0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Z0),e;default:throw Error(s(435,t.tag))}}function ls(t,e){var a=ag(t);e.forEach(function(n){var i=og.bind(null,t,n);a.has(n)||(a.add(n),n.then(i,i))})}function Oe(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],u=t,o=e,m=o;t:for(;m!==null;){switch(m.tag){case 27:if(La(m.type)){Ct=m.stateNode,he=!1;break t}break;case 5:Ct=m.stateNode,he=!1;break t;case 3:case 4:Ct=m.stateNode.containerInfo,he=!0;break t}m=m.return}if(Ct===null)throw Error(s(160));J0(u,o,i),Ct=null,he=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)F0(e,t),e=e.sibling}var Xe=null;function F0(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Oe(e,t),Ee(t),n&4&&(Ra(3,t,t.return),Wl(3,t),Ra(5,t,t.return));break;case 1:Oe(e,t),Ee(t),n&512&&(Xt||a===null||ke(a,a.return)),n&64&&ma&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Xe;if(Oe(e,t),Ee(t),n&512&&(Xt||a===null||ke(a,a.return)),n&4){var u=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":u=i.getElementsByTagName("title")[0],(!u||u[Al]||u[ne]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(n),i.head.insertBefore(u,i.querySelector("head > title"))),te(u,n,a),u[ne]=t,Jt(u),n=u;break t;case"link":var o=Qm("link","href",i).get(n+(a.href||""));if(o){for(var m=0;m<o.length;m++)if(u=o[m],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(m,1);break e}}u=i.createElement(n),te(u,n,a),i.head.appendChild(u);break;case"meta":if(o=Qm("meta","content",i).get(n+(a.content||""))){for(m=0;m<o.length;m++)if(u=o[m],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(m,1);break e}}u=i.createElement(n),te(u,n,a),i.head.appendChild(u);break;default:throw Error(s(468,n))}u[ne]=t,Jt(u),n=u}t.stateNode=n}else Zm(i,t.type,t.stateNode);else t.stateNode=Vm(i,n,t.memoizedProps);else u!==n?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,n===null?Zm(i,t.type,t.stateNode):Vm(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&ts(t,t.memoizedProps,a.memoizedProps)}break;case 27:Oe(e,t),Ee(t),n&512&&(Xt||a===null||ke(a,a.return)),a!==null&&n&4&&ts(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Oe(e,t),Ee(t),n&512&&(Xt||a===null||ke(a,a.return)),t.flags&32){i=t.stateNode;try{Mn(i,"")}catch(M){Mt(t,t.return,M)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,ts(t,i,a!==null?a.memoizedProps:i)),n&1024&&(ns=!0);break;case 6:if(Oe(e,t),Ee(t),n&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(M){Mt(t,t.return,M)}}break;case 3:if(Xr=null,i=Xe,Xe=Lr(e.containerInfo),Oe(e,t),Xe=i,Ee(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{yi(e.containerInfo)}catch(M){Mt(t,t.return,M)}ns&&(ns=!1,W0(t));break;case 4:n=Xe,Xe=Lr(t.stateNode.containerInfo),Oe(e,t),Ee(t),Xe=n;break;case 12:Oe(e,t),Ee(t);break;case 13:Oe(e,t),Ee(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(fs=Ve()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ls(t,n)));break;case 22:i=t.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,T=ma,w=Xt;if(ma=T||i,Xt=w||g,Oe(e,t),Xt=w,ma=T,Ee(t),n&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||g||ma||Xt||mn(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){g=a=e;try{if(u=g.stateNode,i)o=u.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{m=g.stateNode;var U=g.memoizedProps.style,_=U!=null&&U.hasOwnProperty("display")?U.display:null;m.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(M){Mt(g,g.return,M)}}}else if(e.tag===6){if(a===null){g=e;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(M){Mt(g,g.return,M)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ls(t,a))));break;case 19:Oe(e,t),Ee(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,ls(t,n)));break;case 30:break;case 21:break;default:Oe(e,t),Ee(t)}}function Ee(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(V0(n)){a=n;break}n=n.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var i=a.stateNode,u=es(t);_r(t,u,i);break;case 5:var o=a.stateNode;a.flags&32&&(Mn(o,""),a.flags&=-33);var m=es(t);_r(t,m,o);break;case 3:case 4:var g=a.stateNode.containerInfo,T=es(t);as(t,T,g);break;default:throw Error(s(161))}}catch(w){Mt(t,t.return,w)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function W0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;W0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Da(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)k0(t,e.alternate,e),e=e.sibling}function mn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ra(4,e,e.return),mn(e);break;case 1:ke(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&X0(e,e.return,a),mn(e);break;case 27:ui(e.stateNode);case 26:case 5:ke(e,e.return),mn(e);break;case 22:e.memoizedState===null&&mn(e);break;case 30:mn(e);break;default:mn(e)}t=t.sibling}}function wa(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,u=e,o=u.flags;switch(u.tag){case 0:case 11:case 15:wa(i,u,a),Wl(4,u);break;case 1:if(wa(i,u,a),n=u,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){Mt(n,n.return,T)}if(n=u,i=n.updateQueue,i!==null){var m=n.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)_d(g[i],m)}catch(T){Mt(n,n.return,T)}}a&&o&64&&B0(u),Pl(u,u.return);break;case 27:Q0(u);case 26:case 5:wa(i,u,a),a&&n===null&&o&4&&G0(u),Pl(u,u.return);break;case 12:wa(i,u,a);break;case 13:wa(i,u,a),a&&o&4&&$0(i,u);break;case 22:u.memoizedState===null&&wa(i,u,a),Pl(u,u.return);break;case 30:break;default:wa(i,u,a)}e=e.sibling}}function is(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ql(a))}function rs(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ql(t))}function Ke(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)P0(t,e,a,n),e=e.sibling}function P0(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ke(t,e,a,n),i&2048&&Wl(9,e);break;case 1:Ke(t,e,a,n);break;case 3:Ke(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ql(t)));break;case 12:if(i&2048){Ke(t,e,a,n),t=e.stateNode;try{var u=e.memoizedProps,o=u.id,m=u.onPostCommit;typeof m=="function"&&m(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){Mt(e,e.return,g)}}else Ke(t,e,a,n);break;case 13:Ke(t,e,a,n);break;case 23:break;case 22:u=e.stateNode,o=e.alternate,e.memoizedState!==null?u._visibility&2?Ke(t,e,a,n):Il(t,e):u._visibility&2?Ke(t,e,a,n):(u._visibility|=2,Kn(t,e,a,n,(e.subtreeFlags&10256)!==0)),i&2048&&is(o,e);break;case 24:Ke(t,e,a,n),i&2048&&rs(e.alternate,e);break;default:Ke(t,e,a,n)}}function Kn(t,e,a,n,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,o=e,m=a,g=n,T=o.flags;switch(o.tag){case 0:case 11:case 15:Kn(u,o,m,g,i),Wl(8,o);break;case 23:break;case 22:var w=o.stateNode;o.memoizedState!==null?w._visibility&2?Kn(u,o,m,g,i):Il(u,o):(w._visibility|=2,Kn(u,o,m,g,i)),i&&T&2048&&is(o.alternate,o);break;case 24:Kn(u,o,m,g,i),i&&T&2048&&rs(o.alternate,o);break;default:Kn(u,o,m,g,i)}e=e.sibling}}function Il(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:Il(a,n),i&2048&&is(n.alternate,n);break;case 24:Il(a,n),i&2048&&rs(n.alternate,n);break;default:Il(a,n)}e=e.sibling}}var ti=8192;function Jn(t){if(t.subtreeFlags&ti)for(t=t.child;t!==null;)I0(t),t=t.sibling}function I0(t){switch(t.tag){case 26:Jn(t),t.flags&ti&&t.memoizedState!==null&&Xg(Xe,t.memoizedState,t.memoizedProps);break;case 5:Jn(t);break;case 3:case 4:var e=Xe;Xe=Lr(t.stateNode.containerInfo),Jn(t),Xe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=ti,ti=16777216,Jn(t),ti=e):Jn(t));break;default:Jn(t)}}function tm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ei(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Ft=n,am(n,t)}tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)em(t),t=t.sibling}function em(t){switch(t.tag){case 0:case 11:case 15:ei(t),t.flags&2048&&Ra(9,t,t.return);break;case 3:ei(t);break;case 12:ei(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,zr(t)):ei(t);break;default:ei(t)}}function zr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Ft=n,am(n,t)}tm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ra(8,e,e.return),zr(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,zr(e));break;default:zr(e)}t=t.sibling}}function am(t,e){for(;Ft!==null;){var a=Ft;switch(a.tag){case 0:case 11:case 15:Ra(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ql(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ft=n;else t:for(a=t;Ft!==null;){n=Ft;var i=n.sibling,u=n.return;if(K0(n),n===a){Ft=null;break t}if(i!==null){i.return=u,Ft=i;break t}Ft=u}}}var ng={getCacheForType:function(t){var e=le(Zt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},lg=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Nt=null,st=null,dt=0,Et=0,Te=null,Ca=!1,$n=!1,us=!1,ya=0,Yt=0,Ua=0,hn=0,cs=0,qe=0,Fn=0,ai=null,ye=null,ss=!1,fs=0,Mr=1/0,Nr=null,Ha=null,It=0,qa=null,Wn=null,Pn=0,os=0,ds=null,nm=null,ni=0,ms=null;function _e(){if((Ot&2)!==0&&dt!==0)return dt&-dt;if(D.T!==null){var t=Ln;return t!==0?t:Ss()}return bo()}function lm(){qe===0&&(qe=(dt&536870912)===0||pt?yo():536870912);var t=He.current;return t!==null&&(t.flags|=32),qe}function ze(t,e,a){(t===Nt&&(Et===2||Et===9)||t.cancelPendingCommit!==null)&&(In(t,0),Ya(t,dt,qe,!1)),xl(t,a),((Ot&2)===0||t!==Nt)&&(t===Nt&&((Ot&2)===0&&(hn|=a),Yt===4&&Ya(t,dt,qe,!1)),Je(t))}function im(t,e,a){if((Ot&6)!==0)throw Error(s(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||Sl(t,e),i=n?ug(t,e):vs(t,e,!0),u=n;do{if(i===0){$n&&!n&&Ya(t,e,0,!1);break}else{if(a=t.current.alternate,u&&!ig(a)){i=vs(t,e,!1),u=!1;continue}if(i===2){if(u=e,t.errorRecoveryDisabledLanes&u)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var m=t;i=ai;var g=m.current.memoizedState.isDehydrated;if(g&&(In(m,o).flags|=256),o=vs(m,o,!1),o!==2){if(us&&!g){m.errorRecoveryDisabledLanes|=u,hn|=u,i=4;break t}u=ye,ye=i,u!==null&&(ye===null?ye=u:ye.push.apply(ye,u))}i=o}if(u=!1,i!==2)continue}}if(i===1){In(t,0),Ya(t,e,0,!0);break}t:{switch(n=t,u=i,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Ya(n,e,qe,!Ca);break t;case 2:ye=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(i=fs+300-Ve(),10<i)){if(Ya(n,e,qe,!Ca),Bi(n,0,!0)!==0)break t;n.timeoutHandle=Cm(rm.bind(null,n,a,ye,Nr,ss,e,qe,hn,Fn,Ca,u,2,-0,0),i);break t}rm(n,a,ye,Nr,ss,e,qe,hn,Fn,Ca,u,0,-0,0)}}break}while(!0);Je(t)}function rm(t,e,a,n,i,u,o,m,g,T,w,U,_,M){if(t.timeoutHandle=-1,U=e.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(fi={stylesheets:null,count:0,unsuspend:Bg},I0(e),U=Gg(),U!==null)){t.cancelPendingCommit=U(mm.bind(null,t,e,u,a,n,i,o,m,g,w,1,_,M)),Ya(t,u,o,!T);return}mm(t,e,u,a,n,i,o,m,g)}function ig(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],u=i.getSnapshot;i=i.value;try{if(!xe(u(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ya(t,e,a,n){e&=~cs,e&=~hn,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var u=31-Se(i),o=1<<u;n[u]=-1,i&=~o}a!==0&&go(t,a,e)}function jr(){return(Ot&6)===0?(li(0),!1):!0}function hs(){if(st!==null){if(Et===0)var t=st.return;else t=st,ua=cn=null,Rc(t),Zn=null,Jl=0,t=st;for(;t!==null;)L0(t.alternate,t),t=t.return;st=null}}function In(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Og(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),hs(),Nt=t,st=a=la(t.current,null),dt=e,Et=0,Te=null,Ca=!1,$n=Sl(t,e),us=!1,Fn=qe=cs=hn=Ua=Yt=0,ye=ai=null,ss=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-Se(n),u=1<<i;e|=t[i],n&=~u}return ya=e,Pi(),a}function um(t,e){ut=null,D.H=gr,e===Ll||e===ur?(e=Ed(),Et=3):e===xd?(e=Ed(),Et=4):Et=e===T0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Te=e,st===null&&(Yt=1,Ar(t,De(e,t.current)))}function cm(){var t=D.H;return D.H=gr,t===null?gr:t}function sm(){var t=D.A;return D.A=ng,t}function ys(){Yt=4,Ca||(dt&4194048)!==dt&&He.current!==null||($n=!0),(Ua&134217727)===0&&(hn&134217727)===0||Nt===null||Ya(Nt,dt,qe,!1)}function vs(t,e,a){var n=Ot;Ot|=2;var i=cm(),u=sm();(Nt!==t||dt!==e)&&(Nr=null,In(t,e)),e=!1;var o=Yt;t:do try{if(Et!==0&&st!==null){var m=st,g=Te;switch(Et){case 8:hs(),o=6;break t;case 3:case 2:case 9:case 6:He.current===null&&(e=!0);var T=Et;if(Et=0,Te=null,tl(t,m,g,T),a&&$n){o=0;break t}break;default:T=Et,Et=0,Te=null,tl(t,m,g,T)}}rg(),o=Yt;break}catch(w){um(t,w)}while(!0);return e&&t.shellSuspendCounter++,ua=cn=null,Ot=n,D.H=i,D.A=u,st===null&&(Nt=null,dt=0,Pi()),o}function rg(){for(;st!==null;)fm(st)}function ug(t,e){var a=Ot;Ot|=2;var n=cm(),i=sm();Nt!==t||dt!==e?(Nr=null,Mr=Ve()+500,In(t,e)):$n=Sl(t,e);t:do try{if(Et!==0&&st!==null){e=st;var u=Te;e:switch(Et){case 1:Et=0,Te=null,tl(t,e,u,1);break;case 2:case 9:if(Ad(u)){Et=0,Te=null,om(e);break}e=function(){Et!==2&&Et!==9||Nt!==t||(Et=7),Je(t)},u.then(e,e);break t;case 3:Et=7;break t;case 4:Et=5;break t;case 7:Ad(u)?(Et=0,Te=null,om(e)):(Et=0,Te=null,tl(t,e,u,7));break;case 5:var o=null;switch(st.tag){case 26:o=st.memoizedState;case 5:case 27:var m=st;if(!o||km(o)){Et=0,Te=null;var g=m.sibling;if(g!==null)st=g;else{var T=m.return;T!==null?(st=T,Rr(T)):st=null}break e}}Et=0,Te=null,tl(t,e,u,5);break;case 6:Et=0,Te=null,tl(t,e,u,6);break;case 8:hs(),Yt=6;break t;default:throw Error(s(462))}}cg();break}catch(w){um(t,w)}while(!0);return ua=cn=null,D.H=n,D.A=i,Ot=a,st!==null?0:(Nt=null,dt=0,Pi(),Yt)}function cg(){for(;st!==null&&!jy();)fm(st)}function fm(t){var e=q0(t.alternate,t,ya);t.memoizedProps=t.pendingProps,e===null?Rr(t):st=e}function om(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=R0(a,e,e.pendingProps,e.type,void 0,dt);break;case 11:e=R0(a,e,e.pendingProps,e.type.render,e.ref,dt);break;case 5:Rc(e);default:L0(a,e),e=st=dd(e,ya),e=q0(a,e,ya)}t.memoizedProps=t.pendingProps,e===null?Rr(t):st=e}function tl(t,e,a,n){ua=cn=null,Rc(e),Zn=null,Jl=0;var i=e.return;try{if(Wv(t,i,e,a,dt)){Yt=1,Ar(t,De(a,t.current)),st=null;return}}catch(u){if(i!==null)throw st=i,u;Yt=1,Ar(t,De(a,t.current)),st=null;return}e.flags&32768?(pt||n===1?t=!0:$n||(dt&536870912)!==0?t=!1:(Ca=t=!0,(n===2||n===9||n===3||n===6)&&(n=He.current,n!==null&&n.tag===13&&(n.flags|=16384))),dm(e,t)):Rr(e)}function Rr(t){var e=t;do{if((e.flags&32768)!==0){dm(e,Ca);return}t=e.return;var a=Iv(e.alternate,e,ya);if(a!==null){st=a;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);Yt===0&&(Yt=5)}function dm(t,e){do{var a=tg(t.alternate,t);if(a!==null){a.flags&=32767,st=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){st=t;return}st=t=a}while(t!==null);Yt=6,st=null}function mm(t,e,a,n,i,u,o,m,g){t.cancelPendingCommit=null;do Dr();while(It!==0);if((Ot&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=rc,By(t,a,u,o,m,g),t===Nt&&(st=Nt=null,dt=0),Wn=e,qa=t,Pn=a,os=u,ds=i,nm=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,dg(qi,function(){return pm(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,i=Q.p,Q.p=2,o=Ot,Ot|=4;try{eg(t,e,a)}finally{Ot=o,Q.p=i,D.T=n}}It=1,hm(),ym(),vm()}}function hm(){if(It===1){It=0;var t=qa,e=Wn,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var n=Q.p;Q.p=2;var i=Ot;Ot|=4;try{F0(e,t);var u=Ms,o=ad(t.containerInfo),m=u.focusedElem,g=u.selectionRange;if(o!==m&&m&&m.ownerDocument&&ed(m.ownerDocument.documentElement,m)){if(g!==null&&ec(m)){var T=g.start,w=g.end;if(w===void 0&&(w=T),"selectionStart"in m)m.selectionStart=T,m.selectionEnd=Math.min(w,m.value.length);else{var U=m.ownerDocument||document,_=U&&U.defaultView||window;if(_.getSelection){var M=_.getSelection(),nt=m.textContent.length,tt=Math.min(g.start,nt),zt=g.end===void 0?tt:Math.min(g.end,nt);!M.extend&&tt>zt&&(o=zt,zt=tt,tt=o);var O=td(m,tt),A=td(m,zt);if(O&&A&&(M.rangeCount!==1||M.anchorNode!==O.node||M.anchorOffset!==O.offset||M.focusNode!==A.node||M.focusOffset!==A.offset)){var E=U.createRange();E.setStart(O.node,O.offset),M.removeAllRanges(),tt>zt?(M.addRange(E),M.extend(A.node,A.offset)):(E.setEnd(A.node,A.offset),M.addRange(E))}}}}for(U=[],M=m;M=M.parentNode;)M.nodeType===1&&U.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<U.length;m++){var C=U[m];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Qr=!!zs,Ms=zs=null}finally{Ot=i,Q.p=n,D.T=a}}t.current=e,It=2}}function ym(){if(It===2){It=0;var t=qa,e=Wn,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var n=Q.p;Q.p=2;var i=Ot;Ot|=4;try{k0(t,e.alternate,e)}finally{Ot=i,Q.p=n,D.T=a}}It=3}}function vm(){if(It===4||It===3){It=0,Ry();var t=qa,e=Wn,a=Pn,n=nm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?It=5:(It=0,Wn=qa=null,gm(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Ha=null),Cu(a),e=e.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(bl,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=D.T,i=Q.p,Q.p=2,D.T=null;try{for(var u=t.onRecoverableError,o=0;o<n.length;o++){var m=n[o];u(m.value,{componentStack:m.stack})}}finally{D.T=e,Q.p=i}}(Pn&3)!==0&&Dr(),Je(t),i=t.pendingLanes,(a&4194090)!==0&&(i&42)!==0?t===ms?ni++:(ni=0,ms=t):ni=0,li(0)}}function gm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ql(e)))}function Dr(t){return hm(),ym(),vm(),pm()}function pm(){if(It!==5)return!1;var t=qa,e=os;os=0;var a=Cu(Pn),n=D.T,i=Q.p;try{Q.p=32>a?32:a,D.T=null,a=ds,ds=null;var u=qa,o=Pn;if(It=0,Wn=qa=null,Pn=0,(Ot&6)!==0)throw Error(s(331));var m=Ot;if(Ot|=4,em(u.current),P0(u,u.current,o,a),Ot=m,li(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(bl,u)}catch{}return!0}finally{Q.p=i,D.T=n,gm(t,e)}}function bm(t,e,a){e=De(a,e),e=Zc(t.stateNode,e,2),t=za(t,e,2),t!==null&&(xl(t,2),Je(t))}function Mt(t,e,a){if(t.tag===3)bm(t,t,a);else for(;e!==null;){if(e.tag===3){bm(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ha===null||!Ha.has(n))){t=De(a,t),a=O0(2),n=za(e,a,2),n!==null&&(E0(a,n,e,t),xl(n,2),Je(n));break}}e=e.return}}function gs(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new lg;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(us=!0,i.add(a),t=sg.bind(null,t,e,a),e.then(t,t))}function sg(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Nt===t&&(dt&a)===a&&(Yt===4||Yt===3&&(dt&62914560)===dt&&300>Ve()-fs?(Ot&2)===0&&In(t,0):cs|=a,Fn===dt&&(Fn=0)),Je(t)}function Sm(t,e){e===0&&(e=vo()),t=Un(t,e),t!==null&&(xl(t,e),Je(t))}function fg(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Sm(t,a)}function og(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(e),Sm(t,a)}function dg(t,e){return ju(t,e)}var wr=null,el=null,ps=!1,Cr=!1,bs=!1,yn=0;function Je(t){t!==el&&t.next===null&&(el===null?wr=el=t:el=el.next=t),Cr=!0,ps||(ps=!0,hg())}function li(t,e){if(!bs&&Cr){bs=!0;do for(var a=!1,n=wr;n!==null;){if(t!==0){var i=n.pendingLanes;if(i===0)var u=0;else{var o=n.suspendedLanes,m=n.pingedLanes;u=(1<<31-Se(42|t)+1)-1,u&=i&~(o&~m),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Em(n,u))}else u=dt,u=Bi(n,n===Nt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||Sl(n,u)||(a=!0,Em(n,u));n=n.next}while(a);bs=!1}}function mg(){xm()}function xm(){Cr=ps=!1;var t=0;yn!==0&&(Ag()&&(t=yn),yn=0);for(var e=Ve(),a=null,n=wr;n!==null;){var i=n.next,u=Am(n,e);u===0?(n.next=null,a===null?wr=i:a.next=i,i===null&&(el=a)):(a=n,(t!==0||(u&3)!==0)&&(Cr=!0)),n=i}li(t)}function Am(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var o=31-Se(u),m=1<<o,g=i[o];g===-1?((m&a)===0||(m&n)!==0)&&(i[o]=Ly(m,e)):g<=e&&(t.expiredLanes|=m),u&=~m}if(e=Nt,a=dt,a=Bi(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(Et===2||Et===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Ru(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Sl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&Ru(n),Cu(a)){case 2:case 8:a=mo;break;case 32:a=qi;break;case 268435456:a=ho;break;default:a=qi}return n=Om.bind(null,t),a=ju(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&Ru(n),t.callbackPriority=2,t.callbackNode=null,2}function Om(t,e){if(It!==0&&It!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Dr()&&t.callbackNode!==a)return null;var n=dt;return n=Bi(t,t===Nt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(im(t,n,e),Am(t,Ve()),t.callbackNode!=null&&t.callbackNode===a?Om.bind(null,t):null)}function Em(t,e){if(Dr())return null;im(t,e,!0)}function hg(){Eg(function(){(Ot&6)!==0?ju(oo,mg):xm()})}function Ss(){return yn===0&&(yn=yo()),yn}function Tm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zi(""+t)}function _m(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function yg(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var u=Tm((i[oe]||null).action),o=n.submitter;o&&(e=(e=o[oe]||null)?Tm(e.formAction):o.getAttribute("formAction"),e!==null&&(u=e,o=null));var m=new $i("action","action",null,n,i);t.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(yn!==0){var g=o?_m(i,o):new FormData(i);Bc(a,{pending:!0,data:g,method:i.method,action:u},null,g)}}else typeof u=="function"&&(m.preventDefault(),g=o?_m(i,o):new FormData(i),Bc(a,{pending:!0,data:g,method:i.method,action:u},u,g))},currentTarget:i}]})}}for(var xs=0;xs<ic.length;xs++){var As=ic[xs],vg=As.toLowerCase(),gg=As[0].toUpperCase()+As.slice(1);Be(vg,"on"+gg)}Be(id,"onAnimationEnd"),Be(rd,"onAnimationIteration"),Be(ud,"onAnimationStart"),Be("dblclick","onDoubleClick"),Be("focusin","onFocus"),Be("focusout","onBlur"),Be(Cv,"onTransitionRun"),Be(Uv,"onTransitionStart"),Be(Hv,"onTransitionCancel"),Be(cd,"onTransitionEnd"),Tn("onMouseEnter",["mouseout","mouseover"]),Tn("onMouseLeave",["mouseout","mouseover"]),Tn("onPointerEnter",["pointerout","pointerover"]),Tn("onPointerLeave",["pointerout","pointerover"]),Pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function zm(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var o=n.length-1;0<=o;o--){var m=n[o],g=m.instance,T=m.currentTarget;if(m=m.listener,g!==u&&i.isPropagationStopped())break t;u=m,i.currentTarget=T;try{u(i)}catch(w){xr(w)}i.currentTarget=null,u=g}else for(o=0;o<n.length;o++){if(m=n[o],g=m.instance,T=m.currentTarget,m=m.listener,g!==u&&i.isPropagationStopped())break t;u=m,i.currentTarget=T;try{u(i)}catch(w){xr(w)}i.currentTarget=null,u=g}}}}function ft(t,e){var a=e[Uu];a===void 0&&(a=e[Uu]=new Set);var n=t+"__bubble";a.has(n)||(Mm(e,t,2,!1),a.add(n))}function Os(t,e,a){var n=0;e&&(n|=4),Mm(a,t,n,e)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Es(t){if(!t[Ur]){t[Ur]=!0,xo.forEach(function(a){a!=="selectionchange"&&(pg.has(a)||Os(a,!1,t),Os(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ur]||(e[Ur]=!0,Os("selectionchange",!1,e))}}function Mm(t,e,a,n){switch(Pm(e)){case 2:var i=Zg;break;case 8:i=kg;break;default:i=Ys}a=i.bind(null,e,a,t),i=void 0,!ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Ts(t,e,a,n,i){var u=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var m=n.stateNode.containerInfo;if(m===i)break;if(o===4)for(o=n.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;m!==null;){if(o=An(m),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){n=u=o;continue t}m=m.parentNode}}n=n.return}Uo(function(){var T=u,w=Qu(a),U=[];t:{var _=sd.get(t);if(_!==void 0){var M=$i,nt=t;switch(t){case"keypress":if(Ki(a)===0)break t;case"keydown":case"keyup":M=dv;break;case"focusin":nt="focus",M=Fu;break;case"focusout":nt="blur",M=Fu;break;case"beforeblur":case"afterblur":M=Fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=yv;break;case id:case rd:case ud:M=nv;break;case cd:M=gv;break;case"scroll":case"scrollend":M=Py;break;case"wheel":M=bv;break;case"copy":case"cut":case"paste":M=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Bo;break;case"toggle":case"beforetoggle":M=xv}var tt=(e&4)!==0,zt=!tt&&(t==="scroll"||t==="scrollend"),O=tt?_!==null?_+"Capture":null:_;tt=[];for(var A=T,E;A!==null;){var C=A;if(E=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||E===null||O===null||(C=El(A,O),C!=null&&tt.push(ri(A,C,E))),zt)break;A=A.return}0<tt.length&&(_=new M(_,nt,null,a,w),U.push({event:_,listeners:tt}))}}if((e&7)===0){t:{if(_=t==="mouseover"||t==="pointerover",M=t==="mouseout"||t==="pointerout",_&&a!==Vu&&(nt=a.relatedTarget||a.fromElement)&&(An(nt)||nt[xn]))break t;if((M||_)&&(_=w.window===w?w:(_=w.ownerDocument)?_.defaultView||_.parentWindow:window,M?(nt=a.relatedTarget||a.toElement,M=T,nt=nt?An(nt):null,nt!==null&&(zt=d(nt),tt=nt.tag,nt!==zt||tt!==5&&tt!==27&&tt!==6)&&(nt=null)):(M=null,nt=T),M!==nt)){if(tt=Yo,C="onMouseLeave",O="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Bo,C="onPointerLeave",O="onPointerEnter",A="pointer"),zt=M==null?_:Ol(M),E=nt==null?_:Ol(nt),_=new tt(C,A+"leave",M,a,w),_.target=zt,_.relatedTarget=E,C=null,An(w)===T&&(tt=new tt(O,A+"enter",nt,a,w),tt.target=E,tt.relatedTarget=zt,C=tt),zt=C,M&&nt)e:{for(tt=M,O=nt,A=0,E=tt;E;E=al(E))A++;for(E=0,C=O;C;C=al(C))E++;for(;0<A-E;)tt=al(tt),A--;for(;0<E-A;)O=al(O),E--;for(;A--;){if(tt===O||O!==null&&tt===O.alternate)break e;tt=al(tt),O=al(O)}tt=null}else tt=null;M!==null&&Nm(U,_,M,tt,!1),nt!==null&&zt!==null&&Nm(U,zt,nt,tt,!0)}}t:{if(_=T?Ol(T):window,M=_.nodeName&&_.nodeName.toLowerCase(),M==="select"||M==="input"&&_.type==="file")var J=Jo;else if(ko(_))if($o)J=Rv;else{J=Nv;var ct=Mv}else M=_.nodeName,!M||M.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?T&&Gu(T.elementType)&&(J=Jo):J=jv;if(J&&(J=J(t,T))){Ko(U,J,a,w);break t}ct&&ct(t,_,T),t==="focusout"&&T&&_.type==="number"&&T.memoizedProps.value!=null&&Xu(_,"number",_.value)}switch(ct=T?Ol(T):window,t){case"focusin":(ko(ct)||ct.contentEditable==="true")&&(Dn=ct,ac=T,Dl=null);break;case"focusout":Dl=ac=Dn=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,nd(U,a,w);break;case"selectionchange":if(wv)break;case"keydown":case"keyup":nd(U,a,w)}var F;if(Pu)t:{switch(t){case"compositionstart":var at="onCompositionStart";break t;case"compositionend":at="onCompositionEnd";break t;case"compositionupdate":at="onCompositionUpdate";break t}at=void 0}else Rn?Qo(t,a)&&(at="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Xo&&a.locale!=="ko"&&(Rn||at!=="onCompositionStart"?at==="onCompositionEnd"&&Rn&&(F=Ho()):(Oa=w,Ku="value"in Oa?Oa.value:Oa.textContent,Rn=!0)),ct=Hr(T,at),0<ct.length&&(at=new Lo(at,t,null,a,w),U.push({event:at,listeners:ct}),F?at.data=F:(F=Zo(a),F!==null&&(at.data=F)))),(F=Ov?Ev(t,a):Tv(t,a))&&(at=Hr(T,"onBeforeInput"),0<at.length&&(ct=new Lo("onBeforeInput","beforeinput",null,a,w),U.push({event:ct,listeners:at}),ct.data=F)),yg(U,t,T,a,w)}zm(U,e)})}function ri(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Hr(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=El(t,a),i!=null&&n.unshift(ri(t,i,u)),i=El(t,e),i!=null&&n.push(ri(t,i,u))),t.tag===3)return n;t=t.return}return[]}function al(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Nm(t,e,a,n,i){for(var u=e._reactName,o=[];a!==null&&a!==n;){var m=a,g=m.alternate,T=m.stateNode;if(m=m.tag,g!==null&&g===n)break;m!==5&&m!==26&&m!==27||T===null||(g=T,i?(T=El(a,u),T!=null&&o.unshift(ri(a,T,g))):i||(T=El(a,u),T!=null&&o.push(ri(a,T,g)))),a=a.return}o.length!==0&&t.push({event:e,listeners:o})}var bg=/\r\n?/g,Sg=/\u0000|\uFFFD/g;function jm(t){return(typeof t=="string"?t:""+t).replace(bg,`
`).replace(Sg,"")}function Rm(t,e){return e=jm(e),jm(t)===e}function qr(){}function _t(t,e,a,n,i,u){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Mn(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Mn(t,""+n);break;case"className":Gi(t,"class",n);break;case"tabIndex":Gi(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Gi(t,a,n);break;case"style":wo(t,n,u);break;case"data":if(e!=="object"){Gi(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Zi(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(e!=="input"&&_t(t,e,"name",i.name,i,null),_t(t,e,"formEncType",i.formEncType,i,null),_t(t,e,"formMethod",i.formMethod,i,null),_t(t,e,"formTarget",i.formTarget,i,null)):(_t(t,e,"encType",i.encType,i,null),_t(t,e,"method",i.method,i,null),_t(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Zi(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=qr);break;case"onScroll":n!=null&&ft("scroll",t);break;case"onScrollEnd":n!=null&&ft("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=Zi(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":ft("beforetoggle",t),ft("toggle",t),Xi(t,"popover",n);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Xi(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fy.get(a)||a,Xi(t,a,n))}}function _s(t,e,a,n,i,u){switch(a){case"style":wo(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Mn(t,n):(typeof n=="number"||typeof n=="bigint")&&Mn(t,""+n);break;case"onScroll":n!=null&&ft("scroll",t);break;case"onScrollEnd":n!=null&&ft("scrollend",t);break;case"onClick":n!=null&&(t.onclick=qr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ao.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),u=t[oe]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(e,u,i),typeof n=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Xi(t,a,n)}}}function te(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",t),ft("load",t);var n=!1,i=!1,u;for(u in a)if(a.hasOwnProperty(u)){var o=a[u];if(o!=null)switch(u){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:_t(t,e,u,o,a,null)}}i&&_t(t,e,"srcSet",a.srcSet,a,null),n&&_t(t,e,"src",a.src,a,null);return;case"input":ft("invalid",t);var m=u=o=i=null,g=null,T=null;for(n in a)if(a.hasOwnProperty(n)){var w=a[n];if(w!=null)switch(n){case"name":i=w;break;case"type":o=w;break;case"checked":g=w;break;case"defaultChecked":T=w;break;case"value":u=w;break;case"defaultValue":m=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,e));break;default:_t(t,e,n,w,a,null)}}No(t,u,m,g,T,o,i,!1),Vi(t);return;case"select":ft("invalid",t),n=o=u=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":u=m;break;case"defaultValue":o=m;break;case"multiple":n=m;default:_t(t,e,i,m,a,null)}e=u,a=o,t.multiple=!!n,e!=null?zn(t,!!n,e,!1):a!=null&&zn(t,!!n,a,!0);return;case"textarea":ft("invalid",t),u=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(m=a[o],m!=null))switch(o){case"value":n=m;break;case"defaultValue":i=m;break;case"children":u=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(s(91));break;default:_t(t,e,o,m,a,null)}Ro(t,n,i,u),Vi(t);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(n=a[g],n!=null))switch(g){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:_t(t,e,g,n,a,null)}return;case"dialog":ft("beforetoggle",t),ft("toggle",t),ft("cancel",t),ft("close",t);break;case"iframe":case"object":ft("load",t);break;case"video":case"audio":for(n=0;n<ii.length;n++)ft(ii[n],t);break;case"image":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"embed":case"source":case"link":ft("error",t),ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(n=a[T],n!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:_t(t,e,T,n,a,null)}return;default:if(Gu(e)){for(w in a)a.hasOwnProperty(w)&&(n=a[w],n!==void 0&&_s(t,e,w,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&_t(t,e,m,n,a,null))}function xg(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,o=null,m=null,g=null,T=null,w=null;for(M in a){var U=a[M];if(a.hasOwnProperty(M)&&U!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":g=U;default:n.hasOwnProperty(M)||_t(t,e,M,null,n,U)}}for(var _ in n){var M=n[_];if(U=a[_],n.hasOwnProperty(_)&&(M!=null||U!=null))switch(_){case"type":u=M;break;case"name":i=M;break;case"checked":T=M;break;case"defaultChecked":w=M;break;case"value":o=M;break;case"defaultValue":m=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,e));break;default:M!==U&&_t(t,e,_,M,n,U)}}Bu(t,o,m,g,T,w,u,i);return;case"select":M=o=m=_=null;for(u in a)if(g=a[u],a.hasOwnProperty(u)&&g!=null)switch(u){case"value":break;case"multiple":M=g;default:n.hasOwnProperty(u)||_t(t,e,u,null,n,g)}for(i in n)if(u=n[i],g=a[i],n.hasOwnProperty(i)&&(u!=null||g!=null))switch(i){case"value":_=u;break;case"defaultValue":m=u;break;case"multiple":o=u;default:u!==g&&_t(t,e,i,u,n,g)}e=m,a=o,n=M,_!=null?zn(t,!!a,_,!1):!!n!=!!a&&(e!=null?zn(t,!!a,e,!0):zn(t,!!a,a?[]:"",!1));return;case"textarea":M=_=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:_t(t,e,m,null,n,i)}for(o in n)if(i=n[o],u=a[o],n.hasOwnProperty(o)&&(i!=null||u!=null))switch(o){case"value":_=i;break;case"defaultValue":M=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==u&&_t(t,e,o,i,n,u)}jo(t,_,M);return;case"option":for(var nt in a)if(_=a[nt],a.hasOwnProperty(nt)&&_!=null&&!n.hasOwnProperty(nt))switch(nt){case"selected":t.selected=!1;break;default:_t(t,e,nt,null,n,_)}for(g in n)if(_=n[g],M=a[g],n.hasOwnProperty(g)&&_!==M&&(_!=null||M!=null))switch(g){case"selected":t.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:_t(t,e,g,_,n,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)_=a[tt],a.hasOwnProperty(tt)&&_!=null&&!n.hasOwnProperty(tt)&&_t(t,e,tt,null,n,_);for(T in n)if(_=n[T],M=a[T],n.hasOwnProperty(T)&&_!==M&&(_!=null||M!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,e));break;default:_t(t,e,T,_,n,M)}return;default:if(Gu(e)){for(var zt in a)_=a[zt],a.hasOwnProperty(zt)&&_!==void 0&&!n.hasOwnProperty(zt)&&_s(t,e,zt,void 0,n,_);for(w in n)_=n[w],M=a[w],!n.hasOwnProperty(w)||_===M||_===void 0&&M===void 0||_s(t,e,w,_,n,M);return}}for(var O in a)_=a[O],a.hasOwnProperty(O)&&_!=null&&!n.hasOwnProperty(O)&&_t(t,e,O,null,n,_);for(U in n)_=n[U],M=a[U],!n.hasOwnProperty(U)||_===M||_==null&&M==null||_t(t,e,U,_,n,M)}var zs=null,Ms=null;function Yr(t){return t.nodeType===9?t:t.ownerDocument}function Dm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ns(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var js=null;function Ag(){var t=window.event;return t&&t.type==="popstate"?t===js?!1:(js=t,!0):(js=null,!1)}var Cm=typeof setTimeout=="function"?setTimeout:void 0,Og=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,Eg=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(t){return Um.resolve(null).then(t).catch(Tg)}:Cm;function Tg(t){setTimeout(function(){throw t})}function La(t){return t==="head"}function Hm(t,e){var a=e,n=0,i=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<n&&8>n){a=n;var o=t.ownerDocument;if(a&1&&ui(o.documentElement),a&2&&ui(o.body),a&4)for(a=o.head,ui(a),o=a.firstChild;o;){var m=o.nextSibling,g=o.nodeName;o[Al]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=m}}if(i===0){t.removeChild(u),yi(e);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=u}while(a);yi(e)}function Rs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rs(a),Hu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _g(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Al])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ge(t.nextSibling),t===null)break}return null}function zg(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ge(t.nextSibling),t===null))return null;return t}function Ds(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Mg(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Ge(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var ws=null;function qm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function Ym(t,e,a){switch(e=Yr(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ui(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Hu(t)}var Ye=new Map,Lm=new Set;function Lr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var va=Q.d;Q.d={f:Ng,r:jg,D:Rg,C:Dg,L:wg,m:Cg,X:Hg,S:Ug,M:qg};function Ng(){var t=va.f(),e=jr();return t||e}function jg(t){var e=On(t);e!==null&&e.tag===5&&e.type==="form"?i0(e):va.r(t)}var nl=typeof document>"u"?null:document;function Bm(t,e,a){var n=nl;if(n&&typeof e=="string"&&e){var i=Re(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Lm.has(i)||(Lm.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),te(e,"link",t),Jt(e),n.head.appendChild(e)))}}function Rg(t){va.D(t),Bm("dns-prefetch",t,null)}function Dg(t,e){va.C(t,e),Bm("preconnect",t,e)}function wg(t,e,a){va.L(t,e,a);var n=nl;if(n&&t&&e){var i='link[rel="preload"][as="'+Re(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Re(a.imageSizes)+'"]')):i+='[href="'+Re(t)+'"]';var u=i;switch(e){case"style":u=ll(t);break;case"script":u=il(t)}Ye.has(u)||(t=x({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Ye.set(u,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(ci(u))||e==="script"&&n.querySelector(si(u))||(e=n.createElement("link"),te(e,"link",t),Jt(e),n.head.appendChild(e)))}}function Cg(t,e){va.m(t,e);var a=nl;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Re(n)+'"][href="'+Re(t)+'"]',u=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=il(t)}if(!Ye.has(u)&&(t=x({rel:"modulepreload",href:t},e),Ye.set(u,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(si(u)))return}n=a.createElement("link"),te(n,"link",t),Jt(n),a.head.appendChild(n)}}}function Ug(t,e,a){va.S(t,e,a);var n=nl;if(n&&t){var i=En(n).hoistableStyles,u=ll(t);e=e||"default";var o=i.get(u);if(!o){var m={loading:0,preload:null};if(o=n.querySelector(ci(u)))m.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Ye.get(u))&&Cs(t,a);var g=o=n.createElement("link");Jt(g),te(g,"link",t),g._p=new Promise(function(T,w){g.onload=T,g.onerror=w}),g.addEventListener("load",function(){m.loading|=1}),g.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Br(o,e,n)}o={type:"stylesheet",instance:o,count:1,state:m},i.set(u,o)}}}function Hg(t,e){va.X(t,e);var a=nl;if(a&&t){var n=En(a).hoistableScripts,i=il(t),u=n.get(i);u||(u=a.querySelector(si(i)),u||(t=x({src:t,async:!0},e),(e=Ye.get(i))&&Us(t,e),u=a.createElement("script"),Jt(u),te(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function qg(t,e){va.M(t,e);var a=nl;if(a&&t){var n=En(a).hoistableScripts,i=il(t),u=n.get(i);u||(u=a.querySelector(si(i)),u||(t=x({src:t,async:!0,type:"module"},e),(e=Ye.get(i))&&Us(t,e),u=a.createElement("script"),Jt(u),te(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function Xm(t,e,a,n){var i=(i=it.current)?Lr(i):null;if(!i)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=ll(a.href),a=En(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ll(a.href);var u=En(i).hoistableStyles,o=u.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,o),(u=i.querySelector(ci(t)))&&!u._p&&(o.instance=u,o.state.loading=5),Ye.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ye.set(t,a),u||Yg(i,t,a,o.state))),e&&n===null)throw Error(s(528,""));return o}if(e&&n!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=il(a),a=En(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ll(t){return'href="'+Re(t)+'"'}function ci(t){return'link[rel="stylesheet"]['+t+"]"}function Gm(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Yg(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),te(e,"link",a),Jt(e),t.head.appendChild(e))}function il(t){return'[src="'+Re(t)+'"]'}function si(t){return"script[async]"+t}function Vm(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+Re(a.href)+'"]');if(n)return e.instance=n,Jt(n),n;var i=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Jt(n),te(n,"style",i),Br(n,a.precedence,t),e.instance=n;case"stylesheet":i=ll(a.href);var u=t.querySelector(ci(i));if(u)return e.state.loading|=4,e.instance=u,Jt(u),u;n=Gm(a),(i=Ye.get(i))&&Cs(n,i),u=(t.ownerDocument||t).createElement("link"),Jt(u);var o=u;return o._p=new Promise(function(m,g){o.onload=m,o.onerror=g}),te(u,"link",n),e.state.loading|=4,Br(u,a.precedence,t),e.instance=u;case"script":return u=il(a.src),(i=t.querySelector(si(u)))?(e.instance=i,Jt(i),i):(n=a,(i=Ye.get(u))&&(n=x({},a),Us(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),Jt(i),te(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Br(n,a.precedence,t));return e.instance}function Br(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,u=i,o=0;o<n.length;o++){var m=n[o];if(m.dataset.precedence===e)u=m;else if(u!==i)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Cs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Us(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Xr=null;function Qm(t,e,a){if(Xr===null){var n=new Map,i=Xr=new Map;i.set(a,n)}else i=Xr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var u=a[i];if(!(u[Al]||u[ne]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var o=u.getAttribute(e)||"";o=t+o;var m=n.get(o);m?m.push(u):n.set(o,[u])}}return n}function Zm(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Lg(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function km(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var fi=null;function Bg(){}function Xg(t,e,a){if(fi===null)throw Error(s(475));var n=fi;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=ll(a.href),u=t.querySelector(ci(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=Gr.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=u,Jt(u);return}u=t.ownerDocument||t,a=Gm(a),(i=Ye.get(i))&&Cs(a,i),u=u.createElement("link"),Jt(u);var o=u;o._p=new Promise(function(m,g){o.onload=m,o.onerror=g}),te(u,"link",a),e.instance=u}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Gr.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function Gg(){if(fi===null)throw Error(s(475));var t=fi;return t.stylesheets&&t.count===0&&Hs(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&Hs(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Gr(){if(this.count--,this.count===0){if(this.stylesheets)Hs(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vr=null;function Hs(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vr=new Map,e.forEach(Vg,t),Vr=null,Gr.call(t))}function Vg(t,e){if(!(e.state.loading&4)){var a=Vr.get(t);if(a)var n=a.get(null);else{a=new Map,Vr.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var o=i[u];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=e.instance,o=i.getAttribute("data-precedence"),u=a.get(o)||n,u===n&&a.set(null,i),a.set(o,i),this.count++,n=Gr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),u?u.parentNode.insertBefore(i,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var oi={$$typeof:V,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Qg(t,e,a,n,i,u,o,m){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Du(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.hiddenUpdates=Du(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Km(t,e,a,n,i,u,o,m,g,T,w,U){return t=new Qg(t,e,a,o,m,g,T,U),e=1,u===!0&&(e|=24),u=Ae(3,null,null,e),t.current=u,u.stateNode=t,e=gc(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:a,cache:e},xc(u),t}function Jm(t){return t?(t=Hn,t):Hn}function $m(t,e,a,n,i,u){i=Jm(i),n.context===null?n.context=i:n.pendingContext=i,n=_a(e),n.payload={element:a},u=u===void 0?null:u,u!==null&&(n.callback=u),a=za(t,n,e),a!==null&&(ze(a,t,e),Xl(a,t,e))}function Fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function qs(t,e){Fm(t,e),(t=t.alternate)&&Fm(t,e)}function Wm(t){if(t.tag===13){var e=Un(t,67108864);e!==null&&ze(e,t,67108864),qs(t,67108864)}}var Qr=!0;function Zg(t,e,a,n){var i=D.T;D.T=null;var u=Q.p;try{Q.p=2,Ys(t,e,a,n)}finally{Q.p=u,D.T=i}}function kg(t,e,a,n){var i=D.T;D.T=null;var u=Q.p;try{Q.p=8,Ys(t,e,a,n)}finally{Q.p=u,D.T=i}}function Ys(t,e,a,n){if(Qr){var i=Ls(n);if(i===null)Ts(t,e,n,Zr,a),Im(t,n);else if(Jg(i,t,e,a,n))n.stopPropagation();else if(Im(t,n),e&4&&-1<Kg.indexOf(t)){for(;i!==null;){var u=On(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var o=Wa(u.pendingLanes);if(o!==0){var m=u;for(m.pendingLanes|=2,m.entangledLanes|=2;o;){var g=1<<31-Se(o);m.entanglements[1]|=g,o&=~g}Je(u),(Ot&6)===0&&(Mr=Ve()+500,li(0))}}break;case 13:m=Un(u,2),m!==null&&ze(m,u,2),jr(),qs(u,2)}if(u=Ls(n),u===null&&Ts(t,e,n,Zr,a),u===i)break;i=u}i!==null&&n.stopPropagation()}else Ts(t,e,n,null,a)}}function Ls(t){return t=Qu(t),Bs(t)}var Zr=null;function Bs(t){if(Zr=null,t=An(t),t!==null){var e=d(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=h(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Zr=t,null}function Pm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dy()){case oo:return 2;case mo:return 8;case qi:case wy:return 32;case ho:return 268435456;default:return 32}default:return 32}}var Xs=!1,Ba=null,Xa=null,Ga=null,di=new Map,mi=new Map,Va=[],Kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Im(t,e){switch(t){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(e.pointerId)}}function hi(t,e,a,n,i,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:u,targetContainers:[i]},e!==null&&(e=On(e),e!==null&&Wm(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Jg(t,e,a,n,i){switch(e){case"focusin":return Ba=hi(Ba,t,e,a,n,i),!0;case"dragenter":return Xa=hi(Xa,t,e,a,n,i),!0;case"mouseover":return Ga=hi(Ga,t,e,a,n,i),!0;case"pointerover":var u=i.pointerId;return di.set(u,hi(di.get(u)||null,t,e,a,n,i)),!0;case"gotpointercapture":return u=i.pointerId,mi.set(u,hi(mi.get(u)||null,t,e,a,n,i)),!0}return!1}function t1(t){var e=An(t.target);if(e!==null){var a=d(e);if(a!==null){if(e=a.tag,e===13){if(e=h(a),e!==null){t.blockedOn=e,Xy(t.priority,function(){if(a.tag===13){var n=_e();n=wu(n);var i=Un(a,n);i!==null&&ze(i,a,n),qs(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Ls(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);Vu=n,a.target.dispatchEvent(n),Vu=null}else return e=On(a),e!==null&&Wm(e),t.blockedOn=a,!1;e.shift()}return!0}function e1(t,e,a){kr(t)&&a.delete(e)}function $g(){Xs=!1,Ba!==null&&kr(Ba)&&(Ba=null),Xa!==null&&kr(Xa)&&(Xa=null),Ga!==null&&kr(Ga)&&(Ga=null),di.forEach(e1),mi.forEach(e1)}function Kr(t,e){t.blockedOn===e&&(t.blockedOn=null,Xs||(Xs=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,$g)))}var Jr=null;function a1(t){Jr!==t&&(Jr=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Jr===t&&(Jr=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(Bs(n||a)===null)continue;break}var u=On(a);u!==null&&(t.splice(e,3),e-=3,Bc(u,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function yi(t){function e(g){return Kr(g,t)}Ba!==null&&Kr(Ba,t),Xa!==null&&Kr(Xa,t),Ga!==null&&Kr(Ga,t),di.forEach(e),mi.forEach(e);for(var a=0;a<Va.length;a++){var n=Va[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)t1(a),a.blockedOn===null&&Va.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],u=a[n+1],o=i[oe]||null;if(typeof u=="function")o||a1(a);else if(o){var m=null;if(u&&u.hasAttribute("formAction")){if(i=u,o=u[oe]||null)m=o.formAction;else if(Bs(i)!==null)continue}else m=o.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),a1(a)}}}function Gs(t){this._internalRoot=t}$r.prototype.render=Gs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,n=_e();$m(a,n,t,e,null,null)},$r.prototype.unmount=Gs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$m(t.current,2,null,t,null,null),jr(),e[xn]=null}};function $r(t){this._internalRoot=t}$r.prototype.unstable_scheduleHydration=function(t){if(t){var e=bo();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Va.length&&e!==0&&e<Va[a].priority;a++);Va.splice(a,0,t),a===0&&t1(t)}};var n1=r.version;if(n1!=="19.1.0")throw Error(s(527,n1,"19.1.0"));Q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=v(e),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var Fg={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{bl=Fr.inject(Fg),be=Fr}catch{}}return gi.createRoot=function(t,e){if(!f(t))throw Error(s(299));var a=!1,n="",i=b0,u=S0,o=x0,m=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(m=e.unstable_transitionCallbacks)),e=Km(t,1,!1,null,null,a,n,i,u,o,m,null),t[xn]=e.current,Es(t),new Gs(e)},gi.hydrateRoot=function(t,e,a){if(!f(t))throw Error(s(299));var n=!1,i="",u=b0,o=S0,m=x0,g=null,T=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(g=a.unstable_transitionCallbacks),a.formState!==void 0&&(T=a.formState)),e=Km(t,1,!0,e,a??null,n,i,u,o,m,g,T),e.context=Jm(null),a=e.current,n=_e(),n=wu(n),i=_a(n),i.callback=null,za(a,i,n),a=n,e.current.lanes=a,xl(e,a),Je(e),t[xn]=e.current,Es(t),new $r(e)},gi.version="19.1.0",gi}var h1;function rp(){if(h1)return Zs.exports;h1=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Zs.exports=ip(),Zs.exports}var up=rp();/*! @license is-dom-node v1.0.4

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

*/function gf(l){return typeof window.Node=="object"?l instanceof window.Node:l!==null&&typeof l=="object"&&typeof l.nodeType=="number"&&typeof l.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

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

*/function cp(l){var r=Object.prototype.toString.call(l),c=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?l instanceof window.NodeList:l!==null&&typeof l=="object"&&typeof l.length=="number"&&c.test(r)&&(l.length===0||gf(l[0]))}/*! @license Tealight v0.3.6

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

*/function Ti(l,r){if(r===void 0&&(r=document),l instanceof Array)return l.filter(gf);if(gf(l))return[l];if(cp(l))return Array.prototype.slice.call(l);if(typeof l=="string")try{var c=r.querySelectorAll(l);return Array.prototype.slice.call(c)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

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
*/function pf(l){if(l.constructor!==Array)throw new TypeError("Expected array.");if(l.length===16)return l;if(l.length===6){var r=Fa();return r[0]=l[0],r[1]=l[1],r[4]=l[2],r[5]=l[3],r[12]=l[4],r[13]=l[5],r}throw new RangeError("Expected array with either 6 or 16 values.")}function Fa(){for(var l=[],r=0;r<16;r++)r%5==0?l.push(1):l.push(0);return l}function sp(l,r){for(var c=pf(l),s=pf(r),f=[],d=0;d<4;d++)for(var h=[c[d],c[d+4],c[d+8],c[d+12]],b=0;b<4;b++){var v=b*4,y=[s[v],s[v+1],s[v+2],s[v+3]],x=h[0]*y[0]+h[1]*y[1]+h[2]*y[2]+h[3]*y[3];f[d+v]=x}return f}function fp(l){if(typeof l=="string"){var r=l.match(/matrix(3d)?\(([^)]+)\)/);if(r){var c=r[2].split(", ").map(parseFloat);return pf(c)}}return Fa()}function op(l){var r=Math.PI/180*l,c=Fa();return c[5]=c[10]=Math.cos(r),c[6]=c[9]=Math.sin(r),c[9]*=-1,c}function dp(l){var r=Math.PI/180*l,c=Fa();return c[0]=c[10]=Math.cos(r),c[2]=c[8]=Math.sin(r),c[2]*=-1,c}function mp(l){var r=Math.PI/180*l,c=Fa();return c[0]=c[5]=Math.cos(r),c[1]=c[4]=Math.sin(r),c[4]*=-1,c}function y1(l,r){var c=Fa();return c[0]=l,c[5]=l,c}function hp(l){var r=Fa();return r[12]=l,r}function yp(l){var r=Fa();return r[13]=l,r}/*! @license miniraf v1.0.0

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

*/var ph=function(){var l=Date.now();return function(r){var c=Date.now();c-l>16?(l=c,r(c)):setTimeout(function(){return ph(r)},0)}}(),vp=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ph;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var bh={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function gp(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function pp(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var pi={success:pp,failure:gp};function lu(l){return l!==null&&l instanceof Object&&(l.constructor===Object||Object.prototype.toString.call(l)==="[object Object]")}function jt(l,r){if(lu(l)){var c=Object.keys(l);return c.forEach(function(s){return r(l[s],s,l)})}if(l instanceof Array)return l.forEach(function(s,f){return r(s,f,l)});throw new TypeError("Expected either an array or object literal.")}function vn(l){for(var r=[],c=arguments.length-1;c-- >0;)r[c]=arguments[c+1];if(this.constructor.debug&&console){var s="%cScrollReveal: "+l;r.forEach(function(f){return s+=`
 — `+f}),console.log(s,"color: #ea654b;")}}function Sh(){var l=this,r=function(){return{active:[],stale:[]}},c=r(),s=r(),f=r();try{jt(Ti("[data-sr-id]"),function(d){var h=parseInt(d.getAttribute("data-sr-id"));c.active.push(h)})}catch(d){throw d}jt(this.store.elements,function(d){c.active.indexOf(d.id)===-1&&c.stale.push(d.id)}),jt(c.stale,function(d){return delete l.store.elements[d]}),jt(this.store.elements,function(d){f.active.indexOf(d.containerId)===-1&&f.active.push(d.containerId),d.hasOwnProperty("sequence")&&s.active.indexOf(d.sequence.id)===-1&&s.active.push(d.sequence.id)}),jt(this.store.containers,function(d){f.active.indexOf(d.id)===-1&&f.stale.push(d.id)}),jt(f.stale,function(d){var h=l.store.containers[d].node;h.removeEventListener("scroll",l.delegate),h.removeEventListener("resize",l.delegate),delete l.store.containers[d]}),jt(this.store.sequences,function(d){s.active.indexOf(d.id)===-1&&s.stale.push(d.id)}),jt(s.stale,function(d){return delete l.store.sequences[d]})}var v1=function(){var l={},r=document.documentElement.style;function c(s,f){if(f===void 0&&(f=r),s&&typeof s=="string"){if(l[s])return l[s];if(typeof f[s]=="string")return l[s]=s;if(typeof f["-webkit-"+s]=="string")return l[s]="-webkit-"+s;throw new RangeError('Unable to find "'+s+'" style property.')}throw new TypeError("Expected a string.")}return c.clearCache=function(){return l={}},c}();function bp(l){var r=window.getComputedStyle(l.node),c=r.position,s=l.config,f={},d=l.node.getAttribute("style")||"",h=d.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];f.computed=h?h.map(function(ht){return ht.trim()}).join("; ")+";":"",f.generated=h.some(function(ht){return ht.match(/visibility\s?:\s?visible/i)})?f.computed:h.concat(["visibility: visible"]).map(function(ht){return ht.trim()}).join("; ")+";";var b=parseFloat(r.opacity),v=isNaN(parseFloat(s.opacity))?parseFloat(r.opacity):parseFloat(s.opacity),y={computed:b!==v?"opacity: "+b+";":"",generated:b!==v?"opacity: "+v+";":""},x=[];if(parseFloat(s.distance)){var z=s.origin==="top"||s.origin==="bottom"?"Y":"X",R=s.distance;(s.origin==="top"||s.origin==="left")&&(R=/^-/.test(R)?R.substr(1):"-"+R);var G=R.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),B=G[0],H=G[1];switch(H){case"em":R=parseInt(r.fontSize)*B;break;case"px":R=B;break;case"%":R=z==="Y"?l.node.getBoundingClientRect().height*B/100:l.node.getBoundingClientRect().width*B/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}z==="Y"?x.push(yp(R)):x.push(hp(R))}s.rotate.x&&x.push(op(s.rotate.x)),s.rotate.y&&x.push(dp(s.rotate.y)),s.rotate.z&&x.push(mp(s.rotate.z)),s.scale!==1&&(s.scale===0?x.push(y1(2e-4)):x.push(y1(s.scale)));var N={};if(x.length){N.property=v1("transform"),N.computed={raw:r[N.property],matrix:fp(r[N.property])},x.unshift(N.computed.matrix);var k=x.reduce(sp);N.generated={initial:N.property+": matrix3d("+k.join(", ")+");",final:N.property+": matrix3d("+N.computed.matrix.join(", ")+");"}}else N.generated={initial:"",final:""};var L={};if(y.generated||N.generated.initial){L.property=v1("transition"),L.computed=r[L.property],L.fragments=[];var V=s.delay,et=s.duration,j=s.easing;y.generated&&L.fragments.push({delayed:"opacity "+et/1e3+"s "+j+" "+V/1e3+"s",instant:"opacity "+et/1e3+"s "+j+" 0s"}),N.generated.initial&&L.fragments.push({delayed:N.property+" "+et/1e3+"s "+j+" "+V/1e3+"s",instant:N.property+" "+et/1e3+"s "+j+" 0s"});var lt=L.computed&&!L.computed.match(/all 0s|none 0s/);lt&&L.fragments.unshift({delayed:L.computed,instant:L.computed});var W=L.fragments.reduce(function(ht,Lt,ae){return ht.delayed+=ae===0?Lt.delayed:", "+Lt.delayed,ht.instant+=ae===0?Lt.instant:", "+Lt.instant,ht},{delayed:"",instant:""});L.generated={delayed:L.property+": "+W.delayed+";",instant:L.property+": "+W.instant+";"}}else L.generated={delayed:"",instant:""};return{inline:f,opacity:y,position:c,transform:N,transition:L}}function vl(l,r){r.split(";").forEach(function(c){var s=c.split(":"),f=s[0],d=s.slice(1);f&&d&&(l.style[f.trim()]=d.join(":"))})}function Zf(l){var r=this,c;try{jt(Ti(l),function(s){var f=s.getAttribute("data-sr-id");if(f!==null){c=!0;var d=r.store.elements[f];d.callbackTimer&&window.clearTimeout(d.callbackTimer.clock),vl(d.node,d.styles.inline.generated),s.removeAttribute("data-sr-id"),delete r.store.elements[f]}})}catch(s){return vn.call(this,"Clean failed.",s.message)}if(c)try{Sh.call(this)}catch(s){return vn.call(this,"Clean failed.",s.message)}}function Sp(){var l=this;jt(this.store.elements,function(r){vl(r.node,r.styles.inline.generated),r.node.removeAttribute("data-sr-id")}),jt(this.store.containers,function(r){var c=r.node===document.documentElement?window:r.node;c.removeEventListener("scroll",l.delegate),c.removeEventListener("resize",l.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function _i(l){for(var r=[],c=arguments.length-1;c-- >0;)r[c]=arguments[c+1];if(lu(l))return jt(r,function(s){jt(s,function(f,d){lu(f)?((!l[d]||!lu(l[d]))&&(l[d]={}),_i(l[d],f)):l[d]=f})}),l;throw new TypeError("Target must be an object literal.")}function fu(l){return l===void 0&&(l=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(l)}var bf=function(){var l=0;return function(){return l++}}();function xh(){var l=this;Sh.call(this),jt(this.store.elements,function(r){var c=[r.styles.inline.generated];r.visible?(c.push(r.styles.opacity.computed),c.push(r.styles.transform.generated.final),r.revealed=!0):(c.push(r.styles.opacity.generated),c.push(r.styles.transform.generated.initial),r.revealed=!1),vl(r.node,c.filter(function(s){return s!==""}).join(" "))}),jt(this.store.containers,function(r){var c=r.node===document.documentElement?window:r.node;c.addEventListener("scroll",l.delegate),c.addEventListener("resize",l.delegate)}),this.delegate(),this.initTimeout=null}function xi(l,r){r===void 0&&(r={});var c=r.pristine||this.pristine,s=l.config.useDelay==="always"||l.config.useDelay==="onload"&&c||l.config.useDelay==="once"&&!l.seen,f=l.visible&&!l.revealed,d=!l.visible&&l.revealed&&l.config.reset;if(r.reveal||f)return xp.call(this,l,s);if(r.reset||d)return Ap.call(this,l)}function xp(l,r){var c=[l.styles.inline.generated,l.styles.opacity.computed,l.styles.transform.generated.final];r?c.push(l.styles.transition.generated.delayed):c.push(l.styles.transition.generated.instant),l.revealed=l.seen=!0,vl(l.node,c.filter(function(s){return s!==""}).join(" ")),Ah.call(this,l,r)}function Ap(l){var r=[l.styles.inline.generated,l.styles.opacity.generated,l.styles.transform.generated.initial,l.styles.transition.generated.instant];l.revealed=!1,vl(l.node,r.filter(function(c){return c!==""}).join(" ")),Ah.call(this,l)}function Ah(l,r){var c=this,s=r?l.config.duration+l.config.delay:l.config.duration,f=l.revealed?l.config.beforeReveal:l.config.beforeReset,d=l.revealed?l.config.afterReveal:l.config.afterReset,h=0;l.callbackTimer&&(h=Date.now()-l.callbackTimer.start,window.clearTimeout(l.callbackTimer.clock)),f(l.node),l.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){d(l.node),l.callbackTimer=null,l.revealed&&!l.config.reset&&l.config.cleanup&&Zf.call(c,l.node)},s-h)}}function Oh(l,r){if(r===void 0&&(r=this.pristine),!l.visible&&l.revealed&&l.config.reset)return xi.call(this,l,{reset:!0});var c=this.store.sequences[l.sequence.id],s=l.sequence.index;if(c){var f=new g1(c,"visible",this.store),d=new g1(c,"revealed",this.store);if(c.models={visible:f,revealed:d},!d.body.length){var h=c.members[f.body[0]],b=this.store.elements[h];if(b)return Wr.call(this,c,f.body[0],-1,r),Wr.call(this,c,f.body[0],1,r),xi.call(this,b,{reveal:!0,pristine:r})}if(!c.blocked.head&&s===[].concat(d.head).pop()&&s>=[].concat(f.body).shift())return Wr.call(this,c,s,-1,r),xi.call(this,l,{reveal:!0,pristine:r});if(!c.blocked.foot&&s===[].concat(d.foot).shift()&&s<=[].concat(f.body).pop())return Wr.call(this,c,s,1,r),xi.call(this,l,{reveal:!0,pristine:r})}}function Op(l){var r=Math.abs(l);if(!isNaN(r))this.id=bf(),this.interval=Math.max(r,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function g1(l,r,c){var s=this;this.head=[],this.body=[],this.foot=[],jt(l.members,function(f,d){var h=c.elements[f];h&&h[r]&&s.body.push(d)}),this.body.length&&jt(l.members,function(f,d){var h=c.elements[f];h&&!h[r]&&(d<s.body[0]?s.head.push(d):s.foot.push(d))})}function Wr(l,r,c,s){var f=this,d=["head",null,"foot"][1+c],h=l.members[r+c],b=this.store.elements[h];l.blocked[d]=!0,setTimeout(function(){l.blocked[d]=!1,b&&Oh.call(f,b,s)},l.interval)}function Eh(l,r,c){var s=this;r===void 0&&(r={}),c===void 0&&(c=!1);var f=[],d,h=r.interval||bh.interval;try{h&&(d=new Op(h));var b=Ti(l);if(!b.length)throw new Error("Invalid reveal target.");var v=b.reduce(function(y,x){var z={},R=x.getAttribute("data-sr-id");R?(_i(z,s.store.elements[R]),vl(z.node,z.styles.inline.computed)):(z.id=bf(),z.node=x,z.seen=!1,z.revealed=!1,z.visible=!1);var G=_i({},z.config||s.defaults,r);if(!G.mobile&&fu()||!G.desktop&&!fu())return R&&Zf.call(s,z),y;var B=Ti(G.container)[0];if(!B)throw new Error("Invalid container.");if(!B.contains(x))return y;var H;return H=Ep(B,f,s.store.containers),H===null&&(H=bf(),f.push({id:H,node:B})),z.config=G,z.containerId=H,z.styles=bp(z),d&&(z.sequence={id:d.id,index:d.members.length},d.members.push(z.id)),y.push(z),y},[]);jt(v,function(y){s.store.elements[y.id]=y,y.node.setAttribute("data-sr-id",y.id)})}catch(y){return vn.call(this,"Reveal failed.",y.message)}jt(f,function(y){s.store.containers[y.id]={id:y.id,node:y.node}}),d&&(this.store.sequences[d.id]=d),c!==!0&&(this.store.history.push({target:l,options:r}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(xh.bind(this),0))}function Ep(l){for(var r=[],c=arguments.length-1;c-- >0;)r[c]=arguments[c+1];var s=null;return jt(r,function(f){jt(f,function(d){s===null&&d.node===l&&(s=d.id)})}),s}function Tp(){var l=this;jt(this.store.history,function(r){Eh.call(l,r.target,r.options,!0)}),xh.call(this)}var _p=function(l){return(l>0)-(l<0)||+l},p1=Math.sign||_p;function b1(l,r){var c=r?l.node.clientHeight:l.node.offsetHeight,s=r?l.node.clientWidth:l.node.offsetWidth,f=0,d=0,h=l.node;do isNaN(h.offsetTop)||(f+=h.offsetTop),isNaN(h.offsetLeft)||(d+=h.offsetLeft),h=h.offsetParent;while(h);return{bounds:{top:f,right:d+s,bottom:f+c,left:d},height:c,width:s}}function zp(l){var r,c;return l.node===document.documentElement?(r=window.pageYOffset,c=window.pageXOffset):(r=l.node.scrollTop,c=l.node.scrollLeft),{top:r,left:c}}function Mp(l){l===void 0&&(l={});var r=this.store.containers[l.containerId];if(r){var c=Math.max(0,Math.min(1,l.config.viewFactor)),s=l.config.viewOffset,f={top:l.geometry.bounds.top+l.geometry.height*c,right:l.geometry.bounds.right-l.geometry.width*c,bottom:l.geometry.bounds.bottom-l.geometry.height*c,left:l.geometry.bounds.left+l.geometry.width*c},d={top:r.geometry.bounds.top+r.scroll.top+s.top,right:r.geometry.bounds.right+r.scroll.left-s.right,bottom:r.geometry.bounds.bottom+r.scroll.top-s.bottom,left:r.geometry.bounds.left+r.scroll.left+s.left};return f.top<d.bottom&&f.right>d.left&&f.bottom>d.top&&f.left<d.right||l.styles.position==="fixed"}}function Np(l,r){var c=this;l===void 0&&(l={type:"init"}),r===void 0&&(r=this.store.elements),vp(function(){var s=l.type==="init"||l.type==="resize";jt(c.store.containers,function(f){s&&(f.geometry=b1.call(c,f,!0));var d=zp.call(c,f);f.scroll&&(f.direction={x:p1(d.left-f.scroll.left),y:p1(d.top-f.scroll.top)}),f.scroll=d}),jt(r,function(f){(s||f.geometry===void 0)&&(f.geometry=b1.call(c,f)),f.visible=Mp.call(c,f)}),jt(r,function(f){f.sequence?Oh.call(c,f):xi.call(c,f)}),c.pristine=!1})}function jp(){var l=document.documentElement.style;return"transform"in l||"WebkitTransform"in l}function Rp(){var l=document.documentElement.style;return"transition"in l||"WebkitTransition"in l}var Dp="4.0.9",$s,Fs,Ws,Ps,Is,Za,tf,ef;function pn(l){l===void 0&&(l={});var r=typeof this>"u"||Object.getPrototypeOf(this)!==pn.prototype;if(r)return new pn(l);if(!pn.isSupported())return vn.call(this,"Instantiation failed.","This browser is not supported."),pi.failure();var c;try{c=Za?_i({},Za,l):_i({},bh,l)}catch(f){return vn.call(this,"Invalid configuration.",f.message),pi.failure()}try{var s=Ti(c.container)[0];if(!s)throw new Error("Invalid container.")}catch(f){return vn.call(this,f.message),pi.failure()}return Za=c,!Za.mobile&&fu()||!Za.desktop&&!fu()?(vn.call(this,"This device is disabled.","desktop: "+Za.desktop,"mobile: "+Za.mobile),pi.failure()):(pi.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,$s=$s||Np.bind(this),Fs=Fs||Sp.bind(this),Ws=Ws||Eh.bind(this),Ps=Ps||Zf.bind(this),Is=Is||Tp.bind(this),Object.defineProperty(this,"delegate",{get:function(){return $s}}),Object.defineProperty(this,"destroy",{get:function(){return Fs}}),Object.defineProperty(this,"reveal",{get:function(){return Ws}}),Object.defineProperty(this,"clean",{get:function(){return Ps}}),Object.defineProperty(this,"sync",{get:function(){return Is}}),Object.defineProperty(this,"defaults",{get:function(){return Za}}),Object.defineProperty(this,"version",{get:function(){return Dp}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),ef||(ef=this))}pn.isSupported=function(){return jp()&&Rp()};Object.defineProperty(pn,"debug",{get:function(){return tf||!1},set:function(l){return tf=typeof l=="boolean"?l:tf}});pn();const kf=()=>{mt.useEffect(()=>{const l=pn();l.clean(".reveal-bottom, .reveal-left, .reveal-right,.reveal-child, .reveal-zoom, .reveal-fade ,.reveal-about"),l.reveal(".reveal-bottom",{origin:"bottom",distance:"40px",duration:800,viewFactor:.3,interval:100}),l.reveal(".reveal-left",{origin:"left",distance:"50px",duration:1e3,delay:100,viewFactor:.2}),l.reveal(".reveal-right",{origin:"right",distance:"60px",duration:1e3,delay:200,viewFactor:.3}),l.reveal(".reveal-about",{origin:"right",distance:"60px",duration:1e3,delay:200,viewFactor:.3}),l.reveal(".reveal-zoom",{scale:.85,duration:900,delay:300,viewFactor:.4}),l.reveal(".reveal-child",{origin:"bottom",distance:"60px",duration:2e3,interval:200,reset:!1}),l.reveal(".reveal-fade",{opacity:0,duration:800,delay:400,viewFactor:.3})},[])};var Th={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},S1=ta.createContext&&ta.createContext(Th),wp=["attr","size","title"];function Cp(l,r){if(l==null)return{};var c=Up(l,r),s,f;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(f=0;f<d.length;f++)s=d[f],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(l,s)&&(c[s]=l[s])}return c}function Up(l,r){if(l==null)return{};var c={};for(var s in l)if(Object.prototype.hasOwnProperty.call(l,s)){if(r.indexOf(s)>=0)continue;c[s]=l[s]}return c}function ou(){return ou=Object.assign?Object.assign.bind():function(l){for(var r=1;r<arguments.length;r++){var c=arguments[r];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(l[s]=c[s])}return l},ou.apply(this,arguments)}function x1(l,r){var c=Object.keys(l);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(l);r&&(s=s.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),c.push.apply(c,s)}return c}function du(l){for(var r=1;r<arguments.length;r++){var c=arguments[r]!=null?arguments[r]:{};r%2?x1(Object(c),!0).forEach(function(s){Hp(l,s,c[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(c)):x1(Object(c)).forEach(function(s){Object.defineProperty(l,s,Object.getOwnPropertyDescriptor(c,s))})}return l}function Hp(l,r,c){return r=qp(r),r in l?Object.defineProperty(l,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[r]=c,l}function qp(l){var r=Yp(l,"string");return typeof r=="symbol"?r:r+""}function Yp(l,r){if(typeof l!="object"||!l)return l;var c=l[Symbol.toPrimitive];if(c!==void 0){var s=c.call(l,r);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}function _h(l){return l&&l.map((r,c)=>ta.createElement(r.tag,du({key:c},r.attr),_h(r.child)))}function Le(l){return r=>ta.createElement(Lp,ou({attr:du({},l.attr)},r),_h(l.child))}function Lp(l){var r=c=>{var{attr:s,size:f,title:d}=l,h=Cp(l,wp),b=f||c.size||"1em",v;return c.className&&(v=c.className),l.className&&(v=(v?v+" ":"")+l.className),ta.createElement("svg",ou({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,s,h,{className:v,style:du(du({color:l.color||c.color},c.style),l.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),d&&ta.createElement("title",null,d),l.children)};return S1!==void 0?ta.createElement(S1.Consumer,null,c=>r(c)):r(Th)}function Bp(l){return Le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(l)}function bi(l){return Le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"},child:[]}]})(l)}function Xp(l){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"},child:[]}]})(l)}function Gp(l){return Le({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(l)}function Vp(l){return Le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(l)}function Qp(l){return Le({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(l)}function Zp(l){return Le({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(l)}var rl={},A1;function kp(){if(A1)return rl;A1=1,Object.defineProperty(rl,"__esModule",{value:!0});var l=gh(),r=gu(),c=function(){return c=Object.assign||function(v){for(var y,x=1,z=arguments.length;x<z;x++)for(var R in y=arguments[x])Object.prototype.hasOwnProperty.call(y,R)&&(v[R]=y[R]);return v},c.apply(this,arguments)};function s(v,y){var x,z;switch(y.type){case"TYPE":return c(c({},v),{speed:y.speed,text:(x=y.payload)===null||x===void 0?void 0:x.substring(0,v.text.length+1)});case"DELAY":return c(c({},v),{speed:y.payload});case"DELETE":return c(c({},v),{speed:y.speed,text:(z=y.payload)===null||z===void 0?void 0:z.substring(0,v.text.length-1)});case"COUNT":return c(c({},v),{count:v.count+1});default:return v}}var f=function(v){var y=v.words,x=y===void 0?["Hello World!","This is","a simple Typewriter"]:y,z=v.loop,R=z===void 0?1:z,G=v.typeSpeed,B=G===void 0?80:G,H=v.deleteSpeed,N=H===void 0?50:H,k=v.delaySpeed,L=k===void 0?1500:k,V=v.onLoopDone,et=v.onType,j=v.onDelete,lt=v.onDelay,W=r.useReducer(s,{speed:B,text:"",count:0}),ht=W[0],Lt=ht.speed,ae=ht.text,se=ht.count,Ut=W[1],ge=r.useRef(0),fe=r.useRef(!1),Dt=r.useRef(!1),D=r.useRef(!1),Q=r.useRef(!1),P=r.useCallback(function(){var yt=se%x.length,S=x[yt];Dt.current?(Ut({type:"DELETE",payload:S,speed:N}),ae===""&&(Dt.current=!1,Ut({type:"COUNT"}))):(Ut({type:"TYPE",payload:S,speed:B}),D.current=!0,ae===S&&(Ut({type:"DELAY",payload:L}),D.current=!1,Q.current=!0,setTimeout(function(){Q.current=!1,Dt.current=!0},L),R>0&&(ge.current+=1,ge.current/x.length===R&&(Q.current=!1,fe.current=!0)))),D.current&&et&&et(ge.current),Dt.current&&j&&j(),Q.current&&lt&&lt()},[se,L,N,R,B,x,ae,et,j,lt]);return r.useEffect(function(){var yt=setTimeout(P,Lt);return fe.current&&clearTimeout(yt),function(){return clearTimeout(yt)}},[P,Lt]),r.useEffect(function(){V&&fe.current&&V()},[V]),[ae,{isType:D.current,isDelay:Q.current,isDelete:Dt.current,isDone:fe.current}]},d="styles-module_blinkingCursor__yugAC",h="styles-module_blinking__9VXRT";(function(v,y){y===void 0&&(y={});var x=y.insertAt;if(typeof document<"u"){var z=document.head||document.getElementsByTagName("head")[0],R=document.createElement("style");R.type="text/css",x==="top"&&z.firstChild?z.insertBefore(R,z.firstChild):z.appendChild(R),R.styleSheet?R.styleSheet.cssText=v:R.appendChild(document.createTextNode(v))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var b=r.memo(function(v){var y=v.cursorBlinking,x=y===void 0||y,z=v.cursorStyle,R=z===void 0?"|":z,G=v.cursorColor,B=G===void 0?"inherit":G;return l.jsx("span",c({style:{color:B},className:"".concat(d," ").concat(x?h:"")},{children:R}))});return rl.Cursor=b,rl.Typewriter=function(v){var y=v.words,x=y===void 0?["Hello World!","This is","a simple Typewriter"]:y,z=v.loop,R=z===void 0?1:z,G=v.typeSpeed,B=G===void 0?80:G,H=v.deleteSpeed,N=H===void 0?50:H,k=v.delaySpeed,L=k===void 0?1500:k,V=v.cursor,et=V!==void 0&&V,j=v.cursorStyle,lt=j===void 0?"|":j,W=v.cursorColor,ht=W===void 0?"inherit":W,Lt=v.cursorBlinking,ae=Lt===void 0||Lt,se=v.onLoopDone,Ut=v.onType,ge=v.onDelay,fe=v.onDelete,Dt=f({words:x,loop:R,typeSpeed:B,deleteSpeed:N,delaySpeed:L,onLoopDone:se,onType:Ut,onDelay:ge,onDelete:fe})[0];return l.jsxs(l.Fragment,{children:[l.jsx("span",{children:Dt}),et&&l.jsx(b,{cursorStyle:lt,cursorColor:ht,cursorBlinking:ae})]})},rl.useTypewriter=f,rl}var Sf=kp();function Kp(l){if(l.sheet)return l.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===l)return document.styleSheets[r]}function Jp(l){var r=document.createElement("style");return r.setAttribute("data-emotion",l.key),l.nonce!==void 0&&r.setAttribute("nonce",l.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var $p=function(){function l(c){var s=this;this._insertTag=function(f){var d;s.tags.length===0?s.insertionPoint?d=s.insertionPoint.nextSibling:s.prepend?d=s.container.firstChild:d=s.before:d=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(f,d),s.tags.push(f)},this.isSpeedy=c.speedy===void 0?!0:c.speedy,this.tags=[],this.ctr=0,this.nonce=c.nonce,this.key=c.key,this.container=c.container,this.prepend=c.prepend,this.insertionPoint=c.insertionPoint,this.before=null}var r=l.prototype;return r.hydrate=function(s){s.forEach(this._insertTag)},r.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Jp(this));var f=this.tags[this.tags.length-1];if(this.isSpeedy){var d=Kp(f);try{d.insertRule(s,d.cssRules.length)}catch{}}else f.appendChild(document.createTextNode(s));this.ctr++},r.flush=function(){this.tags.forEach(function(s){var f;return(f=s.parentNode)==null?void 0:f.removeChild(s)}),this.tags=[],this.ctr=0},l}(),re="-ms-",mu="-moz-",bt="-webkit-",zh="comm",Kf="rule",Jf="decl",Fp="@import",Mh="@keyframes",Wp="@layer",Pp=Math.abs,pu=String.fromCharCode,Ip=Object.assign;function tb(l,r){return ee(l,0)^45?(((r<<2^ee(l,0))<<2^ee(l,1))<<2^ee(l,2))<<2^ee(l,3):0}function Nh(l){return l.trim()}function eb(l,r){return(l=r.exec(l))?l[0]:l}function St(l,r,c){return l.replace(r,c)}function xf(l,r){return l.indexOf(r)}function ee(l,r){return l.charCodeAt(r)|0}function zi(l,r,c){return l.slice(r,c)}function $e(l){return l.length}function $f(l){return l.length}function Pr(l,r){return r.push(l),l}function ab(l,r){return l.map(r).join("")}var bu=1,hl=1,jh=0,ve=0,Qt=0,gl="";function Su(l,r,c,s,f,d,h){return{value:l,root:r,parent:c,type:s,props:f,children:d,line:bu,column:hl,length:h,return:""}}function Si(l,r){return Ip(Su("",null,null,"",null,null,0),l,{length:-l.length},r)}function nb(){return Qt}function lb(){return Qt=ve>0?ee(gl,--ve):0,hl--,Qt===10&&(hl=1,bu--),Qt}function Me(){return Qt=ve<jh?ee(gl,ve++):0,hl++,Qt===10&&(hl=1,bu++),Qt}function ea(){return ee(gl,ve)}function iu(){return ve}function wi(l,r){return zi(gl,l,r)}function Mi(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rh(l){return bu=hl=1,jh=$e(gl=l),ve=0,[]}function Dh(l){return gl="",l}function ru(l){return Nh(wi(ve-1,Af(l===91?l+2:l===40?l+1:l)))}function ib(l){for(;(Qt=ea())&&Qt<33;)Me();return Mi(l)>2||Mi(Qt)>3?"":" "}function rb(l,r){for(;--r&&Me()&&!(Qt<48||Qt>102||Qt>57&&Qt<65||Qt>70&&Qt<97););return wi(l,iu()+(r<6&&ea()==32&&Me()==32))}function Af(l){for(;Me();)switch(Qt){case l:return ve;case 34:case 39:l!==34&&l!==39&&Af(Qt);break;case 40:l===41&&Af(l);break;case 92:Me();break}return ve}function ub(l,r){for(;Me()&&l+Qt!==57;)if(l+Qt===84&&ea()===47)break;return"/*"+wi(r,ve-1)+"*"+pu(l===47?l:Me())}function cb(l){for(;!Mi(ea());)Me();return wi(l,ve)}function sb(l){return Dh(uu("",null,null,null,[""],l=Rh(l),0,[0],l))}function uu(l,r,c,s,f,d,h,b,v){for(var y=0,x=0,z=h,R=0,G=0,B=0,H=1,N=1,k=1,L=0,V="",et=f,j=d,lt=s,W=V;N;)switch(B=L,L=Me()){case 40:if(B!=108&&ee(W,z-1)==58){xf(W+=St(ru(L),"&","&\f"),"&\f")!=-1&&(k=-1);break}case 34:case 39:case 91:W+=ru(L);break;case 9:case 10:case 13:case 32:W+=ib(B);break;case 92:W+=rb(iu()-1,7);continue;case 47:switch(ea()){case 42:case 47:Pr(fb(ub(Me(),iu()),r,c),v);break;default:W+="/"}break;case 123*H:b[y++]=$e(W)*k;case 125*H:case 59:case 0:switch(L){case 0:case 125:N=0;case 59+x:k==-1&&(W=St(W,/\f/g,"")),G>0&&$e(W)-z&&Pr(G>32?E1(W+";",s,c,z-1):E1(St(W," ","")+";",s,c,z-2),v);break;case 59:W+=";";default:if(Pr(lt=O1(W,r,c,y,x,f,b,V,et=[],j=[],z),d),L===123)if(x===0)uu(W,r,lt,lt,et,d,z,b,j);else switch(R===99&&ee(W,3)===110?100:R){case 100:case 108:case 109:case 115:uu(l,lt,lt,s&&Pr(O1(l,lt,lt,0,0,f,b,V,f,et=[],z),j),f,j,z,b,s?et:j);break;default:uu(W,lt,lt,lt,[""],j,0,b,j)}}y=x=G=0,H=k=1,V=W="",z=h;break;case 58:z=1+$e(W),G=B;default:if(H<1){if(L==123)--H;else if(L==125&&H++==0&&lb()==125)continue}switch(W+=pu(L),L*H){case 38:k=x>0?1:(W+="\f",-1);break;case 44:b[y++]=($e(W)-1)*k,k=1;break;case 64:ea()===45&&(W+=ru(Me())),R=ea(),x=z=$e(V=W+=cb(iu())),L++;break;case 45:B===45&&$e(W)==2&&(H=0)}}return d}function O1(l,r,c,s,f,d,h,b,v,y,x){for(var z=f-1,R=f===0?d:[""],G=$f(R),B=0,H=0,N=0;B<s;++B)for(var k=0,L=zi(l,z+1,z=Pp(H=h[B])),V=l;k<G;++k)(V=Nh(H>0?R[k]+" "+L:St(L,/&\f/g,R[k])))&&(v[N++]=V);return Su(l,r,c,f===0?Kf:b,v,y,x)}function fb(l,r,c){return Su(l,r,c,zh,pu(nb()),zi(l,2,-2),0)}function E1(l,r,c,s){return Su(l,r,c,Jf,zi(l,0,s),zi(l,s+1,-1),s)}function ol(l,r){for(var c="",s=$f(l),f=0;f<s;f++)c+=r(l[f],f,l,r)||"";return c}function ob(l,r,c,s){switch(l.type){case Wp:if(l.children.length)break;case Fp:case Jf:return l.return=l.return||l.value;case zh:return"";case Mh:return l.return=l.value+"{"+ol(l.children,s)+"}";case Kf:l.value=l.props.join(",")}return $e(c=ol(l.children,s))?l.return=l.value+"{"+c+"}":""}function db(l){var r=$f(l);return function(c,s,f,d){for(var h="",b=0;b<r;b++)h+=l[b](c,s,f,d)||"";return h}}function mb(l){return function(r){r.root||(r=r.return)&&l(r)}}function hb(l){var r=Object.create(null);return function(c){return r[c]===void 0&&(r[c]=l(c)),r[c]}}var yb=function(r,c,s){for(var f=0,d=0;f=d,d=ea(),f===38&&d===12&&(c[s]=1),!Mi(d);)Me();return wi(r,ve)},vb=function(r,c){var s=-1,f=44;do switch(Mi(f)){case 0:f===38&&ea()===12&&(c[s]=1),r[s]+=yb(ve-1,c,s);break;case 2:r[s]+=ru(f);break;case 4:if(f===44){r[++s]=ea()===58?"&\f":"",c[s]=r[s].length;break}default:r[s]+=pu(f)}while(f=Me());return r},gb=function(r,c){return Dh(vb(Rh(r),c))},T1=new WeakMap,pb=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var c=r.value,s=r.parent,f=r.column===s.column&&r.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(r.props.length===1&&c.charCodeAt(0)!==58&&!T1.get(s))&&!f){T1.set(r,!0);for(var d=[],h=gb(c,d),b=s.props,v=0,y=0;v<h.length;v++)for(var x=0;x<b.length;x++,y++)r.props[y]=d[v]?h[v].replace(/&\f/g,b[x]):b[x]+" "+h[v]}}},bb=function(r){if(r.type==="decl"){var c=r.value;c.charCodeAt(0)===108&&c.charCodeAt(2)===98&&(r.return="",r.value="")}};function wh(l,r){switch(tb(l,r)){case 5103:return bt+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return bt+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return bt+l+mu+l+re+l+l;case 6828:case 4268:return bt+l+re+l+l;case 6165:return bt+l+re+"flex-"+l+l;case 5187:return bt+l+St(l,/(\w+).+(:[^]+)/,bt+"box-$1$2"+re+"flex-$1$2")+l;case 5443:return bt+l+re+"flex-item-"+St(l,/flex-|-self/,"")+l;case 4675:return bt+l+re+"flex-line-pack"+St(l,/align-content|flex-|-self/,"")+l;case 5548:return bt+l+re+St(l,"shrink","negative")+l;case 5292:return bt+l+re+St(l,"basis","preferred-size")+l;case 6060:return bt+"box-"+St(l,"-grow","")+bt+l+re+St(l,"grow","positive")+l;case 4554:return bt+St(l,/([^-])(transform)/g,"$1"+bt+"$2")+l;case 6187:return St(St(St(l,/(zoom-|grab)/,bt+"$1"),/(image-set)/,bt+"$1"),l,"")+l;case 5495:case 3959:return St(l,/(image-set\([^]*)/,bt+"$1$`$1");case 4968:return St(St(l,/(.+:)(flex-)?(.*)/,bt+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+bt+l+l;case 4095:case 3583:case 4068:case 2532:return St(l,/(.+)-inline(.+)/,bt+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($e(l)-1-r>6)switch(ee(l,r+1)){case 109:if(ee(l,r+4)!==45)break;case 102:return St(l,/(.+:)(.+)-([^]+)/,"$1"+bt+"$2-$3$1"+mu+(ee(l,r+3)==108?"$3":"$2-$3"))+l;case 115:return~xf(l,"stretch")?wh(St(l,"stretch","fill-available"),r)+l:l}break;case 4949:if(ee(l,r+1)!==115)break;case 6444:switch(ee(l,$e(l)-3-(~xf(l,"!important")&&10))){case 107:return St(l,":",":"+bt)+l;case 101:return St(l,/(.+:)([^;!]+)(;|!.+)?/,"$1"+bt+(ee(l,14)===45?"inline-":"")+"box$3$1"+bt+"$2$3$1"+re+"$2box$3")+l}break;case 5936:switch(ee(l,r+11)){case 114:return bt+l+re+St(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return bt+l+re+St(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return bt+l+re+St(l,/[svh]\w+-[tblr]{2}/,"lr")+l}return bt+l+re+l+l}return l}var Sb=function(r,c,s,f){if(r.length>-1&&!r.return)switch(r.type){case Jf:r.return=wh(r.value,r.length);break;case Mh:return ol([Si(r,{value:St(r.value,"@","@"+bt)})],f);case Kf:if(r.length)return ab(r.props,function(d){switch(eb(d,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ol([Si(r,{props:[St(d,/:(read-\w+)/,":"+mu+"$1")]})],f);case"::placeholder":return ol([Si(r,{props:[St(d,/:(plac\w+)/,":"+bt+"input-$1")]}),Si(r,{props:[St(d,/:(plac\w+)/,":"+mu+"$1")]}),Si(r,{props:[St(d,/:(plac\w+)/,re+"input-$1")]})],f)}return""})}},xb=[Sb],Ab=function(r){var c=r.key;if(c==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(H){var N=H.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(H),H.setAttribute("data-s",""))})}var f=r.stylisPlugins||xb,d={},h,b=[];h=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+c+' "]'),function(H){for(var N=H.getAttribute("data-emotion").split(" "),k=1;k<N.length;k++)d[N[k]]=!0;b.push(H)});var v,y=[pb,bb];{var x,z=[ob,mb(function(H){x.insert(H)})],R=db(y.concat(f,z)),G=function(N){return ol(sb(N),R)};v=function(N,k,L,V){x=L,G(N?N+"{"+k.styles+"}":k.styles),V&&(B.inserted[k.name]=!0)}}var B={key:c,sheet:new $p({key:c,container:h,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:d,registered:{},insert:v};return B.sheet.hydrate(b),B},af={exports:{}},xt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _1;function Ob(){if(_1)return xt;_1=1;var l=typeof Symbol=="function"&&Symbol.for,r=l?Symbol.for("react.element"):60103,c=l?Symbol.for("react.portal"):60106,s=l?Symbol.for("react.fragment"):60107,f=l?Symbol.for("react.strict_mode"):60108,d=l?Symbol.for("react.profiler"):60114,h=l?Symbol.for("react.provider"):60109,b=l?Symbol.for("react.context"):60110,v=l?Symbol.for("react.async_mode"):60111,y=l?Symbol.for("react.concurrent_mode"):60111,x=l?Symbol.for("react.forward_ref"):60112,z=l?Symbol.for("react.suspense"):60113,R=l?Symbol.for("react.suspense_list"):60120,G=l?Symbol.for("react.memo"):60115,B=l?Symbol.for("react.lazy"):60116,H=l?Symbol.for("react.block"):60121,N=l?Symbol.for("react.fundamental"):60117,k=l?Symbol.for("react.responder"):60118,L=l?Symbol.for("react.scope"):60119;function V(j){if(typeof j=="object"&&j!==null){var lt=j.$$typeof;switch(lt){case r:switch(j=j.type,j){case v:case y:case s:case d:case f:case z:return j;default:switch(j=j&&j.$$typeof,j){case b:case x:case B:case G:case h:return j;default:return lt}}case c:return lt}}}function et(j){return V(j)===y}return xt.AsyncMode=v,xt.ConcurrentMode=y,xt.ContextConsumer=b,xt.ContextProvider=h,xt.Element=r,xt.ForwardRef=x,xt.Fragment=s,xt.Lazy=B,xt.Memo=G,xt.Portal=c,xt.Profiler=d,xt.StrictMode=f,xt.Suspense=z,xt.isAsyncMode=function(j){return et(j)||V(j)===v},xt.isConcurrentMode=et,xt.isContextConsumer=function(j){return V(j)===b},xt.isContextProvider=function(j){return V(j)===h},xt.isElement=function(j){return typeof j=="object"&&j!==null&&j.$$typeof===r},xt.isForwardRef=function(j){return V(j)===x},xt.isFragment=function(j){return V(j)===s},xt.isLazy=function(j){return V(j)===B},xt.isMemo=function(j){return V(j)===G},xt.isPortal=function(j){return V(j)===c},xt.isProfiler=function(j){return V(j)===d},xt.isStrictMode=function(j){return V(j)===f},xt.isSuspense=function(j){return V(j)===z},xt.isValidElementType=function(j){return typeof j=="string"||typeof j=="function"||j===s||j===y||j===d||j===f||j===z||j===R||typeof j=="object"&&j!==null&&(j.$$typeof===B||j.$$typeof===G||j.$$typeof===h||j.$$typeof===b||j.$$typeof===x||j.$$typeof===N||j.$$typeof===k||j.$$typeof===L||j.$$typeof===H)},xt.typeOf=V,xt}var z1;function Eb(){return z1||(z1=1,af.exports=Ob()),af.exports}var nf,M1;function Tb(){if(M1)return nf;M1=1;var l=Eb(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};d[l.ForwardRef]=s,d[l.Memo]=f;function h(B){return l.isMemo(B)?f:d[B.$$typeof]||r}var b=Object.defineProperty,v=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,x=Object.getOwnPropertyDescriptor,z=Object.getPrototypeOf,R=Object.prototype;function G(B,H,N){if(typeof H!="string"){if(R){var k=z(H);k&&k!==R&&G(B,k,N)}var L=v(H);y&&(L=L.concat(y(H)));for(var V=h(B),et=h(H),j=0;j<L.length;++j){var lt=L[j];if(!c[lt]&&!(N&&N[lt])&&!(et&&et[lt])&&!(V&&V[lt])){var W=x(H,lt);try{b(B,lt,W)}catch{}}}}return B}return nf=G,nf}Tb();var _b=!0;function Ch(l,r,c){var s="";return c.split(" ").forEach(function(f){l[f]!==void 0?r.push(l[f]+";"):f&&(s+=f+" ")}),s}var Ff=function(r,c,s){var f=r.key+"-"+c.name;(s===!1||_b===!1)&&r.registered[f]===void 0&&(r.registered[f]=c.styles)},Uh=function(r,c,s){Ff(r,c,s);var f=r.key+"-"+c.name;if(r.inserted[c.name]===void 0){var d=c;do r.insert(c===d?"."+f:"",d,r.sheet,!0),d=d.next;while(d!==void 0)}};function zb(l){for(var r=0,c,s=0,f=l.length;f>=4;++s,f-=4)c=l.charCodeAt(s)&255|(l.charCodeAt(++s)&255)<<8|(l.charCodeAt(++s)&255)<<16|(l.charCodeAt(++s)&255)<<24,c=(c&65535)*1540483477+((c>>>16)*59797<<16),c^=c>>>24,r=(c&65535)*1540483477+((c>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(f){case 3:r^=(l.charCodeAt(s+2)&255)<<16;case 2:r^=(l.charCodeAt(s+1)&255)<<8;case 1:r^=l.charCodeAt(s)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Mb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nb=/[A-Z]|^ms/g,jb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Hh=function(r){return r.charCodeAt(1)===45},N1=function(r){return r!=null&&typeof r!="boolean"},lf=hb(function(l){return Hh(l)?l:l.replace(Nb,"-$&").toLowerCase()}),j1=function(r,c){switch(r){case"animation":case"animationName":if(typeof c=="string")return c.replace(jb,function(s,f,d){return Fe={name:f,styles:d,next:Fe},f})}return Mb[r]!==1&&!Hh(r)&&typeof c=="number"&&c!==0?c+"px":c};function Ni(l,r,c){if(c==null)return"";var s=c;if(s.__emotion_styles!==void 0)return s;switch(typeof c){case"boolean":return"";case"object":{var f=c;if(f.anim===1)return Fe={name:f.name,styles:f.styles,next:Fe},f.name;var d=c;if(d.styles!==void 0){var h=d.next;if(h!==void 0)for(;h!==void 0;)Fe={name:h.name,styles:h.styles,next:Fe},h=h.next;var b=d.styles+";";return b}return Rb(l,r,c)}case"function":{if(l!==void 0){var v=Fe,y=c(l);return Fe=v,Ni(l,r,y)}break}}var x=c;if(r==null)return x;var z=r[x];return z!==void 0?z:x}function Rb(l,r,c){var s="";if(Array.isArray(c))for(var f=0;f<c.length;f++)s+=Ni(l,r,c[f])+";";else for(var d in c){var h=c[d];if(typeof h!="object"){var b=h;r!=null&&r[b]!==void 0?s+=d+"{"+r[b]+"}":N1(b)&&(s+=lf(d)+":"+j1(d,b)+";")}else if(Array.isArray(h)&&typeof h[0]=="string"&&(r==null||r[h[0]]===void 0))for(var v=0;v<h.length;v++)N1(h[v])&&(s+=lf(d)+":"+j1(d,h[v])+";");else{var y=Ni(l,r,h);switch(d){case"animation":case"animationName":{s+=lf(d)+":"+y+";";break}default:s+=d+"{"+y+"}"}}}return s}var R1=/label:\s*([^\s;{]+)\s*(;|$)/g,Fe;function Wf(l,r,c){if(l.length===1&&typeof l[0]=="object"&&l[0]!==null&&l[0].styles!==void 0)return l[0];var s=!0,f="";Fe=void 0;var d=l[0];if(d==null||d.raw===void 0)s=!1,f+=Ni(c,r,d);else{var h=d;f+=h[0]}for(var b=1;b<l.length;b++)if(f+=Ni(c,r,l[b]),s){var v=d;f+=v[b]}R1.lastIndex=0;for(var y="",x;(x=R1.exec(f))!==null;)y+="-"+x[1];var z=zb(f)+y;return{name:z,styles:f,next:Fe}}var Db=function(r){return r()},wb=c1.useInsertionEffect?c1.useInsertionEffect:!1,qh=wb||Db,Yh=mt.createContext(typeof HTMLElement<"u"?Ab({key:"css"}):null);Yh.Provider;var Lh=function(r){return mt.forwardRef(function(c,s){var f=mt.useContext(Yh);return r(c,f,s)})},Bh=mt.createContext({}),xu={}.hasOwnProperty,Of="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Xh=function(r,c){var s={};for(var f in c)xu.call(c,f)&&(s[f]=c[f]);return s[Of]=r,s},Cb=function(r){var c=r.cache,s=r.serialized,f=r.isStringTag;return Ff(c,s,f),qh(function(){return Uh(c,s,f)}),null},Ub=Lh(function(l,r,c){var s=l.css;typeof s=="string"&&r.registered[s]!==void 0&&(s=r.registered[s]);var f=l[Of],d=[s],h="";typeof l.className=="string"?h=Ch(r.registered,d,l.className):l.className!=null&&(h=l.className+" ");var b=Wf(d,void 0,mt.useContext(Bh));h+=r.key+"-"+b.name;var v={};for(var y in l)xu.call(l,y)&&y!=="css"&&y!==Of&&(v[y]=l[y]);return v.className=h,c&&(v.ref=c),mt.createElement(mt.Fragment,null,mt.createElement(Cb,{cache:r,serialized:b,isStringTag:typeof f=="string"}),mt.createElement(f,v))}),Gh=Ub,Hb=p.Fragment,Kt=function(r,c,s){return xu.call(c,"css")?p.jsx(Gh,Xh(r,c),s):p.jsx(r,c,s)},D1=function(r,c){var s=arguments;if(c==null||!xu.call(c,"css"))return mt.createElement.apply(void 0,s);var f=s.length,d=new Array(f);d[0]=Gh,d[1]=Xh(r,c);for(var h=2;h<f;h++)d[h]=s[h];return mt.createElement.apply(null,d)};(function(l){var r;r||(r=l.JSX||(l.JSX={}))})(D1||(D1={}));function Vh(){for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return Wf(r)}function X(){var l=Vh.apply(void 0,arguments),r="animation-"+l.name;return{name:r,styles:"@keyframes "+r+"{"+l.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var qb=function l(r){for(var c=r.length,s=0,f="";s<c;s++){var d=r[s];if(d!=null){var h=void 0;switch(typeof d){case"boolean":break;case"object":{if(Array.isArray(d))h=l(d);else{h="";for(var b in d)d[b]&&b&&(h&&(h+=" "),h+=b)}break}default:h=d}h&&(f&&(f+=" "),f+=h)}}return f};function Yb(l,r,c){var s=[],f=Ch(l,s,c);return s.length<2?c:f+r(s)}var Lb=function(r){var c=r.cache,s=r.serializedArr;return qh(function(){for(var f=0;f<s.length;f++)Uh(c,s[f],!1)}),null},rf=Lh(function(l,r){var c=[],s=function(){for(var v=arguments.length,y=new Array(v),x=0;x<v;x++)y[x]=arguments[x];var z=Wf(y,r.registered);return c.push(z),Ff(r,z,!1),r.key+"-"+z.name},f=function(){for(var v=arguments.length,y=new Array(v),x=0;x<v;x++)y[x]=arguments[x];return Yb(r.registered,s,qb(y))},d={css:s,cx:f,theme:mt.useContext(Bh)},h=l.children(d);return mt.createElement(mt.Fragment,null,mt.createElement(Lb,{cache:r,serializedArr:c}),h)}),Bb=Object.defineProperty,Xb=(l,r,c)=>r in l?Bb(l,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[r]=c,Ir=(l,r,c)=>Xb(l,typeof r!="symbol"?r+"":r,c),Ef=new Map,tu=new WeakMap,w1=0,Gb=void 0;function Vb(l){return l?(tu.has(l)||(w1+=1,tu.set(l,w1.toString())),tu.get(l)):"0"}function Qb(l){return Object.keys(l).sort().filter(r=>l[r]!==void 0).map(r=>`${r}_${r==="root"?Vb(l.root):l[r]}`).toString()}function Zb(l){const r=Qb(l);let c=Ef.get(r);if(!c){const s=new Map;let f;const d=new IntersectionObserver(h=>{h.forEach(b=>{var v;const y=b.isIntersecting&&f.some(x=>b.intersectionRatio>=x);l.trackVisibility&&typeof b.isVisible>"u"&&(b.isVisible=y),(v=s.get(b.target))==null||v.forEach(x=>{x(y,b)})})},l);f=d.thresholds||(Array.isArray(l.threshold)?l.threshold:[l.threshold||0]),c={id:r,observer:d,elements:s},Ef.set(r,c)}return c}function Qh(l,r,c={},s=Gb){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const v=l.getBoundingClientRect();return r(s,{isIntersecting:s,target:l,intersectionRatio:typeof c.threshold=="number"?c.threshold:0,time:0,boundingClientRect:v,intersectionRect:v,rootBounds:v}),()=>{}}const{id:f,observer:d,elements:h}=Zb(c),b=h.get(l)||[];return h.has(l)||h.set(l,b),b.push(r),d.observe(l),function(){b.splice(b.indexOf(r),1),b.length===0&&(h.delete(l),d.unobserve(l)),h.size===0&&(d.disconnect(),Ef.delete(f))}}function kb(l){return typeof l.children!="function"}var C1=class extends mt.Component{constructor(l){super(l),Ir(this,"node",null),Ir(this,"_unobserveCb",null),Ir(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),Ir(this,"handleChange",(r,c)=>{r&&this.props.triggerOnce&&this.unobserve(),kb(this.props)||this.setState({inView:r,entry:c}),this.props.onChange&&this.props.onChange(r,c)}),this.state={inView:!!l.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(l){(l.rootMargin!==this.props.rootMargin||l.root!==this.props.root||l.threshold!==this.props.threshold||l.skip!==this.props.skip||l.trackVisibility!==this.props.trackVisibility||l.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:l,root:r,rootMargin:c,trackVisibility:s,delay:f,fallbackInView:d}=this.props;this._unobserveCb=Qh(this.node,this.handleChange,{threshold:l,root:r,rootMargin:c,trackVisibility:s,delay:f},d)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:l}=this.props;if(typeof l=="function"){const{inView:G,entry:B}=this.state;return l({inView:G,entry:B,ref:this.handleNode})}const{as:r,triggerOnce:c,threshold:s,root:f,rootMargin:d,onChange:h,skip:b,trackVisibility:v,delay:y,initialInView:x,fallbackInView:z,...R}=this.props;return mt.createElement(r||"div",{ref:this.handleNode,...R},l)}};function Zh({threshold:l,delay:r,trackVisibility:c,rootMargin:s,root:f,triggerOnce:d,skip:h,initialInView:b,fallbackInView:v,onChange:y}={}){var x;const[z,R]=mt.useState(null),G=mt.useRef(y),[B,H]=mt.useState({inView:!!b,entry:void 0});G.current=y,mt.useEffect(()=>{if(h||!z)return;let V;return V=Qh(z,(et,j)=>{H({inView:et,entry:j}),G.current&&G.current(et,j),j.isIntersecting&&d&&V&&(V(),V=void 0)},{root:f,rootMargin:s,threshold:l,trackVisibility:c,delay:r},v),()=>{V&&V()}},[Array.isArray(l)?l.toString():l,z,f,s,d,h,c,v,r]);const N=(x=B.entry)==null?void 0:x.target,k=mt.useRef(void 0);!z&&N&&!d&&!h&&k.current!==N&&(k.current=N,H({inView:!!b,entry:void 0}));const L=[R,B.inView,B.entry];return L.ref=L[0],L.inView=L[1],L.entry=L[2],L}var uf={exports:{}},At={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1;function Kb(){if(U1)return At;U1=1;var l=Symbol.for("react.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),b=Symbol.for("react.server_context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),B;B=Symbol.for("react.module.reference");function H(N){if(typeof N=="object"&&N!==null){var k=N.$$typeof;switch(k){case l:switch(N=N.type,N){case c:case f:case s:case y:case x:return N;default:switch(N=N&&N.$$typeof,N){case b:case h:case v:case R:case z:case d:return N;default:return k}}case r:return k}}}return At.ContextConsumer=h,At.ContextProvider=d,At.Element=l,At.ForwardRef=v,At.Fragment=c,At.Lazy=R,At.Memo=z,At.Portal=r,At.Profiler=f,At.StrictMode=s,At.Suspense=y,At.SuspenseList=x,At.isAsyncMode=function(){return!1},At.isConcurrentMode=function(){return!1},At.isContextConsumer=function(N){return H(N)===h},At.isContextProvider=function(N){return H(N)===d},At.isElement=function(N){return typeof N=="object"&&N!==null&&N.$$typeof===l},At.isForwardRef=function(N){return H(N)===v},At.isFragment=function(N){return H(N)===c},At.isLazy=function(N){return H(N)===R},At.isMemo=function(N){return H(N)===z},At.isPortal=function(N){return H(N)===r},At.isProfiler=function(N){return H(N)===f},At.isStrictMode=function(N){return H(N)===s},At.isSuspense=function(N){return H(N)===y},At.isSuspenseList=function(N){return H(N)===x},At.isValidElementType=function(N){return typeof N=="string"||typeof N=="function"||N===c||N===f||N===s||N===y||N===x||N===G||typeof N=="object"&&N!==null&&(N.$$typeof===R||N.$$typeof===z||N.$$typeof===d||N.$$typeof===h||N.$$typeof===v||N.$$typeof===B||N.getModuleId!==void 0)},At.typeOf=H,At}var H1;function Jb(){return H1||(H1=1,uf.exports=Kb()),uf.exports}var $b=Jb();X`
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
`;const Fb=X`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Wb=X`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pb=X`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ib=X`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t2=X`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pf=X`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e2=X`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,a2=X`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n2=X`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,l2=X`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,i2=X`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,r2=X`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,u2=X`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function c2({duration:l=1e3,delay:r=0,timingFunction:c="ease",keyframes:s=Pf,iterationCount:f=1}){return Vh`
    animation-duration: ${l}ms;
    animation-timing-function: ${c};
    animation-delay: ${r}ms;
    animation-name: ${s};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${f};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function s2(l){return l==null}function f2(l){return typeof l=="string"||typeof l=="number"||typeof l=="boolean"}function kh(l,r){return c=>c?l():r()}function ji(l){return kh(l,()=>null)}function Tf(l){return ji(()=>({opacity:0}))(l)}const Au=l=>{const{cascade:r=!1,damping:c=.5,delay:s=0,duration:f=1e3,fraction:d=0,keyframes:h=Pf,triggerOnce:b=!1,className:v,style:y,childClassName:x,childStyle:z,children:R,onVisibilityChange:G}=l,B=mt.useMemo(()=>c2({keyframes:h,duration:f}),[f,h]);return s2(R)?null:f2(R)?Kt(d2,{...l,animationStyles:B,children:String(R)}):$b.isFragment(R)?Kt(Kh,{...l,animationStyles:B}):Kt(Hb,{children:mt.Children.map(R,(H,N)=>{if(!mt.isValidElement(H))return null;const k=s+(r?N*f*c:0);switch(H.type){case"ol":case"ul":return Kt(rf,{children:({cx:L})=>Kt(H.type,{...H.props,className:L(v,H.props.className),style:Object.assign({},y,H.props.style),children:Kt(Au,{...l,children:H.props.children})})});case"li":return Kt(C1,{threshold:d,triggerOnce:b,onChange:G,children:({inView:L,ref:V})=>Kt(rf,{children:({cx:et})=>Kt(H.type,{...H.props,ref:V,className:et(x,H.props.className),css:ji(()=>B)(L),style:Object.assign({},z,H.props.style,Tf(!L),{animationDelay:k+"ms"})})})});default:return Kt(C1,{threshold:d,triggerOnce:b,onChange:G,children:({inView:L,ref:V})=>Kt("div",{ref:V,className:v,css:ji(()=>B)(L),style:Object.assign({},y,Tf(!L),{animationDelay:k+"ms"}),children:Kt(rf,{children:({cx:et})=>Kt(H.type,{...H.props,className:et(x,H.props.className),style:Object.assign({},z,H.props.style)})})})})}})})},o2={display:"inline-block",whiteSpace:"pre"},d2=l=>{const{animationStyles:r,cascade:c=!1,damping:s=.5,delay:f=0,duration:d=1e3,fraction:h=0,triggerOnce:b=!1,className:v,style:y,children:x,onVisibilityChange:z}=l,{ref:R,inView:G}=Zh({triggerOnce:b,threshold:h,onChange:z});return kh(()=>Kt("div",{ref:R,className:v,style:Object.assign({},y,o2),children:x.split("").map((B,H)=>Kt("span",{css:ji(()=>r)(G),style:{animationDelay:f+H*d*s+"ms"},children:B},H))}),()=>Kt(Kh,{...l,children:x}))(c)},Kh=l=>{const{animationStyles:r,fraction:c=0,triggerOnce:s=!1,className:f,style:d,children:h,onVisibilityChange:b}=l,{ref:v,inView:y}=Zh({triggerOnce:s,threshold:c,onChange:b});return Kt("div",{ref:v,className:f,css:ji(()=>r)(y),style:Object.assign({},d,Tf(!y)),children:h})};X`
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
`;const m2=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,h2=X`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,y2=X`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,v2=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,g2=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,p2=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,b2=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,S2=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,x2=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,A2=X`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,O2=X`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,E2=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,T2=X`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function _2(l,r,c){switch(c){case"bottom-left":return r?h2:Wb;case"bottom-right":return r?y2:Pb;case"down":return l?r?g2:t2:r?v2:Ib;case"left":return l?r?b2:e2:r?p2:Pf;case"right":return l?r?x2:n2:r?S2:a2;case"top-left":return r?A2:l2;case"top-right":return r?O2:i2;case"up":return l?r?T2:u2:r?E2:r2;default:return r?m2:Fb}}const dl=l=>{const{big:r=!1,direction:c,reverse:s=!1,...f}=l,d=mt.useMemo(()=>_2(r,s,c),[r,c,s]);return Kt(Au,{keyframes:d,...f})};X`
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
`;const z2=X`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,M2=X`
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
`,N2=X`
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
`,j2=X`
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
`,R2=X`
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
`,D2=X`
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
`,w2=X`
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
`,C2=X`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,U2=X`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,H2=X`
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
`;function q2(l,r){switch(r){case"down":return l?w2:M2;case"left":return l?C2:N2;case"right":return l?U2:j2;case"up":return l?H2:R2;default:return l?D2:z2}}const cl=l=>{const{direction:r,reverse:c=!1,...s}=l,f=mt.useMemo(()=>q2(c,r),[r,c]);return Kt(Au,{keyframes:f,...s})},Y2=()=>{kf();const[l]=Sf.useTypewriter({words:["Developer","Designer","Photographer"],loop:{},typeSpeed:180,delaySpeed:100});return p.jsx("div",{className:"body",children:p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"left",children:[p.jsxs("h1",{className:"reveal-left",children:["Hi,",p.jsx("br",{}),"This is ",p.jsx("span",{style:{fontWeight:"bold",color:"aqua",fontSize:"70px"},children:"Harshith"})]}),p.jsxs("h2",{className:"reveal-left",children:["I'm a",p.jsx("span",{style:{fontWeight:"bold",color:"aqua",marginLeft:"20px"},children:l}),p.jsx(Sf.Cursor,{})]}),p.jsxs("div",{className:"media reveal-child",children:[p.jsx("button",{onClick:()=>window.open("https://res.cloudinary.com/dwko0nqi4/image/upload/v1744475326/harshith1_cv1_page-0001_umeb9w.jpg","download"),children:"Download CV"}),p.jsx("a",{className:"social reveal-child",href:"https://www.linkedin.com/in/donthamsetty-jaya-satya-sai-harshith-b227b3286",children:p.jsx(Bp,{})}),p.jsx("a",{className:"social reveal-child",href:"https://www.facebook.com/share/1FdyFF8gDv/",children:p.jsx(Gp,{})}),p.jsx("a",{className:"social reveal-child",href:"https://www.instagram.com/itz__harshith____?igsh=MTNqd2ExZDR6amp6dg==",children:p.jsx(Vp,{})})]})]}),p.jsx("div",{className:"right reveal-right",children:p.jsx("img",{src:"https://res.cloudinary.com/dwko0nqi4/image/upload/v1746891353/edit216_qaahuz.png",className:"image"})})]})})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function L2(l,r,c){return(r=X2(r))in l?Object.defineProperty(l,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[r]=c,l}function q1(l,r){var c=Object.keys(l);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(l);r&&(s=s.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),c.push.apply(c,s)}return c}function Y(l){for(var r=1;r<arguments.length;r++){var c=arguments[r]!=null?arguments[r]:{};r%2?q1(Object(c),!0).forEach(function(s){L2(l,s,c[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(c)):q1(Object(c)).forEach(function(s){Object.defineProperty(l,s,Object.getOwnPropertyDescriptor(c,s))})}return l}function B2(l,r){if(typeof l!="object"||!l)return l;var c=l[Symbol.toPrimitive];if(c!==void 0){var s=c.call(l,r);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(l)}function X2(l){var r=B2(l,"string");return typeof r=="symbol"?r:r+""}const Y1=()=>{};let If={},Jh={},$h=null,Fh={mark:Y1,measure:Y1};try{typeof window<"u"&&(If=window),typeof document<"u"&&(Jh=document),typeof MutationObserver<"u"&&($h=MutationObserver),typeof performance<"u"&&(Fh=performance)}catch{}const{userAgent:L1=""}=If.navigator||{},Ka=If,Rt=Jh,B1=$h,eu=Fh;Ka.document;const ba=!!Rt.documentElement&&!!Rt.head&&typeof Rt.addEventListener=="function"&&typeof Rt.createElement=="function",Wh=~L1.indexOf("MSIE")||~L1.indexOf("Trident/");var G2=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,V2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ph={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Q2={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ih=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ue="classic",Ou="duotone",Z2="sharp",k2="sharp-duotone",ty=[ue,Ou,Z2,k2],K2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},J2={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},$2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),F2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},W2=["fak","fa-kit","fakd","fa-kit-duotone"],X1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},P2=["kit"],I2={kit:{"fa-kit":"fak"}},t3=["fak","fakd"],e3={kit:{fak:"fa-kit"}},G1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},au={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},a3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],n3=["fak","fa-kit","fakd","fa-kit-duotone"],l3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},i3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},r3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},_f={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},u3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],zf=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...a3,...u3],c3=["solid","regular","light","thin","duotone","brands"],ey=[1,2,3,4,5,6,7,8,9,10],s3=ey.concat([11,12,13,14,15,16,17,18,19,20]),f3=[...Object.keys(r3),...c3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",au.GROUP,au.SWAP_OPACITY,au.PRIMARY,au.SECONDARY].concat(ey.map(l=>"".concat(l,"x"))).concat(s3.map(l=>"w-".concat(l))),o3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ga="___FONT_AWESOME___",Mf=16,ay="fa",ny="svg-inline--fa",bn="data-fa-i2svg",Nf="data-fa-pseudo-element",d3="data-fa-pseudo-element-pending",to="data-prefix",eo="data-icon",V1="fontawesome-i2svg",m3="async",h3=["HTML","HEAD","STYLE","SCRIPT"],ly=(()=>{try{return!0}catch{return!1}})();function Ci(l){return new Proxy(l,{get(r,c){return c in r?r[c]:r[ue]}})}const iy=Y({},Ph);iy[ue]=Y(Y(Y(Y({},{"fa-duotone":"duotone"}),Ph[ue]),X1.kit),X1["kit-duotone"]);const y3=Ci(iy),jf=Y({},F2);jf[ue]=Y(Y(Y(Y({},{duotone:"fad"}),jf[ue]),G1.kit),G1["kit-duotone"]);const Q1=Ci(jf),Rf=Y({},_f);Rf[ue]=Y(Y({},Rf[ue]),e3.kit);const ao=Ci(Rf),Df=Y({},i3);Df[ue]=Y(Y({},Df[ue]),I2.kit);Ci(Df);const v3=G2,ry="fa-layers-text",g3=V2,p3=Y({},K2);Ci(p3);const b3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],cf=Q2,S3=[...P2,...f3],Oi=Ka.FontAwesomeConfig||{};function x3(l){var r=Rt.querySelector("script["+l+"]");if(r)return r.getAttribute(l)}function A3(l){return l===""?!0:l==="false"?!1:l==="true"?!0:l}Rt&&typeof Rt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(r=>{let[c,s]=r;const f=A3(x3(c));f!=null&&(Oi[s]=f)});const uy={styleDefault:"solid",familyDefault:ue,cssPrefix:ay,replacementClass:ny,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Oi.familyPrefix&&(Oi.cssPrefix=Oi.familyPrefix);const yl=Y(Y({},uy),Oi);yl.autoReplaceSvg||(yl.observeMutations=!1);const $={};Object.keys(uy).forEach(l=>{Object.defineProperty($,l,{enumerable:!0,set:function(r){yl[l]=r,Ei.forEach(c=>c($))},get:function(){return yl[l]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(l){yl.cssPrefix=l,Ei.forEach(r=>r($))},get:function(){return yl.cssPrefix}});Ka.FontAwesomeConfig=$;const Ei=[];function O3(l){return Ei.push(l),()=>{Ei.splice(Ei.indexOf(l),1)}}const ka=Mf,Pe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function E3(l){if(!l||!ba)return;const r=Rt.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=l;const c=Rt.head.childNodes;let s=null;for(let f=c.length-1;f>-1;f--){const d=c[f],h=(d.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(s=d)}return Rt.head.insertBefore(r,s),l}const T3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ri(){let l=12,r="";for(;l-- >0;)r+=T3[Math.random()*62|0];return r}function pl(l){const r=[];for(let c=(l||[]).length>>>0;c--;)r[c]=l[c];return r}function no(l){return l.classList?pl(l.classList):(l.getAttribute("class")||"").split(" ").filter(r=>r)}function cy(l){return"".concat(l).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _3(l){return Object.keys(l||{}).reduce((r,c)=>r+"".concat(c,'="').concat(cy(l[c]),'" '),"").trim()}function Eu(l){return Object.keys(l||{}).reduce((r,c)=>r+"".concat(c,": ").concat(l[c].trim(),";"),"")}function lo(l){return l.size!==Pe.size||l.x!==Pe.x||l.y!==Pe.y||l.rotate!==Pe.rotate||l.flipX||l.flipY}function z3(l){let{transform:r,containerWidth:c,iconWidth:s}=l;const f={transform:"translate(".concat(c/2," 256)")},d="translate(".concat(r.x*32,", ").concat(r.y*32,") "),h="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),b="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(d," ").concat(h," ").concat(b)},y={transform:"translate(".concat(s/2*-1," -256)")};return{outer:f,inner:v,path:y}}function M3(l){let{transform:r,width:c=Mf,height:s=Mf,startCentered:f=!1}=l,d="";return f&&Wh?d+="translate(".concat(r.x/ka-c/2,"em, ").concat(r.y/ka-s/2,"em) "):f?d+="translate(calc(-50% + ".concat(r.x/ka,"em), calc(-50% + ").concat(r.y/ka,"em)) "):d+="translate(".concat(r.x/ka,"em, ").concat(r.y/ka,"em) "),d+="scale(".concat(r.size/ka*(r.flipX?-1:1),", ").concat(r.size/ka*(r.flipY?-1:1),") "),d+="rotate(".concat(r.rotate,"deg) "),d}var N3=`:root, :host {
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
}`;function sy(){const l=ay,r=ny,c=$.cssPrefix,s=$.replacementClass;let f=N3;if(c!==l||s!==r){const d=new RegExp("\\.".concat(l,"\\-"),"g"),h=new RegExp("\\--".concat(l,"\\-"),"g"),b=new RegExp("\\.".concat(r),"g");f=f.replace(d,".".concat(c,"-")).replace(h,"--".concat(c,"-")).replace(b,".".concat(s))}return f}let Z1=!1;function sf(){$.autoAddCss&&!Z1&&(E3(sy()),Z1=!0)}var j3={mixout(){return{dom:{css:sy,insertCss:sf}}},hooks(){return{beforeDOMElementCreation(){sf()},beforeI2svg(){sf()}}}};const pa=Ka||{};pa[ga]||(pa[ga]={});pa[ga].styles||(pa[ga].styles={});pa[ga].hooks||(pa[ga].hooks={});pa[ga].shims||(pa[ga].shims=[]);var Ie=pa[ga];const fy=[],oy=function(){Rt.removeEventListener("DOMContentLoaded",oy),hu=1,fy.map(l=>l())};let hu=!1;ba&&(hu=(Rt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Rt.readyState),hu||Rt.addEventListener("DOMContentLoaded",oy));function R3(l){ba&&(hu?setTimeout(l,0):fy.push(l))}function Ui(l){const{tag:r,attributes:c={},children:s=[]}=l;return typeof l=="string"?cy(l):"<".concat(r," ").concat(_3(c),">").concat(s.map(Ui).join(""),"</").concat(r,">")}function k1(l,r,c){if(l&&l[r]&&l[r][c])return{prefix:r,iconName:c,icon:l[r][c]}}var ff=function(r,c,s,f){var d=Object.keys(r),h=d.length,b=c,v,y,x;for(s===void 0?(v=1,x=r[d[0]]):(v=0,x=s);v<h;v++)y=d[v],x=b(x,r[y],y,r);return x};function D3(l){const r=[];let c=0;const s=l.length;for(;c<s;){const f=l.charCodeAt(c++);if(f>=55296&&f<=56319&&c<s){const d=l.charCodeAt(c++);(d&64512)==56320?r.push(((f&1023)<<10)+(d&1023)+65536):(r.push(f),c--)}else r.push(f)}return r}function wf(l){const r=D3(l);return r.length===1?r[0].toString(16):null}function w3(l,r){const c=l.length;let s=l.charCodeAt(r),f;return s>=55296&&s<=56319&&c>r+1&&(f=l.charCodeAt(r+1),f>=56320&&f<=57343)?(s-55296)*1024+f-56320+65536:s}function K1(l){return Object.keys(l).reduce((r,c)=>{const s=l[c];return!!s.icon?r[s.iconName]=s.icon:r[c]=s,r},{})}function Cf(l,r){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=c,f=K1(r);typeof Ie.hooks.addPack=="function"&&!s?Ie.hooks.addPack(l,K1(r)):Ie.styles[l]=Y(Y({},Ie.styles[l]||{}),f),l==="fas"&&Cf("fa",r)}const{styles:Di,shims:C3}=Ie,dy=Object.keys(ao),U3=dy.reduce((l,r)=>(l[r]=Object.keys(ao[r]),l),{});let io=null,my={},hy={},yy={},vy={},gy={};function H3(l){return~S3.indexOf(l)}function q3(l,r){const c=r.split("-"),s=c[0],f=c.slice(1).join("-");return s===l&&f!==""&&!H3(f)?f:null}const py=()=>{const l=s=>ff(Di,(f,d,h)=>(f[h]=ff(d,s,{}),f),{});my=l((s,f,d)=>(f[3]&&(s[f[3]]=d),f[2]&&f[2].filter(b=>typeof b=="number").forEach(b=>{s[b.toString(16)]=d}),s)),hy=l((s,f,d)=>(s[d]=d,f[2]&&f[2].filter(b=>typeof b=="string").forEach(b=>{s[b]=d}),s)),gy=l((s,f,d)=>{const h=f[2];return s[d]=d,h.forEach(b=>{s[b]=d}),s});const r="far"in Di||$.autoFetchSvg,c=ff(C3,(s,f)=>{const d=f[0];let h=f[1];const b=f[2];return h==="far"&&!r&&(h="fas"),typeof d=="string"&&(s.names[d]={prefix:h,iconName:b}),typeof d=="number"&&(s.unicodes[d.toString(16)]={prefix:h,iconName:b}),s},{names:{},unicodes:{}});yy=c.names,vy=c.unicodes,io=Tu($.styleDefault,{family:$.familyDefault})};O3(l=>{io=Tu(l.styleDefault,{family:$.familyDefault})});py();function ro(l,r){return(my[l]||{})[r]}function Y3(l,r){return(hy[l]||{})[r]}function gn(l,r){return(gy[l]||{})[r]}function by(l){return yy[l]||{prefix:null,iconName:null}}function L3(l){const r=vy[l],c=ro("fas",l);return r||(c?{prefix:"fas",iconName:c}:null)||{prefix:null,iconName:null}}function Ja(){return io}const Sy=()=>({prefix:null,iconName:null,rest:[]});function B3(l){let r=ue;const c=dy.reduce((s,f)=>(s[f]="".concat($.cssPrefix,"-").concat(f),s),{});return ty.forEach(s=>{(l.includes(c[s])||l.some(f=>U3[s].includes(f)))&&(r=s)}),r}function Tu(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:c=ue}=r,s=y3[c][l];if(c===Ou&&!l)return"fad";const f=Q1[c][l]||Q1[c][s],d=l in Ie.styles?l:null;return f||d||null}function X3(l){let r=[],c=null;return l.forEach(s=>{const f=q3($.cssPrefix,s);f?c=f:s&&r.push(s)}),{iconName:c,rest:r}}function J1(l){return l.sort().filter((r,c,s)=>s.indexOf(r)===c)}function _u(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:c=!1}=r;let s=null;const f=zf.concat(n3),d=J1(l.filter(z=>f.includes(z))),h=J1(l.filter(z=>!zf.includes(z))),b=d.filter(z=>(s=z,!Ih.includes(z))),[v=null]=b,y=B3(d),x=Y(Y({},X3(h)),{},{prefix:Tu(v,{family:y})});return Y(Y(Y({},x),Z3({values:l,family:y,styles:Di,config:$,canonical:x,givenPrefix:s})),G3(c,s,x))}function G3(l,r,c){let{prefix:s,iconName:f}=c;if(l||!s||!f)return{prefix:s,iconName:f};const d=r==="fa"?by(f):{},h=gn(s,f);return f=d.iconName||h||f,s=d.prefix||s,s==="far"&&!Di.far&&Di.fas&&!$.autoFetchSvg&&(s="fas"),{prefix:s,iconName:f}}const V3=ty.filter(l=>l!==ue||l!==Ou),Q3=Object.keys(_f).filter(l=>l!==ue).map(l=>Object.keys(_f[l])).flat();function Z3(l){const{values:r,family:c,canonical:s,givenPrefix:f="",styles:d={},config:h={}}=l,b=c===Ou,v=r.includes("fa-duotone")||r.includes("fad"),y=h.familyDefault==="duotone",x=s.prefix==="fad"||s.prefix==="fa-duotone";if(!b&&(v||y||x)&&(s.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(s.prefix="fab"),!s.prefix&&V3.includes(c)&&(Object.keys(d).find(R=>Q3.includes(R))||h.autoFetchSvg)){const R=$2.get(c).defaultShortPrefixId;s.prefix=R,s.iconName=gn(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||f==="fa")&&(s.prefix=Ja()||"fas"),s}class k3{constructor(){this.definitions={}}add(){for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];const f=c.reduce(this._pullDefinitions,{});Object.keys(f).forEach(d=>{this.definitions[d]=Y(Y({},this.definitions[d]||{}),f[d]),Cf(d,f[d]);const h=ao[ue][d];h&&Cf(h,f[d]),py()})}reset(){this.definitions={}}_pullDefinitions(r,c){const s=c.prefix&&c.iconName&&c.icon?{0:c}:c;return Object.keys(s).map(f=>{const{prefix:d,iconName:h,icon:b}=s[f],v=b[2];r[d]||(r[d]={}),v.length>0&&v.forEach(y=>{typeof y=="string"&&(r[d][y]=b)}),r[d][h]=b}),r}}let $1=[],sl={};const ml={},K3=Object.keys(ml);function J3(l,r){let{mixoutsTo:c}=r;return $1=l,sl={},Object.keys(ml).forEach(s=>{K3.indexOf(s)===-1&&delete ml[s]}),$1.forEach(s=>{const f=s.mixout?s.mixout():{};if(Object.keys(f).forEach(d=>{typeof f[d]=="function"&&(c[d]=f[d]),typeof f[d]=="object"&&Object.keys(f[d]).forEach(h=>{c[d]||(c[d]={}),c[d][h]=f[d][h]})}),s.hooks){const d=s.hooks();Object.keys(d).forEach(h=>{sl[h]||(sl[h]=[]),sl[h].push(d[h])})}s.provides&&s.provides(ml)}),c}function Uf(l,r){for(var c=arguments.length,s=new Array(c>2?c-2:0),f=2;f<c;f++)s[f-2]=arguments[f];return(sl[l]||[]).forEach(h=>{r=h.apply(null,[r,...s])}),r}function Sn(l){for(var r=arguments.length,c=new Array(r>1?r-1:0),s=1;s<r;s++)c[s-1]=arguments[s];(sl[l]||[]).forEach(d=>{d.apply(null,c)})}function $a(){const l=arguments[0],r=Array.prototype.slice.call(arguments,1);return ml[l]?ml[l].apply(null,r):void 0}function Hf(l){l.prefix==="fa"&&(l.prefix="fas");let{iconName:r}=l;const c=l.prefix||Ja();if(r)return r=gn(c,r)||r,k1(xy.definitions,c,r)||k1(Ie.styles,c,r)}const xy=new k3,$3=()=>{$.autoReplaceSvg=!1,$.observeMutations=!1,Sn("noAuto")},F3={i2svg:function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ba?(Sn("beforeI2svg",l),$a("pseudoElements2svg",l),$a("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:r}=l;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,R3(()=>{P3({autoReplaceSvgRoot:r}),Sn("watch",l)})}},W3={icon:l=>{if(l===null)return null;if(typeof l=="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:gn(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){const r=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],c=Tu(l[0]);return{prefix:c,iconName:gn(c,r)||r}}if(typeof l=="string"&&(l.indexOf("".concat($.cssPrefix,"-"))>-1||l.match(v3))){const r=_u(l.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ja(),iconName:gn(r.prefix,r.iconName)||r.iconName}}if(typeof l=="string"){const r=Ja();return{prefix:r,iconName:gn(r,l)||l}}}},Ne={noAuto:$3,config:$,dom:F3,parse:W3,library:xy,findIconDefinition:Hf,toHtml:Ui},P3=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:r=Rt}=l;(Object.keys(Ie.styles).length>0||$.autoFetchSvg)&&ba&&$.autoReplaceSvg&&Ne.dom.i2svg({node:r})};function zu(l,r){return Object.defineProperty(l,"abstract",{get:r}),Object.defineProperty(l,"html",{get:function(){return l.abstract.map(c=>Ui(c))}}),Object.defineProperty(l,"node",{get:function(){if(!ba)return;const c=Rt.createElement("div");return c.innerHTML=l.html,c.children}}),l}function I3(l){let{children:r,main:c,mask:s,attributes:f,styles:d,transform:h}=l;if(lo(h)&&c.found&&!s.found){const{width:b,height:v}=c,y={x:b/v/2,y:.5};f.style=Eu(Y(Y({},d),{},{"transform-origin":"".concat(y.x+h.x/16,"em ").concat(y.y+h.y/16,"em")}))}return[{tag:"svg",attributes:f,children:r}]}function t4(l){let{prefix:r,iconName:c,children:s,attributes:f,symbol:d}=l;const h=d===!0?"".concat(r,"-").concat($.cssPrefix,"-").concat(c):d;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Y(Y({},f),{},{id:h}),children:s}]}]}function uo(l){const{icons:{main:r,mask:c},prefix:s,iconName:f,transform:d,symbol:h,title:b,maskId:v,titleId:y,extra:x,watchable:z=!1}=l,{width:R,height:G}=c.found?c:r,B=t3.includes(s),H=[$.replacementClass,f?"".concat($.cssPrefix,"-").concat(f):""].filter(j=>x.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(x.classes).join(" ");let N={children:[],attributes:Y(Y({},x.attributes),{},{"data-prefix":s,"data-icon":f,class:H,role:x.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(G)})};const k=B&&!~x.classes.indexOf("fa-fw")?{width:"".concat(R/G*16*.0625,"em")}:{};z&&(N.attributes[bn]=""),b&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(y||Ri())},children:[b]}),delete N.attributes.title);const L=Y(Y({},N),{},{prefix:s,iconName:f,main:r,mask:c,maskId:v,transform:d,symbol:h,styles:Y(Y({},k),x.styles)}),{children:V,attributes:et}=c.found&&r.found?$a("generateAbstractMask",L)||{children:[],attributes:{}}:$a("generateAbstractIcon",L)||{children:[],attributes:{}};return L.children=V,L.attributes=et,h?t4(L):I3(L)}function F1(l){const{content:r,width:c,height:s,transform:f,title:d,extra:h,watchable:b=!1}=l,v=Y(Y(Y({},h.attributes),d?{title:d}:{}),{},{class:h.classes.join(" ")});b&&(v[bn]="");const y=Y({},h.styles);lo(f)&&(y.transform=M3({transform:f,startCentered:!0,width:c,height:s}),y["-webkit-transform"]=y.transform);const x=Eu(y);x.length>0&&(v.style=x);const z=[];return z.push({tag:"span",attributes:v,children:[r]}),d&&z.push({tag:"span",attributes:{class:"sr-only"},children:[d]}),z}function e4(l){const{content:r,title:c,extra:s}=l,f=Y(Y(Y({},s.attributes),c?{title:c}:{}),{},{class:s.classes.join(" ")}),d=Eu(s.styles);d.length>0&&(f.style=d);const h=[];return h.push({tag:"span",attributes:f,children:[r]}),c&&h.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),h}const{styles:of}=Ie;function qf(l){const r=l[0],c=l[1],[s]=l.slice(4);let f=null;return Array.isArray(s)?f={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(cf.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(cf.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(cf.PRIMARY),fill:"currentColor",d:s[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:r,height:c,icon:f}}const a4={found:!1,width:512,height:512};function n4(l,r){!ly&&!$.showMissingIcons&&l&&console.error('Icon with name "'.concat(l,'" and prefix "').concat(r,'" is missing.'))}function Yf(l,r){let c=r;return r==="fa"&&$.styleDefault!==null&&(r=Ja()),new Promise((s,f)=>{if(c==="fa"){const d=by(l)||{};l=d.iconName||l,r=d.prefix||r}if(l&&r&&of[r]&&of[r][l]){const d=of[r][l];return s(qf(d))}n4(l,r),s(Y(Y({},a4),{},{icon:$.showMissingIcons&&l?$a("missingIconAbstract")||{}:{}}))})}const W1=()=>{},Lf=$.measurePerformance&&eu&&eu.mark&&eu.measure?eu:{mark:W1,measure:W1},Ai='FA "6.7.2"',l4=l=>(Lf.mark("".concat(Ai," ").concat(l," begins")),()=>Ay(l)),Ay=l=>{Lf.mark("".concat(Ai," ").concat(l," ends")),Lf.measure("".concat(Ai," ").concat(l),"".concat(Ai," ").concat(l," begins"),"".concat(Ai," ").concat(l," ends"))};var co={begin:l4,end:Ay};const cu=()=>{};function P1(l){return typeof(l.getAttribute?l.getAttribute(bn):null)=="string"}function i4(l){const r=l.getAttribute?l.getAttribute(to):null,c=l.getAttribute?l.getAttribute(eo):null;return r&&c}function r4(l){return l&&l.classList&&l.classList.contains&&l.classList.contains($.replacementClass)}function u4(){return $.autoReplaceSvg===!0?su.replace:su[$.autoReplaceSvg]||su.replace}function c4(l){return Rt.createElementNS("http://www.w3.org/2000/svg",l)}function s4(l){return Rt.createElement(l)}function Oy(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:c=l.tag==="svg"?c4:s4}=r;if(typeof l=="string")return Rt.createTextNode(l);const s=c(l.tag);return Object.keys(l.attributes||[]).forEach(function(d){s.setAttribute(d,l.attributes[d])}),(l.children||[]).forEach(function(d){s.appendChild(Oy(d,{ceFn:c}))}),s}function f4(l){let r=" ".concat(l.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}const su={replace:function(l){const r=l[0];if(r.parentNode)if(l[1].forEach(c=>{r.parentNode.insertBefore(Oy(c),r)}),r.getAttribute(bn)===null&&$.keepOriginalSource){let c=Rt.createComment(f4(r));r.parentNode.replaceChild(c,r)}else r.remove()},nest:function(l){const r=l[0],c=l[1];if(~no(r).indexOf($.replacementClass))return su.replace(l);const s=new RegExp("".concat($.cssPrefix,"-.*"));if(delete c[0].attributes.id,c[0].attributes.class){const d=c[0].attributes.class.split(" ").reduce((h,b)=>(b===$.replacementClass||b.match(s)?h.toSvg.push(b):h.toNode.push(b),h),{toNode:[],toSvg:[]});c[0].attributes.class=d.toSvg.join(" "),d.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",d.toNode.join(" "))}const f=c.map(d=>Ui(d)).join(`
`);r.setAttribute(bn,""),r.innerHTML=f}};function I1(l){l()}function Ey(l,r){const c=typeof r=="function"?r:cu;if(l.length===0)c();else{let s=I1;$.mutateApproach===m3&&(s=Ka.requestAnimationFrame||I1),s(()=>{const f=u4(),d=co.begin("mutate");l.map(f),d(),c()})}}let so=!1;function Ty(){so=!0}function Bf(){so=!1}let yu=null;function th(l){if(!B1||!$.observeMutations)return;const{treeCallback:r=cu,nodeCallback:c=cu,pseudoElementsCallback:s=cu,observeMutationsRoot:f=Rt}=l;yu=new B1(d=>{if(so)return;const h=Ja();pl(d).forEach(b=>{if(b.type==="childList"&&b.addedNodes.length>0&&!P1(b.addedNodes[0])&&($.searchPseudoElements&&s(b.target),r(b.target)),b.type==="attributes"&&b.target.parentNode&&$.searchPseudoElements&&s(b.target.parentNode),b.type==="attributes"&&P1(b.target)&&~b3.indexOf(b.attributeName))if(b.attributeName==="class"&&i4(b.target)){const{prefix:v,iconName:y}=_u(no(b.target));b.target.setAttribute(to,v||h),y&&b.target.setAttribute(eo,y)}else r4(b.target)&&c(b.target)})}),ba&&yu.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function o4(){yu&&yu.disconnect()}function d4(l){const r=l.getAttribute("style");let c=[];return r&&(c=r.split(";").reduce((s,f)=>{const d=f.split(":"),h=d[0],b=d.slice(1);return h&&b.length>0&&(s[h]=b.join(":").trim()),s},{})),c}function m4(l){const r=l.getAttribute("data-prefix"),c=l.getAttribute("data-icon"),s=l.innerText!==void 0?l.innerText.trim():"";let f=_u(no(l));return f.prefix||(f.prefix=Ja()),r&&c&&(f.prefix=r,f.iconName=c),f.iconName&&f.prefix||(f.prefix&&s.length>0&&(f.iconName=Y3(f.prefix,l.innerText)||ro(f.prefix,wf(l.innerText))),!f.iconName&&$.autoFetchSvg&&l.firstChild&&l.firstChild.nodeType===Node.TEXT_NODE&&(f.iconName=l.firstChild.data)),f}function h4(l){const r=pl(l.attributes).reduce((f,d)=>(f.name!=="class"&&f.name!=="style"&&(f[d.name]=d.value),f),{}),c=l.getAttribute("title"),s=l.getAttribute("data-fa-title-id");return $.autoA11y&&(c?r["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(s||Ri()):(r["aria-hidden"]="true",r.focusable="false")),r}function y4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function eh(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:c,prefix:s,rest:f}=m4(l),d=h4(l),h=Uf("parseNodeAttributes",{},l);let b=r.styleParser?d4(l):[];return Y({iconName:c,title:l.getAttribute("title"),titleId:l.getAttribute("data-fa-title-id"),prefix:s,transform:Pe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:f,styles:b,attributes:d}},h)}const{styles:v4}=Ie;function _y(l){const r=$.autoReplaceSvg==="nest"?eh(l,{styleParser:!1}):eh(l);return~r.extra.classes.indexOf(ry)?$a("generateLayersText",l,r):$a("generateSvgReplacementMutation",l,r)}function g4(){return[...W2,...zf]}function ah(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ba)return Promise.resolve();const c=Rt.documentElement.classList,s=x=>c.add("".concat(V1,"-").concat(x)),f=x=>c.remove("".concat(V1,"-").concat(x)),d=$.autoFetchSvg?g4():Ih.concat(Object.keys(v4));d.includes("fa")||d.push("fa");const h=[".".concat(ry,":not([").concat(bn,"])")].concat(d.map(x=>".".concat(x,":not([").concat(bn,"])"))).join(", ");if(h.length===0)return Promise.resolve();let b=[];try{b=pl(l.querySelectorAll(h))}catch{}if(b.length>0)s("pending"),f("complete");else return Promise.resolve();const v=co.begin("onTree"),y=b.reduce((x,z)=>{try{const R=_y(z);R&&x.push(R)}catch(R){ly||R.name==="MissingIcon"&&console.error(R)}return x},[]);return new Promise((x,z)=>{Promise.all(y).then(R=>{Ey(R,()=>{s("active"),s("complete"),f("pending"),typeof r=="function"&&r(),v(),x()})}).catch(R=>{v(),z(R)})})}function p4(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_y(l).then(c=>{c&&Ey([c],r)})}function b4(l){return function(r){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(r||{}).icon?r:Hf(r||{});let{mask:f}=c;return f&&(f=(f||{}).icon?f:Hf(f||{})),l(s,Y(Y({},c),{},{mask:f}))}}const S4=function(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:c=Pe,symbol:s=!1,mask:f=null,maskId:d=null,title:h=null,titleId:b=null,classes:v=[],attributes:y={},styles:x={}}=r;if(!l)return;const{prefix:z,iconName:R,icon:G}=l;return zu(Y({type:"icon"},l),()=>(Sn("beforeDOMElementCreation",{iconDefinition:l,params:r}),$.autoA11y&&(h?y["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(b||Ri()):(y["aria-hidden"]="true",y.focusable="false")),uo({icons:{main:qf(G),mask:f?qf(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:R,transform:Y(Y({},Pe),c),symbol:s,title:h,maskId:d,titleId:b,extra:{attributes:y,styles:x,classes:v}})))};var x4={mixout(){return{icon:b4(S4)}},hooks(){return{mutationObserverCallbacks(l){return l.treeCallback=ah,l.nodeCallback=p4,l}}},provides(l){l.i2svg=function(r){const{node:c=Rt,callback:s=()=>{}}=r;return ah(c,s)},l.generateSvgReplacementMutation=function(r,c){const{iconName:s,title:f,titleId:d,prefix:h,transform:b,symbol:v,mask:y,maskId:x,extra:z}=c;return new Promise((R,G)=>{Promise.all([Yf(s,h),y.iconName?Yf(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(B=>{let[H,N]=B;R([r,uo({icons:{main:H,mask:N},prefix:h,iconName:s,transform:b,symbol:v,maskId:x,title:f,titleId:d,extra:z,watchable:!0})])}).catch(G)})},l.generateAbstractIcon=function(r){let{children:c,attributes:s,main:f,transform:d,styles:h}=r;const b=Eu(h);b.length>0&&(s.style=b);let v;return lo(d)&&(v=$a("generateAbstractTransformGrouping",{main:f,transform:d,containerWidth:f.width,iconWidth:f.width})),c.push(v||f.icon),{children:c,attributes:s}}}},A4={mixout(){return{layer(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:c=[]}=r;return zu({type:"layer"},()=>{Sn("beforeDOMElementCreation",{assembler:l,params:r});let s=[];return l(f=>{Array.isArray(f)?f.map(d=>{s=s.concat(d.abstract)}):s=s.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers"),...c].join(" ")},children:s}]})}}}},O4={mixout(){return{counter(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:c=null,classes:s=[],attributes:f={},styles:d={}}=r;return zu({type:"counter",content:l},()=>(Sn("beforeDOMElementCreation",{content:l,params:r}),e4({content:l.toString(),title:c,extra:{attributes:f,styles:d,classes:["".concat($.cssPrefix,"-layers-counter"),...s]}})))}}}},E4={mixout(){return{text(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:c=Pe,title:s=null,classes:f=[],attributes:d={},styles:h={}}=r;return zu({type:"text",content:l},()=>(Sn("beforeDOMElementCreation",{content:l,params:r}),F1({content:l,transform:Y(Y({},Pe),c),title:s,extra:{attributes:d,styles:h,classes:["".concat($.cssPrefix,"-layers-text"),...f]}})))}}},provides(l){l.generateLayersText=function(r,c){const{title:s,transform:f,extra:d}=c;let h=null,b=null;if(Wh){const v=parseInt(getComputedStyle(r).fontSize,10),y=r.getBoundingClientRect();h=y.width/v,b=y.height/v}return $.autoA11y&&!s&&(d.attributes["aria-hidden"]="true"),Promise.resolve([r,F1({content:r.innerHTML,width:h,height:b,transform:f,title:s,extra:d,watchable:!0})])}}};const T4=new RegExp('"',"ug"),nh=[1105920,1112319],lh=Y(Y(Y(Y({},{FontAwesome:{normal:"fas",400:"fas"}}),J2),o3),l3),Xf=Object.keys(lh).reduce((l,r)=>(l[r.toLowerCase()]=lh[r],l),{}),_4=Object.keys(Xf).reduce((l,r)=>{const c=Xf[r];return l[r]=c[900]||[...Object.entries(c)][0][1],l},{});function z4(l){const r=l.replace(T4,""),c=w3(r,0),s=c>=nh[0]&&c<=nh[1],f=r.length===2?r[0]===r[1]:!1;return{value:wf(f?r[0]:r),isSecondary:s||f}}function M4(l,r){const c=l.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(r),f=isNaN(s)?"normal":s;return(Xf[c]||{})[f]||_4[c]}function ih(l,r){const c="".concat(d3).concat(r.replace(":","-"));return new Promise((s,f)=>{if(l.getAttribute(c)!==null)return s();const h=pl(l.children).filter(R=>R.getAttribute(Nf)===r)[0],b=Ka.getComputedStyle(l,r),v=b.getPropertyValue("font-family"),y=v.match(g3),x=b.getPropertyValue("font-weight"),z=b.getPropertyValue("content");if(h&&!y)return l.removeChild(h),s();if(y&&z!=="none"&&z!==""){const R=b.getPropertyValue("content");let G=M4(v,x);const{value:B,isSecondary:H}=z4(R),N=y[0].startsWith("FontAwesome");let k=ro(G,B),L=k;if(N){const V=L3(B);V.iconName&&V.prefix&&(k=V.iconName,G=V.prefix)}if(k&&!H&&(!h||h.getAttribute(to)!==G||h.getAttribute(eo)!==L)){l.setAttribute(c,L),h&&l.removeChild(h);const V=y4(),{extra:et}=V;et.attributes[Nf]=r,Yf(k,G).then(j=>{const lt=uo(Y(Y({},V),{},{icons:{main:j,mask:Sy()},prefix:G,iconName:L,extra:et,watchable:!0})),W=Rt.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?l.insertBefore(W,l.firstChild):l.appendChild(W),W.outerHTML=lt.map(ht=>Ui(ht)).join(`
`),l.removeAttribute(c),s()}).catch(f)}else s()}else s()})}function N4(l){return Promise.all([ih(l,"::before"),ih(l,"::after")])}function j4(l){return l.parentNode!==document.head&&!~h3.indexOf(l.tagName.toUpperCase())&&!l.getAttribute(Nf)&&(!l.parentNode||l.parentNode.tagName!=="svg")}function rh(l){if(ba)return new Promise((r,c)=>{const s=pl(l.querySelectorAll("*")).filter(j4).map(N4),f=co.begin("searchPseudoElements");Ty(),Promise.all(s).then(()=>{f(),Bf(),r()}).catch(()=>{f(),Bf(),c()})})}var R4={hooks(){return{mutationObserverCallbacks(l){return l.pseudoElementsCallback=rh,l}}},provides(l){l.pseudoElements2svg=function(r){const{node:c=Rt}=r;$.searchPseudoElements&&rh(c)}}};let uh=!1;var D4={mixout(){return{dom:{unwatch(){Ty(),uh=!0}}}},hooks(){return{bootstrap(){th(Uf("mutationObserverCallbacks",{}))},noAuto(){o4()},watch(l){const{observeMutationsRoot:r}=l;uh?Bf():th(Uf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}};const ch=l=>{let r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce((c,s)=>{const f=s.toLowerCase().split("-"),d=f[0];let h=f.slice(1).join("-");if(d&&h==="h")return c.flipX=!0,c;if(d&&h==="v")return c.flipY=!0,c;if(h=parseFloat(h),isNaN(h))return c;switch(d){case"grow":c.size=c.size+h;break;case"shrink":c.size=c.size-h;break;case"left":c.x=c.x-h;break;case"right":c.x=c.x+h;break;case"up":c.y=c.y-h;break;case"down":c.y=c.y+h;break;case"rotate":c.rotate=c.rotate+h;break}return c},r)};var w4={mixout(){return{parse:{transform:l=>ch(l)}}},hooks(){return{parseNodeAttributes(l,r){const c=r.getAttribute("data-fa-transform");return c&&(l.transform=ch(c)),l}}},provides(l){l.generateAbstractTransformGrouping=function(r){let{main:c,transform:s,containerWidth:f,iconWidth:d}=r;const h={transform:"translate(".concat(f/2," 256)")},b="translate(".concat(s.x*32,", ").concat(s.y*32,") "),v="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),y="rotate(".concat(s.rotate," 0 0)"),x={transform:"".concat(b," ").concat(v," ").concat(y)},z={transform:"translate(".concat(d/2*-1," -256)")},R={outer:h,inner:x,path:z};return{tag:"g",attributes:Y({},R.outer),children:[{tag:"g",attributes:Y({},R.inner),children:[{tag:c.icon.tag,children:c.icon.children,attributes:Y(Y({},c.icon.attributes),R.path)}]}]}}}};const df={x:0,y:0,width:"100%",height:"100%"};function sh(l){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return l.attributes&&(l.attributes.fill||r)&&(l.attributes.fill="black"),l}function C4(l){return l.tag==="g"?l.children:[l]}var U4={hooks(){return{parseNodeAttributes(l,r){const c=r.getAttribute("data-fa-mask"),s=c?_u(c.split(" ").map(f=>f.trim())):Sy();return s.prefix||(s.prefix=Ja()),l.mask=s,l.maskId=r.getAttribute("data-fa-mask-id"),l}}},provides(l){l.generateAbstractMask=function(r){let{children:c,attributes:s,main:f,mask:d,maskId:h,transform:b}=r;const{width:v,icon:y}=f,{width:x,icon:z}=d,R=z3({transform:b,containerWidth:x,iconWidth:v}),G={tag:"rect",attributes:Y(Y({},df),{},{fill:"white"})},B=y.children?{children:y.children.map(sh)}:{},H={tag:"g",attributes:Y({},R.inner),children:[sh(Y({tag:y.tag,attributes:Y(Y({},y.attributes),R.path)},B))]},N={tag:"g",attributes:Y({},R.outer),children:[H]},k="mask-".concat(h||Ri()),L="clip-".concat(h||Ri()),V={tag:"mask",attributes:Y(Y({},df),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[G,N]},et={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:C4(z)},V]};return c.push(et,{tag:"rect",attributes:Y({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(k,")")},df)}),{children:c,attributes:s}}}},H4={provides(l){let r=!1;Ka.matchMedia&&(r=Ka.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){const c=[],s={fill:"currentColor"},f={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};c.push({tag:"path",attributes:Y(Y({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const d=Y(Y({},f),{},{attributeName:"opacity"}),h={tag:"circle",attributes:Y(Y({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||h.children.push({tag:"animate",attributes:Y(Y({},f),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Y(Y({},d),{},{values:"1;0;1;1;0;1;"})}),c.push(h),c.push({tag:"path",attributes:Y(Y({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:Y(Y({},d),{},{values:"1;0;0;0;0;1;"})}]}),r||c.push({tag:"path",attributes:Y(Y({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Y(Y({},d),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:c}}}},q4={hooks(){return{parseNodeAttributes(l,r){const c=r.getAttribute("data-fa-symbol"),s=c===null?!1:c===""?!0:c;return l.symbol=s,l}}}},Y4=[j3,x4,A4,O4,E4,R4,D4,w4,U4,H4,q4];J3(Y4,{mixoutsTo:Ne});Ne.noAuto;Ne.config;Ne.library;Ne.dom;const Gf=Ne.parse;Ne.findIconDefinition;Ne.toHtml;const L4=Ne.icon;Ne.layer;Ne.text;Ne.counter;var mf={exports:{}},hf,fh;function B4(){if(fh)return hf;fh=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return hf=l,hf}var yf,oh;function X4(){if(oh)return yf;oh=1;var l=B4();function r(){}function c(){}return c.resetWarningCache=r,yf=function(){function s(h,b,v,y,x,z){if(z!==l){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}s.isRequired=s;function f(){return s}var d={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:f,element:s,elementType:s,instanceOf:f,node:s,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:c,resetWarningCache:r};return d.PropTypes=d,d},yf}var dh;function G4(){return dh||(dh=1,mf.exports=X4()()),mf.exports}var V4=G4();const ot=vh(V4);function mh(l,r){var c=Object.keys(l);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(l);r&&(s=s.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),c.push.apply(c,s)}return c}function We(l){for(var r=1;r<arguments.length;r++){var c=arguments[r]!=null?arguments[r]:{};r%2?mh(Object(c),!0).forEach(function(s){fl(l,s,c[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(c)):mh(Object(c)).forEach(function(s){Object.defineProperty(l,s,Object.getOwnPropertyDescriptor(c,s))})}return l}function vu(l){"@babel/helpers - typeof";return vu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},vu(l)}function fl(l,r,c){return r in l?Object.defineProperty(l,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[r]=c,l}function Q4(l,r){if(l==null)return{};var c={},s=Object.keys(l),f,d;for(d=0;d<s.length;d++)f=s[d],!(r.indexOf(f)>=0)&&(c[f]=l[f]);return c}function Z4(l,r){if(l==null)return{};var c=Q4(l,r),s,f;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(f=0;f<d.length;f++)s=d[f],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(l,s)&&(c[s]=l[s])}return c}function Vf(l){return k4(l)||K4(l)||J4(l)||$4()}function k4(l){if(Array.isArray(l))return Qf(l)}function K4(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function J4(l,r){if(l){if(typeof l=="string")return Qf(l,r);var c=Object.prototype.toString.call(l).slice(8,-1);if(c==="Object"&&l.constructor&&(c=l.constructor.name),c==="Map"||c==="Set")return Array.from(l);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return Qf(l,r)}}function Qf(l,r){(r==null||r>l.length)&&(r=l.length);for(var c=0,s=new Array(r);c<r;c++)s[c]=l[c];return s}function $4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F4(l){var r,c=l.beat,s=l.fade,f=l.beatFade,d=l.bounce,h=l.shake,b=l.flash,v=l.spin,y=l.spinPulse,x=l.spinReverse,z=l.pulse,R=l.fixedWidth,G=l.inverse,B=l.border,H=l.listItem,N=l.flip,k=l.size,L=l.rotation,V=l.pull,et=(r={"fa-beat":c,"fa-fade":s,"fa-beat-fade":f,"fa-bounce":d,"fa-shake":h,"fa-flash":b,"fa-spin":v,"fa-spin-reverse":x,"fa-spin-pulse":y,"fa-pulse":z,"fa-fw":R,"fa-inverse":G,"fa-border":B,"fa-li":H,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},fl(r,"fa-".concat(k),typeof k<"u"&&k!==null),fl(r,"fa-rotate-".concat(L),typeof L<"u"&&L!==null&&L!==0),fl(r,"fa-pull-".concat(V),typeof V<"u"&&V!==null),fl(r,"fa-swap-opacity",l.swapOpacity),r);return Object.keys(et).map(function(j){return et[j]?j:null}).filter(function(j){return j})}function W4(l){return l=l-0,l===l}function zy(l){return W4(l)?l:(l=l.replace(/[\-_\s]+(.)?/g,function(r,c){return c?c.toUpperCase():""}),l.substr(0,1).toLowerCase()+l.substr(1))}var P4=["style"];function I4(l){return l.charAt(0).toUpperCase()+l.slice(1)}function t5(l){return l.split(";").map(function(r){return r.trim()}).filter(function(r){return r}).reduce(function(r,c){var s=c.indexOf(":"),f=zy(c.slice(0,s)),d=c.slice(s+1).trim();return f.startsWith("webkit")?r[I4(f)]=d:r[f]=d,r},{})}function My(l,r){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof r=="string")return r;var s=(r.children||[]).map(function(v){return My(l,v)}),f=Object.keys(r.attributes||{}).reduce(function(v,y){var x=r.attributes[y];switch(y){case"class":v.attrs.className=x,delete r.attributes.class;break;case"style":v.attrs.style=t5(x);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?v.attrs[y.toLowerCase()]=x:v.attrs[zy(y)]=x}return v},{attrs:{}}),d=c.style,h=d===void 0?{}:d,b=Z4(c,P4);return f.attrs.style=We(We({},f.attrs.style),h),l.apply(void 0,[r.tag,We(We({},f.attrs),b)].concat(Vf(s)))}var Ny=!1;try{Ny=!0}catch{}function e5(){if(!Ny&&console&&typeof console.error=="function"){var l;(l=console).error.apply(l,arguments)}}function hh(l){if(l&&vu(l)==="object"&&l.prefix&&l.iconName&&l.icon)return l;if(Gf.icon)return Gf.icon(l);if(l===null)return null;if(l&&vu(l)==="object"&&l.prefix&&l.iconName)return l;if(Array.isArray(l)&&l.length===2)return{prefix:l[0],iconName:l[1]};if(typeof l=="string")return{prefix:"fas",iconName:l}}function vf(l,r){return Array.isArray(r)&&r.length>0||!Array.isArray(r)&&r?fl({},l,r):{}}var yh={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},fo=ta.forwardRef(function(l,r){var c=We(We({},yh),l),s=c.icon,f=c.mask,d=c.symbol,h=c.className,b=c.title,v=c.titleId,y=c.maskId,x=hh(s),z=vf("classes",[].concat(Vf(F4(c)),Vf((h||"").split(" ")))),R=vf("transform",typeof c.transform=="string"?Gf.transform(c.transform):c.transform),G=vf("mask",hh(f)),B=L4(x,We(We(We(We({},z),R),G),{},{symbol:d,title:b,titleId:v,maskId:y}));if(!B)return e5("Could not find icon",x),null;var H=B.abstract,N={ref:r};return Object.keys(c).forEach(function(k){yh.hasOwnProperty(k)||(N[k]=c[k])}),a5(H[0],N)});fo.displayName="FontAwesomeIcon";fo.propTypes={beat:ot.bool,border:ot.bool,beatFade:ot.bool,bounce:ot.bool,className:ot.string,fade:ot.bool,flash:ot.bool,mask:ot.oneOfType([ot.object,ot.array,ot.string]),maskId:ot.string,fixedWidth:ot.bool,inverse:ot.bool,flip:ot.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ot.oneOfType([ot.object,ot.array,ot.string]),listItem:ot.bool,pull:ot.oneOf(["right","left"]),pulse:ot.bool,rotation:ot.oneOf([0,90,180,270]),shake:ot.bool,size:ot.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ot.bool,spinPulse:ot.bool,spinReverse:ot.bool,symbol:ot.oneOfType([ot.bool,ot.string]),title:ot.string,titleId:ot.string,transform:ot.oneOfType([ot.string,ot.object]),swapOpacity:ot.bool};var a5=My.bind(null,ta.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const n5={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};function l5(l){return Le({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.084 2.914c-1.178-1.179-3.234-1.179-4.412 0l-8.379 8.379a.999.999 0 0 0 0 1.414l3 3a.997.997 0 0 0 1.414 0l8.379-8.379a3.123 3.123 0 0 0-.002-4.414zm-1.412 3L12 13.586 10.414 12l7.672-7.672a1.146 1.146 0 0 1 1.586.002 1.123 1.123 0 0 1 0 1.584zM8 15c-1.265-.634-3.5 0-3.5 2 0 1.197.5 2-1.5 3 0 0 3.25 2.25 5.5 0 1.274-1.274 1.494-4-.5-5z"},child:[]}]})(l)}const i5=()=>{const[l,r]=mt.useState(!1),c=()=>{r(!l)},s=()=>r(!l);return p.jsx("div",{className:"body",children:p.jsxs("header",{className:"navbar",children:[p.jsx("a",{className:"logo",children:"PORTFOLIO"}),p.jsxs("ul",{className:l?"navlist active":"navlist",onClick:s,children:[p.jsxs("li",{children:[p.jsx("a",{href:"#home",className:"nav-link ",children:"Home"})," "]}),p.jsxs("li",{children:[p.jsx("a",{href:"#about",className:"nav-link",children:"About"})," "]}),p.jsxs("li",{children:[p.jsx("a",{href:"#works",className:"nav-link",children:"Works"})," "]}),p.jsxs("li",{children:[p.jsx("a",{href:"#services",className:"nav-link",children:"Services"})," "]}),p.jsxs("li",{children:[p.jsx("a",{href:"#contact",className:"nav-link",children:"Contact"})," "]})]}),p.jsx("div",{className:"menu-bar ",id:"menu-icon",onClick:c,children:p.jsx(fo,{icon:n5})})]})})},r5=()=>{const l=X`
  from {
    opacity: 0;
    transform: translateX(100px); /* <- distance */
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;kf();const[r]=Sf.useTypewriter({words:["DONTHAMSETTY JAYA SATYA SAI HARSHITH"],typeSpeed:80});return p.jsxs("div",{className:"body",children:[p.jsx(dl,{direction:"down",fraction:.3,triggerOnce:!0,children:p.jsxs("h1",{className:"heading",children:["About ",p.jsx("span",{style:{color:"aqua"},children:"Me"})]})}),p.jsxs("div",{className:"container2",children:[p.jsx("div",{className:"left1",children:p.jsx(cl,{triggerOnce:"false",fraction:.5,children:p.jsx("img",{src:"https://res.cloudinary.com/dwko0nqi4/image/upload/v1746891353/edit225_oerkco.png",className:"image"})})}),p.jsx(Au,{keyframes:l,duration:1e3,fraction:.5,triggerOnce:!0,children:p.jsxs("div",{className:"right1 ",children:[p.jsx("h1",{className:"name",children:p.jsx("span",{style:{fontWeight:"bold",color:"aqua"},children:r})}),p.jsx("p",{className:"para",children:"Hi everyone! My name is Harshith, and I’m Graduated ECE student. I’ve always been fascinated by how technology works, and over the past year, I’ve been focusing a lot on learning HTML, CSS, and Javascript. I really enjoy solving programming challenges — especially ones that involve logic, pattern matching, or algorithms. Apart from coding, I love in Photography, Editing and Graphic Designing. As all of these I am using Photoshop, Premiere Pro, Adobe Illustrator and Figma. I’m always learning, experimenting, and pushing creative boundaries. Let’s create something beautiful together!"})]})})]})]})},nu=[{image:"https://res.cloudinary.com/dwko0nqi4/image/upload/v1747319325/frontend1_s7r7ui.jpg",text:p.jsxs("div",{className:"text",children:[p.jsx("h1",{className:"head1",children:"1.Frontend Project"}),p.jsx("h2",{className:"head2",children:"Company Portfolio Website"}),p.jsx("p",{className:"para1",children:"A clean and professional company portfolio website designed to showcase services, completed projects, and contact information for potential clients. Built as a responsive template suitable for startups, agencies, and small businesses."}),p.jsxs("ul",{className:"list",children:[p.jsxs("li",{children:[p.jsx("span",{style:{fontWeight:"bold",color:"aqua"},children:"Role: "})," Full-stack Developer & Designer"]}),p.jsx("br",{}),p.jsxs("li",{children:[p.jsx("span",{style:{fontWeight:"bold",color:"aqua"},children:"Tech Stack: "})," HTML, CSS, JavaScript, GitHub Pages"]}),p.jsx("br",{}),p.jsxs("li",{children:[p.jsx("span",{style:{fontWeight:"bold",color:"aqua"},children:"Features: "})," ",p.jsx("br",{})," Responsive layout for all screen sizes ",p.jsx("br",{}),"Smooth scrolling and section-based navigation",p.jsx("br",{}),"Dedicated sections for About, Services, Portfolio, and Contact",p.jsx("br",{}),"Clean UI with modern design principles"]})]})]})},{image:"https://res.cloudinary.com/dwko0nqi4/image/upload/v1744455880/child-1_d8uugm.jpg",text:p.jsxs("div",{className:"text",children:[p.jsx("h1",{className:"head1",children:"2.Poster"}),p.jsx("h2",{className:"head2",children:"Greeting poster Design"}),p.jsx("p",{className:"para1",children:"Created a colorful and joyful digital poster for Panacea IT Services to celebrate Children’s Day. The design features a lively animated child and playful elements to evoke the spirit of childhood. "}),p.jsxs("ul",{className:"list",children:[p.jsxs("li",{children:[p.jsx("span",{style:{fontWeight:"bold",color:"aqua"},children:"Role: "})," Designer"]}),p.jsx("br",{}),p.jsxs("li",{children:[p.jsx("span",{style:{fontWeight:"bold",color:"aqua"},children:"Tech Stack: "})," Adobe Photoshop "]}),p.jsx("br",{}),p.jsxs("li",{children:[p.jsx("span",{style:{fontWeight:"bold",color:"aqua"},children:"About services: "})," ",p.jsx("br",{})," I offer creative and tailored design solutions that effectively communicate your message and engage your target audience. From concept development to final execution, I focus on combining aesthetics with functionality."]})]})]})},{image:"https://res.cloudinary.com/dwko0nqi4/image/upload/v1744455880/p8_m4s8s5.jpg",text:p.jsxs("div",{className:"text",children:[p.jsx("h1",{className:"head1",children:"3.Poster"}),p.jsx("h2",{className:"head2",children:"Advertisement Design"}),p.jsx("p",{className:"para1",children:"The company describes itself as having profound knowledge and extensive experience in web and mobile app development, delivering solutions for various industries like automotive, advertising, motion picture & video, consulting, retail, legal, and more."}),p.jsxs("ul",{className:"list",children:[p.jsxs("li",{children:[p.jsx("span",{style:{fontWeight:"bold",color:"aqua"},children:"Role: "})," Designer"]}),p.jsx("br",{}),p.jsxs("li",{children:[p.jsx("span",{style:{fontWeight:"bold",color:"aqua"},children:"Tech Stack: "})," Adobe Photoshop "]}),p.jsx("br",{}),p.jsxs("li",{children:[p.jsx("span",{style:{fontWeight:"bold",color:"aqua"},children:"About service: "})," ",p.jsx("br",{})," I offer creative and tailored design solutions that effectively communicate your message and engage your target audience. From concept development to final execution, I focus on combining aesthetics with functionality."]})]})]})}];function u5(){kf();const[l,r]=mt.useState(0),c=()=>{r(f=>f===0?nu.length-1:f-1)},s=()=>{r(f=>f===nu.length-1?0:f+1)};return p.jsx(p.Fragment,{children:p.jsxs("div",{style:ul.carousel,className:"body1 ",children:[p.jsx(dl,{direction:"down",fraction:.3,triggerOnce:!0,children:p.jsxs("h1",{className:"works",children:["My ",p.jsx("span",{style:{color:"aqua"},children:"Works"})]})}),p.jsxs("div",{className:"container3",children:[p.jsx(dl,{direction:"left",fraction:.5,triggerOnce:!0,children:p.jsx("div",{className:"right2",children:p.jsxs("div",{style:ul.imageWrapper,children:[p.jsx("img",{src:nu[l].image,alt:"slide",style:ul.image}),p.jsx("button",{style:{...ul.arrow,left:10},onClick:c,children:"❮"}),p.jsx("button",{style:{...ul.arrow,right:10},onClick:s,children:"❯"})]})})}),p.jsx(dl,{direction:"right",fraction:.5,triggerOnce:!0,children:p.jsx("div",{className:"left2",children:p.jsx("p",{style:ul.caption,children:nu[l].text})})})]})]})})}const ul={carousel:{textAlign:"center",fontFamily:"sans-serif"},imageWrapper:{position:"relative"},image:{width:"60%",borderRadius:"8px"},arrow:{position:"absolute",top:"100%",transform:"translateY(-50%)",backgroundColor:"aqua",color:"#fff",border:"none",fontSize:"24px",padding:"20px",cursor:"pointer",borderRadius:"40%"},caption:{marginTop:"12px",fontSize:"18px",color:"white"}};function c5(l){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m350.54 148.68-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h352a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z"},child:[]},{tag:"circle",attr:{cx:"256",cy:"272",r:"80",fill:"none",strokeMiterlimit:"10",strokeWidth:"32"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M124 158v-22h-24v22"},child:[]}]})(l)}function s5(l){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z"},child:[]},{tag:"circle",attr:{cx:"144",cy:"208",r:"32"},child:[]},{tag:"circle",attr:{cx:"152",cy:"311",r:"32"},child:[]},{tag:"circle",attr:{cx:"224",cy:"144",r:"32"},child:[]},{tag:"circle",attr:{cx:"256",cy:"367",r:"48"},child:[]},{tag:"circle",attr:{cx:"328",cy:"144",r:"32"},child:[]}]})(l)}function f5(l){return Le({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13 18V20H17V22H7V20H11V18H3C2.44772 18 2 17.5523 2 17V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V17C22 17.5523 21.5523 18 21 18H13ZM4 5V16H20V5H4ZM10 7.5L15 10.5L10 13.5V7.5Z"},child:[]}]})(l)}const o5=()=>p.jsxs("div",{className:"body2",children:[p.jsx(dl,{direction:"down",fraction:.3,triggerOnce:!0,children:p.jsxs("h1",{className:"heading",children:["My ",p.jsx("span",{style:{color:"aqua"},children:"Services"})]})}),p.jsxs("div",{className:"services-container",children:[p.jsx(cl,{duration:500,delay:0,triggerOnce:"false",fraction:.5,children:p.jsxs("div",{className:"services-box",children:[p.jsxs("div",{className:"icon",children:[p.jsx("i",{children:p.jsx(Qp,{})}),p.jsx("a",{href:"",children:p.jsx("i",{children:p.jsx(bi,{})})})]}),p.jsx("h3",{children:"Web Development"}),p.jsx("p",{children:"I specialize in developing responsive and user-friendly websites that are both visually appealing and highly functional. Whether it's a personal blog, business site, or e-commerce platform, I ensure smooth performance and seamless navigation across all devices."})]})}),p.jsx(cl,{duration:500,delay:200,triggerOnce:"false",fraction:.5,children:p.jsxs("div",{className:"services-box",children:[p.jsxs("div",{className:"icon",children:[p.jsx("i",{children:p.jsx(l5,{})}),p.jsx("a",{href:"",children:p.jsx("i",{children:p.jsx(bi,{})})})]}),p.jsx("h3",{children:"UI/UX Design"}),p.jsx("p",{children:"With a focus on user-centric design, I create intuitive and engaging interfaces that enhance the overall user experience. My approach combines creativity with usability to ensure every interaction is smooth, meaningful, and enjoyable."})]})}),p.jsx(cl,{duration:500,delay:400,triggerOnce:"false",fraction:.5,children:p.jsxs("div",{className:"services-box",children:[p.jsxs("div",{className:"icon",children:[p.jsx("i",{children:p.jsx(s5,{})}),p.jsx("a",{href:"",children:p.jsx("i",{children:p.jsx(bi,{})})})]}),p.jsx("h3",{children:"Graphic Design"}),p.jsx("p",{children:"I bring ideas to life through bold and effective visual design. From logos and branding to social media posts and marketing materials, I deliver graphics that capture attention and communicate your message clearly."})]})})]}),p.jsxs("div",{className:"services-container1",children:[p.jsx(cl,{duration:500,delay:600,triggerOnce:"false",fraction:.3,children:p.jsxs("div",{className:"services-box",children:[p.jsxs("div",{className:"icon",children:[p.jsx("i",{children:p.jsx(f5,{})}),p.jsx("a",{href:"",children:p.jsx("i",{children:p.jsx(bi,{})})})]}),p.jsx("h3",{children:"Vedio Editing"}),p.jsx("p",{children:"I turn raw footage into compelling video content with professional editing techniques. Whether it's for social media, events, or promotional purposes, I enhance the visual narrative through pacing, effects, and sound design."})]})}),p.jsx(cl,{duration:500,delay:800,triggerOnce:"false",fraction:.3,children:p.jsxs("div",{className:"services-box",children:[p.jsxs("div",{className:"icon",children:[p.jsx("i",{children:p.jsx(c5,{})}),p.jsx("a",{href:"",children:p.jsx("i",{children:p.jsx(bi,{})})})]}),p.jsx("h3",{children:"Photography"}),p.jsx("p",{children:"I offer high-quality photography services that capture moments with clarity and emotion. From portraits and events to product and lifestyle shoots, I focus on storytelling through the lens."})]})})]})]});function d5(l){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"},child:[]}]})(l)}const m5=()=>{const l=async r=>{r.preventDefault();const c=new FormData(r.target);c.append("access_key","f7e6557f-c177-43a4-9958-daf0cf175d90");const s=Object.fromEntries(c),f=JSON.stringify(s);(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:f}).then(h=>h.json())).success&&(alert("messsage sent successfully"),c(r.target.reset()))};return p.jsx("div",{className:"contact-container",children:p.jsxs(dl,{children:[p.jsxs("div",{className:"contact-box",children:[p.jsx("h2",{children:"Let's work Together"}),p.jsx("p",{className:"desc",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus delectus aliquam voluptates ex, in pariatur deserunt earum, voluptate reiciendis ipsam maxime deleniti dolore. Enim quam non placeat debitis soluta? "}),p.jsxs("div",{className:"contact-details",children:[p.jsx("i",{children:p.jsx(Xp,{})}),p.jsxs("div",{className:"details",children:[p.jsx("p",{children:"Phone"}),p.jsx("p",{children:"+91 863 958 2747"})]})]}),p.jsxs("div",{className:"contact-details",children:[p.jsx("i",{children:p.jsx(d5,{})}),p.jsxs("div",{className:"details",children:[p.jsx("p",{children:"Email"}),p.jsx("p",{children:"harshithsai472@gmail.com"})]})]}),p.jsxs("div",{className:"contact-details",children:[p.jsx("i",{children:p.jsx(Zp,{})}),p.jsxs("div",{className:"details",children:[p.jsx("p",{children:"Address"}),p.jsx("p",{children:"Eastreen street, near siva temple, Eluru"})]})]})]}),p.jsx("div",{className:"contact-box",children:p.jsxs("form",{action:"",onSubmit:l,children:[p.jsxs("h2",{className:"heading1",children:["Contact ",p.jsx("span",{style:{color:"aqua"},children:"Me! "})]}),p.jsxs("div",{className:"field-box",children:[p.jsx("input",{type:"text",name:"name",placeholder:"Full Name",required:!0}),p.jsx("input",{type:"email",name:"email",placeholder:"Email Address",required:!0}),p.jsx("input",{type:"text",name:"phone number",placeholder:"Phone Number",required:!0}),p.jsx("input",{type:"text",name:"email subject",placeholder:"Email Subject",required:!0}),p.jsx("textarea",{name:"message",id:"",placeholder:"Your message",required:!0})]}),p.jsx("button",{type:"submit",className:"btn",children:" Send Message"})]})})]})})},h5=()=>p.jsxs("div",{className:"body",children:[p.jsx(i5,{}),p.jsx("section",{id:"home",className:"content",children:p.jsx(Y2,{})}),p.jsx("section",{id:"about",className:"content",children:p.jsx(r5,{})}),p.jsx("section",{id:"works",className:"content",children:p.jsx(u5,{})}),p.jsx("section",{id:"services",className:"content",children:p.jsx(o5,{})}),p.jsx("section",{id:"contact",className:"content",children:p.jsx(m5,{})})]});up.createRoot(document.getElementById("root")).render(p.jsx(mt.StrictMode,{children:p.jsx(h5,{})}));
