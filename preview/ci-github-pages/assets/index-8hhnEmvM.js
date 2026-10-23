(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function c(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=c(u);fetch(u.href,f)}})();function xC(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var xu={exports:{}},Gr={};var Fp;function AC(){if(Fp)return Gr;Fp=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(l,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var p in u)p!=="key"&&(f[p]=u[p])}else f=u;return u=f.ref,{$$typeof:i,type:l,key:h,ref:u!==void 0?u:null,props:f}}return Gr.Fragment=s,Gr.jsx=c,Gr.jsxs=c,Gr}var Qp;function MC(){return Qp||(Qp=1,xu.exports=AC()),xu.exports}var g=MC(),Au={exports:{}},ye={};var Yp;function NC(){if(Yp)return ye;Yp=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),q=Symbol.iterator;function B(w){return w===null||typeof w!="object"?null:(w=q&&w[q]||w["@@iterator"],typeof w=="function"?w:null)}var ie={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},se=Object.assign,be={};function V(w,O,X){this.props=w,this.context=O,this.refs=be,this.updater=X||ie}V.prototype.isReactComponent={},V.prototype.setState=function(w,O){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,O,"setState")},V.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function ce(){}ce.prototype=V.prototype;function re(w,O,X){this.props=w,this.context=O,this.refs=be,this.updater=X||ie}var Se=re.prototype=new ce;Se.constructor=re,se(Se,V.prototype),Se.isPureReactComponent=!0;var ue=Array.isArray;function L(){}var T={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function H(w,O,X){var ae=X.ref;return{$$typeof:i,type:w,key:O,ref:ae!==void 0?ae:null,props:X}}function G(w,O){return H(w.type,O,w.props)}function z(w){return typeof w=="object"&&w!==null&&w.$$typeof===i}function te(w){var O={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(X){return O[X]})}var we=/\/+/g;function Ce(w,O){return typeof w=="object"&&w!==null&&w.key!=null?te(""+w.key):O.toString(36)}function I(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(L,L):(w.status="pending",w.then(function(O){w.status==="pending"&&(w.status="fulfilled",w.value=O)},function(O){w.status==="pending"&&(w.status="rejected",w.reason=O)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function U(w,O,X,ae,$){var ee=typeof w;(ee==="undefined"||ee==="boolean")&&(w=null);var me=!1;if(w===null)me=!0;else switch(ee){case"bigint":case"string":case"number":me=!0;break;case"object":switch(w.$$typeof){case i:case s:me=!0;break;case E:return me=w._init,U(me(w._payload),O,X,ae,$)}}if(me)return $=$(w),me=ae===""?"."+Ce(w,0):ae,ue($)?(X="",me!=null&&(X=me.replace(we,"$&/")+"/"),U($,O,X,"",function(Fe){return Fe})):$!=null&&(z($)&&($=G($,X+($.key==null||w&&w.key===$.key?"":(""+$.key).replace(we,"$&/")+"/")+me)),O.push($)),1;me=0;var j=ae===""?".":ae+":";if(ue(w))for(var J=0;J<w.length;J++)ae=w[J],ee=j+Ce(ae,J),me+=U(ae,O,X,ee,$);else if(J=B(w),typeof J=="function")for(w=J.call(w),J=0;!(ae=w.next()).done;)ae=ae.value,ee=j+Ce(ae,J++),me+=U(ae,O,X,ee,$);else if(ee==="object"){if(typeof w.then=="function")return U(I(w),O,X,ae,$);throw O=String(w),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return me}function Z(w,O,X){if(w==null)return w;var ae=[],$=0;return U(w,ae,"","",function(ee){return O.call(X,ee,$++)}),ae}function Q(w){if(w._status===-1){var O=w._result,X=O();X.then(function(ae){(w._status===0||w._status===-1)&&(w._status=1,w._result=ae,X.status===void 0&&(X.status="fulfilled",X.value=ae))},function(ae){(w._status===0||w._status===-1)&&(w._status=2,w._result=ae,X.status===void 0&&(X.status="rejected",X.reason=ae))}),w._status===-1&&(w._status=0,w._result=X)}if(w._status===1)return w._result.default;throw w._result}var le=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function fe(w){var O=T.T,X={};X.types=O!==null?O.types:null,T.T=X;try{var ae=w(),$=T.S;$!==null&&$(X,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(L,le)}catch(ee){le(ee)}finally{O!==null&&X.types!==null&&(O.types=X.types),T.T=O}}function F(w){var O=T.T;if(O!==null){var X=O.types;X===null?O.types=[w]:X.indexOf(w)===-1&&X.push(w)}else fe(F.bind(null,w))}var K={map:Z,forEach:function(w,O,X){Z(w,function(){O.apply(this,arguments)},X)},count:function(w){var O=0;return Z(w,function(){O++}),O},toArray:function(w){return Z(w,function(O){return O})||[]},only:function(w){if(!z(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ye.Activity=y,ye.Children=K,ye.Component=V,ye.Fragment=c,ye.Profiler=u,ye.PureComponent=re,ye.StrictMode=l,ye.Suspense=v,ye.ViewTransition=_,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,ye.__COMPILER_RUNTIME={__proto__:null,c:function(w){return T.H.useMemoCache(w)}},ye.addTransitionType=F,ye.cache=function(w){return function(){return w.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(w,O,X){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var ae=se({},w.props),$=w.key;if(O!=null)for(ee in O.key!==void 0&&($=""+O.key),O)!S.call(O,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&O.ref===void 0||(ae[ee]=O[ee]);var ee=arguments.length-2;if(ee===1)ae.children=X;else if(1<ee){for(var me=Array(ee),j=0;j<ee;j++)me[j]=arguments[j+2];ae.children=me}return H(w.type,$,ae)},ye.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:f,_context:w},w},ye.createElement=function(w,O,X){var ae,$={},ee=null;if(O!=null)for(ae in O.key!==void 0&&(ee=""+O.key),O)S.call(O,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&($[ae]=O[ae]);var me=arguments.length-2;if(me===1)$.children=X;else if(1<me){for(var j=Array(me),J=0;J<me;J++)j[J]=arguments[J+2];$.children=j}if(w&&w.defaultProps)for(ae in me=w.defaultProps,me)$[ae]===void 0&&($[ae]=me[ae]);return H(w,ee,$)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(w){return{$$typeof:p,render:w}},ye.isValidElement=z,ye.lazy=function(w){return{$$typeof:E,_payload:{_status:-1,_result:w},_init:Q}},ye.memo=function(w,O){return{$$typeof:b,type:w,compare:O===void 0?null:O}},ye.startTransition=fe,ye.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},ye.use=function(w){return T.H.use(w)},ye.useActionState=function(w,O,X){return T.H.useActionState(w,O,X)},ye.useCallback=function(w,O){return T.H.useCallback(w,O)},ye.useContext=function(w){return T.H.useContext(w)},ye.useDebugValue=function(){},ye.useDeferredValue=function(w,O){return T.H.useDeferredValue(w,O)},ye.useEffect=function(w,O){return T.H.useEffect(w,O)},ye.useEffectEvent=function(w){return T.H.useEffectEvent(w)},ye.useId=function(){return T.H.useId()},ye.useImperativeHandle=function(w,O,X){return T.H.useImperativeHandle(w,O,X)},ye.useInsertionEffect=function(w,O){return T.H.useInsertionEffect(w,O)},ye.useLayoutEffect=function(w,O){return T.H.useLayoutEffect(w,O)},ye.useMemo=function(w,O){return T.H.useMemo(w,O)},ye.useOptimistic=function(w,O){return T.H.useOptimistic(w,O)},ye.useReducer=function(w,O,X){return T.H.useReducer(w,O,X)},ye.useRef=function(w){return T.H.useRef(w)},ye.useState=function(w){return T.H.useState(w)},ye.useSyncExternalStore=function(w,O,X){return T.H.useSyncExternalStore(w,O,X)},ye.useTransition=function(){return T.H.useTransition()},ye.version="19.3.1",ye}var Vp;function ad(){return Vp||(Vp=1,Au.exports=NC()),Au.exports}var pe=ad(),Mu={exports:{}},Ir={},Nu={exports:{}},ku={};var Xp;function kC(){return Xp||(Xp=1,(function(i){function s(I,U){var Z=I.length;I.push(U);e:for(;0<Z;){var Q=Z-1>>>1,le=I[Q];if(0<u(le,U))I[Q]=U,I[Z]=le,Z=Q;else break e}}function c(I){return I.length===0?null:I[0]}function l(I){if(I.length===0)return null;var U=I[0],Z=I.pop();if(Z!==U){I[0]=Z;e:for(var Q=0,le=I.length,fe=le>>>1;Q<fe;){var F=2*(Q+1)-1,K=I[F],w=F+1,O=I[w];if(0>u(K,Z))w<le&&0>u(O,K)?(I[Q]=O,I[w]=Z,Q=w):(I[Q]=K,I[F]=Z,Q=F);else if(w<le&&0>u(O,Z))I[Q]=O,I[w]=Z,Q=w;else break e}}return U}function u(I,U){var Z=I.sortIndex-U.sortIndex;return Z!==0?Z:I.id-U.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var h=Date,p=h.now();i.unstable_now=function(){return h.now()-p}}var v=[],b=[],E=1,y=null,_=3,q=!1,B=!1,ie=!1,se=!1,be=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function re(I){for(var U=c(b);U!==null;){if(U.callback===null)l(b);else if(U.startTime<=I)l(b),U.sortIndex=U.expirationTime,s(v,U);else break;U=c(b)}}function Se(I){if(ie=!1,re(I),!B)if(c(v)!==null)B=!0,ue||(ue=!0,z());else{var U=c(b);U!==null&&Ce(Se,U.startTime-I)}}var ue=!1,L=-1,T=5,S=-1;function H(){return se?!0:!(i.unstable_now()-S<T)}function G(){if(se=!1,ue){var I=i.unstable_now();S=I;var U=!0;try{e:{B=!1,ie&&(ie=!1,V(L),L=-1),q=!0;var Z=_;try{n:{for(re(I),y=c(v);y!==null&&!(y.expirationTime>I&&H());){var Q=y.callback;if(typeof Q=="function"){y.callback=null,_=y.priorityLevel;var le=Q(y.expirationTime<=I);if(I=i.unstable_now(),typeof le=="function"){y.callback=le,re(I),U=!0;break n}y===c(v)&&l(v),re(I)}else l(v);y=c(v)}if(y!==null)U=!0;else{var fe=c(b);fe!==null&&Ce(Se,fe.startTime-I),U=!1}}break e}finally{y=null,_=Z,q=!1}U=void 0}}finally{U?z():ue=!1}}}var z;if(typeof ce=="function")z=function(){ce(G)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,we=te.port2;te.port1.onmessage=G,z=function(){we.postMessage(null)}}else z=function(){be(G,0)};function Ce(I,U){L=be(function(){I(i.unstable_now())},U)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(I){switch(_){case 1:case 2:case 3:var U=3;break;default:U=_}var Z=_;_=U;try{return I()}finally{_=Z}},i.unstable_requestPaint=function(){se=!0},i.unstable_runWithPriority=function(I,U){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=_;_=I;try{return U()}finally{_=Z}},i.unstable_scheduleCallback=function(I,U,Z){var Q=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Q+Z:Q):Z=Q,I){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Z+le,I={id:E++,callback:U,priorityLevel:I,startTime:Z,expirationTime:le,sortIndex:-1},Z>Q?(I.sortIndex=Z,s(b,I),c(v)===null&&I===c(b)&&(ie?(V(L),L=-1):ie=!0,Ce(Se,Z-Q))):(I.sortIndex=le,s(v,I),B||q||(B=!0,ue||(ue=!0,z()))),I},i.unstable_shouldYield=H,i.unstable_wrapCallback=function(I){var U=_;return function(){var Z=_;_=U;try{return I.apply(this,arguments)}finally{_=Z}}}})(ku)),ku}var Zp;function HC(){return Zp||(Zp=1,Nu.exports=kC()),Nu.exports}var Hu={exports:{}},Cn={};var Kp;function zC(){if(Kp)return Cn;Kp=1;var i=ad();function s(E){var y="https://react.dev/errors/"+E;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)y+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+E+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var l={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function p(E,y,_){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:q==null?null:q===h?h:""+q,children:E,containerInfo:y,implementation:_}}var v=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(E,y){if(E==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Cn.browser=function(E){return{$$typeof:f,_reason:E}},Cn.createPortal=function(E,y){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(s(299));return p(E,y,null,_)},Cn.flushSync=function(E){var y=v.T,_=l.p;try{if(v.T=null,l.p=2,E)return E()}finally{v.T=y,l.p=_,l.d.f()}},Cn.preconnect=function(E,y){typeof E=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,l.d.C(E,y))},Cn.prefetchDNS=function(E){typeof E=="string"&&l.d.D(E)},Cn.preinit=function(E,y){if(typeof E=="string"&&y&&typeof y.as=="string"){var _=y.as,q=b(_,y.crossOrigin),B=typeof y.integrity=="string"?y.integrity:void 0,ie=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;_==="style"?l.d.S(E,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:q,integrity:B,fetchPriority:ie}):_==="script"&&l.d.X(E,{crossOrigin:q,integrity:B,fetchPriority:ie,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Cn.preinitModule=function(E,y){if(typeof E=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var _=b(y.as,y.crossOrigin);l.d.M(E,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0})}}else y==null&&l.d.M(E)},Cn.preload=function(E,y){if(typeof E=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var _=y.as,q=b(_,y.crossOrigin);l.d.L(E,_,{crossOrigin:q,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Cn.preloadModule=function(E,y){if(typeof E=="string")if(y){var _=b(y.as,y.crossOrigin);l.d.m(E,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0})}else l.d.m(E)},Cn.requestFormReset=function(E){l.d.r(E)},Cn.unstable_batchedUpdates=function(E,y){return E(y)},Cn.useFormState=function(E,y,_){return v.H.useFormState(E,y,_)},Cn.useFormStatus=function(){return v.H.useHostTransitionStatus()},Cn.version="19.3.1",Cn}var Jp;function OC(){if(Jp)return Hu.exports;Jp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Hu.exports=zC(),Hu.exports}var $p;function DC(){if($p)return Ir;$p=1;var i=HC(),s=ad(),c=OC();function l(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,t=n;t&&!t.alternate;)n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(l(188))}function b(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(l(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return v(r),e;if(o===a)return v(r),n;o=o.sibling}throw Error(l(188))}if(t.return!==a.return)t=r,a=o;else{for(var d=!1,m=r.child;m;){if(m===t){d=!0,t=r,a=o;break}if(m===a){d=!0,a=r,t=o;break}m=m.sibling}if(!d){for(m=o.child;m;){if(m===t){d=!0,t=o,a=r;break}if(m===a){d=!0,a=o,t=r;break}m=m.sibling}if(!d)throw Error(l(189))}}if(t.alternate!==a)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:n}function E(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=E(e),n!==null)return n;e=e.sibling}return null}function y(e,n,t,a,r,o){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&t(e,a,r,o)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&y(e.child,n,t,a,r,o))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function q(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function B(e){var n=[null,null],t=_(e);return t===null||ie(n,e,t.child,{foundSelf:!1}),n}function ie(e,n,t,a){for(;t!==null;){if(t===n)a.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(a.foundSelf)return e[1]=t,!0;e[0]=t}else if((t.tag!==22||t.memoizedState===null)&&ie(e,n,t.child,a))return!0;t=t.sibling}return!1}function se(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(l(559))}}var be=null,V=null;function ce(e,n,t){return e===t?!0:e===n?(be=e,!0):!1}function re(e,n,t){return e===t?(V=e,!1):e===n?(V!==null&&(be=e),!0):!1}function Se(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ue(e,n,t){for(var a=0,r=e;r;r=t(r))a++;r=0;for(var o=n;o;o=t(o))r++;for(;0<a-r;)e=t(e),a--;for(;0<r-a;)n=t(n),r--;for(;a--;){if(e===n||n!==null&&e===n.alternate)return e;e=t(e),n=t(n)}return null}var L=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),we=Symbol.for("react.consumer"),Ce=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),F=Symbol.for("react.legacy_hidden"),K=Symbol.for("react.memo_cache_sentinel"),w=Symbol.for("react.view_transition"),O=Symbol.for("react.recoverable"),X=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case te:return"Profiler";case z:return"StrictMode";case U:return"Suspense";case Z:return"SuspenseList";case fe:return"Activity";case w:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case Ce:return e.displayName||"Context";case we:return(e._context.displayName||"Context")+".Consumer";case I:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:ee(e.type)||"Memo";case le:n=e._payload,e=e._init;try{return ee(e(n))}catch{}}return null}var me=Array.isArray,j=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Fe={pending:!1,data:null,method:null,action:null},Qe=[],Me=-1;function ve(e){return{current:e}}function ke(e){0>Me||(e.current=Qe[Me],Qe[Me]=null,Me--)}function de(e,n){Me++,Qe[Me]=e.current,e.current=n}var Ne=ve(null),Xe=ve(null),wn=ve(null),Pn=ve(null);function pt(e,n){switch(de(wn,n),de(Xe,e),de(Ne,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ep(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ep(n),e=np(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ke(Ne),de(Ne,e)}function Ze(){ke(Ne),ke(Xe),ke(wn)}function An(e){var n=e.memoizedState;n!==null&&(Gi._currentValue=n.memoizedState,de(Pn,e)),n=Ne.current;var t=np(n,e.type);n!==t&&(de(Xe,e),de(Ne,t))}function Je(e){Xe.current===e&&(ke(Ne),ke(Xe)),Pn.current===e&&(ke(Pn),Gi._currentValue=Fe)}var cn,Xn;function Zn(e){if(cn===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);cn=n&&n[1]||"",Xn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cn+e+Xn}var $a=!1;function gt(e,n){if(!e||$a)return"";$a=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(Y){var R=Y}Reflect.construct(e,[],W)}else{try{W.call()}catch(Y){R=Y}W=!1;try{var N=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),W=!0,new e}finally{W&&(N!==void 0?Object.defineProperty(e.prototype,"props",N):delete e.prototype.props)}}}else{try{throw Error()}catch(Y){R=Y}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(Y){if(Y&&R&&typeof Y.stack=="string")return[Y.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),d=o[0],m=o[1];if(d&&m){var C=d.split(`
`),A=m.split(`
`);for(r=a=0;a<C.length&&!C[a].includes("DetermineComponentFrameRoot");)a++;for(;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;if(a===C.length||r===A.length)for(a=C.length-1,r=A.length-1;1<=a&&0<=r&&C[a]!==A[r];)r--;for(;1<=a&&0<=r;a--,r--)if(C[a]!==A[r]){if(a!==1||r!==1)do if(a--,r--,0>r||C[a]!==A[r]){var k=`
`+C[a].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=a&&0<=r);break}}}finally{$a=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Zn(t):""}function Kn(e,n){switch(e.tag){case 26:case 27:case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return e.child!==n&&n!==null?Zn("Suspense Fallback"):Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 15:return gt(e.type,!1);case 11:return gt(e.type.render,!1);case 1:return gt(e.type,!0);case 31:return Zn("Activity");case 30:return Zn("ViewTransition");default:return""}}function Zt(e){try{var n="",t=null;do n+=Kn(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ei=Object.prototype.hasOwnProperty,$s=i.unstable_scheduleCallback,el=i.unstable_cancelCallback,Hv=i.unstable_shouldYield,zv=i.unstable_requestPaint,qn=i.unstable_now,Ov=i.unstable_getCurrentPriorityLevel,wd=i.unstable_ImmediatePriority,Pd=i.unstable_UserBlockingPriority,$r=i.unstable_NormalPriority,Dv=i.unstable_LowPriority,Td=i.unstable_IdlePriority,Wv=i.log,qv=i.unstable_setDisableYieldValue,Vi=null,Bn=null;function Kt(e){if(typeof Wv=="function"&&qv(e),Bn&&typeof Bn.setStrictMode=="function")try{Bn.setStrictMode(Vi,e)}catch{}}var jn=Math.clz32?Math.clz32:Gv,Bv=Math.log,jv=Math.LN2;function Gv(e){return e>>>=0,e===0?32:31-(Bv(e)/jv|0)|0}var eo=256,no=262144,to=4194304;function Ea(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ao(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~o,a!==0?r=Ea(a):(d&=m,d!==0?r=Ea(d):t||(t=m&~e,t!==0&&(r=Ea(t))))):(m=a&~o,m!==0?r=Ea(m):d!==0?r=Ea(d):t||(t=a&~e,t!==0&&(r=Ea(t)))),r===0?0:n!==0&&n!==r&&(n&o)===0&&(o=r&-r,t=n&-n,o>=t||o===32&&(t&4194048)!==0)?n:r}function Xi(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ed(e,n){(n&8)!==0&&(n|=n&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=n;0<t;){var a=31-jn(t),r=1<<a;n|=e[a],t&=~r}return n}function Iv(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _d(){var e=to;return to<<=1,(to&62914560)===0&&(to=4194304),e}function nl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Zi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lv(e,n,t,a,r,o){var d=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var m=e.entanglements,C=e.expirationTimes,A=e.hiddenUpdates;for(t=d&~t;0<t;){var k=31-jn(t),W=1<<k;m[k]=0,C[k]=-1;var R=A[k];if(R!==null)for(A[k]=null,k=0;k<R.length;k++){var N=R[k];N!==null&&(N.lane&=-536870913)}t&=~W}a!==0&&Rd(e,a,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(d&~n))}function Rd(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-jn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function xd(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-jn(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}function Ad(e,n){var t=n&-n;return t=(t&42)!==0?1:tl(t),(t&(e.suspendedLanes|n))!==0?0:t}function tl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function al(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Md(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:qp(e.type))}function Nd(e,n){var t=J.p;try{return J.p=e,n()}finally{J.p=t}}var Nt=Math.random().toString(36).slice(2),mn="__reactFiber$"+Nt,Mn="__reactProps$"+Nt,ni="__reactContainer$"+Nt,kd="__reactEvents$"+Nt,Uv="__reactListeners$"+Nt,Fv="__reactHandles$"+Nt,Hd="__reactResources$"+Nt,Ki="__reactMarker$"+Nt,io="__reactLoad$"+Nt;function ro(e){delete e[mn],delete e[Mn],delete e[Uv],delete e[Fv]}function _a(e){var n;if(n=e[mn])return n;for(var t=e.parentNode;t;){if(n=t[ni]||t[mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=bp(e);e!==null;){if(t=e[mn])return t;e=bp(e)}return n}e=t,t=e.parentNode}return null}function ti(e){if(e=e[mn]||e[ni]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ji(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(l(33))}function ai(e){var n=e[Hd];return n||(n=e[Hd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(e){e[Ki]=!0}function zd(e){e[io]=void 0}var Od=new Set,Dd={};function Ra(e,n){ii(e,n),ii(e+"Capture",n)}function ii(e,n){for(Dd[e]=n,e=0;e<n.length;e++)Od.add(n[e])}var Qv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wd={},qd={};function Yv(e){return ei.call(qd,e)?!0:ei.call(Wd,e)?!1:Qv.test(e)?qd[e]=!0:(Wd[e]=!0,!1)}var Oe=!1;function Bd(){var e=Oe;return Oe=!1,e}function oo(e,n,t){if(Yv(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,t)}}function so(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,t)}}function kt(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,a)}}function Gn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Vv(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,o=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(d){t=""+d,o.call(this,d)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(d){t=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function il(e){if(!e._valueTracker){var n=jd(e)?"checked":"value";e._valueTracker=Vv(e,n,""+e[n])}}function Gd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=jd(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}var Xv=/[\n"\\]/g;function Jn(e){return e.replace(Xv,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function rl(e,n,t,a,r,o,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Gn(n)):e.value!==""+Gn(n)&&(e.value=""+Gn(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?d==="number"&&e.value==n?ol(e,Gn(e.value)):ol(e,Gn(n)):t!=null?ol(e,Gn(t)):a!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Gn(m):e.removeAttribute("name")}function Id(e,n,t,a,r,o,d,m){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null)){il(e);return}t=t!=null?""+Gn(t):"",n=n!=null?""+Gn(n):t,m||n===e.value||(e.value=n),e.defaultValue=n}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),il(e)}function ol(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function ri(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Gn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Ld(e,n,t){if(n!=null&&(n=""+Gn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Gn(t):""}function Ud(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(l(92));if(me(a)){if(1<a.length)throw Error(l(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=Gn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),il(e)}function oi(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Zv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fd(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Zv.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Qd(e,n,t){if(n!=null&&typeof n!="object")throw Error(l(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",Oe=!0);for(var r in n)a=n[r],n.hasOwnProperty(r)&&t[r]!==a&&(Fd(e,r,a),Oe=!0)}else for(var o in n)n.hasOwnProperty(o)&&Fd(e,o,n[o])}function sl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lo(e){return Jv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function vt(){}var ll=null;function cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var si=null,li=null;function Yd(e){var n=ti(e);if(n&&(e=n.stateNode)){var t=e[Mn]||null;e:switch(e=n.stateNode,n.type){case"input":if(rl(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Jn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=a[Mn]||null;if(!r)throw Error(l(90));rl(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Gd(a)}break e;case"textarea":Ld(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&ri(e,!!t.multiple,n,!1)}}}var ul=!1;function Vd(e,n,t){if(ul)return e(n,t);ul=!0;try{var a=e(n);return a}finally{if(ul=!1,(si!==null||li!==null)&&(cs(),si&&(n=si,e=li,li=si=null,Yd(n),e)))for(n=0;n<e.length;n++)Yd(e[n])}}function $i(e,n){var t=e.stateNode;if(t===null)return null;var a=t[Mn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,n,typeof t));return t}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dl=!1;if(Ht)try{var er={};Object.defineProperty(er,"passive",{get:function(){dl=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{dl=!1}var Jt=null,fl=null,co=null;function Xd(){if(co)return co;var e,n=fl,t=n.length,a,r="value"in Jt?Jt.value:Jt.textContent,o=r.length;for(e=0;e<t&&n[e]===r[e];e++);var d=t-e;for(a=1;a<=d&&n[t-a]===r[o-a];a++);return co=r.slice(e,1<a?1-a:void 0)}function uo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fo(){return!0}function Zd(){return!1}function Tn(e){function n(t,a,r,o,d){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(t=e[m],this[m]=t?t(o):o[m]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fo:Zd,this.isPropagationStopped=Zd,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),n}var $t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ho=Tn($t),nr=L({},$t,{view:0,detail:0}),$v=Tn(nr),hl,ml,tr,mo=L({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(hl=e.screenX-tr.screenX,ml=e.screenY-tr.screenY):ml=hl=0,tr=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:ml}}),Kd=Tn(mo),eb=L({},mo,{dataTransfer:0}),nb=Tn(eb),tb=L({},nr,{relatedTarget:0}),pl=Tn(tb),ab=L({},$t,{animationName:0,elapsedTime:0,pseudoElement:0}),ib=Tn(ab),rb=L({},$t,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ob=Tn(rb),sb=L({},$t,{data:0}),Jd=Tn(sb),lb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ub={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function db(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ub[e])?!!n[e]:!1}function gl(){return db}var fb=L({},nr,{key:function(e){if(e.key){var n=lb[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gl,charCode:function(e){return e.type==="keypress"?uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hb=Tn(fb),mb=L({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=Tn(mb),pb=L({},$t,{submitter:0}),gb=Tn(pb),vb=L({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gl}),bb=Tn(vb),yb=L({},$t,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cb=Tn(yb),Sb=L({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wb=Tn(Sb),Pb=L({},$t,{newState:0,oldState:0,source:0}),Tb=Tn(Pb),Eb=[9,13,27,32],vl=Ht&&"CompositionEvent"in window,ar=null;Ht&&"documentMode"in document&&(ar=document.documentMode);var _b=Ht&&"TextEvent"in window&&!ar,ef=Ht&&(!vl||ar&&8<ar&&11>=ar),nf=" ",tf=!1;function af(e,n){switch(e){case"keyup":return Eb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ci=!1;function Rb(e,n){switch(e){case"compositionend":return rf(n);case"keypress":return n.which!==32?null:(tf=!0,nf);case"textInput":return e=n.data,e===nf&&tf?null:e;default:return null}}function xb(e,n){if(ci)return e==="compositionend"||!vl&&af(e,n)?(e=Xd(),co=fl=Jt=null,ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ef&&n.locale!=="ko"?null:n.data;default:return null}}var Ab={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function of(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ab[e.type]:n==="textarea"}function sf(e,n,t,a){si?li?li.push(a):li=[a]:si=a,n=ps(n,"onChange"),0<n.length&&(t=new ho("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var ir=null,rr=null;function Mb(e){Vm(e,0)}function po(e){var n=Ji(e);if(Gd(n))return e}function lf(e,n){if(e==="change")return n}var cf=!1;if(Ht){var bl;if(Ht){var yl="oninput"in document;if(!yl){var uf=document.createElement("div");uf.setAttribute("oninput","return;"),yl=typeof uf.oninput=="function"}bl=yl}else bl=!1;cf=bl&&(!document.documentMode||9<document.documentMode)}function df(){ir&&(ir.detachEvent("onpropertychange",ff),rr=ir=null)}function ff(e){if(e.propertyName==="value"&&po(rr)){var n=[];sf(n,rr,e,cl(e)),Vd(Mb,n)}}function Nb(e,n,t){e==="focusin"?(df(),ir=n,rr=t,ir.attachEvent("onpropertychange",ff)):e==="focusout"&&df()}function kb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return po(rr)}function Hb(e,n){if(e==="click")return po(n)}function zb(e,n){if(e==="input"||e==="change")return po(n)}function Ob(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var In=typeof Object.is=="function"?Object.is:Ob;function or(e,n){if(In(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!ei.call(n,r)||!In(e[r],n[r]))return!1}return!0}function Cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mf(e,n){var t=hf(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=hf(t)}}function pf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function gf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Cl(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Cl(e.document)}return n}function Sl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Db=Ht&&"documentMode"in document&&11>=document.documentMode,ui=null,wl=null,sr=null,Pl=!1;function vf(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pl||ui==null||ui!==Cl(a)||(a=ui,"selectionStart"in a&&Sl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),sr&&or(sr,a)||(sr=a,a=ps(wl,"onSelect"),0<a.length&&(n=new ho("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=ui)))}function xa(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var di={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},Tl={},bf={};Ht&&(bf=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function Aa(e){if(Tl[e])return Tl[e];if(!di[e])return e;var n=di[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in bf)return Tl[e]=n[t];return e}var yf=Aa("animationend"),Cf=Aa("animationiteration"),Sf=Aa("animationstart"),Wb=Aa("transitionrun"),qb=Aa("transitionstart"),Bb=Aa("transitioncancel"),wf=Aa("transitionend"),Pf=new Map,El="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");El.push("scrollEnd");function lt(e,n){Pf.set(e,n),Ra(n,[e])}var jb=0;function zt(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=ft.identifierPrefix;var t=jb++;return e="_"+e+"t_"+t.toString(32)+"_",n.autoName=e}function Tf(e){if(e==null||typeof e=="string")return e;var n=null,t=Ni;if(t!==null)for(var a=0;a<t.length;a++){var r=e[t[a]];if(r!=null){if(r==="none")return"none";n=n==null?r:n+(" "+r)}}return n??e.default}function Ot(e,n){return e=Tf(e),n=Tf(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var go=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$n=[],fi=0,_l=0;function vo(){for(var e=fi,n=_l=fi=0;n<e;){var t=$n[n];$n[n++]=null;var a=$n[n];$n[n++]=null;var r=$n[n];$n[n++]=null;var o=$n[n];if($n[n++]=null,a!==null&&r!==null){var d=a.pending;d===null?r.next=r:(r.next=d.next,d.next=r),a.pending=r}o!==0&&Ef(t,r,o)}}function bo(e,n,t,a){$n[fi++]=e,$n[fi++]=n,$n[fi++]=t,$n[fi++]=a,_l|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Rl(e,n,t,a){return bo(e,n,t,a),yo(e)}function Ma(e,n){return bo(e,null,null,n),yo(e)}function Ef(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var r=!1,o=e.return;o!==null;)o.childLanes|=t,a=o.alternate,a!==null&&(a.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&n!==null&&(r=31-jn(t),e=o.hiddenUpdates,a=e[r],a===null?e[r]=[n]:a.push(n),n.lane=t|536870912),o):null}function yo(e){if(50<Ar)throw Ar=0,ls=null,Error(l(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var hi={};function Gb(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,n,t,a){return new Gb(e,n,t,a)}function xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dt(e,n){var t=e.alternate;return t===null?(t=Nn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&1206910976,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function _f(e,n){e.flags&=1206910978;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Co(e,n,t,a,r,o){var d=0;if(a=e,typeof a=="function")xl(a)&&(d=1);else if(typeof a=="string")d=pC(e,t,Ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case fe:return e=Nn(31,t,n,r),e.elementType=fe,e.lanes=o,e;case G:return Na(t.children,r,o,n);case z:d=8,r|=24;break;case te:return e=Nn(12,t,n,r|2),e.elementType=te,e.lanes=o,e;case U:return e=Nn(13,t,n,r),e.elementType=U,e.lanes=o,e;case Z:return e=Nn(19,t,n,r),e.elementType=Z,e.lanes=o,e;case F:case w:return e=r|32,e=Nn(30,t,n,e),e.elementType=w,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Ce:d=10;break e;case we:d=9;break e;case I:d=11;break e;case Q:d=14;break e;case le:d=16,a=null;break e}d=29,t=Error(l(130,e===null?"null":typeof e,"")),a=null}return n=Nn(d,t,n,r),n.elementType=e,n.type=a,n.lanes=o,n}function Na(e,n,t,a){return e=Nn(7,e,a,n),e.lanes=t,e}function Al(e,n,t){return e=Nn(6,e,null,n),e.lanes=t,e}function Rf(e){var n=Nn(18,null,null,0);return n.stateNode=e,n}function Ml(e,n,t){return n=Nn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var xf=new WeakMap;function et(e,n){if(typeof e=="object"&&e!==null){var t=xf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Zt(n)},xf.set(e,n),n)}return{value:e,source:n,stack:Zt(n)}}var mi=[],pi=0,So=null,lr=0,nt=[],tt=0,ea=null,bt=1,yt="";function Wt(e,n){mi[pi++]=lr,mi[pi++]=So,So=e,lr=n}function Af(e,n,t){nt[tt++]=bt,nt[tt++]=yt,nt[tt++]=ea,ea=e;var a=bt;e=yt;var r=32-jn(a)-1;a&=~(1<<r),t+=1;var o=32-jn(n)+r;if(30<o){var d=r-r%5;o=(a&(1<<d)-1).toString(32),a>>=d,r-=d,bt=1<<32-jn(n)+r|t<<r|a,yt=o+e}else bt=1<<o|t<<r|a,yt=e}function wo(e){e.return!==null&&(Wt(e,1),Af(e,1,0))}function Nl(e){for(;e===So;)So=mi[--pi],mi[pi]=null,lr=mi[--pi],mi[pi]=null;for(;e===ea;)ea=nt[--tt],nt[tt]=null,yt=nt[--tt],nt[tt]=null,bt=nt[--tt],nt[tt]=null}function Mf(e,n){nt[tt++]=bt,nt[tt++]=yt,nt[tt++]=ea,bt=n.id,yt=n.overflow,ea=e}var dn=null,Ye=null,Ee=!1,na=null,at=!1,kl=Error(l(519));function ta(e){var n=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cr(et(n,e)),kl}function Nf(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[mn]=e,n[Mn]=a,t){case"dialog":Re("cancel",n),Re("close",n);break;case"iframe":case"object":case"embed":Re("load",n);break;case"video":case"audio":for(t=0;t<Nr.length;t++)Re(Nr[t],n);break;case"source":Re("error",n);break;case"img":case"image":case"link":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"input":Re("invalid",n),Id(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Re("invalid",n);break;case"textarea":Re("invalid",n),Ud(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||Jm(n.textContent,t)?(a.popover!=null&&(Re("beforetoggle",n),Re("toggle",n)),a.onScroll!=null&&Re("scroll",n),a.onScrollEnd!=null&&Re("scrollend",n),a.onClick!=null&&(n.onclick=vt),n=!0):n=!1,n||ta(e,!0)}function Po(e){for(dn=e.return;dn;)switch(dn.tag){case 5:case 31:case 13:at=!1;return;case 27:case 3:at=!0;return;default:dn=dn.return}}function gi(e){if(e!==dn)return!1;if(!Ee)return Po(e),Ee=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||lu(e.type,e.memoizedProps)),t=!t),t&&Ye&&ta(e),Po(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ye=vp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ye=vp(e)}else n===27?(n=Ye,ba(e.type)?(e=vu,vu=null,Ye=e):Ye=n):Ye=dn?rt(e.stateNode.nextSibling):null;return!0}function ka(){Ye=dn=null,Ee=!1}function Hl(){var e=na;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),na=null),e}function cr(e){na===null?na=[e]:na.push(e)}var zl=ve(null),Ha=null,qt=null;function aa(e,n,t){de(zl,n._currentValue),n._currentValue=t}function Bt(e){e._currentValue=zl.current,ke(zl)}function To(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Ol(e,n,t,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var d=r.child;o=o.firstContext;e:for(;o!==null;){var m=o;o=r;for(var C=0;C<n.length;C++)if(m.context===n[C]){o.lanes|=t,m=o.alternate,m!==null&&(m.lanes|=t),To(o.return,t,e),a||(d=null);break e}o=m.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(l(341));d.lanes|=t,o=d.alternate,o!==null&&(o.lanes|=t),To(d,t,e),d=null}else r.tag===13&&r.memoizedState!==null&&r.memoizedState.dehydrated===null?(r.lanes|=t,d=r.alternate,d!==null&&(d.lanes|=t),To(r.return,t,e),d=r.child,d=d!==null?d.sibling:null):d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function za(e,n,t,a){e=null;for(var r=n,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(l(387));if(d=d.memoizedProps,d!==null){var m=r.type;In(r.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(r===Pn.current){if(d=r.alternate,d===null)throw Error(l(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Gi):e=[Gi])}r=r.return}return e!==null&&Ol(n,e,t,a),n.flags|=262144,e!==null}function Eo(e){for(e=e.firstContext;e!==null;){if(!In(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oa(e){Ha=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pn(e){return kf(Ha,e)}function _o(e,n){return Ha===null&&Oa(e),kf(e,n)}function kf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},qt===null){if(e===null)throw Error(l(308));qt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else qt=qt.next=n;return t}var Ib=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Lb=i.unstable_scheduleCallback,Ub=i.unstable_NormalPriority,an={$$typeof:Ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dl(){return{controller:new Ib,data:new Map,refCount:0}}function ur(e){e.refCount--,e.refCount===0&&Lb(Ub,function(){e.controller.abort()})}function Hf(e,n){if((e.pendingLanes&4194048)!==0){var t=e.transitionTypes;for(t===null&&(t=e.transitionTypes=[]),e=0;e<n.length;e++){var a=n[e];t.indexOf(a)===-1&&t.push(a)}}}var dr=null;function Fb(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var fr=null,Wl=0,Da=0,vi=null;function Qb(e,n){if(fr===null){var t=fr=[];Wl=0,Da=$c(),vi={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Wl++,n.then(zf,zf),n}function zf(){if(--Wl===0&&(dr=null,fr!==null)){vi!==null&&(vi.status="fulfilled");var e=fr;fr=null,Da=0,vi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Yb(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var r=0;r<t.length;r++)(0,t[r])(n)},function(r){for(a.status="rejected",a.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),a}var Of=j.S;j.S=function(e,n){if(Rm=qn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qb(e,n),dr!==null)for(var t=Oi;t!==null;)Hf(t,dr),t=t.next;if(t=e.types,t!==null){for(var a=Oi;a!==null;)Hf(a,t),a=a.next;if(Da!==0){a=dr,a===null&&(a=dr=[]);for(var r=0;r<t.length;r++){var o=t[r];a.indexOf(o)===-1&&a.push(o)}}}Of!==null&&Of(e,n)};var Wa=ve(null);function ql(){var e=Wa.current;return e!==null?e:Ue.pooledCache}function Ro(e,n){n===null?de(Wa,Wa.current):de(Wa,n.pool)}function Df(){var e=ql();return e===null?null:{parent:an._currentValue,pool:e}}var bi=Error(l(460)),Bl=Error(l(474)),xo=Error(l(542)),Ao={then:function(){}};function Wf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qf(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(vt,vt),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jf(e),e===void 0&&!("reason"in n)?Error(l(600)):e;default:if(typeof n.status=="string")n.then(vt,vt);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=a}},function(a){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jf(e),e}throw Ba=n,bi}}function qa(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Ba=t,bi):t}}var Ba=null;function Bf(){if(Ba===null)throw Error(l(459));var e=Ba;return Ba=null,e}function jf(e){if(e===bi||e===xo)throw Error(l(483))}var yi=null,hr=0;function Mo(e){var n=hr;return hr+=1,yi===null&&(yi=[]),qf(yi,e,n)}function ia(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function No(e,n){throw n.$$typeof===T?Error(l(525)):(e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Gf(e){function n(x,P){if(e){var M=x.deletions;M===null?(x.deletions=[P],x.flags|=16):M.push(P)}}function t(x,P){if(!e)return null;for(;P!==null;)n(x,P),P=P.sibling;return null}function a(x){for(var P=new Map;x!==null;)x.key===null?P.set(x.index,x):P.set(x.key,x),x=x.sibling;return P}function r(x,P){return x=Dt(x,P),x.index=0,x.sibling=null,x}function o(x,P,M){return x.index=M,e?(M=x.alternate,M!==null?(M=M.index,M<P?(x.flags|=2,P):M):(x.flags|=134217730,P)):(x.flags|=1048576,P)}function d(x){return e&&x.alternate===null&&(x.flags|=134217730),x}function m(x,P,M,D){return P===null||P.tag!==6?(P=Al(M,x.mode,D),P.return=x,P):(P=r(P,M),P.return=x,P)}function C(x,P,M,D){var ne=M.type;return ne===G?(x=k(x,P,M.props.children,D,M.key),ia(x,M),x):P!==null&&(P.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===le&&qa(ne)===P.type)?(P=r(P,M.props),ia(P,M),P.return=x,P):(P=Co(M.type,M.key,M.props,null,x.mode,D),ia(P,M),P.return=x,P)}function A(x,P,M,D){return P===null||P.tag!==4||P.stateNode.containerInfo!==M.containerInfo||P.stateNode.implementation!==M.implementation?(P=Ml(M,x.mode,D),P.return=x,P):(P=r(P,M.children||[]),P.return=x,P)}function k(x,P,M,D,ne){return P===null||P.tag!==7?(P=Na(M,x.mode,D,ne),P.return=x,P):(P=r(P,M),P.return=x,P)}function W(x,P,M){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Al(""+P,x.mode,M),P.return=x,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return M=Co(P.type,P.key,P.props,null,x.mode,M),ia(M,P),M.return=x,M;case H:return P=Ml(P,x.mode,M),P.return=x,P;case le:return P=qa(P),W(x,P,M)}if(me(P)||ae(P))return P=Na(P,x.mode,M,null),P.return=x,P;if(typeof P.then=="function")return W(x,Mo(P),M);if(P.$$typeof===Ce)return W(x,_o(x,P),M);No(x,P)}return null}function R(x,P,M,D){var ne=P!==null?P.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return ne!==null?null:m(x,P,""+M,D);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return M.key===ne?C(x,P,M,D):null;case H:return M.key===ne?A(x,P,M,D):null;case le:return M=qa(M),R(x,P,M,D)}if(me(M)||ae(M))return ne!==null?null:k(x,P,M,D,null);if(typeof M.then=="function")return R(x,P,Mo(M),D);if(M.$$typeof===Ce)return R(x,P,_o(x,M),D);No(x,M)}return null}function N(x,P,M,D,ne){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return x=x.get(M)||null,m(P,x,""+D,ne);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case S:return x=x.get(D.key===null?M:D.key)||null,C(P,x,D,ne);case H:return x=x.get(D.key===null?M:D.key)||null,A(P,x,D,ne);case le:return D=qa(D),N(x,P,M,D,ne)}if(me(D)||ae(D))return x=x.get(M)||null,k(P,x,D,ne,null);if(typeof D.then=="function")return N(x,P,M,Mo(D),ne);if(D.$$typeof===Ce)return N(x,P,M,_o(P,D),ne);No(P,D)}return null}function Y(x,P,M,D){for(var ne=null,Ae=null,he=P,ge=P=0,sn=null;he!==null&&ge<M.length;ge++){he.index>ge?(sn=he,he=null):sn=he.sibling;var He=R(x,he,M[ge],D);if(He===null){he===null&&(he=sn);break}e&&he&&He.alternate===null&&n(x,he),P=o(He,P,ge),Ae===null?ne=He:Ae.sibling=He,Ae=He,he=sn}if(ge===M.length)return t(x,he),Ee&&Wt(x,ge),ne;if(he===null){for(;ge<M.length;ge++)he=W(x,M[ge],D),he!==null&&(P=o(he,P,ge),Ae===null?ne=he:Ae.sibling=he,Ae=he);return Ee&&Wt(x,ge),ne}for(he=a(he);ge<M.length;ge++)sn=N(he,x,ge,M[ge],D),sn!==null&&(e&&(He=sn.alternate,He!==null&&he.delete(He.key===null?ge:He.key)),P=o(sn,P,ge),Ae===null?ne=sn:Ae.sibling=sn,Ae=sn);return e&&he.forEach(function(Pa){return n(x,Pa)}),Ee&&Wt(x,ge),ne}function oe(x,P,M,D){if(M==null)throw Error(l(151));for(var ne=null,Ae=null,he=P,ge=P=0,sn=null,He=M.next();he!==null&&!He.done;ge++,He=M.next()){he.index>ge?(sn=he,he=null):sn=he.sibling;var Pa=R(x,he,He.value,D);if(Pa===null){he===null&&(he=sn);break}e&&he&&Pa.alternate===null&&n(x,he),P=o(Pa,P,ge),Ae===null?ne=Pa:Ae.sibling=Pa,Ae=Pa,he=sn}if(He.done)return t(x,he),Ee&&Wt(x,ge),ne;if(he===null){for(;!He.done;ge++,He=M.next())He=W(x,He.value,D),He!==null&&(P=o(He,P,ge),Ae===null?ne=He:Ae.sibling=He,Ae=He);return Ee&&Wt(x,ge),ne}for(he=a(he);!He.done;ge++,He=M.next())He=N(he,x,ge,He.value,D),He!==null&&(e&&(sn=He.alternate,sn!==null&&he.delete(sn.key===null?ge:sn.key)),P=o(He,P,ge),Ae===null?ne=He:Ae.sibling=He,Ae=He);return e&&he.forEach(function(RC){return n(x,RC)}),Ee&&Wt(x,ge),ne}function Te(x,P,M,D){if(typeof M=="object"&&M!==null&&M.type===G&&M.key===null&&M.props.ref===void 0&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case S:e:{for(var ne=M.key;P!==null;){if(P.key===ne){if(ne=M.type,ne===G){if(P.tag===7){t(x,P.sibling),D=r(P,M.props.children),ia(D,M),D.return=x,x=D;break e}}else if(P.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===le&&qa(ne)===P.type){t(x,P.sibling),D=r(P,M.props),ia(D,M),D.return=x,x=D;break e}t(x,P);break}else n(x,P);P=P.sibling}M.type===G?(D=Na(M.props.children,x.mode,D,M.key),ia(D,M),D.return=x,x=D):(D=Co(M.type,M.key,M.props,null,x.mode,D),ia(D,M),D.return=x,x=D)}return d(x);case H:e:{for(ne=M.key;P!==null;){if(P.key===ne)if(P.tag===4&&P.stateNode.containerInfo===M.containerInfo&&P.stateNode.implementation===M.implementation){t(x,P.sibling),D=r(P,M.children||[]),D.return=x,x=D;break e}else{t(x,P);break}else n(x,P);P=P.sibling}D=Ml(M,x.mode,D),D.return=x,x=D}return d(x);case le:return M=qa(M),Te(x,P,M,D)}if(me(M))return Y(x,P,M,D);if(ae(M)){if(ne=ae(M),typeof ne!="function")throw Error(l(150));return M=ne.call(M),oe(x,P,M,D)}if(typeof M.then=="function")return Te(x,P,Mo(M),D);if(M.$$typeof===Ce)return Te(x,P,_o(x,M),D);No(x,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,P!==null&&P.tag===6?(t(x,P.sibling),D=r(P,M),D.return=x,x=D):(t(x,P),D=Al(M,x.mode,D),D.return=x,x=D),d(x)):t(x,P)}return function(x,P,M,D){try{hr=0;var ne=Te(x,P,M,D);return yi=null,ne}catch(he){if(he===bi||he===xo)throw he;var Ae=Nn(29,he,null,x.mode);return Ae.lanes=D,Ae.return=x,Ae}}}var ja=Gf(!0),If=Gf(!1),ra=!1;function jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(De&2)!==0){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,n=yo(e),Ef(e,null,t),n}return bo(e,a,n,t),yo(e)}function mr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,xd(e,t)}}function Il(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var d={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?r=o=d:o=o.next=d,t=t.next}while(t!==null);o===null?r=o=n:o=o.next=n}else r=o=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Ll=!1;function pr(){if(Ll){var e=vi;if(e!==null)throw e}}function gr(e,n,t,a){Ll=!1;var r=e.updateQueue;ra=!1;var o=r.firstBaseUpdate,d=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var C=m,A=C.next;C.next=null,d===null?o=A:d.next=A,d=C;var k=e.alternate;k!==null&&(k=k.updateQueue,m=k.lastBaseUpdate,m!==d&&(m===null?k.firstBaseUpdate=A:m.next=A,k.lastBaseUpdate=C))}if(o!==null){var W=r.baseState;d=0,k=A=C=null,m=o;do{var R=m.lane&-536870913,N=R!==m.lane;if(N?(xe&R)===R:(a&R)===R){R!==0&&R===Da&&(Ll=!0),k!==null&&(k=k.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Y=e,oe=m;R=n;var Te=t;switch(oe.tag){case 1:if(Y=oe.payload,typeof Y=="function"){W=Y.call(Te,W,R);break e}W=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=oe.payload,R=typeof Y=="function"?Y.call(Te,W,R):Y,R==null)break e;W=L({},W,R);break e;case 2:ra=!0}}R=m.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=r.callbacks,N===null?r.callbacks=[R]:N.push(R))}else N={lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},k===null?(A=k=N,C=W):k=k.next=N,d|=R;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;N=m,m=N.next,N.next=null,r.lastBaseUpdate=N,r.shared.pending=null}}while(!0);k===null&&(C=W),r.baseState=C,r.firstBaseUpdate=A,r.lastBaseUpdate=k,o===null&&(r.shared.lanes=0),ma|=d,e.lanes=d,e.memoizedState=W}}function Lf(e,n){if(typeof e!="function")throw Error(l(191,e));e.call(n)}function Uf(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Lf(t[e],n)}var la=ve(null),ko=ve(0);function Ff(e,n){e=Ut,de(ko,e),de(la,n),Ut=e|n.baseLanes}function Ul(){de(ko,Ut),de(la,la.current)}function Fl(){Ut=ko.current,ke(la),ke(ko)}var gn=ve(null),Sn=null;function ca(e){var n=e.alternate;de(vn,vn.current&1),de(gn,e),Sn===null&&(n===null||la.current!==null||n.memoizedState!==null)&&(Sn=e)}function Ql(e){de(vn,vn.current),de(gn,e),Sn===null&&(Sn=e)}function Qf(e){e.tag===22?(de(vn,vn.current),de(gn,e),Sn===null&&(Sn=e)):ua()}function ua(){de(vn,vn.current),de(gn,gn.current)}function Ln(e){ke(gn),Sn===e&&(Sn=null),ke(vn)}var vn=ve(0);function vr(e,n){de(gn,gn.current),de(vn,n)}function Yl(e){ke(vn),ke(gn),Sn===e&&(Sn=null)}function Ho(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||pu(t)||gu(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var jt=0,Pe=null,Le=null,rn=null,zo=!1,Ci=!1,Ga=!1,Oo=0,br=0,Si=null,Vb=0;function en(){throw Error(l(321))}function Vl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!In(e[t],n[t]))return!1;return!0}function Xl(e,n,t,a,r,o){return jt=o,Pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,j.H=e===null||e.memoizedState===null?Ah:Mh,Ga=!1,o=t(a,r),Ga=!1,Ci&&(o=Vf(n,t,a,r)),Yf(e),o}function Yf(e){j.H=Io;var n=Le!==null&&Le.next!==null;if(jt=0,rn=Le=Pe=null,zo=!1,br=0,Si=null,n)throw Error(l(300));e===null||on||(e=e.dependencies,e!==null&&Eo(e)&&(on=!0))}function Vf(e,n,t,a){Pe=e;var r=0;do{if(Ci&&(Si=null),br=0,Ci=!1,25<=r)throw Error(l(301));if(r+=1,rn=Le=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=ty,o=n(t,a)}while(Ci);return o}function Xb(){var e=j.H,n=e.useState()[0];return n=typeof n.then=="function"?yr(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(Pe.flags|=1024),n}function Zl(){var e=Oo!==0;return Oo=0,e}function Kl(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Jl(e){if(zo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}zo=!1}jt=0,rn=Le=Pe=null,Ci=!1,br=Oo=0,Si=null}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Pe.memoizedState=rn=e:rn=rn.next=e,rn}function tn(){if(Le===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=rn===null?Pe.memoizedState:rn.next;if(n!==null)rn=n,Le=e;else{if(e===null)throw Pe.alternate===null?Error(l(467)):Error(l(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},rn===null?Pe.memoizedState=rn=e:rn=rn.next=e}return rn}function Do(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yr(e){var n=br;return br+=1,Si===null&&(Si=[]),e=qf(Si,e,n),n=Pe,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,j.H=n===null||n.memoizedState===null?Ah:Mh),e}function Wo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yr(e);if(e.$$typeof===O)return;if(e.$$typeof===Ce)return pn(e)}throw Error(l(438,String(e)))}function $l(e){var n=null,t=Pe.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=Pe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Do(),Pe.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=K;return n.index++,t}function Gt(e,n){return typeof n=="function"?n(e):n}function qo(e){var n=tn();return ec(n,Le,e)}function ec(e,n,t){var a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=t;var r=e.baseQueue,o=a.pending;if(o!==null){if(r!==null){var d=r.next;r.next=o.next,o.next=d}n.baseQueue=r=o,a.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{n=r.next;var m=d=null,C=null,A=n,k=!1;do{var W=A.lane&-536870913;if(W!==A.lane?(xe&W)===W:(jt&W)===W){var R=A.revertLane;if(R===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),W===Da&&(k=!0);else if((jt&R)===R){A=A.next,R===Da&&(k=!0);continue}else W={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},C===null?(m=C=W,d=o):C=C.next=W,Pe.lanes|=R,ma|=R;W=A.action,Ga&&t(o,W),o=A.hasEagerState?A.eagerState:t(o,W)}else R={lane:W,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},C===null?(m=C=R,d=o):C=C.next=R,Pe.lanes|=W,ma|=W;A=A.next}while(A!==null&&A!==n);if(C===null?d=o:C.next=m,!In(o,e.memoizedState)&&(on=!0,k&&(t=vi,t!==null)))throw t;e.memoizedState=o,e.baseState=d,e.baseQueue=C,a.lastRenderedState=o}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function nc(e){var n=tn(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,o=n.memoizedState;if(r!==null){t.pending=null;var d=r=r.next;do o=e(o,d.action),d=d.next;while(d!==r);In(o,n.memoizedState)||(on=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,a]}function Xf(e,n,t){var a=Pe,r=tn(),o=Ee;if(o){if(t===void 0)throw Error(l(407));t=t()}else t=n();var d=!In((Le||r).memoizedState,t);if(d&&(r.memoizedState=t,on=!0),r=r.queue,ic(Jf.bind(null,a,r,e),[e]),e=r.getSnapshot!==n||d||rn!==null&&(rn.memoizedState.tag&1)!==0,wi(e?9:8,{destroy:void 0},Kf.bind(null,a,r,t,n),null),e){if(a.flags|=2048,Ue===null)throw Error(l(349));o||(jt&127)!==0||Zf(a,n,t)}return t}function Zf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Pe.updateQueue,n===null?(n=Do(),Pe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Kf(e,n,t,a){n.value=t,n.getSnapshot=a,$f(n)&&eh(e)}function Jf(e,n,t){return t(function(){$f(n)&&eh(e)})}function $f(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!In(e,t)}catch{return!0}}function eh(e){var n=Ma(e,2);n!==null&&On(n,e,2)}function tc(e){var n=En();if(typeof e=="function"){var t=e;if(e=t(),Ga){Kt(!0);try{t()}finally{Kt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},n}function nh(e,n,t,a){return e.baseState=t,ec(e,Le,typeof a=="function"?a:Gt)}function Zb(e,n,t,a,r){if(Go(e))throw Error(l(485));if(e=n.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){o.listeners.push(d)}};j.T!==null?t(!0):o.isTransition=!1,a(o),t=n.pending,t===null?(o.next=n.pending=o,th(n,o)):(o.next=t.next,n.pending=t.next=o)}}function th(e,n){var t=n.action,a=n.payload,r=e.state;if(n.isTransition){var o=j.T,d={};d.types=o!==null?o.types:null,j.T=d;try{var m=t(r,a),C=j.S;C!==null&&C(d,m),ah(e,n,m)}catch(A){ac(e,n,A)}finally{o!==null&&d.types!==null&&(o.types=d.types),j.T=o}}else try{o=t(r,a),ah(e,n,o)}catch(A){ac(e,n,A)}}function ah(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){ih(e,n,a)},function(a){return ac(e,n,a)}):ih(e,n,t)}function ih(e,n,t){n.status="fulfilled",n.value=t,rh(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,th(e,t)))}function ac(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,rh(n),n=n.next;while(n!==a)}e.action=null}function rh(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function oh(e,n){return n}function sh(e,n){if(Ee){var t=Ue.formState;if(t!==null){e:{var a=Pe;if(Ee){if(Ye){n:{for(var r=Ye,o=at;r.nodeType!==8;){if(!o){r=null;break n}if(r=rt(r.nextSibling),r===null){r=null;break n}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){Ye=rt(r.nextSibling),a=r.data==="F!";break e}}ta(a)}a=!1}a&&(n=t[0])}}return t=En(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oh,lastRenderedState:n},t.queue=a,t=_h.bind(null,Pe,a),a.dispatch=t,a=tc(!1),o=cc.bind(null,Pe,!1,a.queue),a=En(),r={state:n,dispatch:null,action:e,pending:null},a.queue=r,t=Zb.bind(null,Pe,r,o,t),r.dispatch=t,a.memoizedState=e,[n,t,!1]}function lh(e){var n=tn();return ch(n,Le,e)}function ch(e,n,t){if(n=ec(e,n,oh)[0],e=qo(Gt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=yr(n)}catch(d){throw d===bi?xo:d}else a=n;n=tn();var r=n.queue,o=r.dispatch;return t!==n.memoizedState&&(Pe.flags|=2048,wi(9,{destroy:void 0},Kb.bind(null,r,t),null)),[a,o,e]}function Kb(e,n){e.action=n}function uh(e){var n=tn(),t=Le;if(t!==null)return ch(n,t,e);tn(),n=n.memoizedState,t=tn();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function wi(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=Pe.updateQueue,n===null&&(n=Do(),Pe.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function dh(){return tn().memoizedState}function Bo(e,n,t,a){var r=En();Pe.flags|=e,r.memoizedState=wi(1|n,{destroy:void 0},t,a===void 0?null:a)}function jo(e,n,t,a){var r=tn();a=a===void 0?null:a;var o=r.memoizedState.inst;Le!==null&&a!==null&&Vl(a,Le.memoizedState.deps)?r.memoizedState=wi(n,o,t,a):(Pe.flags|=e,r.memoizedState=wi(1|n,o,t,a))}function fh(e,n){Bo(8390656,8,e,n)}function ic(e,n){jo(2048,8,e,n)}function Jb(e){Pe.flags|=4;var n=Pe.updateQueue;if(n===null)n=Do(),Pe.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function hh(e){var n=tn().memoizedState;return Jb({ref:n,nextImpl:e}),function(){if((De&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}function mh(e,n){return jo(4,2,e,n)}function ph(e,n){return jo(4,4,e,n)}function gh(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vh(e,n,t){t=t!=null?t.concat([e]):null,jo(4,4,gh.bind(null,n,e),t)}function rc(){}function bh(e,n){var t=tn();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&Vl(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function yh(e,n){var t=tn();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&Vl(n,a[1]))return a[0];if(a=e(),Ga){Kt(!0);try{e()}finally{Kt(!1)}}return t.memoizedState=[a,n],a}function oc(e,n,t){return t===void 0||(jt&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Am(),Pe.lanes|=e,ma|=e,t)}function Ch(e,n,t,a){return In(t,n)?t:la.current!==null?(e=oc(e,t,a),In(e,n)||(on=!0),e):(jt&106)===0||(jt&1073741824)!==0&&(xe&261930)===0?(on=!0,e.memoizedState=t):(e=Am(),Pe.lanes|=e,ma|=e,n)}function Sh(e,n,t,a,r){var o=J.p;J.p=o!==0&&8>o?o:8;var d=j.T,m={};m.types=d!==null?d.types:null,j.T=m,cc(e,!1,n,t);try{var C=r(),A=j.S;if(A!==null&&A(m,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var k=Yb(C,a);Cr(e,n,k,Yn(e))}else Cr(e,n,a,Yn(e))}catch(W){Cr(e,n,{then:function(){},status:"rejected",reason:W},Yn())}finally{J.p=o,d!==null&&m.types!==null&&(d.types=m.types),j.T=d}}function $b(){}function sc(e,n,t,a){if(e.tag!==5)throw Error(l(476));var r=wh(e).queue;Sh(e,r,n,Fe,t===null?$b:function(){return Ph(e),t(a)})}function wh(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Fe,baseState:Fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:Fe},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ph(e){var n=wh(e);n.next===null&&(n=e.alternate.memoizedState),Cr(e,n.next.queue,{},Yn())}function lc(){return pn(Gi)}function Th(){return tn().memoizedState}function Eh(){return tn().memoizedState}function ey(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Yn();e=oa(t);var a=sa(n,e,t);a!==null&&(On(a,n,t),mr(a,n,t)),n={cache:Dl()},e.payload=n;return}n=n.return}}function ny(e,n,t){var a=Yn();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Go(e)?Rh(n,t):(t=Rl(e,n,t,a),t!==null&&(On(t,e,a),xh(t,n,a)))}function _h(e,n,t){var a=Yn();Cr(e,n,t,a)}function Cr(e,n,t,a){var r={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Go(e))Rh(n,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var d=n.lastRenderedState,m=o(d,t);if(r.hasEagerState=!0,r.eagerState=m,In(m,d))return bo(e,n,r,0),Ue===null&&vo(),!1}catch{}if(t=Rl(e,n,r,a),t!==null)return On(t,e,a),xh(t,n,a),!0}return!1}function cc(e,n,t,a){if(a={lane:2,revertLane:$c(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Go(e)){if(n)throw Error(l(479))}else n=Rl(e,t,a,2),n!==null&&On(n,e,2)}function Go(e){var n=e.alternate;return e===Pe||n!==null&&n===Pe}function Rh(e,n){Ci=zo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function xh(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,xd(e,t)}}var Io={readContext:pn,use:Wo,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en,useEffectEvent:en},Ah={readContext:pn,use:Wo,useCallback:function(e,n){return En().memoizedState=[e,n===void 0?null:n],e},useContext:pn,useEffect:fh,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Bo(4194308,4,gh.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Bo(4194308,4,e,n)},useInsertionEffect:function(e,n){Bo(4,2,e,n)},useMemo:function(e,n){var t=En();n=n===void 0?null:n;var a=e();if(Ga){Kt(!0);try{e()}finally{Kt(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=En();if(t!==void 0){var r=t(n);if(Ga){Kt(!0);try{t(n)}finally{Kt(!1)}}}else r=n;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=ny.bind(null,Pe,e),[a.memoizedState,e]},useRef:function(e){var n=En();return e={current:e},n.memoizedState=e},useState:function(e){e=tc(e);var n=e.queue,t=_h.bind(null,Pe,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:rc,useDeferredValue:function(e,n){var t=En();return oc(t,e,n)},useTransition:function(){var e=tc(!1);return e=Sh.bind(null,Pe,e.queue,!0,!1),En().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=Pe,r=En();if(Ee){if(t===void 0)throw Error(l(407));t=t()}else{if(t=n(),Ue===null)throw Error(l(349));(xe&127)!==0||Zf(a,n,t)}r.memoizedState=t;var o={value:t,getSnapshot:n};return r.queue=o,fh(Jf.bind(null,a,o,e),[e]),a.flags|=2048,wi(9,{destroy:void 0},Kf.bind(null,a,o,t,n),null),t},useId:function(){var e=En(),n=Ue.identifierPrefix;if(Ee){var t=yt,a=bt;t=(a&~(1<<32-jn(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Oo++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=Vb++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:lc,useFormState:sh,useActionState:sh,useOptimistic:function(e){var n=En();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=cc.bind(null,Pe,!0,t),t.dispatch=n,[e,n]},useMemoCache:$l,useCacheRefresh:function(){return En().memoizedState=ey.bind(null,Pe)},useEffectEvent:function(e){var n=En(),t={impl:e};return n.memoizedState=t,function(){if((De&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}},Mh={readContext:pn,use:Wo,useCallback:bh,useContext:pn,useEffect:ic,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:ph,useMemo:yh,useReducer:qo,useRef:dh,useState:function(){return qo(Gt)},useDebugValue:rc,useDeferredValue:function(e,n){var t=tn();return Ch(t,Le.memoizedState,e,n)},useTransition:function(){var e=qo(Gt)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:yr(e),n]},useSyncExternalStore:Xf,useId:Th,useHostTransitionStatus:lc,useFormState:lh,useActionState:lh,useOptimistic:function(e,n){var t=tn();return nh(t,Le,e,n)},useMemoCache:$l,useCacheRefresh:Eh,useEffectEvent:hh},ty={readContext:pn,use:Wo,useCallback:bh,useContext:pn,useEffect:ic,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:ph,useMemo:yh,useReducer:nc,useRef:dh,useState:function(){return nc(Gt)},useDebugValue:rc,useDeferredValue:function(e,n){var t=tn();return Le===null?oc(t,e,n):Ch(t,Le.memoizedState,e,n)},useTransition:function(){var e=nc(Gt)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:yr(e),n]},useSyncExternalStore:Xf,useId:Th,useHostTransitionStatus:lc,useFormState:uh,useActionState:uh,useOptimistic:function(e,n){var t=tn();return Le!==null?nh(t,Le,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:$l,useCacheRefresh:Eh,useEffectEvent:hh};function uc(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:L({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var dc={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Yn(),r=oa(a);r.payload=n,t!=null&&(r.callback=t),n=sa(e,r,a),n!==null&&(On(n,e,a),mr(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Yn(),r=oa(a);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=sa(e,r,a),n!==null&&(On(n,e,a),mr(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Yn(),a=oa(t);a.tag=2,n!=null&&(a.callback=n),n=sa(e,a,t),n!==null&&(On(n,e,t),mr(n,e,t))}};function Nh(e,n,t,a,r,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,d):n.prototype&&n.prototype.isPureReactComponent?!or(t,a)||!or(r,o):!0}function kh(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&dc.enqueueReplaceState(n,n.state,null)}function Ia(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=L({},t));for(var r in e)t[r]===void 0&&(t[r]=e[r])}return t}function Hh(e){go(e)}function zh(e){console.error(e)}function Oh(e){go(e)}function Lo(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Dh(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function fc(e,n,t){return t=oa(t),t.tag=3,t.payload={element:null},t.callback=function(){Lo(e,n)},t}function Wh(e){return e=oa(e),e.tag=3,e}function qh(e,n,t,a){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var o=a.value;e.payload=function(){return r(o)},e.callback=function(){Dh(n,t,a)}}var d=t.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Dh(n,t,a),typeof r!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function ay(e,n,t,a,r){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&za(n,t,r,!0),t=gn.current,t!==null){switch(t.tag){case 31:case 13:case 19:return Sn===null?us():t.alternate===null&&nn===0&&(nn=3),t.flags&=-257,t.flags|=65536,t.lanes=r,a===Ao?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Zc(e,a,r)),!1;case 22:return t.flags|=65536,a===Ao?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Zc(e,a,r)),!1}throw Error(l(435,t.tag))}return Zc(e,a,r),us(),!1}if(Ee)return n=gn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,a!==kl&&(e=Error(l(422),{cause:a}),cr(et(e,t)))):(a!==kl&&(n=Error(l(423),{cause:a}),cr(et(n,t))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=et(a,t),r=fc(e.stateNode,a,r),Il(e,r),nn!==4&&(nn=2)),!1;var o=Error(l(520),{cause:a});if(o=et(o,t),xr===null?xr=[o]:xr.push(o),nn!==4&&(nn=2),n===null)return!0;a=et(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=r&-r,t.lanes|=e,e=fc(t.stateNode,a,e),Il(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(pa===null||!pa.has(o))))return t.flags|=65536,r&=-r,t.lanes|=r,r=Wh(r),qh(r,e,t,a),Il(t,r),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var hc=Error(l(461)),on=!1;function ln(e,n,t,a){n.child=e===null?If(n,null,t,a):ja(n,e.child,t,a)}function Bh(e,n,t,a,r){t=t.render;var o=n.ref;if("ref"in a){var d={};for(var m in a)m!=="ref"&&(d[m]=a[m])}else d=a;return Oa(n),a=Xl(e,n,t,d,o,r),m=Zl(),e!==null&&!on?(Kl(e,n,r),It(e,n,r)):(Ee&&m&&wo(n),n.flags|=1,ln(e,n,a,r),n.child)}function jh(e,n,t,a,r){if(e===null){var o=t.type;return typeof o=="function"&&!xl(o)&&o.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=o,Gh(e,n,o,a,r)):(e=Co(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!Sc(e,r)){var d=o.memoizedProps;if(t=t.compare,t=t!==null?t:or,t(d,a)&&e.ref===n.ref)return It(e,n,r)}return n.flags|=1,e=Dt(o,a),e.ref=n.ref,e.return=n,n.child=e}function Gh(e,n,t,a,r){if(e!==null){var o=e.memoizedProps;if(or(o,a)&&e.ref===n.ref)if(on=!1,n.pendingProps=a=o,Sc(e,r))(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,It(e,n,r)}return mc(e,n,t,a,r)}function Ih(e,n,t,a){var r=a.children,o=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(a=n.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~o}else a=0,n.child=null;return Lh(e,n,o,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ro(n,o!==null?o.cachePool:null),o!==null?Ff(n,o):Ul(),Qf(n);else return a=n.lanes=536870912,Lh(e,n,o!==null?o.baseLanes|t:t,t,a)}else o!==null?(Ro(n,o.cachePool),Ff(n,o),ua(),n.memoizedState=null):(e!==null&&Ro(n,null),Ul(),ua());return ln(e,n,r,t),n.child}function Sr(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Lh(e,n,t,a,r){var o=ql();return o=o===null?null:{parent:an._currentValue,pool:o},n.memoizedState={baseLanes:t,cachePool:o},e!==null&&Ro(n,null),Ul(),Qf(n),e!==null&&za(e,n,a,!0),n.childLanes=r,null}function Uo(e,n){return n=Fo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Uh(e,n,t){return ja(n,e.child,null,t),e=Uo(n,n.pendingProps),e.flags|=2,Ln(n),n.memoizedState=null,e}function iy(e,n,t){var a=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(a.mode==="hidden")return e=Uo(n,a),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Sr(null,e);if(Ql(n),(e=Ye)?(e=gp(e,at),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ea!==null?{id:bt,overflow:yt}:null,retryLane:536870912,hydrationErrors:null},t=Rf(e),t.return=n,n.child=t,dn=n,Ye=null)):e=null,e===null)throw ta(n);return n.lanes=536870912,null}return Uo(n,a)}var o=e.memoizedState;if(o!==null){var d=o.dehydrated;if(Ql(n),r)if(n.flags&256)n.flags&=-257,n=Uh(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(l(558));else if(on||za(e,n,t,!1),r=(t&e.childLanes)!==0,on||r){if(la.current===null){if(a=Ue,a!==null&&(d=Ad(a,t),d!==0&&d!==o.retryLane))throw o.retryLane=d,Ma(e,d),On(a,e,d),hc;us()}n=Uh(e,n,t)}else e=o.treeContext,Ye=rt(d.nextSibling),dn=n,Ee=!0,na=null,at=!1,e!==null&&Mf(n,e),n=Uo(n,a),n.flags|=134221824;return n}return e=Dt(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Pi(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(l(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function mc(e,n,t,a,r){return Oa(n),t=Xl(e,n,t,a,void 0,r),a=Zl(),e!==null&&!on?(Kl(e,n,r),It(e,n,r)):(Ee&&a&&wo(n),n.flags|=1,ln(e,n,t,r),n.child)}function Fh(e,n,t,a,r,o){return Oa(n),n.updateQueue=null,t=Vf(n,a,t,r),Yf(e),a=Zl(),e!==null&&!on?(Kl(e,n,o),It(e,n,o)):(Ee&&a&&wo(n),n.flags|=1,ln(e,n,t,o),n.child)}function Qh(e,n,t,a,r){if(Oa(n),n.stateNode===null){var o=hi,d=t.contextType;typeof d=="object"&&d!==null&&(o=pn(d)),o=new t(a,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=dc,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=a,o.state=n.memoizedState,o.refs={},jl(n),d=t.contextType,o.context=typeof d=="object"&&d!==null?pn(d):hi,o.state=n.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(uc(n,t,d,a),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(d=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),d!==o.state&&dc.enqueueReplaceState(o,o.state,null),gr(n,a,o,r),pr(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){o=n.stateNode;var m=n.memoizedProps,C=Ia(t,m);o.props=C;var A=o.context,k=t.contextType;d=hi,typeof k=="object"&&k!==null&&(d=pn(k));var W=t.getDerivedStateFromProps;k=typeof W=="function"||typeof o.getSnapshotBeforeUpdate=="function",m=n.pendingProps!==m,k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m||A!==d)&&kh(n,o,a,d),ra=!1;var R=n.memoizedState;o.state=R,gr(n,a,o,r),pr(),A=n.memoizedState,m||R!==A||ra?(typeof W=="function"&&(uc(n,t,W,a),A=n.memoizedState),(C=ra||Nh(n,t,C,a,R,A,d))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=A),o.props=a,o.state=A,o.context=d,a=C):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{o=n.stateNode,Gl(e,n),d=n.memoizedProps,k=Ia(t,d),o.props=k,W=n.pendingProps,R=o.context,A=t.contextType,C=hi,typeof A=="object"&&A!==null&&(C=pn(A)),m=t.getDerivedStateFromProps,(A=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==W||R!==C)&&kh(n,o,a,C),ra=!1,R=n.memoizedState,o.state=R,gr(n,a,o,r),pr();var N=n.memoizedState;d!==W||R!==N||ra||e!==null&&e.dependencies!==null&&Eo(e.dependencies)?(typeof m=="function"&&(uc(n,t,m,a),N=n.memoizedState),(k=ra||Nh(n,t,k,a,R,N,C)||e!==null&&e.dependencies!==null&&Eo(e.dependencies))?(A||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,N,C),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,N,C)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=N),o.props=a,o.state=N,o.context=C,a=k):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),a=!1)}return o=a,Pi(e,n),a=(n.flags&128)!==0,o||a?(o=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&a?(n.child=ja(n,e.child,null,r),n.child=ja(n,null,t,r)):ln(e,n,t,r),n.memoizedState=o.state,e=n.child):e=It(e,n,r),e}function Yh(e,n,t,a){return ka(),n.flags|=256,ln(e,n,t,a),n.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gc(e){return{baseLanes:e,cachePool:Df()}}function vc(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Qn),e}function Vh(e,n,t){var a=n.pendingProps,r=!1,o=(n.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(vn.current&2)!==0),d&&(r=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(r?ca(n):ua(),(e=Ye)?(e=gp(e,at),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ea!==null?{id:bt,overflow:yt}:null,retryLane:536870912,hydrationErrors:null},t=Rf(e),t.return=n,n.child=t,dn=n,Ye=null)):e=null,e===null)throw ta(n);return gu(e)?n.lanes=32:n.lanes=536870912,null}return o=a.children,a=a.fallback,r?(ua(),r=n.mode,o=Fo({mode:"hidden",children:o},r),a=Na(a,r,t,null),o.return=n,a.return=n,o.sibling=a,n.child=o,a=n.child,a.memoizedState=gc(t),a.childLanes=vc(e,d,t),n.memoizedState=pc,Sr(null,a)):(ca(n),bc(n,o))}var m=e.memoizedState;if(m!==null){var C=m.dehydrated;if(C!==null)return ry(e,n,o,d,a,C,m,t)}return r?(ua(),r=a.fallback,o=n.mode,m=e.child,C=m.sibling,a=Dt(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&1206910976,C!==null?r=Dt(C,r):(r=Na(r,o,t,null),r.flags|=2),r.return=n,a.return=n,a.sibling=r,n.child=a,Sr(null,a),a=n.child,r=e.child.memoizedState,r===null?r=gc(t):(o=r.cachePool,o!==null?(m=an._currentValue,o=o.parent!==m?{parent:m,pool:m}:o):o=Df(),r={baseLanes:r.baseLanes|t,cachePool:o}),a.memoizedState=r,a.childLanes=vc(e,d,t),n.memoizedState=pc,Sr(e.child,a)):(ca(n),t=e.child,e=t.sibling,t=Dt(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=t,n.memoizedState=null,t)}function bc(e,n){return n=Fo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fo(e,n){return e=Nn(22,e,null,n),e.lanes=0,e}function Qo(e,n,t){return ja(n,e.child,null,t),e=bc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ry(e,n,t,a,r,o,d,m){if(t)return n.flags&256?(ca(n),n.flags&=-257,Qo(e,n,m)):n.memoizedState!==null?(ua(),n.child=e.child,n.flags|=128,null):(ua(),o=r.fallback,d=n.mode,r=Fo({mode:"visible",children:r.children},d),o=Na(o,d,m,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,ja(n,e.child,null,m),r=n.child,r.memoizedState=gc(m),r.childLanes=vc(e,a,m),n.memoizedState=pc,Sr(null,r));if(ca(n),gu(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var C=a.dgst;return a=C,a!==""&&(r=Error(l(419)),r.stack="",r.digest=a,cr({value:r,source:null,stack:null})),Qo(e,n,m)}if(on||za(e,n,m,!1),a=(m&e.childLanes)!==0,on||a){if(la.current!==null)return Qo(e,n,m);if(a=Ue,a!==null&&(r=Ad(a,m),r!==0&&r!==d.retryLane))throw d.retryLane=r,Ma(e,r),On(a,e,r),hc;return pu(o)||us(),Qo(e,n,m)}return pu(o)?(n.flags|=192,n.child=e.child,null):(e=d.treeContext,Ye=rt(o.nextSibling),dn=n,Ee=!0,na=null,at=!1,e!==null&&Mf(n,e),n=bc(n,r.children),n.flags|=134221824,n)}function Xh(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),To(e.return,n,t)}function Zh(e){for(var n=null;e!==null;){var t=e.alternate;t!==null&&Ho(t)===null&&(n=e),e=e.sibling}return n}function Yo(e,n,t,a,r,o){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r,treeForkCount:o}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=t,d.tailMode=r,d.treeForkCount=o)}function yc(e){var n=e.child;for(e.child=null;n!==null;){var t=n.sibling;n.sibling=e.child,e.child=n,n=t}}function Cc(e,n,t){var a=n.pendingProps,r=a.revealOrder,o=a.tail;a=a.children;var d=vn.current;if(n.flags&128)return vr(n,d),null;var m=(d&2)!==0;if(m?(d=d&1|2,n.flags|=128):d&=1,vr(n,d),r==="backwards"&&e!==null?(yc(e),ln(e,n,a,t),yc(e)):ln(e,n,a,t),a=Ee?lr:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xh(e,t,n);else if(e.tag===19)Xh(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"backwards":t=Zh(n.child),t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null,yc(n)),Yo(n,!0,r,null,o,a);break;case"unstable_legacy-backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Ho(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Yo(n,!0,t,null,o,a);break;case"together":Yo(n,!1,null,null,void 0,a);break;case"independent":n.memoizedState=null;break;default:t=Zh(n.child),t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Yo(n,!1,r,t,o,a)}return n.child}function Kh(e,n,t){var a=n.pendingProps;return aa(n,n.type,a.value),ln(e,n,a.children,t),n.child}function It(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ma|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(za(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,t=Dt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Dt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Sc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Eo(e)))}function oy(e,n,t){switch(n.tag){case 3:pt(n,n.stateNode.containerInfo),aa(n,an,e.memoizedState.cache),ka();break;case 27:case 5:An(n);break;case 4:pt(n,n.stateNode.containerInfo);break;case 10:aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ql(n),null;break;case 13:var a=n.memoizedState;if(a!==null){if(a.dehydrated!==null)return ca(n),n.flags|=128,null;a=za(e,n,t,!1);var r=n.child.childLanes;return a||(t&r)!==0?Vh(e,n,t):(ca(n),e=It(e,n,t),e!==null?e.sibling:null)}ca(n);break;case 19:if(n.flags&128)return Cc(e,n,t);if(r=(e.flags&128)!==0,a=(t&n.childLanes)!==0,a||(za(e,n,t,!1),a=(t&n.childLanes)!==0),r){if(a)return Cc(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vr(n,vn.current),a)break;return null;case 22:return n.lanes=0,Ih(e,n,t,n.pendingProps);case 24:aa(n,an,e.memoizedState.cache)}return It(e,n,t)}function Jh(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)on=!0;else{if(!Sc(e,t)&&(n.flags&128)===0)return on=!1,oy(e,n,t);on=(e.flags&131072)!==0}else on=!1,Ee&&(n.flags&1048576)!==0&&Af(n,lr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=qa(n.elementType),n.type=e,typeof e=="function")xl(e)?(a=Ia(e,a),n.tag=1,n=Qh(null,n,e,a,t)):(n.tag=0,n=mc(null,n,e,a,t));else{if(e!=null){var r=e.$$typeof;if(r===I){n.tag=11,n=Bh(null,n,e,a,t);break e}else if(r===Q){n.tag=14,n=jh(null,n,e,a,t);break e}else if(r===Ce){n.tag=10,n.type=e,n=Kh(null,n,t);break e}}throw n=ee(e)||e,Error(l(306,n,""))}}return n;case 0:return mc(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,r=Ia(a,n.pendingProps),Qh(e,n,a,r,t);case 3:e:{if(pt(n,n.stateNode.containerInfo),e===null)throw Error(l(387));a=n.pendingProps;var o=n.memoizedState;r=o.element,Gl(e,n),gr(n,a,null,t);var d=n.memoizedState;if(a=d.cache,aa(n,an,a),a!==o.cache&&Ol(n,[an],t,!0),pr(),a=d.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=Yh(e,n,a,t);break e}else if(a!==r){r=et(Error(l(424)),n),cr(r),n=Yh(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ye=rt(e.firstChild),dn=n,Ee=!0,na=null,at=!0,t=If(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling;else{if(ka(),a===r){n=It(e,n,t);break e}ln(e,n,a,t)}n=n.child}return n;case 26:return Pi(e,n),e===null?(t=Pp(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ee||(n.stateNode=tp(n.type,n.pendingProps,wn.current,n)):n.memoizedState=Pp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return An(n),e===null&&Ee&&(a=n.stateNode=yp(n.type,n.pendingProps,wn.current),dn=n,at=!0,r=Ye,ba(n.type)?(vu=r,Ye=rt(a.firstChild)):Ye=r),ln(e,n,n.pendingProps.children,t),Pi(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((r=a=Ye)&&(a=eC(a,n.type,n.pendingProps,at),a!==null?(n.stateNode=a,dn=n,Ye=rt(a.firstChild),at=!1,r=!0):r=!1),r||ta(n)),An(n),r=n.type,o=n.pendingProps,d=e!==null?e.memoizedProps:null,a=o.children,lu(r,o)?a=null:d!==null&&lu(r,d)&&(n.flags|=32),n.memoizedState!==null&&(r=Xl(e,n,Xb,null,null,t),Gi._currentValue=r),Pi(e,n),ln(e,n,a,t),n.child;case 6:return e===null&&Ee&&((e=t=Ye)&&(t=nC(t,n.pendingProps,at),t!==null?(n.stateNode=t,dn=n,Ye=null,e=!0):e=!1),e||ta(n)),null;case 13:return Vh(e,n,t);case 4:return pt(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ja(n,null,a,t):ln(e,n,a,t),n.child;case 11:return Bh(e,n,n.type,n.pendingProps,t);case 7:return a=n.pendingProps,Pi(e,n),ln(e,n,a,t),n.child;case 8:return ln(e,n,n.pendingProps.children,t),n.child;case 12:return ln(e,n,n.pendingProps.children,t),n.child;case 10:return Kh(e,n,t);case 9:return r=n.type._context,a=n.pendingProps.children,Oa(n),r=pn(r),a=a(r),n.flags|=1,ln(e,n,a,t),n.child;case 14:return jh(e,n,n.type,n.pendingProps,t);case 15:return Gh(e,n,n.type,n.pendingProps,t);case 19:return Cc(e,n,t);case 31:return iy(e,n,t);case 22:return Ih(e,n,t,n.pendingProps);case 24:return Oa(n),a=pn(an),e===null?(r=ql(),r===null&&(r=Ue,o=Dl(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=t),r=o),n.memoizedState={parent:a,cache:r},jl(n),aa(n,an,r)):((e.lanes&t)!==0&&(Gl(e,n),gr(n,null,null,t),pr()),r=e.memoizedState,o=n.memoizedState,r.parent!==a?(r={parent:a,cache:a},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),aa(n,an,a)):(a=o.cache,aa(n,an,a),a!==r.cache&&Ol(n,[an],t,!0))),ln(e,n,n.pendingProps.children,t),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=n.pendingProps,a.name!=null&&a.name!=="auto"?n.flags|=e===null?18882560:18874368:Ee&&wo(n),e!==null&&e.memoizedProps.name!==a.name?n.flags|=4194816:Pi(e,n),ln(e,n,a.children,t),n.child;case 29:throw n.pendingProps}throw Error(l(156,n.tag))}function Lt(e){e.flags|=4}function wc(e,n,t,a,r){var o;if((o=(e.mode&32)!==0)&&(o=t===null?Rp(n,a):Rp(n,a)&&(a.src!==t.src||a.srcSet!==t.srcSet)),o){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Hm())e.flags|=8192;else throw Ba=Ao,Bl}else e.flags&=-16777217}function $h(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!xp(n))if(Hm())e.flags|=8192;else throw Ba=Ao,Bl}function Vo(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?_d():536870912,e.lanes|=n,xi|=n)}function wr(e,n){if(!Ee)switch(e.tailMode){case"visible":break;case"collapsed":for(var t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(n=e.tail,t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&1206910976,a|=r.flags&1206910976,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function sy(e,n,t){var a=n.pendingProps;switch(Nl(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bt(an),Ze(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(gi(n)?Lt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hl())),Ve(n),null;case 26:var r=n.type,o=n.memoizedState;return e===null?(Lt(n),o!==null?(Ve(n),$h(n,o)):(Ve(n),wc(n,r,null,a,t))):o?o!==e.memoizedState?(Lt(n),Ve(n),$h(n,o)):(Ve(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&Lt(n),Ve(n),wc(n,r,e,a,t)),null;case 27:if(Je(n),t=wn.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Lt(n);else{if(!a){if(n.stateNode===null)throw Error(l(166));return Ve(n),n.subtreeFlags&=-33554433,null}e=Ne.current,gi(n)?Nf(n):(e=yp(r,a,t),n.stateNode=e,Lt(n))}return Ve(n),n.subtreeFlags&=-33554433,null;case 5:if(Je(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Lt(n);else{if(!a){if(n.stateNode===null)throw Error(l(166));return Ve(n),n.subtreeFlags&=-33554433,null}if(o=Ne.current,gi(n))Nf(n);else{var d=Hr(wn.current);switch(o){case 1:o=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":o=d.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o=typeof a.is=="string"?d.createElement(r,{is:a.is}):d.createElement(r)}}o[mn]=n,o[Mn]=a;e:for(d=n.child;d!==null;){if(d.tag===5||d.tag===6)o.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}n.stateNode=o;e:switch(yn(o,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Lt(n)}}return Ve(n),n.subtreeFlags&=-33554433,wc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Lt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(l(166));if(e=wn.current,gi(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,r=dn,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[mn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Jm(e.nodeValue,t)),e||ta(n,!0)}else e=Hr(e).createTextNode(a),e[mn]=n,n.stateNode=e}return Ve(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=gi(n),t!==null){if(e===null){if(!a)throw Error(l(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[mn]=n}else ka(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),e=!1}else t=Hl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(Ln(n),n):(Ln(n),null);if((n.flags&128)!==0)throw Error(l(558))}return Ve(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=gi(n),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(l(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(l(317));r[mn]=n}else ka(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),r=!1}else r=Hl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(Ln(n),n):(Ln(n),null)}return Ln(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==r&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Vo(n,n.updateQueue),Ve(n),null);case 4:return Ze(),e===null&&au(n.stateNode.containerInfo),n.flags|=67108864,Ve(n),null;case 10:return Bt(n.type),Ve(n),null;case 19:if(Yl(n),a=n.memoizedState,a===null)return Ve(n),null;if(r=(n.flags&128)!==0,o=a.rendering,o===null)if(r)wr(a,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=Ho(e),o!==null){for(n.flags|=128,wr(a,!1),e=o.updateQueue,n.updateQueue=e,Vo(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)_f(t,e),t=t.sibling;return vr(n,vn.current&1|2),Ee&&Wt(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&qn()>os&&(n.flags|=128,r=!0,wr(a,!1),n.lanes=4194304)}else{if(!r)if(e=Ho(o),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Vo(n,e),wr(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!o.alternate&&!Ee)return Ve(n),null}else 2*qn()-a.renderingStartTime>os&&t!==536870912&&(n.flags|=128,r=!0,wr(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(e=a.last,e!==null?e.sibling=o:n.child=o,a.last=o)}if(a.tail!==null){e=a.tail;e:{for(t=e;t!==null;){if(t.alternate!==null){t=!1;break e}t=t.sibling}t=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=qn(),e.sibling=null,o=vn.current,o=r?o&1|2:o&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!t||Ee?vr(n,o):(t=o,de(gn,n),de(vn,t),Sn===null&&(Sn=n)),Ee&&Wt(n,a.treeForkCount),e}return Ve(n),null;case 22:case 23:return Ln(n),Fl(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),t=n.updateQueue,t!==null&&Vo(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&ke(Wa),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Bt(an),Ve(n),null;case 25:return null;case 30:return n.flags|=33554432,Ve(n),null}throw Error(l(156,n.tag))}function ly(e,n){switch(Nl(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bt(an),Ze(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(Ln(n),n.alternate===null)throw Error(l(340));ka()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ln(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));ka()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Yl(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Ze(),null;case 10:return Bt(n.type),null;case 22:case 23:return Ln(n),Fl(),e!==null&&ke(Wa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Bt(an),null;case 25:return null;default:return null}}function em(e,n){switch(Nl(n),n.tag){case 3:Bt(an),Ze();break;case 26:case 27:case 5:Je(n);break;case 4:Ze();break;case 31:n.memoizedState!==null&&Ln(n);break;case 13:Ln(n);break;case 19:Yl(n);break;case 10:Bt(n.type);break;case 22:case 23:Ln(n),Fl(),e!==null&&ke(Wa);break;case 24:Bt(an)}}function Pr(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var r=a.next;t=r;do{if((t.tag&e)===e){a=void 0;var o=t.create,d=t.inst;a=o(),d.destroy=a}t=t.next}while(t!==r)}}catch(m){je(n,n.return,m)}}function da(e,n,t){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var o=r.next;a=o;do{if((a.tag&e)===e){var d=a.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,r=n;var C=t,A=m;try{A()}catch(k){je(r,C,k)}}}a=a.next}while(a!==o)}}catch(k){je(n,n.return,k)}}function nm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Uf(n,t)}catch(a){je(e,e.return,a)}}}function tm(e,n,t){t.props=Ia(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){je(e,n,a)}}function Ct(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var r=e.stateNode,o=zt(e.memoizedProps,r);(r.ref===null||r.ref.name!==o)&&(r.ref=cp(o)),a=r.ref;break;case 7:if(e.stateNode===null){var d=new Vn(e);y(e.child,!1,Jy,d,void 0,void 0),e.stateNode=d}a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(m){je(e,n,m)}}function bn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(r){je(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){je(e,n,r)}else t.current=null}function Xo(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var t=0;t<n.length;t++)pp(e.stateNode,n[t])}function am(e){for(var n=e.return;n!==null&&(Tc(n)&&pp(e.stateNode,n.stateNode),!Pc(n));)n=n.return}function Tr(e){for(var n=e.return;n!==null&&(Tc(n)&&$y(e.stateNode,n.stateNode),!Pc(n));)n=n.return}function Pc(e){return e.tag===5||e.tag===3||e.tag===27}function Tc(e){return e&&e.tag===7&&e.stateNode!==null}function Ec(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(r){je(e,e.return,r)}}function _c(e,n,t){try{var a=e.stateNode;zy(a,e.type,t,n),a[Mn]=n}catch(r){je(e,e.return,r)}}function im(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function Rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||im(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xc(e,n,t,a){var r=e.tag;if(r===5||r===6)r=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(r,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(r),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=vt)),Xo(e,a),Oe=!0;else if(r!==4&&(r===27&&(Xo(e,a),a=null,ba(e.type)&&(t=e.stateNode,n=null)),e=e.child,e!==null))for(xc(e,n,t,a),e=e.sibling;e!==null;)xc(e,n,t,a),e=e.sibling}function Zo(e,n,t,a){var r=e.tag;if(r===5||r===6)r=e.stateNode,n?t.insertBefore(r,n):t.appendChild(r),Xo(e,a),Oe=!0;else if(r!==4&&(r===27&&(Xo(e,a),a=null,ba(e.type)&&(t=e.stateNode)),e=e.child,e!==null))for(Zo(e,n,t,a),e=e.sibling;e!==null;)Zo(e,n,t,a),e=e.sibling}function rm(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);yn(n,a,t),n[mn]=e,n[Mn]=t}catch(o){je(e,e.return,o)}}var Ko=!1,Un=null;function om(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ko=!0)}var St=null;function sm(){var e=St;return St=null,e}var kn=0;function Ti(e,n,t,a,r){return kn=0,lm(e.child,n,t,a,r)}function lm(e,n,t,a,r){for(var o=!1;e!==null;){if(e.tag===5){var d=e.stateNode;if(a!==null){var m=du(d);a.push(m),m.view&&(o=!0)}else o||du(d).view&&(o=!0);Ko=!0,sp(d,kn===0?n:n+"_"+kn,t),kn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r||lm(e.child,n,t,a,r)&&(o=!0));e=e.sibling}return o}function wt(e,n){for(;e!==null;)e.tag===5?lp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||wt(e.child,n)),e=e.sibling}function Jo(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Jo(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(l(544));var t=n.name;n=Ot(n.default,n.share),n!=="none"&&(Ti(e,t,n,null,!1)||wt(e.child,!1))}e=e.sibling}}function Ac(e,n){if(e.tag===30){var t=e.stateNode,a=e.memoizedProps,r=zt(a,t),o=Ot(a.default,t.paired?a.share:a.enter);o!=="none"?Ti(e,r,o,null,!1)?(Jo(e),t.paired||n||ki(e,a.onEnter)):wt(e.child,!1):Jo(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ac(e,n),e=e.sibling;else Jo(e)}function Mc(e){if(Un!==null&&Un.size!==0){var n=Un;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.memoizedProps,a=t.name;if(a!=null&&a!=="auto"){var r=n.get(a);if(r!==void 0){var o=Ot(t.default,t.share);if(o!=="none"&&(Ti(e,a,o,null,!1)?(o=e.stateNode,r.paired=o,o.paired=r,ki(e,t.onShare)):wt(e.child,!1)),n.delete(a),n.size===0)break}}}Mc(e)}e=e.sibling}}}function Nc(e){if(e.tag===30){var n=e.memoizedProps,t=zt(n,e.stateNode),a=Un!==null?Un.get(t):void 0,r=Ot(n.default,a!==void 0?n.share:n.exit);r!=="none"&&(Ti(e,t,r,null,!1)?a!==void 0?(r=e.stateNode,a.paired=r,r.paired=a,Un.delete(t),ki(e,n.onShare)):ki(e,n.onExit):wt(e.child,!1)),Un!==null&&Mc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Nc(e),e=e.sibling;else Un!==null&&Mc(e)}function cm(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,t=zt(n,e.stateNode);n=Ot(n.default,n.update),e.flags&=-5,n!=="none"&&Ti(e,t,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&cm(e);e=e.sibling}}function kc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,wt(e.child,!1))}kc(e)}e=e.sibling}}function $o(e){if(e.tag===30)e.stateNode.paired=null,wt(e.child,!1),kc(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)$o(e),e=e.sibling;else kc(e)}function um(e){for(e=e.child;e!==null;)e.tag===30?wt(e.child,!1):(e.subtreeFlags&33554432)!==0&&um(e),e=e.sibling}function Hc(e,n,t,a,r,o,d){for(var m=!1;n!==null;){if(n.tag===5){var C=n.stateNode;if(o!==null&&kn<o.length){var A=o[kn],k=du(C);(A.view||k.view)&&(m=!0);var W;if(W=(e.flags&4)===0)if(k.clip)W=!0;else{W=A.rect;var R=k.rect;W=W.y!==R.y||W.x!==R.x||W.height!==R.height||W.width!==R.width}W&&(e.flags|=4),k.abs?k=!A.abs:(A=A.rect,k=k.rect,k=A.height!==k.height||A.width!==k.width),k&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&sp(C,kn===0?t:t+"_"+kn,r),m&&(e.flags&4)!==0||(St===null&&(St=[]),St.push(C,kn===0?a:a+"_"+kn,n.memoizedProps)),kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&d?e.flags|=n.flags&32:Hc(e,n.child,t,a,r,o,d)&&(m=!0));n=n.sibling}return m}function dm(e,n){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=e.stateNode,r=zt(t,a),o=Ot(t.default,t.update),d;d=e.memoizedState,e.memoizedState=null,a=e;var m=e.child;kn=0,r=Hc(a,m,r,r,o,d,!1),(e.flags&4)!==0&&r&&ki(e,t.onUpdate)}else(e.subtreeFlags&33554432)!==0&&dm(e);e=e.sibling}}var fn=!1,We=!1,Pt=!1,zc=!1,fm=typeof WeakSet=="function"?WeakSet:Set,hn=null,Tt=!1,Er=!1,es=!1,Oc=!1;function cy(e,n,t){if(e=e.containerInfo,ou=Ii,e=gf(e),Sl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,d=r.focusNode;r=r.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var m=0,C=-1,A=-1,k=0,W=0,R=e,N=null;n:for(;;){for(var Y;R!==a||o!==0&&R.nodeType!==3||(C=m+o),R!==d||r!==0&&R.nodeType!==3||(A=m+r),R.nodeType===3&&(m+=R.nodeValue.length),(Y=R.firstChild)!==null;)N=R,R=Y;for(;;){if(R===e)break n;if(N===a&&++k===o&&(C=m),N===d&&++W===r&&(A=m),(Y=R.nextSibling)!==null)break;R=N,N=R.parentNode}R=Y}a=C===-1||A===-1?null:{start:C,end:A}}else a=null}a=a||{start:0,end:0}}else a=null;for(su={focusedElem:e,selectionRange:a},Ii=!1,t=(t&335544064)===t,hn=n,n=t?9270:1024;hn!==null;){if(e=hn,t&&(a=e.deletions,a!==null))for(o=0;o<a.length;o++)t&&Nc(a[o]);if(e.alternate===null&&(e.flags&2)!==0)t&&om(e),ns(t);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&t&&Nc(a),ns(t);continue}else if(a!==null&&a.memoizedState!==null){t&&om(e),ns(t);continue}}a=e.child,(e.subtreeFlags&n)!==0&&a!==null?(a.return=e,hn=a):(t&&cm(e),ns(t))}}Un=null}function ns(e){for(;hn!==null;){var n=hn,t=e,a=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((r&1024)!==0&&a!==null){t=void 0,r=a.memoizedProps,a=a.memoizedState;var o=n.stateNode;try{var d=Ia(n.type,r);t=o.getSnapshotBeforeUpdate(d,a),o.__reactInternalSnapshotBeforeUpdate=t}catch(m){je(n,n.return,m)}}break;case 3:if((r&1024)!==0){if(a=n.stateNode.containerInfo,t=a.nodeType,t===9)mu(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":mu(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&a!==null&&(t=zt(a.memoizedProps,a.stateNode),r=n.memoizedProps,r=Ot(r.default,r.update),r!=="none"&&Ti(a,t,r,a.memoizedState=[],!0));break;default:if((r&1024)!==0)throw Error(l(163))}if(a=n.sibling,a!==null){a.return=n.return,hn=a;break}hn=n.return}}function hm(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Et(e,t),a&4&&Pr(5,t);break;case 1:if(Et(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(d){je(t,t.return,d)}else{var r=Ia(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){je(t,t.return,d)}}a&64&&nm(t),a&512&&Ct(t,t.return);break;case 3:if(Et(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Uf(e,n)}catch(d){je(t,t.return,d)}}break;case 27:n===null&&a&4&&rm(t);case 26:case 5:Et(e,t),n===null&&a&4&&Ec(t),a&512&&Ct(t,t.return);break;case 12:Et(e,t);break;case 31:Et(e,t),a&4&&vm(e,t);break;case 13:Et(e,t),a&4&&bm(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Sy.bind(null,t),tC(e,t))));break;case 22:if(a=t.memoizedState!==null||fn,!a){var o=n!==null&&n.memoizedState!==null||We;n=fn,r=We,fn=a,(We=o)&&!r?(a=2,(t.subtreeFlags&8772)!==0&&(a|=1),dt(e,t,a)):Et(e,t),fn=n,We=r}break;case 30:Et(e,t),a&512&&Ct(t,t.return);break;case 7:a&512&&Ct(t,t.return);default:Et(e,t)}}function Dc(e,n){for(e=e.child;e!==null;)mm(e,n),e=e.sibling}function mm(e,n){switch(e.tag){case 5:case 26:try{var t=e.stateNode;if(n){var a=t.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var r=e.stateNode,o=e.memoizedProps.style,d=o!=null&&o.hasOwnProperty("display")?o.display:null;r.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(C){je(e,e.return,C)}Wc(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Oe=!0}catch(C){je(e,e.return,C)}break;case 18:try{var m=e.stateNode;n?op(m,!0):op(e.stateNode,!1)}catch(C){je(e,e.return,C)}break;case 22:case 23:e.memoizedState===null&&Dc(e,n);break;default:Dc(e,n)}}function Wc(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var t=e,a=n;switch(t.tag){case 4:mm(t,a);break e;case 22:t.memoizedState===null&&Wc(t,a);break e;default:Wc(t,a)}}e=e.sibling}}function pm(e){var n=e.alternate;n!==null&&(e.alternate=null,pm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ro(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Hn=!1;function ct(e,n,t){for(t=t.child;t!==null;)gm(e,n,t),t=t.sibling}function gm(e,n,t){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(Vi,t)}catch{}switch(t.tag){case 26:We||bn(t,n),ct(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!We&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:We||bn(t,n),Tr(t);var a=Ke,r=Hn;ba(t.type)&&(Ke=t.stateNode,Hn=!1),ct(e,n,t),Cp(t.stateNode,t.type,t.memoizedProps),Ke=a,Hn=r;break;case 5:We||bn(t,n),Tr(t);case 6:if(t.tag===6&&Tr(t),a=Ke,r=Hn,Ke=null,ct(e,n,t),Ke=a,Hn=r,Ke!==null)if(Hn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(t.stateNode),Oe=!0}catch(o){je(t,n,o)}else try{Ke.removeChild(t.stateNode),Oe=!0}catch(o){je(t,n,o)}break;case 18:Ke!==null&&(Hn?(e=Ke,rp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Li(e)):rp(Ke,t.stateNode));break;case 4:a=Ke,r=Hn,Ke=t.stateNode.containerInfo,Hn=!0,ct(e,n,t),Ke=a,Hn=r;break;case 0:case 11:case 14:case 15:da(2,t,n),We||da(4,t,n),ct(e,n,t);break;case 1:We||(bn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&tm(t,n,a)),ct(e,n,t);break;case 21:ct(e,n,t);break;case 22:We=(a=We)||t.memoizedState!==null,ct(e,n,t),We=a;break;case 30:bn(t,n),ct(e,n,t);break;case 7:We||bn(t,n),ct(e,n,t);break;default:ct(e,n,t)}}function vm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Li(e)}catch(t){je(n,n.return,t)}}}function bm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Li(e)}catch(t){je(n,n.return,t)}}function uy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fm),n;default:throw Error(l(435,e.tag))}}function ts(e,n){var t=uy(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var r=wy.bind(null,e,a);a.then(r,r)}})}function _n(e,n,t){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r],d=e,m=n,C=m;e:for(;C!==null;){switch(C.tag){case 27:if(ba(C.type)){Ke=C.stateNode,Hn=!1;break e}break;case 5:Ke=C.stateNode,Hn=!1;break e;case 3:case 4:Ke=C.stateNode.containerInfo,Hn=!0;break e}C=C.return}if(Ke===null)throw Error(l(160));gm(d,m,o),Ke=null,Hn=!1,d=o.alternate,d!==null&&(d.return=null),o.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ym(n,e,t),n=n.sibling}var ut=null;function ym(e,n,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(r&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var o=0;o<a.length;o++){var d=a[o];d.ref.impl=d.nextImpl}_n(n,e,t),Rn(e),r&4&&(da(3,e,e.return),Pr(3,e),da(5,e,e.return));break;case 1:_n(n,e,t),Rn(e),r&512&&(We||a===null||bn(a,a.return)),r&64&&fn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:if(o=ut,_n(n,e,t),Rn(e),r&512&&(We||a===null||bn(a,a.return)),r&4)if(r=a!==null?a.memoizedState:null,t=e.memoizedState,a===null)if(t===null)if(e.stateNode===null)if(fn)e.stateNode=tp(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,t=e.memoizedProps,r=o.ownerDocument||o;n:switch(n){case"title":a=r.getElementsByTagName("title")[0],(!a||a[Ki]||a[mn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=r.createElement(n),r.head.insertBefore(a,r.querySelector("head > title"))),yn(a,n,t),a[mn]=e,un(a),n=a;break e;case"link":if(o=_p("link","href",r).get(n+(t.href||""))){for(d=0;d<o.length;d++)if(a=o[d],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(d,1);break n}}a=r.createElement(n),yn(a,n,t),r.head.appendChild(a);break;case"meta":if(o=_p("meta","content",r).get(n+(t.content||""))){for(d=0;d<o.length;d++)if(a=o[d],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(d,1);break n}}a=r.createElement(n),yn(a,n,t),r.head.appendChild(a);break;default:throw Error(l(468,n))}a[mn]=e,un(a),n=a}e.stateNode=n}else fn||Su(o,e.type,e.stateNode);else e.stateNode=Ep(o,t,e.memoizedProps);else r!==t?(r===null?(n=a.stateNode,n===null||We||n.parentNode.removeChild(n)):r.count--,t===null?fn||Su(o,e.type,e.stateNode):Ep(o,t,e.memoizedProps)):t===null&&e.stateNode!==null&&_c(e,e.memoizedProps,a.memoizedProps);break;case 27:_n(n,e,t),Rn(e),r&512&&(We||a===null||bn(a,a.return)),a!==null&&r&4&&_c(e,e.memoizedProps,a.memoizedProps);break;case 5:if(o=Pt,Pt=!1,_n(n,e,t),Pt=o,Rn(e),r&512&&(We||a===null||bn(a,a.return)),e.flags&32){n=e.stateNode;try{oi(n,""),Oe=!0}catch(k){je(e,e.return,k)}}r&4&&e.stateNode!=null&&(n=e.memoizedProps,_c(e,n,a!==null?a.memoizedProps:n)),r&1024&&(zc=!0);break;case 6:if(_n(n,e,t),Rn(e),r&4){if(e.stateNode===null)throw Error(l(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n,Oe=!0}catch(k){je(e,e.return,k)}}break;case 3:if(Oe=!1,vs=null,o=ut,ut=zr(n.containerInfo),_n(n,e,t),ut=o,Rn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Li(n.containerInfo)}catch(k){je(e,e.return,k)}zc&&(zc=!1,Cm(e)),Oe=!1;break;case 4:r=Pt,Pt=fn,a=Bd(),o=ut,ut=zr(e.stateNode.containerInfo),_n(n,e,t),Rn(e),ut=o,Oe&&Er&&(es=!0),Oe=a,Pt=r;break;case 12:_n(n,e,t),Rn(e);break;case 31:_n(n,e,t),Rn(e),r&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ts(e,n)));break;case 13:_n(n,e,t),Rn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rs=qn()),r&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ts(e,n)));break;case 22:o=e.memoizedState!==null,d=a!==null&&a.memoizedState!==null;var m=fn,C=We,A=Pt;fn=m||o,Pt=A||o,We=C||d,_n(n,e,t),We=C,Pt=A,fn=m,Rn(e),r&8192&&(n=e.stateNode,n._visibility=o?n._visibility&-2:n._visibility|1,!o||a===null||d||fn||We||(n=d||We,t=fn,a=We,fn=o||fn,We=n,fa(e,2),fn=t,We=a),!o&&Pt||Dc(e,o)),r&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,ts(e,t))));break;case 19:_n(n,e,t),Rn(e),r&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ts(e,n)));break;case 30:r&512&&(We||a===null||bn(a,a.return)),r=Bd(),o=Er,d=(t&335544064)===t,m=e.memoizedProps,Er=d&&Ot(m.default,m.update)!=="none",_n(n,e,t),Rn(e),d&&a!==null&&Oe&&(e.flags|=4),Er=o,Oe=r;break;case 21:break;case 7:r&512&&(We||a===null||bn(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:_n(n,e,t),Rn(e)}}function Rn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(im(a)){t=a;break}a=a.return}a=null;for(var r=e.return;r!==null;){if(Tc(r)){var o=r.stateNode;a===null?a=[o]:a.push(o)}if(Pc(r))break;r=r.return}var d=a;if(t==null)throw Error(l(160));switch(t.tag){case 27:var m=t.stateNode,C=Rc(e);Zo(e,C,m,d);break;case 5:var A=t.stateNode;t.flags&32&&(oi(A,""),t.flags&=-33);var k=Rc(e);Zo(e,k,A,d);break;case 3:case 4:var W=t.stateNode.containerInfo,R=Rc(e);xc(e,R,W,d);break;default:throw Error(l(161))}}catch(N){je(e,e.return,N)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Cm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Cm(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ii=!0,n.reset(),Ii=!1),e=e.sibling}}function Ei(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Sm(n,e),n=n.sibling;else dm(n)}function Sm(e,n){var t=e.alternate;if(t===null)Ac(e,!1);else switch(e.tag){case 3:if(Oc=Tt=!1,sm(),Ei(n,e),!Tt&&!es){if(e=St,e!==null)for(var a=0;a<e.length;a+=3){t=e[a];var r=e[a+1];lp(t,e[a+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+r+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Oc=!0}St=null;break;case 5:Ei(n,e);break;case 4:a=Tt,Tt=!1,Ei(n,e),Tt&&(es=!0),Tt=a;break;case 22:e.memoizedState===null&&(t.memoizedState!==null?Ac(e,!1):Ei(n,e));break;case 30:a=Tt,r=sm(),Tt=!1,Ei(n,e),Tt&&(e.flags|=4);var o=e.memoizedProps,d=e.stateNode;n=zt(o,d),d=zt(t.memoizedProps,d);var m=Ot(o.default,o.update);m==="none"?n=!1:(o=t.memoizedState,t.memoizedState=null,t=e.child,kn=0,n=Hc(e,t,n,d,m,o,!0),kn!==(o===null?0:o.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(ki(e,e.memoizedProps.onUpdate),St=r):r!==null&&(r.push.apply(r,St),St=r),Tt=(e.flags&32)!==0?!0:a;break;default:Ei(n,e)}}function Et(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hm(e,n.alternate,n),n=n.sibling}function fa(e,n){for(e=e.child;e!==null;){var t=e,a=n;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),fa(t,a);break;case 1:bn(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&tm(t,t.return,r),fa(t,a);break;case 27:(a&2)!==0&&Cp(t.stateNode,t.type,t.memoizedProps);case 5:bn(t,t.return),t.tag!==5&&t.tag!==27||Tr(t),fa(t,a);break;case 6:Tr(t);break;case 26:bn(t,t.return),r=t.stateNode,t.memoizedState!==null||r===null||We||r.parentNode.removeChild(r),fa(t,a);break;case 22:t.memoizedState===null&&fa(t,a);break;case 30:bn(t,t.return),fa(t,a);break;case 7:bn(t,t.return);default:fa(t,a)}e=e.sibling}}function dt(e,n,t){for(t=(n.subtreeFlags&8772)!==0?t:t&-2,n=n.child;n!==null;){var a=n.alternate,r=e,o=n,d=o.flags,m=(t&1)!==0;switch(o.tag){case 0:case 11:case 15:dt(r,o,t),Pr(4,o);break;case 1:if(dt(r,o,t),a=o,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(k){je(a,a.return,k)}if(a=o,r=a.updateQueue,r!==null){var C=a.stateNode;try{var A=r.shared.hiddenCallbacks;if(A!==null)for(r.shared.hiddenCallbacks=null,r=0;r<A.length;r++)Lf(A[r],C)}catch(k){je(a,a.return,k)}}m&&d&64&&nm(o),Ct(o,o.return);break;case 27:(t&2)!==0&&rm(o);case 5:o.tag!==5&&o.tag!==27||am(o),dt(r,o,t),m&&a===null&&d&4&&Ec(o),Ct(o,o.return);break;case 6:am(o);break;case 26:C=o.stateNode,o.memoizedState!==null||C===null||fn||Su(zr(C.ownerDocument),o.type,C),dt(r,o,t),m&&a===null&&d&4&&Ec(o),Ct(o,o.return);break;case 12:dt(r,o,t);break;case 31:dt(r,o,t),m&&d&4&&vm(r,o);break;case 13:dt(r,o,t),m&&d&4&&bm(r,o);break;case 22:o.memoizedState===null&&dt(r,o,t),Ct(o,o.return);break;case 30:dt(r,o,t),Ct(o,o.return);break;case 7:Ct(o,o.return);default:dt(r,o,t)}n=n.sibling}}function qc(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ur(t))}function Bc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ur(e))}function it(e,n,t,a){var r=(t&335544064)===t;if(n.subtreeFlags&(r?10262:10256))for(n=n.child;n!==null;)wm(e,n,t,a),n=n.sibling;else r&&um(n)}function wm(e,n,t,a){var r=(t&335544064)===t;r&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&$o(n);var o=n.flags;switch(n.tag){case 0:case 11:case 15:it(e,n,t,a),o&2048&&Pr(9,n);break;case 1:it(e,n,t,a);break;case 3:it(e,n,t,a),r&&Oc&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),o&2048&&(o=null,n.alternate!==null&&(o=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==o&&(n.refCount++,o!=null&&ur(o)));break;case 12:if(o&2048){it(e,n,t,a),o=n.stateNode;try{var d=n.memoizedProps,m=d.id,C=d.onPostCommit;typeof C=="function"&&C(m,n.alternate===null?"mount":"update",o.passiveEffectDuration,-0)}catch(A){je(n,n.return,A)}}else it(e,n,t,a);break;case 31:it(e,n,t,a);break;case 13:it(e,n,t,a);break;case 23:break;case 22:d=n.stateNode,m=n.alternate,n.memoizedState!==null?(r&&m!==null&&m.memoizedState===null&&$o(m),d._visibility&2?it(e,n,t,a):_r(e,n)):(r&&m!==null&&m.memoizedState!==null&&$o(n),d._visibility&2?it(e,n,t,a):(d._visibility|=2,_i(e,n,t,a,(n.subtreeFlags&10256)!==0||!1))),o&2048&&qc(m,n);break;case 24:it(e,n,t,a),o&2048&&Bc(n.alternate,n);break;case 30:r&&(o=n.alternate,o!==null&&(wt(o.child,!0),wt(n.child,!0))),it(e,n,t,a);break;default:it(e,n,t,a)}}function _i(e,n,t,a,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var o=e,d=n,m=t,C=a,A=d.flags;switch(d.tag){case 0:case 11:case 15:_i(o,d,m,C,r),Pr(8,d);break;case 23:break;case 22:var k=d.stateNode;d.memoizedState!==null?k._visibility&2?_i(o,d,m,C,r):_r(o,d):(k._visibility|=2,_i(o,d,m,C,r)),r&&A&2048&&qc(d.alternate,d);break;case 24:_i(o,d,m,C,r),r&&A&2048&&Bc(d.alternate,d);break;default:_i(o,d,m,C,r)}n=n.sibling}}function _r(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,r=a.flags;switch(a.tag){case 22:_r(t,a),r&2048&&qc(a.alternate,a);break;case 24:_r(t,a),r&2048&&Bc(a.alternate,a);break;default:_r(t,a)}n=n.sibling}}var La=8192;function Ua(e,n,t){if(e.subtreeFlags&La)for(e=e.child;e!==null;)Pm(e,n,t),e=e.sibling}function Pm(e,n,t){switch(e.tag){case 26:Ua(e,n,t),e.flags&La&&(e.memoizedState!==null?gC(t,ut,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Mp(t,e)));break;case 5:Ua(e,n,t),e.flags&La&&(e=e.stateNode,(n&335544128)===n&&Mp(t,e));break;case 3:case 4:var a=ut;ut=zr(e.stateNode.containerInfo),Ua(e,n,t),ut=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=La,La=16777216,Ua(e,n,t),La=a):Ua(e,n,t));break;case 30:if((e.flags&La)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var r=e.stateNode;r.paired=null,Un===null&&(Un=new Map),Un.set(a,r)}Ua(e,n,t);break;default:Ua(e,n,t)}}function Tm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Rr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];hn=a,_m(a,e)}Tm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Em(e),e=e.sibling}function Em(e){switch(e.tag){case 0:case 11:case 15:Rr(e),e.flags&2048&&da(9,e,e.return);break;case 3:Rr(e);break;case 12:Rr(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,as(e)):Rr(e);break;default:Rr(e)}}function as(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];hn=a,_m(a,e)}Tm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:da(8,n,n.return),as(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,as(n));break;default:as(n)}e=e.sibling}}function _m(e,n){for(;hn!==null;){var t=hn;switch(t.tag){case 0:case 11:case 15:da(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ur(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,hn=a;else e:for(t=e;hn!==null;){a=hn;var r=a.sibling,o=a.return;if(pm(a),a===t){hn=null;break e}if(r!==null){r.return=o,hn=r;break e}hn=o}}}var dy={getCacheForType:function(e){var n=pn(an),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return pn(an).controller.signal}},fy=typeof WeakMap=="function"?WeakMap:Map,De=0,Ue=null,_e=null,xe=0,Be=0,Fn=null,ha=!1,Ri=!1,jc=!1,Ut=0,nn=0,ma=0,Fa=0,is=0,Qn=0,xi=0,xr=null,zn=null,Gc=!1,rs=0,Rm=0,os=1/0,ss=null,pa=null,$e=0,ft=null,Qa=null,_t=0,Ic=0,Lc=null,xm=null,Ai=null,Mi=null,Ni=null,Ar=0,ls=null;function Yn(){return(De&2)!==0&&xe!==0?xe&-xe:j.T!==null?$c():Md()}function Am(){if(Qn===0)if((xe&536870912)===0||Ee){var e=no;no<<=1,(no&3932160)===0&&(no=262144),Qn=e}else Qn=536870912;return e=gn.current,e!==null&&(e.flags|=32),Qn}function ki(e,n){if(n!=null){var t=e.stateNode,a=t.ref;a===null&&(a=t.ref=cp(zt(e.memoizedProps,t))),Mi===null&&(Mi=[]),Mi.push(n.bind(null,a))}}function On(e,n,t){(e===Ue&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Hi(e,0),ga(e,xe,Qn,!1)),Zi(e,t),((De&2)===0||e!==Ue)&&(e===Ue&&((De&2)===0&&(Fa|=t),nn===4&&ga(e,xe,Qn,!1)),Rt(e))}function Mm(e,n,t){if((De&6)!==0)throw Error(l(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Xi(e,n),r=a?py(e,n):Fc(e,n,!0),o=a;do{if(r===0){Ri&&!a&&ga(e,n,0,!1);break}else{if(t=e.current.alternate,o&&!hy(t)){r=Fc(e,n,!1),o=!1;continue}if(r===2){if(o=n,e.errorRecoveryDisabledLanes&o)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var m=e;r=xr;var C=m.current.memoizedState.isDehydrated;if(C&&(Hi(m,d).flags|=256),d=Fc(m,d,!1),d!==2&&d!==6){if(jc&&!C){m.errorRecoveryDisabledLanes|=o,Fa|=o,r=4;break e}o=zn,zn=r,o!==null&&(zn===null?zn=o:zn.push.apply(zn,o))}r=d}if(o=!1,r!==2)continue}}if(r===1){Hi(e,0),ga(e,n,0,!0);break}e:{switch(a=e,o=r,o){case 0:case 1:throw Error(l(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ga(a,n,Qn,!ha);break e;case 2:zn=null;break;case 3:case 5:break;default:throw Error(l(329))}if((n&62914560)===n&&(r=rs+300-qn(),10<r)){if(ga(a,n,Qn,!ha),ao(a,0,!0)!==0)break e;_t=n,a.timeoutHandle=uu(Nm.bind(null,a,t,zn,ss,Gc,n,Qn,Fa,xi,ha,o,"Throttled",-0,0),r);break e}Nm(a,t,zn,ss,Gc,n,Qn,Fa,xi,ha,o,null,-0,0)}}break}while(!0);Rt(e)}function Nm(e,n,t,a,r,o,d,m,C,A,k,W,R,N){e.timeoutHandle=-1;var Y=n.subtreeFlags,oe=(o&335544064)===o;if(W=null,(oe||Y&8192||(Y&16785408)===16785408)&&(W={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vt},Un=null,Pm(n,o,W),oe&&(Y=W,oe=e.containerInfo,oe=(oe.nodeType===9?oe:oe.ownerDocument).__reactViewTransition,oe!=null&&(Y.count++,Y.waitingForViewTransition=!0,Y=Wr.bind(Y),oe.finished.then(Y,Y))),Y=(o&62914560)===o?rs-qn():(o&4194048)===o?Rm-qn():0,Y=vC(W,Y),Y!==null)){_t=o,e.cancelPendingCommit=Y(Bm.bind(null,e,n,o,t,a,r,d,m,C,A,k,W,null,R,N)),ga(e,o,d,!A);return}Bm(e,n,o,t,a,r,d,m,C,A,k,W)}function hy(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var r=t[a],o=r.getSnapshot;r=r.value;try{if(!In(o(),r))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ga(e,n,t,a){n=Ed(e,n),n&=~is,n&=~Fa,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var r=n;0<r;){var o=31-jn(r),d=1<<o;a[o]=-1,r&=~d}t!==0&&Rd(e,t,n)}function cs(){return(De&6)===0?(Mr(0),!1):!0}function Uc(){if(_e!==null){if(Be===0)var e=_e.return;else e=_e,qt=Ha=null,Jl(e),yi=null,hr=0,e=_e;for(;e!==null;)em(e.alternate,e),e=e.return;_e=null}}function Hi(e,n){var t=e.timeoutHandle;return t!==-1&&(e.timeoutHandle=-1,Wy(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),_t=0,Uc(),Ue=e,_e=t=Dt(e.current,null),xe=n,Be=0,Fn=null,ha=!1,Ri=Xi(e,n),jc=!1,xi=Qn=is=Fa=ma=nn=0,zn=xr=null,Gc=!1,Ut=Ed(e,n),vo(),t}function km(e,n){Pe=null,j.H=Io,n===bi||n===xo?(n=Bf(),Be=3):n===Bl?(n=Bf(),Be=4):Be=n===hc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Fn=n,_e===null&&(nn=1,Lo(e,et(n,e.current)))}function Hm(){var e=gn.current;return e===null?!0:(xe&4194048)===xe?Sn===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Sn:!1}function zm(){var e=j.H;return j.H=Io,e===null?Io:e}function Om(){var e=j.A;return j.A=dy,e}function us(){nn=4,ha||(xe&4194048)!==xe&&gn.current!==null||(Ri=!0),(ma&134217727)===0&&(Fa&134217727)===0||Ue===null||ga(Ue,xe,Qn,!1)}function Fc(e,n,t){var a=De;De|=2;var r=zm(),o=Om();(Ue!==e||xe!==n)&&(ss=null,Hi(e,n)),n=!1;var d=nn;e:do try{if(Be!==0&&_e!==null){var m=_e,C=Fn;switch(Be){case 8:Uc(),d=6;break e;case 3:case 2:case 9:case 6:gn.current===null&&(n=!0);var A=Be;if(Be=0,Fn=null,zi(e,m,C,A),t&&Ri){d=0;break e}break;default:A=Be,Be=0,Fn=null,zi(e,m,C,A)}}my(),d=nn;break}catch(k){km(e,k)}while(!0);return n&&e.shellSuspendCounter++,qt=Ha=null,De=a,j.H=r,j.A=o,_e===null&&(Ue=null,xe=0,vo()),d}function my(){for(;_e!==null;)Dm(_e)}function py(e,n){var t=De;De|=2;var a=zm(),r=Om();Ue!==e||xe!==n?(ss=null,os=qn()+500,Hi(e,n)):Ri=Xi(e,n);e:do try{if(Be!==0&&_e!==null){n=_e;var o=Fn;n:switch(Be){case 1:Be=0,Fn=null,zi(e,n,o,1);break;case 2:case 9:if(Wf(o)){Be=0,Fn=null,Wm(n);break}n=function(){Be!==2&&Be!==9||Ue!==e||(Be=7),Rt(e)},o.then(n,n);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:Wf(o)?(Be=0,Fn=null,Wm(n)):(Be=0,Fn=null,zi(e,n,o,7));break;case 5:var d=null;switch(_e.tag){case 26:d=_e.memoizedState;case 5:case 27:var m=_e;if(d?xp(d):m.stateNode.complete){Be=0,Fn=null;var C=m.sibling;if(C!==null)_e=C;else{var A=m.return;A!==null?(_e=A,ds(A)):_e=null}break n}}Be=0,Fn=null,zi(e,n,o,5);break;case 6:Be=0,Fn=null,zi(e,n,o,6);break;case 8:Uc(),nn=6;break e;default:throw Error(l(462))}}gy();break}catch(k){km(e,k)}while(!0);return qt=Ha=null,j.H=a,j.A=r,De=t,_e!==null?0:(Ue=null,xe=0,vo(),nn)}function gy(){for(;_e!==null&&!Hv();)Dm(_e)}function Dm(e){var n=Jh(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,n===null?ds(e):_e=n}function Wm(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Fh(t,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Fh(t,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Jl(n);var a=n;a===dn&&(Ee?(Po(a),a.tag===5&&a.stateNode!=null&&(Ye=a.stateNode)):(Po(a),Ee=!0));default:em(t,n),n=_e=_f(n,Ut),n=Jh(t,n,Ut)}e.memoizedProps=e.pendingProps,n===null?ds(e):_e=n}function zi(e,n,t,a){qt=Ha=null,Jl(n),yi=null,hr=0;var r=n.return;try{if(ay(e,r,n,t,xe)){nn=1,Lo(e,et(t,e.current)),_e=null;return}}catch(o){if(r!==null)throw _e=r,o;nn=1,Lo(e,et(t,e.current)),_e=null;return}n.flags&32768?(Ee||a===1?e=!0:Ri||(xe&536870912)!==0?e=!1:(ha=e=!0,(a===2||a===9||a===3||a===6)&&(a=gn.current,a!==null&&a.tag===13&&(a.flags|=16384))),qm(n,e)):ds(n)}function ds(e){var n=e;do{if((n.flags&32768)!==0){qm(n,ha);return}e=n.return;var t=sy(n.alternate,n,Ut);if(t!==null){_e=t;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);nn===0&&(nn=5)}function qm(e,n){do{var t=ly(e.alternate,e);if(t!==null){t.flags&=32767,_e=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=t}while(e!==null);nn=6,_e=null}function Bm(e,n,t,a,r,o,d,m,C,A,k,W){e.cancelPendingCommit=null;do fs();while($e!==0);if((De&6)!==0)throw Error(l(327));if(n!==null){if(n===e.current)throw Error(l(177));e===Ue&&(_e=Ue=null,xe=0),Qa=n,ft=e,_t=t,Lc=r,xm=a,vy(e,n,t,d,m,C,W)}}function vy(e,n,t,a,r,o,d){var m=n.lanes|n.childLanes;if(Ic=m,m|=_l,Lv(e,t,m,a,r,o),Mi=null,(t&335544064)===t?(Ni=Fb(e),a=10262):(Ni=null,a=10256),(n.subtreeFlags&a)!==0||(n.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,Py($r,function(){return Xc(),null})):(e.callbackNode=null,e.callbackPriority=0),Ko=!1,a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=j.T,j.T=null,r=J.p,J.p=2,o=De,De|=4;try{cy(e,n,t)}finally{De=o,J.p=r,j.T=a}}$e=1,Ko?Ai=Ly(d,e.containerInfo,Ni,Qc,Yc,yy,Vc,Xc,by):(Qc(),Yc(),Vc())}function by(e){if($e!==0){var n=ft.onRecoverableError;n(e,{componentStack:null})}}function yy(){$e===3&&($e=0,Sm(Qa,ft),$e=4)}function Qc(){if($e===1){$e=0;var e=ft,n=Qa,t=_t,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var r=J.p;J.p=2;var o=De;De|=4;try{Er=es=!1,ym(n,e,t),t=su;var d=gf(e.containerInfo),m=t.focusedElem,C=t.selectionRange;if(d!==m&&m&&m.ownerDocument&&pf(m.ownerDocument.documentElement,m)){if(C!==null&&Sl(m)){var A=C.start,k=C.end;if(k===void 0&&(k=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(k,m.value.length);else{var W=m.ownerDocument||document,R=W&&W.defaultView||window;if(R.getSelection){var N=R.getSelection(),Y=m.textContent.length,oe=Math.min(C.start,Y),Te=C.end===void 0?oe:Math.min(C.end,Y);!N.extend&&oe>Te&&(d=Te,Te=oe,oe=d);var x=mf(m,oe),P=mf(m,Te);if(x&&P&&(N.rangeCount!==1||N.anchorNode!==x.node||N.anchorOffset!==x.offset||N.focusNode!==P.node||N.focusOffset!==P.offset)){var M=W.createRange();M.setStart(x.node,x.offset),N.removeAllRanges(),oe>Te?(N.addRange(M),N.extend(P.node,P.offset)):(M.setEnd(P.node,P.offset),N.addRange(M))}}}}for(W=[],N=m;N=N.parentNode;)N.nodeType===1&&W.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<W.length;m++){var D=W[m];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Ii=!!ou,su=ou=null}finally{De=o,J.p=r,j.T=a}}e.current=n,$e=2}}function Yc(){if($e===2){$e=0;var e=ft,n=Qa,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=j.T,j.T=null;var a=J.p;J.p=2;var r=De;De|=4;try{hm(e,n.alternate,n)}finally{De=r,J.p=a,j.T=t}}$e=3}}function Vc(){if($e===4||$e===3){$e=0;var e=Ai;Ai=null,zv();var n=ft,t=Qa,a=_t,r=xm,o=(a&335544064)===a?10262:10256;if((t.subtreeFlags&o)!==0||(t.flags&o)!==0?$e=5:($e=0,Qa=ft=null,jm(n,n.pendingLanes)),o=n.pendingLanes,o===0&&(pa=null),al(a),t=t.stateNode,Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(Vi,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=j.T,o=J.p,J.p=2,j.T=null;try{for(var d=n.onRecoverableError,m=0;m<r.length;m++){var C=r[m];d(C.value,{componentStack:C.stack})}}finally{j.T=t,J.p=o}}if(r=Mi,d=Ni,Ni=null,r!==null&&(Mi=null,d===null&&(d=[]),e!==null))for(C=0;C<r.length;C++)t=(0,r[C])(d),t!==void 0&&e.finished.finally(t);(_t&3)!==0&&fs(),Rt(n),o=n.pendingLanes,(a&261930)!==0&&(o&42)!==0?n===ls?Ar++:(Ar=0,ls=n):(Ar=0,ls=null),Mr(0)}}function jm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ur(n)))}function fs(){return Ai!==null&&(Ai.skipTransition(),Ai=null),Qc(),Yc(),Vc(),Xc()}function Xc(){if($e!==5)return!1;var e=ft,n=Ic;Ic=0;var t=al(_t),a=j.T,r=J.p;try{J.p=32>t?32:t,j.T=null,t=Lc,Lc=null;var o=ft,d=_t;if($e=0,Qa=ft=null,_t=0,(De&6)!==0)throw Error(l(331));var m=De;if(De|=4,Em(o.current),wm(o,o.current,d,t),De=m,Mr(0,!1),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(Vi,o)}catch{}return!0}finally{J.p=r,j.T=a,jm(e,n)}}function Gm(e,n,t){n=et(t,n),n=fc(e.stateNode,n,2),e=sa(e,n,2),e!==null&&(Zi(e,2),Rt(e))}function je(e,n,t){if(e.tag===3)Gm(e,e,t);else for(;n!==null;){if(n.tag===3){Gm(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pa===null||!pa.has(a))){e=et(t,e),t=Wh(2),a=sa(n,t,2),a!==null&&(qh(t,a,n,e),Zi(a,2),Rt(a));break}}n=n.return}}function Zc(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new fy;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(jc=!0,r.add(t),e=Cy.bind(null,e,n,t),n.then(e,e))}function Cy(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ue===e&&(xe&t)===t&&((nn===4||nn===3&&(xe&62914560)===xe&&300>qn()-rs)&&(De&2)===0?Hi(e,0):is|=t,xi===xe&&(xi=0)),Rt(e)}function Im(e,n){n===0&&(n=_d()),e=Ma(e,n),e!==null&&(Zi(e,n),Rt(e))}function Sy(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Im(e,t)}function wy(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(l(314))}a!==null&&a.delete(n),Im(e,t)}function Py(e,n){return $s(e,n)}var Oi=null,Di=null,Kc=!1,hs=!1,Jc=!1,va=0;function Rt(e){e!==Di&&e.next===null&&(Di===null?Oi=Di=e:Di=Di.next=e),hs=!0,Kc||(Kc=!0,Ey())}function Mr(e,n){if(!Jc&&hs){Jc=!0;do for(var t=!1,a=Oi;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var o=0;else{var d=a.suspendedLanes,m=a.pingedLanes;o=(1<<31-jn(42|e)+1)-1,o&=r&~(d&~m),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,Qm(a,o))}else o=xe,o=ao(a,a===Ue?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||Xi(a,o)||(t=!0,Qm(a,o));a=a.next}while(t);Jc=!1}}function Ty(){Lm()}function Lm(){hs=Kc=!1;var e=0;va!==0&&Dy()&&(e=va);for(var n=qn(),t=null,a=Oi;a!==null;){var r=a.next,o=Um(a,n);o===0?(a.next=null,t===null?Oi=r:t.next=r,r===null&&(Di=t)):(t=a,(e!==0||(o&3)!==0)&&(hs=!0)),a=r}$e!==0&&$e!==5||Mr(e),va!==0&&(va=0)}function Um(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var d=31-jn(o),m=1<<d,C=r[d];C===-1?((m&t)===0||(m&a)!==0)&&(r[d]=Iv(m,n)):C<=n&&(e.expiredLanes|=m),o&=~m}if(n=Ue,t=xe,t=ao(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&el(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Xi(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&el(a),al(t)){case 2:case 8:t=Pd;break;case 32:t=$r;break;case 268435456:t=Td;break;default:t=$r}return a=Fm.bind(null,e),t=$s(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&el(a),e.callbackPriority=2,e.callbackNode=null,2}function Fm(e,n){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(fs()&&e.callbackNode!==t)return null;var a=xe;return a=ao(e,e===Ue?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Mm(e,a,n),Um(e,qn()),e.callbackNode!=null&&e.callbackNode===t?Fm.bind(null,e):null)}function Qm(e,n){if(fs())return null;Mm(e,n,!0)}function Ey(){qy(function(){(De&6)!==0?$s(wd,Ty):Lm()})}function $c(){if(va===0){var e=Da;e===0&&(e=eo,eo<<=1,(eo&261888)===0&&(eo=256)),va=e}return va}function Ym(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:lo(e)}function _y(e,n,t,a,r){if(n==="submit"&&t&&t.stateNode===r){var o=Ym((r[Mn]||null).action),d=a.submitter;d&&(n=(n=d[Mn]||null)?Ym(n.formAction):d.getAttribute("formAction"),n!==null&&(o=n,d=null));var m=new ho("action","action",null,a,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(va!==0){var C=new FormData(r,d);sc(t,{pending:!0,data:C,method:r.method,action:o},null,C)}}else typeof o=="function"&&(m.preventDefault(),C=new FormData(r,d),sc(t,{pending:!0,data:C,method:r.method,action:o},o,C))},currentTarget:r}]})}}for(var eu=0;eu<El.length;eu++){var nu=El[eu],Ry=nu.toLowerCase(),xy=nu[0].toUpperCase()+nu.slice(1);lt(Ry,"on"+xy)}lt(yf,"onAnimationEnd"),lt(Cf,"onAnimationIteration"),lt(Sf,"onAnimationStart"),lt("dblclick","onDoubleClick"),lt("focusin","onFocus"),lt("focusout","onBlur"),lt(Wb,"onTransitionRun"),lt(qb,"onTransitionStart"),lt(Bb,"onTransitionCancel"),lt(wf,"onTransitionEnd"),ii("onMouseEnter",["mouseout","mouseover"]),ii("onMouseLeave",["mouseout","mouseover"]),ii("onPointerEnter",["pointerout","pointerover"]),ii("onPointerLeave",["pointerout","pointerover"]),Ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ay=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nr));function Vm(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var d=a.length-1;0<=d;d--){var m=a[d],C=m.instance,A=m.currentTarget;if(m=m.listener,C!==o&&r.isPropagationStopped())break e;o=m,r.currentTarget=A;try{o(r)}catch(k){go(k)}r.currentTarget=null,o=C}else for(d=0;d<a.length;d++){if(m=a[d],C=m.instance,A=m.currentTarget,m=m.listener,C!==o&&r.isPropagationStopped())break e;o=m,r.currentTarget=A;try{o(r)}catch(k){go(k)}r.currentTarget=null,o=C}}}}function Re(e,n){var t=n[kd];t===void 0&&(t=n[kd]=new Set);var a=e+"__bubble";t.has(a)||(Xm(n,e,2,!1),t.add(a))}function tu(e,n,t){var a=0;n&&(a|=4),Xm(t,e,a,n)}var ms="_reactListening"+Math.random().toString(36).slice(2);function au(e){if(!e[ms]){e[ms]=!0,Od.forEach(function(t){t!=="selectionchange"&&(Ay.has(t)||tu(t,!1,e),tu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ms]||(n[ms]=!0,tu("selectionchange",!1,n))}}function Xm(e,n,t,a){switch(qp(n)){case 2:var r=SC;break;case 8:r=wC;break;default:r=Pu}t=r.bind(null,n,t,e),r=void 0,!dl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function iu(e,n,t,a,r){var o=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var m=a.stateNode.containerInfo;if(m===r)break;if(d===4)for(d=a.return;d!==null;){var C=d.tag;if((C===3||C===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;m!==null;){if(d=_a(m),d===null)return;if(C=d.tag,C===5||C===6||C===26||C===27){a=o=d;continue e}m=m.parentNode}}a=a.return}Vd(function(){var A=o,k=cl(t),W=[];e:{var R=Pf.get(e);if(R!==void 0){var N=ho,Y=e;switch(e){case"keypress":if(uo(t)===0)break e;case"keydown":case"keyup":N=hb;break;case"focusin":Y="focus",N=pl;break;case"focusout":Y="blur",N=pl;break;case"beforeblur":case"afterblur":N=pl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=nb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=bb;break;case yf:case Cf:case Sf:N=ib;break;case wf:N=Cb;break;case"scroll":case"scrollend":N=$v;break;case"wheel":N=wb;break;case"copy":case"cut":case"paste":N=ob;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=$d;break;case"submit":N=gb;break;case"toggle":case"beforetoggle":N=Tb}var oe=(n&4)!==0,Te=!oe&&(e==="scroll"||e==="scrollend"),x=oe?R!==null?R+"Capture":null:R;oe=[];for(var P=A,M;P!==null;){var D=P;if(M=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||M===null||x===null||(D=$i(P,x),D!=null&&oe.push(kr(P,D,M))),Te)break;P=P.return}0<oe.length&&(R=new N(R,Y,null,t,k),W.push({event:R,listeners:oe}))}}if((n&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",N&&t!==ll&&(Y=t.relatedTarget||t.fromElement)&&(_a(Y)||Y[ni]))break e;(R||N)&&(Y=k.window===k?k:(N=k.ownerDocument)?N.defaultView||N.parentWindow:window,R?(N=t.relatedTarget||t.toElement,R=A,N=N?_a(N):null,N!==null&&(Te=f(N),oe=N.tag,N!==Te||oe!==5&&oe!==27&&oe!==6)&&(N=null)):(R=null,N=A),R!==N&&(oe=Kd,D="onMouseLeave",x="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(oe=$d,D="onPointerLeave",x="onPointerEnter",P="pointer"),Te=R==null?Y:Ji(R),M=N==null?Y:Ji(N),Y=new oe(D,P+"leave",R,t,k),Y.target=Te,Y.relatedTarget=M,D=null,_a(k)===A&&(oe=new oe(x,P+"enter",N,t,k),oe.target=M,oe.relatedTarget=Te,D=oe),Te=D,oe=R&&N?ue(R,N,My):null,R!==null&&Zm(W,Y,R,oe,!1),N!==null&&Te!==null&&Zm(W,Te,N,oe,!0)))}e:{if(R=A?Ji(A):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var ne=lf;else if(of(R))if(cf)ne=zb;else{ne=kb;var Ae=Nb}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?A&&sl(A.elementType)&&(ne=lf):ne=Hb;if(ne&&(ne=ne(e,A))){sf(W,ne,t,k);break e}Ae&&Ae(e,R,A)}switch(Ae=A?Ji(A):window,e){case"focusin":(of(Ae)||Ae.contentEditable==="true")&&(ui=Ae,wl=A,sr=null);break;case"focusout":sr=wl=ui=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,vf(W,t,k);break;case"selectionchange":if(Db)break;case"keydown":case"keyup":vf(W,t,k)}var he;if(vl)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else ci?af(e,t)&&(ge="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ge="onCompositionStart");ge&&(ef&&t.locale!=="ko"&&(ci||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&ci&&(he=Xd()):(Jt=k,fl="value"in Jt?Jt.value:Jt.textContent,ci=!0)),Ae=ps(A,ge),0<Ae.length&&(ge=new Jd(ge,e,null,t,k),W.push({event:ge,listeners:Ae}),he?ge.data=he:(he=rf(t),he!==null&&(ge.data=he)))),(he=_b?Rb(e,t):xb(e,t))&&(ge=ps(A,"onBeforeInput"),0<ge.length&&(Ae=new Jd("onBeforeInput","beforeinput",null,t,k),W.push({event:Ae,listeners:ge}),Ae.data=he)),_y(W,e,A,t,k)}Vm(W,n)})}function kr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ps(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=$i(e,t),r!=null&&a.unshift(kr(e,r,o)),r=$i(e,n),r!=null&&a.push(kr(e,r,o))),e.tag===3)return a;e=e.return}return[]}function My(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zm(e,n,t,a,r){for(var o=n._reactName,d=[];t!==null&&t!==a;){var m=t,C=m.alternate,A=m.stateNode;if(m=m.tag,C!==null&&C===a)break;m!==5&&m!==26&&m!==27||A===null||(C=A,r?(A=$i(t,o),A!=null&&d.unshift(kr(t,A,C))):r||(A=$i(t,o),A!=null&&d.push(kr(t,A,C)))),t=t.return}d.length!==0&&e.push({event:n,listeners:d})}var Ny=/\r\n?/g,ky=/\u0000|\uFFFD/g;function Km(e){return(typeof e=="string"?e:""+e).replace(Ny,`
`).replace(ky,"")}function Jm(e,n){return n=Km(n),Km(e)===n}function Ge(e,n,t,a,r,o){switch(t){case"children":if(typeof a=="string")n==="body"||n==="textarea"&&a===""||oi(e,a);else if(typeof a=="number"||typeof a=="bigint")n!=="body"&&oi(e,""+a);else return;break;case"className":so(e,"class",a);break;case"tabIndex":so(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":so(e,t,a);break;case"style":Qd(e,a,o);return;case"data":if(n!=="object"){so(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=lo(a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&Ge(e,n,"name",r.name,r,null),Ge(e,n,"formEncType",r.formEncType,r,null),Ge(e,n,"formMethod",r.formMethod,r,null),Ge(e,n,"formTarget",r.formTarget,r,null)):(Ge(e,n,"encType",r.encType,r,null),Ge(e,n,"method",r.method,r,null),Ge(e,n,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=lo(a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=vt);return;case"onScroll":a!=null&&Re("scroll",e);return;case"onScrollEnd":a!=null&&Re("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(t=a.__html,t!=null){if(r.children!=null)throw Error(l(60));o?.__html!==t&&(e.innerHTML=t)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=lo(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":Re("beforetoggle",e),Re("toggle",e),oo(e,"popover",a);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":oo(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=Kv.get(t)||t,oo(e,t,a);else return}Oe=!0}function ru(e,n,t,a,r,o){switch(t){case"style":Qd(e,a,o);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(t=a.__html,t!=null){if(r.children!=null)throw Error(l(60));o?.__html!==t&&(e.innerHTML=t)}}break;case"children":if(typeof a=="string")oi(e,a);else if(typeof a=="number"||typeof a=="bigint")oi(e,""+a);else return;break;case"onScroll":a!=null&&Re("scroll",e);return;case"onScrollEnd":a!=null&&Re("scrollend",e);return;case"onClick":a!=null&&(e.onclick=vt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Dd.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),o=t.slice(2,r?t.length-7:void 0),n=e[Mn]||null,n=n!=null?n[t]:null,typeof n=="function"&&e.removeEventListener(o,n,r),typeof a=="function")){typeof n!="function"&&n!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(o,a,r);break e}Oe=!0,t in e?e[t]=a:a===!0?e.setAttribute(t,""):oo(e,t,a)}return}Oe=!0}function yn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var a=!1,r=!1,o;for(o in t)if(t.hasOwnProperty(o)){var d=t[o];if(d!=null)switch(o){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:Ge(e,n,o,d,t,null)}}r&&Ge(e,n,"srcSet",t.srcSet,t,null),a&&Ge(e,n,"src",t.src,t,null);return;case"input":Re("invalid",e);var m=o=d=r=null,C=null,A=null;for(a in t)if(t.hasOwnProperty(a)){var k=t[a];if(k!=null)switch(a){case"name":r=k;break;case"type":d=k;break;case"checked":C=k;break;case"defaultChecked":A=k;break;case"value":o=k;break;case"defaultValue":m=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(l(137,n));break;default:Ge(e,n,a,k,t,null)}}Id(e,o,m,C,A,d,r,!1);return;case"select":Re("invalid",e),a=d=o=null;for(r in t)if(t.hasOwnProperty(r)&&(m=t[r],m!=null))switch(r){case"value":o=m;break;case"defaultValue":d=m;break;case"multiple":a=m;default:Ge(e,n,r,m,t,null)}n=o,t=d,e.multiple=!!a,n!=null?ri(e,!!a,n,!1):t!=null&&ri(e,!!a,t,!0);return;case"textarea":Re("invalid",e),o=r=a=null;for(d in t)if(t.hasOwnProperty(d)&&(m=t[d],m!=null))switch(d){case"value":a=m;break;case"defaultValue":r=m;break;case"children":o=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(l(91));break;default:Ge(e,n,d,m,t,null)}Ud(e,a,r,o);return;case"option":for(C in t)t.hasOwnProperty(C)&&(a=t[C],a!=null)&&(C==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ge(e,n,C,a,t,null));return;case"dialog":Re("beforetoggle",e),Re("toggle",e),Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(a=0;a<Nr.length;a++)Re(Nr[a],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in t)if(t.hasOwnProperty(A)&&(a=t[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:Ge(e,n,A,a,t,null)}return;default:if(sl(n)){for(k in t)t.hasOwnProperty(k)&&(a=t[k],a!==void 0&&ru(e,n,k,a,t,void 0));return}}for(m in t)t.hasOwnProperty(m)&&(a=t[m],a!=null&&Ge(e,n,m,a,t,null))}var Hy={};function zy(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,d=null,m=null,C=null,A=null,k=null;for(N in t){var W=t[N];if(t.hasOwnProperty(N)&&W!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":C=W;default:a.hasOwnProperty(N)||Ge(e,n,N,null,a,W)}}for(var R in a){var N=a[R];if(W=t[R],a.hasOwnProperty(R)&&(N!=null||W!=null))switch(R){case"type":N!==W&&(Oe=!0),o=N;break;case"name":N!==W&&(Oe=!0),r=N;break;case"checked":N!==W&&(Oe=!0),A=N;break;case"defaultChecked":N!==W&&(Oe=!0),k=N;break;case"value":N!==W&&(Oe=!0),d=N;break;case"defaultValue":N!==W&&(Oe=!0),m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(l(137,n));break;default:N!==W&&Ge(e,n,R,N,a,W)}}rl(e,d,m,C,A,k,o,r);return;case"select":N=d=m=R=null;for(o in t)if(C=t[o],t.hasOwnProperty(o)&&C!=null)switch(o){case"value":break;case"multiple":N=C;default:a.hasOwnProperty(o)||Ge(e,n,o,null,a,C)}for(r in a)if(o=a[r],C=t[r],a.hasOwnProperty(r)&&(o!=null||C!=null))switch(r){case"value":o!==C&&(Oe=!0),R=o;break;case"defaultValue":o!==C&&(Oe=!0),m=o;break;case"multiple":o!==C&&(Oe=!0),d=o;default:o!==C&&Ge(e,n,r,o,a,C)}n=m,t=d,a=N,R!=null?ri(e,!!t,R,!1):!!a!=!!t&&(n!=null?ri(e,!!t,n,!0):ri(e,!!t,t?[]:"",!1));return;case"textarea":N=R=null;for(m in t)if(r=t[m],t.hasOwnProperty(m)&&r!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Ge(e,n,m,null,a,r)}for(d in a)if(r=a[d],o=t[d],a.hasOwnProperty(d)&&(r!=null||o!=null))switch(d){case"value":r!==o&&(Oe=!0),R=r;break;case"defaultValue":r!==o&&(Oe=!0),N=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(l(91));break;default:r!==o&&Ge(e,n,d,r,a,o)}Ld(e,R,N);return;case"option":for(var Y in t)R=t[Y],t.hasOwnProperty(Y)&&R!=null&&!a.hasOwnProperty(Y)&&(Y==="selected"?e.selected=!1:Ge(e,n,Y,null,a,R));for(C in a)R=a[C],N=t[C],a.hasOwnProperty(C)&&R!==N&&(R!=null||N!=null)&&(C==="selected"?(R!==N&&(Oe=!0),e.selected=R&&typeof R!="function"&&typeof R!="symbol"):Ge(e,n,C,R,a,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in t)R=t[oe],t.hasOwnProperty(oe)&&R!=null&&!a.hasOwnProperty(oe)&&Ge(e,n,oe,null,a,R);for(A in a)if(R=a[A],N=t[A],a.hasOwnProperty(A)&&R!==N&&(R!=null||N!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(l(137,n));break;default:Ge(e,n,A,R,a,N)}return;default:if(sl(n)){for(var Te in t)R=t[Te],t.hasOwnProperty(Te)&&R!==void 0&&!a.hasOwnProperty(Te)&&ru(e,n,Te,void 0,a,R);for(k in a)R=a[k],N=t[k],!a.hasOwnProperty(k)||R===N||R===void 0&&N===void 0||ru(e,n,k,R,a,N);return}}for(var x in t)R=t[x],t.hasOwnProperty(x)&&R!=null&&!a.hasOwnProperty(x)&&Ge(e,n,x,null,a,R);for(W in a)R=a[W],N=t[W],!a.hasOwnProperty(W)||R===N||R==null&&N==null||Ge(e,n,W,R,a,N)}function $m(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Oy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var r=t[a],o=r.transferSize,d=r.initiatorType,m=r.duration;if(o&&m&&$m(d)){for(d=0,m=r.responseEnd,a+=1;a<t.length;a++){var C=t[a],A=C.startTime;if(A>m)break;var k=C.transferSize,W=C.initiatorType;k&&$m(W)&&(C=C.responseEnd,d+=k*(C<m?1:(m-A)/(C-A)))}if(--a,n+=8*(o+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ou=null,su=null;function Hr(e){return e.nodeType===9?e:e.ownerDocument}function ep(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function np(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function tp(e,n,t,a){return t=Hr(t).createElement(e),t[mn]=a,t[Mn]=n,yn(t,e,n),un(t),t}function lu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cu=null;function Dy(){var e=window.event;return e&&e.type==="popstate"?e===cu?!1:(cu=e,!0):(cu=null,!1)}var uu=typeof setTimeout=="function"?setTimeout:void 0,Wy=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,ip=typeof requestAnimationFrame=="function"?requestAnimationFrame:uu,qy=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(e){return ap.resolve(null).then(e).catch(By)}:uu;function By(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function rp(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(r),Li(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")bu(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,bu(t);for(var o=t.firstChild;o;){var d=o.nextSibling,m=o.nodeName;o[Ki]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=d}}else t==="body"&&bu(e.ownerDocument.body);t=r}while(t);Li(n)}function op(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function sp(e,n,t){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,t!=null&&(e.style.viewTransitionClass=t),t=getComputedStyle(e),t.display==="inline"){if(n=e.getClientRects(),n.length===1)var a=1;else for(var r=a=0;r<n.length;r++){var o=n[r];0<o.width&&0<o.height&&a++}a===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+t.paddingTop,e.marginBottom="-"+t.paddingBottom)}}function lp(e,n){e=e.style,n=n.style;var t=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(t=n.display,e.display=t==null||typeof t=="boolean"?"":t,t=n.margin,t!=null?e.margin=t:(t=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=t==null||typeof t=="boolean"?"":t,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function jy(e,n,t){return t=t.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=t.innerHeight&&e.left<=t.innerWidth}}function du(e){var n=e.getBoundingClientRect(),t=getComputedStyle(e);return jy(n,t,e)}function Gy(e){return e.documentElement.clientHeight}function Iy(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Ly(e,n,t,a,r,o,d,m,C){var A=n.nodeType===9?n:n.ownerDocument;try{var k=A.startViewTransition({update:function(){var R=A.defaultView,N=R.navigation&&R.navigation.transition,Y=A.fonts.status;a();var oe=[];if(Y==="loaded"&&(Gy(A),A.fonts.status==="loading"&&oe.push(A.fonts.ready)),Y=oe.length,e!==null)for(var Te=e.suspenseyImages,x=0,P=0;P<Te.length;P++){var M=Te[P];if(!M.complete){var D=M.getBoundingClientRect();if(0<D.bottom&&0<D.right&&D.top<R.innerHeight&&D.left<R.innerWidth){if(x+=Ap(M),x>bs){oe.length=Y;break}M=new Promise(Iy.bind(M)),oe.push(M)}}}if(0<oe.length)return R=Promise.race([Promise.all(oe),new Promise(function(ne){return setTimeout(ne,500)})]).then(r,r),(N?Promise.allSettled([N.finished,R]):R).then(o,o);if(r(),N)return N.finished.then(o,o);o()},types:t});A.__reactViewTransition=k;var W=[];return k.ready.then(function(){for(var R=A.documentElement.getAnimations({subtree:!0}),N=0;N<R.length;N++){var Y=R[N],oe=Y.effect,Te=oe.pseudoElement;if(Te!=null&&Te.startsWith("::view-transition")){W.push(Y),Y=oe.getKeyframes();for(var x=Te=void 0,P=!0,M=0;M<Y.length;M++){var D=Y[M],ne=D.width;if(Te===void 0)Te=ne;else if(Te!==ne){P=!1;break}if(ne=D.height,x===void 0)x=ne;else if(x!==ne){P=!1;break}delete D.width,delete D.height,D.transform==="none"&&delete D.transform}P&&Te!==void 0&&x!==void 0&&(oe.setKeyframes(Y),P=getComputedStyle(oe.target,oe.pseudoElement),P.width!==Te||P.height!==x)&&(P=Y[0],P.width=Te,P.height=x,P=Y[Y.length-1],P.width=Te,P.height=x,oe.setKeyframes(Y))}}d()},function(R){A.__reactViewTransition===k&&(A.__reactViewTransition=null);try{typeof R=="object"&&R!==null&&R.name==="InvalidStateError"&&(R.message==="View transition was skipped because document visibility state is hidden."||R.message==="Skipping view transition because document visibility state has become hidden."||R.message==="Skipping view transition because viewport size changed."||R.message==="Transition was aborted because of invalid state")&&(R=null),R!==null&&C(R)}finally{a(),r(),d()}}),k.finished.finally(function(){for(var R=0;R<W.length;R++)W[R].cancel();A.__reactViewTransition===k&&(A.__reactViewTransition=null),m()}),k}catch{return a(),r(),d(),null}}function Ya(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Ya.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Ya.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,t=e.getAnimations({subtree:!0}),a=[],r=0;r<t.length;r++){var o=t[r].effect;o!==null&&o.target===e&&o.pseudoElement===n&&a.push(t[r])}return a},Ya.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function cp(e){return{name:e,group:new Ya("group",e),imagePair:new Ya("image-pair",e),old:new Ya("old",e),new:new Ya("new",e)}}function Vn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Vn.prototype.addEventListener=function(e,n,t){var a=null,r=null;if(!(t!=null&&typeof t!="boolean"&&(a=t.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var o=this._eventListeners;if(dp(o,e,n,t)===-1){var d=this,m=n;t!=null&&typeof t!="boolean"&&t.once===!0&&(m=function(C){d.removeEventListener(e,n,t),typeof n=="function"?n.call(this,C):n.handleEvent(C)}),a!==null&&(r=d.removeEventListener.bind(d,e,n,t),a.addEventListener("abort",r,{once:!0}),r=a.removeEventListener.bind(a,"abort",r)),a=Wi(t),o.push({type:e,listener:n,optionsOrUseCapture:t,attachedListener:m,cleanup:r}),y(this._fragmentFiber.child,!1,Uy,e,m,a)}this._eventListeners=o}};function Uy(e,n,t,a){return se(e).addEventListener(n,t,a),!1}Vn.prototype.removeEventListener=function(e,n,t){var a=this._eventListeners;if(a!==null&&(n=dp(a,e,n,t),n!==-1)){var r=a[n];t=r.attachedListener;var o=r.cleanup;r=Wi(r.optionsOrUseCapture),y(this._fragmentFiber.child,!1,Fy,e,t,r),a.splice(n,1),o!==null&&o()}};function Fy(e,n,t,a){return se(e).removeEventListener(n,t,a),!1}function Wi(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function up(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function dp(e,n,t,a){if(e.length===0)return-1;a=up(a);for(var r=0;r<e.length;r++){var o=e[r];if(o.type===n&&o.listener===t&&up(o.optionsOrUseCapture)===a)return r}return-1}Vn.prototype.dispatchEvent=function(e){var n=_(this._fragmentFiber);if(n===null)return!0;n=se(n);var t=this._eventListeners;if(t!==null&&0<t.length||!e.bubbles){var a=n.nodeType===9?n.createComment(""):document.createTextNode("");if(t)for(var r=0;r<t.length;r++){var o=t[r];a.addEventListener(o.type,o.attachedListener,Wi(o.optionsOrUseCapture))}if(n.appendChild(a),e=a.dispatchEvent(e),t)for(r=0;r<t.length;r++)o=t[r],a.removeEventListener(o.type,o.attachedListener,Wi(o.optionsOrUseCapture));return n.removeChild(a),e}return n.dispatchEvent(e)},Vn.prototype.focus=function(e){y(this._fragmentFiber.child,!0,fp,e,void 0,void 0)};function fp(e,n){return e.tag===6?!1:(e=se(e),aC(e,n))}Vn.prototype.focusLast=function(e){var n=[];y(this._fragmentFiber.child,!0,fu,n,void 0,void 0);for(var t=n.length-1;0<=t&&!fp(n[t],e);t--);};function fu(e,n){return n.push(e),!1}Vn.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=se(e),e=Hr(e).activeElement,e!==null&&y(this._fragmentFiber.child,!1,Qy,e,void 0,void 0))};function Qy(e,n){return e.tag===6?!1:(e=se(e),e===n||e.contains(n)?(n.blur(),!0):!1)}Vn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),y(this._fragmentFiber.child,!1,Yy,e,void 0,void 0)};function Yy(e,n){return e.tag===6||(e=se(e),n.observe(e)),!1}Vn.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),y(this._fragmentFiber.child,!1,Vy,e,void 0,void 0);for(var t=n=0;t<ht.length;t++){var a=ht[t];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):ht[n++]=a}ht.length=n}};function Vy(e,n){return e.tag===6||(e=se(e),n.unobserve(e)),!1}var ht=[],hu=!1;function Xy(e,n,t){ht.push({fragmentInstance:e,observer:n,instance:t}),hu||(hu=!0,iC(function(){hu=!1;var a=ht;ht=[];for(var r=0;r<a.length;r++){var o=a[r];o.observer.unobserve(o.instance)}}))}Vn.prototype.getClientRects=function(){var e=[];return y(this._fragmentFiber.child,!1,Zy,e,void 0,void 0),e};function Zy(e,n){if(e.tag===6){e=e.stateNode;var t=e.ownerDocument.createRange();t.selectNodeContents(e),n.push.apply(n,t.getClientRects())}else e=se(e),n.push.apply(n,e.getClientRects());return!1}Vn.prototype.getRootNode=function(e){var n=_(this._fragmentFiber);return n===null?this:se(n).getRootNode(e)},Vn.prototype.compareDocumentPosition=function(e){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];y(this._fragmentFiber.child,!1,fu,t,void 0,void 0);var a=se(n);if(t.length===0){if(t=a,q(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(t=n)}n=this._fragmentFiber;var r=a=t.compareDocumentPosition(e);return t===e?r=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=B(n)[1],t===null?r=Node.DOCUMENT_POSITION_PRECEDING:(e=se(t).compareDocumentPosition(e),r=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),r|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=se(t[0]),r=se(t[t.length-1]);var o=q(this._fragmentFiber)?n.parentElement:a;if(o==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=o.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,o=o.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_CONTAINED_BY;var d=n.compareDocumentPosition(e),m=r.compareDocumentPosition(e),C=d&Node.DOCUMENT_POSITION_CONTAINED_BY||m&Node.DOCUMENT_POSITION_CONTAINED_BY;return m=a&&o&&d&Node.DOCUMENT_POSITION_FOLLOWING&&m&Node.DOCUMENT_POSITION_PRECEDING,n=a&&n===e||o&&r===e||C||m?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&n===e||!o&&r===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:d,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ky(n,this._fragmentFiber,t[0],t[t.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ky(e,n,t,a,r){var o=_a(r);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!o)e:{for(;o!==null;){if(o.tag===7&&(o===n||o.alternate===n)){t=!0;break e}o=o.return}t=!1}return t}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(o===null)return o=r.ownerDocument,r===o||r===o.documentElement||r===o.body;e:{for(o=n,n=_(n);o!==null;){if(!(o.tag!==5&&o.tag!==3&&o.tag!==27||o!==n&&o.alternate!==n)){o=!0;break e}o=o.return}o=!1}return o}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!o)&&!(n=o===t)&&(n=ue(t,o,Se),n===null?n=!1:(y(n,!0,ce,o,t),o=be,be=null,n=o!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!o)&&!(n=o===a)&&(n=ue(a,o,Se),n===null?n=!1:(y(n,!0,re,o,a),o=be,V=be=null,n=o!==null)),n):!1}function hp(e,n){var t=e.ownerDocument.createRange();t.selectNodeContents(e),e=t.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Vn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(l(566));var n=[];y(this._fragmentFiber.child,!1,fu,n,void 0,void 0);var t=e!==!1;if(n.length===0){var a=B(this._fragmentFiber);if(a=t?a[1]||a[0]||_(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=se(a),hp(e,t);return}if(a=se(a),a.nodeType!==9){if(a.nodeType===11){t="host"in a?a.host:null,t!==null&&t.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=t?n.length-1:0;a!==(t?-1:n.length);){var r=n[a];r.tag===6?(r=se(r),hp(r,t)):se(r).scrollIntoView(e),a+=t?-1:1}};function Jy(e,n){return e=se(e),mp(e,n),!1}function mp(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function pp(e,n){var t=n._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];e.addEventListener(r.type,r.attachedListener,Wi(r.optionsOrUseCapture))}e.nodeType!==3&&(t=n._observers,t!==null&&t.forEach(function(o){for(var d=0,m=0;m<ht.length;m++){var C=ht[m];(C.fragmentInstance!==n||C.observer!==o||C.instance!==e)&&(ht[d++]=C)}ht.length=d,o.observe(e)}),mp(e,n))}function $y(e,n){var t=n._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];e.removeEventListener(r.type,r.attachedListener,Wi(r.optionsOrUseCapture))}e.nodeType!==3&&(t=n._observers,t!==null&&t.forEach(function(o){typeof o.rootMargin=="string"?Xy(n,o,e):o.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function mu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":mu(t),ro(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function eC(e,n,t,a){for(;e.nodeType===1;){var r=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ki])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=rt(e.nextSibling),e===null)break}return null}function nC(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=rt(e.nextSibling),e===null))return null;return e}function gp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rt(e.nextSibling),e===null))return null;return e}function pu(e){return e.data==="$?"||e.data==="$~"}function gu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function tC(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function rt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var vu=null;function vp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return rt(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function bp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function aC(e,n){function t(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",t,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",t,!0)}return a}function iC(e){ip(function(){ip(function(n){return e(n)})})}function yp(e,n,t){switch(n=Hr(t),e){case"html":if(e=n.documentElement,!e)throw Error(l(452));return e;case"head":if(e=n.head,!e)throw Error(l(453));return e;case"body":if(e=n.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Cp(e,n,t){for(var a in t){var r=t[a];t.hasOwnProperty(a)&&r!=null&&Ge(e,n,a,null,Hy,r)}t.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===vt&&(e.onclick=null),ro(e)}function bu(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ro(e)}var ot=new Map,Sp=new Set;function zr(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ft=J.d;J.d={f:rC,r:oC,D:sC,C:lC,L:cC,m:uC,X:fC,S:dC,M:hC};function rC(){var e=Ft.f(),n=cs();return e||n}function oC(e){var n=ti(e);n!==null&&n.tag===5&&n.type==="form"?Ph(n):Ft.r(e)}var qi=typeof document>"u"?null:document;function wp(e,n,t){var a=qi;if(a&&typeof n=="string"&&n){var r=Jn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),Sp.has(r)||(Sp.add(r),e={rel:e,crossOrigin:t,href:n},a.querySelector(r)===null&&(n=a.createElement("link"),yn(n,"link",e),un(n),a.head.appendChild(n)))}}function sC(e){Ft.D(e),wp("dns-prefetch",e,null)}function lC(e,n){Ft.C(e,n),wp("preconnect",e,n)}function cC(e,n,t){Ft.L(e,n,t);var a=qi;if(a&&e&&n){var r='link[rel="preload"][as="'+Jn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+Jn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+Jn(t.imageSizes)+'"]')):r+='[href="'+Jn(e)+'"]';var o=r;switch(n){case"style":o=Bi(e);break;case"script":o=ji(e)}if(!(ot.has(o)||(e=L({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),ot.set(o,e),a.querySelector(r)!==null||n==="style"&&a.querySelector(Or(o))||n==="script"&&a.querySelector(Dr(o))))){var d=a.createElement("link");yn(d,"link",e),n==="style"&&(d[io]=!0,d.onload=d.onerror=function(){zd(d)}),un(d),a.head.appendChild(d)}}}function uC(e,n){Ft.m(e,n);var t=qi;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+Jn(a)+'"][href="'+Jn(e)+'"]',o=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=ji(e)}if(!ot.has(o)&&(e=L({rel:"modulepreload",href:e},n),ot.set(o,e),t.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Dr(o)))return}a=t.createElement("link"),yn(a,"link",e),un(a),t.head.appendChild(a)}}}function dC(e,n,t){Ft.S(e,n,t);var a=qi;if(a&&e){var r=ai(a).hoistableStyles,o=Bi(e);n=n||"default";var d=r.get(o);if(!d){var m={loading:0,preload:null};if(d=a.querySelector(Or(o)))m.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":n},t),(t=ot.get(o))&&yu(e,t);var C=d=a.createElement("link");un(C),yn(C,"link",e),C._p=new Promise(function(A,k){C.onload=A,C.onerror=k}),C.addEventListener("load",function(){m.loading|=1}),C.addEventListener("error",function(){m.loading|=2}),m.loading|=4,gs(d,n,a)}d={type:"stylesheet",instance:d,count:1,state:m},r.set(o,d)}}}function fC(e,n){Ft.X(e,n);var t=qi;if(t&&e){var a=ai(t).hoistableScripts,r=ji(e),o=a.get(r);o||(o=t.querySelector(Dr(r)),o||(e=L({src:e,async:!0},n),(n=ot.get(r))&&Cu(e,n),o=t.createElement("script"),un(o),yn(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function hC(e,n){Ft.M(e,n);var t=qi;if(t&&e){var a=ai(t).hoistableScripts,r=ji(e),o=a.get(r);o||(o=t.querySelector(Dr(r)),o||(e=L({src:e,async:!0,type:"module"},n),(n=ot.get(r))&&Cu(e,n),o=t.createElement("script"),un(o),yn(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function Pp(e,n,t,a){var r=(r=wn.current)?zr(r):null;if(!r)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=Bi(t.href),n=ai(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Bi(t.href);var o=ai(r).hoistableStyles,d=o.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,d),(o=r.querySelector(Or(e)))?o._p||(d.instance=o,d.state.loading=5):(o=ot.get(e),o||(o={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},ot.set(e,o)),mC(r,e,o,d.state))),n&&a===null)throw Error(l(528,""));return d}if(n&&a!==null)throw Error(l(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(t=ji(t),n=ai(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Bi(e){return'href="'+Jn(e)+'"'}function Or(e){return'link[rel="stylesheet"]['+e+"]"}function Tp(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function mC(e,n,t,a){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[io]!==!0){a.loading=1;return}}else n=e.createElement("link"),n[io]=!0,n.onload=n.onerror=zd.bind(null,n),yn(n,"link",t),un(n),e.head.appendChild(n);a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2})}function ji(e){return'[src="'+Jn(e)+'"]'}function Dr(e){return"script[async]"+e}function Ep(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Jn(t.href)+'"]');if(a)return n.instance=a,un(a),a;var r=L({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),un(a),yn(a,"style",r),gs(a,t.precedence,e),n.instance=a;case"stylesheet":r=Bi(t.href);var o=e.querySelector(Or(r));if(o)return n.state.loading|=4,n.instance=o,un(o),o;a=Tp(t),(r=ot.get(r))&&yu(a,r),o=(e.ownerDocument||e).createElement("link"),un(o);var d=o;return d._p=new Promise(function(m,C){d.onload=m,d.onerror=C}),yn(o,"link",a),n.state.loading|=4,gs(o,t.precedence,e),n.instance=o;case"script":return o=ji(t.src),(r=e.querySelector(Dr(o)))?(n.instance=r,un(r),r):(a=t,(r=ot.get(o))&&(a=L({},t),Cu(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),un(r),yn(r,"link",a),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(l(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,gs(a,t.precedence,e));return n.instance}function gs(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,o=r,d=0;d<a.length;d++){var m=a[d];if(m.dataset.precedence===n)o=m;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function yu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Cu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var vs=null;function _p(e,n,t){if(vs===null){var a=new Map,r=vs=new Map;r.set(t,a)}else r=vs,a=r.get(t),a||(a=new Map,r.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),r=0;r<t.length;r++){var o=t[r];if(!(o[Ki]||o[mn]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var d=o.getAttribute(n)||"";d=e+d;var m=a.get(d);m?m.push(o):a.set(d,[o])}}return a}function Su(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function pC(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Rp(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function xp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ap(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Mp(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=Ap(n),e.suspenseyImages.push(n)),e=bC.bind(e),n.decode().then(e,e))}function gC(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Bi(a.href),o=n.querySelector(Or(r));if(o){n=o._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Wr.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=o,un(o);return}o=n.ownerDocument||n,a=Tp(a),(r=ot.get(r))&&yu(a,r),o=o.createElement("link"),un(o);var d=o;d._p=new Promise(function(m,C){d.onload=m,d.onerror=C}),yn(o,"link",a),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Wr.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var bs=0;function vC(e,n){return e.stylesheets&&e.count===0&&Cs(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Cs(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+n);0<e.imgBytes&&bs===0&&(bs=62500*Oy());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Cs(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>bs?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function Np(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Cs(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function Wr(){this.count--,Np(this)}function bC(){this.imgCount--,Np(this)}var ys=null;function Cs(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ys=new Map,n.forEach(yC,e),ys=null,Wr.call(e))}function yC(e,n){if(!(n.state.loading&4)){var t=ys.get(e);if(t)var a=t.get(null);else{t=new Map,ys.set(e,t);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var d=r[o];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(t.set(d.dataset.precedence,d),a=d)}a&&t.set(null,a)}r=n.instance,d=r.getAttribute("data-precedence"),o=t.get(d)||a,o===a&&t.set(null,r),t.set(d,r),this.count++,a=Wr.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var Gi={$$typeof:Ce,Provider:null,Consumer:null,_currentValue:Fe,_currentValue2:Fe,_threadCount:0};function CC(e,n,t,a,r,o,d,m,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.hiddenUpdates=nl(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.transitionTypes=null,this.incompleteTransitions=new Map}function kp(e,n,t,a,r,o,d,m,C,A,k,W){return e=new CC(e,n,t,d,C,A,k,W,m),n=1,o===!0&&(n|=24),o=Nn(3,null,null,n),e.current=o,o.stateNode=e,n=Dl(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:a,isDehydrated:t,cache:n},jl(o),e}function Hp(e){return e?(e=hi,e):hi}function zp(e,n,t,a,r,o){r=Hp(r),a.context===null?a.context=r:a.pendingContext=r,a=oa(n),a.payload={element:t},o=o===void 0?null:o,o!==null&&(a.callback=o),t=sa(e,a,n),t!==null&&(On(t,e,n),mr(t,e,n))}function Op(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function wu(e,n){Op(e,n),(e=e.alternate)&&Op(e,n)}function Dp(e){if(e.tag===13||e.tag===31){var n=Ma(e,67108864);n!==null&&On(n,e,67108864),wu(e,67108864)}}function Wp(e){if(e.tag===13||e.tag===31){var n=Yn();n=tl(n);var t=Ma(e,n);t!==null&&On(t,e,n),wu(e,n)}}var Ii=!0;function SC(e,n,t,a){var r=j.T;j.T=null;var o=J.p;try{J.p=2,Pu(e,n,t,a)}finally{J.p=o,j.T=r}}function wC(e,n,t,a){var r=j.T;j.T=null;var o=J.p;try{J.p=8,Pu(e,n,t,a)}finally{J.p=o,j.T=r}}function Pu(e,n,t,a){if(Ii){var r=Tu(a);if(r===null)iu(e,n,a,Ss,t),Bp(e,a);else if(TC(r,e,n,t,a))a.stopPropagation();else if(Bp(e,a),n&4&&-1<PC.indexOf(e)){for(;r!==null;){var o=ti(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var d=Ea(o.pendingLanes);if(d!==0){var m=o;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var C=1<<31-jn(d);m.entanglements[1]|=C,d&=~C}Rt(o),(De&6)===0&&(os=qn()+500,Mr(0))}}break;case 31:case 13:m=Ma(o,2),m!==null&&On(m,o,2),cs(),wu(o,2)}if(o=Tu(a),o===null&&iu(e,n,a,Ss,t),o===r)break;r=o}r!==null&&a.stopPropagation()}else iu(e,n,a,null,t)}}function Tu(e){return e=cl(e),Eu(e)}var Ss=null;function Eu(e){if(Ss=null,e=_a(e),e!==null){var n=f(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=h(n),e!==null)return e;e=null}else if(t===31){if(e=p(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ss=e,null}function qp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ov()){case wd:return 2;case Pd:return 8;case $r:case Dv:return 32;case Td:return 268435456;default:return 32}default:return 32}}var _u=!1,ya=null,Ca=null,Sa=null,qr=new Map,Br=new Map,wa=[],PC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bp(e,n){switch(e){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":qr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(n.pointerId)}}function jr(e,n,t,a,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[r]},n!==null&&(n=ti(n),n!==null&&Dp(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function TC(e,n,t,a,r){switch(n){case"focusin":return ya=jr(ya,e,n,t,a,r),!0;case"dragenter":return Ca=jr(Ca,e,n,t,a,r),!0;case"mouseover":return Sa=jr(Sa,e,n,t,a,r),!0;case"pointerover":var o=r.pointerId;return qr.set(o,jr(qr.get(o)||null,e,n,t,a,r)),!0;case"gotpointercapture":return o=r.pointerId,Br.set(o,jr(Br.get(o)||null,e,n,t,a,r)),!0}return!1}function jp(e){var n=_a(e.target);if(n!==null){var t=f(n);if(t!==null){if(n=t.tag,n===13){if(n=h(t),n!==null){e.blockedOn=n,Nd(e.priority,function(){Wp(t)});return}}else if(n===31){if(n=p(t),n!==null){e.blockedOn=n,Nd(e.priority,function(){Wp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Tu(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);ll=a,t.target.dispatchEvent(a),ll=null}else return n=ti(t),n!==null&&Dp(n),e.blockedOn=t,!1;n.shift()}return!0}function Gp(e,n,t){ws(e)&&t.delete(n)}function EC(){_u=!1,ya!==null&&ws(ya)&&(ya=null),Ca!==null&&ws(Ca)&&(Ca=null),Sa!==null&&ws(Sa)&&(Sa=null),qr.forEach(Gp),Br.forEach(Gp)}function Ps(e,n){e.blockedOn===n&&(e.blockedOn=null,_u||(_u=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,EC)))}var Ts=null;function Ip(e){Ts!==e&&(Ts=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Ts===e&&(Ts=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],r=e[n+2];if(typeof a!="function"){if(Eu(a||t)===null)continue;break}var o=ti(t);o!==null&&(e.splice(n,3),n-=3,sc(o,{pending:!0,data:r,method:t.method,action:a},a,r))}}))}function Li(e){function n(C){return Ps(C,e)}ya!==null&&Ps(ya,e),Ca!==null&&Ps(Ca,e),Sa!==null&&Ps(Sa,e),qr.forEach(n),Br.forEach(n);for(var t=0;t<wa.length;t++){var a=wa[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<wa.length&&(t=wa[0],t.blockedOn===null);)jp(t),t.blockedOn===null&&wa.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var r=t[a],o=t[a+1],d=r[Mn]||null;if(typeof o=="function")d||Ip(t);else if(d){var m=null;if(o&&o.hasAttribute("formAction")){if(r=o,d=o[Mn]||null)m=d.formAction;else if(Eu(r)!==null)continue}else m=d.action;typeof m=="function"?t[a+1]=m:(t.splice(a,3),a-=3),Ip(t)}}}function Lp(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function Ru(e){this._internalRoot=e}Es.prototype.render=Ru.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));var t=n.current,a=Yn();zp(t,a,e,n,null,null)},Es.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zp(e.current,2,null,e,null,null),cs(),n[ni]=null}};function Es(e){this._internalRoot=e}Es.prototype.unstable_scheduleHydration=function(e){if(e){var n=Md();e={blockedOn:null,target:e,priority:n};for(var t=0;t<wa.length&&n!==0&&n<wa[t].priority;t++);wa.splice(t,0,e),t===0&&jp(e)}};var Up=s.version;if(Up!=="19.3.1")throw Error(l(527,Up,"19.3.1"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=b(n),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var _C={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_s.isDisabled&&_s.supportsFiber)try{Vi=_s.inject(_C),Bn=_s}catch{}}return Ir.createRoot=function(e,n){if(!u(e))throw Error(l(299));var t=!1,a="",r=Hh,o=zh,d=Oh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=kp(e,1,!1,null,null,t,a,null,r,o,d,Lp),e[ni]=n.current,au(e),new Ru(n)},Ir.hydrateRoot=function(e,n,t){if(!u(e))throw Error(l(299));var a=!1,r="",o=Hh,d=zh,m=Oh,C=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.formState!==void 0&&(C=t.formState)),n=kp(e,1,!0,n,t??null,a,r,C,o,d,m,Lp),n.context=Hp(null),t=n.current,a=Yn(),a=tl(a),r=oa(a),r.callback=null,sa(t,r,a),t=a,n.current.lanes=t,Zi(n,t),Rt(n),e[ni]=n.current,au(e),new Es(n)},Ir.version="19.3.1",Ir}var eg;function WC(){if(eg)return Mu.exports;eg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Mu.exports=DC(),Mu.exports}var qC=WC();function Iu(i=window.location.hash){const s=i.replace(/^#/,"")||"/",[c,l=""]=s.split("?"),u="/"+c.replace(/^\/+|\/+$/g,""),f=new URLSearchParams(l),h=f.get("embed");return{path:u,parts:u.split("/").filter(Boolean),query:f,embed:h}}function BC(){const[i,s]=pe.useState(()=>Iu());return pe.useEffect(()=>{const c=()=>s(Iu());return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),i}function ze(i,s){const c=new URLSearchParams(s||{}),l=Iu();l.embed&&!c.has("embed")&&c.set("embed",l.embed);const u=c.toString();return`#${i}${u?`?${u}`:""}`}function ks(i,s){window.location.hash=ze(i,s).slice(1)}function Hs(i,s){const c=new URL(window.location.href);return c.hash=ze(i,s),c.toString()}const Dn="./";function jC(i){const s=()=>typeof window<"u"&&window.matchMedia(i).matches,[c,l]=pe.useState(s);return pe.useEffect(()=>{const u=window.matchMedia(i),f=()=>l(u.matches);return u.addEventListener("change",f),f(),()=>u.removeEventListener("change",f)},[i]),c}var zs={exports:{}};var GC=zs.exports,ng;function IC(){return ng||(ng=1,(function(i,s){((c,l)=>{i.exports=l()})(GC,function c(){var l=typeof self<"u"?self:typeof window<"u"?window:l!==void 0?l:{},u=!l.document&&!!l.postMessage,f=l.IS_PAPA_WORKER||!1,h={},p=0,v={};function b(T){return T.charCodeAt(0)===65279?T.slice(1):T}function E(T){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(S){var H=Se(S);H.chunkSize=parseInt(H.chunkSize),S.step||S.chunk||(H.chunkSize=null),this._handle=new ie(H),(this._handle.streamer=this)._config=H}).call(this,T),this.parseChunk=function(S,H){var G=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<G){let te=this._config.newline;te||(z=this._config.quoteChar||'"',te=this._handle.guessLineEndings(S,z)),S=[...S.split(te).slice(G)].join(te)}this.isFirstChunk&&L(this._config.beforeFirstChunk)&&(z=this._config.beforeFirstChunk(S))!==void 0&&(S=z),this.isFirstChunk=!1,this._halted=!1;var G=this._partialLine+S,z=(this._partialLine="",this._handle.parse(G,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(S=z.meta.cursor,G=(this._finished||(this._partialLine=G.substring(S-this._baseIndex),this._baseIndex=S),z&&z.data&&(this._rowCount+=z.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),f)l.postMessage({results:z,workerId:v.WORKER_ID,finished:G});else if(L(this._config.chunk)&&!H){if(this._config.chunk(z,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=z=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(z.data),this._completeResults.errors=this._completeResults.errors.concat(z.errors),this._completeResults.meta=z.meta),this._completed||!G||!L(this._config.complete)||z&&z.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),G||z&&z.meta.paused||this._nextChunk(),z}this._halted=!0},this._sendError=function(S){L(this._config.error)?this._config.error(S):f&&this._config.error&&l.postMessage({workerId:v.WORKER_ID,error:S,finished:!1})}}function y(T){var S;(T=T||{}).chunkSize||(T.chunkSize=v.RemoteChunkSize),E.call(this,T),this._nextChunk=u?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(H){this._input=H,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(S=new XMLHttpRequest,this._config.withCredentials&&(S.withCredentials=this._config.withCredentials),u||(S.onload=ue(this._chunkLoaded,this),S.onerror=ue(this._chunkError,this)),S.ontimeout=ue(this._chunkTimeout,this),S.open(this._config.downloadRequestBody?"POST":"GET",this._input,!u),this._config.downloadTimeout&&!u&&(S.timeout=this._config.downloadTimeout),this._config.downloadRequestHeaders){var H,G=this._config.downloadRequestHeaders;for(H in G)S.setRequestHeader(H,G[H])}var z;this._config.chunkSize&&(z=this._start+this._config.chunkSize-1,S.setRequestHeader("Range","bytes="+this._start+"-"+z));try{S.send(this._config.downloadRequestBody)}catch(te){this._chunkError(te.message)}u&&S.status===0&&this._chunkError()}},this._chunkLoaded=function(){S.readyState===4&&(S.status<200||400<=S.status?this._chunkError():(this._start+=this._config.chunkSize||S.responseText.length,this._finished=!this._config.chunkSize||this._start>=(H=>(H=H.getResponseHeader("Content-Range"))!==null?parseInt(H.substring(H.lastIndexOf("/")+1)):-1)(S),this.parseChunk(S.responseText)))},this._chunkError=function(H){H=S.statusText||H,this._sendError(new Error(H))},this._chunkTimeout=function(){this._chunkError("Request timed out after "+this._config.downloadTimeout+"ms")}}function _(T){(T=T||{}).chunkSize||(T.chunkSize=v.LocalChunkSize),E.call(this,T);var S,H,G=typeof FileReader<"u";this.stream=function(z){this._input=z,H=z.slice||z.webkitSlice||z.mozSlice,G?((S=new FileReader).onload=ue(this._chunkLoaded,this),S.onerror=ue(this._chunkError,this)):S=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var z=this._input,te=(this._config.chunkSize&&(te=Math.min(this._start+this._config.chunkSize,this._input.size),z=H.call(z,this._start,te)),S.readAsText(z,this._config.encoding));G||this._chunkLoaded({target:{result:te}})},this._chunkLoaded=function(z){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(z.target.result)},this._chunkError=function(){this._sendError(S.error)}}function q(T){var S;E.call(this,T=T||{}),this.stream=function(H){return S=H,this._nextChunk()},this._nextChunk=function(){var H,G;if(!this._finished)return H=this._config.chunkSize,S=H?(G=S.substring(0,H),S.substring(H)):(G=S,""),this._finished=!S,this.parseChunk(G)}}function B(T){E.call(this,T=T||{});var S=[],H=!0,G=!1;this.pause=function(){E.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){E.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(z){this._input=z,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){G&&S.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),S.length?this.parseChunk(S.shift()):H=!0},this._streamData=ue(function(z){try{S.push(typeof z=="string"?z:z.toString(this._config.encoding)),H&&(H=!1,this._checkIsFinished(),this.parseChunk(S.shift()))}catch(te){this._streamError(te)}},this),this._streamError=ue(function(z){this._streamCleanUp(),this._sendError(z)},this),this._streamEnd=ue(function(){this._streamCleanUp(),G=!0,this._streamData("")},this),this._streamCleanUp=ue(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function ie(T){var S,H,G,z,te=Math.pow(2,53),we=-te,Ce=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,I=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,U=this,Z=0,Q=0,le=!1,fe=!1,F=[],K={data:[],errors:[],meta:{}};function w($){return T.skipEmptyLines==="greedy"?$.join("").trim()==="":$.length===1&&$[0].length===0}function O(){if(K&&G&&(ae("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+v.DefaultDelimiter+"'"),G=!1),T.skipEmptyLines&&(K.data=K.data.filter(function(J){return!w(J)})),X()){let J=function(Fe){F.push(Fe)};var j=J;if(K)if(Array.isArray(K.data[0])){for(var $=0;X()&&$<K.data.length;$++)K.data[$].forEach(J);K.data.splice(0,1)}else K.data.forEach(J)}function ee(J,Fe){for(var Qe=T.header?{}:[],Me=0;Me<J.length;Me++){var ve=Me,ke=J[Me],ke=((de,Ne)=>(Xe=>(T.dynamicTypingFunction&&T.dynamicTyping[Xe]===void 0&&(T.dynamicTyping[Xe]=T.dynamicTypingFunction(Xe)),(T.dynamicTyping[Xe]||T.dynamicTyping)===!0))(de)?Ne==="true"||Ne==="TRUE"||Ne!=="false"&&Ne!=="FALSE"&&((Xe=>{if(Ce.test(Xe)&&(Xe=parseFloat(Xe),we<Xe&&Xe<te))return 1})(Ne)?parseFloat(Ne):I.test(Ne)?new Date(Ne):Ne===""?null:Ne):Ne)(ve=T.header?Me>=F.length?"__parsed_extra":F[Me]:ve,ke=T.transform?T.transform(ke,ve):ke);ve==="__parsed_extra"?(Qe[ve]=Qe[ve]||[],Qe[ve].push(ke)):Qe[ve]=ke}return T.header&&(Me>F.length?ae("FieldMismatch","TooManyFields","Too many fields: expected "+F.length+" fields but parsed "+Me,Q+Fe):Me<F.length&&ae("FieldMismatch","TooFewFields","Too few fields: expected "+F.length+" fields but parsed "+Me,Q+Fe)),Qe}var me;K&&(T.header||T.dynamicTyping||T.transform)&&(me=1,!K.data.length||Array.isArray(K.data[0])?(K.data=K.data.map(ee),me=K.data.length):K.data=ee(K.data,0),T.header&&K.meta&&(K.meta.fields=F),Q+=me)}function X(){return T.header&&F.length===0}function ae($,ee,me,j){$={type:$,code:ee,message:me},j!==void 0&&($.row=j),K.errors.push($)}L(T.step)&&(z=T.step,T.step=function($){K=$,X()?O():(O(),K.data.length!==0&&(Z+=$.data.length,T.preview&&Z>T.preview?H.abort():(K.data=K.data[0],z(K,U))))}),this.parse=function($,ee,me){var j=T.quoteChar||'"',j=(T.newline||(T.newline=this.guessLineEndings($,j)),G=!1,T.delimiter?L(T.delimiter)&&(T.delimiter=T.delimiter($),K.meta.delimiter=T.delimiter):((j=((J,Fe,Qe,Me,ve)=>{var ke,de,Ne,Xe;ve=ve||[",","	","|",";",v.RECORD_SEP,v.UNIT_SEP];for(var wn=0;wn<ve.length;wn++){for(var Pn,pt=ve[wn],Ze=0,An=0,Je=0,cn=(Ne=void 0,new be({comments:Me,delimiter:pt,newline:Fe,preview:10}).parse(J)),Xn=0;Xn<cn.data.length;Xn++)Qe&&w(cn.data[Xn])?Je++:(Pn=cn.data[Xn].length,An+=Pn,Ne===void 0?Ne=Pn:0<Pn&&(Ze+=Math.abs(Pn-Ne),Ne=Pn));0<cn.data.length&&(An/=cn.data.length-Je),1.99<An&&(de===void 0||Ze<de||Ze===de&&Xe<An)&&(de=Ze,ke=pt,Xe=An)}return{successful:!!(T.delimiter=ke),bestDelimiter:ke}})($,T.newline,T.skipEmptyLines,T.comments,T.delimitersToGuess)).successful?T.delimiter=j.bestDelimiter:(G=!0,T.delimiter=v.DefaultDelimiter),K.meta.delimiter=T.delimiter),Se(T));return j.header=X(),T.preview&&T.header&&j.preview++,S=$,H=new be(j),K=H.parse(S,ee,me),O(),le?{meta:{paused:!0}}:K||{meta:{paused:!1}}},this.paused=function(){return le},this.pause=function(){le=!0,H.abort(),S=L(T.chunk)?"":S.substring(H.getCharIndex())},this.resume=function(){U.streamer._halted?(le=!1,U.streamer.parseChunk(S,!0)):setTimeout(U.resume,3)},this.aborted=function(){return fe},this.abort=function(){fe=!0,H.abort(),K.meta.aborted=!0,L(T.complete)&&T.complete(K),S=""},this.guessLineEndings=function(J,j){J=J.substring(0,1048576);var j=new RegExp(se(j)+"([^]*?)"+se(j),"gm"),me=(J=J.replace(j,"")).split("\r"),j=J.split(`
`),J=1<j.length&&j[0].length<me[0].length;if(me.length===1||J)return`
`;for(var Fe=0,Qe=0;Qe<me.length;Qe++)me[Qe][0]===`
`&&Fe++;return Fe>=me.length/2?`\r
`:"\r"}}function se(T){return T.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function be(T){var S=(T=T||{}).delimiter,H=T.newline,G=T.comments,z=T.step,te=T.preview,we=T.fastMode,Ce=null,I=!1,U=T.quoteChar==null?'"':T.quoteChar,Z=U;if(T.escapeChar!==void 0&&(Z=T.escapeChar),(typeof S!="string"||-1<v.BAD_DELIMITERS.indexOf(S))&&(S=","),G===S)throw new Error("Comment character same as delimiter");G===!0?G="#":(typeof G!="string"||-1<v.BAD_DELIMITERS.indexOf(G))&&(G=!1),H!==`
`&&H!=="\r"&&H!==`\r
`&&(H=`
`);var Q=0,le=!1;this.parse=function(fe,F,K){if(typeof fe!="string")throw new Error("Input must be a string");var w=fe.length,O=S.length,X=H.length,ae=G.length,$=L(z),ee=[],me=[],j=[],J=Q=0;if(!fe)return Ze();if(we||we!==!1&&fe.indexOf(U)===-1){for(var Fe=fe.split(H),Qe=0;Qe<Fe.length;Qe++){if(j=Fe[Qe],Q+=j.length,Qe!==Fe.length-1)Q+=H.length;else if(K)return Ze();if(!G||j.substring(0,ae)!==G){if($){if(ee=[],Xe(j.split(S)),An(),le)return Ze()}else Xe(j.split(S));if(te&&te<=Qe)return ee=ee.slice(0,te),Ze(!0)}}return Ze()}for(var Me=fe.indexOf(S,Q),ve=fe.indexOf(H,Q),ke=new RegExp(se(Z)+se(U),"g"),de=fe.indexOf(U,Q);;)if(fe[Q]===U)for(de=Q,Q++;;){if((de=fe.indexOf(U,de+1))===-1)return K||me.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ee.length,index:Q}),Pn();if(de===w-1)return Pn(fe.substring(Q,de).replace(ke,U));if(U===Z&&fe[de+1]===Z)de++;else if(U===Z||de===0||fe[de-1]!==Z){Me!==-1&&Me<de+1&&(Me=fe.indexOf(S,de+1));var Ne=wn((ve=ve!==-1&&ve<de+1?fe.indexOf(H,de+1):ve)===-1?Me:Math.min(Me,ve));if(fe.substr(de+1+Ne,O)===S){j.push(fe.substring(Q,de).replace(ke,U)),fe[Q=de+1+Ne+O]!==U&&(de=fe.indexOf(U,Q)),Me=fe.indexOf(S,Q),ve=fe.indexOf(H,Q);break}if(Ne=wn(ve),fe.substring(de+1+Ne,de+1+Ne+X)===H){if(j.push(fe.substring(Q,de).replace(ke,U)),pt(de+1+Ne+X),Me=fe.indexOf(S,Q),de=fe.indexOf(U,Q),$&&(An(),le))return Ze();if(te&&ee.length>=te)return Ze(!0);break}me.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ee.length,index:Q}),de++}}else if(G&&j.length===0&&fe.substring(Q,Q+ae)===G){if(ve===-1)return Ze();Q=ve+X,ve=fe.indexOf(H,Q),Me=fe.indexOf(S,Q)}else if(Me!==-1&&(Me<ve||ve===-1))j.push(fe.substring(Q,Me)),Q=Me+O,Me=fe.indexOf(S,Q);else{if(ve===-1)break;if(j.push(fe.substring(Q,ve)),pt(ve+X),$&&(An(),le))return Ze();if(te&&ee.length>=te)return Ze(!0)}return Pn();function Xe(Je){ee.push(Je),J=Q}function wn(Je){var cn=0;return cn=Je!==-1&&(Je=fe.substring(de+1,Je))&&Je.trim()===""?Je.length:cn}function Pn(Je){return K||(Je===void 0&&(Je=fe.substring(Q)),j.push(Je),Q=w,Xe(j),$&&An()),Ze()}function pt(Je){Q=Je,Xe(j),j=[],ve=fe.indexOf(H,Q)}function Ze(Je){if(T.header&&!F&&ee.length&&!I){var cn=ee[0],Xn=Object.create(null),Zn=new Set(cn);let $a=!1;for(let gt=0;gt<cn.length;gt++){let Kn=b(cn[gt]);if(Xn[Kn=L(T.transformHeader)?T.transformHeader(Kn,gt):Kn]){let Zt,ei=Xn[Kn];for(;Zt=Kn+"_"+ei,ei++,Zn.has(Zt););Zn.add(Zt),cn[gt]=Zt,Xn[Kn]++,$a=!0,(Ce=Ce===null?{}:Ce)[Zt]=Kn}else Xn[Kn]=1,cn[gt]=Kn;Zn.add(Kn)}$a&&console.warn("Duplicate headers found and renamed."),I=!0}return{data:ee,errors:me,meta:{delimiter:S,linebreak:H,aborted:le,truncated:!!Je,cursor:J+(F||0),renamedHeaders:Ce}}}function An(){z(Ze()),ee=[],me=[]}},this.abort=function(){le=!0},this.getCharIndex=function(){return Q}}function V(T){var S=T.data,H=h[S.workerId],G=!1;if(S.error)H.userError(S.error,S.file);else if(S.results&&S.results.data){var z={abort:function(){G=!0,ce(S.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:re,resume:re};if(L(H.userStep)){for(var te=0;te<S.results.data.length&&(H.userStep({data:S.results.data[te],errors:S.results.errors,meta:S.results.meta},z),!G);te++);delete S.results}else L(H.userChunk)&&(H.userChunk(S.results,z,S.file),delete S.results)}S.finished&&!G&&ce(S.workerId,S.results)}function ce(T,S){var H=h[T];L(H.userComplete)&&H.userComplete(S),H.terminate(),delete h[T]}function re(){throw new Error("Not implemented.")}function Se(T){if(typeof T!="object"||T===null)return T;var S,H=Array.isArray(T)?[]:{};for(S in T)H[S]=Se(T[S]);return H}function ue(T,S){return function(){T.apply(S,arguments)}}function L(T){return typeof T=="function"}return v.parse=function(T,S){var H=(S=S||{}).dynamicTyping||!1;if(L(H)&&(S.dynamicTypingFunction=H,H={}),S.dynamicTyping=H,S.transform=!!L(S.transform)&&S.transform,S.downloadTimeout!==void 0){var H=parseInt(S.downloadTimeout);if(isNaN(H))throw new Error("Config downloadTimeout value ("+S.downloadTimeout+") not parsable by parseInt(val).");S.downloadTimeout=H}if(!S.worker||!v.WORKERS_SUPPORTED)return H=null,v.NODE_STREAM_INPUT,typeof T=="string"?(T=b(T),H=new(S.download?y:q)(S)):T.readable===!0&&L(T.read)&&L(T.on)?H=new B(S):(l.File&&T instanceof File||T instanceof Object)&&(H=new _(S)),H.stream(T);(H=(()=>{var G;return!!v.WORKERS_SUPPORTED&&(G=(()=>{var z=l.URL||l.webkitURL||null,te=c.toString();return v.BLOB_URL||(v.BLOB_URL=z.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",te,")();"],{type:"text/javascript"})))})(),(G=new l.Worker(G)).onmessage=V,G.id=p++,h[G.id]=G)})()).userStep=S.step,H.userChunk=S.chunk,H.userComplete=S.complete,H.userError=S.error,S.step=L(S.step),S.chunk=L(S.chunk),S.complete=L(S.complete),S.error=L(S.error),delete S.worker,H.postMessage({input:T,config:S,workerId:H.id})},v.unparse=function(T,S){var H=!1,G=!0,z=",",te=`\r
`,we='"',Ce=we+we,I=!1,U=null,Z=!1,Q=((()=>{if(typeof S=="object"){if(typeof S.delimiter!="string"||v.BAD_DELIMITERS.filter(function(F){return S.delimiter.indexOf(F)!==-1}).length||(z=S.delimiter),typeof S.quotes!="boolean"&&typeof S.quotes!="function"&&!Array.isArray(S.quotes)||(H=S.quotes),typeof S.skipEmptyLines!="boolean"&&typeof S.skipEmptyLines!="string"||(I=S.skipEmptyLines),typeof S.newline=="string"&&(te=S.newline),typeof S.quoteChar=="string"&&(we=S.quoteChar,Ce=we+we),typeof S.header=="boolean"&&(G=S.header),Array.isArray(S.columns)){if(S.columns.length===0)throw new Error("Option columns is empty");U=S.columns}S.escapeChar!==void 0&&(Ce=S.escapeChar+we),S.escapeFormulae instanceof RegExp?Z=S.escapeFormulae:typeof S.escapeFormulae=="boolean"&&S.escapeFormulae&&(Z=/^[=+\-@\t\r].*$/)}})(),new RegExp(se(we),"g"));if(typeof T=="string"&&(T=JSON.parse(T)),Array.isArray(T)){if(!T.length||Array.isArray(T[0]))return le(null,T,I);if(typeof T[0]=="object")return le(U||Object.keys(T[0]),T,I)}else if(typeof T=="object")return typeof T.data=="string"&&(T.data=JSON.parse(T.data)),Array.isArray(T.data)&&(T.fields||(T.fields=T.meta&&T.meta.fields||U),T.fields||(T.fields=Array.isArray(T.data[0])?T.fields:typeof T.data[0]=="object"?Object.keys(T.data[0]):[]),Array.isArray(T.data[0])||typeof T.data[0]=="object"||(T.data=[T.data])),le(T.fields||[],T.data||[],I);throw new Error("Unable to serialize unrecognized input");function le(F,K,w){var O="",X=(typeof F=="string"&&(F=JSON.parse(F)),typeof K=="string"&&(K=JSON.parse(K)),Array.isArray(F)&&0<F.length),ae=!Array.isArray(K[0]);if(X&&G){for(var $=0;$<F.length;$++)0<$&&(O+=z),O+=fe(F[$],$);0<K.length&&(O+=te)}for(var ee=0;ee<K.length;ee++){var me=(X?F:K[ee]).length,j=!1,J=X?Object.keys(K[ee]).length===0:K[ee].length===0;if(w&&!X&&(j=w==="greedy"?K[ee].join("").trim()==="":K[ee].length===1&&K[ee][0].length===0),w==="greedy"&&X){for(var Fe=[],Qe=0;Qe<me;Qe++){var Me=ae?F[Qe]:Qe;Fe.push(K[ee][Me])}j=Fe.join("").trim()===""}if(!j){for(var ve=0;ve<me;ve++){0<ve&&!J&&(O+=z);var ke=X&&ae?F[ve]:ve;O+=fe(K[ee][ke],ve)}ee<K.length-1&&(!w||0<me&&!J)&&(O+=te)}}return O}function fe(F,K){var w,O,X;return F==null?"":F.constructor===Date?isNaN(F.getTime())?"":F.toISOString():(X=!1,Z&&typeof F=="string"&&Z.test(F)&&(F="'"+F,X=!0),O=(w=F.toString()).replace(Q,Ce),(X=X||H===!0||typeof H=="function"&&H(F,K)||Array.isArray(H)&&H[K]||((ae,$)=>{for(var ee=0;ee<$.length;ee++)if(-1<ae.indexOf($[ee]))return!0;return!1})(O,v.BAD_DELIMITERS)||-1<O.indexOf(z)||-1<w.indexOf(we)||O.charAt(0)===" "||O.charAt(O.length-1)===" ")?we+O+we:O)}},v.RECORD_SEP="",v.UNIT_SEP="",v.BYTE_ORDER_MARK="\uFEFF",v.BAD_DELIMITERS=["\r",`
`,'"',v.BYTE_ORDER_MARK],v.WORKERS_SUPPORTED=!u&&!!l.Worker,v.NODE_STREAM_INPUT=1,v.LocalChunkSize=10485760,v.RemoteChunkSize=5242880,v.DefaultDelimiter=",",v.Parser=be,v.ParserHandle=ie,v.NetworkStreamer=y,v.FileStreamer=_,v.StringStreamer=q,v.ReadableStreamStreamer=B,f&&(l.onmessage=function(T){T=T.data,v.WORKER_ID===void 0&&T&&(v.WORKER_ID=T.workerId),typeof T.input=="string"?l.postMessage({workerId:v.WORKER_ID,results:v.parse(T.input,T.config),finished:!0}):(l.File&&T.input instanceof File||T.input instanceof Object)&&(T=v.parse(T.input,T.config))&&l.postMessage({workerId:v.WORKER_ID,results:T,finished:!0})}),(y.prototype=Object.create(E.prototype)).constructor=y,(_.prototype=Object.create(E.prototype)).constructor=_,(q.prototype=Object.create(q.prototype)).constructor=q,(B.prototype=Object.create(E.prototype)).constructor=B,v})})(zs)),zs.exports}var LC=IC();const Dg=xC(LC);function Os(i,s){return i==null||s==null?NaN:i<s?-1:i>s?1:i>=s?0:NaN}function UC(i,s){return i==null||s==null?NaN:s<i?-1:s>i?1:s>=i?0:NaN}function Wg(i){let s,c,l;i.length!==2?(s=Os,c=(p,v)=>Os(i(p),v),l=(p,v)=>i(p)-v):(s=i===Os||i===UC?i:FC,c=i,l=i);function u(p,v,b=0,E=p.length){if(b<E){if(s(v,v)!==0)return E;do{const y=b+E>>>1;c(p[y],v)<0?b=y+1:E=y}while(b<E)}return b}function f(p,v,b=0,E=p.length){if(b<E){if(s(v,v)!==0)return E;do{const y=b+E>>>1;c(p[y],v)<=0?b=y+1:E=y}while(b<E)}return b}function h(p,v,b=0,E=p.length){const y=u(p,v,b,E-1);return y>b&&l(p[y-1],v)>-l(p[y],v)?y-1:y}return{left:u,center:h,right:f}}function FC(){return 0}function QC(i){return i===null?NaN:+i}const YC=Wg(Os),VC=YC.right;Wg(QC).center;class tg extends Map{constructor(s,c=KC){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:c}}),s!=null)for(const[l,u]of s)this.set(l,u)}get(s){return super.get(ag(this,s))}has(s){return super.has(ag(this,s))}set(s,c){return super.set(XC(this,s),c)}delete(s){return super.delete(ZC(this,s))}}function ag({_intern:i,_key:s},c){const l=s(c);return i.has(l)?i.get(l):c}function XC({_intern:i,_key:s},c){const l=s(c);return i.has(l)?i.get(l):(i.set(l,c),c)}function ZC({_intern:i,_key:s},c){const l=s(c);return i.has(l)&&(c=i.get(l),i.delete(l)),c}function KC(i){return i!==null&&typeof i=="object"?i.valueOf():i}const JC=Math.sqrt(50),$C=Math.sqrt(10),e0=Math.sqrt(2);function Bs(i,s,c){const l=(s-i)/Math.max(0,c),u=Math.floor(Math.log10(l)),f=l/Math.pow(10,u),h=f>=JC?10:f>=$C?5:f>=e0?2:1;let p,v,b;return u<0?(b=Math.pow(10,-u)/h,p=Math.round(i*b),v=Math.round(s*b),p/b<i&&++p,v/b>s&&--v,b=-b):(b=Math.pow(10,u)*h,p=Math.round(i/b),v=Math.round(s/b),p*b<i&&++p,v*b>s&&--v),v<p&&.5<=c&&c<2?Bs(i,s,c*2):[p,v,b]}function n0(i,s,c){if(s=+s,i=+i,c=+c,!(c>0))return[];if(i===s)return[i];const l=s<i,[u,f,h]=l?Bs(s,i,c):Bs(i,s,c);if(!(f>=u))return[];const p=f-u+1,v=new Array(p);if(l)if(h<0)for(let b=0;b<p;++b)v[b]=(f-b)/-h;else for(let b=0;b<p;++b)v[b]=(f-b)*h;else if(h<0)for(let b=0;b<p;++b)v[b]=(u+b)/-h;else for(let b=0;b<p;++b)v[b]=(u+b)*h;return v}function Lu(i,s,c){return s=+s,i=+i,c=+c,Bs(i,s,c)[2]}function t0(i,s,c){s=+s,i=+i,c=+c;const l=s<i,u=l?Lu(s,i,c):Lu(i,s,c);return(l?-1:1)*(u<0?1/-u:u)}function a0(i,s,c){i=+i,s=+s,c=(u=arguments.length)<2?(s=i,i=0,1):u<3?1:+c;for(var l=-1,u=Math.max(0,Math.ceil((s-i)/c))|0,f=new Array(u);++l<u;)f[l]=i+l*c;return f}function id(i,s){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(s).domain(i);break}return this}const ig=Symbol("implicit");function qg(){var i=new tg,s=[],c=[],l=ig;function u(f){let h=i.get(f);if(h===void 0){if(l!==ig)return l;i.set(f,h=s.push(f)-1)}return c[h%c.length]}return u.domain=function(f){if(!arguments.length)return s.slice();s=[],i=new tg;for(const h of f)i.has(h)||i.set(h,s.push(h)-1);return u},u.range=function(f){return arguments.length?(c=Array.from(f),u):c.slice()},u.unknown=function(f){return arguments.length?(l=f,u):l},u.copy=function(){return qg(s,c).unknown(l)},id.apply(u,arguments),u}function Bg(){var i=qg().unknown(void 0),s=i.domain,c=i.range,l=0,u=1,f,h,p=!1,v=0,b=0,E=.5;delete i.unknown;function y(){var _=s().length,q=u<l,B=q?u:l,ie=q?l:u;f=(ie-B)/Math.max(1,_-v+b*2),p&&(f=Math.floor(f)),B+=(ie-B-f*(_-v))*E,h=f*(1-v),p&&(B=Math.round(B),h=Math.round(h));var se=a0(_).map(function(be){return B+f*be});return c(q?se.reverse():se)}return i.domain=function(_){return arguments.length?(s(_),y()):s()},i.range=function(_){return arguments.length?([l,u]=_,l=+l,u=+u,y()):[l,u]},i.rangeRound=function(_){return[l,u]=_,l=+l,u=+u,p=!0,y()},i.bandwidth=function(){return h},i.step=function(){return f},i.round=function(_){return arguments.length?(p=!!_,y()):p},i.padding=function(_){return arguments.length?(v=Math.min(1,b=+_),y()):v},i.paddingInner=function(_){return arguments.length?(v=Math.min(1,_),y()):v},i.paddingOuter=function(_){return arguments.length?(b=+_,y()):b},i.align=function(_){return arguments.length?(E=Math.max(0,Math.min(1,_)),y()):E},i.copy=function(){return Bg(s(),[l,u]).round(p).paddingInner(v).paddingOuter(b).align(E)},id.apply(y(),arguments)}function rd(i,s,c){i.prototype=s.prototype=c,c.constructor=i}function jg(i,s){var c=Object.create(i.prototype);for(var l in s)c[l]=s[l];return c}function Zr(){}var Yr=.7,js=1/Yr,Qi="\\s*([+-]?\\d+)\\s*",Vr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Mt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",i0=/^#([0-9a-f]{3,8})$/,r0=new RegExp(`^rgb\\(${Qi},${Qi},${Qi}\\)$`),o0=new RegExp(`^rgb\\(${Mt},${Mt},${Mt}\\)$`),s0=new RegExp(`^rgba\\(${Qi},${Qi},${Qi},${Vr}\\)$`),l0=new RegExp(`^rgba\\(${Mt},${Mt},${Mt},${Vr}\\)$`),c0=new RegExp(`^hsl\\(${Vr},${Mt},${Mt}\\)$`),u0=new RegExp(`^hsla\\(${Vr},${Mt},${Mt},${Vr}\\)$`),rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};rd(Zr,Xr,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:og,formatHex:og,formatHex8:d0,formatHsl:f0,formatRgb:sg,toString:sg});function og(){return this.rgb().formatHex()}function d0(){return this.rgb().formatHex8()}function f0(){return Gg(this).formatHsl()}function sg(){return this.rgb().formatRgb()}function Xr(i){var s,c;return i=(i+"").trim().toLowerCase(),(s=i0.exec(i))?(c=s[1].length,s=parseInt(s[1],16),c===6?lg(s):c===3?new Wn(s>>8&15|s>>4&240,s>>4&15|s&240,(s&15)<<4|s&15,1):c===8?Rs(s>>24&255,s>>16&255,s>>8&255,(s&255)/255):c===4?Rs(s>>12&15|s>>8&240,s>>8&15|s>>4&240,s>>4&15|s&240,((s&15)<<4|s&15)/255):null):(s=r0.exec(i))?new Wn(s[1],s[2],s[3],1):(s=o0.exec(i))?new Wn(s[1]*255/100,s[2]*255/100,s[3]*255/100,1):(s=s0.exec(i))?Rs(s[1],s[2],s[3],s[4]):(s=l0.exec(i))?Rs(s[1]*255/100,s[2]*255/100,s[3]*255/100,s[4]):(s=c0.exec(i))?dg(s[1],s[2]/100,s[3]/100,1):(s=u0.exec(i))?dg(s[1],s[2]/100,s[3]/100,s[4]):rg.hasOwnProperty(i)?lg(rg[i]):i==="transparent"?new Wn(NaN,NaN,NaN,0):null}function lg(i){return new Wn(i>>16&255,i>>8&255,i&255,1)}function Rs(i,s,c,l){return l<=0&&(i=s=c=NaN),new Wn(i,s,c,l)}function h0(i){return i instanceof Zr||(i=Xr(i)),i?(i=i.rgb(),new Wn(i.r,i.g,i.b,i.opacity)):new Wn}function Uu(i,s,c,l){return arguments.length===1?h0(i):new Wn(i,s,c,l??1)}function Wn(i,s,c,l){this.r=+i,this.g=+s,this.b=+c,this.opacity=+l}rd(Wn,Uu,jg(Zr,{brighter(i){return i=i==null?js:Math.pow(js,i),new Wn(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?Yr:Math.pow(Yr,i),new Wn(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new Wn(Za(this.r),Za(this.g),Za(this.b),Gs(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:cg,formatHex:cg,formatHex8:m0,formatRgb:ug,toString:ug}));function cg(){return`#${Va(this.r)}${Va(this.g)}${Va(this.b)}`}function m0(){return`#${Va(this.r)}${Va(this.g)}${Va(this.b)}${Va((isNaN(this.opacity)?1:this.opacity)*255)}`}function ug(){const i=Gs(this.opacity);return`${i===1?"rgb(":"rgba("}${Za(this.r)}, ${Za(this.g)}, ${Za(this.b)}${i===1?")":`, ${i})`}`}function Gs(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function Za(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function Va(i){return i=Za(i),(i<16?"0":"")+i.toString(16)}function dg(i,s,c,l){return l<=0?i=s=c=NaN:c<=0||c>=1?i=s=NaN:s<=0&&(i=NaN),new mt(i,s,c,l)}function Gg(i){if(i instanceof mt)return new mt(i.h,i.s,i.l,i.opacity);if(i instanceof Zr||(i=Xr(i)),!i)return new mt;if(i instanceof mt)return i;i=i.rgb();var s=i.r/255,c=i.g/255,l=i.b/255,u=Math.min(s,c,l),f=Math.max(s,c,l),h=NaN,p=f-u,v=(f+u)/2;return p?(s===f?h=(c-l)/p+(c<l)*6:c===f?h=(l-s)/p+2:h=(s-c)/p+4,p/=v<.5?f+u:2-f-u,h*=60):p=v>0&&v<1?0:h,new mt(h,p,v,i.opacity)}function p0(i,s,c,l){return arguments.length===1?Gg(i):new mt(i,s,c,l??1)}function mt(i,s,c,l){this.h=+i,this.s=+s,this.l=+c,this.opacity=+l}rd(mt,p0,jg(Zr,{brighter(i){return i=i==null?js:Math.pow(js,i),new mt(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?Yr:Math.pow(Yr,i),new mt(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,s=isNaN(i)||isNaN(this.s)?0:this.s,c=this.l,l=c+(c<.5?c:1-c)*s,u=2*c-l;return new Wn(zu(i>=240?i-240:i+120,u,l),zu(i,u,l),zu(i<120?i+240:i-120,u,l),this.opacity)},clamp(){return new mt(fg(this.h),xs(this.s),xs(this.l),Gs(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=Gs(this.opacity);return`${i===1?"hsl(":"hsla("}${fg(this.h)}, ${xs(this.s)*100}%, ${xs(this.l)*100}%${i===1?")":`, ${i})`}`}}));function fg(i){return i=(i||0)%360,i<0?i+360:i}function xs(i){return Math.max(0,Math.min(1,i||0))}function zu(i,s,c){return(i<60?s+(c-s)*i/60:i<180?c:i<240?s+(c-s)*(240-i)/60:s)*255}const od=i=>()=>i;function g0(i,s){return function(c){return i+c*s}}function v0(i,s,c){return i=Math.pow(i,c),s=Math.pow(s,c)-i,c=1/c,function(l){return Math.pow(i+l*s,c)}}function b0(i){return(i=+i)==1?Ig:function(s,c){return c-s?v0(s,c,i):od(isNaN(s)?c:s)}}function Ig(i,s){var c=s-i;return c?g0(i,c):od(isNaN(i)?s:i)}const hg=(function i(s){var c=b0(s);function l(u,f){var h=c((u=Uu(u)).r,(f=Uu(f)).r),p=c(u.g,f.g),v=c(u.b,f.b),b=Ig(u.opacity,f.opacity);return function(E){return u.r=h(E),u.g=p(E),u.b=v(E),u.opacity=b(E),u+""}}return l.gamma=i,l})(1);function y0(i,s){s||(s=[]);var c=i?Math.min(s.length,i.length):0,l=s.slice(),u;return function(f){for(u=0;u<c;++u)l[u]=i[u]*(1-f)+s[u]*f;return l}}function C0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function S0(i,s){var c=s?s.length:0,l=i?Math.min(c,i.length):0,u=new Array(l),f=new Array(c),h;for(h=0;h<l;++h)u[h]=sd(i[h],s[h]);for(;h<c;++h)f[h]=s[h];return function(p){for(h=0;h<l;++h)f[h]=u[h](p);return f}}function w0(i,s){var c=new Date;return i=+i,s=+s,function(l){return c.setTime(i*(1-l)+s*l),c}}function Is(i,s){return i=+i,s=+s,function(c){return i*(1-c)+s*c}}function P0(i,s){var c={},l={},u;(i===null||typeof i!="object")&&(i={}),(s===null||typeof s!="object")&&(s={});for(u in s)u in i?c[u]=sd(i[u],s[u]):l[u]=s[u];return function(f){for(u in c)l[u]=c[u](f);return l}}var Fu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ou=new RegExp(Fu.source,"g");function T0(i){return function(){return i}}function E0(i){return function(s){return i(s)+""}}function _0(i,s){var c=Fu.lastIndex=Ou.lastIndex=0,l,u,f,h=-1,p=[],v=[];for(i=i+"",s=s+"";(l=Fu.exec(i))&&(u=Ou.exec(s));)(f=u.index)>c&&(f=s.slice(c,f),p[h]?p[h]+=f:p[++h]=f),(l=l[0])===(u=u[0])?p[h]?p[h]+=u:p[++h]=u:(p[++h]=null,v.push({i:h,x:Is(l,u)})),c=Ou.lastIndex;return c<s.length&&(f=s.slice(c),p[h]?p[h]+=f:p[++h]=f),p.length<2?v[0]?E0(v[0].x):T0(s):(s=v.length,function(b){for(var E=0,y;E<s;++E)p[(y=v[E]).i]=y.x(b);return p.join("")})}function sd(i,s){var c=typeof s,l;return s==null||c==="boolean"?od(s):(c==="number"?Is:c==="string"?(l=Xr(s))?(s=l,hg):_0:s instanceof Xr?hg:s instanceof Date?w0:C0(s)?y0:Array.isArray(s)?S0:typeof s.valueOf!="function"&&typeof s.toString!="function"||isNaN(s)?P0:Is)(i,s)}function R0(i,s){return i=+i,s=+s,function(c){return Math.round(i*(1-c)+s*c)}}function x0(i){return function(){return i}}function A0(i){return+i}var mg=[0,1];function Fi(i){return i}function Qu(i,s){return(s-=i=+i)?function(c){return(c-i)/s}:x0(isNaN(s)?NaN:.5)}function M0(i,s){var c;return i>s&&(c=i,i=s,s=c),function(l){return Math.max(i,Math.min(s,l))}}function N0(i,s,c){var l=i[0],u=i[1],f=s[0],h=s[1];return u<l?(l=Qu(u,l),f=c(h,f)):(l=Qu(l,u),f=c(f,h)),function(p){return f(l(p))}}function k0(i,s,c){var l=Math.min(i.length,s.length)-1,u=new Array(l),f=new Array(l),h=-1;for(i[l]<i[0]&&(i=i.slice().reverse(),s=s.slice().reverse());++h<l;)u[h]=Qu(i[h],i[h+1]),f[h]=c(s[h],s[h+1]);return function(p){var v=VC(i,p,1,l)-1;return f[v](u[v](p))}}function H0(i,s){return s.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function z0(){var i=mg,s=mg,c=sd,l,u,f,h=Fi,p,v,b;function E(){var _=Math.min(i.length,s.length);return h!==Fi&&(h=M0(i[0],i[_-1])),p=_>2?k0:N0,v=b=null,y}function y(_){return _==null||isNaN(_=+_)?f:(v||(v=p(i.map(l),s,c)))(l(h(_)))}return y.invert=function(_){return h(u((b||(b=p(s,i.map(l),Is)))(_)))},y.domain=function(_){return arguments.length?(i=Array.from(_,A0),E()):i.slice()},y.range=function(_){return arguments.length?(s=Array.from(_),E()):s.slice()},y.rangeRound=function(_){return s=Array.from(_),c=R0,E()},y.clamp=function(_){return arguments.length?(h=_?!0:Fi,E()):h!==Fi},y.interpolate=function(_){return arguments.length?(c=_,E()):c},y.unknown=function(_){return arguments.length?(f=_,y):f},function(_,q){return l=_,u=q,E()}}function O0(){return z0()(Fi,Fi)}function D0(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function Ls(i,s){if(!isFinite(i)||i===0)return null;var c=(i=s?i.toExponential(s-1):i.toExponential()).indexOf("e"),l=i.slice(0,c);return[l.length>1?l[0]+l.slice(2):l,+i.slice(c+1)]}function Yi(i){return i=Ls(Math.abs(i)),i?i[1]:NaN}function W0(i,s){return function(c,l){for(var u=c.length,f=[],h=0,p=i[0],v=0;u>0&&p>0&&(v+p+1>l&&(p=Math.max(1,l-v)),f.push(c.substring(u-=p,u+p)),!((v+=p+1)>l));)p=i[h=(h+1)%i.length];return f.reverse().join(s)}}function q0(i){return function(s){return s.replace(/[0-9]/g,function(c){return i[+c]})}}var B0=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Us(i){if(!(s=B0.exec(i)))throw new Error("invalid format: "+i);var s;return new ld({fill:s[1],align:s[2],sign:s[3],symbol:s[4],zero:s[5],width:s[6],comma:s[7],precision:s[8]&&s[8].slice(1),trim:s[9],type:s[10]})}Us.prototype=ld.prototype;function ld(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}ld.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function j0(i){e:for(var s=i.length,c=1,l=-1,u;c<s;++c)switch(i[c]){case".":l=u=c;break;case"0":l===0&&(l=c),u=c;break;default:if(!+i[c])break e;l>0&&(l=0);break}return l>0?i.slice(0,l)+i.slice(u+1):i}var Fs;function G0(i,s){var c=Ls(i,s);if(!c)return Fs=void 0,i.toPrecision(s);var l=c[0],u=c[1],f=u-(Fs=Math.max(-8,Math.min(8,Math.floor(u/3)))*3)+1,h=l.length;return f===h?l:f>h?l+new Array(f-h+1).join("0"):f>0?l.slice(0,f)+"."+l.slice(f):"0."+new Array(1-f).join("0")+Ls(i,Math.max(0,s+f-1))[0]}function pg(i,s){var c=Ls(i,s);if(!c)return i+"";var l=c[0],u=c[1];return u<0?"0."+new Array(-u).join("0")+l:l.length>u+1?l.slice(0,u+1)+"."+l.slice(u+1):l+new Array(u-l.length+2).join("0")}const gg={"%":(i,s)=>(i*100).toFixed(s),b:i=>Math.round(i).toString(2),c:i=>i+"",d:D0,e:(i,s)=>i.toExponential(s),f:(i,s)=>i.toFixed(s),g:(i,s)=>i.toPrecision(s),o:i=>Math.round(i).toString(8),p:(i,s)=>pg(i*100,s),r:pg,s:G0,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function vg(i){return i}var bg=Array.prototype.map,yg=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function I0(i){var s=i.grouping===void 0||i.thousands===void 0?vg:W0(bg.call(i.grouping,Number),i.thousands+""),c=i.currency===void 0?"":i.currency[0]+"",l=i.currency===void 0?"":i.currency[1]+"",u=i.decimal===void 0?".":i.decimal+"",f=i.numerals===void 0?vg:q0(bg.call(i.numerals,String)),h=i.percent===void 0?"%":i.percent+"",p=i.minus===void 0?"−":i.minus+"",v=i.nan===void 0?"NaN":i.nan+"";function b(y,_){y=Us(y);var q=y.fill,B=y.align,ie=y.sign,se=y.symbol,be=y.zero,V=y.width,ce=y.comma,re=y.precision,Se=y.trim,ue=y.type;ue==="n"?(ce=!0,ue="g"):gg[ue]||(re===void 0&&(re=12),Se=!0,ue="g"),(be||q==="0"&&B==="=")&&(be=!0,q="0",B="=");var L=(_&&_.prefix!==void 0?_.prefix:"")+(se==="$"?c:se==="#"&&/[boxX]/.test(ue)?"0"+ue.toLowerCase():""),T=(se==="$"?l:/[%p]/.test(ue)?h:"")+(_&&_.suffix!==void 0?_.suffix:""),S=gg[ue],H=/[defgprs%]/.test(ue);re=re===void 0?6:/[gprs]/.test(ue)?Math.max(1,Math.min(21,re)):Math.max(0,Math.min(20,re));function G(z){var te=L,we=T,Ce,I,U;if(ue==="c")we=S(z)+we,z="";else{z=+z;var Z=z<0||1/z<0;if(z=isNaN(z)?v:S(Math.abs(z),re),Se&&(z=j0(z)),Z&&+z==0&&ie!=="+"&&(Z=!1),te=(Z?ie==="("?ie:p:ie==="-"||ie==="("?"":ie)+te,we=(ue==="s"&&!isNaN(z)&&Fs!==void 0?yg[8+Fs/3]:"")+we+(Z&&ie==="("?")":""),H){for(Ce=-1,I=z.length;++Ce<I;)if(U=z.charCodeAt(Ce),48>U||U>57){we=(U===46?u+z.slice(Ce+1):z.slice(Ce))+we,z=z.slice(0,Ce);break}}}ce&&!be&&(z=s(z,1/0));var Q=te.length+z.length+we.length,le=Q<V?new Array(V-Q+1).join(q):"";switch(ce&&be&&(z=s(le+z,le.length?V-we.length:1/0),le=""),B){case"<":z=te+z+we+le;break;case"=":z=te+le+z+we;break;case"^":z=le.slice(0,Q=le.length>>1)+te+z+we+le.slice(Q);break;default:z=le+te+z+we;break}return f(z)}return G.toString=function(){return y+""},G}function E(y,_){var q=Math.max(-8,Math.min(8,Math.floor(Yi(_)/3)))*3,B=Math.pow(10,-q),ie=b((y=Us(y),y.type="f",y),{suffix:yg[8+q/3]});return function(se){return ie(B*se)}}return{format:b,formatPrefix:E}}var As,Lg,Ug;L0({thousands:",",grouping:[3],currency:["$",""]});function L0(i){return As=I0(i),Lg=As.format,Ug=As.formatPrefix,As}function U0(i){return Math.max(0,-Yi(Math.abs(i)))}function F0(i,s){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Yi(s)/3)))*3-Yi(Math.abs(i)))}function Q0(i,s){return i=Math.abs(i),s=Math.abs(s)-i,Math.max(0,Yi(s)-Yi(i))+1}function Y0(i,s,c,l){var u=t0(i,s,c),f;switch(l=Us(l??",f"),l.type){case"s":{var h=Math.max(Math.abs(i),Math.abs(s));return l.precision==null&&!isNaN(f=F0(u,h))&&(l.precision=f),Ug(l,h)}case"":case"e":case"g":case"p":case"r":{l.precision==null&&!isNaN(f=Q0(u,Math.max(Math.abs(i),Math.abs(s))))&&(l.precision=f-(l.type==="e"));break}case"f":case"%":{l.precision==null&&!isNaN(f=U0(u))&&(l.precision=f-(l.type==="%")*2);break}}return Lg(l)}function V0(i){var s=i.domain;return i.ticks=function(c){var l=s();return n0(l[0],l[l.length-1],c??10)},i.tickFormat=function(c,l){var u=s();return Y0(u[0],u[u.length-1],c??10,l)},i.nice=function(c){c==null&&(c=10);var l=s(),u=0,f=l.length-1,h=l[u],p=l[f],v,b,E=10;for(p<h&&(b=h,h=p,p=b,b=u,u=f,f=b);E-- >0;){if(b=Lu(h,p,c),b===v)return l[u]=h,l[f]=p,s(l);if(b>0)h=Math.floor(h/b)*b,p=Math.ceil(p/b)*b;else if(b<0)h=Math.ceil(h*b)/b,p=Math.floor(p*b)/b;else break;v=b}return i},i}function Fg(){var i=O0();return i.copy=function(){return H0(i,Fg())},id.apply(i,arguments),V0(i)}const X0={"Sheet and Rill Erosion":"sheet-and-rill-erosion","Wind Erosion":"wind-erosion","Ephemeral Gully Erosion":"ephemeral-gully-erosion","Classic Gully Erosion":"classic-gully-erosion","Bank Erosion from Streams, Shorelines or Water Conveyance Channels":"bank-erosion-from-streams-shorelines-or-water-conveyance-channels",Subsidence:"subsidence",Compaction:"compaction","Organic Matter Depletion":"organic-matter-depletion","Concentration of Salts or other Chemicals":"concentration-of-salts-or-other-chemicals","Soil Organism Habitat Loss or Degradation":"soil-organism-habitat-degradation","Aggregate Instability":"aggregate-instability","Ponding and Flooding":"ponding-and-flooding","Seasonal High Water Table":"seasonal-high-water-table",Seeps:"seeps","Drifted Snow":"drifted-snow","Naturally Available Moisture Use":"naturally-available-moisture-use","Surface Water Depletion":"surface-water-depletion","Groundwater Depletion":"groundwater-depletion","Inefficient Irrigation Water Use":"inefficient-irrigation-water-use","Nutrients Transported to Surface Water":"nutrients-transported-to-surface-water","Nutrients Transported to Groundwater":"nutrients-transported-to-groundwater","Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water":"pathogens-and-chemicals-from-manure-bio-solids-or-compost-applications-transported-to-surface-water","Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater":"pathogens-and-chemicals-from-manure-bio-solids-or-compost-applications-transported-to-groundwater","Sediment Transported to Surface Water":"sediment-transported-to-surface-water","Pesticides Transported to Surface Water":"pesticides-transported-to-surface-water","Pesticides Transported to Groundwater":"pesticides-transported-to-groundwater","Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water":"petroleum-heavy-metals-and-other-pollutants-transported-to-surface-water","Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater":"petroleum-heavy-metals-and-other-pollutants-transported-to-groundwater","Salts Transported to Surface Water":"salts-transported-to-surface-water","Salts Transported to Groundwater":"salts-transported-to-groundwater","Elevated water temperature":"elevated-water-temperature","Emissions of Particulate Matter (PM) and PM Precursors":"emissions-of-particulate-matter-pm-and-pm-precursors","Emissions of Greenhouse Gasses - GHGs":"emissions-of-greenhouse-gasses-ghgs","Emissions of Ozone Precursors":"emissions-of-ozone-precursors","Objectionable Odor":"objectionable-odor","Emissions of Airborne Reactive Nitrogen":"emissions-of-airborne-reactive-nitrogen","Plant Pest Pressure":"plant-pest-pressure","Plant Productivity and Health":"plant-productivity-and-health","Plant Structure and Composition":"plant-structure-and-composition","Wildfire Hazard from Biomass Accumulation":"wildfire-hazard-from-biomass-accumulation","Feed and Forage Imbalance":"feed-and-forage-imbalance","Inadequate Livestock Shelter":"inadequate-livestock-shelter","Inadequate Livestock Water Quantity, Quality and Distribution":"inadequate-livestock-water-quantity-quality-and-distribution","Terrestrial Habitat for Wildlife and Invertebrates":"terrestrial-habitat-for-wildlife-and-invertebrates","Aquatic Habitat for Fish and other Organisms":"aquatic-habitat-for-fish-and-other-organisms","Energy Efficiency of Equipment and Facilities":"energy-efficiency-of-equipment-and-facilities","Energy Efficiency of Farming/Ranching Practices and Field Operations":"energy-efficiency-of-farming-ranching-practices-and-field-operations"},Z0={"Fence ":{slug:"cp-382-fence",cp:"382",definition:"A constructed barrier to animals or people."},"Streambank and Shoreline Protection ":{slug:"cp-580-streambank-and-shoreline-protection",cp:"580",definition:"Treatment(s) used to stabilize and protect banks of streams or constructed channels and shorelines of lakes, reservoirs, or estuaries."},"Heavy Use Area Protection ":{slug:"cp-561-heavy-use-area-protection",cp:"561",definition:"Stabilization or protection of an intensively used area."},"Livestock Pipeline ":{slug:"cp-516-livestock-pipeline",cp:"516",definition:"A pipeline and appurtenances installed to convey water for livestock or wildlife."},"Prescribed Grazing (IRA)":{slug:"cp-528-prescribed-grazing",cp:"528",definition:"Managing the harvest of vegetation with grazing and/or browsing animals with the intent to achieve specific ecological, economic, and management objectives."},"Cover Crop (IRA)":{slug:"cp-340-cover-crop",cp:"340",definition:"Grasses, legumes, and forbs planted for seasonal vegetative cover."},"Tree/Shrub Establishment (IRA)":{slug:"cp-612-tree-and-shrub-establishment",cp:"612",definition:"Establishing woody plants by planting, direct seeding, or through natural regeneration."},"Brush Management ":{slug:"cp-314-brush-management",cp:"314",definition:"The management or removal of woody (nonherbaceous or succulent) plants including those that are invasive and noxious."},"Dike and Levee ":{slug:"cp-356-dike-and-levee",cp:"356",definition:"A barrier used to retain water on the landscape using a wetland dike; or, a barrier used to exclude water from the landscape and protect property and infrastructure from flooding using a flood control levee."},"Herbaceous Weed Treatment ":{slug:"cp-315-herbaceous-weed-treatment",cp:"315",definition:"The removal or control of herbaceous weeds including invasive, noxious, prohibited, or undesirable plants."},"Residue and Tillage Mgmt (No Till) (IRA)":{slug:"cp-329-residue-and-tillage-mgmt-no-till",cp:"329",definition:"Limiting soil disturbance to manage the amount, orientation and distribution of crop and plant residue on the soil surface year around."},"Residue and Tillage Mgmt (Reduced Till) (IRA)":{slug:"cp-345-residue-and-tillage-mgmt-reduced-till",cp:"345",definition:"Managing the amount, orientation, and distribution of crop and other plant residue on the soil surface year-round while limiting soil-disturbing activities used to grow and harvest crops in systems where the field surface is tilled prior to planting."},"Conservation Crop Rotation (IRA)":{slug:"cp-328-conservation-crop-rotation",cp:"328",definition:"A planned sequence of crops grown on the same ground over a period of time (i.e. the rotation cycle)."},"Wildlife Habitat Planting (IRA)":{slug:"cp-420-wildlife-habitat-planting",cp:"420",definition:"Establishing wildlife habitat by planting herbaceous vegetation or shrubs"},"Pasture and Hay Planting ":{slug:"cp-512-pasture-and-hay-planting",cp:"512",definition:"Establishing adapted and compatible species, varieties, or cultivars of perennial herbaceous plants suitable for pasture or hay production."},"Critical Area Planting (IRA)":{slug:"cp-342-critical-area-planting",cp:"342",definition:"Establishing permanent vegetation on sites that have, or are expected to have, high erosion rates, and on sites that have physical, chemical, or biological conditions that prevent the establishment of vegetation with normal seeding/planting methods."},"Range planting (IRA)":{slug:"cp-550-range-planting",cp:"550",definition:""},"Channel Bed Stabilization ":{slug:"cp-584-channel-bed-stablilization",cp:"584",definition:"Measure(s) used to stabilize the bed or bottom of a channel."},"Conservation Cover (IRA)":{slug:"cp-327-conservation-cover",cp:"327",definition:"Establishing and maintaining permanent vegetative cover"},"Access Control ":{slug:"cp-472-access-control",cp:"472",definition:"The temporary or permanent exclusion of animals, people, vehicles, and equipment from an area."},"Wetland Restoration (IRA)":{slug:"cp-657-wetland-restoration",cp:"657",definition:"The return of a wetland and its functions to a close approximation of its original condition as it existed prior to disturbance on a former or degraded wetland site."},"Watering Facility ":{slug:"cp-614-watering-facility",cp:"614",definition:""},"Riparian Forest Buffer (IRA)":{slug:"cp-391-riparian-forest-buffer",cp:"391",definition:"An area predominantly covered by trees and/or shrubs located adjacent to and up-gradient from a watercourse or water body."},"Nutrient Management (IRA)":{slug:"cp-590-nutrient-management",cp:"590",definition:"Manage rate, source, placement, and timing of plant nutrients and soil amendments while reducing environmental impacts."},"Pest Management Conservation System ":{slug:"cp-595-pest-management-conservation-system",cp:"595",definition:""},"Structures for Wildlife ":{slug:"cp-649-structures-for-wildlife",cp:"649",definition:"A structure installed to replace or modify a missing or deficient wildlife habitat component."},"Stream Crossing ":{slug:"cp-578-stream-crossing",cp:"578",definition:"A stabilized area or structure constructed across a stream to provide controlled access for people, livestock, equipment, or vehicles."},"Structure for Water Control ":{slug:"cp-587-structure-for-water-control",cp:"587",definition:"A structure in a water management system that conveys water, controls the direction or rate of flow, maintains a desired water surface elevation, or measures water."},"Stream Habitat Improvement and Management ":{slug:"cp-395-stream-habitat-improvement-and-management",cp:"395",definition:"Improve, restore, or maintain the ecological functions of a stream and its adjacent floodplain and riparian area."},"Grade Stabilization Structure ":{slug:"cp-410-grade-stabilization-structure",cp:"410",definition:"A structure used to control the grade in natural or constructed channels."},"Riparian Herbaceous Cover (IRA)":{slug:"cp-390-riparian-herbaceous-cover",cp:"390",definition:"Grasses, sedges, rushes, ferns, legumes, and forbs tolerant of intermittent flooding or saturated soils, established or managed as the dominant vegetation in the transitional zone between upland and aquatic habitats."},"Aquatic Organism Passage ":{slug:"cp-396-aquatic-organism-passage",cp:"396",definition:"Modification or removal of barriers that restrict or impede movement of aquatic organisms."},"Wetland Creation ":{slug:"cp-658-wetland-creation",cp:"658",definition:"A wetland created on a site location that was historically not a wetland."},"Wetland Enhancement ":{slug:"cp-659-wetland-enhancement",cp:"659",definition:"The augmentation of wetland functions beyond the original natural conditions on a former, degraded, or naturally functioning wetland site; sometimes at the expense of other functions."},"Wetland Wildlife Habitat Management ":{slug:"cp-644-wetland-wildlife-habitat-management",cp:"644",definition:"Retaining, developing or managing wetland habitat for wetland wildlife."},"Shallow Water Development and Management ":{slug:"cp-646-shallow-water-development-and-management",cp:"646",definition:"The inundation of lands to provide habitat for fish and/or wildlife."},"Restoration of Rare and Declining Habitats":{slug:"cp-643-restoration-of-rare-and-declining-habitats",cp:"643",definition:"Reestablishment of abiotic (physical and chemical) and biotic (biological) conditions necessary to support rare or declining natural assemblages of native plants and animals."}},At={concerns:X0,practices:Z0};function Cg(i){return i.replace(/["]+/g,"").trim()}function K0(i){const s={};for(const c of i)c.category&&(s[c.category]?s[c.category].push(Cg(c.concern)):s[c.category]=[Cg(c.concern)]);return s}async function Du(i){const s=await fetch(i).then(c=>c.text());return new Promise(c=>Dg.parse(s,{header:!0,skipEmptyLines:!0,complete:l=>c(l.data)}))}let Ms=null;async function cd(){if(Ms)return Ms;const[i,s,c,l]=await Promise.all([Du(`${Dn}data/conservation_practices_long.csv`),Du(`${Dn}data/concerns_by_category.csv`),fetch(`${Dn}data/concern_descriptions_map.json`).then(f=>f.json()),Du(`${Dn}data/conservation_practice_descriptions.csv`)]),u={};for(const f of l){const h=f["Conservation Practice"]||"",p=/^CP #(\d+)\s*\|\s*(.+?)\s*\|/.exec(h);p&&(u[p[1]]={name:p[2],definition:f.Definition||""})}return Ms={practiceConcernPairs:i.filter(f=>f.conservation_practice&&f.concern),concernsByCategory:K0(s),concernDescriptions:c,practiceDescriptions:u},Ms}function J0(i,s){const c=new Set;for(const l of i)s.includes(l.concern)&&l.value!=0&&c.add(l.conservation_practice);return c}function $0(i,s,c){return i.filter(l=>s.includes(l.concern)&&c.has(l.conservation_practice))}function eS(i){const s={};for(const c of i)c.conservation_practice in s||(s[c.conservation_practice]=0),s[c.conservation_practice]+=Number(c.value);return s}function nS(i){const s=eS(i);return i.sort((c,l)=>s[l.conservation_practice]-s[c.conservation_practice]),s}function Qg(i,s){const c=J0(i.practiceConcernPairs,s),l=$0(i.practiceConcernPairs,s,c),u=nS(l),f=[...new Set(l.map(v=>v.conservation_practice))],h=[...new Set(l.map(v=>v.concern))],p={};for(const v of l)(p[v.conservation_practice]||={})[v.concern]=Number(v.value);return{pairs:l,scores:u,practices:f,concerns:h,byPractice:p}}function tS(i,s=3){return i.practices.filter(c=>i.scores[c]>0).slice(0,s).map(c=>({name:c,score:i.scores[c],addressed:i.concerns.filter(l=>(i.byPractice[c]?.[l]??0)>0).length,worsens:i.concerns.filter(l=>(i.byPractice[c]?.[l]??0)<0).length}))}const Ds=i=>i.replace(/\(IRA\)$/,"").trim(),Yu=Fg().domain([-2,1,0,1,2,3,4,5]).range(["#ad1313","#d65151","#f2efee","#cde3ee","#8fc2dc","#4b94c4","#2265a3","#053061"]);function Vu(i){return i==1||i==0?"black":"white"}const Wu=[-2,-1,0,1,2,3,4,5];function aS(i){const s=[...new Set(i.map(u=>u.concern))],c=[["Conservation Practice",...s]],l=i.reduce((u,f)=>(u[f.conservation_practice]||(u[f.conservation_practice]={}),u[f.conservation_practice][f.concern]=f.value,u),{});for(const[u,f]of Object.entries(l)){const h=[u];for(const p of s)h.push(f[p]||"");c.push(h)}return c}function Sg(i,s="concerns.csv"){const c=Dg.unparse(aS(i),{header:!0}),l=new Blob([c],{type:"text/csv;charset=utf-8;"}),u=URL.createObjectURL(l),f=document.createElement("a");f.href=u,f.download=s,f.click(),URL.revokeObjectURL(u)}const Zs=["name","state","county","organization","role"];function Yg(i){const s=(i.get("concerns")||"").split(":").map(l=>l.trim()).filter(Boolean),c={};for(const l of Zs)c[l]=i.get(l)||"";return{concerns:s,form:c}}function Yt(i,s){const c={};for(const l of Zs)i[l]&&(c[l]=i[l]);return s.length&&(c.concerns=s.join(":")),c}const ud=i=>!!(i&&i.state&&i.county&&i.organization);function Xu(){const i=Xg()||{form:{},concerns:[]},s={...Object.fromEntries(Zs.map(u=>[u,""])),...i.form||{}},c=Array.isArray(i.concerns)?i.concerns:[],l=ud(s)&&c.length>0;return{form:s,concerns:c,complete:l,query:Yt(s,c)}}const Vg="aquacorridors-planner",Zu="aquacorridors:planner";function dd(i){try{sessionStorage.setItem(Vg,JSON.stringify(i))}catch{}window.dispatchEvent(new Event(Zu))}function Xg(){try{return JSON.parse(sessionStorage.getItem(Vg)||"null")}catch{return null}}const iS=[["AL","Alabama"],["AK","Alaska"],["AZ","Arizona"],["AR","Arkansas"],["CA","California"],["CO","Colorado"],["CT","Connecticut"],["DE","Delaware"],["DC","District Of Columbia"],["FL","Florida"],["GA","Georgia"],["HI","Hawaii"],["ID","Idaho"],["IL","Illinois"],["IN","Indiana"],["IA","Iowa"],["KS","Kansas"],["KY","Kentucky"],["LA","Louisiana"],["ME","Maine"],["MD","Maryland"],["MA","Massachusetts"],["MI","Michigan"],["MN","Minnesota"],["MS","Mississippi"],["MO","Missouri"],["MT","Montana"],["NE","Nebraska"],["NV","Nevada"],["NH","New Hampshire"],["NJ","New Jersey"],["NM","New Mexico"],["NY","New York"],["NC","North Carolina"],["ND","North Dakota"],["OH","Ohio"],["OK","Oklahoma"],["OR","Oregon"],["PA","Pennsylvania"],["RI","Rhode Island"],["SC","South Carolina"],["SD","South Dakota"],["TN","Tennessee"],["TX","Texas"],["UT","Utah"],["VT","Vermont"],["VA","Virginia"],["WA","Washington"],["WV","West Virginia"],["WI","Wisconsin"],["WY","Wyoming"],["NONE","None"]];function rS({route:i}){const s=i.parts[0]||"",c=s==="planner"?"Planner":s==="handbook"?"Handbook":"Tool Suite",l=h=>h===s?"active":"",u=oS(),f=u.complete?ze("/planner/results",u.query):ze("/planner");return g.jsxs("div",{className:"toolbar",children:[g.jsxs("a",{className:"brand",href:ze("/"),children:[g.jsx("img",{src:`${Dn}art/wlfw-logo-black.png`,alt:"Working Lands for Wildlife"}),g.jsxs("span",{children:[g.jsx("b",{children:"AquaCorridors"})," ",c]})]}),g.jsx("span",{className:"spacer"}),g.jsxs("nav",{"aria-label":"AquaCorridors tools",children:[g.jsx("a",{className:l("planner"),href:f,title:u.complete?"Your Planner results":"Open the Planner",children:u.complete?"Planner results":"Planner"}),g.jsx("a",{className:l("handbook"),href:ze("/handbook"),children:"Handbook"}),g.jsx("a",{className:l(""),href:ze("/"),children:"Overview"})]})]})}function oS(){const[i,s]=pe.useState(Xu);return pe.useEffect(()=>{const c=()=>s(Xu());return window.addEventListener(Zu,c),window.addEventListener("hashchange",c),()=>{window.removeEventListener(Zu,c),window.removeEventListener("hashchange",c)}},[]),i}function sS(){return g.jsxs("footer",{className:"footer",children:[g.jsx("span",{children:"Planner data: USDA NRCS Conservation Practice Physical Effects (CPPE) · Handbook: the AquaCorridors Handbook"}),g.jsxs("span",{className:"credit",children:["Illustrations by ",g.jsx("img",{src:`${Dn}art/erick-signature.png`,alt:"Erick Ingraham"})]})]})}function Zg({msg:i}){return i?g.jsx("div",{className:"toast",role:"status",children:i}):null}function Kg(){const[i,s]=pe.useState("");return pe.useEffect(()=>{if(!i)return;const c=setTimeout(()=>s(""),2200);return()=>clearTimeout(c)},[i]),[i,s]}async function Jg(i){try{return await navigator.clipboard.writeText(i),!0}catch{return!1}}const wg="https://archive.landscapepartnership.org/networks/working-lands-for-wildlife/landscapes-wildlife/landscapes/aquatics/maps-and-data/aquacorridors-tool-suite";function lS(){return g.jsxs(g.Fragment,{children:[g.jsx("section",{className:"section",style:{paddingTop:6},children:g.jsxs("div",{className:"hero sand",style:{minHeight:300},children:[g.jsx("div",{className:"deco",style:{right:-60,top:-60,width:260,height:130,background:"var(--lmoss)",borderRadius:"0 0 260px 260px"}}),g.jsx("img",{className:"deco art",src:`${Dn}art/watershed.jpg`,alt:"",style:{right:"-8%",bottom:"-12%",width:"min(58%,680px)"}}),g.jsxs("div",{className:"copy",style:{maxWidth:520},children:[g.jsx("div",{className:"eyebrow",children:"Working Lands for Wildlife · Aquatics"}),g.jsxs("h1",{style:{fontSize:"clamp(30px,4.6vw,50px)"},children:["The AquaCorridors",g.jsx("br",{}),"Tool Suite"]}),g.jsx("p",{className:"lede",children:"The AquaCorridor Tools aim to streamline collaboration in aquatic conservation across the eastern and central United States, empowering landscape-scale, transformative projects."}),g.jsxs("div",{className:"cluster",children:[g.jsx("a",{className:"pill river",href:ze("/planner"),children:"Start with the Planner →"}),g.jsx("a",{className:"pill",href:ze("/handbook"),children:"Browse the Handbook"})]})]})]})}),g.jsx("section",{className:"section",id:"tools",style:{paddingTop:36},children:g.jsxs("div",{className:"card-grid",style:{gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))"},children:[g.jsxs("a",{className:"tool-card river has-art",href:ze("/planner"),children:[g.jsx("span",{className:"num",children:"01 · Planner"}),g.jsx("span",{className:"t",children:"Which practices address my concerns?"}),g.jsx("p",{children:"Tell us which resource concerns you have on your land. The Planner lists the NRCS conservation practices that address them, scored with USDA's Conservation Practice Physical Effects (CPPE) data, and links each one to the Handbook."}),g.jsx("span",{className:"foot",children:g.jsx("span",{className:"pill sm sand",children:"Open the Planner →"})}),g.jsx("img",{className:"circle",src:`${Dn}art/circle-riparian-buffer.png`,alt:""})]}),g.jsxs("a",{className:"tool-card pine has-art",href:ze("/handbook"),children:[g.jsx("span",{className:"num",children:"02 · Handbook"}),g.jsx("span",{className:"t",children:"Practices, concerns, benefits, funding"}),g.jsx("p",{children:"Conservation practices, threats and resource concerns, benefits, NRCS and FSA funding programs, and a directory of other decision-support tools. Explore by benefit, by threat, or by practice."}),g.jsx("span",{className:"foot",children:g.jsx("span",{className:"pill sm sand",children:"Open the Handbook →"})}),g.jsx("img",{className:"circle",src:`${Dn}art/circle-streambank-protection.png`,alt:""})]})]})}),g.jsxs("section",{className:"section",id:"how",style:{paddingTop:44},children:[g.jsxs("div",{className:"section-head",children:[g.jsx("span",{className:"arch",style:{background:"var(--moss)"}}),g.jsx("span",{className:"title",children:"How the Planner and Handbook fit together"})]}),g.jsxs("div",{className:"row",children:[g.jsxs("div",{className:"panel lmoss",children:[g.jsx("div",{className:"ptitle",children:"1 · Pick your resource concerns"}),g.jsx("p",{className:"small",children:"The Planner's concern list is the same list of threats and resource concerns the Handbook documents. Every concern has an info button with its definition and a link to its Handbook page."})]}),g.jsxs("div",{className:"panel sand",children:[g.jsx("div",{className:"ptitle",children:"2 · See which practices help"}),g.jsx("p",{className:"small",children:"Practices are ranked by their combined CPPE effect score across the concerns you chose. The top few are called out first; the full heatmap below shows every practice with any effect."})]}),g.jsxs("div",{className:"panel",style:{background:"var(--paper)"},children:[g.jsx("div",{className:"ptitle",children:"3 · Read the Handbook page"}),g.jsx("p",{className:"small",children:"Every practice and concern in the Planner links to its Handbook page: definition, purposes, benefits, resource-concern tables, the NRCS practice standard and a short video."})]})]}),g.jsxs("div",{className:"hero lmoss",style:{minHeight:200},children:[g.jsx("div",{className:"deco",style:{right:-40,top:-40,width:240,height:120,background:"var(--sand)",borderRadius:"0 0 240px 240px"}}),g.jsx("img",{className:"deco art",src:`${Dn}art/hellbender.jpg`,alt:"Eastern Hellbender",style:{right:"-2%",top:"-4%",width:"min(46%,480px)",transform:"rotate(-9deg)"}}),g.jsxs("div",{className:"copy",children:[g.jsx("div",{className:"eyebrow",children:"Embeddable"}),g.jsx("h2",{style:{fontSize:"clamp(22px,3vw,30px)"},children:"Every Handbook page has its own link and can be framed into another site."}),g.jsxs("p",{className:"lede",children:["Open any page in the Handbook and use ",g.jsx("b",{children:"Embed"})," to copy an iframe snippet. Framed pages show the same markdown, without the site chrome."]})]})]})]}),g.jsxs("section",{className:"section",id:"more",style:{paddingTop:44},children:[g.jsxs("div",{className:"section-head",children:[g.jsx("span",{className:"arch",style:{background:"var(--lmoss)"}}),g.jsx("span",{className:"title",children:"Also in the suite · not part of this prototype"})]}),g.jsxs("div",{className:"card-grid",children:[g.jsxs("div",{className:"tool-card ph",children:[g.jsx("span",{className:"num",children:"03 · placeholder"}),g.jsx("span",{className:"t",children:"Data Layer Library"}),g.jsx("p",{children:"A curated collection of aquatic conservation datasets from agencies and NGOs. Lives on the Landscape Partnership portal and requires a login."}),g.jsx("span",{className:"foot",children:g.jsx("a",{className:"pill xs",href:`${wg}/aquacorridors-data-layer-library/aquacorridor-data-library`,target:"_blank",rel:"noopener",children:"Open on the portal ↗"})})]}),g.jsxs("div",{className:"tool-card ph",children:[g.jsx("span",{className:"num",children:"04 · placeholder"}),g.jsx("span",{className:"t",children:"Mapper"}),g.jsx("p",{children:"Explore and export data for an area of interest: at-risk species by watershed, partner priority areas, contacts and landscape conditions. Lives on the Landscape Partnership portal and requires a login."}),g.jsx("span",{className:"foot",children:g.jsx("a",{className:"pill xs",href:`${wg}/aquacorridors-mapper/aquacorridors-mapper`,target:"_blank",rel:"noopener",children:"Open on the portal ↗"})})]})]})]})]})}const cS=`
[Gloassary of Most Frequently Used USDA Acronyms HERE](https://www.usda.gov/glossary)

**Resource Concern:** A threat to the quality or quantity of an environmental resource that impacts natural ecosystems and/or agricultural function. 

**Conservation Practice:** A set of actions a landowner can do that achieve specific conservation objectives and benefits on their land. For example, doing a prescribed burn or managing brush in a field.

**AMS:** Agricultural Marketing Service
**AO:** Administrative Office
**USDA:** United States Department of Agriculture
**NRCS**: Natural Resource Conservation Services
**FAS:** Foreign Agricultural Service
**FFAS:** Farm and Foreign Agricultural Service
**FSA**: Farm Service Agency
**OC:** Office of Communications
**RD:** Rural Development`,uS=`##### Definition:
Economic benefits from NRCS conservation practices can result from improved soil health, increased crop yields, reduced input costs, enhanced resilience to extreme weather events, development of new income streams through activities like carbon trading or ecosystem services markets, and the sustained productivity of agricultural lands and natural resources over the long term.


##### Conservation Practices related to this benefit: 
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 561 - Heavy Use Area Protection]]
[[CP 516 - Livestock Pipeline]]
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 327 - Conservation Cover]]
[[CP 391 - Riparian Forest buffer]]
[[CP 590 - Nutrient Management]]
[[CP 578 - Stream Crossing]]
[[CP 587 - Structure for Water Control]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 410 - Grade Stabilization Structure]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 396 - Aquatic Organism Passage]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 646 - Shallow Water Development and Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]


























#ProducerBenefits `,dS=`##### Definition
Livestock health and production refers to the overall well-being, growth, and reproductive performance of domesticated animals raised for food, fiber, or labor. It encompasses various aspects of animal husbandry and management practices aimed at optimizing the productivity and sustainability of livestock operations.

By promoting livestock health and production through the following conservation practices, the NRCS helps reduce environmental impacts from livestock operations while supporting sustainable and productive agricultural systems. Healthier livestock result in lower methane emissions, reduced need for antibiotics and other inputs, and overall improved efficiency in the use of natural resources.

##### Conservation Practices Related to this Benefit:
[[CP 382 - Fence]]
[[CP 561 - Heavy Use Area Protection]]
[[CP 528 - Prescribed Grazing]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 578 - Stream Crossing]]








#ProducerBenefits `,fS=`##### Definition:
Plant productivity refers to the ability of plants to convert resources like water, nutrients, and sunlight into biomass, which supports various ecosystem functions and services. The NRCS promotes conservation practices that enhance plant productivity as an environmental benefit due to its role in carbon sequestration, supporting biodiversity, preventing soil erosion, improving nutrient cycling and water quality, increasing ecosystem resilience to disturbances, and enhancing soil health through biomass production and organic matter contributions.

##### Conservation Practices Related to this Benefit:
[[CP 382 - Fence]]
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 516 - Livestock Pipeline]]
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 314 - Brush Management]]
[[CP 356 - Dike and Levee]]
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 342 - Critical Area Planting]]
[[CP 472 - Access Control]]
[[CP 590 - Nutrient Management]]
[[CP 578 - Stream Crossing]]
[[CP 587 - Structure for Water Control]]
[[CP 410 - Grade Stabilization Structure]]













#ProducerBenefits `,hS=`##### Definition:
Reduced erosion refers to the minimization of soil loss or displacement caused by natural forces such as wind, water, and gravitational processes. The NRCS considers reduced erosion as an environmental benefit because it helps prevent the loss of valuable topsoil, which is crucial for maintaining soil productivity and fertility. Additionally, reduced erosion reduces sediment loads in water bodies, preventing degradation of aquatic habitats and improving water quality. By implementing conservation practices that control erosion, the NRCS aims to promote long-term soil sustainability and protect the integrity of agricultural and natural lands.

##### Conservation Practices Related to this Benefit:
[[CP 382 - Fence]]
[[CP 561 - Heavy Use Area Protection]]
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 420 - Wildlife Habitat Planting]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 342 - Critical Area Planting]]
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 327 - Conservation Cover]]
[[CP 472 - Access Control]]
[[CP 391 - Riparian Forest buffer]]
[[CP 578 - Stream Crossing]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 410 - Grade Stabilization Structure]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 396 - Aquatic Organism Passage]]
[[CP 643 - Restoration of Rare and Declining Habitats]]





















#ProducerBenefits `,mS=`##### Definition:
Soil health refers to the continued capacity of soil to function as a vital living ecosystem that sustains plants, animals, and humans. It encompasses factors such as soil fertility, water availability, biodiversity, and the ability to resist erosion and degradation. The NRCS considers promoting soil health as an environmental benefit because healthy soils provide numerous ecosystem services such as enhanced nutrient cycling, improved water infiltration and storage, increased carbon sequestration, support for biodiversity, and resilience against environmental stresses. By implementing conservation practices that build and maintain soil health, the NRCS aims to foster sustainable agricultural productivity while also delivering environmental benefits like cleaner air and water, climate change mitigation, and habitat preservation.

##### Conservation Practices Related to this Benefit:
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 561 - Heavy Use Area Protection]]
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 314 - Brush Management]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 420 - Wildlife Habitat Planting]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 342 - Critical Area Planting]]
[[CP 327 - Conservation Cover]]
[[CP 472 - Access Control]]
[[CP 590 - Nutrient Management]]
[[CP 649 - Structures for Wildlife]]
[[CP 578 - Stream Crossing]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 643 - Restoration of Rare and Declining Habitats]]


















#ProducerBenefits
`,pS=`##### Definition:
Water quantity and availability refers to the amount of water present in a given area or ecosystem, as well as its accessibility for various uses such as agricultural, industrial, and domestic purposes. The NRCS considers maintaining and improving water quantity and availability as an environmental benefit because it plays a crucial role in sustaining ecosystems, supporting biodiversity, and enabling human activities. Adequate water availability ensures the health and productivity of terrestrial and aquatic habitats, supports plant growth and agricultural production, and contributes to the overall resilience of landscapes. 

By implementing practices that promote water conservation, efficient irrigation, and watershed management, the NRCS aims to protect and enhance water resources, which provides environmental benefits such as maintaining stream flows, recharging groundwater aquifers, and preventing water scarcity and associated ecological impacts.

##### Conservation Practices Related to this Benefit:
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 516 - Livestock Pipeline]]
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 356 - Dike and Levee]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 657 - Wetland Restoration]]
[[CP 587 - Structure for Water Control]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 410 - Grade Stabilization Structure]]
[[CP 396 - Aquatic Organism Passage]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 646 - Shallow Water Development and Management]]













#ProducerBenefits `,gS=`##### Definition: 
Carbon sequestration refers to the long-term capture and storage of atmospheric carbon dioxide (CO2) in terrestrial, geological, or oceanic reservoirs. As an environmental benefit, carbon sequestration plays a crucial role in mitigating climate change by removing and storing excess CO2 from the atmosphere, thereby reducing the concentration of this greenhouse gas and its associated impacts on the global climate system. Terrestrial ecosystems, such as forests, grasslands, and soils, act as natural carbon sinks, removing CO2 from the atmosphere through photosynthesis and storing it in biomass and soil organic matter. 

The Natural Resources Conservation Service (NRCS) promotes various conservation practices, such as planting cover crops, implementing no-till farming methods, and restoring wetlands and grasslands, which can increase carbon sequestration by capturing and storing atmospheric carbon dioxide in vegetation and soils.
##### Conservation Practices related to this benefit: 
[[CP 382 - Fence]]
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 342 - Critical Area Planting]]
[[CP 327 - Conservation Cover]]
[[CP 391 - Riparian Forest buffer]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 646 - Shallow Water Development and Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]














#ClimateBenefits
`,vS=`##### Definition:
Climate resilience and adaptability refers to the ability of natural and human systems to withstand and adapt to the impacts of climate change, such as rising temperatures, changes in precipitation patterns, and increased frequency and intensity of extreme weather events. The NRCS considers promoting climate resilience and adaptability as an environmental benefit because it helps maintain ecosystem and agricultural productivity under climate stresses, protects biodiversity and habitats, enhances water resource resilience, reduces climate change risks and vulnerabilities, and supports the long-term sustainability of natural resources and their services.

By implementing conservation practices that build resilience, the NRCS aims to help ecosystems and communities better adapt to climate change. This environmental benefit safeguards valuable resources and ensures that ecosystem services, agricultural production, and other human activities can continue in a changing climate.
##### Conservation Practices Related to this Benefit:
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 420 - Wildlife Habitat Planting]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 327 - Conservation Cover]]
[[CP 657 - Wetland Restoration]]
[[CP 396 - Aquatic Organism Passage]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 646 - Shallow Water Development and Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]











#ClimateBenefits
`,bS=`##### Definition:
GHG emissions (greenhouse gas emissions) are gases in the atmosphere that absorb and emit radiant energy, trapping heat and warming the Earth's surface. The Natural Resources Conservation Service (NRCS) considers reducing greenhouse gas emissions an environmental benefit to mitigate climate change impacts, improve air quality, enable sustainable agriculture, promote carbon sequestration, and increase energy efficiency from renewable sources and conservation practices.

##### Conservation Practices Related to this Benefit:
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 342 - Critical Area Planting]]
[[CP 327 - Conservation Cover]]
[[CP 657 - Wetland Restoration]]
[[CP 391 - Riparian Forest buffer]]
[[CP 590 - Nutrient Management]]
[[CP 410 - Grade Stabilization Structure]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 646 - Shallow Water Development and Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]


















#ClimateBenefits
`,yS=`##### Definition:
Aquatic habitats refer to environments found in water bodies, such as streams, rivers, lakes, wetlands, and coastal areas. These habitats support a diverse array of organisms adapted to living in water or in close association with water bodies. Aquatic habitats provide essential resources for the survival and reproduction of aquatic organisms, including food, shelter, and breeding grounds. They also play crucial roles in various ecological processes, such as nutrient cycling, water purification, and climate regulation. Many aquatic habitats are threatened by human activities, such as pollution, overfishing, and habitat destruction, making their conservation and protection a priority.

The Natural Resources Conservation Service (NRCS) implements practices such as riparian buffer establishment, wetland restoration, streambank stabilization, and nutrient management, which help improve water quality, preserve aquatic habitats, and support the diverse range of species that depend on these aquatic environments.
##### Conservation Practices related to this benefit: 
[[CP 382 - Fence]]
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 561 - Heavy Use Area Protection]]
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 314 - Brush Management]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 420 - Wildlife Habitat Planting]]
[[CP 342 - Critical Area Planting]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 327 - Conservation Cover]]
[[CP 472 - Access Control]]
[[CP 657 - Wetland Restoration]]
[[CP 391 - Riparian Forest buffer]]
[[CP 590 - Nutrient Management]]
[[CP 649 - Structures for Wildlife]]
[[CP 578 - Stream Crossing]]
[[CP 587 - Structure for Water Control]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 410 - Grade Stabilization Structure]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 396 - Aquatic Organism Passage]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 646 - Shallow Water Development and Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]




























#Wildlifebenefits `,CS=`##### Definition:
Biodiversity refers to the rich variety of life on Earth, encompassing the diversity of species, their genetic variations, and the diversity of ecosystems they inhabit. NRCS conservation practices contribute to maintaining and enhancing biodiversity by promoting sustainable land management techniques that protect and restore natural habitats, improve soil health, reduce erosion and pollution, and provide a range of environmental benefits.

##### Conservation Practices related to this benefit: 
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 356 - Dike and Levee]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 420 - Wildlife Habitat Planting]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 342 - Critical Area Planting]]
[[CP 327 - Conservation Cover]]
[[CP 391 - Riparian Forest buffer]]
[[CP 649 - Structures for Wildlife]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 396 - Aquatic Organism Passage]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 646 - Shallow Water Development and Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]

















#Wildlifebenefits 
`,SS=`##### Definition:
Riparian condition refers to the health and functionality of the vegetated areas along rivers, streams, and other waterbodies, known as riparian zones. These areas play a crucial role in maintaining water quality, stabilizing streambanks, providing habitat for wildlife, and regulating water temperatures.

NRCS conservation practices contribute significantly to improving and maintaining riparian condition. Practices such as riparian buffers, which involve establishing vegetative strips along waterways, help filter sediments and pollutants from runoff, prevent erosion, and provide shade and habitat for aquatic species. Additionally, practices like streambank and shoreline protection, which involve using vegetation or structural measures to stabilize banks, mitigate erosion and maintain the integrity of riparian zones. Other practices like prescribed grazing and nutrient management also indirectly benefit riparian condition by reducing the impact of agricultural activities on water quality and soil health, ultimately supporting the functionality of these essential riparian ecosystems.

##### Conservation Practices related to this benefit: 
[[CP 382 - Fence]]
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 528 - Prescribed Grazing]]
[[CP 314 - Brush Management]]
[[CP 472 - Access Control]]
[[CP 391 - Riparian Forest buffer]]
[[CP 578 - Stream Crossing]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 390 - Riparian Herbaceous Cover]]










#Wildlifebenefits `,wS=`
##### Definition: 
Streambank and shoreline condition refers to the physical and ecological integrity of the banks and shores along rivers, streams, lakes, and other waterbodies. Healthy streambanks and shorelines are essential for preventing excessive erosion, maintaining water quality, and providing habitat for aquatic and terrestrial species. NRCS conservation practices play a vital role in protecting and improving streambank and shoreline condition. Practices like streambank and shoreline protection, which involve using vegetation, bioengineering techniques, or structural measures to stabilize banks and shores, directly address erosion and habitat loss issues. Additionally, riparian buffers and filter strips help filter sediments and pollutants before they reach waterbodies, while practices like prescribed grazing and nutrient management regulate activities that could degrade streambanks and shorelines. 

By implementing these conservation practices, landowners and land managers can safeguard the integrity of streambanks and shorelines, benefiting water quality, wildlife habitat, and overall ecosystem health.

##### Conservation Practices related to this benefit: 
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 528 - Prescribed Grazing]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 472 - Access Control]]
[[CP 391 - Riparian Forest buffer]]
[[CP 578 - Stream Crossing]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 390 - Riparian Herbaceous Cover]]








#Wildlifebenefits `,PS=`##### Definition: 
A terrestrial habitat is an environment found on land that provides the necessary conditions and resources for organisms to live and thrive. It encompasses a wide range of ecosystems, from forests, grasslands. deserts and polar regions to man-made land environments like farms, agricultural fields, orchards, and vineyards. Terrestrial habitats provide essential resources for the survival and reproduction of organisms, including food, water, shelter, and breeding grounds. They also play crucial roles in various ecological processes, such as nutrient cycling, water filtration, and climate regulation.

The Natural Resources Conservation Service (NRCS) implements various conservation practices that aim to protect, enhance, and create terrestrial habitats on agricultural lands and other working landscapes.

##### Conservation Practices related to this benefit: 
[[CP 382 - Fence]]
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 516 - Livestock Pipeline]]
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 314 - Brush Management]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 420 - Wildlife Habitat Planting]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 342 - Critical Area Planting]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 327 - Conservation Cover]]
[[CP 472 - Access Control]]
[[CP 391 - Riparian Forest buffer]]
[[CP 649 - Structures for Wildlife]]
[[CP 578 - Stream Crossing]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 643 - Restoration of Rare and Declining Habitats]]
















#Wildlifebenefits `,TS=`##### Definition: 
Water quality refers to the chemical, physical, and biological characteristics of water bodies. It encompasses the suitability of water for various uses, including drinking, recreation, and supporting aquatic ecosystems. NRCS efforts to improve water quality focus on reducing pollution from agricultural runoff, erosion control, and protecting watersheds to ensure clean, safe water resources for both human use and environmental health.

##### Conservation Practices related to this benefit: 
[[CP 382 - Fence]]
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 561 - Heavy Use Area Protection]]
[[CP 516 - Livestock Pipeline]]
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 314 - Brush Management]]
[[CP 356 - Dike and Levee]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 420 - Wildlife Habitat Planting]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 342 - Critical Area Planting]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 327 - Conservation Cover]]
[[CP 472 - Access Control]]
[[CP 657 - Wetland Restoration]]
[[CP 391 - Riparian Forest buffer]]
[[CP 590 - Nutrient Management]]
[[CP 649 - Structures for Wildlife]]
[[CP 578 - Stream Crossing]]
[[CP 587 - Structure for Water Control]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 410 - Grade Stabilization Structure]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 646 - Shallow Water Development and Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]





























#Wildlifebenefits 



`,ES=`##### Definition: 
Wetlands conservation refers to the protection, restoration, and management of wetland ecosystems. These efforts aim to preserve or enhance the natural functions of wetlands, including water filtration, flood control, wildlife habitat provision, and carbon sequestration. NRCS programs support landowners in maintaining or improving wetlands on their property, recognizing the crucial role these ecosystems play in overall environmental health and biodiversity.

##### Conservation Practices related to this benefit: 
[[CP 382 - Fence]]
[[CP 314 - Brush Management]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 657 - Wetland Restoration]]
[[CP 587 - Structure for Water Control]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 646 - Shallow Water Development and Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]











#Wildlifebenefits `,_S=`##### Definition: 
Wildlife ecosystem and connectivity refers to the preservation and enhancement of natural habitats and the pathways that link them. This concept focuses on maintaining diverse, interconnected landscapes that allow wildlife to move freely, access resources, and maintain genetic diversity. NRCS programs support practices that create or improve wildlife habitats, establish corridors between fragmented areas, and promote land management techniques that benefit both agricultural productivity and wildlife conservation.
##### Conservation Practices related to this benefit: 
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 356 - Dike and Levee]]
[[CP 420 - Wildlife Habitat Planting]]
[[CP 342 - Critical Area Planting]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 327 - Conservation Cover]]
[[CP 657 - Wetland Restoration]]
[[CP 391 - Riparian Forest buffer]]
[[CP 649 - Structures for Wildlife]]
[[CP 578 - Stream Crossing]]
[[CP 587 - Structure for Water Control]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 410 - Grade Stabilization Structure]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 396 - Aquatic Organism Passage]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 646 - Shallow Water Development and Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]






















#Wildlifebenefits 

`,RS=`### **Practice Definition**
##### The management or removal of woody (nonherbaceous or succulent) plants including those that are invasive and noxious.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jUIWOaa7vw4?si=xkN7Zl-FEX24Huem" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Create the desired plant community consistent with the ecological site or a desired state within the site description. 
- Restore or release desired vegetative cover to protect soils, control erosion, reduce sediment, improve water quality, or enhance hydrology. 
- Maintain, modify, or enhance fish and wildlife habitat. 
- Improve forage accessibility, quality, and quantity for livestock and wildlife. 
- Manage fuel loads to achieve desired conditions. 
- Pervasive plant species are controlled to a desired level of treatment that will ultimately contribute to creation or maintenance of an ecological site description “steady state” addressing the need for forage, wildlife habitat, and/or water quality.
---
### **Benefits** 
The following benefits are associated with this practice
[[🌾Soil Health]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🦪 Wetlands Conservation]]
[[🌾Plant Productivity]]
[[🦪 Riparian Condition]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement            | (4) Substantial to Moderate Improvement          |
| :------------------------------------- | :----------------------------------------------- |
| [[🐄 Plant Productivity and Health]]   | [[🐄 Feed and Forage Imbalance]]                 |
| [[🐄 Plant Pest Pressure]]             | [[⚠️ Wildfire Hazard from Biomass Accumulation]] |
| [[🐄 Plant Structure and Composition]] |                                                  |


> *This practice also addresses the following conservation resource concerns to a lesser degree:*

| (3) Moderate Improvement                                  | (2) Moderate to Slight Improvement          | (1) Slight Improvement                      |
| :-------------------------------------------------------- | :------------------------------------------ | :------------------------------------------ |
| [[🏞️ Sheet and Rill Erosion]]                            | [[💧Sediment Transported to Surface Water]] | [[💧Surface Water Depletion]]               |
| [[🏞️ Wind Erosion]]                                      | [[💧Naturally Available Moisture Use]]      | [[⚡️Emissions of Greenhouse Gasses (GHGs)]] |
| [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] |                                             | [[🏞️ Ponding and Flooding]]                |
| [[🏞️ Ephemeral Gully Erosion]]                           |                                             |                                             |

> *This practice slightly exacerbates the following resource concerns:*
> *  [[💧Pesticides Transported to Surface Water]] 
---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/brush-management-ac-314-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/brush-management-ac-314-conservation-practice-standard) shows the potential effects of implementing this practice.

![[Screenshot 2024-04-22 at 3.55.00 PM.png]]
`,xS=`### **Practice Definition**
##### The removal or control of herbaceous weeds including invasive, noxious, prohibited, or undesirable plants.

### **Purposes**
- Enhance accessibility, quantity, and/or quality of forage and/or browse 
- Restore or release native or desired plant communities for wildlife habitat 
- Protect soils and control erosion 
- Reduce fine fuel loads and wildfire hazard 
- Control pervasive plant species to a desired level of treatment

---
### **Benefits** 
The following benefits are associated with this practice
[[🌾Soil Health]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🦪 Wetlands Conservation]]
[[🌾Reduced Erosion]]
[[🌾Livestock Health and Production]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement            | (4) Substantial to Moderate Improvement                                    |
| :------------------------------------- | :------------------------------------------------------------------------- |
| [[🐄 Plant Productivity and Health]]   | [[🏞️ Sheet and Rill Erosion]]                                             |
| [[🐄 Plant Pest Pressure]]             | [[🏞️ Wind Erosion]]                                                       |
| [[🐄 Plant Structure and Composition]] | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]]                  |
|                                        | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] |
|                                        | [[🐄 Feed and Forage Imbalance]]                                           |
|                                        | [[⚠️ Wildfire Hazard from Biomass Accumulation]]                           |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement     | (1) Slight Improvement                       |
| :----------------------- | :------------------------------------- | :------------------------------------------- |
|                          | [[🏞️ Ephemeral Gully Erosion]]        | [[💧Sediment Transported to Surface Water]]  |
|                          | [[💧Inefficient Irrigation Water use]] | [[🏞️ Aggregate Instability]]                |
|                          | [[💧Surface Water Depletion]]          | [[💧Nutrients Transported to Surface Water]] |
|                          |                                        | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]  |
|                          |                                        | [[🏞️ Soil Organism Habitat Degradation]]    |
|                          |                                        | [[🏞️ Classic Gully Erosion]]                |
|                          |                                        | [[💧Groundwater Depletion]]                  |

> *This practice slightly exacerbates the following resource concerns:*
> *  [[💧Pesticides Transported to Surface Water]] 

---
### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/herbaceous-weed-treatment-ac-315-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/herbaceous-weed-treatment-ac-315-conservation-practice-standard) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-22 at 4.13.27 PM.png]]`,AS=`### **Practice Definition**
##### Establishing and maintaining permanent vegetative cover

<iframe width="560" height="315" src="https://www.youtube.com/embed/WbrBlFrlIPI?si=MXFCvCwAANNwAyOi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### **Purposes**
- Reduce sheet, rill, and wind erosion and sedimentation. 
- Reduce ground and surface water quality degradation by nutrients and surface water quality degradation by sediment. 
- Reduce emissions of particulate matter (PM), PM precursors, and greenhouse gases. ) 
- Enhance wildlife, pollinator and beneficial organism habitat. 
- Improve soil health.

---
### **Benefits**
The following benefits are associated with this practice

>[[🦪 Wildlife and Ecosystem Connectivity]]
[[🌾Soil Health]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🍃 Climate Resilience and Adaptation]]
[[🍃 Carbon Sequestration]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---
### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement      | (4) Substantial to Moderate Improvement                      |
| :------------------------------- | :----------------------------------------------------------- |
| [[🏞️ Organic Matter Depletion]] | [[🏞️ Sheet and Rill Erosion]]                               |
|                                  | [[🏞️ Wind Erosion]]                                         |
|                                  | [[🐄 Plant Productivity and Health]]                         |
|                                  | [[💧Sediment Transported to Surface Water]]                  |
|                                  | [[🏞️ Aggregate Instability]]                                |
|                                  | [[💧Nutrients Transported to Surface Water]]                 |
|                                  | [[🐄 Plant Pest Pressure]]                                   |
|                                  | [[💧Nutrients Transported to Groundwater]]                   |
|                                  | [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]] |
|                                  | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]                  |
|                                  | [[🐄 Plant Structure and Composition]]                       |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                                  | (2) Moderate to Slight Improvement                                                                         | (1) Slight Improvement                              |
| :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| [[🏞️ Compaction]]                                        | [[💧Pesticides Transported to Surface Water]]                                                              | [[🏞️ Ponding and Flooding]]                        |
| [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] | [[💧Pesticides Transported to Groundwater]]                                                                | [[🏞️ Seeps]]                                       |
|                                                           | [[🏞️ Concentration of Salts or Other Chemicals]]                                                          | [[⚡️Emissions of Ozone Precursors]]                 |
|                                                           | [[🏞️ Soil Organism Habitat Degradation]]                                                                  | [[⚡️Emissions of Airborne Reactive Nitrogen]]       |
|                                                           | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] | [[💧Drifted Snow]]                                  |
|                                                           | [[💧Salts Transported to Surface Water]]                                                                   | [[🏞️ Classic Gully Erosion]]                       |
|                                                           | [[💧Salts Transported to Groundwater]]                                                                     | [[🐾 Aquatic Habitat for Fish and Other Organisms]] |
|                                                           | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]]   | [[🏞️ Ephemeral Gully Erosion]]                     |
|                                                           | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]]                                 |                                                     |

---
### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/conservation-cover-ac-327-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 

* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/conservation-cover-ac-327-conservation-practice-standard) shows the potential effects of implementing this practice.

![[ConservationCoverNetworkDiagram.png]]`,MS=`### **Practice Definition**
##### A planned sequence of crops grown on the same ground over a period of time (i.e. the rotation cycle).

<iframe width="560" height="315" src="https://www.youtube.com/embed/wqRh6pNBObw?si=lZ2Yq2buSTUdKf9z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Reduce sheet, rill and wind erosion. 
- Maintain or increase soil health and organic matter content. 
- Reduce water quality degradation due to excess nutrients. 
- Improve soil moisture efficiency. 
- Reduce the concentration of salts and other chemicals from saline seeps. 
- Reduce plant pest pressures. 
- Provide feed and forage for domestic livestock. 
- Provide food and cover habitat for wildlife, including pollinator forage, and nesting.

---
### **Benefits**
The following benefits are associated with this practice
[[🌾Soil Health]]
[[🍃 GHG Emissions]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🌾Reduced Erosion]]
[[🍃 Climate Resilience and Adaptation]]
[[🌾Plant Productivity]]
[[🌾Livestock Health and Production]]
[[🌾Economic]]

---
### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement |
| :-------------------------- | :-------------------------------------- |
|                             | [[🏞️ Sheet and Rill Erosion]]          |
|                             | [[🏞️ Wind Erosion]]                    |
|                             | [[🏞️ Organic Matter Depletion]]        |
|                             | [[🐄 Plant Productivity and Health]]    |



> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                     | (2) Moderate to Slight Improvement                                           | (1) Slight Improvement                                                                                     |
| :------------------------------------------- | :--------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| [[💧Sediment Transported to Surface Water]]  | [[💧Pesticides Transported to Surface Water]]                                | [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]]                                               |
| [[🏞️ Aggregate Instability]]                | [[⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations]] | [[🏞️ Soil Organism Habitat Degradation]]                                                                  |
| [[💧Nutrients Transported to Surface Water]] | [[💧Inefficient Irrigation Water use]]                                       | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]                                                                |
| [[💧Naturally Available Moisture Use]]       | [[💧Pesticides Transported to Groundwater]]                                  | [[🏞️ Compaction]]                                                                                         |
| [[🐄 Plant Pest Pressure]]                   | [[🐄 Feed and Forage Imbalance]]                                             | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]]                                                  |
| [[💧Nutrients Transported to Groundwater]]   | [[🏞️ Concentration of Salts or Other Chemicals]]                            | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
|                                              |                                                                              | [[🏞️ Ponding and Flooding]]                                                                               |
|                                              |                                                                              | [[💧Salts Transported to Surface Water]]                                                                   |
|                                              |                                                                              | [[🐄 Plant Structure and Composition]]                                                                     |
|                                              |                                                                              | [[🏞️ Seeps]]                                                                                              |
|                                              |                                                                              | [[💧Salts Transported to Groundwater]]                                                                     |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/conservation-crop-rotation-ac-328-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/conservation-crop-rotation-ac-328-conservation-practice-standard) shows the potential effects of implementing this practice.

![[Screenshot 2024-04-22 at 4.40.00 PM.png]]



`,NS=`### **Practice Definition**
##### Limiting soil disturbance to manage the amount, orientation and distribution of crop and plant residue on the soil surface year around.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DBYeb66dN80?si=XweG9enUB-5Fvg8i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Reduce sheet, rill and wind erosion and excessive sediment in surface waters. 
- Reduce tillage-induced particulate emissions. 
- Maintain or increase soil health and organic matter content. 
- Increase plant-available moisture. 
- Reduce energy use. 
- Provide food and escape cover for wildlife.

---
### **Benefits**
The following benefits are associated with this practice
[[🌾Soil Health]]
[[🍃 GHG Emissions]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🌾Plant Productivity]]
[[🍃 Carbon Sequestration]]
[[🌾Economic]]

---
### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                                  | (4) Substantial to Moderate Improvement                                      |
| :----------------------------------------------------------- | :--------------------------------------------------------------------------- |
| [[🏞️ Sheet and Rill Erosion]]                               | [[🏞️ Soil Organism Habitat Degradation]]                                    |
| [[🏞️ Wind Erosion]]                                         | [[🏞️ Aggregate Instability]]                                                |
| [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]] | [[💧Sediment Transported to Surface Water]]                                  |
|                                                              | [[💧Pesticides Transported to Surface Water]]                                |
|                                                              | [[⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations]] |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                    | (2) Moderate to Slight Improvement            | (1) Slight Improvement                                                                                     |
| :------------------------------------------ | :-------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| [[🏞️ Organic Matter Depletion]]            | [[🏞️ Compaction]]                            | [[🏞️ Subsidence]]                                                                                         |
| [[⚡️Emissions of Greenhouse Gasses (GHGs)]] | [[💧Naturally Available Moisture Use]]        | [[🏞️ Ponding and Flooding]]                                                                               |
| [[⚡️Emissions of Ozone Precursors]]         | [[💧Inefficient Irrigation Water use]]        | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
|                                             | [[💧Nutrients Transported to Surface Water]]  | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]]                                                  |
|                                             | [[⚡️Emissions of Airborne Reactive Nitrogen]] |                                                                                                            |
|                                             | [[🐄 Plant Productivity and Health]]          |                                                                                                            |

> *This practice slightly exacerbates the following resource concerns:*
> *  [[🏞️ Ephemeral Gully Erosion]]
> * [[💧Nutrients Transported to Groundwater]]

---
### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/residue-and-tillage-management-no-till-ac-329-conservation) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/residue-and-tillage-management-no-till-ac-329-conservation) shows the potential effects of implementing this practice.


![[Screenshot 2024-04-22 at 4.43.33 PM.png]]`,kS=`### **Practice Definition**
##### Grasses, legumes, and forbs planted for seasonal vegetative cover.

<iframe width="560" height="315" src="https://www.youtube.com/embed/NLoEkcbsJLo?si=rLWzEdgpy9cYf2WI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Reduce erosion from wind and water. 
- Maintain or increase soil health and organic matter content. 
- Reduce water quality degradation by utilizing excessive soil nutrients. 
- Suppress excessive weed pressures and break pest cycles. 
- Improve soil moisture use efficiency. 
- Minimize soil compaction.

---
### **Benefits**
The following benefits are associated with this practice
[[🌾Soil Health]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🌾Reduced Erosion]]
[[🌾Plant Productivity]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement |
| :-------------------------- | :-------------------------------------- |
|                             | [[🏞️ Sheet and Rill Erosion]]          |
|                             | [[🏞️ Wind Erosion]]                    |
|                             | [[🐄 Plant Pest Pressure]]              |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                                     | (2) Moderate to Slight Improvement            | (1) Slight Improvement                                                                                     |
| :----------------------------------------------------------- | :-------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| [[🏞️ Ephemeral Gully Erosion]]                              | [[🏞️ Organic Matter Depletion]]              | [[🐄 Plant Structure and Composition]]                                                                     |
| [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]] | [[💧Sediment Transported to Surface Water]]   | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]]                                                  |
|                                                              | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]   | [[⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations]]                               |
|                                                              | [[🏞️ Soil Organism Habitat Degradation]]     | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]]   |
|                                                              | [[💧Nutrients Transported to Surface Water]]  | [[💧Drifted Snow]]                                                                                         |
|                                                              | [[🐄 Plant Productivity and Health]]          | [[💧Nutrients Transported to Groundwater]]                                                                 |
|                                                              | [[🏞️ Compaction]]                            | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
|                                                              | [[🏞️ Aggregate Instability]]                 | [[⚡️Emissions of Airborne Reactive Nitrogen]]                                                              |
|                                                              | [[💧Pesticides Transported to Surface Water]] | [[💧Inefficient Irrigation Water use]]                                                                     |
|                                                              | [[💧Naturally Available Moisture Use]]        | [[🏞️ Ponding and Flooding]]                                                                               |
|                                                              |                                               | [[💧Pesticides Transported to Groundwater]]                                                                |
|                                                              |                                               | [[🐄 Feed and Forage Imbalance]]                                                                           |
|                                                              |                                               | [[💧Seasonal High Water Table]]                                                                            |
|                                                              |                                               | [[🏞️ Seeps]]                                                                                              |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/cover-crop-ac-340-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/cover-crop-ac-340-conservation-practice-standard) shows the potential effects of implementing this practice.

![[Screenshot 2024-04-22 at 4.46.08 PM.png]]




`,HS=`### **Practice Definition**
##### Establishing permanent vegetation on sites that have, or are expected to have, high erosion rates, and on sites that have physical, chemical, or biological conditions that prevent the establishment of vegetation with normal seeding/planting methods.

### **Purposes**
- Stabilize areas with existing or expected high rates of soil erosion by wind or water. 
- Stabilize stream and channel banks, pond and other shorelines, earthen features of structural conservation practices. 
- Stabilize areas such as sand dunes and riparian areas.

---
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🌾Soil Health]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🌾Plant Productivity]]
[[🍃 Carbon Sequestration]]
[[🦪 Biodiversity]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement      | (4) Substantial to Moderate Improvement                                    |
| :------------------------------- | :------------------------------------------------------------------------- |
| [[🏞️ Sheet and Rill Erosion]]   | [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]]               |
| [[🏞️ Wind Erosion]]             | [[💧Sediment Transported to Surface Water]]                                |
| [[🏞️ Organic Matter Depletion]] | [[🏞️ Classic Gully Erosion]]                                              |
| [[🏞️ Ephemeral Gully Erosion]]  | [[🐄 Plant Structure and Composition]]                                     |
|                                  | [[🐄 Plant Pest Pressure]]                                                 |
|                                  | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement                        | (1) Slight Improvement                                                                                   |
| :----------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
|                          | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]               | [[💧Pesticides Transported to Surface Water]]                                                            |
|                          | [[🏞️ Soil Organism Habitat Degradation]]                 | [[⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations]]                             |
|                          | [[💧Nutrients Transported to Surface Water]]              | [[🏞️ Concentration of Salts or Other Chemicals]]                                                        |
|                          | [[🐄 Plant Productivity and Health]]                      | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]] |
|                          | [[🏞️ Compaction]]                                        | [[💧Drifted Snow]]                                                                                       |
|                          | [[🏞️ Aggregate Instability]]                             | [[💧Nutrients Transported to Groundwater]]                                                               |
|                          | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] | [[🐾 Aquatic Habitat for Fish and Other Organisms]]                                                      |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/critical-area-planting-ac-342-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/critical-area-planting-ac-342-conservation-practice-standard) shows the potential effects of implementing this practice.

![[Screenshot 2024-04-22 at 4.48.44 PM.png]]




`,zS=`### **Practice Definition**
##### Managing the amount, orientation, and distribution of crop and other plant residue on the soil surface year-round while limiting soil-disturbing activities used to grow and harvest crops in systems where the field surface is tilled prior to planting.
<iframe width="560" height="315" src="https://www.youtube.com/embed/DBYeb66dN80?si=XweG9enUB-5Fvg8i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Reduce sheet, rill, and wind erosion and excessive sediment in surface waters (soil erosion). Reduce tillage-induced particulate emissions (air quality impact). 
- Improve soil health and maintain or increase organic matter content (soil quality degradation). Reduce energy use (inefficient energy use).

---
### **Benefits**
The following benefits are associated with this practice
[[🌾Soil Health]]
[[🍃 GHG Emissions]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🌾Plant Productivity]]
[[🍃 Carbon Sequestration]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement                      |
| :-------------------------- | :----------------------------------------------------------- |
|                             | [[🏞️ Sheet and Rill Erosion]]                               |
|                             | [[🏞️ Wind Erosion]]                                         |
|                             | [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]] |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                                                     | (2) Moderate to Slight Improvement           | (1) Slight Improvement                                                                                     |
| :--------------------------------------------------------------------------- | :------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| [[💧Pesticides Transported to Surface Water]]                                | [[💧Nutrients Transported to Surface Water]] | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
| [[💧Sediment Transported to Surface Water]]                                  | [[🐄 Plant Productivity and Health]]         | [[💧Salts Transported to Surface Water]]                                                                   |
| [[⚡️Emissions of Greenhouse Gasses (GHGs)]]                                  | [[🏞️ Organic Matter Depletion]]             | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]]                                                  |
| [[⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations]] | [[🏞️ Compaction]]                           | [[⚡️Emissions of Airborne Reactive Nitrogen]]                                                              |
| [[🏞️ Soil Organism Habitat Degradation]]                                    | [[🏞️ Aggregate Instability]]                | [[⚡️Emissions of Ozone Precursors]]                                                                        |
|                                                                              | [[💧Naturally Available Moisture Use]]       | [[💧Inefficient Irrigation Water use]]                                                                     |
|                                                                              |                                              | [[🏞️ Subsidence]]                                                                                         |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/residue-and-tillage-management-reduced-till-ac-345-conservation) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/residue-and-tillage-management-reduced-till-ac-345-conservation) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-22 at 4.55.03 PM.png]]





`,OS=`### **Practice Definition**
##### A barrier used to retain water on the landscape using a wetland dike; or, a barrier used to exclude water from the landscape and protect property and infrastructure from flooding using a flood control levee.

### **Purposes**
- Manage water retained on the landscape using a dike 
- Reduce flood risk by excluding water from a landscape using a levee

---
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🌾Plant Productivity]]
[[🦪 Biodiversity]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following conservation threats:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement |
| :-------------------------- | :-------------------------------------- |
|                             | [[🏞️ Ponding and Flooding]]            |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement            | (1) Slight Improvement                                                                                     |
| :----------------------- | :-------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
|                          | [[💧Pesticides Transported to Surface Water]] | [[🐄 Plant Structure and Composition]]                                                                     |
|                          | [[🏞️ Classic Gully Erosion]]                 | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
|                          |                                               | [[🏞️ Concentration of Salts or Other Chemicals]]                                                          |
|                          |                                               | [[💧Pesticides Transported to Groundwater]]                                                                |
|                          |                                               | [[💧Salts Transported to Surface Water]]                                                                   |
|                          |                                               | [[💧Surface Water Depletion]]                                                                              |
|                          |                                               | [[💧Groundwater Depletion]]                                                                                |
|                          |                                               |                                                                                                            |

> *This practice slightly exacerbates the following threats:*
> * [[💧Nutrients Transported to Groundwater]]
> * [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]]
> * [[🐾 Aquatic Habitat for Fish and Other Organisms]]
> * [[💧Seasonal High Water Table]]
> * [[🏞️ Seeps]]
> * [[💧Salts Transported to Groundwater]] 

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/dike-and-levee-ft-356-conservation-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/dike-and-levee-ft-356-conservation-standard) shows the potential effects of implementing this practice.

![[Screenshot 2024-04-22 at 4.58.04 PM.png]]
`,DS=`### Practice Definition  
##### A water impoundment made by constructing an embankment, excavating a dugout, or a combination of both.
<iframe width="560" height="315" src="https://www.youtube.com/embed/BwjGemPkGPM?si=T8X5be4_ehKlcS4_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Purposes
 Store water for:
	 - Livestock
	 - Fish and wildlife
	 - Recreational use
	 - Fire control
	 - Erosion control
	 - Flow detention
 - Improve water quality
---
### Benefits
**The following benefits are associated with this practice:**
[[🌾Water Quantity and Availability]]
[[🌾Plant Productivity]]
[[🌾Livestock Health and Production]] 

--- 
### Resource Concerns


> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                                          | (4) Substantial to Moderate Improvement |
| :------------------------------------------------------------------- | :-------------------------------------- |
| [[🐄 Inadequate Livestock Water Quantity, Quality and Distribution]] |                                         |


> *This practice also addresses the following resource concerns threats to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement           | (1) Slight Improvement                                                     |
| :----------------------- | :------------------------------------------- | :------------------------------------------------------------------------- |
|                          | [[🏞️ Classic Gully Erosion]]                | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] |
|                          | [[🏞️ Ponding and Flooding]]                 |                                                                            |
|                          | [[💧Inefficient Irrigation Water use]]       |                                                                            |
|                          | [[💧Naturally Available Moisture Use]]       |                                                                            |
|                          | [[💧Nutrients Transported to Surface Water]] |                                                                            |
|                          | [[💧Sediment Transported to Surface Water]]  |                                                                            |
|                          | [[🌾Plant Productivity]]                     |                                                                            |
|                          | [[🦪 Aquatic Habitat]]                       |                                                                            |
|                          | [[🦪 Terrestrial Habitat]]                   |                                                                            |


> *This practice slightly exacerbates the following threats:*
> [[🏞️ Concentration of Salts or Other Chemicals]] 
> [[🏞️ Seeps]]
> [[💧Seasonal High Water Table]] 
> [[💧Nutrients Transported to Groundwater]] 
> [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] 


---
### Resources from NRCS National

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/pond-no-378-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/pond-no-378-conservation-practice-standard) shows the potential effects of implementing this practice.![[Pond network diagram.png]]`,WS=`### **Practice Definition:**
##### A constructed barrier to animals or people.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TEwFBEG8pVs?si=bpl8Y36RoVX3dSzq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes:**
To provide a means to control the movement of animals, people, and vehicles to accomplish specific conservation objectives.

---
### **Benefits:**
**The following benefits are associated with this practice:**
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🦪 Wetlands Conservation]]
[[🦪 Riparian Condition]]
[[🌾Reduced Erosion]]
[[🌾Plant Productivity]]
[[🌾Livestock Health and Production]]
[[🍃 Carbon Sequestration]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement |
| :-------------------------- | :-------------------------------------- |
| ---                         | ---                                     |

> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement         | (2) Moderate to Slight Improvement                                                                         | (1) Slight Improvement                                                                                   |
| :------------------------------- | :--------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| [[🐄 Feed and Forage Imbalance]] | [[🐄 Plant Productivity and Health]]                                                                       | [[🏞️ Sheet and Rill Erosion]]                                                                           |
|                                  | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] | [[🏞️ Soil Organism Habitat Degradation]]                                                                |
|                                  | [[🐄 Plant Structure and Composition]]                                                                     | [[🏞️ Aggregate Instability]]                                                                            |
|                                  |                                                                                                            | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]                                                              |
|                                  |                                                                                                            | [[🏞️ Compaction]]                                                                                       |
|                                  |                                                                                                            | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]]                                                |
|                                  |                                                                                                            | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]]                               |
|                                  |                                                                                                            | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]] |
|                                  |                                                                                                            | [[🐾 Aquatic Habitat for Fish and Other Organisms]]                                                      |

---
### **Resources from NRCS National:**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/fence-ft-382-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/fence-ft-382-conservation-practice-standard) shows the potential effects of implementing this practice.

![[Screenshot 2024-04-25 at 9.44.18 AM.png]]




`,qS=`### **Practice Definition**
##### Grasses, sedges, rushes, ferns, legumes, and forbs tolerant of intermittent flooding or saturated soils, established or managed as the dominant vegetation in the transitional zone between upland and aquatic habitats.

### **Purposes**
- Provide or improve food and cover for fish, wildlife and livestock 
- Improve and maintain water quality 
- Establish and maintain habitat corridors 
- Increase water storage on floodplains 
- Reduce erosion and improve stability to stream banks and shorelines 
- Increase net carbon storage in the biomass and soil 
- Enhance pollen, nectar, and nesting habitat for pollinators 
- Restore, improve or maintain the desired plant communities 
- Dissipate stream energy and trap sediment 
- Enhance stream bank protection as part of stream bank soil bioengineering practices

---
### **Benefits** 
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🌾Soil Health]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🦪 Streambank and Shoreline Condition]]
[[🦪 Riparian Condition]]
[[🍃 Carbon Sequestration]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                  | (4) Substantial to Moderate Improvement                                    |
| :------------------------------------------- | :------------------------------------------------------------------------- |
| [[💧Nutrients Transported to Surface Water]] | [[🐄 Feed and Forage Imbalance]]                                           |
| [[💧Nutrients Transported to Groundwater]]   | [[🐄 Plant Structure and Composition]]                                     |
| [[🐄 Plant Productivity and Health]]         | [[🏞️ Organic Matter Depletion]]                                           |
|                                              | [[💧Sediment Transported to Surface Water]]                                |
|                                              | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] |
|                                              | [[🐄 Plant Pest Pressure]]                                                 |
|                                              | [[🏞️ Compaction]]                                                         |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                                                                                   | (2) Moderate to Slight Improvement                                                                       | (1) Slight Improvement                                                        |
| :--------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]] | [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]]                  |
|                                                                                                            | [[🐾 Aquatic Habitat for Fish and Other Organisms]]                                                      | [[💧Salts Transported to Groundwater]]                                        |
|                                                                                                            | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]                                                              | [[💧Salts Transported to Surface Water]]                                      |
|                                                                                                            | [[🏞️ Concentration of Salts or Other Chemicals]]                                                        | [[🏞️ Ephemeral Gully Erosion]]                                               |
|                                                                                                            | [[💧Elevated Water Temperature]]                                                                         | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater]] |
|                                                                                                            | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]]                                                | [[⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations]]  |
|                                                                                                            | [[🏞️ Sheet and Rill Erosion]]                                                                           |                                                                               |
|                                                                                                            | [[💧Pesticides Transported to Surface Water]]                                                            |                                                                               |
|                                                                                                            | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water]]                          |                                                                               |
|                                                                                                            | [[💧Seasonal High Water Table]]                                                                          |                                                                               |
|                                                                                                            | [[🏞️ Wind Erosion]]                                                                                     |                                                                               |
|                                                                                                            | [[💧Pesticides Transported to Groundwater]]                                                              |                                                                               |
|                                                                                                            | [[🏞️ Seeps]]                                                                                            |                                                                               |

> *This practice slightly to moderately exacerbates the following resource concerns:*
> *  [[🏞️ Ponding and Flooding]] 

--- 
### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/riparian-herbaceous-cover-ac-390-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/riparian-herbaceous-cover-ac-390-conservation-practice-standard) shows the potential effects of implementing this practice.

![[Screenshot 2024-04-25 at 9.50.26 AM.png]]





`,BS=`### **Practice Definition**
##### An area predominantly covered by trees and/or shrubs located adjacent to and up-gradient from a watercourse or water body.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pb9_4uW6uCk?si=YOuGxjQxzbzX0vV7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Reduce transport of sediment to surface water, and reduce transport of pathogens, chemicals, pesticides, and nutrients to surface and ground water 
- Improve the quantity and quality of terrestrial and aquatic habitat for wildlife, invertebrate species, fish, and other organisms 
- Maintain or increase total carbon stored in soils and/or perennial biomass to reduce atmospheric concentrations of greenhouse gasses 
- Lower elevated stream water temperatures 
- Restore diversity, structure, and composition of riparian plant communities

---
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🦪 Streambank and Shoreline Condition]]
[[🦪 Riparian Condition]]
[[🍃 Carbon Sequestration]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                               | (4) Substantial to Moderate Improvement                                    |
| :-------------------------------------------------------- | :------------------------------------------------------------------------- |
| [[🐾 Aquatic Habitat for Fish and Other Organisms]]       | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] |
| [[💧Elevated Water Temperature]]                          | [[🏞️ Aggregate Instability]]                                              |
| [[🐄 Plant Structure and Composition]]                    | [[🏞️ Organic Matter Depletion]]                                           |
| [[🐄 Plant Productivity and Health]]                      |                                                                            |
| [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] |                                                                            |
| [[💧Sediment Transported to Surface Water]]               |                                                                            |
| [[💧Nutrients Transported to Surface Water]]              |                                                                            |
| [[🏞️ Soil Organism Habitat Degradation]]                 |                                                                            |
| [[💧Nutrients Transported to Groundwater]]                |                                                                            |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                                                                                   | (2) Moderate to Slight Improvement | (1) Slight Improvement                                                                                   |
| :--------------------------------------------------------------------------------------------------------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------- |
| [[🐄 Plant Pest Pressure]]                                                                                 | [[🏞️ Compaction]]                 | [[💧Pesticides Transported to Groundwater]]                                                              |
| [[⚡️Emissions of Greenhouse Gasses (GHGs)]]                                                                | [[💧Seasonal High Water Table]]    | [[💧Salts Transported to Surface Water]]                                                                 |
| [[🏞️ Classic Gully Erosion]]                                                                              | [[🏞️ Wind Erosion]]               | [[🏞️ Ephemeral Gully Erosion]]                                                                          |
| [[🏞️ Sheet and Rill Erosion]]                                                                             |                                    | [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]]                                             |
| [[💧Pesticides Transported to Surface Water]]                                                              |                                    | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]] |
| [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water]]                            |                                    | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater]]                            |
| [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |                                    | [[🏞️ Seeps]]                                                                                            |
| [[💧Surface Water Depletion]]                                                                              |                                    | [[🐄 Inadequate Livestock Shelter]]                                                                      |
|                                                                                                            |                                    | [[💧Salts Transported to Groundwater]]                                                                   |
|                                                                                                            |                                    | [[🏞️ Concentration of Salts or Other Chemicals]]                                                        |
|                                                                                                            |                                    | [[⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations]]                             |
|                                                                                                            |                                    | [[⚡️Objectionable Odor]]                                                                                 |

> *This practice slightly exacerbates the following resource concerns:*
> *  [[🏞️ Ponding and Flooding]]

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/riparian-forest-buffer-ac-391-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/riparian-forest-buffer-ac-391-conservation-practice-standard) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 10.03.35 AM.png]]




`,jS=`### **Practice Definition**
##### Improve, restore, or maintain the ecological functions of a stream and its adjacent floodplain and riparian area.

### **Purposes**
Improve or manage stream habitat by evaluating and addressing factors that impair stream function and structure.

---
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🦪 Wetlands Conservation]]
[[🌾Reduced Erosion]]
[[🦪 Streambank and Shoreline Condition]]
[[🦪 Riparian Condition]]
[[🦪 Biodiversity]]
[[🌾Economic]]

--- 

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                                                | (4) Substantial to Moderate Improvement |
| :------------------------------------------------------------------------- | :-------------------------------------- |
| [[🐾 Aquatic Habitat for Fish and Other Organisms]]                        | [[💧Elevated Water Temperature]]        |
| [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] | [[🐄 Plant Structure and Composition]]  |
|                                                                            | [[🐄 Plant Productivity and Health]]    |
|                                                                            | [[🐄 Plant Pest Pressure]]              |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                                  | (2) Moderate to Slight Improvement           | (1) Slight Improvement                       |
| :-------------------------------------------------------- | :------------------------------------------- | :------------------------------------------- |
| [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] | [[💧Sediment Transported to Surface Water]]  | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]  |
|                                                           | [[💧Nutrients Transported to Surface Water]] |                                              |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/stream-habitat-improvement-and-management-ac-395-conservation) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/stream-habitat-improvement-and-management-ac-395-conservation) shows the potential effects of implementing this practice.

![[Screenshot 2024-04-25 at 10.06.47 AM.png]]




`,GS=`### **Practice Definition**
##### Modification or removal of barriers that restrict or impede movement of aquatic organisms.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zKEHkdvncb4?si=pvyx08uX-0iw4Lge" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
Provide access to habitat by improving or providing passage for aquatic organisms.

---
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🦪 Aquatic Habitat]]
[[🌾Water Quantity and Availability]]
[[🌾Reduced Erosion]]
[[🍃 Climate Resilience and Adaptation]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---
### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                         | (4) Substantial to Moderate Improvement |
| :-------------------------------------------------- | :-------------------------------------- |
| [[🐾 Aquatic Habitat for Fish and Other Organisms]] |                                         |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement         | (2) Moderate to Slight Improvement                        | (1) Slight Improvement                                                     |
| :------------------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------- |
| [[💧Elevated Water Temperature]] | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] |
|                                  |                                                           | [[🏞️ Ponding and Flooding]]                                               |

--- 

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/aquatic-organism-passage-mi-396-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/aquatic-organism-passage-mi-396-conservation-practice-standard) shows the potential effects of implementing this practice.

![[Screenshot 2024-04-25 at 10.12.55 AM.png]]
`,IS=`### **Practice Definition**
##### A structure used to control the grade in natural or constructed channels.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6NTd8xjGjIE?si=C7QmcI_BAWewZw4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Reduce erosion 
- Improve water quality

---
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🌾Reduced Erosion]]
[[🌾Plant Productivity]]
[[🌾Economic]]

---

### **Resource Concerns**
> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement |
| :-------------------------- | :-------------------------------------- |
|                             |                                         |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement                                         | (1) Slight Improvement                                    |
| :----------------------- | :------------------------------------------------------------------------- | :-------------------------------------------------------- |
|                          | [[💧Sediment Transported to Surface Water]]                                | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] |
|                          | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] | [[🐾 Aquatic Habitat for Fish and Other Organisms]]       |
|                          | [[🏞️ Classic Gully Erosion]]                                              |                                                           |
|                          | [[🏞️ Aggregate Instability]]                                              |                                                           |
|                          | [[🏞️ Soil Organism Habitat Degradation]]                                  |                                                           |
|                          | [[🏞️ Ponding and Flooding]]                                               |                                                           |

---


### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/grade-stabilization-structure-no-410-conservation-practice) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/grade-stabilization-structure-no-410-conservation-practice) shows the potential effects of implementing this practice.

![[Screenshot 2024-04-25 at 10.18.08 AM.png]]
`,LS=`### **Practice Definition**
##### Establishing wildlife habitat by planting herbaceous vegetation or shrubs.

### **Purposes**
- Improve degraded wildlife habitat for the target wildlife species or guild. 
- Establish wildlife habitat that resembles the historic, desired, and reference native plant community

---
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🌾Soil Health]]
[[🦪 Aquatic Habitat]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🍃 Climate Resilience and Adaptation]]
[[🦪 Biodiversity]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                               | (4) Substantial to Moderate Improvement |
| :-------------------------------------------------------- | :-------------------------------------- |
| [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] | [[💧Elevated Water Temperature]]        |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                    | (2) Moderate to Slight Improvement                  | (1) Slight Improvement                        |
| :------------------------------------------ | :-------------------------------------------------- | :-------------------------------------------- |
| [[⚡️Emissions of Greenhouse Gasses (GHGs)]] | [[🐄 Plant Structure and Composition]]              | [[🐄 Plant Productivity and Health]]          |
|                                             | [[🏞️ Sheet and Rill Erosion]]                      | [[💧Sediment Transported to Surface Water]]   |
|                                             | [[🐾 Aquatic Habitat for Fish and Other Organisms]] | [[💧Pesticides Transported to Surface Water]] |
|                                             |                                                     | [[💧Nutrients Transported to Surface Water]]  |
|                                             |                                                     | [[💧Pesticides Transported to Groundwater]]   |
|                                             |                                                     | [[💧Salts Transported to Surface Water]]      |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/wildlife-habitat-planting-ac-420-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/wildlife-habitat-planting-ac-420-conservation-practice-standard) shows the potential effects of implementing this practice.

![[Screenshot 2024-04-25 at 10.21.08 AM.png]]`,US=`### **Practice Definition**
##### The temporary or permanent exclusion of animals, people, vehicles, and equipment from an area.

<iframe width="560" height="315" src="https://www.youtube.com/embed/IFff0RlMUDY?si=xZsZMozFG15JLVKi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
Achieve and maintain desired resource conditions by monitoring and managing the intensity of use by animals, people, vehicles, and equipment in coordination with the application schedule of practices, measures, and activities specified in the conservation plan.

---
### **Benefits**
The following benefits are associated with this practice
[[🌾Soil Health]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🦪 Streambank and Shoreline Condition]]
[[🌾Plant Productivity]]
[[🦪 Riparian Condition]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                                                | (4) Substantial to Moderate Improvement                   |
| :------------------------------------------------------------------------- | :-------------------------------------------------------- |
| [[🐄 Plant Pest Pressure]]                                                 | [[🐄 Plant Structure and Composition]]                    |
| [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] |
|                                                                            | [[🏞️ Ephemeral Gully Erosion]]                           |
|                                                                            | [[🏞️ Compaction]]                                        |
|                                                                            | [[🏞️ Classic Gully Erosion]]                             |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                            | (2) Moderate to Slight Improvement                           | (1) Slight Improvement                                                                                     |
| :-------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| [[🐄 Feed and Forage Imbalance]]                    | [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]] | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]                                                                |
| [[🐄 Plant Productivity and Health]]                | [[💧Seasonal High Water Table]]                              | [[🏞️ Wind Erosion]]                                                                                       |
| [[🏞️ Sheet and Rill Erosion]]                      |                                                              | [[🏞️ Organic Matter Depletion]]                                                                           |
| [[💧Sediment Transported to Surface Water]]         |                                                              | [[🏞️ Aggregate Instability]]                                                                              |
| [[💧Naturally Available Moisture Use]]              |                                                              | [[🏞️ Soil Organism Habitat Degradation]]                                                                  |
| [[🐾 Aquatic Habitat for Fish and Other Organisms]] |                                                              | [[💧Pesticides Transported to Surface Water]]                                                              |
| [[💧Elevated Water Temperature]]                    |                                                              | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water]]                            |
| [[⚠️ Wildfire Hazard from Biomass Accumulation]]    |                                                              | [[🏞️ Ponding and Flooding]]                                                                               |
|                                                     |                                                              | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
|                                                     |                                                              | [[💧Nutrients Transported to Surface Water]]                                                               |
|                                                     |                                                              | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]]   |
|                                                     |                                                              | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater]]                              |
|                                                     |                                                              | [[💧Nutrients Transported to Groundwater]]                                                                 |
|                                                     |                                                              | [[🏞️ Seeps]]                                                                                              |
|                                                     |                                                              | [[⚡️Emissions of Ozone Precursors]]                                                                        |
|                                                     |                                                              | [[🐄 Inadequate Livestock Shelter]]                                                                        |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/access-control-ac-472-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/access-control-ac-472-conservation-practice-standard) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 10.23.05 AM.png]]



`,FS=`### **Practice Definition**
##### Establishing adapted and compatible species, varieties, or cultivars of perennial herbaceous plants suitable for pasture or hay production.

### **Purposes**
- Improve or maintain livestock nutrition and health 
- Provide or increase forage supply during periods of low forage production 
- Reduce soil erosion 
- Improve water quality 
- Improve air quality 
- Improve soil health

---
### **Benefits**
The following benefits are associated with this practice
[[🌾Soil Health]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🌾Plant Productivity]]
[[🌾Livestock Health and Production]]
[[🍃 Carbon Sequestration]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement      | (4) Substantial to Moderate Improvement                   |
| :------------------------------- | :-------------------------------------------------------- |
| [[🐄 Feed and Forage Imbalance]] | [[🐄 Plant Productivity and Health]]                      |
|                                  | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]               |
|                                  | [[🐄 Plant Structure and Composition]]                    |
|                                  | [[🏞️ Sheet and Rill Erosion]]                            |
|                                  | [[🏞️ Wind Erosion]]                                      |
|                                  | [[🏞️ Organic Matter Depletion]]                          |
|                                  | [[🏞️ Aggregate Instability]]                             |
|                                  | [[🏞️ Soil Organism Habitat Degradation]]                 |
|                                  | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                                     | (2) Moderate to Slight Improvement | (1) Slight Improvement                                                                                     |
| :----------------------------------------------------------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| [[🏞️ Ephemeral Gully Erosion]]                              | [[🏞️ Compaction]]                 | [[💧Sediment Transported to Surface Water]]                                                                |
| [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]] |                                    | [[🏞️ Classic Gully Erosion]]                                                                              |
| [[💧Surface Water Depletion]]                                |                                    | [[💧Pesticides Transported to Surface Water]]                                                              |
| [[💧Groundwater Depletion]]                                  |                                    | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water]]                            |
|                                                              |                                    | [[🏞️ Ponding and Flooding]]                                                                               |
|                                                              |                                    | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
|                                                              |                                    | [[💧Nutrients Transported to Surface Water]]                                                               |

--- 
### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/pasture-and-hay-planting-ac-512-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/pasture-and-hay-planting-ac-512-conservation-practice-standard) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 10.26.14 AM.png]]





`,QS=`### **Practice Definition**
##### A pipeline and appurtenances installed to convey water for livestock or wildlife.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FMlz3fWRa2I?si=egs0oomqVLS_4LCv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
• Convey water to points of use for livestock or wildlife 
• Reduce energy use

--- 
### **Benefits**
The following benefits are associated with this practice
* [[🦪 Terrestrial Habitat]]
* [[🦪 Water Quality]]
* [[🌾Water Quantity and Availability]]
* [[🌾Plant Productivity]]
* [[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                                          | (4) Substantial to Moderate Improvement |
| :------------------------------------------------------------------- | :-------------------------------------- |
| [[🐄 Inadequate Livestock Water Quantity, Quality and Distribution]] |                                         |

> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                            | (2) Moderate to Slight Improvement          | (1) Slight Improvement |
| :-------------------------------------------------- | :------------------------------------------ | :--------------------- |
| [[⚡️Energy Efficiency of Equipment and Facilities]] | [[🐄 Plant Productivity and Health]]        |                        |
|                                                     | [[⚡️Emissions of Greenhouse Gasses (GHGs)]] |                        |

---

#### **Resources from NRCS National**

**Practice Standard Document:**
[Read the Conservation Practice Standard](https://www.nrcs.usda.gov/sites/default/files/2022-09/Livestock_Pipeline_516_NHCP_CPS_2020.pdf)
This document provides standards for installing a livestock pipeline system to convey water to watering facilities for livestock or wildlife. The main points are:
- Properly size the pipeline capacity to meet the water needs of the animals based on number, species, and reasonable water losses.
- Design the pipeline to handle the pressure and friction losses, using appropriate pipe materials (plastic or metal) rated for the pressure.
- Bury pipes deep enough to protect from loads, freezing, etc. or use encasement if needed.
- Include appropriate valves, air vents, thrust blocks, etc. to control pressure, remove air, and protect the system.
- Provide means to safely fill, flush sediment, and drain the pipeline when needed.
- Develop an operation and maintenance plan for draining, valve operation, monitoring, etc.
- Consider economics by sizing pipes for long-term energy efficiency, not just initial costs.

**Network Diagram:**
[Download the Network Diagram Here](https://www.nrcs.usda.gov/sites/default/files/2022-09/Livestock_Pipeline_516_NHCP_NED_2020.pdf)
The network diagram below shows the potential effects of implementing this practice.
![[Screenshot 2024-04-16 at 12.21.17 PM.png|600]]

`,YS=`### **Practice Definition**
##### Managing the harvest of vegetation with grazing and/or browsing animals with the intent to achieve specific ecological, economic, and management objectives.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JOiyO31rOis?si=LJ_jrjLQL07lLgYj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Improve or maintain desired species composition, structure and/or vigor of plant communities. 
- Improve or maintain quantity and/or quality of forage for grazing and browsing animals’ health and productivity. 
- Improve or maintain surface and/or subsurface water quality and/or quantity. 
- Improve or maintain riparian and/or watershed function. 
- Reduce soil erosion, and maintain or improve soil health. 
- Improve or maintain the quantity, quality, or connectivity of food and/or cover available for wildlife. 
- Manage fine fuel loads to achieve desired conditions.

---
### **Benefits**
The following benefits are associated with this practice**
[[🌾Soil Health]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🦪 Streambank and Shoreline Condition]]
[[🌾Plant Productivity]]
[[🦪 Riparian Condition]]
[[🌾Livestock Health and Production]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement |
| :-------------------------- | :-------------------------------------- |
| ---                         | ---                                     |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement | (1) Slight Improvement |
| :----------------------- | :--------------------------------- | :--------------------- |
| ---                      | ---                                | ---                    |

> *This practice slightly exacerbates the resource concerns:*
> *  [[⚡️Objectionable Odor]]

--- 
### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/prescribed-grazing-ac-528-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/prescribed-grazing-ac-528-conservation-practice-standard) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 10.29.55 AM.png]]






`,VS=`### Practice Definition  

##### A facility that delivers water or wastewater at a designed pressure and flow rate.

<iframe width="560" height="315" src="https://www.youtube.com/embed/uIw9xdTpmj4?si=PgOyB0fRc_gHl59p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 

### Purposes
- Deliver water for improved plant condition, livestock, or wetlands 
- Remove excessive subsurface or surface water 
- Provide efficient use of water on irrigated land 
- Transfer of livestock waste or liquid byproducts as part of a wastewater transfer system 
- Reduce energy use
---
### Benefits
[[🌾Water Quantity and Availability]]

---
### Resource Concerns


> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                                          | (4) Substantial to Moderate Improvement             |
| :------------------------------------------------------------------- | :-------------------------------------------------- |
| [[🐄 Inadequate Livestock Water Quantity, Quality and Distribution]] | [[⚡️Energy Efficiency of Equipment and Facilities]] |


> *This practice also addresses the following resource concerns threats to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement                                            | (1) Slight Improvement |
| :----------------------- | :---------------------------------------------------------------------------- | :--------------------- |
|                          | [[🏞️ Subsidence]]                                                            |                        |
|                          | [[🏞️ Seeps]]                                                                 |                        |
|                          | [[🏞️ Ponding and Flooding]]                                                  |                        |
|                          | [[💧Seasonal High Water Table]]                                               |                        |
|                          | [[💧Inefficient Irrigation Water use]]                                        |                        |
|                          | [[💧Naturally Available Moisture Use]]                                        |                        |
|                          | [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]]                  |                        |
|                          | [[⚡️Emissions of Ozone Precursors]]                                           |                        |
|                          | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]                                   |                        |
|                          | [[🌾Plant Productivity]]                                                      |                        |
|                          | [[⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations]]  |                        |

> *This practice slightly exacerbates the following threats:*
---
### Resources from NRCS National


* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/pumping-plant-no-533-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 
`,XS=`### **Practice Definition**
##### The seeding and establishment of herbaceous and woody species for the improvement of vegetation composition and productivity of the plant community to meet management goals.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DPl24XCRwoc?si=KJ1IeFmwci1q6Y6e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Restore a plant community to a state similar to the ecological site description reference state for the site or another desired plant community 
- Provide or improve forages for livestock 
- Provide or improve forage, browse, or cover for wildlife 
- Reduce erosion by wind and water 
- Improve water quality and quantity 
- Restore hydrologic function 
- Increase and/or stabilize carbon balance and sequestration

---
### **Benefits** 

[[🌾Reduced Erosion]]
[[🌾Economic]]
[[🌾Water Quantity and Availability]]
[[🌾Livestock Health and Production]]
[[🐾 Terrestrial Habitat for Wildlife and Invertebrates]]
[[🍃 Carbon Sequestration]]
[[🦪 Water Quality]]



---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement            | (4) Substantial to Moderate Improvement |
| :------------------------------------- | :-------------------------------------- |
| [[🐄 Feed and Forage Imbalance]]       | [[🏞️ Sheet and Rill Erosion]]          |
| [[🐄 Plant Structure and Composition]] | [[🏞️ Wind Erosion]]                    |
| [[🐄 Plant Productivity and Health]]   | [[🏞️ Ephemeral Gully Erosion]]         |
|                                        | [[🏞️ Compaction]]                      |
|                                        | [[🐄 Plant Pest Pressure]]              |
|                                        | [[🏞️ Organic Matter Depletion]]        |

> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                                     | (2) Moderate to Slight Improvement                                              | (1) Slight Improvement                                                                                     |
| :----------------------------------------------------------- | :------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------- |
| [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]] | [[💧Sediment Transported to Surface Water]]                                     | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
| [[🏞️ Aggregate Instability]]                                | [[🏞️ Classic Gully Erosion]]                                                   | [[💧Nutrients Transported to Surface Water]]                                                               |
| [[⚡️Emissions of Greenhouse Gasses (GHGs)]]                  | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]]      | [[🐾 Aquatic Habitat for Fish and Other Organisms]]                                                        |
| [[🏞️ Soil Organism Habitat Degradation]]                    | [[💧Naturally Available Moisture Use]]                                          | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]]   |
|                                                              | [[💧Pesticides Transported to Surface Water]]                                   | [[💧Elevated Water Temperature]]                                                                           |
|                                                              | [[💧Pesticides Transported to Groundwater]]                                     | [[💧Salts Transported to Surface Water]]                                                                   |
|                                                              | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]]                       | [[💧Drifted Snow]]                                                                                         |
|                                                              | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water]] | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater]]                              |
|                                                              | [[🏞️ Ponding and Flooding]]                                                    | [[💧Salts Transported to Groundwater]]                                                                     |
|                                                              |                                                                                 | [[💧Nutrients Transported to Groundwater]]                                                                 |
|                                                              |                                                                                 | [[🏞️ Concentration of Salts or Other Chemicals]]                                                          |


---


### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/range-planting-ac-550-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/range-planting-ac-550-conservation-practice-standard) shows the potential effects of implementing this practice.
![[Screenshot 2024-05-02 at 1.26.04 PM.png]]`,ZS=`### **Practice Definition**
##### Stabilization or protection of an intensively used area.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ua27sLvTHFk?si=0jFbzGr_-YMsZnJG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Reduce soil erosion 
- Provide a stable, non-eroding surface for areas frequently used by animals, people, or vehicles 
- Protect or improve water quality

---
### **Benefits**
The following benefits are associated with this practice
[[🌾Soil Health]]
[[🦪 Aquatic Habitat]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🌾Livestock Health and Production]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement |
| :-------------------------- | :-------------------------------------- |
| ---                         | ---                                     |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement                                                                         | (1) Slight Improvement                                                       |
| :----------------------- | :--------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
|                          | [[💧Sediment Transported to Surface Water]]                                                                | [[💧Nutrients Transported to Surface Water]]                                 |
|                          | [[🏞️ Classic Gully Erosion]]                                                                              | [[💧Surface Water Depletion]]                                                |
|                          | [[🏞️ Sheet and Rill Erosion]]                                                                             | [[🏞️ Compaction]]                                                           |
|                          | [[🏞️ Wind Erosion]]                                                                                       | [[⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations]] |
|                          | [[🏞️ Ephemeral Gully Erosion]]                                                                            | [[🏞️ Aggregate Instability]]                                                |
|                          | [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]]                                               |                                                                              |
|                          | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |                                                                              |

> *This practice slightly or moderately exacerbates the following resource concerns:*
> *  [[🏞️ Ponding and Flooding]]
> * [[💧Groundwater Depletion]]
> * [[🏞️ Soil Organism Habitat Degradation]]


---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/heavy-use-area-protection-sq-ft-561-conservation-practice) lays out the criteria and specifications for each conservation practice. 





`,KS=`### **Practice Definition**
##### A stabilized area or structure constructed across a stream to provide controlled access for people, livestock, equipment, or vehicles.

<iframe width="560" height="315" src="https://www.youtube.com/embed/SavIzu1Hp-Y?si=AUMfiYVFwOLLUauQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Improve water quality by reducing sediment, nutrient, or organic loading to a stream 
- Reduce streambank and streambed erosion

---
### **Benefits** 
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🌾Soil Health]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🦪 Streambank and Shoreline Condition]]
[[🌾Plant Productivity]]
[[🦪 Riparian Condition]]
[[🌾Livestock Health and Production]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                                                | (4) Substantial to Moderate Improvement |
| :------------------------------------------------------------------------- | :-------------------------------------- |
| [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] |                                         |

> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                            | (2) Moderate to Slight Improvement                                                                       | (1) Slight Improvement                       |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------- |
| [[🐾 Aquatic Habitat for Fish and Other Organisms]] | [[💧Sediment Transported to Surface Water]]                                                              | [[💧Nutrients Transported to Surface Water]] |
|                                                     | [[🐄 Inadequate Livestock Water Quantity, Quality and Distribution]]                                     |                                              |
|                                                     | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]] |                                              |
|                                                     | [[🐄 Feed and Forage Imbalance]]                                                                         |                                              |

> *This practice moderately exacerbates the following resource concerns:*
> *  [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]]


---
### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/stream-crossing-no-578-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/stream-crossing-no-578-conservation-practice-standard) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 11.07.50 AM.png]]



`,JS=`### **Practice Definition**
##### Treatment(s) used to stabilize and protect banks of streams or constructed channels and shorelines of lakes, reservoirs, or estuaries.
<iframe width="560" height="315" src="https://www.youtube.com/embed/xUOaGJz_uUA?si=DDKMRF3mVe-oV5iQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
### **Purposes**
- Prevent the loss of land or damage to land uses or facilities adjacent to the banks of streams or constructed channels and shorelines of lakes, reservoirs, or estuaries. This includes the protection of known historical, archaeological, and traditional cultural properties. 
- Maintain the flow capacity of streams or channels. 
- Reduce the offsite or downstream effects of sediment resulting from bank erosion. 
- Improve or enhance the stream corridor or shoreline for fish and wildlife habitat, aesthetics, or recreation.

--- 
### **Benefits** 
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🌾Soil Health]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🌾Reduced Erosion]]
[[🍃 Climate Resilience and Adaptation]]
[[🦪 Streambank and Shoreline Condition]]
[[🌾Plant Productivity]]
[[🦪 Riparian Condition]]
[[🍃 Carbon Sequestration]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement                                    |
| :-------------------------- | :------------------------------------------------------------------------- |
|                             | [[🐄 Plant Productivity and Health]]                                       |
|                             | [[🐄 Plant Structure and Composition]]                                     |
|                             | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] |
|                             | [[🐄 Plant Pest Pressure]]                                                 |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement     | (2) Moderate to Slight Improvement                        | (1) Slight Improvement                                                                                     |
| :--------------------------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| [[🏞️ Ponding and Flooding]] | [[🏞️ Aggregate Instability]]                             | [[🐄 Feed and Forage Imbalance]]                                                                           |
|                              | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
|                              | [[🐾 Aquatic Habitat for Fish and Other Organisms]]       | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]                                                                |
|                              | [[💧Sediment Transported to Surface Water]]               | [[💧Nutrients Transported to Surface Water]]                                                               |
|                              |                                                           | [[💧Elevated Water Temperature]]                                                                           |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/streambank-and-shoreline-protection-ft-580-conservation-practice) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/streambank-and-shoreline-protection-ft-580-conservation-practice) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 11.11.09 AM.png]]











`,$S=`### **Practice Definition**
##### Measure(s) used to stabilize the bed or bottom of a channel.

### **Purposes**
- Maintain or alter channel bed elevation or gradient 
- Restore natural streambed function 
- Manage water and sediment transport from a watershed to reduce sediment transport and/or deposition 
- Manage surface water and groundwater levels in floodplains, riparian areas, and wetlands

---
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🦪 Wetlands Conservation]]
[[🌾Reduced Erosion]]
[[🍃 Climate Resilience and Adaptation]]
[[🦪 Streambank and Shoreline Condition]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement |
| :-------------------------- | :-------------------------------------- |
|                             | [[🐄 Plant Pest Pressure]]              |
|                             | [[🐄 Plant Structure and Composition]]  |

> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement                                         | (1) Slight Improvement                              |
| :----------------------- | :------------------------------------------------------------------------- | :-------------------------------------------------- |
|                          | [[🏞️ Ponding and Flooding]]                                               | [[🐾 Aquatic Habitat for Fish and Other Organisms]] |
|                          | [[🏞️ Classic Gully Erosion]]                                              | [[💧Sediment Transported to Surface Water]]         |
|                          | [[🐄 Plant Productivity and Health]]                                       | [[💧Elevated Water Temperature]]                    |
|                          | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] |                                                     |
|                          | [[🏞️ Seeps]]                                                              |                                                     |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/channel-bed-stabilization-ft-584-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/channel-bed-stabilization-ft-584-conservation-practice-standard) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 11.48.39 AM.png]]


`,ew=`### **Practice Definition**
##### A structure in a water management system that conveys water, controls the direction or rate of flow, maintains a desired water surface elevation, or measures water.

<iframe width="560" height="315" src="https://www.youtube.com/embed/eYOy9QdcCsU?si=Nl2YYlmDS5XSSlzO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
Apply this practice as a component of a water management system to control the stage, discharge, distribution, delivery, or direction of water flow

---
### **Benefits** 
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🦪 Aquatic Habitat]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🦪 Wetlands Conservation]]
[[🌾Plant Productivity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement   | (4) Substantial to Moderate Improvement             |
| :---------------------------- | :-------------------------------------------------- |
| [[💧Surface Water Depletion]] | [[🐾 Aquatic Habitat for Fish and Other Organisms]] |
| [[💧Groundwater Depletion]]   |                                                     |

> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement     | (1) Slight Improvement                                               |
| :----------------------- | :------------------------------------- | :------------------------------------------------------------------- |
|                          | [[💧Naturally Available Moisture Use]] | [[💧Sediment Transported to Surface Water]]                          |
|                          | [[🏞️ Ponding and Flooding]]           | [[🐄 Inadequate Livestock Water Quantity, Quality and Distribution]] |
|                          | [[💧Inefficient Irrigation Water use]] | [[💧Elevated Water Temperature]]                                     |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/structure-for-water-control-no-587-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/structure-for-water-control-no-587-conservation-practice-standard) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 11.51.01 AM.png]]



`,nw=`### **Practice Definition**
##### Manage rate, source, placement, and timing of plant nutrients and soil amendments while reducing environmental impacts.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0B6fWKkgr2I?si=0Eg5KGARgfIVJ3NG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Improve plant health and productivity. 
- Reduce excess nutrients in surface and ground water. 
- Reduce emissions of objectionable odors. 
- Reduce emissions of particulate matter (PM) and PM precursors. 
- Reduce emissions of greenhouse gases (GHG). 
- Reduce emissions of ozone precursors. 
- Reduce the risk of potential pathogens from manure, biosolids, or compost application from reaching surface and ground water. 
- Improve or maintain soil organic matter.

---
### **Benefits**
The following benefits are associated with this practice
[[🌾Soil Health]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Water Quality]]
[[🌾Plant Productivity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                  | (4) Substantial to Moderate Improvement                                                                    |
| :------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| [[💧Nutrients Transported to Surface Water]] | [[🐄 Plant Productivity and Health]]                                                                       |
| [[💧Nutrients Transported to Groundwater]]   | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
|                                              | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]]   |
|                                              | [[🐄 Feed and Forage Imbalance]]                                                                           |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                            | (2) Moderate to Slight Improvement                           | (1) Slight Improvement                   |
| :-------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------- |
| [[🐾 Aquatic Habitat for Fish and Other Organisms]] | [[🏞️ Organic Matter Depletion]]                             | [[💧Salts Transported to Surface Water]] |
| [[🐄 Plant Structure and Composition]]              | [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]] | [[💧Salts Transported to Groundwater]]   |
| [[⚡️Emissions of Greenhouse Gasses (GHGs)]]         | [[🏞️ Concentration of Salts or Other Chemicals]]            |                                          |
| [[⚡️Emissions of Airborne Reactive Nitrogen]]       | [[⚡️Objectionable Odor]]                                     |                                          |
|                                                     | [[⚡️Emissions of Ozone Precursors]]                          |                                          |

---


### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/nutrient-management-ac-590-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


`,tw=`### **Practice Definition**
##### A system that combines an integrated pest management (IPM) decision-making process with natural resource conservation to address pest and environmental impacts.

### **Purposes**
- Reduce plant pest pressure 
- Reduce injury to beneficial organisms 
- Reduce transport of pesticides to surface and ground water 
- Reduce emissions of particulate matter (PM) and PM precursors (chemical droplet drift) 
- Reduce emissions of ozone precursors (pesticide volatilizations)

--- 
### **Benefits**

[[🌾Reduced Erosion]]
[[🌾Economic]]
[[🦪 Water Quality]]
[[🦪 Aquatic Habitat]]
[[🦪 Biodiversity]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                   | (4) Substantial to Moderate Improvement                   |
| :-------------------------------------------- | :-------------------------------------------------------- |
| [[💧Pesticides Transported to Surface Water]] | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] |
| [[💧Pesticides Transported to Groundwater]]   | [[🐄 Plant Pest Pressure]]                                |

> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement                                   | (1) Slight Improvement                                                        |
| :----------------------- | :------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
|                          | [[🏞️ Sheet and Rill Erosion]]                                       | [[⚡️Objectionable Odor]]                                                      |
|                          | [[🏞️ Wind Erosion]]                                                 | [[⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations]]] |
|                          | [[🏞️ Soil Organism Habitat Degradation]]                            |                                                                               |
|                          | [[🏞️ Ephemeral Gully Erosion]]                                      |                                                                               |
|                          | [[🐾 Aquatic Habitat for Fish and Other Organisms]]                  |                                                                               |
|                          | [[🏞️ Organic Matter Depletion]]                                     |                                                                               |
|                          | [[💧Sediment Transported to Surface Water]]                          |                                                                               |
|                          | [[🏞️ Classic Gully Erosion]]                                        |                                                                               |
|                          | [[🏞️ Compaction]]                                                   |                                                                               |
|                          | [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]]         |                                                                               |
|                          | [[🐄 Inadequate Livestock Water Quantity, Quality and Distribution]] |                                                                               |
|                          | [[⚡️Emissions of Ozone Precursors]]                                  |                                                                               |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/pest-management-conservation-system-ac-595-conservation-practice) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/pest-management-conservation-system-ac-595-conservation-practice) shows the potential effects of implementing this practice.![[Screenshot 2024-05-02 at 1.25.36 PM.png]]`,aw=`### **Practice Definition**
##### Establishing woody plants by planting, direct seeding, or through natural regeneration.

<iframe width="560" height="315" src="https://www.youtube.com/embed/eyh8USWjsRw?si=AiF-i3EHQj9UhgvS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Maintain or improve desirable plant diversity, productivity, and health by establishing woody plants. 
- Improve water quality by reducing excess nutrients and other pollutants in runoff and ground water. 
- Restore or maintain native plant communities. 
- Control erosion. 
- Create or improve habitat for target wildlife species, beneficial organisms, or pollinator species compatible with ecological characteristics of the site. 
- Sequester and store carbon. 
- Conserve energy 
- Provide livestock shelter

--- 
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🌾Soil Health]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🌾Reduced Erosion]]
[[🦪 Streambank and Shoreline Condition]]
[[🦪 Riparian Condition]]
[[🌾Livestock Health and Production]]
[[🍃 Carbon Sequestration]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                               | (4) Substantial to Moderate Improvement             |
| :-------------------------------------------------------- | :-------------------------------------------------- |
| [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] | [[🏞️ Ephemeral Gully Erosion]]                     |
| [[🐄 Plant Productivity and Health]]                      | [[💧Elevated Water Temperature]]                    |
| [[🏞️ Sheet and Rill Erosion]]                            | [[🐾 Aquatic Habitat for Fish and Other Organisms]] |
| [[🏞️ Wind Erosion]]                                      | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]         |
| [[🐄 Plant Structure and Composition]]                    | [[🏞️ Organic Matter Depletion]]                    |
| [[🐄 Plant Pest Pressure]]                                |                                                     |
| [[🏞️ Aggregate Instability]]                             |                                                     |
| [[🏞️ Soil Organism Habitat Degradation]]                 |                                                     |

> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                            | (2) Moderate to Slight Improvement                                         | (1) Slight Improvement                                                                                     |
| :-------------------------------------------------- | :------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| [[💧Sediment Transported to Surface Water]]         | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] | [[💧Nutrients Transported to Surface Water]]                                                               |
| [[⚡️Energy Efficiency of Equipment and Facilities]] | [[🏞️ Classic Gully Erosion]]                                              | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
| [[💧Surface Water Depletion]]                       | [[🏞️ Compaction]]                                                         | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]]   |
|                                                     | [[💧Seasonal High Water Table]]                                            | [[⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations]]                               |
|                                                     | [[🏞️ Seeps]]                                                              | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water]]                            |
|                                                     | [[⚡️Objectionable Odor]]                                                   | [[💧Salts Transported to Surface Water]]                                                                   |
|                                                     | [[🐄 Inadequate Livestock Shelter]]                                        | [[⚡️Emissions of Particulate Matter (PM) and PM Precursors]]                                               |
|                                                     |                                                                            | [[💧Pesticides Transported to Surface Water]]                                                              |
|                                                     |                                                                            | [[💧Naturally Available Moisture Use]]                                                                     |
|                                                     |                                                                            | [[💧Drifted Snow]]                                                                                         |
|                                                     |                                                                            | [[💧Pesticides Transported to Groundwater]]                                                                |
|                                                     |                                                                            | [[💧Salts Transported to Groundwater]]                                                                     |
|                                                     |                                                                            | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater]]                              |
|                                                     |                                                                            | [[💧Nutrients Transported to Groundwater]]                                                                 |
|                                                     |                                                                            | [[🏞️ Concentration of Salts or Other Chemicals]]                                                          |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/treeshrub-establishment-ac-612-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/treeshrub-establishment-ac-612-conservation-practice-standard) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 11.53.43 AM.png]]










`,iw=`### **Practice Definition**
##### A watering facility stores or provides drinking water to livestock or wildlife.

<iframe width="560" height="315" src="https://www.youtube.com/embed/z8W6Mw3wAxw?si=z9_kAjTGj5PDzwAO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Supply daily water requirements. 
- Improve animal distribution. 
- Provide a water source that is an alternative to a sensitive resource.

--- 
### **Benefits**

[[🌾Reduced Erosion]]
[[🌾Plant Productivity]] 
[[🌾Livestock Health and Production]]
[[🌾Economic]] 
[[🦪 Water Quality]]
[[🦪 Aquatic Habitat]]

---
### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                                          | (4) Substantial to Moderate Improvement                                    |
| :------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| [[🐄 Inadequate Livestock Water Quantity, Quality and Distribution]] | [[🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels]] |
|                                                                      | [[💧Nutrients Transported to Surface Water]]                               |

> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement                                                                         | (1) Slight Improvement                                                                                   |
| :----------------------- | :--------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
|                          | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]]                                                  | [[💧Elevated Water Temperature]]                                                                         |
|                          | [[🐄 Plant Productivity and Health]]                                                                       | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]] |
|                          | [[💧Sediment Transported to Surface Water]]                                                                | [[⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations]]                             |
|                          | [[🐄 Feed and Forage Imbalance]]                                                                           | [[🏞️ Classic Gully Erosion]]                                                                            |
|                          | [[🏞️ Sheet and Rill Erosion]]                                                                             | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water]]                          |
|                          | [[🏞️ Wind Erosion]]                                                                                       | [[💧Salts Transported to Surface Water]]                                                                 |
|                          | [[🏞️ Ephemeral Gully Erosion]]                                                                            | [[⚡️Energy Efficiency of Equipment and Facilities]]                                                      |
|                          | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |                                                                                                          |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/watering-facility-no-614-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 
`,rw=`### Practice Definition  
##### A hole drilled, dug, driven, bored, jetted, or otherwise constructed into an aquifer for agricultural water supply.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HPrw1BgNGbQ?si=VYrnMazakjvl0VZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
### Purposes
- Address the need for adequate livestock water quality and quantity 
- Provide water for terrestrial wildlife 
- Provide irrigation water

---
### Benefits
[[🌾Plant Productivity]]
[[🌾Livestock Health and Production]]
[[🌾Economic]] 

---
### Resource Concerns


> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                                          | (4) Substantial to Moderate Improvement |
| :------------------------------------------------------------------- | :-------------------------------------- |
| [[🐄 Inadequate Livestock Water Quantity, Quality and Distribution]] |                                         |


> *This practice also addresses the following resource concerns threats to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement     | (1) Slight Improvement                            |
| :----------------------- | :------------------------------------- | :------------------------------------------------ |
|                          | [[🏞️ Sheet and Rill Erosion]]         | [[🏞️ Concentration of Salts or Other Chemicals]] |
|                          | [[🏞️ Wind Erosion]]                   | [[🌾Plant Productivity]]                          |
|                          | [[🏞️ Ephemeral Gully Erosion]]        |                                                   |
|                          | [[💧Seasonal High Water Table]]        |                                                   |
|                          | [[💧Inefficient Irrigation Water use]] |                                                   |
|                          | [[🦪 Aquatic Habitat]]                 |                                                   |
|                          | [[🐄 Feed and Forage Imbalance]]       |                                                   |

> *This practice slightly exacerbates the following threats:*
> pathogens
---
### Resources from NRCS National

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/water-well-no-642-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/water-well-no-642-conservation-practice-standard) shows the potential effects of implementing this practice.![[Water Well Network Diagram.png]]`,ow=`### **Practice Definition**
##### Reestablishment of abiotic (physical and chemical) and biotic (biological) conditions necessary to support rare or declining natural assemblages of native plants and animals.

<iframe width="560" height="315" src="https://www.youtube.com/embed/f6zHS57zpBk?si=mh808H3HuXoWf0_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
To restore the physical conditions and/or unique plant community on sites that partially support, or once supported, a rare or declining natural community. Application of this practice addresses resource concerns of a degraded plant condition and/or inadequate wildlife habitat.

---
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🌾Soil Health]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🦪 Wetlands Conservation]]
[[🌾Reduced Erosion]]
[[🍃 Climate Resilience and Adaptation]]
[[🍃 Carbon Sequestration]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement                               | (4) Substantial to Moderate Improvement |
| :-------------------------------------------------------- | :-------------------------------------- |
| [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] | [[🐄 Plant Productivity and Health]]    |
| [[🐾 Aquatic Habitat for Fish and Other Organisms]]       | [[🐄 Plant Structure and Composition]]  |
|                                                           | [[🐄 Plant Pest Pressure]]              |

> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement | (2) Moderate to Slight Improvement          | (1) Slight Improvement                      |
| :----------------------- | :------------------------------------------ | :------------------------------------------ |
|                          | [[💧Sediment Transported to Surface Water]] | [[⚡️Emissions of Greenhouse Gasses (GHGs)]] |
|                          | [[🐄 Feed and Forage Imbalance]]            |                                             |
|                          | [[💧Elevated Water Temperature]]            |                                             |
|                          | [[🏞️ Sheet and Rill Erosion]]              |                                             |
|                          | [[🏞️ Wind Erosion]]                        |                                             |
|                          | [[🏞️ Ephemeral Gully Erosion]]             |                                             |

> *This practice slightly exacerbates the following resource concerns:*
> *  [[🏞️ Concentration of Salts or Other Chemicals]] 


---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/restoration-of-rare-or-declining-natural-communities-ac-643) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/restoration-of-rare-or-declining-natural-communities-ac-643) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 11.58.07 AM.png]]



`,sw=`### **Practice Definition**
##### Retaining, developing or managing wetland habitat for wetland wildlife.

### **Purposes**
To maintain, develop, or improve wetland habitat for waterfowl, shorebirds, fur-bearers, or other wetland dependent or associated flora and fauna

--- 
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🦪 Wetlands Conservation]]
[[🍃 Climate Resilience and Adaptation]]
[[🍃 Carbon Sequestration]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement |
| :-------------------------- | :-------------------------------------- |
|                             | [[🐄 Plant Pest Pressure]]              |
|                             | [[🐄 Plant Productivity and Health]]    |
|                             | [[🐄 Plant Structure and Composition]]  |

> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                    | (2) Moderate to Slight Improvement | (1) Slight Improvement                                                                                     |
| :------------------------------------------ | :--------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| [[💧Sediment Transported to Surface Water]] | [[🏞️ Ponding and Flooding]]       | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
|                                             | [[🐄 Feed and Forage Imbalance]]   |                                                                                                            |

> *This practice slightly exacerbates the following resource concerns:*
> *  [[⚡️Objectionable Odor]]

--- 
### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/wetland-wildlife-habitat-management-ac-644-conservation-practice) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/wetland-wildlife-habitat-management-ac-644-conservation-practice) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 12.23.36 PM.png]]




`,lw=`### **Practice Definition**
##### The inundation of lands to provide habitat for fish and/or wildlife.

### **Purposes**
To provide habitat for wildlife such as shorebirds, waterfowl, wading birds, mammals, fish, reptiles, amphibians and other species that require shallow water for at least a part of their life cycle.

---
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🦪 Wetlands Conservation]]
[[🍃 Climate Resilience and Adaptation]]
[[🍃 Carbon Sequestration]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement |
| :-------------------------- | :-------------------------------------- |
|                             | [[🐄 Plant Structure and Composition]]  |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (2) Moderate to Slight Improvement                                                                         | (1) Slight Improvement                                                        |
| :--------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] | [[🏞️ Organic Matter Depletion]]                                              |
| [[💧Sediment Transported to Surface Water]]                                                                | [[🏞️ Ponding and Flooding]]                                                  |
| [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water]]                            | [[💧Surface Water Depletion]]                                                 |
| [[🐄 Plant Productivity and Health]]                                                                       | [[💧Nutrients Transported to Surface Water]]                                  |
|                                                                                                            | [[💧Nutrients Transported to Groundwater]]                                    |
|                                                                                                            | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater]] |
|                                                                                                            | [[🐄 Plant Pest Pressure]]                                                    |
|                                                                                                            | [[🐄 Feed and Forage Imbalance]]                                              |

> *This practice slightly exacerbates the following resource concerns:*
> *  [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater]]
> * [[💧Salts Transported to Groundwater]] 

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/shallow-water-development-and-management-ac-646-conservation) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/shallow-water-development-and-management-ac-646-conservation) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 12.25.45 PM.png]]


`,cw=`### **Practice Definition**
##### A structure installed to replace or modify a missing or deficient wildlife habitat component.

### **Purposes**
- To provide structures, in proper amounts, locations and seasons to: 
- Enhance or sustain non-domesticated wildlife
- Modify existing structures that pose a hazard to wildlife.
--- 
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🌾Soil Health]]
[[🦪 Aquatic Habitat]]
[[🦪 Terrestrial Habitat]]
[[🦪 Water Quality]]
[[🌾Reduced Erosion]]
[[🦪 Biodiversity]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement                   |
| :-------------------------- | :-------------------------------------------------------- |
|                             | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] |

> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                            | (2) Moderate to Slight Improvement | (1) Slight Improvement |
| :-------------------------------------------------- | :--------------------------------- | :--------------------- |
| [[🐾 Aquatic Habitat for Fish and Other Organisms]] |                                    |                        |

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/structures-for-wildlife-no-649-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/structures-for-wildlife-no-649-conservation-practice-standard) shows the potential effects of implementing this practice.
![[Screenshot 2024-04-25 at 12.27.49 PM.png]]
`,uw=`### **Practice Definition**
##### The return of a wetland and its functions to a close approximation of its original condition as it existed prior to disturbance on a former or degraded wetland site.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nEmK7kydefc?si=Fbxq07kChL9PPPgD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### **Purposes**
- Conditions conducive to hydric soil maintenance. 
- Wetland hydrology (dominant water source, hydroperiod, and hydrodynamics). 
- Native hydrophytic vegetation (including the removal of undesired species, and/or seeding or planting of desired species). 
- Original fish and wildlife habitats
---
### **Benefits**
The following benefits are associated with this practice
- [[🦪 Wildlife and Ecosystem Connectivity]]
- [[🍃 GHG Emissions]]
- [[🦪 Aquatic Habitat]]
- [[🦪 Water Quality]]
- [[🌾Water Quantity and Availability]]
- [[🦪 Wetlands Conservation]]
- [[🍃 Climate Resilience and Adaptation]]
---
### **Resource Concerns**

> The primary resource concerns that this conservation practice addresses are:

| (5) Substantial Improvement                                                                                                                                                              | (4) Substantial to Moderate Improvement                                                                                                                                                                        |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[🐄 Plant Pest Pressure]]<br>[[🐄 Plant Productivity and Health]] <br>[[🐄 Feed and Forage Imbalance]]<br>[[💧Nutrients Transported to Surface Water]]<br>[[💧Surface Water Depletion]] | [[💧Nutrients Transported to Groundwater]] <br>[[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] <br>[[💧Sediment Transported to Surface Water]] <br> |

> This practice also addresses the following resource concerns to a lesser degree:

| (3) Moderate Improvement                                          | (2) Moderate to Slight Improvement                                                                                                                                                                                                                                             | (1) Slight Improvement                                                                                            |
| :---------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| [[🏞️ Organic Matter Depletion]] <br>[[🏞️ Ponding and Flooding]] | [[💧Pesticides Transported to Surface Water]] <br>[[💧Pesticides Transported to Groundwater]] <br>[[💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water]] <br>[[💧Salts Transported to Surface Water]] <br>[[⚡️Emissions of Greenhouse Gasses (GHGs)]] | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]] <br>[[🐾 Aquatic Habitat for Fish and Other Organisms]] |


>This practice slightly exacerbates the following resource concerns: 
[[⚡️Objectionable Odor]]

---
### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/wetland-restoration-ac-657-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 

* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/wetland-restoration-ac-657-conservation-practice-standard) shows the potential effects of implementing this practice.


![[Screenshot 2024-04-25 at 12.30.04 PM.png]]
`,dw=`### **Practice Definition**
##### A wetland created on a site location that was historically not a wetland.

### **Purposes**
- Create wetland functional capacity for floodwater storage 
- Create wetland functional capacity to provide fish and wildlife habitat 
- Create a native plant community adapted to growth and regeneration in anaerobic conditions

---
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🦪 Wetlands Conservation]]
[[🍃 Climate Resilience and Adaptation]]
[[🍃 Carbon Sequestration]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement   |
| :-------------------------- | :---------------------------------------- |
| <br>                        | [[🐄 Plant Pest Pressure]]                |
| <br>                        | [[🐄 Plant Productivity and Health]] <br> |
| <br>                        | [[🐄 Plant Structure and Composition]]    |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                     | (2) Moderate to Slight Improvement                                              | (1) Slight Improvement                                                                                     |
| :------------------------------------------- | :------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------- |
| [[💧Nutrients Transported to Surface Water]] | [[🏞️ Organic Matter Depletion]] <br>                                           | [[🏞️ Ponding and Flooding]]<br>                                                                           |
| [[⚡️Emissions of Greenhouse Gasses (GHGs)]]  | [[💧Surface Water Depletion]]                                                   | [[💧Nutrients Transported to Groundwater]]                                                                 |
|                                              | [[💧Sediment Transported to Surface Water]]                                     | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
|                                              | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water]] | [[💧Pesticides Transported to Surface Water]]                                                              |
|                                              | [[🐄 Feed and Forage Imbalance]]                                                | [[💧Pesticides Transported to Groundwater]]                                                                |
|                                              | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]]                       | [[💧Salts Transported to Surface Water]]                                                                   |
|                                              |                                                                                 | [[🐾 Aquatic Habitat for Fish and Other Organisms]]                                                        |

> *This practice slightly exacerbates the following resource concerns:*
> *  [[⚡️Objectionable Odor]]
> * [[💧Seasonal High Water Table]] 

--- 

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/wetland-creation-ac-658-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/wetland-creation-ac-658-conservation-practice-standard) shows the potential effects of implementing this practice.




`,fw=`### **Practice Definition**
##### The augmentation of wetland functions beyond the original natural conditions on a former, degraded, or naturally functioning wetland site; sometimes at the expense of other functions.

### **Purposes**
- To enhance hydric soil functions (changing soil hydrodynamic and/or bio-geochemical properties). 
- To enhance wetland hydrology (dominant water source, hydroperiod, and hydrodynamics). 
- To enhance vegetation (including the removal of undesired species, and/or seeding or planting of desired species). 
- To enhance plant and animal habitats.

---
### **Benefits**
The following benefits are associated with this practice
[[🦪 Wildlife and Ecosystem Connectivity]]
[[🍃 GHG Emissions]]
[[🦪 Aquatic Habitat]]
[[🦪 Water Quality]]
[[🌾Water Quantity and Availability]]
[[🦪 Wetlands Conservation]]
[[🍃 Climate Resilience and Adaptation]]
[[🍃 Carbon Sequestration]]
[[🦪 Biodiversity]]
[[🌾Economic]]

---

### **Resource Concerns**

> *This conservation practice primarily addresses the following resource concerns:*

| (5) Substantial Improvement | (4) Substantial to Moderate Improvement   |
| :-------------------------- | :---------------------------------------- |
| <br>                        | [[🐄 Plant Pest Pressure]]<br>            |
| <br>                        | [[🐄 Plant Productivity and Health]] <br> |
| <br>                        | [[🐄 Plant Structure and Composition]]    |


> *This practice also addresses the following resource concerns to a lesser degree:*

| (3) Moderate Improvement                         | (2) Moderate to Slight Improvement                                              | (1) Slight Improvement                                                                                     |
| :----------------------------------------------- | :------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------- |
| [[💧Nutrients Transported to Surface Water]]<br> | [[💧Sediment Transported to Surface Water]]                                     | [[🏞️ Ponding and Flooding]]<br>                                                                           |
|                                                  | [[💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water]] | [[🏞️ Organic Matter Depletion]]                                                                           |
|                                                  | [[🐄 Feed and Forage Imbalance]]                                                | [[💧Surface Water Depletion]]                                                                              |
|                                                  | [[🐾 Terrestrial Habitat for Wildlife and Invertebrates]]                       | [[💧Nutrients Transported to Groundwater]]                                                                 |
|                                                  |                                                                                 | [[💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water]] |
|                                                  |                                                                                 | [[💧Pesticides Transported to Surface Water]]                                                              |
|                                                  |                                                                                 | [[💧Pesticides Transported to Groundwater]]                                                                |
|                                                  |                                                                                 | [[💧Salts Transported to Surface Water]]                                                                   |
|                                                  |                                                                                 | [[⚡️Emissions of Greenhouse Gasses (GHGs)]]                                                                |
|                                                  |                                                                                 | [[🐾 Aquatic Habitat for Fish and Other Organisms]]                                                        |

> *This practice slightly exacerbates the following resource concerns:*
> *  [[⚡️Objectionable Odor]]

---

### **Resources from NRCS National**

* The [Conservation Practice Standard](https://www.nrcs.usda.gov/resources/guides-and-instructions/wetland-enhancement-ac-659-conservation-practice-standard) lays out the criteria and specifications for each conservation practice. 


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/wetland-enhancement-ac-659-conservation-practice-standard) shows the potential effects of implementing this practice.


`,hw=`##### Definition
Overly dense plantings, “fuel ladders” of dry branches extending from tree trunks and debris or litter (sticks, stalks, and leaves on the ground) can create an increased risk of wildfires. When wildfire occurs, it risks human safety, structures, plants, animals, and air resources.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate to Substantial Improvement:**
[[CP 314 - Brush Management]]
[[CP 315 - Herbaceous Weed Treatment]]


**Moderate Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 472 - Access Control]]
`,mw=`##### Definition
Emissions of airborne reactive nitrogen refer to the release of nitrogen compounds like nitrogen oxides (NOx), ammonia (NH3), and nitrous oxide (N2O) into the atmosphere. These compounds contribute to several environmental issues, including the formation of particulate matter and ground-level ozone, eutrophication of water bodies, soil and ecosystem damage, and climate change impacts. 

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate Improvement:**
[[CP 590 - Nutrient Management]]

**Slight to Moderate Improvement:**
[[CP 329 - Residue and Tillage Mgmt (No Till)]]

**Slight Improvement:**
[[CP 340 - Cover Crop]] 
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]] 
[[CP 327 - Conservation Cover]]
`,pw=`##### Definition
Greenhouse gases trap heat in the Earth’s atmosphere. Emissions from sources such as animal operations, the use of nitrogen fertilizers, the use of fossil fuels, or loss of carbon from soils and plants can increase concentrations of these gases which contributes to the greenhouse effect. The greenhouse effect traps heat close to the surface of the earth. The primary agricultural greenhouse gases are methane, nitrous oxide, and carbon dioxide.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate to Substantial Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 327 - Conservation Cover]]


**Moderate Improvement:**
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 420 - Wildlife Habitat Planting]] 
[[CP 550 - Range Planting]]
[[CP 657 - Wetland Restoration]]
[[CP 391 - Riparian Forest buffer]]
[[CP 590 - Nutrient Management]] 
[[CP 658 - Wetland Creation]]

**Slight to Moderate Improvement:**
[[CP 516 - Livestock Pipeline]]
[[CP 528 - Prescribed Grazing]] 
[[CP 340 - Cover Crop]] 
[[CP 342 - Critical Area Planting]]
[[CP 390 - Riparian Herbaceous Cover]] 

**Slight Improvement:**
[[CP 382 - Fence]] 
[[CP 580 - Streambank and Shoreline Protection]] 
[[CP 314 - Brush Management]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 328 - Conservation Crop Rotation]] 
[[CP 472 - Access Control]] 
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 659 - Wetland Enhancement]] 
[[CP 643 - Restoration of Rare and Declining Habitats]] `,gw=`##### Definition
The emission of ozone precursors refers to the release of certain gases that can contribute to the formation of ground-level ozone, a harmful air pollutant and a primary component of smog.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate Improvement:**
[[CP 329 - Residue and Tillage Mgmt (No Till)]]

**Slight to Moderate Improvement:**
[[CP 590 - Nutrient Management]]
[[CP 595 - Pest Management Conservation System]] 

**Slight Improvement:**
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]] 
[[CP 327 - Conservation Cover]] 
[[CP 472 - Access Control]] `,vw=`
##### Definition
The emission of particulate matter refers to the release of small solid particles or liquid droplets into the air. These particles can come from various natural and human-made sources, and they can have significant impacts on air quality, human health, and the environment. The emission of particulate matter precursors refers to the release of gaseous pollutants that can undergo chemical reactions in the atmosphere to form particulate matter (PM). While particulate matter can be directly emitted from sources like combustion processes or dust, some particles are formed through secondary processes involving precursor gases.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 329 - Residue and Tillage Mgmt (No Till)]]

**Moderate to Substantial Improvement:**
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 342 - Critical Area Planting]]
[[CP 327 - Conservation Cover]]

**Moderate Improvement:**
[[CP 340 - Cover Crop]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 550 - Range Planting]]

**Slight to Moderate Improvement:**
[[CP 561 - Heavy Use Area Protection]]
[[CP 528 - Prescribed Grazing]]
[[CP 472 - Access Control]] 
[[CP 590 - Nutrient Management]]
[[CP 595 - Pest Management Conservation System]] 

**Slight Improvement:**
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 328 - Conservation Crop Rotation]] 
[[CP 391 - Riparian Forest buffer]] 
[[CP 390 - Riparian Herbaceous Cover]] `,bw=`##### Definition
Inefficient energy use of farm equipment or facilities can cause spending on energy to increase in order to meet production goals. This can occur when equipment operates more than needed, is outdated or improperly maintained, and when unimproved facilities, such as agricultural buildings, contribute to inefficient energy use when not adequately sealed and insulated.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate Improvement:**
[[CP 516 - Livestock Pipeline]]
[[CP 612 - Tree and Shrub Establishment]]


**Slight Improvement:**
[[CP 614 - Watering Facility]] 
`,yw=`##### Definition
Inefficient field operations, such as taking unnecessary trips across the field or overlapping areas when applying fertilizer, can increase your energy costs and use of non-renewable energy sources. Money and energy can be saved by adopting practices that help reduce energy usage.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate to Substantial Improvement:**
[[CP 329 - Residue and Tillage Mgmt (No Till)]]

**Moderate Improvement:**
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]

**Slight to Moderate Improvement:**
[[CP 528 - Prescribed Grazing]] 
[[CP 328 - Conservation Crop Rotation]] 

**Slight Improvement:**
[[CP 561 - Heavy Use Area Protection]] 
[[CP 340 - Cover Crop]] 
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 342 - Critical Area Planting]] 
[[CP 614 - Watering Facility]] 
[[CP 391 - Riparian Forest buffer]] 
[[CP 595 - Pest Management Conservation System]] 
[[CP 390 - Riparian Herbaceous Cover]] `,Cw=`##### Definition
Foul odors can arise from agricultural operations, such as manure storage, animal housing, manure application, or burning biomass. These odors can be irritating to communities or individuals and are often harmless, however some odors can cause health problems when they occur in high concentrations very near the source. Volatile organic compounds (VOCs), ammonia, and odorous sulfur compounds are known to cause nuisance conditions.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Slight to Moderate Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 590 - Nutrient Management]] 

**Slight Improvement:**
[[CP 528 - Prescribed Grazing]] 
[[CP 391 - Riparian Forest buffer]] 
[[CP 595 - Pest Management Conservation System]]  

**Slight Worsening:**
[[CP 657 - Wetland Restoration]] 
[[CP 658 - Wetland Creation]] 
[[CP 659 - Wetland Enhancement]] 
[[CP 644 - Wetland Wildlife Habitat Management]] `,Sw=`##### Definition
A soil aggregate, or water-stable aggregate, is made from particles of sand, silt, clay and organic matter that are bonded together. When stable, these aggregates greatly contribute to healthy soils by stabilizing soil carbon, allowing proper water infiltration and water holding capacity, aeration, and more. 

Many management activities used on working lands can lead to degradation of soil structure and aggregate stability

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 612 - Tree and Shrub Establishment]]


**Moderate to Substantial Improvement:**
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 327 - Conservation Cover]]
[[CP 391 - Riparian Forest buffer]]

**Moderate Improvement:**
[[CP 328 - Conservation Crop Rotation]]
[[CP 550 - Range Planting]]

**Slight to Moderate Improvement:**
[[CP 580 - Streambank and Shoreline Protection]] 
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]] 
[[CP 342 - Critical Area Planting]] 
[[CP 410 - Grade Stabilization Structure]]


**Slight Improvement:**
[[CP 382 - Fence]] 
[[CP 561 - Heavy Use Area Protection]] 
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 472 - Access Control]]
`,ww=`##### Definition
Erosion that occurs on banks and shorelines can degrade water quality from the additional sediment that is added. This type of erosion occurs along large bodies of water such as lakes, rivers, and oceans, and also along smaller bodies of water such as streams.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 472 - Access Control]]
[[CP 578 - Stream Crossing]]
[[CP 395 - Stream Habitat Improvement and Management]]

**Moderate to Substantial Improvement:**
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 342 - Critical Area Planting]]
[[CP 614 - Watering Facility]]
[[CP 391 - Riparian Forest buffer]]
[[CP 390 - Riparian Herbaceous Cover]]

**Moderate Improvement:** 
[[CP 528 - Prescribed Grazing]]

**Slight to Moderate Improvement:**
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 550 - Range Planting]]
[[CP 584 - Channel Bed Stablilization]] 
[[CP 327 - Conservation Cover]]
[[CP 410 - Grade Stabilization Structure]] 

**Slight Improvement:**
[[CP 382 - Fence]] 
[[CP 396 - Aquatic Organism Passage]] 

**Slight Worsening:**
[[CP 356 - Dike and Levee]]
`,Pw=`##### Definition
Concentrated streams of running water can cause soil erosion by creating sharp ditches or small valleys in land (gullies). This type of erosion can be classified into one of two categories based on the size and pattern of the damage. Running water can sharply erode soil and create large ditches or small valleys (classic gullies). If left untreated, these gullies may grow and create short cliffs or bluffs (head cutting) and grow deeper and wider when water removes soil from the stream’s bed or valley’s floor causing the banks to collapse (lateral widening).

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate to Substantial Improvement:**
[[CP 342 - Critical Area Planting]]
[[CP 472 - Access Control]]

**Moderate Improvement**:
[[CP 391 - Riparian Forest buffer]]

**Slight to Moderate Improvement**
[[CP 561 - Heavy Use Area Protection]] 
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 356 - Dike and Levee]] 
[[CP 550 - Range Planting]] 
[[CP 584 - Channel Bed Stablilization]]
[[CP 595 - Pest Management Conservation System]] 
[[CP 410 - Grade Stabilization Structure]] 

**Slight Improvement** 
[[CP 528 - Prescribed Grazing]] 
[[CP 315 - Herbaceous Weed Treatment]] 
[[CP 512 - Pasture and Hay Planting]]
[[CP 327 - Conservation Cover]]
[[CP 614 - Watering Facility]]
`,Tw=`##### Definition
Soil compaction occurs when soil particles become compressed. This can cause the soil to become overly dense which can impact the rate of drainage and saturation, can cause aeration-related problems, and can make it harder for roots to effectively penetrate the soil. Because soil properties can vary across the landscape, different soils have different risks for compaction. Management activities that cause compaction in one soil may not cause compaction in another.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate to Substantial Improvement:**
[[CP 550 - Range Planting]]
[[CP 472 - Access Control]]
[[CP 390 - Riparian Herbaceous Cover]]

**Moderate Improvement:**
[[CP 327 - Conservation Cover]]

**Slight to Moderate Improvement:**
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]] 
[[CP 329 - Residue and Tillage Mgmt (No Till)]] 
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 342 - Critical Area Planting]] 
[[CP 391 - Riparian Forest buffer]]
[[CP 595 - Pest Management Conservation System]] 

**Slight Improvement:**
[[CP 382 - Fence]] 
[[CP 561 - Heavy Use Area Protection]]
[[CP 328 - Conservation Crop Rotation]]
`,Ew=`##### Definition
High levels of salt and other chemicals in soils can lead to pervasive problems such as negatively impacting germination, seedlings, vegetative growth, and a reduction in crop yields.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Slight to Moderate Improvement:**
[[CP 528 - Prescribed Grazing]] 
[[CP 328 - Conservation Crop Rotation]] 
[[CP 327 - Conservation Cover]]
[[CP 590 - Nutrient Management]]
[[CP 390 - Riparian Herbaceous Cover]] 

**Slight Improvement:**
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 356 - Dike and Levee]] 
[[CP 342 - Critical Area Planting]] 
[[CP 550 - Range Planting]]
[[CP 391 - Riparian Forest buffer]]

**Slight Worsening:**
[[CP 643 - Restoration of Rare and Declining Habitats]]`,_w=`##### Definition
Concentrated streams of running water can cause soil erosion by creating sharp ditches or small valleys in land (gullies). This type of erosion can be classified into one of two categories based on the size and pattern of the damage. Certain events can cause temporary, wide areas of soil erosion that usually doesn’t run deeper than the tilled layer (ephemeral gullies). They typically occur in the same flow area and while they can usually be fixed over time through the use of conservation practices and minimized through practices that build soil health.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 342 - Critical Area Planting]]

**Moderate to Substantial Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 550 - Range Planting]]
[[CP 472 - Access Control]]

**Moderate Improvement**
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 314 - Brush Management]]
[[CP 512 - Pasture and Hay Planting]]

**Slight to Moderate Improvement**
[[CP 561 - Heavy Use Area Protection]] 
[[CP 315 - Herbaceous Weed Treatment]] 
[[CP 614 - Watering Facility]] 
[[CP 595 - Pest Management Conservation System]] 
[[CP 643 - Restoration of Rare and Declining Habitats]] 

**Slight Improvement**
[[CP 327 - Conservation Cover]] 
[[CP 391 - Riparian Forest buffer]] 
[[CP 390 - Riparian Herbaceous Cover]]

**Slight Worsening** 
[[CP 329 - Residue and Tillage Mgmt (No Till)]] `,Rw=`
##### Definition
Organic matter depletion refers to the gradual loss or reduction of organic materials in the soil over time. Organic matter includes materials derived from once-living organisms, such as plant and animal residues, humus, and other organic compounds. If soil cannot adequately provide nutrition for plant growth, animal habitats, or soil biological activity, then it may suffer from organic matter depletion.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 342 - Critical Area Planting]]
[[CP 327 - Conservation Cover]]

**Moderate to Substantial Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 550 - Range Planting]]
[[CP 391 - Riparian Forest buffer]]
[[CP 390 - Riparian Herbaceous Cover]]

**Moderate Improvement:**
[[CP 329 - Residue and Tillage Mgmt (No Till)]]

**Slight to Moderate Improvement:**
[[CP 340 - Cover Crop]] 
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]] 
[[CP 590 - Nutrient Management]] 
[[CP 595 - Pest Management Conservation System]]
[[CP 658 - Wetland Creation]]

**Slight Improvement:**
[[CP 472 - Access Control]]
[[CP 657 - Wetland Restoration]] 
[[CP 659 - Wetland Enhancement]] 
[[CP 646 - Shallow Water Development and Management]] `,xw=`##### Definition
Excess water in soil can cause issues such as ponding, flooding, and other drainage issues. If left untreated, these issues can make it impossible to grow vegetation or crops and make buildings or structures more prone to flooding.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate to Substantial Improvement:**
[[CP 356 - Dike and Levee]]

**Moderate Improvement:**
[[CP 580 - Streambank and Shoreline Protection]]

**Slight to Moderate Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 550 - Range Planting]] 
[[CP 584 - Channel Bed Stablilization]]
[[CP 587 - Structure for Water Control]]
[[CP 410 - Grade Stabilization Structure]]
[[CP 644 - Wetland Wildlife Habitat Management]] 

**Slight Improvement:**
[[CP 340 - Cover Crop]]
[[CP 314 - Brush Management]]
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 512 - Pasture and Hay Planting]] 
[[CP 327 - Conservation Cover]]
[[CP 472 - Access Control]] 
[[CP 657 - Wetland Restoration]]
[[CP 396 - Aquatic Organism Passage]] 
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 646 - Shallow Water Development and Management]] 

**Slight Worsening:**
[[CP 561 - Heavy Use Area Protection]]
[[CP 391 - Riparian Forest buffer]]

**Slight to Moderate Worsening**
[[CP 390 - Riparian Herbaceous Cover]]
`,Aw=`##### Definition
Seeps occur when subsurface water gradually reaches the earth’s surface creating areas of moisture on land. Water seeps can restrict plant growth, degrade water resources, cause damage in or around buildings, among other problems.


The headings below categorize the degree to which the listed conservation practices improve this threat. 


**Slight to Moderate Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 390 - Riparian Herbaceous Cover]] 

**Slight Improvement:**
[[CP 340 - Cover Crop]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 327 - Conservation Cover]]
[[CP 472 - Access Control]] 
[[CP 391 - Riparian Forest buffer]]


**Slight Worsening:**
[[CP 356 - Dike and Levee]]
`,Mw=`##### Definition
Sheet and rill erosion are two interrelated forms of water erosion that occur on sloping lands due to rainfall and runoff. Sheet erosion involves the uniform removal of thin layers of soil by runoff water across the entire surface area, while rill erosion occurs when runoff concentrates into small, well-defined channels or trenches (rills) that scour the soil. Both forms are prevalent on bare or poorly vegetated lands and can lead to significant soil loss, reduced productivity, and sediment pollution if left unchecked.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 342 - Critical Area Planting]]

**Moderate to Substantial Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 550 - Range Planting]]
[[CP 327 - Conservation Cover]]

**Moderate Improvement:**
[[CP 314 - Brush Management]]
[[CP 472 - Access Control]]
[[CP 391 - Riparian Forest buffer]]

**Slight to Moderate Improvement**
[[CP 561 - Heavy Use Area Protection]] 
[[CP 420 - Wildlife Habitat Planting]] 
[[CP 614 - Watering Facility]]
[[CP 595 - Pest Management Conservation System]] 
[[CP 390 - Riparian Herbaceous Cover]] 
[[CP 643 - Restoration of Rare and Declining Habitats]]

**Slight Improvement**
[[CP 382 - Fence]]


`,Nw=`#### Definition
Healthy soil is a living ecosystem that contains a diverse community of organisms. These organisms help stabilize and create space in the soil to enable air and gas exchange, allow water to infiltrate and be stored, and create an environment for fauna to reside and plants to grow well.

Soil health is the capacity of the soil to function as a vital living ecosystem that supports plants, animals, and humans. When there is inadequate food, cover, space, shelter, air, or water for these organisms to thrive, soil health is negatively impacted and soil functions degrade, causing a large number of symptoms including erosion, plant health issues, and water and air quality problems. Four soil health management systems principles contribute to maintaining soil organism habitat: maximizing soil cover and minimizing disturbance protects habitat, and maximizing the presence of living roots and biodiversity feeds soil biota.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 391 - Riparian Forest buffer]]

**Moderate to Substantial Improvement:**
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 512 - Pasture and Hay Planting]]

**Moderate Improvement:**
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 550 - Range Planting]]

**Slight to Moderate Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 342 - Critical Area Planting]] 
[[CP 327 - Conservation Cover]] 
[[CP 595 - Pest Management Conservation System]] 
[[CP 410 - Grade Stabilization Structure]]

**Slight Improvement:**
[[CP 382 - Fence]]
[[CP 315 - Herbaceous Weed Treatment]] 
[[CP 328 - Conservation Crop Rotation]]
[[CP 472 - Access Control]]

**Slight to Moderate Worsening:**
[[CP 561 - Heavy Use Area Protection]]
`,kw=`##### Definition
Subsidence is a loss of soil volume and depth caused by oxidation of organic matter in peat, bog, and muck soils.  Soil scientists call these soils “Histosols”.  The loss of soil volume is caused by organic material breaking down faster than it accumulates.  Subsidence reduces an organic soil’s productivity, creates drainage problems, makes trees vulnerable to windthrow, and causes other land management problems.  Naturally occurring sinkholes; and sinkholes and depressions caused by underground activities are excluded from the NRCS subsidence resource concern.  

Excessive water drainage, soil disturbance, and extended drought are the leading causes of subsidence.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Slight Improvement:**
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
`,Hw=`##### Definition
Wind erosion causes damage to land by transporting soil, which can cause soil loss, dryness, and soil deterioration. This type of erosion often occurs on flat, bare areas, where the soil is sandy, dry, and loose.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 342 - Critical Area Planting]]

**Moderate to Substantial Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 550 - Range Planting]]
[[CP 327 - Conservation Cover]]

**Moderate Improvement**
[[CP 314 - Brush Management]]

**Slight to Moderate Improvement**
[[CP 561 - Heavy Use Area Protection]] 
[[CP 614 - Watering Facility]] 
[[CP 391 - Riparian Forest buffer]]
[[CP 595 - Pest Management Conservation System]] 
[[CP 390 - Riparian Herbaceous Cover]] 

**Slight Improvement**
[[CP 472 - Access Control]] 
`,zw=`##### Definition
Livestock require five major classes of nutrients: energy, protein, minerals, vitamins, and water. All five are essential for normal health and production. When the quality or quantity of feed and forage do not meet the nutritional needs of livestock, then production goals can be negatively impacted.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 550 - Range Planting]]

**Moderate to Substantial Improvement:**
[[CP 314 - Brush Management]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 590 - Nutrient Management]]
[[CP 390 - Riparian Herbaceous Cover]]

**Moderate Improvement:**
[[CP 382 - Fence]]
[[CP 472 - Access Control]]

**Slight to Moderate Improvement:**
[[CP 328 - Conservation Crop Rotation]] 
[[CP 657 - Wetland Restoration]] 
[[CP 614 - Watering Facility]] 
[[CP 578 - Stream Crossing]] 
[[CP 658 - Wetland Creation]] 
[[CP 659 - Wetland Enhancement]] 
[[CP 644 - Wetland Wildlife Habitat Management]] 
[[CP 643 - Restoration of Rare and Declining Habitats]] 

**Slight improvement:**
[[CP 580 - Streambank and Shoreline Protection]] 
[[CP 340 - Cover Crop]] 
[[CP 646 - Shallow Water Development and Management]] `,Ow=`##### Definition
If livestock do not have adequate protection from the weather and elements, such as natural vegetation or landscape features, then their health and production goals can be negatively impacted. During periods of high heat or extreme cold weather, shelter can protect livestock which is beneficial to their health and performance.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**


**Moderate to Substantial Improvement:**


**Moderate Improvement:**


**Slight to Moderate Improvement:**
[[CP 528 - Prescribed Grazing]] 
[[CP 612 - Tree and Shrub Establishment]] 

**Slight Improvement:**
[[CP 472 - Access Control]] 
[[CP 391 - Riparian Forest buffer]] `,Dw=`##### Definition
Livestock water requirements are influenced by several factors, including rate of gain, pregnancy, lactation, activity, type of diet, feed intake, and environmental temperature. When the quality, quantity, and/or distribution of drinking water is limited, livestock health and production can be negatively impacted.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 516 - Livestock Pipeline]]
[[CP 614 - Watering Facility]]

**Moderate to Substantial Improvement:**

**Moderate Improvement:**

**Slight to Moderate Improvement:**
[[CP 528 - Prescribed Grazing]] 
[[CP 595 - Pest Management Conservation System]] 
[[CP 578 - Stream Crossing]] 

**Slight Improvement:**
[[CP 587 - Structure for Water Control]] `,Ww=`
##### Definition 
Plants generally live alongside other plants, insects, fungi, bacteria, and viruses without major issues. However, these organisms can become plant pests when interactions between the organisms and plants become unbalanced and begin to cause damage.

Some examples of plant pests are undesired plants, insects, diseases, animals,  
soil borne pathogens, and nematodes that cause excessive damage to plants and plant communities.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 314 - Brush Management]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 472 - Access Control]]


**Moderate to Substantial Improvement:**
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 340 - Cover Crop]]
[[CP 342 - Critical Area Planting]]
[[CP 550 - Range Planting]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 327 - Conservation Cover]]
[[CP 657 - Wetland Restoration]]
[[CP 595 - Pest Management Conservation System]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]

**Moderate Improvement:**
[[CP 328 - Conservation Crop Rotation]]
[[CP 391 - Riparian Forest buffer]]

**Slight to Moderate Improvement:**
[[CP 528 - Prescribed Grazing]] 

**Slight Improvement:**
[[CP 646 - Shallow Water Development and Management]] `,qw=`##### Definition
Reduced plant productivity refers to a decline in the ability of plants to grow, develop, and produce biomass or yield at their full potential. It can manifest in various ways, such as stunted growth, lower crop yields, reduced forage production, or decreased overall plant vigor. Plants can become less productive or have diminishing health due to a number of causes such as inadequate soil fertility, improper nutrient applications, mismanagement of soil condition (physical, biological, chemical), lack of water, weather events like drought or flooding, or inadequate adaptation to their environment. Reduced plant productivity or quality can also impact other resources.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 314 - Brush Management]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 550 - Range Planting]]
[[CP 391 - Riparian Forest buffer]]
[[CP 390 - Riparian Herbaceous Cover]]

**Moderate to Substantial Improvement:**
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 327 - Conservation Cover]]
[[CP 657 - Wetland Restoration]]
[[CP 590 - Nutrient Management]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]

**Moderate Improvement:**
[[CP 472 - Access Control]]

**Slight to Moderate Improvement:**
[[CP 382 - Fence]] 
[[CP 516 - Livestock Pipeline]] 
[[CP 340 - Cover Crop]] 
[[CP 329 - Residue and Tillage Mgmt (No Till)]] 
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]] 
[[CP 342 - Critical Area Planting]] 
[[CP 584 - Channel Bed Stablilization]] 
[[CP 614 - Watering Facility]] 
[[CP 646 - Shallow Water Development and Management]] 

**Slight Improvement:**
[[CP 420 - Wildlife Habitat Planting]] `,Bw=`##### Definition
Plant structure and composition refer to the physical characteristics, architecture, and makeup of plants, including their various components and the way these components are arranged and organized. Preserving and conserving plant structure and composition is crucial for maintaining healthy ecosystems, safeguarding biodiversity, mitigating soil erosion, regulating water cycles, and supporting sustainable development. Efforts to protect and restore native vegetation are essential to address these environmental threats and promote ecological balance.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 314 - Brush Management]]
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 550 - Range Planting]]
[[CP 391 - Riparian Forest buffer]]

**Moderate to Substantial Improvement:**
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 528 - Prescribed Grazing]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 342 - Critical Area Planting]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 327 - Conservation Cover]]
[[CP 472 - Access Control]]
[[CP 657 - Wetland Restoration]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 646 - Shallow Water Development and Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]

**Moderate Improvement:**
[[CP 590 - Nutrient Management]]

**Slight to Moderate Improvement:**
[[CP 382 - Fence]] 
[[CP 420 - Wildlife Habitat Planting]] 

**Slight Improvement:**
[[CP 340 - Cover Crop]] 
[[CP 356 - Dike and Levee]] 
[[CP 328 - Conservation Crop Rotation]] `,jw=`
##### Definition
Habitat destruction poses a great risk to maintaining sustainable populations of wild aquatic animals, such as fish, and other organisms. Problems can arise when fish and other aquatic wildlife lack sufficient food, cover, water, and space. Habitat degradation can occur when there is not enough water to sustain aquatic wildlife, when water quality is insufficient to meet needs, and other causes.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 391 - Riparian Forest buffer]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 396 - Aquatic Organism Passage]]
[[CP 643 - Restoration of Rare and Declining Habitats]]

**Moderate to Substantial Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 587 - Structure for Water Control]]

**Moderate Improvement:**
[[CP 472 - Access Control]]
[[CP 590 - Nutrient Management]]
[[CP 649 - Structures for Wildlife]]
[[CP 578 - Stream Crossing]]

**Slight to Moderate Improvement:**
[[CP 580 - Streambank and Shoreline Protection]] 
[[CP 420 - Wildlife Habitat Planting]] 
[[CP 595 - Pest Management Conservation System]] 
[[CP 390 - Riparian Herbaceous Cover]] 

**Slight Improvement:**
[[CP 382 - Fence]] 
[[CP 528 - Prescribed Grazing]] 
[[CP 342 - Critical Area Planting]] 
[[CP 550 - Range Planting]] 
[[CP 584 - Channel Bed Stablilization]] 
[[CP 327 - Conservation Cover]] 
[[CP 657 - Wetland Restoration]] 
[[CP 410 - Grade Stabilization Structure]] 
[[CP 658 - Wetland Creation]] 
[[CP 659 - Wetland Enhancement]] 

**Slight Worsening:**
[[CP 356 - Dike and Levee]] `,Gw=`##### Definition
Habitat destruction poses a great risk to maintaining sustainable populations of wild land animals and organisms. Problems can arise when wildlife lack proper nutrition, water, shelter, space to locate a mate, and areas to rest.



The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 420 - Wildlife Habitat Planting]]
[[CP 391 - Riparian Forest buffer]]
[[CP 644 - Wetland Wildlife Habitat Management]]
[[CP 646 - Shallow Water Development and Management]]
[[CP 643 - Restoration of Rare and Declining Habitats]]

**Moderate to Substantial Improvement:**
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 472 - Access Control]]
[[CP 595 - Pest Management Conservation System]]
[[CP 649 - Structures for Wildlife]]

**Moderate Improvement:**
[[CP 314 - Brush Management]]
[[CP 327 - Conservation Cover]]
[[CP 395 - Stream Habitat Improvement and Management]] 

**Slight to Moderate Improvement:**
[[CP 580 - Streambank and Shoreline Protection]] 
[[CP 528 - Prescribed Grazing]] 
[[CP 342 - Critical Area Planting]] 
[[CP 550 - Range Planting]] 
[[CP 657 - Wetland Restoration]] 
[[CP 614 - Watering Facility]] 
[[CP 390 - Riparian Herbaceous Cover]] 
[[CP 396 - Aquatic Organism Passage]] 
[[CP 658 - Wetland Creation]] 
[[CP 659 - Wetland Enhancement]] 

**Slight Improvement:**
[[CP 382 - Fence]] 
[[CP 340 - Cover Crop]] 
[[CP 329 - Residue and Tillage Mgmt (No Till)]] 
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]] 
[[CP 328 - Conservation Crop Rotation]] 
[[CP 410 - Grade Stabilization Structure]] `,Iw=`##### Definition
Wind can blow fallen snow and create mounds of snow called snowdrifts. Snowdrifts can cause hazardous conditions and can prohibit humans and animals from accessing structures or features.

Wind can also blow snow away from desired locations where snowmelt water can be used. Managing snowdrift locations to capture snowmelt can benefit soil moisture and increase crop productivity.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Slight Improvement:**
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 342 - Critical Area Planting]]
[[CP 550 - Range Planting]]
[[CP 327 - Conservation Cover]]
`,Lw=`##### Definition
As surface water temperatures rise above normal levels, gases important to aquatic life, such as oxygen and carbon dioxide, decrease. High water temperatures can also cause minerals that degrade water quality to dissolve. In some areas, Federal or state laws may regulate surface water temperatures.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 391 - Riparian Forest buffer]]

**Moderate to Substantial Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 420 - Wildlife Habitat Planting]]
[[CP 395 - Stream Habitat Improvement and Management]]


**Moderate Improvement:**
[[CP 472 - Access Control]]
[[CP 396 - Aquatic Organism Passage]]

**Slight to Moderate Improvement:**
[[CP 390 - Riparian Herbaceous Cover]] 
[[CP 643 - Restoration of Rare and Declining Habitats]]

**Slight Improvement:**
[[CP 580 - Streambank and Shoreline Protection]] 
[[CP 528 - Prescribed Grazing]]
[[CP 550 - Range Planting]] 
[[CP 584 - Channel Bed Stablilization]]
[[CP 614 - Watering Facility]]
[[CP 587 - Structure for Water Control]] `,Uw=`##### Definition
Water depletion can occur in both surface water (ponds, lakes, pools from precipitation runoff, etc.) and groundwater. If water from either of these sources is used more quickly than it can be replenished, natural resources can be impacted and land may not be unusable for its intended purposes.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 587 - Structure for Water Control]]

**Moderate Improvement:**
[[CP 512 - Pasture and Hay Planting]]


**Slight Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 356 - Dike and Levee]]
[[CP 315 - Herbaceous Weed Treatment]]


**Slight Worsening:**
[[CP 561 - Heavy Use Area Protection]]
`,Fw=`##### Definition
Water is a vital component of farming and natural ecosystems. Inefficiently managing the moisture in soil can lead to poor crop yields and increased runoff. In cropland, poor yields could be attributed to an insufficiency of soil moisture instead of inadequate rainfall.


**Slight to Moderate Improvement:**
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 328 - Conservation Crop Rotation]] 
[[CP 587 - Structure for Water Control]]


**Slight Improvement:**
[[CP 340 - Cover Crop]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]

`,Qw=`#### Definition
Soil moisture impacts plant growth, soil settling, susceptibility to compaction, ease of excavation,   
and installation of conservation practices.Soil moisture can be influenced by many factors including precipitation, temperature, wind, and more. Naturally available moisture should be managed to help support land use goals and ecological processes.


**Moderate Improvement**:
[[CP 328 - Conservation Crop Rotation]]
[[CP 472 - Access Control]]

**Slight to Moderate Improvement**
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 314 - Brush Management]] 
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 550 - Range Planting]]
[[CP 587 - Structure for Water Control]] 

**Slight Improvement**
[[CP 612 - Tree and Shrub Establishment]]




`,Yw=`##### Definition
Nutrients are transported to water through runoff into surface water and by leaching into ground waters. When the amount of nutrients making their way to water reaches a certain threshold, water quality begins to deteriorate.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 391 - Riparian Forest buffer]]
[[CP 590 - Nutrient Management]]
[[CP 390 - Riparian Herbaceous Cover]]

**Moderate to Substantial Improvement:**
[[CP 327 - Conservation Cover]]

**Moderate Improvement:**
[[CP 328 - Conservation Crop Rotation]]

**Slight Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 342 - Critical Area Planting]]
[[CP 550 - Range Planting]] 
[[CP 472 - Access Control]] 
[[CP 657 - Wetland Restoration]] 
[[CP 658 - Wetland Creation]] 
[[CP 659 - Wetland Enhancement]] 
[[CP 646 - Shallow Water Development and Management]] 

**Slight Worsening:**
[[CP 356 - Dike and Levee]] 
[[CP 329 - Residue and Tillage Mgmt (No Till)]]

`,Vw=`#### Definition
Nutrients are transported to water through runoff into surface water and by leaching into ground waters. When the amount of nutrients making their way to water reaches a certain threshold, water quality begins to deteriorate.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 391 - Riparian Forest buffer]]
[[CP 590 - Nutrient Management]]
[[CP 390 - Riparian Herbaceous Cover]]

**Moderate to Substantial Improvement:**
[[CP 327 - Conservation Cover]]
[[CP 614 - Watering Facility]]

**Moderate Improvement:**
[[CP 328 - Conservation Crop Rotation]]
[[CP 657 - Wetland Restoration]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]

**Slight to Moderate Improvement:**
[[CP 340 - Cover Crop]] 
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 342 - Critical Area Planting]] 
[[CP 395 - Stream Habitat Improvement and Management]]


**Slight Improvement:**
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 561 - Heavy Use Area Protection]]
[[CP 528 - Prescribed Grazing]]
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 315 - Herbaceous Weed Treatment]] 
[[CP 420 - Wildlife Habitat Planting]] 
[[CP 512 - Pasture and Hay Planting]] 
[[CP 550 - Range Planting]] 
[[CP 472 - Access Control]]
[[CP 578 - Stream Crossing]] 
[[CP 646 - Shallow Water Development and Management]]
`,Xw=`##### Definition
Pathogens, pharmaceuticals, and other chemicals that exist on the surface of soil can leach to existing groundwater supplies. These substances usually come from compost runoff or bio-solids and manure from animals.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate to Substantial Improvement:**
[[CP 590 - Nutrient Management]]

**Slight to Moderate Improvement:**
[[CP 327 - Conservation Cover]] 
[[CP 578 - Stream Crossing]]
[[CP 390 - Riparian Herbaceous Cover]]

**Slight Improvement:**
[[CP 382 - Fence]]
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 342 - Critical Area Planting]]
[[CP 550 - Range Planting]]
[[CP 472 - Access Control]]
[[CP 614 - Watering Facility]]
[[CP 391 - Riparian Forest buffer]]

**Slight Worsening:**
[[CP 646 - Shallow Water Development and Management]]
`,Zw=`##### Definition
Pathogens, pharmaceuticals, and other chemicals that exist on the surface of soil can be transported to surface water and degrade water quality. These substances usually come from compost runoff or bio-solids and manure from animals.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate to Substantial Improvement:**
[[CP 590 - Nutrient Management]]


**Moderate Improvement:**
[[CP 391 - Riparian Forest buffer]]
[[CP 390 - Riparian Herbaceous Cover]]

**Slight to Moderate Improvement:**
[[CP 382 - Fence]]
[[CP 561 - Heavy Use Area Protection]] 
[[CP 327 - Conservation Cover]] 
[[CP 614 - Watering Facility]]
[[CP 646 - Shallow Water Development and Management]]


**Slight Improvement:**
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]] 
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 356 - Dike and Levee]] 
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 550 - Range Planting]]
[[CP 472 - Access Control]] 
[[CP 657 - Wetland Restoration]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]
[[CP 644 - Wetland Wildlife Habitat Management]]


**Moderate Worsening:**
[[CP 578 - Stream Crossing]]
`,Kw=`##### Definition
When pesticides are used in large quantities or near sensitive watersheds, they can be transported to both surface and groundwater in quantities that degrade the water quality. Water with problematic levels of pesticides can sometimes not be used for intended purposes and can also pose risks to animals and people.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 595 - Pest Management Conservation System]]****

**Slight to Moderate Improvement:**
[[CP 328 - Conservation Crop Rotation]]
[[CP 550 - Range Planting]] 
[[CP 327 - Conservation Cover]]
[[CP 390 - Riparian Herbaceous Cover]] 

**Slight Improvement:**
[[CP 528 - Prescribed Grazing]] 
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]]
[[CP 356 - Dike and Levee]] 
[[CP 420 - Wildlife Habitat Planting]] 
[[CP 657 - Wetland Restoration]]
[[CP 391 - Riparian Forest buffer]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]] `,Jw=`##### Definition
When pesticides are used in large quantities or near sensitive watersheds, they can be transported to both surface and groundwater in quantities that degrade the water quality. Water with problematic levels of pesticides can sometimes not be used for intended purposes and can also pose risks to animals and people.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 595 - Pest Management Conservation System]]

**Moderate to Substantial Improvement:**
[[CP 329 - Residue and Tillage Mgmt (No Till)]]

**Moderate Improvement:**
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 391 - Riparian Forest buffer]]

**Slight to Moderate Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 356 - Dike and Levee]] 
[[CP 328 - Conservation Crop Rotation]]
[[CP 550 - Range Planting]] 
[[CP 327 - Conservation Cover]]
[[CP 390 - Riparian Herbaceous Cover]]

**Slight Improvement:** 
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 420 - Wildlife Habitat Planting]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 342 - Critical Area Planting]]
[[CP 472 - Access Control]]
[[CP 657 - Wetland Restoration]] 
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]]


**Slight Worsening:**
[[CP 314 - Brush Management]]
[[CP 315 - Herbaceous Weed Treatment]]
`,$w=`##### Definition
If heavy metals, petroleum, and other pollutants are not handled or stored properly, they can run off into surface water or leach into groundwater. In high amounts, these pollutants can degrade water quality which limits how this water can be used.



The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Slight Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 550 - Range Planting]] 
[[CP 472 - Access Control]] 
[[CP 391 - Riparian Forest buffer]] 
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 646 - Shallow Water Development and Management]] `,eP=`##### Definition
If heavy metals, petroleum, and other pollutants are not handled or stored properly, they can run off into surface water or leach into groundwater. In high amounts, these pollutants can degrade water quality which limits how this water can be used.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate Improvement:**
[[CP 391 - Riparian Forest buffer]]

**Slight to Moderate Improvement:**
[[CP 550 - Range Planting]]
[[CP 657 - Wetland Restoration]] 
[[CP 390 -Riparian Herbaceous Cover]]
[[CP 658 - Wetland Creation]]
[[CP 659 - Wetland Enhancement]] 
[[CP 646 - Shallow Water Development and Management]] 

**Slight Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 512 - Pasture and Hay Planting]] 
[[CP 472 - Access Control]]
[[CP 614 - Watering Facility]] `,nP=`##### Definition
Irrigation or runoff can cause soluble salts (that occur either naturally or unnaturally) in soil or shallow groundwater to be transported to surface and groundwater supplies. When levels of soluble salts reach problematic levels, water quality can become degraded and its usage can become limited.

Soluble salts include sulfates of sodium, calcium, and magnesium.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Slight to Moderate Improvement:**
[[CP 327 - Conservation Cover]] 

**Slight Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 328 - Conservation Crop Rotation]] 
[[CP 550 - Range Planting]] 
[[CP 391 - Riparian Forest buffer]] 
[[CP 590 - Nutrient Management]] 
[[CP 390 - Riparian Herbaceous Cover]] 


**Slight Worsening:**
[[CP 356 - Dike and Levee]] 
[[CP 646 - Shallow Water Development and Management]]
`,tP=`##### Definition
Irrigation or runoff can cause soluble salts (that occur either naturally or unnaturally) in soil or shallow groundwater to be transported to surface and groundwater supplies. When levels of soluble salts reach problematic levels, water quality can become degraded and its usage can become limited.

Soluble salts include sulfates of sodium, calcium, and magnesium.



The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Slight to Moderate Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 327 - Conservation Cover]] 

**Slight Improvement:** 
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 356 - Dike and Levee]] 
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]] 
[[CP 328 - Conservation Crop Rotation]] 
[[CP 420 - Wildlife Habitat Planting]] 
[[CP 550 - Range Planting]] 
[[CP 657 - Wetland Restoration]]
[[CP 614 - Watering Facility]] 
[[CP 391 - Riparian Forest buffer]] 
[[CP 590 - Nutrient Management]]
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 658 - Wetland Creation]] 
[[CP 659 - Wetland Enhancement]] `,aP=`##### Definition
A water table is where saturated sediment meets unsaturated sediment underground. Water table levels can change depending on a number of factors including precipitation rates, soil permeability, drainage patterns, and more.

Seasonal high water tables occur when seasonal precipitation, such as an overly wet season, causes groundwater or a perched water table to over-saturate the soil near its surface. This can degrade water resources or prohibit land from being used as intended.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Slight to Moderate Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 472 - Access Control]] 
[[CP 391 - Riparian Forest buffer]]
[[CP 390 - Riparian Herbaceous Cover]] 

**Slight Improvement:**
[[CP 340 - Cover Crop]]

**Slight Worsening:**
[[CP 356 - Dike and Levee]]
[[CP 658 - Wetland Creation]]
`,iP=`##### Definition
Wind erosion and water (sheet, rill, or gully) erosion can cause sediment to be transported to surface water. When excessive levels of fine sediment enter the water, the water can become cloudy or hazy (turbid) or the sediment will slowly settle (sedimentation). Excess sediment can degrade water quality and limit the intended use of the water.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 391 - Riparian Forest buffer]]

**Moderate to Substantial Improvement:**
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 342 - Critical Area Planting]]
[[CP 327 - Conservation Cover]]
[[CP 390 - Riparian Herbaceous Cover]]

**Moderate Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
[[CP 328 - Conservation Crop Rotation]]
[[CP 472 - Access Control]]
[[CP 644 - Wetland Wildlife Habitat Management]]

**Slight to Moderate Improvement:**
[[CP 580 - Streambank and Shoreline Protection]]
[[CP 561 - Heavy Use Area Protection]] 
[[CP 528 - Prescribed Grazing]]
[[CP 340 - Cover Crop]]
[[CP 314 - Brush Management]] 
[[CP 550 - Range Planting]]
[[CP 657 - Wetland Restoration]]
[[CP 614 - Watering Facility]] 
[[CP 595 - Pest Management Conservation System]]
[[CP 578 - Stream Crossing]]
[[CP 395 - Stream Habitat Improvement and Management]]
[[CP 410 - Grade Stabilization Structure]]
[[CP 658 - Wetland Creation]] 
[[CP 659 - Wetland Enhancement]] 
[[CP 646 - Shallow Water Development and Management]] 
[[CP 643 - Restoration of Rare and Declining Habitats]]

**Slight Improvement:**
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 420 - Wildlife Habitat Planting]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 584 - Channel Bed Stablilization]]
[[CP 587 - Structure for Water Control]] 

`,rP=`##### Definition
Water depletion can occur in both surface water (ponds, lakes, pools from precipitation runoff, etc.) and groundwater. If water from either of these sources is used more quickly than it can be replenished, natural resources can be impacted and land may not be unusable for its intended purposes.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Substantial Improvement:**
[[CP 587 - Structure for Water Control]]

**Moderate Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 512 - Pasture and Hay Planting]]
[[CP 391 - Riparian Forest buffer]]

**Slight to Moderate Improvement:**
[[CP 315 - Herbaceous Weed Treatment]] 
[[CP 658 - Wetland Creation]]

**Slight Improvement:**
[[CP 561 - Heavy Use Area Protection]]
[[CP 528 - Prescribed Grazing]]
[[CP 314 - Brush Management]]
[[CP 356 - Dike and Levee]] 
[[CP 657 - Wetland Restoration]]
[[CP 659 - Wetland Enhancement]]
[[CP 646 - Shallow Water Development and Management]] `,oP=`# NRCS Programs

## [[EQIP - Cost Share and Incentive Payments]]
EQIP is a program through NRCS that provides financial and technical assistance to agricultural producers to implement conservation practices that address natural resource concerns and improve environmental quality. 

## [[RCPP - Working with Partners]]
The **Regional Conservation Partnership Program (RCPP)** is a partner-driven approach to conservation that funds solutions to natural resource challenges on agricultural land.

## [[ACEP - Easements]]

Agricultural Conservation Easement Program (ACEP) helps landowners, land trusts, and other entities protect, restore, and enhance wetlands or protect working farms and ranches through purchasing conservation **easements**. The program is divided into two components: [Agricultural Land Easements (ALE)](https://www.nrcs.usda.gov/programs-initiatives/ale-agricultural-land-easements) and [Wetland Reserve Easements (WRE)](https://www.nrcs.usda.gov/programs-initiatives/wre-wetland-reserve-easements)

## [[CSP- Next Level Conservation]]
The Conservation Stewardship Program (CSP) is a voluntary program designed to encourage agricultural and forestry producers to take their conservation efforts to the next level. The program is designed to compensate agricultural and forest producers who agree to increase their level of conservation by adopting additional conservation activities while maintaining their baseline level of conservation.


## [[CIG - Innovation]]
Conservation Innovation Grants (CIG) is a competitive program that supports the development of new tools, approaches, practices, and technologies to further natural resource conservation on private lands.


## [[AMA - Agricultural Producers]]
The [Agricultural Management Assistance Program](https://www.nrcs.usda.gov/programs-initiatives/ama-agricultural-management-assistance) helps agricultural producers manage financial risk through diversification, marketing or natural resource conservation practices.
NRCS administers the conservation provisions while Agricultural Marketing Service and Risk Management Agency implement the production diversification and marketing provisions.


## [[HFRP - Forest Protection]] 

The Healthy Forests Reserve Program (HFRP) helps landowners restore, enhance and protect forestland resources on private and tribal lands through easements and financial assistance. 


## [[EWP Program - Emergency Response]]

The **Emergency Watershed Protection Program** offers technical and financial assistance to help local communities relieve imminent threats to life and property caused by floods, fires, windstorms and other natural disasters that impair a watershed. 

 
# FSA Programs

## [[CRP - Protecting Sensitive Land]]
The Conservation Reserve Program is a federally funded voluntary program that contracts with agricultural producers so environmentally sensitive agricultural land is not farmed or ranched, but instead devoted to conservation benefits. 

### [[FWP - Restored Wetlands]]
The Farmable Wetlands Program (FWP) is designed to restore previously farmed wetlands and wetland buffers to improve both vegetation and water flow. FWP is a voluntary program that aims to restore up to one million acres of farmable wetlands and associated buffers. 

## [[CREP - Focused Priorities]]
The Conservation Reserve Enhancement Program is a subsidiary program under CRP that targets specific state or national conservation priorities. It is a partnership between the federal government (FSA) and state agencies, tribes, or non-governmental organizations. 

## [[ECP - Farmland Restoration]]
The Emergency Conservation Program (ECP) helps farmers and ranchers repair damage to farmlands caused by natural disasters and put in place methods for water conservation during severe drought. The ECP does this through funding and technical assistance.  While landowners apply for ECP through FSA, technical assistance to fix the conservation problem may also be provided by NRCS. 

## [[EFRP - Forest Restoration]] 
The Emergency Forest Restoration Program (EFRP) helps the owners of non-industrial private forests restore forest health damaged by natural disasters. The EFRP does this by authorizing payments to owners of private forests to restore disaster damaged forests.


--------------------------------------
[Ranking Dates](https://www.nrcs.usda.gov/ranking-dates) for ACEP, AMA, CSP and EQUIP

[NRCS Financial Assistance Programs](https://drive.google.com/viewerng/viewer?embedded=true&url=https://foreststewardsguild.org/wp-content/uploads/2020/09/How-NRCS-Financial-Assistance-Programs-Work-MA-NRCS.pdf) 
 
 ![[AtAGlance_Thumbnail.png]]
 <a href="https://drive.google.com/viewerng/viewer?embedded=true&url=https://www.fsa.usda.gov/Assets/USDA-FSA-Public/usdafiles/FactSheets/2022/conservation_at_a_glance_22_final.pdf"> Click here to read *Conservation Programs At a Glance*</a>  `,sP=`The **Conservation Reserve Enhancement Program** **(CREP)** is a subsidiary program under CRP that targets specific state or national conservation priorities. It is a partnership between the federal government (FSA) and state agencies, tribes, or non-governmental organizations. Under CREP, the federal government and the partner entity jointly provide financial incentives to encourage farmers to enroll in the program. The partner entity (state, tribe, or NGO) contributes additional funding and resources to address specific environmental issues of regional or state importance. CREP contracts are typically longer than CRP contracts, often 10-15 years, with additional incentive payments from the partner entity.

#### Resources
[CREP Web Page](https://www.fsa.usda.gov/programs-and-services/conservation-programs/conservation-reserve-enhancement/index)

![[CREP fact sheet_thumbnail.png|300]]`,lP=`The **Conservation Reserve Program** **(CPR)** is a federally funded voluntary program that contracts with agricultural producers so environmentally sensitive agricultural land is not farmed or ranched, but instead devoted to conservation benefits. CRP participants establish long-term, resource-conserving plant species, such as approved grasses or trees (known as “covers”) to control soil erosion, improve water quality, and develop wildlife habitat. In return, USDA’s Farm Service Agency (FSA) provides participants with rental payments and cost share assistance during the life of the contract. Contract duration is typically between 10 and 15 years. 


#### Resources
[CRP Menu Tool](https://crpmenu.gri.msstate.edu/CRPBasics)
![[CRP Menu Tool_thumbnail.png|300]]`,cP=`
The **Emergency Conservation Program (ECP)** helps farmers and ranchers repair damage to farmlands caused by natural disasters and put in place methods for water conservation during severe drought. The ECP does this through funding and technical assistance.  While landowners apply for ECP through FSA, technical assistance to fix the conservation problem may also be provided by NRCS. 

FSA county committees determine land eligibility based on on-site inspections of damaged land and the type and extent of damage. Eligible land includes land used for: 
- Commercial farming, ranching and orchard operations; 
- Growing nursery stock and Christmas tree plantations; 
- Grazing for commercial livestock production; and
- Conservation structures such as, waterways, terraces, diversions and windbreaks. 
- Conservation problems existing before the applicable disaster event are ineligible for ECP assistance.

The funding for ECP is determined by Congress. Up to 75% of the cost to implement emergency conservation practices can be provided; however, the final amount is determined by the committee reviewing the application. Qualified limited resource, underserved, and beginning farmers/ranchers may earn up to 90% cost-share. The FSA County Committee is able to approve applications up to $125,000 while applications of $125,001 to $250,000 require state committee approval. Amounts over $250,000 require the approval of the national FSA office.


#### Resources
[ECP Web Page](https://www.fsa.usda.gov/resources/programs/emergency-conservation-program-ecp)
![[ECP Factsheet_thumbnail.png|300]]`,uP=`The **Emergency Forest Restoration Program (EFRP)** helps the owners of non-industrial private forests restore forest health damaged by natural disasters. The EFRP does this by authorizing payments to owners of private forests to restore disaster damaged forests.

EFRP enrollment is administered by FSA state and county committees and county offices. FSA county committees determine land eligibility using on-site damage inspections that assess the type and extent of damage. To be eligible for EFRP, NIPF land must: 
- Have existing tree cover (or had tree cover immediately before the natural disaster occurred and is suitable for growing trees); and 
- Be owned by any nonindustrial private individual, group, association, corporation, or other private legal entity.

#### Resources
[EFRP Web Page](https://www.fsa.usda.gov/programs-and-services/disaster-assistance-program/emergency-forest-restoration/index)
![[EFRP factsheet_thumbnail.png|300]]`,dP=`
The **Farmable Wetlands Program (FWP)** is designed to restore previously farmed wetlands and wetland buffers to improve both vegetation and water flow. FWP is a voluntary program that aims to restore up to one million acres of farmable wetlands and associated buffers. Participants must agree to restore the wetlands, establish plant cover, and not use enrolled land for commercial purposes. Plant cover may include plants that are partially submerged or specific types of trees.

The Farm Services Agency (FSA) runs FWP through the Conservation Reserve Program (CRP) with assistance from other government agencies and local conservation groups.

Offers for FWP are accepted throughout the year. FWP contracts last between 10 and 15 years. All enrollment offers are processed through your [local FSA office](http://www.fsa.usda.gov/FSA/stateOffices?area=stoffice&subject=landing&topic=landing).


#### Resources
[FWP Web Page](https://www.fsa.usda.gov/resources/programs/farmable-wetlands-program)
![[FWP webpage_thumbnail.png|300]]`,fP=`The Farm Service Agency (FSA) and the Natural Resources Conservation Service (NRCS) are two separate agencies within the United States Department of Agriculture (USDA), with distinct roles and responsibilities. 

[[Directory of Funding Programs]]

The main differences between the FSA and NRCS are as follows:

#### Primary Responsibilities:
  * **Farm Service Agency (FSA):** The primary responsibility of the FSA is to administer farm commodity, credit, conservation, disaster, and related programs to support agricultural producers and landowners. It handles programs related to crop insurance, farm loans, commodity price support, and farm safety net programs.
  * **National Resource Conservation Service NRCS:** The NRCS is responsible for providing technical assistance to farmers, ranchers, and landowners to help them implement conservation practices on their land. Its primary focus is on promoting natural resource conservation, including soil, water, air, plants, and wildlife.

#### Financial Assistance:
* **FSA**: The FSA provides direct payments, loan programs, and other financial assistance to eligible farmers and ranchers. For example, it administers the Noninsured Crop Disaster Assistance Program (NAP) and the Livestock Forage Disaster Program (LFP).
* **NRCS**: While the NRCS does not provide direct payments, it offers cost-share and incentive payments to help offset the costs of implementing approved conservation practices through its various programs.

#### Technical Assistance:
* **FSA**: The FSA provides limited technical assistance related to program implementation and compliance.
* **NRCS**: The NRCS focuses heavily on providing technical assistance to farmers, ranchers, and landowners, helping them develop and implement conservation plans tailored to their specific needs and land resources.


In summary, the FSA primarily deals with farm commodity programs, credit, and financial assistance, while the NRCS concentrates on providing technical assistance and implementing conservation programs to protect and enhance natural resources on agricultural lands.`,hP=`
Agricultural Conservation Easement Program (ACEP) helps landowners, land trusts, and other entities protect, restore, and enhance wetlands or protect working farms and ranches through purchasing conservation **easements**. The program is divided into two components: [Agricultural Land Easements (ALE)](https://www.nrcs.usda.gov/programs-initiatives/ale-agricultural-land-easements) and [Wetland Reserve Easements (WRE)](https://www.nrcs.usda.gov/programs-initiatives/wre-wetland-reserve-easements):

A conservation easement is a voluntary legal agreement between a landowner and a qualified conservation organization (such as a land trust or government agency) that permanently limits the uses of the land in order to protect its conservation values.

There are several potential benefits for landowners who grant conservation easements on their property including tax incentives, estate planning, permanent land protection and financial assistance, all while maintaining continued ownership and use. In essence, easements allow landowners to potentially profit from the development value of their land while ensuring it remains undeveloped and available for conservation-compatible uses that align with their values.

#### How to Apply
NRCS accepts ACEP applications year-round and funding is provided through a competitive process. State-specific application ranking dates are set to evaluate applications for funding. Ranking dates can be found at https://www.nrcs.usda.gov/ranking-dates. If you apply after the application ranking date, your application will automatically be deferred to the next funding cycle. Visit farmers.gov/service-locator to find the contact information for your local USDA Service Center.

For more information on purchasinpug Agricultural Land Easements, use [this toolkit](https://landtrustalliance.org/resources/learn/explore/ale-toolkit).
# Resources
Additional materials in the "related documents" section at the bottom of [this webpage ](https://www.nrcs.usda.gov/programs-initiatives/ale-agricultural-land-easements)
![[Thumbnail_ACEP.png]]

`,mP=`The [Agricultural Management Assistance Program](https://www.nrcs.usda.gov/programs-initiatives/ama-agricultural-management-assistance) helps agricultural producers manage financial risk through diversification, marketing or natural resource conservation practices.

NRCS administers the conservation provisions while Agricultural Marketing Service and Risk Management Agency implement the production diversification and marketing provisions.

**Program at a Glance**
- AMA provides financial assistance up to 75 percent of the cost of installing conservation practices.
- Total AMA payments shall not exceed $50,000 per participant for any fiscal year.
- Participants are not subject to Highly Erodible Land and Wetland Conservation provisions of the Food Security Act of 1985.
- Participants are subject to Adjusted Gross Income provisions of the Food Security Act of 1985.
- AMA offers an additional higher cost-share for historically underserved producers.

**Who Is Eligible**
Producers must:
-  Be engaged in livestock or agricultural production.
- Have an interest in the farming operation associated with the land being offered for AMA enrollment.
- Have control of the land for the term of the proposed contract.
- Be in compliance with the provisions for protecting the interests of tenants and sharecroppers, including the provisions for sharing AMA payments on a fair and equitable basis.
- Be within appropriate payment limitation requirements.

**Land Eligibility**
- Land on which agricultural commodities or livestock are produced, such as cropland, hayland, pastureland, rangeland, and grassland.
- Land used for subsistence purposes, private non-industrial forestland, or other land on which agricultural products, livestock, or forest-related goods are produced.
- Land on which risk may be mitigated through operation diversification or change in resource conservation practices.


#### Resources
Additional materials in the "related documents" section at the bottom of [this webpage](https://www.nrcs.usda.gov/programs-initiatives/ama-agricultural-management-assistance)
![[AMA_thumbnail.png|300]]


`,pP=`Conservation Innovation Grants (CIG) is a competitive program that supports the development of new tools, approaches, practices, and technologies to further natural resource conservation on private lands.

There are three annual Conservation Innovation Grants funding opportunities:
National CIG Classic:
- National competition for projects that support the early-stage development and piloting of new tools, practices and technologies to further natural resource conservation on private lands.

State CIG Classic:
- State-level competitions for projects that support early-stage development and piloting of new tools, practices and technologies to further natural resource conservation on private lands. While the overall goal and approach match those of CIG Classic, CIG state competitions fund projects that target state-identified conservation priorities. Each year, NRCS state offices may elect to administer their own CIG competitions. State CIG competitions are announced separately from national competitions.

CIG On-Farm Conservation Innovation Trials (On-Farm Trials)
- National competition for projects that support more widespread adoption and evaluation of innovative conservation approaches in partnership with agricultural producers. On-Farm Trials Awardees provide technical assistance and incentive payments to producers to help compensate for risks associated with implementation of new conservation practices, systems and approaches. Awardees also evaluate the environmental, financial and social (to the extent possible) impacts of implementing innovative approaches. The Soil Health Demo Trial is a priority within the On-Farm Trials competition which focuses exclusively on implementation of conservation practices and systems that improve soil health.

#### Resources
[NRCS' Conservation Innovation Grants](https://www.nrcs.usda.gov/programs-initiatives/cig-conservation-innovation-grants) (CIG).
![[NRCS CIG webpage_thumbnail.png|300]]

[CIG Website](https://cig.sc.egov.usda.gov/?utm_source=nrcs-cig&utm_medium=site&utm_campaign=obv-redirect)
![[CIG website_thumbnail.png|300]]


`,gP=`The Conservation Stewardship Program (CSP) is a voluntary program designed to encourage agricultural and forestry producers to take their conservation efforts to the next level. The program is designed to compensate agricultural and forest producers who agree to increase their level of conservation by adopting additional conservation activities while maintaining their baseline level of conservation.

CSP contracts are for five years, with the opportunity to compete for a contract renewal if you successfully fulfill the initial contract and agree to achieve additional conservation objectives

Producers who participate in the CSP can receive a variety of benefits, including:

- Financial assistance: CSP participants can receive annual payments for implementing conservation activities. The amount of the payment is based on the type of activity and the environmental benefits it provides. CSP operates on a points-based system, where participants earn points for implementing new conservation activities. The more comprehensive and sustainable the practices, the more points are earned, leading to greater financial assistance. CSP also offers bundles where you can select a suite of enhancements and receive a higher payment rate.

- Technical assistance: NRCS provides technical assistance to CSP participants to help them develop and implement their conservation plans. This assistance can include help with soil testing, nutrient management, and other conservation practices.

- Market access: CSP participants may be eligible for bonus payments for selling their products to markets that value sustainable agricultural practices.


#### Resources
[CSP webpage](https://www.nrcs.usda.gov/programs-initiatives/csp-conservation-stewardship-program)

![[CSP_thumbnail.png|300]]`,vP=`The Environmental Quality Incentives Program is a program through NRCS that provides financial and technical assistance to agricultural producers to implement conservation practices that address natural resource concerns and improve environmental quality. 

Through EQIP, eligible participants can receive financial assistance to cover a portion of the costs associated with implementing approved conservation practices. These practices are designed to benefit both the agricultural operation and the environment. Examples of conservation practices supported by EQIP include cover cropping, nutrient management, irrigation efficiency improvements, and the installation of conservation buffers. <br> 
#### How to Apply
Producers can apply for EQIP through their local NRCS office. The application process includes developing a conservation plan with NRCS and submitting an application form.

EQIP payments work similar to a mail-in rebate: you pay the costs up-front to install the conservation practices, then NRCS issues you a payment via direct deposit after we certify the work has been completed according to our specifications.

## Resources 
[EQIP Webpage](https://www.nrcs.usda.gov/programs-initiatives/eqip-environmental-quality-incentives)
![[EQIP_Thumbnail_Small.png]]
`,bP=`The Emergency Watershed Protection Program offers technical and financial assistance to help local communities relieve imminent threats to life and property caused by floods, fires, windstorms and other natural disasters that impair a watershed. EWP does not require a disaster declaration by federal or state government officials for program assistance to begin. The NRCS State Conservationist can declare a local watershed emergency and initiate EWP program assistance in cooperation with an eligible sponsor. NRCS will not provide funding for activities undertaken by a sponsor prior to the signing of a cooperative agreement between NRCS and the sponsor.

**Recovery projects** begin with a local sponsor or legal subdivision of state or tribal government. Eligible sponsors include cities, counties, towns, conservation districts, or any federally-recognized Native American tribe or tribal organization. Interested public and private landowners must work through a sponsor. 

In communities impacted by constant flooding or severe erosion due to a natural disaster, a [property buyout](https://www.nrcs.usda.gov/programs-initiatives/emergency-watershed-protection-ewp-program-buyouts) might be the best solution. EWP buyouts are used where structural projects to reduce threats from flooding and erosion are not cost-effective and/or beneficial. Once NRCS determines that buying a flood-prone property (for example) would provide the pivotal solution and sustainable course of action for a community, EWP has the authority to provide local sponsors with financial assistance to purchase and restore the property. 

In some situations,Landowners can directly apply for assistance through a floodplain easement at the local NRCS office when project funding for floodplain easements becomes available. States will hold a signup period for the impacted communities and the local NRCS offices will publicize that information in the affected communities.

#### Resources
 [EWP Sponsor Resource page](https://www.nrcs.usda.gov/resources/guides-and-instructions/ewp-sponsor-resources "EWP Sponsor Resource Page") 
![[EWP Sponsor Resource_thumbnail.png|300]]

`,yP=`
The Healthy Forests Reserve Program (HFRP) helps landowners restore, enhance and protect forestland resources on private and tribal lands through easements and financial assistance. 

For all HFRP easements, contracts, and 10-year restoration agreements, NRCS will develop an HFRP restoration plan that will specify how the enrolled land will be restored, protected, enhanced, maintained, and managed to accomplish the goals of the program.

The program offers four enrollment options:

1. 10-year restoration cost-share agreement for which the landowner may receive 50 percent of the average cost of approved conservation practices,   
2. 30-year easement for which the landowner may receive 75 percent of the easement value of the enrolled land plus 75 percent of the average cost of approved conservation practices,
3. 30-year contract on acreage owned by Indian Tribes, or  
4. Permanent easements for which landowners may receive 100 percent of the easement value of the enrolled land plus 100 percent the average cost of approved conservation practices.

#### Resources
Program documents at the bottom of [this webpage](https://www.nrcs.usda.gov/programs-initiatives/hfrp-healthy-forests-reserve-program).
![[HFRP_thumbnail.png|300]]`,CP=`The **Regional Conservation Partnership Program (RCPP)** is a partner-driven approach to conservation that funds solutions to natural resource challenges on agricultural land.

RCPP projects fall under two different categories: <a href="https://www.grants.gov/search-results-detail/353379">RCPP Classic </a> and <a href="https://www.grants.gov/search-results-detail/353380">RCPP Alternative Funding Arrangements </a>. RCPP Classic projects are implemented using NRCS contracts and easements <b>directly with producers, landowners and communities</b>, in collaboration with project partners. Through RCPP AFAs, NRCS provides funding <b> to partners </b> to support conservation activities with eligible producers and landowners on eligible land. RCPP AFA funding reimburses partners for conservation activities done for or on behalf of producers, landowners, or other entities.

The primary difference is that in RCPP Classic, the NRCS directly contracts with producers and distributes funds, while in RCPP AFA, the partner organizations receive a portion of the funds from the NRCS and are responsible for contracting with producers and administering the funds. AFA provides more flexibility and autonomy for partners in implementing conservation activities  

#### How to Apply
Interested potential partners can learn <a href="https://www.nrcs.usda.gov/programs-initiatives/rcpp-regional-conservation-partnership-program/how-to-apply">how to apply to RCPP</a> and create a proposal for assistance. 

#### Resources

[Farm Bill Factsheet](https://www.nrcs.usda.gov/resources/data-and-reports/farm-bill-factsheet)
![[RCPP Factsheet.png|300]]


[How to Apply to RCPP](https://www.nrcs.usda.gov/programs-initiatives/rcpp-regional-conservation-partnership-program/how-to-apply)
![[Thumbnail_RCPPContractorList.png]]`,SP=`---
cssclasses:
  - no-inline
  - hide-title
---
# **Welcome to the AquaCorridors Handbook**


![[11.15.2024_HandbookObsidianCoverPageImage5.jpg]]

Use the **column on the left** to explore information from USDA's Natural Resources Conservation Service. 

Use the **tabs below** to view funding information or the decision support tool directory. 


#### **How To Use:** 
* For more detailed instructions see: [[How To Use This Tool]]* 



`,wP=`
**The Handbook** allows you to search for conservation practices based on your specific needs. You can explore options by:

-  **Benefit:** Focus on the desired outcomes, such as improved water quality, better livestock health and production, enhanced aquatic habitats, or better species protection.

- **Threat/Concern:** Search by the issues impacting your land and aquatic resources, from sedimentation to nutrient pollution or habitat degradation.

-  **Conservation Practice (CP)**: If you’re familiar with NRCS CPs, you can go directly to the practices that align with your goals. Each CP is thoroughly detailed, with information on how to implement them and where they’re most effective.

The Handbook also allows you to explore **funding information**. It provides a directory of funding programs organized by agencies such as NRCS and FSA and explains the difference between the two agencies. 

The Handbook provides information about **other decision-support tools and resources** that may be relevant to your conservation work. Drop-down menus for threat, species, or area needs can further sort these tools.

### **A Closer Look: Improving Water Quality with the AquaCorridors Handbook.**

Imagine you manage land where sediment runoff impacts your land and a local stream. After rainstorms, the water becomes cloudy, affecting the health of aquatic life downstream. This topsoil loss endangers your land’s productivity and soil health. 

1. **Search by Benefit**
	- You can begin by selecting “Explore by Benefit.” Select “Producer Benefits.” Since sediment runoff is caused by erosion, select “Reduced Erosion.” The Handbook lists conservation practices related to this benefit, such as riparian buffers, cover crops, and critical planting. 
	![[reduced erosion benefit.png|250]]
	
	- Alternatively, you can select “Explore by Benefit,” then “Wildlife Benefits,” and “Water Quality. Again, the Handbook will list Conservation Practices for this benefit, such as CP 580 - Streambank and Shoreline Protection. 

2. **Narrow by Threat**
	- You may also refine your search by threat. Select “Explore by Threats + Resource Concerns,” select “Water Threats,” then “Sediment Transferred to Surface Water.” The Handbook illustrates that CP 391 - Riparian Forest buffer will have Substantial Improvement, while CP 329 - Residue and Tillage Mgmt (No-Till), CP 342 - Critical Area Planting, and CP 327 - Conservation Cover will provide Moderate to Substantial Improvement.
	
		![[sediment to surface water threat.png]]

3. **Learn About the Practice**
	-  The AquaCorridors Handbook provides detailed information on each practice. Since CP 391—Riparian Forest buffer will Substantially improve our sedimentation threat, click on the CP’s link. The Handbook provides a definition, list of purposes, and other resource concerns this CP will address, as well as resources from the NRCS, such as the national conservation practice standard document.
	
		![[CP 391 page.png|350]]

### Global Graph View

Users can view a comprehensive visual summary of how all practices and benefits are connected through the global graph, as well find details and resources for each individual practice and benefit by clicking on their respective pages. 
  
To view a comprehensive summary of all connections, navigate to the right side of this screen under "interactive map" and select the global graph icon circled in red below:
![[Screenshot 2024-04-17 at 12.55.25 PM.png|400]]
From the expanded view, you can click on any dot on the graph to navigate to a CP, benefit, or threat/concern page.

`,PP=`![[Climate Opinion Screenshot.png]]
This Factsheets tool, based on the [Yale Climate Opinion Maps](https://climatecommunication.yale.edu/visualizations-data/ycom-us/), provides information about Americans' beliefs, risk perceptions, and policy preferences about climate change for all 50 states, 435 congressional districts, and 3,142 counties across the U.S. The tool allows you to customize which survey questions are shown on your Factsheet. The opinion estimates are based on a statistical model that uses a large individual-level survey dataset, plus geographic, demographic, economic, and other data to provide results accurate to within about 8 percentage points at any geographic level.

[Link to Tool](https://climatecommunication.yale.edu/visualizations-data/factsheets/?utm_source=Yale+Program+on+Climate+Change+Communication&utm_campaign=96aa0ac461-EMAIL_CAMPAIGN_2024_05_06_02_59&utm_medium=email&utm_term=0_-96aa0ac461-%5BLIST_EMAIL_ID%5D&utm_source=Merged+Symposium+and+Newsletter+Lists&utm_campaign=2b45d8e26a-EMAIL_CAMPAIGN_2020_05_20_01_39_COPY_01&utm_medium=email&utm_term=0_bd5faaf92a-2b45d8e26a-123494965)

`,TP=`* [[Sea Level Rise Viewer]] Visualizations of community-level impacts from coastal flooding and sea level rise.
* [[Climate Change Opinion Fact Sheet]] Factsheet generator that provides public opinion on climate change based on location. `,EP=`
![[sea level rise viewer screenshot.png]]

The National Oceanic and Atmospheric Administration's Sea Level Rise Viewer tool allows users to visualize community-level impacts from coastal flooding or sea level rise (up to 10 feet above average high tides). Photo simulations of how future flooding might impact local landmarks are also provided, as well as data related to water depth, connectivity, flood frequency, socio-economic vulnerability, wetland loss and migration, and mapping confidence.

 [Link to Tool](https://coast.noaa.gov/slr/)
`,_P=`* [[National AquaMapper]] Explore, visualize, and analyze marine data layers.
* [[National Estuary Program Map]] Explore estuary habitat protection and restoration projects, along with other key water quality and land use data. `,RP=`
![[Aquatics/Similar Tools/Images/National AquaMapper screenshot.png]]

The NOAA National AquaMapper is a web-based mapping tool developed by the National Oceanic and Atmospheric Administration (NOAA) that provides access to a comprehensive collection of coastal and marine data layers, including bathymetry, habitat, imagery, and other geospatial information. It allows users to explore, visualize, and analyze these data layers, enabling them to better understand and manage coastal and marine resources, plan for coastal resilience, and support decision-making processes related to marine spatial planning, environmental assessments, and conservation efforts.

**[Link to Tool](https://noaa.maps.arcgis.com/apps/webappviewer/index.html?id=4f12cbde0c22488196dda69d495116cc)**



`,xP=`
![[national estuary screenshot.png]]

The National Estuary Program Map (NEPmap) was created by the US EPA. It allows users to explore National Estuary Program habitat protection and restoration projects, along with other key water quality and land use data. 

**[Link to Tool](https://gispub.epa.gov/nepmap/)**
`,AP=`On this page you will find information about other decision support tools and resources that may be relevant to your conservation work. 

##### *Highlighted Tools*

For specific information about
	**Water Quality** see the EPA's [[How's My Waterway]]
	**Sea Level Rise** see NOAA's [[Sea Level Rise Viewer]]
	

______________________________________________________

 #### ![[Climate Change]]


#### ![[Information about USDA Programs]]


 #### ![[Coastal Conservation Tools]]

#### ![[Aquatic Conservation Tools Outside SE]]

#### ![[Water Quality]]









`,MP=`* [[Southeastern Aquatic Biodiversity Conservation Planning Storymap]] A storymap that discusses aquatic biodiversity and identifies freshwater habitats of high biodiversity value across the Southeastern United States.

* [[Map Of Life]]* Interactive map that allows users to generate endangered species list and information.

* [[USFWS Southeast At Risk Species Finder]]*
`,NP=`![[Map of Life Screenshot.png]]

Map of Life is an interactive map that allows users to gain biodiversity insights through exploring by species, regions, indicators, patterns, and datasets.  

[Link to Tool](https://mol.org/regions/)
`,kP=`
![[Southeast Aquatic Biodiversity Screenshot.png]]
The Southeastern Freshwater Biodiversity Conservation Strategy Map Tool comes from The University of Georgia River Basin Center and the Tennessee Aquarium Conservation Institute. It is an interactive online mapping application that identifies and prioritizes freshwater habitats of high biodiversity value across the Southeastern United States. It integrates data from various sources to display priority watersheds, rivers, streams, species distributions, and protected areas. The tool enables users to query specific areas, overlay different data layers, and delineate focal regions for conservation action based on criteria like imperiled species presence and habitat condition. By visually representing these priority freshwater systems, the tool aims to guide strategic conservation investments, protection efforts, and restoration activities by government agencies, non-profits, and other stakeholders working to safeguard the region's rich but threatened aquatic biodiversity.

**[Link to Tool](https://southeastfreshwater.org/storymap/)** 


`,HP=`![[SpeciesFinder.png]]


This web application was developed to track At-risk species (ARS) in the Southeast region – both the listing status and the Service's progress on evaluating the species according to the National Listing Workplan**.  To learn more about the workplan please visit the [**National Listing Workplan**](https://www.fws.gov/project/national-listing-workplan)

[Link to Tool]()`,zP=`
![[Aquatic Barrier Screenshot.png]]The Aquatic Barrier Inventory and Prioritization tool was created by Southeast Aquatic Resource Partnership (SARP) to build a community of practice among resource managers and enable them to identify high priority aquatic connectivity restoration projects. Regularly updating barriers in this inventory allows it to better reflect the degree of aquatic habitat fragmentation from aquatic barriers across political boundaries at a national scale. SARP provides a collaborative atmosphere where all resource managers can contribute to the collective effort of restoring rivers and streams through aquatic barrier removal.

**[Link to Tool](https://aquaticbarriers.org/explore/ )**

`,OP=`* [[Aquatic Barrier Inventory and Prioritization Tool]] Explore updated barrier data to identify high priority aquatic connectivity restoration projects.
* [[Southeast Conservation Blueprint Explorer]] Shows priority areas for aquatic conservation
* [[SERPAS REPI]] The Southeast Regional Partnership for Planning and Sustainability 
* `,DP=`Readiness and Environmental Protection Integration Program

![[REPI_Screenshot.png]]

The purpose of this tool is to provide partners with GIS locations of all military installations with completed REPI transactions, along with relevant information and resources for these projects. The datasets within the layer sections titled “SERPPAS”, “Military”, “Environmental”, and “Resilience” are particularly useful to SERPPAS partners. 

Within the SERPPAS section, the data layers include:

- **-SERPPAS Military Mission Footprint –** This layer includes REPI Agreement Opportunity Areas for installations with active REPI programs, 3-mile buffer around each installation, Low-lying Military Training Routes (under 1,500ft), Special Use Airspace Low and High Altitude (below 1,500ft and above 1,500ft)
- **Species Suitable Habita**t - Range-wide models and predictive maps of habitat suitability for at risk species in the longleaf ecosystem: gopher tortoise, gopher frog, striped newt, southern hognose snake, and Florida pine snake. 
- **Longleaf Pine Historic Distribution** 
- **Southeast Conservation Blueprint –** The Southeast Conservation Adaptation Strategy (SECAS) develops this layer as a living spatial plan that identifies priority areas for a connected network of lands and waters across the Southeast and Caribbean.
- **Solar Energy Suitability** 
- **Urban Growth –** These layers are based on the Future Urban-Regional Environment Simulation (FUTURES) Urban Growth Model from NCSU's Center for Geospatial Analytics. FUTURES was designed specifically to address the regional-scale ecological and environmental impacts of urbanization and is one of the few land change models developed to explicitly capture the spatial structure of development. There are three layers showing the projections for urban growth for the years 2060, 2080, and 2100.
- **6ft Sea Level Rise Inundation**
- **2020 Longleaf Implementation Team Priorities** – Priorities of the Longleaf Implementation Teams that are established in significant geographic areas based on the Range-wide Plan for Longleaf Pine developed by America's Longleaf Restoration Initiative.

[Link to Tool](https://serppas.org/resources/maps/)
`,WP=`![[Southeast conservation blueprint screenshot.png]]

The Southeast Conservation Blueprint Explorer, created by the Southeast Conservation Adaptation Strategy (SECAS), is a living, spatial plan to achieve the SECAS vision of a connected network of lands and waters across the Southeast and Caribbean. The online viewer is designed to help you understand the Blueprint and discover how your area of interest scores on the Blueprint priorities, hubs and corridors, indicators, threats, and more. The Blueprint is regularly updated to incorporate new data, partner input, and information about on-the-ground conditions. 

[Link to Tool](https://secassoutheast.org/blueprint)
`,qP=`![[ACPF.png]]

The Natural Resources Conservation Service's Agricultural Conservation Planning Framework (ACPF) is a free ArcGIS toolbox that leverages high-resolution geo-spatial data to help local farming communities better address their soil and water conservation needs. They also have a online interactive map letting you explore the ACPF framework. 

**[Link to Tool](https://acpf4watersheds.org/)**



`,BP=`* [[North Jersey Agricultural Conservation Planning Tool - NJRCD]] A 3-part process designed to assist individuals working with farmers to improve conservation in the North Jersey area.*
* [[Atlas Prioritization Framework (Pacific Northwest, Columbia River Basin)]] Fisheries habitat restoration status throughout the Columbia river basin.
* [[Agricultural Conservation Planning Framework in Action Map (Midwest)]] Soil and water quality mapping in midwestern states. `,jP=`![[Aquatics/Similar Tools/Images/atlas prioritization screenshot.png]]
Atlas Prioritization Framework made by BPA Publish displays the status of implementation of fisheries habitat restoration programs throughout the Columbia River Basin.

[Link to Tool](https://www.arcgis.com/home/item.html?id=fa7ca4c970014eceb4db24847ebf51d3)
`,GP=`
![[North Jersey Ag screenshot.png]]

The NJRCD is designed to assist individuals working with farmers to improve conservation,  ask the right questions, recommend the right practices, and easily record their conservation notes for record keeping purposes. It is composed of three basic components: a paper sheet, spreadsheet, and educational library.

**[Link to Tool](https://www.northjerseyrcd.org/conservationplanningtool)**
`,IP=`![[CART screenshot.png]]

The NRCS Conservation Assessment Ranking Tool (CART) is a tool used by NRCS field offices to rank and prioritize applications for its conservation programs in order to allocate limited conservation funding to projects that provide the greatest environmental benefits and address the most critical resource concerns.

 [Link to Tool Summary](https://the-conservation-assessment-ranking-tool-nrcs.hub.arcgis.com/)  
 `,LP=`
![[conservation concerns tool screenshot.png]]

The USDA Conservation Concern Tool allows users to learn about different types of conservation issues that might impact the productivity or natural resources on your farm, ranch, or forest by exploring relevant topics. They can also build a list of concerns to discuss with a local USDA conservation specialist.

**[Link to Tool](https://www.farmers.gov/conservation#concerns-tool)** 

`,UP=`* [[Conservation Assessment Ranking Tool (CART)]] Ranking and prioritizing applications for NRCS conservation programs.
* [[Conservation Concern Tools]] Learn about different conservation issues impacting productivity or natural resources on your land.
`,FP=`![[freshwater xplorer screenshot.png]]

The U.S. EPA's Freshwater Explorer tool is an interactive web-based mapping tool that provides information about background and observed salt and mineral content for freshwater streams, lakes, and wells in all 50 U.S. states, Puerto Rico, and the U.S. Virgin Islands. It can be used by anyone, including citizens and non-governmental organizations, to better understand national and local water quality issues and provides water quality information to help federal, state, territory, tribal, and local partners make decisions about freshwater resources.

[Link to Tool](https://epa.maps.arcgis.com/apps/Cascade/index.html?appid=13fe4698f35d4a95ba9dfe6f8033f735)`,QP=`
![[hows my waterway screenshot.png]]


The United States Environmental Protection Agency's "Hows My Waterway" tool enables users to find information on the condition of their waters displayed on 3 scales; community, state, and national. Users can retrieve information on assessments and reported condition of local waters for anywhere in the nation by searching based on address, zipcode or place, and explore topics such as swimming, eating fish, aquatic life, and drinking water.

  **[Link to Tool](https://mywaterway.epa.gov/)**



 `,YP=`
![[Aquatics/Similar Tools/Images/national water dashboard screenshot.png]]
The US Geological Survey's National Water Dashboard shows provisional real-time water data collected at the USGS observation stations in context with weather-related data from other public sources. 

**[Link to Tool](https://dashboard.waterdata.usgs.gov/app/nwd/en/?region=lower48&aoi=default)**
`,VP=`* [[National Water Dashboard]] View real-time stream, lake, reservoir, precipitation, water quality, and ground water stations in context with current weather and hazard conditions.*
* [[How's My Waterway]] Information on swimming, fish, aquatic life, and drinking water conditions displayed community, state, and national scales. 
* [[Freshwater Explorer]] EPA map showing predicted conductivity of water in continental US`;function fd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ja=fd();function $g(i){Ja=i}var Qr={exec:()=>null};function qe(i,s=""){let c=typeof i=="string"?i:i.source;const l={replace:(u,f)=>{let h=typeof f=="string"?f:f.source;return h=h.replace(xn.caret,"$1"),c=c.replace(u,h),l},getRegex:()=>new RegExp(c,s)};return l}var xn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i")},XP=/^(?:[ \t]*(?:\n|$))+/,ZP=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,KP=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Kr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,JP=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hd=/(?:[*+-]|\d{1,9}[.)])/,ev=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,nv=qe(ev).replace(/bull/g,hd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),$P=qe(ev).replace(/bull/g,hd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),md=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,eT=/^[^\n]+/,pd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,nT=qe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",pd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),tT=qe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,hd).getRegex(),Ks="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",gd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,aT=qe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",gd).replace("tag",Ks).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),tv=qe(md).replace("hr",Kr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ks).getRegex(),iT=qe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",tv).getRegex(),vd={blockquote:iT,code:ZP,def:nT,fences:KP,heading:JP,hr:Kr,html:aT,lheading:nv,list:tT,newline:XP,paragraph:tv,table:Qr,text:eT},Pg=qe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Kr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ks).getRegex(),rT={...vd,lheading:$P,table:Pg,paragraph:qe(md).replace("hr",Kr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Pg).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ks).getRegex()},oT={...vd,html:qe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",gd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Qr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:qe(md).replace("hr",Kr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",nv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},sT=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,lT=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,av=/^( {2,}|\\)\n(?!\s*$)/,cT=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Js=/[\p{P}\p{S}]/u,bd=/[\s\p{P}\p{S}]/u,iv=/[^\s\p{P}\p{S}]/u,uT=qe(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,bd).getRegex(),rv=/(?!~)[\p{P}\p{S}]/u,dT=/(?!~)[\s\p{P}\p{S}]/u,fT=/(?:[^\s\p{P}\p{S}]|~)/u,hT=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ov=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,mT=qe(ov,"u").replace(/punct/g,Js).getRegex(),pT=qe(ov,"u").replace(/punct/g,rv).getRegex(),sv="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",gT=qe(sv,"gu").replace(/notPunctSpace/g,iv).replace(/punctSpace/g,bd).replace(/punct/g,Js).getRegex(),vT=qe(sv,"gu").replace(/notPunctSpace/g,fT).replace(/punctSpace/g,dT).replace(/punct/g,rv).getRegex(),bT=qe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,iv).replace(/punctSpace/g,bd).replace(/punct/g,Js).getRegex(),yT=qe(/\\(punct)/,"gu").replace(/punct/g,Js).getRegex(),CT=qe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ST=qe(gd).replace("(?:-->|$)","-->").getRegex(),wT=qe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ST).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Qs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,PT=qe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Qs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),lv=qe(/^!?\[(label)\]\[(ref)\]/).replace("label",Qs).replace("ref",pd).getRegex(),cv=qe(/^!?\[(ref)\](?:\[\])?/).replace("ref",pd).getRegex(),TT=qe("reflink|nolink(?!\\()","g").replace("reflink",lv).replace("nolink",cv).getRegex(),yd={_backpedal:Qr,anyPunctuation:yT,autolink:CT,blockSkip:hT,br:av,code:lT,del:Qr,emStrongLDelim:mT,emStrongRDelimAst:gT,emStrongRDelimUnd:bT,escape:sT,link:PT,nolink:cv,punctuation:uT,reflink:lv,reflinkSearch:TT,tag:wT,text:cT,url:Qr},ET={...yd,link:qe(/^!?\[(label)\]\((.*?)\)/).replace("label",Qs).getRegex(),reflink:qe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Qs).getRegex()},Ku={...yd,emStrongRDelimAst:vT,emStrongLDelim:pT,url:qe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},_T={...Ku,br:qe(av).replace("{2,}","*").getRegex(),text:qe(Ku.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ns={normal:vd,gfm:rT,pedantic:oT},Lr={normal:yd,gfm:Ku,breaks:_T,pedantic:ET},RT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Tg=i=>RT[i];function xt(i,s){if(s){if(xn.escapeTest.test(i))return i.replace(xn.escapeReplace,Tg)}else if(xn.escapeTestNoEncode.test(i))return i.replace(xn.escapeReplaceNoEncode,Tg);return i}function Eg(i){try{i=encodeURI(i).replace(xn.percentDecode,"%")}catch{return null}return i}function _g(i,s){const c=i.replace(xn.findPipe,(f,h,p)=>{let v=!1,b=h;for(;--b>=0&&p[b]==="\\";)v=!v;return v?"|":" |"}),l=c.split(xn.splitPipe);let u=0;if(l[0].trim()||l.shift(),l.length>0&&!l.at(-1)?.trim()&&l.pop(),s)if(l.length>s)l.splice(s);else for(;l.length<s;)l.push("");for(;u<l.length;u++)l[u]=l[u].trim().replace(xn.slashPipe,"|");return l}function Ur(i,s,c){const l=i.length;if(l===0)return"";let u=0;for(;u<l&&i.charAt(l-u-1)===s;)u++;return i.slice(0,l-u)}function xT(i,s){if(i.indexOf(s[1])===-1)return-1;let c=0;for(let l=0;l<i.length;l++)if(i[l]==="\\")l++;else if(i[l]===s[0])c++;else if(i[l]===s[1]&&(c--,c<0))return l;return c>0?-2:-1}function Rg(i,s,c,l,u){const f=s.href,h=s.title||null,p=i[1].replace(u.other.outputLinkReplace,"$1");l.state.inLink=!0;const v={type:i[0].charAt(0)==="!"?"image":"link",raw:c,href:f,title:h,text:p,tokens:l.inlineTokens(p)};return l.state.inLink=!1,v}function AT(i,s,c){const l=i.match(c.other.indentCodeCompensation);if(l===null)return s;const u=l[1];return s.split(`
`).map(f=>{const h=f.match(c.other.beginningSpace);if(h===null)return f;const[p]=h;return p.length>=u.length?f.slice(u.length):f}).join(`
`)}var Ys=class{options;rules;lexer;constructor(i){this.options=i||Ja}space(i){const s=this.rules.block.newline.exec(i);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(i){const s=this.rules.block.code.exec(i);if(s){const c=s[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?c:Ur(c,`
`)}}}fences(i){const s=this.rules.block.fences.exec(i);if(s){const c=s[0],l=AT(c,s[3]||"",this.rules);return{type:"code",raw:c,lang:s[2]?s[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):s[2],text:l}}}heading(i){const s=this.rules.block.heading.exec(i);if(s){let c=s[2].trim();if(this.rules.other.endingHash.test(c)){const l=Ur(c,"#");(this.options.pedantic||!l||this.rules.other.endingSpaceChar.test(l))&&(c=l.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:c,tokens:this.lexer.inline(c)}}}hr(i){const s=this.rules.block.hr.exec(i);if(s)return{type:"hr",raw:Ur(s[0],`
`)}}blockquote(i){const s=this.rules.block.blockquote.exec(i);if(s){let c=Ur(s[0],`
`).split(`
`),l="",u="";const f=[];for(;c.length>0;){let h=!1;const p=[];let v;for(v=0;v<c.length;v++)if(this.rules.other.blockquoteStart.test(c[v]))p.push(c[v]),h=!0;else if(!h)p.push(c[v]);else break;c=c.slice(v);const b=p.join(`
`),E=b.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");l=l?`${l}
${b}`:b,u=u?`${u}
${E}`:E;const y=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(E,f,!0),this.lexer.state.top=y,c.length===0)break;const _=f.at(-1);if(_?.type==="code")break;if(_?.type==="blockquote"){const q=_,B=q.raw+`
`+c.join(`
`),ie=this.blockquote(B);f[f.length-1]=ie,l=l.substring(0,l.length-q.raw.length)+ie.raw,u=u.substring(0,u.length-q.text.length)+ie.text;break}else if(_?.type==="list"){const q=_,B=q.raw+`
`+c.join(`
`),ie=this.list(B);f[f.length-1]=ie,l=l.substring(0,l.length-_.raw.length)+ie.raw,u=u.substring(0,u.length-q.raw.length)+ie.raw,c=B.substring(f.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:l,tokens:f,text:u}}}list(i){let s=this.rules.block.list.exec(i);if(s){let c=s[1].trim();const l=c.length>1,u={type:"list",raw:"",ordered:l,start:l?+c.slice(0,-1):"",loose:!1,items:[]};c=l?`\\d{1,9}\\${c.slice(-1)}`:`\\${c}`,this.options.pedantic&&(c=l?c:"[*+-]");const f=this.rules.other.listItemRegex(c);let h=!1;for(;i;){let v=!1,b="",E="";if(!(s=f.exec(i))||this.rules.block.hr.test(i))break;b=s[0],i=i.substring(b.length);let y=s[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,be=>" ".repeat(3*be.length)),_=i.split(`
`,1)[0],q=!y.trim(),B=0;if(this.options.pedantic?(B=2,E=y.trimStart()):q?B=s[1].length+1:(B=s[2].search(this.rules.other.nonSpaceChar),B=B>4?1:B,E=y.slice(B),B+=s[1].length),q&&this.rules.other.blankLine.test(_)&&(b+=_+`
`,i=i.substring(_.length+1),v=!0),!v){const be=this.rules.other.nextBulletRegex(B),V=this.rules.other.hrRegex(B),ce=this.rules.other.fencesBeginRegex(B),re=this.rules.other.headingBeginRegex(B),Se=this.rules.other.htmlBeginRegex(B);for(;i;){const ue=i.split(`
`,1)[0];let L;if(_=ue,this.options.pedantic?(_=_.replace(this.rules.other.listReplaceNesting,"  "),L=_):L=_.replace(this.rules.other.tabCharGlobal,"    "),ce.test(_)||re.test(_)||Se.test(_)||be.test(_)||V.test(_))break;if(L.search(this.rules.other.nonSpaceChar)>=B||!_.trim())E+=`
`+L.slice(B);else{if(q||y.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ce.test(y)||re.test(y)||V.test(y))break;E+=`
`+_}!q&&!_.trim()&&(q=!0),b+=ue+`
`,i=i.substring(ue.length+1),y=L.slice(B)}}u.loose||(h?u.loose=!0:this.rules.other.doubleBlankLine.test(b)&&(h=!0));let ie=null,se;this.options.gfm&&(ie=this.rules.other.listIsTask.exec(E),ie&&(se=ie[0]!=="[ ] ",E=E.replace(this.rules.other.listReplaceTask,""))),u.items.push({type:"list_item",raw:b,task:!!ie,checked:se,loose:!1,text:E,tokens:[]}),u.raw+=b}const p=u.items.at(-1);if(p)p.raw=p.raw.trimEnd(),p.text=p.text.trimEnd();else return;u.raw=u.raw.trimEnd();for(let v=0;v<u.items.length;v++)if(this.lexer.state.top=!1,u.items[v].tokens=this.lexer.blockTokens(u.items[v].text,[]),!u.loose){const b=u.items[v].tokens.filter(y=>y.type==="space"),E=b.length>0&&b.some(y=>this.rules.other.anyLine.test(y.raw));u.loose=E}if(u.loose)for(let v=0;v<u.items.length;v++)u.items[v].loose=!0;return u}}html(i){const s=this.rules.block.html.exec(i);if(s)return{type:"html",block:!0,raw:s[0],pre:s[1]==="pre"||s[1]==="script"||s[1]==="style",text:s[0]}}def(i){const s=this.rules.block.def.exec(i);if(s){const c=s[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),l=s[2]?s[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",u=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):s[3];return{type:"def",tag:c,raw:s[0],href:l,title:u}}}table(i){const s=this.rules.block.table.exec(i);if(!s||!this.rules.other.tableDelimiter.test(s[2]))return;const c=_g(s[1]),l=s[2].replace(this.rules.other.tableAlignChars,"").split("|"),u=s[3]?.trim()?s[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],f={type:"table",raw:s[0],header:[],align:[],rows:[]};if(c.length===l.length){for(const h of l)this.rules.other.tableAlignRight.test(h)?f.align.push("right"):this.rules.other.tableAlignCenter.test(h)?f.align.push("center"):this.rules.other.tableAlignLeft.test(h)?f.align.push("left"):f.align.push(null);for(let h=0;h<c.length;h++)f.header.push({text:c[h],tokens:this.lexer.inline(c[h]),header:!0,align:f.align[h]});for(const h of u)f.rows.push(_g(h,f.header.length).map((p,v)=>({text:p,tokens:this.lexer.inline(p),header:!1,align:f.align[v]})));return f}}lheading(i){const s=this.rules.block.lheading.exec(i);if(s)return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:this.lexer.inline(s[1])}}paragraph(i){const s=this.rules.block.paragraph.exec(i);if(s){const c=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:c,tokens:this.lexer.inline(c)}}}text(i){const s=this.rules.block.text.exec(i);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(i){const s=this.rules.inline.escape.exec(i);if(s)return{type:"escape",raw:s[0],text:s[1]}}tag(i){const s=this.rules.inline.tag.exec(i);if(s)return!this.lexer.state.inLink&&this.rules.other.startATag.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:s[0]}}link(i){const s=this.rules.inline.link.exec(i);if(s){const c=s[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(c)){if(!this.rules.other.endAngleBracket.test(c))return;const f=Ur(c.slice(0,-1),"\\");if((c.length-f.length)%2===0)return}else{const f=xT(s[2],"()");if(f===-2)return;if(f>-1){const p=(s[0].indexOf("!")===0?5:4)+s[1].length+f;s[2]=s[2].substring(0,f),s[0]=s[0].substring(0,p).trim(),s[3]=""}}let l=s[2],u="";if(this.options.pedantic){const f=this.rules.other.pedanticHrefTitle.exec(l);f&&(l=f[1],u=f[3])}else u=s[3]?s[3].slice(1,-1):"";return l=l.trim(),this.rules.other.startAngleBracket.test(l)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(c)?l=l.slice(1):l=l.slice(1,-1)),Rg(s,{href:l&&l.replace(this.rules.inline.anyPunctuation,"$1"),title:u&&u.replace(this.rules.inline.anyPunctuation,"$1")},s[0],this.lexer,this.rules)}}reflink(i,s){let c;if((c=this.rules.inline.reflink.exec(i))||(c=this.rules.inline.nolink.exec(i))){const l=(c[2]||c[1]).replace(this.rules.other.multipleSpaceGlobal," "),u=s[l.toLowerCase()];if(!u){const f=c[0].charAt(0);return{type:"text",raw:f,text:f}}return Rg(c,u,c[0],this.lexer,this.rules)}}emStrong(i,s,c=""){let l=this.rules.inline.emStrongLDelim.exec(i);if(!l||l[3]&&c.match(this.rules.other.unicodeAlphaNumeric))return;if(!(l[1]||l[2]||"")||!c||this.rules.inline.punctuation.exec(c)){const f=[...l[0]].length-1;let h,p,v=f,b=0;const E=l[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(E.lastIndex=0,s=s.slice(-1*i.length+f);(l=E.exec(s))!=null;){if(h=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!h)continue;if(p=[...h].length,l[3]||l[4]){v+=p;continue}else if((l[5]||l[6])&&f%3&&!((f+p)%3)){b+=p;continue}if(v-=p,v>0)continue;p=Math.min(p,p+v+b);const y=[...l[0]][0].length,_=i.slice(0,f+l.index+y+p);if(Math.min(f,p)%2){const B=_.slice(1,-1);return{type:"em",raw:_,text:B,tokens:this.lexer.inlineTokens(B)}}const q=_.slice(2,-2);return{type:"strong",raw:_,text:q,tokens:this.lexer.inlineTokens(q)}}}}codespan(i){const s=this.rules.inline.code.exec(i);if(s){let c=s[2].replace(this.rules.other.newLineCharGlobal," ");const l=this.rules.other.nonSpaceChar.test(c),u=this.rules.other.startingSpaceChar.test(c)&&this.rules.other.endingSpaceChar.test(c);return l&&u&&(c=c.substring(1,c.length-1)),{type:"codespan",raw:s[0],text:c}}}br(i){const s=this.rules.inline.br.exec(i);if(s)return{type:"br",raw:s[0]}}del(i){const s=this.rules.inline.del.exec(i);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2])}}autolink(i){const s=this.rules.inline.autolink.exec(i);if(s){let c,l;return s[2]==="@"?(c=s[1],l="mailto:"+c):(c=s[1],l=c),{type:"link",raw:s[0],text:c,href:l,tokens:[{type:"text",raw:c,text:c}]}}}url(i){let s;if(s=this.rules.inline.url.exec(i)){let c,l;if(s[2]==="@")c=s[0],l="mailto:"+c;else{let u;do u=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])?.[0]??"";while(u!==s[0]);c=s[0],s[1]==="www."?l="http://"+s[0]:l=s[0]}return{type:"link",raw:s[0],text:c,href:l,tokens:[{type:"text",raw:c,text:c}]}}}inlineText(i){const s=this.rules.inline.text.exec(i);if(s){const c=this.lexer.state.inRawBlock;return{type:"text",raw:s[0],text:s[0],escaped:c}}}},Vt=class Ju{tokens;options;state;tokenizer;inlineQueue;constructor(s){this.tokens=[],this.tokens.links=Object.create(null),this.options=s||Ja,this.options.tokenizer=this.options.tokenizer||new Ys,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const c={other:xn,block:Ns.normal,inline:Lr.normal};this.options.pedantic?(c.block=Ns.pedantic,c.inline=Lr.pedantic):this.options.gfm&&(c.block=Ns.gfm,this.options.breaks?c.inline=Lr.breaks:c.inline=Lr.gfm),this.tokenizer.rules=c}static get rules(){return{block:Ns,inline:Lr}}static lex(s,c){return new Ju(c).lex(s)}static lexInline(s,c){return new Ju(c).inlineTokens(s)}lex(s){s=s.replace(xn.carriageReturn,`
`),this.blockTokens(s,this.tokens);for(let c=0;c<this.inlineQueue.length;c++){const l=this.inlineQueue[c];this.inlineTokens(l.src,l.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(s,c=[],l=!1){for(this.options.pedantic&&(s=s.replace(xn.tabCharGlobal,"    ").replace(xn.spaceLine,""));s;){let u;if(this.options.extensions?.block?.some(h=>(u=h.call({lexer:this},s,c))?(s=s.substring(u.raw.length),c.push(u),!0):!1))continue;if(u=this.tokenizer.space(s)){s=s.substring(u.raw.length);const h=c.at(-1);u.raw.length===1&&h!==void 0?h.raw+=`
`:c.push(u);continue}if(u=this.tokenizer.code(s)){s=s.substring(u.raw.length);const h=c.at(-1);h?.type==="paragraph"||h?.type==="text"?(h.raw+=`
`+u.raw,h.text+=`
`+u.text,this.inlineQueue.at(-1).src=h.text):c.push(u);continue}if(u=this.tokenizer.fences(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.heading(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.hr(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.blockquote(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.list(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.html(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.def(s)){s=s.substring(u.raw.length);const h=c.at(-1);h?.type==="paragraph"||h?.type==="text"?(h.raw+=`
`+u.raw,h.text+=`
`+u.raw,this.inlineQueue.at(-1).src=h.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title});continue}if(u=this.tokenizer.table(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.lheading(s)){s=s.substring(u.raw.length),c.push(u);continue}let f=s;if(this.options.extensions?.startBlock){let h=1/0;const p=s.slice(1);let v;this.options.extensions.startBlock.forEach(b=>{v=b.call({lexer:this},p),typeof v=="number"&&v>=0&&(h=Math.min(h,v))}),h<1/0&&h>=0&&(f=s.substring(0,h+1))}if(this.state.top&&(u=this.tokenizer.paragraph(f))){const h=c.at(-1);l&&h?.type==="paragraph"?(h.raw+=`
`+u.raw,h.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=h.text):c.push(u),l=f.length!==s.length,s=s.substring(u.raw.length);continue}if(u=this.tokenizer.text(s)){s=s.substring(u.raw.length);const h=c.at(-1);h?.type==="text"?(h.raw+=`
`+u.raw,h.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=h.text):c.push(u);continue}if(s){const h="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return this.state.top=!0,c}inline(s,c=[]){return this.inlineQueue.push({src:s,tokens:c}),c}inlineTokens(s,c=[]){let l=s,u=null;if(this.tokens.links){const p=Object.keys(this.tokens.links);if(p.length>0)for(;(u=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)p.includes(u[0].slice(u[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,u.index)+"["+"a".repeat(u[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(u=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,u.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(u=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,u.index)+"["+"a".repeat(u[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let f=!1,h="";for(;s;){f||(h=""),f=!1;let p;if(this.options.extensions?.inline?.some(b=>(p=b.call({lexer:this},s,c))?(s=s.substring(p.raw.length),c.push(p),!0):!1))continue;if(p=this.tokenizer.escape(s)){s=s.substring(p.raw.length),c.push(p);continue}if(p=this.tokenizer.tag(s)){s=s.substring(p.raw.length),c.push(p);continue}if(p=this.tokenizer.link(s)){s=s.substring(p.raw.length),c.push(p);continue}if(p=this.tokenizer.reflink(s,this.tokens.links)){s=s.substring(p.raw.length);const b=c.at(-1);p.type==="text"&&b?.type==="text"?(b.raw+=p.raw,b.text+=p.text):c.push(p);continue}if(p=this.tokenizer.emStrong(s,l,h)){s=s.substring(p.raw.length),c.push(p);continue}if(p=this.tokenizer.codespan(s)){s=s.substring(p.raw.length),c.push(p);continue}if(p=this.tokenizer.br(s)){s=s.substring(p.raw.length),c.push(p);continue}if(p=this.tokenizer.del(s)){s=s.substring(p.raw.length),c.push(p);continue}if(p=this.tokenizer.autolink(s)){s=s.substring(p.raw.length),c.push(p);continue}if(!this.state.inLink&&(p=this.tokenizer.url(s))){s=s.substring(p.raw.length),c.push(p);continue}let v=s;if(this.options.extensions?.startInline){let b=1/0;const E=s.slice(1);let y;this.options.extensions.startInline.forEach(_=>{y=_.call({lexer:this},E),typeof y=="number"&&y>=0&&(b=Math.min(b,y))}),b<1/0&&b>=0&&(v=s.substring(0,b+1))}if(p=this.tokenizer.inlineText(v)){s=s.substring(p.raw.length),p.raw.slice(-1)!=="_"&&(h=p.raw.slice(-1)),f=!0;const b=c.at(-1);b?.type==="text"?(b.raw+=p.raw,b.text+=p.text):c.push(p);continue}if(s){const b="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return c}},Vs=class{options;parser;constructor(i){this.options=i||Ja}space(i){return""}code({text:i,lang:s,escaped:c}){const l=(s||"").match(xn.notSpaceStart)?.[0],u=i.replace(xn.endingNewline,"")+`
`;return l?'<pre><code class="language-'+xt(l)+'">'+(c?u:xt(u,!0))+`</code></pre>
`:"<pre><code>"+(c?u:xt(u,!0))+`</code></pre>
`}blockquote({tokens:i}){return`<blockquote>
${this.parser.parse(i)}</blockquote>
`}html({text:i}){return i}heading({tokens:i,depth:s}){return`<h${s}>${this.parser.parseInline(i)}</h${s}>
`}hr(i){return`<hr>
`}list(i){const s=i.ordered,c=i.start;let l="";for(let h=0;h<i.items.length;h++){const p=i.items[h];l+=this.listitem(p)}const u=s?"ol":"ul",f=s&&c!==1?' start="'+c+'"':"";return"<"+u+f+`>
`+l+"</"+u+`>
`}listitem(i){let s="";if(i.task){const c=this.checkbox({checked:!!i.checked});i.loose?i.tokens[0]?.type==="paragraph"?(i.tokens[0].text=c+" "+i.tokens[0].text,i.tokens[0].tokens&&i.tokens[0].tokens.length>0&&i.tokens[0].tokens[0].type==="text"&&(i.tokens[0].tokens[0].text=c+" "+xt(i.tokens[0].tokens[0].text),i.tokens[0].tokens[0].escaped=!0)):i.tokens.unshift({type:"text",raw:c+" ",text:c+" ",escaped:!0}):s+=c+" "}return s+=this.parser.parse(i.tokens,!!i.loose),`<li>${s}</li>
`}checkbox({checked:i}){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:i}){return`<p>${this.parser.parseInline(i)}</p>
`}table(i){let s="",c="";for(let u=0;u<i.header.length;u++)c+=this.tablecell(i.header[u]);s+=this.tablerow({text:c});let l="";for(let u=0;u<i.rows.length;u++){const f=i.rows[u];c="";for(let h=0;h<f.length;h++)c+=this.tablecell(f[h]);l+=this.tablerow({text:c})}return l&&(l=`<tbody>${l}</tbody>`),`<table>
<thead>
`+s+`</thead>
`+l+`</table>
`}tablerow({text:i}){return`<tr>
${i}</tr>
`}tablecell(i){const s=this.parser.parseInline(i.tokens),c=i.header?"th":"td";return(i.align?`<${c} align="${i.align}">`:`<${c}>`)+s+`</${c}>
`}strong({tokens:i}){return`<strong>${this.parser.parseInline(i)}</strong>`}em({tokens:i}){return`<em>${this.parser.parseInline(i)}</em>`}codespan({text:i}){return`<code>${xt(i,!0)}</code>`}br(i){return"<br>"}del({tokens:i}){return`<del>${this.parser.parseInline(i)}</del>`}link({href:i,title:s,tokens:c}){const l=this.parser.parseInline(c),u=Eg(i);if(u===null)return l;i=u;let f='<a href="'+i+'"';return s&&(f+=' title="'+xt(s)+'"'),f+=">"+l+"</a>",f}image({href:i,title:s,text:c,tokens:l}){l&&(c=this.parser.parseInline(l,this.parser.textRenderer));const u=Eg(i);if(u===null)return xt(c);i=u;let f=`<img src="${i}" alt="${c}"`;return s&&(f+=` title="${xt(s)}"`),f+=">",f}text(i){return"tokens"in i&&i.tokens?this.parser.parseInline(i.tokens):"escaped"in i&&i.escaped?i.text:xt(i.text)}},Cd=class{strong({text:i}){return i}em({text:i}){return i}codespan({text:i}){return i}del({text:i}){return i}html({text:i}){return i}text({text:i}){return i}link({text:i}){return""+i}image({text:i}){return""+i}br(){return""}},Xt=class $u{options;renderer;textRenderer;constructor(s){this.options=s||Ja,this.options.renderer=this.options.renderer||new Vs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Cd}static parse(s,c){return new $u(c).parse(s)}static parseInline(s,c){return new $u(c).parseInline(s)}parse(s,c=!0){let l="";for(let u=0;u<s.length;u++){const f=s[u];if(this.options.extensions?.renderers?.[f.type]){const p=f,v=this.options.extensions.renderers[p.type].call({parser:this},p);if(v!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type)){l+=v||"";continue}}const h=f;switch(h.type){case"space":{l+=this.renderer.space(h);continue}case"hr":{l+=this.renderer.hr(h);continue}case"heading":{l+=this.renderer.heading(h);continue}case"code":{l+=this.renderer.code(h);continue}case"table":{l+=this.renderer.table(h);continue}case"blockquote":{l+=this.renderer.blockquote(h);continue}case"list":{l+=this.renderer.list(h);continue}case"html":{l+=this.renderer.html(h);continue}case"paragraph":{l+=this.renderer.paragraph(h);continue}case"text":{let p=h,v=this.renderer.text(p);for(;u+1<s.length&&s[u+1].type==="text";)p=s[++u],v+=`
`+this.renderer.text(p);c?l+=this.renderer.paragraph({type:"paragraph",raw:v,text:v,tokens:[{type:"text",raw:v,text:v,escaped:!0}]}):l+=v;continue}default:{const p='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return l}parseInline(s,c=this.renderer){let l="";for(let u=0;u<s.length;u++){const f=s[u];if(this.options.extensions?.renderers?.[f.type]){const p=this.options.extensions.renderers[f.type].call({parser:this},f);if(p!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(f.type)){l+=p||"";continue}}const h=f;switch(h.type){case"escape":{l+=c.text(h);break}case"html":{l+=c.html(h);break}case"link":{l+=c.link(h);break}case"image":{l+=c.image(h);break}case"strong":{l+=c.strong(h);break}case"em":{l+=c.em(h);break}case"codespan":{l+=c.codespan(h);break}case"br":{l+=c.br(h);break}case"del":{l+=c.del(h);break}case"text":{l+=c.text(h);break}default:{const p='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return l}},Ws=class{options;block;constructor(i){this.options=i||Ja}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(i){return i}postprocess(i){return i}processAllTokens(i){return i}provideLexer(){return this.block?Vt.lex:Vt.lexInline}provideParser(){return this.block?Xt.parse:Xt.parseInline}},MT=class{defaults=fd();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Xt;Renderer=Vs;TextRenderer=Cd;Lexer=Vt;Tokenizer=Ys;Hooks=Ws;constructor(...i){this.use(...i)}walkTokens(i,s){let c=[];for(const l of i)switch(c=c.concat(s.call(this,l)),l.type){case"table":{const u=l;for(const f of u.header)c=c.concat(this.walkTokens(f.tokens,s));for(const f of u.rows)for(const h of f)c=c.concat(this.walkTokens(h.tokens,s));break}case"list":{const u=l;c=c.concat(this.walkTokens(u.items,s));break}default:{const u=l;this.defaults.extensions?.childTokens?.[u.type]?this.defaults.extensions.childTokens[u.type].forEach(f=>{const h=u[f].flat(1/0);c=c.concat(this.walkTokens(h,s))}):u.tokens&&(c=c.concat(this.walkTokens(u.tokens,s)))}}return c}use(...i){const s=this.defaults.extensions||{renderers:{},childTokens:{}};return i.forEach(c=>{const l={...c};if(l.async=this.defaults.async||l.async||!1,c.extensions&&(c.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){const f=s.renderers[u.name];f?s.renderers[u.name]=function(...h){let p=u.renderer.apply(this,h);return p===!1&&(p=f.apply(this,h)),p}:s.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const f=s[u.level];f?f.unshift(u.tokenizer):s[u.level]=[u.tokenizer],u.start&&(u.level==="block"?s.startBlock?s.startBlock.push(u.start):s.startBlock=[u.start]:u.level==="inline"&&(s.startInline?s.startInline.push(u.start):s.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(s.childTokens[u.name]=u.childTokens)}),l.extensions=s),c.renderer){const u=this.defaults.renderer||new Vs(this.defaults);for(const f in c.renderer){if(!(f in u))throw new Error(`renderer '${f}' does not exist`);if(["options","parser"].includes(f))continue;const h=f,p=c.renderer[h],v=u[h];u[h]=(...b)=>{let E=p.apply(u,b);return E===!1&&(E=v.apply(u,b)),E||""}}l.renderer=u}if(c.tokenizer){const u=this.defaults.tokenizer||new Ys(this.defaults);for(const f in c.tokenizer){if(!(f in u))throw new Error(`tokenizer '${f}' does not exist`);if(["options","rules","lexer"].includes(f))continue;const h=f,p=c.tokenizer[h],v=u[h];u[h]=(...b)=>{let E=p.apply(u,b);return E===!1&&(E=v.apply(u,b)),E}}l.tokenizer=u}if(c.hooks){const u=this.defaults.hooks||new Ws;for(const f in c.hooks){if(!(f in u))throw new Error(`hook '${f}' does not exist`);if(["options","block"].includes(f))continue;const h=f,p=c.hooks[h],v=u[h];Ws.passThroughHooks.has(f)?u[h]=b=>{if(this.defaults.async)return Promise.resolve(p.call(u,b)).then(y=>v.call(u,y));const E=p.call(u,b);return v.call(u,E)}:u[h]=(...b)=>{let E=p.apply(u,b);return E===!1&&(E=v.apply(u,b)),E}}l.hooks=u}if(c.walkTokens){const u=this.defaults.walkTokens,f=c.walkTokens;l.walkTokens=function(h){let p=[];return p.push(f.call(this,h)),u&&(p=p.concat(u.call(this,h))),p}}this.defaults={...this.defaults,...l}}),this}setOptions(i){return this.defaults={...this.defaults,...i},this}lexer(i,s){return Vt.lex(i,s??this.defaults)}parser(i,s){return Xt.parse(i,s??this.defaults)}parseMarkdown(i){return(c,l)=>{const u={...l},f={...this.defaults,...u},h=this.onError(!!f.silent,!!f.async);if(this.defaults.async===!0&&u.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof c>"u"||c===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof c!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(c)+", string expected"));f.hooks&&(f.hooks.options=f,f.hooks.block=i);const p=f.hooks?f.hooks.provideLexer():i?Vt.lex:Vt.lexInline,v=f.hooks?f.hooks.provideParser():i?Xt.parse:Xt.parseInline;if(f.async)return Promise.resolve(f.hooks?f.hooks.preprocess(c):c).then(b=>p(b,f)).then(b=>f.hooks?f.hooks.processAllTokens(b):b).then(b=>f.walkTokens?Promise.all(this.walkTokens(b,f.walkTokens)).then(()=>b):b).then(b=>v(b,f)).then(b=>f.hooks?f.hooks.postprocess(b):b).catch(h);try{f.hooks&&(c=f.hooks.preprocess(c));let b=p(c,f);f.hooks&&(b=f.hooks.processAllTokens(b)),f.walkTokens&&this.walkTokens(b,f.walkTokens);let E=v(b,f);return f.hooks&&(E=f.hooks.postprocess(E)),E}catch(b){return h(b)}}}onError(i,s){return c=>{if(c.message+=`
Please report this to https://github.com/markedjs/marked.`,i){const l="<p>An error occurred:</p><pre>"+xt(c.message+"",!0)+"</pre>";return s?Promise.resolve(l):l}if(s)return Promise.reject(c);throw c}}},Ka=new MT;function Ie(i,s){return Ka.parse(i,s)}Ie.options=Ie.setOptions=function(i){return Ka.setOptions(i),Ie.defaults=Ka.defaults,$g(Ie.defaults),Ie};Ie.getDefaults=fd;Ie.defaults=Ja;Ie.use=function(...i){return Ka.use(...i),Ie.defaults=Ka.defaults,$g(Ie.defaults),Ie};Ie.walkTokens=function(i,s){return Ka.walkTokens(i,s)};Ie.parseInline=Ka.parseInline;Ie.Parser=Xt;Ie.parser=Xt.parse;Ie.Renderer=Vs;Ie.TextRenderer=Cd;Ie.Lexer=Vt;Ie.lexer=Vt.lex;Ie.Tokenizer=Ys;Ie.Hooks=Ws;Ie.parse=Ie;Ie.options;Ie.setOptions;Ie.use;Ie.walkTokens;Ie.parseInline;Xt.parse;Vt.lex;const NT=JSON.parse(`[{"slug":"common-acronyms-and-vocabulary","basename":"Common Acronyms and Vocabulary","title":"Common Acronyms and Vocabulary","plainTitle":"Common Acronyms and Vocabulary","folder":[],"file":"Common Acronyms and Vocabulary.md","cssclasses":[]},{"slug":"economic","basename":"🌾Economic","title":"🌾Economic","plainTitle":"Economic","folder":["Explore by Benefits","🌾Producer Benefits"],"file":"Explore by Benefits/🌾Producer Benefits/🌾Economic.md","cssclasses":[]},{"slug":"livestock-health-and-production","basename":"🌾Livestock Health and Production","title":"🌾Livestock Health and Production","plainTitle":"Livestock Health and Production","folder":["Explore by Benefits","🌾Producer Benefits"],"file":"Explore by Benefits/🌾Producer Benefits/🌾Livestock Health and Production.md","cssclasses":[]},{"slug":"plant-productivity","basename":"🌾Plant Productivity","title":"🌾Plant Productivity","plainTitle":"Plant Productivity","folder":["Explore by Benefits","🌾Producer Benefits"],"file":"Explore by Benefits/🌾Producer Benefits/🌾Plant Productivity.md","cssclasses":[]},{"slug":"reduced-erosion","basename":"🌾Reduced Erosion","title":"🌾Reduced Erosion","plainTitle":"Reduced Erosion","folder":["Explore by Benefits","🌾Producer Benefits"],"file":"Explore by Benefits/🌾Producer Benefits/🌾Reduced Erosion.md","cssclasses":[]},{"slug":"soil-health","basename":"🌾Soil Health","title":"🌾Soil Health","plainTitle":"Soil Health","folder":["Explore by Benefits","🌾Producer Benefits"],"file":"Explore by Benefits/🌾Producer Benefits/🌾Soil Health.md","cssclasses":[]},{"slug":"water-quantity-and-availability","basename":"🌾Water Quantity and Availability","title":"🌾Water Quantity and Availability","plainTitle":"Water Quantity and Availability","folder":["Explore by Benefits","🌾Producer Benefits"],"file":"Explore by Benefits/🌾Producer Benefits/🌾Water Quantity and Availability.md","cssclasses":[]},{"slug":"carbon-sequestration","basename":"🍃 Carbon Sequestration","title":"🍃 Carbon Sequestration","plainTitle":"Carbon Sequestration","folder":["Explore by Benefits","🍃Climate Benefits"],"file":"Explore by Benefits/🍃Climate Benefits/🍃 Carbon Sequestration.md","cssclasses":[]},{"slug":"climate-resilience-and-adaptation","basename":"🍃 Climate Resilience and Adaptation","title":"🍃 Climate Resilience and Adaptation","plainTitle":"Climate Resilience and Adaptation","folder":["Explore by Benefits","🍃Climate Benefits"],"file":"Explore by Benefits/🍃Climate Benefits/🍃 Climate Resilience and Adaptation.md","cssclasses":[]},{"slug":"ghg-emissions","basename":"🍃 GHG Emissions","title":"🍃 GHG Emissions","plainTitle":"GHG Emissions","folder":["Explore by Benefits","🍃Climate Benefits"],"file":"Explore by Benefits/🍃Climate Benefits/🍃 GHG Emissions.md","cssclasses":[]},{"slug":"aquatic-habitat","basename":"🦪 Aquatic Habitat","title":"🦪 Aquatic Habitat","plainTitle":"Aquatic Habitat","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Aquatic Habitat.md","cssclasses":[]},{"slug":"biodiversity","basename":"🦪 Biodiversity","title":"🦪 Biodiversity","plainTitle":"Biodiversity","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Biodiversity.md","cssclasses":[]},{"slug":"riparian-condition","basename":"🦪 Riparian Condition","title":"🦪 Riparian Condition","plainTitle":"Riparian Condition","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Riparian Condition.md","cssclasses":[]},{"slug":"streambank-and-shoreline-condition","basename":"🦪 Streambank and Shoreline Condition","title":"🦪 Streambank and Shoreline Condition","plainTitle":"Streambank and Shoreline Condition","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Streambank and Shoreline Condition.md","cssclasses":[]},{"slug":"terrestrial-habitat","basename":"🦪 Terrestrial Habitat","title":"🦪 Terrestrial Habitat","plainTitle":"Terrestrial Habitat","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Terrestrial Habitat.md","cssclasses":[]},{"slug":"water-quality","basename":"🦪 Water Quality","title":"🦪 Water Quality","plainTitle":"Water Quality","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Water Quality.md","cssclasses":[]},{"slug":"wetlands-conservation","basename":"🦪 Wetlands Conservation","title":"🦪 Wetlands Conservation","plainTitle":"Wetlands Conservation","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Wetlands Conservation.md","cssclasses":[]},{"slug":"wildlife-and-ecosystem-connectivity","basename":"🦪 Wildlife and Ecosystem Connectivity","title":"🦪 Wildlife and Ecosystem Connectivity","plainTitle":"Wildlife and Ecosystem Connectivity","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Wildlife and Ecosystem Connectivity.md","cssclasses":[]},{"slug":"cp-314-brush-management","basename":"CP 314 - Brush Management","title":"CP 314 - Brush Management","plainTitle":"CP 314 - Brush Management","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 314 - Brush Management.md","cssclasses":[]},{"slug":"cp-315-herbaceous-weed-treatment","basename":"CP 315 - Herbaceous Weed Treatment","title":"CP 315 - Herbaceous Weed Treatment","plainTitle":"CP 315 - Herbaceous Weed Treatment","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 315 - Herbaceous Weed Treatment.md","cssclasses":[]},{"slug":"cp-327-conservation-cover","basename":"CP 327 - Conservation Cover","title":"CP 327 - Conservation Cover","plainTitle":"CP 327 - Conservation Cover","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 327 - Conservation Cover.md","cssclasses":[]},{"slug":"cp-328-conservation-crop-rotation","basename":"CP 328 - Conservation Crop Rotation","title":"CP 328 - Conservation Crop Rotation","plainTitle":"CP 328 - Conservation Crop Rotation","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 328 - Conservation Crop Rotation.md","cssclasses":[]},{"slug":"cp-329-residue-and-tillage-mgmt-no-till","basename":"CP 329 - Residue and Tillage Mgmt (No Till)","title":"CP 329 - Residue and Tillage Mgmt (No Till)","plainTitle":"CP 329 - Residue and Tillage Mgmt (No Till)","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 329 - Residue and Tillage Mgmt (No Till).md","cssclasses":[]},{"slug":"cp-340-cover-crop","basename":"CP 340 - Cover Crop","title":"CP 340 - Cover Crop","plainTitle":"CP 340 - Cover Crop","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 340 - Cover Crop.md","cssclasses":[]},{"slug":"cp-342-critical-area-planting","basename":"CP 342 - Critical Area Planting","title":"CP 342 - Critical Area Planting","plainTitle":"CP 342 - Critical Area Planting","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 342 - Critical Area Planting.md","cssclasses":[]},{"slug":"cp-345-residue-and-tillage-mgmt-reduced-till","basename":"CP 345 - Residue and Tillage Mgmt (Reduced Till)","title":"CP 345 - Residue and Tillage Mgmt (Reduced Till)","plainTitle":"CP 345 - Residue and Tillage Mgmt (Reduced Till)","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 345 - Residue and Tillage Mgmt (Reduced Till).md","cssclasses":[]},{"slug":"cp-356-dike-and-levee","basename":"CP 356 - Dike and Levee","title":"CP 356 - Dike and Levee","plainTitle":"CP 356 - Dike and Levee","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 356 - Dike and Levee.md","cssclasses":[]},{"slug":"cp-378-pond","basename":"CP 378 - Pond","title":"CP 378 - Pond","plainTitle":"CP 378 - Pond","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 378 - Pond.md","cssclasses":[]},{"slug":"cp-382-fence","basename":"CP 382 - Fence","title":"CP 382 - Fence","plainTitle":"CP 382 - Fence","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 382 - Fence.md","cssclasses":[]},{"slug":"cp-390-riparian-herbaceous-cover","basename":"CP 390 - Riparian Herbaceous Cover","title":"CP 390 - Riparian Herbaceous Cover","plainTitle":"CP 390 - Riparian Herbaceous Cover","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 390 - Riparian Herbaceous Cover.md","cssclasses":[]},{"slug":"cp-391-riparian-forest-buffer","basename":"CP 391 - Riparian Forest buffer","title":"CP 391 - Riparian Forest buffer","plainTitle":"CP 391 - Riparian Forest buffer","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 391 - Riparian Forest buffer.md","cssclasses":[]},{"slug":"cp-395-stream-habitat-improvement-and-management","basename":"CP 395 - Stream Habitat Improvement and Management","title":"CP 395 - Stream Habitat Improvement and Management","plainTitle":"CP 395 - Stream Habitat Improvement and Management","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 395 - Stream Habitat Improvement and Management.md","cssclasses":[]},{"slug":"cp-396-aquatic-organism-passage","basename":"CP 396 - Aquatic Organism Passage","title":"CP 396 - Aquatic Organism Passage","plainTitle":"CP 396 - Aquatic Organism Passage","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 396 - Aquatic Organism Passage.md","cssclasses":[]},{"slug":"cp-410-grade-stabilization-structure","basename":"CP 410 - Grade Stabilization Structure","title":"CP 410 - Grade Stabilization Structure","plainTitle":"CP 410 - Grade Stabilization Structure","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 410 - Grade Stabilization Structure.md","cssclasses":[]},{"slug":"cp-420-wildlife-habitat-planting","basename":"CP 420 - Wildlife Habitat Planting","title":"CP 420 - Wildlife Habitat Planting","plainTitle":"CP 420 - Wildlife Habitat Planting","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 420 - Wildlife Habitat Planting.md","cssclasses":[]},{"slug":"cp-472-access-control","basename":"CP 472 - Access Control","title":"CP 472 - Access Control","plainTitle":"CP 472 - Access Control","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 472 - Access Control.md","cssclasses":[]},{"slug":"cp-512-pasture-and-hay-planting","basename":"CP 512 - Pasture and Hay Planting","title":"CP 512 - Pasture and Hay Planting","plainTitle":"CP 512 - Pasture and Hay Planting","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 512 - Pasture and Hay Planting.md","cssclasses":[]},{"slug":"cp-516-livestock-pipeline","basename":"CP 516 - Livestock Pipeline","title":"CP 516 - Livestock Pipeline","plainTitle":"CP 516 - Livestock Pipeline","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 516 - Livestock Pipeline.md","cssclasses":[]},{"slug":"cp-528-prescribed-grazing","basename":"CP 528 - Prescribed Grazing","title":"CP 528 - Prescribed Grazing","plainTitle":"CP 528 - Prescribed Grazing","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 528 - Prescribed Grazing.md","cssclasses":[]},{"slug":"cp-533-pumping-plant","basename":"CP 533 - Pumping Plant","title":"CP 533 - Pumping Plant","plainTitle":"CP 533 - Pumping Plant","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 533 - Pumping Plant.md","cssclasses":[]},{"slug":"cp-550-range-planting","basename":"CP 550 - Range Planting","title":"CP 550 - Range Planting","plainTitle":"CP 550 - Range Planting","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 550 - Range Planting.md","cssclasses":[]},{"slug":"cp-561-heavy-use-area-protection","basename":"CP 561 - Heavy Use Area Protection","title":"CP 561 - Heavy Use Area Protection","plainTitle":"CP 561 - Heavy Use Area Protection","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 561 - Heavy Use Area Protection.md","cssclasses":[]},{"slug":"cp-578-stream-crossing","basename":"CP 578 - Stream Crossing","title":"CP 578 - Stream Crossing","plainTitle":"CP 578 - Stream Crossing","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 578 - Stream Crossing.md","cssclasses":[]},{"slug":"cp-580-streambank-and-shoreline-protection","basename":"CP 580 - Streambank and Shoreline Protection","title":"CP 580 - Streambank and Shoreline Protection","plainTitle":"CP 580 - Streambank and Shoreline Protection","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 580 - Streambank and Shoreline Protection.md","cssclasses":[]},{"slug":"cp-584-channel-bed-stablilization","basename":"CP 584 - Channel Bed Stablilization","title":"CP 584 - Channel Bed Stablilization","plainTitle":"CP 584 - Channel Bed Stablilization","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 584 - Channel Bed Stablilization.md","cssclasses":[]},{"slug":"cp-587-structure-for-water-control","basename":"CP 587 - Structure for Water Control","title":"CP 587 - Structure for Water Control","plainTitle":"CP 587 - Structure for Water Control","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 587 - Structure for Water Control.md","cssclasses":[]},{"slug":"cp-590-nutrient-management","basename":"CP 590 - Nutrient Management","title":"CP 590 - Nutrient Management","plainTitle":"CP 590 - Nutrient Management","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 590 - Nutrient Management.md","cssclasses":[]},{"slug":"cp-595-pest-management-conservation-system","basename":"CP 595 - Pest Management Conservation System","title":"CP 595 - Pest Management Conservation System","plainTitle":"CP 595 - Pest Management Conservation System","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 595 - Pest Management Conservation System.md","cssclasses":[]},{"slug":"cp-612-tree-and-shrub-establishment","basename":"CP 612 - Tree and Shrub Establishment","title":"CP 612 - Tree and Shrub Establishment","plainTitle":"CP 612 - Tree and Shrub Establishment","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 612 - Tree and Shrub Establishment.md","cssclasses":[]},{"slug":"cp-614-watering-facility","basename":"CP 614 - Watering Facility","title":"CP 614 - Watering Facility","plainTitle":"CP 614 - Watering Facility","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 614 - Watering Facility.md","cssclasses":[]},{"slug":"cp-642-water-well","basename":"CP 642 - Water Well","title":"CP 642 - Water Well","plainTitle":"CP 642 - Water Well","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 642 - Water Well.md","cssclasses":[]},{"slug":"cp-643-restoration-of-rare-and-declining-habitats","basename":"CP 643 - Restoration of Rare and Declining Habitats","title":"CP 643 - Restoration of Rare and Declining Habitats","plainTitle":"CP 643 - Restoration of Rare and Declining Habitats","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 643 - Restoration of Rare and Declining Habitats.md","cssclasses":[]},{"slug":"cp-644-wetland-wildlife-habitat-management","basename":"CP 644 - Wetland Wildlife Habitat Management","title":"CP 644 - Wetland Wildlife Habitat Management","plainTitle":"CP 644 - Wetland Wildlife Habitat Management","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 644 - Wetland Wildlife Habitat Management.md","cssclasses":[]},{"slug":"cp-646-shallow-water-development-and-management","basename":"CP 646 - Shallow Water Development and Management","title":"CP 646 - Shallow Water Development and Management","plainTitle":"CP 646 - Shallow Water Development and Management","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 646 - Shallow Water Development and Management.md","cssclasses":[]},{"slug":"cp-649-structures-for-wildlife","basename":"CP 649 - Structures for Wildlife","title":"CP 649 - Structures for Wildlife","plainTitle":"CP 649 - Structures for Wildlife","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 649 - Structures for Wildlife.md","cssclasses":[]},{"slug":"cp-657-wetland-restoration","basename":"CP 657 - Wetland Restoration","title":"CP 657 - Wetland Restoration","plainTitle":"CP 657 - Wetland Restoration","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 657 - Wetland Restoration.md","cssclasses":[]},{"slug":"cp-658-wetland-creation","basename":"CP 658 - Wetland Creation","title":"CP 658 - Wetland Creation","plainTitle":"CP 658 - Wetland Creation","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 658 - Wetland Creation.md","cssclasses":[]},{"slug":"cp-659-wetland-enhancement","basename":"CP 659 - Wetland Enhancement","title":"CP 659 - Wetland Enhancement","plainTitle":"CP 659 - Wetland Enhancement","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 659 - Wetland Enhancement.md","cssclasses":[]},{"slug":"wildfire-hazard-from-biomass-accumulation","basename":"⚠️ Wildfire Hazard from Biomass Accumulation","title":"⚠️ Wildfire Hazard from Biomass Accumulation","plainTitle":"Wildfire Hazard from Biomass Accumulation","folder":["Explore by Threats + Resource Concerns","⚠️ Wildfire"],"file":"Explore by Threats + Resource Concerns/⚠️ Wildfire/⚠️ Wildfire Hazard from Biomass Accumulation.md","cssclasses":[]},{"slug":"emissions-of-airborne-reactive-nitrogen","basename":"⚡️Emissions of Airborne Reactive Nitrogen","title":"⚡️Emissions of Airborne Reactive Nitrogen","plainTitle":"Emissions of Airborne Reactive Nitrogen","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Airborne Reactive Nitrogen.md","cssclasses":[]},{"slug":"emissions-of-greenhouse-gasses-ghgs","basename":"⚡️Emissions of Greenhouse Gasses (GHGs)","title":"⚡️Emissions of Greenhouse Gasses (GHGs)","plainTitle":"Emissions of Greenhouse Gasses (GHGs)","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Greenhouse Gasses (GHGs).md","cssclasses":[]},{"slug":"emissions-of-ozone-precursors","basename":"⚡️Emissions of Ozone Precursors","title":"⚡️Emissions of Ozone Precursors","plainTitle":"Emissions of Ozone Precursors","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Ozone Precursors.md","cssclasses":[]},{"slug":"emissions-of-particulate-matter-pm-and-pm-precursors","basename":"⚡️Emissions of Particulate Matter (PM) and PM Precursors","title":"⚡️Emissions of Particulate Matter (PM) and PM Precursors","plainTitle":"Emissions of Particulate Matter (PM) and PM Precursors","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Particulate Matter (PM) and PM Precursors.md","cssclasses":[]},{"slug":"energy-efficiency-of-equipment-and-facilities","basename":"⚡️Energy Efficiency of Equipment and Facilities","title":"⚡️Energy Efficiency of Equipment and Facilities","plainTitle":"Energy Efficiency of Equipment and Facilities","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Energy Efficiency of Equipment and Facilities.md","cssclasses":[]},{"slug":"energy-efficiency-of-farming-ranching-practices-and-field-operations","basename":"⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations","title":"⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations","plainTitle":"Energy Efficiency of Farming & Ranching Practices and Field Operations","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations.md","cssclasses":[]},{"slug":"objectionable-odor","basename":"⚡️Objectionable Odor","title":"⚡️Objectionable Odor","plainTitle":"Objectionable Odor","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Objectionable Odor.md","cssclasses":[]},{"slug":"aggregate-instability","basename":"🏞️ Aggregate Instability","title":"🏞️ Aggregate Instability","plainTitle":"Aggregate Instability","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Aggregate Instability.md","cssclasses":[]},{"slug":"bank-erosion-from-streams-shorelines-or-water-conveyance-channels","basename":"🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels","title":"🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels","plainTitle":"Bank Erosion from Streams, Shorelines or Water Conveyance Channels","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels.md","cssclasses":[]},{"slug":"classic-gully-erosion","basename":"🏞️ Classic Gully Erosion","title":"🏞️ Classic Gully Erosion","plainTitle":"Classic Gully Erosion","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Classic Gully Erosion.md","cssclasses":[]},{"slug":"compaction","basename":"🏞️ Compaction","title":"🏞️ Compaction","plainTitle":"Compaction","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Compaction.md","cssclasses":[]},{"slug":"concentration-of-salts-or-other-chemicals","basename":"🏞️ Concentration of Salts or Other Chemicals","title":"🏞️ Concentration of Salts or Other Chemicals","plainTitle":"Concentration of Salts or Other Chemicals","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Concentration of Salts or Other Chemicals.md","cssclasses":[]},{"slug":"ephemeral-gully-erosion","basename":"🏞️ Ephemeral Gully Erosion","title":"🏞️ Ephemeral Gully Erosion","plainTitle":"Ephemeral Gully Erosion","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Ephemeral Gully Erosion.md","cssclasses":[]},{"slug":"organic-matter-depletion","basename":"🏞️ Organic Matter Depletion","title":"🏞️ Organic Matter Depletion","plainTitle":"Organic Matter Depletion","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Organic Matter Depletion.md","cssclasses":[]},{"slug":"ponding-and-flooding","basename":"🏞️ Ponding and Flooding","title":"🏞️ Ponding and Flooding","plainTitle":"Ponding and Flooding","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Ponding and Flooding.md","cssclasses":[]},{"slug":"seeps","basename":"🏞️ Seeps","title":"🏞️ Seeps","plainTitle":"Seeps","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Seeps.md","cssclasses":[]},{"slug":"sheet-and-rill-erosion","basename":"🏞️ Sheet and Rill Erosion","title":"🏞️ Sheet and Rill Erosion","plainTitle":"Sheet and Rill Erosion","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Sheet and Rill Erosion.md","cssclasses":[]},{"slug":"soil-organism-habitat-degradation","basename":"🏞️ Soil Organism Habitat Degradation","title":"🏞️ Soil Organism Habitat Degradation","plainTitle":"Soil Organism Habitat Degradation","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Soil Organism Habitat Degradation.md","cssclasses":[]},{"slug":"subsidence","basename":"🏞️ Subsidence","title":"🏞️ Subsidence","plainTitle":"Subsidence","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Subsidence.md","cssclasses":[]},{"slug":"wind-erosion","basename":"🏞️ Wind Erosion","title":"🏞️ Wind Erosion","plainTitle":"Wind Erosion","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Wind Erosion.md","cssclasses":[]},{"slug":"feed-and-forage-imbalance","basename":"🐄 Feed and Forage Imbalance","title":"🐄 Feed and Forage Imbalance","plainTitle":"Feed and Forage Imbalance","folder":["Explore by Threats + Resource Concerns","🐄 Plants & Livestock Threats"],"file":"Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Feed and Forage Imbalance.md","cssclasses":[]},{"slug":"inadequate-livestock-shelter","basename":"🐄 Inadequate Livestock Shelter","title":"🐄 Inadequate Livestock Shelter","plainTitle":"Inadequate Livestock Shelter","folder":["Explore by Threats + Resource Concerns","🐄 Plants & Livestock Threats"],"file":"Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Inadequate Livestock Shelter.md","cssclasses":[]},{"slug":"inadequate-livestock-water-quantity-quality-and-distribution","basename":"🐄 Inadequate Livestock Water Quantity, Quality and Distribution","title":"🐄 Inadequate Livestock Water Quantity, Quality and Distribution","plainTitle":"Inadequate Livestock Water Quantity, Quality and Distribution","folder":["Explore by Threats + Resource Concerns","🐄 Plants & Livestock Threats"],"file":"Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Inadequate Livestock Water Quantity, Quality and Distribution.md","cssclasses":[]},{"slug":"plant-pest-pressure","basename":"🐄 Plant Pest Pressure","title":"🐄 Plant Pest Pressure","plainTitle":"Plant Pest Pressure","folder":["Explore by Threats + Resource Concerns","🐄 Plants & Livestock Threats"],"file":"Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Plant Pest Pressure.md","cssclasses":[]},{"slug":"plant-productivity-and-health","basename":"🐄 Plant Productivity and Health","title":"🐄 Plant Productivity and Health","plainTitle":"Plant Productivity and Health","folder":["Explore by Threats + Resource Concerns","🐄 Plants & Livestock Threats"],"file":"Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Plant Productivity and Health.md","cssclasses":[]},{"slug":"plant-structure-and-composition","basename":"🐄 Plant Structure and Composition","title":"🐄 Plant Structure and Composition","plainTitle":"Plant Structure and Composition","folder":["Explore by Threats + Resource Concerns","🐄 Plants & Livestock Threats"],"file":"Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Plant Structure and Composition.md","cssclasses":[]},{"slug":"aquatic-habitat-for-fish-and-other-organisms","basename":"🐾 Aquatic Habitat for Fish and Other Organisms","title":"🐾 Aquatic Habitat for Fish and Other Organisms","plainTitle":"Aquatic Habitat for Fish and Other Organisms","folder":["Explore by Threats + Resource Concerns","🐾 Wildlife Threats"],"file":"Explore by Threats + Resource Concerns/🐾 Wildlife Threats/🐾 Aquatic Habitat for Fish and Other Organisms.md","cssclasses":[]},{"slug":"terrestrial-habitat-for-wildlife-and-invertebrates","basename":"🐾 Terrestrial Habitat for Wildlife and Invertebrates","title":"🐾 Terrestrial Habitat for Wildlife and Invertebrates","plainTitle":"Terrestrial Habitat for Wildlife and Invertebrates","folder":["Explore by Threats + Resource Concerns","🐾 Wildlife Threats"],"file":"Explore by Threats + Resource Concerns/🐾 Wildlife Threats/🐾 Terrestrial Habitat for Wildlife and Invertebrates.md","cssclasses":[]},{"slug":"drifted-snow","basename":"💧Drifted Snow","title":"💧Drifted Snow","plainTitle":"Drifted Snow","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Drifted Snow.md","cssclasses":[]},{"slug":"elevated-water-temperature","basename":"💧Elevated Water Temperature","title":"💧Elevated Water Temperature","plainTitle":"Elevated Water Temperature","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Elevated Water Temperature.md","cssclasses":[]},{"slug":"groundwater-depletion","basename":"💧Groundwater Depletion","title":"💧Groundwater Depletion","plainTitle":"Groundwater Depletion","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Groundwater Depletion.md","cssclasses":[]},{"slug":"inefficient-irrigation-water-use","basename":"💧Inefficient Irrigation Water use","title":"💧Inefficient Irrigation Water use","plainTitle":"Inefficient Irrigation Water use","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Inefficient Irrigation Water use.md","cssclasses":[]},{"slug":"naturally-available-moisture-use","basename":"💧Naturally Available Moisture Use","title":"💧Naturally Available Moisture Use","plainTitle":"Naturally Available Moisture Use","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Naturally Available Moisture Use.md","cssclasses":[]},{"slug":"nutrients-transported-to-groundwater","basename":"💧Nutrients Transported to Groundwater","title":"💧Nutrients Transported to Groundwater","plainTitle":"Nutrients Transported to Groundwater","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Nutrients Transported to Groundwater.md","cssclasses":[]},{"slug":"nutrients-transported-to-surface-water","basename":"💧Nutrients Transported to Surface Water","title":"💧Nutrients Transported to Surface Water","plainTitle":"Nutrients Transported to Surface Water","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Nutrients Transported to Surface Water.md","cssclasses":[]},{"slug":"pathogens-and-chemicals-from-manure-bio-solids-or-compost-applications-transported-to-groundwater","basename":"💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater","title":"💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater","plainTitle":"Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater.md","cssclasses":[]},{"slug":"pathogens-and-chemicals-from-manure-bio-solids-or-compost-applications-transported-to-surface-water","basename":"💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water","title":"💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water","plainTitle":"Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water.md","cssclasses":[]},{"slug":"pesticides-transported-to-groundwater","basename":"💧Pesticides Transported to Groundwater","title":"💧Pesticides Transported to Groundwater","plainTitle":"Pesticides Transported to Groundwater","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Pesticides Transported to Groundwater.md","cssclasses":[]},{"slug":"pesticides-transported-to-surface-water","basename":"💧Pesticides Transported to Surface Water","title":"💧Pesticides Transported to Surface Water","plainTitle":"Pesticides Transported to Surface Water","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Pesticides Transported to Surface Water.md","cssclasses":[]},{"slug":"petroleum-heavy-metals-and-other-pollutants-transported-to-groundwater","basename":"💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater","title":"💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater","plainTitle":"Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater.md","cssclasses":[]},{"slug":"petroleum-heavy-metals-and-other-pollutants-transported-to-surface-water","basename":"💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water","title":"💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water","plainTitle":"Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water.md","cssclasses":[]},{"slug":"salts-transported-to-groundwater","basename":"💧Salts Transported to Groundwater","title":"💧Salts Transported to Groundwater","plainTitle":"Salts Transported to Groundwater","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Salts Transported to Groundwater.md","cssclasses":[]},{"slug":"salts-transported-to-surface-water","basename":"💧Salts Transported to Surface Water","title":"💧Salts Transported to Surface Water","plainTitle":"Salts Transported to Surface Water","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Salts Transported to Surface Water.md","cssclasses":[]},{"slug":"seasonal-high-water-table","basename":"💧Seasonal High Water Table","title":"💧Seasonal High Water Table","plainTitle":"Seasonal High Water Table","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Seasonal High Water Table.md","cssclasses":[]},{"slug":"sediment-transported-to-surface-water","basename":"💧Sediment Transported to Surface Water","title":"💧Sediment Transported to Surface Water","plainTitle":"Sediment Transported to Surface Water","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Sediment Transported to Surface Water.md","cssclasses":[]},{"slug":"surface-water-depletion","basename":"💧Surface Water Depletion","title":"💧Surface Water Depletion","plainTitle":"Surface Water Depletion","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Surface Water Depletion.md","cssclasses":[]},{"slug":"directory-of-funding-programs","basename":"Directory of Funding Programs","title":"Directory of Funding Programs","plainTitle":"Directory of Funding Programs","folder":["Funding Assistance"],"file":"Funding Assistance/Directory of Funding Programs.md","cssclasses":[]},{"slug":"crep-focused-priorities","basename":"CREP - Focused Priorities","title":"CREP - Focused Priorities","plainTitle":"CREP - Focused Priorities","folder":["Funding Assistance","FSA Funding Programs"],"file":"Funding Assistance/FSA Funding Programs/CREP - Focused Priorities.md","cssclasses":[]},{"slug":"crp-protecting-sensitive-land","basename":"CRP - Protecting Sensitive Land","title":"CRP - Protecting Sensitive Land","plainTitle":"CRP - Protecting Sensitive Land","folder":["Funding Assistance","FSA Funding Programs"],"file":"Funding Assistance/FSA Funding Programs/CRP - Protecting Sensitive Land.md","cssclasses":[]},{"slug":"ecp-farmland-restoration","basename":"ECP - Farmland Restoration","title":"ECP - Farmland Restoration","plainTitle":"ECP - Farmland Restoration","folder":["Funding Assistance","FSA Funding Programs"],"file":"Funding Assistance/FSA Funding Programs/ECP - Farmland Restoration.md","cssclasses":[]},{"slug":"efrp-forest-restoration","basename":"EFRP - Forest Restoration","title":"EFRP - Forest Restoration","plainTitle":"EFRP - Forest Restoration","folder":["Funding Assistance","FSA Funding Programs"],"file":"Funding Assistance/FSA Funding Programs/EFRP - Forest Restoration.md","cssclasses":[]},{"slug":"fwp-restored-wetlands","basename":"FWP - Restored Wetlands","title":"FWP - Restored Wetlands","plainTitle":"FWP - Restored Wetlands","folder":["Funding Assistance","FSA Funding Programs"],"file":"Funding Assistance/FSA Funding Programs/FWP - Restored Wetlands.md","cssclasses":[]},{"slug":"fsa-vs-nrcs","basename":"FSA vs NRCS","title":"FSA vs NRCS","plainTitle":"FSA vs NRCS","folder":["Funding Assistance"],"file":"Funding Assistance/FSA vs NRCS.md","cssclasses":[]},{"slug":"acep-easements","basename":"ACEP - Easements","title":"ACEP - Easements","plainTitle":"ACEP - Easements","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/ACEP - Easements.md","cssclasses":[]},{"slug":"ama-agricultural-producers","basename":"AMA - Agricultural Producers","title":"AMA - Agricultural Producers","plainTitle":"AMA - Agricultural Producers","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/AMA - Agricultural Producers.md","cssclasses":[]},{"slug":"cig-innovation","basename":"CIG - Innovation","title":"CIG - Innovation","plainTitle":"CIG - Innovation","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/CIG - Innovation.md","cssclasses":[]},{"slug":"csp-next-level-conservation","basename":"CSP- Next Level Conservation","title":"CSP- Next Level Conservation","plainTitle":"CSP- Next Level Conservation","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/CSP- Next Level Conservation.md","cssclasses":[]},{"slug":"eqip-cost-share-and-incentive-payments","basename":"EQIP - Cost Share and Incentive Payments","title":"EQIP - Cost Share and Incentive Payments","plainTitle":"EQIP - Cost Share and Incentive Payments","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/EQIP - Cost Share and Incentive Payments.md","cssclasses":[]},{"slug":"ewp-program-emergency-response","basename":"EWP Program - Emergency Response","title":"EWP Program - Emergency Response","plainTitle":"EWP Program - Emergency Response","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/EWP Program - Emergency Response.md","cssclasses":[]},{"slug":"hfrp-forest-protection","basename":"HFRP - Forest Protection","title":"HFRP - Forest Protection","plainTitle":"HFRP - Forest Protection","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/HFRP - Forest Protection.md","cssclasses":[]},{"slug":"rcpp-working-with-partners","basename":"RCPP - Working with Partners","title":"RCPP - Working with Partners","plainTitle":"RCPP - Working with Partners","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/RCPP - Working with Partners.md","cssclasses":[]},{"slug":"home","basename":"Home","title":"Home","plainTitle":"Home","folder":[],"file":"Home.md","cssclasses":["no-inline","hide-title"]},{"slug":"how-to-use-this-tool","basename":"How To Use This Tool","title":"How To Use This Tool","plainTitle":"How To Use This Tool","folder":[],"file":"How To Use This Tool.md","cssclasses":[]},{"slug":"climate-change-opinion-fact-sheet","basename":"Climate Change Opinion Fact Sheet","title":"Climate Change Opinion Fact Sheet","plainTitle":"Climate Change Opinion Fact Sheet","folder":["Similar Tools","Climate Change"],"file":"Similar Tools/Climate Change/Climate Change Opinion Fact Sheet.md","cssclasses":[]},{"slug":"climate-change","basename":"Climate Change","title":"Climate Change","plainTitle":"Climate Change","folder":["Similar Tools","Climate Change"],"file":"Similar Tools/Climate Change/Climate Change.md","cssclasses":[]},{"slug":"sea-level-rise-viewer","basename":"Sea Level Rise Viewer","title":"Sea Level Rise Viewer","plainTitle":"Sea Level Rise Viewer","folder":["Similar Tools","Climate Change"],"file":"Similar Tools/Climate Change/Sea Level Rise Viewer.md","cssclasses":[]},{"slug":"coastal-conservation-tools","basename":"Coastal Conservation Tools","title":"Coastal Conservation Tools","plainTitle":"Coastal Conservation Tools","folder":["Similar Tools","Coastal Conservation"],"file":"Similar Tools/Coastal Conservation/Coastal Conservation Tools.md","cssclasses":[]},{"slug":"national-aquamapper","basename":"National AquaMapper","title":"National AquaMapper","plainTitle":"National AquaMapper","folder":["Similar Tools","Coastal Conservation"],"file":"Similar Tools/Coastal Conservation/National AquaMapper.md","cssclasses":[]},{"slug":"national-estuary-program-map","basename":"National Estuary Program Map","title":"National Estuary Program Map","plainTitle":"National Estuary Program Map","folder":["Similar Tools","Coastal Conservation"],"file":"Similar Tools/Coastal Conservation/National Estuary Program Map.md","cssclasses":[]},{"slug":"directory-of-similar-tools","basename":"Directory of Similar Tools","title":"Directory of Similar Tools","plainTitle":"Directory of Similar Tools","folder":["Similar Tools"],"file":"Similar Tools/Directory of Similar Tools.md","cssclasses":[]},{"slug":"endangered-species","basename":"Endangered Species","title":"Endangered Species","plainTitle":"Endangered Species","folder":["Similar Tools","Endangered Species"],"file":"Similar Tools/Endangered Species/Endangered Species.md","cssclasses":[]},{"slug":"map-of-life","basename":"Map Of Life","title":"Map Of Life","plainTitle":"Map Of Life","folder":["Similar Tools","Endangered Species"],"file":"Similar Tools/Endangered Species/Map Of Life.md","cssclasses":[]},{"slug":"southeastern-aquatic-biodiversity-conservation-planning-storymap","basename":"Southeastern Aquatic Biodiversity Conservation Planning Storymap","title":"Southeastern Aquatic Biodiversity Conservation Planning Storymap","plainTitle":"Southeastern Aquatic Biodiversity Conservation Planning Storymap","folder":["Similar Tools","Endangered Species"],"file":"Similar Tools/Endangered Species/Southeastern Aquatic Biodiversity Conservation Planning Storymap.md","cssclasses":[]},{"slug":"usfws-southeast-at-risk-species-finder","basename":"USFWS Southeast At Risk Species Finder","title":"USFWS Southeast At Risk Species Finder","plainTitle":"USFWS Southeast At Risk Species Finder","folder":["Similar Tools","Endangered Species"],"file":"Similar Tools/Endangered Species/USFWS Southeast At Risk Species Finder.md","cssclasses":[]},{"slug":"aquatic-barrier-inventory-and-prioritization-tool","basename":"Aquatic Barrier Inventory and Prioritization Tool","title":"Aquatic Barrier Inventory and Prioritization Tool","plainTitle":"Aquatic Barrier Inventory and Prioritization Tool","folder":["Similar Tools","Priority Conservation Areas"],"file":"Similar Tools/Priority Conservation Areas/Aquatic Barrier Inventory and Prioritization Tool.md","cssclasses":[]},{"slug":"priority-conservation-area-tools","basename":"Priority Conservation Area Tools","title":"Priority Conservation Area Tools","plainTitle":"Priority Conservation Area Tools","folder":["Similar Tools","Priority Conservation Areas"],"file":"Similar Tools/Priority Conservation Areas/Priority Conservation Area Tools.md","cssclasses":[]},{"slug":"serpas-repi","basename":"SERPAS REPI","title":"SERPAS REPI","plainTitle":"SERPAS REPI","folder":["Similar Tools","Priority Conservation Areas"],"file":"Similar Tools/Priority Conservation Areas/SERPAS REPI.md","cssclasses":[]},{"slug":"southeast-conservation-blueprint-explorer","basename":"Southeast Conservation Blueprint Explorer","title":"Southeast Conservation Blueprint Explorer","plainTitle":"Southeast Conservation Blueprint Explorer","folder":["Similar Tools","Priority Conservation Areas"],"file":"Similar Tools/Priority Conservation Areas/Southeast Conservation Blueprint Explorer.md","cssclasses":[]},{"slug":"agricultural-conservation-planning-framework-in-action-map-midwest","basename":"Agricultural Conservation Planning Framework in Action Map (Midwest)","title":"Agricultural Conservation Planning Framework in Action Map (Midwest)","plainTitle":"Agricultural Conservation Planning Framework in Action Map (Midwest)","folder":["Similar Tools","Tools for Outside SE"],"file":"Similar Tools/Tools for Outside SE/Agricultural Conservation Planning Framework in Action Map (Midwest).md","cssclasses":[]},{"slug":"aquatic-conservation-tools-outside-se","basename":"Aquatic Conservation Tools Outside SE","title":"Aquatic Conservation Tools Outside SE","plainTitle":"Aquatic Conservation Tools Outside SE","folder":["Similar Tools","Tools for Outside SE"],"file":"Similar Tools/Tools for Outside SE/Aquatic Conservation Tools Outside SE.md","cssclasses":[]},{"slug":"atlas-prioritization-framework-pacific-northwest-columbia-river-basin","basename":"Atlas Prioritization Framework (Pacific Northwest, Columbia River Basin)","title":"Atlas Prioritization Framework (Pacific Northwest, Columbia River Basin)","plainTitle":"Atlas Prioritization Framework (Pacific Northwest, Columbia River Basin)","folder":["Similar Tools","Tools for Outside SE"],"file":"Similar Tools/Tools for Outside SE/Atlas Prioritization Framework (Pacific Northwest, Columbia River Basin).md","cssclasses":[]},{"slug":"north-jersey-agricultural-conservation-planning-tool-njrcd","basename":"North Jersey Agricultural Conservation Planning Tool - NJRCD","title":"North Jersey Agricultural Conservation Planning Tool - NJRCD","plainTitle":"North Jersey Agricultural Conservation Planning Tool - NJRCD","folder":["Similar Tools","Tools for Outside SE"],"file":"Similar Tools/Tools for Outside SE/North Jersey Agricultural Conservation Planning Tool - NJRCD.md","cssclasses":[]},{"slug":"conservation-assessment-ranking-tool-cart","basename":"Conservation Assessment Ranking Tool (CART)","title":"Conservation Assessment Ranking Tool (CART)","plainTitle":"Conservation Assessment Ranking Tool (CART)","folder":["Similar Tools","USDA Info"],"file":"Similar Tools/USDA Info/Conservation Assessment Ranking Tool (CART).md","cssclasses":[]},{"slug":"conservation-concern-tools","basename":"Conservation Concern Tools","title":"Conservation Concern Tools","plainTitle":"Conservation Concern Tools","folder":["Similar Tools","USDA Info"],"file":"Similar Tools/USDA Info/Conservation Concern Tools.md","cssclasses":[]},{"slug":"information-about-usda-programs","basename":"Information about USDA Programs","title":"Information about USDA Programs","plainTitle":"Information about USDA Programs","folder":["Similar Tools","USDA Info"],"file":"Similar Tools/USDA Info/Information about USDA Programs.md","cssclasses":[]},{"slug":"freshwater-explorer","basename":"Freshwater Explorer","title":"Freshwater Explorer","plainTitle":"Freshwater Explorer","folder":["Similar Tools","Water Quality + Barriers"],"file":"Similar Tools/Water Quality + Barriers/Freshwater Explorer.md","cssclasses":[]},{"slug":"hows-my-waterway","basename":"How's My Waterway","title":"How's My Waterway","plainTitle":"How's My Waterway","folder":["Similar Tools","Water Quality + Barriers"],"file":"Similar Tools/Water Quality + Barriers/How's My Waterway.md","cssclasses":[]},{"slug":"national-water-dashboard","basename":"National Water Dashboard","title":"National Water Dashboard","plainTitle":"National Water Dashboard","folder":["Similar Tools","Water Quality + Barriers"],"file":"Similar Tools/Water Quality + Barriers/National Water Dashboard.md","cssclasses":[]},{"slug":"similar-tools-water-quality","basename":"Water Quality","title":"Water Quality","plainTitle":"Water Quality","folder":["Similar Tools","Water Quality + Barriers"],"file":"Similar Tools/Water Quality + Barriers/Water Quality.md","cssclasses":[]}]`),kT={"Screenshot 2024-04-22 at 3.55.00 PM.png":"handbook/images/screenshot-2024-04-22-at-3-55-00-pm.jpg","Screenshot 2024-04-22 at 4.13.27 PM.png":"handbook/images/screenshot-2024-04-22-at-4-13-27-pm.jpg","ConservationCoverNetworkDiagram.png":"handbook/images/conservationcovernetworkdiagram.jpg","Screenshot 2024-04-22 at 4.40.00 PM.png":"handbook/images/screenshot-2024-04-22-at-4-40-00-pm.jpg","Screenshot 2024-04-22 at 4.43.33 PM.png":"handbook/images/screenshot-2024-04-22-at-4-43-33-pm.jpg","Screenshot 2024-04-22 at 4.46.08 PM.png":"handbook/images/screenshot-2024-04-22-at-4-46-08-pm.jpg","Screenshot 2024-04-22 at 4.48.44 PM.png":"handbook/images/screenshot-2024-04-22-at-4-48-44-pm.jpg","Screenshot 2024-04-22 at 4.55.03 PM.png":"handbook/images/screenshot-2024-04-22-at-4-55-03-pm.jpg","Screenshot 2024-04-22 at 4.58.04 PM.png":"handbook/images/screenshot-2024-04-22-at-4-58-04-pm.jpg","Pond network diagram.png":"handbook/images/pond-network-diagram.jpg","Screenshot 2024-04-25 at 9.44.18 AM.png":"handbook/images/screenshot-2024-04-25-at-9-44-18-am.jpg","Screenshot 2024-04-25 at 9.50.26 AM.png":"handbook/images/screenshot-2024-04-25-at-9-50-26-am.jpg","Screenshot 2024-04-25 at 10.03.35 AM.png":"handbook/images/screenshot-2024-04-25-at-10-03-35-am.jpg","Screenshot 2024-04-25 at 10.06.47 AM.png":"handbook/images/screenshot-2024-04-25-at-10-06-47-am.jpg","Screenshot 2024-04-25 at 10.12.55 AM.png":"handbook/images/screenshot-2024-04-25-at-10-12-55-am.jpg","Screenshot 2024-04-25 at 10.18.08 AM.png":"handbook/images/screenshot-2024-04-25-at-10-18-08-am.jpg","Screenshot 2024-04-25 at 10.21.08 AM.png":"handbook/images/screenshot-2024-04-25-at-10-21-08-am.jpg","Screenshot 2024-04-25 at 10.23.05 AM.png":"handbook/images/screenshot-2024-04-25-at-10-23-05-am.jpg","Screenshot 2024-04-25 at 10.26.14 AM.png":"handbook/images/screenshot-2024-04-25-at-10-26-14-am.jpg","Screenshot 2024-04-16 at 12.21.17 PM.png":"handbook/images/screenshot-2024-04-16-at-12-21-17-pm.jpg","Screenshot 2024-04-25 at 10.29.55 AM.png":"handbook/images/screenshot-2024-04-25-at-10-29-55-am.jpg","Screenshot 2024-05-02 at 1.26.04 PM.png":"handbook/images/screenshot-2024-05-02-at-1-26-04-pm.jpg","Screenshot 2024-04-25 at 11.07.50 AM.png":"handbook/images/screenshot-2024-04-25-at-11-07-50-am.jpg","Screenshot 2024-04-25 at 11.11.09 AM.png":"handbook/images/screenshot-2024-04-25-at-11-11-09-am.jpg","Screenshot 2024-04-25 at 11.48.39 AM.png":"handbook/images/screenshot-2024-04-25-at-11-48-39-am.jpg","Screenshot 2024-04-25 at 11.51.01 AM.png":"handbook/images/screenshot-2024-04-25-at-11-51-01-am.jpg","Screenshot 2024-05-02 at 1.25.36 PM.png":"handbook/images/screenshot-2024-05-02-at-1-25-36-pm.jpg","Screenshot 2024-04-25 at 11.53.43 AM.png":"handbook/images/screenshot-2024-04-25-at-11-53-43-am.jpg","Water Well Network Diagram.png":"handbook/images/water-well-network-diagram.jpg","Screenshot 2024-04-25 at 11.58.07 AM.png":"handbook/images/screenshot-2024-04-25-at-11-58-07-am.jpg","Screenshot 2024-04-25 at 12.23.36 PM.png":"handbook/images/screenshot-2024-04-25-at-12-23-36-pm.jpg","Screenshot 2024-04-25 at 12.25.45 PM.png":"handbook/images/screenshot-2024-04-25-at-12-25-45-pm.jpg","Screenshot 2024-04-25 at 12.27.49 PM.png":"handbook/images/screenshot-2024-04-25-at-12-27-49-pm.jpg","Screenshot 2024-04-25 at 12.30.04 PM.png":"handbook/images/screenshot-2024-04-25-at-12-30-04-pm.jpg","AtAGlance_Thumbnail.png":"handbook/images/ataglance-thumbnail.png","CREP fact sheet_thumbnail.png":"handbook/images/crep-fact-sheet-thumbnail.jpg","CRP Menu Tool_thumbnail.png":"handbook/images/crp-menu-tool-thumbnail.jpg","ECP Factsheet_thumbnail.png":"handbook/images/ecp-factsheet-thumbnail.jpg","EFRP factsheet_thumbnail.png":"handbook/images/efrp-factsheet-thumbnail.jpg","FWP webpage_thumbnail.png":"handbook/images/fwp-webpage-thumbnail.jpg","Thumbnail_ACEP.png":"handbook/images/thumbnail-acep.png","AMA_thumbnail.png":"handbook/images/ama-thumbnail.jpg","NRCS CIG webpage_thumbnail.png":"handbook/images/nrcs-cig-webpage-thumbnail.jpg","CIG website_thumbnail.png":"handbook/images/cig-website-thumbnail.jpg","CSP_thumbnail.png":"handbook/images/csp-thumbnail.jpg","EQIP_Thumbnail_Small.png":"handbook/images/eqip-thumbnail-small.png","EWP Sponsor Resource_thumbnail.png":"handbook/images/ewp-sponsor-resource-thumbnail.jpg","HFRP_thumbnail.png":"handbook/images/hfrp-thumbnail.jpg","RCPP Factsheet.png":"handbook/images/rcpp-factsheet.jpg","Thumbnail_RCPPContractorList.png":"handbook/images/thumbnail-rcppcontractorlist.png","11.15.2024_HandbookObsidianCoverPageImage5.jpg":"handbook/images/11-15-2024-handbookobsidiancoverpageimage5.jpg","reduced erosion benefit.png":"handbook/images/reduced-erosion-benefit.png","sediment to surface water threat.png":"handbook/images/sediment-to-surface-water-threat.jpg","CP 391 page.png":"handbook/images/cp-391-page.jpg","Screenshot 2024-04-17 at 12.55.25 PM.png":"handbook/images/screenshot-2024-04-17-at-12-55-25-pm.png","Climate Opinion Screenshot.png":"handbook/images/climate-opinion-screenshot.jpg","sea level rise viewer screenshot.png":"handbook/images/sea-level-rise-viewer-screenshot.jpg","National AquaMapper screenshot.png":"handbook/images/national-aquamapper-screenshot.jpg","national estuary screenshot.png":"handbook/images/national-estuary-screenshot.jpg","Map of Life Screenshot.png":"handbook/images/map-of-life-screenshot.jpg","Southeast Aquatic Biodiversity Screenshot.png":"handbook/images/southeast-aquatic-biodiversity-screenshot.jpg","SpeciesFinder.png":"handbook/images/speciesfinder.jpg","Aquatic Barrier Screenshot.png":"handbook/images/aquatic-barrier-screenshot.jpg","REPI_Screenshot.png":"handbook/images/repi-screenshot.jpg","Southeast conservation blueprint screenshot.png":"handbook/images/southeast-conservation-blueprint-screenshot.jpg","ACPF.png":"handbook/images/acpf.jpg","atlas prioritization screenshot.png":"handbook/images/atlas-prioritization-screenshot.jpg","North Jersey Ag screenshot.png":"handbook/images/north-jersey-ag-screenshot.jpg","CART screenshot.png":"handbook/images/cart-screenshot.jpg","conservation concerns tool screenshot.png":"handbook/images/conservation-concerns-tool-screenshot.jpg","freshwater xplorer screenshot.png":"handbook/images/freshwater-xplorer-screenshot.jpg","hows my waterway screenshot.png":"handbook/images/hows-my-waterway-screenshot.jpg","national water dashboard screenshot.png":"handbook/images/national-water-dashboard-screenshot.jpg"},uv={pages:NT,images:kT},HT=Object.assign({"../../content/handbook/Common Acronyms and Vocabulary.md":cS,"../../content/handbook/Explore by Benefits/🌾Producer Benefits/🌾Economic.md":uS,"../../content/handbook/Explore by Benefits/🌾Producer Benefits/🌾Livestock Health and Production.md":dS,"../../content/handbook/Explore by Benefits/🌾Producer Benefits/🌾Plant Productivity.md":fS,"../../content/handbook/Explore by Benefits/🌾Producer Benefits/🌾Reduced Erosion.md":hS,"../../content/handbook/Explore by Benefits/🌾Producer Benefits/🌾Soil Health.md":mS,"../../content/handbook/Explore by Benefits/🌾Producer Benefits/🌾Water Quantity and Availability.md":pS,"../../content/handbook/Explore by Benefits/🍃Climate Benefits/🍃 Carbon Sequestration.md":gS,"../../content/handbook/Explore by Benefits/🍃Climate Benefits/🍃 Climate Resilience and Adaptation.md":vS,"../../content/handbook/Explore by Benefits/🍃Climate Benefits/🍃 GHG Emissions.md":bS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Aquatic Habitat.md":yS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Biodiversity.md":CS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Riparian Condition.md":SS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Streambank and Shoreline Condition.md":wS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Terrestrial Habitat.md":PS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Water Quality.md":TS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Wetlands Conservation.md":ES,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Wildlife and Ecosystem Connectivity.md":_S,"../../content/handbook/Explore by Conservation Practices/CP 314 - Brush Management.md":RS,"../../content/handbook/Explore by Conservation Practices/CP 315 - Herbaceous Weed Treatment.md":xS,"../../content/handbook/Explore by Conservation Practices/CP 327 - Conservation Cover.md":AS,"../../content/handbook/Explore by Conservation Practices/CP 328 - Conservation Crop Rotation.md":MS,"../../content/handbook/Explore by Conservation Practices/CP 329 - Residue and Tillage Mgmt (No Till).md":NS,"../../content/handbook/Explore by Conservation Practices/CP 340 - Cover Crop.md":kS,"../../content/handbook/Explore by Conservation Practices/CP 342 - Critical Area Planting.md":HS,"../../content/handbook/Explore by Conservation Practices/CP 345 - Residue and Tillage Mgmt (Reduced Till).md":zS,"../../content/handbook/Explore by Conservation Practices/CP 356 - Dike and Levee.md":OS,"../../content/handbook/Explore by Conservation Practices/CP 378 - Pond.md":DS,"../../content/handbook/Explore by Conservation Practices/CP 382 - Fence.md":WS,"../../content/handbook/Explore by Conservation Practices/CP 390 - Riparian Herbaceous Cover.md":qS,"../../content/handbook/Explore by Conservation Practices/CP 391 - Riparian Forest buffer.md":BS,"../../content/handbook/Explore by Conservation Practices/CP 395 - Stream Habitat Improvement and Management.md":jS,"../../content/handbook/Explore by Conservation Practices/CP 396 - Aquatic Organism Passage.md":GS,"../../content/handbook/Explore by Conservation Practices/CP 410 - Grade Stabilization Structure.md":IS,"../../content/handbook/Explore by Conservation Practices/CP 420 - Wildlife Habitat Planting.md":LS,"../../content/handbook/Explore by Conservation Practices/CP 472 - Access Control.md":US,"../../content/handbook/Explore by Conservation Practices/CP 512 - Pasture and Hay Planting.md":FS,"../../content/handbook/Explore by Conservation Practices/CP 516 - Livestock Pipeline.md":QS,"../../content/handbook/Explore by Conservation Practices/CP 528 - Prescribed Grazing.md":YS,"../../content/handbook/Explore by Conservation Practices/CP 533 - Pumping Plant.md":VS,"../../content/handbook/Explore by Conservation Practices/CP 550 - Range Planting.md":XS,"../../content/handbook/Explore by Conservation Practices/CP 561 - Heavy Use Area Protection.md":ZS,"../../content/handbook/Explore by Conservation Practices/CP 578 - Stream Crossing.md":KS,"../../content/handbook/Explore by Conservation Practices/CP 580 - Streambank and Shoreline Protection.md":JS,"../../content/handbook/Explore by Conservation Practices/CP 584 - Channel Bed Stablilization.md":$S,"../../content/handbook/Explore by Conservation Practices/CP 587 - Structure for Water Control.md":ew,"../../content/handbook/Explore by Conservation Practices/CP 590 - Nutrient Management.md":nw,"../../content/handbook/Explore by Conservation Practices/CP 595 - Pest Management Conservation System.md":tw,"../../content/handbook/Explore by Conservation Practices/CP 612 - Tree and Shrub Establishment.md":aw,"../../content/handbook/Explore by Conservation Practices/CP 614 - Watering Facility.md":iw,"../../content/handbook/Explore by Conservation Practices/CP 642 - Water Well.md":rw,"../../content/handbook/Explore by Conservation Practices/CP 643 - Restoration of Rare and Declining Habitats.md":ow,"../../content/handbook/Explore by Conservation Practices/CP 644 - Wetland Wildlife Habitat Management.md":sw,"../../content/handbook/Explore by Conservation Practices/CP 646 - Shallow Water Development and Management.md":lw,"../../content/handbook/Explore by Conservation Practices/CP 649 - Structures for Wildlife.md":cw,"../../content/handbook/Explore by Conservation Practices/CP 657 - Wetland Restoration.md":uw,"../../content/handbook/Explore by Conservation Practices/CP 658 - Wetland Creation.md":dw,"../../content/handbook/Explore by Conservation Practices/CP 659 - Wetland Enhancement.md":fw,"../../content/handbook/Explore by Threats + Resource Concerns/⚠️ Wildfire/⚠️ Wildfire Hazard from Biomass Accumulation.md":hw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Airborne Reactive Nitrogen.md":mw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Greenhouse Gasses (GHGs).md":pw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Ozone Precursors.md":gw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Particulate Matter (PM) and PM Precursors.md":vw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Energy Efficiency of Equipment and Facilities.md":bw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations.md":yw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Objectionable Odor.md":Cw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Aggregate Instability.md":Sw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels.md":ww,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Classic Gully Erosion.md":Pw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Compaction.md":Tw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Concentration of Salts or Other Chemicals.md":Ew,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Ephemeral Gully Erosion.md":_w,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Organic Matter Depletion.md":Rw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Ponding and Flooding.md":xw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Seeps.md":Aw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Sheet and Rill Erosion.md":Mw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Soil Organism Habitat Degradation.md":Nw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Subsidence.md":kw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Wind Erosion.md":Hw,"../../content/handbook/Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Feed and Forage Imbalance.md":zw,"../../content/handbook/Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Inadequate Livestock Shelter.md":Ow,"../../content/handbook/Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Inadequate Livestock Water Quantity, Quality and Distribution.md":Dw,"../../content/handbook/Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Plant Pest Pressure.md":Ww,"../../content/handbook/Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Plant Productivity and Health.md":qw,"../../content/handbook/Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Plant Structure and Composition.md":Bw,"../../content/handbook/Explore by Threats + Resource Concerns/🐾 Wildlife Threats/🐾 Aquatic Habitat for Fish and Other Organisms.md":jw,"../../content/handbook/Explore by Threats + Resource Concerns/🐾 Wildlife Threats/🐾 Terrestrial Habitat for Wildlife and Invertebrates.md":Gw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Drifted Snow.md":Iw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Elevated Water Temperature.md":Lw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Groundwater Depletion.md":Uw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Inefficient Irrigation Water use.md":Fw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Naturally Available Moisture Use.md":Qw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Nutrients Transported to Groundwater.md":Yw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Nutrients Transported to Surface Water.md":Vw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater.md":Xw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water.md":Zw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Pesticides Transported to Groundwater.md":Kw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Pesticides Transported to Surface Water.md":Jw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater.md":$w,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water.md":eP,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Salts Transported to Groundwater.md":nP,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Salts Transported to Surface Water.md":tP,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Seasonal High Water Table.md":aP,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Sediment Transported to Surface Water.md":iP,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Surface Water Depletion.md":rP,"../../content/handbook/Funding Assistance/Directory of Funding Programs.md":oP,"../../content/handbook/Funding Assistance/FSA Funding Programs/CREP - Focused Priorities.md":sP,"../../content/handbook/Funding Assistance/FSA Funding Programs/CRP - Protecting Sensitive Land.md":lP,"../../content/handbook/Funding Assistance/FSA Funding Programs/ECP - Farmland Restoration.md":cP,"../../content/handbook/Funding Assistance/FSA Funding Programs/EFRP - Forest Restoration.md":uP,"../../content/handbook/Funding Assistance/FSA Funding Programs/FWP - Restored Wetlands.md":dP,"../../content/handbook/Funding Assistance/FSA vs NRCS.md":fP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/ACEP - Easements.md":hP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/AMA - Agricultural Producers.md":mP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/CIG - Innovation.md":pP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/CSP- Next Level Conservation.md":gP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/EQIP - Cost Share and Incentive Payments.md":vP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/EWP Program - Emergency Response.md":bP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/HFRP - Forest Protection.md":yP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/RCPP - Working with Partners.md":CP,"../../content/handbook/Home.md":SP,"../../content/handbook/How To Use This Tool.md":wP,"../../content/handbook/Similar Tools/Climate Change/Climate Change Opinion Fact Sheet.md":PP,"../../content/handbook/Similar Tools/Climate Change/Climate Change.md":TP,"../../content/handbook/Similar Tools/Climate Change/Sea Level Rise Viewer.md":EP,"../../content/handbook/Similar Tools/Coastal Conservation/Coastal Conservation Tools.md":_P,"../../content/handbook/Similar Tools/Coastal Conservation/National AquaMapper.md":RP,"../../content/handbook/Similar Tools/Coastal Conservation/National Estuary Program Map.md":xP,"../../content/handbook/Similar Tools/Directory of Similar Tools.md":AP,"../../content/handbook/Similar Tools/Endangered Species/Endangered Species.md":MP,"../../content/handbook/Similar Tools/Endangered Species/Map Of Life.md":NP,"../../content/handbook/Similar Tools/Endangered Species/Southeastern Aquatic Biodiversity Conservation Planning Storymap.md":kP,"../../content/handbook/Similar Tools/Endangered Species/USFWS Southeast At Risk Species Finder.md":HP,"../../content/handbook/Similar Tools/Priority Conservation Areas/Aquatic Barrier Inventory and Prioritization Tool.md":zP,"../../content/handbook/Similar Tools/Priority Conservation Areas/Priority Conservation Area Tools.md":OP,"../../content/handbook/Similar Tools/Priority Conservation Areas/SERPAS REPI.md":DP,"../../content/handbook/Similar Tools/Priority Conservation Areas/Southeast Conservation Blueprint Explorer.md":WP,"../../content/handbook/Similar Tools/Tools for Outside SE/Agricultural Conservation Planning Framework in Action Map (Midwest).md":qP,"../../content/handbook/Similar Tools/Tools for Outside SE/Aquatic Conservation Tools Outside SE.md":BP,"../../content/handbook/Similar Tools/Tools for Outside SE/Atlas Prioritization Framework (Pacific Northwest, Columbia River Basin).md":jP,"../../content/handbook/Similar Tools/Tools for Outside SE/North Jersey Agricultural Conservation Planning Tool - NJRCD.md":GP,"../../content/handbook/Similar Tools/USDA Info/Conservation Assessment Ranking Tool (CART).md":IP,"../../content/handbook/Similar Tools/USDA Info/Conservation Concern Tools.md":LP,"../../content/handbook/Similar Tools/USDA Info/Information about USDA Programs.md":UP,"../../content/handbook/Similar Tools/Water Quality + Barriers/Freshwater Explorer.md":FP,"../../content/handbook/Similar Tools/Water Quality + Barriers/How's My Waterway.md":QP,"../../content/handbook/Similar Tools/Water Quality + Barriers/National Water Dashboard.md":YP,"../../content/handbook/Similar Tools/Water Quality + Barriers/Water Quality.md":VP}),dv={};for(const[i,s]of Object.entries(HT))dv[i.replace(/^\.\.\/\.\.\/content\/handbook\//,"")]=s;const Jr=uv.pages.map(i=>({...i,raw:dv[i.file]??""})),Xa=Object.fromEntries(Jr.map(i=>[i.slug,i])),xg=Object.fromEntries(Jr.map(i=>[i.basename.toLowerCase(),i])),zT=Object.fromEntries(Object.entries(uv.images).map(([i,s])=>[i.toLowerCase(),s])),OT=["Home","How To Use This Tool","Explore by Benefits","Explore by Threats + Resource Concerns","Explore by Conservation Practices","Funding Assistance","Similar Tools","Common Acronyms and Vocabulary"];function qu(i){if(!i)return null;const s=i.trim().toLowerCase();return xg[s]||xg[s.replace(/\.md$/,"")]||null}const Ta=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function fv(i){return i.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/,"")}function DT(i,s){return i=fv(i),i=i.replace(/^[ \t]*#{0,6}[ \t]*!\[\[([^\]|#]+)\]\][ \t]*$/gm,(c,l)=>{const u=qu(l);return u?s>=2?`<div class="transclude"><div class="tt"><a href="${ze("/handbook/"+u.slug)}">${Ta(u.title)}</a></div></div>`:`
<div class="transclude"><div class="tt"><a href="${ze("/handbook/"+u.slug)}">${Ta(u.title)}</a></div><div class="md">${hv(u.raw,s+1)}</div></div>
`:c}),i=i.replace(/!\[\[([^\]]+?)\]\]/g,(c,l)=>{const[u,...f]=l.split("|"),h=u.trim(),p=h.split("/").pop(),v=zT[p.toLowerCase()];if(v){const E=parseInt(f.join("|"),10);return`<img src="${Dn}${v}" alt="${Ta(p)}"${Number.isFinite(E)?` width="${E}"`:""}>`}const b=qu(h);return b?`<a class="wikilink" href="${ze("/handbook/"+b.slug)}">${Ta(b.title)}</a>`:`<span class="wikilink missing" title="Attachment not found">${Ta(h)}</span>`}),i=i.replace(/\[\[([^\]]+?)\]\]/g,(c,l)=>{const[u,f]=l.split("|"),h=u.split("#")[0].trim(),p=(f??u).trim(),v=qu(h);return v?`<a class="wikilink" href="${ze("/handbook/"+v.slug)}">${Ta(p)}</a>`:`<span class="wikilink missing" title="No page named “${Ta(h)}”">${Ta(p)}</span>`}),i=i.replace(/(^|[\s(])#([A-Za-z][\w-]*)/gm,'$1<span class="tag">#$2</span>'),i}function hv(i,s=0){return Ie.parse(DT(i,s),{gfm:!0,breaks:!0,async:!1})}function WT(i){return hv(i.raw,0)}function mv(i){if(!i)return"";const s=fv(i.raw);let c=/Practice Definition[^\n]*\n+#{1,6}\s*([^\n]+)/i.exec(s);return c?c[1].replace(/\*\*/g,"").trim():(c=/#{1,6}\s*\**Definition:?\**\s*\n+([^\n]+)/i.exec(s),c?c[1].replace(/\*\*/g,"").trim():"")}function qT(){const i={name:"",pages:[],folders:new Map};for(const f of Jr){let h=i;for(const p of f.folder)h.folders.has(p)||h.folders.set(p,{name:p,pages:[],folders:new Map}),h=h.folders.get(p);h.pages.push(f)}const s=(f,h)=>f.plainTitle.localeCompare(h.plainTitle,"en",{numeric:!0}),c=f=>({name:f.name,pages:f.pages.sort(s),folders:[...f.folders.values()].map(c).sort((h,p)=>h.name.localeCompare(p.name,"en"))}),l=c(i),u=f=>{const h=OT.indexOf(f);return h<0?99:h};return l.pages.sort((f,h)=>u(f.basename)-u(h.basename)),l.folders.sort((f,h)=>u(f.name)-u(h.name)),l}function BT(i){const s=i.trim().toLowerCase();return s?Jr.filter(c=>c.plainTitle.toLowerCase().includes(s)).slice(0,40):[]}const pv=i=>i?.folder?.[0]||"",ed=i=>pv(i)==="Explore by Conservation Practices",jT=i=>pv(i)==="Explore by Threats + Resource Concerns",gv=i=>ed(i)&&/^CP (\d+)/.exec(i.basename)?.[1]||null,vv={396:"circle-aquatic-organism-passage.png",327:"circle-conservation-cover.png",382:"circle-fence.png",329:"circle-low-till.png",345:"circle-low-till.png",391:"circle-riparian-buffer.png",580:"circle-streambank-protection.png",657:"circle-wetland-restoration.png"},GT={"acep-easements":"circle-wetland-reserve-easement.png"};function IT(i){const s=gv(i),c=s&&vv[s]||GT[i?.slug];return c?`${Dn}art/${c}`:null}function LT(i){const s=vv[i];return s?`${Dn}art/${s}`:null}const UT=[{n:1,path:"/planner",label:"About you"},{n:2,path:"/planner/concerns",label:"Resource concerns"},{n:3,path:"/planner/results",label:"Conservation practices"}];function nd({current:i,query:s,reachable:c}){return g.jsx("ol",{className:"stepper","aria-label":"Planner steps",children:UT.map(l=>{const u=l.n===i?"current":l.n<i?"done":"todo",f=l.n!==i&&c(l.n),h=g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"dot",children:u==="done"?"✓":l.n}),g.jsxs("span",{className:"lbl",children:[g.jsxs("span",{className:"k",children:["Step ",l.n]}),l.label]})]});return g.jsx("li",{className:u,"aria-current":u==="current"?"step":void 0,children:f?g.jsx("a",{href:ze(l.path,s),children:h}):g.jsx("span",{className:"static",children:h})},l.n)})})}const Bu=["state","county","organization"],ju={state:"State is required.",county:"County is required.",organization:"Organization is required."};function Ag({route:i,step:s}){const[c,l]=pe.useState(null),u=pe.useMemo(()=>{const S=Yg(i.query);return S.concerns.length||Object.values(S.form).some(Boolean)?S:Xg()||S},[i.query]),[f,h]=pe.useState(u.concerns),[p,v]=pe.useState(u.form),[b,E]=pe.useState({}),[y,_]=pe.useState(null),q=pe.useRef(null);pe.useEffect(()=>{cd().then(l)},[]),pe.useEffect(()=>{dd({concerns:f,form:p})},[f,p]),pe.useEffect(()=>{h(u.concerns),v(u.form)},[u]);const B=ud(p);if(pe.useEffect(()=>{s===2&&!B&&ks("/planner",Yt(p,f))},[s]),pe.useEffect(()=>{q.current?.focus({preventScroll:!0})},[s]),pe.useEffect(()=>{if(!y)return;const S=G=>{G.target.closest(".info-wrap")||_(null)},H=G=>{G.key==="Escape"&&_(null)};return document.addEventListener("click",S),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",S),document.removeEventListener("keydown",H)}},[y]),!c)return g.jsxs("div",{className:"loading",children:[g.jsx("span",{className:"spinner"}),"Loading planner data…"]});const ie=Yt(p,f),se=S=>S===1||S===2&&B||S===3&&B&&f.length>0,be=S=>E(H=>({...H,[S]:!p[S]})),V=S=>H=>{const G=H.target.value;v(z=>({...z,[S]:G})),Bu.includes(S)&&E(z=>({...z,[S]:!G}))},ce=S=>b[S]?"is-invalid":!b[S]&&p[S]&&Bu.includes(S)?"is-valid":"",re=()=>{if(!B){E(Object.fromEntries(Bu.map(S=>[S,!p[S]]))),document.querySelector(".field .is-invalid")?.focus();return}ks("/planner/concerns",ie)},Se=()=>{v(Object.fromEntries(Zs.map(S=>[S,""]))),h([]),E({}),_(null),ks("/planner")},ue=S=>h(H=>H.includes(S)?H.filter(G=>G!==S):[...H,S]),L=S=>{const H=c.concernsByCategory[S],G=H.every(z=>f.includes(z));h(z=>G?z.filter(te=>!H.includes(te)):[...z,...H.filter(te=>!z.includes(te))])},T=B?ze("/planner/results",ie):"#";return g.jsxs(g.Fragment,{children:[g.jsxs("section",{className:"section",style:{paddingTop:6},children:[g.jsxs("div",{className:"hero sand",style:{minHeight:170},children:[g.jsx("div",{className:"deco",style:{right:-40,top:-40,width:240,height:120,background:"var(--lmoss)",borderRadius:"0 0 240px 240px"}}),g.jsx("img",{className:"deco art",src:`${Dn}art/bog-turtle.jpg`,alt:"Bog Turtle",style:{right:"-3%",top:"-8%",width:"min(36%,380px)",transform:"rotate(8deg)"}}),g.jsxs("div",{className:"copy",style:{gap:10},children:[g.jsx("div",{className:"eyebrow",children:"AquaCorridors Planner"}),g.jsx("h1",{ref:q,tabIndex:-1,style:{fontSize:"clamp(26px,4vw,42px)",outline:"none"},children:s===1?"Tell us about your conservation interests":"Which resource concerns apply to your land?"})]})]}),g.jsx(nd,{current:s,query:ie,reachable:se})]}),s===1&&g.jsx("form",{className:"section",style:{paddingTop:20},onSubmit:S=>{S.preventDefault(),re()},noValidate:!0,children:g.jsxs("div",{className:"panel lmoss",style:{maxWidth:760},children:[g.jsx("div",{className:"ptitle",children:"About you"}),g.jsxs("div",{className:"form-grid",children:[g.jsxs("label",{className:"field",children:[g.jsx("span",{className:"label",children:"Name"}),g.jsx("input",{value:p.name,onChange:V("name"),autoComplete:"name",id:"name"})]}),g.jsxs("label",{className:"field",children:[g.jsxs("span",{className:"label",children:["State ",g.jsx("span",{className:"req","aria-hidden":"true",children:"*"})]}),g.jsxs("select",{id:"state",value:p.state,onChange:V("state"),onBlur:()=>be("state"),className:ce("state"),required:!0,"aria-required":"true","aria-invalid":!!b.state,children:[g.jsx("option",{value:"",disabled:!0,children:"Select your state"}),iS.map(([S,H])=>g.jsx("option",{value:S,children:H},S))]}),b.state&&g.jsx("span",{className:"invalid-feedback",role:"alert",children:ju.state})]}),g.jsxs("label",{className:"field",children:[g.jsxs("span",{className:"label",children:["County ",g.jsx("span",{className:"req","aria-hidden":"true",children:"*"})]}),g.jsx("input",{id:"county",value:p.county,onChange:V("county"),onBlur:()=>be("county"),className:ce("county"),required:!0,"aria-required":"true","aria-invalid":!!b.county}),b.county&&g.jsx("span",{className:"invalid-feedback",role:"alert",children:ju.county})]}),g.jsxs("label",{className:"field",children:[g.jsxs("span",{className:"label",children:["Organization ",g.jsx("span",{className:"req","aria-hidden":"true",children:"*"})]}),g.jsx("input",{id:"organization",value:p.organization,onChange:V("organization"),onBlur:()=>be("organization"),className:ce("organization"),required:!0,"aria-required":"true","aria-invalid":!!b.organization,autoComplete:"organization"}),b.organization&&g.jsx("span",{className:"invalid-feedback",role:"alert",children:ju.organization})]}),g.jsxs("label",{className:"field",children:[g.jsx("span",{className:"label",children:"Role"}),g.jsxs("select",{id:"role",value:p.role,onChange:V("role"),"aria-label":"role",children:[g.jsx("option",{value:"",disabled:!0,children:"Select your role"}),g.jsx("option",{value:"landowner",children:"Landowner"}),g.jsx("option",{value:"biologist",children:"Biologist"}),g.jsx("option",{value:"other",children:"Other"})]})]})]}),g.jsxs("div",{className:"between",style:{marginTop:6},children:[g.jsxs("span",{className:"small muted",children:[g.jsx("span",{className:"req",children:"*"})," required",B?"":" · Please fill in all required fields to continue."]}),g.jsxs("div",{className:"cluster",children:[(f.length>0||Object.values(p).some(Boolean))&&g.jsx("button",{className:"pill sm",type:"button",onClick:Se,children:"Reset"}),g.jsx("button",{className:"pill river",type:"submit","aria-disabled":!B,children:"Next: resource concerns →"})]})]})]})}),s===2&&g.jsxs("form",{className:"section",style:{paddingTop:20},onSubmit:S=>S.preventDefault(),noValidate:!0,children:[g.jsxs("div",{className:"between",style:{marginBottom:12},children:[g.jsxs("div",{children:[g.jsx("div",{className:"ptitle",style:{color:"var(--deep)",fontSize:20,fontWeight:600,letterSpacing:"-.02em"},children:"Your resource concerns"}),g.jsxs("div",{className:"small muted",children:[f.length," selected · tick a category heading to select all of it · tap ",g.jsx("span",{className:"chip mono",style:{padding:"0 7px"},children:"i"})," for a definition and the Handbook page"]})]}),g.jsxs("div",{className:"cluster",children:[g.jsx("button",{className:"pill sm",type:"button",onClick:()=>h([]),disabled:!f.length,children:"Clear selection"}),g.jsx("a",{className:`pill river ${B?"":"disabled"}`,"aria-disabled":!B,href:T,children:"Explore conservation practices →"})]})]}),g.jsx("div",{className:"masonry",children:Object.entries(c.concernsByCategory).map(([S,H])=>{const G=H.filter(z=>f.includes(z)).length;return g.jsxs("div",{className:"cat",children:[g.jsxs("label",{className:"head",children:[g.jsx(FT,{id:S+"-checkbox",checked:G===H.length,indeterminate:G>0&&G<H.length,onChange:()=>L(S)}),g.jsx("b",{children:S}),g.jsxs("span",{className:"n chip mono",style:{padding:"2px 8px"},children:[G,"/",H.length]})]}),H.map(z=>{const te=At.concerns[z],we=f.includes(z),Ce=y===z,I=`pop-${te||z.replace(/\W+/g,"-")}`;return g.jsxs("div",{className:`check-row ${we?"on":""}`,children:[g.jsxs("label",{className:"check",children:[g.jsx("input",{type:"checkbox",checked:we,onChange:()=>ue(z),value:z}),g.jsx("span",{className:"txt",children:z})]}),g.jsxs("div",{className:`info-wrap ${Ce?"open":""}`,onMouseLeave:()=>{Ce&&_(null)},children:[g.jsx("button",{type:"button",className:"info","aria-expanded":Ce,"aria-controls":I,"aria-label":`About ${z}`,onClick:()=>_(Ce?null:z),onKeyDown:U=>{U.key==="Escape"&&(_(null),U.currentTarget.blur())},children:"i"}),g.jsxs("div",{className:"pop",id:I,role:"tooltip",children:[g.jsx("div",{children:c.concernDescriptions[z]||mv(Xa[te])||"No definition available."}),g.jsxs("div",{className:"between",children:[g.jsx("span",{className:"src",children:c.concernDescriptions[z]?"NRCS resource concern definition":"From the Handbook"}),te&&g.jsx("a",{className:"pill xs sand",href:ze("/handbook/"+te),children:"Read in the Handbook →"})]})]})]})]},z)})]},S)})}),g.jsxs("div",{className:"between",style:{marginTop:10},children:[g.jsx("a",{className:"pill sand",href:ze("/planner",ie),children:"← Back: about you"}),g.jsxs("div",{className:"stack",style:{gap:6,alignItems:"flex-end"},children:[g.jsx("a",{className:`pill river ${B?"":"disabled"}`,"aria-disabled":!B,href:T,children:"Explore conservation practices →"}),!B&&g.jsx("span",{className:"small muted",children:"Please fill in all required fields to continue."}),B&&!f.length&&g.jsx("span",{className:"small muted",children:"No concerns selected yet — the results will be empty."})]})]})]})]})}function FT({indeterminate:i,...s}){const c=pe.useRef(null);return pe.useEffect(()=>{c.current&&(c.current.indeterminate=!!i)},[i]),g.jsx("input",{ref:c,type:"checkbox",...s})}var td="http://www.w3.org/1999/xhtml";const Mg={svg:"http://www.w3.org/2000/svg",xhtml:td,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function bv(i){var s=i+="",c=s.indexOf(":");return c>=0&&(s=i.slice(0,c))!=="xmlns"&&(i=i.slice(c+1)),Mg.hasOwnProperty(s)?{space:Mg[s],local:i}:i}function QT(i){return function(){var s=this.ownerDocument,c=this.namespaceURI;return c===td&&s.documentElement.namespaceURI===td?s.createElement(i):s.createElementNS(c,i)}}function YT(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function yv(i){var s=bv(i);return(s.local?YT:QT)(s)}function VT(){}function Cv(i){return i==null?VT:function(){return this.querySelector(i)}}function XT(i){typeof i!="function"&&(i=Cv(i));for(var s=this._groups,c=s.length,l=new Array(c),u=0;u<c;++u)for(var f=s[u],h=f.length,p=l[u]=new Array(h),v,b,E=0;E<h;++E)(v=f[E])&&(b=i.call(v,v.__data__,E,f))&&("__data__"in v&&(b.__data__=v.__data__),p[E]=b);return new st(l,this._parents)}function ZT(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function KT(){return[]}function JT(i){return i==null?KT:function(){return this.querySelectorAll(i)}}function $T(i){return function(){return ZT(i.apply(this,arguments))}}function e1(i){typeof i=="function"?i=$T(i):i=JT(i);for(var s=this._groups,c=s.length,l=[],u=[],f=0;f<c;++f)for(var h=s[f],p=h.length,v,b=0;b<p;++b)(v=h[b])&&(l.push(i.call(v,v.__data__,b,h)),u.push(v));return new st(l,u)}function n1(i){return function(){return this.matches(i)}}function Sv(i){return function(s){return s.matches(i)}}var t1=Array.prototype.find;function a1(i){return function(){return t1.call(this.children,i)}}function i1(){return this.firstElementChild}function r1(i){return this.select(i==null?i1:a1(typeof i=="function"?i:Sv(i)))}var o1=Array.prototype.filter;function s1(){return Array.from(this.children)}function l1(i){return function(){return o1.call(this.children,i)}}function c1(i){return this.selectAll(i==null?s1:l1(typeof i=="function"?i:Sv(i)))}function u1(i){typeof i!="function"&&(i=n1(i));for(var s=this._groups,c=s.length,l=new Array(c),u=0;u<c;++u)for(var f=s[u],h=f.length,p=l[u]=[],v,b=0;b<h;++b)(v=f[b])&&i.call(v,v.__data__,b,f)&&p.push(v);return new st(l,this._parents)}function wv(i){return new Array(i.length)}function d1(){return new st(this._enter||this._groups.map(wv),this._parents)}function Xs(i,s){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=s}Xs.prototype={constructor:Xs,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,s){return this._parent.insertBefore(i,s)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function f1(i){return function(){return i}}function h1(i,s,c,l,u,f){for(var h=0,p,v=s.length,b=f.length;h<b;++h)(p=s[h])?(p.__data__=f[h],l[h]=p):c[h]=new Xs(i,f[h]);for(;h<v;++h)(p=s[h])&&(u[h]=p)}function m1(i,s,c,l,u,f,h){var p,v,b=new Map,E=s.length,y=f.length,_=new Array(E),q;for(p=0;p<E;++p)(v=s[p])&&(_[p]=q=h.call(v,v.__data__,p,s)+"",b.has(q)?u[p]=v:b.set(q,v));for(p=0;p<y;++p)q=h.call(i,f[p],p,f)+"",(v=b.get(q))?(l[p]=v,v.__data__=f[p],b.delete(q)):c[p]=new Xs(i,f[p]);for(p=0;p<E;++p)(v=s[p])&&b.get(_[p])===v&&(u[p]=v)}function p1(i){return i.__data__}function g1(i,s){if(!arguments.length)return Array.from(this,p1);var c=s?m1:h1,l=this._parents,u=this._groups;typeof i!="function"&&(i=f1(i));for(var f=u.length,h=new Array(f),p=new Array(f),v=new Array(f),b=0;b<f;++b){var E=l[b],y=u[b],_=y.length,q=v1(i.call(E,E&&E.__data__,b,l)),B=q.length,ie=p[b]=new Array(B),se=h[b]=new Array(B),be=v[b]=new Array(_);c(E,y,ie,se,be,q,s);for(var V=0,ce=0,re,Se;V<B;++V)if(re=ie[V]){for(V>=ce&&(ce=V+1);!(Se=se[ce])&&++ce<B;);re._next=Se||null}}return h=new st(h,l),h._enter=p,h._exit=v,h}function v1(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function b1(){return new st(this._exit||this._groups.map(wv),this._parents)}function y1(i,s,c){var l=this.enter(),u=this,f=this.exit();return typeof i=="function"?(l=i(l),l&&(l=l.selection())):l=l.append(i+""),s!=null&&(u=s(u),u&&(u=u.selection())),c==null?f.remove():c(f),l&&u?l.merge(u).order():u}function C1(i){for(var s=i.selection?i.selection():i,c=this._groups,l=s._groups,u=c.length,f=l.length,h=Math.min(u,f),p=new Array(u),v=0;v<h;++v)for(var b=c[v],E=l[v],y=b.length,_=p[v]=new Array(y),q,B=0;B<y;++B)(q=b[B]||E[B])&&(_[B]=q);for(;v<u;++v)p[v]=c[v];return new st(p,this._parents)}function S1(){for(var i=this._groups,s=-1,c=i.length;++s<c;)for(var l=i[s],u=l.length-1,f=l[u],h;--u>=0;)(h=l[u])&&(f&&h.compareDocumentPosition(f)^4&&f.parentNode.insertBefore(h,f),f=h);return this}function w1(i){i||(i=P1);function s(y,_){return y&&_?i(y.__data__,_.__data__):!y-!_}for(var c=this._groups,l=c.length,u=new Array(l),f=0;f<l;++f){for(var h=c[f],p=h.length,v=u[f]=new Array(p),b,E=0;E<p;++E)(b=h[E])&&(v[E]=b);v.sort(s)}return new st(u,this._parents).order()}function P1(i,s){return i<s?-1:i>s?1:i>=s?0:NaN}function T1(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function E1(){return Array.from(this)}function _1(){for(var i=this._groups,s=0,c=i.length;s<c;++s)for(var l=i[s],u=0,f=l.length;u<f;++u){var h=l[u];if(h)return h}return null}function R1(){let i=0;for(const s of this)++i;return i}function x1(){return!this.node()}function A1(i){for(var s=this._groups,c=0,l=s.length;c<l;++c)for(var u=s[c],f=0,h=u.length,p;f<h;++f)(p=u[f])&&i.call(p,p.__data__,f,u);return this}function M1(i){return function(){this.removeAttribute(i)}}function N1(i){return function(){this.removeAttributeNS(i.space,i.local)}}function k1(i,s){return function(){this.setAttribute(i,s)}}function H1(i,s){return function(){this.setAttributeNS(i.space,i.local,s)}}function z1(i,s){return function(){var c=s.apply(this,arguments);c==null?this.removeAttribute(i):this.setAttribute(i,c)}}function O1(i,s){return function(){var c=s.apply(this,arguments);c==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,c)}}function D1(i,s){var c=bv(i);if(arguments.length<2){var l=this.node();return c.local?l.getAttributeNS(c.space,c.local):l.getAttribute(c)}return this.each((s==null?c.local?N1:M1:typeof s=="function"?c.local?O1:z1:c.local?H1:k1)(c,s))}function Pv(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function W1(i){return function(){this.style.removeProperty(i)}}function q1(i,s,c){return function(){this.style.setProperty(i,s,c)}}function B1(i,s,c){return function(){var l=s.apply(this,arguments);l==null?this.style.removeProperty(i):this.style.setProperty(i,l,c)}}function j1(i,s,c){return arguments.length>1?this.each((s==null?W1:typeof s=="function"?B1:q1)(i,s,c??"")):G1(this.node(),i)}function G1(i,s){return i.style.getPropertyValue(s)||Pv(i).getComputedStyle(i,null).getPropertyValue(s)}function I1(i){return function(){delete this[i]}}function L1(i,s){return function(){this[i]=s}}function U1(i,s){return function(){var c=s.apply(this,arguments);c==null?delete this[i]:this[i]=c}}function F1(i,s){return arguments.length>1?this.each((s==null?I1:typeof s=="function"?U1:L1)(i,s)):this.node()[i]}function Tv(i){return i.trim().split(/^|\s+/)}function Sd(i){return i.classList||new Ev(i)}function Ev(i){this._node=i,this._names=Tv(i.getAttribute("class")||"")}Ev.prototype={add:function(i){var s=this._names.indexOf(i);s<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var s=this._names.indexOf(i);s>=0&&(this._names.splice(s,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function _v(i,s){for(var c=Sd(i),l=-1,u=s.length;++l<u;)c.add(s[l])}function Rv(i,s){for(var c=Sd(i),l=-1,u=s.length;++l<u;)c.remove(s[l])}function Q1(i){return function(){_v(this,i)}}function Y1(i){return function(){Rv(this,i)}}function V1(i,s){return function(){(s.apply(this,arguments)?_v:Rv)(this,i)}}function X1(i,s){var c=Tv(i+"");if(arguments.length<2){for(var l=Sd(this.node()),u=-1,f=c.length;++u<f;)if(!l.contains(c[u]))return!1;return!0}return this.each((typeof s=="function"?V1:s?Q1:Y1)(c,s))}function Z1(){this.textContent=""}function K1(i){return function(){this.textContent=i}}function J1(i){return function(){var s=i.apply(this,arguments);this.textContent=s??""}}function $1(i){return arguments.length?this.each(i==null?Z1:(typeof i=="function"?J1:K1)(i)):this.node().textContent}function eE(){this.innerHTML=""}function nE(i){return function(){this.innerHTML=i}}function tE(i){return function(){var s=i.apply(this,arguments);this.innerHTML=s??""}}function aE(i){return arguments.length?this.each(i==null?eE:(typeof i=="function"?tE:nE)(i)):this.node().innerHTML}function iE(){this.nextSibling&&this.parentNode.appendChild(this)}function rE(){return this.each(iE)}function oE(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function sE(){return this.each(oE)}function lE(i){var s=typeof i=="function"?i:yv(i);return this.select(function(){return this.appendChild(s.apply(this,arguments))})}function cE(){return null}function uE(i,s){var c=typeof i=="function"?i:yv(i),l=s==null?cE:typeof s=="function"?s:Cv(s);return this.select(function(){return this.insertBefore(c.apply(this,arguments),l.apply(this,arguments)||null)})}function dE(){var i=this.parentNode;i&&i.removeChild(this)}function fE(){return this.each(dE)}function hE(){var i=this.cloneNode(!1),s=this.parentNode;return s?s.insertBefore(i,this.nextSibling):i}function mE(){var i=this.cloneNode(!0),s=this.parentNode;return s?s.insertBefore(i,this.nextSibling):i}function pE(i){return this.select(i?mE:hE)}function gE(i){return arguments.length?this.property("__data__",i):this.node().__data__}function vE(i){return function(s){i.call(this,s,this.__data__)}}function bE(i){return i.trim().split(/^|\s+/).map(function(s){var c="",l=s.indexOf(".");return l>=0&&(c=s.slice(l+1),s=s.slice(0,l)),{type:s,name:c}})}function yE(i){return function(){var s=this.__on;if(s){for(var c=0,l=-1,u=s.length,f;c<u;++c)f=s[c],(!i.type||f.type===i.type)&&f.name===i.name?this.removeEventListener(f.type,f.listener,f.options):s[++l]=f;++l?s.length=l:delete this.__on}}}function CE(i,s,c){return function(){var l=this.__on,u,f=vE(s);if(l){for(var h=0,p=l.length;h<p;++h)if((u=l[h]).type===i.type&&u.name===i.name){this.removeEventListener(u.type,u.listener,u.options),this.addEventListener(u.type,u.listener=f,u.options=c),u.value=s;return}}this.addEventListener(i.type,f,c),u={type:i.type,name:i.name,value:s,listener:f,options:c},l?l.push(u):this.__on=[u]}}function SE(i,s,c){var l=bE(i+""),u,f=l.length,h;if(arguments.length<2){var p=this.node().__on;if(p){for(var v=0,b=p.length,E;v<b;++v)for(u=0,E=p[v];u<f;++u)if((h=l[u]).type===E.type&&h.name===E.name)return E.value}return}for(p=s?CE:yE,u=0;u<f;++u)this.each(p(l[u],s,c));return this}function xv(i,s,c){var l=Pv(i),u=l.CustomEvent;typeof u=="function"?u=new u(s,c):(u=l.document.createEvent("Event"),c?(u.initEvent(s,c.bubbles,c.cancelable),u.detail=c.detail):u.initEvent(s,!1,!1)),i.dispatchEvent(u)}function wE(i,s){return function(){return xv(this,i,s)}}function PE(i,s){return function(){return xv(this,i,s.apply(this,arguments))}}function TE(i,s){return this.each((typeof s=="function"?PE:wE)(i,s))}function*EE(){for(var i=this._groups,s=0,c=i.length;s<c;++s)for(var l=i[s],u=0,f=l.length,h;u<f;++u)(h=l[u])&&(yield h)}var _E=[null];function st(i,s){this._groups=i,this._parents=s}function RE(){return this}st.prototype={constructor:st,select:XT,selectAll:e1,selectChild:r1,selectChildren:c1,filter:u1,data:g1,enter:d1,exit:b1,join:y1,merge:C1,selection:RE,order:S1,sort:w1,call:T1,nodes:E1,node:_1,size:R1,empty:x1,each:A1,attr:D1,style:j1,property:F1,classed:X1,text:$1,html:aE,raise:rE,lower:sE,append:lE,insert:uE,remove:fE,clone:pE,datum:gE,on:SE,dispatch:TE,[Symbol.iterator]:EE};function xE(i){return typeof i=="string"?new st([[document.querySelector(i)]],[document.documentElement]):new st([[i]],_E)}function AE(i){return i}var qs=1,Gu=2,Ng=3,Fr=4,kg=1e-6;function ME(i){return"translate("+i+",0)"}function NE(i){return"translate(0,"+i+")"}function kE(i){return s=>+i(s)}function HE(i,s){return s=Math.max(0,i.bandwidth()-s*2)/2,i.round()&&(s=Math.round(s)),c=>+i(c)+s}function zE(){return!this.__axis}function Av(i,s){var c=[],l=null,u=null,f=6,h=6,p=3,v=typeof window<"u"&&window.devicePixelRatio>1?0:.5,b=i===qs||i===Fr?-1:1,E=i===Fr||i===Gu?"x":"y",y=i===qs||i===Ng?ME:NE;function _(q){var B=l??(s.ticks?s.ticks.apply(s,c):s.domain()),ie=u??(s.tickFormat?s.tickFormat.apply(s,c):AE),se=Math.max(f,0)+p,be=s.range(),V=+be[0]+v,ce=+be[be.length-1]+v,re=(s.bandwidth?HE:kE)(s.copy(),v),Se=q.selection?q.selection():q,ue=Se.selectAll(".domain").data([null]),L=Se.selectAll(".tick").data(B,s).order(),T=L.exit(),S=L.enter().append("g").attr("class","tick"),H=L.select("line"),G=L.select("text");ue=ue.merge(ue.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),L=L.merge(S),H=H.merge(S.append("line").attr("stroke","currentColor").attr(E+"2",b*f)),G=G.merge(S.append("text").attr("fill","currentColor").attr(E,b*se).attr("dy",i===qs?"0em":i===Ng?"0.71em":"0.32em")),q!==Se&&(ue=ue.transition(q),L=L.transition(q),H=H.transition(q),G=G.transition(q),T=T.transition(q).attr("opacity",kg).attr("transform",function(z){return isFinite(z=re(z))?y(z+v):this.getAttribute("transform")}),S.attr("opacity",kg).attr("transform",function(z){var te=this.parentNode.__axis;return y((te&&isFinite(te=te(z))?te:re(z))+v)})),T.remove(),ue.attr("d",i===Fr||i===Gu?h?"M"+b*h+","+V+"H"+v+"V"+ce+"H"+b*h:"M"+v+","+V+"V"+ce:h?"M"+V+","+b*h+"V"+v+"H"+ce+"V"+b*h:"M"+V+","+v+"H"+ce),L.attr("opacity",1).attr("transform",function(z){return y(re(z)+v)}),H.attr(E+"2",b*f),G.attr(E,b*se).text(ie),Se.filter(zE).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===Gu?"start":i===Fr?"end":"middle"),Se.each(function(){this.__axis=re})}return _.scale=function(q){return arguments.length?(s=q,_):s},_.ticks=function(){return c=Array.from(arguments),_},_.tickArguments=function(q){return arguments.length?(c=q==null?[]:Array.from(q),_):c.slice()},_.tickValues=function(q){return arguments.length?(l=q==null?null:Array.from(q),_):l&&l.slice()},_.tickFormat=function(q){return arguments.length?(u=q,_):u},_.tickSize=function(q){return arguments.length?(f=h=+q,_):f},_.tickSizeInner=function(q){return arguments.length?(f=+q,_):f},_.tickSizeOuter=function(q){return arguments.length?(h=+q,_):h},_.tickPadding=function(q){return arguments.length?(p=+q,_):p},_.offset=function(q){return arguments.length?(v=+q,_):v},_}function OE(i){return Av(qs,i)}function DE(i){return Av(Fr,i)}const Qt={select:xE,scaleBand:Bg,axisTop:OE,axisLeft:DE},Ui=110,Hg=400,zg=110,WE=30;function qE({results:i,highlighted:s=[],onPractice:c,onConcern:l}){const u=pe.useRef(null),f=pe.useRef(null),h=pe.useRef(null),[p,v]=pe.useState(null),b=pe.useRef(null),[E,y]=pe.useState(0);return pe.useEffect(()=>{const _=b.current;if(!_)return;const q=new ResizeObserver(([B])=>y(B.contentRect.width));return q.observe(_),()=>q.disconnect()},[]),pe.useEffect(()=>{const{pairs:_,practices:q,concerns:B}=i,ie=E>0&&E<Hg+2*zg,se=ie?Math.max(150,Math.round(E*.48)):Hg,be=ie?12:15,V=ie?36:WE,ce=Qt.select(u.current);ce.selectAll("*").remove();const re=Qt.select(f.current);re.selectAll("*").remove();const Se=Qt.select(h.current);if(Se.selectAll("*").remove(),!_.length)return;let ue=zg*B.length;ue<300&&(ue=350);const L=V*q.length,T=re.append("svg").attr("width",ue).attr("height",L+Ui).append("g"),S=Qt.scaleBand().range([0,ue]).domain(B).padding(.05),H=T.append("g").attr("class","x axis").attr("transform",`translate(0,${Ui})`).style("font-size",15).call(Qt.axisTop(S).tickSize(0));H.select(".domain").remove(),H.selectAll(".tick text").attr("class","xlab").call(Og,S.bandwidth()).on("click",(F,K)=>l?.(K)).append("title").text(F=>`${F} — open in the Handbook`);const G=Qt.scaleBand().range([0,L]).domain(q).padding(.05),te=ce.append("svg").attr("width",se).attr("height",L+Ui).append("g").style("font-size",be).attr("transform",`translate(${se},${Ui})`).call(Qt.axisLeft(G).tickSize(0));te.select(".domain").remove();const we=te.selectAll(".tick text").attr("class",F=>`ylab${s.includes(F)?" hl":""}`).text(F=>Ds(F));ie&&we.call(Og,se-12,!0),we.on("click",(F,K)=>c?.(K)).append("title").text(F=>`${Ds(F)} — open in the Handbook`);const Ce=T.selectAll().data(_,F=>F.concern+":"+F.conservation_practice).enter();Ce.append("rect").attr("x",F=>S(F.concern)).attr("y",F=>G(F.conservation_practice)+Ui).attr("rx",4).attr("ry",4).attr("width",S.bandwidth()).attr("height",G.bandwidth()).style("fill",F=>Yu(F.value||0)).style("stroke-width",4).style("stroke","none").style("opacity",.8).on("mousemove",(F,K)=>v({x:F.clientX,y:F.clientY,d:K})).on("mouseleave",()=>v(null)),Ce.insert("text").attr("x",F=>S(F.concern)+S.bandwidth()/2).attr("y",F=>G(F.conservation_practice)+Ui+G.bandwidth()/2).attr("dy",1).attr("text-anchor","middle").style("alignment-baseline","middle").style("pointer-events","none").attr("fill",F=>Vu(F.value)).attr("font-family","sans-serif").text(F=>F.value);const I=40,U=25,Z=20,Q=190,le=Se.append("svg").attr("width",400+Wu.length*(I+5)).attr("height",65).append("g");le.selectAll("legend-boxes").data(Wu).enter().append("rect").attr("x",(F,K)=>Q+K*(I+5)).attr("y",Z).attr("width",I).attr("height",U).style("fill",F=>Yu(F)),le.selectAll("legend-numbers").data(Wu).enter().append("text").attr("x",(F,K)=>Q+K*(I+5)+I/2).attr("y",Z+U/2).attr("dy",1).attr("fill",F=>Vu(F)).text(F=>F).attr("text-anchor","middle").style("alignment-baseline","middle");const fe=(F,K,w,O)=>le.append("text").attr("x",F).attr("y",K).text(w).attr("text-anchor",O).style("alignment-baseline","middle").style("font-size",13);fe(Q-8,Z+U/2-10,"Conservation practice","end"),fe(Q-8,Z+U/2+10,"has detrimental effect","end"),fe(Q+8*(I+5),Z+U/2-10,"Conservation practice","start"),fe(Q+8*(I+5),Z+U/2+10,"has protective effect","start")},[i,s,c,l,E]),g.jsxs("div",{className:"heat",ref:b,children:[g.jsx("div",{className:"legend",children:g.jsx("div",{ref:h})}),g.jsxs("div",{className:"scroller",children:[g.jsx("div",{className:"side",ref:u}),g.jsx("div",{className:"grid",ref:f})]}),p&&g.jsxs("div",{className:"tip",style:{left:Math.min(p.x+14,window.innerWidth-320),top:p.y+14},children:[g.jsx("b",{children:Ds(p.d.conservation_practice)}),g.jsx("br",{}),p.d.concern,g.jsx("br",{}),g.jsxs("span",{className:"mono",children:["effect score ",p.d.value]})]})]})}function Og(i,s,c=!1){i.each(function(){const l=Qt.select(this),u=l.text().split(/\s+/).reverse();let f,h=[],p=0;const v=1.1,b=l.attr("y")??0,E=l.attr("x")||0,y=parseFloat(l.attr("dy"))||0;let _=l.text(null).append("tspan").attr("x",E).attr("y",b).attr("dy",y+"em");for(f=u.pop();f;)h.push(f),_.text(h.join(" ")),_.node().getComputedTextLength()>s&&(h.pop(),_.text(h.join(" ")),h=[f],_=l.append("tspan").attr("x",E).attr("y",b).attr("dy",++p*v+y+"em").text(f)),f=u.pop();const q=l.selectAll("tspan"),B=1.05,ie=q.size();q.each(function(se,be){const V=c?(be-(ie-1)/2)*B+y:be*B-(ie-1)*B;Qt.select(this).attr("y",b).attr("dy",V+"em")})})}function Mv({page:i,onNavigate:s}){const c=pe.useMemo(()=>WT(i),[i]),l=u=>{if(!s)return;const f=u.target.closest("a.wikilink");if(!f)return;const h=/#\/handbook\/([^?]+)/.exec(f.getAttribute("href")||"");h&&(u.preventDefault(),s(decodeURIComponent(h[1])))};return g.jsx("div",{className:"md",onClick:l,dangerouslySetInnerHTML:{__html:c}})}const BE="/handbook";function jE({route:i}){const[s,c]=pe.useState(null),[l,u]=pe.useState(null),[f,h]=Kg(),{concerns:p,form:v}=pe.useMemo(()=>Yg(i.query),[i.query]);pe.useEffect(()=>{cd().then(c)},[]),pe.useEffect(()=>{dd({concerns:p,form:v})},[p,v]);const b=pe.useMemo(()=>s?Qg(s,p):null,[s,p]),E=pe.useMemo(()=>b?tS(b,3):[],[b]),y=pe.useMemo(()=>E.map(V=>V.name),[E]),_=pe.useCallback(V=>{const ce=At.practices[V]?.slug;ce&&u(ce)},[]),q=pe.useCallback(V=>{const ce=At.concerns[V];ce&&u(ce)},[]);if(pe.useEffect(()=>{if(!l)return;const V=ce=>{ce.key==="Escape"&&u(null)};return window.addEventListener("keydown",V),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",V),document.body.style.overflow=""}},[l]),!p.length)return g.jsxs("section",{className:"section",children:[g.jsx(nd,{current:3,query:Yt(v,p),reachable:()=>!0}),g.jsxs("div",{className:"panel sand",children:[g.jsx("div",{className:"ptitle",children:"No concerns selected"}),g.jsx("p",{className:"small",children:"Pick at least one resource concern to see conservation practices."}),g.jsx("div",{children:g.jsx("a",{className:"pill river",href:ze("/planner/concerns",Yt(v,p)),children:"← Choose resource concerns"})})]})]});if(!s)return g.jsxs("div",{className:"loading",children:[g.jsx("span",{className:"spinner"}),"Loading planner data…"]});const B=p.filter(V=>!At.concerns[V]),ie=ze("/planner/concerns",Yt(v,p)),se=async()=>h(await Jg(Hs("/planner/results",Yt(v,p)))?"Link copied":"Could not copy — use the address bar"),be=V=>{const ce=At.practices[V],re=ce&&Xa[ce.slug],Se=ce?.definition||mv(re);return{cp:ce?.cp,slug:ce?.slug,page:re,definition:Se,fromHandbook:!ce?.definition&&!!Se}};return g.jsxs(g.Fragment,{children:[g.jsxs("section",{className:"section",style:{paddingTop:6},children:[g.jsx(nd,{current:3,query:Yt(v,p),reachable:()=>!0}),g.jsxs("div",{className:"between",children:[g.jsxs("div",{className:"cluster",children:[g.jsx("a",{className:"pill sand",href:ie,children:"← Back: resource concerns"}),g.jsx("button",{className:"pill",type:"button",onClick:se,children:"Copy link"}),g.jsxs("button",{className:"pill",type:"button",onClick:()=>Sg(b.pairs),children:[g.jsx("span",{className:"ico",children:"⤓"})," Download (CSV)"]})]}),g.jsx("a",{className:"pill river",style:{whiteSpace:"normal",textAlign:"center"},href:ze(BE),children:"Learn about these practices and concerns in the AquaCorridors Handbook →"})]}),g.jsxs("div",{className:"result-head",children:[g.jsxs("div",{className:"stack",style:{gap:10,flex:"1 1 460px"},children:[g.jsxs("div",{className:"eyebrow",children:["AquaCorridors Planner · step 3 of 3",v.name?` · for ${v.name}`:"",v.state&&v.state!=="NONE"?` · ${v.county?v.county+" County, ":""}${v.state}`:""]}),g.jsx("h1",{style:{fontSize:"clamp(28px,4vw,44px)"},children:"NRCS Conservation Practices that Address Your Resource Concerns"}),g.jsx("div",{className:"cluster","aria-label":"Selected concerns",children:p.map(V=>At.concerns[V]?g.jsxs("a",{className:"chip",href:ze("/handbook/"+At.concerns[V]),onClick:ce=>{ce.preventDefault(),u(At.concerns[V])},title:"Open in the Handbook",children:[V," ↗"]},V):g.jsx("span",{className:"chip paper",children:V},V))}),B.length>0&&g.jsxs("div",{className:"notice",children:["Some concerns in this link are not in the current planner data and were ignored: ",B.join("; "),"."]})]}),g.jsxs("div",{className:"kv panel sand",style:{padding:"16px 20px",borderRadius:20,minWidth:220},children:[g.jsx("span",{className:"k",children:"Concerns"}),g.jsx("b",{children:b.concerns.length}),g.jsx("span",{className:"k",children:"Practices with an effect"}),g.jsx("b",{children:b.practices.length}),g.jsx("span",{className:"k",children:"Scored by"}),g.jsx("span",{className:"small",children:"USDA NRCS CPPE"})]})]})]}),E.length>0&&g.jsxs("section",{className:"section",style:{paddingTop:34},children:[g.jsxs("div",{className:"section-head",children:[g.jsx("span",{className:"arch"}),g.jsx("span",{className:"title",children:"Start here · highest combined effect"})]}),g.jsxs("p",{className:"small muted",style:{maxWidth:"78ch",marginTop:10},children:["The same ranking as the graph below: practices are ordered by the sum of their CPPE effect scores across the ",b.concerns.length," concern",b.concerns.length>1?"s":""," you selected. These are the top ",E.length,". The full list follows."]}),g.jsx("div",{className:"start-grid",children:E.map((V,ce)=>{const re=be(V.name),Se=re.cp&&LT(re.cp);return g.jsxs("div",{className:`start ${ce===0?"top":""}`,children:[Se&&g.jsx("img",{className:"circle",src:Se,alt:""}),g.jsxs("div",{className:"rank",children:["#",ce+1," · combined score ",V.score,re.cp?` · CP ${re.cp}`:""]}),g.jsx("div",{className:"t",children:Ds(V.name)}),re.definition&&g.jsx("div",{className:"d",children:re.definition}),g.jsx("div",{className:"scores",children:b.concerns.map(ue=>{const L=b.byPractice[V.name]?.[ue]??0;return g.jsxs("div",{className:"sc",children:[g.jsx("span",{className:"v",style:{background:Yu(L),color:Vu(L)},children:L}),g.jsx("span",{className:"c",children:ue})]},ue)})}),g.jsxs("div",{className:"foot",children:[re.slug&&g.jsx("button",{className:"pill sm river",type:"button",onClick:()=>u(re.slug),children:"Read in the Handbook"}),re.slug&&g.jsx("a",{className:"pill sm",href:ze("/handbook/"+re.slug),children:"Open page ↗"})]})]},V.name)})})]}),g.jsxs("section",{className:"section",style:{paddingTop:34},children:[g.jsxs("div",{className:"section-head",children:[g.jsx("span",{className:"arch",style:{background:"var(--moss)"}}),g.jsx("span",{className:"title",children:"All practices with an effect on your concerns"})]}),g.jsxs("div",{className:"howto",children:[g.jsx("b",{children:"How to Interpret This Graph:"})," This graph visualizes overlap and patterns in the effectiveness of certain conservation practices. The vertical left-hand column lists out conservation practices used by NRCS EQIP program and the top horizontal row lists resource concerns you selected on the previous page. The numbers in the graph indicate the severity of the impact as shown in the effect score key above the graph. This data comes from USDA's Conservation Practice Physical Effects (CPPE) scores.",g.jsxs("div",{className:"small muted",style:{marginTop:8},children:["Click a practice or concern name to read its Handbook page. Rows are ordered by combined score; the top ",E.length," are shown in bold."]})]}),g.jsx(qE,{results:b,highlighted:y,onPractice:_,onConcern:q}),g.jsxs("div",{className:"between",children:[g.jsxs("button",{className:"pill sand",type:"button",onClick:()=>Sg(b.pairs),children:[g.jsx("span",{className:"ico",children:"⤓"})," Download (CSV)"]}),g.jsx("a",{className:"pill",href:ie,children:"← Back: resource concerns"})]})]}),l&&Xa[l]&&g.jsx("div",{className:"drawer-bg",onClick:()=>u(null),children:g.jsxs("aside",{className:"drawer",role:"dialog","aria-label":"Handbook page",onClick:V=>V.stopPropagation(),children:[g.jsxs("div",{className:"bar",children:[g.jsxs("div",{children:[g.jsx("div",{className:"eyebrow",style:{opacity:.75},children:"AquaCorridors Handbook"}),g.jsx("div",{className:"t",children:Xa[l].title})]}),g.jsxs("div",{className:"cluster",children:[g.jsx("a",{className:"pill xs sand",href:ze("/handbook/"+l),children:"Open full page ↗"}),g.jsx("button",{className:"pill xs ghost light",type:"button",onClick:()=>u(null),children:"Close ✕"})]})]}),g.jsx("div",{className:"body",children:g.jsx(Mv,{page:Xa[l],onNavigate:u})})]})}),g.jsx(Zg,{msg:f})]})}const GE=Object.fromEntries(Object.entries(At.concerns).map(([i,s])=>[s,i])),IE=Object.fromEntries(Object.entries(At.practices).map(([i,s])=>[s.slug,i]));function LE({route:i,slug:s}){const c=Xa[s||"home"]||null,l=i.embed,u=pe.useMemo(()=>qT(),[]),f=l==="page";return c?g.jsx("section",{className:"section",style:{paddingTop:l?0:16},children:g.jsxs("div",{className:"hb",style:f?{gridTemplateColumns:"1fr"}:void 0,children:[!f&&g.jsx(UE,{tree:u,current:c.slug}),g.jsx(FE,{page:c,embed:l})]})}):g.jsx("section",{className:"section",children:g.jsxs("div",{className:"panel sand",children:[g.jsx("div",{className:"ptitle",children:"Page not found"}),g.jsxs("p",{className:"small",children:["There is no Handbook page at ",g.jsx("code",{children:s}),"."]}),g.jsx("div",{children:g.jsx("a",{className:"pill river",href:ze("/handbook"),children:"Handbook home"})})]})})}function UE({tree:i,current:s}){const[c,l]=pe.useState(""),u=BT(c),f=Xa[s]?.folder||[],h=jC("(max-width: 900px)"),p=g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"search",children:g.jsx("input",{type:"search",placeholder:"Search page titles…",value:c,onChange:v=>l(v.target.value),"aria-label":"Search the Handbook"})}),c.trim()?g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"grp-label",children:[u.length," result",u.length===1?"":"s"]}),u.map(v=>g.jsxs("a",{className:v.slug===s?"active":"",href:ze("/handbook/"+v.slug),onClick:()=>l(""),children:[v.title,g.jsx("span",{className:"cnt",children:v.folder[0]?v.folder[v.folder.length-1]:""})]},v.slug)),!u.length&&g.jsx("div",{className:"small muted",style:{padding:"4px 10px"},children:"No page titles match."})]}):g.jsxs(g.Fragment,{children:[i.pages.map(v=>g.jsx("a",{className:v.slug===s?"active":"",href:ze("/handbook/"+v.slug),children:v.title},v.slug)),i.folders.map(v=>g.jsx(kv,{node:v,current:s,ancestors:f,depth:0},v.name))]})]});return h?g.jsxs("details",{className:"nav navbox",children:[g.jsxs("summary",{children:[g.jsx("span",{children:"Handbook contents"}),g.jsxs("span",{className:"cnt",children:[Jr.length," pages"]})]}),g.jsx("nav",{"aria-label":"Handbook contents",style:{marginTop:8},children:p})]},s):g.jsx("nav",{className:"nav","aria-label":"Handbook contents",children:p})}function Nv(i){return i.pages.length+i.folders.reduce((s,c)=>s+Nv(c),0)}function kv({node:i,current:s,ancestors:c,depth:l}){const u=c[l]===i.name;return g.jsxs("details",{open:u,children:[g.jsxs("summary",{children:[i.name,g.jsx("span",{className:"cnt",children:Nv(i)})]}),g.jsxs("div",{className:"in",children:[i.pages.map(f=>g.jsx("a",{className:f.slug===s?"active":"",href:ze("/handbook/"+f.slug),children:f.title},f.slug)),i.folders.map(f=>g.jsx(kv,{node:f,current:s,ancestors:c,depth:l+1},f.name))]})]})}function FE({page:i,embed:s}){const[c,l]=pe.useState(!1),[u,f]=Kg(),h=i.cssclasses?.includes("hide-title"),p=IT(i),v=jT(i)?GE[i.slug]:null,b=ed(i)?IE[i.slug]:null,E=gv(i),y=Xu(),_=!!v&&y.concerns.includes(v),q=()=>{const re=_?y.concerns:[...y.concerns,v];dd({form:y.form,concerns:re}),ks(y.complete?"/planner/results":ud(y.form)?"/planner/concerns":"/planner",Yt(y.form,re))},B=QE(b,y),ie=Hs("/handbook/"+i.slug),se=Hs("/handbook/"+i.slug,{embed:"page"}),be=Hs("/handbook/"+i.slug,{embed:"1"}),V=re=>`<iframe id="aquacorridors" src="${re}" title="AquaCorridors Handbook — ${i.plainTitle}" width="100%" height="800" style="border:0;border-radius:16px" loading="lazy"></iframe>
<script>addEventListener('message',e=>{if(e.data&&e.data.type==='aquacorridors:height')document.getElementById('aquacorridors').style.height=e.data.height+'px'})<\/script>`,ce=async(re,Se)=>f(await Jg(re)?`${Se} copied`:"Could not copy");return g.jsxs("article",{className:"page",style:{position:"relative"},children:[g.jsxs("div",{className:"crumbs",children:[g.jsx("a",{href:ze("/handbook"),children:"Handbook"}),i.folder.map((re,Se)=>g.jsxs("span",{children:["/ ",re]},Se))]}),(!h||p)&&g.jsxs("div",{className:"between",style:{alignItems:"flex-start",marginBottom:18,flexWrap:"nowrap"},children:[h?g.jsx("span",{}):g.jsx("h1",{className:"title",style:{marginBottom:0},children:i.title}),p&&g.jsx("img",{src:p,alt:"",style:{flex:"none",width:120,height:120,borderRadius:999}})]}),!s&&g.jsxs("div",{className:"toolrow",children:[ed(i)&&g.jsx("a",{className:"pill sm sand",href:ze("/planner"),children:"Find practices for your concerns in the Planner →"}),g.jsx("span",{className:"spacer"}),g.jsx("button",{className:"pill sm",type:"button",onClick:()=>ce(ie,"Link"),children:"Copy link"}),g.jsx("button",{className:"pill sm",type:"button","aria-expanded":c,onClick:()=>l(re=>!re),children:"Embed"})]}),c&&!s&&g.jsxs("div",{className:"embed-box",children:[g.jsxs("div",{className:"between",children:[g.jsx("b",{className:"small",children:"Embed this page in another site"}),g.jsx("button",{className:"pill xs",type:"button",onClick:()=>l(!1),children:"Close"})]}),g.jsx("div",{className:"small muted",children:"The script line lets the frame grow to fit the page; drop it for a fixed 800px frame. Page only (no sidebar):"}),g.jsx("textarea",{readOnly:!0,rows:4,value:V(se),onFocus:re=>re.target.select()}),g.jsx("div",{className:"small muted",children:"Whole Handbook with navigation:"}),g.jsx("textarea",{readOnly:!0,rows:4,value:V(be),onFocus:re=>re.target.select()}),g.jsxs("div",{className:"cluster",children:[g.jsx("button",{className:"pill xs river",type:"button",onClick:()=>ce(V(se),"Snippet"),children:"Copy page-only snippet"}),g.jsx("button",{className:"pill xs",type:"button",onClick:()=>ce(V(be),"Snippet"),children:"Copy with-navigation snippet"}),g.jsx("a",{className:"pill xs",href:se,target:"_blank",rel:"noopener",children:"Preview ↗"})]})]}),v&&g.jsx("div",{className:"planner-link",children:_?g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"msg",children:[g.jsx("b",{children:"This concern is in your Planner selection"})," (",y.concerns.length," concern",y.concerns.length===1?"":"s"," chosen)."]}),g.jsx("a",{className:"pill river",href:ze(y.complete?"/planner/results":"/planner",y.query),children:y.complete?"View my Planner results →":"Back to the Planner →"})]}):g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"msg",children:[g.jsx("b",{children:"This is one of the resource concerns in the AquaCorridors Planner."})," ",y.complete?`Add it to your ${y.concerns.length} selected concern${y.concerns.length===1?"":"s"} and see the updated results.`:"Add it to your selection to see every practice that addresses it alongside your other concerns, scored with CPPE data."]}),g.jsx("button",{className:"pill river",type:"button",onClick:q,children:y.complete?"Add to my Planner results →":`Add “${v}” to my Planner →`})]})}),b&&g.jsxs("div",{className:"planner-link",children:[y.complete?g.jsxs("div",{className:"msg",children:[g.jsx("b",{children:"In your Planner results"}),B===null?" (loading…)":B?`, CP ${E} ranks #${B.position} of ${B.total} practices for your ${y.concerns.length} concern${y.concerns.length===1?"":"s"} (combined score ${B.score}).`:`, CP ${E} does not appear: the CPPE data gives it no effect on the ${y.concerns.length} concern${y.concerns.length===1?"":"s"} you selected.`]}):g.jsxs("div",{className:"msg",children:[g.jsxs("b",{children:["CP ",E," appears in the AquaCorridors Planner."]})," Choose the resource concerns on your land and the Planner shows where this practice ranks among the others that address them."]}),g.jsx("a",{className:"pill river",href:ze(y.complete?"/planner/results":"/planner",y.query),children:y.complete?"View my Planner results →":"Open the Planner →"})]}),g.jsx(Mv,{page:i}),g.jsx(Zg,{msg:u})]})}function QE(i,s){const[c,l]=pe.useState(null);return pe.useEffect(()=>{if(!i||!s.complete)return;let u=!0;return cd().then(f=>{if(!u)return;const h=Qg(f,s.concerns),p=h.practices.indexOf(i);l(p<0?!1:{position:p+1,total:h.practices.length,score:h.scores[i]})}),()=>{u=!1}},[i,s.complete,s.concerns.join(":")]),c}function YE(){const i=BC(),s=i.embed;pe.useEffect(()=>{document.body.classList.toggle("embed-mode",!!s),window.scrollTo(0,0)},[i.path,s]),VE();let c;const[l,u]=i.parts;return l==="planner"&&u==="results"?c=g.jsx(jE,{route:i}):l==="planner"&&u==="concerns"?c=g.jsx(Ag,{route:i,step:2}):l==="planner"?c=g.jsx(Ag,{route:i,step:1}):l==="handbook"?c=g.jsx(LE,{route:i,slug:u}):c=g.jsx(lS,{}),g.jsxs(g.Fragment,{children:[!s&&g.jsx(rS,{route:i}),g.jsxs("div",{className:"wrap",children:[c,!s&&g.jsx(sS,{})]})]})}function VE(){pe.useEffect(()=>{if(window.parent===window)return;const i=()=>window.parent.postMessage({type:"aquacorridors:height",height:document.documentElement.scrollHeight,hash:window.location.hash},"*"),s=new ResizeObserver(i);return s.observe(document.body),window.addEventListener("hashchange",i),i(),()=>{s.disconnect(),window.removeEventListener("hashchange",i)}},[])}qC.createRoot(document.getElementById("root")).render(g.jsx(pe.StrictMode,{children:g.jsx(YE,{})}));
