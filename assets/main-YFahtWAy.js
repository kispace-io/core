const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/python-runtime-extension-Co0IKAUS.js","assets/pyservice-BPjeJHue.js","assets/p12-splitter-jIDknhix.js","assets/transformers-cu5nioww.js","assets/__vite-browser-external-DTHgcB49.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();var z2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function P2(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var i=function s(){var r=!1;try{r=this instanceof s}catch{}return r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};i.prototype=e.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var r=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:function(){return t[s]}})}),i}var qr={exports:{}};var vh=qr.exports,Xn;function yh(){return Xn||(Xn=1,(function(t,e){(function(){var i,s,r,o,a,l,c,h,u,p,m,b,w,k,D,E,M,T,I,O,F,P,we,ve,ce,Oe,Ce,Te,$e,De,j,We,Ge,St,_i,Xo,_r,ct,es,Go,Ms,Tr,Ko,Lr,Rr,Mn,Nn,Yo,Fn,Un,Ns=[].slice,Bn={}.hasOwnProperty,qn=function(v,g){for(var y in g)Bn.call(g,y)&&(v[y]=g[y]);function x(){this.constructor=v}return x.prototype=g.prototype,v.prototype=new x,v.__super__=g.prototype,v},bh=[].indexOf||function(v){for(var g=0,y=this.length;g<y;g++)if(g in this&&this[g]===v)return g;return-1},Vn=function(v,g){return function(){return v.apply(g,arguments)}};for(P={className:"",catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},De=function(){var v;return(v=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance.now():void 0)!=null?v:+new Date},We=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,F=window.cancelAnimationFrame||window.mozCancelAnimationFrame,E=function(v,g,y){return typeof v.addEventListener=="function"?v.addEventListener(g,y,!1):(function(){if(typeof v["on"+g]!="function"||typeof v["on"+g].eventListeners!="object"){var x=new h;typeof v["on"+g]=="function"&&x.on(g,v["on"+g]),v["on"+g]=function(C){return x.trigger(g,C)},v["on"+g].eventListeners=x}else var x=v["on"+g].eventListeners;x.on(g,y)})()},We==null&&(We=function(v){return setTimeout(v,50)},F=function(v){return clearTimeout(v)}),St=function(v){var g,y;return g=De(),y=function(){var x;return x=De()-g,x>=33?(g=De(),v(x,function(){return We(y)})):setTimeout(y,33-x)},y()},Ge=function(){var v,g,y;return y=arguments[0],g=arguments[1],v=3<=arguments.length?Ns.call(arguments,2):[],typeof y[g]=="function"?y[g].apply(y,v):y[g]},we=function(){var v,g,y,x,C,L,V;for(g=arguments[0],x=2<=arguments.length?Ns.call(arguments,1):[],L=0,V=x.length;L<V;L++)if(y=x[L],y)for(v in y)Bn.call(y,v)&&(C=y[v],g[v]!=null&&typeof g[v]=="object"&&C!=null&&typeof C=="object"?we(g[v],C):g[v]=C);return g},T=function(v){var g,y,x,C,L;for(y=g=0,C=0,L=v.length;C<L;C++)x=v[C],y+=Math.abs(x),g++;return y/g},ce=function(v,g){var y,x,C;if(v==null&&(v="options"),g==null&&(g=!0),C=document.querySelector("[data-pace-"+v+"]"),!!C){if(y=C.getAttribute("data-pace-"+v),!g)return y;try{return JSON.parse(y)}catch(L){return x=L,typeof console<"u"&&console!==null?console.error("Error parsing inline pace options",x):void 0}}},c=(function(){function v(){}return v.prototype.on=function(g,y,x,C){var L;return C==null&&(C=!1),this.bindings==null&&(this.bindings={}),(L=this.bindings)[g]==null&&(L[g]=[]),this.bindings[g].push({handler:y,ctx:x,once:C})},v.prototype.once=function(g,y,x){return this.on(g,y,x,!0)},v.prototype.off=function(g,y){var x,C,L;if(((C=this.bindings)!=null?C[g]:void 0)!=null){if(y==null)return delete this.bindings[g];for(x=0,L=[];x<this.bindings[g].length;)this.bindings[g][x].handler===y?L.push(this.bindings[g].splice(x,1)):L.push(x++);return L}},v.prototype.trigger=function(){var g,y,x,C,L,V,Y,de,Ee;if(x=arguments[0],g=2<=arguments.length?Ns.call(arguments,1):[],(Y=this.bindings)!=null&&Y[x]){for(L=0,Ee=[];L<this.bindings[x].length;)de=this.bindings[x][L],C=de.handler,y=de.ctx,V=de.once,C.apply(y??this,g),V?Ee.push(this.bindings[x].splice(L,1)):Ee.push(L++);return Ee}},v})(),p=window.Pace||{},window.Pace=p,we(p,c.prototype),j=p.options=we({},P,window.paceOptions,ce()),Yo=["ajax","document","eventLag","elements"],Lr=0,Mn=Yo.length;Lr<Mn;Lr++)ct=Yo[Lr],j[ct]===!0&&(j[ct]=P[ct]);u=(function(v){qn(g,v);function g(){return Fn=g.__super__.constructor.apply(this,arguments),Fn}return g})(Error),s=(function(){function v(){this.progress=0}return v.prototype.getElement=function(){var g;if(this.el==null){if(g=document.querySelector(j.target),!g)throw new u;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running ");var y=j.className!==""?" "+j.className:"";this.el.innerHTML='<div class="pace-progress'+y+`">
  <div class="pace-progress-inner"></div>
</div>
<div class="pace-activity"></div>`,g.firstChild!=null?g.insertBefore(this.el,g.firstChild):g.appendChild(this.el)}return this.el},v.prototype.finish=function(){var g;return g=this.getElement(),g.className=g.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ")},v.prototype.update=function(g){return this.progress=g,p.trigger("progress",g),this.render()},v.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(g){u=g}return this.el=void 0},v.prototype.render=function(){var g,y,x,C,L,V,Y;if(document.querySelector(j.target)==null)return!1;for(g=this.getElement(),C="translate3d("+this.progress+"%, 0, 0)",Y=["webkitTransform","msTransform","transform"],L=0,V=Y.length;L<V;L++)y=Y[L],g.children[0].style[y]=C;return(!this.lastRenderedProgress||this.lastRenderedProgress|this.progress!==0|0)&&(g.children[0].setAttribute("data-progress-text",""+(this.progress|0)+"%"),this.progress>=100?x="99":(x=this.progress<10?"0":"",x+=this.progress|0),g.children[0].setAttribute("data-progress",""+x)),p.trigger("change",this.progress),this.lastRenderedProgress=this.progress},v.prototype.done=function(){return this.progress>=100},v})(),h=(function(){function v(){this.bindings={}}return v.prototype.trigger=function(g,y){var x,C,L,V,Y;if(this.bindings[g]!=null){for(V=this.bindings[g],Y=[],C=0,L=V.length;C<L;C++)x=V[C],Y.push(x.call(this,y));return Y}},v.prototype.on=function(g,y){var x;return(x=this.bindings)[g]==null&&(x[g]=[]),this.bindings[g].push(y)},v})(),Ko=window.XMLHttpRequest,Tr=window.XDomainRequest,Ms=window.WebSocket,ve=function(v,g){var y,x;x=[];for(y in g.prototype)try{v[y]==null&&typeof g[y]!="function"?typeof Object.defineProperty=="function"?x.push(Object.defineProperty(v,y,{get:(function(C){return function(){return g.prototype[C]}})(y),configurable:!0,enumerable:!0})):x.push(v[y]=g.prototype[y]):x.push(void 0)}catch{}return x},Te=[],p.ignore=function(){var v,g,y;return g=arguments[0],v=2<=arguments.length?Ns.call(arguments,1):[],Te.unshift("ignore"),y=g.apply(null,v),Te.shift(),y},p.track=function(){var v,g,y;return g=arguments[0],v=2<=arguments.length?Ns.call(arguments,1):[],Te.unshift("track"),y=g.apply(null,v),Te.shift(),y},_r=function(v){var g;if(v==null&&(v="GET"),Te[0]==="track")return"force";if(!Te.length&&j.ajax){if(v==="socket"&&j.ajax.trackWebSockets)return!0;if(g=v.toUpperCase(),bh.call(j.ajax.trackMethods,g)>=0)return!0}return!1},m=(function(v){qn(g,v);function g(){var y,x=this;g.__super__.constructor.apply(this,arguments),y=function(C){var L;return L=C.open,C.open=function(V,Y,de){return _r(V)&&x.trigger("request",{type:V,url:Y,request:C}),L.apply(C,arguments)}},window.XMLHttpRequest=function(C){var L;return L=new Ko(C),y(L),L};try{ve(window.XMLHttpRequest,Ko)}catch{}if(Tr!=null){window.XDomainRequest=function(){var C;return C=new Tr,y(C),C};try{ve(window.XDomainRequest,Tr)}catch{}}if(Ms!=null&&j.ajax.trackWebSockets){window.WebSocket=function(C,L){var V;return L!=null?V=new Ms(C,L):V=new Ms(C),_r("socket")&&x.trigger("request",{type:"socket",url:C,protocols:L,request:V}),V};try{ve(window.WebSocket,Ms)}catch{}}}return g})(h),Rr=null,Oe=function(){return Rr==null&&(Rr=new m),Rr},Xo=function(v){var g,y,x,C;for(C=j.ajax.ignoreURLs,y=0,x=C.length;y<x;y++)if(g=C[y],typeof g=="string"){if(v.indexOf(g)!==-1)return!0}else if(g.test(v))return!0;return!1},Oe().on("request",function(v){var g,y,x,C,L;if(C=v.type,x=v.request,L=v.url,!Xo(L)&&!p.running&&(j.restartOnRequestAfter!==!1||_r(C)==="force"))return y=arguments,g=j.restartOnRequestAfter||0,typeof g=="boolean"&&(g=0),setTimeout(function(){var V,Y,de,Ee,oi,ai;if(C==="socket"?V=x.readyState<1:V=0<(Ee=x.readyState)&&Ee<4,V){for(p.restart(),oi=p.sources,ai=[],Y=0,de=oi.length;Y<de;Y++)if(ct=oi[Y],ct instanceof i){ct.watch.apply(ct,y);break}else ai.push(void 0);return ai}},g)}),i=(function(){function v(){this.complete=Vn(this.complete,this);var g=this;this.elements=[],Oe().on("request",function(){return g.watch.apply(g,arguments)})}return v.prototype.watch=function(g){var y,x,C,L;if(C=g.type,y=g.request,L=g.url,!Xo(L))return C==="socket"?x=new k(y,this.complete):x=new D(y,this.complete),this.elements.push(x)},v.prototype.complete=function(g){return this.elements=this.elements.filter(function(y){return y!==g})},v})(),D=(function(){function v(g,y){var x,C,L,V,Y,de=this;if(this.progress=0,window.ProgressEvent!=null)for(E(g,"progress",function(Ee){return Ee.lengthComputable?de.progress=100*Ee.loaded/Ee.total:de.progress=de.progress+(100-de.progress)/2},!1),Y=["load","abort","timeout","error"],C=0,L=Y.length;C<L;C++)x=Y[C],E(g,x,function(){return y(de),de.progress=100},!1);else V=g.onreadystatechange,g.onreadystatechange=function(){var Ee;return(Ee=g.readyState)===0||Ee===4?(y(de),de.progress=100):g.readyState===3&&(de.progress=50),typeof V=="function"?V.apply(null,arguments):void 0}}return v})(),k=(function(){function v(g,y){var x,C,L,V,Y=this;for(this.progress=0,V=["error","open"],C=0,L=V.length;C<L;C++)x=V[C],E(g,x,function(){return y(Y),Y.progress=100},!1)}return v})(),o=(function(){function v(g){var y,x,C,L;for(g==null&&(g={}),this.complete=Vn(this.complete,this),this.elements=[],g.selectors==null&&(g.selectors=[]),L=g.selectors,x=0,C=L.length;x<C;x++)y=L[x],this.elements.push(new a(y,this.complete))}return v.prototype.complete=function(g){return this.elements=this.elements.filter(function(y){return y!==g})},v})(),a=(function(){function v(g,y){this.selector=g,this.completeCallback=y,this.progress=0,this.check()}return v.prototype.check=function(){var g=this;return document.querySelector(this.selector)?this.done():setTimeout((function(){return g.check()}),j.elements.checkInterval)},v.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100},v})(),r=(function(){v.prototype.states={loading:0,interactive:50,complete:100};function v(){var g,y,x=this;this.progress=(y=this.states[document.readyState])!=null?y:100,g=document.onreadystatechange,document.onreadystatechange=function(){return x.states[document.readyState]!=null&&(x.progress=x.states[document.readyState]),typeof g=="function"?g.apply(null,arguments):void 0}}return v})(),l=(function(){function v(){var g,y,x,C,L,V=this;this.progress=0,g=0,L=[],C=0,x=De(),y=setInterval(function(){var Y;return Y=De()-x-50,x=De(),L.push(Y),L.length>j.eventLag.sampleCount&&L.shift(),g=T(L),++C>=j.eventLag.minSamples&&g<j.eventLag.lagThreshold?(V.progress=100,clearInterval(y)):V.progress=100*(3/(g+3))},50)}return v})(),w=(function(){function v(g){this.source=g,this.last=this.sinceLastUpdate=0,this.rate=j.initialRate,this.catchup=0,this.progress=this.lastProgress=0,this.source!=null&&(this.progress=Ge(this.source,"progress"))}return v.prototype.tick=function(g,y){var x;return y==null&&(y=Ge(this.source,"progress")),y>=100&&(this.done=!0),y===this.last?this.sinceLastUpdate+=g:(this.sinceLastUpdate&&(this.rate=(y-this.last)/this.sinceLastUpdate),this.catchup=(y-this.progress)/j.catchupTime,this.sinceLastUpdate=0,this.last=y),y>this.progress&&(this.progress+=this.catchup*g),x=1-Math.pow(this.progress/100,j.easeFactor),this.progress+=x*this.rate*g,this.progress=Math.min(this.lastProgress+j.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},v})(),es=null,_i=null,I=null,Go=null,M=null,O=null,p.running=!1,Ce=function(){if(j.restartOnPushState)return p.restart()},window.history.pushState!=null&&(Nn=window.history.pushState,window.history.pushState=function(){return Ce(),Nn.apply(window.history,arguments)}),window.history.replaceState!=null&&(Un=window.history.replaceState,window.history.replaceState=function(){return Ce(),Un.apply(window.history,arguments)}),b={ajax:i,elements:o,document:r,eventLag:l},($e=function(){var v,g,y,x,C,L,V,Y;for(p.sources=es=[],L=["ajax","elements","document","eventLag"],g=0,x=L.length;g<x;g++)v=L[g],j[v]!==!1&&es.push(new b[v](j[v]));for(Y=(V=j.extraSources)!=null?V:[],y=0,C=Y.length;y<C;y++)ct=Y[y],es.push(new ct(j));return p.bar=I=new s,_i=[],Go=new w})(),p.stop=function(){return p.trigger("stop"),p.running=!1,I.destroy(),O=!0,M!=null&&(typeof F=="function"&&F(M),M=null),$e()},p.restart=function(){return p.trigger("restart"),p.stop(),p.start()},p.go=function(){var v;return p.running=!0,I.render(),v=De(),O=!1,M=St(function(g,y){var x,C,L,V,Y,de,Ee,oi,ai,Zo,Jo,Qo,Hn,Wn,jn;for(100-I.progress,C=Zo=0,L=!0,de=Jo=0,Hn=es.length;Jo<Hn;de=++Jo)for(ct=es[de],ai=_i[de]!=null?_i[de]:_i[de]=[],Y=(jn=ct.elements)!=null?jn:[ct],Ee=Qo=0,Wn=Y.length;Qo<Wn;Ee=++Qo)V=Y[Ee],oi=ai[Ee]!=null?ai[Ee]:ai[Ee]=new w(V),L&=oi.done,!oi.done&&(C++,Zo+=oi.tick(g));return x=Zo/C,I.update(Go.tick(g,x)),I.done()||L||O?(I.update(100),p.trigger("done"),setTimeout(function(){return I.finish(),p.running=!1,p.trigger("hide")},Math.max(j.ghostTime,Math.max(j.minTime-(De()-v),0)))):y()})},p.start=function(v){we(j,v),p.running=!0;try{I.render()}catch(g){u=g}return document.querySelector(".pace")?(p.trigger("start"),p.go()):setTimeout(p.start,50)},t.exports=p}).call(vh)})(qr)),qr.exports}var xh=yh();const kh=wh(xh);const $=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};const Vr=globalThis,Qa=Vr.ShadowRoot&&(Vr.ShadyCSS===void 0||Vr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,en=Symbol(),Gn=new WeakMap;let yc=class{constructor(e,i,s){if(this._$cssResult$=!0,s!==en)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Qa&&e===void 0){const s=i!==void 0&&i.length===1;s&&(e=Gn.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Gn.set(i,e))}return e}toString(){return this.cssText}};const Ch=t=>new yc(typeof t=="string"?t:t+"",void 0,en),_=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((s,r,o)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new yc(i,t,en)},Eh=(t,e)=>{if(Qa)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const s=document.createElement("style"),r=Vr.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}},Kn=Qa?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const s of e.cssRules)i+=s.cssText;return Ch(i)})(t):t;const{is:$h,defineProperty:Sh,getOwnPropertyDescriptor:Ah,getOwnPropertyNames:_h,getOwnPropertySymbols:Th,getPrototypeOf:Lh}=Object,ko=globalThis,Yn=ko.trustedTypes,Rh=Yn?Yn.emptyScript:"",Ih=ko.reactiveElementPolyfillSupport,ir=(t,e)=>t,Gr={toAttribute(t,e){switch(e){case Boolean:t=t?Rh:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},tn=(t,e)=>!$h(t,e),Zn={attribute:!0,type:String,converter:Gr,reflect:!1,useDefault:!1,hasChanged:tn};Symbol.metadata??=Symbol("metadata"),ko.litPropertyMetadata??=new WeakMap;let is=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=Zn){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,i);r!==void 0&&Sh(this.prototype,e,r)}}static getPropertyDescriptor(e,i,s){const{get:r,set:o}=Ah(this.prototype,e)??{get(){return this[i]},set(a){this[i]=a}};return{get:r,set(a){const l=r?.call(this);o?.call(this,a),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Zn}static _$Ei(){if(this.hasOwnProperty(ir("elementProperties")))return;const e=Lh(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ir("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ir("properties"))){const i=this.properties,s=[..._h(i),...Th(i)];for(const r of s)this.createProperty(r,i[r])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[s,r]of i)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const r=this._$Eu(i,s);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)i.unshift(Kn(r))}else e!==void 0&&i.push(Kn(e));return i}static _$Eu(e,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Eh(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,s){this._$AK(e,s)}_$ET(e,i){const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:Gr).toAttribute(i,s.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,i){const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Gr;this._$Em=r;const l=a.fromAttribute(i,o.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(e,i,s,r=!1,o){if(e!==void 0){const a=this.constructor;if(r===!1&&(o=this[e]),s??=a.getPropertyOptions(e),!((s.hasChanged??tn)(o,i)||s.useDefault&&s.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:s,reflect:r,wrapped:o},a){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??i??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(i=void 0),this._$AL.set(e,i)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s){const{wrapped:a}=o,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,o,l)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(i)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(e){}firstUpdated(e){}};is.elementStyles=[],is.shadowRootOptions={mode:"open"},is[ir("elementProperties")]=new Map,is[ir("finalized")]=new Map,Ih?.({ReactiveElement:is}),(ko.reactiveElementVersions??=[]).push("2.1.2");const Oh={attribute:!0,type:String,converter:Gr,reflect:!1,hasChanged:tn},Dh=(t=Oh,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),s==="accessor"){const{name:a}=i;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,c,t,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,t,l),l}}}if(s==="setter"){const{name:a}=i;return function(l){const c=this[a];e.call(this,l),this.requestUpdate(a,c,t,!0,l)}}throw Error("Unsupported decorator location: "+s)};function d(t){return(e,i)=>typeof i=="object"?Dh(t,e,i):((s,r,o)=>{const a=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),a?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,i)}function S(t){return d({...t,state:!0,attribute:!1})}function Co(t){return(e,i)=>{const s=typeof e=="function"?e:e[i];Object.assign(s,t)}}const xc=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);function A(t,e){return(i,s,r)=>{const o=a=>a.renderRoot?.querySelector(t)??null;return xc(i,s,{get(){return o(this)}})}}function zh(t){return(e,i)=>xc(e,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}const sn=globalThis,Jn=t=>t,Kr=sn.trustedTypes,Qn=Kr?Kr.createPolicy("lit-html",{createHTML:t=>t}):void 0,kc="$lit$",li=`lit$${Math.random().toFixed(9).slice(2)}$`,Cc="?"+li,Ph=`<${Cc}>`,Pi=document,cr=()=>Pi.createComment(""),dr=t=>t===null||typeof t!="object"&&typeof t!="function",rn=Array.isArray,Mh=t=>rn(t)||typeof t?.[Symbol.iterator]=="function",ea=`[ 	
\f\r]`,Fs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,el=/-->/g,tl=/>/g,Ti=RegExp(`>|${ea}(?:([^\\s"'>=/]+)(${ea}*=${ea}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),il=/'/g,sl=/"/g,Ec=/^(?:script|style|textarea|title)$/i,Nh=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),f=Nh(1),it=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),rl=new WeakMap,Oi=Pi.createTreeWalker(Pi,129);function $c(t,e){if(!rn(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qn!==void 0?Qn.createHTML(e):e}const Fh=(t,e)=>{const i=t.length-1,s=[];let r,o=e===2?"<svg>":e===3?"<math>":"",a=Fs;for(let l=0;l<i;l++){const c=t[l];let h,u,p=-1,m=0;for(;m<c.length&&(a.lastIndex=m,u=a.exec(c),u!==null);)m=a.lastIndex,a===Fs?u[1]==="!--"?a=el:u[1]!==void 0?a=tl:u[2]!==void 0?(Ec.test(u[2])&&(r=RegExp("</"+u[2],"g")),a=Ti):u[3]!==void 0&&(a=Ti):a===Ti?u[0]===">"?(a=r??Fs,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?Ti:u[3]==='"'?sl:il):a===sl||a===il?a=Ti:a===el||a===tl?a=Fs:(a=Ti,r=void 0);const b=a===Ti&&t[l+1].startsWith("/>")?" ":"";o+=a===Fs?c+Ph:p>=0?(s.push(h),c.slice(0,p)+kc+c.slice(p)+li+b):c+li+(p===-2?l:b)}return[$c(t,o+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};let Sa=class Sc{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let o=0,a=0;const l=e.length-1,c=this.parts,[h,u]=Fh(e,i);if(this.el=Sc.createElement(h,s),Oi.currentNode=this.el.content,i===2||i===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Oi.nextNode())!==null&&c.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(kc)){const m=u[a++],b=r.getAttribute(p).split(li),w=/([.?@])?(.*)/.exec(m);c.push({type:1,index:o,name:w[2],strings:b,ctor:w[1]==="."?Bh:w[1]==="?"?qh:w[1]==="@"?Vh:$o}),r.removeAttribute(p)}else p.startsWith(li)&&(c.push({type:6,index:o}),r.removeAttribute(p));if(Ec.test(r.tagName)){const p=r.textContent.split(li),m=p.length-1;if(m>0){r.textContent=Kr?Kr.emptyScript:"";for(let b=0;b<m;b++)r.append(p[b],cr()),Oi.nextNode(),c.push({type:2,index:++o});r.append(p[m],cr())}}}else if(r.nodeType===8)if(r.data===Cc)c.push({type:2,index:o});else{let p=-1;for(;(p=r.data.indexOf(li,p+1))!==-1;)c.push({type:7,index:o}),p+=li.length-1}o++}}static createElement(e,i){const s=Pi.createElement("template");return s.innerHTML=e,s}};function ps(t,e,i=t,s){if(e===it)return e;let r=s!==void 0?i._$Co?.[s]:i._$Cl;const o=dr(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(t),r._$AT(t,i,s)),s!==void 0?(i._$Co??=[])[s]=r:i._$Cl=r),r!==void 0&&(e=ps(t,r._$AS(t,e.values),r,s)),e}class Uh{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:s}=this._$AD,r=(e?.creationScope??Pi).importNode(i,!0);Oi.currentNode=r;let o=Oi.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new Eo(o,o.nextSibling,this,e):c.type===1?h=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(h=new Hh(o,this,e)),this._$AV.push(h),c=s[++l]}a!==c?.index&&(o=Oi.nextNode(),a++)}return Oi.currentNode=Pi,r}p(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}let Eo=class Ac{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,s,r){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=ps(this,e,i),dr(e)?e===U||e==null||e===""?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==it&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Mh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==U&&dr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pi.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Sa.createElement($c(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(i);else{const o=new Uh(r,this),a=o.u(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let i=rl.get(e.strings);return i===void 0&&rl.set(e.strings,i=new Sa(e)),i}k(e){rn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const o of e)r===i.length?i.push(s=new Ac(this.O(cr()),this.O(cr()),this,this.options)):s=i[r],s._$AI(o),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){const s=Jn(e).nextSibling;Jn(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}};class $o{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,r,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=U}_$AI(e,i=this,s,r){const o=this.strings;let a=!1;if(o===void 0)e=ps(this,e,i,0),a=!dr(e)||e!==this._$AH&&e!==it,a&&(this._$AH=e);else{const l=e;let c,h;for(e=o[0],c=0;c<o.length-1;c++)h=ps(this,l[s+c],i,c),h===it&&(h=this._$AH[c]),a||=!dr(h)||h!==this._$AH[c],h===U?e=U:e!==U&&(e+=(h??"")+o[c+1]),this._$AH[c]=h}a&&!r&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let Bh=class extends $o{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}},qh=class extends $o{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}},Vh=class extends $o{constructor(e,i,s,r,o){super(e,i,s,r,o),this.type=5}_$AI(e,i=this){if((e=ps(this,e,i,0)??U)===it)return;const s=this._$AH,r=e===U&&s!==U||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==U&&(s===U||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};class Hh{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ps(this,e)}}const Wh={I:Eo},jh=sn.litHtmlPolyfillSupport;jh?.(Sa,Eo),(sn.litHtmlVersions??=[]).push("3.3.2");const gt=(t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(r===void 0){const o=i?.renderBefore??null;s._$litPart$=r=new Eo(e.insertBefore(cr(),o),o,void 0,i??{})}return r._$AI(t),r};const on=globalThis;let ui=class extends is{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gt(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return it}};ui._$litElement$=!0,ui.finalized=!0,on.litElementHydrateSupport?.({LitElement:ui});const Xh=on.litElementPolyfillSupport;Xh?.({LitElement:ui});(on.litElementVersions??=[]).push("4.2.2");const Gh=!1;class Kh{constructor(){this.subscriptions=new Map,this.tokenCounter=0}subscribe(e,i){this.subscriptions.has(e)||this.subscriptions.set(e,new Map);const s=`token_${++this.tokenCounter}_${Date.now()}`;return this.subscriptions.get(e).set(s,i),s}unsubscribe(e){for(const[i,s]of this.subscriptions.entries())if(s.has(e)){s.delete(e),s.size===0&&this.subscriptions.delete(i);return}}publish(e,i){const s=this.subscriptions.get(e);return!s||s.size===0?!1:(queueMicrotask(()=>{s.forEach(r=>{try{r(i)}catch(o){console.error(`Error in event callback for topic "${e}":`,o)}})}),!0)}clearAllSubscriptions(){this.subscriptions.clear()}clearSubscriptions(e){this.subscriptions.delete(e)}}const an=new Kh,Ue=(t,e)=>an.subscribe(t,e),Yh=t=>{an.unsubscribe(t)},oe=(t,e)=>an.publish(t,e);var Zh=Object.defineProperty,Jh=(t,e,i)=>e in t?Zh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ta=(t,e,i)=>(Jh(t,typeof e!="symbol"?e+"":e,i),i),Qh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ia=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Ir=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ol=(t,e,i)=>(Qh(t,e,"access private method"),i);function _c(t,e){return Object.is(t,e)}let Se=null,sr=!1,Hr=1;const Yr=Symbol("SIGNAL");function as(t){const e=Se;return Se=t,e}function eu(){return Se}function tu(){return sr}const nn={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function So(t){if(sr)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(Se===null)return;Se.consumerOnSignalRead(t);const e=Se.nextProducerIndex++;if(fs(Se),e<Se.producerNode.length&&Se.producerNode[e]!==t&&Aa(Se)){const i=Se.producerNode[e];Ao(i,Se.producerIndexOfThis[e])}Se.producerNode[e]!==t&&(Se.producerNode[e]=t,Se.producerIndexOfThis[e]=Aa(Se)?Rc(t,Se,e):0),Se.producerLastReadVersion[e]=t.version}function iu(){Hr++}function Tc(t){if(!(!t.dirty&&t.lastCleanEpoch===Hr)){if(!t.producerMustRecompute(t)&&!nu(t)){t.dirty=!1,t.lastCleanEpoch=Hr;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Hr}}function Lc(t){if(t.liveConsumerNode===void 0)return;const e=sr;sr=!0;try{for(const i of t.liveConsumerNode)i.dirty||ru(i)}finally{sr=e}}function su(){return Se?.consumerAllowSignalWrites!==!1}function ru(t){var e;t.dirty=!0,Lc(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function ou(t){return t&&(t.nextProducerIndex=0),as(t)}function au(t,e){if(as(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(Aa(t))for(let i=t.nextProducerIndex;i<t.producerNode.length;i++)Ao(t.producerNode[i],t.producerIndexOfThis[i]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function nu(t){fs(t);for(let e=0;e<t.producerNode.length;e++){const i=t.producerNode[e],s=t.producerLastReadVersion[e];if(s!==i.version||(Tc(i),s!==i.version))return!0}return!1}function Rc(t,e,i){var s;if(ln(t),fs(t),t.liveConsumerNode.length===0){(s=t.watched)==null||s.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)t.producerIndexOfThis[r]=Rc(t.producerNode[r],t,r)}return t.liveConsumerIndexOfThis.push(i),t.liveConsumerNode.push(e)-1}function Ao(t,e){var i;if(ln(t),fs(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(i=t.unwatched)==null||i.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)Ao(t.producerNode[r],t.producerIndexOfThis[r])}const s=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[s],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[s],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const r=t.liveConsumerIndexOfThis[e],o=t.liveConsumerNode[e];fs(o),o.producerIndexOfThis[r]=e}}function Aa(t){var e;return t.consumerIsAlwaysLive||(((e=t?.liveConsumerNode)==null?void 0:e.length)??0)>0}function fs(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function ln(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}function Ic(t){if(Tc(t),So(t),t.value===_a)throw t.error;return t.value}function lu(t){const e=Object.create(cu);e.computation=t;const i=()=>Ic(e);return i[Yr]=e,i}const sa=Symbol("UNSET"),ra=Symbol("COMPUTING"),_a=Symbol("ERRORED"),cu={...nn,value:sa,dirty:!0,error:null,equal:_c,producerMustRecompute(t){return t.value===sa||t.value===ra},producerRecomputeValue(t){if(t.value===ra)throw new Error("Detected cycle in computations.");const e=t.value;t.value=ra;const i=ou(t);let s,r=!1;try{s=t.computation.call(t.wrapper),r=e!==sa&&e!==_a&&t.equal.call(t.wrapper,e,s)}catch(o){s=_a,t.error=o}finally{au(t,i)}if(r){t.value=e;return}t.value=s,t.version++}};function du(){throw new Error}let hu=du;function uu(){hu()}function pu(t){const e=Object.create(gu);e.value=t;const i=()=>(So(e),e.value);return i[Yr]=e,i}function fu(){return So(this),this.value}function mu(t,e){su()||uu(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,bu(t))}const gu={...nn,equal:_c,value:void 0};function bu(t){t.version++,iu(),Lc(t)}const ze=Symbol("node");var Ft;(t=>{var e,i,s,r;class o{constructor(c,h={}){Ir(this,i),ta(this,e);const p=pu(c)[Yr];if(this[ze]=p,p.wrapper=this,h){const m=h.equals;m&&(p.equal=m),p.watched=h[t.subtle.watched],p.unwatched=h[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return fu.call(this[ze])}set(c){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(tu())throw new Error("Writes to signals not permitted during Watcher callback");const h=this[ze];mu(h,c)}}e=ze,i=new WeakSet,t.isState=l=>typeof l=="object"&&ia(i,l),t.State=o;class a{constructor(c,h){Ir(this,r),ta(this,s);const p=lu(c)[Yr];if(p.consumerAllowSignalWrites=!0,this[ze]=p,p.wrapper=this,h){const m=h.equals;m&&(p.equal=m),p.watched=h[t.subtle.watched],p.unwatched=h[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Ic(this[ze])}}s=ze,r=new WeakSet,t.isComputed=l=>typeof l=="object"&&ia(r,l),t.Computed=a,(l=>{var c,h,u,p;function m(T){let I,O=null;try{O=as(null),I=T()}finally{as(O)}return I}l.untrack=m;function b(T){var I;if(!(0,t.isComputed)(T)&&!(0,t.isWatcher)(T))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((I=T[ze].producerNode)==null?void 0:I.map(O=>O.wrapper))??[]}l.introspectSources=b;function w(T){var I;if(!(0,t.isComputed)(T)&&!(0,t.isState)(T))throw new TypeError("Called introspectSinks without a Signal argument");return((I=T[ze].liveConsumerNode)==null?void 0:I.map(O=>O.wrapper))??[]}l.introspectSinks=w;function k(T){if(!(0,t.isComputed)(T)&&!(0,t.isState)(T))throw new TypeError("Called hasSinks without a Signal argument");const I=T[ze].liveConsumerNode;return I?I.length>0:!1}l.hasSinks=k;function D(T){if(!(0,t.isComputed)(T)&&!(0,t.isWatcher)(T))throw new TypeError("Called hasSources without a Computed or Watcher argument");const I=T[ze].producerNode;return I?I.length>0:!1}l.hasSources=D;class E{constructor(I){Ir(this,h),Ir(this,u),ta(this,c);let O=Object.create(nn);O.wrapper=this,O.consumerMarkedDirty=I,O.consumerIsAlwaysLive=!0,O.consumerAllowSignalWrites=!1,O.producerNode=[],this[ze]=O}watch(...I){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");ol(this,u,p).call(this,I);const O=this[ze];O.dirty=!1;const F=as(O);for(const P of I)So(P[ze]);as(F)}unwatch(...I){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");ol(this,u,p).call(this,I);const O=this[ze];fs(O);for(let F=O.producerNode.length-1;F>=0;F--)if(I.includes(O.producerNode[F].wrapper)){Ao(O.producerNode[F],O.producerIndexOfThis[F]);const P=O.producerNode.length-1;if(O.producerNode[F]=O.producerNode[P],O.producerIndexOfThis[F]=O.producerIndexOfThis[P],O.producerNode.length--,O.producerIndexOfThis.length--,O.nextProducerIndex--,F<O.producerNode.length){const we=O.producerIndexOfThis[F],ve=O.producerNode[F];ln(ve),ve.liveConsumerIndexOfThis[we]=F}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[ze].producerNode.filter(O=>O.dirty).map(O=>O.wrapper)}}c=ze,h=new WeakSet,u=new WeakSet,p=function(T){for(const I of T)if(!(0,t.isComputed)(I)&&!(0,t.isState)(I))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=T=>ia(h,T),l.Watcher=E;function M(){var T;return(T=eu())==null?void 0:T.wrapper}l.currentComputed=M,l.watched=Symbol("watched"),l.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(Ft||(Ft={}));const wu=Symbol("SignalWatcherBrand"),vu=new FinalizationRegistry((({watcher:t,signal:e})=>{t.unwatch(e)})),al=new WeakMap;function yu(t){return t[wu]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new Ft.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new Ft.Computed((()=>{this._$St.get(),super.performUpdate()}));const e=this._$Su=new Ft.subtle.Watcher((function(){const i=al.get(this);i!==void 0&&(i._$Si===!1&&i.requestUpdate(),this.watch())}));al.set(e,this),vu.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach((i=>i.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,i,s){this._$So=!0,super.requestUpdate(e,i,s)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(e){this._$Sh.add(e);const i=this._$So;this.requestUpdate(),this._$So=i}m(e){this._$Sh.delete(e)}}}const At={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},As=t=>(...e)=>({_$litDirective$:t,values:e});let _s=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};const{I:xu}=Wh,nl=t=>t,ku=(t,e)=>t?._$litType$!==void 0,Oc=t=>t.strings===void 0,ll=()=>document.createComment(""),Us=(t,e,i)=>{const s=t._$AA.parentNode,r=e===void 0?t._$AB:e._$AA;if(i===void 0){const o=s.insertBefore(ll(),r),a=s.insertBefore(ll(),r);i=new xu(o,a,t,t.options)}else{const o=i._$AB.nextSibling,a=i._$AM,l=a!==t;if(l){let c;i._$AQ?.(t),i._$AM=t,i._$AP!==void 0&&(c=t._$AU)!==a._$AU&&i._$AP(c)}if(o!==r||l){let c=i._$AA;for(;c!==o;){const h=nl(c).nextSibling;nl(s).insertBefore(c,r),c=h}}}return i},Li=(t,e,i=t)=>(t._$AI(e,i),t),Cu={},Dc=(t,e=Cu)=>t._$AH=e,Eu=t=>t._$AH,oa=t=>{t._$AR(),t._$AA.remove()};const rr=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const s of i)s._$AO?.(e,!1),rr(s,e);return!0},Zr=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},zc=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Au(e)}};function $u(t){this._$AN!==void 0?(Zr(this),this._$AM=t,zc(this)):this._$AM=t}function Su(t,e=!1,i=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(s))for(let o=i;o<s.length;o++)rr(s[o],!1),Zr(s[o]);else s!=null&&(rr(s,!1),Zr(s));else rr(this,t)}const Au=t=>{t.type==At.CHILD&&(t._$AP??=Su,t._$AQ??=$u)};class _u extends _s{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,s){super._$AT(e,i,s),zc(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(rr(this,e),Zr(this))}setValue(e){if(Oc(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}Ft.State;Ft.Computed;const fi=(t,e)=>new Ft.State(t,e);var Ta="",La="";function cl(t){Ta=t}function Tu(t=""){if(!Ta){const e=document.querySelector("[data-webawesome]");if(e?.hasAttribute("data-webawesome")){const i=new URL(e.getAttribute("data-webawesome")??"",window.location.href).pathname;cl(i)}else{const s=[...document.getElementsByTagName("script")].find(r=>r.src.endsWith("webawesome.js")||r.src.endsWith("webawesome.loader.js")||r.src.endsWith("webawesome.ssr-loader.js"));if(s){const r=String(s.getAttribute("src"));cl(r.split("/").slice(0,-1).join("/"))}}}return Ta.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}function Lu(t){La=t}function Ru(){if(!La){const t=document.querySelector("[data-fa-kit-code]");t&&Lu(t.getAttribute("data-fa-kit-code")||"")}return La}new MutationObserver(t=>{for(const{addedNodes:e}of t)for(const i of e)i.nodeType===Node.ELEMENT_NODE&&Iu(i)});async function Iu(t){const e=t instanceof Element?t.tagName.toLowerCase():"",i=e?.startsWith("wa-"),s=[...t.querySelectorAll(":not(:defined)")].map(a=>a.tagName.toLowerCase()).filter(a=>a.startsWith("wa-"));i&&!customElements.get(e)&&s.push(e);const r=[...new Set(s)],o=await Promise.allSettled(r.map(a=>Ou(a)));for(const a of o)a.status==="rejected"&&console.warn(a.reason);await new Promise(requestAnimationFrame),t.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function Ou(t){if(customElements.get(t))return Promise.resolve();const e=t.replace(/^wa-/i,""),i=Tu(`components/${e}/${e}.js`);return new Promise((s,r)=>{import(i).then(()=>s()).catch(()=>r(new Error(`Unable to autoload <${t}> from ${i}`)))})}const Ra=new Set,ns=new Map;let Ii,cn="ltr",dn="en";const Pc=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Pc){const t=new MutationObserver(Nc);cn=document.documentElement.dir||"ltr",dn=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Mc(...t){t.map(e=>{const i=e.$code.toLowerCase();ns.has(i)?ns.set(i,Object.assign(Object.assign({},ns.get(i)),e)):ns.set(i,e),Ii||(Ii=e)}),Nc()}function Nc(){Pc&&(cn=document.documentElement.dir||"ltr",dn=document.documentElement.lang||navigator.language),[...Ra.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Du=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ra.add(this.host)}hostDisconnected(){Ra.delete(this.host)}dir(){return`${this.host.dir||cn}`.toLowerCase()}lang(){return`${this.host.lang||dn}`.toLowerCase()}getTranslationData(e){var i,s;const r=new Intl.Locale(e.replace(/_/g,"-")),o=r?.language.toLowerCase(),a=(s=(i=r?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&s!==void 0?s:"",l=ns.get(`${o}-${a}`),c=ns.get(o);return{locale:r,language:o,region:a,primary:l,secondary:c}}exists(e,i){var s;const{primary:r,secondary:o}=this.getTranslationData((s=i.lang)!==null&&s!==void 0?s:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||o&&o[e]||i.includeFallback&&Ii&&Ii[e])}term(e,...i){const{primary:s,secondary:r}=this.getTranslationData(this.lang());let o;if(s&&s[e])o=s[e];else if(r&&r[e])o=r[e];else if(Ii&&Ii[e])o=Ii[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...i):o}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(e,i)}};var Fc={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};Mc(Fc);var zu=Fc;var ie=class extends Du{};Mc(zu);function Pu(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var aa={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},Mu={name:"system",resolver:(t,e="classic",i="solid")=>{let r=aa[i][t]??aa.regular[t]??aa.regular["circle-question"];return r?Pu(r):""}},Nu=Mu;var dl="7.1.0";function Fu(t,e,i){const s=Ru(),r=s.length>0;let o="solid";return e==="notdog"&&(i==="solid"&&(o="notdog-solid"),i==="duo-solid"&&(o="notdog-duo-solid")),e==="notdog-duo"&&(o="notdog-duo-solid"),e==="chisel"&&(o="chisel-regular"),e==="etch"&&(o="etch-solid"),e==="jelly"&&(o="jelly-regular",i==="duo-regular"&&(o="jelly-duo-regular"),i==="fill-regular"&&(o="jelly-fill-regular")),e==="jelly-duo"&&(o="jelly-duo-regular"),e==="jelly-fill"&&(o="jelly-fill-regular"),e==="slab"&&((i==="solid"||i==="regular")&&(o="slab-regular"),i==="press-regular"&&(o="slab-press-regular")),e==="slab-press"&&(o="slab-press-regular"),e==="thumbprint"&&(o="thumbprint-light"),e==="whiteboard"&&(o="whiteboard-semibold"),e==="utility"&&(o="utility-semibold"),e==="utility-duo"&&(o="utility-duo-semibold"),e==="utility-fill"&&(o="utility-fill-semibold"),e==="classic"&&(i==="thin"&&(o="thin"),i==="light"&&(o="light"),i==="regular"&&(o="regular"),i==="solid"&&(o="solid")),e==="sharp"&&(i==="thin"&&(o="sharp-thin"),i==="light"&&(o="sharp-light"),i==="regular"&&(o="sharp-regular"),i==="solid"&&(o="sharp-solid")),e==="duotone"&&(i==="thin"&&(o="duotone-thin"),i==="light"&&(o="duotone-light"),i==="regular"&&(o="duotone-regular"),i==="solid"&&(o="duotone")),e==="sharp-duotone"&&(i==="thin"&&(o="sharp-duotone-thin"),i==="light"&&(o="sharp-duotone-light"),i==="regular"&&(o="sharp-duotone-regular"),i==="solid"&&(o="sharp-duotone-solid")),e==="brands"&&(o="brands"),r?`https://ka-p.fontawesome.com/releases/v${dl}/svgs/${o}/${t}.svg?token=${encodeURIComponent(s)}`:`https://ka-f.fontawesome.com/releases/v${dl}/svgs/${o}/${t}.svg`}var Uu={name:"default",resolver:(t,e="classic",i="solid")=>Fu(t,e,i),mutator:(t,e)=>{if(e?.family&&!t.hasAttribute("data-duotone-initialized")){const{family:i,variant:s}=e;if(i==="duotone"||i==="sharp-duotone"||i==="notdog-duo"||i==="notdog"&&s==="duo-solid"||i==="jelly-duo"||i==="jelly"&&s==="duo-regular"||i==="utility-duo"||i==="thumbprint"){const r=[...t.querySelectorAll("path")],o=r.find(l=>!l.hasAttribute("opacity")),a=r.find(l=>l.hasAttribute("opacity"));if(!o||!a)return;if(o.setAttribute("data-duotone-primary",""),a.setAttribute("data-duotone-secondary",""),e.swapOpacity&&o&&a){const l=a.getAttribute("opacity")||"0.4";o.style.setProperty("--path-opacity",l),a.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},Bu=Uu;var qu="classic",Jr=[Bu,Nu],Qr=[];function Vu(t){Qr.push(t)}function Hu(t){Qr=Qr.filter(e=>e!==t)}function na(t){return Jr.find(e=>e.name===t)}function Wu(t,e){ju(t),Jr.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),Qr.forEach(i=>{i.library===t&&i.setIcon()})}function ju(t){Jr=Jr.filter(e=>e.name!==t)}function Xu(){return qu}const Gu=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Ku=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Yu=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Zu=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Ju=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Qu=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],ep=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],tp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ip=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],sp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],rp=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],op=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],ap=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],np=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],lp=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],cp=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],dp=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],hp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],up=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],pp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],fp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],mp=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],gp=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],bp=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],wp=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],vp=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],yp=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],xp=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],kp=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Cp=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Ep=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],$p=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Sp=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ap=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_p=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Tp=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Lp=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Rp=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ip=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Op=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Dp=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],zp=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Pp=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Mp=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Np=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Fp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Up=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Bp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],qp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Vp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Hp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Wp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],jp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Xp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Gp=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Kp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Yp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Zp=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Jp=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Qp=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],ef=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],tf=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],sf=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],rf=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],of=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],af=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],nf=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],lf=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],cf=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],df=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],hf=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],uf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],pf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],ff=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],mf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],gf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],bf=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],wf=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],vf=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],yf=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],xf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],kf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Cf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Ef=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],$f=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Sf=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Af=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_f=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Tf=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Lf=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Rf=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],If=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Of=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Df=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],zf=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Pf=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Mf=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Nf=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Uc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Ff=Object.freeze(Object.defineProperty({__proto__:null,backInDown:np,backInLeft:lp,backInRight:cp,backInUp:dp,backOutDown:hp,backOutLeft:up,backOutRight:pp,backOutUp:fp,bounce:Gu,bounceIn:mp,bounceInDown:gp,bounceInLeft:bp,bounceInRight:wp,bounceInUp:vp,bounceOut:yp,bounceOutDown:xp,bounceOutLeft:kp,bounceOutRight:Cp,bounceOutUp:Ep,easings:Uc,fadeIn:$p,fadeInBottomLeft:Sp,fadeInBottomRight:Ap,fadeInDown:_p,fadeInDownBig:Tp,fadeInLeft:Lp,fadeInLeftBig:Rp,fadeInRight:Ip,fadeInRightBig:Op,fadeInTopLeft:Dp,fadeInTopRight:zp,fadeInUp:Pp,fadeInUpBig:Mp,fadeOut:Np,fadeOutBottomLeft:Fp,fadeOutBottomRight:Up,fadeOutDown:Bp,fadeOutDownBig:qp,fadeOutLeft:Vp,fadeOutLeftBig:Hp,fadeOutRight:Wp,fadeOutRightBig:jp,fadeOutTopLeft:Xp,fadeOutTopRight:Gp,fadeOutUp:Kp,fadeOutUpBig:Yp,flash:Ku,flip:Zp,flipInX:Jp,flipInY:Qp,flipOutX:ef,flipOutY:tf,headShake:Yu,heartBeat:Zu,hinge:$f,jackInTheBox:Sf,jello:Ju,lightSpeedInLeft:sf,lightSpeedInRight:rf,lightSpeedOutLeft:of,lightSpeedOutRight:af,pulse:Qu,rollIn:Af,rollOut:_f,rotateIn:nf,rotateInDownLeft:lf,rotateInDownRight:cf,rotateInUpLeft:df,rotateInUpRight:hf,rotateOut:uf,rotateOutDownLeft:pf,rotateOutDownRight:ff,rotateOutUpLeft:mf,rotateOutUpRight:gf,rubberBand:ep,shake:tp,shakeX:ip,shakeY:sp,slideInDown:bf,slideInLeft:wf,slideInRight:vf,slideInUp:yf,slideOutDown:xf,slideOutLeft:kf,slideOutRight:Cf,slideOutUp:Ef,swing:rp,tada:op,wobble:ap,zoomIn:Tf,zoomInDown:Lf,zoomInLeft:Rf,zoomInRight:If,zoomInUp:Of,zoomOut:Df,zoomOutDown:zf,zoomOutLeft:Pf,zoomOutRight:Mf,zoomOutUp:Nf},Symbol.toStringTag,{value:"Module"}));var Uf=Object.defineProperty,Bf=Object.getOwnPropertyDescriptor,Bc=t=>{throw TypeError(t)},n=(t,e,i,s)=>{for(var r=s>1?void 0:s?Bf(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&Uf(e,i,r),r},qc=(t,e,i)=>e.has(t)||Bc("Cannot "+i),qf=(t,e,i)=>(qc(t,e,"read from private field"),e.get(t)),Vf=(t,e,i)=>e.has(t)?Bc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Hf=(t,e,i,s)=>(qc(t,e,"write to private field"),e.set(t,i),i);class hn{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,i){return e[i]||this.parent?.getProxy()[i]}set(e,i,s){e[i]=s}put(e,i){this.variables[e]=i}getProxy(){return this.proxy}createChild(e={}){const i=new hn(e);return i.parent=this,this.children.push(i),i}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const Ae=new hn({}),Ts=Ae.createChild({}),Nt=t=>{console.info("[TOAST] INFO:",t)},he=t=>{console.error("[TOAST] ERROR:",t)},Wf=t=>{console.warn("[TOAST] WARNING:",t)},hl={debug:0,info:1,warning:2,error:3};let jf="debug";const ss={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let eo=null;const Ia=[];function Bs(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class Xf{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,i){rs(this.source,e,i)}}function Gf(t){return hl[t]>=hl[jf]}function rs(t,e,i){Gf(i)&&(eo?eo(t,e,i):(Ia.push({source:t,message:e,level:i}),ss[i==="error"?"error":i==="warning"?"warn":i==="debug"?"debug":"log"](`[${t}] ${e}`)))}function Kf(){console.log=function(...t){ss.log.apply(console,t),rs("Console",t.map(e=>Bs(e)).join(" "),"info")},console.info=function(...t){ss.info.apply(console,t),rs("Console",t.map(e=>Bs(e)).join(" "),"info")},console.warn=function(...t){ss.warn.apply(console,t),rs("Console",t.map(e=>Bs(e)).join(" "),"warning")},console.error=function(...t){ss.error.apply(console,t),rs("Console",t.map(e=>Bs(e)).join(" "),"error")},console.debug=function(...t){ss.debug.apply(console,t),rs("Console",t.map(e=>Bs(e)).join(" "),"debug")}}Kf();function Yf(t){for(eo=t;Ia.length>0;){const e=Ia.shift();e&&t(e.source,e.message,e.level)}}function Zf(){eo=null}function si(t){return new Xf(t)}const G=si("System");Ae.put("logger",G);const Wt="events/contributionregistry/contributionsChanged";class Jf{constructor(){this.contributions=new Map}registerContribution(e,i){const s=this.getContributions(e);if("command"in i){const r=i;r.disabled instanceof Function&&(r.disabled=new Ft.Computed(r.disabled))}s.push(i),oe(Wt,{target:e,contributions:s})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const z=new Jf;Ae.put("contributionRegistry",z);const bt=fi(null),or=fi(null),Oa=fi(null),Da=fi(0),Ri=fi(void 0);fi({name:"",timestamp:0});const Vc="events/commandregistry/commandRegistered";class Qf{constructor(e,i,s,r,o){this.id=e,this.name=i,this.description=s,this.parameters=r||[],this.output=o||[]}}class em{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,i){this.handlers.has(e)||this.handlers.set(e,[]);const s=this.handlers.get(e);s.push(i),s.sort((r,o)=>(o.ranking??0)-(r.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:bt.get(),activeEditor:or.get()}}execute(e,i={}){const s=this.getHandler(e);if(!s)throw G.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const r=this.getCommand(e),o=i.params?` params: ${JSON.stringify(i.params)}`:"";G.debug(`[CommandRegistry] Executing command: ${e}${r?` (${r.name})`:""}${o}`);for(const a of s)if(a.canExecute===void 0||a.canExecute(i))try{const l=a.execute(i);return G.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${l})`),l}catch(l){const c=l instanceof Error?l.message:String(l);throw G.error(`[CommandRegistry] Command execution failed: ${e} - ${c}`),l}G.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,i,s,r,o){const a=new Qf(e,i,s,r);this.registerCommand(a),o&&this.registerHandler(e,o)}registerCommand(e){this.commands[e.id]=e,G.debug(`Command registered: ${e.id}`),oe(Vc,e)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(i=>(Ke.getHandler(i.id)||[]).some(r=>r.canExecute===void 0||r.canExecute(e))).reduce((i,s)=>(i[s.id]=s,i),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const i=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(i,e.handler),e.contribution&&e.contribution.target&&z.registerContribution(e.contribution.target,{command:i,...e.contribution})}}const Ke=new em;Ae.put("commandRegistry",Ke);const fe=t=>{Ke.registerAll(t)},Hc=(t,e)=>{const i=new Ft.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{i.watch(t)}});return i.watch(t),t.get(),()=>{i.unwatch(t)}};Object.defineProperty(ui.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class gr extends yu(ui){constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(e=>Yh(e)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(e=>e()),this.signalCleanups.clear()}subscribe(e,i){const s=Ue(e,i.bind(this));this.eventSubscriptions.add(s)}showInfo(e){Nt(e)}showError(e){he(e)}nobubble(e){return i=>{i.stopPropagation(),e.bind(this)(i)}}command(e,i={}){return()=>{this.executeCommand(e,i)}}executeCommand(e,i){const s=Ke.createExecutionContext(i);Ke.execute(e,s)}watch(e,i){const s=Hc(e,i.bind(this));this.signalCleanups.add(s)}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}const tm="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",im="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-22%200%20300%20300'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpath%20d='M10.5838307,156.409656%20L10.5838307,156.196646%20L10.5838307,123.657627%20L17.7200527,123.657627%20L17.7200527,158.912657%20C18.0516208,161.753926%2017.8075656,164.63288%2017.0023629,167.377784%20C16.19722,170.122687%2014.8474392,172.677251%2013.0335946,174.88924%20C9.6624625,177.797086%205.34298451,179.369568%200.891381719,179.309391%20L0.145805038,173.983903%20C3.01718628,173.985518%205.78730255,172.922981%207.92105685,171.001585%20C9.83826599,168.76489%2010.5838307,165.729334%2010.5838307,156.409656%20Z%20M63.8037763,152.209035%20C63.8037763,156.203166%2063.8037763,159.771277%2064.1232613,162.860071%20L57.7859014,162.860071%20L57.3598815,156.522711%20C56.0343268,158.765028%2054.1386519,160.616318%2051.8656486,161.888456%20C49.5925854,163.160593%2047.0232464,163.808237%2044.4187946,163.765408%20C38.2412071,163.765408%2030.8919752,160.410366%2030.8919752,146.723715%20L30.8919752,123.983721%20L38.0281972,123.983721%20L38.0281972,145.285823%20C38.0281972,152.688352%2040.3181887,157.641058%2046.7620834,157.641058%20C48.0878176,157.655354%2049.4030239,157.404719%2050.6306575,156.903927%20C51.8582911,156.403136%2052.9735276,155.662296%2053.9110465,154.724777%20C54.8485056,153.787318%2055.5894046,152.672022%2056.0901963,151.444448%20C56.5909282,150.216815%2056.8415633,148.901549%2056.8273268,147.575814%20L56.8273268,123.717444%20L63.9634889,123.717444%20L63.9634889,151.996025%20L63.8037763,152.209035%20Z%20M77.330762,136.653806%20C77.330762,131.70104%2077.330762,127.653648%2077.0112304,123.979032%20L83.4018876,123.979032%20L83.7213726,130.635931%20C85.1452074,128.23088%2087.1949721,126.257257%2089.6521533,124.925482%20C92.1093944,123.593709%2094.8819333,122.953703%2097.6742718,123.073695%20C107.153723,123.073695%20114.289945,131.008713%20114.289945,142.831393%20C114.289945,156.784292%20105.715831,163.707504%2096.4493898,163.707504%20C94.0776877,163.813321%2091.7187865,163.305232%2089.6009496,162.232346%20C87.4831127,161.159401%2085.6780613,159.558028%2084.3604623,157.583154%20L84.3604623,178.885226%20L77.330762,178.885226%20L77.330762,136.813578%20L77.330762,136.653806%20Z%20M84.3604623,147.038594%20C84.3797833,148.004885%2084.4867369,148.967408%2084.6800071,149.914378%20C85.2842232,152.279021%2086.6597255,154.374666%2088.5887785,155.869683%20C90.5178913,157.364761%2092.8904309,158.173852%2095.3310427,158.168947%20C102.840047,158.168947%20107.260258,152.044597%20107.260258,143.150938%20C107.260258,135.375686%20103.106354,128.718758%2095.59735,128.718758%20C92.6257387,128.962101%2089.844945,130.280974%2087.7762781,132.428062%20C85.7076111,134.575149%2084.4931374,137.403079%2084.3604623,140.381689%20L84.3604623,147.038594%20Z%20M127.004503,123.94359%20L135.578617,146.896647%20C136.483954,149.452886%20137.442529,152.54168%20138.081618,154.831671%20C138.827183,152.488442%20139.625985,149.506124%20140.58462,146.736875%20L148.359872,123.94359%20L155.868876,123.94359%20L145.21784,151.636343%20C139.892293,164.950152%20136.643726,171.820127%20131.744199,175.97403%20C129.27643,178.228071%20126.267791,179.805756%20123.010354,180.553953%20L121.252929,174.589376%20C123.530581,173.840999%20125.645092,172.666304%20127.48382,171.127799%20C130.081872,169.010501%20132.14366,166.310102%20133.501635,163.246013%20C133.792288,162.715372%20133.990404,162.139031%20134.087428,161.541814%20C134.026892,160.899135%20133.865146,160.270094%20133.60817,159.677902%20L119.122716,123.837079%20L126.897968,123.837079%20L127.004503,123.94359%20Z%20M174.813541,112.770851%20L174.813541,123.954441%20L185.038557,123.954441%20L185.038557,129.279989%20L174.813541,129.279989%20L174.813541,150.262575%20C174.813541,155.055568%20176.198196,157.824817%20180.139089,157.824817%20C181.538758,157.847727%20182.935316,157.686579%20184.292992,157.345559%20L184.612537,162.671047%20C182.57671,163.376355%20180.428486,163.701283%20178.275118,163.629682%20C176.849069,163.718929%20175.420569,163.498622%20174.087657,162.983833%20C172.754744,162.469044%20171.549004,161.671976%20170.553103,160.647363%20C168.383883,157.745977%20167.394359,154.130491%20167.783854,150.528882%20L167.783854,129.226751%20L161.712742,129.226751%20L161.712742,123.901204%20L167.890329,123.901204%20L167.890329,114.421764%20L174.813541,112.770851%20Z%20M198.184399,144.647511%20C198.03988,146.453639%20198.289199,148.269577%20198.915189,149.969888%20C199.541179,151.670199%20200.528884,153.214267%20201.810114,154.495437%20C203.091285,155.776667%20204.635352,156.764373%20206.335664,157.390363%20C208.035975,158.016352%20209.851913,158.265672%20211.658041,158.121153%20C215.311153,158.202863%20218.940457,157.513288%20222.309077,156.097409%20L223.533958,161.422956%20C219.400274,163.12572%20214.955358,163.942168%20210.486396,163.819423%20C207.881107,163.997798%20205.268101,163.61054%20202.826592,162.684147%20C200.385023,161.757814%20198.172795,160.3143%20196.341489,158.452721%20C194.51022,156.591082%20193.103284,154.355345%20192.217196,151.898941%20C191.331104,149.442478%20190.986827,146.82349%20191.207978,144.221491%20C191.207978,132.505346%20198.184399,123.238905%20209.581059,123.238905%20C222.362314,123.238905%20225.557643,134.422495%20225.557643,141.558717%20C225.625954,142.658281%20225.625954,143.761016%20225.557643,144.860581%20L198.024687,144.860581%20L198.184399,144.647511%20Z%20M219.06051,139.322023%20C219.266043,137.898188%20219.163995,136.446897%20218.761184,135.065892%20C218.358433,133.684886%20217.664311,132.406228%20216.725656,131.316115%20C215.786941,130.226062%20214.625525,129.349856%20213.31959,128.746561%20C212.013656,128.143278%20210.59353,127.826939%20209.155039,127.818864%20C206.228949,128.030665%20203.487515,129.327603%20201.467959,131.455549%20C199.448402,133.583436%20198.296377,136.388874%20198.237697,139.322023%20L219.06051,139.322023%20Z%20M236.385366,136.053478%20C236.385366,131.473555%20236.385366,127.532637%20236.065834,123.911277%20L242.456492,123.911277%20L242.456492,131.526792%20L242.775977,131.526792%20C243.446769,129.176325%20244.83268,127.093027%20246.741335,125.566097%20C248.64999,124.039161%20250.986699,123.144369%20253.427072,123.005938%20C254.098762,122.917777%20254.779066,122.917777%20255.450756,123.005938%20L255.450756,129.66288%20C254.63688,129.568608%20253.814868,129.568608%20253.000992,129.66288%20C250.58353,129.756495%20248.282771,130.726973%20246.528505,132.393068%20C244.774238,134.059104%20243.686458,136.306745%20243.468304,138.716252%20C243.269171,139.805946%20243.162278,140.910475%20243.148819,142.018055%20L243.148819,162.734394%20L236.11909,162.734394%20L236.11909,136.106715%20L236.385366,136.053478%20Z'%20fill='%234E4E4E'%3e%3c/path%3e%3cpath%20d='M233.257943,16.9621357%20C233.476636,20.5398773%20232.625434,24.1017075%20230.812666,27.1939108%20C228.999898,30.286174%20226.307754,32.7687777%20223.079047,34.3255867%20C219.85034,35.8823358%20216.231324,36.4427655%20212.683013,35.9355136%20C209.134702,35.4282017%20205.817704,33.8761781%20203.154559,31.4770796%20C200.491421,29.0780409%20198.602703,25.9404959%20197.729013,22.4642047%20C196.855323,18.9879135%20197.036209,15.330196%20198.248625,11.9570899%20C199.461041,8.5839838%20201.650109,5.64808944%20204.536953,3.52346926%20C207.423803,1.39884909%20210.877782,0.181657262%20214.458814,0.0269503701%20C216.806708,-0.10224713%20219.156996,0.233972409%20221.374429,1.01627461%20C223.591922,1.79857323%20225.632893,3.01152758%20227.379981,4.58537259%20C229.12701,6.15922358%20230.54576,8.06291398%20231.554522,10.1869719%20C232.563283,12.3110298%20233.142196,14.6135829%20233.257943,16.9621357%20Z'%20fill='%23767677'%3e%3c/path%3e%3cpath%20d='M127.952969,225.540984%20C80.0236372,225.540984%2037.8984531,208.339518%2016.1170646,182.936721%20C24.5683135,205.78944%2039.8176362,225.504615%2059.8124569,239.428562%20C79.8070981,253.352629%20103.588124,260.816651%20127.952969,260.816651%20C152.318411,260.816651%20176.098839,253.352629%20196.094019,239.428562%20C216.0886,225.504615%20231.337863,205.78944%20239.789471,182.936721%20C218.061379,208.339518%20176.095848,225.540984%20127.952969,225.540984%20Z'%20fill='%23F37726'%3e%3c/path%3e%3cpath%20d='M127.952969,60.3543133%20C175.882898,60.3543133%20218.008142,77.5557785%20239.789471,102.958396%20C231.337863,80.1058563%20216.0886,60.3906823%20196.094019,46.4667348%20C176.098839,32.5427873%20152.318411,25.0784666%20127.952969,25.0784666%20C103.588124,25.0784666%2079.8070981,32.5427873%2059.8124569,46.4667348%20C39.8176362,60.3906823%2024.5683135,80.1058563%2016.1170646,102.958396%20C37.8984531,77.502541%2079.8106871,60.3543133%20127.952969,60.3543133%20Z'%20fill='%23F37726'%3e%3c/path%3e%3cpath%20d='M61.9716874,274.975202%20C62.2528294,279.48161%2061.186045,283.969713%2058.9072992,287.867658%20C56.6284936,291.765602%2053.2409116,294.896926%2049.1761363,296.862707%20C45.1113611,298.828488%2040.5533909,299.539717%2036.0829934,298.905772%20C31.6125362,298.271767%2027.4320141,296.321359%2024.0740419,293.30297%20C20.7160636,290.284582%2018.3326671,286.334835%2017.2274978,281.957035%20C16.1223339,277.579176%2016.3454363,272.971497%2017.868382,268.720869%20C19.3913284,264.470301%2022.1451683,260.769335%2025.7790187,258.089483%20C29.4129289,255.40962%2033.7623156,253.872201%2038.2730898,253.673106%20C41.2280121,253.515051%2044.1851476,253.940738%2046.9755719,254.925846%20C49.7659364,255.910962%2052.3349165,257.436187%2054.5356604,259.414404%20C56.7364042,261.392633%2058.5259031,263.785032%2059.8017495,266.455044%20C61.0776558,269.124996%2061.8150255,272.02022%2061.9716874,274.975202%20Z'%20fill='%239E9E9E'%3e%3c/path%3e%3cpath%20d='M21.5641016,54.5650606%20C18.9814831,54.6363631%2016.4354131,53.9424806%2014.2460944,52.570687%20C12.0567996,51.1988336%2010.3219858,49.2102622%209.25983722,46.8551295%20C8.19768984,44.499937%207.85562972,41.8832824%208.276674,39.3342215%20C8.69771827,36.7851606%209.86306631,34.4174662%2011.6261678,32.5289814%20C13.3892752,30.6404727%2015.6714246,29.3154324%2018.1856119,28.7204982%20C20.6997394,28.1255646%2023.3336813,28.2873008%2025.7562282,29.1853653%20C28.1787154,30.0834346%2030.2815979,31.6777312%2031.800363,33.767765%20C33.3191879,35.8578106%2034.1861222,38.3502842%2034.2921188,40.9317063%20C34.3930308,44.4222341%2033.113057,47.8117302%2030.7300493,50.3642007%20C28.3470417,52.916731%2025.0533134,54.4262842%2021.5641016,54.5650606%20Z'%20fill='%23616262'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",sm="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";Wu("k",{resolver:t=>new URL(Object.assign({"../icons/js.svg":tm,"../icons/jupyter.svg":im,"../icons/python.svg":sm})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});var rm=Object.defineProperty,om=Object.getOwnPropertyDescriptor,br=(t,e,i,s)=>{for(var r=s>1?void 0:s?om(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&rm(e,i,r),r};let Mi=class extends gr{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const t=this.name.trim().split(/ +/),e=t.pop(),i=t.pop();return f`
            <wa-icon library="${i||U}" variant="${this.variant||U}"
                         family="${this.family||U}" name=${e} label="${this.label||this.name||U}"></wa-icon>`}};Mi.styles=_`
        :host {
            display: contents;
        }
    `;br([d()],Mi.prototype,"name",2);br([d()],Mi.prototype,"family",2);br([d()],Mi.prototype,"variant",2);br([d()],Mi.prototype,"label",2);Mi=br([$("k-icon")],Mi);const Wc="important",am=" !"+Wc,ge=As(class extends _s{constructor(t){if(super(t),t.type!==At.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return s==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in e){const r=e[s];if(r!=null){this.ft.add(s);const o=typeof r=="string"&&r.endsWith(am);s.includes("-")||o?i.setProperty(s,o?r.slice(0,-11):r,o?Wc:""):i[s]=r}}return it}});let za=class extends _s{constructor(e){if(super(e),this.it=U,e.type!==At.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U||e==null)return this._t=void 0,this.it=e;if(e===it)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};za.directiveName="unsafeHTML",za.resultType=1;const Zt=As(za);const pi=()=>new nm;class nm{}const la=new WeakMap,Jt=As(class extends _u{render(t){return U}update(t,[e]){const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),U}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=la.get(e);i===void 0&&(i=new WeakMap,la.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?la.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function Ne(t,e,i){return t?e(t):i?.(t)}const ul=(t,e,i)=>{const s=new Map;for(let r=e;r<=i;r++)s.set(t[r],r);return s},jc=As(class extends _s{constructor(t){if(super(t),t.type!==At.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;i===void 0?i=e:e!==void 0&&(s=e);const r=[],o=[];let a=0;for(const l of t)r[a]=s?s(l,a):a,o[a]=i(l,a),a++;return{values:o,keys:r}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){const r=Eu(t),{values:o,keys:a}=this.dt(e,i,s);if(!Array.isArray(r))return this.ut=a,o;const l=this.ut??=[],c=[];let h,u,p=0,m=r.length-1,b=0,w=o.length-1;for(;p<=m&&b<=w;)if(r[p]===null)p++;else if(r[m]===null)m--;else if(l[p]===a[b])c[b]=Li(r[p],o[b]),p++,b++;else if(l[m]===a[w])c[w]=Li(r[m],o[w]),m--,w--;else if(l[p]===a[w])c[w]=Li(r[p],o[w]),Us(t,c[w+1],r[p]),p++,w--;else if(l[m]===a[b])c[b]=Li(r[m],o[b]),Us(t,r[p],r[m]),m--,b++;else if(h===void 0&&(h=ul(a,b,w),u=ul(l,p,m)),h.has(l[p]))if(h.has(l[m])){const k=u.get(a[b]),D=k!==void 0?r[k]:null;if(D===null){const E=Us(t,r[p]);Li(E,o[b]),c[b]=E}else c[b]=Li(D,o[b]),Us(t,r[p],D),r[k]=null;b++}else oa(r[m]),m--;else oa(r[p]),p++;for(;b<=w;){const k=Us(t,c[w+1]);Li(k,o[b]),c[b++]=k}for(;p<=m;){const k=r[p++];k!==null&&oa(k)}return this.ut=a,Dc(t,c),it}});function un(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ji=un();function Xc(t){ji=t}var ar={exec:()=>null};function te(t,e=""){let i=typeof t=="string"?t:t.source,s={replace:(r,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(Ye.caret,"$1"),i=i.replace(r,a),s},getRegex:()=>new RegExp(i,e)};return s}var lm=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ye={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},cm=/^(?:[ \t]*(?:\n|$))+/,dm=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,hm=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,wr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,um=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,pn=/(?:[*+-]|\d{1,9}[.)])/,Gc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Kc=te(Gc).replace(/bull/g,pn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),pm=te(Gc).replace(/bull/g,pn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),fn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,fm=/^[^\n]+/,mn=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,mm=te(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",mn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),gm=te(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,pn).getRegex(),_o="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",gn=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,bm=te("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",gn).replace("tag",_o).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Yc=te(fn).replace("hr",wr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_o).getRegex(),wm=te(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Yc).getRegex(),bn={blockquote:wm,code:dm,def:mm,fences:hm,heading:um,hr:wr,html:bm,lheading:Kc,list:gm,newline:cm,paragraph:Yc,table:ar,text:fm},pl=te("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",wr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_o).getRegex(),vm={...bn,lheading:pm,table:pl,paragraph:te(fn).replace("hr",wr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",pl).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_o).getRegex()},ym={...bn,html:te(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",gn).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ar,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:te(fn).replace("hr",wr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Kc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},xm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,km=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Zc=/^( {2,}|\\)\n(?!\s*$)/,Cm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,To=/[\p{P}\p{S}]/u,wn=/[\s\p{P}\p{S}]/u,Jc=/[^\s\p{P}\p{S}]/u,Em=te(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,wn).getRegex(),Qc=/(?!~)[\p{P}\p{S}]/u,$m=/(?!~)[\s\p{P}\p{S}]/u,Sm=/(?:[^\s\p{P}\p{S}]|~)/u,Am=te(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",lm?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ed=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,_m=te(ed,"u").replace(/punct/g,To).getRegex(),Tm=te(ed,"u").replace(/punct/g,Qc).getRegex(),td="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Lm=te(td,"gu").replace(/notPunctSpace/g,Jc).replace(/punctSpace/g,wn).replace(/punct/g,To).getRegex(),Rm=te(td,"gu").replace(/notPunctSpace/g,Sm).replace(/punctSpace/g,$m).replace(/punct/g,Qc).getRegex(),Im=te("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Jc).replace(/punctSpace/g,wn).replace(/punct/g,To).getRegex(),Om=te(/\\(punct)/,"gu").replace(/punct/g,To).getRegex(),Dm=te(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),zm=te(gn).replace("(?:-->|$)","-->").getRegex(),Pm=te("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",zm).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),to=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Mm=te(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",to).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),id=te(/^!?\[(label)\]\[(ref)\]/).replace("label",to).replace("ref",mn).getRegex(),sd=te(/^!?\[(ref)\](?:\[\])?/).replace("ref",mn).getRegex(),Nm=te("reflink|nolink(?!\\()","g").replace("reflink",id).replace("nolink",sd).getRegex(),fl=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,vn={_backpedal:ar,anyPunctuation:Om,autolink:Dm,blockSkip:Am,br:Zc,code:km,del:ar,emStrongLDelim:_m,emStrongRDelimAst:Lm,emStrongRDelimUnd:Im,escape:xm,link:Mm,nolink:sd,punctuation:Em,reflink:id,reflinkSearch:Nm,tag:Pm,text:Cm,url:ar},Fm={...vn,link:te(/^!?\[(label)\]\((.*?)\)/).replace("label",to).getRegex(),reflink:te(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",to).getRegex()},Pa={...vn,emStrongRDelimAst:Rm,emStrongLDelim:Tm,url:te(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",fl).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:te(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",fl).getRegex()},Um={...Pa,br:te(Zc).replace("{2,}","*").getRegex(),text:te(Pa.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Or={normal:bn,gfm:vm,pedantic:ym},qs={normal:vn,gfm:Pa,breaks:Um,pedantic:Fm},Bm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ml=t=>Bm[t];function Pt(t,e){if(e){if(Ye.escapeTest.test(t))return t.replace(Ye.escapeReplace,ml)}else if(Ye.escapeTestNoEncode.test(t))return t.replace(Ye.escapeReplaceNoEncode,ml);return t}function gl(t){try{t=encodeURI(t).replace(Ye.percentDecode,"%")}catch{return null}return t}function bl(t,e){let i=t.replace(Ye.findPipe,(o,a,l)=>{let c=!1,h=a;for(;--h>=0&&l[h]==="\\";)c=!c;return c?"|":" |"}),s=i.split(Ye.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(Ye.slashPipe,"|");return s}function Vs(t,e,i){let s=t.length;if(s===0)return"";let r=0;for(;r<s&&t.charAt(s-r-1)===e;)r++;return t.slice(0,s-r)}function qm(t,e){if(t.indexOf(e[1])===-1)return-1;let i=0;for(let s=0;s<t.length;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])i++;else if(t[s]===e[1]&&(i--,i<0))return s;return i>0?-2:-1}function wl(t,e,i,s,r){let o=e.href,a=e.title||null,l=t[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;let c={type:t[0].charAt(0)==="!"?"image":"link",raw:i,href:o,title:a,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,c}function Vm(t,e,i){let s=t.match(i.other.indentCodeCompensation);if(s===null)return e;let r=s[1];return e.split(`
`).map(o=>{let a=o.match(i.other.beginningSpace);if(a===null)return o;let[l]=a;return l.length>=r.length?o.slice(r.length):o}).join(`
`)}var io=class{options;rules;lexer;constructor(t){this.options=t||ji}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let i=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Vs(i,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let i=e[0],s=Vm(i,e[3]||"",this.rules);return{type:"code",raw:i,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let i=e[2].trim();if(this.rules.other.endingHash.test(i)){let s=Vs(i,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(i=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Vs(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let i=Vs(e[0],`
`).split(`
`),s="",r="",o=[];for(;i.length>0;){let a=!1,l=[],c;for(c=0;c<i.length;c++)if(this.rules.other.blockquoteStart.test(i[c]))l.push(i[c]),a=!0;else if(!a)l.push(i[c]);else break;i=i.slice(c);let h=l.join(`
`),u=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${h}`:h,r=r?`${r}
${u}`:u;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,o,!0),this.lexer.state.top=p,i.length===0)break;let m=o.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let b=m,w=b.raw+`
`+i.join(`
`),k=this.blockquote(w);o[o.length-1]=k,s=s.substring(0,s.length-b.raw.length)+k.raw,r=r.substring(0,r.length-b.text.length)+k.text;break}else if(m?.type==="list"){let b=m,w=b.raw+`
`+i.join(`
`),k=this.list(w);o[o.length-1]=k,s=s.substring(0,s.length-m.raw.length)+k.raw,r=r.substring(0,r.length-b.raw.length)+k.raw,i=w.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:r}}}list(t){let e=this.rules.block.list.exec(t);if(e){let i=e[1].trim(),s=i.length>1,r={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");let o=this.rules.other.listItemRegex(i),a=!1;for(;t;){let c=!1,h="",u="";if(!(e=o.exec(t))||this.rules.block.hr.test(t))break;h=e[0],t=t.substring(h.length);let p=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,E=>" ".repeat(3*E.length)),m=t.split(`
`,1)[0],b=!p.trim(),w=0;if(this.options.pedantic?(w=2,u=p.trimStart()):b?w=e[1].length+1:(w=e[2].search(this.rules.other.nonSpaceChar),w=w>4?1:w,u=p.slice(w),w+=e[1].length),b&&this.rules.other.blankLine.test(m)&&(h+=m+`
`,t=t.substring(m.length+1),c=!0),!c){let E=this.rules.other.nextBulletRegex(w),M=this.rules.other.hrRegex(w),T=this.rules.other.fencesBeginRegex(w),I=this.rules.other.headingBeginRegex(w),O=this.rules.other.htmlBeginRegex(w);for(;t;){let F=t.split(`
`,1)[0],P;if(m=F,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),P=m):P=m.replace(this.rules.other.tabCharGlobal,"    "),T.test(m)||I.test(m)||O.test(m)||E.test(m)||M.test(m))break;if(P.search(this.rules.other.nonSpaceChar)>=w||!m.trim())u+=`
`+P.slice(w);else{if(b||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||T.test(p)||I.test(p)||M.test(p))break;u+=`
`+m}!b&&!m.trim()&&(b=!0),h+=F+`
`,t=t.substring(F.length+1),p=P.slice(w)}}r.loose||(a?r.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(a=!0));let k=null,D;this.options.gfm&&(k=this.rules.other.listIsTask.exec(u),k&&(D=k[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:h,task:!!k,checked:D,loose:!1,text:u,tokens:[]}),r.raw+=h}let l=r.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){let h=r.items[c].tokens.filter(p=>p.type==="space"),u=h.length>0&&h.some(p=>this.rules.other.anyLine.test(p.raw));r.loose=u}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let i=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:i,raw:e[0],href:s,title:r}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let i=bl(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:e[0],header:[],align:[],rows:[]};if(i.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<i.length;a++)o.header.push({text:i[a],tokens:this.lexer.inline(i[a]),header:!0,align:o.align[a]});for(let a of r)o.rows.push(bl(a,o.header.length).map((l,c)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:o.align[c]})));return o}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let i=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:i,tokens:this.lexer.inline(i)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let i=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let o=Vs(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{let o=qm(e[2],"()");if(o===-2)return;if(o>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let s=e[2],r="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],r=o[3])}else r=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?s=s.slice(1):s=s.slice(1,-1)),wl(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let i;if((i=this.rules.inline.reflink.exec(t))||(i=this.rules.inline.nolink.exec(t))){let s=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[s.toLowerCase()];if(!r){let o=i[0].charAt(0);return{type:"text",raw:o,text:o}}return wl(i,r,i[0],this.lexer,this.rules)}}emStrong(t,e,i=""){let s=this.rules.inline.emStrongLDelim.exec(t);if(!(!s||s[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!i||this.rules.inline.punctuation.exec(i))){let r=[...s[0]].length-1,o,a,l=r,c=0,h=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*t.length+r);(s=h.exec(e))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(a=[...o].length,s[3]||s[4]){l+=a;continue}else if((s[5]||s[6])&&r%3&&!((r+a)%3)){c+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+c);let u=[...s[0]][0].length,p=t.slice(0,r+s.index+u+a);if(Math.min(r,a)%2){let b=p.slice(1,-1);return{type:"em",raw:p,text:b,tokens:this.lexer.inlineTokens(b)}}let m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let i=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(i),r=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return s&&r&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:e[0],text:i}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let i,s;return e[2]==="@"?(i=e[1],s="mailto:"+i):(i=e[1],s=i),{type:"link",raw:e[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let i,s;if(e[2]==="@")i=e[0],s="mailto:"+i;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);i=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let i=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:i}}}},_t=class Ma{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ji,this.options.tokenizer=this.options.tokenizer||new io,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={other:Ye,block:Or.normal,inline:qs.normal};this.options.pedantic?(i.block=Or.pedantic,i.inline=qs.pedantic):this.options.gfm&&(i.block=Or.gfm,this.options.breaks?i.inline=qs.breaks:i.inline=qs.gfm),this.tokenizer.rules=i}static get rules(){return{block:Or,inline:qs}}static lex(e,i){return new Ma(i).lex(e)}static lexInline(e,i){return new Ma(i).inlineTokens(e)}lex(e){e=e.replace(Ye.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let s=this.inlineQueue[i];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,i=[],s=!1){for(this.options.pedantic&&(e=e.replace(Ye.tabCharGlobal,"    ").replace(Ye.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(a=>(r=a.call({lexer:this},e,i))?(e=e.substring(r.raw.length),i.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let a=i.at(-1);r.raw.length===1&&a!==void 0?a.raw+=`
`:i.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let a=i.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.at(-1).src=a.text):i.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let a=i.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},i.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),i.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),i.push(r);continue}let o=e;if(this.options.extensions?.startBlock){let a=1/0,l=e.slice(1),c;this.options.extensions.startBlock.forEach(h=>{c=h.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(o=e.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){let a=i.at(-1);s&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):i.push(r),s=o.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let a=i.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):i.push(r);continue}if(e){let a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,i}inline(e,i=[]){return this.inlineQueue.push({src:e,tokens:i}),i}inlineTokens(e,i=[]){let s=e,r=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)o=r[2]?r[2].length:0,s=s.slice(0,r.index+o)+"["+"a".repeat(r[0].length-o-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let a=!1,l="";for(;e;){a||(l=""),a=!1;let c;if(this.options.extensions?.inline?.some(u=>(c=u.call({lexer:this},e,i))?(e=e.substring(c.raw.length),i.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);let u=i.at(-1);c.type==="text"&&u?.type==="text"?(u.raw+=c.raw,u.text+=c.text):i.push(c);continue}if(c=this.tokenizer.emStrong(e,s,l)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.del(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),i.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),i.push(c);continue}let h=e;if(this.options.extensions?.startInline){let u=1/0,p=e.slice(1),m;this.options.extensions.startInline.forEach(b=>{m=b.call({lexer:this},p),typeof m=="number"&&m>=0&&(u=Math.min(u,m))}),u<1/0&&u>=0&&(h=e.substring(0,u+1))}if(c=this.tokenizer.inlineText(h)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),a=!0;let u=i.at(-1);u?.type==="text"?(u.raw+=c.raw,u.text+=c.text):i.push(c);continue}if(e){let u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return i}},so=class{options;parser;constructor(t){this.options=t||ji}space(t){return""}code({text:t,lang:e,escaped:i}){let s=(e||"").match(Ye.notSpaceStart)?.[0],r=t.replace(Ye.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Pt(s)+'">'+(i?r:Pt(r,!0))+`</code></pre>
`:"<pre><code>"+(i?r:Pt(r,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,i=t.start,s="";for(let a=0;a<t.items.length;a++){let l=t.items[a];s+=this.listitem(l)}let r=e?"ol":"ul",o=e&&i!==1?' start="'+i+'"':"";return"<"+r+o+`>
`+s+"</"+r+`>
`}listitem(t){let e="";if(t.task){let i=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=i+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=i+" "+Pt(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:i+" ",text:i+" ",escaped:!0}):e+=i+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",i="";for(let r=0;r<t.header.length;r++)i+=this.tablecell(t.header[r]);e+=this.tablerow({text:i});let s="";for(let r=0;r<t.rows.length;r++){let o=t.rows[r];i="";for(let a=0;a<o.length;a++)i+=this.tablecell(o[a]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),i=t.header?"th":"td";return(t.align?`<${i} align="${t.align}">`:`<${i}>`)+e+`</${i}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Pt(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:i}){let s=this.parser.parseInline(i),r=gl(t);if(r===null)return s;t=r;let o='<a href="'+t+'"';return e&&(o+=' title="'+Pt(e)+'"'),o+=">"+s+"</a>",o}image({href:t,title:e,text:i,tokens:s}){s&&(i=this.parser.parseInline(s,this.parser.textRenderer));let r=gl(t);if(r===null)return Pt(i);t=r;let o=`<img src="${t}" alt="${i}"`;return e&&(o+=` title="${Pt(e)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Pt(t.text)}},yn=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},Tt=class Na{options;renderer;textRenderer;constructor(e){this.options=e||ji,this.options.renderer=this.options.renderer||new so,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new yn}static parse(e,i){return new Na(i).parse(e)}static parseInline(e,i){return new Na(i).parseInline(e)}parse(e,i=!0){let s="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let l=o,c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){s+=c||"";continue}}let a=o;switch(a.type){case"space":{s+=this.renderer.space(a);continue}case"hr":{s+=this.renderer.hr(a);continue}case"heading":{s+=this.renderer.heading(a);continue}case"code":{s+=this.renderer.code(a);continue}case"table":{s+=this.renderer.table(a);continue}case"blockquote":{s+=this.renderer.blockquote(a);continue}case"list":{s+=this.renderer.list(a);continue}case"html":{s+=this.renderer.html(a);continue}case"def":{s+=this.renderer.def(a);continue}case"paragraph":{s+=this.renderer.paragraph(a);continue}case"text":{let l=a,c=this.renderer.text(l);for(;r+1<e.length&&e[r+1].type==="text";)l=e[++r],c+=`
`+this.renderer.text(l);i?s+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):s+=c;continue}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}parseInline(e,i=this.renderer){let s="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=l||"";continue}}let a=o;switch(a.type){case"escape":{s+=i.text(a);break}case"html":{s+=i.html(a);break}case"link":{s+=i.link(a);break}case"image":{s+=i.image(a);break}case"strong":{s+=i.strong(a);break}case"em":{s+=i.em(a);break}case"codespan":{s+=i.codespan(a);break}case"br":{s+=i.br(a);break}case"del":{s+=i.del(a);break}case"text":{s+=i.text(a);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}},Js=class{options;block;constructor(t){this.options=t||ji}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?_t.lex:_t.lexInline}provideParser(){return this.block?Tt.parse:Tt.parseInline}},Hm=class{defaults=un();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Tt;Renderer=so;TextRenderer=yn;Lexer=_t;Tokenizer=io;Hooks=Js;constructor(...t){this.use(...t)}walkTokens(t,e){let i=[];for(let s of t)switch(i=i.concat(e.call(this,s)),s.type){case"table":{let r=s;for(let o of r.header)i=i.concat(this.walkTokens(o.tokens,e));for(let o of r.rows)for(let a of o)i=i.concat(this.walkTokens(a.tokens,e));break}case"list":{let r=s;i=i.concat(this.walkTokens(r.items,e));break}default:{let r=s;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(o=>{let a=r[o].flat(1/0);i=i.concat(this.walkTokens(a,e))}):r.tokens&&(i=i.concat(this.walkTokens(r.tokens,e)))}}return i}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(i=>{let s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let o=e.renderers[r.name];o?e.renderers[r.name]=function(...a){let l=r.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[r.level];o?o.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),s.extensions=e),i.renderer){let r=this.defaults.renderer||new so(this.defaults);for(let o in i.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,l=i.renderer[a],c=r[a];r[a]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=c.apply(r,h)),u||""}}s.renderer=r}if(i.tokenizer){let r=this.defaults.tokenizer||new io(this.defaults);for(let o in i.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,l=i.tokenizer[a],c=r[a];r[a]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=c.apply(r,h)),u}}s.tokenizer=r}if(i.hooks){let r=this.defaults.hooks||new Js;for(let o in i.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,l=i.hooks[a],c=r[a];Js.passThroughHooks.has(o)?r[a]=h=>{if(this.defaults.async&&Js.passThroughHooksRespectAsync.has(o))return(async()=>{let p=await l.call(r,h);return c.call(r,p)})();let u=l.call(r,h);return c.call(r,u)}:r[a]=(...h)=>{if(this.defaults.async)return(async()=>{let p=await l.apply(r,h);return p===!1&&(p=await c.apply(r,h)),p})();let u=l.apply(r,h);return u===!1&&(u=c.apply(r,h)),u}}s.hooks=r}if(i.walkTokens){let r=this.defaults.walkTokens,o=i.walkTokens;s.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),r&&(l=l.concat(r.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return _t.lex(t,e??this.defaults)}parser(t,e){return Tt.parse(t,e??this.defaults)}parseMarkdown(t){return(e,i)=>{let s={...i},r={...this.defaults,...s},o=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=t),r.async)return(async()=>{let a=r.hooks?await r.hooks.preprocess(e):e,l=await(r.hooks?await r.hooks.provideLexer():t?_t.lex:_t.lexInline)(a,r),c=r.hooks?await r.hooks.processAllTokens(l):l;r.walkTokens&&await Promise.all(this.walkTokens(c,r.walkTokens));let h=await(r.hooks?await r.hooks.provideParser():t?Tt.parse:Tt.parseInline)(c,r);return r.hooks?await r.hooks.postprocess(h):h})().catch(o);try{r.hooks&&(e=r.hooks.preprocess(e));let a=(r.hooks?r.hooks.provideLexer():t?_t.lex:_t.lexInline)(e,r);r.hooks&&(a=r.hooks.processAllTokens(a)),r.walkTokens&&this.walkTokens(a,r.walkTokens);let l=(r.hooks?r.hooks.provideParser():t?Tt.parse:Tt.parseInline)(a,r);return r.hooks&&(l=r.hooks.postprocess(l)),l}catch(a){return o(a)}}}onError(t,e){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let s="<p>An error occurred:</p><pre>"+Pt(i.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(i);throw i}}},Ni=new Hm;function se(t,e){return Ni.parse(t,e)}se.options=se.setOptions=function(t){return Ni.setOptions(t),se.defaults=Ni.defaults,Xc(se.defaults),se};se.getDefaults=un;se.defaults=ji;se.use=function(...t){return Ni.use(...t),se.defaults=Ni.defaults,Xc(se.defaults),se};se.walkTokens=function(t,e){return Ni.walkTokens(t,e)};se.parseInline=Ni.parseInline;se.Parser=Tt;se.parser=Tt.parse;se.Renderer=so;se.TextRenderer=yn;se.Lexer=_t;se.lexer=_t.lex;se.Tokenizer=io;se.Hooks=Js;se.parse=se;se.options;se.setOptions;se.use;se.walkTokens;se.parseInline;Tt.parse;_t.lex;function xn(t){return new Promise((e,i)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>i(t.error)})}function Wm(t,e){let i;const s=()=>{if(i)return i;const r=indexedDB.open(t);return r.onupgradeneeded=()=>r.result.createObjectStore(e),i=xn(r),i.then(o=>{o.onclose=()=>i=void 0},()=>{}),i};return(r,o)=>s().then(a=>o(a.transaction(e,r).objectStore(e)))}let ca;function rd(){return ca||(ca=Wm("keyval-store","keyval")),ca}function jm(t,e=rd()){return e("readonly",i=>xn(i.get(t)))}function Xm(t,e,i=rd()){return i("readwrite",s=>(s.put(e,t),xn(s.transaction)))}const od="app-toolbars-main",Ls="app-toolbars-main-right",ad="app-toolbars-main-center",kn="app-toolbars-bottom",Lo="app-toolbars-bottom-center",vr="app-toolbars-bottom-end",ci="editor-area-main",ro="sidebar-main",nd="sidebar-main-bottom",ld="sidebar-auxiliary",cd="panel-bottom",Gm="command-save",dd=!1;var Cn=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(Cn||{});const Km=Object.freeze(Object.defineProperty({__proto__:null,COMMAND_SAVE:Gm,EDITOR_AREA_MAIN:ci,HIDE_DOT_RESOURCE:dd,MouseButton:Cn,PANEL_BOTTOM:cd,SIDEBAR_AUXILIARY:ld,SIDEBAR_MAIN:ro,SIDEBAR_MAIN_BOTTOM:nd,TOOLBAR_BOTTOM:kn,TOOLBAR_BOTTOM_CENTER:Lo,TOOLBAR_BOTTOM_END:vr,TOOLBAR_MAIN:od,TOOLBAR_MAIN_CENTER:ad,TOOLBAR_MAIN_RIGHT:Ls},Symbol.toStringTag,{value:"Module"}));class Ym{async persistObject(e,i){return Xm(e,i)}async getObject(e){return jm(e)}}const Ct=new Ym;Ae.put("persistenceService",Ct);const Hs=".geospace/settings.json",da="dialogSettings",Di="events/settings/changed";class Zm{async checkSettings(){this.appSettings||(this.appSettings=await Ct.getObject(Hs),this.appSettings||(this.appSettings={},await Ct.persistObject(Hs,this.appSettings)),oe(Di,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,i){await this.checkSettings(),this.appSettings[e]=i,await Ct.persistObject(Hs,this.appSettings),oe(Di,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await Ct.persistObject(Hs,this.appSettings),oe(Di,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[da]||{})[e]}async setDialogSetting(e,i){await this.checkSettings();const s=this.appSettings[da]||{};s[e]=i,this.appSettings[da]=s,await Ct.persistObject(Hs,this.appSettings),oe(Di,this.appSettings)}}const be=new Zm;Ae.put("appSettings",be);class Jm{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,Da.set(this.updateCounter)}run(e,i){const s=this.createProgressMonitor(e);try{this.tasks.push(s),this.notifyUpdate(),i(s)}finally{this.tasks.splice(this.tasks.indexOf(s),1),this.notifyUpdate()}}async runAsync(e,i){const s=this.createProgressMonitor(e);return this.tasks.push(s),this.notifyUpdate(),i(s).finally(()=>{this.tasks.splice(this.tasks.indexOf(s),1),this.notifyUpdate()})}createProgressMonitor(e){const i={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(i,{set:(s,r,o)=>(s[r]=o,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const ms=new Jm;Ae.put("taskService",ms);const Qm=si("EsmShService"),yr=class ht{isEsmShUrl(e){try{const i=new URL(e);return i.hostname==="esm.sh"||i.hostname==="raw.esm.sh"}catch{return!1}}isSourceIdentifier(e){return this.isEsmShUrl(e)||this.isHttpUrl(e)?!1:this.parseSource(e)!==null}isHttpUrl(e){try{const i=new URL(e);return i.protocol==="http:"||i.protocol==="https:"}catch{return!1}}parseSource(e){return!e||typeof e!="string"||(e=e.trim(),this.isHttpUrl(e))?null:e.startsWith(ht.GITHUB_PREFIX)?this.parseGitHubSource(e):e.startsWith(ht.JSR_PREFIX)?this.parseJsrSource(e):e.startsWith(ht.PR_PREFIX)?this.parsePrSource(e):this.parseNpmSource(e)}parseGitHubSource(e){const s=e.substring(ht.GITHUB_PREFIX.length).split("/");if(s.length<2)return null;const r=s[0],o=s[1];let a,l,c;const h=o.match(/^(.+?)(@(.+))?$/);return h?(a=h[1],l=h[3],s.length>2&&(c=s.slice(2).join("/")),{type:"github",owner:r,repo:a,version:l,path:c}):null}parseJsrSource(e){const i=e.substring(ht.JSR_PREFIX.length);if(!i.startsWith("@"))return null;const s=i.split("/");if(s.length<2)return null;const r=s[0],o=s[1];let a,l,c;const h=o.match(/^(.+?)(@(.+))?$/);return h?(a=`${r}/${h[1]}`,l=h[3],s.length>2&&(c=s.slice(2).join("/")),{type:"jsr",package:a,version:l,path:c}):null}parsePrSource(e){const s=e.substring(ht.PR_PREFIX.length).split("/");if(s.length<2)return null;const r=s[0],o=s[1];let a,l;const c=o.match(/^(.+?)@(.+)$/);return c?(a=c[1],l=c[2]):a=o,{type:"pr",owner:r,repo:a,commit:l}}parseNpmSource(e){const i=e.split("/"),s=i[0];let r,o,a;const l=s.match(/^(.+?)(@(.+))?$/);return l?(r=l[1],o=l[3],i.length>1&&(a=i.slice(1).join("/")),{type:"npm",package:r,version:o,path:a}):null}buildEsmShUrl(e,i){let s=ht.ESM_SH_BASE;switch(e.type){case"npm":s+=`/${e.package}`,e.version&&(s+=`@${e.version}`),e.path&&(s+=`/${e.path}`);break;case"github":s+=`/${ht.GITHUB_PREFIX}${e.owner}/${e.repo}`,e.version&&(s+=`@${e.version}`),e.path&&(s+=`/${e.path}`);break;case"jsr":s+=`/${ht.JSR_PREFIX}${e.package}`,e.version&&(s+=`@${e.version}`),e.path&&(s+=`/${e.path}`);break;case"pr":s+=`/${ht.PR_PREFIX}${e.owner}/${e.repo}`,e.commit&&(s+=`@${e.commit}`);break}const r=[];if(i?.deps){const o=Object.entries(i.deps).map(([a,l])=>`${a}@${l}`).join(",");r.push(`deps=${encodeURIComponent(o)}`)}return i?.target&&r.push(`target=${encodeURIComponent(i.target)}`),i?.dev&&r.push("dev"),i?.bundle===!1?r.push("bundle=false"):i?.bundle===!0&&r.push("bundle"),r.length>0&&(s+=`?${r.join("&")}`),s}normalizeToEsmSh(e,i){if(this.isEsmShUrl(e)||this.isHttpUrl(e))return e;const s=this.parseSource(e);return s?this.buildEsmShUrl(s,i):(Qm.warn(`Could not parse source identifier: ${e}`),e)}extractPackageName(e){const i=this.parseSource(e);if(!i)return null;switch(i.type){case"npm":return i.package||null;case"github":return`${i.owner}/${i.repo}`;case"jsr":return i.package||null;case"pr":return`${i.owner}/${i.repo}`}}isGitHubUrl(e){try{const i=new URL(e);return i.hostname==="github.com"||i.hostname==="www.github.com"}catch{return e.startsWith("https://github.com/")||e.startsWith("http://github.com/")}}convertGitHubUrlToSource(e){try{const s=new URL(e).pathname.split("/").filter(h=>h);if(s.length<2)throw new Error("Invalid GitHub URL format");const r=s[0];let o=s[1].replace(/\.git$/,""),a,l;s.length>2&&(s[2]==="blob"||s[2]==="tree"?(a=s[3]||"main",s[2]==="blob"&&s.length>4&&(l=s.slice(4).join("/"))):s[2]==="commit"?a=s[3]:l=s.slice(2).join("/"));let c=`${ht.GITHUB_PREFIX}${r}/${o}`;return a&&(c+=`@${a}`),l&&(c+=`/${l}`),c}catch{const i=e.match(/github\.com\/([^\/]+)\/([^\/]+)/);return i?`${ht.GITHUB_PREFIX}${i[1]}/${i[2].replace(/\.git$/,"")}`:e}}async fetchGitHubPackageJson(e){if(e.type!=="github")throw new Error("Source must be a GitHub source");const i=e.owner,s=e.repo,r=e.version||"main",o=`https://raw.githubusercontent.com/${i}/${s}/${r}/package.json`,a=await fetch(o);if(!a.ok)throw new Error(`Failed to fetch package.json: ${a.statusText}`);return await a.json()}};yr.ESM_SH_BASE="https://esm.sh";yr.GITHUB_PREFIX="gh/";yr.JSR_PREFIX="jsr/";yr.PR_PREFIX="pr/";let eg=yr;const Mt=new eg;Ae.put("esmShService",Mt);const Qs="events/extensionsregistry/extensionsConfigChanged",Ws="extensions",vl="extensions.external";class tg{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,Ue(Di,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then(async()=>{const e=this.extensionsSettings?.filter(i=>this.isEnabled(i.id)).map(i=>this.load(i.id).catch(s=>{he("Extension could not be loaded: "+s.message)}))||[];await Promise.all(e)})})}async loadPersistedExternalExtensions(){try{const e=await be.get(vl);e&&Array.isArray(e)&&(e.forEach(i=>{this.extensions[i.id]=i}),G.debug(`Loaded ${e.length} persisted external extensions`))}catch(e){G.error(`Failed to load persisted external extensions: ${e}`)}}async savePersistedExternalExtensions(){try{const e=Object.values(this.extensions).filter(i=>i.external);await be.set(vl,e)}catch(e){G.error(`Failed to save persisted external extensions: ${e}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await be.get(Ws),this.extensionsSettings||(await be.set(Ws,[]),this.extensionsSettings=await be.get(Ws)),oe(Qs,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e,e.external&&this.savePersistedExternalExtensions().catch(i=>{G.error(`Failed to persist external extension: ${i}`)}),oe(Qs,this.extensionsSettings)}async loadExtensionFromUrl(e,i){G.info(`Loading extension from URL: ${e}...`);try{let s=e,r=`Extension from ${e}`;if(Mt.isSourceIdentifier(e)){const a=Mt.extractPackageName(e);a&&(r=`Extension: ${a}`),s=Mt.normalizeToEsmSh(e),G.debug(`Converted source identifier to esm.sh URL: ${e} -> ${s}`)}const o=i||`url:${s}`;if(this.isEnabled(o))return G.info(`Extension from URL ${s} is already enabled`),o;if(!this.extensions[o]){const a={id:o,name:r,description:`Extension loaded from: ${e}`,url:s};this.registerExtension(a),G.info(`Registered extension from URL: ${o}`)}return this.enable(o,!1),G.info(`Successfully enabled extension from URL: ${s}`),o}catch(s){throw G.error(`Failed to load extension from URL ${e}: ${s}`),s}}getExtensions(){return Object.values(this.extensions)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(i=>i.id===e&&i.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,i=!1){this.isEnabled(e)||(G.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,i)}).catch(s=>{G.error(`Could not load extension: ${e}: ${s}`)}))}async load(e,i=[]){if(this.loadedExtensions.has(e))return;const s=this.loadingPromises.get(e);if(s)return s;if(i.includes(e)){const a=[...i,e].join(" → ");throw new Error(`Circular dependency detected: ${a}`)}const r=this.extensions[e];if(!r)throw new Error("Extension not found: "+e);const o=(async()=>{try{if(r.dependencies&&r.dependencies.length>0){G.debug(`Loading dependencies for ${e}: ${r.dependencies.join(", ")}`);const l=[...i,e];for(const c of r.dependencies)await this.load(c,l),this.isEnabled(c)||(await this.updateEnablementAsync(c,!0,!1),G.debug(`Auto-enabled dependency: ${c}`))}const a=await ms.runAsync("Loading extension: "+r.name,async()=>{if(r.loader)return r.loader();if(r.url){let l=r.url;return Mt.isSourceIdentifier(r.url)&&(l=Mt.normalizeToEsmSh(r.url),G.debug(`Normalized extension URL: ${r.url} -> ${l}`)),import(l)}});if(this.loadedExtensions.add(e),a?.default instanceof Function){G.debug(`Executing extension function for: ${e}`);try{a?.default(Ts.getProxy()),G.debug(`Extension function executed successfully: ${e}`)}catch(l){throw G.error(`Error executing extension function for ${e}: ${l}`),l}}else G.warn(`Extension ${e} does not export a default function`);G.debug(`Extension loaded: ${e}`)}catch(a){throw this.loadedExtensions.delete(e),a}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,o),o}disable(e,i=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,i)}updateEnablement(e,i,s){this.checkExtensionsConfig().then(()=>{const r=this.extensionsSettings?.find(o=>o.id==e);r?r.enabled=i:this.extensionsSettings?.push({id:e,enabled:i}),be.set(Ws,this.extensionsSettings).then(()=>{if(s){const o=this.extensions[e];Nt(i?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}oe(Qs,this.extensionsSettings)})})}async updateEnablementAsync(e,i,s){await this.checkExtensionsConfig();const r=this.extensionsSettings?.find(o=>o.id==e);if(r?r.enabled=i:this.extensionsSettings?.push({id:e,enabled:i}),await be.set(Ws,this.extensionsSettings),s){const o=this.extensions[e];Nt(i?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}oe(Qs,this.extensionsSettings)}}G.debug("ExtensionRegistry initializing...");const H=new tg;Ae.put("extensionRegistry",H);G.debug("ExtensionRegistry initialized");class jt extends gr{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let i=this;for(;i&&i!==document.body&&i!==document.documentElement;){const s=i.getAttribute("id");if(s){e.unshift(`#${s}`);break}const r=i.tagName.toLowerCase(),o=i.parentElement;if(!o)break;const l=Array.from(o.children).filter(c=>c.tagName.toLowerCase()===r).indexOf(i);l>=0?e.unshift(`${r}:${l}`):e.unshift(r),i=o}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),i=this.getAttribute("id");if(i){this.settingsKey=`${e}:${i}`;return}const s=this.buildDOMTreePath();s&&(this.settingsKey=`${e}:${s}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await be.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await be.setDialogSetting(this.settingsKey,e)}}const hd=class extends jt{dispose(){}getResult(){}renderMessage(e,i=!1){if(i){const s=se.parse(e,{async:!1});return f`<div class="dialog-message" style="white-space: normal;">${Zt(s)}</div>`}return f`<div class="dialog-message" style="white-space: pre-line;">${e}</div>`}};hd.styles=[_`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let Xi=hd;const Gt=si("DialogService"),Fi="dialogs",Ro={id:"ok",label:"OK",variant:"primary"},ud={id:"cancel",label:"Cancel",variant:"default"},pd={id:"close",label:"Close",variant:"default"};let js=null;function ig(){return js||(js=document.createElement("div"),js.id="global-dialog-container",document.body.appendChild(js)),js}class sg{constructor(){this.contributions=new Map,this.loadContributions(),Ue(Wt,e=>{e.target===Fi&&this.loadContributions()})}loadContributions(){const e=z.getContributions(Fi);this.contributions.clear();for(const i of e){if(!i.id){Gt.warn("Dialog contribution missing id, skipping");continue}if(!i.component){Gt.warn(`Dialog contribution "${i.id}" has no component function, skipping`);continue}if(!i.onButton){Gt.warn(`Dialog contribution "${i.id}" has no onButton callback, skipping`);continue}this.contributions.set(i.id,i),Gt.debug(`Loaded dialog contribution: ${i.id}`)}Gt.info(`Loaded ${this.contributions.size} dialog contributions`)}async open(e,i){const s=this.contributions.get(e);if(!s)throw Gt.error(`Dialog "${e}" not found`),new Error(`Dialog "${e}" not found`);return new Promise(r=>{const o=ig();let a=!0,l=null;const c=async()=>{if(a){if(a=!1,l)try{await l.dispose()}catch(b){const w=b instanceof Error?b.message:String(b);Gt.error(`Error disposing dialog content for "${e}": ${w}`)}try{const b=l?l.getResult():void 0;await s.onButton("close",b,p)}catch(b){const w=b instanceof Error?b.message:String(b);Gt.error(`Error executing close callback for dialog "${e}": ${w}`)}gt(f``,o),r()}},h=async b=>{try{const w=l?l.getResult():void 0;await s.onButton(b,w,p)!==!1&&c()}catch(w){const k=w instanceof Error?w.message:String(w);Gt.error(`Error executing button callback for dialog "${e}": ${k}`),c()}},u=s.buttons&&s.buttons.length>0?s.buttons:[Ro];i&&typeof i=="object"&&(i.close=c);const p={...i,close:c},m=f`
                <wa-dialog label="${s.label||e}" open @wa-request-close=${c}>
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
                        ${s.component(i)}
                        
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
            `;gt(m,o),(async()=>{const b=Array.from(o.querySelectorAll("*"));for(const w of b)if(w instanceof Xi){await w.updateComplete,l=w;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(e){return this.contributions.has(e)}}const Io=new sg;Ae.put("dialogService",Io);class En extends jt{}var rg=Object.defineProperty,og=(t,e,i,s)=>{for(var r=void 0,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=a(e,i,r)||r);return r&&rg(e,i,r),r};class pt extends En{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return U}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return U}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,Oa.set(null),Oa.set(this),bt.set(null),bt.set(this)}}og([d()],pt.prototype,"dirty");const X=si("AppLoader");function ts(t){return t instanceof Error?t.message:String(t)}function ag(t){try{const i=new URL(t).pathname.split("/").filter(Boolean);return i.length>0?i[i.length-1]:void 0}catch{const e=t.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function ng(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const i=e[0];if(!(!i||i==="index.html"||i.endsWith(".html")))return i}const fd=class Fa{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(e,i){this.apps.has(e.id)&&X.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),X.info(`Registered app: ${e.name} (${e.id}) v${e.version}`),i?.defaultAppId&&(this.defaultAppId=i.defaultAppId),i?.container&&(this.container=i.container),i?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(e){this.systemRequiredExtensions.add(e)}async loadAppFromUrl(e){X.info(`Loading app from URL: ${e}...`);try{const i=await import(e);if(!i.default)throw new Error(`Module at ${e} does not have a default export`);const s=i.default;if(!s.id||!s.name||!s.version)throw new Error(`Module at ${e} does not export a valid AppDefinition`);return X.info(`Successfully loaded app definition from URL: ${s.name} (${s.id})`),s}catch(i){throw X.error(`Failed to load app from URL ${e}: ${ts(i)}`),i}}async start(){if(this.started){X.debug("AppLoader already started");return}this.started=!0,X.info("Starting AppLoader...");const e=new URLSearchParams(window.location.search),i=e.get("app"),s=e.get("appId"),r=ng(),o=this.apps.size;let a;if(i&&(a=ag(i),a&&X.info(`Extracted app ID from URL path: ${a}`)),r&&X.info(`Extracted app ID from current page path: ${r}`),i)try{X.info(`URL parameter 'app' found: ${i}, attempting to load extension or app`);try{await H.loadExtensionFromUrl(i),X.info(`Successfully loaded extension from URL: ${i}`)}catch(c){X.info(`Failed to load as extension, trying as app definition: ${ts(c)}`);try{const h=await this.loadAppFromUrl(i);this.registerApp(h),await this.loadApp(h.id,this.container),X.info(`Successfully loaded app from URL: ${i}`);return}catch(h){throw X.error(`Failed to load from URL as both extension and app: ${ts(h)}`),h}}}catch(c){X.error(`Failed to load from URL parameter, falling back to default app: ${ts(c)}`)}const l=await this.selectAppToLoad({appIdFromUrl:s,appIdFromPath:r,appIdFromAppUrl:a,appsBeforeExtension:o});if(!l)throw new Error("No apps registered");await this.loadApp(l,this.container)}async loadApp(e,i){const s=this.apps.get(e);if(!s)throw new Error(`App '${e}' not found. Make sure it's registered.`);X.info(`Loading app: ${s.name}...`),this.currentApp&&(X.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(X.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(o=>{H.disable(o)}))),s.contributions&&(X.info("Registering app contributions..."),s.contributions.ui&&(s.contributions.ui.forEach(o=>{const a=o.target;a&&z.registerContribution(a,o)}),X.info(`Registered ${s.contributions.ui.length} UI contributions`)),s.contributions.extensions&&(s.contributions.extensions.forEach(o=>{H.registerExtension(o)}),X.info(`Registered ${s.contributions.extensions.length} app extensions`)));const r=new Set(s.extensions||[]);this.systemRequiredExtensions.forEach(o=>r.add(o)),s.extensions=Array.from(r),s.extensions.length>0&&(X.info(`Enabling ${s.extensions.length} extensions...`),s.extensions.forEach(o=>{H.enable(o)})),s.initialize&&(X.info(`Initializing ${s.name}...`),await s.initialize()),this.currentApp=s,X.info(`App ${s.name} loaded successfully`),this.updateDocumentMetadata(s),i&&this.renderApp(i),window.dispatchEvent(new CustomEvent("app-loaded",{detail:{appId:s.id}}))}updateDocumentMetadata(e){if(document.title=e.name,e.metadata?.favicon){const i=e.metadata.favicon;let s=document.querySelector("link[rel*='icon']");s||(s=document.createElement("link"),s.rel="icon",document.head.appendChild(s)),s.type="image/svg+xml",s.href=i}}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const i=this.currentApp.render;if(typeof i=="string"){const s=document.createElement(i);e.innerHTML="",e.appendChild(s)}else if(i&&typeof i=="object"&&"tag"in i){const s=document.createElement(i.tag);for(const[r,o]of Object.entries(i.attributes??{}))s.setAttribute(r,o);e.innerHTML="",e.appendChild(s)}else if(typeof i=="function"){const s=i();gt(s,e)}else gt(f`<k-standard-app></k-standard-app>`,e);X.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}async getPreferredAppId(){try{return await be.get(Fa.PREFERRED_APP_KEY)}catch(e){X.debug(`Failed to get preferred app ID from settings: ${ts(e)}`);return}}async setPreferredAppId(e){if(!this.apps.has(e))throw new Error(`App '${e}' not found. Make sure it's registered.`);try{await be.set(Fa.PREFERRED_APP_KEY,e),this.defaultAppId=e,X.info(`Set preferred app to: ${e}`)}catch(i){throw X.error(`Failed to persist preferred app ID: ${ts(i)}`),i}}async selectAppToLoad(e){const{appIdFromUrl:i,appIdFromPath:s,appIdFromAppUrl:r,appsBeforeExtension:o}=e;if(i){if(this.apps.has(i))return X.info(`Loading app specified by URL parameter 'appId': ${i}`),i;X.warn(`App ID '${i}' from URL parameter not found`)}if(s){if(this.apps.has(s))return X.info(`Loading app from URL path: ${s}`),s;X.debug(`App ID '${s}' from URL path not found, continuing search`)}if(r&&this.apps.has(r))return X.info(`Loading app using ID extracted from app URL path: ${r}`),r;if(this.apps.size>o){const c=Array.from(this.apps.values()).slice(o);if(c.length>0){const h=c[0];return X.info(`Loading app registered by extension: ${h.name} (${h.id})`),h.id}}const a=await this.getPreferredAppId();if(a&&this.apps.has(a))return X.info(`Loading preferred app from settings: ${a}`),a;if(this.defaultAppId){if(this.apps.has(this.defaultAppId))return this.defaultAppId;X.warn(`Default app '${this.defaultAppId}' not found`)}const l=this.getRegisteredApps();if(l.length>0){const c=l[0];return X.info(`Loading first registered app: ${c.name} (${c.id})`),c.id}}};fd.PREFERRED_APP_KEY="preferredAppId";let lg=fd;const mt=new lg;Ae.put("appLoaderService",mt);var cg=Object.defineProperty,dg=Object.getOwnPropertyDescriptor,xr=(t,e,i,s)=>{for(var r=s>1?void 0:s?dg(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&cg(e,i,r),r};let Ui=class extends Xi{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(t){super.firstUpdated(t),this.inputValue=this.defaultValue,await this.updateComplete;const e=this.shadowRoot?.querySelector("wa-input");if(e){const i=e.shadowRoot?.querySelector("input");i&&(i.focus(),i.select())}}getResult(){return this.inputValue}handleInput(t){this.inputValue=t.target.value}handleKeyDown(t){t.key==="Enter"?(t.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):t.key==="Escape"&&(t.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return f`
            ${this.renderMessage(this.message,this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `}};Ui.styles=[...Xi.styles,_`
            wa-input {
                width: 100%;
            }
        `];xr([d({type:String})],Ui.prototype,"message",2);xr([d({type:String,attribute:"default-value"})],Ui.prototype,"defaultValue",2);xr([d({type:Boolean})],Ui.prototype,"markdown",2);xr([S()],Ui.prototype,"inputValue",2);Ui=xr([$("k-prompt-dialog-content")],Ui);z.registerContribution(Fi,{id:"prompt",label:"Input",buttons:[Ro,ud],component:t=>t?f`
            <k-prompt-dialog-content 
                .message="${t.message}"
                .defaultValue="${t.defaultValue}"
                .markdown="${t.markdown}"
            ></k-prompt-dialog-content>
        `:f`<div>Error: No prompt dialog state</div>`,onButton:async(t,e,i)=>(i&&(t==="ok"?i.resolve(e||""):i.resolve(null)),!0)});async function $n(t,e="",i=!1){return new Promise(s=>{Io.open("prompt",{message:t,defaultValue:e,markdown:i,resolve:s})})}var hg=Object.defineProperty,ug=Object.getOwnPropertyDescriptor,Sn=(t,e,i,s)=>{for(var r=s>1?void 0:s?ug(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&hg(e,i,r),r};let oo=class extends Xi{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return f`
            ${this.renderMessage(this.message,this.markdown)}
        `}};Sn([d({type:String})],oo.prototype,"message",2);Sn([d({type:Boolean})],oo.prototype,"markdown",2);oo=Sn([$("k-info-dialog-content")],oo);z.registerContribution(Fi,{id:"info",label:"Information",buttons:[Ro],component:t=>t?f`
            <k-info-dialog-content 
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></k-info-dialog-content>
        `:f`<div>Error: No info dialog state</div>`,onButton:async(t,e,i)=>(i&&i.resolve&&i.resolve(),!0)});var pg=Object.defineProperty,fg=Object.getOwnPropertyDescriptor,An=(t,e,i,s)=>{for(var r=s>1?void 0:s?fg(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&pg(e,i,r),r};let ao=class extends Xi{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return f`
            ${this.renderMessage(this.message,this.markdown)}
        `}};An([d({type:String})],ao.prototype,"message",2);An([d({type:Boolean})],ao.prototype,"markdown",2);ao=An([$("k-confirm-dialog-content")],ao);z.registerContribution(Fi,{id:"confirm",label:"Confirm",buttons:[Ro,ud],component:t=>t?f`
            <k-confirm-dialog-content 
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></k-confirm-dialog-content>
        `:f`<div>Error: No confirm dialog state</div>`,onButton:async(t,e,i)=>(i&&(t==="ok"?i.resolve(!0):i.resolve(!1)),!0)});async function Oo(t,e=!1){return new Promise(i=>{Io.open("confirm",{message:t,markdown:e,resolve:i})})}var mg=Object.defineProperty,gg=Object.getOwnPropertyDescriptor,Gi=(t,e,i,s)=>{for(var r=s>1?void 0:s?gg(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&mg(e,i,r),r};let Qt=class extends Xi{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(t){super.firstUpdated(t),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const e=this.closest("wa-dialog");e&&(this.dialogElement=e,this.updateDialogLabel());const i=this.closest(".dialog-service-content");if(i){const s=i.parentElement?.querySelector(".dialog-service-footer");s&&(s.style.display="none")}}updated(t){super.updated(t),t.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),t.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(t,e,i){this.currentTitle=t,this.currentMessage=e,this.actions=[...i],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(t){t.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const t=this.actions.filter(i=>i.label!=="Close"),e=this.actions.filter(i=>i.label==="Close");return f`
            <div class="dialog-content">
                <wa-scroller class="dialog-scroller">
                    ${this.renderMessage(this.currentMessage,this.markdown)}
                </wa-scroller>
                
                <div class="dialog-actions">
                    <div class="dialog-actions-left">
                        ${t.map(i=>f`
                            <wa-button 
                                variant="${i.variant||"default"}"
                                ?disabled=${i.disabled}
                                @click=${()=>this.handleActionClick(i)}
                            >
                                ${i.label}
                            </wa-button>
                        `)}
                    </div>
                    <div class="dialog-actions-right">
                        ${e.map(i=>f`
                            <wa-button 
                                variant="${i.variant||"primary"}"
                                @click=${()=>{this.handleActionClick(i),this.handleClose()}}
                            >
                                ${i.label}
                            </wa-button>
                        `)}
                    </div>
                </div>
            </div>
        `}};Qt.styles=[...Xi.styles,_`
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
        `];Gi([d({type:String})],Qt.prototype,"title",2);Gi([d({type:String})],Qt.prototype,"message",2);Gi([d({type:Boolean})],Qt.prototype,"markdown",2);Gi([S()],Qt.prototype,"actions",2);Gi([S()],Qt.prototype,"currentTitle",2);Gi([S()],Qt.prototype,"currentMessage",2);Qt=Gi([$("k-navigable-info-dialog-content")],Qt);z.registerContribution(Fi,{id:"navigable-info",label:"Information",buttons:[pd],component:t=>{if(!t)return f`<div>Error: No navigable info dialog state</div>`;const e=f`
            <k-navigable-info-dialog-content 
                .title="${t.title}"
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></k-navigable-info-dialog-content>
        `;return(async()=>{const i=document.querySelector("k-navigable-info-dialog-content");i&&(await i.updateComplete,i.actions=t.actions||[],i.resolveCallback=t.resolve,t.updateDialogRef&&(t.updateDialogRef.current=(s,r,o)=>{i.updateDialog(s,r,o)}))})(),e},onButton:async(t,e,i)=>i&&t==="close"&&i.resolve?(i.resolve(),!0):!1});var bg=Object.getOwnPropertyDescriptor,wg=(t,e,i,s)=>{for(var r=s>1?void 0:s?bg(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=a(r)||r);return r};let Ua=class extends jt{render(){return f`
            <slot></slot>
        `}};Ua.styles=_`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;Ua=wg([$("k-app")],Ua);var vg=Object.defineProperty,yg=Object.getOwnPropertyDescriptor,Rs=(t,e,i,s)=>{for(var r=s>1?void 0:s?yg(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&vg(e,i,r),r};let mi=class extends jt{constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),Ue(Wt,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[i]=t.split(":");if(e===`${i}:*`)return!0;const s=e.split(":");if(s.length===2){const r=s[1];if(r==="system.editors"||r===".system.editors")return this.isEditor&&t.startsWith(`${i}:`)}return!1}loadContributions(t){const e=z.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[i]=t.split(":"),s=`${i}:*`,r=z.getContributions(s),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const l of a){const c=`${i}:${l}`,h=z.getContributions(c);o.push(...h)}}this.contributions=[...r,...o,...e]}contributionCreator(t){if("command"in t){const e=t,i=!!e.showLabel;return f`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${e.icon} label="${e.label}"></wa-icon>
                    ${i?e.label:""}
                </wa-button>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():Zt(e)}else return f`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return f`
            <div class="toolbar-items" style=${ge({"justify-content":this.position})}>
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
        `}};mi.styles=_`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;Rs([d()],mi.prototype,"position",2);Rs([d({type:Boolean,attribute:"is-editor"})],mi.prototype,"isEditor",2);Rs([d({attribute:!1})],mi.prototype,"partToolbarContent",2);Rs([d({attribute:!1})],mi.prototype,"partToolbarRenderer",2);Rs([S()],mi.prototype,"contributions",2);mi=Rs([$("k-toolbar")],mi);var xg=Object.defineProperty,kg=Object.getOwnPropertyDescriptor,Is=(t,e,i,s)=>{for(var r=s>1?void 0:s?kg(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&xg(e,i,r),r};let gi=class extends jt{constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=pi(),this.dropdownRef=pi()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),Ue(Wt,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[i]=t.split(":");if(e===`${i}:*`)return!0;const s=e.split(":");if(s.length===2){const r=s[1];if(r==="system.editors"||r===".system.editors")return this.isEditor&&t.startsWith(`${i}:`)}return!1}loadContributions(t){const e=z.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[i]=t.split(":"),s=`${i}:*`,r=z.getContributions(s),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const l of a){const c=`${i}:${l}`,h=z.getContributions(c);o.push(...h)}}this.contributions=[...r,...o,...e]}getElementFromPoint(t,e){let i=document.elementFromPoint(t,e);if(!i)return null;for(;i;){const s=i.shadowRoot;if(s){const r=s.elementFromPoint(t,e);if(r&&r!==i){i=r;continue}}break}return i}triggerClickUnderCursor(t){const e=this.getElementFromPoint(t.clientX,t.clientY);if(e){const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:t.clientX,clientY:t.clientY,screenX:t.screenX,screenY:t.screenY,button:0,buttons:0,detail:1,which:1});e.dispatchEvent(i)}}show(t,e){e&&this.triggerClickUnderCursor(e),this.position=t,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(t,e){return async()=>{this.executeCommand(t,e||{})}}renderContribution(t){if("command"in t){const e=t;return f`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(e.command,e.params)}
                    ?disabled="${e.disabled?.get()}">
                    ${e.icon?f`<wa-icon slot="icon" name=${e.icon}></wa-icon>`:""}
                    ${e.label}
                </wa-dropdown-item>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():Zt(e)}return U}render(){if(!this.isOpen)return U;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():U;return f`
            <wa-dropdown 
                ${Jt(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${Jt(this.anchorRef)}
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
        `}};gi.styles=_`
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
    `;Is([d({type:Boolean,attribute:"is-editor"})],gi.prototype,"isEditor",2);Is([d({attribute:!1})],gi.prototype,"partContextMenuRenderer",2);Is([S()],gi.prototype,"contributions",2);Is([S()],gi.prototype,"isOpen",2);Is([S()],gi.prototype,"position",2);gi=Is([$("k-contextmenu")],gi);var Cg=Object.defineProperty,Eg=Object.getOwnPropertyDescriptor,md=(t,e,i,s)=>{for(var r=s>1?void 0:s?Eg(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&Cg(e,i,r),r};let no=class extends En{constructor(){super(...arguments),this.contributions=[],this.tabGroup=pi(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(e),this.setupToolbarResizeObserver(e)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const i=t.target.closest("wa-tab-panel");i&&(this.updateToolbarFromComponent(i),requestAnimationFrame(()=>this.updateToolbarHeightVariable(i)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const i=t.target.closest("wa-tab-panel");i&&this.updateContextMenuFromComponent(i)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,i=e.closest("wa-tab");if(i){const a=i.getAttribute("panel");if(a){const l=this.getTabPanel(a);if(l){const c=l.querySelector(".tab-content");if(c&&c.firstElementChild){const h=c.firstElementChild;h instanceof pt&&bt.set(h)}}}return}const s=e.closest("wa-scroller.tab-content");if(!s)return;const r=s.closest("wa-tab-panel");if(!r)return;const o=r.querySelector(".tab-content");if(o&&o.firstElementChild){const a=o.firstElementChild;a instanceof pt&&bt.set(a)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,i=e.target.closest("wa-scroller.tab-content");if(!i)return;e.preventDefault();const s=i.closest("wa-tab-panel");s&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(s);const r=s.querySelector("k-contextmenu");r&&r.show({x:e.clientX,y:e.clientY},e)})}))}),Ue(Wt,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===ci;this.contributions.forEach(i=>{const s=this.getTabPanel(i.name);if(!s)return;const r=s.querySelector(".tab-content");if(r&&r.firstElementChild){const o=r.firstElementChild;o instanceof pt&&(o.tabContribution=i,o.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(s))})}}has(t){return this.tabGroup.value?!!this.getTabPanel(t):!1}activate(t){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(t){if(this.contributions.find(i=>i.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const i=this.getTabPanel(t.name);if(i){const s=i.querySelector(".tab-content");if(s&&s.firstElementChild){const r=s.firstElementChild;r instanceof pt&&(r.tabContribution=t,r.isEditor=this.containerId===ci)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(i),this.updateToolbarHeightVariable(i),this.setupToolbarResizeObserver(i)})}})}handleTabAuxClick(t,e){t.button===Cn.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await Oo("Unsaved changes will be lost: Do you really want to close?"))return;const i=this.getTabPanel(e);if(!i)return;const s=this.contributions.find(o=>o.name===e);if(!s)return;this.cleanupTabInstance(i);const r=this.contributions.indexOf(s);r>-1&&this.contributions.splice(r,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:i})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=z.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=this.resizeObservers.get(t);e&&(e.disconnect(),this.resizeObservers.delete(t));const i=t.querySelector(".tab-content");if(i&&i.firstElementChild){const s=i.firstElementChild;"close"in s&&typeof s.close=="function"&&s.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`):null}getTab(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`):null}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const i=e.firstElementChild;if(!(i instanceof pt)||!i.renderToolbar)return;const s=t.querySelector("k-toolbar");s&&(s.partToolbarRenderer=()=>i.renderToolbar(),s.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const i=e.firstElementChild;if(!(i instanceof pt)||!i.renderContextMenu)return;const s=t.querySelector("k-contextmenu");s&&(s.partContextMenuRenderer=()=>i.renderContextMenu(),s.requestUpdate())}updateToolbarHeightVariable(t){const e=t.querySelector(".tab-toolbar");if(!e)return;const i=e.offsetHeight;t.style.setProperty("--toolbar-height",`${i}px`)}setupToolbarResizeObserver(t){if(this.resizeObservers.has(t))return;const e=t.querySelector(".tab-toolbar");if(!e)return;const i=new ResizeObserver(()=>{this.updateToolbarHeightVariable(t)});i.observe(e),this.resizeObservers.set(t,i)}render(){const t=mt.getCurrentApp();return f`
            <wa-tab-group ${Jt(this.tabGroup)}>
                ${Ne(this.contributions.length===0,()=>f`
                        <div class="empty-state">
                            ${Ne(t,()=>f`
                                    <div class="empty-content">
                                        <h2 class="empty-title">${t.name}</h2>
                                        ${Ne(t.description,()=>f`<p class="empty-description">${t.description}</p>`)}
                                    </div>
                                `,()=>f`
                                    <wa-icon name="folder-open" class="empty-icon"></wa-icon>
                                `)}
                        </div>
                    `,()=>jc(this.contributions,e=>e.name,e=>f`
                            <wa-tab panel="${e.name}"
                                    @auxclick="${i=>this.handleTabAuxClick(i,e)}">
                                <k-icon name="${e.icon}"></k-icon>
                                ${e.label}
                                ${Ne(e.closable,()=>f`
                                    <wa-icon name="xmark" label="Close"  @click="${i=>this.closeTab(i,e.name)}"></wa-icon>
                                `)}
                            </wa-tab>
                            <wa-tab-panel name="${e.name}">
                                <k-toolbar id="toolbar:${e.editorId??e.name}" 
                                           class="tab-toolbar"
                                           ?is-editor="${this.containerId===ci}"></k-toolbar>
                                <wa-scroller class="tab-content" orientation="vertical">
                                    ${e.component?e.component(e.name):U}
                                </wa-scroller>
                                <k-contextmenu id="contextmenu:${e.name}"
                                               ?is-editor="${this.containerId===ci}"></k-contextmenu>
                            </wa-tab-panel>
                        `))}
            </wa-tab-group>
        `}};no.styles=_`
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
    `;md([S()],no.prototype,"contributions",2);no=md([$("k-tabs")],no);var $g=Object.defineProperty,Sg=Object.getOwnPropertyDescriptor,kr=(t,e,i,s)=>{for(var r=s>1?void 0:s?Sg(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&$g(e,i,r),r};let gs=class extends jt{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=t=>{if(!this.resizing)return;const i=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,s=[...this.resizing.startSizes];s[this.resizing.handleIndex]+=i,s[this.resizing.handleIndex+1]-=i;const r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,o=r*.05;if(s[this.resizing.handleIndex]>=o&&s[this.resizing.handleIndex+1]>=o){this.resizing.currentSizes=s;const a=s.map((l,c)=>{const u=`${(l/r*100).toFixed(2)}%`;return c===s.length-1?u:`${u} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=a:this.style.gridTemplateRows=a}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const t=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/t*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,i)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${i*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${i*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const i=this.orientation==="horizontal"?t.clientX:t.clientY,s=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,r=this.gridSizes.map(o=>o.endsWith("%")?parseFloat(o)/100*s:(o.endsWith("px"),parseFloat(o)));this.resizing={handleIndex:e,startPos:i,startSizes:r},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return U;const t=this.gridSizes.flatMap((e,i)=>i===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",f`
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
            
            ${this.gridChildren.map((e,i)=>{if(i<this.gridChildren.length-1){const s=this.orientation==="horizontal"?`${i*2+2}`:"1",r=this.orientation==="vertical"?`${i*2+2}`:"1";return f`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${s};
                                grid-row: ${r};
                            "
                            @mousedown=${o=>this.startResize(o,i)}
                        ></div>
                    `}return U})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};kr([d()],gs.prototype,"orientation",2);kr([d()],gs.prototype,"sizes",2);kr([S()],gs.prototype,"gridSizes",2);kr([S()],gs.prototype,"gridChildren",2);gs=kr([$("k-resizable-grid")],gs);var ds=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var _n=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var Ag=_`
  :host {
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
`;function R(t,e){const i={waitUntilFirstUpdate:!1,...e};return(s,r)=>{const{update:o}=s,a=Array.isArray(t)?t:[t];s.update=function(l){a.forEach(c=>{const h=c;if(l.has(h)){const u=l.get(h),p=this[h];u!==p&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,p)}}),o.call(this,l)}}}var _g=_`
  :host {
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
`,Wr,N=class extends ui{constructor(){super(),Vf(this,Wr,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,i)=>{if(this.internals?.states)try{i?this.internals.states.add(e):this.internals.states.delete(e)}catch(s){if(String(s).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw s}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,i]of t.elementProperties)i.default==="inherit"&&i.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${i.initial}`,!0)}static get styles(){const t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[_g,...t]}attributeChangedCallback(t,e,i){qf(this,Wr)||(this.constructor.elementProperties.forEach((s,r)=>{s.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Hf(this,Wr,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){const i=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});i.error=e,this.dispatchEvent(i)}throw e}}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};Wr=new WeakMap;n([d()],N.prototype,"dir",2);n([d()],N.prototype,"lang",2);n([d({type:Boolean,reflect:!0,attribute:"did-ssr"})],N.prototype,"didSSR",2);var Lt=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.play=!this.play)}handleLoad(){const t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new _n),this.isLoaded=!0)}handleError(){this.dispatchEvent(new ds)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){const e=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`;return f`
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
                    style=${ge({"margin-inline-start":"3px"})}
                  ></wa-icon>
                </slot>
                <slot name="pause-icon">
                  <wa-icon name="pause" library="system" variant="solid" class="default"></wa-icon>
                </slot>
              </div>
            `:""}
      </div>
    `}};Lt.css=Ag;n([A(".animated")],Lt.prototype,"animatedImage",2);n([S()],Lt.prototype,"frozenFrame",2);n([S()],Lt.prototype,"isLoaded",2);n([d()],Lt.prototype,"src",2);n([d()],Lt.prototype,"alt",2);n([d({type:Boolean,reflect:!0})],Lt.prototype,"play",2);n([R("play",{waitUntilFirstUpdate:!0})],Lt.prototype,"handlePlayChange",1);n([R("src")],Lt.prototype,"handleSrcChange",1);Lt=n([$("wa-animated-image")],Lt);var Tg=_`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

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
    overflow: visible;
    width: auto;

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

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* Animations */
  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin-pulse;
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  /* Keyframes */
  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']) {
      animation: none !important;
      transition: none !important;
    }
  }
  @keyframes beat {
    0%,
    90% {
      transform: scale(1);
    }
    45% {
      transform: scale(var(--beat-scale, 1.25));
    }
  }

  @keyframes fade {
    50% {
      opacity: var(--fade-opacity, 0.4);
    }
  }

  @keyframes beat-fade {
    0%,
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.125));
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(var(--bounce-start-scale-x, 1.1), var(--bounce-start-scale-y, 0.9)) translateY(0);
    }
    30% {
      transform: scale(var(--bounce-jump-scale-x, 0.9), var(--bounce-jump-scale-y, 1.1))
        translateY(var(--bounce-height, -0.5em));
    }
    50% {
      transform: scale(var(--bounce-land-scale-x, 1.05), var(--bounce-land-scale-y, 0.95)) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(var(--bounce-rebound, -0.125em));
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes flip {
    50% {
      transform: rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -180deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(-15deg);
    }
    4% {
      transform: rotate(15deg);
    }
    8%,
    24% {
      transform: rotate(-18deg);
    }
    12%,
    28% {
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
    40%,
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-pulse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;var Xs=Symbol(),Dr=Symbol(),ha,ua=new Map,Be=class extends N{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(t,e)=>{let i;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=f`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(s,this),this.svg}try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Xs:Dr}catch{return Dr}try{const s=document.createElement("div");s.innerHTML=await i.text();const r=s.firstElementChild;if(r?.tagName?.toLowerCase()!=="svg")return Xs;ha||(ha=new DOMParser);const a=ha.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Xs}catch{return Xs}}}connectedCallback(){super.connectedCallback(),Vu(this)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Hu(this)}getIconSource(){const t=na(this.library),e=this.family||Xu();return this.name&&t?{url:t.resolver(this.name,e,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:e}=this.getIconSource(),i=e?na(this.library):void 0;if(!t){this.svg=null;return}let s=ua.get(t);s||(s=this.resolveIcon(t,i),ua.set(t,s));const r=await s;if(r===Dr&&ua.delete(t),t===this.getIconSource().url){if(ku(r)){this.svg=r;return}switch(r){case Dr:case Xs:this.svg=null,this.dispatchEvent(new ds);break;default:this.svg=r.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new _n)}}}updated(t){super.updated(t);const e=na(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);const i=this.shadowRoot?.querySelector("svg");i&&e?.mutator?.(i,this)}render(){return this.hasUpdated?this.svg:f`<svg part="svg" width="16" height="16"></svg>`}};Be.css=Tg;n([S()],Be.prototype,"svg",2);n([d({reflect:!0})],Be.prototype,"name",2);n([d({reflect:!0})],Be.prototype,"family",2);n([d({reflect:!0})],Be.prototype,"variant",2);n([d({attribute:"auto-width",type:Boolean,reflect:!0})],Be.prototype,"autoWidth",2);n([d({attribute:"swap-opacity",type:Boolean,reflect:!0})],Be.prototype,"swapOpacity",2);n([d()],Be.prototype,"src",2);n([d()],Be.prototype,"label",2);n([d({reflect:!0})],Be.prototype,"library",2);n([d({type:Number,reflect:!0})],Be.prototype,"rotate",2);n([d({type:String,reflect:!0})],Be.prototype,"flip",2);n([d({type:String,reflect:!0})],Be.prototype,"animation",2);n([R("label")],Be.prototype,"handleLabelChange",1);n([R(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],Be.prototype,"setIcon",1);Be=n([$("wa-icon")],Be);var yl=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}};var Lg=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}};var Rg=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}};var Ig=_`
  :host {
    display: contents;
  }
`;var Le=class extends N{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Lg)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Rg)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const t=Uc[this.easing]??this.easing,e=this.keyframes??Ff[this.name],s=(await this.defaultSlot).assignedElements()[0];return!s||!e?!1:(this.destroyAnimation(),this.animation=s.animate(e,{delay:this.delay,direction:this.direction,duration:this.duration,easing:t,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new yl)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new yl)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return f` <slot @slotchange=${this.handleSlotChange}></slot> `}};Le.css=Ig;n([zh("slot")],Le.prototype,"defaultSlot",2);n([d()],Le.prototype,"name",2);n([d({type:Boolean,reflect:!0})],Le.prototype,"play",2);n([d({type:Number})],Le.prototype,"delay",2);n([d()],Le.prototype,"direction",2);n([d({type:Number})],Le.prototype,"duration",2);n([d()],Le.prototype,"easing",2);n([d({attribute:"end-delay",type:Number})],Le.prototype,"endDelay",2);n([d()],Le.prototype,"fill",2);n([d({type:Number})],Le.prototype,"iterations",2);n([d({attribute:"iteration-start",type:Number})],Le.prototype,"iterationStart",2);n([d({attribute:!1})],Le.prototype,"keyframes",2);n([d({attribute:"playback-rate",type:Number})],Le.prototype,"playbackRate",2);n([R(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Le.prototype,"handleAnimationChange",1);n([R("play")],Le.prototype,"handlePlayChange",1);n([R("playbackRate")],Le.prototype,"handlePlaybackRateChange",1);Le=n([$("wa-animation")],Le);var Og=_`
  :host {
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
`;var Bt=class extends N{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new ds)}render(){const t=f`
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
      `,f` ${this.image&&!this.hasError?t:e} `}};Bt.css=Og;n([S()],Bt.prototype,"hasError",2);n([d()],Bt.prototype,"image",2);n([d()],Bt.prototype,"label",2);n([d()],Bt.prototype,"initials",2);n([d()],Bt.prototype,"loading",2);n([d({reflect:!0})],Bt.prototype,"shape",2);n([R("image")],Bt.prototype,"handleImageChange",1);Bt=n([$("wa-avatar")],Bt);var Do=_`
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
`;var Dg=_`
  :host {
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
`;var Bi=class extends N{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return f` <slot part="base" role="status"></slot>`}};Bi.css=[Do,Dg];n([d({reflect:!0})],Bi.prototype,"variant",2);n([d({reflect:!0})],Bi.prototype,"appearance",2);n([d({type:Boolean,reflect:!0})],Bi.prototype,"pill",2);n([d({reflect:!0})],Bi.prototype,"attention",2);Bi=n([$("wa-badge")],Bi);var zg=_`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var bs=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="wa-breadcrumb-item");t.forEach((e,i)=>{const s=e.querySelector('[slot="separator"]');s===null?e.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),f`
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
    `}};bs.css=zg;n([A("slot")],bs.prototype,"defaultSlot",2);n([A('slot[name="separator"]')],bs.prototype,"separatorSlot",2);n([d()],bs.prototype,"label",2);bs=n([$("wa-breadcrumb")],bs);var zo=()=>({checkValidity(t){const e=t.input,i={message:"",isValid:!0,invalidKeys:[]};if(!e)return i;let s=!0;if("checkValidity"in e&&(s=e.checkValidity()),s)return i;if(i.isValid=!1,"validationMessage"in e&&(i.message=e.validationMessage),!("validity"in e))return i.invalidKeys.push("customError"),i;for(const r in e.validity){if(r==="valid")continue;const o=r;e.validity[o]&&i.invalidKeys.push(o)}return i}});var Tn=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var Pg=()=>({observedAttributes:["custom-error"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),me=class extends N{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Tn))},this.handleInteraction=t=>{const e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[Pg()]}static get observedAttributes(){const t=new Set(super.observedAttributes||[]);for(const e of this.validators)if(e.observedAttributes)for(const i of e.observedAttributes)t.add(i);return[...t]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")){const e=this.value;if(Array.isArray(e)){if(this.name){const i=new FormData;for(const s of e)i.append(this.name,s);this.setValue(i,i)}}else this.setValue(e,e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(t){t?this.setAttribute("form",t):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){const e=t[0],i=t[1];let s=t[2];s||(s=this.validationTarget),this.internals.setValidity(e,i,s||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const t=!!this.required,e=this.internals.validity.valid,i=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&i),this.customStates.set("user-valid",e&&i)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...t){const[e,i]=t;this.internals.setFormValue(e,i)}get allValidators(){const t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const t=this.allValidators;if(!t?.length)return;const e={customError:!!this.customError},i=this.validationTarget||this.input||void 0;let s="";for(const r of t){const{isValid:o,message:a,invalidKeys:l}=r.checkValidity(this);o||(s||(s=a),l?.length>=0&&l.forEach(c=>e[c]=!0))}s||(s=this.validationMessage),this.setValidity(e,s,i)}};me.formAssociated=!0;n([d({reflect:!0})],me.prototype,"name",2);n([d({type:Boolean})],me.prototype,"disabled",2);n([d({state:!0,attribute:!1})],me.prototype,"valueHasChanged",2);n([d({state:!0,attribute:!1})],me.prototype,"hasInteracted",2);n([d({attribute:"custom-error",reflect:!0})],me.prototype,"customError",2);n([d({attribute:!1,state:!0,type:Object})],me.prototype,"validity",1);var Mg=_`
  @layer wa-component {
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
    transition-property: background, border, box-shadow, color, opacity;
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
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
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
`;var xt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var Qe=_`
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
`;const B=As(class extends _s{constructor(t){if(super(t),t.type!==At.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const r=!!e[s];r===this.st.has(s)||this.nt?.has(s)||(r?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return it}});const q=t=>t??U;const gd=Symbol.for(""),Ng=t=>{if(t?.r===gd)return t?._$litStatic$},xl=(t,...e)=>({_$litStatic$:e.reduce((i,s,r)=>i+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[r+1],t[0]),r:gd}),kl=new Map,Fg=t=>(e,...i)=>{const s=i.length;let r,o;const a=[],l=[];let c,h=0,u=!1;for(;h<s;){for(c=e[h];h<s&&(o=i[h],(r=Ng(o))!==void 0);)c+=r+e[++h],u=!0;h!==s&&l.push(o),a.push(c),h++}if(h===s&&a.push(e[s]),u){const p=a.join("$$lit$$");(e=kl.get(p))===void 0&&(a.raw=a,kl.set(p,e=a)),i=l}return t(e,...i)},pa=Fg(f);var ae=class extends me{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new xt(this,"[default]","start","end"),this.localize=new ie(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,zo()]}constructLightDOMButton(){const t=document.createElement("button");for(const e of this.attributes)e.name!=="style"&&t.setAttribute(e.name,e.value);return t.type=this.type,t.style.position="absolute !important",t.style.width="0 !important",t.style.height="0 !important",t.style.clipPath="inset(50%) !important",t.style.overflow="hidden !important",t.style.whiteSpace="nowrap !important",this.name&&(t.name=this.name),t.value=this.value||"",t}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;const i=this.constructLightDOMButton();this.parentElement?.append(i),i.click(),i.remove()}handleInvalid(){this.dispatchEvent(new Tn)}handleLabelSlotChange(){const t=this.labelSlot.assignedNodes({flatten:!0});let e=!1,i=!1,s=!1,r=!1;[...t].forEach(o=>{if(o.nodeType===Node.ELEMENT_NODE){const a=o;a.localName==="wa-icon"?(i=!0,e||(e=a.label!==void 0)):r=!0}else o.nodeType===Node.TEXT_NODE&&(o.textContent?.trim()||"").length>0&&(s=!0)}),this.isIconButton=i&&!s&&!r,this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=this.isLink(),e=t?xl`a`:xl`button`;return pa`
      <${e}
        part="base"
        class=${B({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${q(t?void 0:this.disabled)}
        type=${q(t?void 0:this.type)}
        title=${this.title}
        name=${q(t?void 0:this.name)}
        value=${q(t?void 0:this.value)}
        href=${q(t?this.href:void 0)}
        target=${q(t?this.target:void 0)}
        download=${q(t?this.download:void 0)}
        rel=${q(t&&this.rel?this.rel:void 0)}
        role=${q(t?void 0:"button")}
        aria-disabled=${q(t&&this.disabled?"true":void 0)}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?pa`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?pa`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};ae.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0};ae.css=[Mg,Do,Qe];n([A(".button")],ae.prototype,"button",2);n([A("slot:not([name])")],ae.prototype,"labelSlot",2);n([S()],ae.prototype,"invalid",2);n([S()],ae.prototype,"isIconButton",2);n([d()],ae.prototype,"title",2);n([d({reflect:!0})],ae.prototype,"variant",2);n([d({reflect:!0})],ae.prototype,"appearance",2);n([d({reflect:!0})],ae.prototype,"size",2);n([d({attribute:"with-caret",type:Boolean,reflect:!0})],ae.prototype,"withCaret",2);n([d({type:Boolean})],ae.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],ae.prototype,"loading",2);n([d({type:Boolean,reflect:!0})],ae.prototype,"pill",2);n([d()],ae.prototype,"type",2);n([d({reflect:!0})],ae.prototype,"name",2);n([d({reflect:!0})],ae.prototype,"value",2);n([d({reflect:!0})],ae.prototype,"href",2);n([d()],ae.prototype,"target",2);n([d()],ae.prototype,"rel",2);n([d()],ae.prototype,"download",2);n([d({attribute:"formaction"})],ae.prototype,"formAction",2);n([d({attribute:"formenctype"})],ae.prototype,"formEnctype",2);n([d({attribute:"formmethod"})],ae.prototype,"formMethod",2);n([d({attribute:"formnovalidate",type:Boolean})],ae.prototype,"formNoValidate",2);n([d({attribute:"formtarget"})],ae.prototype,"formTarget",2);n([R("disabled",{waitUntilFirstUpdate:!0})],ae.prototype,"handleDisabledChange",1);ae=n([$("wa-button")],ae);var Ug=_`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
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
`;var Ba=class extends N{constructor(){super(...arguments),this.localize=new ie(this)}render(){return f`
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
    `}};Ba.css=Ug;Ba=n([$("wa-spinner")],Ba);var Bg=_`
  :host {
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
`;var bi=class extends N{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(t){super.updated(t),t.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(t){Gs(t.target)?.classList.add("button-focus")}handleBlur(t){Gs(t.target)?.classList.remove("button-focus")}handleMouseOver(t){Gs(t.target)?.classList.add("button-hover")}handleMouseOut(t){Gs(t.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,t.forEach(e=>{const i=t.indexOf(e),s=Gs(e);s&&(s.appearance==="outlined"&&(this.hasOutlined=!0),s.classList.add("wa-button-group__button"),s.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),s.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),s.classList.toggle("wa-button-group__button-first",i===0),s.classList.toggle("wa-button-group__button-inner",i>0&&i<t.length-1),s.classList.toggle("wa-button-group__button-last",i===t.length-1),s.classList.toggle("wa-button-group__button-radio",s.tagName.toLowerCase()==="wa-radio-button"))})}render(){return f`
      <slot
        part="base"
        class=${B({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};bi.css=[Bg];n([A("slot")],bi.prototype,"defaultSlot",2);n([S()],bi.prototype,"disableRole",2);n([S()],bi.prototype,"hasOutlined",2);n([d()],bi.prototype,"label",2);n([d({reflect:!0})],bi.prototype,"orientation",2);bi=n([$("wa-button-group")],bi);function Gs(t){const e="wa-button, wa-radio-button";return t.closest(e)??t.querySelector(e)}var qg=_`
  :host {
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
`;var ws=class extends N{constructor(){super(...arguments),this.variant="brand",this.size="medium"}render(){return f`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};ws.css=[qg,Do,Qe];n([d({reflect:!0})],ws.prototype,"variant",2);n([d({reflect:!0})],ws.prototype,"appearance",2);n([d({reflect:!0})],ws.prototype,"size",2);ws=n([$("wa-callout")],ws);var Vg=_`
  :host {
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
  :host([appearance='plain']) {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  :host([appearance='outlined']) {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='accent']) {
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
`;var wi=class extends N{constructor(){super(...arguments),this.hasSlotController=new xt(this,"footer","header","media","header-actions","footer-actions","actions"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.orientation="vertical"}updated(){!this.withHeader&&this.hasSlotController.test("header")&&(this.withHeader=!0),!this.withMedia&&this.hasSlotController.test("media")&&(this.withMedia=!0),!this.withFooter&&this.hasSlotController.test("footer")&&(this.withFooter=!0)}render(){return this.orientation==="horizontal"?f`
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
    `}};wi.css=[Qe,Vg];n([d({reflect:!0})],wi.prototype,"appearance",2);n([d({attribute:"with-header",type:Boolean,reflect:!0})],wi.prototype,"withHeader",2);n([d({attribute:"with-media",type:Boolean,reflect:!0})],wi.prototype,"withMedia",2);n([d({attribute:"with-footer",type:Boolean,reflect:!0})],wi.prototype,"withFooter",2);n([d({reflect:!0})],wi.prototype,"orientation",2);wi=n([$("wa-card")],wi);var Hg=class extends Event{constructor(t){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};const Wg="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let jg=(t=21)=>{let e="",i=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=Wg[i[t]&63];return e};function Z(t,e,i){const s=r=>Object.is(r,-0)?0:r;return t<e?s(e):t>i?s(i):s(t)}function Po(t=""){return`${t}${jg()}`}var Xg=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};var Gg=_`
  :host {
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
`;function Rt(t,e){return new Promise(i=>{function s(r){r.target===t&&(t.removeEventListener(e,s),i())}t.addEventListener(e,s)})}async function lo(t,e,i){return t.animate(e,i).finished.catch(()=>{})}function ue(t,e){return new Promise(i=>{const s=new AbortController,{signal:r}=s;if(t.classList.contains(e))return;t.classList.remove(e),t.classList.add(e);let o=()=>{t.classList.remove(e),i(),s.abort()};t.addEventListener("animationend",o,{once:!0,signal:r}),t.addEventListener("animationcancel",o,{once:!0,signal:r})})}function co(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t)||0:t.indexOf("s")>-1?(parseFloat(t)||0)*1e3:parseFloat(t)||0}function Cl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function*Kg(t,e){if(t!==void 0){let i=0;for(const s of t)yield e(s,i++)}}function*Yg(t,e,i=1){const s=e===void 0?0:t;e??=t;for(let r=s;i>0?r<e:e<r;r+=i)yield r}(()=>{const t=(s,r)=>{let o=0;return function(...a){window.clearTimeout(o),o=window.setTimeout(()=>{s.call(this,...a)},r)}},e=(s,r,o)=>{const a=s[r];s[r]=function(...l){a.call(this,...l),o.call(this,a,...l)}};if(!("onscrollend"in window)){const s=new Set,r=new WeakMap,o=l=>{s.add(l.pointerId)},a=l=>{s.delete(l.pointerId)};document.addEventListener("pointerdown",o),document.addEventListener("pointerup",a),e(EventTarget.prototype,"addEventListener",function(l,c){if(c!=="scroll")return;const h=t(()=>{s.size?h():this.dispatchEvent(new Event("scrollend"))},100);l.call(this,"scroll",h,{passive:!0}),r.set(this,h)}),e(EventTarget.prototype,"removeEventListener",function(l,c){if(c!=="scroll")return;const h=r.get(this);h&&l.call(this,"scroll",h,{passive:!0})})}})();var pe=class extends N{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Xg(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new ie(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const s=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==s||i!==r)&&(t.scrollTo({left:s,top:r,behavior:Cl()?"auto":"smooth"}),await Rt(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(i=>[...i.addedNodes,...i.removedNodes].some(s=>this.isCarouselItem(s)&&!s.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:s}=this,r=s?t/i:(t-e)/i+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),i=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+i*i)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,i=this.localize.dir()==="rtl",s=e.closest('[part~="pagination-item"]')!==null,r=t.key==="ArrowDown"||!i&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft",o=t.key==="ArrowUp"||!i&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight";t.preventDefault(),o&&this.previous(),r&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{const a=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');a&&a.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const l of e){const c=l.target;c.toggleAttribute("inert",!l.isIntersecting),c.classList.toggle("--in-view",l.isIntersecting),c.setAttribute("aria-hidden",l.isIntersecting?"false":"true")}const i=e.find(l=>l.isIntersecting);if(!i)return;const s=this.getSlides({excludeClones:!1}),r=this.getSlides().length,o=s.indexOf(i.target),a=this.loop?o-this.slidesPerPage:o;if(i&&(this.activeSlide=(Math.ceil(a/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone"))){const l=Number(i.target.getAttribute("data-clone"));this.goToSlide(l,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),s=t.slice(0,e);i.reverse().forEach((r,o)=>{const a=r.cloneNode(!0);a.setAttribute("data-clone",String(t.length-o-1)),this.prepend(a)}),s.forEach((r,o)=>{const a=r.cloneNode(!0);a.setAttribute("data-clone",String(o)),this.append(a)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,i)=>{e.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new Hg({index:this.activeSlide,slide:t[this.activeSlide]}))}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((i,s)=>{(s+e)%e===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:i,loop:s}=this,r=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!r.length)return;const a=s?(t+r.length)%r.length:Z(t,0,r.length-i);this.activeSlide=a;const l=this.localize.dir()==="rtl",c=Z(t+(s?i:0)+(l?i-1:0),0,o.length-1),h=o[c];this.scrollToSlide(h,Cl()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,s=i.getBoundingClientRect(),r=t.getBoundingClientRect(),o=r.left-s.left,a=r.top-s.top;o||a?(this.pendingSlideChange=!0,i.scrollTo({left:o+i.scrollLeft,top:a+i.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this;let i=0,s=0,r=!1,o=!1;this.hasUpdated&&(i=this.getPageCount(),s=this.getCurrentPage(),r=this.canScrollPrev(),o=this.canScrollNext());const a=this.localize.dir()==="rtl";return f`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${B({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging})}"
          style=${ge({"--slides-per-page":this.slidesPerPage})}
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
                  class="${B({"navigation-button":!0,"navigation-button-previous":!0,"navigation-button-disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <wa-icon library="system" name="${a?"chevron-right":"chevron-left"}"></wa-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button-next"
                  class=${B({"navigation-button":!0,"navigation-button-next":!0,"navigation-button-disabled":!o})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <wa-icon library="system" name="${a?"chevron-left":"chevron-right"}"></wa-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?f`
              <div part="pagination" role="tablist" class="pagination" aria-controls="scroll-container">
                ${Kg(Yg(i),l=>{const c=l===s;return f`
                    <button
                      part="pagination-item ${c?"pagination-item-active":""}"
                      class="${B({"pagination-item":!0,"pagination-item-active":c})}"
                      role="tab"
                      aria-selected="${c?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,i)}"
                      tabindex=${c?"0":"-1"}
                      @click=${()=>this.goToSlide(l*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:f``}
      </div>
    `}};pe.css=Gg;n([d({type:Boolean,reflect:!0})],pe.prototype,"loop",2);n([d({type:Number,reflect:!0})],pe.prototype,"slides",2);n([d({type:Number,reflect:!0})],pe.prototype,"currentSlide",2);n([d({type:Boolean,reflect:!0})],pe.prototype,"navigation",2);n([d({type:Boolean,reflect:!0})],pe.prototype,"pagination",2);n([d({type:Boolean,reflect:!0})],pe.prototype,"autoplay",2);n([d({type:Number,attribute:"autoplay-interval"})],pe.prototype,"autoplayInterval",2);n([d({type:Number,attribute:"slides-per-page"})],pe.prototype,"slidesPerPage",2);n([d({type:Number,attribute:"slides-per-move"})],pe.prototype,"slidesPerMove",2);n([d()],pe.prototype,"orientation",2);n([d({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],pe.prototype,"mouseDragging",2);n([A(".slides")],pe.prototype,"scrollContainer",2);n([A(".pagination")],pe.prototype,"paginationContainer",2);n([S()],pe.prototype,"activeSlide",2);n([S()],pe.prototype,"scrolling",2);n([S()],pe.prototype,"dragging",2);n([Co({passive:!0})],pe.prototype,"handleScroll",1);n([R("loop",{waitUntilFirstUpdate:!0}),R("slidesPerPage",{waitUntilFirstUpdate:!0})],pe.prototype,"initializeSlides",1);n([R("activeSlide")],pe.prototype,"handleSlideChange",1);n([R("slidesPerMove")],pe.prototype,"updateSlidesSnap",1);n([R("autoplay")],pe.prototype,"handleAutoplayChange",1);pe=n([$("wa-carousel")],pe);var Mo=(t={})=>{let{validationElement:e,validationProperty:i}=t;e||(e=Object.assign(document.createElement("input"),{required:!0})),i||(i="value");const s={observedAttributes:["required"],message:e.validationMessage,checkValidity(r){const o={message:"",isValid:!0,invalidKeys:[]};return(r.required??r.hasAttribute("required"))&&!r[i]&&(o.message=typeof s.message=="function"?s.message(r):s.message||"",o.isValid=!1,o.invalidKeys.push("valueMissing")),o}};return s};var ri=_`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
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

    &:not(.has-slotted, .has-hint) {
      display: none;
    }
  }
`;var Zg=_`
  :host {
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
`;const vs=As(class extends _s{constructor(t){if(super(t),t.type!==At.PROPERTY&&t.type!==At.ATTRIBUTE&&t.type!==At.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Oc(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===it||e===U)return e;const i=t.element,s=t.name;if(t.type===At.PROPERTY){if(e===i[s])return it}else if(t.type===At.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return it}else if(t.type===At.ATTRIBUTE&&i.getAttribute(s)===e+"")return it;return Dc(t),e}});var Re=class extends me{constructor(){super(...arguments),this.hasSlotController=new xt(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint=""}static get validators(){const t=[Mo({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...t]}get value(){const t=this._value||"on";return this.checked?t:null}set value(t){this._value=t}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(t){super.willUpdate(t),t.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(t.has("value")||t.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){const t=this.hasSlotController.test("hint"),e=this.hint?!0:!!t,i=!this.checked&&this.indeterminate,s=i?"indeterminate":"check",r=i?"indeterminate":"check";return f`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${q(this._value)}
            .indeterminate=${vs(this.indeterminate)}
            .checked=${vs(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${r}-icon icon" library="system" name=${s}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${e?"false":"true"}
        class="${B({"has-slotted":e})}"
      >
        ${this.hint}
      </slot>
    `}};Re.css=[ri,Qe,Zg];Re.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0};n([A('input[type="checkbox"]')],Re.prototype,"input",2);n([d()],Re.prototype,"title",2);n([d({reflect:!0})],Re.prototype,"name",2);n([d({reflect:!0})],Re.prototype,"value",1);n([d({reflect:!0})],Re.prototype,"size",2);n([d({type:Boolean})],Re.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],Re.prototype,"indeterminate",2);n([d({type:Boolean,attribute:!1})],Re.prototype,"checked",2);n([d({type:Boolean,reflect:!0,attribute:"checked"})],Re.prototype,"defaultChecked",2);n([d({type:Boolean,reflect:!0})],Re.prototype,"required",2);n([d()],Re.prototype,"hint",2);n([R("defaultChecked")],Re.prototype,"handleDefaultCheckedChange",1);n([R(["checked","indeterminate"])],Re.prototype,"handleStateChange",1);n([R("disabled")],Re.prototype,"handleDisabledChange",1);Re=n([$("wa-checkbox")],Re);var Jg=_`
  :host {
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
`;function nr(t,e){function i(r){const o=t.getBoundingClientRect(),a=t.ownerDocument.defaultView,l=o.left+a.pageXOffset,c=o.top+a.pageYOffset,h=r.pageX-l,u=r.pageY-c;e?.onMove&&e.onMove(h,u)}function s(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",s),e?.onStop&&e.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",s),e?.initialEvent instanceof PointerEvent&&i(e.initialEvent)}var fa=typeof window<"u"&&"ontouchstart"in window,zr=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=i=>{const s="touches"in i?i.touches[0].clientX:i.clientX,r="touches"in i?i.touches[0].clientY:i.clientY;this.isDragging||!fa&&i.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(s,r))},this.handleDragStop=i=>{const s="changedTouches"in i?i.changedTouches[0].clientX:i.clientX,r="changedTouches"in i?i.changedTouches[0].clientY:i.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(s,r)},this.handleDragMove=i=>{const s="touches"in i?i.touches[0].clientX:i.clientX,r="touches"in i?i.touches[0].clientY:i.clientY;window.getSelection()?.removeAllRanges(),this.options.move(s,r)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),fa&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),fa&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(t!==void 0?t:!this.isActive)?this.start():this.stop()}};var bd=_`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
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
`;function Fe(t,e){Qg(t)&&(t="100%");const i=e0(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Pr(t){return Math.min(1,Math.max(0,t))}function Qg(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function e0(t){return typeof t=="string"&&t.indexOf("%")!==-1}function wd(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Mr(t){return Number(t)<=1?`${Number(t)*100}%`:t}function zi(t){return t.length===1?"0"+t:String(t)}function t0(t,e,i){return{r:Fe(t,255)*255,g:Fe(e,255)*255,b:Fe(i,255)*255}}function El(t,e,i){t=Fe(t,255),e=Fe(e,255),i=Fe(i,255);const s=Math.max(t,e,i),r=Math.min(t,e,i);let o=0,a=0;const l=(s+r)/2;if(s===r)a=0,o=0;else{const c=s-r;switch(a=l>.5?c/(2-s-r):c/(s+r),s){case t:o=(e-i)/c+(e<i?6:0);break;case e:o=(i-t)/c+2;break;case i:o=(t-e)/c+4;break}o/=6}return{h:o,s:a,l}}function ma(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*(6*i):i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function i0(t,e,i){let s,r,o;if(t=Fe(t,360),e=Fe(e,100),i=Fe(i,100),e===0)r=i,o=i,s=i;else{const a=i<.5?i*(1+e):i+e-i*e,l=2*i-a;s=ma(l,a,t+1/3),r=ma(l,a,t),o=ma(l,a,t-1/3)}return{r:s*255,g:r*255,b:o*255}}function $l(t,e,i){t=Fe(t,255),e=Fe(e,255),i=Fe(i,255);const s=Math.max(t,e,i),r=Math.min(t,e,i);let o=0;const a=s,l=s-r,c=s===0?0:l/s;if(s===r)o=0;else{switch(s){case t:o=(e-i)/l+(e<i?6:0);break;case e:o=(i-t)/l+2;break;case i:o=(t-e)/l+4;break}o/=6}return{h:o,s:c,v:a}}function s0(t,e,i){t=Fe(t,360)*6,e=Fe(e,100),i=Fe(i,100);const s=Math.floor(t),r=t-s,o=i*(1-e),a=i*(1-r*e),l=i*(1-(1-r)*e),c=s%6,h=[i,a,o,o,l,i][c],u=[l,i,i,a,o,o][c],p=[o,o,l,i,i,a][c];return{r:h*255,g:u*255,b:p*255}}function Sl(t,e,i,s){const r=[zi(Math.round(t).toString(16)),zi(Math.round(e).toString(16)),zi(Math.round(i).toString(16))];return s&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function r0(t,e,i,s,r){const o=[zi(Math.round(t).toString(16)),zi(Math.round(e).toString(16)),zi(Math.round(i).toString(16)),zi(a0(s))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function o0(t,e,i,s){const r=t/100,o=e/100,a=i/100,l=s/100,c=255*(1-r)*(1-l),h=255*(1-o)*(1-l),u=255*(1-a)*(1-l);return{r:c,g:h,b:u}}function Al(t,e,i){let s=1-t/255,r=1-e/255,o=1-i/255,a=Math.min(s,r,o);return a===1?(s=0,r=0,o=0):(s=(s-a)/(1-a)*100,r=(r-a)/(1-a)*100,o=(o-a)/(1-a)*100),a*=100,{c:Math.round(s),m:Math.round(r),y:Math.round(o),k:Math.round(a)}}function a0(t){return Math.round(parseFloat(t)*255).toString(16)}function _l(t){return ut(t)/255}function ut(t){return parseInt(t,16)}function n0(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const qa={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function l0(t){let e={r:0,g:0,b:0},i=1,s=null,r=null,o=null,a=!1,l=!1;return typeof t=="string"&&(t=h0(t)),typeof t=="object"&&(dt(t.r)&&dt(t.g)&&dt(t.b)?(e=t0(t.r,t.g,t.b),a=!0,l=String(t.r).substr(-1)==="%"?"prgb":"rgb"):dt(t.h)&&dt(t.s)&&dt(t.v)?(s=Mr(t.s),r=Mr(t.v),e=s0(t.h,s,r),a=!0,l="hsv"):dt(t.h)&&dt(t.s)&&dt(t.l)?(s=Mr(t.s),o=Mr(t.l),e=i0(t.h,s,o),a=!0,l="hsl"):dt(t.c)&&dt(t.m)&&dt(t.y)&&dt(t.k)&&(e=o0(t.c,t.m,t.y,t.k),a=!0,l="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=wd(i),{ok:a,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}const c0="[-\\+]?\\d+%?",d0="[-\\+]?\\d*\\.\\d+%?",di="(?:"+d0+")|(?:"+c0+")",ga="[\\s|\\(]+("+di+")[,|\\s]+("+di+")[,|\\s]+("+di+")\\s*\\)?",Nr="[\\s|\\(]+("+di+")[,|\\s]+("+di+")[,|\\s]+("+di+")[,|\\s]+("+di+")\\s*\\)?",kt={CSS_UNIT:new RegExp(di),rgb:new RegExp("rgb"+ga),rgba:new RegExp("rgba"+Nr),hsl:new RegExp("hsl"+ga),hsla:new RegExp("hsla"+Nr),hsv:new RegExp("hsv"+ga),hsva:new RegExp("hsva"+Nr),cmyk:new RegExp("cmyk"+Nr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function h0(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(qa[t])t=qa[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=kt.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=kt.rgba.exec(t),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=kt.hsl.exec(t),i?{h:i[1],s:i[2],l:i[3]}:(i=kt.hsla.exec(t),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=kt.hsv.exec(t),i?{h:i[1],s:i[2],v:i[3]}:(i=kt.hsva.exec(t),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=kt.cmyk.exec(t),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=kt.hex8.exec(t),i?{r:ut(i[1]),g:ut(i[2]),b:ut(i[3]),a:_l(i[4]),format:e?"name":"hex8"}:(i=kt.hex6.exec(t),i?{r:ut(i[1]),g:ut(i[2]),b:ut(i[3]),format:e?"name":"hex"}:(i=kt.hex4.exec(t),i?{r:ut(i[1]+i[1]),g:ut(i[2]+i[2]),b:ut(i[3]+i[3]),a:_l(i[4]+i[4]),format:e?"name":"hex8"}:(i=kt.hex3.exec(t),i?{r:ut(i[1]+i[1]),g:ut(i[2]+i[2]),b:ut(i[3]+i[3]),format:e?"name":"hex"}:!1))))))))))}function dt(t){return typeof t=="number"?!Number.isNaN(t):kt.CSS_UNIT.test(t)}class ye{constructor(e="",i={}){if(e instanceof ye)return e;typeof e=="number"&&(e=n0(e)),this.originalInput=e;const s=l0(e);this.originalInput=e,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??s.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let i,s,r;const o=e.r/255,a=e.g/255,l=e.b/255;return o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),a<=.03928?s=a/12.92:s=Math.pow((a+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*i+.7152*s+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=wd(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=$l(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=$l(this.r,this.g,this.b),i=Math.round(e.h*360),s=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${i}, ${s}%, ${r}%)`:`hsva(${i}, ${s}%, ${r}%, ${this.roundA})`}toHsl(){const e=El(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=El(this.r,this.g,this.b),i=Math.round(e.h*360),s=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${i}, ${s}%, ${r}%)`:`hsla(${i}, ${s}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Sl(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return r0(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),i=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${e}, ${i}, ${s})`:`rgba(${e}, ${i}, ${s}, ${this.roundA})`}toPercentageRgb(){const e=i=>`${Math.round(Fe(i,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=i=>Math.round(Fe(i,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Al(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:i,y:s,k:r}=Al(this.r,this.g,this.b);return`cmyk(${e}, ${i}, ${s}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Sl(this.r,this.g,this.b,!1);for(const[i,s]of Object.entries(qa))if(e===s)return i;return!1}toString(e){const i=!!e;e=e??this.format;let s=!1;const r=this.a<1&&this.a>=0;return!i&&r&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(s=this.toRgbString()),e==="prgb"&&(s=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(s=this.toHexString()),e==="hex3"&&(s=this.toHexString(!0)),e==="hex4"&&(s=this.toHex8String(!0)),e==="hex8"&&(s=this.toHex8String()),e==="name"&&(s=this.toName()),e==="hsl"&&(s=this.toHslString()),e==="hsv"&&(s=this.toHsvString()),e==="cmyk"&&(s=this.toCmykString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ye(this.toString())}lighten(e=10){const i=this.toHsl();return i.l+=e/100,i.l=Pr(i.l),new ye(i)}brighten(e=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(e/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(e/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(e/100)))),new ye(i)}darken(e=10){const i=this.toHsl();return i.l-=e/100,i.l=Pr(i.l),new ye(i)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const i=this.toHsl();return i.s-=e/100,i.s=Pr(i.s),new ye(i)}saturate(e=10){const i=this.toHsl();return i.s+=e/100,i.s=Pr(i.s),new ye(i)}greyscale(){return this.desaturate(100)}spin(e){const i=this.toHsl(),s=(i.h+e)%360;return i.h=s<0?360+s:s,new ye(i)}mix(e,i=50){const s=this.toRgb(),r=new ye(e).toRgb(),o=i/100,a={r:(r.r-s.r)*o+s.r,g:(r.g-s.g)*o+s.g,b:(r.b-s.b)*o+s.b,a:(r.a-s.a)*o+s.a};return new ye(a)}analogous(e=6,i=30){const s=this.toHsl(),r=360/i,o=[this];for(s.h=(s.h-(r*e>>1)+720)%360;--e;)s.h=(s.h+r)%360,o.push(new ye(s));return o}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new ye(e)}monochromatic(e=6){const i=this.toHsv(),{h:s}=i,{s:r}=i;let{v:o}=i;const a=[],l=1/e;for(;e--;)a.push(new ye({h:s,s:r,v:o})),o=(o+l)%1;return a}splitcomplement(){const e=this.toHsl(),{h:i}=e;return[this,new ye({h:(i+72)%360,s:e.s,l:e.l}),new ye({h:(i+216)%360,s:e.s,l:e.l})]}onBackground(e){const i=this.toRgb(),s=new ye(e).toRgb(),r=i.a+s.a*(1-i.a);return new ye({r:(i.r*i.a+s.r*s.a*(1-i.a))/r,g:(i.g*i.a+s.g*s.a*(1-i.a))/r,b:(i.b*i.a+s.b*s.a*(1-i.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const i=this.toHsl(),{h:s}=i,r=[this],o=360/e;for(let a=1;a<e;a++)r.push(new ye({h:(s+a*o)%360,s:i.s,l:i.l}));return r}equals(e){const i=new ye(e);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}}var W=class extends me{constructor(){super(),this.hasSlotController=new xt(this,"hint","label"),this.isSafeValue=!1,this.localize=new ie(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open){t.stopPropagation(),this.focus(),this.hide();return}t.key==="Tab"&&setTimeout(()=>{const e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=t=>{const i=t.composedPath().some(s=>s instanceof Element&&(s.closest(".color-picker")||s===this.trigger));this&&!i&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){const t=[Mo()];return[...super.validators,...t]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".slider.alpha"),i=e.querySelector(".slider-handle"),{width:s}=e.getBoundingClientRect();let r=this.value,o=this.value;i.focus(),t.preventDefault(),nr(e,{onMove:a=>{this.alpha=Z(a/s*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".slider.hue"),i=e.querySelector(".slider-handle"),{width:s}=e.getBoundingClientRect();let r=this.value,o=this.value;i.focus(),t.preventDefault(),nr(e,{onMove:a=>{this.hue=Z(a/s*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".grid"),i=e.querySelector(".grid-handle"),{width:s,height:r}=e.getBoundingClientRect();let o=this.value,a=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,nr(e,{onMove:(l,c)=>{this.saturation=Z(l/s*100,0,100),this.brightness=Z(100-c/r*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=Z(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=Z(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=Z(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=Z(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=Z(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=Z(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=Z(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=Z(this.brightness-e,0,100),this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(t){const e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value||""):this.value="",this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(t){this.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(t){t.preventDefault()}parseColor(t){if(!t||t.trim()==="")return null;const e=new ye(t);if(!e.isValid)return null;const i=e.toHsl(),s=e.toRgb(),r=e.toHsv();if(!s||s.r==null||s.g==null||s.b==null)return null;const o={h:i.h||0,s:(i.s||0)*100,l:(i.l||0)*100,a:i.a||0},a=e.toHexString(),l=e.toHex8String(),c={h:r.h||0,s:(r.s||0)*100,v:(r.v||0)*100,a:r.a||0};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:s.r,g:s.g,b:s.b,string:this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)},rgba:{r:s.r,g:s.g,b:s.b,a:s.a||0,string:this.setLetterCase(`rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${(s.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(a),hexa:this.setLetterCase(l)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(e=>{const i=this.value;this.setColor(e.sRGBHex),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(t,e,i,s=100){const r=new ye(`hsva(${t}, ${e}%, ${i}%, ${s/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(t){super.willUpdate(t),t.has("value")&&this.handleValueChange(t.get("value")||"",this.value||"")}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(e);i!==null?(this.inputValue=this.value||"",this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=t??""}this.requestUpdate()}focus(t){this.trigger.focus(t)}blur(){const t=this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.popup?.active&&this.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new Tn),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(t){super.firstUpdated(t),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}updateAccessibleTrigger(){const t=this.trigger;t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,Rt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Rt(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await ue(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await ue(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){const t=this.hasUpdated?this.withLabel||this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.withHint||this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!t,s=this.hint?!0:!!e,r=this.saturation,o=100-this.brightness,a=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(c=>c.trim()!==""),l=f`
      <div
        part="base"
        class=${B({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${ge({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${B({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${ge({top:`${o}%`,left:`${r}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${q(this.disabled?void 0:"0")}
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
                style=${ge({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${q(this.disabled?void 0:"0")}
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
                      style=${ge({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${ge({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${q(this.disabled?void 0:"0")}
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
            style=${ge({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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

        ${a.length>0?f`
              <div part="swatches" class="swatches">
                ${a.map(c=>{const h=this.parseColor(c);return h?f`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${q(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${c}
                      @click=${()=>this.selectSwatch(c)}
                      @keydown=${u=>!this.disabled&&u.key==="Enter"&&this.setColor(h.hexa)}
                    >
                      <div class="swatch-color" style=${ge({backgroundColor:h.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return f`
      <div
        class=${B({container:!0,"form-control":!0,"form-control-has-label":i})}
        part="trigger-container form-control"
      >
        <div
          part="form-control-label"
          class=${B({label:!0,"has-label":i})}
          id="form-control-label"
        >
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${B({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
          style=${ge({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
          class=${B({"has-slotted":s})}
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
    `}};W.css=[bd,Qe,ri,Jg];W.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0};n([A('[part~="base"]')],W.prototype,"base",2);n([A('[part~="input"]')],W.prototype,"input",2);n([A('[part~="form-control-label"]')],W.prototype,"triggerLabel",2);n([A('[part~="form-control-input"]')],W.prototype,"triggerButton",2);n([A(".color-popup")],W.prototype,"popup",2);n([A('[part~="preview"]')],W.prototype,"previewButton",2);n([A('[part~="trigger"]')],W.prototype,"trigger",2);n([S()],W.prototype,"hasFocus",2);n([S()],W.prototype,"isDraggingGridHandle",2);n([S()],W.prototype,"isEmpty",2);n([S()],W.prototype,"inputValue",2);n([S()],W.prototype,"hue",2);n([S()],W.prototype,"saturation",2);n([S()],W.prototype,"brightness",2);n([S()],W.prototype,"alpha",2);n([S()],W.prototype,"value",1);n([d({attribute:"value",reflect:!0})],W.prototype,"defaultValue",2);n([d({attribute:"with-label",reflect:!0,type:Boolean})],W.prototype,"withLabel",2);n([d({attribute:"with-hint",reflect:!0,type:Boolean})],W.prototype,"withHint",2);n([S()],W.prototype,"hasEyeDropper",2);n([d()],W.prototype,"label",2);n([d({attribute:"hint"})],W.prototype,"hint",2);n([d()],W.prototype,"format",2);n([d({reflect:!0})],W.prototype,"size",2);n([d({attribute:"without-format-toggle",type:Boolean})],W.prototype,"withoutFormatToggle",2);n([d({reflect:!0})],W.prototype,"name",2);n([d({type:Boolean})],W.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],W.prototype,"open",2);n([d({type:Boolean})],W.prototype,"opacity",2);n([d({type:Boolean})],W.prototype,"uppercase",2);n([d()],W.prototype,"swatches",2);n([d({type:Boolean,reflect:!0})],W.prototype,"required",2);n([Co({passive:!1})],W.prototype,"handleTouchMove",1);n([R("format",{waitUntilFirstUpdate:!0})],W.prototype,"handleFormatChange",1);n([R("opacity")],W.prototype,"handleOpacityChange",1);n([R("value")],W.prototype,"handleValueChange",1);n([R("open",{waitUntilFirstUpdate:!0})],W.prototype,"handleOpenChange",1);W=n([$("wa-color-picker")],W);var vd=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function yd(t,e){const i=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!i&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&u0(e)})}function u0(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;const i=[...e.elements];if(i.length===1){e.requestSubmit(null);return}const s=i.find(r=>r.type==="submit"&&!r.matches(":disabled"));s&&(["input","button"].includes(s.localName)?e.requestSubmit(s):s.click())}var p0=_`
  :host {
    border-width: 0;
  }

  .text-field {
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
`;var K=class extends me{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new xt(this,"hint","label"),this.localize=new ie(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,zo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new vd),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){yd(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const r=e??this.input.selectionStart,o=i??this.input.selectionEnd;this.input.setRangeText(t,r,o,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!t,s=this.hint?!0:!!e,r=this.withClear&&!this.disabled&&!this.readonly,o=this.hasUpdated&&r&&(typeof this.value=="number"||this.value&&this.value.length>0);return f`
      <label
        part="form-control-label label"
        class=${B({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
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
          name=${q(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${q(this.placeholder)}
          minlength=${q(this.minlength)}
          maxlength=${q(this.maxlength)}
          min=${q(this.min)}
          max=${q(this.max)}
          step=${q(this.step)}
          .value=${vs(this.value??"")}
          autocapitalize=${q(this.autocapitalize)}
          autocomplete=${q(this.autocomplete)}
          autocorrect=${q(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${q(this.pattern)}
          enterkeyhint=${q(this.enterkeyhint)}
          inputmode=${q(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${o?f`
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
        class=${B({"has-slotted":s})}
        aria-hidden=${s?"false":"true"}
        >${this.hint}</slot
      >
    `}};K.css=[Qe,ri,p0];K.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0};n([A("input")],K.prototype,"input",2);n([d()],K.prototype,"title",2);n([d({reflect:!0})],K.prototype,"type",2);n([S()],K.prototype,"value",1);n([d({attribute:"value",reflect:!0})],K.prototype,"defaultValue",2);n([d({reflect:!0})],K.prototype,"size",2);n([d({reflect:!0})],K.prototype,"appearance",2);n([d({type:Boolean,reflect:!0})],K.prototype,"pill",2);n([d()],K.prototype,"label",2);n([d({attribute:"hint"})],K.prototype,"hint",2);n([d({attribute:"with-clear",type:Boolean})],K.prototype,"withClear",2);n([d()],K.prototype,"placeholder",2);n([d({type:Boolean,reflect:!0})],K.prototype,"readonly",2);n([d({attribute:"password-toggle",type:Boolean})],K.prototype,"passwordToggle",2);n([d({attribute:"password-visible",type:Boolean})],K.prototype,"passwordVisible",2);n([d({attribute:"without-spin-buttons",type:Boolean})],K.prototype,"withoutSpinButtons",2);n([d({type:Boolean,reflect:!0})],K.prototype,"required",2);n([d()],K.prototype,"pattern",2);n([d({type:Number})],K.prototype,"minlength",2);n([d({type:Number})],K.prototype,"maxlength",2);n([d()],K.prototype,"min",2);n([d()],K.prototype,"max",2);n([d()],K.prototype,"step",2);n([d()],K.prototype,"autocapitalize",2);n([d()],K.prototype,"autocorrect",2);n([d()],K.prototype,"autocomplete",2);n([d({type:Boolean})],K.prototype,"autofocus",2);n([d()],K.prototype,"enterkeyhint",2);n([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],K.prototype,"spellcheck",2);n([d()],K.prototype,"inputmode",2);n([d({attribute:"with-label",type:Boolean})],K.prototype,"withLabel",2);n([d({attribute:"with-hint",type:Boolean})],K.prototype,"withHint",2);n([R("step",{waitUntilFirstUpdate:!0})],K.prototype,"handleStepChange",1);K=n([$("wa-input")],K);var xd=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var f0=_`
  :host {
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
`;const vi=Math.min,ft=Math.max,ho=Math.round,Fr=Math.floor,Ut=t=>({x:t,y:t}),m0={left:"right",right:"left",bottom:"top",top:"bottom"},g0={start:"end",end:"start"};function Va(t,e,i){return ft(t,vi(e,i))}function Os(t,e){return typeof t=="function"?t(e):t}function yi(t){return t.split("-")[0]}function Ds(t){return t.split("-")[1]}function kd(t){return t==="x"?"y":"x"}function Ln(t){return t==="y"?"height":"width"}const b0=new Set(["top","bottom"]);function Yt(t){return b0.has(yi(t))?"y":"x"}function Rn(t){return kd(Yt(t))}function w0(t,e,i){i===void 0&&(i=!1);const s=Ds(t),r=Rn(t),o=Ln(r);let a=r==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(a=uo(a)),[a,uo(a)]}function v0(t){const e=uo(t);return[Ha(t),e,Ha(e)]}function Ha(t){return t.replace(/start|end/g,e=>g0[e])}const Tl=["left","right"],Ll=["right","left"],y0=["top","bottom"],x0=["bottom","top"];function k0(t,e,i){switch(t){case"top":case"bottom":return i?e?Ll:Tl:e?Tl:Ll;case"left":case"right":return e?y0:x0;default:return[]}}function C0(t,e,i,s){const r=Ds(t);let o=k0(yi(t),i==="start",s);return r&&(o=o.map(a=>a+"-"+r),e&&(o=o.concat(o.map(Ha)))),o}function uo(t){return t.replace(/left|right|bottom|top/g,e=>m0[e])}function E0(t){return{top:0,right:0,bottom:0,left:0,...t}}function Cd(t){return typeof t!="number"?E0(t):{top:t,right:t,bottom:t,left:t}}function po(t){const{x:e,y:i,width:s,height:r}=t;return{width:s,height:r,top:i,left:e,right:e+s,bottom:i+r,x:e,y:i}}function Rl(t,e,i){let{reference:s,floating:r}=t;const o=Yt(e),a=Rn(e),l=Ln(a),c=yi(e),h=o==="y",u=s.x+s.width/2-r.width/2,p=s.y+s.height/2-r.height/2,m=s[l]/2-r[l]/2;let b;switch(c){case"top":b={x:u,y:s.y-r.height};break;case"bottom":b={x:u,y:s.y+s.height};break;case"right":b={x:s.x+s.width,y:p};break;case"left":b={x:s.x-r.width,y:p};break;default:b={x:s.x,y:s.y}}switch(Ds(e)){case"start":b[a]-=m*(i&&h?-1:1);break;case"end":b[a]+=m*(i&&h?-1:1);break}return b}async function $0(t,e){var i;e===void 0&&(e={});const{x:s,y:r,platform:o,rects:a,elements:l,strategy:c}=t,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:m=!1,padding:b=0}=Os(e,t),w=Cd(b),D=l[m?p==="floating"?"reference":"floating":p],E=po(await o.getClippingRect({element:(i=await(o.isElement==null?void 0:o.isElement(D)))==null||i?D:D.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:h,rootBoundary:u,strategy:c})),M=p==="floating"?{x:s,y:r,width:a.floating.width,height:a.floating.height}:a.reference,T=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),I=await(o.isElement==null?void 0:o.isElement(T))?await(o.getScale==null?void 0:o.getScale(T))||{x:1,y:1}:{x:1,y:1},O=po(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:M,offsetParent:T,strategy:c}):M);return{top:(E.top-O.top+w.top)/I.y,bottom:(O.bottom-E.bottom+w.bottom)/I.y,left:(E.left-O.left+w.left)/I.x,right:(O.right-E.right+w.right)/I.x}}const S0=async(t,e,i)=>{const{placement:s="bottom",strategy:r="absolute",middleware:o=[],platform:a}=i,l=o.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:p}=Rl(h,s,c),m=s,b={},w=0;for(let D=0;D<l.length;D++){var k;const{name:E,fn:M}=l[D],{x:T,y:I,data:O,reset:F}=await M({x:u,y:p,initialPlacement:s,placement:m,strategy:r,middlewareData:b,rects:h,platform:{...a,detectOverflow:(k=a.detectOverflow)!=null?k:$0},elements:{reference:t,floating:e}});u=T??u,p=I??p,b={...b,[E]:{...b[E],...O}},F&&w<=50&&(w++,typeof F=="object"&&(F.placement&&(m=F.placement),F.rects&&(h=F.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:r}):F.rects),{x:u,y:p}=Rl(h,m,c)),D=-1)}return{x:u,y:p,placement:m,strategy:r,middlewareData:b}},A0=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:s,placement:r,rects:o,platform:a,elements:l,middlewareData:c}=e,{element:h,padding:u=0}=Os(t,e)||{};if(h==null)return{};const p=Cd(u),m={x:i,y:s},b=Rn(r),w=Ln(b),k=await a.getDimensions(h),D=b==="y",E=D?"top":"left",M=D?"bottom":"right",T=D?"clientHeight":"clientWidth",I=o.reference[w]+o.reference[b]-m[b]-o.floating[w],O=m[b]-o.reference[b],F=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let P=F?F[T]:0;(!P||!await(a.isElement==null?void 0:a.isElement(F)))&&(P=l.floating[T]||o.floating[w]);const we=I/2-O/2,ve=P/2-k[w]/2-1,ce=vi(p[E],ve),Oe=vi(p[M],ve),Ce=ce,Te=P-k[w]-Oe,$e=P/2-k[w]/2+we,De=Va(Ce,$e,Te),j=!c.arrow&&Ds(r)!=null&&$e!==De&&o.reference[w]/2-($e<Ce?ce:Oe)-k[w]/2<0,We=j?$e<Ce?$e-Ce:$e-Te:0;return{[b]:m[b]+We,data:{[b]:De,centerOffset:$e-De-We,...j&&{alignmentOffset:We}},reset:j}}}),_0=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:r,middlewareData:o,rects:a,initialPlacement:l,platform:c,elements:h}=e,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:k=!0,...D}=Os(t,e);if((i=o.arrow)!=null&&i.alignmentOffset)return{};const E=yi(r),M=Yt(l),T=yi(l)===l,I=await(c.isRTL==null?void 0:c.isRTL(h.floating)),O=m||(T||!k?[uo(l)]:v0(l)),F=w!=="none";!m&&F&&O.push(...C0(l,k,w,I));const P=[l,...O],we=await c.detectOverflow(e,D),ve=[];let ce=((s=o.flip)==null?void 0:s.overflows)||[];if(u&&ve.push(we[E]),p){const $e=w0(r,a,I);ve.push(we[$e[0]],we[$e[1]])}if(ce=[...ce,{placement:r,overflows:ve}],!ve.every($e=>$e<=0)){var Oe,Ce;const $e=(((Oe=o.flip)==null?void 0:Oe.index)||0)+1,De=P[$e];if(De&&(!(p==="alignment"?M!==Yt(De):!1)||ce.every(Ge=>Yt(Ge.placement)===M?Ge.overflows[0]>0:!0)))return{data:{index:$e,overflows:ce},reset:{placement:De}};let j=(Ce=ce.filter(We=>We.overflows[0]<=0).sort((We,Ge)=>We.overflows[1]-Ge.overflows[1])[0])==null?void 0:Ce.placement;if(!j)switch(b){case"bestFit":{var Te;const We=(Te=ce.filter(Ge=>{if(F){const St=Yt(Ge.placement);return St===M||St==="y"}return!0}).map(Ge=>[Ge.placement,Ge.overflows.filter(St=>St>0).reduce((St,_i)=>St+_i,0)]).sort((Ge,St)=>Ge[1]-St[1])[0])==null?void 0:Te[0];We&&(j=We);break}case"initialPlacement":j=l;break}if(r!==j)return{reset:{placement:j}}}return{}}}},T0=new Set(["left","top"]);async function L0(t,e){const{placement:i,platform:s,elements:r}=t,o=await(s.isRTL==null?void 0:s.isRTL(r.floating)),a=yi(i),l=Ds(i),c=Yt(i)==="y",h=T0.has(a)?-1:1,u=o&&c?-1:1,p=Os(e,t);let{mainAxis:m,crossAxis:b,alignmentAxis:w}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof w=="number"&&(b=l==="end"?w*-1:w),c?{x:b*u,y:m*h}:{x:m*h,y:b*u}}const R0=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:r,y:o,placement:a,middlewareData:l}=e,c=await L0(e,t);return a===((i=l.offset)==null?void 0:i.placement)&&(s=l.arrow)!=null&&s.alignmentOffset?{}:{x:r+c.x,y:o+c.y,data:{...c,placement:a}}}}},I0=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:r,platform:o}=e,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:E=>{let{x:M,y:T}=E;return{x:M,y:T}}},...h}=Os(t,e),u={x:i,y:s},p=await o.detectOverflow(e,h),m=Yt(yi(r)),b=kd(m);let w=u[b],k=u[m];if(a){const E=b==="y"?"top":"left",M=b==="y"?"bottom":"right",T=w+p[E],I=w-p[M];w=Va(T,w,I)}if(l){const E=m==="y"?"top":"left",M=m==="y"?"bottom":"right",T=k+p[E],I=k-p[M];k=Va(T,k,I)}const D=c.fn({...e,[b]:w,[m]:k});return{...D,data:{x:D.x-i,y:D.y-s,enabled:{[b]:a,[m]:l}}}}}},O0=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,s;const{placement:r,rects:o,platform:a,elements:l}=e,{apply:c=()=>{},...h}=Os(t,e),u=await a.detectOverflow(e,h),p=yi(r),m=Ds(r),b=Yt(r)==="y",{width:w,height:k}=o.floating;let D,E;p==="top"||p==="bottom"?(D=p,E=m===(await(a.isRTL==null?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(E=p,D=m==="end"?"top":"bottom");const M=k-u.top-u.bottom,T=w-u.left-u.right,I=vi(k-u[D],M),O=vi(w-u[E],T),F=!e.middlewareData.shift;let P=I,we=O;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(we=T),(s=e.middlewareData.shift)!=null&&s.enabled.y&&(P=M),F&&!m){const ce=ft(u.left,0),Oe=ft(u.right,0),Ce=ft(u.top,0),Te=ft(u.bottom,0);b?we=w-2*(ce!==0||Oe!==0?ce+Oe:ft(u.left,u.right)):P=k-2*(Ce!==0||Te!==0?Ce+Te:ft(u.top,u.bottom))}await c({...e,availableWidth:we,availableHeight:P});const ve=await a.getDimensions(l.floating);return w!==ve.width||k!==ve.height?{reset:{rects:!0}}:{}}}};function No(){return typeof window<"u"}function zs(t){return Ed(t)?(t.nodeName||"").toLowerCase():"#document"}function wt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Xt(t){var e;return(e=(Ed(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ed(t){return No()?t instanceof Node||t instanceof wt(t).Node:!1}function It(t){return No()?t instanceof Element||t instanceof wt(t).Element:!1}function qt(t){return No()?t instanceof HTMLElement||t instanceof wt(t).HTMLElement:!1}function Il(t){return!No()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof wt(t).ShadowRoot}const D0=new Set(["inline","contents"]);function Cr(t){const{overflow:e,overflowX:i,overflowY:s,display:r}=Ot(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!D0.has(r)}const z0=new Set(["table","td","th"]);function P0(t){return z0.has(zs(t))}const M0=[":popover-open",":modal"];function Fo(t){return M0.some(e=>{try{return t.matches(e)}catch{return!1}})}const N0=["transform","translate","scale","rotate","perspective"],F0=["transform","translate","scale","rotate","perspective","filter"],U0=["paint","layout","strict","content"];function Uo(t){const e=In(),i=It(t)?Ot(t):t;return N0.some(s=>i[s]?i[s]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||F0.some(s=>(i.willChange||"").includes(s))||U0.some(s=>(i.contain||"").includes(s))}function B0(t){let e=xi(t);for(;qt(e)&&!ys(e);){if(Uo(e))return e;if(Fo(e))return null;e=xi(e)}return null}function In(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const q0=new Set(["html","body","#document"]);function ys(t){return q0.has(zs(t))}function Ot(t){return wt(t).getComputedStyle(t)}function Bo(t){return It(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function xi(t){if(zs(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Il(t)&&t.host||Xt(t);return Il(e)?e.host:e}function $d(t){const e=xi(t);return ys(e)?t.ownerDocument?t.ownerDocument.body:t.body:qt(e)&&Cr(e)?e:$d(e)}function xs(t,e,i){var s;e===void 0&&(e=[]),i===void 0&&(i=!0);const r=$d(t),o=r===((s=t.ownerDocument)==null?void 0:s.body),a=wt(r);if(o){const l=Wa(a);return e.concat(a,a.visualViewport||[],Cr(r)?r:[],l&&i?xs(l):[])}return e.concat(r,xs(r,[],i))}function Wa(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Sd(t){const e=Ot(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const r=qt(t),o=r?t.offsetWidth:i,a=r?t.offsetHeight:s,l=ho(i)!==o||ho(s)!==a;return l&&(i=o,s=a),{width:i,height:s,$:l}}function On(t){return It(t)?t:t.contextElement}function hs(t){const e=On(t);if(!qt(e))return Ut(1);const i=e.getBoundingClientRect(),{width:s,height:r,$:o}=Sd(e);let a=(o?ho(i.width):i.width)/s,l=(o?ho(i.height):i.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const V0=Ut(0);function Ad(t){const e=wt(t);return!In()||!e.visualViewport?V0:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function H0(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==wt(t)?!1:e}function qi(t,e,i,s){e===void 0&&(e=!1),i===void 0&&(i=!1);const r=t.getBoundingClientRect(),o=On(t);let a=Ut(1);e&&(s?It(s)&&(a=hs(s)):a=hs(t));const l=H0(o,i,s)?Ad(o):Ut(0);let c=(r.left+l.x)/a.x,h=(r.top+l.y)/a.y,u=r.width/a.x,p=r.height/a.y;if(o){const m=wt(o),b=s&&It(s)?wt(s):s;let w=m,k=Wa(w);for(;k&&s&&b!==w;){const D=hs(k),E=k.getBoundingClientRect(),M=Ot(k),T=E.left+(k.clientLeft+parseFloat(M.paddingLeft))*D.x,I=E.top+(k.clientTop+parseFloat(M.paddingTop))*D.y;c*=D.x,h*=D.y,u*=D.x,p*=D.y,c+=T,h+=I,w=wt(k),k=Wa(w)}}return po({width:u,height:p,x:c,y:h})}function qo(t,e){const i=Bo(t).scrollLeft;return e?e.left+i:qi(Xt(t)).left+i}function _d(t,e){const i=t.getBoundingClientRect(),s=i.left+e.scrollLeft-qo(t,i),r=i.top+e.scrollTop;return{x:s,y:r}}function W0(t){let{elements:e,rect:i,offsetParent:s,strategy:r}=t;const o=r==="fixed",a=Xt(s),l=e?Fo(e.floating):!1;if(s===a||l&&o)return i;let c={scrollLeft:0,scrollTop:0},h=Ut(1);const u=Ut(0),p=qt(s);if((p||!p&&!o)&&((zs(s)!=="body"||Cr(a))&&(c=Bo(s)),qt(s))){const b=qi(s);h=hs(s),u.x=b.x+s.clientLeft,u.y=b.y+s.clientTop}const m=a&&!p&&!o?_d(a,c):Ut(0);return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-c.scrollLeft*h.x+u.x+m.x,y:i.y*h.y-c.scrollTop*h.y+u.y+m.y}}function j0(t){return Array.from(t.getClientRects())}function X0(t){const e=Xt(t),i=Bo(t),s=t.ownerDocument.body,r=ft(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),o=ft(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let a=-i.scrollLeft+qo(t);const l=-i.scrollTop;return Ot(s).direction==="rtl"&&(a+=ft(e.clientWidth,s.clientWidth)-r),{width:r,height:o,x:a,y:l}}const Ol=25;function G0(t,e){const i=wt(t),s=Xt(t),r=i.visualViewport;let o=s.clientWidth,a=s.clientHeight,l=0,c=0;if(r){o=r.width,a=r.height;const u=In();(!u||u&&e==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}const h=qo(s);if(h<=0){const u=s.ownerDocument,p=u.body,m=getComputedStyle(p),b=u.compatMode==="CSS1Compat"&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,w=Math.abs(s.clientWidth-p.clientWidth-b);w<=Ol&&(o-=w)}else h<=Ol&&(o+=h);return{width:o,height:a,x:l,y:c}}const K0=new Set(["absolute","fixed"]);function Y0(t,e){const i=qi(t,!0,e==="fixed"),s=i.top+t.clientTop,r=i.left+t.clientLeft,o=qt(t)?hs(t):Ut(1),a=t.clientWidth*o.x,l=t.clientHeight*o.y,c=r*o.x,h=s*o.y;return{width:a,height:l,x:c,y:h}}function Dl(t,e,i){let s;if(e==="viewport")s=G0(t,i);else if(e==="document")s=X0(Xt(t));else if(It(e))s=Y0(e,i);else{const r=Ad(t);s={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return po(s)}function Td(t,e){const i=xi(t);return i===e||!It(i)||ys(i)?!1:Ot(i).position==="fixed"||Td(i,e)}function Z0(t,e){const i=e.get(t);if(i)return i;let s=xs(t,[],!1).filter(l=>It(l)&&zs(l)!=="body"),r=null;const o=Ot(t).position==="fixed";let a=o?xi(t):t;for(;It(a)&&!ys(a);){const l=Ot(a),c=Uo(a);!c&&l.position==="fixed"&&(r=null),(o?!c&&!r:!c&&l.position==="static"&&!!r&&K0.has(r.position)||Cr(a)&&!c&&Td(t,a))?s=s.filter(u=>u!==a):r=l,a=xi(a)}return e.set(t,s),s}function J0(t){let{element:e,boundary:i,rootBoundary:s,strategy:r}=t;const a=[...i==="clippingAncestors"?Fo(e)?[]:Z0(e,this._c):[].concat(i),s],l=a[0],c=a.reduce((h,u)=>{const p=Dl(e,u,r);return h.top=ft(p.top,h.top),h.right=vi(p.right,h.right),h.bottom=vi(p.bottom,h.bottom),h.left=ft(p.left,h.left),h},Dl(e,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Q0(t){const{width:e,height:i}=Sd(t);return{width:e,height:i}}function eb(t,e,i){const s=qt(e),r=Xt(e),o=i==="fixed",a=qi(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const c=Ut(0);function h(){c.x=qo(r)}if(s||!s&&!o)if((zs(e)!=="body"||Cr(r))&&(l=Bo(e)),s){const b=qi(e,!0,o,e);c.x=b.x+e.clientLeft,c.y=b.y+e.clientTop}else r&&h();o&&!s&&r&&h();const u=r&&!s&&!o?_d(r,l):Ut(0),p=a.left+l.scrollLeft-c.x-u.x,m=a.top+l.scrollTop-c.y-u.y;return{x:p,y:m,width:a.width,height:a.height}}function ba(t){return Ot(t).position==="static"}function zl(t,e){if(!qt(t)||Ot(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return Xt(t)===i&&(i=i.ownerDocument.body),i}function Ld(t,e){const i=wt(t);if(Fo(t))return i;if(!qt(t)){let r=xi(t);for(;r&&!ys(r);){if(It(r)&&!ba(r))return r;r=xi(r)}return i}let s=zl(t,e);for(;s&&P0(s)&&ba(s);)s=zl(s,e);return s&&ys(s)&&ba(s)&&!Uo(s)?i:s||B0(t)||i}const tb=async function(t){const e=this.getOffsetParent||Ld,i=this.getDimensions,s=await i(t.floating);return{reference:eb(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function ib(t){return Ot(t).direction==="rtl"}const jr={convertOffsetParentRelativeRectToViewportRelativeRect:W0,getDocumentElement:Xt,getClippingRect:J0,getOffsetParent:Ld,getElementRects:tb,getClientRects:j0,getDimensions:Q0,getScale:hs,isElement:It,isRTL:ib};function Rd(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function sb(t,e){let i=null,s;const r=Xt(t);function o(){var l;clearTimeout(s),(l=i)==null||l.disconnect(),i=null}function a(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),o();const h=t.getBoundingClientRect(),{left:u,top:p,width:m,height:b}=h;if(l||e(),!m||!b)return;const w=Fr(p),k=Fr(r.clientWidth-(u+m)),D=Fr(r.clientHeight-(p+b)),E=Fr(u),T={rootMargin:-w+"px "+-k+"px "+-D+"px "+-E+"px",threshold:ft(0,vi(1,c))||1};let I=!0;function O(F){const P=F[0].intersectionRatio;if(P!==c){if(!I)return a();P?a(!1,P):s=setTimeout(()=>{a(!1,1e-7)},1e3)}P===1&&!Rd(h,t.getBoundingClientRect())&&a(),I=!1}try{i=new IntersectionObserver(O,{...T,root:r.ownerDocument})}catch{i=new IntersectionObserver(O,T)}i.observe(t)}return a(!0),o}function Id(t,e,i,s){s===void 0&&(s={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=s,h=On(t),u=r||o?[...h?xs(h):[],...xs(e)]:[];u.forEach(E=>{r&&E.addEventListener("scroll",i,{passive:!0}),o&&E.addEventListener("resize",i)});const p=h&&l?sb(h,i):null;let m=-1,b=null;a&&(b=new ResizeObserver(E=>{let[M]=E;M&&M.target===h&&b&&(b.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var T;(T=b)==null||T.observe(e)})),i()}),h&&!c&&b.observe(h),b.observe(e));let w,k=c?qi(t):null;c&&D();function D(){const E=qi(t);k&&!Rd(k,E)&&i(),k=E,w=requestAnimationFrame(D)}return i(),()=>{var E;u.forEach(M=>{r&&M.removeEventListener("scroll",i),o&&M.removeEventListener("resize",i)}),p?.(),(E=b)==null||E.disconnect(),b=null,c&&cancelAnimationFrame(w)}}const Od=R0,Dd=I0,zd=_0,Pl=O0,rb=A0,Pd=(t,e,i)=>{const s=new Map,r={platform:jr,...i},o={...r.platform,_c:s};return S0(t,e,{...r,platform:o})};function ob(t){return ab(t)}function wa(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function ab(t){for(let e=t;e;e=wa(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=wa(t);e;e=wa(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||Uo(i)||e.tagName==="BODY"))return e}return null}function Ml(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var Ur=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),ne=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let s=0,r=0,o=0,a=0,l=0,c=0,h=0,u=0;i?t.top<e.top?(s=t.left,r=t.bottom,o=t.right,a=t.bottom,l=e.left,c=e.top,h=e.right,u=e.top):(s=e.left,r=e.bottom,o=e.right,a=e.bottom,l=t.left,c=t.top,h=t.right,u=t.top):t.left<e.left?(s=t.right,r=t.top,o=e.left,a=e.top,l=t.right,c=t.bottom,h=e.left,u=e.bottom):(s=e.right,r=e.top,o=t.left,a=t.top,l=e.right,c=e.bottom,h=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Ml(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Id(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;const t=[Od({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Pl({apply:({rects:s})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${s.reference.width}px`:"",this.popup.style.height=o?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;Ur&&!Ml(this.anchor)&&this.boundary==="scroll"&&(e=xs(this.anchorEl).filter(s=>s instanceof Element)),this.flip&&t.push(zd({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Dd({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(Pl({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(rb({element:this.arrowEl,padding:this.arrowPadding}));const i=Ur?s=>jr.getOffsetParent(s,ob):jr.getOffsetParent;Pd(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:Ur?"absolute":"fixed",platform:{...jr,getOffsetParent:i}}).then(({x:s,y:r,middlewareData:o,placement:a})=>{const l=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[a.split("-")[0]];if(this.setAttribute("data-current-placement",a),Object.assign(this.popup.style,{left:`${s}px`,top:`${r}px`}),this.arrow){const h=o.arrow.x,u=o.arrow.y;let p="",m="",b="",w="";if(this.arrowPlacement==="start"){const k=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",m=l?k:"",w=l?"":k}else if(this.arrowPlacement==="end"){const k=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=l?"":k,w=l?k:"",b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(w=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(w=typeof h=="number"?`${h}px`:"",p=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:p,right:m,bottom:b,left:w,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new xd)}render(){return f`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${B({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${B({popup:!0,"popup-active":this.active,"popup-fixed":!Ur,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?f`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};ne.css=f0;n([A(".popup")],ne.prototype,"popup",2);n([A(".arrow")],ne.prototype,"arrowEl",2);n([d()],ne.prototype,"anchor",2);n([d({type:Boolean,reflect:!0})],ne.prototype,"active",2);n([d({reflect:!0})],ne.prototype,"placement",2);n([d()],ne.prototype,"boundary",2);n([d({type:Number})],ne.prototype,"distance",2);n([d({type:Number})],ne.prototype,"skidding",2);n([d({type:Boolean})],ne.prototype,"arrow",2);n([d({attribute:"arrow-placement"})],ne.prototype,"arrowPlacement",2);n([d({attribute:"arrow-padding",type:Number})],ne.prototype,"arrowPadding",2);n([d({type:Boolean})],ne.prototype,"flip",2);n([d({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],ne.prototype,"flipFallbackPlacements",2);n([d({attribute:"flip-fallback-strategy"})],ne.prototype,"flipFallbackStrategy",2);n([d({type:Object})],ne.prototype,"flipBoundary",2);n([d({attribute:"flip-padding",type:Number})],ne.prototype,"flipPadding",2);n([d({type:Boolean})],ne.prototype,"shift",2);n([d({type:Object})],ne.prototype,"shiftBoundary",2);n([d({attribute:"shift-padding",type:Number})],ne.prototype,"shiftPadding",2);n([d({attribute:"auto-size"})],ne.prototype,"autoSize",2);n([d()],ne.prototype,"sync",2);n([d({type:Object})],ne.prototype,"autoSizeBoundary",2);n([d({attribute:"auto-size-padding",type:Number})],ne.prototype,"autoSizePadding",2);n([d({attribute:"hover-bridge",type:Boolean})],ne.prototype,"hoverBridge",2);ne=n([$("wa-popup")],ne);var nb=_`
  :host {
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
`;var ks=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.position=50}handleDrag(t){const{width:e}=this.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.preventDefault(),nr(this,{onMove:s=>{this.customStates.set("dragging",!0),this.position=parseFloat(Z(s/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:t})}handleKeyDown(t){const e=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const s=t.shiftKey?10:1;let r=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight")&&(r-=s),(e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft")&&(r+=s),t.key==="Home"&&(r=0),t.key==="End"&&(r=100),r=Z(r,0,100),this.position=r}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return f`
      <div id="comparison" class="image" part="base">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${ge({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${ge({left:t?`${100-this.position}%`:`${this.position}%`})}
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
    `}};ks.css=nb;n([A(".handle")],ks.prototype,"handle",2);n([d({type:Number,reflect:!0})],ks.prototype,"position",2);n([R("position",{waitUntilFirstUpdate:!0})],ks.prototype,"handlePositionChange",1);ks=n([$("wa-comparison")],ks);var lb=class extends Event{constructor(t){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var cb=_`
  :host {
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
`;var qe=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let r=this.from,o="";i?[r,o]=this.from.trim().split("."):s&&([r,o]=this.from.trim().replace(/\]$/,"").split("["));const a="getElementById"in e?e.getElementById(r):null;a?s?t=a.getAttribute(o)||"":i?t=a[o]||"":t=a.textContent||"":(this.showStatus("error"),this.dispatchEvent(new ds))}if(!t)this.showStatus("error"),this.dispatchEvent(new ds);else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.dispatchEvent(new lb({value:t}))}catch{this.showStatus("error"),this.dispatchEvent(new ds)}}async showStatus(t){const e=t==="success"?this.successIcon:this.errorIcon;await ue(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=t,e.hidden=!1,await ue(e,"show"),setTimeout(async()=>{await ue(e,"hide"),e.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await ue(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return f`
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
          class=${B({"copy-button":!0,"copy-button-success":this.status==="success","copy-button-error":this.status==="error"})}
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
    `}};qe.css=[bd,cb];n([A('slot[name="copy-icon"]')],qe.prototype,"copyIcon",2);n([A('slot[name="success-icon"]')],qe.prototype,"successIcon",2);n([A('slot[name="error-icon"]')],qe.prototype,"errorIcon",2);n([A("wa-tooltip")],qe.prototype,"tooltip",2);n([S()],qe.prototype,"isCopying",2);n([S()],qe.prototype,"status",2);n([d()],qe.prototype,"value",2);n([d()],qe.prototype,"from",2);n([d({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);n([d({attribute:"copy-label"})],qe.prototype,"copyLabel",2);n([d({attribute:"success-label"})],qe.prototype,"successLabel",2);n([d({attribute:"error-label"})],qe.prototype,"errorLabel",2);n([d({attribute:"feedback-duration",type:Number})],qe.prototype,"feedbackDuration",2);n([d({attribute:"tooltip-placement"})],qe.prototype,"tooltipPlacement",2);qe=n([$("wa-copy-button")],qe);var db=_`
  :host {
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
`;var Ki=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Yi=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var Zi=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var Ji=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};var xe=class extends N{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=!!this.anchor?.matches(":hover"),e=this.matches(":hover");if(t||e)return;clearTimeout(this.hoverTimeout),t||e||(this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay))}}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=Po("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){const s=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);s.includes(e)||(s.push(e),t.setAttribute("aria-labelledby",s.join(" ")))}removeFromAriaLabelledBy(t,e){const r=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(o=>o!==e);r.length>0?t.setAttribute("aria-labelledby",r.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const t=new Ki;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),this.body.hidden=!1,this.popup.active=!0,await ue(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Ji)}else{const t=new Yi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),await ue(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Zi)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,i=this.anchor;if(e===i)return;const{signal:s}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:s}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:s}),e.addEventListener("click",this.handleClick,{signal:s}),e.addEventListener("mouseover",this.handleMouseOver,{signal:s}),e.addEventListener("mouseout",this.handleMouseOut,{signal:s})),i&&(this.removeFromAriaLabelledBy(i,this.id),i.removeEventListener("blur",this.handleBlur,{capture:!0}),i.removeEventListener("focus",this.handleFocus,{capture:!0}),i.removeEventListener("click",this.handleClick),i.removeEventListener("mouseover",this.handleMouseOver),i.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Rt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Rt(this,"wa-after-hide")}render(){return f`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${B({tooltip:!0,"tooltip-open":this.open})}
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
    `}};xe.css=db;xe.dependencies={"wa-popup":ne};n([A("slot:not([name])")],xe.prototype,"defaultSlot",2);n([A(".body")],xe.prototype,"body",2);n([A("wa-popup")],xe.prototype,"popup",2);n([d()],xe.prototype,"placement",2);n([d({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);n([d({type:Number})],xe.prototype,"distance",2);n([d({type:Boolean,reflect:!0})],xe.prototype,"open",2);n([d({type:Number})],xe.prototype,"skidding",2);n([d({attribute:"show-delay",type:Number})],xe.prototype,"showDelay",2);n([d({attribute:"hide-delay",type:Number})],xe.prototype,"hideDelay",2);n([d()],xe.prototype,"trigger",2);n([d({attribute:"without-arrow",type:Boolean,reflect:!0})],xe.prototype,"withoutArrow",2);n([d()],xe.prototype,"for",2);n([S()],xe.prototype,"anchor",2);n([R("open",{waitUntilFirstUpdate:!0})],xe.prototype,"handleOpenChange",1);n([R("for")],xe.prototype,"handleForChange",1);n([R(["distance","placement","skidding"])],xe.prototype,"handleOptionsChange",1);n([R("disabled")],xe.prototype,"handleDisabledChange",1);xe=n([$("wa-tooltip")],xe);var hb=_`
  :host {
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
`;var Ze=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(t){t.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(t){t.composedPath().some(s=>{if(!(s instanceof HTMLElement))return!1;const r=s.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(r)?!0:s instanceof me?!("disabled"in s)||!s.disabled:!1})||(t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(i=>{i!==this&&i.open&&(i.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const t=new Ki;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const e=co(getComputedStyle(this.body).getPropertyValue("--show-duration"));await lo(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new Ji)}else{const t=new Yi;if(this.dispatchEvent(t),t.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const e=co(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await lo(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new Zi)}}async show(){if(!(this.open||this.disabled))return this.open=!0,Rt(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Rt(this,"wa-after-hide")}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return f`
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
          class=${B({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};Ze.css=hb;n([A("details")],Ze.prototype,"details",2);n([A("summary")],Ze.prototype,"header",2);n([A(".body")],Ze.prototype,"body",2);n([A(".expand-icon-slot")],Ze.prototype,"expandIconSlot",2);n([S()],Ze.prototype,"isAnimating",2);n([d({type:Boolean,reflect:!0})],Ze.prototype,"open",2);n([d()],Ze.prototype,"summary",2);n([d({reflect:!0})],Ze.prototype,"name",2);n([d({type:Boolean,reflect:!0})],Ze.prototype,"disabled",2);n([d({reflect:!0})],Ze.prototype,"appearance",2);n([d({attribute:"icon-placement",reflect:!0})],Ze.prototype,"iconPlacement",2);n([R("open",{waitUntilFirstUpdate:!0})],Ze.prototype,"handleOpenChange",1);Ze=n([$("wa-details")],Ze);var ub=_`
  :host {
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
`;function pb(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var ja=new Set;function fb(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function mb(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function fo(t){if(ja.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){const e=fb()+mb();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),e<2&&(i=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",i),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${e}px`)}}function mo(t){ja.delete(t),ja.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function Xa(t,e,i="vertical",s="smooth"){const r=pb(t,e),o=r.top+e.scrollTop,a=r.left+e.scrollLeft,l=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,h=e.scrollTop,u=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(a<l?e.scrollTo({left:a,behavior:s}):a+t.clientWidth>c&&e.scrollTo({left:a-e.offsetWidth+t.clientWidth,behavior:s})),(i==="vertical"||i==="both")&&(o<h?e.scrollTo({top:o,behavior:s}):o+t.clientHeight>u&&e.scrollTo({top:o-e.offsetHeight+t.clientHeight,behavior:s}))}function Dn(t){return t.split(" ").map(e=>e.trim()).filter(e=>e!=="")}var ei=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.hasSlotController=new xt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),fo(this))}disconnectedCallback(){super.disconnectedCallback(),mo(this),this.removeOpenListeners()}async requestClose(t){const e=new Yi({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,ue(this.dialog,"pulse");return}this.removeOpenListeners(),await ue(this.dialog,"hide"),this.open=!1,this.dialog.close(),mo(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.dispatchEvent(new Zi)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(t){t.preventDefault(),!this.dialog.classList.contains("hide")&&t.target===this.dialog&&this.requestClose(this.dialog)}handleDialogClick(t){const i=t.target.closest('[data-dialog="close"]');i&&(t.stopPropagation(),this.requestClose(i))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await ue(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const t=new Ki;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),fo(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await ue(this.dialog,"show"),this.dispatchEvent(new Ji)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return f`
      <dialog
        part="dialog"
        class=${B({dialog:!0,open:this.open})}
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
                    @click="${i=>this.requestClose(i.target)}"
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
    `}};ei.css=ub;n([A(".dialog")],ei.prototype,"dialog",2);n([d({type:Boolean,reflect:!0})],ei.prototype,"open",2);n([d({reflect:!0})],ei.prototype,"label",2);n([d({attribute:"without-header",type:Boolean,reflect:!0})],ei.prototype,"withoutHeader",2);n([d({attribute:"light-dismiss",type:Boolean})],ei.prototype,"lightDismiss",2);n([R("open",{waitUntilFirstUpdate:!0})],ei.prototype,"handleOpenChange",1);ei=n([$("wa-dialog")],ei);document.addEventListener("click",t=>{const e=t.target.closest("[data-dialog]");if(e instanceof Element){const[i,s]=Dn(e.getAttribute("data-dialog")||"");if(i==="open"&&s?.length){const o=e.getRootNode().getElementById(s);o?.localName==="wa-dialog"?o.open=!0:console.warn(`A dialog with an ID of "${s}" could not be found in this document.`)}}});document.addEventListener("pointerdown",()=>{});var gb=_`
  :host {
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
`;var hr=class extends N{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};hr.css=gb;n([d({reflect:!0})],hr.prototype,"orientation",2);n([R("orientation")],hr.prototype,"handleVerticalChange",1);hr=n([$("wa-divider")],hr);var bb=_`
  :host {
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
`;var Vt=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.hasSlotController=new xt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),fo(this))}disconnectedCallback(){super.disconnectedCallback(),mo(this),this.removeOpenListeners()}async requestClose(t){const e=new Yi({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,ue(this.drawer,"pulse");return}this.removeOpenListeners(),await ue(this.drawer,"hide"),this.open=!1,this.drawer.close(),mo(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.dispatchEvent(new Zi)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(t){t.preventDefault(),!this.drawer.classList.contains("hide")&&t.target===this.drawer&&this.requestClose(this.drawer)}handleDialogClick(t){const i=t.target.closest('[data-drawer="close"]');i&&(t.stopPropagation(),this.requestClose(i))}async handleDialogPointerDown(t){t.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await ue(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const t=new Ki;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),fo(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.drawer.focus()}),await ue(this.drawer,"show"),this.dispatchEvent(new Ji)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return f`
      <dialog
        part="dialog"
        class=${B({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
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
                    @click="${i=>this.requestClose(i.target)}"
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
    `}};Vt.css=bb;n([A(".drawer")],Vt.prototype,"drawer",2);n([d({type:Boolean,reflect:!0})],Vt.prototype,"open",2);n([d({reflect:!0})],Vt.prototype,"label",2);n([d({reflect:!0})],Vt.prototype,"placement",2);n([d({attribute:"without-header",type:Boolean,reflect:!0})],Vt.prototype,"withoutHeader",2);n([d({attribute:"light-dismiss",type:Boolean})],Vt.prototype,"lightDismiss",2);n([R("open",{waitUntilFirstUpdate:!0})],Vt.prototype,"handleOpenChange",1);Vt=n([$("wa-drawer")],Vt);document.addEventListener("click",t=>{const e=t.target.closest("[data-drawer]");if(e instanceof Element){const[i,s]=Dn(e.getAttribute("data-drawer")||"");if(i==="open"&&s?.length){const o=e.getRootNode().getElementById(s);o?.localName==="wa-drawer"?o.open=!0:console.warn(`A drawer with an ID of "${s}" could not be found in this document.`)}}});document.body.addEventListener("pointerdown",()=>{});var wb=class extends Event{constructor(t){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var vb=_`
  :host {
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
`;function*Md(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Md(t.shadowRoot.activeElement)))}var va=new Set,st=class extends N{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new ie(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async t=>{const e=this.localize.dir()==="rtl";if(t.key==="Escape"){const u=this.getTrigger();t.preventDefault(),t.stopPropagation(),this.open=!1,u?.focus();return}const i=[...Md()].find(u=>u.localName==="wa-dropdown-item"),s=i?.localName==="wa-dropdown-item",r=this.getCurrentSubmenuItem(),o=!!r;let a,l,c;o?(a=this.getSubmenuItems(r),l=a.find(u=>u.active||u===i),c=l?a.indexOf(l):-1):(a=this.getItems(),l=a.find(u=>u.active||u===i),c=l?a.indexOf(l):-1);let h;if(t.key==="ArrowUp"&&(t.preventDefault(),t.stopPropagation(),c>0?h=a[c-1]:h=a[a.length-1]),t.key==="ArrowDown"&&(t.preventDefault(),t.stopPropagation(),c!==-1&&c<a.length-1?h=a[c+1]:h=a[0]),t.key===(e?"ArrowLeft":"ArrowRight")&&s&&l&&l.hasSubmenu){t.preventDefault(),t.stopPropagation(),l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((p,m)=>p.active=m===0),u[0].focus())},0);return}if(t.key===(e?"ArrowRight":"ArrowLeft")&&o){t.preventDefault(),t.stopPropagation();const u=this.removeFromSubmenuStack();u&&(u.submenuOpen=!1,setTimeout(()=>{u.focus(),u.active=!0,(u.slot==="submenu"?this.getSubmenuItems(u.parentElement):this.getItems()).forEach(m=>{m!==u&&(m.active=!1)})},0));return}if((t.key==="Home"||t.key==="End")&&(t.preventDefault(),t.stopPropagation(),h=t.key==="Home"?a[0]:a[a.length-1]),t.key==="Tab"&&await this.hideMenu(),t.key.length===1&&!(t.metaKey||t.ctrlKey||t.altKey)&&!(t.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=t.key,a.some(u=>{const p=(u.textContent||"").trim().toLowerCase(),m=this.userTypedQuery.trim().toLowerCase();return p.startsWith(m)?(h=u,!0):!1})),h){t.preventDefault(),t.stopPropagation(),a.forEach(u=>u.active=u===h),h.focus();return}(t.key==="Enter"||t.key===" "&&this.userTypedQuery==="")&&s&&l&&(t.preventDefault(),t.stopPropagation(),l.hasSubmenu?(l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((p,m)=>p.active=m===0),u[0].focus())},0)):this.makeSelection(l))},this.handleDocumentPointerDown=t=>{t.composedPath().some(s=>s instanceof HTMLElement?s===this||s.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=t=>{const e=this.getCurrentSubmenuItem();if(!e?.submenuOpen||!e.submenuElement)return;const i=e.submenuElement.getBoundingClientRect(),s=this.localize.dir()==="rtl",r=s?i.right:i.left,o=s?Math.max(t.clientX,r):Math.min(t.clientX,r),a=Math.max(i.top,Math.min(t.clientY,i.bottom));e.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${o}px`),e.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${a}px`);const l=t.composedPath(),c=e.matches(":hover"),h=!!e.submenuElement?.matches(":hover"),u=c||!!l.find(m=>m===e),p=h||!!l.find(m=>m instanceof HTMLElement&&m.closest('[part="submenu"]')===e.submenuElement);!u&&!p&&setTimeout(()=>{!c&&!h&&(e.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(t=>t()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove)}firstUpdated(){this.syncAriaAttributes()}async updated(t){if(t.has("open")){const e=t.get("open");if(e===this.open||e===void 0&&this.open===!1)return;this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}t.has("size")&&this.syncItemSizes()}getItems(t=!1){const e=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(i=>i.localName==="wa-dropdown-item");return t?e:e.filter(i=>!i.disabled)}getSubmenuItems(t,e=!1){const i=t.shadowRoot?.querySelector('slot[name="submenu"]')||t.querySelector('slot[name="submenu"]');if(!i)return[];const s=i.assignedElements({flatten:!0}).filter(r=>r.localName==="wa-dropdown-item");return e?s:s.filter(r=>!r.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName==="wa-dropdown-item").forEach(e=>e.size=this.size)}addToSubmenuStack(t){const e=this.openSubmenuStack.indexOf(t);e!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,e+1):this.openSubmenuStack.push(t)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(t){const e=t.closest('wa-dropdown-item:not([slot="submenu"])');let i;e?i=this.getSubmenuItems(e,!0):i=this.getItems(!0),i.forEach(s=>{s!==t&&s.submenuOpen&&(s.submenuOpen=!1)}),this.openSubmenuStack.includes(t)||this.openSubmenuStack.push(t)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;const e=new Ki;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}if(this.popup.active)return;va.forEach(s=>s.open=!1),this.popup.active=!0,this.open=!0,va.add(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await ue(this.menu,"show");const i=this.getItems();i.length>0&&(i.forEach((s,r)=>s.active=r===0),i[0].focus()),this.dispatchEvent(new Ji)}async hideMenu(){if(!this.popup||!this.menu)return;const t=new Yi({source:this});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}this.open=!1,va.delete(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await ue(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new Zi)}handleMenuClick(t){const e=t.target.closest("wa-dropdown-item");if(!(!e||e.disabled)){if(e.hasSubmenu){e.submenuOpen||(this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),e.submenuOpen=!0),t.stopPropagation();return}this.makeSelection(e)}}async handleMenuSlotChange(){const t=this.getItems(!0);await Promise.all(t.map(s=>s.updateComplete)),this.syncItemSizes();const e=t.some(s=>s.type==="checkbox"),i=t.some(s=>s.hasSubmenu);t.forEach((s,r)=>{s.active=r===0,s.checkboxAdjacent=e,s.submenuAdjacent=i})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(t){const e=t.detail.item;this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),this.setupSubmenuPosition(e),this.processSubmenuItems(e)}setupSubmenuPosition(t){if(!t.submenuElement)return;this.cleanupSubmenuPosition(t);const e=Id(t,t.submenuElement,()=>{this.positionSubmenu(t),this.updateSafeTriangleCoordinates(t)});this.submenuCleanups.set(t,e);const i=t.submenuElement.querySelector('slot[name="submenu"]');i&&(i.removeEventListener("slotchange",st.handleSubmenuSlotChange),i.addEventListener("slotchange",st.handleSubmenuSlotChange),st.handleSubmenuSlotChange({target:i}))}static handleSubmenuSlotChange(t){const e=t.target;if(!e)return;const i=e.assignedElements().filter(o=>o.localName==="wa-dropdown-item");if(i.length===0)return;const s=i.some(o=>o.hasSubmenu),r=i.some(o=>o.type==="checkbox");i.forEach(o=>{o.submenuAdjacent=s,o.checkboxAdjacent=r})}processSubmenuItems(t){if(!t.submenuElement)return;const e=this.getSubmenuItems(t,!0),i=e.some(s=>s.hasSubmenu);e.forEach(s=>{s.submenuAdjacent=i})}cleanupSubmenuPosition(t){const e=this.submenuCleanups.get(t);e&&(e(),this.submenuCleanups.delete(t))}positionSubmenu(t){if(!t.submenuElement)return;const i=this.localize.dir()==="rtl"?"left-start":"right-start";Pd(t,t.submenuElement,{placement:i,middleware:[Od({mainAxis:0,crossAxis:-5}),zd({fallbackStrategy:"bestFit"}),Dd({padding:8})]}).then(({x:s,y:r,placement:o})=>{t.submenuElement.setAttribute("data-placement",o),Object.assign(t.submenuElement.style,{left:`${s}px`,top:`${r}px`})})}updateSafeTriangleCoordinates(t){if(!t.submenuElement||!t.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){t.submenuElement.style.setProperty("--safe-triangle-visible","none");return}t.submenuElement.style.setProperty("--safe-triangle-visible","block");const i=t.submenuElement.getBoundingClientRect(),s=this.localize.dir()==="rtl";t.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${s?i.right:i.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${i.top}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${s?i.right:i.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${i.bottom}px`)}makeSelection(t){const e=this.getTrigger();if(t.disabled)return;t.type==="checkbox"&&(t.checked=!t.checked);const i=new wb({item:t});this.dispatchEvent(i),i.defaultPrevented||(this.open=!1,e?.focus())}async syncAriaAttributes(){const t=this.getTrigger();let e;t&&(t.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await t.updateComplete,e=t.shadowRoot.querySelector('[part="base"]')):e=t,e.hasAttribute("id")||e.setAttribute("id",Po("wa-dropdown-trigger-")),e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded",this.open?"true":"false"),this.menu?.setAttribute("aria-expanded","false"))}render(){let t=this.hasUpdated?this.popup?.active:this.open;return f`
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
    `}};st.css=[Qe,vb];n([A("slot:not([name])")],st.prototype,"defaultSlot",2);n([A("#menu")],st.prototype,"menu",2);n([A("wa-popup")],st.prototype,"popup",2);n([d({type:Boolean,reflect:!0})],st.prototype,"open",2);n([d({reflect:!0})],st.prototype,"size",2);n([d({reflect:!0})],st.prototype,"placement",2);n([d({type:Number})],st.prototype,"distance",2);n([d({type:Number})],st.prototype,"skidding",2);st=n([$("wa-dropdown")],st);var yb=_`
  :host {
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
      var(--wa-transition-fast) background-color var(--wa-transition-easing),
      var(--wa-transition-fast) color var(--wa-transition-easing);
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
`;var Je=class extends N{constructor(){super(...arguments),this.hasSlotController=new xt(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(t){t.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),t.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),t.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){const t=this.submenuElement;!this.hasSubmenu||!t||!this.isConnected||(this.notifyParentOfOpening(),t.showPopover?.(),t.hidden=!1,t.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await ue(t,"show"),setTimeout(()=>{const e=this.getSubmenuItems();e.length>0&&(e.forEach((i,s)=>i.active=s===0),e[0].focus())},0))}notifyParentOfOpening(){const t=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(t);const e=this.parentElement;e&&[...e.children].filter(s=>s!==this&&s.localName==="wa-dropdown-item"&&s.getAttribute("slot")===this.getAttribute("slot")&&s.submenuOpen).forEach(s=>{s.submenuOpen=!1})}async closeSubmenu(){const t=this.submenuElement;!this.hasSubmenu||!t||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),t.hidden||(await ue(t,"hide"),t?.isConnected&&(t.hidden=!0,t.removeAttribute("data-visible"),t.hidePopover?.())))}getSubmenuItems(){return[...this.children].filter(t=>t.localName==="wa-dropdown-item"&&t.getAttribute("slot")==="submenu"&&!t.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return f`
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
    `}};Je.css=yb;n([A("#submenu")],Je.prototype,"submenuElement",2);n([d({type:Boolean})],Je.prototype,"active",2);n([d({reflect:!0})],Je.prototype,"variant",2);n([d({reflect:!0})],Je.prototype,"size",2);n([d({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],Je.prototype,"checkboxAdjacent",2);n([d({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],Je.prototype,"submenuAdjacent",2);n([d()],Je.prototype,"value",2);n([d({reflect:!0})],Je.prototype,"type",2);n([d({type:Boolean})],Je.prototype,"checked",2);n([d({type:Boolean,reflect:!0})],Je.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],Je.prototype,"submenuOpen",2);n([S()],Je.prototype,"hasSubmenu",2);Je=n([$("wa-dropdown-item")],Je);var ur=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?t:e,s=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),r=i[s]+this.unit,o=parseFloat((this.value/Math.pow(1e3,s)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:r,unitDisplay:this.display})}};n([d({type:Number})],ur.prototype,"value",2);n([d()],ur.prototype,"unit",2);n([d()],ur.prototype,"display",2);ur=n([$("wa-format-bytes")],ur);var rt=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(t.getMilliseconds()))return;const i=this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e});return f`<time datetime=${t.toISOString()}>${i}</time>`}};n([d()],rt.prototype,"date",2);n([d()],rt.prototype,"weekday",2);n([d()],rt.prototype,"era",2);n([d()],rt.prototype,"year",2);n([d()],rt.prototype,"month",2);n([d()],rt.prototype,"day",2);n([d()],rt.prototype,"hour",2);n([d()],rt.prototype,"minute",2);n([d()],rt.prototype,"second",2);n([d({attribute:"time-zone-name"})],rt.prototype,"timeZoneName",2);n([d({attribute:"time-zone"})],rt.prototype,"timeZone",2);n([d({attribute:"hour-format"})],rt.prototype,"hourFormat",2);rt=n([$("wa-format-date")],rt);var Et=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};n([d({type:Number})],Et.prototype,"value",2);n([d()],Et.prototype,"type",2);n([d({attribute:"without-grouping",type:Boolean})],Et.prototype,"withoutGrouping",2);n([d()],Et.prototype,"currency",2);n([d({attribute:"currency-display"})],Et.prototype,"currencyDisplay",2);n([d({attribute:"minimum-integer-digits",type:Number})],Et.prototype,"minimumIntegerDigits",2);n([d({attribute:"minimum-fraction-digits",type:Number})],Et.prototype,"minimumFractionDigits",2);n([d({attribute:"maximum-fraction-digits",type:Number})],Et.prototype,"maximumFractionDigits",2);n([d({attribute:"minimum-significant-digits",type:Number})],Et.prototype,"minimumSignificantDigits",2);n([d({attribute:"maximum-significant-digits",type:Number})],Et.prototype,"maximumSignificantDigits",2);Et=n([$("wa-format-number")],Et);var Nl=class extends Event{constructor(t){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var xb=_`
  :host {
    display: block;
  }
`;var ya=new Map;function kb(t,e="cors"){const i=ya.get(t);if(i!==void 0)return Promise.resolve(i);const s=fetch(t,{mode:e}).then(async r=>{const o={ok:r.ok,status:r.status,html:await r.text()};return ya.set(t,o),o});return ya.set(t,s),s}var Vi=class extends N{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(i=>e.setAttribute(i.name,i.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await kb(t,this.mode);if(t!==this.src)return;if(!e.ok){this.dispatchEvent(new Nl({status:e.status}));return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.dispatchEvent(new _n)}catch{this.dispatchEvent(new Nl({status:-1}))}}render(){return f`<slot></slot>`}};Vi.css=xb;n([d()],Vi.prototype,"src",2);n([d()],Vi.prototype,"mode",2);n([d({attribute:"allow-scripts",type:Boolean})],Vi.prototype,"allowScripts",2);n([R("src")],Vi.prototype,"handleSrcChange",1);Vi=n([$("wa-include")],Vi);var Cb=class extends Event{constructor(t){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Eb=_`
  :host {
    display: contents;
  }
`;var Dt=class extends N{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.dispatchEvent(new Cb({mutationList:t}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return f` <slot></slot> `}};Dt.css=Eb;n([d({reflect:!0})],Dt.prototype,"attr",2);n([d({attribute:"attr-old-value",type:Boolean,reflect:!0})],Dt.prototype,"attrOldValue",2);n([d({attribute:"char-data",type:Boolean,reflect:!0})],Dt.prototype,"charData",2);n([d({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Dt.prototype,"charDataOldValue",2);n([d({attribute:"child-list",type:Boolean,reflect:!0})],Dt.prototype,"childList",2);n([d({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);n([R("disabled")],Dt.prototype,"handleDisabledChange",1);n([R("attr",{waitUntilFirstUpdate:!0}),R("attr-old-value",{waitUntilFirstUpdate:!0}),R("char-data",{waitUntilFirstUpdate:!0}),R("char-data-old-value",{waitUntilFirstUpdate:!0}),R("childList",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleChange",1);Dt=n([$("wa-mutation-observer")],Dt);var $b=_`
  :host {
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
`;var xa=new Set,Ve=class extends N{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=t=>{t.target.closest('[data-popover="close"]')&&(t.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.preventDefault(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=t=>{this.anchor&&t.composedPath().includes(this.anchor)||t.composedPath().includes(this)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=Po("wa-popover-")),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.for&&this.anchor&&(this.anchor=null,this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(t){t.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const t=new Ki;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}xa.forEach(e=>e.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,xa.add(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await ue(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Ji)}else{const t=new Yi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),xa.delete(this),await ue(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new Zi)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,i=this.anchor;if(e===i)return;const{signal:s}=this.eventController;e&&e.addEventListener("click",this.handleAnchorClick,{signal:s}),i&&i.removeEventListener("click",this.handleAnchorClick),this.anchor=e,this.for&&!e&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,Rt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Rt(this,"wa-after-hide")}render(){return f`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${B({popover:!0,"popover-open":this.open})}
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
    `}};Ve.css=$b;Ve.dependencies={"wa-popup":ne};n([A("dialog")],Ve.prototype,"dialog",2);n([A(".body")],Ve.prototype,"body",2);n([A("wa-popup")],Ve.prototype,"popup",2);n([S()],Ve.prototype,"anchor",2);n([d()],Ve.prototype,"placement",2);n([d({type:Boolean,reflect:!0})],Ve.prototype,"open",2);n([d({type:Number})],Ve.prototype,"distance",2);n([d({type:Number})],Ve.prototype,"skidding",2);n([d()],Ve.prototype,"for",2);n([d({attribute:"without-arrow",type:Boolean,reflect:!0})],Ve.prototype,"withoutArrow",2);n([R("open",{waitUntilFirstUpdate:!0})],Ve.prototype,"handleOpenChange",1);n([R("for")],Ve.prototype,"handleForChange",1);n([R(["distance","placement","skidding"])],Ve.prototype,"handleOptionsChange",1);Ve=n([$("wa-popover")],Ve);var Sb=_`
  :host {
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
`;var Cs=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.indeterminate=!1,this.label=""}updated(t){t.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${Z(this.value,0,100)}%`)})}render(){return f`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${q(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":f` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};Cs.css=Sb;n([d({type:Number,reflect:!0})],Cs.prototype,"value",2);n([d({type:Boolean,reflect:!0})],Cs.prototype,"indeterminate",2);n([d()],Cs.prototype,"label",2);Cs=n([$("wa-progress-bar")],Cs);var Ab=_`
  :host {
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
`;var Hi=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*e,s=i-this.value/100*i;this.indicatorOffset=`${s}px`}}render(){return f`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${ge({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${ge({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};Hi.css=Ab;n([A(".indicator")],Hi.prototype,"indicator",2);n([S()],Hi.prototype,"indicatorOffset",2);n([d({type:Number,reflect:!0})],Hi.prototype,"value",2);n([d()],Hi.prototype,"label",2);Hi=n([$("wa-progress-ring")],Hi);const _b="modulepreload",Tb=function(t){return"/"+t},Fl={},ke=function(e,i,s){let r=Promise.resolve();if(i&&i.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=c(i.map(h=>{if(h=Tb(h),h in Fl)return;Fl[h]=!0;const u=h.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":_b,u||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((b,w)=>{m.addEventListener("load",b),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};var Lb=_`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
  }

  canvas {
    width: 100%;
    height: 100%;
    /* We force a near-instant transition so we can listen for transitionend when the color changes */
    transition: color 1ms;
  }
`,ka,vt=class extends N{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="",this.background="",this.radius=0,this.errorCorrection="H",this.generated=!1}firstUpdated(t){super.firstUpdated(t),this.hasUpdated&&this.generate()}generate(){if(!this.hasUpdated)return;if(!ka){ke(()=>import("./qr-creator.es6.min-DtlEF1Ls.js"),[]).then(e=>{ka=e.default,this.generate()});return}this.canvas.style.maxWidth=`${this.size}px`,this.canvas.style.maxHeight=`${this.size}px`;const t=getComputedStyle(this);ka.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill||t.color,background:this.background||null,size:this.size*2},this.canvas),this.generated=!0}render(){return f`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        @transitionend=${t=>{t.propertyName==="color"&&this.generate()}}
      ></canvas>
    `}};vt.css=Lb;n([A("canvas")],vt.prototype,"canvas",2);n([d()],vt.prototype,"value",2);n([d()],vt.prototype,"label",2);n([d({type:Number})],vt.prototype,"size",2);n([d()],vt.prototype,"fill",2);n([d()],vt.prototype,"background",2);n([d({type:Number})],vt.prototype,"radius",2);n([d({attribute:"error-correction"})],vt.prototype,"errorCorrection",2);n([S()],vt.prototype,"generated",2);n([R(["background","errorCorrection","fill","radius","size","value"],{waitUntilFirstUpdate:!0})],vt.prototype,"generate",1);vt=n([$("wa-qr-code")],vt);var Rb=_`
  :host {
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
`;var je=class extends me{constructor(){super(),this.hasSlotController=new xt(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("wa-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const i=this.value;this.value=e.value,e.checked=!0;const s=this.getAllRadios();for(const r of s)e!==r&&(r.checked=!1,r.setAttribute("tabindex","-1"));this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const t=[Mo({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:Po("__wa-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}get validationTarget(){const t=this.querySelector(":is(wa-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("size")||t.has("value"))&&this.syncRadioElements()}formResetCallback(...t){this.value=this.defaultValue,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();if(t.forEach((e,i)=>{this.size&&e.setAttribute("size",this.size),e.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),e.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),e.toggleAttribute("data-wa-radio-first",i===0),e.toggleAttribute("data-wa-radio-inner",i!==0&&i!==t.length-1),e.toggleAttribute("data-wa-radio-last",i===t.length-1),e.forceDisabled=this.disabled}),await Promise.all(t.map(async e=>{await e.updateComplete,!e.disabled&&e.value===this.value?e.checked=!0:e.checked=!1})),this.disabled)t.forEach(e=>{e.tabIndex=-1});else{const e=t.filter(s=>!s.disabled),i=e.find(s=>s.checked);e.length>0&&(i?e.forEach(s=>{s.tabIndex=s.checked?0:-1}):e.forEach((s,r)=>{s.tabIndex=r===0?0:-1})),t.filter(s=>s.disabled).forEach(s=>{s.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter(l=>!l.disabled);if(e.length<=0)return;t.preventDefault();const i=this.value,s=e.find(l=>l.checked)??e[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let o=e.indexOf(s)+r;o||(o=0),o<0&&(o=e.length-1),o>e.length-1&&(o=0);const a=e.some(l=>l.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(l=>{l.checked=!1,a||l.setAttribute("tabindex","-1")}),this.value=e[o].value,e[o].checked=!0,a?e[o].shadowRoot.querySelector("button").focus():(e[o].setAttribute("tabindex","0"),e[o].focus()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),i=e.find(o=>o.checked),s=e.find(o=>!o.disabled),r=i||s;r&&r.focus(t)}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!t,s=this.hint?!0:!!e;return f`
      <fieldset
        part="form-control"
        class=${B({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class=${B({label:!0,"has-label":i})}
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${B({"has-slotted":s})}
          aria-hidden=${s?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};je.css=[Qe,ri,Rb];je.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0};n([A("slot:not([name])")],je.prototype,"defaultSlot",2);n([d()],je.prototype,"label",2);n([d({attribute:"hint"})],je.prototype,"hint",2);n([d({reflect:!0})],je.prototype,"name",2);n([d({type:Boolean,reflect:!0})],je.prototype,"disabled",2);n([d({reflect:!0})],je.prototype,"orientation",2);n([S()],je.prototype,"value",1);n([d({attribute:"value",reflect:!0})],je.prototype,"defaultValue",2);n([d({reflect:!0})],je.prototype,"size",2);n([d({type:Boolean,reflect:!0})],je.prototype,"required",2);n([d({type:Boolean,attribute:"with-label"})],je.prototype,"withLabel",2);n([d({type:Boolean,attribute:"with-hint"})],je.prototype,"withHint",2);je=n([$("wa-radio-group")],je);var Ib=_`
  :host {
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
    outline: var(--wa-focus-ring);
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
`;var ti=class extends me{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.appearance="default",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return f`
      <span part="control" class="control">
        ${this.checked?f`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};ti.css=[ri,Qe,Ib];n([S()],ti.prototype,"checked",2);n([S()],ti.prototype,"forceDisabled",2);n([d({reflect:!0})],ti.prototype,"value",2);n([d({reflect:!0})],ti.prototype,"appearance",2);n([d({reflect:!0})],ti.prototype,"size",2);n([d({type:Boolean})],ti.prototype,"disabled",2);ti=n([$("wa-radio")],ti);var Ul=class extends Event{constructor(t){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Ob=_`
  :host {
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
`;var He=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=(t,e)=>e?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="medium"}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:i,right:s,width:r}=this.rating.getBoundingClientRect(),o=e?this.roundToPrecision((s-t)/r*this.max,this.precision):this.roundToPrecision((t-i)/r*this.max,this.precision);return Z(o,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl",s=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"){const r=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"){const r=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==s&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}roundToPrecision(t,e=.5){const i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.dispatchEvent(new Ul({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new Ul({phase:this.isHovering?"start":"end",value:this.hoverValue}))}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir,e=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,f`
      <div
        part="base"
        class=${B({rating:!0,"rating-readonly":this.readonly,"rating-disabled":this.disabled})}
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
          ${e.map(s=>{const r=i>=s+1;return i>s&&i<s+1?f`
                <span
                  class=${B({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(i)===s+1})}
                  role="presentation"
                >
                  <div
                    style=${ge({clipPath:t?`inset(0 ${(i-s)*100}% 0 0)`:`inset(0 0 0 ${(i-s)*100}%)`})}
                  >
                    ${Zt(this.getSymbol(s+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${ge({clipPath:t?`inset(0 0 0 ${100-(i-s)*100}%)`:`inset(0 ${100-(i-s)*100}% 0 0)`})}
                  >
                    ${Zt(this.getSymbol(s+1,!0))}
                  </div>
                </span>
              `:f`
              <span
                class=${B({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(i)===s+1,"symbol-active":i>=s+1})}
                role="presentation"
              >
                ${Zt(this.getSymbol(s+1,r))}
              </span>
            `})}
        </span>
      </div>
    `}};He.css=[Qe,Ob];n([A(".rating")],He.prototype,"rating",2);n([S()],He.prototype,"hoverValue",2);n([S()],He.prototype,"isHovering",2);n([d()],He.prototype,"label",2);n([d({type:Number})],He.prototype,"value",2);n([d({type:Number})],He.prototype,"max",2);n([d({type:Number})],He.prototype,"precision",2);n([d({type:Boolean,reflect:!0})],He.prototype,"readonly",2);n([d({type:Boolean,reflect:!0})],He.prototype,"disabled",2);n([d()],He.prototype,"getSymbol",2);n([d({reflect:!0})],He.prototype,"size",2);n([Co({passive:!0})],He.prototype,"handleTouchMove",1);n([R("hoverValue")],He.prototype,"handleHoverValueChange",1);n([R("isHovering")],He.prototype,"handleIsHoveringChange",1);He=n([$("wa-rating")],He);var Db=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],ki=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=e.getTime()-t.getTime(),{unit:s,value:r}=Db.find(o=>Math.abs(i)<o.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/r),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;s==="minute"?o=Br("second"):s==="hour"?o=Br("minute"):s==="day"?o=Br("hour"):o=Br("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),o)}return f`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};n([S()],ki.prototype,"isoTime",2);n([S()],ki.prototype,"relativeTime",2);n([d()],ki.prototype,"date",2);n([d()],ki.prototype,"format",2);n([d()],ki.prototype,"numeric",2);n([d({type:Boolean})],ki.prototype,"sync",2);ki=n([$("wa-relative-time")],ki);function Br(t){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return i-Date.now()%i}var zb=class extends Event{constructor(t){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Pb=_`
  :host {
    display: contents;
  }
`;var pr=class extends N{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.dispatchEvent(new zb({entries:t}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],e.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return f` <slot @slotchange=${this.handleSlotChange}></slot> `}};pr.css=Pb;n([d({type:Boolean,reflect:!0})],pr.prototype,"disabled",2);n([R("disabled",{waitUntilFirstUpdate:!0})],pr.prototype,"handleDisabledChange",1);pr=n([$("wa-resize-observer")],pr);var Mb=_`
  :host {
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

  #start-shadow,
  #end-shadow {
    z-index: 2;
  }

  #start-shadow {
    opacity: var(--start-shadow-opacity);
  }

  #end-shadow {
    opacity: var(--end-shadow-opacity);
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
      right: 0;
      left: 0;
      height: var(--shadow-size);
      pointer-events: none;
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
`;var ii=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(t){t.key==="Home"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),t.key==="End"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const t=Math.ceil(this.content.clientWidth),e=Math.abs(Math.ceil(this.content.scrollLeft)),s=Math.ceil(this.content.scrollWidth)-t;this.canScroll=s>0;const r=Math.min(1,e/(s*.05)),o=Math.min(1,(s-e)/(s*.05));this.style.setProperty("--start-shadow-opacity",String(r||0)),this.style.setProperty("--end-shadow-opacity",String(o||0))}else{const t=Math.ceil(this.content.clientHeight),e=Math.abs(Math.ceil(this.content.scrollTop)),s=Math.ceil(this.content.scrollHeight)-t;this.canScroll=s>0;const r=Math.min(1,e/(s*.05)),o=Math.min(1,(s-e)/(s*.05));this.style.setProperty("--start-shadow-opacity",String(r||0)),this.style.setProperty("--end-shadow-opacity",String(o||0))}}render(){return f`
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
    `}};ii.css=[Mb];n([A("#content")],ii.prototype,"content",2);n([S()],ii.prototype,"canScroll",2);n([d({reflect:!0})],ii.prototype,"orientation",2);n([d({attribute:"without-scrollbar",type:Boolean,reflect:!0})],ii.prototype,"withoutScrollbar",2);n([d({attribute:"without-shadow",type:Boolean,reflect:!0})],ii.prototype,"withoutShadow",2);n([Co({passive:!0})],ii.prototype,"updateScroll",1);ii=n([$("wa-scroller")],ii);var Nb=_`
  :host {
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
`;var J=class extends me{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new xt(this,"hint","label"),this.localize=new ie(this),this.selectionOrder=new Map,this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=t=>f`
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
          data-value=${t.value}
          @wa-remove=${e=>this.handleTagRemove(e,t)}
        >
          ${t.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=e.closest('[part~="clear-button"]')!==null,s=e.closest("wa-button")!==null;if(!(i||s)){if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),o=r.indexOf(this.currentOption);let a=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(a=o+1,a>r.length-1&&(a=0)):t.key==="ArrowUp"?(a=o-1,a<0&&(a=r.length-1)):t.key==="Home"?a=0:t.key==="End"&&(a=r.length-1),this.setCurrentOption(r[a])}if(t.key?.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const o of r)if(o.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static get validators(){const t=[Mo({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...t]}get validationTarget(){return this.valueInput}set defaultValue(t){this._defaultValue=this.convertDefaultValue(t)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(t){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(t)&&(t=t[0]),t}set value(t){let e=this.value;t instanceof FormData&&(t=t.getAll(this.name)),t!=null&&!Array.isArray(t)&&(t=[t]),this._value=t??null,this.value!==e&&(this.valueHasChanged=!0,this.requestUpdate("value",e))}get value(){let t=this._value??this.defaultValue??null;t!=null&&(t=Array.isArray(t)?t:[t]),t==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(i=>!i.disabled).map(i=>i.value));let e=t;return t!=null&&(e=t.filter(i=>this.optionValues.has(i)),e=this.multiple?e:e[0],e=e??null),e}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){const e=this.getAllOptions().filter(i=>i.hasAttribute("selected")||i.defaultSelected);if(e.length>0){const i=e.map(s=>s.value);this._defaultValue=this.multiple?i:i[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(t){t.preventDefault()}handleComboboxMouseDown(t){const i=t.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="wa-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==null&&(this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new vd),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("wa-option");i&&!i.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let e=this.value;if(e==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(e)||(e=[e]);const i=t.filter(s=>e.includes(s.value));this.setSelectedOptions(i)}handleTagRemove(t,e){if(t.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let i=e;if(!i){const s=t.target.closest("wa-tag[data-value]");if(s){const r=s.dataset.value;i=this.selectedOptions.find(o=>o.value===r)}}i&&(this.toggleOptionSelection(i,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(s=>{i.includes(s)||(s.selected=!1)}),i.length&&i.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){const e=this.getAllOptions().filter(a=>{if(!this.hasInteracted&&!this.valueHasChanged){const l=this.defaultValue,c=Array.isArray(l)?l:[l];return a.hasAttribute("selected")||a.defaultSelected||a.selected||c?.includes(a.value)}return a.selected}),i=new Set(e.map(a=>a.value));for(const a of this.selectionOrder.keys())i.has(a)||this.selectionOrder.delete(a);let r=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(const a of e)this.selectionOrder.has(a.value)||this.selectionOrder.set(a.value,r++);this.selectedOptions=e.sort((a,l)=>{const c=this.selectionOrder.get(a.value)??0,h=this.selectionOrder.get(l.value)??0;return c-h});let o=new Set(this.selectedOptions.map(a=>a.value));if(o.size>0||this._value){const a=this._value;if(this._value==null){let l=this.defaultValue??[];this._value=Array.isArray(l)?l:[l]}this._value=this._value?.filter(l=>!this.optionValues?.has(l))??null,this._value?.unshift(...o),this.requestUpdate("value",a)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const a=this.selectedOptions[0];this.displayLabel=a?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return i?typeof i=="string"?Zt(i):i:null}else if(e===this.maxOptionsVisible)return f`
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
        `;return null})}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],i=t.filter(s=>e.includes(s.value));this.setSelectedOptions(i),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const t=new Ki;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await ue(this.popup.popup,"show"),this.currentOption&&Xa(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new Ji)}else{const t=new Yi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await ue(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Zi)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Rt(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Rt(this,"wa-after-hide")}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!t,s=this.hint?!0:!!e,r=(this.hasUpdated||Gh)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,o=!!(this.placeholder&&(!this.value||this.value.length===0));return f`
      <div
        part="form-control"
        class=${B({"form-control":!0,"form-control-has-label":i})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${B({label:!0,"has-label":i})}
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${B({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":o})}
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
          class=${B({"has-slotted":s})}
          aria-hidden=${s?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};J.css=[Nb,ri,Qe];n([A(".select")],J.prototype,"popup",2);n([A(".combobox")],J.prototype,"combobox",2);n([A(".display-input")],J.prototype,"displayInput",2);n([A(".value-input")],J.prototype,"valueInput",2);n([A(".listbox")],J.prototype,"listbox",2);n([S()],J.prototype,"displayLabel",2);n([S()],J.prototype,"currentOption",2);n([S()],J.prototype,"selectedOptions",2);n([S()],J.prototype,"optionValues",2);n([d({reflect:!0})],J.prototype,"name",2);n([d({attribute:!1})],J.prototype,"defaultValue",1);n([d({attribute:"value",reflect:!1})],J.prototype,"value",1);n([d({reflect:!0})],J.prototype,"size",2);n([d()],J.prototype,"placeholder",2);n([d({type:Boolean,reflect:!0})],J.prototype,"multiple",2);n([d({attribute:"max-options-visible",type:Number})],J.prototype,"maxOptionsVisible",2);n([d({type:Boolean})],J.prototype,"disabled",2);n([d({attribute:"with-clear",type:Boolean})],J.prototype,"withClear",2);n([d({type:Boolean,reflect:!0})],J.prototype,"open",2);n([d({reflect:!0})],J.prototype,"appearance",2);n([d({type:Boolean,reflect:!0})],J.prototype,"pill",2);n([d()],J.prototype,"label",2);n([d({reflect:!0})],J.prototype,"placement",2);n([d({attribute:"hint"})],J.prototype,"hint",2);n([d({attribute:"with-label",type:Boolean})],J.prototype,"withLabel",2);n([d({attribute:"with-hint",type:Boolean})],J.prototype,"withHint",2);n([d({type:Boolean,reflect:!0})],J.prototype,"required",2);n([d({attribute:!1})],J.prototype,"getTag",2);n([R("disabled",{waitUntilFirstUpdate:!0})],J.prototype,"handleDisabledChange",1);n([R("value",{waitUntilFirstUpdate:!0})],J.prototype,"handleValueChange",1);n([R("open",{waitUntilFirstUpdate:!0})],J.prototype,"handleOpenChange",1);J=n([$("wa-select")],J);var Fb=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}};var Ub=_`
  @layer wa-component {
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
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`;var Ci=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.variant="neutral",this.appearance="filled-outlined",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new Fb)}render(){return f`
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
    `}};Ci.css=[Ub,Do,Qe];n([d({reflect:!0})],Ci.prototype,"variant",2);n([d({reflect:!0})],Ci.prototype,"appearance",2);n([d({reflect:!0})],Ci.prototype,"size",2);n([d({type:Boolean,reflect:!0})],Ci.prototype,"pill",2);n([d({attribute:"with-remove",type:Boolean})],Ci.prototype,"withRemove",2);Ci=n([$("wa-tag")],Ci);var Bb=_`
  :host {
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
`;function er(t,e=0){if(!t||!globalThis.Node)return"";if(typeof t[Symbol.iterator]=="function")return(Array.isArray(t)?t:[...t]).map(r=>er(r,--e)).join("");let i=t;if(i.nodeType===Node.TEXT_NODE)return i.textContent??"";if(i.nodeType===Node.ELEMENT_NODE){let s=i;if(s.hasAttribute("slot")||s.matches("style, script"))return"";if(s instanceof HTMLSlotElement){let r=s.assignedNodes({flatten:!0});if(r.length>0)return er(r,--e)}return e>-1?er(s,--e):s.textContent??""}return i.hasChildNodes()?er(i.childNodes,--e):""}var zt=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=t=>{t.type==="mouseenter"?this.customStates.set("hover",!0):t.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(t){const e=this._label;this._label=t||"",this._label!==e&&this.requestUpdate("label",e)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?(customElements.whenDefined("wa-select").then(()=>{const t=this.closest("wa-select");t&&(t.handleDefaultSlotChange(),t.selectionChanged?.())}),customElements.whenDefined("wa-combobox").then(()=>{const t=this.closest("wa-combobox");t&&(t.handleDefaultSlotChange(),t.selectionChanged?.())})):this.isInitialized=!0}willUpdate(t){if(t.has("defaultSelected")&&!this.closest("wa-combobox, wa-select")?.hasInteracted){const e=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",e)}super.willUpdate(t)}updated(t){super.updated(t),t.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),t.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),t.has("current")&&this.customStates.set("current",this.current)}updateDefaultLabel(){let t=this.defaultLabel;this.defaultLabel=er(this).trim();let e=this.defaultLabel!==t;return!this._label&&e&&this.requestUpdate("label",t),e}render(){return f`
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
    `}};zt.css=Bb;n([A(".label")],zt.prototype,"defaultSlot",2);n([S()],zt.prototype,"current",2);n([d({reflect:!0})],zt.prototype,"value",2);n([d({type:Boolean})],zt.prototype,"disabled",2);n([d({type:Boolean,attribute:!1})],zt.prototype,"selected",2);n([d({type:Boolean,attribute:"selected"})],zt.prototype,"defaultSelected",2);n([d()],zt.prototype,"label",1);n([S()],zt.prototype,"defaultLabel",2);zt=n([$("wa-option")],zt);var qb=_`
  :host {
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
`;var go=class extends N{constructor(){super(...arguments),this.effect="none"}render(){return f` <div part="indicator" class="indicator"></div> `}};go.css=qb;n([d({reflect:!0})],go.prototype,"effect",2);go=n([$("wa-skeleton")],go);var Vb=_`
  :host {
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
`;var Hb=()=>{const t=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(e){const i={message:"",isValid:!0,invalidKeys:[]},s=(r,o,a,l)=>{const c=document.createElement("input");return c.type="range",c.min=String(o),c.max=String(a),c.step=String(l),c.value=String(r),c.checkValidity(),c.validationMessage};if(e.required&&!e.hasInteracted)return i.isValid=!1,i.invalidKeys.push("valueMissing"),i.message=t.validationMessage||"Please fill out this field.",i;if(e.isRange){const r=e.minValue,o=e.maxValue;if(r<e.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=s(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,i;if(o>e.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=s(o,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,i;if(e.step&&e.step!==1){const a=(r-e.min)%e.step!==0,l=(o-e.min)%e.step!==0;if(a||l){i.isValid=!1,i.invalidKeys.push("stepMismatch");const c=a?r:o;return i.message=s(c,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,i}}}else{const r=e.value;if(r<e.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=s(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,i;if(r>e.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=s(r,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,i;if(e.step&&e.step!==1&&(r-e.min)%e.step!==0)return i.isValid=!1,i.invalidKeys.push("stepMismatch"),i.message=s(r,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,i}return i}}},Q=class extends me{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new xt(this,"hint","label"),this.localize=new ie(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=this.defaultValue,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,Hb()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){t=Number(t)??this.minValue,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new zr(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new zr(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new zr(this.track,{start:(t,e)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const i=this.getValueFromCoordinates(t,e),s=Math.abs(i-this.minValue),r=Math.abs(i-this.maxValue);if(s===r)if(i>this.maxValue)this.activeThumb="max";else if(i<this.minValue)this.activeThumb="min";else{const o=this.localize.dir()==="rtl",a=this.orientation==="vertical",l=a?e:t,c=this.lastTrackPosition||l;this.lastTrackPosition=l;const h=l>c!==o&&!a||l<c&&a;this.activeThumb=h?"max":"min"}else this.activeThumb=s<=r?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(t,e,this.activeThumb),this.showRangeTooltips()},move:(t,e)=>{this.activeThumb&&this.setThumbValueFromCoordinates(t,e,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new zr(this.slider,{start:(t,e)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(t,e),this.showTooltip()},move:(t,e)=>{this.setValueFromCoordinates(t,e)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(t){if(t.has("range")&&this.requestUpdate(),this.isRange?(t.has("minValue")||t.has("maxValue"))&&(this.minValue=Z(this.minValue,this.min,this.maxValue),this.maxValue=Z(this.maxValue,this.minValue,this.max),this.updateFormValue()):t.has("value")&&(this.value=Z(this.value,this.min,this.max),this.setValue(String(this.value))),(t.has("min")||t.has("max"))&&(this.isRange?(this.minValue=Z(this.minValue,this.min,this.max),this.maxValue=Z(this.maxValue,this.min,this.max)):this.value=Z(this.value,this.min,this.max)),t.has("disabled")&&this.customStates.set("disabled",this.disabled),t.has("disabled")||t.has("readonly")){const e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):this.value=parseFloat(this.getAttribute("value")??String(this.min)),this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){const e=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length,i=Number(this.step),s=Number(this.min),r=Number(this.max);return t=Math.round(t/i)*i,t=Z(t,s,r),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){const i=this.localize.dir()==="rtl",s=this.orientation==="vertical",{top:r,right:o,bottom:a,left:l,height:c,width:h}=this.trackBoundingClientRect,u=s?e:t,p=s?{start:r,end:a,size:c}:{start:l,end:o,size:h},b=(s||i?p.end-u:u-p.start)/p.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*b)}handleBlur(){this.isRange?requestAnimationFrame(()=>{const t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){const e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){const e=this.localize.dir()==="rtl",i=t.target;if(this.disabled||this.readonly||this.isRange&&(i===this.thumbMin?this.activeThumb="min":i===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const s=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let r=s;switch(t.key){case"ArrowUp":case(e?"ArrowLeft":"ArrowRight"):t.preventDefault(),r=this.clampAndRoundToStep(s+this.step);break;case"ArrowDown":case(e?"ArrowRight":"ArrowLeft"):t.preventDefault(),r=this.clampAndRoundToStep(s-this.step);break;case"Home":t.preventDefault(),r=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),r=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault();const o=Math.max(s+(this.max-this.min)/10,s+this.step);r=this.clampAndRoundToStep(o);break;case"PageDown":t.preventDefault();const a=Math.min(s-(this.max-this.min)/10,s-this.step);r=this.clampAndRoundToStep(a);break;case"Enter":yd(t,this);return}r!==s&&(this.isRange?(this.activeThumb==="min"?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),this.updateFormValue()):this.value=Z(r,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){const i=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(t,e,i){const s=this.getValueFromCoordinates(t,e),r=i==="min"?this.minValue:this.maxValue;i==="min"?s>this.maxValue?(this.maxValue=s,this.minValue=s):this.minValue=Math.max(this.min,s):s<this.minValue?(this.minValue=s,this.maxValue=s):this.maxValue=Math.min(this.max,s),r!==(i==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(t&&(t.open=!0),e&&(e.open=!1)):this.activeThumb==="max"&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(){if(this.isRange){const t=new FormData;t.append(this.name||"",String(this.minValue)),t.append(this.name||"",String(this.maxValue)),this.setValue(t)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=Z(t,this.min,this.maxValue),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){const t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=Z(t,this.minValue,this.max),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("hint"),i=this.label?!0:!!t,s=this.hint?!0:!!e,r=this.hasSlotController.test("reference"),o=B({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),a=[];if(this.withMarkers)for(let m=this.min;m<=this.max;m+=this.step)a.push(this.getPercentageFromValue(m));const l=f`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${B({vh:!i,"has-label":i})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,c=f`
      <div
        id="hint"
        part="hint"
        class=${B({"has-slotted":s})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,h=this.withMarkers?f`
          <div id="markers" part="markers">
            ${a.map(m=>f`<span part="marker" class="marker" style=${ge({"--position":`${m}%`})}></span>`)}
          </div>
        `:"",u=r?f`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",p=(m,b)=>this.withTooltip?f`
            <wa-tooltip
              id=${`tooltip${m!=="thumb"?"-"+m:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${m}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter=="function"?this.valueFormatter(b):this.localize.number(b)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){const m=Z(this.getPercentageFromValue(this.minValue),0,100),b=Z(this.getPercentageFromValue(this.maxValue),0,100);return f`
        ${l}

        <div id="slider" part="slider" class=${o}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${ge({"--start":`${Math.min(m,b)}%`,"--end":`${Math.max(m,b)}%`})}
            ></div>

            ${h}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${ge({"--position":`${m}%`})}
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
              style=${ge({"--position":`${b}%`})}
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
      `}else{const m=Z(this.getPercentageFromValue(this.value),0,100),b=Z(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return f`
        ${l}

        <div
          id="slider"
          part="slider"
          class=${o}
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
              style=${ge({"--start":`${b}%`,"--end":`${m}%`})}
            ></div>

            ${h}
            <span id="thumb" part="thumb" style=${ge({"--position":`${m}%`})}></span>
          </div>

          ${u} ${c}
        </div>

        ${p("thumb",this.value)}
      `}}};Q.formAssociated=!0;Q.observeSlots=!0;Q.css=[Qe,ri,Vb];n([A("#slider")],Q.prototype,"slider",2);n([A("#thumb")],Q.prototype,"thumb",2);n([A("#thumb-min")],Q.prototype,"thumbMin",2);n([A("#thumb-max")],Q.prototype,"thumbMax",2);n([A("#track")],Q.prototype,"track",2);n([A("#tooltip")],Q.prototype,"tooltip",2);n([d()],Q.prototype,"label",2);n([d({attribute:"hint"})],Q.prototype,"hint",2);n([d({reflect:!0})],Q.prototype,"name",2);n([d({type:Number,attribute:"min-value"})],Q.prototype,"minValue",2);n([d({type:Number,attribute:"max-value"})],Q.prototype,"maxValue",2);n([d({attribute:"value",reflect:!0,type:Number})],Q.prototype,"defaultValue",2);n([S()],Q.prototype,"value",1);n([d({type:Boolean,reflect:!0})],Q.prototype,"range",2);n([d({type:Boolean})],Q.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],Q.prototype,"readonly",2);n([d({reflect:!0})],Q.prototype,"orientation",2);n([d({reflect:!0})],Q.prototype,"size",2);n([d({attribute:"indicator-offset",type:Number})],Q.prototype,"indicatorOffset",2);n([d({type:Number})],Q.prototype,"min",2);n([d({type:Number})],Q.prototype,"max",2);n([d({type:Number})],Q.prototype,"step",2);n([d({type:Boolean,reflect:!0})],Q.prototype,"required",2);n([d({type:Boolean})],Q.prototype,"autofocus",2);n([d({attribute:"tooltip-distance",type:Number})],Q.prototype,"tooltipDistance",2);n([d({attribute:"tooltip-placement",reflect:!0})],Q.prototype,"tooltipPlacement",2);n([d({attribute:"with-markers",type:Boolean})],Q.prototype,"withMarkers",2);n([d({attribute:"with-tooltip",type:Boolean})],Q.prototype,"withTooltip",2);n([d({attribute:!1})],Q.prototype,"valueFormatter",2);Q=n([$("wa-slider")],Q);var Wb=_`
  :host {
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
`;var ot=class extends N{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new ie(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),nr(this,{onMove:(i,s)=>{let r=this.orientation==="vertical"?s:i;this.primary==="end"&&(r=this.size-r),this.snap&&this.snap.split(" ").forEach(a=>{let l;a.endsWith("%")?l=this.size*(parseFloat(a)/100):l=parseFloat(a),e&&this.orientation==="horizontal"&&(l=this.size-l),r>=l-this.snapThreshold&&r<=l+this.snapThreshold&&(r=l)}),this.position=Z(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&this.orientation==="horizontal"||t.key==="ArrowUp"&&this.orientation==="vertical")&&(e-=i),(t.key==="ArrowRight"&&this.orientation==="horizontal"||t.key==="ArrowDown"&&this.orientation==="vertical")&&(e+=i),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const s=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=s})}this.position=Z(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.orientation==="vertical"?i:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new xd)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",e=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",i=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.style||(this.style={}),this.primary==="end"?i&&this.orientation==="horizontal"?this.style[t]=`${s} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${s}`:i&&this.orientation==="horizontal"?this.style[t]=`${r} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${r}`,this.style[e]="",f`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${q(this.disabled?void 0:"0")}
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
    `}};ot.css=Wb;n([A(".divider")],ot.prototype,"divider",2);n([d({type:Number,reflect:!0})],ot.prototype,"position",2);n([d({attribute:"position-in-pixels",type:Number})],ot.prototype,"positionInPixels",2);n([d({reflect:!0})],ot.prototype,"orientation",2);n([d({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);n([d()],ot.prototype,"primary",2);n([d()],ot.prototype,"snap",2);n([d({type:Number,attribute:"snap-threshold"})],ot.prototype,"snapThreshold",2);n([R("position")],ot.prototype,"handlePositionChange",1);n([R("positionInPixels")],ot.prototype,"handlePositionInPixelsChange",1);n([R("vertical")],ot.prototype,"handleVerticalChange",1);ot=n([$("wa-split-panel")],ot);var jb=_`
  :host {
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
`;var Ie=class extends me{constructor(){super(...arguments),this.hasSlotController=new xt(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,zo()]}get value(){return this._value??"on"}set value(t){this._value=t}firstUpdated(t){super.firstUpdated(t),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(t){super.willUpdate(t),t.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(t.has("value")||t.has("checked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}setValue(t,e){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(t??"on",e)}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,e=this.hint?!0:!!t;return f`
      <label
        part="base"
        class=${B({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${q(this.value)}
          .checked=${vs(this.checked)}
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
        class=${B({"has-slotted":e})}
        aria-hidden=${e?"false":"true"}
        >${this.hint}</slot
      >
    `}};Ie.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0};Ie.css=[ri,Qe,jb];n([A('input[type="checkbox"]')],Ie.prototype,"input",2);n([d()],Ie.prototype,"title",2);n([d({reflect:!0})],Ie.prototype,"name",2);n([d({reflect:!0})],Ie.prototype,"value",1);n([d({reflect:!0})],Ie.prototype,"size",2);n([d({type:Boolean})],Ie.prototype,"disabled",2);n([d({type:Boolean,attribute:!1})],Ie.prototype,"checked",2);n([d({type:Boolean,attribute:"checked",reflect:!0})],Ie.prototype,"defaultChecked",2);n([d({type:Boolean,reflect:!0})],Ie.prototype,"required",2);n([d({attribute:"hint"})],Ie.prototype,"hint",2);n([d({attribute:"with-hint",type:Boolean})],Ie.prototype,"withHint",2);n([R("defaultChecked")],Ie.prototype,"handleDefaultCheckedChange",1);n([R(["checked"])],Ie.prototype,"handleStateChange",1);n([R("disabled",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleDisabledChange",1);Ie=n([$("wa-switch")],Ie);var Xb=class extends Event{constructor(t){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Gb=class extends Event{constructor(t){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Kb=_`
  :host {
    --indicator-color: var(--wa-color-brand-fill-loud);
    --track-color: var(--wa-color-neutral-fill-normal);
    --track-width: 0.125rem;

    /* Private */
    --safe-track-width: max(0.5px, round(var(--track-width), 0.5px));

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
    border-bottom: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-top .indicator {
    bottom: calc(-1 * var(--safe-track-width));
    border-bottom: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-top .body {
    order: 2;
  }

  .tab-group-top ::slotted(wa-tab[active]) {
    border-block-end: solid var(--safe-track-width) var(--indicator-color);
    margin-block-end: calc(-1 * var(--safe-track-width));
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
    border-top: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-bottom .indicator {
    top: calc(-1 * var(--safe-track-width));
    border-top: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-bottom .body {
    order: 1;
  }

  .tab-group-bottom ::slotted(wa-tab[active]) {
    border-block-start: solid var(--safe-track-width) var(--indicator-color);
    margin-block-start: calc(-1 * var(--safe-track-width));
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
    border-inline-end: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-start .indicator {
    inset-inline-end: calc(-1 * var(--safe-track-width));
    border-right: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-start .body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group-start ::slotted(wa-tab[active]) {
    border-inline-end: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-end: calc(-1 * var(--safe-track-width));
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
    border-left: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-end .indicator {
    inset-inline-start: calc(-1 * var(--safe-track-width));
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-end .body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group-end ::slotted(wa-tab[active]) {
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-end ::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }
`;var yt=class extends N{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ie(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels());const e=t.filter(i=>i.target.closest("wa-tab-group")===this);if(e.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(i=>i.attributeName==="active")){const s=e.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="wa-tab").map(r=>r.target).find(r=>r.active);s&&s.closest("wa-tab-group")===this&&this.setActiveTab(s)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,i)=>{if(e[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const s=this.tabs.find(r=>r.panel===this.active);s&&this.setActiveTab(s)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});i.unobserve(e[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const i=t.target.closest("wa-tab");i?.closest("wa-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(t){const i=t.target.closest("wa-tab");if(i?.closest("wa-tab-group")===this){if(["Enter"," "].includes(t.key)){i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),t.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.tabs.find(l=>l.matches(":focus")),o=this.localize.dir()==="rtl";let a=null;if(r?.tagName.toLowerCase()==="wa-tab"){if(t.key==="Home")a=this.focusableTabs[0];else if(t.key==="End")a=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const l=this.tabs.findIndex(c=>c===r);a=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const l=this.tabs.findIndex(c=>c===r);a=this.findNextFocusableTab(l,"forward")}if(!a)return;a.tabIndex=0,a.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(a,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===a?0:-1}),["top","bottom"].includes(this.placement)&&Xa(a,this.nav,"horizontal"),t.preventDefault()}}}}findNextFocusableTab(t,e){let i=null;const s=e==="forward"?1:-1;let r=t+s;for(;t<this.tabs.length;){if(i=this.tabs[r]||null,i===null){e==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;r+=s}return i}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t.closest("wa-tab-group")===this&&t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.active=t.panel,this.activeTab=t,this.tabs.forEach(s=>{s.active=s===this.activeTab,s.tabIndex=s===this.activeTab?0:-1}),this.panels.forEach(s=>s.active=s.name===this.activeTab?.panel),["top","bottom"].includes(this.placement)&&Xa(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.dispatchEvent(new Xb({name:i.panel})),this.dispatchEvent(new Gb({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(i=>i.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){const t=this.tabs.find(e=>e.panel===this.active);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return f`
      <div
        part="base"
        class=${B({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
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
    `}};yt.css=Kb;n([A(".tab-group")],yt.prototype,"tabGroup",2);n([A(".body")],yt.prototype,"body",2);n([A(".nav")],yt.prototype,"nav",2);n([S()],yt.prototype,"hasScrollControls",2);n([d({reflect:!0})],yt.prototype,"active",2);n([d()],yt.prototype,"placement",2);n([d()],yt.prototype,"activation",2);n([d({attribute:"without-scroll-controls",type:Boolean})],yt.prototype,"withoutScrollControls",2);n([R("active")],yt.prototype,"updateActiveTab",1);n([R("withoutScrollControls",{waitUntilFirstUpdate:!0})],yt.prototype,"updateScrollControls",1);yt=n([$("wa-tab-group")],yt);var Yb=_`
  :host {
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
`;var Zb=0,Ht=class extends N{constructor(){super(...arguments),this.attrId=++Zb,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,f`
      <div
        part="base"
        class=${B({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};Ht.css=Yb;n([A(".tab")],Ht.prototype,"tab",2);n([d({reflect:!0})],Ht.prototype,"panel",2);n([d({type:Boolean,reflect:!0})],Ht.prototype,"active",2);n([d({type:Boolean,reflect:!0})],Ht.prototype,"disabled",2);n([d({type:Number,reflect:!0})],Ht.prototype,"tabIndex",2);n([R("active")],Ht.prototype,"handleActiveChange",1);n([R("disabled")],Ht.prototype,"handleDisabledChange",1);Ht=n([$("wa-tab")],Ht);var Jb=_`
  :host {
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
`;var Qb=0,Es=class extends N{constructor(){super(...arguments),this.attrId=++Qb,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return f`
      <slot
        part="base"
        class=${B({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};Es.css=Jb;n([d({reflect:!0})],Es.prototype,"name",2);n([d({type:Boolean,reflect:!0})],Es.prototype,"active",2);n([R("active")],Es.prototype,"handleActiveChange",1);Es=n([$("wa-tab-panel")],Es);var ew=_`
  :host {
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
`;var ee=class extends me{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new xt(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,zo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const t=this.input.value;this.value=t}})}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.checkValidity()}handleChange(t){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(t){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const t=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${t}px`}if(this.input.style.height){const t=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${t}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(t){t.has("resize")&&this.setTextareaDimensions(),super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const r=e??this.input.selectionStart,o=i??this.input.selectionEnd;this.input.setRangeText(t,r,o,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!t,s=this.hint?!0:!!e;return f`
      <label
        part="form-control-label label"
        class=${B({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${q(this.name)}
          .value=${vs(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${q(this.placeholder)}
          rows=${q(this.rows)}
          minlength=${q(this.minlength)}
          maxlength=${q(this.maxlength)}
          autocapitalize=${q(this.autocapitalize)}
          autocorrect=${q(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${q(this.spellcheck)}
          enterkeyhint=${q(this.enterkeyhint)}
          inputmode=${q(this.inputmode)}
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
        aria-hidden=${s?"false":"true"}
        class=${B({"has-slotted":s})}
        >${this.hint}</slot
      >
    `}};ee.css=[ew,ri,Qe];n([A(".control")],ee.prototype,"input",2);n([A('[part~="base"]')],ee.prototype,"base",2);n([A(".size-adjuster")],ee.prototype,"sizeAdjuster",2);n([d()],ee.prototype,"title",2);n([d({reflect:!0})],ee.prototype,"name",2);n([S()],ee.prototype,"value",1);n([d({attribute:"value",reflect:!0})],ee.prototype,"defaultValue",2);n([d({reflect:!0})],ee.prototype,"size",2);n([d({reflect:!0})],ee.prototype,"appearance",2);n([d()],ee.prototype,"label",2);n([d({attribute:"hint"})],ee.prototype,"hint",2);n([d()],ee.prototype,"placeholder",2);n([d({type:Number})],ee.prototype,"rows",2);n([d({reflect:!0})],ee.prototype,"resize",2);n([d({type:Boolean})],ee.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],ee.prototype,"readonly",2);n([d({type:Boolean,reflect:!0})],ee.prototype,"required",2);n([d({type:Number})],ee.prototype,"minlength",2);n([d({type:Number})],ee.prototype,"maxlength",2);n([d()],ee.prototype,"autocapitalize",2);n([d()],ee.prototype,"autocorrect",2);n([d()],ee.prototype,"autocomplete",2);n([d({type:Boolean})],ee.prototype,"autofocus",2);n([d()],ee.prototype,"enterkeyhint",2);n([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],ee.prototype,"spellcheck",2);n([d()],ee.prototype,"inputmode",2);n([d({attribute:"with-label",type:Boolean})],ee.prototype,"withLabel",2);n([d({attribute:"with-hint",type:Boolean})],ee.prototype,"withHint",2);n([R("rows",{waitUntilFirstUpdate:!0})],ee.prototype,"handleRowsChange",1);n([R("value",{waitUntilFirstUpdate:!0})],ee.prototype,"handleValueChange",1);ee=n([$("wa-textarea")],ee);var tw=class extends Event{constructor(t){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var iw=_`
  :host {
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
`;var sw=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}};var rw=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}};var ow=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var aw=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var nw=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var lw=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var cw=_`
  :host {
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

  .tree-item-expanded:not(.tree-item-loading) slot[name='expand-icon'],
  .tree-item:not(.tree-item-expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-icon-slot {
    display: none;
  }

  .tree-item:not(.tree-item-has-expand-button):not(.tree-item-loading) .expand-button {
    cursor: default;
  }

  .tree-item-loading .expand-icon-slot wa-icon {
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
`;var re=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.dispatchEvent(new nw);const t=co(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await lo(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.hidden=!0,this.dispatchEvent(new lw)}isNestedItem(){const t=this.parentElement;return!!t&&re.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.dispatchEvent(new ow),this.childrenContainer.hidden=!1;const t=co(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await lo(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.style.height="auto",this.dispatchEvent(new aw)}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new rw)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.dispatchEvent(new sw)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(e=>re.isTreeItem(e)&&(t||!e.disabled)):[]}render(){const t=this.localize.dir()==="rtl",e=!this.loading&&(!this.isLeaf||this.lazy);return f`
      <div
        part="base"
        class="${B({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-loading":this.loading,"tree-item-has-expand-button":e})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${B({"expand-button":!0,"expand-button-visible":e})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${Ne(this.loading,()=>f` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `,()=>f`
                  <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
                `)}
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${Ne(this.selectable,()=>f`
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
                ?checked="${vs(this.selected)}"
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
    `}};re.css=cw;n([S()],re.prototype,"indeterminate",2);n([S()],re.prototype,"isLeaf",2);n([S()],re.prototype,"loading",2);n([S()],re.prototype,"selectable",2);n([d({type:Boolean,reflect:!0})],re.prototype,"expanded",2);n([d({type:Boolean,reflect:!0})],re.prototype,"selected",2);n([d({type:Boolean,reflect:!0})],re.prototype,"disabled",2);n([d({type:Boolean,reflect:!0})],re.prototype,"lazy",2);n([A("slot:not([name])")],re.prototype,"defaultSlot",2);n([A("slot[name=children]")],re.prototype,"childrenSlot",2);n([A(".item")],re.prototype,"itemElement",2);n([A(".children")],re.prototype,"childrenContainer",2);n([A(".expand-button slot")],re.prototype,"expandButtonSlot",2);n([R("loading",{waitUntilFirstUpdate:!0})],re.prototype,"handleLoadingChange",1);n([R("disabled")],re.prototype,"handleDisabledChange",1);n([R("expanded")],re.prototype,"handleExpandedState",1);n([R("indeterminate")],re.prototype,"handleIndeterminateStateChange",1);n([R("selected")],re.prototype,"handleSelectedChange",1);n([R("expanded",{waitUntilFirstUpdate:!0})],re.prototype,"handleExpandedChange",1);n([R("expanded",{waitUntilFirstUpdate:!0})],re.prototype,"handleExpandAnimation",1);n([R("lazy",{waitUntilFirstUpdate:!0})],re.prototype,"handleLazyChange",1);re=n([$("wa-tree-item")],re);function Bl(t,e=!1){function i(o){const a=o.getChildrenItems({includeDisabled:!1});if(a.length){const l=a.every(h=>h.selected),c=a.every(h=>!h.selected&&!h.indeterminate);o.selected=l,o.indeterminate=!l&&!c}}function s(o){const a=o.parentElement;re.isTreeItem(a)&&(i(a),s(a))}function r(o){for(const a of o.getChildrenItems())a.selected=e?o.selected||a.selected:!a.disabled&&o.selected,r(a);e&&i(o)}r(t),s(t)}var Ei=class extends N{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new ie(this),this.initTreeItem=t=>{t.updateComplete.then(()=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`),s=this.getExpandButtonIcon(e);s&&(i===null?t.append(s):i.hasAttribute("data-default")&&i.replaceWith(s))})})},this.handleTreeChanged=t=>{for(const e of t){const i=[...e.addedNodes].filter(re.isTreeItem),s=[...e.removedNodes].filter(re.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&s.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),re.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(t){const i=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const s=i.cloneNode(!0);return[s,...s.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),s.setAttribute("data-default",""),s.slot=`${t}-icon`,s}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Bl(t);else if(this.selection==="single"||t.isLeaf){const s=this.getAllTreeItems();for(const r of s)r.selected=r===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(s=>!e.includes(s)))&&Promise.all(i.map(s=>s.updateComplete)).then(()=>{this.dispatchEvent(new tw({selection:i}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(r=>["input","textarea"].includes(r?.tagName?.toLowerCase())))return;const e=this.getFocusableItems(),i=this.matches(":dir(ltr)"),s=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const r=e.findIndex(c=>c.matches(":focus")),o=e[r],a=c=>{const h=e[Z(c,0,e.length-1)];this.focusItem(h)},l=c=>{o.expanded=c};t.key==="ArrowDown"?a(r+1):t.key==="ArrowUp"?a(r-1):i&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?a(r+1):l(!0):i&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?a(r-1):l(!1):t.key==="Home"?a(0):t.key==="End"?a(e.length-1):(t.key==="Enter"||t.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(t){const e=t.target,i=e.closest("wa-tree-item"),s=t.composedPath().some(r=>r?.classList?.contains("expand-button"));!i||i.disabled||e!==this.clickTarget||(s?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.updateComplete.then(()=>{i.selectable=t});t&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(i=>{i.updateComplete.then(()=>{Bl(i,!0)})}))}get selectedItems(){const t=this.getAllTreeItems(),e=i=>i.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(i=>{if(i.disabled)return!1;const s=i.parentElement?.closest("[role=treeitem]");return s&&(!s.expanded||s.loading||e.has(s))&&e.add(i),!e.has(i)})}render(){return f`
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
    `}};Ei.css=iw;n([A("slot:not([name])")],Ei.prototype,"defaultSlot",2);n([A("slot[name=expand-icon]")],Ei.prototype,"expandedIconSlot",2);n([A("slot[name=collapse-icon]")],Ei.prototype,"collapsedIconSlot",2);n([d()],Ei.prototype,"selection",2);n([R("selection")],Ei.prototype,"handleSelectionChange",1);Ei=n([$("wa-tree")],Ei);var dw=_`
  :host {
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
`;var at=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(t){const e=Dn(t),i=[];for(const s of e){let r;if(s.endsWith("%")){const o=parseFloat(s.slice(0,-1));if(!isNaN(o))r=Math.max(0,o/100);else continue}else if(r=parseFloat(s),!isNaN(r))r=Math.max(0,r);else continue;i.push(r)}return[...new Set(i)].sort((s,r)=>s-r)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let t=0,e=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let i=1;i<this.availableZoomLevels.length;i++){const s=Math.abs(this.availableZoomLevels[i]-this.zoom);s<e&&(e=s,t=i)}return t}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}updated(t){if(t.has("zoom")&&this.style.setProperty("--zoom",`${this.zoom}`),t.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){const e=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[e]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[e])}}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}const t=this.getCurrentZoomIndex();t<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[t+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}const t=this.getCurrentZoomIndex();t>0&&(this.zoom=this.availableZoomLevels[t-1])}handleLoad(){this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return f`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${q(this.sandbox??void 0)}
          src=${q(this.src??void 0)}
          srcdoc=${q(this.srcdoc??void 0)}
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
    `}};at.css=dw;n([A("#iframe")],at.prototype,"iframe",2);n([d()],at.prototype,"src",2);n([d()],at.prototype,"srcdoc",2);n([d({type:Boolean})],at.prototype,"allowfullscreen",2);n([d()],at.prototype,"loading",2);n([d()],at.prototype,"referrerpolicy",2);n([d()],at.prototype,"sandbox",2);n([d({type:Number,reflect:!0})],at.prototype,"zoom",2);n([d({attribute:"zoom-levels"})],at.prototype,"zoomLevels",2);n([d({type:Boolean,attribute:"without-controls",reflect:!0})],at.prototype,"withoutControls",2);n([d({type:Boolean,attribute:"without-interaction",reflect:!0})],at.prototype,"withoutInteraction",2);at=n([$("wa-zoomable-frame")],at);var hw=Object.defineProperty,uw=Object.getOwnPropertyDescriptor,zn=(t,e,i,s)=>{for(var r=s>1?void 0:s?uw(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&hw(e,i,r),r};let fr=class extends gr{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return f`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};fr.styles=_`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;zn([d()],fr.prototype,"message",2);zn([d()],fr.prototype,"icon",2);fr=zn([$("k-no-content")],fr);class pw{constructor(){this.packages=[]}addPackage(e){this.packages.push(e)}hasPackages(){return this.packages.length>0&&this.packages.some(e=>e.dependencies&&Object.keys(e.dependencies).length>0)}renderTree(){return this.packages.length===0?f``:f`
            <wa-tree style="--indent-guide-width: 1px;">
                ${this.packages.map(e=>{const i=e.dependencies||{},s=Object.entries(i);return s.length===0?f``:f`
                        <wa-tree-item expanded>
                            <span>${e.name}</span>
                            ${s.map(([r,o])=>f`
                                <wa-tree-item>
                                    <span>${r} <small>${o}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    `})}
            </wa-tree>
        `}}const bo=new pw;Ae.put("packageInfoService",bo);const le="system.language_bundles",Ga="language";function fw(t,e){return e?t.replace(/\{(\w+)\}/g,(i,s)=>e[s]!==void 0?e[s]:i):t}class mw extends String{constructor(e,i,s,r){super(""),this.i18nService=e,this.namespace=i,this.key=s,this.params=r}toString(){const e=this.i18nService.currentLanguageSignal.get();return this.cachedValue!==void 0&&this.cachedLanguage===e?this.cachedValue:(this.cachedValue=this.i18nService.translate(this.namespace,this.key,this.params),this.cachedLanguage=e,this.cachedValue)}valueOf(){return this.toString()}[Symbol.toPrimitive](e){if(e==="number"){const i=Number(this.toString());return isNaN(i)?0:i}return this.toString()}toJSON(){return this.toString()}}const Nd=class tr{constructor(){this.translationCache=new Map,this.currentLanguageSignal=fi(this.getBrowserLanguage()),this.languageContributionsSignal=fi([]),this.initialize()}getBrowserLanguage(){return(navigator.language||navigator.languages?.[0]||tr.DEFAULT_LANGUAGE).split("-")[0].toLowerCase()}async initializeLanguage(){return await be.get(Ga)||this.getBrowserLanguage()}async updateLanguageFromSettings(){const e=await this.initializeLanguage();this.currentLanguageSignal.set(e)}getPrimaryLanguage(e){return e.split("-")[0].toLowerCase()}updateLanguageContributions(){const e=z.getContributions(le);this.languageContributionsSignal.set(e)}createCacheKey(e,i){return`${e}:${i}`}mergeTranslationsForLanguage(e,i,s){const r=this.createCacheKey(i,s),o=this.translationCache.get(r);if(o!==void 0)return o;const a={};for(const l of e){if(l.namespace!==i)continue;let c;l.translations&&l.language===s?c=l.translations:l[s]&&typeof l[s]=="object"&&(c=l[s]),c&&Object.assign(a,c)}return this.translationCache.set(r,a),a}invalidateTranslationCache(){this.translationCache.clear()}translate(e,i,s){const r=this.currentLanguageSignal.get(),o=this.getPrimaryLanguage(r),a=this.languageContributionsSignal.get();let l;const c=this.mergeTranslationsForLanguage(a,e,r);if(c[i])l=c[i];else{const h=r!==o?this.mergeTranslationsForLanguage(a,e,o):c;if(h[i])l=h[i];else if(o!==tr.DEFAULT_LANGUAGE&&r!==tr.DEFAULT_LANGUAGE){const u=this.mergeTranslationsForLanguage(a,e,tr.DEFAULT_LANGUAGE);u[i]&&(l=u[i])}}return l?fw(l,s):i}initialize(){Ue(Di,async e=>{const i=e?.[Ga]||this.getBrowserLanguage();this.currentLanguageSignal.set(i),this.invalidateTranslationCache()}),Ue(Wt,e=>{e.target===le&&(this.invalidateTranslationCache(),this.updateLanguageContributions())}),this.updateLanguageFromSettings(),this.updateLanguageContributions()}i18n(e){return(i,s)=>this.translate(e,i,s)}i18nLazy(e){return(i,s)=>new mw(this,e,i,s)}};Nd.DEFAULT_LANGUAGE="en";let gw=Nd;const Er=new gw;Ae.put("i18nService",Er);const Fd=Er.currentLanguageSignal,bw=Er.languageContributionsSignal,Qi=t=>Er.i18n(t),_e=t=>Er.i18nLazy(t),ql=["alt","ctrl","meta","shift"],Ud={CTRL:"ctrl",CONTROL:"ctrl",ALT:"alt",OPTION:"alt",SHIFT:"shift",META:"meta",CMD:"meta",COMMAND:"meta",WIN:"meta",WINDOWS:"meta"},ww={ctrl:"Ctrl",alt:"Alt",shift:"Shift",meta:"Cmd"},vw={SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"},yw=new Set(Object.keys(Ud));function Vl(t){return vw[t]??t}class xw{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),Ue(Vc,e=>{e.keyBinding&&this.registerKeyBinding(e.id,e.keyBinding)})}registerExistingCommandBindings(){const e=Ke.listCommands();Object.values(e).forEach(i=>{i.keyBinding&&this.registerKeyBinding(i.id,i.keyBinding)})}parseKeyBinding(e){if(!e||e.trim()==="")return null;const i=e.toUpperCase().split("+").map(a=>a.trim());if(i.length===0)return null;const s=i[i.length-1],r=i.slice(0,-1);if(i.length===1&&yw.has(s))return null;const o={ctrl:!1,alt:!1,shift:!1,meta:!1};for(const a of r){const l=Ud[a];if(l===void 0)return null;o[l]=!0}return o.key=Vl(s),o}getBindingKey(e){return[...ql.filter(s=>e[s]),e.key.toUpperCase()].join("+")}registerKeyBinding(e,i){const s=this.parseKeyBinding(i);if(!s)return G.error(`Invalid key binding: ${i}`),!1;s.commandId=e;const r=this.getBindingKey(s);this.bindings.has(r)||this.bindings.set(r,[]);const o=this.bindings.get(r);if(o.find(c=>c.commandId===e))return G.error(`Key binding ${i} already registered for command ${e}`),!1;const l=o.find(c=>c.commandId!==e);return l?(G.warn(`Key binding ${i} already used by command ${l.commandId}; refusing for ${e}`),!1):(o.push(s),G.debug(`Key binding registered: ${i} -> ${e}`),!0)}unregisterKeyBinding(e,i){if(i){const s=this.parseKeyBinding(i);if(s){const r=this.getBindingKey(s),o=this.bindings.get(r);if(o){const a=o.filter(l=>l.commandId!==e);a.length===0?this.bindings.delete(r):this.bindings.set(r,a)}}}else for(const[s,r]of this.bindings.entries()){const o=r.filter(a=>a.commandId!==e);o.length===0?this.bindings.delete(s):this.bindings.set(s,o)}}getKeyBindingsForCommand(e){const i=[];for(const s of this.bindings.values())for(const r of s)r.commandId===e&&i.push(this.formatKeyBinding(r));return i.sort()}formatKeyBinding(e){const i=ql.filter(r=>e[r]).map(r=>ww[r]),s=e.key.length===1?e.key.toUpperCase():e.key.charAt(0).toUpperCase()+e.key.slice(1).toLowerCase();return i.push(s),i.join("+")}handleKeyDown(e){if(!this.enabled)return;const i={commandId:"",key:Vl(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},s=this.getBindingKey(i),r=this.bindings.get(s);if(r&&r.length>0){const o=r[0];try{e.preventDefault(),e.stopPropagation();const a=Ke.createExecutionContext({});Ke.execute(o.commandId,a),G.debug(`Executed command via key binding: ${o.commandId}`)}catch(a){G.error(`Failed to execute command ${o.commandId}: ${a.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){const e=new Map;for(const[i,s]of this.bindings)e.set(i,[...s]);return e}clearAll(){this.bindings.clear()}}const Bd=new xw;Ae.put("keyBindingManager",Bd);const ls="events/filesys/workspaceChanged",mr="events/filesys/workspaceConnected";class wo{constructor(){this.state={}}getWorkspacePath(){const e=[];let i=this;for(;i;)e.push(i.getName()),i=i.getParent();return e.reverse(),e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const i=e.getParent();if(i)e=i;else break}return e}}var kw=(t=>(t[t.TEXT=0]="TEXT",t[t.BINARY=1]="BINARY",t))(kw||{});class $i extends wo{}class us extends wo{}class Hl extends $i{constructor(e,i){super(),this.fileHandle=e,this.parent=i}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const i=await this.fileHandle.getFile();return!e||e?.contentType==0?await i.text():e?.encoding==0||e?.uri?URL.createObjectURL(i):e?.blob?i:i.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(e,i){const s=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(s);else{const r=s.getWriter();try{await r.write(e)}finally{await r.close()}}}async copyTo(e){const i=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(i)}async rename(e){const i=this.getParent();if(!i)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(s){throw s.name==="NotAllowedError"||s.message?.includes("not allowed")||s.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):s}await i.listChildren(!0),oe(ls,this.getWorkspace())}}}class Kt extends us{constructor(e,i){super(),this.dirHandle=e,this.parent=i}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const i={};try{for await(const s of this.dirHandle.values()){const o=s.kind==="file"?new Hl(s,this):new Kt(s,this);i[o.getName()]=o}}catch(s){if(s.name==="NotFoundError")return this.files={},[];throw s}return this.files=i,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,i){if(!e)throw new Error("No path provided");const s=e.split("/");let r=this,o=!1;try{for(let a=0;a<s.length;a++){let l=s[a];if(l&&(l=l.trim()),!l)break;if(r instanceof Kt){if(await r.listChildren(),!r.files)return null;const c=r.files[l];if(c)r=c;else if(i?.create)if(o=!0,a<s.length-1)try{const h=await r.dirHandle.getDirectoryHandle(l,{create:!0}),u=new Kt(h,r);r.files[l]=u,r=u,r instanceof Kt&&await r.listChildren();continue}catch(h){throw h.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${s.slice(0,a+1).join("/")}`):h}else try{const h=await r.dirHandle.getFileHandle(l,{create:!0}),u=new Hl(h,r);return r.files[l]=u,u}catch(h){throw h.name==="NotFoundError"?new Error(`File not found or not accessible: ${s.join("/")}`):h}else return null}}}finally{o&&oe(ls,this.getWorkspace())}return r}touch(){oe(ls,this.getWorkspace())}async delete(e,i=!0){if(!e){const s=this.getParent();return s instanceof Kt&&(await s.listChildren(),s.files&&delete s.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,s?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:i}).then(async()=>{this.files&&delete this.files[e],oe(ls,this.getWorkspace())})}async copyTo(e){for(const i of await this.listChildren()){const s=[e,i.getName()].join("/");await i.copyTo(s)}}async rename(e){const i=this.getParent();if(!i)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(s){throw s.name==="NotAllowedError"||s.message?.includes("not allowed")||s.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):s}await i.listChildren(!0),oe(ls,this.getWorkspace())}}}class Cw{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(e=>{e&&oe(mr,e)})}registerContribution(e){this.contributions.set(e.type,e),console.log(`Workspace contribution registered: ${e.name} (${e.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const e=await Ct.getObject("workspace_data");if(!e)return;const i=this.contributions.get(e.type);if(!i){console.warn(`No contribution found for workspace type: ${e.type}`);return}try{if(i.restore){const s=await i.restore(e.data);return s&&(this.currentType=e.type),s}}catch(s){console.error(`Failed to restore workspace of type ${e.type}:`,s)}}async connectWorkspace(e){const i=Array.from(this.contributions.values()).find(a=>a.canHandle(e));if(!i)throw new Error("No workspace contribution can handle this input");const s=await i.connect(e),r=i.persist?await i.persist(s):e,o={type:i.type,data:r};return await Ct.persistObject("workspace_data",o),this.currentType=i.type,this.workspace=Promise.resolve(s),oe(mr,s),s}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await Ct.persistObject("workspace_data",null),await Ct.persistObject("workspace",null)}}const Ai=new Cw;Ae.put("workspaceService",Ai);Ai.registerContribution({type:"filesystem",name:"Local File System",canHandle(t){return t&&"kind"in t&&t.kind==="directory"},async connect(t){return new Kt(t)},async restore(t){if(t&&"kind"in t&&t.kind==="directory")return new Kt(t,void 0)},async persist(t){return t instanceof Kt?t.getHandle():null}});class Ew{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,this.cachedIconContributions=null,Ue(mr,()=>{}),Ue(Wt,e=>{e.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const e=z.getContributions("system.icons");return this.cachedIconContributions=[...e].sort((i,s)=>{const r=i.priority??0,o=s.priority??0;return o!==r?o-r:i.label.localeCompare(s.label)}),this.cachedIconContributions}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const i=o=>{const a=o.detail;a&&Array.from(a.querySelectorAll("*")).filter(c=>c instanceof pt).forEach(c=>{bt.set(c),c.isEditor&&or.set(c)})};e.addEventListener("tab-shown",i);const s=o=>{const a=o.detail;Array.from(a.querySelectorAll("*")).filter(c=>c instanceof pt).forEach(c=>{bt.get()==c&&bt.set(null),or.get()==c&&or.set(null)})};e.addEventListener("tab-closed",s);const r=o=>{const l=o.closest("wa-tab-panel").getAttribute("name");e.markDirty(l,o.isDirty())};this.signalCleanup=Hc(Oa,r)}registerEditorInputHandler(e){this.editorInputHandlers.push({definition:e,initialized:!1}),this.editorInputHandlers.sort((i,s)=>{const r=i.definition.ranking??0;return(s.definition.ranking??0)-r})}async ensureHandlerInitialized(e){const i=e.definition;!i.lazyInit||e.initialized||(e.lazyInitPromise||(e.lazyInitPromise=Promise.resolve(i.lazyInit()).then(()=>{e.initialized=!0,e.lazyInitPromise=void 0}).catch(s=>{throw e.lazyInitPromise=void 0,s})),await e.lazyInitPromise)}async handleInput(e){for(let i=0;i<this.editorInputHandlers.length;i++){const s=this.editorInputHandlers[i],r=s.definition;if(r.canHandle(e))return await this.ensureHandlerInitialized(s),await r.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${ci}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const i=this.getEditorArea();if(!i){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(i),i.has(e.key)){i.activate(e.key);return}i.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}getFileIcon(e){const i=e.includes(".")?e.split(".").pop()?.toLowerCase()||"":e.toLowerCase(),s=this.getSortedIconContributions();if(s.length===0)return"file";for(const r of s)if(r.mappings&&r.mappings[i])return r.mappings[i];return"file"}}const Vo=new Ew;Ae.put("editorRegistry",Vo);z.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});const et=si("MarketplaceRegistry"),Wl="events/marketplaceregistry/changed",jl="marketplace.catalogUrls";class $w{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(e=>{et.error(`Failed to refresh catalogs on init: ${e.message}`)})})}async loadCatalogUrls(){try{const e=await be.get(jl);this.catalogUrls=Array.isArray(e)?e:[],et.debug(`Loaded ${this.catalogUrls.length} catalog URLs`)}catch(e){et.error(`Failed to load catalog URLs: ${e}`),this.catalogUrls=[]}}async saveCatalogUrls(){await be.set(jl,this.catalogUrls),oe(Wl,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(e){if(!this.isValidUrl(e))throw new Error(`Invalid catalog URL: ${e}`);if(this.catalogUrls.includes(e)){et.debug(`Catalog URL already exists: ${e}`);return}this.catalogUrls.push(e),await this.saveCatalogUrls(),et.info(`Added catalog URL: ${e}`);try{await this.refreshCatalogs()}catch(i){et.warn(`Failed to refresh catalogs immediately after adding: ${i}`)}}async removeCatalogUrl(e){const i=this.catalogUrls.indexOf(e);i!==-1&&(this.catalogUrls.splice(i,1),await this.saveCatalogUrls(),et.info(`Removed catalog URL: ${e}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(e){try{const i=new URL(e);return i.protocol==="http:"||i.protocol==="https:"}catch{return!1}}async fetchCatalog(e){const i=this.loadingPromises.get(e);if(i)return i;const s=(async()=>{try{et.debug(`Fetching catalog from: ${e}`);const r=await fetch(e,{method:"GET",headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const o=await r.json();if(!o.extensions||!Array.isArray(o.extensions))throw new Error("Invalid catalog format: extensions array is required");const a={name:o.name,description:o.description,extensions:o.extensions||[]},l=a.extensions?.length||0;return et.debug(`Successfully fetched catalog from ${e}: ${l} extensions`),a}catch(r){throw et.error(`Failed to fetch catalog from ${e}: ${r}`),r}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,s),s}async refreshCatalogs(){et.info(`Refreshing ${this.catalogUrls.length} catalogs...`);const e=this.catalogUrls.map(s=>this.fetchCatalog(s).catch(r=>(et.warn(`Failed to refresh catalog ${s}: ${r.message}`),null)));(await Promise.allSettled(e)).forEach((s,r)=>{if(s.status==="fulfilled"&&s.value){const o=s.value;o.extensions&&o.extensions.forEach(a=>{if(!H.getExtensions().find(l=>l.id===a.id)){const l={...a,external:!0};H.registerExtension(l),et.debug(`Registered marketplace extension: ${a.id}`)}})}}),oe(Wl,{type:"refreshed"}),et.info("Catalog refresh completed")}getMarketplaceExtension(e){const i=H.getExtensions().find(s=>s.id===e);if(i&&i.external)return i}isMarketplaceExtension(e){const i=H.getExtensions().find(s=>s.id===e);return i!==void 0&&i.external===!0}}const qd=new $w;Ae.put("marketplaceRegistry",qd);const Sw="filebrowser",Aw={CONNECT_WORKSPACE:"Connect Workspace...",RELOAD_WORKSPACE:"Reload workspace folder",CREATE_NEW:"Create new...",RENAME_RESOURCE:"Rename selected resource",DELETE_RESOURCE:"Delete selected resource",OPEN:"Open",RENAME:"Rename",DELETE:"Delete",FILE:"File",FOLDER:"Folder",FILE_EXISTS_OVERWRITE:'File "{fileName}" already exists. Do you want to overwrite it?',SELECT_WORKSPACE:"Select a workspace.",DROP_FILES_HERE:"📁 Drop files here"},_w={CONNECT_WORKSPACE:"Arbeitsbereich verbinden...",RELOAD_WORKSPACE:"Arbeitsbereich-Ordner neu laden",CREATE_NEW:"Neu erstellen...",RENAME_RESOURCE:"Ausgewählte Ressource umbenennen",DELETE_RESOURCE:"Ausgewählte Ressource löschen",OPEN:"Öffnen",RENAME:"Umbenennen",DELETE:"Löschen",FILE:"Datei",FOLDER:"Ordner",FILE_EXISTS_OVERWRITE:'Die Datei "{fileName}" existiert bereits. Möchten Sie sie überschreiben?',SELECT_WORKSPACE:"Wählen Sie einen Arbeitsbereich aus.",DROP_FILES_HERE:"📁 Dateien hier ablegen"},Tw={namespace:Sw,en:Aw,de:_w},Lw="extensions",Rw={FILTER_PLACEHOLDER:"Filter extensions...",INSTALLED:"Installed",AVAILABLE:"Available",NO_MATCHES:'No extensions match "{filterText}"',EXTERNAL_EXTENSION:"External Extension",UNINSTALL:"Uninstall (requires restart)",REQUIRED_HINT:"This extension is required by the current app and cannot be uninstalled",INSTALL:"Install",EXPERIMENTAL:"This is an experimental extension!",VERSION:"Version:",AUTHOR:"Author:",DEPENDENCIES:"Dependencies",NOT_INSTALLED:"Not Installed",DEPENDENCIES_HINT:"Dependencies are automatically installed when this extension is enabled.",DISABLE_TITLE:"Disable this extension",ENABLE_TITLE:"Enable this extension"},Iw={FILTER_PLACEHOLDER:"Erweiterungen filtern...",INSTALLED:"Installiert",AVAILABLE:"Verfügbar",NO_MATCHES:'Keine Erweiterungen entsprechen "{filterText}"',EXTERNAL_EXTENSION:"Externe Erweiterung",UNINSTALL:"Deinstallieren (Neustart erforderlich)",REQUIRED_HINT:"Diese Erweiterung ist für die aktuelle App erforderlich und kann nicht deinstalliert werden",INSTALL:"Installieren",EXPERIMENTAL:"Dies ist eine experimentelle Erweiterung!",VERSION:"Version:",AUTHOR:"Autor:",DEPENDENCIES:"Abhängigkeiten",NOT_INSTALLED:"Nicht installiert",DEPENDENCIES_HINT:"Abhängigkeiten werden automatisch installiert, wenn diese Erweiterung aktiviert wird.",DISABLE_TITLE:"Diese Erweiterung deaktivieren",ENABLE_TITLE:"Diese Erweiterung aktivieren"},Ow={namespace:Lw,en:Rw,de:Iw},Dw="tasks",zw={ACTIVE_TASKS:"Active Tasks",ACTIVE_TASKS_TITLE:"Active tasks: {taskCount}. Click to view details."},Pw={ACTIVE_TASKS:"Aktive Aufgaben",ACTIVE_TASKS_TITLE:"Aktive Aufgaben: {taskCount}. Klicken Sie, um Details anzuzeigen."},Mw={namespace:Dw,en:zw,de:Pw},Nw="workspace",Fw={NO_WORKSPACE:"<no workspace>",LOAD_WORKSPACE:"Load workspace"},Uw={NO_WORKSPACE:"<kein Arbeitsbereich>",LOAD_WORKSPACE:"Arbeitsbereich laden"},Bw={namespace:Nw,en:Fw,de:Uw},qw="fastviews",Vw={FAST_VIEWS:"Fast Views"},Hw={FAST_VIEWS:"Schnellansichten"},Ww={namespace:qw,en:Vw,de:Hw},jw="logterminal",Xw={ALL_LOGS:"All logs",ALL:"All",INFO_LOGS:"Info logs",INFO:"Info",WARNING_LOGS:"Warning logs",WARNINGS:"Warnings",ERROR_LOGS:"Error logs",ERRORS:"Errors",DEBUG_LOGS:"Debug logs",DEBUG:"Debug",AUTO_SCROLL_ENABLED:"Auto-scroll enabled",AUTO_SCROLL_DISABLED:"Auto-scroll disabled",AUTO_SCROLL:"Auto-scroll",MANUAL:"Manual",CLEAR_LOGS:"Clear logs",CLEAR:"Clear",NO_LOG_MESSAGES:"No log messages"},Gw={ALL_LOGS:"Alle Protokolle",ALL:"Alle",INFO_LOGS:"Info-Protokolle",INFO:"Info",WARNING_LOGS:"Warnungsprotokolle",WARNINGS:"Warnungen",ERROR_LOGS:"Fehlerprotokolle",ERRORS:"Fehler",DEBUG_LOGS:"Debug-Protokolle",DEBUG:"Debug",AUTO_SCROLL_ENABLED:"Automatisches Scrollen aktiviert",AUTO_SCROLL_DISABLED:"Automatisches Scrollen deaktiviert",AUTO_SCROLL:"Automatisches Scrollen",MANUAL:"Manuell",CLEAR_LOGS:"Protokolle löschen",CLEAR:"Löschen",NO_LOG_MESSAGES:"Keine Protokollnachrichten"},Kw={namespace:jw,en:Xw,de:Gw},Yw="partname",Zw={NO_PART:"<no part>",ACTIVE_PART:"Active part"},Jw={NO_PART:"<kein Bereich>",ACTIVE_PART:"Aktiver Bereich"},Qw={namespace:Yw,en:Zw,de:Jw};z.registerContribution(le,Tw);z.registerContribution(le,Ow);z.registerContribution(le,Mw);z.registerContribution(le,Bw);z.registerContribution(le,Ww);z.registerContribution(le,Kw);z.registerContribution(le,Qw);const Xl=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);var ev=Object.defineProperty,tv=Object.getOwnPropertyDescriptor,Vd=(t,e,i,s)=>{for(var r=s>1?void 0:s?tv(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&ev(e,i,r),r};const tt=Qi("filebrowser");let vo=class extends pt{constructor(){super(...arguments),this.treeRef=pi(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),Ue(Wt,t=>{t.target==="system.icons"&&this.requestUpdate()}),this.subscribe(ls,t=>this.onWorkspaceChanged(t)),this.subscribe(mr,t=>this.onWorkspaceConnected(t))}firstUpdated(t){super.firstUpdated(t),this.setupDragAndDrop()}updated(t){super.updated(t),t.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const t=await Ai.getWorkspace();t?await this.loadWorkspace(t):Ke.execute("help")}renderToolbar(){const t=Ri.get()instanceof wo;return f`
            <k-command icon="folder-open" title="${tt("CONNECT_WORKSPACE")}" dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="${tt("RELOAD_WORKSPACE")}"></k-command>
            <k-command cmd="create_file" icon="plus" title="${tt("CREATE_NEW")}" dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t} title="${tt("RENAME_RESOURCE")}"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t} title="${tt("DELETE_RESOURCE")}"></k-command>
        `}renderContextMenu(){const t=Ri.get()instanceof wo;return f`
            <k-command cmd="open_editor" icon="folder-open">${tt("OPEN")}</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">${tt("CREATE_NEW")}</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t}>${tt("RENAME")}</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t}>${tt("DELETE")}</k-command>
        `}async onWorkspaceChanged(t){Ri.set(void 0),await this.loadWorkspace(t),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t,!0):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&Ri.set(e[0].model?.data)}async resourceToTreeNode(t,e=!1){const i=t instanceof $i,s={data:t,label:t.getName(),leaf:i,children:[]};if(t instanceof us&&e){for(const r of await t.listChildren(!1)){const o=await this.resourceToTreeNode(r,!1);s.children.push(o)}s.children.sort(Xl)}return s}createTreeItems(t,e=!1){if(!t)return f``;const i=!t.leaf&&t.children.length===0,s=t.data,r=s instanceof $i,o=r?Vo.getFileIcon(s.getName()):t.icon||"folder-open";return f`
            <wa-tree-item 
                draggable=${r}
                @dragstart=${r?this.nobubble(a=>this.onDragStart(a,s)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(a=>this.onLazyLoad(a,t))}
                .model=${t} 
                ?expanded=${e}
                ?lazy=${i}>
                <span><wa-icon name=${o} label="${t.leaf?tt("FILE"):tt("FOLDER")}"></wa-icon> ${t.label}</span>
                ${t.children.map(a=>this.createTreeItems(a,!1))}
            </wa-tree-item>`}onDragStart(t,e){if(!t.dataTransfer)return;const i=e.getWorkspacePath(),s=e.getName();if(t.dataTransfer.effectAllowed="copy",t.dataTransfer.setData("text/plain",i),t.dataTransfer.setData("application/x-workspace-file",i),t.dataTransfer.setData("text/uri-list",i),t.dataTransfer.setDragImage){const r=document.createElement("div");r.textContent=s,r.style.position="absolute",r.style.top="-1000px",r.style.padding="4px 8px",r.style.background="var(--wa-color-neutral-10)",r.style.border="1px solid var(--wa-color-neutral-30)",r.style.borderRadius="4px",document.body.appendChild(r),t.dataTransfer.setDragImage(r,0,0),setTimeout(()=>document.body.removeChild(r),0)}}async onLazyLoad(t,e){const i=e.data;i instanceof us&&e.children.length===0&&await this.loadNodeChildren(e,i)}async loadNodeChildren(t,e){if(!this.loadingNodes.has(t)){this.loadingNodes.add(t);try{for(const i of await e.listChildren(!1)){dd&&i.getName().startsWith(".");const s=await this.resourceToTreeNode(i,!1);t.children.push(s)}t.children.sort(Xl),this.requestUpdate()}catch(i){console.error("Failed to load directory children:",i)}finally{this.loadingNodes.delete(t)}}}async onFileDoubleClicked(t){const i=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:i})}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const i=e[0].model;Ri.set(i.data)}else Ri.set(void 0)}setupDragAndDrop(){const t=this.treeRef.value;if(!t)return;const e=o=>{if(!o.dataTransfer?.types.includes("Files"))return;o.preventDefault(),o.dataTransfer.dropEffect="copy",t.classList.add("drag-over");const l=o.target.closest("wa-tree-item");l&&l!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=l,l.classList.add("drop-target"))},i=o=>{o.dataTransfer?.types.includes("Files")&&(o.preventDefault(),t.classList.add("drag-over"))},s=o=>{const a=t.getBoundingClientRect(),l=o.clientX,c=o.clientY;(l<=a.left||l>=a.right||c<=a.top||c>=a.bottom)&&(t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},r=async o=>{if(o.preventDefault(),t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!o.dataTransfer||!this.workspaceDir)return;const a=Array.from(o.dataTransfer.files);if(a.length===0)return;const l=await this.getDropTarget(o);await this.handleFilesDrop(a,l)};t.removeEventListener("dragover",e),t.removeEventListener("dragenter",i),t.removeEventListener("dragleave",s),t.removeEventListener("drop",r),t.addEventListener("dragover",e),t.addEventListener("dragenter",i),t.addEventListener("dragleave",s),t.addEventListener("drop",r)}async getDropTarget(t){const i=t.target.closest("wa-tree-item");if(i){const r=i.model.data;if(r instanceof us)return r;const o=r.getParent();if(o)return o}return this.workspaceDir}async handleFilesDrop(t,e){const i=t.length;let s=0,r=0,o=0;for(const a of t)try{const l=this.buildTargetPath(e,a.name);if(await this.workspaceDir.getResource(l)&&!await Oo(tt("FILE_EXISTS_OVERWRITE",{fileName:a.name}))){o++;continue}await(await this.workspaceDir.getResource(l,{create:!0})).saveContents(a),s++}catch(l){console.error(`Failed to upload ${a.name}:`,l),r++}console.log(`Uploaded ${s}/${i} files${o>0?`, ${o} skipped`:""}${r>0?`, ${r} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(t,e){const i=t.getWorkspacePath();return i?`${i}/${e}`:e}render(){return f`
            <div class="tree" ${Jt(this.treeRef)} style="--drop-files-text: '${tt("DROP_FILES_HERE")}'">
                ${Ne(!this.workspaceDir,()=>f`
                    <k-no-content message="${tt("SELECT_WORKSPACE")}"></k-no-content>`,()=>f`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};vo.styles=_`
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
    `;Vd([S()],vo.prototype,"root",2);vo=Vd([$("k-filebrowser")],vo);var iv=Object.getOwnPropertyDescriptor,sv=(t,e,i,s)=>{for(var r=s>1?void 0:s?iv(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=a(r)||r);return r};const Ka=Qi("tasks");z.registerContribution(Lo,{html:"<k-tasks></k-tasks>"});let Ks=null;function Hd(){return Ks||(Ks=document.createElement("div"),Ks.id="progress-dialog-container",document.body.appendChild(Ks)),Ks}function Gl(){return Hd().querySelector("wa-dialog")}function rv(){Wd(!0)}function Wd(t=!1){const e=Hd(),i=ms.getActiveTasks();if(i.length===0){gt(f``,e);return}const r=Gl();if(!(t||r?.open===!0))return;const a=()=>{const h=Gl();h&&(h.open=!1)},l=()=>{gt(f``,e)},c=f`
        <wa-dialog 
            label="${Ka("ACTIVE_TASKS")}" 
            open
            light-dismiss
            style="--width: 600px;"
            @wa-request-close=${a}
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
                ${i.map(h=>{const u=h.progress>=0||h.totalSteps>0,p=h.progress>=0?h.progress:h.totalSteps>0?Math.round(h.currentStep/h.totalSteps*100):0,m=h.progress<0&&h.totalSteps>0;return f`
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
                                        ${m?`${h.currentStep}/${h.totalSteps} - `:""}${p}%
                                    </wa-progress-bar>
                                `:f`
                                    <wa-progress-bar indeterminate></wa-progress-bar>
                                `}
                            </div>
                        </div>
                    `})}
            </div>
        </wa-dialog>
    `;gt(c,e)}let Ya=class extends pt{doBeforeUI(){this.watch(Da,()=>{Wd(),this.requestUpdate()})}handleIndicatorClick(){rv()}render(){Da.get();const e=ms.getActiveTasks().length;return e===0?f``:f`
            <div class="task-indicator" @click=${this.handleIndicatorClick} title="${Ka("ACTIVE_TASKS_TITLE",{taskCount:e.toString()})}">
                <wa-spinner 
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);" 
                    label="${Ka("ACTIVE_TASKS")}"
                ></wa-spinner>
                <span class="task-count">${e}</span>
            </div>
        `}};Ya.styles=_`
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
    `;Ya=sv([$("k-tasks")],Ya);var ov=Object.getOwnPropertyDescriptor,av=(t,e,i,s)=>{for(var r=s>1?void 0:s?ov(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=a(r)||r);return r};const Ca=Qi("workspace");let Kl=class extends jt{constructor(){super(...arguments),this.workspaceName=Ca("NO_WORKSPACE")}doInitUI(){this.updateWorkspaceName(),Ue(mr,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Ai.getWorkspace().then(t=>{this.workspaceName=t?.getName()||Ca("NO_WORKSPACE"),this.requestUpdate()})}handleLoadWorkspace(){Ke.execute("load_workspace",{source:this})}render(){return f`
            <wa-button 
                appearance="plain"
                size="small"
                title="${Ca("LOAD_WORKSPACE")}"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};Kl=av([$("k-workspace-name")],Kl);var nv=Object.getOwnPropertyDescriptor,lv=(t,e,i,s)=>{for(var r=s>1?void 0:s?nv(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=a(r)||r);return r};const Ea=Qi("partname");z.registerContribution(Lo,{html:"<k-part-name></k-part-name>"});let Yl=class extends jt{doBeforeUI(){this.watch(bt,()=>{this.requestUpdate()})}getPartName(){const t=bt.get();return t&&(t.tabContribution?.label||t.getAttribute("id"))||Ea("NO_PART")}render(){const e=bt.get()?.tabContribution?.icon||"box";return f`
            <wa-button 
                appearance="plain"
                size="small"
                title="${Ea("ACTIVE_PART")}">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};Yl=lv([$("k-part-name")],Yl);var cv=Object.defineProperty,dv=Object.getOwnPropertyDescriptor,$r=(t,e,i,s)=>{for(var r=s>1?void 0:s?dv(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&cv(e,i,r),r};const hv=si("KExtensions"),Pe=Qi("extensions");let Wi=class extends pt{constructor(){super(...arguments),this.filterText="",this.showRegisterDialog=!1,this.registerExtensionData={}}doInitUI(){Ue(Qs,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){H.enable(t.id,!0),this.requestUpdate()}disable(t){H.disable(t.id,!0),this.requestUpdate()}isExtensionRequired(t){const e=mt.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(t)}selectionChanged(t){const e=t.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return H.getExtensions();const t=this.filterText.toLowerCase();return H.getExtensions().filter(e=>String(e.name).toLowerCase().includes(t)||(e.description?String(e.description).toLowerCase().includes(t):!1)||e.id.toLowerCase().includes(t))}getGroupedExtensions(){const t=this.getFilteredExtensions(),e=[],i=[];return t.forEach(s=>{H.isEnabled(s.id)?e.push(s):i.push(s)}),e.sort((s,r)=>String(s.name).localeCompare(String(r.name))),i.sort((s,r)=>String(s.name).localeCompare(String(r.name))),{enabled:e,available:i}}isExternalExtension(t){return t.external===!0}handleFilterInput(t){this.filterText=t.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}async handleRegisterExtension(){try{const t=await $n("Enter extension URL or source identifier:","",!1);if(!t)return;await ms.runAsync("Registering extension",async()=>{let e=t;Mt.isGitHubUrl(t)&&(e=Mt.convertGitHubUrlToSource(t));const i=Mt.parseSource(e);i?.type==="github"?await this.fetchGitHubMetadata(i,e):(this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate())})}catch(t){he(`Failed to register extension: ${t}`)}}async fetchGitHubMetadata(t,e){try{const i=await Mt.fetchGitHubPackageJson(t),s=t.owner,r=t.repo,o=i.name||`ext.${s}-${r}`,a=i.name||`${s}/${r}`,l=i.description||"",c=i.version||"",h=i.author||(typeof i.author=="string"?i.author:i.author?.name)||"";this.registerExtensionData={id:o,name:a,description:l,url:e,version:c,author:h,icon:"puzzle-piece",external:!0},this.showRegisterDialog=!0,this.requestUpdate()}catch(i){hv.warn(`Could not fetch package.json, using defaults: ${i}`),this.registerExtensionData={url:e,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate()}}async confirmRegisterExtension(){if(!this.registerExtensionData.url){he("URL is required");return}if(!this.registerExtensionData.id){he("Extension ID is required");return}if(!this.registerExtensionData.name){he("Extension name is required");return}try{await ms.runAsync("Registering extension",async()=>{const t={id:this.registerExtensionData.id,name:this.registerExtensionData.name,description:this.registerExtensionData.description,url:this.registerExtensionData.url,version:this.registerExtensionData.version,author:this.registerExtensionData.author,icon:this.registerExtensionData.icon||"puzzle-piece",external:!0};H.registerExtension(t),await H.loadExtensionFromUrl(this.registerExtensionData.url,t.id),Nt(`Extension ${t.name} registered successfully`),this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()})}catch(t){he(`Failed to register extension: ${t}`)}}cancelRegisterExtension(){this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()}renderToolbar(){return f`
            <wa-input
                placeholder="${Pe("FILTER_PLACEHOLDER")}"
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
            ${Ne(this.showRegisterDialog,()=>f`
                <wa-dialog 
                    label="Register Extension"
                    open
                    @wa-request-close=${()=>this.cancelRegisterExtension()}
                    style="--wa-dialog-width: 500px;">
                    <div style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem;">
                        <wa-input
                            label="Extension ID *"
                            .value=${this.registerExtensionData.id||""}
                            @input=${i=>{this.registerExtensionData.id=i.target.value,this.requestUpdate()}}
                            required
                            hint="Unique identifier for the extension (e.g., 'ext.my-extension')">
                        </wa-input>
                        
                        <wa-input
                            label="Name *"
                            .value=${this.registerExtensionData.name||""}
                            @input=${i=>{this.registerExtensionData.name=i.target.value,this.requestUpdate()}}
                            required
                            hint="Display name of the extension">
                        </wa-input>
                        
                        <wa-input
                            label="Description"
                            .value=${this.registerExtensionData.description||""}
                            @input=${i=>{this.registerExtensionData.description=i.target.value,this.requestUpdate()}}
                            hint="Description of what the extension does">
                        </wa-input>
                        
                        <wa-input
                            label="URL *"
                            .value=${this.registerExtensionData.url||""}
                            @input=${i=>{this.registerExtensionData.url=i.target.value,this.requestUpdate()}}
                            required
                            readonly
                            hint="Extension source URL or identifier">
                        </wa-input>
                        
                        <div style="display: flex; gap: 0.5rem;">
                            <wa-input
                                label="Version"
                                .value=${this.registerExtensionData.version||""}
                                @input=${i=>{this.registerExtensionData.version=i.target.value,this.requestUpdate()}}
                                style="flex: 1;"
                                hint="Extension version">
                            </wa-input>
                            
                            <wa-input
                                label="Author"
                                .value=${this.registerExtensionData.author||""}
                                @input=${i=>{this.registerExtensionData.author=i.target.value,this.requestUpdate()}}
                                style="flex: 1;"
                                hint="Extension author">
                            </wa-input>
                        </div>
                        
                        <wa-input
                            label="Icon"
                            .value=${this.registerExtensionData.icon||"puzzle-piece"}
                            @input=${i=>{this.registerExtensionData.icon=i.target.value,this.requestUpdate()}}
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
                                    ${Pe("INSTALLED")} (${t.enabled.length})
                                </span>
                                ${t.enabled.map(i=>{const s=this.isExternalExtension(i);return f`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${i}>
                                            <span><k-icon name="${i.icon}"></k-icon></span> ${i.name}${s?f` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                        </wa-tree-item>
                                    `})}
                            </wa-tree-item>
                        `:""}
                        ${t.available.length>0?f`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    ${Pe("AVAILABLE")} (${t.available.length})
                                </span>
                                ${t.available.map(i=>{const s=this.isExternalExtension(i);return f`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${i}>
                                            <span><k-icon name="${i.icon}"></k-icon></span> ${i.name}${s?f` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                        </wa-tree-item>
                                    `})}
                            </wa-tree-item>
                        `:""}
                    `:""}
                    ${e?"":f`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            ${Pe("NO_MATCHES",{filterText:this.filterText})}
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${Ne(this.selectedExtension,i=>{const s=this.isExternalExtension(i),r=H.isEnabled(i.id);return f`
                                <h1><k-icon name="${i.icon}"></k-icon> ${i.name}${s?" (External)":""}</h1>
                                ${Ne(s,()=>f`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${Pe("EXTERNAL_EXTENSION")}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${Ne(r,()=>f`
                                        <wa-button 
                                            title="${this.isExtensionRequired(i.id)?Pe("REQUIRED_HINT"):Pe("DISABLE_TITLE")}" 
                                            @click="${()=>this.disable(i)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(i.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${Pe("UNINSTALL")}
                                        </wa-button>
                                        ${Ne(this.isExtensionRequired(i.id),()=>f`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>${Pe("REQUIRED_HINT")}</span>
                                            </div>
                                        `)}
                                    `,()=>f`
                                        <wa-button 
                                            title="${Pe("ENABLE_TITLE")}" 
                                            @click="${()=>this.enable(i)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;${Pe("INSTALL")}
                                        </wa-button>
                                    `)}
                                </div>

                                ${Ne(i.experimental,()=>f`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${Pe("EXPERIMENTAL")}</i></small>
                                    </div>
                                `)}

                                ${Ne(i.version||i.author,()=>f`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${Ne(i.version,()=>f`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${Pe("VERSION")} <strong>${i.version}</strong></span>
                                            </div>
                                        `)}
                                        ${Ne(i.author,()=>f`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${Pe("AUTHOR")} <strong>${i.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${i.description}</p>

                                ${Ne(i.dependencies&&i.dependencies.length>0,()=>f`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${Pe("DEPENDENCIES")}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${i.dependencies.map(o=>{const a=H.getExtensions().find(c=>c.id===o),l=H.isEnabled(o);return f`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${l?"check-circle":"circle"}" 
                                                            style="color: ${l?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        <k-icon name="${a?.icon||"puzzle-piece"}"></k-icon>
                                                        <span>${a?.name||o}</span>
                                                        ${l?"":f`
                                                            <span class="dependency-badge">${Pe("NOT_INSTALLED")}</span>
                                                        `}
                                                    </div>
                                                `})}
                                        </div>
                                        <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                            <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                            ${Pe("DEPENDENCIES_HINT")}
                                        </small>
                                    </div>
                                `)}
                            `})}
                </div>
            </wa-split-panel>
        `}};Wi.styles=_`
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
    `;$r([S()],Wi.prototype,"selectedExtension",2);$r([S()],Wi.prototype,"filterText",2);$r([S()],Wi.prototype,"showRegisterDialog",2);$r([S()],Wi.prototype,"registerExtensionData",2);Wi=$r([$("k-extensions")],Wi);var uv=Object.defineProperty,pv=Object.getOwnPropertyDescriptor,Ho=(t,e,i,s)=>{for(var r=s>1?void 0:s?pv(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&uv(e,i,r),r};const Me=Qi("logterminal");let $s=class extends pt{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=pi()}connectedCallback(){super.connectedCallback(),this.loadSettings(),Yf(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Zf()}log(t,e,i="info"){const s={timestamp:new Date,level:i,source:t,message:e};this.messages=[...this.messages,s],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const r=this.containerRef.value;r&&(r.scrollTop=r.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const t=this.messages.filter(r=>r.level==="info").length,e=this.messages.filter(r=>r.level==="warning").length,i=this.messages.filter(r=>r.level==="error").length,s=this.messages.filter(r=>r.level==="debug").length;return f`
            <k-command 
                icon="list"
                title="${Me("ALL_LOGS")}"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings(),this.updateToolbar()}}>
                ${Me("ALL")} (${this.messages.length})
            </k-command>

            <k-command 
                icon="circle-info"
                title="${Me("INFO_LOGS")}"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings(),this.updateToolbar()}}>
                ${Me("INFO")}${t>0?` (${t})`:""}
            </k-command>

            <k-command 
                icon="triangle-exclamation"
                title="${Me("WARNING_LOGS")}"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings(),this.updateToolbar()}}>
                ${Me("WARNINGS")}${e>0?` (${e})`:""}
            </k-command>

            <k-command 
                icon="circle-xmark"
                title="${Me("ERROR_LOGS")}"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings(),this.updateToolbar()}}>
                ${Me("ERRORS")}${i>0?` (${i})`:""}
            </k-command>

            <k-command 
                icon="bug"
                title="${Me("DEBUG_LOGS")}"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings(),this.updateToolbar()}}>
                ${Me("DEBUG")}${s>0?` (${s})`:""}
            </k-command>

            <wa-divider orientation="vertical"></wa-divider>

            <k-command 
                icon="arrow-down" 
                title="${this.autoScroll?Me("AUTO_SCROLL_ENABLED"):Me("AUTO_SCROLL_DISABLED")}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings(),this.updateToolbar()}}>
                ${this.autoScroll?Me("AUTO_SCROLL"):Me("MANUAL")}
            </k-command>

            <k-command 
                icon="trash" 
                title="${Me("CLEAR_LOGS")}"
                .action=${()=>this.clear()}>
                ${Me("CLEAR")}
            </k-command>
        `}render(){const t=this.getFilteredMessages();return f`
            <div class="log-terminal">
                <div class="messages" ${Jt(this.containerRef)}>
                    ${t.length===0?f`<div class="empty-state">${Me("NO_LOG_MESSAGES")}</div>`:t.map(e=>f`
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
        `}async loadSettings(){const t=await this.getDialogSetting();t&&(typeof t.filter=="string"&&(t.filter==="all"||["info","warning","error","debug"].includes(t.filter))&&(this.filter=t.filter),typeof t.autoScroll=="boolean"&&(this.autoScroll=t.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};$s.styles=_`
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
    `;Ho([S()],$s.prototype,"messages",2);Ho([S()],$s.prototype,"autoScroll",2);Ho([S()],$s.prototype,"filter",2);$s=Ho([$("k-log-terminal")],$s);var fv=Object.defineProperty,mv=Object.getOwnPropertyDescriptor,lt=(t,e,i,s)=>{for(var r=s>1?void 0:s?mv(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&fv(e,i,r),r};let Xe=class extends gr{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(t){if(!this.disabled){if(t&&t.stopPropagation(),this.action){this.action(t);return}if(this.cmd){const e=this.closest("wa-dropdown");e&&e.open!==void 0&&(e.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(t){const e=t.target;e&&e.open!==void 0&&(e.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const t=Bd.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),Ue(Wt,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=z.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){if("command"in t){const e=t,i=e.disabled?.get();return f`
                <k-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    .params=${e.params||{}}
                    ?disabled="${i}">
                    ${e.label}
                </k-command>
            `}if("html"in t){const i=t.html;return i instanceof Function?i():Zt(i)}return U}render(){const t=this.getKeybinding();return this.isInDropdown()?f`
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
                        ${this.label?this.title:U}
                    </wa-button>
                    
                    ${this.title?f`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:U}
                    
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
                    `:U}
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
        `}};Xe.styles=_`
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
    `;lt([d()],Xe.prototype,"cmd",2);lt([d({type:Object,attribute:!1})],Xe.prototype,"action",2);lt([d()],Xe.prototype,"title",2);lt([d()],Xe.prototype,"label",2);lt([d()],Xe.prototype,"icon",2);lt([d({type:Boolean})],Xe.prototype,"disabled",2);lt([d()],Xe.prototype,"appearance",2);lt([d()],Xe.prototype,"variant",2);lt([d()],Xe.prototype,"size",2);lt([d({type:Object,attribute:!1})],Xe.prototype,"params",2);lt([d()],Xe.prototype,"dropdown",2);lt([d()],Xe.prototype,"placement",2);lt([S()],Xe.prototype,"dropdownContributions",2);Xe=lt([$("k-command")],Xe);var gv=Object.defineProperty,bv=Object.getOwnPropertyDescriptor,$t=(t,e,i,s)=>{for(var r=s>1?void 0:s?bv(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&gv(e,i,r),r};const wv=Qi("fastviews");let nt=class extends gr{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=pi(),this.tabsRef=pi(),this.resizeHandleRef=pi(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(t){if(!this.disabled)if(this.containerId){const e=document.querySelector(`k-tabs#${this.containerId}`);if(!e){console.error(`k-fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(t)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(t)})}handleDrawerHide(){this.drawerOpen=!1}startResize(t){t.preventDefault(),t.stopPropagation();const e=this.drawerRef.value;if(!e)return;let s=(()=>{const a=e.shadowRoot?.querySelector('[part="panel"]');if(a&&a.offsetWidth>0)return a.offsetWidth;const h=(window.getComputedStyle(e).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(h){const u=parseFloat(h[1]),p=h[2];if(p==="px")return u;if(p==="vw")return u/100*window.innerWidth;if(p==="vh")return u/100*window.innerHeight;if(p==="%")return u/100*window.innerWidth}return 0})();s===0&&(s=window.innerWidth*.5);const r=a=>{this.resizing&&(a.preventDefault(),a.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const l=this.resizing.startX-a.clientX,c=Math.round(this.resizing.startSize+l),h=200,u=Math.round(window.innerWidth*.9);if(c>=h&&c<=u){this.drawerSize=`${c}px`;const p=this.drawerRef.value;p&&(p.style.setProperty("--size",this.drawerSize),p.style.setProperty("transition","none"))}this.resizing.rafId=null}))},o=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const a=this.drawerRef.value;a&&a.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:t.clientX,startSize:s,handleMouseMove:r,handleMouseUp:o,rafId:null},document.addEventListener("mousemove",r,{passive:!1}),document.addEventListener("mouseup",o,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),Ue(Wt,t=>{this.target&&t.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const t=z.getContributions(this.target);this.tabContributions=t.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(t){return f`
            <wa-dropdown-item 
                @click=${()=>this.handleTabClick(t)}>
                <k-icon name="${t.icon||""}" label="${t.label}" slot="icon"></k-icon>
                ${t.label}
            </wa-dropdown-item>
        `}render(){return!this.target||this.tabContributions.length===0?U:f`
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
                `:U}
                
                ${this.tabContributions.map(t=>this.renderTabContribution(t))}
            </wa-dropdown>

            ${this.containerId?U:f`
                <wa-drawer 
                    ${Jt(this.drawerRef)}
                    label="${this.title||wv("FAST_VIEWS")}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${Jt(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <k-tabs 
                        ${Jt(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </k-tabs>
                </wa-drawer>
            `}
        `}};nt.styles=_`
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
    `;$t([d()],nt.prototype,"target",2);$t([d()],nt.prototype,"title",2);$t([d()],nt.prototype,"icon",2);$t([d({type:Boolean})],nt.prototype,"disabled",2);$t([d()],nt.prototype,"appearance",2);$t([d()],nt.prototype,"size",2);$t([d()],nt.prototype,"placement",2);$t([d()],nt.prototype,"containerId",2);$t([S()],nt.prototype,"tabContributions",2);$t([S()],nt.prototype,"drawerOpen",2);$t([S()],nt.prototype,"drawerSize",2);nt=$t([$("k-fastviews")],nt);var vv=Object.getOwnPropertyDescriptor,yv=(t,e,i,s)=>{for(var r=s>1?void 0:s?vv(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=a(r)||r);return r};function xv(){let t=document.getElementById("global-dialog-container");return t||(t=document.createElement("div"),t.id="global-dialog-container",document.body.appendChild(t)),t}const jd=t=>{try{return new Intl.DisplayNames([t],{type:"language"}).of(t)||t.toUpperCase()}catch{return t.toUpperCase()}},kv=()=>{const t=bw.get(),e=new Set;for(const i of t)if(i.namespace){const s=i;for(const r in s)r!=="namespace"&&r!=="label"&&r!=="language"&&r!=="translations"&&typeof s[r]=="object"&&e.add(r)}return Array.from(e).sort()},Cv=async()=>{const t=kv(),e=Fd.get();return new Promise(i=>{const s=xv();let r=!1;const o=()=>{const h=s.querySelector("wa-dialog");h&&!r&&(h.open=!1)},a=()=>{r||(r=!0,gt(f``,s),i())},l=async h=>{await be.set(Ga,h),o()},c=f`
            <wa-dialog 
                label="Select Language" 
                open 
                light-dismiss
                @wa-request-close=${o}
                @wa-after-hide=${a}>
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
                            <span class="language-name">${jd(h)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;gt(c,s)})};let Za=class extends jt{render(){const t=Fd.get(),e=jd(t),i=`${t.toUpperCase()} ${e}`;return f`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${e}"
                @click=${()=>Cv()}>
                ${i}
            </wa-button>
        `}};Za.styles=_`
        :host {
            display: inline-block;
        }
    `;Za=yv([$("k-language-selector")],Za);var Ev=Object.defineProperty,$v=Object.getOwnPropertyDescriptor,Xd=(t,e,i,s)=>{for(var r=s>1?void 0:s?$v(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&Ev(e,i,r),r};const Gd="app-switcher";z.registerContribution(Fi,{id:Gd,label:"Switch Application",buttons:[pd],component:t=>{const e=t?.apps||[],i=t?.currentAppId,s=t?.selectApp;return f`
            <wa-scroller orientation="vertical" style="min-width: 300px; max-height: 400px; padding: var(--wa-space-m);">
                <div style="display: flex; flex-direction: column; gap: var(--wa-space-s);">
                    ${e.map(r=>f`
                        <wa-card 
                            style="cursor: pointer;"
                            variant=${r.id===i?"brand":"neutral"}
                            @click=${()=>s(r)}>
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
        `},onButton:async()=>!0});const Sv=async()=>{const t=mt.getRegisteredApps(),e=mt.getCurrentApp();if(t.length===0)return;const i={apps:t,currentAppId:e?.id,selectApp:async s=>{if(s.id===e?.id){i.close?.();return}try{await mt.setPreferredAppId(s.id),await mt.loadApp(s.id,document.body)}catch(r){console.error("Failed to switch app:",r)}finally{i.close?.()}},close:void 0};await Io.open(Gd,i)};let yo=class extends jt{doBeforeUI(){this.currentApp=mt.getCurrentApp();const t=()=>{this.currentApp=mt.getCurrentApp(),this.requestUpdate()};return window.addEventListener("app-loaded",t),()=>{window.removeEventListener("app-loaded",t)}}render(){const t=mt.getRegisteredApps(),e=this.currentApp?.name||"No App";return t.length<=1?f``:f`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current app: ${e}. Click to switch applications."
                @click=${()=>Sv()}>
                <wa-icon name="grip" style="margin-right: 0.5rem;"></wa-icon>
                ${e}
            </wa-button>
        `}};yo.styles=_`
        :host {
            display: inline-block;
        }
    `;Xd([S()],yo.prototype,"currentApp",2);yo=Xd([$("k-app-switcher")],yo);z.registerContribution(ro,{name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>f`<k-filebrowser id="${t}"></k-filebrowser>`});z.registerContribution("system.fastviews-bottomend",{name:"log-terminal",label:"Log Messages",icon:"list",component:t=>f`<k-log-terminal id="${t}"></k-log-terminal>`});z.registerContribution(kn,{slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"});z.registerContribution(vr,{label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});z.registerContribution(vr,{label:"Fast Views",html:'<k-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></k-fastviews>'});z.registerContribution(vr,{label:"Language",html:()=>f`<k-language-selector></k-language-selector>`});z.registerContribution(Ls,{label:"App Switcher",html:()=>f`<k-app-switcher></k-app-switcher>`});const Av=si("MarketplaceCatalogContributions");Av.debug("Marketplace catalog URLs are set by the app host via applyAppHostConfig()");async function Wo(t,e=!0){const i=await Ai.getWorkspace();if(!i)return null;const s=t?.path;return e&&!s?null:{workspace:i,path:s||""}}function Pn(t){return t&&typeof t.getContent=="function"&&typeof t.getSelection=="function"&&typeof t.getSnippet=="function"&&typeof t.getLanguage=="function"&&typeof t.getFilePath=="function"}async function Kd(t,e){let i;const s=t.params?.path;if(s){const r=await Ai.getWorkspace();r&&(i=await r.getResource(s))}return i||(i=Ri.get()),i}async function jo(t){try{const e=await t.getContents();return typeof e!="string"?(he("File is not a text file"),null):e}catch(e){return he(`Failed to read file: ${e.message}`),null}}function hi(t=!1){const e={filePath:null,language:null};return t?{...e,snippet:null,cursorLine:null}:e}async function Sr(t,e=!0){const i=await Wo(t,e);if(!i)return null;const{workspace:s,path:r}=i;if(!r)return null;try{const o=await s.getResource(r);return!o||!(o instanceof $i)?null:{workspace:s,path:r,file:o}}catch{return null}}fe({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace. For .geospace map files, use create_map_file instead.",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async({params:t})=>{let e=t?.path;const i=t?.contents,s=t?.ask,r=t?.extension;if((s||!e)&&(e=await $n("Enter path to new file (directories will be created if not exist):",e||""),!e))return;r&&!e.endsWith(r)&&(e+=r);const o=await Wo({path:e},!0);if(!o)return;const{workspace:a}=o;if(await a.getResource(e)&&!await Oo(`File "${e}" already exists. Do you want to overwrite it?`))return;const c=await a.getResource(e,{create:!0});return c?(i&&await c.saveContents(i),G.info("File created: "+e)):he("Could not create file: "+e),e}}});fe({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{const e=await Kd(t);if(!e){he("No resource to rename provided!");return}const i=e.getName(),s=t.params?.newName||await $n(`Enter new name for "${i}":`,i);if(!(!s||s===i))try{await e.rename(s),Nt(`Resource renamed to: ${s}`)}catch(r){he(`Failed to rename ${i}: ${r.message}`)}}}});fe({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{const e=await Kd(t);if(!e){he("No resource to delete provided!");return}const i=e.getWorkspacePath(),s=t.params&&t.params.confirm;let r=!0;if((s===void 0||s===!0)&&(r=await Oo(`Are you sure you want to delete ${i}?`)),r)try{await e.delete(),Nt("Resource deleted: "+i)}catch(o){he(`Resource ${i} could not be deleted: ${o.message||o}`)}}}});fe({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Ai.connectWorkspace(e)).catch(e=>{he(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});fe({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await Ai.getWorkspace();e||he("No workspace selected."),e.touch()}}});fe({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Sr({path:t.params?.path});if(!e)return;const{file:i}=e;await Vo.loadEditor(i)}}});fe({command:{id:"head_file",name:"Head - Show first lines",description:"Shows the first N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the beginning (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the first N lines of the file"}]},handler:{execute:async({params:t})=>{const e=await Sr(t);if(!e)return;const{file:i}=e,s=t?.lines?parseInt(t.lines,10):10;if(isNaN(s)||s<1){he("Number of lines must be a positive integer");return}const r=await jo(i);return r?r.split(`
`).slice(0,s).join(`
`):void 0}}});fe({command:{id:"tail_file",name:"Tail - Show last lines",description:"Shows the last N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the end (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the last N lines of the file"}]},handler:{execute:async({params:t})=>{const e=await Sr(t);if(!e)return;const{file:i}=e,s=t?.lines?parseInt(t.lines,10):10;if(isNaN(s)||s<1){he("Number of lines must be a positive integer");return}const r=await jo(i);return r?r.split(`
`).slice(-s).join(`
`):void 0}}});fe({command:{id:"cat_file",name:"Cat - Show file contents",description:"Shows the complete contents of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0}],output:[{name:"content",description:"the complete contents of the file"}]},handler:{execute:async({params:t})=>{const e=await Sr(t);if(!e)return;const{file:i}=e;return await jo(i)}}});fe({command:{id:"wc_file",name:"Word count",description:"Counts lines, words, and characters in a file",parameters:[{name:"path",description:"the path of the file to analyze",required:!0}],output:[{name:"lines",description:"number of lines in the file"},{name:"words",description:"number of words in the file"},{name:"characters",description:"number of characters in the file"}]},handler:{execute:async({params:t})=>{const e=await Sr(t);if(!e)return;const{file:i}=e,s=await jo(i);if(!s)return;const o=s.split(`
`).length,a=s.trim()===""?0:s.trim().split(/\s+/).filter(c=>c.length>0).length,l=s.length;return{lines:o,words:a,characters:l}}}});fe({command:{id:"file_exists",name:"Check if file exists",description:"Checks if a file exists at the given path",parameters:[{name:"path",description:"the path of the file to check, relative to the workspace",required:!0}],output:[{name:"exists",description:"true if the file exists, false otherwise"}]},handler:{execute:async({params:t})=>{const e=await Wo(t);if(!e)return!1;const{workspace:i,path:s}=e;try{return await i.getResource(s)instanceof $i}catch{return!1}}}});async function Yd(t){const e=[],i=await t.listChildren(!0);for(const s of i)if(s instanceof $i)e.push(s.getWorkspacePath());else if(s instanceof us){const r=await Yd(s);e.push(...r)}return e}fe({command:{id:"ls",name:"List files",description:"Lists files from a directory. If recursive is provided, it traverses from the provided directory down to all leaves. If no directory is provided, it will traverse from the workspace root.",parameters:[{name:"path",description:"the path of the directory to list, relative to the workspace. If not provided, uses workspace root",required:!1},{name:"recursive",description:"whether to recursively traverse all subdirectories",type:"boolean",required:!1}],output:[{name:"files",description:"array of file objects with path and size information"}]},handler:{execute:async({params:t})=>{const e=await Wo(t,!1);if(!e)return he("No workspace available"),[];const{workspace:i,path:s}=e,r=t?.recursive===!0||t?.recursive==="true";try{let o=i;if(s){const a=await i.getResource(s);if(!a)return he(`Path not found: ${s}`),[];if(!(a instanceof us))return he(`Path is not a directory: ${s}`),[];o=a}if(r){const a=await Yd(o),l=[];for(const c of a){const h=await i.getResource(c);if(h instanceof $i){const u=await h.size();l.push({path:c,size:u})}}return l}else{const a=await o.listChildren(!0),l=[];for(const c of a)if(c instanceof $i){const h=await c.size();l.push({path:c.getWorkspacePath(),size:h})}return l}}catch(o){return he(`Failed to list files: ${o.message}`),[]}}}});fe({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!Pn(e))return{...hi(),content:null};try{return{content:e.getContent(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...hi(),content:null}}}}});fe({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!Pn(e))return{...hi(),selection:null};try{return{selection:e.getSelection(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...hi(),selection:null}}}}});fe({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!Pn(e))return hi(!0);try{const i=t.params?.lines?parseInt(t.params.lines,10):5;if(isNaN(i)||i<0)return hi(!0);const s=e.getSnippet(i);return s?{snippet:s.snippet,filePath:e.getFilePath(),language:e.getLanguage(),cursorLine:s.cursorLine}:hi(!0)}catch{return hi(!0)}}}});fe({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{const e=mt.getCurrentApp();if(!e){he("No app loaded");return}const i=bo.hasPackages(),s=bo.renderTree();let r=null;const o=()=>(r||(r=document.getElementById("global-dialog-container")||document.createElement("div"),r.id||(r.id="global-dialog-container",document.body.appendChild(r))),r),a=()=>{r&&gt(f``,r)},l=D=>{const E=se.parse(D,{async:!1});return f`${Zt(E)}`};let c=[];if(e.releaseHistory)if(typeof e.releaseHistory=="function")try{c=await e.releaseHistory()}catch(D){console.error("Failed to load release history from app:",D),c=[]}else c=e.releaseHistory;e.version;const h=c.length>0?c.findIndex(D=>D.tag_name===e.version):-1,u=h>=0?h:0;let p=u;const m=D=>{if(c.length===0)return"";const E=c[D],M=E.tag_name===e.version;let T=`**Version:** ${E.tag_name}`;M&&(T+=" (Current)"),T+=`

`;const I=new Date(E.published_at).toLocaleDateString();if(T+=`**Released:** ${I}

`,!M){const O=e.version.replace(/^v/,""),F=E.tag_name.replace(/^v/,""),P=O.split(".").map(Number),we=F.split(".").map(Number);let ve=!1;for(let ce=0;ce<Math.max(P.length,we.length);ce++){const Oe=P[ce]||0,Ce=we[ce]||0;if(Ce>Oe){ve=!0;break}if(Ce<Oe)break}ve&&(T+=`⚠️ **Update available - reload page to update**

`)}return E.body&&(T+=`---

${E.body}`),T},b=()=>{a()},w=()=>{a()},k=D=>{const E=m(D),M=c.length>0,T=f`
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
                                        ${l(E)}
                                    </wa-tab-panel>
                                `:""}
                                
                                ${i?f`
                                    <wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>
                                    <wa-tab-panel name="packages">
                                        ${s}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${M?f`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${D===c.length-1}
                                    @click=${()=>{D<c.length-1&&(p=D+1,k(p))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${D===0}
                                    @click=${()=>{D>0&&(p=D-1,k(p))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;gt(T,o())};return k(u),new Promise(D=>{const E=()=>{r?.querySelector("wa-dialog[open]")?setTimeout(E,100):D()};E()})}}});fe({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});fe({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=or.get()||bt.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const t=bt.get();return!t||!t.isDirty()}}});fe({command:{id:"run_python",name:"Run Python Cell",description:"Runs active Python code in a supporting context (e.g. notebook, terminal, etc.)",keyBinding:"CTRL+R",parameters:[]}});const Zd="theme";async function Jd(t){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(t)}async function _v(){const t=await be.get(Zd);await Jd(t||"wa-dark")}async function Tv(t){await be.set(Zd,t)}fe({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{const i=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await Jd(i),await Tv(i)}},contribution:{target:Ls,icon:"circle-half-stroke",label:"Theme Switcher"}});_v().catch(t=>{console.error("Failed to load theme preference:",t)});fe({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:Ls,icon:"expand",label:"Fullscreen"}});fe({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>f`
                <k-extensions></k-extensions>`,Vo.loadEditor(e).then()}},contribution:{target:Ls,icon:"puzzle-piece",label:"Open Extensions"}});fe({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async t=>H.getExtensions().map(i=>({id:i.id,name:i.name,description:i.description,experimental:i.experimental,enabled:H.isEnabled(i.id)}))}});fe({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?he(t):Nt(t))}}});Ae.put("constants",Km);Ts.put("html",f);Ts.put("render",gt);Ts.put("toastInfo",Nt);Ts.put("toastError",he);Ts.put("toastWarning",Wf);let Zl=!1;function Lv(t){Zl||(Zl=!0,t.packageInfo&&bo.addPackage(t.packageInfo),t.marketplaceCatalogUrls?.length&&t.marketplaceCatalogUrls.forEach(e=>{qd.addCatalogUrl(e).catch(()=>{})}))}var Rv=Object.defineProperty,Iv=Object.getOwnPropertyDescriptor,Ar=(t,e,i,s)=>{for(var r=s>1?void 0:s?Iv(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&Rv(e,i,r),r};let Ss=class extends En{constructor(){super(...arguments),this.showBottomSidebar=!1,this.showBottomPanel=!1,this.showLeftSidebar=!0,this.showAuxSidebar=!0}createRenderRoot(){return this}getGridSizes(){return this.showLeftSidebar&&this.showAuxSidebar?"15%, 65%, 20%":this.showLeftSidebar?"15%, 85%":this.showAuxSidebar?"80%, 20%":"100%"}render(){return f`
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
                <k-toolbar id=${od}></k-toolbar>
                <k-toolbar id=${ad}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Ls}></k-toolbar>
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
                                    <k-tabs id="${ro}"></k-tabs>
                                    <k-tabs id="${nd}"></k-tabs>
                                </k-resizable-grid>
                            `:f`<k-tabs id="${ro}"></k-tabs>`}
                    `:U}
                
                ${this.showBottomPanel?f`
                        <k-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <k-tabs id="${ci}"></k-tabs>
                            <k-tabs id="${cd}"></k-tabs>
                        </k-resizable-grid>
                    `:f`<k-tabs id="${ci}"></k-tabs>`}
                
                ${this.showAuxSidebar?f`<k-tabs id="${ld}"></k-tabs>`:U}
            </k-resizable-grid>
            
            <div class="toolbar-bottom">
                <k-toolbar id=${kn}></k-toolbar>
                <k-toolbar id=${Lo}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${vr}></k-toolbar>
            </div>
        `}};Ar([d({type:Boolean,attribute:"show-bottom-sidebar"})],Ss.prototype,"showBottomSidebar",2);Ar([d({type:Boolean,attribute:"show-bottom-panel"})],Ss.prototype,"showBottomPanel",2);Ar([d({type:Boolean,attribute:"show-left-sidebar"})],Ss.prototype,"showLeftSidebar",2);Ar([d({type:Boolean,attribute:"show-aux-sidebar"})],Ss.prototype,"showAuxSidebar",2);Ss=Ar([$("k-standard-app")],Ss);const Ov="@kispace-io/app",Dv="0.0.0",zv={"@kispace-io/core":"*","@kispace-io/extension-ai-system":"*","@kispace-io/extension-command-palette":"*","@kispace-io/extension-download":"*","@kispace-io/extension-git":"*","@kispace-io/extension-github-service":"*","@kispace-io/extension-howto-system":"*","@kispace-io/extension-in-browser-ml":"*","@kispace-io/extension-linuxterminal":"*","@kispace-io/extension-md-editor":"*","@kispace-io/extension-media-viewer":"*","@kispace-io/extension-memory-usage":"*","@kispace-io/extension-monaco-editor":"*","@kispace-io/extension-notebook":"*","@kispace-io/extension-python-runtime":"*","@kispace-io/extension-rag-system":"*","@kispace-io/extension-settings-tree":"*","@kispace-io/extension-unzip":"*","@kispace-io/extension-webdav":"*","@kispace-io/extension-webllm":"*","@kispace-io/extension-certs":"*","pace-js":"^1.2.4"},Pv={typescript:"^5.9.3",vite:"^7.1.12"},Mv={catalogUrls:["https://raw.githubusercontent.com/kispace-io/appspace-marketplace/main/catalogs/extensions.json","https://raw.githubusercontent.com/kispace-io/appspace-marketplace/main/catalogs/apps.json"]},Ys={name:Ov,version:Dv,dependencies:zv,devDependencies:Pv,marketplace:Mv},Nv="extensions",Fv={EXT_GIT_NAME:"Git Support",EXT_GIT_DESC:"Git commands and UI elements"},Uv={EXT_GIT_NAME:"Git-Unterstützung",EXT_GIT_DESC:"Git-Befehle und UI-Elemente"},Bv={namespace:Nv,en:Fv,de:Uv};z.registerContribution(le,Bv);const Jl=_e("extensions");H.registerExtension({id:"system.git",name:Jl("EXT_GIT_NAME"),description:Jl("EXT_GIT_DESC"),loader:()=>ke(()=>import("./git-extension-CQF8f_hX.js"),[]),icon:"code-branch",experimental:!0});const qv="extensions",Vv={EXT_GITHUB_SERVICE_NAME:"GitHub Service",EXT_GITHUB_SERVICE_DESC:"GitHub API service for fetching release information"},Hv={EXT_GITHUB_SERVICE_NAME:"GitHub-Service",EXT_GITHUB_SERVICE_DESC:"GitHub-API-Service zum Abrufen von Release-Informationen"},Wv={namespace:qv,en:Vv,de:Hv};z.registerContribution(le,Wv);const Ql=_e("extensions");H.registerExtension({id:"system.github-service",name:Ql("EXT_GITHUB_SERVICE_NAME"),description:Ql("EXT_GITHUB_SERVICE_DESC"),loader:()=>ke(()=>import("./github-service-extension-C-kuSNTI.js"),[]),icon:"code-branch"});const jv="extensions",Xv={EXT_PYTHONRUNTIME_NAME:"Python Runtime",EXT_PYTHONRUNTIME_DESC:"Pyodide runtime, Python package management, and Run Python Script command"},Gv={EXT_PYTHONRUNTIME_NAME:"Python-Runtime",EXT_PYTHONRUNTIME_DESC:"Pyodide-Runtime, Python-Paketverwaltung und Befehl Python-Skript ausführen"},Kv={namespace:jv,en:Xv,de:Gv};z.registerContribution(le,Kv);const ec=_e("extensions");H.registerExtension({id:"system.pythonruntime",name:ec("EXT_PYTHONRUNTIME_NAME"),description:ec("EXT_PYTHONRUNTIME_DESC"),loader:()=>ke(()=>import("./python-runtime-extension-Co0IKAUS.js"),__vite__mapDeps([0,1])),icon:"k python"});var Yv=Object.defineProperty,Zv=Object.getOwnPropertyDescriptor,Ps=(t,e,i,s)=>{for(var r=s>1?void 0:s?Zv(e,i):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(s?a(e,i,r):a(r))||r);return s&&r&&Yv(e,i,r),r};let Si=class extends ui{constructor(){super(...arguments),this.open=!1,this.packages=[],this.loadingPackages=!1}configure(t){this.packages=t.packages||[],this.pyenv=t.pyenv,this.onPackageAdded=t.onPackageAdded,this.onPackageRemoved=t.onPackageRemoved}show(){this.open=!0}hide(){this.open=!1}addPackage(t){if(!t||t.trim()==="")return;const e=t.trim();this.packages.includes(e)||(this.packages=[...this.packages,e],this.onPackageAdded?.(e))}removePackage(t){this.packages.indexOf(t)>-1&&(this.packages=this.packages.filter(i=>i!==t),this.onPackageRemoved?.(t))}async reloadPackages(){if(this.pyenv){this.loadingPackages=!0,this.packageLoadError=void 0;try{await this.pyenv.loadPackages(this.packages)}catch(t){this.packageLoadError=String(t)}finally{this.loadingPackages=!1}}}render(){let t;return f`
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
                            ${Jt(e=>t=e)}
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
                            ${jc(this.packages,e=>e,e=>f`
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
        `}};Si.styles=_`
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
    `;Ps([d({type:Boolean})],Si.prototype,"open",2);Ps([d({type:Array})],Si.prototype,"packages",2);Ps([d({attribute:!1})],Si.prototype,"pyenv",2);Ps([S()],Si.prototype,"loadingPackages",2);Ps([S()],Si.prototype,"packageLoadError",2);Si=Ps([$("k-python-package-manager")],Si);class Jv{showPackageManager(e){return this.managerInstance||(this.managerInstance=document.createElement("k-python-package-manager"),document.body.appendChild(this.managerInstance)),this.managerInstance.configure(e),this.managerInstance.show(),this.managerInstance}getManager(){return this.managerInstance}}const Qv=new Jv,X2=t=>{Ae.put("pythonPackageManagerService",Qv)},ey="extensions",ty={EXT_LINUXTERMINAL_NAME:"Linux terminal",EXT_LINUXTERMINAL_DESC:"Linux terminal view"},iy={EXT_LINUXTERMINAL_NAME:"Linux-Terminal",EXT_LINUXTERMINAL_DESC:"Linux-Terminalansicht"},sy={namespace:ey,en:ty,de:iy};z.registerContribution(le,sy);const tc=_e("extensions");H.registerExtension({id:"system.linuxterminal",name:tc("EXT_LINUXTERMINAL_NAME"),description:tc("EXT_LINUXTERMINAL_DESC"),loader:()=>ke(()=>import("./k-linuxterminal-cayGqr_r.js"),[]),icon:"terminal",experimental:!0});const ry="extensions",oy={EXT_WEBLLM_NAME:"WebLLM",EXT_WEBLLM_DESC:"In-Browser LLM inference"},ay={EXT_WEBLLM_NAME:"WebLLM",EXT_WEBLLM_DESC:"LLM-Inferenz im Browser"},ny={namespace:ry,en:oy,de:ay};z.registerContribution(le,ny);const ic=_e("extensions");H.registerExtension({id:"system.webllm",name:ic("EXT_WEBLLM_NAME"),description:ic("EXT_WEBLLM_DESC"),loader:()=>ke(()=>import("./webllmservice-D5Epn6_5.js"),[]),icon:"robot"});const ly="extensions",cy={EXT_P12SPLITTER_NAME:".p12 file splitter",EXT_P12SPLITTER_DESC:"Adds a command to split/separate a .p12 file into private/public and additional .pem files"},dy={EXT_P12SPLITTER_NAME:".p12-Datei-Splitter",EXT_P12SPLITTER_DESC:"Fügt einen Befehl hinzu, um eine .p12-Datei in private/öffentliche und zusätzliche .pem-Dateien zu trennen"},hy={namespace:ly,en:cy,de:dy};z.registerContribution(le,hy);const sc=_e("extensions");H.registerExtension({id:"system.p12splitter",name:sc("EXT_P12SPLITTER_NAME"),description:sc("EXT_P12SPLITTER_DESC"),loader:()=>ke(()=>import("./p12-splitter-jIDknhix.js"),__vite__mapDeps([2,1])),icon:"certificate",dependencies:["system.pythonruntime"]});const uy="extensions",py={EXT_NOTEBOOK_NAME:"Jupyter-like Notebook Editor",EXT_NOTEBOOK_DESC:"View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering"},fy={EXT_NOTEBOOK_NAME:"Jupyter-ähnlicher Notebook-Editor",EXT_NOTEBOOK_DESC:"Anzeigen und Ausführen von Jupyter-ähnlichen Notebooks (.ipynb) mit Python-Codeausführung und Markdown-Rendering"},my={namespace:uy,en:py,de:fy};z.registerContribution(le,my);const rc=_e("extensions");H.registerExtension({id:"system.notebook",name:rc("EXT_NOTEBOOK_NAME"),description:rc("EXT_NOTEBOOK_DESC"),loader:()=>ke(()=>import("./notebook-extension-eRcK_wNs.js"),[]),icon:"k jupyter",dependencies:["system.pythonruntime"]});const gy="extensions",by={EXT_COMMANDPALETTE_NAME:"Command Palette",EXT_COMMANDPALETTE_DESC:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)"},wy={EXT_COMMANDPALETTE_NAME:"Befehls-Palette",EXT_COMMANDPALETTE_DESC:"VS Code-ähnliche Befehls-Palette oben in der Mitte für schnelle Befehlsausführung (Strg+Umschalt+P)"},vy={namespace:gy,en:by,de:wy};z.registerContribution(le,vy);const oc=_e("extensions");H.registerExtension({id:"system.commandpalette",name:oc("EXT_COMMANDPALETTE_NAME"),description:oc("EXT_COMMANDPALETTE_DESC"),loader:()=>ke(()=>import("./command-palette-extension-kXHBw-06.js"),[]),icon:"terminal"});const yy="extensions",xy={EXT_DOWNLOAD_NAME:"Download Files",EXT_DOWNLOAD_DESC:"Download files from URLs to the workspace"},ky={EXT_DOWNLOAD_NAME:"Dateien herunterladen",EXT_DOWNLOAD_DESC:"Dateien von URLs in den Arbeitsbereich herunterladen"},Cy={namespace:yy,en:xy,de:ky};z.registerContribution(le,Cy);const ac=_e("extensions");H.registerExtension({id:"system.download",name:ac("EXT_DOWNLOAD_NAME"),description:ac("EXT_DOWNLOAD_DESC"),loader:()=>ke(()=>import("./download-extension-BOZDGeOD.js"),[]),icon:"download"});const Ey="extensions",$y={EXT_UNZIP_NAME:"Unzip Archives",EXT_UNZIP_DESC:"Extract zip archives to the workspace"},Sy={EXT_UNZIP_NAME:"Archive entpacken",EXT_UNZIP_DESC:"Zip-Archive in den Arbeitsbereich extrahieren"},Ay={namespace:Ey,en:$y,de:Sy};z.registerContribution(le,Ay);const nc=_e("extensions");H.registerExtension({id:"system.unzip",name:nc("EXT_UNZIP_NAME"),description:nc("EXT_UNZIP_DESC"),loader:()=>ke(()=>import("./unzip-extension-BmtxebcE.js"),[]),icon:"box-archive"});const _y="extensions",Ty={EXT_MDEDITOR_NAME:"Markdown Editor",EXT_MDEDITOR_DESC:"View and render Markdown (.md) files"},Ly={EXT_MDEDITOR_NAME:"Markdown-Editor",EXT_MDEDITOR_DESC:"Anzeigen und Rendern von Markdown (.md) Dateien"},Ry={namespace:_y,en:Ty,de:Ly};z.registerContribution(le,Ry);const lc=_e("extensions");H.registerExtension({id:"system.mdeditor",name:lc("EXT_MDEDITOR_NAME"),description:lc("EXT_MDEDITOR_DESC"),loader:()=>ke(()=>import("./md-editor-extension-D4ulBLXB.js"),[]),icon:"book"});const Iy="extensions",Oy={EXT_MEDIAVIEWER_NAME:"Media Viewer",EXT_MEDIAVIEWER_DESC:"View PDF, image, and HTML files in the browser"},Dy={EXT_MEDIAVIEWER_NAME:"Medien-Viewer",EXT_MEDIAVIEWER_DESC:"PDF-, Bild- und HTML-Dateien im Browser anzeigen"},zy={namespace:Iy,en:Oy,de:Dy};z.registerContribution(le,zy);const cc=_e("extensions");H.registerExtension({id:"system.mediaviewer",name:cc("EXT_MEDIAVIEWER_NAME"),description:cc("EXT_MEDIAVIEWER_DESC"),loader:()=>ke(()=>import("./media-viewer-extension-CAKQ6Dw4.js"),[]),icon:"image"});const Py="extensions",My={EXT_MONACO_NAME:"Monaco Code Editor",EXT_MONACO_DESC:"Code editor with syntax highlighting, code completion, and Python execution support"},Ny={EXT_MONACO_NAME:"Monaco-Code-Editor",EXT_MONACO_DESC:"Code-Editor mit Syntaxhervorhebung, Code-Vervollständigung und Python-Ausführungsunterstützung"},Fy={namespace:Py,en:My,de:Ny};z.registerContribution(le,Fy);const dc=_e("extensions");H.registerExtension({id:"system.monaco",name:dc("EXT_MONACO_NAME"),description:dc("EXT_MONACO_DESC"),loader:()=>ke(()=>import("./monaco-editor-extension-C4WYxnyI.js"),[]),icon:"file-pen",dependencies:["system.pythonruntime"]});const Uy="extensions",By={EXT_MEMORYUSAGE_NAME:"Memory Usage Monitor",EXT_MEMORYUSAGE_DESC:"Displays JavaScript heap memory usage in the bottom toolbar"},qy={EXT_MEMORYUSAGE_NAME:"Speicherverbrauch-Monitor",EXT_MEMORYUSAGE_DESC:"Zeigt die JavaScript-Heap-Speichernutzung in der unteren Symbolleiste an"},Vy={namespace:Uy,en:By,de:qy};z.registerContribution(le,Vy);const hc=_e("extensions");H.registerExtension({id:"system.memoryusage",name:hc("EXT_MEMORYUSAGE_NAME"),description:hc("EXT_MEMORYUSAGE_DESC"),loader:()=>ke(()=>import("./memory-usage-extension-CWJew8V-.js"),[]),icon:"microchip"});const Hy="extensions",Wy={EXT_WEBDAV_NAME:"WebDAV Workspace",EXT_WEBDAV_DESC:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration"},jy={EXT_WEBDAV_NAME:"WebDAV-Arbeitsbereich",EXT_WEBDAV_DESC:"Verbinden Sie sich mit WebDAV-Servern (Nextcloud, ownCloud) als Arbeitsbereichsordner für Cloud-Speicher-Integration"},Xy={namespace:Hy,en:Wy,de:jy};z.registerContribution(le,Xy);const uc=_e("extensions");H.registerExtension({id:"system.webdav",name:uc("EXT_WEBDAV_NAME"),description:uc("EXT_WEBDAV_DESC"),loader:()=>ke(()=>import("./webdav-extension-I-sfAyoJ.js"),[]),icon:"cloud"});const Gy="extensions",Ky={EXT_SETTINGS_TREE_NAME:"Settings Tree Editor",EXT_SETTINGS_TREE_DESC:"Tree-based editor for settings with in-place editing"},Yy={EXT_SETTINGS_TREE_NAME:"Einstellungs-Baum-Editor",EXT_SETTINGS_TREE_DESC:"Baumbasierter Editor für Einstellungen mit direkter Bearbeitung"},Zy={namespace:Gy,en:Ky,de:Yy};z.registerContribution(le,Zy);const pc=_e("extensions");H.registerExtension({id:"system.settings-tree",name:pc("EXT_SETTINGS_TREE_NAME"),description:pc("EXT_SETTINGS_TREE_DESC"),loader:()=>ke(()=>import("./settings-tree-extension-DEZZFutA.js"),[]),icon:"sitemap"});const Jy="extensions",Qy={EXT_IN_BROWSER_ML_NAME:"In-Browser ML",EXT_IN_BROWSER_ML_DESC:"In-browser machine learning service using transformers.js for specialized tasks (zero-shot classification, embeddings, etc.)"},e2={EXT_IN_BROWSER_ML_NAME:"ML im Browser",EXT_IN_BROWSER_ML_DESC:"Maschinelles Lernen im Browser mit transformers.js für spezialisierte Aufgaben (Zero-Shot-Klassifizierung, Embeddings usw.)"},t2={namespace:Jy,en:Qy,de:e2};z.registerContribution(le,t2);const fc=_e("extensions");H.registerExtension({id:"system.in-browser-ml",name:fc("EXT_IN_BROWSER_ML_NAME"),description:fc("EXT_IN_BROWSER_ML_DESC"),loader:()=>ke(()=>import("./in-browser-ml-extension-CktDRUNh.js"),[]),icon:"brain"});var Qd=(t=>(t.ZERO_SHOT_CLASSIFICATION="Xenova/distilbert-base-uncased-mnli",t.FEATURE_EXTRACTION="Xenova/all-MiniLM-L6-v2",t.TEXT_CLASSIFICATION="Xenova/distilbert-base-uncased-finetuned-sst-2-english",t.QUESTION_ANSWERING="Xenova/distilbert-base-cased-distilled-squad",t.SUMMARIZATION="Xenova/distilbart-cnn-6-6",t.TRANSLATION_EN_FR="Xenova/opus-mt-en-fr",t.FILL_MASK="Xenova/distilbert-base-uncased",t.SENTENCE_SIMILARITY="Xenova/all-MiniLM-L6-v2",t.TOKEN_CLASSIFICATION="Xenova/distilbert-base-uncased-finetuned-conll03-english",t.IMAGE_CLASSIFICATION="Xenova/vit-base-patch16-224",t.OBJECT_DETECTION="Xenova/detr-resnet-50",t.AUTOMATIC_SPEECH_RECOGNITION="Xenova/whisper-tiny",t.AUDIO_CLASSIFICATION="Xenova/wav2vec2-base",t))(Qd||{}),eh=(t=>(t.ZERO_SHOT_CLASSIFICATION="zero-shot-classification",t.FEATURE_EXTRACTION="feature-extraction",t.TEXT_CLASSIFICATION="text-classification",t.SENTIMENT_ANALYSIS="sentiment-analysis",t.QUESTION_ANSWERING="question-answering",t.SUMMARIZATION="summarization",t.TRANSLATION="translation",t.FILL_MASK="fill-mask",t.SENTENCE_SIMILARITY="sentence-similarity",t.TOKEN_CLASSIFICATION="token-classification",t.IMAGE_CLASSIFICATION="image-classification",t.OBJECT_DETECTION="object-detection",t.AUTOMATIC_SPEECH_RECOGNITION="automatic-speech-recognition",t.AUDIO_CLASSIFICATION="audio-classification",t.IMAGE_TO_TEXT="image-to-text",t.TEXT_TO_IMAGE="text-to-image",t.IMAGE_SEGMENTATION="image-segmentation",t.DEPTH_ESTIMATION="depth-estimation",t))(eh||{});function i2(t){switch(t){case"zero-shot-classification":return"Xenova/distilbert-base-uncased-mnli";case"feature-extraction":return"Xenova/all-MiniLM-L6-v2";case"text-classification":case"sentiment-analysis":return"Xenova/distilbert-base-uncased-finetuned-sst-2-english";case"question-answering":return"Xenova/distilbert-base-cased-distilled-squad";case"summarization":return"Xenova/distilbart-cnn-6-6";case"translation":return"Xenova/opus-mt-en-fr";case"fill-mask":return"Xenova/distilbert-base-uncased";case"sentence-similarity":return"Xenova/all-MiniLM-L6-v2";case"token-classification":return"Xenova/distilbert-base-uncased-finetuned-conll03-english";case"image-classification":return"Xenova/vit-base-patch16-224";case"object-detection":return"Xenova/detr-resnet-50";case"automatic-speech-recognition":return"Xenova/whisper-tiny";case"audio-classification":return"Xenova/wav2vec2-base";default:return null}}let $a=null,mc=!1;async function th(){$a||($a=ke(()=>import("./transformers-cu5nioww.js"),__vite__mapDeps([3,4])));const t=await $a;return mc||(t.env.allowRemoteModels=!0,t.env.allowLocalModels=!1,t.env.remoteHost="https://huggingface.co",mc=!0),t}async function s2(t){const{env:e}=await th();t&&t.trim()?e.useAuthToken=t.trim():e.useAuthToken=null}const Zs=si("InBrowserMLService");class cs{constructor(){this.pipelines=new Map,this.loadingPipelines=new Set}static getInstance(){return cs.instance||(cs.instance=new cs),cs.instance}setAuthToken(e){s2(e).then(()=>{e&&e.trim()&&Zs.info("Hugging Face token set for authenticated model access")}).catch(i=>{Zs.warn(`Failed to configure auth token: ${i instanceof Error?i.message:String(i)}`)})}async getPipeline(e,i,s={}){if(!i&&typeof e!="string"){const l=i2(e);l&&(i=l)}const r=e,o=i,a=`${r}:${o}`;if(this.pipelines.has(a))return this.pipelines.get(a);if(this.loadingPipelines.has(a)){for(;this.loadingPipelines.has(a);)await new Promise(l=>setTimeout(l,100));return this.pipelines.get(a)}this.loadingPipelines.add(a);try{Zs.info(`Loading transformers.js pipeline: ${r} with model ${o}...`);const{pipeline:l}=await th(),c=await l(r,o,{quantized:!0,...s});return this.pipelines.set(a,c),Zs.info(`Pipeline ${a} loaded successfully`),c}catch(l){const c=l instanceof Error?l.message:String(l);throw Zs.error(`Failed to load pipeline ${a}: ${c}`),l}finally{this.loadingPipelines.delete(a)}}clearPipeline(e,i){const o=`${e}:${i}`;this.pipelines.delete(o)}clearAllPipelines(){this.pipelines.clear()}}const r2=cs.getInstance(),o2="extensions",a2={EXT_AI_SYSTEM_NAME:"AI System",EXT_AI_SYSTEM_DESC:"Modern AI service with streaming support and agent workflows"},n2={EXT_AI_SYSTEM_NAME:"KI-System",EXT_AI_SYSTEM_DESC:"Modernes KI-Service mit Streaming-Unterstützung und Agent-Workflows"},l2={namespace:o2,en:a2,de:n2};z.registerContribution(le,l2);const gc=_e("extensions");H.registerExtension({id:"system.ai-system",name:gc("EXT_AI_SYSTEM_NAME"),description:gc("EXT_AI_SYSTEM_DESC"),loader:()=>ke(()=>import("./ai-system-extension-Dtzh_FGo.js"),[]),icon:"robot",dependencies:["system.in-browser-ml"]});const ih="events/aiservice/streamStarted",sh="events/aiservice/streamChunk",rh="events/aiservice/streamComplete",Xr="events/aiservice/streamError",oh="events/aiservice/aiConfigChanged",ah="events/aiservice/agentWorkflowStarted",nh="events/aiservice/agentWorkflowComplete",lh="events/aiservice/agentWorkflowError",ch="aiservice.agents",dh="aiservice.chatProviders",hh="aiservice.promptEnhancers",os="aiConfig",uh={defaultProvider:"openai",providers:[]},Ja=10,G2=Object.freeze(Object.defineProperty({__proto__:null,AI_CONFIG_TEMPLATE:uh,CID_AGENTS:ch,CID_CHAT_PROVIDERS:dh,CID_PROMPT_ENHANCERS:hh,KEY_AI_CONFIG:os,MAX_TOOL_ITERATIONS:Ja,TOPIC_AGENT_WORKFLOW_COMPLETE:nh,TOPIC_AGENT_WORKFLOW_ERROR:lh,TOPIC_AGENT_WORKFLOW_STARTED:ah,TOPIC_AICONFIG_CHANGED:oh,TOPIC_AI_STREAM_CHUNK:sh,TOPIC_AI_STREAM_COMPLETE:rh,TOPIC_AI_STREAM_ERROR:Xr,TOPIC_AI_STREAM_STARTED:ih},Symbol.toStringTag,{value:"Module"}));class ph{constructor(){this.decoder=new TextDecoder}*processLines(e){for(const i of e)i.trim()!==""&&(yield i)}}class c2 extends ph{constructor(){super(...arguments),this.usage=null}async*parse(e){let i="";this.usage=null;try{for(;;){const{done:r,value:o}=await e.read();if(r)break;i+=this.decoder.decode(o,{stream:!0});const a=i.split(`
`);i=a.pop()||"";for(const l of this.processLines(a))if(l.startsWith("data: ")){const c=l.slice(6).trim();if(c==="[DONE]"){const h={type:"done",content:""};this.usage&&(h.metadata={usage:this.usage}),yield h;continue}try{const h=JSON.parse(c);if(h.error){yield{type:"error",content:h.error.message||"Unknown error",metadata:h.error};continue}this.extractUsage(h);const u=this.parseChunk(h);u&&(yield u)}catch{continue}}}if(i.trim()&&i.startsWith("data: ")){const r=i.slice(6).trim();if(r!=="[DONE]")try{const o=JSON.parse(r);this.extractUsage(o);const a=this.parseChunk(o);a&&(yield a)}catch{}}const s={type:"done",content:""};this.usage&&(s.metadata={usage:this.usage}),yield s}finally{e.releaseLock()}}extractUsage(e){if(e.usage){const i=e.usage;this.usage={promptTokens:i.prompt_tokens||0,completionTokens:i.completion_tokens||0,totalTokens:i.total_tokens||0,estimated:!1}}}parseChunk(e){const i=e.choices?.[0]?.delta,s=e.choices?.[0];if(i?.content)return{type:"token",content:i.content,message:{role:i.role||"assistant",content:s?.message?.content||i.content}};if(s?.message?.tool_calls){const r=this.parseToolCalls(s.message.tool_calls,!0);if(r.length>0)return{type:"token",content:"",toolCalls:r}}else if(i?.tool_calls||s?.delta?.tool_calls){const r=this.parseToolCalls(i?.tool_calls||s?.delta?.tool_calls||[],!1);if(r.length>0)return{type:"token",content:"",toolCalls:r}}return null}parseToolCalls(e,i=!1){return e.filter(s=>s.function!==void 0).map((s,r)=>({id:s.id||`call_${s.index!==void 0?s.index:r}_${Date.now()}`,type:"function",function:{name:s.function?.name||"",arguments:s.function?.arguments||(i?"{}":"")},_index:s.index!==void 0?s.index:r}))}}class d2 extends ph{constructor(){super(...arguments),this.usage=null}async*parse(e){let i="";this.usage=null;try{for(;;){const{done:r,value:o}=await e.read();if(r)break;i+=this.decoder.decode(o,{stream:!0});const a=i.split(`
`);i=a.pop()||"";for(const l of this.processLines(a))try{const c=JSON.parse(l);if(c.error){yield{type:"error",content:c.error,metadata:c};continue}if(c.done){this.extractUsage(c);const h={type:"done",content:""};this.usage&&(h.metadata={usage:this.usage}),yield h;continue}c.message?.content?yield{type:"token",content:c.message.content,message:{role:c.message.role||"assistant",content:c.message.content}}:c.response&&(yield{type:"token",content:c.response,message:{role:"assistant",content:c.response}})}catch{continue}}if(i.trim())try{const r=JSON.parse(i);r.done&&this.extractUsage(r),r.message?.content&&(yield{type:"token",content:r.message.content,message:{role:r.message.role||"assistant",content:r.message.content}})}catch{}const s={type:"done",content:""};this.usage&&(s.metadata={usage:this.usage}),yield s}finally{e.releaseLock()}}extractUsage(e){if(e.prompt_eval_count!==void 0||e.eval_count!==void 0){const i=e.prompt_eval_count||0,s=e.eval_count||0;this.usage={promptTokens:i,completionTokens:s,totalTokens:i+s,estimated:!1}}}}class fh{createParser(e,i){return e.includes("text/event-stream")||i.includes("openai")?new c2:new d2}async getAvailableModels(e){if(!e.chatApiEndpoint)return[];try{const i=e.chatApiEndpoint;let s=i;if(i.includes("/v1/chat/completions"))s=i.replace("/v1/chat/completions","");else if(i.includes("/api/v1/chat/completions"))s=i.replace("/api/v1/chat/completions","");else if(i.includes("/api/chat/completion"))s=i.replace("/api/chat/completion","");else try{const h=new URL(i);s=`${h.protocol}//${h.host}`}catch{return[]}const r=`${s}/v1/models`,o={"Content-Type":"application/json"};e.apiKey&&(o.Authorization=`Bearer ${e.apiKey}`);const a=await fetch(r,{method:"GET",headers:o});return a.ok?((await a.json()).data||[]).map(h=>({id:h.id,name:h.name||h.id})):[]}catch{return[]}}async*stream(e){const i={model:e.model,stream:!0,messages:e.messages,...e.chatConfig.parameters};e.tools&&e.tools.length>0&&(i.tools=e.tools,i.tool_choice="auto");const s=await fetch(e.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${e.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(i),signal:e.signal});if(!s.ok){const c=await s.text().catch(()=>"Unknown error");yield{type:"error",content:`HTTP ${s.status}: ${c}`,metadata:{status:s.status,statusText:s.statusText}};return}const r=s.headers.get("content-type")||"",o=s.headers.get("content-length");if(!s.body){yield{type:"error",content:`Response body is null or empty (Content-Length: ${o||"unknown"}). This may indicate: 1) The endpoint doesn't support streaming, 2) Authentication is required/invalid, 3) The endpoint URL is incorrect. For Open WebUI, ensure you're using the correct endpoint and API key.`,metadata:{status:s.status,contentType:r,contentLength:o,endpoint:e.chatConfig.chatApiEndpoint,hasApiKey:!!e.chatConfig.apiKey}};return}const a=s.body.getReader();if(!a){yield{type:"error",content:"Response body is not readable"};return}const l=this.createParser(r,e.chatConfig.chatApiEndpoint);try{for await(const c of l.parse(a))yield c}catch(c){yield{type:"error",content:c instanceof Error?c.message:"Failed to parse response stream",metadata:{error:c,contentType:r,endpoint:e.chatConfig.chatApiEndpoint}}}}}class h2 extends fh{constructor(){super(...arguments),this.name="openai"}canHandle(e){return e.chatApiEndpoint.includes("openai")||e.chatApiEndpoint.includes("v1/chat/completions")}}class u2 extends fh{constructor(){super(...arguments),this.name="ollama"}canHandle(e){return e.name.toLowerCase()==="ollama"||e.chatApiEndpoint.includes("ollama")||e.chatApiEndpoint.includes("localhost:11434")}}class p2{constructor(){this.providers=[],this.registerDefaultProviders()}registerDefaultProviders(){this.providers.push(new h2),this.providers.push(new u2)}registerProvider(e){this.providers.push(e)}getProvider(e){const i=this.providers.find(s=>s.canHandle(e));return i||this.providers[0]}getAllProviders(){return[...this.providers]}}class f2{getAgentContributions(){return z.getContributions(ch)}filterAndSortAgents(e,i){return e.filter(s=>s.canHandle?s.canHandle(i):!0).sort((s,r)=>(r.priority||0)-(s.priority||0))}getMatchingAgents(e,i){const s=this.getAgentContributions();if(s.length===0)throw new Error("No agents are registered. The App Support agent should be available from the AI system extension.");let r=s.filter(o=>i&&!i.includes(o.role)?!1:o.canHandle?o.canHandle(e):!0);if(i&&i.length>0){if(r=r.sort((o,a)=>(a.priority||0)-(o.priority||0)),r.length===0){const o=i.join(", ");throw new Error(`No agents found for requested roles: ${o}. Available agents: ${s.map(a=>a.role).join(", ")}`)}}else if(r=this.filterAndSortAgents(r,e),r.length===0)throw new Error(`No agents can handle the current context. Available agents: ${s.map(o=>o.role).join(", ")}`);return r}}class mh{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}commandToTool(e,i){const s={},r=[];return e.parameters?.forEach(l=>{const c=this.sanitizeFunctionName(l.name);s[c]={type:l.type||"string",description:l.description,...l.allowedValues&&{enum:l.allowedValues}},l.required===!0&&r.push(c)}),{type:"function",function:{name:this.sanitizeFunctionName(e.id),description:e.description||e.name,parameters:{type:"object",properties:s,required:r}}}}getAvailableTools(e,i){const s=Ke.listCommands();let r=Object.values(s);return i&&(r=r.filter(o=>i(o,e))),r.map(o=>this.commandToTool(o,e))}}const ni=si("ToolDetector");class m2{constructor(){this.classifier=null,this.loading=!1,this.loadPromise=null}async ensureLoaded(){if(!this.classifier)return this.loading&&this.loadPromise?this.loadPromise:(this.loading=!0,this.loadPromise=(async()=>{try{ni.info("Loading ML model for tool detection..."),this.classifier=await r2.getPipeline(eh.ZERO_SHOT_CLASSIFICATION,Qd.ZERO_SHOT_CLASSIFICATION,{quantized:!0}),ni.info("ML model loaded successfully - will use for tool detection")}catch(e){const i=e instanceof Error?e.message:String(e);ni.warn(`Failed to load ML model, will use keyword-based detection fallback: ${i}`),this.classifier=null}finally{this.loading=!1}})(),this.loadPromise)}async needsTools(e){if(!e||e.trim().length===0)return!1;const i=e.toLowerCase().trim();if(["hello","hi","hey","thanks","thank you","bye","goodbye"].some(o=>i===o||i.startsWith(o+" ")))return!1;try{if(await this.ensureLoaded(),this.classifier){ni.info(`Using ML model to classify prompt: "${i.substring(0,50)}${i.length>50?"...":""}"`);const o=await this.classifier(i,["requires executing commands or actions","is a simple greeting or question"]),a=o.labels[0]==="requires executing commands or actions"&&o.scores[0]>.6;return ni.info(`ML classification result: ${o.labels[0]} (confidence: ${(o.scores[0]*100).toFixed(1)}%) - needsTools: ${a}`),a}}catch(o){const a=o instanceof Error?o.message:String(o);ni.warn(`ML classification failed, using keyword fallback: ${a}`)}ni.info("Using keyword-based detection (ML model not available)");const r=this.keywordBasedDetection(i);return ni.info(`Keyword detection result: needsTools=${r}`),r}keywordBasedDetection(e){const i=["create","open","delete","read","write","edit","save","rename","move","copy","list","show","display","run","execute","build","add","remove","update","modify","change","set","get","find","search","filter","sort","install","uninstall","load","import","export","generate","make","do","perform","call","invoke"],s=["file","folder","directory","workspace","editor","map","layer","command","tool","extension","script","code","project"],r=i.some(a=>e.includes(a)),o=s.some(a=>e.includes(a));return r&&(o||e.length>20)}dispose(){this.classifier=null,this.loading=!1,this.loadPromise=null}}const g2=new m2;class b2{constructor(){this.toolRegistry=new mh,this.enhancers=[]}addEnhancer(e){this.enhancers.push(e)}async getSysPrompt(e,i){let s=e.sysPrompt;if(typeof s=="function"&&(s=s()),!s||typeof s!="string")throw new Error(`Agent "${e.role}" (${e.label}) is missing a system prompt. All agents must provide a sysPrompt.`);const r=[...e.promptEnhancers||[],...this.enhancers,...this.getContributedEnhancers()].sort((a,l)=>(l.priority||0)-(a.priority||0));let o=s;for(const a of r)try{o=await a.enhance(o,i),(!o||typeof o!="string")&&(o=s)}catch(l){console.warn("[PromptBuilder] Enhancer failed:",l)}return o}rewriteChatHistoryForAgent(e,i){return e.map(s=>s.role==="user"?{role:s.role,content:s.content}:s.role===i?{role:"assistant",content:s.content}:{role:"user",content:`***Agent '${s.role}' replied:***
${s.content}`})}getContributedEnhancers(){return z.getContributions(hh).map(i=>({...i.enhancer,priority:i.priority??i.enhancer.priority}))}async build(e,i,s,r){r?.beforeSend&&await r.beforeSend(i,s);const o=this.sanitizeMessagesForAPI(i),a=this.rewriteChatHistoryForAgent(o,e.role);let l=e.tools;typeof l=="function"&&(l=await l());let c;if(l?.enabled)if(l.smartToolDetection){const m=i[i.length-1]?.content||"";await g2.needsTools(m)&&(c=this.toolRegistry.getAvailableTools(s,l.commandFilter))}else c=this.toolRegistry.getAvailableTools(s,l.commandFilter);const h=await this.getSysPrompt(e,s);a.unshift({role:"system",content:h});const u=a.length-1;return{messages:a,userPromptIndex:u,tools:c}}sanitizeMessageForAPI(e){const i={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(i.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(i.tool_calls=e.tool_calls),i}sanitizeMessagesForAPI(e){return e.map(i=>this.sanitizeMessageForAPI(i))}}class w2{constructor(){this.processors=[]}addProcessor(e){this.processors.push(e)}getSortedProcessors(){return[...this.processors].sort((e,i)=>(i.priority||0)-(e.priority||0))}async process(e,i,s){let r={...e};const o=[...i.messageProcessors||[],...this.processors].sort((l,c)=>(c.priority||0)-(l.priority||0));for(const l of o)r=await l.process(r,s);const a=r.actions?.some(l=>l.requiresAttention)||r.attentionRequests?.some(l=>l.requiresAction)||!1;return{...r,requiresAttention:a}}checkRequiresAttention(e){return e.actions?.some(i=>i.requiresAttention)||e.attentionRequests?.some(i=>i.requiresAction)||!1}}class v2{constructor(){this.accumulatedToolCalls=new Map,this.toolCallIndexMap=new Map}processChunk(e){if(e.type==="token"&&e.toolCalls&&e.toolCalls.length>0)for(const i of e.toolCalls){const s=i._index,r=i.id;let o,a;if(s!==void 0&&this.toolCallIndexMap.has(s)?(a=this.toolCallIndexMap.get(s),o=this.accumulatedToolCalls.get(a)):r&&this.accumulatedToolCalls.has(r)?(a=r,o=this.accumulatedToolCalls.get(a)):(a=r||`call_${s!==void 0?s:Date.now()}_${Math.random()}`,o=void 0),o){const l=o.function.arguments||"",c=i.function.arguments||"",h=l+c;this.accumulatedToolCalls.set(a,{id:a,type:i.type||o.type,function:{name:i.function.name||o.function.name,arguments:h}}),s!==void 0&&!this.toolCallIndexMap.has(s)&&this.toolCallIndexMap.set(s,a)}else this.accumulatedToolCalls.set(a,{...i,id:a}),s!==void 0&&this.toolCallIndexMap.set(s,a)}}getFinalToolCalls(){return Array.from(this.accumulatedToolCalls.values()).filter(e=>e.function.name&&e.function.name.trim().length>0).map(e=>{let i=e.function.arguments||"";return(!i||i.trim()==="")&&(i="{}"),{...e,function:{...e.function,arguments:i}}})}reset(){this.accumulatedToolCalls.clear(),this.toolCallIndexMap.clear()}}class gh{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}findCommand(e,i){const s=e.function.name,r=Ke.getCommand(s);if(r)return r;const o=Ke.listCommands();for(const[a,l]of Object.entries(o))if(this.sanitizeFunctionName(a)===s)return l;return null}parseArguments(e){if(!e||e.trim()===""||e==="{}")return{};try{const i=JSON.parse(e);return i&&typeof i=="object"?i:{}}catch(i){const s=i instanceof Error?i.message:String(i);return console.error(`[ToolExecutor] Failed to parse arguments: ${e} - ${s}`),{}}}sanitizeArguments(e,i){if(!i||!i.parameters||!e||typeof e!="object")return e||{};const s={};return i.parameters.forEach(r=>{const o=this.sanitizeFunctionName(r.name);o in e&&(s[r.name]=e[o])}),s}async executeToolCall(e,i){try{const s=this.findCommand(e,i),r=s?.id||e.function.name,o=e.function.arguments||"{}",a=this.parseArguments(o),l=this.sanitizeArguments(a,s),c=Ke.createExecutionContext(l),h={...i,...c,params:l};let u=await Ke.execute(r,h);const m={success:!0,message:`Command "${s?.name||r}" executed successfully`,command:r};if(l&&typeof l=="object"&&Object.keys(l).length>0&&(m.parameters=l),u){let b=u;if(b instanceof Promise&&(b=await b),m.result=b,s?.output&&s.output.length>0){const w=s.output.map(k=>`${k.name}: ${k.description||k.type||"value"}`).join(", ");m.output=w}}return{id:e.id,result:m}}catch(s){const r=s instanceof Error?s.message:String(s);let o=null;try{o=this.findCommand(e,i)}catch{o=null}const a=o?.name||e.function.name;let l=r;return r.includes("No handler found")||r.includes("No handlers registered")?l=`Command "${a}" cannot be executed. ${r}. This usually means the command is not available in the current context (e.g., a map editor may not be open or active).`:(r.includes("not available")||r.includes("GsMapEditor"))&&(l=`Command "${a}" cannot be executed: ${r}. Please ensure the required editor or component is open and active.`),{id:e.id,result:null,error:l}}}async executeToolCalls(e,i){const s=[];for(const r of e){const o=await this.executeToolCall(r,i);s.push(o)}return s}createToolCallAccumulator(){return new v2}createToolCallSignature(e){const i=e.function.arguments||"{}";let s={};try{const o=JSON.parse(i);s=o&&typeof o=="object"?o:{}}catch{s={}}const r=s&&typeof s=="object"?Object.keys(s).sort().reduce((o,a)=>(o[a]=s[a],o),{}):{};return`${e.function.name}:${JSON.stringify(r)}`}}const K2=Object.freeze(Object.defineProperty({__proto__:null,ToolExecutor:gh},Symbol.toStringTag,{value:"Module"}));class y2{async execute(e,i,s,r){const o=i.chatConfig;if(!o)throw new Error("Chat config is required");const a=e.map(async l=>{try{await r(l,i.chatContext.history,s.sharedState,o,i,s)}catch(c){const h=c instanceof Error?c:new Error(String(c));s.errors.set(l.role,h),i.onAgentError?.(l.role,h)}});await Promise.all(a)}}class x2{async execute(e,i,s,r){const o=i.chatConfig;if(!o)throw new Error("Chat config is required");let a=[...i.chatContext.history],l={...s.sharedState};for(const c of e)try{const h=this.createAgentContextWithPreviousAgents(l,i,s),u=await r(c,a,l,o,i,s);if(!u)break;const p=this.updateWorkflowState(u,a,l,h,s);a=p.currentMessages,l=p.accumulatedState}catch(h){const u=h instanceof Error?h:new Error(String(h));s.errors.set(c.role,u),i.onAgentError?.(c.role,u);break}}createAgentContextWithPreviousAgents(e,i,s){return{...e,...i.callContext.getProxy(),previousAgents:Array.from(s.messages.entries()).map(([r,o])=>({role:r,content:o.content}))}}updateWorkflowState(e,i,s,r,o){return i.push(e),s={...s,...r,message:e},o.sharedState=s,{currentMessages:i,accumulatedState:s}}}class k2{async execute(e,i,s,r){const o=i.chatConfig;if(!o)throw new Error("Chat config is required");let a=[...i.chatContext.history],l={...s.sharedState};for(const c of e)try{const h=this.createAgentContextWithPreviousAgents(l,i,s);if(c.canHandle&&!c.canHandle(h))continue;const u=await r(c,a,l,o,i,s);if(!u)break;const p=this.updateWorkflowState(u,a,l,h,s);a=p.currentMessages,l=p.accumulatedState}catch(h){const u=h instanceof Error?h:new Error(String(h));s.errors.set(c.role,u),i.onAgentError?.(c.role,u)}}createAgentContextWithPreviousAgents(e,i,s){return{...e,...i.callContext.getProxy(),previousAgents:Array.from(s.messages.entries()).map(([r,o])=>({role:r,content:o.content}))}}updateWorkflowState(e,i,s,r,o){return i.push(e),s={...s,...r,message:e},o.sharedState=s,{currentMessages:i,accumulatedState:s}}}class C2{constructor(){this.strategies=new Map([["parallel",new y2],["sequential",new x2],["conditional",new k2]])}registerStrategy(e,i){this.strategies.set(e,i)}async execute(e,i,s){const r=`workflow-${Date.now()}-${Math.random()}`,o=i.execution||"parallel",a=i.sharedState||{},l={messages:new Map,sharedState:{...a},errors:new Map};oe(ah,{workflowId:r,options:i});try{const c=this.strategies.get(o);if(!c)throw new Error(`Unknown workflow execution strategy: ${o}`);return await c.execute(e,i,l,s),oe(nh,{workflowId:r,results:l}),l}catch(c){const h=c instanceof Error?c:new Error(String(c));throw oe(lh,{workflowId:r,error:h}),h}}}const lr=class lr{static estimateTokens(e){if(!e||e.trim().length===0)return 0;const i=e.trim(),s=i.length,r=i.split(/\s+/).filter(a=>a.length>0).length,o=Math.ceil(s/this.AVERAGE_CHARS_PER_TOKEN+r*.3);return Math.max(1,o)}static estimateMessageTokens(e){let i=this.MESSAGE_OVERHEAD;if(e.content&&(i+=this.estimateTokens(e.content)),e.role&&(i+=this.estimateTokens(e.role)),e.tool_calls)for(const s of e.tool_calls)i+=this.estimateTokens(s.function.name||""),i+=this.estimateTokens(s.function.arguments||"{}"),i+=10;return e.tool_call_id&&(i+=this.estimateTokens(e.tool_call_id)),i}static estimatePromptTokens(e,i){let s=0;for(const r of e)s+=this.estimateMessageTokens(r);if(i&&i.length>0){for(const r of i)if(s+=this.TOOL_DEFINITION_OVERHEAD,s+=this.estimateTokens(r.function.name||""),s+=this.estimateTokens(r.function.description||""),r.function.parameters){const o=JSON.stringify(r.function.parameters);s+=this.estimateTokens(o)}}return s}static estimateCompletionTokens(e,i){let s=this.estimateTokens(e);if(i&&i.length>0)for(const r of i)s+=10,s+=this.estimateTokens(r.function?.name||""),s+=this.estimateTokens(r.function?.arguments||"{}");return s}};lr.AVERAGE_CHARS_PER_TOKEN=4,lr.TOOL_DEFINITION_OVERHEAD=50,lr.MESSAGE_OVERHEAD=4;let xo=lr;const bc="ai_token_usage";class E2{constructor(){this.data=null,this.loadPromise=null}async loadData(){return this.data?this.data:this.loadPromise?this.loadPromise:(this.loadPromise=(async()=>{const e=await Ct.getObject(bc);return e?this.data=e:(this.data={providers:{},total:{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},lastUpdated:Date.now()},await this.saveData()),this.loadPromise=null,this.data})(),this.loadPromise)}async saveData(){this.data&&(this.data.lastUpdated=Date.now(),await Ct.persistObject(bc,this.data))}async recordUsage(e,i){if(await this.loadData(),!this.data)return;this.data.providers[e]||(this.data.providers[e]={promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0});const s=this.data.providers[e];s.promptTokens+=i.promptTokens,s.completionTokens+=i.completionTokens,s.totalTokens+=i.totalTokens,s.requestCount+=1,this.data.total.promptTokens+=i.promptTokens,this.data.total.completionTokens+=i.completionTokens,this.data.total.totalTokens+=i.totalTokens,this.data.total.requestCount+=1,await this.saveData()}async getProviderUsage(e){return await this.loadData(),this.data?.providers[e]||null}async getAllProviderUsage(){return await this.loadData(),this.data?.providers||{}}async getTotalUsage(){return await this.loadData(),this.data?.total||{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0}}async reset(){this.data={providers:{},total:{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},lastUpdated:Date.now()},await this.saveData()}async resetProvider(e){if(await this.loadData(),!this.data)return;const i=this.data.providers[e];i&&(this.data.total.promptTokens-=i.promptTokens,this.data.total.completionTokens-=i.completionTokens,this.data.total.totalTokens-=i.totalTokens,this.data.total.requestCount-=i.requestCount,delete this.data.providers[e],await this.saveData())}}const $2=new E2;class S2{constructor(){this.activeRequests=new Map,this.providerFactory=new p2,this.agentRegistry=new f2,this.promptBuilder=new b2,this.messageProcessor=new w2,this.toolExecutor=new gh,this.workflowEngine=new C2,this.toolRegistry=new mh,Ue(Di,()=>{this.aiConfig=void 0,this.configCheckPromise=void 0,this.checkAIConfig().then()}),this.checkAIConfig().then()}getAgentContributions(){return this.agentRegistry.getAgentContributions()}async getProviders(){return await this.checkAIConfig(),this.aiConfig?.providers||[]}async getDefaultProvider(){await this.checkAIConfig();const e=await this.getProviders();if(this.aiConfig?.defaultProvider){const i=e.find(s=>s.name===this.aiConfig?.defaultProvider);if(i)return i}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig&&(this.aiConfig.defaultProvider=e,await be.set(os,this.aiConfig)),this.getDefaultProvider()}createMessage(e){return{role:"user",content:e}}registerStreamingFetcher(e){this.providerFactory.registerProvider(e)}getContributedProviders(){return z.getContributions(dh).map(i=>i.provider)}mergeProviders(e,i){const s=new Set(e.map(o=>o.name)),r=i.filter(o=>!s.has(o.name));return r.length>0?[...e,...r]:e}async createInitialConfig(){const e=this.getContributedProviders(),i={...uh,providers:e};return await be.set(os,i),await be.get(os)}async updateConfigWithMissingProviders(e){const i=this.getContributedProviders(),s=this.mergeProviders(e.providers,i);if(s.length!==e.providers.length){const r={...e,providers:s};return await be.set(os,r),r}return e}async checkAIConfig(){if(!this.aiConfig)return this.configCheckPromise?this.configCheckPromise:(this.configCheckPromise=this.performConfigCheck(),this.configCheckPromise)}async performConfigCheck(){try{this.aiConfig=await be.get(os),this.aiConfig?this.aiConfig=await this.updateConfigWithMissingProviders(this.aiConfig):this.aiConfig=await this.createInitialConfig(),oe(oh,this.aiConfig)}finally{this.configCheckPromise=void 0}}createAgentContext(e,i,s={}){return{...e,...i.getProxy(),...s}}createFinalMessage(e,i){return{role:e.role,content:i.content,actions:i.actions,requiresAttention:i.requiresAttention,attentionRequests:i.attentionRequests,canContinue:i.canContinue}}async handleUserAttention(e,i,s,r){if(!i.requiresAttention||!s.userAttentionHandler)return!0;const o=[];if(i.attentionRequests&&o.push(...i.attentionRequests),i.actions)for(const c of i.actions)c.requiresAttention&&c.attentionRequest&&o.push(c.attentionRequest);if(o.length===0)return!0;if(r.pendingAttention||(r.pendingAttention=new Map),r.pendingAttention.set(e,o),s.onAttentionRequest)for(const c of o)s.onAttentionRequest(e,c);if(s.pauseOnAttention)return r.paused=!0,r.continuationToken=`${e}-${Date.now()}-${Math.random()}`,!1;const a=s.userAttentionHandler,l=this.createAgentContext(s.sharedState||{},s.callContext,{message:i});for(const c of o)if(a.onAttentionRequest){const h=await a.onAttentionRequest(c,l);if(c.requiresAction&&(h===!1||h===null))return!1;h&&typeof h=="string"&&(l[`attention_${c.type}_result`]=h)}else switch(c.type){case"confirmation":if(a.onConfirmation&&!await a.onConfirmation(c.message,l)&&c.requiresAction)return!1;break;case"input":if(a.onInput){const h=await a.onInput(c.message,void 0,l);if(!h&&c.requiresAction)return!1;h&&(l.attention_input_result=h)}break}return!0}async*streamCompletion(e){const i=`${Date.now()}-${Math.random()}`,s=new AbortController;this.activeRequests.set(i,s),e.signal&&e.signal.addEventListener("abort",()=>{s.abort()});const r=e.signal||s.signal;try{e.onStatus?.("starting"),oe(ih,{requestId:i,options:e});const o=e.chatConfig||await this.getDefaultProvider(),a=this.sanitizeMessagesForAPI(e.chatContext.history),l=this.providerFactory.getProvider(o),c=this.toolExecutor.createToolCallAccumulator();let h="",u={role:"assistant",content:""},p;for await(const w of l.stream({model:o.model,messages:a,chatConfig:o,tools:e.tools,signal:r})){if(w.type==="error"){e.onStatus?.("error"),oe(Xr,{requestId:i,chunk:w}),yield w;break}if(w.type==="token")c.processChunk(w),(!w.toolCalls||w.toolCalls.length===0)&&(h+=w.content,u.content=h),w.message?.role&&(u.role=w.message.role),w.content&&e.onToken?.(w.content),e.onStatus?.("streaming"),e.onProgress?.({received:h.length}),oe(sh,{requestId:i,chunk:w}),yield w;else if(w.type==="done"){w.metadata?.usage&&(p=w.metadata.usage),e.onStatus?.("complete"),oe(rh,{requestId:i}),yield w;break}else yield w}const m=c.getFinalToolCalls(),b={role:u.role||"assistant",content:h||"",...m.length>0&&{toolCalls:m}};if(!p){const w=xo.estimatePromptTokens(a,e.tools),k=xo.estimateCompletionTokens(h,m);p={promptTokens:w,completionTokens:k,totalTokens:w+k,estimated:!0}}return $2.recordUsage(o.name,p).catch(w=>{G.error(`Failed to record token usage: ${w instanceof Error?w.message:String(w)}`)}),{message:b,tokenUsage:p}}catch(o){if(o instanceof Error&&o.name==="AbortError")throw e.onStatus?.("error"),oe(Xr,{requestId:i,error:"Request cancelled"}),o;e.onStatus?.("error");const a=o instanceof Error?o.message:String(o);throw oe(Xr,{requestId:i,error:a}),yield{type:"error",content:a,metadata:{error:o}},o}finally{this.activeRequests.delete(i)}}async handleStreamingPromptDirect(e){const i=this.streamCompletion(e);let s;for(;;){if(s=await i.next(),s.done)return s.value.message;const r=s.value;if(r.type==="error")throw new Error(r.content);if(r.type==="done"){const o=await i.next();if(o.done&&o.value)return o.value.message;if(!o.done)continue;throw new Error("Stream completed without return value")}}}sanitizeMessageForAPI(e){const i={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(i.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(i.tool_calls=e.tool_calls),i}sanitizeMessagesForAPI(e){return e.map(i=>this.sanitizeMessageForAPI(i))}async handleStreamingPrompt(e){const i=e.callContext||Ae.createChild({}),s=this.createAgentContext({},i,{userPrompt:e.chatContext.history[e.chatContext.history.length-1]?.content||""}),r=this.agentRegistry.getMatchingAgents(s),o=r.length>0?r.map(c=>c.role):["assistant"],a=await this.executeAgentWorkflow({chatContext:e.chatContext,chatConfig:e.chatConfig,callContext:i,execution:"parallel",stream:e.stream,signal:e.signal,onToken:(c,h)=>{e.onToken?.(h)},onStatus:(c,h)=>{e.onStatus?.(h)},roles:o}),l=Array.from(a.messages.values());return l.length===1?l[0]:l}async continueWorkflow(e,i,s){const r={sharedState:{...s.sharedState,...Object.fromEntries(i)}},o={...s,sharedState:r.sharedState,pauseOnAttention:!1};return this.executeAgentWorkflow(o)}cancelRequest(e){const i=this.activeRequests.get(e);return i?(i.abort(),this.activeRequests.delete(e),!0):!1}async executeAgentWorkflow(e){const i=this.createAgentContext(e.sharedState||{},e.callContext),s=this.agentRegistry.getMatchingAgents(i,e.roles);return this.workflowEngine.execute(s,e,async(r,o,a,l,c,h)=>this.executeAgent(r,o,a,l,c,h))}async executeAgent(e,i,s,r,o,a){o.onAgentStart?.(e.role);const l=this.createAgentContext(s,o.callContext,{userPrompt:i[i.length-1]?.content||""}),{messages:c,tools:h}=await this.promptBuilder.build(e,i,l,e.hooks),u=c.map(E=>{const M={role:E.role,content:E.content};return E.tool_call_id&&(M.tool_call_id=E.tool_call_id),E.tool_calls&&(M.tool_calls=E.tool_calls),M});let p=await this.handleStreamingPromptDirect({chatContext:{history:u},chatConfig:r,callContext:o.callContext,stream:o.stream??!0,signal:o.signal,tools:h}),m=0;const b=[...c];for(;p.toolCalls&&p.toolCalls.length>0;){if(m++,m>Ja){console.warn(`[AIService] Maximum tool call iterations (${Ja}) reached`);break}let E=[];if(o.requireToolApproval&&o.onToolApprovalRequest){const P=p.toolCalls.map(ce=>{const Oe=ce.function.arguments||"{}";let Ce={};try{Ce=JSON.parse(Oe)}catch{Ce={}}return`${ce.function.name}(${Object.entries(Ce).map(([Te,$e])=>`${Te}=${$e}`).join(", ")})`}).join(", "),we={toolCalls:p.toolCalls,message:`The AI wants to execute: ${P}`};await o.onToolApprovalRequest(e.role,we)?E=await this.toolExecutor.executeToolCalls(p.toolCalls,l):E=p.toolCalls.map(ce=>({id:ce.id,result:{success:!1,message:"Tool execution cancelled by user",cancelled:!0}}))}else E=await this.toolExecutor.executeToolCalls(p.toolCalls,l);const M=E.map(P=>({role:"tool",content:P.error?JSON.stringify({error:P.error}):JSON.stringify(P.result),tool_call_id:P.id})),T={role:"assistant",content:p.content||""};p.toolCalls&&p.toolCalls.length>0&&(T.tool_calls=p.toolCalls.filter(P=>P.function.name&&P.function.name.trim().length>0).map(P=>({id:P.id,type:P.type,function:{name:P.function.name,arguments:P.function.arguments||"{}"}}))),b.push(T,...M);const I=b;p=await this.handleStreamingPromptDirect({chatContext:{history:I.map(P=>({role:P.role,content:P.content,...P.tool_call_id&&{tool_call_id:P.tool_call_id},...P.tool_calls&&{tool_calls:P.tool_calls}}))},chatConfig:r,callContext:o.callContext,stream:o.stream??!0,signal:o.signal,tools:h});const O=p.content&&p.content.trim().length>0,F=p.toolCalls&&p.toolCalls.length>0;if(O&&!F)break;if(O&&F){console.warn("[AIService] Model provided content but also called tools - treating as completion");break}}const w=await this.messageProcessor.process(p,e,this.createAgentContext(s,o.callContext,{message:p}));e.hooks?.afterReceive&&await e.hooks.afterReceive(w,this.createAgentContext(s,o.callContext));const k=this.createFinalMessage(e,w);return!await this.handleUserAttention(e.role,k,o,a)&&o.pauseOnAttention?null:(a.messages.set(e.role,k),o.onAgentComplete?.(e.role,k),k)}}const Y2=new S2,A2="extensions",_2={EXT_RAG_SYSTEM_NAME:"RAG System",EXT_RAG_SYSTEM_DESC:"Retrieval-Augmented Generation system for document indexing, search and retrieval"},T2={EXT_RAG_SYSTEM_NAME:"RAG-System",EXT_RAG_SYSTEM_DESC:"Retrieval-Augmented Generation System für Dokumentenindizierung, Suche und Abruf"},L2={namespace:A2,en:_2,de:T2};z.registerContribution(le,L2);const wc=_e("extensions");H.registerExtension({id:"system.rag-system",name:wc("EXT_RAG_SYSTEM_NAME"),description:wc("EXT_RAG_SYSTEM_DESC"),loader:()=>ke(()=>import("./rag-system-extension-r2oivb7I.js").then(t=>t.b),[]),icon:"database",experimental:!0,dependencies:["system.ai-system","system.in-browser-ml"]});const R2="extensions",I2={EXT_HOWTO_NAME:"HowTo System",EXT_HOWTO_DESC:"Step-by-step workflow system with pre and post condition checks"},O2={EXT_HOWTO_NAME:"HowTo-System",EXT_HOWTO_DESC:"Schritt-für-Schritt-Workflow-System mit Vor- und Nachbedingungsprüfungen"},D2={namespace:R2,en:I2,de:O2};z.registerContribution(le,D2);const vc=_e("extensions");H.registerExtension({id:"system.howto",name:vc("EXT_HOWTO_NAME"),description:vc("EXT_HOWTO_DESC"),loader:()=>ke(()=>import("./howto-extension-Dmx_J3OG.js"),[]),icon:"list-check"});kh.start();Lv({packageInfo:{name:Ys.name,version:Ys.version,dependencies:Ys.dependencies,devDependencies:Ys.devDependencies},marketplaceCatalogUrls:Ys.marketplace?.catalogUrls});mt.registerApp({id:"dev-standard-app",name:"Default App",version:"0.0.0",description:"Default app!space application",extensions:["system.commandpalette","system.mdeditor","system.monaco","system.mediaviewer","system.settings-tree","system.memoryusage","system.ai-system"]},{autoStart:!0});mt.registerApp({id:"dev-standard-app-2",name:"Default App 2",version:"0.0.0",description:"Default app!space application 2",extensions:["system.mdeditor","system.monaco","system.mediaviewer","system.settings-tree","system.memoryusage","system.ai-system"],render:{tag:"k-standard-app",attributes:{"show-bottom-panel":"true"}}});export{Oa as $,r2 as A,ge as B,jc as C,G as D,Y2 as E,kw as F,si as G,jt as H,Ch as I,or as J,pt as K,ad as L,Qi as M,kn as N,oe as O,ls as P,hh as Q,od as R,le as S,Ls as T,z2 as U,wh as V,Ri as W,Wt as X,mr as Y,Hc as Z,ke as _,X2 as a,mt as a0,oh as a1,os as a2,gr as a3,U as a4,vr as a5,Qd as a6,eh as a7,Wf as a8,us as a9,bo as aA,Ct as aB,Xl as aC,Ts as aD,Yh as aE,rh as aF,$2 as aG,p2 as aH,ch as aI,G2 as aJ,K2 as aK,P2 as aa,gt as ab,dh as ac,ui as ad,Ne as ae,A as af,Gm as ag,em as ah,ci as ai,dd as aj,En as ak,Xi as al,Ss as am,Cn as an,cd as ao,ld as ap,ro as aq,nd as ar,Lo as as,Cw as at,bt as au,Da as av,Lv as aw,Mt as ax,H as ay,_e as az,fe as b,ms as c,Nt as d,$i as e,f,Vo as g,S as h,$ as i,_ as j,se as k,Ke as l,z as m,d as n,Zt as o,Qv as p,pi as q,Ae as r,Ue as s,he as t,Di as u,be as v,Ai as w,$n as x,Oo as y,Jt as z};
