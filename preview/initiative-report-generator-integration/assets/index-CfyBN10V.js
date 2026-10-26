(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function c(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=c(u);fetch(u.href,f)}})();function AC(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Au={exports:{}},Gr={};var Qp;function MC(){if(Qp)return Gr;Qp=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(l,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var g in u)g!=="key"&&(f[g]=u[g])}else f=u;return u=f.ref,{$$typeof:i,type:l,key:h,ref:u!==void 0?u:null,props:f}}return Gr.Fragment=s,Gr.jsx=c,Gr.jsxs=c,Gr}var Yp;function NC(){return Yp||(Yp=1,Au.exports=MC()),Au.exports}var p=NC(),Mu={exports:{}},ye={};var Vp;function kC(){if(Vp)return ye;Vp=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),q=Symbol.iterator;function B(w){return w===null||typeof w!="object"?null:(w=q&&w[q]||w["@@iterator"],typeof w=="function"?w:null)}var ie={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},se=Object.assign,be={};function V(w,O,X){this.props=w,this.context=O,this.refs=be,this.updater=X||ie}V.prototype.isReactComponent={},V.prototype.setState=function(w,O){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,O,"setState")},V.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function ce(){}ce.prototype=V.prototype;function re(w,O,X){this.props=w,this.context=O,this.refs=be,this.updater=X||ie}var Se=re.prototype=new ce;Se.constructor=re,se(Se,V.prototype),Se.isPureReactComponent=!0;var ue=Array.isArray;function L(){}var T={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function H(w,O,X){var ae=X.ref;return{$$typeof:i,type:w,key:O,ref:ae!==void 0?ae:null,props:X}}function G(w,O){return H(w.type,O,w.props)}function z(w){return typeof w=="object"&&w!==null&&w.$$typeof===i}function te(w){var O={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(X){return O[X]})}var we=/\/+/g;function Ce(w,O){return typeof w=="object"&&w!==null&&w.key!=null?te(""+w.key):O.toString(36)}function I(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(L,L):(w.status="pending",w.then(function(O){w.status==="pending"&&(w.status="fulfilled",w.value=O)},function(O){w.status==="pending"&&(w.status="rejected",w.reason=O)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function U(w,O,X,ae,$){var ee=typeof w;(ee==="undefined"||ee==="boolean")&&(w=null);var me=!1;if(w===null)me=!0;else switch(ee){case"bigint":case"string":case"number":me=!0;break;case"object":switch(w.$$typeof){case i:case s:me=!0;break;case E:return me=w._init,U(me(w._payload),O,X,ae,$)}}if(me)return $=$(w),me=ae===""?"."+Ce(w,0):ae,ue($)?(X="",me!=null&&(X=me.replace(we,"$&/")+"/"),U($,O,X,"",function(Fe){return Fe})):$!=null&&(z($)&&($=G($,X+($.key==null||w&&w.key===$.key?"":(""+$.key).replace(we,"$&/")+"/")+me)),O.push($)),1;me=0;var j=ae===""?".":ae+":";if(ue(w))for(var J=0;J<w.length;J++)ae=w[J],ee=j+Ce(ae,J),me+=U(ae,O,X,ee,$);else if(J=B(w),typeof J=="function")for(w=J.call(w),J=0;!(ae=w.next()).done;)ae=ae.value,ee=j+Ce(ae,J++),me+=U(ae,O,X,ee,$);else if(ee==="object"){if(typeof w.then=="function")return U(I(w),O,X,ae,$);throw O=String(w),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return me}function Z(w,O,X){if(w==null)return w;var ae=[],$=0;return U(w,ae,"","",function(ee){return O.call(X,ee,$++)}),ae}function Q(w){if(w._status===-1){var O=w._result,X=O();X.then(function(ae){(w._status===0||w._status===-1)&&(w._status=1,w._result=ae,X.status===void 0&&(X.status="fulfilled",X.value=ae))},function(ae){(w._status===0||w._status===-1)&&(w._status=2,w._result=ae,X.status===void 0&&(X.status="rejected",X.reason=ae))}),w._status===-1&&(w._status=0,w._result=X)}if(w._status===1)return w._result.default;throw w._result}var le=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function fe(w){var O=T.T,X={};X.types=O!==null?O.types:null,T.T=X;try{var ae=w(),$=T.S;$!==null&&$(X,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(L,le)}catch(ee){le(ee)}finally{O!==null&&X.types!==null&&(O.types=X.types),T.T=O}}function F(w){var O=T.T;if(O!==null){var X=O.types;X===null?O.types=[w]:X.indexOf(w)===-1&&X.push(w)}else fe(F.bind(null,w))}var K={map:Z,forEach:function(w,O,X){Z(w,function(){O.apply(this,arguments)},X)},count:function(w){var O=0;return Z(w,function(){O++}),O},toArray:function(w){return Z(w,function(O){return O})||[]},only:function(w){if(!z(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ye.Activity=y,ye.Children=K,ye.Component=V,ye.Fragment=c,ye.Profiler=u,ye.PureComponent=re,ye.StrictMode=l,ye.Suspense=v,ye.ViewTransition=_,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,ye.__COMPILER_RUNTIME={__proto__:null,c:function(w){return T.H.useMemoCache(w)}},ye.addTransitionType=F,ye.cache=function(w){return function(){return w.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(w,O,X){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var ae=se({},w.props),$=w.key;if(O!=null)for(ee in O.key!==void 0&&($=""+O.key),O)!S.call(O,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&O.ref===void 0||(ae[ee]=O[ee]);var ee=arguments.length-2;if(ee===1)ae.children=X;else if(1<ee){for(var me=Array(ee),j=0;j<ee;j++)me[j]=arguments[j+2];ae.children=me}return H(w.type,$,ae)},ye.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:f,_context:w},w},ye.createElement=function(w,O,X){var ae,$={},ee=null;if(O!=null)for(ae in O.key!==void 0&&(ee=""+O.key),O)S.call(O,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&($[ae]=O[ae]);var me=arguments.length-2;if(me===1)$.children=X;else if(1<me){for(var j=Array(me),J=0;J<me;J++)j[J]=arguments[J+2];$.children=j}if(w&&w.defaultProps)for(ae in me=w.defaultProps,me)$[ae]===void 0&&($[ae]=me[ae]);return H(w,ee,$)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(w){return{$$typeof:g,render:w}},ye.isValidElement=z,ye.lazy=function(w){return{$$typeof:E,_payload:{_status:-1,_result:w},_init:Q}},ye.memo=function(w,O){return{$$typeof:b,type:w,compare:O===void 0?null:O}},ye.startTransition=fe,ye.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},ye.use=function(w){return T.H.use(w)},ye.useActionState=function(w,O,X){return T.H.useActionState(w,O,X)},ye.useCallback=function(w,O){return T.H.useCallback(w,O)},ye.useContext=function(w){return T.H.useContext(w)},ye.useDebugValue=function(){},ye.useDeferredValue=function(w,O){return T.H.useDeferredValue(w,O)},ye.useEffect=function(w,O){return T.H.useEffect(w,O)},ye.useEffectEvent=function(w){return T.H.useEffectEvent(w)},ye.useId=function(){return T.H.useId()},ye.useImperativeHandle=function(w,O,X){return T.H.useImperativeHandle(w,O,X)},ye.useInsertionEffect=function(w,O){return T.H.useInsertionEffect(w,O)},ye.useLayoutEffect=function(w,O){return T.H.useLayoutEffect(w,O)},ye.useMemo=function(w,O){return T.H.useMemo(w,O)},ye.useOptimistic=function(w,O){return T.H.useOptimistic(w,O)},ye.useReducer=function(w,O,X){return T.H.useReducer(w,O,X)},ye.useRef=function(w){return T.H.useRef(w)},ye.useState=function(w){return T.H.useState(w)},ye.useSyncExternalStore=function(w,O,X){return T.H.useSyncExternalStore(w,O,X)},ye.useTransition=function(){return T.H.useTransition()},ye.version="19.3.1",ye}var Xp;function id(){return Xp||(Xp=1,Mu.exports=kC()),Mu.exports}var pe=id(),Nu={exports:{}},Ir={},ku={exports:{}},Hu={};var Zp;function HC(){return Zp||(Zp=1,(function(i){function s(I,U){var Z=I.length;I.push(U);e:for(;0<Z;){var Q=Z-1>>>1,le=I[Q];if(0<u(le,U))I[Q]=U,I[Z]=le,Z=Q;else break e}}function c(I){return I.length===0?null:I[0]}function l(I){if(I.length===0)return null;var U=I[0],Z=I.pop();if(Z!==U){I[0]=Z;e:for(var Q=0,le=I.length,fe=le>>>1;Q<fe;){var F=2*(Q+1)-1,K=I[F],w=F+1,O=I[w];if(0>u(K,Z))w<le&&0>u(O,K)?(I[Q]=O,I[w]=Z,Q=w):(I[Q]=K,I[F]=Z,Q=F);else if(w<le&&0>u(O,Z))I[Q]=O,I[w]=Z,Q=w;else break e}}return U}function u(I,U){var Z=I.sortIndex-U.sortIndex;return Z!==0?Z:I.id-U.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var h=Date,g=h.now();i.unstable_now=function(){return h.now()-g}}var v=[],b=[],E=1,y=null,_=3,q=!1,B=!1,ie=!1,se=!1,be=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function re(I){for(var U=c(b);U!==null;){if(U.callback===null)l(b);else if(U.startTime<=I)l(b),U.sortIndex=U.expirationTime,s(v,U);else break;U=c(b)}}function Se(I){if(ie=!1,re(I),!B)if(c(v)!==null)B=!0,ue||(ue=!0,z());else{var U=c(b);U!==null&&Ce(Se,U.startTime-I)}}var ue=!1,L=-1,T=5,S=-1;function H(){return se?!0:!(i.unstable_now()-S<T)}function G(){if(se=!1,ue){var I=i.unstable_now();S=I;var U=!0;try{e:{B=!1,ie&&(ie=!1,V(L),L=-1),q=!0;var Z=_;try{n:{for(re(I),y=c(v);y!==null&&!(y.expirationTime>I&&H());){var Q=y.callback;if(typeof Q=="function"){y.callback=null,_=y.priorityLevel;var le=Q(y.expirationTime<=I);if(I=i.unstable_now(),typeof le=="function"){y.callback=le,re(I),U=!0;break n}y===c(v)&&l(v),re(I)}else l(v);y=c(v)}if(y!==null)U=!0;else{var fe=c(b);fe!==null&&Ce(Se,fe.startTime-I),U=!1}}break e}finally{y=null,_=Z,q=!1}U=void 0}}finally{U?z():ue=!1}}}var z;if(typeof ce=="function")z=function(){ce(G)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,we=te.port2;te.port1.onmessage=G,z=function(){we.postMessage(null)}}else z=function(){be(G,0)};function Ce(I,U){L=be(function(){I(i.unstable_now())},U)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(I){switch(_){case 1:case 2:case 3:var U=3;break;default:U=_}var Z=_;_=U;try{return I()}finally{_=Z}},i.unstable_requestPaint=function(){se=!0},i.unstable_runWithPriority=function(I,U){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=_;_=I;try{return U()}finally{_=Z}},i.unstable_scheduleCallback=function(I,U,Z){var Q=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Q+Z:Q):Z=Q,I){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Z+le,I={id:E++,callback:U,priorityLevel:I,startTime:Z,expirationTime:le,sortIndex:-1},Z>Q?(I.sortIndex=Z,s(b,I),c(v)===null&&I===c(b)&&(ie?(V(L),L=-1):ie=!0,Ce(Se,Z-Q))):(I.sortIndex=le,s(v,I),B||q||(B=!0,ue||(ue=!0,z()))),I},i.unstable_shouldYield=H,i.unstable_wrapCallback=function(I){var U=_;return function(){var Z=_;_=U;try{return I.apply(this,arguments)}finally{_=Z}}}})(Hu)),Hu}var Kp;function zC(){return Kp||(Kp=1,ku.exports=HC()),ku.exports}var zu={exports:{}},Cn={};var Jp;function OC(){if(Jp)return Cn;Jp=1;var i=id();function s(E){var y="https://react.dev/errors/"+E;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)y+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+E+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var l={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function g(E,y,_){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:q==null?null:q===h?h:""+q,children:E,containerInfo:y,implementation:_}}var v=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(E,y){if(E==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Cn.browser=function(E){return{$$typeof:f,_reason:E}},Cn.createPortal=function(E,y){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(s(299));return g(E,y,null,_)},Cn.flushSync=function(E){var y=v.T,_=l.p;try{if(v.T=null,l.p=2,E)return E()}finally{v.T=y,l.p=_,l.d.f()}},Cn.preconnect=function(E,y){typeof E=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,l.d.C(E,y))},Cn.prefetchDNS=function(E){typeof E=="string"&&l.d.D(E)},Cn.preinit=function(E,y){if(typeof E=="string"&&y&&typeof y.as=="string"){var _=y.as,q=b(_,y.crossOrigin),B=typeof y.integrity=="string"?y.integrity:void 0,ie=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;_==="style"?l.d.S(E,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:q,integrity:B,fetchPriority:ie}):_==="script"&&l.d.X(E,{crossOrigin:q,integrity:B,fetchPriority:ie,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Cn.preinitModule=function(E,y){if(typeof E=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var _=b(y.as,y.crossOrigin);l.d.M(E,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0})}}else y==null&&l.d.M(E)},Cn.preload=function(E,y){if(typeof E=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var _=y.as,q=b(_,y.crossOrigin);l.d.L(E,_,{crossOrigin:q,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Cn.preloadModule=function(E,y){if(typeof E=="string")if(y){var _=b(y.as,y.crossOrigin);l.d.m(E,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0})}else l.d.m(E)},Cn.requestFormReset=function(E){l.d.r(E)},Cn.unstable_batchedUpdates=function(E,y){return E(y)},Cn.useFormState=function(E,y,_){return v.H.useFormState(E,y,_)},Cn.useFormStatus=function(){return v.H.useHostTransitionStatus()},Cn.version="19.3.1",Cn}var $p;function DC(){if($p)return zu.exports;$p=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),zu.exports=OC(),zu.exports}var eg;function WC(){if(eg)return Ir;eg=1;var i=zC(),s=id(),c=DC();function l(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,t=n;t&&!t.alternate;)n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(l(188))}function b(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(l(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return v(r),e;if(o===a)return v(r),n;o=o.sibling}throw Error(l(188))}if(t.return!==a.return)t=r,a=o;else{for(var d=!1,m=r.child;m;){if(m===t){d=!0,t=r,a=o;break}if(m===a){d=!0,a=r,t=o;break}m=m.sibling}if(!d){for(m=o.child;m;){if(m===t){d=!0,t=o,a=r;break}if(m===a){d=!0,a=o,t=r;break}m=m.sibling}if(!d)throw Error(l(189))}}if(t.alternate!==a)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:n}function E(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=E(e),n!==null)return n;e=e.sibling}return null}function y(e,n,t,a,r,o){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&t(e,a,r,o)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&y(e.child,n,t,a,r,o))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function q(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function B(e){var n=[null,null],t=_(e);return t===null||ie(n,e,t.child,{foundSelf:!1}),n}function ie(e,n,t,a){for(;t!==null;){if(t===n)a.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(a.foundSelf)return e[1]=t,!0;e[0]=t}else if((t.tag!==22||t.memoizedState===null)&&ie(e,n,t.child,a))return!0;t=t.sibling}return!1}function se(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(l(559))}}var be=null,V=null;function ce(e,n,t){return e===t?!0:e===n?(be=e,!0):!1}function re(e,n,t){return e===t?(V=e,!1):e===n?(V!==null&&(be=e),!0):!1}function Se(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ue(e,n,t){for(var a=0,r=e;r;r=t(r))a++;r=0;for(var o=n;o;o=t(o))r++;for(;0<a-r;)e=t(e),a--;for(;0<r-a;)n=t(n),r--;for(;a--;){if(e===n||n!==null&&e===n.alternate)return e;e=t(e),n=t(n)}return null}var L=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),we=Symbol.for("react.consumer"),Ce=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),F=Symbol.for("react.legacy_hidden"),K=Symbol.for("react.memo_cache_sentinel"),w=Symbol.for("react.view_transition"),O=Symbol.for("react.recoverable"),X=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case te:return"Profiler";case z:return"StrictMode";case U:return"Suspense";case Z:return"SuspenseList";case fe:return"Activity";case w:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case Ce:return e.displayName||"Context";case we:return(e._context.displayName||"Context")+".Consumer";case I:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:ee(e.type)||"Memo";case le:n=e._payload,e=e._init;try{return ee(e(n))}catch{}}return null}var me=Array.isArray,j=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Fe={pending:!1,data:null,method:null,action:null},Qe=[],Me=-1;function ve(e){return{current:e}}function ke(e){0>Me||(e.current=Qe[Me],Qe[Me]=null,Me--)}function de(e,n){Me++,Qe[Me]=e.current,e.current=n}var Ne=ve(null),Xe=ve(null),Pn=ve(null),Tn=ve(null);function pt(e,n){switch(de(Pn,n),de(Xe,e),de(Ne,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?np(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=np(n),e=tp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ke(Ne),de(Ne,e)}function Ze(){ke(Ne),ke(Xe),ke(Pn)}function Mn(e){var n=e.memoizedState;n!==null&&(Gi._currentValue=n.memoizedState,de(Tn,e)),n=Ne.current;var t=tp(n,e.type);n!==t&&(de(Xe,e),de(Ne,t))}function Je(e){Xe.current===e&&(ke(Ne),ke(Xe)),Tn.current===e&&(ke(Tn),Gi._currentValue=Fe)}var cn,Xn;function Zn(e){if(cn===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);cn=n&&n[1]||"",Xn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cn+e+Xn}var $a=!1;function gt(e,n){if(!e||$a)return"";$a=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(Y){var R=Y}Reflect.construct(e,[],W)}else{try{W.call()}catch(Y){R=Y}W=!1;try{var N=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),W=!0,new e}finally{W&&(N!==void 0?Object.defineProperty(e.prototype,"props",N):delete e.prototype.props)}}}else{try{throw Error()}catch(Y){R=Y}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(Y){if(Y&&R&&typeof Y.stack=="string")return[Y.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),d=o[0],m=o[1];if(d&&m){var C=d.split(`
`),A=m.split(`
`);for(r=a=0;a<C.length&&!C[a].includes("DetermineComponentFrameRoot");)a++;for(;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;if(a===C.length||r===A.length)for(a=C.length-1,r=A.length-1;1<=a&&0<=r&&C[a]!==A[r];)r--;for(;1<=a&&0<=r;a--,r--)if(C[a]!==A[r]){if(a!==1||r!==1)do if(a--,r--,0>r||C[a]!==A[r]){var k=`
`+C[a].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=a&&0<=r);break}}}finally{$a=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Zn(t):""}function Kn(e,n){switch(e.tag){case 26:case 27:case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return e.child!==n&&n!==null?Zn("Suspense Fallback"):Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 15:return gt(e.type,!1);case 11:return gt(e.type.render,!1);case 1:return gt(e.type,!0);case 31:return Zn("Activity");case 30:return Zn("ViewTransition");default:return""}}function Zt(e){try{var n="",t=null;do n+=Kn(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ei=Object.prototype.hasOwnProperty,el=i.unstable_scheduleCallback,nl=i.unstable_cancelCallback,zv=i.unstable_shouldYield,Ov=i.unstable_requestPaint,qn=i.unstable_now,Dv=i.unstable_getCurrentPriorityLevel,Pd=i.unstable_ImmediatePriority,Td=i.unstable_UserBlockingPriority,$r=i.unstable_NormalPriority,Wv=i.unstable_LowPriority,Ed=i.unstable_IdlePriority,qv=i.log,Bv=i.unstable_setDisableYieldValue,Vi=null,Bn=null;function Kt(e){if(typeof qv=="function"&&Bv(e),Bn&&typeof Bn.setStrictMode=="function")try{Bn.setStrictMode(Vi,e)}catch{}}var jn=Math.clz32?Math.clz32:Iv,jv=Math.log,Gv=Math.LN2;function Iv(e){return e>>>=0,e===0?32:31-(jv(e)/Gv|0)|0}var eo=256,no=262144,to=4194304;function Ea(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ao(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~o,a!==0?r=Ea(a):(d&=m,d!==0?r=Ea(d):t||(t=m&~e,t!==0&&(r=Ea(t))))):(m=a&~o,m!==0?r=Ea(m):d!==0?r=Ea(d):t||(t=a&~e,t!==0&&(r=Ea(t)))),r===0?0:n!==0&&n!==r&&(n&o)===0&&(o=r&-r,t=n&-n,o>=t||o===32&&(t&4194048)!==0)?n:r}function Xi(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function _d(e,n){(n&8)!==0&&(n|=n&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=n;0<t;){var a=31-jn(t),r=1<<a;n|=e[a],t&=~r}return n}function Lv(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(){var e=to;return to<<=1,(to&62914560)===0&&(to=4194304),e}function tl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Zi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Uv(e,n,t,a,r,o){var d=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var m=e.entanglements,C=e.expirationTimes,A=e.hiddenUpdates;for(t=d&~t;0<t;){var k=31-jn(t),W=1<<k;m[k]=0,C[k]=-1;var R=A[k];if(R!==null)for(A[k]=null,k=0;k<R.length;k++){var N=R[k];N!==null&&(N.lane&=-536870913)}t&=~W}a!==0&&xd(e,a,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(d&~n))}function xd(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-jn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function Ad(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-jn(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}function Md(e,n){var t=n&-n;return t=(t&42)!==0?1:al(t),(t&(e.suspendedLanes|n))!==0?0:t}function al(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function il(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nd(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Bp(e.type))}function kd(e,n){var t=J.p;try{return J.p=e,n()}finally{J.p=t}}var Nt=Math.random().toString(36).slice(2),mn="__reactFiber$"+Nt,Nn="__reactProps$"+Nt,ni="__reactContainer$"+Nt,Hd="__reactEvents$"+Nt,Fv="__reactListeners$"+Nt,Qv="__reactHandles$"+Nt,zd="__reactResources$"+Nt,Ki="__reactMarker$"+Nt,io="__reactLoad$"+Nt;function ro(e){delete e[mn],delete e[Nn],delete e[Fv],delete e[Qv]}function _a(e){var n;if(n=e[mn])return n;for(var t=e.parentNode;t;){if(n=t[ni]||t[mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=yp(e);e!==null;){if(t=e[mn])return t;e=yp(e)}return n}e=t,t=e.parentNode}return null}function ti(e){if(e=e[mn]||e[ni]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ji(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(l(33))}function ai(e){var n=e[zd];return n||(n=e[zd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(e){e[Ki]=!0}function Od(e){e[io]=void 0}var Dd=new Set,Wd={};function Ra(e,n){ii(e,n),ii(e+"Capture",n)}function ii(e,n){for(Wd[e]=n,e=0;e<n.length;e++)Dd.add(n[e])}var Yv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qd={},Bd={};function Vv(e){return ei.call(Bd,e)?!0:ei.call(qd,e)?!1:Yv.test(e)?Bd[e]=!0:(qd[e]=!0,!1)}var Oe=!1;function jd(){var e=Oe;return Oe=!1,e}function oo(e,n,t){if(Vv(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,t)}}function so(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,t)}}function kt(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,a)}}function Gn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xv(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,o=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(d){t=""+d,o.call(this,d)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(d){t=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rl(e){if(!e._valueTracker){var n=Gd(e)?"checked":"value";e._valueTracker=Xv(e,n,""+e[n])}}function Id(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Gd(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}var Zv=/[\n"\\]/g;function Jn(e){return e.replace(Zv,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ol(e,n,t,a,r,o,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Gn(n)):e.value!==""+Gn(n)&&(e.value=""+Gn(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?d==="number"&&e.value==n?sl(e,Gn(e.value)):sl(e,Gn(n)):t!=null?sl(e,Gn(t)):a!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Gn(m):e.removeAttribute("name")}function Ld(e,n,t,a,r,o,d,m){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null)){rl(e);return}t=t!=null?""+Gn(t):"",n=n!=null?""+Gn(n):t,m||n===e.value||(e.value=n),e.defaultValue=n}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),rl(e)}function sl(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function ri(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Gn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Ud(e,n,t){if(n!=null&&(n=""+Gn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Gn(t):""}function Fd(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(l(92));if(me(a)){if(1<a.length)throw Error(l(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=Gn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),rl(e)}function oi(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Kv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qd(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Kv.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Yd(e,n,t){if(n!=null&&typeof n!="object")throw Error(l(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",Oe=!0);for(var r in n)a=n[r],n.hasOwnProperty(r)&&t[r]!==a&&(Qd(e,r,a),Oe=!0)}else for(var o in n)n.hasOwnProperty(o)&&Qd(e,o,n[o])}function ll(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lo(e){return $v.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function vt(){}var cl=null;function ul(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var si=null,li=null;function Vd(e){var n=ti(e);if(n&&(e=n.stateNode)){var t=e[Nn]||null;e:switch(e=n.stateNode,n.type){case"input":if(ol(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Jn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=a[Nn]||null;if(!r)throw Error(l(90));ol(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Id(a)}break e;case"textarea":Ud(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&ri(e,!!t.multiple,n,!1)}}}var dl=!1;function Xd(e,n,t){if(dl)return e(n,t);dl=!0;try{var a=e(n);return a}finally{if(dl=!1,(si!==null||li!==null)&&(cs(),si&&(n=si,e=li,li=si=null,Vd(n),e)))for(n=0;n<e.length;n++)Vd(e[n])}}function $i(e,n){var t=e.stateNode;if(t===null)return null;var a=t[Nn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,n,typeof t));return t}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=!1;if(Ht)try{var er={};Object.defineProperty(er,"passive",{get:function(){fl=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{fl=!1}var Jt=null,hl=null,co=null;function Zd(){if(co)return co;var e,n=hl,t=n.length,a,r="value"in Jt?Jt.value:Jt.textContent,o=r.length;for(e=0;e<t&&n[e]===r[e];e++);var d=t-e;for(a=1;a<=d&&n[t-a]===r[o-a];a++);return co=r.slice(e,1<a?1-a:void 0)}function uo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fo(){return!0}function Kd(){return!1}function En(e){function n(t,a,r,o,d){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(t=e[m],this[m]=t?t(o):o[m]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fo:Kd,this.isPropagationStopped=Kd,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),n}var $t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ho=En($t),nr=L({},$t,{view:0,detail:0}),eb=En(nr),ml,pl,tr,mo=L({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(ml=e.screenX-tr.screenX,pl=e.screenY-tr.screenY):pl=ml=0,tr=e),ml)},movementY:function(e){return"movementY"in e?e.movementY:pl}}),Jd=En(mo),nb=L({},mo,{dataTransfer:0}),tb=En(nb),ab=L({},nr,{relatedTarget:0}),gl=En(ab),ib=L({},$t,{animationName:0,elapsedTime:0,pseudoElement:0}),rb=En(ib),ob=L({},$t,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sb=En(ob),lb=L({},$t,{data:0}),$d=En(lb),cb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},db={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=db[e])?!!n[e]:!1}function vl(){return fb}var hb=L({},nr,{key:function(e){if(e.key){var n=cb[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ub[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vl,charCode:function(e){return e.type==="keypress"?uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mb=En(hb),pb=L({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ef=En(pb),gb=L({},$t,{submitter:0}),vb=En(gb),bb=L({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vl}),yb=En(bb),Cb=L({},$t,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sb=En(Cb),wb=L({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pb=En(wb),Tb=L({},$t,{newState:0,oldState:0,source:0}),Eb=En(Tb),_b=[9,13,27,32],bl=Ht&&"CompositionEvent"in window,ar=null;Ht&&"documentMode"in document&&(ar=document.documentMode);var Rb=Ht&&"TextEvent"in window&&!ar,nf=Ht&&(!bl||ar&&8<ar&&11>=ar),tf=" ",af=!1;function rf(e,n){switch(e){case"keyup":return _b.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function of(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ci=!1;function xb(e,n){switch(e){case"compositionend":return of(n);case"keypress":return n.which!==32?null:(af=!0,tf);case"textInput":return e=n.data,e===tf&&af?null:e;default:return null}}function Ab(e,n){if(ci)return e==="compositionend"||!bl&&rf(e,n)?(e=Zd(),co=hl=Jt=null,ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return nf&&n.locale!=="ko"?null:n.data;default:return null}}var Mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Mb[e.type]:n==="textarea"}function lf(e,n,t,a){si?li?li.push(a):li=[a]:si=a,n=ps(n,"onChange"),0<n.length&&(t=new ho("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var ir=null,rr=null;function Nb(e){Xm(e,0)}function po(e){var n=Ji(e);if(Id(n))return e}function cf(e,n){if(e==="change")return n}var uf=!1;if(Ht){var yl;if(Ht){var Cl="oninput"in document;if(!Cl){var df=document.createElement("div");df.setAttribute("oninput","return;"),Cl=typeof df.oninput=="function"}yl=Cl}else yl=!1;uf=yl&&(!document.documentMode||9<document.documentMode)}function ff(){ir&&(ir.detachEvent("onpropertychange",hf),rr=ir=null)}function hf(e){if(e.propertyName==="value"&&po(rr)){var n=[];lf(n,rr,e,ul(e)),Xd(Nb,n)}}function kb(e,n,t){e==="focusin"?(ff(),ir=n,rr=t,ir.attachEvent("onpropertychange",hf)):e==="focusout"&&ff()}function Hb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return po(rr)}function zb(e,n){if(e==="click")return po(n)}function Ob(e,n){if(e==="input"||e==="change")return po(n)}function Db(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var In=typeof Object.is=="function"?Object.is:Db;function or(e,n){if(In(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!ei.call(n,r)||!In(e[r],n[r]))return!1}return!0}function Sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pf(e,n){var t=mf(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=mf(t)}}function gf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function vf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sl(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Sl(e.document)}return n}function wl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Wb=Ht&&"documentMode"in document&&11>=document.documentMode,ui=null,Pl=null,sr=null,Tl=!1;function bf(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Tl||ui==null||ui!==Sl(a)||(a=ui,"selectionStart"in a&&wl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),sr&&or(sr,a)||(sr=a,a=ps(Pl,"onSelect"),0<a.length&&(n=new ho("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=ui)))}function xa(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var di={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},El={},yf={};Ht&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function Aa(e){if(El[e])return El[e];if(!di[e])return e;var n=di[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in yf)return El[e]=n[t];return e}var Cf=Aa("animationend"),Sf=Aa("animationiteration"),wf=Aa("animationstart"),qb=Aa("transitionrun"),Bb=Aa("transitionstart"),jb=Aa("transitioncancel"),Pf=Aa("transitionend"),Tf=new Map,_l="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_l.push("scrollEnd");function lt(e,n){Tf.set(e,n),Ra(n,[e])}var Gb=0;function zt(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=ft.identifierPrefix;var t=Gb++;return e="_"+e+"t_"+t.toString(32)+"_",n.autoName=e}function Ef(e){if(e==null||typeof e=="string")return e;var n=null,t=Ni;if(t!==null)for(var a=0;a<t.length;a++){var r=e[t[a]];if(r!=null){if(r==="none")return"none";n=n==null?r:n+(" "+r)}}return n??e.default}function Ot(e,n){return e=Ef(e),n=Ef(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var go=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$n=[],fi=0,Rl=0;function vo(){for(var e=fi,n=Rl=fi=0;n<e;){var t=$n[n];$n[n++]=null;var a=$n[n];$n[n++]=null;var r=$n[n];$n[n++]=null;var o=$n[n];if($n[n++]=null,a!==null&&r!==null){var d=a.pending;d===null?r.next=r:(r.next=d.next,d.next=r),a.pending=r}o!==0&&_f(t,r,o)}}function bo(e,n,t,a){$n[fi++]=e,$n[fi++]=n,$n[fi++]=t,$n[fi++]=a,Rl|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function xl(e,n,t,a){return bo(e,n,t,a),yo(e)}function Ma(e,n){return bo(e,null,null,n),yo(e)}function _f(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var r=!1,o=e.return;o!==null;)o.childLanes|=t,a=o.alternate,a!==null&&(a.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&n!==null&&(r=31-jn(t),e=o.hiddenUpdates,a=e[r],a===null?e[r]=[n]:a.push(n),n.lane=t|536870912),o):null}function yo(e){if(50<Ar)throw Ar=0,ls=null,Error(l(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var hi={};function Ib(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,t,a){return new Ib(e,n,t,a)}function Al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dt(e,n){var t=e.alternate;return t===null?(t=kn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&1206910976,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Rf(e,n){e.flags&=1206910978;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Co(e,n,t,a,r,o){var d=0;if(a=e,typeof a=="function")Al(a)&&(d=1);else if(typeof a=="string")d=gC(e,t,Ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case fe:return e=kn(31,t,n,r),e.elementType=fe,e.lanes=o,e;case G:return Na(t.children,r,o,n);case z:d=8,r|=24;break;case te:return e=kn(12,t,n,r|2),e.elementType=te,e.lanes=o,e;case U:return e=kn(13,t,n,r),e.elementType=U,e.lanes=o,e;case Z:return e=kn(19,t,n,r),e.elementType=Z,e.lanes=o,e;case F:case w:return e=r|32,e=kn(30,t,n,e),e.elementType=w,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Ce:d=10;break e;case we:d=9;break e;case I:d=11;break e;case Q:d=14;break e;case le:d=16,a=null;break e}d=29,t=Error(l(130,e===null?"null":typeof e,"")),a=null}return n=kn(d,t,n,r),n.elementType=e,n.type=a,n.lanes=o,n}function Na(e,n,t,a){return e=kn(7,e,a,n),e.lanes=t,e}function Ml(e,n,t){return e=kn(6,e,null,n),e.lanes=t,e}function xf(e){var n=kn(18,null,null,0);return n.stateNode=e,n}function Nl(e,n,t){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Af=new WeakMap;function et(e,n){if(typeof e=="object"&&e!==null){var t=Af.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Zt(n)},Af.set(e,n),n)}return{value:e,source:n,stack:Zt(n)}}var mi=[],pi=0,So=null,lr=0,nt=[],tt=0,ea=null,bt=1,yt="";function Wt(e,n){mi[pi++]=lr,mi[pi++]=So,So=e,lr=n}function Mf(e,n,t){nt[tt++]=bt,nt[tt++]=yt,nt[tt++]=ea,ea=e;var a=bt;e=yt;var r=32-jn(a)-1;a&=~(1<<r),t+=1;var o=32-jn(n)+r;if(30<o){var d=r-r%5;o=(a&(1<<d)-1).toString(32),a>>=d,r-=d,bt=1<<32-jn(n)+r|t<<r|a,yt=o+e}else bt=1<<o|t<<r|a,yt=e}function wo(e){e.return!==null&&(Wt(e,1),Mf(e,1,0))}function kl(e){for(;e===So;)So=mi[--pi],mi[pi]=null,lr=mi[--pi],mi[pi]=null;for(;e===ea;)ea=nt[--tt],nt[tt]=null,yt=nt[--tt],nt[tt]=null,bt=nt[--tt],nt[tt]=null}function Nf(e,n){nt[tt++]=bt,nt[tt++]=yt,nt[tt++]=ea,bt=n.id,yt=n.overflow,ea=e}var dn=null,Ye=null,Ee=!1,na=null,at=!1,Hl=Error(l(519));function ta(e){var n=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cr(et(n,e)),Hl}function kf(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[mn]=e,n[Nn]=a,t){case"dialog":Re("cancel",n),Re("close",n);break;case"iframe":case"object":case"embed":Re("load",n);break;case"video":case"audio":for(t=0;t<Nr.length;t++)Re(Nr[t],n);break;case"source":Re("error",n);break;case"img":case"image":case"link":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"input":Re("invalid",n),Ld(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Re("invalid",n);break;case"textarea":Re("invalid",n),Fd(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||$m(n.textContent,t)?(a.popover!=null&&(Re("beforetoggle",n),Re("toggle",n)),a.onScroll!=null&&Re("scroll",n),a.onScrollEnd!=null&&Re("scrollend",n),a.onClick!=null&&(n.onclick=vt),n=!0):n=!1,n||ta(e,!0)}function Po(e){for(dn=e.return;dn;)switch(dn.tag){case 5:case 31:case 13:at=!1;return;case 27:case 3:at=!0;return;default:dn=dn.return}}function gi(e){if(e!==dn)return!1;if(!Ee)return Po(e),Ee=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||cu(e.type,e.memoizedProps)),t=!t),t&&Ye&&ta(e),Po(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ye=bp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ye=bp(e)}else n===27?(n=Ye,ba(e.type)?(e=bu,bu=null,Ye=e):Ye=n):Ye=dn?rt(e.stateNode.nextSibling):null;return!0}function ka(){Ye=dn=null,Ee=!1}function zl(){var e=na;return e!==null&&(On===null?On=e:On.push.apply(On,e),na=null),e}function cr(e){na===null?na=[e]:na.push(e)}var Ol=ve(null),Ha=null,qt=null;function aa(e,n,t){de(Ol,n._currentValue),n._currentValue=t}function Bt(e){e._currentValue=Ol.current,ke(Ol)}function To(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Dl(e,n,t,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var d=r.child;o=o.firstContext;e:for(;o!==null;){var m=o;o=r;for(var C=0;C<n.length;C++)if(m.context===n[C]){o.lanes|=t,m=o.alternate,m!==null&&(m.lanes|=t),To(o.return,t,e),a||(d=null);break e}o=m.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(l(341));d.lanes|=t,o=d.alternate,o!==null&&(o.lanes|=t),To(d,t,e),d=null}else r.tag===13&&r.memoizedState!==null&&r.memoizedState.dehydrated===null?(r.lanes|=t,d=r.alternate,d!==null&&(d.lanes|=t),To(r.return,t,e),d=r.child,d=d!==null?d.sibling:null):d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function za(e,n,t,a){e=null;for(var r=n,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(l(387));if(d=d.memoizedProps,d!==null){var m=r.type;In(r.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(r===Tn.current){if(d=r.alternate,d===null)throw Error(l(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Gi):e=[Gi])}r=r.return}return e!==null&&Dl(n,e,t,a),n.flags|=262144,e!==null}function Eo(e){for(e=e.firstContext;e!==null;){if(!In(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oa(e){Ha=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pn(e){return Hf(Ha,e)}function _o(e,n){return Ha===null&&Oa(e),Hf(e,n)}function Hf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},qt===null){if(e===null)throw Error(l(308));qt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else qt=qt.next=n;return t}var Lb=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Ub=i.unstable_scheduleCallback,Fb=i.unstable_NormalPriority,an={$$typeof:Ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wl(){return{controller:new Lb,data:new Map,refCount:0}}function ur(e){e.refCount--,e.refCount===0&&Ub(Fb,function(){e.controller.abort()})}function zf(e,n){if((e.pendingLanes&4194048)!==0){var t=e.transitionTypes;for(t===null&&(t=e.transitionTypes=[]),e=0;e<n.length;e++){var a=n[e];t.indexOf(a)===-1&&t.push(a)}}}var dr=null;function Qb(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var fr=null,ql=0,Da=0,vi=null;function Yb(e,n){if(fr===null){var t=fr=[];ql=0,Da=eu(),vi={status:"pending",value:void 0,then:function(a){t.push(a)}}}return ql++,n.then(Of,Of),n}function Of(){if(--ql===0&&(dr=null,fr!==null)){vi!==null&&(vi.status="fulfilled");var e=fr;fr=null,Da=0,vi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Vb(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var r=0;r<t.length;r++)(0,t[r])(n)},function(r){for(a.status="rejected",a.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),a}var Df=j.S;j.S=function(e,n){if(xm=qn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Yb(e,n),dr!==null)for(var t=Oi;t!==null;)zf(t,dr),t=t.next;if(t=e.types,t!==null){for(var a=Oi;a!==null;)zf(a,t),a=a.next;if(Da!==0){a=dr,a===null&&(a=dr=[]);for(var r=0;r<t.length;r++){var o=t[r];a.indexOf(o)===-1&&a.push(o)}}}Df!==null&&Df(e,n)};var Wa=ve(null);function Bl(){var e=Wa.current;return e!==null?e:Ue.pooledCache}function Ro(e,n){n===null?de(Wa,Wa.current):de(Wa,n.pool)}function Wf(){var e=Bl();return e===null?null:{parent:an._currentValue,pool:e}}var bi=Error(l(460)),jl=Error(l(474)),xo=Error(l(542)),Ao={then:function(){}};function qf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bf(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(vt,vt),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Gf(e),e===void 0&&!("reason"in n)?Error(l(600)):e;default:if(typeof n.status=="string")n.then(vt,vt);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=a}},function(a){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Gf(e),e}throw Ba=n,bi}}function qa(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Ba=t,bi):t}}var Ba=null;function jf(){if(Ba===null)throw Error(l(459));var e=Ba;return Ba=null,e}function Gf(e){if(e===bi||e===xo)throw Error(l(483))}var yi=null,hr=0;function Mo(e){var n=hr;return hr+=1,yi===null&&(yi=[]),Bf(yi,e,n)}function ia(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function No(e,n){throw n.$$typeof===T?Error(l(525)):(e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function If(e){function n(x,P){if(e){var M=x.deletions;M===null?(x.deletions=[P],x.flags|=16):M.push(P)}}function t(x,P){if(!e)return null;for(;P!==null;)n(x,P),P=P.sibling;return null}function a(x){for(var P=new Map;x!==null;)x.key===null?P.set(x.index,x):P.set(x.key,x),x=x.sibling;return P}function r(x,P){return x=Dt(x,P),x.index=0,x.sibling=null,x}function o(x,P,M){return x.index=M,e?(M=x.alternate,M!==null?(M=M.index,M<P?(x.flags|=2,P):M):(x.flags|=134217730,P)):(x.flags|=1048576,P)}function d(x){return e&&x.alternate===null&&(x.flags|=134217730),x}function m(x,P,M,D){return P===null||P.tag!==6?(P=Ml(M,x.mode,D),P.return=x,P):(P=r(P,M),P.return=x,P)}function C(x,P,M,D){var ne=M.type;return ne===G?(x=k(x,P,M.props.children,D,M.key),ia(x,M),x):P!==null&&(P.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===le&&qa(ne)===P.type)?(P=r(P,M.props),ia(P,M),P.return=x,P):(P=Co(M.type,M.key,M.props,null,x.mode,D),ia(P,M),P.return=x,P)}function A(x,P,M,D){return P===null||P.tag!==4||P.stateNode.containerInfo!==M.containerInfo||P.stateNode.implementation!==M.implementation?(P=Nl(M,x.mode,D),P.return=x,P):(P=r(P,M.children||[]),P.return=x,P)}function k(x,P,M,D,ne){return P===null||P.tag!==7?(P=Na(M,x.mode,D,ne),P.return=x,P):(P=r(P,M),P.return=x,P)}function W(x,P,M){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Ml(""+P,x.mode,M),P.return=x,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return M=Co(P.type,P.key,P.props,null,x.mode,M),ia(M,P),M.return=x,M;case H:return P=Nl(P,x.mode,M),P.return=x,P;case le:return P=qa(P),W(x,P,M)}if(me(P)||ae(P))return P=Na(P,x.mode,M,null),P.return=x,P;if(typeof P.then=="function")return W(x,Mo(P),M);if(P.$$typeof===Ce)return W(x,_o(x,P),M);No(x,P)}return null}function R(x,P,M,D){var ne=P!==null?P.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return ne!==null?null:m(x,P,""+M,D);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return M.key===ne?C(x,P,M,D):null;case H:return M.key===ne?A(x,P,M,D):null;case le:return M=qa(M),R(x,P,M,D)}if(me(M)||ae(M))return ne!==null?null:k(x,P,M,D,null);if(typeof M.then=="function")return R(x,P,Mo(M),D);if(M.$$typeof===Ce)return R(x,P,_o(x,M),D);No(x,M)}return null}function N(x,P,M,D,ne){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return x=x.get(M)||null,m(P,x,""+D,ne);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case S:return x=x.get(D.key===null?M:D.key)||null,C(P,x,D,ne);case H:return x=x.get(D.key===null?M:D.key)||null,A(P,x,D,ne);case le:return D=qa(D),N(x,P,M,D,ne)}if(me(D)||ae(D))return x=x.get(M)||null,k(P,x,D,ne,null);if(typeof D.then=="function")return N(x,P,M,Mo(D),ne);if(D.$$typeof===Ce)return N(x,P,M,_o(P,D),ne);No(P,D)}return null}function Y(x,P,M,D){for(var ne=null,Ae=null,he=P,ge=P=0,sn=null;he!==null&&ge<M.length;ge++){he.index>ge?(sn=he,he=null):sn=he.sibling;var He=R(x,he,M[ge],D);if(He===null){he===null&&(he=sn);break}e&&he&&He.alternate===null&&n(x,he),P=o(He,P,ge),Ae===null?ne=He:Ae.sibling=He,Ae=He,he=sn}if(ge===M.length)return t(x,he),Ee&&Wt(x,ge),ne;if(he===null){for(;ge<M.length;ge++)he=W(x,M[ge],D),he!==null&&(P=o(he,P,ge),Ae===null?ne=he:Ae.sibling=he,Ae=he);return Ee&&Wt(x,ge),ne}for(he=a(he);ge<M.length;ge++)sn=N(he,x,ge,M[ge],D),sn!==null&&(e&&(He=sn.alternate,He!==null&&he.delete(He.key===null?ge:He.key)),P=o(sn,P,ge),Ae===null?ne=sn:Ae.sibling=sn,Ae=sn);return e&&he.forEach(function(Pa){return n(x,Pa)}),Ee&&Wt(x,ge),ne}function oe(x,P,M,D){if(M==null)throw Error(l(151));for(var ne=null,Ae=null,he=P,ge=P=0,sn=null,He=M.next();he!==null&&!He.done;ge++,He=M.next()){he.index>ge?(sn=he,he=null):sn=he.sibling;var Pa=R(x,he,He.value,D);if(Pa===null){he===null&&(he=sn);break}e&&he&&Pa.alternate===null&&n(x,he),P=o(Pa,P,ge),Ae===null?ne=Pa:Ae.sibling=Pa,Ae=Pa,he=sn}if(He.done)return t(x,he),Ee&&Wt(x,ge),ne;if(he===null){for(;!He.done;ge++,He=M.next())He=W(x,He.value,D),He!==null&&(P=o(He,P,ge),Ae===null?ne=He:Ae.sibling=He,Ae=He);return Ee&&Wt(x,ge),ne}for(he=a(he);!He.done;ge++,He=M.next())He=N(he,x,ge,He.value,D),He!==null&&(e&&(sn=He.alternate,sn!==null&&he.delete(sn.key===null?ge:sn.key)),P=o(He,P,ge),Ae===null?ne=He:Ae.sibling=He,Ae=He);return e&&he.forEach(function(xC){return n(x,xC)}),Ee&&Wt(x,ge),ne}function Te(x,P,M,D){if(typeof M=="object"&&M!==null&&M.type===G&&M.key===null&&M.props.ref===void 0&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case S:e:{for(var ne=M.key;P!==null;){if(P.key===ne){if(ne=M.type,ne===G){if(P.tag===7){t(x,P.sibling),D=r(P,M.props.children),ia(D,M),D.return=x,x=D;break e}}else if(P.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===le&&qa(ne)===P.type){t(x,P.sibling),D=r(P,M.props),ia(D,M),D.return=x,x=D;break e}t(x,P);break}else n(x,P);P=P.sibling}M.type===G?(D=Na(M.props.children,x.mode,D,M.key),ia(D,M),D.return=x,x=D):(D=Co(M.type,M.key,M.props,null,x.mode,D),ia(D,M),D.return=x,x=D)}return d(x);case H:e:{for(ne=M.key;P!==null;){if(P.key===ne)if(P.tag===4&&P.stateNode.containerInfo===M.containerInfo&&P.stateNode.implementation===M.implementation){t(x,P.sibling),D=r(P,M.children||[]),D.return=x,x=D;break e}else{t(x,P);break}else n(x,P);P=P.sibling}D=Nl(M,x.mode,D),D.return=x,x=D}return d(x);case le:return M=qa(M),Te(x,P,M,D)}if(me(M))return Y(x,P,M,D);if(ae(M)){if(ne=ae(M),typeof ne!="function")throw Error(l(150));return M=ne.call(M),oe(x,P,M,D)}if(typeof M.then=="function")return Te(x,P,Mo(M),D);if(M.$$typeof===Ce)return Te(x,P,_o(x,M),D);No(x,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,P!==null&&P.tag===6?(t(x,P.sibling),D=r(P,M),D.return=x,x=D):(t(x,P),D=Ml(M,x.mode,D),D.return=x,x=D),d(x)):t(x,P)}return function(x,P,M,D){try{hr=0;var ne=Te(x,P,M,D);return yi=null,ne}catch(he){if(he===bi||he===xo)throw he;var Ae=kn(29,he,null,x.mode);return Ae.lanes=D,Ae.return=x,Ae}}}var ja=If(!0),Lf=If(!1),ra=!1;function Gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Il(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(De&2)!==0){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,n=yo(e),_f(e,null,t),n}return bo(e,a,n,t),yo(e)}function mr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Ad(e,t)}}function Ll(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var d={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?r=o=d:o=o.next=d,t=t.next}while(t!==null);o===null?r=o=n:o=o.next=n}else r=o=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Ul=!1;function pr(){if(Ul){var e=vi;if(e!==null)throw e}}function gr(e,n,t,a){Ul=!1;var r=e.updateQueue;ra=!1;var o=r.firstBaseUpdate,d=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var C=m,A=C.next;C.next=null,d===null?o=A:d.next=A,d=C;var k=e.alternate;k!==null&&(k=k.updateQueue,m=k.lastBaseUpdate,m!==d&&(m===null?k.firstBaseUpdate=A:m.next=A,k.lastBaseUpdate=C))}if(o!==null){var W=r.baseState;d=0,k=A=C=null,m=o;do{var R=m.lane&-536870913,N=R!==m.lane;if(N?(xe&R)===R:(a&R)===R){R!==0&&R===Da&&(Ul=!0),k!==null&&(k=k.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Y=e,oe=m;R=n;var Te=t;switch(oe.tag){case 1:if(Y=oe.payload,typeof Y=="function"){W=Y.call(Te,W,R);break e}W=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=oe.payload,R=typeof Y=="function"?Y.call(Te,W,R):Y,R==null)break e;W=L({},W,R);break e;case 2:ra=!0}}R=m.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=r.callbacks,N===null?r.callbacks=[R]:N.push(R))}else N={lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},k===null?(A=k=N,C=W):k=k.next=N,d|=R;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;N=m,m=N.next,N.next=null,r.lastBaseUpdate=N,r.shared.pending=null}}while(!0);k===null&&(C=W),r.baseState=C,r.firstBaseUpdate=A,r.lastBaseUpdate=k,o===null&&(r.shared.lanes=0),ma|=d,e.lanes=d,e.memoizedState=W}}function Uf(e,n){if(typeof e!="function")throw Error(l(191,e));e.call(n)}function Ff(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Uf(t[e],n)}var la=ve(null),ko=ve(0);function Qf(e,n){e=Ut,de(ko,e),de(la,n),Ut=e|n.baseLanes}function Fl(){de(ko,Ut),de(la,la.current)}function Ql(){Ut=ko.current,ke(la),ke(ko)}var gn=ve(null),Sn=null;function ca(e){var n=e.alternate;de(vn,vn.current&1),de(gn,e),Sn===null&&(n===null||la.current!==null||n.memoizedState!==null)&&(Sn=e)}function Yl(e){de(vn,vn.current),de(gn,e),Sn===null&&(Sn=e)}function Yf(e){e.tag===22?(de(vn,vn.current),de(gn,e),Sn===null&&(Sn=e)):ua()}function ua(){de(vn,vn.current),de(gn,gn.current)}function Ln(e){ke(gn),Sn===e&&(Sn=null),ke(vn)}var vn=ve(0);function vr(e,n){de(gn,gn.current),de(vn,n)}function Vl(e){ke(vn),ke(gn),Sn===e&&(Sn=null)}function Ho(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||gu(t)||vu(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var jt=0,Pe=null,Le=null,rn=null,zo=!1,Ci=!1,Ga=!1,Oo=0,br=0,Si=null,Xb=0;function en(){throw Error(l(321))}function Xl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!In(e[t],n[t]))return!1;return!0}function Zl(e,n,t,a,r,o){return jt=o,Pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,j.H=e===null||e.memoizedState===null?Mh:Nh,Ga=!1,o=t(a,r),Ga=!1,Ci&&(o=Xf(n,t,a,r)),Vf(e),o}function Vf(e){j.H=Io;var n=Le!==null&&Le.next!==null;if(jt=0,rn=Le=Pe=null,zo=!1,br=0,Si=null,n)throw Error(l(300));e===null||on||(e=e.dependencies,e!==null&&Eo(e)&&(on=!0))}function Xf(e,n,t,a){Pe=e;var r=0;do{if(Ci&&(Si=null),br=0,Ci=!1,25<=r)throw Error(l(301));if(r+=1,rn=Le=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=ay,o=n(t,a)}while(Ci);return o}function Zb(){var e=j.H,n=e.useState()[0];return n=typeof n.then=="function"?yr(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(Pe.flags|=1024),n}function Kl(){var e=Oo!==0;return Oo=0,e}function Jl(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function $l(e){if(zo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}zo=!1}jt=0,rn=Le=Pe=null,Ci=!1,br=Oo=0,Si=null}function _n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Pe.memoizedState=rn=e:rn=rn.next=e,rn}function tn(){if(Le===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=rn===null?Pe.memoizedState:rn.next;if(n!==null)rn=n,Le=e;else{if(e===null)throw Pe.alternate===null?Error(l(467)):Error(l(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},rn===null?Pe.memoizedState=rn=e:rn=rn.next=e}return rn}function Do(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yr(e){var n=br;return br+=1,Si===null&&(Si=[]),e=Bf(Si,e,n),n=Pe,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,j.H=n===null||n.memoizedState===null?Mh:Nh),e}function Wo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yr(e);if(e.$$typeof===O)return;if(e.$$typeof===Ce)return pn(e)}throw Error(l(438,String(e)))}function ec(e){var n=null,t=Pe.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=Pe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Do(),Pe.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=K;return n.index++,t}function Gt(e,n){return typeof n=="function"?n(e):n}function qo(e){var n=tn();return nc(n,Le,e)}function nc(e,n,t){var a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=t;var r=e.baseQueue,o=a.pending;if(o!==null){if(r!==null){var d=r.next;r.next=o.next,o.next=d}n.baseQueue=r=o,a.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{n=r.next;var m=d=null,C=null,A=n,k=!1;do{var W=A.lane&-536870913;if(W!==A.lane?(xe&W)===W:(jt&W)===W){var R=A.revertLane;if(R===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),W===Da&&(k=!0);else if((jt&R)===R){A=A.next,R===Da&&(k=!0);continue}else W={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},C===null?(m=C=W,d=o):C=C.next=W,Pe.lanes|=R,ma|=R;W=A.action,Ga&&t(o,W),o=A.hasEagerState?A.eagerState:t(o,W)}else R={lane:W,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},C===null?(m=C=R,d=o):C=C.next=R,Pe.lanes|=W,ma|=W;A=A.next}while(A!==null&&A!==n);if(C===null?d=o:C.next=m,!In(o,e.memoizedState)&&(on=!0,k&&(t=vi,t!==null)))throw t;e.memoizedState=o,e.baseState=d,e.baseQueue=C,a.lastRenderedState=o}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function tc(e){var n=tn(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,o=n.memoizedState;if(r!==null){t.pending=null;var d=r=r.next;do o=e(o,d.action),d=d.next;while(d!==r);In(o,n.memoizedState)||(on=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,a]}function Zf(e,n,t){var a=Pe,r=tn(),o=Ee;if(o){if(t===void 0)throw Error(l(407));t=t()}else t=n();var d=!In((Le||r).memoizedState,t);if(d&&(r.memoizedState=t,on=!0),r=r.queue,rc($f.bind(null,a,r,e),[e]),e=r.getSnapshot!==n||d||rn!==null&&(rn.memoizedState.tag&1)!==0,wi(e?9:8,{destroy:void 0},Jf.bind(null,a,r,t,n),null),e){if(a.flags|=2048,Ue===null)throw Error(l(349));o||(jt&127)!==0||Kf(a,n,t)}return t}function Kf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Pe.updateQueue,n===null?(n=Do(),Pe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Jf(e,n,t,a){n.value=t,n.getSnapshot=a,eh(n)&&nh(e)}function $f(e,n,t){return t(function(){eh(n)&&nh(e)})}function eh(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!In(e,t)}catch{return!0}}function nh(e){var n=Ma(e,2);n!==null&&Dn(n,e,2)}function ac(e){var n=_n();if(typeof e=="function"){var t=e;if(e=t(),Ga){Kt(!0);try{t()}finally{Kt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},n}function th(e,n,t,a){return e.baseState=t,nc(e,Le,typeof a=="function"?a:Gt)}function Kb(e,n,t,a,r){if(Go(e))throw Error(l(485));if(e=n.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){o.listeners.push(d)}};j.T!==null?t(!0):o.isTransition=!1,a(o),t=n.pending,t===null?(o.next=n.pending=o,ah(n,o)):(o.next=t.next,n.pending=t.next=o)}}function ah(e,n){var t=n.action,a=n.payload,r=e.state;if(n.isTransition){var o=j.T,d={};d.types=o!==null?o.types:null,j.T=d;try{var m=t(r,a),C=j.S;C!==null&&C(d,m),ih(e,n,m)}catch(A){ic(e,n,A)}finally{o!==null&&d.types!==null&&(o.types=d.types),j.T=o}}else try{o=t(r,a),ih(e,n,o)}catch(A){ic(e,n,A)}}function ih(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){rh(e,n,a)},function(a){return ic(e,n,a)}):rh(e,n,t)}function rh(e,n,t){n.status="fulfilled",n.value=t,oh(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,ah(e,t)))}function ic(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,oh(n),n=n.next;while(n!==a)}e.action=null}function oh(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function sh(e,n){return n}function lh(e,n){if(Ee){var t=Ue.formState;if(t!==null){e:{var a=Pe;if(Ee){if(Ye){n:{for(var r=Ye,o=at;r.nodeType!==8;){if(!o){r=null;break n}if(r=rt(r.nextSibling),r===null){r=null;break n}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){Ye=rt(r.nextSibling),a=r.data==="F!";break e}}ta(a)}a=!1}a&&(n=t[0])}}return t=_n(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sh,lastRenderedState:n},t.queue=a,t=Rh.bind(null,Pe,a),a.dispatch=t,a=ac(!1),o=uc.bind(null,Pe,!1,a.queue),a=_n(),r={state:n,dispatch:null,action:e,pending:null},a.queue=r,t=Kb.bind(null,Pe,r,o,t),r.dispatch=t,a.memoizedState=e,[n,t,!1]}function ch(e){var n=tn();return uh(n,Le,e)}function uh(e,n,t){if(n=nc(e,n,sh)[0],e=qo(Gt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=yr(n)}catch(d){throw d===bi?xo:d}else a=n;n=tn();var r=n.queue,o=r.dispatch;return t!==n.memoizedState&&(Pe.flags|=2048,wi(9,{destroy:void 0},Jb.bind(null,r,t),null)),[a,o,e]}function Jb(e,n){e.action=n}function dh(e){var n=tn(),t=Le;if(t!==null)return uh(n,t,e);tn(),n=n.memoizedState,t=tn();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function wi(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=Pe.updateQueue,n===null&&(n=Do(),Pe.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function fh(){return tn().memoizedState}function Bo(e,n,t,a){var r=_n();Pe.flags|=e,r.memoizedState=wi(1|n,{destroy:void 0},t,a===void 0?null:a)}function jo(e,n,t,a){var r=tn();a=a===void 0?null:a;var o=r.memoizedState.inst;Le!==null&&a!==null&&Xl(a,Le.memoizedState.deps)?r.memoizedState=wi(n,o,t,a):(Pe.flags|=e,r.memoizedState=wi(1|n,o,t,a))}function hh(e,n){Bo(8390656,8,e,n)}function rc(e,n){jo(2048,8,e,n)}function $b(e){Pe.flags|=4;var n=Pe.updateQueue;if(n===null)n=Do(),Pe.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function mh(e){var n=tn().memoizedState;return $b({ref:n,nextImpl:e}),function(){if((De&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}function ph(e,n){return jo(4,2,e,n)}function gh(e,n){return jo(4,4,e,n)}function vh(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bh(e,n,t){t=t!=null?t.concat([e]):null,jo(4,4,vh.bind(null,n,e),t)}function oc(){}function yh(e,n){var t=tn();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&Xl(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Ch(e,n){var t=tn();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&Xl(n,a[1]))return a[0];if(a=e(),Ga){Kt(!0);try{e()}finally{Kt(!1)}}return t.memoizedState=[a,n],a}function sc(e,n,t){return t===void 0||(jt&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Mm(),Pe.lanes|=e,ma|=e,t)}function Sh(e,n,t,a){return In(t,n)?t:la.current!==null?(e=sc(e,t,a),In(e,n)||(on=!0),e):(jt&106)===0||(jt&1073741824)!==0&&(xe&261930)===0?(on=!0,e.memoizedState=t):(e=Mm(),Pe.lanes|=e,ma|=e,n)}function wh(e,n,t,a,r){var o=J.p;J.p=o!==0&&8>o?o:8;var d=j.T,m={};m.types=d!==null?d.types:null,j.T=m,uc(e,!1,n,t);try{var C=r(),A=j.S;if(A!==null&&A(m,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var k=Vb(C,a);Cr(e,n,k,Yn(e))}else Cr(e,n,a,Yn(e))}catch(W){Cr(e,n,{then:function(){},status:"rejected",reason:W},Yn())}finally{J.p=o,d!==null&&m.types!==null&&(d.types=m.types),j.T=d}}function ey(){}function lc(e,n,t,a){if(e.tag!==5)throw Error(l(476));var r=Ph(e).queue;wh(e,r,n,Fe,t===null?ey:function(){return Th(e),t(a)})}function Ph(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Fe,baseState:Fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:Fe},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Th(e){var n=Ph(e);n.next===null&&(n=e.alternate.memoizedState),Cr(e,n.next.queue,{},Yn())}function cc(){return pn(Gi)}function Eh(){return tn().memoizedState}function _h(){return tn().memoizedState}function ny(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Yn();e=oa(t);var a=sa(n,e,t);a!==null&&(Dn(a,n,t),mr(a,n,t)),n={cache:Wl()},e.payload=n;return}n=n.return}}function ty(e,n,t){var a=Yn();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Go(e)?xh(n,t):(t=xl(e,n,t,a),t!==null&&(Dn(t,e,a),Ah(t,n,a)))}function Rh(e,n,t){var a=Yn();Cr(e,n,t,a)}function Cr(e,n,t,a){var r={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Go(e))xh(n,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var d=n.lastRenderedState,m=o(d,t);if(r.hasEagerState=!0,r.eagerState=m,In(m,d))return bo(e,n,r,0),Ue===null&&vo(),!1}catch{}if(t=xl(e,n,r,a),t!==null)return Dn(t,e,a),Ah(t,n,a),!0}return!1}function uc(e,n,t,a){if(a={lane:2,revertLane:eu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Go(e)){if(n)throw Error(l(479))}else n=xl(e,t,a,2),n!==null&&Dn(n,e,2)}function Go(e){var n=e.alternate;return e===Pe||n!==null&&n===Pe}function xh(e,n){Ci=zo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ah(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Ad(e,t)}}var Io={readContext:pn,use:Wo,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en,useEffectEvent:en},Mh={readContext:pn,use:Wo,useCallback:function(e,n){return _n().memoizedState=[e,n===void 0?null:n],e},useContext:pn,useEffect:hh,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Bo(4194308,4,vh.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Bo(4194308,4,e,n)},useInsertionEffect:function(e,n){Bo(4,2,e,n)},useMemo:function(e,n){var t=_n();n=n===void 0?null:n;var a=e();if(Ga){Kt(!0);try{e()}finally{Kt(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=_n();if(t!==void 0){var r=t(n);if(Ga){Kt(!0);try{t(n)}finally{Kt(!1)}}}else r=n;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=ty.bind(null,Pe,e),[a.memoizedState,e]},useRef:function(e){var n=_n();return e={current:e},n.memoizedState=e},useState:function(e){e=ac(e);var n=e.queue,t=Rh.bind(null,Pe,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:oc,useDeferredValue:function(e,n){var t=_n();return sc(t,e,n)},useTransition:function(){var e=ac(!1);return e=wh.bind(null,Pe,e.queue,!0,!1),_n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=Pe,r=_n();if(Ee){if(t===void 0)throw Error(l(407));t=t()}else{if(t=n(),Ue===null)throw Error(l(349));(xe&127)!==0||Kf(a,n,t)}r.memoizedState=t;var o={value:t,getSnapshot:n};return r.queue=o,hh($f.bind(null,a,o,e),[e]),a.flags|=2048,wi(9,{destroy:void 0},Jf.bind(null,a,o,t,n),null),t},useId:function(){var e=_n(),n=Ue.identifierPrefix;if(Ee){var t=yt,a=bt;t=(a&~(1<<32-jn(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Oo++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=Xb++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:cc,useFormState:lh,useActionState:lh,useOptimistic:function(e){var n=_n();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=uc.bind(null,Pe,!0,t),t.dispatch=n,[e,n]},useMemoCache:ec,useCacheRefresh:function(){return _n().memoizedState=ny.bind(null,Pe)},useEffectEvent:function(e){var n=_n(),t={impl:e};return n.memoizedState=t,function(){if((De&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}},Nh={readContext:pn,use:Wo,useCallback:yh,useContext:pn,useEffect:rc,useImperativeHandle:bh,useInsertionEffect:ph,useLayoutEffect:gh,useMemo:Ch,useReducer:qo,useRef:fh,useState:function(){return qo(Gt)},useDebugValue:oc,useDeferredValue:function(e,n){var t=tn();return Sh(t,Le.memoizedState,e,n)},useTransition:function(){var e=qo(Gt)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:yr(e),n]},useSyncExternalStore:Zf,useId:Eh,useHostTransitionStatus:cc,useFormState:ch,useActionState:ch,useOptimistic:function(e,n){var t=tn();return th(t,Le,e,n)},useMemoCache:ec,useCacheRefresh:_h,useEffectEvent:mh},ay={readContext:pn,use:Wo,useCallback:yh,useContext:pn,useEffect:rc,useImperativeHandle:bh,useInsertionEffect:ph,useLayoutEffect:gh,useMemo:Ch,useReducer:tc,useRef:fh,useState:function(){return tc(Gt)},useDebugValue:oc,useDeferredValue:function(e,n){var t=tn();return Le===null?sc(t,e,n):Sh(t,Le.memoizedState,e,n)},useTransition:function(){var e=tc(Gt)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:yr(e),n]},useSyncExternalStore:Zf,useId:Eh,useHostTransitionStatus:cc,useFormState:dh,useActionState:dh,useOptimistic:function(e,n){var t=tn();return Le!==null?th(t,Le,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:ec,useCacheRefresh:_h,useEffectEvent:mh};function dc(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:L({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var fc={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Yn(),r=oa(a);r.payload=n,t!=null&&(r.callback=t),n=sa(e,r,a),n!==null&&(Dn(n,e,a),mr(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Yn(),r=oa(a);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=sa(e,r,a),n!==null&&(Dn(n,e,a),mr(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Yn(),a=oa(t);a.tag=2,n!=null&&(a.callback=n),n=sa(e,a,t),n!==null&&(Dn(n,e,t),mr(n,e,t))}};function kh(e,n,t,a,r,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,d):n.prototype&&n.prototype.isPureReactComponent?!or(t,a)||!or(r,o):!0}function Hh(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&fc.enqueueReplaceState(n,n.state,null)}function Ia(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=L({},t));for(var r in e)t[r]===void 0&&(t[r]=e[r])}return t}function zh(e){go(e)}function Oh(e){console.error(e)}function Dh(e){go(e)}function Lo(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Wh(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function hc(e,n,t){return t=oa(t),t.tag=3,t.payload={element:null},t.callback=function(){Lo(e,n)},t}function qh(e){return e=oa(e),e.tag=3,e}function Bh(e,n,t,a){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var o=a.value;e.payload=function(){return r(o)},e.callback=function(){Wh(n,t,a)}}var d=t.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Wh(n,t,a),typeof r!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function iy(e,n,t,a,r){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&za(n,t,r,!0),t=gn.current,t!==null){switch(t.tag){case 31:case 13:case 19:return Sn===null?us():t.alternate===null&&nn===0&&(nn=3),t.flags&=-257,t.flags|=65536,t.lanes=r,a===Ao?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Kc(e,a,r)),!1;case 22:return t.flags|=65536,a===Ao?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Kc(e,a,r)),!1}throw Error(l(435,t.tag))}return Kc(e,a,r),us(),!1}if(Ee)return n=gn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,a!==Hl&&(e=Error(l(422),{cause:a}),cr(et(e,t)))):(a!==Hl&&(n=Error(l(423),{cause:a}),cr(et(n,t))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=et(a,t),r=hc(e.stateNode,a,r),Ll(e,r),nn!==4&&(nn=2)),!1;var o=Error(l(520),{cause:a});if(o=et(o,t),xr===null?xr=[o]:xr.push(o),nn!==4&&(nn=2),n===null)return!0;a=et(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=r&-r,t.lanes|=e,e=hc(t.stateNode,a,e),Ll(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(pa===null||!pa.has(o))))return t.flags|=65536,r&=-r,t.lanes|=r,r=qh(r),Bh(r,e,t,a),Ll(t,r),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var mc=Error(l(461)),on=!1;function ln(e,n,t,a){n.child=e===null?Lf(n,null,t,a):ja(n,e.child,t,a)}function jh(e,n,t,a,r){t=t.render;var o=n.ref;if("ref"in a){var d={};for(var m in a)m!=="ref"&&(d[m]=a[m])}else d=a;return Oa(n),a=Zl(e,n,t,d,o,r),m=Kl(),e!==null&&!on?(Jl(e,n,r),It(e,n,r)):(Ee&&m&&wo(n),n.flags|=1,ln(e,n,a,r),n.child)}function Gh(e,n,t,a,r){if(e===null){var o=t.type;return typeof o=="function"&&!Al(o)&&o.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=o,Ih(e,n,o,a,r)):(e=Co(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!wc(e,r)){var d=o.memoizedProps;if(t=t.compare,t=t!==null?t:or,t(d,a)&&e.ref===n.ref)return It(e,n,r)}return n.flags|=1,e=Dt(o,a),e.ref=n.ref,e.return=n,n.child=e}function Ih(e,n,t,a,r){if(e!==null){var o=e.memoizedProps;if(or(o,a)&&e.ref===n.ref)if(on=!1,n.pendingProps=a=o,wc(e,r))(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,It(e,n,r)}return pc(e,n,t,a,r)}function Lh(e,n,t,a){var r=a.children,o=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(a=n.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~o}else a=0,n.child=null;return Uh(e,n,o,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ro(n,o!==null?o.cachePool:null),o!==null?Qf(n,o):Fl(),Yf(n);else return a=n.lanes=536870912,Uh(e,n,o!==null?o.baseLanes|t:t,t,a)}else o!==null?(Ro(n,o.cachePool),Qf(n,o),ua(),n.memoizedState=null):(e!==null&&Ro(n,null),Fl(),ua());return ln(e,n,r,t),n.child}function Sr(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Uh(e,n,t,a,r){var o=Bl();return o=o===null?null:{parent:an._currentValue,pool:o},n.memoizedState={baseLanes:t,cachePool:o},e!==null&&Ro(n,null),Fl(),Yf(n),e!==null&&za(e,n,a,!0),n.childLanes=r,null}function Uo(e,n){return n=Fo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Fh(e,n,t){return ja(n,e.child,null,t),e=Uo(n,n.pendingProps),e.flags|=2,Ln(n),n.memoizedState=null,e}function ry(e,n,t){var a=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(a.mode==="hidden")return e=Uo(n,a),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Sr(null,e);if(Yl(n),(e=Ye)?(e=vp(e,at),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ea!==null?{id:bt,overflow:yt}:null,retryLane:536870912,hydrationErrors:null},t=xf(e),t.return=n,n.child=t,dn=n,Ye=null)):e=null,e===null)throw ta(n);return n.lanes=536870912,null}return Uo(n,a)}var o=e.memoizedState;if(o!==null){var d=o.dehydrated;if(Yl(n),r)if(n.flags&256)n.flags&=-257,n=Fh(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(l(558));else if(on||za(e,n,t,!1),r=(t&e.childLanes)!==0,on||r){if(la.current===null){if(a=Ue,a!==null&&(d=Md(a,t),d!==0&&d!==o.retryLane))throw o.retryLane=d,Ma(e,d),Dn(a,e,d),mc;us()}n=Fh(e,n,t)}else e=o.treeContext,Ye=rt(d.nextSibling),dn=n,Ee=!0,na=null,at=!1,e!==null&&Nf(n,e),n=Uo(n,a),n.flags|=134221824;return n}return e=Dt(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Pi(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(l(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function pc(e,n,t,a,r){return Oa(n),t=Zl(e,n,t,a,void 0,r),a=Kl(),e!==null&&!on?(Jl(e,n,r),It(e,n,r)):(Ee&&a&&wo(n),n.flags|=1,ln(e,n,t,r),n.child)}function Qh(e,n,t,a,r,o){return Oa(n),n.updateQueue=null,t=Xf(n,a,t,r),Vf(e),a=Kl(),e!==null&&!on?(Jl(e,n,o),It(e,n,o)):(Ee&&a&&wo(n),n.flags|=1,ln(e,n,t,o),n.child)}function Yh(e,n,t,a,r){if(Oa(n),n.stateNode===null){var o=hi,d=t.contextType;typeof d=="object"&&d!==null&&(o=pn(d)),o=new t(a,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=fc,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=a,o.state=n.memoizedState,o.refs={},Gl(n),d=t.contextType,o.context=typeof d=="object"&&d!==null?pn(d):hi,o.state=n.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(dc(n,t,d,a),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(d=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),d!==o.state&&fc.enqueueReplaceState(o,o.state,null),gr(n,a,o,r),pr(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){o=n.stateNode;var m=n.memoizedProps,C=Ia(t,m);o.props=C;var A=o.context,k=t.contextType;d=hi,typeof k=="object"&&k!==null&&(d=pn(k));var W=t.getDerivedStateFromProps;k=typeof W=="function"||typeof o.getSnapshotBeforeUpdate=="function",m=n.pendingProps!==m,k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m||A!==d)&&Hh(n,o,a,d),ra=!1;var R=n.memoizedState;o.state=R,gr(n,a,o,r),pr(),A=n.memoizedState,m||R!==A||ra?(typeof W=="function"&&(dc(n,t,W,a),A=n.memoizedState),(C=ra||kh(n,t,C,a,R,A,d))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=A),o.props=a,o.state=A,o.context=d,a=C):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{o=n.stateNode,Il(e,n),d=n.memoizedProps,k=Ia(t,d),o.props=k,W=n.pendingProps,R=o.context,A=t.contextType,C=hi,typeof A=="object"&&A!==null&&(C=pn(A)),m=t.getDerivedStateFromProps,(A=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==W||R!==C)&&Hh(n,o,a,C),ra=!1,R=n.memoizedState,o.state=R,gr(n,a,o,r),pr();var N=n.memoizedState;d!==W||R!==N||ra||e!==null&&e.dependencies!==null&&Eo(e.dependencies)?(typeof m=="function"&&(dc(n,t,m,a),N=n.memoizedState),(k=ra||kh(n,t,k,a,R,N,C)||e!==null&&e.dependencies!==null&&Eo(e.dependencies))?(A||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,N,C),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,N,C)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=N),o.props=a,o.state=N,o.context=C,a=k):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),a=!1)}return o=a,Pi(e,n),a=(n.flags&128)!==0,o||a?(o=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&a?(n.child=ja(n,e.child,null,r),n.child=ja(n,null,t,r)):ln(e,n,t,r),n.memoizedState=o.state,e=n.child):e=It(e,n,r),e}function Vh(e,n,t,a){return ka(),n.flags|=256,ln(e,n,t,a),n.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:Wf()}}function bc(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Qn),e}function Xh(e,n,t){var a=n.pendingProps,r=!1,o=(n.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(vn.current&2)!==0),d&&(r=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(r?ca(n):ua(),(e=Ye)?(e=vp(e,at),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ea!==null?{id:bt,overflow:yt}:null,retryLane:536870912,hydrationErrors:null},t=xf(e),t.return=n,n.child=t,dn=n,Ye=null)):e=null,e===null)throw ta(n);return vu(e)?n.lanes=32:n.lanes=536870912,null}return o=a.children,a=a.fallback,r?(ua(),r=n.mode,o=Fo({mode:"hidden",children:o},r),a=Na(a,r,t,null),o.return=n,a.return=n,o.sibling=a,n.child=o,a=n.child,a.memoizedState=vc(t),a.childLanes=bc(e,d,t),n.memoizedState=gc,Sr(null,a)):(ca(n),yc(n,o))}var m=e.memoizedState;if(m!==null){var C=m.dehydrated;if(C!==null)return oy(e,n,o,d,a,C,m,t)}return r?(ua(),r=a.fallback,o=n.mode,m=e.child,C=m.sibling,a=Dt(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&1206910976,C!==null?r=Dt(C,r):(r=Na(r,o,t,null),r.flags|=2),r.return=n,a.return=n,a.sibling=r,n.child=a,Sr(null,a),a=n.child,r=e.child.memoizedState,r===null?r=vc(t):(o=r.cachePool,o!==null?(m=an._currentValue,o=o.parent!==m?{parent:m,pool:m}:o):o=Wf(),r={baseLanes:r.baseLanes|t,cachePool:o}),a.memoizedState=r,a.childLanes=bc(e,d,t),n.memoizedState=gc,Sr(e.child,a)):(ca(n),t=e.child,e=t.sibling,t=Dt(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=t,n.memoizedState=null,t)}function yc(e,n){return n=Fo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fo(e,n){return e=kn(22,e,null,n),e.lanes=0,e}function Qo(e,n,t){return ja(n,e.child,null,t),e=yc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function oy(e,n,t,a,r,o,d,m){if(t)return n.flags&256?(ca(n),n.flags&=-257,Qo(e,n,m)):n.memoizedState!==null?(ua(),n.child=e.child,n.flags|=128,null):(ua(),o=r.fallback,d=n.mode,r=Fo({mode:"visible",children:r.children},d),o=Na(o,d,m,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,ja(n,e.child,null,m),r=n.child,r.memoizedState=vc(m),r.childLanes=bc(e,a,m),n.memoizedState=gc,Sr(null,r));if(ca(n),vu(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var C=a.dgst;return a=C,a!==""&&(r=Error(l(419)),r.stack="",r.digest=a,cr({value:r,source:null,stack:null})),Qo(e,n,m)}if(on||za(e,n,m,!1),a=(m&e.childLanes)!==0,on||a){if(la.current!==null)return Qo(e,n,m);if(a=Ue,a!==null&&(r=Md(a,m),r!==0&&r!==d.retryLane))throw d.retryLane=r,Ma(e,r),Dn(a,e,r),mc;return gu(o)||us(),Qo(e,n,m)}return gu(o)?(n.flags|=192,n.child=e.child,null):(e=d.treeContext,Ye=rt(o.nextSibling),dn=n,Ee=!0,na=null,at=!1,e!==null&&Nf(n,e),n=yc(n,r.children),n.flags|=134221824,n)}function Zh(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),To(e.return,n,t)}function Kh(e){for(var n=null;e!==null;){var t=e.alternate;t!==null&&Ho(t)===null&&(n=e),e=e.sibling}return n}function Yo(e,n,t,a,r,o){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r,treeForkCount:o}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=t,d.tailMode=r,d.treeForkCount=o)}function Cc(e){var n=e.child;for(e.child=null;n!==null;){var t=n.sibling;n.sibling=e.child,e.child=n,n=t}}function Sc(e,n,t){var a=n.pendingProps,r=a.revealOrder,o=a.tail;a=a.children;var d=vn.current;if(n.flags&128)return vr(n,d),null;var m=(d&2)!==0;if(m?(d=d&1|2,n.flags|=128):d&=1,vr(n,d),r==="backwards"&&e!==null?(Cc(e),ln(e,n,a,t),Cc(e)):ln(e,n,a,t),a=Ee?lr:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zh(e,t,n);else if(e.tag===19)Zh(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"backwards":t=Kh(n.child),t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null,Cc(n)),Yo(n,!0,r,null,o,a);break;case"unstable_legacy-backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Ho(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Yo(n,!0,t,null,o,a);break;case"together":Yo(n,!1,null,null,void 0,a);break;case"independent":n.memoizedState=null;break;default:t=Kh(n.child),t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Yo(n,!1,r,t,o,a)}return n.child}function Jh(e,n,t){var a=n.pendingProps;return aa(n,n.type,a.value),ln(e,n,a.children,t),n.child}function It(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ma|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(za(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,t=Dt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Dt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function wc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Eo(e)))}function sy(e,n,t){switch(n.tag){case 3:pt(n,n.stateNode.containerInfo),aa(n,an,e.memoizedState.cache),ka();break;case 27:case 5:Mn(n);break;case 4:pt(n,n.stateNode.containerInfo);break;case 10:aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Yl(n),null;break;case 13:var a=n.memoizedState;if(a!==null){if(a.dehydrated!==null)return ca(n),n.flags|=128,null;a=za(e,n,t,!1);var r=n.child.childLanes;return a||(t&r)!==0?Xh(e,n,t):(ca(n),e=It(e,n,t),e!==null?e.sibling:null)}ca(n);break;case 19:if(n.flags&128)return Sc(e,n,t);if(r=(e.flags&128)!==0,a=(t&n.childLanes)!==0,a||(za(e,n,t,!1),a=(t&n.childLanes)!==0),r){if(a)return Sc(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vr(n,vn.current),a)break;return null;case 22:return n.lanes=0,Lh(e,n,t,n.pendingProps);case 24:aa(n,an,e.memoizedState.cache)}return It(e,n,t)}function $h(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)on=!0;else{if(!wc(e,t)&&(n.flags&128)===0)return on=!1,sy(e,n,t);on=(e.flags&131072)!==0}else on=!1,Ee&&(n.flags&1048576)!==0&&Mf(n,lr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=qa(n.elementType),n.type=e,typeof e=="function")Al(e)?(a=Ia(e,a),n.tag=1,n=Yh(null,n,e,a,t)):(n.tag=0,n=pc(null,n,e,a,t));else{if(e!=null){var r=e.$$typeof;if(r===I){n.tag=11,n=jh(null,n,e,a,t);break e}else if(r===Q){n.tag=14,n=Gh(null,n,e,a,t);break e}else if(r===Ce){n.tag=10,n.type=e,n=Jh(null,n,t);break e}}throw n=ee(e)||e,Error(l(306,n,""))}}return n;case 0:return pc(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,r=Ia(a,n.pendingProps),Yh(e,n,a,r,t);case 3:e:{if(pt(n,n.stateNode.containerInfo),e===null)throw Error(l(387));a=n.pendingProps;var o=n.memoizedState;r=o.element,Il(e,n),gr(n,a,null,t);var d=n.memoizedState;if(a=d.cache,aa(n,an,a),a!==o.cache&&Dl(n,[an],t,!0),pr(),a=d.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=Vh(e,n,a,t);break e}else if(a!==r){r=et(Error(l(424)),n),cr(r),n=Vh(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ye=rt(e.firstChild),dn=n,Ee=!0,na=null,at=!0,t=Lf(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling;else{if(ka(),a===r){n=It(e,n,t);break e}ln(e,n,a,t)}n=n.child}return n;case 26:return Pi(e,n),e===null?(t=Tp(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ee||(n.stateNode=ap(n.type,n.pendingProps,Pn.current,n)):n.memoizedState=Tp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Mn(n),e===null&&Ee&&(a=n.stateNode=Cp(n.type,n.pendingProps,Pn.current),dn=n,at=!0,r=Ye,ba(n.type)?(bu=r,Ye=rt(a.firstChild)):Ye=r),ln(e,n,n.pendingProps.children,t),Pi(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((r=a=Ye)&&(a=nC(a,n.type,n.pendingProps,at),a!==null?(n.stateNode=a,dn=n,Ye=rt(a.firstChild),at=!1,r=!0):r=!1),r||ta(n)),Mn(n),r=n.type,o=n.pendingProps,d=e!==null?e.memoizedProps:null,a=o.children,cu(r,o)?a=null:d!==null&&cu(r,d)&&(n.flags|=32),n.memoizedState!==null&&(r=Zl(e,n,Zb,null,null,t),Gi._currentValue=r),Pi(e,n),ln(e,n,a,t),n.child;case 6:return e===null&&Ee&&((e=t=Ye)&&(t=tC(t,n.pendingProps,at),t!==null?(n.stateNode=t,dn=n,Ye=null,e=!0):e=!1),e||ta(n)),null;case 13:return Xh(e,n,t);case 4:return pt(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ja(n,null,a,t):ln(e,n,a,t),n.child;case 11:return jh(e,n,n.type,n.pendingProps,t);case 7:return a=n.pendingProps,Pi(e,n),ln(e,n,a,t),n.child;case 8:return ln(e,n,n.pendingProps.children,t),n.child;case 12:return ln(e,n,n.pendingProps.children,t),n.child;case 10:return Jh(e,n,t);case 9:return r=n.type._context,a=n.pendingProps.children,Oa(n),r=pn(r),a=a(r),n.flags|=1,ln(e,n,a,t),n.child;case 14:return Gh(e,n,n.type,n.pendingProps,t);case 15:return Ih(e,n,n.type,n.pendingProps,t);case 19:return Sc(e,n,t);case 31:return ry(e,n,t);case 22:return Lh(e,n,t,n.pendingProps);case 24:return Oa(n),a=pn(an),e===null?(r=Bl(),r===null&&(r=Ue,o=Wl(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=t),r=o),n.memoizedState={parent:a,cache:r},Gl(n),aa(n,an,r)):((e.lanes&t)!==0&&(Il(e,n),gr(n,null,null,t),pr()),r=e.memoizedState,o=n.memoizedState,r.parent!==a?(r={parent:a,cache:a},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),aa(n,an,a)):(a=o.cache,aa(n,an,a),a!==r.cache&&Dl(n,[an],t,!0))),ln(e,n,n.pendingProps.children,t),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=n.pendingProps,a.name!=null&&a.name!=="auto"?n.flags|=e===null?18882560:18874368:Ee&&wo(n),e!==null&&e.memoizedProps.name!==a.name?n.flags|=4194816:Pi(e,n),ln(e,n,a.children,t),n.child;case 29:throw n.pendingProps}throw Error(l(156,n.tag))}function Lt(e){e.flags|=4}function Pc(e,n,t,a,r){var o;if((o=(e.mode&32)!==0)&&(o=t===null?xp(n,a):xp(n,a)&&(a.src!==t.src||a.srcSet!==t.srcSet)),o){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(zm())e.flags|=8192;else throw Ba=Ao,jl}else e.flags&=-16777217}function em(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ap(n))if(zm())e.flags|=8192;else throw Ba=Ao,jl}function Vo(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Rd():536870912,e.lanes|=n,xi|=n)}function wr(e,n){if(!Ee)switch(e.tailMode){case"visible":break;case"collapsed":for(var t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(n=e.tail,t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&1206910976,a|=r.flags&1206910976,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function ly(e,n,t){var a=n.pendingProps;switch(kl(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bt(an),Ze(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(gi(n)?Lt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zl())),Ve(n),null;case 26:var r=n.type,o=n.memoizedState;return e===null?(Lt(n),o!==null?(Ve(n),em(n,o)):(Ve(n),Pc(n,r,null,a,t))):o?o!==e.memoizedState?(Lt(n),Ve(n),em(n,o)):(Ve(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&Lt(n),Ve(n),Pc(n,r,e,a,t)),null;case 27:if(Je(n),t=Pn.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Lt(n);else{if(!a){if(n.stateNode===null)throw Error(l(166));return Ve(n),n.subtreeFlags&=-33554433,null}e=Ne.current,gi(n)?kf(n):(e=Cp(r,a,t),n.stateNode=e,Lt(n))}return Ve(n),n.subtreeFlags&=-33554433,null;case 5:if(Je(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Lt(n);else{if(!a){if(n.stateNode===null)throw Error(l(166));return Ve(n),n.subtreeFlags&=-33554433,null}if(o=Ne.current,gi(n))kf(n);else{var d=Hr(Pn.current);switch(o){case 1:o=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":o=d.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o=typeof a.is=="string"?d.createElement(r,{is:a.is}):d.createElement(r)}}o[mn]=n,o[Nn]=a;e:for(d=n.child;d!==null;){if(d.tag===5||d.tag===6)o.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}n.stateNode=o;e:switch(yn(o,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Lt(n)}}return Ve(n),n.subtreeFlags&=-33554433,Pc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Lt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(l(166));if(e=Pn.current,gi(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,r=dn,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[mn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||$m(e.nodeValue,t)),e||ta(n,!0)}else e=Hr(e).createTextNode(a),e[mn]=n,n.stateNode=e}return Ve(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=gi(n),t!==null){if(e===null){if(!a)throw Error(l(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[mn]=n}else ka(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),e=!1}else t=zl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(Ln(n),n):(Ln(n),null);if((n.flags&128)!==0)throw Error(l(558))}return Ve(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=gi(n),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(l(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(l(317));r[mn]=n}else ka(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),r=!1}else r=zl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(Ln(n),n):(Ln(n),null)}return Ln(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==r&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Vo(n,n.updateQueue),Ve(n),null);case 4:return Ze(),e===null&&iu(n.stateNode.containerInfo),n.flags|=67108864,Ve(n),null;case 10:return Bt(n.type),Ve(n),null;case 19:if(Vl(n),a=n.memoizedState,a===null)return Ve(n),null;if(r=(n.flags&128)!==0,o=a.rendering,o===null)if(r)wr(a,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=Ho(e),o!==null){for(n.flags|=128,wr(a,!1),e=o.updateQueue,n.updateQueue=e,Vo(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Rf(t,e),t=t.sibling;return vr(n,vn.current&1|2),Ee&&Wt(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&qn()>os&&(n.flags|=128,r=!0,wr(a,!1),n.lanes=4194304)}else{if(!r)if(e=Ho(o),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Vo(n,e),wr(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!o.alternate&&!Ee)return Ve(n),null}else 2*qn()-a.renderingStartTime>os&&t!==536870912&&(n.flags|=128,r=!0,wr(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(e=a.last,e!==null?e.sibling=o:n.child=o,a.last=o)}if(a.tail!==null){e=a.tail;e:{for(t=e;t!==null;){if(t.alternate!==null){t=!1;break e}t=t.sibling}t=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=qn(),e.sibling=null,o=vn.current,o=r?o&1|2:o&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!t||Ee?vr(n,o):(t=o,de(gn,n),de(vn,t),Sn===null&&(Sn=n)),Ee&&Wt(n,a.treeForkCount),e}return Ve(n),null;case 22:case 23:return Ln(n),Ql(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),t=n.updateQueue,t!==null&&Vo(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&ke(Wa),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Bt(an),Ve(n),null;case 25:return null;case 30:return n.flags|=33554432,Ve(n),null}throw Error(l(156,n.tag))}function cy(e,n){switch(kl(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bt(an),Ze(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(Ln(n),n.alternate===null)throw Error(l(340));ka()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ln(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));ka()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Vl(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Ze(),null;case 10:return Bt(n.type),null;case 22:case 23:return Ln(n),Ql(),e!==null&&ke(Wa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Bt(an),null;case 25:return null;default:return null}}function nm(e,n){switch(kl(n),n.tag){case 3:Bt(an),Ze();break;case 26:case 27:case 5:Je(n);break;case 4:Ze();break;case 31:n.memoizedState!==null&&Ln(n);break;case 13:Ln(n);break;case 19:Vl(n);break;case 10:Bt(n.type);break;case 22:case 23:Ln(n),Ql(),e!==null&&ke(Wa);break;case 24:Bt(an)}}function Pr(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var r=a.next;t=r;do{if((t.tag&e)===e){a=void 0;var o=t.create,d=t.inst;a=o(),d.destroy=a}t=t.next}while(t!==r)}}catch(m){je(n,n.return,m)}}function da(e,n,t){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var o=r.next;a=o;do{if((a.tag&e)===e){var d=a.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,r=n;var C=t,A=m;try{A()}catch(k){je(r,C,k)}}}a=a.next}while(a!==o)}}catch(k){je(n,n.return,k)}}function tm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Ff(n,t)}catch(a){je(e,e.return,a)}}}function am(e,n,t){t.props=Ia(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){je(e,n,a)}}function Ct(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var r=e.stateNode,o=zt(e.memoizedProps,r);(r.ref===null||r.ref.name!==o)&&(r.ref=up(o)),a=r.ref;break;case 7:if(e.stateNode===null){var d=new Vn(e);y(e.child,!1,$y,d,void 0,void 0),e.stateNode=d}a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(m){je(e,n,m)}}function bn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(r){je(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){je(e,n,r)}else t.current=null}function Xo(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var t=0;t<n.length;t++)gp(e.stateNode,n[t])}function im(e){for(var n=e.return;n!==null&&(Ec(n)&&gp(e.stateNode,n.stateNode),!Tc(n));)n=n.return}function Tr(e){for(var n=e.return;n!==null&&(Ec(n)&&eC(e.stateNode,n.stateNode),!Tc(n));)n=n.return}function Tc(e){return e.tag===5||e.tag===3||e.tag===27}function Ec(e){return e&&e.tag===7&&e.stateNode!==null}function _c(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(r){je(e,e.return,r)}}function Rc(e,n,t){try{var a=e.stateNode;Oy(a,e.type,t,n),a[Nn]=n}catch(r){je(e,e.return,r)}}function rm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ac(e,n,t,a){var r=e.tag;if(r===5||r===6)r=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(r,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(r),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=vt)),Xo(e,a),Oe=!0;else if(r!==4&&(r===27&&(Xo(e,a),a=null,ba(e.type)&&(t=e.stateNode,n=null)),e=e.child,e!==null))for(Ac(e,n,t,a),e=e.sibling;e!==null;)Ac(e,n,t,a),e=e.sibling}function Zo(e,n,t,a){var r=e.tag;if(r===5||r===6)r=e.stateNode,n?t.insertBefore(r,n):t.appendChild(r),Xo(e,a),Oe=!0;else if(r!==4&&(r===27&&(Xo(e,a),a=null,ba(e.type)&&(t=e.stateNode)),e=e.child,e!==null))for(Zo(e,n,t,a),e=e.sibling;e!==null;)Zo(e,n,t,a),e=e.sibling}function om(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);yn(n,a,t),n[mn]=e,n[Nn]=t}catch(o){je(e,e.return,o)}}var Ko=!1,Un=null;function sm(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ko=!0)}var St=null;function lm(){var e=St;return St=null,e}var Hn=0;function Ti(e,n,t,a,r){return Hn=0,cm(e.child,n,t,a,r)}function cm(e,n,t,a,r){for(var o=!1;e!==null;){if(e.tag===5){var d=e.stateNode;if(a!==null){var m=fu(d);a.push(m),m.view&&(o=!0)}else o||fu(d).view&&(o=!0);Ko=!0,lp(d,Hn===0?n:n+"_"+Hn,t),Hn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r||cm(e.child,n,t,a,r)&&(o=!0));e=e.sibling}return o}function wt(e,n){for(;e!==null;)e.tag===5?cp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||wt(e.child,n)),e=e.sibling}function Jo(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Jo(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(l(544));var t=n.name;n=Ot(n.default,n.share),n!=="none"&&(Ti(e,t,n,null,!1)||wt(e.child,!1))}e=e.sibling}}function Mc(e,n){if(e.tag===30){var t=e.stateNode,a=e.memoizedProps,r=zt(a,t),o=Ot(a.default,t.paired?a.share:a.enter);o!=="none"?Ti(e,r,o,null,!1)?(Jo(e),t.paired||n||ki(e,a.onEnter)):wt(e.child,!1):Jo(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Mc(e,n),e=e.sibling;else Jo(e)}function Nc(e){if(Un!==null&&Un.size!==0){var n=Un;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.memoizedProps,a=t.name;if(a!=null&&a!=="auto"){var r=n.get(a);if(r!==void 0){var o=Ot(t.default,t.share);if(o!=="none"&&(Ti(e,a,o,null,!1)?(o=e.stateNode,r.paired=o,o.paired=r,ki(e,t.onShare)):wt(e.child,!1)),n.delete(a),n.size===0)break}}}Nc(e)}e=e.sibling}}}function kc(e){if(e.tag===30){var n=e.memoizedProps,t=zt(n,e.stateNode),a=Un!==null?Un.get(t):void 0,r=Ot(n.default,a!==void 0?n.share:n.exit);r!=="none"&&(Ti(e,t,r,null,!1)?a!==void 0?(r=e.stateNode,a.paired=r,r.paired=a,Un.delete(t),ki(e,n.onShare)):ki(e,n.onExit):wt(e.child,!1)),Un!==null&&Nc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)kc(e),e=e.sibling;else Un!==null&&Nc(e)}function um(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,t=zt(n,e.stateNode);n=Ot(n.default,n.update),e.flags&=-5,n!=="none"&&Ti(e,t,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&um(e);e=e.sibling}}function Hc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,wt(e.child,!1))}Hc(e)}e=e.sibling}}function $o(e){if(e.tag===30)e.stateNode.paired=null,wt(e.child,!1),Hc(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)$o(e),e=e.sibling;else Hc(e)}function dm(e){for(e=e.child;e!==null;)e.tag===30?wt(e.child,!1):(e.subtreeFlags&33554432)!==0&&dm(e),e=e.sibling}function zc(e,n,t,a,r,o,d){for(var m=!1;n!==null;){if(n.tag===5){var C=n.stateNode;if(o!==null&&Hn<o.length){var A=o[Hn],k=fu(C);(A.view||k.view)&&(m=!0);var W;if(W=(e.flags&4)===0)if(k.clip)W=!0;else{W=A.rect;var R=k.rect;W=W.y!==R.y||W.x!==R.x||W.height!==R.height||W.width!==R.width}W&&(e.flags|=4),k.abs?k=!A.abs:(A=A.rect,k=k.rect,k=A.height!==k.height||A.width!==k.width),k&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&lp(C,Hn===0?t:t+"_"+Hn,r),m&&(e.flags&4)!==0||(St===null&&(St=[]),St.push(C,Hn===0?a:a+"_"+Hn,n.memoizedProps)),Hn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&d?e.flags|=n.flags&32:zc(e,n.child,t,a,r,o,d)&&(m=!0));n=n.sibling}return m}function fm(e,n){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=e.stateNode,r=zt(t,a),o=Ot(t.default,t.update),d;d=e.memoizedState,e.memoizedState=null,a=e;var m=e.child;Hn=0,r=zc(a,m,r,r,o,d,!1),(e.flags&4)!==0&&r&&ki(e,t.onUpdate)}else(e.subtreeFlags&33554432)!==0&&fm(e);e=e.sibling}}var fn=!1,We=!1,Pt=!1,Oc=!1,hm=typeof WeakSet=="function"?WeakSet:Set,hn=null,Tt=!1,Er=!1,es=!1,Dc=!1;function uy(e,n,t){if(e=e.containerInfo,su=Ii,e=vf(e),wl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,d=r.focusNode;r=r.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var m=0,C=-1,A=-1,k=0,W=0,R=e,N=null;n:for(;;){for(var Y;R!==a||o!==0&&R.nodeType!==3||(C=m+o),R!==d||r!==0&&R.nodeType!==3||(A=m+r),R.nodeType===3&&(m+=R.nodeValue.length),(Y=R.firstChild)!==null;)N=R,R=Y;for(;;){if(R===e)break n;if(N===a&&++k===o&&(C=m),N===d&&++W===r&&(A=m),(Y=R.nextSibling)!==null)break;R=N,N=R.parentNode}R=Y}a=C===-1||A===-1?null:{start:C,end:A}}else a=null}a=a||{start:0,end:0}}else a=null;for(lu={focusedElem:e,selectionRange:a},Ii=!1,t=(t&335544064)===t,hn=n,n=t?9270:1024;hn!==null;){if(e=hn,t&&(a=e.deletions,a!==null))for(o=0;o<a.length;o++)t&&kc(a[o]);if(e.alternate===null&&(e.flags&2)!==0)t&&sm(e),ns(t);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&t&&kc(a),ns(t);continue}else if(a!==null&&a.memoizedState!==null){t&&sm(e),ns(t);continue}}a=e.child,(e.subtreeFlags&n)!==0&&a!==null?(a.return=e,hn=a):(t&&um(e),ns(t))}}Un=null}function ns(e){for(;hn!==null;){var n=hn,t=e,a=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((r&1024)!==0&&a!==null){t=void 0,r=a.memoizedProps,a=a.memoizedState;var o=n.stateNode;try{var d=Ia(n.type,r);t=o.getSnapshotBeforeUpdate(d,a),o.__reactInternalSnapshotBeforeUpdate=t}catch(m){je(n,n.return,m)}}break;case 3:if((r&1024)!==0){if(a=n.stateNode.containerInfo,t=a.nodeType,t===9)pu(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":pu(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&a!==null&&(t=zt(a.memoizedProps,a.stateNode),r=n.memoizedProps,r=Ot(r.default,r.update),r!=="none"&&Ti(a,t,r,a.memoizedState=[],!0));break;default:if((r&1024)!==0)throw Error(l(163))}if(a=n.sibling,a!==null){a.return=n.return,hn=a;break}hn=n.return}}function mm(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Et(e,t),a&4&&Pr(5,t);break;case 1:if(Et(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(d){je(t,t.return,d)}else{var r=Ia(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){je(t,t.return,d)}}a&64&&tm(t),a&512&&Ct(t,t.return);break;case 3:if(Et(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Ff(e,n)}catch(d){je(t,t.return,d)}}break;case 27:n===null&&a&4&&om(t);case 26:case 5:Et(e,t),n===null&&a&4&&_c(t),a&512&&Ct(t,t.return);break;case 12:Et(e,t);break;case 31:Et(e,t),a&4&&bm(e,t);break;case 13:Et(e,t),a&4&&ym(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=wy.bind(null,t),aC(e,t))));break;case 22:if(a=t.memoizedState!==null||fn,!a){var o=n!==null&&n.memoizedState!==null||We;n=fn,r=We,fn=a,(We=o)&&!r?(a=2,(t.subtreeFlags&8772)!==0&&(a|=1),dt(e,t,a)):Et(e,t),fn=n,We=r}break;case 30:Et(e,t),a&512&&Ct(t,t.return);break;case 7:a&512&&Ct(t,t.return);default:Et(e,t)}}function Wc(e,n){for(e=e.child;e!==null;)pm(e,n),e=e.sibling}function pm(e,n){switch(e.tag){case 5:case 26:try{var t=e.stateNode;if(n){var a=t.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var r=e.stateNode,o=e.memoizedProps.style,d=o!=null&&o.hasOwnProperty("display")?o.display:null;r.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(C){je(e,e.return,C)}qc(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Oe=!0}catch(C){je(e,e.return,C)}break;case 18:try{var m=e.stateNode;n?sp(m,!0):sp(e.stateNode,!1)}catch(C){je(e,e.return,C)}break;case 22:case 23:e.memoizedState===null&&Wc(e,n);break;default:Wc(e,n)}}function qc(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var t=e,a=n;switch(t.tag){case 4:pm(t,a);break e;case 22:t.memoizedState===null&&qc(t,a);break e;default:qc(t,a)}}e=e.sibling}}function gm(e){var n=e.alternate;n!==null&&(e.alternate=null,gm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ro(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,zn=!1;function ct(e,n,t){for(t=t.child;t!==null;)vm(e,n,t),t=t.sibling}function vm(e,n,t){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(Vi,t)}catch{}switch(t.tag){case 26:We||bn(t,n),ct(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!We&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:We||bn(t,n),Tr(t);var a=Ke,r=zn;ba(t.type)&&(Ke=t.stateNode,zn=!1),ct(e,n,t),Sp(t.stateNode,t.type,t.memoizedProps),Ke=a,zn=r;break;case 5:We||bn(t,n),Tr(t);case 6:if(t.tag===6&&Tr(t),a=Ke,r=zn,Ke=null,ct(e,n,t),Ke=a,zn=r,Ke!==null)if(zn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(t.stateNode),Oe=!0}catch(o){je(t,n,o)}else try{Ke.removeChild(t.stateNode),Oe=!0}catch(o){je(t,n,o)}break;case 18:Ke!==null&&(zn?(e=Ke,op(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Li(e)):op(Ke,t.stateNode));break;case 4:a=Ke,r=zn,Ke=t.stateNode.containerInfo,zn=!0,ct(e,n,t),Ke=a,zn=r;break;case 0:case 11:case 14:case 15:da(2,t,n),We||da(4,t,n),ct(e,n,t);break;case 1:We||(bn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&am(t,n,a)),ct(e,n,t);break;case 21:ct(e,n,t);break;case 22:We=(a=We)||t.memoizedState!==null,ct(e,n,t),We=a;break;case 30:bn(t,n),ct(e,n,t);break;case 7:We||bn(t,n),ct(e,n,t);break;default:ct(e,n,t)}}function bm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Li(e)}catch(t){je(n,n.return,t)}}}function ym(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Li(e)}catch(t){je(n,n.return,t)}}function dy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new hm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new hm),n;default:throw Error(l(435,e.tag))}}function ts(e,n){var t=dy(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var r=Py.bind(null,e,a);a.then(r,r)}})}function Rn(e,n,t){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r],d=e,m=n,C=m;e:for(;C!==null;){switch(C.tag){case 27:if(ba(C.type)){Ke=C.stateNode,zn=!1;break e}break;case 5:Ke=C.stateNode,zn=!1;break e;case 3:case 4:Ke=C.stateNode.containerInfo,zn=!0;break e}C=C.return}if(Ke===null)throw Error(l(160));vm(d,m,o),Ke=null,zn=!1,d=o.alternate,d!==null&&(d.return=null),o.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Cm(n,e,t),n=n.sibling}var ut=null;function Cm(e,n,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(r&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var o=0;o<a.length;o++){var d=a[o];d.ref.impl=d.nextImpl}Rn(n,e,t),xn(e),r&4&&(da(3,e,e.return),Pr(3,e),da(5,e,e.return));break;case 1:Rn(n,e,t),xn(e),r&512&&(We||a===null||bn(a,a.return)),r&64&&fn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:if(o=ut,Rn(n,e,t),xn(e),r&512&&(We||a===null||bn(a,a.return)),r&4)if(r=a!==null?a.memoizedState:null,t=e.memoizedState,a===null)if(t===null)if(e.stateNode===null)if(fn)e.stateNode=ap(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,t=e.memoizedProps,r=o.ownerDocument||o;n:switch(n){case"title":a=r.getElementsByTagName("title")[0],(!a||a[Ki]||a[mn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=r.createElement(n),r.head.insertBefore(a,r.querySelector("head > title"))),yn(a,n,t),a[mn]=e,un(a),n=a;break e;case"link":if(o=Rp("link","href",r).get(n+(t.href||""))){for(d=0;d<o.length;d++)if(a=o[d],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(d,1);break n}}a=r.createElement(n),yn(a,n,t),r.head.appendChild(a);break;case"meta":if(o=Rp("meta","content",r).get(n+(t.content||""))){for(d=0;d<o.length;d++)if(a=o[d],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(d,1);break n}}a=r.createElement(n),yn(a,n,t),r.head.appendChild(a);break;default:throw Error(l(468,n))}a[mn]=e,un(a),n=a}e.stateNode=n}else fn||wu(o,e.type,e.stateNode);else e.stateNode=_p(o,t,e.memoizedProps);else r!==t?(r===null?(n=a.stateNode,n===null||We||n.parentNode.removeChild(n)):r.count--,t===null?fn||wu(o,e.type,e.stateNode):_p(o,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Rc(e,e.memoizedProps,a.memoizedProps);break;case 27:Rn(n,e,t),xn(e),r&512&&(We||a===null||bn(a,a.return)),a!==null&&r&4&&Rc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(o=Pt,Pt=!1,Rn(n,e,t),Pt=o,xn(e),r&512&&(We||a===null||bn(a,a.return)),e.flags&32){n=e.stateNode;try{oi(n,""),Oe=!0}catch(k){je(e,e.return,k)}}r&4&&e.stateNode!=null&&(n=e.memoizedProps,Rc(e,n,a!==null?a.memoizedProps:n)),r&1024&&(Oc=!0);break;case 6:if(Rn(n,e,t),xn(e),r&4){if(e.stateNode===null)throw Error(l(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n,Oe=!0}catch(k){je(e,e.return,k)}}break;case 3:if(Oe=!1,vs=null,o=ut,ut=zr(n.containerInfo),Rn(n,e,t),ut=o,xn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Li(n.containerInfo)}catch(k){je(e,e.return,k)}Oc&&(Oc=!1,Sm(e)),Oe=!1;break;case 4:r=Pt,Pt=fn,a=jd(),o=ut,ut=zr(e.stateNode.containerInfo),Rn(n,e,t),xn(e),ut=o,Oe&&Er&&(es=!0),Oe=a,Pt=r;break;case 12:Rn(n,e,t),xn(e);break;case 31:Rn(n,e,t),xn(e),r&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ts(e,n)));break;case 13:Rn(n,e,t),xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rs=qn()),r&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ts(e,n)));break;case 22:o=e.memoizedState!==null,d=a!==null&&a.memoizedState!==null;var m=fn,C=We,A=Pt;fn=m||o,Pt=A||o,We=C||d,Rn(n,e,t),We=C,Pt=A,fn=m,xn(e),r&8192&&(n=e.stateNode,n._visibility=o?n._visibility&-2:n._visibility|1,!o||a===null||d||fn||We||(n=d||We,t=fn,a=We,fn=o||fn,We=n,fa(e,2),fn=t,We=a),!o&&Pt||Wc(e,o)),r&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,ts(e,t))));break;case 19:Rn(n,e,t),xn(e),r&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ts(e,n)));break;case 30:r&512&&(We||a===null||bn(a,a.return)),r=jd(),o=Er,d=(t&335544064)===t,m=e.memoizedProps,Er=d&&Ot(m.default,m.update)!=="none",Rn(n,e,t),xn(e),d&&a!==null&&Oe&&(e.flags|=4),Er=o,Oe=r;break;case 21:break;case 7:r&512&&(We||a===null||bn(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:Rn(n,e,t),xn(e)}}function xn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(rm(a)){t=a;break}a=a.return}a=null;for(var r=e.return;r!==null;){if(Ec(r)){var o=r.stateNode;a===null?a=[o]:a.push(o)}if(Tc(r))break;r=r.return}var d=a;if(t==null)throw Error(l(160));switch(t.tag){case 27:var m=t.stateNode,C=xc(e);Zo(e,C,m,d);break;case 5:var A=t.stateNode;t.flags&32&&(oi(A,""),t.flags&=-33);var k=xc(e);Zo(e,k,A,d);break;case 3:case 4:var W=t.stateNode.containerInfo,R=xc(e);Ac(e,R,W,d);break;default:throw Error(l(161))}}catch(N){je(e,e.return,N)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Sm(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ii=!0,n.reset(),Ii=!1),e=e.sibling}}function Ei(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)wm(n,e),n=n.sibling;else fm(n)}function wm(e,n){var t=e.alternate;if(t===null)Mc(e,!1);else switch(e.tag){case 3:if(Dc=Tt=!1,lm(),Ei(n,e),!Tt&&!es){if(e=St,e!==null)for(var a=0;a<e.length;a+=3){t=e[a];var r=e[a+1];cp(t,e[a+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+r+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Dc=!0}St=null;break;case 5:Ei(n,e);break;case 4:a=Tt,Tt=!1,Ei(n,e),Tt&&(es=!0),Tt=a;break;case 22:e.memoizedState===null&&(t.memoizedState!==null?Mc(e,!1):Ei(n,e));break;case 30:a=Tt,r=lm(),Tt=!1,Ei(n,e),Tt&&(e.flags|=4);var o=e.memoizedProps,d=e.stateNode;n=zt(o,d),d=zt(t.memoizedProps,d);var m=Ot(o.default,o.update);m==="none"?n=!1:(o=t.memoizedState,t.memoizedState=null,t=e.child,Hn=0,n=zc(e,t,n,d,m,o,!0),Hn!==(o===null?0:o.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(ki(e,e.memoizedProps.onUpdate),St=r):r!==null&&(r.push.apply(r,St),St=r),Tt=(e.flags&32)!==0?!0:a;break;default:Ei(n,e)}}function Et(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mm(e,n.alternate,n),n=n.sibling}function fa(e,n){for(e=e.child;e!==null;){var t=e,a=n;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),fa(t,a);break;case 1:bn(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&am(t,t.return,r),fa(t,a);break;case 27:(a&2)!==0&&Sp(t.stateNode,t.type,t.memoizedProps);case 5:bn(t,t.return),t.tag!==5&&t.tag!==27||Tr(t),fa(t,a);break;case 6:Tr(t);break;case 26:bn(t,t.return),r=t.stateNode,t.memoizedState!==null||r===null||We||r.parentNode.removeChild(r),fa(t,a);break;case 22:t.memoizedState===null&&fa(t,a);break;case 30:bn(t,t.return),fa(t,a);break;case 7:bn(t,t.return);default:fa(t,a)}e=e.sibling}}function dt(e,n,t){for(t=(n.subtreeFlags&8772)!==0?t:t&-2,n=n.child;n!==null;){var a=n.alternate,r=e,o=n,d=o.flags,m=(t&1)!==0;switch(o.tag){case 0:case 11:case 15:dt(r,o,t),Pr(4,o);break;case 1:if(dt(r,o,t),a=o,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(k){je(a,a.return,k)}if(a=o,r=a.updateQueue,r!==null){var C=a.stateNode;try{var A=r.shared.hiddenCallbacks;if(A!==null)for(r.shared.hiddenCallbacks=null,r=0;r<A.length;r++)Uf(A[r],C)}catch(k){je(a,a.return,k)}}m&&d&64&&tm(o),Ct(o,o.return);break;case 27:(t&2)!==0&&om(o);case 5:o.tag!==5&&o.tag!==27||im(o),dt(r,o,t),m&&a===null&&d&4&&_c(o),Ct(o,o.return);break;case 6:im(o);break;case 26:C=o.stateNode,o.memoizedState!==null||C===null||fn||wu(zr(C.ownerDocument),o.type,C),dt(r,o,t),m&&a===null&&d&4&&_c(o),Ct(o,o.return);break;case 12:dt(r,o,t);break;case 31:dt(r,o,t),m&&d&4&&bm(r,o);break;case 13:dt(r,o,t),m&&d&4&&ym(r,o);break;case 22:o.memoizedState===null&&dt(r,o,t),Ct(o,o.return);break;case 30:dt(r,o,t),Ct(o,o.return);break;case 7:Ct(o,o.return);default:dt(r,o,t)}n=n.sibling}}function Bc(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ur(t))}function jc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ur(e))}function it(e,n,t,a){var r=(t&335544064)===t;if(n.subtreeFlags&(r?10262:10256))for(n=n.child;n!==null;)Pm(e,n,t,a),n=n.sibling;else r&&dm(n)}function Pm(e,n,t,a){var r=(t&335544064)===t;r&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&$o(n);var o=n.flags;switch(n.tag){case 0:case 11:case 15:it(e,n,t,a),o&2048&&Pr(9,n);break;case 1:it(e,n,t,a);break;case 3:it(e,n,t,a),r&&Dc&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),o&2048&&(o=null,n.alternate!==null&&(o=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==o&&(n.refCount++,o!=null&&ur(o)));break;case 12:if(o&2048){it(e,n,t,a),o=n.stateNode;try{var d=n.memoizedProps,m=d.id,C=d.onPostCommit;typeof C=="function"&&C(m,n.alternate===null?"mount":"update",o.passiveEffectDuration,-0)}catch(A){je(n,n.return,A)}}else it(e,n,t,a);break;case 31:it(e,n,t,a);break;case 13:it(e,n,t,a);break;case 23:break;case 22:d=n.stateNode,m=n.alternate,n.memoizedState!==null?(r&&m!==null&&m.memoizedState===null&&$o(m),d._visibility&2?it(e,n,t,a):_r(e,n)):(r&&m!==null&&m.memoizedState!==null&&$o(n),d._visibility&2?it(e,n,t,a):(d._visibility|=2,_i(e,n,t,a,(n.subtreeFlags&10256)!==0||!1))),o&2048&&Bc(m,n);break;case 24:it(e,n,t,a),o&2048&&jc(n.alternate,n);break;case 30:r&&(o=n.alternate,o!==null&&(wt(o.child,!0),wt(n.child,!0))),it(e,n,t,a);break;default:it(e,n,t,a)}}function _i(e,n,t,a,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var o=e,d=n,m=t,C=a,A=d.flags;switch(d.tag){case 0:case 11:case 15:_i(o,d,m,C,r),Pr(8,d);break;case 23:break;case 22:var k=d.stateNode;d.memoizedState!==null?k._visibility&2?_i(o,d,m,C,r):_r(o,d):(k._visibility|=2,_i(o,d,m,C,r)),r&&A&2048&&Bc(d.alternate,d);break;case 24:_i(o,d,m,C,r),r&&A&2048&&jc(d.alternate,d);break;default:_i(o,d,m,C,r)}n=n.sibling}}function _r(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,r=a.flags;switch(a.tag){case 22:_r(t,a),r&2048&&Bc(a.alternate,a);break;case 24:_r(t,a),r&2048&&jc(a.alternate,a);break;default:_r(t,a)}n=n.sibling}}var La=8192;function Ua(e,n,t){if(e.subtreeFlags&La)for(e=e.child;e!==null;)Tm(e,n,t),e=e.sibling}function Tm(e,n,t){switch(e.tag){case 26:Ua(e,n,t),e.flags&La&&(e.memoizedState!==null?vC(t,ut,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Np(t,e)));break;case 5:Ua(e,n,t),e.flags&La&&(e=e.stateNode,(n&335544128)===n&&Np(t,e));break;case 3:case 4:var a=ut;ut=zr(e.stateNode.containerInfo),Ua(e,n,t),ut=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=La,La=16777216,Ua(e,n,t),La=a):Ua(e,n,t));break;case 30:if((e.flags&La)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var r=e.stateNode;r.paired=null,Un===null&&(Un=new Map),Un.set(a,r)}Ua(e,n,t);break;default:Ua(e,n,t)}}function Em(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Rr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];hn=a,Rm(a,e)}Em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_m(e),e=e.sibling}function _m(e){switch(e.tag){case 0:case 11:case 15:Rr(e),e.flags&2048&&da(9,e,e.return);break;case 3:Rr(e);break;case 12:Rr(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,as(e)):Rr(e);break;default:Rr(e)}}function as(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];hn=a,Rm(a,e)}Em(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:da(8,n,n.return),as(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,as(n));break;default:as(n)}e=e.sibling}}function Rm(e,n){for(;hn!==null;){var t=hn;switch(t.tag){case 0:case 11:case 15:da(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ur(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,hn=a;else e:for(t=e;hn!==null;){a=hn;var r=a.sibling,o=a.return;if(gm(a),a===t){hn=null;break e}if(r!==null){r.return=o,hn=r;break e}hn=o}}}var fy={getCacheForType:function(e){var n=pn(an),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return pn(an).controller.signal}},hy=typeof WeakMap=="function"?WeakMap:Map,De=0,Ue=null,_e=null,xe=0,Be=0,Fn=null,ha=!1,Ri=!1,Gc=!1,Ut=0,nn=0,ma=0,Fa=0,is=0,Qn=0,xi=0,xr=null,On=null,Ic=!1,rs=0,xm=0,os=1/0,ss=null,pa=null,$e=0,ft=null,Qa=null,_t=0,Lc=0,Uc=null,Am=null,Ai=null,Mi=null,Ni=null,Ar=0,ls=null;function Yn(){return(De&2)!==0&&xe!==0?xe&-xe:j.T!==null?eu():Nd()}function Mm(){if(Qn===0)if((xe&536870912)===0||Ee){var e=no;no<<=1,(no&3932160)===0&&(no=262144),Qn=e}else Qn=536870912;return e=gn.current,e!==null&&(e.flags|=32),Qn}function ki(e,n){if(n!=null){var t=e.stateNode,a=t.ref;a===null&&(a=t.ref=up(zt(e.memoizedProps,t))),Mi===null&&(Mi=[]),Mi.push(n.bind(null,a))}}function Dn(e,n,t){(e===Ue&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Hi(e,0),ga(e,xe,Qn,!1)),Zi(e,t),((De&2)===0||e!==Ue)&&(e===Ue&&((De&2)===0&&(Fa|=t),nn===4&&ga(e,xe,Qn,!1)),Rt(e))}function Nm(e,n,t){if((De&6)!==0)throw Error(l(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Xi(e,n),r=a?gy(e,n):Qc(e,n,!0),o=a;do{if(r===0){Ri&&!a&&ga(e,n,0,!1);break}else{if(t=e.current.alternate,o&&!my(t)){r=Qc(e,n,!1),o=!1;continue}if(r===2){if(o=n,e.errorRecoveryDisabledLanes&o)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var m=e;r=xr;var C=m.current.memoizedState.isDehydrated;if(C&&(Hi(m,d).flags|=256),d=Qc(m,d,!1),d!==2&&d!==6){if(Gc&&!C){m.errorRecoveryDisabledLanes|=o,Fa|=o,r=4;break e}o=On,On=r,o!==null&&(On===null?On=o:On.push.apply(On,o))}r=d}if(o=!1,r!==2)continue}}if(r===1){Hi(e,0),ga(e,n,0,!0);break}e:{switch(a=e,o=r,o){case 0:case 1:throw Error(l(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ga(a,n,Qn,!ha);break e;case 2:On=null;break;case 3:case 5:break;default:throw Error(l(329))}if((n&62914560)===n&&(r=rs+300-qn(),10<r)){if(ga(a,n,Qn,!ha),ao(a,0,!0)!==0)break e;_t=n,a.timeoutHandle=du(km.bind(null,a,t,On,ss,Ic,n,Qn,Fa,xi,ha,o,"Throttled",-0,0),r);break e}km(a,t,On,ss,Ic,n,Qn,Fa,xi,ha,o,null,-0,0)}}break}while(!0);Rt(e)}function km(e,n,t,a,r,o,d,m,C,A,k,W,R,N){e.timeoutHandle=-1;var Y=n.subtreeFlags,oe=(o&335544064)===o;if(W=null,(oe||Y&8192||(Y&16785408)===16785408)&&(W={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vt},Un=null,Tm(n,o,W),oe&&(Y=W,oe=e.containerInfo,oe=(oe.nodeType===9?oe:oe.ownerDocument).__reactViewTransition,oe!=null&&(Y.count++,Y.waitingForViewTransition=!0,Y=Wr.bind(Y),oe.finished.then(Y,Y))),Y=(o&62914560)===o?rs-qn():(o&4194048)===o?xm-qn():0,Y=bC(W,Y),Y!==null)){_t=o,e.cancelPendingCommit=Y(jm.bind(null,e,n,o,t,a,r,d,m,C,A,k,W,null,R,N)),ga(e,o,d,!A);return}jm(e,n,o,t,a,r,d,m,C,A,k,W)}function my(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var r=t[a],o=r.getSnapshot;r=r.value;try{if(!In(o(),r))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ga(e,n,t,a){n=_d(e,n),n&=~is,n&=~Fa,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var r=n;0<r;){var o=31-jn(r),d=1<<o;a[o]=-1,r&=~d}t!==0&&xd(e,t,n)}function cs(){return(De&6)===0?(Mr(0),!1):!0}function Fc(){if(_e!==null){if(Be===0)var e=_e.return;else e=_e,qt=Ha=null,$l(e),yi=null,hr=0,e=_e;for(;e!==null;)nm(e.alternate,e),e=e.return;_e=null}}function Hi(e,n){var t=e.timeoutHandle;return t!==-1&&(e.timeoutHandle=-1,qy(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),_t=0,Fc(),Ue=e,_e=t=Dt(e.current,null),xe=n,Be=0,Fn=null,ha=!1,Ri=Xi(e,n),Gc=!1,xi=Qn=is=Fa=ma=nn=0,On=xr=null,Ic=!1,Ut=_d(e,n),vo(),t}function Hm(e,n){Pe=null,j.H=Io,n===bi||n===xo?(n=jf(),Be=3):n===jl?(n=jf(),Be=4):Be=n===mc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Fn=n,_e===null&&(nn=1,Lo(e,et(n,e.current)))}function zm(){var e=gn.current;return e===null?!0:(xe&4194048)===xe?Sn===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Sn:!1}function Om(){var e=j.H;return j.H=Io,e===null?Io:e}function Dm(){var e=j.A;return j.A=fy,e}function us(){nn=4,ha||(xe&4194048)!==xe&&gn.current!==null||(Ri=!0),(ma&134217727)===0&&(Fa&134217727)===0||Ue===null||ga(Ue,xe,Qn,!1)}function Qc(e,n,t){var a=De;De|=2;var r=Om(),o=Dm();(Ue!==e||xe!==n)&&(ss=null,Hi(e,n)),n=!1;var d=nn;e:do try{if(Be!==0&&_e!==null){var m=_e,C=Fn;switch(Be){case 8:Fc(),d=6;break e;case 3:case 2:case 9:case 6:gn.current===null&&(n=!0);var A=Be;if(Be=0,Fn=null,zi(e,m,C,A),t&&Ri){d=0;break e}break;default:A=Be,Be=0,Fn=null,zi(e,m,C,A)}}py(),d=nn;break}catch(k){Hm(e,k)}while(!0);return n&&e.shellSuspendCounter++,qt=Ha=null,De=a,j.H=r,j.A=o,_e===null&&(Ue=null,xe=0,vo()),d}function py(){for(;_e!==null;)Wm(_e)}function gy(e,n){var t=De;De|=2;var a=Om(),r=Dm();Ue!==e||xe!==n?(ss=null,os=qn()+500,Hi(e,n)):Ri=Xi(e,n);e:do try{if(Be!==0&&_e!==null){n=_e;var o=Fn;n:switch(Be){case 1:Be=0,Fn=null,zi(e,n,o,1);break;case 2:case 9:if(qf(o)){Be=0,Fn=null,qm(n);break}n=function(){Be!==2&&Be!==9||Ue!==e||(Be=7),Rt(e)},o.then(n,n);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:qf(o)?(Be=0,Fn=null,qm(n)):(Be=0,Fn=null,zi(e,n,o,7));break;case 5:var d=null;switch(_e.tag){case 26:d=_e.memoizedState;case 5:case 27:var m=_e;if(d?Ap(d):m.stateNode.complete){Be=0,Fn=null;var C=m.sibling;if(C!==null)_e=C;else{var A=m.return;A!==null?(_e=A,ds(A)):_e=null}break n}}Be=0,Fn=null,zi(e,n,o,5);break;case 6:Be=0,Fn=null,zi(e,n,o,6);break;case 8:Fc(),nn=6;break e;default:throw Error(l(462))}}vy();break}catch(k){Hm(e,k)}while(!0);return qt=Ha=null,j.H=a,j.A=r,De=t,_e!==null?0:(Ue=null,xe=0,vo(),nn)}function vy(){for(;_e!==null&&!zv();)Wm(_e)}function Wm(e){var n=$h(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,n===null?ds(e):_e=n}function qm(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Qh(t,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Qh(t,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:$l(n);var a=n;a===dn&&(Ee?(Po(a),a.tag===5&&a.stateNode!=null&&(Ye=a.stateNode)):(Po(a),Ee=!0));default:nm(t,n),n=_e=Rf(n,Ut),n=$h(t,n,Ut)}e.memoizedProps=e.pendingProps,n===null?ds(e):_e=n}function zi(e,n,t,a){qt=Ha=null,$l(n),yi=null,hr=0;var r=n.return;try{if(iy(e,r,n,t,xe)){nn=1,Lo(e,et(t,e.current)),_e=null;return}}catch(o){if(r!==null)throw _e=r,o;nn=1,Lo(e,et(t,e.current)),_e=null;return}n.flags&32768?(Ee||a===1?e=!0:Ri||(xe&536870912)!==0?e=!1:(ha=e=!0,(a===2||a===9||a===3||a===6)&&(a=gn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Bm(n,e)):ds(n)}function ds(e){var n=e;do{if((n.flags&32768)!==0){Bm(n,ha);return}e=n.return;var t=ly(n.alternate,n,Ut);if(t!==null){_e=t;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);nn===0&&(nn=5)}function Bm(e,n){do{var t=cy(e.alternate,e);if(t!==null){t.flags&=32767,_e=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=t}while(e!==null);nn=6,_e=null}function jm(e,n,t,a,r,o,d,m,C,A,k,W){e.cancelPendingCommit=null;do fs();while($e!==0);if((De&6)!==0)throw Error(l(327));if(n!==null){if(n===e.current)throw Error(l(177));e===Ue&&(_e=Ue=null,xe=0),Qa=n,ft=e,_t=t,Uc=r,Am=a,by(e,n,t,d,m,C,W)}}function by(e,n,t,a,r,o,d){var m=n.lanes|n.childLanes;if(Lc=m,m|=Rl,Uv(e,t,m,a,r,o),Mi=null,(t&335544064)===t?(Ni=Qb(e),a=10262):(Ni=null,a=10256),(n.subtreeFlags&a)!==0||(n.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,Ty($r,function(){return Zc(),null})):(e.callbackNode=null,e.callbackPriority=0),Ko=!1,a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=j.T,j.T=null,r=J.p,J.p=2,o=De,De|=4;try{uy(e,n,t)}finally{De=o,J.p=r,j.T=a}}$e=1,Ko?Ai=Uy(d,e.containerInfo,Ni,Yc,Vc,Cy,Xc,Zc,yy):(Yc(),Vc(),Xc())}function yy(e){if($e!==0){var n=ft.onRecoverableError;n(e,{componentStack:null})}}function Cy(){$e===3&&($e=0,wm(Qa,ft),$e=4)}function Yc(){if($e===1){$e=0;var e=ft,n=Qa,t=_t,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var r=J.p;J.p=2;var o=De;De|=4;try{Er=es=!1,Cm(n,e,t),t=lu;var d=vf(e.containerInfo),m=t.focusedElem,C=t.selectionRange;if(d!==m&&m&&m.ownerDocument&&gf(m.ownerDocument.documentElement,m)){if(C!==null&&wl(m)){var A=C.start,k=C.end;if(k===void 0&&(k=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(k,m.value.length);else{var W=m.ownerDocument||document,R=W&&W.defaultView||window;if(R.getSelection){var N=R.getSelection(),Y=m.textContent.length,oe=Math.min(C.start,Y),Te=C.end===void 0?oe:Math.min(C.end,Y);!N.extend&&oe>Te&&(d=Te,Te=oe,oe=d);var x=pf(m,oe),P=pf(m,Te);if(x&&P&&(N.rangeCount!==1||N.anchorNode!==x.node||N.anchorOffset!==x.offset||N.focusNode!==P.node||N.focusOffset!==P.offset)){var M=W.createRange();M.setStart(x.node,x.offset),N.removeAllRanges(),oe>Te?(N.addRange(M),N.extend(P.node,P.offset)):(M.setEnd(P.node,P.offset),N.addRange(M))}}}}for(W=[],N=m;N=N.parentNode;)N.nodeType===1&&W.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<W.length;m++){var D=W[m];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Ii=!!su,lu=su=null}finally{De=o,J.p=r,j.T=a}}e.current=n,$e=2}}function Vc(){if($e===2){$e=0;var e=ft,n=Qa,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=j.T,j.T=null;var a=J.p;J.p=2;var r=De;De|=4;try{mm(e,n.alternate,n)}finally{De=r,J.p=a,j.T=t}}$e=3}}function Xc(){if($e===4||$e===3){$e=0;var e=Ai;Ai=null,Ov();var n=ft,t=Qa,a=_t,r=Am,o=(a&335544064)===a?10262:10256;if((t.subtreeFlags&o)!==0||(t.flags&o)!==0?$e=5:($e=0,Qa=ft=null,Gm(n,n.pendingLanes)),o=n.pendingLanes,o===0&&(pa=null),il(a),t=t.stateNode,Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(Vi,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=j.T,o=J.p,J.p=2,j.T=null;try{for(var d=n.onRecoverableError,m=0;m<r.length;m++){var C=r[m];d(C.value,{componentStack:C.stack})}}finally{j.T=t,J.p=o}}if(r=Mi,d=Ni,Ni=null,r!==null&&(Mi=null,d===null&&(d=[]),e!==null))for(C=0;C<r.length;C++)t=(0,r[C])(d),t!==void 0&&e.finished.finally(t);(_t&3)!==0&&fs(),Rt(n),o=n.pendingLanes,(a&261930)!==0&&(o&42)!==0?n===ls?Ar++:(Ar=0,ls=n):(Ar=0,ls=null),Mr(0)}}function Gm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ur(n)))}function fs(){return Ai!==null&&(Ai.skipTransition(),Ai=null),Yc(),Vc(),Xc(),Zc()}function Zc(){if($e!==5)return!1;var e=ft,n=Lc;Lc=0;var t=il(_t),a=j.T,r=J.p;try{J.p=32>t?32:t,j.T=null,t=Uc,Uc=null;var o=ft,d=_t;if($e=0,Qa=ft=null,_t=0,(De&6)!==0)throw Error(l(331));var m=De;if(De|=4,_m(o.current),Pm(o,o.current,d,t),De=m,Mr(0,!1),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(Vi,o)}catch{}return!0}finally{J.p=r,j.T=a,Gm(e,n)}}function Im(e,n,t){n=et(t,n),n=hc(e.stateNode,n,2),e=sa(e,n,2),e!==null&&(Zi(e,2),Rt(e))}function je(e,n,t){if(e.tag===3)Im(e,e,t);else for(;n!==null;){if(n.tag===3){Im(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pa===null||!pa.has(a))){e=et(t,e),t=qh(2),a=sa(n,t,2),a!==null&&(Bh(t,a,n,e),Zi(a,2),Rt(a));break}}n=n.return}}function Kc(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new hy;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(Gc=!0,r.add(t),e=Sy.bind(null,e,n,t),n.then(e,e))}function Sy(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ue===e&&(xe&t)===t&&((nn===4||nn===3&&(xe&62914560)===xe&&300>qn()-rs)&&(De&2)===0?Hi(e,0):is|=t,xi===xe&&(xi=0)),Rt(e)}function Lm(e,n){n===0&&(n=Rd()),e=Ma(e,n),e!==null&&(Zi(e,n),Rt(e))}function wy(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Lm(e,t)}function Py(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(l(314))}a!==null&&a.delete(n),Lm(e,t)}function Ty(e,n){return el(e,n)}var Oi=null,Di=null,Jc=!1,hs=!1,$c=!1,va=0;function Rt(e){e!==Di&&e.next===null&&(Di===null?Oi=Di=e:Di=Di.next=e),hs=!0,Jc||(Jc=!0,_y())}function Mr(e,n){if(!$c&&hs){$c=!0;do for(var t=!1,a=Oi;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var o=0;else{var d=a.suspendedLanes,m=a.pingedLanes;o=(1<<31-jn(42|e)+1)-1,o&=r&~(d&~m),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,Ym(a,o))}else o=xe,o=ao(a,a===Ue?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||Xi(a,o)||(t=!0,Ym(a,o));a=a.next}while(t);$c=!1}}function Ey(){Um()}function Um(){hs=Jc=!1;var e=0;va!==0&&Wy()&&(e=va);for(var n=qn(),t=null,a=Oi;a!==null;){var r=a.next,o=Fm(a,n);o===0?(a.next=null,t===null?Oi=r:t.next=r,r===null&&(Di=t)):(t=a,(e!==0||(o&3)!==0)&&(hs=!0)),a=r}$e!==0&&$e!==5||Mr(e),va!==0&&(va=0)}function Fm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var d=31-jn(o),m=1<<d,C=r[d];C===-1?((m&t)===0||(m&a)!==0)&&(r[d]=Lv(m,n)):C<=n&&(e.expiredLanes|=m),o&=~m}if(n=Ue,t=xe,t=ao(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&nl(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Xi(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&nl(a),il(t)){case 2:case 8:t=Td;break;case 32:t=$r;break;case 268435456:t=Ed;break;default:t=$r}return a=Qm.bind(null,e),t=el(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&nl(a),e.callbackPriority=2,e.callbackNode=null,2}function Qm(e,n){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(fs()&&e.callbackNode!==t)return null;var a=xe;return a=ao(e,e===Ue?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Nm(e,a,n),Fm(e,qn()),e.callbackNode!=null&&e.callbackNode===t?Qm.bind(null,e):null)}function Ym(e,n){if(fs())return null;Nm(e,n,!0)}function _y(){By(function(){(De&6)!==0?el(Pd,Ey):Um()})}function eu(){if(va===0){var e=Da;e===0&&(e=eo,eo<<=1,(eo&261888)===0&&(eo=256)),va=e}return va}function Vm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:lo(e)}function Ry(e,n,t,a,r){if(n==="submit"&&t&&t.stateNode===r){var o=Vm((r[Nn]||null).action),d=a.submitter;d&&(n=(n=d[Nn]||null)?Vm(n.formAction):d.getAttribute("formAction"),n!==null&&(o=n,d=null));var m=new ho("action","action",null,a,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(va!==0){var C=new FormData(r,d);lc(t,{pending:!0,data:C,method:r.method,action:o},null,C)}}else typeof o=="function"&&(m.preventDefault(),C=new FormData(r,d),lc(t,{pending:!0,data:C,method:r.method,action:o},o,C))},currentTarget:r}]})}}for(var nu=0;nu<_l.length;nu++){var tu=_l[nu],xy=tu.toLowerCase(),Ay=tu[0].toUpperCase()+tu.slice(1);lt(xy,"on"+Ay)}lt(Cf,"onAnimationEnd"),lt(Sf,"onAnimationIteration"),lt(wf,"onAnimationStart"),lt("dblclick","onDoubleClick"),lt("focusin","onFocus"),lt("focusout","onBlur"),lt(qb,"onTransitionRun"),lt(Bb,"onTransitionStart"),lt(jb,"onTransitionCancel"),lt(Pf,"onTransitionEnd"),ii("onMouseEnter",["mouseout","mouseover"]),ii("onMouseLeave",["mouseout","mouseover"]),ii("onPointerEnter",["pointerout","pointerover"]),ii("onPointerLeave",["pointerout","pointerover"]),Ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),My=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nr));function Xm(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var d=a.length-1;0<=d;d--){var m=a[d],C=m.instance,A=m.currentTarget;if(m=m.listener,C!==o&&r.isPropagationStopped())break e;o=m,r.currentTarget=A;try{o(r)}catch(k){go(k)}r.currentTarget=null,o=C}else for(d=0;d<a.length;d++){if(m=a[d],C=m.instance,A=m.currentTarget,m=m.listener,C!==o&&r.isPropagationStopped())break e;o=m,r.currentTarget=A;try{o(r)}catch(k){go(k)}r.currentTarget=null,o=C}}}}function Re(e,n){var t=n[Hd];t===void 0&&(t=n[Hd]=new Set);var a=e+"__bubble";t.has(a)||(Zm(n,e,2,!1),t.add(a))}function au(e,n,t){var a=0;n&&(a|=4),Zm(t,e,a,n)}var ms="_reactListening"+Math.random().toString(36).slice(2);function iu(e){if(!e[ms]){e[ms]=!0,Dd.forEach(function(t){t!=="selectionchange"&&(My.has(t)||au(t,!1,e),au(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ms]||(n[ms]=!0,au("selectionchange",!1,n))}}function Zm(e,n,t,a){switch(Bp(n)){case 2:var r=wC;break;case 8:r=PC;break;default:r=Tu}t=r.bind(null,n,t,e),r=void 0,!fl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function ru(e,n,t,a,r){var o=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var m=a.stateNode.containerInfo;if(m===r)break;if(d===4)for(d=a.return;d!==null;){var C=d.tag;if((C===3||C===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;m!==null;){if(d=_a(m),d===null)return;if(C=d.tag,C===5||C===6||C===26||C===27){a=o=d;continue e}m=m.parentNode}}a=a.return}Xd(function(){var A=o,k=ul(t),W=[];e:{var R=Tf.get(e);if(R!==void 0){var N=ho,Y=e;switch(e){case"keypress":if(uo(t)===0)break e;case"keydown":case"keyup":N=mb;break;case"focusin":Y="focus",N=gl;break;case"focusout":Y="blur",N=gl;break;case"beforeblur":case"afterblur":N=gl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=tb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=yb;break;case Cf:case Sf:case wf:N=rb;break;case Pf:N=Sb;break;case"scroll":case"scrollend":N=eb;break;case"wheel":N=Pb;break;case"copy":case"cut":case"paste":N=sb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=ef;break;case"submit":N=vb;break;case"toggle":case"beforetoggle":N=Eb}var oe=(n&4)!==0,Te=!oe&&(e==="scroll"||e==="scrollend"),x=oe?R!==null?R+"Capture":null:R;oe=[];for(var P=A,M;P!==null;){var D=P;if(M=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||M===null||x===null||(D=$i(P,x),D!=null&&oe.push(kr(P,D,M))),Te)break;P=P.return}0<oe.length&&(R=new N(R,Y,null,t,k),W.push({event:R,listeners:oe}))}}if((n&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",N&&t!==cl&&(Y=t.relatedTarget||t.fromElement)&&(_a(Y)||Y[ni]))break e;(R||N)&&(Y=k.window===k?k:(N=k.ownerDocument)?N.defaultView||N.parentWindow:window,R?(N=t.relatedTarget||t.toElement,R=A,N=N?_a(N):null,N!==null&&(Te=f(N),oe=N.tag,N!==Te||oe!==5&&oe!==27&&oe!==6)&&(N=null)):(R=null,N=A),R!==N&&(oe=Jd,D="onMouseLeave",x="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(oe=ef,D="onPointerLeave",x="onPointerEnter",P="pointer"),Te=R==null?Y:Ji(R),M=N==null?Y:Ji(N),Y=new oe(D,P+"leave",R,t,k),Y.target=Te,Y.relatedTarget=M,D=null,_a(k)===A&&(oe=new oe(x,P+"enter",N,t,k),oe.target=M,oe.relatedTarget=Te,D=oe),Te=D,oe=R&&N?ue(R,N,Ny):null,R!==null&&Km(W,Y,R,oe,!1),N!==null&&Te!==null&&Km(W,Te,N,oe,!0)))}e:{if(R=A?Ji(A):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var ne=cf;else if(sf(R))if(uf)ne=Ob;else{ne=Hb;var Ae=kb}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?A&&ll(A.elementType)&&(ne=cf):ne=zb;if(ne&&(ne=ne(e,A))){lf(W,ne,t,k);break e}Ae&&Ae(e,R,A)}switch(Ae=A?Ji(A):window,e){case"focusin":(sf(Ae)||Ae.contentEditable==="true")&&(ui=Ae,Pl=A,sr=null);break;case"focusout":sr=Pl=ui=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,bf(W,t,k);break;case"selectionchange":if(Wb)break;case"keydown":case"keyup":bf(W,t,k)}var he;if(bl)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else ci?rf(e,t)&&(ge="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ge="onCompositionStart");ge&&(nf&&t.locale!=="ko"&&(ci||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&ci&&(he=Zd()):(Jt=k,hl="value"in Jt?Jt.value:Jt.textContent,ci=!0)),Ae=ps(A,ge),0<Ae.length&&(ge=new $d(ge,e,null,t,k),W.push({event:ge,listeners:Ae}),he?ge.data=he:(he=of(t),he!==null&&(ge.data=he)))),(he=Rb?xb(e,t):Ab(e,t))&&(ge=ps(A,"onBeforeInput"),0<ge.length&&(Ae=new $d("onBeforeInput","beforeinput",null,t,k),W.push({event:Ae,listeners:ge}),Ae.data=he)),Ry(W,e,A,t,k)}Xm(W,n)})}function kr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ps(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=$i(e,t),r!=null&&a.unshift(kr(e,r,o)),r=$i(e,n),r!=null&&a.push(kr(e,r,o))),e.tag===3)return a;e=e.return}return[]}function Ny(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Km(e,n,t,a,r){for(var o=n._reactName,d=[];t!==null&&t!==a;){var m=t,C=m.alternate,A=m.stateNode;if(m=m.tag,C!==null&&C===a)break;m!==5&&m!==26&&m!==27||A===null||(C=A,r?(A=$i(t,o),A!=null&&d.unshift(kr(t,A,C))):r||(A=$i(t,o),A!=null&&d.push(kr(t,A,C)))),t=t.return}d.length!==0&&e.push({event:n,listeners:d})}var ky=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function Jm(e){return(typeof e=="string"?e:""+e).replace(ky,`
`).replace(Hy,"")}function $m(e,n){return n=Jm(n),Jm(e)===n}function Ge(e,n,t,a,r,o){switch(t){case"children":if(typeof a=="string")n==="body"||n==="textarea"&&a===""||oi(e,a);else if(typeof a=="number"||typeof a=="bigint")n!=="body"&&oi(e,""+a);else return;break;case"className":so(e,"class",a);break;case"tabIndex":so(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":so(e,t,a);break;case"style":Yd(e,a,o);return;case"data":if(n!=="object"){so(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=lo(a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&Ge(e,n,"name",r.name,r,null),Ge(e,n,"formEncType",r.formEncType,r,null),Ge(e,n,"formMethod",r.formMethod,r,null),Ge(e,n,"formTarget",r.formTarget,r,null)):(Ge(e,n,"encType",r.encType,r,null),Ge(e,n,"method",r.method,r,null),Ge(e,n,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=lo(a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=vt);return;case"onScroll":a!=null&&Re("scroll",e);return;case"onScrollEnd":a!=null&&Re("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(t=a.__html,t!=null){if(r.children!=null)throw Error(l(60));o?.__html!==t&&(e.innerHTML=t)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=lo(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":Re("beforetoggle",e),Re("toggle",e),oo(e,"popover",a);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":oo(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=Jv.get(t)||t,oo(e,t,a);else return}Oe=!0}function ou(e,n,t,a,r,o){switch(t){case"style":Yd(e,a,o);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(t=a.__html,t!=null){if(r.children!=null)throw Error(l(60));o?.__html!==t&&(e.innerHTML=t)}}break;case"children":if(typeof a=="string")oi(e,a);else if(typeof a=="number"||typeof a=="bigint")oi(e,""+a);else return;break;case"onScroll":a!=null&&Re("scroll",e);return;case"onScrollEnd":a!=null&&Re("scrollend",e);return;case"onClick":a!=null&&(e.onclick=vt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Wd.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),o=t.slice(2,r?t.length-7:void 0),n=e[Nn]||null,n=n!=null?n[t]:null,typeof n=="function"&&e.removeEventListener(o,n,r),typeof a=="function")){typeof n!="function"&&n!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(o,a,r);break e}Oe=!0,t in e?e[t]=a:a===!0?e.setAttribute(t,""):oo(e,t,a)}return}Oe=!0}function yn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var a=!1,r=!1,o;for(o in t)if(t.hasOwnProperty(o)){var d=t[o];if(d!=null)switch(o){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:Ge(e,n,o,d,t,null)}}r&&Ge(e,n,"srcSet",t.srcSet,t,null),a&&Ge(e,n,"src",t.src,t,null);return;case"input":Re("invalid",e);var m=o=d=r=null,C=null,A=null;for(a in t)if(t.hasOwnProperty(a)){var k=t[a];if(k!=null)switch(a){case"name":r=k;break;case"type":d=k;break;case"checked":C=k;break;case"defaultChecked":A=k;break;case"value":o=k;break;case"defaultValue":m=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(l(137,n));break;default:Ge(e,n,a,k,t,null)}}Ld(e,o,m,C,A,d,r,!1);return;case"select":Re("invalid",e),a=d=o=null;for(r in t)if(t.hasOwnProperty(r)&&(m=t[r],m!=null))switch(r){case"value":o=m;break;case"defaultValue":d=m;break;case"multiple":a=m;default:Ge(e,n,r,m,t,null)}n=o,t=d,e.multiple=!!a,n!=null?ri(e,!!a,n,!1):t!=null&&ri(e,!!a,t,!0);return;case"textarea":Re("invalid",e),o=r=a=null;for(d in t)if(t.hasOwnProperty(d)&&(m=t[d],m!=null))switch(d){case"value":a=m;break;case"defaultValue":r=m;break;case"children":o=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(l(91));break;default:Ge(e,n,d,m,t,null)}Fd(e,a,r,o);return;case"option":for(C in t)t.hasOwnProperty(C)&&(a=t[C],a!=null)&&(C==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ge(e,n,C,a,t,null));return;case"dialog":Re("beforetoggle",e),Re("toggle",e),Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(a=0;a<Nr.length;a++)Re(Nr[a],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in t)if(t.hasOwnProperty(A)&&(a=t[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:Ge(e,n,A,a,t,null)}return;default:if(ll(n)){for(k in t)t.hasOwnProperty(k)&&(a=t[k],a!==void 0&&ou(e,n,k,a,t,void 0));return}}for(m in t)t.hasOwnProperty(m)&&(a=t[m],a!=null&&Ge(e,n,m,a,t,null))}var zy={};function Oy(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,d=null,m=null,C=null,A=null,k=null;for(N in t){var W=t[N];if(t.hasOwnProperty(N)&&W!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":C=W;default:a.hasOwnProperty(N)||Ge(e,n,N,null,a,W)}}for(var R in a){var N=a[R];if(W=t[R],a.hasOwnProperty(R)&&(N!=null||W!=null))switch(R){case"type":N!==W&&(Oe=!0),o=N;break;case"name":N!==W&&(Oe=!0),r=N;break;case"checked":N!==W&&(Oe=!0),A=N;break;case"defaultChecked":N!==W&&(Oe=!0),k=N;break;case"value":N!==W&&(Oe=!0),d=N;break;case"defaultValue":N!==W&&(Oe=!0),m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(l(137,n));break;default:N!==W&&Ge(e,n,R,N,a,W)}}ol(e,d,m,C,A,k,o,r);return;case"select":N=d=m=R=null;for(o in t)if(C=t[o],t.hasOwnProperty(o)&&C!=null)switch(o){case"value":break;case"multiple":N=C;default:a.hasOwnProperty(o)||Ge(e,n,o,null,a,C)}for(r in a)if(o=a[r],C=t[r],a.hasOwnProperty(r)&&(o!=null||C!=null))switch(r){case"value":o!==C&&(Oe=!0),R=o;break;case"defaultValue":o!==C&&(Oe=!0),m=o;break;case"multiple":o!==C&&(Oe=!0),d=o;default:o!==C&&Ge(e,n,r,o,a,C)}n=m,t=d,a=N,R!=null?ri(e,!!t,R,!1):!!a!=!!t&&(n!=null?ri(e,!!t,n,!0):ri(e,!!t,t?[]:"",!1));return;case"textarea":N=R=null;for(m in t)if(r=t[m],t.hasOwnProperty(m)&&r!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Ge(e,n,m,null,a,r)}for(d in a)if(r=a[d],o=t[d],a.hasOwnProperty(d)&&(r!=null||o!=null))switch(d){case"value":r!==o&&(Oe=!0),R=r;break;case"defaultValue":r!==o&&(Oe=!0),N=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(l(91));break;default:r!==o&&Ge(e,n,d,r,a,o)}Ud(e,R,N);return;case"option":for(var Y in t)R=t[Y],t.hasOwnProperty(Y)&&R!=null&&!a.hasOwnProperty(Y)&&(Y==="selected"?e.selected=!1:Ge(e,n,Y,null,a,R));for(C in a)R=a[C],N=t[C],a.hasOwnProperty(C)&&R!==N&&(R!=null||N!=null)&&(C==="selected"?(R!==N&&(Oe=!0),e.selected=R&&typeof R!="function"&&typeof R!="symbol"):Ge(e,n,C,R,a,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in t)R=t[oe],t.hasOwnProperty(oe)&&R!=null&&!a.hasOwnProperty(oe)&&Ge(e,n,oe,null,a,R);for(A in a)if(R=a[A],N=t[A],a.hasOwnProperty(A)&&R!==N&&(R!=null||N!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(l(137,n));break;default:Ge(e,n,A,R,a,N)}return;default:if(ll(n)){for(var Te in t)R=t[Te],t.hasOwnProperty(Te)&&R!==void 0&&!a.hasOwnProperty(Te)&&ou(e,n,Te,void 0,a,R);for(k in a)R=a[k],N=t[k],!a.hasOwnProperty(k)||R===N||R===void 0&&N===void 0||ou(e,n,k,R,a,N);return}}for(var x in t)R=t[x],t.hasOwnProperty(x)&&R!=null&&!a.hasOwnProperty(x)&&Ge(e,n,x,null,a,R);for(W in a)R=a[W],N=t[W],!a.hasOwnProperty(W)||R===N||R==null&&N==null||Ge(e,n,W,R,a,N)}function ep(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Dy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var r=t[a],o=r.transferSize,d=r.initiatorType,m=r.duration;if(o&&m&&ep(d)){for(d=0,m=r.responseEnd,a+=1;a<t.length;a++){var C=t[a],A=C.startTime;if(A>m)break;var k=C.transferSize,W=C.initiatorType;k&&ep(W)&&(C=C.responseEnd,d+=k*(C<m?1:(m-A)/(C-A)))}if(--a,n+=8*(o+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var su=null,lu=null;function Hr(e){return e.nodeType===9?e:e.ownerDocument}function np(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ap(e,n,t,a){return t=Hr(t).createElement(e),t[mn]=a,t[Nn]=n,yn(t,e,n),un(t),t}function cu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var uu=null;function Wy(){var e=window.event;return e&&e.type==="popstate"?e===uu?!1:(uu=e,!0):(uu=null,!1)}var du=typeof setTimeout=="function"?setTimeout:void 0,qy=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,rp=typeof requestAnimationFrame=="function"?requestAnimationFrame:du,By=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(e){return ip.resolve(null).then(e).catch(jy)}:du;function jy(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function op(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(r),Li(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")yu(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,yu(t);for(var o=t.firstChild;o;){var d=o.nextSibling,m=o.nodeName;o[Ki]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=d}}else t==="body"&&yu(e.ownerDocument.body);t=r}while(t);Li(n)}function sp(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function lp(e,n,t){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,t!=null&&(e.style.viewTransitionClass=t),t=getComputedStyle(e),t.display==="inline"){if(n=e.getClientRects(),n.length===1)var a=1;else for(var r=a=0;r<n.length;r++){var o=n[r];0<o.width&&0<o.height&&a++}a===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+t.paddingTop,e.marginBottom="-"+t.paddingBottom)}}function cp(e,n){e=e.style,n=n.style;var t=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(t=n.display,e.display=t==null||typeof t=="boolean"?"":t,t=n.margin,t!=null?e.margin=t:(t=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=t==null||typeof t=="boolean"?"":t,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Gy(e,n,t){return t=t.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=t.innerHeight&&e.left<=t.innerWidth}}function fu(e){var n=e.getBoundingClientRect(),t=getComputedStyle(e);return Gy(n,t,e)}function Iy(e){return e.documentElement.clientHeight}function Ly(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Uy(e,n,t,a,r,o,d,m,C){var A=n.nodeType===9?n:n.ownerDocument;try{var k=A.startViewTransition({update:function(){var R=A.defaultView,N=R.navigation&&R.navigation.transition,Y=A.fonts.status;a();var oe=[];if(Y==="loaded"&&(Iy(A),A.fonts.status==="loading"&&oe.push(A.fonts.ready)),Y=oe.length,e!==null)for(var Te=e.suspenseyImages,x=0,P=0;P<Te.length;P++){var M=Te[P];if(!M.complete){var D=M.getBoundingClientRect();if(0<D.bottom&&0<D.right&&D.top<R.innerHeight&&D.left<R.innerWidth){if(x+=Mp(M),x>bs){oe.length=Y;break}M=new Promise(Ly.bind(M)),oe.push(M)}}}if(0<oe.length)return R=Promise.race([Promise.all(oe),new Promise(function(ne){return setTimeout(ne,500)})]).then(r,r),(N?Promise.allSettled([N.finished,R]):R).then(o,o);if(r(),N)return N.finished.then(o,o);o()},types:t});A.__reactViewTransition=k;var W=[];return k.ready.then(function(){for(var R=A.documentElement.getAnimations({subtree:!0}),N=0;N<R.length;N++){var Y=R[N],oe=Y.effect,Te=oe.pseudoElement;if(Te!=null&&Te.startsWith("::view-transition")){W.push(Y),Y=oe.getKeyframes();for(var x=Te=void 0,P=!0,M=0;M<Y.length;M++){var D=Y[M],ne=D.width;if(Te===void 0)Te=ne;else if(Te!==ne){P=!1;break}if(ne=D.height,x===void 0)x=ne;else if(x!==ne){P=!1;break}delete D.width,delete D.height,D.transform==="none"&&delete D.transform}P&&Te!==void 0&&x!==void 0&&(oe.setKeyframes(Y),P=getComputedStyle(oe.target,oe.pseudoElement),P.width!==Te||P.height!==x)&&(P=Y[0],P.width=Te,P.height=x,P=Y[Y.length-1],P.width=Te,P.height=x,oe.setKeyframes(Y))}}d()},function(R){A.__reactViewTransition===k&&(A.__reactViewTransition=null);try{typeof R=="object"&&R!==null&&R.name==="InvalidStateError"&&(R.message==="View transition was skipped because document visibility state is hidden."||R.message==="Skipping view transition because document visibility state has become hidden."||R.message==="Skipping view transition because viewport size changed."||R.message==="Transition was aborted because of invalid state")&&(R=null),R!==null&&C(R)}finally{a(),r(),d()}}),k.finished.finally(function(){for(var R=0;R<W.length;R++)W[R].cancel();A.__reactViewTransition===k&&(A.__reactViewTransition=null),m()}),k}catch{return a(),r(),d(),null}}function Ya(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Ya.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Ya.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,t=e.getAnimations({subtree:!0}),a=[],r=0;r<t.length;r++){var o=t[r].effect;o!==null&&o.target===e&&o.pseudoElement===n&&a.push(t[r])}return a},Ya.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function up(e){return{name:e,group:new Ya("group",e),imagePair:new Ya("image-pair",e),old:new Ya("old",e),new:new Ya("new",e)}}function Vn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Vn.prototype.addEventListener=function(e,n,t){var a=null,r=null;if(!(t!=null&&typeof t!="boolean"&&(a=t.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var o=this._eventListeners;if(fp(o,e,n,t)===-1){var d=this,m=n;t!=null&&typeof t!="boolean"&&t.once===!0&&(m=function(C){d.removeEventListener(e,n,t),typeof n=="function"?n.call(this,C):n.handleEvent(C)}),a!==null&&(r=d.removeEventListener.bind(d,e,n,t),a.addEventListener("abort",r,{once:!0}),r=a.removeEventListener.bind(a,"abort",r)),a=Wi(t),o.push({type:e,listener:n,optionsOrUseCapture:t,attachedListener:m,cleanup:r}),y(this._fragmentFiber.child,!1,Fy,e,m,a)}this._eventListeners=o}};function Fy(e,n,t,a){return se(e).addEventListener(n,t,a),!1}Vn.prototype.removeEventListener=function(e,n,t){var a=this._eventListeners;if(a!==null&&(n=fp(a,e,n,t),n!==-1)){var r=a[n];t=r.attachedListener;var o=r.cleanup;r=Wi(r.optionsOrUseCapture),y(this._fragmentFiber.child,!1,Qy,e,t,r),a.splice(n,1),o!==null&&o()}};function Qy(e,n,t,a){return se(e).removeEventListener(n,t,a),!1}function Wi(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function dp(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function fp(e,n,t,a){if(e.length===0)return-1;a=dp(a);for(var r=0;r<e.length;r++){var o=e[r];if(o.type===n&&o.listener===t&&dp(o.optionsOrUseCapture)===a)return r}return-1}Vn.prototype.dispatchEvent=function(e){var n=_(this._fragmentFiber);if(n===null)return!0;n=se(n);var t=this._eventListeners;if(t!==null&&0<t.length||!e.bubbles){var a=n.nodeType===9?n.createComment(""):document.createTextNode("");if(t)for(var r=0;r<t.length;r++){var o=t[r];a.addEventListener(o.type,o.attachedListener,Wi(o.optionsOrUseCapture))}if(n.appendChild(a),e=a.dispatchEvent(e),t)for(r=0;r<t.length;r++)o=t[r],a.removeEventListener(o.type,o.attachedListener,Wi(o.optionsOrUseCapture));return n.removeChild(a),e}return n.dispatchEvent(e)},Vn.prototype.focus=function(e){y(this._fragmentFiber.child,!0,hp,e,void 0,void 0)};function hp(e,n){return e.tag===6?!1:(e=se(e),iC(e,n))}Vn.prototype.focusLast=function(e){var n=[];y(this._fragmentFiber.child,!0,hu,n,void 0,void 0);for(var t=n.length-1;0<=t&&!hp(n[t],e);t--);};function hu(e,n){return n.push(e),!1}Vn.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=se(e),e=Hr(e).activeElement,e!==null&&y(this._fragmentFiber.child,!1,Yy,e,void 0,void 0))};function Yy(e,n){return e.tag===6?!1:(e=se(e),e===n||e.contains(n)?(n.blur(),!0):!1)}Vn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),y(this._fragmentFiber.child,!1,Vy,e,void 0,void 0)};function Vy(e,n){return e.tag===6||(e=se(e),n.observe(e)),!1}Vn.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),y(this._fragmentFiber.child,!1,Xy,e,void 0,void 0);for(var t=n=0;t<ht.length;t++){var a=ht[t];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):ht[n++]=a}ht.length=n}};function Xy(e,n){return e.tag===6||(e=se(e),n.unobserve(e)),!1}var ht=[],mu=!1;function Zy(e,n,t){ht.push({fragmentInstance:e,observer:n,instance:t}),mu||(mu=!0,rC(function(){mu=!1;var a=ht;ht=[];for(var r=0;r<a.length;r++){var o=a[r];o.observer.unobserve(o.instance)}}))}Vn.prototype.getClientRects=function(){var e=[];return y(this._fragmentFiber.child,!1,Ky,e,void 0,void 0),e};function Ky(e,n){if(e.tag===6){e=e.stateNode;var t=e.ownerDocument.createRange();t.selectNodeContents(e),n.push.apply(n,t.getClientRects())}else e=se(e),n.push.apply(n,e.getClientRects());return!1}Vn.prototype.getRootNode=function(e){var n=_(this._fragmentFiber);return n===null?this:se(n).getRootNode(e)},Vn.prototype.compareDocumentPosition=function(e){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];y(this._fragmentFiber.child,!1,hu,t,void 0,void 0);var a=se(n);if(t.length===0){if(t=a,q(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(t=n)}n=this._fragmentFiber;var r=a=t.compareDocumentPosition(e);return t===e?r=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=B(n)[1],t===null?r=Node.DOCUMENT_POSITION_PRECEDING:(e=se(t).compareDocumentPosition(e),r=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),r|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=se(t[0]),r=se(t[t.length-1]);var o=q(this._fragmentFiber)?n.parentElement:a;if(o==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=o.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,o=o.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_CONTAINED_BY;var d=n.compareDocumentPosition(e),m=r.compareDocumentPosition(e),C=d&Node.DOCUMENT_POSITION_CONTAINED_BY||m&Node.DOCUMENT_POSITION_CONTAINED_BY;return m=a&&o&&d&Node.DOCUMENT_POSITION_FOLLOWING&&m&Node.DOCUMENT_POSITION_PRECEDING,n=a&&n===e||o&&r===e||C||m?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&n===e||!o&&r===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:d,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Jy(n,this._fragmentFiber,t[0],t[t.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Jy(e,n,t,a,r){var o=_a(r);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!o)e:{for(;o!==null;){if(o.tag===7&&(o===n||o.alternate===n)){t=!0;break e}o=o.return}t=!1}return t}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(o===null)return o=r.ownerDocument,r===o||r===o.documentElement||r===o.body;e:{for(o=n,n=_(n);o!==null;){if(!(o.tag!==5&&o.tag!==3&&o.tag!==27||o!==n&&o.alternate!==n)){o=!0;break e}o=o.return}o=!1}return o}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!o)&&!(n=o===t)&&(n=ue(t,o,Se),n===null?n=!1:(y(n,!0,ce,o,t),o=be,be=null,n=o!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!o)&&!(n=o===a)&&(n=ue(a,o,Se),n===null?n=!1:(y(n,!0,re,o,a),o=be,V=be=null,n=o!==null)),n):!1}function mp(e,n){var t=e.ownerDocument.createRange();t.selectNodeContents(e),e=t.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Vn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(l(566));var n=[];y(this._fragmentFiber.child,!1,hu,n,void 0,void 0);var t=e!==!1;if(n.length===0){var a=B(this._fragmentFiber);if(a=t?a[1]||a[0]||_(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=se(a),mp(e,t);return}if(a=se(a),a.nodeType!==9){if(a.nodeType===11){t="host"in a?a.host:null,t!==null&&t.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=t?n.length-1:0;a!==(t?-1:n.length);){var r=n[a];r.tag===6?(r=se(r),mp(r,t)):se(r).scrollIntoView(e),a+=t?-1:1}};function $y(e,n){return e=se(e),pp(e,n),!1}function pp(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function gp(e,n){var t=n._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];e.addEventListener(r.type,r.attachedListener,Wi(r.optionsOrUseCapture))}e.nodeType!==3&&(t=n._observers,t!==null&&t.forEach(function(o){for(var d=0,m=0;m<ht.length;m++){var C=ht[m];(C.fragmentInstance!==n||C.observer!==o||C.instance!==e)&&(ht[d++]=C)}ht.length=d,o.observe(e)}),pp(e,n))}function eC(e,n){var t=n._eventListeners;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];e.removeEventListener(r.type,r.attachedListener,Wi(r.optionsOrUseCapture))}e.nodeType!==3&&(t=n._observers,t!==null&&t.forEach(function(o){typeof o.rootMargin=="string"?Zy(n,o,e):o.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function pu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":pu(t),ro(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function nC(e,n,t,a){for(;e.nodeType===1;){var r=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ki])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=rt(e.nextSibling),e===null)break}return null}function tC(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=rt(e.nextSibling),e===null))return null;return e}function vp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rt(e.nextSibling),e===null))return null;return e}function gu(e){return e.data==="$?"||e.data==="$~"}function vu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function aC(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function rt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var bu=null;function bp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return rt(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function yp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function iC(e,n){function t(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",t,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",t,!0)}return a}function rC(e){rp(function(){rp(function(n){return e(n)})})}function Cp(e,n,t){switch(n=Hr(t),e){case"html":if(e=n.documentElement,!e)throw Error(l(452));return e;case"head":if(e=n.head,!e)throw Error(l(453));return e;case"body":if(e=n.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Sp(e,n,t){for(var a in t){var r=t[a];t.hasOwnProperty(a)&&r!=null&&Ge(e,n,a,null,zy,r)}t.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===vt&&(e.onclick=null),ro(e)}function yu(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ro(e)}var ot=new Map,wp=new Set;function zr(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ft=J.d;J.d={f:oC,r:sC,D:lC,C:cC,L:uC,m:dC,X:hC,S:fC,M:mC};function oC(){var e=Ft.f(),n=cs();return e||n}function sC(e){var n=ti(e);n!==null&&n.tag===5&&n.type==="form"?Th(n):Ft.r(e)}var qi=typeof document>"u"?null:document;function Pp(e,n,t){var a=qi;if(a&&typeof n=="string"&&n){var r=Jn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),wp.has(r)||(wp.add(r),e={rel:e,crossOrigin:t,href:n},a.querySelector(r)===null&&(n=a.createElement("link"),yn(n,"link",e),un(n),a.head.appendChild(n)))}}function lC(e){Ft.D(e),Pp("dns-prefetch",e,null)}function cC(e,n){Ft.C(e,n),Pp("preconnect",e,n)}function uC(e,n,t){Ft.L(e,n,t);var a=qi;if(a&&e&&n){var r='link[rel="preload"][as="'+Jn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+Jn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+Jn(t.imageSizes)+'"]')):r+='[href="'+Jn(e)+'"]';var o=r;switch(n){case"style":o=Bi(e);break;case"script":o=ji(e)}if(!(ot.has(o)||(e=L({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),ot.set(o,e),a.querySelector(r)!==null||n==="style"&&a.querySelector(Or(o))||n==="script"&&a.querySelector(Dr(o))))){var d=a.createElement("link");yn(d,"link",e),n==="style"&&(d[io]=!0,d.onload=d.onerror=function(){Od(d)}),un(d),a.head.appendChild(d)}}}function dC(e,n){Ft.m(e,n);var t=qi;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+Jn(a)+'"][href="'+Jn(e)+'"]',o=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=ji(e)}if(!ot.has(o)&&(e=L({rel:"modulepreload",href:e},n),ot.set(o,e),t.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Dr(o)))return}a=t.createElement("link"),yn(a,"link",e),un(a),t.head.appendChild(a)}}}function fC(e,n,t){Ft.S(e,n,t);var a=qi;if(a&&e){var r=ai(a).hoistableStyles,o=Bi(e);n=n||"default";var d=r.get(o);if(!d){var m={loading:0,preload:null};if(d=a.querySelector(Or(o)))m.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":n},t),(t=ot.get(o))&&Cu(e,t);var C=d=a.createElement("link");un(C),yn(C,"link",e),C._p=new Promise(function(A,k){C.onload=A,C.onerror=k}),C.addEventListener("load",function(){m.loading|=1}),C.addEventListener("error",function(){m.loading|=2}),m.loading|=4,gs(d,n,a)}d={type:"stylesheet",instance:d,count:1,state:m},r.set(o,d)}}}function hC(e,n){Ft.X(e,n);var t=qi;if(t&&e){var a=ai(t).hoistableScripts,r=ji(e),o=a.get(r);o||(o=t.querySelector(Dr(r)),o||(e=L({src:e,async:!0},n),(n=ot.get(r))&&Su(e,n),o=t.createElement("script"),un(o),yn(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function mC(e,n){Ft.M(e,n);var t=qi;if(t&&e){var a=ai(t).hoistableScripts,r=ji(e),o=a.get(r);o||(o=t.querySelector(Dr(r)),o||(e=L({src:e,async:!0,type:"module"},n),(n=ot.get(r))&&Su(e,n),o=t.createElement("script"),un(o),yn(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function Tp(e,n,t,a){var r=(r=Pn.current)?zr(r):null;if(!r)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=Bi(t.href),n=ai(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Bi(t.href);var o=ai(r).hoistableStyles,d=o.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,d),(o=r.querySelector(Or(e)))?o._p||(d.instance=o,d.state.loading=5):(o=ot.get(e),o||(o={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},ot.set(e,o)),pC(r,e,o,d.state))),n&&a===null)throw Error(l(528,""));return d}if(n&&a!==null)throw Error(l(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(t=ji(t),n=ai(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Bi(e){return'href="'+Jn(e)+'"'}function Or(e){return'link[rel="stylesheet"]['+e+"]"}function Ep(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function pC(e,n,t,a){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[io]!==!0){a.loading=1;return}}else n=e.createElement("link"),n[io]=!0,n.onload=n.onerror=Od.bind(null,n),yn(n,"link",t),un(n),e.head.appendChild(n);a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2})}function ji(e){return'[src="'+Jn(e)+'"]'}function Dr(e){return"script[async]"+e}function _p(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Jn(t.href)+'"]');if(a)return n.instance=a,un(a),a;var r=L({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),un(a),yn(a,"style",r),gs(a,t.precedence,e),n.instance=a;case"stylesheet":r=Bi(t.href);var o=e.querySelector(Or(r));if(o)return n.state.loading|=4,n.instance=o,un(o),o;a=Ep(t),(r=ot.get(r))&&Cu(a,r),o=(e.ownerDocument||e).createElement("link"),un(o);var d=o;return d._p=new Promise(function(m,C){d.onload=m,d.onerror=C}),yn(o,"link",a),n.state.loading|=4,gs(o,t.precedence,e),n.instance=o;case"script":return o=ji(t.src),(r=e.querySelector(Dr(o)))?(n.instance=r,un(r),r):(a=t,(r=ot.get(o))&&(a=L({},t),Su(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),un(r),yn(r,"link",a),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(l(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,gs(a,t.precedence,e));return n.instance}function gs(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,o=r,d=0;d<a.length;d++){var m=a[d];if(m.dataset.precedence===n)o=m;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Cu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Su(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var vs=null;function Rp(e,n,t){if(vs===null){var a=new Map,r=vs=new Map;r.set(t,a)}else r=vs,a=r.get(t),a||(a=new Map,r.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),r=0;r<t.length;r++){var o=t[r];if(!(o[Ki]||o[mn]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var d=o.getAttribute(n)||"";d=e+d;var m=a.get(d);m?m.push(o):a.set(d,[o])}}return a}function wu(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function gC(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function xp(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Ap(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Mp(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Np(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=Mp(n),e.suspenseyImages.push(n)),e=yC.bind(e),n.decode().then(e,e))}function vC(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Bi(a.href),o=n.querySelector(Or(r));if(o){n=o._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Wr.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=o,un(o);return}o=n.ownerDocument||n,a=Ep(a),(r=ot.get(r))&&Cu(a,r),o=o.createElement("link"),un(o);var d=o;d._p=new Promise(function(m,C){d.onload=m,d.onerror=C}),yn(o,"link",a),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Wr.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var bs=0;function bC(e,n){return e.stylesheets&&e.count===0&&Cs(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Cs(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+n);0<e.imgBytes&&bs===0&&(bs=62500*Dy());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Cs(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>bs?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function kp(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Cs(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function Wr(){this.count--,kp(this)}function yC(){this.imgCount--,kp(this)}var ys=null;function Cs(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ys=new Map,n.forEach(CC,e),ys=null,Wr.call(e))}function CC(e,n){if(!(n.state.loading&4)){var t=ys.get(e);if(t)var a=t.get(null);else{t=new Map,ys.set(e,t);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var d=r[o];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(t.set(d.dataset.precedence,d),a=d)}a&&t.set(null,a)}r=n.instance,d=r.getAttribute("data-precedence"),o=t.get(d)||a,o===a&&t.set(null,r),t.set(d,r),this.count++,a=Wr.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var Gi={$$typeof:Ce,Provider:null,Consumer:null,_currentValue:Fe,_currentValue2:Fe,_threadCount:0};function SC(e,n,t,a,r,o,d,m,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tl(0),this.hiddenUpdates=tl(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.transitionTypes=null,this.incompleteTransitions=new Map}function Hp(e,n,t,a,r,o,d,m,C,A,k,W){return e=new SC(e,n,t,d,C,A,k,W,m),n=1,o===!0&&(n|=24),o=kn(3,null,null,n),e.current=o,o.stateNode=e,n=Wl(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:a,isDehydrated:t,cache:n},Gl(o),e}function zp(e){return e?(e=hi,e):hi}function Op(e,n,t,a,r,o){r=zp(r),a.context===null?a.context=r:a.pendingContext=r,a=oa(n),a.payload={element:t},o=o===void 0?null:o,o!==null&&(a.callback=o),t=sa(e,a,n),t!==null&&(Dn(t,e,n),mr(t,e,n))}function Dp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Pu(e,n){Dp(e,n),(e=e.alternate)&&Dp(e,n)}function Wp(e){if(e.tag===13||e.tag===31){var n=Ma(e,67108864);n!==null&&Dn(n,e,67108864),Pu(e,67108864)}}function qp(e){if(e.tag===13||e.tag===31){var n=Yn();n=al(n);var t=Ma(e,n);t!==null&&Dn(t,e,n),Pu(e,n)}}var Ii=!0;function wC(e,n,t,a){var r=j.T;j.T=null;var o=J.p;try{J.p=2,Tu(e,n,t,a)}finally{J.p=o,j.T=r}}function PC(e,n,t,a){var r=j.T;j.T=null;var o=J.p;try{J.p=8,Tu(e,n,t,a)}finally{J.p=o,j.T=r}}function Tu(e,n,t,a){if(Ii){var r=Eu(a);if(r===null)ru(e,n,a,Ss,t),jp(e,a);else if(EC(r,e,n,t,a))a.stopPropagation();else if(jp(e,a),n&4&&-1<TC.indexOf(e)){for(;r!==null;){var o=ti(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var d=Ea(o.pendingLanes);if(d!==0){var m=o;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var C=1<<31-jn(d);m.entanglements[1]|=C,d&=~C}Rt(o),(De&6)===0&&(os=qn()+500,Mr(0))}}break;case 31:case 13:m=Ma(o,2),m!==null&&Dn(m,o,2),cs(),Pu(o,2)}if(o=Eu(a),o===null&&ru(e,n,a,Ss,t),o===r)break;r=o}r!==null&&a.stopPropagation()}else ru(e,n,a,null,t)}}function Eu(e){return e=ul(e),_u(e)}var Ss=null;function _u(e){if(Ss=null,e=_a(e),e!==null){var n=f(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=h(n),e!==null)return e;e=null}else if(t===31){if(e=g(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ss=e,null}function Bp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dv()){case Pd:return 2;case Td:return 8;case $r:case Wv:return 32;case Ed:return 268435456;default:return 32}default:return 32}}var Ru=!1,ya=null,Ca=null,Sa=null,qr=new Map,Br=new Map,wa=[],TC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jp(e,n){switch(e){case"focusin":case"focusout":ya=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":qr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(n.pointerId)}}function jr(e,n,t,a,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[r]},n!==null&&(n=ti(n),n!==null&&Wp(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function EC(e,n,t,a,r){switch(n){case"focusin":return ya=jr(ya,e,n,t,a,r),!0;case"dragenter":return Ca=jr(Ca,e,n,t,a,r),!0;case"mouseover":return Sa=jr(Sa,e,n,t,a,r),!0;case"pointerover":var o=r.pointerId;return qr.set(o,jr(qr.get(o)||null,e,n,t,a,r)),!0;case"gotpointercapture":return o=r.pointerId,Br.set(o,jr(Br.get(o)||null,e,n,t,a,r)),!0}return!1}function Gp(e){var n=_a(e.target);if(n!==null){var t=f(n);if(t!==null){if(n=t.tag,n===13){if(n=h(t),n!==null){e.blockedOn=n,kd(e.priority,function(){qp(t)});return}}else if(n===31){if(n=g(t),n!==null){e.blockedOn=n,kd(e.priority,function(){qp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Eu(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);cl=a,t.target.dispatchEvent(a),cl=null}else return n=ti(t),n!==null&&Wp(n),e.blockedOn=t,!1;n.shift()}return!0}function Ip(e,n,t){ws(e)&&t.delete(n)}function _C(){Ru=!1,ya!==null&&ws(ya)&&(ya=null),Ca!==null&&ws(Ca)&&(Ca=null),Sa!==null&&ws(Sa)&&(Sa=null),qr.forEach(Ip),Br.forEach(Ip)}function Ps(e,n){e.blockedOn===n&&(e.blockedOn=null,Ru||(Ru=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,_C)))}var Ts=null;function Lp(e){Ts!==e&&(Ts=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Ts===e&&(Ts=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],r=e[n+2];if(typeof a!="function"){if(_u(a||t)===null)continue;break}var o=ti(t);o!==null&&(e.splice(n,3),n-=3,lc(o,{pending:!0,data:r,method:t.method,action:a},a,r))}}))}function Li(e){function n(C){return Ps(C,e)}ya!==null&&Ps(ya,e),Ca!==null&&Ps(Ca,e),Sa!==null&&Ps(Sa,e),qr.forEach(n),Br.forEach(n);for(var t=0;t<wa.length;t++){var a=wa[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<wa.length&&(t=wa[0],t.blockedOn===null);)Gp(t),t.blockedOn===null&&wa.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var r=t[a],o=t[a+1],d=r[Nn]||null;if(typeof o=="function")d||Lp(t);else if(d){var m=null;if(o&&o.hasAttribute("formAction")){if(r=o,d=o[Nn]||null)m=d.formAction;else if(_u(r)!==null)continue}else m=d.action;typeof m=="function"?t[a+1]=m:(t.splice(a,3),a-=3),Lp(t)}}}function Up(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function xu(e){this._internalRoot=e}Es.prototype.render=xu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));var t=n.current,a=Yn();Op(t,a,e,n,null,null)},Es.prototype.unmount=xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Op(e.current,2,null,e,null,null),cs(),n[ni]=null}};function Es(e){this._internalRoot=e}Es.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<wa.length&&n!==0&&n<wa[t].priority;t++);wa.splice(t,0,e),t===0&&Gp(e)}};var Fp=s.version;if(Fp!=="19.3.1")throw Error(l(527,Fp,"19.3.1"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=b(n),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var RC={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_s.isDisabled&&_s.supportsFiber)try{Vi=_s.inject(RC),Bn=_s}catch{}}return Ir.createRoot=function(e,n){if(!u(e))throw Error(l(299));var t=!1,a="",r=zh,o=Oh,d=Dh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Hp(e,1,!1,null,null,t,a,null,r,o,d,Up),e[ni]=n.current,iu(e),new xu(n)},Ir.hydrateRoot=function(e,n,t){if(!u(e))throw Error(l(299));var a=!1,r="",o=zh,d=Oh,m=Dh,C=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.formState!==void 0&&(C=t.formState)),n=Hp(e,1,!0,n,t??null,a,r,C,o,d,m,Up),n.context=zp(null),t=n.current,a=Yn(),a=al(a),r=oa(a),r.callback=null,sa(t,r,a),t=a,n.current.lanes=t,Zi(n,t),Rt(n),e[ni]=n.current,iu(e),new Es(n)},Ir.version="19.3.1",Ir}var ng;function qC(){if(ng)return Nu.exports;ng=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Nu.exports=WC(),Nu.exports}var BC=qC();function Lu(i=window.location.hash){const s=i.replace(/^#/,"")||"/",[c,l=""]=s.split("?"),u="/"+c.replace(/^\/+|\/+$/g,""),f=new URLSearchParams(l),h=f.get("embed");return{path:u,parts:u.split("/").filter(Boolean),query:f,embed:h}}function jC(){const[i,s]=pe.useState(()=>Lu());return pe.useEffect(()=>{const c=()=>s(Lu());return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),i}function ze(i,s){const c=new URLSearchParams(s||{}),l=Lu();l.embed&&!c.has("embed")&&c.set("embed",l.embed);const u=c.toString();return`#${i}${u?`?${u}`:""}`}function ks(i,s){window.location.hash=ze(i,s).slice(1)}function Hs(i,s){const c=new URL(window.location.href);return c.hash=ze(i,s),c.toString()}const wn="./";function GC(i){const s=()=>typeof window<"u"&&window.matchMedia(i).matches,[c,l]=pe.useState(s);return pe.useEffect(()=>{const u=window.matchMedia(i),f=()=>l(u.matches);return u.addEventListener("change",f),f(),()=>u.removeEventListener("change",f)},[i]),c}function Bs(i){const s=i?new URLSearchParams(i).toString():"";return`${wn}report/${s?`?${s}`:""}`}var zs={exports:{}};var IC=zs.exports,tg;function LC(){return tg||(tg=1,(function(i,s){((c,l)=>{i.exports=l()})(IC,function c(){var l=typeof self<"u"?self:typeof window<"u"?window:l!==void 0?l:{},u=!l.document&&!!l.postMessage,f=l.IS_PAPA_WORKER||!1,h={},g=0,v={};function b(T){return T.charCodeAt(0)===65279?T.slice(1):T}function E(T){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(S){var H=Se(S);H.chunkSize=parseInt(H.chunkSize),S.step||S.chunk||(H.chunkSize=null),this._handle=new ie(H),(this._handle.streamer=this)._config=H}).call(this,T),this.parseChunk=function(S,H){var G=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<G){let te=this._config.newline;te||(z=this._config.quoteChar||'"',te=this._handle.guessLineEndings(S,z)),S=[...S.split(te).slice(G)].join(te)}this.isFirstChunk&&L(this._config.beforeFirstChunk)&&(z=this._config.beforeFirstChunk(S))!==void 0&&(S=z),this.isFirstChunk=!1,this._halted=!1;var G=this._partialLine+S,z=(this._partialLine="",this._handle.parse(G,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(S=z.meta.cursor,G=(this._finished||(this._partialLine=G.substring(S-this._baseIndex),this._baseIndex=S),z&&z.data&&(this._rowCount+=z.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),f)l.postMessage({results:z,workerId:v.WORKER_ID,finished:G});else if(L(this._config.chunk)&&!H){if(this._config.chunk(z,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=z=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(z.data),this._completeResults.errors=this._completeResults.errors.concat(z.errors),this._completeResults.meta=z.meta),this._completed||!G||!L(this._config.complete)||z&&z.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),G||z&&z.meta.paused||this._nextChunk(),z}this._halted=!0},this._sendError=function(S){L(this._config.error)?this._config.error(S):f&&this._config.error&&l.postMessage({workerId:v.WORKER_ID,error:S,finished:!1})}}function y(T){var S;(T=T||{}).chunkSize||(T.chunkSize=v.RemoteChunkSize),E.call(this,T),this._nextChunk=u?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(H){this._input=H,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(S=new XMLHttpRequest,this._config.withCredentials&&(S.withCredentials=this._config.withCredentials),u||(S.onload=ue(this._chunkLoaded,this),S.onerror=ue(this._chunkError,this)),S.ontimeout=ue(this._chunkTimeout,this),S.open(this._config.downloadRequestBody?"POST":"GET",this._input,!u),this._config.downloadTimeout&&!u&&(S.timeout=this._config.downloadTimeout),this._config.downloadRequestHeaders){var H,G=this._config.downloadRequestHeaders;for(H in G)S.setRequestHeader(H,G[H])}var z;this._config.chunkSize&&(z=this._start+this._config.chunkSize-1,S.setRequestHeader("Range","bytes="+this._start+"-"+z));try{S.send(this._config.downloadRequestBody)}catch(te){this._chunkError(te.message)}u&&S.status===0&&this._chunkError()}},this._chunkLoaded=function(){S.readyState===4&&(S.status<200||400<=S.status?this._chunkError():(this._start+=this._config.chunkSize||S.responseText.length,this._finished=!this._config.chunkSize||this._start>=(H=>(H=H.getResponseHeader("Content-Range"))!==null?parseInt(H.substring(H.lastIndexOf("/")+1)):-1)(S),this.parseChunk(S.responseText)))},this._chunkError=function(H){H=S.statusText||H,this._sendError(new Error(H))},this._chunkTimeout=function(){this._chunkError("Request timed out after "+this._config.downloadTimeout+"ms")}}function _(T){(T=T||{}).chunkSize||(T.chunkSize=v.LocalChunkSize),E.call(this,T);var S,H,G=typeof FileReader<"u";this.stream=function(z){this._input=z,H=z.slice||z.webkitSlice||z.mozSlice,G?((S=new FileReader).onload=ue(this._chunkLoaded,this),S.onerror=ue(this._chunkError,this)):S=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var z=this._input,te=(this._config.chunkSize&&(te=Math.min(this._start+this._config.chunkSize,this._input.size),z=H.call(z,this._start,te)),S.readAsText(z,this._config.encoding));G||this._chunkLoaded({target:{result:te}})},this._chunkLoaded=function(z){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(z.target.result)},this._chunkError=function(){this._sendError(S.error)}}function q(T){var S;E.call(this,T=T||{}),this.stream=function(H){return S=H,this._nextChunk()},this._nextChunk=function(){var H,G;if(!this._finished)return H=this._config.chunkSize,S=H?(G=S.substring(0,H),S.substring(H)):(G=S,""),this._finished=!S,this.parseChunk(G)}}function B(T){E.call(this,T=T||{});var S=[],H=!0,G=!1;this.pause=function(){E.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){E.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(z){this._input=z,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){G&&S.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),S.length?this.parseChunk(S.shift()):H=!0},this._streamData=ue(function(z){try{S.push(typeof z=="string"?z:z.toString(this._config.encoding)),H&&(H=!1,this._checkIsFinished(),this.parseChunk(S.shift()))}catch(te){this._streamError(te)}},this),this._streamError=ue(function(z){this._streamCleanUp(),this._sendError(z)},this),this._streamEnd=ue(function(){this._streamCleanUp(),G=!0,this._streamData("")},this),this._streamCleanUp=ue(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function ie(T){var S,H,G,z,te=Math.pow(2,53),we=-te,Ce=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,I=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,U=this,Z=0,Q=0,le=!1,fe=!1,F=[],K={data:[],errors:[],meta:{}};function w($){return T.skipEmptyLines==="greedy"?$.join("").trim()==="":$.length===1&&$[0].length===0}function O(){if(K&&G&&(ae("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+v.DefaultDelimiter+"'"),G=!1),T.skipEmptyLines&&(K.data=K.data.filter(function(J){return!w(J)})),X()){let J=function(Fe){F.push(Fe)};var j=J;if(K)if(Array.isArray(K.data[0])){for(var $=0;X()&&$<K.data.length;$++)K.data[$].forEach(J);K.data.splice(0,1)}else K.data.forEach(J)}function ee(J,Fe){for(var Qe=T.header?{}:[],Me=0;Me<J.length;Me++){var ve=Me,ke=J[Me],ke=((de,Ne)=>(Xe=>(T.dynamicTypingFunction&&T.dynamicTyping[Xe]===void 0&&(T.dynamicTyping[Xe]=T.dynamicTypingFunction(Xe)),(T.dynamicTyping[Xe]||T.dynamicTyping)===!0))(de)?Ne==="true"||Ne==="TRUE"||Ne!=="false"&&Ne!=="FALSE"&&((Xe=>{if(Ce.test(Xe)&&(Xe=parseFloat(Xe),we<Xe&&Xe<te))return 1})(Ne)?parseFloat(Ne):I.test(Ne)?new Date(Ne):Ne===""?null:Ne):Ne)(ve=T.header?Me>=F.length?"__parsed_extra":F[Me]:ve,ke=T.transform?T.transform(ke,ve):ke);ve==="__parsed_extra"?(Qe[ve]=Qe[ve]||[],Qe[ve].push(ke)):Qe[ve]=ke}return T.header&&(Me>F.length?ae("FieldMismatch","TooManyFields","Too many fields: expected "+F.length+" fields but parsed "+Me,Q+Fe):Me<F.length&&ae("FieldMismatch","TooFewFields","Too few fields: expected "+F.length+" fields but parsed "+Me,Q+Fe)),Qe}var me;K&&(T.header||T.dynamicTyping||T.transform)&&(me=1,!K.data.length||Array.isArray(K.data[0])?(K.data=K.data.map(ee),me=K.data.length):K.data=ee(K.data,0),T.header&&K.meta&&(K.meta.fields=F),Q+=me)}function X(){return T.header&&F.length===0}function ae($,ee,me,j){$={type:$,code:ee,message:me},j!==void 0&&($.row=j),K.errors.push($)}L(T.step)&&(z=T.step,T.step=function($){K=$,X()?O():(O(),K.data.length!==0&&(Z+=$.data.length,T.preview&&Z>T.preview?H.abort():(K.data=K.data[0],z(K,U))))}),this.parse=function($,ee,me){var j=T.quoteChar||'"',j=(T.newline||(T.newline=this.guessLineEndings($,j)),G=!1,T.delimiter?L(T.delimiter)&&(T.delimiter=T.delimiter($),K.meta.delimiter=T.delimiter):((j=((J,Fe,Qe,Me,ve)=>{var ke,de,Ne,Xe;ve=ve||[",","	","|",";",v.RECORD_SEP,v.UNIT_SEP];for(var Pn=0;Pn<ve.length;Pn++){for(var Tn,pt=ve[Pn],Ze=0,Mn=0,Je=0,cn=(Ne=void 0,new be({comments:Me,delimiter:pt,newline:Fe,preview:10}).parse(J)),Xn=0;Xn<cn.data.length;Xn++)Qe&&w(cn.data[Xn])?Je++:(Tn=cn.data[Xn].length,Mn+=Tn,Ne===void 0?Ne=Tn:0<Tn&&(Ze+=Math.abs(Tn-Ne),Ne=Tn));0<cn.data.length&&(Mn/=cn.data.length-Je),1.99<Mn&&(de===void 0||Ze<de||Ze===de&&Xe<Mn)&&(de=Ze,ke=pt,Xe=Mn)}return{successful:!!(T.delimiter=ke),bestDelimiter:ke}})($,T.newline,T.skipEmptyLines,T.comments,T.delimitersToGuess)).successful?T.delimiter=j.bestDelimiter:(G=!0,T.delimiter=v.DefaultDelimiter),K.meta.delimiter=T.delimiter),Se(T));return j.header=X(),T.preview&&T.header&&j.preview++,S=$,H=new be(j),K=H.parse(S,ee,me),O(),le?{meta:{paused:!0}}:K||{meta:{paused:!1}}},this.paused=function(){return le},this.pause=function(){le=!0,H.abort(),S=L(T.chunk)?"":S.substring(H.getCharIndex())},this.resume=function(){U.streamer._halted?(le=!1,U.streamer.parseChunk(S,!0)):setTimeout(U.resume,3)},this.aborted=function(){return fe},this.abort=function(){fe=!0,H.abort(),K.meta.aborted=!0,L(T.complete)&&T.complete(K),S=""},this.guessLineEndings=function(J,j){J=J.substring(0,1048576);var j=new RegExp(se(j)+"([^]*?)"+se(j),"gm"),me=(J=J.replace(j,"")).split("\r"),j=J.split(`
`),J=1<j.length&&j[0].length<me[0].length;if(me.length===1||J)return`
`;for(var Fe=0,Qe=0;Qe<me.length;Qe++)me[Qe][0]===`
`&&Fe++;return Fe>=me.length/2?`\r
`:"\r"}}function se(T){return T.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function be(T){var S=(T=T||{}).delimiter,H=T.newline,G=T.comments,z=T.step,te=T.preview,we=T.fastMode,Ce=null,I=!1,U=T.quoteChar==null?'"':T.quoteChar,Z=U;if(T.escapeChar!==void 0&&(Z=T.escapeChar),(typeof S!="string"||-1<v.BAD_DELIMITERS.indexOf(S))&&(S=","),G===S)throw new Error("Comment character same as delimiter");G===!0?G="#":(typeof G!="string"||-1<v.BAD_DELIMITERS.indexOf(G))&&(G=!1),H!==`
`&&H!=="\r"&&H!==`\r
`&&(H=`
`);var Q=0,le=!1;this.parse=function(fe,F,K){if(typeof fe!="string")throw new Error("Input must be a string");var w=fe.length,O=S.length,X=H.length,ae=G.length,$=L(z),ee=[],me=[],j=[],J=Q=0;if(!fe)return Ze();if(we||we!==!1&&fe.indexOf(U)===-1){for(var Fe=fe.split(H),Qe=0;Qe<Fe.length;Qe++){if(j=Fe[Qe],Q+=j.length,Qe!==Fe.length-1)Q+=H.length;else if(K)return Ze();if(!G||j.substring(0,ae)!==G){if($){if(ee=[],Xe(j.split(S)),Mn(),le)return Ze()}else Xe(j.split(S));if(te&&te<=Qe)return ee=ee.slice(0,te),Ze(!0)}}return Ze()}for(var Me=fe.indexOf(S,Q),ve=fe.indexOf(H,Q),ke=new RegExp(se(Z)+se(U),"g"),de=fe.indexOf(U,Q);;)if(fe[Q]===U)for(de=Q,Q++;;){if((de=fe.indexOf(U,de+1))===-1)return K||me.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ee.length,index:Q}),Tn();if(de===w-1)return Tn(fe.substring(Q,de).replace(ke,U));if(U===Z&&fe[de+1]===Z)de++;else if(U===Z||de===0||fe[de-1]!==Z){Me!==-1&&Me<de+1&&(Me=fe.indexOf(S,de+1));var Ne=Pn((ve=ve!==-1&&ve<de+1?fe.indexOf(H,de+1):ve)===-1?Me:Math.min(Me,ve));if(fe.substr(de+1+Ne,O)===S){j.push(fe.substring(Q,de).replace(ke,U)),fe[Q=de+1+Ne+O]!==U&&(de=fe.indexOf(U,Q)),Me=fe.indexOf(S,Q),ve=fe.indexOf(H,Q);break}if(Ne=Pn(ve),fe.substring(de+1+Ne,de+1+Ne+X)===H){if(j.push(fe.substring(Q,de).replace(ke,U)),pt(de+1+Ne+X),Me=fe.indexOf(S,Q),de=fe.indexOf(U,Q),$&&(Mn(),le))return Ze();if(te&&ee.length>=te)return Ze(!0);break}me.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ee.length,index:Q}),de++}}else if(G&&j.length===0&&fe.substring(Q,Q+ae)===G){if(ve===-1)return Ze();Q=ve+X,ve=fe.indexOf(H,Q),Me=fe.indexOf(S,Q)}else if(Me!==-1&&(Me<ve||ve===-1))j.push(fe.substring(Q,Me)),Q=Me+O,Me=fe.indexOf(S,Q);else{if(ve===-1)break;if(j.push(fe.substring(Q,ve)),pt(ve+X),$&&(Mn(),le))return Ze();if(te&&ee.length>=te)return Ze(!0)}return Tn();function Xe(Je){ee.push(Je),J=Q}function Pn(Je){var cn=0;return cn=Je!==-1&&(Je=fe.substring(de+1,Je))&&Je.trim()===""?Je.length:cn}function Tn(Je){return K||(Je===void 0&&(Je=fe.substring(Q)),j.push(Je),Q=w,Xe(j),$&&Mn()),Ze()}function pt(Je){Q=Je,Xe(j),j=[],ve=fe.indexOf(H,Q)}function Ze(Je){if(T.header&&!F&&ee.length&&!I){var cn=ee[0],Xn=Object.create(null),Zn=new Set(cn);let $a=!1;for(let gt=0;gt<cn.length;gt++){let Kn=b(cn[gt]);if(Xn[Kn=L(T.transformHeader)?T.transformHeader(Kn,gt):Kn]){let Zt,ei=Xn[Kn];for(;Zt=Kn+"_"+ei,ei++,Zn.has(Zt););Zn.add(Zt),cn[gt]=Zt,Xn[Kn]++,$a=!0,(Ce=Ce===null?{}:Ce)[Zt]=Kn}else Xn[Kn]=1,cn[gt]=Kn;Zn.add(Kn)}$a&&console.warn("Duplicate headers found and renamed."),I=!0}return{data:ee,errors:me,meta:{delimiter:S,linebreak:H,aborted:le,truncated:!!Je,cursor:J+(F||0),renamedHeaders:Ce}}}function Mn(){z(Ze()),ee=[],me=[]}},this.abort=function(){le=!0},this.getCharIndex=function(){return Q}}function V(T){var S=T.data,H=h[S.workerId],G=!1;if(S.error)H.userError(S.error,S.file);else if(S.results&&S.results.data){var z={abort:function(){G=!0,ce(S.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:re,resume:re};if(L(H.userStep)){for(var te=0;te<S.results.data.length&&(H.userStep({data:S.results.data[te],errors:S.results.errors,meta:S.results.meta},z),!G);te++);delete S.results}else L(H.userChunk)&&(H.userChunk(S.results,z,S.file),delete S.results)}S.finished&&!G&&ce(S.workerId,S.results)}function ce(T,S){var H=h[T];L(H.userComplete)&&H.userComplete(S),H.terminate(),delete h[T]}function re(){throw new Error("Not implemented.")}function Se(T){if(typeof T!="object"||T===null)return T;var S,H=Array.isArray(T)?[]:{};for(S in T)H[S]=Se(T[S]);return H}function ue(T,S){return function(){T.apply(S,arguments)}}function L(T){return typeof T=="function"}return v.parse=function(T,S){var H=(S=S||{}).dynamicTyping||!1;if(L(H)&&(S.dynamicTypingFunction=H,H={}),S.dynamicTyping=H,S.transform=!!L(S.transform)&&S.transform,S.downloadTimeout!==void 0){var H=parseInt(S.downloadTimeout);if(isNaN(H))throw new Error("Config downloadTimeout value ("+S.downloadTimeout+") not parsable by parseInt(val).");S.downloadTimeout=H}if(!S.worker||!v.WORKERS_SUPPORTED)return H=null,v.NODE_STREAM_INPUT,typeof T=="string"?(T=b(T),H=new(S.download?y:q)(S)):T.readable===!0&&L(T.read)&&L(T.on)?H=new B(S):(l.File&&T instanceof File||T instanceof Object)&&(H=new _(S)),H.stream(T);(H=(()=>{var G;return!!v.WORKERS_SUPPORTED&&(G=(()=>{var z=l.URL||l.webkitURL||null,te=c.toString();return v.BLOB_URL||(v.BLOB_URL=z.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",te,")();"],{type:"text/javascript"})))})(),(G=new l.Worker(G)).onmessage=V,G.id=g++,h[G.id]=G)})()).userStep=S.step,H.userChunk=S.chunk,H.userComplete=S.complete,H.userError=S.error,S.step=L(S.step),S.chunk=L(S.chunk),S.complete=L(S.complete),S.error=L(S.error),delete S.worker,H.postMessage({input:T,config:S,workerId:H.id})},v.unparse=function(T,S){var H=!1,G=!0,z=",",te=`\r
`,we='"',Ce=we+we,I=!1,U=null,Z=!1,Q=((()=>{if(typeof S=="object"){if(typeof S.delimiter!="string"||v.BAD_DELIMITERS.filter(function(F){return S.delimiter.indexOf(F)!==-1}).length||(z=S.delimiter),typeof S.quotes!="boolean"&&typeof S.quotes!="function"&&!Array.isArray(S.quotes)||(H=S.quotes),typeof S.skipEmptyLines!="boolean"&&typeof S.skipEmptyLines!="string"||(I=S.skipEmptyLines),typeof S.newline=="string"&&(te=S.newline),typeof S.quoteChar=="string"&&(we=S.quoteChar,Ce=we+we),typeof S.header=="boolean"&&(G=S.header),Array.isArray(S.columns)){if(S.columns.length===0)throw new Error("Option columns is empty");U=S.columns}S.escapeChar!==void 0&&(Ce=S.escapeChar+we),S.escapeFormulae instanceof RegExp?Z=S.escapeFormulae:typeof S.escapeFormulae=="boolean"&&S.escapeFormulae&&(Z=/^[=+\-@\t\r].*$/)}})(),new RegExp(se(we),"g"));if(typeof T=="string"&&(T=JSON.parse(T)),Array.isArray(T)){if(!T.length||Array.isArray(T[0]))return le(null,T,I);if(typeof T[0]=="object")return le(U||Object.keys(T[0]),T,I)}else if(typeof T=="object")return typeof T.data=="string"&&(T.data=JSON.parse(T.data)),Array.isArray(T.data)&&(T.fields||(T.fields=T.meta&&T.meta.fields||U),T.fields||(T.fields=Array.isArray(T.data[0])?T.fields:typeof T.data[0]=="object"?Object.keys(T.data[0]):[]),Array.isArray(T.data[0])||typeof T.data[0]=="object"||(T.data=[T.data])),le(T.fields||[],T.data||[],I);throw new Error("Unable to serialize unrecognized input");function le(F,K,w){var O="",X=(typeof F=="string"&&(F=JSON.parse(F)),typeof K=="string"&&(K=JSON.parse(K)),Array.isArray(F)&&0<F.length),ae=!Array.isArray(K[0]);if(X&&G){for(var $=0;$<F.length;$++)0<$&&(O+=z),O+=fe(F[$],$);0<K.length&&(O+=te)}for(var ee=0;ee<K.length;ee++){var me=(X?F:K[ee]).length,j=!1,J=X?Object.keys(K[ee]).length===0:K[ee].length===0;if(w&&!X&&(j=w==="greedy"?K[ee].join("").trim()==="":K[ee].length===1&&K[ee][0].length===0),w==="greedy"&&X){for(var Fe=[],Qe=0;Qe<me;Qe++){var Me=ae?F[Qe]:Qe;Fe.push(K[ee][Me])}j=Fe.join("").trim()===""}if(!j){for(var ve=0;ve<me;ve++){0<ve&&!J&&(O+=z);var ke=X&&ae?F[ve]:ve;O+=fe(K[ee][ke],ve)}ee<K.length-1&&(!w||0<me&&!J)&&(O+=te)}}return O}function fe(F,K){var w,O,X;return F==null?"":F.constructor===Date?isNaN(F.getTime())?"":F.toISOString():(X=!1,Z&&typeof F=="string"&&Z.test(F)&&(F="'"+F,X=!0),O=(w=F.toString()).replace(Q,Ce),(X=X||H===!0||typeof H=="function"&&H(F,K)||Array.isArray(H)&&H[K]||((ae,$)=>{for(var ee=0;ee<$.length;ee++)if(-1<ae.indexOf($[ee]))return!0;return!1})(O,v.BAD_DELIMITERS)||-1<O.indexOf(z)||-1<w.indexOf(we)||O.charAt(0)===" "||O.charAt(O.length-1)===" ")?we+O+we:O)}},v.RECORD_SEP="",v.UNIT_SEP="",v.BYTE_ORDER_MARK="\uFEFF",v.BAD_DELIMITERS=["\r",`
`,'"',v.BYTE_ORDER_MARK],v.WORKERS_SUPPORTED=!u&&!!l.Worker,v.NODE_STREAM_INPUT=1,v.LocalChunkSize=10485760,v.RemoteChunkSize=5242880,v.DefaultDelimiter=",",v.Parser=be,v.ParserHandle=ie,v.NetworkStreamer=y,v.FileStreamer=_,v.StringStreamer=q,v.ReadableStreamStreamer=B,f&&(l.onmessage=function(T){T=T.data,v.WORKER_ID===void 0&&T&&(v.WORKER_ID=T.workerId),typeof T.input=="string"?l.postMessage({workerId:v.WORKER_ID,results:v.parse(T.input,T.config),finished:!0}):(l.File&&T.input instanceof File||T.input instanceof Object)&&(T=v.parse(T.input,T.config))&&l.postMessage({workerId:v.WORKER_ID,results:T,finished:!0})}),(y.prototype=Object.create(E.prototype)).constructor=y,(_.prototype=Object.create(E.prototype)).constructor=_,(q.prototype=Object.create(q.prototype)).constructor=q,(B.prototype=Object.create(E.prototype)).constructor=B,v})})(zs)),zs.exports}var UC=LC();const Wg=AC(UC);function Os(i,s){return i==null||s==null?NaN:i<s?-1:i>s?1:i>=s?0:NaN}function FC(i,s){return i==null||s==null?NaN:s<i?-1:s>i?1:s>=i?0:NaN}function qg(i){let s,c,l;i.length!==2?(s=Os,c=(g,v)=>Os(i(g),v),l=(g,v)=>i(g)-v):(s=i===Os||i===FC?i:QC,c=i,l=i);function u(g,v,b=0,E=g.length){if(b<E){if(s(v,v)!==0)return E;do{const y=b+E>>>1;c(g[y],v)<0?b=y+1:E=y}while(b<E)}return b}function f(g,v,b=0,E=g.length){if(b<E){if(s(v,v)!==0)return E;do{const y=b+E>>>1;c(g[y],v)<=0?b=y+1:E=y}while(b<E)}return b}function h(g,v,b=0,E=g.length){const y=u(g,v,b,E-1);return y>b&&l(g[y-1],v)>-l(g[y],v)?y-1:y}return{left:u,center:h,right:f}}function QC(){return 0}function YC(i){return i===null?NaN:+i}const VC=qg(Os),XC=VC.right;qg(YC).center;class ag extends Map{constructor(s,c=JC){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:c}}),s!=null)for(const[l,u]of s)this.set(l,u)}get(s){return super.get(ig(this,s))}has(s){return super.has(ig(this,s))}set(s,c){return super.set(ZC(this,s),c)}delete(s){return super.delete(KC(this,s))}}function ig({_intern:i,_key:s},c){const l=s(c);return i.has(l)?i.get(l):c}function ZC({_intern:i,_key:s},c){const l=s(c);return i.has(l)?i.get(l):(i.set(l,c),c)}function KC({_intern:i,_key:s},c){const l=s(c);return i.has(l)&&(c=i.get(l),i.delete(l)),c}function JC(i){return i!==null&&typeof i=="object"?i.valueOf():i}const $C=Math.sqrt(50),e0=Math.sqrt(10),n0=Math.sqrt(2);function js(i,s,c){const l=(s-i)/Math.max(0,c),u=Math.floor(Math.log10(l)),f=l/Math.pow(10,u),h=f>=$C?10:f>=e0?5:f>=n0?2:1;let g,v,b;return u<0?(b=Math.pow(10,-u)/h,g=Math.round(i*b),v=Math.round(s*b),g/b<i&&++g,v/b>s&&--v,b=-b):(b=Math.pow(10,u)*h,g=Math.round(i/b),v=Math.round(s/b),g*b<i&&++g,v*b>s&&--v),v<g&&.5<=c&&c<2?js(i,s,c*2):[g,v,b]}function t0(i,s,c){if(s=+s,i=+i,c=+c,!(c>0))return[];if(i===s)return[i];const l=s<i,[u,f,h]=l?js(s,i,c):js(i,s,c);if(!(f>=u))return[];const g=f-u+1,v=new Array(g);if(l)if(h<0)for(let b=0;b<g;++b)v[b]=(f-b)/-h;else for(let b=0;b<g;++b)v[b]=(f-b)*h;else if(h<0)for(let b=0;b<g;++b)v[b]=(u+b)/-h;else for(let b=0;b<g;++b)v[b]=(u+b)*h;return v}function Uu(i,s,c){return s=+s,i=+i,c=+c,js(i,s,c)[2]}function a0(i,s,c){s=+s,i=+i,c=+c;const l=s<i,u=l?Uu(s,i,c):Uu(i,s,c);return(l?-1:1)*(u<0?1/-u:u)}function i0(i,s,c){i=+i,s=+s,c=(u=arguments.length)<2?(s=i,i=0,1):u<3?1:+c;for(var l=-1,u=Math.max(0,Math.ceil((s-i)/c))|0,f=new Array(u);++l<u;)f[l]=i+l*c;return f}function rd(i,s){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(s).domain(i);break}return this}const rg=Symbol("implicit");function Bg(){var i=new ag,s=[],c=[],l=rg;function u(f){let h=i.get(f);if(h===void 0){if(l!==rg)return l;i.set(f,h=s.push(f)-1)}return c[h%c.length]}return u.domain=function(f){if(!arguments.length)return s.slice();s=[],i=new ag;for(const h of f)i.has(h)||i.set(h,s.push(h)-1);return u},u.range=function(f){return arguments.length?(c=Array.from(f),u):c.slice()},u.unknown=function(f){return arguments.length?(l=f,u):l},u.copy=function(){return Bg(s,c).unknown(l)},rd.apply(u,arguments),u}function jg(){var i=Bg().unknown(void 0),s=i.domain,c=i.range,l=0,u=1,f,h,g=!1,v=0,b=0,E=.5;delete i.unknown;function y(){var _=s().length,q=u<l,B=q?u:l,ie=q?l:u;f=(ie-B)/Math.max(1,_-v+b*2),g&&(f=Math.floor(f)),B+=(ie-B-f*(_-v))*E,h=f*(1-v),g&&(B=Math.round(B),h=Math.round(h));var se=i0(_).map(function(be){return B+f*be});return c(q?se.reverse():se)}return i.domain=function(_){return arguments.length?(s(_),y()):s()},i.range=function(_){return arguments.length?([l,u]=_,l=+l,u=+u,y()):[l,u]},i.rangeRound=function(_){return[l,u]=_,l=+l,u=+u,g=!0,y()},i.bandwidth=function(){return h},i.step=function(){return f},i.round=function(_){return arguments.length?(g=!!_,y()):g},i.padding=function(_){return arguments.length?(v=Math.min(1,b=+_),y()):v},i.paddingInner=function(_){return arguments.length?(v=Math.min(1,_),y()):v},i.paddingOuter=function(_){return arguments.length?(b=+_,y()):b},i.align=function(_){return arguments.length?(E=Math.max(0,Math.min(1,_)),y()):E},i.copy=function(){return jg(s(),[l,u]).round(g).paddingInner(v).paddingOuter(b).align(E)},rd.apply(y(),arguments)}function od(i,s,c){i.prototype=s.prototype=c,c.constructor=i}function Gg(i,s){var c=Object.create(i.prototype);for(var l in s)c[l]=s[l];return c}function Zr(){}var Yr=.7,Gs=1/Yr,Qi="\\s*([+-]?\\d+)\\s*",Vr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Mt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",r0=/^#([0-9a-f]{3,8})$/,o0=new RegExp(`^rgb\\(${Qi},${Qi},${Qi}\\)$`),s0=new RegExp(`^rgb\\(${Mt},${Mt},${Mt}\\)$`),l0=new RegExp(`^rgba\\(${Qi},${Qi},${Qi},${Vr}\\)$`),c0=new RegExp(`^rgba\\(${Mt},${Mt},${Mt},${Vr}\\)$`),u0=new RegExp(`^hsl\\(${Vr},${Mt},${Mt}\\)$`),d0=new RegExp(`^hsla\\(${Vr},${Mt},${Mt},${Vr}\\)$`),og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};od(Zr,Xr,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:sg,formatHex:sg,formatHex8:f0,formatHsl:h0,formatRgb:lg,toString:lg});function sg(){return this.rgb().formatHex()}function f0(){return this.rgb().formatHex8()}function h0(){return Ig(this).formatHsl()}function lg(){return this.rgb().formatRgb()}function Xr(i){var s,c;return i=(i+"").trim().toLowerCase(),(s=r0.exec(i))?(c=s[1].length,s=parseInt(s[1],16),c===6?cg(s):c===3?new Wn(s>>8&15|s>>4&240,s>>4&15|s&240,(s&15)<<4|s&15,1):c===8?Rs(s>>24&255,s>>16&255,s>>8&255,(s&255)/255):c===4?Rs(s>>12&15|s>>8&240,s>>8&15|s>>4&240,s>>4&15|s&240,((s&15)<<4|s&15)/255):null):(s=o0.exec(i))?new Wn(s[1],s[2],s[3],1):(s=s0.exec(i))?new Wn(s[1]*255/100,s[2]*255/100,s[3]*255/100,1):(s=l0.exec(i))?Rs(s[1],s[2],s[3],s[4]):(s=c0.exec(i))?Rs(s[1]*255/100,s[2]*255/100,s[3]*255/100,s[4]):(s=u0.exec(i))?fg(s[1],s[2]/100,s[3]/100,1):(s=d0.exec(i))?fg(s[1],s[2]/100,s[3]/100,s[4]):og.hasOwnProperty(i)?cg(og[i]):i==="transparent"?new Wn(NaN,NaN,NaN,0):null}function cg(i){return new Wn(i>>16&255,i>>8&255,i&255,1)}function Rs(i,s,c,l){return l<=0&&(i=s=c=NaN),new Wn(i,s,c,l)}function m0(i){return i instanceof Zr||(i=Xr(i)),i?(i=i.rgb(),new Wn(i.r,i.g,i.b,i.opacity)):new Wn}function Fu(i,s,c,l){return arguments.length===1?m0(i):new Wn(i,s,c,l??1)}function Wn(i,s,c,l){this.r=+i,this.g=+s,this.b=+c,this.opacity=+l}od(Wn,Fu,Gg(Zr,{brighter(i){return i=i==null?Gs:Math.pow(Gs,i),new Wn(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?Yr:Math.pow(Yr,i),new Wn(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new Wn(Za(this.r),Za(this.g),Za(this.b),Is(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ug,formatHex:ug,formatHex8:p0,formatRgb:dg,toString:dg}));function ug(){return`#${Va(this.r)}${Va(this.g)}${Va(this.b)}`}function p0(){return`#${Va(this.r)}${Va(this.g)}${Va(this.b)}${Va((isNaN(this.opacity)?1:this.opacity)*255)}`}function dg(){const i=Is(this.opacity);return`${i===1?"rgb(":"rgba("}${Za(this.r)}, ${Za(this.g)}, ${Za(this.b)}${i===1?")":`, ${i})`}`}function Is(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function Za(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function Va(i){return i=Za(i),(i<16?"0":"")+i.toString(16)}function fg(i,s,c,l){return l<=0?i=s=c=NaN:c<=0||c>=1?i=s=NaN:s<=0&&(i=NaN),new mt(i,s,c,l)}function Ig(i){if(i instanceof mt)return new mt(i.h,i.s,i.l,i.opacity);if(i instanceof Zr||(i=Xr(i)),!i)return new mt;if(i instanceof mt)return i;i=i.rgb();var s=i.r/255,c=i.g/255,l=i.b/255,u=Math.min(s,c,l),f=Math.max(s,c,l),h=NaN,g=f-u,v=(f+u)/2;return g?(s===f?h=(c-l)/g+(c<l)*6:c===f?h=(l-s)/g+2:h=(s-c)/g+4,g/=v<.5?f+u:2-f-u,h*=60):g=v>0&&v<1?0:h,new mt(h,g,v,i.opacity)}function g0(i,s,c,l){return arguments.length===1?Ig(i):new mt(i,s,c,l??1)}function mt(i,s,c,l){this.h=+i,this.s=+s,this.l=+c,this.opacity=+l}od(mt,g0,Gg(Zr,{brighter(i){return i=i==null?Gs:Math.pow(Gs,i),new mt(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?Yr:Math.pow(Yr,i),new mt(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,s=isNaN(i)||isNaN(this.s)?0:this.s,c=this.l,l=c+(c<.5?c:1-c)*s,u=2*c-l;return new Wn(Ou(i>=240?i-240:i+120,u,l),Ou(i,u,l),Ou(i<120?i+240:i-120,u,l),this.opacity)},clamp(){return new mt(hg(this.h),xs(this.s),xs(this.l),Is(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=Is(this.opacity);return`${i===1?"hsl(":"hsla("}${hg(this.h)}, ${xs(this.s)*100}%, ${xs(this.l)*100}%${i===1?")":`, ${i})`}`}}));function hg(i){return i=(i||0)%360,i<0?i+360:i}function xs(i){return Math.max(0,Math.min(1,i||0))}function Ou(i,s,c){return(i<60?s+(c-s)*i/60:i<180?c:i<240?s+(c-s)*(240-i)/60:s)*255}const sd=i=>()=>i;function v0(i,s){return function(c){return i+c*s}}function b0(i,s,c){return i=Math.pow(i,c),s=Math.pow(s,c)-i,c=1/c,function(l){return Math.pow(i+l*s,c)}}function y0(i){return(i=+i)==1?Lg:function(s,c){return c-s?b0(s,c,i):sd(isNaN(s)?c:s)}}function Lg(i,s){var c=s-i;return c?v0(i,c):sd(isNaN(i)?s:i)}const mg=(function i(s){var c=y0(s);function l(u,f){var h=c((u=Fu(u)).r,(f=Fu(f)).r),g=c(u.g,f.g),v=c(u.b,f.b),b=Lg(u.opacity,f.opacity);return function(E){return u.r=h(E),u.g=g(E),u.b=v(E),u.opacity=b(E),u+""}}return l.gamma=i,l})(1);function C0(i,s){s||(s=[]);var c=i?Math.min(s.length,i.length):0,l=s.slice(),u;return function(f){for(u=0;u<c;++u)l[u]=i[u]*(1-f)+s[u]*f;return l}}function S0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function w0(i,s){var c=s?s.length:0,l=i?Math.min(c,i.length):0,u=new Array(l),f=new Array(c),h;for(h=0;h<l;++h)u[h]=ld(i[h],s[h]);for(;h<c;++h)f[h]=s[h];return function(g){for(h=0;h<l;++h)f[h]=u[h](g);return f}}function P0(i,s){var c=new Date;return i=+i,s=+s,function(l){return c.setTime(i*(1-l)+s*l),c}}function Ls(i,s){return i=+i,s=+s,function(c){return i*(1-c)+s*c}}function T0(i,s){var c={},l={},u;(i===null||typeof i!="object")&&(i={}),(s===null||typeof s!="object")&&(s={});for(u in s)u in i?c[u]=ld(i[u],s[u]):l[u]=s[u];return function(f){for(u in c)l[u]=c[u](f);return l}}var Qu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Du=new RegExp(Qu.source,"g");function E0(i){return function(){return i}}function _0(i){return function(s){return i(s)+""}}function R0(i,s){var c=Qu.lastIndex=Du.lastIndex=0,l,u,f,h=-1,g=[],v=[];for(i=i+"",s=s+"";(l=Qu.exec(i))&&(u=Du.exec(s));)(f=u.index)>c&&(f=s.slice(c,f),g[h]?g[h]+=f:g[++h]=f),(l=l[0])===(u=u[0])?g[h]?g[h]+=u:g[++h]=u:(g[++h]=null,v.push({i:h,x:Ls(l,u)})),c=Du.lastIndex;return c<s.length&&(f=s.slice(c),g[h]?g[h]+=f:g[++h]=f),g.length<2?v[0]?_0(v[0].x):E0(s):(s=v.length,function(b){for(var E=0,y;E<s;++E)g[(y=v[E]).i]=y.x(b);return g.join("")})}function ld(i,s){var c=typeof s,l;return s==null||c==="boolean"?sd(s):(c==="number"?Ls:c==="string"?(l=Xr(s))?(s=l,mg):R0:s instanceof Xr?mg:s instanceof Date?P0:S0(s)?C0:Array.isArray(s)?w0:typeof s.valueOf!="function"&&typeof s.toString!="function"||isNaN(s)?T0:Ls)(i,s)}function x0(i,s){return i=+i,s=+s,function(c){return Math.round(i*(1-c)+s*c)}}function A0(i){return function(){return i}}function M0(i){return+i}var pg=[0,1];function Fi(i){return i}function Yu(i,s){return(s-=i=+i)?function(c){return(c-i)/s}:A0(isNaN(s)?NaN:.5)}function N0(i,s){var c;return i>s&&(c=i,i=s,s=c),function(l){return Math.max(i,Math.min(s,l))}}function k0(i,s,c){var l=i[0],u=i[1],f=s[0],h=s[1];return u<l?(l=Yu(u,l),f=c(h,f)):(l=Yu(l,u),f=c(f,h)),function(g){return f(l(g))}}function H0(i,s,c){var l=Math.min(i.length,s.length)-1,u=new Array(l),f=new Array(l),h=-1;for(i[l]<i[0]&&(i=i.slice().reverse(),s=s.slice().reverse());++h<l;)u[h]=Yu(i[h],i[h+1]),f[h]=c(s[h],s[h+1]);return function(g){var v=XC(i,g,1,l)-1;return f[v](u[v](g))}}function z0(i,s){return s.domain(i.domain()).range(i.range()).interpolate(i.interpolate()).clamp(i.clamp()).unknown(i.unknown())}function O0(){var i=pg,s=pg,c=ld,l,u,f,h=Fi,g,v,b;function E(){var _=Math.min(i.length,s.length);return h!==Fi&&(h=N0(i[0],i[_-1])),g=_>2?H0:k0,v=b=null,y}function y(_){return _==null||isNaN(_=+_)?f:(v||(v=g(i.map(l),s,c)))(l(h(_)))}return y.invert=function(_){return h(u((b||(b=g(s,i.map(l),Ls)))(_)))},y.domain=function(_){return arguments.length?(i=Array.from(_,M0),E()):i.slice()},y.range=function(_){return arguments.length?(s=Array.from(_),E()):s.slice()},y.rangeRound=function(_){return s=Array.from(_),c=x0,E()},y.clamp=function(_){return arguments.length?(h=_?!0:Fi,E()):h!==Fi},y.interpolate=function(_){return arguments.length?(c=_,E()):c},y.unknown=function(_){return arguments.length?(f=_,y):f},function(_,q){return l=_,u=q,E()}}function D0(){return O0()(Fi,Fi)}function W0(i){return Math.abs(i=Math.round(i))>=1e21?i.toLocaleString("en").replace(/,/g,""):i.toString(10)}function Us(i,s){if(!isFinite(i)||i===0)return null;var c=(i=s?i.toExponential(s-1):i.toExponential()).indexOf("e"),l=i.slice(0,c);return[l.length>1?l[0]+l.slice(2):l,+i.slice(c+1)]}function Yi(i){return i=Us(Math.abs(i)),i?i[1]:NaN}function q0(i,s){return function(c,l){for(var u=c.length,f=[],h=0,g=i[0],v=0;u>0&&g>0&&(v+g+1>l&&(g=Math.max(1,l-v)),f.push(c.substring(u-=g,u+g)),!((v+=g+1)>l));)g=i[h=(h+1)%i.length];return f.reverse().join(s)}}function B0(i){return function(s){return s.replace(/[0-9]/g,function(c){return i[+c]})}}var j0=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Fs(i){if(!(s=j0.exec(i)))throw new Error("invalid format: "+i);var s;return new cd({fill:s[1],align:s[2],sign:s[3],symbol:s[4],zero:s[5],width:s[6],comma:s[7],precision:s[8]&&s[8].slice(1),trim:s[9],type:s[10]})}Fs.prototype=cd.prototype;function cd(i){this.fill=i.fill===void 0?" ":i.fill+"",this.align=i.align===void 0?">":i.align+"",this.sign=i.sign===void 0?"-":i.sign+"",this.symbol=i.symbol===void 0?"":i.symbol+"",this.zero=!!i.zero,this.width=i.width===void 0?void 0:+i.width,this.comma=!!i.comma,this.precision=i.precision===void 0?void 0:+i.precision,this.trim=!!i.trim,this.type=i.type===void 0?"":i.type+""}cd.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function G0(i){e:for(var s=i.length,c=1,l=-1,u;c<s;++c)switch(i[c]){case".":l=u=c;break;case"0":l===0&&(l=c),u=c;break;default:if(!+i[c])break e;l>0&&(l=0);break}return l>0?i.slice(0,l)+i.slice(u+1):i}var Qs;function I0(i,s){var c=Us(i,s);if(!c)return Qs=void 0,i.toPrecision(s);var l=c[0],u=c[1],f=u-(Qs=Math.max(-8,Math.min(8,Math.floor(u/3)))*3)+1,h=l.length;return f===h?l:f>h?l+new Array(f-h+1).join("0"):f>0?l.slice(0,f)+"."+l.slice(f):"0."+new Array(1-f).join("0")+Us(i,Math.max(0,s+f-1))[0]}function gg(i,s){var c=Us(i,s);if(!c)return i+"";var l=c[0],u=c[1];return u<0?"0."+new Array(-u).join("0")+l:l.length>u+1?l.slice(0,u+1)+"."+l.slice(u+1):l+new Array(u-l.length+2).join("0")}const vg={"%":(i,s)=>(i*100).toFixed(s),b:i=>Math.round(i).toString(2),c:i=>i+"",d:W0,e:(i,s)=>i.toExponential(s),f:(i,s)=>i.toFixed(s),g:(i,s)=>i.toPrecision(s),o:i=>Math.round(i).toString(8),p:(i,s)=>gg(i*100,s),r:gg,s:I0,X:i=>Math.round(i).toString(16).toUpperCase(),x:i=>Math.round(i).toString(16)};function bg(i){return i}var yg=Array.prototype.map,Cg=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function L0(i){var s=i.grouping===void 0||i.thousands===void 0?bg:q0(yg.call(i.grouping,Number),i.thousands+""),c=i.currency===void 0?"":i.currency[0]+"",l=i.currency===void 0?"":i.currency[1]+"",u=i.decimal===void 0?".":i.decimal+"",f=i.numerals===void 0?bg:B0(yg.call(i.numerals,String)),h=i.percent===void 0?"%":i.percent+"",g=i.minus===void 0?"−":i.minus+"",v=i.nan===void 0?"NaN":i.nan+"";function b(y,_){y=Fs(y);var q=y.fill,B=y.align,ie=y.sign,se=y.symbol,be=y.zero,V=y.width,ce=y.comma,re=y.precision,Se=y.trim,ue=y.type;ue==="n"?(ce=!0,ue="g"):vg[ue]||(re===void 0&&(re=12),Se=!0,ue="g"),(be||q==="0"&&B==="=")&&(be=!0,q="0",B="=");var L=(_&&_.prefix!==void 0?_.prefix:"")+(se==="$"?c:se==="#"&&/[boxX]/.test(ue)?"0"+ue.toLowerCase():""),T=(se==="$"?l:/[%p]/.test(ue)?h:"")+(_&&_.suffix!==void 0?_.suffix:""),S=vg[ue],H=/[defgprs%]/.test(ue);re=re===void 0?6:/[gprs]/.test(ue)?Math.max(1,Math.min(21,re)):Math.max(0,Math.min(20,re));function G(z){var te=L,we=T,Ce,I,U;if(ue==="c")we=S(z)+we,z="";else{z=+z;var Z=z<0||1/z<0;if(z=isNaN(z)?v:S(Math.abs(z),re),Se&&(z=G0(z)),Z&&+z==0&&ie!=="+"&&(Z=!1),te=(Z?ie==="("?ie:g:ie==="-"||ie==="("?"":ie)+te,we=(ue==="s"&&!isNaN(z)&&Qs!==void 0?Cg[8+Qs/3]:"")+we+(Z&&ie==="("?")":""),H){for(Ce=-1,I=z.length;++Ce<I;)if(U=z.charCodeAt(Ce),48>U||U>57){we=(U===46?u+z.slice(Ce+1):z.slice(Ce))+we,z=z.slice(0,Ce);break}}}ce&&!be&&(z=s(z,1/0));var Q=te.length+z.length+we.length,le=Q<V?new Array(V-Q+1).join(q):"";switch(ce&&be&&(z=s(le+z,le.length?V-we.length:1/0),le=""),B){case"<":z=te+z+we+le;break;case"=":z=te+le+z+we;break;case"^":z=le.slice(0,Q=le.length>>1)+te+z+we+le.slice(Q);break;default:z=le+te+z+we;break}return f(z)}return G.toString=function(){return y+""},G}function E(y,_){var q=Math.max(-8,Math.min(8,Math.floor(Yi(_)/3)))*3,B=Math.pow(10,-q),ie=b((y=Fs(y),y.type="f",y),{suffix:Cg[8+q/3]});return function(se){return ie(B*se)}}return{format:b,formatPrefix:E}}var As,Ug,Fg;U0({thousands:",",grouping:[3],currency:["$",""]});function U0(i){return As=L0(i),Ug=As.format,Fg=As.formatPrefix,As}function F0(i){return Math.max(0,-Yi(Math.abs(i)))}function Q0(i,s){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Yi(s)/3)))*3-Yi(Math.abs(i)))}function Y0(i,s){return i=Math.abs(i),s=Math.abs(s)-i,Math.max(0,Yi(s)-Yi(i))+1}function V0(i,s,c,l){var u=a0(i,s,c),f;switch(l=Fs(l??",f"),l.type){case"s":{var h=Math.max(Math.abs(i),Math.abs(s));return l.precision==null&&!isNaN(f=Q0(u,h))&&(l.precision=f),Fg(l,h)}case"":case"e":case"g":case"p":case"r":{l.precision==null&&!isNaN(f=Y0(u,Math.max(Math.abs(i),Math.abs(s))))&&(l.precision=f-(l.type==="e"));break}case"f":case"%":{l.precision==null&&!isNaN(f=F0(u))&&(l.precision=f-(l.type==="%")*2);break}}return Ug(l)}function X0(i){var s=i.domain;return i.ticks=function(c){var l=s();return t0(l[0],l[l.length-1],c??10)},i.tickFormat=function(c,l){var u=s();return V0(u[0],u[u.length-1],c??10,l)},i.nice=function(c){c==null&&(c=10);var l=s(),u=0,f=l.length-1,h=l[u],g=l[f],v,b,E=10;for(g<h&&(b=h,h=g,g=b,b=u,u=f,f=b);E-- >0;){if(b=Uu(h,g,c),b===v)return l[u]=h,l[f]=g,s(l);if(b>0)h=Math.floor(h/b)*b,g=Math.ceil(g/b)*b;else if(b<0)h=Math.ceil(h*b)/b,g=Math.floor(g*b)/b;else break;v=b}return i},i}function Qg(){var i=D0();return i.copy=function(){return z0(i,Qg())},rd.apply(i,arguments),X0(i)}const Z0={"Sheet and Rill Erosion":"sheet-and-rill-erosion","Wind Erosion":"wind-erosion","Ephemeral Gully Erosion":"ephemeral-gully-erosion","Classic Gully Erosion":"classic-gully-erosion","Bank Erosion from Streams, Shorelines or Water Conveyance Channels":"bank-erosion-from-streams-shorelines-or-water-conveyance-channels",Subsidence:"subsidence",Compaction:"compaction","Organic Matter Depletion":"organic-matter-depletion","Concentration of Salts or other Chemicals":"concentration-of-salts-or-other-chemicals","Soil Organism Habitat Loss or Degradation":"soil-organism-habitat-degradation","Aggregate Instability":"aggregate-instability","Ponding and Flooding":"ponding-and-flooding","Seasonal High Water Table":"seasonal-high-water-table",Seeps:"seeps","Drifted Snow":"drifted-snow","Naturally Available Moisture Use":"naturally-available-moisture-use","Surface Water Depletion":"surface-water-depletion","Groundwater Depletion":"groundwater-depletion","Inefficient Irrigation Water Use":"inefficient-irrigation-water-use","Nutrients Transported to Surface Water":"nutrients-transported-to-surface-water","Nutrients Transported to Groundwater":"nutrients-transported-to-groundwater","Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water":"pathogens-and-chemicals-from-manure-bio-solids-or-compost-applications-transported-to-surface-water","Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater":"pathogens-and-chemicals-from-manure-bio-solids-or-compost-applications-transported-to-groundwater","Sediment Transported to Surface Water":"sediment-transported-to-surface-water","Pesticides Transported to Surface Water":"pesticides-transported-to-surface-water","Pesticides Transported to Groundwater":"pesticides-transported-to-groundwater","Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water":"petroleum-heavy-metals-and-other-pollutants-transported-to-surface-water","Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater":"petroleum-heavy-metals-and-other-pollutants-transported-to-groundwater","Salts Transported to Surface Water":"salts-transported-to-surface-water","Salts Transported to Groundwater":"salts-transported-to-groundwater","Elevated water temperature":"elevated-water-temperature","Emissions of Particulate Matter (PM) and PM Precursors":"emissions-of-particulate-matter-pm-and-pm-precursors","Emissions of Greenhouse Gasses - GHGs":"emissions-of-greenhouse-gasses-ghgs","Emissions of Ozone Precursors":"emissions-of-ozone-precursors","Objectionable Odor":"objectionable-odor","Emissions of Airborne Reactive Nitrogen":"emissions-of-airborne-reactive-nitrogen","Plant Pest Pressure":"plant-pest-pressure","Plant Productivity and Health":"plant-productivity-and-health","Plant Structure and Composition":"plant-structure-and-composition","Wildfire Hazard from Biomass Accumulation":"wildfire-hazard-from-biomass-accumulation","Feed and Forage Imbalance":"feed-and-forage-imbalance","Inadequate Livestock Shelter":"inadequate-livestock-shelter","Inadequate Livestock Water Quantity, Quality and Distribution":"inadequate-livestock-water-quantity-quality-and-distribution","Terrestrial Habitat for Wildlife and Invertebrates":"terrestrial-habitat-for-wildlife-and-invertebrates","Aquatic Habitat for Fish and other Organisms":"aquatic-habitat-for-fish-and-other-organisms","Energy Efficiency of Equipment and Facilities":"energy-efficiency-of-equipment-and-facilities","Energy Efficiency of Farming/Ranching Practices and Field Operations":"energy-efficiency-of-farming-ranching-practices-and-field-operations"},K0={"Fence ":{slug:"cp-382-fence",cp:"382",definition:"A constructed barrier to animals or people."},"Streambank and Shoreline Protection ":{slug:"cp-580-streambank-and-shoreline-protection",cp:"580",definition:"Treatment(s) used to stabilize and protect banks of streams or constructed channels and shorelines of lakes, reservoirs, or estuaries."},"Heavy Use Area Protection ":{slug:"cp-561-heavy-use-area-protection",cp:"561",definition:"Stabilization or protection of an intensively used area."},"Livestock Pipeline ":{slug:"cp-516-livestock-pipeline",cp:"516",definition:"A pipeline and appurtenances installed to convey water for livestock or wildlife."},"Prescribed Grazing (IRA)":{slug:"cp-528-prescribed-grazing",cp:"528",definition:"Managing the harvest of vegetation with grazing and/or browsing animals with the intent to achieve specific ecological, economic, and management objectives."},"Cover Crop (IRA)":{slug:"cp-340-cover-crop",cp:"340",definition:"Grasses, legumes, and forbs planted for seasonal vegetative cover."},"Tree/Shrub Establishment (IRA)":{slug:"cp-612-tree-and-shrub-establishment",cp:"612",definition:"Establishing woody plants by planting, direct seeding, or through natural regeneration."},"Brush Management ":{slug:"cp-314-brush-management",cp:"314",definition:"The management or removal of woody (nonherbaceous or succulent) plants including those that are invasive and noxious."},"Dike and Levee ":{slug:"cp-356-dike-and-levee",cp:"356",definition:"A barrier used to retain water on the landscape using a wetland dike; or, a barrier used to exclude water from the landscape and protect property and infrastructure from flooding using a flood control levee."},"Herbaceous Weed Treatment ":{slug:"cp-315-herbaceous-weed-treatment",cp:"315",definition:"The removal or control of herbaceous weeds including invasive, noxious, prohibited, or undesirable plants."},"Residue and Tillage Mgmt (No Till) (IRA)":{slug:"cp-329-residue-and-tillage-mgmt-no-till",cp:"329",definition:"Limiting soil disturbance to manage the amount, orientation and distribution of crop and plant residue on the soil surface year around."},"Residue and Tillage Mgmt (Reduced Till) (IRA)":{slug:"cp-345-residue-and-tillage-mgmt-reduced-till",cp:"345",definition:"Managing the amount, orientation, and distribution of crop and other plant residue on the soil surface year-round while limiting soil-disturbing activities used to grow and harvest crops in systems where the field surface is tilled prior to planting."},"Conservation Crop Rotation (IRA)":{slug:"cp-328-conservation-crop-rotation",cp:"328",definition:"A planned sequence of crops grown on the same ground over a period of time (i.e. the rotation cycle)."},"Wildlife Habitat Planting (IRA)":{slug:"cp-420-wildlife-habitat-planting",cp:"420",definition:"Establishing wildlife habitat by planting herbaceous vegetation or shrubs"},"Pasture and Hay Planting ":{slug:"cp-512-pasture-and-hay-planting",cp:"512",definition:"Establishing adapted and compatible species, varieties, or cultivars of perennial herbaceous plants suitable for pasture or hay production."},"Critical Area Planting (IRA)":{slug:"cp-342-critical-area-planting",cp:"342",definition:"Establishing permanent vegetation on sites that have, or are expected to have, high erosion rates, and on sites that have physical, chemical, or biological conditions that prevent the establishment of vegetation with normal seeding/planting methods."},"Range planting (IRA)":{slug:"cp-550-range-planting",cp:"550",definition:""},"Channel Bed Stabilization ":{slug:"cp-584-channel-bed-stablilization",cp:"584",definition:"Measure(s) used to stabilize the bed or bottom of a channel."},"Conservation Cover (IRA)":{slug:"cp-327-conservation-cover",cp:"327",definition:"Establishing and maintaining permanent vegetative cover"},"Access Control ":{slug:"cp-472-access-control",cp:"472",definition:"The temporary or permanent exclusion of animals, people, vehicles, and equipment from an area."},"Wetland Restoration (IRA)":{slug:"cp-657-wetland-restoration",cp:"657",definition:"The return of a wetland and its functions to a close approximation of its original condition as it existed prior to disturbance on a former or degraded wetland site."},"Watering Facility ":{slug:"cp-614-watering-facility",cp:"614",definition:""},"Riparian Forest Buffer (IRA)":{slug:"cp-391-riparian-forest-buffer",cp:"391",definition:"An area predominantly covered by trees and/or shrubs located adjacent to and up-gradient from a watercourse or water body."},"Nutrient Management (IRA)":{slug:"cp-590-nutrient-management",cp:"590",definition:"Manage rate, source, placement, and timing of plant nutrients and soil amendments while reducing environmental impacts."},"Pest Management Conservation System ":{slug:"cp-595-pest-management-conservation-system",cp:"595",definition:""},"Structures for Wildlife ":{slug:"cp-649-structures-for-wildlife",cp:"649",definition:"A structure installed to replace or modify a missing or deficient wildlife habitat component."},"Stream Crossing ":{slug:"cp-578-stream-crossing",cp:"578",definition:"A stabilized area or structure constructed across a stream to provide controlled access for people, livestock, equipment, or vehicles."},"Structure for Water Control ":{slug:"cp-587-structure-for-water-control",cp:"587",definition:"A structure in a water management system that conveys water, controls the direction or rate of flow, maintains a desired water surface elevation, or measures water."},"Stream Habitat Improvement and Management ":{slug:"cp-395-stream-habitat-improvement-and-management",cp:"395",definition:"Improve, restore, or maintain the ecological functions of a stream and its adjacent floodplain and riparian area."},"Grade Stabilization Structure ":{slug:"cp-410-grade-stabilization-structure",cp:"410",definition:"A structure used to control the grade in natural or constructed channels."},"Riparian Herbaceous Cover (IRA)":{slug:"cp-390-riparian-herbaceous-cover",cp:"390",definition:"Grasses, sedges, rushes, ferns, legumes, and forbs tolerant of intermittent flooding or saturated soils, established or managed as the dominant vegetation in the transitional zone between upland and aquatic habitats."},"Aquatic Organism Passage ":{slug:"cp-396-aquatic-organism-passage",cp:"396",definition:"Modification or removal of barriers that restrict or impede movement of aquatic organisms."},"Wetland Creation ":{slug:"cp-658-wetland-creation",cp:"658",definition:"A wetland created on a site location that was historically not a wetland."},"Wetland Enhancement ":{slug:"cp-659-wetland-enhancement",cp:"659",definition:"The augmentation of wetland functions beyond the original natural conditions on a former, degraded, or naturally functioning wetland site; sometimes at the expense of other functions."},"Wetland Wildlife Habitat Management ":{slug:"cp-644-wetland-wildlife-habitat-management",cp:"644",definition:"Retaining, developing or managing wetland habitat for wetland wildlife."},"Shallow Water Development and Management ":{slug:"cp-646-shallow-water-development-and-management",cp:"646",definition:"The inundation of lands to provide habitat for fish and/or wildlife."},"Restoration of Rare and Declining Habitats":{slug:"cp-643-restoration-of-rare-and-declining-habitats",cp:"643",definition:"Reestablishment of abiotic (physical and chemical) and biotic (biological) conditions necessary to support rare or declining natural assemblages of native plants and animals."}},At={concerns:Z0,practices:K0};function Sg(i){return i.replace(/["]+/g,"").trim()}function J0(i){const s={};for(const c of i)c.category&&(s[c.category]?s[c.category].push(Sg(c.concern)):s[c.category]=[Sg(c.concern)]);return s}async function Wu(i){const s=await fetch(i).then(c=>c.text());return new Promise(c=>Wg.parse(s,{header:!0,skipEmptyLines:!0,complete:l=>c(l.data)}))}let Ms=null;async function ud(){if(Ms)return Ms;const[i,s,c,l]=await Promise.all([Wu(`${wn}data/conservation_practices_long.csv`),Wu(`${wn}data/concerns_by_category.csv`),fetch(`${wn}data/concern_descriptions_map.json`).then(f=>f.json()),Wu(`${wn}data/conservation_practice_descriptions.csv`)]),u={};for(const f of l){const h=f["Conservation Practice"]||"",g=/^CP #(\d+)\s*\|\s*(.+?)\s*\|/.exec(h);g&&(u[g[1]]={name:g[2],definition:f.Definition||""})}return Ms={practiceConcernPairs:i.filter(f=>f.conservation_practice&&f.concern),concernsByCategory:J0(s),concernDescriptions:c,practiceDescriptions:u},Ms}function $0(i,s){const c=new Set;for(const l of i)s.includes(l.concern)&&l.value!=0&&c.add(l.conservation_practice);return c}function eS(i,s,c){return i.filter(l=>s.includes(l.concern)&&c.has(l.conservation_practice))}function nS(i){const s={};for(const c of i)c.conservation_practice in s||(s[c.conservation_practice]=0),s[c.conservation_practice]+=Number(c.value);return s}function tS(i){const s=nS(i);return i.sort((c,l)=>s[l.conservation_practice]-s[c.conservation_practice]),s}function Yg(i,s){const c=$0(i.practiceConcernPairs,s),l=eS(i.practiceConcernPairs,s,c),u=tS(l),f=[...new Set(l.map(v=>v.conservation_practice))],h=[...new Set(l.map(v=>v.concern))],g={};for(const v of l)(g[v.conservation_practice]||={})[v.concern]=Number(v.value);return{pairs:l,scores:u,practices:f,concerns:h,byPractice:g}}function aS(i,s=3){return i.practices.filter(c=>i.scores[c]>0).slice(0,s).map(c=>({name:c,score:i.scores[c],addressed:i.concerns.filter(l=>(i.byPractice[c]?.[l]??0)>0).length,worsens:i.concerns.filter(l=>(i.byPractice[c]?.[l]??0)<0).length}))}const Ds=i=>i.replace(/\(IRA\)$/,"").trim(),Vu=Qg().domain([-2,1,0,1,2,3,4,5]).range(["#ad1313","#d65151","#f2efee","#cde3ee","#8fc2dc","#4b94c4","#2265a3","#053061"]);function Xu(i){return i==1||i==0?"black":"white"}const qu=[-2,-1,0,1,2,3,4,5];function iS(i){const s=[...new Set(i.map(u=>u.concern))],c=[["Conservation Practice",...s]],l=i.reduce((u,f)=>(u[f.conservation_practice]||(u[f.conservation_practice]={}),u[f.conservation_practice][f.concern]=f.value,u),{});for(const[u,f]of Object.entries(l)){const h=[u];for(const g of s)h.push(f[g]||"");c.push(h)}return c}function wg(i,s="concerns.csv"){const c=Wg.unparse(iS(i),{header:!0}),l=new Blob([c],{type:"text/csv;charset=utf-8;"}),u=URL.createObjectURL(l),f=document.createElement("a");f.href=u,f.download=s,f.click(),URL.revokeObjectURL(u)}const Ks=["name","state","county","organization","role"];function Vg(i){const s=(i.get("concerns")||"").split(":").map(l=>l.trim()).filter(Boolean),c={};for(const l of Ks)c[l]=i.get(l)||"";return{concerns:s,form:c}}function Yt(i,s){const c={};for(const l of Ks)i[l]&&(c[l]=i[l]);return s.length&&(c.concerns=s.join(":")),c}const dd=i=>!!(i&&i.state&&i.county&&i.organization);function Zu(){const i=Zg()||{form:{},concerns:[]},s={...Object.fromEntries(Ks.map(u=>[u,""])),...i.form||{}},c=Array.isArray(i.concerns)?i.concerns:[],l=dd(s)&&c.length>0;return{form:s,concerns:c,complete:l,query:Yt(s,c)}}const Xg="aquacorridors-planner",Ku="aquacorridors:planner";function fd(i){try{sessionStorage.setItem(Xg,JSON.stringify(i))}catch{}window.dispatchEvent(new Event(Ku))}function Zg(){try{return JSON.parse(sessionStorage.getItem(Xg)||"null")}catch{return null}}const rS=[["AL","Alabama"],["AK","Alaska"],["AZ","Arizona"],["AR","Arkansas"],["CA","California"],["CO","Colorado"],["CT","Connecticut"],["DE","Delaware"],["DC","District Of Columbia"],["FL","Florida"],["GA","Georgia"],["HI","Hawaii"],["ID","Idaho"],["IL","Illinois"],["IN","Indiana"],["IA","Iowa"],["KS","Kansas"],["KY","Kentucky"],["LA","Louisiana"],["ME","Maine"],["MD","Maryland"],["MA","Massachusetts"],["MI","Michigan"],["MN","Minnesota"],["MS","Mississippi"],["MO","Missouri"],["MT","Montana"],["NE","Nebraska"],["NV","Nevada"],["NH","New Hampshire"],["NJ","New Jersey"],["NM","New Mexico"],["NY","New York"],["NC","North Carolina"],["ND","North Dakota"],["OH","Ohio"],["OK","Oklahoma"],["OR","Oregon"],["PA","Pennsylvania"],["RI","Rhode Island"],["SC","South Carolina"],["SD","South Dakota"],["TN","Tennessee"],["TX","Texas"],["UT","Utah"],["VT","Vermont"],["VA","Virginia"],["WA","Washington"],["WV","West Virginia"],["WI","Wisconsin"],["WY","Wyoming"],["NONE","None"]];function oS({route:i}){const s=i.parts[0]||"",c=s==="planner"?"Planner":s==="handbook"?"Handbook":"Tool Suite",l=h=>h===s?"active":"",u=sS(),f=u.complete?ze("/planner/results",u.query):ze("/planner");return p.jsxs("div",{className:"toolbar",children:[p.jsxs("a",{className:"brand",href:ze("/"),children:[p.jsx("img",{src:`${wn}art/wlfw-logo-black.png`,alt:"Working Lands for Wildlife"}),p.jsxs("span",{children:[p.jsx("b",{children:"AquaCorridors"})," ",c]})]}),p.jsx("span",{className:"spacer"}),p.jsxs("nav",{"aria-label":"AquaCorridors tools",children:[p.jsx("a",{className:l("planner"),href:f,title:u.complete?"Your Planner results":"Open the Planner",children:u.complete?"Planner results":"Planner"}),p.jsx("a",{className:l("handbook"),href:ze("/handbook"),children:"Handbook"}),p.jsx("a",{href:Bs(),title:"Southern Waters conservation report for an area of interest",children:"Report generator"}),p.jsx("a",{className:l(""),href:ze("/"),children:"Overview"})]})]})}function sS(){const[i,s]=pe.useState(Zu);return pe.useEffect(()=>{const c=()=>s(Zu());return window.addEventListener(Ku,c),window.addEventListener("hashchange",c),()=>{window.removeEventListener(Ku,c),window.removeEventListener("hashchange",c)}},[]),i}function lS(){return p.jsxs("footer",{className:"footer",children:[p.jsx("span",{children:"Planner data: USDA NRCS Conservation Practice Physical Effects (CPPE) · Handbook: the AquaCorridors Handbook · Report generator: Working Lands for Wildlife · Southern Waters"}),p.jsxs("span",{className:"credit",children:["Illustrations by ",p.jsx("img",{src:`${wn}art/erick-signature.png`,alt:"Erick Ingraham"})]})]})}function Kg({msg:i}){return i?p.jsx("div",{className:"toast",role:"status",children:i}):null}function Jg(){const[i,s]=pe.useState("");return pe.useEffect(()=>{if(!i)return;const c=setTimeout(()=>s(""),2200);return()=>clearTimeout(c)},[i]),[i,s]}async function $g(i){try{return await navigator.clipboard.writeText(i),!0}catch{return!1}}const Pg="https://archive.landscapepartnership.org/networks/working-lands-for-wildlife/landscapes-wildlife/landscapes/aquatics/maps-and-data/aquacorridors-tool-suite";function cS(){return p.jsxs(p.Fragment,{children:[p.jsx("section",{className:"section",style:{paddingTop:6},children:p.jsxs("div",{className:"hero sand",style:{minHeight:300},children:[p.jsx("div",{className:"deco",style:{right:-60,top:-60,width:260,height:130,background:"var(--lmoss)",borderRadius:"0 0 260px 260px"}}),p.jsx("img",{className:"deco art",src:`${wn}art/watershed.jpg`,alt:"",style:{right:"-8%",bottom:"-12%",width:"min(58%,680px)"}}),p.jsxs("div",{className:"copy",style:{maxWidth:520},children:[p.jsx("div",{className:"eyebrow",children:"Working Lands for Wildlife · Aquatics"}),p.jsxs("h1",{style:{fontSize:"clamp(30px,4.6vw,50px)"},children:["The AquaCorridors",p.jsx("br",{}),"Tool Suite"]}),p.jsx("p",{className:"lede",children:"The AquaCorridor Tools aim to streamline collaboration in aquatic conservation across the eastern and central United States, empowering landscape-scale, transformative projects."}),p.jsxs("div",{className:"cluster",children:[p.jsx("a",{className:"pill river",href:ze("/planner"),children:"Start with the Planner →"}),p.jsx("a",{className:"pill",href:ze("/handbook"),children:"Browse the Handbook"}),p.jsx("a",{className:"pill",href:Bs(),children:"Generate a report"})]})]})]})}),p.jsx("section",{className:"section",id:"tools",style:{paddingTop:36},children:p.jsxs("div",{className:"card-grid",style:{gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))"},children:[p.jsxs("a",{className:"tool-card river has-art",href:ze("/planner"),children:[p.jsx("span",{className:"num",children:"01 · Planner"}),p.jsx("span",{className:"t",children:"Which practices address my concerns?"}),p.jsx("p",{children:"Tell us which resource concerns you have on your land. The Planner lists the NRCS conservation practices that address them, scored with USDA's Conservation Practice Physical Effects (CPPE) data, and links each one to the Handbook."}),p.jsx("span",{className:"foot",children:p.jsx("span",{className:"pill sm sand",children:"Open the Planner →"})}),p.jsx("img",{className:"circle",src:`${wn}art/circle-riparian-buffer.png`,alt:""})]}),p.jsxs("a",{className:"tool-card pine has-art",href:ze("/handbook"),children:[p.jsx("span",{className:"num",children:"02 · Handbook"}),p.jsx("span",{className:"t",children:"Practices, concerns, benefits, funding"}),p.jsx("p",{children:"Conservation practices, threats and resource concerns, benefits, NRCS and FSA funding programs, and a directory of other decision-support tools. Explore by benefit, by threat, or by practice."}),p.jsx("span",{className:"foot",children:p.jsx("span",{className:"pill sm sand",children:"Open the Handbook →"})}),p.jsx("img",{className:"circle",src:`${wn}art/circle-streambank-protection.png`,alt:""})]}),p.jsxs("a",{className:"tool-card sand has-art",href:Bs(),children:[p.jsx("span",{className:"num",children:"03 · Report generator"}),p.jsx("span",{className:"t",children:"A conservation report for your area"}),p.jsx("p",{children:"Draw or pick an area in the Southeast and get a report on at-risk aquatic species, the SECAS Blueprint, impaired waters (EPA ATTAINS), aquatic barriers (SARP), partner organizations and more — the Working Lands for Wildlife · Southern Waters report generator."}),p.jsx("span",{className:"foot",children:p.jsx("span",{className:"pill sm river",children:"Open the Report generator →"})}),p.jsx("img",{className:"circle",src:`${wn}art/circle-aquatic-organism-passage.png`,alt:""})]})]})}),p.jsxs("section",{className:"section",id:"how",style:{paddingTop:44},children:[p.jsxs("div",{className:"section-head",children:[p.jsx("span",{className:"arch",style:{background:"var(--moss)"}}),p.jsx("span",{className:"title",children:"How the Planner and Handbook fit together"})]}),p.jsxs("div",{className:"row",children:[p.jsxs("div",{className:"panel lmoss",children:[p.jsx("div",{className:"ptitle",children:"1 · Pick your resource concerns"}),p.jsx("p",{className:"small",children:"The Planner's concern list is the same list of threats and resource concerns the Handbook documents. Every concern has an info button with its definition and a link to its Handbook page."})]}),p.jsxs("div",{className:"panel sand",children:[p.jsx("div",{className:"ptitle",children:"2 · See which practices help"}),p.jsx("p",{className:"small",children:"Practices are ranked by their combined CPPE effect score across the concerns you chose. The top few are called out first; the full heatmap below shows every practice with any effect."})]}),p.jsxs("div",{className:"panel",style:{background:"var(--paper)"},children:[p.jsx("div",{className:"ptitle",children:"3 · Read the Handbook page"}),p.jsx("p",{className:"small",children:"Every practice and concern in the Planner links to its Handbook page: definition, purposes, benefits, resource-concern tables, the NRCS practice standard and a short video."})]})]}),p.jsxs("div",{className:"hero lmoss",style:{minHeight:200},children:[p.jsx("div",{className:"deco",style:{right:-40,top:-40,width:240,height:120,background:"var(--sand)",borderRadius:"0 0 240px 240px"}}),p.jsx("img",{className:"deco art",src:`${wn}art/hellbender.jpg`,alt:"Eastern Hellbender",style:{right:"-2%",top:"-4%",width:"min(46%,480px)",transform:"rotate(-9deg)"}}),p.jsxs("div",{className:"copy",children:[p.jsx("div",{className:"eyebrow",children:"Embeddable"}),p.jsx("h2",{style:{fontSize:"clamp(22px,3vw,30px)"},children:"Every Handbook page has its own link and can be framed into another site."}),p.jsxs("p",{className:"lede",children:["Open any page in the Handbook and use ",p.jsx("b",{children:"Embed"})," to copy an iframe snippet. Framed pages show the same markdown, without the site chrome."]})]})]})]}),p.jsxs("section",{className:"section",id:"more",style:{paddingTop:44},children:[p.jsxs("div",{className:"section-head",children:[p.jsx("span",{className:"arch",style:{background:"var(--lmoss)"}}),p.jsx("span",{className:"title",children:"Also in the suite · not part of this prototype"})]}),p.jsxs("div",{className:"card-grid",children:[p.jsxs("div",{className:"tool-card ph",children:[p.jsx("span",{className:"num",children:"04 · placeholder"}),p.jsx("span",{className:"t",children:"Data Layer Library"}),p.jsx("p",{children:"A curated collection of aquatic conservation datasets from agencies and NGOs. Lives on the Landscape Partnership portal and requires a login."}),p.jsx("span",{className:"foot",children:p.jsx("a",{className:"pill xs",href:`${Pg}/aquacorridors-data-layer-library/aquacorridor-data-library`,target:"_blank",rel:"noopener",children:"Open on the portal ↗"})})]}),p.jsxs("div",{className:"tool-card ph",children:[p.jsx("span",{className:"num",children:"05 · placeholder"}),p.jsx("span",{className:"t",children:"Mapper"}),p.jsx("p",{children:"Explore and export data for an area of interest: at-risk species by watershed, partner priority areas, contacts and landscape conditions. Lives on the Landscape Partnership portal and requires a login."}),p.jsx("span",{className:"foot",children:p.jsx("a",{className:"pill xs",href:`${Pg}/aquacorridors-mapper/aquacorridors-mapper`,target:"_blank",rel:"noopener",children:"Open on the portal ↗"})})]})]})]})]})}const uS=`
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
**RD:** Rural Development`,dS=`##### Definition:
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


























#ProducerBenefits `,fS=`##### Definition
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








#ProducerBenefits `,hS=`##### Definition:
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













#ProducerBenefits `,mS=`##### Definition:
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





















#ProducerBenefits `,pS=`##### Definition:
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
`,gS=`##### Definition:
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













#ProducerBenefits `,vS=`##### Definition: 
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
`,bS=`##### Definition:
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
`,yS=`##### Definition:
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
`,CS=`##### Definition:
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




























#Wildlifebenefits `,SS=`##### Definition:
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
`,wS=`##### Definition:
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










#Wildlifebenefits `,PS=`
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








#Wildlifebenefits `,TS=`##### Definition: 
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
















#Wildlifebenefits `,ES=`##### Definition: 
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



`,_S=`##### Definition: 
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











#Wildlifebenefits `,RS=`##### Definition: 
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

`,xS=`### **Practice Definition**
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
`,AS=`### **Practice Definition**
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
![[Screenshot 2024-04-22 at 4.13.27 PM.png]]`,MS=`### **Practice Definition**
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

![[ConservationCoverNetworkDiagram.png]]`,NS=`### **Practice Definition**
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



`,kS=`### **Practice Definition**
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


![[Screenshot 2024-04-22 at 4.43.33 PM.png]]`,HS=`### **Practice Definition**
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




`,zS=`### **Practice Definition**
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




`,OS=`### **Practice Definition**
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





`,DS=`### **Practice Definition**
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
`,WS=`### Practice Definition  
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


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/pond-no-378-conservation-practice-standard) shows the potential effects of implementing this practice.![[Pond network diagram.png]]`,qS=`### **Practice Definition:**
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




`,BS=`### **Practice Definition**
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





`,jS=`### **Practice Definition**
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




`,GS=`### **Practice Definition**
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




`,IS=`### **Practice Definition**
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
`,LS=`### **Practice Definition**
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
`,US=`### **Practice Definition**
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

![[Screenshot 2024-04-25 at 10.21.08 AM.png]]`,FS=`### **Practice Definition**
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



`,QS=`### **Practice Definition**
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





`,YS=`### **Practice Definition**
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

`,VS=`### **Practice Definition**
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






`,XS=`### Practice Definition  

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
`,ZS=`### **Practice Definition**
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
![[Screenshot 2024-05-02 at 1.26.04 PM.png]]`,KS=`### **Practice Definition**
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





`,JS=`### **Practice Definition**
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



`,$S=`### **Practice Definition**
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











`,ew=`### **Practice Definition**
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


`,nw=`### **Practice Definition**
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



`,tw=`### **Practice Definition**
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


`,aw=`### **Practice Definition**
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


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/pest-management-conservation-system-ac-595-conservation-practice) shows the potential effects of implementing this practice.![[Screenshot 2024-05-02 at 1.25.36 PM.png]]`,iw=`### **Practice Definition**
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










`,rw=`### **Practice Definition**
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
`,ow=`### Practice Definition  
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


* The [Network Diagram](https://www.nrcs.usda.gov/resources/guides-and-instructions/water-well-no-642-conservation-practice-standard) shows the potential effects of implementing this practice.![[Water Well Network Diagram.png]]`,sw=`### **Practice Definition**
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



`,lw=`### **Practice Definition**
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




`,cw=`### **Practice Definition**
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


`,uw=`### **Practice Definition**
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
`,dw=`### **Practice Definition**
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
`,fw=`### **Practice Definition**
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




`,hw=`### **Practice Definition**
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


`,mw=`##### Definition
Overly dense plantings, “fuel ladders” of dry branches extending from tree trunks and debris or litter (sticks, stalks, and leaves on the ground) can create an increased risk of wildfires. When wildfire occurs, it risks human safety, structures, plants, animals, and air resources.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate to Substantial Improvement:**
[[CP 314 - Brush Management]]
[[CP 315 - Herbaceous Weed Treatment]]


**Moderate Improvement:**
[[CP 528 - Prescribed Grazing]]
[[CP 472 - Access Control]]
`,pw=`##### Definition
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
`,gw=`##### Definition
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
[[CP 643 - Restoration of Rare and Declining Habitats]] `,vw=`##### Definition
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
[[CP 472 - Access Control]] `,bw=`
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
[[CP 390 - Riparian Herbaceous Cover]] `,yw=`##### Definition
Inefficient energy use of farm equipment or facilities can cause spending on energy to increase in order to meet production goals. This can occur when equipment operates more than needed, is outdated or improperly maintained, and when unimproved facilities, such as agricultural buildings, contribute to inefficient energy use when not adequately sealed and insulated.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Moderate Improvement:**
[[CP 516 - Livestock Pipeline]]
[[CP 612 - Tree and Shrub Establishment]]


**Slight Improvement:**
[[CP 614 - Watering Facility]] 
`,Cw=`##### Definition
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
[[CP 390 - Riparian Herbaceous Cover]] `,Sw=`##### Definition
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
[[CP 644 - Wetland Wildlife Habitat Management]] `,ww=`##### Definition
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
`,Pw=`##### Definition
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
`,Tw=`##### Definition
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
`,Ew=`##### Definition
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
`,_w=`##### Definition
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
[[CP 643 - Restoration of Rare and Declining Habitats]]`,Rw=`##### Definition
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
[[CP 329 - Residue and Tillage Mgmt (No Till)]] `,xw=`
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
[[CP 646 - Shallow Water Development and Management]] `,Aw=`##### Definition
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
`,Mw=`##### Definition
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
`,Nw=`##### Definition
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


`,kw=`#### Definition
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
`,Hw=`##### Definition
Subsidence is a loss of soil volume and depth caused by oxidation of organic matter in peat, bog, and muck soils.  Soil scientists call these soils “Histosols”.  The loss of soil volume is caused by organic material breaking down faster than it accumulates.  Subsidence reduces an organic soil’s productivity, creates drainage problems, makes trees vulnerable to windthrow, and causes other land management problems.  Naturally occurring sinkholes; and sinkholes and depressions caused by underground activities are excluded from the NRCS subsidence resource concern.  

Excessive water drainage, soil disturbance, and extended drought are the leading causes of subsidence.

The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Slight Improvement:**
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]
`,zw=`##### Definition
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
`,Ow=`##### Definition
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
[[CP 646 - Shallow Water Development and Management]] `,Dw=`##### Definition
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
[[CP 391 - Riparian Forest buffer]] `,Ww=`##### Definition
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
[[CP 587 - Structure for Water Control]] `,qw=`
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
[[CP 646 - Shallow Water Development and Management]] `,Bw=`##### Definition
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
[[CP 420 - Wildlife Habitat Planting]] `,jw=`##### Definition
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
[[CP 328 - Conservation Crop Rotation]] `,Gw=`
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
[[CP 356 - Dike and Levee]] `,Iw=`##### Definition
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
[[CP 410 - Grade Stabilization Structure]] `,Lw=`##### Definition
Wind can blow fallen snow and create mounds of snow called snowdrifts. Snowdrifts can cause hazardous conditions and can prohibit humans and animals from accessing structures or features.

Wind can also blow snow away from desired locations where snowmelt water can be used. Managing snowdrift locations to capture snowmelt can benefit soil moisture and increase crop productivity.


The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Slight Improvement:**
[[CP 340 - Cover Crop]]
[[CP 612 - Tree and Shrub Establishment]] 
[[CP 342 - Critical Area Planting]]
[[CP 550 - Range Planting]]
[[CP 327 - Conservation Cover]]
`,Uw=`##### Definition
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
[[CP 587 - Structure for Water Control]] `,Fw=`##### Definition
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
`,Qw=`##### Definition
Water is a vital component of farming and natural ecosystems. Inefficiently managing the moisture in soil can lead to poor crop yields and increased runoff. In cropland, poor yields could be attributed to an insufficiency of soil moisture instead of inadequate rainfall.


**Slight to Moderate Improvement:**
[[CP 315 - Herbaceous Weed Treatment]]
[[CP 329 - Residue and Tillage Mgmt (No Till)]]
[[CP 328 - Conservation Crop Rotation]] 
[[CP 587 - Structure for Water Control]]


**Slight Improvement:**
[[CP 340 - Cover Crop]]
[[CP 345 - Residue and Tillage Mgmt (Reduced Till)]]

`,Yw=`#### Definition
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




`,Vw=`##### Definition
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

`,Xw=`#### Definition
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
`,Zw=`##### Definition
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
`,Kw=`##### Definition
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
`,Jw=`##### Definition
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
[[CP 659 - Wetland Enhancement]] `,$w=`##### Definition
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
`,eP=`##### Definition
If heavy metals, petroleum, and other pollutants are not handled or stored properly, they can run off into surface water or leach into groundwater. In high amounts, these pollutants can degrade water quality which limits how this water can be used.



The headings below categorize the degree to which the listed conservation practices improve this threat. 

**Slight Improvement:**
[[CP 612 - Tree and Shrub Establishment]]
[[CP 550 - Range Planting]] 
[[CP 472 - Access Control]] 
[[CP 391 - Riparian Forest buffer]] 
[[CP 390 - Riparian Herbaceous Cover]]
[[CP 646 - Shallow Water Development and Management]] `,nP=`##### Definition
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
[[CP 614 - Watering Facility]] `,tP=`##### Definition
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
`,aP=`##### Definition
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
[[CP 659 - Wetland Enhancement]] `,iP=`##### Definition
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
`,rP=`##### Definition
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

`,oP=`##### Definition
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
[[CP 646 - Shallow Water Development and Management]] `,sP=`# NRCS Programs

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
 <a href="https://drive.google.com/viewerng/viewer?embedded=true&url=https://www.fsa.usda.gov/Assets/USDA-FSA-Public/usdafiles/FactSheets/2022/conservation_at_a_glance_22_final.pdf"> Click here to read *Conservation Programs At a Glance*</a>  `,lP=`The **Conservation Reserve Enhancement Program** **(CREP)** is a subsidiary program under CRP that targets specific state or national conservation priorities. It is a partnership between the federal government (FSA) and state agencies, tribes, or non-governmental organizations. Under CREP, the federal government and the partner entity jointly provide financial incentives to encourage farmers to enroll in the program. The partner entity (state, tribe, or NGO) contributes additional funding and resources to address specific environmental issues of regional or state importance. CREP contracts are typically longer than CRP contracts, often 10-15 years, with additional incentive payments from the partner entity.

#### Resources
[CREP Web Page](https://www.fsa.usda.gov/programs-and-services/conservation-programs/conservation-reserve-enhancement/index)

![[CREP fact sheet_thumbnail.png|300]]`,cP=`The **Conservation Reserve Program** **(CPR)** is a federally funded voluntary program that contracts with agricultural producers so environmentally sensitive agricultural land is not farmed or ranched, but instead devoted to conservation benefits. CRP participants establish long-term, resource-conserving plant species, such as approved grasses or trees (known as “covers”) to control soil erosion, improve water quality, and develop wildlife habitat. In return, USDA’s Farm Service Agency (FSA) provides participants with rental payments and cost share assistance during the life of the contract. Contract duration is typically between 10 and 15 years. 


#### Resources
[CRP Menu Tool](https://crpmenu.gri.msstate.edu/CRPBasics)
![[CRP Menu Tool_thumbnail.png|300]]`,uP=`
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
![[ECP Factsheet_thumbnail.png|300]]`,dP=`The **Emergency Forest Restoration Program (EFRP)** helps the owners of non-industrial private forests restore forest health damaged by natural disasters. The EFRP does this by authorizing payments to owners of private forests to restore disaster damaged forests.

EFRP enrollment is administered by FSA state and county committees and county offices. FSA county committees determine land eligibility using on-site damage inspections that assess the type and extent of damage. To be eligible for EFRP, NIPF land must: 
- Have existing tree cover (or had tree cover immediately before the natural disaster occurred and is suitable for growing trees); and 
- Be owned by any nonindustrial private individual, group, association, corporation, or other private legal entity.

#### Resources
[EFRP Web Page](https://www.fsa.usda.gov/programs-and-services/disaster-assistance-program/emergency-forest-restoration/index)
![[EFRP factsheet_thumbnail.png|300]]`,fP=`
The **Farmable Wetlands Program (FWP)** is designed to restore previously farmed wetlands and wetland buffers to improve both vegetation and water flow. FWP is a voluntary program that aims to restore up to one million acres of farmable wetlands and associated buffers. Participants must agree to restore the wetlands, establish plant cover, and not use enrolled land for commercial purposes. Plant cover may include plants that are partially submerged or specific types of trees.

The Farm Services Agency (FSA) runs FWP through the Conservation Reserve Program (CRP) with assistance from other government agencies and local conservation groups.

Offers for FWP are accepted throughout the year. FWP contracts last between 10 and 15 years. All enrollment offers are processed through your [local FSA office](http://www.fsa.usda.gov/FSA/stateOffices?area=stoffice&subject=landing&topic=landing).


#### Resources
[FWP Web Page](https://www.fsa.usda.gov/resources/programs/farmable-wetlands-program)
![[FWP webpage_thumbnail.png|300]]`,hP=`The Farm Service Agency (FSA) and the Natural Resources Conservation Service (NRCS) are two separate agencies within the United States Department of Agriculture (USDA), with distinct roles and responsibilities. 

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


In summary, the FSA primarily deals with farm commodity programs, credit, and financial assistance, while the NRCS concentrates on providing technical assistance and implementing conservation programs to protect and enhance natural resources on agricultural lands.`,mP=`
Agricultural Conservation Easement Program (ACEP) helps landowners, land trusts, and other entities protect, restore, and enhance wetlands or protect working farms and ranches through purchasing conservation **easements**. The program is divided into two components: [Agricultural Land Easements (ALE)](https://www.nrcs.usda.gov/programs-initiatives/ale-agricultural-land-easements) and [Wetland Reserve Easements (WRE)](https://www.nrcs.usda.gov/programs-initiatives/wre-wetland-reserve-easements):

A conservation easement is a voluntary legal agreement between a landowner and a qualified conservation organization (such as a land trust or government agency) that permanently limits the uses of the land in order to protect its conservation values.

There are several potential benefits for landowners who grant conservation easements on their property including tax incentives, estate planning, permanent land protection and financial assistance, all while maintaining continued ownership and use. In essence, easements allow landowners to potentially profit from the development value of their land while ensuring it remains undeveloped and available for conservation-compatible uses that align with their values.

#### How to Apply
NRCS accepts ACEP applications year-round and funding is provided through a competitive process. State-specific application ranking dates are set to evaluate applications for funding. Ranking dates can be found at https://www.nrcs.usda.gov/ranking-dates. If you apply after the application ranking date, your application will automatically be deferred to the next funding cycle. Visit farmers.gov/service-locator to find the contact information for your local USDA Service Center.

For more information on purchasinpug Agricultural Land Easements, use [this toolkit](https://landtrustalliance.org/resources/learn/explore/ale-toolkit).
# Resources
Additional materials in the "related documents" section at the bottom of [this webpage ](https://www.nrcs.usda.gov/programs-initiatives/ale-agricultural-land-easements)
![[Thumbnail_ACEP.png]]

`,pP=`The [Agricultural Management Assistance Program](https://www.nrcs.usda.gov/programs-initiatives/ama-agricultural-management-assistance) helps agricultural producers manage financial risk through diversification, marketing or natural resource conservation practices.

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


`,gP=`Conservation Innovation Grants (CIG) is a competitive program that supports the development of new tools, approaches, practices, and technologies to further natural resource conservation on private lands.

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


`,vP=`The Conservation Stewardship Program (CSP) is a voluntary program designed to encourage agricultural and forestry producers to take their conservation efforts to the next level. The program is designed to compensate agricultural and forest producers who agree to increase their level of conservation by adopting additional conservation activities while maintaining their baseline level of conservation.

CSP contracts are for five years, with the opportunity to compete for a contract renewal if you successfully fulfill the initial contract and agree to achieve additional conservation objectives

Producers who participate in the CSP can receive a variety of benefits, including:

- Financial assistance: CSP participants can receive annual payments for implementing conservation activities. The amount of the payment is based on the type of activity and the environmental benefits it provides. CSP operates on a points-based system, where participants earn points for implementing new conservation activities. The more comprehensive and sustainable the practices, the more points are earned, leading to greater financial assistance. CSP also offers bundles where you can select a suite of enhancements and receive a higher payment rate.

- Technical assistance: NRCS provides technical assistance to CSP participants to help them develop and implement their conservation plans. This assistance can include help with soil testing, nutrient management, and other conservation practices.

- Market access: CSP participants may be eligible for bonus payments for selling their products to markets that value sustainable agricultural practices.


#### Resources
[CSP webpage](https://www.nrcs.usda.gov/programs-initiatives/csp-conservation-stewardship-program)

![[CSP_thumbnail.png|300]]`,bP=`The Environmental Quality Incentives Program is a program through NRCS that provides financial and technical assistance to agricultural producers to implement conservation practices that address natural resource concerns and improve environmental quality. 

Through EQIP, eligible participants can receive financial assistance to cover a portion of the costs associated with implementing approved conservation practices. These practices are designed to benefit both the agricultural operation and the environment. Examples of conservation practices supported by EQIP include cover cropping, nutrient management, irrigation efficiency improvements, and the installation of conservation buffers. <br> 
#### How to Apply
Producers can apply for EQIP through their local NRCS office. The application process includes developing a conservation plan with NRCS and submitting an application form.

EQIP payments work similar to a mail-in rebate: you pay the costs up-front to install the conservation practices, then NRCS issues you a payment via direct deposit after we certify the work has been completed according to our specifications.

## Resources 
[EQIP Webpage](https://www.nrcs.usda.gov/programs-initiatives/eqip-environmental-quality-incentives)
![[EQIP_Thumbnail_Small.png]]
`,yP=`The Emergency Watershed Protection Program offers technical and financial assistance to help local communities relieve imminent threats to life and property caused by floods, fires, windstorms and other natural disasters that impair a watershed. EWP does not require a disaster declaration by federal or state government officials for program assistance to begin. The NRCS State Conservationist can declare a local watershed emergency and initiate EWP program assistance in cooperation with an eligible sponsor. NRCS will not provide funding for activities undertaken by a sponsor prior to the signing of a cooperative agreement between NRCS and the sponsor.

**Recovery projects** begin with a local sponsor or legal subdivision of state or tribal government. Eligible sponsors include cities, counties, towns, conservation districts, or any federally-recognized Native American tribe or tribal organization. Interested public and private landowners must work through a sponsor. 

In communities impacted by constant flooding or severe erosion due to a natural disaster, a [property buyout](https://www.nrcs.usda.gov/programs-initiatives/emergency-watershed-protection-ewp-program-buyouts) might be the best solution. EWP buyouts are used where structural projects to reduce threats from flooding and erosion are not cost-effective and/or beneficial. Once NRCS determines that buying a flood-prone property (for example) would provide the pivotal solution and sustainable course of action for a community, EWP has the authority to provide local sponsors with financial assistance to purchase and restore the property. 

In some situations,Landowners can directly apply for assistance through a floodplain easement at the local NRCS office when project funding for floodplain easements becomes available. States will hold a signup period for the impacted communities and the local NRCS offices will publicize that information in the affected communities.

#### Resources
 [EWP Sponsor Resource page](https://www.nrcs.usda.gov/resources/guides-and-instructions/ewp-sponsor-resources "EWP Sponsor Resource Page") 
![[EWP Sponsor Resource_thumbnail.png|300]]

`,CP=`
The Healthy Forests Reserve Program (HFRP) helps landowners restore, enhance and protect forestland resources on private and tribal lands through easements and financial assistance. 

For all HFRP easements, contracts, and 10-year restoration agreements, NRCS will develop an HFRP restoration plan that will specify how the enrolled land will be restored, protected, enhanced, maintained, and managed to accomplish the goals of the program.

The program offers four enrollment options:

1. 10-year restoration cost-share agreement for which the landowner may receive 50 percent of the average cost of approved conservation practices,   
2. 30-year easement for which the landowner may receive 75 percent of the easement value of the enrolled land plus 75 percent of the average cost of approved conservation practices,
3. 30-year contract on acreage owned by Indian Tribes, or  
4. Permanent easements for which landowners may receive 100 percent of the easement value of the enrolled land plus 100 percent the average cost of approved conservation practices.

#### Resources
Program documents at the bottom of [this webpage](https://www.nrcs.usda.gov/programs-initiatives/hfrp-healthy-forests-reserve-program).
![[HFRP_thumbnail.png|300]]`,SP=`The **Regional Conservation Partnership Program (RCPP)** is a partner-driven approach to conservation that funds solutions to natural resource challenges on agricultural land.

RCPP projects fall under two different categories: <a href="https://www.grants.gov/search-results-detail/353379">RCPP Classic </a> and <a href="https://www.grants.gov/search-results-detail/353380">RCPP Alternative Funding Arrangements </a>. RCPP Classic projects are implemented using NRCS contracts and easements <b>directly with producers, landowners and communities</b>, in collaboration with project partners. Through RCPP AFAs, NRCS provides funding <b> to partners </b> to support conservation activities with eligible producers and landowners on eligible land. RCPP AFA funding reimburses partners for conservation activities done for or on behalf of producers, landowners, or other entities.

The primary difference is that in RCPP Classic, the NRCS directly contracts with producers and distributes funds, while in RCPP AFA, the partner organizations receive a portion of the funds from the NRCS and are responsible for contracting with producers and administering the funds. AFA provides more flexibility and autonomy for partners in implementing conservation activities  

#### How to Apply
Interested potential partners can learn <a href="https://www.nrcs.usda.gov/programs-initiatives/rcpp-regional-conservation-partnership-program/how-to-apply">how to apply to RCPP</a> and create a proposal for assistance. 

#### Resources

[Farm Bill Factsheet](https://www.nrcs.usda.gov/resources/data-and-reports/farm-bill-factsheet)
![[RCPP Factsheet.png|300]]


[How to Apply to RCPP](https://www.nrcs.usda.gov/programs-initiatives/rcpp-regional-conservation-partnership-program/how-to-apply)
![[Thumbnail_RCPPContractorList.png]]`,wP=`---
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



`,PP=`
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

`,TP=`![[Climate Opinion Screenshot.png]]
This Factsheets tool, based on the [Yale Climate Opinion Maps](https://climatecommunication.yale.edu/visualizations-data/ycom-us/), provides information about Americans' beliefs, risk perceptions, and policy preferences about climate change for all 50 states, 435 congressional districts, and 3,142 counties across the U.S. The tool allows you to customize which survey questions are shown on your Factsheet. The opinion estimates are based on a statistical model that uses a large individual-level survey dataset, plus geographic, demographic, economic, and other data to provide results accurate to within about 8 percentage points at any geographic level.

[Link to Tool](https://climatecommunication.yale.edu/visualizations-data/factsheets/?utm_source=Yale+Program+on+Climate+Change+Communication&utm_campaign=96aa0ac461-EMAIL_CAMPAIGN_2024_05_06_02_59&utm_medium=email&utm_term=0_-96aa0ac461-%5BLIST_EMAIL_ID%5D&utm_source=Merged+Symposium+and+Newsletter+Lists&utm_campaign=2b45d8e26a-EMAIL_CAMPAIGN_2020_05_20_01_39_COPY_01&utm_medium=email&utm_term=0_bd5faaf92a-2b45d8e26a-123494965)

`,EP=`* [[Sea Level Rise Viewer]] Visualizations of community-level impacts from coastal flooding and sea level rise.
* [[Climate Change Opinion Fact Sheet]] Factsheet generator that provides public opinion on climate change based on location. `,_P=`
![[sea level rise viewer screenshot.png]]

The National Oceanic and Atmospheric Administration's Sea Level Rise Viewer tool allows users to visualize community-level impacts from coastal flooding or sea level rise (up to 10 feet above average high tides). Photo simulations of how future flooding might impact local landmarks are also provided, as well as data related to water depth, connectivity, flood frequency, socio-economic vulnerability, wetland loss and migration, and mapping confidence.

 [Link to Tool](https://coast.noaa.gov/slr/)
`,RP=`* [[National AquaMapper]] Explore, visualize, and analyze marine data layers.
* [[National Estuary Program Map]] Explore estuary habitat protection and restoration projects, along with other key water quality and land use data. `,xP=`
![[Aquatics/Similar Tools/Images/National AquaMapper screenshot.png]]

The NOAA National AquaMapper is a web-based mapping tool developed by the National Oceanic and Atmospheric Administration (NOAA) that provides access to a comprehensive collection of coastal and marine data layers, including bathymetry, habitat, imagery, and other geospatial information. It allows users to explore, visualize, and analyze these data layers, enabling them to better understand and manage coastal and marine resources, plan for coastal resilience, and support decision-making processes related to marine spatial planning, environmental assessments, and conservation efforts.

**[Link to Tool](https://noaa.maps.arcgis.com/apps/webappviewer/index.html?id=4f12cbde0c22488196dda69d495116cc)**



`,AP=`
![[national estuary screenshot.png]]

The National Estuary Program Map (NEPmap) was created by the US EPA. It allows users to explore National Estuary Program habitat protection and restoration projects, along with other key water quality and land use data. 

**[Link to Tool](https://gispub.epa.gov/nepmap/)**
`,MP=`On this page you will find information about other decision support tools and resources that may be relevant to your conservation work. 

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









`,NP=`* [[Southeastern Aquatic Biodiversity Conservation Planning Storymap]] A storymap that discusses aquatic biodiversity and identifies freshwater habitats of high biodiversity value across the Southeastern United States.

* [[Map Of Life]]* Interactive map that allows users to generate endangered species list and information.

* [[USFWS Southeast At Risk Species Finder]]*
`,kP=`![[Map of Life Screenshot.png]]

Map of Life is an interactive map that allows users to gain biodiversity insights through exploring by species, regions, indicators, patterns, and datasets.  

[Link to Tool](https://mol.org/regions/)
`,HP=`
![[Southeast Aquatic Biodiversity Screenshot.png]]
The Southeastern Freshwater Biodiversity Conservation Strategy Map Tool comes from The University of Georgia River Basin Center and the Tennessee Aquarium Conservation Institute. It is an interactive online mapping application that identifies and prioritizes freshwater habitats of high biodiversity value across the Southeastern United States. It integrates data from various sources to display priority watersheds, rivers, streams, species distributions, and protected areas. The tool enables users to query specific areas, overlay different data layers, and delineate focal regions for conservation action based on criteria like imperiled species presence and habitat condition. By visually representing these priority freshwater systems, the tool aims to guide strategic conservation investments, protection efforts, and restoration activities by government agencies, non-profits, and other stakeholders working to safeguard the region's rich but threatened aquatic biodiversity.

**[Link to Tool](https://southeastfreshwater.org/storymap/)** 


`,zP=`![[SpeciesFinder.png]]


This web application was developed to track At-risk species (ARS) in the Southeast region – both the listing status and the Service's progress on evaluating the species according to the National Listing Workplan**.  To learn more about the workplan please visit the [**National Listing Workplan**](https://www.fws.gov/project/national-listing-workplan)

[Link to Tool]()`,OP=`
![[Aquatic Barrier Screenshot.png]]The Aquatic Barrier Inventory and Prioritization tool was created by Southeast Aquatic Resource Partnership (SARP) to build a community of practice among resource managers and enable them to identify high priority aquatic connectivity restoration projects. Regularly updating barriers in this inventory allows it to better reflect the degree of aquatic habitat fragmentation from aquatic barriers across political boundaries at a national scale. SARP provides a collaborative atmosphere where all resource managers can contribute to the collective effort of restoring rivers and streams through aquatic barrier removal.

**[Link to Tool](https://aquaticbarriers.org/explore/ )**

`,DP=`* [[Aquatic Barrier Inventory and Prioritization Tool]] Explore updated barrier data to identify high priority aquatic connectivity restoration projects.
* [[Southeast Conservation Blueprint Explorer]] Shows priority areas for aquatic conservation
* [[SERPAS REPI]] The Southeast Regional Partnership for Planning and Sustainability 
* `,WP=`Readiness and Environmental Protection Integration Program

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
`,qP=`![[Southeast conservation blueprint screenshot.png]]

The Southeast Conservation Blueprint Explorer, created by the Southeast Conservation Adaptation Strategy (SECAS), is a living, spatial plan to achieve the SECAS vision of a connected network of lands and waters across the Southeast and Caribbean. The online viewer is designed to help you understand the Blueprint and discover how your area of interest scores on the Blueprint priorities, hubs and corridors, indicators, threats, and more. The Blueprint is regularly updated to incorporate new data, partner input, and information about on-the-ground conditions. 

[Link to Tool](https://secassoutheast.org/blueprint)
`,BP=`![[ACPF.png]]

The Natural Resources Conservation Service's Agricultural Conservation Planning Framework (ACPF) is a free ArcGIS toolbox that leverages high-resolution geo-spatial data to help local farming communities better address their soil and water conservation needs. They also have a online interactive map letting you explore the ACPF framework. 

**[Link to Tool](https://acpf4watersheds.org/)**



`,jP=`* [[North Jersey Agricultural Conservation Planning Tool - NJRCD]] A 3-part process designed to assist individuals working with farmers to improve conservation in the North Jersey area.*
* [[Atlas Prioritization Framework (Pacific Northwest, Columbia River Basin)]] Fisheries habitat restoration status throughout the Columbia river basin.
* [[Agricultural Conservation Planning Framework in Action Map (Midwest)]] Soil and water quality mapping in midwestern states. `,GP=`![[Aquatics/Similar Tools/Images/atlas prioritization screenshot.png]]
Atlas Prioritization Framework made by BPA Publish displays the status of implementation of fisheries habitat restoration programs throughout the Columbia River Basin.

[Link to Tool](https://www.arcgis.com/home/item.html?id=fa7ca4c970014eceb4db24847ebf51d3)
`,IP=`
![[North Jersey Ag screenshot.png]]

The NJRCD is designed to assist individuals working with farmers to improve conservation,  ask the right questions, recommend the right practices, and easily record their conservation notes for record keeping purposes. It is composed of three basic components: a paper sheet, spreadsheet, and educational library.

**[Link to Tool](https://www.northjerseyrcd.org/conservationplanningtool)**
`,LP=`![[CART screenshot.png]]

The NRCS Conservation Assessment Ranking Tool (CART) is a tool used by NRCS field offices to rank and prioritize applications for its conservation programs in order to allocate limited conservation funding to projects that provide the greatest environmental benefits and address the most critical resource concerns.

 [Link to Tool Summary](https://the-conservation-assessment-ranking-tool-nrcs.hub.arcgis.com/)  
 `,UP=`
![[conservation concerns tool screenshot.png]]

The USDA Conservation Concern Tool allows users to learn about different types of conservation issues that might impact the productivity or natural resources on your farm, ranch, or forest by exploring relevant topics. They can also build a list of concerns to discuss with a local USDA conservation specialist.

**[Link to Tool](https://www.farmers.gov/conservation#concerns-tool)** 

`,FP=`* [[Conservation Assessment Ranking Tool (CART)]] Ranking and prioritizing applications for NRCS conservation programs.
* [[Conservation Concern Tools]] Learn about different conservation issues impacting productivity or natural resources on your land.
`,QP=`![[freshwater xplorer screenshot.png]]

The U.S. EPA's Freshwater Explorer tool is an interactive web-based mapping tool that provides information about background and observed salt and mineral content for freshwater streams, lakes, and wells in all 50 U.S. states, Puerto Rico, and the U.S. Virgin Islands. It can be used by anyone, including citizens and non-governmental organizations, to better understand national and local water quality issues and provides water quality information to help federal, state, territory, tribal, and local partners make decisions about freshwater resources.

[Link to Tool](https://epa.maps.arcgis.com/apps/Cascade/index.html?appid=13fe4698f35d4a95ba9dfe6f8033f735)`,YP=`
![[hows my waterway screenshot.png]]


The United States Environmental Protection Agency's "Hows My Waterway" tool enables users to find information on the condition of their waters displayed on 3 scales; community, state, and national. Users can retrieve information on assessments and reported condition of local waters for anywhere in the nation by searching based on address, zipcode or place, and explore topics such as swimming, eating fish, aquatic life, and drinking water.

  **[Link to Tool](https://mywaterway.epa.gov/)**



 `,VP=`
![[Aquatics/Similar Tools/Images/national water dashboard screenshot.png]]
The US Geological Survey's National Water Dashboard shows provisional real-time water data collected at the USGS observation stations in context with weather-related data from other public sources. 

**[Link to Tool](https://dashboard.waterdata.usgs.gov/app/nwd/en/?region=lower48&aoi=default)**
`,XP=`* [[National Water Dashboard]] View real-time stream, lake, reservoir, precipitation, water quality, and ground water stations in context with current weather and hazard conditions.*
* [[How's My Waterway]] Information on swimming, fish, aquatic life, and drinking water conditions displayed community, state, and national scales. 
* [[Freshwater Explorer]] EPA map showing predicted conductivity of water in continental US`;function hd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ja=hd();function ev(i){Ja=i}var Qr={exec:()=>null};function qe(i,s=""){let c=typeof i=="string"?i:i.source;const l={replace:(u,f)=>{let h=typeof f=="string"?f:f.source;return h=h.replace(An.caret,"$1"),c=c.replace(u,h),l},getRegex:()=>new RegExp(c,s)};return l}var An={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i")},ZP=/^(?:[ \t]*(?:\n|$))+/,KP=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,JP=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Kr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,$P=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,md=/(?:[*+-]|\d{1,9}[.)])/,nv=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,tv=qe(nv).replace(/bull/g,md).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),eT=qe(nv).replace(/bull/g,md).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),pd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,nT=/^[^\n]+/,gd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,tT=qe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",gd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),aT=qe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,md).getRegex(),Js="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",vd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,iT=qe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",vd).replace("tag",Js).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),av=qe(pd).replace("hr",Kr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Js).getRegex(),rT=qe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",av).getRegex(),bd={blockquote:rT,code:KP,def:tT,fences:JP,heading:$P,hr:Kr,html:iT,lheading:tv,list:aT,newline:ZP,paragraph:av,table:Qr,text:nT},Tg=qe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Kr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Js).getRegex(),oT={...bd,lheading:eT,table:Tg,paragraph:qe(pd).replace("hr",Kr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Tg).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Js).getRegex()},sT={...bd,html:qe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",vd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Qr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:qe(pd).replace("hr",Kr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",tv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},lT=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,cT=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,iv=/^( {2,}|\\)\n(?!\s*$)/,uT=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,$s=/[\p{P}\p{S}]/u,yd=/[\s\p{P}\p{S}]/u,rv=/[^\s\p{P}\p{S}]/u,dT=qe(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,yd).getRegex(),ov=/(?!~)[\p{P}\p{S}]/u,fT=/(?!~)[\s\p{P}\p{S}]/u,hT=/(?:[^\s\p{P}\p{S}]|~)/u,mT=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,sv=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,pT=qe(sv,"u").replace(/punct/g,$s).getRegex(),gT=qe(sv,"u").replace(/punct/g,ov).getRegex(),lv="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",vT=qe(lv,"gu").replace(/notPunctSpace/g,rv).replace(/punctSpace/g,yd).replace(/punct/g,$s).getRegex(),bT=qe(lv,"gu").replace(/notPunctSpace/g,hT).replace(/punctSpace/g,fT).replace(/punct/g,ov).getRegex(),yT=qe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,rv).replace(/punctSpace/g,yd).replace(/punct/g,$s).getRegex(),CT=qe(/\\(punct)/,"gu").replace(/punct/g,$s).getRegex(),ST=qe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),wT=qe(vd).replace("(?:-->|$)","-->").getRegex(),PT=qe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",wT).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ys=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,TT=qe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Ys).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),cv=qe(/^!?\[(label)\]\[(ref)\]/).replace("label",Ys).replace("ref",gd).getRegex(),uv=qe(/^!?\[(ref)\](?:\[\])?/).replace("ref",gd).getRegex(),ET=qe("reflink|nolink(?!\\()","g").replace("reflink",cv).replace("nolink",uv).getRegex(),Cd={_backpedal:Qr,anyPunctuation:CT,autolink:ST,blockSkip:mT,br:iv,code:cT,del:Qr,emStrongLDelim:pT,emStrongRDelimAst:vT,emStrongRDelimUnd:yT,escape:lT,link:TT,nolink:uv,punctuation:dT,reflink:cv,reflinkSearch:ET,tag:PT,text:uT,url:Qr},_T={...Cd,link:qe(/^!?\[(label)\]\((.*?)\)/).replace("label",Ys).getRegex(),reflink:qe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ys).getRegex()},Ju={...Cd,emStrongRDelimAst:bT,emStrongLDelim:gT,url:qe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},RT={...Ju,br:qe(iv).replace("{2,}","*").getRegex(),text:qe(Ju.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ns={normal:bd,gfm:oT,pedantic:sT},Lr={normal:Cd,gfm:Ju,breaks:RT,pedantic:_T},xT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Eg=i=>xT[i];function xt(i,s){if(s){if(An.escapeTest.test(i))return i.replace(An.escapeReplace,Eg)}else if(An.escapeTestNoEncode.test(i))return i.replace(An.escapeReplaceNoEncode,Eg);return i}function _g(i){try{i=encodeURI(i).replace(An.percentDecode,"%")}catch{return null}return i}function Rg(i,s){const c=i.replace(An.findPipe,(f,h,g)=>{let v=!1,b=h;for(;--b>=0&&g[b]==="\\";)v=!v;return v?"|":" |"}),l=c.split(An.splitPipe);let u=0;if(l[0].trim()||l.shift(),l.length>0&&!l.at(-1)?.trim()&&l.pop(),s)if(l.length>s)l.splice(s);else for(;l.length<s;)l.push("");for(;u<l.length;u++)l[u]=l[u].trim().replace(An.slashPipe,"|");return l}function Ur(i,s,c){const l=i.length;if(l===0)return"";let u=0;for(;u<l&&i.charAt(l-u-1)===s;)u++;return i.slice(0,l-u)}function AT(i,s){if(i.indexOf(s[1])===-1)return-1;let c=0;for(let l=0;l<i.length;l++)if(i[l]==="\\")l++;else if(i[l]===s[0])c++;else if(i[l]===s[1]&&(c--,c<0))return l;return c>0?-2:-1}function xg(i,s,c,l,u){const f=s.href,h=s.title||null,g=i[1].replace(u.other.outputLinkReplace,"$1");l.state.inLink=!0;const v={type:i[0].charAt(0)==="!"?"image":"link",raw:c,href:f,title:h,text:g,tokens:l.inlineTokens(g)};return l.state.inLink=!1,v}function MT(i,s,c){const l=i.match(c.other.indentCodeCompensation);if(l===null)return s;const u=l[1];return s.split(`
`).map(f=>{const h=f.match(c.other.beginningSpace);if(h===null)return f;const[g]=h;return g.length>=u.length?f.slice(u.length):f}).join(`
`)}var Vs=class{options;rules;lexer;constructor(i){this.options=i||Ja}space(i){const s=this.rules.block.newline.exec(i);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(i){const s=this.rules.block.code.exec(i);if(s){const c=s[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?c:Ur(c,`
`)}}}fences(i){const s=this.rules.block.fences.exec(i);if(s){const c=s[0],l=MT(c,s[3]||"",this.rules);return{type:"code",raw:c,lang:s[2]?s[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):s[2],text:l}}}heading(i){const s=this.rules.block.heading.exec(i);if(s){let c=s[2].trim();if(this.rules.other.endingHash.test(c)){const l=Ur(c,"#");(this.options.pedantic||!l||this.rules.other.endingSpaceChar.test(l))&&(c=l.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:c,tokens:this.lexer.inline(c)}}}hr(i){const s=this.rules.block.hr.exec(i);if(s)return{type:"hr",raw:Ur(s[0],`
`)}}blockquote(i){const s=this.rules.block.blockquote.exec(i);if(s){let c=Ur(s[0],`
`).split(`
`),l="",u="";const f=[];for(;c.length>0;){let h=!1;const g=[];let v;for(v=0;v<c.length;v++)if(this.rules.other.blockquoteStart.test(c[v]))g.push(c[v]),h=!0;else if(!h)g.push(c[v]);else break;c=c.slice(v);const b=g.join(`
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
`,i=i.substring(ue.length+1),y=L.slice(B)}}u.loose||(h?u.loose=!0:this.rules.other.doubleBlankLine.test(b)&&(h=!0));let ie=null,se;this.options.gfm&&(ie=this.rules.other.listIsTask.exec(E),ie&&(se=ie[0]!=="[ ] ",E=E.replace(this.rules.other.listReplaceTask,""))),u.items.push({type:"list_item",raw:b,task:!!ie,checked:se,loose:!1,text:E,tokens:[]}),u.raw+=b}const g=u.items.at(-1);if(g)g.raw=g.raw.trimEnd(),g.text=g.text.trimEnd();else return;u.raw=u.raw.trimEnd();for(let v=0;v<u.items.length;v++)if(this.lexer.state.top=!1,u.items[v].tokens=this.lexer.blockTokens(u.items[v].text,[]),!u.loose){const b=u.items[v].tokens.filter(y=>y.type==="space"),E=b.length>0&&b.some(y=>this.rules.other.anyLine.test(y.raw));u.loose=E}if(u.loose)for(let v=0;v<u.items.length;v++)u.items[v].loose=!0;return u}}html(i){const s=this.rules.block.html.exec(i);if(s)return{type:"html",block:!0,raw:s[0],pre:s[1]==="pre"||s[1]==="script"||s[1]==="style",text:s[0]}}def(i){const s=this.rules.block.def.exec(i);if(s){const c=s[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),l=s[2]?s[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",u=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):s[3];return{type:"def",tag:c,raw:s[0],href:l,title:u}}}table(i){const s=this.rules.block.table.exec(i);if(!s||!this.rules.other.tableDelimiter.test(s[2]))return;const c=Rg(s[1]),l=s[2].replace(this.rules.other.tableAlignChars,"").split("|"),u=s[3]?.trim()?s[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],f={type:"table",raw:s[0],header:[],align:[],rows:[]};if(c.length===l.length){for(const h of l)this.rules.other.tableAlignRight.test(h)?f.align.push("right"):this.rules.other.tableAlignCenter.test(h)?f.align.push("center"):this.rules.other.tableAlignLeft.test(h)?f.align.push("left"):f.align.push(null);for(let h=0;h<c.length;h++)f.header.push({text:c[h],tokens:this.lexer.inline(c[h]),header:!0,align:f.align[h]});for(const h of u)f.rows.push(Rg(h,f.header.length).map((g,v)=>({text:g,tokens:this.lexer.inline(g),header:!1,align:f.align[v]})));return f}}lheading(i){const s=this.rules.block.lheading.exec(i);if(s)return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:this.lexer.inline(s[1])}}paragraph(i){const s=this.rules.block.paragraph.exec(i);if(s){const c=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:c,tokens:this.lexer.inline(c)}}}text(i){const s=this.rules.block.text.exec(i);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(i){const s=this.rules.inline.escape.exec(i);if(s)return{type:"escape",raw:s[0],text:s[1]}}tag(i){const s=this.rules.inline.tag.exec(i);if(s)return!this.lexer.state.inLink&&this.rules.other.startATag.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:s[0]}}link(i){const s=this.rules.inline.link.exec(i);if(s){const c=s[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(c)){if(!this.rules.other.endAngleBracket.test(c))return;const f=Ur(c.slice(0,-1),"\\");if((c.length-f.length)%2===0)return}else{const f=AT(s[2],"()");if(f===-2)return;if(f>-1){const g=(s[0].indexOf("!")===0?5:4)+s[1].length+f;s[2]=s[2].substring(0,f),s[0]=s[0].substring(0,g).trim(),s[3]=""}}let l=s[2],u="";if(this.options.pedantic){const f=this.rules.other.pedanticHrefTitle.exec(l);f&&(l=f[1],u=f[3])}else u=s[3]?s[3].slice(1,-1):"";return l=l.trim(),this.rules.other.startAngleBracket.test(l)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(c)?l=l.slice(1):l=l.slice(1,-1)),xg(s,{href:l&&l.replace(this.rules.inline.anyPunctuation,"$1"),title:u&&u.replace(this.rules.inline.anyPunctuation,"$1")},s[0],this.lexer,this.rules)}}reflink(i,s){let c;if((c=this.rules.inline.reflink.exec(i))||(c=this.rules.inline.nolink.exec(i))){const l=(c[2]||c[1]).replace(this.rules.other.multipleSpaceGlobal," "),u=s[l.toLowerCase()];if(!u){const f=c[0].charAt(0);return{type:"text",raw:f,text:f}}return xg(c,u,c[0],this.lexer,this.rules)}}emStrong(i,s,c=""){let l=this.rules.inline.emStrongLDelim.exec(i);if(!l||l[3]&&c.match(this.rules.other.unicodeAlphaNumeric))return;if(!(l[1]||l[2]||"")||!c||this.rules.inline.punctuation.exec(c)){const f=[...l[0]].length-1;let h,g,v=f,b=0;const E=l[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(E.lastIndex=0,s=s.slice(-1*i.length+f);(l=E.exec(s))!=null;){if(h=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!h)continue;if(g=[...h].length,l[3]||l[4]){v+=g;continue}else if((l[5]||l[6])&&f%3&&!((f+g)%3)){b+=g;continue}if(v-=g,v>0)continue;g=Math.min(g,g+v+b);const y=[...l[0]][0].length,_=i.slice(0,f+l.index+y+g);if(Math.min(f,g)%2){const B=_.slice(1,-1);return{type:"em",raw:_,text:B,tokens:this.lexer.inlineTokens(B)}}const q=_.slice(2,-2);return{type:"strong",raw:_,text:q,tokens:this.lexer.inlineTokens(q)}}}}codespan(i){const s=this.rules.inline.code.exec(i);if(s){let c=s[2].replace(this.rules.other.newLineCharGlobal," ");const l=this.rules.other.nonSpaceChar.test(c),u=this.rules.other.startingSpaceChar.test(c)&&this.rules.other.endingSpaceChar.test(c);return l&&u&&(c=c.substring(1,c.length-1)),{type:"codespan",raw:s[0],text:c}}}br(i){const s=this.rules.inline.br.exec(i);if(s)return{type:"br",raw:s[0]}}del(i){const s=this.rules.inline.del.exec(i);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2])}}autolink(i){const s=this.rules.inline.autolink.exec(i);if(s){let c,l;return s[2]==="@"?(c=s[1],l="mailto:"+c):(c=s[1],l=c),{type:"link",raw:s[0],text:c,href:l,tokens:[{type:"text",raw:c,text:c}]}}}url(i){let s;if(s=this.rules.inline.url.exec(i)){let c,l;if(s[2]==="@")c=s[0],l="mailto:"+c;else{let u;do u=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])?.[0]??"";while(u!==s[0]);c=s[0],s[1]==="www."?l="http://"+s[0]:l=s[0]}return{type:"link",raw:s[0],text:c,href:l,tokens:[{type:"text",raw:c,text:c}]}}}inlineText(i){const s=this.rules.inline.text.exec(i);if(s){const c=this.lexer.state.inRawBlock;return{type:"text",raw:s[0],text:s[0],escaped:c}}}},Vt=class $u{tokens;options;state;tokenizer;inlineQueue;constructor(s){this.tokens=[],this.tokens.links=Object.create(null),this.options=s||Ja,this.options.tokenizer=this.options.tokenizer||new Vs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const c={other:An,block:Ns.normal,inline:Lr.normal};this.options.pedantic?(c.block=Ns.pedantic,c.inline=Lr.pedantic):this.options.gfm&&(c.block=Ns.gfm,this.options.breaks?c.inline=Lr.breaks:c.inline=Lr.gfm),this.tokenizer.rules=c}static get rules(){return{block:Ns,inline:Lr}}static lex(s,c){return new $u(c).lex(s)}static lexInline(s,c){return new $u(c).inlineTokens(s)}lex(s){s=s.replace(An.carriageReturn,`
`),this.blockTokens(s,this.tokens);for(let c=0;c<this.inlineQueue.length;c++){const l=this.inlineQueue[c];this.inlineTokens(l.src,l.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(s,c=[],l=!1){for(this.options.pedantic&&(s=s.replace(An.tabCharGlobal,"    ").replace(An.spaceLine,""));s;){let u;if(this.options.extensions?.block?.some(h=>(u=h.call({lexer:this},s,c))?(s=s.substring(u.raw.length),c.push(u),!0):!1))continue;if(u=this.tokenizer.space(s)){s=s.substring(u.raw.length);const h=c.at(-1);u.raw.length===1&&h!==void 0?h.raw+=`
`:c.push(u);continue}if(u=this.tokenizer.code(s)){s=s.substring(u.raw.length);const h=c.at(-1);h?.type==="paragraph"||h?.type==="text"?(h.raw+=`
`+u.raw,h.text+=`
`+u.text,this.inlineQueue.at(-1).src=h.text):c.push(u);continue}if(u=this.tokenizer.fences(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.heading(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.hr(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.blockquote(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.list(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.html(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.def(s)){s=s.substring(u.raw.length);const h=c.at(-1);h?.type==="paragraph"||h?.type==="text"?(h.raw+=`
`+u.raw,h.text+=`
`+u.raw,this.inlineQueue.at(-1).src=h.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title});continue}if(u=this.tokenizer.table(s)){s=s.substring(u.raw.length),c.push(u);continue}if(u=this.tokenizer.lheading(s)){s=s.substring(u.raw.length),c.push(u);continue}let f=s;if(this.options.extensions?.startBlock){let h=1/0;const g=s.slice(1);let v;this.options.extensions.startBlock.forEach(b=>{v=b.call({lexer:this},g),typeof v=="number"&&v>=0&&(h=Math.min(h,v))}),h<1/0&&h>=0&&(f=s.substring(0,h+1))}if(this.state.top&&(u=this.tokenizer.paragraph(f))){const h=c.at(-1);l&&h?.type==="paragraph"?(h.raw+=`
`+u.raw,h.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=h.text):c.push(u),l=f.length!==s.length,s=s.substring(u.raw.length);continue}if(u=this.tokenizer.text(s)){s=s.substring(u.raw.length);const h=c.at(-1);h?.type==="text"?(h.raw+=`
`+u.raw,h.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=h.text):c.push(u);continue}if(s){const h="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return this.state.top=!0,c}inline(s,c=[]){return this.inlineQueue.push({src:s,tokens:c}),c}inlineTokens(s,c=[]){let l=s,u=null;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(u=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)g.includes(u[0].slice(u[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,u.index)+"["+"a".repeat(u[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(u=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,u.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(u=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,u.index)+"["+"a".repeat(u[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let f=!1,h="";for(;s;){f||(h=""),f=!1;let g;if(this.options.extensions?.inline?.some(b=>(g=b.call({lexer:this},s,c))?(s=s.substring(g.raw.length),c.push(g),!0):!1))continue;if(g=this.tokenizer.escape(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.tag(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.link(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.reflink(s,this.tokens.links)){s=s.substring(g.raw.length);const b=c.at(-1);g.type==="text"&&b?.type==="text"?(b.raw+=g.raw,b.text+=g.text):c.push(g);continue}if(g=this.tokenizer.emStrong(s,l,h)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.codespan(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.br(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.del(s)){s=s.substring(g.raw.length),c.push(g);continue}if(g=this.tokenizer.autolink(s)){s=s.substring(g.raw.length),c.push(g);continue}if(!this.state.inLink&&(g=this.tokenizer.url(s))){s=s.substring(g.raw.length),c.push(g);continue}let v=s;if(this.options.extensions?.startInline){let b=1/0;const E=s.slice(1);let y;this.options.extensions.startInline.forEach(_=>{y=_.call({lexer:this},E),typeof y=="number"&&y>=0&&(b=Math.min(b,y))}),b<1/0&&b>=0&&(v=s.substring(0,b+1))}if(g=this.tokenizer.inlineText(v)){s=s.substring(g.raw.length),g.raw.slice(-1)!=="_"&&(h=g.raw.slice(-1)),f=!0;const b=c.at(-1);b?.type==="text"?(b.raw+=g.raw,b.text+=g.text):c.push(g);continue}if(s){const b="Infinite loop on byte: "+s.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return c}},Xs=class{options;parser;constructor(i){this.options=i||Ja}space(i){return""}code({text:i,lang:s,escaped:c}){const l=(s||"").match(An.notSpaceStart)?.[0],u=i.replace(An.endingNewline,"")+`
`;return l?'<pre><code class="language-'+xt(l)+'">'+(c?u:xt(u,!0))+`</code></pre>
`:"<pre><code>"+(c?u:xt(u,!0))+`</code></pre>
`}blockquote({tokens:i}){return`<blockquote>
${this.parser.parse(i)}</blockquote>
`}html({text:i}){return i}heading({tokens:i,depth:s}){return`<h${s}>${this.parser.parseInline(i)}</h${s}>
`}hr(i){return`<hr>
`}list(i){const s=i.ordered,c=i.start;let l="";for(let h=0;h<i.items.length;h++){const g=i.items[h];l+=this.listitem(g)}const u=s?"ol":"ul",f=s&&c!==1?' start="'+c+'"':"";return"<"+u+f+`>
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
`}strong({tokens:i}){return`<strong>${this.parser.parseInline(i)}</strong>`}em({tokens:i}){return`<em>${this.parser.parseInline(i)}</em>`}codespan({text:i}){return`<code>${xt(i,!0)}</code>`}br(i){return"<br>"}del({tokens:i}){return`<del>${this.parser.parseInline(i)}</del>`}link({href:i,title:s,tokens:c}){const l=this.parser.parseInline(c),u=_g(i);if(u===null)return l;i=u;let f='<a href="'+i+'"';return s&&(f+=' title="'+xt(s)+'"'),f+=">"+l+"</a>",f}image({href:i,title:s,text:c,tokens:l}){l&&(c=this.parser.parseInline(l,this.parser.textRenderer));const u=_g(i);if(u===null)return xt(c);i=u;let f=`<img src="${i}" alt="${c}"`;return s&&(f+=` title="${xt(s)}"`),f+=">",f}text(i){return"tokens"in i&&i.tokens?this.parser.parseInline(i.tokens):"escaped"in i&&i.escaped?i.text:xt(i.text)}},Sd=class{strong({text:i}){return i}em({text:i}){return i}codespan({text:i}){return i}del({text:i}){return i}html({text:i}){return i}text({text:i}){return i}link({text:i}){return""+i}image({text:i}){return""+i}br(){return""}},Xt=class ed{options;renderer;textRenderer;constructor(s){this.options=s||Ja,this.options.renderer=this.options.renderer||new Xs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Sd}static parse(s,c){return new ed(c).parse(s)}static parseInline(s,c){return new ed(c).parseInline(s)}parse(s,c=!0){let l="";for(let u=0;u<s.length;u++){const f=s[u];if(this.options.extensions?.renderers?.[f.type]){const g=f,v=this.options.extensions.renderers[g.type].call({parser:this},g);if(v!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(g.type)){l+=v||"";continue}}const h=f;switch(h.type){case"space":{l+=this.renderer.space(h);continue}case"hr":{l+=this.renderer.hr(h);continue}case"heading":{l+=this.renderer.heading(h);continue}case"code":{l+=this.renderer.code(h);continue}case"table":{l+=this.renderer.table(h);continue}case"blockquote":{l+=this.renderer.blockquote(h);continue}case"list":{l+=this.renderer.list(h);continue}case"html":{l+=this.renderer.html(h);continue}case"paragraph":{l+=this.renderer.paragraph(h);continue}case"text":{let g=h,v=this.renderer.text(g);for(;u+1<s.length&&s[u+1].type==="text";)g=s[++u],v+=`
`+this.renderer.text(g);c?l+=this.renderer.paragraph({type:"paragraph",raw:v,text:v,tokens:[{type:"text",raw:v,text:v,escaped:!0}]}):l+=v;continue}default:{const g='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(g),"";throw new Error(g)}}}return l}parseInline(s,c=this.renderer){let l="";for(let u=0;u<s.length;u++){const f=s[u];if(this.options.extensions?.renderers?.[f.type]){const g=this.options.extensions.renderers[f.type].call({parser:this},f);if(g!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(f.type)){l+=g||"";continue}}const h=f;switch(h.type){case"escape":{l+=c.text(h);break}case"html":{l+=c.html(h);break}case"link":{l+=c.link(h);break}case"image":{l+=c.image(h);break}case"strong":{l+=c.strong(h);break}case"em":{l+=c.em(h);break}case"codespan":{l+=c.codespan(h);break}case"br":{l+=c.br(h);break}case"del":{l+=c.del(h);break}case"text":{l+=c.text(h);break}default:{const g='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(g),"";throw new Error(g)}}}return l}},Ws=class{options;block;constructor(i){this.options=i||Ja}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(i){return i}postprocess(i){return i}processAllTokens(i){return i}provideLexer(){return this.block?Vt.lex:Vt.lexInline}provideParser(){return this.block?Xt.parse:Xt.parseInline}},NT=class{defaults=hd();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Xt;Renderer=Xs;TextRenderer=Sd;Lexer=Vt;Tokenizer=Vs;Hooks=Ws;constructor(...i){this.use(...i)}walkTokens(i,s){let c=[];for(const l of i)switch(c=c.concat(s.call(this,l)),l.type){case"table":{const u=l;for(const f of u.header)c=c.concat(this.walkTokens(f.tokens,s));for(const f of u.rows)for(const h of f)c=c.concat(this.walkTokens(h.tokens,s));break}case"list":{const u=l;c=c.concat(this.walkTokens(u.items,s));break}default:{const u=l;this.defaults.extensions?.childTokens?.[u.type]?this.defaults.extensions.childTokens[u.type].forEach(f=>{const h=u[f].flat(1/0);c=c.concat(this.walkTokens(h,s))}):u.tokens&&(c=c.concat(this.walkTokens(u.tokens,s)))}}return c}use(...i){const s=this.defaults.extensions||{renderers:{},childTokens:{}};return i.forEach(c=>{const l={...c};if(l.async=this.defaults.async||l.async||!1,c.extensions&&(c.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){const f=s.renderers[u.name];f?s.renderers[u.name]=function(...h){let g=u.renderer.apply(this,h);return g===!1&&(g=f.apply(this,h)),g}:s.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const f=s[u.level];f?f.unshift(u.tokenizer):s[u.level]=[u.tokenizer],u.start&&(u.level==="block"?s.startBlock?s.startBlock.push(u.start):s.startBlock=[u.start]:u.level==="inline"&&(s.startInline?s.startInline.push(u.start):s.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(s.childTokens[u.name]=u.childTokens)}),l.extensions=s),c.renderer){const u=this.defaults.renderer||new Xs(this.defaults);for(const f in c.renderer){if(!(f in u))throw new Error(`renderer '${f}' does not exist`);if(["options","parser"].includes(f))continue;const h=f,g=c.renderer[h],v=u[h];u[h]=(...b)=>{let E=g.apply(u,b);return E===!1&&(E=v.apply(u,b)),E||""}}l.renderer=u}if(c.tokenizer){const u=this.defaults.tokenizer||new Vs(this.defaults);for(const f in c.tokenizer){if(!(f in u))throw new Error(`tokenizer '${f}' does not exist`);if(["options","rules","lexer"].includes(f))continue;const h=f,g=c.tokenizer[h],v=u[h];u[h]=(...b)=>{let E=g.apply(u,b);return E===!1&&(E=v.apply(u,b)),E}}l.tokenizer=u}if(c.hooks){const u=this.defaults.hooks||new Ws;for(const f in c.hooks){if(!(f in u))throw new Error(`hook '${f}' does not exist`);if(["options","block"].includes(f))continue;const h=f,g=c.hooks[h],v=u[h];Ws.passThroughHooks.has(f)?u[h]=b=>{if(this.defaults.async)return Promise.resolve(g.call(u,b)).then(y=>v.call(u,y));const E=g.call(u,b);return v.call(u,E)}:u[h]=(...b)=>{let E=g.apply(u,b);return E===!1&&(E=v.apply(u,b)),E}}l.hooks=u}if(c.walkTokens){const u=this.defaults.walkTokens,f=c.walkTokens;l.walkTokens=function(h){let g=[];return g.push(f.call(this,h)),u&&(g=g.concat(u.call(this,h))),g}}this.defaults={...this.defaults,...l}}),this}setOptions(i){return this.defaults={...this.defaults,...i},this}lexer(i,s){return Vt.lex(i,s??this.defaults)}parser(i,s){return Xt.parse(i,s??this.defaults)}parseMarkdown(i){return(c,l)=>{const u={...l},f={...this.defaults,...u},h=this.onError(!!f.silent,!!f.async);if(this.defaults.async===!0&&u.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof c>"u"||c===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof c!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(c)+", string expected"));f.hooks&&(f.hooks.options=f,f.hooks.block=i);const g=f.hooks?f.hooks.provideLexer():i?Vt.lex:Vt.lexInline,v=f.hooks?f.hooks.provideParser():i?Xt.parse:Xt.parseInline;if(f.async)return Promise.resolve(f.hooks?f.hooks.preprocess(c):c).then(b=>g(b,f)).then(b=>f.hooks?f.hooks.processAllTokens(b):b).then(b=>f.walkTokens?Promise.all(this.walkTokens(b,f.walkTokens)).then(()=>b):b).then(b=>v(b,f)).then(b=>f.hooks?f.hooks.postprocess(b):b).catch(h);try{f.hooks&&(c=f.hooks.preprocess(c));let b=g(c,f);f.hooks&&(b=f.hooks.processAllTokens(b)),f.walkTokens&&this.walkTokens(b,f.walkTokens);let E=v(b,f);return f.hooks&&(E=f.hooks.postprocess(E)),E}catch(b){return h(b)}}}onError(i,s){return c=>{if(c.message+=`
Please report this to https://github.com/markedjs/marked.`,i){const l="<p>An error occurred:</p><pre>"+xt(c.message+"",!0)+"</pre>";return s?Promise.resolve(l):l}if(s)return Promise.reject(c);throw c}}},Ka=new NT;function Ie(i,s){return Ka.parse(i,s)}Ie.options=Ie.setOptions=function(i){return Ka.setOptions(i),Ie.defaults=Ka.defaults,ev(Ie.defaults),Ie};Ie.getDefaults=hd;Ie.defaults=Ja;Ie.use=function(...i){return Ka.use(...i),Ie.defaults=Ka.defaults,ev(Ie.defaults),Ie};Ie.walkTokens=function(i,s){return Ka.walkTokens(i,s)};Ie.parseInline=Ka.parseInline;Ie.Parser=Xt;Ie.parser=Xt.parse;Ie.Renderer=Xs;Ie.TextRenderer=Sd;Ie.Lexer=Vt;Ie.lexer=Vt.lex;Ie.Tokenizer=Vs;Ie.Hooks=Ws;Ie.parse=Ie;Ie.options;Ie.setOptions;Ie.use;Ie.walkTokens;Ie.parseInline;Xt.parse;Vt.lex;const kT=JSON.parse(`[{"slug":"common-acronyms-and-vocabulary","basename":"Common Acronyms and Vocabulary","title":"Common Acronyms and Vocabulary","plainTitle":"Common Acronyms and Vocabulary","folder":[],"file":"Common Acronyms and Vocabulary.md","cssclasses":[]},{"slug":"economic","basename":"🌾Economic","title":"🌾Economic","plainTitle":"Economic","folder":["Explore by Benefits","🌾Producer Benefits"],"file":"Explore by Benefits/🌾Producer Benefits/🌾Economic.md","cssclasses":[]},{"slug":"livestock-health-and-production","basename":"🌾Livestock Health and Production","title":"🌾Livestock Health and Production","plainTitle":"Livestock Health and Production","folder":["Explore by Benefits","🌾Producer Benefits"],"file":"Explore by Benefits/🌾Producer Benefits/🌾Livestock Health and Production.md","cssclasses":[]},{"slug":"plant-productivity","basename":"🌾Plant Productivity","title":"🌾Plant Productivity","plainTitle":"Plant Productivity","folder":["Explore by Benefits","🌾Producer Benefits"],"file":"Explore by Benefits/🌾Producer Benefits/🌾Plant Productivity.md","cssclasses":[]},{"slug":"reduced-erosion","basename":"🌾Reduced Erosion","title":"🌾Reduced Erosion","plainTitle":"Reduced Erosion","folder":["Explore by Benefits","🌾Producer Benefits"],"file":"Explore by Benefits/🌾Producer Benefits/🌾Reduced Erosion.md","cssclasses":[]},{"slug":"soil-health","basename":"🌾Soil Health","title":"🌾Soil Health","plainTitle":"Soil Health","folder":["Explore by Benefits","🌾Producer Benefits"],"file":"Explore by Benefits/🌾Producer Benefits/🌾Soil Health.md","cssclasses":[]},{"slug":"water-quantity-and-availability","basename":"🌾Water Quantity and Availability","title":"🌾Water Quantity and Availability","plainTitle":"Water Quantity and Availability","folder":["Explore by Benefits","🌾Producer Benefits"],"file":"Explore by Benefits/🌾Producer Benefits/🌾Water Quantity and Availability.md","cssclasses":[]},{"slug":"carbon-sequestration","basename":"🍃 Carbon Sequestration","title":"🍃 Carbon Sequestration","plainTitle":"Carbon Sequestration","folder":["Explore by Benefits","🍃Climate Benefits"],"file":"Explore by Benefits/🍃Climate Benefits/🍃 Carbon Sequestration.md","cssclasses":[]},{"slug":"climate-resilience-and-adaptation","basename":"🍃 Climate Resilience and Adaptation","title":"🍃 Climate Resilience and Adaptation","plainTitle":"Climate Resilience and Adaptation","folder":["Explore by Benefits","🍃Climate Benefits"],"file":"Explore by Benefits/🍃Climate Benefits/🍃 Climate Resilience and Adaptation.md","cssclasses":[]},{"slug":"ghg-emissions","basename":"🍃 GHG Emissions","title":"🍃 GHG Emissions","plainTitle":"GHG Emissions","folder":["Explore by Benefits","🍃Climate Benefits"],"file":"Explore by Benefits/🍃Climate Benefits/🍃 GHG Emissions.md","cssclasses":[]},{"slug":"aquatic-habitat","basename":"🦪 Aquatic Habitat","title":"🦪 Aquatic Habitat","plainTitle":"Aquatic Habitat","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Aquatic Habitat.md","cssclasses":[]},{"slug":"biodiversity","basename":"🦪 Biodiversity","title":"🦪 Biodiversity","plainTitle":"Biodiversity","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Biodiversity.md","cssclasses":[]},{"slug":"riparian-condition","basename":"🦪 Riparian Condition","title":"🦪 Riparian Condition","plainTitle":"Riparian Condition","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Riparian Condition.md","cssclasses":[]},{"slug":"streambank-and-shoreline-condition","basename":"🦪 Streambank and Shoreline Condition","title":"🦪 Streambank and Shoreline Condition","plainTitle":"Streambank and Shoreline Condition","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Streambank and Shoreline Condition.md","cssclasses":[]},{"slug":"terrestrial-habitat","basename":"🦪 Terrestrial Habitat","title":"🦪 Terrestrial Habitat","plainTitle":"Terrestrial Habitat","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Terrestrial Habitat.md","cssclasses":[]},{"slug":"water-quality","basename":"🦪 Water Quality","title":"🦪 Water Quality","plainTitle":"Water Quality","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Water Quality.md","cssclasses":[]},{"slug":"wetlands-conservation","basename":"🦪 Wetlands Conservation","title":"🦪 Wetlands Conservation","plainTitle":"Wetlands Conservation","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Wetlands Conservation.md","cssclasses":[]},{"slug":"wildlife-and-ecosystem-connectivity","basename":"🦪 Wildlife and Ecosystem Connectivity","title":"🦪 Wildlife and Ecosystem Connectivity","plainTitle":"Wildlife and Ecosystem Connectivity","folder":["Explore by Benefits","🦪 Wildlife Benefits"],"file":"Explore by Benefits/🦪 Wildlife Benefits/🦪 Wildlife and Ecosystem Connectivity.md","cssclasses":[]},{"slug":"cp-314-brush-management","basename":"CP 314 - Brush Management","title":"CP 314 - Brush Management","plainTitle":"CP 314 - Brush Management","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 314 - Brush Management.md","cssclasses":[]},{"slug":"cp-315-herbaceous-weed-treatment","basename":"CP 315 - Herbaceous Weed Treatment","title":"CP 315 - Herbaceous Weed Treatment","plainTitle":"CP 315 - Herbaceous Weed Treatment","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 315 - Herbaceous Weed Treatment.md","cssclasses":[]},{"slug":"cp-327-conservation-cover","basename":"CP 327 - Conservation Cover","title":"CP 327 - Conservation Cover","plainTitle":"CP 327 - Conservation Cover","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 327 - Conservation Cover.md","cssclasses":[]},{"slug":"cp-328-conservation-crop-rotation","basename":"CP 328 - Conservation Crop Rotation","title":"CP 328 - Conservation Crop Rotation","plainTitle":"CP 328 - Conservation Crop Rotation","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 328 - Conservation Crop Rotation.md","cssclasses":[]},{"slug":"cp-329-residue-and-tillage-mgmt-no-till","basename":"CP 329 - Residue and Tillage Mgmt (No Till)","title":"CP 329 - Residue and Tillage Mgmt (No Till)","plainTitle":"CP 329 - Residue and Tillage Mgmt (No Till)","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 329 - Residue and Tillage Mgmt (No Till).md","cssclasses":[]},{"slug":"cp-340-cover-crop","basename":"CP 340 - Cover Crop","title":"CP 340 - Cover Crop","plainTitle":"CP 340 - Cover Crop","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 340 - Cover Crop.md","cssclasses":[]},{"slug":"cp-342-critical-area-planting","basename":"CP 342 - Critical Area Planting","title":"CP 342 - Critical Area Planting","plainTitle":"CP 342 - Critical Area Planting","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 342 - Critical Area Planting.md","cssclasses":[]},{"slug":"cp-345-residue-and-tillage-mgmt-reduced-till","basename":"CP 345 - Residue and Tillage Mgmt (Reduced Till)","title":"CP 345 - Residue and Tillage Mgmt (Reduced Till)","plainTitle":"CP 345 - Residue and Tillage Mgmt (Reduced Till)","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 345 - Residue and Tillage Mgmt (Reduced Till).md","cssclasses":[]},{"slug":"cp-356-dike-and-levee","basename":"CP 356 - Dike and Levee","title":"CP 356 - Dike and Levee","plainTitle":"CP 356 - Dike and Levee","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 356 - Dike and Levee.md","cssclasses":[]},{"slug":"cp-378-pond","basename":"CP 378 - Pond","title":"CP 378 - Pond","plainTitle":"CP 378 - Pond","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 378 - Pond.md","cssclasses":[]},{"slug":"cp-382-fence","basename":"CP 382 - Fence","title":"CP 382 - Fence","plainTitle":"CP 382 - Fence","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 382 - Fence.md","cssclasses":[]},{"slug":"cp-390-riparian-herbaceous-cover","basename":"CP 390 - Riparian Herbaceous Cover","title":"CP 390 - Riparian Herbaceous Cover","plainTitle":"CP 390 - Riparian Herbaceous Cover","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 390 - Riparian Herbaceous Cover.md","cssclasses":[]},{"slug":"cp-391-riparian-forest-buffer","basename":"CP 391 - Riparian Forest buffer","title":"CP 391 - Riparian Forest buffer","plainTitle":"CP 391 - Riparian Forest buffer","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 391 - Riparian Forest buffer.md","cssclasses":[]},{"slug":"cp-395-stream-habitat-improvement-and-management","basename":"CP 395 - Stream Habitat Improvement and Management","title":"CP 395 - Stream Habitat Improvement and Management","plainTitle":"CP 395 - Stream Habitat Improvement and Management","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 395 - Stream Habitat Improvement and Management.md","cssclasses":[]},{"slug":"cp-396-aquatic-organism-passage","basename":"CP 396 - Aquatic Organism Passage","title":"CP 396 - Aquatic Organism Passage","plainTitle":"CP 396 - Aquatic Organism Passage","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 396 - Aquatic Organism Passage.md","cssclasses":[]},{"slug":"cp-410-grade-stabilization-structure","basename":"CP 410 - Grade Stabilization Structure","title":"CP 410 - Grade Stabilization Structure","plainTitle":"CP 410 - Grade Stabilization Structure","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 410 - Grade Stabilization Structure.md","cssclasses":[]},{"slug":"cp-420-wildlife-habitat-planting","basename":"CP 420 - Wildlife Habitat Planting","title":"CP 420 - Wildlife Habitat Planting","plainTitle":"CP 420 - Wildlife Habitat Planting","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 420 - Wildlife Habitat Planting.md","cssclasses":[]},{"slug":"cp-472-access-control","basename":"CP 472 - Access Control","title":"CP 472 - Access Control","plainTitle":"CP 472 - Access Control","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 472 - Access Control.md","cssclasses":[]},{"slug":"cp-512-pasture-and-hay-planting","basename":"CP 512 - Pasture and Hay Planting","title":"CP 512 - Pasture and Hay Planting","plainTitle":"CP 512 - Pasture and Hay Planting","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 512 - Pasture and Hay Planting.md","cssclasses":[]},{"slug":"cp-516-livestock-pipeline","basename":"CP 516 - Livestock Pipeline","title":"CP 516 - Livestock Pipeline","plainTitle":"CP 516 - Livestock Pipeline","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 516 - Livestock Pipeline.md","cssclasses":[]},{"slug":"cp-528-prescribed-grazing","basename":"CP 528 - Prescribed Grazing","title":"CP 528 - Prescribed Grazing","plainTitle":"CP 528 - Prescribed Grazing","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 528 - Prescribed Grazing.md","cssclasses":[]},{"slug":"cp-533-pumping-plant","basename":"CP 533 - Pumping Plant","title":"CP 533 - Pumping Plant","plainTitle":"CP 533 - Pumping Plant","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 533 - Pumping Plant.md","cssclasses":[]},{"slug":"cp-550-range-planting","basename":"CP 550 - Range Planting","title":"CP 550 - Range Planting","plainTitle":"CP 550 - Range Planting","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 550 - Range Planting.md","cssclasses":[]},{"slug":"cp-561-heavy-use-area-protection","basename":"CP 561 - Heavy Use Area Protection","title":"CP 561 - Heavy Use Area Protection","plainTitle":"CP 561 - Heavy Use Area Protection","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 561 - Heavy Use Area Protection.md","cssclasses":[]},{"slug":"cp-578-stream-crossing","basename":"CP 578 - Stream Crossing","title":"CP 578 - Stream Crossing","plainTitle":"CP 578 - Stream Crossing","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 578 - Stream Crossing.md","cssclasses":[]},{"slug":"cp-580-streambank-and-shoreline-protection","basename":"CP 580 - Streambank and Shoreline Protection","title":"CP 580 - Streambank and Shoreline Protection","plainTitle":"CP 580 - Streambank and Shoreline Protection","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 580 - Streambank and Shoreline Protection.md","cssclasses":[]},{"slug":"cp-584-channel-bed-stablilization","basename":"CP 584 - Channel Bed Stablilization","title":"CP 584 - Channel Bed Stablilization","plainTitle":"CP 584 - Channel Bed Stablilization","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 584 - Channel Bed Stablilization.md","cssclasses":[]},{"slug":"cp-587-structure-for-water-control","basename":"CP 587 - Structure for Water Control","title":"CP 587 - Structure for Water Control","plainTitle":"CP 587 - Structure for Water Control","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 587 - Structure for Water Control.md","cssclasses":[]},{"slug":"cp-590-nutrient-management","basename":"CP 590 - Nutrient Management","title":"CP 590 - Nutrient Management","plainTitle":"CP 590 - Nutrient Management","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 590 - Nutrient Management.md","cssclasses":[]},{"slug":"cp-595-pest-management-conservation-system","basename":"CP 595 - Pest Management Conservation System","title":"CP 595 - Pest Management Conservation System","plainTitle":"CP 595 - Pest Management Conservation System","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 595 - Pest Management Conservation System.md","cssclasses":[]},{"slug":"cp-612-tree-and-shrub-establishment","basename":"CP 612 - Tree and Shrub Establishment","title":"CP 612 - Tree and Shrub Establishment","plainTitle":"CP 612 - Tree and Shrub Establishment","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 612 - Tree and Shrub Establishment.md","cssclasses":[]},{"slug":"cp-614-watering-facility","basename":"CP 614 - Watering Facility","title":"CP 614 - Watering Facility","plainTitle":"CP 614 - Watering Facility","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 614 - Watering Facility.md","cssclasses":[]},{"slug":"cp-642-water-well","basename":"CP 642 - Water Well","title":"CP 642 - Water Well","plainTitle":"CP 642 - Water Well","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 642 - Water Well.md","cssclasses":[]},{"slug":"cp-643-restoration-of-rare-and-declining-habitats","basename":"CP 643 - Restoration of Rare and Declining Habitats","title":"CP 643 - Restoration of Rare and Declining Habitats","plainTitle":"CP 643 - Restoration of Rare and Declining Habitats","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 643 - Restoration of Rare and Declining Habitats.md","cssclasses":[]},{"slug":"cp-644-wetland-wildlife-habitat-management","basename":"CP 644 - Wetland Wildlife Habitat Management","title":"CP 644 - Wetland Wildlife Habitat Management","plainTitle":"CP 644 - Wetland Wildlife Habitat Management","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 644 - Wetland Wildlife Habitat Management.md","cssclasses":[]},{"slug":"cp-646-shallow-water-development-and-management","basename":"CP 646 - Shallow Water Development and Management","title":"CP 646 - Shallow Water Development and Management","plainTitle":"CP 646 - Shallow Water Development and Management","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 646 - Shallow Water Development and Management.md","cssclasses":[]},{"slug":"cp-649-structures-for-wildlife","basename":"CP 649 - Structures for Wildlife","title":"CP 649 - Structures for Wildlife","plainTitle":"CP 649 - Structures for Wildlife","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 649 - Structures for Wildlife.md","cssclasses":[]},{"slug":"cp-657-wetland-restoration","basename":"CP 657 - Wetland Restoration","title":"CP 657 - Wetland Restoration","plainTitle":"CP 657 - Wetland Restoration","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 657 - Wetland Restoration.md","cssclasses":[]},{"slug":"cp-658-wetland-creation","basename":"CP 658 - Wetland Creation","title":"CP 658 - Wetland Creation","plainTitle":"CP 658 - Wetland Creation","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 658 - Wetland Creation.md","cssclasses":[]},{"slug":"cp-659-wetland-enhancement","basename":"CP 659 - Wetland Enhancement","title":"CP 659 - Wetland Enhancement","plainTitle":"CP 659 - Wetland Enhancement","folder":["Explore by Conservation Practices"],"file":"Explore by Conservation Practices/CP 659 - Wetland Enhancement.md","cssclasses":[]},{"slug":"wildfire-hazard-from-biomass-accumulation","basename":"⚠️ Wildfire Hazard from Biomass Accumulation","title":"⚠️ Wildfire Hazard from Biomass Accumulation","plainTitle":"Wildfire Hazard from Biomass Accumulation","folder":["Explore by Threats + Resource Concerns","⚠️ Wildfire"],"file":"Explore by Threats + Resource Concerns/⚠️ Wildfire/⚠️ Wildfire Hazard from Biomass Accumulation.md","cssclasses":[]},{"slug":"emissions-of-airborne-reactive-nitrogen","basename":"⚡️Emissions of Airborne Reactive Nitrogen","title":"⚡️Emissions of Airborne Reactive Nitrogen","plainTitle":"Emissions of Airborne Reactive Nitrogen","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Airborne Reactive Nitrogen.md","cssclasses":[]},{"slug":"emissions-of-greenhouse-gasses-ghgs","basename":"⚡️Emissions of Greenhouse Gasses (GHGs)","title":"⚡️Emissions of Greenhouse Gasses (GHGs)","plainTitle":"Emissions of Greenhouse Gasses (GHGs)","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Greenhouse Gasses (GHGs).md","cssclasses":[]},{"slug":"emissions-of-ozone-precursors","basename":"⚡️Emissions of Ozone Precursors","title":"⚡️Emissions of Ozone Precursors","plainTitle":"Emissions of Ozone Precursors","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Ozone Precursors.md","cssclasses":[]},{"slug":"emissions-of-particulate-matter-pm-and-pm-precursors","basename":"⚡️Emissions of Particulate Matter (PM) and PM Precursors","title":"⚡️Emissions of Particulate Matter (PM) and PM Precursors","plainTitle":"Emissions of Particulate Matter (PM) and PM Precursors","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Particulate Matter (PM) and PM Precursors.md","cssclasses":[]},{"slug":"energy-efficiency-of-equipment-and-facilities","basename":"⚡️Energy Efficiency of Equipment and Facilities","title":"⚡️Energy Efficiency of Equipment and Facilities","plainTitle":"Energy Efficiency of Equipment and Facilities","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Energy Efficiency of Equipment and Facilities.md","cssclasses":[]},{"slug":"energy-efficiency-of-farming-ranching-practices-and-field-operations","basename":"⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations","title":"⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations","plainTitle":"Energy Efficiency of Farming & Ranching Practices and Field Operations","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations.md","cssclasses":[]},{"slug":"objectionable-odor","basename":"⚡️Objectionable Odor","title":"⚡️Objectionable Odor","plainTitle":"Objectionable Odor","folder":["Explore by Threats + Resource Concerns","⚡️ Air Quality & Energy Efficiency"],"file":"Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Objectionable Odor.md","cssclasses":[]},{"slug":"aggregate-instability","basename":"🏞️ Aggregate Instability","title":"🏞️ Aggregate Instability","plainTitle":"Aggregate Instability","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Aggregate Instability.md","cssclasses":[]},{"slug":"bank-erosion-from-streams-shorelines-or-water-conveyance-channels","basename":"🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels","title":"🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels","plainTitle":"Bank Erosion from Streams, Shorelines or Water Conveyance Channels","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels.md","cssclasses":[]},{"slug":"classic-gully-erosion","basename":"🏞️ Classic Gully Erosion","title":"🏞️ Classic Gully Erosion","plainTitle":"Classic Gully Erosion","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Classic Gully Erosion.md","cssclasses":[]},{"slug":"compaction","basename":"🏞️ Compaction","title":"🏞️ Compaction","plainTitle":"Compaction","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Compaction.md","cssclasses":[]},{"slug":"concentration-of-salts-or-other-chemicals","basename":"🏞️ Concentration of Salts or Other Chemicals","title":"🏞️ Concentration of Salts or Other Chemicals","plainTitle":"Concentration of Salts or Other Chemicals","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Concentration of Salts or Other Chemicals.md","cssclasses":[]},{"slug":"ephemeral-gully-erosion","basename":"🏞️ Ephemeral Gully Erosion","title":"🏞️ Ephemeral Gully Erosion","plainTitle":"Ephemeral Gully Erosion","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Ephemeral Gully Erosion.md","cssclasses":[]},{"slug":"organic-matter-depletion","basename":"🏞️ Organic Matter Depletion","title":"🏞️ Organic Matter Depletion","plainTitle":"Organic Matter Depletion","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Organic Matter Depletion.md","cssclasses":[]},{"slug":"ponding-and-flooding","basename":"🏞️ Ponding and Flooding","title":"🏞️ Ponding and Flooding","plainTitle":"Ponding and Flooding","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Ponding and Flooding.md","cssclasses":[]},{"slug":"seeps","basename":"🏞️ Seeps","title":"🏞️ Seeps","plainTitle":"Seeps","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Seeps.md","cssclasses":[]},{"slug":"sheet-and-rill-erosion","basename":"🏞️ Sheet and Rill Erosion","title":"🏞️ Sheet and Rill Erosion","plainTitle":"Sheet and Rill Erosion","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Sheet and Rill Erosion.md","cssclasses":[]},{"slug":"soil-organism-habitat-degradation","basename":"🏞️ Soil Organism Habitat Degradation","title":"🏞️ Soil Organism Habitat Degradation","plainTitle":"Soil Organism Habitat Degradation","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Soil Organism Habitat Degradation.md","cssclasses":[]},{"slug":"subsidence","basename":"🏞️ Subsidence","title":"🏞️ Subsidence","plainTitle":"Subsidence","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Subsidence.md","cssclasses":[]},{"slug":"wind-erosion","basename":"🏞️ Wind Erosion","title":"🏞️ Wind Erosion","plainTitle":"Wind Erosion","folder":["Explore by Threats + Resource Concerns","🏞️ Soil & Land Threats"],"file":"Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Wind Erosion.md","cssclasses":[]},{"slug":"feed-and-forage-imbalance","basename":"🐄 Feed and Forage Imbalance","title":"🐄 Feed and Forage Imbalance","plainTitle":"Feed and Forage Imbalance","folder":["Explore by Threats + Resource Concerns","🐄 Plants & Livestock Threats"],"file":"Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Feed and Forage Imbalance.md","cssclasses":[]},{"slug":"inadequate-livestock-shelter","basename":"🐄 Inadequate Livestock Shelter","title":"🐄 Inadequate Livestock Shelter","plainTitle":"Inadequate Livestock Shelter","folder":["Explore by Threats + Resource Concerns","🐄 Plants & Livestock Threats"],"file":"Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Inadequate Livestock Shelter.md","cssclasses":[]},{"slug":"inadequate-livestock-water-quantity-quality-and-distribution","basename":"🐄 Inadequate Livestock Water Quantity, Quality and Distribution","title":"🐄 Inadequate Livestock Water Quantity, Quality and Distribution","plainTitle":"Inadequate Livestock Water Quantity, Quality and Distribution","folder":["Explore by Threats + Resource Concerns","🐄 Plants & Livestock Threats"],"file":"Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Inadequate Livestock Water Quantity, Quality and Distribution.md","cssclasses":[]},{"slug":"plant-pest-pressure","basename":"🐄 Plant Pest Pressure","title":"🐄 Plant Pest Pressure","plainTitle":"Plant Pest Pressure","folder":["Explore by Threats + Resource Concerns","🐄 Plants & Livestock Threats"],"file":"Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Plant Pest Pressure.md","cssclasses":[]},{"slug":"plant-productivity-and-health","basename":"🐄 Plant Productivity and Health","title":"🐄 Plant Productivity and Health","plainTitle":"Plant Productivity and Health","folder":["Explore by Threats + Resource Concerns","🐄 Plants & Livestock Threats"],"file":"Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Plant Productivity and Health.md","cssclasses":[]},{"slug":"plant-structure-and-composition","basename":"🐄 Plant Structure and Composition","title":"🐄 Plant Structure and Composition","plainTitle":"Plant Structure and Composition","folder":["Explore by Threats + Resource Concerns","🐄 Plants & Livestock Threats"],"file":"Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Plant Structure and Composition.md","cssclasses":[]},{"slug":"aquatic-habitat-for-fish-and-other-organisms","basename":"🐾 Aquatic Habitat for Fish and Other Organisms","title":"🐾 Aquatic Habitat for Fish and Other Organisms","plainTitle":"Aquatic Habitat for Fish and Other Organisms","folder":["Explore by Threats + Resource Concerns","🐾 Wildlife Threats"],"file":"Explore by Threats + Resource Concerns/🐾 Wildlife Threats/🐾 Aquatic Habitat for Fish and Other Organisms.md","cssclasses":[]},{"slug":"terrestrial-habitat-for-wildlife-and-invertebrates","basename":"🐾 Terrestrial Habitat for Wildlife and Invertebrates","title":"🐾 Terrestrial Habitat for Wildlife and Invertebrates","plainTitle":"Terrestrial Habitat for Wildlife and Invertebrates","folder":["Explore by Threats + Resource Concerns","🐾 Wildlife Threats"],"file":"Explore by Threats + Resource Concerns/🐾 Wildlife Threats/🐾 Terrestrial Habitat for Wildlife and Invertebrates.md","cssclasses":[]},{"slug":"drifted-snow","basename":"💧Drifted Snow","title":"💧Drifted Snow","plainTitle":"Drifted Snow","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Drifted Snow.md","cssclasses":[]},{"slug":"elevated-water-temperature","basename":"💧Elevated Water Temperature","title":"💧Elevated Water Temperature","plainTitle":"Elevated Water Temperature","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Elevated Water Temperature.md","cssclasses":[]},{"slug":"groundwater-depletion","basename":"💧Groundwater Depletion","title":"💧Groundwater Depletion","plainTitle":"Groundwater Depletion","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Groundwater Depletion.md","cssclasses":[]},{"slug":"inefficient-irrigation-water-use","basename":"💧Inefficient Irrigation Water use","title":"💧Inefficient Irrigation Water use","plainTitle":"Inefficient Irrigation Water use","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Inefficient Irrigation Water use.md","cssclasses":[]},{"slug":"naturally-available-moisture-use","basename":"💧Naturally Available Moisture Use","title":"💧Naturally Available Moisture Use","plainTitle":"Naturally Available Moisture Use","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Naturally Available Moisture Use.md","cssclasses":[]},{"slug":"nutrients-transported-to-groundwater","basename":"💧Nutrients Transported to Groundwater","title":"💧Nutrients Transported to Groundwater","plainTitle":"Nutrients Transported to Groundwater","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Nutrients Transported to Groundwater.md","cssclasses":[]},{"slug":"nutrients-transported-to-surface-water","basename":"💧Nutrients Transported to Surface Water","title":"💧Nutrients Transported to Surface Water","plainTitle":"Nutrients Transported to Surface Water","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Nutrients Transported to Surface Water.md","cssclasses":[]},{"slug":"pathogens-and-chemicals-from-manure-bio-solids-or-compost-applications-transported-to-groundwater","basename":"💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater","title":"💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater","plainTitle":"Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater.md","cssclasses":[]},{"slug":"pathogens-and-chemicals-from-manure-bio-solids-or-compost-applications-transported-to-surface-water","basename":"💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water","title":"💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water","plainTitle":"Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water.md","cssclasses":[]},{"slug":"pesticides-transported-to-groundwater","basename":"💧Pesticides Transported to Groundwater","title":"💧Pesticides Transported to Groundwater","plainTitle":"Pesticides Transported to Groundwater","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Pesticides Transported to Groundwater.md","cssclasses":[]},{"slug":"pesticides-transported-to-surface-water","basename":"💧Pesticides Transported to Surface Water","title":"💧Pesticides Transported to Surface Water","plainTitle":"Pesticides Transported to Surface Water","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Pesticides Transported to Surface Water.md","cssclasses":[]},{"slug":"petroleum-heavy-metals-and-other-pollutants-transported-to-groundwater","basename":"💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater","title":"💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater","plainTitle":"Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater.md","cssclasses":[]},{"slug":"petroleum-heavy-metals-and-other-pollutants-transported-to-surface-water","basename":"💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water","title":"💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water","plainTitle":"Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water.md","cssclasses":[]},{"slug":"salts-transported-to-groundwater","basename":"💧Salts Transported to Groundwater","title":"💧Salts Transported to Groundwater","plainTitle":"Salts Transported to Groundwater","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Salts Transported to Groundwater.md","cssclasses":[]},{"slug":"salts-transported-to-surface-water","basename":"💧Salts Transported to Surface Water","title":"💧Salts Transported to Surface Water","plainTitle":"Salts Transported to Surface Water","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Salts Transported to Surface Water.md","cssclasses":[]},{"slug":"seasonal-high-water-table","basename":"💧Seasonal High Water Table","title":"💧Seasonal High Water Table","plainTitle":"Seasonal High Water Table","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Seasonal High Water Table.md","cssclasses":[]},{"slug":"sediment-transported-to-surface-water","basename":"💧Sediment Transported to Surface Water","title":"💧Sediment Transported to Surface Water","plainTitle":"Sediment Transported to Surface Water","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Sediment Transported to Surface Water.md","cssclasses":[]},{"slug":"surface-water-depletion","basename":"💧Surface Water Depletion","title":"💧Surface Water Depletion","plainTitle":"Surface Water Depletion","folder":["Explore by Threats + Resource Concerns","💧 Water Threats"],"file":"Explore by Threats + Resource Concerns/💧 Water Threats/💧Surface Water Depletion.md","cssclasses":[]},{"slug":"directory-of-funding-programs","basename":"Directory of Funding Programs","title":"Directory of Funding Programs","plainTitle":"Directory of Funding Programs","folder":["Funding Assistance"],"file":"Funding Assistance/Directory of Funding Programs.md","cssclasses":[]},{"slug":"crep-focused-priorities","basename":"CREP - Focused Priorities","title":"CREP - Focused Priorities","plainTitle":"CREP - Focused Priorities","folder":["Funding Assistance","FSA Funding Programs"],"file":"Funding Assistance/FSA Funding Programs/CREP - Focused Priorities.md","cssclasses":[]},{"slug":"crp-protecting-sensitive-land","basename":"CRP - Protecting Sensitive Land","title":"CRP - Protecting Sensitive Land","plainTitle":"CRP - Protecting Sensitive Land","folder":["Funding Assistance","FSA Funding Programs"],"file":"Funding Assistance/FSA Funding Programs/CRP - Protecting Sensitive Land.md","cssclasses":[]},{"slug":"ecp-farmland-restoration","basename":"ECP - Farmland Restoration","title":"ECP - Farmland Restoration","plainTitle":"ECP - Farmland Restoration","folder":["Funding Assistance","FSA Funding Programs"],"file":"Funding Assistance/FSA Funding Programs/ECP - Farmland Restoration.md","cssclasses":[]},{"slug":"efrp-forest-restoration","basename":"EFRP - Forest Restoration","title":"EFRP - Forest Restoration","plainTitle":"EFRP - Forest Restoration","folder":["Funding Assistance","FSA Funding Programs"],"file":"Funding Assistance/FSA Funding Programs/EFRP - Forest Restoration.md","cssclasses":[]},{"slug":"fwp-restored-wetlands","basename":"FWP - Restored Wetlands","title":"FWP - Restored Wetlands","plainTitle":"FWP - Restored Wetlands","folder":["Funding Assistance","FSA Funding Programs"],"file":"Funding Assistance/FSA Funding Programs/FWP - Restored Wetlands.md","cssclasses":[]},{"slug":"fsa-vs-nrcs","basename":"FSA vs NRCS","title":"FSA vs NRCS","plainTitle":"FSA vs NRCS","folder":["Funding Assistance"],"file":"Funding Assistance/FSA vs NRCS.md","cssclasses":[]},{"slug":"acep-easements","basename":"ACEP - Easements","title":"ACEP - Easements","plainTitle":"ACEP - Easements","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/ACEP - Easements.md","cssclasses":[]},{"slug":"ama-agricultural-producers","basename":"AMA - Agricultural Producers","title":"AMA - Agricultural Producers","plainTitle":"AMA - Agricultural Producers","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/AMA - Agricultural Producers.md","cssclasses":[]},{"slug":"cig-innovation","basename":"CIG - Innovation","title":"CIG - Innovation","plainTitle":"CIG - Innovation","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/CIG - Innovation.md","cssclasses":[]},{"slug":"csp-next-level-conservation","basename":"CSP- Next Level Conservation","title":"CSP- Next Level Conservation","plainTitle":"CSP- Next Level Conservation","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/CSP- Next Level Conservation.md","cssclasses":[]},{"slug":"eqip-cost-share-and-incentive-payments","basename":"EQIP - Cost Share and Incentive Payments","title":"EQIP - Cost Share and Incentive Payments","plainTitle":"EQIP - Cost Share and Incentive Payments","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/EQIP - Cost Share and Incentive Payments.md","cssclasses":[]},{"slug":"ewp-program-emergency-response","basename":"EWP Program - Emergency Response","title":"EWP Program - Emergency Response","plainTitle":"EWP Program - Emergency Response","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/EWP Program - Emergency Response.md","cssclasses":[]},{"slug":"hfrp-forest-protection","basename":"HFRP - Forest Protection","title":"HFRP - Forest Protection","plainTitle":"HFRP - Forest Protection","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/HFRP - Forest Protection.md","cssclasses":[]},{"slug":"rcpp-working-with-partners","basename":"RCPP - Working with Partners","title":"RCPP - Working with Partners","plainTitle":"RCPP - Working with Partners","folder":["Funding Assistance","NRCS Funding Programs"],"file":"Funding Assistance/NRCS Funding Programs/RCPP - Working with Partners.md","cssclasses":[]},{"slug":"home","basename":"Home","title":"Home","plainTitle":"Home","folder":[],"file":"Home.md","cssclasses":["no-inline","hide-title"]},{"slug":"how-to-use-this-tool","basename":"How To Use This Tool","title":"How To Use This Tool","plainTitle":"How To Use This Tool","folder":[],"file":"How To Use This Tool.md","cssclasses":[]},{"slug":"climate-change-opinion-fact-sheet","basename":"Climate Change Opinion Fact Sheet","title":"Climate Change Opinion Fact Sheet","plainTitle":"Climate Change Opinion Fact Sheet","folder":["Similar Tools","Climate Change"],"file":"Similar Tools/Climate Change/Climate Change Opinion Fact Sheet.md","cssclasses":[]},{"slug":"climate-change","basename":"Climate Change","title":"Climate Change","plainTitle":"Climate Change","folder":["Similar Tools","Climate Change"],"file":"Similar Tools/Climate Change/Climate Change.md","cssclasses":[]},{"slug":"sea-level-rise-viewer","basename":"Sea Level Rise Viewer","title":"Sea Level Rise Viewer","plainTitle":"Sea Level Rise Viewer","folder":["Similar Tools","Climate Change"],"file":"Similar Tools/Climate Change/Sea Level Rise Viewer.md","cssclasses":[]},{"slug":"coastal-conservation-tools","basename":"Coastal Conservation Tools","title":"Coastal Conservation Tools","plainTitle":"Coastal Conservation Tools","folder":["Similar Tools","Coastal Conservation"],"file":"Similar Tools/Coastal Conservation/Coastal Conservation Tools.md","cssclasses":[]},{"slug":"national-aquamapper","basename":"National AquaMapper","title":"National AquaMapper","plainTitle":"National AquaMapper","folder":["Similar Tools","Coastal Conservation"],"file":"Similar Tools/Coastal Conservation/National AquaMapper.md","cssclasses":[]},{"slug":"national-estuary-program-map","basename":"National Estuary Program Map","title":"National Estuary Program Map","plainTitle":"National Estuary Program Map","folder":["Similar Tools","Coastal Conservation"],"file":"Similar Tools/Coastal Conservation/National Estuary Program Map.md","cssclasses":[]},{"slug":"directory-of-similar-tools","basename":"Directory of Similar Tools","title":"Directory of Similar Tools","plainTitle":"Directory of Similar Tools","folder":["Similar Tools"],"file":"Similar Tools/Directory of Similar Tools.md","cssclasses":[]},{"slug":"endangered-species","basename":"Endangered Species","title":"Endangered Species","plainTitle":"Endangered Species","folder":["Similar Tools","Endangered Species"],"file":"Similar Tools/Endangered Species/Endangered Species.md","cssclasses":[]},{"slug":"map-of-life","basename":"Map Of Life","title":"Map Of Life","plainTitle":"Map Of Life","folder":["Similar Tools","Endangered Species"],"file":"Similar Tools/Endangered Species/Map Of Life.md","cssclasses":[]},{"slug":"southeastern-aquatic-biodiversity-conservation-planning-storymap","basename":"Southeastern Aquatic Biodiversity Conservation Planning Storymap","title":"Southeastern Aquatic Biodiversity Conservation Planning Storymap","plainTitle":"Southeastern Aquatic Biodiversity Conservation Planning Storymap","folder":["Similar Tools","Endangered Species"],"file":"Similar Tools/Endangered Species/Southeastern Aquatic Biodiversity Conservation Planning Storymap.md","cssclasses":[]},{"slug":"usfws-southeast-at-risk-species-finder","basename":"USFWS Southeast At Risk Species Finder","title":"USFWS Southeast At Risk Species Finder","plainTitle":"USFWS Southeast At Risk Species Finder","folder":["Similar Tools","Endangered Species"],"file":"Similar Tools/Endangered Species/USFWS Southeast At Risk Species Finder.md","cssclasses":[]},{"slug":"aquatic-barrier-inventory-and-prioritization-tool","basename":"Aquatic Barrier Inventory and Prioritization Tool","title":"Aquatic Barrier Inventory and Prioritization Tool","plainTitle":"Aquatic Barrier Inventory and Prioritization Tool","folder":["Similar Tools","Priority Conservation Areas"],"file":"Similar Tools/Priority Conservation Areas/Aquatic Barrier Inventory and Prioritization Tool.md","cssclasses":[]},{"slug":"priority-conservation-area-tools","basename":"Priority Conservation Area Tools","title":"Priority Conservation Area Tools","plainTitle":"Priority Conservation Area Tools","folder":["Similar Tools","Priority Conservation Areas"],"file":"Similar Tools/Priority Conservation Areas/Priority Conservation Area Tools.md","cssclasses":[]},{"slug":"serpas-repi","basename":"SERPAS REPI","title":"SERPAS REPI","plainTitle":"SERPAS REPI","folder":["Similar Tools","Priority Conservation Areas"],"file":"Similar Tools/Priority Conservation Areas/SERPAS REPI.md","cssclasses":[]},{"slug":"southeast-conservation-blueprint-explorer","basename":"Southeast Conservation Blueprint Explorer","title":"Southeast Conservation Blueprint Explorer","plainTitle":"Southeast Conservation Blueprint Explorer","folder":["Similar Tools","Priority Conservation Areas"],"file":"Similar Tools/Priority Conservation Areas/Southeast Conservation Blueprint Explorer.md","cssclasses":[]},{"slug":"agricultural-conservation-planning-framework-in-action-map-midwest","basename":"Agricultural Conservation Planning Framework in Action Map (Midwest)","title":"Agricultural Conservation Planning Framework in Action Map (Midwest)","plainTitle":"Agricultural Conservation Planning Framework in Action Map (Midwest)","folder":["Similar Tools","Tools for Outside SE"],"file":"Similar Tools/Tools for Outside SE/Agricultural Conservation Planning Framework in Action Map (Midwest).md","cssclasses":[]},{"slug":"aquatic-conservation-tools-outside-se","basename":"Aquatic Conservation Tools Outside SE","title":"Aquatic Conservation Tools Outside SE","plainTitle":"Aquatic Conservation Tools Outside SE","folder":["Similar Tools","Tools for Outside SE"],"file":"Similar Tools/Tools for Outside SE/Aquatic Conservation Tools Outside SE.md","cssclasses":[]},{"slug":"atlas-prioritization-framework-pacific-northwest-columbia-river-basin","basename":"Atlas Prioritization Framework (Pacific Northwest, Columbia River Basin)","title":"Atlas Prioritization Framework (Pacific Northwest, Columbia River Basin)","plainTitle":"Atlas Prioritization Framework (Pacific Northwest, Columbia River Basin)","folder":["Similar Tools","Tools for Outside SE"],"file":"Similar Tools/Tools for Outside SE/Atlas Prioritization Framework (Pacific Northwest, Columbia River Basin).md","cssclasses":[]},{"slug":"north-jersey-agricultural-conservation-planning-tool-njrcd","basename":"North Jersey Agricultural Conservation Planning Tool - NJRCD","title":"North Jersey Agricultural Conservation Planning Tool - NJRCD","plainTitle":"North Jersey Agricultural Conservation Planning Tool - NJRCD","folder":["Similar Tools","Tools for Outside SE"],"file":"Similar Tools/Tools for Outside SE/North Jersey Agricultural Conservation Planning Tool - NJRCD.md","cssclasses":[]},{"slug":"conservation-assessment-ranking-tool-cart","basename":"Conservation Assessment Ranking Tool (CART)","title":"Conservation Assessment Ranking Tool (CART)","plainTitle":"Conservation Assessment Ranking Tool (CART)","folder":["Similar Tools","USDA Info"],"file":"Similar Tools/USDA Info/Conservation Assessment Ranking Tool (CART).md","cssclasses":[]},{"slug":"conservation-concern-tools","basename":"Conservation Concern Tools","title":"Conservation Concern Tools","plainTitle":"Conservation Concern Tools","folder":["Similar Tools","USDA Info"],"file":"Similar Tools/USDA Info/Conservation Concern Tools.md","cssclasses":[]},{"slug":"information-about-usda-programs","basename":"Information about USDA Programs","title":"Information about USDA Programs","plainTitle":"Information about USDA Programs","folder":["Similar Tools","USDA Info"],"file":"Similar Tools/USDA Info/Information about USDA Programs.md","cssclasses":[]},{"slug":"freshwater-explorer","basename":"Freshwater Explorer","title":"Freshwater Explorer","plainTitle":"Freshwater Explorer","folder":["Similar Tools","Water Quality + Barriers"],"file":"Similar Tools/Water Quality + Barriers/Freshwater Explorer.md","cssclasses":[]},{"slug":"hows-my-waterway","basename":"How's My Waterway","title":"How's My Waterway","plainTitle":"How's My Waterway","folder":["Similar Tools","Water Quality + Barriers"],"file":"Similar Tools/Water Quality + Barriers/How's My Waterway.md","cssclasses":[]},{"slug":"national-water-dashboard","basename":"National Water Dashboard","title":"National Water Dashboard","plainTitle":"National Water Dashboard","folder":["Similar Tools","Water Quality + Barriers"],"file":"Similar Tools/Water Quality + Barriers/National Water Dashboard.md","cssclasses":[]},{"slug":"similar-tools-water-quality","basename":"Water Quality","title":"Water Quality","plainTitle":"Water Quality","folder":["Similar Tools","Water Quality + Barriers"],"file":"Similar Tools/Water Quality + Barriers/Water Quality.md","cssclasses":[]}]`),HT={"Screenshot 2024-04-22 at 3.55.00 PM.png":"handbook/images/screenshot-2024-04-22-at-3-55-00-pm.jpg","Screenshot 2024-04-22 at 4.13.27 PM.png":"handbook/images/screenshot-2024-04-22-at-4-13-27-pm.jpg","ConservationCoverNetworkDiagram.png":"handbook/images/conservationcovernetworkdiagram.jpg","Screenshot 2024-04-22 at 4.40.00 PM.png":"handbook/images/screenshot-2024-04-22-at-4-40-00-pm.jpg","Screenshot 2024-04-22 at 4.43.33 PM.png":"handbook/images/screenshot-2024-04-22-at-4-43-33-pm.jpg","Screenshot 2024-04-22 at 4.46.08 PM.png":"handbook/images/screenshot-2024-04-22-at-4-46-08-pm.jpg","Screenshot 2024-04-22 at 4.48.44 PM.png":"handbook/images/screenshot-2024-04-22-at-4-48-44-pm.jpg","Screenshot 2024-04-22 at 4.55.03 PM.png":"handbook/images/screenshot-2024-04-22-at-4-55-03-pm.jpg","Screenshot 2024-04-22 at 4.58.04 PM.png":"handbook/images/screenshot-2024-04-22-at-4-58-04-pm.jpg","Pond network diagram.png":"handbook/images/pond-network-diagram.jpg","Screenshot 2024-04-25 at 9.44.18 AM.png":"handbook/images/screenshot-2024-04-25-at-9-44-18-am.jpg","Screenshot 2024-04-25 at 9.50.26 AM.png":"handbook/images/screenshot-2024-04-25-at-9-50-26-am.jpg","Screenshot 2024-04-25 at 10.03.35 AM.png":"handbook/images/screenshot-2024-04-25-at-10-03-35-am.jpg","Screenshot 2024-04-25 at 10.06.47 AM.png":"handbook/images/screenshot-2024-04-25-at-10-06-47-am.jpg","Screenshot 2024-04-25 at 10.12.55 AM.png":"handbook/images/screenshot-2024-04-25-at-10-12-55-am.jpg","Screenshot 2024-04-25 at 10.18.08 AM.png":"handbook/images/screenshot-2024-04-25-at-10-18-08-am.jpg","Screenshot 2024-04-25 at 10.21.08 AM.png":"handbook/images/screenshot-2024-04-25-at-10-21-08-am.jpg","Screenshot 2024-04-25 at 10.23.05 AM.png":"handbook/images/screenshot-2024-04-25-at-10-23-05-am.jpg","Screenshot 2024-04-25 at 10.26.14 AM.png":"handbook/images/screenshot-2024-04-25-at-10-26-14-am.jpg","Screenshot 2024-04-16 at 12.21.17 PM.png":"handbook/images/screenshot-2024-04-16-at-12-21-17-pm.jpg","Screenshot 2024-04-25 at 10.29.55 AM.png":"handbook/images/screenshot-2024-04-25-at-10-29-55-am.jpg","Screenshot 2024-05-02 at 1.26.04 PM.png":"handbook/images/screenshot-2024-05-02-at-1-26-04-pm.jpg","Screenshot 2024-04-25 at 11.07.50 AM.png":"handbook/images/screenshot-2024-04-25-at-11-07-50-am.jpg","Screenshot 2024-04-25 at 11.11.09 AM.png":"handbook/images/screenshot-2024-04-25-at-11-11-09-am.jpg","Screenshot 2024-04-25 at 11.48.39 AM.png":"handbook/images/screenshot-2024-04-25-at-11-48-39-am.jpg","Screenshot 2024-04-25 at 11.51.01 AM.png":"handbook/images/screenshot-2024-04-25-at-11-51-01-am.jpg","Screenshot 2024-05-02 at 1.25.36 PM.png":"handbook/images/screenshot-2024-05-02-at-1-25-36-pm.jpg","Screenshot 2024-04-25 at 11.53.43 AM.png":"handbook/images/screenshot-2024-04-25-at-11-53-43-am.jpg","Water Well Network Diagram.png":"handbook/images/water-well-network-diagram.jpg","Screenshot 2024-04-25 at 11.58.07 AM.png":"handbook/images/screenshot-2024-04-25-at-11-58-07-am.jpg","Screenshot 2024-04-25 at 12.23.36 PM.png":"handbook/images/screenshot-2024-04-25-at-12-23-36-pm.jpg","Screenshot 2024-04-25 at 12.25.45 PM.png":"handbook/images/screenshot-2024-04-25-at-12-25-45-pm.jpg","Screenshot 2024-04-25 at 12.27.49 PM.png":"handbook/images/screenshot-2024-04-25-at-12-27-49-pm.jpg","Screenshot 2024-04-25 at 12.30.04 PM.png":"handbook/images/screenshot-2024-04-25-at-12-30-04-pm.jpg","AtAGlance_Thumbnail.png":"handbook/images/ataglance-thumbnail.png","CREP fact sheet_thumbnail.png":"handbook/images/crep-fact-sheet-thumbnail.jpg","CRP Menu Tool_thumbnail.png":"handbook/images/crp-menu-tool-thumbnail.jpg","ECP Factsheet_thumbnail.png":"handbook/images/ecp-factsheet-thumbnail.jpg","EFRP factsheet_thumbnail.png":"handbook/images/efrp-factsheet-thumbnail.jpg","FWP webpage_thumbnail.png":"handbook/images/fwp-webpage-thumbnail.jpg","Thumbnail_ACEP.png":"handbook/images/thumbnail-acep.png","AMA_thumbnail.png":"handbook/images/ama-thumbnail.jpg","NRCS CIG webpage_thumbnail.png":"handbook/images/nrcs-cig-webpage-thumbnail.jpg","CIG website_thumbnail.png":"handbook/images/cig-website-thumbnail.jpg","CSP_thumbnail.png":"handbook/images/csp-thumbnail.jpg","EQIP_Thumbnail_Small.png":"handbook/images/eqip-thumbnail-small.png","EWP Sponsor Resource_thumbnail.png":"handbook/images/ewp-sponsor-resource-thumbnail.jpg","HFRP_thumbnail.png":"handbook/images/hfrp-thumbnail.jpg","RCPP Factsheet.png":"handbook/images/rcpp-factsheet.jpg","Thumbnail_RCPPContractorList.png":"handbook/images/thumbnail-rcppcontractorlist.png","11.15.2024_HandbookObsidianCoverPageImage5.jpg":"handbook/images/11-15-2024-handbookobsidiancoverpageimage5.jpg","reduced erosion benefit.png":"handbook/images/reduced-erosion-benefit.png","sediment to surface water threat.png":"handbook/images/sediment-to-surface-water-threat.jpg","CP 391 page.png":"handbook/images/cp-391-page.jpg","Screenshot 2024-04-17 at 12.55.25 PM.png":"handbook/images/screenshot-2024-04-17-at-12-55-25-pm.png","Climate Opinion Screenshot.png":"handbook/images/climate-opinion-screenshot.jpg","sea level rise viewer screenshot.png":"handbook/images/sea-level-rise-viewer-screenshot.jpg","National AquaMapper screenshot.png":"handbook/images/national-aquamapper-screenshot.jpg","national estuary screenshot.png":"handbook/images/national-estuary-screenshot.jpg","Map of Life Screenshot.png":"handbook/images/map-of-life-screenshot.jpg","Southeast Aquatic Biodiversity Screenshot.png":"handbook/images/southeast-aquatic-biodiversity-screenshot.jpg","SpeciesFinder.png":"handbook/images/speciesfinder.jpg","Aquatic Barrier Screenshot.png":"handbook/images/aquatic-barrier-screenshot.jpg","REPI_Screenshot.png":"handbook/images/repi-screenshot.jpg","Southeast conservation blueprint screenshot.png":"handbook/images/southeast-conservation-blueprint-screenshot.jpg","ACPF.png":"handbook/images/acpf.jpg","atlas prioritization screenshot.png":"handbook/images/atlas-prioritization-screenshot.jpg","North Jersey Ag screenshot.png":"handbook/images/north-jersey-ag-screenshot.jpg","CART screenshot.png":"handbook/images/cart-screenshot.jpg","conservation concerns tool screenshot.png":"handbook/images/conservation-concerns-tool-screenshot.jpg","freshwater xplorer screenshot.png":"handbook/images/freshwater-xplorer-screenshot.jpg","hows my waterway screenshot.png":"handbook/images/hows-my-waterway-screenshot.jpg","national water dashboard screenshot.png":"handbook/images/national-water-dashboard-screenshot.jpg"},dv={pages:kT,images:HT},zT=Object.assign({"../../content/handbook/Common Acronyms and Vocabulary.md":uS,"../../content/handbook/Explore by Benefits/🌾Producer Benefits/🌾Economic.md":dS,"../../content/handbook/Explore by Benefits/🌾Producer Benefits/🌾Livestock Health and Production.md":fS,"../../content/handbook/Explore by Benefits/🌾Producer Benefits/🌾Plant Productivity.md":hS,"../../content/handbook/Explore by Benefits/🌾Producer Benefits/🌾Reduced Erosion.md":mS,"../../content/handbook/Explore by Benefits/🌾Producer Benefits/🌾Soil Health.md":pS,"../../content/handbook/Explore by Benefits/🌾Producer Benefits/🌾Water Quantity and Availability.md":gS,"../../content/handbook/Explore by Benefits/🍃Climate Benefits/🍃 Carbon Sequestration.md":vS,"../../content/handbook/Explore by Benefits/🍃Climate Benefits/🍃 Climate Resilience and Adaptation.md":bS,"../../content/handbook/Explore by Benefits/🍃Climate Benefits/🍃 GHG Emissions.md":yS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Aquatic Habitat.md":CS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Biodiversity.md":SS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Riparian Condition.md":wS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Streambank and Shoreline Condition.md":PS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Terrestrial Habitat.md":TS,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Water Quality.md":ES,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Wetlands Conservation.md":_S,"../../content/handbook/Explore by Benefits/🦪 Wildlife Benefits/🦪 Wildlife and Ecosystem Connectivity.md":RS,"../../content/handbook/Explore by Conservation Practices/CP 314 - Brush Management.md":xS,"../../content/handbook/Explore by Conservation Practices/CP 315 - Herbaceous Weed Treatment.md":AS,"../../content/handbook/Explore by Conservation Practices/CP 327 - Conservation Cover.md":MS,"../../content/handbook/Explore by Conservation Practices/CP 328 - Conservation Crop Rotation.md":NS,"../../content/handbook/Explore by Conservation Practices/CP 329 - Residue and Tillage Mgmt (No Till).md":kS,"../../content/handbook/Explore by Conservation Practices/CP 340 - Cover Crop.md":HS,"../../content/handbook/Explore by Conservation Practices/CP 342 - Critical Area Planting.md":zS,"../../content/handbook/Explore by Conservation Practices/CP 345 - Residue and Tillage Mgmt (Reduced Till).md":OS,"../../content/handbook/Explore by Conservation Practices/CP 356 - Dike and Levee.md":DS,"../../content/handbook/Explore by Conservation Practices/CP 378 - Pond.md":WS,"../../content/handbook/Explore by Conservation Practices/CP 382 - Fence.md":qS,"../../content/handbook/Explore by Conservation Practices/CP 390 - Riparian Herbaceous Cover.md":BS,"../../content/handbook/Explore by Conservation Practices/CP 391 - Riparian Forest buffer.md":jS,"../../content/handbook/Explore by Conservation Practices/CP 395 - Stream Habitat Improvement and Management.md":GS,"../../content/handbook/Explore by Conservation Practices/CP 396 - Aquatic Organism Passage.md":IS,"../../content/handbook/Explore by Conservation Practices/CP 410 - Grade Stabilization Structure.md":LS,"../../content/handbook/Explore by Conservation Practices/CP 420 - Wildlife Habitat Planting.md":US,"../../content/handbook/Explore by Conservation Practices/CP 472 - Access Control.md":FS,"../../content/handbook/Explore by Conservation Practices/CP 512 - Pasture and Hay Planting.md":QS,"../../content/handbook/Explore by Conservation Practices/CP 516 - Livestock Pipeline.md":YS,"../../content/handbook/Explore by Conservation Practices/CP 528 - Prescribed Grazing.md":VS,"../../content/handbook/Explore by Conservation Practices/CP 533 - Pumping Plant.md":XS,"../../content/handbook/Explore by Conservation Practices/CP 550 - Range Planting.md":ZS,"../../content/handbook/Explore by Conservation Practices/CP 561 - Heavy Use Area Protection.md":KS,"../../content/handbook/Explore by Conservation Practices/CP 578 - Stream Crossing.md":JS,"../../content/handbook/Explore by Conservation Practices/CP 580 - Streambank and Shoreline Protection.md":$S,"../../content/handbook/Explore by Conservation Practices/CP 584 - Channel Bed Stablilization.md":ew,"../../content/handbook/Explore by Conservation Practices/CP 587 - Structure for Water Control.md":nw,"../../content/handbook/Explore by Conservation Practices/CP 590 - Nutrient Management.md":tw,"../../content/handbook/Explore by Conservation Practices/CP 595 - Pest Management Conservation System.md":aw,"../../content/handbook/Explore by Conservation Practices/CP 612 - Tree and Shrub Establishment.md":iw,"../../content/handbook/Explore by Conservation Practices/CP 614 - Watering Facility.md":rw,"../../content/handbook/Explore by Conservation Practices/CP 642 - Water Well.md":ow,"../../content/handbook/Explore by Conservation Practices/CP 643 - Restoration of Rare and Declining Habitats.md":sw,"../../content/handbook/Explore by Conservation Practices/CP 644 - Wetland Wildlife Habitat Management.md":lw,"../../content/handbook/Explore by Conservation Practices/CP 646 - Shallow Water Development and Management.md":cw,"../../content/handbook/Explore by Conservation Practices/CP 649 - Structures for Wildlife.md":uw,"../../content/handbook/Explore by Conservation Practices/CP 657 - Wetland Restoration.md":dw,"../../content/handbook/Explore by Conservation Practices/CP 658 - Wetland Creation.md":fw,"../../content/handbook/Explore by Conservation Practices/CP 659 - Wetland Enhancement.md":hw,"../../content/handbook/Explore by Threats + Resource Concerns/⚠️ Wildfire/⚠️ Wildfire Hazard from Biomass Accumulation.md":mw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Airborne Reactive Nitrogen.md":pw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Greenhouse Gasses (GHGs).md":gw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Ozone Precursors.md":vw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Emissions of Particulate Matter (PM) and PM Precursors.md":bw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Energy Efficiency of Equipment and Facilities.md":yw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Energy Efficiency of Farming & Ranching Practices and Field Operations.md":Cw,"../../content/handbook/Explore by Threats + Resource Concerns/⚡️ Air Quality & Energy Efficiency/⚡️Objectionable Odor.md":Sw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Aggregate Instability.md":ww,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Bank Erosion from Streams, Shorelines or Water Conveyance Channels.md":Pw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Classic Gully Erosion.md":Tw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Compaction.md":Ew,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Concentration of Salts or Other Chemicals.md":_w,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Ephemeral Gully Erosion.md":Rw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Organic Matter Depletion.md":xw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Ponding and Flooding.md":Aw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Seeps.md":Mw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Sheet and Rill Erosion.md":Nw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Soil Organism Habitat Degradation.md":kw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Subsidence.md":Hw,"../../content/handbook/Explore by Threats + Resource Concerns/🏞️ Soil & Land Threats/🏞️ Wind Erosion.md":zw,"../../content/handbook/Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Feed and Forage Imbalance.md":Ow,"../../content/handbook/Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Inadequate Livestock Shelter.md":Dw,"../../content/handbook/Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Inadequate Livestock Water Quantity, Quality and Distribution.md":Ww,"../../content/handbook/Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Plant Pest Pressure.md":qw,"../../content/handbook/Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Plant Productivity and Health.md":Bw,"../../content/handbook/Explore by Threats + Resource Concerns/🐄 Plants & Livestock Threats/🐄 Plant Structure and Composition.md":jw,"../../content/handbook/Explore by Threats + Resource Concerns/🐾 Wildlife Threats/🐾 Aquatic Habitat for Fish and Other Organisms.md":Gw,"../../content/handbook/Explore by Threats + Resource Concerns/🐾 Wildlife Threats/🐾 Terrestrial Habitat for Wildlife and Invertebrates.md":Iw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Drifted Snow.md":Lw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Elevated Water Temperature.md":Uw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Groundwater Depletion.md":Fw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Inefficient Irrigation Water use.md":Qw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Naturally Available Moisture Use.md":Yw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Nutrients Transported to Groundwater.md":Vw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Nutrients Transported to Surface Water.md":Xw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Groundwater.md":Zw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Pathogens and Chemicals from Manure, Bio-solids or Compost Applications Transported to Surface Water.md":Kw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Pesticides Transported to Groundwater.md":Jw,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Pesticides Transported to Surface Water.md":$w,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Petroleum, Heavy Metals and Other Pollutants Transported to Groundwater.md":eP,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Petroleum, Heavy Metals and Other Pollutants Transported to Surface Water.md":nP,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Salts Transported to Groundwater.md":tP,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Salts Transported to Surface Water.md":aP,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Seasonal High Water Table.md":iP,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Sediment Transported to Surface Water.md":rP,"../../content/handbook/Explore by Threats + Resource Concerns/💧 Water Threats/💧Surface Water Depletion.md":oP,"../../content/handbook/Funding Assistance/Directory of Funding Programs.md":sP,"../../content/handbook/Funding Assistance/FSA Funding Programs/CREP - Focused Priorities.md":lP,"../../content/handbook/Funding Assistance/FSA Funding Programs/CRP - Protecting Sensitive Land.md":cP,"../../content/handbook/Funding Assistance/FSA Funding Programs/ECP - Farmland Restoration.md":uP,"../../content/handbook/Funding Assistance/FSA Funding Programs/EFRP - Forest Restoration.md":dP,"../../content/handbook/Funding Assistance/FSA Funding Programs/FWP - Restored Wetlands.md":fP,"../../content/handbook/Funding Assistance/FSA vs NRCS.md":hP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/ACEP - Easements.md":mP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/AMA - Agricultural Producers.md":pP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/CIG - Innovation.md":gP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/CSP- Next Level Conservation.md":vP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/EQIP - Cost Share and Incentive Payments.md":bP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/EWP Program - Emergency Response.md":yP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/HFRP - Forest Protection.md":CP,"../../content/handbook/Funding Assistance/NRCS Funding Programs/RCPP - Working with Partners.md":SP,"../../content/handbook/Home.md":wP,"../../content/handbook/How To Use This Tool.md":PP,"../../content/handbook/Similar Tools/Climate Change/Climate Change Opinion Fact Sheet.md":TP,"../../content/handbook/Similar Tools/Climate Change/Climate Change.md":EP,"../../content/handbook/Similar Tools/Climate Change/Sea Level Rise Viewer.md":_P,"../../content/handbook/Similar Tools/Coastal Conservation/Coastal Conservation Tools.md":RP,"../../content/handbook/Similar Tools/Coastal Conservation/National AquaMapper.md":xP,"../../content/handbook/Similar Tools/Coastal Conservation/National Estuary Program Map.md":AP,"../../content/handbook/Similar Tools/Directory of Similar Tools.md":MP,"../../content/handbook/Similar Tools/Endangered Species/Endangered Species.md":NP,"../../content/handbook/Similar Tools/Endangered Species/Map Of Life.md":kP,"../../content/handbook/Similar Tools/Endangered Species/Southeastern Aquatic Biodiversity Conservation Planning Storymap.md":HP,"../../content/handbook/Similar Tools/Endangered Species/USFWS Southeast At Risk Species Finder.md":zP,"../../content/handbook/Similar Tools/Priority Conservation Areas/Aquatic Barrier Inventory and Prioritization Tool.md":OP,"../../content/handbook/Similar Tools/Priority Conservation Areas/Priority Conservation Area Tools.md":DP,"../../content/handbook/Similar Tools/Priority Conservation Areas/SERPAS REPI.md":WP,"../../content/handbook/Similar Tools/Priority Conservation Areas/Southeast Conservation Blueprint Explorer.md":qP,"../../content/handbook/Similar Tools/Tools for Outside SE/Agricultural Conservation Planning Framework in Action Map (Midwest).md":BP,"../../content/handbook/Similar Tools/Tools for Outside SE/Aquatic Conservation Tools Outside SE.md":jP,"../../content/handbook/Similar Tools/Tools for Outside SE/Atlas Prioritization Framework (Pacific Northwest, Columbia River Basin).md":GP,"../../content/handbook/Similar Tools/Tools for Outside SE/North Jersey Agricultural Conservation Planning Tool - NJRCD.md":IP,"../../content/handbook/Similar Tools/USDA Info/Conservation Assessment Ranking Tool (CART).md":LP,"../../content/handbook/Similar Tools/USDA Info/Conservation Concern Tools.md":UP,"../../content/handbook/Similar Tools/USDA Info/Information about USDA Programs.md":FP,"../../content/handbook/Similar Tools/Water Quality + Barriers/Freshwater Explorer.md":QP,"../../content/handbook/Similar Tools/Water Quality + Barriers/How's My Waterway.md":YP,"../../content/handbook/Similar Tools/Water Quality + Barriers/National Water Dashboard.md":VP,"../../content/handbook/Similar Tools/Water Quality + Barriers/Water Quality.md":XP}),fv={};for(const[i,s]of Object.entries(zT))fv[i.replace(/^\.\.\/\.\.\/content\/handbook\//,"")]=s;const Jr=dv.pages.map(i=>({...i,raw:fv[i.file]??""})),Xa=Object.fromEntries(Jr.map(i=>[i.slug,i])),Ag=Object.fromEntries(Jr.map(i=>[i.basename.toLowerCase(),i])),OT=Object.fromEntries(Object.entries(dv.images).map(([i,s])=>[i.toLowerCase(),s])),DT=["Home","How To Use This Tool","Explore by Benefits","Explore by Threats + Resource Concerns","Explore by Conservation Practices","Funding Assistance","Similar Tools","Common Acronyms and Vocabulary"];function Bu(i){if(!i)return null;const s=i.trim().toLowerCase();return Ag[s]||Ag[s.replace(/\.md$/,"")]||null}const Ta=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function hv(i){return i.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/,"")}function WT(i,s){return i=hv(i),i=i.replace(/^[ \t]*#{0,6}[ \t]*!\[\[([^\]|#]+)\]\][ \t]*$/gm,(c,l)=>{const u=Bu(l);return u?s>=2?`<div class="transclude"><div class="tt"><a href="${ze("/handbook/"+u.slug)}">${Ta(u.title)}</a></div></div>`:`
<div class="transclude"><div class="tt"><a href="${ze("/handbook/"+u.slug)}">${Ta(u.title)}</a></div><div class="md">${mv(u.raw,s+1)}</div></div>
`:c}),i=i.replace(/!\[\[([^\]]+?)\]\]/g,(c,l)=>{const[u,...f]=l.split("|"),h=u.trim(),g=h.split("/").pop(),v=OT[g.toLowerCase()];if(v){const E=parseInt(f.join("|"),10);return`<img src="${wn}${v}" alt="${Ta(g)}"${Number.isFinite(E)?` width="${E}"`:""}>`}const b=Bu(h);return b?`<a class="wikilink" href="${ze("/handbook/"+b.slug)}">${Ta(b.title)}</a>`:`<span class="wikilink missing" title="Attachment not found">${Ta(h)}</span>`}),i=i.replace(/\[\[([^\]]+?)\]\]/g,(c,l)=>{const[u,f]=l.split("|"),h=u.split("#")[0].trim(),g=(f??u).trim(),v=Bu(h);return v?`<a class="wikilink" href="${ze("/handbook/"+v.slug)}">${Ta(g)}</a>`:`<span class="wikilink missing" title="No page named “${Ta(h)}”">${Ta(g)}</span>`}),i=i.replace(/(^|[\s(])#([A-Za-z][\w-]*)/gm,'$1<span class="tag">#$2</span>'),i}function mv(i,s=0){return Ie.parse(WT(i,s),{gfm:!0,breaks:!0,async:!1})}function qT(i){return mv(i.raw,0)}function pv(i){if(!i)return"";const s=hv(i.raw);let c=/Practice Definition[^\n]*\n+#{1,6}\s*([^\n]+)/i.exec(s);return c?c[1].replace(/\*\*/g,"").trim():(c=/#{1,6}\s*\**Definition:?\**\s*\n+([^\n]+)/i.exec(s),c?c[1].replace(/\*\*/g,"").trim():"")}function BT(){const i={name:"",pages:[],folders:new Map};for(const f of Jr){let h=i;for(const g of f.folder)h.folders.has(g)||h.folders.set(g,{name:g,pages:[],folders:new Map}),h=h.folders.get(g);h.pages.push(f)}const s=(f,h)=>f.plainTitle.localeCompare(h.plainTitle,"en",{numeric:!0}),c=f=>({name:f.name,pages:f.pages.sort(s),folders:[...f.folders.values()].map(c).sort((h,g)=>h.name.localeCompare(g.name,"en"))}),l=c(i),u=f=>{const h=DT.indexOf(f);return h<0?99:h};return l.pages.sort((f,h)=>u(f.basename)-u(h.basename)),l.folders.sort((f,h)=>u(f.name)-u(h.name)),l}function jT(i){const s=i.trim().toLowerCase();return s?Jr.filter(c=>c.plainTitle.toLowerCase().includes(s)).slice(0,40):[]}const gv=i=>i?.folder?.[0]||"",nd=i=>gv(i)==="Explore by Conservation Practices",GT=i=>gv(i)==="Explore by Threats + Resource Concerns",vv=i=>nd(i)&&/^CP (\d+)/.exec(i.basename)?.[1]||null,bv={396:"circle-aquatic-organism-passage.png",327:"circle-conservation-cover.png",382:"circle-fence.png",329:"circle-low-till.png",345:"circle-low-till.png",391:"circle-riparian-buffer.png",580:"circle-streambank-protection.png",657:"circle-wetland-restoration.png"},IT={"acep-easements":"circle-wetland-reserve-easement.png"};function LT(i){const s=vv(i),c=s&&bv[s]||IT[i?.slug];return c?`${wn}art/${c}`:null}function UT(i){const s=bv[i];return s?`${wn}art/${s}`:null}const FT=[{n:1,path:"/planner",label:"About you"},{n:2,path:"/planner/concerns",label:"Resource concerns"},{n:3,path:"/planner/results",label:"Conservation practices"}];function td({current:i,query:s,reachable:c}){return p.jsx("ol",{className:"stepper","aria-label":"Planner steps",children:FT.map(l=>{const u=l.n===i?"current":l.n<i?"done":"todo",f=l.n!==i&&c(l.n),h=p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"dot",children:u==="done"?"✓":l.n}),p.jsxs("span",{className:"lbl",children:[p.jsxs("span",{className:"k",children:["Step ",l.n]}),l.label]})]});return p.jsx("li",{className:u,"aria-current":u==="current"?"step":void 0,children:f?p.jsx("a",{href:ze(l.path,s),children:h}):p.jsx("span",{className:"static",children:h})},l.n)})})}const ju=["state","county","organization"],Gu={state:"State is required.",county:"County is required.",organization:"Organization is required."};function Mg({route:i,step:s}){const[c,l]=pe.useState(null),u=pe.useMemo(()=>{const S=Vg(i.query);return S.concerns.length||Object.values(S.form).some(Boolean)?S:Zg()||S},[i.query]),[f,h]=pe.useState(u.concerns),[g,v]=pe.useState(u.form),[b,E]=pe.useState({}),[y,_]=pe.useState(null),q=pe.useRef(null);pe.useEffect(()=>{ud().then(l)},[]),pe.useEffect(()=>{fd({concerns:f,form:g})},[f,g]),pe.useEffect(()=>{h(u.concerns),v(u.form)},[u]);const B=dd(g);if(pe.useEffect(()=>{s===2&&!B&&ks("/planner",Yt(g,f))},[s]),pe.useEffect(()=>{q.current?.focus({preventScroll:!0})},[s]),pe.useEffect(()=>{if(!y)return;const S=G=>{G.target.closest(".info-wrap")||_(null)},H=G=>{G.key==="Escape"&&_(null)};return document.addEventListener("click",S),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",S),document.removeEventListener("keydown",H)}},[y]),!c)return p.jsxs("div",{className:"loading",children:[p.jsx("span",{className:"spinner"}),"Loading planner data…"]});const ie=Yt(g,f),se=S=>S===1||S===2&&B||S===3&&B&&f.length>0,be=S=>E(H=>({...H,[S]:!g[S]})),V=S=>H=>{const G=H.target.value;v(z=>({...z,[S]:G})),ju.includes(S)&&E(z=>({...z,[S]:!G}))},ce=S=>b[S]?"is-invalid":!b[S]&&g[S]&&ju.includes(S)?"is-valid":"",re=()=>{if(!B){E(Object.fromEntries(ju.map(S=>[S,!g[S]]))),document.querySelector(".field .is-invalid")?.focus();return}ks("/planner/concerns",ie)},Se=()=>{v(Object.fromEntries(Ks.map(S=>[S,""]))),h([]),E({}),_(null),ks("/planner")},ue=S=>h(H=>H.includes(S)?H.filter(G=>G!==S):[...H,S]),L=S=>{const H=c.concernsByCategory[S],G=H.every(z=>f.includes(z));h(z=>G?z.filter(te=>!H.includes(te)):[...z,...H.filter(te=>!z.includes(te))])},T=B?ze("/planner/results",ie):"#";return p.jsxs(p.Fragment,{children:[p.jsxs("section",{className:"section",style:{paddingTop:6},children:[p.jsxs("div",{className:"hero sand",style:{minHeight:170},children:[p.jsx("div",{className:"deco",style:{right:-40,top:-40,width:240,height:120,background:"var(--lmoss)",borderRadius:"0 0 240px 240px"}}),p.jsx("img",{className:"deco art",src:`${wn}art/bog-turtle.jpg`,alt:"Bog Turtle",style:{right:"-3%",top:"-8%",width:"min(36%,380px)",transform:"rotate(8deg)"}}),p.jsxs("div",{className:"copy",style:{gap:10},children:[p.jsx("div",{className:"eyebrow",children:"AquaCorridors Planner"}),p.jsx("h1",{ref:q,tabIndex:-1,style:{fontSize:"clamp(26px,4vw,42px)",outline:"none"},children:s===1?"Tell us about your conservation interests":"Which resource concerns apply to your land?"})]})]}),p.jsx(td,{current:s,query:ie,reachable:se})]}),s===1&&p.jsx("form",{className:"section",style:{paddingTop:20},onSubmit:S=>{S.preventDefault(),re()},noValidate:!0,children:p.jsxs("div",{className:"panel lmoss",style:{maxWidth:760},children:[p.jsx("div",{className:"ptitle",children:"About you"}),p.jsxs("div",{className:"form-grid",children:[p.jsxs("label",{className:"field",children:[p.jsx("span",{className:"label",children:"Name"}),p.jsx("input",{value:g.name,onChange:V("name"),autoComplete:"name",id:"name"})]}),p.jsxs("label",{className:"field",children:[p.jsxs("span",{className:"label",children:["State ",p.jsx("span",{className:"req","aria-hidden":"true",children:"*"})]}),p.jsxs("select",{id:"state",value:g.state,onChange:V("state"),onBlur:()=>be("state"),className:ce("state"),required:!0,"aria-required":"true","aria-invalid":!!b.state,children:[p.jsx("option",{value:"",disabled:!0,children:"Select your state"}),rS.map(([S,H])=>p.jsx("option",{value:S,children:H},S))]}),b.state&&p.jsx("span",{className:"invalid-feedback",role:"alert",children:Gu.state})]}),p.jsxs("label",{className:"field",children:[p.jsxs("span",{className:"label",children:["County ",p.jsx("span",{className:"req","aria-hidden":"true",children:"*"})]}),p.jsx("input",{id:"county",value:g.county,onChange:V("county"),onBlur:()=>be("county"),className:ce("county"),required:!0,"aria-required":"true","aria-invalid":!!b.county}),b.county&&p.jsx("span",{className:"invalid-feedback",role:"alert",children:Gu.county})]}),p.jsxs("label",{className:"field",children:[p.jsxs("span",{className:"label",children:["Organization ",p.jsx("span",{className:"req","aria-hidden":"true",children:"*"})]}),p.jsx("input",{id:"organization",value:g.organization,onChange:V("organization"),onBlur:()=>be("organization"),className:ce("organization"),required:!0,"aria-required":"true","aria-invalid":!!b.organization,autoComplete:"organization"}),b.organization&&p.jsx("span",{className:"invalid-feedback",role:"alert",children:Gu.organization})]}),p.jsxs("label",{className:"field",children:[p.jsx("span",{className:"label",children:"Role"}),p.jsxs("select",{id:"role",value:g.role,onChange:V("role"),"aria-label":"role",children:[p.jsx("option",{value:"",disabled:!0,children:"Select your role"}),p.jsx("option",{value:"landowner",children:"Landowner"}),p.jsx("option",{value:"biologist",children:"Biologist"}),p.jsx("option",{value:"other",children:"Other"})]})]})]}),p.jsxs("div",{className:"between",style:{marginTop:6},children:[p.jsxs("span",{className:"small muted",children:[p.jsx("span",{className:"req",children:"*"})," required",B?"":" · Please fill in all required fields to continue."]}),p.jsxs("div",{className:"cluster",children:[(f.length>0||Object.values(g).some(Boolean))&&p.jsx("button",{className:"pill sm",type:"button",onClick:Se,children:"Reset"}),p.jsx("button",{className:"pill river",type:"submit","aria-disabled":!B,children:"Next: resource concerns →"})]})]})]})}),s===2&&p.jsxs("form",{className:"section",style:{paddingTop:20},onSubmit:S=>S.preventDefault(),noValidate:!0,children:[p.jsxs("div",{className:"between",style:{marginBottom:12},children:[p.jsxs("div",{children:[p.jsx("div",{className:"ptitle",style:{color:"var(--deep)",fontSize:20,fontWeight:600,letterSpacing:"-.02em"},children:"Your resource concerns"}),p.jsxs("div",{className:"small muted",children:[f.length," selected · tick a category heading to select all of it · tap ",p.jsx("span",{className:"chip mono",style:{padding:"0 7px"},children:"i"})," for a definition and the Handbook page"]})]}),p.jsxs("div",{className:"cluster",children:[p.jsx("button",{className:"pill sm",type:"button",onClick:()=>h([]),disabled:!f.length,children:"Clear selection"}),p.jsx("a",{className:`pill river ${B?"":"disabled"}`,"aria-disabled":!B,href:T,children:"Explore conservation practices →"})]})]}),p.jsx("div",{className:"masonry",children:Object.entries(c.concernsByCategory).map(([S,H])=>{const G=H.filter(z=>f.includes(z)).length;return p.jsxs("div",{className:"cat",children:[p.jsxs("label",{className:"head",children:[p.jsx(QT,{id:S+"-checkbox",checked:G===H.length,indeterminate:G>0&&G<H.length,onChange:()=>L(S)}),p.jsx("b",{children:S}),p.jsxs("span",{className:"n chip mono",style:{padding:"2px 8px"},children:[G,"/",H.length]})]}),H.map(z=>{const te=At.concerns[z],we=f.includes(z),Ce=y===z,I=`pop-${te||z.replace(/\W+/g,"-")}`;return p.jsxs("div",{className:`check-row ${we?"on":""}`,children:[p.jsxs("label",{className:"check",children:[p.jsx("input",{type:"checkbox",checked:we,onChange:()=>ue(z),value:z}),p.jsx("span",{className:"txt",children:z})]}),p.jsxs("div",{className:`info-wrap ${Ce?"open":""}`,onMouseLeave:()=>{Ce&&_(null)},children:[p.jsx("button",{type:"button",className:"info","aria-expanded":Ce,"aria-controls":I,"aria-label":`About ${z}`,onClick:()=>_(Ce?null:z),onKeyDown:U=>{U.key==="Escape"&&(_(null),U.currentTarget.blur())},children:"i"}),p.jsxs("div",{className:"pop",id:I,role:"tooltip",children:[p.jsx("div",{children:c.concernDescriptions[z]||pv(Xa[te])||"No definition available."}),p.jsxs("div",{className:"between",children:[p.jsx("span",{className:"src",children:c.concernDescriptions[z]?"NRCS resource concern definition":"From the Handbook"}),te&&p.jsx("a",{className:"pill xs sand",href:ze("/handbook/"+te),children:"Read in the Handbook →"})]})]})]})]},z)})]},S)})}),p.jsxs("div",{className:"between",style:{marginTop:10},children:[p.jsx("a",{className:"pill sand",href:ze("/planner",ie),children:"← Back: about you"}),p.jsxs("div",{className:"stack",style:{gap:6,alignItems:"flex-end"},children:[p.jsx("a",{className:`pill river ${B?"":"disabled"}`,"aria-disabled":!B,href:T,children:"Explore conservation practices →"}),!B&&p.jsx("span",{className:"small muted",children:"Please fill in all required fields to continue."}),B&&!f.length&&p.jsx("span",{className:"small muted",children:"No concerns selected yet — the results will be empty."})]})]})]})]})}function QT({indeterminate:i,...s}){const c=pe.useRef(null);return pe.useEffect(()=>{c.current&&(c.current.indeterminate=!!i)},[i]),p.jsx("input",{ref:c,type:"checkbox",...s})}var ad="http://www.w3.org/1999/xhtml";const Ng={svg:"http://www.w3.org/2000/svg",xhtml:ad,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function yv(i){var s=i+="",c=s.indexOf(":");return c>=0&&(s=i.slice(0,c))!=="xmlns"&&(i=i.slice(c+1)),Ng.hasOwnProperty(s)?{space:Ng[s],local:i}:i}function YT(i){return function(){var s=this.ownerDocument,c=this.namespaceURI;return c===ad&&s.documentElement.namespaceURI===ad?s.createElement(i):s.createElementNS(c,i)}}function VT(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function Cv(i){var s=yv(i);return(s.local?VT:YT)(s)}function XT(){}function Sv(i){return i==null?XT:function(){return this.querySelector(i)}}function ZT(i){typeof i!="function"&&(i=Sv(i));for(var s=this._groups,c=s.length,l=new Array(c),u=0;u<c;++u)for(var f=s[u],h=f.length,g=l[u]=new Array(h),v,b,E=0;E<h;++E)(v=f[E])&&(b=i.call(v,v.__data__,E,f))&&("__data__"in v&&(b.__data__=v.__data__),g[E]=b);return new st(l,this._parents)}function KT(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function JT(){return[]}function $T(i){return i==null?JT:function(){return this.querySelectorAll(i)}}function e1(i){return function(){return KT(i.apply(this,arguments))}}function n1(i){typeof i=="function"?i=e1(i):i=$T(i);for(var s=this._groups,c=s.length,l=[],u=[],f=0;f<c;++f)for(var h=s[f],g=h.length,v,b=0;b<g;++b)(v=h[b])&&(l.push(i.call(v,v.__data__,b,h)),u.push(v));return new st(l,u)}function t1(i){return function(){return this.matches(i)}}function wv(i){return function(s){return s.matches(i)}}var a1=Array.prototype.find;function i1(i){return function(){return a1.call(this.children,i)}}function r1(){return this.firstElementChild}function o1(i){return this.select(i==null?r1:i1(typeof i=="function"?i:wv(i)))}var s1=Array.prototype.filter;function l1(){return Array.from(this.children)}function c1(i){return function(){return s1.call(this.children,i)}}function u1(i){return this.selectAll(i==null?l1:c1(typeof i=="function"?i:wv(i)))}function d1(i){typeof i!="function"&&(i=t1(i));for(var s=this._groups,c=s.length,l=new Array(c),u=0;u<c;++u)for(var f=s[u],h=f.length,g=l[u]=[],v,b=0;b<h;++b)(v=f[b])&&i.call(v,v.__data__,b,f)&&g.push(v);return new st(l,this._parents)}function Pv(i){return new Array(i.length)}function f1(){return new st(this._enter||this._groups.map(Pv),this._parents)}function Zs(i,s){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=s}Zs.prototype={constructor:Zs,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,s){return this._parent.insertBefore(i,s)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function h1(i){return function(){return i}}function m1(i,s,c,l,u,f){for(var h=0,g,v=s.length,b=f.length;h<b;++h)(g=s[h])?(g.__data__=f[h],l[h]=g):c[h]=new Zs(i,f[h]);for(;h<v;++h)(g=s[h])&&(u[h]=g)}function p1(i,s,c,l,u,f,h){var g,v,b=new Map,E=s.length,y=f.length,_=new Array(E),q;for(g=0;g<E;++g)(v=s[g])&&(_[g]=q=h.call(v,v.__data__,g,s)+"",b.has(q)?u[g]=v:b.set(q,v));for(g=0;g<y;++g)q=h.call(i,f[g],g,f)+"",(v=b.get(q))?(l[g]=v,v.__data__=f[g],b.delete(q)):c[g]=new Zs(i,f[g]);for(g=0;g<E;++g)(v=s[g])&&b.get(_[g])===v&&(u[g]=v)}function g1(i){return i.__data__}function v1(i,s){if(!arguments.length)return Array.from(this,g1);var c=s?p1:m1,l=this._parents,u=this._groups;typeof i!="function"&&(i=h1(i));for(var f=u.length,h=new Array(f),g=new Array(f),v=new Array(f),b=0;b<f;++b){var E=l[b],y=u[b],_=y.length,q=b1(i.call(E,E&&E.__data__,b,l)),B=q.length,ie=g[b]=new Array(B),se=h[b]=new Array(B),be=v[b]=new Array(_);c(E,y,ie,se,be,q,s);for(var V=0,ce=0,re,Se;V<B;++V)if(re=ie[V]){for(V>=ce&&(ce=V+1);!(Se=se[ce])&&++ce<B;);re._next=Se||null}}return h=new st(h,l),h._enter=g,h._exit=v,h}function b1(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function y1(){return new st(this._exit||this._groups.map(Pv),this._parents)}function C1(i,s,c){var l=this.enter(),u=this,f=this.exit();return typeof i=="function"?(l=i(l),l&&(l=l.selection())):l=l.append(i+""),s!=null&&(u=s(u),u&&(u=u.selection())),c==null?f.remove():c(f),l&&u?l.merge(u).order():u}function S1(i){for(var s=i.selection?i.selection():i,c=this._groups,l=s._groups,u=c.length,f=l.length,h=Math.min(u,f),g=new Array(u),v=0;v<h;++v)for(var b=c[v],E=l[v],y=b.length,_=g[v]=new Array(y),q,B=0;B<y;++B)(q=b[B]||E[B])&&(_[B]=q);for(;v<u;++v)g[v]=c[v];return new st(g,this._parents)}function w1(){for(var i=this._groups,s=-1,c=i.length;++s<c;)for(var l=i[s],u=l.length-1,f=l[u],h;--u>=0;)(h=l[u])&&(f&&h.compareDocumentPosition(f)^4&&f.parentNode.insertBefore(h,f),f=h);return this}function P1(i){i||(i=T1);function s(y,_){return y&&_?i(y.__data__,_.__data__):!y-!_}for(var c=this._groups,l=c.length,u=new Array(l),f=0;f<l;++f){for(var h=c[f],g=h.length,v=u[f]=new Array(g),b,E=0;E<g;++E)(b=h[E])&&(v[E]=b);v.sort(s)}return new st(u,this._parents).order()}function T1(i,s){return i<s?-1:i>s?1:i>=s?0:NaN}function E1(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function _1(){return Array.from(this)}function R1(){for(var i=this._groups,s=0,c=i.length;s<c;++s)for(var l=i[s],u=0,f=l.length;u<f;++u){var h=l[u];if(h)return h}return null}function x1(){let i=0;for(const s of this)++i;return i}function A1(){return!this.node()}function M1(i){for(var s=this._groups,c=0,l=s.length;c<l;++c)for(var u=s[c],f=0,h=u.length,g;f<h;++f)(g=u[f])&&i.call(g,g.__data__,f,u);return this}function N1(i){return function(){this.removeAttribute(i)}}function k1(i){return function(){this.removeAttributeNS(i.space,i.local)}}function H1(i,s){return function(){this.setAttribute(i,s)}}function z1(i,s){return function(){this.setAttributeNS(i.space,i.local,s)}}function O1(i,s){return function(){var c=s.apply(this,arguments);c==null?this.removeAttribute(i):this.setAttribute(i,c)}}function D1(i,s){return function(){var c=s.apply(this,arguments);c==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,c)}}function W1(i,s){var c=yv(i);if(arguments.length<2){var l=this.node();return c.local?l.getAttributeNS(c.space,c.local):l.getAttribute(c)}return this.each((s==null?c.local?k1:N1:typeof s=="function"?c.local?D1:O1:c.local?z1:H1)(c,s))}function Tv(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function q1(i){return function(){this.style.removeProperty(i)}}function B1(i,s,c){return function(){this.style.setProperty(i,s,c)}}function j1(i,s,c){return function(){var l=s.apply(this,arguments);l==null?this.style.removeProperty(i):this.style.setProperty(i,l,c)}}function G1(i,s,c){return arguments.length>1?this.each((s==null?q1:typeof s=="function"?j1:B1)(i,s,c??"")):I1(this.node(),i)}function I1(i,s){return i.style.getPropertyValue(s)||Tv(i).getComputedStyle(i,null).getPropertyValue(s)}function L1(i){return function(){delete this[i]}}function U1(i,s){return function(){this[i]=s}}function F1(i,s){return function(){var c=s.apply(this,arguments);c==null?delete this[i]:this[i]=c}}function Q1(i,s){return arguments.length>1?this.each((s==null?L1:typeof s=="function"?F1:U1)(i,s)):this.node()[i]}function Ev(i){return i.trim().split(/^|\s+/)}function wd(i){return i.classList||new _v(i)}function _v(i){this._node=i,this._names=Ev(i.getAttribute("class")||"")}_v.prototype={add:function(i){var s=this._names.indexOf(i);s<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var s=this._names.indexOf(i);s>=0&&(this._names.splice(s,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function Rv(i,s){for(var c=wd(i),l=-1,u=s.length;++l<u;)c.add(s[l])}function xv(i,s){for(var c=wd(i),l=-1,u=s.length;++l<u;)c.remove(s[l])}function Y1(i){return function(){Rv(this,i)}}function V1(i){return function(){xv(this,i)}}function X1(i,s){return function(){(s.apply(this,arguments)?Rv:xv)(this,i)}}function Z1(i,s){var c=Ev(i+"");if(arguments.length<2){for(var l=wd(this.node()),u=-1,f=c.length;++u<f;)if(!l.contains(c[u]))return!1;return!0}return this.each((typeof s=="function"?X1:s?Y1:V1)(c,s))}function K1(){this.textContent=""}function J1(i){return function(){this.textContent=i}}function $1(i){return function(){var s=i.apply(this,arguments);this.textContent=s??""}}function eE(i){return arguments.length?this.each(i==null?K1:(typeof i=="function"?$1:J1)(i)):this.node().textContent}function nE(){this.innerHTML=""}function tE(i){return function(){this.innerHTML=i}}function aE(i){return function(){var s=i.apply(this,arguments);this.innerHTML=s??""}}function iE(i){return arguments.length?this.each(i==null?nE:(typeof i=="function"?aE:tE)(i)):this.node().innerHTML}function rE(){this.nextSibling&&this.parentNode.appendChild(this)}function oE(){return this.each(rE)}function sE(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function lE(){return this.each(sE)}function cE(i){var s=typeof i=="function"?i:Cv(i);return this.select(function(){return this.appendChild(s.apply(this,arguments))})}function uE(){return null}function dE(i,s){var c=typeof i=="function"?i:Cv(i),l=s==null?uE:typeof s=="function"?s:Sv(s);return this.select(function(){return this.insertBefore(c.apply(this,arguments),l.apply(this,arguments)||null)})}function fE(){var i=this.parentNode;i&&i.removeChild(this)}function hE(){return this.each(fE)}function mE(){var i=this.cloneNode(!1),s=this.parentNode;return s?s.insertBefore(i,this.nextSibling):i}function pE(){var i=this.cloneNode(!0),s=this.parentNode;return s?s.insertBefore(i,this.nextSibling):i}function gE(i){return this.select(i?pE:mE)}function vE(i){return arguments.length?this.property("__data__",i):this.node().__data__}function bE(i){return function(s){i.call(this,s,this.__data__)}}function yE(i){return i.trim().split(/^|\s+/).map(function(s){var c="",l=s.indexOf(".");return l>=0&&(c=s.slice(l+1),s=s.slice(0,l)),{type:s,name:c}})}function CE(i){return function(){var s=this.__on;if(s){for(var c=0,l=-1,u=s.length,f;c<u;++c)f=s[c],(!i.type||f.type===i.type)&&f.name===i.name?this.removeEventListener(f.type,f.listener,f.options):s[++l]=f;++l?s.length=l:delete this.__on}}}function SE(i,s,c){return function(){var l=this.__on,u,f=bE(s);if(l){for(var h=0,g=l.length;h<g;++h)if((u=l[h]).type===i.type&&u.name===i.name){this.removeEventListener(u.type,u.listener,u.options),this.addEventListener(u.type,u.listener=f,u.options=c),u.value=s;return}}this.addEventListener(i.type,f,c),u={type:i.type,name:i.name,value:s,listener:f,options:c},l?l.push(u):this.__on=[u]}}function wE(i,s,c){var l=yE(i+""),u,f=l.length,h;if(arguments.length<2){var g=this.node().__on;if(g){for(var v=0,b=g.length,E;v<b;++v)for(u=0,E=g[v];u<f;++u)if((h=l[u]).type===E.type&&h.name===E.name)return E.value}return}for(g=s?SE:CE,u=0;u<f;++u)this.each(g(l[u],s,c));return this}function Av(i,s,c){var l=Tv(i),u=l.CustomEvent;typeof u=="function"?u=new u(s,c):(u=l.document.createEvent("Event"),c?(u.initEvent(s,c.bubbles,c.cancelable),u.detail=c.detail):u.initEvent(s,!1,!1)),i.dispatchEvent(u)}function PE(i,s){return function(){return Av(this,i,s)}}function TE(i,s){return function(){return Av(this,i,s.apply(this,arguments))}}function EE(i,s){return this.each((typeof s=="function"?TE:PE)(i,s))}function*_E(){for(var i=this._groups,s=0,c=i.length;s<c;++s)for(var l=i[s],u=0,f=l.length,h;u<f;++u)(h=l[u])&&(yield h)}var RE=[null];function st(i,s){this._groups=i,this._parents=s}function xE(){return this}st.prototype={constructor:st,select:ZT,selectAll:n1,selectChild:o1,selectChildren:u1,filter:d1,data:v1,enter:f1,exit:y1,join:C1,merge:S1,selection:xE,order:w1,sort:P1,call:E1,nodes:_1,node:R1,size:x1,empty:A1,each:M1,attr:W1,style:G1,property:Q1,classed:Z1,text:eE,html:iE,raise:oE,lower:lE,append:cE,insert:dE,remove:hE,clone:gE,datum:vE,on:wE,dispatch:EE,[Symbol.iterator]:_E};function AE(i){return typeof i=="string"?new st([[document.querySelector(i)]],[document.documentElement]):new st([[i]],RE)}function ME(i){return i}var qs=1,Iu=2,kg=3,Fr=4,Hg=1e-6;function NE(i){return"translate("+i+",0)"}function kE(i){return"translate(0,"+i+")"}function HE(i){return s=>+i(s)}function zE(i,s){return s=Math.max(0,i.bandwidth()-s*2)/2,i.round()&&(s=Math.round(s)),c=>+i(c)+s}function OE(){return!this.__axis}function Mv(i,s){var c=[],l=null,u=null,f=6,h=6,g=3,v=typeof window<"u"&&window.devicePixelRatio>1?0:.5,b=i===qs||i===Fr?-1:1,E=i===Fr||i===Iu?"x":"y",y=i===qs||i===kg?NE:kE;function _(q){var B=l??(s.ticks?s.ticks.apply(s,c):s.domain()),ie=u??(s.tickFormat?s.tickFormat.apply(s,c):ME),se=Math.max(f,0)+g,be=s.range(),V=+be[0]+v,ce=+be[be.length-1]+v,re=(s.bandwidth?zE:HE)(s.copy(),v),Se=q.selection?q.selection():q,ue=Se.selectAll(".domain").data([null]),L=Se.selectAll(".tick").data(B,s).order(),T=L.exit(),S=L.enter().append("g").attr("class","tick"),H=L.select("line"),G=L.select("text");ue=ue.merge(ue.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),L=L.merge(S),H=H.merge(S.append("line").attr("stroke","currentColor").attr(E+"2",b*f)),G=G.merge(S.append("text").attr("fill","currentColor").attr(E,b*se).attr("dy",i===qs?"0em":i===kg?"0.71em":"0.32em")),q!==Se&&(ue=ue.transition(q),L=L.transition(q),H=H.transition(q),G=G.transition(q),T=T.transition(q).attr("opacity",Hg).attr("transform",function(z){return isFinite(z=re(z))?y(z+v):this.getAttribute("transform")}),S.attr("opacity",Hg).attr("transform",function(z){var te=this.parentNode.__axis;return y((te&&isFinite(te=te(z))?te:re(z))+v)})),T.remove(),ue.attr("d",i===Fr||i===Iu?h?"M"+b*h+","+V+"H"+v+"V"+ce+"H"+b*h:"M"+v+","+V+"V"+ce:h?"M"+V+","+b*h+"V"+v+"H"+ce+"V"+b*h:"M"+V+","+v+"H"+ce),L.attr("opacity",1).attr("transform",function(z){return y(re(z)+v)}),H.attr(E+"2",b*f),G.attr(E,b*se).text(ie),Se.filter(OE).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",i===Iu?"start":i===Fr?"end":"middle"),Se.each(function(){this.__axis=re})}return _.scale=function(q){return arguments.length?(s=q,_):s},_.ticks=function(){return c=Array.from(arguments),_},_.tickArguments=function(q){return arguments.length?(c=q==null?[]:Array.from(q),_):c.slice()},_.tickValues=function(q){return arguments.length?(l=q==null?null:Array.from(q),_):l&&l.slice()},_.tickFormat=function(q){return arguments.length?(u=q,_):u},_.tickSize=function(q){return arguments.length?(f=h=+q,_):f},_.tickSizeInner=function(q){return arguments.length?(f=+q,_):f},_.tickSizeOuter=function(q){return arguments.length?(h=+q,_):h},_.tickPadding=function(q){return arguments.length?(g=+q,_):g},_.offset=function(q){return arguments.length?(v=+q,_):v},_}function DE(i){return Mv(qs,i)}function WE(i){return Mv(Fr,i)}const Qt={select:AE,scaleBand:jg,axisTop:DE,axisLeft:WE},Ui=110,zg=400,Og=110,qE=30;function BE({results:i,highlighted:s=[],onPractice:c,onConcern:l}){const u=pe.useRef(null),f=pe.useRef(null),h=pe.useRef(null),[g,v]=pe.useState(null),b=pe.useRef(null),[E,y]=pe.useState(0);return pe.useEffect(()=>{const _=b.current;if(!_)return;const q=new ResizeObserver(([B])=>y(B.contentRect.width));return q.observe(_),()=>q.disconnect()},[]),pe.useEffect(()=>{const{pairs:_,practices:q,concerns:B}=i,ie=E>0&&E<zg+2*Og,se=ie?Math.max(150,Math.round(E*.48)):zg,be=ie?12:15,V=ie?36:qE,ce=Qt.select(u.current);ce.selectAll("*").remove();const re=Qt.select(f.current);re.selectAll("*").remove();const Se=Qt.select(h.current);if(Se.selectAll("*").remove(),!_.length)return;let ue=Og*B.length;ue<300&&(ue=350);const L=V*q.length,T=re.append("svg").attr("width",ue).attr("height",L+Ui).append("g"),S=Qt.scaleBand().range([0,ue]).domain(B).padding(.05),H=T.append("g").attr("class","x axis").attr("transform",`translate(0,${Ui})`).style("font-size",15).call(Qt.axisTop(S).tickSize(0));H.select(".domain").remove(),H.selectAll(".tick text").attr("class","xlab").call(Dg,S.bandwidth()).on("click",(F,K)=>l?.(K)).append("title").text(F=>`${F} — open in the Handbook`);const G=Qt.scaleBand().range([0,L]).domain(q).padding(.05),te=ce.append("svg").attr("width",se).attr("height",L+Ui).append("g").style("font-size",be).attr("transform",`translate(${se},${Ui})`).call(Qt.axisLeft(G).tickSize(0));te.select(".domain").remove();const we=te.selectAll(".tick text").attr("class",F=>`ylab${s.includes(F)?" hl":""}`).text(F=>Ds(F));ie&&we.call(Dg,se-12,!0),we.on("click",(F,K)=>c?.(K)).append("title").text(F=>`${Ds(F)} — open in the Handbook`);const Ce=T.selectAll().data(_,F=>F.concern+":"+F.conservation_practice).enter();Ce.append("rect").attr("x",F=>S(F.concern)).attr("y",F=>G(F.conservation_practice)+Ui).attr("rx",4).attr("ry",4).attr("width",S.bandwidth()).attr("height",G.bandwidth()).style("fill",F=>Vu(F.value||0)).style("stroke-width",4).style("stroke","none").style("opacity",.8).on("mousemove",(F,K)=>v({x:F.clientX,y:F.clientY,d:K})).on("mouseleave",()=>v(null)),Ce.insert("text").attr("x",F=>S(F.concern)+S.bandwidth()/2).attr("y",F=>G(F.conservation_practice)+Ui+G.bandwidth()/2).attr("dy",1).attr("text-anchor","middle").style("alignment-baseline","middle").style("pointer-events","none").attr("fill",F=>Xu(F.value)).attr("font-family","sans-serif").text(F=>F.value);const I=40,U=25,Z=20,Q=190,le=Se.append("svg").attr("width",400+qu.length*(I+5)).attr("height",65).append("g");le.selectAll("legend-boxes").data(qu).enter().append("rect").attr("x",(F,K)=>Q+K*(I+5)).attr("y",Z).attr("width",I).attr("height",U).style("fill",F=>Vu(F)),le.selectAll("legend-numbers").data(qu).enter().append("text").attr("x",(F,K)=>Q+K*(I+5)+I/2).attr("y",Z+U/2).attr("dy",1).attr("fill",F=>Xu(F)).text(F=>F).attr("text-anchor","middle").style("alignment-baseline","middle");const fe=(F,K,w,O)=>le.append("text").attr("x",F).attr("y",K).text(w).attr("text-anchor",O).style("alignment-baseline","middle").style("font-size",13);fe(Q-8,Z+U/2-10,"Conservation practice","end"),fe(Q-8,Z+U/2+10,"has detrimental effect","end"),fe(Q+8*(I+5),Z+U/2-10,"Conservation practice","start"),fe(Q+8*(I+5),Z+U/2+10,"has protective effect","start")},[i,s,c,l,E]),p.jsxs("div",{className:"heat",ref:b,children:[p.jsx("div",{className:"legend",children:p.jsx("div",{ref:h})}),p.jsxs("div",{className:"scroller",children:[p.jsx("div",{className:"side",ref:u}),p.jsx("div",{className:"grid",ref:f})]}),g&&p.jsxs("div",{className:"tip",style:{left:Math.min(g.x+14,window.innerWidth-320),top:g.y+14},children:[p.jsx("b",{children:Ds(g.d.conservation_practice)}),p.jsx("br",{}),g.d.concern,p.jsx("br",{}),p.jsxs("span",{className:"mono",children:["effect score ",g.d.value]})]})]})}function Dg(i,s,c=!1){i.each(function(){const l=Qt.select(this),u=l.text().split(/\s+/).reverse();let f,h=[],g=0;const v=1.1,b=l.attr("y")??0,E=l.attr("x")||0,y=parseFloat(l.attr("dy"))||0;let _=l.text(null).append("tspan").attr("x",E).attr("y",b).attr("dy",y+"em");for(f=u.pop();f;)h.push(f),_.text(h.join(" ")),_.node().getComputedTextLength()>s&&(h.pop(),_.text(h.join(" ")),h=[f],_=l.append("tspan").attr("x",E).attr("y",b).attr("dy",++g*v+y+"em").text(f)),f=u.pop();const q=l.selectAll("tspan"),B=1.05,ie=q.size();q.each(function(se,be){const V=c?(be-(ie-1)/2)*B+y:be*B-(ie-1)*B;Qt.select(this).attr("y",b).attr("dy",V+"em")})})}function Nv({page:i,onNavigate:s}){const c=pe.useMemo(()=>qT(i),[i]),l=u=>{if(!s)return;const f=u.target.closest("a.wikilink");if(!f)return;const h=/#\/handbook\/([^?]+)/.exec(f.getAttribute("href")||"");h&&(u.preventDefault(),s(decodeURIComponent(h[1])))};return p.jsx("div",{className:"md",onClick:l,dangerouslySetInnerHTML:{__html:c}})}const jE="/handbook";function GE({route:i}){const[s,c]=pe.useState(null),[l,u]=pe.useState(null),[f,h]=Jg(),{concerns:g,form:v}=pe.useMemo(()=>Vg(i.query),[i.query]);pe.useEffect(()=>{ud().then(c)},[]),pe.useEffect(()=>{fd({concerns:g,form:v})},[g,v]);const b=pe.useMemo(()=>s?Yg(s,g):null,[s,g]),E=pe.useMemo(()=>b?aS(b,3):[],[b]),y=pe.useMemo(()=>E.map(V=>V.name),[E]),_=pe.useCallback(V=>{const ce=At.practices[V]?.slug;ce&&u(ce)},[]),q=pe.useCallback(V=>{const ce=At.concerns[V];ce&&u(ce)},[]);if(pe.useEffect(()=>{if(!l)return;const V=ce=>{ce.key==="Escape"&&u(null)};return window.addEventListener("keydown",V),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",V),document.body.style.overflow=""}},[l]),!g.length)return p.jsxs("section",{className:"section",children:[p.jsx(td,{current:3,query:Yt(v,g),reachable:()=>!0}),p.jsxs("div",{className:"panel sand",children:[p.jsx("div",{className:"ptitle",children:"No concerns selected"}),p.jsx("p",{className:"small",children:"Pick at least one resource concern to see conservation practices."}),p.jsx("div",{children:p.jsx("a",{className:"pill river",href:ze("/planner/concerns",Yt(v,g)),children:"← Choose resource concerns"})})]})]});if(!s)return p.jsxs("div",{className:"loading",children:[p.jsx("span",{className:"spinner"}),"Loading planner data…"]});const B=g.filter(V=>!At.concerns[V]),ie=ze("/planner/concerns",Yt(v,g)),se=async()=>h(await $g(Hs("/planner/results",Yt(v,g)))?"Link copied":"Could not copy — use the address bar"),be=V=>{const ce=At.practices[V],re=ce&&Xa[ce.slug],Se=ce?.definition||pv(re);return{cp:ce?.cp,slug:ce?.slug,page:re,definition:Se,fromHandbook:!ce?.definition&&!!Se}};return p.jsxs(p.Fragment,{children:[p.jsxs("section",{className:"section",style:{paddingTop:6},children:[p.jsx(td,{current:3,query:Yt(v,g),reachable:()=>!0}),p.jsxs("div",{className:"between",children:[p.jsxs("div",{className:"cluster",children:[p.jsx("a",{className:"pill sand",href:ie,children:"← Back: resource concerns"}),p.jsx("button",{className:"pill",type:"button",onClick:se,children:"Copy link"}),p.jsxs("button",{className:"pill",type:"button",onClick:()=>wg(b.pairs),children:[p.jsx("span",{className:"ico",children:"⤓"})," Download (CSV)"]})]}),p.jsx("a",{className:"pill river",style:{whiteSpace:"normal",textAlign:"center"},href:ze(jE),children:"Learn about these practices and concerns in the AquaCorridors Handbook →"})]}),p.jsxs("div",{className:"result-head",children:[p.jsxs("div",{className:"stack",style:{gap:10,flex:"1 1 460px"},children:[p.jsxs("div",{className:"eyebrow",children:["AquaCorridors Planner · step 3 of 3",v.name?` · for ${v.name}`:"",v.state&&v.state!=="NONE"?` · ${v.county?v.county+" County, ":""}${v.state}`:""]}),p.jsx("h1",{style:{fontSize:"clamp(28px,4vw,44px)"},children:"NRCS Conservation Practices that Address Your Resource Concerns"}),p.jsx("div",{className:"cluster","aria-label":"Selected concerns",children:g.map(V=>At.concerns[V]?p.jsxs("a",{className:"chip",href:ze("/handbook/"+At.concerns[V]),onClick:ce=>{ce.preventDefault(),u(At.concerns[V])},title:"Open in the Handbook",children:[V," ↗"]},V):p.jsx("span",{className:"chip paper",children:V},V))}),B.length>0&&p.jsxs("div",{className:"notice",children:["Some concerns in this link are not in the current planner data and were ignored: ",B.join("; "),"."]})]}),p.jsxs("div",{className:"kv panel sand",style:{padding:"16px 20px",borderRadius:20,minWidth:220},children:[p.jsx("span",{className:"k",children:"Concerns"}),p.jsx("b",{children:b.concerns.length}),p.jsx("span",{className:"k",children:"Practices with an effect"}),p.jsx("b",{children:b.practices.length}),p.jsx("span",{className:"k",children:"Scored by"}),p.jsx("span",{className:"small",children:"USDA NRCS CPPE"})]})]})]}),E.length>0&&p.jsxs("section",{className:"section",style:{paddingTop:34},children:[p.jsxs("div",{className:"section-head",children:[p.jsx("span",{className:"arch"}),p.jsx("span",{className:"title",children:"Start here · highest combined effect"})]}),p.jsxs("p",{className:"small muted",style:{maxWidth:"78ch",marginTop:10},children:["The same ranking as the graph below: practices are ordered by the sum of their CPPE effect scores across the ",b.concerns.length," concern",b.concerns.length>1?"s":""," you selected. These are the top ",E.length,". The full list follows."]}),p.jsx("div",{className:"start-grid",children:E.map((V,ce)=>{const re=be(V.name),Se=re.cp&&UT(re.cp);return p.jsxs("div",{className:`start ${ce===0?"top":""}`,children:[Se&&p.jsx("img",{className:"circle",src:Se,alt:""}),p.jsxs("div",{className:"rank",children:["#",ce+1," · combined score ",V.score,re.cp?` · CP ${re.cp}`:""]}),p.jsx("div",{className:"t",children:Ds(V.name)}),re.definition&&p.jsx("div",{className:"d",children:re.definition}),p.jsx("div",{className:"scores",children:b.concerns.map(ue=>{const L=b.byPractice[V.name]?.[ue]??0;return p.jsxs("div",{className:"sc",children:[p.jsx("span",{className:"v",style:{background:Vu(L),color:Xu(L)},children:L}),p.jsx("span",{className:"c",children:ue})]},ue)})}),p.jsxs("div",{className:"foot",children:[re.slug&&p.jsx("button",{className:"pill sm river",type:"button",onClick:()=>u(re.slug),children:"Read in the Handbook"}),re.slug&&p.jsx("a",{className:"pill sm",href:ze("/handbook/"+re.slug),children:"Open page ↗"})]})]},V.name)})})]}),p.jsxs("section",{className:"section",style:{paddingTop:34},children:[p.jsxs("div",{className:"section-head",children:[p.jsx("span",{className:"arch",style:{background:"var(--moss)"}}),p.jsx("span",{className:"title",children:"All practices with an effect on your concerns"})]}),p.jsxs("div",{className:"howto",children:[p.jsx("b",{children:"How to Interpret This Graph:"})," This graph visualizes overlap and patterns in the effectiveness of certain conservation practices. The vertical left-hand column lists out conservation practices used by NRCS EQIP program and the top horizontal row lists resource concerns you selected on the previous page. The numbers in the graph indicate the severity of the impact as shown in the effect score key above the graph. This data comes from USDA's Conservation Practice Physical Effects (CPPE) scores.",p.jsxs("div",{className:"small muted",style:{marginTop:8},children:["Click a practice or concern name to read its Handbook page. Rows are ordered by combined score; the top ",E.length," are shown in bold."]})]}),p.jsx(BE,{results:b,highlighted:y,onPractice:_,onConcern:q}),p.jsxs("div",{className:"between",children:[p.jsxs("button",{className:"pill sand",type:"button",onClick:()=>wg(b.pairs),children:[p.jsx("span",{className:"ico",children:"⤓"})," Download (CSV)"]}),p.jsx("a",{className:"pill",href:ie,children:"← Back: resource concerns"})]})]}),l&&Xa[l]&&p.jsx("div",{className:"drawer-bg",onClick:()=>u(null),children:p.jsxs("aside",{className:"drawer",role:"dialog","aria-label":"Handbook page",onClick:V=>V.stopPropagation(),children:[p.jsxs("div",{className:"bar",children:[p.jsxs("div",{children:[p.jsx("div",{className:"eyebrow",style:{opacity:.75},children:"AquaCorridors Handbook"}),p.jsx("div",{className:"t",children:Xa[l].title})]}),p.jsxs("div",{className:"cluster",children:[p.jsx("a",{className:"pill xs sand",href:ze("/handbook/"+l),children:"Open full page ↗"}),p.jsx("button",{className:"pill xs ghost light",type:"button",onClick:()=>u(null),children:"Close ✕"})]})]}),p.jsx("div",{className:"body",children:p.jsx(Nv,{page:Xa[l],onNavigate:u})})]})}),p.jsx(Kg,{msg:f})]})}const IE=Object.fromEntries(Object.entries(At.concerns).map(([i,s])=>[s,i])),LE=Object.fromEntries(Object.entries(At.practices).map(([i,s])=>[s.slug,i]));function UE({route:i,slug:s}){const c=Xa[s||"home"]||null,l=i.embed,u=pe.useMemo(()=>BT(),[]),f=l==="page";return c?p.jsx("section",{className:"section",style:{paddingTop:l?0:16},children:p.jsxs("div",{className:"hb",style:f?{gridTemplateColumns:"1fr"}:void 0,children:[!f&&p.jsx(FE,{tree:u,current:c.slug}),p.jsx(QE,{page:c,embed:l})]})}):p.jsx("section",{className:"section",children:p.jsxs("div",{className:"panel sand",children:[p.jsx("div",{className:"ptitle",children:"Page not found"}),p.jsxs("p",{className:"small",children:["There is no Handbook page at ",p.jsx("code",{children:s}),"."]}),p.jsx("div",{children:p.jsx("a",{className:"pill river",href:ze("/handbook"),children:"Handbook home"})})]})})}function FE({tree:i,current:s}){const[c,l]=pe.useState(""),u=jT(c),f=Xa[s]?.folder||[],h=GC("(max-width: 900px)"),g=p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"search",children:p.jsx("input",{type:"search",placeholder:"Search page titles…",value:c,onChange:v=>l(v.target.value),"aria-label":"Search the Handbook"})}),c.trim()?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"grp-label",children:[u.length," result",u.length===1?"":"s"]}),u.map(v=>p.jsxs("a",{className:v.slug===s?"active":"",href:ze("/handbook/"+v.slug),onClick:()=>l(""),children:[v.title,p.jsx("span",{className:"cnt",children:v.folder[0]?v.folder[v.folder.length-1]:""})]},v.slug)),!u.length&&p.jsx("div",{className:"small muted",style:{padding:"4px 10px"},children:"No page titles match."})]}):p.jsxs(p.Fragment,{children:[i.pages.map(v=>p.jsx("a",{className:v.slug===s?"active":"",href:ze("/handbook/"+v.slug),children:v.title},v.slug)),i.folders.map(v=>p.jsx(Hv,{node:v,current:s,ancestors:f,depth:0},v.name))]})]});return h?p.jsxs("details",{className:"nav navbox",children:[p.jsxs("summary",{children:[p.jsx("span",{children:"Handbook contents"}),p.jsxs("span",{className:"cnt",children:[Jr.length," pages"]})]}),p.jsx("nav",{"aria-label":"Handbook contents",style:{marginTop:8},children:g})]},s):p.jsx("nav",{className:"nav","aria-label":"Handbook contents",children:g})}function kv(i){return i.pages.length+i.folders.reduce((s,c)=>s+kv(c),0)}function Hv({node:i,current:s,ancestors:c,depth:l}){const u=c[l]===i.name;return p.jsxs("details",{open:u,children:[p.jsxs("summary",{children:[i.name,p.jsx("span",{className:"cnt",children:kv(i)})]}),p.jsxs("div",{className:"in",children:[i.pages.map(f=>p.jsx("a",{className:f.slug===s?"active":"",href:ze("/handbook/"+f.slug),children:f.title},f.slug)),i.folders.map(f=>p.jsx(Hv,{node:f,current:s,ancestors:c,depth:l+1},f.name))]})]})}function QE({page:i,embed:s}){const[c,l]=pe.useState(!1),[u,f]=Jg(),h=i.cssclasses?.includes("hide-title"),g=LT(i),v=GT(i)?IE[i.slug]:null,b=nd(i)?LE[i.slug]:null,E=vv(i),y=Zu(),_=!!v&&y.concerns.includes(v),q=()=>{const re=_?y.concerns:[...y.concerns,v];fd({form:y.form,concerns:re}),ks(y.complete?"/planner/results":dd(y.form)?"/planner/concerns":"/planner",Yt(y.form,re))},B=YE(b,y),ie=Hs("/handbook/"+i.slug),se=Hs("/handbook/"+i.slug,{embed:"page"}),be=Hs("/handbook/"+i.slug,{embed:"1"}),V=re=>`<iframe id="aquacorridors" src="${re}" title="AquaCorridors Handbook — ${i.plainTitle}" width="100%" height="800" style="border:0;border-radius:16px" loading="lazy"></iframe>
<script>addEventListener('message',e=>{if(e.data&&e.data.type==='aquacorridors:height')document.getElementById('aquacorridors').style.height=e.data.height+'px'})<\/script>`,ce=async(re,Se)=>f(await $g(re)?`${Se} copied`:"Could not copy");return p.jsxs("article",{className:"page",style:{position:"relative"},children:[p.jsxs("div",{className:"crumbs",children:[p.jsx("a",{href:ze("/handbook"),children:"Handbook"}),i.folder.map((re,Se)=>p.jsxs("span",{children:["/ ",re]},Se))]}),(!h||g)&&p.jsxs("div",{className:"between",style:{alignItems:"flex-start",marginBottom:18,flexWrap:"nowrap"},children:[h?p.jsx("span",{}):p.jsx("h1",{className:"title",style:{marginBottom:0},children:i.title}),g&&p.jsx("img",{src:g,alt:"",style:{flex:"none",width:120,height:120,borderRadius:999}})]}),!s&&p.jsxs("div",{className:"toolrow",children:[nd(i)&&p.jsx("a",{className:"pill sm sand",href:ze("/planner"),children:"Find practices for your concerns in the Planner →"}),p.jsx("span",{className:"spacer"}),p.jsx("button",{className:"pill sm",type:"button",onClick:()=>ce(ie,"Link"),children:"Copy link"}),p.jsx("button",{className:"pill sm",type:"button","aria-expanded":c,onClick:()=>l(re=>!re),children:"Embed"})]}),c&&!s&&p.jsxs("div",{className:"embed-box",children:[p.jsxs("div",{className:"between",children:[p.jsx("b",{className:"small",children:"Embed this page in another site"}),p.jsx("button",{className:"pill xs",type:"button",onClick:()=>l(!1),children:"Close"})]}),p.jsx("div",{className:"small muted",children:"The script line lets the frame grow to fit the page; drop it for a fixed 800px frame. Page only (no sidebar):"}),p.jsx("textarea",{readOnly:!0,rows:4,value:V(se),onFocus:re=>re.target.select()}),p.jsx("div",{className:"small muted",children:"Whole Handbook with navigation:"}),p.jsx("textarea",{readOnly:!0,rows:4,value:V(be),onFocus:re=>re.target.select()}),p.jsxs("div",{className:"cluster",children:[p.jsx("button",{className:"pill xs river",type:"button",onClick:()=>ce(V(se),"Snippet"),children:"Copy page-only snippet"}),p.jsx("button",{className:"pill xs",type:"button",onClick:()=>ce(V(be),"Snippet"),children:"Copy with-navigation snippet"}),p.jsx("a",{className:"pill xs",href:se,target:"_blank",rel:"noopener",children:"Preview ↗"})]})]}),v&&p.jsx("div",{className:"planner-link",children:_?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"msg",children:[p.jsx("b",{children:"This concern is in your Planner selection"})," (",y.concerns.length," concern",y.concerns.length===1?"":"s"," chosen)."]}),p.jsx("a",{className:"pill river",href:ze(y.complete?"/planner/results":"/planner",y.query),children:y.complete?"View my Planner results →":"Back to the Planner →"})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"msg",children:[p.jsx("b",{children:"This is one of the resource concerns in the AquaCorridors Planner."})," ",y.complete?`Add it to your ${y.concerns.length} selected concern${y.concerns.length===1?"":"s"} and see the updated results.`:"Add it to your selection to see every practice that addresses it alongside your other concerns, scored with CPPE data."]}),p.jsx("button",{className:"pill river",type:"button",onClick:q,children:y.complete?"Add to my Planner results →":`Add “${v}” to my Planner →`})]})}),b&&p.jsxs("div",{className:"planner-link",children:[y.complete?p.jsxs("div",{className:"msg",children:[p.jsx("b",{children:"In your Planner results"}),B===null?" (loading…)":B?`, CP ${E} ranks #${B.position} of ${B.total} practices for your ${y.concerns.length} concern${y.concerns.length===1?"":"s"} (combined score ${B.score}).`:`, CP ${E} does not appear: the CPPE data gives it no effect on the ${y.concerns.length} concern${y.concerns.length===1?"":"s"} you selected.`]}):p.jsxs("div",{className:"msg",children:[p.jsxs("b",{children:["CP ",E," appears in the AquaCorridors Planner."]})," Choose the resource concerns on your land and the Planner shows where this practice ranks among the others that address them."]}),p.jsx("a",{className:"pill river",href:ze(y.complete?"/planner/results":"/planner",y.query),children:y.complete?"View my Planner results →":"Open the Planner →"})]}),p.jsx(Nv,{page:i}),p.jsx(Kg,{msg:u})]})}function YE(i,s){const[c,l]=pe.useState(null);return pe.useEffect(()=>{if(!i||!s.complete)return;let u=!0;return ud().then(f=>{if(!u)return;const h=Yg(f,s.concerns),g=h.practices.indexOf(i);l(g<0?!1:{position:g+1,total:h.practices.length,score:h.scores[i]})}),()=>{u=!1}},[i,s.complete,s.concerns.join(":")]),c}function VE(){const i=jC(),s=i.embed;pe.useEffect(()=>{document.body.classList.toggle("embed-mode",!!s),window.scrollTo(0,0)},[i.path,s]),XE();let c;const[l,u]=i.parts;return pe.useEffect(()=>{l==="report"&&window.location.replace(Bs(i.query))},[l,i.query]),l==="report"?null:(l==="planner"&&u==="results"?c=p.jsx(GE,{route:i}):l==="planner"&&u==="concerns"?c=p.jsx(Mg,{route:i,step:2}):l==="planner"?c=p.jsx(Mg,{route:i,step:1}):l==="handbook"?c=p.jsx(UE,{route:i,slug:u}):c=p.jsx(cS,{}),p.jsxs(p.Fragment,{children:[!s&&p.jsx(oS,{route:i}),p.jsxs("div",{className:"wrap",children:[c,!s&&p.jsx(lS,{})]})]}))}function XE(){pe.useEffect(()=>{if(window.parent===window)return;const i=()=>window.parent.postMessage({type:"aquacorridors:height",height:document.documentElement.scrollHeight,hash:window.location.hash},"*"),s=new ResizeObserver(i);return s.observe(document.body),window.addEventListener("hashchange",i),i(),()=>{s.disconnect(),window.removeEventListener("hashchange",i)}},[])}BC.createRoot(document.getElementById("root")).render(p.jsx(pe.StrictMode,{children:p.jsx(VE,{})}));
