const __vite__fileDeps=["assets/Home-wc2ziKFd.js","assets/Home-Bslq6z7r.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function da(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const re={},jt=[],Pe=()=>{},cl=()=>!1,lr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ma=e=>e.startsWith("onUpdate:"),fe=Object.assign,ha=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fl=Object.prototype.hasOwnProperty,Y=(e,t)=>fl.call(e,t),U=Array.isArray,Zt=e=>cr(e)==="[object Map]",ul=e=>cr(e)==="[object Set]",V=e=>typeof e=="function",de=e=>typeof e=="string",kn=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",xo=e=>(oe(e)||V(e))&&V(e.then)&&V(e.catch),dl=Object.prototype.toString,cr=e=>dl.call(e),ml=e=>cr(e).slice(8,-1),hl=e=>cr(e)==="[object Object]",pa=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,en=da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},pl=/-(\w)/g,Dt=fr(e=>e.replace(pl,(t,n)=>n?n.toUpperCase():"")),gl=/\B([A-Z])/g,Wt=fr(e=>e.replace(gl,"-$1").toLowerCase()),Eo=fr(e=>e.charAt(0).toUpperCase()+e.slice(1)),kr=fr(e=>e?`on${Eo(e)}`:""),dt=(e,t)=>!Object.is(e,t),Sr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ko=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},vl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ei;const So=()=>ei||(ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ga(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=de(r)?_l(r):ga(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(de(e)||oe(e))return e}const bl=/;(?![^(]*\))/g,yl=/:([^]+)/,wl=/\/\*[^]*?\*\//g;function _l(e){const t={};return e.replace(wl,"").split(bl).forEach(n=>{if(n){const r=n.split(yl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function va(e){let t="";if(de(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=va(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",El=da(xl);function Ao(e){return!!e||e===""}/**
* @vue/reactivity v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class Oo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function kl(e){return new Oo(e)}function Sl(e,t=Re){t&&t.active&&t.effects.push(e)}function Al(){return Re}let kt;class ba{constructor(t,n,r,a){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Sl(this,a)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,gt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Ol(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),vt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ft,n=kt;try{return ft=!0,kt=this,this._runnings++,ti(this),this.fn()}finally{ni(this),this._runnings--,kt=n,ft=t}}stop(){var t;this.active&&(ti(this),ni(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Ol(e){return e.value}function ti(e){e._trackId++,e._depsLength=0}function ni(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Po(e.deps[t],e);e.deps.length=e._depsLength}}function Po(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let ft=!0,zr=0;const Co=[];function gt(){Co.push(ft),ft=!1}function vt(){const e=Co.pop();ft=e===void 0?!0:e}function ya(){zr++}function wa(){for(zr--;!zr&&Dr.length;)Dr.shift()()}function Ro(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Po(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Dr=[];function Io(e,t,n){ya();for(const r of e.keys()){let a;r._dirtyLevel<t&&(a??(a=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(a??(a=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Dr.push(r.scheduler)))}wa()}const To=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Hr=new WeakMap,St=Symbol(""),Ur=Symbol("");function Ee(e,t,n){if(ft&&kt){let r=Hr.get(e);r||Hr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=To(()=>r.delete(n))),Ro(kt,a)}}function Ge(e,t,n,r,a,i){const o=Hr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&U(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||!kn(c)&&c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":U(e)?pa(n)&&s.push(o.get("length")):(s.push(o.get(St)),Zt(e)&&s.push(o.get(Ur)));break;case"delete":U(e)||(s.push(o.get(St)),Zt(e)&&s.push(o.get(Ur)));break;case"set":Zt(e)&&s.push(o.get(St));break}ya();for(const l of s)l&&Io(l,4);wa()}const Pl=da("__proto__,__v_isRef,__isVue"),Lo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(kn)),ri=Cl();function Cl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(G)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){gt(),ya();const r=G(this)[t].apply(this,n);return wa(),vt(),r}}),e}function Rl(e){kn(e)||(e=String(e));const t=G(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class No{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const a=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Bl:$o:i?jo:Fo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=U(t);if(!a){if(o&&Y(ri,n))return Reflect.get(ri,n,r);if(n==="hasOwnProperty")return Rl}const s=Reflect.get(t,n,r);return(kn(n)?Lo.has(n):Pl(n))||(a||Ee(t,"get",n),i)?s:ke(s)?o&&pa(n)?s:s.value:oe(s)?a?Do(s):dr(s):s}}class Mo extends No{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(!this._isShallow){const l=un(i);if(!er(r)&&!un(r)&&(i=G(i),r=G(r)),!U(t)&&ke(i)&&!ke(r))return l?!1:(i.value=r,!0)}const o=U(t)&&pa(n)?Number(n)<t.length:Y(t,n),s=Reflect.set(t,n,r,a);return t===G(a)&&(o?dt(r,i)&&Ge(t,"set",n,r):Ge(t,"add",n,r)),s}deleteProperty(t,n){const r=Y(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Ge(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!kn(n)||!Lo.has(n))&&Ee(t,"has",n),r}ownKeys(t){return Ee(t,"iterate",U(t)?"length":St),Reflect.ownKeys(t)}}class Il extends No{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Tl=new Mo,Ll=new Il,Nl=new Mo(!0);const _a=e=>e,ur=e=>Reflect.getPrototypeOf(e);function In(e,t,n=!1,r=!1){e=e.__v_raw;const a=G(e),i=G(t);n||(dt(t,i)&&Ee(a,"get",t),Ee(a,"get",i));const{has:o}=ur(a),s=r?_a:n?ka:dn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Tn(e,t=!1){const n=this.__v_raw,r=G(n),a=G(e);return t||(dt(e,a)&&Ee(r,"has",e),Ee(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Ln(e,t=!1){return e=e.__v_raw,!t&&Ee(G(e),"iterate",St),Reflect.get(e,"size",e)}function ai(e){e=G(e);const t=G(this);return ur(t).has.call(t,e)||(t.add(e),Ge(t,"add",e,e)),this}function ii(e,t){t=G(t);const n=G(this),{has:r,get:a}=ur(n);let i=r.call(n,e);i||(e=G(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?dt(t,o)&&Ge(n,"set",e,t):Ge(n,"add",e,t),this}function oi(e){const t=G(this),{has:n,get:r}=ur(t);let a=n.call(t,e);a||(e=G(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ge(t,"delete",e,void 0),i}function si(){const e=G(this),t=e.size!==0,n=e.clear();return t&&Ge(e,"clear",void 0,void 0),n}function Nn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=G(o),l=t?_a:e?ka:dn;return!e&&Ee(s,"iterate",St),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Mn(e,t,n){return function(...r){const a=this.__v_raw,i=G(a),o=Zt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?_a:t?ka:dn;return!t&&Ee(i,"iterate",l?Ur:St),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function rt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ml(){const e={get(i){return In(this,i)},get size(){return Ln(this)},has:Tn,add:ai,set:ii,delete:oi,clear:si,forEach:Nn(!1,!1)},t={get(i){return In(this,i,!1,!0)},get size(){return Ln(this)},has:Tn,add:ai,set:ii,delete:oi,clear:si,forEach:Nn(!1,!0)},n={get(i){return In(this,i,!0)},get size(){return Ln(this,!0)},has(i){return Tn.call(this,i,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:Nn(!0,!1)},r={get(i){return In(this,i,!0,!0)},get size(){return Ln(this,!0)},has(i){return Tn.call(this,i,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:Nn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Mn(i,!1,!1),n[i]=Mn(i,!0,!1),t[i]=Mn(i,!1,!0),r[i]=Mn(i,!0,!0)}),[e,n,t,r]}const[Fl,jl,$l,zl]=Ml();function xa(e,t){const n=t?e?zl:$l:e?jl:Fl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Y(n,a)&&a in r?n:r,a,i)}const Dl={get:xa(!1,!1)},Hl={get:xa(!1,!0)},Ul={get:xa(!0,!1)};const Fo=new WeakMap,jo=new WeakMap,$o=new WeakMap,Bl=new WeakMap;function Vl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wl(e){return e.__v_skip||!Object.isExtensible(e)?0:Vl(ml(e))}function dr(e){return un(e)?e:Ea(e,!1,Tl,Dl,Fo)}function zo(e){return Ea(e,!1,Nl,Hl,jo)}function Do(e){return Ea(e,!0,Ll,Ul,$o)}function Ea(e,t,n,r,a){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Wl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function tn(e){return un(e)?tn(e.__v_raw):!!(e&&e.__v_isReactive)}function un(e){return!!(e&&e.__v_isReadonly)}function er(e){return!!(e&&e.__v_isShallow)}function Ho(e){return e?!!e.__v_raw:!1}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Uo(e){return Object.isExtensible(e)&&ko(e,"__v_skip",!0),e}const dn=e=>oe(e)?dr(e):e,ka=e=>oe(e)?Do(e):e;class Bo{constructor(t,n,r,a){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ba(()=>t(this._value),()=>Yn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=G(this);return(!t._cacheable||t.effect.dirty)&&dt(t._value,t._value=t.effect.run())&&Yn(t,4),Vo(t),t.effect._dirtyLevel>=2&&Yn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Yl(e,t,n=!1){let r,a;const i=V(e);return i?(r=e,a=Pe):(r=e.get,a=e.set),new Bo(r,a,i||!a,n)}function Vo(e){var t;ft&&kt&&(e=G(e),Ro(kt,(t=e.dep)!=null?t:e.dep=To(()=>e.dep=void 0,e instanceof Bo?e:void 0)))}function Yn(e,t=4,n){e=G(e);const r=e.dep;r&&Io(r,t)}function ke(e){return!!(e&&e.__v_isRef===!0)}function Wo(e){return Yo(e,!1)}function Kl(e){return Yo(e,!0)}function Yo(e,t){return ke(e)?e:new Gl(e,t)}class Gl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:dn(t)}get value(){return Vo(this),this._value}set value(t){const n=this.__v_isShallow||er(t)||un(t);t=n?t:G(t),dt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:dn(t),Yn(this,4))}}function At(e){return ke(e)?e.value:e}const ql={get:(e,t,n)=>At(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ke(a)&&!ke(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ko(e){return tn(e)?e:new Proxy(e,ql)}/**
* @vue/runtime-core v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ut(e,t,n,r){try{return r?e(...r):e()}catch(a){mr(a,t,n)}}function Ne(e,t,n,r){if(V(e)){const a=ut(e,t,n,r);return a&&xo(a)&&a.catch(i=>{mr(i,t,n)}),a}if(U(e)){const a=[];for(let i=0;i<e.length;i++)a.push(Ne(e[i],t,n,r));return a}}function mr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){gt(),ut(l,null,10,[e,o,s]),vt();return}}Xl(e,n,a,r)}function Xl(e,t,n,r=!0){console.error(e)}let mn=!1,Br=!1;const ge=[];let Ue=0;const $t=[];let ot=null,_t=0;const Go=Promise.resolve();let Sa=null;function qo(e){const t=Sa||Go;return e?t.then(this?e.bind(this):e):t}function Ql(e){let t=Ue+1,n=ge.length;for(;t<n;){const r=t+n>>>1,a=ge[r],i=hn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function Aa(e){(!ge.length||!ge.includes(e,mn&&e.allowRecurse?Ue+1:Ue))&&(e.id==null?ge.push(e):ge.splice(Ql(e.id),0,e),Xo())}function Xo(){!mn&&!Br&&(Br=!0,Sa=Go.then(Jo))}function Jl(e){const t=ge.indexOf(e);t>Ue&&ge.splice(t,1)}function Zl(e){U(e)?$t.push(...e):(!ot||!ot.includes(e,e.allowRecurse?_t+1:_t))&&$t.push(e),Xo()}function li(e,t,n=mn?Ue+1:0){for(;n<ge.length;n++){const r=ge[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ge.splice(n,1),n--,r()}}}function Qo(e){if($t.length){const t=[...new Set($t)].sort((n,r)=>hn(n)-hn(r));if($t.length=0,ot){ot.push(...t);return}for(ot=t,_t=0;_t<ot.length;_t++)ot[_t]();ot=null,_t=0}}const hn=e=>e.id==null?1/0:e.id,ec=(e,t)=>{const n=hn(e)-hn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Jo(e){Br=!1,mn=!0,ge.sort(ec);try{for(Ue=0;Ue<ge.length;Ue++){const t=ge[Ue];t&&t.active!==!1&&ut(t,null,14)}}finally{Ue=0,ge.length=0,Qo(),mn=!1,Sa=null,(ge.length||$t.length)&&Jo()}}function tc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[c]||re;h&&(a=n.map(g=>de(g)?g.trim():g)),m&&(a=n.map(vl))}let s,l=r[s=kr(t)]||r[s=kr(Dt(t))];!l&&i&&(l=r[s=kr(Wt(t))]),l&&Ne(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ne(f,e,6,a)}}function Zo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!V(e)){const l=f=>{const c=Zo(f,t,!0);c&&(s=!0,fe(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(oe(e)&&r.set(e,null),null):(U(i)?i.forEach(l=>o[l]=null):fe(o,i),oe(e)&&r.set(e,o),o)}function hr(e,t){return!e||!lr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Wt(t))||Y(e,t))}let Be=null,pr=null;function tr(e){const t=Be;return Be=e,pr=e&&e.type.__scopeId||null,t}function nc(e){pr=e}function rc(){pr=null}function ac(e,t=Be,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&bi(-1);const i=tr(t);let o;try{o=e(...a)}finally{tr(i),r._d&&bi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ar(e){const{type:t,vnode:n,proxy:r,withProxy:a,propsOptions:[i],slots:o,attrs:s,emit:l,render:f,renderCache:c,props:m,data:h,setupState:g,ctx:A,inheritAttrs:R}=e,j=tr(e);let y,_;try{if(n.shapeFlag&4){const z=a||r,B=z;y=He(f.call(B,z,c,m,g,h,A)),_=s}else{const z=t;y=He(z.length>1?z(m,{attrs:s,slots:o,emit:l}):z(m,null)),_=t.props?s:ic(s)}}catch(z){on.length=0,mr(z,e,1),y=ve(pn)}let C=y;if(_&&R!==!1){const z=Object.keys(_),{shapeFlag:B}=C;z.length&&B&7&&(i&&z.some(ma)&&(_=oc(_,i)),C=Ht(C,_))}return n.dirs&&(C=Ht(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),y=C,tr(j),y}const ic=e=>{let t;for(const n in e)(n==="class"||n==="style"||lr(n))&&((t||(t={}))[n]=e[n]);return t},oc=(e,t)=>{const n={};for(const r in e)(!ma(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function sc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ci(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(o[h]!==r[h]&&!hr(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ci(r,o,f):!0:!!o;return!1}function ci(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!hr(n,i))return!0}return!1}function lc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const cc=Symbol.for("v-ndc"),fc=e=>e.__isSuspense;function uc(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):Zl(e)}const dc=Symbol.for("v-scx"),mc=()=>qe(dc),Fn={};function nn(e,t,n){return es(e,t,n)}function es(e,t,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=re){if(t&&i){const $=t;t=(...Z)=>{$(...Z),B()}}const l=ye,f=$=>r===!0?$:Nt($,r===!1?1:void 0);let c,m=!1,h=!1;if(ke(e)?(c=()=>e.value,m=er(e)):tn(e)?(c=()=>f(e),m=!0):U(e)?(h=!0,m=e.some($=>tn($)||er($)),c=()=>e.map($=>{if(ke($))return $.value;if(tn($))return f($);if(V($))return ut($,l,2)})):V(e)?t?c=()=>ut(e,l,2):c=()=>(g&&g(),Ne(e,l,3,[A])):c=Pe,t&&r){const $=c;c=()=>Nt($())}let g,A=$=>{g=C.onStop=()=>{ut($,l,4),g=C.onStop=void 0}},R;if(br)if(A=Pe,t?n&&Ne(t,l,3,[c(),h?[]:void 0,A]):c(),a==="sync"){const $=mc();R=$.__watcherHandles||($.__watcherHandles=[])}else return Pe;let j=h?new Array(e.length).fill(Fn):Fn;const y=()=>{if(!(!C.active||!C.dirty))if(t){const $=C.run();(r||m||(h?$.some((Z,me)=>dt(Z,j[me])):dt($,j)))&&(g&&g(),Ne(t,l,3,[$,j===Fn?void 0:h&&j[0]===Fn?[]:j,A]),j=$)}else C.run()};y.allowRecurse=!!t;let _;a==="sync"?_=y:a==="post"?_=()=>xe(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),_=()=>Aa(y));const C=new ba(c,Pe,_),z=Al(),B=()=>{C.stop(),z&&ha(z.effects,C)};return t?n?y():j=C.run():a==="post"?xe(C.run.bind(C),l&&l.suspense):C.run(),R&&R.push(B),B}function hc(e,t,n){const r=this.proxy,a=de(e)?e.includes(".")?ts(r,e):()=>r[e]:e.bind(r,r);let i;V(t)?i=t:(i=t.handler,n=t);const o=An(this),s=es(a,i.bind(r),n);return o(),s}function ts(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Nt(e,t,n=0,r){if(!oe(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),ke(e))Nt(e.value,t,n,r);else if(U(e))for(let a=0;a<e.length;a++)Nt(e[a],t,n,r);else if(ul(e)||Zt(e))e.forEach(a=>{Nt(a,t,n,r)});else if(hl(e))for(const a in e)Nt(e[a],t,n,r);return e}function yt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(gt(),Ne(l,n,8,[e.el,s,e,t]),vt())}}/*! #__NO_SIDE_EFFECTS__ */function Sn(e,t){return V(e)?fe({name:e.name},t,{setup:e}):e}const Kn=e=>!!e.type.__asyncLoader,ns=e=>e.type.__isKeepAlive;function pc(e,t){rs(e,"a",t)}function gc(e,t){rs(e,"da",t)}function rs(e,t,n=ye){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(gr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ns(a.parent.vnode)&&vc(r,t,n,a),a=a.parent}}function vc(e,t,n,r){const a=gr(t,e,r,!0);as(()=>{ha(r[t],a)},n)}function gr(e,t,n=ye,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;gt();const s=An(n),l=Ne(t,n,e,o);return s(),vt(),l});return r?a.unshift(i):a.push(i),i}}const Ze=e=>(t,n=ye)=>(!br||e==="sp")&&gr(e,(...r)=>t(...r),n),bc=Ze("bm"),yc=Ze("m"),wc=Ze("bu"),_c=Ze("u"),xc=Ze("bum"),as=Ze("um"),Ec=Ze("sp"),kc=Ze("rtg"),Sc=Ze("rtc");function Ac(e,t=ye){gr("ec",e,t)}const Vr=e=>e?bs(e)?Ta(e)||e.proxy:Vr(e.parent):null,rn=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vr(e.parent),$root:e=>Vr(e.root),$emit:e=>e.emit,$options:e=>Oa(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Aa(e.update)}),$nextTick:e=>e.n||(e.n=qo.bind(e.proxy)),$watch:e=>hc.bind(e)}),Or=(e,t)=>e!==re&&!e.__isScriptSetup&&Y(e,t),Oc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Or(r,t))return o[t]=1,r[t];if(a!==re&&Y(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&Y(f,t))return o[t]=3,i[t];if(n!==re&&Y(n,t))return o[t]=4,n[t];Wr&&(o[t]=0)}}const c=rn[t];let m,h;if(c)return t==="$attrs"&&Ee(e.attrs,"get",""),c(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==re&&Y(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,Y(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Or(a,t)?(a[t]=n,!0):r!==re&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&Y(e,o)||Or(t,o)||(s=i[0])&&Y(s,o)||Y(r,o)||Y(rn,o)||Y(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function fi(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Wr=!0;function Pc(e){const t=Oa(e),n=e.proxy,r=e.ctx;Wr=!1,t.beforeCreate&&ui(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:m,mounted:h,beforeUpdate:g,updated:A,activated:R,deactivated:j,beforeDestroy:y,beforeUnmount:_,destroyed:C,unmounted:z,render:B,renderTracked:$,renderTriggered:Z,errorCaptured:me,serverPrefetch:he,expose:Oe,inheritAttrs:tt,components:bt,directives:Fe,filters:Kt}=t;if(f&&Cc(f,r,null),o)for(const Q in o){const K=o[Q];V(K)&&(r[Q]=K.bind(n))}if(a){const Q=a.call(n,n);oe(Q)&&(e.data=dr(Q))}if(Wr=!0,i)for(const Q in i){const K=i[Q],We=V(K)?K.bind(n,n):V(K.get)?K.get.bind(n,n):Pe,nt=!V(K)&&V(K.set)?K.set.bind(n):Pe,je=ue({get:We,set:nt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>je.value,set:we=>je.value=we})}if(s)for(const Q in s)is(s[Q],r,n,Q);if(l){const Q=V(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(K=>{Gn(K,Q[K])})}c&&ui(c,e,"c");function le(Q,K){U(K)?K.forEach(We=>Q(We.bind(n))):K&&Q(K.bind(n))}if(le(bc,m),le(yc,h),le(wc,g),le(_c,A),le(pc,R),le(gc,j),le(Ac,me),le(Sc,$),le(kc,Z),le(xc,_),le(as,z),le(Ec,he),U(Oe))if(Oe.length){const Q=e.exposed||(e.exposed={});Oe.forEach(K=>{Object.defineProperty(Q,K,{get:()=>n[K],set:We=>n[K]=We})})}else e.exposed||(e.exposed={});B&&e.render===Pe&&(e.render=B),tt!=null&&(e.inheritAttrs=tt),bt&&(e.components=bt),Fe&&(e.directives=Fe)}function Cc(e,t,n=Pe){U(e)&&(e=Yr(e));for(const r in e){const a=e[r];let i;oe(a)?"default"in a?i=qe(a.from||r,a.default,!0):i=qe(a.from||r):i=qe(a),ke(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ui(e,t,n){Ne(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function is(e,t,n,r){const a=r.includes(".")?ts(n,r):()=>n[r];if(de(e)){const i=t[e];V(i)&&nn(a,i)}else if(V(e))nn(a,e.bind(n));else if(oe(e))if(U(e))e.forEach(i=>is(i,t,n,r));else{const i=V(e.handler)?e.handler.bind(n):t[e.handler];V(i)&&nn(a,i,e)}}function Oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>nr(l,f,o,!0)),nr(l,t,o)),oe(t)&&i.set(t,l),l}function nr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&nr(e,i,n,!0),a&&a.forEach(o=>nr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Rc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Rc={data:di,props:mi,emits:mi,methods:Qt,computed:Qt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Qt,directives:Qt,watch:Tc,provide:di,inject:Ic};function di(e,t){return t?e?function(){return fe(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function Ic(e,t){return Qt(Yr(e),Yr(t))}function Yr(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Qt(e,t){return e?fe(Object.create(null),e,t):t}function mi(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:fe(Object.create(null),fi(e),fi(t??{})):t}function Tc(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function os(){return{app:null,config:{isNativeTag:cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lc=0;function Nc(e,t){return function(r,a=null){V(r)||(r=fe({},r)),a!=null&&!oe(a)&&(a=null);const i=os(),o=new WeakSet;let s=!1;const l=i.app={_uid:Lc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:sf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&V(f.install)?(o.add(f),f.install(l,...c)):V(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,m){if(!s){const h=ve(r,a);return h.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),c&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,Ta(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l},runWithContext(f){const c=an;an=l;try{return f()}finally{an=c}}};return l}}let an=null;function Gn(e,t){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[e]=t}}function qe(e,t,n=!1){const r=ye||Be;if(r||an){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:an._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&V(t)?t.call(r&&r.proxy):t}}const ss=Object.create(null),ls=()=>Object.create(ss),cs=e=>Object.getPrototypeOf(e)===ss;function Mc(e,t,n,r=!1){const a={},i=ls();e.propsDefaults=Object.create(null),fs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:zo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Fc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=G(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(hr(e.emitsOptions,h))continue;const g=t[h];if(l)if(Y(i,h))g!==i[h]&&(i[h]=g,f=!0);else{const A=Dt(h);a[A]=Kr(l,s,A,g,e,!1)}else g!==i[h]&&(i[h]=g,f=!0)}}}else{fs(e,t,a,i)&&(f=!0);let c;for(const m in s)(!t||!Y(t,m)&&((c=Wt(m))===m||!Y(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(a[m]=Kr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!Y(t,m))&&(delete i[m],f=!0)}f&&Ge(e.attrs,"set","")}function fs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(en(l))continue;const f=t[l];let c;a&&Y(a,c=Dt(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:hr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=G(n),f=s||re;for(let c=0;c<i.length;c++){const m=i[c];n[m]=Kr(a,l,m,f[m],e,!Y(f,m))}}return o}function Kr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&V(l)){const{propsDefaults:f}=a;if(n in f)r=f[n];else{const c=An(a);r=f[n]=l.call(null,t),c()}}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Wt(n))&&(r=!0))}return r}function us(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!V(e)){const c=m=>{l=!0;const[h,g]=us(m,t,!0);fe(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return oe(e)&&r.set(e,jt),jt;if(U(i))for(let c=0;c<i.length;c++){const m=Dt(i[c]);hi(m)&&(o[m]=re)}else if(i)for(const c in i){const m=Dt(c);if(hi(m)){const h=i[c],g=o[m]=U(h)||V(h)?{type:h}:fe({},h);if(g){const A=vi(Boolean,g.type),R=vi(String,g.type);g[0]=A>-1,g[1]=R<0||A<R,(A>-1||Y(g,"default"))&&s.push(m)}}}const f=[o,s];return oe(e)&&r.set(e,f),f}function hi(e){return e[0]!=="$"&&!en(e)}function pi(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function gi(e,t){return pi(e)===pi(t)}function vi(e,t){return U(t)?t.findIndex(n=>gi(n,e)):V(t)&&gi(t,e)?0:-1}const ds=e=>e[0]==="_"||e==="$stable",Pa=e=>U(e)?e.map(He):[He(e)],jc=(e,t,n)=>{if(t._n)return t;const r=ac((...a)=>Pa(t(...a)),n);return r._c=!1,r},ms=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ds(a))continue;const i=e[a];if(V(i))t[a]=jc(a,i,r);else if(i!=null){const o=Pa(i);t[a]=()=>o}}},hs=(e,t)=>{const n=Pa(t);e.slots.default=()=>n},$c=(e,t)=>{const n=e.slots=ls();if(e.vnode.shapeFlag&32){const r=t._;r?(fe(n,t),ko(n,"_",r)):ms(t,n)}else t&&hs(e,t)},zc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ms(t,a)),o=t}else t&&(hs(e,t),o={default:1});if(i)for(const s in a)!ds(s)&&o[s]==null&&delete a[s]};function Gr(e,t,n,r,a=!1){if(U(e)){e.forEach((h,g)=>Gr(h,t&&(U(t)?t[g]:t),n,r,a));return}if(Kn(r)&&!a)return;const i=r.shapeFlag&4?Ta(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===re?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(de(f)?(c[f]=null,Y(m,f)&&(m[f]=null)):ke(f)&&(f.value=null)),V(l))ut(l,s,12,[o,c]);else{const h=de(l),g=ke(l);if(h||g){const A=()=>{if(e.f){const R=h?Y(m,l)?m[l]:c[l]:l.value;a?U(R)&&ha(R,i):U(R)?R.includes(i)||R.push(i):h?(c[l]=[i],Y(m,l)&&(m[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,Y(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,xe(A,n)):A()}}}const xe=uc;function Dc(e){return Hc(e)}function Hc(e,t){const n=So();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:m,nextSibling:h,setScopeId:g=Pe,insertStaticContent:A}=e,R=(u,d,p,w=null,v=null,k=null,P=void 0,E=null,S=!!d.dynamicChildren)=>{if(u===d)return;u&&!qt(u,d)&&(w=b(u),we(u,v,k,!0),u=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:x,ref:L,shapeFlag:D}=d;switch(x){case vr:j(u,d,p,w);break;case pn:y(u,d,p,w);break;case qn:u==null&&_(d,p,w,P);break;case De:bt(u,d,p,w,v,k,P,E,S);break;default:D&1?B(u,d,p,w,v,k,P,E,S):D&6?Fe(u,d,p,w,v,k,P,E,S):(D&64||D&128)&&x.process(u,d,p,w,v,k,P,E,S,M)}L!=null&&v&&Gr(L,u&&u.ref,k,d||u,!d)},j=(u,d,p,w)=>{if(u==null)r(d.el=s(d.children),p,w);else{const v=d.el=u.el;d.children!==u.children&&f(v,d.children)}},y=(u,d,p,w)=>{u==null?r(d.el=l(d.children||""),p,w):d.el=u.el},_=(u,d,p,w)=>{[u.el,u.anchor]=A(u.children,d,p,w,u.el,u.anchor)},C=({el:u,anchor:d},p,w)=>{let v;for(;u&&u!==d;)v=h(u),r(u,p,w),u=v;r(d,p,w)},z=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=h(u),a(u),u=p;a(d)},B=(u,d,p,w,v,k,P,E,S)=>{d.type==="svg"?P="svg":d.type==="math"&&(P="mathml"),u==null?$(d,p,w,v,k,P,E,S):he(u,d,v,k,P,E,S)},$=(u,d,p,w,v,k,P,E)=>{let S,x;const{props:L,shapeFlag:D,transition:F,dirs:H}=u;if(S=u.el=o(u.type,k,L&&L.is,L),D&8?c(S,u.children):D&16&&me(u.children,S,null,w,v,Pr(u,k),P,E),H&&yt(u,null,w,"created"),Z(S,u,u.scopeId,P,w),L){for(const J in L)J!=="value"&&!en(J)&&i(S,J,null,L[J],k,u.children,w,v,pe);"value"in L&&i(S,"value",null,L.value,k),(x=L.onVnodeBeforeMount)&&ze(x,w,u)}H&&yt(u,null,w,"beforeMount");const W=Uc(v,F);W&&F.beforeEnter(S),r(S,d,p),((x=L&&L.onVnodeMounted)||W||H)&&xe(()=>{x&&ze(x,w,u),W&&F.enter(S),H&&yt(u,null,w,"mounted")},v)},Z=(u,d,p,w,v)=>{if(p&&g(u,p),w)for(let k=0;k<w.length;k++)g(u,w[k]);if(v){let k=v.subTree;if(d===k){const P=v.vnode;Z(u,P,P.scopeId,P.slotScopeIds,v.parent)}}},me=(u,d,p,w,v,k,P,E,S=0)=>{for(let x=S;x<u.length;x++){const L=u[x]=E?st(u[x]):He(u[x]);R(null,L,d,p,w,v,k,P,E)}},he=(u,d,p,w,v,k,P)=>{const E=d.el=u.el;let{patchFlag:S,dynamicChildren:x,dirs:L}=d;S|=u.patchFlag&16;const D=u.props||re,F=d.props||re;let H;if(p&&wt(p,!1),(H=F.onVnodeBeforeUpdate)&&ze(H,p,d,u),L&&yt(d,u,p,"beforeUpdate"),p&&wt(p,!0),x?Oe(u.dynamicChildren,x,E,p,w,Pr(d,v),k):P||K(u,d,E,null,p,w,Pr(d,v),k,!1),S>0){if(S&16)tt(E,d,D,F,p,w,v);else if(S&2&&D.class!==F.class&&i(E,"class",null,F.class,v),S&4&&i(E,"style",D.style,F.style,v),S&8){const W=d.dynamicProps;for(let J=0;J<W.length;J++){const ne=W[J],ce=D[ne],Ce=F[ne];(Ce!==ce||ne==="value")&&i(E,ne,ce,Ce,v,u.children,p,w,pe)}}S&1&&u.children!==d.children&&c(E,d.children)}else!P&&x==null&&tt(E,d,D,F,p,w,v);((H=F.onVnodeUpdated)||L)&&xe(()=>{H&&ze(H,p,d,u),L&&yt(d,u,p,"updated")},w)},Oe=(u,d,p,w,v,k,P)=>{for(let E=0;E<d.length;E++){const S=u[E],x=d[E],L=S.el&&(S.type===De||!qt(S,x)||S.shapeFlag&70)?m(S.el):p;R(S,x,L,null,w,v,k,P,!0)}},tt=(u,d,p,w,v,k,P)=>{if(p!==w){if(p!==re)for(const E in p)!en(E)&&!(E in w)&&i(u,E,p[E],null,P,d.children,v,k,pe);for(const E in w){if(en(E))continue;const S=w[E],x=p[E];S!==x&&E!=="value"&&i(u,E,x,S,P,d.children,v,k,pe)}"value"in w&&i(u,"value",p.value,w.value,P)}},bt=(u,d,p,w,v,k,P,E,S)=>{const x=d.el=u?u.el:s(""),L=d.anchor=u?u.anchor:s("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:H}=d;H&&(E=E?E.concat(H):H),u==null?(r(x,p,w),r(L,p,w),me(d.children||[],p,L,v,k,P,E,S)):D>0&&D&64&&F&&u.dynamicChildren?(Oe(u.dynamicChildren,F,p,v,k,P,E),(d.key!=null||v&&d===v.subTree)&&ps(u,d,!0)):K(u,d,p,L,v,k,P,E,S)},Fe=(u,d,p,w,v,k,P,E,S)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?v.ctx.activate(d,p,w,P,S):Kt(d,p,w,v,k,P,S):Ct(u,d,S)},Kt=(u,d,p,w,v,k,P)=>{const E=u.component=ef(u,w,v);if(ns(u)&&(E.ctx.renderer=M),tf(E),E.asyncDep){if(v&&v.registerDep(E,le),!u.el){const S=E.subTree=ve(pn);y(null,S,d,p)}}else le(E,u,d,p,v,k,P)},Ct=(u,d,p)=>{const w=d.component=u.component;if(sc(u,d,p))if(w.asyncDep&&!w.asyncResolved){Q(w,d,p);return}else w.next=d,Jl(w.update),w.effect.dirty=!0,w.update();else d.el=u.el,w.vnode=d},le=(u,d,p,w,v,k,P)=>{const E=()=>{if(u.isMounted){let{next:L,bu:D,u:F,parent:H,vnode:W}=u;{const Tt=gs(u);if(Tt){L&&(L.el=W.el,Q(u,L,P)),Tt.asyncDep.then(()=>{u.isUnmounted||E()});return}}let J=L,ne;wt(u,!1),L?(L.el=W.el,Q(u,L,P)):L=W,D&&Sr(D),(ne=L.props&&L.props.onVnodeBeforeUpdate)&&ze(ne,H,L,W),wt(u,!0);const ce=Ar(u),Ce=u.subTree;u.subTree=ce,R(Ce,ce,m(Ce.el),b(Ce),u,v,k),L.el=ce.el,J===null&&lc(u,ce.el),F&&xe(F,v),(ne=L.props&&L.props.onVnodeUpdated)&&xe(()=>ze(ne,H,L,W),v)}else{let L;const{el:D,props:F}=d,{bm:H,m:W,parent:J}=u,ne=Kn(d);if(wt(u,!1),H&&Sr(H),!ne&&(L=F&&F.onVnodeBeforeMount)&&ze(L,J,d),wt(u,!0),D&&ae){const ce=()=>{u.subTree=Ar(u),ae(D,u.subTree,u,v,null)};ne?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ce()):ce()}else{const ce=u.subTree=Ar(u);R(null,ce,p,w,u,v,k),d.el=ce.el}if(W&&xe(W,v),!ne&&(L=F&&F.onVnodeMounted)){const ce=d;xe(()=>ze(L,J,ce),v)}(d.shapeFlag&256||J&&Kn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&xe(u.a,v),u.isMounted=!0,d=p=w=null}},S=u.effect=new ba(E,Pe,()=>Aa(x),u.scope),x=u.update=()=>{S.dirty&&S.run()};x.id=u.uid,wt(u,!0),x()},Q=(u,d,p)=>{d.component=u;const w=u.vnode.props;u.vnode=d,u.next=null,Fc(u,d.props,w,p),zc(u,d.children,p),gt(),li(u),vt()},K=(u,d,p,w,v,k,P,E,S=!1)=>{const x=u&&u.children,L=u?u.shapeFlag:0,D=d.children,{patchFlag:F,shapeFlag:H}=d;if(F>0){if(F&128){nt(x,D,p,w,v,k,P,E,S);return}else if(F&256){We(x,D,p,w,v,k,P,E,S);return}}H&8?(L&16&&pe(x,v,k),D!==x&&c(p,D)):L&16?H&16?nt(x,D,p,w,v,k,P,E,S):pe(x,v,k,!0):(L&8&&c(p,""),H&16&&me(D,p,w,v,k,P,E,S))},We=(u,d,p,w,v,k,P,E,S)=>{u=u||jt,d=d||jt;const x=u.length,L=d.length,D=Math.min(x,L);let F;for(F=0;F<D;F++){const H=d[F]=S?st(d[F]):He(d[F]);R(u[F],H,p,null,v,k,P,E,S)}x>L?pe(u,v,k,!0,!1,D):me(d,p,w,v,k,P,E,S,D)},nt=(u,d,p,w,v,k,P,E,S)=>{let x=0;const L=d.length;let D=u.length-1,F=L-1;for(;x<=D&&x<=F;){const H=u[x],W=d[x]=S?st(d[x]):He(d[x]);if(qt(H,W))R(H,W,p,null,v,k,P,E,S);else break;x++}for(;x<=D&&x<=F;){const H=u[D],W=d[F]=S?st(d[F]):He(d[F]);if(qt(H,W))R(H,W,p,null,v,k,P,E,S);else break;D--,F--}if(x>D){if(x<=F){const H=F+1,W=H<L?d[H].el:w;for(;x<=F;)R(null,d[x]=S?st(d[x]):He(d[x]),p,W,v,k,P,E,S),x++}}else if(x>F)for(;x<=D;)we(u[x],v,k,!0),x++;else{const H=x,W=x,J=new Map;for(x=W;x<=F;x++){const Se=d[x]=S?st(d[x]):He(d[x]);Se.key!=null&&J.set(Se.key,x)}let ne,ce=0;const Ce=F-W+1;let Tt=!1,Qa=0;const Gt=new Array(Ce);for(x=0;x<Ce;x++)Gt[x]=0;for(x=H;x<=D;x++){const Se=u[x];if(ce>=Ce){we(Se,v,k,!0);continue}let $e;if(Se.key!=null)$e=J.get(Se.key);else for(ne=W;ne<=F;ne++)if(Gt[ne-W]===0&&qt(Se,d[ne])){$e=ne;break}$e===void 0?we(Se,v,k,!0):(Gt[$e-W]=x+1,$e>=Qa?Qa=$e:Tt=!0,R(Se,d[$e],p,null,v,k,P,E,S),ce++)}const Ja=Tt?Bc(Gt):jt;for(ne=Ja.length-1,x=Ce-1;x>=0;x--){const Se=W+x,$e=d[Se],Za=Se+1<L?d[Se+1].el:w;Gt[x]===0?R(null,$e,p,Za,v,k,P,E,S):Tt&&(ne<0||x!==Ja[ne]?je($e,p,Za,2):ne--)}}},je=(u,d,p,w,v=null)=>{const{el:k,type:P,transition:E,children:S,shapeFlag:x}=u;if(x&6){je(u.component.subTree,d,p,w);return}if(x&128){u.suspense.move(d,p,w);return}if(x&64){P.move(u,d,p,M);return}if(P===De){r(k,d,p);for(let D=0;D<S.length;D++)je(S[D],d,p,w);r(u.anchor,d,p);return}if(P===qn){C(u,d,p);return}if(w!==2&&x&1&&E)if(w===0)E.beforeEnter(k),r(k,d,p),xe(()=>E.enter(k),v);else{const{leave:D,delayLeave:F,afterLeave:H}=E,W=()=>r(k,d,p),J=()=>{D(k,()=>{W(),H&&H()})};F?F(k,W,J):J()}else r(k,d,p)},we=(u,d,p,w=!1,v=!1)=>{const{type:k,props:P,ref:E,children:S,dynamicChildren:x,shapeFlag:L,patchFlag:D,dirs:F}=u;if(E!=null&&Gr(E,null,p,u,!0),L&256){d.ctx.deactivate(u);return}const H=L&1&&F,W=!Kn(u);let J;if(W&&(J=P&&P.onVnodeBeforeUnmount)&&ze(J,d,u),L&6)Rn(u.component,p,w);else{if(L&128){u.suspense.unmount(p,w);return}H&&yt(u,null,d,"beforeUnmount"),L&64?u.type.remove(u,d,p,v,M,w):x&&(k!==De||D>0&&D&64)?pe(x,d,p,!1,!0):(k===De&&D&384||!v&&L&16)&&pe(S,d,p),w&&Rt(u)}(W&&(J=P&&P.onVnodeUnmounted)||H)&&xe(()=>{J&&ze(J,d,u),H&&yt(u,null,d,"unmounted")},p)},Rt=u=>{const{type:d,el:p,anchor:w,transition:v}=u;if(d===De){It(p,w);return}if(d===qn){z(u);return}const k=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:E}=v,S=()=>P(p,k);E?E(u.el,k,S):S()}else k()},It=(u,d)=>{let p;for(;u!==d;)p=h(u),a(u),u=p;a(d)},Rn=(u,d,p)=>{const{bum:w,scope:v,update:k,subTree:P,um:E}=u;w&&Sr(w),v.stop(),k&&(k.active=!1,we(P,u,d,p)),E&&xe(E,d),xe(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},pe=(u,d,p,w=!1,v=!1,k=0)=>{for(let P=k;P<u.length;P++)we(u[P],d,p,w,v)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el);let T=!1;const O=(u,d,p)=>{u==null?d._vnode&&we(d._vnode,null,null,!0):R(d._vnode||null,u,d,null,null,null,p),T||(T=!0,li(),Qo(),T=!1),d._vnode=u},M={p:R,um:we,m:je,r:Rt,mt:Kt,mc:me,pc:K,pbc:Oe,n:b,o:e};let q,ae;return{render:O,hydrate:q,createApp:Nc(O,q)}}function Pr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Uc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ps(e,t,n=!1){const r=e.children,a=t.children;if(U(r)&&U(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=st(a[i]),s.el=o.el),n||ps(o,s)),s.type===vr&&(s.el=o.el)}}function Bc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function gs(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:gs(t)}const Vc=e=>e.__isTeleport,De=Symbol.for("v-fgt"),vr=Symbol.for("v-txt"),pn=Symbol.for("v-cmt"),qn=Symbol.for("v-stc"),on=[];let Te=null;function Ca(e=!1){on.push(Te=e?null:[])}function Wc(){on.pop(),Te=on[on.length-1]||null}let gn=1;function bi(e){gn+=e}function Yc(e){return e.dynamicChildren=gn>0?Te||jt:null,Wc(),gn>0&&Te&&Te.push(e),e}function Ra(e,t,n,r,a,i){return Yc(Ie(e,t,n,r,a,i,!0))}function qr(e){return e?e.__v_isVNode===!0:!1}function qt(e,t){return e.type===t.type&&e.key===t.key}const vs=({key:e})=>e??null,Xn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||ke(e)||V(e)?{i:Be,r:e,k:t,f:!!n}:e:null);function Ie(e,t=null,n=null,r=0,a=null,i=e===De?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vs(t),ref:t&&Xn(t),scopeId:pr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Be};return s?(Ia(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),gn>0&&!o&&Te&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Te.push(l),l}const ve=Kc;function Kc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===cc)&&(e=pn),qr(e)){const s=Ht(e,t,!0);return n&&Ia(s,n),gn>0&&!i&&Te&&(s.shapeFlag&6?Te[Te.indexOf(e)]=s:Te.push(s)),s.patchFlag|=-2,s}if(of(e)&&(e=e.__vccOpts),t){t=Gc(t);let{class:s,style:l}=t;s&&!de(s)&&(t.class=va(s)),oe(l)&&(Ho(l)&&!U(l)&&(l=fe({},l)),t.style=ga(l))}const o=de(e)?1:fc(e)?128:Vc(e)?64:oe(e)?4:V(e)?2:0;return Ie(e,t,n,r,a,o,i,!0)}function Gc(e){return e?Ho(e)||cs(e)?fe({},e):e:null}function Ht(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Qc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&vs(s),ref:t&&t.ref?n&&a?U(a)?a.concat(Xn(t)):[a,Xn(t)]:Xn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==De?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function qc(e=" ",t=0){return ve(vr,null,e,t)}function Xc(e,t){const n=ve(qn,null,e);return n.staticCount=t,n}function He(e){return e==null||typeof e=="boolean"?ve(pn):U(e)?ve(De,null,e.slice()):typeof e=="object"?st(e):ve(vr,null,String(e))}function st(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function Ia(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ia(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!cs(t)?t._ctx=Be:a===3&&Be&&(Be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Be},n=32):(t=String(t),r&64?(n=16,t=[qc(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=va([t.class,r.class]));else if(a==="style")t.style=ga([t.style,r.style]);else if(lr(a)){const i=t[a],o=r[a];o&&i!==o&&!(U(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function ze(e,t,n,r=null){Ne(e,t,7,[n,r])}const Jc=os();let Zc=0;function ef(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Jc,i={uid:Zc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Oo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:us(r,a),emitsOptions:Zo(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=tc.bind(null,i),e.ce&&e.ce(i),i}let ye=null,rr,Xr;{const e=So(),t=(n,r)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};rr=t("__VUE_INSTANCE_SETTERS__",n=>ye=n),Xr=t("__VUE_SSR_SETTERS__",n=>br=n)}const An=e=>{const t=ye;return rr(e),e.scope.on(),()=>{e.scope.off(),rr(t)}},yi=()=>{ye&&ye.scope.off(),rr(null)};function bs(e){return e.vnode.shapeFlag&4}let br=!1;function tf(e,t=!1){t&&Xr(t);const{props:n,children:r}=e.vnode,a=bs(e);Mc(e,n,a,t),$c(e,r);const i=a?nf(e,t):void 0;return t&&Xr(!1),i}function nf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Oc);const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?af(e):null,i=An(e);gt();const o=ut(r,e,0,[e.props,a]);if(vt(),i(),xo(o)){if(o.then(yi,yi),t)return o.then(s=>{wi(e,s,t)}).catch(s=>{mr(s,e,0)});e.asyncDep=o}else wi(e,o,t)}else ys(e,t)}function wi(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Ko(t)),ys(e,n)}let _i;function ys(e,t,n){const r=e.type;if(!e.render){if(!t&&_i&&!r.render){const a=r.template||Oa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=_i(a,f)}}e.render=r.render||Pe}{const a=An(e);gt();try{Pc(e)}finally{vt(),a()}}}const rf={get(e,t){return Ee(e,"get",""),e[t]}};function af(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,rf),slots:e.slots,emit:e.emit,expose:t}}function Ta(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ko(Uo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in rn)return rn[n](e)},has(t,n){return n in t||n in rn}}))}function of(e){return V(e)&&"__vccOpts"in e}const ue=(e,t)=>Yl(e,t,br);function La(e,t,n){const r=arguments.length;return r===2?oe(t)&&!U(t)?qr(t)?ve(e,null,[t]):ve(e,t):ve(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qr(n)&&(n=[n]),ve(e,t,n))}const sf="3.4.24";/**
* @vue/runtime-dom v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const lf="http://www.w3.org/2000/svg",cf="http://www.w3.org/1998/Math/MathML",lt=typeof document<"u"?document:null,xi=lt&&lt.createElement("template"),ff={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t==="svg"?lt.createElementNS(lf,e):t==="mathml"?lt.createElementNS(cf,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{xi.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const s=xi.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},uf=Symbol("_vtc");function df(e,t,n){const r=e[uf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ei=Symbol("_vod"),mf=Symbol("_vsh"),hf=Symbol(""),pf=/(^|;)\s*display\s*:/;function gf(e,t,n){const r=e.style,a=de(n);let i=!1;if(n&&!a){if(t)if(de(t))for(const o of t.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&Qn(r,s,"")}else for(const o in t)n[o]==null&&Qn(r,o,"");for(const o in n)o==="display"&&(i=!0),Qn(r,o,n[o])}else if(a){if(t!==n){const o=r[hf];o&&(n+=";"+o),r.cssText=n,i=pf.test(n)}}else t&&e.removeAttribute("style");Ei in e&&(e[Ei]=i?r.display:"",e[mf]&&(r.display="none"))}const ki=/\s*!important$/;function Qn(e,t,n){if(U(n))n.forEach(r=>Qn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=vf(e,t);ki.test(n)?e.setProperty(Wt(r),n.replace(ki,""),"important"):e[r]=n}}const Si=["Webkit","Moz","ms"],Cr={};function vf(e,t){const n=Cr[t];if(n)return n;let r=Dt(t);if(r!=="filter"&&r in e)return Cr[t]=r;r=Eo(r);for(let a=0;a<Si.length;a++){const i=Si[a]+r;if(i in e)return Cr[t]=i}return t}const Ai="http://www.w3.org/1999/xlink";function bf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ai,t.slice(6,t.length)):e.setAttributeNS(Ai,t,n);else{const i=El(t);n==null||i&&!Ao(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function yf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const f=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(f!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Ao(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function wf(e,t,n,r){e.addEventListener(t,n,r)}function _f(e,t,n,r){e.removeEventListener(t,n,r)}const Oi=Symbol("_vei");function xf(e,t,n,r,a=null){const i=e[Oi]||(e[Oi]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Ef(t);if(r){const f=i[t]=Af(r,a);wf(e,s,f,l)}else o&&(_f(e,s,o,l),i[t]=void 0)}}const Pi=/(?:Once|Passive|Capture)$/;function Ef(e){let t;if(Pi.test(e)){t={};let r;for(;r=e.match(Pi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Wt(e.slice(2)),t]}let Rr=0;const kf=Promise.resolve(),Sf=()=>Rr||(kf.then(()=>Rr=0),Rr=Date.now());function Af(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ne(Of(r,n.value),t,5,[r])};return n.value=e,n.attached=Sf(),n}function Of(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ci=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Pf=(e,t,n,r,a,i,o,s,l)=>{const f=a==="svg";t==="class"?df(e,r,f):t==="style"?gf(e,n,r):lr(t)?ma(t)||xf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cf(e,t,r,f))?yf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),bf(e,t,r,f))};function Cf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ci(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Ci(t)&&de(n)?!1:t in e}const Rf=fe({patchProp:Pf},ff);let Ri;function If(){return Ri||(Ri=Dc(Rf))}const Tf=(...e)=>{const t=If().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Nf(r);if(!a)return;const i=t._component;!V(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,Lf(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Lf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Nf(e){return de(e)?document.querySelector(e):e}var Mf=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Ff=Symbol();var Ii;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ii||(Ii={}));function jf(){const e=kl(!0),t=e.run(()=>Wo({}));let n=[],r=[];const a=Uo({install(i){a._a=i,i.provide(Ff,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Mf?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}function Ti(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ti(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ti(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ar(e){"@babel/helpers - typeof";return ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ar(e)}function $f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Df(e,t,n){return t&&zf(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Na(e,t){return Uf(e)||Vf(e,t)||ws(e,t)||Yf()}function On(e){return Hf(e)||Bf(e)||ws(e)||Wf()}function Hf(e){if(Array.isArray(e))return Qr(e)}function Uf(e){if(Array.isArray(e))return e}function Bf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Vf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ws(e,t){if(e){if(typeof e=="string")return Qr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qr(e,t)}}function Qr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Wf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Li=function(){},Ma={},_s={},xs=null,Es={mark:Li,measure:Li};try{typeof window<"u"&&(Ma=window),typeof document<"u"&&(_s=document),typeof MutationObserver<"u"&&(xs=MutationObserver),typeof performance<"u"&&(Es=performance)}catch{}var Kf=Ma.navigator||{},Ni=Kf.userAgent,Mi=Ni===void 0?"":Ni,mt=Ma,te=_s,Fi=xs,jn=Es;mt.document;var et=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",ks=~Mi.indexOf("MSIE")||~Mi.indexOf("Trident/"),$n,zn,Dn,Hn,Un,Xe="___FONT_AWESOME___",Jr=16,Ss="fa",As="svg-inline--fa",Ot="data-fa-i2svg",Zr="data-fa-pseudo-element",Gf="data-fa-pseudo-element-pending",Fa="data-prefix",ja="data-icon",ji="fontawesome-i2svg",qf="async",Xf=["HTML","HEAD","STYLE","SCRIPT"],Os=function(){try{return!0}catch{return!1}}(),ee="classic",ie="sharp",$a=[ee,ie];function Pn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ee]}})}var vn=Pn(($n={},se($n,ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),se($n,ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),$n)),bn=Pn((zn={},se(zn,ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),se(zn,ie,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),zn)),yn=Pn((Dn={},se(Dn,ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),se(Dn,ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Dn)),Qf=Pn((Hn={},se(Hn,ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),se(Hn,ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Hn)),Jf=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ps="fa-layers-text",Zf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,eu=Pn((Un={},se(Un,ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),se(Un,ie,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Un)),Cs=[1,2,3,4,5,6,7,8,9,10],tu=Cs.concat([11,12,13,14,15,16,17,18,19,20]),nu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wn=new Set;Object.keys(bn[ee]).map(wn.add.bind(wn));Object.keys(bn[ie]).map(wn.add.bind(wn));var ru=[].concat($a,On(wn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",xt.GROUP,xt.SWAP_OPACITY,xt.PRIMARY,xt.SECONDARY]).concat(Cs.map(function(e){return"".concat(e,"x")})).concat(tu.map(function(e){return"w-".concat(e)})),sn=mt.FontAwesomeConfig||{};function au(e){var t=te.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function iu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(te&&typeof te.querySelector=="function"){var ou=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ou.forEach(function(e){var t=Na(e,2),n=t[0],r=t[1],a=iu(au(n));a!=null&&(sn[r]=a)})}var Rs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ss,replacementClass:As,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};sn.familyPrefix&&(sn.cssPrefix=sn.familyPrefix);var Ut=I(I({},Rs),sn);Ut.autoReplaceSvg||(Ut.observeMutations=!1);var N={};Object.keys(Rs).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Ut[e]=n,ln.forEach(function(r){return r(N)})},get:function(){return Ut[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){Ut.cssPrefix=t,ln.forEach(function(n){return n(N)})},get:function(){return Ut.cssPrefix}});mt.FontAwesomeConfig=N;var ln=[];function su(e){return ln.push(e),function(){ln.splice(ln.indexOf(e),1)}}var at=Jr,Ve={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lu(e){if(!(!e||!et)){var t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=te.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return te.head.insertBefore(t,r),e}}var cu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _n(){for(var e=12,t="";e-- >0;)t+=cu[Math.random()*62|0];return t}function Yt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function za(e){return e.classList?Yt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Is(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Is(e[n]),'" ')},"").trim()}function yr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Da(e){return e.size!==Ve.size||e.x!==Ve.x||e.y!==Ve.y||e.rotate!==Ve.rotate||e.flipX||e.flipY}function uu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function du(e){var t=e.transform,n=e.width,r=n===void 0?Jr:n,a=e.height,i=a===void 0?Jr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ks?l+="translate(".concat(t.x/at-r/2,"em, ").concat(t.y/at-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/at,"em), calc(-50% + ").concat(t.y/at,"em)) "):l+="translate(".concat(t.x/at,"em, ").concat(t.y/at,"em) "),l+="scale(".concat(t.size/at*(t.flipX?-1:1),", ").concat(t.size/at*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var mu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
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
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  left: calc(var(--fa-li-width, 2em) * -1);
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
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
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
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ts(){var e=Ss,t=As,n=N.cssPrefix,r=N.replacementClass,a=mu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var $i=!1;function Ir(){N.autoAddCss&&!$i&&(lu(Ts()),$i=!0)}var hu={mixout:function(){return{dom:{css:Ts,insertCss:Ir}}},hooks:function(){return{beforeDOMElementCreation:function(){Ir()},beforeI2svg:function(){Ir()}}}},Qe=mt||{};Qe[Xe]||(Qe[Xe]={});Qe[Xe].styles||(Qe[Xe].styles={});Qe[Xe].hooks||(Qe[Xe].hooks={});Qe[Xe].shims||(Qe[Xe].shims=[]);var Le=Qe[Xe],Ls=[],pu=function e(){te.removeEventListener("DOMContentLoaded",e),ir=1,Ls.map(function(t){return t()})},ir=!1;et&&(ir=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),ir||te.addEventListener("DOMContentLoaded",pu));function gu(e){et&&(ir?setTimeout(e,0):Ls.push(e))}function Cn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Is(e):"<".concat(t," ").concat(fu(r),">").concat(i.map(Cn).join(""),"</").concat(t,">")}function zi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Tr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function vu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ea(e){var t=vu(e);return t.length===1?t[0].toString(16):null}function bu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Di(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ta(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Di(t);typeof Le.hooks.addPack=="function"&&!a?Le.hooks.addPack(e,Di(t)):Le.styles[e]=I(I({},Le.styles[e]||{}),i),e==="fas"&&ta("fa",t)}var Bn,Vn,Wn,Mt=Le.styles,yu=Le.shims,wu=(Bn={},se(Bn,ee,Object.values(yn[ee])),se(Bn,ie,Object.values(yn[ie])),Bn),Ha=null,Ns={},Ms={},Fs={},js={},$s={},_u=(Vn={},se(Vn,ee,Object.keys(vn[ee])),se(Vn,ie,Object.keys(vn[ie])),Vn);function xu(e){return~ru.indexOf(e)}function Eu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!xu(a)?a:null}var zs=function(){var t=function(i){return Tr(Mt,function(o,s,l){return o[l]=Tr(s,i,{}),o},{})};Ns=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ms=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),$s=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Mt||N.autoFetchSvg,r=Tr(yu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Fs=r.names,js=r.unicodes,Ha=wr(N.styleDefault,{family:N.familyDefault})};su(function(e){Ha=wr(e.styleDefault,{family:N.familyDefault})});zs();function Ua(e,t){return(Ns[e]||{})[t]}function ku(e,t){return(Ms[e]||{})[t]}function Et(e,t){return($s[e]||{})[t]}function Ds(e){return Fs[e]||{prefix:null,iconName:null}}function Su(e){var t=js[e],n=Ua("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ht(){return Ha}var Ba=function(){return{prefix:null,iconName:null,rest:[]}};function wr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ee:n,a=vn[r][e],i=bn[r][e]||bn[r][a],o=e in Le.styles?e:null;return i||o||null}var Hi=(Wn={},se(Wn,ee,Object.keys(yn[ee])),se(Wn,ie,Object.keys(yn[ie])),Wn);function _r(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},se(t,ee,"".concat(N.cssPrefix,"-").concat(ee)),se(t,ie,"".concat(N.cssPrefix,"-").concat(ie)),t),o=null,s=ee;(e.includes(i[ee])||e.some(function(f){return Hi[ee].includes(f)}))&&(s=ee),(e.includes(i[ie])||e.some(function(f){return Hi[ie].includes(f)}))&&(s=ie);var l=e.reduce(function(f,c){var m=Eu(N.cssPrefix,c);if(Mt[c]?(c=wu[s].includes(c)?Qf[s][c]:c,o=c,f.prefix=c):_u[s].indexOf(c)>-1?(o=c,f.prefix=wr(c,{family:s})):m?f.iconName=m:c!==N.replacementClass&&c!==i[ee]&&c!==i[ie]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var h=o==="fa"?Ds(f.iconName):{},g=Et(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Mt.far&&Mt.fas&&!N.autoFetchSvg&&(f.prefix="fas")}return f},Ba());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(Mt.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=Et(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ht()||"fas"),l}var Au=function(){function e(){$f(this,e),this.definitions={}}return Df(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),ta(s,o[s]);var l=yn[ee][s];l&&ta(l,o[s]),zs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Ui=[],Ft={},zt={},Ou=Object.keys(zt);function Pu(e,t){var n=t.mixoutsTo;return Ui=e,Ft={},Object.keys(zt).forEach(function(r){Ou.indexOf(r)===-1&&delete zt[r]}),Ui.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ar(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ft[o]||(Ft[o]=[]),Ft[o].push(i[o])})}r.provides&&r.provides(zt)}),n}function na(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ft[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ft[e]||[];a.forEach(function(i){i.apply(null,n)})}function Je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return zt[e]?zt[e].apply(null,t):void 0}function ra(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ht();if(t)return t=Et(n,t)||t,zi(Hs.definitions,n,t)||zi(Le.styles,n,t)}var Hs=new Au,Cu=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Pt("noAuto")},Ru={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return et?(Pt("beforeI2svg",t),Je("pseudoElements2svg",t),Je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,gu(function(){Tu({autoReplaceSvgRoot:n}),Pt("watch",t)})}},Iu={icon:function(t){if(t===null)return null;if(ar(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Et(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=wr(t[0]);return{prefix:r,iconName:Et(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(Jf))){var a=_r(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ht(),iconName:Et(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ht();return{prefix:i,iconName:Et(i,t)||t}}}},Ae={noAuto:Cu,config:N,dom:Ru,parse:Iu,library:Hs,findIconDefinition:ra,toHtml:Cn},Tu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(Le.styles).length>0||N.autoFetchSvg)&&et&&N.autoReplaceSvg&&Ae.dom.i2svg({node:r})};function xr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Cn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(et){var r=te.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Lu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Da(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=yr(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Nu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function Va(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,m=e.extra,h=e.watchable,g=h===void 0?!1:h,A=r.found?r:n,R=A.width,j=A.height,y=a==="fak",_=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(function(he){return m.classes.indexOf(he)===-1}).filter(function(he){return he!==""||!!he}).concat(m.classes).join(" "),C={children:[],attributes:I(I({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(j)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(R/j*16*.0625,"em")}:{};g&&(C.attributes[Ot]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||_n())},children:[l]}),delete C.attributes.title);var B=I(I({},C),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},z),m.styles)}),$=r.found&&n.found?Je("generateAbstractMask",B)||{children:[],attributes:{}}:Je("generateAbstractIcon",B)||{children:[],attributes:{}},Z=$.children,me=$.attributes;return B.children=Z,B.attributes=me,s?Nu(B):Lu(B)}function Bi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Ot]="");var c=I({},o.styles);Da(a)&&(c.transform=du({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=yr(c);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Mu(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=yr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Lr=Le.styles;function aa(e){var t=e[0],n=e[1],r=e.slice(4),a=Na(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(xt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(xt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Fu={found:!1,width:512,height:512};function ju(e,t){!Os&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ia(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=ht()),new Promise(function(r,a){if(Je("missingIconAbstract"),n==="fa"){var i=Ds(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Lr[t]&&Lr[t][e]){var o=Lr[t][e];return r(aa(o))}ju(e,t),r(I(I({},Fu),{},{icon:N.showMissingIcons&&e?Je("missingIconAbstract")||{}:{}}))})}var Vi=function(){},oa=N.measurePerformance&&jn&&jn.mark&&jn.measure?jn:{mark:Vi,measure:Vi},Jt='FA "6.5.2"',$u=function(t){return oa.mark("".concat(Jt," ").concat(t," begins")),function(){return Us(t)}},Us=function(t){oa.mark("".concat(Jt," ").concat(t," ends")),oa.measure("".concat(Jt," ").concat(t),"".concat(Jt," ").concat(t," begins"),"".concat(Jt," ").concat(t," ends"))},Wa={begin:$u,end:Us},Jn=function(){};function Wi(e){var t=e.getAttribute?e.getAttribute(Ot):null;return typeof t=="string"}function zu(e){var t=e.getAttribute?e.getAttribute(Fa):null,n=e.getAttribute?e.getAttribute(ja):null;return t&&n}function Du(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Hu(){if(N.autoReplaceSvg===!0)return Zn.replace;var e=Zn[N.autoReplaceSvg];return e||Zn.replace}function Uu(e){return te.createElementNS("http://www.w3.org/2000/svg",e)}function Bu(e){return te.createElement(e)}function Bs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Uu:Bu:n;if(typeof e=="string")return te.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Bs(o,{ceFn:r}))}),a}function Vu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Zn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Bs(a),n)}),n.getAttribute(Ot)===null&&N.keepOriginalSource){var r=te.createComment(Vu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~za(n).indexOf(N.replacementClass))return Zn.replace(t);var a=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Cn(s)}).join(`
`);n.setAttribute(Ot,""),n.innerHTML=o}};function Yi(e){e()}function Vs(e,t){var n=typeof t=="function"?t:Jn;if(e.length===0)n();else{var r=Yi;N.mutateApproach===qf&&(r=mt.requestAnimationFrame||Yi),r(function(){var a=Hu(),i=Wa.begin("mutate");e.map(a),i(),n()})}}var Ya=!1;function Ws(){Ya=!0}function sa(){Ya=!1}var or=null;function Ki(e){if(Fi&&N.observeMutations){var t=e.treeCallback,n=t===void 0?Jn:t,r=e.nodeCallback,a=r===void 0?Jn:r,i=e.pseudoElementsCallback,o=i===void 0?Jn:i,s=e.observeMutationsRoot,l=s===void 0?te:s;or=new Fi(function(f){if(!Ya){var c=ht();Yt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Wi(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Wi(m.target)&&~nu.indexOf(m.attributeName))if(m.attributeName==="class"&&zu(m.target)){var h=_r(za(m.target)),g=h.prefix,A=h.iconName;m.target.setAttribute(Fa,g||c),A&&m.target.setAttribute(ja,A)}else Du(m.target)&&a(m.target)})}}),et&&or.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wu(){or&&or.disconnect()}function Yu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ku(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=_r(za(e));return a.prefix||(a.prefix=ht()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ku(a.prefix,e.innerText)||Ua(a.prefix,ea(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Gu(e){var t=Yt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||_n()):(t["aria-hidden"]="true",t.focusable="false")),t}function qu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ve,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ku(e),r=n.iconName,a=n.prefix,i=n.rest,o=Gu(e),s=na("parseNodeAttributes",{},e),l=t.styleParser?Yu(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ve,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Xu=Le.styles;function Ys(e){var t=N.autoReplaceSvg==="nest"?Gi(e,{styleParser:!1}):Gi(e);return~t.extra.classes.indexOf(Ps)?Je("generateLayersText",e,t):Je("generateSvgReplacementMutation",e,t)}var pt=new Set;$a.map(function(e){pt.add("fa-".concat(e))});Object.keys(vn[ee]).map(pt.add.bind(pt));Object.keys(vn[ie]).map(pt.add.bind(pt));pt=On(pt);function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!et)return Promise.resolve();var n=te.documentElement.classList,r=function(m){return n.add("".concat(ji,"-").concat(m))},a=function(m){return n.remove("".concat(ji,"-").concat(m))},i=N.autoFetchSvg?pt:$a.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Xu));i.includes("fa")||i.push("fa");var o=[".".concat(Ps,":not([").concat(Ot,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Yt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Wa.begin("onTree"),f=s.reduce(function(c,m){try{var h=Ys(m);h&&c.push(h)}catch(g){Os||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(h){Vs(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),m(h)})})}function Qu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ys(e).then(function(n){n&&Vs([n],t)})}function Ju(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ra(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ra(a||{})),e(r,I(I({},n),{},{mask:a}))}}var Zu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ve:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,m=n.title,h=m===void 0?null:m,g=n.titleId,A=g===void 0?null:g,R=n.classes,j=R===void 0?[]:R,y=n.attributes,_=y===void 0?{}:y,C=n.styles,z=C===void 0?{}:C;if(t){var B=t.prefix,$=t.iconName,Z=t.icon;return xr(I({type:"icon"},t),function(){return Pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(h?_["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(A||_n()):(_["aria-hidden"]="true",_.focusable="false")),Va({icons:{main:aa(Z),mask:l?aa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:$,transform:I(I({},Ve),a),symbol:o,title:h,maskId:c,titleId:A,extra:{attributes:_,styles:z,classes:j}})})}},ed={mixout:function(){return{icon:Ju(Zu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=qi,n.nodeCallback=Qu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?te:r,i=n.callback,o=i===void 0?function(){}:i;return qi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,m=r.maskId,h=r.extra;return new Promise(function(g,A){Promise.all([ia(a,s),c.iconName?ia(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var j=Na(R,2),y=j[0],_=j[1];g([n,Va({icons:{main:y,mask:_},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=yr(s);l.length>0&&(a.style=l);var f;return Da(o)&&(f=Je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},td={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return xr({type:"layer"},function(){Pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(On(i)).join(" ")},children:o}]})}}}},nd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return xr({type:"counter",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),Mu({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(On(s))}})})}}}},rd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ve:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,m=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return xr({type:"text",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),Bi({content:n,transform:I(I({},Ve),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(On(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ks){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Bi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},ad=new RegExp('"',"ug"),Xi=[1105920,1112319];function id(e){var t=e.replace(ad,""),n=bu(t,0),r=n>=Xi[0]&&n<=Xi[1],a=t.length===2?t[0]===t[1]:!1;return{value:ea(a?t[0]:t),isSecondary:r||a}}function Qi(e,t){var n="".concat(Gf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Yt(e.children),o=i.filter(function(Z){return Z.getAttribute(Zr)===t})[0],s=mt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Zf),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ie:ee,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?bn[h][l[2].toLowerCase()]:eu[h][f],A=id(m),R=A.value,j=A.isSecondary,y=l[0].startsWith("FontAwesome"),_=Ua(g,R),C=_;if(y){var z=Su(R);z.iconName&&z.prefix&&(_=z.iconName,g=z.prefix)}if(_&&!j&&(!o||o.getAttribute(Fa)!==g||o.getAttribute(ja)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var B=qu(),$=B.extra;$.attributes[Zr]=t,ia(_,g).then(function(Z){var me=Va(I(I({},B),{},{icons:{main:Z,mask:Ba()},prefix:g,iconName:C,extra:$,watchable:!0})),he=te.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(he,e.firstChild):e.appendChild(he),he.outerHTML=me.map(function(Oe){return Cn(Oe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function od(e){return Promise.all([Qi(e,"::before"),Qi(e,"::after")])}function sd(e){return e.parentNode!==document.head&&!~Xf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Zr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ji(e){if(et)return new Promise(function(t,n){var r=Yt(e.querySelectorAll("*")).filter(sd).map(od),a=Wa.begin("searchPseudoElements");Ws(),Promise.all(r).then(function(){a(),sa(),t()}).catch(function(){a(),sa(),n()})})}var ld={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ji,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?te:r;N.searchPseudoElements&&Ji(a)}}},Zi=!1,cd={mixout:function(){return{dom:{unwatch:function(){Ws(),Zi=!0}}}},hooks:function(){return{bootstrap:function(){Ki(na("mutationObserverCallbacks",{}))},noAuto:function(){Wu()},watch:function(n){var r=n.observeMutationsRoot;Zi?sa():Ki(na("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},eo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},fd={mixout:function(){return{parse:{transform:function(n){return eo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=eo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:h};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Nr={x:0,y:0,width:"100%",height:"100%"};function to(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ud(e){return e.tag==="g"?e.children:[e]}var dd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?_r(a.split(" ").map(function(o){return o.trim()})):Ba();return i.prefix||(i.prefix=ht()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,m=o.width,h=o.icon,g=uu({transform:l,containerWidth:m,iconWidth:f}),A={tag:"rect",attributes:I(I({},Nr),{},{fill:"white"})},R=c.children?{children:c.children.map(to)}:{},j={tag:"g",attributes:I({},g.inner),children:[to(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},R))]},y={tag:"g",attributes:I({},g.outer),children:[j]},_="mask-".concat(s||_n()),C="clip-".concat(s||_n()),z={tag:"mask",attributes:I(I({},Nr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,y]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:ud(h)},z]};return r.push(B,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(_,")")},Nr)}),{children:r,attributes:a}}}},md={provides:function(t){var n=!1;mt.matchMedia&&(n=mt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},pd=[hu,ed,td,nd,rd,ld,cd,fd,dd,md,hd];Pu(pd,{mixoutsTo:Ae});Ae.noAuto;Ae.config;Ae.library;Ae.dom;var la=Ae.parse;Ae.findIconDefinition;Ae.toHtml;var gd=Ae.icon;Ae.layer;Ae.text;Ae.counter;function no(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?no(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):no(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sr(e){"@babel/helpers - typeof";return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr(e)}function _e(e,t,n){return t=wd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function bd(e,t){if(e==null)return{};var n=vd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yd(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function wd(e){var t=yd(e,"string");return typeof t=="symbol"?t:String(t)}var _d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ks={exports:{}};(function(e){(function(t){var n=function(y,_,C){if(!f(_)||m(_)||h(_)||g(_)||l(_))return _;var z,B=0,$=0;if(c(_))for(z=[],$=_.length;B<$;B++)z.push(n(y,_[B],C));else{z={};for(var Z in _)Object.prototype.hasOwnProperty.call(_,Z)&&(z[y(Z,C)]=n(y,_[Z],C))}return z},r=function(y,_){_=_||{};var C=_.separator||"_",z=_.split||/(?=[A-Z])/;return y.split(z).join(C)},a=function(y){return A(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(_,C){return C?C.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var _=a(y);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(y,_){return r(y,_).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},h=function(y){return s.call(y)=="[object RegExp]"},g=function(y){return s.call(y)=="[object Boolean]"},A=function(y){return y=y-0,y===y},R=function(y,_){var C=_&&"process"in _?_.process:_;return typeof C!="function"?y:function(z,B){return C(z,y,B)}},j={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,_){return n(R(a,_),y)},decamelizeKeys:function(y,_){return n(R(o,_),y,_)},pascalizeKeys:function(y,_){return n(R(i,_),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=j:t.humps=j})(_d)})(Ks);var xd=Ks.exports,Ed=["class","style"];function kd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=xd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Sd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Gs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Gs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Sd(c);break;case"style":l.style=kd(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=bd(n,Ed);return La(e.tag,Ke(Ke(Ke({},t),{},{class:a.class,style:Ke(Ke({},a.style),o)},a.attrs),s),r)}var qs=!1;try{qs=!0}catch{}function Ad(){if(!qs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Mr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function Od(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ro(e){if(e&&sr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(la.icon)return la.icon(e);if(e===null)return null;if(sr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Pd=Sn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ue(function(){return ro(t.icon)}),i=ue(function(){return Mr("classes",Od(t))}),o=ue(function(){return Mr("transform",typeof t.transform=="string"?la.transform(t.transform):t.transform)}),s=ue(function(){return Mr("mask",ro(t.mask))}),l=ue(function(){return gd(a.value,Ke(Ke(Ke(Ke({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});nn(l,function(c){if(!c)return Ad("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ue(function(){return l.value?Gs(l.value.abstract[0],{},r):null});return function(){return f.value}}}),Cd={prefix:"fas",iconName:"language",icon:[640,512,[],"f1ab","M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"]},ah={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},ih={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const Rd=Sn({__name:"Header",setup(e,{expose:t}){t();function n(){let i=document.getElementById("lang-dropdown");i!=null&&i.classList.contains("hidden")?(i==null||i.classList.remove("hidden"),i==null||i.classList.add("flex")):(i==null||i.classList.add("hidden"),i==null||i.classList.remove("flex"))}function r(i){console.log("Selected Language:",i);let o=document.getElementById("lang-dropdown");o==null||o.classList.add("hidden"),o==null||o.classList.remove("flex")}const a={showDropdownContent:n,selectLanguage:r,get FontAwesomeIcon(){return Pd},get faLanguage(){return Cd}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),Ka=e=>(nc("data-v-3c42d45a"),e=e(),rc(),e),Id={class:"w-full flex flex-row justify-between items-center !px-2 bg-[--accent-color] border-bottom"},Td=Ka(()=>Ie("button",{class:"bg-[--secondary-color] text-black font-bold !py-2 !px-4 rounded"}," Logo ",-1)),Ld=Ka(()=>Ie("button",{class:"bg-[--secondary-color] text-black font-bold !py-2 !px-4 rounded"}," Nosotros ",-1)),Nd=Ka(()=>Ie("button",{class:"bg-[--secondary-color] text-black font-bold !py-2 !px-4 rounded"}," Turismo ",-1)),Md={class:"dropdown bg-[--secondary-color] !py-2 !px-4 rounded cursor-pointer"},Fd={id:"lang-dropdown",class:"dropdown-content hidden flex-col gap-y-1 -translate-x-1/4"};function jd(e,t,n,r,a,i){return Ca(),Ra("header",Id,[Td,Ld,Nd,Ie("div",Md,[Ie("span",{onClick:t[0]||(t[0]=o=>r.showDropdownContent())},[ve(r.FontAwesomeIcon,{icon:r.faLanguage},null,8,["icon"])]),Ie("div",Fd,[Ie("span",{onClick:t[1]||(t[1]=o=>r.selectLanguage("en")),class:"border border-solid border-[--primary-color] !py-1 !px-2"},"EN"),Ie("span",{onClick:t[2]||(t[2]=o=>r.selectLanguage("es")),class:"border border-solid border-[--primary-color] !py-1 !px-2"},"ES")])])])}const Xs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},$d=Xs(Rd,[["render",jd],["__scopeId","data-v-3c42d45a"]]),zd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='25px'%20height='25px'%3e%3cpath%20fill='%233F51B5'%20d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z'/%3e%3cpath%20fill='%23FFF'%20d='M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z'/%3e%3c/svg%3e",Dd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='25px'%20height='25px'%3e%3cradialGradient%20id='yOrnnhliCrdS2gy~4tD8ma'%20cx='19.38'%20cy='42.035'%20r='44.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fd5'/%3e%3cstop%20offset='.328'%20stop-color='%23ff543f'/%3e%3cstop%20offset='.348'%20stop-color='%23fc5245'/%3e%3cstop%20offset='.504'%20stop-color='%23e64771'/%3e%3cstop%20offset='.643'%20stop-color='%23d53e91'/%3e%3cstop%20offset='.761'%20stop-color='%23cc39a4'/%3e%3cstop%20offset='.841'%20stop-color='%23c837ab'/%3e%3c/radialGradient%3e%3cpath%20fill='url(%23yOrnnhliCrdS2gy~4tD8ma)'%20d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20%20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20%20C42.014,38.383,38.417,41.986,34.017,41.99z'/%3e%3cradialGradient%20id='yOrnnhliCrdS2gy~4tD8mb'%20cx='11.786'%20cy='5.54'%20r='29.813'%20gradientTransform='matrix(1%200%200%20.6663%200%201.849)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234168c9'/%3e%3cstop%20offset='.999'%20stop-color='%234168c9'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cpath%20fill='url(%23yOrnnhliCrdS2gy~4tD8mb)'%20d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20%20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20%20C42.014,38.383,38.417,41.986,34.017,41.99z'/%3e%3cpath%20fill='%23fff'%20d='M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z%20M24,19c-2.757,0-5,2.243-5,5%20s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z'/%3e%3ccircle%20cx='31.5'%20cy='16.5'%20r='1.5'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12%20C37,33.86,33.859,37,30,37z%20M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z'/%3e%3c/svg%3e",Hd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='25px'%20height='25px'%3e%3cpath%20d='M%2011%204%20C%207.134%204%204%207.134%204%2011%20L%204%2039%20C%204%2042.866%207.134%2046%2011%2046%20L%2039%2046%20C%2042.866%2046%2046%2042.866%2046%2039%20L%2046%2011%20C%2046%207.134%2042.866%204%2039%204%20L%2011%204%20z%20M%2013.085938%2013%20L%2021.023438%2013%20L%2026.660156%2021.009766%20L%2033.5%2013%20L%2036%2013%20L%2027.789062%2022.613281%20L%2037.914062%2037%20L%2029.978516%2037%20L%2023.4375%2027.707031%20L%2015.5%2037%20L%2013%2037%20L%2022.308594%2026.103516%20L%2013.085938%2013%20z%20M%2016.914062%2015%20L%2031.021484%2035%20L%2034.085938%2035%20L%2019.978516%2015%20L%2016.914062%2015%20z'/%3e%3c/svg%3e",Ud={class:"w-full bg-[--accent-color] flex flex-col justify-between border-top"},Bd=Xc('<div class="flex flex-row items-center justify-between"><button class="bg-[--secondary-color] text-black font-bold !py-2 !px-4 rounded"> Logo </button><button class="bg-[--secondary-color] text-black font-bold !py-2 !px-4 rounded"> Nosotros </button><div class="flex flex-row"><button><img src="'+zd+'" class="w-12 h-12" alt="facebook icon"></button><button><img src="'+Dd+'" class="!w-12 !h-12" alt="instagram icon"></button><button><img src="'+Hd+'" class="!w-12 !h-12" alt="x icon"></button></div></div><div class="flex justify-center"> © Agüizoturs 2024 </div>',2),Vd=[Bd];function Wd(e,t){return Ca(),Ra("footer",Ud,Vd)}const Yd={},Kd=Xs(Yd,[["render",Wd]]);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Lt=typeof document<"u";function Gd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function Fr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Me(a)?a.map(e):e(a)}return n}const cn=()=>{},Me=Array.isArray,Qs=/#/g,qd=/&/g,Xd=/\//g,Qd=/=/g,Jd=/\?/g,Js=/\+/g,Zd=/%5B/g,em=/%5D/g,Zs=/%5E/g,tm=/%60/g,el=/%7B/g,nm=/%7C/g,tl=/%7D/g,rm=/%20/g;function Ga(e){return encodeURI(""+e).replace(nm,"|").replace(Zd,"[").replace(em,"]")}function am(e){return Ga(e).replace(el,"{").replace(tl,"}").replace(Zs,"^")}function ca(e){return Ga(e).replace(Js,"%2B").replace(rm,"+").replace(Qs,"%23").replace(qd,"%26").replace(tm,"`").replace(el,"{").replace(tl,"}").replace(Zs,"^")}function im(e){return ca(e).replace(Qd,"%3D")}function om(e){return Ga(e).replace(Qs,"%23").replace(Jd,"%3F")}function sm(e){return e==null?"":om(e).replace(Xd,"%2F")}function xn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const lm=/\/$/,cm=e=>e.replace(lm,"");function jr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=mm(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:xn(o)}}function fm(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ao(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function um(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Bt(t.matched[r],n.matched[a])&&nl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Bt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function nl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!dm(e[n],t[n]))return!1;return!0}function dm(e,t){return Me(e)?io(e,t):Me(t)?io(t,e):e===t}function io(e,t){return Me(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function mm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var En;(function(e){e.pop="pop",e.push="push"})(En||(En={}));var fn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(fn||(fn={}));function hm(e){if(!e)if(Lt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),cm(e)}const pm=/^[^#]+#/;function gm(e,t){return e.replace(pm,"#")+t}function vm(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Er=()=>({left:window.scrollX,top:window.scrollY});function bm(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=vm(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function oo(e,t){return(history.state?history.state.position-t:-1)+e}const fa=new Map;function ym(e,t){fa.set(e,t)}function wm(e){const t=fa.get(e);return fa.delete(e),t}let _m=()=>location.protocol+"//"+location.host;function rl(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),ao(l,"")}return ao(n,e)+r+a}function xm(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=rl(e,location),A=n.value,R=t.value;let j=0;if(h){if(n.value=g,t.value=h,o&&o===A){o=null;return}j=R?h.position-R.position:0}else r(g);a.forEach(y=>{y(n.value,A,{delta:j,type:En.pop,direction:j?j>0?fn.forward:fn.back:fn.unknown})})};function l(){o=n.value}function f(h){a.push(h);const g=()=>{const A=a.indexOf(h);A>-1&&a.splice(A,1)};return i.push(g),g}function c(){const{history:h}=window;h.state&&h.replaceState(X({},h.state,{scroll:Er()}),"")}function m(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:m}}function so(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Er():null}}function Em(e){const{history:t,location:n}=window,r={value:rl(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const m=e.indexOf("#"),h=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:_m()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(l,f){const c=X({},t.state,so(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=X({},a.value,t.state,{forward:l,scroll:Er()});i(c.current,c,!0);const m=X({},so(r.value,l,null),{position:c.position+1},f);i(l,m,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function km(e){e=hm(e);const t=Em(e),n=xm(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:gm.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Sm(e){return typeof e=="string"||e&&typeof e=="object"}function al(e){return typeof e=="string"||typeof e=="symbol"}const it={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},il=Symbol("");var lo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(lo||(lo={}));function Vt(e,t){return X(new Error,{type:e,[il]:!0},t)}function Ye(e,t){return e instanceof Error&&il in e&&(t==null||!!(e.type&t))}const co="[^/]+?",Am={sensitive:!1,strict:!1,start:!0,end:!0},Om=/[.+*?^${}()[\]/\\]/g;function Pm(e,t){const n=X({},Am,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let m=0;m<f.length;m++){const h=f[m];let g=40+(n.sensitive?.25:0);if(h.type===0)m||(a+="/"),a+=h.value.replace(Om,"\\$&"),g+=40;else if(h.type===1){const{value:A,repeatable:R,optional:j,regexp:y}=h;i.push({name:A,repeatable:R,optional:j});const _=y||co;if(_!==co){g+=10;try{new RegExp(`(${_})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${_}): `+z.message)}}let C=R?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;m||(C=j&&f.length<2?`(?:/${C})`:"/"+C),j&&(C+="?"),a+=C,g+=20,j&&(g+=-8),R&&(g+=-20),_===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),m={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",A=i[h-1];m[A.name]=g&&A.repeatable?g.split("/"):g}return m}function l(f){let c="",m=!1;for(const h of e){(!m||!c.endsWith("/"))&&(c+="/"),m=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:R,optional:j}=g,y=A in f?f[A]:"";if(Me(y)&&!R)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const _=Me(y)?y.join("/"):y;if(!_)if(j)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):m=!0);else throw new Error(`Missing required param "${A}"`);c+=_}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Cm(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Rm(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Cm(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(fo(r))return 1;if(fo(a))return-1}return a.length-r.length}function fo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Im={type:0,value:""},Tm=/[a-zA-Z0-9_]/;function Lm(e){if(!e)return[[]];if(e==="/")return[[Im]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function m(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&m(),o()):l===":"?(m(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Tm.test(l)?h():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),m(),o(),a}function Nm(e,t,n){const r=Pm(Lm(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Mm(e,t){const n=[],r=new Map;t=ho({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,m,h){const g=!h,A=Fm(c);A.aliasOf=h&&h.record;const R=ho(t,c),j=[A];if("alias"in c){const C=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of C)j.push(X({},A,{components:h?h.record.components:A.components,path:z,aliasOf:h?h.record:A}))}let y,_;for(const C of j){const{path:z}=C;if(m&&z[0]!=="/"){const B=m.record.path,$=B[B.length-1]==="/"?"":"/";C.path=m.record.path+(z&&$+z)}if(y=Nm(C,m,R),h?h.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),g&&c.name&&!mo(y)&&o(c.name)),A.children){const B=A.children;for(let $=0;$<B.length;$++)i(B[$],y,h&&h.children[$])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return _?()=>{o(_)}:cn}function o(c){if(al(c)){const m=r.get(c);m&&(r.delete(c),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(c);m>-1&&(n.splice(m,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let m=0;for(;m<n.length&&Rm(c,n[m])>=0&&(c.record.path!==n[m].record.path||!ol(c,n[m]));)m++;n.splice(m,0,c),c.record.name&&!mo(c)&&r.set(c.record.name,c)}function f(c,m){let h,g={},A,R;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Vt(1,{location:c});R=h.record.name,g=X(uo(m.params,h.keys.filter(_=>!_.optional).concat(h.parent?h.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),c.params&&uo(c.params,h.keys.map(_=>_.name))),A=h.stringify(g)}else if(c.path!=null)A=c.path,h=n.find(_=>_.re.test(A)),h&&(g=h.parse(A),R=h.record.name);else{if(h=m.name?r.get(m.name):n.find(_=>_.re.test(m.path)),!h)throw Vt(1,{location:c,currentLocation:m});R=h.record.name,g=X({},m.params,c.params),A=h.stringify(g)}const j=[];let y=h;for(;y;)j.unshift(y.record),y=y.parent;return{name:R,path:A,params:g,matched:j,meta:$m(j)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function uo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Fm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:jm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function jm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function mo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $m(e){return e.reduce((t,n)=>X(t,n.meta),{})}function ho(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ol(e,t){return t.children.some(n=>n===e||ol(e,n))}function zm(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Js," "),o=i.indexOf("="),s=xn(o<0?i:i.slice(0,o)),l=o<0?null:xn(i.slice(o+1));if(s in t){let f=t[s];Me(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function po(e){let t="";for(let n in e){const r=e[n];if(n=im(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Me(r)?r.map(i=>i&&ca(i)):[r&&ca(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Dm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Me(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Hm=Symbol(""),go=Symbol(""),qa=Symbol(""),sl=Symbol(""),ua=Symbol("");function Xt(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ct(e,t,n,r,a,i=o=>o()){const o=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((s,l)=>{const f=h=>{h===!1?l(Vt(4,{from:n,to:t})):h instanceof Error?l(h):Sm(h)?l(Vt(2,{from:t,to:h})):(o&&r.enterCallbacks[a]===o&&typeof h=="function"&&o.push(h),s())},c=i(()=>e.call(r&&r.instances[a],t,n,f));let m=Promise.resolve(c);e.length<3&&(m=m.then(f)),m.catch(h=>l(h))})}function $r(e,t,n,r,a=i=>i()){const i=[];for(const o of e)for(const s in o.components){let l=o.components[s];if(!(t!=="beforeRouteEnter"&&!o.instances[s]))if(Um(l)){const c=(l.__vccOpts||l)[t];c&&i.push(ct(c,n,r,o,s,a))}else{let f=l();i.push(()=>f.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${o.path}"`));const m=Gd(c)?c.default:c;o.components[s]=m;const g=(m.__vccOpts||m)[t];return g&&ct(g,n,r,o,s,a)()}))}}return i}function Um(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vo(e){const t=qe(qa),n=qe(sl),r=ue(()=>{const l=At(e.to);return t.resolve(l)}),a=ue(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],m=n.matched;if(!c||!m.length)return-1;const h=m.findIndex(Bt.bind(null,c));if(h>-1)return h;const g=bo(l[f-2]);return f>1&&bo(c)===g&&m[m.length-1].path!==g?m.findIndex(Bt.bind(null,l[f-2])):h}),i=ue(()=>a.value>-1&&Ym(n.params,r.value.params)),o=ue(()=>a.value>-1&&a.value===n.matched.length-1&&nl(n.params,r.value.params));function s(l={}){return Wm(l)?t[At(e.replace)?"replace":"push"](At(e.to)).catch(cn):Promise.resolve()}return{route:r,href:ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Bm=Sn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vo,setup(e,{slots:t}){const n=dr(vo(e)),{options:r}=qe(qa),a=ue(()=>({[yo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[yo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:La("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Vm=Bm;function Wm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ym(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Me(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function bo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const yo=(e,t,n)=>e??t??n,Km=Sn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=qe(ua),a=ue(()=>e.route||r.value),i=qe(go,0),o=ue(()=>{let f=At(i);const{matched:c}=a.value;let m;for(;(m=c[f])&&!m.components;)f++;return f}),s=ue(()=>a.value.matched[o.value]);Gn(go,ue(()=>o.value+1)),Gn(Hm,s),Gn(ua,a);const l=Wo();return nn(()=>[l.value,s.value,e.name],([f,c,m],[h,g,A])=>{c&&(c.instances[m]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Bt(c,g)||!h)&&(c.enterCallbacks[m]||[]).forEach(R=>R(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,m=s.value,h=m&&m.components[c];if(!h)return wo(n.default,{Component:h,route:f});const g=m.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,j=La(h,X({},A,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(m.instances[c]=null)},ref:l}));return wo(n.default,{Component:j,route:f})||j}}});function wo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ll=Km;function Gm(e){const t=Mm(e.routes,e),n=e.parseQuery||zm,r=e.stringifyQuery||po,a=e.history,i=Xt(),o=Xt(),s=Xt(),l=Kl(it);let f=it;Lt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Fr.bind(null,b=>""+b),m=Fr.bind(null,sm),h=Fr.bind(null,xn);function g(b,T){let O,M;return al(b)?(O=t.getRecordMatcher(b),M=T):M=b,t.addRoute(M,O)}function A(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function R(){return t.getRoutes().map(b=>b.record)}function j(b){return!!t.getRecordMatcher(b)}function y(b,T){if(T=X({},T||l.value),typeof b=="string"){const d=jr(n,b,T.path),p=t.resolve({path:d.path},T),w=a.createHref(d.fullPath);return X(d,p,{params:h(p.params),hash:xn(d.hash),redirectedFrom:void 0,href:w})}let O;if(b.path!=null)O=X({},b,{path:jr(n,b.path,T.path).path});else{const d=X({},b.params);for(const p in d)d[p]==null&&delete d[p];O=X({},b,{params:m(d)}),T.params=m(T.params)}const M=t.resolve(O,T),q=b.hash||"";M.params=c(h(M.params));const ae=fm(r,X({},b,{hash:am(q),path:M.path})),u=a.createHref(ae);return X({fullPath:ae,hash:q,query:r===po?Dm(b.query):b.query||{}},M,{redirectedFrom:void 0,href:u})}function _(b){return typeof b=="string"?jr(n,b,l.value.path):X({},b)}function C(b,T){if(f!==b)return Vt(8,{from:T,to:b})}function z(b){return Z(b)}function B(b){return z(X(_(b),{replace:!0}))}function $(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let M=typeof O=="function"?O(b):O;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=_(M):{path:M},M.params={}),X({query:b.query,hash:b.hash,params:M.path!=null?{}:b.params},M)}}function Z(b,T){const O=f=y(b),M=l.value,q=b.state,ae=b.force,u=b.replace===!0,d=$(O);if(d)return Z(X(_(d),{state:typeof d=="object"?X({},q,d.state):q,force:ae,replace:u}),T||O);const p=O;p.redirectedFrom=T;let w;return!ae&&um(r,M,O)&&(w=Vt(16,{to:p,from:M}),je(M,M,!0,!1)),(w?Promise.resolve(w):Oe(p,M)).catch(v=>Ye(v)?Ye(v,2)?v:nt(v):K(v,p,M)).then(v=>{if(v){if(Ye(v,2))return Z(X({replace:u},_(v.to),{state:typeof v.to=="object"?X({},q,v.to.state):q,force:ae}),T||p)}else v=bt(p,M,!0,u,q);return tt(p,M,v),v})}function me(b,T){const O=C(b,T);return O?Promise.reject(O):Promise.resolve()}function he(b){const T=It.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Oe(b,T){let O;const[M,q,ae]=qm(b,T);O=$r(M.reverse(),"beforeRouteLeave",b,T);for(const d of M)d.leaveGuards.forEach(p=>{O.push(ct(p,b,T))});const u=me.bind(null,b,T);return O.push(u),pe(O).then(()=>{O=[];for(const d of i.list())O.push(ct(d,b,T));return O.push(u),pe(O)}).then(()=>{O=$r(q,"beforeRouteUpdate",b,T);for(const d of q)d.updateGuards.forEach(p=>{O.push(ct(p,b,T))});return O.push(u),pe(O)}).then(()=>{O=[];for(const d of ae)if(d.beforeEnter)if(Me(d.beforeEnter))for(const p of d.beforeEnter)O.push(ct(p,b,T));else O.push(ct(d.beforeEnter,b,T));return O.push(u),pe(O)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),O=$r(ae,"beforeRouteEnter",b,T,he),O.push(u),pe(O))).then(()=>{O=[];for(const d of o.list())O.push(ct(d,b,T));return O.push(u),pe(O)}).catch(d=>Ye(d,8)?d:Promise.reject(d))}function tt(b,T,O){s.list().forEach(M=>he(()=>M(b,T,O)))}function bt(b,T,O,M,q){const ae=C(b,T);if(ae)return ae;const u=T===it,d=Lt?history.state:{};O&&(M||u?a.replace(b.fullPath,X({scroll:u&&d&&d.scroll},q)):a.push(b.fullPath,q)),l.value=b,je(b,T,O,u),nt()}let Fe;function Kt(){Fe||(Fe=a.listen((b,T,O)=>{if(!Rn.listening)return;const M=y(b),q=$(M);if(q){Z(X(q,{replace:!0}),M).catch(cn);return}f=M;const ae=l.value;Lt&&ym(oo(ae.fullPath,O.delta),Er()),Oe(M,ae).catch(u=>Ye(u,12)?u:Ye(u,2)?(Z(u.to,M).then(d=>{Ye(d,20)&&!O.delta&&O.type===En.pop&&a.go(-1,!1)}).catch(cn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),K(u,M,ae))).then(u=>{u=u||bt(M,ae,!1),u&&(O.delta&&!Ye(u,8)?a.go(-O.delta,!1):O.type===En.pop&&Ye(u,20)&&a.go(-1,!1)),tt(M,ae,u)}).catch(cn)}))}let Ct=Xt(),le=Xt(),Q;function K(b,T,O){nt(b);const M=le.list();return M.length?M.forEach(q=>q(b,T,O)):console.error(b),Promise.reject(b)}function We(){return Q&&l.value!==it?Promise.resolve():new Promise((b,T)=>{Ct.add([b,T])})}function nt(b){return Q||(Q=!b,Kt(),Ct.list().forEach(([T,O])=>b?O(b):T()),Ct.reset()),b}function je(b,T,O,M){const{scrollBehavior:q}=e;if(!Lt||!q)return Promise.resolve();const ae=!O&&wm(oo(b.fullPath,0))||(M||!O)&&history.state&&history.state.scroll||null;return qo().then(()=>q(b,T,ae)).then(u=>u&&bm(u)).catch(u=>K(u,b,T))}const we=b=>a.go(b);let Rt;const It=new Set,Rn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:j,getRoutes:R,resolve:y,options:e,push:z,replace:B,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:le.add,isReady:We,install(b){const T=this;b.component("RouterLink",Vm),b.component("RouterView",ll),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>At(l)}),Lt&&!Rt&&l.value===it&&(Rt=!0,z(a.location).catch(q=>{}));const O={};for(const q in it)Object.defineProperty(O,q,{get:()=>l.value[q],enumerable:!0});b.provide(qa,T),b.provide(sl,zo(O)),b.provide(ua,l);const M=b.unmount;It.add(b),b.unmount=function(){It.delete(b),It.size<1&&(f=it,Fe&&Fe(),Fe=null,l.value=it,Rt=!1,Q=!1),M()}}};function pe(b){return b.reduce((T,O)=>T.then(()=>he(O)),Promise.resolve())}return Rn}function qm(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Bt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Bt(f,l))||a.push(l))}return[n,r,a]}const Xm={class:"h-full"},Qm=Sn({__name:"App",setup(e){return(t,n)=>(Ca(),Ra(De,null,[ve($d),Ie("main",Xm,[ve(At(ll))]),ve(Kd)],64))}}),Jm="modulepreload",Zm=function(e){return"/"+e},_o={},eh=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.all(n.map(s=>{if(s=Zm(s),s in _o)return;_o[s]=!0;const l=s.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${f}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Jm,l||(c.as="script",c.crossOrigin=""),c.href=s,o&&c.setAttribute("nonce",o),document.head.appendChild(c),l)return new Promise((m,h)=>{c.addEventListener("load",m),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})}))}return a.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},th=[{path:"",name:"home",component:()=>eh(()=>import("./Home-wc2ziKFd.js"),__vite__mapDeps([0,1]))}],nh=Gm({routes:th,history:km()}),rh=jf(),Xa=Tf(Qm);Xa.use(rh);Xa.use(nh);Xa.mount("#app");export{Pd as F,Xs as _,rc as a,Ie as b,Ra as c,Sn as d,ah as e,ih as f,ve as g,va as n,Ca as o,nc as p,Wo as r};
