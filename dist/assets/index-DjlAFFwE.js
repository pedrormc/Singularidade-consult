function ax(r,e){for(var t=0;t<e.length;t++){const a=e[t];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function yg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Bu={exports:{}},Vs={},zu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function sx(){if(am)return gt;am=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function S(F,q,Ce){this.props=F,this.context=q,this.refs=R,this.updater=Ce||E}S.prototype.isReactComponent={},S.prototype.setState=function(F,q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,q,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=S.prototype;function N(F,q,Ce){this.props=F,this.context=q,this.refs=R,this.updater=Ce||E}var L=N.prototype=new y;L.constructor=N,b(L,S.prototype),L.isPureReactComponent=!0;var P=Array.isArray,k=Object.prototype.hasOwnProperty,U={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function M(F,q,Ce){var Xe,Qe={},re=null,ge=null;if(q!=null)for(Xe in q.ref!==void 0&&(ge=q.ref),q.key!==void 0&&(re=""+q.key),q)k.call(q,Xe)&&!B.hasOwnProperty(Xe)&&(Qe[Xe]=q[Xe]);var me=arguments.length-2;if(me===1)Qe.children=Ce;else if(1<me){for(var Oe=Array(me),He=0;He<me;He++)Oe[He]=arguments[He+2];Qe.children=Oe}if(F&&F.defaultProps)for(Xe in me=F.defaultProps,me)Qe[Xe]===void 0&&(Qe[Xe]=me[Xe]);return{$$typeof:r,type:F,key:re,ref:ge,props:Qe,_owner:U.current}}function C(F,q){return{$$typeof:r,type:F.type,key:q,ref:F.ref,props:F.props,_owner:F._owner}}function K(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function O(F){var q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ce){return q[Ce]})}var $=/\/+/g;function J(F,q){return typeof F=="object"&&F!==null&&F.key!=null?O(""+F.key):q.toString(36)}function ce(F,q,Ce,Xe,Qe){var re=typeof F;(re==="undefined"||re==="boolean")&&(F=null);var ge=!1;if(F===null)ge=!0;else switch(re){case"string":case"number":ge=!0;break;case"object":switch(F.$$typeof){case r:case e:ge=!0}}if(ge)return ge=F,Qe=Qe(ge),F=Xe===""?"."+J(ge,0):Xe,P(Qe)?(Ce="",F!=null&&(Ce=F.replace($,"$&/")+"/"),ce(Qe,q,Ce,"",function(He){return He})):Qe!=null&&(K(Qe)&&(Qe=C(Qe,Ce+(!Qe.key||ge&&ge.key===Qe.key?"":(""+Qe.key).replace($,"$&/")+"/")+F)),q.push(Qe)),1;if(ge=0,Xe=Xe===""?".":Xe+":",P(F))for(var me=0;me<F.length;me++){re=F[me];var Oe=Xe+J(re,me);ge+=ce(re,q,Ce,Oe,Qe)}else if(Oe=g(F),typeof Oe=="function")for(F=Oe.call(F),me=0;!(re=F.next()).done;)re=re.value,Oe=Xe+J(re,me++),ge+=ce(re,q,Ce,Oe,Qe);else if(re==="object")throw q=String(F),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ge}function ee(F,q,Ce){if(F==null)return F;var Xe=[],Qe=0;return ce(F,Xe,"","",function(re){return q.call(Ce,re,Qe++)}),Xe}function ie(F){if(F._status===-1){var q=F._result;q=q(),q.then(function(Ce){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ce)},function(Ce){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ce)}),F._status===-1&&(F._status=0,F._result=q)}if(F._status===1)return F._result.default;throw F._result}var W={current:null},Z={transition:null},le={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:Z,ReactCurrentOwner:U};function ue(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:ee,forEach:function(F,q,Ce){ee(F,function(){q.apply(this,arguments)},Ce)},count:function(F){var q=0;return ee(F,function(){q++}),q},toArray:function(F){return ee(F,function(q){return q})||[]},only:function(F){if(!K(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=N,gt.StrictMode=a,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,gt.act=ue,gt.cloneElement=function(F,q,Ce){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Xe=b({},F.props),Qe=F.key,re=F.ref,ge=F._owner;if(q!=null){if(q.ref!==void 0&&(re=q.ref,ge=U.current),q.key!==void 0&&(Qe=""+q.key),F.type&&F.type.defaultProps)var me=F.type.defaultProps;for(Oe in q)k.call(q,Oe)&&!B.hasOwnProperty(Oe)&&(Xe[Oe]=q[Oe]===void 0&&me!==void 0?me[Oe]:q[Oe])}var Oe=arguments.length-2;if(Oe===1)Xe.children=Ce;else if(1<Oe){me=Array(Oe);for(var He=0;He<Oe;He++)me[He]=arguments[He+2];Xe.children=me}return{$$typeof:r,type:F.type,key:Qe,ref:re,props:Xe,_owner:ge}},gt.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},gt.createElement=M,gt.createFactory=function(F){var q=M.bind(null,F);return q.type=F,q},gt.createRef=function(){return{current:null}},gt.forwardRef=function(F){return{$$typeof:h,render:F}},gt.isValidElement=K,gt.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:ie}},gt.memo=function(F,q){return{$$typeof:m,type:F,compare:q===void 0?null:q}},gt.startTransition=function(F){var q=Z.transition;Z.transition={};try{F()}finally{Z.transition=q}},gt.unstable_act=ue,gt.useCallback=function(F,q){return W.current.useCallback(F,q)},gt.useContext=function(F){return W.current.useContext(F)},gt.useDebugValue=function(){},gt.useDeferredValue=function(F){return W.current.useDeferredValue(F)},gt.useEffect=function(F,q){return W.current.useEffect(F,q)},gt.useId=function(){return W.current.useId()},gt.useImperativeHandle=function(F,q,Ce){return W.current.useImperativeHandle(F,q,Ce)},gt.useInsertionEffect=function(F,q){return W.current.useInsertionEffect(F,q)},gt.useLayoutEffect=function(F,q){return W.current.useLayoutEffect(F,q)},gt.useMemo=function(F,q){return W.current.useMemo(F,q)},gt.useReducer=function(F,q,Ce){return W.current.useReducer(F,q,Ce)},gt.useRef=function(F){return W.current.useRef(F)},gt.useState=function(F){return W.current.useState(F)},gt.useSyncExternalStore=function(F,q,Ce){return W.current.useSyncExternalStore(F,q,Ce)},gt.useTransition=function(){return W.current.useTransition()},gt.version="18.3.1",gt}var sm;function Mf(){return sm||(sm=1,zu.exports=sx()),zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function ox(){if(om)return Vs;om=1;var r=Mf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(h,p,m){var _,x={},g=null,E=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(E=p.ref);for(_ in p)a.call(p,_)&&!l.hasOwnProperty(_)&&(x[_]=p[_]);if(h&&h.defaultProps)for(_ in p=h.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:h,key:g,ref:E,props:x,_owner:o.current}}return Vs.Fragment=t,Vs.jsx=d,Vs.jsxs=d,Vs}var lm;function lx(){return lm||(lm=1,Bu.exports=ox()),Bu.exports}var u=lx(),pe=Mf();const Eg=yg(pe),cx=ax({__proto__:null,default:Eg},[pe]);var xl={},ju={exports:{}},Un={},Vu={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function ux(){return cm||(cm=1,(function(r){function e(Z,le){var ue=Z.length;Z.push(le);e:for(;0<ue;){var F=ue-1>>>1,q=Z[F];if(0<o(q,le))Z[F]=le,Z[ue]=q,ue=F;else break e}}function t(Z){return Z.length===0?null:Z[0]}function a(Z){if(Z.length===0)return null;var le=Z[0],ue=Z.pop();if(ue!==le){Z[0]=ue;e:for(var F=0,q=Z.length,Ce=q>>>1;F<Ce;){var Xe=2*(F+1)-1,Qe=Z[Xe],re=Xe+1,ge=Z[re];if(0>o(Qe,ue))re<q&&0>o(ge,Qe)?(Z[F]=ge,Z[re]=ue,F=re):(Z[F]=Qe,Z[Xe]=ue,F=Xe);else if(re<q&&0>o(ge,ue))Z[F]=ge,Z[re]=ue,F=re;else break e}}return le}function o(Z,le){var ue=Z.sortIndex-le.sortIndex;return ue!==0?ue:Z.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var p=[],m=[],_=1,x=null,g=3,E=!1,b=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(Z){for(var le=t(m);le!==null;){if(le.callback===null)a(m);else if(le.startTime<=Z)a(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(m)}}function P(Z){if(R=!1,L(Z),!b)if(t(p)!==null)b=!0,ie(k);else{var le=t(m);le!==null&&W(P,le.startTime-Z)}}function k(Z,le){b=!1,R&&(R=!1,y(M),M=-1),E=!0;var ue=g;try{for(L(le),x=t(p);x!==null&&(!(x.expirationTime>le)||Z&&!O());){var F=x.callback;if(typeof F=="function"){x.callback=null,g=x.priorityLevel;var q=F(x.expirationTime<=le);le=r.unstable_now(),typeof q=="function"?x.callback=q:x===t(p)&&a(p),L(le)}else a(p);x=t(p)}if(x!==null)var Ce=!0;else{var Xe=t(m);Xe!==null&&W(P,Xe.startTime-le),Ce=!1}return Ce}finally{x=null,g=ue,E=!1}}var U=!1,B=null,M=-1,C=5,K=-1;function O(){return!(r.unstable_now()-K<C)}function $(){if(B!==null){var Z=r.unstable_now();K=Z;var le=!0;try{le=B(!0,Z)}finally{le?J():(U=!1,B=null)}}else U=!1}var J;if(typeof N=="function")J=function(){N($)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ee=ce.port2;ce.port1.onmessage=$,J=function(){ee.postMessage(null)}}else J=function(){S($,0)};function ie(Z){B=Z,U||(U=!0,J())}function W(Z,le){M=S(function(){Z(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){b||E||(b=!0,ie(k))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(Z){switch(g){case 1:case 2:case 3:var le=3;break;default:le=g}var ue=g;g=le;try{return Z()}finally{g=ue}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,le){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ue=g;g=Z;try{return le()}finally{g=ue}},r.unstable_scheduleCallback=function(Z,le,ue){var F=r.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?F+ue:F):ue=F,Z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ue+q,Z={id:_++,callback:le,priorityLevel:Z,startTime:ue,expirationTime:q,sortIndex:-1},ue>F?(Z.sortIndex=ue,e(m,Z),t(p)===null&&Z===t(m)&&(R?(y(M),M=-1):R=!0,W(P,ue-F))):(Z.sortIndex=q,e(p,Z),b||E||(b=!0,ie(k))),Z},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(Z){var le=g;return function(){var ue=g;g=le;try{return Z.apply(this,arguments)}finally{g=ue}}}})(Hu)),Hu}var um;function dx(){return um||(um=1,Vu.exports=ux()),Vu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function fx(){if(dm)return Un;dm=1;var r=Mf(),e=dx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)a.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function g(n){return p.call(x,n)?!0:p.call(_,n)?!1:m.test(n)?x[n]=!0:(_[n]=!0,!1)}function E(n,i,s,c){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:s!==null?!s.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,s,c){if(i===null||typeof i>"u"||E(n,i,s,c))return!0;if(c)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,s,c,f,v,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,N);S[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,N);S[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,N);S[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,s,c){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,s,f,c)&&(s=null),c||f===null?g(i)&&(s===null?n.removeAttribute(i):n.setAttribute(i,""+s)):f.mustUseProperty?n[f.propertyName]=s===null?f.type===3?!1:"":s:(i=f.attributeName,c=f.attributeNamespace,s===null?n.removeAttribute(i):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,c?n.setAttributeNS(c,i,s):n.setAttribute(i,s))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),U=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),O=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),Z=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,F;function q(n){if(F===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ce=!1;function Xe(n,i){if(!n||Ce)return"";Ce=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var c=ae}Reflect.construct(n,[],i)}else{try{i.call()}catch(ae){c=ae}n.call(i.prototype)}else{try{throw Error()}catch(ae){c=ae}n()}}catch(ae){if(ae&&c&&typeof ae.stack=="string"){for(var f=ae.stack.split(`
`),v=c.stack.split(`
`),A=f.length-1,I=v.length-1;1<=A&&0<=I&&f[A]!==v[I];)I--;for(;1<=A&&0<=I;A--,I--)if(f[A]!==v[I]){if(A!==1||I!==1)do if(A--,I--,0>I||f[A]!==v[I]){var z=`
`+f[A].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=A&&0<=I);break}}}finally{Ce=!1,Error.prepareStackTrace=s}return(n=n?n.displayName||n.name:"")?q(n):""}function Qe(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case U:return"Portal";case C:return"Profiler";case M:return"StrictMode";case J:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case K:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ee:return i=n.displayName||null,i!==null?i:re(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return re(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function He(n){var i=Oe(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,v=s.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(A){c=""+A,v.call(this,A)}}),Object.defineProperty(n,i,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function it(n){n._valueTracker||(n._valueTracker=He(n))}function Xt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),c="";return n&&(c=Oe(n)?n.checked?"true":"false":n.value),n=c,n!==s?(i.setValue(n),!0):!1}function mt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yt(n,i){var s=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??n._wrapperState.initialChecked})}function Rt(n,i){var s=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;s=me(i.value!=null?i.value:s),n._wrapperState={initialChecked:c,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function kt(n,i){dt(n,i);var s=me(i.value),c=i.type;if(s!=null)c==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+s):n.value!==""+s&&(n.value=""+s);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?jt(n,i.type,s):i.hasOwnProperty("defaultValue")&&jt(n,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function j(n,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,s||i===n.value||(n.value=i),n.defaultValue=i}s=n.name,s!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,s!==""&&(n.name=s)}function jt(n,i,s){(i!=="number"||mt(n.ownerDocument)!==n)&&(s==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+s&&(n.defaultValue=""+s))}var vt=Array.isArray;function Et(n,i,s,c){if(n=n.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<n.length;s++)f=i.hasOwnProperty("$"+n[s].value),n[s].selected!==f&&(n[s].selected=f),f&&c&&(n[s].defaultSelected=!0)}else{for(s=""+me(s),i=null,f=0;f<n.length;f++){if(n[f].value===s){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Ge(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(t(92));if(vt(s)){if(1<s.length)throw Error(t(93));s=s[0]}i=s}i==null&&(i=""),s=i}n._wrapperState={initialValue:me(s)}}function T(n,i){var s=me(i.value),c=me(i.defaultValue);s!=null&&(s=""+s,s!==n.value&&(n.value=s),i.defaultValue==null&&n.defaultValue!==s&&(n.defaultValue=s)),c!=null&&(n.defaultValue=""+c)}function G(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var de,Be=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,s,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=de.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ae(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var $e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys($e).forEach(function(n){rt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),$e[i]=$e[n]})});function ye(n,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||$e.hasOwnProperty(n)&&$e[n]?(""+i).trim():i+"px"}function be(n,i){n=n.style;for(var s in i)if(i.hasOwnProperty(s)){var c=s.indexOf("--")===0,f=ye(s,i[s],c);s==="float"&&(s="cssFloat"),c?n.setProperty(s,f):n[s]=f}}var We=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(n,i){if(i){if(We[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var we=null,Me=null,Le=null;function Ee(n){if(n=ws(n)){if(typeof we!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Lo(i),we(n.stateNode,n.type,i))}}function fe(n){Me?Le?Le.push(n):Le=[n]:Me=n}function je(){if(Me){var n=Me,i=Le;if(Le=Me=null,Ee(n),i)for(n=0;n<i.length;n++)Ee(i[n])}}function at(n,i){return n(i)}function Pt(){}var Mt=!1;function Xn(n,i,s){if(Mt)return n(i,s);Mt=!0;try{return at(n,i,s)}finally{Mt=!1,(Me!==null||Le!==null)&&(Pt(),je())}}function En(n,i){var s=n.stateNode;if(s===null)return null;var c=Lo(s);if(c===null)return null;s=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(t(231,i,typeof s));return s}var fa=!1;if(h)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){fa=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{fa=!1}function oc(n,i,s,c,f,v,A,I,z){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(s,ae)}catch(_e){this.onError(_e)}}var ir=!1,kr=null,qn=!1,Br=null,uo={onError:function(n){ir=!0,kr=n}};function fo(n,i,s,c,f,v,A,I,z){ir=!1,kr=null,oc.apply(uo,arguments)}function ha(n,i,s,c,f,v,A,I,z){if(fo.apply(this,arguments),ir){if(ir){var ae=kr;ir=!1,kr=null}else throw Error(t(198));qn||(qn=!0,Br=ae)}}function xi(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function zr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function cs(n){if(xi(n)!==n)throw Error(t(188))}function ho(n){var i=n.alternate;if(!i){if(i=xi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var s=n,c=i;;){var f=s.return;if(f===null)break;var v=f.alternate;if(v===null){if(c=f.return,c!==null){s=c;continue}break}if(f.child===v.child){for(v=f.child;v;){if(v===s)return cs(f),n;if(v===c)return cs(f),i;v=v.sibling}throw Error(t(188))}if(s.return!==c.return)s=f,c=v;else{for(var A=!1,I=f.child;I;){if(I===s){A=!0,s=f,c=v;break}if(I===c){A=!0,c=f,s=v;break}I=I.sibling}if(!A){for(I=v.child;I;){if(I===s){A=!0,s=v,c=f;break}if(I===c){A=!0,c=v,s=f;break}I=I.sibling}if(!A)throw Error(t(189))}}if(s.alternate!==c)throw Error(t(190))}if(s.tag!==3)throw Error(t(188));return s.stateNode.current===s?n:i}function po(n){return n=ho(n),n!==null?mo(n):null}function mo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=mo(n);if(i!==null)return i;n=n.sibling}return null}var go=e.unstable_scheduleCallback,vo=e.unstable_cancelCallback,lc=e.unstable_shouldYield,cc=e.unstable_requestPaint,w=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,oe=e.unstable_ImmediatePriority,ne=e.unstable_UserBlockingPriority,Q=e.unstable_NormalPriority,Ne=e.unstable_LowPriority,Fe=e.unstable_IdlePriority,Re=null,Ie=null;function Ze(n){if(Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(Re,n,void 0,(n.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Nt,ft=Math.log,Je=Math.LN2;function Nt(n){return n>>>=0,n===0?32:31-(ft(n)/Je|0)|0}var Ft=64,Ut=4194304;function St(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qt(n,i){var s=n.pendingLanes;if(s===0)return 0;var c=0,f=n.suspendedLanes,v=n.pingedLanes,A=s&268435455;if(A!==0){var I=A&~f;I!==0?c=St(I):(v&=A,v!==0&&(c=St(v)))}else A=s&~f,A!==0?c=St(A):v!==0&&(c=St(v));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,v=i&-i,f>=v||f===16&&(v&4194240)!==0))return i;if((c&4)!==0&&(c|=s&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)s=31-et(i),f=1<<s,c|=n[s],i&=~f;return c}function Ye(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mn(n,i){for(var s=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,v=n.pendingLanes;0<v;){var A=31-et(v),I=1<<A,z=f[A];z===-1?((I&s)===0||(I&c)!==0)&&(f[A]=Ye(I,i)):z<=i&&(n.expiredLanes|=I),v&=~I}}function xt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Cn(){var n=Ft;return Ft<<=1,(Ft&4194240)===0&&(Ft=64),n}function Rn(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function kn(n,i,s){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-et(i),n[i]=s}function rr(n,i){var s=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<s;){var f=31-et(s),v=1<<f;i[f]=0,c[f]=-1,n[f]=-1,s&=~v}}function Ct(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var c=31-et(s),f=1<<c;f&i|n[c]&i&&(n[c]|=i),s&=~f}}var st=0;function ri(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yt,Yn,Ii,us,jf,uc=!1,xo=[],ar=null,sr=null,or=null,ds=new Map,fs=new Map,lr=[],wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vf(n,i){switch(n){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":ds.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fs.delete(i.pointerId)}}function hs(n,i,s,c,f,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:s,eventSystemFlags:c,nativeEvent:v,targetContainers:[f]},i!==null&&(i=ws(i),i!==null&&Yn(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Cv(n,i,s,c,f){switch(i){case"focusin":return ar=hs(ar,n,i,s,c,f),!0;case"dragenter":return sr=hs(sr,n,i,s,c,f),!0;case"mouseover":return or=hs(or,n,i,s,c,f),!0;case"pointerover":var v=f.pointerId;return ds.set(v,hs(ds.get(v)||null,n,i,s,c,f)),!0;case"gotpointercapture":return v=f.pointerId,fs.set(v,hs(fs.get(v)||null,n,i,s,c,f)),!0}return!1}function Hf(n){var i=jr(n.target);if(i!==null){var s=xi(i);if(s!==null){if(i=s.tag,i===13){if(i=zr(s),i!==null){n.blockedOn=i,jf(n.priority,function(){Ii(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _o(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=fc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);ct=c,s.target.dispatchEvent(c),ct=null}else return i=ws(s),i!==null&&Yn(i),n.blockedOn=s,!1;i.shift()}return!0}function Gf(n,i,s){_o(n)&&s.delete(i)}function Rv(){uc=!1,ar!==null&&_o(ar)&&(ar=null),sr!==null&&_o(sr)&&(sr=null),or!==null&&_o(or)&&(or=null),ds.forEach(Gf),fs.forEach(Gf)}function ps(n,i){n.blockedOn===i&&(n.blockedOn=null,uc||(uc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rv)))}function ms(n){function i(f){return ps(f,n)}if(0<xo.length){ps(xo[0],n);for(var s=1;s<xo.length;s++){var c=xo[s];c.blockedOn===n&&(c.blockedOn=null)}}for(ar!==null&&ps(ar,n),sr!==null&&ps(sr,n),or!==null&&ps(or,n),ds.forEach(i),fs.forEach(i),s=0;s<lr.length;s++)c=lr[s],c.blockedOn===n&&(c.blockedOn=null);for(;0<lr.length&&(s=lr[0],s.blockedOn===null);)Hf(s),s.blockedOn===null&&lr.shift()}var pa=P.ReactCurrentBatchConfig,So=!0;function Nv(n,i,s,c){var f=st,v=pa.transition;pa.transition=null;try{st=1,dc(n,i,s,c)}finally{st=f,pa.transition=v}}function Pv(n,i,s,c){var f=st,v=pa.transition;pa.transition=null;try{st=4,dc(n,i,s,c)}finally{st=f,pa.transition=v}}function dc(n,i,s,c){if(So){var f=fc(n,i,s,c);if(f===null)Rc(n,i,c,yo,s),Vf(n,c);else if(Cv(f,n,i,s,c))c.stopPropagation();else if(Vf(n,c),i&4&&-1<wv.indexOf(n)){for(;f!==null;){var v=ws(f);if(v!==null&&Yt(v),v=fc(n,i,s,c),v===null&&Rc(n,i,c,yo,s),v===f)break;f=v}f!==null&&c.stopPropagation()}else Rc(n,i,c,null,s)}}var yo=null;function fc(n,i,s,c){if(yo=null,n=V(c),n=jr(n),n!==null)if(i=xi(n),i===null)n=null;else if(s=i.tag,s===13){if(n=zr(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return yo=n,null}function Wf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case oe:return 1;case ne:return 4;case Q:case Ne:return 16;case Fe:return 536870912;default:return 16}default:return 16}}var cr=null,hc=null,Eo=null;function Xf(){if(Eo)return Eo;var n,i=hc,s=i.length,c,f="value"in cr?cr.value:cr.textContent,v=f.length;for(n=0;n<s&&i[n]===f[n];n++);var A=s-n;for(c=1;c<=A&&i[s-c]===f[v-c];c++);return Eo=f.slice(n,1<c?1-c:void 0)}function Mo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function To(){return!0}function qf(){return!1}function Bn(n){function i(s,c,f,v,A){this._reactName=s,this._targetInst=f,this.type=c,this.nativeEvent=v,this.target=A,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(s=n[I],this[I]=s?s(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?To:qf,this.isPropagationStopped=qf,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),i}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=Bn(ma),gs=ue({},ma,{view:0,detail:0}),Dv=Bn(gs),mc,gc,vs,bo=ue({},gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vs&&(vs&&n.type==="mousemove"?(mc=n.screenX-vs.screenX,gc=n.screenY-vs.screenY):gc=mc=0,vs=n),mc)},movementY:function(n){return"movementY"in n?n.movementY:gc}}),Yf=Bn(bo),Lv=ue({},bo,{dataTransfer:0}),Iv=Bn(Lv),Uv=ue({},gs,{relatedTarget:0}),vc=Bn(Uv),Fv=ue({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),Ov=Bn(Fv),kv=ue({},ma,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Bv=Bn(kv),zv=ue({},ma,{data:0}),$f=Bn(zv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Hv[n])?!!i[n]:!1}function xc(){return Gv}var Wv=ue({},gs,{key:function(n){if(n.key){var i=jv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Mo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Vv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(n){return n.type==="keypress"?Mo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Xv=Bn(Wv),qv=ue({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=Bn(qv),Yv=ue({},gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),$v=Bn(Yv),Kv=ue({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=Bn(Kv),Qv=ue({},bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=Bn(Qv),e0=[9,13,27,32],_c=h&&"CompositionEvent"in window,xs=null;h&&"documentMode"in document&&(xs=document.documentMode);var t0=h&&"TextEvent"in window&&!xs,Zf=h&&(!_c||xs&&8<xs&&11>=xs),Qf=" ",Jf=!1;function eh(n,i){switch(n){case"keyup":return e0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ga=!1;function n0(n,i){switch(n){case"compositionend":return th(i);case"keypress":return i.which!==32?null:(Jf=!0,Qf);case"textInput":return n=i.data,n===Qf&&Jf?null:n;default:return null}}function i0(n,i){if(ga)return n==="compositionend"||!_c&&eh(n,i)?(n=Xf(),Eo=hc=cr=null,ga=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Zf&&i.locale!=="ko"?null:i.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!r0[n.type]:i==="textarea"}function ih(n,i,s,c){fe(c),i=No(i,"onChange"),0<i.length&&(s=new pc("onChange","change",null,s,c),n.push({event:s,listeners:i}))}var _s=null,Ss=null;function a0(n){yh(n,0)}function Ao(n){var i=ya(n);if(Xt(i))return n}function s0(n,i){if(n==="change")return i}var rh=!1;if(h){var Sc;if(h){var yc="oninput"in document;if(!yc){var ah=document.createElement("div");ah.setAttribute("oninput","return;"),yc=typeof ah.oninput=="function"}Sc=yc}else Sc=!1;rh=Sc&&(!document.documentMode||9<document.documentMode)}function sh(){_s&&(_s.detachEvent("onpropertychange",oh),Ss=_s=null)}function oh(n){if(n.propertyName==="value"&&Ao(Ss)){var i=[];ih(i,Ss,n,V(n)),Xn(a0,i)}}function o0(n,i,s){n==="focusin"?(sh(),_s=i,Ss=s,_s.attachEvent("onpropertychange",oh)):n==="focusout"&&sh()}function l0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ao(Ss)}function c0(n,i){if(n==="click")return Ao(i)}function u0(n,i){if(n==="input"||n==="change")return Ao(i)}function d0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ai=typeof Object.is=="function"?Object.is:d0;function ys(n,i){if(ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),c=Object.keys(i);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var f=s[c];if(!p.call(i,f)||!ai(n[f],i[f]))return!1}return!0}function lh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ch(n,i){var s=lh(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=i&&c>=i)return{node:s,offset:i-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=lh(s)}}function uh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?uh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function dh(){for(var n=window,i=mt();i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=mt(n.document)}return i}function Ec(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function f0(n){var i=dh(),s=n.focusedElem,c=n.selectionRange;if(i!==s&&s&&s.ownerDocument&&uh(s.ownerDocument.documentElement,s)){if(c!==null&&Ec(s)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(n,s.value.length);else if(n=(i=s.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=s.textContent.length,v=Math.min(c.start,f);c=c.end===void 0?v:Math.min(c.end,f),!n.extend&&v>c&&(f=c,c=v,v=f),f=ch(s,v);var A=ch(s,c);f&&A&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),v>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=s;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)n=i[s],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var h0=h&&"documentMode"in document&&11>=document.documentMode,va=null,Mc=null,Es=null,Tc=!1;function fh(n,i,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Tc||va==null||va!==mt(c)||(c=va,"selectionStart"in c&&Ec(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Es&&ys(Es,c)||(Es=c,c=No(Mc,"onSelect"),0<c.length&&(i=new pc("onSelect","select",null,i,s),n.push({event:i,listeners:c}),i.target=va)))}function wo(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var xa={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},bc={},hh={};h&&(hh=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function Co(n){if(bc[n])return bc[n];if(!xa[n])return n;var i=xa[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in hh)return bc[n]=i[s];return n}var ph=Co("animationend"),mh=Co("animationiteration"),gh=Co("animationstart"),vh=Co("transitionend"),xh=new Map,_h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,i){xh.set(n,i),l(i,[n])}for(var Ac=0;Ac<_h.length;Ac++){var wc=_h[Ac],p0=wc.toLowerCase(),m0=wc[0].toUpperCase()+wc.slice(1);ur(p0,"on"+m0)}ur(ph,"onAnimationEnd"),ur(mh,"onAnimationIteration"),ur(gh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(vh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));function Sh(n,i,s){var c=n.type||"unknown-event";n.currentTarget=s,ha(c,i,void 0,n),n.currentTarget=null}function yh(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],f=c.event;c=c.listeners;e:{var v=void 0;if(i)for(var A=c.length-1;0<=A;A--){var I=c[A],z=I.instance,ae=I.currentTarget;if(I=I.listener,z!==v&&f.isPropagationStopped())break e;Sh(f,I,ae),v=z}else for(A=0;A<c.length;A++){if(I=c[A],z=I.instance,ae=I.currentTarget,I=I.listener,z!==v&&f.isPropagationStopped())break e;Sh(f,I,ae),v=z}}}if(qn)throw n=Br,qn=!1,Br=null,n}function Bt(n,i){var s=i[Uc];s===void 0&&(s=i[Uc]=new Set);var c=n+"__bubble";s.has(c)||(Eh(i,n,2,!1),s.add(c))}function Cc(n,i,s){var c=0;i&&(c|=4),Eh(s,n,c,i)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Ts(n){if(!n[Ro]){n[Ro]=!0,a.forEach(function(s){s!=="selectionchange"&&(g0.has(s)||Cc(s,!1,n),Cc(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ro]||(i[Ro]=!0,Cc("selectionchange",!1,i))}}function Eh(n,i,s,c){switch(Wf(i)){case 1:var f=Nv;break;case 4:f=Pv;break;default:f=dc}s=f.bind(null,i,s,n),f=void 0,!fa||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,s,{capture:!0,passive:f}):n.addEventListener(i,s,!0):f!==void 0?n.addEventListener(i,s,{passive:f}):n.addEventListener(i,s,!1)}function Rc(n,i,s,c,f){var v=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(A===4)for(A=c.return;A!==null;){var z=A.tag;if((z===3||z===4)&&(z=A.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;A=A.return}for(;I!==null;){if(A=jr(I),A===null)return;if(z=A.tag,z===5||z===6){c=v=A;continue e}I=I.parentNode}}c=c.return}Xn(function(){var ae=v,_e=V(s),Se=[];e:{var xe=xh.get(n);if(xe!==void 0){var Ue=pc,Ve=n;switch(n){case"keypress":if(Mo(s)===0)break e;case"keydown":case"keyup":Ue=Xv;break;case"focusin":Ve="focus",Ue=vc;break;case"focusout":Ve="blur",Ue=vc;break;case"beforeblur":case"afterblur":Ue=vc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=$v;break;case ph:case mh:case gh:Ue=Ov;break;case vh:Ue=Zv;break;case"scroll":Ue=Dv;break;case"wheel":Ue=Jv;break;case"copy":case"cut":case"paste":Ue=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Kf}var qe=(i&4)!==0,$t=!qe&&n==="scroll",Y=qe?xe!==null?xe+"Capture":null:xe;qe=[];for(var H=ae,te;H!==null;){te=H;var Te=te.stateNode;if(te.tag===5&&Te!==null&&(te=Te,Y!==null&&(Te=En(H,Y),Te!=null&&qe.push(bs(H,Te,te)))),$t)break;H=H.return}0<qe.length&&(xe=new Ue(xe,Ve,null,s,_e),Se.push({event:xe,listeners:qe}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",xe&&s!==ct&&(Ve=s.relatedTarget||s.fromElement)&&(jr(Ve)||Ve[Ui]))break e;if((Ue||xe)&&(xe=_e.window===_e?_e:(xe=_e.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ue?(Ve=s.relatedTarget||s.toElement,Ue=ae,Ve=Ve?jr(Ve):null,Ve!==null&&($t=xi(Ve),Ve!==$t||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ue=null,Ve=ae),Ue!==Ve)){if(qe=Yf,Te="onMouseLeave",Y="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Kf,Te="onPointerLeave",Y="onPointerEnter",H="pointer"),$t=Ue==null?xe:ya(Ue),te=Ve==null?xe:ya(Ve),xe=new qe(Te,H+"leave",Ue,s,_e),xe.target=$t,xe.relatedTarget=te,Te=null,jr(_e)===ae&&(qe=new qe(Y,H+"enter",Ve,s,_e),qe.target=te,qe.relatedTarget=$t,Te=qe),$t=Te,Ue&&Ve)t:{for(qe=Ue,Y=Ve,H=0,te=qe;te;te=_a(te))H++;for(te=0,Te=Y;Te;Te=_a(Te))te++;for(;0<H-te;)qe=_a(qe),H--;for(;0<te-H;)Y=_a(Y),te--;for(;H--;){if(qe===Y||Y!==null&&qe===Y.alternate)break t;qe=_a(qe),Y=_a(Y)}qe=null}else qe=null;Ue!==null&&Mh(Se,xe,Ue,qe,!1),Ve!==null&&$t!==null&&Mh(Se,$t,Ve,qe,!0)}}e:{if(xe=ae?ya(ae):window,Ue=xe.nodeName&&xe.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&xe.type==="file")var Ke=s0;else if(nh(xe))if(rh)Ke=u0;else{Ke=l0;var tt=o0}else(Ue=xe.nodeName)&&Ue.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=c0);if(Ke&&(Ke=Ke(n,ae))){ih(Se,Ke,s,_e);break e}tt&&tt(n,xe,ae),n==="focusout"&&(tt=xe._wrapperState)&&tt.controlled&&xe.type==="number"&&jt(xe,"number",xe.value)}switch(tt=ae?ya(ae):window,n){case"focusin":(nh(tt)||tt.contentEditable==="true")&&(va=tt,Mc=ae,Es=null);break;case"focusout":Es=Mc=va=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,fh(Se,s,_e);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":fh(Se,s,_e)}var nt;if(_c)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else ga?eh(n,s)&&(ot="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(ot="onCompositionStart");ot&&(Zf&&s.locale!=="ko"&&(ga||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ga&&(nt=Xf()):(cr=_e,hc="value"in cr?cr.value:cr.textContent,ga=!0)),tt=No(ae,ot),0<tt.length&&(ot=new $f(ot,n,null,s,_e),Se.push({event:ot,listeners:tt}),nt?ot.data=nt:(nt=th(s),nt!==null&&(ot.data=nt)))),(nt=t0?n0(n,s):i0(n,s))&&(ae=No(ae,"onBeforeInput"),0<ae.length&&(_e=new $f("onBeforeInput","beforeinput",null,s,_e),Se.push({event:_e,listeners:ae}),_e.data=nt))}yh(Se,i)})}function bs(n,i,s){return{instance:n,listener:i,currentTarget:s}}function No(n,i){for(var s=i+"Capture",c=[];n!==null;){var f=n,v=f.stateNode;f.tag===5&&v!==null&&(f=v,v=En(n,s),v!=null&&c.unshift(bs(n,v,f)),v=En(n,i),v!=null&&c.push(bs(n,v,f))),n=n.return}return c}function _a(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mh(n,i,s,c,f){for(var v=i._reactName,A=[];s!==null&&s!==c;){var I=s,z=I.alternate,ae=I.stateNode;if(z!==null&&z===c)break;I.tag===5&&ae!==null&&(I=ae,f?(z=En(s,v),z!=null&&A.unshift(bs(s,z,I))):f||(z=En(s,v),z!=null&&A.push(bs(s,z,I)))),s=s.return}A.length!==0&&n.push({event:i,listeners:A})}var v0=/\r\n?/g,x0=/\u0000|\uFFFD/g;function Th(n){return(typeof n=="string"?n:""+n).replace(v0,`
`).replace(x0,"")}function Po(n,i,s){if(i=Th(i),Th(n)!==i&&s)throw Error(t(425))}function Do(){}var Nc=null,Pc=null;function Dc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(n){return bh.resolve(null).then(n).catch(y0)}:Lc;function y0(n){setTimeout(function(){throw n})}function Ic(n,i){var s=i,c=0;do{var f=s.nextSibling;if(n.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(c===0){n.removeChild(f),ms(i);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=f}while(s);ms(i)}function dr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ah(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return n;i--}else s==="/$"&&i++}n=n.previousSibling}return null}var Sa=Math.random().toString(36).slice(2),_i="__reactFiber$"+Sa,As="__reactProps$"+Sa,Ui="__reactContainer$"+Sa,Uc="__reactEvents$"+Sa,E0="__reactListeners$"+Sa,M0="__reactHandles$"+Sa;function jr(n){var i=n[_i];if(i)return i;for(var s=n.parentNode;s;){if(i=s[Ui]||s[_i]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=Ah(n);n!==null;){if(s=n[_i])return s;n=Ah(n)}return i}n=s,s=n.parentNode}return null}function ws(n){return n=n[_i]||n[Ui],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ya(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Lo(n){return n[As]||null}var Fc=[],Ea=-1;function fr(n){return{current:n}}function zt(n){0>Ea||(n.current=Fc[Ea],Fc[Ea]=null,Ea--)}function Ot(n,i){Ea++,Fc[Ea]=n.current,n.current=i}var hr={},mn=fr(hr),Nn=fr(!1),Vr=hr;function Ma(n,i){var s=n.type.contextTypes;if(!s)return hr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},v;for(v in s)f[v]=i[v];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Pn(n){return n=n.childContextTypes,n!=null}function Io(){zt(Nn),zt(mn)}function wh(n,i,s){if(mn.current!==hr)throw Error(t(168));Ot(mn,i),Ot(Nn,s)}function Ch(n,i,s){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return s;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,ge(n)||"Unknown",f));return ue({},s,c)}function Uo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hr,Vr=mn.current,Ot(mn,n),Ot(Nn,Nn.current),!0}function Rh(n,i,s){var c=n.stateNode;if(!c)throw Error(t(169));s?(n=Ch(n,i,Vr),c.__reactInternalMemoizedMergedChildContext=n,zt(Nn),zt(mn),Ot(mn,n)):zt(Nn),Ot(Nn,s)}var Fi=null,Fo=!1,Oc=!1;function Nh(n){Fi===null?Fi=[n]:Fi.push(n)}function T0(n){Fo=!0,Nh(n)}function pr(){if(!Oc&&Fi!==null){Oc=!0;var n=0,i=st;try{var s=Fi;for(st=1;n<s.length;n++){var c=s[n];do c=c(!0);while(c!==null)}Fi=null,Fo=!1}catch(f){throw Fi!==null&&(Fi=Fi.slice(n+1)),go(oe,pr),f}finally{st=i,Oc=!1}}return null}var Ta=[],ba=0,Oo=null,ko=0,$n=[],Kn=0,Hr=null,Oi=1,ki="";function Gr(n,i){Ta[ba++]=ko,Ta[ba++]=Oo,Oo=n,ko=i}function Ph(n,i,s){$n[Kn++]=Oi,$n[Kn++]=ki,$n[Kn++]=Hr,Hr=n;var c=Oi;n=ki;var f=32-et(c)-1;c&=~(1<<f),s+=1;var v=32-et(i)+f;if(30<v){var A=f-f%5;v=(c&(1<<A)-1).toString(32),c>>=A,f-=A,Oi=1<<32-et(i)+f|s<<f|c,ki=v+n}else Oi=1<<v|s<<f|c,ki=n}function kc(n){n.return!==null&&(Gr(n,1),Ph(n,1,0))}function Bc(n){for(;n===Oo;)Oo=Ta[--ba],Ta[ba]=null,ko=Ta[--ba],Ta[ba]=null;for(;n===Hr;)Hr=$n[--Kn],$n[Kn]=null,ki=$n[--Kn],$n[Kn]=null,Oi=$n[--Kn],$n[Kn]=null}var zn=null,jn=null,Vt=!1,si=null;function Dh(n,i){var s=ei(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=n,i=n.deletions,i===null?(n.deletions=[s],n.flags|=16):i.push(s)}function Lh(n,i){switch(n.tag){case 5:var s=n.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,jn=dr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Hr!==null?{id:Oi,overflow:ki}:null,n.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=ei(18,null,null,0),s.stateNode=i,s.return=n,n.child=s,zn=n,jn=null,!0):!1;default:return!1}}function zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jc(n){if(Vt){var i=jn;if(i){var s=i;if(!Lh(n,i)){if(zc(n))throw Error(t(418));i=dr(s.nextSibling);var c=zn;i&&Lh(n,i)?Dh(c,s):(n.flags=n.flags&-4097|2,Vt=!1,zn=n)}}else{if(zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,zn=n}}}function Ih(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Bo(n){if(n!==zn)return!1;if(!Vt)return Ih(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Dc(n.type,n.memoizedProps)),i&&(i=jn)){if(zc(n))throw Uh(),Error(t(418));for(;i;)Dh(n,i),i=dr(i.nextSibling)}if(Ih(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"){if(i===0){jn=dr(n.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}n=n.nextSibling}jn=null}}else jn=zn?dr(n.stateNode.nextSibling):null;return!0}function Uh(){for(var n=jn;n;)n=dr(n.nextSibling)}function Aa(){jn=zn=null,Vt=!1}function Vc(n){si===null?si=[n]:si.push(n)}var b0=P.ReactCurrentBatchConfig;function Cs(n,i,s){if(n=s.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(t(309));var c=s.stateNode}if(!c)throw Error(t(147,n));var f=c,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(A){var I=f.refs;A===null?delete I[v]:I[v]=A},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!s._owner)throw Error(t(290,n))}return n}function zo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Fh(n){var i=n._init;return i(n._payload)}function Oh(n){function i(Y,H){if(n){var te=Y.deletions;te===null?(Y.deletions=[H],Y.flags|=16):te.push(H)}}function s(Y,H){if(!n)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function c(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function f(Y,H){return Y=Er(Y,H),Y.index=0,Y.sibling=null,Y}function v(Y,H,te){return Y.index=te,n?(te=Y.alternate,te!==null?(te=te.index,te<H?(Y.flags|=2,H):te):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function A(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,H,te,Te){return H===null||H.tag!==6?(H=Lu(te,Y.mode,Te),H.return=Y,H):(H=f(H,te),H.return=Y,H)}function z(Y,H,te,Te){var Ke=te.type;return Ke===B?_e(Y,H,te.props.children,Te,te.key):H!==null&&(H.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ie&&Fh(Ke)===H.type)?(Te=f(H,te.props),Te.ref=Cs(Y,H,te),Te.return=Y,Te):(Te=ul(te.type,te.key,te.props,null,Y.mode,Te),Te.ref=Cs(Y,H,te),Te.return=Y,Te)}function ae(Y,H,te,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==te.containerInfo||H.stateNode.implementation!==te.implementation?(H=Iu(te,Y.mode,Te),H.return=Y,H):(H=f(H,te.children||[]),H.return=Y,H)}function _e(Y,H,te,Te,Ke){return H===null||H.tag!==7?(H=Qr(te,Y.mode,Te,Ke),H.return=Y,H):(H=f(H,te),H.return=Y,H)}function Se(Y,H,te){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Lu(""+H,Y.mode,te),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case k:return te=ul(H.type,H.key,H.props,null,Y.mode,te),te.ref=Cs(Y,null,H),te.return=Y,te;case U:return H=Iu(H,Y.mode,te),H.return=Y,H;case ie:var Te=H._init;return Se(Y,Te(H._payload),te)}if(vt(H)||le(H))return H=Qr(H,Y.mode,te,null),H.return=Y,H;zo(Y,H)}return null}function xe(Y,H,te,Te){var Ke=H!==null?H.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ke!==null?null:I(Y,H,""+te,Te);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case k:return te.key===Ke?z(Y,H,te,Te):null;case U:return te.key===Ke?ae(Y,H,te,Te):null;case ie:return Ke=te._init,xe(Y,H,Ke(te._payload),Te)}if(vt(te)||le(te))return Ke!==null?null:_e(Y,H,te,Te,null);zo(Y,te)}return null}function Ue(Y,H,te,Te,Ke){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(te)||null,I(H,Y,""+Te,Ke);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case k:return Y=Y.get(Te.key===null?te:Te.key)||null,z(H,Y,Te,Ke);case U:return Y=Y.get(Te.key===null?te:Te.key)||null,ae(H,Y,Te,Ke);case ie:var tt=Te._init;return Ue(Y,H,te,tt(Te._payload),Ke)}if(vt(Te)||le(Te))return Y=Y.get(te)||null,_e(H,Y,Te,Ke,null);zo(H,Te)}return null}function Ve(Y,H,te,Te){for(var Ke=null,tt=null,nt=H,ot=H=0,ln=null;nt!==null&&ot<te.length;ot++){nt.index>ot?(ln=nt,nt=null):ln=nt.sibling;var At=xe(Y,nt,te[ot],Te);if(At===null){nt===null&&(nt=ln);break}n&&nt&&At.alternate===null&&i(Y,nt),H=v(At,H,ot),tt===null?Ke=At:tt.sibling=At,tt=At,nt=ln}if(ot===te.length)return s(Y,nt),Vt&&Gr(Y,ot),Ke;if(nt===null){for(;ot<te.length;ot++)nt=Se(Y,te[ot],Te),nt!==null&&(H=v(nt,H,ot),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return Vt&&Gr(Y,ot),Ke}for(nt=c(Y,nt);ot<te.length;ot++)ln=Ue(nt,Y,ot,te[ot],Te),ln!==null&&(n&&ln.alternate!==null&&nt.delete(ln.key===null?ot:ln.key),H=v(ln,H,ot),tt===null?Ke=ln:tt.sibling=ln,tt=ln);return n&&nt.forEach(function(Mr){return i(Y,Mr)}),Vt&&Gr(Y,ot),Ke}function qe(Y,H,te,Te){var Ke=le(te);if(typeof Ke!="function")throw Error(t(150));if(te=Ke.call(te),te==null)throw Error(t(151));for(var tt=Ke=null,nt=H,ot=H=0,ln=null,At=te.next();nt!==null&&!At.done;ot++,At=te.next()){nt.index>ot?(ln=nt,nt=null):ln=nt.sibling;var Mr=xe(Y,nt,At.value,Te);if(Mr===null){nt===null&&(nt=ln);break}n&&nt&&Mr.alternate===null&&i(Y,nt),H=v(Mr,H,ot),tt===null?Ke=Mr:tt.sibling=Mr,tt=Mr,nt=ln}if(At.done)return s(Y,nt),Vt&&Gr(Y,ot),Ke;if(nt===null){for(;!At.done;ot++,At=te.next())At=Se(Y,At.value,Te),At!==null&&(H=v(At,H,ot),tt===null?Ke=At:tt.sibling=At,tt=At);return Vt&&Gr(Y,ot),Ke}for(nt=c(Y,nt);!At.done;ot++,At=te.next())At=Ue(nt,Y,ot,At.value,Te),At!==null&&(n&&At.alternate!==null&&nt.delete(At.key===null?ot:At.key),H=v(At,H,ot),tt===null?Ke=At:tt.sibling=At,tt=At);return n&&nt.forEach(function(rx){return i(Y,rx)}),Vt&&Gr(Y,ot),Ke}function $t(Y,H,te,Te){if(typeof te=="object"&&te!==null&&te.type===B&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case k:e:{for(var Ke=te.key,tt=H;tt!==null;){if(tt.key===Ke){if(Ke=te.type,Ke===B){if(tt.tag===7){s(Y,tt.sibling),H=f(tt,te.props.children),H.return=Y,Y=H;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ie&&Fh(Ke)===tt.type){s(Y,tt.sibling),H=f(tt,te.props),H.ref=Cs(Y,tt,te),H.return=Y,Y=H;break e}s(Y,tt);break}else i(Y,tt);tt=tt.sibling}te.type===B?(H=Qr(te.props.children,Y.mode,Te,te.key),H.return=Y,Y=H):(Te=ul(te.type,te.key,te.props,null,Y.mode,Te),Te.ref=Cs(Y,H,te),Te.return=Y,Y=Te)}return A(Y);case U:e:{for(tt=te.key;H!==null;){if(H.key===tt)if(H.tag===4&&H.stateNode.containerInfo===te.containerInfo&&H.stateNode.implementation===te.implementation){s(Y,H.sibling),H=f(H,te.children||[]),H.return=Y,Y=H;break e}else{s(Y,H);break}else i(Y,H);H=H.sibling}H=Iu(te,Y.mode,Te),H.return=Y,Y=H}return A(Y);case ie:return tt=te._init,$t(Y,H,tt(te._payload),Te)}if(vt(te))return Ve(Y,H,te,Te);if(le(te))return qe(Y,H,te,Te);zo(Y,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,H!==null&&H.tag===6?(s(Y,H.sibling),H=f(H,te),H.return=Y,Y=H):(s(Y,H),H=Lu(te,Y.mode,Te),H.return=Y,Y=H),A(Y)):s(Y,H)}return $t}var wa=Oh(!0),kh=Oh(!1),jo=fr(null),Vo=null,Ca=null,Hc=null;function Gc(){Hc=Ca=Vo=null}function Wc(n){var i=jo.current;zt(jo),n._currentValue=i}function Xc(n,i,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===s)break;n=n.return}}function Ra(n,i){Vo=n,Hc=Ca=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(Hc!==n)if(n={context:n,memoizedValue:i,next:null},Ca===null){if(Vo===null)throw Error(t(308));Ca=n,Vo.dependencies={lanes:0,firstContext:n}}else Ca=Ca.next=n;return i}var Wr=null;function qc(n){Wr===null?Wr=[n]:Wr.push(n)}function Bh(n,i,s,c){var f=i.interleaved;return f===null?(s.next=s,qc(i)):(s.next=f.next,f.next=s),i.interleaved=s,Bi(n,c)}function Bi(n,i){n.lanes|=i;var s=n.alternate;for(s!==null&&(s.lanes|=i),s=n,n=n.return;n!==null;)n.childLanes|=i,s=n.alternate,s!==null&&(s.childLanes|=i),s=n,n=n.return;return s.tag===3?s.stateNode:null}var mr=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function gr(n,i,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Bi(n,s)}return f=c.interleaved,f===null?(i.next=i,qc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Bi(n,s)}function Ho(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,s|=c,i.lanes=s,Ct(n,s)}}function jh(n,i){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var f=null,v=null;if(s=s.firstBaseUpdate,s!==null){do{var A={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};v===null?f=v=A:v=v.next=A,s=s.next}while(s!==null);v===null?f=v=i:v=v.next=i}else f=v=i;s={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:v,shared:c.shared,effects:c.effects},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}function Go(n,i,s,c){var f=n.updateQueue;mr=!1;var v=f.firstBaseUpdate,A=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var z=I,ae=z.next;z.next=null,A===null?v=ae:A.next=ae,A=z;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==A&&(I===null?_e.firstBaseUpdate=ae:I.next=ae,_e.lastBaseUpdate=z))}if(v!==null){var Se=f.baseState;A=0,_e=ae=z=null,I=v;do{var xe=I.lane,Ue=I.eventTime;if((c&xe)===xe){_e!==null&&(_e=_e.next={eventTime:Ue,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ve=n,qe=I;switch(xe=i,Ue=s,qe.tag){case 1:if(Ve=qe.payload,typeof Ve=="function"){Se=Ve.call(Ue,Se,xe);break e}Se=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=qe.payload,xe=typeof Ve=="function"?Ve.call(Ue,Se,xe):Ve,xe==null)break e;Se=ue({},Se,xe);break e;case 2:mr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,xe=f.effects,xe===null?f.effects=[I]:xe.push(I))}else Ue={eventTime:Ue,lane:xe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ae=_e=Ue,z=Se):_e=_e.next=Ue,A|=xe;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;xe=I,I=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(_e===null&&(z=Se),f.baseState=z,f.firstBaseUpdate=ae,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do A|=f.lane,f=f.next;while(f!==i)}else v===null&&(f.shared.lanes=0);Yr|=A,n.lanes=A,n.memoizedState=Se}}function Vh(n,i,s){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=s,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Rs={},Si=fr(Rs),Ns=fr(Rs),Ps=fr(Rs);function Xr(n){if(n===Rs)throw Error(t(174));return n}function $c(n,i){switch(Ot(Ps,i),Ot(Ns,n),Ot(Si,Rs),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ve(i,n)}zt(Si),Ot(Si,i)}function Na(){zt(Si),zt(Ns),zt(Ps)}function Hh(n){Xr(Ps.current);var i=Xr(Si.current),s=ve(i,n.type);i!==s&&(Ot(Ns,n),Ot(Si,s))}function Kc(n){Ns.current===n&&(zt(Si),zt(Ns))}var Ht=fr(0);function Wo(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Zc=[];function Qc(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var Xo=P.ReactCurrentDispatcher,Jc=P.ReactCurrentBatchConfig,qr=0,Gt=null,tn=null,sn=null,qo=!1,Ds=!1,Ls=0,A0=0;function gn(){throw Error(t(321))}function eu(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!ai(n[s],i[s]))return!1;return!0}function tu(n,i,s,c,f,v){if(qr=v,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xo.current=n===null||n.memoizedState===null?N0:P0,n=s(c,f),Ds){v=0;do{if(Ds=!1,Ls=0,25<=v)throw Error(t(301));v+=1,sn=tn=null,i.updateQueue=null,Xo.current=D0,n=s(c,f)}while(Ds)}if(Xo.current=Ko,i=tn!==null&&tn.next!==null,qr=0,sn=tn=Gt=null,qo=!1,i)throw Error(t(300));return n}function nu(){var n=Ls!==0;return Ls=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Gt.memoizedState=sn=n:sn=sn.next=n,sn}function Qn(){if(tn===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var i=sn===null?Gt.memoizedState:sn.next;if(i!==null)sn=i,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},sn===null?Gt.memoizedState=sn=n:sn=sn.next=n}return sn}function Is(n,i){return typeof i=="function"?i(n):i}function iu(n){var i=Qn(),s=i.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=n;var c=tn,f=c.baseQueue,v=s.pending;if(v!==null){if(f!==null){var A=f.next;f.next=v.next,v.next=A}c.baseQueue=f=v,s.pending=null}if(f!==null){v=f.next,c=c.baseState;var I=A=null,z=null,ae=v;do{var _e=ae.lane;if((qr&_e)===_e)z!==null&&(z=z.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),c=ae.hasEagerState?ae.eagerState:n(c,ae.action);else{var Se={lane:_e,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};z===null?(I=z=Se,A=c):z=z.next=Se,Gt.lanes|=_e,Yr|=_e}ae=ae.next}while(ae!==null&&ae!==v);z===null?A=c:z.next=I,ai(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=z,s.lastRenderedState=c}if(n=s.interleaved,n!==null){f=n;do v=f.lane,Gt.lanes|=v,Yr|=v,f=f.next;while(f!==n)}else f===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function ru(n){var i=Qn(),s=i.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=n;var c=s.dispatch,f=s.pending,v=i.memoizedState;if(f!==null){s.pending=null;var A=f=f.next;do v=n(v,A.action),A=A.next;while(A!==f);ai(v,i.memoizedState)||(Dn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),s.lastRenderedState=v}return[v,c]}function Gh(){}function Wh(n,i){var s=Gt,c=Qn(),f=i(),v=!ai(c.memoizedState,f);if(v&&(c.memoizedState=f,Dn=!0),c=c.queue,au(Yh.bind(null,s,c,n),[n]),c.getSnapshot!==i||v||sn!==null&&sn.memoizedState.tag&1){if(s.flags|=2048,Us(9,qh.bind(null,s,c,f,i),void 0,null),on===null)throw Error(t(349));(qr&30)!==0||Xh(s,i,f)}return f}function Xh(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function qh(n,i,s,c){i.value=s,i.getSnapshot=c,$h(i)&&Kh(n)}function Yh(n,i,s){return s(function(){$h(i)&&Kh(n)})}function $h(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!ai(n,s)}catch{return!0}}function Kh(n){var i=Bi(n,1);i!==null&&ui(i,n,1,-1)}function Zh(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:n},i.queue=n,n=n.dispatch=R0.bind(null,Gt,n),[i.memoizedState,n]}function Us(n,i,s,c){return n={tag:n,create:i,destroy:s,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(s=i.lastEffect,s===null?i.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,i.lastEffect=n)),n}function Qh(){return Qn().memoizedState}function Yo(n,i,s,c){var f=yi();Gt.flags|=n,f.memoizedState=Us(1|i,s,void 0,c===void 0?null:c)}function $o(n,i,s,c){var f=Qn();c=c===void 0?null:c;var v=void 0;if(tn!==null){var A=tn.memoizedState;if(v=A.destroy,c!==null&&eu(c,A.deps)){f.memoizedState=Us(i,s,v,c);return}}Gt.flags|=n,f.memoizedState=Us(1|i,s,v,c)}function Jh(n,i){return Yo(8390656,8,n,i)}function au(n,i){return $o(2048,8,n,i)}function ep(n,i){return $o(4,2,n,i)}function tp(n,i){return $o(4,4,n,i)}function np(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function ip(n,i,s){return s=s!=null?s.concat([n]):null,$o(4,4,np.bind(null,i,n),s)}function su(){}function rp(n,i){var s=Qn();i=i===void 0?null:i;var c=s.memoizedState;return c!==null&&i!==null&&eu(i,c[1])?c[0]:(s.memoizedState=[n,i],n)}function ap(n,i){var s=Qn();i=i===void 0?null:i;var c=s.memoizedState;return c!==null&&i!==null&&eu(i,c[1])?c[0]:(n=n(),s.memoizedState=[n,i],n)}function sp(n,i,s){return(qr&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=s):(ai(s,i)||(s=Cn(),Gt.lanes|=s,Yr|=s,n.baseState=!0),i)}function w0(n,i){var s=st;st=s!==0&&4>s?s:4,n(!0);var c=Jc.transition;Jc.transition={};try{n(!1),i()}finally{st=s,Jc.transition=c}}function op(){return Qn().memoizedState}function C0(n,i,s){var c=Sr(n);if(s={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null},lp(n))cp(i,s);else if(s=Bh(n,i,s,c),s!==null){var f=bn();ui(s,n,c,f),up(s,i,c)}}function R0(n,i,s){var c=Sr(n),f={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null};if(lp(n))cp(i,f);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var A=i.lastRenderedState,I=v(A,s);if(f.hasEagerState=!0,f.eagerState=I,ai(I,A)){var z=i.interleaved;z===null?(f.next=f,qc(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}s=Bh(n,i,f,c),s!==null&&(f=bn(),ui(s,n,c,f),up(s,i,c))}}function lp(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function cp(n,i){Ds=qo=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function up(n,i,s){if((s&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,s|=c,i.lanes=s,Ct(n,s)}}var Ko={readContext:Zn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},N0={readContext:Zn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:Jh,useImperativeHandle:function(n,i,s){return s=s!=null?s.concat([n]):null,Yo(4194308,4,np.bind(null,i,n),s)},useLayoutEffect:function(n,i){return Yo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Yo(4,2,n,i)},useMemo:function(n,i){var s=yi();return i=i===void 0?null:i,n=n(),s.memoizedState=[n,i],n},useReducer:function(n,i,s){var c=yi();return i=s!==void 0?s(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=C0.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:Zh,useDebugValue:su,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Zh(!1),i=n[0];return n=w0.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,s){var c=Gt,f=yi();if(Vt){if(s===void 0)throw Error(t(407));s=s()}else{if(s=i(),on===null)throw Error(t(349));(qr&30)!==0||Xh(c,i,s)}f.memoizedState=s;var v={value:s,getSnapshot:i};return f.queue=v,Jh(Yh.bind(null,c,v,n),[n]),c.flags|=2048,Us(9,qh.bind(null,c,v,s,i),void 0,null),s},useId:function(){var n=yi(),i=on.identifierPrefix;if(Vt){var s=ki,c=Oi;s=(c&~(1<<32-et(c)-1)).toString(32)+s,i=":"+i+"R"+s,s=Ls++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=A0++,i=":"+i+"r"+s.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},P0={readContext:Zn,useCallback:rp,useContext:Zn,useEffect:au,useImperativeHandle:ip,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:ap,useReducer:iu,useRef:Qh,useState:function(){return iu(Is)},useDebugValue:su,useDeferredValue:function(n){var i=Qn();return sp(i,tn.memoizedState,n)},useTransition:function(){var n=iu(Is)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Gh,useSyncExternalStore:Wh,useId:op,unstable_isNewReconciler:!1},D0={readContext:Zn,useCallback:rp,useContext:Zn,useEffect:au,useImperativeHandle:ip,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:ap,useReducer:ru,useRef:Qh,useState:function(){return ru(Is)},useDebugValue:su,useDeferredValue:function(n){var i=Qn();return tn===null?i.memoizedState=n:sp(i,tn.memoizedState,n)},useTransition:function(){var n=ru(Is)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Gh,useSyncExternalStore:Wh,useId:op,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var s in n)i[s]===void 0&&(i[s]=n[s]);return i}return i}function ou(n,i,s,c){i=n.memoizedState,s=s(c,i),s=s==null?i:ue({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Zo={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,i,s){n=n._reactInternals;var c=bn(),f=Sr(n),v=zi(c,f);v.payload=i,s!=null&&(v.callback=s),i=gr(n,v,f),i!==null&&(ui(i,n,f,c),Ho(i,n,f))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var c=bn(),f=Sr(n),v=zi(c,f);v.tag=1,v.payload=i,s!=null&&(v.callback=s),i=gr(n,v,f),i!==null&&(ui(i,n,f,c),Ho(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=bn(),c=Sr(n),f=zi(s,c);f.tag=2,i!=null&&(f.callback=i),i=gr(n,f,c),i!==null&&(ui(i,n,c,s),Ho(i,n,c))}};function dp(n,i,s,c,f,v,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,A):i.prototype&&i.prototype.isPureReactComponent?!ys(s,c)||!ys(f,v):!0}function fp(n,i,s){var c=!1,f=hr,v=i.contextType;return typeof v=="object"&&v!==null?v=Zn(v):(f=Pn(i)?Vr:mn.current,c=i.contextTypes,v=(c=c!=null)?Ma(n,f):hr),i=new i(s,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=v),i}function hp(n,i,s,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,c),i.state!==n&&Zo.enqueueReplaceState(i,i.state,null)}function lu(n,i,s,c){var f=n.stateNode;f.props=s,f.state=n.memoizedState,f.refs={},Yc(n);var v=i.contextType;typeof v=="object"&&v!==null?f.context=Zn(v):(v=Pn(i)?Vr:mn.current,f.context=Ma(n,v)),f.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(ou(n,i,v,s),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Zo.enqueueReplaceState(f,f.state,null),Go(n,s,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Pa(n,i){try{var s="",c=i;do s+=Qe(c),c=c.return;while(c);var f=s}catch(v){f=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:f,digest:null}}function cu(n,i,s){return{value:n,source:null,stack:s??null,digest:i??null}}function uu(n,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var L0=typeof WeakMap=="function"?WeakMap:Map;function pp(n,i,s){s=zi(-1,s),s.tag=3,s.payload={element:null};var c=i.value;return s.callback=function(){rl||(rl=!0,bu=c),uu(n,i)},s}function mp(n,i,s){s=zi(-1,s),s.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;s.payload=function(){return c(f)},s.callback=function(){uu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(s.callback=function(){uu(n,i),typeof c!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),s}function gp(n,i,s){var c=n.pingCache;if(c===null){c=n.pingCache=new L0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(s)||(f.add(s),n=q0.bind(null,n,i,s),i.then(n,n))}function vp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function xp(n,i,s,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=zi(-1,1),i.tag=2,gr(s,i,1))),s.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var I0=P.ReactCurrentOwner,Dn=!1;function Tn(n,i,s,c){i.child=n===null?kh(i,null,s,c):wa(i,n.child,s,c)}function _p(n,i,s,c,f){s=s.render;var v=i.ref;return Ra(i,f),c=tu(n,i,s,c,v,f),s=nu(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ji(n,i,f)):(Vt&&s&&kc(i),i.flags|=1,Tn(n,i,c,f),i.child)}function Sp(n,i,s,c,f){if(n===null){var v=s.type;return typeof v=="function"&&!Du(v)&&v.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=v,yp(n,i,v,c,f)):(n=ul(s.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&f)===0){var A=v.memoizedProps;if(s=s.compare,s=s!==null?s:ys,s(A,c)&&n.ref===i.ref)return ji(n,i,f)}return i.flags|=1,n=Er(v,c),n.ref=i.ref,n.return=i,i.child=n}function yp(n,i,s,c,f){if(n!==null){var v=n.memoizedProps;if(ys(v,c)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=c=v,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,ji(n,i,f)}return du(n,i,s,c,f)}function Ep(n,i,s){var c=i.pendingProps,f=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(La,Vn),Vn|=s;else{if((s&1073741824)===0)return n=v!==null?v.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ot(La,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:s,Ot(La,Vn),Vn|=c}else v!==null?(c=v.baseLanes|s,i.memoizedState=null):c=s,Ot(La,Vn),Vn|=c;return Tn(n,i,f,s),i.child}function Mp(n,i){var s=i.ref;(n===null&&s!==null||n!==null&&n.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function du(n,i,s,c,f){var v=Pn(s)?Vr:mn.current;return v=Ma(i,v),Ra(i,f),s=tu(n,i,s,c,v,f),c=nu(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ji(n,i,f)):(Vt&&c&&kc(i),i.flags|=1,Tn(n,i,s,f),i.child)}function Tp(n,i,s,c,f){if(Pn(s)){var v=!0;Uo(i)}else v=!1;if(Ra(i,f),i.stateNode===null)Jo(n,i),fp(i,s,c),lu(i,s,c,f),c=!0;else if(n===null){var A=i.stateNode,I=i.memoizedProps;A.props=I;var z=A.context,ae=s.contextType;typeof ae=="object"&&ae!==null?ae=Zn(ae):(ae=Pn(s)?Vr:mn.current,ae=Ma(i,ae));var _e=s.getDerivedStateFromProps,Se=typeof _e=="function"||typeof A.getSnapshotBeforeUpdate=="function";Se||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(I!==c||z!==ae)&&hp(i,A,c,ae),mr=!1;var xe=i.memoizedState;A.state=xe,Go(i,c,A,f),z=i.memoizedState,I!==c||xe!==z||Nn.current||mr?(typeof _e=="function"&&(ou(i,s,_e,c),z=i.memoizedState),(I=mr||dp(i,s,I,c,xe,z,ae))?(Se||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),A.props=c,A.state=z,A.context=ae,c=I):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,zh(n,i),I=i.memoizedProps,ae=i.type===i.elementType?I:oi(i.type,I),A.props=ae,Se=i.pendingProps,xe=A.context,z=s.contextType,typeof z=="object"&&z!==null?z=Zn(z):(z=Pn(s)?Vr:mn.current,z=Ma(i,z));var Ue=s.getDerivedStateFromProps;(_e=typeof Ue=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(I!==Se||xe!==z)&&hp(i,A,c,z),mr=!1,xe=i.memoizedState,A.state=xe,Go(i,c,A,f);var Ve=i.memoizedState;I!==Se||xe!==Ve||Nn.current||mr?(typeof Ue=="function"&&(ou(i,s,Ue,c),Ve=i.memoizedState),(ae=mr||dp(i,s,ae,c,xe,Ve,z)||!1)?(_e||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Ve,z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Ve,z)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ve),A.props=c,A.state=Ve,A.context=z,c=ae):(typeof A.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return fu(n,i,s,c,v,f)}function fu(n,i,s,c,f,v){Mp(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return f&&Rh(i,s,!1),ji(n,i,v);c=i.stateNode,I0.current=i;var I=A&&typeof s.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=wa(i,n.child,null,v),i.child=wa(i,null,I,v)):Tn(n,i,I,v),i.memoizedState=c.state,f&&Rh(i,s,!0),i.child}function bp(n){var i=n.stateNode;i.pendingContext?wh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&wh(n,i.context,!1),$c(n,i.containerInfo)}function Ap(n,i,s,c,f){return Aa(),Vc(f),i.flags|=256,Tn(n,i,s,c),i.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function wp(n,i,s){var c=i.pendingProps,f=Ht.current,v=!1,A=(i.flags&128)!==0,I;if((I=A)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ot(Ht,f&1),n===null)return jc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,v?(c=i.mode,v=i.child,A={mode:"hidden",children:A},(c&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=A):v=dl(A,c,0,null),n=Qr(n,c,s,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=pu(s),i.memoizedState=hu,n):mu(i,A));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return U0(n,i,A,c,I,f,s);if(v){v=c.fallback,A=i.mode,f=n.child,I=f.sibling;var z={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=Er(f,z),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?v=Er(I,v):(v=Qr(v,A,s,null),v.flags|=2),v.return=i,c.return=i,c.sibling=v,i.child=c,c=v,v=i.child,A=n.child.memoizedState,A=A===null?pu(s):{baseLanes:A.baseLanes|s,cachePool:null,transitions:A.transitions},v.memoizedState=A,v.childLanes=n.childLanes&~s,i.memoizedState=hu,c}return v=n.child,n=v.sibling,c=Er(v,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=s),c.return=i,c.sibling=null,n!==null&&(s=i.deletions,s===null?(i.deletions=[n],i.flags|=16):s.push(n)),i.child=c,i.memoizedState=null,c}function mu(n,i){return i=dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Qo(n,i,s,c){return c!==null&&Vc(c),wa(i,n.child,null,s),n=mu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function U0(n,i,s,c,f,v,A){if(s)return i.flags&256?(i.flags&=-257,c=cu(Error(t(422))),Qo(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=c.fallback,f=i.mode,c=dl({mode:"visible",children:c.children},f,0,null),v=Qr(v,f,A,null),v.flags|=2,c.return=i,v.return=i,c.sibling=v,i.child=c,(i.mode&1)!==0&&wa(i,n.child,null,A),i.child.memoizedState=pu(A),i.memoizedState=hu,v);if((i.mode&1)===0)return Qo(n,i,A,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,v=Error(t(419)),c=cu(v,c,void 0),Qo(n,i,A,c)}if(I=(A&n.childLanes)!==0,Dn||I){if(c=on,c!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|A))!==0?0:f,f!==0&&f!==v.retryLane&&(v.retryLane=f,Bi(n,f),ui(c,n,f,-1))}return Pu(),c=cu(Error(t(421))),Qo(n,i,A,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Y0.bind(null,n),f._reactRetry=i,null):(n=v.treeContext,jn=dr(f.nextSibling),zn=i,Vt=!0,si=null,n!==null&&($n[Kn++]=Oi,$n[Kn++]=ki,$n[Kn++]=Hr,Oi=n.id,ki=n.overflow,Hr=i),i=mu(i,c.children),i.flags|=4096,i)}function Cp(n,i,s){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Xc(n.return,i,s)}function gu(n,i,s,c,f){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:f}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=s,v.tailMode=f)}function Rp(n,i,s){var c=i.pendingProps,f=c.revealOrder,v=c.tail;if(Tn(n,i,c.children,s),c=Ht.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Cp(n,s,i);else if(n.tag===19)Cp(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ot(Ht,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(s=i.child,f=null;s!==null;)n=s.alternate,n!==null&&Wo(n)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),gu(i,!1,f,s,v);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Wo(n)===null){i.child=f;break}n=f.sibling,f.sibling=s,s=f,f=n}gu(i,!0,s,null,v);break;case"together":gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Jo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ji(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),Yr|=i.lanes,(s&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,s=Er(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=Er(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function F0(n,i,s){switch(i.tag){case 3:bp(i),Aa();break;case 5:Hh(i);break;case 1:Pn(i.type)&&Uo(i);break;case 4:$c(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ot(jo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ot(Ht,Ht.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?wp(n,i,s):(Ot(Ht,Ht.current&1),n=ji(n,i,s),n!==null?n.sibling:null);Ot(Ht,Ht.current&1);break;case 19:if(c=(s&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Rp(n,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ot(Ht,Ht.current),c)break;return null;case 22:case 23:return i.lanes=0,Ep(n,i,s)}return ji(n,i,s)}var Np,vu,Pp,Dp;Np=function(n,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},vu=function(){},Pp=function(n,i,s,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Xr(Si.current);var v=null;switch(s){case"input":f=yt(n,f),c=yt(n,c),v=[];break;case"select":f=ue({},f,{value:void 0}),c=ue({},c,{value:void 0}),v=[];break;case"textarea":f=Ge(n,f),c=Ge(n,c),v=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Do)}ze(s,c);var A;s=null;for(ae in f)if(!c.hasOwnProperty(ae)&&f.hasOwnProperty(ae)&&f[ae]!=null)if(ae==="style"){var I=f[ae];for(A in I)I.hasOwnProperty(A)&&(s||(s={}),s[A]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?v||(v=[]):(v=v||[]).push(ae,null));for(ae in c){var z=c[ae];if(I=f!=null?f[ae]:void 0,c.hasOwnProperty(ae)&&z!==I&&(z!=null||I!=null))if(ae==="style")if(I){for(A in I)!I.hasOwnProperty(A)||z&&z.hasOwnProperty(A)||(s||(s={}),s[A]="");for(A in z)z.hasOwnProperty(A)&&I[A]!==z[A]&&(s||(s={}),s[A]=z[A])}else s||(v||(v=[]),v.push(ae,s)),s=z;else ae==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(v=v||[]).push(ae,z)):ae==="children"?typeof z!="string"&&typeof z!="number"||(v=v||[]).push(ae,""+z):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(z!=null&&ae==="onScroll"&&Bt("scroll",n),v||I===z||(v=[])):(v=v||[]).push(ae,z))}s&&(v=v||[]).push("style",s);var ae=v;(i.updateQueue=ae)&&(i.flags|=4)}},Dp=function(n,i,s,c){s!==c&&(i.flags|=4)};function Fs(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(i)for(var f=n.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=s,i}function O0(n,i,s){var c=i.pendingProps;switch(Bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Pn(i.type)&&Io(),vn(i),null;case 3:return c=i.stateNode,Na(),zt(Nn),zt(mn),Qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(Cu(si),si=null))),vu(n,i),vn(i),null;case 5:Kc(i);var f=Xr(Ps.current);if(s=i.type,n!==null&&i.stateNode!=null)Pp(n,i,s,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=Xr(Si.current),Bo(i)){c=i.stateNode,s=i.type;var v=i.memoizedProps;switch(c[_i]=i,c[As]=v,n=(i.mode&1)!==0,s){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(f=0;f<Ms.length;f++)Bt(Ms[f],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":Rt(c,v),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},Bt("invalid",c);break;case"textarea":D(c,v),Bt("invalid",c)}ze(s,v),f=null;for(var A in v)if(v.hasOwnProperty(A)){var I=v[A];A==="children"?typeof I=="string"?c.textContent!==I&&(v.suppressHydrationWarning!==!0&&Po(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&Po(c.textContent,I,n),f=["children",""+I]):o.hasOwnProperty(A)&&I!=null&&A==="onScroll"&&Bt("scroll",c)}switch(s){case"input":it(c),j(c,v,!0);break;case"textarea":it(c),G(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=Do)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(s)),n==="http://www.w3.org/1999/xhtml"?s==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(s,{is:c.is}):(n=A.createElement(s),s==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,s),n[_i]=i,n[As]=c,Np(n,i,!1,!1),i.stateNode=n;e:{switch(A=De(s,c),s){case"dialog":Bt("cancel",n),Bt("close",n),f=c;break;case"iframe":case"object":case"embed":Bt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Ms.length;f++)Bt(Ms[f],n);f=c;break;case"source":Bt("error",n),f=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),f=c;break;case"details":Bt("toggle",n),f=c;break;case"input":Rt(n,c),f=yt(n,c),Bt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=ue({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":D(n,c),f=Ge(n,c),Bt("invalid",n);break;default:f=c}ze(s,f),I=f;for(v in I)if(I.hasOwnProperty(v)){var z=I[v];v==="style"?be(n,z):v==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Be(n,z)):v==="children"?typeof z=="string"?(s!=="textarea"||z!=="")&&Ae(n,z):typeof z=="number"&&Ae(n,""+z):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?z!=null&&v==="onScroll"&&Bt("scroll",n):z!=null&&L(n,v,z,A))}switch(s){case"input":it(n),j(n,c,!1);break;case"textarea":it(n),G(n);break;case"option":c.value!=null&&n.setAttribute("value",""+me(c.value));break;case"select":n.multiple=!!c.multiple,v=c.value,v!=null?Et(n,!!c.multiple,v,!1):c.defaultValue!=null&&Et(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Do)}switch(s){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)Dp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(s=Xr(Ps.current),Xr(Si.current),Bo(i)){if(c=i.stateNode,s=i.memoizedProps,c[_i]=i,(v=c.nodeValue!==s)&&(n=zn,n!==null))switch(n.tag){case 3:Po(c.nodeValue,s,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Po(c.nodeValue,s,(n.mode&1)!==0)}v&&(i.flags|=4)}else c=(s.nodeType===9?s:s.ownerDocument).createTextNode(c),c[_i]=i,i.stateNode=c}return vn(i),null;case 13:if(zt(Ht),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Uh(),Aa(),i.flags|=98560,v=!1;else if(v=Bo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[_i]=i}else Aa(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),v=!1}else si!==null&&(Cu(si),si=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?nn===0&&(nn=3):Pu())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Na(),vu(n,i),n===null&&Ts(i.stateNode.containerInfo),vn(i),null;case 10:return Wc(i.type._context),vn(i),null;case 17:return Pn(i.type)&&Io(),vn(i),null;case 19:if(zt(Ht),v=i.memoizedState,v===null)return vn(i),null;if(c=(i.flags&128)!==0,A=v.rendering,A===null)if(c)Fs(v,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=Wo(n),A!==null){for(i.flags|=128,Fs(v,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=s,s=i.child;s!==null;)v=s,n=c,v.flags&=14680066,A=v.alternate,A===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=A.childLanes,v.lanes=A.lanes,v.child=A.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=A.memoizedProps,v.memoizedState=A.memoizedState,v.updateQueue=A.updateQueue,v.type=A.type,n=A.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),s=s.sibling;return Ot(Ht,Ht.current&1|2),i.child}n=n.sibling}v.tail!==null&&w()>Ia&&(i.flags|=128,c=!0,Fs(v,!1),i.lanes=4194304)}else{if(!c)if(n=Wo(A),n!==null){if(i.flags|=128,c=!0,s=n.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Fs(v,!0),v.tail===null&&v.tailMode==="hidden"&&!A.alternate&&!Vt)return vn(i),null}else 2*w()-v.renderingStartTime>Ia&&s!==1073741824&&(i.flags|=128,c=!0,Fs(v,!1),i.lanes=4194304);v.isBackwards?(A.sibling=i.child,i.child=A):(s=v.last,s!==null?s.sibling=A:i.child=A,v.last=A)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=w(),i.sibling=null,s=Ht.current,Ot(Ht,c?s&1|2:s&1),i):(vn(i),null);case 22:case 23:return Nu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function k0(n,i){switch(Bc(i),i.tag){case 1:return Pn(i.type)&&Io(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Na(),zt(Nn),zt(mn),Qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Kc(i),null;case 13:if(zt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Aa()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Ht),null;case 4:return Na(),null;case 10:return Wc(i.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var el=!1,xn=!1,B0=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Da(n,i){var s=n.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(c){Wt(n,i,c)}else s.current=null}function xu(n,i,s){try{s()}catch(c){Wt(n,i,c)}}var Lp=!1;function z0(n,i){if(Nc=So,n=dh(),Ec(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{s.nodeType,v.nodeType}catch{s=null;break e}var A=0,I=-1,z=-1,ae=0,_e=0,Se=n,xe=null;t:for(;;){for(var Ue;Se!==s||f!==0&&Se.nodeType!==3||(I=A+f),Se!==v||c!==0&&Se.nodeType!==3||(z=A+c),Se.nodeType===3&&(A+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)xe=Se,Se=Ue;for(;;){if(Se===n)break t;if(xe===s&&++ae===f&&(I=A),xe===v&&++_e===c&&(z=A),(Ue=Se.nextSibling)!==null)break;Se=xe,xe=Se.parentNode}Se=Ue}s=I===-1||z===-1?null:{start:I,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Pc={focusedElem:n,selectionRange:s},So=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var qe=Ve.memoizedProps,$t=Ve.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?qe:oi(i.type,qe),$t);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Wt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return Ve=Lp,Lp=!1,Ve}function Os(n,i,s){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var v=f.destroy;f.destroy=void 0,v!==void 0&&xu(i,s,v)}f=f.next}while(f!==c)}}function tl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&n)===n){var c=s.create;s.destroy=c()}s=s.next}while(s!==i)}}function _u(n){var i=n.ref;if(i!==null){var s=n.stateNode;switch(n.tag){case 5:n=s;break;default:n=s}typeof i=="function"?i(n):i.current=n}}function Ip(n){var i=n.alternate;i!==null&&(n.alternate=null,Ip(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_i],delete i[As],delete i[Uc],delete i[E0],delete i[M0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Up(n){return n.tag===5||n.tag===3||n.tag===4}function Fp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Up(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Su(n,i,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(n,i):s.insertBefore(n,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(n,s)):(i=s,i.appendChild(n)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Do));else if(c!==4&&(n=n.child,n!==null))for(Su(n,i,s),n=n.sibling;n!==null;)Su(n,i,s),n=n.sibling}function yu(n,i,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(yu(n,i,s),n=n.sibling;n!==null;)yu(n,i,s),n=n.sibling}var un=null,li=!1;function vr(n,i,s){for(s=s.child;s!==null;)Op(n,i,s),s=s.sibling}function Op(n,i,s){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(Re,s)}catch{}switch(s.tag){case 5:xn||Da(s,i);case 6:var c=un,f=li;un=null,vr(n,i,s),un=c,li=f,un!==null&&(li?(n=un,s=s.stateNode,n.nodeType===8?n.parentNode.removeChild(s):n.removeChild(s)):un.removeChild(s.stateNode));break;case 18:un!==null&&(li?(n=un,s=s.stateNode,n.nodeType===8?Ic(n.parentNode,s):n.nodeType===1&&Ic(n,s),ms(n)):Ic(un,s.stateNode));break;case 4:c=un,f=li,un=s.stateNode.containerInfo,li=!0,vr(n,i,s),un=c,li=f;break;case 0:case 11:case 14:case 15:if(!xn&&(c=s.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var v=f,A=v.destroy;v=v.tag,A!==void 0&&((v&2)!==0||(v&4)!==0)&&xu(s,i,A),f=f.next}while(f!==c)}vr(n,i,s);break;case 1:if(!xn&&(Da(s,i),c=s.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=s.memoizedProps,c.state=s.memoizedState,c.componentWillUnmount()}catch(I){Wt(s,i,I)}vr(n,i,s);break;case 21:vr(n,i,s);break;case 22:s.mode&1?(xn=(c=xn)||s.memoizedState!==null,vr(n,i,s),xn=c):vr(n,i,s);break;default:vr(n,i,s)}}function kp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var s=n.stateNode;s===null&&(s=n.stateNode=new B0),i.forEach(function(c){var f=$0.bind(null,n,c);s.has(c)||(s.add(c),c.then(f,f))})}}function ci(n,i){var s=i.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c];try{var v=n,A=i,I=A;e:for(;I!==null;){switch(I.tag){case 5:un=I.stateNode,li=!1;break e;case 3:un=I.stateNode.containerInfo,li=!0;break e;case 4:un=I.stateNode.containerInfo,li=!0;break e}I=I.return}if(un===null)throw Error(t(160));Op(v,A,f),un=null,li=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(ae){Wt(f,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Bp(i,n),i=i.sibling}function Bp(n,i){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(i,n),Ei(n),c&4){try{Os(3,n,n.return),tl(3,n)}catch(qe){Wt(n,n.return,qe)}try{Os(5,n,n.return)}catch(qe){Wt(n,n.return,qe)}}break;case 1:ci(i,n),Ei(n),c&512&&s!==null&&Da(s,s.return);break;case 5:if(ci(i,n),Ei(n),c&512&&s!==null&&Da(s,s.return),n.flags&32){var f=n.stateNode;try{Ae(f,"")}catch(qe){Wt(n,n.return,qe)}}if(c&4&&(f=n.stateNode,f!=null)){var v=n.memoizedProps,A=s!==null?s.memoizedProps:v,I=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&dt(f,v),De(I,A);var ae=De(I,v);for(A=0;A<z.length;A+=2){var _e=z[A],Se=z[A+1];_e==="style"?be(f,Se):_e==="dangerouslySetInnerHTML"?Be(f,Se):_e==="children"?Ae(f,Se):L(f,_e,Se,ae)}switch(I){case"input":kt(f,v);break;case"textarea":T(f,v);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!v.multiple;var Ue=v.value;Ue!=null?Et(f,!!v.multiple,Ue,!1):xe!==!!v.multiple&&(v.defaultValue!=null?Et(f,!!v.multiple,v.defaultValue,!0):Et(f,!!v.multiple,v.multiple?[]:"",!1))}f[As]=v}catch(qe){Wt(n,n.return,qe)}}break;case 6:if(ci(i,n),Ei(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,v=n.memoizedProps;try{f.nodeValue=v}catch(qe){Wt(n,n.return,qe)}}break;case 3:if(ci(i,n),Ei(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{ms(i.containerInfo)}catch(qe){Wt(n,n.return,qe)}break;case 4:ci(i,n),Ei(n);break;case 13:ci(i,n),Ei(n),f=n.child,f.flags&8192&&(v=f.memoizedState!==null,f.stateNode.isHidden=v,!v||f.alternate!==null&&f.alternate.memoizedState!==null||(Tu=w())),c&4&&kp(n);break;case 22:if(_e=s!==null&&s.memoizedState!==null,n.mode&1?(xn=(ae=xn)||_e,ci(i,n),xn=ae):ci(i,n),Ei(n),c&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!_e&&(n.mode&1)!==0)for(ke=n,_e=n.child;_e!==null;){for(Se=ke=_e;ke!==null;){switch(xe=ke,Ue=xe.child,xe.tag){case 0:case 11:case 14:case 15:Os(4,xe,xe.return);break;case 1:Da(xe,xe.return);var Ve=xe.stateNode;if(typeof Ve.componentWillUnmount=="function"){c=xe,s=xe.return;try{i=c,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(qe){Wt(c,s,qe)}}break;case 5:Da(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Vp(Se);continue}}Ue!==null?(Ue.return=xe,ke=Ue):Vp(Se)}_e=_e.sibling}e:for(_e=null,Se=n;;){if(Se.tag===5){if(_e===null){_e=Se;try{f=Se.stateNode,ae?(v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=Se.stateNode,z=Se.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=ye("display",A))}catch(qe){Wt(n,n.return,qe)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ae?"":Se.memoizedProps}catch(qe){Wt(n,n.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ci(i,n),Ei(n),c&4&&kp(n);break;case 21:break;default:ci(i,n),Ei(n)}}function Ei(n){var i=n.flags;if(i&2){try{e:{for(var s=n.return;s!==null;){if(Up(s)){var c=s;break e}s=s.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Ae(f,""),c.flags&=-33);var v=Fp(n);yu(n,v,f);break;case 3:case 4:var A=c.stateNode.containerInfo,I=Fp(n);Su(n,I,A);break;default:throw Error(t(161))}}catch(z){Wt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function j0(n,i,s){ke=n,zp(n)}function zp(n,i,s){for(var c=(n.mode&1)!==0;ke!==null;){var f=ke,v=f.child;if(f.tag===22&&c){var A=f.memoizedState!==null||el;if(!A){var I=f.alternate,z=I!==null&&I.memoizedState!==null||xn;I=el;var ae=xn;if(el=A,(xn=z)&&!ae)for(ke=f;ke!==null;)A=ke,z=A.child,A.tag===22&&A.memoizedState!==null?Hp(f):z!==null?(z.return=A,ke=z):Hp(f);for(;v!==null;)ke=v,zp(v),v=v.sibling;ke=f,el=I,xn=ae}jp(n)}else(f.subtreeFlags&8772)!==0&&v!==null?(v.return=f,ke=v):jp(n)}}function jp(n){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||tl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!xn)if(s===null)c.componentDidMount();else{var f=i.elementType===i.type?s.memoizedProps:oi(i.type,s.memoizedProps);c.componentDidUpdate(f,s.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&Vh(i,v,c);break;case 3:var A=i.updateQueue;if(A!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Vh(i,A,s)}break;case 5:var I=i.stateNode;if(s===null&&i.flags&4){s=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&s.focus();break;case"img":z.src&&(s.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var _e=ae.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&ms(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||i.flags&512&&_u(i)}catch(xe){Wt(i,i.return,xe)}}if(i===n){ke=null;break}if(s=i.sibling,s!==null){s.return=i.return,ke=s;break}ke=i.return}}function Vp(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var s=i.sibling;if(s!==null){s.return=i.return,ke=s;break}ke=i.return}}function Hp(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{tl(4,i)}catch(z){Wt(i,s,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(z){Wt(i,f,z)}}var v=i.return;try{_u(i)}catch(z){Wt(i,v,z)}break;case 5:var A=i.return;try{_u(i)}catch(z){Wt(i,A,z)}}}catch(z){Wt(i,i.return,z)}if(i===n){ke=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ke=I;break}ke=i.return}}var V0=Math.ceil,nl=P.ReactCurrentDispatcher,Eu=P.ReactCurrentOwner,Jn=P.ReactCurrentBatchConfig,Tt=0,on=null,Zt=null,dn=0,Vn=0,La=fr(0),nn=0,ks=null,Yr=0,il=0,Mu=0,Bs=null,Ln=null,Tu=0,Ia=1/0,Vi=null,rl=!1,bu=null,xr=null,al=!1,_r=null,sl=0,zs=0,Au=null,ol=-1,ll=0;function bn(){return(Tt&6)!==0?w():ol!==-1?ol:ol=w()}function Sr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&dn!==0?dn&-dn:b0.transition!==null?(ll===0&&(ll=Cn()),ll):(n=st,n!==0||(n=window.event,n=n===void 0?16:Wf(n.type)),n)}function ui(n,i,s,c){if(50<zs)throw zs=0,Au=null,Error(t(185));kn(n,s,c),((Tt&2)===0||n!==on)&&(n===on&&((Tt&2)===0&&(il|=s),nn===4&&yr(n,dn)),In(n,c),s===1&&Tt===0&&(i.mode&1)===0&&(Ia=w()+500,Fo&&pr()))}function In(n,i){var s=n.callbackNode;Mn(n,i);var c=qt(n,n===on?dn:0);if(c===0)s!==null&&vo(s),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(s!=null&&vo(s),i===1)n.tag===0?T0(Wp.bind(null,n)):Nh(Wp.bind(null,n)),S0(function(){(Tt&6)===0&&pr()}),s=null;else{switch(ri(c)){case 1:s=oe;break;case 4:s=ne;break;case 16:s=Q;break;case 536870912:s=Fe;break;default:s=Q}s=Jp(s,Gp.bind(null,n))}n.callbackPriority=i,n.callbackNode=s}}function Gp(n,i){if(ol=-1,ll=0,(Tt&6)!==0)throw Error(t(327));var s=n.callbackNode;if(Ua()&&n.callbackNode!==s)return null;var c=qt(n,n===on?dn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=cl(n,c);else{i=c;var f=Tt;Tt|=2;var v=qp();(on!==n||dn!==i)&&(Vi=null,Ia=w()+500,Kr(n,i));do try{W0();break}catch(I){Xp(n,I)}while(!0);Gc(),nl.current=v,Tt=f,Zt!==null?i=0:(on=null,dn=0,i=nn)}if(i!==0){if(i===2&&(f=xt(n),f!==0&&(c=f,i=wu(n,f))),i===1)throw s=ks,Kr(n,0),yr(n,c),In(n,w()),s;if(i===6)yr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!H0(f)&&(i=cl(n,c),i===2&&(v=xt(n),v!==0&&(c=v,i=wu(n,v))),i===1))throw s=ks,Kr(n,0),yr(n,c),In(n,w()),s;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Zr(n,Ln,Vi);break;case 3:if(yr(n,c),(c&130023424)===c&&(i=Tu+500-w(),10<i)){if(qt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){bn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Lc(Zr.bind(null,n,Ln,Vi),i);break}Zr(n,Ln,Vi);break;case 4:if(yr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var A=31-et(c);v=1<<A,A=i[A],A>f&&(f=A),c&=~v}if(c=f,c=w()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*V0(c/1960))-c,10<c){n.timeoutHandle=Lc(Zr.bind(null,n,Ln,Vi),c);break}Zr(n,Ln,Vi);break;case 5:Zr(n,Ln,Vi);break;default:throw Error(t(329))}}}return In(n,w()),n.callbackNode===s?Gp.bind(null,n):null}function wu(n,i){var s=Bs;return n.current.memoizedState.isDehydrated&&(Kr(n,i).flags|=256),n=cl(n,i),n!==2&&(i=Ln,Ln=s,i!==null&&Cu(i)),n}function Cu(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function H0(n){for(var i=n;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var c=0;c<s.length;c++){var f=s[c],v=f.getSnapshot;f=f.value;try{if(!ai(v(),f))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(n,i){for(i&=~Mu,i&=~il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var s=31-et(i),c=1<<s;n[s]=-1,i&=~c}}function Wp(n){if((Tt&6)!==0)throw Error(t(327));Ua();var i=qt(n,0);if((i&1)===0)return In(n,w()),null;var s=cl(n,i);if(n.tag!==0&&s===2){var c=xt(n);c!==0&&(i=c,s=wu(n,c))}if(s===1)throw s=ks,Kr(n,0),yr(n,i),In(n,w()),s;if(s===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Zr(n,Ln,Vi),In(n,w()),null}function Ru(n,i){var s=Tt;Tt|=1;try{return n(i)}finally{Tt=s,Tt===0&&(Ia=w()+500,Fo&&pr())}}function $r(n){_r!==null&&_r.tag===0&&(Tt&6)===0&&Ua();var i=Tt;Tt|=1;var s=Jn.transition,c=st;try{if(Jn.transition=null,st=1,n)return n()}finally{st=c,Jn.transition=s,Tt=i,(Tt&6)===0&&pr()}}function Nu(){Vn=La.current,zt(La)}function Kr(n,i){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;if(s!==-1&&(n.timeoutHandle=-1,_0(s)),Zt!==null)for(s=Zt.return;s!==null;){var c=s;switch(Bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Io();break;case 3:Na(),zt(Nn),zt(mn),Qc();break;case 5:Kc(c);break;case 4:Na();break;case 13:zt(Ht);break;case 19:zt(Ht);break;case 10:Wc(c.type._context);break;case 22:case 23:Nu()}s=s.return}if(on=n,Zt=n=Er(n.current,null),dn=Vn=i,nn=0,ks=null,Mu=il=Yr=0,Ln=Bs=null,Wr!==null){for(i=0;i<Wr.length;i++)if(s=Wr[i],c=s.interleaved,c!==null){s.interleaved=null;var f=c.next,v=s.pending;if(v!==null){var A=v.next;v.next=f,c.next=A}s.pending=c}Wr=null}return n}function Xp(n,i){do{var s=Zt;try{if(Gc(),Xo.current=Ko,qo){for(var c=Gt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}qo=!1}if(qr=0,sn=tn=Gt=null,Ds=!1,Ls=0,Eu.current=null,s===null||s.return===null){nn=1,ks=i,Zt=null;break}e:{var v=n,A=s.return,I=s,z=i;if(i=dn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ae=z,_e=I,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var xe=_e.alternate;xe?(_e.updateQueue=xe.updateQueue,_e.memoizedState=xe.memoizedState,_e.lanes=xe.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ue=vp(A);if(Ue!==null){Ue.flags&=-257,xp(Ue,A,I,v,i),Ue.mode&1&&gp(v,ae,i),i=Ue,z=ae;var Ve=i.updateQueue;if(Ve===null){var qe=new Set;qe.add(z),i.updateQueue=qe}else Ve.add(z);break e}else{if((i&1)===0){gp(v,ae,i),Pu();break e}z=Error(t(426))}}else if(Vt&&I.mode&1){var $t=vp(A);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),xp($t,A,I,v,i),Vc(Pa(z,I));break e}}v=z=Pa(z,I),nn!==4&&(nn=2),Bs===null?Bs=[v]:Bs.push(v),v=A;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var Y=pp(v,z,i);jh(v,Y);break e;case 1:I=z;var H=v.type,te=v.stateNode;if((v.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(xr===null||!xr.has(te)))){v.flags|=65536,i&=-i,v.lanes|=i;var Te=mp(v,I,i);jh(v,Te);break e}}v=v.return}while(v!==null)}$p(s)}catch(Ke){i=Ke,Zt===s&&s!==null&&(Zt=s=s.return);continue}break}while(!0)}function qp(){var n=nl.current;return nl.current=Ko,n===null?Ko:n}function Pu(){(nn===0||nn===3||nn===2)&&(nn=4),on===null||(Yr&268435455)===0&&(il&268435455)===0||yr(on,dn)}function cl(n,i){var s=Tt;Tt|=2;var c=qp();(on!==n||dn!==i)&&(Vi=null,Kr(n,i));do try{G0();break}catch(f){Xp(n,f)}while(!0);if(Gc(),Tt=s,nl.current=c,Zt!==null)throw Error(t(261));return on=null,dn=0,nn}function G0(){for(;Zt!==null;)Yp(Zt)}function W0(){for(;Zt!==null&&!lc();)Yp(Zt)}function Yp(n){var i=Qp(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?$p(n):Zt=i,Eu.current=null}function $p(n){var i=n;do{var s=i.alternate;if(n=i.return,(i.flags&32768)===0){if(s=O0(s,i,Vn),s!==null){Zt=s;return}}else{if(s=k0(s,i),s!==null){s.flags&=32767,Zt=s;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=n}while(i!==null);nn===0&&(nn=5)}function Zr(n,i,s){var c=st,f=Jn.transition;try{Jn.transition=null,st=1,X0(n,i,s,c)}finally{Jn.transition=f,st=c}return null}function X0(n,i,s,c){do Ua();while(_r!==null);if((Tt&6)!==0)throw Error(t(327));s=n.finishedWork;var f=n.finishedLanes;if(s===null)return null;if(n.finishedWork=null,n.finishedLanes=0,s===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=s.lanes|s.childLanes;if(rr(n,v),n===on&&(Zt=on=null,dn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||al||(al=!0,Jp(Q,function(){return Ua(),null})),v=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||v){v=Jn.transition,Jn.transition=null;var A=st;st=1;var I=Tt;Tt|=4,Eu.current=null,z0(n,s),Bp(s,n),f0(Pc),So=!!Nc,Pc=Nc=null,n.current=s,j0(s),cc(),Tt=I,st=A,Jn.transition=v}else n.current=s;if(al&&(al=!1,_r=n,sl=f),v=n.pendingLanes,v===0&&(xr=null),Ze(s.stateNode),In(n,w()),i!==null)for(c=n.onRecoverableError,s=0;s<i.length;s++)f=i[s],c(f.value,{componentStack:f.stack,digest:f.digest});if(rl)throw rl=!1,n=bu,bu=null,n;return(sl&1)!==0&&n.tag!==0&&Ua(),v=n.pendingLanes,(v&1)!==0?n===Au?zs++:(zs=0,Au=n):zs=0,pr(),null}function Ua(){if(_r!==null){var n=ri(sl),i=Jn.transition,s=st;try{if(Jn.transition=null,st=16>n?16:n,_r===null)var c=!1;else{if(n=_r,_r=null,sl=0,(Tt&6)!==0)throw Error(t(331));var f=Tt;for(Tt|=4,ke=n.current;ke!==null;){var v=ke,A=v.child;if((ke.flags&16)!==0){var I=v.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ae=I[z];for(ke=ae;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:Os(8,_e,v)}var Se=_e.child;if(Se!==null)Se.return=_e,ke=Se;else for(;ke!==null;){_e=ke;var xe=_e.sibling,Ue=_e.return;if(Ip(_e),_e===ae){ke=null;break}if(xe!==null){xe.return=Ue,ke=xe;break}ke=Ue}}}var Ve=v.alternate;if(Ve!==null){var qe=Ve.child;if(qe!==null){Ve.child=null;do{var $t=qe.sibling;qe.sibling=null,qe=$t}while(qe!==null)}}ke=v}}if((v.subtreeFlags&2064)!==0&&A!==null)A.return=v,ke=A;else e:for(;ke!==null;){if(v=ke,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Os(9,v,v.return)}var Y=v.sibling;if(Y!==null){Y.return=v.return,ke=Y;break e}ke=v.return}}var H=n.current;for(ke=H;ke!==null;){A=ke;var te=A.child;if((A.subtreeFlags&2064)!==0&&te!==null)te.return=A,ke=te;else e:for(A=H;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:tl(9,I)}}catch(Ke){Wt(I,I.return,Ke)}if(I===A){ke=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,ke=Te;break e}ke=I.return}}if(Tt=f,pr(),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(Re,n)}catch{}c=!0}return c}finally{st=s,Jn.transition=i}}return!1}function Kp(n,i,s){i=Pa(s,i),i=pp(n,i,1),n=gr(n,i,1),i=bn(),n!==null&&(kn(n,1,i),In(n,i))}function Wt(n,i,s){if(n.tag===3)Kp(n,n,s);else for(;i!==null;){if(i.tag===3){Kp(i,n,s);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(xr===null||!xr.has(c))){n=Pa(s,n),n=mp(i,n,1),i=gr(i,n,1),n=bn(),i!==null&&(kn(i,1,n),In(i,n));break}}i=i.return}}function q0(n,i,s){var c=n.pingCache;c!==null&&c.delete(i),i=bn(),n.pingedLanes|=n.suspendedLanes&s,on===n&&(dn&s)===s&&(nn===4||nn===3&&(dn&130023424)===dn&&500>w()-Tu?Kr(n,0):Mu|=s),In(n,i)}function Zp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ut,Ut<<=1,(Ut&130023424)===0&&(Ut=4194304)));var s=bn();n=Bi(n,i),n!==null&&(kn(n,i,s),In(n,s))}function Y0(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),Zp(n,s)}function $0(n,i){var s=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(s=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Zp(n,s)}var Qp;Qp=function(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps||Nn.current)Dn=!0;else{if((n.lanes&s)===0&&(i.flags&128)===0)return Dn=!1,F0(n,i,s);Dn=(n.flags&131072)!==0}else Dn=!1,Vt&&(i.flags&1048576)!==0&&Ph(i,ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Jo(n,i),n=i.pendingProps;var f=Ma(i,mn.current);Ra(i,s),f=tu(null,i,c,n,f,s);var v=nu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(c)?(v=!0,Uo(i)):v=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Yc(i),f.updater=Zo,i.stateNode=f,f._reactInternals=i,lu(i,c,n,s),i=fu(null,i,c,!0,v,s)):(i.tag=0,Vt&&v&&kc(i),Tn(null,i,f,s),i=i.child),i;case 16:c=i.elementType;e:{switch(Jo(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Z0(c),n=oi(c,n),f){case 0:i=du(null,i,c,n,s);break e;case 1:i=Tp(null,i,c,n,s);break e;case 11:i=_p(null,i,c,n,s);break e;case 14:i=Sp(null,i,c,oi(c.type,n),s);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:oi(c,f),du(n,i,c,f,s);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:oi(c,f),Tp(n,i,c,f,s);case 3:e:{if(bp(i),n===null)throw Error(t(387));c=i.pendingProps,v=i.memoizedState,f=v.element,zh(n,i),Go(i,c,null,s);var A=i.memoizedState;if(c=A.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){f=Pa(Error(t(423)),i),i=Ap(n,i,c,s,f);break e}else if(c!==f){f=Pa(Error(t(424)),i),i=Ap(n,i,c,s,f);break e}else for(jn=dr(i.stateNode.containerInfo.firstChild),zn=i,Vt=!0,si=null,s=kh(i,null,c,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Aa(),c===f){i=ji(n,i,s);break e}Tn(n,i,c,s)}i=i.child}return i;case 5:return Hh(i),n===null&&jc(i),c=i.type,f=i.pendingProps,v=n!==null?n.memoizedProps:null,A=f.children,Dc(c,f)?A=null:v!==null&&Dc(c,v)&&(i.flags|=32),Mp(n,i),Tn(n,i,A,s),i.child;case 6:return n===null&&jc(i),null;case 13:return wp(n,i,s);case 4:return $c(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=wa(i,null,c,s):Tn(n,i,c,s),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:oi(c,f),_p(n,i,c,f,s);case 7:return Tn(n,i,i.pendingProps,s),i.child;case 8:return Tn(n,i,i.pendingProps.children,s),i.child;case 12:return Tn(n,i,i.pendingProps.children,s),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,v=i.memoizedProps,A=f.value,Ot(jo,c._currentValue),c._currentValue=A,v!==null)if(ai(v.value,A)){if(v.children===f.children&&!Nn.current){i=ji(n,i,s);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var I=v.dependencies;if(I!==null){A=v.child;for(var z=I.firstContext;z!==null;){if(z.context===c){if(v.tag===1){z=zi(-1,s&-s),z.tag=2;var ae=v.updateQueue;if(ae!==null){ae=ae.shared;var _e=ae.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),ae.pending=z}}v.lanes|=s,z=v.alternate,z!==null&&(z.lanes|=s),Xc(v.return,s,i),I.lanes|=s;break}z=z.next}}else if(v.tag===10)A=v.type===i.type?null:v.child;else if(v.tag===18){if(A=v.return,A===null)throw Error(t(341));A.lanes|=s,I=A.alternate,I!==null&&(I.lanes|=s),Xc(A,s,i),A=v.sibling}else A=v.child;if(A!==null)A.return=v;else for(A=v;A!==null;){if(A===i){A=null;break}if(v=A.sibling,v!==null){v.return=A.return,A=v;break}A=A.return}v=A}Tn(n,i,f.children,s),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ra(i,s),f=Zn(f),c=c(f),i.flags|=1,Tn(n,i,c,s),i.child;case 14:return c=i.type,f=oi(c,i.pendingProps),f=oi(c.type,f),Sp(n,i,c,f,s);case 15:return yp(n,i,i.type,i.pendingProps,s);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:oi(c,f),Jo(n,i),i.tag=1,Pn(c)?(n=!0,Uo(i)):n=!1,Ra(i,s),fp(i,c,f),lu(i,c,f,s),fu(null,i,c,!0,n,s);case 19:return Rp(n,i,s);case 22:return Ep(n,i,s)}throw Error(t(156,i.tag))};function Jp(n,i){return go(n,i)}function K0(n,i,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,s,c){return new K0(n,i,s,c)}function Du(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Z0(n){if(typeof n=="function")return Du(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===ee)return 14}return 2}function Er(n,i){var s=n.alternate;return s===null?(s=ei(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&14680064,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s}function ul(n,i,s,c,f,v){var A=2;if(c=n,typeof n=="function")Du(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case B:return Qr(s.children,f,v,i);case M:A=8,f|=8;break;case C:return n=ei(12,s,i,f|2),n.elementType=C,n.lanes=v,n;case J:return n=ei(13,s,i,f),n.elementType=J,n.lanes=v,n;case ce:return n=ei(19,s,i,f),n.elementType=ce,n.lanes=v,n;case W:return dl(s,f,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case K:A=10;break e;case O:A=9;break e;case $:A=11;break e;case ee:A=14;break e;case ie:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(A,s,i,f),i.elementType=n,i.type=c,i.lanes=v,i}function Qr(n,i,s,c){return n=ei(7,n,c,i),n.lanes=s,n}function dl(n,i,s,c){return n=ei(22,n,c,i),n.elementType=W,n.lanes=s,n.stateNode={isHidden:!1},n}function Lu(n,i,s){return n=ei(6,n,null,i),n.lanes=s,n}function Iu(n,i,s){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Q0(n,i,s,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rn(0),this.expirationTimes=Rn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Uu(n,i,s,c,f,v,A,I,z){return n=new Q0(n,i,s,I,z),i===1?(i=1,v===!0&&(i|=8)):i=0,v=ei(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:c,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(v),n}function J0(n,i,s){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:s}}function em(n){if(!n)return hr;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var s=n.type;if(Pn(s))return Ch(n,s,i)}return i}function tm(n,i,s,c,f,v,A,I,z){return n=Uu(s,c,!0,n,f,v,A,I,z),n.context=em(null),s=n.current,c=bn(),f=Sr(s),v=zi(c,f),v.callback=i??null,gr(s,v,f),n.current.lanes=f,kn(n,f,c),In(n,c),n}function fl(n,i,s,c){var f=i.current,v=bn(),A=Sr(f);return s=em(s),i.context===null?i.context=s:i.pendingContext=s,i=zi(v,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=gr(f,i,A),n!==null&&(ui(n,f,A,v),Ho(n,f,A)),A}function hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function nm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function Fu(n,i){nm(n,i),(n=n.alternate)&&nm(n,i)}function ex(){return null}var im=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ou(n){this._internalRoot=n}pl.prototype.render=Ou.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));fl(n,i,null,null)},pl.prototype.unmount=Ou.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;$r(function(){fl(null,n,null,null)}),i[Ui]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=us();n={blockedOn:null,target:n,priority:i};for(var s=0;s<lr.length&&i!==0&&i<lr[s].priority;s++);lr.splice(s,0,n),s===0&&Hf(n)}};function ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function rm(){}function tx(n,i,s,c,f){if(f){if(typeof c=="function"){var v=c;c=function(){var ae=hl(A);v.call(ae)}}var A=tm(i,c,n,0,null,!1,!1,"",rm);return n._reactRootContainer=A,n[Ui]=A.current,Ts(n.nodeType===8?n.parentNode:n),$r(),A}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var ae=hl(z);I.call(ae)}}var z=Uu(n,0,!1,null,null,!1,!1,"",rm);return n._reactRootContainer=z,n[Ui]=z.current,Ts(n.nodeType===8?n.parentNode:n),$r(function(){fl(i,z,s,c)}),z}function gl(n,i,s,c,f){var v=s._reactRootContainer;if(v){var A=v;if(typeof f=="function"){var I=f;f=function(){var z=hl(A);I.call(z)}}fl(i,A,n,f)}else A=tx(s,i,n,f,c);return hl(A)}Yt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var s=St(i.pendingLanes);s!==0&&(Ct(i,s|1),In(i,w()),(Tt&6)===0&&(Ia=w()+500,pr()))}break;case 13:$r(function(){var c=Bi(n,1);if(c!==null){var f=bn();ui(c,n,1,f)}}),Fu(n,1)}},Yn=function(n){if(n.tag===13){var i=Bi(n,134217728);if(i!==null){var s=bn();ui(i,n,134217728,s)}Fu(n,134217728)}},Ii=function(n){if(n.tag===13){var i=Sr(n),s=Bi(n,i);if(s!==null){var c=bn();ui(s,n,i,c)}Fu(n,i)}},us=function(){return st},jf=function(n,i){var s=st;try{return st=n,i()}finally{st=s}},we=function(n,i,s){switch(i){case"input":if(kt(n,s),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var c=s[i];if(c!==n&&c.form===n.form){var f=Lo(c);if(!f)throw Error(t(90));Xt(c),kt(c,f)}}}break;case"textarea":T(n,s);break;case"select":i=s.value,i!=null&&Et(n,!!s.multiple,i,!1)}},at=Ru,Pt=$r;var nx={usingClientEntryPoint:!1,Events:[ws,ya,Lo,fe,je,Ru]},js={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ix={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=po(n),n===null?null:n.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||ex,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{Re=vl.inject(ix),Ie=vl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nx,Un.createPortal=function(n,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(i))throw Error(t(200));return J0(n,i,null,s)},Un.createRoot=function(n,i){if(!ku(n))throw Error(t(299));var s=!1,c="",f=im;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Uu(n,1,!1,null,null,s,!1,c,f),n[Ui]=i.current,Ts(n.nodeType===8?n.parentNode:n),new Ou(i)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=po(i),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return $r(n)},Un.hydrate=function(n,i,s){if(!ml(i))throw Error(t(200));return gl(null,n,i,!0,s)},Un.hydrateRoot=function(n,i,s){if(!ku(n))throw Error(t(405));var c=s!=null&&s.hydratedSources||null,f=!1,v="",A=im;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(v=s.identifierPrefix),s.onRecoverableError!==void 0&&(A=s.onRecoverableError)),i=tm(i,null,n,1,s??null,f,!1,v,A),n[Ui]=i.current,Ts(n),c)for(n=0;n<c.length;n++)s=c[n],f=s._getVersion,f=f(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,f]:i.mutableSourceEagerHydrationData.push(s,f);return new pl(i)},Un.render=function(n,i,s){if(!ml(i))throw Error(t(200));return gl(null,n,i,!1,s)},Un.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?($r(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ui]=null})}),!0):!1},Un.unstable_batchedUpdates=Ru,Un.unstable_renderSubtreeIntoContainer=function(n,i,s,c){if(!ml(s))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,i,s,!1,c)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var fm;function Mg(){if(fm)return ju.exports;fm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ju.exports=fx(),ju.exports}var hm;function hx(){if(hm)return xl;hm=1;var r=Mg();return xl.createRoot=r.createRoot,xl.hydrateRoot=r.hydrateRoot,xl}var px=hx();const mx=yg(px);Mg();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qs(){return Qs=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r},Qs.apply(this,arguments)}var Dr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Dr||(Dr={}));const pm="popstate";function gx(r){r===void 0&&(r={});function e(a,o){let{pathname:l,search:d,hash:h}=a.location;return Ad("",{pathname:l,search:d,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(a,o){return typeof o=="string"?o:$l(o)}return xx(e,t,null,r)}function Jt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Tf(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vx(){return Math.random().toString(36).substr(2,8)}function mm(r,e){return{usr:r.state,key:r.key,idx:e}}function Ad(r,e,t,a){return t===void 0&&(t=null),Qs({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?rs(e):e,{state:t,key:e&&e.key||a||vx()})}function $l(r){let{pathname:e="/",search:t="",hash:a=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function rs(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let a=r.indexOf("?");a>=0&&(e.search=r.substr(a),r=r.substr(0,a)),r&&(e.pathname=r)}return e}function xx(r,e,t,a){a===void 0&&(a={});let{window:o=document.defaultView,v5Compat:l=!1}=a,d=o.history,h=Dr.Pop,p=null,m=_();m==null&&(m=0,d.replaceState(Qs({},d.state,{idx:m}),""));function _(){return(d.state||{idx:null}).idx}function x(){h=Dr.Pop;let S=_(),y=S==null?null:S-m;m=S,p&&p({action:h,location:R.location,delta:y})}function g(S,y){h=Dr.Push;let N=Ad(R.location,S,y);m=_()+1;let L=mm(N,m),P=R.createHref(N);try{d.pushState(L,"",P)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(P)}l&&p&&p({action:h,location:R.location,delta:1})}function E(S,y){h=Dr.Replace;let N=Ad(R.location,S,y);m=_();let L=mm(N,m),P=R.createHref(N);d.replaceState(L,"",P),l&&p&&p({action:h,location:R.location,delta:0})}function b(S){let y=o.location.origin!=="null"?o.location.origin:o.location.href,N=typeof S=="string"?S:$l(S);return N=N.replace(/ $/,"%20"),Jt(y,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,y)}let R={get action(){return h},get location(){return r(o,d)},listen(S){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(pm,x),p=S,()=>{o.removeEventListener(pm,x),p=null}},createHref(S){return e(o,S)},createURL:b,encodeLocation(S){let y=b(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:E,go(S){return d.go(S)}};return R}var gm;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(gm||(gm={}));function _x(r,e,t){return t===void 0&&(t="/"),Sx(r,e,t)}function Sx(r,e,t,a){let o=typeof e=="string"?rs(e):e,l=bf(o.pathname||"/",t);if(l==null)return null;let d=Tg(r);yx(d);let h=null;for(let p=0;h==null&&p<d.length;++p){let m=Lx(l);h=Nx(d[p],m)}return h}function Tg(r,e,t,a){e===void 0&&(e=[]),t===void 0&&(t=[]),a===void 0&&(a="");let o=(l,d,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:d,route:l};p.relativePath.startsWith("/")&&(Jt(p.relativePath.startsWith(a),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(a.length));let m=Ir([a,p.relativePath]),_=t.concat(p);l.children&&l.children.length>0&&(Jt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Tg(l.children,e,_,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:Cx(m,l.index),routesMeta:_})};return r.forEach((l,d)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,d);else for(let p of bg(l.path))o(l,d,p)}),e}function bg(r){let e=r.split("/");if(e.length===0)return[];let[t,...a]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(a.length===0)return o?[l,""]:[l];let d=bg(a.join("/")),h=[];return h.push(...d.map(p=>p===""?l:[l,p].join("/"))),o&&h.push(...d),h.map(p=>r.startsWith("/")&&p===""?"/":p)}function yx(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Rx(e.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}const Ex=/^:[\w-]+$/,Mx=3,Tx=2,bx=1,Ax=10,wx=-2,vm=r=>r==="*";function Cx(r,e){let t=r.split("/"),a=t.length;return t.some(vm)&&(a+=wx),e&&(a+=Tx),t.filter(o=>!vm(o)).reduce((o,l)=>o+(Ex.test(l)?Mx:l===""?bx:Ax),a)}function Rx(r,e){return r.length===e.length&&r.slice(0,-1).every((a,o)=>a===e[o])?r[r.length-1]-e[e.length-1]:0}function Nx(r,e,t){let{routesMeta:a}=r,o={},l="/",d=[];for(let h=0;h<a.length;++h){let p=a[h],m=h===a.length-1,_=l==="/"?e:e.slice(l.length)||"/",x=Px({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),g=p.route;if(!x)return null;Object.assign(o,x.params),d.push({params:o,pathname:Ir([l,x.pathname]),pathnameBase:kx(Ir([l,x.pathnameBase])),route:g}),x.pathnameBase!=="/"&&(l=Ir([l,x.pathnameBase]))}return d}function Px(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,a]=Dx(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],d=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((m,_,x)=>{let{paramName:g,isOptional:E}=_;if(g==="*"){let R=h[x]||"";d=l.slice(0,l.length-R.length).replace(/(.)\/+$/,"$1")}const b=h[x];return E&&!b?m[g]=void 0:m[g]=(b||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:d,pattern:r}}function Dx(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Tf(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let a=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p)=>(a.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(a.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function Lx(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Tf(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function bf(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,a=r.charAt(t);return a&&a!=="/"?null:r.slice(t)||"/"}const Ix=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ux=r=>Ix.test(r);function Fx(r,e){e===void 0&&(e="/");let{pathname:t,search:a="",hash:o=""}=typeof r=="string"?rs(r):r,l;if(t)if(Ux(t))l=t;else{if(t.includes("//")){let d=t;t=t.replace(/\/\/+/g,"/"),Tf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(d+" -> "+t))}t.startsWith("/")?l=xm(t.substring(1),"/"):l=xm(t,e)}else l=e;return{pathname:l,search:Bx(a),hash:zx(o)}}function xm(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Gu(r,e,t,a){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ox(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ag(r,e){let t=Ox(r);return e?t.map((a,o)=>o===t.length-1?a.pathname:a.pathnameBase):t.map(a=>a.pathnameBase)}function wg(r,e,t,a){a===void 0&&(a=!1);let o;typeof r=="string"?o=rs(r):(o=Qs({},r),Jt(!o.pathname||!o.pathname.includes("?"),Gu("?","pathname","search",o)),Jt(!o.pathname||!o.pathname.includes("#"),Gu("#","pathname","hash",o)),Jt(!o.search||!o.search.includes("#"),Gu("#","search","hash",o)));let l=r===""||o.pathname==="",d=l?"/":o.pathname,h;if(d==null)h=t;else{let x=e.length-1;if(!a&&d.startsWith("..")){let g=d.split("/");for(;g[0]==="..";)g.shift(),x-=1;o.pathname=g.join("/")}h=x>=0?e[x]:"/"}let p=Fx(o,h),m=d&&d!=="/"&&d.endsWith("/"),_=(l||d===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}const Ir=r=>r.join("/").replace(/\/\/+/g,"/"),kx=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Bx=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,zx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function jx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Cg=["post","put","patch","delete"];new Set(Cg);const Vx=["get",...Cg];new Set(Vx);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Js(){return Js=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r},Js.apply(this,arguments)}const Af=pe.createContext(null),Hx=pe.createContext(null),da=pe.createContext(null),ec=pe.createContext(null),Fr=pe.createContext({outlet:null,matches:[],isDataRoute:!1}),Rg=pe.createContext(null);function Gx(r,e){let{relative:t}=e===void 0?{}:e;ro()||Jt(!1);let{basename:a,navigator:o}=pe.useContext(da),{hash:l,pathname:d,search:h}=Pg(r,{relative:t}),p=d;return a!=="/"&&(p=d==="/"?a:Ir([a,d])),o.createHref({pathname:p,search:h,hash:l})}function ro(){return pe.useContext(ec)!=null}function as(){return ro()||Jt(!1),pe.useContext(ec).location}function Ng(r){pe.useContext(da).static||pe.useLayoutEffect(r)}function Wx(){let{isDataRoute:r}=pe.useContext(Fr);return r?a_():Xx()}function Xx(){ro()||Jt(!1);let r=pe.useContext(Af),{basename:e,future:t,navigator:a}=pe.useContext(da),{matches:o}=pe.useContext(Fr),{pathname:l}=as(),d=JSON.stringify(Ag(o,t.v7_relativeSplatPath)),h=pe.useRef(!1);return Ng(()=>{h.current=!0}),pe.useCallback(function(m,_){if(_===void 0&&(_={}),!h.current)return;if(typeof m=="number"){a.go(m);return}let x=wg(m,JSON.parse(d),l,_.relative==="path");r==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:Ir([e,x.pathname])),(_.replace?a.replace:a.push)(x,_.state,_)},[e,a,d,l,r])}function qx(){let{matches:r}=pe.useContext(Fr),e=r[r.length-1];return e?e.params:{}}function Pg(r,e){let{relative:t}=e===void 0?{}:e,{future:a}=pe.useContext(da),{matches:o}=pe.useContext(Fr),{pathname:l}=as(),d=JSON.stringify(Ag(o,a.v7_relativeSplatPath));return pe.useMemo(()=>wg(r,JSON.parse(d),l,t==="path"),[r,d,l,t])}function Yx(r,e){return $x(r,e)}function $x(r,e,t,a){ro()||Jt(!1);let{navigator:o}=pe.useContext(da),{matches:l}=pe.useContext(Fr),d=l[l.length-1],h=d?d.params:{};d&&d.pathname;let p=d?d.pathnameBase:"/";d&&d.route;let m=as(),_;if(e){var x;let S=typeof e=="string"?rs(e):e;p==="/"||(x=S.pathname)!=null&&x.startsWith(p)||Jt(!1),_=S}else _=m;let g=_.pathname||"/",E=g;if(p!=="/"){let S=p.replace(/^\//,"").split("/");E="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let b=_x(r,{pathname:E}),R=e_(b&&b.map(S=>Object.assign({},S,{params:Object.assign({},h,S.params),pathname:Ir([p,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?p:Ir([p,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,t,a);return e&&R?pe.createElement(ec.Provider,{value:{location:Js({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Dr.Pop}},R):R}function Kx(){let r=r_(),e=jx(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return pe.createElement(pe.Fragment,null,pe.createElement("h2",null,"Unexpected Application Error!"),pe.createElement("h3",{style:{fontStyle:"italic"}},e),t?pe.createElement("pre",{style:o},t):null,null)}const Zx=pe.createElement(Kx,null);class Qx extends pe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?pe.createElement(Fr.Provider,{value:this.props.routeContext},pe.createElement(Rg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jx(r){let{routeContext:e,match:t,children:a}=r,o=pe.useContext(Af);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),pe.createElement(Fr.Provider,{value:e},a)}function e_(r,e,t,a){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),a===void 0&&(a=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=a)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let d=r,h=(o=t)==null?void 0:o.errors;if(h!=null){let _=d.findIndex(x=>x.route.id&&(h==null?void 0:h[x.route.id])!==void 0);_>=0||Jt(!1),d=d.slice(0,Math.min(d.length,_+1))}let p=!1,m=-1;if(t&&a&&a.v7_partialHydration)for(let _=0;_<d.length;_++){let x=d[_];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=_),x.route.id){let{loaderData:g,errors:E}=t,b=x.route.loader&&g[x.route.id]===void 0&&(!E||E[x.route.id]===void 0);if(x.route.lazy||b){p=!0,m>=0?d=d.slice(0,m+1):d=[d[0]];break}}}return d.reduceRight((_,x,g)=>{let E,b=!1,R=null,S=null;t&&(E=h&&x.route.id?h[x.route.id]:void 0,R=x.route.errorElement||Zx,p&&(m<0&&g===0?(s_("route-fallback"),b=!0,S=null):m===g&&(b=!0,S=x.route.hydrateFallbackElement||null)));let y=e.concat(d.slice(0,g+1)),N=()=>{let L;return E?L=R:b?L=S:x.route.Component?L=pe.createElement(x.route.Component,null):x.route.element?L=x.route.element:L=_,pe.createElement(Jx,{match:x,routeContext:{outlet:_,matches:y,isDataRoute:t!=null},children:L})};return t&&(x.route.ErrorBoundary||x.route.errorElement||g===0)?pe.createElement(Qx,{location:t.location,revalidation:t.revalidation,component:R,error:E,children:N(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):N()},null)}var Dg=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(Dg||{}),Lg=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(Lg||{});function t_(r){let e=pe.useContext(Af);return e||Jt(!1),e}function n_(r){let e=pe.useContext(Hx);return e||Jt(!1),e}function i_(r){let e=pe.useContext(Fr);return e||Jt(!1),e}function Ig(r){let e=i_(),t=e.matches[e.matches.length-1];return t.route.id||Jt(!1),t.route.id}function r_(){var r;let e=pe.useContext(Rg),t=n_(),a=Ig();return e!==void 0?e:(r=t.errors)==null?void 0:r[a]}function a_(){let{router:r}=t_(Dg.UseNavigateStable),e=Ig(Lg.UseNavigateStable),t=pe.useRef(!1);return Ng(()=>{t.current=!0}),pe.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,Js({fromRouteId:e},l)))},[r,e])}const _m={};function s_(r,e,t){_m[r]||(_m[r]=!0)}function o_(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Nr(r){Jt(!1)}function l_(r){let{basename:e="/",children:t=null,location:a,navigationType:o=Dr.Pop,navigator:l,static:d=!1,future:h}=r;ro()&&Jt(!1);let p=e.replace(/^\/*/,"/"),m=pe.useMemo(()=>({basename:p,navigator:l,static:d,future:Js({v7_relativeSplatPath:!1},h)}),[p,h,l,d]);typeof a=="string"&&(a=rs(a));let{pathname:_="/",search:x="",hash:g="",state:E=null,key:b="default"}=a,R=pe.useMemo(()=>{let S=bf(_,p);return S==null?null:{location:{pathname:S,search:x,hash:g,state:E,key:b},navigationType:o}},[p,_,x,g,E,b,o]);return R==null?null:pe.createElement(da.Provider,{value:m},pe.createElement(ec.Provider,{children:t,value:R}))}function c_(r){let{children:e,location:t}=r;return Yx(wd(e),t)}new Promise(()=>{});function wd(r,e){e===void 0&&(e=[]);let t=[];return pe.Children.forEach(r,(a,o)=>{if(!pe.isValidElement(a))return;let l=[...e,o];if(a.type===pe.Fragment){t.push.apply(t,wd(a.props.children,l));return}a.type!==Nr&&Jt(!1),!a.props.index||!a.props.children||Jt(!1);let d={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=wd(a.props.children,l)),t.push(d)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cd(){return Cd=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r},Cd.apply(this,arguments)}function u_(r,e){if(r==null)return{};var t={},a=Object.keys(r),o,l;for(l=0;l<a.length;l++)o=a[l],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function d_(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function f_(r,e){return r.button===0&&(!e||e==="_self")&&!d_(r)}const h_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],p_="6";try{window.__reactRouterVersion=p_}catch{}const m_="startTransition",Sm=cx[m_];function g_(r){let{basename:e,children:t,future:a,window:o}=r,l=pe.useRef();l.current==null&&(l.current=gx({window:o,v5Compat:!0}));let d=l.current,[h,p]=pe.useState({action:d.action,location:d.location}),{v7_startTransition:m}=a||{},_=pe.useCallback(x=>{m&&Sm?Sm(()=>p(x)):p(x)},[p,m]);return pe.useLayoutEffect(()=>d.listen(_),[d,_]),pe.useEffect(()=>o_(a),[a]),pe.createElement(l_,{basename:e,children:t,location:h.location,navigationType:h.action,navigator:d,future:a})}const v_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",x_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ut=pe.forwardRef(function(e,t){let{onClick:a,relative:o,reloadDocument:l,replace:d,state:h,target:p,to:m,preventScrollReset:_,viewTransition:x}=e,g=u_(e,h_),{basename:E}=pe.useContext(da),b,R=!1;if(typeof m=="string"&&x_.test(m)&&(b=m,v_))try{let L=new URL(window.location.href),P=m.startsWith("//")?new URL(L.protocol+m):new URL(m),k=bf(P.pathname,E);P.origin===L.origin&&k!=null?m=k+P.search+P.hash:R=!0}catch{}let S=Gx(m,{relative:o}),y=__(m,{replace:d,state:h,target:p,preventScrollReset:_,relative:o,viewTransition:x});function N(L){a&&a(L),L.defaultPrevented||y(L)}return pe.createElement("a",Cd({},g,{href:b||S,onClick:R||l?a:N,ref:t,target:p}))});var ym;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(ym||(ym={}));var Em;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Em||(Em={}));function __(r,e){let{target:t,replace:a,state:o,preventScrollReset:l,relative:d,viewTransition:h}=e===void 0?{}:e,p=Wx(),m=as(),_=Pg(r,{relative:d});return pe.useCallback(x=>{if(f_(x,t)){x.preventDefault();let g=a!==void 0?a:$l(m)===$l(_);p(r,{replace:g,state:o,preventScrollReset:l,relative:d,viewTransition:h})}},[m,p,_,a,o,t,r,l,d,h])}const Ug=pe.createContext();function Fg(){return pe.useContext(Ug)}function S_({children:r}){const[e,t]=pe.useState(null),a=pe.useCallback((o,l="success")=>{t({message:o,type:l}),setTimeout(()=>t(null),4500)},[]);return u.jsxs(Ug.Provider,{value:a,children:[r,e&&u.jsx(y_,{message:e.message,type:e.type})]})}function y_({message:r,type:e}){const[t,a]=pe.useState(!1);return pe.useEffect(()=>{requestAnimationFrame(()=>a(!0));const o=setTimeout(()=>a(!1),4e3);return()=>clearTimeout(o)},[]),u.jsxs("div",{id:"sg-toast",style:{position:"fixed",bottom:"2rem",right:"2rem",zIndex:9999,background:e==="success"?"#E64E10":"#c94008",color:"#F7EEEB",padding:"1rem 1.5rem",borderRadius:"6px",fontFamily:"'Barlow Condensed', sans-serif",fontSize:"1rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",boxShadow:"0 8px 32px rgba(0,0,0,0.4)",display:"flex",alignItems:"center",gap:"10px",maxWidth:"380px",transform:t?"translateY(0)":"translateY(20px)",opacity:t?1:0,transition:"all 0.3s ease"},children:[u.jsx("i",{className:`fas fa-${e==="success"?"check-circle":"exclamation-circle"}`}),r]})}function E_(){return u.jsxs("svg",{viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M6 28C6 28 8 32 14 32C20 32 22 28 22 25C22 19 8 18 8 12C8 8 12 6 16 6C20 6 22 8 22 8",stroke:"#F7EEEB",strokeWidth:"3.5",strokeLinecap:"round",fill:"none"}),u.jsx("line",{x1:"20",y1:"34",x2:"34",y2:"6",stroke:"#E64E10",strokeWidth:"3.5",strokeLinecap:"round"}),u.jsx("rect",{x:"30",y:"3",width:"6",height:"6",fill:"#E64E10"})]})}function M_(){const[r,e]=pe.useState(!1),[t,a]=pe.useState(!1),o=as();pe.useEffect(()=>{function m(){e(window.scrollY>60)}return window.addEventListener("scroll",m,{passive:!0}),m(),()=>window.removeEventListener("scroll",m)},[]),pe.useEffect(()=>{a(!1),document.body.style.overflow=""},[o]);function l(){a(m=>(document.body.style.overflow=m?"":"hidden",!m))}function d(){a(!1),document.body.style.overflow=""}const h=m=>m==="/"?o.pathname==="/":o.pathname.startsWith(m);function p(m,_){if(o.pathname==="/"||o.pathname===""){m.preventDefault();const x=document.getElementById(_);if(x){const E=x.getBoundingClientRect().top+window.scrollY-88;window.scrollTo({top:E,behavior:"smooth"})}}d()}return u.jsxs(u.Fragment,{children:[u.jsx("nav",{className:`navbar${r?" scrolled":""}`,id:"navbar",children:u.jsxs("div",{className:"navbar-inner",children:[u.jsxs(ut,{to:"/",className:"navbar-logo",children:[u.jsx("div",{className:"logo-symbol",children:u.jsx(E_,{})}),u.jsx("span",{className:"logo-text",children:"SINGULAR"})]}),u.jsxs("div",{className:"navbar-links",children:[u.jsx(ut,{to:"/ecossistema",className:h("/ecossistema")?"active":"",children:"Ecossistema"}),u.jsx(ut,{to:"/#consultorio",onClick:m=>p(m,"consultorio"),children:"Consultório"}),u.jsx(ut,{to:"/venture-builder",className:h("/venture-builder")?"active":"",children:"Venture Builder"}),u.jsx(ut,{to:"/marketplace",className:h("/marketplace")?"active":"",children:"Marketplace"}),u.jsx(ut,{to:"/areas",className:h("/areas")?"active":"",children:"Áreas de Atuação"})]}),u.jsx("div",{className:"navbar-cta",children:u.jsxs(ut,{to:"/#triagem",className:"btn btn-primary btn-sm",onClick:m=>p(m,"triagem"),children:[u.jsx("i",{className:"fas fa-calendar-check"}),"Triagem Gratuita"]})}),u.jsxs("button",{className:`navbar-hamburger${t?" open":""}`,onClick:l,"aria-label":"Menu",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})]})}),u.jsxs("div",{className:`mobile-menu${t?" open":""}`,children:[u.jsx(ut,{to:"/ecossistema",onClick:d,children:"Ecossistema"}),u.jsx(ut,{to:"/#consultorio",onClick:m=>p(m,"consultorio"),children:"Consultório Empresarial"}),u.jsx(ut,{to:"/venture-builder",onClick:d,children:"Venture Builder"}),u.jsx(ut,{to:"/marketplace",onClick:d,children:"Marketplace"}),u.jsx(ut,{to:"/areas",onClick:d,children:"Áreas de Atuação"}),u.jsxs(ut,{to:"/#triagem",className:"btn btn-primary",style:{marginTop:"1rem",justifyContent:"center"},onClick:m=>p(m,"triagem"),children:[u.jsx("i",{className:"fas fa-calendar-check"})," Agendar Triagem Gratuita"]})]})]})}function T_(){return u.jsx("footer",{className:"footer",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"footer-grid",children:[u.jsxs("div",{className:"footer-brand",children:[u.jsx(ut,{to:"/",className:"footer-logo",children:"SINGULAR"}),u.jsx("p",{className:"footer-tagline",children:"O centro de apoio ao empresário onde o caos vira previsibilidade. Processos, tecnologia e governança ombro a ombro com quem empreende."}),u.jsxs("div",{className:"footer-social",children:[u.jsx("a",{href:"#","aria-label":"Instagram",children:u.jsx("i",{className:"fab fa-instagram"})}),u.jsx("a",{href:"#","aria-label":"LinkedIn",children:u.jsx("i",{className:"fab fa-linkedin-in"})}),u.jsx("a",{href:"#","aria-label":"WhatsApp",children:u.jsx("i",{className:"fab fa-whatsapp"})})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h5",{children:"Navegação"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(ut,{to:"/",children:"Home"})}),u.jsx("li",{children:u.jsx(ut,{to:"/ecossistema",children:"Ecossistema"})}),u.jsx("li",{children:u.jsx(ut,{to:"/#consultorio",children:"Consultório"})}),u.jsx("li",{children:u.jsx(ut,{to:"/venture-builder",children:"Venture Builder"})}),u.jsx("li",{children:u.jsx(ut,{to:"/areas",children:"Áreas de Atuação"})})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h5",{children:"Soluções"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(ut,{to:"/ecossistema",children:"IA de Atendimento"})}),u.jsx("li",{children:u.jsx(ut,{to:"/ecossistema",children:"Dashboard BI"})}),u.jsx("li",{children:u.jsx(ut,{to:"/ecossistema",children:"Automações n8n"})}),u.jsx("li",{children:u.jsx(ut,{to:"/ecossistema",children:"Recuperação de Crédito"})}),u.jsx("li",{children:u.jsx(ut,{to:"/ecossistema",children:"CRM HubSpot"})})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h5",{children:"Empresa"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"#",children:"FAQ"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"Termos de Uso"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"Política de Privacidade"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"Polos Empresariais"})}),u.jsx("li",{children:u.jsx(ut,{to:"/#triagem",children:"Agendar Triagem"})})]})]})]}),u.jsxs("div",{className:"footer-bottom",children:[u.jsx("p",{className:"footer-quote",children:'"Negócios não quebram por falta de venda, quebram por falta de governança."'}),u.jsx("p",{className:"footer-copy",children:"© 2025 Singular. Todos os direitos reservados."})]})]})})}function tc(){pe.useEffect(()=>{const r=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&(a.target.classList.add("revealed"),r.unobserve(a.target))})},{threshold:.12,rootMargin:"0px 0px -60px 0px"});return document.querySelectorAll("[data-reveal]").forEach(t=>r.observe(t)),()=>r.disconnect()},[])}function b_(r,e=1800){const[t,a]=pe.useState(0),[o,l]=pe.useState(!1),d=pe.useRef(null);return pe.useEffect(()=>{const h=d.current;if(!h)return;const p=new IntersectionObserver(m=>{m.forEach(_=>{_.isIntersecting&&!o&&(l(!0),p.unobserve(_.target))})},{threshold:.5});return p.observe(h),()=>p.disconnect()},[o]),pe.useEffect(()=>{if(!o||!r)return;let h=0;const p=r/(e/16);let m;function _(){h+=p,h<r?(a(Math.floor(h)),m=requestAnimationFrame(_)):a(r)}return m=requestAnimationFrame(_),()=>cancelAnimationFrame(m)},[o,r,e]),{ref:d,count:t}}function Og(r){return r.replace(/\D/g,"").replace(/^(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d{4})$/,"$1-$2").slice(0,15)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="183",A_=0,Mm=1,w_=2,Vl=1,C_=2,Ks=3,Ur=0,On=1,Yi=2,Ki=0,Ka=1,Tm=2,bm=3,Am=4,R_=5,sa=100,N_=101,P_=102,D_=103,L_=104,I_=200,U_=201,F_=202,O_=203,Rd=204,Nd=205,k_=206,B_=207,z_=208,j_=209,V_=210,H_=211,G_=212,W_=213,X_=214,Pd=0,Dd=1,Ld=2,Ja=3,Id=4,Ud=5,Fd=6,Od=7,kg=0,q_=1,Y_=2,Ci=0,Bg=1,zg=2,jg=3,Vg=4,Hg=5,Gg=6,Wg=7,Xg=300,ua=301,es=302,Wu=303,Xu=304,nc=306,kd=1e3,$i=1001,Bd=1002,pn=1003,$_=1004,_l=1005,yn=1006,qu=1007,la=1008,ii=1009,qg=1010,Yg=1011,eo=1012,Cf=1013,Pi=1014,Ai=1015,Ji=1016,Rf=1017,Nf=1018,to=1020,$g=35902,Kg=35899,Zg=1021,Qg=1022,gi=1023,er=1026,ca=1027,Jg=1028,Pf=1029,ts=1030,Df=1031,Lf=1033,Hl=33776,Gl=33777,Wl=33778,Xl=33779,zd=35840,jd=35841,Vd=35842,Hd=35843,Gd=36196,Wd=37492,Xd=37496,qd=37488,Yd=37489,$d=37490,Kd=37491,Zd=37808,Qd=37809,Jd=37810,ef=37811,tf=37812,nf=37813,rf=37814,af=37815,sf=37816,of=37817,lf=37818,cf=37819,uf=37820,df=37821,ff=36492,hf=36494,pf=36495,mf=36283,gf=36284,vf=36285,xf=36286,K_=3200,Z_=0,Q_=1,Pr="",ni="srgb",ns="srgb-linear",Kl="linear",Dt="srgb",Fa=7680,wm=519,J_=512,eS=513,tS=514,If=515,nS=516,iS=517,Uf=518,rS=519,Cm=35044,Rm="300 es",wi=2e3,Zl=2001;function aS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ql(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sS(){const r=Ql("canvas");return r.style.display="block",r}const Nm={};function Pm(...r){const e="THREE."+r.shift();console.log(e,...r)}function ev(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function lt(...r){r=ev(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function wt(...r){r=ev(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Jl(...r){const e=r.join(" ");e in Nm||(Nm[e]=!0,lt(...r))}function oS(r,e,t){return new Promise(function(a,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}const lS={[Pd]:Dd,[Ld]:Fd,[Id]:Od,[Ja]:Ud,[Dd]:Pd,[Fd]:Ld,[Od]:Id,[Ud]:Ja};class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=Math.PI/180,_f=180/Math.PI;function ao(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[a&255]+_n[a>>8&255]+_n[a>>16&255]+_n[a>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function cS(r,e){return(r%e+e)%e}function $u(r,e,t){return(1-t)*r+t*e}function Hs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,t=0){Lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,o=e.elements;return this.x=o[0]*t+o[3]*a+o[6],this.y=o[1]*t+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_t(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(_t(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*a-d*o+e.x,this.y=l*o+d*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class os{constructor(e=0,t=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=o}static slerpFlat(e,t,a,o,l,d,h){let p=a[o+0],m=a[o+1],_=a[o+2],x=a[o+3],g=l[d+0],E=l[d+1],b=l[d+2],R=l[d+3];if(x!==R||p!==g||m!==E||_!==b){let S=p*g+m*E+_*b+x*R;S<0&&(g=-g,E=-E,b=-b,R=-R,S=-S);let y=1-h;if(S<.9995){const N=Math.acos(S),L=Math.sin(N);y=Math.sin(y*N)/L,h=Math.sin(h*N)/L,p=p*y+g*h,m=m*y+E*h,_=_*y+b*h,x=x*y+R*h}else{p=p*y+g*h,m=m*y+E*h,_=_*y+b*h,x=x*y+R*h;const N=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=N,m*=N,_*=N,x*=N}}e[t]=p,e[t+1]=m,e[t+2]=_,e[t+3]=x}static multiplyQuaternionsFlat(e,t,a,o,l,d){const h=a[o],p=a[o+1],m=a[o+2],_=a[o+3],x=l[d],g=l[d+1],E=l[d+2],b=l[d+3];return e[t]=h*b+_*x+p*E-m*g,e[t+1]=p*b+_*g+m*x-h*E,e[t+2]=m*b+_*E+h*g-p*x,e[t+3]=_*b-h*x-p*g-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,o){return this._x=e,this._y=t,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,o=e._y,l=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(a/2),_=h(o/2),x=h(l/2),g=p(a/2),E=p(o/2),b=p(l/2);switch(d){case"XYZ":this._x=g*_*x+m*E*b,this._y=m*E*x-g*_*b,this._z=m*_*b+g*E*x,this._w=m*_*x-g*E*b;break;case"YXZ":this._x=g*_*x+m*E*b,this._y=m*E*x-g*_*b,this._z=m*_*b-g*E*x,this._w=m*_*x+g*E*b;break;case"ZXY":this._x=g*_*x-m*E*b,this._y=m*E*x+g*_*b,this._z=m*_*b+g*E*x,this._w=m*_*x-g*E*b;break;case"ZYX":this._x=g*_*x-m*E*b,this._y=m*E*x+g*_*b,this._z=m*_*b-g*E*x,this._w=m*_*x+g*E*b;break;case"YZX":this._x=g*_*x+m*E*b,this._y=m*E*x+g*_*b,this._z=m*_*b-g*E*x,this._w=m*_*x-g*E*b;break;case"XZY":this._x=g*_*x-m*E*b,this._y=m*E*x-g*_*b,this._z=m*_*b+g*E*x,this._w=m*_*x+g*E*b;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],o=t[4],l=t[8],d=t[1],h=t[5],p=t[9],m=t[2],_=t[6],x=t[10],g=a+h+x;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(_-p)*E,this._y=(l-m)*E,this._z=(d-o)*E}else if(a>h&&a>x){const E=2*Math.sqrt(1+a-h-x);this._w=(_-p)/E,this._x=.25*E,this._y=(o+d)/E,this._z=(l+m)/E}else if(h>x){const E=2*Math.sqrt(1+h-a-x);this._w=(l-m)/E,this._x=(o+d)/E,this._y=.25*E,this._z=(p+_)/E}else{const E=2*Math.sqrt(1+x-a-h);this._w=(d-o)/E,this._x=(l+m)/E,this._y=(p+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,t/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,o=e._y,l=e._z,d=e._w,h=t._x,p=t._y,m=t._z,_=t._w;return this._x=a*_+d*h+o*m-l*p,this._y=o*_+d*p+l*h-a*m,this._z=l*_+d*m+a*p-o*h,this._w=d*_-a*h-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){let a=e._x,o=e._y,l=e._z,d=e._w,h=this.dot(e);h<0&&(a=-a,o=-o,l=-l,d=-d,h=-h);let p=1-t;if(h<.9995){const m=Math.acos(h),_=Math.sin(m);p=Math.sin(p*m)/_,t=Math.sin(t*m)/_,this._x=this._x*p+a*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+a*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,a=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*o,this.y=l[1]*t+l[4]*a+l[7]*o,this.z=l[2]*t+l[5]*a+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*a+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*a+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*a+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,a=this.y,o=this.z,l=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*o-h*a),_=2*(h*t-l*o),x=2*(l*a-d*t);return this.x=t+p*m+d*x-h*_,this.y=a+p*_+h*m-l*x,this.z=o+p*x+l*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*o,this.y=l[1]*t+l[5]*a+l[9]*o,this.z=l[2]*t+l[6]*a+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_t(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,o=e.y,l=e.z,d=t.x,h=t.y,p=t.z;return this.x=o*p-l*h,this.y=l*d-a*p,this.z=a*h-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Ku.copy(this).projectOnVector(e),this.sub(Ku)}reflect(e){return this.sub(Ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(_t(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return t*t+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const o=Math.sin(t)*e;return this.x=o*Math.sin(a),this.y=Math.cos(t)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ku=new se,Dm=new os;class ht{constructor(e,t,a,o,l,d,h,p,m){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,o,l,d,h,p,m)}set(e,t,a,o,l,d,h,p,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=h,_[3]=t,_[4]=l,_[5]=p,_[6]=a,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,o=t.elements,l=this.elements,d=a[0],h=a[3],p=a[6],m=a[1],_=a[4],x=a[7],g=a[2],E=a[5],b=a[8],R=o[0],S=o[3],y=o[6],N=o[1],L=o[4],P=o[7],k=o[2],U=o[5],B=o[8];return l[0]=d*R+h*N+p*k,l[3]=d*S+h*L+p*U,l[6]=d*y+h*P+p*B,l[1]=m*R+_*N+x*k,l[4]=m*S+_*L+x*U,l[7]=m*y+_*P+x*B,l[2]=g*R+E*N+b*k,l[5]=g*S+E*L+b*U,l[8]=g*y+E*P+b*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],o=e[2],l=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8];return t*d*_-t*h*m-a*l*_+a*h*p+o*l*m-o*d*p}invert(){const e=this.elements,t=e[0],a=e[1],o=e[2],l=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8],x=_*d-h*m,g=h*p-_*l,E=m*l-d*p,b=t*x+a*g+o*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=x*R,e[1]=(o*m-_*a)*R,e[2]=(h*a-o*d)*R,e[3]=g*R,e[4]=(_*t-o*p)*R,e[5]=(o*l-h*t)*R,e[6]=E*R,e[7]=(a*p-m*t)*R,e[8]=(d*t-a*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,o,l,d,h){const p=Math.cos(l),m=Math.sin(l);return this.set(a*p,a*m,-a*(p*d+m*h)+d+e,-o*m,o*p,-o*(-m*d+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(Zu.makeScale(e,t)),this}rotate(e){return this.premultiply(Zu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let o=0;o<9;o++)if(t[o]!==a[o])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zu=new ht,Lm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Im=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uS(){const r={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===Dt&&(o.r=Zi(o.r),o.g=Zi(o.g),o.b=Zi(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Dt&&(o.r=Za(o.r),o.g=Za(o.g),o.b=Za(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Pr?Kl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Jl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Jl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[ns]:{primaries:e,whitePoint:a,transfer:Kl,toXYZ:Lm,fromXYZ:Im,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:a,transfer:Dt,toXYZ:Lm,fromXYZ:Im,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),r}const bt=uS();function Zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Za(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Oa;class dS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Oa===void 0&&(Oa=Ql("canvas")),Oa.width=e.width,Oa.height=e.height;const o=Oa.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Oa}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ql("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=Zi(l[d]/255)*255;return a.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(Zi(t[a]/255)*255):t[a]=Zi(t[a]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fS=0;class Ff{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,h=o.length;d<h;d++)o[d].isDataTexture?l.push(Qu(o[d].image)):l.push(Qu(o[d]))}else l=Qu(o);a.url=l}return t||(e.images[this.uuid]=a),a}}function Qu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let hS=0;const Ju=new se;class wn extends ss{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,a=$i,o=$i,l=yn,d=la,h=gi,p=ii,m=wn.DEFAULT_ANISOTROPY,_=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=ao(),this.name="",this.source=new Ff(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ju).x}get height(){return this.source.getSize(Ju).y}get depth(){return this.source.getSize(Ju).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Xg;wn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,a=0,o=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,o){return this.x=e,this.y=t,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*a+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*a+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*a+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*a+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,o,l;const p=e.elements,m=p[0],_=p[4],x=p[8],g=p[1],E=p[5],b=p[9],R=p[2],S=p[6],y=p[10];if(Math.abs(_-g)<.01&&Math.abs(x-R)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+R)<.1&&Math.abs(b+S)<.1&&Math.abs(m+E+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,P=(E+1)/2,k=(y+1)/2,U=(_+g)/4,B=(x+R)/4,M=(b+S)/4;return L>P&&L>k?L<.01?(a=0,o=.707106781,l=.707106781):(a=Math.sqrt(L),o=U/a,l=B/a):P>k?P<.01?(a=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),a=U/o,l=M/o):k<.01?(a=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),a=B/l,o=M/l),this.set(a,o,l,t),this}let N=Math.sqrt((S-b)*(S-b)+(x-R)*(x-R)+(g-_)*(g-_));return Math.abs(N)<.001&&(N=1),this.x=(S-b)/N,this.y=(x-R)/N,this.z=(g-_)/N,this.w=Math.acos((m+E+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(_t(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pS extends ss{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:a.depth},l=new wn(o),d=a.count;for(let h=0;h<d;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Ff(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends pS{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class tv extends wn{constructor(e=null,t=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mS extends wn{constructor(e=null,t=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(e,t,a,o,l,d,h,p,m,_,x,g,E,b,R,S){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,o,l,d,h,p,m,_,x,g,E,b,R,S)}set(e,t,a,o,l,d,h,p,m,_,x,g,E,b,R,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=a,y[12]=o,y[1]=l,y[5]=d,y[9]=h,y[13]=p,y[2]=m,y[6]=_,y[10]=x,y[14]=g,y[3]=E,y[7]=b,y[11]=R,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,a=e.elements,o=1/ka.setFromMatrixColumn(e,0).length(),l=1/ka.setFromMatrixColumn(e,1).length(),d=1/ka.setFromMatrixColumn(e,2).length();return t[0]=a[0]*o,t[1]=a[1]*o,t[2]=a[2]*o,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*d,t[9]=a[9]*d,t[10]=a[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,o=e.y,l=e.z,d=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o),_=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=d*_,E=d*x,b=h*_,R=h*x;t[0]=p*_,t[4]=-p*x,t[8]=m,t[1]=E+b*m,t[5]=g-R*m,t[9]=-h*p,t[2]=R-g*m,t[6]=b+E*m,t[10]=d*p}else if(e.order==="YXZ"){const g=p*_,E=p*x,b=m*_,R=m*x;t[0]=g+R*h,t[4]=b*h-E,t[8]=d*m,t[1]=d*x,t[5]=d*_,t[9]=-h,t[2]=E*h-b,t[6]=R+g*h,t[10]=d*p}else if(e.order==="ZXY"){const g=p*_,E=p*x,b=m*_,R=m*x;t[0]=g-R*h,t[4]=-d*x,t[8]=b+E*h,t[1]=E+b*h,t[5]=d*_,t[9]=R-g*h,t[2]=-d*m,t[6]=h,t[10]=d*p}else if(e.order==="ZYX"){const g=d*_,E=d*x,b=h*_,R=h*x;t[0]=p*_,t[4]=b*m-E,t[8]=g*m+R,t[1]=p*x,t[5]=R*m+g,t[9]=E*m-b,t[2]=-m,t[6]=h*p,t[10]=d*p}else if(e.order==="YZX"){const g=d*p,E=d*m,b=h*p,R=h*m;t[0]=p*_,t[4]=R-g*x,t[8]=b*x+E,t[1]=x,t[5]=d*_,t[9]=-h*_,t[2]=-m*_,t[6]=E*x+b,t[10]=g-R*x}else if(e.order==="XZY"){const g=d*p,E=d*m,b=h*p,R=h*m;t[0]=p*_,t[4]=-x,t[8]=m*_,t[1]=g*x+R,t[5]=d*_,t[9]=E*x-b,t[2]=b*x-E,t[6]=h*_,t[10]=R*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gS,e,vS)}lookAt(e,t,a){const o=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Tr.crossVectors(a,Hn),Tr.lengthSq()===0&&(Math.abs(a.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Tr.crossVectors(a,Hn)),Tr.normalize(),Sl.crossVectors(Hn,Tr),o[0]=Tr.x,o[4]=Sl.x,o[8]=Hn.x,o[1]=Tr.y,o[5]=Sl.y,o[9]=Hn.y,o[2]=Tr.z,o[6]=Sl.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,o=t.elements,l=this.elements,d=a[0],h=a[4],p=a[8],m=a[12],_=a[1],x=a[5],g=a[9],E=a[13],b=a[2],R=a[6],S=a[10],y=a[14],N=a[3],L=a[7],P=a[11],k=a[15],U=o[0],B=o[4],M=o[8],C=o[12],K=o[1],O=o[5],$=o[9],J=o[13],ce=o[2],ee=o[6],ie=o[10],W=o[14],Z=o[3],le=o[7],ue=o[11],F=o[15];return l[0]=d*U+h*K+p*ce+m*Z,l[4]=d*B+h*O+p*ee+m*le,l[8]=d*M+h*$+p*ie+m*ue,l[12]=d*C+h*J+p*W+m*F,l[1]=_*U+x*K+g*ce+E*Z,l[5]=_*B+x*O+g*ee+E*le,l[9]=_*M+x*$+g*ie+E*ue,l[13]=_*C+x*J+g*W+E*F,l[2]=b*U+R*K+S*ce+y*Z,l[6]=b*B+R*O+S*ee+y*le,l[10]=b*M+R*$+S*ie+y*ue,l[14]=b*C+R*J+S*W+y*F,l[3]=N*U+L*K+P*ce+k*Z,l[7]=N*B+L*O+P*ee+k*le,l[11]=N*M+L*$+P*ie+k*ue,l[15]=N*C+L*J+P*W+k*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],o=e[8],l=e[12],d=e[1],h=e[5],p=e[9],m=e[13],_=e[2],x=e[6],g=e[10],E=e[14],b=e[3],R=e[7],S=e[11],y=e[15],N=p*E-m*g,L=h*E-m*x,P=h*g-p*x,k=d*E-m*_,U=d*g-p*_,B=d*x-h*_;return t*(R*N-S*L+y*P)-a*(b*N-S*k+y*U)+o*(b*L-R*k+y*B)-l*(b*P-R*U+S*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],o=e[2],l=e[3],d=e[4],h=e[5],p=e[6],m=e[7],_=e[8],x=e[9],g=e[10],E=e[11],b=e[12],R=e[13],S=e[14],y=e[15],N=t*h-a*d,L=t*p-o*d,P=t*m-l*d,k=a*p-o*h,U=a*m-l*h,B=o*m-l*p,M=_*R-x*b,C=_*S-g*b,K=_*y-E*b,O=x*S-g*R,$=x*y-E*R,J=g*y-E*S,ce=N*J-L*$+P*O+k*K-U*C+B*M;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/ce;return e[0]=(h*J-p*$+m*O)*ee,e[1]=(o*$-a*J-l*O)*ee,e[2]=(R*B-S*U+y*k)*ee,e[3]=(g*U-x*B-E*k)*ee,e[4]=(p*K-d*J-m*C)*ee,e[5]=(t*J-o*K+l*C)*ee,e[6]=(S*P-b*B-y*L)*ee,e[7]=(_*B-g*P+E*L)*ee,e[8]=(d*$-h*K+m*M)*ee,e[9]=(a*K-t*$-l*M)*ee,e[10]=(b*U-R*P+y*N)*ee,e[11]=(x*P-_*U-E*N)*ee,e[12]=(h*C-d*O-p*M)*ee,e[13]=(t*O-a*C+o*M)*ee,e[14]=(R*L-b*k-S*N)*ee,e[15]=(_*k-x*L+g*N)*ee,this}scale(e){const t=this.elements,a=e.x,o=e.y,l=e.z;return t[0]*=a,t[4]*=o,t[8]*=l,t[1]*=a,t[5]*=o,t[9]*=l,t[2]*=a,t[6]*=o,t[10]*=l,t[3]*=a,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,o))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),o=Math.sin(t),l=1-a,d=e.x,h=e.y,p=e.z,m=l*d,_=l*h;return this.set(m*d+a,m*h-o*p,m*p+o*h,0,m*h+o*p,_*h+a,_*p-o*d,0,m*p-o*h,_*p+o*d,l*p*p+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,o,l,d){return this.set(1,a,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,a){const o=this.elements,l=t._x,d=t._y,h=t._z,p=t._w,m=l+l,_=d+d,x=h+h,g=l*m,E=l*_,b=l*x,R=d*_,S=d*x,y=h*x,N=p*m,L=p*_,P=p*x,k=a.x,U=a.y,B=a.z;return o[0]=(1-(R+y))*k,o[1]=(E+P)*k,o[2]=(b-L)*k,o[3]=0,o[4]=(E-P)*U,o[5]=(1-(g+y))*U,o[6]=(S+N)*U,o[7]=0,o[8]=(b+L)*B,o[9]=(S-N)*B,o[10]=(1-(g+R))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return a.set(1,1,1),t.identity(),this;let d=ka.set(o[0],o[1],o[2]).length();const h=ka.set(o[4],o[5],o[6]).length(),p=ka.set(o[8],o[9],o[10]).length();l<0&&(d=-d),di.copy(this);const m=1/d,_=1/h,x=1/p;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=_,di.elements[5]*=_,di.elements[6]*=_,di.elements[8]*=x,di.elements[9]*=x,di.elements[10]*=x,t.setFromRotationMatrix(di),a.x=d,a.y=h,a.z=p,this}makePerspective(e,t,a,o,l,d,h=wi,p=!1){const m=this.elements,_=2*l/(t-e),x=2*l/(a-o),g=(t+e)/(t-e),E=(a+o)/(a-o);let b,R;if(p)b=l/(d-l),R=d*l/(d-l);else if(h===wi)b=-(d+l)/(d-l),R=-2*d*l/(d-l);else if(h===Zl)b=-d/(d-l),R=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=x,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,a,o,l,d,h=wi,p=!1){const m=this.elements,_=2/(t-e),x=2/(a-o),g=-(t+e)/(t-e),E=-(a+o)/(a-o);let b,R;if(p)b=1/(d-l),R=d/(d-l);else if(h===wi)b=-2/(d-l),R=-(d+l)/(d-l);else if(h===Zl)b=-1/(d-l),R=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=x,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=b,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let o=0;o<16;o++)if(t[o]!==a[o])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const ka=new se,di=new en,gS=new se(0,0,0),vS=new se(1,1,1),Tr=new se,Sl=new se,Hn=new se,Um=new en,Fm=new os;class tr{constructor(e=0,t=0,a=0,o=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,o=this._order){return this._x=e,this._y=t,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const o=e.elements,l=o[0],d=o[4],h=o[8],p=o[1],m=o[5],_=o[9],x=o[2],g=o[6],E=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-_t(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-_,E),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fm.setFromEuler(this),this.setFromQuaternion(Fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class nv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xS=0;const Om=new se,Ba=new os,Hi=new en,yl=new se,Gs=new se,_S=new se,SS=new os,km=new se(1,0,0),Bm=new se(0,1,0),zm=new se(0,0,1),jm={type:"added"},yS={type:"removed"},za={type:"childadded",child:null},ed={type:"childremoved",child:null};class Wn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new se,t=new tr,a=new os,o=new se(1,1,1);function l(){a.setFromEuler(t,!1)}function d(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new en},normalMatrix:{value:new ht}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ba.setFromAxisAngle(e,t),this.quaternion.multiply(Ba),this}rotateOnWorldAxis(e,t){return Ba.setFromAxisAngle(e,t),this.quaternion.premultiply(Ba),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(zm,e)}translateOnAxis(e,t){return Om.copy(e).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?yl.copy(e):yl.set(e,t,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Gs,yl,this.up):Hi.lookAt(yl,Gs,this.up),this.quaternion.setFromRotationMatrix(Hi),o&&(Hi.extractRotation(o.matrixWorld),Ba.setFromRotationMatrix(Hi),this.quaternion.premultiply(Ba.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jm),za.child=e,this.dispatchEvent(za),za.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yS),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jm),za.child=e,this.dispatchEvent(za),za.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,o=this.children.length;a<o;a++){const d=this.children[a].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,_S),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,SS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,o=t.length;a<o;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,o=t.length;a<o;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,a=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*a-l[8]*o,l[13]+=a-l[1]*t-l[5]*a-l[9]*o,l[14]+=o-l[2]*t-l[6]*a-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,o=t.length;a<o;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(l(e.materials,this.material[p]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(l(e.animations,p))}}if(t){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),_=d(e.images),x=d(e.shapes),g=d(e.skeletons),E=d(e.animations),b=d(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),_.length>0&&(a.images=_),x.length>0&&(a.shapes=x),g.length>0&&(a.skeletons=g),E.length>0&&(a.animations=E),b.length>0&&(a.nodes=b)}return a.object=o,a;function d(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}Wn.DEFAULT_UP=new se(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class El extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ES={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let o=null,l=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const R of e.hand.values()){const S=t.getJointPose(R,a),y=this._getHandJoint(m,R);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],g=_.position.distanceTo(x.position),E=.02,b=.005;m.inputState.pinching&&g>E+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=E-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,a),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ES)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new El;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}const iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function nd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class It{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,a,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=a,bt.colorSpaceToWorking(this,o),this}setHSL(e,t,a,o=bt.workingColorSpace){if(e=cS(e,1),t=_t(t,0,1),a=_t(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,d=2*a-l;this.r=nd(d,l,e+1/3),this.g=nd(d,l,e),this.b=nd(d,l,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,t=ni){function a(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],h=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const a=iv[e.toLowerCase()];return a!==void 0?this.setHex(a,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return bt.workingToColorSpace(Sn.copy(this),e),Math.round(_t(Sn.r*255,0,255))*65536+Math.round(_t(Sn.g*255,0,255))*256+Math.round(_t(Sn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Sn.copy(this),t);const a=Sn.r,o=Sn.g,l=Sn.b,d=Math.max(a,o,l),h=Math.min(a,o,l);let p,m;const _=(h+d)/2;if(h===d)p=0,m=0;else{const x=d-h;switch(m=_<=.5?x/(d+h):x/(2-d-h),d){case a:p=(o-l)/x+(o<l?6:0);break;case o:p=(l-a)/x+2;break;case l:p=(a-o)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ni){bt.workingToColorSpace(Sn.copy(this),e);const t=Sn.r,a=Sn.g,o=Sn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,t,a){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Ml);const a=$u(br.h,Ml.h,t),o=$u(br.s,Ml.s,t),l=$u(br.l,Ml.l,t);return this.setHSL(a,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*o,this.g=l[1]*t+l[4]*a+l[7]*o,this.b=l[2]*t+l[5]*a+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new It;It.NAMES=iv;class MS extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fi=new se,Gi=new se,id=new se,Wi=new se,ja=new se,Va=new se,Vm=new se,rd=new se,ad=new se,sd=new se,od=new Kt,ld=new Kt,cd=new Kt;class mi{constructor(e=new se,t=new se,a=new se){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,o){o.subVectors(a,t),fi.subVectors(e,t),o.cross(fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,a,o,l){fi.subVectors(o,t),Gi.subVectors(a,t),id.subVectors(e,t);const d=fi.dot(fi),h=fi.dot(Gi),p=fi.dot(id),m=Gi.dot(Gi),_=Gi.dot(id),x=d*m-h*h;if(x===0)return l.set(0,0,0),null;const g=1/x,E=(m*p-h*_)*g,b=(d*_-h*p)*g;return l.set(1-E-b,b,E)}static containsPoint(e,t,a,o){return this.getBarycoord(e,t,a,o,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,a,o,l,d,h,p){return this.getBarycoord(e,t,a,o,Wi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Wi.x),p.addScaledVector(d,Wi.y),p.addScaledVector(h,Wi.z),p)}static getInterpolatedAttribute(e,t,a,o,l,d){return od.setScalar(0),ld.setScalar(0),cd.setScalar(0),od.fromBufferAttribute(e,t),ld.fromBufferAttribute(e,a),cd.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(od,l.x),d.addScaledVector(ld,l.y),d.addScaledVector(cd,l.z),d}static isFrontFacing(e,t,a,o){return fi.subVectors(a,t),Gi.subVectors(e,t),fi.cross(Gi).dot(o)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,o){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,a,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),fi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,o,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,a,o,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,o=this.b,l=this.c;let d,h;ja.subVectors(o,a),Va.subVectors(l,a),rd.subVectors(e,a);const p=ja.dot(rd),m=Va.dot(rd);if(p<=0&&m<=0)return t.copy(a);ad.subVectors(e,o);const _=ja.dot(ad),x=Va.dot(ad);if(_>=0&&x<=_)return t.copy(o);const g=p*x-_*m;if(g<=0&&p>=0&&_<=0)return d=p/(p-_),t.copy(a).addScaledVector(ja,d);sd.subVectors(e,l);const E=ja.dot(sd),b=Va.dot(sd);if(b>=0&&E<=b)return t.copy(l);const R=E*m-p*b;if(R<=0&&m>=0&&b<=0)return h=m/(m-b),t.copy(a).addScaledVector(Va,h);const S=_*b-E*x;if(S<=0&&x-_>=0&&E-b>=0)return Vm.subVectors(l,o),h=(x-_)/(x-_+(E-b)),t.copy(o).addScaledVector(Vm,h);const y=1/(S+R+g);return d=R*y,h=g*y,t.copy(a).addScaledVector(ja,d).addScaledVector(Va,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class so{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=l.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,hi):hi.fromBufferAttribute(l,d),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Tl.copy(a.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),bl.subVectors(this.max,Ws),Ha.subVectors(e.a,Ws),Ga.subVectors(e.b,Ws),Wa.subVectors(e.c,Ws),Ar.subVectors(Ga,Ha),wr.subVectors(Wa,Ga),Jr.subVectors(Ha,Wa);let t=[0,-Ar.z,Ar.y,0,-wr.z,wr.y,0,-Jr.z,Jr.y,Ar.z,0,-Ar.x,wr.z,0,-wr.x,Jr.z,0,-Jr.x,-Ar.y,Ar.x,0,-wr.y,wr.x,0,-Jr.y,Jr.x,0];return!ud(t,Ha,Ga,Wa,bl)||(t=[1,0,0,0,1,0,0,0,1],!ud(t,Ha,Ga,Wa,bl))?!1:(Al.crossVectors(Ar,wr),t=[Al.x,Al.y,Al.z],ud(t,Ha,Ga,Wa,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new se,new se,new se,new se,new se,new se,new se,new se],hi=new se,Tl=new so,Ha=new se,Ga=new se,Wa=new se,Ar=new se,wr=new se,Jr=new se,Ws=new se,bl=new se,Al=new se,ea=new se;function ud(r,e,t,a,o){for(let l=0,d=r.length-3;l<=d;l+=3){ea.fromArray(r,l);const h=o.x*Math.abs(ea.x)+o.y*Math.abs(ea.y)+o.z*Math.abs(ea.z),p=e.dot(ea),m=t.dot(ea),_=a.dot(ea);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const Qt=new se,wl=new Lt;let TS=0;class Ni{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=Cm,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=Hs(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Fn(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),a=Fn(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,o){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),a=Fn(a,this.array),o=Fn(o,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,t,a,o,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),a=Fn(a,this.array),o=Fn(o,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cm&&(e.usage=this.usage),e}}class rv extends Ni{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class av extends Ni{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class Qi extends Ni{constructor(e,t,a){super(new Float32Array(e),t,a)}}const bS=new so,Xs=new se,dd=new se;class Of{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):bS.setFromPoints(e).getCenter(a);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),o=(a-this.radius)*.5;this.center.addScaledVector(Xs,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(dd)),this.expandByPoint(Xs.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let AS=0;const ti=new en,fd=new Wn,Xa=new se,Gn=new so,qs=new so,cn=new se;class nr extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aS(e)?av:rv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new ht().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,a){return ti.makeTranslation(e,t,a),this.applyMatrix4(ti),this}scale(e,t,a){return ti.makeScale(e,t,a),this.applyMatrix4(ti),this}lookAt(e){return fd.lookAt(e),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xa).negate(),this.translate(Xa.x,Xa.y,Xa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];a.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Qi(a,3))}else{const a=Math.min(e.length,t.count);for(let o=0;o<a;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const l=t[a];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Of);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const a=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const h=t[l];qs.setFromBufferAttribute(h),this.morphTargetsRelative?(cn.addVectors(Gn.min,qs.min),Gn.expandByPoint(cn),cn.addVectors(Gn.max,qs.max),Gn.expandByPoint(cn)):(Gn.expandByPoint(qs.min),Gn.expandByPoint(qs.max))}Gn.getCenter(a);let o=0;for(let l=0,d=e.count;l<d;l++)cn.fromBufferAttribute(e,l),o=Math.max(o,a.distanceToSquared(cn));if(t)for(let l=0,d=t.length;l<d;l++){const h=t[l],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)cn.fromBufferAttribute(h,m),p&&(Xa.fromBufferAttribute(e,m),cn.add(Xa)),o=Math.max(o,a.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*a.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let M=0;M<a.count;M++)h[M]=new se,p[M]=new se;const m=new se,_=new se,x=new se,g=new Lt,E=new Lt,b=new Lt,R=new se,S=new se;function y(M,C,K){m.fromBufferAttribute(a,M),_.fromBufferAttribute(a,C),x.fromBufferAttribute(a,K),g.fromBufferAttribute(l,M),E.fromBufferAttribute(l,C),b.fromBufferAttribute(l,K),_.sub(m),x.sub(m),E.sub(g),b.sub(g);const O=1/(E.x*b.y-b.x*E.y);isFinite(O)&&(R.copy(_).multiplyScalar(b.y).addScaledVector(x,-E.y).multiplyScalar(O),S.copy(x).multiplyScalar(E.x).addScaledVector(_,-b.x).multiplyScalar(O),h[M].add(R),h[C].add(R),h[K].add(R),p[M].add(S),p[C].add(S),p[K].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let M=0,C=N.length;M<C;++M){const K=N[M],O=K.start,$=K.count;for(let J=O,ce=O+$;J<ce;J+=3)y(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const L=new se,P=new se,k=new se,U=new se;function B(M){k.fromBufferAttribute(o,M),U.copy(k);const C=h[M];L.copy(C),L.sub(k.multiplyScalar(k.dot(C))).normalize(),P.crossVectors(U,C);const O=P.dot(p[M])<0?-1:1;d.setXYZW(M,L.x,L.y,L.z,O)}for(let M=0,C=N.length;M<C;++M){const K=N[M],O=K.start,$=K.count;for(let J=O,ce=O+$;J<ce;J+=3)B(e.getX(J+0)),B(e.getX(J+1)),B(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let g=0,E=a.count;g<E;g++)a.setXYZ(g,0,0,0);const o=new se,l=new se,d=new se,h=new se,p=new se,m=new se,_=new se,x=new se;if(e)for(let g=0,E=e.count;g<E;g+=3){const b=e.getX(g+0),R=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,R),d.fromBufferAttribute(t,S),_.subVectors(d,l),x.subVectors(o,l),_.cross(x),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,R),m.fromBufferAttribute(a,S),h.add(_),p.add(_),m.add(_),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(R,p.x,p.y,p.z),a.setXYZ(S,m.x,m.y,m.z)}else for(let g=0,E=t.count;g<E;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),d.fromBufferAttribute(t,g+2),_.subVectors(d,l),x.subVectors(o,l),_.cross(x),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(h,p){const m=h.array,_=h.itemSize,x=h.normalized,g=new m.constructor(p.length*_);let E=0,b=0;for(let R=0,S=p.length;R<S;R++){h.isInterleavedBufferAttribute?E=p[R]*h.data.stride+h.offset:E=p[R]*_;for(let y=0;y<_;y++)g[b++]=m[E++]}return new Ni(g,_,x)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nr,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=e(p,a);t.setAttribute(h,m)}const l=this.morphAttributes;for(const h in l){const p=[],m=l[h];for(let _=0,x=m.length;_<x;_++){const g=m[_],E=e(g,a);p.push(E)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const p in a){const m=a[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,g=m.length;x<g;x++){const E=m[x];_.push(E.toJSON(e.data))}_.length>0&&(o[p]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(t))}const l=e.morphAttributes;for(const m in l){const _=[],x=l[m];for(let g=0,E=x.length;g<E;g++)_.push(x[g].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let wS=0;class ic extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Ka,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Nd,this.blendEquation=sa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ka&&(a.blending=this.blending),this.side!==Ur&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Rd&&(a.blendSrc=this.blendSrc),this.blendDst!==Nd&&(a.blendDst=this.blendDst),this.blendEquation!==sa&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Ja&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fa&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Fa&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Fa&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(l){const d=[];for(const h in l){const p=l[h];delete p.metadata,d.push(p)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(a.textures=l),d.length>0&&(a.images=d)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const o=t.length;a=new Array(o);for(let l=0;l!==o;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qi=new se,hd=new se,Cl=new se,Cr=new se,pd=new se,Rl=new se,md=new se;class CS{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,a,o){hd.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(hd);const l=e.distanceTo(t)*.5,d=-this.direction.dot(Cl),h=Cr.dot(this.direction),p=-Cr.dot(Cl),m=Cr.lengthSq(),_=Math.abs(1-d*d);let x,g,E,b;if(_>0)if(x=d*p-h,g=d*h-p,b=l*_,x>=0)if(g>=-b)if(g<=b){const R=1/_;x*=R,g*=R,E=x*(x+d*g+2*h)+g*(d*x+g+2*p)+m}else g=l,x=Math.max(0,-(d*g+h)),E=-x*x+g*(g+2*p)+m;else g=-l,x=Math.max(0,-(d*g+h)),E=-x*x+g*(g+2*p)+m;else g<=-b?(x=Math.max(0,-(-d*l+h)),g=x>0?-l:Math.min(Math.max(-l,-p),l),E=-x*x+g*(g+2*p)+m):g<=b?(x=0,g=Math.min(Math.max(-l,-p),l),E=g*(g+2*p)+m):(x=Math.max(0,-(d*l+h)),g=x>0?l:Math.min(Math.max(-l,-p),l),E=-x*x+g*(g+2*p)+m);else g=d>0?-l:l,x=Math.max(0,-(d*g+h)),E=-x*x+g*(g+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(hd).addScaledVector(Cl,g),E}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const a=qi.dot(this.direction),o=qi.dot(qi)-a*a,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),h=a-d,p=a+d;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,o,l,d,h,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return m>=0?(a=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(a=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),_>=0?(l=(e.min.y-g.y)*_,d=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,d=(e.min.y-g.y)*_),a>d||l>o||((l>a||isNaN(a))&&(a=l),(d<o||isNaN(o))&&(o=d),x>=0?(h=(e.min.z-g.z)*x,p=(e.max.z-g.z)*x):(h=(e.max.z-g.z)*x,p=(e.min.z-g.z)*x),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,a,o,l){pd.subVectors(t,e),Rl.subVectors(a,e),md.crossVectors(pd,Rl);let d=this.direction.dot(md),h;if(d>0){if(o)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Cr.subVectors(this.origin,e);const p=h*this.direction.dot(Rl.crossVectors(Cr,Rl));if(p<0)return null;const m=h*this.direction.dot(pd.cross(Cr));if(m<0||p+m>d)return null;const _=-h*Cr.dot(md);return _<0?null:this.at(_/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sv extends ic{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hm=new en,ta=new CS,Nl=new Of,Gm=new se,Pl=new se,Dl=new se,Ll=new se,gd=new se,Il=new se,Wm=new se,Ul=new se;class Di extends Wn{constructor(e=new nr,t=new sv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const o=t[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const a=this.geometry,o=a.attributes.position,l=a.morphAttributes.position,d=a.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){Il.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const _=h[p],x=l[p];_!==0&&(gd.fromBufferAttribute(x,e),d?Il.addScaledVector(gd,_):Il.addScaledVector(gd.sub(t),_))}t.add(Il)}return t}raycast(e,t){const a=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Nl.copy(a.boundingSphere),Nl.applyMatrix4(l),ta.copy(e.ray).recast(e.near),!(Nl.containsPoint(ta.origin)===!1&&(ta.intersectSphere(Nl,Gm)===null||ta.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(Hm.copy(l).invert(),ta.copy(e.ray).applyMatrix4(Hm),!(a.boundingBox!==null&&ta.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,ta)))}_computeIntersections(e,t,a){let o;const l=this.geometry,d=this.material,h=l.index,p=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,x=l.attributes.normal,g=l.groups,E=l.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,R=g.length;b<R;b++){const S=g[b],y=d[S.materialIndex],N=Math.max(S.start,E.start),L=Math.min(h.count,Math.min(S.start+S.count,E.start+E.count));for(let P=N,k=L;P<k;P+=3){const U=h.getX(P),B=h.getX(P+1),M=h.getX(P+2);o=Fl(this,y,e,a,m,_,x,U,B,M),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const b=Math.max(0,E.start),R=Math.min(h.count,E.start+E.count);for(let S=b,y=R;S<y;S+=3){const N=h.getX(S),L=h.getX(S+1),P=h.getX(S+2);o=Fl(this,d,e,a,m,_,x,N,L,P),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,R=g.length;b<R;b++){const S=g[b],y=d[S.materialIndex],N=Math.max(S.start,E.start),L=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let P=N,k=L;P<k;P+=3){const U=P,B=P+1,M=P+2;o=Fl(this,y,e,a,m,_,x,U,B,M),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const b=Math.max(0,E.start),R=Math.min(p.count,E.start+E.count);for(let S=b,y=R;S<y;S+=3){const N=S,L=S+1,P=S+2;o=Fl(this,d,e,a,m,_,x,N,L,P),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function RS(r,e,t,a,o,l,d,h){let p;if(e.side===On?p=a.intersectTriangle(d,l,o,!0,h):p=a.intersectTriangle(o,l,d,e.side===Ur,h),p===null)return null;Ul.copy(h),Ul.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Ul);return m<t.near||m>t.far?null:{distance:m,point:Ul.clone(),object:r}}function Fl(r,e,t,a,o,l,d,h,p,m){r.getVertexPosition(h,Pl),r.getVertexPosition(p,Dl),r.getVertexPosition(m,Ll);const _=RS(r,e,t,a,Pl,Dl,Ll,Wm);if(_){const x=new se;mi.getBarycoord(Wm,Pl,Dl,Ll,x),o&&(_.uv=mi.getInterpolatedAttribute(o,h,p,m,x,new Lt)),l&&(_.uv1=mi.getInterpolatedAttribute(l,h,p,m,x,new Lt)),d&&(_.normal=mi.getInterpolatedAttribute(d,h,p,m,x,new se),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:p,c:m,normal:new se,materialIndex:0};mi.getNormal(Pl,Dl,Ll,g.normal),_.face=g,_.barycoord=x}return _}class NS extends wn{constructor(e=null,t=1,a=1,o,l,d,h,p,m=pn,_=pn,x,g){super(null,d,h,p,m,_,o,l,x,g),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new se,PS=new se,DS=new ht;class aa{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,o){return this.normal.set(e,t,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const o=vd.subVectors(a,t).cross(PS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(vd),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||DS.getNormalMatrix(e),o=this.coplanarPoint(vd).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const na=new Of,LS=new Lt(.5,.5),Ol=new se;class ov{constructor(e=new aa,t=new aa,a=new aa,o=new aa,l=new aa,d=new aa){this.planes=[e,t,a,o,l,d]}set(e,t,a,o,l,d){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(a),h[3].copy(o),h[4].copy(l),h[5].copy(d),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=wi,a=!1){const o=this.planes,l=e.elements,d=l[0],h=l[1],p=l[2],m=l[3],_=l[4],x=l[5],g=l[6],E=l[7],b=l[8],R=l[9],S=l[10],y=l[11],N=l[12],L=l[13],P=l[14],k=l[15];if(o[0].setComponents(m-d,E-_,y-b,k-N).normalize(),o[1].setComponents(m+d,E+_,y+b,k+N).normalize(),o[2].setComponents(m+h,E+x,y+R,k+L).normalize(),o[3].setComponents(m-h,E-x,y-R,k-L).normalize(),a)o[4].setComponents(p,g,S,P).normalize(),o[5].setComponents(m-p,E-g,y-S,k-P).normalize();else if(o[4].setComponents(m-p,E-g,y-S,k-P).normalize(),t===wi)o[5].setComponents(m+p,E+g,y+S,k+P).normalize();else if(t===Zl)o[5].setComponents(p,g,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),na.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),na.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(na)}intersectsSprite(e){na.center.set(0,0,0);const t=LS.distanceTo(e.center);return na.radius=.7071067811865476+t,na.applyMatrix4(e.matrixWorld),this.intersectsSphere(na)}intersectsSphere(e){const t=this.planes,a=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const o=t[a];if(Ol.x=o.normal.x>0?e.max.x:e.min.x,Ol.y=o.normal.y>0?e.max.y:e.min.y,Ol.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lv extends wn{constructor(e=[],t=ua,a,o,l,d,h,p,m,_){super(e,t,a,o,l,d,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class no extends wn{constructor(e,t,a=Pi,o,l,d,h=pn,p=pn,m,_=er,x=1){if(_!==er&&_!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:x};super(g,o,l,d,h,p,_,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ff(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class IS extends no{constructor(e,t=Pi,a=ua,o,l,d=pn,h=pn,p,m=er){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,t,a,o,l,d,h,p,m),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cv extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oo extends nr{constructor(e=1,t=1,a=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:o,heightSegments:l,depthSegments:d};const h=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const p=[],m=[],_=[],x=[];let g=0,E=0;b("z","y","x",-1,-1,a,t,e,d,l,0),b("z","y","x",1,-1,a,t,-e,d,l,1),b("x","z","y",1,1,e,a,t,o,d,2),b("x","z","y",1,-1,e,a,-t,o,d,3),b("x","y","z",1,-1,e,t,a,o,l,4),b("x","y","z",-1,-1,e,t,-a,o,l,5),this.setIndex(p),this.setAttribute("position",new Qi(m,3)),this.setAttribute("normal",new Qi(_,3)),this.setAttribute("uv",new Qi(x,2));function b(R,S,y,N,L,P,k,U,B,M,C){const K=P/B,O=k/M,$=P/2,J=k/2,ce=U/2,ee=B+1,ie=M+1;let W=0,Z=0;const le=new se;for(let ue=0;ue<ie;ue++){const F=ue*O-J;for(let q=0;q<ee;q++){const Ce=q*K-$;le[R]=Ce*N,le[S]=F*L,le[y]=ce,m.push(le.x,le.y,le.z),le[R]=0,le[S]=0,le[y]=U>0?1:-1,_.push(le.x,le.y,le.z),x.push(q/B),x.push(1-ue/M),W+=1}}for(let ue=0;ue<M;ue++)for(let F=0;F<B;F++){const q=g+F+ee*ue,Ce=g+F+ee*(ue+1),Xe=g+(F+1)+ee*(ue+1),Qe=g+(F+1)+ee*ue;p.push(q,Ce,Qe),p.push(Ce,Xe,Qe),Z+=6}h.addGroup(E,Z,C),E+=Z,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class lo extends nr{constructor(e=1,t=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:o};const l=e/2,d=t/2,h=Math.floor(a),p=Math.floor(o),m=h+1,_=p+1,x=e/h,g=t/p,E=[],b=[],R=[],S=[];for(let y=0;y<_;y++){const N=y*g-d;for(let L=0;L<m;L++){const P=L*x-l;b.push(P,-N,0),R.push(0,0,1),S.push(L/h),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let N=0;N<h;N++){const L=N+m*y,P=N+m*(y+1),k=N+1+m*(y+1),U=N+1+m*y;E.push(L,P,U),E.push(P,k,U)}this.setIndex(E),this.setAttribute("position",new Qi(b,3)),this.setAttribute("normal",new Qi(R,3)),this.setAttribute("uv",new Qi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.widthSegments,e.heightSegments)}}function is(r){const e={};for(const t in r){e[t]={};for(const a in r[t]){const o=r[t][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=o.clone():Array.isArray(o)?e[t][a]=o.slice():e[t][a]=o}}return e}function An(r){const e={};for(let t=0;t<r.length;t++){const a=is(r[t]);for(const o in a)e[o]=a[o]}return e}function US(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function uv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const FS={clone:is,merge:An};var OS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends ic{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=US(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class BS extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zS extends ic{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jS extends ic{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kl=new se,Bl=new os,Mi=new se;class dv extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kl,Bl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,Bl,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(kl,Bl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,Bl,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new se,Xm=new Lt,qm=new Lt;class pi extends dv{constructor(e=50,t=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_f*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _f*2*Math.atan(Math.tan(Yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,Xm,qm),t.subVectors(qm,Xm)}setViewOffset(e,t,a,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yu*.5*this.fov)/this.zoom,a=2*t,o=this.aspect*a,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/p,t-=d.offsetY*a/m,o*=d.width/p,a*=d.height/m}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kf extends dv{constructor(e=-1,t=1,a=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=a-e,d=a+e,h=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(l,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qa=-90,Ya=1;class VS extends Wn{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new pi(qa,Ya,e,t);o.layers=this.layers,this.add(o);const l=new pi(qa,Ya,e,t);l.layers=this.layers,this.add(l);const d=new pi(qa,Ya,e,t);d.layers=this.layers,this.add(d);const h=new pi(qa,Ya,e,t);h.layers=this.layers,this.add(h);const p=new pi(qa,Ya,e,t);p.layers=this.layers,this.add(p);const m=new pi(qa,Ya,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,o,l,d,h,p]=t;for(const m of t)this.remove(m);if(e===wi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Zl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,h,p,m,_]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(a,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(a,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(a,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(a,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),a.texture.generateMipmaps=R,e.setRenderTarget(a,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(x,g,E),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class HS extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ym(r,e,t,a){const o=GS(a);switch(t){case Zg:return r*e;case Jg:return r*e/o.components*o.byteLength;case Pf:return r*e/o.components*o.byteLength;case ts:return r*e*2/o.components*o.byteLength;case Df:return r*e*2/o.components*o.byteLength;case Qg:return r*e*3/o.components*o.byteLength;case gi:return r*e*4/o.components*o.byteLength;case Lf:return r*e*4/o.components*o.byteLength;case Hl:case Gl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Xl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jd:case Hd:return Math.max(r,16)*Math.max(e,8)/4;case zd:case Vd:return Math.max(r,8)*Math.max(e,8)/2;case Gd:case Wd:case qd:case Yd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xd:case $d:case Kd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ef:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case tf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case nf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case rf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case af:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case sf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case of:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case lf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case cf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case uf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case df:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ff:case hf:case pf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case mf:case gf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vf:case xf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function GS(r){switch(r){case ii:case qg:return{byteLength:1,components:1};case eo:case Yg:case Ji:return{byteLength:2,components:1};case Rf:case Nf:return{byteLength:2,components:4};case Pi:case Cf:case Ai:return{byteLength:4,components:1};case $g:case Kg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fv(){let r=null,e=!1,t=null,a=null;function o(l,d){t(l,d),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function WS(r){const e=new WeakMap;function t(h,p){const m=h.array,_=h.usage,x=m.byteLength,g=r.createBuffer();r.bindBuffer(p,g),r.bufferData(p,m,_),h.onUploadCallback();let E;if(m instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=r.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=r.SHORT;else if(m instanceof Uint32Array)E=r.UNSIGNED_INT;else if(m instanceof Int32Array)E=r.INT;else if(m instanceof Int8Array)E=r.BYTE;else if(m instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function a(h,p,m){const _=p.array,x=p.updateRanges;if(r.bindBuffer(m,h),x.length===0)r.bufferSubData(m,0,_);else{x.sort((E,b)=>E.start-b.start);let g=0;for(let E=1;E<x.length;E++){const b=x[g],R=x[E];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++g,x[g]=R)}x.length=g+1;for(let E=0,b=x.length;E<b;E++){const R=x[E];r.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(r.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,t(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:o,remove:l,update:d}}var XS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ey=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ny=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ry=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ay=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,my=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ky=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ME=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:XS,alphahash_pars_fragment:qS,alphamap_fragment:YS,alphamap_pars_fragment:$S,alphatest_fragment:KS,alphatest_pars_fragment:ZS,aomap_fragment:QS,aomap_pars_fragment:JS,batching_pars_vertex:ey,batching_vertex:ty,begin_vertex:ny,beginnormal_vertex:iy,bsdfs:ry,iridescence_fragment:ay,bumpmap_pars_fragment:sy,clipping_planes_fragment:oy,clipping_planes_pars_fragment:ly,clipping_planes_pars_vertex:cy,clipping_planes_vertex:uy,color_fragment:dy,color_pars_fragment:fy,color_pars_vertex:hy,color_vertex:py,common:my,cube_uv_reflection_fragment:gy,defaultnormal_vertex:vy,displacementmap_pars_vertex:xy,displacementmap_vertex:_y,emissivemap_fragment:Sy,emissivemap_pars_fragment:yy,colorspace_fragment:Ey,colorspace_pars_fragment:My,envmap_fragment:Ty,envmap_common_pars_fragment:by,envmap_pars_fragment:Ay,envmap_pars_vertex:wy,envmap_physical_pars_fragment:ky,envmap_vertex:Cy,fog_vertex:Ry,fog_pars_vertex:Ny,fog_fragment:Py,fog_pars_fragment:Dy,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Iy,lights_lambert_fragment:Uy,lights_lambert_pars_fragment:Fy,lights_pars_begin:Oy,lights_toon_fragment:By,lights_toon_pars_fragment:zy,lights_phong_fragment:jy,lights_phong_pars_fragment:Vy,lights_physical_fragment:Hy,lights_physical_pars_fragment:Gy,lights_fragment_begin:Wy,lights_fragment_maps:Xy,lights_fragment_end:qy,logdepthbuf_fragment:Yy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Zy,map_fragment:Qy,map_pars_fragment:Jy,map_particle_fragment:eE,map_particle_pars_fragment:tE,metalnessmap_fragment:nE,metalnessmap_pars_fragment:iE,morphinstance_vertex:rE,morphcolor_vertex:aE,morphnormal_vertex:sE,morphtarget_pars_vertex:oE,morphtarget_vertex:lE,normal_fragment_begin:cE,normal_fragment_maps:uE,normal_pars_fragment:dE,normal_pars_vertex:fE,normal_vertex:hE,normalmap_pars_fragment:pE,clearcoat_normal_fragment_begin:mE,clearcoat_normal_fragment_maps:gE,clearcoat_pars_fragment:vE,iridescence_pars_fragment:xE,opaque_fragment:_E,packing:SE,premultiplied_alpha_fragment:yE,project_vertex:EE,dithering_fragment:ME,dithering_pars_fragment:TE,roughnessmap_fragment:bE,roughnessmap_pars_fragment:AE,shadowmap_pars_fragment:wE,shadowmap_pars_vertex:CE,shadowmap_vertex:RE,shadowmask_pars_fragment:NE,skinbase_vertex:PE,skinning_pars_vertex:DE,skinning_vertex:LE,skinnormal_vertex:IE,specularmap_fragment:UE,specularmap_pars_fragment:FE,tonemapping_fragment:OE,tonemapping_pars_fragment:kE,transmission_fragment:BE,transmission_pars_fragment:zE,uv_pars_fragment:jE,uv_pars_vertex:VE,uv_vertex:HE,worldpos_vertex:GE,background_vert:WE,background_frag:XE,backgroundCube_vert:qE,backgroundCube_frag:YE,cube_vert:$E,cube_frag:KE,depth_vert:ZE,depth_frag:QE,distance_vert:JE,distance_frag:eM,equirect_vert:tM,equirect_frag:nM,linedashed_vert:iM,linedashed_frag:rM,meshbasic_vert:aM,meshbasic_frag:sM,meshlambert_vert:oM,meshlambert_frag:lM,meshmatcap_vert:cM,meshmatcap_frag:uM,meshnormal_vert:dM,meshnormal_frag:fM,meshphong_vert:hM,meshphong_frag:pM,meshphysical_vert:mM,meshphysical_frag:gM,meshtoon_vert:vM,meshtoon_frag:xM,points_vert:_M,points_frag:SM,shadow_vert:yM,shadow_frag:EM,sprite_vert:MM,sprite_frag:TM},Pe={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},bi={basic:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:An([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:An([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new It(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:An([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:An([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:An([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:An([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:An([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:An([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:An([Pe.common,Pe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:An([Pe.lights,Pe.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};bi.physical={uniforms:An([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const zl={r:0,b:0,g:0},ia=new tr,bM=new en;function AM(r,e,t,a,o,l){const d=new It(0);let h=o===!0?0:1,p,m,_=null,x=0,g=null;function E(N){let L=N.isScene===!0?N.background:null;if(L&&L.isTexture){const P=N.backgroundBlurriness>0;L=e.get(L,P)}return L}function b(N){let L=!1;const P=E(N);P===null?S(d,h):P&&P.isColor&&(S(P,1),L=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?t.buffers.color.setClear(0,0,0,1,l):k==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(N,L){const P=E(L);P&&(P.isCubeTexture||P.mapping===nc)?(m===void 0&&(m=new Di(new oo(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:is(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(k,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),ia.copy(L.backgroundRotation),ia.x*=-1,ia.y*=-1,ia.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ia.y*=-1,ia.z*=-1),m.material.uniforms.envMap.value=P,m.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(ia)),m.material.toneMapped=bt.getTransfer(P.colorSpace)!==Dt,(_!==P||x!==P.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=P,x=P.version,g=r.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Di(new lo(2,2),new vi({name:"BackgroundMaterial",uniforms:is(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=bt.getTransfer(P.colorSpace)!==Dt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||x!==P.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=P,x=P.version,g=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function S(N,L){N.getRGB(zl,uv(r)),t.buffers.color.setClear(zl.r,zl.g,zl.b,L,l)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,L=1){d.set(N),h=L,S(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,S(d,h)},render:b,addToRenderList:R,dispose:y}}function wM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=g(null);let l=o,d=!1;function h(O,$,J,ce,ee){let ie=!1;const W=x(O,ce,J,$);l!==W&&(l=W,m(l.object)),ie=E(O,ce,J,ee),ie&&b(O,ce,J,ee),ee!==null&&e.update(ee,r.ELEMENT_ARRAY_BUFFER),(ie||d)&&(d=!1,P(O,$,J,ce),ee!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function p(){return r.createVertexArray()}function m(O){return r.bindVertexArray(O)}function _(O){return r.deleteVertexArray(O)}function x(O,$,J,ce){const ee=ce.wireframe===!0;let ie=a[$.id];ie===void 0&&(ie={},a[$.id]=ie);const W=O.isInstancedMesh===!0?O.id:0;let Z=ie[W];Z===void 0&&(Z={},ie[W]=Z);let le=Z[J.id];le===void 0&&(le={},Z[J.id]=le);let ue=le[ee];return ue===void 0&&(ue=g(p()),le[ee]=ue),ue}function g(O){const $=[],J=[],ce=[];for(let ee=0;ee<t;ee++)$[ee]=0,J[ee]=0,ce[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:J,attributeDivisors:ce,object:O,attributes:{},index:null}}function E(O,$,J,ce){const ee=l.attributes,ie=$.attributes;let W=0;const Z=J.getAttributes();for(const le in Z)if(Z[le].location>=0){const F=ee[le];let q=ie[le];if(q===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(q=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(q=O.instanceColor)),F===void 0||F.attribute!==q||q&&F.data!==q.data)return!0;W++}return l.attributesNum!==W||l.index!==ce}function b(O,$,J,ce){const ee={},ie=$.attributes;let W=0;const Z=J.getAttributes();for(const le in Z)if(Z[le].location>=0){let F=ie[le];F===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(F=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(F=O.instanceColor));const q={};q.attribute=F,F&&F.data&&(q.data=F.data),ee[le]=q,W++}l.attributes=ee,l.attributesNum=W,l.index=ce}function R(){const O=l.newAttributes;for(let $=0,J=O.length;$<J;$++)O[$]=0}function S(O){y(O,0)}function y(O,$){const J=l.newAttributes,ce=l.enabledAttributes,ee=l.attributeDivisors;J[O]=1,ce[O]===0&&(r.enableVertexAttribArray(O),ce[O]=1),ee[O]!==$&&(r.vertexAttribDivisor(O,$),ee[O]=$)}function N(){const O=l.newAttributes,$=l.enabledAttributes;for(let J=0,ce=$.length;J<ce;J++)$[J]!==O[J]&&(r.disableVertexAttribArray(J),$[J]=0)}function L(O,$,J,ce,ee,ie,W){W===!0?r.vertexAttribIPointer(O,$,J,ee,ie):r.vertexAttribPointer(O,$,J,ce,ee,ie)}function P(O,$,J,ce){R();const ee=ce.attributes,ie=J.getAttributes(),W=$.defaultAttributeValues;for(const Z in ie){const le=ie[Z];if(le.location>=0){let ue=ee[Z];if(ue===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ue!==void 0){const F=ue.normalized,q=ue.itemSize,Ce=e.get(ue);if(Ce===void 0)continue;const Xe=Ce.buffer,Qe=Ce.type,re=Ce.bytesPerElement,ge=Qe===r.INT||Qe===r.UNSIGNED_INT||ue.gpuType===Cf;if(ue.isInterleavedBufferAttribute){const me=ue.data,Oe=me.stride,He=ue.offset;if(me.isInstancedInterleavedBuffer){for(let it=0;it<le.locationSize;it++)y(le.location+it,me.meshPerAttribute);O.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let it=0;it<le.locationSize;it++)S(le.location+it);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let it=0;it<le.locationSize;it++)L(le.location+it,q/le.locationSize,Qe,F,Oe*re,(He+q/le.locationSize*it)*re,ge)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<le.locationSize;me++)y(le.location+me,ue.meshPerAttribute);O.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<le.locationSize;me++)S(le.location+me);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let me=0;me<le.locationSize;me++)L(le.location+me,q/le.locationSize,Qe,F,q*re,q/le.locationSize*me*re,ge)}}else if(W!==void 0){const F=W[Z];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(le.location,F);break;case 3:r.vertexAttrib3fv(le.location,F);break;case 4:r.vertexAttrib4fv(le.location,F);break;default:r.vertexAttrib1fv(le.location,F)}}}}N()}function k(){C();for(const O in a){const $=a[O];for(const J in $){const ce=$[J];for(const ee in ce){const ie=ce[ee];for(const W in ie)_(ie[W].object),delete ie[W];delete ce[ee]}}delete a[O]}}function U(O){if(a[O.id]===void 0)return;const $=a[O.id];for(const J in $){const ce=$[J];for(const ee in ce){const ie=ce[ee];for(const W in ie)_(ie[W].object),delete ie[W];delete ce[ee]}}delete a[O.id]}function B(O){for(const $ in a){const J=a[$];for(const ce in J){const ee=J[ce];if(ee[O.id]===void 0)continue;const ie=ee[O.id];for(const W in ie)_(ie[W].object),delete ie[W];delete ee[O.id]}}}function M(O){for(const $ in a){const J=a[$],ce=O.isInstancedMesh===!0?O.id:0,ee=J[ce];if(ee!==void 0){for(const ie in ee){const W=ee[ie];for(const Z in W)_(W[Z].object),delete W[Z];delete ee[ie]}delete J[ce],Object.keys(J).length===0&&delete a[$]}}}function C(){K(),d=!0,l!==o&&(l=o,m(l.object))}function K(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:C,resetDefaultState:K,dispose:k,releaseStatesOfGeometry:U,releaseStatesOfObject:M,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:S,disableUnusedAttributes:N}}function CM(r,e,t){let a;function o(m){a=m}function l(m,_){r.drawArrays(a,m,_),t.update(_,a,1)}function d(m,_,x){x!==0&&(r.drawArraysInstanced(a,m,_,x),t.update(_,a,x))}function h(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,_,0,x);let E=0;for(let b=0;b<x;b++)E+=_[b];t.update(E,a,1)}function p(m,_,x,g){if(x===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<m.length;b++)d(m[b],_[b],g[b]);else{E.multiDrawArraysInstancedWEBGL(a,m,0,_,0,g,0,x);let b=0;for(let R=0;R<x;R++)b+=_[R]*g[R];t.update(b,a,1)}}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function RM(r,e,t,a){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(B){return!(B!==gi&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const M=B===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ii&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ai&&!M)}function p(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=p(m);_!==m&&(lt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:P,maxSamples:k,samples:U}}function NM(r){const e=this;let t=null,a=0,o=!1,l=!1;const d=new aa,h=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const E=x.length!==0||g||a!==0||o;return o=g,a=x.length,E},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){t=_(x,g,0)},this.setState=function(x,g,E){const b=x.clippingPlanes,R=x.clipIntersection,S=x.clipShadows,y=r.get(x);if(!o||b===null||b.length===0||l&&!S)l?_(null):m();else{const N=l?0:a,L=N*4;let P=y.clippingState||null;p.value=P,P=_(b,g,L,E);for(let k=0;k!==L;++k)P[k]=t[k];y.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(x,g,E,b){const R=x!==null?x.length:0;let S=null;if(R!==0){if(S=p.value,b!==!0||S===null){const y=E+R*4,N=g.matrixWorldInverse;h.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,P=E;L!==R;++L,P+=4)d.copy(x[L]).applyMatrix4(N,h),d.normal.toArray(S,P),S[P+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}const Lr=4,$m=[.125,.215,.35,.446,.526,.582],oa=20,PM=256,Ys=new kf,Km=new It;let xd=null,_d=0,Sd=0,yd=!1;const DM=new se;class Zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,a=.1,o=100,l={}){const{size:d=256,position:h=DM}=l;xd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xd,_d,Sd),this._renderer.xr.enabled=yd,e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ua||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ji,format:gi,colorSpace:ns,depthBuffer:!1},o=Qm(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,t,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LM(l)),this._blurMaterial=UM(l,e,t),this._ggxMaterial=IM(l,e,t)}return o}_compileMaterial(e){const t=new Di(new nr,e);this._renderer.compile(t,Ys)}_sceneToCubeUV(e,t,a,o,l){const p=new pi(90,1,t,a),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,E=x.toneMapping;x.getClearColor(Km),x.toneMapping=Ci,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new oo,new sv({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let y=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,y=!0):(S.color.copy(Km),y=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[L],l.y,l.z)):P===1?(p.up.set(0,0,m[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[L],l.z)):(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[L]));const k=this._cubeSize;$a(o,P*k,L>2?k:0,k,k),x.setRenderTarget(o),y&&x.render(R,p),x.render(e,p)}x.toneMapping=E,x.autoClear=g,e.background=N}_textureToCubeUV(e,t){const a=this._renderer,o=e.mapping===ua||e.mapping===es;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jm());const l=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=l;const h=l.uniforms;h.envMap.value=e;const p=this._cubeSize;$a(t,0,0,3*p,2*p),a.setRenderTarget(t),a.render(d,Ys)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=a}_applyGGXFilter(e,t,a){const o=this._renderer,l=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[a];h.material=d;const p=d.uniforms,m=a/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),x=Math.sqrt(m*m-_*_),g=0+m*1.25,E=x*g,{_lodMax:b}=this,R=this._sizeLods[a],S=3*R*(a>b-Lr?a-b+Lr:0),y=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=b-t,$a(l,S,y,3*R,2*R),o.setRenderTarget(l),o.render(h,Ys),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=b-a,$a(e,S,y,3*R,2*R),o.setRenderTarget(e),o.render(h,Ys)}_blur(e,t,a,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,a,o,"latitudinal",l),this._halfBlur(d,e,a,a,o,"longitudinal",l)}_halfBlur(e,t,a,o,l,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[o];x.material=m;const g=m.uniforms,E=this._sizeLods[a]-1,b=isFinite(l)?Math.PI/(2*E):2*Math.PI/(2*oa-1),R=l/b,S=isFinite(l)?1+Math.floor(_*R):oa;S>oa&&lt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${oa}`);const y=[];let N=0;for(let B=0;B<oa;++B){const M=B/R,C=Math.exp(-M*M/2);y.push(C),B===0?N+=C:B<S&&(N+=2*C)}for(let B=0;B<y.length;B++)y[B]=y[B]/N;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:L}=this;g.dTheta.value=b,g.mipInt.value=L-a;const P=this._sizeLods[o],k=3*P*(o>L-Lr?o-L+Lr:0),U=4*(this._cubeSize-P);$a(t,k,U,3*P,2*P),p.setRenderTarget(t),p.render(x,Ys)}}function LM(r){const e=[],t=[],a=[];let o=r;const l=r-Lr+1+$m.length;for(let d=0;d<l;d++){const h=Math.pow(2,o);e.push(h);let p=1/h;d>r-Lr?p=$m[d-r+Lr-1]:d===0&&(p=0),t.push(p);const m=1/(h-2),_=-m,x=1+m,g=[_,_,x,_,x,x,_,_,x,x,_,x],E=6,b=6,R=3,S=2,y=1,N=new Float32Array(R*b*E),L=new Float32Array(S*b*E),P=new Float32Array(y*b*E);for(let U=0;U<E;U++){const B=U%3*2/3-1,M=U>2?0:-1,C=[B,M,0,B+2/3,M,0,B+2/3,M+1,0,B,M,0,B+2/3,M+1,0,B,M+1,0];N.set(C,R*b*U),L.set(g,S*b*U);const K=[U,U,U,U,U,U];P.set(K,y*b*U)}const k=new nr;k.setAttribute("position",new Ni(N,R)),k.setAttribute("uv",new Ni(L,S)),k.setAttribute("faceIndex",new Ni(P,y)),a.push(new Di(k,null)),o>Lr&&o--}return{lodMeshes:a,sizeLods:e,sigmas:t}}function Qm(r,e,t){const a=new Ri(r,e,t);return a.texture.mapping=nc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function $a(r,e,t,a,o){r.viewport.set(e,t,a,o),r.scissor.set(e,t,a,o)}function IM(r,e,t){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function UM(r,e,t){const a=new Float32Array(oa),o=new se(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:oa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Jm(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function eg(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class hv extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new lv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new oo(5,5,5),l=new vi({name:"CubemapFromEquirect",uniforms:is(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:On,blending:Ki});l.uniforms.tEquirect.value=t;const d=new Di(o,l),h=t.minFilter;return t.minFilter===la&&(t.minFilter=yn),new VS(1,10,this).update(e,d),t.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,a=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,a,o);e.setRenderTarget(l)}}function FM(r){let e=new WeakMap,t=new WeakMap,a=null;function o(g,E=!1){return g==null?null:E?d(g):l(g)}function l(g){if(g&&g.isTexture){const E=g.mapping;if(E===Wu||E===Xu)if(e.has(g)){const b=e.get(g).texture;return h(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const R=new hv(b.height);return R.fromEquirectangularTexture(r,g),e.set(g,R),g.addEventListener("dispose",m),h(R.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const E=g.mapping,b=E===Wu||E===Xu,R=E===ua||E===es;if(b||R){let S=t.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new Zm(r)),S=b?a.fromEquirectangular(g,S):a.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const N=g.image;return b&&N&&N.height>0||R&&N&&p(N)?(a===null&&(a=new Zm(r)),S=b?a.fromEquirectangular(g):a.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function h(g,E){return E===Wu?g.mapping=ua:E===Xu&&(g.mapping=es),g}function p(g){let E=0;const b=6;for(let R=0;R<b;R++)g[R]!==void 0&&E++;return E===b}function m(g){const E=g.target;E.removeEventListener("dispose",m);const b=e.get(E);b!==void 0&&(e.delete(E),b.dispose())}function _(g){const E=g.target;E.removeEventListener("dispose",_);const b=t.get(E);b!==void 0&&(t.delete(E),b.dispose())}function x(){e=new WeakMap,t=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:x}}function OM(r){const e={};function t(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const o=t(a);return o===null&&Jl("WebGLRenderer: "+a+" extension not supported."),o}}}function kM(r,e,t,a){const o={},l=new WeakMap;function d(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete o[g.id];const E=l.get(g);E&&(e.remove(E),l.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function h(x,g){return o[g.id]===!0||(g.addEventListener("dispose",d),o[g.id]=!0,t.memory.geometries++),g}function p(x){const g=x.attributes;for(const E in g)e.update(g[E],r.ARRAY_BUFFER)}function m(x){const g=[],E=x.index,b=x.attributes.position;let R=0;if(b===void 0)return;if(E!==null){const N=E.array;R=E.version;for(let L=0,P=N.length;L<P;L+=3){const k=N[L+0],U=N[L+1],B=N[L+2];g.push(k,U,U,B,B,k)}}else{const N=b.array;R=b.version;for(let L=0,P=N.length/3-1;L<P;L+=3){const k=L+0,U=L+1,B=L+2;g.push(k,U,U,B,B,k)}}const S=new(b.count>=65535?av:rv)(g,1);S.version=R;const y=l.get(x);y&&e.remove(y),l.set(x,S)}function _(x){const g=l.get(x);if(g){const E=x.index;E!==null&&g.version<E.version&&m(x)}else m(x);return l.get(x)}return{get:h,update:p,getWireframeAttribute:_}}function BM(r,e,t){let a;function o(g){a=g}let l,d;function h(g){l=g.type,d=g.bytesPerElement}function p(g,E){r.drawElements(a,E,l,g*d),t.update(E,a,1)}function m(g,E,b){b!==0&&(r.drawElementsInstanced(a,E,l,g*d,b),t.update(E,a,b))}function _(g,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,E,0,l,g,0,b);let S=0;for(let y=0;y<b;y++)S+=E[y];t.update(S,a,1)}function x(g,E,b,R){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<g.length;y++)m(g[y]/d,E[y],R[y]);else{S.multiDrawElementsInstancedWEBGL(a,E,0,l,g,0,R,0,b);let y=0;for(let N=0;N<b;N++)y+=E[N]*R[N];t.update(y,a,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function zM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,d,h){switch(t.calls++,d){case r.TRIANGLES:t.triangles+=h*(l/3);break;case r.LINES:t.lines+=h*(l/2);break;case r.LINE_STRIP:t.lines+=h*(l-1);break;case r.LINE_LOOP:t.lines+=h*l;break;case r.POINTS:t.points+=h*l;break;default:wt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:a}}function jM(r,e,t){const a=new WeakMap,o=new Kt;function l(d,h,p){const m=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let g=a.get(h);if(g===void 0||g.count!==x){let K=function(){M.dispose(),a.delete(h),h.removeEventListener("dispose",K)};var E=K;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let P=0;b===!0&&(P=1),R===!0&&(P=2),S===!0&&(P=3);let k=h.attributes.position.count*P,U=1;k>e.maxTextureSize&&(U=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const B=new Float32Array(k*U*4*x),M=new tv(B,k,U,x);M.type=Ai,M.needsUpdate=!0;const C=P*4;for(let O=0;O<x;O++){const $=y[O],J=N[O],ce=L[O],ee=k*U*4*O;for(let ie=0;ie<$.count;ie++){const W=ie*C;b===!0&&(o.fromBufferAttribute($,ie),B[ee+W+0]=o.x,B[ee+W+1]=o.y,B[ee+W+2]=o.z,B[ee+W+3]=0),R===!0&&(o.fromBufferAttribute(J,ie),B[ee+W+4]=o.x,B[ee+W+5]=o.y,B[ee+W+6]=o.z,B[ee+W+7]=0),S===!0&&(o.fromBufferAttribute(ce,ie),B[ee+W+8]=o.x,B[ee+W+9]=o.y,B[ee+W+10]=o.z,B[ee+W+11]=ce.itemSize===4?o.w:1)}}g={count:x,texture:M,size:new Lt(k,U)},a.set(h,g),h.addEventListener("dispose",K)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",d.morphTexture,t);else{let b=0;for(let S=0;S<m.length;S++)b+=m[S];const R=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",R),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function VM(r,e,t,a,o){let l=new WeakMap;function d(m){const _=o.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==_&&(t.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,_))),m.isSkinnedMesh){const E=m.skeleton;l.get(E)!==_&&(E.update(),l.set(E,_))}return g}function h(){l=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),a.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:d,dispose:h}}const HM={[Bg]:"LINEAR_TONE_MAPPING",[zg]:"REINHARD_TONE_MAPPING",[jg]:"CINEON_TONE_MAPPING",[Vg]:"ACES_FILMIC_TONE_MAPPING",[Gg]:"AGX_TONE_MAPPING",[Wg]:"NEUTRAL_TONE_MAPPING",[Hg]:"CUSTOM_TONE_MAPPING"};function GM(r,e,t,a,o){const l=new Ri(e,t,{type:r,depthBuffer:a,stencilBuffer:o}),d=new Ri(e,t,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),h=new nr;h.setAttribute("position",new Qi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Qi([0,2,0,0,2,0],2));const p=new BS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Di(h,p),_=new kf(-1,1,1,-1,0,1);let x=null,g=null,E=!1,b,R=null,S=[],y=!1;this.setSize=function(N,L){l.setSize(N,L),d.setSize(N,L);for(let P=0;P<S.length;P++){const k=S[P];k.setSize&&k.setSize(N,L)}},this.setEffects=function(N){S=N,y=S.length>0&&S[0].isRenderPass===!0;const L=l.width,P=l.height;for(let k=0;k<S.length;k++){const U=S[k];U.setSize&&U.setSize(L,P)}},this.begin=function(N,L){if(E||N.toneMapping===Ci&&S.length===0)return!1;if(R=L,L!==null){const P=L.width,k=L.height;(l.width!==P||l.height!==k)&&this.setSize(P,k)}return y===!1&&N.setRenderTarget(l),b=N.toneMapping,N.toneMapping=Ci,!0},this.hasRenderPass=function(){return y},this.end=function(N,L){N.toneMapping=b,E=!0;let P=l,k=d;for(let U=0;U<S.length;U++){const B=S[U];if(B.enabled!==!1&&(B.render(N,k,P,L),B.needsSwap!==!1)){const M=P;P=k,k=M}}if(x!==N.outputColorSpace||g!==N.toneMapping){x=N.outputColorSpace,g=N.toneMapping,p.defines={},bt.getTransfer(x)===Dt&&(p.defines.SRGB_TRANSFER="");const U=HM[g];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,N.setRenderTarget(R),N.render(m,_),R=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){l.dispose(),d.dispose(),h.dispose(),p.dispose()}}const pv=new wn,Sf=new no(1,1),mv=new tv,gv=new mS,vv=new lv,tg=[],ng=[],ig=new Float32Array(16),rg=new Float32Array(9),ag=new Float32Array(4);function ls(r,e,t){const a=r[0];if(a<=0||a>0)return r;const o=e*t;let l=tg[o];if(l===void 0&&(l=new Float32Array(o),tg[o]=l),e!==0){a.toArray(l,0);for(let d=1,h=0;d!==e;++d)h+=t,r[d].toArray(l,h)}return l}function rn(r,e){if(r.length!==e.length)return!1;for(let t=0,a=r.length;t<a;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,a=e.length;t<a;t++)r[t]=e[t]}function ac(r,e){let t=ng[e];t===void 0&&(t=new Int32Array(e),ng[e]=t);for(let a=0;a!==e;++a)t[a]=r.allocateTextureUnit();return t}function WM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function XM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function qM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function YM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function $M(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(rn(t,a))return;ag.set(a),r.uniformMatrix2fv(this.addr,!1,ag),an(t,a)}}function KM(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(rn(t,a))return;rg.set(a),r.uniformMatrix3fv(this.addr,!1,rg),an(t,a)}}function ZM(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(rn(t,a))return;ig.set(a),r.uniformMatrix4fv(this.addr,!1,ig),an(t,a)}}function QM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function eT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function tT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function nT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function iT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function rT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function aT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function sT(r,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Sf.compareFunction=t.isReversedDepthBuffer()?Uf:If,l=Sf):l=pv,t.setTexture2D(e||l,o)}function oT(r,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),t.setTexture3D(e||gv,o)}function lT(r,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),t.setTextureCube(e||vv,o)}function cT(r,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),t.setTexture2DArray(e||mv,o)}function uT(r){switch(r){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return YM;case 35674:return $M;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return QM;case 35667:case 35671:return JM;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return rT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}function dT(r,e){r.uniform1fv(this.addr,e)}function fT(r,e){const t=ls(e,this.size,2);r.uniform2fv(this.addr,t)}function hT(r,e){const t=ls(e,this.size,3);r.uniform3fv(this.addr,t)}function pT(r,e){const t=ls(e,this.size,4);r.uniform4fv(this.addr,t)}function mT(r,e){const t=ls(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gT(r,e){const t=ls(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vT(r,e){const t=ls(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xT(r,e){r.uniform1iv(this.addr,e)}function _T(r,e){r.uniform2iv(this.addr,e)}function ST(r,e){r.uniform3iv(this.addr,e)}function yT(r,e){r.uniform4iv(this.addr,e)}function ET(r,e){r.uniform1uiv(this.addr,e)}function MT(r,e){r.uniform2uiv(this.addr,e)}function TT(r,e){r.uniform3uiv(this.addr,e)}function bT(r,e){r.uniform4uiv(this.addr,e)}function AT(r,e,t){const a=this.cache,o=e.length,l=ac(t,o);rn(a,l)||(r.uniform1iv(this.addr,l),an(a,l));let d;this.type===r.SAMPLER_2D_SHADOW?d=Sf:d=pv;for(let h=0;h!==o;++h)t.setTexture2D(e[h]||d,l[h])}function wT(r,e,t){const a=this.cache,o=e.length,l=ac(t,o);rn(a,l)||(r.uniform1iv(this.addr,l),an(a,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||gv,l[d])}function CT(r,e,t){const a=this.cache,o=e.length,l=ac(t,o);rn(a,l)||(r.uniform1iv(this.addr,l),an(a,l));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||vv,l[d])}function RT(r,e,t){const a=this.cache,o=e.length,l=ac(t,o);rn(a,l)||(r.uniform1iv(this.addr,l),an(a,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||mv,l[d])}function NT(r){switch(r){case 5126:return dT;case 35664:return fT;case 35665:return hT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return vT;case 5124:case 35670:return xT;case 35667:case 35671:return _T;case 35668:case 35672:return ST;case 35669:case 35673:return yT;case 5125:return ET;case 36294:return MT;case 36295:return TT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return RT}}class PT{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=uT(t.type)}}class DT{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NT(t.type)}}class LT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const h=o[l];h.setValue(e,t[h.id],a)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function sg(r,e){r.seq.push(e),r.map[e.id]=e}function IT(r,e,t){const a=r.name,o=a.length;for(Ed.lastIndex=0;;){const l=Ed.exec(a),d=Ed.lastIndex;let h=l[1];const p=l[2]==="]",m=l[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===o){sg(t,m===void 0?new PT(h,r,e):new DT(h,r,e));break}else{let x=t.map[h];x===void 0&&(x=new LT(h),sg(t,x)),t=x}}}class ql{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<a;++d){const h=e.getActiveUniform(t,d),p=e.getUniformLocation(t,h.name);IT(h,p,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,a,o){const l=this.map[t];l!==void 0&&l.setValue(e,a,o)}setOptional(e,t,a){const o=t[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,t,a,o){for(let l=0,d=t.length;l!==d;++l){const h=t[l],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,t){const a=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&a.push(d)}return a}}function og(r,e,t){const a=r.createShader(e);return r.shaderSource(a,t),r.compileShader(a),a}const UT=37297;let FT=0;function OT(r,e){const t=r.split(`
`),a=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const h=d+1;a.push(`${h===e?">":" "} ${h}: ${t[d]}`)}return a.join(`
`)}const lg=new ht;function kT(r){bt._getMatrix(lg,bt.workingColorSpace,r);const e=`mat3( ${lg.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(r)){case Kl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function cg(r,e,t){const a=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const h=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+OT(r.getShaderSource(e),h)}else return l}function BT(r,e){const t=kT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zT={[Bg]:"Linear",[zg]:"Reinhard",[jg]:"Cineon",[Vg]:"ACESFilmic",[Gg]:"AgX",[Wg]:"Neutral",[Hg]:"Custom"};function jT(r,e){const t=zT[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new se;function VT(){bt.getLuminanceCoefficients(jl);const r=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function GT(r){const e=[];for(const t in r){const a=r[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function WT(r,e){const t={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const l=r.getActiveAttrib(e,o),d=l.name;let h=1;l.type===r.FLOAT_MAT2&&(h=2),l.type===r.FLOAT_MAT3&&(h=3),l.type===r.FLOAT_MAT4&&(h=4),t[d]={type:l.type,location:r.getAttribLocation(e,d),locationSize:h}}return t}function Zs(r){return r!==""}function ug(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XT=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(r){return r.replace(XT,YT)}const qT=new Map;function YT(r,e){let t=pt[e];if(t===void 0){const a=qT.get(e);if(a!==void 0)t=pt[a],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return yf(t)}const $T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(r){return r.replace($T,KT)}function KT(r,e,t,a){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function hg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZT={[Vl]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function QT(r){return ZT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JT={[ua]:"ENVMAP_TYPE_CUBE",[es]:"ENVMAP_TYPE_CUBE",[nc]:"ENVMAP_TYPE_CUBE_UV"};function e1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":JT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const t1={[es]:"ENVMAP_MODE_REFRACTION"};function n1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":t1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i1={[kg]:"ENVMAP_BLENDING_MULTIPLY",[q_]:"ENVMAP_BLENDING_MIX",[Y_]:"ENVMAP_BLENDING_ADD"};function r1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":i1[r.combine]||"ENVMAP_BLENDING_NONE"}function a1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function s1(r,e,t,a){const o=r.getContext(),l=t.defines;let d=t.vertexShader,h=t.fragmentShader;const p=QT(t),m=e1(t),_=n1(t),x=r1(t),g=a1(t),E=HT(t),b=GT(l),R=o.createProgram();let S,y,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Zs).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Zs).join(`
`),y.length>0&&(y+=`
`)):(S=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),y=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ci?jT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,BT("linearToOutputTexel",t.outputColorSpace),VT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),d=yf(d),d=ug(d,t),d=dg(d,t),h=yf(h),h=ug(h,t),h=dg(h,t),d=fg(d),h=fg(h),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=N+S+d,P=N+y+h,k=og(o,o.VERTEX_SHADER,L),U=og(o,o.FRAGMENT_SHADER,P);o.attachShader(R,k),o.attachShader(R,U),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function B(O){if(r.debug.checkShaderErrors){const $=o.getProgramInfoLog(R)||"",J=o.getShaderInfoLog(k)||"",ce=o.getShaderInfoLog(U)||"",ee=$.trim(),ie=J.trim(),W=ce.trim();let Z=!0,le=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,R,k,U);else{const ue=cg(o,k,"vertex"),F=cg(o,U,"fragment");wt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ee+`
`+ue+`
`+F)}else ee!==""?lt("WebGLProgram: Program Info Log:",ee):(ie===""||W==="")&&(le=!1);le&&(O.diagnostics={runnable:Z,programLog:ee,vertexShader:{log:ie,prefix:S},fragmentShader:{log:W,prefix:y}})}o.deleteShader(k),o.deleteShader(U),M=new ql(o,R),C=WT(o,R)}let M;this.getUniforms=function(){return M===void 0&&B(this),M};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=o.getProgramParameter(R,UT)),K},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FT++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=k,this.fragmentShader=U,this}let o1=0;class l1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(a),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new c1(e),t.set(e,a)),a}}class c1{constructor(e){this.id=o1++,this.code=e,this.usedTimes=0}}function u1(r,e,t,a,o,l){const d=new nv,h=new l1,p=new Set,m=[],_=new Map,x=a.logarithmicDepthBuffer;let g=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return p.add(M),M===0?"uv":`uv${M}`}function R(M,C,K,O,$){const J=O.fog,ce=$.geometry,ee=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,ie=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,W=e.get(M.envMap||ee,ie),Z=W&&W.mapping===nc?W.image.height:null,le=E[M.type];M.precision!==null&&(g=a.getMaxPrecision(M.precision),g!==M.precision&&lt("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const ue=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,F=ue!==void 0?ue.length:0;let q=0;ce.morphAttributes.position!==void 0&&(q=1),ce.morphAttributes.normal!==void 0&&(q=2),ce.morphAttributes.color!==void 0&&(q=3);let Ce,Xe,Qe,re;if(le){const Mt=bi[le];Ce=Mt.vertexShader,Xe=Mt.fragmentShader}else Ce=M.vertexShader,Xe=M.fragmentShader,h.update(M),Qe=h.getVertexShaderID(M),re=h.getFragmentShaderID(M);const ge=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),Oe=$.isInstancedMesh===!0,He=$.isBatchedMesh===!0,it=!!M.map,Xt=!!M.matcap,mt=!!W,yt=!!M.aoMap,Rt=!!M.lightMap,dt=!!M.bumpMap,kt=!!M.normalMap,j=!!M.displacementMap,jt=!!M.emissiveMap,vt=!!M.metalnessMap,Et=!!M.roughnessMap,Ge=M.anisotropy>0,D=M.clearcoat>0,T=M.dispersion>0,G=M.iridescence>0,he=M.sheen>0,ve=M.transmission>0,de=Ge&&!!M.anisotropyMap,Be=D&&!!M.clearcoatMap,Ae=D&&!!M.clearcoatNormalMap,$e=D&&!!M.clearcoatRoughnessMap,rt=G&&!!M.iridescenceMap,ye=G&&!!M.iridescenceThicknessMap,be=he&&!!M.sheenColorMap,We=he&&!!M.sheenRoughnessMap,ze=!!M.specularMap,De=!!M.specularColorMap,ct=!!M.specularIntensityMap,V=ve&&!!M.transmissionMap,we=ve&&!!M.thicknessMap,Me=!!M.gradientMap,Le=!!M.alphaMap,Ee=M.alphaTest>0,fe=!!M.alphaHash,je=!!M.extensions;let at=Ci;M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(at=r.toneMapping);const Pt={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:Ce,fragmentShader:Xe,defines:M.defines,customVertexShaderID:Qe,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:He,batchingColor:He&&$._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&$.instanceColor!==null,instancingMorph:Oe&&$.morphTexture!==null,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:ns,alphaToCoverage:!!M.alphaToCoverage,map:it,matcap:Xt,envMap:mt,envMapMode:mt&&W.mapping,envMapCubeUVHeight:Z,aoMap:yt,lightMap:Rt,bumpMap:dt,normalMap:kt,displacementMap:j,emissiveMap:jt,normalMapObjectSpace:kt&&M.normalMapType===Q_,normalMapTangentSpace:kt&&M.normalMapType===Z_,metalnessMap:vt,roughnessMap:Et,anisotropy:Ge,anisotropyMap:de,clearcoat:D,clearcoatMap:Be,clearcoatNormalMap:Ae,clearcoatRoughnessMap:$e,dispersion:T,iridescence:G,iridescenceMap:rt,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:be,sheenRoughnessMap:We,specularMap:ze,specularColorMap:De,specularIntensityMap:ct,transmission:ve,transmissionMap:V,thicknessMap:we,gradientMap:Me,opaque:M.transparent===!1&&M.blending===Ka&&M.alphaToCoverage===!1,alphaMap:Le,alphaTest:Ee,alphaHash:fe,combine:M.combine,mapUv:it&&b(M.map.channel),aoMapUv:yt&&b(M.aoMap.channel),lightMapUv:Rt&&b(M.lightMap.channel),bumpMapUv:dt&&b(M.bumpMap.channel),normalMapUv:kt&&b(M.normalMap.channel),displacementMapUv:j&&b(M.displacementMap.channel),emissiveMapUv:jt&&b(M.emissiveMap.channel),metalnessMapUv:vt&&b(M.metalnessMap.channel),roughnessMapUv:Et&&b(M.roughnessMap.channel),anisotropyMapUv:de&&b(M.anisotropyMap.channel),clearcoatMapUv:Be&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:We&&b(M.sheenRoughnessMap.channel),specularMapUv:ze&&b(M.specularMap.channel),specularColorMapUv:De&&b(M.specularColorMap.channel),specularIntensityMapUv:ct&&b(M.specularIntensityMap.channel),transmissionMapUv:V&&b(M.transmissionMap.channel),thicknessMapUv:we&&b(M.thicknessMap.channel),alphaMapUv:Le&&b(M.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(kt||Ge),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ce.attributes.uv&&(it||Le),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||ce.attributes.normal===void 0&&kt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:me,skinning:$.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&K.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:it&&M.map.isVideoTexture===!0&&bt.getTransfer(M.map.colorSpace)===Dt,decodeVideoTextureEmissive:jt&&M.emissiveMap.isVideoTexture===!0&&bt.getTransfer(M.emissiveMap.colorSpace)===Dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Yi,flipSided:M.side===On,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:je&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&M.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function S(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const K in M.defines)C.push(K),C.push(M.defines[K]);return M.isRawShaderMaterial===!1&&(y(C,M),N(C,M),C.push(r.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function y(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function N(M,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),M.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),M.push(d.mask)}function L(M){const C=E[M.type];let K;if(C){const O=bi[C];K=FS.clone(O.uniforms)}else K=M.uniforms;return K}function P(M,C){let K=_.get(C);return K!==void 0?++K.usedTimes:(K=new s1(r,C,M,o),m.push(K),_.set(C,K)),K}function k(M){if(--M.usedTimes===0){const C=m.indexOf(M);m[C]=m[m.length-1],m.pop(),_.delete(M.cacheKey),M.destroy()}}function U(M){h.remove(M)}function B(){h.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:L,acquireProgram:P,releaseProgram:k,releaseShaderCache:U,programs:m,dispose:B}}function d1(){let r=new WeakMap;function e(d){return r.has(d)}function t(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function a(d){r.delete(d)}function o(d,h,p){r.get(d)[h]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:a,update:o,dispose:l}}function f1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function pg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function mg(){const r=[];let e=0;const t=[],a=[],o=[];function l(){e=0,t.length=0,a.length=0,o.length=0}function d(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function h(g,E,b,R,S,y){let N=r[e];return N===void 0?(N={id:g.id,object:g,geometry:E,material:b,materialVariant:d(g),groupOrder:R,renderOrder:g.renderOrder,z:S,group:y},r[e]=N):(N.id=g.id,N.object=g,N.geometry=E,N.material=b,N.materialVariant=d(g),N.groupOrder=R,N.renderOrder=g.renderOrder,N.z=S,N.group=y),e++,N}function p(g,E,b,R,S,y){const N=h(g,E,b,R,S,y);b.transmission>0?a.push(N):b.transparent===!0?o.push(N):t.push(N)}function m(g,E,b,R,S,y){const N=h(g,E,b,R,S,y);b.transmission>0?a.unshift(N):b.transparent===!0?o.unshift(N):t.unshift(N)}function _(g,E){t.length>1&&t.sort(g||f1),a.length>1&&a.sort(E||pg),o.length>1&&o.sort(E||pg)}function x(){for(let g=e,E=r.length;g<E;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:a,transparent:o,init:l,push:p,unshift:m,finish:x,sort:_}}function h1(){let r=new WeakMap;function e(a,o){const l=r.get(a);let d;return l===void 0?(d=new mg,r.set(a,[d])):o>=l.length?(d=new mg,l.push(d)):d=l[o],d}function t(){r=new WeakMap}return{get:e,dispose:t}}function p1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new It};break;case"SpotLight":t={position:new se,direction:new se,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new It,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new It,groundColor:new It};break;case"RectAreaLight":t={color:new It,position:new se,halfWidth:new se,halfHeight:new se};break}return r[e.id]=t,t}}}function m1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let g1=0;function v1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function x1(r){const e=new p1,t=m1(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new se);const o=new se,l=new en,d=new en;function h(m){let _=0,x=0,g=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let E=0,b=0,R=0,S=0,y=0,N=0,L=0,P=0,k=0,U=0,B=0;m.sort(v1);for(let C=0,K=m.length;C<K;C++){const O=m[C],$=O.color,J=O.intensity,ce=O.distance;let ee=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ts?ee=O.shadow.map.texture:ee=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)_+=$.r*J,x+=$.g*J,g+=$.b*J;else if(O.isLightProbe){for(let ie=0;ie<9;ie++)a.probe[ie].addScaledVector(O.sh.coefficients[ie],J);B++}else if(O.isDirectionalLight){const ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const W=O.shadow,Z=t.get(O);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,a.directionalShadow[E]=Z,a.directionalShadowMap[E]=ee,a.directionalShadowMatrix[E]=O.shadow.matrix,N++}a.directional[E]=ie,E++}else if(O.isSpotLight){const ie=e.get(O);ie.position.setFromMatrixPosition(O.matrixWorld),ie.color.copy($).multiplyScalar(J),ie.distance=ce,ie.coneCos=Math.cos(O.angle),ie.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ie.decay=O.decay,a.spot[R]=ie;const W=O.shadow;if(O.map&&(a.spotLightMap[k]=O.map,k++,W.updateMatrices(O),O.castShadow&&U++),a.spotLightMatrix[R]=W.matrix,O.castShadow){const Z=t.get(O);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,a.spotShadow[R]=Z,a.spotShadowMap[R]=ee,P++}R++}else if(O.isRectAreaLight){const ie=e.get(O);ie.color.copy($).multiplyScalar(J),ie.halfWidth.set(O.width*.5,0,0),ie.halfHeight.set(0,O.height*.5,0),a.rectArea[S]=ie,S++}else if(O.isPointLight){const ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),ie.distance=O.distance,ie.decay=O.decay,O.castShadow){const W=O.shadow,Z=t.get(O);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,a.pointShadow[b]=Z,a.pointShadowMap[b]=ee,a.pointShadowMatrix[b]=O.shadow.matrix,L++}a.point[b]=ie,b++}else if(O.isHemisphereLight){const ie=e.get(O);ie.skyColor.copy(O.color).multiplyScalar(J),ie.groundColor.copy(O.groundColor).multiplyScalar(J),a.hemi[y]=ie,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pe.LTC_FLOAT_1,a.rectAreaLTC2=Pe.LTC_FLOAT_2):(a.rectAreaLTC1=Pe.LTC_HALF_1,a.rectAreaLTC2=Pe.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=x,a.ambient[2]=g;const M=a.hash;(M.directionalLength!==E||M.pointLength!==b||M.spotLength!==R||M.rectAreaLength!==S||M.hemiLength!==y||M.numDirectionalShadows!==N||M.numPointShadows!==L||M.numSpotShadows!==P||M.numSpotMaps!==k||M.numLightProbes!==B)&&(a.directional.length=E,a.spot.length=R,a.rectArea.length=S,a.point.length=b,a.hemi.length=y,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=P,a.spotShadowMap.length=P,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=P+k-U,a.spotLightMap.length=k,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=B,M.directionalLength=E,M.pointLength=b,M.spotLength=R,M.rectAreaLength=S,M.hemiLength=y,M.numDirectionalShadows=N,M.numPointShadows=L,M.numSpotShadows=P,M.numSpotMaps=k,M.numLightProbes=B,a.version=g1++)}function p(m,_){let x=0,g=0,E=0,b=0,R=0;const S=_.matrixWorldInverse;for(let y=0,N=m.length;y<N;y++){const L=m[y];if(L.isDirectionalLight){const P=a.directional[x];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),x++}else if(L.isSpotLight){const P=a.spot[E];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),E++}else if(L.isRectAreaLight){const P=a.rectArea[b];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),d.identity(),l.copy(L.matrixWorld),l.premultiply(S),d.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),b++}else if(L.isPointLight){const P=a.point[g];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),g++}else if(L.isHemisphereLight){const P=a.hemi[R];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(S),R++}}}return{setup:h,setupView:p,state:a}}function gg(r){const e=new x1(r),t=[],a=[];function o(_){m.camera=_,t.length=0,a.length=0}function l(_){t.push(_)}function d(_){a.push(_)}function h(){e.setup(t)}function p(_){e.setupView(t,_)}const m={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:l,pushShadow:d}}function _1(r){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let h;return d===void 0?(h=new gg(r),e.set(o,[h])):l>=d.length?(h=new gg(r),d.push(h)):h=d[l],h}function a(){e=new WeakMap}return{get:t,dispose:a}}const S1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,E1=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],M1=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],vg=new en,$s=new se,Md=new se;function T1(r,e,t){let a=new ov;const o=new Lt,l=new Lt,d=new Kt,h=new zS,p=new jS,m={},_=t.maxTextureSize,x={[Ur]:On,[On]:Ur,[Yi]:Yi},g=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:S1,fragmentShader:y1}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const b=new nr;b.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Di(b,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let y=this.type;this.render=function(U,B,M){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;this.type===C_&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vl);const C=r.getRenderTarget(),K=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),$=r.state;$.setBlending(Ki),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const J=y!==this.type;J&&B.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(ee=>ee.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,ee=U.length;ce<ee;ce++){const ie=U[ce],W=ie.shadow;if(W===void 0){lt("WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const Z=W.getFrameExtents();o.multiply(Z),l.copy(W.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/Z.x),o.x=l.x*Z.x,W.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/Z.y),o.y=l.y*Z.y,W.mapSize.y=l.y));const le=r.state.buffers.depth.getReversed();if(W.camera._reversedDepth=le,W.map===null||J===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ks){if(ie.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ri(o.x,o.y,{format:ts,type:Ji,minFilter:yn,magFilter:yn,generateMipmaps:!1}),W.map.texture.name=ie.name+".shadowMap",W.map.depthTexture=new no(o.x,o.y,Ai),W.map.depthTexture.name=ie.name+".shadowMapDepth",W.map.depthTexture.format=er,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=pn,W.map.depthTexture.magFilter=pn}else ie.isPointLight?(W.map=new hv(o.x),W.map.depthTexture=new IS(o.x,Pi)):(W.map=new Ri(o.x,o.y),W.map.depthTexture=new no(o.x,o.y,Pi)),W.map.depthTexture.name=ie.name+".shadowMap",W.map.depthTexture.format=er,this.type===Vl?(W.map.depthTexture.compareFunction=le?Uf:If,W.map.depthTexture.minFilter=yn,W.map.depthTexture.magFilter=yn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=pn,W.map.depthTexture.magFilter=pn);W.camera.updateProjectionMatrix()}const ue=W.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<ue;F++){if(W.map.isWebGLCubeRenderTarget)r.setRenderTarget(W.map,F),r.clear();else{F===0&&(r.setRenderTarget(W.map),r.clear());const q=W.getViewport(F);d.set(l.x*q.x,l.y*q.y,l.x*q.z,l.y*q.w),$.viewport(d)}if(ie.isPointLight){const q=W.camera,Ce=W.matrix,Xe=ie.distance||q.far;Xe!==q.far&&(q.far=Xe,q.updateProjectionMatrix()),$s.setFromMatrixPosition(ie.matrixWorld),q.position.copy($s),Md.copy(q.position),Md.add(E1[F]),q.up.copy(M1[F]),q.lookAt(Md),q.updateMatrixWorld(),Ce.makeTranslation(-$s.x,-$s.y,-$s.z),vg.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),W._frustum.setFromProjectionMatrix(vg,q.coordinateSystem,q.reversedDepth)}else W.updateMatrices(ie);a=W.getFrustum(),P(B,M,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===Ks&&N(W,M),W.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(C,K,O)};function N(U,B){const M=e.update(R);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ri(o.x,o.y,{format:ts,type:Ji})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(B,null,M,g,R,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value=U.mapSize,E.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(B,null,M,E,R,null)}function L(U,B,M,C){let K=null;const O=M.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(O!==void 0)K=O;else if(K=M.isPointLight===!0?p:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=K.uuid,J=B.uuid;let ce=m[$];ce===void 0&&(ce={},m[$]=ce);let ee=ce[J];ee===void 0&&(ee=K.clone(),ce[J]=ee,B.addEventListener("dispose",k)),K=ee}if(K.visible=B.visible,K.wireframe=B.wireframe,C===Ks?K.side=B.shadowSide!==null?B.shadowSide:B.side:K.side=B.shadowSide!==null?B.shadowSide:x[B.side],K.alphaMap=B.alphaMap,K.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,K.map=B.map,K.clipShadows=B.clipShadows,K.clippingPlanes=B.clippingPlanes,K.clipIntersection=B.clipIntersection,K.displacementMap=B.displacementMap,K.displacementScale=B.displacementScale,K.displacementBias=B.displacementBias,K.wireframeLinewidth=B.wireframeLinewidth,K.linewidth=B.linewidth,M.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const $=r.properties.get(K);$.light=M}return K}function P(U,B,M,C,K){if(U.visible===!1)return;if(U.layers.test(B.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&K===Ks)&&(!U.frustumCulled||a.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,U.matrixWorld);const J=e.update(U),ce=U.material;if(Array.isArray(ce)){const ee=J.groups;for(let ie=0,W=ee.length;ie<W;ie++){const Z=ee[ie],le=ce[Z.materialIndex];if(le&&le.visible){const ue=L(U,le,C,K);U.onBeforeShadow(r,U,B,M,J,ue,Z),r.renderBufferDirect(M,null,J,ue,U,Z),U.onAfterShadow(r,U,B,M,J,ue,Z)}}}else if(ce.visible){const ee=L(U,ce,C,K);U.onBeforeShadow(r,U,B,M,J,ee,null),r.renderBufferDirect(M,null,J,ee,U,null),U.onAfterShadow(r,U,B,M,J,ee,null)}}const $=U.children;for(let J=0,ce=$.length;J<ce;J++)P($[J],B,M,C,K)}function k(U){U.target.removeEventListener("dispose",k);for(const M in m){const C=m[M],K=U.target.uuid;K in C&&(C[K].dispose(),delete C[K])}}}function b1(r,e){function t(){let V=!1;const we=new Kt;let Me=null;const Le=new Kt(0,0,0,0);return{setMask:function(Ee){Me!==Ee&&!V&&(r.colorMask(Ee,Ee,Ee,Ee),Me=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,fe,je,at,Pt){Pt===!0&&(Ee*=at,fe*=at,je*=at),we.set(Ee,fe,je,at),Le.equals(we)===!1&&(r.clearColor(Ee,fe,je,at),Le.copy(we))},reset:function(){V=!1,Me=null,Le.set(-1,0,0,0)}}}function a(){let V=!1,we=!1,Me=null,Le=null,Ee=null;return{setReversed:function(fe){if(we!==fe){const je=e.get("EXT_clip_control");fe?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),we=fe;const at=Ee;Ee=null,this.setClear(at)}},getReversed:function(){return we},setTest:function(fe){fe?ge(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(fe){Me!==fe&&!V&&(r.depthMask(fe),Me=fe)},setFunc:function(fe){if(we&&(fe=lS[fe]),Le!==fe){switch(fe){case Pd:r.depthFunc(r.NEVER);break;case Dd:r.depthFunc(r.ALWAYS);break;case Ld:r.depthFunc(r.LESS);break;case Ja:r.depthFunc(r.LEQUAL);break;case Id:r.depthFunc(r.EQUAL);break;case Ud:r.depthFunc(r.GEQUAL);break;case Fd:r.depthFunc(r.GREATER);break;case Od:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Le=fe}},setLocked:function(fe){V=fe},setClear:function(fe){Ee!==fe&&(Ee=fe,we&&(fe=1-fe),r.clearDepth(fe))},reset:function(){V=!1,Me=null,Le=null,Ee=null,we=!1}}}function o(){let V=!1,we=null,Me=null,Le=null,Ee=null,fe=null,je=null,at=null,Pt=null;return{setTest:function(Mt){V||(Mt?ge(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(Mt){we!==Mt&&!V&&(r.stencilMask(Mt),we=Mt)},setFunc:function(Mt,Xn,En){(Me!==Mt||Le!==Xn||Ee!==En)&&(r.stencilFunc(Mt,Xn,En),Me=Mt,Le=Xn,Ee=En)},setOp:function(Mt,Xn,En){(fe!==Mt||je!==Xn||at!==En)&&(r.stencilOp(Mt,Xn,En),fe=Mt,je=Xn,at=En)},setLocked:function(Mt){V=Mt},setClear:function(Mt){Pt!==Mt&&(r.clearStencil(Mt),Pt=Mt)},reset:function(){V=!1,we=null,Me=null,Le=null,Ee=null,fe=null,je=null,at=null,Pt=null}}}const l=new t,d=new a,h=new o,p=new WeakMap,m=new WeakMap;let _={},x={},g=new WeakMap,E=[],b=null,R=!1,S=null,y=null,N=null,L=null,P=null,k=null,U=null,B=new It(0,0,0),M=0,C=!1,K=null,O=null,$=null,J=null,ce=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,W=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),ie=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),ie=W>=2);let le=null,ue={};const F=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),Ce=new Kt().fromArray(F),Xe=new Kt().fromArray(q);function Qe(V,we,Me,Le){const Ee=new Uint8Array(4),fe=r.createTexture();r.bindTexture(V,fe),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<Me;je++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,Le,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(we+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return fe}const re={};re[r.TEXTURE_2D]=Qe(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=Qe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=Qe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=Qe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ge(r.DEPTH_TEST),d.setFunc(Ja),dt(!1),kt(Mm),ge(r.CULL_FACE),yt(Ki);function ge(V){_[V]!==!0&&(r.enable(V),_[V]=!0)}function me(V){_[V]!==!1&&(r.disable(V),_[V]=!1)}function Oe(V,we){return x[V]!==we?(r.bindFramebuffer(V,we),x[V]=we,V===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=we),V===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=we),!0):!1}function He(V,we){let Me=E,Le=!1;if(V){Me=g.get(we),Me===void 0&&(Me=[],g.set(we,Me));const Ee=V.textures;if(Me.length!==Ee.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,je=Ee.length;fe<je;fe++)Me[fe]=r.COLOR_ATTACHMENT0+fe;Me.length=Ee.length,Le=!0}}else Me[0]!==r.BACK&&(Me[0]=r.BACK,Le=!0);Le&&r.drawBuffers(Me)}function it(V){return b!==V?(r.useProgram(V),b=V,!0):!1}const Xt={[sa]:r.FUNC_ADD,[N_]:r.FUNC_SUBTRACT,[P_]:r.FUNC_REVERSE_SUBTRACT};Xt[D_]=r.MIN,Xt[L_]=r.MAX;const mt={[I_]:r.ZERO,[U_]:r.ONE,[F_]:r.SRC_COLOR,[Rd]:r.SRC_ALPHA,[V_]:r.SRC_ALPHA_SATURATE,[z_]:r.DST_COLOR,[k_]:r.DST_ALPHA,[O_]:r.ONE_MINUS_SRC_COLOR,[Nd]:r.ONE_MINUS_SRC_ALPHA,[j_]:r.ONE_MINUS_DST_COLOR,[B_]:r.ONE_MINUS_DST_ALPHA,[H_]:r.CONSTANT_COLOR,[G_]:r.ONE_MINUS_CONSTANT_COLOR,[W_]:r.CONSTANT_ALPHA,[X_]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(V,we,Me,Le,Ee,fe,je,at,Pt,Mt){if(V===Ki){R===!0&&(me(r.BLEND),R=!1);return}if(R===!1&&(ge(r.BLEND),R=!0),V!==R_){if(V!==S||Mt!==C){if((y!==sa||P!==sa)&&(r.blendEquation(r.FUNC_ADD),y=sa,P=sa),Mt)switch(V){case Ka:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tm:r.blendFunc(r.ONE,r.ONE);break;case bm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Am:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ka:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case bm:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Am:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",V);break}N=null,L=null,k=null,U=null,B.set(0,0,0),M=0,S=V,C=Mt}return}Ee=Ee||we,fe=fe||Me,je=je||Le,(we!==y||Ee!==P)&&(r.blendEquationSeparate(Xt[we],Xt[Ee]),y=we,P=Ee),(Me!==N||Le!==L||fe!==k||je!==U)&&(r.blendFuncSeparate(mt[Me],mt[Le],mt[fe],mt[je]),N=Me,L=Le,k=fe,U=je),(at.equals(B)===!1||Pt!==M)&&(r.blendColor(at.r,at.g,at.b,Pt),B.copy(at),M=Pt),S=V,C=!1}function Rt(V,we){V.side===Yi?me(r.CULL_FACE):ge(r.CULL_FACE);let Me=V.side===On;we&&(Me=!Me),dt(Me),V.blending===Ka&&V.transparent===!1?yt(Ki):yt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),l.setMask(V.colorWrite);const Le=V.stencilWrite;h.setTest(Le),Le&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),jt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function dt(V){K!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),K=V)}function kt(V){V!==A_?(ge(r.CULL_FACE),V!==O&&(V===Mm?r.cullFace(r.BACK):V===w_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),O=V}function j(V){V!==$&&(ie&&r.lineWidth(V),$=V)}function jt(V,we,Me){V?(ge(r.POLYGON_OFFSET_FILL),(J!==we||ce!==Me)&&(J=we,ce=Me,d.getReversed()&&(we=-we),r.polygonOffset(we,Me))):me(r.POLYGON_OFFSET_FILL)}function vt(V){V?ge(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function Et(V){V===void 0&&(V=r.TEXTURE0+ee-1),le!==V&&(r.activeTexture(V),le=V)}function Ge(V,we,Me){Me===void 0&&(le===null?Me=r.TEXTURE0+ee-1:Me=le);let Le=ue[Me];Le===void 0&&(Le={type:void 0,texture:void 0},ue[Me]=Le),(Le.type!==V||Le.texture!==we)&&(le!==Me&&(r.activeTexture(Me),le=Me),r.bindTexture(V,we||re[V]),Le.type=V,Le.texture=we)}function D(){const V=ue[le];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function he(){try{r.texSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function ve(){try{r.texSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function Be(){try{r.compressedTexSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Ae(){try{r.texStorage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function $e(){try{r.texStorage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function rt(){try{r.texImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function ye(){try{r.texImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function be(V){Ce.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Ce.copy(V))}function We(V){Xe.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Xe.copy(V))}function ze(V,we){let Me=m.get(we);Me===void 0&&(Me=new WeakMap,m.set(we,Me));let Le=Me.get(V);Le===void 0&&(Le=r.getUniformBlockIndex(we,V.name),Me.set(V,Le))}function De(V,we){const Le=m.get(we).get(V);p.get(we)!==Le&&(r.uniformBlockBinding(we,Le,V.__bindingPointIndex),p.set(we,Le))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},le=null,ue={},x={},g=new WeakMap,E=[],b=null,R=!1,S=null,y=null,N=null,L=null,P=null,k=null,U=null,B=new It(0,0,0),M=0,C=!1,K=null,O=null,$=null,J=null,ce=null,Ce.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),d.reset(),h.reset()}return{buffers:{color:l,depth:d,stencil:h},enable:ge,disable:me,bindFramebuffer:Oe,drawBuffers:He,useProgram:it,setBlending:yt,setMaterial:Rt,setFlipSided:dt,setCullFace:kt,setLineWidth:j,setPolygonOffset:jt,setScissorTest:vt,activeTexture:Et,bindTexture:Ge,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:G,texImage2D:rt,texImage3D:ye,updateUBOMapping:ze,uniformBlockBinding:De,texStorage2D:Ae,texStorage3D:$e,texSubImage2D:he,texSubImage3D:ve,compressedTexSubImage2D:de,compressedTexSubImage3D:Be,scissor:be,viewport:We,reset:ct}}function A1(r,e,t,a,o,l,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Lt,_=new WeakMap;let x;const g=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,T){return E?new OffscreenCanvas(D,T):Ql("canvas")}function R(D,T,G){let he=1;const ve=Ge(D);if((ve.width>G||ve.height>G)&&(he=G/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(he*ve.width),Be=Math.floor(he*ve.height);x===void 0&&(x=b(de,Be));const Ae=T?b(de,Be):x;return Ae.width=de,Ae.height=Be,Ae.getContext("2d").drawImage(D,0,0,de,Be),lt("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+Be+")."),Ae}else return"data"in D&&lt("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function S(D){return D.generateMipmaps}function y(D){r.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(D,T,G,he,ve=!1){if(D!==null){if(r[D]!==void 0)return r[D];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=T;if(T===r.RED&&(G===r.FLOAT&&(de=r.R32F),G===r.HALF_FLOAT&&(de=r.R16F),G===r.UNSIGNED_BYTE&&(de=r.R8)),T===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(de=r.R8UI),G===r.UNSIGNED_SHORT&&(de=r.R16UI),G===r.UNSIGNED_INT&&(de=r.R32UI),G===r.BYTE&&(de=r.R8I),G===r.SHORT&&(de=r.R16I),G===r.INT&&(de=r.R32I)),T===r.RG&&(G===r.FLOAT&&(de=r.RG32F),G===r.HALF_FLOAT&&(de=r.RG16F),G===r.UNSIGNED_BYTE&&(de=r.RG8)),T===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(de=r.RG8UI),G===r.UNSIGNED_SHORT&&(de=r.RG16UI),G===r.UNSIGNED_INT&&(de=r.RG32UI),G===r.BYTE&&(de=r.RG8I),G===r.SHORT&&(de=r.RG16I),G===r.INT&&(de=r.RG32I)),T===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(de=r.RGB8UI),G===r.UNSIGNED_SHORT&&(de=r.RGB16UI),G===r.UNSIGNED_INT&&(de=r.RGB32UI),G===r.BYTE&&(de=r.RGB8I),G===r.SHORT&&(de=r.RGB16I),G===r.INT&&(de=r.RGB32I)),T===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),G===r.UNSIGNED_INT&&(de=r.RGBA32UI),G===r.BYTE&&(de=r.RGBA8I),G===r.SHORT&&(de=r.RGBA16I),G===r.INT&&(de=r.RGBA32I)),T===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),T===r.RGBA){const Be=ve?Kl:bt.getTransfer(he);G===r.FLOAT&&(de=r.RGBA32F),G===r.HALF_FLOAT&&(de=r.RGBA16F),G===r.UNSIGNED_BYTE&&(de=Be===Dt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function P(D,T){let G;return D?T===null||T===Pi||T===to?G=r.DEPTH24_STENCIL8:T===Ai?G=r.DEPTH32F_STENCIL8:T===eo&&(G=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Pi||T===to?G=r.DEPTH_COMPONENT24:T===Ai?G=r.DEPTH_COMPONENT32F:T===eo&&(G=r.DEPTH_COMPONENT16),G}function k(D,T){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==pn&&D.minFilter!==yn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function U(D){const T=D.target;T.removeEventListener("dispose",U),M(T),T.isVideoTexture&&_.delete(T)}function B(D){const T=D.target;T.removeEventListener("dispose",B),K(T)}function M(D){const T=a.get(D);if(T.__webglInit===void 0)return;const G=D.source,he=g.get(G);if(he){const ve=he[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(D),Object.keys(he).length===0&&g.delete(G)}a.remove(D)}function C(D){const T=a.get(D);r.deleteTexture(T.__webglTexture);const G=D.source,he=g.get(G);delete he[T.__cacheKey],d.memory.textures--}function K(D){const T=a.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),a.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let ve=0;ve<T.__webglFramebuffer[he].length;ve++)r.deleteFramebuffer(T.__webglFramebuffer[he][ve]);else r.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)r.deleteFramebuffer(T.__webglFramebuffer[he]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=D.textures;for(let he=0,ve=G.length;he<ve;he++){const de=a.get(G[he]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),d.memory.textures--),a.remove(G[he])}a.remove(D)}let O=0;function $(){O=0}function J(){const D=O;return D>=o.maxTextures&&lt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),O+=1,D}function ce(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ee(D,T){const G=a.get(D);if(D.isVideoTexture&&vt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){const he=D.image;if(he===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(G,D,T);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+T)}function ie(D,T){const G=a.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){re(G,D,T);return}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+T)}function W(D,T){const G=a.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){re(G,D,T);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+T)}function Z(D,T){const G=a.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&G.__version!==D.version){ge(G,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+T)}const le={[kd]:r.REPEAT,[$i]:r.CLAMP_TO_EDGE,[Bd]:r.MIRRORED_REPEAT},ue={[pn]:r.NEAREST,[$_]:r.NEAREST_MIPMAP_NEAREST,[_l]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[qu]:r.LINEAR_MIPMAP_NEAREST,[la]:r.LINEAR_MIPMAP_LINEAR},F={[J_]:r.NEVER,[rS]:r.ALWAYS,[eS]:r.LESS,[If]:r.LEQUAL,[tS]:r.EQUAL,[Uf]:r.GEQUAL,[nS]:r.GREATER,[iS]:r.NOTEQUAL};function q(D,T){if(T.type===Ai&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yn||T.magFilter===qu||T.magFilter===_l||T.magFilter===la||T.minFilter===yn||T.minFilter===qu||T.minFilter===_l||T.minFilter===la)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,le[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,le[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,le[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ue[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pn||T.minFilter!==_l&&T.minFilter!==la||T.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Ce(D,T){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",U));const he=T.source;let ve=g.get(he);ve===void 0&&(ve={},g.set(he,ve));const de=ce(T);if(de!==D.__cacheKey){ve[de]===void 0&&(ve[de]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,G=!0),ve[de].usedTimes++;const Be=ve[D.__cacheKey];Be!==void 0&&(ve[D.__cacheKey].usedTimes--,Be.usedTimes===0&&C(T)),D.__cacheKey=de,D.__webglTexture=ve[de].texture}return G}function Xe(D,T,G){return Math.floor(Math.floor(D/G)/T)}function Qe(D,T,G,he){const de=D.updateRanges;if(de.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,G,he,T.data);else{de.sort((ye,be)=>ye.start-be.start);let Be=0;for(let ye=1;ye<de.length;ye++){const be=de[Be],We=de[ye],ze=be.start+be.count,De=Xe(We.start,T.width,4),ct=Xe(be.start,T.width,4);We.start<=ze+1&&De===ct&&Xe(We.start+We.count-1,T.width,4)===De?be.count=Math.max(be.count,We.start+We.count-be.start):(++Be,de[Be]=We)}de.length=Be+1;const Ae=r.getParameter(r.UNPACK_ROW_LENGTH),$e=r.getParameter(r.UNPACK_SKIP_PIXELS),rt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let ye=0,be=de.length;ye<be;ye++){const We=de[ye],ze=Math.floor(We.start/4),De=Math.ceil(We.count/4),ct=ze%T.width,V=Math.floor(ze/T.width),we=De,Me=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),t.texSubImage2D(r.TEXTURE_2D,0,ct,V,we,Me,G,he,T.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,$e),r.pixelStorei(r.UNPACK_SKIP_ROWS,rt)}}function re(D,T,G){let he=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=r.TEXTURE_3D);const ve=Ce(D,T),de=T.source;t.bindTexture(he,D.__webglTexture,r.TEXTURE0+G);const Be=a.get(de);if(de.version!==Be.__version||ve===!0){t.activeTexture(r.TEXTURE0+G);const Ae=bt.getPrimaries(bt.workingColorSpace),$e=T.colorSpace===Pr?null:bt.getPrimaries(T.colorSpace),rt=T.colorSpace===Pr||Ae===$e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ye=R(T.image,!1,o.maxTextureSize);ye=Et(T,ye);const be=l.convert(T.format,T.colorSpace),We=l.convert(T.type);let ze=L(T.internalFormat,be,We,T.colorSpace,T.isVideoTexture);q(he,T);let De;const ct=T.mipmaps,V=T.isVideoTexture!==!0,we=Be.__version===void 0||ve===!0,Me=de.dataReady,Le=k(T,ye);if(T.isDepthTexture)ze=P(T.format===ca,T.type),we&&(V?t.texStorage2D(r.TEXTURE_2D,1,ze,ye.width,ye.height):t.texImage2D(r.TEXTURE_2D,0,ze,ye.width,ye.height,0,be,We,null));else if(T.isDataTexture)if(ct.length>0){V&&we&&t.texStorage2D(r.TEXTURE_2D,Le,ze,ct[0].width,ct[0].height);for(let Ee=0,fe=ct.length;Ee<fe;Ee++)De=ct[Ee],V?Me&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,De.width,De.height,be,We,De.data):t.texImage2D(r.TEXTURE_2D,Ee,ze,De.width,De.height,0,be,We,De.data);T.generateMipmaps=!1}else V?(we&&t.texStorage2D(r.TEXTURE_2D,Le,ze,ye.width,ye.height),Me&&Qe(T,ye,be,We)):t.texImage2D(r.TEXTURE_2D,0,ze,ye.width,ye.height,0,be,We,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,ze,ct[0].width,ct[0].height,ye.depth);for(let Ee=0,fe=ct.length;Ee<fe;Ee++)if(De=ct[Ee],T.format!==gi)if(be!==null)if(V){if(Me)if(T.layerUpdates.size>0){const je=Ym(De.width,De.height,T.format,T.type);for(const at of T.layerUpdates){const Pt=De.data.subarray(at*je/De.data.BYTES_PER_ELEMENT,(at+1)*je/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,at,De.width,De.height,1,be,Pt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,De.width,De.height,ye.depth,be,De.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,ze,De.width,De.height,ye.depth,0,De.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Me&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,De.width,De.height,ye.depth,be,We,De.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ee,ze,De.width,De.height,ye.depth,0,be,We,De.data)}else{V&&we&&t.texStorage2D(r.TEXTURE_2D,Le,ze,ct[0].width,ct[0].height);for(let Ee=0,fe=ct.length;Ee<fe;Ee++)De=ct[Ee],T.format!==gi?be!==null?V?Me&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,De.width,De.height,be,De.data):t.compressedTexImage2D(r.TEXTURE_2D,Ee,ze,De.width,De.height,0,De.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Me&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,De.width,De.height,be,We,De.data):t.texImage2D(r.TEXTURE_2D,Ee,ze,De.width,De.height,0,be,We,De.data)}else if(T.isDataArrayTexture)if(V){if(we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,ze,ye.width,ye.height,ye.depth),Me)if(T.layerUpdates.size>0){const Ee=Ym(ye.width,ye.height,T.format,T.type);for(const fe of T.layerUpdates){const je=ye.data.subarray(fe*Ee/ye.data.BYTES_PER_ELEMENT,(fe+1)*Ee/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,fe,ye.width,ye.height,1,be,We,je)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,be,We,ye.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,ye.width,ye.height,ye.depth,0,be,We,ye.data);else if(T.isData3DTexture)V?(we&&t.texStorage3D(r.TEXTURE_3D,Le,ze,ye.width,ye.height,ye.depth),Me&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,be,We,ye.data)):t.texImage3D(r.TEXTURE_3D,0,ze,ye.width,ye.height,ye.depth,0,be,We,ye.data);else if(T.isFramebufferTexture){if(we)if(V)t.texStorage2D(r.TEXTURE_2D,Le,ze,ye.width,ye.height);else{let Ee=ye.width,fe=ye.height;for(let je=0;je<Le;je++)t.texImage2D(r.TEXTURE_2D,je,ze,Ee,fe,0,be,We,null),Ee>>=1,fe>>=1}}else if(ct.length>0){if(V&&we){const Ee=Ge(ct[0]);t.texStorage2D(r.TEXTURE_2D,Le,ze,Ee.width,Ee.height)}for(let Ee=0,fe=ct.length;Ee<fe;Ee++)De=ct[Ee],V?Me&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,be,We,De):t.texImage2D(r.TEXTURE_2D,Ee,ze,be,We,De);T.generateMipmaps=!1}else if(V){if(we){const Ee=Ge(ye);t.texStorage2D(r.TEXTURE_2D,Le,ze,Ee.width,Ee.height)}Me&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,be,We,ye)}else t.texImage2D(r.TEXTURE_2D,0,ze,be,We,ye);S(T)&&y(he),Be.__version=de.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ge(D,T,G){if(T.image.length!==6)return;const he=Ce(D,T),ve=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+G);const de=a.get(ve);if(ve.version!==de.__version||he===!0){t.activeTexture(r.TEXTURE0+G);const Be=bt.getPrimaries(bt.workingColorSpace),Ae=T.colorSpace===Pr?null:bt.getPrimaries(T.colorSpace),$e=T.colorSpace===Pr||Be===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const rt=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,be=[];for(let fe=0;fe<6;fe++)!rt&&!ye?be[fe]=R(T.image[fe],!0,o.maxCubemapSize):be[fe]=ye?T.image[fe].image:T.image[fe],be[fe]=Et(T,be[fe]);const We=be[0],ze=l.convert(T.format,T.colorSpace),De=l.convert(T.type),ct=L(T.internalFormat,ze,De,T.colorSpace),V=T.isVideoTexture!==!0,we=de.__version===void 0||he===!0,Me=ve.dataReady;let Le=k(T,We);q(r.TEXTURE_CUBE_MAP,T);let Ee;if(rt){V&&we&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,ct,We.width,We.height);for(let fe=0;fe<6;fe++){Ee=be[fe].mipmaps;for(let je=0;je<Ee.length;je++){const at=Ee[je];T.format!==gi?ze!==null?V?Me&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je,0,0,at.width,at.height,ze,at.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je,ct,at.width,at.height,0,at.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je,0,0,at.width,at.height,ze,De,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je,ct,at.width,at.height,0,ze,De,at.data)}}}else{if(Ee=T.mipmaps,V&&we){Ee.length>0&&Le++;const fe=Ge(be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,ct,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ye){V?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,be[fe].width,be[fe].height,ze,De,be[fe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,be[fe].width,be[fe].height,0,ze,De,be[fe].data);for(let je=0;je<Ee.length;je++){const Pt=Ee[je].image[fe].image;V?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je+1,0,0,Pt.width,Pt.height,ze,De,Pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je+1,ct,Pt.width,Pt.height,0,ze,De,Pt.data)}}else{V?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ze,De,be[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,ze,De,be[fe]);for(let je=0;je<Ee.length;je++){const at=Ee[je];V?Me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je+1,0,0,ze,De,at.image[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je+1,ct,ze,De,at.image[fe])}}}S(T)&&y(r.TEXTURE_CUBE_MAP),de.__version=ve.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function me(D,T,G,he,ve,de){const Be=l.convert(G.format,G.colorSpace),Ae=l.convert(G.type),$e=L(G.internalFormat,Be,Ae,G.colorSpace),rt=a.get(T),ye=a.get(G);if(ye.__renderTarget=T,!rt.__hasExternalTextures){const be=Math.max(1,T.width>>de),We=Math.max(1,T.height>>de);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,$e,be,We,T.depth,0,Be,Ae,null):t.texImage2D(ve,de,$e,be,We,0,Be,Ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),jt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ve,ye.__webglTexture,0,j(T)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ve,ye.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(D,T,G){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const he=T.depthTexture,ve=he&&he.isDepthTexture?he.type:null,de=P(T.stencilBuffer,ve),Be=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;jt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),de,T.width,T.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),de,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,de,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Be,r.RENDERBUFFER,D)}else{const he=T.textures;for(let ve=0;ve<he.length;ve++){const de=he[ve],Be=l.convert(de.format,de.colorSpace),Ae=l.convert(de.type),$e=L(de.internalFormat,Be,Ae,de.colorSpace);jt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),$e,T.width,T.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),$e,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$e,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function He(D,T,G){const he=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=a.get(T.depthTexture);if(ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,T.depthTexture.addEventListener("dispose",U)),ve.__webglTexture===void 0){ve.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),q(r.TEXTURE_CUBE_MAP,T.depthTexture);const rt=l.convert(T.depthTexture.format),ye=l.convert(T.depthTexture.type);let be;T.depthTexture.format===er?be=r.DEPTH_COMPONENT24:T.depthTexture.format===ca&&(be=r.DEPTH24_STENCIL8);for(let We=0;We<6;We++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,be,T.width,T.height,0,rt,ye,null)}}else ee(T.depthTexture,0);const de=ve.__webglTexture,Be=j(T),Ae=he?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,$e=T.depthTexture.format===ca?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===er)jt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$e,Ae,de,0,Be):r.framebufferTexture2D(r.FRAMEBUFFER,$e,Ae,de,0);else if(T.depthTexture.format===ca)jt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$e,Ae,de,0,Be):r.framebufferTexture2D(r.FRAMEBUFFER,$e,Ae,de,0);else throw new Error("Unknown depthTexture format")}function it(D){const T=a.get(D),G=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=he}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(G)for(let he=0;he<6;he++)He(T.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?He(T.__webglFramebuffer[0],D,0):He(T.__webglFramebuffer,D,0)}else if(G){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=r.createRenderbuffer(),Oe(T.__webglDepthbuffer[he],D,!1);else{const ve=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,de)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Oe(T.__webglDepthbuffer,D,!1);else{const ve=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,de)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(D,T,G){const he=a.get(D);T!==void 0&&me(he.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&it(D)}function mt(D){const T=D.texture,G=a.get(D),he=a.get(T);D.addEventListener("dispose",B);const ve=D.textures,de=D.isWebGLCubeRenderTarget===!0,Be=ve.length>1;if(Be||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=T.version,d.memory.textures++),de){G.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[Ae]=[];for(let $e=0;$e<T.mipmaps.length;$e++)G.__webglFramebuffer[Ae][$e]=r.createFramebuffer()}else G.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)G.__webglFramebuffer[Ae]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Be)for(let Ae=0,$e=ve.length;Ae<$e;Ae++){const rt=a.get(ve[Ae]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),d.memory.textures++)}if(D.samples>0&&jt(D)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const $e=ve[Ae];G.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);const rt=l.convert($e.format,$e.colorSpace),ye=l.convert($e.type),be=L($e.internalFormat,rt,ye,$e.colorSpace,D.isXRRenderTarget===!0),We=j(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,We,be,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),q(r.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let $e=0;$e<T.mipmaps.length;$e++)me(G.__webglFramebuffer[Ae][$e],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e);else me(G.__webglFramebuffer[Ae],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(T)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Ae=0,$e=ve.length;Ae<$e;Ae++){const rt=ve[Ae],ye=a.get(rt);let be=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,ye.__webglTexture),q(be,rt),me(G.__webglFramebuffer,D,rt,r.COLOR_ATTACHMENT0+Ae,be,0),S(rt)&&y(be)}t.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,he.__webglTexture),q(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let $e=0;$e<T.mipmaps.length;$e++)me(G.__webglFramebuffer[$e],D,T,r.COLOR_ATTACHMENT0,Ae,$e);else me(G.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,Ae,0);S(T)&&y(Ae),t.unbindTexture()}D.depthBuffer&&it(D)}function yt(D){const T=D.textures;for(let G=0,he=T.length;G<he;G++){const ve=T[G];if(S(ve)){const de=N(D),Be=a.get(ve).__webglTexture;t.bindTexture(de,Be),y(de),t.unbindTexture()}}}const Rt=[],dt=[];function kt(D){if(D.samples>0){if(jt(D)===!1){const T=D.textures,G=D.width,he=D.height;let ve=r.COLOR_BUFFER_BIT;const de=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Be=a.get(D),Ae=T.length>1;if(Ae)for(let rt=0;rt<T.length;rt++)t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const $e=D.texture.mipmaps;$e&&$e.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let rt=0;rt<T.length;rt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Be.__webglColorRenderbuffer[rt]);const ye=a.get(T[rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,G,he,0,0,G,he,ve,r.NEAREST),p===!0&&(Rt.length=0,dt.length=0,Rt.push(r.COLOR_ATTACHMENT0+rt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Rt.push(de),dt.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,dt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let rt=0;rt<T.length;rt++){t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,Be.__webglColorRenderbuffer[rt]);const ye=a.get(T[rt]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function j(D){return Math.min(o.maxSamples,D.samples)}function jt(D){const T=a.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function vt(D){const T=d.render.frame;_.get(D)!==T&&(_.set(D,T),D.update())}function Et(D,T){const G=D.colorSpace,he=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==ns&&G!==Pr&&(bt.getTransfer(G)===Dt?(he!==gi||ve!==ii)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",G)),T}function Ge(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=$,this.setTexture2D=ee,this.setTexture2DArray=ie,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=Xt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=me,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function w1(r,e){function t(a,o=Pr){let l;const d=bt.getTransfer(o);if(a===ii)return r.UNSIGNED_BYTE;if(a===Rf)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Nf)return r.UNSIGNED_SHORT_5_5_5_1;if(a===$g)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Kg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===qg)return r.BYTE;if(a===Yg)return r.SHORT;if(a===eo)return r.UNSIGNED_SHORT;if(a===Cf)return r.INT;if(a===Pi)return r.UNSIGNED_INT;if(a===Ai)return r.FLOAT;if(a===Ji)return r.HALF_FLOAT;if(a===Zg)return r.ALPHA;if(a===Qg)return r.RGB;if(a===gi)return r.RGBA;if(a===er)return r.DEPTH_COMPONENT;if(a===ca)return r.DEPTH_STENCIL;if(a===Jg)return r.RED;if(a===Pf)return r.RED_INTEGER;if(a===ts)return r.RG;if(a===Df)return r.RG_INTEGER;if(a===Lf)return r.RGBA_INTEGER;if(a===Hl||a===Gl||a===Wl||a===Xl)if(d===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Hl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Hl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Gl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Wl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Xl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===zd||a===jd||a===Vd||a===Hd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===jd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Vd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Hd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Gd||a===Wd||a===Xd||a===qd||a===Yd||a===$d||a===Kd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Gd||a===Wd)return d===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Xd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===qd)return l.COMPRESSED_R11_EAC;if(a===Yd)return l.COMPRESSED_SIGNED_R11_EAC;if(a===$d)return l.COMPRESSED_RG11_EAC;if(a===Kd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Zd||a===Qd||a===Jd||a===ef||a===tf||a===nf||a===rf||a===af||a===sf||a===of||a===lf||a===cf||a===uf||a===df)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Zd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Qd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Jd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ef)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===tf)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===nf)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===rf)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===af)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===sf)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===of)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===lf)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===cf)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===uf)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===df)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ff||a===hf||a===pf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===ff)return d===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===hf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===pf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===mf||a===gf||a===vf||a===xf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===mf)return l.COMPRESSED_RED_RGTC1_EXT;if(a===gf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===vf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===xf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===to?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:t}}const C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new cv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new vi({vertexShader:C1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Di(new lo(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P1 extends ss{constructor(e,t){super();const a=this;let o=null,l=1,d=null,h="local-floor",p=1,m=null,_=null,x=null,g=null,E=null,b=null;const R=typeof XRWebGLBinding<"u",S=new N1,y={},N=t.getContextAttributes();let L=null,P=null;const k=[],U=[],B=new Lt;let M=null;const C=new pi;C.viewport=new Kt;const K=new pi;K.viewport=new Kt;const O=[C,K],$=new HS;let J=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ge=k[re];return ge===void 0&&(ge=new td,k[re]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(re){let ge=k[re];return ge===void 0&&(ge=new td,k[re]=ge),ge.getGripSpace()},this.getHand=function(re){let ge=k[re];return ge===void 0&&(ge=new td,k[re]=ge),ge.getHandSpace()};function ee(re){const ge=U.indexOf(re.inputSource);if(ge===-1)return;const me=k[ge];me!==void 0&&(me.update(re.inputSource,re.frame,m||d),me.dispatchEvent({type:re.type,data:re.inputSource}))}function ie(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",W);for(let re=0;re<k.length;re++){const ge=U[re];ge!==null&&(U[re]=null,k[re].disconnect(ge))}J=null,ce=null,S.reset();for(const re in y)delete y[re];e.setRenderTarget(L),E=null,g=null,x=null,o=null,P=null,Qe.stop(),a.isPresenting=!1,e.setPixelRatio(M),e.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,a.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){h=re,a.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return x===null&&R&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",W),N.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Oe=null,He=null;N.depth&&(He=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=N.stencil?ca:er,Oe=N.stencil?to:Pi);const it={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:l};x=this.getBinding(),g=x.createProjectionLayer(it),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Ri(g.textureWidth,g.textureHeight,{format:gi,type:ii,depthTexture:new no(g.textureWidth,g.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};E=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),P=new Ri(E.framebufferWidth,E.framebufferHeight,{format:gi,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(h),Qe.setContext(o),Qe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function W(re){for(let ge=0;ge<re.removed.length;ge++){const me=re.removed[ge],Oe=U.indexOf(me);Oe>=0&&(U[Oe]=null,k[Oe].disconnect(me))}for(let ge=0;ge<re.added.length;ge++){const me=re.added[ge];let Oe=U.indexOf(me);if(Oe===-1){for(let it=0;it<k.length;it++)if(it>=U.length){U.push(me),Oe=it;break}else if(U[it]===null){U[it]=me,Oe=it;break}if(Oe===-1)break}const He=k[Oe];He&&He.connect(me)}}const Z=new se,le=new se;function ue(re,ge,me){Z.setFromMatrixPosition(ge.matrixWorld),le.setFromMatrixPosition(me.matrixWorld);const Oe=Z.distanceTo(le),He=ge.projectionMatrix.elements,it=me.projectionMatrix.elements,Xt=He[14]/(He[10]-1),mt=He[14]/(He[10]+1),yt=(He[9]+1)/He[5],Rt=(He[9]-1)/He[5],dt=(He[8]-1)/He[0],kt=(it[8]+1)/it[0],j=Xt*dt,jt=Xt*kt,vt=Oe/(-dt+kt),Et=vt*-dt;if(ge.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Et),re.translateZ(vt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),He[10]===-1)re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Ge=Xt+vt,D=mt+vt,T=j-Et,G=jt+(Oe-Et),he=yt*mt/D*Ge,ve=Rt*mt/D*Ge;re.projectionMatrix.makePerspective(T,G,he,ve,Ge,D),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function F(re,ge){ge===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ge.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let ge=re.near,me=re.far;S.texture!==null&&(S.depthNear>0&&(ge=S.depthNear),S.depthFar>0&&(me=S.depthFar)),$.near=K.near=C.near=ge,$.far=K.far=C.far=me,(J!==$.near||ce!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),J=$.near,ce=$.far),$.layers.mask=re.layers.mask|6,C.layers.mask=$.layers.mask&-5,K.layers.mask=$.layers.mask&-3;const Oe=re.parent,He=$.cameras;F($,Oe);for(let it=0;it<He.length;it++)F(He[it],Oe);He.length===2?ue($,C,K):$.projectionMatrix.copy(C.projectionMatrix),q(re,$,Oe)};function q(re,ge,me){me===null?re.matrix.copy(ge.matrixWorld):(re.matrix.copy(me.matrixWorld),re.matrix.invert(),re.matrix.multiply(ge.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=_f*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&E===null))return p},this.setFoveation=function(re){p=re,g!==null&&(g.fixedFoveation=re),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(re){return y[re]};let Ce=null;function Xe(re,ge){if(_=ge.getViewerPose(m||d),b=ge,_!==null){const me=_.views;E!==null&&(e.setRenderTargetFramebuffer(P,E.framebuffer),e.setRenderTarget(P));let Oe=!1;me.length!==$.cameras.length&&($.cameras.length=0,Oe=!0);for(let mt=0;mt<me.length;mt++){const yt=me[mt];let Rt=null;if(E!==null)Rt=E.getViewport(yt);else{const kt=x.getViewSubImage(g,yt);Rt=kt.viewport,mt===0&&(e.setRenderTargetTextures(P,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(P))}let dt=O[mt];dt===void 0&&(dt=new pi,dt.layers.enable(mt),dt.viewport=new Kt,O[mt]=dt),dt.matrix.fromArray(yt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(yt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),mt===0&&($.matrix.copy(dt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Oe===!0&&$.cameras.push(dt)}const He=o.enabledFeatures;if(He&&He.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){x=a.getBinding();const mt=x.getDepthInformation(me[0]);mt&&mt.isValid&&mt.texture&&S.init(mt,o.renderState)}if(He&&He.includes("camera-access")&&R){e.state.unbindTexture(),x=a.getBinding();for(let mt=0;mt<me.length;mt++){const yt=me[mt].camera;if(yt){let Rt=y[yt];Rt||(Rt=new cv,y[yt]=Rt);const dt=x.getCameraImage(yt);Rt.sourceTexture=dt}}}}for(let me=0;me<k.length;me++){const Oe=U[me],He=k[me];Oe!==null&&He!==void 0&&He.update(Oe,ge,m||d)}Ce&&Ce(re,ge),ge.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ge}),b=null}const Qe=new fv;Qe.setAnimationLoop(Xe),this.setAnimationLoop=function(re){Ce=re},this.dispose=function(){}}}const ra=new tr,D1=new en;function L1(r,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,uv(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,N,L,P){y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),x(S,y)):y.isMeshPhongMaterial?(l(S,y),_(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),g(S,y),y.isMeshPhysicalMaterial&&E(S,y,P)):y.isMeshMatcapMaterial?(l(S,y),b(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),R(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(d(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?p(S,y,N,L):y.isSpriteMaterial?m(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===On&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===On&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=e.get(y),L=N.envMap,P=N.envMapRotation;L&&(S.envMap.value=L,ra.copy(P),ra.x*=-1,ra.y*=-1,ra.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ra.y*=-1,ra.z*=-1),S.envMapRotation.value.setFromMatrix4(D1.makeRotationFromEuler(ra)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,N,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=L*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function _(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function x(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function E(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===On&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,y){y.matcap&&(S.matcap.value=y.matcap)}function R(S,y){const N=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function I1(r,e,t,a){let o={},l={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const P=L.program;a.uniformBlockBinding(N,P)}function m(N,L){let P=o[N.id];P===void 0&&(b(N),P=_(N),o[N.id]=P,N.addEventListener("dispose",S));const k=L.program;a.updateUBOMapping(N,k);const U=e.render.frame;l[N.id]!==U&&(g(N),l[N.id]=U)}function _(N){const L=x();N.__bindingPointIndex=L;const P=r.createBuffer(),k=N.__size,U=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,k,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function x(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const L=o[N.id],P=N.uniforms,k=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let U=0,B=P.length;U<B;U++){const M=Array.isArray(P[U])?P[U]:[P[U]];for(let C=0,K=M.length;C<K;C++){const O=M[C];if(E(O,U,C,k)===!0){const $=O.__offset,J=Array.isArray(O.value)?O.value:[O.value];let ce=0;for(let ee=0;ee<J.length;ee++){const ie=J[ee],W=R(ie);typeof ie=="number"||typeof ie=="boolean"?(O.__data[0]=ie,r.bufferSubData(r.UNIFORM_BUFFER,$+ce,O.__data)):ie.isMatrix3?(O.__data[0]=ie.elements[0],O.__data[1]=ie.elements[1],O.__data[2]=ie.elements[2],O.__data[3]=0,O.__data[4]=ie.elements[3],O.__data[5]=ie.elements[4],O.__data[6]=ie.elements[5],O.__data[7]=0,O.__data[8]=ie.elements[6],O.__data[9]=ie.elements[7],O.__data[10]=ie.elements[8],O.__data[11]=0):(ie.toArray(O.__data,ce),ce+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(N,L,P,k){const U=N.value,B=L+"_"+P;if(k[B]===void 0)return typeof U=="number"||typeof U=="boolean"?k[B]=U:k[B]=U.clone(),!0;{const M=k[B];if(typeof U=="number"||typeof U=="boolean"){if(M!==U)return k[B]=U,!0}else if(M.equals(U)===!1)return M.copy(U),!0}return!1}function b(N){const L=N.uniforms;let P=0;const k=16;for(let B=0,M=L.length;B<M;B++){const C=Array.isArray(L[B])?L[B]:[L[B]];for(let K=0,O=C.length;K<O;K++){const $=C[K],J=Array.isArray($.value)?$.value:[$.value];for(let ce=0,ee=J.length;ce<ee;ce++){const ie=J[ce],W=R(ie),Z=P%k,le=Z%W.boundary,ue=Z+le;P+=le,ue!==0&&k-ue<W.storage&&(P+=k-ue),$.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=P,P+=W.storage}}}const U=P%k;return U>0&&(P+=k-U),N.__size=P,N.__cache={},this}function R(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const P=d.indexOf(L.__bindingPointIndex);d.splice(P,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function y(){for(const N in o)r.deleteBuffer(o[N]);d=[],o={},l={}}return{bind:p,update:m,dispose:y}}const U1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function F1(){return Ti===null&&(Ti=new NS(U1,16,16,ts,Ji),Ti.name="DFG_LUT",Ti.minFilter=yn,Ti.magFilter=yn,Ti.wrapS=$i,Ti.wrapT=$i,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class O1{constructor(e={}){const{canvas:t=sS(),context:a=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:E=ii}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=d;const R=E,S=new Set([Lf,Df,Pf]),y=new Set([ii,Pi,eo,to,Rf,Nf]),N=new Uint32Array(4),L=new Int32Array(4);let P=null,k=null;const U=[],B=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let K=!1;this._outputColorSpace=ni;let O=0,$=0,J=null,ce=-1,ee=null;const ie=new Kt,W=new Kt;let Z=null;const le=new It(0);let ue=0,F=t.width,q=t.height,Ce=1,Xe=null,Qe=null;const re=new Kt(0,0,F,q),ge=new Kt(0,0,F,q);let me=!1;const Oe=new ov;let He=!1,it=!1;const Xt=new en,mt=new se,yt=new Kt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function kt(){return J===null?Ce:1}let j=a;function jt(w,X){return t.getContext(w,X)}try{const w={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wf}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Pt,!1),j===null){const X="webgl2";if(j=jt(X,w),j===null)throw jt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw wt("WebGLRenderer: "+w.message),w}let vt,Et,Ge,D,T,G,he,ve,de,Be,Ae,$e,rt,ye,be,We,ze,De,ct,V,we,Me,Le;function Ee(){vt=new OM(j),vt.init(),we=new w1(j,vt),Et=new RM(j,vt,e,we),Ge=new b1(j,vt),Et.reversedDepthBuffer&&g&&Ge.buffers.depth.setReversed(!0),D=new zM(j),T=new d1,G=new A1(j,vt,Ge,T,Et,we,D),he=new FM(C),ve=new WS(j),Me=new wM(j,ve),de=new kM(j,ve,D,Me),Be=new VM(j,de,ve,Me,D),De=new jM(j,Et,G),be=new NM(T),Ae=new u1(C,he,vt,Et,Me,be),$e=new L1(C,T),rt=new h1,ye=new _1(vt),ze=new AM(C,he,Ge,Be,b,p),We=new T1(C,Be,Et),Le=new I1(j,D,Et,Ge),ct=new CM(j,vt,D),V=new BM(j,vt,D),D.programs=Ae.programs,C.capabilities=Et,C.extensions=vt,C.properties=T,C.renderLists=rt,C.shadowMap=We,C.state=Ge,C.info=D}Ee(),R!==ii&&(M=new GM(R,t.width,t.height,o,l));const fe=new P1(C,j);this.xr=fe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(w){w!==void 0&&(Ce=w,this.setSize(F,q,!1))},this.getSize=function(w){return w.set(F,q)},this.setSize=function(w,X,oe=!0){if(fe.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,q=X,t.width=Math.floor(w*Ce),t.height=Math.floor(X*Ce),oe===!0&&(t.style.width=w+"px",t.style.height=X+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(F*Ce,q*Ce).floor()},this.setDrawingBufferSize=function(w,X,oe){F=w,q=X,Ce=oe,t.width=Math.floor(w*oe),t.height=Math.floor(X*oe),this.setViewport(0,0,w,X)},this.setEffects=function(w){if(R===ii){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let X=0;X<w.length;X++)if(w[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ie)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,X,oe,ne){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,X,oe,ne),Ge.viewport(ie.copy(re).multiplyScalar(Ce).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,X,oe,ne){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,X,oe,ne),Ge.scissor(W.copy(ge).multiplyScalar(Ce).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(w){Ge.setScissorTest(me=w)},this.setOpaqueSort=function(w){Xe=w},this.setTransparentSort=function(w){Qe=w},this.getClearColor=function(w){return w.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,oe=!0){let ne=0;if(w){let Q=!1;if(J!==null){const Ne=J.texture.format;Q=S.has(Ne)}if(Q){const Ne=J.texture.type,Fe=y.has(Ne),Re=ze.getClearColor(),Ie=ze.getClearAlpha(),Ze=Re.r,et=Re.g,ft=Re.b;Fe?(N[0]=Ze,N[1]=et,N[2]=ft,N[3]=Ie,j.clearBufferuiv(j.COLOR,0,N)):(L[0]=Ze,L[1]=et,L[2]=ft,L[3]=Ie,j.clearBufferiv(j.COLOR,0,L))}else ne|=j.COLOR_BUFFER_BIT}X&&(ne|=j.DEPTH_BUFFER_BIT),oe&&(ne|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&j.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Pt,!1),ze.dispose(),rt.dispose(),ye.dispose(),T.dispose(),he.dispose(),Be.dispose(),Me.dispose(),Le.dispose(),Ae.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ir),fe.removeEventListener("sessionend",kr),qn.stop()};function je(w){w.preventDefault(),Pm("WebGLRenderer: Context Lost."),K=!0}function at(){Pm("WebGLRenderer: Context Restored."),K=!1;const w=D.autoReset,X=We.enabled,oe=We.autoUpdate,ne=We.needsUpdate,Q=We.type;Ee(),D.autoReset=w,We.enabled=X,We.autoUpdate=oe,We.needsUpdate=ne,We.type=Q}function Pt(w){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Mt(w){const X=w.target;X.removeEventListener("dispose",Mt),Xn(X)}function Xn(w){En(w),T.remove(w)}function En(w){const X=T.get(w).programs;X!==void 0&&(X.forEach(function(oe){Ae.releaseProgram(oe)}),w.isShaderMaterial&&Ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,oe,ne,Q,Ne){X===null&&(X=Rt);const Fe=Q.isMesh&&Q.matrixWorld.determinant()<0,Re=po(w,X,oe,ne,Q);Ge.setMaterial(ne,Fe);let Ie=oe.index,Ze=1;if(ne.wireframe===!0){if(Ie=de.getWireframeAttribute(oe),Ie===void 0)return;Ze=2}const et=oe.drawRange,ft=oe.attributes.position;let Je=et.start*Ze,Nt=(et.start+et.count)*Ze;Ne!==null&&(Je=Math.max(Je,Ne.start*Ze),Nt=Math.min(Nt,(Ne.start+Ne.count)*Ze)),Ie!==null?(Je=Math.max(Je,0),Nt=Math.min(Nt,Ie.count)):ft!=null&&(Je=Math.max(Je,0),Nt=Math.min(Nt,ft.count));const Ft=Nt-Je;if(Ft<0||Ft===1/0)return;Me.setup(Q,ne,Re,oe,Ie);let Ut,St=ct;if(Ie!==null&&(Ut=ve.get(Ie),St=V,St.setIndex(Ut)),Q.isMesh)ne.wireframe===!0?(Ge.setLineWidth(ne.wireframeLinewidth*kt()),St.setMode(j.LINES)):St.setMode(j.TRIANGLES);else if(Q.isLine){let qt=ne.linewidth;qt===void 0&&(qt=1),Ge.setLineWidth(qt*kt()),Q.isLineSegments?St.setMode(j.LINES):Q.isLineLoop?St.setMode(j.LINE_LOOP):St.setMode(j.LINE_STRIP)}else Q.isPoints?St.setMode(j.POINTS):Q.isSprite&&St.setMode(j.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Jl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))St.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const qt=Q._multiDrawStarts,Ye=Q._multiDrawCounts,Mn=Q._multiDrawCount,xt=Ie?ve.get(Ie).bytesPerElement:1,Cn=T.get(ne).currentProgram.getUniforms();for(let Rn=0;Rn<Mn;Rn++)Cn.setValue(j,"_gl_DrawID",Rn),St.render(qt[Rn]/xt,Ye[Rn])}else if(Q.isInstancedMesh)St.renderInstances(Je,Ft,Q.count);else if(oe.isInstancedBufferGeometry){const qt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ye=Math.min(oe.instanceCount,qt);St.renderInstances(Je,Ft,Ye)}else St.render(Je,Ft)};function fa(w,X,oe){w.transparent===!0&&w.side===Yi&&w.forceSinglePass===!1?(w.side=On,w.needsUpdate=!0,zr(w,X,oe),w.side=Ur,w.needsUpdate=!0,zr(w,X,oe),w.side=Yi):zr(w,X,oe)}this.compile=function(w,X,oe=null){oe===null&&(oe=w),k=ye.get(oe),k.init(X),B.push(k),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(k.pushLight(Q),Q.castShadow&&k.pushShadow(Q))}),w!==oe&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(k.pushLight(Q),Q.castShadow&&k.pushShadow(Q))}),k.setupLights();const ne=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ne=Q.material;if(Ne)if(Array.isArray(Ne))for(let Fe=0;Fe<Ne.length;Fe++){const Re=Ne[Fe];fa(Re,oe,Q),ne.add(Re)}else fa(Ne,oe,Q),ne.add(Ne)}),k=B.pop(),ne},this.compileAsync=function(w,X,oe=null){const ne=this.compile(w,X,oe);return new Promise(Q=>{function Ne(){if(ne.forEach(function(Fe){T.get(Fe).currentProgram.isReady()&&ne.delete(Fe)}),ne.size===0){Q(w);return}setTimeout(Ne,10)}vt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Li=null;function oc(w){Li&&Li(w)}function ir(){qn.stop()}function kr(){qn.start()}const qn=new fv;qn.setAnimationLoop(oc),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(w){Li=w,fe.setAnimationLoop(w),w===null?qn.stop():qn.start()},fe.addEventListener("sessionstart",ir),fe.addEventListener("sessionend",kr),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;const oe=fe.enabled===!0&&fe.isPresenting===!0,ne=M!==null&&(J===null||oe)&&M.begin(C,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(X),X=fe.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,X,J),k=ye.get(w,B.length),k.init(X),B.push(k),Xt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Oe.setFromProjectionMatrix(Xt,wi,X.reversedDepth),it=this.localClippingEnabled,He=be.init(this.clippingPlanes,it),P=rt.get(w,U.length),P.init(),U.push(P),fe.enabled===!0&&fe.isPresenting===!0){const Fe=C.xr.getDepthSensingMesh();Fe!==null&&Br(Fe,X,-1/0,C.sortObjects)}Br(w,X,0,C.sortObjects),P.finish(),C.sortObjects===!0&&P.sort(Xe,Qe),dt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,dt&&ze.addToRenderList(P,w),this.info.render.frame++,He===!0&&be.beginShadows();const Q=k.state.shadowsArray;if(We.render(Q,w,X),He===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&M.hasRenderPass())===!1){const Fe=P.opaque,Re=P.transmissive;if(k.setupLights(),X.isArrayCamera){const Ie=X.cameras;if(Re.length>0)for(let Ze=0,et=Ie.length;Ze<et;Ze++){const ft=Ie[Ze];fo(Fe,Re,w,ft)}dt&&ze.render(w);for(let Ze=0,et=Ie.length;Ze<et;Ze++){const ft=Ie[Ze];uo(P,w,ft,ft.viewport)}}else Re.length>0&&fo(Fe,Re,w,X),dt&&ze.render(w),uo(P,w,X)}J!==null&&$===0&&(G.updateMultisampleRenderTarget(J),G.updateRenderTargetMipmap(J)),ne&&M.end(C),w.isScene===!0&&w.onAfterRender(C,w,X),Me.resetDefaultState(),ce=-1,ee=null,B.pop(),B.length>0?(k=B[B.length-1],He===!0&&be.setGlobalState(C.clippingPlanes,k.state.camera)):k=null,U.pop(),U.length>0?P=U[U.length-1]:P=null};function Br(w,X,oe,ne){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)k.pushLight(w),w.castShadow&&k.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Oe.intersectsSprite(w)){ne&&yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Xt);const Fe=Be.update(w),Re=w.material;Re.visible&&P.push(w,Fe,Re,oe,yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Oe.intersectsObject(w))){const Fe=Be.update(w),Re=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yt.copy(w.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),yt.copy(Fe.boundingSphere.center)),yt.applyMatrix4(w.matrixWorld).applyMatrix4(Xt)),Array.isArray(Re)){const Ie=Fe.groups;for(let Ze=0,et=Ie.length;Ze<et;Ze++){const ft=Ie[Ze],Je=Re[ft.materialIndex];Je&&Je.visible&&P.push(w,Fe,Je,oe,yt.z,ft)}}else Re.visible&&P.push(w,Fe,Re,oe,yt.z,null)}}const Ne=w.children;for(let Fe=0,Re=Ne.length;Fe<Re;Fe++)Br(Ne[Fe],X,oe,ne)}function uo(w,X,oe,ne){const{opaque:Q,transmissive:Ne,transparent:Fe}=w;k.setupLightsView(oe),He===!0&&be.setGlobalState(C.clippingPlanes,oe),ne&&Ge.viewport(ie.copy(ne)),Q.length>0&&ha(Q,X,oe),Ne.length>0&&ha(Ne,X,oe),Fe.length>0&&ha(Fe,X,oe),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function fo(w,X,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[ne.id]===void 0){const Je=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[ne.id]=new Ri(1,1,{generateMipmaps:!0,type:Je?Ji:ii,minFilter:la,samples:Math.max(4,Et.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Ne=k.state.transmissionRenderTarget[ne.id],Fe=ne.viewport||ie;Ne.setSize(Fe.z*C.transmissionResolutionScale,Fe.w*C.transmissionResolutionScale);const Re=C.getRenderTarget(),Ie=C.getActiveCubeFace(),Ze=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(le),ue=C.getClearAlpha(),ue<1&&C.setClearColor(16777215,.5),C.clear(),dt&&ze.render(oe);const et=C.toneMapping;C.toneMapping=Ci;const ft=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),k.setupLightsView(ne),He===!0&&be.setGlobalState(C.clippingPlanes,ne),ha(w,oe,ne),G.updateMultisampleRenderTarget(Ne),G.updateRenderTargetMipmap(Ne),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Nt=0,Ft=X.length;Nt<Ft;Nt++){const Ut=X[Nt],{object:St,geometry:qt,material:Ye,group:Mn}=Ut;if(Ye.side===Yi&&St.layers.test(ne.layers)){const xt=Ye.side;Ye.side=On,Ye.needsUpdate=!0,xi(St,oe,ne,qt,Ye,Mn),Ye.side=xt,Ye.needsUpdate=!0,Je=!0}}Je===!0&&(G.updateMultisampleRenderTarget(Ne),G.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Re,Ie,Ze),C.setClearColor(le,ue),ft!==void 0&&(ne.viewport=ft),C.toneMapping=et}function ha(w,X,oe){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Ne=w.length;Q<Ne;Q++){const Fe=w[Q],{object:Re,geometry:Ie,group:Ze}=Fe;let et=Fe.material;et.allowOverride===!0&&ne!==null&&(et=ne),Re.layers.test(oe.layers)&&xi(Re,X,oe,Ie,et,Ze)}}function xi(w,X,oe,ne,Q,Ne){w.onBeforeRender(C,X,oe,ne,Q,Ne),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(C,X,oe,ne,w,Ne),Q.transparent===!0&&Q.side===Yi&&Q.forceSinglePass===!1?(Q.side=On,Q.needsUpdate=!0,C.renderBufferDirect(oe,X,ne,Q,w,Ne),Q.side=Ur,Q.needsUpdate=!0,C.renderBufferDirect(oe,X,ne,Q,w,Ne),Q.side=Yi):C.renderBufferDirect(oe,X,ne,Q,w,Ne),w.onAfterRender(C,X,oe,ne,Q,Ne)}function zr(w,X,oe){X.isScene!==!0&&(X=Rt);const ne=T.get(w),Q=k.state.lights,Ne=k.state.shadowsArray,Fe=Q.state.version,Re=Ae.getParameters(w,Q.state,Ne,X,oe),Ie=Ae.getProgramCacheKey(Re);let Ze=ne.programs;ne.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const et=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ne.envMap=he.get(w.envMap||ne.environment,et),ne.envMapRotation=ne.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",Mt),Ze=new Map,ne.programs=Ze);let ft=Ze.get(Ie);if(ft!==void 0){if(ne.currentProgram===ft&&ne.lightsStateVersion===Fe)return ho(w,Re),ft}else Re.uniforms=Ae.getUniforms(w),w.onBeforeCompile(Re,C),ft=Ae.acquireProgram(Re,Ie),Ze.set(Ie,ft),ne.uniforms=Re.uniforms;const Je=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Je.clippingPlanes=be.uniform),ho(w,Re),ne.needsLights=go(w),ne.lightsStateVersion=Fe,ne.needsLights&&(Je.ambientLightColor.value=Q.state.ambient,Je.lightProbe.value=Q.state.probe,Je.directionalLights.value=Q.state.directional,Je.directionalLightShadows.value=Q.state.directionalShadow,Je.spotLights.value=Q.state.spot,Je.spotLightShadows.value=Q.state.spotShadow,Je.rectAreaLights.value=Q.state.rectArea,Je.ltc_1.value=Q.state.rectAreaLTC1,Je.ltc_2.value=Q.state.rectAreaLTC2,Je.pointLights.value=Q.state.point,Je.pointLightShadows.value=Q.state.pointShadow,Je.hemisphereLights.value=Q.state.hemi,Je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Je.spotLightMatrix.value=Q.state.spotLightMatrix,Je.spotLightMap.value=Q.state.spotLightMap,Je.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=ft,ne.uniformsList=null,ft}function cs(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=ql.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function ho(w,X){const oe=T.get(w);oe.outputColorSpace=X.outputColorSpace,oe.batching=X.batching,oe.batchingColor=X.batchingColor,oe.instancing=X.instancing,oe.instancingColor=X.instancingColor,oe.instancingMorph=X.instancingMorph,oe.skinning=X.skinning,oe.morphTargets=X.morphTargets,oe.morphNormals=X.morphNormals,oe.morphColors=X.morphColors,oe.morphTargetsCount=X.morphTargetsCount,oe.numClippingPlanes=X.numClippingPlanes,oe.numIntersection=X.numClipIntersection,oe.vertexAlphas=X.vertexAlphas,oe.vertexTangents=X.vertexTangents,oe.toneMapping=X.toneMapping}function po(w,X,oe,ne,Q){X.isScene!==!0&&(X=Rt),G.resetTextureUnits();const Ne=X.fog,Fe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Re=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ns,Ie=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ze=he.get(ne.envMap||Fe,Ie),et=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ft=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Je=!!oe.morphAttributes.position,Nt=!!oe.morphAttributes.normal,Ft=!!oe.morphAttributes.color;let Ut=Ci;ne.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ut=C.toneMapping);const St=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,qt=St!==void 0?St.length:0,Ye=T.get(ne),Mn=k.state.lights;if(He===!0&&(it===!0||w!==ee)){const Yt=w===ee&&ne.id===ce;be.setState(ne,w,Yt)}let xt=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Mn.state.version||Ye.outputColorSpace!==Re||Q.isBatchedMesh&&Ye.batching===!1||!Q.isBatchedMesh&&Ye.batching===!0||Q.isBatchedMesh&&Ye.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ye.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ye.instancing===!1||!Q.isInstancedMesh&&Ye.instancing===!0||Q.isSkinnedMesh&&Ye.skinning===!1||!Q.isSkinnedMesh&&Ye.skinning===!0||Q.isInstancedMesh&&Ye.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ye.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ye.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ye.instancingMorph===!1&&Q.morphTexture!==null||Ye.envMap!==Ze||ne.fog===!0&&Ye.fog!==Ne||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==be.numPlanes||Ye.numIntersection!==be.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==ft||Ye.morphTargets!==Je||Ye.morphNormals!==Nt||Ye.morphColors!==Ft||Ye.toneMapping!==Ut||Ye.morphTargetsCount!==qt)&&(xt=!0):(xt=!0,Ye.__version=ne.version);let Cn=Ye.currentProgram;xt===!0&&(Cn=zr(ne,X,Q));let Rn=!1,kn=!1,rr=!1;const Ct=Cn.getUniforms(),st=Ye.uniforms;if(Ge.useProgram(Cn.program)&&(Rn=!0,kn=!0,rr=!0),ne.id!==ce&&(ce=ne.id,kn=!0),Rn||ee!==w){Ge.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ct.setValue(j,"projectionMatrix",w.projectionMatrix),Ct.setValue(j,"viewMatrix",w.matrixWorldInverse);const Yn=Ct.map.cameraPosition;Yn!==void 0&&Yn.setValue(j,mt.setFromMatrixPosition(w.matrixWorld)),Et.logarithmicDepthBuffer&&Ct.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ct.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),ee!==w&&(ee=w,kn=!0,rr=!0)}if(Ye.needsLights&&(Mn.state.directionalShadowMap.length>0&&Ct.setValue(j,"directionalShadowMap",Mn.state.directionalShadowMap,G),Mn.state.spotShadowMap.length>0&&Ct.setValue(j,"spotShadowMap",Mn.state.spotShadowMap,G),Mn.state.pointShadowMap.length>0&&Ct.setValue(j,"pointShadowMap",Mn.state.pointShadowMap,G)),Q.isSkinnedMesh){Ct.setOptional(j,Q,"bindMatrix"),Ct.setOptional(j,Q,"bindMatrixInverse");const Yt=Q.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ct.setValue(j,"boneTexture",Yt.boneTexture,G))}Q.isBatchedMesh&&(Ct.setOptional(j,Q,"batchingTexture"),Ct.setValue(j,"batchingTexture",Q._matricesTexture,G),Ct.setOptional(j,Q,"batchingIdTexture"),Ct.setValue(j,"batchingIdTexture",Q._indirectTexture,G),Ct.setOptional(j,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ct.setValue(j,"batchingColorTexture",Q._colorsTexture,G));const ri=oe.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&De.update(Q,oe,Cn),(kn||Ye.receiveShadow!==Q.receiveShadow)&&(Ye.receiveShadow=Q.receiveShadow,Ct.setValue(j,"receiveShadow",Q.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(st.envMapIntensity.value=X.environmentIntensity),st.dfgLUT!==void 0&&(st.dfgLUT.value=F1()),kn&&(Ct.setValue(j,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&mo(st,rr),Ne&&ne.fog===!0&&$e.refreshFogUniforms(st,Ne),$e.refreshMaterialUniforms(st,ne,Ce,q,k.state.transmissionRenderTarget[w.id]),ql.upload(j,cs(Ye),st,G)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ql.upload(j,cs(Ye),st,G),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ct.setValue(j,"center",Q.center),Ct.setValue(j,"modelViewMatrix",Q.modelViewMatrix),Ct.setValue(j,"normalMatrix",Q.normalMatrix),Ct.setValue(j,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Yt=ne.uniformsGroups;for(let Yn=0,Ii=Yt.length;Yn<Ii;Yn++){const us=Yt[Yn];Le.update(us,Cn),Le.bind(us,Cn)}}return Cn}function mo(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function go(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,X,oe){const ne=T.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=X,T.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const oe=T.get(w);oe.__webglFramebuffer=X,oe.__useDefaultFramebuffer=X===void 0};const vo=j.createFramebuffer();this.setRenderTarget=function(w,X=0,oe=0){J=w,O=X,$=oe;let ne=null,Q=!1,Ne=!1;if(w){const Re=T.get(w);if(Re.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(j.FRAMEBUFFER,Re.__webglFramebuffer),ie.copy(w.viewport),W.copy(w.scissor),Z=w.scissorTest,Ge.viewport(ie),Ge.scissor(W),Ge.setScissorTest(Z),ce=-1;return}else if(Re.__webglFramebuffer===void 0)G.setupRenderTarget(w);else if(Re.__hasExternalTextures)G.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const et=w.depthTexture;if(Re.__boundDepthTexture!==et){if(et!==null&&T.has(et)&&(w.width!==et.image.width||w.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(w)}}const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ne=!0);const Ze=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?ne=Ze[X][oe]:ne=Ze[X],Q=!0):w.samples>0&&G.useMultisampledRTT(w)===!1?ne=T.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?ne=Ze[oe]:ne=Ze,ie.copy(w.viewport),W.copy(w.scissor),Z=w.scissorTest}else ie.copy(re).multiplyScalar(Ce).floor(),W.copy(ge).multiplyScalar(Ce).floor(),Z=me;if(oe!==0&&(ne=vo),Ge.bindFramebuffer(j.FRAMEBUFFER,ne)&&Ge.drawBuffers(w,ne),Ge.viewport(ie),Ge.scissor(W),Ge.setScissorTest(Z),Q){const Re=T.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re.__webglTexture,oe)}else if(Ne){const Re=X;for(let Ie=0;Ie<w.textures.length;Ie++){const Ze=T.get(w.textures[Ie]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Ie,Ze.__webglTexture,oe,Re)}}else if(w!==null&&oe!==0){const Re=T.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Re.__webglTexture,oe)}ce=-1},this.readRenderTargetPixels=function(w,X,oe,ne,Q,Ne,Fe,Re=0){if(!(w&&w.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ie=Ie[Fe]),Ie){Ge.bindFramebuffer(j.FRAMEBUFFER,Ie);try{const Ze=w.textures[Re],et=Ze.format,ft=Ze.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Re),!Et.textureFormatReadable(et)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(ft)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-ne&&oe>=0&&oe<=w.height-Q&&j.readPixels(X,oe,ne,Q,we.convert(et),we.convert(ft),Ne)}finally{const Ze=J!==null?T.get(J).__webglFramebuffer:null;Ge.bindFramebuffer(j.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,X,oe,ne,Q,Ne,Fe,Re=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ie=Ie[Fe]),Ie)if(X>=0&&X<=w.width-ne&&oe>=0&&oe<=w.height-Q){Ge.bindFramebuffer(j.FRAMEBUFFER,Ie);const Ze=w.textures[Re],et=Ze.format,ft=Ze.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Re),!Et.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Je),j.bufferData(j.PIXEL_PACK_BUFFER,Ne.byteLength,j.STREAM_READ),j.readPixels(X,oe,ne,Q,we.convert(et),we.convert(ft),0);const Nt=J!==null?T.get(J).__webglFramebuffer:null;Ge.bindFramebuffer(j.FRAMEBUFFER,Nt);const Ft=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await oS(j,Ft,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Je),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ne),j.deleteBuffer(Je),j.deleteSync(Ft),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,oe=0){const ne=Math.pow(2,-oe),Q=Math.floor(w.image.width*ne),Ne=Math.floor(w.image.height*ne),Fe=X!==null?X.x:0,Re=X!==null?X.y:0;G.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,oe,0,0,Fe,Re,Q,Ne),Ge.unbindTexture()};const lc=j.createFramebuffer(),cc=j.createFramebuffer();this.copyTextureToTexture=function(w,X,oe=null,ne=null,Q=0,Ne=0){let Fe,Re,Ie,Ze,et,ft,Je,Nt,Ft;const Ut=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(oe!==null)Fe=oe.max.x-oe.min.x,Re=oe.max.y-oe.min.y,Ie=oe.isBox3?oe.max.z-oe.min.z:1,Ze=oe.min.x,et=oe.min.y,ft=oe.isBox3?oe.min.z:0;else{const st=Math.pow(2,-Q);Fe=Math.floor(Ut.width*st),Re=Math.floor(Ut.height*st),w.isDataArrayTexture?Ie=Ut.depth:w.isData3DTexture?Ie=Math.floor(Ut.depth*st):Ie=1,Ze=0,et=0,ft=0}ne!==null?(Je=ne.x,Nt=ne.y,Ft=ne.z):(Je=0,Nt=0,Ft=0);const St=we.convert(X.format),qt=we.convert(X.type);let Ye;X.isData3DTexture?(G.setTexture3D(X,0),Ye=j.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(G.setTexture2DArray(X,0),Ye=j.TEXTURE_2D_ARRAY):(G.setTexture2D(X,0),Ye=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,X.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,X.unpackAlignment);const Mn=j.getParameter(j.UNPACK_ROW_LENGTH),xt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Cn=j.getParameter(j.UNPACK_SKIP_PIXELS),Rn=j.getParameter(j.UNPACK_SKIP_ROWS),kn=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Ut.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ut.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ze),j.pixelStorei(j.UNPACK_SKIP_ROWS,et),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ft);const rr=w.isDataArrayTexture||w.isData3DTexture,Ct=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const st=T.get(w),ri=T.get(X),Yt=T.get(st.__renderTarget),Yn=T.get(ri.__renderTarget);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Ii=0;Ii<Ie;Ii++)rr&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(w).__webglTexture,Q,ft+Ii),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(X).__webglTexture,Ne,Ft+Ii)),j.blitFramebuffer(Ze,et,Fe,Re,Je,Nt,Fe,Re,j.DEPTH_BUFFER_BIT,j.NEAREST);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||T.has(w)){const st=T.get(w),ri=T.get(X);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,lc),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,cc);for(let Yt=0;Yt<Ie;Yt++)rr?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,st.__webglTexture,Q,ft+Yt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,st.__webglTexture,Q),Ct?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ri.__webglTexture,Ne,Ft+Yt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ri.__webglTexture,Ne),Q!==0?j.blitFramebuffer(Ze,et,Fe,Re,Je,Nt,Fe,Re,j.COLOR_BUFFER_BIT,j.NEAREST):Ct?j.copyTexSubImage3D(Ye,Ne,Je,Nt,Ft+Yt,Ze,et,Fe,Re):j.copyTexSubImage2D(Ye,Ne,Je,Nt,Ze,et,Fe,Re);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ct?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(Ye,Ne,Je,Nt,Ft,Fe,Re,Ie,St,qt,Ut.data):X.isCompressedArrayTexture?j.compressedTexSubImage3D(Ye,Ne,Je,Nt,Ft,Fe,Re,Ie,St,Ut.data):j.texSubImage3D(Ye,Ne,Je,Nt,Ft,Fe,Re,Ie,St,qt,Ut):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ne,Je,Nt,Fe,Re,St,qt,Ut.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ne,Je,Nt,Ut.width,Ut.height,St,Ut.data):j.texSubImage2D(j.TEXTURE_2D,Ne,Je,Nt,Fe,Re,St,qt,Ut);j.pixelStorei(j.UNPACK_ROW_LENGTH,Mn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,xt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Cn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Rn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,kn),Ne===0&&X.generateMipmaps&&j.generateMipmap(Ye),Ge.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&G.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?G.setTextureCube(w,0):w.isData3DTexture?G.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?G.setTexture2DArray(w,0):G.setTexture2D(w,0),Ge.unbindTexture()},this.resetState=function(){O=0,$=0,J=null,Ge.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const k1=`
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`,B1=`
  uniform float iTime;
  uniform vec2 iResolution;

  #define NUM_OCTAVES 3

  float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);

    float res = mix(
      mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
      mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
    return res * res;
  }

  float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.3;
    vec2 shift = vec2(100);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
      v += a * noise(x);
      x = rot * x * 2.0 + shift;
      a *= 0.4;
    }
    return v;
  }

  void main() {
    vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
    vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
    vec2 v;
    vec4 o = vec4(0.0);

    float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

    for (float i = 0.0; i < 35.0; i++) {
      v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
      float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0));

      // Singular orange/amber palette instead of blue/green aurora
      vec4 singularColors = vec4(
        0.9 + 0.1 * sin(i * 0.2 + iTime * 0.4),
        0.3 + 0.2 * cos(i * 0.3 + iTime * 0.5),
        0.02 + 0.05 * sin(i * 0.4 + iTime * 0.3),
        1.0
      );

      vec4 currentContribution = singularColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
      float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6;
      o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
    }

    o = tanh(pow(o / 100.0, vec4(1.6)));
    gl_FragColor = o * 1.5;
  }
`;function z1(){const r=pe.useRef(null);return pe.useEffect(()=>{const e=r.current;if(!e)return;const t=new MS,a=new kf(-1,1,1,-1,0,1),o=new O1({antialias:!0});o.setSize(e.clientWidth,e.clientHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(o.domElement);const l=new vi({uniforms:{iTime:{value:0},iResolution:{value:new Lt(e.clientWidth,e.clientHeight)}},vertexShader:k1,fragmentShader:B1}),d=new lo(2,2),h=new Di(d,l);t.add(h);let p;const m=()=>{l.uniforms.iTime.value+=.016,o.render(t,a),p=requestAnimationFrame(m)};m();const _=()=>{const x=e.clientWidth,g=e.clientHeight;o.setSize(x,g),l.uniforms.iResolution.value.set(x,g)};return window.addEventListener("resize",_),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",_),e.contains(o.domElement)&&e.removeChild(o.domElement),d.dispose(),l.dispose(),o.dispose()}},[]),u.jsx("div",{ref:r,className:"hero-shader-bg","aria-hidden":"true",style:{position:"absolute",inset:0,zIndex:0,overflow:"hidden"}})}function xg({target:r,suffix:e,label:t}){const{ref:a,count:o}=b_(r);return u.jsxs("div",{className:"hero-stat-item",children:[u.jsxs("span",{className:"hero-stat-number",ref:a,children:[o,e]}),u.jsx("span",{className:"hero-stat-label",children:t})]})}function j1(){tc();const r=Fg(),[e,t]=pe.useState(!1),[a,o]=pe.useState(!1);function l(p){p.preventDefault(),t(!0);const m=p.target;setTimeout(()=>{r("Triagem agendada! Entraremos em contato em até 24h. ✅"),m.reset(),t(!1)},800)}function d(p){p.preventDefault(),o(!0);const m=p.target;setTimeout(()=>{r("Candidatura recebida! Avaliaremos em até 3 dias úteis. 🚀"),m.reset(),o(!1)},800)}function h(p){p.target.value=Og(p.target.value)}return u.jsxs(u.Fragment,{children:[u.jsxs("section",{className:"hero",children:[u.jsx(z1,{}),u.jsx("div",{className:"hero-glow","aria-hidden":"true"}),u.jsx("div",{className:"hero-glow-bottom","aria-hidden":"true"}),u.jsxs("div",{className:"hero-content",children:[u.jsxs("div",{className:"hero-eyebrow","data-reveal":!0,children:[u.jsx("div",{className:"hero-eyebrow-line"}),u.jsx("span",{className:"hero-eyebrow-text",children:"Centro de Apoio ao Empresário"})]}),u.jsxs("h1",{"data-reveal":!0,"data-reveal-delay":"1",children:["O fim do",u.jsx("br",{}),u.jsx("em",{children:"improviso."})]}),u.jsxs("p",{className:"hero-sub","data-reveal":!0,"data-reveal-delay":"2",children:["A Singular é o centro de apoio onde o caos vira previsibilidade. Deixamos de lado as teorias vazias para implementar processos, tecnologia e governança ",u.jsx("strong",{children:"ombro a ombro com o empresário."})]}),u.jsxs("div",{className:"hero-actions","data-reveal":!0,"data-reveal-delay":"3",children:[u.jsxs("a",{href:"#consultorio",className:"btn btn-primary btn-lg",children:[u.jsx("i",{className:"fas fa-stethoscope"}),"Conhecer o Consultório"]}),u.jsxs(ut,{to:"/ecossistema",className:"btn btn-outline btn-lg",children:[u.jsx("i",{className:"fas fa-cubes"}),"Explorar o Ecossistema"]})]}),u.jsxs("div",{className:"hero-stats","data-reveal":!0,"data-reveal-delay":"4",children:[u.jsx(xg,{target:67,suffix:"%",label:"das empresas fecham por conflito entre sócios"}),u.jsx(xg,{target:34,suffix:"%",label:"quebram nos primeiros 2 anos"}),u.jsxs("div",{className:"hero-stat-item",children:[u.jsx("span",{className:"hero-stat-number",children:"5km"}),u.jsx("span",{className:"hero-stat-label",children:"de raio — atuação presencial e próxima"})]}),u.jsxs("div",{className:"hero-stat-item",children:[u.jsx("span",{className:"hero-stat-number",children:"3x"}),u.jsx("span",{className:"hero-stat-label",children:"mais chances com governança estruturada"})]})]})]})]}),u.jsx("section",{className:"problem-section",children:u.jsxs("div",{className:"container",children:[u.jsx("div",{className:"sg-tag sg-tag-outline","data-reveal":!0,children:"O Diagnóstico"}),u.jsxs("div",{className:"problem-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center"},children:[u.jsxs("div",{"data-reveal":!0,"data-reveal-delay":"1",children:[u.jsxs("p",{className:"problem-quote",children:['"Empreender sozinho não é',u.jsx("br",{}),u.jsx("span",{children:"medalha de honra"}),",",u.jsx("br",{}),'é risco desnecessário."']}),u.jsxs("p",{style:{fontSize:"1.05rem",color:"rgba(28,28,28,0.7)",marginBottom:"1.5rem"},children:["A Singular nasceu para ser o ",u.jsx("strong",{children:"sócio estratégico que falta no seu negócio"}),". Não consultoria de prateleira. Não teoria. Implementação real, ombro a ombro."]}),u.jsxs("a",{href:"#consultorio",className:"btn btn-primary",children:["Ver Como Atuamos ",u.jsx("i",{className:"fas fa-arrow-right"})]})]}),u.jsx("div",{"data-reveal":!0,"data-reveal-delay":"2",children:u.jsxs("div",{className:"stat-cards",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("span",{className:"stat-card-number",children:"2/3"}),u.jsx("p",{className:"stat-card-text",children:"empresas fecham por desacordo entre sócios"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("span",{className:"stat-card-number",children:"34%"}),u.jsx("p",{className:"stat-card-text",children:"das empresas quebram nos primeiros 2 anos"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("span",{className:"stat-card-number",children:"72%"}),u.jsx("p",{className:"stat-card-text",children:"não têm clareza sobre o custo real dos produtos"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("span",{className:"stat-card-number",children:"89%"}),u.jsx("p",{className:"stat-card-text",children:"dos empresários nunca fizeram gestão real de fluxo de caixa"})]})]})})]})]})}),u.jsx("section",{className:"consultorio-section",id:"consultorio",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header","data-reveal":!0,children:[u.jsx("div",{className:"sg-tag",children:"Consultório Empresarial"}),u.jsxs("h2",{children:["A ",u.jsx("span",{children:"Tríade"})," das Consultas"]}),u.jsx("p",{children:"Não existe diagnóstico sem presença. Por isso nossos gerentes atuam num raio de 5km, criando vínculos reais com o negócio do empresário."})]}),u.jsx("div",{className:"triage-card","data-reveal":!0,"data-reveal-delay":"1",children:u.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:"1.5rem"},children:[u.jsxs("div",{children:[u.jsx("div",{className:"sg-tag",style:{background:"rgba(247,238,235,0.2)",color:"var(--off-white)"},children:"Ponto de Entrada"}),u.jsx("h3",{style:{fontSize:"2rem",marginBottom:"0.75rem"},children:"Triagem — Custo Zero"}),u.jsx("p",{style:{maxWidth:"520px",fontSize:"1rem"},children:"Antes de qualquer compromisso, fazemos um diagnóstico inicial completo do seu negócio. Entendemos a estrutura, os gargalos e o potencial. Sem enrolação. Sem venda de ilusão."})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"1rem",flexShrink:0},children:[u.jsxs("div",{style:{textAlign:"right"},children:[u.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:"3rem",fontWeight:900,color:"rgba(247,238,235,0.9)",display:"block",lineHeight:1},children:"GRÁTIS"}),u.jsx("span",{style:{fontSize:"0.8rem",color:"rgba(247,238,235,0.6)",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Sem custo inicial"})]}),u.jsxs("a",{href:"#triagem",className:"btn btn-dark btn-lg",children:["Agendar Triagem ",u.jsx("i",{className:"fas fa-arrow-right"})]})]})]})}),u.jsxs("div",{className:"consulta-cards","data-reveal":!0,"data-reveal-delay":"2",children:[u.jsxs("div",{className:"consulta-card",children:[u.jsx("span",{className:"consulta-num",children:"01"}),u.jsx("h4",{children:"Boleto Invisível e Desperdício"}),u.jsx("p",{children:"Mapeamos todos os custos ocultos que corroem sua margem sem que você perceba. Cada centavo desperdiçado tem nome e endereço — e a gente encontra."}),u.jsxs("div",{className:"proximity-badge",children:[u.jsx("i",{className:"fas fa-search-dollar"}),"Diagnóstico Financeiro Profundo"]})]}),u.jsxs("div",{className:"consulta-card",children:[u.jsx("span",{className:"consulta-num",children:"02"}),u.jsx("h4",{children:"Transparência Financeira e Preço Ideal"}),u.jsx("p",{children:"Você sabe exatamente quanto custa produzir o que vende? Estruturamos sua precificação com margem real, não com achismo. Preço justo para você e competitivo para o mercado."}),u.jsxs("div",{className:"proximity-badge",children:[u.jsx("i",{className:"fas fa-chart-bar"}),"Precificação Estratégica"]})]}),u.jsxs("div",{className:"consulta-card",children:[u.jsx("span",{className:"consulta-num",children:"03"}),u.jsx("h4",{children:"Plano de Crescimento e Investimento"}),u.jsx("p",{children:"Com os dados em mãos, construímos um plano de ação com metas tangíveis, alocação de recursos e roteiro de crescimento. Não um PDF bonito — um compromisso executável."}),u.jsxs("div",{className:"proximity-badge",children:[u.jsx("i",{className:"fas fa-rocket"}),"Planejamento Executável"]})]})]}),u.jsxs("div",{style:{marginTop:"3rem",padding:"2.5rem",background:"var(--cinza-escuro)",borderRadius:"var(--border-radius-lg)",border:"1px solid rgba(247,238,235,0.08)",display:"flex",alignItems:"center",gap:"2rem",flexWrap:"wrap"},"data-reveal":!0,"data-reveal-delay":"3",children:[u.jsx("div",{style:{width:"60px",height:"60px",background:"var(--cobre)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u.jsx("i",{className:"fas fa-map-marker-alt",style:{color:"var(--off-white)",fontSize:"1.5rem"}})}),u.jsxs("div",{children:[u.jsx("h4",{style:{color:"var(--off-white)",marginBottom:"0.4rem",fontSize:"1.2rem"},children:"Gerentes capacitados num raio de 5km"}),u.jsx("p",{style:{fontSize:"0.95rem",margin:0},children:"Presença física real. Não enviamos relatórios por e-mail. Estamos na sua empresa, entendendo o seu contexto, junto com você."})]}),u.jsx("div",{style:{marginLeft:"auto",flexShrink:0},children:u.jsx("a",{href:"#triagem",className:"btn btn-primary",children:"Encontrar Polo Próximo"})})]})]})}),u.jsx("section",{className:"ecosystem-section",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header","data-reveal":!0,children:[u.jsx("div",{className:"sg-tag",children:"Ecossistema Singular"}),u.jsxs("h2",{children:["Mais do que Falar,",u.jsx("br",{}),u.jsx("span",{children:"Entregamos Ferramentas"})]}),u.jsx("p",{children:"O Marketplace da Singular conecta seu negócio às soluções técnicas que transformam processos em vantagem competitiva real."})]}),u.jsx("h4",{style:{color:"rgba(247,238,235,0.5)",fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"1.25rem"},"data-reveal":!0,children:"Módulos de Especialistas"}),u.jsx("div",{className:"modules-grid","data-reveal":!0,"data-reveal-delay":"1",children:[{icon:"👥",label:"RH"},{icon:"💰",label:"Financeiro"},{icon:"📣",label:"Marketing"},{icon:"⚖️",label:"Jurídico"},{icon:"📈",label:"Vendas"}].map((p,m)=>u.jsxs("div",{className:"module-item",children:[u.jsx("span",{className:"module-icon",children:p.icon}),u.jsx("span",{className:"module-label",children:p.label})]},m))}),u.jsxs("div",{style:{marginTop:"4rem"},"data-reveal":!0,children:[u.jsx("h4",{style:{color:"rgba(247,238,235,0.5)",fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"1.25rem"},children:"Soluções em Destaque"}),u.jsx("div",{className:"solutions-grid",children:[{icon:"fa-robot",title:"IA de Atendimento",desc:"Automação inteligente com LLM treinado no contexto do seu negócio. Integração nativa com WhatsApp e CRM.",tag:"Tecnologia"},{icon:"fa-chart-line",title:"Dashboard de BI",desc:"Painéis de inteligência de negócio com monitoramento em tempo real de KPIs e deals do HubSpot.",tag:"Financeiro"},{icon:"fa-sitemap",title:"Automações n8n",desc:"Integração de fluxos entre CRM, ERP e comunicação via n8n. Elimine trabalho manual, ganhe escala.",tag:"Tecnologia"}].map((p,m)=>u.jsxs("div",{className:"solution-card",children:[u.jsx("div",{className:"solution-icon",children:u.jsx("i",{className:`fas ${p.icon}`})}),u.jsx("h4",{children:p.title}),u.jsx("p",{children:p.desc}),u.jsxs("div",{className:"solution-card-footer",children:[u.jsx("span",{className:"solution-area-tag",children:p.tag}),u.jsx(ut,{to:"/ecossistema",className:"btn btn-primary btn-sm",children:"Falar com Especialista"})]})]},m))})]}),u.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},"data-reveal":!0,children:u.jsxs(ut,{to:"/ecossistema",className:"btn btn-outline btn-lg",children:["Ver Todo o Ecossistema ",u.jsx("i",{className:"fas fa-arrow-right"})]})})]})}),u.jsx("section",{className:"vb-section sg-pattern-bg",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"vb-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center"},children:[u.jsxs("div",{"data-reveal":!0,children:[u.jsx("div",{className:"sg-tag",children:"Venture Builder"}),u.jsxs("h2",{style:{marginBottom:"1.5rem"},children:["Incubamos Negócios.",u.jsx("br",{}),u.jsx("span",{style:{color:"var(--cobre)"},children:"Aceleramos Crescimento."})]}),u.jsx("p",{style:{marginBottom:"1.5rem"},children:"A Singular seleciona negócios com potencial e co-cria estrutura, governança e modelo de crescimento. Não somos investidores passivos — somos sócios operacionais."}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",marginBottom:"2rem"},children:[{icon:"fa-bullseye",title:"Ser Diretivo",desc:"Correção imediata, sem eufemismos."},{icon:"fa-handshake",title:"Estar Próximo",desc:"Atuação em tempo real, não relatório mensal."},{icon:"fa-bolt",title:"Orientado à Ação",desc:"Impacto direto nas métricas financeiras."}].map((p,m)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[u.jsx("div",{style:{width:"32px",height:"32px",background:"var(--cobre)",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u.jsx("i",{className:`fas ${p.icon}`,style:{color:"var(--off-white)",fontSize:"0.75rem"}})}),u.jsxs("div",{children:[u.jsx("strong",{style:{fontFamily:"var(--font-display)",textTransform:"uppercase",letterSpacing:"0.05em",fontSize:"0.9rem",color:"var(--off-white)"},children:p.title}),u.jsx("p",{style:{fontSize:"0.85rem",margin:0},children:p.desc})]})]},m))}),u.jsxs(ut,{to:"/venture-builder",className:"btn btn-primary",children:["Conhecer o Modelo ",u.jsx("i",{className:"fas fa-arrow-right"})]})]}),u.jsx("div",{"data-reveal":!0,"data-reveal-delay":"2",children:u.jsxs("div",{style:{background:"var(--cinza-escuro)",borderRadius:"var(--border-radius-lg)",padding:"2.5rem",border:"1px solid rgba(247,238,235,0.08)"},children:[u.jsx("div",{className:"sg-tag",children:"Seja uma Venture"}),u.jsx("h4",{style:{color:"var(--off-white)",fontSize:"1.3rem",marginBottom:"1rem"},children:"Seu negócio tem potencial para ir além?"}),u.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"1.5rem"},children:"Preencha o formulário e a equipe da Singular avalia se o seu negócio se encaixa no modelo de aceleração."}),u.jsxs("form",{id:"venture-quick-form",style:{display:"flex",flexDirection:"column",gap:"1rem"},onSubmit:d,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"v-nome",children:"Seu nome"}),u.jsx("input",{type:"text",id:"v-nome",placeholder:"Nome completo"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"v-empresa",children:"Empresa"}),u.jsx("input",{type:"text",id:"v-empresa",placeholder:"Nome da empresa"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"v-setor",children:"Setor"}),u.jsxs("select",{id:"v-setor",children:[u.jsx("option",{value:"",children:"Selecione o setor"}),u.jsx("option",{children:"Varejo"}),u.jsx("option",{children:"Serviços"}),u.jsx("option",{children:"Tecnologia"}),u.jsx("option",{children:"Saúde"}),u.jsx("option",{children:"Indústria"}),u.jsx("option",{children:"Outro"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"v-faturamento",children:"Faturamento mensal estimado"}),u.jsxs("select",{id:"v-faturamento",children:[u.jsx("option",{value:"",children:"Selecione a faixa"}),u.jsx("option",{children:"Até R$ 50 mil"}),u.jsx("option",{children:"R$ 50k – R$ 200k"}),u.jsx("option",{children:"R$ 200k – R$ 1M"}),u.jsx("option",{children:"Acima de R$ 1M"})]})]}),u.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%",justifyContent:"center"},disabled:a,children:a?u.jsxs(u.Fragment,{children:[u.jsx("i",{className:"fas fa-spinner fa-spin"})," Enviando..."]}):u.jsxs(u.Fragment,{children:["Quero Ser uma Venture ",u.jsx("i",{className:"fas fa-arrow-right"})]})})]})]})})]})})}),u.jsx("section",{className:"areas-section",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header","data-reveal":!0,children:[u.jsx("div",{className:"sg-tag sg-tag-outline",children:"Braços Técnicos"}),u.jsxs("h2",{children:["Áreas de ",u.jsx("span",{style:{color:"var(--cobre)"},children:"Atuação"})]}),u.jsx("p",{children:"A Singular sustenta especialistas em cada frente crítica do negócio. Não generistas — especialistas com foco cirúrgico na sua dor."})]}),u.jsx("div",{className:"areas-grid",children:[{icon:"⚖️",title:"Jurídico",desc:"Proteção real do patrimônio e das relações societárias.",items:["Acordos de Sócios","Proteção Patrimonial","Contratos Empresariais","Compliance e Governança"]},{icon:"💻",title:"Tecnologia",desc:"Implementação prática de IA e automações que geram resultado.",items:["Implementação de IA","Automações n8n","Infraestrutura AWS/Docker","Integração de Sistemas"]},{icon:"📊",title:"Financeiro",desc:"Clareza total sobre o dinheiro que entra e sai do seu negócio.",items:["Gestão de Fluxo de Caixa","Alocação de Recursos","Precificação Estratégica","Controle de Custos"]}].map((p,m)=>u.jsxs("div",{className:"area-card","data-reveal":!0,"data-reveal-delay":`${m+1}`,children:[u.jsx("span",{className:"area-icon",children:p.icon}),u.jsx("h3",{children:p.title}),u.jsx("p",{children:p.desc}),u.jsx("ul",{children:p.items.map((_,x)=>u.jsx("li",{children:_},x))})]},m))}),u.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},"data-reveal":!0,children:u.jsxs(ut,{to:"/areas",className:"btn btn-dark btn-lg",style:{borderColor:"rgba(28,28,28,0.3)"},children:["Ver Todas as Áreas ",u.jsx("i",{className:"fas fa-arrow-right"})]})})]})}),u.jsx("section",{id:"triagem",style:{background:"var(--preto)",padding:"100px 0"},children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"triagem-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"start"},children:[u.jsxs("div",{"data-reveal":!0,children:[u.jsx("div",{className:"sg-tag",children:"Primeiro Passo"}),u.jsxs("h2",{style:{marginBottom:"1.5rem"},children:["Agende Sua",u.jsx("br",{}),u.jsx("span",{style:{color:"var(--cobre)"},children:"Triagem Gratuita"})]}),u.jsx("p",{style:{marginBottom:"2rem",fontSize:"1.05rem"},children:"Em menos de 60 minutos, um gerente capacitado da Singular faz um diagnóstico real do seu negócio. Sem venda disfarçada. Sem proposta genérica."}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[{num:"1",title:"Preencha o formulário",desc:"Dados básicos do seu negócio e o principal desafio atual."},{num:"2",title:"Confirme o horário",desc:"Nossa equipe entra em contato em até 24h para confirmar."},{num:"3",title:"Receba o diagnóstico",desc:"Um relatório real com os principais pontos de melhoria do seu negócio."}].map((p,m)=>u.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[u.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"var(--cobre)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"2px"},children:u.jsx("span",{style:{fontFamily:"var(--font-display)",fontWeight:900,fontSize:"0.75rem",color:"var(--off-white)"},children:p.num})}),u.jsxs("div",{children:[u.jsx("strong",{style:{fontFamily:"var(--font-display)",textTransform:"uppercase",fontSize:"0.9rem",color:"var(--off-white)",letterSpacing:"0.06em"},children:p.title}),u.jsx("p",{style:{fontSize:"0.875rem",margin:"0.25rem 0 0"},children:p.desc})]})]},m))})]}),u.jsx("div",{"data-reveal":!0,"data-reveal-delay":"2",children:u.jsxs("div",{style:{background:"var(--cinza-escuro)",borderRadius:"var(--border-radius-lg)",padding:"2.5rem",border:"1px solid rgba(247,238,235,0.08)"},children:[u.jsx("h4",{style:{color:"var(--off-white)",fontSize:"1.2rem",marginBottom:"1.5rem",textTransform:"uppercase",letterSpacing:"0.06em"},children:"Formulário de Triagem"}),u.jsxs("form",{id:"triagem-form",onSubmit:l,children:[u.jsxs("div",{className:"form-grid",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"t-nome",children:"Nome Completo *"}),u.jsx("input",{type:"text",id:"t-nome",required:!0,placeholder:"Seu nome"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"t-tel",children:"WhatsApp *"}),u.jsx("input",{type:"tel",id:"t-tel",required:!0,placeholder:"(11) 99999-9999",onInput:h})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"t-empresa",children:"Empresa *"}),u.jsx("input",{type:"text",id:"t-empresa",required:!0,placeholder:"Nome da empresa"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"t-setor",children:"Setor"}),u.jsxs("select",{id:"t-setor",children:[u.jsx("option",{value:"",children:"Selecione"}),u.jsx("option",{children:"Varejo"}),u.jsx("option",{children:"Serviços"}),u.jsx("option",{children:"Tecnologia"}),u.jsx("option",{children:"Saúde"}),u.jsx("option",{children:"Educação"}),u.jsx("option",{children:"Indústria"}),u.jsx("option",{children:"Outro"})]})]}),u.jsxs("div",{className:"form-group full-width",children:[u.jsx("label",{htmlFor:"t-desafio",children:"Principal Desafio Hoje"}),u.jsx("textarea",{id:"t-desafio",placeholder:"Descreva brevemente o maior gargalo do seu negócio..."})]})]}),u.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",style:{width:"100%",justifyContent:"center",marginTop:"1.25rem"},disabled:e,children:e?u.jsxs(u.Fragment,{children:[u.jsx("i",{className:"fas fa-spinner fa-spin"})," Enviando..."]}):u.jsxs(u.Fragment,{children:[u.jsx("i",{className:"fas fa-calendar-check"})," Agendar Minha Triagem Gratuita"]})}),u.jsx("p",{style:{fontSize:"0.75rem",textAlign:"center",marginTop:"1rem",color:"rgba(247,238,235,0.3)"},children:"Sem spam. Seus dados são tratados com sigilo total."})]})]})})]})})}),u.jsx("div",{className:"cta-banner",children:u.jsxs("div",{className:"container",style:{textAlign:"center"},children:[u.jsxs("h2",{"data-reveal":!0,children:['"Negócios não quebram por falta de venda,',u.jsx("br",{}),"quebram por falta de ",u.jsx("em",{style:{fontStyle:"normal",color:"var(--preto)"},children:"governança."}),'"']}),u.jsx("p",{"data-reveal":!0,"data-reveal-delay":"1",style:{color:"rgba(247,238,235,0.85)"},children:"A Singular está pronta para ser o pilar de governança que seu negócio precisa."}),u.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"},"data-reveal":!0,"data-reveal-delay":"2",children:[u.jsxs("a",{href:"#triagem",className:"btn btn-dark btn-lg",children:[u.jsx("i",{className:"fas fa-calendar-check"})," Agendar Triagem Gratuita"]}),u.jsx(ut,{to:"/ecossistema",className:"btn btn-outline btn-lg",style:{borderColor:"rgba(247,238,235,0.4)",color:"var(--off-white)"},children:"Ver o Ecossistema"})]})]})})]})}const V1=`
attribute vec2 a_position;
void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,H1=`
precision highp float;

uniform vec2 iResolution;
uniform float iTime;
uniform float u_speed;
uniform float u_intensity;
uniform float u_size;
uniform float u_waveStrength;
uniform float u_colorShift;

void main() {
    vec2 F = gl_FragCoord.xy;

    // ═══════════════════════════════════════════════════════════
    // 🎯 CENTRO DA SINGULARIDADE (posição na tela)
    // ═══════════════════════════════════════════════════════════
    // A fórmula (F + F - r) / r.y centraliza no meio da tela.
    // ➜ Pra mover pra DIREITA: subtraia do p.x (ex: p.x -= 0.5)
    // ➜ Pra mover pra ESQUERDA: some ao p.x (ex: p.x += 0.5)
    // ➜ Pra mover pra CIMA: subtraia do p.y (ex: p.y -= 0.3)
    // ➜ Pra mover pra BAIXO: some ao p.y (ex: p.y += 0.3)
    // O u_size controla o ZOOM: maior = mais perto / menor = mais longe
    float i = 0.2 * u_speed;
    float a;
    vec2 r = iResolution.xy;
    vec2 p = (F + F - r) / r.y / (0.7 * u_size);

    // ➜ DESCOMENTE e ajuste para mover o centro:
     p.x -= 0.6;   // move o centro pra direita
     p.y -= 0.3;   // move o centro pra cima

    // ═══════════════════════════════════════════════════════════
    // 🌀 DISTORÇÃO GRAVITACIONAL (lente do buraco negro)
    // ═══════════════════════════════════════════════════════════
    // Cria o efeito de curvatura do espaço.
    // ➜ d = vec2(-1,1) define a direção da distorção diagonal.
    //   Mudar pra vec2(-0.5, 1.5) inclina a distorção.
    // ➜ O 0.1 na divisão controla a FORÇA da lente gravitacional.
    //   Menor = distorção mais forte. Maior = mais suave.
    vec2 d = vec2(-1.0, 1.0);
    vec2 b = p - i * d;
    float dotbb = dot(b, b);
    vec2 dterm = d / (0.1 + i / dotbb);
    vec2 c = p * mat2(1.0, dterm.x, 1.0, dterm.y);

    // ═══════════════════════════════════════════════════════════
    // 🔄 ROTAÇÃO DO DISCO DE ACREÇÃO
    // ═══════════════════════════════════════════════════════════
    // a0, a1, a2 criam ângulos de rotação animados.
    // ➜ Os valores 33.0 e 11.0 definem o OFFSET angular.
    //   Mudar esses valores altera o padrão visual do disco.
    // ➜ iTime * i * u_speed controla a VELOCIDADE de rotação.
    a = dot(c, c);
    float la = 0.5 * log(a);
    float t = iTime * i * u_speed;
    float a0 = la + t;
    float a1 = la + t + 33.0;  // ➜ mude pra alterar o padrão do disco
    float a2 = la + t + 11.0;  // ➜ mude pra alterar o padrão do disco

    mat2 rm = mat2(cos(a0), cos(a2), cos(a1), cos(a0));
    vec2 v = (c * rm) / i;
    vec2 w = vec2(0.0);

    // ═══════════════════════════════════════════════════════════
    // 🌊 TURBULÊNCIA (ondulação do disco de acreção)
    // ═══════════════════════════════════════════════════════════
    // Loop que cria as ondas e estrutura do disco.
    // ➜ u_waveStrength: INTENSIDADE das ondas (1.0=suave, 7.0=turbulento)
    // ➜ O 9.0 no loop define QUANTAS camadas de detalhe.
    //   Mais iterações = mais complexidade visual (mas mais pesado).
    // ➜ O 0.7 controla a AMPLITUDE de cada onda.
    // ➜ O 0.5 no final é o OFFSET — muda o padrão geral.
    for (float j = 0.0; j < 9.0; j++) {
        i += 1.0;
        w += 1.0 + sin(v * u_waveStrength);
        v += 0.7 * sin(v.yx * i + iTime * u_speed) / i + 0.5;
    }

    // ═══════════════════════════════════════════════════════════
    // ⭕ FORMA DO ANEL (contorno da singularidade)
    // ═══════════════════════════════════════════════════════════
    // ➜ O 0.3 define a ESPESSURA do anel (menor = mais fino)
    // ➜ O 0.4 define o CONTRASTE do anel
    // ➜ O 3.0 define o TAMANHO/RAIO do anel
    i = length(sin(v / 0.3) * 0.4 + c * (3.0 + d));

    // ═══════════════════════════════════════════════════════════
    // 🎨 CORES (paleta de cores do shader)
    // ═══════════════════════════════════════════════════════════
    // vec4(R, G, B, A) — cada canal de 0.0 a ~2.0
    // ➜ R (vermelho): quanto maior, mais vermelho/laranja
    // ➜ G (verde): valores baixos (~0.4) criam laranja, altos criam amarelo
    // ➜ B (azul): 0.0 = sem azul (quente), negativo = mais quente, positivo = frio
    // ➜ u_colorShift multiplica tudo (1.0 = normal, 2.0 = cores mais vivas)
    //
    // EXEMPLOS:
    // Laranja/Vermelho: vec4(1.5, 0.4, 0.0, 0.0)  ← ATUAL
    // Azul cósmico:     vec4(0.2, 0.4, 1.5, 0.0)
    // Roxo:             vec4(0.8, 0.0, 1.2, 0.0)
    // Dourado:          vec4(1.0, 0.8, 0.0, 0.0)
    // Verde matrix:     vec4(0.0, 1.5, 0.2, 0.0)
    vec4 colorGrad = vec4(1.5, 0.4, 0.0, 0.0) * u_colorShift;
    
    // Envolvemos o c.x em abs() para espelhar o brilho. 
    // Como tiramos o valor negativo do azul, o lado esquerdo ficaria preto sem o abs().
    vec4 expTerm = exp(abs(c.x) * colorGrad);

    // ═══════════════════════════════════════════════════════════
    // 💡 BRILHO E CONTRASTE
    // ═══════════════════════════════════════════════════════════
    // ➜ d1: contraste geral. O /3.0 suaviza (aumentar = mais escuro)
    // ➜ d2: brilho próximo ao centro (0.5 = padrão, menor = mais brilhante)
    // ➜ d3: ESPESSURA DO ANEL CENTRAL. O 0.7 é o RAIO do anel.
    //   Mudar 0.7 pra 0.5 = anel menor. Mudar pra 1.0 = anel maior.
    //   O 0.03 controla o quão SHARP é a borda (menor = mais fino e nítido)
    float d1 = 2.0 + i * i / 3.0 - i;
    float d2 = 0.5 + 1.0 / a;
    float d3 = 0.03 + abs(length(p) - 0.7);

    // ═══════════════════════════════════════════════════════════
    // 🖼️ COR FINAL DO PIXEL
    // ═══════════════════════════════════════════════════════════
    // ➜ u_intensity: multiplicador geral de brilho (1.0 = normal, 2.0 = mais brilhante)
    // ➜ w.xyyx mistura os canais de onda — muda a distribuição de cor
    gl_FragColor = 1.0 - exp(
        -expTerm
        / vec4(w.x, w.y, w.y, w.x)
        / d1
        / d2
        / d3
        * u_intensity
    );
}
`;function _g(r,e,t){const a=r.createShader(e);return r.shaderSource(a,t),r.compileShader(a),r.getShaderParameter(a,r.COMPILE_STATUS)?a:(console.error("Shader compile error:",r.getShaderInfoLog(a)),console.error("Source:",t),r.deleteShader(a),null)}function G1(r,e,t){const a=_g(r,r.VERTEX_SHADER,e),o=_g(r,r.FRAGMENT_SHADER,t);if(!a||!o)return null;const l=r.createProgram();return r.attachShader(l,a),r.attachShader(l,o),r.linkProgram(l),r.getProgramParameter(l,r.LINK_STATUS)?l:(console.error("Program link error:",r.getProgramInfoLog(l)),r.deleteProgram(l),null)}const xv=pe.forwardRef(({className:r="",style:e={},speed:t=1,intensity:a=1,size:o=1,waveStrength:l=1,colorShift:d=1,...h},p)=>{const m=pe.useRef(null),_=pe.useRef({speed:t,intensity:a,size:o,waveStrength:l,colorShift:d});return _.current={speed:t,intensity:a,size:o,waveStrength:l,colorShift:d},pe.useEffect(()=>{const x=m.current;if(!x)return;const g=x.getContext("webgl",{alpha:!1,antialias:!1});if(!g){console.error("WebGL not supported");return}const E=G1(g,V1,H1);if(!E)return;const b=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,b),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),g.STATIC_DRAW);const R=g.getAttribLocation(E,"a_position");g.enableVertexAttribArray(R),g.vertexAttribPointer(R,2,g.FLOAT,!1,0,0);const S=g.getUniformLocation(E,"iResolution"),y=g.getUniformLocation(E,"iTime"),N=g.getUniformLocation(E,"u_speed"),L=g.getUniformLocation(E,"u_intensity"),P=g.getUniformLocation(E,"u_size"),k=g.getUniformLocation(E,"u_waveStrength"),U=g.getUniformLocation(E,"u_colorShift");let B;const M=performance.now(),C=()=>{const O=Math.min(window.devicePixelRatio,2),$=x.clientWidth,J=x.clientHeight;x.width=$*O,x.height=J*O,g.viewport(0,0,x.width,x.height)};C(),window.addEventListener("resize",C);const K=()=>{C();const O=(performance.now()-M)/1e3,$=_.current;g.useProgram(E),g.uniform2f(S,x.width,x.height),g.uniform1f(y,O),g.uniform1f(N,$.speed),g.uniform1f(L,$.intensity),g.uniform1f(P,$.size),g.uniform1f(k,$.waveStrength),g.uniform1f(U,$.colorShift),g.drawArrays(g.TRIANGLES,0,6),B=requestAnimationFrame(K)};return K(),()=>{cancelAnimationFrame(B),window.removeEventListener("resize",C),g.deleteProgram(E)}},[]),u.jsx("div",{className:r,ref:p,style:{width:"100%",height:"100%",background:"#000000",...e},...h,children:u.jsx("canvas",{ref:m,style:{width:"100%",height:"100%",display:"block"}})})});xv.displayName="SingularityBetaTest3d";const Sg=[{id:"ia",categories:["vender","automatizar"],icon:"fa-robot",badge:"Tecnologia",title:"IA de Atendimento",desc:"Automação inteligente de atendimento ao cliente com LLM treinado no contexto do seu negócio. Integração nativa com WhatsApp, Instagram e CRM.",features:["Respostas 24/7 com precisão contextual","Integração WhatsApp Business API","Treinamento com dados do seu negócio","Escalada inteligente para humano"],areaTag:"IA & Automação"},{id:"bi",categories:["financeiro","vender"],icon:"fa-chart-line",badge:"Business Intelligence",title:"Dashboard de BI",desc:"Painéis de inteligência de negócio com monitoramento em tempo real de KPIs críticos, deals do HubSpot e indicadores financeiros.",features:["KPIs de vendas e marketing em tempo real","Monitoramento de deals HubSpot","Alertas automáticos de metas","Relatórios executivos automatizados"],areaTag:"Financeiro & Vendas"},{id:"n8n",categories:["automatizar"],icon:"fa-sitemap",badge:"Automação",title:"Automações n8n",desc:"Integração e automação de fluxos entre CRM, ERP, financeiro e comunicação usando n8n. Elimine trabalho manual e ganhe escala sem contratar.",features:["Integração multi-plataforma (500+ apps)","Fluxos de aprovação automáticos","Notificações inteligentes por canal","Deploy em infraestrutura própria"],areaTag:"Tecnologia"},{id:"crm",categories:["vender","automatizar"],icon:"fa-funnel-dollar",badge:"CRM & Vendas",title:"CRM HubSpot",desc:"Implementação e configuração completa do HubSpot adaptada ao processo de vendas do seu negócio. Pipeline organizado, previsão de receita real.",features:["Pipeline personalizado para seu processo","Automações de follow-up e nutrição","Integração com canais de atendimento","Treinamento da equipe comercial"],areaTag:"Vendas"},{id:"credito",categories:["financeiro"],icon:"fa-hand-holding-usd",badge:"Financeiro",title:"Recuperação de Crédito",desc:"Estratégia estruturada de cobrança e recuperação de inadimplência com automações de comunicação e negociação segmentada por perfil de devedor.",features:["Mapeamento da carteira de devedores","Régua de cobrança automatizada","Segmentação por perfil e ticket","Indicadores de recuperação em tempo real"],areaTag:"Financeiro"},{id:"caixa",categories:["financeiro"],icon:"fa-money-bill-wave",badge:"Gestão Financeira",title:"Gestão de Fluxo de Caixa",desc:"Estruturação completa do controle financeiro, com projeções de caixa, DRE simplificada e visibilidade sobre saúde financeira do negócio.",features:["Projeção de caixa 30/60/90 dias","DRE simplificada automatizada","Alertas de saldo crítico","Separação pessoal x empresarial"],areaTag:"Financeiro"},{id:"socios",categories:["juridico"],icon:"fa-file-contract",badge:"Jurídico",title:"Acordo de Sócios",desc:"Estruturação do acordo societário que previne conflitos e garante continuidade do negócio independente de crises entre sócios.",features:["Mapeamento de funções e responsabilidades","Cláusulas de saída e sucessão","Resolução de conflitos societários","Proteção patrimonial pessoal"],areaTag:"Jurídico"},{id:"rh",categories:["rh"],icon:"fa-user-plus",badge:"Recursos Humanos",title:"Recrutamento e Seleção",desc:"Processo estruturado de atração e seleção de talentos alinhados à cultura e às metas do negócio. Menos tempo, mais assertividade.",features:["Mapeamento do perfil ideal","Triagem com IA comportamental","Integração (onboarding) estruturado","Avaliação de fit cultural"],areaTag:"RH"},{id:"marketing",categories:["vender"],icon:"fa-bullhorn",badge:"Marketing",title:"Estratégia de Marketing",desc:"Posicionamento de marca e estratégia de aquisição de clientes com métricas reais de retorno. Sem ação por achismo — tudo orientado a dados.",features:["Diagnóstico de posicionamento atual","Estratégia de canais e conteúdo","Campanhas de tráfego pago (Meta, Google)","Mensuração de CAC e LTV"],areaTag:"Marketing"}];function W1(){tc();const[r,e]=pe.useState("all"),t=r==="all"?Sg:Sg.filter(o=>o.categories.includes(r)),a=[{key:"all",icon:"fa-th",label:"Todas as Soluções"},{key:"vender",icon:"fa-chart-line",label:"Quero Vender Mais"},{key:"automatizar",icon:"fa-cogs",label:"Quero Automatizar"},{key:"financeiro",icon:"fa-dollar-sign",label:"Quero Organizar Financeiro"},{key:"juridico",icon:"fa-balance-scale",label:"Quero Proteger o Negócio"},{key:"rh",icon:"fa-users",label:"Quero Estruturar o RH"}];return u.jsxs(u.Fragment,{children:[u.jsxs("section",{className:"page-hero eco-hero-shader",children:[u.jsx(xv,{speed:.7,intensity:1,size:3.5,waveStrength:7,colorShift:1,style:{position:"absolute",inset:0,zIndex:0}}),u.jsxs("div",{className:"container",style:{position:"relative",zIndex:20},children:[u.jsxs("div",{className:"breadcrumb",children:[u.jsx(ut,{to:"/",children:"Home"}),u.jsx("span",{className:"breadcrumb-sep",children:"/"}),u.jsx("span",{className:"breadcrumb-current",children:"Ecossistema"})]}),u.jsxs("span",{className:"eco-hero-label","data-reveal":!0,children:[u.jsx("i",{className:"fas fa-cubes"}),"Marketplace de Soluções"]}),u.jsxs("h1",{"data-reveal":!0,"data-reveal-delay":"1",children:["O ",u.jsx("span",{style:{color:"var(--cobre)"},children:"Ecossistema"}),u.jsx("br",{}),"Singular"]}),u.jsx("p",{"data-reveal":!0,"data-reveal-delay":"2",children:"Ferramentas, tecnologia e especialistas prontos para resolver o problema certo, na hora certa. Filtre pelo que você precisa agora."})]})]}),u.jsx("div",{className:"filter-section",children:u.jsx("div",{className:"container",children:u.jsx("div",{className:"solution-filters",children:a.map(o=>u.jsxs("button",{className:`filter-btn${r===o.key?" active":""}`,onClick:()=>e(o.key),children:[u.jsx("i",{className:`fas ${o.icon}`})," ",o.label]},o.key))})})}),u.jsx("section",{className:"solutions-main",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{style:{marginBottom:"1.5rem",fontSize:"0.85rem",color:"rgba(247,238,235,0.4)",fontFamily:"var(--font-display)",textTransform:"uppercase",letterSpacing:"0.1em"},children:[t.length," solução",t.length!==1?"ões":""," encontrada",t.length!==1?"s":""]}),u.jsx("div",{className:"solutions-grid",children:t.map(o=>u.jsxs("div",{className:"solution-card-full",children:[u.jsxs("div",{className:"solution-card-header",children:[u.jsx("div",{className:"solution-icon",style:{width:"52px",height:"52px",flexShrink:0},children:u.jsx("i",{className:`fas ${o.icon}`})}),u.jsxs("div",{children:[u.jsx("span",{className:"solution-badge",children:o.badge}),u.jsx("h4",{style:{color:"var(--off-white)",fontSize:"1.1rem",textTransform:"uppercase",letterSpacing:"0.06em"},children:o.title})]})]}),u.jsxs("div",{className:"solution-card-body",children:[u.jsx("p",{style:{fontSize:"0.9rem"},children:o.desc}),u.jsx("div",{className:"solution-features",children:o.features.map((l,d)=>u.jsxs("div",{className:"solution-feature",children:[u.jsx("i",{className:"fas fa-check"})," ",l]},d))}),u.jsxs("div",{className:"solution-cta",children:[u.jsx("span",{className:"solution-area-tag",children:o.areaTag}),u.jsx(ut,{to:"/#triagem",className:"btn btn-primary btn-sm",children:"Falar com Especialista"})]})]})]},o.id))}),t.length===0&&u.jsxs("div",{className:"eco-not-found",children:[u.jsx("i",{className:"fas fa-search"}),u.jsx("p",{children:"Nenhuma solução encontrada para este filtro."}),u.jsx("button",{className:"btn btn-outline",onClick:()=>e("all"),style:{marginTop:"1rem"},children:"Ver Todas as Soluções"})]})]})}),u.jsx("section",{className:"proof-section",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header centered","data-reveal":!0,children:[u.jsx("div",{className:"sg-tag sg-tag-outline",children:"Prova Social"}),u.jsxs("h2",{children:["O que dizem os ",u.jsx("span",{style:{color:"var(--cobre)"},children:"empresários"})," que já usam"]})]}),u.jsx("div",{className:"testimonials-row",children:[{text:'"Depois de implementar o Dashboard de BI com a Singular, passei a enxergar em tempo real o que estava drenando minha margem. Em 3 meses, reduzi 18% dos custos operacionais."',initials:"RM",name:"Ricardo Moura",role:"CEO — Distribuidora Moura",delay:"1"},{text:'"A IA de atendimento respondeu mais de 1.200 conversas no primeiro mês sem precisar de uma pessoa. Minha equipe ficou focada no que realmente importa: fechar contratos."',initials:"CS",name:"Camila Souza",role:"Fundadora — CS Imobiliária",delay:"2"},{text:'"O acordo de sócios que a Singular estruturou salvou a empresa quando tivemos um impasse grave. Estava tudo previsto no documento — a empresa continuou."',initials:"LP",name:"Leonardo Pires",role:"Sócio — Tech & Build",delay:"3"}].map((o,l)=>u.jsxs("div",{className:"proof-testimonial","data-reveal":!0,"data-reveal-delay":o.delay,children:[u.jsx("p",{className:"testimonial-text",style:{color:"rgba(247,238,235,0.8)",marginTop:"2rem"},children:o.text}),u.jsxs("div",{className:"testimonial-author",children:[u.jsx("div",{className:"author-avatar",children:o.initials}),u.jsxs("div",{children:[u.jsx("p",{className:"author-name",style:{color:"var(--off-white)"},children:o.name}),u.jsx("p",{className:"author-role",children:o.role})]})]})]},l))})]})}),u.jsx("div",{className:"cta-banner",children:u.jsxs("div",{className:"container",style:{textAlign:"center"},children:[u.jsxs("h2",{"data-reveal":!0,children:["Não sabe por onde ",u.jsx("em",{style:{fontStyle:"normal",color:"var(--preto)"},children:"começar?"})]}),u.jsx("p",{"data-reveal":!0,"data-reveal-delay":"1",style:{color:"rgba(247,238,235,0.85)"},children:"A Triagem Gratuita identifica qual solução do ecossistema resolve sua dor mais urgente."}),u.jsxs(ut,{to:"/#triagem",className:"btn btn-dark btn-lg","data-reveal":!0,"data-reveal-delay":"2",children:[u.jsx("i",{className:"fas fa-calendar-check"})," Agendar Triagem Gratuita"]})]})})]})}function X1(){tc();const r=Fg(),[e,t]=pe.useState(!1);function a(l){l.preventDefault(),t(!0);const d=l.target;setTimeout(()=>{r("Candidatura enviada! Retornaremos em até 3 dias úteis. 🚀"),d.reset(),t(!1)},800)}function o(l){l.target.value=Og(l.target.value)}return u.jsxs(u.Fragment,{children:[u.jsxs("section",{className:"page-hero",style:{paddingBottom:0},children:[u.jsx("div",{className:"page-hero-bg","aria-hidden":"true"}),u.jsx("div",{className:"page-hero-glow","aria-hidden":"true"}),u.jsxs("div",{className:"container",style:{paddingBottom:"80px"},children:[u.jsxs("div",{className:"breadcrumb",children:[u.jsx(ut,{to:"/",children:"Home"}),u.jsx("span",{className:"breadcrumb-sep",children:"/"}),u.jsx("span",{className:"breadcrumb-current",children:"Venture Builder"})]}),u.jsx("div",{className:"sg-tag","data-reveal":!0,children:"Incubadora de Negócios"}),u.jsxs("h1",{"data-reveal":!0,"data-reveal-delay":"1",children:["Não somos investidores.",u.jsx("br",{}),u.jsx("span",{style:{color:"var(--cobre)"},children:"Somos sócios."})]}),u.jsx("p",{style:{maxWidth:"620px",fontSize:"1.1rem"},"data-reveal":!0,"data-reveal-delay":"2",children:"A Singular seleciona negócios com potencial real e co-cria estrutura, governança e modelo de crescimento — atuando como sócio operacional, não como consultor externo."}),u.jsx("div",{className:"vb-hero-metrics",style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1rem",marginTop:"3rem"},"data-reveal":!0,"data-reveal-delay":"3",children:[{num:"12",label:"Ventures ativas"},{num:"3x",label:"Crescimento médio em 12 meses"},{num:"R$8M+",label:"Faturamento gerido no ecossistema"},{num:"100%",label:"Com plano de governança no 1º mês"}].map((l,d)=>u.jsxs("div",{className:"vb-hero-metric",children:[u.jsx("span",{className:"vb-hero-metric-num",children:l.num}),u.jsx("span",{className:"vb-hero-metric-label",children:l.label})]},d))})]})]}),u.jsx("section",{style:{background:"var(--cinza-escuro)",padding:"100px 0"},children:u.jsx("div",{className:"container",children:u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"start"},className:"vb-grid",children:[u.jsxs("div",{"data-reveal":!0,children:[u.jsx("div",{className:"sg-tag",children:"O Modelo"}),u.jsxs("h2",{style:{marginBottom:"1.5rem"},children:["Como a Singular",u.jsx("br",{}),u.jsx("span",{style:{color:"var(--cobre)"},children:"seleciona e acelera"})]}),u.jsx("p",{style:{marginBottom:"2rem"},children:"Não aceitamos todo negócio. Buscamos empresários que estejam dispostos a abrir o jogo, receber feedback direto e executar com velocidade. O modelo só funciona com quem está pronto para agir."}),u.jsx("div",{className:"process-timeline",children:[{label:"Etapa 01",title:"Candidatura e Triagem",desc:"O empresário preenche o formulário. Avaliamos fit estratégico, potencial de mercado e abertura para mudança."},{label:"Etapa 02",title:"Diagnóstico Profundo",desc:"Imersão de 2 semanas nos bastidores do negócio: financeiro, operação, equipe e mercado. Sem filtro — a verdade na mesa."},{label:"Etapa 03",title:"Estruturação da Governança",desc:"Criamos o modelo societário, acordo de sócios, estrutura de cargos, processos e KPIs. A fundação que sustenta o crescimento."},{label:"Etapa 04",title:"Execução e Aceleração",desc:"Implantação das soluções do ecossistema: tecnologia, financeiro, marketing e RH. Acompanhamento semanal com metas claras."},{label:"Etapa 05",title:"Revisão e Escala",desc:"Avaliação trimestral dos resultados, ajuste de rota e expansão. Preparação para captação externa quando o negócio estiver maduro."}].map((l,d)=>u.jsxs("div",{className:"process-step","data-reveal":!0,"data-reveal-delay":`${d+1}`,children:[u.jsx("div",{className:"process-step-num",children:d+1}),u.jsx("div",{className:"process-step-label",children:l.label}),u.jsx("h4",{children:l.title}),u.jsx("p",{style:{fontSize:"0.9rem"},children:l.desc})]},d))})]}),u.jsxs("div",{"data-reveal":!0,"data-reveal-delay":"2",children:[u.jsx("div",{className:"sg-tag",style:{background:"transparent",border:"1px solid var(--cobre)",color:"var(--cobre)"},children:"Critérios de Seleção"}),u.jsx("h3",{style:{color:"var(--off-white)",marginBottom:"1rem",fontSize:"1.6rem"},children:"O que buscamos em um negócio"}),u.jsx("p",{style:{marginBottom:"1.5rem",fontSize:"0.95rem"},children:"Não temos interesse em reformar negócios quebrados. Queremos empresas com fundação real, que precisam de estrutura para escalar."}),u.jsx("div",{className:"criteria-grid",children:[{icon:"💡",label:"Produto com mercado",desc:"Vendas acontecendo, demanda comprovada — mesmo que sem escala ainda."},{icon:"🏃",label:"Empresário executivo",desc:"Fundador disposto a executar, aprender e receber feedback duro."},{icon:"🧮",label:"Margem positiva",desc:"O negócio precisa ter viabilidade econômica básica comprovada."},{icon:"🔍",label:"Transparência total",desc:"Abertura completa para diagnóstico financeiro e operacional."},{icon:"📐",label:"Potencial de escala",desc:"Modelo replicável ou com acesso a mercado maior do que o atual."},{icon:"🤝",label:"Alinhamento cultural",desc:"Disposição para trabalhar com diretividade e orientação à ação."}].map((l,d)=>u.jsxs("div",{className:"criteria-item",children:[u.jsx("span",{className:"criteria-icon",children:l.icon}),u.jsx("p",{className:"criteria-label",children:l.label}),u.jsx("p",{className:"criteria-desc",children:l.desc})]},d))})]})]})})}),u.jsx("section",{className:"vb-section sg-pattern-bg",style:{padding:"100px 0"},children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header centered","data-reveal":!0,children:[u.jsx("div",{className:"sg-tag",children:"Os Pilares"}),u.jsxs("h2",{children:["Como Atuamos",u.jsx("br",{}),u.jsx("span",{children:"no Dia a Dia"})]}),u.jsx("p",{children:"Três princípios inegociáveis que guiam cada interação da Singular com as ventures do ecossistema."})]}),u.jsx("div",{className:"pillars-three",style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem",marginTop:"3rem"},children:[{letter:"D",icon:"fa-bullseye",num:"Pilar 01",title:"Ser Diretivo",desc:"Não existe espaço para eufemismos. Quando identificamos um problema, apontamos com clareza e exigimos correção imediata. Feedback suave não salva empresa — feedback honesto sim.",quote:'"Não somos terapeutas. Somos sócios que dizem a verdade."'},{letter:"P",icon:"fa-handshake",num:"Pilar 02",title:"Estar Próximo",desc:"Problema identificado é problema resolvido na hora, não no relatório do próximo mês. Atuamos em tempo real, dentro da operação, com acesso direto às decisões estratégicas.",quote:'"Gerentes num raio de 5km. Presença real, não reunião por vídeo."'},{letter:"A",icon:"fa-bolt",num:"Pilar 03",title:"Orientado à Ação",desc:"Toda intervenção é medida pelo impacto nas métricas financeiras. Não existe ação que não tenha dono, prazo e número. Execução é o produto final — não o plano.",quote:'"Planejamento sem execução é só papel. Nós fazemos acontecer."'}].map((l,d)=>u.jsxs("div",{className:"pillar-big","data-letter":l.letter,"data-reveal":!0,"data-reveal-delay":`${d+1}`,children:[u.jsx("div",{style:{width:"52px",height:"52px",background:"var(--cobre)",borderRadius:"var(--border-radius)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.5rem"},children:u.jsx("i",{className:`fas ${l.icon}`,style:{color:"var(--off-white)",fontSize:"1.25rem"}})}),u.jsx("div",{className:"pillar-num-big",children:l.num}),u.jsx("h3",{children:l.title}),u.jsx("p",{children:l.desc}),u.jsx("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid rgba(247,238,235,0.08)"},children:u.jsx("p",{style:{fontSize:"0.85rem",color:"var(--cobre)",fontStyle:"italic"},children:l.quote})})]},d))})]})}),u.jsxs("section",{style:{background:"var(--off-white)",padding:"100px 0",color:"var(--preto)",position:"relative",overflow:"hidden"},children:[u.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(230,78,16,0.04) 28px, rgba(230,78,16,0.04) 34px)"}}),u.jsxs("div",{className:"container",style:{position:"relative",zIndex:1},children:[u.jsxs("div",{className:"section-header","data-reveal":!0,children:[u.jsx("div",{className:"sg-tag sg-tag-outline",children:"Diferencial Singular"}),u.jsxs("h2",{style:{color:"var(--preto)"},children:["A diferença entre",u.jsx("br",{}),u.jsx("span",{style:{color:"var(--cobre)"},children:"Consultoria e Venture Builder"})]})]}),u.jsxs("div",{className:"compare-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem",marginTop:"3rem"},children:[u.jsxs("div",{style:{background:"rgba(28,28,28,0.05)",borderRadius:"var(--border-radius-lg)",padding:"2.5rem",border:"1px solid rgba(28,28,28,0.1)"},"data-reveal":!0,"data-reveal-delay":"1",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"1.5rem"},children:[u.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(28,28,28,0.15)",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx("i",{className:"fas fa-times",style:{color:"rgba(28,28,28,0.4)"}})}),u.jsx("h4",{style:{color:"var(--preto)",fontSize:"1.1rem"},children:"Consultoria Tradicional"})]}),u.jsx("ul",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:["Entrega um relatório e vai embora","Cobra por hora, não por resultado","Apresenta teoria, não executa","Distante da operação real","Sem comprometimento com o resultado"].map((l,d)=>u.jsxs("li",{style:{display:"flex",gap:"10px",fontSize:"0.9rem",color:"rgba(28,28,28,0.6)",alignItems:"flex-start"},children:[u.jsx("i",{className:"fas fa-minus",style:{color:"rgba(28,28,28,0.3)",marginTop:"4px",flexShrink:0}}),l]},d))})]}),u.jsxs("div",{style:{background:"var(--preto)",borderRadius:"var(--border-radius-lg)",padding:"2.5rem",border:"2px solid var(--cobre)"},"data-reveal":!0,"data-reveal-delay":"2",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"1.5rem"},children:[u.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:"var(--cobre)",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx("i",{className:"fas fa-check",style:{color:"var(--off-white)"}})}),u.jsx("h4",{style:{color:"var(--off-white)",fontSize:"1.1rem"},children:"Singular Venture Builder"})]}),u.jsx("ul",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:["Permanece dentro da operação até o resultado","Skin in the game — nosso sucesso é o seu sucesso","Implementa as soluções do ecossistema","Atuação presencial num raio de 5km","Metas financeiras como critério de sucesso"].map((l,d)=>u.jsxs("li",{style:{display:"flex",gap:"10px",fontSize:"0.9rem",color:"rgba(247,238,235,0.8)",alignItems:"flex-start"},children:[u.jsx("i",{className:"fas fa-check",style:{color:"var(--cobre)",marginTop:"4px",flexShrink:0}}),l]},d))})]})]})]})]}),u.jsx("section",{className:"vb-venture-form-section",id:"seja-venture",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"venture-form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"start"},children:[u.jsxs("div",{"data-reveal":!0,children:[u.jsx("div",{className:"sg-tag",children:"Seja uma Venture"}),u.jsxs("h2",{style:{marginBottom:"1.5rem"},children:["Seu negócio está",u.jsx("br",{}),u.jsx("span",{style:{color:"var(--cobre)"},children:"pronto para escalar?"})]}),u.jsx("p",{style:{marginBottom:"2rem",fontSize:"1.05rem"},children:"Preencha o formulário e nossa equipe avalia o encaixe do seu negócio no modelo Venture Builder. O processo é criterioso porque o compromisso é real."}),u.jsxs("div",{style:{background:"var(--cinza-escuro)",borderRadius:"var(--border-radius-lg)",padding:"2rem",border:"1px solid rgba(247,238,235,0.08)",marginBottom:"2rem"},children:[u.jsx("h5",{style:{color:"var(--off-white)",marginBottom:"1rem",fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.1em"},children:"O que acontece depois do formulário?"}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:["Nossa equipe analisa o formulário em até 3 dias úteis.","Se houver fit, agendamos uma reunião de alinhamento presencial.","Iniciamos o diagnóstico profundo de 2 semanas na sua operação."].map((l,d)=>u.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"flex-start"},children:[u.jsx("div",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"rgba(230,78,16,0.2)",border:"1px solid var(--cobre)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:900,color:"var(--cobre)"},children:d+1})}),u.jsx("p",{style:{fontSize:"0.875rem",margin:0},children:l})]},d))})]}),u.jsx("div",{style:{padding:"1.5rem",background:"rgba(230,78,16,0.08)",border:"1px solid rgba(230,78,16,0.2)",borderRadius:"var(--border-radius-lg)"},children:u.jsxs("p",{style:{fontSize:"0.9rem",color:"var(--cobre)",fontWeight:600,margin:0},children:[u.jsx("i",{className:"fas fa-info-circle"}),"   Aceitamos apenas negócios com faturamento ativo e disposição real para mudança. Se você busca investidor passivo, não somos o caminho certo."]})})]}),u.jsx("div",{"data-reveal":!0,"data-reveal-delay":"2",children:u.jsxs("div",{style:{background:"var(--cinza-escuro)",borderRadius:"var(--border-radius-lg)",padding:"2.5rem",border:"1px solid rgba(247,238,235,0.08)"},children:[u.jsx("h4",{style:{color:"var(--off-white)",fontSize:"1.2rem",marginBottom:"1.5rem",textTransform:"uppercase",letterSpacing:"0.06em"},children:"Formulário Venture"}),u.jsxs("form",{id:"venture-form",onSubmit:a,children:[u.jsxs("div",{className:"form-grid",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"vf-nome",children:"Nome Completo *"}),u.jsx("input",{type:"text",id:"vf-nome",required:!0,placeholder:"Seu nome"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"vf-tel",children:"WhatsApp *"}),u.jsx("input",{type:"tel",id:"vf-tel",required:!0,placeholder:"(11) 99999-9999",onInput:o})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"vf-email",children:"E-mail"}),u.jsx("input",{type:"email",id:"vf-email",placeholder:"seu@email.com"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"vf-empresa",children:"Empresa *"}),u.jsx("input",{type:"text",id:"vf-empresa",required:!0,placeholder:"Nome da empresa"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"vf-setor",children:"Setor *"}),u.jsxs("select",{id:"vf-setor",required:!0,children:[u.jsx("option",{value:"",children:"Selecione"}),u.jsx("option",{children:"Varejo"}),u.jsx("option",{children:"Serviços"}),u.jsx("option",{children:"Tecnologia"}),u.jsx("option",{children:"Saúde"}),u.jsx("option",{children:"Educação"}),u.jsx("option",{children:"Indústria"}),u.jsx("option",{children:"Outro"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"vf-faturamento",children:"Faturamento Mensal *"}),u.jsxs("select",{id:"vf-faturamento",required:!0,children:[u.jsx("option",{value:"",children:"Selecione a faixa"}),u.jsx("option",{children:"Até R$ 50 mil"}),u.jsx("option",{children:"R$ 50k – R$ 200k"}),u.jsx("option",{children:"R$ 200k – R$ 1M"}),u.jsx("option",{children:"Acima de R$ 1M"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"vf-socios",children:"Quantos sócios?"}),u.jsxs("select",{id:"vf-socios",children:[u.jsx("option",{value:"",children:"Selecione"}),u.jsx("option",{children:"Apenas eu"}),u.jsx("option",{children:"2 sócios"}),u.jsx("option",{children:"3+ sócios"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"vf-tempo",children:"Tempo de mercado"}),u.jsxs("select",{id:"vf-tempo",children:[u.jsx("option",{value:"",children:"Selecione"}),u.jsx("option",{children:"Menos de 1 ano"}),u.jsx("option",{children:"1 a 3 anos"}),u.jsx("option",{children:"3 a 7 anos"}),u.jsx("option",{children:"Mais de 7 anos"})]})]}),u.jsxs("div",{className:"form-group full-width",children:[u.jsx("label",{htmlFor:"vf-desafio",children:"Qual seu maior desafio atual? *"}),u.jsx("textarea",{id:"vf-desafio",required:!0,placeholder:"Descreva honestamente o principal obstáculo que impede o crescimento do seu negócio..."})]}),u.jsxs("div",{className:"form-group full-width",children:[u.jsx("label",{htmlFor:"vf-objetivo",children:"O que você espera da Singular?"}),u.jsx("textarea",{id:"vf-objetivo",placeholder:"Qual o resultado concreto que você busca com a parceria?"})]})]}),u.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",style:{width:"100%",justifyContent:"center",marginTop:"1.25rem"},disabled:e,children:e?u.jsxs(u.Fragment,{children:[u.jsx("i",{className:"fas fa-spinner fa-spin"})," Enviando candidatura..."]}):u.jsxs(u.Fragment,{children:[u.jsx("i",{className:"fas fa-paper-plane"})," Enviar Candidatura"]})}),u.jsx("p",{style:{fontSize:"0.75rem",textAlign:"center",marginTop:"1rem",color:"rgba(247,238,235,0.3)"},children:"Respondemos em até 3 dias úteis. Dados tratados com sigilo total."})]})]})})]})})}),u.jsx("div",{className:"cta-banner",children:u.jsxs("div",{className:"container",style:{textAlign:"center"},children:[u.jsxs("h2",{"data-reveal":!0,children:["Não está pronto para o",u.jsx("br",{}),u.jsx("em",{style:{fontStyle:"normal",color:"var(--preto)"},children:"Venture Builder?"})]}),u.jsx("p",{"data-reveal":!0,"data-reveal-delay":"1",style:{color:"rgba(247,238,235,0.85)"},children:"Comece pela Triagem Gratuita do Consultório. É o passo certo antes de qualquer decisão maior."}),u.jsxs(ut,{to:"/#triagem",className:"btn btn-dark btn-lg","data-reveal":!0,"data-reveal-delay":"2",children:[u.jsx("i",{className:"fas fa-stethoscope"})," Agendar Triagem Gratuita"]})]})})]})}const Td=[{id:"juridico",num:"01",icon:"⚖️",title:"Jurídico",navIcon:"fa-balance-scale",intro:"Empresas quebram por dentro antes de quebrarem financeiramente. Conflitos societários, contratos mal estruturados e patrimônio exposto são riscos silenciosos que a Singular identifica e neutraliza antes que causem dano irreparável.",body:"Nossa equipe jurídica atua de forma preventiva — não esperamos o problema explodir para agir. Estruturamos a governança societária, protegemos o patrimônio e garantimos que os relacionamentos comerciais estejam blindados.",cta:"Falar com Especialista Jurídico",services:[{icon:"fa-file-contract",name:"Acordo de Sócios",desc:"Estruturação completa das regras da sociedade: funções, tomada de decisão, saída de sócios e distribuição de lucros."},{icon:"fa-shield-alt",name:"Proteção Patrimonial",desc:"Separação legal do patrimônio pessoal do empresarial. Holding, planejamento sucessório e blindagem de ativos."},{icon:"fa-handshake",name:"Contratos Empresariais",desc:"Revisão e estruturação de contratos com clientes, fornecedores e prestadores de serviço. Sem cláusulas que te deixam exposto."},{icon:"fa-clipboard-check",name:"Compliance e Governança",desc:"Implantação de estrutura de governança corporativa adequada ao porte do negócio, com políticas internas e alçadas de decisão."}],layout:"left"},{id:"tecnologia",num:"02",icon:"💻",title:"Tecnologia",navIcon:"fa-microchip",intro:"Tecnologia sem implementação é só ferramenta parada. A Singular não entrega um manual de uso — entrega a ferramenta funcionando dentro do seu processo, gerando resultado desde o primeiro dia.",body:"Trabalhamos com IA generativa, automações de fluxo (n8n), infraestrutura em nuvem (AWS, Docker) e integrações entre sistemas. Não vendemos software — entregamos capacidade operacional.",cta:"Falar com Especialista Tech",stats:[{num:"1.200+",label:"Atendimentos automatizados/mês"},{num:"70%",label:"Redução de tarefas manuais"}],services:[{icon:"fa-robot",name:"Implementação de IA",desc:"Agentes de IA para atendimento, triagem, análise de dados e automação de respostas contextuais."},{icon:"fa-sitemap",name:"Automações n8n",desc:"Integração de sistemas e automação de fluxos operacionais. Elimine trabalho manual repetitivo."},{icon:"fab fa-aws",name:"Infraestrutura AWS / Docker",desc:"Deploy de soluções em nuvem com segurança, escalabilidade e custo otimizado."},{icon:"fa-plug",name:"Integração de Sistemas",desc:"Conexão entre ERP, CRM, plataformas de e-commerce e ferramentas financeiras. Dados fluindo onde precisam."}],layout:"right"},{id:"financeiro",num:"03",icon:"📊",title:"Financeiro",navIcon:"fa-chart-pie",intro:"89% dos empresários nunca fizeram gestão de fluxo de caixa real. Tomam decisões de R$ 500 mil com base no saldo da conta. A Singular resolve isso na raiz, com clareza e ferramentas que o empresário realmente usa.",body:"Não entregamos um Excel bonito que ninguém abre. Estruturamos processos financeiros que o próprio empresário consegue operar — com alertas, projeções e visibilidade real sobre o caixa.",cta:"Falar com Especialista Financeiro",quote:'"72% dos empresários não sabem o custo real dos seus produtos. Estão precificando no escuro — e perdendo margem todo mês sem saber."',services:[{icon:"fa-money-bill-wave",name:"Gestão de Fluxo de Caixa",desc:"Estruturação do controle diário de entrada e saída. Projeções de 30/60/90 dias. Nunca mais ser pego de surpresa."},{icon:"fa-tags",name:"Precificação Estratégica",desc:"Cálculo real de custo, margem e preço competitivo. Chega de vender por menos do que custa produzir."},{icon:"fa-chart-bar",name:"DRE e Indicadores",desc:"Demonstração de resultado simples e acionável. Saiba se seu negócio está lucrando de verdade."},{icon:"fa-hand-holding-usd",name:"Recuperação de Crédito",desc:"Estratégia e automações para recuperar inadimplência com inteligência, sem destruir o relacionamento com o cliente."}],layout:"left"},{id:"marketing",num:"04",icon:"📣",title:"Marketing",navIcon:"fa-bullhorn",intro:"Marketing não é sobre curtidas. É sobre transformar desconhecidos em clientes pagantes com o menor custo possível. A Singular estrutura o marketing como máquina de aquisição — não como departamento de postagem.",body:"Cada ação de marketing tem dono, prazo e métrica de resultado. Integramos posicionamento, conteúdo, tráfego pago e CRM para criar um sistema de geração de demanda que funciona 24h por dia.",cta:"Falar com Especialista de Marketing",services:[{icon:"fa-compass",name:"Posicionamento de Marca",desc:"Diagnóstico do posicionamento atual e construção de identidade de marca que gera diferenciação real no mercado."},{icon:"fa-ad",name:"Tráfego Pago",desc:"Campanhas Meta Ads e Google Ads com foco em CAC baixo e qualidade de lead. Resultado, não volume de cliques."},{icon:"fa-pen-nib",name:"Conteúdo Estratégico",desc:"Estratégia de conteúdo orgânico que constrói autoridade e gera demanda qualificada — não só seguidores."},{icon:"fa-chart-line",name:"Métricas de Marketing",desc:"CAC, LTV, ROAS e taxa de conversão por canal. Decisões de marketing baseadas em dados, não em intuição."}],layout:"right"},{id:"rh",num:"05",icon:"👥",title:"Recursos Humanos",navIcon:"fa-users",intro:"Uma equipe errada é mais cara do que uma equipe cara. O custo de uma contratação equivocada vai muito além do salário — envolve tempo, retrabalho, cultura destruída e cliente perdido.",body:"A Singular estrutura os processos de RH para que o empresário contrate certo, onboard rápido e retenha os talentos que realmente movem o negócio.",cta:"Falar com Especialista de RH",services:[{icon:"fa-user-plus",name:"Recrutamento e Seleção",desc:"Processo estruturado de atração e triagem com avaliação técnica e de fit cultural. Contrata uma vez — contrata certo."},{icon:"fa-door-open",name:"Onboarding Estruturado",desc:"Processo de integração que reduz o tempo até a primeira entrega de valor do novo colaborador."},{icon:"fa-star",name:"Avaliação de Desempenho",desc:"Modelo de avaliação simples e consistente que conecta performance individual aos resultados do negócio."},{icon:"fa-sitemap",name:"Estrutura Organizacional",desc:"Definição de cargos, funções e alçadas de decisão. Quem faz o quê fica claro para todo o time."}],layout:"left"},{id:"vendas",num:"06",icon:"📈",title:"Vendas",navIcon:"fa-trophy",intro:"Vendas sem processo é sorte. E sorte não escala. A Singular estrutura o processo comercial do seu negócio para que vendas deixem de depender de uma pessoa carismática e passem a depender de um sistema replicável.",body:"Trabalhamos com a estruturação do funil, CRM, treinamento do time e métricas de conversão. O resultado: previsibilidade de receita e crescimento controlado.",cta:"Falar com Especialista de Vendas",stats:[{num:"7x",label:"Mais barato reter que adquirir"},{num:"+40%",label:"Conversão média com processo"}],services:[{icon:"fa-funnel-dollar",name:"Processo Comercial",desc:"Mapeamento e estruturação do funil de vendas do topo ao fechamento. Cada etapa com critério de saída claro."},{icon:"fa-graduation-cap",name:"Treinamento de Equipe",desc:"Capacitação do time comercial em técnicas de qualificação, apresentação e fechamento adaptadas ao produto."},{icon:"fa-chart-line",name:"Previsão de Receita",desc:"Implantação de pipeline com forecast confiável. Saber quanto vai vender no próximo mês deixa de ser adivinhação."},{icon:"fa-redo-alt",name:"Retenção e Expansão",desc:"Estratégias de upsell, cross-sell e LTV. Vender mais para quem já compra custa 7x menos do que adquirir novo cliente."}],layout:"right"}];function q1(){tc();const[r,e]=pe.useState("");pe.useEffect(()=>{function a(){const o=window.scrollY+200;let l="";Td.forEach(d=>{const h=document.getElementById(d.id);h&&h.offsetTop<=o&&(l=d.id)}),e(l)}return window.addEventListener("scroll",a,{passive:!0}),a(),()=>window.removeEventListener("scroll",a)},[]);function t(a,o){a.preventDefault();const l=document.getElementById(o);if(l){const h=l.getBoundingClientRect().top+window.scrollY-180;window.scrollTo({top:h,behavior:"smooth"})}}return u.jsxs(u.Fragment,{children:[u.jsxs("section",{className:"page-hero",children:[u.jsx("div",{className:"page-hero-bg","aria-hidden":"true"}),u.jsx("div",{className:"page-hero-glow","aria-hidden":"true"}),u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"breadcrumb",children:[u.jsx(ut,{to:"/",children:"Home"}),u.jsx("span",{className:"breadcrumb-sep",children:"/"}),u.jsx("span",{className:"breadcrumb-current",children:"Áreas de Atuação"})]}),u.jsx("div",{className:"sg-tag","data-reveal":!0,children:"Braços Técnicos"}),u.jsxs("h1",{"data-reveal":!0,"data-reveal-delay":"1",children:["Especialistas para",u.jsx("br",{}),u.jsx("span",{style:{color:"var(--cobre)"},children:"cada frente crítica"})]}),u.jsx("p",{"data-reveal":!0,"data-reveal-delay":"2",children:"A Singular não tem generalistas. Cada área conta com profissionais focados em resolver o problema certo, do jeito certo — integrados ao diagnóstico do Consultório."})]})]}),u.jsx("div",{className:"areas-nav",children:u.jsx("div",{className:"container",children:u.jsx("div",{className:"areas-nav-inner",children:Td.map(a=>u.jsxs("a",{href:`#${a.id}`,className:`area-nav-btn${r===a.id?" active":""}`,onClick:o=>t(o,a.id),children:[u.jsx("i",{className:`fas ${a.navIcon}`})," ",a.title==="Recursos Humanos"?"RH":a.title]},a.id))})})}),Td.map((a,o)=>u.jsx("section",{id:a.id,className:"area-section-anchor",children:u.jsx("div",{className:"container",children:u.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3rem",alignItems:"start"},className:"area-grid-two",children:a.layout==="left"?u.jsxs(u.Fragment,{children:[u.jsxs("div",{"data-reveal":!0,children:[u.jsxs("div",{className:"sg-tag",children:["Área ",a.num]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem"},children:[u.jsx("div",{style:{width:"64px",height:"64px",background:"var(--cobre)",borderRadius:"var(--border-radius-lg)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.75rem",flexShrink:0},children:a.icon}),u.jsx("h2",{style:{margin:0},children:a.title})]}),u.jsx("p",{style:{fontSize:"1.05rem",marginBottom:"1.5rem"},children:a.intro}),u.jsx("p",{style:{marginBottom:"2rem"},children:a.body}),a.quote&&u.jsxs("div",{style:{background:"var(--cinza-escuro)",borderRadius:"var(--border-radius-lg)",padding:"1.5rem",border:"1px solid rgba(247,238,235,0.08)",marginBottom:"2rem"},children:[u.jsxs("p",{style:{fontSize:"0.9rem",color:"var(--cobre)",fontWeight:600,marginBottom:"0.5rem"},children:[u.jsx("i",{className:"fas fa-quote-left"})," Dado real:"]}),u.jsx("p",{style:{fontSize:"0.95rem",fontStyle:"italic"},children:a.quote})]}),u.jsxs(ut,{to:"/#triagem",className:"btn btn-primary",children:[a.cta," ",u.jsx("i",{className:"fas fa-arrow-right"})]})]}),u.jsx("div",{"data-reveal":!0,"data-reveal-delay":"2",children:u.jsx("div",{className:"area-services-grid",style:{gridTemplateColumns:"1fr"},children:a.services.map((l,d)=>u.jsxs("div",{className:"area-service-item",children:[u.jsx("div",{className:"area-service-icon",children:u.jsx("i",{className:`${l.icon.startsWith("fab")?"":"fas "}${l.icon}`})}),u.jsxs("div",{children:[u.jsx("p",{className:"area-service-name",children:l.name}),u.jsx("p",{className:"area-service-desc",children:l.desc})]})]},d))})})]}):u.jsxs(u.Fragment,{children:[u.jsx("div",{"data-reveal":!0,"data-reveal-delay":"1",children:u.jsx("div",{className:"area-services-grid",style:{gridTemplateColumns:"1fr"},children:a.services.map((l,d)=>u.jsxs("div",{className:"area-service-item",children:[u.jsx("div",{className:"area-service-icon",children:u.jsx("i",{className:`${l.icon.startsWith("fab")?"":"fas "}${l.icon}`})}),u.jsxs("div",{children:[u.jsx("p",{className:"area-service-name",children:l.name}),u.jsx("p",{className:"area-service-desc",children:l.desc})]})]},d))})}),u.jsxs("div",{"data-reveal":!0,children:[u.jsxs("div",{className:"sg-tag",children:["Área ",a.num]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem"},children:[u.jsx("div",{style:{width:"64px",height:"64px",background:"var(--cobre)",borderRadius:"var(--border-radius-lg)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.75rem",flexShrink:0},children:a.icon}),u.jsx("h2",{style:{margin:0},children:a.title})]}),u.jsx("p",{style:{fontSize:"1.05rem",marginBottom:"1.5rem"},children:a.intro}),u.jsx("p",{style:{marginBottom:"2rem"},children:a.body}),a.stats&&u.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"2rem"},children:a.stats.map((l,d)=>u.jsxs("div",{style:{padding:"1.5rem",background:"rgba(230,78,16,0.08)",border:"1px solid rgba(230,78,16,0.2)",borderRadius:"var(--border-radius-lg)",textAlign:"center"},children:[u.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:"2rem",fontWeight:900,color:"var(--cobre)",display:"block",lineHeight:1},children:l.num}),u.jsx("span",{style:{fontSize:"0.75rem",color:"rgba(247,238,235,0.5)",textTransform:"uppercase",letterSpacing:"0.08em"},children:l.label})]},d))}),u.jsxs(ut,{to:"/#triagem",className:"btn btn-primary",children:[a.cta," ",u.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})})},a.id)),u.jsx("div",{className:"cta-banner",children:u.jsxs("div",{className:"container",style:{textAlign:"center"},children:[u.jsxs("h2",{"data-reveal":!0,children:["Não sabe qual área",u.jsx("br",{}),u.jsx("em",{style:{fontStyle:"normal",color:"var(--preto)"},children:"priorizar agora?"})]}),u.jsx("p",{"data-reveal":!0,"data-reveal-delay":"1",style:{color:"rgba(247,238,235,0.85)"},children:"A Triagem Gratuita identifica qual frente resolver primeiro para gerar o maior impacto no menor tempo."}),u.jsxs(ut,{to:"/#triagem",className:"btn btn-dark btn-lg","data-reveal":!0,"data-reveal-delay":"2",children:[u.jsx("i",{className:"fas fa-stethoscope"})," Fazer Triagem Gratuita"]})]})})]})}function _v(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const e=Math.random()*16|0;return(r==="x"?e:e&3|8).toString(16)})}function Y1(){const r=new URLSearchParams(window.location.search),e=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],t={};return e.forEach(a=>{const o=r.get(a);o&&(t[a]=o)}),t}function Sv(){let r=sessionStorage.getItem("sg_session_id");return r||(r=_v(),sessionStorage.setItem("sg_session_id",r)),r}function yv(){const r=Sv(),e=sessionStorage.getItem("sg_session_data");if(e)return JSON.parse(e);const t={sessionId:r,startedAt:new Date().toISOString(),referrer:document.referrer||"direct",utm:Y1(),searchTerms:[],filtersApplied:[],providersViewed:[]};return sessionStorage.setItem("sg_session_data",JSON.stringify(t)),t}function Yl(r){const e=yv(),t={...e,...r};return r.searchTerm&&!e.searchTerms.includes(r.searchTerm)&&(t.searchTerms=[...e.searchTerms,r.searchTerm]),r.filterApplied&&!e.filtersApplied.includes(r.filterApplied)&&(t.filtersApplied=[...e.filtersApplied,r.filterApplied]),r.providerViewed&&!e.providersViewed.includes(r.providerViewed)&&(t.providersViewed=[...e.providersViewed,r.providerViewed]),sessionStorage.setItem("sg_session_data",JSON.stringify(t)),t}function $1(){return"lead_"+_v()}const Bf="sg_events";function Ev(){try{const r=localStorage.getItem(Bf);return r?JSON.parse(r):[]}catch{return[]}}function K1(r){localStorage.setItem(Bf,JSON.stringify(r))}function fn(r,e={}){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),eventName:r,timestamp:new Date().toISOString(),sessionId:Sv(),payload:e},a=Ev();return a.push(t),K1(a),console.log(`[SG Event] ${r}`,e),t}function Z1(r=20){return Ev().slice(-r).reverse()}function Q1(){localStorage.removeItem(Bf)}const hn={MARKETPLACE_VIEWED:"marketplace_viewed",MARKETPLACE_SEARCH:"marketplace_search",PROVIDER_PROFILE_VIEWED:"provider_profile_viewed",ANALYSIS_REQUESTED_CLICK:"analysis_requested_click",LEAD_FORM_SUBMITTED:"lead_form_submitted",LEAD_CREATED:"lead_created",CONTACT_ATTEMPTED:"contact_attempted",LEAD_CONTACTED:"lead_contacted",TRIAGE_COMPLETED:"triage_completed",LEAD_ROUTED_TO_PROVIDER:"lead_routed_to_provider",MEETING_SCHEDULED:"meeting_scheduled",MEETING_COMPLETED:"meeting_completed",PROPOSAL_CREATED:"proposal_created",DEAL_CLOSED:"deal_closed"},Qa=[{id:"gestao",label:"Gestão",icon:"📊"},{id:"financeiro",label:"Financeiro",icon:"💰"},{id:"marketing",label:"Marketing",icon:"📢"},{id:"vendas",label:"Vendas",icon:"🎯"},{id:"operacoes",label:"Operações",icon:"⚙️"},{id:"juridico",label:"Jurídico",icon:"⚖️"},{id:"tecnologia",label:"Tecnologia",icon:"💻"},{id:"pessoas",label:"Pessoas",icon:"👥"}],io=[{id:"prov_001",slug:"stratego-consultoria",name:"Stratego Consultoria",specialty:"Gestão Estratégica & Processos",shortDesc:"Especialistas em diagnóstico organizacional e redesenho de processos para empresas em crescimento.",fullDesc:"A Stratego é referência em transformação organizacional. Com mais de 15 anos de experiência, atuamos no diagnóstico profundo de gargalos operacionais e na criação de processos escaláveis. Nossa metodologia proprietária combina análise de dados com design thinking para entregar resultados mensuráveis.",pains:["gestao","operacoes"],services:["Diagnóstico organizacional","Redesenho de processos","Planejamento estratégico","OKRs e métricas","Gestão de mudança"],rating:4.9,projects:127,avatar:"🏢"},{id:"prov_002",slug:"fincore-partners",name:"FinCore Partners",specialty:"Gestão Financeira & Valuation",shortDesc:"Assessoria financeira completa: da reestruturação ao planejamento tributário.",fullDesc:"A FinCore Partners oferece soluções financeiras end-to-end para empresas de todos os portes. Nosso time de CFOs fractional e analistas financeiros traz clareza para a saúde financeira do seu negócio, desde cash flow management até preparação para rodadas de investimento.",pains:["financeiro","gestao"],services:["CFO as a Service","Planejamento tributário","Valuation & M&A","Reestruturação financeira","Captação de investimentos"],rating:4.8,projects:89,avatar:"💼"},{id:"prov_003",slug:"pulse-digital",name:"Pulse Digital",specialty:"Marketing Digital & Growth",shortDesc:"Growth hacking e marketing de performance para escalar sua aquisição de clientes.",fullDesc:"A Pulse Digital é uma agência de growth marketing orientada a dados. Combinamos criatividade com análise técnica para criar estratégias de aquisição, retenção e expansão. Nosso foco é ROI mensurável e escalabilidade sustentável.",pains:["marketing","vendas"],services:["Growth hacking","Marketing de performance","SEO & Content Marketing","Social media strategy","CRO & A/B Testing"],rating:4.7,projects:203,avatar:"🚀"},{id:"prov_004",slug:"vendx-aceleradora",name:"VendX Aceleradora",specialty:"Vendas & CRM",shortDesc:"Estruturação completa da máquina de vendas: do playbook ao CRM.",fullDesc:"A VendX é especialista em construir e otimizar máquinas de vendas B2B. Desde a definição do ICP até a implementação de CRM e treinamento de SDRs, entregamos processos comerciais previsíveis e escaláveis.",pains:["vendas","marketing"],services:["Sales playbook","Implementação de CRM","Treinamento de vendas","Inside sales setup","Pipeline management"],rating:4.9,projects:156,avatar:"📈"},{id:"prov_005",slug:"nexus-tech",name:"Nexus Tech Solutions",specialty:"Tecnologia & Automação",shortDesc:"Automação de processos e desenvolvimento de soluções tecnológicas sob medida.",fullDesc:"A Nexus Tech transforma operações manuais em fluxos automatizados e inteligentes. Com expertise em RPA, integrações API e desenvolvimento de software, ajudamos empresas a economizar tempo e reduzir erros operacionais.",pains:["tecnologia","operacoes"],services:["Automação de processos (RPA)","Integrações & APIs","Desenvolvimento custom","Cloud migration","Data analytics"],rating:4.6,projects:94,avatar:"⚡"},{id:"prov_006",slug:"iure-legal",name:"Iure Legal Advisory",specialty:"Jurídico Empresarial",shortDesc:"Assessoria jurídica preventiva para startups e empresas em expansão.",fullDesc:"O Iure Legal Advisory oferece suporte jurídico estratégico com foco em prevenção e compliance. Atuamos em contratos, propriedade intelectual, LGPD, direito societário e questões trabalhistas, sempre com uma abordagem prática e orientada ao negócio.",pains:["juridico","gestao"],services:["Contratos empresariais","Compliance & LGPD","Propriedade intelectual","Direito societário","Consultoria trabalhista"],rating:4.8,projects:78,avatar:"⚖️"}],J1=[{value:"baixa",label:"Baixa — Próximos meses"},{value:"media",label:"Média — Próximas semanas"},{value:"alta",label:"Alta — Próximos dias"},{value:"critica",label:"Crítica — Imediato"}],eb=[{value:"ate_5k",label:"Até R$ 5.000"},{value:"5k_15k",label:"R$ 5.000 - R$ 15.000"},{value:"15k_50k",label:"R$ 15.000 - R$ 50.000"},{value:"50k_100k",label:"R$ 50.000 - R$ 100.000"},{value:"acima_100k",label:"Acima de R$ 100.000"},{value:"indefinido",label:"A definir"}],zf="sg_notifications";function Mv(){try{const r=localStorage.getItem(zf);return r?JSON.parse(r):[]}catch{return[]}}function Ef(r){const e=Mv();e.push(r),localStorage.setItem(zf,JSON.stringify(e)),console.log(`[SG Notification] ${r.channel}:`,r.message)}function tb(r){Ef({id:Date.now().toString(36)+"_wa",channel:"whatsapp",leadId:r.leadId,to:r.telefone,message:`Olá! Recebemos sua solicitação na Singular sobre ${r.dorSelecionada}. Um especialista entrará em contato para entender melhor sua necessidade e indicar o melhor caminho.`,sentAt:new Date().toISOString()}),Ef({id:Date.now().toString(36)+"_em",channel:"email",leadId:r.leadId,to:r.email,subject:"Recebemos sua solicitação — Singular",message:`Olá ${r.nome},

Recebemos sua solicitação sobre "${r.dorSelecionada}".

Resumo do problema:
${r.descricaoProblema}

Próximos passos:
• Um especialista da Singular entrará em contato em até 24h
• Vamos entender melhor sua necessidade
• Indicaremos o melhor caminho para resolver seu problema

Equipe Singular`,sentAt:new Date().toISOString()})}function nb(r,e){Ef({id:Date.now().toString(36)+"_rt",channel:"whatsapp",leadId:r.leadId,to:r.telefone,message:`Pelo que entendemos, a melhor solução para sua necessidade é conversar com ${e}. Segue o link para escolher o melhor horário: [link de agendamento]`,sentAt:new Date().toISOString()})}function ib(){return Mv()}function rb(){localStorage.removeItem(zf)}const Tv="sg_leads",ab=[{key:"novo",label:"Novo",color:"#3b82f6"},{key:"contato_em_andamento",label:"Contato em Andamento",color:"#f59e0b"},{key:"triagem",label:"Triagem",color:"#8b5cf6"},{key:"encaminhado_fornecedor",label:"Encaminhado → Fornecedor",color:"#E64E10"},{key:"encaminhado_consultorio",label:"Encaminhado → Consultório",color:"#E64E10"},{key:"encaminhado_nutricao",label:"Encaminhado → Nutrição",color:"#E64E10"},{key:"agendado",label:"Agendado",color:"#06b6d4"},{key:"reuniao_realizada",label:"Reunião Realizada",color:"#10b981"},{key:"proposta_enviada",label:"Proposta Enviada",color:"#f97316"},{key:"fechado",label:"Fechado",color:"#22c55e"},{key:"perdido",label:"Perdido",color:"#ef4444"}];function sc(){try{const r=localStorage.getItem(Tv);return r?JSON.parse(r):[]}catch{return[]}}function bv(r){localStorage.setItem(Tv,JSON.stringify(r))}function Or(r,e){const t=sc(),a=t.findIndex(o=>o.leadId===r);return a===-1?null:(t[a]={...t[a],...e,updatedAt:new Date().toISOString()},bv(t),t[a])}function sb(r){const e={leadId:$1(),nome:r.nome,email:r.email,telefone:r.telefone,empresa:r.empresa,dorSelecionada:r.dorSelecionada,descricaoProblema:r.descricaoProblema,urgencia:r.urgencia,orcamento:r.orcamento,providerId:r.providerId||null,origem:"marketplace",status:"novo",tentativaContato:0,notas:[],reunioes:[],propostas:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},t=sc();return t.push(e),bv(t),fn(hn.LEAD_CREATED,{leadId:e.leadId,nome:e.nome,email:e.email,dorSelecionada:e.dorSelecionada,origem:e.origem}),tb(e),e}function ob(){return sc()}function co(r){return sc().find(e=>e.leadId===r)||null}function lb(r){const e=co(r);if(!e)return null;const t=Or(r,{tentativaContato:e.tentativaContato+1,status:"contato_em_andamento"});return fn(hn.CONTACT_ATTEMPTED,{leadId:r,tentativaContato:t.tentativaContato}),t}function cb(r,e,t){const a=co(r);if(!a)return null;const o={id:Date.now(),tipo:"contato",texto:e,diagnosticoInicial:t,createdAt:new Date().toISOString()},l=Or(r,{status:"triagem",notas:[...a.notas,o]});return fn(hn.LEAD_CONTACTED,{leadId:r,diagnosticoInicial:t}),l}function bd(r,e,t=null){const o=Or(r,{status:{fornecedor:"encaminhado_fornecedor",consultorio:"encaminhado_consultorio",nutricao:"encaminhado_nutricao"}[e]||"encaminhado_fornecedor",triageDestination:e,triageProvider:t});return fn(hn.TRIAGE_COMPLETED,{leadId:r,destination:e}),e==="fornecedor"&&t&&(fn(hn.LEAD_ROUTED_TO_PROVIDER,{leadId:r,providerName:t}),nb(o,t)),o}function ub(r,e){const t=co(r);if(!t)return null;const a={id:Date.now(),data:e.data,horario:e.horario,participantes:e.participantes||[],status:"agendado",createdAt:new Date().toISOString()},o=Or(r,{status:"agendado",reunioes:[...t.reunioes,a]});return fn(hn.MEETING_SCHEDULED,{leadId:r,meetingDate:a.data}),o}function db(r,e,t){const a=co(r);if(!a)return null;const o=a.reunioes[a.reunioes.length-1];o&&(o.status="realizada",o.resumo=e,o.proximosPassos=t);const l=Or(r,{status:"reuniao_realizada",reunioes:[...a.reunioes]});return fn(hn.MEETING_COMPLETED,{leadId:r,resumo:e}),l}function fb(r,e){const t=co(r);if(!t)return null;const a={id:Date.now(),valor:e.valor,descricao:e.descricao,fornecedor:e.fornecedor,status:"enviada",createdAt:new Date().toISOString()},o=Or(r,{status:"proposta_enviada",propostas:[...t.propostas,a]});return fn(hn.PROPOSAL_CREATED,{leadId:r,valor:a.valor}),o}function hb(r,e){const t=Or(r,{status:"fechado",valorFechado:e.valor,fornecedorFinal:e.fornecedor,comissaoSingular:e.comissao,closedAt:new Date().toISOString()});return fn(hn.DEAL_CLOSED,{leadId:r,valor:e.valor,fornecedor:e.fornecedor,comissao:e.comissao}),t}function pb(r,e){return Or(r,{status:"perdido",motivoPerda:e,lostAt:new Date().toISOString()})}function mb({onClose:r}){const[e,t]=pe.useState(!1);return pe.useEffect(()=>{const a=setTimeout(()=>t(!0),100);return()=>clearTimeout(a)},[]),u.jsxs("div",{className:`mp-success ${e?"animate":""}`,children:[u.jsx("div",{className:"mp-success-check",children:u.jsxs("svg",{viewBox:"0 0 52 52",className:"mp-success-svg",children:[u.jsx("circle",{className:"mp-success-circle",cx:"26",cy:"26",r:"25",fill:"none"}),u.jsx("path",{className:"mp-success-path",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]})}),u.jsx("h2",{children:"Solicitação enviada com sucesso"}),u.jsx("p",{children:"Recebemos sua solicitação. Um especialista da Singular vai entrar em contato para entender melhor sua necessidade e indicar o melhor caminho."}),u.jsxs("div",{className:"mp-success-steps",children:[u.jsxs("div",{className:"mp-success-step",children:[u.jsx("span",{className:"mp-success-step-num",children:"1"}),u.jsx("span",{children:"Análise da sua solicitação"})]}),u.jsxs("div",{className:"mp-success-step",children:[u.jsx("span",{className:"mp-success-step-num",children:"2"}),u.jsx("span",{children:"Contato de um especialista"})]}),u.jsxs("div",{className:"mp-success-step",children:[u.jsx("span",{className:"mp-success-step-num",children:"3"}),u.jsx("span",{children:"Indicação do melhor caminho"})]})]}),u.jsx("button",{className:"btn btn-primary",onClick:r,style:{marginTop:"2rem"},children:"Voltar ao Marketplace"})]})}function Av({onClose:r,prefill:e={}}){const[t,a]=pe.useState(!1),[o,l]=pe.useState({nome:"",email:"",telefone:"",empresa:"",dorSelecionada:e.dorSelecionada||"",descricaoProblema:"",urgencia:"media",orcamento:"indefinido",providerId:e.providerId||null});function d(p){const{name:m,value:_}=p.target;l(x=>({...x,[m]:_}))}function h(p){p.preventDefault(),fn(hn.LEAD_FORM_SUBMITTED,{...o,termoBuscado:e.termoBuscado||""}),sb(o),a(!0)}return t?u.jsx("div",{className:"mp-modal-overlay",onClick:r,children:u.jsx("div",{className:"mp-modal",onClick:p=>p.stopPropagation(),children:u.jsx(mb,{onClose:r})})}):u.jsx("div",{className:"mp-modal-overlay",onClick:r,children:u.jsxs("div",{className:"mp-modal mp-modal-form",onClick:p=>p.stopPropagation(),children:[u.jsx("button",{className:"mp-modal-close",onClick:r,children:"✕"}),u.jsxs("div",{className:"mp-modal-header",children:[u.jsxs("h2",{children:["Solicitar análise da ",u.jsx("span",{className:"text-cobre",children:"Singular"})]}),u.jsx("p",{children:"Preencha os dados abaixo e um especialista entrará em contato."}),e.providerName&&u.jsxs("div",{className:"mp-modal-prefill",children:["Fornecedor selecionado: ",u.jsx("strong",{children:e.providerName})]})]}),u.jsxs("form",{onSubmit:h,className:"mp-form",children:[u.jsxs("div",{className:"mp-form-row",children:[u.jsxs("div",{className:"mp-form-group",children:[u.jsx("label",{htmlFor:"lead-nome",children:"Nome completo *"}),u.jsx("input",{type:"text",id:"lead-nome",name:"nome",value:o.nome,onChange:d,required:!0,placeholder:"Seu nome"})]}),u.jsxs("div",{className:"mp-form-group",children:[u.jsx("label",{htmlFor:"lead-email",children:"E-mail *"}),u.jsx("input",{type:"email",id:"lead-email",name:"email",value:o.email,onChange:d,required:!0,placeholder:"seu@email.com"})]})]}),u.jsxs("div",{className:"mp-form-row",children:[u.jsxs("div",{className:"mp-form-group",children:[u.jsx("label",{htmlFor:"lead-telefone",children:"Telefone *"}),u.jsx("input",{type:"tel",id:"lead-telefone",name:"telefone",value:o.telefone,onChange:d,required:!0,placeholder:"(11) 99999-9999"})]}),u.jsxs("div",{className:"mp-form-group",children:[u.jsx("label",{htmlFor:"lead-empresa",children:"Empresa *"}),u.jsx("input",{type:"text",id:"lead-empresa",name:"empresa",value:o.empresa,onChange:d,required:!0,placeholder:"Nome da empresa"})]})]}),u.jsxs("div",{className:"mp-form-group",children:[u.jsx("label",{htmlFor:"lead-dor",children:"Qual sua principal dor? *"}),u.jsxs("select",{id:"lead-dor",name:"dorSelecionada",value:o.dorSelecionada,onChange:d,required:!0,children:[u.jsx("option",{value:"",children:"Selecione..."}),Qa.map(p=>u.jsxs("option",{value:p.label,children:[p.icon," ",p.label]},p.id))]})]}),u.jsxs("div",{className:"mp-form-group",children:[u.jsx("label",{htmlFor:"lead-descricao",children:"Descreva seu problema *"}),u.jsx("textarea",{id:"lead-descricao",name:"descricaoProblema",value:o.descricaoProblema,onChange:d,required:!0,rows:"4",placeholder:"Conte-nos mais sobre o desafio que você enfrenta..."})]}),u.jsxs("div",{className:"mp-form-row",children:[u.jsxs("div",{className:"mp-form-group",children:[u.jsx("label",{htmlFor:"lead-urgencia",children:"Urgência"}),u.jsx("select",{id:"lead-urgencia",name:"urgencia",value:o.urgencia,onChange:d,children:J1.map(p=>u.jsx("option",{value:p.value,children:p.label},p.value))})]}),u.jsxs("div",{className:"mp-form-group",children:[u.jsx("label",{htmlFor:"lead-orcamento",children:"Orçamento previsto"}),u.jsx("select",{id:"lead-orcamento",name:"orcamento",value:o.orcamento,onChange:d,children:eb.map(p=>u.jsx("option",{value:p.value,children:p.label},p.value))})]})]}),u.jsx("button",{type:"submit",className:"btn btn-primary btn-lg mp-form-submit",id:"btn-submit-lead",children:"Enviar solicitação"})]})]})})}function gb(){var x;const[r,e]=pe.useState(""),[t,a]=pe.useState("todos"),[o,l]=pe.useState(!1),[d,h]=pe.useState(io);pe.useEffect(()=>{yv(),fn(hn.MARKETPLACE_VIEWED,{origem:document.referrer||"direct",timestamp:new Date().toISOString()})},[]),pe.useEffect(()=>{let g=io;if(t!=="todos"&&(g=g.filter(E=>E.pains.includes(t))),r.trim()){const E=r.toLowerCase();g=g.filter(b=>b.name.toLowerCase().includes(E)||b.specialty.toLowerCase().includes(E)||b.shortDesc.toLowerCase().includes(E)||b.pains.some(R=>R.includes(E)))}h(g)},[r,t]);function p(g){const E=g.target.value;e(E),E.trim().length>2&&(fn(hn.MARKETPLACE_SEARCH,{termo:E,resultados:d.length}),Yl({searchTerm:E}))}function m(g){a(g),fn(hn.MARKETPLACE_SEARCH,{filtro:g,tipo:"filter_click"}),Yl({filterApplied:g})}function _(){fn(hn.ANALYSIS_REQUESTED_CLICK,{searchTerm:r,activeFilter:t}),l(!0)}return u.jsxs("div",{className:"marketplace-page",children:[u.jsxs("section",{className:"mp-hero",children:[u.jsx("div",{className:"mp-hero-bg"}),u.jsxs("div",{className:"container mp-hero-content",children:[u.jsxs("div",{className:"mp-hero-eyebrow",children:[u.jsx("span",{className:"mp-hero-eyebrow-line"}),u.jsx("span",{children:"Marketplace Singular"})]}),u.jsxs("h1",{children:["Encontre o ",u.jsx("em",{children:"especialista"})," certo para sua dor"]}),u.jsx("p",{className:"mp-hero-sub",children:"Fornecedores validados pela Singular, prontos para resolver seus desafios de negócio."}),u.jsxs("div",{className:"mp-search-wrapper",children:[u.jsx("div",{className:"mp-search-icon",children:u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("path",{d:"m21 21-4.35-4.35"})]})}),u.jsx("input",{type:"text",className:"mp-search-input",placeholder:"Buscar por especialidade, dor ou fornecedor...",value:r,onChange:p,id:"marketplace-search"})]})]})]}),u.jsx("section",{className:"mp-content section-pad",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"mp-filters",children:[u.jsx("button",{className:`mp-filter-btn ${t==="todos"?"active":""}`,onClick:()=>m("todos"),children:"Todos"}),Qa.map(g=>u.jsxs("button",{className:`mp-filter-btn ${t===g.id?"active":""}`,onClick:()=>m(g.id),children:[u.jsx("span",{className:"mp-filter-icon",children:g.icon}),g.label]},g.id))]}),u.jsxs("div",{className:"mp-results-info",children:[u.jsx("span",{className:"mp-results-count",children:d.length}),u.jsxs("span",{children:[" fornecedor",d.length!==1?"es":""," encontrado",d.length!==1?"s":""]})]}),u.jsx("div",{className:"mp-grid",children:d.map(g=>u.jsxs(ut,{to:`/marketplace/fornecedor/${g.slug}`,className:"mp-card",onClick:()=>{fn(hn.PROVIDER_PROFILE_VIEWED,{providerId:g.id,providerName:g.name,searchTerm:r}),Yl({providerViewed:g.id})},children:[u.jsxs("div",{className:"mp-card-header",children:[u.jsx("div",{className:"mp-card-avatar",children:g.avatar}),u.jsxs("div",{className:"mp-card-meta",children:[u.jsx("h3",{children:g.name}),u.jsx("span",{className:"mp-card-specialty",children:g.specialty})]})]}),u.jsx("p",{className:"mp-card-desc",children:g.shortDesc}),u.jsx("div",{className:"mp-card-tags",children:g.pains.map(E=>{const b=Qa.find(R=>R.id===E);return b?u.jsxs("span",{className:"mp-card-tag",children:[b.icon," ",b.label]},E):null})}),u.jsxs("div",{className:"mp-card-footer",children:[u.jsxs("div",{className:"mp-card-stats",children:[u.jsxs("span",{className:"mp-card-rating",children:["★ ",g.rating]}),u.jsxs("span",{className:"mp-card-projects",children:[g.projects," projetos"]})]}),u.jsx("span",{className:"mp-card-arrow",children:"→"})]})]},g.id))}),d.length===0&&u.jsxs("div",{className:"mp-empty",children:[u.jsx("span",{className:"mp-empty-icon",children:"🔍"}),u.jsx("h3",{children:"Nenhum fornecedor encontrado"}),u.jsx("p",{children:"Tente ajustar seus filtros ou termos de busca."})]}),u.jsx("div",{className:"mp-cta-section",children:u.jsxs("div",{className:"mp-cta-card",children:[u.jsxs("div",{className:"mp-cta-content",children:[u.jsx("h3",{children:"Não encontrou o que procura?"}),u.jsx("p",{children:"Solicite uma análise da Singular. Nossos especialistas vão entender sua necessidade e indicar o melhor caminho."})]}),u.jsx("button",{className:"btn btn-primary btn-lg",onClick:_,id:"btn-request-analysis",children:"Solicitar análise da Singular"})]})})]})}),o&&u.jsx(Av,{onClose:()=>l(!1),prefill:{dorSelecionada:t!=="todos"?(x=Qa.find(g=>g.id===t))==null?void 0:x.label:"",termoBuscado:r}})]})}function vb(){var l;const{slug:r}=qx(),[e,t]=pe.useState(!1),a=io.find(d=>d.slug===r);if(pe.useEffect(()=>{a&&(fn(hn.PROVIDER_PROFILE_VIEWED,{providerId:a.id,providerName:a.name}),Yl({providerViewed:a.id}))},[a]),!a)return u.jsx("div",{className:"marketplace-page",children:u.jsx("section",{className:"mp-profile section-pad",style:{paddingTop:"160px"},children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"mp-empty",children:[u.jsx("span",{className:"mp-empty-icon",children:"❌"}),u.jsx("h3",{children:"Fornecedor não encontrado"}),u.jsx("p",{children:"O fornecedor que você procura não existe ou foi removido."}),u.jsx(ut,{to:"/marketplace",className:"btn btn-primary",style:{marginTop:"1.5rem"},children:"Voltar ao Marketplace"})]})})})});function o(){fn(hn.ANALYSIS_REQUESTED_CLICK,{providerId:a.id,providerName:a.name}),t(!0)}return u.jsxs("div",{className:"marketplace-page",children:[u.jsxs("section",{className:"mp-profile-hero",children:[u.jsx("div",{className:"mp-hero-bg"}),u.jsxs("div",{className:"container mp-profile-hero-content",children:[u.jsx(ut,{to:"/marketplace",className:"mp-back-link",children:"← Voltar ao Marketplace"}),u.jsxs("div",{className:"mp-profile-header",children:[u.jsx("div",{className:"mp-profile-avatar",children:a.avatar}),u.jsxs("div",{className:"mp-profile-info",children:[u.jsx("h1",{children:a.name}),u.jsx("span",{className:"mp-profile-specialty",children:a.specialty}),u.jsxs("div",{className:"mp-profile-stats",children:[u.jsxs("span",{className:"mp-card-rating",children:["★ ",a.rating]}),u.jsxs("span",{className:"mp-card-projects",children:[a.projects," projetos realizados"]})]})]})]})]})]}),u.jsx("section",{className:"mp-profile-body section-pad",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"mp-profile-grid",children:[u.jsxs("div",{className:"mp-profile-main",children:[u.jsxs("div",{className:"mp-profile-section",children:[u.jsx("h2",{children:"Sobre"}),u.jsx("p",{children:a.fullDesc})]}),u.jsxs("div",{className:"mp-profile-section",children:[u.jsx("h2",{children:"Serviços"}),u.jsx("ul",{className:"mp-services-list",children:a.services.map((d,h)=>u.jsxs("li",{children:[u.jsx("span",{className:"mp-service-check",children:"✓"}),d]},h))})]}),u.jsxs("div",{className:"mp-profile-section",children:[u.jsx("h2",{children:"Áreas de atuação"}),u.jsx("div",{className:"mp-card-tags",style:{marginTop:"1rem"},children:a.pains.map(d=>{const h=Qa.find(p=>p.id===d);return h?u.jsxs("span",{className:"mp-card-tag",children:[h.icon," ",h.label]},d):null})})]})]}),u.jsx("div",{className:"mp-profile-sidebar",children:u.jsxs("div",{className:"mp-profile-cta-card",children:[u.jsx("h3",{children:"Interessado neste fornecedor?"}),u.jsx("p",{children:"Solicite uma análise da Singular. Nossos especialistas vão avaliar sua necessidade e facilitar o contato."}),u.jsx("button",{className:"btn btn-primary btn-lg",onClick:o,id:"btn-request-analysis-profile",style:{width:"100%",justifyContent:"center"},children:"Solicitar análise da Singular"}),u.jsxs("div",{className:"mp-profile-trust",children:[u.jsx("span",{children:"🛡️ Fornecedor validado pela Singular"}),u.jsx("span",{children:"⚡ Resposta em até 24h"}),u.jsx("span",{children:"🎯 Matchmaking personalizado"})]})]})})]})})}),e&&u.jsx(Av,{onClose:()=>t(!1),prefill:{providerId:a.id,providerName:a.name,dorSelecionada:((l=Qa.find(d=>a.pains.includes(d.id)))==null?void 0:l.label)||""}})]})}function xb(){const[r,e]=pe.useState([]),[t,a]=pe.useState([]),[o,l]=pe.useState([]),[d,h]=pe.useState(null),[p,m]=pe.useState("pipeline"),[_,x]=pe.useState(null),g=pe.useCallback(()=>{e(ob()),a(Z1(50)),l(ib())},[]);pe.useEffect(()=>{g();const M=setInterval(g,3e3);return()=>clearInterval(M)},[g]);const E=ab.filter(M=>!["encaminhado_consultorio","encaminhado_nutricao","perdido"].includes(M.key));function b(M){return M==="encaminhado_fornecedor"?r.filter(C=>C.status==="encaminhado_fornecedor"||C.status==="encaminhado_consultorio"||C.status==="encaminhado_nutricao"):r.filter(C=>C.status===M)}function R(M){lb(M),g()}function S(M,C,K){cb(M,C,K),g(),x(null)}function y(M,C,K){bd(M,C,K),g(),x(null)}function N(M,C,K){ub(M,{data:C,horario:K}),g(),x(null)}function L(M,C,K){db(M,C,K),g(),x(null)}function P(M,C,K,O){fb(M,{valor:C,descricao:K,fornecedor:O}),g(),x(null)}function k(M,C,K,O){hb(M,{valor:C,fornecedor:K,comissao:O}),g(),x(null)}function U(M,C){pb(M,C),g(),x(null)}function B(M){const C=[];switch(M.status){case"novo":C.push({label:"Registrar tentativa de contato",action:()=>R(M.leadId),icon:"📞"}),C.push({label:"Perder lead",action:()=>x({type:"lose",leadId:M.leadId}),icon:"❌"});break;case"contato_em_andamento":C.push({label:"Nova tentativa",action:()=>R(M.leadId),icon:"📞"}),C.push({label:"Registrar contato",action:()=>x({type:"contact",leadId:M.leadId}),icon:"✅"}),C.push({label:"Perder lead",action:()=>x({type:"lose",leadId:M.leadId}),icon:"❌"});break;case"triagem":C.push({label:"Encaminhar fornecedor",action:()=>x({type:"triage_fornecedor",leadId:M.leadId}),icon:"🏢"}),C.push({label:"Encaminhar consultório",action:()=>{bd(M.leadId,"consultorio"),g()},icon:"🏥"}),C.push({label:"Encaminhar nutrição",action:()=>{bd(M.leadId,"nutricao"),g()},icon:"🥗"}),C.push({label:"Perder lead",action:()=>x({type:"lose",leadId:M.leadId}),icon:"❌"});break;case"encaminhado_fornecedor":case"encaminhado_consultorio":case"encaminhado_nutricao":C.push({label:"Agendar reunião",action:()=>x({type:"schedule",leadId:M.leadId}),icon:"📅"}),C.push({label:"Perder lead",action:()=>x({type:"lose",leadId:M.leadId}),icon:"❌"});break;case"agendado":C.push({label:"Registrar reunião realizada",action:()=>x({type:"meeting_done",leadId:M.leadId}),icon:"🤝"}),C.push({label:"Perder lead",action:()=>x({type:"lose",leadId:M.leadId}),icon:"❌"});break;case"reuniao_realizada":C.push({label:"Criar proposta",action:()=>x({type:"proposal",leadId:M.leadId}),icon:"📄"}),C.push({label:"Perder lead",action:()=>x({type:"lose",leadId:M.leadId}),icon:"❌"});break;case"proposta_enviada":C.push({label:"Fechar negócio",action:()=>x({type:"close_deal",leadId:M.leadId}),icon:"🎉"}),C.push({label:"Perder lead",action:()=>x({type:"lose",leadId:M.leadId}),icon:"❌"});break}return C}return u.jsxs("div",{className:"bo-page",children:[u.jsx("div",{className:"bo-header",children:u.jsxs("div",{className:"container bo-header-inner",children:[u.jsxs("div",{children:[u.jsxs("h1",{children:["Backoffice ",u.jsx("span",{className:"text-cobre",children:"CRM"})]}),u.jsx("p",{className:"bo-subtitle",children:"Pipeline de leads — Marketplace Singular"})]}),u.jsxs("div",{className:"bo-header-stats",children:[u.jsxs("div",{className:"bo-stat",children:[u.jsx("span",{className:"bo-stat-num",children:r.length}),u.jsx("span",{className:"bo-stat-label",children:"Leads"})]}),u.jsxs("div",{className:"bo-stat",children:[u.jsx("span",{className:"bo-stat-num",children:t.length}),u.jsx("span",{className:"bo-stat-label",children:"Eventos"})]}),u.jsxs("div",{className:"bo-stat",children:[u.jsx("span",{className:"bo-stat-num",children:r.filter(M=>M.status==="fechado").length}),u.jsx("span",{className:"bo-stat-label",children:"Fechados"})]})]})]})}),u.jsx("div",{className:"container",children:u.jsxs("div",{className:"bo-tabs",children:[u.jsx("button",{className:`bo-tab ${p==="pipeline"?"active":""}`,onClick:()=>m("pipeline"),children:"📊 Pipeline"}),u.jsxs("button",{className:`bo-tab ${p==="events"?"active":""}`,onClick:()=>m("events"),children:["📡 Eventos (",t.length,")"]}),u.jsxs("button",{className:`bo-tab ${p==="notifications"?"active":""}`,onClick:()=>m("notifications"),children:["💬 Notificações (",o.length,")"]})]})}),p==="pipeline"&&u.jsx("div",{className:"bo-kanban-wrapper",children:u.jsx("div",{className:"bo-kanban",children:E.map(M=>{const C=b(M.key);return u.jsxs("div",{className:"bo-column",children:[u.jsxs("div",{className:"bo-column-header",style:{borderTopColor:M.color},children:[u.jsx("span",{className:"bo-column-dot",style:{background:M.color}}),u.jsx("span",{className:"bo-column-title",children:M.label}),u.jsx("span",{className:"bo-column-count",children:C.length})]}),u.jsxs("div",{className:"bo-column-body",children:[C.map(K=>u.jsxs("div",{className:`bo-lead-card ${d===K.leadId?"selected":""}`,onClick:()=>h(d===K.leadId?null:K.leadId),children:[u.jsx("div",{className:"bo-lead-name",children:K.nome}),u.jsx("div",{className:"bo-lead-company",children:K.empresa}),u.jsx("div",{className:"bo-lead-pain",children:K.dorSelecionada}),K.tentativaContato>0&&u.jsxs("div",{className:"bo-lead-attempts",children:["📞 ",K.tentativaContato," tentativa",K.tentativaContato>1?"s":""]}),d===K.leadId&&u.jsxs("div",{className:"bo-lead-expanded",children:[u.jsxs("div",{className:"bo-lead-detail",children:[u.jsx("span",{children:"Email:"})," ",K.email]}),u.jsxs("div",{className:"bo-lead-detail",children:[u.jsx("span",{children:"Tel:"})," ",K.telefone]}),u.jsxs("div",{className:"bo-lead-detail",children:[u.jsx("span",{children:"Urgência:"})," ",K.urgencia]}),u.jsxs("div",{className:"bo-lead-detail",children:[u.jsx("span",{children:"Orçamento:"})," ",K.orcamento]}),K.descricaoProblema&&u.jsxs("div",{className:"bo-lead-detail bo-lead-desc",children:[u.jsx("span",{children:"Problema:"})," ",K.descricaoProblema]}),K.notas.length>0&&u.jsxs("div",{className:"bo-lead-notes",children:[u.jsx("span",{children:"Notas:"}),K.notas.map((O,$)=>u.jsx("div",{className:"bo-note",children:O.texto},$))]}),u.jsx("div",{className:"bo-lead-actions",children:B(K).map((O,$)=>u.jsxs("button",{className:"bo-action-btn",onClick:J=>{J.stopPropagation(),O.action()},children:[O.icon," ",O.label]},$))})]}),u.jsx("div",{className:"bo-lead-time",children:new Date(K.createdAt).toLocaleDateString("pt-BR")})]},K.leadId)),C.length===0&&u.jsx("div",{className:"bo-empty-col",children:"Nenhum lead"})]})]},M.key)})})}),p==="events"&&u.jsx("div",{className:"container",children:u.jsxs("div",{className:"bo-events-panel",children:[u.jsxs("div",{className:"bo-panel-header",children:[u.jsx("h3",{children:"Log de Eventos"}),u.jsx("button",{className:"bo-clear-btn",onClick:()=>{Q1(),g()},children:"Limpar"})]}),t.length===0?u.jsx("div",{className:"bo-empty-panel",children:"Nenhum evento registrado ainda. Navegue pelo Marketplace para gerar eventos."}):u.jsx("div",{className:"bo-events-list",children:t.map(M=>u.jsxs("div",{className:"bo-event-item",children:[u.jsx("div",{className:"bo-event-name",children:M.eventName}),u.jsx("div",{className:"bo-event-time",children:new Date(M.timestamp).toLocaleString("pt-BR")}),u.jsx("div",{className:"bo-event-payload",children:Object.entries(M.payload||{}).map(([C,K])=>u.jsxs("span",{className:"bo-event-tag",children:[C,": ",String(K)]},C))})]},M.id))})]})}),p==="notifications"&&u.jsx("div",{className:"container",children:u.jsxs("div",{className:"bo-events-panel",children:[u.jsxs("div",{className:"bo-panel-header",children:[u.jsx("h3",{children:"Notificações Enviadas"}),u.jsx("button",{className:"bo-clear-btn",onClick:()=>{rb(),g()},children:"Limpar"})]}),o.length===0?u.jsx("div",{className:"bo-empty-panel",children:"Nenhuma notificação enviada ainda."}):u.jsx("div",{className:"bo-events-list",children:o.map((M,C)=>u.jsxs("div",{className:"bo-event-item",children:[u.jsxs("div",{className:"bo-event-name",children:[M.channel==="whatsapp"?"💬 WhatsApp":"📧 Email",M.subject&&` — ${M.subject}`]}),u.jsxs("div",{className:"bo-event-time",children:["Para: ",M.to," • ",new Date(M.sentAt).toLocaleString("pt-BR")]}),u.jsx("div",{className:"bo-notif-message",children:M.message})]},C))})]})}),_&&u.jsx(_b,{type:_.type,leadId:_.leadId,onClose:()=>x(null),onRegisterContact:S,onTriage:y,onSchedule:N,onMeetingDone:L,onProposal:P,onCloseDeal:k,onLoseDeal:U})]})}function _b({type:r,leadId:e,onClose:t,onRegisterContact:a,onTriage:o,onSchedule:l,onMeetingDone:d,onProposal:h,onCloseDeal:p,onLoseDeal:m}){var k;const[_,x]=pe.useState(""),[g,E]=pe.useState(""),[b,R]=pe.useState(""),[S,y]=pe.useState(((k=io[0])==null?void 0:k.name)||"");function N(U){switch(U.preventDefault(),r){case"contact":a(e,_,g);break;case"triage_fornecedor":o(e,"fornecedor",S);break;case"schedule":l(e,_,g);break;case"meeting_done":d(e,_,g);break;case"proposal":h(e,_,g,b);break;case"close_deal":p(e,_,g,b);break;case"lose":m(e,_);break}}const P={contact:{title:"Registrar Contato",fields:[{label:"Notas da ligação",value:_,onChange:x,type:"textarea"},{label:"Diagnóstico inicial",value:g,onChange:E,type:"text"}]},triage_fornecedor:{title:"Encaminhar para Fornecedor",fields:[{label:"Fornecedor",value:S,onChange:y,type:"select",options:io.map(U=>U.name)}]},schedule:{title:"Agendar Reunião",fields:[{label:"Data",value:_,onChange:x,type:"date"},{label:"Horário",value:g,onChange:E,type:"time"}]},meeting_done:{title:"Registrar Reunião Realizada",fields:[{label:"Resumo",value:_,onChange:x,type:"textarea"},{label:"Próximos passos",value:g,onChange:E,type:"textarea"}]},proposal:{title:"Criar Proposta",fields:[{label:"Valor (R$)",value:_,onChange:x,type:"text"},{label:"Descrição",value:g,onChange:E,type:"textarea"},{label:"Fornecedor",value:b,onChange:R,type:"text"}]},close_deal:{title:"Fechar Negócio 🎉",fields:[{label:"Valor fechado (R$)",value:_,onChange:x,type:"text"},{label:"Fornecedor",value:g,onChange:E,type:"text"},{label:"Comissão Singular (R$)",value:b,onChange:R,type:"text"}]},lose:{title:"Registrar Perda",fields:[{label:"Motivo da perda",value:_,onChange:x,type:"textarea"}]}}[r];return P?u.jsx("div",{className:"mp-modal-overlay",onClick:t,children:u.jsxs("div",{className:"mp-modal",onClick:U=>U.stopPropagation(),style:{maxWidth:"480px"},children:[u.jsx("button",{className:"mp-modal-close",onClick:t,children:"✕"}),u.jsx("h2",{style:{marginBottom:"1.5rem",fontSize:"1.3rem"},children:P.title}),u.jsxs("form",{onSubmit:N,className:"mp-form",children:[P.fields.map((U,B)=>u.jsxs("div",{className:"mp-form-group",children:[u.jsx("label",{children:U.label}),U.type==="textarea"?u.jsx("textarea",{value:U.value,onChange:M=>U.onChange(M.target.value),rows:"3",required:!0}):U.type==="select"?u.jsx("select",{value:U.value,onChange:M=>U.onChange(M.target.value),children:U.options.map((M,C)=>u.jsx("option",{value:M,children:M},C))}):u.jsx("input",{type:U.type,value:U.value,onChange:M=>U.onChange(M.target.value),required:!0})]},B)),u.jsx("button",{type:"submit",className:"btn btn-primary mp-form-submit",children:"Confirmar"})]})]})}):null}function Sb(){const{pathname:r}=as();return pe.useEffect(()=>{window.scrollTo(0,0)},[r]),null}function yb(){return u.jsxs(u.Fragment,{children:[u.jsx(Sb,{}),u.jsx(M_,{}),u.jsxs(c_,{children:[u.jsx(Nr,{path:"/",element:u.jsx(j1,{})}),u.jsx(Nr,{path:"/ecossistema",element:u.jsx(W1,{})}),u.jsx(Nr,{path:"/venture-builder",element:u.jsx(X1,{})}),u.jsx(Nr,{path:"/areas",element:u.jsx(q1,{})}),u.jsx(Nr,{path:"/marketplace",element:u.jsx(gb,{})}),u.jsx(Nr,{path:"/marketplace/fornecedor/:slug",element:u.jsx(vb,{})}),u.jsx(Nr,{path:"/backoffice",element:u.jsx(xb,{})})]}),u.jsx(T_,{})]})}mx.createRoot(document.getElementById("root")).render(u.jsx(Eg.StrictMode,{children:u.jsx(g_,{children:u.jsx(S_,{children:u.jsx(yb,{})})})}));
