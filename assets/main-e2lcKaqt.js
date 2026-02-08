const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/python-runtime-extension-BSSL57sH.js","assets/pyservice-BuDWLnEn.js","assets/p12-splitter-CjWItpTy.js","assets/transformers-7Ca4Rwdn.js","assets/__vite-browser-external-DTHgcB49.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var I1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function O1(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var n=function i(){var r=!1;try{r=this instanceof i}catch{}return r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var Xr={exports:{}};var wh=Xr.exports,Ka;function vh(){return Ka||(Ka=1,(function(t,e){(function(){var n,i,r,s,o,l,c,h,u,p,g,b,w,k,I,S,P,R,O,_,W,z,ge,be,le,Ie,xe,Ae,Ee,Oe,V,Ve,je,St,Ln,Ks,Or,lt,ii,Ys,Bi,Dr,Zs,zr,Pr,Fa,Ua,Js,Ba,qa,qi=[].slice,Va={}.hasOwnProperty,Ha=function(v,m){for(var y in m)Va.call(m,y)&&(v[y]=m[y]);function x(){this.constructor=v}return x.prototype=m.prototype,v.prototype=new x,v.__super__=m.prototype,v},gh=[].indexOf||function(v){for(var m=0,y=this.length;m<y;m++)if(m in this&&this[m]===v)return m;return-1},Wa=function(v,m){return function(){return v.apply(m,arguments)}};for(z={className:"",catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},Oe=function(){var v;return(v=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance.now():void 0)!=null?v:+new Date},Ve=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,W=window.cancelAnimationFrame||window.mozCancelAnimationFrame,S=function(v,m,y){return typeof v.addEventListener=="function"?v.addEventListener(m,y,!1):(function(){if(typeof v["on"+m]!="function"||typeof v["on"+m].eventListeners!="object"){var x=new h;typeof v["on"+m]=="function"&&x.on(m,v["on"+m]),v["on"+m]=function(E){return x.trigger(m,E)},v["on"+m].eventListeners=x}else var x=v["on"+m].eventListeners;x.on(m,y)})()},Ve==null&&(Ve=function(v){return setTimeout(v,50)},W=function(v){return clearTimeout(v)}),St=function(v){var m,y;return m=Oe(),y=function(){var x;return x=Oe()-m,x>=33?(m=Oe(),v(x,function(){return Ve(y)})):setTimeout(y,33-x)},y()},je=function(){var v,m,y;return y=arguments[0],m=arguments[1],v=3<=arguments.length?qi.call(arguments,2):[],typeof y[m]=="function"?y[m].apply(y,v):y[m]},ge=function(){var v,m,y,x,E,T,B;for(m=arguments[0],x=2<=arguments.length?qi.call(arguments,1):[],T=0,B=x.length;T<B;T++)if(y=x[T],y)for(v in y)Va.call(y,v)&&(E=y[v],m[v]!=null&&typeof m[v]=="object"&&E!=null&&typeof E=="object"?ge(m[v],E):m[v]=E);return m},R=function(v){var m,y,x,E,T;for(y=m=0,E=0,T=v.length;E<T;E++)x=v[E],y+=Math.abs(x),m++;return y/m},le=function(v,m){var y,x,E;if(v==null&&(v="options"),m==null&&(m=!0),E=document.querySelector("[data-pace-"+v+"]"),!!E){if(y=E.getAttribute("data-pace-"+v),!m)return y;try{return JSON.parse(y)}catch(T){return x=T,typeof console<"u"&&console!==null?console.error("Error parsing inline pace options",x):void 0}}},c=(function(){function v(){}return v.prototype.on=function(m,y,x,E){var T;return E==null&&(E=!1),this.bindings==null&&(this.bindings={}),(T=this.bindings)[m]==null&&(T[m]=[]),this.bindings[m].push({handler:y,ctx:x,once:E})},v.prototype.once=function(m,y,x){return this.on(m,y,x,!0)},v.prototype.off=function(m,y){var x,E,T;if(((E=this.bindings)!=null?E[m]:void 0)!=null){if(y==null)return delete this.bindings[m];for(x=0,T=[];x<this.bindings[m].length;)this.bindings[m][x].handler===y?T.push(this.bindings[m].splice(x,1)):T.push(x++);return T}},v.prototype.trigger=function(){var m,y,x,E,T,B,K,ce,ke;if(x=arguments[0],m=2<=arguments.length?qi.call(arguments,1):[],(K=this.bindings)!=null&&K[x]){for(T=0,ke=[];T<this.bindings[x].length;)ce=this.bindings[x][T],E=ce.handler,y=ce.ctx,B=ce.once,E.apply(y??this,m),B?ke.push(this.bindings[x].splice(T,1)):ke.push(T++);return ke}},v})(),p=window.Pace||{},window.Pace=p,ge(p,c.prototype),V=p.options=ge({},z,window.paceOptions,le()),Js=["ajax","document","eventLag","elements"],zr=0,Fa=Js.length;zr<Fa;zr++)lt=Js[zr],V[lt]===!0&&(V[lt]=z[lt]);u=(function(v){Ha(m,v);function m(){return Ba=m.__super__.constructor.apply(this,arguments),Ba}return m})(Error),i=(function(){function v(){this.progress=0}return v.prototype.getElement=function(){var m;if(this.el==null){if(m=document.querySelector(V.target),!m)throw new u;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running ");var y=V.className!==""?" "+V.className:"";this.el.innerHTML='<div class="pace-progress'+y+`">
  <div class="pace-progress-inner"></div>
</div>
<div class="pace-activity"></div>`,m.firstChild!=null?m.insertBefore(this.el,m.firstChild):m.appendChild(this.el)}return this.el},v.prototype.finish=function(){var m;return m=this.getElement(),m.className=m.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ")},v.prototype.update=function(m){return this.progress=m,p.trigger("progress",m),this.render()},v.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(m){u=m}return this.el=void 0},v.prototype.render=function(){var m,y,x,E,T,B,K;if(document.querySelector(V.target)==null)return!1;for(m=this.getElement(),E="translate3d("+this.progress+"%, 0, 0)",K=["webkitTransform","msTransform","transform"],T=0,B=K.length;T<B;T++)y=K[T],m.children[0].style[y]=E;return(!this.lastRenderedProgress||this.lastRenderedProgress|this.progress!==0|0)&&(m.children[0].setAttribute("data-progress-text",""+(this.progress|0)+"%"),this.progress>=100?x="99":(x=this.progress<10?"0":"",x+=this.progress|0),m.children[0].setAttribute("data-progress",""+x)),p.trigger("change",this.progress),this.lastRenderedProgress=this.progress},v.prototype.done=function(){return this.progress>=100},v})(),h=(function(){function v(){this.bindings={}}return v.prototype.trigger=function(m,y){var x,E,T,B,K;if(this.bindings[m]!=null){for(B=this.bindings[m],K=[],E=0,T=B.length;E<T;E++)x=B[E],K.push(x.call(this,y));return K}},v.prototype.on=function(m,y){var x;return(x=this.bindings)[m]==null&&(x[m]=[]),this.bindings[m].push(y)},v})(),Zs=window.XMLHttpRequest,Dr=window.XDomainRequest,Bi=window.WebSocket,be=function(v,m){var y,x;x=[];for(y in m.prototype)try{v[y]==null&&typeof m[y]!="function"?typeof Object.defineProperty=="function"?x.push(Object.defineProperty(v,y,{get:(function(E){return function(){return m.prototype[E]}})(y),configurable:!0,enumerable:!0})):x.push(v[y]=m.prototype[y]):x.push(void 0)}catch{}return x},Ae=[],p.ignore=function(){var v,m,y;return m=arguments[0],v=2<=arguments.length?qi.call(arguments,1):[],Ae.unshift("ignore"),y=m.apply(null,v),Ae.shift(),y},p.track=function(){var v,m,y;return m=arguments[0],v=2<=arguments.length?qi.call(arguments,1):[],Ae.unshift("track"),y=m.apply(null,v),Ae.shift(),y},Or=function(v){var m;if(v==null&&(v="GET"),Ae[0]==="track")return"force";if(!Ae.length&&V.ajax){if(v==="socket"&&V.ajax.trackWebSockets)return!0;if(m=v.toUpperCase(),gh.call(V.ajax.trackMethods,m)>=0)return!0}return!1},g=(function(v){Ha(m,v);function m(){var y,x=this;m.__super__.constructor.apply(this,arguments),y=function(E){var T;return T=E.open,E.open=function(B,K,ce){return Or(B)&&x.trigger("request",{type:B,url:K,request:E}),T.apply(E,arguments)}},window.XMLHttpRequest=function(E){var T;return T=new Zs(E),y(T),T};try{be(window.XMLHttpRequest,Zs)}catch{}if(Dr!=null){window.XDomainRequest=function(){var E;return E=new Dr,y(E),E};try{be(window.XDomainRequest,Dr)}catch{}}if(Bi!=null&&V.ajax.trackWebSockets){window.WebSocket=function(E,T){var B;return T!=null?B=new Bi(E,T):B=new Bi(E),Or("socket")&&x.trigger("request",{type:"socket",url:E,protocols:T,request:B}),B};try{be(window.WebSocket,Bi)}catch{}}}return m})(h),Pr=null,Ie=function(){return Pr==null&&(Pr=new g),Pr},Ks=function(v){var m,y,x,E;for(E=V.ajax.ignoreURLs,y=0,x=E.length;y<x;y++)if(m=E[y],typeof m=="string"){if(v.indexOf(m)!==-1)return!0}else if(m.test(v))return!0;return!1},Ie().on("request",function(v){var m,y,x,E,T;if(E=v.type,x=v.request,T=v.url,!Ks(T)&&!p.running&&(V.restartOnRequestAfter!==!1||Or(E)==="force"))return y=arguments,m=V.restartOnRequestAfter||0,typeof m=="boolean"&&(m=0),setTimeout(function(){var B,K,ce,ke,cn,dn;if(E==="socket"?B=x.readyState<1:B=0<(ke=x.readyState)&&ke<4,B){for(p.restart(),cn=p.sources,dn=[],K=0,ce=cn.length;K<ce;K++)if(lt=cn[K],lt instanceof n){lt.watch.apply(lt,y);break}else dn.push(void 0);return dn}},m)}),n=(function(){function v(){this.complete=Wa(this.complete,this);var m=this;this.elements=[],Ie().on("request",function(){return m.watch.apply(m,arguments)})}return v.prototype.watch=function(m){var y,x,E,T;if(E=m.type,y=m.request,T=m.url,!Ks(T))return E==="socket"?x=new k(y,this.complete):x=new I(y,this.complete),this.elements.push(x)},v.prototype.complete=function(m){return this.elements=this.elements.filter(function(y){return y!==m})},v})(),I=(function(){function v(m,y){var x,E,T,B,K,ce=this;if(this.progress=0,window.ProgressEvent!=null)for(S(m,"progress",function(ke){return ke.lengthComputable?ce.progress=100*ke.loaded/ke.total:ce.progress=ce.progress+(100-ce.progress)/2},!1),K=["load","abort","timeout","error"],E=0,T=K.length;E<T;E++)x=K[E],S(m,x,function(){return y(ce),ce.progress=100},!1);else B=m.onreadystatechange,m.onreadystatechange=function(){var ke;return(ke=m.readyState)===0||ke===4?(y(ce),ce.progress=100):m.readyState===3&&(ce.progress=50),typeof B=="function"?B.apply(null,arguments):void 0}}return v})(),k=(function(){function v(m,y){var x,E,T,B,K=this;for(this.progress=0,B=["error","open"],E=0,T=B.length;E<T;E++)x=B[E],S(m,x,function(){return y(K),K.progress=100},!1)}return v})(),s=(function(){function v(m){var y,x,E,T;for(m==null&&(m={}),this.complete=Wa(this.complete,this),this.elements=[],m.selectors==null&&(m.selectors=[]),T=m.selectors,x=0,E=T.length;x<E;x++)y=T[x],this.elements.push(new o(y,this.complete))}return v.prototype.complete=function(m){return this.elements=this.elements.filter(function(y){return y!==m})},v})(),o=(function(){function v(m,y){this.selector=m,this.completeCallback=y,this.progress=0,this.check()}return v.prototype.check=function(){var m=this;return document.querySelector(this.selector)?this.done():setTimeout((function(){return m.check()}),V.elements.checkInterval)},v.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100},v})(),r=(function(){v.prototype.states={loading:0,interactive:50,complete:100};function v(){var m,y,x=this;this.progress=(y=this.states[document.readyState])!=null?y:100,m=document.onreadystatechange,document.onreadystatechange=function(){return x.states[document.readyState]!=null&&(x.progress=x.states[document.readyState]),typeof m=="function"?m.apply(null,arguments):void 0}}return v})(),l=(function(){function v(){var m,y,x,E,T,B=this;this.progress=0,m=0,T=[],E=0,x=Oe(),y=setInterval(function(){var K;return K=Oe()-x-50,x=Oe(),T.push(K),T.length>V.eventLag.sampleCount&&T.shift(),m=R(T),++E>=V.eventLag.minSamples&&m<V.eventLag.lagThreshold?(B.progress=100,clearInterval(y)):B.progress=100*(3/(m+3))},50)}return v})(),w=(function(){function v(m){this.source=m,this.last=this.sinceLastUpdate=0,this.rate=V.initialRate,this.catchup=0,this.progress=this.lastProgress=0,this.source!=null&&(this.progress=je(this.source,"progress"))}return v.prototype.tick=function(m,y){var x;return y==null&&(y=je(this.source,"progress")),y>=100&&(this.done=!0),y===this.last?this.sinceLastUpdate+=m:(this.sinceLastUpdate&&(this.rate=(y-this.last)/this.sinceLastUpdate),this.catchup=(y-this.progress)/V.catchupTime,this.sinceLastUpdate=0,this.last=y),y>this.progress&&(this.progress+=this.catchup*m),x=1-Math.pow(this.progress/100,V.easeFactor),this.progress+=x*this.rate*m,this.progress=Math.min(this.lastProgress+V.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},v})(),ii=null,Ln=null,O=null,Ys=null,P=null,_=null,p.running=!1,xe=function(){if(V.restartOnPushState)return p.restart()},window.history.pushState!=null&&(Ua=window.history.pushState,window.history.pushState=function(){return xe(),Ua.apply(window.history,arguments)}),window.history.replaceState!=null&&(qa=window.history.replaceState,window.history.replaceState=function(){return xe(),qa.apply(window.history,arguments)}),b={ajax:n,elements:s,document:r,eventLag:l},(Ee=function(){var v,m,y,x,E,T,B,K;for(p.sources=ii=[],T=["ajax","elements","document","eventLag"],m=0,x=T.length;m<x;m++)v=T[m],V[v]!==!1&&ii.push(new b[v](V[v]));for(K=(B=V.extraSources)!=null?B:[],y=0,E=K.length;y<E;y++)lt=K[y],ii.push(new lt(V));return p.bar=O=new i,Ln=[],Ys=new w})(),p.stop=function(){return p.trigger("stop"),p.running=!1,O.destroy(),_=!0,P!=null&&(typeof W=="function"&&W(P),P=null),Ee()},p.restart=function(){return p.trigger("restart"),p.stop(),p.start()},p.go=function(){var v;return p.running=!0,O.render(),v=Oe(),_=!1,P=St(function(m,y){var x,E,T,B,K,ce,ke,cn,dn,Qs,eo,to,ja,Xa,Ga;for(100-O.progress,E=Qs=0,T=!0,ce=eo=0,ja=ii.length;eo<ja;ce=++eo)for(lt=ii[ce],dn=Ln[ce]!=null?Ln[ce]:Ln[ce]=[],K=(Ga=lt.elements)!=null?Ga:[lt],ke=to=0,Xa=K.length;to<Xa;ke=++to)B=K[ke],cn=dn[ke]!=null?dn[ke]:dn[ke]=new w(B),T&=cn.done,!cn.done&&(E++,Qs+=cn.tick(m));return x=Qs/E,O.update(Ys.tick(m,x)),O.done()||T||_?(O.update(100),p.trigger("done"),setTimeout(function(){return O.finish(),p.running=!1,p.trigger("hide")},Math.max(V.ghostTime,Math.max(V.minTime-(Oe()-v),0)))):y()})},p.start=function(v){ge(V,v),p.running=!0;try{O.render()}catch(m){u=m}return document.querySelector(".pace")?(p.trigger("start"),p.go()):setTimeout(p.start,50)},t.exports=p}).call(wh)})(Xr)),Xr.exports}var yh=vh();const xh=bh(yh);const C=t=>(e,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};const Gr=globalThis,ta=Gr.ShadowRoot&&(Gr.ShadyCSS===void 0||Gr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,na=Symbol(),Ya=new WeakMap;let vc=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==na)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(ta&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=Ya.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ya.set(n,e))}return e}toString(){return this.cssText}};const yc=t=>new vc(typeof t=="string"?t:t+"",void 0,na),Le=(t,...e)=>{const n=t.length===1?t[0]:e.reduce(((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1]),t[0]);return new vc(n,t,na)},kh=(t,e)=>{if(ta)t.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of e){const i=document.createElement("style"),r=Gr.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=n.cssText,t.appendChild(i)}},Za=ta?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return yc(n)})(t):t;const{is:Eh,defineProperty:Ch,getOwnPropertyDescriptor:$h,getOwnPropertyNames:Sh,getOwnPropertySymbols:Ah,getPrototypeOf:_h}=Object,Ss=globalThis,Ja=Ss.trustedTypes,Th=Ja?Ja.emptyScript:"",Rh=Ss.reactiveElementPolyfillSupport,or=(t,e)=>t,Qr={toAttribute(t,e){switch(e){case Boolean:t=t?Th:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},ia=(t,e)=>!Eh(t,e),Qa={attribute:!0,type:String,converter:Qr,reflect:!1,useDefault:!1,hasChanged:ia};Symbol.metadata??=Symbol("metadata"),Ss.litPropertyMetadata??=new WeakMap;let si=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Qa){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,n);r!==void 0&&Ch(this.prototype,e,r)}}static getPropertyDescriptor(e,n,i){const{get:r,set:s}=$h(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get:r,set(o){const l=r?.call(this);s?.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Qa}static _$Ei(){if(this.hasOwnProperty(or("elementProperties")))return;const e=_h(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(or("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(or("properties"))){const n=this.properties,i=[...Sh(n),...Ah(n)];for(const r of i)this.createProperty(r,n[r])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[i,r]of n)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const r=this._$Eu(n,i);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)n.unshift(Za(r))}else e!==void 0&&n.push(Za(e));return n}static _$Eu(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kh(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$ET(e,n){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:Qr).toAttribute(n,i.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,n){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Qr;this._$Em=r;const l=o.fromAttribute(n,s.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(e,n,i){if(e!==void 0){const r=this.constructor,s=this[e];if(i??=r.getPropertyOptions(e),!((i.hasChanged??ia)(s,n)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:i,reflect:r,wrapped:s},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??n??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(n=void 0),this._$AL.set(e,n)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,s]of i){const{wrapped:o}=s,l=this[r];o!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,s,l)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(n)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(e){}firstUpdated(e){}};si.elementStyles=[],si.shadowRootOptions={mode:"open"},si[or("elementProperties")]=new Map,si[or("finalized")]=new Map,Rh?.({ReactiveElement:si}),(Ss.reactiveElementVersions??=[]).push("2.1.1");const Lh={attribute:!0,type:String,converter:Qr,reflect:!1,hasChanged:ia},Ih=(t=Lh,e,n)=>{const{kind:i,metadata:r}=n;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(n.name,t),i==="accessor"){const{name:o}=n;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,c,t)},init(l){return l!==void 0&&this.C(o,void 0,t,l),l}}}if(i==="setter"){const{name:o}=n;return function(l){const c=this[o];e.call(this,l),this.requestUpdate(o,c,t)}}throw Error("Unsupported decorator location: "+i)};function d(t){return(e,n)=>typeof n=="object"?Ih(t,e,n):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,n)}function $(t){return d({...t,state:!0,attribute:!1})}function As(t){return(e,n)=>{const i=typeof e=="function"?e:e[n];Object.assign(i,t)}}const xc=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);function A(t,e){return(n,i,r)=>{const s=o=>o.renderRoot?.querySelector(t)??null;return xc(n,i,{get(){return s(this)}})}}function Oh(t){return(e,n)=>xc(e,n,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}const ra=globalThis,es=ra.trustedTypes,el=es?es.createPolicy("lit-html",{createHTML:t=>t}):void 0,kc="$lit$",un=`lit$${Math.random().toFixed(9).slice(2)}$`,Ec="?"+un,Dh=`<${Ec}>`,Fn=document,pr=()=>Fn.createComment(""),fr=t=>t===null||typeof t!="object"&&typeof t!="function",sa=Array.isArray,zh=t=>sa(t)||typeof t?.[Symbol.iterator]=="function",no=`[ 	
\f\r]`,Vi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tl=/-->/g,nl=/>/g,In=RegExp(`>|${no}(?:([^\\s"'>=/]+)(${no}*=${no}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),il=/'/g,rl=/"/g,Cc=/^(?:script|style|textarea|title)$/i,Ph=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),f=Ph(1),et=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),sl=new WeakMap,Pn=Fn.createTreeWalker(Fn,129);function $c(t,e){if(!sa(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return el!==void 0?el.createHTML(e):e}const Mh=(t,e)=>{const n=t.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",o=Vi;for(let l=0;l<n;l++){const c=t[l];let h,u,p=-1,g=0;for(;g<c.length&&(o.lastIndex=g,u=o.exec(c),u!==null);)g=o.lastIndex,o===Vi?u[1]==="!--"?o=tl:u[1]!==void 0?o=nl:u[2]!==void 0?(Cc.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=In):u[3]!==void 0&&(o=In):o===In?u[0]===">"?(o=r??Vi,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?In:u[3]==='"'?rl:il):o===rl||o===il?o=In:o===tl||o===nl?o=Vi:(o=In,r=void 0);const b=o===In&&t[l+1].startsWith("/>")?" ":"";s+=o===Vi?c+Dh:p>=0?(i.push(h),c.slice(0,p)+kc+c.slice(p)+un+b):c+un+(p===-2?l:b)}return[$c(t,s+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let _o=class Sc{constructor({strings:e,_$litType$:n},i){let r;this.parts=[];let s=0,o=0;const l=e.length-1,c=this.parts,[h,u]=Mh(e,n);if(this.el=Sc.createElement(h,i),Pn.currentNode=this.el.content,n===2||n===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Pn.nextNode())!==null&&c.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(kc)){const g=u[o++],b=r.getAttribute(p).split(un),w=/([.?@])?(.*)/.exec(g);c.push({type:1,index:s,name:w[2],strings:b,ctor:w[1]==="."?Fh:w[1]==="?"?Uh:w[1]==="@"?Bh:_s}),r.removeAttribute(p)}else p.startsWith(un)&&(c.push({type:6,index:s}),r.removeAttribute(p));if(Cc.test(r.tagName)){const p=r.textContent.split(un),g=p.length-1;if(g>0){r.textContent=es?es.emptyScript:"";for(let b=0;b<g;b++)r.append(p[b],pr()),Pn.nextNode(),c.push({type:2,index:++s});r.append(p[g],pr())}}}else if(r.nodeType===8)if(r.data===Ec)c.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(un,p+1))!==-1;)c.push({type:7,index:s}),p+=un.length-1}s++}}static createElement(e,n){const i=Fn.createElement("template");return i.innerHTML=e,i}};function gi(t,e,n=t,i){if(e===et)return e;let r=i!==void 0?n._$Co?.[i]:n._$Cl;const s=fr(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,n,i)),i!==void 0?(n._$Co??=[])[i]=r:n._$Cl=r),r!==void 0&&(e=gi(t,r._$AS(t,e.values),r,i)),e}let Nh=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:i}=this._$AD,r=(e?.creationScope??Fn).importNode(n,!0);Pn.currentNode=r;let s=Pn.nextNode(),o=0,l=0,c=i[0];for(;c!==void 0;){if(o===c.index){let h;c.type===2?h=new Ri(s,s.nextSibling,this,e):c.type===1?h=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(h=new qh(s,this,e)),this._$AV.push(h),c=i[++l]}o!==c?.index&&(s=Pn.nextNode(),o++)}return Pn.currentNode=Fn,r}p(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}};class Ri{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,i,r){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=gi(this,e,n),fr(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==et&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==N&&fr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Fn.createTextNode(e)),this._$AH=e}$(e){const{values:n,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=_o.createElement($c(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(n);else{const s=new Nh(r,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(e){let n=sl.get(e.strings);return n===void 0&&sl.set(e.strings,n=new _o(e)),n}k(e){sa(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const s of e)r===n.length?n.push(i=new Ri(this.O(pr()),this.O(pr()),this,this.options)):i=n[r],i._$AI(s),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}let _s=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,i,r,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}_$AI(e,n=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=gi(this,e,n,0),o=!fr(e)||e!==this._$AH&&e!==et,o&&(this._$AH=e);else{const l=e;let c,h;for(e=s[0],c=0;c<s.length-1;c++)h=gi(this,l[i+c],n,c),h===et&&(h=this._$AH[c]),o||=!fr(h)||h!==this._$AH[c],h===N?e=N:e!==N&&(e+=(h??"")+s[c+1]),this._$AH[c]=h}o&&!r&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class Fh extends _s{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}}let Uh=class extends _s{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}},Bh=class extends _s{constructor(e,n,i,r,s){super(e,n,i,r,s),this.type=5}_$AI(e,n=this){if((e=gi(this,e,n,0)??N)===et)return;const i=this._$AH,r=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==N&&(i===N||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},qh=class{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){gi(this,e)}};const Vh={I:Ri},Hh=ra.litHtmlPolyfillSupport;Hh?.(_o,Ri),(ra.litHtmlVersions??=[]).push("3.3.1");const gt=(t,e,n)=>{const i=n?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const s=n?.renderBefore??null;i._$litPart$=r=new Ri(e.insertBefore(pr(),s),s,void 0,n??{})}return r._$AI(t),r};const oa=globalThis;let gn=class extends si{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gt(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return et}};gn._$litElement$=!0,gn.finalized=!0,oa.litElementHydrateSupport?.({LitElement:gn});const Wh=oa.litElementPolyfillSupport;Wh?.({LitElement:gn});(oa.litElementVersions??=[]).push("4.2.1");const jh=!1;class Xh{constructor(){this.subscriptions=new Map,this.tokenCounter=0}subscribe(e,n){this.subscriptions.has(e)||this.subscriptions.set(e,new Map);const i=`token_${++this.tokenCounter}_${Date.now()}`;return this.subscriptions.get(e).set(i,n),i}unsubscribe(e){for(const[n,i]of this.subscriptions.entries())if(i.has(e)){i.delete(e),i.size===0&&this.subscriptions.delete(n);return}}publish(e,n){const i=this.subscriptions.get(e);return!i||i.size===0?!1:(queueMicrotask(()=>{i.forEach(r=>{try{r(n)}catch(s){console.error(`Error in event callback for topic "${e}":`,s)}})}),!0)}clearAllSubscriptions(){this.subscriptions.clear()}clearSubscriptions(e){this.subscriptions.delete(e)}}const aa=new Xh,Fe=(t,e)=>aa.subscribe(t,e),Gh=t=>{aa.unsubscribe(t)},se=(t,e)=>aa.publish(t,e);var Kh=Object.defineProperty,Yh=(t,e,n)=>e in t?Kh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,io=(t,e,n)=>(Yh(t,typeof e!="symbol"?e+"":e,n),n),Zh=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},ro=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Mr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},ol=(t,e,n)=>(Zh(t,e,"access private method"),n);function Ac(t,e){return Object.is(t,e)}let Ce=null,ar=!1,Kr=1;const ts=Symbol("SIGNAL");function ci(t){const e=Ce;return Ce=t,e}function Jh(){return Ce}function Qh(){return ar}const la={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ts(t){if(ar)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(Ce===null)return;Ce.consumerOnSignalRead(t);const e=Ce.nextProducerIndex++;if(bi(Ce),e<Ce.producerNode.length&&Ce.producerNode[e]!==t&&To(Ce)){const n=Ce.producerNode[e];Rs(n,Ce.producerIndexOfThis[e])}Ce.producerNode[e]!==t&&(Ce.producerNode[e]=t,Ce.producerIndexOfThis[e]=To(Ce)?Rc(t,Ce,e):0),Ce.producerLastReadVersion[e]=t.version}function eu(){Kr++}function _c(t){if(!(!t.dirty&&t.lastCleanEpoch===Kr)){if(!t.producerMustRecompute(t)&&!su(t)){t.dirty=!1,t.lastCleanEpoch=Kr;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Kr}}function Tc(t){if(t.liveConsumerNode===void 0)return;const e=ar;ar=!0;try{for(const n of t.liveConsumerNode)n.dirty||nu(n)}finally{ar=e}}function tu(){return Ce?.consumerAllowSignalWrites!==!1}function nu(t){var e;t.dirty=!0,Tc(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function iu(t){return t&&(t.nextProducerIndex=0),ci(t)}function ru(t,e){if(ci(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(To(t))for(let n=t.nextProducerIndex;n<t.producerNode.length;n++)Rs(t.producerNode[n],t.producerIndexOfThis[n]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function su(t){bi(t);for(let e=0;e<t.producerNode.length;e++){const n=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==n.version||(_c(n),i!==n.version))return!0}return!1}function Rc(t,e,n){var i;if(ca(t),bi(t),t.liveConsumerNode.length===0){(i=t.watched)==null||i.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)t.producerIndexOfThis[r]=Rc(t.producerNode[r],t,r)}return t.liveConsumerIndexOfThis.push(n),t.liveConsumerNode.push(e)-1}function Rs(t,e){var n;if(ca(t),bi(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(n=t.unwatched)==null||n.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)Rs(t.producerNode[r],t.producerIndexOfThis[r])}const i=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[i],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[i],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const r=t.liveConsumerIndexOfThis[e],s=t.liveConsumerNode[e];bi(s),s.producerIndexOfThis[r]=e}}function To(t){var e;return t.consumerIsAlwaysLive||(((e=t?.liveConsumerNode)==null?void 0:e.length)??0)>0}function bi(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function ca(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}function Lc(t){if(_c(t),Ts(t),t.value===Ro)throw t.error;return t.value}function ou(t){const e=Object.create(au);e.computation=t;const n=()=>Lc(e);return n[ts]=e,n}const so=Symbol("UNSET"),oo=Symbol("COMPUTING"),Ro=Symbol("ERRORED"),au={...la,value:so,dirty:!0,error:null,equal:Ac,producerMustRecompute(t){return t.value===so||t.value===oo},producerRecomputeValue(t){if(t.value===oo)throw new Error("Detected cycle in computations.");const e=t.value;t.value=oo;const n=iu(t);let i,r=!1;try{i=t.computation.call(t.wrapper),r=e!==so&&e!==Ro&&t.equal.call(t.wrapper,e,i)}catch(s){i=Ro,t.error=s}finally{ru(t,n)}if(r){t.value=e;return}t.value=i,t.version++}};function lu(){throw new Error}let cu=lu;function du(){cu()}function hu(t){const e=Object.create(fu);e.value=t;const n=()=>(Ts(e),e.value);return n[ts]=e,n}function uu(){return Ts(this),this.value}function pu(t,e){tu()||du(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,mu(t))}const fu={...la,equal:Ac,value:void 0};function mu(t){t.version++,eu(),Tc(t)}const De=Symbol("node");var Ft;(t=>{var e,n,i,r;class s{constructor(c,h={}){Mr(this,n),io(this,e);const p=hu(c)[ts];if(this[De]=p,p.wrapper=this,h){const g=h.equals;g&&(p.equal=g),p.watched=h[t.subtle.watched],p.unwatched=h[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return uu.call(this[De])}set(c){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Qh())throw new Error("Writes to signals not permitted during Watcher callback");const h=this[De];pu(h,c)}}e=De,n=new WeakSet,t.isState=l=>typeof l=="object"&&ro(n,l),t.State=s;class o{constructor(c,h){Mr(this,r),io(this,i);const p=ou(c)[ts];if(p.consumerAllowSignalWrites=!0,this[De]=p,p.wrapper=this,h){const g=h.equals;g&&(p.equal=g),p.watched=h[t.subtle.watched],p.unwatched=h[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Lc(this[De])}}i=De,r=new WeakSet,t.isComputed=l=>typeof l=="object"&&ro(r,l),t.Computed=o,(l=>{var c,h,u,p;function g(R){let O,_=null;try{_=ci(null),O=R()}finally{ci(_)}return O}l.untrack=g;function b(R){var O;if(!(0,t.isComputed)(R)&&!(0,t.isWatcher)(R))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((O=R[De].producerNode)==null?void 0:O.map(_=>_.wrapper))??[]}l.introspectSources=b;function w(R){var O;if(!(0,t.isComputed)(R)&&!(0,t.isState)(R))throw new TypeError("Called introspectSinks without a Signal argument");return((O=R[De].liveConsumerNode)==null?void 0:O.map(_=>_.wrapper))??[]}l.introspectSinks=w;function k(R){if(!(0,t.isComputed)(R)&&!(0,t.isState)(R))throw new TypeError("Called hasSinks without a Signal argument");const O=R[De].liveConsumerNode;return O?O.length>0:!1}l.hasSinks=k;function I(R){if(!(0,t.isComputed)(R)&&!(0,t.isWatcher)(R))throw new TypeError("Called hasSources without a Computed or Watcher argument");const O=R[De].producerNode;return O?O.length>0:!1}l.hasSources=I;class S{constructor(O){Mr(this,h),Mr(this,u),io(this,c);let _=Object.create(la);_.wrapper=this,_.consumerMarkedDirty=O,_.consumerIsAlwaysLive=!0,_.consumerAllowSignalWrites=!1,_.producerNode=[],this[De]=_}watch(...O){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");ol(this,u,p).call(this,O);const _=this[De];_.dirty=!1;const W=ci(_);for(const z of O)Ts(z[De]);ci(W)}unwatch(...O){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");ol(this,u,p).call(this,O);const _=this[De];bi(_);for(let W=_.producerNode.length-1;W>=0;W--)if(O.includes(_.producerNode[W].wrapper)){Rs(_.producerNode[W],_.producerIndexOfThis[W]);const z=_.producerNode.length-1;if(_.producerNode[W]=_.producerNode[z],_.producerIndexOfThis[W]=_.producerIndexOfThis[z],_.producerNode.length--,_.producerIndexOfThis.length--,_.nextProducerIndex--,W<_.producerNode.length){const ge=_.producerIndexOfThis[W],be=_.producerNode[W];ca(be),be.liveConsumerIndexOfThis[ge]=W}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[De].producerNode.filter(_=>_.dirty).map(_=>_.wrapper)}}c=De,h=new WeakSet,u=new WeakSet,p=function(R){for(const O of R)if(!(0,t.isComputed)(O)&&!(0,t.isState)(O))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=R=>ro(h,R),l.Watcher=S;function P(){var R;return(R=Jh())==null?void 0:R.wrapper}l.currentComputed=P,l.watched=Symbol("watched"),l.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(Ft||(Ft={}));const gu=Symbol("SignalWatcherBrand"),bu=new FinalizationRegistry((({watcher:t,signal:e})=>{t.unwatch(e)})),al=new WeakMap;function wu(t){return t[gu]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new Ft.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new Ft.Computed((()=>{this._$St.get(),super.performUpdate()}));const e=this._$Su=new Ft.subtle.Watcher((function(){const n=al.get(this);n!==void 0&&(n._$Si===!1&&n.requestUpdate(),this.watch())}));al.set(e,this),bu.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach((n=>n.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,n,i){this._$So=!0,super.requestUpdate(e,n,i)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(e){this._$Sh.add(e);const n=this._$So;this.requestUpdate(),this._$So=n}m(e){this._$Sh.delete(e)}}}const At={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Li=t=>(...e)=>({_$litDirective$:t,values:e});let Ii=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};const{I:vu}=Vh,yu=(t,e)=>t?._$litType$!==void 0,Ic=t=>t.strings===void 0,ll=()=>document.createComment(""),Hi=(t,e,n)=>{const i=t._$AA.parentNode,r=e===void 0?t._$AB:e._$AA;if(n===void 0){const s=i.insertBefore(ll(),r),o=i.insertBefore(ll(),r);n=new vu(s,o,t,t.options)}else{const s=n._$AB.nextSibling,o=n._$AM,l=o!==t;if(l){let c;n._$AQ?.(t),n._$AM=t,n._$AP!==void 0&&(c=t._$AU)!==o._$AU&&n._$AP(c)}if(s!==r||l){let c=n._$AA;for(;c!==s;){const h=c.nextSibling;i.insertBefore(c,r),c=h}}}return n},On=(t,e,n=t)=>(t._$AI(e,n),t),xu={},Oc=(t,e=xu)=>t._$AH=e,ku=t=>t._$AH,ao=t=>{t._$AR(),t._$AA.remove()};const lr=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const i of n)i._$AO?.(e,!1),lr(i,e);return!0},ns=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},Dc=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),$u(e)}};function Eu(t){this._$AN!==void 0?(ns(this),this._$AM=t,Dc(this)):this._$AM=t}function Cu(t,e=!1,n=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let s=n;s<i.length;s++)lr(i[s],!1),ns(i[s]);else i!=null&&(lr(i,!1),ns(i));else lr(this,t)}const $u=t=>{t.type==At.CHILD&&(t._$AP??=Cu,t._$AQ??=Eu)};class Su extends Ii{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,i){super._$AT(e,n,i),Dc(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(lr(this,e),ns(this))}setValue(e){if(Ic(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}Ft.State;Ft.Computed;const wn=(t,e)=>new Ft.State(t,e);var Lo="",Io="";function cl(t){Lo=t}function Au(t=""){if(!Lo){const e=document.querySelector("[data-webawesome]");if(e?.hasAttribute("data-webawesome")){const n=new URL(e.getAttribute("data-webawesome")??"",window.location.href).pathname;cl(n)}else{const i=[...document.getElementsByTagName("script")].find(r=>r.src.endsWith("webawesome.js")||r.src.endsWith("webawesome.loader.js")||r.src.endsWith("webawesome.ssr-loader.js"));if(i){const r=String(i.getAttribute("src"));cl(r.split("/").slice(0,-1).join("/"))}}}return Lo.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}function _u(t){Io=t}function Tu(){if(!Io){const t=document.querySelector("[data-fa-kit-code]");t&&_u(t.getAttribute("data-fa-kit-code")||"")}return Io}var Kt="7.0.1";function Ru(t,e,n){const i=Tu(),r=i.length>0;let s="solid";return e==="notdog"?(n==="solid"&&(s="solid"),n==="duo-solid"&&(s="duo-solid"),`https://ka-p.fontawesome.com/releases/v${Kt}/svgs/notdog-${s}/${t}.svg?token=${encodeURIComponent(i)}`):e==="chisel"?`https://ka-p.fontawesome.com/releases/v${Kt}/svgs/chisel-regular/${t}.svg?token=${encodeURIComponent(i)}`:e==="etch"?`https://ka-p.fontawesome.com/releases/v${Kt}/svgs/etch-solid/${t}.svg?token=${encodeURIComponent(i)}`:e==="jelly"?(n==="regular"&&(s="regular"),n==="duo-regular"&&(s="duo-regular"),n==="fill-regular"&&(s="fill-regular"),`https://ka-p.fontawesome.com/releases/v${Kt}/svgs/jelly-${s}/${t}.svg?token=${encodeURIComponent(i)}`):e==="slab"?((n==="solid"||n==="regular")&&(s="regular"),n==="press-regular"&&(s="press-regular"),`https://ka-p.fontawesome.com/releases/v${Kt}/svgs/slab-${s}/${t}.svg?token=${encodeURIComponent(i)}`):e==="thumbprint"?`https://ka-p.fontawesome.com/releases/v${Kt}/svgs/thumbprint-light/${t}.svg?token=${encodeURIComponent(i)}`:e==="whiteboard"?`https://ka-p.fontawesome.com/releases/v${Kt}/svgs/whiteboard-semibold/${t}.svg?token=${encodeURIComponent(i)}`:(e==="classic"&&(n==="thin"&&(s="thin"),n==="light"&&(s="light"),n==="regular"&&(s="regular"),n==="solid"&&(s="solid")),e==="sharp"&&(n==="thin"&&(s="sharp-thin"),n==="light"&&(s="sharp-light"),n==="regular"&&(s="sharp-regular"),n==="solid"&&(s="sharp-solid")),e==="duotone"&&(n==="thin"&&(s="duotone-thin"),n==="light"&&(s="duotone-light"),n==="regular"&&(s="duotone-regular"),n==="solid"&&(s="duotone")),e==="sharp-duotone"&&(n==="thin"&&(s="sharp-duotone-thin"),n==="light"&&(s="sharp-duotone-light"),n==="regular"&&(s="sharp-duotone-regular"),n==="solid"&&(s="sharp-duotone-solid")),e==="brands"&&(s="brands"),r?`https://ka-p.fontawesome.com/releases/v${Kt}/svgs/${s}/${t}.svg?token=${encodeURIComponent(i)}`:`https://ka-f.fontawesome.com/releases/v${Kt}/svgs/${s}/${t}.svg`)}var Lu={name:"default",resolver:(t,e="classic",n="solid")=>Ru(t,e,n),mutator:(t,e)=>{if(e?.family&&!t.hasAttribute("data-duotone-initialized")){const{family:n,variant:i}=e;if(n==="duotone"||n==="sharp-duotone"||n==="notdog"&&i==="duo-solid"||n==="jelly"&&i==="duo-regular"||n==="thumbprint"){const r=[...t.querySelectorAll("path")],s=r.find(l=>!l.hasAttribute("opacity")),o=r.find(l=>l.hasAttribute("opacity"));if(!s||!o)return;if(s.setAttribute("data-duotone-primary",""),o.setAttribute("data-duotone-secondary",""),e.swapOpacity&&s&&o){const l=o.getAttribute("opacity")||"0.4";s.style.setProperty("--path-opacity",l),o.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},Iu=Lu;new MutationObserver(t=>{for(const{addedNodes:e}of t)for(const n of e)n.nodeType===Node.ELEMENT_NODE&&Ou(n)});async function Ou(t){const e=t instanceof Element?t.tagName.toLowerCase():"",n=e?.startsWith("wa-"),i=[...t.querySelectorAll(":not(:defined)")].map(o=>o.tagName.toLowerCase()).filter(o=>o.startsWith("wa-"));n&&!customElements.get(e)&&i.push(e);const r=[...new Set(i)],s=await Promise.allSettled(r.map(o=>Du(o)));for(const o of s)o.status==="rejected"&&console.warn(o.reason);await new Promise(requestAnimationFrame),t.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function Du(t){if(customElements.get(t))return Promise.resolve();const e=t.replace(/^wa-/i,""),n=Au(`components/${e}/${e}.js`);return new Promise((i,r)=>{import(n).then(()=>i()).catch(()=>r(new Error(`Unable to autoload <${t}> from ${n}`)))})}const zu=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Pu=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Mu=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Nu=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Fu=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Uu=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Bu=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],qu=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Vu=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Hu=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Wu=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],ju=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Xu=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Gu=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ku=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Yu=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Zu=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ju=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Qu=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],ep=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],tp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],np=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ip=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],rp=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],sp=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],op=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ap=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],lp=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],cp=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],dp=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],hp=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],up=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],pp=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fp=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],mp=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],gp=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],bp=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],wp=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],vp=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],yp=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xp=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],kp=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ep=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Cp=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],$p=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Sp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Ap=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],_p=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Tp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Rp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Lp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Ip=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Op=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Dp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],zp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Pp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Mp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Np=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Fp=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Up=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Bp=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],qp=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Vp=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Hp=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Wp=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],jp=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Xp=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Gp=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Kp=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Yp=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Zp=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Jp=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Qp=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],ef=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],tf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],nf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],rf=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],sf=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],of=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],af=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],lf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],cf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],df=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],hf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],uf=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],pf=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],ff=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],mf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],gf=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],bf=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],wf=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],vf=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yf=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],xf=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],kf=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ef=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Cf=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],$f=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],zc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Sf=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Gu,backInLeft:Ku,backInRight:Yu,backInUp:Zu,backOutDown:Ju,backOutLeft:Qu,backOutRight:ep,backOutUp:tp,bounce:zu,bounceIn:np,bounceInDown:ip,bounceInLeft:rp,bounceInRight:sp,bounceInUp:op,bounceOut:ap,bounceOutDown:lp,bounceOutLeft:cp,bounceOutRight:dp,bounceOutUp:hp,easings:zc,fadeIn:up,fadeInBottomLeft:pp,fadeInBottomRight:fp,fadeInDown:mp,fadeInDownBig:gp,fadeInLeft:bp,fadeInLeftBig:wp,fadeInRight:vp,fadeInRightBig:yp,fadeInTopLeft:xp,fadeInTopRight:kp,fadeInUp:Ep,fadeInUpBig:Cp,fadeOut:$p,fadeOutBottomLeft:Sp,fadeOutBottomRight:Ap,fadeOutDown:_p,fadeOutDownBig:Tp,fadeOutLeft:Rp,fadeOutLeftBig:Lp,fadeOutRight:Ip,fadeOutRightBig:Op,fadeOutTopLeft:Dp,fadeOutTopRight:zp,fadeOutUp:Pp,fadeOutUpBig:Mp,flash:Pu,flip:Np,flipInX:Fp,flipInY:Up,flipOutX:Bp,flipOutY:qp,headShake:Mu,heartBeat:Nu,hinge:uf,jackInTheBox:pf,jello:Fu,lightSpeedInLeft:Vp,lightSpeedInRight:Hp,lightSpeedOutLeft:Wp,lightSpeedOutRight:jp,pulse:Uu,rollIn:ff,rollOut:mf,rotateIn:Xp,rotateInDownLeft:Gp,rotateInDownRight:Kp,rotateInUpLeft:Yp,rotateInUpRight:Zp,rotateOut:Jp,rotateOutDownLeft:Qp,rotateOutDownRight:ef,rotateOutUpLeft:tf,rotateOutUpRight:nf,rubberBand:Bu,shake:qu,shakeX:Vu,shakeY:Hu,slideInDown:rf,slideInLeft:sf,slideInRight:of,slideInUp:af,slideOutDown:lf,slideOutLeft:cf,slideOutRight:df,slideOutUp:hf,swing:Wu,tada:ju,wobble:Xu,zoomIn:gf,zoomInDown:bf,zoomInLeft:wf,zoomInRight:vf,zoomInUp:yf,zoomOut:xf,zoomOutDown:kf,zoomOutLeft:Ef,zoomOutRight:Cf,zoomOutUp:$f},Symbol.toStringTag,{value:"Module"})),Oo=new Set,di=new Map;let zn,da="ltr",ha="en";const Pc=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Pc){const t=new MutationObserver(Nc);da=document.documentElement.dir||"ltr",ha=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Mc(...t){t.map(e=>{const n=e.$code.toLowerCase();di.has(n)?di.set(n,Object.assign(Object.assign({},di.get(n)),e)):di.set(n,e),zn||(zn=e)}),Nc()}function Nc(){Pc&&(da=document.documentElement.dir||"ltr",ha=document.documentElement.lang||navigator.language),[...Oo.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Af=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Oo.add(this.host)}hostDisconnected(){Oo.delete(this.host)}dir(){return`${this.host.dir||da}`.toLowerCase()}lang(){return`${this.host.lang||ha}`.toLowerCase()}getTranslationData(e){var n,i;const r=new Intl.Locale(e.replace(/_/g,"-")),s=r?.language.toLowerCase(),o=(i=(n=r?.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&i!==void 0?i:"",l=di.get(`${s}-${o}`),c=di.get(s);return{locale:r,language:s,region:o,primary:l,secondary:c}}exists(e,n){var i;const{primary:r,secondary:s}=this.getTranslationData((i=n.lang)!==null&&i!==void 0?i:this.lang());return n=Object.assign({includeFallback:!1},n),!!(r&&r[e]||s&&s[e]||n.includeFallback&&zn&&zn[e])}term(e,...n){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(r&&r[e])s=r[e];else if(zn&&zn[e])s=zn[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...n):s}date(e,n){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),n).format(e)}number(e,n){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),n).format(e)}relativeTime(e,n,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,n)}};var Fc={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};Mc(Fc);var _f=Fc;var te=class extends Af{};Mc(_f);function Tf(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var lo={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},Rf={name:"system",resolver:(t,e="classic",n="solid")=>{let r=lo[n][t]??lo.regular[t]??lo.regular["circle-question"];return r?Tf(r):""}},Lf=Rf;var If="classic",is=[Iu,Lf],rs=[];function Of(t){rs.push(t)}function Df(t){rs=rs.filter(e=>e!==t)}function co(t){return is.find(e=>e.name===t)}function zf(t,e){Pf(t),is.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),rs.forEach(n=>{n.library===t&&n.setIcon()})}function Pf(t){is=is.filter(e=>e.name!==t)}function Mf(){return If}var Nf=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,Uc=t=>{throw TypeError(t)},a=(t,e,n,i)=>{for(var r=i>1?void 0:i?Ff(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Nf(e,n,r),r},Bc=(t,e,n)=>e.has(t)||Uc("Cannot "+n),Uf=(t,e,n)=>(Bc(t,e,"read from private field"),e.get(t)),Bf=(t,e,n)=>e.has(t)?Uc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),qf=(t,e,n,i)=>(Bc(t,e,"write to private field"),e.set(t,n),n);class ua{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,n){return e[n]||this.parent?.getProxy()[n]}set(e,n,i){e[n]=i}put(e,n){this.variables[e]=n}getProxy(){return this.proxy}createChild(e={}){const n=new ua(e);return n.parent=this,this.children.push(n),n}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const $e=new ua({}),Oi=$e.createChild({}),Nt=t=>{console.info("[TOAST] INFO:",t)},de=t=>{console.error("[TOAST] ERROR:",t)},Vf=t=>{console.warn("[TOAST] WARNING:",t)},dl={debug:0,info:1,warning:2,error:3};let Hf="debug";const oi={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let ss=null;const Do=[];function Wi(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class Wf{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,n){ai(this.source,e,n)}}function jf(t){return dl[t]>=dl[Hf]}function ai(t,e,n){jf(n)&&(ss?ss(t,e,n):(Do.push({source:t,message:e,level:n}),oi[n==="error"?"error":n==="warning"?"warn":n==="debug"?"debug":"log"](`[${t}] ${e}`)))}function Xf(){console.log=function(...t){oi.log.apply(console,t),ai("Console",t.map(e=>Wi(e)).join(" "),"info")},console.info=function(...t){oi.info.apply(console,t),ai("Console",t.map(e=>Wi(e)).join(" "),"info")},console.warn=function(...t){oi.warn.apply(console,t),ai("Console",t.map(e=>Wi(e)).join(" "),"warning")},console.error=function(...t){oi.error.apply(console,t),ai("Console",t.map(e=>Wi(e)).join(" "),"error")},console.debug=function(...t){oi.debug.apply(console,t),ai("Console",t.map(e=>Wi(e)).join(" "),"debug")}}Xf();function Gf(t){for(ss=t;Do.length>0;){const e=Do.shift();e&&t(e.source,e.message,e.level)}}function Kf(){ss=null}function an(t){return new Wf(t)}const G=an("System");$e.put("logger",G);const jt="events/contributionregistry/contributionsChanged";class Yf{constructor(){this.contributions=new Map}registerContribution(e,n){const i=this.getContributions(e);if("command"in n){const r=n;r.disabled instanceof Function&&(r.disabled=new Ft.Computed(r.disabled))}i.push(n),se(jt,{target:e,contributions:i})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const D=new Yf;$e.put("contributionRegistry",D);const bt=wn(null),cr=wn(null),zo=wn(null),Po=wn(0),Dn=wn(void 0);wn({name:"",timestamp:0});const qc="events/commandregistry/commandRegistered";class Zf{constructor(e,n,i,r,s){this.id=e,this.name=n,this.description=i,this.parameters=r||[],this.output=s||[]}}class Jf{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,n){this.handlers.has(e)||this.handlers.set(e,[]);const i=this.handlers.get(e);i.push(n),i.sort((r,s)=>(s.ranking??0)-(r.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:bt.get(),activeEditor:cr.get()}}execute(e,n={}){const i=this.getHandler(e);if(!i)throw G.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const r=this.getCommand(e),s=n.params?` params: ${JSON.stringify(n.params)}`:"";G.debug(`[CommandRegistry] Executing command: ${e}${r?` (${r.name})`:""}${s}`);for(const o of i)if(o.canExecute===void 0||o.canExecute(n))try{const l=o.execute(n);return G.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${l})`),l}catch(l){const c=l instanceof Error?l.message:String(l);throw G.error(`[CommandRegistry] Command execution failed: ${e} - ${c}`),l}G.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,n,i,r,s){const o=new Zf(e,n,i,r);this.registerCommand(o),s&&this.registerHandler(e,s)}registerCommand(e){this.commands[e.id]=e,G.debug(`Command registered: ${e.id}`),se(qc,e)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(n=>(Xe.getHandler(n.id)||[]).some(r=>r.canExecute===void 0||r.canExecute(e))).reduce((n,i)=>(n[i.id]=i,n),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const n=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(n,e.handler),e.contribution&&e.contribution.target&&D.registerContribution(e.contribution.target,{command:n,...e.contribution})}}const Xe=new Jf;$e.put("commandRegistry",Xe);const pe=t=>{Xe.registerAll(t)},Vc=(t,e)=>{const n=new Ft.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{n.watch(t)}});return n.watch(t),t.get(),()=>{n.unwatch(t)}};Object.defineProperty(gn.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class yr extends wu(gn){constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(e=>Gh(e)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(e=>e()),this.signalCleanups.clear()}subscribe(e,n){const i=Fe(e,n.bind(this));this.eventSubscriptions.add(i)}showInfo(e){Nt(e)}showError(e){de(e)}nobubble(e){return n=>{n.stopPropagation(),e.bind(this)(n)}}command(e,n={}){return()=>{this.executeCommand(e,n)}}executeCommand(e,n){const i=Xe.createExecutionContext(n);Xe.execute(e,i)}watch(e,n){const i=Vc(e,n.bind(this));this.signalCleanups.add(i)}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}const Qf="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",em="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-22%200%20300%20300'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpath%20d='M10.5838307,156.409656%20L10.5838307,156.196646%20L10.5838307,123.657627%20L17.7200527,123.657627%20L17.7200527,158.912657%20C18.0516208,161.753926%2017.8075656,164.63288%2017.0023629,167.377784%20C16.19722,170.122687%2014.8474392,172.677251%2013.0335946,174.88924%20C9.6624625,177.797086%205.34298451,179.369568%200.891381719,179.309391%20L0.145805038,173.983903%20C3.01718628,173.985518%205.78730255,172.922981%207.92105685,171.001585%20C9.83826599,168.76489%2010.5838307,165.729334%2010.5838307,156.409656%20Z%20M63.8037763,152.209035%20C63.8037763,156.203166%2063.8037763,159.771277%2064.1232613,162.860071%20L57.7859014,162.860071%20L57.3598815,156.522711%20C56.0343268,158.765028%2054.1386519,160.616318%2051.8656486,161.888456%20C49.5925854,163.160593%2047.0232464,163.808237%2044.4187946,163.765408%20C38.2412071,163.765408%2030.8919752,160.410366%2030.8919752,146.723715%20L30.8919752,123.983721%20L38.0281972,123.983721%20L38.0281972,145.285823%20C38.0281972,152.688352%2040.3181887,157.641058%2046.7620834,157.641058%20C48.0878176,157.655354%2049.4030239,157.404719%2050.6306575,156.903927%20C51.8582911,156.403136%2052.9735276,155.662296%2053.9110465,154.724777%20C54.8485056,153.787318%2055.5894046,152.672022%2056.0901963,151.444448%20C56.5909282,150.216815%2056.8415633,148.901549%2056.8273268,147.575814%20L56.8273268,123.717444%20L63.9634889,123.717444%20L63.9634889,151.996025%20L63.8037763,152.209035%20Z%20M77.330762,136.653806%20C77.330762,131.70104%2077.330762,127.653648%2077.0112304,123.979032%20L83.4018876,123.979032%20L83.7213726,130.635931%20C85.1452074,128.23088%2087.1949721,126.257257%2089.6521533,124.925482%20C92.1093944,123.593709%2094.8819333,122.953703%2097.6742718,123.073695%20C107.153723,123.073695%20114.289945,131.008713%20114.289945,142.831393%20C114.289945,156.784292%20105.715831,163.707504%2096.4493898,163.707504%20C94.0776877,163.813321%2091.7187865,163.305232%2089.6009496,162.232346%20C87.4831127,161.159401%2085.6780613,159.558028%2084.3604623,157.583154%20L84.3604623,178.885226%20L77.330762,178.885226%20L77.330762,136.813578%20L77.330762,136.653806%20Z%20M84.3604623,147.038594%20C84.3797833,148.004885%2084.4867369,148.967408%2084.6800071,149.914378%20C85.2842232,152.279021%2086.6597255,154.374666%2088.5887785,155.869683%20C90.5178913,157.364761%2092.8904309,158.173852%2095.3310427,158.168947%20C102.840047,158.168947%20107.260258,152.044597%20107.260258,143.150938%20C107.260258,135.375686%20103.106354,128.718758%2095.59735,128.718758%20C92.6257387,128.962101%2089.844945,130.280974%2087.7762781,132.428062%20C85.7076111,134.575149%2084.4931374,137.403079%2084.3604623,140.381689%20L84.3604623,147.038594%20Z%20M127.004503,123.94359%20L135.578617,146.896647%20C136.483954,149.452886%20137.442529,152.54168%20138.081618,154.831671%20C138.827183,152.488442%20139.625985,149.506124%20140.58462,146.736875%20L148.359872,123.94359%20L155.868876,123.94359%20L145.21784,151.636343%20C139.892293,164.950152%20136.643726,171.820127%20131.744199,175.97403%20C129.27643,178.228071%20126.267791,179.805756%20123.010354,180.553953%20L121.252929,174.589376%20C123.530581,173.840999%20125.645092,172.666304%20127.48382,171.127799%20C130.081872,169.010501%20132.14366,166.310102%20133.501635,163.246013%20C133.792288,162.715372%20133.990404,162.139031%20134.087428,161.541814%20C134.026892,160.899135%20133.865146,160.270094%20133.60817,159.677902%20L119.122716,123.837079%20L126.897968,123.837079%20L127.004503,123.94359%20Z%20M174.813541,112.770851%20L174.813541,123.954441%20L185.038557,123.954441%20L185.038557,129.279989%20L174.813541,129.279989%20L174.813541,150.262575%20C174.813541,155.055568%20176.198196,157.824817%20180.139089,157.824817%20C181.538758,157.847727%20182.935316,157.686579%20184.292992,157.345559%20L184.612537,162.671047%20C182.57671,163.376355%20180.428486,163.701283%20178.275118,163.629682%20C176.849069,163.718929%20175.420569,163.498622%20174.087657,162.983833%20C172.754744,162.469044%20171.549004,161.671976%20170.553103,160.647363%20C168.383883,157.745977%20167.394359,154.130491%20167.783854,150.528882%20L167.783854,129.226751%20L161.712742,129.226751%20L161.712742,123.901204%20L167.890329,123.901204%20L167.890329,114.421764%20L174.813541,112.770851%20Z%20M198.184399,144.647511%20C198.03988,146.453639%20198.289199,148.269577%20198.915189,149.969888%20C199.541179,151.670199%20200.528884,153.214267%20201.810114,154.495437%20C203.091285,155.776667%20204.635352,156.764373%20206.335664,157.390363%20C208.035975,158.016352%20209.851913,158.265672%20211.658041,158.121153%20C215.311153,158.202863%20218.940457,157.513288%20222.309077,156.097409%20L223.533958,161.422956%20C219.400274,163.12572%20214.955358,163.942168%20210.486396,163.819423%20C207.881107,163.997798%20205.268101,163.61054%20202.826592,162.684147%20C200.385023,161.757814%20198.172795,160.3143%20196.341489,158.452721%20C194.51022,156.591082%20193.103284,154.355345%20192.217196,151.898941%20C191.331104,149.442478%20190.986827,146.82349%20191.207978,144.221491%20C191.207978,132.505346%20198.184399,123.238905%20209.581059,123.238905%20C222.362314,123.238905%20225.557643,134.422495%20225.557643,141.558717%20C225.625954,142.658281%20225.625954,143.761016%20225.557643,144.860581%20L198.024687,144.860581%20L198.184399,144.647511%20Z%20M219.06051,139.322023%20C219.266043,137.898188%20219.163995,136.446897%20218.761184,135.065892%20C218.358433,133.684886%20217.664311,132.406228%20216.725656,131.316115%20C215.786941,130.226062%20214.625525,129.349856%20213.31959,128.746561%20C212.013656,128.143278%20210.59353,127.826939%20209.155039,127.818864%20C206.228949,128.030665%20203.487515,129.327603%20201.467959,131.455549%20C199.448402,133.583436%20198.296377,136.388874%20198.237697,139.322023%20L219.06051,139.322023%20Z%20M236.385366,136.053478%20C236.385366,131.473555%20236.385366,127.532637%20236.065834,123.911277%20L242.456492,123.911277%20L242.456492,131.526792%20L242.775977,131.526792%20C243.446769,129.176325%20244.83268,127.093027%20246.741335,125.566097%20C248.64999,124.039161%20250.986699,123.144369%20253.427072,123.005938%20C254.098762,122.917777%20254.779066,122.917777%20255.450756,123.005938%20L255.450756,129.66288%20C254.63688,129.568608%20253.814868,129.568608%20253.000992,129.66288%20C250.58353,129.756495%20248.282771,130.726973%20246.528505,132.393068%20C244.774238,134.059104%20243.686458,136.306745%20243.468304,138.716252%20C243.269171,139.805946%20243.162278,140.910475%20243.148819,142.018055%20L243.148819,162.734394%20L236.11909,162.734394%20L236.11909,136.106715%20L236.385366,136.053478%20Z'%20fill='%234E4E4E'%3e%3c/path%3e%3cpath%20d='M233.257943,16.9621357%20C233.476636,20.5398773%20232.625434,24.1017075%20230.812666,27.1939108%20C228.999898,30.286174%20226.307754,32.7687777%20223.079047,34.3255867%20C219.85034,35.8823358%20216.231324,36.4427655%20212.683013,35.9355136%20C209.134702,35.4282017%20205.817704,33.8761781%20203.154559,31.4770796%20C200.491421,29.0780409%20198.602703,25.9404959%20197.729013,22.4642047%20C196.855323,18.9879135%20197.036209,15.330196%20198.248625,11.9570899%20C199.461041,8.5839838%20201.650109,5.64808944%20204.536953,3.52346926%20C207.423803,1.39884909%20210.877782,0.181657262%20214.458814,0.0269503701%20C216.806708,-0.10224713%20219.156996,0.233972409%20221.374429,1.01627461%20C223.591922,1.79857323%20225.632893,3.01152758%20227.379981,4.58537259%20C229.12701,6.15922358%20230.54576,8.06291398%20231.554522,10.1869719%20C232.563283,12.3110298%20233.142196,14.6135829%20233.257943,16.9621357%20Z'%20fill='%23767677'%3e%3c/path%3e%3cpath%20d='M127.952969,225.540984%20C80.0236372,225.540984%2037.8984531,208.339518%2016.1170646,182.936721%20C24.5683135,205.78944%2039.8176362,225.504615%2059.8124569,239.428562%20C79.8070981,253.352629%20103.588124,260.816651%20127.952969,260.816651%20C152.318411,260.816651%20176.098839,253.352629%20196.094019,239.428562%20C216.0886,225.504615%20231.337863,205.78944%20239.789471,182.936721%20C218.061379,208.339518%20176.095848,225.540984%20127.952969,225.540984%20Z'%20fill='%23F37726'%3e%3c/path%3e%3cpath%20d='M127.952969,60.3543133%20C175.882898,60.3543133%20218.008142,77.5557785%20239.789471,102.958396%20C231.337863,80.1058563%20216.0886,60.3906823%20196.094019,46.4667348%20C176.098839,32.5427873%20152.318411,25.0784666%20127.952969,25.0784666%20C103.588124,25.0784666%2079.8070981,32.5427873%2059.8124569,46.4667348%20C39.8176362,60.3906823%2024.5683135,80.1058563%2016.1170646,102.958396%20C37.8984531,77.502541%2079.8106871,60.3543133%20127.952969,60.3543133%20Z'%20fill='%23F37726'%3e%3c/path%3e%3cpath%20d='M61.9716874,274.975202%20C62.2528294,279.48161%2061.186045,283.969713%2058.9072992,287.867658%20C56.6284936,291.765602%2053.2409116,294.896926%2049.1761363,296.862707%20C45.1113611,298.828488%2040.5533909,299.539717%2036.0829934,298.905772%20C31.6125362,298.271767%2027.4320141,296.321359%2024.0740419,293.30297%20C20.7160636,290.284582%2018.3326671,286.334835%2017.2274978,281.957035%20C16.1223339,277.579176%2016.3454363,272.971497%2017.868382,268.720869%20C19.3913284,264.470301%2022.1451683,260.769335%2025.7790187,258.089483%20C29.4129289,255.40962%2033.7623156,253.872201%2038.2730898,253.673106%20C41.2280121,253.515051%2044.1851476,253.940738%2046.9755719,254.925846%20C49.7659364,255.910962%2052.3349165,257.436187%2054.5356604,259.414404%20C56.7364042,261.392633%2058.5259031,263.785032%2059.8017495,266.455044%20C61.0776558,269.124996%2061.8150255,272.02022%2061.9716874,274.975202%20Z'%20fill='%239E9E9E'%3e%3c/path%3e%3cpath%20d='M21.5641016,54.5650606%20C18.9814831,54.6363631%2016.4354131,53.9424806%2014.2460944,52.570687%20C12.0567996,51.1988336%2010.3219858,49.2102622%209.25983722,46.8551295%20C8.19768984,44.499937%207.85562972,41.8832824%208.276674,39.3342215%20C8.69771827,36.7851606%209.86306631,34.4174662%2011.6261678,32.5289814%20C13.3892752,30.6404727%2015.6714246,29.3154324%2018.1856119,28.7204982%20C20.6997394,28.1255646%2023.3336813,28.2873008%2025.7562282,29.1853653%20C28.1787154,30.0834346%2030.2815979,31.6777312%2031.800363,33.767765%20C33.3191879,35.8578106%2034.1861222,38.3502842%2034.2921188,40.9317063%20C34.3930308,44.4222341%2033.113057,47.8117302%2030.7300493,50.3642007%20C28.3470417,52.916731%2025.0533134,54.4262842%2021.5641016,54.5650606%20Z'%20fill='%23616262'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",tm="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";zf("k",{resolver:t=>new URL(Object.assign({"../icons/js.svg":Qf,"../icons/jupyter.svg":em,"../icons/python.svg":tm})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});var nm=Object.defineProperty,im=Object.getOwnPropertyDescriptor,xr=(t,e,n,i)=>{for(var r=i>1?void 0:i?im(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&nm(e,n,r),r};let Un=class extends yr{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const t=this.name.trim().split(/ +/),e=t.pop(),n=t.pop();return f`
            <wa-icon library="${n||N}" variant="${this.variant||N}"
                         family="${this.family||N}" name=${e} label="${this.label||this.name||N}"></wa-icon>`}};Un.styles=Le`
        :host {
            display: contents;
        }
    `;xr([d()],Un.prototype,"name",2);xr([d()],Un.prototype,"family",2);xr([d()],Un.prototype,"variant",2);xr([d()],Un.prototype,"label",2);Un=xr([C("k-icon")],Un);const Hc="important",rm=" !"+Hc,ut=Li(class extends Ii{constructor(t){if(super(t),t.type!==At.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,n)=>{const i=t[n];return i==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?n.removeProperty(i):n[i]=null);for(const i in e){const r=e[i];if(r!=null){this.ft.add(i);const s=typeof r=="string"&&r.endsWith(rm);i.includes("-")||s?n.setProperty(i,s?r.slice(0,-11):r,s?Hc:""):n[i]=r}}return et}});let Mo=class extends Ii{constructor(e){if(super(e),this.it=N,e.type!==At.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||e==null)return this._t=void 0,this.it=e;if(e===et)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Mo.directiveName="unsafeHTML",Mo.resultType=1;const en=Li(Mo);const bn=()=>new sm;class sm{}const ho=new WeakMap,tn=Li(class extends Su{render(t){return N}update(t,[e]){const n=e!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),N}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=ho.get(e);n===void 0&&(n=new WeakMap,ho.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?ho.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function Me(t,e,n){return t?e(t):n?.(t)}const hl=(t,e,n)=>{const i=new Map;for(let r=e;r<=n;r++)i.set(t[r],r);return i},Wc=Li(class extends Ii{constructor(t){if(super(t),t.type!==At.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let i;n===void 0?n=e:e!==void 0&&(i=e);const r=[],s=[];let o=0;for(const l of t)r[o]=i?i(l,o):o,s[o]=n(l,o),o++;return{values:s,keys:r}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,i]){const r=ku(t),{values:s,keys:o}=this.dt(e,n,i);if(!Array.isArray(r))return this.ut=o,s;const l=this.ut??=[],c=[];let h,u,p=0,g=r.length-1,b=0,w=s.length-1;for(;p<=g&&b<=w;)if(r[p]===null)p++;else if(r[g]===null)g--;else if(l[p]===o[b])c[b]=On(r[p],s[b]),p++,b++;else if(l[g]===o[w])c[w]=On(r[g],s[w]),g--,w--;else if(l[p]===o[w])c[w]=On(r[p],s[w]),Hi(t,c[w+1],r[p]),p++,w--;else if(l[g]===o[b])c[b]=On(r[g],s[b]),Hi(t,r[p],r[g]),g--,b++;else if(h===void 0&&(h=hl(o,b,w),u=hl(l,p,g)),h.has(l[p]))if(h.has(l[g])){const k=u.get(o[b]),I=k!==void 0?r[k]:null;if(I===null){const S=Hi(t,r[p]);On(S,s[b]),c[b]=S}else c[b]=On(I,s[b]),Hi(t,r[p],I),r[k]=null;b++}else ao(r[g]),g--;else ao(r[p]),p++;for(;b<=w;){const k=Hi(t,c[w+1]);On(k,s[b]),c[b++]=k}for(;p<=g;){const k=r[p++];k!==null&&ao(k)}return this.ut=o,Oc(t,c),et}});function pa(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Kn=pa();function jc(t){Kn=t}var dr={exec:()=>null};function ee(t,e=""){let n=typeof t=="string"?t:t.source,i={replace:(r,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(Ge.caret,"$1"),n=n.replace(r,o),i},getRegex:()=>new RegExp(n,e)};return i}var om=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ge={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},am=/^(?:[ \t]*(?:\n|$))+/,lm=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,cm=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,kr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,dm=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fa=/(?:[*+-]|\d{1,9}[.)])/,Xc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Gc=ee(Xc).replace(/bull/g,fa).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),hm=ee(Xc).replace(/bull/g,fa).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ma=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,um=/^[^\n]+/,ga=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,pm=ee(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ga).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),fm=ee(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,fa).getRegex(),Ls="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ba=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,mm=ee("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ba).replace("tag",Ls).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Kc=ee(ma).replace("hr",kr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ls).getRegex(),gm=ee(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Kc).getRegex(),wa={blockquote:gm,code:lm,def:pm,fences:cm,heading:dm,hr:kr,html:mm,lheading:Gc,list:fm,newline:am,paragraph:Kc,table:dr,text:um},ul=ee("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",kr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ls).getRegex(),bm={...wa,lheading:hm,table:ul,paragraph:ee(ma).replace("hr",kr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ul).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ls).getRegex()},wm={...wa,html:ee(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ba).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:dr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ee(ma).replace("hr",kr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Gc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},vm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ym=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Yc=/^( {2,}|\\)\n(?!\s*$)/,xm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Is=/[\p{P}\p{S}]/u,va=/[\s\p{P}\p{S}]/u,Zc=/[^\s\p{P}\p{S}]/u,km=ee(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,va).getRegex(),Jc=/(?!~)[\p{P}\p{S}]/u,Em=/(?!~)[\s\p{P}\p{S}]/u,Cm=/(?:[^\s\p{P}\p{S}]|~)/u,$m=ee(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",om?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Qc=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Sm=ee(Qc,"u").replace(/punct/g,Is).getRegex(),Am=ee(Qc,"u").replace(/punct/g,Jc).getRegex(),ed="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",_m=ee(ed,"gu").replace(/notPunctSpace/g,Zc).replace(/punctSpace/g,va).replace(/punct/g,Is).getRegex(),Tm=ee(ed,"gu").replace(/notPunctSpace/g,Cm).replace(/punctSpace/g,Em).replace(/punct/g,Jc).getRegex(),Rm=ee("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Zc).replace(/punctSpace/g,va).replace(/punct/g,Is).getRegex(),Lm=ee(/\\(punct)/,"gu").replace(/punct/g,Is).getRegex(),Im=ee(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Om=ee(ba).replace("(?:-->|$)","-->").getRegex(),Dm=ee("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Om).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),os=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,zm=ee(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",os).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),td=ee(/^!?\[(label)\]\[(ref)\]/).replace("label",os).replace("ref",ga).getRegex(),nd=ee(/^!?\[(ref)\](?:\[\])?/).replace("ref",ga).getRegex(),Pm=ee("reflink|nolink(?!\\()","g").replace("reflink",td).replace("nolink",nd).getRegex(),pl=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ya={_backpedal:dr,anyPunctuation:Lm,autolink:Im,blockSkip:$m,br:Yc,code:ym,del:dr,emStrongLDelim:Sm,emStrongRDelimAst:_m,emStrongRDelimUnd:Rm,escape:vm,link:zm,nolink:nd,punctuation:km,reflink:td,reflinkSearch:Pm,tag:Dm,text:xm,url:dr},Mm={...ya,link:ee(/^!?\[(label)\]\((.*?)\)/).replace("label",os).getRegex(),reflink:ee(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",os).getRegex()},No={...ya,emStrongRDelimAst:Tm,emStrongLDelim:Am,url:ee(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",pl).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ee(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",pl).getRegex()},Nm={...No,br:ee(Yc).replace("{2,}","*").getRegex(),text:ee(No.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Nr={normal:wa,gfm:bm,pedantic:wm},ji={normal:ya,gfm:No,breaks:Nm,pedantic:Mm},Fm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fl=t=>Fm[t];function Pt(t,e){if(e){if(Ge.escapeTest.test(t))return t.replace(Ge.escapeReplace,fl)}else if(Ge.escapeTestNoEncode.test(t))return t.replace(Ge.escapeReplaceNoEncode,fl);return t}function ml(t){try{t=encodeURI(t).replace(Ge.percentDecode,"%")}catch{return null}return t}function gl(t,e){let n=t.replace(Ge.findPipe,(s,o,l)=>{let c=!1,h=o;for(;--h>=0&&l[h]==="\\";)c=!c;return c?"|":" |"}),i=n.split(Ge.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(Ge.slashPipe,"|");return i}function Xi(t,e,n){let i=t.length;if(i===0)return"";let r=0;for(;r<i&&t.charAt(i-r-1)===e;)r++;return t.slice(0,i-r)}function Um(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return n>0?-2:-1}function bl(t,e,n,i,r){let s=e.href,o=e.title||null,l=t[1].replace(r.other.outputLinkReplace,"$1");i.state.inLink=!0;let c={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:s,title:o,text:l,tokens:i.inlineTokens(l)};return i.state.inLink=!1,c}function Bm(t,e,n){let i=t.match(n.other.indentCodeCompensation);if(i===null)return e;let r=i[1];return e.split(`
`).map(s=>{let o=s.match(n.other.beginningSpace);if(o===null)return s;let[l]=o;return l.length>=r.length?s.slice(r.length):s}).join(`
`)}var as=class{options;rules;lexer;constructor(t){this.options=t||Kn}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Xi(n,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],i=Bm(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let i=Xi(n,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(n=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Xi(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=Xi(e[0],`
`).split(`
`),i="",r="",s=[];for(;n.length>0;){let o=!1,l=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),o=!0;else if(!o)l.push(n[c]);else break;n=n.slice(c);let h=l.join(`
`),u=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${h}`:h,r=r?`${r}
${u}`:u;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,s,!0),this.lexer.state.top=p,n.length===0)break;let g=s.at(-1);if(g?.type==="code")break;if(g?.type==="blockquote"){let b=g,w=b.raw+`
`+n.join(`
`),k=this.blockquote(w);s[s.length-1]=k,i=i.substring(0,i.length-b.raw.length)+k.raw,r=r.substring(0,r.length-b.text.length)+k.text;break}else if(g?.type==="list"){let b=g,w=b.raw+`
`+n.join(`
`),k=this.list(w);s[s.length-1]=k,i=i.substring(0,i.length-g.raw.length)+k.raw,r=r.substring(0,r.length-b.raw.length)+k.raw,n=w.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:s,text:r}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),i=n.length>1,r={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");let s=this.rules.other.listItemRegex(n),o=!1;for(;t;){let c=!1,h="",u="";if(!(e=s.exec(t))||this.rules.block.hr.test(t))break;h=e[0],t=t.substring(h.length);let p=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,S=>" ".repeat(3*S.length)),g=t.split(`
`,1)[0],b=!p.trim(),w=0;if(this.options.pedantic?(w=2,u=p.trimStart()):b?w=e[1].length+1:(w=e[2].search(this.rules.other.nonSpaceChar),w=w>4?1:w,u=p.slice(w),w+=e[1].length),b&&this.rules.other.blankLine.test(g)&&(h+=g+`
`,t=t.substring(g.length+1),c=!0),!c){let S=this.rules.other.nextBulletRegex(w),P=this.rules.other.hrRegex(w),R=this.rules.other.fencesBeginRegex(w),O=this.rules.other.headingBeginRegex(w),_=this.rules.other.htmlBeginRegex(w);for(;t;){let W=t.split(`
`,1)[0],z;if(g=W,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),z=g):z=g.replace(this.rules.other.tabCharGlobal,"    "),R.test(g)||O.test(g)||_.test(g)||S.test(g)||P.test(g))break;if(z.search(this.rules.other.nonSpaceChar)>=w||!g.trim())u+=`
`+z.slice(w);else{if(b||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||R.test(p)||O.test(p)||P.test(p))break;u+=`
`+g}!b&&!g.trim()&&(b=!0),h+=W+`
`,t=t.substring(W.length+1),p=z.slice(w)}}r.loose||(o?r.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(o=!0));let k=null,I;this.options.gfm&&(k=this.rules.other.listIsTask.exec(u),k&&(I=k[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:h,task:!!k,checked:I,loose:!1,text:u,tokens:[]}),r.raw+=h}let l=r.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){let h=r.items[c].tokens.filter(p=>p.type==="space"),u=h.length>0&&h.some(p=>this.rules.other.anyLine.test(p.raw));r.loose=u}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:i,title:r}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=gl(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===i.length){for(let o of i)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<n.length;o++)s.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:s.align[o]});for(let o of r)s.rows.push(gl(o,s.header.length).map((l,c)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:s.align[c]})));return s}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let s=Xi(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{let s=Um(e[2],"()");if(s===-2)return;if(s>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(i);s&&(i=s[1],r=s[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?i=i.slice(1):i=i.slice(1,-1)),bl(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let i=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[i.toLowerCase()];if(!r){let s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return bl(n,r,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let i=this.rules.inline.emStrongLDelim.exec(t);if(!(!i||i[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[2])||!n||this.rules.inline.punctuation.exec(n))){let r=[...i[0]].length-1,s,o,l=r,c=0,h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*t.length+r);(i=h.exec(e))!=null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(o=[...s].length,i[3]||i[4]){l+=o;continue}else if((i[5]||i[6])&&r%3&&!((r+o)%3)){c+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l+c);let u=[...i[0]][0].length,p=t.slice(0,r+i.index+u+o);if(Math.min(r,o)%2){let b=p.slice(1,-1);return{type:"em",raw:p,text:b,tokens:this.lexer.inlineTokens(b)}}let g=p.slice(2,-2);return{type:"strong",raw:p,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return i&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,i;return e[2]==="@"?(n=e[1],i="mailto:"+n):(n=e[1],i=n),{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,i;if(e[2]==="@")n=e[0],i="mailto:"+n;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);n=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},_t=class Fo{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Kn,this.options.tokenizer=this.options.tokenizer||new as,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:Ge,block:Nr.normal,inline:ji.normal};this.options.pedantic?(n.block=Nr.pedantic,n.inline=ji.pedantic):this.options.gfm&&(n.block=Nr.gfm,this.options.breaks?n.inline=ji.breaks:n.inline=ji.gfm),this.tokenizer.rules=n}static get rules(){return{block:Nr,inline:ji}}static lex(e,n){return new Fo(n).lex(e)}static lexInline(e,n){return new Fo(n).inlineTokens(e)}lex(e){e=e.replace(Ge.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],i=!1){for(this.options.pedantic&&(e=e.replace(Ge.tabCharGlobal,"    ").replace(Ge.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(o=>(r=o.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let o=n.at(-1);r.raw.length===1&&o!==void 0?o.raw+=`
`:n.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.at(-1).src=o.text):n.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},n.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),n.push(r);continue}let s=e;if(this.options.extensions?.startBlock){let o=1/0,l=e.slice(1),c;this.options.extensions.startBlock.forEach(h=>{c=h.call({lexer:this},l),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(r=this.tokenizer.paragraph(s))){let o=n.at(-1);i&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(r),i=s.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let o=n.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(r);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let i=e,r=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)s=r[2]?r[2].length:0,i=i.slice(0,r.index+s)+"["+"a".repeat(r[0].length-s-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let o=!1,l="";for(;e;){o||(l=""),o=!1;let c;if(this.options.extensions?.inline?.some(u=>(c=u.call({lexer:this},e,n))?(e=e.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);let u=n.at(-1);c.type==="text"&&u?.type==="text"?(u.raw+=c.raw,u.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(e,i,l)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),n.push(c);continue}let h=e;if(this.options.extensions?.startInline){let u=1/0,p=e.slice(1),g;this.options.extensions.startInline.forEach(b=>{g=b.call({lexer:this},p),typeof g=="number"&&g>=0&&(u=Math.min(u,g))}),u<1/0&&u>=0&&(h=e.substring(0,u+1))}if(c=this.tokenizer.inlineText(h)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),o=!0;let u=n.at(-1);u?.type==="text"?(u.raw+=c.raw,u.text+=c.text):n.push(c);continue}if(e){let u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}},ls=class{options;parser;constructor(t){this.options=t||Kn}space(t){return""}code({text:t,lang:e,escaped:n}){let i=(e||"").match(Ge.notSpaceStart)?.[0],r=t.replace(Ge.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Pt(i)+'">'+(n?r:Pt(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:Pt(r,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,n=t.start,i="";for(let o=0;o<t.items.length;o++){let l=t.items[o];i+=this.listitem(l)}let r=e?"ol":"ul",s=e&&n!==1?' start="'+n+'"':"";return"<"+r+s+`>
`+i+"</"+r+`>
`}listitem(t){let e="";if(t.task){let n=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=n+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=n+" "+Pt(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):e+=n+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let r=0;r<t.header.length;r++)n+=this.tablecell(t.header[r]);e+=this.tablerow({text:n});let i="";for(let r=0;r<t.rows.length;r++){let s=t.rows[r];n="";for(let o=0;o<s.length;o++)n+=this.tablecell(s[o]);i+=this.tablerow({text:n})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+i+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Pt(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){let i=this.parser.parseInline(n),r=ml(t);if(r===null)return i;t=r;let s='<a href="'+t+'"';return e&&(s+=' title="'+Pt(e)+'"'),s+=">"+i+"</a>",s}image({href:t,title:e,text:n,tokens:i}){i&&(n=this.parser.parseInline(i,this.parser.textRenderer));let r=ml(t);if(r===null)return Pt(n);t=r;let s=`<img src="${t}" alt="${n}"`;return e&&(s+=` title="${Pt(e)}"`),s+=">",s}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Pt(t.text)}},xa=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},Tt=class Uo{options;renderer;textRenderer;constructor(e){this.options=e||Kn,this.options.renderer=this.options.renderer||new ls,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new xa}static parse(e,n){return new Uo(n).parse(e)}static parseInline(e,n){return new Uo(n).parseInline(e)}parse(e,n=!0){let i="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let l=s,c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){i+=c||"";continue}}let o=s;switch(o.type){case"space":{i+=this.renderer.space(o);continue}case"hr":{i+=this.renderer.hr(o);continue}case"heading":{i+=this.renderer.heading(o);continue}case"code":{i+=this.renderer.code(o);continue}case"table":{i+=this.renderer.table(o);continue}case"blockquote":{i+=this.renderer.blockquote(o);continue}case"list":{i+=this.renderer.list(o);continue}case"html":{i+=this.renderer.html(o);continue}case"def":{i+=this.renderer.def(o);continue}case"paragraph":{i+=this.renderer.paragraph(o);continue}case"text":{let l=o,c=this.renderer.text(l);for(;r+1<e.length&&e[r+1].type==="text";)l=e[++r],c+=`
`+this.renderer.text(l);n?i+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):i+=c;continue}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}parseInline(e,n=this.renderer){let i="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=l||"";continue}}let o=s;switch(o.type){case"escape":{i+=n.text(o);break}case"html":{i+=n.html(o);break}case"link":{i+=n.link(o);break}case"image":{i+=n.image(o);break}case"strong":{i+=n.strong(o);break}case"em":{i+=n.em(o);break}case"codespan":{i+=n.codespan(o);break}case"br":{i+=n.br(o);break}case"del":{i+=n.del(o);break}case"text":{i+=n.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}},nr=class{options;block;constructor(t){this.options=t||Kn}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?_t.lex:_t.lexInline}provideParser(){return this.block?Tt.parse:Tt.parseInline}},qm=class{defaults=pa();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Tt;Renderer=ls;TextRenderer=xa;Lexer=_t;Tokenizer=as;Hooks=nr;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let i of t)switch(n=n.concat(e.call(this,i)),i.type){case"table":{let r=i;for(let s of r.header)n=n.concat(this.walkTokens(s.tokens,e));for(let s of r.rows)for(let o of s)n=n.concat(this.walkTokens(o.tokens,e));break}case"list":{let r=i;n=n.concat(this.walkTokens(r.items,e));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{let o=r[s].flat(1/0);n=n.concat(this.walkTokens(o,e))}):r.tokens&&(n=n.concat(this.walkTokens(r.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let s=e.renderers[r.name];s?e.renderers[r.name]=function(...o){let l=r.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[r.level];s?s.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),n.renderer){let r=this.defaults.renderer||new ls(this.defaults);for(let s in n.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let o=s,l=n.renderer[o],c=r[o];r[o]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=c.apply(r,h)),u||""}}i.renderer=r}if(n.tokenizer){let r=this.defaults.tokenizer||new as(this.defaults);for(let s in n.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let o=s,l=n.tokenizer[o],c=r[o];r[o]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=c.apply(r,h)),u}}i.tokenizer=r}if(n.hooks){let r=this.defaults.hooks||new nr;for(let s in n.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let o=s,l=n.hooks[o],c=r[o];nr.passThroughHooks.has(s)?r[o]=h=>{if(this.defaults.async&&nr.passThroughHooksRespectAsync.has(s))return(async()=>{let p=await l.call(r,h);return c.call(r,p)})();let u=l.call(r,h);return c.call(r,u)}:r[o]=(...h)=>{if(this.defaults.async)return(async()=>{let p=await l.apply(r,h);return p===!1&&(p=await c.apply(r,h)),p})();let u=l.apply(r,h);return u===!1&&(u=c.apply(r,h)),u}}i.hooks=r}if(n.walkTokens){let r=this.defaults.walkTokens,s=n.walkTokens;i.walkTokens=function(o){let l=[];return l.push(s.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return _t.lex(t,e??this.defaults)}parser(t,e){return Tt.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let i={...n},r={...this.defaults,...i},s=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=t),r.async)return(async()=>{let o=r.hooks?await r.hooks.preprocess(e):e,l=await(r.hooks?await r.hooks.provideLexer():t?_t.lex:_t.lexInline)(o,r),c=r.hooks?await r.hooks.processAllTokens(l):l;r.walkTokens&&await Promise.all(this.walkTokens(c,r.walkTokens));let h=await(r.hooks?await r.hooks.provideParser():t?Tt.parse:Tt.parseInline)(c,r);return r.hooks?await r.hooks.postprocess(h):h})().catch(s);try{r.hooks&&(e=r.hooks.preprocess(e));let o=(r.hooks?r.hooks.provideLexer():t?_t.lex:_t.lexInline)(e,r);r.hooks&&(o=r.hooks.processAllTokens(o)),r.walkTokens&&this.walkTokens(o,r.walkTokens);let l=(r.hooks?r.hooks.provideParser():t?Tt.parse:Tt.parseInline)(o,r);return r.hooks&&(l=r.hooks.postprocess(l)),l}catch(o){return s(o)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let i="<p>An error occurred:</p><pre>"+Pt(n.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(n);throw n}}},Bn=new qm;function ne(t,e){return Bn.parse(t,e)}ne.options=ne.setOptions=function(t){return Bn.setOptions(t),ne.defaults=Bn.defaults,jc(ne.defaults),ne};ne.getDefaults=pa;ne.defaults=Kn;ne.use=function(...t){return Bn.use(...t),ne.defaults=Bn.defaults,jc(ne.defaults),ne};ne.walkTokens=function(t,e){return Bn.walkTokens(t,e)};ne.parseInline=Bn.parseInline;ne.Parser=Tt;ne.parser=Tt.parse;ne.Renderer=ls;ne.TextRenderer=xa;ne.Lexer=_t;ne.lexer=_t.lex;ne.Tokenizer=as;ne.Hooks=nr;ne.parse=ne;ne.options;ne.setOptions;ne.use;ne.walkTokens;ne.parseInline;Tt.parse;_t.lex;function ka(t){return new Promise((e,n)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>n(t.error)})}function Vm(t,e){let n;const i=()=>{if(n)return n;const r=indexedDB.open(t);return r.onupgradeneeded=()=>r.result.createObjectStore(e),n=ka(r),n.then(s=>{s.onclose=()=>n=void 0},()=>{}),n};return(r,s)=>i().then(o=>s(o.transaction(e,r).objectStore(e)))}let uo;function id(){return uo||(uo=Vm("keyval-store","keyval")),uo}function Hm(t,e=id()){return e("readonly",n=>ka(n.get(t)))}function Wm(t,e,n=id()){return n("readwrite",i=>(i.put(e,t),ka(i.transaction)))}const rd="app-toolbars-main",Di="app-toolbars-main-right",sd="app-toolbars-main-center",Ea="app-toolbars-bottom",Os="app-toolbars-bottom-center",Er="app-toolbars-bottom-end",pn="editor-area-main",cs="sidebar-main",od="sidebar-main-bottom",ad="sidebar-auxiliary",ld="panel-bottom",jm="command-save",cd=!1;var Ca=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(Ca||{});const Xm=Object.freeze(Object.defineProperty({__proto__:null,COMMAND_SAVE:jm,EDITOR_AREA_MAIN:pn,HIDE_DOT_RESOURCE:cd,MouseButton:Ca,PANEL_BOTTOM:ld,SIDEBAR_AUXILIARY:ad,SIDEBAR_MAIN:cs,SIDEBAR_MAIN_BOTTOM:od,TOOLBAR_BOTTOM:Ea,TOOLBAR_BOTTOM_CENTER:Os,TOOLBAR_BOTTOM_END:Er,TOOLBAR_MAIN:rd,TOOLBAR_MAIN_CENTER:sd,TOOLBAR_MAIN_RIGHT:Di},Symbol.toStringTag,{value:"Module"}));class Gm{async persistObject(e,n){return Wm(e,n)}async getObject(e){return Hm(e)}}const Et=new Gm;$e.put("persistenceService",Et);const Gi=".geospace/settings.json",po="dialogSettings",Mn="events/settings/changed";class Km{async checkSettings(){this.appSettings||(this.appSettings=await Et.getObject(Gi),this.appSettings||(this.appSettings={},await Et.persistObject(Gi,this.appSettings)),se(Mn,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,n){await this.checkSettings(),this.appSettings[e]=n,await Et.persistObject(Gi,this.appSettings),se(Mn,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await Et.persistObject(Gi,this.appSettings),se(Mn,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[po]||{})[e]}async setDialogSetting(e,n){await this.checkSettings();const i=this.appSettings[po]||{};i[e]=n,this.appSettings[po]=i,await Et.persistObject(Gi,this.appSettings),se(Mn,this.appSettings)}}const me=new Km;$e.put("appSettings",me);class Ym{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,Po.set(this.updateCounter)}run(e,n){const i=this.createProgressMonitor(e);try{this.tasks.push(i),this.notifyUpdate(),n(i)}finally{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()}}async runAsync(e,n){const i=this.createProgressMonitor(e);return this.tasks.push(i),this.notifyUpdate(),n(i).finally(()=>{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()})}createProgressMonitor(e){const n={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(n,{set:(i,r,s)=>(i[r]=s,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const wi=new Ym;$e.put("taskService",wi);const Zm=an("EsmShService"),Cr=class dt{isEsmShUrl(e){try{const n=new URL(e);return n.hostname==="esm.sh"||n.hostname==="raw.esm.sh"}catch{return!1}}isSourceIdentifier(e){return this.isEsmShUrl(e)||this.isHttpUrl(e)?!1:this.parseSource(e)!==null}isHttpUrl(e){try{const n=new URL(e);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}parseSource(e){return!e||typeof e!="string"||(e=e.trim(),this.isHttpUrl(e))?null:e.startsWith(dt.GITHUB_PREFIX)?this.parseGitHubSource(e):e.startsWith(dt.JSR_PREFIX)?this.parseJsrSource(e):e.startsWith(dt.PR_PREFIX)?this.parsePrSource(e):this.parseNpmSource(e)}parseGitHubSource(e){const i=e.substring(dt.GITHUB_PREFIX.length).split("/");if(i.length<2)return null;const r=i[0],s=i[1];let o,l,c;const h=s.match(/^(.+?)(@(.+))?$/);return h?(o=h[1],l=h[3],i.length>2&&(c=i.slice(2).join("/")),{type:"github",owner:r,repo:o,version:l,path:c}):null}parseJsrSource(e){const n=e.substring(dt.JSR_PREFIX.length);if(!n.startsWith("@"))return null;const i=n.split("/");if(i.length<2)return null;const r=i[0],s=i[1];let o,l,c;const h=s.match(/^(.+?)(@(.+))?$/);return h?(o=`${r}/${h[1]}`,l=h[3],i.length>2&&(c=i.slice(2).join("/")),{type:"jsr",package:o,version:l,path:c}):null}parsePrSource(e){const i=e.substring(dt.PR_PREFIX.length).split("/");if(i.length<2)return null;const r=i[0],s=i[1];let o,l;const c=s.match(/^(.+?)@(.+)$/);return c?(o=c[1],l=c[2]):o=s,{type:"pr",owner:r,repo:o,commit:l}}parseNpmSource(e){const n=e.split("/"),i=n[0];let r,s,o;const l=i.match(/^(.+?)(@(.+))?$/);return l?(r=l[1],s=l[3],n.length>1&&(o=n.slice(1).join("/")),{type:"npm",package:r,version:s,path:o}):null}buildEsmShUrl(e,n){let i=dt.ESM_SH_BASE;switch(e.type){case"npm":i+=`/${e.package}`,e.version&&(i+=`@${e.version}`),e.path&&(i+=`/${e.path}`);break;case"github":i+=`/${dt.GITHUB_PREFIX}${e.owner}/${e.repo}`,e.version&&(i+=`@${e.version}`),e.path&&(i+=`/${e.path}`);break;case"jsr":i+=`/${dt.JSR_PREFIX}${e.package}`,e.version&&(i+=`@${e.version}`),e.path&&(i+=`/${e.path}`);break;case"pr":i+=`/${dt.PR_PREFIX}${e.owner}/${e.repo}`,e.commit&&(i+=`@${e.commit}`);break}const r=[];if(n?.deps){const s=Object.entries(n.deps).map(([o,l])=>`${o}@${l}`).join(",");r.push(`deps=${encodeURIComponent(s)}`)}return n?.target&&r.push(`target=${encodeURIComponent(n.target)}`),n?.dev&&r.push("dev"),n?.bundle===!1?r.push("bundle=false"):n?.bundle===!0&&r.push("bundle"),r.length>0&&(i+=`?${r.join("&")}`),i}normalizeToEsmSh(e,n){if(this.isEsmShUrl(e)||this.isHttpUrl(e))return e;const i=this.parseSource(e);return i?this.buildEsmShUrl(i,n):(Zm.warn(`Could not parse source identifier: ${e}`),e)}extractPackageName(e){const n=this.parseSource(e);if(!n)return null;switch(n.type){case"npm":return n.package||null;case"github":return`${n.owner}/${n.repo}`;case"jsr":return n.package||null;case"pr":return`${n.owner}/${n.repo}`}}isGitHubUrl(e){try{const n=new URL(e);return n.hostname==="github.com"||n.hostname==="www.github.com"}catch{return e.startsWith("https://github.com/")||e.startsWith("http://github.com/")}}convertGitHubUrlToSource(e){try{const i=new URL(e).pathname.split("/").filter(h=>h);if(i.length<2)throw new Error("Invalid GitHub URL format");const r=i[0];let s=i[1].replace(/\.git$/,""),o,l;i.length>2&&(i[2]==="blob"||i[2]==="tree"?(o=i[3]||"main",i[2]==="blob"&&i.length>4&&(l=i.slice(4).join("/"))):i[2]==="commit"?o=i[3]:l=i.slice(2).join("/"));let c=`${dt.GITHUB_PREFIX}${r}/${s}`;return o&&(c+=`@${o}`),l&&(c+=`/${l}`),c}catch{const n=e.match(/github\.com\/([^\/]+)\/([^\/]+)/);return n?`${dt.GITHUB_PREFIX}${n[1]}/${n[2].replace(/\.git$/,"")}`:e}}async fetchGitHubPackageJson(e){if(e.type!=="github")throw new Error("Source must be a GitHub source");const n=e.owner,i=e.repo,r=e.version||"main",s=`https://raw.githubusercontent.com/${n}/${i}/${r}/package.json`,o=await fetch(s);if(!o.ok)throw new Error(`Failed to fetch package.json: ${o.statusText}`);return await o.json()}};Cr.ESM_SH_BASE="https://esm.sh";Cr.GITHUB_PREFIX="gh/";Cr.JSR_PREFIX="jsr/";Cr.PR_PREFIX="pr/";let Jm=Cr;const Mt=new Jm;$e.put("esmShService",Mt);const ir="events/extensionsregistry/extensionsConfigChanged",Ki="extensions",wl="extensions.external";class Qm{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,Fe(Mn,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then(async()=>{const e=this.extensionsSettings?.filter(n=>this.isEnabled(n.id)).map(n=>this.load(n.id).catch(i=>{de("Extension could not be loaded: "+i.message)}))||[];await Promise.all(e)})})}async loadPersistedExternalExtensions(){try{const e=await me.get(wl);e&&Array.isArray(e)&&(e.forEach(n=>{this.extensions[n.id]=n}),G.debug(`Loaded ${e.length} persisted external extensions`))}catch(e){G.error(`Failed to load persisted external extensions: ${e}`)}}async savePersistedExternalExtensions(){try{const e=Object.values(this.extensions).filter(n=>n.external);await me.set(wl,e)}catch(e){G.error(`Failed to save persisted external extensions: ${e}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await me.get(Ki),this.extensionsSettings||(await me.set(Ki,[]),this.extensionsSettings=await me.get(Ki)),se(ir,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e,e.external&&this.savePersistedExternalExtensions().catch(n=>{G.error(`Failed to persist external extension: ${n}`)}),se(ir,this.extensionsSettings)}async loadExtensionFromUrl(e,n){G.info(`Loading extension from URL: ${e}...`);try{let i=e,r=`Extension from ${e}`;if(Mt.isSourceIdentifier(e)){const o=Mt.extractPackageName(e);o&&(r=`Extension: ${o}`),i=Mt.normalizeToEsmSh(e),G.debug(`Converted source identifier to esm.sh URL: ${e} -> ${i}`)}const s=n||`url:${i}`;if(this.isEnabled(s))return G.info(`Extension from URL ${i} is already enabled`),s;if(!this.extensions[s]){const o={id:s,name:r,description:`Extension loaded from: ${e}`,url:i};this.registerExtension(o),G.info(`Registered extension from URL: ${s}`)}return this.enable(s,!1),G.info(`Successfully enabled extension from URL: ${i}`),s}catch(i){throw G.error(`Failed to load extension from URL ${e}: ${i}`),i}}getExtensions(){return Object.values(this.extensions)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(n=>n.id===e&&n.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,n=!1){this.isEnabled(e)||(G.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,n)}).catch(i=>{G.error(`Could not load extension: ${e}: ${i}`)}))}async load(e,n=[]){if(this.loadedExtensions.has(e))return;const i=this.loadingPromises.get(e);if(i)return i;if(n.includes(e)){const o=[...n,e].join(" → ");throw new Error(`Circular dependency detected: ${o}`)}const r=this.extensions[e];if(!r)throw new Error("Extension not found: "+e);const s=(async()=>{try{if(r.dependencies&&r.dependencies.length>0){G.debug(`Loading dependencies for ${e}: ${r.dependencies.join(", ")}`);const l=[...n,e];for(const c of r.dependencies)await this.load(c,l),this.isEnabled(c)||(await this.updateEnablementAsync(c,!0,!1),G.debug(`Auto-enabled dependency: ${c}`))}const o=await wi.runAsync("Loading extension: "+r.name,async()=>{if(r.loader)return r.loader();if(r.url){let l=r.url;return Mt.isSourceIdentifier(r.url)&&(l=Mt.normalizeToEsmSh(r.url),G.debug(`Normalized extension URL: ${r.url} -> ${l}`)),import(l)}});if(this.loadedExtensions.add(e),o?.default instanceof Function){G.debug(`Executing extension function for: ${e}`);try{o?.default(Oi.getProxy()),G.debug(`Extension function executed successfully: ${e}`)}catch(l){throw G.error(`Error executing extension function for ${e}: ${l}`),l}}else G.warn(`Extension ${e} does not export a default function`);G.debug(`Extension loaded: ${e}`)}catch(o){throw this.loadedExtensions.delete(e),o}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,s),s}disable(e,n=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,n)}updateEnablement(e,n,i){this.checkExtensionsConfig().then(()=>{const r=this.extensionsSettings?.find(s=>s.id==e);r?r.enabled=n:this.extensionsSettings?.push({id:e,enabled:n}),me.set(Ki,this.extensionsSettings).then(()=>{if(i){const s=this.extensions[e];Nt(n?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}se(ir,this.extensionsSettings)})})}async updateEnablementAsync(e,n,i){await this.checkExtensionsConfig();const r=this.extensionsSettings?.find(s=>s.id==e);if(r?r.enabled=n:this.extensionsSettings?.push({id:e,enabled:n}),await me.set(Ki,this.extensionsSettings),i){const s=this.extensions[e];Nt(n?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}se(ir,this.extensionsSettings)}}G.debug("ExtensionRegistry initializing...");const q=new Qm;$e.put("extensionRegistry",q);G.debug("ExtensionRegistry initialized");class Xt extends yr{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let n=this;for(;n&&n!==document.body&&n!==document.documentElement;){const i=n.getAttribute("id");if(i){e.unshift(`#${i}`);break}const r=n.tagName.toLowerCase(),s=n.parentElement;if(!s)break;const l=Array.from(s.children).filter(c=>c.tagName.toLowerCase()===r).indexOf(n);l>=0?e.unshift(`${r}:${l}`):e.unshift(r),n=s}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),n=this.getAttribute("id");if(n){this.settingsKey=`${e}:${n}`;return}const i=this.buildDOMTreePath();i&&(this.settingsKey=`${e}:${i}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await me.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await me.setDialogSetting(this.settingsKey,e)}}const dd=class extends Xt{dispose(){}getResult(){}renderMessage(e,n=!1){if(n){const i=ne.parse(e,{async:!1});return f`<div class="dialog-message" style="white-space: normal;">${en(i)}</div>`}return f`<div class="dialog-message" style="white-space: pre-line;">${e}</div>`}};dd.styles=[Le`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let Yn=dd;const Yt=an("DialogService"),qn="dialogs",Ds={id:"ok",label:"OK",variant:"primary"},hd={id:"cancel",label:"Cancel",variant:"default"},ud={id:"close",label:"Close",variant:"default"};let Yi=null;function eg(){return Yi||(Yi=document.createElement("div"),Yi.id="global-dialog-container",document.body.appendChild(Yi)),Yi}class tg{constructor(){this.contributions=new Map,this.loadContributions(),Fe(jt,e=>{e.target===qn&&this.loadContributions()})}loadContributions(){const e=D.getContributions(qn);this.contributions.clear();for(const n of e){if(!n.id){Yt.warn("Dialog contribution missing id, skipping");continue}if(!n.component){Yt.warn(`Dialog contribution "${n.id}" has no component function, skipping`);continue}if(!n.onButton){Yt.warn(`Dialog contribution "${n.id}" has no onButton callback, skipping`);continue}this.contributions.set(n.id,n),Yt.debug(`Loaded dialog contribution: ${n.id}`)}Yt.info(`Loaded ${this.contributions.size} dialog contributions`)}async open(e,n){const i=this.contributions.get(e);if(!i)throw Yt.error(`Dialog "${e}" not found`),new Error(`Dialog "${e}" not found`);return new Promise(r=>{const s=eg();let o=!0,l=null;const c=async()=>{if(o){if(o=!1,l)try{await l.dispose()}catch(b){const w=b instanceof Error?b.message:String(b);Yt.error(`Error disposing dialog content for "${e}": ${w}`)}try{const b=l?l.getResult():void 0;await i.onButton("close",b,p)}catch(b){const w=b instanceof Error?b.message:String(b);Yt.error(`Error executing close callback for dialog "${e}": ${w}`)}gt(f``,s),r()}},h=async b=>{try{const w=l?l.getResult():void 0;await i.onButton(b,w,p)!==!1&&c()}catch(w){const k=w instanceof Error?w.message:String(w);Yt.error(`Error executing button callback for dialog "${e}": ${k}`),c()}},u=i.buttons&&i.buttons.length>0?i.buttons:[Ds];n&&typeof n=="object"&&(n.close=c);const p={...n,close:c},g=f`
                <wa-dialog label="${i.label||e}" open @wa-request-close=${c}>
                    <style>
                        .dialog-service-content {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            padding: 1rem;
                            min-width: 400px;
                        }
                        
                        .dialog-service-footer {
                            display: flex;
                            gap: 0.5rem;
                            justify-content: flex-end;
                            margin-top: 1rem;
                            padding-top: 1rem;
                            border-top: 1px solid var(--wa-color-neutral-20);
                        }

                        :host-context(.wa-light) .dialog-service-footer {
                            border-top-color: var(--wa-color-neutral-80);
                        }
                    </style>
                    
                    <div class="dialog-service-content" 
                         @dialog-ok=${()=>{const b=u.find(w=>w.id==="ok");b&&h(b.id)}}
                         @dialog-cancel=${()=>{const b=u.find(w=>w.id==="cancel");b?h(b.id):c()}}>
                        ${i.component(n)}
                        
                        <div class="dialog-service-footer">
                            ${u.map(b=>f`
                                <wa-button 
                                    variant="${b.variant||"default"}"
                                    ?disabled=${b.disabled}
                                    @click=${()=>h(b.id)}
                                >
                                    ${b.label}
                                </wa-button>
                            `)}
                        </div>
                    </div>
                </wa-dialog>
            `;gt(g,s),(async()=>{const b=Array.from(s.querySelectorAll("*"));for(const w of b)if(w instanceof Yn){await w.updateComplete,l=w;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(e){return this.contributions.has(e)}}const zs=new tg;$e.put("dialogService",zs);class $a extends Xt{}var ng=Object.defineProperty,ig=(t,e,n,i)=>{for(var r=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(e,n,r)||r);return r&&ng(e,n,r),r};class pt extends $a{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return N}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return N}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,zo.set(null),zo.set(this),bt.set(null),bt.set(this)}}ig([d()],pt.prototype,"dirty");const X=an("AppLoader");function ri(t){return t instanceof Error?t.message:String(t)}function rg(t){try{const n=new URL(t).pathname.split("/").filter(Boolean);return n.length>0?n[n.length-1]:void 0}catch{const e=t.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function sg(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const n=e[0];if(!(!n||n==="index.html"||n.endsWith(".html")))return n}const pd=class Bo{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(e,n){this.apps.has(e.id)&&X.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),X.info(`Registered app: ${e.name} (${e.id}) v${e.version}`),n?.defaultAppId&&(this.defaultAppId=n.defaultAppId),n?.container&&(this.container=n.container),n?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(e){this.systemRequiredExtensions.add(e)}async loadAppFromUrl(e){X.info(`Loading app from URL: ${e}...`);try{const n=await import(e);if(!n.default)throw new Error(`Module at ${e} does not have a default export`);const i=n.default;if(!i.id||!i.name||!i.version)throw new Error(`Module at ${e} does not export a valid AppDefinition`);return X.info(`Successfully loaded app definition from URL: ${i.name} (${i.id})`),i}catch(n){throw X.error(`Failed to load app from URL ${e}: ${ri(n)}`),n}}async start(){if(this.started){X.debug("AppLoader already started");return}this.started=!0,X.info("Starting AppLoader...");const e=new URLSearchParams(window.location.search),n=e.get("app"),i=e.get("appId"),r=sg(),s=this.apps.size;let o;if(n&&(o=rg(n),o&&X.info(`Extracted app ID from URL path: ${o}`)),r&&X.info(`Extracted app ID from current page path: ${r}`),n)try{X.info(`URL parameter 'app' found: ${n}, attempting to load extension or app`);try{await q.loadExtensionFromUrl(n),X.info(`Successfully loaded extension from URL: ${n}`)}catch(c){X.info(`Failed to load as extension, trying as app definition: ${ri(c)}`);try{const h=await this.loadAppFromUrl(n);this.registerApp(h),await this.loadApp(h.id,this.container),X.info(`Successfully loaded app from URL: ${n}`);return}catch(h){throw X.error(`Failed to load from URL as both extension and app: ${ri(h)}`),h}}}catch(c){X.error(`Failed to load from URL parameter, falling back to default app: ${ri(c)}`)}const l=await this.selectAppToLoad({appIdFromUrl:i,appIdFromPath:r,appIdFromAppUrl:o,appsBeforeExtension:s});if(!l)throw new Error("No apps registered");await this.loadApp(l,this.container)}async loadApp(e,n){const i=this.apps.get(e);if(!i)throw new Error(`App '${e}' not found. Make sure it's registered.`);X.info(`Loading app: ${i.name}...`),this.currentApp&&(X.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(X.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(s=>{q.disable(s)}))),i.contributions&&(X.info("Registering app contributions..."),i.contributions.ui&&(i.contributions.ui.forEach(s=>{const o=s.target;o&&D.registerContribution(o,s)}),X.info(`Registered ${i.contributions.ui.length} UI contributions`)),i.contributions.extensions&&(i.contributions.extensions.forEach(s=>{q.registerExtension(s)}),X.info(`Registered ${i.contributions.extensions.length} app extensions`)));const r=new Set(i.extensions||[]);this.systemRequiredExtensions.forEach(s=>r.add(s)),i.extensions=Array.from(r),i.extensions.length>0&&(X.info(`Enabling ${i.extensions.length} extensions...`),i.extensions.forEach(s=>{q.enable(s)})),i.initialize&&(X.info(`Initializing ${i.name}...`),await i.initialize()),this.currentApp=i,X.info(`App ${i.name} loaded successfully`),this.updateDocumentMetadata(i),n&&this.renderApp(n),window.dispatchEvent(new CustomEvent("app-loaded",{detail:{appId:i.id}}))}updateDocumentMetadata(e){if(document.title=e.name,e.metadata?.favicon){const n=e.metadata.favicon;let i=document.querySelector("link[rel*='icon']");i||(i=document.createElement("link"),i.rel="icon",document.head.appendChild(i)),i.type="image/svg+xml",i.href=n}}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const n=this.currentApp.render;if(typeof n=="string"){const i=document.createElement(n);e.innerHTML="",e.appendChild(i)}else if(n&&typeof n=="object"&&"tag"in n){const i=document.createElement(n.tag);for(const[r,s]of Object.entries(n.attributes??{}))i.setAttribute(r,s);e.innerHTML="",e.appendChild(i)}else if(typeof n=="function"){const i=n();gt(i,e)}else gt(f`<k-standard-app></k-standard-app>`,e);X.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}async getPreferredAppId(){try{return await me.get(Bo.PREFERRED_APP_KEY)}catch(e){X.debug(`Failed to get preferred app ID from settings: ${ri(e)}`);return}}async setPreferredAppId(e){if(!this.apps.has(e))throw new Error(`App '${e}' not found. Make sure it's registered.`);try{await me.set(Bo.PREFERRED_APP_KEY,e),this.defaultAppId=e,X.info(`Set preferred app to: ${e}`)}catch(n){throw X.error(`Failed to persist preferred app ID: ${ri(n)}`),n}}async selectAppToLoad(e){const{appIdFromUrl:n,appIdFromPath:i,appIdFromAppUrl:r,appsBeforeExtension:s}=e;if(n){if(this.apps.has(n))return X.info(`Loading app specified by URL parameter 'appId': ${n}`),n;X.warn(`App ID '${n}' from URL parameter not found`)}if(i){if(this.apps.has(i))return X.info(`Loading app from URL path: ${i}`),i;X.debug(`App ID '${i}' from URL path not found, continuing search`)}if(r&&this.apps.has(r))return X.info(`Loading app using ID extracted from app URL path: ${r}`),r;if(this.apps.size>s){const c=Array.from(this.apps.values()).slice(s);if(c.length>0){const h=c[0];return X.info(`Loading app registered by extension: ${h.name} (${h.id})`),h.id}}const o=await this.getPreferredAppId();if(o&&this.apps.has(o))return X.info(`Loading preferred app from settings: ${o}`),o;if(this.defaultAppId){if(this.apps.has(this.defaultAppId))return this.defaultAppId;X.warn(`Default app '${this.defaultAppId}' not found`)}const l=this.getRegisteredApps();if(l.length>0){const c=l[0];return X.info(`Loading first registered app: ${c.name} (${c.id})`),c.id}}};pd.PREFERRED_APP_KEY="preferredAppId";let og=pd;const mt=new og;$e.put("appLoaderService",mt);var ag=Object.defineProperty,lg=Object.getOwnPropertyDescriptor,$r=(t,e,n,i)=>{for(var r=i>1?void 0:i?lg(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&ag(e,n,r),r};let Vn=class extends Yn{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(t){super.firstUpdated(t),this.inputValue=this.defaultValue,await this.updateComplete;const e=this.shadowRoot?.querySelector("wa-input");if(e){const n=e.shadowRoot?.querySelector("input");n&&(n.focus(),n.select())}}getResult(){return this.inputValue}handleInput(t){this.inputValue=t.target.value}handleKeyDown(t){t.key==="Enter"?(t.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):t.key==="Escape"&&(t.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return f`
            ${this.renderMessage(this.message,this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `}};Vn.styles=[...Yn.styles,Le`
            wa-input {
                width: 100%;
            }
        `];$r([d({type:String})],Vn.prototype,"message",2);$r([d({type:String,attribute:"default-value"})],Vn.prototype,"defaultValue",2);$r([d({type:Boolean})],Vn.prototype,"markdown",2);$r([$()],Vn.prototype,"inputValue",2);Vn=$r([C("k-prompt-dialog-content")],Vn);D.registerContribution(qn,{id:"prompt",label:"Input",buttons:[Ds,hd],component:t=>t?f`
            <k-prompt-dialog-content 
                .message="${t.message}"
                .defaultValue="${t.defaultValue}"
                .markdown="${t.markdown}"
            ></k-prompt-dialog-content>
        `:f`<div>Error: No prompt dialog state</div>`,onButton:async(t,e,n)=>(n&&(t==="ok"?n.resolve(e||""):n.resolve(null)),!0)});async function Sa(t,e="",n=!1){return new Promise(i=>{zs.open("prompt",{message:t,defaultValue:e,markdown:n,resolve:i})})}var cg=Object.defineProperty,dg=Object.getOwnPropertyDescriptor,Aa=(t,e,n,i)=>{for(var r=i>1?void 0:i?dg(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&cg(e,n,r),r};let ds=class extends Yn{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return f`
            ${this.renderMessage(this.message,this.markdown)}
        `}};Aa([d({type:String})],ds.prototype,"message",2);Aa([d({type:Boolean})],ds.prototype,"markdown",2);ds=Aa([C("k-info-dialog-content")],ds);D.registerContribution(qn,{id:"info",label:"Information",buttons:[Ds],component:t=>t?f`
            <k-info-dialog-content 
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></k-info-dialog-content>
        `:f`<div>Error: No info dialog state</div>`,onButton:async(t,e,n)=>(n&&n.resolve&&n.resolve(),!0)});var hg=Object.defineProperty,ug=Object.getOwnPropertyDescriptor,_a=(t,e,n,i)=>{for(var r=i>1?void 0:i?ug(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&hg(e,n,r),r};let hs=class extends Yn{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return f`
            ${this.renderMessage(this.message,this.markdown)}
        `}};_a([d({type:String})],hs.prototype,"message",2);_a([d({type:Boolean})],hs.prototype,"markdown",2);hs=_a([C("k-confirm-dialog-content")],hs);D.registerContribution(qn,{id:"confirm",label:"Confirm",buttons:[Ds,hd],component:t=>t?f`
            <k-confirm-dialog-content 
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></k-confirm-dialog-content>
        `:f`<div>Error: No confirm dialog state</div>`,onButton:async(t,e,n)=>(n&&(t==="ok"?n.resolve(!0):n.resolve(!1)),!0)});async function Ps(t,e=!1){return new Promise(n=>{zs.open("confirm",{message:t,markdown:e,resolve:n})})}var pg=Object.defineProperty,fg=Object.getOwnPropertyDescriptor,Zn=(t,e,n,i)=>{for(var r=i>1?void 0:i?fg(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&pg(e,n,r),r};let nn=class extends Yn{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(t){super.firstUpdated(t),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const e=this.closest("wa-dialog");e&&(this.dialogElement=e,this.updateDialogLabel());const n=this.closest(".dialog-service-content");if(n){const i=n.parentElement?.querySelector(".dialog-service-footer");i&&(i.style.display="none")}}updated(t){super.updated(t),t.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),t.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(t,e,n){this.currentTitle=t,this.currentMessage=e,this.actions=[...n],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(t){t.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const t=this.actions.filter(n=>n.label!=="Close"),e=this.actions.filter(n=>n.label==="Close");return f`
            <div class="dialog-content">
                <wa-scroller class="dialog-scroller">
                    ${this.renderMessage(this.currentMessage,this.markdown)}
                </wa-scroller>
                
                <div class="dialog-actions">
                    <div class="dialog-actions-left">
                        ${t.map(n=>f`
                            <wa-button 
                                variant="${n.variant||"default"}"
                                ?disabled=${n.disabled}
                                @click=${()=>this.handleActionClick(n)}
                            >
                                ${n.label}
                            </wa-button>
                        `)}
                    </div>
                    <div class="dialog-actions-right">
                        ${e.map(n=>f`
                            <wa-button 
                                variant="${n.variant||"primary"}"
                                @click=${()=>{this.handleActionClick(n),this.handleClose()}}
                            >
                                ${n.label}
                            </wa-button>
                        `)}
                    </div>
                </div>
            </div>
        `}};nn.styles=[...Yn.styles,Le`
            :host {
                display: block;
            }

            :host-context(.dialog-service-content) {
                padding: 0;
            }
            
            .dialog-content {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                min-width: 400px;
                max-width: 600px;
                height: 500px;
                padding: 1rem;
            }
            
            .dialog-scroller {
                flex: 1;
                overflow-y: auto;
            }
            
            .dialog-actions {
                display: flex;
                gap: 0.5rem;
                justify-content: space-between;
                margin-top: 0.5rem;
            }
            
            .dialog-actions-left,
            .dialog-actions-right {
                display: flex;
                gap: 0.5rem;
            }
        `];Zn([d({type:String})],nn.prototype,"title",2);Zn([d({type:String})],nn.prototype,"message",2);Zn([d({type:Boolean})],nn.prototype,"markdown",2);Zn([$()],nn.prototype,"actions",2);Zn([$()],nn.prototype,"currentTitle",2);Zn([$()],nn.prototype,"currentMessage",2);nn=Zn([C("k-navigable-info-dialog-content")],nn);D.registerContribution(qn,{id:"navigable-info",label:"Information",buttons:[ud],component:t=>{if(!t)return f`<div>Error: No navigable info dialog state</div>`;const e=f`
            <k-navigable-info-dialog-content 
                .title="${t.title}"
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></k-navigable-info-dialog-content>
        `;return(async()=>{const n=document.querySelector("k-navigable-info-dialog-content");n&&(await n.updateComplete,n.actions=t.actions||[],n.resolveCallback=t.resolve,t.updateDialogRef&&(t.updateDialogRef.current=(i,r,s)=>{n.updateDialog(i,r,s)}))})(),e},onButton:async(t,e,n)=>n&&t==="close"&&n.resolve?(n.resolve(),!0):!1});var mg=Object.getOwnPropertyDescriptor,gg=(t,e,n,i)=>{for(var r=i>1?void 0:i?mg(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};let qo=class extends Xt{render(){return f`
            <slot></slot>
        `}};qo.styles=Le`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;qo=gg([C("k-app")],qo);var bg=Object.defineProperty,wg=Object.getOwnPropertyDescriptor,zi=(t,e,n,i)=>{for(var r=i>1?void 0:i?wg(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&bg(e,n,r),r};let vn=class extends Xt{constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),Fe(jt,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[n]=t.split(":");if(e===`${n}:*`)return!0;const i=e.split(":");if(i.length===2){const r=i[1];if(r==="system.editors"||r===".system.editors")return this.isEditor&&t.startsWith(`${n}:`)}return!1}loadContributions(t){const e=D.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[n]=t.split(":"),i=`${n}:*`,r=D.getContributions(i),s=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const l of o){const c=`${n}:${l}`,h=D.getContributions(c);s.push(...h)}}this.contributions=[...r,...s,...e]}contributionCreator(t){if("command"in t){const e=t,n=!!e.showLabel;return f`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${e.icon} label="${e.label}"></wa-icon>
                    ${n?e.label:""}
                </wa-button>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():en(e)}else return f`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return f`
            <div class="toolbar-items" style=${ut({"justify-content":this.position})}>
                <slot name="start">
                    ${this.contributions.filter(e=>e.slot==="start").map(this.contributionCreator.bind(this))}
                </slot>
                ${t}
                ${this.contributions.filter(e=>e.slot===void 0).map(this.contributionCreator.bind(this))}
                <slot>
                </slot>
                <slot name="end">
                    ${this.contributions.filter(e=>e.slot==="end").map(this.contributionCreator.bind(this))}
                </slot>
            </div>
        `}};vn.styles=Le`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;zi([d()],vn.prototype,"position",2);zi([d({type:Boolean,attribute:"is-editor"})],vn.prototype,"isEditor",2);zi([d({attribute:!1})],vn.prototype,"partToolbarContent",2);zi([d({attribute:!1})],vn.prototype,"partToolbarRenderer",2);zi([$()],vn.prototype,"contributions",2);vn=zi([C("k-toolbar")],vn);var vg=Object.defineProperty,yg=Object.getOwnPropertyDescriptor,Pi=(t,e,n,i)=>{for(var r=i>1?void 0:i?yg(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&vg(e,n,r),r};let yn=class extends Xt{constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=bn(),this.dropdownRef=bn()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),Fe(jt,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[n]=t.split(":");if(e===`${n}:*`)return!0;const i=e.split(":");if(i.length===2){const r=i[1];if(r==="system.editors"||r===".system.editors")return this.isEditor&&t.startsWith(`${n}:`)}return!1}loadContributions(t){const e=D.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[n]=t.split(":"),i=`${n}:*`,r=D.getContributions(i),s=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const l of o){const c=`${n}:${l}`,h=D.getContributions(c);s.push(...h)}}this.contributions=[...r,...s,...e]}getElementFromPoint(t,e){let n=document.elementFromPoint(t,e);if(!n)return null;for(;n;){const i=n.shadowRoot;if(i){const r=i.elementFromPoint(t,e);if(r&&r!==n){n=r;continue}}break}return n}triggerClickUnderCursor(t){const e=this.getElementFromPoint(t.clientX,t.clientY);if(e){const n=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:t.clientX,clientY:t.clientY,screenX:t.screenX,screenY:t.screenY,button:0,buttons:0,detail:1,which:1});e.dispatchEvent(n)}}show(t,e){e&&this.triggerClickUnderCursor(e),this.position=t,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(t,e){return async()=>{this.executeCommand(t,e||{})}}renderContribution(t){if("command"in t){const e=t;return f`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(e.command,e.params)}
                    ?disabled="${e.disabled?.get()}">
                    ${e.icon?f`<wa-icon slot="icon" name=${e.icon}></wa-icon>`:""}
                    ${e.label}
                </wa-dropdown-item>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():en(e)}return N}render(){if(!this.isOpen)return N;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():N;return f`
            <wa-dropdown 
                ${tn(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${tn(this.anchorRef)}
                    style="position: fixed; 
                           left: ${this.position.x}px; 
                           top: ${this.position.y}px; 
                           width: 1px; 
                           height: 1px; 
                           pointer-events: none;">
                </div>
                
                ${t}
                ${this.contributions.map(e=>this.renderContribution(e))}
            </wa-dropdown>
        `}};yn.styles=Le`
        :host {
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            pointer-events: none;
            z-index: 10000;
        }

        wa-dropdown {
            pointer-events: auto;
            min-width: 200px;
        }
        
        wa-dropdown::part(panel) {
            min-width: 200px;
        }
    `;Pi([d({type:Boolean,attribute:"is-editor"})],yn.prototype,"isEditor",2);Pi([d({attribute:!1})],yn.prototype,"partContextMenuRenderer",2);Pi([$()],yn.prototype,"contributions",2);Pi([$()],yn.prototype,"isOpen",2);Pi([$()],yn.prototype,"position",2);yn=Pi([C("k-contextmenu")],yn);var xg=Object.defineProperty,kg=Object.getOwnPropertyDescriptor,fd=(t,e,n,i)=>{for(var r=i>1?void 0:i?kg(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&xg(e,n,r),r};let us=class extends $a{constructor(){super(...arguments),this.contributions=[],this.tabGroup=bn(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(e),this.setupToolbarResizeObserver(e)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&(this.updateToolbarFromComponent(n),requestAnimationFrame(()=>this.updateToolbarHeightVariable(n)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&this.updateContextMenuFromComponent(n)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,n=e.closest("wa-tab");if(n){const o=n.getAttribute("panel");if(o){const l=this.getTabPanel(o);if(l){const c=l.querySelector(".tab-content");if(c&&c.firstElementChild){const h=c.firstElementChild;h instanceof pt&&bt.set(h)}}}return}const i=e.closest("wa-scroller.tab-content");if(!i)return;const r=i.closest("wa-tab-panel");if(!r)return;const s=r.querySelector(".tab-content");if(s&&s.firstElementChild){const o=s.firstElementChild;o instanceof pt&&bt.set(o)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,n=e.target.closest("wa-scroller.tab-content");if(!n)return;e.preventDefault();const i=n.closest("wa-tab-panel");i&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(i);const r=i.querySelector("k-contextmenu");r&&r.show({x:e.clientX,y:e.clientY},e)})}))}),Fe(jt,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===pn;this.contributions.forEach(n=>{const i=this.getTabPanel(n.name);if(!i)return;const r=i.querySelector(".tab-content");if(r&&r.firstElementChild){const s=r.firstElementChild;s instanceof pt&&(s.tabContribution=n,s.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(i))})}}has(t){return this.tabGroup.value?!!this.getTabPanel(t):!1}activate(t){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(t){if(this.contributions.find(n=>n.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const n=this.getTabPanel(t.name);if(n){const i=n.querySelector(".tab-content");if(i&&i.firstElementChild){const r=i.firstElementChild;r instanceof pt&&(r.tabContribution=t,r.isEditor=this.containerId===pn)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(n),this.updateToolbarHeightVariable(n),this.setupToolbarResizeObserver(n)})}})}handleTabAuxClick(t,e){t.button===Ca.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await Ps("Unsaved changes will be lost: Do you really want to close?"))return;const n=this.getTabPanel(e);if(!n)return;const i=this.contributions.find(s=>s.name===e);if(!i)return;this.cleanupTabInstance(n);const r=this.contributions.indexOf(i);r>-1&&this.contributions.splice(r,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:n})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=D.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=this.resizeObservers.get(t);e&&(e.disconnect(),this.resizeObservers.delete(t));const n=t.querySelector(".tab-content");if(n&&n.firstElementChild){const i=n.firstElementChild;"close"in i&&typeof i.close=="function"&&i.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`):null}getTab(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`):null}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof pt)||!n.renderToolbar)return;const i=t.querySelector("k-toolbar");i&&(i.partToolbarRenderer=()=>n.renderToolbar(),i.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof pt)||!n.renderContextMenu)return;const i=t.querySelector("k-contextmenu");i&&(i.partContextMenuRenderer=()=>n.renderContextMenu(),i.requestUpdate())}updateToolbarHeightVariable(t){const e=t.querySelector(".tab-toolbar");if(!e)return;const n=e.offsetHeight;t.style.setProperty("--toolbar-height",`${n}px`)}setupToolbarResizeObserver(t){if(this.resizeObservers.has(t))return;const e=t.querySelector(".tab-toolbar");if(!e)return;const n=new ResizeObserver(()=>{this.updateToolbarHeightVariable(t)});n.observe(e),this.resizeObservers.set(t,n)}render(){const t=mt.getCurrentApp();return f`
            <wa-tab-group ${tn(this.tabGroup)}>
                ${Me(this.contributions.length===0,()=>f`
                        <div class="empty-state">
                            ${Me(t,()=>f`
                                    <div class="empty-content">
                                        <h2 class="empty-title">${t.name}</h2>
                                        ${Me(t.description,()=>f`<p class="empty-description">${t.description}</p>`)}
                                    </div>
                                `,()=>f`
                                    <wa-icon name="folder-open" class="empty-icon"></wa-icon>
                                `)}
                        </div>
                    `,()=>Wc(this.contributions,e=>e.name,e=>f`
                            <wa-tab panel="${e.name}"
                                    @auxclick="${n=>this.handleTabAuxClick(n,e)}">
                                <k-icon name="${e.icon}"></k-icon>
                                ${e.label}
                                ${Me(e.closable,()=>f`
                                    <wa-icon name="xmark" label="Close"  @click="${n=>this.closeTab(n,e.name)}"></wa-icon>
                                `)}
                            </wa-tab>
                            <wa-tab-panel name="${e.name}">
                                <k-toolbar id="toolbar:${e.editorId??e.name}" 
                                           class="tab-toolbar"
                                           ?is-editor="${this.containerId===pn}"></k-toolbar>
                                <wa-scroller class="tab-content" orientation="vertical">
                                    ${e.component?e.component(e.name):N}
                                </wa-scroller>
                                <k-contextmenu id="contextmenu:${e.name}"
                                               ?is-editor="${this.containerId===pn}"></k-contextmenu>
                            </wa-tab-panel>
                        `))}
            </wa-tab-group>
        `}};us.styles=Le`
        :host {
            height: 100%;
            width: 100%;
        }

        wa-tab-group {
            height: 100%;
            width: 100%;
        }

        wa-tab-group::part(base) {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            height: 100%;
            width: 100%;
        }

        wa-tab-panel[active] {
            display: grid;
            grid-template-rows: minmax(0, 1fr);
            height: 100%;
            width: 100%;
            overflow: hidden;
            position: relative;
        }

        .tab-content {
            position: absolute;
            top: calc(var(--toolbar-height, 0px));
            right: 0;
            left: 0;
            height: calc(100% - var(--toolbar-height, 0px));
        }

        wa-tab::part(base) {
            padding: 3px 0.5rem;
        }

        wa-tab-panel {
            --padding: 0px;
        }

        .part-dirty::part(base) {
            font-style: italic;
            color: var(--wa-color-danger-fill-loud)
        }

        .empty-state {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            grid-row: 2;
        }

        .empty-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
            gap: 0.75rem;
            opacity: 0.3;
        }

        .empty-title {
            margin: 0;
            font-size: 1.5rem;
            font-weight: 500;
            color: var(--wa-color-text-quiet);
        }

        .empty-description {
            margin: 0;
            font-size: 1rem;
            color: var(--wa-color-text-quiet);
            max-width: 500px;
        }

        .empty-icon {
            font-size: 6rem;
            opacity: 0.2;
            color: var(--wa-color-text-quiet);
        }
    `;fd([$()],us.prototype,"contributions",2);us=fd([C("k-tabs")],us);var Eg=Object.defineProperty,Cg=Object.getOwnPropertyDescriptor,Sr=(t,e,n,i)=>{for(var r=i>1?void 0:i?Cg(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Eg(e,n,r),r};let vi=class extends Xt{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=t=>{if(!this.resizing)return;const n=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,i=[...this.resizing.startSizes];i[this.resizing.handleIndex]+=n,i[this.resizing.handleIndex+1]-=n;const r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=r*.05;if(i[this.resizing.handleIndex]>=s&&i[this.resizing.handleIndex+1]>=s){this.resizing.currentSizes=i;const o=i.map((l,c)=>{const u=`${(l/r*100).toFixed(2)}%`;return c===i.length-1?u:`${u} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=o:this.style.gridTemplateRows=o}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const t=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/t*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,n)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${n*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${n*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const n=this.orientation==="horizontal"?t.clientX:t.clientY,i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,r=this.gridSizes.map(s=>s.endsWith("%")?parseFloat(s)/100*i:(s.endsWith("px"),parseFloat(s)));this.resizing={handleIndex:e,startPos:n,startSizes:r},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return N;const t=this.gridSizes.flatMap((e,n)=>n===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",f`
            <style>
                .resize-handle {
                    position: relative;
                    z-index: 10;
                    background-color: var(--wa-color-neutral-border-quiet);
                    transition: background-color var(--wa-transition-fast);
                }
                
                .resize-handle:hover {
                    background-color: var(--wa-color-brand-fill-normal);
                }
            </style>
            
            ${this.gridChildren.map((e,n)=>{if(n<this.gridChildren.length-1){const i=this.orientation==="horizontal"?`${n*2+2}`:"1",r=this.orientation==="vertical"?`${n*2+2}`:"1";return f`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${i};
                                grid-row: ${r};
                            "
                            @mousedown=${s=>this.startResize(s,n)}
                        ></div>
                    `}return N})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Sr([d()],vi.prototype,"orientation",2);Sr([d()],vi.prototype,"sizes",2);Sr([$()],vi.prototype,"gridSizes",2);Sr([$()],vi.prototype,"gridChildren",2);vi=Sr([C("k-resizable-grid")],vi);var Ta=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};function L(t,e){const n={waitUntilFirstUpdate:!1,...e};return(i,r)=>{const{update:s}=i,o=Array.isArray(t)?t:[t];i.update=function(l){o.forEach(c=>{const h=c;if(l.has(h)){const u=l.get(h),p=this[h];u!==p&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,p)}}),s.call(this,l)}}}var $g=`:host {
  box-sizing: border-box !important;
}

:host *,
:host *::before,
:host *::after {
  box-sizing: inherit !important;
}

[hidden] {
  display: none !important;
}
`,Yr,M=class extends gn{constructor(){super(),Bf(this,Yr,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,n)=>{if(this.internals?.states)try{n?this.internals.states.add(e):this.internals.states.delete(e)}catch(i){if(String(i).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw i}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,n]of t.elementProperties)n.default==="inherit"&&n.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${n.initial}`,!0)}static get styles(){const t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[$g,...t].map(e=>typeof e=="string"?yc(e):e)}attributeChangedCallback(t,e,n){Uf(this,Yr)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),qf(this,Yr,!0)),super.attributeChangedCallback(t,e,n)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,n)=>{t.has(n)&&this[n]==null&&(this[n]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){const n=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});n.error=e,this.dispatchEvent(n)}throw e}}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};Yr=new WeakMap;a([d()],M.prototype,"dir",2);a([d()],M.prototype,"lang",2);a([d({type:Boolean,reflect:!0,attribute:"did-ssr"})],M.prototype,"didSSR",2);var pi=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},Sg=`:host {
  --primary-color: currentColor;
  --primary-opacity: 1;
  --secondary-color: currentColor;
  --secondary-opacity: 0.4;

  box-sizing: content-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: -0.125em;
}

/* Standard */
:host(:not([auto-width])) {
  width: 1.25em;
  height: 1em;
}

/* Auto-width */
:host([auto-width]) {
  width: auto;
  height: 1em;
}

svg {
  height: 1em;
  fill: currentColor;
  overflow: visible;

  /* Duotone colors with path-specific opacity fallback */
  path[data-duotone-primary] {
    color: var(--primary-color);
    opacity: var(--path-opacity, var(--primary-opacity));
  }

  path[data-duotone-secondary] {
    color: var(--secondary-color);
    opacity: var(--path-opacity, var(--secondary-opacity));
  }
}
`,Zi=Symbol(),Fr=Symbol(),fo,mo=new Map,nt=class extends M{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.resolveIcon=async(t,e)=>{let n;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=f`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(i,this),this.svg}try{if(n=await fetch(t,{mode:"cors"}),!n.ok)return n.status===410?Zi:Fr}catch{return Fr}try{const i=document.createElement("div");i.innerHTML=await n.text();const r=i.firstElementChild;if(r?.tagName?.toLowerCase()!=="svg")return Zi;fo||(fo=new DOMParser);const o=fo.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):Zi}catch{return Zi}}}connectedCallback(){super.connectedCallback(),Of(this)}firstUpdated(t){super.firstUpdated(t),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Df(this)}getIconSource(){const t=co(this.library),e=this.family||Mf();return this.name&&t?{url:t.resolver(this.name,e,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:e}=this.getIconSource(),n=e?co(this.library):void 0;if(!t){this.svg=null;return}let i=mo.get(t);i||(i=this.resolveIcon(t,n),mo.set(t,i));const r=await i;if(r===Fr&&mo.delete(t),t===this.getIconSource().url){if(yu(r)){this.svg=r;return}switch(r){case Fr:case Zi:this.svg=null,this.dispatchEvent(new pi);break;default:this.svg=r.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Ta)}}}updated(t){super.updated(t);const e=co(this.library),n=this.shadowRoot?.querySelector("svg");n&&e?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:f`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};nt.css=Sg;a([$()],nt.prototype,"svg",2);a([d({reflect:!0})],nt.prototype,"name",2);a([d({reflect:!0})],nt.prototype,"family",2);a([d({reflect:!0})],nt.prototype,"variant",2);a([d({attribute:"auto-width",type:Boolean,reflect:!0})],nt.prototype,"autoWidth",2);a([d({attribute:"swap-opacity",type:Boolean,reflect:!0})],nt.prototype,"swapOpacity",2);a([d()],nt.prototype,"src",2);a([d()],nt.prototype,"label",2);a([d({reflect:!0})],nt.prototype,"library",2);a([L("label")],nt.prototype,"handleLabelChange",1);a([L(["family","name","library","variant","src","autoWidth","swapOpacity"])],nt.prototype,"setIcon",1);nt=a([C("wa-icon")],nt);var Ag=`:host {
  --control-box-size: 3rem;
  --icon-size: calc(var(--control-box-size) * 0.625);

  display: inline-flex;
  position: relative;
  cursor: pointer;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}

img[aria-hidden='true'] {
  display: none;
}

.control-box {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: calc(50% - var(--control-box-size) / 2);
  right: calc(50% - var(--control-box-size) / 2);
  width: var(--control-box-size);
  height: var(--control-box-size);
  font-size: calc(var(--icon-size) * 0.75);
  background: none;
  border: solid var(--wa-border-width-s) currentColor;
  background-color: rgb(0 0 0 / 50%);
  border-radius: var(--wa-border-radius-circle);
  color: white;
  pointer-events: none;
  transition: opacity var(--wa-transition-normal) var(--wa-transition-easing);
}

@media (hover: hover) {
  :host([play]:hover) .control-box {
    opacity: 1;
  }
}

:where(:host([play]:not(:hover))) .control-box {
  opacity: 0;
}

:host([play]) slot[name='play-icon'],
:host(:not([play])) slot[name='pause-icon'] {
  display: none;
}

/* Show control box on keyboard focus */
.animated-image {
  &:focus {
    outline: none;
  }

  &:focus-visible .control-box {
    opacity: 1;
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
}
`,Rt=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.play=!this.play)}handleLoad(){const t=document.createElement("canvas"),{width:e,height:n}=this.animatedImage;t.width=e,t.height=n,t.getContext("2d").drawImage(this.animatedImage,0,0,e,n),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new Ta),this.isLoaded=!0)}handleError(){this.dispatchEvent(new pi)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){const e=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`;return f`
      <div
        class="animated-image"
        tabindex="0"
        role="button"
        aria-pressed=${this.play?"true":"false"}
        aria-label=${e}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <img
          class="animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          role="presentation"
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?f`
              <img
                class="frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                role="presentation"
              />

              <div part="control-box" class="control-box" aria-hidden="true">
                <slot name="play-icon">
                  <wa-icon
                    name="play"
                    library="system"
                    variant="solid"
                    class="default"
                    style="margin-inline-start: 3px;"
                  ></wa-icon>
                </slot>
                <slot name="pause-icon">
                  <wa-icon name="pause" library="system" variant="solid" class="default"></wa-icon>
                </slot>
              </div>
            `:""}
      </div>
    `}};Rt.css=Ag;a([A(".animated")],Rt.prototype,"animatedImage",2);a([$()],Rt.prototype,"frozenFrame",2);a([$()],Rt.prototype,"isLoaded",2);a([d()],Rt.prototype,"src",2);a([d()],Rt.prototype,"alt",2);a([d({type:Boolean,reflect:!0})],Rt.prototype,"play",2);a([L("play",{waitUntilFirstUpdate:!0})],Rt.prototype,"handlePlayChange",1);a([L("src")],Rt.prototype,"handleSrcChange",1);Rt=a([C("wa-animated-image")],Rt);var _g=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}},Tg=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}},vl=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}},Rg=`:host {
  display: contents;
}
`,_e=class extends M{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Tg)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new _g)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const t=zc[this.easing]??this.easing,e=this.keyframes??Sf[this.name],i=(await this.defaultSlot).assignedElements()[0];return!i||!e?!1:(this.destroyAnimation(),this.animation=i.animate(e,{delay:this.delay,direction:this.direction,duration:this.duration,easing:t,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new vl)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new vl)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return f` <slot @slotchange=${this.handleSlotChange}></slot> `}};_e.css=Rg;a([Oh("slot")],_e.prototype,"defaultSlot",2);a([d()],_e.prototype,"name",2);a([d({type:Boolean,reflect:!0})],_e.prototype,"play",2);a([d({type:Number})],_e.prototype,"delay",2);a([d()],_e.prototype,"direction",2);a([d({type:Number})],_e.prototype,"duration",2);a([d()],_e.prototype,"easing",2);a([d({attribute:"end-delay",type:Number})],_e.prototype,"endDelay",2);a([d()],_e.prototype,"fill",2);a([d({type:Number})],_e.prototype,"iterations",2);a([d({attribute:"iteration-start",type:Number})],_e.prototype,"iterationStart",2);a([d({attribute:!1})],_e.prototype,"keyframes",2);a([d({attribute:"playback-rate",type:Number})],_e.prototype,"playbackRate",2);a([L(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],_e.prototype,"handleAnimationChange",1);a([L("play")],_e.prototype,"handlePlayChange",1);a([L("playbackRate")],_e.prototype,"handlePlaybackRateChange",1);_e=a([C("wa-animation")],_e);var Lg=`:host {
  --size: 3rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: var(--size);
  height: var(--size);
  color: var(--wa-color-neutral-on-normal);
  font: inherit;
  font-size: calc(var(--size) * 0.4);
  vertical-align: middle;
  background-color: var(--wa-color-neutral-fill-normal);
  border-radius: var(--wa-border-radius-circle);
  user-select: none;
  -webkit-user-select: none;
}

:host([shape='square']) {
  border-radius: 0;
}

:host([shape='rounded']) {
  border-radius: var(--wa-border-radius-m);
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.initials {
  line-height: 1;
  text-transform: uppercase;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: inherit;
}
`,Bt=class extends M{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new pi)}render(){const t=f`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `;let e=f``;return this.initials?e=f`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`:e=f`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `,f` ${this.image&&!this.hasError?t:e} `}};Bt.css=Lg;a([$()],Bt.prototype,"hasError",2);a([d()],Bt.prototype,"image",2);a([d()],Bt.prototype,"label",2);a([d()],Bt.prototype,"initials",2);a([d()],Bt.prototype,"loading",2);a([d({reflect:!0})],Bt.prototype,"shape",2);a([L("image")],Bt.prototype,"handleImageChange",1);Bt=a([C("wa-avatar")],Bt);var Ar=`@layer wa-utilities {
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
}
`;var Ig=`:host {
  --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.375em 0.625em;
  color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
  font-size: max(var(--wa-font-size-2xs), 0.75em);
  font-weight: var(--wa-font-weight-semibold);
  line-height: 1;
  white-space: nowrap;
  background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
  border-color: transparent;
  border-radius: var(--wa-border-radius-s);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
  user-select: none;
  -webkit-user-select: none;
  cursor: inherit;
}

/* Appearance modifiers */
:host([appearance='outlined']) {
  --pulse-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));

  color: var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));
  background-color: transparent;
  border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
}

:host([appearance='filled']) {
  --pulse-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));

  color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
  background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
  border-color: transparent;
}

:host([appearance='filled-outlined']) {
  --pulse-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));

  color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
  background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
  border-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));
}

:host([appearance='accent']) {
  --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

  color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
  background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
  border-color: transparent;
}

/* Pill modifier */
:host([pill]) {
  border-radius: var(--wa-border-radius-pill);
}

/* Pulse attention */
:host([attention='pulse']) {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--pulse-color);
  }
  70% {
    box-shadow: 0 0 0 0.5rem transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}

/* Bounce attention */
:host([attention='bounce']) {
  animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-2px);
  }
}

::slotted(wa-icon) {
  margin-inline-end: var(--wa-space-2xs, 0.25em);
  opacity: 90%;
  line-height: 1;
  height: 0.85em;
}
`,Hn=class extends M{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return f` <slot part="base" role="status"></slot>`}};Hn.css=[Ar,Ig];a([d({reflect:!0})],Hn.prototype,"variant",2);a([d({reflect:!0})],Hn.prototype,"appearance",2);a([d({type:Boolean,reflect:!0})],Hn.prototype,"pill",2);a([d({reflect:!0})],Hn.prototype,"attention",2);Hn=a([C("wa-badge")],Hn);var Og=`.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
`,yi=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(n=>n.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="wa-breadcrumb-item");t.forEach((e,n)=>{const i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),n===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),f`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <wa-icon
            name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"}
            library="system"
            variant="solid"
          ></wa-icon>
        </slot>
      </span>
    `}};yi.css=Og;a([A("slot")],yi.prototype,"defaultSlot",2);a([A('slot[name="separator"]')],yi.prototype,"separatorSlot",2);a([d()],yi.prototype,"label",2);yi=a([C("wa-breadcrumb")],yi);var Ms=()=>({checkValidity(t){const e=t.input,n={message:"",isValid:!0,invalidKeys:[]};if(!e)return n;let i=!0;if("checkValidity"in e&&(i=e.checkValidity()),i)return n;if(n.isValid=!1,"validationMessage"in e&&(n.message=e.validationMessage),!("validity"in e))return n.invalidKeys.push("customError"),n;for(const r in e.validity){if(r==="valid")continue;const s=r;e.validity[s]&&n.invalidKeys.push(s)}return n}});var Ra=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},Dg=()=>({observedAttributes:["custom-error"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),fe=class extends M{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Ra))},this.handleInteraction=t=>{const e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[Dg()]}static get observedAttributes(){const t=new Set(super.observedAttributes||[]);for(const e of this.validators)if(e.observedAttributes)for(const n of e.observedAttributes)t.add(n);return[...t]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")){const e=this.value;if(Array.isArray(e)){if(this.name){const n=new FormData;for(const i of e)n.append(this.name,i);this.setValue(n,n)}}else this.setValue(e,e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){const e=t[0],n=t[1];let i=t[2];i||(i=this.validationTarget),this.internals.setValidity(e,n,i||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const t=!!this.required,e=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&n),this.customStates.set("user-valid",e&&n)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...t){const[e,n]=t;this.internals.setFormValue(e,n)}get allValidators(){const t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const t=this.allValidators;if(!t?.length)return;const e={customError:!!this.customError},n=this.validationTarget||this.input||void 0;let i="";for(const r of t){const{isValid:s,message:o,invalidKeys:l}=r.checkValidity(this);s||(i||(i=o),l?.length>=0&&l.forEach(c=>e[c]=!0))}i||(i=this.validationMessage),this.setValidity(e,i,n)}};fe.formAssociated=!0;a([d({reflect:!0})],fe.prototype,"name",2);a([d({type:Boolean})],fe.prototype,"disabled",2);a([d({state:!0,attribute:!1})],fe.prototype,"valueHasChanged",2);a([d({state:!0,attribute:!1})],fe.prototype,"hasInteracted",2);a([d({attribute:"custom-error",reflect:!0})],fe.prototype,"customError",2);a([d({attribute:!1,state:!0,type:Object})],fe.prototype,"validity",1);var xt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=n=>{const i=n.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var Ze=`@layer wa-utilities {
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
}
`;const H=Li(class extends Ii{constructor(t){if(super(t),t.type!==At.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const n=t.element.classList;for(const i of this.st)i in e||(n.remove(i),this.st.delete(i));for(const i in e){const r=!!e[i];r===this.st.has(i)||this.nt?.has(i)||(r?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return et}});const F=t=>t??N;const md=Symbol.for(""),zg=t=>{if(t?.r===md)return t?._$litStatic$},yl=(t,...e)=>({_$litStatic$:e.reduce(((n,i,r)=>n+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1]),t[0]),r:md}),xl=new Map,Pg=t=>(e,...n)=>{const i=n.length;let r,s;const o=[],l=[];let c,h=0,u=!1;for(;h<i;){for(c=e[h];h<i&&(s=n[h],(r=zg(s))!==void 0);)c+=r+e[++h],u=!0;h!==i&&l.push(s),o.push(c),h++}if(h===i&&o.push(e[i]),u){const p=o.join("$$lit$$");(e=xl.get(p))===void 0&&(o.raw=o,xl.set(p,e=o)),n=l}return t(e,...n)},go=Pg(f);var Mg=`@layer wa-component {
  :host {
    display: inline-block;

    /* Workaround because Chrome doesn't like :host(:has()) below
     * https://issues.chromium.org/issues/40062355
     * Firefox doesn't like this nested rule, so both are needed */
    &:has(wa-badge) {
      position: relative;
    }
  }

  /* Apply relative positioning only when needed to position wa-badge
   * This avoids creating a new stacking context for every button */
  :host(:has(wa-badge)) {
    position: relative;
  }
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  transition-property: background, border, box-shadow, color;
  transition-duration: var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);
  cursor: pointer;
  padding: 0 var(--wa-form-control-padding-inline);
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--wa-font-weight-action);
  line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
  height: var(--wa-form-control-height);
  width: 100%;

  background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
  border-color: transparent;
  color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
}

/* Appearance modifiers */
:host([appearance='plain']) {
  .button {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: transparent;
    border-color: transparent;
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
      var(--wa-color-mix-active)
    );
  }
}

:host([appearance='outlined']) {
  .button {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
      var(--wa-color-mix-active)
    );
  }
}

:host([appearance='filled']) {
  .button {
    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
    border-color: transparent;
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-hover)
      );
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
      var(--wa-color-mix-active)
    );
  }
}

:host([appearance='filled-outlined']) {
  .button {
    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-hover)
      );
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
      var(--wa-color-mix-active)
    );
  }
}

:host([appearance='accent']) {
  .button {
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-hover)
      );
    }
  }
  .button:not(.disabled):not(.loading):active {
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
      var(--wa-color-mix-active)
    );
  }
}

/* Focus states */
.button:focus {
  outline: none;
}

.button:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/* Disabled state */
.button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* When disabled, prevent mouse events from bubbling up from children */
.button.disabled * {
  pointer-events: none;
}

/* Keep it last so Safari doesn't stop parsing this block */
.button::-moz-focus-inner {
  border: 0;
}

/* Icon buttons */
.button.is-icon-button {
  outline-offset: 2px;
  width: var(--wa-form-control-height);
  aspect-ratio: 1;
}

.button.is-icon-button:has(wa-icon) {
  width: auto;
}

/* Pill modifier */
:host([pill]) .button {
  border-radius: var(--wa-border-radius-pill);
}

/*
 * Label
 */

.start,
.end {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  pointer-events: none;
}

.label {
  display: inline-block;
}

.is-icon-button .label {
  display: flex;
}

.label::slotted(wa-icon) {
  align-self: center;
}

/*
 * Caret modifier
 */

wa-icon[part='caret'] {
  display: flex;
  align-self: center;
  align-items: center;

  &::part(svg) {
    width: 0.875em;
    height: 0.875em;
  }

  .button:has(&) .end {
    display: none;
  }
}

/*
 * Loading modifier
 */

.loading {
  position: relative;
  cursor: wait;

  .start,
  .label,
  .end,
  .caret {
    visibility: hidden;
  }

  wa-spinner {
    --indicator-color: currentColor;
    --track-color: color-mix(in oklab, currentColor, transparent 90%);

    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }
}

/*
 * Badges
 */

.button ::slotted(wa-badge) {
  border-color: var(--wa-color-surface-default);
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;
  translate: 50% -50%;
  pointer-events: none;
}

:host(:dir(rtl)) ::slotted(wa-badge) {
  translate: -50% -50%;
}

/*
* Button spacing
*/

slot[name='start']::slotted(*) {
  margin-inline-end: 0.75em;
}

slot[name='end']::slotted(*),
.button:not(.visually-hidden-label) [part='caret'] {
  margin-inline-start: 0.75em;
}

/*
 * Button group border radius modifications
 */

/* Remove border radius from all grouped buttons by default */
:host(.wa-button-group__button) .button {
  border-radius: 0;
}

/* Horizontal orientation */
:host(.wa-button-group__horizontal.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-form-control-border-radius);
  border-end-start-radius: var(--wa-form-control-border-radius);
}

:host(.wa-button-group__horizontal.wa-button-group__button-last) .button {
  border-start-end-radius: var(--wa-form-control-border-radius);
  border-end-end-radius: var(--wa-form-control-border-radius);
}

/* Vertical orientation */
:host(.wa-button-group__vertical) {
  flex: 1 1 auto;
}

:host(.wa-button-group__vertical) .button {
  width: 100%;
  justify-content: start;
}

:host(.wa-button-group__vertical.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-form-control-border-radius);
  border-start-end-radius: var(--wa-form-control-border-radius);
}

:host(.wa-button-group__vertical.wa-button-group__button-last) .button {
  border-end-start-radius: var(--wa-form-control-border-radius);
  border-end-end-radius: var(--wa-form-control-border-radius);
}

/* Handle pill modifier for button groups */
:host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-border-radius-pill);
  border-end-start-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {
  border-start-end-radius: var(--wa-border-radius-pill);
  border-end-end-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-border-radius-pill);
  border-start-end-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {
  border-end-start-radius: var(--wa-border-radius-pill);
  border-end-end-radius: var(--wa-border-radius-pill);
}
`,re=class extends fe{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new xt(this,"[default]","start","end"),this.localize=new te(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static get validators(){return[...super.validators,Ms()]}constructLightDOMButton(){const t=document.createElement("button");return t.type=this.type,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",this.name&&(t.name=this.name),t.value=this.value||"",["form","formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{this.hasAttribute(e)&&t.setAttribute(e,this.getAttribute(e))}),t}handleClick(){if(!this.getForm())return;const e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new Ra)}handleLabelSlotChange(){const t=this.labelSlot.assignedNodes({flatten:!0});let e=!1,n=!1,i=!1,r=!1;[...t].forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){const o=s;o.localName==="wa-icon"?(n=!0,e||(e=o.label!==void 0)):r=!0}else s.nodeType===Node.TEXT_NODE&&(s.textContent?.trim()||"").length>0&&(i=!0)}),this.isIconButton=n&&!i&&!r,this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=this.isLink(),e=t?yl`a`:yl`button`;return go`
      <${e}
        part="base"
        class=${H({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${F(t?void 0:this.disabled)}
        type=${F(t?void 0:this.type)}
        title=${this.title}
        name=${F(t?void 0:this.name)}
        value=${F(t?void 0:this.value)}
        href=${F(t?this.href:void 0)}
        target=${F(t?this.target:void 0)}
        download=${F(t?this.download:void 0)}
        rel=${F(t&&this.rel?this.rel:void 0)}
        role=${F(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?go`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?go`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};re.shadowRootOptions={...fe.shadowRootOptions,delegatesFocus:!0};re.css=[Mg,Ar,Ze];a([A(".button")],re.prototype,"button",2);a([A("slot:not([name])")],re.prototype,"labelSlot",2);a([$()],re.prototype,"invalid",2);a([$()],re.prototype,"isIconButton",2);a([d()],re.prototype,"title",2);a([d({reflect:!0})],re.prototype,"variant",2);a([d({reflect:!0})],re.prototype,"appearance",2);a([d({reflect:!0})],re.prototype,"size",2);a([d({attribute:"with-caret",type:Boolean,reflect:!0})],re.prototype,"withCaret",2);a([d({type:Boolean})],re.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],re.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],re.prototype,"pill",2);a([d()],re.prototype,"type",2);a([d({reflect:!0})],re.prototype,"name",2);a([d({reflect:!0})],re.prototype,"value",2);a([d({reflect:!0})],re.prototype,"href",2);a([d()],re.prototype,"target",2);a([d()],re.prototype,"rel",2);a([d()],re.prototype,"download",2);a([d({reflect:!0})],re.prototype,"form",2);a([d({attribute:"formaction"})],re.prototype,"formAction",2);a([d({attribute:"formenctype"})],re.prototype,"formEnctype",2);a([d({attribute:"formmethod"})],re.prototype,"formMethod",2);a([d({attribute:"formnovalidate",type:Boolean})],re.prototype,"formNoValidate",2);a([d({attribute:"formtarget"})],re.prototype,"formTarget",2);a([L("disabled",{waitUntilFirstUpdate:!0})],re.prototype,"handleDisabledChange",1);re=a([C("wa-button")],re);var Ng=`:host {
  --track-width: 2px;
  --track-color: var(--wa-color-neutral-fill-normal);
  --indicator-color: var(--wa-color-brand-fill-loud);
  --speed: 2s;

  /* Resizing a spinner element using anything but font-size will break the animation because the animation uses em units.
   Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can grow/shrink and
   break the animation. The use of \`flex: none\` on the host element prevents this by always having the spinner sized
   according to its actual dimensions.
  */
  flex: none;
  display: inline-flex;
  width: 1em;
  height: 1em;
}

svg {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  animation: spin var(--speed) linear infinite;
}

.track {
  stroke: var(--track-color);
}

.indicator {
  stroke: var(--indicator-color);
  stroke-dasharray: 75, 100;
  stroke-dashoffset: -5;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
`,Vo=class extends M{constructor(){super(...arguments),this.localize=new te(this)}render(){return f`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `}};Vo.css=Ng;Vo=a([C("wa-spinner")],Vo);var Fg=`:host {
  display: inline-flex;
}

.button-group {
  display: flex;
  position: relative;
  isolation: isolate;
  flex-wrap: wrap;
  gap: 1px;

  @media (hover: hover) {
    > :hover,
    &::slotted(:hover) {
      z-index: 1;
    }
  }

  /* Focus and checked are always on top */
  > :focus,
  &::slotted(:focus),
  > [aria-checked='true'],
  &::slotted([aria-checked='true']),
  > [checked],
  &::slotted([checked]) {
    z-index: 2 !important;
  }
}
:host([orientation='vertical']) .button-group {
  flex-direction: column;
}

/* Button groups with at least one outlined button will not have a gap and instead have borders overlap */
.button-group.has-outlined {
  gap: 0;

  &:not([aria-orientation='vertical']):not(.button-group-vertical)::slotted(:not(:first-child)) {
    margin-inline-start: calc(-1 * var(--border-width));
  }

  &:is([aria-orientation='vertical'], .button-group-vertical)::slotted(:not(:first-child)) {
    margin-block-start: calc(-1 * var(--border-width));
  }
}
`,rn=class extends M{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal",this.variant="neutral"}updated(t){super.updated(t),t.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(t){Ji(t.target)?.classList.add("button-focus")}handleBlur(t){Ji(t.target)?.classList.remove("button-focus")}handleMouseOver(t){Ji(t.target)?.classList.add("button-hover")}handleMouseOut(t){Ji(t.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,t.forEach(e=>{const n=t.indexOf(e),i=Ji(e);i&&(i.appearance==="outlined"&&(this.hasOutlined=!0),i.classList.add("wa-button-group__button"),i.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),i.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),i.classList.toggle("wa-button-group__button-first",n===0),i.classList.toggle("wa-button-group__button-inner",n>0&&n<t.length-1),i.classList.toggle("wa-button-group__button-last",n===t.length-1),i.classList.toggle("wa-button-group__button-radio",i.tagName.toLowerCase()==="wa-radio-button"))})}render(){return f`
      <slot
        part="base"
        class=${H({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};rn.css=[Ar,Fg];a([A("slot")],rn.prototype,"defaultSlot",2);a([$()],rn.prototype,"disableRole",2);a([$()],rn.prototype,"hasOutlined",2);a([d()],rn.prototype,"label",2);a([d({reflect:!0})],rn.prototype,"orientation",2);a([d({reflect:!0})],rn.prototype,"variant",2);rn=a([C("wa-button-group")],rn);function Ji(t){const e="wa-button, wa-radio-button";return t.closest(e)??t.querySelector(e)}var Ug=`:host {
  display: flex;
  position: relative;
  align-items: stretch;
  border-radius: var(--wa-panel-border-radius);
  background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
  border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
  border-style: var(--wa-panel-border-style);
  border-width: var(--wa-panel-border-width);
  color: var(--wa-color-text-normal);
  padding: 1em;
}

/* Appearance modifiers */
:host([appearance~='plain']) {
  background-color: transparent;
  border-color: transparent;
}

:host([appearance~='outlined']) {
  background-color: transparent;
  border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
}

:host([appearance~='filled']) {
  background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
  border-color: transparent;
}

:host([appearance~='filled-outlined']) {
  border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
}

:host([appearance~='accent']) {
  color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
  background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
  border-color: transparent;

  [part~='icon'] {
    color: currentColor;
  }
}

[part~='icon'] {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  color: var(--wa-color-on-quiet);
  font-size: 1.25em;
}

::slotted([slot='icon']) {
  margin-inline-end: var(--wa-form-control-padding-inline);
}

[part~='message'] {
  flex: 1 1 auto;
  display: block;
  overflow: hidden;
}
`,xi=class extends M{constructor(){super(...arguments),this.variant="brand",this.size="medium"}render(){return f`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};xi.css=[Ug,Ar,Ze];a([d({reflect:!0})],xi.prototype,"variant",2);a([d({reflect:!0})],xi.prototype,"appearance",2);a([d({reflect:!0})],xi.prototype,"size",2);xi=a([C("wa-callout")],xi);var Bg=`:host {
  --spacing: var(--wa-space-l);

  /* Internal calculated properties */
  --inner-border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));

  display: flex;
  flex-direction: column;
  background-color: var(--wa-color-surface-default);
  border-color: var(--wa-color-surface-border);
  border-radius: var(--wa-panel-border-radius);
  border-style: var(--wa-panel-border-style);
  box-shadow: var(--wa-shadow-s);
  border-width: var(--wa-panel-border-width);
  color: var(--wa-color-text-normal);
}

/* Appearance modifiers */
:host([appearance~='plain']) {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}

:host([appearance~='outlined']) {
  background-color: var(--wa-color-surface-default);
  border-color: var(--wa-color-surface-border);
}

:host([appearance~='filled']) {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: transparent;
}

:host([appearance~='filled'][appearance~='outlined']) {
  border-color: var(--wa-color-neutral-border-quiet);
}

:host([appearance~='accent']) {
  color: var(--wa-color-neutral-on-loud);
  background-color: var(--wa-color-neutral-fill-loud);
  border-color: transparent;
}

/* Take care of top and bottom radii */
.media,
:host(:not([with-media])) .header,
:host(:not([with-media], [with-header])) .body {
  border-start-start-radius: var(--inner-border-radius);
  border-start-end-radius: var(--inner-border-radius);
}

:host(:not([with-footer])) .body,
.footer {
  border-end-start-radius: var(--inner-border-radius);
  border-end-end-radius: var(--inner-border-radius);
}

.media {
  display: flex;
  overflow: hidden;

  &::slotted(*) {
    display: block;
    width: 100%;
    border-radius: 0 !important;
  }
}

/* Round all corners for plain appearance */
:host([appearance='plain']) .media {
  border-radius: var(--inner-border-radius);

  &::slotted(*) {
    border-radius: inherit !important;
  }
}

.header {
  display: block;
  border-block-end-style: inherit;
  border-block-end-color: var(--wa-color-surface-border);
  border-block-end-width: var(--wa-panel-border-width);
  padding: calc(var(--spacing) / 2) var(--spacing);
}

.body {
  display: block;
  padding: var(--spacing);
}

.footer {
  display: block;
  border-block-start-style: inherit;
  border-block-start-color: var(--wa-color-surface-border);
  border-block-start-width: var(--wa-panel-border-width);
  padding: var(--spacing);
}

/* Push slots to sides when the action slots renders */
.has-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

:host(:not([with-header])) .header,
:host(:not([with-footer])) .footer,
:host(:not([with-media])) .media {
  display: none;
}

/* Orientation Styles */
:host([orientation='horizontal']) {
  flex-direction: row;

  .media {
    border-start-start-radius: var(--inner-border-radius);
    border-end-start-radius: var(--inner-border-radius);
    border-start-end-radius: 0;

    &::slotted(*) {
      block-size: 100%;
      inline-size: 100%;
      object-fit: cover;
    }
  }
}

:host([orientation='horizontal']) ::slotted([slot='body']) {
  display: block;
  height: 100%;
  margin: 0;
}

:host([orientation='horizontal']) ::slotted([slot='actions']) {
  display: flex;
  align-items: center;
  padding: var(--spacing);
}
`,xn=class extends M{constructor(){super(...arguments),this.hasSlotController=new xt(this,"footer","header","media"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.orientation="vertical"}updated(){!this.withHeader&&this.hasSlotController.test("header")&&(this.withHeader=!0),!this.withMedia&&this.hasSlotController.test("media")&&(this.withMedia=!0),!this.withFooter&&this.hasSlotController.test("footer")&&(this.withFooter=!0)}render(){return this.orientation==="horizontal"?f`
        <slot name="media" part="media" class="media"></slot>
        <slot part="body" class="body"></slot>
        <slot name="actions" part="actions" class="actions"></slot>
      `:f`
      <slot name="media" part="media" class="media"></slot>

      ${this.hasSlotController.test("header-actions")?f` <header part="header" class="header has-actions">
            <slot name="header"></slot>
            <slot name="header-actions"></slot>
          </header>`:f` <header part="header" class="header">
            <slot name="header"></slot>
          </header>`}

      <slot part="body" class="body"></slot>
      ${this.hasSlotController.test("footer-actions")?f` <footer part="footer" class="footer has-actions">
            <slot name="footer"></slot>
            <slot name="footer-actions"></slot>
          </footer>`:f` <footer part="footer" class="footer">
            <slot name="footer"></slot>
          </footer>`}
    `}};xn.css=[Ze,Bg];a([d({reflect:!0})],xn.prototype,"appearance",2);a([d({attribute:"with-header",type:Boolean,reflect:!0})],xn.prototype,"withHeader",2);a([d({attribute:"with-media",type:Boolean,reflect:!0})],xn.prototype,"withMedia",2);a([d({attribute:"with-footer",type:Boolean,reflect:!0})],xn.prototype,"withFooter",2);a([d({reflect:!0})],xn.prototype,"orientation",2);xn=a([C("wa-card")],xn);const qg="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Vg=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=qg[n[t]&63];return e};function Y(t,e,n){const i=r=>Object.is(r,-0)?0:r;return t<e?i(e):t>n?i(n):i(t)}function Ns(t=""){return`${t}${Vg()}`}function Lt(t,e){return new Promise(n=>{function i(r){r.target===t&&(t.removeEventListener(e,i),n())}t.addEventListener(e,i)})}async function ps(t,e,n){return t.animate(e,n).finished.catch(()=>{})}function he(t,e){return new Promise(n=>{const i=new AbortController,{signal:r}=i;if(t.classList.contains(e))return;t.classList.remove(e),t.classList.add(e);let s=()=>{t.classList.remove(e),n(),i.abort()};t.addEventListener("animationend",s,{once:!0,signal:r}),t.addEventListener("animationcancel",s,{once:!0,signal:r})})}function fs(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t)||0:t.indexOf("s")>-1?(parseFloat(t)||0)*1e3:parseFloat(t)||0}function kl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}var Hg=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};function*Wg(t,e){if(t!==void 0){let n=0;for(const i of t)yield e(i,n++)}}function*jg(t,e,n=1){const i=e===void 0?0:t;e??=t;for(let r=i;n>0?r<e:e<r;r+=n)yield r}(()=>{const t=(i,r)=>{let s=0;return function(...o){window.clearTimeout(s),s=window.setTimeout(()=>{i.call(this,...o)},r)}},e=(i,r,s)=>{const o=i[r];i[r]=function(...l){o.call(this,...l),s.call(this,o,...l)}};if(!("onscrollend"in window)){const i=new Set,r=new WeakMap,s=l=>{i.add(l.pointerId)},o=l=>{i.delete(l.pointerId)};document.addEventListener("pointerdown",s),document.addEventListener("pointerup",o),e(EventTarget.prototype,"addEventListener",function(l,c){if(c!=="scroll")return;const h=t(()=>{i.size?h():this.dispatchEvent(new Event("scrollend"))},100);l.call(this,"scroll",h,{passive:!0}),r.set(this,h)}),e(EventTarget.prototype,"removeEventListener",function(l,c){if(c!=="scroll")return;const h=r.get(this);h&&l.call(this,"scroll",h,{passive:!0})})}})();var Xg=class extends Event{constructor(t){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Gg=`:host {
  --aspect-ratio: 16 / 9;
  --scroll-hint: 0px;
  --slide-gap: var(--wa-space-m, 1rem); /* fallback value is necessary */

  display: flex;
}

.carousel {
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: 1fr min-content;
  grid-template-areas:
    '. slides .'
    '. pagination .';
  gap: var(--wa-space-m);
  align-items: center;
  min-height: 100%;
  min-width: 100%;
  position: relative;
}

.pagination {
  grid-area: pagination;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--wa-space-s);
}

.slides {
  grid-area: slides;

  display: grid;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-items: center;
  overflow: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
  border-radius: var(--wa-border-radius-m);

  --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
}

@media (prefers-reduced-motion) {
  :where(.slides) {
    scroll-behavior: auto;
  }
}

.slides-horizontal {
  grid-auto-flow: column;
  grid-auto-columns: var(--slide-size);
  grid-auto-rows: 100%;
  column-gap: var(--slide-gap);
  scroll-snap-type: x mandatory;
  scroll-padding-inline: var(--scroll-hint);
  padding-inline: var(--scroll-hint);
  overflow-y: hidden;
}

.slides-vertical {
  grid-auto-flow: row;
  grid-auto-columns: 100%;
  grid-auto-rows: var(--slide-size);
  row-gap: var(--slide-gap);
  scroll-snap-type: y mandatory;
  scroll-padding-block: var(--scroll-hint);
  padding-block: var(--scroll-hint);
  overflow-x: hidden;
}

.slides-dragging,
.slides-dropping {
  scroll-snap-type: unset;
}

:host([vertical]) ::slotted(wa-carousel-item) {
  height: 100%;
}

.slides::-webkit-scrollbar {
  display: none;
}

.navigation {
  grid-area: navigation;
  display: contents;
  font-size: var(--wa-font-size-l);
}

.navigation-button {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  border-radius: var(--wa-border-radius-m);
  font-size: inherit;
  color: var(--wa-color-text-quiet);
  padding: var(--wa-space-xs);
  cursor: pointer;
  transition: var(--wa-transition-normal) color;
  appearance: none;
}

.navigation-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.navigation-button-disabled::part(base) {
  pointer-events: none;
}

.navigation-button-previous {
  grid-column: 1;
  grid-row: 1;
}

.navigation-button-next {
  grid-column: 3;
  grid-row: 1;
}

.pagination-item {
  display: block;
  cursor: pointer;
  background: none;
  border: 0;
  border-radius: var(--wa-border-radius-circle);
  width: var(--wa-space-s);
  height: var(--wa-space-s);
  background-color: var(--wa-color-neutral-fill-normal);
  padding: 0;
  margin: 0;
  transition: transform var(--wa-transition-slow);
}

.pagination-item-active {
  background-color: var(--wa-form-control-activated-color);
  transform: scale(1.25);
}

/* Focus styles */
.slides:focus-visible,
.navigation-button:focus-visible,
.pagination-item:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}
`,ue=class extends M{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Hg(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new te(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,n=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:n,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||n!==r)&&(t.scrollTo({left:i,top:r,behavior:kl()?"auto":"smooth"}),await Lt(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(n=>[...n.addedNodes,...n.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:n,loop:i}=this,r=i?t/n:(t-e)/n+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),n=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+n*n)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,n=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,r=t.key==="ArrowDown"||!n&&t.key==="ArrowRight"||n&&t.key==="ArrowLeft",s=t.key==="ArrowUp"||!n&&t.key==="ArrowLeft"||n&&t.key==="ArrowRight";t.preventDefault(),s&&this.previous(),r&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{const o=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');o&&o.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const l of e){const c=l.target;c.toggleAttribute("inert",!l.isIntersecting),c.classList.toggle("--in-view",l.isIntersecting),c.setAttribute("aria-hidden",l.isIntersecting?"false":"true")}const n=e.find(l=>l.isIntersecting);if(!n)return;const i=this.getSlides({excludeClones:!1}),r=this.getSlides().length,s=i.indexOf(n.target),o=this.loop?s-this.slidesPerPage:s;if(n&&(this.activeSlide=(Math.ceil(o/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&n.target.hasAttribute("data-clone"))){const l=Number(n.target.getAttribute("data-clone"));this.goToSlide(l,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,n=t.slice(-e),i=t.slice(0,e);n.reverse().forEach((r,s)=>{const o=r.cloneNode(!0);o.setAttribute("data-clone",String(t.length-s-1)),this.prepend(o)}),i.forEach((r,s)=>{const o=r.cloneNode(!0);o.setAttribute("data-clone",String(s)),this.append(o)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,n)=>{e.classList.toggle("--is-active",n===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new Xg({index:this.activeSlide,slide:t[this.activeSlide]}))}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((n,i)=>{(i+e)%e===0?n.style.removeProperty("scroll-snap-align"):n.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:n,loop:i}=this,r=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!r.length)return;const o=i?(t+r.length)%r.length:Y(t,0,r.length-n);this.activeSlide=o;const l=this.localize.dir()==="rtl",c=Y(t+(i?n:0)+(l?n-1:0),0,s.length-1),h=s[c];this.scrollToSlide(h,kl()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const n=this.scrollContainer,i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),s=r.left-i.left,o=r.top-i.top;s||o?(this.pendingSlideChange=!0,n.scrollTo({left:s+n.scrollLeft,top:o+n.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this;let n=0,i=0,r=!1,s=!1;this.hasUpdated&&(n=this.getPageCount(),i=this.getCurrentPage(),r=this.canScrollPrev(),s=this.canScrollNext());const o=this.localize.dir()==="rtl";return f`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${H({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot @slotchange=${()=>this.requestUpdate()}></slot>
        </div>

        ${this.navigation?f`
              <div part="navigation" class="navigation">
                <button
                  part="navigation-button navigation-button-previous"
                  class="${H({"navigation-button":!0,"navigation-button-previous":!0,"navigation-button-disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <wa-icon library="system" name="${o?"chevron-right":"chevron-left"}"></wa-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button-next"
                  class=${H({"navigation-button":!0,"navigation-button-next":!0,"navigation-button-disabled":!s})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <wa-icon library="system" name="${o?"chevron-left":"chevron-right"}"></wa-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?f`
              <div part="pagination" role="tablist" class="pagination" aria-controls="scroll-container">
                ${Wg(jg(n),l=>{const c=l===i;return f`
                    <button
                      part="pagination-item ${c?"pagination-item-active":""}"
                      class="${H({"pagination-item":!0,"pagination-item-active":c})}"
                      role="tab"
                      aria-selected="${c?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,n)}"
                      tabindex=${c?"0":"-1"}
                      @click=${()=>this.goToSlide(l*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:f``}
      </div>
    `}};ue.css=Gg;a([d({type:Boolean,reflect:!0})],ue.prototype,"loop",2);a([d({type:Number,reflect:!0})],ue.prototype,"slides",2);a([d({type:Number,reflect:!0})],ue.prototype,"currentSlide",2);a([d({type:Boolean,reflect:!0})],ue.prototype,"navigation",2);a([d({type:Boolean,reflect:!0})],ue.prototype,"pagination",2);a([d({type:Boolean,reflect:!0})],ue.prototype,"autoplay",2);a([d({type:Number,attribute:"autoplay-interval"})],ue.prototype,"autoplayInterval",2);a([d({type:Number,attribute:"slides-per-page"})],ue.prototype,"slidesPerPage",2);a([d({type:Number,attribute:"slides-per-move"})],ue.prototype,"slidesPerMove",2);a([d()],ue.prototype,"orientation",2);a([d({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ue.prototype,"mouseDragging",2);a([A(".slides")],ue.prototype,"scrollContainer",2);a([A(".pagination")],ue.prototype,"paginationContainer",2);a([$()],ue.prototype,"activeSlide",2);a([$()],ue.prototype,"scrolling",2);a([$()],ue.prototype,"dragging",2);a([As({passive:!0})],ue.prototype,"handleScroll",1);a([L("loop",{waitUntilFirstUpdate:!0}),L("slidesPerPage",{waitUntilFirstUpdate:!0})],ue.prototype,"initializeSlides",1);a([L("activeSlide")],ue.prototype,"handleSlideChange",1);a([L("slidesPerMove")],ue.prototype,"updateSlidesSnap",1);a([L("autoplay")],ue.prototype,"handleAutoplayChange",1);ue=a([C("wa-carousel")],ue);var Fs=(t={})=>{let{validationElement:e,validationProperty:n}=t;e||(e=Object.assign(document.createElement("input"),{required:!0})),n||(n="value");const i={observedAttributes:["required"],message:e.validationMessage,checkValidity(r){const s={message:"",isValid:!0,invalidKeys:[]};return(r.required??r.hasAttribute("required"))&&!r[n]&&(s.message=typeof i.message=="function"?i.message(r):i.message||"",s.isValid=!1,s.invalidKeys.push("valueMissing")),s}};return i};var ln=`:host {
  display: flex;
  flex-direction: column;
}

/* Label */
:is([part~='form-control-label'], [part~='label']):has(*:not(:empty)) {
  display: inline-flex;
  color: var(--wa-form-control-label-color);
  font-weight: var(--wa-form-control-label-font-weight);
  line-height: var(--wa-form-control-label-line-height);
  margin-block-end: 0.5em;
}

:host([required]) :is([part~='form-control-label'], [part~='label'])::after {
  content: var(--wa-form-control-required-content);
  margin-inline-start: var(--wa-form-control-required-content-offset);
  color: var(--wa-form-control-required-content-color);
}

/* Help text */
[part~='hint'] {
  display: block;
  color: var(--wa-form-control-hint-color);
  font-weight: var(--wa-form-control-hint-font-weight);
  line-height: var(--wa-form-control-hint-line-height);
  margin-block-start: 0.5em;
  font-size: var(--wa-font-size-smaller);
  line-height: var(--wa-form-control-label-line-height);

  &:not(.has-slotted) {
    display: none;
  }
}
`;const ki=Li(class extends Ii{constructor(t){if(super(t),t.type!==At.PROPERTY&&t.type!==At.ATTRIBUTE&&t.type!==At.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ic(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===et||e===N)return e;const n=t.element,i=t.name;if(t.type===At.PROPERTY){if(e===n[i])return et}else if(t.type===At.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(i))return et}else if(t.type===At.ATTRIBUTE&&n.getAttribute(i)===e+"")return et;return Oc(t),e}});var Kg=`:host {
  --checked-icon-color: var(--wa-color-brand-on-loud);
  --checked-icon-scale: 0.8;

  display: inline-flex;
  color: var(--wa-form-control-value-color);
  font-family: inherit;
  font-weight: var(--wa-form-control-value-font-weight);
  line-height: var(--wa-form-control-value-line-height);
  user-select: none;
  -webkit-user-select: none;
}

[part~='control'] {
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;
  align-items: center;
  justify-content: center;
  width: var(--wa-form-control-toggle-size);
  height: var(--wa-form-control-toggle-size);
  border-color: var(--wa-form-control-border-color);
  border-radius: min(
    calc(var(--wa-form-control-toggle-size) * 0.375),
    var(--wa-border-radius-s)
  ); /* min prevents entirely circular checkbox */
  border-style: var(--wa-border-style);
  border-width: var(--wa-form-control-border-width);
  background-color: var(--wa-form-control-background-color);
  transition:
    background var(--wa-transition-normal),
    border-color var(--wa-transition-fast),
    box-shadow var(--wa-transition-fast),
    color var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);

  margin-inline-end: 0.5em;
}

[part~='base'] {
  display: flex;
  align-items: flex-start;
  position: relative;
  color: currentColor;
  vertical-align: middle;
  cursor: pointer;
}

[part~='label'] {
  display: inline;
}

/* Checked */
[part~='control']:has(:checked, :indeterminate) {
  color: var(--checked-icon-color);
  border-color: var(--wa-form-control-activated-color);
  background-color: var(--wa-form-control-activated-color);
}

/* Focus */
[part~='control']:has(> input:focus-visible:not(:disabled)) {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/* Disabled */
:host [part~='base']:has(input:disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}

input {
  position: absolute;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  pointer-events: none;
}

[part~='icon'] {
  display: flex;
  scale: var(--checked-icon-scale);

  /* Without this, Safari renders the icon slightly to the left */
  &::part(svg) {
    translate: 0.0009765625em;
  }

  input:not(:checked, :indeterminate) + & {
    visibility: hidden;
  }
}

:host([required]) [part~='label']::after {
  content: var(--wa-form-control-required-content);
  color: var(--wa-form-control-required-content-color);
  margin-inline-start: var(--wa-form-control-required-content-offset);
}
`,Te=class extends fe{constructor(){super(...arguments),this.hasSlotController=new xt(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint=""}static get validators(){const t=[Fs({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...t]}get value(){const t=this._value||"on";return this.checked?t:null}set value(t){this._value=t}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(t){super.willUpdate(t),t.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(t.has("value")||t.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){const t=this.hasSlotController.test("hint"),e=this.hint?!0:!!t,n=!this.checked&&this.indeterminate,i=n?"indeterminate":"check",r=n?"indeterminate":"check";return f`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${F(this._value)}
            .indeterminate=${ki(this.indeterminate)}
            .checked=${ki(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${r}-icon icon" library="system" name=${i}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${e?"false":"true"}
        class="${H({"has-slotted":e})}"
      >
        ${this.hint}
      </slot>
    `}};Te.css=[ln,Ze,Kg];Te.shadowRootOptions={...fe.shadowRootOptions,delegatesFocus:!0};a([A('input[type="checkbox"]')],Te.prototype,"input",2);a([d()],Te.prototype,"title",2);a([d({reflect:!0})],Te.prototype,"name",2);a([d({reflect:!0})],Te.prototype,"value",1);a([d({reflect:!0})],Te.prototype,"size",2);a([d({type:Boolean})],Te.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],Te.prototype,"indeterminate",2);a([d({type:Boolean,attribute:!1})],Te.prototype,"checked",2);a([d({type:Boolean,reflect:!0,attribute:"checked"})],Te.prototype,"defaultChecked",2);a([d({reflect:!0})],Te.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Te.prototype,"required",2);a([d()],Te.prototype,"hint",2);a([L("defaultChecked")],Te.prototype,"handleDefaultCheckedChange",1);a([L(["checked","indeterminate"])],Te.prototype,"handleStateChange",1);a([L("disabled")],Te.prototype,"handleDisabledChange",1);Te=a([C("wa-checkbox")],Te);function hr(t,e){function n(r){const s=t.getBoundingClientRect(),o=t.ownerDocument.defaultView,l=s.left+o.pageXOffset,c=s.top+o.pageYOffset,h=r.pageX-l,u=r.pageY-c;e?.onMove&&e.onMove(h,u)}function i(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&n(e.initialEvent)}var Zt=typeof window<"u"&&"ontouchstart"in window,Ur=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=n=>{const i=Zt&&"touches"in n?n.touches[0].clientX:n.clientX,r=Zt&&"touches"in n?n.touches[0].clientY:n.clientY;this.isDragging||!Zt&&n.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),this.options.start(i,r))},this.handleDragStop=n=>{const i=Zt&&"touches"in n?n.touches[0].clientX:n.clientX,r=Zt&&"touches"in n?n.touches[0].clientY:n.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.options.stop(i,r)},this.handleDragMove=n=>{const i=Zt&&"touches"in n?n.touches[0].clientX:n.clientX,r=Zt&&"touches"in n?n.touches[0].clientY:n.clientY;window.getSelection()?.removeAllRanges(),this.options.move(i,r)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),Zt&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.element.removeEventListener("pointerdown",this.handleDragStart),Zt&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(t!==void 0?t:!this.isActive)?this.start():this.stop()}};var gd=`@layer wa-utilities {
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
}
`;function Ne(t,e){Yg(t)&&(t="100%");const n=Zg(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Br(t){return Math.min(1,Math.max(0,t))}function Yg(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Zg(t){return typeof t=="string"&&t.indexOf("%")!==-1}function bd(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function qr(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Nn(t){return t.length===1?"0"+t:String(t)}function Jg(t,e,n){return{r:Ne(t,255)*255,g:Ne(e,255)*255,b:Ne(n,255)*255}}function El(t,e,n){t=Ne(t,255),e=Ne(e,255),n=Ne(n,255);const i=Math.max(t,e,n),r=Math.min(t,e,n);let s=0,o=0;const l=(i+r)/2;if(i===r)o=0,s=0;else{const c=i-r;switch(o=l>.5?c/(2-i-r):c/(i+r),i){case t:s=(e-n)/c+(e<n?6:0);break;case e:s=(n-t)/c+2;break;case n:s=(t-e)/c+4;break}s/=6}return{h:s,s:o,l}}function bo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Qg(t,e,n){let i,r,s;if(t=Ne(t,360),e=Ne(e,100),n=Ne(n,100),e===0)r=n,s=n,i=n;else{const o=n<.5?n*(1+e):n+e-n*e,l=2*n-o;i=bo(l,o,t+1/3),r=bo(l,o,t),s=bo(l,o,t-1/3)}return{r:i*255,g:r*255,b:s*255}}function Cl(t,e,n){t=Ne(t,255),e=Ne(e,255),n=Ne(n,255);const i=Math.max(t,e,n),r=Math.min(t,e,n);let s=0;const o=i,l=i-r,c=i===0?0:l/i;if(i===r)s=0;else{switch(i){case t:s=(e-n)/l+(e<n?6:0);break;case e:s=(n-t)/l+2;break;case n:s=(t-e)/l+4;break}s/=6}return{h:s,s:c,v:o}}function eb(t,e,n){t=Ne(t,360)*6,e=Ne(e,100),n=Ne(n,100);const i=Math.floor(t),r=t-i,s=n*(1-e),o=n*(1-r*e),l=n*(1-(1-r)*e),c=i%6,h=[n,o,s,s,l,n][c],u=[l,n,n,o,s,s][c],p=[s,s,l,n,n,o][c];return{r:h*255,g:u*255,b:p*255}}function $l(t,e,n,i){const r=[Nn(Math.round(t).toString(16)),Nn(Math.round(e).toString(16)),Nn(Math.round(n).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function tb(t,e,n,i,r){const s=[Nn(Math.round(t).toString(16)),Nn(Math.round(e).toString(16)),Nn(Math.round(n).toString(16)),Nn(ib(i))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function nb(t,e,n,i){const r=t/100,s=e/100,o=n/100,l=i/100,c=255*(1-r)*(1-l),h=255*(1-s)*(1-l),u=255*(1-o)*(1-l);return{r:c,g:h,b:u}}function Sl(t,e,n){let i=1-t/255,r=1-e/255,s=1-n/255,o=Math.min(i,r,s);return o===1?(i=0,r=0,s=0):(i=(i-o)/(1-o)*100,r=(r-o)/(1-o)*100,s=(s-o)/(1-o)*100),o*=100,{c:Math.round(i),m:Math.round(r),y:Math.round(s),k:Math.round(o)}}function ib(t){return Math.round(parseFloat(t)*255).toString(16)}function Al(t){return ht(t)/255}function ht(t){return parseInt(t,16)}function rb(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const Ho={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function sb(t){let e={r:0,g:0,b:0},n=1,i=null,r=null,s=null,o=!1,l=!1;return typeof t=="string"&&(t=lb(t)),typeof t=="object"&&(ct(t.r)&&ct(t.g)&&ct(t.b)?(e=Jg(t.r,t.g,t.b),o=!0,l=String(t.r).substr(-1)==="%"?"prgb":"rgb"):ct(t.h)&&ct(t.s)&&ct(t.v)?(i=qr(t.s),r=qr(t.v),e=eb(t.h,i,r),o=!0,l="hsv"):ct(t.h)&&ct(t.s)&&ct(t.l)?(i=qr(t.s),s=qr(t.l),e=Qg(t.h,i,s),o=!0,l="hsl"):ct(t.c)&&ct(t.m)&&ct(t.y)&&ct(t.k)&&(e=nb(t.c,t.m,t.y,t.k),o=!0,l="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=bd(n),{ok:o,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}const ob="[-\\+]?\\d+%?",ab="[-\\+]?\\d*\\.\\d+%?",fn="(?:"+ab+")|(?:"+ob+")",wo="[\\s|\\(]+("+fn+")[,|\\s]+("+fn+")[,|\\s]+("+fn+")\\s*\\)?",Vr="[\\s|\\(]+("+fn+")[,|\\s]+("+fn+")[,|\\s]+("+fn+")[,|\\s]+("+fn+")\\s*\\)?",kt={CSS_UNIT:new RegExp(fn),rgb:new RegExp("rgb"+wo),rgba:new RegExp("rgba"+Vr),hsl:new RegExp("hsl"+wo),hsla:new RegExp("hsla"+Vr),hsv:new RegExp("hsv"+wo),hsva:new RegExp("hsva"+Vr),cmyk:new RegExp("cmyk"+Vr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function lb(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(Ho[t])t=Ho[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let n=kt.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=kt.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=kt.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=kt.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=kt.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=kt.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=kt.cmyk.exec(t),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=kt.hex8.exec(t),n?{r:ht(n[1]),g:ht(n[2]),b:ht(n[3]),a:Al(n[4]),format:e?"name":"hex8"}:(n=kt.hex6.exec(t),n?{r:ht(n[1]),g:ht(n[2]),b:ht(n[3]),format:e?"name":"hex"}:(n=kt.hex4.exec(t),n?{r:ht(n[1]+n[1]),g:ht(n[2]+n[2]),b:ht(n[3]+n[3]),a:Al(n[4]+n[4]),format:e?"name":"hex8"}:(n=kt.hex3.exec(t),n?{r:ht(n[1]+n[1]),g:ht(n[2]+n[2]),b:ht(n[3]+n[3]),format:e?"name":"hex"}:!1))))))))))}function ct(t){return typeof t=="number"?!Number.isNaN(t):kt.CSS_UNIT.test(t)}class we{constructor(e="",n={}){if(e instanceof we)return e;typeof e=="number"&&(e=rb(e)),this.originalInput=e;const i=sb(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??i.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let n,i,r;const s=e.r/255,o=e.g/255,l=e.b/255;return s<=.03928?n=s/12.92:n=Math.pow((s+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*n+.7152*i+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=bd(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Cl(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Cl(this.r,this.g,this.b),n=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${n}, ${i}%, ${r}%)`:`hsva(${n}, ${i}%, ${r}%, ${this.roundA})`}toHsl(){const e=El(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=El(this.r,this.g,this.b),n=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${n}, ${i}%, ${r}%)`:`hsla(${n}, ${i}%, ${r}%, ${this.roundA})`}toHex(e=!1){return $l(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return tb(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),n=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${n}, ${i})`:`rgba(${e}, ${n}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=n=>`${Math.round(Ne(n,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=n=>Math.round(Ne(n,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Sl(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:n,y:i,k:r}=Sl(this.r,this.g,this.b);return`cmyk(${e}, ${n}, ${i}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+$l(this.r,this.g,this.b,!1);for(const[n,i]of Object.entries(Ho))if(e===i)return n;return!1}toString(e){const n=!!e;e=e??this.format;let i=!1;const r=this.a<1&&this.a>=0;return!n&&r&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new we(this.toString())}lighten(e=10){const n=this.toHsl();return n.l+=e/100,n.l=Br(n.l),new we(n)}brighten(e=10){const n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new we(n)}darken(e=10){const n=this.toHsl();return n.l-=e/100,n.l=Br(n.l),new we(n)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const n=this.toHsl();return n.s-=e/100,n.s=Br(n.s),new we(n)}saturate(e=10){const n=this.toHsl();return n.s+=e/100,n.s=Br(n.s),new we(n)}greyscale(){return this.desaturate(100)}spin(e){const n=this.toHsl(),i=(n.h+e)%360;return n.h=i<0?360+i:i,new we(n)}mix(e,n=50){const i=this.toRgb(),r=new we(e).toRgb(),s=n/100,o={r:(r.r-i.r)*s+i.r,g:(r.g-i.g)*s+i.g,b:(r.b-i.b)*s+i.b,a:(r.a-i.a)*s+i.a};return new we(o)}analogous(e=6,n=30){const i=this.toHsl(),r=360/n,s=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,s.push(new we(i));return s}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new we(e)}monochromatic(e=6){const n=this.toHsv(),{h:i}=n,{s:r}=n;let{v:s}=n;const o=[],l=1/e;for(;e--;)o.push(new we({h:i,s:r,v:s})),s=(s+l)%1;return o}splitcomplement(){const e=this.toHsl(),{h:n}=e;return[this,new we({h:(n+72)%360,s:e.s,l:e.l}),new we({h:(n+216)%360,s:e.s,l:e.l})]}onBackground(e){const n=this.toRgb(),i=new we(e).toRgb(),r=n.a+i.a*(1-n.a);return new we({r:(n.r*n.a+i.r*i.a*(1-n.a))/r,g:(n.g*n.a+i.g*i.a*(1-n.a))/r,b:(n.b*n.a+i.b*i.a*(1-n.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const n=this.toHsl(),{h:i}=n,r=[this],s=360/e;for(let o=1;o<e;o++)r.push(new we({h:(i+o*s)%360,s:n.s,l:n.l}));return r}equals(e){const n=new we(e);return this.format==="cmyk"||n.format==="cmyk"?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}}var cb=`:host {
  --grid-width: 17em;
  --grid-height: 12em;
  --grid-handle-size: 1.25em;
  --slider-height: 1em;
  --slider-handle-size: calc(var(--slider-height) + 0.25em);
}

.color-picker {
  background-color: var(--wa-color-surface-raised);
  border-radius: var(--wa-border-radius-m);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
  border-color: var(--wa-color-surface-border);
  box-shadow: var(--wa-shadow-m);
  color: var(--color);
  font: inherit;
  font-size: inherit;
  user-select: none;
  width: var(--grid-width);
  -webkit-user-select: none;
}

.grid {
  position: relative;
  height: var(--grid-height);
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
    linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
  border-top-left-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
  border-top-right-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
  cursor: crosshair;
  forced-color-adjust: none;
}

.grid-handle {
  position: absolute;
  width: var(--grid-handle-size);
  height: var(--grid-handle-size);
  border-radius: var(--wa-border-radius-circle);
  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
  border: solid 0.125rem white;
  margin-top: calc(var(--grid-handle-size) / -2);
  margin-left: calc(var(--grid-handle-size) / -2);
  transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
}

.grid-handle-dragging {
  cursor: none;
  scale: 1.5;
}

.grid-handle:focus-visible {
  outline: var(--wa-focus-ring);
}

.controls {
  padding: 0.75em;
  display: flex;
  align-items: center;
}

.sliders {
  flex: 1 1 auto;
}

.slider {
  position: relative;
  height: var(--slider-height);
  border-radius: var(--wa-border-radius-s);
  box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
  forced-color-adjust: none;
}

.slider:not(:last-of-type) {
  margin-bottom: 0.75em;
}

.slider-handle {
  position: absolute;
  top: calc(50% - var(--slider-handle-size) / 2);
  width: var(--slider-handle-size);
  height: var(--slider-handle-size);
  border-radius: var(--wa-border-radius-circle);
  border: solid 0.125rem white;
  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
  margin-left: calc(var(--slider-handle-size) / -2);
}

.slider-handle:focus-visible {
  outline: var(--wa-focus-ring);
}

.hue {
  background-image: linear-gradient(
    to right,
    rgb(255, 0, 0) 0%,
    rgb(255, 255, 0) 17%,
    rgb(0, 255, 0) 33%,
    rgb(0, 255, 255) 50%,
    rgb(0, 0, 255) 67%,
    rgb(255, 0, 255) 83%,
    rgb(255, 0, 0) 100%
  );
}

.alpha .alpha-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.preview {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 3em;
  height: 3em;
  border: none;
  border-radius: var(--wa-border-radius-circle);
  background: none;
  font-size: inherit;
  margin-inline-start: 0.75em;
  cursor: copy;
  forced-color-adjust: none;
}

.preview:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);

  /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
  background-color: var(--preview-color);
}

.preview:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

.preview-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 0.0625rem rgba(0, 0, 0, 0.125);
}

.preview-color-copied {
  animation: pulse 850ms;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--wa-color-brand-fill-loud);
  }
  70% {
    box-shadow: 0 0 0 0.5rem transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}

.user-input {
  display: flex;
  align-items: center;
  padding: 0 0.75em 0.75em 0.75em;
}

.user-input wa-input {
  min-width: 0; /* fix input width in Safari */
  flex: 1 1 auto;

  &::part(form-control-label) {
    /* Visually hidden */
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
}

.user-input wa-button-group {
  margin-inline-start: 0.75em;

  &::part(base) {
    flex-wrap: nowrap;
  }
}

.user-input wa-button:first-of-type {
  min-width: 3em;
  max-width: 3em;
}

.swatches {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(1.5em, 100%), 1fr));
  grid-gap: 0.5em;
  justify-items: center;
  border-block-start: var(--wa-form-control-border-style) var(--wa-form-control-border-width)
    var(--wa-color-surface-border);
  padding: 0.5em;
  forced-color-adjust: none;
}

.swatch {
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
  border-radius: var(--wa-border-radius-s);
}

.swatch .swatch-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 0.0625rem rgba(0, 0, 0, 0.125);
  border-radius: inherit;
  cursor: pointer;
}

.swatch:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

.transparent-bg {
  background-image:
    linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
    linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
    linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%);
  background-size: 0.5rem 0.5rem;
  background-position:
    0 0,
    0 0,
    -0.25rem -0.25rem,
    0.25rem 0.25rem;
}

:host([disabled]) {
  opacity: 0.5;
  cursor: not-allowed;

  .grid,
  .grid-handle,
  .slider,
  .slider-handle,
  .preview,
  .swatch,
  .swatch-color {
    pointer-events: none;
  }
}

/*
 * Color dropdown
 */

.color-dropdown {
  display: contents;
}

.color-dropdown::part(panel) {
  max-height: none;
  background-color: var(--wa-color-surface-raised);
  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
  border-radius: var(--wa-border-radius-m);
  overflow: visible;
}

.trigger {
  display: block;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: inherit;
  forced-color-adjust: none;
  width: var(--wa-form-control-height);
  height: var(--wa-form-control-height);
  border-radius: var(--wa-form-control-border-radius);
}

.trigger:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: currentColor;
  box-shadow:
    inset 0 0 0 var(--wa-form-control-border-width) var(--wa-form-control-border-color),
    inset 0 0 0 calc(var(--wa-form-control-border-width) * 3) var(--wa-color-surface-default);
}

.trigger-empty:before {
  background-color: transparent;
}

.trigger:focus-visible {
  outline: none;
}

.trigger:focus-visible:not(.trigger:disabled) {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

:host([disabled]) :is(.label, .trigger) {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-control.form-control-has-label .label {
  cursor: pointer;
  display: inline-block;
}
`,U=class extends fe{constructor(){super(),this.hasSlotController=new xt(this,"hint","label"),this.isSafeValue=!1,this.localize=new te(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form=null,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open){t.stopPropagation(),this.focus(),this.hide();return}t.key==="Tab"&&setTimeout(()=>{const e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=t=>{const n=t.composedPath().some(i=>i instanceof Element&&(i.closest(".color-picker")||i===this.trigger));this&&!n&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){const t=[Fs()];return[...super.validators,...t]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".slider.alpha"),n=e.querySelector(".slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,s=this.value;n.focus(),t.preventDefault(),hr(e,{onMove:o=>{this.alpha=Y(o/i*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".slider.hue"),n=e.querySelector(".slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,s=this.value;n.focus(),t.preventDefault(),hr(e,{onMove:o=>{this.hue=Y(o/i*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".grid"),n=e.querySelector(".grid-handle"),{width:i,height:r}=e.getBoundingClientRect();let s=this.value,o=this.value;n.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,hr(e,{onMove:(l,c)=>{this.saturation=Y(l/i*100,0,100),this.brightness=Y(100-c/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,n=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=Y(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=Y(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(t){const e=t.shiftKey?10:1,n=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=Y(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=Y(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(t){const e=t.shiftKey?10:1,n=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=Y(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=Y(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=Y(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=Y(this.brightness-e,0,100),this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(t){const e=t.target,n=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value||""):this.value="",this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(t){this.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(t){t.preventDefault()}parseColor(t){if(!t||t.trim()==="")return null;const e=new we(t);if(!e.isValid)return null;const n=e.toHsl(),i=e.toRgb(),r=e.toHsv();if(!i||i.r==null||i.g==null||i.b==null)return null;const s={h:n.h||0,s:(n.s||0)*100,l:(n.l||0)*100,a:n.a||0},o=e.toHexString(),l=e.toHex8String(),c={h:r.h||0,s:(r.s||0)*100,v:(r.v||0)*100,a:r.a||0};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a||0,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${(i.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(l)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(e=>{const n=this.value;this.setColor(e.sRGBHex),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(t,e,n,i=100){const r=new we(`hsva(${t}, ${e}%, ${n}%, ${i/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(t){super.willUpdate(t),t.has("value")&&this.handleValueChange(t.get("value")||"",this.value||"")}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(e);n!==null?(this.inputValue=this.value||"",this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=t??""}this.requestUpdate()}focus(t){this.trigger.focus(t)}blur(){const t=this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.popup?.active&&this.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new Ra),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(t){super.firstUpdated(t),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}updateAccessibleTrigger(){const t=this.trigger;t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,Lt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Lt(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await he(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await he(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){const t=this.hasUpdated?this.withLabel||this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.withHint||this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e,r=this.saturation,s=100-this.brightness,o=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(c=>c.trim()!==""),l=f`
      <div
        part="base"
        class=${H({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${ut({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${H({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${ut({top:`${s}%`,left:`${r}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${F(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="controls">
          <div class="sliders">
            <div
              part="slider hue-slider"
              class="hue slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="slider-handle"
                style=${ut({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${F(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?f`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${ut({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${ut({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${F(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="preview transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${ut({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="user-input" aria-live="polite">
          <wa-input
            part="input"
            type="text"
            name=${this.name}
            size="small"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}
            @input=${this.handleInputInput}
            @blur=${this.stopNestedEventPropagation}
            @focus=${this.stopNestedEventPropagation}
          ></wa-input>

          <wa-button-group>
            ${this.withoutFormatToggle?"":f`
                  <wa-button
                    part="format-button"
                    size="small"
                    appearance="outlined"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      start:format-button__start,
                      label:format-button__label,
                      end:format-button__end,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </wa-button>
                `}
            ${this.hasEyeDropper?f`
                  <wa-button
                    part="eyedropper-button"
                    size="small"
                    appearance="outlined"
                    exportparts="
                      base:eyedropper-button__base,
                      start:eyedropper-button__start,
                      label:eyedropper-button__label,
                      end:eyedropper-button__end,
                      caret:eyedropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    <wa-icon
                      library="system"
                      name="eyedropper"
                      variant="solid"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></wa-icon>
                  </wa-button>
                `:""}
          </wa-button-group>
        </div>

        ${o.length>0?f`
              <div part="swatches" class="swatches">
                ${o.map(c=>{const h=this.parseColor(c);return h?f`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${F(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${c}
                      @click=${()=>this.selectSwatch(c)}
                      @keydown=${u=>!this.disabled&&u.key==="Enter"&&this.setColor(h.hexa)}
                    >
                      <div class="swatch-color" style=${ut({backgroundColor:h.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return f`
      <div
        class=${H({container:!0,"form-control":!0,"form-control-has-label":n})}
        part="trigger-container form-control"
      >
        <div part="form-control-label" class="label" id="form-control-label">
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${H({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
          style=${ut({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
          aria-labelledby="form-control-label"
          aria-describedby="hint"
          .disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        ></button>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${H({"has-slotted":i})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement="bottom-start"
        distance="0"
        skidding="0"
        sync="width"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?"true":"false"}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${l}
      </wa-popup>
    `}};U.css=[gd,Ze,ln,cb];U.shadowRootOptions={...fe.shadowRootOptions,delegatesFocus:!0};a([A('[part~="base"]')],U.prototype,"base",2);a([A('[part~="input"]')],U.prototype,"input",2);a([A('[part~="form-control-label"]')],U.prototype,"triggerLabel",2);a([A('[part~="form-control-input"]')],U.prototype,"triggerButton",2);a([A(".color-popup")],U.prototype,"popup",2);a([A('[part~="preview"]')],U.prototype,"previewButton",2);a([A('[part~="trigger"]')],U.prototype,"trigger",2);a([$()],U.prototype,"hasFocus",2);a([$()],U.prototype,"isDraggingGridHandle",2);a([$()],U.prototype,"isEmpty",2);a([$()],U.prototype,"inputValue",2);a([$()],U.prototype,"hue",2);a([$()],U.prototype,"saturation",2);a([$()],U.prototype,"brightness",2);a([$()],U.prototype,"alpha",2);a([$()],U.prototype,"value",1);a([d({attribute:"value",reflect:!0})],U.prototype,"defaultValue",2);a([d({attribute:"with-label",reflect:!0,type:Boolean})],U.prototype,"withLabel",2);a([d({attribute:"with-hint",reflect:!0,type:Boolean})],U.prototype,"withHint",2);a([$()],U.prototype,"hasEyeDropper",2);a([d()],U.prototype,"label",2);a([d({attribute:"hint"})],U.prototype,"hint",2);a([d()],U.prototype,"format",2);a([d({reflect:!0})],U.prototype,"size",2);a([d({attribute:"without-format-toggle",type:Boolean})],U.prototype,"withoutFormatToggle",2);a([d({reflect:!0})],U.prototype,"name",2);a([d({type:Boolean})],U.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],U.prototype,"open",2);a([d({type:Boolean})],U.prototype,"opacity",2);a([d({type:Boolean})],U.prototype,"uppercase",2);a([d()],U.prototype,"swatches",2);a([d({reflect:!0})],U.prototype,"form",2);a([d({type:Boolean,reflect:!0})],U.prototype,"required",2);a([As({passive:!1})],U.prototype,"handleTouchMove",1);a([L("format",{waitUntilFirstUpdate:!0})],U.prototype,"handleFormatChange",1);a([L("opacity")],U.prototype,"handleOpacityChange",1);a([L("value")],U.prototype,"handleValueChange",1);a([L("open",{waitUntilFirstUpdate:!0})],U.prototype,"handleOpenChange",1);U=a([C("wa-color-picker")],U);var wd=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function vd(t,e){const n=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!n&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&db(e)})}function db(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;const n=[...e.elements];if(n.length===1){e.requestSubmit(null);return}const i=n.find(r=>r.type==="submit"&&!r.matches(":disabled"));i&&(["input","button"].includes(i.localName)?e.requestSubmit(i):i.click())}var hb=`:host {
  border-width: 0;
}

.text-field {
  flex: auto;
  display: flex;
  align-items: stretch;
  justify-content: start;
  position: relative;
  transition: inherit;
  height: var(--wa-form-control-height);
  border-color: var(--wa-form-control-border-color);
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-form-control-border-style);
  border-width: var(--wa-form-control-border-width);
  cursor: text;
  color: var(--wa-form-control-value-color);
  font-size: var(--wa-form-control-value-font-size);
  font-family: inherit;
  font-weight: var(--wa-form-control-value-font-weight);
  line-height: var(--wa-form-control-value-line-height);
  vertical-align: middle;
  width: 100%;
  transition:
    background-color var(--wa-transition-normal),
    border var(--wa-transition-normal),
    outline var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);
  background-color: var(--wa-form-control-background-color);
  box-shadow: var(--box-shadow);
  padding: 0 var(--wa-form-control-padding-inline);

  &:focus-within {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Style disabled inputs */
  &:has(:disabled) {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

/* Appearance modifiers */
:host([appearance='outlined']) .text-field {
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
}

:host([appearance='filled']) .text-field {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-color-neutral-fill-quiet);
}

:host([appearance='filled-outlined']) .text-field {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-form-control-border-color);
}

:host([pill]) .text-field {
  border-radius: var(--wa-border-radius-pill) !important;
}

.text-field {
  /* Show autofill styles over the entire text field, not just the native <input> */
  &:has(:autofill),
  &:has(:-webkit-autofill) {
    background-color: var(--wa-color-brand-fill-quiet) !important;
  }

  input,
  textarea {
    /*
    Fixes an alignment issue with placeholders.
    https://github.com/shoelace-style/webawesome/issues/342
  */
    height: 100%;

    padding: 0;
    border: none;
    outline: none;
    box-shadow: none;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
    font: inherit;

    /* Turn off Safari's autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-background-clip: text;
      background-color: transparent;
      -webkit-text-fill-color: inherit;
    }
  }
}

input {
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  transition: inherit;

  /* prettier-ignore */
  background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
  height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
  padding-block: 0;
  color: inherit;

  &:autofill {
    &,
    &:hover,
    &:focus,
    &:active {
      box-shadow: none;
      caret-color: var(--wa-form-control-value-color);
    }
  }

  &::placeholder {
    color: var(--wa-form-control-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }
}

textarea {
  &:autofill {
    &,
    &:hover,
    &:focus,
    &:active {
      box-shadow: none;
      caret-color: var(--wa-form-control-value-color);
    }
  }

  &::placeholder {
    color: var(--wa-form-control-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }
}

.start,
.end {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  cursor: default;

  &::slotted(wa-icon) {
    color: var(--wa-color-neutral-on-quiet);
  }
}

.start::slotted(*) {
  margin-inline-end: var(--wa-form-control-padding-inline);
}

.end::slotted(*) {
  margin-inline-start: var(--wa-form-control-padding-inline);
}

/*
 * Clearable + Password Toggle
 */

.clear,
.password-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  color: var(--wa-color-neutral-on-quiet);
  border: none;
  background: none;
  padding: 0;
  transition: var(--wa-transition-normal) color;
  cursor: pointer;
  margin-inline-start: var(--wa-form-control-padding-inline);

  @media (hover: hover) {
    &:hover {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  &:active {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  &:focus {
    outline: none;
  }
}

/* Don't show the browser's password toggle in Edge */
::-ms-reveal {
  display: none;
}

/* Hide the built-in number spinner */
:host([without-spin-buttons]) input[type='number'] {
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }
}
`,j=class extends fe{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new xt(this,"hint","label"),this.localize=new te(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Ms()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new wd),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){vd(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,n="none"){this.input.setSelectionRange(t,e,n)}setRangeText(t,e,n,i="preserve"){const r=e??this.input.selectionStart,s=n??this.input.selectionEnd;this.input.setRangeText(t,r,s,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e,r=this.withClear&&!this.disabled&&!this.readonly,s=this.hasUpdated&&r&&(typeof this.value=="number"||this.value&&this.value.length>0);return f`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${n?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${F(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${F(this.placeholder)}
          minlength=${F(this.minlength)}
          maxlength=${F(this.maxlength)}
          min=${F(this.min)}
          max=${F(this.max)}
          step=${F(this.step)}
          .value=${ki(this.value??"")}
          autocapitalize=${F(this.autocapitalize)}
          autocomplete=${F(this.autocomplete)}
          autocorrect=${F(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${F(this.pattern)}
          enterkeyhint=${F(this.enterkeyhint)}
          inputmode=${F(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${s?f`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?f`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?f`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:f`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${H({"has-slotted":i})}
        aria-hidden=${i?"false":"true"}
        >${this.hint}</slot
      >
    `}};j.css=[Ze,ln,hb];j.shadowRootOptions={...fe.shadowRootOptions,delegatesFocus:!0};a([A("input")],j.prototype,"input",2);a([d()],j.prototype,"title",2);a([d({reflect:!0})],j.prototype,"type",2);a([$()],j.prototype,"value",1);a([d({attribute:"value",reflect:!0})],j.prototype,"defaultValue",2);a([d({reflect:!0})],j.prototype,"size",2);a([d({reflect:!0})],j.prototype,"appearance",2);a([d({type:Boolean,reflect:!0})],j.prototype,"pill",2);a([d()],j.prototype,"label",2);a([d({attribute:"hint"})],j.prototype,"hint",2);a([d({attribute:"with-clear",type:Boolean})],j.prototype,"withClear",2);a([d()],j.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],j.prototype,"readonly",2);a([d({attribute:"password-toggle",type:Boolean})],j.prototype,"passwordToggle",2);a([d({attribute:"password-visible",type:Boolean})],j.prototype,"passwordVisible",2);a([d({attribute:"without-spin-buttons",type:Boolean})],j.prototype,"withoutSpinButtons",2);a([d({reflect:!0})],j.prototype,"form",2);a([d({type:Boolean,reflect:!0})],j.prototype,"required",2);a([d()],j.prototype,"pattern",2);a([d({type:Number})],j.prototype,"minlength",2);a([d({type:Number})],j.prototype,"maxlength",2);a([d()],j.prototype,"min",2);a([d()],j.prototype,"max",2);a([d()],j.prototype,"step",2);a([d()],j.prototype,"autocapitalize",2);a([d()],j.prototype,"autocorrect",2);a([d()],j.prototype,"autocomplete",2);a([d({type:Boolean})],j.prototype,"autofocus",2);a([d()],j.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],j.prototype,"spellcheck",2);a([d()],j.prototype,"inputmode",2);a([d({attribute:"with-label",type:Boolean})],j.prototype,"withLabel",2);a([d({attribute:"with-hint",type:Boolean})],j.prototype,"withHint",2);a([L("step",{waitUntilFirstUpdate:!0})],j.prototype,"handleStepChange",1);j=a([C("wa-input")],j);var yd=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};const kn=Math.min,ft=Math.max,ms=Math.round,Hr=Math.floor,Ut=t=>({x:t,y:t}),ub={left:"right",right:"left",bottom:"top",top:"bottom"},pb={start:"end",end:"start"};function Wo(t,e,n){return ft(t,kn(e,n))}function Mi(t,e){return typeof t=="function"?t(e):t}function En(t){return t.split("-")[0]}function Ni(t){return t.split("-")[1]}function xd(t){return t==="x"?"y":"x"}function La(t){return t==="y"?"height":"width"}const fb=new Set(["top","bottom"]);function Qt(t){return fb.has(En(t))?"y":"x"}function Ia(t){return xd(Qt(t))}function mb(t,e,n){n===void 0&&(n=!1);const i=Ni(t),r=Ia(t),s=La(r);let o=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=gs(o)),[o,gs(o)]}function gb(t){const e=gs(t);return[jo(t),e,jo(e)]}function jo(t){return t.replace(/start|end/g,e=>pb[e])}const _l=["left","right"],Tl=["right","left"],bb=["top","bottom"],wb=["bottom","top"];function vb(t,e,n){switch(t){case"top":case"bottom":return n?e?Tl:_l:e?_l:Tl;case"left":case"right":return e?bb:wb;default:return[]}}function yb(t,e,n,i){const r=Ni(t);let s=vb(En(t),n==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(jo)))),s}function gs(t){return t.replace(/left|right|bottom|top/g,e=>ub[e])}function xb(t){return{top:0,right:0,bottom:0,left:0,...t}}function kd(t){return typeof t!="number"?xb(t):{top:t,right:t,bottom:t,left:t}}function bs(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function Rl(t,e,n){let{reference:i,floating:r}=t;const s=Qt(e),o=Ia(e),l=La(o),c=En(e),h=s==="y",u=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,g=i[l]/2-r[l]/2;let b;switch(c){case"top":b={x:u,y:i.y-r.height};break;case"bottom":b={x:u,y:i.y+i.height};break;case"right":b={x:i.x+i.width,y:p};break;case"left":b={x:i.x-r.width,y:p};break;default:b={x:i.x,y:i.y}}switch(Ni(e)){case"start":b[o]-=g*(n&&h?-1:1);break;case"end":b[o]+=g*(n&&h?-1:1);break}return b}const kb=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,l=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let h=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:p}=Rl(h,i,c),g=i,b={},w=0;for(let k=0;k<l.length;k++){const{name:I,fn:S}=l[k],{x:P,y:R,data:O,reset:_}=await S({x:u,y:p,initialPlacement:i,placement:g,strategy:r,middlewareData:b,rects:h,platform:o,elements:{reference:t,floating:e}});u=P??u,p=R??p,b={...b,[I]:{...b[I],...O}},_&&w<=50&&(w++,typeof _=="object"&&(_.placement&&(g=_.placement),_.rects&&(h=_.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):_.rects),{x:u,y:p}=Rl(h,g,c)),k=-1)}return{x:u,y:p,placement:g,strategy:r,middlewareData:b}};async function Oa(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:l,strategy:c}=t,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:g=!1,padding:b=0}=Mi(e,t),w=kd(b),I=l[g?p==="floating"?"reference":"floating":p],S=bs(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(I)))==null||n?I:I.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:h,rootBoundary:u,strategy:c})),P=p==="floating"?{x:i,y:r,width:o.floating.width,height:o.floating.height}:o.reference,R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),O=await(s.isElement==null?void 0:s.isElement(R))?await(s.getScale==null?void 0:s.getScale(R))||{x:1,y:1}:{x:1,y:1},_=bs(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:P,offsetParent:R,strategy:c}):P);return{top:(S.top-_.top+w.top)/O.y,bottom:(_.bottom-S.bottom+w.bottom)/O.y,left:(S.left-_.left+w.left)/O.x,right:(_.right-S.right+w.right)/O.x}}const Eb=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:o,elements:l,middlewareData:c}=e,{element:h,padding:u=0}=Mi(t,e)||{};if(h==null)return{};const p=kd(u),g={x:n,y:i},b=Ia(r),w=La(b),k=await o.getDimensions(h),I=b==="y",S=I?"top":"left",P=I?"bottom":"right",R=I?"clientHeight":"clientWidth",O=s.reference[w]+s.reference[b]-g[b]-s.floating[w],_=g[b]-s.reference[b],W=await(o.getOffsetParent==null?void 0:o.getOffsetParent(h));let z=W?W[R]:0;(!z||!await(o.isElement==null?void 0:o.isElement(W)))&&(z=l.floating[R]||s.floating[w]);const ge=O/2-_/2,be=z/2-k[w]/2-1,le=kn(p[S],be),Ie=kn(p[P],be),xe=le,Ae=z-k[w]-Ie,Ee=z/2-k[w]/2+ge,Oe=Wo(xe,Ee,Ae),V=!c.arrow&&Ni(r)!=null&&Ee!==Oe&&s.reference[w]/2-(Ee<xe?le:Ie)-k[w]/2<0,Ve=V?Ee<xe?Ee-xe:Ee-Ae:0;return{[b]:g[b]+Ve,data:{[b]:Oe,centerOffset:Ee-Oe-Ve,...V&&{alignmentOffset:Ve}},reset:V}}}),Cb=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:s,rects:o,initialPlacement:l,platform:c,elements:h}=e,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:k=!0,...I}=Mi(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const S=En(r),P=Qt(l),R=En(l)===l,O=await(c.isRTL==null?void 0:c.isRTL(h.floating)),_=g||(R||!k?[gs(l)]:gb(l)),W=w!=="none";!g&&W&&_.push(...yb(l,k,w,O));const z=[l,..._],ge=await Oa(e,I),be=[];let le=((i=s.flip)==null?void 0:i.overflows)||[];if(u&&be.push(ge[S]),p){const Ee=mb(r,o,O);be.push(ge[Ee[0]],ge[Ee[1]])}if(le=[...le,{placement:r,overflows:be}],!be.every(Ee=>Ee<=0)){var Ie,xe;const Ee=(((Ie=s.flip)==null?void 0:Ie.index)||0)+1,Oe=z[Ee];if(Oe&&(!(p==="alignment"?P!==Qt(Oe):!1)||le.every(je=>Qt(je.placement)===P?je.overflows[0]>0:!0)))return{data:{index:Ee,overflows:le},reset:{placement:Oe}};let V=(xe=le.filter(Ve=>Ve.overflows[0]<=0).sort((Ve,je)=>Ve.overflows[1]-je.overflows[1])[0])==null?void 0:xe.placement;if(!V)switch(b){case"bestFit":{var Ae;const Ve=(Ae=le.filter(je=>{if(W){const St=Qt(je.placement);return St===P||St==="y"}return!0}).map(je=>[je.placement,je.overflows.filter(St=>St>0).reduce((St,Ln)=>St+Ln,0)]).sort((je,St)=>je[1]-St[1])[0])==null?void 0:Ae[0];Ve&&(V=Ve);break}case"initialPlacement":V=l;break}if(r!==V)return{reset:{placement:V}}}return{}}}},$b=new Set(["left","top"]);async function Sb(t,e){const{placement:n,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=En(n),l=Ni(n),c=Qt(n)==="y",h=$b.has(o)?-1:1,u=s&&c?-1:1,p=Mi(e,t);let{mainAxis:g,crossAxis:b,alignmentAxis:w}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof w=="number"&&(b=l==="end"?w*-1:w),c?{x:b*u,y:g*h}:{x:g*h,y:b*u}}const Ab=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:s,placement:o,middlewareData:l}=e,c=await Sb(e,t);return o===((n=l.offset)==null?void 0:n.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:o}}}}},_b=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:l={fn:I=>{let{x:S,y:P}=I;return{x:S,y:P}}},...c}=Mi(t,e),h={x:n,y:i},u=await Oa(e,c),p=Qt(En(r)),g=xd(p);let b=h[g],w=h[p];if(s){const I=g==="y"?"top":"left",S=g==="y"?"bottom":"right",P=b+u[I],R=b-u[S];b=Wo(P,b,R)}if(o){const I=p==="y"?"top":"left",S=p==="y"?"bottom":"right",P=w+u[I],R=w-u[S];w=Wo(P,w,R)}const k=l.fn({...e,[g]:b,[p]:w});return{...k,data:{x:k.x-n,y:k.y-i,enabled:{[g]:s,[p]:o}}}}}},Tb=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,i;const{placement:r,rects:s,platform:o,elements:l}=e,{apply:c=()=>{},...h}=Mi(t,e),u=await Oa(e,h),p=En(r),g=Ni(r),b=Qt(r)==="y",{width:w,height:k}=s.floating;let I,S;p==="top"||p==="bottom"?(I=p,S=g===(await(o.isRTL==null?void 0:o.isRTL(l.floating))?"start":"end")?"left":"right"):(S=p,I=g==="end"?"top":"bottom");const P=k-u.top-u.bottom,R=w-u.left-u.right,O=kn(k-u[I],P),_=kn(w-u[S],R),W=!e.middlewareData.shift;let z=O,ge=_;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(ge=R),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(z=P),W&&!g){const le=ft(u.left,0),Ie=ft(u.right,0),xe=ft(u.top,0),Ae=ft(u.bottom,0);b?ge=w-2*(le!==0||Ie!==0?le+Ie:ft(u.left,u.right)):z=k-2*(xe!==0||Ae!==0?xe+Ae:ft(u.top,u.bottom))}await c({...e,availableWidth:ge,availableHeight:z});const be=await o.getDimensions(l.floating);return w!==be.width||k!==be.height?{reset:{rects:!0}}:{}}}};function Us(){return typeof window<"u"}function Fi(t){return Ed(t)?(t.nodeName||"").toLowerCase():"#document"}function wt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Gt(t){var e;return(e=(Ed(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ed(t){return Us()?t instanceof Node||t instanceof wt(t).Node:!1}function It(t){return Us()?t instanceof Element||t instanceof wt(t).Element:!1}function qt(t){return Us()?t instanceof HTMLElement||t instanceof wt(t).HTMLElement:!1}function Ll(t){return!Us()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof wt(t).ShadowRoot}const Rb=new Set(["inline","contents"]);function _r(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=Ot(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!Rb.has(r)}const Lb=new Set(["table","td","th"]);function Ib(t){return Lb.has(Fi(t))}const Ob=[":popover-open",":modal"];function Bs(t){return Ob.some(e=>{try{return t.matches(e)}catch{return!1}})}const Db=["transform","translate","scale","rotate","perspective"],zb=["transform","translate","scale","rotate","perspective","filter"],Pb=["paint","layout","strict","content"];function qs(t){const e=Da(),n=It(t)?Ot(t):t;return Db.some(i=>n[i]?n[i]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||zb.some(i=>(n.willChange||"").includes(i))||Pb.some(i=>(n.contain||"").includes(i))}function Mb(t){let e=Cn(t);for(;qt(e)&&!Ei(e);){if(qs(e))return e;if(Bs(e))return null;e=Cn(e)}return null}function Da(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Nb=new Set(["html","body","#document"]);function Ei(t){return Nb.has(Fi(t))}function Ot(t){return wt(t).getComputedStyle(t)}function Vs(t){return It(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Cn(t){if(Fi(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ll(t)&&t.host||Gt(t);return Ll(e)?e.host:e}function Cd(t){const e=Cn(t);return Ei(e)?t.ownerDocument?t.ownerDocument.body:t.body:qt(e)&&_r(e)?e:Cd(e)}function Ci(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=Cd(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),o=wt(r);if(s){const l=Xo(o);return e.concat(o,o.visualViewport||[],_r(r)?r:[],l&&n?Ci(l):[])}return e.concat(r,Ci(r,[],n))}function Xo(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function $d(t){const e=Ot(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=qt(t),s=r?t.offsetWidth:n,o=r?t.offsetHeight:i,l=ms(n)!==s||ms(i)!==o;return l&&(n=s,i=o),{width:n,height:i,$:l}}function za(t){return It(t)?t:t.contextElement}function fi(t){const e=za(t);if(!qt(e))return Ut(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:s}=$d(e);let o=(s?ms(n.width):n.width)/i,l=(s?ms(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Fb=Ut(0);function Sd(t){const e=wt(t);return!Da()||!e.visualViewport?Fb:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ub(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==wt(t)?!1:e}function Wn(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=za(t);let o=Ut(1);e&&(i?It(i)&&(o=fi(i)):o=fi(t));const l=Ub(s,n,i)?Sd(s):Ut(0);let c=(r.left+l.x)/o.x,h=(r.top+l.y)/o.y,u=r.width/o.x,p=r.height/o.y;if(s){const g=wt(s),b=i&&It(i)?wt(i):i;let w=g,k=Xo(w);for(;k&&i&&b!==w;){const I=fi(k),S=k.getBoundingClientRect(),P=Ot(k),R=S.left+(k.clientLeft+parseFloat(P.paddingLeft))*I.x,O=S.top+(k.clientTop+parseFloat(P.paddingTop))*I.y;c*=I.x,h*=I.y,u*=I.x,p*=I.y,c+=R,h+=O,w=wt(k),k=Xo(w)}}return bs({width:u,height:p,x:c,y:h})}function Hs(t,e){const n=Vs(t).scrollLeft;return e?e.left+n:Wn(Gt(t)).left+n}function Ad(t,e){const n=t.getBoundingClientRect(),i=n.left+e.scrollLeft-Hs(t,n),r=n.top+e.scrollTop;return{x:i,y:r}}function Bb(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const s=r==="fixed",o=Gt(i),l=e?Bs(e.floating):!1;if(i===o||l&&s)return n;let c={scrollLeft:0,scrollTop:0},h=Ut(1);const u=Ut(0),p=qt(i);if((p||!p&&!s)&&((Fi(i)!=="body"||_r(o))&&(c=Vs(i)),qt(i))){const b=Wn(i);h=fi(i),u.x=b.x+i.clientLeft,u.y=b.y+i.clientTop}const g=o&&!p&&!s?Ad(o,c):Ut(0);return{width:n.width*h.x,height:n.height*h.y,x:n.x*h.x-c.scrollLeft*h.x+u.x+g.x,y:n.y*h.y-c.scrollTop*h.y+u.y+g.y}}function qb(t){return Array.from(t.getClientRects())}function Vb(t){const e=Gt(t),n=Vs(t),i=t.ownerDocument.body,r=ft(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=ft(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+Hs(t);const l=-n.scrollTop;return Ot(i).direction==="rtl"&&(o+=ft(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:l}}const Il=25;function Hb(t,e){const n=wt(t),i=Gt(t),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,l=0,c=0;if(r){s=r.width,o=r.height;const u=Da();(!u||u&&e==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}const h=Hs(i);if(h<=0){const u=i.ownerDocument,p=u.body,g=getComputedStyle(p),b=u.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,w=Math.abs(i.clientWidth-p.clientWidth-b);w<=Il&&(s-=w)}else h<=Il&&(s+=h);return{width:s,height:o,x:l,y:c}}const Wb=new Set(["absolute","fixed"]);function jb(t,e){const n=Wn(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,s=qt(t)?fi(t):Ut(1),o=t.clientWidth*s.x,l=t.clientHeight*s.y,c=r*s.x,h=i*s.y;return{width:o,height:l,x:c,y:h}}function Ol(t,e,n){let i;if(e==="viewport")i=Hb(t,n);else if(e==="document")i=Vb(Gt(t));else if(It(e))i=jb(e,n);else{const r=Sd(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return bs(i)}function _d(t,e){const n=Cn(t);return n===e||!It(n)||Ei(n)?!1:Ot(n).position==="fixed"||_d(n,e)}function Xb(t,e){const n=e.get(t);if(n)return n;let i=Ci(t,[],!1).filter(l=>It(l)&&Fi(l)!=="body"),r=null;const s=Ot(t).position==="fixed";let o=s?Cn(t):t;for(;It(o)&&!Ei(o);){const l=Ot(o),c=qs(o);!c&&l.position==="fixed"&&(r=null),(s?!c&&!r:!c&&l.position==="static"&&!!r&&Wb.has(r.position)||_r(o)&&!c&&_d(t,o))?i=i.filter(u=>u!==o):r=l,o=Cn(o)}return e.set(t,i),i}function Gb(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[...n==="clippingAncestors"?Bs(e)?[]:Xb(e,this._c):[].concat(n),i],l=o[0],c=o.reduce((h,u)=>{const p=Ol(e,u,r);return h.top=ft(p.top,h.top),h.right=kn(p.right,h.right),h.bottom=kn(p.bottom,h.bottom),h.left=ft(p.left,h.left),h},Ol(e,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Kb(t){const{width:e,height:n}=$d(t);return{width:e,height:n}}function Yb(t,e,n){const i=qt(e),r=Gt(e),s=n==="fixed",o=Wn(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=Ut(0);function h(){c.x=Hs(r)}if(i||!i&&!s)if((Fi(e)!=="body"||_r(r))&&(l=Vs(e)),i){const b=Wn(e,!0,s,e);c.x=b.x+e.clientLeft,c.y=b.y+e.clientTop}else r&&h();s&&!i&&r&&h();const u=r&&!i&&!s?Ad(r,l):Ut(0),p=o.left+l.scrollLeft-c.x-u.x,g=o.top+l.scrollTop-c.y-u.y;return{x:p,y:g,width:o.width,height:o.height}}function vo(t){return Ot(t).position==="static"}function Dl(t,e){if(!qt(t)||Ot(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Gt(t)===n&&(n=n.ownerDocument.body),n}function Td(t,e){const n=wt(t);if(Bs(t))return n;if(!qt(t)){let r=Cn(t);for(;r&&!Ei(r);){if(It(r)&&!vo(r))return r;r=Cn(r)}return n}let i=Dl(t,e);for(;i&&Ib(i)&&vo(i);)i=Dl(i,e);return i&&Ei(i)&&vo(i)&&!qs(i)?n:i||Mb(t)||n}const Zb=async function(t){const e=this.getOffsetParent||Td,n=this.getDimensions,i=await n(t.floating);return{reference:Yb(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Jb(t){return Ot(t).direction==="rtl"}const Zr={convertOffsetParentRelativeRectToViewportRelativeRect:Bb,getDocumentElement:Gt,getClippingRect:Gb,getOffsetParent:Td,getElementRects:Zb,getClientRects:qb,getDimensions:Kb,getScale:fi,isElement:It,isRTL:Jb};function Rd(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Qb(t,e){let n=null,i;const r=Gt(t);function s(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const h=t.getBoundingClientRect(),{left:u,top:p,width:g,height:b}=h;if(l||e(),!g||!b)return;const w=Hr(p),k=Hr(r.clientWidth-(u+g)),I=Hr(r.clientHeight-(p+b)),S=Hr(u),R={rootMargin:-w+"px "+-k+"px "+-I+"px "+-S+"px",threshold:ft(0,kn(1,c))||1};let O=!0;function _(W){const z=W[0].intersectionRatio;if(z!==c){if(!O)return o();z?o(!1,z):i=setTimeout(()=>{o(!1,1e-7)},1e3)}z===1&&!Rd(h,t.getBoundingClientRect())&&o(),O=!1}try{n=new IntersectionObserver(_,{...R,root:r.ownerDocument})}catch{n=new IntersectionObserver(_,R)}n.observe(t)}return o(!0),s}function Ld(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,h=za(t),u=r||s?[...h?Ci(h):[],...Ci(e)]:[];u.forEach(S=>{r&&S.addEventListener("scroll",n,{passive:!0}),s&&S.addEventListener("resize",n)});const p=h&&l?Qb(h,n):null;let g=-1,b=null;o&&(b=new ResizeObserver(S=>{let[P]=S;P&&P.target===h&&b&&(b.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var R;(R=b)==null||R.observe(e)})),n()}),h&&!c&&b.observe(h),b.observe(e));let w,k=c?Wn(t):null;c&&I();function I(){const S=Wn(t);k&&!Rd(k,S)&&n(),k=S,w=requestAnimationFrame(I)}return n(),()=>{var S;u.forEach(P=>{r&&P.removeEventListener("scroll",n),s&&P.removeEventListener("resize",n)}),p?.(),(S=b)==null||S.disconnect(),b=null,c&&cancelAnimationFrame(w)}}const Id=Ab,Od=_b,Dd=Cb,zl=Tb,e0=Eb,zd=(t,e,n)=>{const i=new Map,r={platform:Zr,...n},s={...r.platform,_c:i};return kb(t,e,{...r,platform:s})};function t0(t){return n0(t)}function yo(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function n0(t){for(let e=t;e;e=yo(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=yo(t);e;e=yo(e)){if(!(e instanceof Element))continue;const n=getComputedStyle(e);if(n.display!=="contents"&&(n.position!=="static"||qs(n)||e.tagName==="BODY"))return e}return null}var i0=`:host {
  --arrow-color: black;
  --arrow-size: var(--wa-tooltip-arrow-size);
  --show-duration: 100ms;
  --hide-duration: 100ms;

  /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
  --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
  --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

  display: contents;
}

.popup {
  position: absolute;
  isolation: isolate;
  max-width: var(--auto-size-available-width, none);
  max-height: var(--auto-size-available-height, none);

  /* Clear UA styles for [popover] */
  :where(&) {
    inset: unset;
    padding: unset;
    margin: unset;
    width: unset;
    height: unset;
    color: unset;
    background: unset;
    border: unset;
    overflow: unset;
  }
}

.popup-fixed {
  position: fixed;
}

.popup:not(.popup-active) {
  display: none;
}

.arrow {
  position: absolute;
  width: calc(var(--arrow-size-diagonal) * 2);
  height: calc(var(--arrow-size-diagonal) * 2);
  rotate: 45deg;
  background: var(--arrow-color);
  z-index: 3;
}

:host([data-current-placement~='left']) .arrow {
  rotate: -45deg;
}

:host([data-current-placement~='right']) .arrow {
  rotate: 135deg;
}

:host([data-current-placement~='bottom']) .arrow {
  rotate: 225deg;
}

/* Hover bridge */
.popup-hover-bridge:not(.popup-hover-bridge-visible) {
  display: none;
}

.popup-hover-bridge {
  position: fixed;
  z-index: 899;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  clip-path: polygon(
    var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
    var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
    var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
    var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
  );
}

/* Built-in animations */
.show {
  animation: show var(--show-duration) ease;
}

.hide {
  animation: show var(--hide-duration) ease reverse;
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.show-with-scale {
  animation: show-with-scale var(--show-duration) ease;
}

.hide-with-scale {
  animation: show-with-scale var(--hide-duration) ease reverse;
}

@keyframes show-with-scale {
  from {
    opacity: 0;
    scale: 0.8;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
`;function Pl(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var Wr=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),oe=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),n=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,s=0,o=0,l=0,c=0,h=0,u=0;n?t.top<e.top?(i=t.left,r=t.bottom,s=t.right,o=t.bottom,l=e.left,c=e.top,h=e.right,u=e.top):(i=e.left,r=e.bottom,s=e.right,o=e.bottom,l=t.left,c=t.top,h=t.right,u=t.top):t.left<e.left?(i=t.right,r=t.top,s=e.left,o=e.top,l=t.right,c=t.bottom,h=e.left,u=e.bottom):(i=e.right,r=e.top,s=t.left,o=t.top,l=e.right,c=e.bottom,h=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${o}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Pl(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||(this.popup.showPopover?.(),this.cleanup=Ld(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Id({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(zl({apply:({rects:i})=>{const r=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${i.reference.width}px`:"",this.popup.style.height=s?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;Wr&&!Pl(this.anchor)&&this.boundary==="scroll"&&(e=Ci(this.anchorEl).filter(i=>i instanceof Element)),this.flip&&t.push(Dd({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Od({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(zl({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(e0({element:this.arrowEl,padding:this.arrowPadding}));const n=Wr?i=>Zr.getOffsetParent(i,t0):Zr.getOffsetParent;zd(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:Wr?"absolute":"fixed",platform:{...Zr,getOffsetParent:n}}).then(({x:i,y:r,middlewareData:s,placement:o})=>{const l=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${i}px`,top:`${r}px`}),this.arrow){const h=s.arrow.x,u=s.arrow.y;let p="",g="",b="",w="";if(this.arrowPlacement==="start"){const k=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",g=l?k:"",w=l?"":k}else if(this.arrowPlacement==="end"){const k=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";g=l?"":k,w=l?k:"",b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(w=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(w=typeof h=="number"?`${h}px`:"",p=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:p,right:g,bottom:b,left:w,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new yd)}render(){return f`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${H({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${H({popup:!0,"popup-active":this.active,"popup-fixed":!Wr,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?f`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};oe.css=i0;a([A(".popup")],oe.prototype,"popup",2);a([A(".arrow")],oe.prototype,"arrowEl",2);a([d()],oe.prototype,"anchor",2);a([d({type:Boolean,reflect:!0})],oe.prototype,"active",2);a([d({reflect:!0})],oe.prototype,"placement",2);a([d()],oe.prototype,"boundary",2);a([d({type:Number})],oe.prototype,"distance",2);a([d({type:Number})],oe.prototype,"skidding",2);a([d({type:Boolean})],oe.prototype,"arrow",2);a([d({attribute:"arrow-placement"})],oe.prototype,"arrowPlacement",2);a([d({attribute:"arrow-padding",type:Number})],oe.prototype,"arrowPadding",2);a([d({type:Boolean})],oe.prototype,"flip",2);a([d({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],oe.prototype,"flipFallbackPlacements",2);a([d({attribute:"flip-fallback-strategy"})],oe.prototype,"flipFallbackStrategy",2);a([d({type:Object})],oe.prototype,"flipBoundary",2);a([d({attribute:"flip-padding",type:Number})],oe.prototype,"flipPadding",2);a([d({type:Boolean})],oe.prototype,"shift",2);a([d({type:Object})],oe.prototype,"shiftBoundary",2);a([d({attribute:"shift-padding",type:Number})],oe.prototype,"shiftPadding",2);a([d({attribute:"auto-size"})],oe.prototype,"autoSize",2);a([d()],oe.prototype,"sync",2);a([d({type:Object})],oe.prototype,"autoSizeBoundary",2);a([d({attribute:"auto-size-padding",type:Number})],oe.prototype,"autoSizePadding",2);a([d({attribute:"hover-bridge",type:Boolean})],oe.prototype,"hoverBridge",2);oe=a([C("wa-popup")],oe);var r0=`:host {
  --divider-width: 0.125rem;
  --handle-size: 2.5rem;

  display: block;
  position: relative;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}

.before,
.after {
  display: block;

  &::slotted(img),
  &::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  &::slotted(:not(img, svg)) {
    isolation: isolate;
  }
}

.after {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

/* Disable pointer-events while dragging. This is especially important for iframes. */
:host(:state(dragging)) {
  .before,
  .after {
    pointer-events: none;
  }
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: var(--divider-width);
  height: 100%;
  background-color: var(--wa-color-surface-default);
  translate: calc(var(--divider-width) / -2);
  cursor: ew-resize;
}

.handle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc(50% - (var(--handle-size) / 2));
  width: var(--handle-size);
  height: var(--handle-size);
  background-color: var(--wa-color-surface-default);
  border-radius: var(--wa-border-radius-circle);
  font-size: calc(var(--handle-size) * 0.4);
  color: var(--wa-color-neutral-on-quiet);
  cursor: inherit;
  z-index: 10;
}

.handle:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}
`,$i=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.position=50}handleDrag(t){const{width:e}=this.getBoundingClientRect(),n=this.localize.dir()==="rtl";t.preventDefault(),hr(this,{onMove:i=>{this.customStates.set("dragging",!0),this.position=parseFloat(Y(i/e*100,0,100).toFixed(2)),n&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:t})}handleKeyDown(t){const e=this.matches(":dir(ltr)"),n=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const i=t.shiftKey?10:1;let r=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||n&&t.key==="ArrowRight")&&(r-=i),(e&&t.key==="ArrowRight"||n&&t.key==="ArrowLeft")&&(r+=i),t.key==="Home"&&(r=0),t.key==="End"&&(r=100),r=Y(r,0,100),this.position=r}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return f`
      <div id="comparison" class="image" part="base">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${ut({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${ut({left:t?`${100-this.position}%`:`${this.position}%`})}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <div
          part="handle"
          class="handle"
          role="scrollbar"
          aria-valuenow=${this.position}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-controls="comparison"
          tabindex="0"
        >
          <slot name="handle">
            <wa-icon library="system" name="grip-vertical" variant="solid"></wa-icon>
          </slot>
        </div>
      </div>
    `}};$i.css=r0;a([A(".handle")],$i.prototype,"handle",2);a([d({type:Number,reflect:!0})],$i.prototype,"position",2);a([L("position",{waitUntilFirstUpdate:!0})],$i.prototype,"handlePositionChange",1);$i=a([C("wa-comparison")],$i);var s0=class extends Event{constructor(t){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},o0=`:host {
  display: inline-block;
  color: var(--wa-color-neutral-on-quiet);
}

.button {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: var(--wa-form-control-border-radius);
  color: inherit;
  font-size: inherit;
  padding: 0.5em;
  cursor: pointer;
  transition: color var(--wa-transition-fast) var(--wa-transition-easing);
}

@media (hover: hover) {
  .button:hover:not([disabled]) {
    background-color: var(--wa-color-neutral-fill-quiet);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }
}

.button:focus-visible:not([disabled]) {
  background-color: var(--wa-color-neutral-fill-quiet);
  color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
}

.button:active:not([disabled]) {
  color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
}

slot[name='success-icon'] {
  color: var(--wa-color-success-on-quiet);
}

slot[name='error-icon'] {
  color: var(--wa-color-danger-on-quiet);
}

.button:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

.button[disabled] {
  opacity: 0.5;
  cursor: not-allowed !important;
}

slot {
  display: inline-flex;
}

.show {
  animation: show 100ms ease;
}

.hide {
  animation: show 100ms ease reverse;
}

@keyframes show {
  from {
    scale: 0.25;
    opacity: 0.25;
  }
  to {
    scale: 1;
    opacity: 1;
  }
}
`,Ue=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),n=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let r=this.from,s="";n?[r,s]=this.from.trim().split("."):i&&([r,s]=this.from.trim().replace(/\]$/,"").split("["));const o="getElementById"in e?e.getElementById(r):null;o?i?t=o.getAttribute(s)||"":n?t=o[s]||"":t=o.textContent||"":(this.showStatus("error"),this.dispatchEvent(new pi))}if(!t)this.showStatus("error"),this.dispatchEvent(new pi);else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.dispatchEvent(new s0({value:t}))}catch{this.showStatus("error"),this.dispatchEvent(new pi)}}async showStatus(t){const e=t==="success"?this.successIcon:this.errorIcon;await he(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=t,e.hidden=!1,await he(e,"show"),setTimeout(async()=>{await he(e,"hide"),e.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await he(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return f`
      <button
        class="button"
        part="button"
        type="button"
        id="copy-button"
        ?disabled=${this.disabled}
        @click=${this.handleCopy}
      >
        <!-- Render a visually hidden label to appease the accessibility checking gods -->
        <span class="wa-visually-hidden">${this.currentLabel}</span>
        <slot part="copy-icon" name="copy-icon">
          <wa-icon library="system" name="copy" variant="regular"></wa-icon>
        </slot>
        <slot part="success-icon" name="success-icon" variant="solid" hidden>
          <wa-icon library="system" name="check"></wa-icon>
        </slot>
        <slot part="error-icon" name="error-icon" variant="solid" hidden>
          <wa-icon library="system" name="xmark"></wa-icon>
        </slot>
        <wa-tooltip
          class=${H({"copy-button":!0,"copy-button-success":this.status==="success","copy-button-error":this.status==="error"})}
          for="copy-button"
          placement=${this.tooltipPlacement}
          ?disabled=${this.disabled}
          exportparts="
            base:tooltip__base,
            base__popup:tooltip__base__popup,
            base__arrow:tooltip__base__arrow,
            body:tooltip__body
          "
          >${this.currentLabel}</wa-tooltip
        >
      </button>
    `}};Ue.css=[gd,o0];a([A('slot[name="copy-icon"]')],Ue.prototype,"copyIcon",2);a([A('slot[name="success-icon"]')],Ue.prototype,"successIcon",2);a([A('slot[name="error-icon"]')],Ue.prototype,"errorIcon",2);a([A("wa-tooltip")],Ue.prototype,"tooltip",2);a([$()],Ue.prototype,"isCopying",2);a([$()],Ue.prototype,"status",2);a([d()],Ue.prototype,"value",2);a([d()],Ue.prototype,"from",2);a([d({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);a([d({attribute:"copy-label"})],Ue.prototype,"copyLabel",2);a([d({attribute:"success-label"})],Ue.prototype,"successLabel",2);a([d({attribute:"error-label"})],Ue.prototype,"errorLabel",2);a([d({attribute:"feedback-duration",type:Number})],Ue.prototype,"feedbackDuration",2);a([d({attribute:"tooltip-placement"})],Ue.prototype,"tooltipPlacement",2);Ue=a([C("wa-copy-button")],Ue);var Jn=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},Qn=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},ei=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}},ti=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var a0=`:host {
  --max-width: 30ch;

  /** These styles are added so we don't interfere in the DOM. */
  display: inline-block;
  position: absolute;

  /** Defaults for inherited CSS properties */
  color: var(--wa-tooltip-content-color);
  font-size: var(--wa-tooltip-font-size);
  line-height: var(--wa-tooltip-line-height);
  text-align: start;
  white-space: normal;
}

.tooltip {
  --arrow-size: var(--wa-tooltip-arrow-size);
  --arrow-color: var(--wa-tooltip-background-color);
}

.tooltip::part(popup) {
  z-index: 1000;
}

.tooltip[placement^='top']::part(popup) {
  transform-origin: bottom;
}

.tooltip[placement^='bottom']::part(popup) {
  transform-origin: top;
}

.tooltip[placement^='left']::part(popup) {
  transform-origin: right;
}

.tooltip[placement^='right']::part(popup) {
  transform-origin: left;
}

.body {
  display: block;
  width: max-content;
  max-width: var(--max-width);
  border-radius: var(--wa-tooltip-border-radius);
  background-color: var(--wa-tooltip-background-color);
  border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
  padding: 0.25em 0.5em;
  user-select: none;
  -webkit-user-select: none;
}

.tooltip::part(arrow) {
  border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
  border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
}
`,ve=class extends M{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),this.hideDelay))}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=Ns("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){const i=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);i.includes(e)||(i.push(e),t.setAttribute("aria-labelledby",i.join(" ")))}removeFromAriaLabelledBy(t,e){const r=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(s=>s!==e);r.length>0?t.setAttribute("aria-labelledby",r.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const t=new ti;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),this.body.hidden=!1,this.popup.active=!0,await he(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Qn)}else{const t=new ei;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),await he(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Jn)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,n=this.anchor;if(e===n)return;const{signal:i}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:i}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:i}),e.addEventListener("click",this.handleClick,{signal:i}),e.addEventListener("mouseover",this.handleMouseOver,{signal:i}),e.addEventListener("mouseout",this.handleMouseOut,{signal:i})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener("blur",this.handleBlur,{capture:!0}),n.removeEventListener("focus",this.handleFocus,{capture:!0}),n.removeEventListener("click",this.handleClick),n.removeEventListener("mouseover",this.handleMouseOver),n.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Lt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Lt(this,"wa-after-hide")}render(){return f`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${H({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};ve.css=a0;ve.dependencies={"wa-popup":oe};a([A("slot:not([name])")],ve.prototype,"defaultSlot",2);a([A(".body")],ve.prototype,"body",2);a([A("wa-popup")],ve.prototype,"popup",2);a([d()],ve.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);a([d({type:Number})],ve.prototype,"distance",2);a([d({type:Boolean,reflect:!0})],ve.prototype,"open",2);a([d({type:Number})],ve.prototype,"skidding",2);a([d({attribute:"show-delay",type:Number})],ve.prototype,"showDelay",2);a([d({attribute:"hide-delay",type:Number})],ve.prototype,"hideDelay",2);a([d()],ve.prototype,"trigger",2);a([d({attribute:"without-arrow",type:Boolean,reflect:!0})],ve.prototype,"withoutArrow",2);a([d()],ve.prototype,"for",2);a([$()],ve.prototype,"anchor",2);a([L("open",{waitUntilFirstUpdate:!0})],ve.prototype,"handleOpenChange",1);a([L("for")],ve.prototype,"handleForChange",1);a([L(["distance","placement","skidding"])],ve.prototype,"handleOptionsChange",1);a([L("disabled")],ve.prototype,"handleDisabledChange",1);ve=a([C("wa-tooltip")],ve);var l0=`:host {
  --spacing: var(--wa-space-m);
  --show-duration: 200ms;
  --hide-duration: 200ms;

  display: block;
}

details {
  display: block;
  overflow-anchor: none;
  border: var(--wa-panel-border-width) var(--wa-color-surface-border) var(--wa-panel-border-style);
  background-color: var(--wa-color-surface-default);
  border-radius: var(--wa-panel-border-radius);
  color: var(--wa-color-text-normal);

  /* Print styles */
  @media print {
    background: none;
    border: solid var(--wa-border-width-s) var(--wa-color-surface-border);

    summary {
      list-style: none;
    }
  }
}

/* Appearance modifiers */
:host([appearance='plain']) details {
  background-color: transparent;
  border-color: transparent;
  border-radius: 0;
}

:host([appearance='outlined']) details {
  background-color: var(--wa-color-surface-default);
  border-color: var(--wa-color-surface-border);
}

:host([appearance='filled']) details {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: transparent;
}

:host([appearance='filled-outlined']) details {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-color-neutral-border-quiet);
}

:host([disabled]) details {
  opacity: 0.5;
  cursor: not-allowed;
}

summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing);
  padding: var(--spacing); /* Add padding here */
  border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;

  &::marker,
  &::-webkit-details-marker {
    display: none;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset));
  }
}

:host([open]) summary {
  border-end-start-radius: 0;
  border-end-end-radius: 0;
}

/* 'Start' icon placement */
:host([icon-placement='start']) summary {
  flex-direction: row-reverse;
  justify-content: start;
}

[part~='icon'] {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  color: var(--wa-color-text-quiet);
  transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
}

:host([open]) [part~='icon'] {
  rotate: 90deg;
}

:host([open]:dir(rtl)) [part~='icon'] {
  rotate: -90deg;
}

:host([open]) slot[name='expand-icon'],
:host(:not([open])) slot[name='collapse-icon'] {
  display: none;
}

.body.animating {
  overflow: hidden;
}

.content {
  display: block;
  padding-block-start: var(--spacing);
  padding-inline: var(--spacing); /* Add horizontal padding */
  padding-block-end: var(--spacing); /* Add bottom padding */
}
`,Ke=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(t){t.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(t){t.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;const r=i.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(r)?!0:i instanceof fe?!("disabled"in i)||!i.disabled:!1})||(t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(n=>{n!==this&&n.open&&(n.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const t=new ti;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const e=fs(getComputedStyle(this.body).getPropertyValue("--show-duration"));await ps(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new Qn)}else{const t=new ei;if(this.dispatchEvent(t),t.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const e=fs(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await ps(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new Jn)}}async show(){if(!(this.open||this.disabled))return this.open=!0,Lt(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Lt(this,"wa-after-hide")}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return f`
      <details part="base">
        <summary
          part="header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary">${this.summary}</slot>

          <span part="icon">
            <slot name="expand-icon">
              <wa-icon library="system" variant="solid" name=${t?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${t?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
          </span>
        </summary>

        <div
          class=${H({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};Ke.css=l0;a([A("details")],Ke.prototype,"details",2);a([A("summary")],Ke.prototype,"header",2);a([A(".body")],Ke.prototype,"body",2);a([A(".expand-icon-slot")],Ke.prototype,"expandIconSlot",2);a([$()],Ke.prototype,"isAnimating",2);a([d({type:Boolean,reflect:!0})],Ke.prototype,"open",2);a([d()],Ke.prototype,"summary",2);a([d({reflect:!0})],Ke.prototype,"name",2);a([d({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);a([d({reflect:!0})],Ke.prototype,"appearance",2);a([d({attribute:"icon-placement",reflect:!0})],Ke.prototype,"iconPlacement",2);a([L("open",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleOpenChange",1);Ke=a([C("wa-details")],Ke);function c0(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Go=new Set;function d0(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function h0(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function ws(t){if(Go.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){const e=d0()+h0();let n=getComputedStyle(document.documentElement).scrollbarGutter;(!n||n==="auto")&&(n="stable"),e<2&&(n=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",n),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${e}px`)}}function vs(t){Go.delete(t),Go.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function Ko(t,e,n="vertical",i="smooth"){const r=c0(t,e),s=r.top+e.scrollTop,o=r.left+e.scrollLeft,l=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,h=e.scrollTop,u=e.scrollTop+e.offsetHeight;(n==="horizontal"||n==="both")&&(o<l?e.scrollTo({left:o,behavior:i}):o+t.clientWidth>c&&e.scrollTo({left:o-e.offsetWidth+t.clientWidth,behavior:i})),(n==="vertical"||n==="both")&&(s<h?e.scrollTo({top:s,behavior:i}):s+t.clientHeight>u&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:i}))}function Pa(t){return t.split(" ").map(e=>e.trim()).filter(e=>e!=="")}var u0=`:host {
  --width: 31rem;
  --spacing: var(--wa-space-l);
  --show-duration: 200ms;
  --hide-duration: 200ms;

  display: none;
}

:host([open]) {
  display: block;
}

.dialog {
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--width);
  max-width: calc(100% - var(--wa-space-2xl));
  max-height: calc(100% - var(--wa-space-2xl));
  background-color: var(--wa-color-surface-raised);
  border-radius: var(--wa-panel-border-radius);
  border: none;
  box-shadow: var(--wa-shadow-l);
  padding: 0;
  margin: auto;

  &.show {
    animation: show-dialog var(--show-duration) ease;

    &::backdrop {
      animation: show-backdrop var(--show-duration, 200ms) ease;
    }
  }

  &.hide {
    animation: show-dialog var(--hide-duration) ease reverse;

    &::backdrop {
      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
    }
  }

  &.pulse {
    animation: pulse 250ms ease;
  }
}

.dialog:focus {
  outline: none;
}

/* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
@media screen and (max-width: 420px) {
  .dialog {
    max-height: 80vh;
  }
}

.open {
  display: flex;
  opacity: 1;
}

.header {
  flex: 0 0 auto;
  display: flex;
  flex-wrap: nowrap;

  padding-inline-start: var(--spacing);
  padding-block-end: 0;

  /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
  padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
  padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
}

.title {
  align-self: center;
  flex: 1 1 auto;
  font-family: inherit;
  font-size: var(--wa-font-size-l);
  font-weight: var(--wa-font-weight-heading);
  line-height: var(--wa-line-height-condensed);
  margin: 0;
}

.header-actions {
  align-self: start;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: end;
  gap: var(--wa-space-2xs);
  padding-inline-start: var(--spacing);
}

.header-actions wa-button,
.header-actions ::slotted(wa-button) {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.body {
  flex: 1 1 auto;
  display: block;
  padding: var(--spacing);
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
}

.footer {
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: var(--wa-space-xs);
  justify-content: end;
  padding: var(--spacing);
  padding-block-start: 0;
}

.footer ::slotted(wa-button:not(:first-of-type)) {
  margin-inline-start: var(--wa-spacing-xs);
}

.dialog::backdrop {
  /*
    NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
    remove the fallback values here.
  */
  background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
}

@keyframes pulse {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.02;
  }
  100% {
    scale: 1;
  }
}

@keyframes show-dialog {
  from {
    opacity: 0;
    scale: 0.8;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

@keyframes show-backdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (forced-colors: active) {
  .dialog {
    border: solid 1px white;
  }
}
`,sn=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.hasSlotController=new xt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),ws(this))}disconnectedCallback(){super.disconnectedCallback(),vs(this),this.removeOpenListeners()}async requestClose(t){const e=new ei({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,he(this.dialog,"pulse");return}this.removeOpenListeners(),await he(this.dialog,"hide"),this.open=!1,this.dialog.close(),vs(this);const n=this.originalTrigger;typeof n?.focus=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new Jn)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(t){t.preventDefault(),!this.dialog.classList.contains("hide")&&t.target===this.dialog&&this.requestClose(this.dialog)}handleDialogClick(t){const n=t.target.closest('[data-dialog="close"]');n&&(t.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await he(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const t=new ti;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),ws(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await he(this.dialog,"show"),this.dispatchEvent(new Qn)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return f`
      <dialog
        part="dialog"
        class=${H({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?f`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"​"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${n=>this.requestClose(n.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${e?f`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};sn.css=u0;a([A(".dialog")],sn.prototype,"dialog",2);a([d({type:Boolean,reflect:!0})],sn.prototype,"open",2);a([d({reflect:!0})],sn.prototype,"label",2);a([d({attribute:"without-header",type:Boolean,reflect:!0})],sn.prototype,"withoutHeader",2);a([d({attribute:"light-dismiss",type:Boolean})],sn.prototype,"lightDismiss",2);a([L("open",{waitUntilFirstUpdate:!0})],sn.prototype,"handleOpenChange",1);sn=a([C("wa-dialog")],sn);document.addEventListener("click",t=>{const e=t.target.closest("[data-dialog]");if(e instanceof Element){const[n,i]=Pa(e.getAttribute("data-dialog")||"");if(n==="open"&&i?.length){const s=e.getRootNode().getElementById(i);s?.localName==="wa-dialog"?s.open=!0:console.warn(`A dialog with an ID of "${i}" could not be found in this document.`)}}});document.addEventListener("pointerdown",()=>{});var p0=`:host {
  --color: var(--wa-color-surface-border);
  --width: var(--wa-border-width-s);
  --spacing: var(--wa-space-m);
}

:host(:not([orientation='vertical'])) {
  display: block;
  border-top: solid var(--width) var(--color);
  margin: var(--spacing) 0;
}

:host([orientation='vertical']) {
  display: inline-block;
  height: 100%;
  border-inline-start: solid var(--width) var(--color);
  margin: 0 var(--spacing);
  min-block-size: 1lh;
}
`,mr=class extends M{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};mr.css=p0;a([d({reflect:!0})],mr.prototype,"orientation",2);a([L("orientation")],mr.prototype,"handleVerticalChange",1);mr=a([C("wa-divider")],mr);var f0=`:host {
  --size: 25rem;
  --spacing: var(--wa-space-l);
  --show-duration: 200ms;
  --hide-duration: 200ms;

  display: none;
}

:host([open]) {
  display: block;
}

.drawer {
  display: flex;
  flex-direction: column;
  top: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  background-color: var(--wa-color-surface-raised);
  border: none;
  box-shadow: var(--wa-shadow-l);
  overflow: auto;
  padding: 0;
  margin: 0;
  animation-duration: var(--show-duration);
  animation-timing-function: ease;

  &.show::backdrop {
    animation: show-backdrop var(--show-duration, 200ms) ease;
  }

  &.hide::backdrop {
    animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
  }

  &.show.top {
    animation: show-drawer-from-top var(--show-duration) ease;
  }

  &.hide.top {
    animation: show-drawer-from-top var(--hide-duration) ease reverse;
  }

  &.show.end {
    animation: show-drawer-from-end var(--show-duration) ease;

    &:dir(rtl) {
      animation-name: show-drawer-from-start;
    }
  }

  &.hide.end {
    animation: show-drawer-from-end var(--hide-duration) ease reverse;

    &:dir(rtl) {
      animation-name: show-drawer-from-start;
    }
  }

  &.show.bottom {
    animation: show-drawer-from-bottom var(--show-duration) ease;
  }

  &.hide.bottom {
    animation: show-drawer-from-bottom var(--hide-duration) ease reverse;
  }

  &.show.start {
    animation: show-drawer-from-start var(--show-duration) ease;

    &:dir(rtl) {
      animation-name: show-drawer-from-end;
    }
  }

  &.hide.start {
    animation: show-drawer-from-start var(--hide-duration) ease reverse;

    &:dir(rtl) {
      animation-name: show-drawer-from-end;
    }
  }

  &.pulse {
    animation: pulse 250ms ease;
  }
}

.drawer:focus {
  outline: none;
}

.top {
  top: 0;
  inset-inline-end: auto;
  bottom: auto;
  inset-inline-start: 0;
  width: 100%;
  height: var(--size);
}

.end {
  top: 0;
  inset-inline-end: 0;
  bottom: auto;
  inset-inline-start: auto;
  width: var(--size);
  height: 100%;
}

.bottom {
  top: auto;
  inset-inline-end: auto;
  bottom: 0;
  inset-inline-start: 0;
  width: 100%;
  height: var(--size);
}

.start {
  top: 0;
  inset-inline-end: auto;
  bottom: auto;
  inset-inline-start: 0;
  width: var(--size);
  height: 100%;
}

.header {
  display: flex;
  flex-wrap: nowrap;
  padding-inline-start: var(--spacing);
  padding-block-end: 0;

  /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
  padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
  padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
}

.title {
  align-self: center;
  flex: 1 1 auto;
  font: inherit;
  font-size: var(--wa-font-size-l);
  font-weight: var(--wa-font-weight-heading);
  line-height: var(--wa-line-height-condensed);
  margin: 0;
}

.header-actions {
  align-self: start;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: end;
  gap: var(--wa-space-2xs);
  padding-inline-start: var(--spacing);
}

.header-actions wa-button,
.header-actions ::slotted(wa-button) {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.body {
  flex: 1 1 auto;
  display: block;
  padding: var(--spacing);
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
}

.footer {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wa-space-xs);
  justify-content: end;
  padding: var(--spacing);
  padding-block-start: 0;
}

.footer ::slotted(wa-button:not(:last-of-type)) {
  margin-inline-end: var(--wa-spacing-xs);
}

.drawer::backdrop {
  /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
  background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
}

@keyframes pulse {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.01;
  }
  100% {
    scale: 1;
  }
}

@keyframes show-drawer {
  from {
    opacity: 0;
    scale: 0.8;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

@keyframes show-drawer-from-top {
  from {
    opacity: 0;
    translate: 0 -100%;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes show-drawer-from-end {
  from {
    opacity: 0;
    translate: 100%;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes show-drawer-from-bottom {
  from {
    opacity: 0;
    translate: 0 100%;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes show-drawer-from-start {
  from {
    opacity: 0;
    translate: -100% 0;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes show-backdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (forced-colors: active) {
  .drawer {
    border: solid 1px white;
  }
}
`,Vt=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.hasSlotController=new xt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),ws(this))}disconnectedCallback(){super.disconnectedCallback(),vs(this),this.removeOpenListeners()}async requestClose(t){const e=new ei({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,he(this.drawer,"pulse");return}this.removeOpenListeners(),await he(this.drawer,"hide"),this.open=!1,this.drawer.close(),vs(this);const n=this.originalTrigger;typeof n?.focus=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new Jn)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(t){t.preventDefault(),!this.drawer.classList.contains("hide")&&t.target===this.drawer&&this.requestClose(this.drawer)}handleDialogClick(t){const n=t.target.closest('[data-drawer="close"]');n&&(t.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(t){t.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await he(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const t=new ti;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),ws(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.drawer.focus()}),await he(this.drawer,"show"),this.dispatchEvent(new Qn)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return f`
      <dialog
        part="dialog"
        class=${H({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?f`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"​"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${n=>this.requestClose(n.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${e?f`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};Vt.css=f0;a([A(".drawer")],Vt.prototype,"drawer",2);a([d({type:Boolean,reflect:!0})],Vt.prototype,"open",2);a([d({reflect:!0})],Vt.prototype,"label",2);a([d({reflect:!0})],Vt.prototype,"placement",2);a([d({attribute:"without-header",type:Boolean,reflect:!0})],Vt.prototype,"withoutHeader",2);a([d({attribute:"light-dismiss",type:Boolean})],Vt.prototype,"lightDismiss",2);a([L("open",{waitUntilFirstUpdate:!0})],Vt.prototype,"handleOpenChange",1);Vt=a([C("wa-drawer")],Vt);document.addEventListener("click",t=>{const e=t.target.closest("[data-drawer]");if(e instanceof Element){const[n,i]=Pa(e.getAttribute("data-drawer")||"");if(n==="open"&&i?.length){const s=e.getRootNode().getElementById(i);s?.localName==="wa-drawer"?s.open=!0:console.warn(`A drawer with an ID of "${i}" could not be found in this document.`)}}});document.body.addEventListener("pointerdown",()=>{});var m0=class extends Event{constructor(t){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};function*Pd(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Pd(t.shadowRoot.activeElement)))}var g0=`:host {
  --show-duration: 50ms;
  --hide-duration: 50ms;
  display: contents;
}

#menu {
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 0;
  padding: 0.25em;
  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
  border-radius: var(--wa-border-radius-m);
  background-color: var(--wa-color-surface-raised);
  box-shadow: var(--wa-shadow-m);
  color: var(--wa-color-text-normal);
  text-align: start;
  user-select: none;
  overflow: auto;
  max-width: var(--auto-size-available-width) !important;
  max-height: var(--auto-size-available-height) !important;

  &.show {
    animation: show var(--show-duration) ease;
  }

  &.hide {
    animation: show var(--hide-duration) ease reverse;
  }

  ::slotted(h1),
  ::slotted(h2),
  ::slotted(h3),
  ::slotted(h4),
  ::slotted(h5),
  ::slotted(h6) {
    display: block !important;
    margin: 0.25em 0 !important;
    padding: 0.25em 0.75em !important;
    color: var(--wa-color-text-quiet) !important;
    font-family: var(--wa-font-family-body) !important;
    font-weight: var(--wa-font-weight-semibold) !important;
    font-size: var(--wa-font-size-smaller) !important;
  }

  ::slotted(wa-divider) {
    --spacing: 0.25em; /* Component-specific, left as-is */
  }
}

wa-popup[data-current-placement^='top'] #menu {
  transform-origin: bottom;
}

wa-popup[data-current-placement^='bottom'] #menu {
  transform-origin: top;
}

wa-popup[data-current-placement^='left'] #menu {
  transform-origin: right;
}

wa-popup[data-current-placement^='right'] #menu {
  transform-origin: left;
}

wa-popup[data-current-placement='left-start'] #menu {
  transform-origin: right top;
}

wa-popup[data-current-placement='left-end'] #menu {
  transform-origin: right bottom;
}

wa-popup[data-current-placement='right-start'] #menu {
  transform-origin: left top;
}

wa-popup[data-current-placement='right-end'] #menu {
  transform-origin: left bottom;
}

@keyframes show {
  from {
    scale: 0.9;
    opacity: 0;
  }
  to {
    scale: 1;
    opacity: 1;
  }
}
`,xo=new Set,tt=class extends M{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new te(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async t=>{const e=this.localize.dir()==="rtl";if(t.key==="Escape"){const u=this.getTrigger();t.preventDefault(),t.stopPropagation(),this.open=!1,u?.focus();return}const n=[...Pd()].find(u=>u.localName==="wa-dropdown-item"),i=n?.localName==="wa-dropdown-item",r=this.getCurrentSubmenuItem(),s=!!r;let o,l,c;s?(o=this.getSubmenuItems(r),l=o.find(u=>u.active||u===n),c=l?o.indexOf(l):-1):(o=this.getItems(),l=o.find(u=>u.active||u===n),c=l?o.indexOf(l):-1);let h;if(t.key==="ArrowUp"&&(t.preventDefault(),t.stopPropagation(),c>0?h=o[c-1]:h=o[o.length-1]),t.key==="ArrowDown"&&(t.preventDefault(),t.stopPropagation(),c!==-1&&c<o.length-1?h=o[c+1]:h=o[0]),t.key===(e?"ArrowLeft":"ArrowRight")&&i&&l&&l.hasSubmenu){t.preventDefault(),t.stopPropagation(),l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((p,g)=>p.active=g===0),u[0].focus())},0);return}if(t.key===(e?"ArrowRight":"ArrowLeft")&&s){t.preventDefault(),t.stopPropagation();const u=this.removeFromSubmenuStack();u&&(u.submenuOpen=!1,setTimeout(()=>{u.focus(),u.active=!0,(u.slot==="submenu"?this.getSubmenuItems(u.parentElement):this.getItems()).forEach(g=>{g!==u&&(g.active=!1)})},0));return}if((t.key==="Home"||t.key==="End")&&(t.preventDefault(),t.stopPropagation(),h=t.key==="Home"?o[0]:o[o.length-1]),t.key==="Tab"&&await this.hideMenu(),t.key.length===1&&!(t.metaKey||t.ctrlKey||t.altKey)&&!(t.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=t.key,o.some(u=>{const p=(u.textContent||"").trim().toLowerCase(),g=this.userTypedQuery.trim().toLowerCase();return p.startsWith(g)?(h=u,!0):!1})),h){t.preventDefault(),t.stopPropagation(),o.forEach(u=>u.active=u===h),h.focus();return}(t.key==="Enter"||t.key===" "&&this.userTypedQuery==="")&&i&&l&&(t.preventDefault(),t.stopPropagation(),l.hasSubmenu?(l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((p,g)=>p.active=g===0),u[0].focus())},0)):this.makeSelection(l))},this.handleDocumentPointerDown=t=>{t.composedPath().some(i=>i instanceof HTMLElement?i===this||i.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=t=>{const e=this.getCurrentSubmenuItem();if(!e?.submenuOpen||!e.submenuElement)return;const n=e.submenuElement.getBoundingClientRect(),i=this.localize.dir()==="rtl",r=i?n.right:n.left,s=i?Math.max(t.clientX,r):Math.min(t.clientX,r),o=Math.max(n.top,Math.min(t.clientY,n.bottom));e.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${s}px`),e.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${o}px`);const l=e.matches(":hover"),c=e.submenuElement?.matches(":hover")||!!t.composedPath().find(h=>h instanceof HTMLElement&&h.closest('[part="submenu"]')===e.submenuElement);!l&&!c&&setTimeout(()=>{!e.matches(":hover")&&!e.submenuElement?.matches(":hover")&&(e.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(t=>t()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove)}firstUpdated(){this.syncAriaAttributes()}async updated(t){t.has("open")&&(this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())),t.has("size")&&this.syncItemSizes()}getItems(t=!1){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(n=>n.localName==="wa-dropdown-item");return t?e:e.filter(n=>!n.disabled)}getSubmenuItems(t,e=!1){const n=t.shadowRoot?.querySelector('slot[name="submenu"]')||t.querySelector('slot[name="submenu"]');if(!n)return[];const i=n.assignedElements({flatten:!0}).filter(r=>r.localName==="wa-dropdown-item");return e?i:i.filter(r=>!r.disabled)}syncItemSizes(){this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.localName==="wa-dropdown-item").forEach(e=>e.size=this.size)}addToSubmenuStack(t){const e=this.openSubmenuStack.indexOf(t);e!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,e+1):this.openSubmenuStack.push(t)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(t){const e=t.closest('wa-dropdown-item:not([slot="submenu"])');let n;e?n=this.getSubmenuItems(e,!0):n=this.getItems(!0),n.forEach(i=>{i!==t&&i.submenuOpen&&(i.submenuOpen=!1)}),this.openSubmenuStack.includes(t)||this.openSubmenuStack.push(t)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger())return;const e=new ti;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}xo.forEach(i=>i.open=!1),this.popup.active=!0,this.open=!0,xo.add(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await he(this.menu,"show");const n=this.getItems();n.length>0&&(n.forEach((i,r)=>i.active=r===0),n[0].focus()),this.dispatchEvent(new Qn)}async hideMenu(){const t=new ei({source:this});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}this.open=!1,xo.delete(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await he(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new Jn)}handleMenuClick(t){const e=t.target.closest("wa-dropdown-item");if(!(!e||e.disabled)){if(e.hasSubmenu){e.submenuOpen||(this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),e.submenuOpen=!0),t.stopPropagation();return}this.makeSelection(e)}}async handleMenuSlotChange(){const t=this.getItems(!0);await Promise.all(t.map(i=>i.updateComplete)),this.syncItemSizes();const e=t.some(i=>i.type==="checkbox"),n=t.some(i=>i.hasSubmenu);t.forEach((i,r)=>{i.active=r===0,i.checkboxAdjacent=e,i.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(t){const e=t.detail.item;this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),this.setupSubmenuPosition(e),this.processSubmenuItems(e)}setupSubmenuPosition(t){if(!t.submenuElement)return;this.cleanupSubmenuPosition(t);const e=Ld(t,t.submenuElement,()=>{this.positionSubmenu(t),this.updateSafeTriangleCoordinates(t)});this.submenuCleanups.set(t,e);const n=t.submenuElement.querySelector('slot[name="submenu"]');n&&(n.removeEventListener("slotchange",tt.handleSubmenuSlotChange),n.addEventListener("slotchange",tt.handleSubmenuSlotChange),tt.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(t){const e=t.target;if(!e)return;const n=e.assignedElements().filter(s=>s.localName==="wa-dropdown-item");if(n.length===0)return;const i=n.some(s=>s.hasSubmenu),r=n.some(s=>s.type==="checkbox");n.forEach(s=>{s.submenuAdjacent=i,s.checkboxAdjacent=r})}processSubmenuItems(t){if(!t.submenuElement)return;const e=this.getSubmenuItems(t,!0),n=e.some(i=>i.hasSubmenu);e.forEach(i=>{i.submenuAdjacent=n})}cleanupSubmenuPosition(t){const e=this.submenuCleanups.get(t);e&&(e(),this.submenuCleanups.delete(t))}positionSubmenu(t){if(!t.submenuElement)return;const n=this.localize.dir()==="rtl"?"left-start":"right-start";zd(t,t.submenuElement,{placement:n,middleware:[Id({mainAxis:0,crossAxis:-5}),Dd({fallbackStrategy:"bestFit"}),Od({padding:8})]}).then(({x:i,y:r,placement:s})=>{t.submenuElement.setAttribute("data-placement",s),Object.assign(t.submenuElement.style,{left:`${i}px`,top:`${r}px`})})}updateSafeTriangleCoordinates(t){if(!t.submenuElement||!t.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){t.submenuElement.style.setProperty("--safe-triangle-visible","none");return}t.submenuElement.style.setProperty("--safe-triangle-visible","block");const n=t.submenuElement.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${i?n.right:n.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${n.top}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${i?n.right:n.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${n.bottom}px`)}makeSelection(t){const e=this.getTrigger();if(t.disabled)return;t.type==="checkbox"&&(t.checked=!t.checked);const n=new m0({item:t});this.dispatchEvent(n),n.defaultPrevented||(this.open=!1,e?.focus())}async syncAriaAttributes(){const t=this.getTrigger();let e;t&&(t.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await t.updateComplete,e=t.shadowRoot.querySelector('[part="base"]')):e=t,e.hasAttribute("id")||e.setAttribute("id",Ns("wa-dropdown-trigger-")),e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded",this.open?"true":"false"),this.menu.setAttribute("aria-expanded","false"))}render(){let t=this.hasUpdated?this.popup.active:this.open;return f`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${t}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `}};tt.css=[Ze,g0];a([A("slot:not([name])")],tt.prototype,"defaultSlot",2);a([A("#menu")],tt.prototype,"menu",2);a([A("wa-popup")],tt.prototype,"popup",2);a([d({type:Boolean,reflect:!0})],tt.prototype,"open",2);a([d({reflect:!0})],tt.prototype,"size",2);a([d({reflect:!0})],tt.prototype,"placement",2);a([d({type:Number})],tt.prototype,"distance",2);a([d({type:Number})],tt.prototype,"skidding",2);tt=a([C("wa-dropdown")],tt);var b0=`:host {
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: var(--wa-border-radius-s);
  isolation: isolate;
  color: var(--wa-color-text-normal);
  line-height: var(--wa-line-height-condensed);
  cursor: pointer;
  transition:
    100ms background-color ease,
    100ms color ease;
}

@media (hover: hover) {
  :host(:hover:not(:state(disabled))) {
    background-color: var(--wa-color-neutral-fill-normal);
  }
}

:host(:focus-visible) {
  z-index: 1;
  outline: var(--wa-focus-ring);
  background-color: var(--wa-color-neutral-fill-normal);
}

:host(:state(disabled)) {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Danger variant */
:host([variant='danger']),
:host([variant='danger']) #details {
  color: var(--wa-color-danger-on-quiet);
}

@media (hover: hover) {
  :host([variant='danger']:hover) {
    background-color: var(--wa-color-danger-fill-normal);
    color: var(--wa-color-danger-on-normal);
  }
}

:host([variant='danger']:focus-visible) {
  background-color: var(--wa-color-danger-fill-normal);
  color: var(--wa-color-danger-on-normal);
}

:host([checkbox-adjacent]) {
  padding-inline-start: 2em;
}

/* Only add padding when item actually has a submenu */
:host([submenu-adjacent]:not(:state(has-submenu))) #details {
  padding-inline-end: 0;
}

:host(:state(has-submenu)[submenu-adjacent]) #details {
  padding-inline-end: 1.75em;
}

#check {
  visibility: hidden;
  margin-inline-start: -1.5em;
  margin-inline-end: 0.5em;
  font-size: var(--wa-font-size-smaller);
}

:host(:state(checked)) #check {
  visibility: visible;
}

#icon ::slotted(*) {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin-inline-end: 0.75em !important;
  font-size: var(--wa-font-size-smaller);
}

#label {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#details {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: end;
  color: var(--wa-color-text-quiet);
  font-size: var(--wa-font-size-smaller) !important;
}

#details ::slotted(*) {
  margin-inline-start: 2em !important;
}

/* Submenu indicator icon */
#submenu-indicator {
  position: absolute;
  inset-inline-end: 1em;
  color: var(--wa-color-neutral-on-quiet);
  font-size: var(--wa-font-size-smaller);
}

/* Flip chevron icon when RTL */
:host(:dir(rtl)) #submenu-indicator {
  transform: scaleX(-1);
}

/* Submenu styles */
#submenu {
  display: flex;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  width: max-content;
  margin: 0;
  padding: 0.25em;
  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
  border-radius: var(--wa-border-radius-m);
  background-color: var(--wa-color-surface-raised);
  box-shadow: var(--wa-shadow-m);
  color: var(--wa-color-text-normal);
  text-align: start;
  user-select: none;

  /* Override default popover styles */
  &[popover] {
    margin: 0;
    inset: auto;
    padding: 0.25em;
    overflow: visible;
    border-radius: var(--wa-border-radius-m);
  }

  &.show {
    animation: submenu-show var(--show-duration, 50ms) ease;
  }

  &.hide {
    animation: submenu-show var(--show-duration, 50ms) ease reverse;
  }

  /* Submenu placement transform origins */
  &[data-placement^='top'] {
    transform-origin: bottom;
  }

  &[data-placement^='bottom'] {
    transform-origin: top;
  }

  &[data-placement^='left'] {
    transform-origin: right;
  }

  &[data-placement^='right'] {
    transform-origin: left;
  }

  &[data-placement='left-start'] {
    transform-origin: right top;
  }

  &[data-placement='left-end'] {
    transform-origin: right bottom;
  }

  &[data-placement='right-start'] {
    transform-origin: left top;
  }

  &[data-placement='right-end'] {
    transform-origin: left bottom;
  }

  /* Safe triangle styling */
  &::before {
    display: none;
    z-index: 9;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    content: '';
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
    pointer-events: auto; /* Enable mouse events on the triangle */
  }

  &[data-visible]::before {
    display: block;
  }
}

::slotted(wa-dropdown-item) {
  font-size: inherit;
}

::slotted(wa-divider) {
  --spacing: 0.25em;
}

@keyframes submenu-show {
  from {
    scale: 0.9;
    opacity: 0;
  }
  to {
    scale: 1;
    opacity: 1;
  }
}
`,Ye=class extends M{constructor(){super(...arguments),this.hasSlotController=new xt(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(t){t.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),t.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),t.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.notifyParentOfOpening(),this.submenuElement.showPopover(),this.submenuElement.hidden=!1,this.submenuElement.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await he(this.submenuElement,"show"),setTimeout(()=>{const t=this.getSubmenuItems();t.length>0&&(t.forEach((e,n)=>e.active=n===0),t[0].focus())},0))}notifyParentOfOpening(){const t=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(t);const e=this.parentElement;e&&[...e.children].filter(i=>i!==this&&i.localName==="wa-dropdown-item"&&i.getAttribute("slot")===this.getAttribute("slot")&&i.submenuOpen).forEach(i=>{i.submenuOpen=!1})}async closeSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),this.submenuElement.hidden||(await he(this.submenuElement,"hide"),this.submenuElement.hidden=!0,this.submenuElement.removeAttribute("data-visible"),this.submenuElement.hidePopover()))}getSubmenuItems(){return[...this.children].filter(t=>t.localName==="wa-dropdown-item"&&t.getAttribute("slot")==="submenu"&&!t.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return f`
      ${this.type==="checkbox"?f`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `:""}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu?f`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:""}
      ${this.hasSubmenu?f`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          `:""}
    `}};Ye.css=b0;a([A("#submenu")],Ye.prototype,"submenuElement",2);a([d({type:Boolean})],Ye.prototype,"active",2);a([d({reflect:!0})],Ye.prototype,"variant",2);a([d({reflect:!0})],Ye.prototype,"size",2);a([d({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],Ye.prototype,"checkboxAdjacent",2);a([d({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],Ye.prototype,"submenuAdjacent",2);a([d()],Ye.prototype,"value",2);a([d({reflect:!0})],Ye.prototype,"type",2);a([d({type:Boolean})],Ye.prototype,"checked",2);a([d({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],Ye.prototype,"submenuOpen",2);a([$()],Ye.prototype,"hasSubmenu",2);Ye=a([C("wa-dropdown-item")],Ye);var gr=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],n=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),n.length-1)),r=n[i]+this.unit,s=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:r,unitDisplay:this.display})}};a([d({type:Number})],gr.prototype,"value",2);a([d()],gr.prototype,"unit",2);a([d()],gr.prototype,"display",2);gr=a([C("wa-format-bytes")],gr);var it=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(t.getMilliseconds()))return;const n=this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e});return f`<time datetime=${t.toISOString()}>${n}</time>`}};a([d()],it.prototype,"date",2);a([d()],it.prototype,"weekday",2);a([d()],it.prototype,"era",2);a([d()],it.prototype,"year",2);a([d()],it.prototype,"month",2);a([d()],it.prototype,"day",2);a([d()],it.prototype,"hour",2);a([d()],it.prototype,"minute",2);a([d()],it.prototype,"second",2);a([d({attribute:"time-zone-name"})],it.prototype,"timeZoneName",2);a([d({attribute:"time-zone"})],it.prototype,"timeZone",2);a([d({attribute:"hour-format"})],it.prototype,"hourFormat",2);it=a([C("wa-format-date")],it);var Ct=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};a([d({type:Number})],Ct.prototype,"value",2);a([d()],Ct.prototype,"type",2);a([d({attribute:"without-grouping",type:Boolean})],Ct.prototype,"withoutGrouping",2);a([d()],Ct.prototype,"currency",2);a([d({attribute:"currency-display"})],Ct.prototype,"currencyDisplay",2);a([d({attribute:"minimum-integer-digits",type:Number})],Ct.prototype,"minimumIntegerDigits",2);a([d({attribute:"minimum-fraction-digits",type:Number})],Ct.prototype,"minimumFractionDigits",2);a([d({attribute:"maximum-fraction-digits",type:Number})],Ct.prototype,"maximumFractionDigits",2);a([d({attribute:"minimum-significant-digits",type:Number})],Ct.prototype,"minimumSignificantDigits",2);a([d({attribute:"maximum-significant-digits",type:Number})],Ct.prototype,"maximumSignificantDigits",2);Ct=a([C("wa-format-number")],Ct);var ko=new Map;function w0(t,e="cors"){const n=ko.get(t);if(n!==void 0)return Promise.resolve(n);const i=fetch(t,{mode:e}).then(async r=>{const s={ok:r.ok,status:r.status,html:await r.text()};return ko.set(t,s),s});return ko.set(t,i),i}var Ml=class extends Event{constructor(t){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},v0=`:host {
  display: block;
}
`,jn=class extends M{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(n=>e.setAttribute(n.name,n.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await w0(t,this.mode);if(t!==this.src)return;if(!e.ok){this.dispatchEvent(new Ml({status:e.status}));return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(n=>this.executeScript(n)),this.dispatchEvent(new Ta)}catch{this.dispatchEvent(new Ml({status:-1}))}}render(){return f`<slot></slot>`}};jn.css=v0;a([d()],jn.prototype,"src",2);a([d()],jn.prototype,"mode",2);a([d({attribute:"allow-scripts",type:Boolean})],jn.prototype,"allowScripts",2);a([L("src")],jn.prototype,"handleSrcChange",1);jn=a([C("wa-include")],jn);var y0=class extends Event{constructor(t){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},x0=`:host {
  display: contents;
}
`,Dt=class extends M{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.dispatchEvent(new y0({mutationList:t}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return f` <slot></slot> `}};Dt.css=x0;a([d({reflect:!0})],Dt.prototype,"attr",2);a([d({attribute:"attr-old-value",type:Boolean,reflect:!0})],Dt.prototype,"attrOldValue",2);a([d({attribute:"char-data",type:Boolean,reflect:!0})],Dt.prototype,"charData",2);a([d({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Dt.prototype,"charDataOldValue",2);a([d({attribute:"child-list",type:Boolean,reflect:!0})],Dt.prototype,"childList",2);a([d({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);a([L("disabled")],Dt.prototype,"handleDisabledChange",1);a([L("attr",{waitUntilFirstUpdate:!0}),L("attr-old-value",{waitUntilFirstUpdate:!0}),L("char-data",{waitUntilFirstUpdate:!0}),L("char-data-old-value",{waitUntilFirstUpdate:!0}),L("childList",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleChange",1);Dt=a([C("wa-mutation-observer")],Dt);var k0=`:host {
  --arrow-size: 0.375rem;
  --max-width: 25rem;
  --show-duration: 100ms;
  --hide-duration: 100ms;

  /* Internal calculated properties */
  --arrow-diagonal-size: calc((var(--arrow-size) * sin(45deg)));

  display: contents;

  /** Defaults for inherited CSS properties */
  font-size: var(--wa-font-size-m);
  line-height: var(--wa-line-height-normal);
  text-align: start;
  white-space: normal;
}

/* The native dialog element */
.dialog {
  display: none;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  overflow: visible;
  pointer-events: none;

  &:focus {
    outline: none;
  }

  &[open] {
    display: block;
  }
}

/* The <wa-popup> element */
.popover {
  --arrow-size: inherit;
  --show-duration: inherit;
  --hide-duration: inherit;

  pointer-events: auto;

  &::part(arrow) {
    background-color: var(--wa-color-surface-default);
    border-top: none;
    border-left: none;
    border-bottom: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
    border-right: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
    box-shadow: none;
  }
}

.popover[placement^='top']::part(popup) {
  transform-origin: bottom;
}

.popover[placement^='bottom']::part(popup) {
  transform-origin: top;
}

.popover[placement^='left']::part(popup) {
  transform-origin: right;
}

.popover[placement^='right']::part(popup) {
  transform-origin: left;
}

/* Body */
.body {
  display: flex;
  flex-direction: column;
  width: max-content;
  max-width: var(--max-width);
  padding: var(--wa-space-l);
  background-color: var(--wa-color-surface-default);
  border: var(--wa-panel-border-width) solid var(--wa-color-surface-border);
  border-radius: var(--wa-panel-border-radius);
  border-style: var(--wa-panel-border-style);
  box-shadow: var(--wa-shadow-l);
  color: var(--wa-color-text-normal);
  user-select: none;
  -webkit-user-select: none;
}
`,Eo=new Set,Be=class extends M{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=t=>{t.target.closest('[data-popover="close"]')&&(t.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.preventDefault(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=t=>{const e=t.target;this.anchor&&t.composedPath().includes(this.anchor)||e.closest("wa-popover")!==this&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=Ns("wa-popover-"))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(t){t.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const t=new ti;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}Eo.forEach(e=>e.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,Eo.add(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await he(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Qn)}else{const t=new ei;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),Eo.delete(this),await he(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new Jn)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,n=this.anchor;if(e===n)return;const{signal:i}=this.eventController;e&&e.addEventListener("click",this.handleAnchorClick,{signal:i}),n&&n.removeEventListener("click",this.handleAnchorClick),this.anchor=e,this.for&&!e&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,Lt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Lt(this,"wa-after-hide")}render(){return f`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${H({popover:!0,"popover-open":this.open})}
          placement=${this.placement}
          distance=${this.distance}
          skidding=${this.skidding}
          flip
          shift
          ?arrow=${!this.withoutArrow}
          .anchor=${this.anchor}
        >
          <div part="body" class="body" @click=${this.handleBodyClick}>
            <slot></slot>
          </div>
        </wa-popup>
      </dialog>
    `}};Be.css=k0;Be.dependencies={"wa-popup":oe};a([A("dialog")],Be.prototype,"dialog",2);a([A(".body")],Be.prototype,"body",2);a([A("wa-popup")],Be.prototype,"popup",2);a([$()],Be.prototype,"anchor",2);a([d()],Be.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],Be.prototype,"open",2);a([d({type:Number})],Be.prototype,"distance",2);a([d({type:Number})],Be.prototype,"skidding",2);a([d()],Be.prototype,"for",2);a([d({attribute:"without-arrow",type:Boolean,reflect:!0})],Be.prototype,"withoutArrow",2);a([L("open",{waitUntilFirstUpdate:!0})],Be.prototype,"handleOpenChange",1);a([L("for")],Be.prototype,"handleForChange",1);a([L(["distance","placement","skidding"])],Be.prototype,"handleOptionsChange",1);Be=a([C("wa-popover")],Be);var E0=`:host {
  --track-height: 1rem;
  --track-color: var(--wa-color-neutral-fill-normal);
  --indicator-color: var(--wa-color-brand-fill-loud);

  display: flex;
}

.progress-bar {
  flex: 1 1 auto;
  display: flex;
  position: relative;
  overflow: hidden;
  height: var(--track-height);
  border-radius: var(--wa-border-radius-pill);
  background-color: var(--track-color);
  color: var(--wa-color-brand-on-loud);
  font-size: var(--wa-font-size-s);
}

.indicator {
  width: var(--percentage);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--indicator-color);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1;
  font-weight: var(--wa-font-weight-semibold);
  transition: all var(--wa-transition-slow, 200ms) var(--wa-transition-easing, ease);
  user-select: none;
  -webkit-user-select: none;
}

/* Indeterminate */
:host([indeterminate]) .indicator {
  position: absolute;
  inset-block: 0;
  inline-size: 50%;
  animation: wa-progress-indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
}

@media (forced-colors: active) {
  .progress-bar {
    outline: solid 1px SelectedItem;
    background-color: var(--wa-color-surface-default);
  }

  .indicator {
    outline: solid 1px SelectedItem;
    background-color: SelectedItem;
  }
}

@keyframes wa-progress-indeterminate {
  0% {
    inset-inline-start: -50%;
  }

  75%,
  100% {
    inset-inline-start: 100%;
  }
}
`,Si=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.value=0,this.indeterminate=!1,this.label=""}updated(t){t.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${Y(this.value,0,100)}%`)})}render(){return f`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${F(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":f` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};Si.css=E0;a([d({type:Number,reflect:!0})],Si.prototype,"value",2);a([d({type:Boolean,reflect:!0})],Si.prototype,"indeterminate",2);a([d()],Si.prototype,"label",2);Si=a([C("wa-progress-bar")],Si);var C0=`:host {
  --size: 8rem;
  --track-width: 0.25em; /* avoid using rems here */
  --track-color: var(--wa-color-neutral-fill-normal);
  --indicator-width: var(--track-width);
  --indicator-color: var(--wa-color-brand-fill-loud);
  --indicator-transition-duration: 0.35s;

  display: inline-flex;
}

.progress-ring {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.image {
  width: var(--size);
  height: var(--size);
  rotate: -90deg;
  transform-origin: 50% 50%;
}

.track,
.indicator {
  --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
  --circumference: calc(var(--radius) * 2 * 3.141592654);

  fill: none;
  r: var(--radius);
  cx: calc(var(--size) / 2);
  cy: calc(var(--size) / 2);
}

.track {
  stroke: var(--track-color);
  stroke-width: var(--track-width);
}

.indicator {
  stroke: var(--indicator-color);
  stroke-width: var(--indicator-width);
  stroke-linecap: round;
  transition-property: stroke-dashoffset;
  transition-duration: var(--indicator-transition-duration);
  stroke-dasharray: var(--circumference) var(--circumference);
  stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
}

.label {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
}
`,Xn=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),n=2*Math.PI*e,i=n-this.value/100*n;this.indicatorOffset=`${i}px`}}render(){return f`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="image">
          <circle class="track"></circle>
          <circle class="indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};Xn.css=C0;a([A(".indicator")],Xn.prototype,"indicator",2);a([$()],Xn.prototype,"indicatorOffset",2);a([d({type:Number,reflect:!0})],Xn.prototype,"value",2);a([d()],Xn.prototype,"label",2);Xn=a([C("wa-progress-ring")],Xn);const $0="modulepreload",S0=function(t){return"/"+t},Nl={},ye=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(n.map(h=>{if(h=S0(h),h in Nl)return;Nl[h]=!0;const u=h.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":$0,u||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((b,w)=>{g.addEventListener("load",b),g.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var A0=`:host {
  --size: 128px;
  display: inline-block;
}

:host,
canvas {
  max-width: var(--size);
  max-height: var(--size);
  width: var(--size);
  height: var(--size);
}
`,Co,vt=class extends M{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H",this.generated=!1}firstUpdated(t){super.firstUpdated(t),this.hasUpdated&&this.generate()}generate(){if(this.style.setProperty("--size",`${this.size}px`),!!this.hasUpdated){if(!Co){ye(()=>import("./qr-creator.es6.min-DtlEF1Ls.js"),[]).then(t=>{Co=t.default,this.generate()});return}Co.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas),this.generated=!0}}render(){return f`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
      ></canvas>
    `}};vt.css=A0;a([A("canvas")],vt.prototype,"canvas",2);a([d()],vt.prototype,"value",2);a([d()],vt.prototype,"label",2);a([d({type:Number})],vt.prototype,"size",2);a([d()],vt.prototype,"fill",2);a([d()],vt.prototype,"background",2);a([d({type:Number})],vt.prototype,"radius",2);a([d({attribute:"error-correction"})],vt.prototype,"errorCorrection",2);a([$()],vt.prototype,"generated",2);a([L(["background","errorCorrection","fill","radius","size","value"])],vt.prototype,"generate",1);vt=a([C("wa-qr-code")],vt);var _0=`:host {
  display: block;
}

.form-control {
  position: relative;
  border: none;
  padding: 0;
  margin: 0;
}

.label {
  padding: 0;
}

.radio-group-required .label::after {
  content: var(--wa-form-control-required-content);
  margin-inline-start: var(--wa-form-control-required-content-offset);
}

[part~='form-control-input'] {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0; /* Radios handle their own spacing */
}

/* Horizontal */
:host([orientation='horizontal']) [part~='form-control-input'] {
  flex-direction: row;
}

/* Help text */
[part~='hint'] {
  margin-block-start: 0.5em;
}
`,He=class extends fe{constructor(){super(),this.hasSlotController=new xt(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("wa-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const n=this.value;this.value=e.value,e.checked=!0;const i=this.getAllRadios();for(const r of i)e!==r&&(r.checked=!1,r.setAttribute("tabindex","-1"));this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const t=[Fs({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:Ns("__wa-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}get validationTarget(){const t=this.querySelector(":is(wa-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("value"))&&this.syncRadioElements()}formResetCallback(...t){this.value=this.defaultValue,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();if(t.forEach((e,n)=>{e.setAttribute("size",this.size),e.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),e.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),e.toggleAttribute("data-wa-radio-first",n===0),e.toggleAttribute("data-wa-radio-inner",n!==0&&n!==t.length-1),e.toggleAttribute("data-wa-radio-last",n===t.length-1),e.forceDisabled=this.disabled}),await Promise.all(t.map(async e=>{await e.updateComplete,!e.disabled&&e.value===this.value?e.checked=!0:e.checked=!1})),this.disabled)t.forEach(e=>{e.tabIndex=-1});else{const e=t.filter(i=>!i.disabled),n=e.find(i=>i.checked);e.length>0&&(n?e.forEach(i=>{i.tabIndex=i.checked?0:-1}):e.forEach((i,r)=>{i.tabIndex=r===0?0:-1})),t.filter(i=>i.disabled).forEach(i=>{i.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter(l=>!l.disabled);if(e.length<=0)return;t.preventDefault();const n=this.value,i=e.find(l=>l.checked)??e[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let s=e.indexOf(i)+r;s||(s=0),s<0&&(s=e.length-1),s>e.length-1&&(s=0);const o=e.some(l=>l.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(l=>{l.checked=!1,o||l.setAttribute("tabindex","-1")}),this.value=e[s].value,e[s].checked=!0,o?e[s].shadowRoot.querySelector("button").focus():(e[s].setAttribute("tabindex","0"),e[s].focus()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),n=e.find(s=>s.checked),i=e.find(s=>!s.disabled),r=n||i;r&&r.focus(t)}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e;return f`
      <fieldset
        part="form-control"
        class=${H({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":n})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${n?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${H({"has-slotted":i})}
          aria-hidden=${i?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};He.css=[Ze,ln,_0];He.shadowRootOptions={...fe.shadowRootOptions,delegatesFocus:!0};a([A("slot:not([name])")],He.prototype,"defaultSlot",2);a([d()],He.prototype,"label",2);a([d({attribute:"hint"})],He.prototype,"hint",2);a([d({reflect:!0})],He.prototype,"name",2);a([d({type:Boolean,reflect:!0})],He.prototype,"disabled",2);a([d({reflect:!0})],He.prototype,"orientation",2);a([$()],He.prototype,"value",1);a([d({attribute:"value",reflect:!0})],He.prototype,"defaultValue",2);a([d({reflect:!0})],He.prototype,"size",2);a([d({type:Boolean,reflect:!0})],He.prototype,"required",2);a([d({type:Boolean,attribute:"with-label"})],He.prototype,"withLabel",2);a([d({type:Boolean,attribute:"with-hint"})],He.prototype,"withHint",2);He=a([C("wa-radio-group")],He);var T0=`:host {
  --checked-icon-color: var(--wa-form-control-activated-color);
  --checked-icon-scale: 0.7;

  color: var(--wa-form-control-value-color);
  display: inline-flex;
  flex-direction: row;
  align-items: top;
  font-family: inherit;
  font-weight: var(--wa-form-control-value-font-weight);
  line-height: var(--wa-form-control-value-line-height);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}

:host(:focus) {
  outline: none;
}

/* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
:host(:not(:state(checked))) svg circle {
  opacity: 0;
}

[part~='label'] {
  display: inline;
}

[part~='hint'] {
  margin-block-start: 0.5em;
}

/* Default spacing for default appearance radios */
:host([appearance='default']) {
  margin-block: 0.375em; /* Half of the original 0.75em gap on each side */
}

:host([appearance='default'][data-wa-radio-horizontal]) {
  margin-block: 0;
  margin-inline: 0.5em; /* Half of the original 1em gap on each side */
}

/* Remove margin from first/last items to prevent extra space */
:host([appearance='default'][data-wa-radio-first]) {
  margin-block-start: 0;
  margin-inline-start: 0;
}

:host([appearance='default'][data-wa-radio-last]) {
  margin-block-end: 0;
  margin-inline-end: 0;
}

/* Button appearance have no spacing, they get handled by the overlap margins below */
:host([appearance='button']) {
  margin: 0;
  align-items: center;
  min-height: var(--wa-form-control-height);
  background-color: var(--wa-color-surface-default);
  border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
  border-radius: var(--wa-border-radius-m);
  padding: 0 var(--wa-form-control-padding-inline);
  transition:
    background-color var(--wa-transition-fast),
    border-color var(--wa-transition-fast);
}

/* Default appearance */
:host([appearance='default']) {
  .control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    border-color: var(--wa-form-control-border-color);
    border-radius: 50%;
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    background-color: var(--wa-form-control-background-color);
    color: transparent;
    transition:
      background var(--wa-transition-normal),
      border-color var(--wa-transition-fast),
      box-shadow var(--wa-transition-fast),
      color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    margin-inline-end: 0.5em;
  }

  .checked-icon {
    display: flex;
    fill: currentColor;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    scale: var(--checked-icon-scale);
  }
}

/* Button appearance */
:host([appearance='button']) {
  .control {
    display: none;
  }
}

/* Checked */
:host(:state(checked)) .control {
  color: var(--checked-icon-color);
  border-color: var(--wa-form-control-activated-color);
  background-color: var(--wa-form-control-background-color);
}

/* Focus */
:host(:focus-visible) .control {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/* Disabled */
:host(:state(disabled)) {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Horizontal grouping - remove inner border radius */
:host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {
  border-radius: 0;
}

:host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

:host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}

/* Vertical grouping - remove inner border radius */
:host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {
  border-radius: 0;
}

:host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {
  border-end-start-radius: 0;
  border-end-end-radius: 0;
}

:host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
}

@media (hover: hover) {
  :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {
    background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));
  }
}

:host([appearance='button']:focus-visible) {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

:host([appearance='button']:state(checked)) {
  border-color: var(--wa-form-control-activated-color);
  background-color: var(--wa-color-brand-fill-quiet);
}

:host([appearance='button']:state(checked):focus-visible) {
  outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-brand-border-loud);
  outline-offset: var(--wa-focus-ring-offset);
}

/* Button overlap margins */
:host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {
  margin-inline-start: calc(-1 * var(--wa-form-control-border-width));
}

:host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {
  margin-block-start: calc(-1 * var(--wa-form-control-border-width));
}

/* Ensure interactive states are visible above adjacent buttons */
:host([appearance='button']:hover),
:host([appearance='button']:state(checked)) {
  position: relative;
  z-index: 1;
}

:host([appearance='button']:focus-visible) {
  z-index: 2;
}
`,Ht=class extends fe{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return f`
      <span part="control" class="control">
        ${this.checked?f`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};Ht.css=[ln,Ze,T0];a([$()],Ht.prototype,"checked",2);a([$()],Ht.prototype,"forceDisabled",2);a([d({reflect:!0})],Ht.prototype,"form",2);a([d({reflect:!0})],Ht.prototype,"value",2);a([d({reflect:!0})],Ht.prototype,"appearance",2);a([d({reflect:!0})],Ht.prototype,"size",2);a([d({type:Boolean})],Ht.prototype,"disabled",2);Ht=a([C("wa-radio")],Ht);var Fl=class extends Event{constructor(t){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},R0=`:host {
  --symbol-color: var(--wa-color-neutral-on-quiet);
  --symbol-color-active: var(--wa-color-yellow-70);
  --symbol-spacing: 0.125em;

  display: inline-flex;
}

.rating {
  position: relative;
  display: inline-flex;
  border-radius: var(--wa-border-radius-m);
  vertical-align: middle;
}

.rating:focus {
  outline: none;
}

.rating:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

.symbols {
  display: inline-flex;
  gap: 0.125em;
  position: relative;
  line-height: 0;
  color: var(--symbol-color);
  white-space: nowrap;
  cursor: pointer;
}

.symbols > * {
  padding: var(--symbol-spacing);
}

.symbol-active,
.partial-filled {
  color: var(--symbol-color-active);
}

.partial-symbol-container {
  position: relative;
}

.partial-filled {
  position: absolute;
  top: var(--symbol-spacing);
  left: var(--symbol-spacing);
}

.symbol {
  transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
  pointer-events: none;
}

.symbol-hover {
  scale: 1.2;
}

.rating-readonly .symbols {
  cursor: default;
}

:host([disabled]) .symbol-hover,
.rating-readonly .symbol-hover {
  scale: none;
}

:host([disabled]) {
  opacity: 0.5;
}

:host([disabled]) .symbols {
  cursor: not-allowed;
}

/* Forced colors mode */
@media (forced-colors: active) {
  .symbol-active {
    color: SelectedItem;
  }
}
`,qe=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=(t,e)=>e?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="medium"}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:n,right:i,width:r}=this.rating.getBoundingClientRect(),s=e?this.roundToPrecision((i-t)/r*this.max,this.precision):this.roundToPrecision((t-n)/r*this.max,this.precision);return Y(s,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.matches(":dir(ltr)"),n=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||n&&t.key==="ArrowRight"){const r=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||n&&t.key==="ArrowLeft"){const r=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}roundToPrecision(t,e=.5){const n=1/e;return Math.ceil(t*n)/n}handleHoverValueChange(){this.dispatchEvent(new Fl({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new Fl({phase:this.isHovering?"start":"end",value:this.hoverValue}))}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir,e=Array.from(Array(this.max).keys());let n=0;return this.disabled||this.readonly?n=this.value:n=this.isHovering?this.hoverValue:this.value,f`
      <div
        part="base"
        class=${H({rating:!0,"rating-readonly":this.readonly,"rating-disabled":this.disabled})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="symbols">
          ${e.map(i=>{const r=n>=i+1;return n>i&&n<i+1?f`
                <span
                  class=${H({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(n)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${ut({clipPath:t?`inset(0 ${(n-i)*100}% 0 0)`:`inset(0 0 0 ${(n-i)*100}%)`})}
                  >
                    ${en(this.getSymbol(i+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${ut({clipPath:t?`inset(0 0 0 ${100-(n-i)*100}%)`:`inset(0 ${100-(n-i)*100}% 0 0)`})}
                  >
                    ${en(this.getSymbol(i+1,!0))}
                  </div>
                </span>
              `:f`
              <span
                class=${H({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(n)===i+1,"symbol-active":n>=i+1})}
                role="presentation"
              >
                ${en(this.getSymbol(i+1,r))}
              </span>
            `})}
        </span>
      </div>
    `}};qe.css=[Ze,R0];a([A(".rating")],qe.prototype,"rating",2);a([$()],qe.prototype,"hoverValue",2);a([$()],qe.prototype,"isHovering",2);a([d()],qe.prototype,"label",2);a([d({type:Number})],qe.prototype,"value",2);a([d({type:Number})],qe.prototype,"max",2);a([d({type:Number})],qe.prototype,"precision",2);a([d({type:Boolean,reflect:!0})],qe.prototype,"readonly",2);a([d({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);a([d()],qe.prototype,"getSymbol",2);a([d({reflect:!0})],qe.prototype,"size",2);a([As({passive:!0})],qe.prototype,"handleTouchMove",1);a([L("hoverValue")],qe.prototype,"handleHoverValueChange",1);a([L("isHovering")],qe.prototype,"handleIsHoveringChange",1);qe=a([C("wa-rating")],qe);var L0=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],$n=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const n=e.getTime()-t.getTime(),{unit:i,value:r}=L0.find(s=>Math.abs(n)<s.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(n/r),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let s;i==="minute"?s=jr("second"):i==="hour"?s=jr("minute"):i==="day"?s=jr("hour"):s=jr("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),s)}return f`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};a([$()],$n.prototype,"isoTime",2);a([$()],$n.prototype,"relativeTime",2);a([d()],$n.prototype,"date",2);a([d()],$n.prototype,"format",2);a([d()],$n.prototype,"numeric",2);a([d({type:Boolean})],$n.prototype,"sync",2);$n=a([C("wa-relative-time")],$n);function jr(t){const n={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return n-Date.now()%n}var I0=class extends Event{constructor(t){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},O0=`:host {
  display: contents;
}
`,br=class extends M{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.dispatchEvent(new I0({entries:t}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(n=>this.resizeObserver.unobserve(n)),this.observedElements=[],e.forEach(n=>{this.resizeObserver.observe(n),this.observedElements.push(n)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return f` <slot @slotchange=${this.handleSlotChange}></slot> `}};br.css=O0;a([d({type:Boolean,reflect:!0})],br.prototype,"disabled",2);a([L("disabled",{waitUntilFirstUpdate:!0})],br.prototype,"handleDisabledChange",1);br=a([C("wa-resize-observer")],br);var D0=`:host {
  --shadow-color: var(--wa-color-surface-default);
  --shadow-size: 2rem;

  /* private (defined dynamically) */
  --start-shadow-opacity: 0;
  --end-shadow-opacity: 0;

  display: block;
  position: relative;
  max-width: 100%;
  isolation: isolate;
}

:host([orientation='vertical']) {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#content {
  z-index: 1; /* below shadows */
  border-radius: inherit;
  scroll-behavior: smooth;
  scrollbar-width: thin;

  /* Prevent text in mobile Safari from being larger when the container width larger than the viewport */
  -webkit-text-size-adjust: 100%;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
}

:host([without-scrollbar]) #content {
  scrollbar-width: none;
}

:host([orientation='horizontal']) #content {
  overflow-x: auto;
  overflow-y: hidden;
}

:host([orientation='vertical']) #content {
  flex: 1 1 auto;
  min-height: 0; /* This is crucial for flex children to respect overflow */
  overflow-x: hidden;
  overflow-y: auto;
}

/* Horizontal shadows */
:host([orientation='horizontal']) {
  #start-shadow,
  #end-shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--shadow-size);
    pointer-events: none;
  }

  #start-shadow {
    opacity: var(--start-shadow-opacity);
  }

  #end-shadow {
    opacity: var(--end-shadow-opacity);
  }

  #start-shadow {
    &:dir(ltr) {
      left: 0;
      background: linear-gradient(to right, var(--shadow-color), transparent 100%);
    }

    &:dir(rtl) {
      right: 0;
      background: linear-gradient(to left, var(--shadow-color), transparent 100%);
    }
  }

  #end-shadow {
    &:dir(ltr) {
      right: 0;
      background: linear-gradient(to left, var(--shadow-color), transparent 100%);
    }

    &:dir(rtl) {
      left: 0;
      background: linear-gradient(to right, var(--shadow-color), transparent 100%);
    }
  }
}

/* Vertical shadows */
:host([orientation='vertical']) {
  #start-shadow,
  #end-shadow {
    position: absolute;
    z-index: 2;
    right: 0;
    left: 0;
    height: var(--shadow-size);
    pointer-events: none;
  }

  #start-shadow {
    opacity: var(--start-shadow-opacity);
  }

  #end-shadow {
    opacity: var(--end-shadow-opacity);
  }

  #start-shadow {
    top: 0;
    background: linear-gradient(to bottom, var(--shadow-color), transparent 100%);
  }

  #end-shadow {
    bottom: 0;
    background: linear-gradient(to top, var(--shadow-color), transparent 100%);
  }
}
`,on=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(t){t.key==="Home"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),t.key==="End"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const t=Math.ceil(this.content.clientWidth),e=Math.abs(Math.ceil(this.content.scrollLeft)),i=Math.ceil(this.content.scrollWidth)-t;this.canScroll=i>0;const r=Math.min(1,e/(i*.05)),s=Math.min(1,(i-e)/(i*.05));this.style.setProperty("--start-shadow-opacity",String(r||0)),this.style.setProperty("--end-shadow-opacity",String(s||0))}else{const t=Math.ceil(this.content.clientHeight),e=Math.abs(Math.ceil(this.content.scrollTop)),i=Math.ceil(this.content.scrollHeight)-t;this.canScroll=i>0;const r=Math.min(1,e/(i*.05)),s=Math.min(1,(i-e)/(i*.05));this.style.setProperty("--start-shadow-opacity",String(r||0)),this.style.setProperty("--end-shadow-opacity",String(s||0))}}render(){return f`
      ${this.withoutShadow?"":f`
            <div id="start-shadow" part="start-shadow" aria-hidden="true"></div>
            <div id="end-shadow" part="end-shadow" aria-hidden="true"></div>
          `}

      <div
        id="content"
        part="content"
        role="region"
        aria-label=${this.localize.term("scrollableRegion")}
        aria-orientation=${this.orientation}
        tabindex=${this.canScroll?"0":"-1"}
        @keydown=${this.handleKeyDown}
        @scroll=${this.updateScroll}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};on.css=[D0];a([A("#content")],on.prototype,"content",2);a([$()],on.prototype,"canScroll",2);a([d({reflect:!0})],on.prototype,"orientation",2);a([d({attribute:"without-scrollbar",type:Boolean,reflect:!0})],on.prototype,"withoutScrollbar",2);a([d({attribute:"without-shadow",type:Boolean,reflect:!0})],on.prototype,"withoutShadow",2);a([As({passive:!0})],on.prototype,"updateScroll",1);on=a([C("wa-scroller")],on);var z0=`:host {
  --tag-max-size: 10ch;
  --show-duration: 100ms;
  --hide-duration: 100ms;
}

/* Add ellipses to multi select options */
:host wa-tag::part(content) {
  display: initial;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: var(--tag-max-size);
}

:host .disabled [part~='combobox'] {
  opacity: 0.5;
  cursor: not-allowed;
  outline: none;
}

:host .enabled:is(.open, :focus-within) [part~='combobox'] {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/** The popup */
.select {
  flex: 1 1 auto;
  display: inline-flex;
  width: 100%;
  position: relative;
  vertical-align: middle;

  /* Pass through from select to the popup */
  --show-duration: inherit;
  --hide-duration: inherit;

  &::part(popup) {
    z-index: 900;
  }

  &[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  &[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }
}

/* Combobox */
.combobox {
  flex: 1;
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  justify-content: start;

  min-height: var(--wa-form-control-height);

  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-form-control-border-style);
  border-width: var(--wa-form-control-border-width);
  color: var(--wa-form-control-value-color);
  cursor: pointer;
  font-family: inherit;
  font-weight: var(--wa-form-control-value-font-weight);
  line-height: var(--wa-form-control-value-line-height);
  overflow: hidden;
  padding: 0 var(--wa-form-control-padding-inline);
  position: relative;
  vertical-align: middle;
  width: 100%;
  transition:
    background-color var(--wa-transition-normal),
    border var(--wa-transition-normal),
    outline var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);

  :host([multiple]) .select:not(.placeholder-visible) & {
    padding-inline-start: 0;
    padding-block: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));
  }

  /* Pills */
  :host([pill]) & {
    border-radius: var(--wa-border-radius-pill);
  }
}

/* Appearance modifiers */
:host([appearance='outlined']) .combobox {
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
}

:host([appearance='filled']) .combobox {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-color-neutral-fill-quiet);
}

:host([appearance='filled-outlined']) .combobox {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-form-control-border-color);
}

.display-input {
  position: relative;
  width: 100%;
  font: inherit;
  border: none;
  background: none;
  line-height: var(--wa-form-control-value-line-height);
  color: var(--wa-form-control-value-color);
  cursor: inherit;
  overflow: hidden;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--wa-form-control-placeholder-color);
  }
}

/* Visually hide the display input when multiple is enabled */
:host([multiple]) .select:not(.placeholder-visible) .display-input {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.value-input {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding: 0;
  margin: 0;
}

.tags {
  display: flex;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
  margin-inline-start: 0.25em;
  gap: 0.25em;

  &::slotted(wa-tag) {
    cursor: pointer !important;
  }

  .disabled &,
  .disabled &::slotted(wa-tag) {
    cursor: not-allowed !important;
  }
}

/* Start and End */

.start,
.end {
  flex: 0;
  display: inline-flex;
  align-items: center;
  color: var(--wa-color-neutral-on-quiet);
}

.end::slotted(*) {
  margin-inline-start: var(--wa-form-control-padding-inline);
}

.start::slotted(*) {
  margin-inline-end: var(--wa-form-control-padding-inline);
}

:host([multiple]) .start::slotted(*) {
  margin-inline: var(--wa-form-control-padding-inline);
}

/* Clear button */
[part~='clear-button'] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  color: var(--wa-color-neutral-on-quiet);
  border: none;
  background: none;
  padding: 0;
  transition: color var(--wa-transition-normal);
  cursor: pointer;
  margin-inline-start: var(--wa-form-control-padding-inline);

  &:focus {
    outline: none;
  }

  @media (hover: hover) {
    &:hover {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  &:active {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }
}

/* Expand icon */
.expand-icon {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  color: var(--wa-color-neutral-on-quiet);
  transition: rotate var(--wa-transition-slow) ease;
  rotate: 0deg;
  margin-inline-start: var(--wa-form-control-padding-inline);

  .open & {
    rotate: -180deg;
  }
}

/* Listbox */
.listbox {
  display: block;
  position: relative;
  font: inherit;
  box-shadow: var(--wa-shadow-m);
  background: var(--wa-color-surface-raised);
  border-color: var(--wa-color-surface-border);
  border-radius: var(--wa-border-radius-m);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
  padding-block: 0.5em;
  padding-inline: 0;
  overflow: auto;
  overscroll-behavior: none;

  /* Make sure it adheres to the popup's auto size */
  max-width: var(--auto-size-available-width);
  max-height: var(--auto-size-available-height);

  &::slotted(wa-divider) {
    --spacing: 0.5em;
  }
}

slot:not([name])::slotted(small) {
  display: block;
  font-size: var(--wa-font-size-smaller);
  font-weight: var(--wa-font-weight-semibold);
  color: var(--wa-color-text-quiet);
  padding-block: 0.5em;
  padding-inline: 2.25em;
}
`,Z=class extends fe{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new xt(this,"hint","label"),this.localize=new te(this),this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.form=null,this.required=!1,this.getTag=t=>f`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
        >
          ${t.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,n=e.closest('[part~="clear-button"]')!==null,i=e.closest("wa-button")!==null;if(!(n||i)){if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),s=r.indexOf(this.currentOption);let o=Math.max(0,s);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(o=s+1,o>r.length-1&&(o=0)):t.key==="ArrowUp"?(o=s-1,o<0&&(o=r.length-1)):t.key==="Home"?o=0:t.key==="End"&&(o=r.length-1),this.setCurrentOption(r[o])}if(t.key?.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const s of r)if(s.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static get validators(){const t=[Fs({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...t]}get validationTarget(){return this.valueInput}set defaultValue(t){this._defaultValue=this.convertDefaultValue(t)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(t){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(t)&&(t=t[0]),t}set value(t){let e=this.value;t instanceof FormData&&(t=t.getAll(this.name)),t!=null&&!Array.isArray(t)&&(t=[t]),this._value=t??null,this.value!==e&&(this.valueHasChanged=!0,this.requestUpdate("value",e))}get value(){let t=this._value??this.defaultValue??null;t!=null&&(t=Array.isArray(t)?t:[t]),t==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(n=>!n.disabled).map(n=>n.value));let e=t;return t!=null&&(e=t.filter(n=>this.optionValues.has(n)),e=this.multiple?e:e[0],e=e??null),e}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){const e=this.getAllOptions().filter(n=>n.hasAttribute("selected")||n.defaultSelected);if(e.length>0){const n=e.map(i=>i.value);this._defaultValue=this.multiple?n:n[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(t){t.preventDefault()}handleComboboxMouseDown(t){const n=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="wa-button");this.disabled||n||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==null&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new wd),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const n=t.target.closest("wa-option");n&&!n.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(n):this.setSelectedOptions(n),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let e=this.value;if(e==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(e)||(e=[e]);const n=t.filter(i=>e.includes(i.value));this.setSelectedOptions(n)}handleTagRemove(t,e){if(t.stopPropagation(),this.disabled)return;let n=e;if(!n){const i=t.target.closest("wa-tag[part~=tag]");if(i){const r=this.shadowRoot?.querySelector('[part="tags"]');if(r){const o=Array.from(r.children).indexOf(i);o>=0&&o<this.selectedOptions.length&&(n=this.selectedOptions[o])}}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(t){this.getAllOptions().forEach(n=>{n.current=!1,n.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),n=Array.isArray(t)?t:[t];e.forEach(i=>{n.includes(i)||(i.selected=!1)}),n.length&&n.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){const t=this.getAllOptions();this.selectedOptions=t.filter(n=>{if(!this.hasInteracted&&!this.valueHasChanged){const i=this.defaultValue,r=Array.isArray(i)?i:[i];return n.hasAttribute("selected")||n.defaultSelected||n.selected||r?.includes(n.value)}return n.selected});let e=new Set(this.selectedOptions.map(n=>n.value));if(e.size>0||this._value){const n=this._value;if(this._value==null){let i=this.defaultValue??[];this._value=Array.isArray(i)?i:[i]}this._value=this._value?.filter(i=>!this.optionValues?.has(i))??null,this._value?.unshift(...e),this.requestUpdate("value",n)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const n=this.selectedOptions[0];this.displayLabel=n?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const n=this.getTag(t,e);return n?typeof n=="string"?en(n):n:null}else if(e===this.maxOptionsVisible)return f`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-e}</wa-tag
          >
        `;return null})}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],n=t.filter(i=>e.includes(i.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const t=new ti;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await he(this.popup.popup,"show"),this.currentOption&&Ko(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new Qn)}else{const t=new ei;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await he(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Jn)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Lt(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Lt(this,"wa-after-hide")}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e,r=(this.hasUpdated||jh)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,s=!!(this.placeholder&&(!this.value||this.value.length===0));return f`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control-has-label":n})}
      >
        <label
          id="label"
          part="form-control-label label"
          class="label"
          aria-hidden=${n?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${H({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":s})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?f`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${r?f`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${H({"has-slotted":i})}
          aria-hidden=${i?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};Z.css=[z0,ln,Ze];a([A(".select")],Z.prototype,"popup",2);a([A(".combobox")],Z.prototype,"combobox",2);a([A(".display-input")],Z.prototype,"displayInput",2);a([A(".value-input")],Z.prototype,"valueInput",2);a([A(".listbox")],Z.prototype,"listbox",2);a([$()],Z.prototype,"displayLabel",2);a([$()],Z.prototype,"currentOption",2);a([$()],Z.prototype,"selectedOptions",2);a([$()],Z.prototype,"optionValues",2);a([d()],Z.prototype,"name",2);a([d({attribute:!1})],Z.prototype,"defaultValue",1);a([d({attribute:"value",reflect:!1})],Z.prototype,"value",1);a([d({reflect:!0})],Z.prototype,"size",2);a([d()],Z.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],Z.prototype,"multiple",2);a([d({attribute:"max-options-visible",type:Number})],Z.prototype,"maxOptionsVisible",2);a([d({type:Boolean})],Z.prototype,"disabled",2);a([d({attribute:"with-clear",type:Boolean})],Z.prototype,"withClear",2);a([d({type:Boolean,reflect:!0})],Z.prototype,"open",2);a([d({reflect:!0})],Z.prototype,"appearance",2);a([d({type:Boolean,reflect:!0})],Z.prototype,"pill",2);a([d()],Z.prototype,"label",2);a([d({reflect:!0})],Z.prototype,"placement",2);a([d({attribute:"hint"})],Z.prototype,"hint",2);a([d({attribute:"with-label",type:Boolean})],Z.prototype,"withLabel",2);a([d({attribute:"with-hint",type:Boolean})],Z.prototype,"withHint",2);a([d({reflect:!0})],Z.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Z.prototype,"required",2);a([d({attribute:!1})],Z.prototype,"getTag",2);a([L("disabled",{waitUntilFirstUpdate:!0})],Z.prototype,"handleDisabledChange",1);a([L("value",{waitUntilFirstUpdate:!0})],Z.prototype,"handleValueChange",1);a([L("open",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpenChange",1);Z=a([C("wa-select")],Z);var P0=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}},M0=`@layer wa-component {
  :host {
    display: inline-flex;
    gap: 0.5em;
    border-radius: var(--wa-border-radius-m);
    align-items: center;
    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    font-size: inherit;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    height: calc(var(--wa-form-control-height) * 0.8);
    line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
    padding: 0 0.75em;
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
  }

  :host([appearance='filled']) {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
  }

  :host([appearance='accent']) {
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
  }
}

.content {
  font-size: var(--wa-font-size-smaller);
}

[part='remove-button'] {
  color: inherit;
  line-height: 1;
}

[part='remove-button']::part(base) {
  padding: 0;
  height: 1em;
  width: 1em;
}

@media (hover: hover) {
  :host(:hover) > [part='remove-button']::part(base) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }
}

:host(:active) > [part='remove-button']::part(base) {
  color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
}

/*
 * Pill modifier
 */
:host([pill]) {
  border-radius: var(--wa-border-radius-pill);
}
`,Sn=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.variant="neutral",this.appearance="filled-outlined",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new P0)}render(){return f`
      <slot part="content" class="content"></slot>

      ${this.withRemove?f`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          `:""}
    `}};Sn.css=[M0,Ar,Ze];a([d({reflect:!0})],Sn.prototype,"variant",2);a([d({reflect:!0})],Sn.prototype,"appearance",2);a([d({reflect:!0})],Sn.prototype,"size",2);a([d({type:Boolean,reflect:!0})],Sn.prototype,"pill",2);a([d({attribute:"with-remove",type:Boolean})],Sn.prototype,"withRemove",2);Sn=a([C("wa-tag")],Sn);function rr(t,e=0){if(!t||!globalThis.Node)return"";if(typeof t[Symbol.iterator]=="function")return(Array.isArray(t)?t:[...t]).map(r=>rr(r,--e)).join("");let n=t;if(n.nodeType===Node.TEXT_NODE)return n.textContent??"";if(n.nodeType===Node.ELEMENT_NODE){let i=n;if(i.hasAttribute("slot")||i.matches("style, script"))return"";if(i instanceof HTMLSlotElement){let r=i.assignedNodes({flatten:!0});if(r.length>0)return rr(r,--e)}return e>-1?rr(i,--e):i.textContent??""}return n.hasChildNodes()?rr(n.childNodes,--e):""}var N0=`:host {
  display: block;
  color: var(--wa-color-text-normal);
  -webkit-user-select: none;
  user-select: none;

  position: relative;
  display: flex;
  align-items: center;
  font: inherit;
  padding: 0.5em 1em 0.5em 0.25em;
  line-height: var(--wa-line-height-condensed);
  transition: fill var(--wa-transition-normal) var(--wa-transition-easing);
  cursor: pointer;
}

:host(:focus) {
  outline: none;
}

@media (hover: hover) {
  :host(:not([disabled], :state(current)):is(:state(hover), :hover)) {
    background-color: var(--wa-color-neutral-fill-normal);
    color: var(--wa-color-neutral-on-normal);
  }
}

:host(:state(current)),
:host([disabled]:state(current)) {
  background-color: var(--wa-color-brand-fill-loud);
  color: var(--wa-color-brand-on-loud);
  opacity: 1;
}

:host([disabled]) {
  outline: none;
  opacity: 0.5;
  cursor: not-allowed;
}

.label {
  flex: 1 1 auto;
  display: inline-block;
}

.check {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--wa-font-size-smaller);
  visibility: hidden;
  width: 2em;
}

:host(:state(selected)) .check {
  visibility: visible;
}

.start,
.end {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.start::slotted(*) {
  margin-inline-end: 0.5em;
}

.end::slotted(*) {
  margin-inline-start: 0.5em;
}

@media (forced-colors: active) {
  :host(:hover:not([aria-disabled='true'])) {
    outline: dashed 1px SelectedItem;
    outline-offset: -1px;
  }
}
`,zt=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=t=>{t.type==="mouseenter"?this.customStates.set("hover",!0):t.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(t){const e=this._label;this._label=t||"",this._label!==e&&this.requestUpdate("label",e)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?customElements.whenDefined("wa-select").then(()=>{const t=this.closest("wa-select");t&&(t.handleDefaultSlotChange(),t.selectionChanged?.())}):this.isInitialized=!0}willUpdate(t){if(t.has("defaultSelected")&&!this.closest("wa-select")?.hasInteracted){const e=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",e)}super.willUpdate(t)}updated(t){super.updated(t),t.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),t.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),t.has("current")&&this.customStates.set("current",this.current)}updateDefaultLabel(){let t=this.defaultLabel;this.defaultLabel=rr(this).trim();let e=this.defaultLabel!==t;return!this._label&&e&&this.requestUpdate("label",t),e}render(){return f`
      <wa-icon
        part="checked-icon"
        class="check"
        name="check"
        library="system"
        variant="solid"
        aria-hidden="true"
      ></wa-icon>
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};zt.css=N0;a([A(".label")],zt.prototype,"defaultSlot",2);a([$()],zt.prototype,"current",2);a([d({reflect:!0})],zt.prototype,"value",2);a([d({type:Boolean})],zt.prototype,"disabled",2);a([d({type:Boolean,attribute:!1})],zt.prototype,"selected",2);a([d({type:Boolean,attribute:"selected"})],zt.prototype,"defaultSelected",2);a([d()],zt.prototype,"label",1);a([$()],zt.prototype,"defaultLabel",2);zt=a([C("wa-option")],zt);var F0=`:host {
  --color: var(--wa-color-neutral-fill-normal);
  --sheen-color: color-mix(in oklab, var(--color), var(--wa-color-surface-raised));

  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 1rem;
}

.indicator {
  flex: 1 1 auto;
  background: var(--color);
  border-radius: var(--wa-border-radius-pill);
}

:host([effect='sheen']) .indicator {
  background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
  background-size: 400% 100%;
  animation: sheen 8s ease-in-out infinite;
}

:host([effect='pulse']) .indicator {
  animation: pulse 2s ease-in-out 0.5s infinite;
}

/* Forced colors mode */
@media (forced-colors: active) {
  :host {
    --color: GrayText;
  }
}

@keyframes sheen {
  0% {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
`,ys=class extends M{constructor(){super(...arguments),this.effect="none"}render(){return f` <div part="indicator" class="indicator"></div> `}};ys.css=F0;a([d({reflect:!0})],ys.prototype,"effect",2);ys=a([C("wa-skeleton")],ys);var U0=()=>{const t=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(e){const n={message:"",isValid:!0,invalidKeys:[]},i=(r,s,o,l)=>{const c=document.createElement("input");return c.type="range",c.min=String(s),c.max=String(o),c.step=String(l),c.value=String(r),c.checkValidity(),c.validationMessage};if(e.required&&!e.hasInteracted)return n.isValid=!1,n.invalidKeys.push("valueMissing"),n.message=t.validationMessage||"Please fill out this field.",n;if(e.isRange){const r=e.minValue,s=e.maxValue;if(r<e.min)return n.isValid=!1,n.invalidKeys.push("rangeUnderflow"),n.message=i(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,n;if(s>e.max)return n.isValid=!1,n.invalidKeys.push("rangeOverflow"),n.message=i(s,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,n;if(e.step&&e.step!==1){const o=(r-e.min)%e.step!==0,l=(s-e.min)%e.step!==0;if(o||l){n.isValid=!1,n.invalidKeys.push("stepMismatch");const c=o?r:s;return n.message=i(c,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,n}}}else{const r=e.value;if(r<e.min)return n.isValid=!1,n.invalidKeys.push("rangeUnderflow"),n.message=i(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,n;if(r>e.max)return n.isValid=!1,n.invalidKeys.push("rangeOverflow"),n.message=i(r,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,n;if(e.step&&e.step!==1&&(r-e.min)%e.step!==0)return n.isValid=!1,n.invalidKeys.push("stepMismatch"),n.message=i(r,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,n}return n}}},B0=`:host {
  --track-size: 0.5em;
  --thumb-width: 1.4em;
  --thumb-height: 1.4em;
  --marker-width: 0.1875em;
  --marker-height: 0.1875em;
}

:host([orientation='vertical']) {
  width: auto;
}

#label:has(~ .vertical) {
  display: block;
  order: 2;
  max-width: none;
  text-align: center;
}

#description:has(~ .vertical) {
  order: 3;
  text-align: center;
}

/* Add extra space between slider and label, when present */
#label:has(*:not(:empty)) ~ #slider {
  &.horizontal {
    margin-block-start: 0.5em;
  }
  &.vertical {
    margin-block-end: 0.5em;
  }
}

#slider {
  touch-action: none;

  &:focus {
    outline: none;
  }

  &:focus-visible:not(.disabled) #thumb,
  &:focus-visible:not(.disabled) #thumb-min,
  &:focus-visible:not(.disabled) #thumb-max {
    outline: var(--wa-focus-ring);
    /* intentionally no offset due to border */
  }
}

#track {
  position: relative;
  border-radius: 9999px;
  background: var(--wa-color-neutral-fill-normal);
  isolation: isolate;
}

/* Orientation */
.horizontal #track {
  height: var(--track-size);
}

.vertical #track {
  order: 1;
  width: var(--track-size);
  height: 200px;
}

/* Disabled */
.disabled #track {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Indicator */
#indicator {
  position: absolute;
  border-radius: inherit;
  background-color: var(--wa-form-control-activated-color);

  &:dir(ltr) {
    right: calc(100% - max(var(--start), var(--end)));
    left: min(var(--start), var(--end));
  }

  &:dir(rtl) {
    right: min(var(--start), var(--end));
    left: calc(100% - max(var(--start), var(--end)));
  }
}

.horizontal #indicator {
  top: 0;
  height: 100%;
}

.vertical #indicator {
  top: calc(100% - var(--end));
  bottom: var(--start);
  left: 0;
  width: 100%;
}

/* Thumbs */
#thumb,
#thumb-min,
#thumb-max {
  z-index: 3;
  position: absolute;
  width: var(--thumb-width);
  height: var(--thumb-height);
  border: solid 0.125em var(--wa-color-surface-default);
  border-radius: 50%;
  background-color: var(--wa-form-control-activated-color);
  cursor: pointer;
}

.disabled #thumb,
.disabled #thumb-min,
.disabled #thumb-max {
  cursor: inherit;
}

.horizontal #thumb,
.horizontal #thumb-min,
.horizontal #thumb-max {
  top: calc(50% - var(--thumb-height) / 2);

  &:dir(ltr) {
    right: auto;
    left: calc(var(--position) - var(--thumb-width) / 2);
  }

  &:dir(rtl) {
    right: calc(var(--position) - var(--thumb-width) / 2);
    left: auto;
  }
}

.vertical #thumb,
.vertical #thumb-min,
.vertical #thumb-max {
  bottom: calc(var(--position) - var(--thumb-height) / 2);
  left: calc(50% - var(--thumb-width) / 2);
}

/* Range-specific thumb styles */
:host([range]) {
  #thumb-min:focus-visible,
  #thumb-max:focus-visible {
    z-index: 4; /* Ensure focused thumb appears on top */
    outline: var(--wa-focus-ring);
    /* intentionally no offset due to border */
  }
}

/* Markers */
#markers {
  pointer-events: none;
}

.marker {
  z-index: 2;
  position: absolute;
  width: var(--marker-width);
  height: var(--marker-height);
  border-radius: 50%;
  background-color: var(--wa-color-surface-default);
}

.marker:first-of-type,
.marker:last-of-type {
  display: none;
}

.horizontal .marker {
  top: calc(50% - var(--marker-height) / 2);
  left: calc(var(--position) - var(--marker-width) / 2);
}

.vertical .marker {
  top: calc(var(--position) - var(--marker-height) / 2);
  left: calc(50% - var(--marker-width) / 2);
}

/* Marker labels */
#references {
  position: relative;

  slot {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  ::slotted(*) {
    color: var(--wa-color-text-quiet);
    font-size: 0.875em;
    line-height: 1;
  }
}

.horizontal {
  #references {
    margin-block-start: 0.5em;
  }
}

.vertical {
  display: flex;
  margin-inline: auto;

  #track {
    order: 1;
  }

  #references {
    order: 2;
    width: min-content;
    margin-inline-start: 0.75em;

    slot {
      flex-direction: column;
    }
  }
}

.vertical #references slot {
  flex-direction: column;
}
`,J=class extends fe{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new xt(this,"hint","label"),this.localize=new te(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=this.defaultValue,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.form=null,this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,U0()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){t=Number(t)??this.minValue,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new Ur(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new Ur(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new Ur(this.track,{start:(t,e)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const n=this.getValueFromCoordinates(t,e),i=Math.abs(n-this.minValue),r=Math.abs(n-this.maxValue);if(i===r)if(n>this.maxValue)this.activeThumb="max";else if(n<this.minValue)this.activeThumb="min";else{const s=this.localize.dir()==="rtl",o=this.orientation==="vertical",l=o?e:t,c=this.lastTrackPosition||l;this.lastTrackPosition=l;const h=l>c!==s&&!o||l<c&&o;this.activeThumb=h?"max":"min"}else this.activeThumb=i<=r?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(t,e,this.activeThumb),this.showRangeTooltips()},move:(t,e)=>{this.activeThumb&&this.setThumbValueFromCoordinates(t,e,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new Ur(this.slider,{start:(t,e)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(t,e),this.showTooltip()},move:(t,e)=>{this.setValueFromCoordinates(t,e)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(t){if(t.has("range")&&this.requestUpdate(),this.isRange?(t.has("minValue")||t.has("maxValue"))&&(this.minValue=Y(this.minValue,this.min,this.maxValue),this.maxValue=Y(this.maxValue,this.minValue,this.max),this.updateFormValue()):t.has("value")&&(this.value=Y(this.value,this.min,this.max),this.setValue(String(this.value))),(t.has("min")||t.has("max"))&&(this.isRange?(this.minValue=Y(this.minValue,this.min,this.max),this.maxValue=Y(this.maxValue,this.min,this.max)):this.value=Y(this.value,this.min,this.max)),t.has("disabled")&&this.customStates.set("disabled",this.disabled),t.has("disabled")||t.has("readonly")){const e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):this.value=parseFloat(this.getAttribute("value")??String(this.min)),this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){const e=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length;return t=Math.round(t/this.step)*this.step,t=Y(t,this.min,this.max),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){const n=this.localize.dir()==="rtl",i=this.orientation==="vertical",{top:r,right:s,bottom:o,left:l,height:c,width:h}=this.trackBoundingClientRect,u=i?e:t,p=i?{start:r,end:o,size:c}:{start:l,end:s,size:h},b=(i||n?p.end-u:u-p.start)/p.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*b)}handleBlur(){this.isRange?requestAnimationFrame(()=>{const t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){const e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){const e=this.localize.dir()==="rtl",n=t.target;if(this.disabled||this.readonly||this.isRange&&(n===this.thumbMin?this.activeThumb="min":n===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const i=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let r=i;switch(t.key){case"ArrowUp":case(e?"ArrowLeft":"ArrowRight"):t.preventDefault(),r=this.clampAndRoundToStep(i+this.step);break;case"ArrowDown":case(e?"ArrowRight":"ArrowLeft"):t.preventDefault(),r=this.clampAndRoundToStep(i-this.step);break;case"Home":t.preventDefault(),r=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),r=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault();const s=Math.max(i+(this.max-this.min)/10,i+this.step);r=this.clampAndRoundToStep(s);break;case"PageDown":t.preventDefault();const o=Math.min(i-(this.max-this.min)/10,i-this.step);r=this.clampAndRoundToStep(o);break;case"Enter":vd(t,this);return}r!==i&&(this.isRange?(this.activeThumb==="min"?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),this.updateFormValue()):this.value=Y(r,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){const n=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(t,e,n){const i=this.getValueFromCoordinates(t,e),r=n==="min"?this.minValue:this.maxValue;n==="min"?i>this.maxValue?(this.maxValue=i,this.minValue=i):this.minValue=Math.max(this.min,i):i<this.minValue?(this.minValue=i,this.maxValue=i):this.maxValue=Math.min(this.max,i),r!==(n==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(t&&(t.open=!0),e&&(e.open=!1)):this.activeThumb==="max"&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(){if(this.isRange){const t=new FormData;t.append(this.name||"",String(this.minValue)),t.append(this.name||"",String(this.maxValue)),this.setValue(t)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=Y(t,this.min,this.maxValue),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){const t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=Y(t,this.minValue,this.max),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("hint"),n=this.label?!0:!!t,i=this.hint?!0:!!e,r=this.hasSlotController.test("reference"),s=H({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),o=[];if(this.withMarkers)for(let g=this.min;g<=this.max;g+=this.step)o.push(this.getPercentageFromValue(g));const l=f`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${H({vh:!n})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,c=f`
      <div
        id="hint"
        part="hint"
        class=${H({"has-slotted":i})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,h=this.withMarkers?f`
          <div id="markers" part="markers">
            ${o.map(g=>f`<span part="marker" class="marker" style="--position: ${g}%"></span>`)}
          </div>
        `:"",u=r?f`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",p=(g,b)=>this.withTooltip?f`
            <wa-tooltip
              id=${`tooltip${g!=="thumb"?"-"+g:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${g}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter=="function"?this.valueFormatter(b):this.localize.number(b)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){const g=Y(this.getPercentageFromValue(this.minValue),0,100),b=Y(this.getPercentageFromValue(this.maxValue),0,100);return f`
        ${l}

        <div id="slider" part="slider" class=${s}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${Math.min(g,b)}%; --end: ${Math.max(g,b)}%"
            ></div>

            ${h}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style="--position: ${g}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.minValue):this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (minimum value)`:"Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style="--position: ${b}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.maxValue):this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (maximum value)`:"Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${u} ${c}
        </div>

        ${p("thumb-min",this.minValue)} ${p("thumb-max",this.maxValue)}
      `}else{const g=Y(this.getPercentageFromValue(this.value),0,100),b=Y(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return f`
        ${l}

        <div
          id="slider"
          part="slider"
          class=${s}
          role="slider"
          aria-disabled=${this.disabled?"true":"false"}
          aria-readonly=${this.disabled?"true":"false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.value):this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled?-1:0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${b}%; --end: ${g}%"
            ></div>

            ${h}
            <span id="thumb" part="thumb" style="--position: ${g}%"></span>
          </div>

          ${u} ${c}
        </div>

        ${p("thumb",this.value)}
      `}}};J.formAssociated=!0;J.observeSlots=!0;J.css=[Ze,ln,B0];a([A("#slider")],J.prototype,"slider",2);a([A("#thumb")],J.prototype,"thumb",2);a([A("#thumb-min")],J.prototype,"thumbMin",2);a([A("#thumb-max")],J.prototype,"thumbMax",2);a([A("#track")],J.prototype,"track",2);a([A("#tooltip")],J.prototype,"tooltip",2);a([d()],J.prototype,"label",2);a([d({attribute:"hint"})],J.prototype,"hint",2);a([d({reflect:!0})],J.prototype,"name",2);a([d({type:Number,attribute:"min-value"})],J.prototype,"minValue",2);a([d({type:Number,attribute:"max-value"})],J.prototype,"maxValue",2);a([d({attribute:"value",reflect:!0,type:Number})],J.prototype,"defaultValue",2);a([$()],J.prototype,"value",1);a([d({type:Boolean,reflect:!0})],J.prototype,"range",2);a([d({type:Boolean})],J.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],J.prototype,"readonly",2);a([d({reflect:!0})],J.prototype,"orientation",2);a([d({reflect:!0})],J.prototype,"size",2);a([d({attribute:"indicator-offset",type:Number})],J.prototype,"indicatorOffset",2);a([d({reflect:!0})],J.prototype,"form",2);a([d({type:Number})],J.prototype,"min",2);a([d({type:Number})],J.prototype,"max",2);a([d({type:Number})],J.prototype,"step",2);a([d({type:Boolean,reflect:!0})],J.prototype,"required",2);a([d({type:Boolean})],J.prototype,"autofocus",2);a([d({attribute:"tooltip-distance",type:Number})],J.prototype,"tooltipDistance",2);a([d({attribute:"tooltip-placement",reflect:!0})],J.prototype,"tooltipPlacement",2);a([d({attribute:"with-markers",type:Boolean})],J.prototype,"withMarkers",2);a([d({attribute:"with-tooltip",type:Boolean})],J.prototype,"withTooltip",2);a([d({attribute:!1})],J.prototype,"valueFormatter",2);J=a([C("wa-slider")],J);var q0=`:host {
  --divider-width: 0.25rem;
  --divider-hit-area: 0.75rem;
  --min: 0%;
  --max: 100%;

  display: grid;
}

.start,
.end {
  overflow: hidden;
}

.divider {
  flex: 0 0 var(--divider-width);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: var(--wa-color-neutral-border-normal);
  color: var(--wa-color-neutral-on-normal);
  z-index: 1;
}

.divider:focus {
  outline: none;
}

:host(:not([disabled])) .divider:focus-visible {
  outline: var(--wa-focus-ring);
}

:host([disabled]) .divider {
  cursor: not-allowed;
}

/* Horizontal */
:host(:not([orientation='vertical'], [disabled])) .divider {
  cursor: col-resize;
}

:host(:not([orientation='vertical'])) .divider::after {
  display: flex;
  content: '';
  position: absolute;
  height: 100%;
  left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
  width: var(--divider-hit-area);
}

/* Vertical */
:host([orientation='vertical']) {
  flex-direction: column;
}

:host([orientation='vertical']:not([disabled])) .divider {
  cursor: row-resize;
}

:host([orientation='vertical']) .divider::after {
  content: '';
  position: absolute;
  width: 100%;
  top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
  height: var(--divider-hit-area);
}

@media (forced-colors: active) {
  .divider {
    outline: solid 1px transparent;
  }
}
`,rt=class extends M{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new te(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),hr(this,{onMove:(n,i)=>{let r=this.orientation==="vertical"?i:n;this.primary==="end"&&(r=this.size-r),this.snap&&this.snap.split(" ").forEach(o=>{let l;o.endsWith("%")?l=this.size*(parseFloat(o)/100):l=parseFloat(o),e&&this.orientation==="horizontal"&&(l=this.size-l),r>=l-this.snapThreshold&&r<=l+this.snapThreshold&&(r=l)}),this.position=Y(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const n=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&this.orientation==="horizontal"||t.key==="ArrowUp"&&this.orientation==="vertical")&&(e-=n),(t.key==="ArrowRight"&&this.orientation==="horizontal"||t.key==="ArrowDown"&&this.orientation==="vertical")&&(e+=n),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=Y(e,0,100)}}handleResize(t){const{width:e,height:n}=t[0].contentRect;this.size=this.orientation==="vertical"?n:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new yd)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",e=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",n=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.style||(this.style={}),this.primary==="end"?n&&this.orientation==="horizontal"?this.style[t]=`${i} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${i}`:n&&this.orientation==="horizontal"?this.style[t]=`${r} var(--divider-width) ${i}`:this.style[t]=`${i} var(--divider-width) ${r}`,this.style[e]="",f`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${F(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};rt.css=q0;a([A(".divider")],rt.prototype,"divider",2);a([d({type:Number,reflect:!0})],rt.prototype,"position",2);a([d({attribute:"position-in-pixels",type:Number})],rt.prototype,"positionInPixels",2);a([d({reflect:!0})],rt.prototype,"orientation",2);a([d({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);a([d()],rt.prototype,"primary",2);a([d()],rt.prototype,"snap",2);a([d({type:Number,attribute:"snap-threshold"})],rt.prototype,"snapThreshold",2);a([L("position")],rt.prototype,"handlePositionChange",1);a([L("positionInPixels")],rt.prototype,"handlePositionInPixelsChange",1);a([L("vertical")],rt.prototype,"handleVerticalChange",1);rt=a([C("wa-split-panel")],rt);var V0=`:host {
  --height: var(--wa-form-control-toggle-size);
  --width: calc(var(--height) * 1.75);
  --thumb-size: 0.75em;

  display: inline-flex;
  line-height: var(--wa-form-control-value-line-height);
}

label {
  position: relative;
  display: flex;
  align-items: center;
  font: inherit;
  color: var(--wa-form-control-value-color);
  vertical-align: middle;
  cursor: pointer;
}

.switch {
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--width);
  height: var(--height);
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
  border-radius: var(--height);
  border-style: var(--wa-form-control-border-style);
  border-width: var(--wa-form-control-border-width);
  transition-property: translate, background, border-color, box-shadow;
  transition-duration: var(--wa-transition-normal);
  transition-timing-function: var(--wa-transition-easing);
}

.switch .thumb {
  aspect-ratio: 1 / 1;
  width: var(--thumb-size);
  height: var(--thumb-size);
  background-color: var(--wa-form-control-border-color);
  border-radius: 50%;
  translate: calc((var(--width) - var(--height)) / -2);
  transition: inherit;
}

.input {
  position: absolute;
  opacity: 0;
  padding: 0;
  margin: 0;
  pointer-events: none;
}

/* Focus */
label:not(.disabled) .input:focus-visible ~ .switch .thumb {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/* Checked */
.checked .switch {
  background-color: var(--wa-form-control-activated-color);
  border-color: var(--wa-form-control-activated-color);
}

.checked .switch .thumb {
  background-color: var(--wa-color-surface-default);
  translate: calc((var(--width) - var(--height)) / 2);
}

/* Disabled */
label:has(> :disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}

[part~='label'] {
  display: inline-block;
  line-height: var(--height);
  margin-inline-start: 0.5em;
  user-select: none;
  -webkit-user-select: none;
}

:host([required]) [part~='label']::after {
  content: var(--wa-form-control-required-content);
  color: var(--wa-form-control-required-content-color);
  margin-inline-start: var(--wa-form-control-required-content-offset);
}

@media (forced-colors: active) {
  :checked:enabled + .switch:hover .thumb,
  :checked + .switch .thumb {
    background-color: ButtonText;
  }
}
`,Re=class extends fe{constructor(){super(...arguments),this.hasSlotController=new xt(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,Ms()]}get value(){return this._value??"on"}set value(t){this._value=t}firstUpdated(t){super.firstUpdated(t),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(t){super.willUpdate(t),t.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(t.has("value")||t.has("checked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}setValue(t,e){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(t??"on",e)}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,e=this.hint?!0:!!t;return f`
      <label
        part="base"
        class=${H({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${F(this.value)}
          .checked=${ki(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          aria-describedby="hint"
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch">
          <span part="thumb" class="thumb"></span>
        </span>

        <slot part="label" class="label"></slot>
      </label>

      <slot
        id="hint"
        name="hint"
        part="hint"
        class=${H({"has-slotted":e})}
        aria-hidden=${e?"false":"true"}
        >${this.hint}</slot
      >
    `}};Re.shadowRootOptions={...fe.shadowRootOptions,delegatesFocus:!0};Re.css=[ln,Ze,V0];a([A('input[type="checkbox"]')],Re.prototype,"input",2);a([d()],Re.prototype,"title",2);a([d({reflect:!0})],Re.prototype,"name",2);a([d({reflect:!0})],Re.prototype,"value",1);a([d({reflect:!0})],Re.prototype,"size",2);a([d({type:Boolean})],Re.prototype,"disabled",2);a([d({type:Boolean,attribute:!1})],Re.prototype,"checked",2);a([d({type:Boolean,attribute:"checked",reflect:!0})],Re.prototype,"defaultChecked",2);a([d({reflect:!0})],Re.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Re.prototype,"required",2);a([d({attribute:"hint"})],Re.prototype,"hint",2);a([d({attribute:"with-hint",type:Boolean})],Re.prototype,"withHint",2);a([L("defaultChecked")],Re.prototype,"handleDefaultCheckedChange",1);a([L(["checked"])],Re.prototype,"handleStateChange",1);a([L("disabled",{waitUntilFirstUpdate:!0})],Re.prototype,"handleDisabledChange",1);Re=a([C("wa-switch")],Re);var H0=class extends Event{constructor(t){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},W0=class extends Event{constructor(t){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},j0=`:host {
  --indicator-color: var(--wa-color-brand-fill-loud);
  --track-color: var(--wa-color-neutral-fill-normal);
  --track-width: 0.125rem;

  display: block;
}

.tab-group {
  display: flex;
  border-radius: 0;
}

.tabs {
  display: flex;
  position: relative;
}

.indicator {
  position: absolute;
}

.tab-group-has-scroll-controls .nav-container {
  position: relative;
  padding: 0 1.5em;
}

.body {
  display: block;
}

.scroll-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1.5em;
}

.scroll-button-start {
  inset-inline-start: 0;
}

.scroll-button-end {
  inset-inline-end: 0;
}

/*
   * Top
   */

.tab-group-top {
  flex-direction: column;
}

.tab-group-top .nav-container {
  order: 1;
}

.tab-group-top .nav {
  display: flex;
  overflow-x: auto;

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
}

/* Hide scrollbar in Chrome/Safari */
.tab-group-top .nav::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.tab-group-top .tabs {
  flex: 1 1 auto;
  position: relative;
  flex-direction: row;
  border-bottom: solid var(--track-width) var(--track-color);
}

.tab-group-top .indicator {
  bottom: calc(-1 * var(--track-width));
  border-bottom: solid var(--track-width) var(--indicator-color);
}

.tab-group-top .body {
  order: 2;
}

.tab-group-top ::slotted(wa-tab[active]) {
  border-block-end: solid var(--track-width) var(--indicator-color);
  margin-block-end: calc(-1 * var(--track-width));
}

.tab-group-top ::slotted(wa-tab-panel) {
  --padding: var(--wa-space-xl) 0;
}

/*
   * Bottom
   */

.tab-group-bottom {
  flex-direction: column;
}

.tab-group-bottom .nav-container {
  order: 2;
}

.tab-group-bottom .nav {
  display: flex;
  overflow-x: auto;

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
}

/* Hide scrollbar in Chrome/Safari */
.tab-group-bottom .nav::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.tab-group-bottom .tabs {
  flex: 1 1 auto;
  position: relative;
  flex-direction: row;
  border-top: solid var(--track-width) var(--track-color);
}

.tab-group-bottom .indicator {
  top: calc(-1 * var(--track-width));
  border-top: solid var(--track-width) var(--indicator-color);
}

.tab-group-bottom .body {
  order: 1;
}

.tab-group-bottom ::slotted(wa-tab[active]) {
  border-block-start: solid var(--track-width) var(--indicator-color);
  margin-block-start: calc(-1 * var(--track-width));
}

.tab-group-bottom ::slotted(wa-tab-panel) {
  --padding: var(--wa-space-xl) 0;
}

/*
   * Start
   */

.tab-group-start {
  flex-direction: row;
}

.tab-group-start .nav-container {
  order: 1;
}

.tab-group-start .tabs {
  flex: 0 0 auto;
  flex-direction: column;
  border-inline-end: solid var(--track-width) var(--track-color);
}

.tab-group-start .indicator {
  inset-inline-end: calc(-1 * var(--track-width));
  border-right: solid var(--track-width) var(--indicator-color);
}

.tab-group-start .body {
  flex: 1 1 auto;
  order: 2;
}

.tab-group-start ::slotted(wa-tab[active]) {
  border-inline-end: solid var(--track-width) var(--indicator-color);
  margin-inline-end: calc(-1 * var(--track-width));
}

.tab-group-start ::slotted(wa-tab-panel) {
  --padding: 0 var(--wa-space-xl);
}

/*
   * End
   */

.tab-group-end {
  flex-direction: row;
}

.tab-group-end .nav-container {
  order: 2;
}

.tab-group-end .tabs {
  flex: 0 0 auto;
  flex-direction: column;
  border-left: solid var(--track-width) var(--track-color);
}

.tab-group-end .indicator {
  inset-inline-start: calc(-1 * var(--track-width));
  border-inline-start: solid var(--track-width) var(--indicator-color);
}

.tab-group-end .body {
  flex: 1 1 auto;
  order: 1;
}

.tab-group-end ::slotted(wa-tab[active]) {
  border-inline-start: solid var(--track-width) var(--indicator-color);
  margin-inline-start: calc(-1 * var(--track-width));
}

.tab-group-end ::slotted(wa-tab-panel) {
  --padding: 0 var(--wa-space-xl);
}
`,yt=class extends M{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new te(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(n=>!["aria-labelledby","aria-controls"].includes(n.attributeName))&&setTimeout(()=>this.setAriaLabels());const e=t.filter(n=>n.target.closest("wa-tab-group")===this);if(e.some(n=>n.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(n=>n.attributeName==="active")){const i=e.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="wa-tab").map(r=>r.target).find(r=>r.active);i&&i.closest("wa-tab-group")===this&&this.setActiveTab(i)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,n)=>{if(e[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const i=this.tabs.find(r=>r.panel===this.active);i&&this.setActiveTab(i)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});n.unobserve(e[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const n=t.target.closest("wa-tab");n?.closest("wa-tab-group")===this&&n!==null&&this.setActiveTab(n,{scrollBehavior:"smooth"})}handleKeyDown(t){const n=t.target.closest("wa-tab");if(n?.closest("wa-tab-group")===this){if(["Enter"," "].includes(t.key)){n!==null&&(this.setActiveTab(n,{scrollBehavior:"smooth"}),t.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.tabs.find(l=>l.matches(":focus")),s=this.localize.dir()==="rtl";let o=null;if(r?.tagName.toLowerCase()==="wa-tab"){if(t.key==="Home")o=this.focusableTabs[0];else if(t.key==="End")o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const l=this.tabs.findIndex(c=>c===r);o=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const l=this.tabs.findIndex(c=>c===r);o=this.findNextFocusableTab(l,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===o?0:-1}),["top","bottom"].includes(this.placement)&&Ko(o,this.nav,"horizontal"),t.preventDefault()}}}}findNextFocusableTab(t,e){let n=null;const i=e==="forward"?1:-1;let r=t+i;for(;t<this.tabs.length;){if(n=this.tabs[r]||null,n===null){e==="forward"?n=this.focusableTabs[0]:n=this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;r+=i}return n}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t.closest("wa-tab-group")===this&&t!==this.activeTab&&!t.disabled){const n=this.activeTab;this.active=t.panel,this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>i.active=i.name===this.activeTab?.panel),["top","bottom"].includes(this.placement)&&Ko(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(n&&this.dispatchEvent(new H0({name:n.panel})),this.dispatchEvent(new W0({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(n=>n.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){const t=this.tabs.find(e=>e.panel===this.active);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return f`
      <div
        part="base"
        class=${H({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?f`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${t?"chevron-right":"chevron-left"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToStart")}
                  ></wa-icon>
                </wa-button>
              `:""}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${()=>this.activeTab?.focus({preventScroll:!0})}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?f`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${t?"chevron-left":"chevron-right"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToEnd")}
                  ></wa-icon>
                </wa-button>
              `:""}
        </div>

        <slot part="body" class="body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};yt.css=j0;a([A(".tab-group")],yt.prototype,"tabGroup",2);a([A(".body")],yt.prototype,"body",2);a([A(".nav")],yt.prototype,"nav",2);a([$()],yt.prototype,"hasScrollControls",2);a([d({reflect:!0})],yt.prototype,"active",2);a([d()],yt.prototype,"placement",2);a([d()],yt.prototype,"activation",2);a([d({attribute:"without-scroll-controls",type:Boolean})],yt.prototype,"withoutScrollControls",2);a([L("active")],yt.prototype,"updateActiveTab",1);a([L("withoutScrollControls",{waitUntilFirstUpdate:!0})],yt.prototype,"updateScrollControls",1);yt=a([C("wa-tab-group")],yt);var X0=`:host {
  display: inline-block;
  color: var(--wa-color-neutral-on-quiet);
  font-weight: var(--wa-font-weight-action);
}

.tab {
  display: inline-flex;
  align-items: center;
  font: inherit;
  padding: 1em 1.5em;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  transition: color var(--wa-transition-fast) var(--wa-transition-easing);

  ::slotted(wa-icon:first-child) {
    margin-inline-end: 0.5em;
  }

  ::slotted(wa-icon:last-child) {
    margin-inline-start: 0.5em;
  }
}

@media (hover: hover) {
  :host(:hover:not([disabled])) .tab {
    color: currentColor;
  }
}

:host(:focus) {
  outline: transparent;
}

:host(:focus-visible) .tab {
  outline: var(--wa-focus-ring);
  outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));
}

:host([active]:not([disabled])) {
  color: var(--wa-color-brand-on-quiet);
}

:host([disabled]) .tab {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (forced-colors: active) {
  :host([active]:not([disabled])) {
    outline: solid 1px transparent;
    outline-offset: -3px;
  }
}
`,G0=0,Wt=class extends M{constructor(){super(...arguments),this.attrId=++G0,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,f`
      <div
        part="base"
        class=${H({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};Wt.css=X0;a([A(".tab")],Wt.prototype,"tab",2);a([d({reflect:!0})],Wt.prototype,"panel",2);a([d({type:Boolean,reflect:!0})],Wt.prototype,"active",2);a([d({type:Boolean,reflect:!0})],Wt.prototype,"disabled",2);a([d({type:Number,reflect:!0})],Wt.prototype,"tabIndex",2);a([L("active")],Wt.prototype,"handleActiveChange",1);a([L("disabled")],Wt.prototype,"handleDisabledChange",1);Wt=a([C("wa-tab")],Wt);var K0=`:host {
  --padding: 0;

  display: none;
}

:host([active]) {
  display: block;
}

.tab-panel {
  display: block;
  padding: var(--padding);
}
`,Y0=0,Ai=class extends M{constructor(){super(...arguments),this.attrId=++Y0,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return f`
      <slot
        part="base"
        class=${H({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};Ai.css=K0;a([d({reflect:!0})],Ai.prototype,"name",2);a([d({type:Boolean,reflect:!0})],Ai.prototype,"active",2);a([L("active")],Ai.prototype,"handleActiveChange",1);Ai=a([C("wa-tab-panel")],Ai);var Z0=`:host {
  border-width: 0;
}

.textarea {
  display: grid;
  align-items: center;
  margin: 0;
  border: none;
  outline: none;
  cursor: inherit;
  font: inherit;
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-form-control-border-style);
  border-width: var(--wa-form-control-border-width);
  -webkit-appearance: none;

  &:focus-within {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
}

/* Appearance modifiers */
:host([appearance='outlined']) .textarea {
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
}

:host([appearance='filled']) .textarea {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-color-neutral-fill-quiet);
}

:host([appearance='filled-outlined']) .textarea {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-form-control-border-color);
}

textarea {
  display: block;
  width: 100%;
  border: none;
  background: transparent;
  font: inherit;
  color: inherit;
  padding: calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline); /* accounts for the larger line height of textarea content */
  min-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
  box-shadow: none;
  margin: 0;

  &::placeholder {
    color: var(--wa-form-control-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  &:autofill {
    &,
    &:hover,
    &:focus,
    &:active {
      box-shadow: none;
      caret-color: var(--wa-form-control-value-color);
    }
  }

  &:focus {
    outline: none;
  }
}

/* Shared textarea and size-adjuster positioning */
.control,
.size-adjuster {
  grid-area: 1 / 1 / 2 / 2;
}

.size-adjuster {
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  padding: 0;
}

textarea::-webkit-search-decoration,
textarea::-webkit-search-cancel-button,
textarea::-webkit-search-results-button,
textarea::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

/*
 * Resize types
 */

:host([resize='none']) textarea {
  resize: none;
}

textarea,
:host([resize='vertical']) textarea {
  resize: vertical;
}

:host([resize='horizontal']) textarea {
  resize: horizontal;
}

:host([resize='both']) textarea {
  resize: both;
}

:host([resize='auto']) textarea {
  height: auto;
  resize: none;
  overflow-y: hidden;
}
`,Q=class extends fe{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new xt(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Ms()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const t=this.input.value;this.value=t}})}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.checkValidity()}handleChange(t){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(t){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const t=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${t}px`}if(this.input.style.height){const t=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${t}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(t){t.has("resize")&&this.setTextareaDimensions(),super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,n="none"){this.input.setSelectionRange(t,e,n)}setRangeText(t,e,n,i="preserve"){const r=e??this.input.selectionStart,s=n??this.input.selectionEnd;this.input.setRangeText(t,r,s,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e;return f`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${n?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${F(this.name)}
          .value=${ki(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${F(this.placeholder)}
          rows=${F(this.rows)}
          minlength=${F(this.minlength)}
          maxlength=${F(this.maxlength)}
          autocapitalize=${F(this.autocapitalize)}
          autocorrect=${F(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${F(this.spellcheck)}
          enterkeyhint=${F(this.enterkeyhint)}
          inputmode=${F(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
        ></textarea>

        <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
        <div part="textarea-adjuster" class="size-adjuster" ?hidden=${this.resize!=="auto"}></div>
      </div>

      <slot
        id="hint"
        name="hint"
        part="hint"
        aria-hidden=${i?"false":"true"}
        class=${H({"has-slotted":i})}
        >${this.hint}</slot
      >
    `}};Q.css=[Z0,ln,Ze];a([A(".control")],Q.prototype,"input",2);a([A('[part~="base"]')],Q.prototype,"base",2);a([A(".size-adjuster")],Q.prototype,"sizeAdjuster",2);a([d()],Q.prototype,"title",2);a([d({reflect:!0})],Q.prototype,"name",2);a([$()],Q.prototype,"value",1);a([d({attribute:"value",reflect:!0})],Q.prototype,"defaultValue",2);a([d({reflect:!0})],Q.prototype,"size",2);a([d({reflect:!0})],Q.prototype,"appearance",2);a([d()],Q.prototype,"label",2);a([d({attribute:"hint"})],Q.prototype,"hint",2);a([d()],Q.prototype,"placeholder",2);a([d({type:Number})],Q.prototype,"rows",2);a([d({reflect:!0})],Q.prototype,"resize",2);a([d({type:Boolean})],Q.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],Q.prototype,"readonly",2);a([d({reflect:!0})],Q.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Q.prototype,"required",2);a([d({type:Number})],Q.prototype,"minlength",2);a([d({type:Number})],Q.prototype,"maxlength",2);a([d()],Q.prototype,"autocapitalize",2);a([d()],Q.prototype,"autocorrect",2);a([d()],Q.prototype,"autocomplete",2);a([d({type:Boolean})],Q.prototype,"autofocus",2);a([d()],Q.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],Q.prototype,"spellcheck",2);a([d()],Q.prototype,"inputmode",2);a([d({attribute:"with-label",type:Boolean})],Q.prototype,"withLabel",2);a([d({attribute:"with-hint",type:Boolean})],Q.prototype,"withHint",2);a([L("rows",{waitUntilFirstUpdate:!0})],Q.prototype,"handleRowsChange",1);a([L("value",{waitUntilFirstUpdate:!0})],Q.prototype,"handleValueChange",1);Q=a([C("wa-textarea")],Q);var J0=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},Q0=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}},ew=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},tw=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}},nw=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}},iw=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}},rw=`:host {
  --show-duration: 200ms;
  --hide-duration: 200ms;

  display: block;
  color: var(--wa-color-text-normal);
  outline: 0;
  z-index: 0;
}

:host(:focus) {
  outline: none;
}

slot:not([name])::slotted(wa-icon) {
  margin-inline-end: var(--wa-space-xs);
}

.tree-item {
  position: relative;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  cursor: default;
  user-select: none;
  -webkit-user-select: none;
}

.checkbox {
  line-height: var(--wa-form-control-value-line-height);
  pointer-events: none;
}

.expand-button,
.checkbox,
.label {
  font-family: inherit;
  font-size: var(--wa-font-size-m);
  font-weight: inherit;
}

.checkbox::part(base) {
  display: flex;
  align-items: center;
}

.indentation {
  display: block;
  width: 1em;
  flex-shrink: 0;
}

.expand-button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--wa-color-text-quiet);
  width: 2em;
  height: 2em;
  flex-shrink: 0;
  cursor: pointer;
}

.expand-button {
  transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
}

.tree-item-expanded .expand-button {
  rotate: 90deg;
}

.tree-item-expanded:dir(rtl) .expand-button {
  rotate: -90deg;
}

.tree-item-expanded slot[name='expand-icon'],
.tree-item:not(.tree-item-expanded) slot[name='collapse-icon'] {
  display: none;
}

.tree-item:not(.tree-item-has-expand-button) .expand-icon-slot {
  display: none;
}

.expand-button-visible {
  cursor: pointer;
}

.item {
  display: flex;
  align-items: center;
  border-inline-start: solid 3px transparent;
}

:host([disabled]) .item {
  opacity: 0.5;
  outline: none;
  cursor: not-allowed;
}

:host(:focus-visible) .item {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
  z-index: 2;
}

:host(:not([aria-disabled='true'])) .tree-item-selected .item {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-inline-start-color: var(--wa-color-brand-fill-loud);
}

:host(:not([aria-disabled='true'])) .expand-button {
  color: var(--wa-color-text-quiet);
}

.label {
  display: flex;
  align-items: center;
  transition: color var(--wa-transition-normal) var(--wa-transition-easing);
}

.children {
  display: block;
  font-size: calc(1em + var(--indent-size, var(--wa-space-m)));
}

/* Indentation lines */
.children {
  position: relative;
}

.children::before {
  content: '';
  position: absolute;
  top: var(--indent-guide-offset);
  bottom: var(--indent-guide-offset);
  inset-inline-start: calc(1em - (var(--indent-guide-width) / 2) - 1px);
  border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
  z-index: 1;
}

@media (forced-colors: active) {
  :host(:not([aria-disabled='true'])) .tree-item-selected .item {
    outline: dashed 1px SelectedItem;
  }
}
`,ie=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.dispatchEvent(new ew);const t=fs(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await ps(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.hidden=!0,this.dispatchEvent(new J0)}isNestedItem(){const t=this.parentElement;return!!t&&ie.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.dispatchEvent(new tw),this.childrenContainer.hidden=!1;const t=fs(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await ps(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.style.height="auto",this.dispatchEvent(new Q0)}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new iw)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.dispatchEvent(new nw)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(e=>ie.isTreeItem(e)&&(t||!e.disabled)):[]}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",e=!this.loading&&(!this.isLeaf||this.lazy);return f`
      <div
        part="base"
        class="${H({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-has-expand-button":e})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${H({"expand-button":!0,"expand-button-visible":e})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${Me(this.loading,()=>f` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `)}
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${Me(this.selectable,()=>f`
              <wa-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="checkbox"
                ?disabled="${this.disabled}"
                ?checked="${ki(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></wa-checkbox>
            `)}

          <slot class="label" part="label"></slot>
        </div>

        <div class="children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};ie.css=rw;a([$()],ie.prototype,"indeterminate",2);a([$()],ie.prototype,"isLeaf",2);a([$()],ie.prototype,"loading",2);a([$()],ie.prototype,"selectable",2);a([d({type:Boolean,reflect:!0})],ie.prototype,"expanded",2);a([d({type:Boolean,reflect:!0})],ie.prototype,"selected",2);a([d({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],ie.prototype,"lazy",2);a([A("slot:not([name])")],ie.prototype,"defaultSlot",2);a([A("slot[name=children]")],ie.prototype,"childrenSlot",2);a([A(".item")],ie.prototype,"itemElement",2);a([A(".children")],ie.prototype,"childrenContainer",2);a([A(".expand-button slot")],ie.prototype,"expandButtonSlot",2);a([L("loading",{waitUntilFirstUpdate:!0})],ie.prototype,"handleLoadingChange",1);a([L("disabled")],ie.prototype,"handleDisabledChange",1);a([L("expanded")],ie.prototype,"handleExpandedState",1);a([L("indeterminate")],ie.prototype,"handleIndeterminateStateChange",1);a([L("selected")],ie.prototype,"handleSelectedChange",1);a([L("expanded",{waitUntilFirstUpdate:!0})],ie.prototype,"handleExpandedChange",1);a([L("expanded",{waitUntilFirstUpdate:!0})],ie.prototype,"handleExpandAnimation",1);a([L("lazy",{waitUntilFirstUpdate:!0})],ie.prototype,"handleLazyChange",1);ie=a([C("wa-tree-item")],ie);var sw=class extends Event{constructor(t){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},ow=`:host {
  /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
  --indent-guide-color: var(--wa-color-surface-border);
  --indent-guide-offset: 0;
  --indent-guide-style: solid;
  --indent-guide-width: 0;
  --indent-size: var(--wa-space-l);

  display: block;

  /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
  font-size: 0;
}
`;function Ul(t,e=!1){function n(s){const o=s.getChildrenItems({includeDisabled:!1});if(o.length){const l=o.every(h=>h.selected),c=o.every(h=>!h.selected&&!h.indeterminate);s.selected=l,s.indeterminate=!l&&!c}}function i(s){const o=s.parentElement;ie.isTreeItem(o)&&(n(o),i(o))}function r(s){for(const o of s.getChildrenItems())o.selected=e?s.selected||o.selected:!o.disabled&&s.selected,r(o);e&&n(s)}r(t),i(t)}var An=class extends M{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new te(this),this.initTreeItem=t=>{t.updateComplete.then(()=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const n=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(n===null?t.append(i):n.hasAttribute("data-default")&&n.replaceWith(i))})})},this.handleTreeChanged=t=>{for(const e of t){const n=[...e.addedNodes].filter(ie.isTreeItem),i=[...e.removedNodes].filter(ie.isTreeItem);n.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),ie.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(t){const n=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(n){const i=n.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Ul(t);else if(this.selection==="single"||t.isLeaf){const i=this.getAllTreeItems();for(const r of i)r.selected=r===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const n=this.selectedItems;(e.length!==n.length||n.some(i=>!e.includes(i)))&&Promise.all(n.map(i=>i.updateComplete)).then(()=>{this.dispatchEvent(new sw({selection:n}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(r=>["input","textarea"].includes(r?.tagName?.toLowerCase())))return;const e=this.getFocusableItems(),n=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const r=e.findIndex(c=>c.matches(":focus")),s=e[r],o=c=>{const h=e[Y(c,0,e.length-1)];this.focusItem(h)},l=c=>{s.expanded=c};t.key==="ArrowDown"?o(r+1):t.key==="ArrowUp"?o(r-1):n&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?o(r+1):l(!0):n&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!s||s.disabled||s.isLeaf||!s.expanded?o(r-1):l(!1):t.key==="Home"?o(0):t.key==="End"?o(e.length-1):(t.key==="Enter"||t.key===" ")&&(s.disabled||this.selectItem(s))}}handleClick(t){const e=t.target,n=e.closest("wa-tree-item"),i=t.composedPath().some(r=>r?.classList?.contains("expand-button"));!n||n.disabled||e!==this.clickTarget||(i?n.expanded=!n.expanded:this.selectItem(n))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const n of e)n.updateComplete.then(()=>{n.selectable=t});t&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(n=>{n.updateComplete.then(()=>{Ul(n,!0)})}))}get selectedItems(){const t=this.getAllTreeItems(),e=n=>n.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(n=>{if(n.disabled)return!1;const i=n.parentElement?.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||e.has(i))&&e.add(n),!e.has(n)})}render(){return f`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};An.css=ow;a([A("slot:not([name])")],An.prototype,"defaultSlot",2);a([A("slot[name=expand-icon]")],An.prototype,"expandedIconSlot",2);a([A("slot[name=collapse-icon]")],An.prototype,"collapsedIconSlot",2);a([d()],An.prototype,"selection",2);a([L("selection")],An.prototype,"handleSelectionChange",1);An=a([C("wa-tree")],An);var aw=`:host {
  display: block;
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  overflow: hidden;
  border-radius: var(--wa-border-radius-m);
}

#frame-container {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% / var(--zoom));
  height: calc(100% / var(--zoom));
  transform: scale(var(--zoom));
  transform-origin: 0 0;
}

#iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: inherit;
  /* Prevent the iframe from being selected, e.g. by a double click. Doesn't affect selection withing the iframe. */
  user-select: none;
  -webkit-user-select: none;
}

#controls {
  display: flex;
  position: absolute;
  bottom: 0.5em;
  align-items: center;
  font-weight: var(--wa-font-weight-semibold);
  padding: 0.25em 0.5em;
  gap: 0.5em;
  border-radius: var(--wa-border-radius-s);
  background: #000b;
  color: white;
  font-size: min(12px, 0.75em);
  user-select: none;
  -webkit-user-select: none;

  &:dir(ltr) {
    right: 0.5em;
  }

  &:dir(rtl) {
    left: 0.5em;
  }

  button {
    display: flex;
    align-items: center;
    padding: 0.25em;
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  span {
    min-width: 4.5ch; /* extra space so numbers don't shift */
    font-variant-numeric: tabular-nums;
    text-align: center;
  }
}
`,st=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(t){const e=Pa(t),n=[];for(const i of e){let r;if(i.endsWith("%")){const s=parseFloat(i.slice(0,-1));if(!isNaN(s))r=Math.max(0,s/100);else continue}else if(r=parseFloat(i),!isNaN(r))r=Math.max(0,r);else continue;n.push(r)}return[...new Set(n)].sort((i,r)=>i-r)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let t=0,e=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let n=1;n<this.availableZoomLevels.length;n++){const i=Math.abs(this.availableZoomLevels[n]-this.zoom);i<e&&(e=i,t=n)}return t}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}updated(t){if(t.has("zoom")&&this.style.setProperty("--zoom",`${this.zoom}`),t.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){const e=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[e]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[e])}}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}const t=this.getCurrentZoomIndex();t<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[t+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}const t=this.getCurrentZoomIndex();t>0&&(this.zoom=this.availableZoomLevels[t-1])}handleLoad(){this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return f`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${F(this.sandbox??void 0)}
          src=${F(this.src??void 0)}
          srcdoc=${F(this.srcdoc??void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${this.withoutControls?"":f`
            <div id="controls" part="controls">
              <button
                part="zoom-out-button"
                aria-label=${this.localize.term("zoomOut")}
                @click=${this.zoomOut}
                ?disabled=${this.isZoomOutDisabled()}
              >
                <slot name="zoom-out-icon">
                  <wa-icon name="minus" label="Zoom out"></wa-icon>
                </slot>
              </button>
              <span>${this.localize.number(this.zoom,{style:"percent",maximumFractionDigits:1})}</span>
              <button
                part="zoom-in-button"
                aria-label=${this.localize.term("zoomIn")}
                @click=${this.zoomIn}
                ?disabled=${this.isZoomInDisabled()}
              >
                <slot name="zoom-in-icon">
                  <wa-icon name="plus" label="Zoom in"></wa-icon>
                </slot>
              </button>
            </div>
          `}
    `}};st.css=aw;a([A("#iframe")],st.prototype,"iframe",2);a([d()],st.prototype,"src",2);a([d()],st.prototype,"srcdoc",2);a([d({type:Boolean})],st.prototype,"allowfullscreen",2);a([d()],st.prototype,"loading",2);a([d()],st.prototype,"referrerpolicy",2);a([d()],st.prototype,"sandbox",2);a([d({type:Number,reflect:!0})],st.prototype,"zoom",2);a([d({attribute:"zoom-levels"})],st.prototype,"zoomLevels",2);a([d({type:Boolean,attribute:"without-controls",reflect:!0})],st.prototype,"withoutControls",2);a([d({type:Boolean,attribute:"without-interaction",reflect:!0})],st.prototype,"withoutInteraction",2);st=a([C("wa-zoomable-frame")],st);var lw=Object.defineProperty,cw=Object.getOwnPropertyDescriptor,Ma=(t,e,n,i)=>{for(var r=i>1?void 0:i?cw(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&lw(e,n,r),r};let wr=class extends yr{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return f`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};wr.styles=Le`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;Ma([d()],wr.prototype,"message",2);Ma([d()],wr.prototype,"icon",2);wr=Ma([C("k-no-content")],wr);class dw{constructor(){this.packages=[]}addPackage(e){this.packages.push(e)}hasPackages(){return this.packages.length>0&&this.packages.some(e=>e.dependencies&&Object.keys(e.dependencies).length>0)}renderTree(){return this.packages.length===0?f``:f`
            <wa-tree style="--indent-guide-width: 1px;">
                ${this.packages.map(e=>{const n=e.dependencies||{},i=Object.entries(n);return i.length===0?f``:f`
                        <wa-tree-item expanded>
                            <span>${e.name}</span>
                            ${i.map(([r,s])=>f`
                                <wa-tree-item>
                                    <span>${r} <small>${s}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    `})}
            </wa-tree>
        `}}const xs=new dw;$e.put("packageInfoService",xs);const ae="system.language_bundles",Yo="language";function hw(t,e){return e?t.replace(/\{(\w+)\}/g,(n,i)=>e[i]!==void 0?e[i]:n):t}class uw extends String{constructor(e,n,i,r){super(""),this.i18nService=e,this.namespace=n,this.key=i,this.params=r}toString(){const e=this.i18nService.currentLanguageSignal.get();return this.cachedValue!==void 0&&this.cachedLanguage===e?this.cachedValue:(this.cachedValue=this.i18nService.translate(this.namespace,this.key,this.params),this.cachedLanguage=e,this.cachedValue)}valueOf(){return this.toString()}[Symbol.toPrimitive](e){if(e==="number"){const n=Number(this.toString());return isNaN(n)?0:n}return this.toString()}toJSON(){return this.toString()}}const Md=class sr{constructor(){this.translationCache=new Map,this.currentLanguageSignal=wn(this.getBrowserLanguage()),this.languageContributionsSignal=wn([]),this.initialize()}getBrowserLanguage(){return(navigator.language||navigator.languages?.[0]||sr.DEFAULT_LANGUAGE).split("-")[0].toLowerCase()}async initializeLanguage(){return await me.get(Yo)||this.getBrowserLanguage()}async updateLanguageFromSettings(){const e=await this.initializeLanguage();this.currentLanguageSignal.set(e)}getPrimaryLanguage(e){return e.split("-")[0].toLowerCase()}updateLanguageContributions(){const e=D.getContributions(ae);this.languageContributionsSignal.set(e)}createCacheKey(e,n){return`${e}:${n}`}mergeTranslationsForLanguage(e,n,i){const r=this.createCacheKey(n,i),s=this.translationCache.get(r);if(s!==void 0)return s;const o={};for(const l of e){if(l.namespace!==n)continue;let c;l.translations&&l.language===i?c=l.translations:l[i]&&typeof l[i]=="object"&&(c=l[i]),c&&Object.assign(o,c)}return this.translationCache.set(r,o),o}invalidateTranslationCache(){this.translationCache.clear()}translate(e,n,i){const r=this.currentLanguageSignal.get(),s=this.getPrimaryLanguage(r),o=this.languageContributionsSignal.get();let l;const c=this.mergeTranslationsForLanguage(o,e,r);if(c[n])l=c[n];else{const h=r!==s?this.mergeTranslationsForLanguage(o,e,s):c;if(h[n])l=h[n];else if(s!==sr.DEFAULT_LANGUAGE&&r!==sr.DEFAULT_LANGUAGE){const u=this.mergeTranslationsForLanguage(o,e,sr.DEFAULT_LANGUAGE);u[n]&&(l=u[n])}}return l?hw(l,i):n}initialize(){Fe(Mn,async e=>{const n=e?.[Yo]||this.getBrowserLanguage();this.currentLanguageSignal.set(n),this.invalidateTranslationCache()}),Fe(jt,e=>{e.target===ae&&(this.invalidateTranslationCache(),this.updateLanguageContributions())}),this.updateLanguageFromSettings(),this.updateLanguageContributions()}i18n(e){return(n,i)=>this.translate(e,n,i)}i18nLazy(e){return(n,i)=>new uw(this,e,n,i)}};Md.DEFAULT_LANGUAGE="en";let pw=Md;const Tr=new pw;$e.put("i18nService",Tr);const Nd=Tr.currentLanguageSignal,fw=Tr.languageContributionsSignal,ni=t=>Tr.i18n(t),Se=t=>Tr.i18nLazy(t),Bl=["alt","ctrl","meta","shift"],Fd={CTRL:"ctrl",CONTROL:"ctrl",ALT:"alt",OPTION:"alt",SHIFT:"shift",META:"meta",CMD:"meta",COMMAND:"meta",WIN:"meta",WINDOWS:"meta"},mw={ctrl:"Ctrl",alt:"Alt",shift:"Shift",meta:"Cmd"},gw={SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"},bw=new Set(Object.keys(Fd));function ql(t){return gw[t]??t}class ww{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),Fe(qc,e=>{e.keyBinding&&this.registerKeyBinding(e.id,e.keyBinding)})}registerExistingCommandBindings(){const e=Xe.listCommands();Object.values(e).forEach(n=>{n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)})}parseKeyBinding(e){if(!e||e.trim()==="")return null;const n=e.toUpperCase().split("+").map(o=>o.trim());if(n.length===0)return null;const i=n[n.length-1],r=n.slice(0,-1);if(n.length===1&&bw.has(i))return null;const s={ctrl:!1,alt:!1,shift:!1,meta:!1};for(const o of r){const l=Fd[o];if(l===void 0)return null;s[l]=!0}return s.key=ql(i),s}getBindingKey(e){return[...Bl.filter(i=>e[i]),e.key.toUpperCase()].join("+")}registerKeyBinding(e,n){const i=this.parseKeyBinding(n);if(!i)return G.error(`Invalid key binding: ${n}`),!1;i.commandId=e;const r=this.getBindingKey(i);this.bindings.has(r)||this.bindings.set(r,[]);const s=this.bindings.get(r);if(s.find(c=>c.commandId===e))return G.error(`Key binding ${n} already registered for command ${e}`),!1;const l=s.find(c=>c.commandId!==e);return l?(G.warn(`Key binding ${n} already used by command ${l.commandId}; refusing for ${e}`),!1):(s.push(i),G.debug(`Key binding registered: ${n} -> ${e}`),!0)}unregisterKeyBinding(e,n){if(n){const i=this.parseKeyBinding(n);if(i){const r=this.getBindingKey(i),s=this.bindings.get(r);if(s){const o=s.filter(l=>l.commandId!==e);o.length===0?this.bindings.delete(r):this.bindings.set(r,o)}}}else for(const[i,r]of this.bindings.entries()){const s=r.filter(o=>o.commandId!==e);s.length===0?this.bindings.delete(i):this.bindings.set(i,s)}}getKeyBindingsForCommand(e){const n=[];for(const i of this.bindings.values())for(const r of i)r.commandId===e&&n.push(this.formatKeyBinding(r));return n.sort()}formatKeyBinding(e){const n=Bl.filter(r=>e[r]).map(r=>mw[r]),i=e.key.length===1?e.key.toUpperCase():e.key.charAt(0).toUpperCase()+e.key.slice(1).toLowerCase();return n.push(i),n.join("+")}handleKeyDown(e){if(!this.enabled)return;const n={commandId:"",key:ql(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},i=this.getBindingKey(n),r=this.bindings.get(i);if(r&&r.length>0){const s=r[0];try{e.preventDefault(),e.stopPropagation();const o=Xe.createExecutionContext({});Xe.execute(s.commandId,o),G.debug(`Executed command via key binding: ${s.commandId}`)}catch(o){G.error(`Failed to execute command ${s.commandId}: ${o.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){const e=new Map;for(const[n,i]of this.bindings)e.set(n,[...i]);return e}clearAll(){this.bindings.clear()}}const Ud=new ww;$e.put("keyBindingManager",Ud);const hi="events/filesys/workspaceChanged",vr="events/filesys/workspaceConnected";class ks{constructor(){this.state={}}getWorkspacePath(){const e=[];let n=this;for(;n;)e.push(n.getName()),n=n.getParent();return e.reverse(),e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const n=e.getParent();if(n)e=n;else break}return e}}var vw=(t=>(t[t.TEXT=0]="TEXT",t[t.BINARY=1]="BINARY",t))(vw||{});class _n extends ks{}class mi extends ks{}class Vl extends _n{constructor(e,n){super(),this.fileHandle=e,this.parent=n}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const n=await this.fileHandle.getFile();return!e||e?.contentType==0?await n.text():e?.encoding==0||e?.uri?URL.createObjectURL(n):e?.blob?n:n.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(e,n){const i=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(i);else{const r=i.getWriter();try{await r.write(e)}finally{await r.close()}}}async copyTo(e){const n=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(n)}async rename(e){const n=this.getParent();if(!n)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(i){throw i.name==="NotAllowedError"||i.message?.includes("not allowed")||i.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):i}await n.listChildren(!0),se(hi,this.getWorkspace())}}}class Jt extends mi{constructor(e,n){super(),this.dirHandle=e,this.parent=n}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const n={};try{for await(const i of this.dirHandle.values()){const s=i.kind==="file"?new Vl(i,this):new Jt(i,this);n[s.getName()]=s}}catch(i){if(i.name==="NotFoundError")return this.files={},[];throw i}return this.files=n,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,n){if(!e)throw new Error("No path provided");const i=e.split("/");let r=this,s=!1;try{for(let o=0;o<i.length;o++){let l=i[o];if(l&&(l=l.trim()),!l)break;if(r instanceof Jt){if(await r.listChildren(),!r.files)return null;const c=r.files[l];if(c)r=c;else if(n?.create)if(s=!0,o<i.length-1)try{const h=await r.dirHandle.getDirectoryHandle(l,{create:!0}),u=new Jt(h,r);r.files[l]=u,r=u,r instanceof Jt&&await r.listChildren();continue}catch(h){throw h.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${i.slice(0,o+1).join("/")}`):h}else try{const h=await r.dirHandle.getFileHandle(l,{create:!0}),u=new Vl(h,r);return r.files[l]=u,u}catch(h){throw h.name==="NotFoundError"?new Error(`File not found or not accessible: ${i.join("/")}`):h}else return null}}}finally{s&&se(hi,this.getWorkspace())}return r}touch(){se(hi,this.getWorkspace())}async delete(e,n=!0){if(!e){const i=this.getParent();return i instanceof Jt&&(await i.listChildren(),i.files&&delete i.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,i?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:n}).then(async()=>{this.files&&delete this.files[e],se(hi,this.getWorkspace())})}async copyTo(e){for(const n of await this.listChildren()){const i=[e,n.getName()].join("/");await n.copyTo(i)}}async rename(e){const n=this.getParent();if(!n)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(i){throw i.name==="NotAllowedError"||i.message?.includes("not allowed")||i.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):i}await n.listChildren(!0),se(hi,this.getWorkspace())}}}class yw{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(e=>{e&&se(vr,e)})}registerContribution(e){this.contributions.set(e.type,e),console.log(`Workspace contribution registered: ${e.name} (${e.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const e=await Et.getObject("workspace_data");if(!e)return;const n=this.contributions.get(e.type);if(!n){console.warn(`No contribution found for workspace type: ${e.type}`);return}try{if(n.restore){const i=await n.restore(e.data);return i&&(this.currentType=e.type),i}}catch(i){console.error(`Failed to restore workspace of type ${e.type}:`,i)}}async connectWorkspace(e){const n=Array.from(this.contributions.values()).find(o=>o.canHandle(e));if(!n)throw new Error("No workspace contribution can handle this input");const i=await n.connect(e),r=n.persist?await n.persist(i):e,s={type:n.type,data:r};return await Et.persistObject("workspace_data",s),this.currentType=n.type,this.workspace=Promise.resolve(i),se(vr,i),i}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await Et.persistObject("workspace_data",null),await Et.persistObject("workspace",null)}}const Rn=new yw;$e.put("workspaceService",Rn);Rn.registerContribution({type:"filesystem",name:"Local File System",canHandle(t){return t&&"kind"in t&&t.kind==="directory"},async connect(t){return new Jt(t)},async restore(t){if(t&&"kind"in t&&t.kind==="directory")return new Jt(t,void 0)},async persist(t){return t instanceof Jt?t.getHandle():null}});class xw{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,this.cachedIconContributions=null,Fe(vr,()=>{}),Fe(jt,e=>{e.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const e=D.getContributions("system.icons");return this.cachedIconContributions=[...e].sort((n,i)=>{const r=n.priority??0,s=i.priority??0;return s!==r?s-r:n.label.localeCompare(i.label)}),this.cachedIconContributions}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const n=s=>{const o=s.detail;o&&Array.from(o.querySelectorAll("*")).filter(c=>c instanceof pt).forEach(c=>{bt.set(c),c.isEditor&&cr.set(c)})};e.addEventListener("tab-shown",n);const i=s=>{const o=s.detail;Array.from(o.querySelectorAll("*")).filter(c=>c instanceof pt).forEach(c=>{bt.get()==c&&bt.set(null),cr.get()==c&&cr.set(null)})};e.addEventListener("tab-closed",i);const r=s=>{const l=s.closest("wa-tab-panel").getAttribute("name");e.markDirty(l,s.isDirty())};this.signalCleanup=Vc(zo,r)}registerEditorInputHandler(e){this.editorInputHandlers.push({definition:e,initialized:!1}),this.editorInputHandlers.sort((n,i)=>{const r=n.definition.ranking??0;return(i.definition.ranking??0)-r})}async ensureHandlerInitialized(e){const n=e.definition;!n.lazyInit||e.initialized||(e.lazyInitPromise||(e.lazyInitPromise=Promise.resolve(n.lazyInit()).then(()=>{e.initialized=!0,e.lazyInitPromise=void 0}).catch(i=>{throw e.lazyInitPromise=void 0,i})),await e.lazyInitPromise)}async handleInput(e){for(let n=0;n<this.editorInputHandlers.length;n++){const i=this.editorInputHandlers[n],r=i.definition;if(r.canHandle(e))return await this.ensureHandlerInitialized(i),await r.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${pn}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const n=this.getEditorArea();if(!n){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(n),n.has(e.key)){n.activate(e.key);return}n.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}getFileIcon(e){const n=e.includes(".")?e.split(".").pop()?.toLowerCase()||"":e.toLowerCase(),i=this.getSortedIconContributions();if(i.length===0)return"file";for(const r of i)if(r.mappings&&r.mappings[n])return r.mappings[n];return"file"}}const Ws=new xw;$e.put("editorRegistry",Ws);D.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});const Je=an("MarketplaceRegistry"),Hl="events/marketplaceregistry/changed",Wl="marketplace.catalogUrls";class kw{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(e=>{Je.error(`Failed to refresh catalogs on init: ${e.message}`)})})}async loadCatalogUrls(){try{const e=await me.get(Wl);this.catalogUrls=Array.isArray(e)?e:[],Je.debug(`Loaded ${this.catalogUrls.length} catalog URLs`)}catch(e){Je.error(`Failed to load catalog URLs: ${e}`),this.catalogUrls=[]}}async saveCatalogUrls(){await me.set(Wl,this.catalogUrls),se(Hl,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(e){if(!this.isValidUrl(e))throw new Error(`Invalid catalog URL: ${e}`);if(this.catalogUrls.includes(e)){Je.debug(`Catalog URL already exists: ${e}`);return}this.catalogUrls.push(e),await this.saveCatalogUrls(),Je.info(`Added catalog URL: ${e}`);try{await this.refreshCatalogs()}catch(n){Je.warn(`Failed to refresh catalogs immediately after adding: ${n}`)}}async removeCatalogUrl(e){const n=this.catalogUrls.indexOf(e);n!==-1&&(this.catalogUrls.splice(n,1),await this.saveCatalogUrls(),Je.info(`Removed catalog URL: ${e}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(e){try{const n=new URL(e);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}async fetchCatalog(e){const n=this.loadingPromises.get(e);if(n)return n;const i=(async()=>{try{Je.debug(`Fetching catalog from: ${e}`);const r=await fetch(e,{method:"GET",headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const s=await r.json();if(!s.extensions||!Array.isArray(s.extensions))throw new Error("Invalid catalog format: extensions array is required");const o={name:s.name,description:s.description,extensions:s.extensions||[]},l=o.extensions?.length||0;return Je.debug(`Successfully fetched catalog from ${e}: ${l} extensions`),o}catch(r){throw Je.error(`Failed to fetch catalog from ${e}: ${r}`),r}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,i),i}async refreshCatalogs(){Je.info(`Refreshing ${this.catalogUrls.length} catalogs...`);const e=this.catalogUrls.map(i=>this.fetchCatalog(i).catch(r=>(Je.warn(`Failed to refresh catalog ${i}: ${r.message}`),null)));(await Promise.allSettled(e)).forEach((i,r)=>{if(i.status==="fulfilled"&&i.value){const s=i.value;s.extensions&&s.extensions.forEach(o=>{if(!q.getExtensions().find(l=>l.id===o.id)){const l={...o,external:!0};q.registerExtension(l),Je.debug(`Registered marketplace extension: ${o.id}`)}})}}),se(Hl,{type:"refreshed"}),Je.info("Catalog refresh completed")}getMarketplaceExtension(e){const n=q.getExtensions().find(i=>i.id===e);if(n&&n.external)return n}isMarketplaceExtension(e){const n=q.getExtensions().find(i=>i.id===e);return n!==void 0&&n.external===!0}}const Bd=new kw;$e.put("marketplaceRegistry",Bd);const Ew="filebrowser",Cw={CONNECT_WORKSPACE:"Connect Workspace...",RELOAD_WORKSPACE:"Reload workspace folder",CREATE_NEW:"Create new...",RENAME_RESOURCE:"Rename selected resource",DELETE_RESOURCE:"Delete selected resource",OPEN:"Open",RENAME:"Rename",DELETE:"Delete",FILE:"File",FOLDER:"Folder",FILE_EXISTS_OVERWRITE:'File "{fileName}" already exists. Do you want to overwrite it?',SELECT_WORKSPACE:"Select a workspace.",DROP_FILES_HERE:"📁 Drop files here"},$w={CONNECT_WORKSPACE:"Arbeitsbereich verbinden...",RELOAD_WORKSPACE:"Arbeitsbereich-Ordner neu laden",CREATE_NEW:"Neu erstellen...",RENAME_RESOURCE:"Ausgewählte Ressource umbenennen",DELETE_RESOURCE:"Ausgewählte Ressource löschen",OPEN:"Öffnen",RENAME:"Umbenennen",DELETE:"Löschen",FILE:"Datei",FOLDER:"Ordner",FILE_EXISTS_OVERWRITE:'Die Datei "{fileName}" existiert bereits. Möchten Sie sie überschreiben?',SELECT_WORKSPACE:"Wählen Sie einen Arbeitsbereich aus.",DROP_FILES_HERE:"📁 Dateien hier ablegen"},Sw={namespace:Ew,en:Cw,de:$w},Aw="extensions",_w={FILTER_PLACEHOLDER:"Filter extensions...",INSTALLED:"Installed",AVAILABLE:"Available",NO_MATCHES:'No extensions match "{filterText}"',EXTERNAL_EXTENSION:"External Extension",UNINSTALL:"Uninstall (requires restart)",REQUIRED_HINT:"This extension is required by the current app and cannot be uninstalled",INSTALL:"Install",EXPERIMENTAL:"This is an experimental extension!",VERSION:"Version:",AUTHOR:"Author:",DEPENDENCIES:"Dependencies",NOT_INSTALLED:"Not Installed",DEPENDENCIES_HINT:"Dependencies are automatically installed when this extension is enabled.",DISABLE_TITLE:"Disable this extension",ENABLE_TITLE:"Enable this extension"},Tw={FILTER_PLACEHOLDER:"Erweiterungen filtern...",INSTALLED:"Installiert",AVAILABLE:"Verfügbar",NO_MATCHES:'Keine Erweiterungen entsprechen "{filterText}"',EXTERNAL_EXTENSION:"Externe Erweiterung",UNINSTALL:"Deinstallieren (Neustart erforderlich)",REQUIRED_HINT:"Diese Erweiterung ist für die aktuelle App erforderlich und kann nicht deinstalliert werden",INSTALL:"Installieren",EXPERIMENTAL:"Dies ist eine experimentelle Erweiterung!",VERSION:"Version:",AUTHOR:"Autor:",DEPENDENCIES:"Abhängigkeiten",NOT_INSTALLED:"Nicht installiert",DEPENDENCIES_HINT:"Abhängigkeiten werden automatisch installiert, wenn diese Erweiterung aktiviert wird.",DISABLE_TITLE:"Diese Erweiterung deaktivieren",ENABLE_TITLE:"Diese Erweiterung aktivieren"},Rw={namespace:Aw,en:_w,de:Tw},Lw="tasks",Iw={ACTIVE_TASKS:"Active Tasks",ACTIVE_TASKS_TITLE:"Active tasks: {taskCount}. Click to view details."},Ow={ACTIVE_TASKS:"Aktive Aufgaben",ACTIVE_TASKS_TITLE:"Aktive Aufgaben: {taskCount}. Klicken Sie, um Details anzuzeigen."},Dw={namespace:Lw,en:Iw,de:Ow},zw="workspace",Pw={NO_WORKSPACE:"<no workspace>",LOAD_WORKSPACE:"Load workspace"},Mw={NO_WORKSPACE:"<kein Arbeitsbereich>",LOAD_WORKSPACE:"Arbeitsbereich laden"},Nw={namespace:zw,en:Pw,de:Mw},Fw="fastviews",Uw={FAST_VIEWS:"Fast Views"},Bw={FAST_VIEWS:"Schnellansichten"},qw={namespace:Fw,en:Uw,de:Bw},Vw="logterminal",Hw={ALL_LOGS:"All logs",ALL:"All",INFO_LOGS:"Info logs",INFO:"Info",WARNING_LOGS:"Warning logs",WARNINGS:"Warnings",ERROR_LOGS:"Error logs",ERRORS:"Errors",DEBUG_LOGS:"Debug logs",DEBUG:"Debug",AUTO_SCROLL_ENABLED:"Auto-scroll enabled",AUTO_SCROLL_DISABLED:"Auto-scroll disabled",AUTO_SCROLL:"Auto-scroll",MANUAL:"Manual",CLEAR_LOGS:"Clear logs",CLEAR:"Clear",NO_LOG_MESSAGES:"No log messages"},Ww={ALL_LOGS:"Alle Protokolle",ALL:"Alle",INFO_LOGS:"Info-Protokolle",INFO:"Info",WARNING_LOGS:"Warnungsprotokolle",WARNINGS:"Warnungen",ERROR_LOGS:"Fehlerprotokolle",ERRORS:"Fehler",DEBUG_LOGS:"Debug-Protokolle",DEBUG:"Debug",AUTO_SCROLL_ENABLED:"Automatisches Scrollen aktiviert",AUTO_SCROLL_DISABLED:"Automatisches Scrollen deaktiviert",AUTO_SCROLL:"Automatisches Scrollen",MANUAL:"Manuell",CLEAR_LOGS:"Protokolle löschen",CLEAR:"Löschen",NO_LOG_MESSAGES:"Keine Protokollnachrichten"},jw={namespace:Vw,en:Hw,de:Ww},Xw="partname",Gw={NO_PART:"<no part>",ACTIVE_PART:"Active part"},Kw={NO_PART:"<kein Bereich>",ACTIVE_PART:"Aktiver Bereich"},Yw={namespace:Xw,en:Gw,de:Kw};D.registerContribution(ae,Sw);D.registerContribution(ae,Rw);D.registerContribution(ae,Dw);D.registerContribution(ae,Nw);D.registerContribution(ae,qw);D.registerContribution(ae,jw);D.registerContribution(ae,Yw);const jl=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);var Zw=Object.defineProperty,Jw=Object.getOwnPropertyDescriptor,qd=(t,e,n,i)=>{for(var r=i>1?void 0:i?Jw(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Zw(e,n,r),r};const Qe=ni("filebrowser");let Es=class extends pt{constructor(){super(...arguments),this.treeRef=bn(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),Fe(jt,t=>{t.target==="system.icons"&&this.requestUpdate()}),this.subscribe(hi,t=>this.onWorkspaceChanged(t)),this.subscribe(vr,t=>this.onWorkspaceConnected(t))}firstUpdated(t){super.firstUpdated(t),this.setupDragAndDrop()}updated(t){super.updated(t),t.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const t=await Rn.getWorkspace();t?await this.loadWorkspace(t):Xe.execute("help")}renderToolbar(){const t=Dn.get()instanceof ks;return f`
            <k-command icon="folder-open" title="${Qe("CONNECT_WORKSPACE")}" dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="${Qe("RELOAD_WORKSPACE")}"></k-command>
            <k-command cmd="create_file" icon="plus" title="${Qe("CREATE_NEW")}" dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t} title="${Qe("RENAME_RESOURCE")}"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t} title="${Qe("DELETE_RESOURCE")}"></k-command>
        `}renderContextMenu(){const t=Dn.get()instanceof ks;return f`
            <k-command cmd="open_editor" icon="folder-open">${Qe("OPEN")}</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">${Qe("CREATE_NEW")}</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t}>${Qe("RENAME")}</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t}>${Qe("DELETE")}</k-command>
        `}async onWorkspaceChanged(t){Dn.set(void 0),await this.loadWorkspace(t),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t,!0):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&Dn.set(e[0].model?.data)}async resourceToTreeNode(t,e=!1){const n=t instanceof _n,i={data:t,label:t.getName(),leaf:n,children:[]};if(t instanceof mi&&e){for(const r of await t.listChildren(!1)){const s=await this.resourceToTreeNode(r,!1);i.children.push(s)}i.children.sort(jl)}return i}createTreeItems(t,e=!1){if(!t)return f``;const n=!t.leaf&&t.children.length===0,i=t.data,r=i instanceof _n,s=r?Ws.getFileIcon(i.getName()):t.icon||"folder-open";return f`
            <wa-tree-item 
                draggable=${r}
                @dragstart=${r?this.nobubble(o=>this.onDragStart(o,i)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(o=>this.onLazyLoad(o,t))}
                .model=${t} 
                ?expanded=${e}
                ?lazy=${n}>
                <span><wa-icon name=${s} label="${t.leaf?Qe("FILE"):Qe("FOLDER")}"></wa-icon> ${t.label}</span>
                ${t.children.map(o=>this.createTreeItems(o,!1))}
            </wa-tree-item>`}onDragStart(t,e){if(!t.dataTransfer)return;const n=e.getWorkspacePath(),i=e.getName();if(t.dataTransfer.effectAllowed="copy",t.dataTransfer.setData("text/plain",n),t.dataTransfer.setData("application/x-workspace-file",n),t.dataTransfer.setData("text/uri-list",n),t.dataTransfer.setDragImage){const r=document.createElement("div");r.textContent=i,r.style.position="absolute",r.style.top="-1000px",r.style.padding="4px 8px",r.style.background="var(--wa-color-neutral-10)",r.style.border="1px solid var(--wa-color-neutral-30)",r.style.borderRadius="4px",document.body.appendChild(r),t.dataTransfer.setDragImage(r,0,0),setTimeout(()=>document.body.removeChild(r),0)}}async onLazyLoad(t,e){const n=e.data;n instanceof mi&&e.children.length===0&&await this.loadNodeChildren(e,n)}async loadNodeChildren(t,e){if(!this.loadingNodes.has(t)){this.loadingNodes.add(t);try{for(const n of await e.listChildren(!1)){cd&&n.getName().startsWith(".");const i=await this.resourceToTreeNode(n,!1);t.children.push(i)}t.children.sort(jl),this.requestUpdate()}catch(n){console.error("Failed to load directory children:",n)}finally{this.loadingNodes.delete(t)}}}async onFileDoubleClicked(t){const n=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:n})}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const n=e[0].model;Dn.set(n.data)}else Dn.set(void 0)}setupDragAndDrop(){const t=this.treeRef.value;if(!t)return;const e=s=>{if(!s.dataTransfer?.types.includes("Files"))return;s.preventDefault(),s.dataTransfer.dropEffect="copy",t.classList.add("drag-over");const l=s.target.closest("wa-tree-item");l&&l!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=l,l.classList.add("drop-target"))},n=s=>{s.dataTransfer?.types.includes("Files")&&(s.preventDefault(),t.classList.add("drag-over"))},i=s=>{const o=t.getBoundingClientRect(),l=s.clientX,c=s.clientY;(l<=o.left||l>=o.right||c<=o.top||c>=o.bottom)&&(t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},r=async s=>{if(s.preventDefault(),t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!s.dataTransfer||!this.workspaceDir)return;const o=Array.from(s.dataTransfer.files);if(o.length===0)return;const l=await this.getDropTarget(s);await this.handleFilesDrop(o,l)};t.removeEventListener("dragover",e),t.removeEventListener("dragenter",n),t.removeEventListener("dragleave",i),t.removeEventListener("drop",r),t.addEventListener("dragover",e),t.addEventListener("dragenter",n),t.addEventListener("dragleave",i),t.addEventListener("drop",r)}async getDropTarget(t){const n=t.target.closest("wa-tree-item");if(n){const r=n.model.data;if(r instanceof mi)return r;const s=r.getParent();if(s)return s}return this.workspaceDir}async handleFilesDrop(t,e){const n=t.length;let i=0,r=0,s=0;for(const o of t)try{const l=this.buildTargetPath(e,o.name);if(await this.workspaceDir.getResource(l)&&!await Ps(Qe("FILE_EXISTS_OVERWRITE",{fileName:o.name}))){s++;continue}await(await this.workspaceDir.getResource(l,{create:!0})).saveContents(o),i++}catch(l){console.error(`Failed to upload ${o.name}:`,l),r++}console.log(`Uploaded ${i}/${n} files${s>0?`, ${s} skipped`:""}${r>0?`, ${r} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(t,e){const n=t.getWorkspacePath();return n?`${n}/${e}`:e}render(){return f`
            <div class="tree" ${tn(this.treeRef)} style="--drop-files-text: '${Qe("DROP_FILES_HERE")}'">
                ${Me(!this.workspaceDir,()=>f`
                    <k-no-content message="${Qe("SELECT_WORKSPACE")}"></k-no-content>`,()=>f`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};Es.styles=Le`
        :host {
        }
        
        .tree {
            height: 100%;
            position: relative;
            transition: all 0.2s ease;
        }
        
        .tree.drag-over {
            background-color: var(--wa-color-brand-fill-quiet);
            outline: 2px dashed var(--wa-color-brand-border-normal);
            outline-offset: -4px;
            border-radius: var(--wa-border-radius-medium);
        }
        
        .tree.drag-over::before {
            content: var(--drop-files-text);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            padding: var(--wa-spacing-large);
            border-radius: var(--wa-border-radius-large);
            font-weight: bold;
            pointer-events: none;
            z-index: 1000;
            opacity: 0.3;
        }
        
        wa-tree-item.drop-target {
            background-color: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            border-radius: var(--wa-border-radius-small);
            outline: 2px solid var(--wa-color-brand-border-loud);
            outline-offset: -2px;
        }
    `;qd([$()],Es.prototype,"root",2);Es=qd([C("k-filebrowser")],Es);var Qw=Object.getOwnPropertyDescriptor,ev=(t,e,n,i)=>{for(var r=i>1?void 0:i?Qw(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};const Zo=ni("tasks");D.registerContribution(Os,{html:"<k-tasks></k-tasks>"});let Qi=null;function Vd(){return Qi||(Qi=document.createElement("div"),Qi.id="progress-dialog-container",document.body.appendChild(Qi)),Qi}function Xl(){return Vd().querySelector("wa-dialog")}function tv(){Hd(!0)}function Hd(t=!1){const e=Vd(),n=wi.getActiveTasks();if(n.length===0){gt(f``,e);return}const r=Xl();if(!(t||r?.open===!0))return;const o=()=>{const h=Xl();h&&(h.open=!1)},l=()=>{gt(f``,e)},c=f`
        <wa-dialog 
            label="${Zo("ACTIVE_TASKS")}" 
            open
            light-dismiss
            style="--width: 600px;"
            @wa-request-close=${o}
            @wa-after-hide=${l}
        >
            <style>
                .progress-dialog-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                
                .task-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: var(--wa-color-neutral-10);
                    border-radius: 8px;
                    border: 1px solid var(--wa-color-neutral-20);
                }
                
                :host-context(.wa-light) .task-item {
                    background: var(--wa-color-neutral-95);
                    border: 1px solid var(--wa-color-neutral-85);
                }
                
                .task-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .task-name {
                    font-weight: 600;
                    font-size: 1rem;
                    color: var(--wa-color-neutral-90);
                }
                
                :host-context(.wa-light) .task-name {
                    color: var(--wa-color-neutral-10);
                }
                
                .task-message {
                    font-size: 0.875rem;
                    color: var(--wa-color-neutral-70);
                    margin-top: 0.25rem;
                }
                
                :host-context(.wa-light) .task-message {
                    color: var(--wa-color-neutral-30);
                }
                
                .task-progress {
                    margin-top: 0.5rem;
                }
                
                wa-progress-bar {
                    --track-height: 1.5rem;
                }
                
                wa-progress-bar::part(label) {
                    text-align: center;
                    width: 100%;
                    font-size: 0.875rem;
                }
                
                .no-tasks {
                    text-align: center;
                    padding: 2rem;
                    color: var(--wa-color-neutral-60);
                }
                
                :host-context(.wa-light) .no-tasks {
                    color: var(--wa-color-neutral-40);
                }
            </style>
            
            <div class="progress-dialog-content">
                ${n.map(h=>{const u=h.progress>=0||h.totalSteps>0,p=h.progress>=0?h.progress:h.totalSteps>0?Math.round(h.currentStep/h.totalSteps*100):0,g=h.progress<0&&h.totalSteps>0;return f`
                        <div class="task-item">
                            <div class="task-header">
                                <wa-icon name="hourglass" style="color: var(--wa-color-warning-fill-loud);"></wa-icon>
                                <div style="flex: 1;">
                                    <div class="task-name">${h.name}</div>
                                    ${h.message?f`
                                        <div class="task-message">${h.message}</div>
                                    `:""}
                                </div>
                            </div>
                            <div class="task-progress">
                                ${u?f`
                                    <wa-progress-bar value="${p}">
                                        ${g?`${h.currentStep}/${h.totalSteps} - `:""}${p}%
                                    </wa-progress-bar>
                                `:f`
                                    <wa-progress-bar indeterminate></wa-progress-bar>
                                `}
                            </div>
                        </div>
                    `})}
            </div>
        </wa-dialog>
    `;gt(c,e)}let Jo=class extends pt{doBeforeUI(){this.watch(Po,()=>{Hd(),this.requestUpdate()})}handleIndicatorClick(){tv()}render(){Po.get();const e=wi.getActiveTasks().length;return e===0?f``:f`
            <div class="task-indicator" @click=${this.handleIndicatorClick} title="${Zo("ACTIVE_TASKS_TITLE",{taskCount:e.toString()})}">
                <wa-spinner 
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);" 
                    label="${Zo("ACTIVE_TASKS")}"
                ></wa-spinner>
                <span class="task-count">${e}</span>
            </div>
        `}};Jo.styles=Le`
        :host {
            display: flex;
            align-items: center;
        }
        
        .task-indicator {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        
        .task-indicator:hover {
            background: var(--wa-color-neutral-15);
        }
        
        :host-context(.wa-light) .task-indicator:hover {
            background: var(--wa-color-neutral-85);
        }
        
        .task-count {
            font-size: 0.875rem;
            color: var(--wa-color-neutral-70);
        }
        
        :host-context(.wa-light) .task-count {
            color: var(--wa-color-neutral-30);
        }
    `;Jo=ev([C("k-tasks")],Jo);var nv=Object.getOwnPropertyDescriptor,iv=(t,e,n,i)=>{for(var r=i>1?void 0:i?nv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};const $o=ni("workspace");let Gl=class extends Xt{constructor(){super(...arguments),this.workspaceName=$o("NO_WORKSPACE")}doInitUI(){this.updateWorkspaceName(),Fe(vr,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Rn.getWorkspace().then(t=>{this.workspaceName=t?.getName()||$o("NO_WORKSPACE"),this.requestUpdate()})}handleLoadWorkspace(){Xe.execute("load_workspace",{source:this})}render(){return f`
            <wa-button 
                appearance="plain"
                size="small"
                title="${$o("LOAD_WORKSPACE")}"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};Gl=iv([C("k-workspace-name")],Gl);var rv=Object.getOwnPropertyDescriptor,sv=(t,e,n,i)=>{for(var r=i>1?void 0:i?rv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};const So=ni("partname");D.registerContribution(Os,{html:"<k-part-name></k-part-name>"});let Kl=class extends Xt{doBeforeUI(){this.watch(bt,()=>{this.requestUpdate()})}getPartName(){const t=bt.get();return t&&(t.tabContribution?.label||t.getAttribute("id"))||So("NO_PART")}render(){const e=bt.get()?.tabContribution?.icon||"box";return f`
            <wa-button 
                appearance="plain"
                size="small"
                title="${So("ACTIVE_PART")}">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};Kl=sv([C("k-part-name")],Kl);var ov=Object.defineProperty,av=Object.getOwnPropertyDescriptor,Rr=(t,e,n,i)=>{for(var r=i>1?void 0:i?av(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&ov(e,n,r),r};const lv=an("KExtensions"),ze=ni("extensions");let Gn=class extends pt{constructor(){super(...arguments),this.filterText="",this.showRegisterDialog=!1,this.registerExtensionData={}}doInitUI(){Fe(ir,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){q.enable(t.id,!0),this.requestUpdate()}disable(t){q.disable(t.id,!0),this.requestUpdate()}isExtensionRequired(t){const e=mt.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(t)}selectionChanged(t){const e=t.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return q.getExtensions();const t=this.filterText.toLowerCase();return q.getExtensions().filter(e=>String(e.name).toLowerCase().includes(t)||(e.description?String(e.description).toLowerCase().includes(t):!1)||e.id.toLowerCase().includes(t))}getGroupedExtensions(){const t=this.getFilteredExtensions(),e=[],n=[];return t.forEach(i=>{q.isEnabled(i.id)?e.push(i):n.push(i)}),e.sort((i,r)=>String(i.name).localeCompare(String(r.name))),n.sort((i,r)=>String(i.name).localeCompare(String(r.name))),{enabled:e,available:n}}isExternalExtension(t){return t.external===!0}handleFilterInput(t){this.filterText=t.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}async handleRegisterExtension(){try{const t=await Sa("Enter extension URL or source identifier:","",!1);if(!t)return;await wi.runAsync("Registering extension",async()=>{let e=t;Mt.isGitHubUrl(t)&&(e=Mt.convertGitHubUrlToSource(t));const n=Mt.parseSource(e);n?.type==="github"?await this.fetchGitHubMetadata(n,e):(this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate())})}catch(t){de(`Failed to register extension: ${t}`)}}async fetchGitHubMetadata(t,e){try{const n=await Mt.fetchGitHubPackageJson(t),i=t.owner,r=t.repo,s=n.name||`ext.${i}-${r}`,o=n.name||`${i}/${r}`,l=n.description||"",c=n.version||"",h=n.author||(typeof n.author=="string"?n.author:n.author?.name)||"";this.registerExtensionData={id:s,name:o,description:l,url:e,version:c,author:h,icon:"puzzle-piece",external:!0},this.showRegisterDialog=!0,this.requestUpdate()}catch(n){lv.warn(`Could not fetch package.json, using defaults: ${n}`),this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate()}}async confirmRegisterExtension(){if(!this.registerExtensionData.url){de("URL is required");return}if(!this.registerExtensionData.id){de("Extension ID is required");return}if(!this.registerExtensionData.name){de("Extension name is required");return}try{await wi.runAsync("Registering extension",async()=>{const t={id:this.registerExtensionData.id,name:this.registerExtensionData.name,description:this.registerExtensionData.description,url:this.registerExtensionData.url,version:this.registerExtensionData.version,author:this.registerExtensionData.author,icon:this.registerExtensionData.icon||"puzzle-piece",external:!0};q.registerExtension(t),await q.loadExtensionFromUrl(this.registerExtensionData.url,t.id),Nt(`Extension ${t.name} registered successfully`),this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()})}catch(t){de(`Failed to register extension: ${t}`)}}cancelRegisterExtension(){this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()}renderToolbar(){return f`
            <wa-input
                placeholder="${ze("FILTER_PLACEHOLDER")}"
                .value=${this.filterText}
                @input=${t=>this.handleFilterInput(t)}
                @wa-clear=${()=>this.clearFilter()}
                with-clear
                size="small"
                style="width: 300px;">
                <wa-icon slot="start" name="magnifying-glass" label="Filter"></wa-icon>
            </wa-input>
            <wa-button 
                variant="primary" 
                appearance="plain"
                @click=${()=>this.handleRegisterExtension()}
                title="Register a new extension">
                <wa-icon name="plus" label="Add"></wa-icon>
                Register Extension
            </wa-button>
        `}render(){const t=this.getGroupedExtensions(),e=t.enabled.length>0||t.available.length>0;return f`
            ${Me(this.showRegisterDialog,()=>f`
                <wa-dialog 
                    label="Register Extension"
                    open
                    @wa-request-close=${()=>this.cancelRegisterExtension()}
                    style="--wa-dialog-width: 500px;">
                    <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem;">
                        <wa-input
                            label="Extension ID *"
                            .value=${this.registerExtensionData.id||""}
                            @input=${n=>{this.registerExtensionData.id=n.target.value,this.requestUpdate()}}
                            required
                            hint="Unique identifier for the extension (e.g., 'ext.my-extension')">
                        </wa-input>
                        
                        <wa-input
                            label="Name *"
                            .value=${this.registerExtensionData.name||""}
                            @input=${n=>{this.registerExtensionData.name=n.target.value,this.requestUpdate()}}
                            required
                            hint="Display name of the extension">
                        </wa-input>
                        
                        <wa-input
                            label="Description"
                            .value=${this.registerExtensionData.description||""}
                            @input=${n=>{this.registerExtensionData.description=n.target.value,this.requestUpdate()}}
                            hint="Description of what the extension does">
                        </wa-input>
                        
                        <wa-input
                            label="URL *"
                            .value=${this.registerExtensionData.url||""}
                            @input=${n=>{this.registerExtensionData.url=n.target.value,this.requestUpdate()}}
                            required
                            readonly
                            hint="Extension source URL or identifier">
                        </wa-input>
                        
                        <div style="display: flex; gap: 0.5rem;">
                            <wa-input
                                label="Version"
                                .value=${this.registerExtensionData.version||""}
                                @input=${n=>{this.registerExtensionData.version=n.target.value,this.requestUpdate()}}
                                style="flex: 1;"
                                hint="Extension version">
                            </wa-input>
                            
                            <wa-input
                                label="Author"
                                .value=${this.registerExtensionData.author||""}
                                @input=${n=>{this.registerExtensionData.author=n.target.value,this.requestUpdate()}}
                                style="flex: 1;"
                                hint="Extension author">
                            </wa-input>
                        </div>
                        
                        <wa-input
                            label="Icon"
                            .value=${this.registerExtensionData.icon||"puzzle-piece"}
                            @input=${n=>{this.registerExtensionData.icon=n.target.value,this.requestUpdate()}}
                            hint="Icon name (FontAwesome icon)">
                        </wa-input>
                        
                        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem;">
                            <wa-button 
                                variant="default" 
                                @click=${()=>this.cancelRegisterExtension()}>
                                Cancel
                            </wa-button>
                            <wa-button 
                                variant="primary" 
                                @click=${()=>this.confirmRegisterExtension()}
                                ?disabled=${!this.registerExtensionData.id||!this.registerExtensionData.name||!this.registerExtensionData.url}>
                                Register
                            </wa-button>
                        </div>
                    </div>
                </wa-dialog>
            `)}
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree 
                    selection="leaf"
                    style="--indent-guide-width: 1px;" 
                    slot="start"
                    @wa-selection-change="${this.selectionChanged}">
                    ${e?f`
                        ${t.enabled.length>0?f`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                    ${ze("INSTALLED")} (${t.enabled.length})
                                </span>
                                ${t.enabled.map(n=>{const i=this.isExternalExtension(n);return f`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${n}>
                                            <span><k-icon name="${n.icon}"></k-icon></span> ${n.name}${i?f` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                        </wa-tree-item>
                                    `})}
                            </wa-tree-item>
                        `:""}
                        ${t.available.length>0?f`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    ${ze("AVAILABLE")} (${t.available.length})
                                </span>
                                ${t.available.map(n=>{const i=this.isExternalExtension(n);return f`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${n}>
                                            <span><k-icon name="${n.icon}"></k-icon></span> ${n.name}${i?f` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                        </wa-tree-item>
                                    `})}
                            </wa-tree-item>
                        `:""}
                    `:""}
                    ${e?"":f`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            ${ze("NO_MATCHES",{filterText:this.filterText})}
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${Me(this.selectedExtension,n=>{const i=this.isExternalExtension(n),r=q.isEnabled(n.id);return f`
                                <h1><k-icon name="${n.icon}"></k-icon> ${n.name}${i?" (External)":""}</h1>
                                ${Me(i,()=>f`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${ze("EXTERNAL_EXTENSION")}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${Me(r,()=>f`
                                        <wa-button 
                                            title="${this.isExtensionRequired(n.id)?ze("REQUIRED_HINT"):ze("DISABLE_TITLE")}" 
                                            @click="${()=>this.disable(n)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(n.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${ze("UNINSTALL")}
                                        </wa-button>
                                        ${Me(this.isExtensionRequired(n.id),()=>f`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>${ze("REQUIRED_HINT")}</span>
                                            </div>
                                        `)}
                                    `,()=>f`
                                        <wa-button 
                                            title="${ze("ENABLE_TITLE")}" 
                                            @click="${()=>this.enable(n)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;${ze("INSTALL")}
                                        </wa-button>
                                    `)}
                                </div>

                                ${Me(n.experimental,()=>f`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${ze("EXPERIMENTAL")}</i></small>
                                    </div>
                                `)}

                                ${Me(n.version||n.author,()=>f`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${Me(n.version,()=>f`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${ze("VERSION")} <strong>${n.version}</strong></span>
                                            </div>
                                        `)}
                                        ${Me(n.author,()=>f`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${ze("AUTHOR")} <strong>${n.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${n.description}</p>

                                ${Me(n.dependencies&&n.dependencies.length>0,()=>f`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${ze("DEPENDENCIES")}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${n.dependencies.map(s=>{const o=q.getExtensions().find(c=>c.id===s),l=q.isEnabled(s);return f`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${l?"check-circle":"circle"}" 
                                                            style="color: ${l?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        <k-icon name="${o?.icon||"puzzle-piece"}"></k-icon>
                                                        <span>${o?.name||s}</span>
                                                        ${l?"":f`
                                                            <span class="dependency-badge">${ze("NOT_INSTALLED")}</span>
                                                        `}
                                                    </div>
                                                `})}
                                        </div>
                                        <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                            <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                            ${ze("DEPENDENCIES_HINT")}
                                        </small>
                                    </div>
                                `)}
                            `})}
                </div>
            </wa-split-panel>
        `}};Gn.styles=Le`
        :host {
        }

        wa-tree-item > span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        wa-tree-item:has(> wa-tree-item) {
            font-weight: 500;
        }

        .dependencies-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .dependency-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-surface-variant);
        }

        .dependency-item wa-icon:first-child {
            flex-shrink: 0;
        }

        .dependency-item k-icon {
            flex-shrink: 0;
        }

        .dependency-item span:not(.dependency-badge) {
            flex: 1;
        }

        .dependency-badge {
            font-size: 0.85rem;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-warning-100);
            color: var(--wa-color-warning-900);
        }

        .required-hint {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.75rem;
            padding: 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-primary-10);
            color: var(--wa-color-primary-70);
            font-size: 0.875rem;
        }

        .required-hint wa-icon {
            flex-shrink: 0;
        }

        .required-hint span {
            line-height: 1.4;
        }

        .marketplace-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.375rem 0.875rem;
            border-radius: 4px;
            background: var(--wa-color-primary-10);
            color: var(--wa-color-primary-70);
            font-size: 0.875rem;
            font-weight: 500;
            margin-top: 0.75rem;
            margin-bottom: 0.5rem;
            border: 1px solid var(--wa-color-primary-30);
        }
    `;Rr([$()],Gn.prototype,"selectedExtension",2);Rr([$()],Gn.prototype,"filterText",2);Rr([$()],Gn.prototype,"showRegisterDialog",2);Rr([$()],Gn.prototype,"registerExtensionData",2);Gn=Rr([C("k-extensions")],Gn);var cv=Object.defineProperty,dv=Object.getOwnPropertyDescriptor,js=(t,e,n,i)=>{for(var r=i>1?void 0:i?dv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&cv(e,n,r),r};const Pe=ni("logterminal");let _i=class extends pt{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=bn()}connectedCallback(){super.connectedCallback(),this.loadSettings(),Gf(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Kf()}log(t,e,n="info"){const i={timestamp:new Date,level:n,source:t,message:e};this.messages=[...this.messages,i],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const r=this.containerRef.value;r&&(r.scrollTop=r.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const t=this.messages.filter(r=>r.level==="info").length,e=this.messages.filter(r=>r.level==="warning").length,n=this.messages.filter(r=>r.level==="error").length,i=this.messages.filter(r=>r.level==="debug").length;return f`
            <k-command 
                icon="list"
                title="${Pe("ALL_LOGS")}"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings(),this.updateToolbar()}}>
                ${Pe("ALL")} (${this.messages.length})
            </k-command>

            <k-command 
                icon="circle-info"
                title="${Pe("INFO_LOGS")}"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings(),this.updateToolbar()}}>
                ${Pe("INFO")}${t>0?` (${t})`:""}
            </k-command>

            <k-command 
                icon="triangle-exclamation"
                title="${Pe("WARNING_LOGS")}"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings(),this.updateToolbar()}}>
                ${Pe("WARNINGS")}${e>0?` (${e})`:""}
            </k-command>

            <k-command 
                icon="circle-xmark"
                title="${Pe("ERROR_LOGS")}"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings(),this.updateToolbar()}}>
                ${Pe("ERRORS")}${n>0?` (${n})`:""}
            </k-command>

            <k-command 
                icon="bug"
                title="${Pe("DEBUG_LOGS")}"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings(),this.updateToolbar()}}>
                ${Pe("DEBUG")}${i>0?` (${i})`:""}
            </k-command>

            <wa-divider orientation="vertical"></wa-divider>

            <k-command 
                icon="arrow-down" 
                title="${this.autoScroll?Pe("AUTO_SCROLL_ENABLED"):Pe("AUTO_SCROLL_DISABLED")}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings(),this.updateToolbar()}}>
                ${this.autoScroll?Pe("AUTO_SCROLL"):Pe("MANUAL")}
            </k-command>

            <k-command 
                icon="trash" 
                title="${Pe("CLEAR_LOGS")}"
                .action=${()=>this.clear()}>
                ${Pe("CLEAR")}
            </k-command>
        `}render(){const t=this.getFilteredMessages();return f`
            <div class="log-terminal">
                <div class="messages" ${tn(this.containerRef)}>
                    ${t.length===0?f`<div class="empty-state">${Pe("NO_LOG_MESSAGES")}</div>`:t.map(e=>f`
                            <div class="message" data-level="${e.level}">
                                <span class="timestamp">${this.formatTimestamp(e.timestamp)}</span>
                                <wa-icon 
                                    name="${this.getLevelIcon(e.level)}" 
                                    label="${e.level}"
                                    style="color: ${this.getLevelColor(e.level)}">
                                </wa-icon>
                                <span class="source">[${e.source}]</span>
                                <span class="text">${e.message}</span>
                            </div>
                        `)}
                </div>
            </div>
        `}async loadSettings(){const t=await this.getDialogSetting();t&&(typeof t.filter=="string"&&(t.filter==="all"||["info","warning","error","debug"].includes(t.filter))&&(this.filter=t.filter),typeof t.autoScroll=="boolean"&&(this.autoScroll=t.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};_i.styles=Le`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .log-terminal {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .messages {
            flex: 1;
            overflow-y: auto;
            padding: 0.5rem;
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            line-height: 1.5;
        }

        .message {
            display: flex;
            gap: 0.5rem;
            padding: 0.25rem 0.5rem;
            align-items: baseline;
            border-radius: var(--wa-border-radius-small);
        }

        .message:hover {
            background: var(--wa-color-neutral-background-hover);
        }

        .timestamp {
            color: var(--wa-color-neutral-text-subtle);
            font-size: 0.75rem;
            white-space: nowrap;
        }

        .source {
            color: var(--wa-color-primary-text);
            font-weight: 500;
            white-space: nowrap;
        }

        .text {
            color: var(--wa-color-neutral-text);
            word-break: break-word;
        }

        .message[data-level="error"] .text {
            color: var(--wa-color-danger-text);
        }

        .message[data-level="warning"] .text {
            color: var(--wa-color-warning-text);
        }

        .message[data-level="debug"] .text {
            color: var(--wa-color-neutral-text-subtle);
        }

        .empty-state {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: var(--wa-color-neutral-text-subtle);
            font-style: italic;
        }

        wa-icon {
            flex-shrink: 0;
        }
    `;js([$()],_i.prototype,"messages",2);js([$()],_i.prototype,"autoScroll",2);js([$()],_i.prototype,"filter",2);_i=js([C("k-log-terminal")],_i);var hv=Object.defineProperty,uv=Object.getOwnPropertyDescriptor,at=(t,e,n,i)=>{for(var r=i>1?void 0:i?uv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&hv(e,n,r),r};let We=class extends yr{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(t){if(!this.disabled){if(t&&t.stopPropagation(),this.action){this.action(t);return}if(this.cmd){const e=this.closest("wa-dropdown");e&&e.open!==void 0&&(e.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(t){const e=t.target;e&&e.open!==void 0&&(e.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const t=Ud.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),Fe(jt,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=D.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){if("command"in t){const e=t,n=e.disabled?.get();return f`
                <k-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    .params=${e.params||{}}
                    ?disabled="${n}">
                    ${e.label}
                </k-command>
            `}if("html"in t){const n=t.html;return n instanceof Function?n():en(n)}return N}render(){const t=this.getKeybinding();return this.isInDropdown()?f`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${e=>this.handleClick(e)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${t?f`<span class="keybinding">${t}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?f`
                <wa-dropdown 
                    placement=${this.placement}
                    @wa-select=${e=>this.handleSelect(e)}>
                    <wa-button 
                        slot="trigger"
                        appearance=${this.appearance}
                        variant=${this.variant}
                        size=${this.size}
                        ?disabled=${this.disabled}
                        with-caret
                        title=${t?`${this.title} (${t})`:this.title}>
                        <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                        <slot></slot>
                        ${this.label?this.title:N}
                    </wa-button>
                    
                    ${this.title?f`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:N}
                    
                    ${this.dropdownContributions.map(e=>this.renderContribution(e))}
                    
                    ${this.cmd?f`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                            ${this.title}
                        </k-command>
                    `:N}
                </wa-dropdown>
            `:f`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${t?`${this.title} (${t})`:this.title}
                @click=${e=>this.handleClick(e)}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};We.styles=Le`
        :host {
            display: inline-block;
        }

        .keybinding {
            margin-left: auto;
            padding: 2px 6px;
            background: var(--wa-color-neutral-15);
            border: 1px solid var(--wa-color-neutral-25);
            border-radius: 3px;
            font-size: 10px;
            font-family: monospace;
            opacity: 0.7;
        }

        :host-context(.wa-light) .keybinding {
            background: var(--wa-color-neutral-85);
            border: 1px solid var(--wa-color-neutral-75);
        }
    `;at([d()],We.prototype,"cmd",2);at([d({type:Object,attribute:!1})],We.prototype,"action",2);at([d()],We.prototype,"title",2);at([d()],We.prototype,"label",2);at([d()],We.prototype,"icon",2);at([d({type:Boolean})],We.prototype,"disabled",2);at([d()],We.prototype,"appearance",2);at([d()],We.prototype,"variant",2);at([d()],We.prototype,"size",2);at([d({type:Object,attribute:!1})],We.prototype,"params",2);at([d()],We.prototype,"dropdown",2);at([d()],We.prototype,"placement",2);at([$()],We.prototype,"dropdownContributions",2);We=at([C("k-command")],We);var pv=Object.defineProperty,fv=Object.getOwnPropertyDescriptor,$t=(t,e,n,i)=>{for(var r=i>1?void 0:i?fv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&pv(e,n,r),r};const mv=ni("fastviews");let ot=class extends yr{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=bn(),this.tabsRef=bn(),this.resizeHandleRef=bn(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(t){if(!this.disabled)if(this.containerId){const e=document.querySelector(`k-tabs#${this.containerId}`);if(!e){console.error(`k-fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(t)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(t)})}handleDrawerHide(){this.drawerOpen=!1}startResize(t){t.preventDefault(),t.stopPropagation();const e=this.drawerRef.value;if(!e)return;let i=(()=>{const o=e.shadowRoot?.querySelector('[part="panel"]');if(o&&o.offsetWidth>0)return o.offsetWidth;const h=(window.getComputedStyle(e).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(h){const u=parseFloat(h[1]),p=h[2];if(p==="px")return u;if(p==="vw")return u/100*window.innerWidth;if(p==="vh")return u/100*window.innerHeight;if(p==="%")return u/100*window.innerWidth}return 0})();i===0&&(i=window.innerWidth*.5);const r=o=>{this.resizing&&(o.preventDefault(),o.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const l=this.resizing.startX-o.clientX,c=Math.round(this.resizing.startSize+l),h=200,u=Math.round(window.innerWidth*.9);if(c>=h&&c<=u){this.drawerSize=`${c}px`;const p=this.drawerRef.value;p&&(p.style.setProperty("--size",this.drawerSize),p.style.setProperty("transition","none"))}this.resizing.rafId=null}))},s=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const o=this.drawerRef.value;o&&o.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:t.clientX,startSize:i,handleMouseMove:r,handleMouseUp:s,rafId:null},document.addEventListener("mousemove",r,{passive:!1}),document.addEventListener("mouseup",s,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),Fe(jt,t=>{this.target&&t.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const t=D.getContributions(this.target);this.tabContributions=t.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(t){return f`
            <wa-dropdown-item 
                @click=${()=>this.handleTabClick(t)}>
                <k-icon name="${t.icon||""}" label="${t.label}" slot="icon"></k-icon>
                ${t.label}
            </wa-dropdown-item>
        `}render(){return!this.target||this.tabContributions.length===0?N:f`
            <wa-dropdown placement=${this.placement}>
                <wa-button 
                    slot="trigger"
                    appearance=${this.appearance}
                    size=${this.size}
                    ?disabled=${this.disabled}
                    with-caret
                    title=${this.title}>
                    <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                    <slot></slot>
                </wa-button>
                
                ${this.title?f`
                    <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                `:N}
                
                ${this.tabContributions.map(t=>this.renderTabContribution(t))}
            </wa-dropdown>

            ${this.containerId?N:f`
                <wa-drawer 
                    ${tn(this.drawerRef)}
                    label="${this.title||mv("FAST_VIEWS")}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${tn(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <k-tabs 
                        ${tn(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </k-tabs>
                </wa-drawer>
            `}
        `}};ot.styles=Le`
        :host {
            display: inline-block;
        }

        wa-drawer {
            position: relative;
        }

        wa-drawer::part(panel) {
            position: relative;
        }

        .resize-handle {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            cursor: col-resize;
            z-index: 1000;
            background: transparent;
            transition: background-color 0.2s;
            user-select: none;
            touch-action: none;
        }

        .resize-handle:hover {
            background: var(--wa-color-brand-fill-loud);
        }

        .resize-handle:active {
            background: var(--wa-color-brand-fill-loud);
        }
    `;$t([d()],ot.prototype,"target",2);$t([d()],ot.prototype,"title",2);$t([d()],ot.prototype,"icon",2);$t([d({type:Boolean})],ot.prototype,"disabled",2);$t([d()],ot.prototype,"appearance",2);$t([d()],ot.prototype,"size",2);$t([d()],ot.prototype,"placement",2);$t([d()],ot.prototype,"containerId",2);$t([$()],ot.prototype,"tabContributions",2);$t([$()],ot.prototype,"drawerOpen",2);$t([$()],ot.prototype,"drawerSize",2);ot=$t([C("k-fastviews")],ot);var gv=Object.getOwnPropertyDescriptor,bv=(t,e,n,i)=>{for(var r=i>1?void 0:i?gv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};function wv(){let t=document.getElementById("global-dialog-container");return t||(t=document.createElement("div"),t.id="global-dialog-container",document.body.appendChild(t)),t}const Wd=t=>{try{return new Intl.DisplayNames([t],{type:"language"}).of(t)||t.toUpperCase()}catch{return t.toUpperCase()}},vv=()=>{const t=fw.get(),e=new Set;for(const n of t)if(n.namespace){const i=n;for(const r in i)r!=="namespace"&&r!=="label"&&r!=="language"&&r!=="translations"&&typeof i[r]=="object"&&e.add(r)}return Array.from(e).sort()},yv=async()=>{const t=vv(),e=Nd.get();return new Promise(n=>{const i=wv();let r=!1;const s=()=>{const h=i.querySelector("wa-dialog");h&&!r&&(h.open=!1)},o=()=>{r||(r=!0,gt(f``,i),n())},l=async h=>{await me.set(Yo,h),s()},c=f`
            <wa-dialog 
                label="Select Language" 
                open 
                light-dismiss
                @wa-request-close=${s}
                @wa-after-hide=${o}>
                <style>
                    .language-list {
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                        padding: 1rem;
                        min-width: 300px;
                        max-height: 400px;
                        overflow-y: auto;
                    }
                    
                    .language-item {
                        display: flex;
                        align-items: center;
                        padding: 0.75rem;
                        border-radius: var(--wa-border-radius-small);
                        cursor: pointer;
                        transition: background-color 0.2s;
                    }
                    
                    .language-item:hover {
                        background-color: var(--wa-color-neutral-fill-quiet);
                    }
                    
                    .language-item.active {
                        background-color: var(--wa-color-brand-fill-quiet);
                        font-weight: 600;
                    }
                    
                    .language-code {
                        font-family: monospace;
                        margin-right: 0.75rem;
                        min-width: 3rem;
                        color: var(--wa-color-neutral-600);
                    }
                    
                    .language-name {
                        flex: 1;
                    }
                </style>
                
                <div class="language-list">
                    ${t.map(h=>f`
                        <div 
                            class="language-item ${h===e?"active":""}"
                            @click=${()=>l(h)}>
                            <span class="language-code">${h.toUpperCase()}</span>
                            <span class="language-name">${Wd(h)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;gt(c,i)})};let Qo=class extends Xt{render(){const t=Nd.get(),e=Wd(t),n=`${t.toUpperCase()} ${e}`;return f`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${e}"
                @click=${()=>yv()}>
                ${n}
            </wa-button>
        `}};Qo.styles=Le`
        :host {
            display: inline-block;
        }
    `;Qo=bv([C("k-language-selector")],Qo);var xv=Object.defineProperty,kv=Object.getOwnPropertyDescriptor,jd=(t,e,n,i)=>{for(var r=i>1?void 0:i?kv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&xv(e,n,r),r};const Xd="app-switcher";D.registerContribution(qn,{id:Xd,label:"Switch Application",buttons:[ud],component:t=>{const e=t?.apps||[],n=t?.currentAppId,i=t?.selectApp;return f`
            <wa-scroller orientation="vertical" style="min-width: 300px; max-height: 400px; padding: var(--wa-space-m);">
                <div style="display: flex; flex-direction: column; gap: var(--wa-space-s);">
                    ${e.map(r=>f`
                        <wa-card 
                            style="cursor: pointer;"
                            variant=${r.id===n?"brand":"neutral"}
                            @click=${()=>i(r)}>
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--wa-space-xs);">
                                <span style="font-weight: 600;">${r.name}</span>
                                ${r.version?f`<wa-badge variant="neutral">v${r.version}</wa-badge>`:""}
                            </div>
                            ${r.description?f`<p style="margin: 0; font-size: 0.875rem; line-height: 1.4;">${r.description}</p>`:""}
                            <div style="font-size: 0.75rem; color: var(--wa-color-neutral-foreground-quiet); font-family: monospace; margin-top: var(--wa-space-xs);">ID: ${r.id}</div>
                        </wa-card>
                    `)}
                </div>
            </wa-scroller>
        `},onButton:async()=>!0});const Ev=async()=>{const t=mt.getRegisteredApps(),e=mt.getCurrentApp();if(t.length===0)return;const n={apps:t,currentAppId:e?.id,selectApp:async i=>{if(i.id===e?.id){n.close?.();return}try{await mt.setPreferredAppId(i.id),await mt.loadApp(i.id,document.body)}catch(r){console.error("Failed to switch app:",r)}finally{n.close?.()}},close:void 0};await zs.open(Xd,n)};let Cs=class extends Xt{doBeforeUI(){this.currentApp=mt.getCurrentApp();const t=()=>{this.currentApp=mt.getCurrentApp(),this.requestUpdate()};return window.addEventListener("app-loaded",t),()=>{window.removeEventListener("app-loaded",t)}}render(){const t=mt.getRegisteredApps(),e=this.currentApp?.name||"No App";return t.length<=1?f``:f`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current app: ${e}. Click to switch applications."
                @click=${()=>Ev()}>
                <wa-icon name="grip" style="margin-right: 0.5rem;"></wa-icon>
                ${e}
            </wa-button>
        `}};Cs.styles=Le`
        :host {
            display: inline-block;
        }
    `;jd([$()],Cs.prototype,"currentApp",2);Cs=jd([C("k-app-switcher")],Cs);D.registerContribution(cs,{name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>f`<k-filebrowser id="${t}"></k-filebrowser>`});D.registerContribution("system.fastviews-bottomend",{name:"log-terminal",label:"Log Messages",icon:"list",component:t=>f`<k-log-terminal id="${t}"></k-log-terminal>`});D.registerContribution(Ea,{slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"});D.registerContribution(Er,{label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});D.registerContribution(Er,{label:"Fast Views",html:'<k-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></k-fastviews>'});D.registerContribution(Er,{label:"Language",html:()=>f`<k-language-selector></k-language-selector>`});D.registerContribution(Di,{label:"App Switcher",html:()=>f`<k-app-switcher></k-app-switcher>`});const Cv=an("MarketplaceCatalogContributions");Cv.debug("Marketplace catalog URLs are set by the app host via applyAppHostConfig()");async function Xs(t,e=!0){const n=await Rn.getWorkspace();if(!n)return null;const i=t?.path;return e&&!i?null:{workspace:n,path:i||""}}function Na(t){return t&&typeof t.getContent=="function"&&typeof t.getSelection=="function"&&typeof t.getSnippet=="function"&&typeof t.getLanguage=="function"&&typeof t.getFilePath=="function"}async function Gd(t,e){let n;const i=t.params?.path;if(i){const r=await Rn.getWorkspace();r&&(n=await r.getResource(i))}return n||(n=Dn.get()),n}async function Gs(t){try{const e=await t.getContents();return typeof e!="string"?(de("File is not a text file"),null):e}catch(e){return de(`Failed to read file: ${e.message}`),null}}function mn(t=!1){const e={filePath:null,language:null};return t?{...e,snippet:null,cursorLine:null}:e}async function Lr(t,e=!0){const n=await Xs(t,e);if(!n)return null;const{workspace:i,path:r}=n;if(!r)return null;try{const s=await i.getResource(r);return!s||!(s instanceof _n)?null:{workspace:i,path:r,file:s}}catch{return null}}pe({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace. For .geospace map files, use create_map_file instead.",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async({params:t})=>{let e=t?.path;const n=t?.contents,i=t?.ask,r=t?.extension;if((i||!e)&&(e=await Sa("Enter path to new file (directories will be created if not exist):",e||""),!e))return;r&&!e.endsWith(r)&&(e+=r);const s=await Xs({path:e},!0);if(!s)return;const{workspace:o}=s;if(await o.getResource(e)&&!await Ps(`File "${e}" already exists. Do you want to overwrite it?`))return;const c=await o.getResource(e,{create:!0});return c?(n&&await c.saveContents(n),G.info("File created: "+e)):de("Could not create file: "+e),e}}});pe({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{const e=await Gd(t);if(!e){de("No resource to rename provided!");return}const n=e.getName(),i=t.params?.newName||await Sa(`Enter new name for "${n}":`,n);if(!(!i||i===n))try{await e.rename(i),Nt(`Resource renamed to: ${i}`)}catch(r){de(`Failed to rename ${n}: ${r.message}`)}}}});pe({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{const e=await Gd(t);if(!e){de("No resource to delete provided!");return}const n=e.getWorkspacePath(),i=t.params&&t.params.confirm;let r=!0;if((i===void 0||i===!0)&&(r=await Ps(`Are you sure you want to delete ${n}?`)),r)try{await e.delete(),Nt("Resource deleted: "+n)}catch(s){de(`Resource ${n} could not be deleted: ${s.message||s}`)}}}});pe({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Rn.connectWorkspace(e)).catch(e=>{de(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});pe({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await Rn.getWorkspace();e||de("No workspace selected."),e.touch()}}});pe({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Lr({path:t.params?.path});if(!e)return;const{file:n}=e;await Ws.loadEditor(n)}}});pe({command:{id:"head_file",name:"Head - Show first lines",description:"Shows the first N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the beginning (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the first N lines of the file"}]},handler:{execute:async({params:t})=>{const e=await Lr(t);if(!e)return;const{file:n}=e,i=t?.lines?parseInt(t.lines,10):10;if(isNaN(i)||i<1){de("Number of lines must be a positive integer");return}const r=await Gs(n);return r?r.split(`
`).slice(0,i).join(`
`):void 0}}});pe({command:{id:"tail_file",name:"Tail - Show last lines",description:"Shows the last N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the end (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the last N lines of the file"}]},handler:{execute:async({params:t})=>{const e=await Lr(t);if(!e)return;const{file:n}=e,i=t?.lines?parseInt(t.lines,10):10;if(isNaN(i)||i<1){de("Number of lines must be a positive integer");return}const r=await Gs(n);return r?r.split(`
`).slice(-i).join(`
`):void 0}}});pe({command:{id:"cat_file",name:"Cat - Show file contents",description:"Shows the complete contents of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0}],output:[{name:"content",description:"the complete contents of the file"}]},handler:{execute:async({params:t})=>{const e=await Lr(t);if(!e)return;const{file:n}=e;return await Gs(n)}}});pe({command:{id:"wc_file",name:"Word count",description:"Counts lines, words, and characters in a file",parameters:[{name:"path",description:"the path of the file to analyze",required:!0}],output:[{name:"lines",description:"number of lines in the file"},{name:"words",description:"number of words in the file"},{name:"characters",description:"number of characters in the file"}]},handler:{execute:async({params:t})=>{const e=await Lr(t);if(!e)return;const{file:n}=e,i=await Gs(n);if(!i)return;const s=i.split(`
`).length,o=i.trim()===""?0:i.trim().split(/\s+/).filter(c=>c.length>0).length,l=i.length;return{lines:s,words:o,characters:l}}}});pe({command:{id:"file_exists",name:"Check if file exists",description:"Checks if a file exists at the given path",parameters:[{name:"path",description:"the path of the file to check, relative to the workspace",required:!0}],output:[{name:"exists",description:"true if the file exists, false otherwise"}]},handler:{execute:async({params:t})=>{const e=await Xs(t);if(!e)return!1;const{workspace:n,path:i}=e;try{return await n.getResource(i)instanceof _n}catch{return!1}}}});async function Kd(t){const e=[],n=await t.listChildren(!0);for(const i of n)if(i instanceof _n)e.push(i.getWorkspacePath());else if(i instanceof mi){const r=await Kd(i);e.push(...r)}return e}pe({command:{id:"ls",name:"List files",description:"Lists files from a directory. If recursive is provided, it traverses from the provided directory down to all leaves. If no directory is provided, it will traverse from the workspace root.",parameters:[{name:"path",description:"the path of the directory to list, relative to the workspace. If not provided, uses workspace root",required:!1},{name:"recursive",description:"whether to recursively traverse all subdirectories",type:"boolean",required:!1}],output:[{name:"files",description:"array of file objects with path and size information"}]},handler:{execute:async({params:t})=>{const e=await Xs(t,!1);if(!e)return de("No workspace available"),[];const{workspace:n,path:i}=e,r=t?.recursive===!0||t?.recursive==="true";try{let s=n;if(i){const o=await n.getResource(i);if(!o)return de(`Path not found: ${i}`),[];if(!(o instanceof mi))return de(`Path is not a directory: ${i}`),[];s=o}if(r){const o=await Kd(s),l=[];for(const c of o){const h=await n.getResource(c);if(h instanceof _n){const u=await h.size();l.push({path:c,size:u})}}return l}else{const o=await s.listChildren(!0),l=[];for(const c of o)if(c instanceof _n){const h=await c.size();l.push({path:c.getWorkspacePath(),size:h})}return l}}catch(s){return de(`Failed to list files: ${s.message}`),[]}}}});pe({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!Na(e))return{...mn(),content:null};try{return{content:e.getContent(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...mn(),content:null}}}}});pe({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!Na(e))return{...mn(),selection:null};try{return{selection:e.getSelection(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...mn(),selection:null}}}}});pe({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!Na(e))return mn(!0);try{const n=t.params?.lines?parseInt(t.params.lines,10):5;if(isNaN(n)||n<0)return mn(!0);const i=e.getSnippet(n);return i?{snippet:i.snippet,filePath:e.getFilePath(),language:e.getLanguage(),cursorLine:i.cursorLine}:mn(!0)}catch{return mn(!0)}}}});pe({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{const e=mt.getCurrentApp();if(!e){de("No app loaded");return}const n=xs.hasPackages(),i=xs.renderTree();let r=null;const s=()=>(r||(r=document.getElementById("global-dialog-container")||document.createElement("div"),r.id||(r.id="global-dialog-container",document.body.appendChild(r))),r),o=()=>{r&&gt(f``,r)},l=I=>{const S=ne.parse(I,{async:!1});return f`${en(S)}`};let c=[];if(e.releaseHistory)if(typeof e.releaseHistory=="function")try{c=await e.releaseHistory()}catch(I){console.error("Failed to load release history from app:",I),c=[]}else c=e.releaseHistory;e.version;const h=c.length>0?c.findIndex(I=>I.tag_name===e.version):-1,u=h>=0?h:0;let p=u;const g=I=>{if(c.length===0)return"";const S=c[I],P=S.tag_name===e.version;let R=`**Version:** ${S.tag_name}`;P&&(R+=" (Current)"),R+=`

`;const O=new Date(S.published_at).toLocaleDateString();if(R+=`**Released:** ${O}

`,!P){const _=e.version.replace(/^v/,""),W=S.tag_name.replace(/^v/,""),z=_.split(".").map(Number),ge=W.split(".").map(Number);let be=!1;for(let le=0;le<Math.max(z.length,ge.length);le++){const Ie=z[le]||0,xe=ge[le]||0;if(xe>Ie){be=!0;break}if(xe<Ie)break}be&&(R+=`⚠️ **Update available - reload page to update**

`)}return S.body&&(R+=`---

${S.body}`),R},b=()=>{o()},w=()=>{o()},k=I=>{const S=g(I),P=c.length>0,R=f`
                    <wa-dialog 
                        label="About ${e.name} - ${e.version}"
                        open 
                        light-dismiss
                        style="--width: 600px;"
                        @wa-request-close=${b}
                        @wa-after-hide=${w}
                    >
                        <style>
                            .dialog-content {
                                height: 600px;
                            }
                            
                            wa-tree-item > span small {
                                color: var(--wa-color-neutral-60);
                                font-size: 0.875em;
                                margin-left: 0.5rem;
                            }
                        </style>
                        <small>${e.description}</small>
                        <div class="dialog-content">
                            <wa-tab-group>
                                ${c.length>0?f`
                                    <wa-tab slot="nav" panel="release">Release History</wa-tab>
                                    <wa-tab-panel name="release">
                                        ${l(S)}
                                    </wa-tab-panel>
                                `:""}
                                
                                ${n?f`
                                    <wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>
                                    <wa-tab-panel name="packages">
                                        ${i}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${P?f`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${I===c.length-1}
                                    @click=${()=>{I<c.length-1&&(p=I+1,k(p))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${I===0}
                                    @click=${()=>{I>0&&(p=I-1,k(p))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;gt(R,s())};return k(u),new Promise(I=>{const S=()=>{r?.querySelector("wa-dialog[open]")?setTimeout(S,100):I()};S()})}}});pe({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});pe({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=cr.get()||bt.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const t=bt.get();return!t||!t.isDirty()}}});pe({command:{id:"run_python",name:"Run Python Cell",description:"Runs active Python code in a supporting context (e.g. notebook, terminal, etc.)",keyBinding:"CTRL+R",parameters:[]}});const Yd="theme";async function Zd(t){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(t)}async function $v(){const t=await me.get(Yd);await Zd(t||"wa-dark")}async function Sv(t){await me.set(Yd,t)}pe({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{const n=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await Zd(n),await Sv(n)}},contribution:{target:Di,icon:"circle-half-stroke",label:"Theme Switcher"}});$v().catch(t=>{console.error("Failed to load theme preference:",t)});pe({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:Di,icon:"expand",label:"Fullscreen"}});pe({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>f`
                <k-extensions></k-extensions>`,Ws.loadEditor(e).then()}},contribution:{target:Di,icon:"puzzle-piece",label:"Open Extensions"}});pe({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async t=>q.getExtensions().map(n=>({id:n.id,name:n.name,description:n.description,experimental:n.experimental,enabled:q.isEnabled(n.id)}))}});pe({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?de(t):Nt(t))}}});$e.put("constants",Xm);Oi.put("html",f);Oi.put("render",gt);Oi.put("toastInfo",Nt);Oi.put("toastError",de);Oi.put("toastWarning",Vf);let Yl=!1;function Av(t){Yl||(Yl=!0,t.packageInfo&&xs.addPackage(t.packageInfo),t.marketplaceCatalogUrls?.length&&t.marketplaceCatalogUrls.forEach(e=>{Bd.addCatalogUrl(e).catch(()=>{})}))}var _v=Object.defineProperty,Tv=Object.getOwnPropertyDescriptor,Ir=(t,e,n,i)=>{for(var r=i>1?void 0:i?Tv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&_v(e,n,r),r};let Ti=class extends $a{constructor(){super(...arguments),this.showBottomSidebar=!1,this.showBottomPanel=!1,this.showLeftSidebar=!0,this.showAuxSidebar=!0}createRenderRoot(){return this}getGridSizes(){return this.showLeftSidebar&&this.showAuxSidebar?"15%, 65%, 20%":this.showLeftSidebar?"15%, 85%":this.showAuxSidebar?"80%, 20%":"100%"}render(){return f`
            <style>
                *, *::before, *::after {
                    box-sizing: border-box;
                }
                
                html {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                }
                
                body {
                    height: 100%;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                
                k-standard-app {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    width: 100%;
                }
                
                k-standard-app .toolbar-top {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 2fr 1fr;
                    align-items: center;
                    border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    flex-shrink: 0;
                }
                
                k-standard-app .toolbar-bottom {
                    width: 100%;
                    border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    display: grid;
                    grid-template-columns: 1fr 2fr auto;
                    align-items: center;
                    flex-shrink: 0;
                    min-height: 32px;
                    padding: 0 var(--wa-space-s);
                    box-sizing: border-box;
                }
                
                k-standard-app .main-layout {
                    flex: 1;
                    min-height: 0;
                }
                
                k-standard-app .toolbar-end {
                    justify-self: end;
                }
            </style>
            
            <div class="toolbar-top">
                <k-toolbar id=${rd}></k-toolbar>
                <k-toolbar id=${sd}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Di}></k-toolbar>
            </div>
            
            <k-resizable-grid 
                class="main-layout"
                id="main-layout" 
                orientation="horizontal" 
                sizes=${this.getGridSizes()}>
                
                ${this.showLeftSidebar?f`
                        ${this.showBottomSidebar?f`
                                <k-resizable-grid 
                                    id="left-sidebar-split" 
                                    orientation="vertical" 
                                    sizes="50%, 50%">
                                    <k-tabs id="${cs}"></k-tabs>
                                    <k-tabs id="${od}"></k-tabs>
                                </k-resizable-grid>
                            `:f`<k-tabs id="${cs}"></k-tabs>`}
                    `:N}
                
                ${this.showBottomPanel?f`
                        <k-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <k-tabs id="${pn}"></k-tabs>
                            <k-tabs id="${ld}"></k-tabs>
                        </k-resizable-grid>
                    `:f`<k-tabs id="${pn}"></k-tabs>`}
                
                ${this.showAuxSidebar?f`<k-tabs id="${ad}"></k-tabs>`:N}
            </k-resizable-grid>
            
            <div class="toolbar-bottom">
                <k-toolbar id=${Ea}></k-toolbar>
                <k-toolbar id=${Os}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Er}></k-toolbar>
            </div>
        `}};Ir([d({type:Boolean,attribute:"show-bottom-sidebar"})],Ti.prototype,"showBottomSidebar",2);Ir([d({type:Boolean,attribute:"show-bottom-panel"})],Ti.prototype,"showBottomPanel",2);Ir([d({type:Boolean,attribute:"show-left-sidebar"})],Ti.prototype,"showLeftSidebar",2);Ir([d({type:Boolean,attribute:"show-aux-sidebar"})],Ti.prototype,"showAuxSidebar",2);Ti=Ir([C("k-standard-app")],Ti);const Rv="@kispace-io/app",Lv="0.0.0",Iv={"@kispace-io/core":"*","@kispace-io/extension-ai-system":"*","@kispace-io/extension-command-palette":"*","@kispace-io/extension-download":"*","@kispace-io/extension-git":"*","@kispace-io/extension-github-service":"*","@kispace-io/extension-howto-system":"*","@kispace-io/extension-in-browser-ml":"*","@kispace-io/extension-linuxterminal":"*","@kispace-io/extension-md-editor":"*","@kispace-io/extension-media-viewer":"*","@kispace-io/extension-memory-usage":"*","@kispace-io/extension-monaco-editor":"*","@kispace-io/extension-notebook":"*","@kispace-io/extension-python-runtime":"*","@kispace-io/extension-rag-system":"*","@kispace-io/extension-settings-tree":"*","@kispace-io/extension-unzip":"*","@kispace-io/extension-webdav":"*","@kispace-io/extension-webllm":"*","@kispace-io/extension-certs":"*","pace-js":"^1.2.4"},Ov={typescript:"^5.9.3",vite:"^7.1.12"},Dv={catalogUrls:["https://raw.githubusercontent.com/kispace-io/appspace-marketplace/main/catalogs/extensions.json","https://raw.githubusercontent.com/kispace-io/appspace-marketplace/main/catalogs/apps.json"]},er={name:Rv,version:Lv,dependencies:Iv,devDependencies:Ov,marketplace:Dv},zv="extensions",Pv={EXT_GIT_NAME:"Git Support",EXT_GIT_DESC:"Git commands and UI elements"},Mv={EXT_GIT_NAME:"Git-Unterstützung",EXT_GIT_DESC:"Git-Befehle und UI-Elemente"},Nv={namespace:zv,en:Pv,de:Mv};D.registerContribution(ae,Nv);const Zl=Se("extensions");q.registerExtension({id:"system.git",name:Zl("EXT_GIT_NAME"),description:Zl("EXT_GIT_DESC"),loader:()=>ye(()=>import("./git-extension-CDLI4jAo.js"),[]),icon:"code-branch",experimental:!0});const Fv="extensions",Uv={EXT_GITHUB_SERVICE_NAME:"GitHub Service",EXT_GITHUB_SERVICE_DESC:"GitHub API service for fetching release information"},Bv={EXT_GITHUB_SERVICE_NAME:"GitHub-Service",EXT_GITHUB_SERVICE_DESC:"GitHub-API-Service zum Abrufen von Release-Informationen"},qv={namespace:Fv,en:Uv,de:Bv};D.registerContribution(ae,qv);const Jl=Se("extensions");q.registerExtension({id:"system.github-service",name:Jl("EXT_GITHUB_SERVICE_NAME"),description:Jl("EXT_GITHUB_SERVICE_DESC"),loader:()=>ye(()=>import("./github-service-extension-C-kuSNTI.js"),[]),icon:"code-branch"});const Vv="extensions",Hv={EXT_PYTHONRUNTIME_NAME:"Python Runtime",EXT_PYTHONRUNTIME_DESC:"Pyodide runtime, Python package management, and Run Python Script command"},Wv={EXT_PYTHONRUNTIME_NAME:"Python-Runtime",EXT_PYTHONRUNTIME_DESC:"Pyodide-Runtime, Python-Paketverwaltung und Befehl Python-Skript ausführen"},jv={namespace:Vv,en:Hv,de:Wv};D.registerContribution(ae,jv);const Ql=Se("extensions");q.registerExtension({id:"system.pythonruntime",name:Ql("EXT_PYTHONRUNTIME_NAME"),description:Ql("EXT_PYTHONRUNTIME_DESC"),loader:()=>ye(()=>import("./python-runtime-extension-BSSL57sH.js"),__vite__mapDeps([0,1])),icon:"k python"});var Xv=Object.defineProperty,Gv=Object.getOwnPropertyDescriptor,Ui=(t,e,n,i)=>{for(var r=i>1?void 0:i?Gv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Xv(e,n,r),r};let Tn=class extends gn{constructor(){super(...arguments),this.open=!1,this.packages=[],this.loadingPackages=!1}configure(t){this.packages=t.packages||[],this.pyenv=t.pyenv,this.onPackageAdded=t.onPackageAdded,this.onPackageRemoved=t.onPackageRemoved}show(){this.open=!0}hide(){this.open=!1}addPackage(t){if(!t||t.trim()==="")return;const e=t.trim();this.packages.includes(e)||(this.packages=[...this.packages,e],this.onPackageAdded?.(e))}removePackage(t){this.packages.indexOf(t)>-1&&(this.packages=this.packages.filter(n=>n!==t),this.onPackageRemoved?.(t))}async reloadPackages(){if(this.pyenv){this.loadingPackages=!0,this.packageLoadError=void 0;try{await this.pyenv.loadPackages(this.packages)}catch(t){this.packageLoadError=String(t)}finally{this.loadingPackages=!1}}}render(){let t;return f`
            <wa-dialog 
                label="Manage Required Packages" 
                ?open=${this.open}
                @wa-after-hide=${()=>{this.open=!1,this.dispatchEvent(new CustomEvent("hide",{bubbles:!0,composed:!0}))}}>
                <div class="package-manager">
                    <p class="package-manager-description">
                        Specify Python packages that should be automatically loaded when connecting to the kernel.
                    </p>

                    ${this.loadingPackages?f`
                        <wa-alert variant="primary" open>
                            <wa-icon slot="icon" name="circle-notch" library="fa" class="spinning"></wa-icon>
                            Loading packages...
                        </wa-alert>
                    `:""}

                    ${this.packageLoadError?f`
                        <wa-alert variant="danger" open closable @wa-after-hide=${()=>this.packageLoadError=void 0}>
                            <wa-icon slot="icon" name="exclamation-triangle"></wa-icon>
                            <strong>Package Load Error:</strong><br>
                            ${this.packageLoadError}
                        </wa-alert>
                    `:""}

                    <div class="package-input-group">
                        <wa-input 
                            placeholder="Package name (e.g., pandas, numpy)" 
                            ${tn(e=>t=e)}
                            @keydown=${e=>{e.key==="Enter"&&t&&(this.addPackage(t.value),t.value="")}}>
                            <wa-icon slot="prefix" name="box"></wa-icon>
                        </wa-input>
                        <wa-button 
                            @click=${()=>{t&&(this.addPackage(t.value),t.value="")}}
                            variant="primary">
                            <wa-icon slot="prefix" name="plus"></wa-icon>
                            Add
                        </wa-button>
                    </div>

                    ${this.packages.length===0?f`
                        <div class="empty-state">
                            <wa-icon name="box" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                            <p>No packages configured</p>
                            <p style="font-size: 0.9rem; opacity: 0.7;">Add packages above to auto-load them when the kernel connects</p>
                        </div>
                    `:f`
                        <div class="package-list">
                            <div class="package-list-header">
                                <strong>Required Packages (${this.packages.length})</strong>
                            </div>
                            ${Wc(this.packages,e=>e,e=>f`
                                <div class="package-item">
                                    <wa-icon name="box" style="opacity: 0.5;"></wa-icon>
                                    <span class="package-name">${e}</span>
                                    <wa-button 
                                        size="small" 
                                        variant="text"
                                        @click=${()=>this.removePackage(e)}
                                        title="Remove package">
                                        <wa-icon name="xmark"></wa-icon>
                                    </wa-button>
                                </div>
                            `)}
                        </div>
                    `}
                </div>
                <div slot="footer" class="package-manager-footer">
                    ${this.pyenv&&this.packages.length>0?f`
                        <wa-button 
                            variant="default"
                            @click=${()=>this.reloadPackages()}
                            ?disabled=${this.loadingPackages}>
                            <wa-icon slot="prefix" name="arrows-rotate"></wa-icon>
                            Reload Packages
                        </wa-button>
                    `:""}
                    <wa-button 
                        variant="primary"
                        @click=${()=>this.hide()}>
                        Done
                    </wa-button>
                </div>
            </wa-dialog>
        `}};Tn.styles=Le`
        :host {
            display: contents;
        }

        .package-manager {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
        }

        .package-manager-description {
            margin: 0;
            font-size: 0.95rem;
            opacity: 0.8;
            line-height: 1.5;
        }

        .package-input-group {
            display: flex;
            gap: 0.5rem;
        }

        .package-input-group wa-input {
            flex: 1;
        }

        .package-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-height: 400px;
            overflow-y: auto;
        }

        .package-list-header {
            padding: 0.5rem;
            border-bottom: 1px solid var(--wa-color-outline);
            margin-bottom: 0.5rem;
        }

        .package-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem;
            border-radius: 4px;
            background: var(--wa-color-surface-variant);
            transition: background 0.2s;
        }

        .package-item:hover {
            background: var(--wa-color-surface-container-highest);
        }

        .package-name {
            flex: 1;
            font-family: monospace;
            font-size: 0.95rem;
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            padding: 3rem 1rem;
            text-align: center;
            opacity: 0.6;
        }

        .empty-state p {
            margin: 0;
        }

        .package-manager-footer {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
            padding-top: 1rem;
            border-top: 1px solid var(--wa-color-outline);
        }

        .spinning {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `;Ui([d({type:Boolean})],Tn.prototype,"open",2);Ui([d({type:Array})],Tn.prototype,"packages",2);Ui([d({attribute:!1})],Tn.prototype,"pyenv",2);Ui([$()],Tn.prototype,"loadingPackages",2);Ui([$()],Tn.prototype,"packageLoadError",2);Tn=Ui([C("k-python-package-manager")],Tn);class Kv{showPackageManager(e){return this.managerInstance||(this.managerInstance=document.createElement("k-python-package-manager"),document.body.appendChild(this.managerInstance)),this.managerInstance.configure(e),this.managerInstance.show(),this.managerInstance}getManager(){return this.managerInstance}}const Yv=new Kv,j1=t=>{$e.put("pythonPackageManagerService",Yv)},Zv="extensions",Jv={EXT_LINUXTERMINAL_NAME:"Linux terminal",EXT_LINUXTERMINAL_DESC:"Linux terminal view"},Qv={EXT_LINUXTERMINAL_NAME:"Linux-Terminal",EXT_LINUXTERMINAL_DESC:"Linux-Terminalansicht"},ey={namespace:Zv,en:Jv,de:Qv};D.registerContribution(ae,ey);const ec=Se("extensions");q.registerExtension({id:"system.linuxterminal",name:ec("EXT_LINUXTERMINAL_NAME"),description:ec("EXT_LINUXTERMINAL_DESC"),loader:()=>ye(()=>import("./k-linuxterminal--f9cWePe.js"),[]),icon:"terminal",experimental:!0});const ty="extensions",ny={EXT_WEBLLM_NAME:"WebLLM",EXT_WEBLLM_DESC:"In-Browser LLM inference"},iy={EXT_WEBLLM_NAME:"WebLLM",EXT_WEBLLM_DESC:"LLM-Inferenz im Browser"},ry={namespace:ty,en:ny,de:iy};D.registerContribution(ae,ry);const tc=Se("extensions");q.registerExtension({id:"system.webllm",name:tc("EXT_WEBLLM_NAME"),description:tc("EXT_WEBLLM_DESC"),loader:()=>ye(()=>import("./webllmservice-C7NtKXPU.js"),[]),icon:"robot"});const sy="extensions",oy={EXT_P12SPLITTER_NAME:".p12 file splitter",EXT_P12SPLITTER_DESC:"Adds a command to split/separate a .p12 file into private/public and additional .pem files"},ay={EXT_P12SPLITTER_NAME:".p12-Datei-Splitter",EXT_P12SPLITTER_DESC:"Fügt einen Befehl hinzu, um eine .p12-Datei in private/öffentliche und zusätzliche .pem-Dateien zu trennen"},ly={namespace:sy,en:oy,de:ay};D.registerContribution(ae,ly);const nc=Se("extensions");q.registerExtension({id:"system.p12splitter",name:nc("EXT_P12SPLITTER_NAME"),description:nc("EXT_P12SPLITTER_DESC"),loader:()=>ye(()=>import("./p12-splitter-CjWItpTy.js"),__vite__mapDeps([2,1])),icon:"certificate",dependencies:["system.pythonruntime"]});const cy="extensions",dy={EXT_NOTEBOOK_NAME:"Jupyter-like Notebook Editor",EXT_NOTEBOOK_DESC:"View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering"},hy={EXT_NOTEBOOK_NAME:"Jupyter-ähnlicher Notebook-Editor",EXT_NOTEBOOK_DESC:"Anzeigen und Ausführen von Jupyter-ähnlichen Notebooks (.ipynb) mit Python-Codeausführung und Markdown-Rendering"},uy={namespace:cy,en:dy,de:hy};D.registerContribution(ae,uy);const ic=Se("extensions");q.registerExtension({id:"system.notebook",name:ic("EXT_NOTEBOOK_NAME"),description:ic("EXT_NOTEBOOK_DESC"),loader:()=>ye(()=>import("./notebook-extension-C1mi80Gq.js"),[]),icon:"k jupyter",dependencies:["system.pythonruntime"]});const py="extensions",fy={EXT_COMMANDPALETTE_NAME:"Command Palette",EXT_COMMANDPALETTE_DESC:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)"},my={EXT_COMMANDPALETTE_NAME:"Befehls-Palette",EXT_COMMANDPALETTE_DESC:"VS Code-ähnliche Befehls-Palette oben in der Mitte für schnelle Befehlsausführung (Strg+Umschalt+P)"},gy={namespace:py,en:fy,de:my};D.registerContribution(ae,gy);const rc=Se("extensions");q.registerExtension({id:"system.commandpalette",name:rc("EXT_COMMANDPALETTE_NAME"),description:rc("EXT_COMMANDPALETTE_DESC"),loader:()=>ye(()=>import("./command-palette-extension-B71kYamF.js"),[]),icon:"terminal"});const by="extensions",wy={EXT_DOWNLOAD_NAME:"Download Files",EXT_DOWNLOAD_DESC:"Download files from URLs to the workspace"},vy={EXT_DOWNLOAD_NAME:"Dateien herunterladen",EXT_DOWNLOAD_DESC:"Dateien von URLs in den Arbeitsbereich herunterladen"},yy={namespace:by,en:wy,de:vy};D.registerContribution(ae,yy);const sc=Se("extensions");q.registerExtension({id:"system.download",name:sc("EXT_DOWNLOAD_NAME"),description:sc("EXT_DOWNLOAD_DESC"),loader:()=>ye(()=>import("./download-extension-CflTObK1.js"),[]),icon:"download"});const xy="extensions",ky={EXT_UNZIP_NAME:"Unzip Archives",EXT_UNZIP_DESC:"Extract zip archives to the workspace"},Ey={EXT_UNZIP_NAME:"Archive entpacken",EXT_UNZIP_DESC:"Zip-Archive in den Arbeitsbereich extrahieren"},Cy={namespace:xy,en:ky,de:Ey};D.registerContribution(ae,Cy);const oc=Se("extensions");q.registerExtension({id:"system.unzip",name:oc("EXT_UNZIP_NAME"),description:oc("EXT_UNZIP_DESC"),loader:()=>ye(()=>import("./unzip-extension-Cn7568mV.js"),[]),icon:"box-archive"});const $y="extensions",Sy={EXT_MDEDITOR_NAME:"Markdown Editor",EXT_MDEDITOR_DESC:"View and render Markdown (.md) files"},Ay={EXT_MDEDITOR_NAME:"Markdown-Editor",EXT_MDEDITOR_DESC:"Anzeigen und Rendern von Markdown (.md) Dateien"},_y={namespace:$y,en:Sy,de:Ay};D.registerContribution(ae,_y);const ac=Se("extensions");q.registerExtension({id:"system.mdeditor",name:ac("EXT_MDEDITOR_NAME"),description:ac("EXT_MDEDITOR_DESC"),loader:()=>ye(()=>import("./md-editor-extension-D2oljo1M.js"),[]),icon:"book"});const Ty="extensions",Ry={EXT_MEDIAVIEWER_NAME:"Media Viewer",EXT_MEDIAVIEWER_DESC:"View PDF, image, and HTML files in the browser"},Ly={EXT_MEDIAVIEWER_NAME:"Medien-Viewer",EXT_MEDIAVIEWER_DESC:"PDF-, Bild- und HTML-Dateien im Browser anzeigen"},Iy={namespace:Ty,en:Ry,de:Ly};D.registerContribution(ae,Iy);const lc=Se("extensions");q.registerExtension({id:"system.mediaviewer",name:lc("EXT_MEDIAVIEWER_NAME"),description:lc("EXT_MEDIAVIEWER_DESC"),loader:()=>ye(()=>import("./media-viewer-extension-BDXPB3PW.js"),[]),icon:"image"});const Oy="extensions",Dy={EXT_MONACO_NAME:"Monaco Code Editor",EXT_MONACO_DESC:"Code editor with syntax highlighting, code completion, and Python execution support"},zy={EXT_MONACO_NAME:"Monaco-Code-Editor",EXT_MONACO_DESC:"Code-Editor mit Syntaxhervorhebung, Code-Vervollständigung und Python-Ausführungsunterstützung"},Py={namespace:Oy,en:Dy,de:zy};D.registerContribution(ae,Py);const cc=Se("extensions");q.registerExtension({id:"system.monaco",name:cc("EXT_MONACO_NAME"),description:cc("EXT_MONACO_DESC"),loader:()=>ye(()=>import("./monaco-editor-extension-CIMkB-Ke.js"),[]),icon:"file-pen",dependencies:["system.pythonruntime"]});const My="extensions",Ny={EXT_MEMORYUSAGE_NAME:"Memory Usage Monitor",EXT_MEMORYUSAGE_DESC:"Displays JavaScript heap memory usage in the bottom toolbar"},Fy={EXT_MEMORYUSAGE_NAME:"Speicherverbrauch-Monitor",EXT_MEMORYUSAGE_DESC:"Zeigt die JavaScript-Heap-Speichernutzung in der unteren Symbolleiste an"},Uy={namespace:My,en:Ny,de:Fy};D.registerContribution(ae,Uy);const dc=Se("extensions");q.registerExtension({id:"system.memoryusage",name:dc("EXT_MEMORYUSAGE_NAME"),description:dc("EXT_MEMORYUSAGE_DESC"),loader:()=>ye(()=>import("./memory-usage-extension-YSuzbHZT.js"),[]),icon:"microchip"});const By="extensions",qy={EXT_WEBDAV_NAME:"WebDAV Workspace",EXT_WEBDAV_DESC:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration"},Vy={EXT_WEBDAV_NAME:"WebDAV-Arbeitsbereich",EXT_WEBDAV_DESC:"Verbinden Sie sich mit WebDAV-Servern (Nextcloud, ownCloud) als Arbeitsbereichsordner für Cloud-Speicher-Integration"},Hy={namespace:By,en:qy,de:Vy};D.registerContribution(ae,Hy);const hc=Se("extensions");q.registerExtension({id:"system.webdav",name:hc("EXT_WEBDAV_NAME"),description:hc("EXT_WEBDAV_DESC"),loader:()=>ye(()=>import("./webdav-extension-Cd0YFgiL.js"),[]),icon:"cloud"});const Wy="extensions",jy={EXT_SETTINGS_TREE_NAME:"Settings Tree Editor",EXT_SETTINGS_TREE_DESC:"Tree-based editor for settings with in-place editing"},Xy={EXT_SETTINGS_TREE_NAME:"Einstellungs-Baum-Editor",EXT_SETTINGS_TREE_DESC:"Baumbasierter Editor für Einstellungen mit direkter Bearbeitung"},Gy={namespace:Wy,en:jy,de:Xy};D.registerContribution(ae,Gy);const uc=Se("extensions");q.registerExtension({id:"system.settings-tree",name:uc("EXT_SETTINGS_TREE_NAME"),description:uc("EXT_SETTINGS_TREE_DESC"),loader:()=>ye(()=>import("./settings-tree-extension-qrtE00lf.js"),[]),icon:"sitemap"});const Ky="extensions",Yy={EXT_IN_BROWSER_ML_NAME:"In-Browser ML",EXT_IN_BROWSER_ML_DESC:"In-browser machine learning service using transformers.js for specialized tasks (zero-shot classification, embeddings, etc.)"},Zy={EXT_IN_BROWSER_ML_NAME:"ML im Browser",EXT_IN_BROWSER_ML_DESC:"Maschinelles Lernen im Browser mit transformers.js für spezialisierte Aufgaben (Zero-Shot-Klassifizierung, Embeddings usw.)"},Jy={namespace:Ky,en:Yy,de:Zy};D.registerContribution(ae,Jy);const pc=Se("extensions");q.registerExtension({id:"system.in-browser-ml",name:pc("EXT_IN_BROWSER_ML_NAME"),description:pc("EXT_IN_BROWSER_ML_DESC"),loader:()=>ye(()=>import("./in-browser-ml-extension-DjUCpvp4.js"),[]),icon:"brain"});var Jd=(t=>(t.ZERO_SHOT_CLASSIFICATION="Xenova/distilbert-base-uncased-mnli",t.FEATURE_EXTRACTION="Xenova/all-MiniLM-L6-v2",t.TEXT_CLASSIFICATION="Xenova/distilbert-base-uncased-finetuned-sst-2-english",t.QUESTION_ANSWERING="Xenova/distilbert-base-cased-distilled-squad",t.SUMMARIZATION="Xenova/distilbart-cnn-6-6",t.TRANSLATION_EN_FR="Xenova/opus-mt-en-fr",t.FILL_MASK="Xenova/distilbert-base-uncased",t.SENTENCE_SIMILARITY="Xenova/all-MiniLM-L6-v2",t.TOKEN_CLASSIFICATION="Xenova/distilbert-base-uncased-finetuned-conll03-english",t.IMAGE_CLASSIFICATION="Xenova/vit-base-patch16-224",t.OBJECT_DETECTION="Xenova/detr-resnet-50",t.AUTOMATIC_SPEECH_RECOGNITION="Xenova/whisper-tiny",t.AUDIO_CLASSIFICATION="Xenova/wav2vec2-base",t))(Jd||{}),Qd=(t=>(t.ZERO_SHOT_CLASSIFICATION="zero-shot-classification",t.FEATURE_EXTRACTION="feature-extraction",t.TEXT_CLASSIFICATION="text-classification",t.SENTIMENT_ANALYSIS="sentiment-analysis",t.QUESTION_ANSWERING="question-answering",t.SUMMARIZATION="summarization",t.TRANSLATION="translation",t.FILL_MASK="fill-mask",t.SENTENCE_SIMILARITY="sentence-similarity",t.TOKEN_CLASSIFICATION="token-classification",t.IMAGE_CLASSIFICATION="image-classification",t.OBJECT_DETECTION="object-detection",t.AUTOMATIC_SPEECH_RECOGNITION="automatic-speech-recognition",t.AUDIO_CLASSIFICATION="audio-classification",t.IMAGE_TO_TEXT="image-to-text",t.TEXT_TO_IMAGE="text-to-image",t.IMAGE_SEGMENTATION="image-segmentation",t.DEPTH_ESTIMATION="depth-estimation",t))(Qd||{});function Qy(t){switch(t){case"zero-shot-classification":return"Xenova/distilbert-base-uncased-mnli";case"feature-extraction":return"Xenova/all-MiniLM-L6-v2";case"text-classification":case"sentiment-analysis":return"Xenova/distilbert-base-uncased-finetuned-sst-2-english";case"question-answering":return"Xenova/distilbert-base-cased-distilled-squad";case"summarization":return"Xenova/distilbart-cnn-6-6";case"translation":return"Xenova/opus-mt-en-fr";case"fill-mask":return"Xenova/distilbert-base-uncased";case"sentence-similarity":return"Xenova/all-MiniLM-L6-v2";case"token-classification":return"Xenova/distilbert-base-uncased-finetuned-conll03-english";case"image-classification":return"Xenova/vit-base-patch16-224";case"object-detection":return"Xenova/detr-resnet-50";case"automatic-speech-recognition":return"Xenova/whisper-tiny";case"audio-classification":return"Xenova/wav2vec2-base";default:return null}}let Ao=null,fc=!1;async function eh(){Ao||(Ao=ye(()=>import("./transformers-7Ca4Rwdn.js"),__vite__mapDeps([3,4])));const t=await Ao;return fc||(t.env.allowRemoteModels=!0,t.env.allowLocalModels=!1,t.env.remoteHost="https://huggingface.co",fc=!0),t}async function e1(t){const{env:e}=await eh();t&&t.trim()?e.useAuthToken=t.trim():e.useAuthToken=null}const tr=an("InBrowserMLService");class ui{constructor(){this.pipelines=new Map,this.loadingPipelines=new Set}static getInstance(){return ui.instance||(ui.instance=new ui),ui.instance}setAuthToken(e){e1(e).then(()=>{e&&e.trim()&&tr.info("Hugging Face token set for authenticated model access")}).catch(n=>{tr.warn(`Failed to configure auth token: ${n instanceof Error?n.message:String(n)}`)})}async getPipeline(e,n,i={}){if(!n&&typeof e!="string"){const l=Qy(e);l&&(n=l)}const r=e,s=n,o=`${r}:${s}`;if(this.pipelines.has(o))return this.pipelines.get(o);if(this.loadingPipelines.has(o)){for(;this.loadingPipelines.has(o);)await new Promise(l=>setTimeout(l,100));return this.pipelines.get(o)}this.loadingPipelines.add(o);try{tr.info(`Loading transformers.js pipeline: ${r} with model ${s}...`);const{pipeline:l}=await eh(),c=await l(r,s,{quantized:!0,...i});return this.pipelines.set(o,c),tr.info(`Pipeline ${o} loaded successfully`),c}catch(l){const c=l instanceof Error?l.message:String(l);throw tr.error(`Failed to load pipeline ${o}: ${c}`),l}finally{this.loadingPipelines.delete(o)}}clearPipeline(e,n){const s=`${e}:${n}`;this.pipelines.delete(s)}clearAllPipelines(){this.pipelines.clear()}}const t1=ui.getInstance(),n1="extensions",i1={EXT_AI_SYSTEM_NAME:"AI System",EXT_AI_SYSTEM_DESC:"Modern AI service with streaming support and agent workflows"},r1={EXT_AI_SYSTEM_NAME:"KI-System",EXT_AI_SYSTEM_DESC:"Modernes KI-Service mit Streaming-Unterstützung und Agent-Workflows"},s1={namespace:n1,en:i1,de:r1};D.registerContribution(ae,s1);const mc=Se("extensions");q.registerExtension({id:"system.ai-system",name:mc("EXT_AI_SYSTEM_NAME"),description:mc("EXT_AI_SYSTEM_DESC"),loader:()=>ye(()=>import("./ai-system-extension-B6UDYaJx.js"),[]),icon:"robot",dependencies:["system.in-browser-ml"]});const th="events/aiservice/streamStarted",nh="events/aiservice/streamChunk",ih="events/aiservice/streamComplete",Jr="events/aiservice/streamError",rh="events/aiservice/aiConfigChanged",sh="events/aiservice/agentWorkflowStarted",oh="events/aiservice/agentWorkflowComplete",ah="events/aiservice/agentWorkflowError",lh="aiservice.agents",ch="aiservice.chatProviders",dh="aiservice.promptEnhancers",li="aiConfig",hh={defaultProvider:"openai",providers:[]},ea=10,X1=Object.freeze(Object.defineProperty({__proto__:null,AI_CONFIG_TEMPLATE:hh,CID_AGENTS:lh,CID_CHAT_PROVIDERS:ch,CID_PROMPT_ENHANCERS:dh,KEY_AI_CONFIG:li,MAX_TOOL_ITERATIONS:ea,TOPIC_AGENT_WORKFLOW_COMPLETE:oh,TOPIC_AGENT_WORKFLOW_ERROR:ah,TOPIC_AGENT_WORKFLOW_STARTED:sh,TOPIC_AICONFIG_CHANGED:rh,TOPIC_AI_STREAM_CHUNK:nh,TOPIC_AI_STREAM_COMPLETE:ih,TOPIC_AI_STREAM_ERROR:Jr,TOPIC_AI_STREAM_STARTED:th},Symbol.toStringTag,{value:"Module"}));class uh{constructor(){this.decoder=new TextDecoder}*processLines(e){for(const n of e)n.trim()!==""&&(yield n)}}class o1 extends uh{constructor(){super(...arguments),this.usage=null}async*parse(e){let n="";this.usage=null;try{for(;;){const{done:r,value:s}=await e.read();if(r)break;n+=this.decoder.decode(s,{stream:!0});const o=n.split(`
`);n=o.pop()||"";for(const l of this.processLines(o))if(l.startsWith("data: ")){const c=l.slice(6).trim();if(c==="[DONE]"){const h={type:"done",content:""};this.usage&&(h.metadata={usage:this.usage}),yield h;continue}try{const h=JSON.parse(c);if(h.error){yield{type:"error",content:h.error.message||"Unknown error",metadata:h.error};continue}this.extractUsage(h);const u=this.parseChunk(h);u&&(yield u)}catch{continue}}}if(n.trim()&&n.startsWith("data: ")){const r=n.slice(6).trim();if(r!=="[DONE]")try{const s=JSON.parse(r);this.extractUsage(s);const o=this.parseChunk(s);o&&(yield o)}catch{}}const i={type:"done",content:""};this.usage&&(i.metadata={usage:this.usage}),yield i}finally{e.releaseLock()}}extractUsage(e){if(e.usage){const n=e.usage;this.usage={promptTokens:n.prompt_tokens||0,completionTokens:n.completion_tokens||0,totalTokens:n.total_tokens||0,estimated:!1}}}parseChunk(e){const n=e.choices?.[0]?.delta,i=e.choices?.[0];if(n?.content)return{type:"token",content:n.content,message:{role:n.role||"assistant",content:i?.message?.content||n.content}};if(i?.message?.tool_calls){const r=this.parseToolCalls(i.message.tool_calls,!0);if(r.length>0)return{type:"token",content:"",toolCalls:r}}else if(n?.tool_calls||i?.delta?.tool_calls){const r=this.parseToolCalls(n?.tool_calls||i?.delta?.tool_calls||[],!1);if(r.length>0)return{type:"token",content:"",toolCalls:r}}return null}parseToolCalls(e,n=!1){return e.filter(i=>i.function!==void 0).map((i,r)=>({id:i.id||`call_${i.index!==void 0?i.index:r}_${Date.now()}`,type:"function",function:{name:i.function?.name||"",arguments:i.function?.arguments||(n?"{}":"")},_index:i.index!==void 0?i.index:r}))}}class a1 extends uh{constructor(){super(...arguments),this.usage=null}async*parse(e){let n="";this.usage=null;try{for(;;){const{done:r,value:s}=await e.read();if(r)break;n+=this.decoder.decode(s,{stream:!0});const o=n.split(`
`);n=o.pop()||"";for(const l of this.processLines(o))try{const c=JSON.parse(l);if(c.error){yield{type:"error",content:c.error,metadata:c};continue}if(c.done){this.extractUsage(c);const h={type:"done",content:""};this.usage&&(h.metadata={usage:this.usage}),yield h;continue}c.message?.content?yield{type:"token",content:c.message.content,message:{role:c.message.role||"assistant",content:c.message.content}}:c.response&&(yield{type:"token",content:c.response,message:{role:"assistant",content:c.response}})}catch{continue}}if(n.trim())try{const r=JSON.parse(n);r.done&&this.extractUsage(r),r.message?.content&&(yield{type:"token",content:r.message.content,message:{role:r.message.role||"assistant",content:r.message.content}})}catch{}const i={type:"done",content:""};this.usage&&(i.metadata={usage:this.usage}),yield i}finally{e.releaseLock()}}extractUsage(e){if(e.prompt_eval_count!==void 0||e.eval_count!==void 0){const n=e.prompt_eval_count||0,i=e.eval_count||0;this.usage={promptTokens:n,completionTokens:i,totalTokens:n+i,estimated:!1}}}}class ph{createParser(e,n){return e.includes("text/event-stream")||n.includes("openai")?new o1:new a1}async getAvailableModels(e){if(!e.chatApiEndpoint)return[];try{const n=e.chatApiEndpoint;let i=n;if(n.includes("/v1/chat/completions"))i=n.replace("/v1/chat/completions","");else if(n.includes("/api/v1/chat/completions"))i=n.replace("/api/v1/chat/completions","");else if(n.includes("/api/chat/completion"))i=n.replace("/api/chat/completion","");else try{const h=new URL(n);i=`${h.protocol}//${h.host}`}catch{return[]}const r=`${i}/v1/models`,s={"Content-Type":"application/json"};e.apiKey&&(s.Authorization=`Bearer ${e.apiKey}`);const o=await fetch(r,{method:"GET",headers:s});return o.ok?((await o.json()).data||[]).map(h=>({id:h.id,name:h.name||h.id})):[]}catch{return[]}}async*stream(e){const n={model:e.model,stream:!0,messages:e.messages,...e.chatConfig.parameters};e.tools&&e.tools.length>0&&(n.tools=e.tools,n.tool_choice="auto");const i=await fetch(e.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${e.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(n),signal:e.signal});if(!i.ok){const c=await i.text().catch(()=>"Unknown error");yield{type:"error",content:`HTTP ${i.status}: ${c}`,metadata:{status:i.status,statusText:i.statusText}};return}const r=i.headers.get("content-type")||"",s=i.headers.get("content-length");if(!i.body){yield{type:"error",content:`Response body is null or empty (Content-Length: ${s||"unknown"}). This may indicate: 1) The endpoint doesn't support streaming, 2) Authentication is required/invalid, 3) The endpoint URL is incorrect. For Open WebUI, ensure you're using the correct endpoint and API key.`,metadata:{status:i.status,contentType:r,contentLength:s,endpoint:e.chatConfig.chatApiEndpoint,hasApiKey:!!e.chatConfig.apiKey}};return}const o=i.body.getReader();if(!o){yield{type:"error",content:"Response body is not readable"};return}const l=this.createParser(r,e.chatConfig.chatApiEndpoint);try{for await(const c of l.parse(o))yield c}catch(c){yield{type:"error",content:c instanceof Error?c.message:"Failed to parse response stream",metadata:{error:c,contentType:r,endpoint:e.chatConfig.chatApiEndpoint}}}}}class l1 extends ph{constructor(){super(...arguments),this.name="openai"}canHandle(e){return e.chatApiEndpoint.includes("openai")||e.chatApiEndpoint.includes("v1/chat/completions")}}class c1 extends ph{constructor(){super(...arguments),this.name="ollama"}canHandle(e){return e.name.toLowerCase()==="ollama"||e.chatApiEndpoint.includes("ollama")||e.chatApiEndpoint.includes("localhost:11434")}}class d1{constructor(){this.providers=[],this.registerDefaultProviders()}registerDefaultProviders(){this.providers.push(new l1),this.providers.push(new c1)}registerProvider(e){this.providers.push(e)}getProvider(e){const n=this.providers.find(i=>i.canHandle(e));return n||this.providers[0]}getAllProviders(){return[...this.providers]}}class h1{getAgentContributions(){return D.getContributions(lh)}filterAndSortAgents(e,n){return e.filter(i=>i.canHandle?i.canHandle(n):!0).sort((i,r)=>(r.priority||0)-(i.priority||0))}getMatchingAgents(e,n){const i=this.getAgentContributions();if(i.length===0)throw new Error("No agents are registered. The App Support agent should be available from the AI system extension.");let r=i.filter(s=>n&&!n.includes(s.role)?!1:s.canHandle?s.canHandle(e):!0);if(n&&n.length>0){if(r=r.sort((s,o)=>(o.priority||0)-(s.priority||0)),r.length===0){const s=n.join(", ");throw new Error(`No agents found for requested roles: ${s}. Available agents: ${i.map(o=>o.role).join(", ")}`)}}else if(r=this.filterAndSortAgents(r,e),r.length===0)throw new Error(`No agents can handle the current context. Available agents: ${i.map(s=>s.role).join(", ")}`);return r}}class fh{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}commandToTool(e,n){const i={},r=[];return e.parameters?.forEach(l=>{const c=this.sanitizeFunctionName(l.name);i[c]={type:l.type||"string",description:l.description,...l.allowedValues&&{enum:l.allowedValues}},l.required===!0&&r.push(c)}),{type:"function",function:{name:this.sanitizeFunctionName(e.id),description:e.description||e.name,parameters:{type:"object",properties:i,required:r}}}}getAvailableTools(e,n){const i=Xe.listCommands();let r=Object.values(i);return n&&(r=r.filter(s=>n(s,e))),r.map(s=>this.commandToTool(s,e))}}const hn=an("ToolDetector");class u1{constructor(){this.classifier=null,this.loading=!1,this.loadPromise=null}async ensureLoaded(){if(!this.classifier)return this.loading&&this.loadPromise?this.loadPromise:(this.loading=!0,this.loadPromise=(async()=>{try{hn.info("Loading ML model for tool detection..."),this.classifier=await t1.getPipeline(Qd.ZERO_SHOT_CLASSIFICATION,Jd.ZERO_SHOT_CLASSIFICATION,{quantized:!0}),hn.info("ML model loaded successfully - will use for tool detection")}catch(e){const n=e instanceof Error?e.message:String(e);hn.warn(`Failed to load ML model, will use keyword-based detection fallback: ${n}`),this.classifier=null}finally{this.loading=!1}})(),this.loadPromise)}async needsTools(e){if(!e||e.trim().length===0)return!1;const n=e.toLowerCase().trim();if(["hello","hi","hey","thanks","thank you","bye","goodbye"].some(s=>n===s||n.startsWith(s+" ")))return!1;try{if(await this.ensureLoaded(),this.classifier){hn.info(`Using ML model to classify prompt: "${n.substring(0,50)}${n.length>50?"...":""}"`);const s=await this.classifier(n,["requires executing commands or actions","is a simple greeting or question"]),o=s.labels[0]==="requires executing commands or actions"&&s.scores[0]>.6;return hn.info(`ML classification result: ${s.labels[0]} (confidence: ${(s.scores[0]*100).toFixed(1)}%) - needsTools: ${o}`),o}}catch(s){const o=s instanceof Error?s.message:String(s);hn.warn(`ML classification failed, using keyword fallback: ${o}`)}hn.info("Using keyword-based detection (ML model not available)");const r=this.keywordBasedDetection(n);return hn.info(`Keyword detection result: needsTools=${r}`),r}keywordBasedDetection(e){const n=["create","open","delete","read","write","edit","save","rename","move","copy","list","show","display","run","execute","build","add","remove","update","modify","change","set","get","find","search","filter","sort","install","uninstall","load","import","export","generate","make","do","perform","call","invoke"],i=["file","folder","directory","workspace","editor","map","layer","command","tool","extension","script","code","project"],r=n.some(o=>e.includes(o)),s=i.some(o=>e.includes(o));return r&&(s||e.length>20)}dispose(){this.classifier=null,this.loading=!1,this.loadPromise=null}}const p1=new u1;class f1{constructor(){this.toolRegistry=new fh,this.enhancers=[]}addEnhancer(e){this.enhancers.push(e)}async getSysPrompt(e,n){let i=e.sysPrompt;if(typeof i=="function"&&(i=i()),!i||typeof i!="string")throw new Error(`Agent "${e.role}" (${e.label}) is missing a system prompt. All agents must provide a sysPrompt.`);const r=[...e.promptEnhancers||[],...this.enhancers,...this.getContributedEnhancers()].sort((o,l)=>(l.priority||0)-(o.priority||0));let s=i;for(const o of r)try{s=await o.enhance(s,n),(!s||typeof s!="string")&&(s=i)}catch(l){console.warn("[PromptBuilder] Enhancer failed:",l)}return s}rewriteChatHistoryForAgent(e,n){return e.map(i=>i.role==="user"?{role:i.role,content:i.content}:i.role===n?{role:"assistant",content:i.content}:{role:"user",content:`***Agent '${i.role}' replied:***
${i.content}`})}getContributedEnhancers(){return D.getContributions(dh).map(n=>({...n.enhancer,priority:n.priority??n.enhancer.priority}))}async build(e,n,i,r){r?.beforeSend&&await r.beforeSend(n,i);const s=this.sanitizeMessagesForAPI(n),o=this.rewriteChatHistoryForAgent(s,e.role);let l=e.tools;typeof l=="function"&&(l=await l());let c;if(l?.enabled)if(l.smartToolDetection){const g=n[n.length-1]?.content||"";await p1.needsTools(g)&&(c=this.toolRegistry.getAvailableTools(i,l.commandFilter))}else c=this.toolRegistry.getAvailableTools(i,l.commandFilter);const h=await this.getSysPrompt(e,i);o.unshift({role:"system",content:h});const u=o.length-1;return{messages:o,userPromptIndex:u,tools:c}}sanitizeMessageForAPI(e){const n={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(n.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(n.tool_calls=e.tool_calls),n}sanitizeMessagesForAPI(e){return e.map(n=>this.sanitizeMessageForAPI(n))}}class m1{constructor(){this.processors=[]}addProcessor(e){this.processors.push(e)}getSortedProcessors(){return[...this.processors].sort((e,n)=>(n.priority||0)-(e.priority||0))}async process(e,n,i){let r={...e};const s=[...n.messageProcessors||[],...this.processors].sort((l,c)=>(c.priority||0)-(l.priority||0));for(const l of s)r=await l.process(r,i);const o=r.actions?.some(l=>l.requiresAttention)||r.attentionRequests?.some(l=>l.requiresAction)||!1;return{...r,requiresAttention:o}}checkRequiresAttention(e){return e.actions?.some(n=>n.requiresAttention)||e.attentionRequests?.some(n=>n.requiresAction)||!1}}class g1{constructor(){this.accumulatedToolCalls=new Map,this.toolCallIndexMap=new Map}processChunk(e){if(e.type==="token"&&e.toolCalls&&e.toolCalls.length>0)for(const n of e.toolCalls){const i=n._index,r=n.id;let s,o;if(i!==void 0&&this.toolCallIndexMap.has(i)?(o=this.toolCallIndexMap.get(i),s=this.accumulatedToolCalls.get(o)):r&&this.accumulatedToolCalls.has(r)?(o=r,s=this.accumulatedToolCalls.get(o)):(o=r||`call_${i!==void 0?i:Date.now()}_${Math.random()}`,s=void 0),s){const l=s.function.arguments||"",c=n.function.arguments||"",h=l+c;this.accumulatedToolCalls.set(o,{id:o,type:n.type||s.type,function:{name:n.function.name||s.function.name,arguments:h}}),i!==void 0&&!this.toolCallIndexMap.has(i)&&this.toolCallIndexMap.set(i,o)}else this.accumulatedToolCalls.set(o,{...n,id:o}),i!==void 0&&this.toolCallIndexMap.set(i,o)}}getFinalToolCalls(){return Array.from(this.accumulatedToolCalls.values()).filter(e=>e.function.name&&e.function.name.trim().length>0).map(e=>{let n=e.function.arguments||"";return(!n||n.trim()==="")&&(n="{}"),{...e,function:{...e.function,arguments:n}}})}reset(){this.accumulatedToolCalls.clear(),this.toolCallIndexMap.clear()}}class mh{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}findCommand(e,n){const i=e.function.name,r=Xe.getCommand(i);if(r)return r;const s=Xe.listCommands();for(const[o,l]of Object.entries(s))if(this.sanitizeFunctionName(o)===i)return l;return null}parseArguments(e){if(!e||e.trim()===""||e==="{}")return{};try{const n=JSON.parse(e);return n&&typeof n=="object"?n:{}}catch(n){const i=n instanceof Error?n.message:String(n);return console.error(`[ToolExecutor] Failed to parse arguments: ${e} - ${i}`),{}}}sanitizeArguments(e,n){if(!n||!n.parameters||!e||typeof e!="object")return e||{};const i={};return n.parameters.forEach(r=>{const s=this.sanitizeFunctionName(r.name);s in e&&(i[r.name]=e[s])}),i}async executeToolCall(e,n){try{const i=this.findCommand(e,n),r=i?.id||e.function.name,s=e.function.arguments||"{}",o=this.parseArguments(s),l=this.sanitizeArguments(o,i),c=Xe.createExecutionContext(l),h={...n,...c,params:l};let u=await Xe.execute(r,h);const g={success:!0,message:`Command "${i?.name||r}" executed successfully`,command:r};if(l&&typeof l=="object"&&Object.keys(l).length>0&&(g.parameters=l),u){let b=u;if(b instanceof Promise&&(b=await b),g.result=b,i?.output&&i.output.length>0){const w=i.output.map(k=>`${k.name}: ${k.description||k.type||"value"}`).join(", ");g.output=w}}return{id:e.id,result:g}}catch(i){const r=i instanceof Error?i.message:String(i);let s=null;try{s=this.findCommand(e,n)}catch{s=null}const o=s?.name||e.function.name;let l=r;return r.includes("No handler found")||r.includes("No handlers registered")?l=`Command "${o}" cannot be executed. ${r}. This usually means the command is not available in the current context (e.g., a map editor may not be open or active).`:(r.includes("not available")||r.includes("GsMapEditor"))&&(l=`Command "${o}" cannot be executed: ${r}. Please ensure the required editor or component is open and active.`),{id:e.id,result:null,error:l}}}async executeToolCalls(e,n){const i=[];for(const r of e){const s=await this.executeToolCall(r,n);i.push(s)}return i}createToolCallAccumulator(){return new g1}createToolCallSignature(e){const n=e.function.arguments||"{}";let i={};try{const s=JSON.parse(n);i=s&&typeof s=="object"?s:{}}catch{i={}}const r=i&&typeof i=="object"?Object.keys(i).sort().reduce((s,o)=>(s[o]=i[o],s),{}):{};return`${e.function.name}:${JSON.stringify(r)}`}}const G1=Object.freeze(Object.defineProperty({__proto__:null,ToolExecutor:mh},Symbol.toStringTag,{value:"Module"}));class b1{async execute(e,n,i,r){const s=n.chatConfig;if(!s)throw new Error("Chat config is required");const o=e.map(async l=>{try{await r(l,n.chatContext.history,i.sharedState,s,n,i)}catch(c){const h=c instanceof Error?c:new Error(String(c));i.errors.set(l.role,h),n.onAgentError?.(l.role,h)}});await Promise.all(o)}}class w1{async execute(e,n,i,r){const s=n.chatConfig;if(!s)throw new Error("Chat config is required");let o=[...n.chatContext.history],l={...i.sharedState};for(const c of e)try{const h=this.createAgentContextWithPreviousAgents(l,n,i),u=await r(c,o,l,s,n,i);if(!u)break;const p=this.updateWorkflowState(u,o,l,h,i);o=p.currentMessages,l=p.accumulatedState}catch(h){const u=h instanceof Error?h:new Error(String(h));i.errors.set(c.role,u),n.onAgentError?.(c.role,u);break}}createAgentContextWithPreviousAgents(e,n,i){return{...e,...n.callContext.getProxy(),previousAgents:Array.from(i.messages.entries()).map(([r,s])=>({role:r,content:s.content}))}}updateWorkflowState(e,n,i,r,s){return n.push(e),i={...i,...r,message:e},s.sharedState=i,{currentMessages:n,accumulatedState:i}}}class v1{async execute(e,n,i,r){const s=n.chatConfig;if(!s)throw new Error("Chat config is required");let o=[...n.chatContext.history],l={...i.sharedState};for(const c of e)try{const h=this.createAgentContextWithPreviousAgents(l,n,i);if(c.canHandle&&!c.canHandle(h))continue;const u=await r(c,o,l,s,n,i);if(!u)break;const p=this.updateWorkflowState(u,o,l,h,i);o=p.currentMessages,l=p.accumulatedState}catch(h){const u=h instanceof Error?h:new Error(String(h));i.errors.set(c.role,u),n.onAgentError?.(c.role,u)}}createAgentContextWithPreviousAgents(e,n,i){return{...e,...n.callContext.getProxy(),previousAgents:Array.from(i.messages.entries()).map(([r,s])=>({role:r,content:s.content}))}}updateWorkflowState(e,n,i,r,s){return n.push(e),i={...i,...r,message:e},s.sharedState=i,{currentMessages:n,accumulatedState:i}}}class y1{constructor(){this.strategies=new Map([["parallel",new b1],["sequential",new w1],["conditional",new v1]])}registerStrategy(e,n){this.strategies.set(e,n)}async execute(e,n,i){const r=`workflow-${Date.now()}-${Math.random()}`,s=n.execution||"parallel",o=n.sharedState||{},l={messages:new Map,sharedState:{...o},errors:new Map};se(sh,{workflowId:r,options:n});try{const c=this.strategies.get(s);if(!c)throw new Error(`Unknown workflow execution strategy: ${s}`);return await c.execute(e,n,l,i),se(oh,{workflowId:r,results:l}),l}catch(c){const h=c instanceof Error?c:new Error(String(c));throw se(ah,{workflowId:r,error:h}),h}}}const ur=class ur{static estimateTokens(e){if(!e||e.trim().length===0)return 0;const n=e.trim(),i=n.length,r=n.split(/\s+/).filter(o=>o.length>0).length,s=Math.ceil(i/this.AVERAGE_CHARS_PER_TOKEN+r*.3);return Math.max(1,s)}static estimateMessageTokens(e){let n=this.MESSAGE_OVERHEAD;if(e.content&&(n+=this.estimateTokens(e.content)),e.role&&(n+=this.estimateTokens(e.role)),e.tool_calls)for(const i of e.tool_calls)n+=this.estimateTokens(i.function.name||""),n+=this.estimateTokens(i.function.arguments||"{}"),n+=10;return e.tool_call_id&&(n+=this.estimateTokens(e.tool_call_id)),n}static estimatePromptTokens(e,n){let i=0;for(const r of e)i+=this.estimateMessageTokens(r);if(n&&n.length>0){for(const r of n)if(i+=this.TOOL_DEFINITION_OVERHEAD,i+=this.estimateTokens(r.function.name||""),i+=this.estimateTokens(r.function.description||""),r.function.parameters){const s=JSON.stringify(r.function.parameters);i+=this.estimateTokens(s)}}return i}static estimateCompletionTokens(e,n){let i=this.estimateTokens(e);if(n&&n.length>0)for(const r of n)i+=10,i+=this.estimateTokens(r.function?.name||""),i+=this.estimateTokens(r.function?.arguments||"{}");return i}};ur.AVERAGE_CHARS_PER_TOKEN=4,ur.TOOL_DEFINITION_OVERHEAD=50,ur.MESSAGE_OVERHEAD=4;let $s=ur;const gc="ai_token_usage";class x1{constructor(){this.data=null,this.loadPromise=null}async loadData(){return this.data?this.data:this.loadPromise?this.loadPromise:(this.loadPromise=(async()=>{const e=await Et.getObject(gc);return e?this.data=e:(this.data={providers:{},total:{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},lastUpdated:Date.now()},await this.saveData()),this.loadPromise=null,this.data})(),this.loadPromise)}async saveData(){this.data&&(this.data.lastUpdated=Date.now(),await Et.persistObject(gc,this.data))}async recordUsage(e,n){if(await this.loadData(),!this.data)return;this.data.providers[e]||(this.data.providers[e]={promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0});const i=this.data.providers[e];i.promptTokens+=n.promptTokens,i.completionTokens+=n.completionTokens,i.totalTokens+=n.totalTokens,i.requestCount+=1,this.data.total.promptTokens+=n.promptTokens,this.data.total.completionTokens+=n.completionTokens,this.data.total.totalTokens+=n.totalTokens,this.data.total.requestCount+=1,await this.saveData()}async getProviderUsage(e){return await this.loadData(),this.data?.providers[e]||null}async getAllProviderUsage(){return await this.loadData(),this.data?.providers||{}}async getTotalUsage(){return await this.loadData(),this.data?.total||{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0}}async reset(){this.data={providers:{},total:{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},lastUpdated:Date.now()},await this.saveData()}async resetProvider(e){if(await this.loadData(),!this.data)return;const n=this.data.providers[e];n&&(this.data.total.promptTokens-=n.promptTokens,this.data.total.completionTokens-=n.completionTokens,this.data.total.totalTokens-=n.totalTokens,this.data.total.requestCount-=n.requestCount,delete this.data.providers[e],await this.saveData())}}const k1=new x1;class E1{constructor(){this.activeRequests=new Map,this.providerFactory=new d1,this.agentRegistry=new h1,this.promptBuilder=new f1,this.messageProcessor=new m1,this.toolExecutor=new mh,this.workflowEngine=new y1,this.toolRegistry=new fh,Fe(Mn,()=>{this.aiConfig=void 0,this.configCheckPromise=void 0,this.checkAIConfig().then()}),this.checkAIConfig().then()}getAgentContributions(){return this.agentRegistry.getAgentContributions()}async getProviders(){return await this.checkAIConfig(),this.aiConfig?.providers||[]}async getDefaultProvider(){await this.checkAIConfig();const e=await this.getProviders();if(this.aiConfig?.defaultProvider){const n=e.find(i=>i.name===this.aiConfig?.defaultProvider);if(n)return n}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig&&(this.aiConfig.defaultProvider=e,await me.set(li,this.aiConfig)),this.getDefaultProvider()}createMessage(e){return{role:"user",content:e}}registerStreamingFetcher(e){this.providerFactory.registerProvider(e)}getContributedProviders(){return D.getContributions(ch).map(n=>n.provider)}mergeProviders(e,n){const i=new Set(e.map(s=>s.name)),r=n.filter(s=>!i.has(s.name));return r.length>0?[...e,...r]:e}async createInitialConfig(){const e=this.getContributedProviders(),n={...hh,providers:e};return await me.set(li,n),await me.get(li)}async updateConfigWithMissingProviders(e){const n=this.getContributedProviders(),i=this.mergeProviders(e.providers,n);if(i.length!==e.providers.length){const r={...e,providers:i};return await me.set(li,r),r}return e}async checkAIConfig(){if(!this.aiConfig)return this.configCheckPromise?this.configCheckPromise:(this.configCheckPromise=this.performConfigCheck(),this.configCheckPromise)}async performConfigCheck(){try{this.aiConfig=await me.get(li),this.aiConfig?this.aiConfig=await this.updateConfigWithMissingProviders(this.aiConfig):this.aiConfig=await this.createInitialConfig(),se(rh,this.aiConfig)}finally{this.configCheckPromise=void 0}}createAgentContext(e,n,i={}){return{...e,...n.getProxy(),...i}}createFinalMessage(e,n){return{role:e.role,content:n.content,actions:n.actions,requiresAttention:n.requiresAttention,attentionRequests:n.attentionRequests,canContinue:n.canContinue}}async handleUserAttention(e,n,i,r){if(!n.requiresAttention||!i.userAttentionHandler)return!0;const s=[];if(n.attentionRequests&&s.push(...n.attentionRequests),n.actions)for(const c of n.actions)c.requiresAttention&&c.attentionRequest&&s.push(c.attentionRequest);if(s.length===0)return!0;if(r.pendingAttention||(r.pendingAttention=new Map),r.pendingAttention.set(e,s),i.onAttentionRequest)for(const c of s)i.onAttentionRequest(e,c);if(i.pauseOnAttention)return r.paused=!0,r.continuationToken=`${e}-${Date.now()}-${Math.random()}`,!1;const o=i.userAttentionHandler,l=this.createAgentContext(i.sharedState||{},i.callContext,{message:n});for(const c of s)if(o.onAttentionRequest){const h=await o.onAttentionRequest(c,l);if(c.requiresAction&&(h===!1||h===null))return!1;h&&typeof h=="string"&&(l[`attention_${c.type}_result`]=h)}else switch(c.type){case"confirmation":if(o.onConfirmation&&!await o.onConfirmation(c.message,l)&&c.requiresAction)return!1;break;case"input":if(o.onInput){const h=await o.onInput(c.message,void 0,l);if(!h&&c.requiresAction)return!1;h&&(l.attention_input_result=h)}break}return!0}async*streamCompletion(e){const n=`${Date.now()}-${Math.random()}`,i=new AbortController;this.activeRequests.set(n,i),e.signal&&e.signal.addEventListener("abort",()=>{i.abort()});const r=e.signal||i.signal;try{e.onStatus?.("starting"),se(th,{requestId:n,options:e});const s=e.chatConfig||await this.getDefaultProvider(),o=this.sanitizeMessagesForAPI(e.chatContext.history),l=this.providerFactory.getProvider(s),c=this.toolExecutor.createToolCallAccumulator();let h="",u={role:"assistant",content:""},p;for await(const w of l.stream({model:s.model,messages:o,chatConfig:s,tools:e.tools,signal:r})){if(w.type==="error"){e.onStatus?.("error"),se(Jr,{requestId:n,chunk:w}),yield w;break}if(w.type==="token")c.processChunk(w),(!w.toolCalls||w.toolCalls.length===0)&&(h+=w.content,u.content=h),w.message?.role&&(u.role=w.message.role),w.content&&e.onToken?.(w.content),e.onStatus?.("streaming"),e.onProgress?.({received:h.length}),se(nh,{requestId:n,chunk:w}),yield w;else if(w.type==="done"){w.metadata?.usage&&(p=w.metadata.usage),e.onStatus?.("complete"),se(ih,{requestId:n}),yield w;break}else yield w}const g=c.getFinalToolCalls(),b={role:u.role||"assistant",content:h||"",...g.length>0&&{toolCalls:g}};if(!p){const w=$s.estimatePromptTokens(o,e.tools),k=$s.estimateCompletionTokens(h,g);p={promptTokens:w,completionTokens:k,totalTokens:w+k,estimated:!0}}return k1.recordUsage(s.name,p).catch(w=>{G.error(`Failed to record token usage: ${w instanceof Error?w.message:String(w)}`)}),{message:b,tokenUsage:p}}catch(s){if(s instanceof Error&&s.name==="AbortError")throw e.onStatus?.("error"),se(Jr,{requestId:n,error:"Request cancelled"}),s;e.onStatus?.("error");const o=s instanceof Error?s.message:String(s);throw se(Jr,{requestId:n,error:o}),yield{type:"error",content:o,metadata:{error:s}},s}finally{this.activeRequests.delete(n)}}async handleStreamingPromptDirect(e){const n=this.streamCompletion(e);let i;for(;;){if(i=await n.next(),i.done)return i.value.message;const r=i.value;if(r.type==="error")throw new Error(r.content);if(r.type==="done"){const s=await n.next();if(s.done&&s.value)return s.value.message;if(!s.done)continue;throw new Error("Stream completed without return value")}}}sanitizeMessageForAPI(e){const n={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(n.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(n.tool_calls=e.tool_calls),n}sanitizeMessagesForAPI(e){return e.map(n=>this.sanitizeMessageForAPI(n))}async handleStreamingPrompt(e){const n=e.callContext||$e.createChild({}),i=this.createAgentContext({},n,{userPrompt:e.chatContext.history[e.chatContext.history.length-1]?.content||""}),r=this.agentRegistry.getMatchingAgents(i),s=r.length>0?r.map(c=>c.role):["assistant"],o=await this.executeAgentWorkflow({chatContext:e.chatContext,chatConfig:e.chatConfig,callContext:n,execution:"parallel",stream:e.stream,signal:e.signal,onToken:(c,h)=>{e.onToken?.(h)},onStatus:(c,h)=>{e.onStatus?.(h)},roles:s}),l=Array.from(o.messages.values());return l.length===1?l[0]:l}async continueWorkflow(e,n,i){const r={sharedState:{...i.sharedState,...Object.fromEntries(n)}},s={...i,sharedState:r.sharedState,pauseOnAttention:!1};return this.executeAgentWorkflow(s)}cancelRequest(e){const n=this.activeRequests.get(e);return n?(n.abort(),this.activeRequests.delete(e),!0):!1}async executeAgentWorkflow(e){const n=this.createAgentContext(e.sharedState||{},e.callContext),i=this.agentRegistry.getMatchingAgents(n,e.roles);return this.workflowEngine.execute(i,e,async(r,s,o,l,c,h)=>this.executeAgent(r,s,o,l,c,h))}async executeAgent(e,n,i,r,s,o){s.onAgentStart?.(e.role);const l=this.createAgentContext(i,s.callContext,{userPrompt:n[n.length-1]?.content||""}),{messages:c,tools:h}=await this.promptBuilder.build(e,n,l,e.hooks),u=c.map(S=>{const P={role:S.role,content:S.content};return S.tool_call_id&&(P.tool_call_id=S.tool_call_id),S.tool_calls&&(P.tool_calls=S.tool_calls),P});let p=await this.handleStreamingPromptDirect({chatContext:{history:u},chatConfig:r,callContext:s.callContext,stream:s.stream??!0,signal:s.signal,tools:h}),g=0;const b=[...c];for(;p.toolCalls&&p.toolCalls.length>0;){if(g++,g>ea){console.warn(`[AIService] Maximum tool call iterations (${ea}) reached`);break}let S=[];if(s.requireToolApproval&&s.onToolApprovalRequest){const z=p.toolCalls.map(le=>{const Ie=le.function.arguments||"{}";let xe={};try{xe=JSON.parse(Ie)}catch{xe={}}return`${le.function.name}(${Object.entries(xe).map(([Ae,Ee])=>`${Ae}=${Ee}`).join(", ")})`}).join(", "),ge={toolCalls:p.toolCalls,message:`The AI wants to execute: ${z}`};await s.onToolApprovalRequest(e.role,ge)?S=await this.toolExecutor.executeToolCalls(p.toolCalls,l):S=p.toolCalls.map(le=>({id:le.id,result:{success:!1,message:"Tool execution cancelled by user",cancelled:!0}}))}else S=await this.toolExecutor.executeToolCalls(p.toolCalls,l);const P=S.map(z=>({role:"tool",content:z.error?JSON.stringify({error:z.error}):JSON.stringify(z.result),tool_call_id:z.id})),R={role:"assistant",content:p.content||""};p.toolCalls&&p.toolCalls.length>0&&(R.tool_calls=p.toolCalls.filter(z=>z.function.name&&z.function.name.trim().length>0).map(z=>({id:z.id,type:z.type,function:{name:z.function.name,arguments:z.function.arguments||"{}"}}))),b.push(R,...P);const O=b;p=await this.handleStreamingPromptDirect({chatContext:{history:O.map(z=>({role:z.role,content:z.content,...z.tool_call_id&&{tool_call_id:z.tool_call_id},...z.tool_calls&&{tool_calls:z.tool_calls}}))},chatConfig:r,callContext:s.callContext,stream:s.stream??!0,signal:s.signal,tools:h});const _=p.content&&p.content.trim().length>0,W=p.toolCalls&&p.toolCalls.length>0;if(_&&!W)break;if(_&&W){console.warn("[AIService] Model provided content but also called tools - treating as completion");break}}const w=await this.messageProcessor.process(p,e,this.createAgentContext(i,s.callContext,{message:p}));e.hooks?.afterReceive&&await e.hooks.afterReceive(w,this.createAgentContext(i,s.callContext));const k=this.createFinalMessage(e,w);return!await this.handleUserAttention(e.role,k,s,o)&&s.pauseOnAttention?null:(o.messages.set(e.role,k),s.onAgentComplete?.(e.role,k),k)}}const K1=new E1,C1="extensions",$1={EXT_RAG_SYSTEM_NAME:"RAG System",EXT_RAG_SYSTEM_DESC:"Retrieval-Augmented Generation system for document indexing, search and retrieval"},S1={EXT_RAG_SYSTEM_NAME:"RAG-System",EXT_RAG_SYSTEM_DESC:"Retrieval-Augmented Generation System für Dokumentenindizierung, Suche und Abruf"},A1={namespace:C1,en:$1,de:S1};D.registerContribution(ae,A1);const bc=Se("extensions");q.registerExtension({id:"system.rag-system",name:bc("EXT_RAG_SYSTEM_NAME"),description:bc("EXT_RAG_SYSTEM_DESC"),loader:()=>ye(()=>import("./rag-system-extension-D90OqctJ.js").then(t=>t.b),[]),icon:"database",experimental:!0,dependencies:["system.ai-system","system.in-browser-ml"]});const _1="extensions",T1={EXT_HOWTO_NAME:"HowTo System",EXT_HOWTO_DESC:"Step-by-step workflow system with pre and post condition checks"},R1={EXT_HOWTO_NAME:"HowTo-System",EXT_HOWTO_DESC:"Schritt-für-Schritt-Workflow-System mit Vor- und Nachbedingungsprüfungen"},L1={namespace:_1,en:T1,de:R1};D.registerContribution(ae,L1);const wc=Se("extensions");q.registerExtension({id:"system.howto",name:wc("EXT_HOWTO_NAME"),description:wc("EXT_HOWTO_DESC"),loader:()=>ye(()=>import("./howto-extension-kCUVRgGv.js"),[]),icon:"list-check"});xh.start();Av({packageInfo:{name:er.name,version:er.version,dependencies:er.dependencies,devDependencies:er.devDependencies},marketplaceCatalogUrls:er.marketplace?.catalogUrls});mt.registerApp({id:"dev-standard-app",name:"Default App",version:"0.0.0",description:"Default app!space application",extensions:["system.commandpalette","system.mdeditor","system.monaco","system.mediaviewer","system.settings-tree","system.memoryusage","system.ai-system"]},{autoStart:!0});mt.registerApp({id:"dev-standard-app-2",name:"Default App 2",version:"0.0.0",description:"Default app!space application 2",extensions:["system.mdeditor","system.monaco","system.mediaviewer","system.settings-tree","system.memoryusage","system.ai-system"],render:{tag:"k-standard-app",attributes:{"show-bottom-panel":"true"}}});export{zo as $,t1 as A,ut as B,Wc as C,G as D,an as E,vw as F,K1 as G,Xt as H,yc as I,cr as J,pt as K,ni as L,sd as M,Ea as N,se as O,hi as P,dh as Q,rd as R,ae as S,Di as T,I1 as U,bh as V,Dn as W,jt as X,vr as Y,Vc as Z,ye as _,j1 as a,mt as a0,rh as a1,li as a2,yr as a3,N as a4,Er as a5,Jd as a6,Qd as a7,Vf as a8,mi as a9,xs as aA,Et as aB,jl as aC,Oi as aD,Gh as aE,ih as aF,k1 as aG,d1 as aH,lh as aI,X1 as aJ,G1 as aK,O1 as aa,gt as ab,ch as ac,gn as ad,Me as ae,A as af,jm as ag,Jf as ah,pn as ai,cd as aj,$a as ak,Yn as al,Ti as am,Ca as an,ld as ao,ad as ap,cs as aq,od as ar,Os as as,yw as at,bt as au,Po as av,Av as aw,Mt as ax,q as ay,Se as az,pe as b,wi as c,Nt as d,_n as e,Ws as f,$ as g,C as h,Le as i,Xe as j,ne as k,D as l,bn as m,d as n,en as o,Yv as p,Mn as q,$e as r,Fe as s,de as t,me as u,Sa as v,Rn as w,f as x,Ps as y,tn as z};
