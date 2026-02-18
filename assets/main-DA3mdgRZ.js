const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CWFFzA4M.js","assets/pyservice-C2DFA567.js","assets/package-manager-TwUXNQoD.js","assets/monaco-editor-extension-CvBBliLs.js","assets/ai-service-Xbmu7sjO.js","assets/in-browser-ml-service-D9cxY0Oa.js","assets/python-runtime-extension-DTzaVnGq.js","assets/commands-D8GbZ_CP.js","assets/webllmservice-CAH3tVX-.js","assets/in-browser-ml-extension-DBV-wzs-.js","assets/ai-system-extension-W6DPAgMh.js","assets/rag-system-extension-CquydrB5.js","assets/howto-extension-BWBu-cv6.js","assets/webmcp-extension-Ddc2GPz0.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();var x1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ud(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fs={exports:{}};var Vd=Fs.exports,Bn;function qd(){return Bn||(Bn=1,(function(e,t){(function(){var i,r,s,o,a,l,d,h,u,f,g,b,w,_,z,O,U,T,D,R,F,ae,we,ge,ye,Ke,De,qe,Ee,Re,H,He,Ye,$t,Si,Fo,$s,ct,ir,Bo,Ir,Ss,Uo,As,_s,Tn,Dn,Vo,Rn,zn,Pr=[].slice,On={}.hasOwnProperty,In=function(v,m){for(var y in m)On.call(m,y)&&(v[y]=m[y]);function x(){this.constructor=v}return x.prototype=m.prototype,v.prototype=new x,v.__super__=m.prototype,v},Bd=[].indexOf||function(v){for(var m=0,y=this.length;m<y;m++)if(m in this&&this[m]===v)return m;return-1},Pn=function(v,m){return function(){return v.apply(m,arguments)}};for(ae={className:"",catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},Re=function(){var v;return(v=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance.now():void 0)!=null?v:+new Date},He=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,F=window.cancelAnimationFrame||window.mozCancelAnimationFrame,O=function(v,m,y){return typeof v.addEventListener=="function"?v.addEventListener(m,y,!1):(function(){if(typeof v["on"+m]!="function"||typeof v["on"+m].eventListeners!="object"){var x=new h;typeof v["on"+m]=="function"&&x.on(m,v["on"+m]),v["on"+m]=function(k){return x.trigger(m,k)},v["on"+m].eventListeners=x}else var x=v["on"+m].eventListeners;x.on(m,y)})()},He==null&&(He=function(v){return setTimeout(v,50)},F=function(v){return clearTimeout(v)}),$t=function(v){var m,y;return m=Re(),y=function(){var x;return x=Re()-m,x>=33?(m=Re(),v(x,function(){return He(y)})):setTimeout(y,33-x)},y()},Ye=function(){var v,m,y;return y=arguments[0],m=arguments[1],v=3<=arguments.length?Pr.call(arguments,2):[],typeof y[m]=="function"?y[m].apply(y,v):y[m]},we=function(){var v,m,y,x,k,L,V;for(m=arguments[0],x=2<=arguments.length?Pr.call(arguments,1):[],L=0,V=x.length;L<V;L++)if(y=x[L],y)for(v in y)On.call(y,v)&&(k=y[v],m[v]!=null&&typeof m[v]=="object"&&k!=null&&typeof k=="object"?we(m[v],k):m[v]=k);return m},T=function(v){var m,y,x,k,L;for(y=m=0,k=0,L=v.length;k<L;k++)x=v[k],y+=Math.abs(x),m++;return y/m},ye=function(v,m){var y,x,k;if(v==null&&(v="options"),m==null&&(m=!0),k=document.querySelector("[data-pace-"+v+"]"),!!k){if(y=k.getAttribute("data-pace-"+v),!m)return y;try{return JSON.parse(y)}catch(L){return x=L,typeof console<"u"&&console!==null?console.error("Error parsing inline pace options",x):void 0}}},d=(function(){function v(){}return v.prototype.on=function(m,y,x,k){var L;return k==null&&(k=!1),this.bindings==null&&(this.bindings={}),(L=this.bindings)[m]==null&&(L[m]=[]),this.bindings[m].push({handler:y,ctx:x,once:k})},v.prototype.once=function(m,y,x){return this.on(m,y,x,!0)},v.prototype.off=function(m,y){var x,k,L;if(((k=this.bindings)!=null?k[m]:void 0)!=null){if(y==null)return delete this.bindings[m];for(x=0,L=[];x<this.bindings[m].length;)this.bindings[m][x].handler===y?L.push(this.bindings[m].splice(x,1)):L.push(x++);return L}},v.prototype.trigger=function(){var m,y,x,k,L,V,K,de,be;if(x=arguments[0],m=2<=arguments.length?Pr.call(arguments,1):[],(K=this.bindings)!=null&&K[x]){for(L=0,be=[];L<this.bindings[x].length;)de=this.bindings[x][L],k=de.handler,y=de.ctx,V=de.once,k.apply(y??this,m),V?be.push(this.bindings[x].splice(L,1)):be.push(L++);return be}},v})(),f=window.Pace||{},window.Pace=f,we(f,d.prototype),H=f.options=we({},ae,window.paceOptions,ye()),Vo=["ajax","document","eventLag","elements"],As=0,Tn=Vo.length;As<Tn;As++)ct=Vo[As],H[ct]===!0&&(H[ct]=ae[ct]);u=(function(v){In(m,v);function m(){return Rn=m.__super__.constructor.apply(this,arguments),Rn}return m})(Error),r=(function(){function v(){this.progress=0}return v.prototype.getElement=function(){var m;if(this.el==null){if(m=document.querySelector(H.target),!m)throw new u;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running ");var y=H.className!==""?" "+H.className:"";this.el.innerHTML='<div class="pace-progress'+y+`">
  <div class="pace-progress-inner"></div>
</div>
<div class="pace-activity"></div>`,m.firstChild!=null?m.insertBefore(this.el,m.firstChild):m.appendChild(this.el)}return this.el},v.prototype.finish=function(){var m;return m=this.getElement(),m.className=m.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ")},v.prototype.update=function(m){return this.progress=m,f.trigger("progress",m),this.render()},v.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(m){u=m}return this.el=void 0},v.prototype.render=function(){var m,y,x,k,L,V,K;if(document.querySelector(H.target)==null)return!1;for(m=this.getElement(),k="translate3d("+this.progress+"%, 0, 0)",K=["webkitTransform","msTransform","transform"],L=0,V=K.length;L<V;L++)y=K[L],m.children[0].style[y]=k;return(!this.lastRenderedProgress||this.lastRenderedProgress|this.progress!==0|0)&&(m.children[0].setAttribute("data-progress-text",""+(this.progress|0)+"%"),this.progress>=100?x="99":(x=this.progress<10?"0":"",x+=this.progress|0),m.children[0].setAttribute("data-progress",""+x)),f.trigger("change",this.progress),this.lastRenderedProgress=this.progress},v.prototype.done=function(){return this.progress>=100},v})(),h=(function(){function v(){this.bindings={}}return v.prototype.trigger=function(m,y){var x,k,L,V,K;if(this.bindings[m]!=null){for(V=this.bindings[m],K=[],k=0,L=V.length;k<L;k++)x=V[k],K.push(x.call(this,y));return K}},v.prototype.on=function(m,y){var x;return(x=this.bindings)[m]==null&&(x[m]=[]),this.bindings[m].push(y)},v})(),Uo=window.XMLHttpRequest,Ss=window.XDomainRequest,Ir=window.WebSocket,ge=function(v,m){var y,x;x=[];for(y in m.prototype)try{v[y]==null&&typeof m[y]!="function"?typeof Object.defineProperty=="function"?x.push(Object.defineProperty(v,y,{get:(function(k){return function(){return m.prototype[k]}})(y),configurable:!0,enumerable:!0})):x.push(v[y]=m.prototype[y]):x.push(void 0)}catch{}return x},qe=[],f.ignore=function(){var v,m,y;return m=arguments[0],v=2<=arguments.length?Pr.call(arguments,1):[],qe.unshift("ignore"),y=m.apply(null,v),qe.shift(),y},f.track=function(){var v,m,y;return m=arguments[0],v=2<=arguments.length?Pr.call(arguments,1):[],qe.unshift("track"),y=m.apply(null,v),qe.shift(),y},$s=function(v){var m;if(v==null&&(v="GET"),qe[0]==="track")return"force";if(!qe.length&&H.ajax){if(v==="socket"&&H.ajax.trackWebSockets)return!0;if(m=v.toUpperCase(),Bd.call(H.ajax.trackMethods,m)>=0)return!0}return!1},g=(function(v){In(m,v);function m(){var y,x=this;m.__super__.constructor.apply(this,arguments),y=function(k){var L;return L=k.open,k.open=function(V,K,de){return $s(V)&&x.trigger("request",{type:V,url:K,request:k}),L.apply(k,arguments)}},window.XMLHttpRequest=function(k){var L;return L=new Uo(k),y(L),L};try{ge(window.XMLHttpRequest,Uo)}catch{}if(Ss!=null){window.XDomainRequest=function(){var k;return k=new Ss,y(k),k};try{ge(window.XDomainRequest,Ss)}catch{}}if(Ir!=null&&H.ajax.trackWebSockets){window.WebSocket=function(k,L){var V;return L!=null?V=new Ir(k,L):V=new Ir(k),$s("socket")&&x.trigger("request",{type:"socket",url:k,protocols:L,request:V}),V};try{ge(window.WebSocket,Ir)}catch{}}}return m})(h),_s=null,Ke=function(){return _s==null&&(_s=new g),_s},Fo=function(v){var m,y,x,k;for(k=H.ajax.ignoreURLs,y=0,x=k.length;y<x;y++)if(m=k[y],typeof m=="string"){if(v.indexOf(m)!==-1)return!0}else if(m.test(v))return!0;return!1},Ke().on("request",function(v){var m,y,x,k,L;if(k=v.type,x=v.request,L=v.url,!Fo(L)&&!f.running&&(H.restartOnRequestAfter!==!1||$s(k)==="force"))return y=arguments,m=H.restartOnRequestAfter||0,typeof m=="boolean"&&(m=0),setTimeout(function(){var V,K,de,be,ai,ni;if(k==="socket"?V=x.readyState<1:V=0<(be=x.readyState)&&be<4,V){for(f.restart(),ai=f.sources,ni=[],K=0,de=ai.length;K<de;K++)if(ct=ai[K],ct instanceof i){ct.watch.apply(ct,y);break}else ni.push(void 0);return ni}},m)}),i=(function(){function v(){this.complete=Pn(this.complete,this);var m=this;this.elements=[],Ke().on("request",function(){return m.watch.apply(m,arguments)})}return v.prototype.watch=function(m){var y,x,k,L;if(k=m.type,y=m.request,L=m.url,!Fo(L))return k==="socket"?x=new _(y,this.complete):x=new z(y,this.complete),this.elements.push(x)},v.prototype.complete=function(m){return this.elements=this.elements.filter(function(y){return y!==m})},v})(),z=(function(){function v(m,y){var x,k,L,V,K,de=this;if(this.progress=0,window.ProgressEvent!=null)for(O(m,"progress",function(be){return be.lengthComputable?de.progress=100*be.loaded/be.total:de.progress=de.progress+(100-de.progress)/2},!1),K=["load","abort","timeout","error"],k=0,L=K.length;k<L;k++)x=K[k],O(m,x,function(){return y(de),de.progress=100},!1);else V=m.onreadystatechange,m.onreadystatechange=function(){var be;return(be=m.readyState)===0||be===4?(y(de),de.progress=100):m.readyState===3&&(de.progress=50),typeof V=="function"?V.apply(null,arguments):void 0}}return v})(),_=(function(){function v(m,y){var x,k,L,V,K=this;for(this.progress=0,V=["error","open"],k=0,L=V.length;k<L;k++)x=V[k],O(m,x,function(){return y(K),K.progress=100},!1)}return v})(),o=(function(){function v(m){var y,x,k,L;for(m==null&&(m={}),this.complete=Pn(this.complete,this),this.elements=[],m.selectors==null&&(m.selectors=[]),L=m.selectors,x=0,k=L.length;x<k;x++)y=L[x],this.elements.push(new a(y,this.complete))}return v.prototype.complete=function(m){return this.elements=this.elements.filter(function(y){return y!==m})},v})(),a=(function(){function v(m,y){this.selector=m,this.completeCallback=y,this.progress=0,this.check()}return v.prototype.check=function(){var m=this;return document.querySelector(this.selector)?this.done():setTimeout((function(){return m.check()}),H.elements.checkInterval)},v.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100},v})(),s=(function(){v.prototype.states={loading:0,interactive:50,complete:100};function v(){var m,y,x=this;this.progress=(y=this.states[document.readyState])!=null?y:100,m=document.onreadystatechange,document.onreadystatechange=function(){return x.states[document.readyState]!=null&&(x.progress=x.states[document.readyState]),typeof m=="function"?m.apply(null,arguments):void 0}}return v})(),l=(function(){function v(){var m,y,x,k,L,V=this;this.progress=0,m=0,L=[],k=0,x=Re(),y=setInterval(function(){var K;return K=Re()-x-50,x=Re(),L.push(K),L.length>H.eventLag.sampleCount&&L.shift(),m=T(L),++k>=H.eventLag.minSamples&&m<H.eventLag.lagThreshold?(V.progress=100,clearInterval(y)):V.progress=100*(3/(m+3))},50)}return v})(),w=(function(){function v(m){this.source=m,this.last=this.sinceLastUpdate=0,this.rate=H.initialRate,this.catchup=0,this.progress=this.lastProgress=0,this.source!=null&&(this.progress=Ye(this.source,"progress"))}return v.prototype.tick=function(m,y){var x;return y==null&&(y=Ye(this.source,"progress")),y>=100&&(this.done=!0),y===this.last?this.sinceLastUpdate+=m:(this.sinceLastUpdate&&(this.rate=(y-this.last)/this.sinceLastUpdate),this.catchup=(y-this.progress)/H.catchupTime,this.sinceLastUpdate=0,this.last=y),y>this.progress&&(this.progress+=this.catchup*m),x=1-Math.pow(this.progress/100,H.easeFactor),this.progress+=x*this.rate*m,this.progress=Math.min(this.lastProgress+H.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},v})(),ir=null,Si=null,D=null,Bo=null,U=null,R=null,f.running=!1,De=function(){if(H.restartOnPushState)return f.restart()},window.history.pushState!=null&&(Dn=window.history.pushState,window.history.pushState=function(){return De(),Dn.apply(window.history,arguments)}),window.history.replaceState!=null&&(zn=window.history.replaceState,window.history.replaceState=function(){return De(),zn.apply(window.history,arguments)}),b={ajax:i,elements:o,document:s,eventLag:l},(Ee=function(){var v,m,y,x,k,L,V,K;for(f.sources=ir=[],L=["ajax","elements","document","eventLag"],m=0,x=L.length;m<x;m++)v=L[m],H[v]!==!1&&ir.push(new b[v](H[v]));for(K=(V=H.extraSources)!=null?V:[],y=0,k=K.length;y<k;y++)ct=K[y],ir.push(new ct(H));return f.bar=D=new r,Si=[],Bo=new w})(),f.stop=function(){return f.trigger("stop"),f.running=!1,D.destroy(),R=!0,U!=null&&(typeof F=="function"&&F(U),U=null),Ee()},f.restart=function(){return f.trigger("restart"),f.stop(),f.start()},f.go=function(){var v;return f.running=!0,D.render(),v=Re(),R=!1,U=$t(function(m,y){var x,k,L,V,K,de,be,ai,ni,qo,Ho,Wo,Mn,Nn,Fn;for(100-D.progress,k=qo=0,L=!0,de=Ho=0,Mn=ir.length;Ho<Mn;de=++Ho)for(ct=ir[de],ni=Si[de]!=null?Si[de]:Si[de]=[],K=(Fn=ct.elements)!=null?Fn:[ct],be=Wo=0,Nn=K.length;Wo<Nn;be=++Wo)V=K[be],ai=ni[be]!=null?ni[be]:ni[be]=new w(V),L&=ai.done,!ai.done&&(k++,qo+=ai.tick(m));return x=qo/k,D.update(Bo.tick(m,x)),D.done()||L||R?(D.update(100),f.trigger("done"),setTimeout(function(){return D.finish(),f.running=!1,f.trigger("hide")},Math.max(H.ghostTime,Math.max(H.minTime-(Re()-v),0)))):y()})},f.start=function(v){we(H,v),f.running=!0;try{D.render()}catch(m){u=m}return document.querySelector(".pace")?(f.trigger("start"),f.go()):setTimeout(f.start,50)},e.exports=f}).call(Vd)})(Fs)),Fs.exports}var Hd=qd();const Wd=Ud(Hd);class Xa{constructor(t){this.children=[],this.variables=t,this.proxy=new Proxy(t,this)}get(t,i){return t[i]||this.parent?.getProxy()[i]}set(t,i,r){t[i]=r}put(t,i){this.variables[t]=i}getProxy(){return this.proxy}createChild(t={}){const i=new Xa(t);return i.parent=this,this.children.push(i),i}getChildren(){return this.children}getParent(){return this.parent}destroy(){const t=this.parent?.children.indexOf(this);t!==void 0&&t>=0&&this.parent?.children.splice(t,1),this.parent=void 0}}const Le=new Xa({}),Sr=Le.createChild({});const Bs=globalThis,Ga=Bs.ShadowRoot&&(Bs.ShadyCSS===void 0||Bs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ka=Symbol(),Un=new WeakMap;let uc=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==Ka)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Ga&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=Un.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Un.set(i,t))}return t}toString(){return this.cssText}};const jd=e=>new uc(typeof e=="string"?e:e+"",void 0,Ka),A=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,s,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1],e[0]);return new uc(i,e,Ka)},Xd=(e,t)=>{if(Ga)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const r=document.createElement("style"),s=Bs.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=i.cssText,e.appendChild(r)}},Vn=Ga?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return jd(i)})(e):e;const{is:Gd,defineProperty:Kd,getOwnPropertyDescriptor:Yd,getOwnPropertyNames:Zd,getOwnPropertySymbols:Qd,getPrototypeOf:Jd}=Object,bo=globalThis,qn=bo.trustedTypes,eh=qn?qn.emptyScript:"",th=bo.reactiveElementPolyfillSupport,Jr=(e,t)=>e,Ws={toAttribute(e,t){switch(t){case Boolean:e=e?eh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ya=(e,t)=>!Gd(e,t),Hn={attribute:!0,type:String,converter:Ws,reflect:!1,useDefault:!1,hasChanged:Ya};Symbol.metadata??=Symbol("metadata"),bo.litPropertyMetadata??=new WeakMap;let or=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Hn){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,i);s!==void 0&&Kd(this.prototype,t,s)}}static getPropertyDescriptor(t,i,r){const{get:s,set:o}=Yd(this.prototype,t)??{get(){return this[i]},set(a){this[i]=a}};return{get:s,set(a){const l=s?.call(this);o?.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Hn}static _$Ei(){if(this.hasOwnProperty(Jr("elementProperties")))return;const t=Jd(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Jr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Jr("properties"))){const i=this.properties,r=[...Zd(i),...Qd(i)];for(const s of r)this.createProperty(s,i[s])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[r,s]of i)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[i,r]of this.elementProperties){const s=this._$Eu(i,r);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)i.unshift(Vn(s))}else t!==void 0&&i.push(Vn(t));return i}static _$Eu(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const r of i.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xd(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$ET(t,i){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:Ws).toAttribute(i,r.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,i){const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=r.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Ws;this._$Em=s;const l=a.fromAttribute(i,o.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,i,r,s=!1,o){if(t!==void 0){const a=this.constructor;if(s===!1&&(o=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??Ya)(o,i)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,i,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:r,reflect:s,wrapped:o},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??i??this[t]),o!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(i=void 0),this._$AL.set(t,i)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r){const{wrapped:a}=o,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(i)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(t){}firstUpdated(t){}};or.elementStyles=[],or.shadowRootOptions={mode:"open"},or[Jr("elementProperties")]=new Map,or[Jr("finalized")]=new Map,th?.({ReactiveElement:or}),(bo.reactiveElementVersions??=[]).push("2.1.2");const Za=globalThis,Wn=e=>e,js=Za.trustedTypes,jn=js?js.createPolicy("lit-html",{createHTML:e=>e}):void 0,pc="$lit$",li=`lit$${Math.random().toFixed(9).slice(2)}$`,fc="?"+li,ih=`<${fc}>`,Pi=document,os=()=>Pi.createComment(""),as=e=>e===null||typeof e!="object"&&typeof e!="function",Qa=Array.isArray,rh=e=>Qa(e)||typeof e?.[Symbol.iterator]=="function",jo=`[ 	
\f\r]`,Mr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xn=/-->/g,Gn=/>/g,Ai=RegExp(`>|${jo}(?:([^\\s"'>=/]+)(${jo}*=${jo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Kn=/'/g,Yn=/"/g,mc=/^(?:script|style|textarea|title)$/i,sh=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),p=sh(1),tt=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Zn=new WeakMap,zi=Pi.createTreeWalker(Pi,129);function gc(e,t){if(!Qa(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return jn!==void 0?jn.createHTML(t):t}const oh=(e,t)=>{const i=e.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",a=Mr;for(let l=0;l<i;l++){const d=e[l];let h,u,f=-1,g=0;for(;g<d.length&&(a.lastIndex=g,u=a.exec(d),u!==null);)g=a.lastIndex,a===Mr?u[1]==="!--"?a=Xn:u[1]!==void 0?a=Gn:u[2]!==void 0?(mc.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=Ai):u[3]!==void 0&&(a=Ai):a===Ai?u[0]===">"?(a=s??Mr,f=-1):u[1]===void 0?f=-2:(f=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?Ai:u[3]==='"'?Yn:Kn):a===Yn||a===Kn?a=Ai:a===Xn||a===Gn?a=Mr:(a=Ai,s=void 0);const b=a===Ai&&e[l+1].startsWith("/>")?" ":"";o+=a===Mr?d+ih:f>=0?(r.push(h),d.slice(0,f)+pc+d.slice(f)+li+b):d+li+(f===-2?l:b)}return[gc(e,o+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class ns{constructor({strings:t,_$litType$:i},r){let s;this.parts=[];let o=0,a=0;const l=t.length-1,d=this.parts,[h,u]=oh(t,i);if(this.el=ns.createElement(h,r),zi.currentNode=this.el.content,i===2||i===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=zi.nextNode())!==null&&d.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(pc)){const g=u[a++],b=s.getAttribute(f).split(li),w=/([.?@])?(.*)/.exec(g);d.push({type:1,index:o,name:w[2],strings:b,ctor:w[1]==="."?nh:w[1]==="?"?lh:w[1]==="@"?ch:wo}),s.removeAttribute(f)}else f.startsWith(li)&&(d.push({type:6,index:o}),s.removeAttribute(f));if(mc.test(s.tagName)){const f=s.textContent.split(li),g=f.length-1;if(g>0){s.textContent=js?js.emptyScript:"";for(let b=0;b<g;b++)s.append(f[b],os()),zi.nextNode(),d.push({type:2,index:++o});s.append(f[g],os())}}}else if(s.nodeType===8)if(s.data===fc)d.push({type:2,index:o});else{let f=-1;for(;(f=s.data.indexOf(li,f+1))!==-1;)d.push({type:7,index:o}),f+=li.length-1}o++}}static createElement(t,i){const r=Pi.createElement("template");return r.innerHTML=t,r}}function pr(e,t,i=e,r){if(t===tt)return t;let s=r!==void 0?i._$Co?.[r]:i._$Cl;const o=as(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(e),s._$AT(e,i,r)),r!==void 0?(i._$Co??=[])[r]=s:i._$Cl=s),s!==void 0&&(t=pr(e,s._$AS(e,t.values),s,r)),t}class ah{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:r}=this._$AD,s=(t?.creationScope??Pi).importNode(i,!0);zi.currentNode=s;let o=zi.nextNode(),a=0,l=0,d=r[0];for(;d!==void 0;){if(a===d.index){let h;d.type===2?h=new vo(o,o.nextSibling,this,t):d.type===1?h=new d.ctor(o,d.name,d.strings,this,t):d.type===6&&(h=new dh(o,this,t)),this._$AV.push(h),d=r[++l]}a!==d?.index&&(o=zi.nextNode(),a++)}return zi.currentNode=Pi,s}p(t){let i=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}let vo=class bc{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,r,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=pr(this,t,i),as(t)?t===B||t==null||t===""?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==tt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):rh(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&as(this._$AH)?this._$AA.nextSibling.data=t:this.T(Pi.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ns.createElement(gc(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(i);else{const o=new ah(s,this),a=o.u(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(t){let i=Zn.get(t.strings);return i===void 0&&Zn.set(t.strings,i=new ns(t)),i}k(t){Qa(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,s=0;for(const o of t)s===i.length?i.push(r=new bc(this.O(os()),this.O(os()),this,this.options)):r=i[s],r._$AI(o),s++;s<i.length&&(this._$AR(r&&r._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const r=Wn(t).nextSibling;Wn(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},wo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,r,s,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}_$AI(t,i=this,r,s){const o=this.strings;let a=!1;if(o===void 0)t=pr(this,t,i,0),a=!as(t)||t!==this._$AH&&t!==tt,a&&(this._$AH=t);else{const l=t;let d,h;for(t=o[0],d=0;d<o.length-1;d++)h=pr(this,l[r+d],i,d),h===tt&&(h=this._$AH[d]),a||=!as(h)||h!==this._$AH[d],h===B?t=B:t!==B&&(t+=(h??"")+o[d+1]),this._$AH[d]=h}a&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},nh=class extends wo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}},lh=class extends wo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}},ch=class extends wo{constructor(t,i,r,s,o){super(t,i,r,s,o),this.type=5}_$AI(t,i=this){if((t=pr(this,t,i,0)??B)===tt)return;const r=this._$AH,s=t===B&&r!==B||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==B&&(r===B||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},dh=class{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){pr(this,t)}};const hh={I:vo},uh=Za.litHtmlPolyfillSupport;uh?.(ns,vo),(Za.litHtmlVersions??=[]).push("3.3.2");const mt=(e,t,i)=>{const r=i?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const o=i?.renderBefore??null;r._$litPart$=s=new vo(t.insertBefore(os(),o),o,void 0,i??{})}return s._$AI(e),s};const Ja=globalThis;let Ii=class extends or{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mt(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tt}};Ii._$litElement$=!0,Ii.finalized=!0,Ja.litElementHydrateSupport?.({LitElement:Ii});const ph=Ja.litElementPolyfillSupport;ph?.({LitElement:Ii});(Ja.litElementVersions??=[]).push("4.2.2");const fh=!1,vc="app-toolbars-main",Ar="app-toolbars-main-right",wc="app-toolbars-main-center",en="app-toolbars-bottom",yo="app-toolbars-bottom-center",fs="app-toolbars-bottom-end",ci="editor-area-main",Xs="sidebar-main",yc="sidebar-main-bottom",xc="sidebar-auxiliary",kc="panel-bottom",mh="command-save",Cc=!1;var tn=(e=>(e[e.LEFT=0]="LEFT",e[e.MIDDLE=1]="MIDDLE",e[e.RIGHT=2]="RIGHT",e[e.BACK=3]="BACK",e[e.FORWARD=4]="FORWARD",e))(tn||{});const gh=Object.freeze(Object.defineProperty({__proto__:null,COMMAND_SAVE:mh,EDITOR_AREA_MAIN:ci,HIDE_DOT_RESOURCE:Cc,MouseButton:tn,PANEL_BOTTOM:kc,SIDEBAR_AUXILIARY:xc,SIDEBAR_MAIN:Xs,SIDEBAR_MAIN_BOTTOM:yc,TOOLBAR_BOTTOM:en,TOOLBAR_BOTTOM_CENTER:yo,TOOLBAR_BOTTOM_END:fs,TOOLBAR_MAIN:vc,TOOLBAR_MAIN_CENTER:wc,TOOLBAR_MAIN_RIGHT:Ar},Symbol.toStringTag,{value:"Module"})),di=e=>{console.info("[TOAST] INFO:",e)},kt=e=>{console.error("[TOAST] ERROR:",e)},bh=e=>{console.warn("[TOAST] WARNING:",e)},Qn={debug:0,info:1,warning:2,error:3};let vh="debug";const ar={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let Gs=null;const wa=[];function Nr(e){if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);if(e instanceof Error)return`${e.name}: ${e.message}`;try{return JSON.stringify(e)}catch{return String(e)}}class wh{constructor(t){this.source=t}info(t){this.log(t,"info")}warning(t){this.log(t,"warning")}warn(t){this.log(t,"warning")}error(t){this.log(t,"error")}debug(t){this.log(t,"debug")}log(t,i){nr(this.source,t,i)}}function yh(e){return Qn[e]>=Qn[vh]}function nr(e,t,i){yh(i)&&(Gs?Gs(e,t,i):(wa.push({source:e,message:t,level:i}),ar[i==="error"?"error":i==="warning"?"warn":i==="debug"?"debug":"log"](`[${e}] ${t}`)))}function xh(){console.log=function(...e){ar.log.apply(console,e),nr("Console",e.map(t=>Nr(t)).join(" "),"info")},console.info=function(...e){ar.info.apply(console,e),nr("Console",e.map(t=>Nr(t)).join(" "),"info")},console.warn=function(...e){ar.warn.apply(console,e),nr("Console",e.map(t=>Nr(t)).join(" "),"warning")},console.error=function(...e){ar.error.apply(console,e),nr("Console",e.map(t=>Nr(t)).join(" "),"error")},console.debug=function(...e){ar.debug.apply(console,e),nr("Console",e.map(t=>Nr(t)).join(" "),"debug")}}xh();function kh(e){for(Gs=e;wa.length>0;){const t=wa.shift();t&&e(t.source,t.message,t.level)}}function Ch(){Gs=null}function Xi(e){return new wh(e)}const Y=Xi("System");Le.put("logger",Y);const Eh="appspace-persistence",Gr="keyval",$h=1;let Xo=null;function Jn(){return Xo||(Xo=new Promise((e,t)=>{const i=indexedDB.open(Eh,$h);i.onerror=()=>t(i.error),i.onsuccess=()=>e(i.result),i.onupgradeneeded=r=>{r.target.result.createObjectStore(Gr)}})),Xo}class Sh{async persistObject(t,i){const r=await Jn();return new Promise((s,o)=>{const l=r.transaction(Gr,"readwrite").objectStore(Gr).put(i,t);l.onsuccess=()=>s(),l.onerror=()=>o(l.error)})}async getObject(t){const i=await Jn();return new Promise((r,s)=>{const a=i.transaction(Gr,"readonly").objectStore(Gr).get(t);a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error)})}}const St=new Sh;Le.put("persistenceService",St);class Ah{constructor(){this.subscriptions=new Map,this.tokenCounter=0}subscribe(t,i){this.subscriptions.has(t)||this.subscriptions.set(t,new Map);const r=`token_${++this.tokenCounter}_${Date.now()}`;return this.subscriptions.get(t).set(r,i),r}unsubscribe(t){for(const[i,r]of this.subscriptions.entries())if(r.has(t)){r.delete(t),r.size===0&&this.subscriptions.delete(i);return}}publish(t,i){const r=this.subscriptions.get(t);return!r||r.size===0?!1:(queueMicrotask(()=>{r.forEach(s=>{try{s(i)}catch(o){console.error(`Error in event callback for topic "${t}":`,o)}})}),!0)}clearAllSubscriptions(){this.subscriptions.clear()}clearSubscriptions(t){this.subscriptions.delete(t)}}const rn=new Ah,We=(e,t)=>rn.subscribe(e,t),_h=e=>{rn.unsubscribe(e)},ke=(e,t)=>rn.publish(e,t),rr=".geospace/settings.json",Go="dialogSettings",Li="events/settings/changed";function Ec(e,t){if(t){for(const[i,r]of Object.entries(t))if(r&&typeof r=="object"){const s=e[i];s?.properties&&r.properties?Ec(s.properties,r.properties):e[i]={...r,properties:r.properties?{...r.properties}:void 0}}}}class Lh{constructor(){this.mergedSchema={type:"object",properties:{}}}async checkSettings(){this.appSettings||(this.appSettings=await St.getObject(rr),this.appSettings||(this.appSettings={},await St.persistObject(rr,this.appSettings)),ke(Li,this.appSettings))}registerSchema(t){const i=t.properties??(t.type==="object"?{}:void 0);i&&(this.mergedSchema.properties||(this.mergedSchema.properties={}),Ec(this.mergedSchema.properties,i))}getCategories(){const t=this.mergedSchema.properties;return t?Object.entries(t).filter(([,i])=>i&&typeof i=="object").map(([i,r])=>({id:i,label:r.title??i,order:typeof r.order=="number"?r.order:0,schema:r})).sort((i,r)=>i.order-r.order):[]}getSchemaForCategory(t){return this.mergedSchema.properties?.[t]}getSchemaForSettingKey(t){const i=t.split(".").filter(Boolean);if(i.length===0)return this.mergedSchema;let r=this.mergedSchema;for(const s of i)if(r=r?.properties?.[s],!r)return;return r}traversePath(t,i,r){if(i.length===0)return null;let s=t;const o=i.length-1;for(let a=0;a<o;a++){const l=i[a];if(s[l]===void 0){if(!r)return null;s[l]={}}if(s[l]===null||typeof s[l]!="object")return null;s=s[l]}return{parent:s,key:i[o]}}async getAt(t){await this.checkSettings();const i=t.split(".").filter(Boolean);if(i.length===0)return this.appSettings;const r=this.traversePath(this.appSettings,i,!1);if(r)return r.parent[r.key]}async setAt(t,i){await this.checkSettings();const r=t.split(".").filter(Boolean);if(r.length===0)return;const s=this.traversePath(this.appSettings,r,!0);s&&(s.parent[s.key]=i,await St.persistObject(rr,this.appSettings),ke(Li,this.appSettings))}async get(t){return await this.checkSettings(),this.appSettings[t]}async set(t,i){await this.checkSettings(),this.appSettings[t]=i,await St.persistObject(rr,this.appSettings),ke(Li,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(t){this.appSettings=t,await St.persistObject(rr,this.appSettings),ke(Li,this.appSettings)}async getDialogSetting(t){return await this.checkSettings(),(this.appSettings[Go]||{})[t]}async setDialogSetting(t,i){await this.checkSettings();const r=this.appSettings[Go]||{};r[t]=i,this.appSettings[Go]=r,await St.persistObject(rr,this.appSettings),ke(Li,this.appSettings)}}const Se=new Lh;Le.put("appSettings",Se);var Th=Object.defineProperty,Dh=(e,t,i)=>t in e?Th(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Ko=(e,t,i)=>(Dh(e,typeof t!="symbol"?t+"":t,i),i),Rh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Yo=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},Ls=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},el=(e,t,i)=>(Rh(e,t,"access private method"),i);function $c(e,t){return Object.is(e,t)}let xe=null,es=!1,Us=1;const Ks=Symbol("SIGNAL");function lr(e){const t=xe;return xe=e,t}function zh(){return xe}function Oh(){return es}const sn={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function xo(e){if(es)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(xe===null)return;xe.consumerOnSignalRead(e);const t=xe.nextProducerIndex++;if(fr(xe),t<xe.producerNode.length&&xe.producerNode[t]!==e&&ya(xe)){const i=xe.producerNode[t];ko(i,xe.producerIndexOfThis[t])}xe.producerNode[t]!==e&&(xe.producerNode[t]=e,xe.producerIndexOfThis[t]=ya(xe)?_c(e,xe,t):0),xe.producerLastReadVersion[t]=e.version}function Ih(){Us++}function Sc(e){if(!(!e.dirty&&e.lastCleanEpoch===Us)){if(!e.producerMustRecompute(e)&&!Bh(e)){e.dirty=!1,e.lastCleanEpoch=Us;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=Us}}function Ac(e){if(e.liveConsumerNode===void 0)return;const t=es;es=!0;try{for(const i of e.liveConsumerNode)i.dirty||Mh(i)}finally{es=t}}function Ph(){return xe?.consumerAllowSignalWrites!==!1}function Mh(e){var t;e.dirty=!0,Ac(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function Nh(e){return e&&(e.nextProducerIndex=0),lr(e)}function Fh(e,t){if(lr(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(ya(e))for(let i=e.nextProducerIndex;i<e.producerNode.length;i++)ko(e.producerNode[i],e.producerIndexOfThis[i]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function Bh(e){fr(e);for(let t=0;t<e.producerNode.length;t++){const i=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==i.version||(Sc(i),r!==i.version))return!0}return!1}function _c(e,t,i){var r;if(on(e),fr(e),e.liveConsumerNode.length===0){(r=e.watched)==null||r.call(e.wrapper);for(let s=0;s<e.producerNode.length;s++)e.producerIndexOfThis[s]=_c(e.producerNode[s],e,s)}return e.liveConsumerIndexOfThis.push(i),e.liveConsumerNode.push(t)-1}function ko(e,t){var i;if(on(e),fr(e),typeof ngDevMode<"u"&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(i=e.unwatched)==null||i.call(e.wrapper);for(let s=0;s<e.producerNode.length;s++)ko(e.producerNode[s],e.producerIndexOfThis[s])}const r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const s=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];fr(o),o.producerIndexOfThis[s]=t}}function ya(e){var t;return e.consumerIsAlwaysLive||(((t=e?.liveConsumerNode)==null?void 0:t.length)??0)>0}function fr(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function on(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function Lc(e){if(Sc(e),xo(e),e.value===xa)throw e.error;return e.value}function Uh(e){const t=Object.create(Vh);t.computation=e;const i=()=>Lc(t);return i[Ks]=t,i}const Zo=Symbol("UNSET"),Qo=Symbol("COMPUTING"),xa=Symbol("ERRORED"),Vh={...sn,value:Zo,dirty:!0,error:null,equal:$c,producerMustRecompute(e){return e.value===Zo||e.value===Qo},producerRecomputeValue(e){if(e.value===Qo)throw new Error("Detected cycle in computations.");const t=e.value;e.value=Qo;const i=Nh(e);let r,s=!1;try{r=e.computation.call(e.wrapper),s=t!==Zo&&t!==xa&&e.equal.call(e.wrapper,t,r)}catch(o){r=xa,e.error=o}finally{Fh(e,i)}if(s){e.value=t;return}e.value=r,e.version++}};function qh(){throw new Error}let Hh=qh;function Wh(){Hh()}function jh(e){const t=Object.create(Kh);t.value=e;const i=()=>(xo(t),t.value);return i[Ks]=t,i}function Xh(){return xo(this),this.value}function Gh(e,t){Ph()||Wh(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,Yh(e))}const Kh={...sn,equal:$c,value:void 0};function Yh(e){e.version++,Ih(),Ac(e)}const ze=Symbol("node");var Me;(e=>{var t,i,r,s;class o{constructor(d,h={}){Ls(this,i),Ko(this,t);const f=jh(d)[Ks];if(this[ze]=f,f.wrapper=this,h){const g=h.equals;g&&(f.equal=g),f.watched=h[e.subtle.watched],f.unwatched=h[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Xh.call(this[ze])}set(d){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Oh())throw new Error("Writes to signals not permitted during Watcher callback");const h=this[ze];Gh(h,d)}}t=ze,i=new WeakSet,e.isState=l=>typeof l=="object"&&Yo(i,l),e.State=o;class a{constructor(d,h){Ls(this,s),Ko(this,r);const f=Uh(d)[Ks];if(f.consumerAllowSignalWrites=!0,this[ze]=f,f.wrapper=this,h){const g=h.equals;g&&(f.equal=g),f.watched=h[e.subtle.watched],f.unwatched=h[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Lc(this[ze])}}r=ze,s=new WeakSet,e.isComputed=l=>typeof l=="object"&&Yo(s,l),e.Computed=a,(l=>{var d,h,u,f;function g(T){let D,R=null;try{R=lr(null),D=T()}finally{lr(R)}return D}l.untrack=g;function b(T){var D;if(!(0,e.isComputed)(T)&&!(0,e.isWatcher)(T))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((D=T[ze].producerNode)==null?void 0:D.map(R=>R.wrapper))??[]}l.introspectSources=b;function w(T){var D;if(!(0,e.isComputed)(T)&&!(0,e.isState)(T))throw new TypeError("Called introspectSinks without a Signal argument");return((D=T[ze].liveConsumerNode)==null?void 0:D.map(R=>R.wrapper))??[]}l.introspectSinks=w;function _(T){if(!(0,e.isComputed)(T)&&!(0,e.isState)(T))throw new TypeError("Called hasSinks without a Signal argument");const D=T[ze].liveConsumerNode;return D?D.length>0:!1}l.hasSinks=_;function z(T){if(!(0,e.isComputed)(T)&&!(0,e.isWatcher)(T))throw new TypeError("Called hasSources without a Computed or Watcher argument");const D=T[ze].producerNode;return D?D.length>0:!1}l.hasSources=z;class O{constructor(D){Ls(this,h),Ls(this,u),Ko(this,d);let R=Object.create(sn);R.wrapper=this,R.consumerMarkedDirty=D,R.consumerIsAlwaysLive=!0,R.consumerAllowSignalWrites=!1,R.producerNode=[],this[ze]=R}watch(...D){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");el(this,u,f).call(this,D);const R=this[ze];R.dirty=!1;const F=lr(R);for(const ae of D)xo(ae[ze]);lr(F)}unwatch(...D){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");el(this,u,f).call(this,D);const R=this[ze];fr(R);for(let F=R.producerNode.length-1;F>=0;F--)if(D.includes(R.producerNode[F].wrapper)){ko(R.producerNode[F],R.producerIndexOfThis[F]);const ae=R.producerNode.length-1;if(R.producerNode[F]=R.producerNode[ae],R.producerIndexOfThis[F]=R.producerIndexOfThis[ae],R.producerNode.length--,R.producerIndexOfThis.length--,R.nextProducerIndex--,F<R.producerNode.length){const we=R.producerIndexOfThis[F],ge=R.producerNode[F];on(ge),ge.liveConsumerIndexOfThis[we]=F}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[ze].producerNode.filter(R=>R.dirty).map(R=>R.wrapper)}}d=ze,h=new WeakSet,u=new WeakSet,f=function(T){for(const D of T)if(!(0,e.isComputed)(D)&&!(0,e.isState)(D))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=T=>Yo(h,T),l.Watcher=O;function U(){var T;return(T=zh())==null?void 0:T.wrapper}l.currentComputed=U,l.watched=Symbol("watched"),l.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(Me||(Me={}));let Jo=!1;const tl=new Me.subtle.Watcher(()=>{Jo||(Jo=!0,queueMicrotask(()=>{Jo=!1;for(const e of tl.getPending())e.get();tl.watch()}))}),Zh=Symbol("SignalWatcherBrand"),Qh=new FinalizationRegistry(e=>{e.unwatch(...Me.subtle.introspectSources(e))}),il=new WeakMap;function Jh(e){return e[Zh]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new Map,this._$So=new Me.State(0),this._$Si=!1}_$Sl(){var t,i;const r=[],s=[];this._$St.forEach((a,l)=>{(a?.beforeUpdate?r:s).push(l)});const o=(t=this.h)===null||t===void 0?void 0:t.getPending().filter(a=>a!==this._$Su&&!this._$St.has(a));r.forEach(a=>a.get()),(i=this._$Su)===null||i===void 0||i.get(),o.forEach(a=>a.get()),s.forEach(a=>a.get())}_$Sv(){this.isUpdatePending||queueMicrotask(()=>{this.isUpdatePending||this._$Sl()})}_$S_(){if(this.h!==void 0)return;this._$Su=new Me.Computed(()=>{this._$So.get(),super.performUpdate()});const t=this.h=new Me.subtle.Watcher(function(){const i=il.get(this);i!==void 0&&(i._$Si===!1&&(new Set(this.getPending()).has(i._$Su)?i.requestUpdate():i._$Sv()),this.watch())});il.set(t,this),Qh.register(this,t),t.watch(this._$Su),t.watch(...Array.from(this._$St).map(([i])=>i))}_$Sp(){if(this.h===void 0)return;let t=!1;this.h.unwatch(...Me.subtle.introspectSources(this.h).filter(i=>{var r;const s=((r=this._$St.get(i))===null||r===void 0?void 0:r.manualDispose)!==!0;return s&&this._$St.delete(i),t||(t=!s),s})),t||(this._$Su=void 0,this.h=void 0,this._$St.clear())}updateEffect(t,i){var r;this._$S_();const s=new Me.Computed(()=>{t()});return this.h.watch(s),this._$St.set(s,i),(r=i?.beforeUpdate)!==null&&r!==void 0&&r?Me.subtle.untrack(()=>s.get()):this.updateComplete.then(()=>Me.subtle.untrack(()=>s.get())),()=>{this._$St.delete(s),this.h.unwatch(s),this.isConnected===!1&&this._$Sp()}}performUpdate(){this.isUpdatePending&&(this._$S_(),this._$Si=!0,this._$So.set(this._$So.get()+1),this._$Si=!1,this._$Sl())}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}}}const At={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},_r=e=>(...t)=>({_$litDirective$:e,values:t});let Lr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};const{I:eu}=hh,rl=e=>e,tu=(e,t)=>e?._$litType$!==void 0,Tc=e=>e.strings===void 0,sl=()=>document.createComment(""),Fr=(e,t,i)=>{const r=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(i===void 0){const o=r.insertBefore(sl(),s),a=r.insertBefore(sl(),s);i=new eu(o,a,e,e.options)}else{const o=i._$AB.nextSibling,a=i._$AM,l=a!==e;if(l){let d;i._$AQ?.(e),i._$AM=e,i._$AP!==void 0&&(d=e._$AU)!==a._$AU&&i._$AP(d)}if(o!==s||l){let d=i._$AA;for(;d!==o;){const h=rl(d).nextSibling;rl(r).insertBefore(d,s),d=h}}}return i},_i=(e,t,i=e)=>(e._$AI(t,i),e),iu={},Dc=(e,t=iu)=>e._$AH=t,ru=e=>e._$AH,ea=e=>{e._$AR(),e._$AA.remove()};const ts=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const r of i)r._$AO?.(t,!1),ts(r,t);return!0},Ys=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},Rc=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),au(t)}};function su(e){this._$AN!==void 0?(Ys(this),this._$AM=e,Rc(this)):this._$AM=e}function ou(e,t=!1,i=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let o=i;o<r.length;o++)ts(r[o],!1),Ys(r[o]);else r!=null&&(ts(r,!1),Ys(r));else ts(this,e)}const au=e=>{e.type==At.CHILD&&(e._$AP??=ou,e._$AQ??=su)};class nu extends Lr{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),Rc(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(ts(this,t),Ys(this))}setValue(t){if(Tc(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}let ta=!1;const ol=new Me.subtle.Watcher(async()=>{ta||(ta=!0,queueMicrotask(()=>{ta=!1;for(const e of ol.getPending())e.get();ol.watch()}))});Me.State;Me.Computed;const mi=(e,t)=>new Me.State(e,t),Wt="events/contributionregistry/contributionsChanged";class lu{constructor(){this.contributions=new Map}registerContribution(t,i){const r=this.getContributions(t);if("command"in i){const s=i;s.disabled instanceof Function&&(s.disabled=new Me.Computed(s.disabled))}r.push(i),ke(Wt,{target:t,contributions:r})}getContributions(t){return this.contributions.has(t)||this.contributions.set(t,[]),this.contributions.get(t)}}const I=new lu;Le.put("contributionRegistry",I);class cu{constructor(){this.packages=[]}addPackage(t){this.packages.push(t)}hasPackages(){return this.packages.length>0&&this.packages.some(t=>t.dependencies&&Object.keys(t.dependencies).length>0)}renderTree(){return this.packages.length===0?p``:p`
            <wa-tree style="--indent-guide-width: 1px;">
                ${this.packages.map(t=>{const i=t.dependencies||{},r=Object.entries(i);return r.length===0?p``:p`
                        <wa-tree-item expanded>
                            <span>${t.name}</span>
                            ${r.map(([s,o])=>p`
                                <wa-tree-item>
                                    <span>${s} <small>${o}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    `})}
            </wa-tree>
        `}}const Zs=new cu;Le.put("packageInfoService",Zs);const gt=mi(null),is=mi(null),ka=mi(null),Ca=mi(0),Kr=mi(void 0);mi({name:"",timestamp:0});class du{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,Ca.set(this.updateCounter)}run(t,i){const r=this.createProgressMonitor(t);try{this.tasks.push(r),this.notifyUpdate(),i(r)}finally{this.tasks.splice(this.tasks.indexOf(r),1),this.notifyUpdate()}}async runAsync(t,i){const r=this.createProgressMonitor(t);return this.tasks.push(r),this.notifyUpdate(),i(r).finally(()=>{this.tasks.splice(this.tasks.indexOf(r),1),this.notifyUpdate()})}createProgressMonitor(t){const i={name:t,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(i,{set:(r,s,o)=>(r[s]=o,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const mr=new du;Le.put("taskService",mr);const ne="system.language_bundles",Ea="language";function hu(e,t){return t?e.replace(/\{(\w+)\}/g,(i,r)=>t[r]!==void 0?t[r]:i):e}class uu extends String{constructor(t,i,r,s){super(""),this.i18nService=t,this.namespace=i,this.key=r,this.params=s}toString(){const t=this.i18nService.currentLanguageSignal.get();return this.cachedValue!==void 0&&this.cachedLanguage===t?this.cachedValue:(this.cachedValue=this.i18nService.translate(this.namespace,this.key,this.params),this.cachedLanguage=t,this.cachedValue)}valueOf(){return this.toString()}[Symbol.toPrimitive](t){if(t==="number"){const i=Number(this.toString());return isNaN(i)?0:i}return this.toString()}toJSON(){return this.toString()}}const Ri=class Ri{constructor(){this.translationCache=new Map,this.currentLanguageSignal=mi(this.getBrowserLanguage()),this.languageContributionsSignal=mi([]),this.initialize()}getBrowserLanguage(){return(navigator.language||navigator.languages?.[0]||Ri.DEFAULT_LANGUAGE).split("-")[0].toLowerCase()}async initializeLanguage(){return await Se.get(Ea)||this.getBrowserLanguage()}async updateLanguageFromSettings(){const t=await this.initializeLanguage();this.currentLanguageSignal.set(t)}getPrimaryLanguage(t){return t.split("-")[0].toLowerCase()}updateLanguageContributions(){const t=I.getContributions(ne);this.languageContributionsSignal.set(t)}createCacheKey(t,i){return`${t}:${i}`}mergeTranslationsForLanguage(t,i,r){const s=this.createCacheKey(i,r),o=this.translationCache.get(s);if(o!==void 0)return o;const a={};for(const l of t){if(l.namespace!==i)continue;let d;l.translations&&l.language===r?d=l.translations:l[r]&&typeof l[r]=="object"&&(d=l[r]),d&&Object.assign(a,d)}return this.translationCache.set(s,a),a}invalidateTranslationCache(){this.translationCache.clear()}translate(t,i,r){const s=this.currentLanguageSignal.get(),o=this.getPrimaryLanguage(s),a=this.languageContributionsSignal.get();let l;const d=this.mergeTranslationsForLanguage(a,t,s);if(d[i])l=d[i];else{const h=s!==o?this.mergeTranslationsForLanguage(a,t,o):d;if(h[i])l=h[i];else if(o!==Ri.DEFAULT_LANGUAGE&&s!==Ri.DEFAULT_LANGUAGE){const u=this.mergeTranslationsForLanguage(a,t,Ri.DEFAULT_LANGUAGE);u[i]&&(l=u[i])}}return l?hu(l,r):i}initialize(){We(Li,async t=>{const i=t?.[Ea]||this.getBrowserLanguage();this.currentLanguageSignal.set(i),this.invalidateTranslationCache()}),We(Wt,t=>{t.target===ne&&(this.invalidateTranslationCache(),this.updateLanguageContributions())}),this.updateLanguageFromSettings(),this.updateLanguageContributions()}i18n(t){return(i,r)=>this.translate(t,i,r)}i18nLazy(t){return(i,r)=>new uu(this,t,i,r)}};Ri.DEFAULT_LANGUAGE="en";let $a=Ri;const ms=new $a;Le.put("i18nService",ms);const zc=ms.currentLanguageSignal,pu=ms.languageContributionsSignal,Gi=e=>ms.i18n(e),Te=e=>ms.i18nLazy(e),fu=Xi("EsmShService"),$e=class $e{isEsmShUrl(t){try{const i=new URL(t);return i.hostname==="esm.sh"||i.hostname==="raw.esm.sh"}catch{return!1}}isSourceIdentifier(t){return this.isEsmShUrl(t)||this.isHttpUrl(t)?!1:this.parseSource(t)!==null}isHttpUrl(t){try{const i=new URL(t);return i.protocol==="http:"||i.protocol==="https:"}catch{return!1}}parseSource(t){return!t||typeof t!="string"||(t=t.trim(),this.isHttpUrl(t))?null:t.startsWith($e.GITHUB_PREFIX)?this.parseGitHubSource(t):t.startsWith($e.JSR_PREFIX)?this.parseJsrSource(t):t.startsWith($e.PR_PREFIX)?this.parsePrSource(t):this.parseNpmSource(t)}parseGitHubSource(t){const r=t.substring($e.GITHUB_PREFIX.length).split("/");if(r.length<2)return null;const s=r[0],o=r[1];let a,l,d;const h=o.match(/^(.+?)(@(.+))?$/);return h?(a=h[1],l=h[3],r.length>2&&(d=r.slice(2).join("/")),{type:"github",owner:s,repo:a,version:l,path:d}):null}parseJsrSource(t){const i=t.substring($e.JSR_PREFIX.length);if(!i.startsWith("@"))return null;const r=i.split("/");if(r.length<2)return null;const s=r[0],o=r[1];let a,l,d;const h=o.match(/^(.+?)(@(.+))?$/);return h?(a=`${s}/${h[1]}`,l=h[3],r.length>2&&(d=r.slice(2).join("/")),{type:"jsr",package:a,version:l,path:d}):null}parsePrSource(t){const r=t.substring($e.PR_PREFIX.length).split("/");if(r.length<2)return null;const s=r[0],o=r[1];let a,l;const d=o.match(/^(.+?)@(.+)$/);return d?(a=d[1],l=d[2]):a=o,{type:"pr",owner:s,repo:a,commit:l}}parseNpmSource(t){const i=t.split("/"),r=i[0];let s,o,a;const l=r.match(/^(.+?)(@(.+))?$/);return l?(s=l[1],o=l[3],i.length>1&&(a=i.slice(1).join("/")),{type:"npm",package:s,version:o,path:a}):null}buildEsmShUrl(t,i){let r=$e.ESM_SH_BASE;switch(t.type){case"npm":r+=`/${t.package}`,t.version&&(r+=`@${t.version}`),t.path&&(r+=`/${t.path}`);break;case"github":r+=`/${$e.GITHUB_PREFIX}${t.owner}/${t.repo}`,t.version&&(r+=`@${t.version}`),t.path&&(r+=`/${t.path}`);break;case"jsr":r+=`/${$e.JSR_PREFIX}${t.package}`,t.version&&(r+=`@${t.version}`),t.path&&(r+=`/${t.path}`);break;case"pr":r+=`/${$e.PR_PREFIX}${t.owner}/${t.repo}`,t.commit&&(r+=`@${t.commit}`);break}const s=[];if(i?.deps){const o=Object.entries(i.deps).map(([a,l])=>`${a}@${l}`).join(",");s.push(`deps=${encodeURIComponent(o)}`)}return i?.target&&s.push(`target=${encodeURIComponent(i.target)}`),i?.dev&&s.push("dev"),i?.bundle===!1?s.push("bundle=false"):i?.bundle===!0&&s.push("bundle"),s.length>0&&(r+=`?${s.join("&")}`),r}normalizeToEsmSh(t,i){if(this.isEsmShUrl(t)||this.isHttpUrl(t))return t;const r=this.parseSource(t);return r?this.buildEsmShUrl(r,i):(fu.warn(`Could not parse source identifier: ${t}`),t)}extractPackageName(t){const i=this.parseSource(t);if(!i)return null;switch(i.type){case"npm":return i.package||null;case"github":return`${i.owner}/${i.repo}`;case"jsr":return i.package||null;case"pr":return`${i.owner}/${i.repo}`}}isGitHubUrl(t){try{const i=new URL(t);return i.hostname==="github.com"||i.hostname==="www.github.com"}catch{return t.startsWith("https://github.com/")||t.startsWith("http://github.com/")}}convertGitHubUrlToSource(t){try{const r=new URL(t).pathname.split("/").filter(h=>h);if(r.length<2)throw new Error("Invalid GitHub URL format");const s=r[0];let o=r[1].replace(/\.git$/,""),a,l;r.length>2&&(r[2]==="blob"||r[2]==="tree"?(a=r[3]||"main",r[2]==="blob"&&r.length>4&&(l=r.slice(4).join("/"))):r[2]==="commit"?a=r[3]:l=r.slice(2).join("/"));let d=`${$e.GITHUB_PREFIX}${s}/${o}`;return a&&(d+=`@${a}`),l&&(d+=`/${l}`),d}catch{const i=t.match(/github\.com\/([^\/]+)\/([^\/]+)/);return i?`${$e.GITHUB_PREFIX}${i[1]}/${i[2].replace(/\.git$/,"")}`:t}}async fetchGitHubPackageJson(t){if(t.type!=="github")throw new Error("Source must be a GitHub source");const i=t.owner,r=t.repo,s=t.version||"main",o=`https://raw.githubusercontent.com/${i}/${r}/${s}/package.json`,a=await fetch(o);if(!a.ok)throw new Error(`Failed to fetch package.json: ${a.statusText}`);return await a.json()}};$e.ESM_SH_BASE="https://esm.sh",$e.GITHUB_PREFIX="gh/",$e.JSR_PREFIX="jsr/",$e.PR_PREFIX="pr/";let Sa=$e;const Nt=new Sa;Le.put("esmShService",Nt);const Oc="events/commandregistry/commandRegistered";class mu{constructor(t,i,r,s,o){this.id=t,this.name=i,this.description=r,this.parameters=s||[],this.output=o||[]}}class gu{constructor(){this.commands={},this.handlers=new Map}registerHandler(t,i){this.handlers.has(t)||this.handlers.set(t,[]);const r=this.handlers.get(t);r.push(i),r.sort((s,o)=>(o.ranking??0)-(s.ranking??0))}getHandler(t){return this.handlers.get(t)}createExecutionContext(t){return{params:t||{},activePart:gt.get(),activeEditor:is.get()}}execute(t,i={}){const r=this.getHandler(t);if(!r)throw Y.debug(`[CommandRegistry] No handlers registered for command: ${t}`),new Error(`No handlers registered for command: ${t}`);const s=this.getCommand(t),o=i.params?` params: ${JSON.stringify(i.params)}`:"";Y.debug(`[CommandRegistry] Executing command: ${t}${s?` (${s.name})`:""}${o}`);for(const a of r)if(a.canExecute===void 0||a.canExecute(i))try{const l=a.execute(i);return Y.debug(`[CommandRegistry] Command executed successfully: ${t} (result: ${l})`),l}catch(l){const d=l instanceof Error?l.message:String(l);throw Y.error(`[CommandRegistry] Command execution failed: ${t} - ${d}`),l}Y.error(`[CommandRegistry] No handler found to execute command: ${t}`)}createAndRegisterCommand(t,i,r,s,o){const a=new mu(t,i,r,s);this.registerCommand(a),o&&this.registerHandler(t,o)}registerCommand(t){this.commands[t.id]=t,Y.debug(`Command registered: ${t.id}`),ke(Oc,t)}hasCommand(t){return t in this.commands}listCommands(t){return t?Object.values(this.commands).filter(i=>(Ft.getHandler(i.id)||[]).some(s=>s.canExecute===void 0||s.canExecute(t))).reduce((i,r)=>(i[r.id]=r,i),{}):this.commands}getCommand(t){return this.commands[t]}registerAll(t){const i=t.command.id;this.registerCommand(t.command),t.handler&&this.registerHandler(i,t.handler),t.contribution&&t.contribution.target&&I.registerContribution(t.contribution.target,{command:i,...t.contribution})}}const Ft=new gu;Le.put("commandRegistry",Ft);const yt=e=>{Ft.registerAll(e)},Yr="events/extensionsregistry/extensionsConfigChanged",Br="extensions",al="extensions.external";class bu{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,We(Li,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then(async()=>{const t=this.extensionsSettings?.filter(i=>this.isEnabled(i.id)).map(i=>this.load(i.id).catch(r=>{kt("Extension could not be loaded: "+r.message)}))||[];await Promise.all(t)})})}async loadPersistedExternalExtensions(){try{const t=await Se.get(al);t&&Array.isArray(t)&&(t.forEach(i=>{this.extensions[i.id]=i}),Y.debug(`Loaded ${t.length} persisted external extensions`))}catch(t){Y.error(`Failed to load persisted external extensions: ${t}`)}}async savePersistedExternalExtensions(){try{const t=Object.values(this.extensions).filter(i=>i.external);await Se.set(al,t)}catch(t){Y.error(`Failed to save persisted external extensions: ${t}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await Se.get(Br),this.extensionsSettings||(await Se.set(Br,[]),this.extensionsSettings=await Se.get(Br)),ke(Yr,this.extensionsSettings))}registerExtension(t){this.extensions[t.id]=t,t.external&&this.savePersistedExternalExtensions().catch(i=>{Y.error(`Failed to persist external extension: ${i}`)}),ke(Yr,this.extensionsSettings)}async loadExtensionFromUrl(t,i){Y.info(`Loading extension from URL: ${t}...`);try{let r=t,s=`Extension from ${t}`;if(Nt.isSourceIdentifier(t)){const a=Nt.extractPackageName(t);a&&(s=`Extension: ${a}`),r=Nt.normalizeToEsmSh(t),Y.debug(`Converted source identifier to esm.sh URL: ${t} -> ${r}`)}const o=i||`url:${r}`;if(this.isEnabled(o))return Y.info(`Extension from URL ${r} is already enabled`),o;if(!this.extensions[o]){const a={id:o,name:s,description:`Extension loaded from: ${t}`,url:r};this.registerExtension(a),Y.info(`Registered extension from URL: ${o}`)}return this.enable(o,!1),Y.info(`Successfully enabled extension from URL: ${r}`),o}catch(r){throw Y.error(`Failed to load extension from URL ${t}: ${r}`),r}}getExtensions(){return Object.values(this.extensions)}isEnabled(t){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(i=>i.id===t&&i.enabled)}isLoaded(t){return this.loadedExtensions.has(t)}enable(t,i=!1){this.isEnabled(t)||(Y.debug(`Loading extension: ${t}`),this.load(t).then(()=>{this.updateEnablement(t,!0,i)}).catch(r=>{Y.error(`Could not load extension: ${t}: ${r}`)}))}async load(t,i=[]){if(this.loadedExtensions.has(t))return;const r=this.loadingPromises.get(t);if(r)return r;if(i.includes(t)){const a=[...i,t].join(" → ");throw new Error(`Circular dependency detected: ${a}`)}const s=this.extensions[t];if(!s)throw new Error("Extension not found: "+t);const o=(async()=>{try{if(s.dependencies&&s.dependencies.length>0){Y.debug(`Loading dependencies for ${t}: ${s.dependencies.join(", ")}`);const l=[...i,t];for(const d of s.dependencies)await this.load(d,l),this.isEnabled(d)||(await this.updateEnablementAsync(d,!0,!1),Y.debug(`Auto-enabled dependency: ${d}`))}const a=await mr.runAsync("Loading extension: "+s.name,async()=>{if(s.loader)return s.loader();if(s.url){let l=s.url;return Nt.isSourceIdentifier(s.url)&&(l=Nt.normalizeToEsmSh(s.url),Y.debug(`Normalized extension URL: ${s.url} -> ${l}`)),import(l)}});if(this.loadedExtensions.add(t),a?.default instanceof Function){Y.debug(`Executing extension function for: ${t}`);try{a?.default(Sr.getProxy()),Y.debug(`Extension function executed successfully: ${t}`)}catch(l){throw Y.error(`Error executing extension function for ${t}: ${l}`),l}}else Y.warn(`Extension ${t} does not export a default function`);Y.debug(`Extension loaded: ${t}`)}catch(a){throw this.loadedExtensions.delete(t),a}finally{this.loadingPromises.delete(t)}})();return this.loadingPromises.set(t,o),o}disable(t,i=!1){this.isEnabled(t)&&this.updateEnablement(t,!1,i)}updateEnablement(t,i,r){this.checkExtensionsConfig().then(()=>{const s=this.extensionsSettings?.find(o=>o.id==t);s?s.enabled=i:this.extensionsSettings?.push({id:t,enabled:i}),Se.set(Br,this.extensionsSettings).then(()=>{if(r){const o=this.extensions[t];di(i?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}ke(Yr,this.extensionsSettings)})})}async updateEnablementAsync(t,i,r){await this.checkExtensionsConfig();const s=this.extensionsSettings?.find(o=>o.id==t);if(s?s.enabled=i:this.extensionsSettings?.push({id:t,enabled:i}),await Se.set(Br,this.extensionsSettings),r){const o=this.extensions[t];di(i?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}ke(Yr,this.extensionsSettings)}}Y.debug("ExtensionRegistry initializing...");const W=new bu;Le.put("extensionRegistry",W);Y.debug("ExtensionRegistry initialized");const nl=["alt","ctrl","meta","shift"],Ic={CTRL:"ctrl",CONTROL:"ctrl",ALT:"alt",OPTION:"alt",SHIFT:"shift",META:"meta",CMD:"meta",COMMAND:"meta",WIN:"meta",WINDOWS:"meta"},vu={ctrl:"Ctrl",alt:"Alt",shift:"Shift",meta:"Cmd"},wu={SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"},yu=new Set(Object.keys(Ic));function ll(e){return wu[e]??e}class xu{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),We(Oc,t=>{t.keyBinding&&this.registerKeyBinding(t.id,t.keyBinding)})}registerExistingCommandBindings(){const t=Ft.listCommands();Object.values(t).forEach(i=>{i.keyBinding&&this.registerKeyBinding(i.id,i.keyBinding)})}parseKeyBinding(t){if(!t||t.trim()==="")return null;const i=t.toUpperCase().split("+").map(a=>a.trim());if(i.length===0)return null;const r=i[i.length-1],s=i.slice(0,-1);if(i.length===1&&yu.has(r))return null;const o={ctrl:!1,alt:!1,shift:!1,meta:!1};for(const a of s){const l=Ic[a];if(l===void 0)return null;o[l]=!0}return o.key=ll(r),o}getBindingKey(t){return[...nl.filter(r=>t[r]),t.key.toUpperCase()].join("+")}registerKeyBinding(t,i){const r=this.parseKeyBinding(i);if(!r)return Y.error(`Invalid key binding: ${i}`),!1;r.commandId=t;const s=this.getBindingKey(r);this.bindings.has(s)||this.bindings.set(s,[]);const o=this.bindings.get(s);if(o.find(d=>d.commandId===t))return Y.error(`Key binding ${i} already registered for command ${t}`),!1;const l=o.find(d=>d.commandId!==t);return l?(Y.warn(`Key binding ${i} already used by command ${l.commandId}; refusing for ${t}`),!1):(o.push(r),Y.debug(`Key binding registered: ${i} -> ${t}`),!0)}unregisterKeyBinding(t,i){if(i){const r=this.parseKeyBinding(i);if(r){const s=this.getBindingKey(r),o=this.bindings.get(s);if(o){const a=o.filter(l=>l.commandId!==t);a.length===0?this.bindings.delete(s):this.bindings.set(s,a)}}}else for(const[r,s]of this.bindings.entries()){const o=s.filter(a=>a.commandId!==t);o.length===0?this.bindings.delete(r):this.bindings.set(r,o)}}getKeyBindingsForCommand(t){const i=[];for(const r of this.bindings.values())for(const s of r)s.commandId===t&&i.push(this.formatKeyBinding(s));return i.sort()}formatKeyBinding(t){const i=nl.filter(s=>t[s]).map(s=>vu[s]),r=t.key.length===1?t.key.toUpperCase():t.key.charAt(0).toUpperCase()+t.key.slice(1).toLowerCase();return i.push(r),i.join("+")}handleKeyDown(t){if(!this.enabled)return;const i={commandId:"",key:ll(t.key.toUpperCase()),ctrl:t.ctrlKey,alt:t.altKey,shift:t.shiftKey,meta:t.metaKey},r=this.getBindingKey(i),s=this.bindings.get(r);if(s&&s.length>0){const o=s[0];try{t.preventDefault(),t.stopPropagation();const a=Ft.createExecutionContext({});Ft.execute(o.commandId,a),Y.debug(`Executed command via key binding: ${o.commandId}`)}catch(a){Y.error(`Failed to execute command ${o.commandId}: ${a.message}`)}}}setEnabled(t){this.enabled=t}isEnabled(){return this.enabled}getAllBindings(){const t=new Map;for(const[i,r]of this.bindings)t.set(i,[...r]);return t}clearAll(){this.bindings.clear()}}const Pc=new xu;Le.put("keyBindingManager",Pc);let Aa=class extends Lr{constructor(t){if(super(t),this.it=B,t.type!==At.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===B||t==null)return this._t=void 0,this.it=t;if(t===tt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};Aa.directiveName="unsafeHTML",Aa.resultType=1;const Jt=_r(Aa);function an(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ki=an();function Mc(e){Ki=e}var Ti={exec:()=>null};function Z(e,t=""){let i=typeof e=="string"?e:e.source,r={replace:(s,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(Ze.caret,"$1"),i=i.replace(s,a),r},getRegex:()=>new RegExp(i,t)};return r}var ku=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ze={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}>`)},Cu=/^(?:[ \t]*(?:\n|$))+/,Eu=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,$u=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,gs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Su=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,nn=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Nc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Fc=Z(Nc).replace(/bull/g,nn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Au=Z(Nc).replace(/bull/g,nn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ln=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,_u=/^[^\n]+/,cn=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Lu=Z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",cn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Tu=Z(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,nn).getRegex(),Co="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",dn=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Du=Z("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",dn).replace("tag",Co).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Bc=Z(ln).replace("hr",gs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Co).getRegex(),Ru=Z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Bc).getRegex(),hn={blockquote:Ru,code:Eu,def:Lu,fences:$u,heading:Su,hr:gs,html:Du,lheading:Fc,list:Tu,newline:Cu,paragraph:Bc,table:Ti,text:_u},cl=Z("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",gs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Co).getRegex(),zu={...hn,lheading:Au,table:cl,paragraph:Z(ln).replace("hr",gs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",cl).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Co).getRegex()},Ou={...hn,html:Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",dn).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ti,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Z(ln).replace("hr",gs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Fc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Iu=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Pu=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Uc=/^( {2,}|\\)\n(?!\s*$)/,Mu=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Eo=/[\p{P}\p{S}]/u,un=/[\s\p{P}\p{S}]/u,Vc=/[^\s\p{P}\p{S}]/u,Nu=Z(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,un).getRegex(),qc=/(?!~)[\p{P}\p{S}]/u,Fu=/(?!~)[\s\p{P}\p{S}]/u,Bu=/(?:[^\s\p{P}\p{S}]|~)/u,Hc=/(?![*_])[\p{P}\p{S}]/u,Uu=/(?![*_])[\s\p{P}\p{S}]/u,Vu=/(?:[^\s\p{P}\p{S}]|[*_])/u,qu=Z(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ku?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Wc=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Hu=Z(Wc,"u").replace(/punct/g,Eo).getRegex(),Wu=Z(Wc,"u").replace(/punct/g,qc).getRegex(),jc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ju=Z(jc,"gu").replace(/notPunctSpace/g,Vc).replace(/punctSpace/g,un).replace(/punct/g,Eo).getRegex(),Xu=Z(jc,"gu").replace(/notPunctSpace/g,Bu).replace(/punctSpace/g,Fu).replace(/punct/g,qc).getRegex(),Gu=Z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Vc).replace(/punctSpace/g,un).replace(/punct/g,Eo).getRegex(),Ku=Z(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Hc).getRegex(),Yu="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Zu=Z(Yu,"gu").replace(/notPunctSpace/g,Vu).replace(/punctSpace/g,Uu).replace(/punct/g,Hc).getRegex(),Qu=Z(/\\(punct)/,"gu").replace(/punct/g,Eo).getRegex(),Ju=Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ep=Z(dn).replace("(?:-->|$)","-->").getRegex(),tp=Z("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ep).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Qs=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,ip=Z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Qs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Xc=Z(/^!?\[(label)\]\[(ref)\]/).replace("label",Qs).replace("ref",cn).getRegex(),Gc=Z(/^!?\[(ref)\](?:\[\])?/).replace("ref",cn).getRegex(),rp=Z("reflink|nolink(?!\\()","g").replace("reflink",Xc).replace("nolink",Gc).getRegex(),dl=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,pn={_backpedal:Ti,anyPunctuation:Qu,autolink:Ju,blockSkip:qu,br:Uc,code:Pu,del:Ti,delLDelim:Ti,delRDelim:Ti,emStrongLDelim:Hu,emStrongRDelimAst:ju,emStrongRDelimUnd:Gu,escape:Iu,link:ip,nolink:Gc,punctuation:Nu,reflink:Xc,reflinkSearch:rp,tag:tp,text:Mu,url:Ti},sp={...pn,link:Z(/^!?\[(label)\]\((.*?)\)/).replace("label",Qs).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Qs).getRegex()},_a={...pn,emStrongRDelimAst:Xu,emStrongLDelim:Wu,delLDelim:Ku,delRDelim:Zu,url:Z(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",dl).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Z(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",dl).getRegex()},op={..._a,br:Z(Uc).replace("{2,}","*").getRegex(),text:Z(_a.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ts={normal:hn,gfm:zu,pedantic:Ou},Ur={normal:pn,gfm:_a,breaks:op,pedantic:sp},ap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hl=e=>ap[e];function Yt(e,t){if(t){if(Ze.escapeTest.test(e))return e.replace(Ze.escapeReplace,hl)}else if(Ze.escapeTestNoEncode.test(e))return e.replace(Ze.escapeReplaceNoEncode,hl);return e}function ul(e){try{e=encodeURI(e).replace(Ze.percentDecode,"%")}catch{return null}return e}function pl(e,t){let i=e.replace(Ze.findPipe,(o,a,l)=>{let d=!1,h=a;for(;--h>=0&&l[h]==="\\";)d=!d;return d?"|":" |"}),r=i.split(Ze.splitPipe),s=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(Ze.slashPipe,"|");return r}function Vr(e,t,i){let r=e.length;if(r===0)return"";let s=0;for(;s<r&&e.charAt(r-s-1)===t;)s++;return e.slice(0,r-s)}function np(e,t){if(e.indexOf(t[1])===-1)return-1;let i=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])i++;else if(e[r]===t[1]&&(i--,i<0))return r;return i>0?-2:-1}function lp(e,t=0){let i=t,r="";for(let s of e)if(s==="	"){let o=4-i%4;r+=" ".repeat(o),i+=o}else r+=s,i++;return r}function fl(e,t,i,r,s){let o=t.href,a=t.title||null,l=e[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;let d={type:e[0].charAt(0)==="!"?"image":"link",raw:i,href:o,title:a,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,d}function cp(e,t,i){let r=e.match(i.other.indentCodeCompensation);if(r===null)return t;let s=r[1];return t.split(`
`).map(o=>{let a=o.match(i.other.beginningSpace);if(a===null)return o;let[l]=a;return l.length>=s.length?o.slice(s.length):o}).join(`
`)}var Js=class{options;rules;lexer;constructor(e){this.options=e||Ki}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let i=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Vr(i,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let i=t[0],r=cp(i,t[3]||"",this.rules);return{type:"code",raw:i,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let i=t[2].trim();if(this.rules.other.endingHash.test(i)){let r=Vr(i,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(i=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Vr(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let i=Vr(t[0],`
`).split(`
`),r="",s="",o=[];for(;i.length>0;){let a=!1,l=[],d;for(d=0;d<i.length;d++)if(this.rules.other.blockquoteStart.test(i[d]))l.push(i[d]),a=!0;else if(!a)l.push(i[d]);else break;i=i.slice(d);let h=l.join(`
`),u=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${h}`:h,s=s?`${s}
${u}`:u;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,o,!0),this.lexer.state.top=f,i.length===0)break;let g=o.at(-1);if(g?.type==="code")break;if(g?.type==="blockquote"){let b=g,w=b.raw+`
`+i.join(`
`),_=this.blockquote(w);o[o.length-1]=_,r=r.substring(0,r.length-b.raw.length)+_.raw,s=s.substring(0,s.length-b.text.length)+_.text;break}else if(g?.type==="list"){let b=g,w=b.raw+`
`+i.join(`
`),_=this.list(w);o[o.length-1]=_,r=r.substring(0,r.length-g.raw.length)+_.raw,s=s.substring(0,s.length-b.raw.length)+_.raw,i=w.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:o,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i=t[1].trim(),r=i.length>1,s={type:"list",raw:"",ordered:r,start:r?+i.slice(0,-1):"",loose:!1,items:[]};i=r?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=r?i:"[*+-]");let o=this.rules.other.listItemRegex(i),a=!1;for(;e;){let d=!1,h="",u="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;h=t[0],e=e.substring(h.length);let f=lp(t[2].split(`
`,1)[0],t[1].length),g=e.split(`
`,1)[0],b=!f.trim(),w=0;if(this.options.pedantic?(w=2,u=f.trimStart()):b?w=t[1].length+1:(w=f.search(this.rules.other.nonSpaceChar),w=w>4?1:w,u=f.slice(w),w+=t[1].length),b&&this.rules.other.blankLine.test(g)&&(h+=g+`
`,e=e.substring(g.length+1),d=!0),!d){let _=this.rules.other.nextBulletRegex(w),z=this.rules.other.hrRegex(w),O=this.rules.other.fencesBeginRegex(w),U=this.rules.other.headingBeginRegex(w),T=this.rules.other.htmlBeginRegex(w),D=this.rules.other.blockquoteBeginRegex(w);for(;e;){let R=e.split(`
`,1)[0],F;if(g=R,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),F=g):F=g.replace(this.rules.other.tabCharGlobal,"    "),O.test(g)||U.test(g)||T.test(g)||D.test(g)||_.test(g)||z.test(g))break;if(F.search(this.rules.other.nonSpaceChar)>=w||!g.trim())u+=`
`+F.slice(w);else{if(b||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||O.test(f)||U.test(f)||z.test(f))break;u+=`
`+g}b=!g.trim(),h+=R+`
`,e=e.substring(R.length+1),f=F.slice(w)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(a=!0)),s.items.push({type:"list_item",raw:h,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),s.raw+=h}let l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let d of s.items){if(this.lexer.state.top=!1,d.tokens=this.lexer.blockTokens(d.text,[]),d.task){if(d.text=d.text.replace(this.rules.other.listReplaceTask,""),d.tokens[0]?.type==="text"||d.tokens[0]?.type==="paragraph"){d.tokens[0].raw=d.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),d.tokens[0].text=d.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let h=this.rules.other.listTaskCheckbox.exec(d.raw);if(h){let u={type:"checkbox",raw:h[0]+" ",checked:h[0]!=="[ ]"};d.checked=u.checked,s.loose?d.tokens[0]&&["paragraph","text"].includes(d.tokens[0].type)&&"tokens"in d.tokens[0]&&d.tokens[0].tokens?(d.tokens[0].raw=u.raw+d.tokens[0].raw,d.tokens[0].text=u.raw+d.tokens[0].text,d.tokens[0].tokens.unshift(u)):d.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):d.tokens.unshift(u)}}if(!s.loose){let h=d.tokens.filter(f=>f.type==="space"),u=h.length>0&&h.some(f=>this.rules.other.anyLine.test(f.raw));s.loose=u}}if(s.loose)for(let d of s.items){d.loose=!0;for(let h of d.tokens)h.type==="text"&&(h.type="paragraph")}return s}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let i=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:i,raw:t[0],href:r,title:s}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let i=pl(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(i.length===r.length){for(let a of r)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<i.length;a++)o.header.push({text:i[a],tokens:this.lexer.inline(i[a]),header:!0,align:o.align[a]});for(let a of s)o.rows.push(pl(a,o.header.length).map((l,d)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:o.align[d]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let i=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:i,tokens:this.lexer.inline(i)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let i=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let o=Vr(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{let o=np(t[2],"()");if(o===-2)return;if(o>-1){let a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let r=t[2],s="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(r);o&&(r=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?r=r.slice(1):r=r.slice(1,-1)),fl(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let r=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=t[r.toLowerCase()];if(!s){let o=i[0].charAt(0);return{type:"text",raw:o,text:o}}return fl(i,s,i[0],this.lexer,this.rules)}}emStrong(e,t,i=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||r[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!i||this.rules.inline.punctuation.exec(i))){let s=[...r[0]].length-1,o,a,l=s,d=0,h=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+s);(r=h.exec(t))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(a=[...o].length,r[3]||r[4]){l+=a;continue}else if((r[5]||r[6])&&s%3&&!((s+a)%3)){d+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+d);let u=[...r[0]][0].length,f=e.slice(0,s+r.index+u+a);if(Math.min(s,a)%2){let b=f.slice(1,-1);return{type:"em",raw:f,text:b,tokens:this.lexer.inlineTokens(b)}}let g=f.slice(2,-2);return{type:"strong",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let i=t[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(i),s=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return r&&s&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:t[0],text:i}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,i=""){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!i||this.rules.inline.punctuation.exec(i))){let s=[...r[0]].length-1,o,a,l=s,d=this.rules.inline.delRDelim;for(d.lastIndex=0,t=t.slice(-1*e.length+s);(r=d.exec(t))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o||(a=[...o].length,a!==s))continue;if(r[3]||r[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let h=[...r[0]][0].length,u=e.slice(0,s+r.index+h+a),f=u.slice(s,-s);return{type:"del",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let i,r;return t[2]==="@"?(i=t[1],r="mailto:"+i):(i=t[1],r=i),{type:"link",raw:t[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let i,r;if(t[2]==="@")i=t[0],r="mailto:"+i;else{let s;do s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(s!==t[0]);i=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let i=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:i}}}},_t=class La{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ki,this.options.tokenizer=this.options.tokenizer||new Js,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={other:Ze,block:Ts.normal,inline:Ur.normal};this.options.pedantic?(i.block=Ts.pedantic,i.inline=Ur.pedantic):this.options.gfm&&(i.block=Ts.gfm,this.options.breaks?i.inline=Ur.breaks:i.inline=Ur.gfm),this.tokenizer.rules=i}static get rules(){return{block:Ts,inline:Ur}}static lex(t,i){return new La(i).lex(t)}static lexInline(t,i){return new La(i).inlineTokens(t)}lex(t){t=t.replace(Ze.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let r=this.inlineQueue[i];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,i=[],r=!1){for(this.options.pedantic&&(t=t.replace(Ze.tabCharGlobal,"    ").replace(Ze.spaceLine,""));t;){let s;if(this.options.extensions?.block?.some(a=>(s=a.call({lexer:this},t,i))?(t=t.substring(s.raw.length),i.push(s),!0):!1))continue;if(s=this.tokenizer.space(t)){t=t.substring(s.raw.length);let a=i.at(-1);s.raw.length===1&&a!==void 0?a.raw+=`
`:i.push(s);continue}if(s=this.tokenizer.code(t)){t=t.substring(s.raw.length);let a=i.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+s.raw,a.text+=`
`+s.text,this.inlineQueue.at(-1).src=a.text):i.push(s);continue}if(s=this.tokenizer.fences(t)){t=t.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.heading(t)){t=t.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.hr(t)){t=t.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.blockquote(t)){t=t.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.list(t)){t=t.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.html(t)){t=t.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.def(t)){t=t.substring(s.raw.length);let a=i.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+s.raw,a.text+=`
`+s.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},i.push(s));continue}if(s=this.tokenizer.table(t)){t=t.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.lheading(t)){t=t.substring(s.raw.length),i.push(s);continue}let o=t;if(this.options.extensions?.startBlock){let a=1/0,l=t.slice(1),d;this.options.extensions.startBlock.forEach(h=>{d=h.call({lexer:this},l),typeof d=="number"&&d>=0&&(a=Math.min(a,d))}),a<1/0&&a>=0&&(o=t.substring(0,a+1))}if(this.state.top&&(s=this.tokenizer.paragraph(o))){let a=i.at(-1);r&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):i.push(s),r=o.length!==t.length,t=t.substring(s.raw.length);continue}if(s=this.tokenizer.text(t)){t=t.substring(s.raw.length);let a=i.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):i.push(s);continue}if(t){let a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,i}inline(t,i=[]){return this.inlineQueue.push({src:t,tokens:i}),i}inlineTokens(t,i=[]){let r=t,s=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)d.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)o=s[2]?s[2].length:0,r=r.slice(0,s.index+o)+"["+"a".repeat(s[0].length-o-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let a=!1,l="";for(;t;){a||(l=""),a=!1;let d;if(this.options.extensions?.inline?.some(u=>(d=u.call({lexer:this},t,i))?(t=t.substring(d.raw.length),i.push(d),!0):!1))continue;if(d=this.tokenizer.escape(t)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.tag(t)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.link(t)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(d.raw.length);let u=i.at(-1);d.type==="text"&&u?.type==="text"?(u.raw+=d.raw,u.text+=d.text):i.push(d);continue}if(d=this.tokenizer.emStrong(t,r,l)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.codespan(t)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.br(t)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.del(t,r,l)){t=t.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.autolink(t)){t=t.substring(d.raw.length),i.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(t))){t=t.substring(d.raw.length),i.push(d);continue}let h=t;if(this.options.extensions?.startInline){let u=1/0,f=t.slice(1),g;this.options.extensions.startInline.forEach(b=>{g=b.call({lexer:this},f),typeof g=="number"&&g>=0&&(u=Math.min(u,g))}),u<1/0&&u>=0&&(h=t.substring(0,u+1))}if(d=this.tokenizer.inlineText(h)){t=t.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(l=d.raw.slice(-1)),a=!0;let u=i.at(-1);u?.type==="text"?(u.raw+=d.raw,u.text+=d.text):i.push(d);continue}if(t){let u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return i}},eo=class{options;parser;constructor(e){this.options=e||Ki}space(e){return""}code({text:e,lang:t,escaped:i}){let r=(t||"").match(Ze.notSpaceStart)?.[0],s=e.replace(Ze.endingNewline,"")+`
`;return r?'<pre><code class="language-'+Yt(r)+'">'+(i?s:Yt(s,!0))+`</code></pre>
`:"<pre><code>"+(i?s:Yt(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,i=e.start,r="";for(let a=0;a<e.items.length;a++){let l=e.items[a];r+=this.listitem(l)}let s=t?"ol":"ul",o=t&&i!==1?' start="'+i+'"':"";return"<"+s+o+`>
`+r+"</"+s+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",i="";for(let s=0;s<e.header.length;s++)i+=this.tablecell(e.header[s]);t+=this.tablerow({text:i});let r="";for(let s=0;s<e.rows.length;s++){let o=e.rows[s];i="";for(let a=0;a<o.length;a++)i+=this.tablecell(o[a]);r+=this.tablerow({text:i})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+t+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Yt(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:i}){let r=this.parser.parseInline(i),s=ul(e);if(s===null)return r;e=s;let o='<a href="'+e+'"';return t&&(o+=' title="'+Yt(t)+'"'),o+=">"+r+"</a>",o}image({href:e,title:t,text:i,tokens:r}){r&&(i=this.parser.parseInline(r,this.parser.textRenderer));let s=ul(e);if(s===null)return Yt(i);e=s;let o=`<img src="${e}" alt="${i}"`;return t&&(o+=` title="${Yt(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Yt(e.text)}},fn=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Lt=class Ta{options;renderer;textRenderer;constructor(t){this.options=t||Ki,this.options.renderer=this.options.renderer||new eo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new fn}static parse(t,i){return new Ta(i).parse(t)}static parseInline(t,i){return new Ta(i).parseInline(t)}parse(t){let i="";for(let r=0;r<t.length;r++){let s=t[r];if(this.options.extensions?.renderers?.[s.type]){let a=s,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){i+=l||"";continue}}let o=s;switch(o.type){case"space":{i+=this.renderer.space(o);break}case"hr":{i+=this.renderer.hr(o);break}case"heading":{i+=this.renderer.heading(o);break}case"code":{i+=this.renderer.code(o);break}case"table":{i+=this.renderer.table(o);break}case"blockquote":{i+=this.renderer.blockquote(o);break}case"list":{i+=this.renderer.list(o);break}case"checkbox":{i+=this.renderer.checkbox(o);break}case"html":{i+=this.renderer.html(o);break}case"def":{i+=this.renderer.def(o);break}case"paragraph":{i+=this.renderer.paragraph(o);break}case"text":{i+=this.renderer.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return i}parseInline(t,i=this.renderer){let r="";for(let s=0;s<t.length;s++){let o=t[s];if(this.options.extensions?.renderers?.[o.type]){let l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=l||"";continue}}let a=o;switch(a.type){case"escape":{r+=i.text(a);break}case"html":{r+=i.html(a);break}case"link":{r+=i.link(a);break}case"image":{r+=i.image(a);break}case"checkbox":{r+=i.checkbox(a);break}case"strong":{r+=i.strong(a);break}case"em":{r+=i.em(a);break}case"codespan":{r+=i.codespan(a);break}case"br":{r+=i.br(a);break}case"del":{r+=i.del(a);break}case"text":{r+=i.text(a);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}},Zr=class{options;block;constructor(e){this.options=e||Ki}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?_t.lex:_t.lexInline}provideParser(){return this.block?Lt.parse:Lt.parseInline}},dp=class{defaults=an();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Lt;Renderer=eo;TextRenderer=fn;Lexer=_t;Tokenizer=Js;Hooks=Zr;constructor(...e){this.use(...e)}walkTokens(e,t){let i=[];for(let r of e)switch(i=i.concat(t.call(this,r)),r.type){case"table":{let s=r;for(let o of s.header)i=i.concat(this.walkTokens(o.tokens,t));for(let o of s.rows)for(let a of o)i=i.concat(this.walkTokens(a.tokens,t));break}case"list":{let s=r;i=i.concat(this.walkTokens(s.items,t));break}default:{let s=r;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(o=>{let a=s[o].flat(1/0);i=i.concat(this.walkTokens(a,t))}):s.tokens&&(i=i.concat(this.walkTokens(s.tokens,t)))}}return i}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{let r={...i};if(r.async=this.defaults.async||r.async||!1,i.extensions&&(i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let o=t.renderers[s.name];o?t.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[s.level];o?o.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),r.extensions=t),i.renderer){let s=this.defaults.renderer||new eo(this.defaults);for(let o in i.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,l=i.renderer[a],d=s[a];s[a]=(...h)=>{let u=l.apply(s,h);return u===!1&&(u=d.apply(s,h)),u||""}}r.renderer=s}if(i.tokenizer){let s=this.defaults.tokenizer||new Js(this.defaults);for(let o in i.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,l=i.tokenizer[a],d=s[a];s[a]=(...h)=>{let u=l.apply(s,h);return u===!1&&(u=d.apply(s,h)),u}}r.tokenizer=s}if(i.hooks){let s=this.defaults.hooks||new Zr;for(let o in i.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,l=i.hooks[a],d=s[a];Zr.passThroughHooks.has(o)?s[a]=h=>{if(this.defaults.async&&Zr.passThroughHooksRespectAsync.has(o))return(async()=>{let f=await l.call(s,h);return d.call(s,f)})();let u=l.call(s,h);return d.call(s,u)}:s[a]=(...h)=>{if(this.defaults.async)return(async()=>{let f=await l.apply(s,h);return f===!1&&(f=await d.apply(s,h)),f})();let u=l.apply(s,h);return u===!1&&(u=d.apply(s,h)),u}}r.hooks=s}if(i.walkTokens){let s=this.defaults.walkTokens,o=i.walkTokens;r.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return _t.lex(e,t??this.defaults)}parser(e,t){return Lt.parse(e,t??this.defaults)}parseMarkdown(e){return(t,i)=>{let r={...i},s={...this.defaults,...r},o=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=e),s.async)return(async()=>{let a=s.hooks?await s.hooks.preprocess(t):t,l=await(s.hooks?await s.hooks.provideLexer():e?_t.lex:_t.lexInline)(a,s),d=s.hooks?await s.hooks.processAllTokens(l):l;s.walkTokens&&await Promise.all(this.walkTokens(d,s.walkTokens));let h=await(s.hooks?await s.hooks.provideParser():e?Lt.parse:Lt.parseInline)(d,s);return s.hooks?await s.hooks.postprocess(h):h})().catch(o);try{s.hooks&&(t=s.hooks.preprocess(t));let a=(s.hooks?s.hooks.provideLexer():e?_t.lex:_t.lexInline)(t,s);s.hooks&&(a=s.hooks.processAllTokens(a)),s.walkTokens&&this.walkTokens(a,s.walkTokens);let l=(s.hooks?s.hooks.provideParser():e?Lt.parse:Lt.parseInline)(a,s);return s.hooks&&(l=s.hooks.postprocess(l)),l}catch(a){return o(a)}}}onError(e,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let r="<p>An error occurred:</p><pre>"+Yt(i.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(i);throw i}}},Mi=new dp;function ie(e,t){return Mi.parse(e,t)}ie.options=ie.setOptions=function(e){return Mi.setOptions(e),ie.defaults=Mi.defaults,Mc(ie.defaults),ie};ie.getDefaults=an;ie.defaults=Ki;ie.use=function(...e){return Mi.use(...e),ie.defaults=Mi.defaults,Mc(ie.defaults),ie};ie.walkTokens=function(e,t){return Mi.walkTokens(e,t)};ie.parseInline=Mi.parseInline;ie.Parser=Lt;ie.parser=Lt.parse;ie.Renderer=eo;ie.TextRenderer=fn;ie.Lexer=_t;ie.lexer=_t.lex;ie.Tokenizer=Js;ie.Hooks=Zr;ie.parse=ie;ie.options;ie.setOptions;ie.use;ie.walkTokens;ie.parseInline;Lt.parse;_t.lex;const Kc=(e,t)=>{const i=new Me.subtle.Watcher(async()=>{try{await 0,t(e.get())}finally{i.watch(e)}});return i.watch(e),e.get(),()=>{i.unwatch(e)}};Object.defineProperty(Ii.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});const hp=Jh(Ii);class bs extends hp{constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(t=>_h(t)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(t=>t()),this.signalCleanups.clear()}subscribe(t,i){const r=We(t,i.bind(this));this.eventSubscriptions.add(r)}showInfo(t){di(t)}showError(t){kt(t)}nobubble(t){return i=>{i.stopPropagation(),t.bind(this)(i)}}command(t,i={}){return()=>{this.executeCommand(t,i)}}executeCommand(t,i){const r=Ft.createExecutionContext(i);Ft.execute(t,r)}watch(t,i){const r=Kc(t,i.bind(this));this.signalCleanups.add(r)}firstUpdated(t){super.firstUpdated(t),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(t){t(),this.updateLater()}}class jt extends bs{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const t=[];let i=this;for(;i&&i!==document.body&&i!==document.documentElement;){const r=i.getAttribute("id");if(r){t.unshift(`#${r}`);break}const s=i.tagName.toLowerCase(),o=i.parentElement;if(!o)break;const l=Array.from(o.children).filter(d=>d.tagName.toLowerCase()===s).indexOf(i);l>=0?t.unshift(`${s}:${l}`):t.unshift(s),i=o}return t.length>0?t.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const t=this.tagName.toLowerCase(),i=this.getAttribute("id");if(i){this.settingsKey=`${t}:${i}`;return}const r=this.buildDOMTreePath();r&&(this.settingsKey=`${t}:${r}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await Se.getDialogSetting(this.settingsKey)}async setDialogSetting(t){this.initializeSettingsKey(),this.settingsKey&&await Se.setDialogSetting(this.settingsKey,t)}}const Ln=class Ln extends jt{dispose(){}getResult(){}renderMessage(t,i=!1){if(i){const r=ie.parse(t,{async:!1});return p`<div class="dialog-message" style="white-space: normal;">${Jt(r)}</div>`}return p`<div class="dialog-message" style="white-space: pre-line;">${t}</div>`}};Ln.styles=[A`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let ei=Ln;const Kt=Xi("DialogService"),Ni="dialogs",$o={id:"ok",label:"OK",variant:"primary"},Yc={id:"cancel",label:"Cancel",variant:"default"},Zc={id:"close",label:"Close",variant:"default"};let qr=null;function up(){return qr||(qr=document.createElement("div"),qr.id="global-dialog-container",document.body.appendChild(qr)),qr}class pp{constructor(){this.contributions=new Map,this.loadContributions(),We(Wt,t=>{t.target===Ni&&this.loadContributions()})}loadContributions(){const t=I.getContributions(Ni);this.contributions.clear();for(const i of t){if(!i.id){Kt.warn("Dialog contribution missing id, skipping");continue}if(!i.component){Kt.warn(`Dialog contribution "${i.id}" has no component function, skipping`);continue}if(!i.onButton){Kt.warn(`Dialog contribution "${i.id}" has no onButton callback, skipping`);continue}this.contributions.set(i.id,i),Kt.debug(`Loaded dialog contribution: ${i.id}`)}Kt.info(`Loaded ${this.contributions.size} dialog contributions`)}async open(t,i){const r=this.contributions.get(t);if(!r)throw Kt.error(`Dialog "${t}" not found`),new Error(`Dialog "${t}" not found`);return new Promise(s=>{const o=up();let a=!0,l=null;const d=async()=>{if(a){if(a=!1,l)try{await l.dispose()}catch(b){const w=b instanceof Error?b.message:String(b);Kt.error(`Error disposing dialog content for "${t}": ${w}`)}try{const b=l?l.getResult():void 0;await r.onButton("close",b,f)}catch(b){const w=b instanceof Error?b.message:String(b);Kt.error(`Error executing close callback for dialog "${t}": ${w}`)}mt(p``,o),s()}},h=async b=>{try{const w=l?l.getResult():void 0;await r.onButton(b,w,f)!==!1&&d()}catch(w){const _=w instanceof Error?w.message:String(w);Kt.error(`Error executing button callback for dialog "${t}": ${_}`),d()}},u=r.buttons&&r.buttons.length>0?r.buttons:[$o];i&&typeof i=="object"&&(i.close=d);const f={...i,close:d},g=p`
                <wa-dialog label="${r.label||t}" open @wa-request-close=${d}>
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
                         @dialog-cancel=${()=>{const b=u.find(w=>w.id==="cancel");b?h(b.id):d()}}>
                        ${r.component(i)}
                        
                        <div class="dialog-service-footer">
                            ${u.map(b=>p`
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
            `;mt(g,o),(async()=>{const b=Array.from(o.querySelectorAll("*"));for(const w of b)if(w instanceof ei){await w.updateComplete,l=w;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(t){return this.contributions.has(t)}}const So=new pp;Le.put("dialogService",So);class mn extends jt{}const C=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const fp={attribute:!0,type:String,converter:Ws,reflect:!1,hasChanged:Ya},mp=(e=fp,t,i)=>{const{kind:r,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),r==="accessor"){const{name:a}=i;return{set(l){const d=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,d,e,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,e,l),l}}}if(r==="setter"){const{name:a}=i;return function(l){const d=this[a];t.call(this,l),this.requestUpdate(a,d,e,!0,l)}}throw Error("Unsupported decorator location: "+r)};function c(e){return(t,i)=>typeof i=="object"?mp(e,t,i):((r,s,o)=>{const a=s.hasOwnProperty(o);return s.constructor.createProperty(o,r),a?Object.getOwnPropertyDescriptor(s,o):void 0})(e,t,i)}function E(e){return c({...e,state:!0,attribute:!1})}function Ao(e){return(t,i)=>{const r=typeof t=="function"?t:t[i];Object.assign(r,e)}}const Qc=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);function $(e,t){return(i,r,s)=>{const o=a=>a.renderRoot?.querySelector(e)??null;return Qc(i,r,{get(){return o(this)}})}}function gp(e){return(t,i)=>Qc(t,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}var bp=Object.defineProperty,vp=(e,t,i,r)=>{for(var s=void 0,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=a(t,i,s)||s);return s&&bp(t,i,s),s};class ut extends mn{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return B}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return B}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(t){super.updated(t),t.has("dirty")&&t.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(t){this.dirty=t,ka.set(null),ka.set(this),gt.set(null),gt.set(this)}}vp([c()],ut.prototype,"dirty");const cr="events/filesys/workspaceChanged",ls="events/filesys/workspaceConnected";class Jc{constructor(){this.state={}}getWorkspacePath(){const t=[];let i=this;for(;i;)t.push(i.getName()),i=i.getParent();return t.reverse(),t.shift(),t.join("/")}getWorkspace(){let t=this;for(;t;){const i=t.getParent();if(i)t=i;else break}return t}}var wp=(e=>(e[e.TEXT=0]="TEXT",e[e.BINARY=1]="BINARY",e))(wp||{});class cs extends Jc{}class Vs extends Jc{}class ml extends cs{constructor(t,i){super(),this.fileHandle=t,this.parent=i}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(t){const i=await this.fileHandle.getFile();return!t||t?.contentType==0?await i.text():t?.encoding==0||t?.uri?URL.createObjectURL(i):t?.blob?i:i.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(t,i){const r=await this.fileHandle.createWritable();if(t&&typeof t.pipeTo=="function")await t.pipeTo(r);else{const s=r.getWriter();try{await s.write(t)}finally{await s.close()}}}async copyTo(t){const i=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(t,{create:!0})).saveContents(i)}async rename(t){const i=this.getParent();if(!i)throw new Error("Cannot rename root resource");if(this.getName()!==t){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(t)}catch(r){throw r.name==="NotAllowedError"||r.message?.includes("not allowed")||r.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):r}await i.listChildren(!0),ke(cr,this.getWorkspace())}}}class Zt extends Vs{constructor(t,i){super(),this.dirHandle=t,this.parent=i}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(t=!1){return t||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const i={};try{for await(const r of this.dirHandle.values()){const o=r.kind==="file"?new ml(r,this):new Zt(r,this);i[o.getName()]=o}}catch(r){if(r.name==="NotFoundError")return this.files={},[];throw r}return this.files=i,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(t,i){if(!t)throw new Error("No path provided");const r=t.split("/");let s=this,o=!1;try{for(let a=0;a<r.length;a++){let l=r[a];if(l&&(l=l.trim()),!l)break;if(s instanceof Zt){if(await s.listChildren(),!s.files)return null;const d=s.files[l];if(d)s=d;else if(i?.create)if(o=!0,a<r.length-1)try{const h=await s.dirHandle.getDirectoryHandle(l,{create:!0}),u=new Zt(h,s);s.files[l]=u,s=u,s instanceof Zt&&await s.listChildren();continue}catch(h){throw h.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${r.slice(0,a+1).join("/")}`):h}else try{const h=await s.dirHandle.getFileHandle(l,{create:!0}),u=new ml(h,s);return s.files[l]=u,u}catch(h){throw h.name==="NotFoundError"?new Error(`File not found or not accessible: ${r.join("/")}`):h}else return null}}}finally{o&&ke(cr,this.getWorkspace())}return s}touch(){ke(cr,this.getWorkspace())}async delete(t,i=!0){if(!t){const r=this.getParent();return r instanceof Zt&&(await r.listChildren(),r.files&&delete r.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,r?.delete(this.getName())}return this.dirHandle.removeEntry(t,{recursive:i}).then(async()=>{this.files&&delete this.files[t],ke(cr,this.getWorkspace())})}async copyTo(t){for(const i of await this.listChildren()){const r=[t,i.getName()].join("/");await i.copyTo(r)}}async rename(t){const i=this.getParent();if(!i)throw new Error("Cannot rename workspace root");if(this.getName()!==t){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(t)}catch(r){throw r.name==="NotAllowedError"||r.message?.includes("not allowed")||r.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):r}await i.listChildren(!0),ke(cr,this.getWorkspace())}}}class yp{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(t=>{t&&ke(ls,t)})}registerContribution(t){this.contributions.set(t.type,t),console.log(`Workspace contribution registered: ${t.name} (${t.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const t=await St.getObject("workspace_data");if(!t)return;const i=this.contributions.get(t.type);if(!i){console.warn(`No contribution found for workspace type: ${t.type}`);return}try{if(i.restore){const r=await i.restore(t.data);return r&&(this.currentType=t.type),r}}catch(r){console.error(`Failed to restore workspace of type ${t.type}:`,r)}}async connectWorkspace(t){const i=Array.from(this.contributions.values()).find(a=>a.canHandle(t));if(!i)throw new Error("No workspace contribution can handle this input");const r=await i.connect(t),s=i.persist?await i.persist(r):t,o={type:i.type,data:s};return await St.persistObject("workspace_data",o),this.currentType=i.type,this.workspace=Promise.resolve(r),ke(ls,r),r}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await St.persistObject("workspace_data",null),await St.persistObject("workspace",null)}}const Yi=new yp;Le.put("workspaceService",Yi);Yi.registerContribution({type:"filesystem",name:"Local File System",canHandle(e){return e&&"kind"in e&&e.kind==="directory"},async connect(e){return new Zt(e)},async restore(e){if(e&&"kind"in e&&e.kind==="directory")return new Zt(e,void 0)},async persist(e){return e instanceof Zt?e.getHandle():null}});class xp{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,this.cachedIconContributions=null,We(ls,()=>{}),We(Wt,t=>{t.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const t=I.getContributions("system.icons");return this.cachedIconContributions=[...t].sort((i,r)=>{const s=i.priority??0,o=r.priority??0;return o!==s?o-s:i.label.localeCompare(r.label)}),this.cachedIconContributions}setupEventListeners(t){if(this.listenersAttached)return;this.listenersAttached=!0;const i=o=>{const a=o.detail;a&&Array.from(a.querySelectorAll("*")).filter(d=>d instanceof ut).forEach(d=>{gt.set(d),d.isEditor&&is.set(d)})};t.addEventListener("tab-shown",i);const r=o=>{const a=o.detail;Array.from(a.querySelectorAll("*")).filter(d=>d instanceof ut).forEach(d=>{gt.get()==d&&gt.set(null),is.get()==d&&is.set(null)})};t.addEventListener("tab-closed",r);const s=o=>{const l=o.closest("wa-tab-panel").getAttribute("name");t.markDirty(l,o.isDirty())};this.signalCleanup=Kc(ka,s)}registerEditorInputHandler(t){this.editorInputHandlers.push({definition:t,initialized:!1}),this.editorInputHandlers.sort((i,r)=>{const s=i.definition.ranking??0;return(r.definition.ranking??0)-s})}async ensureHandlerInitialized(t){const i=t.definition;!i.lazyInit||t.initialized||(t.lazyInitPromise||(t.lazyInitPromise=Promise.resolve(i.lazyInit()).then(()=>{t.initialized=!0,t.lazyInitPromise=void 0}).catch(r=>{throw t.lazyInitPromise=void 0,r})),await t.lazyInitPromise)}async handleInput(t){for(let i=0;i<this.editorInputHandlers.length;i++){const r=this.editorInputHandlers[i],s=r.definition;if(s.canHandle(t))return await this.ensureHandlerInitialized(r),await s.handle(t)}}getEditorArea(){return document.querySelector(`k-tabs#${ci}`)}async loadEditor(t){if(!t||("widgetFactory"in t||(t=await this.handleInput(t)),!t||!("widgetFactory"in t)))return;const i=this.getEditorArea();if(!i){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(i),i.has(t.key)){i.activate(t.key);return}i.open({name:t.key,editorId:t.editorId,label:t.title,icon:t.icon,closable:!0,noOverflow:t.noOverflow,component:t.widgetFactory})}getFileIcon(t){const i=t.includes(".")?t.split(".").pop()?.toLowerCase()||"":t.toLowerCase(),r=this.getSortedIconContributions();if(r.length===0)return"file";for(const s of r)if(s.mappings&&s.mappings[i])return s.mappings[i];return"file"}}const _o=new xp;Le.put("editorRegistry",_o);I.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});const j=Xi("AppLoader");function sr(e){return e instanceof Error?e.message:String(e)}function kp(e){try{const i=new URL(e).pathname.split("/").filter(Boolean);return i.length>0?i[i.length-1]:void 0}catch{const t=e.split("/").filter(Boolean);return t.length>0?t[t.length-1]:void 0}}function Cp(){const t=window.location.pathname.split("/").filter(Boolean);if(t.length===0)return;const i=t[0];if(!(!i||i==="index.html"||i.endsWith(".html")))return i}const ss=class ss{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(t,i){this.apps.has(t.id)&&j.warn(`App '${t.id}' is already registered. Overwriting.`),this.apps.set(t.id,t),j.info(`Registered app: ${t.name} (${t.id}) v${t.version}`),i?.defaultAppId&&(this.defaultAppId=i.defaultAppId),i?.container&&(this.container=i.container),i?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(t){this.systemRequiredExtensions.add(t)}async loadAppFromUrl(t){j.info(`Loading app from URL: ${t}...`);try{const i=await import(t);if(!i.default)throw new Error(`Module at ${t} does not have a default export`);const r=i.default;if(!r.id||!r.name||!r.version)throw new Error(`Module at ${t} does not export a valid AppDefinition`);return j.info(`Successfully loaded app definition from URL: ${r.name} (${r.id})`),r}catch(i){throw j.error(`Failed to load app from URL ${t}: ${sr(i)}`),i}}async start(){if(this.started){j.debug("AppLoader already started");return}this.started=!0,j.info("Starting AppLoader...");const t=new URLSearchParams(window.location.search),i=t.get("app"),r=t.get("appId"),s=Cp(),o=this.apps.size;let a;if(i&&(a=kp(i),a&&j.info(`Extracted app ID from URL path: ${a}`)),s&&j.info(`Extracted app ID from current page path: ${s}`),i)try{j.info(`URL parameter 'app' found: ${i}, attempting to load extension or app`);try{await W.loadExtensionFromUrl(i),j.info(`Successfully loaded extension from URL: ${i}`)}catch(d){j.info(`Failed to load as extension, trying as app definition: ${sr(d)}`);try{const h=await this.loadAppFromUrl(i);this.registerApp(h),await this.loadApp(h.id,this.container),j.info(`Successfully loaded app from URL: ${i}`);return}catch(h){throw j.error(`Failed to load from URL as both extension and app: ${sr(h)}`),h}}}catch(d){j.error(`Failed to load from URL parameter, falling back to default app: ${sr(d)}`)}const l=await this.selectAppToLoad({appIdFromUrl:r,appIdFromPath:s,appIdFromAppUrl:a,appsBeforeExtension:o});if(!l)throw new Error("No apps registered");await this.loadApp(l,this.container)}async loadApp(t,i){const r=this.apps.get(t);if(!r)throw new Error(`App '${t}' not found. Make sure it's registered.`);j.info(`Loading app: ${r.name}...`),this.currentApp&&(j.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(j.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(o=>{W.disable(o)}))),r.contributions&&(j.info("Registering app contributions..."),r.contributions.ui&&(r.contributions.ui.forEach(o=>{const a=o.target;a&&I.registerContribution(a,o)}),j.info(`Registered ${r.contributions.ui.length} UI contributions`)),r.contributions.extensions&&(r.contributions.extensions.forEach(o=>{W.registerExtension(o)}),j.info(`Registered ${r.contributions.extensions.length} app extensions`)));const s=new Set(r.extensions||[]);this.systemRequiredExtensions.forEach(o=>s.add(o)),r.extensions=Array.from(s),r.extensions.length>0&&(j.info(`Enabling ${r.extensions.length} extensions...`),r.extensions.forEach(o=>{W.enable(o)})),r.initialize&&(j.info(`Initializing ${r.name}...`),await r.initialize()),this.currentApp=r,j.info(`App ${r.name} loaded successfully`),this.updateDocumentMetadata(r),i&&this.renderApp(i),window.dispatchEvent(new CustomEvent("app-loaded",{detail:{appId:r.id}}))}updateDocumentMetadata(t){if(document.title=t.name,t.metadata?.favicon){const i=t.metadata.favicon;let r=document.querySelector("link[rel*='icon']");r||(r=document.createElement("link"),r.rel="icon",document.head.appendChild(r)),r.type="image/svg+xml",r.href=i}}renderApp(t){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const i=this.currentApp.render;if(typeof i=="string"){const r=document.createElement(i);t.innerHTML="",t.appendChild(r)}else if(i&&typeof i=="object"&&"tag"in i){const r=document.createElement(i.tag);for(const[s,o]of Object.entries(i.attributes??{}))r.setAttribute(s,o);t.innerHTML="",t.appendChild(r)}else if(typeof i=="function"){const r=i();mt(r,t)}else mt(p`<k-standard-layout></k-standard-layout>`,t);j.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}async getPreferredAppId(){try{return await Se.get(ss.PREFERRED_APP_KEY)}catch(t){j.debug(`Failed to get preferred app ID from settings: ${sr(t)}`);return}}async setPreferredAppId(t){if(!this.apps.has(t))throw new Error(`App '${t}' not found. Make sure it's registered.`);try{await Se.set(ss.PREFERRED_APP_KEY,t),this.defaultAppId=t,j.info(`Set preferred app to: ${t}`)}catch(i){throw j.error(`Failed to persist preferred app ID: ${sr(i)}`),i}}async selectAppToLoad(t){const{appIdFromUrl:i,appIdFromPath:r,appIdFromAppUrl:s,appsBeforeExtension:o}=t;if(i){if(this.apps.has(i))return j.info(`Loading app specified by URL parameter 'appId': ${i}`),i;j.warn(`App ID '${i}' from URL parameter not found`)}if(r){if(this.apps.has(r))return j.info(`Loading app from URL path: ${r}`),r;j.debug(`App ID '${r}' from URL path not found, continuing search`)}if(s&&this.apps.has(s))return j.info(`Loading app using ID extracted from app URL path: ${s}`),s;if(this.apps.size>o){const d=Array.from(this.apps.values()).slice(o);if(d.length>0){const h=d[0];return j.info(`Loading app registered by extension: ${h.name} (${h.id})`),h.id}}const a=await this.getPreferredAppId();if(a&&this.apps.has(a))return j.info(`Loading preferred app from settings: ${a}`),a;if(this.defaultAppId){if(this.apps.has(this.defaultAppId))return this.defaultAppId;j.warn(`Default app '${this.defaultAppId}' not found`)}const l=this.getRegisteredApps();if(l.length>0){const d=l[0];return j.info(`Loading first registered app: ${d.name} (${d.id})`),d.id}}};ss.PREFERRED_APP_KEY="preferredAppId";let Da=ss;const ft=new Da;Le.put("appLoaderService",ft);const et=Xi("MarketplaceRegistry"),gl="events/marketplaceregistry/changed",bl="marketplace.catalogUrls";class Ep{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(t=>{et.error(`Failed to refresh catalogs on init: ${t.message}`)})})}async loadCatalogUrls(){try{const t=await Se.get(bl);this.catalogUrls=Array.isArray(t)?t:[],et.debug(`Loaded ${this.catalogUrls.length} catalog URLs`)}catch(t){et.error(`Failed to load catalog URLs: ${t}`),this.catalogUrls=[]}}async saveCatalogUrls(){await Se.set(bl,this.catalogUrls),ke(gl,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(t){if(!this.isValidUrl(t))throw new Error(`Invalid catalog URL: ${t}`);if(this.catalogUrls.includes(t)){et.debug(`Catalog URL already exists: ${t}`);return}this.catalogUrls.push(t),await this.saveCatalogUrls(),et.info(`Added catalog URL: ${t}`);try{await this.refreshCatalogs()}catch(i){et.warn(`Failed to refresh catalogs immediately after adding: ${i}`)}}async removeCatalogUrl(t){const i=this.catalogUrls.indexOf(t);i!==-1&&(this.catalogUrls.splice(i,1),await this.saveCatalogUrls(),et.info(`Removed catalog URL: ${t}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(t){try{const i=new URL(t);return i.protocol==="http:"||i.protocol==="https:"}catch{return!1}}async fetchCatalog(t){const i=this.loadingPromises.get(t);if(i)return i;const r=(async()=>{try{et.debug(`Fetching catalog from: ${t}`);const s=await fetch(t,{method:"GET",headers:{Accept:"application/json"}});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const o=await s.json();if(!o.extensions||!Array.isArray(o.extensions))throw new Error("Invalid catalog format: extensions array is required");const a={name:o.name,description:o.description,extensions:o.extensions||[]},l=a.extensions?.length||0;return et.debug(`Successfully fetched catalog from ${t}: ${l} extensions`),a}catch(s){throw et.error(`Failed to fetch catalog from ${t}: ${s}`),s}finally{this.loadingPromises.delete(t)}})();return this.loadingPromises.set(t,r),r}async refreshCatalogs(){et.info(`Refreshing ${this.catalogUrls.length} catalogs...`);const t=this.catalogUrls.map(r=>this.fetchCatalog(r).catch(s=>(et.warn(`Failed to refresh catalog ${r}: ${s.message}`),null)));(await Promise.allSettled(t)).forEach((r,s)=>{if(r.status==="fulfilled"&&r.value){const o=r.value;o.extensions&&o.extensions.forEach(a=>{if(!W.getExtensions().find(l=>l.id===a.id)){const l={...a,external:!0};W.registerExtension(l),et.debug(`Registered marketplace extension: ${a.id}`)}})}}),ke(gl,{type:"refreshed"}),et.info("Catalog refresh completed")}getMarketplaceExtension(t){const i=W.getExtensions().find(r=>r.id===t);if(i&&i.external)return i}isMarketplaceExtension(t){const i=W.getExtensions().find(r=>r.id===t);return i!==void 0&&i.external===!0}}const ed=new Ep;Le.put("marketplaceRegistry",ed);const $p="filebrowser",Sp={CONNECT_WORKSPACE:"Connect Workspace...",RELOAD_WORKSPACE:"Reload workspace folder",CREATE_NEW:"Create new...",OPEN:"Open",FILE:"File",FOLDER:"Folder",FILE_EXISTS_OVERWRITE:'File "{fileName}" already exists. Do you want to overwrite it?',SELECT_WORKSPACE:"Select a workspace.",DROP_FILES_HERE:"📁 Drop files here"},Ap={CONNECT_WORKSPACE:"Arbeitsbereich verbinden...",RELOAD_WORKSPACE:"Arbeitsbereich-Ordner neu laden",CREATE_NEW:"Neu erstellen...",OPEN:"Öffnen",FILE:"Datei",FOLDER:"Ordner",FILE_EXISTS_OVERWRITE:'Die Datei "{fileName}" existiert bereits. Möchten Sie sie überschreiben?',SELECT_WORKSPACE:"Wählen Sie einen Arbeitsbereich aus.",DROP_FILES_HERE:"📁 Dateien hier ablegen"},_p={namespace:$p,en:Sp,de:Ap},Lp="extensions",Tp={FILTER_PLACEHOLDER:"Filter extensions...",INSTALLED:"Installed",AVAILABLE:"Available",NO_MATCHES:'No extensions match "{filterText}"',EXTERNAL_EXTENSION:"External Extension",UNINSTALL:"Uninstall (requires restart)",REQUIRED_HINT:"This extension is required by the current app and cannot be uninstalled",INSTALL:"Install",EXPERIMENTAL:"This is an experimental extension!",VERSION:"Version:",AUTHOR:"Author:",DEPENDENCIES:"Dependencies",NOT_INSTALLED:"Not Installed",DEPENDENCIES_HINT:"Dependencies are automatically installed when this extension is enabled.",DISABLE_TITLE:"Disable this extension",ENABLE_TITLE:"Enable this extension"},Dp={FILTER_PLACEHOLDER:"Erweiterungen filtern...",INSTALLED:"Installiert",AVAILABLE:"Verfügbar",NO_MATCHES:'Keine Erweiterungen entsprechen "{filterText}"',EXTERNAL_EXTENSION:"Externe Erweiterung",UNINSTALL:"Deinstallieren (Neustart erforderlich)",REQUIRED_HINT:"Diese Erweiterung ist für die aktuelle App erforderlich und kann nicht deinstalliert werden",INSTALL:"Installieren",EXPERIMENTAL:"Dies ist eine experimentelle Erweiterung!",VERSION:"Version:",AUTHOR:"Autor:",DEPENDENCIES:"Abhängigkeiten",NOT_INSTALLED:"Nicht installiert",DEPENDENCIES_HINT:"Abhängigkeiten werden automatisch installiert, wenn diese Erweiterung aktiviert wird.",DISABLE_TITLE:"Diese Erweiterung deaktivieren",ENABLE_TITLE:"Diese Erweiterung aktivieren"},Rp={namespace:Lp,en:Tp,de:Dp},zp="tasks",Op={ACTIVE_TASKS:"Active Tasks",ACTIVE_TASKS_TITLE:"Active tasks: {taskCount}. Click to view details."},Ip={ACTIVE_TASKS:"Aktive Aufgaben",ACTIVE_TASKS_TITLE:"Aktive Aufgaben: {taskCount}. Klicken Sie, um Details anzuzeigen."},Pp={namespace:zp,en:Op,de:Ip},Mp="workspace",Np={NO_WORKSPACE:"<no workspace>",LOAD_WORKSPACE:"Load workspace"},Fp={NO_WORKSPACE:"<kein Arbeitsbereich>",LOAD_WORKSPACE:"Arbeitsbereich laden"},Bp={namespace:Mp,en:Np,de:Fp},Up="fastviews",Vp={FAST_VIEWS:"Fast Views"},qp={FAST_VIEWS:"Schnellansichten"},Hp={namespace:Up,en:Vp,de:qp},Wp="logterminal",jp={ALL_LOGS:"All logs",ALL:"All",INFO_LOGS:"Info logs",INFO:"Info",WARNING_LOGS:"Warning logs",WARNINGS:"Warnings",ERROR_LOGS:"Error logs",ERRORS:"Errors",DEBUG_LOGS:"Debug logs",DEBUG:"Debug",AUTO_SCROLL_ENABLED:"Auto-scroll enabled",AUTO_SCROLL_DISABLED:"Auto-scroll disabled",AUTO_SCROLL:"Auto-scroll",MANUAL:"Manual",CLEAR_LOGS:"Clear logs",CLEAR:"Clear",NO_LOG_MESSAGES:"No log messages"},Xp={ALL_LOGS:"Alle Protokolle",ALL:"Alle",INFO_LOGS:"Info-Protokolle",INFO:"Info",WARNING_LOGS:"Warnungsprotokolle",WARNINGS:"Warnungen",ERROR_LOGS:"Fehlerprotokolle",ERRORS:"Fehler",DEBUG_LOGS:"Debug-Protokolle",DEBUG:"Debug",AUTO_SCROLL_ENABLED:"Automatisches Scrollen aktiviert",AUTO_SCROLL_DISABLED:"Automatisches Scrollen deaktiviert",AUTO_SCROLL:"Automatisches Scrollen",MANUAL:"Manuell",CLEAR_LOGS:"Protokolle löschen",CLEAR:"Löschen",NO_LOG_MESSAGES:"Keine Protokollnachrichten"},Gp={namespace:Wp,en:jp,de:Xp},Kp="partname",Yp={NO_PART:"<no part>",ACTIVE_PART:"Active part"},Zp={NO_PART:"<kein Bereich>",ACTIVE_PART:"Aktiver Bereich"},Qp={namespace:Kp,en:Yp,de:Zp};I.registerContribution(ne,_p);I.registerContribution(ne,Rp);I.registerContribution(ne,Pp);I.registerContribution(ne,Bp);I.registerContribution(ne,Hp);I.registerContribution(ne,Gp);I.registerContribution(ne,Qp);var Jp=Object.defineProperty,ef=Object.getOwnPropertyDescriptor,vs=(e,t,i,r)=>{for(var s=r>1?void 0:r?ef(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&Jp(t,i,s),s};let Fi=class extends ei{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(e){super.firstUpdated(e),this.inputValue=this.defaultValue,await this.updateComplete;const t=this.shadowRoot?.querySelector("wa-input");if(t){const i=t.shadowRoot?.querySelector("input");i&&(i.focus(),i.select())}}getResult(){return this.inputValue}handleInput(e){this.inputValue=e.target.value}handleKeyDown(e){e.key==="Enter"?(e.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):e.key==="Escape"&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `}};Fi.styles=[...ei.styles,A`
            wa-input {
                width: 100%;
            }
        `];vs([c({type:String})],Fi.prototype,"message",2);vs([c({type:String,attribute:"default-value"})],Fi.prototype,"defaultValue",2);vs([c({type:Boolean})],Fi.prototype,"markdown",2);vs([E()],Fi.prototype,"inputValue",2);Fi=vs([C("k-prompt-dialog-content")],Fi);I.registerContribution(Ni,{id:"prompt",label:"Input",buttons:[$o,Yc],component:e=>e?p`
            <k-prompt-dialog-content 
                .message="${e.message}"
                .defaultValue="${e.defaultValue}"
                .markdown="${e.markdown}"
            ></k-prompt-dialog-content>
        `:p`<div>Error: No prompt dialog state</div>`,onButton:async(e,t,i)=>(i&&(e==="ok"?i.resolve(t||""):i.resolve(null)),!0)});async function tf(e,t="",i=!1){return new Promise(r=>{So.open("prompt",{message:e,defaultValue:t,markdown:i,resolve:r})})}var rf=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,gn=(e,t,i,r)=>{for(var s=r>1?void 0:r?sf(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&rf(t,i,s),s};let to=class extends ei{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};gn([c({type:String})],to.prototype,"message",2);gn([c({type:Boolean})],to.prototype,"markdown",2);to=gn([C("k-info-dialog-content")],to);I.registerContribution(Ni,{id:"info",label:"Information",buttons:[$o],component:e=>e?p`
            <k-info-dialog-content 
                .message="${e.message}"
                .markdown="${e.markdown}"
            ></k-info-dialog-content>
        `:p`<div>Error: No info dialog state</div>`,onButton:async(e,t,i)=>(i&&i.resolve&&i.resolve(),!0)});var of=Object.defineProperty,af=Object.getOwnPropertyDescriptor,bn=(e,t,i,r)=>{for(var s=r>1?void 0:r?af(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&of(t,i,s),s};let io=class extends ei{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return p`
            ${this.renderMessage(this.message,this.markdown)}
        `}};bn([c({type:String})],io.prototype,"message",2);bn([c({type:Boolean})],io.prototype,"markdown",2);io=bn([C("k-confirm-dialog-content")],io);I.registerContribution(Ni,{id:"confirm",label:"Confirm",buttons:[$o,Yc],component:e=>e?p`
            <k-confirm-dialog-content 
                .message="${e.message}"
                .markdown="${e.markdown}"
            ></k-confirm-dialog-content>
        `:p`<div>Error: No confirm dialog state</div>`,onButton:async(e,t,i)=>(i&&(e==="ok"?i.resolve(!0):i.resolve(!1)),!0)});async function td(e,t=!1){return new Promise(i=>{So.open("confirm",{message:e,markdown:t,resolve:i})})}var nf=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,Zi=(e,t,i,r)=>{for(var s=r>1?void 0:r?lf(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&nf(t,i,s),s};let ti=class extends ei{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(e){super.firstUpdated(e),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const t=this.closest("wa-dialog");t&&(this.dialogElement=t,this.updateDialogLabel());const i=this.closest(".dialog-service-content");if(i){const r=i.parentElement?.querySelector(".dialog-service-footer");r&&(r.style.display="none")}}updated(e){super.updated(e),e.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),e.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(e,t,i){this.currentTitle=e,this.currentMessage=t,this.actions=[...i],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(e){e.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const e=this.actions.filter(i=>i.label!=="Close"),t=this.actions.filter(i=>i.label==="Close");return p`
            <div class="dialog-content">
                <wa-scroller class="dialog-scroller">
                    ${this.renderMessage(this.currentMessage,this.markdown)}
                </wa-scroller>
                
                <div class="dialog-actions">
                    <div class="dialog-actions-left">
                        ${e.map(i=>p`
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
                        ${t.map(i=>p`
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
        `}};ti.styles=[...ei.styles,A`
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
        `];Zi([c({type:String})],ti.prototype,"title",2);Zi([c({type:String})],ti.prototype,"message",2);Zi([c({type:Boolean})],ti.prototype,"markdown",2);Zi([E()],ti.prototype,"actions",2);Zi([E()],ti.prototype,"currentTitle",2);Zi([E()],ti.prototype,"currentMessage",2);ti=Zi([C("k-navigable-info-dialog-content")],ti);I.registerContribution(Ni,{id:"navigable-info",label:"Information",buttons:[Zc],component:e=>{if(!e)return p`<div>Error: No navigable info dialog state</div>`;const t=p`
            <k-navigable-info-dialog-content 
                .title="${e.title}"
                .message="${e.message}"
                .markdown="${e.markdown}"
            ></k-navigable-info-dialog-content>
        `;return(async()=>{const i=document.querySelector("k-navigable-info-dialog-content");i&&(await i.updateComplete,i.actions=e.actions||[],i.resolveCallback=e.resolve,e.updateDialogRef&&(e.updateDialogRef.current=(r,s,o)=>{i.updateDialog(r,s,o)}))})(),t},onButton:async(e,t,i)=>i&&e==="close"&&i.resolve?(i.resolve(),!0):!1});var hr=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var vn=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};const Ra=new Set,dr=new Map;let Di,wn="ltr",yn="en";const id=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(id){const e=new MutationObserver(sd);wn=document.documentElement.dir||"ltr",yn=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function rd(...e){e.map(t=>{const i=t.$code.toLowerCase();dr.has(i)?dr.set(i,Object.assign(Object.assign({},dr.get(i)),t)):dr.set(i,t),Di||(Di=t)}),sd()}function sd(){id&&(wn=document.documentElement.dir||"ltr",yn=document.documentElement.lang||navigator.language),[...Ra.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let cf=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ra.add(this.host)}hostDisconnected(){Ra.delete(this.host)}dir(){return`${this.host.dir||wn}`.toLowerCase()}lang(){return`${this.host.lang||yn}`.toLowerCase()}getTranslationData(t){var i,r;const s=new Intl.Locale(t.replace(/_/g,"-")),o=s?.language.toLowerCase(),a=(r=(i=s?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&r!==void 0?r:"",l=dr.get(`${o}-${a}`),d=dr.get(o);return{locale:s,language:o,region:a,primary:l,secondary:d}}exists(t,i){var r;const{primary:s,secondary:o}=this.getTranslationData((r=i.lang)!==null&&r!==void 0?r:this.lang());return i=Object.assign({includeFallback:!1},i),!!(s&&s[t]||o&&o[t]||i.includeFallback&&Di&&Di[t])}term(t,...i){const{primary:r,secondary:s}=this.getTranslationData(this.lang());let o;if(r&&r[t])o=r[t];else if(s&&s[t])o=s[t];else if(Di&&Di[t])o=Di[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...i):o}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,i)}};var od={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};rd(od);var df=od;var te=class extends cf{};rd(df);var hf=A`
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
`;function S(e,t){const i={waitUntilFirstUpdate:!1,...t};return(r,s)=>{const{update:o}=r,a=Array.isArray(e)?e:[e];r.update=function(l){a.forEach(d=>{const h=d;if(l.has(h)){const u=l.get(h),f=this[h];u!==f&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[s](u,f)}}),o.call(this,l)}}}var uf=Object.defineProperty,pf=Object.getOwnPropertyDescriptor,ad=e=>{throw TypeError(e)},n=(e,t,i,r)=>{for(var s=r>1?void 0:r?pf(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&uf(t,i,s),s},nd=(e,t,i)=>t.has(e)||ad("Cannot "+i),ff=(e,t,i)=>(nd(e,t,"read from private field"),t.get(e)),mf=(e,t,i)=>t.has(e)?ad("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),gf=(e,t,i,r)=>(nd(e,t,"write to private field"),t.set(e,i),i);var bf=A`
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
`,qs,M=class extends Ii{constructor(){super(),mf(this,qs,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,i)=>{if(this.internals?.states)try{i?this.internals.states.add(t):this.internals.states.delete(t)}catch(r){if(String(r).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw r}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let e=this.constructor;for(let[t,i]of e.elementProperties)i.default==="inherit"&&i.initial!==void 0&&typeof t=="string"&&this.customStates.set(`initial-${t}-${i.initial}`,!0)}static get styles(){const e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[bf,...e]}attributeChangedCallback(e,t,i){ff(this,qs)||(this.constructor.elementProperties.forEach((r,s)=>{r.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),gf(this,qs,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&this[i]==null&&(this[i]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(t){if(this.didSSR&&!this.hasUpdated){const i=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});i.error=t,this.dispatchEvent(i)}throw t}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};qs=new WeakMap;n([c()],M.prototype,"dir",2);n([c()],M.prototype,"lang",2);n([c({type:Boolean,reflect:!0,attribute:"did-ssr"})],M.prototype,"didSSR",2);const ld="important",vf=" !"+ld,pe=_r(class extends Lr{constructor(e){if(super(e),e.type!==At.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const r=e[i];return r==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?i.removeProperty(r):i[r]=null);for(const r in t){const s=t[r];if(s!=null){this.ft.add(r);const o=typeof s=="string"&&s.endsWith(vf);r.includes("-")||o?i.setProperty(r,o?s.slice(0,-11):s,o?ld:""):i[r]=s}}return tt}});var Tt=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.play=!this.play)}handleLoad(){const e=document.createElement("canvas"),{width:t,height:i}=this.animatedImage;e.width=t,e.height=i,e.getContext("2d").drawImage(this.animatedImage,0,0,t,i),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new vn),this.isLoaded=!0)}handleError(){this.dispatchEvent(new hr)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){const t=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`;return p`
      <div
        class="animated-image"
        tabindex="0"
        role="button"
        aria-pressed=${this.play?"true":"false"}
        aria-label=${t}
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

        ${this.isLoaded?p`
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
                    style=${pe({"margin-inline-start":"3px"})}
                  ></wa-icon>
                </slot>
                <slot name="pause-icon">
                  <wa-icon name="pause" library="system" variant="solid" class="default"></wa-icon>
                </slot>
              </div>
            `:""}
      </div>
    `}};Tt.css=hf;n([$(".animated")],Tt.prototype,"animatedImage",2);n([E()],Tt.prototype,"frozenFrame",2);n([E()],Tt.prototype,"isLoaded",2);n([c()],Tt.prototype,"src",2);n([c()],Tt.prototype,"alt",2);n([c({type:Boolean,reflect:!0})],Tt.prototype,"play",2);n([S("play",{waitUntilFirstUpdate:!0})],Tt.prototype,"handlePlayChange",1);n([S("src")],Tt.prototype,"handleSrcChange",1);Tt=n([C("wa-animated-image")],Tt);var wf=A`
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
`;function yf(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var ia={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},xf={name:"system",resolver:(e,t="classic",i="solid")=>{let s=ia[i][e]??ia.regular[e]??ia.regular["circle-question"];return s?yf(s):""}},kf=xf;var za="",Oa="";function vl(e){za=e}function Cf(e=""){if(!za){const t=document.querySelector("[data-webawesome]");if(t?.hasAttribute("data-webawesome")){const i=new URL(t.getAttribute("data-webawesome")??"",window.location.href).pathname;vl(i)}else{const r=[...document.getElementsByTagName("script")].find(s=>s.src.endsWith("webawesome.js")||s.src.endsWith("webawesome.loader.js")||s.src.endsWith("webawesome.ssr-loader.js"));if(r){const s=String(r.getAttribute("src"));vl(s.split("/").slice(0,-1).join("/"))}}}return za.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}function Ef(e){Oa=e}function $f(){if(!Oa){const e=document.querySelector("[data-fa-kit-code]");e&&Ef(e.getAttribute("data-fa-kit-code")||"")}return Oa}var wl="7.1.0";function Sf(e,t,i){const r=$f(),s=r.length>0;let o="solid";return t==="notdog"&&(i==="solid"&&(o="notdog-solid"),i==="duo-solid"&&(o="notdog-duo-solid")),t==="notdog-duo"&&(o="notdog-duo-solid"),t==="chisel"&&(o="chisel-regular"),t==="etch"&&(o="etch-solid"),t==="jelly"&&(o="jelly-regular",i==="duo-regular"&&(o="jelly-duo-regular"),i==="fill-regular"&&(o="jelly-fill-regular")),t==="jelly-duo"&&(o="jelly-duo-regular"),t==="jelly-fill"&&(o="jelly-fill-regular"),t==="slab"&&((i==="solid"||i==="regular")&&(o="slab-regular"),i==="press-regular"&&(o="slab-press-regular")),t==="slab-press"&&(o="slab-press-regular"),t==="thumbprint"&&(o="thumbprint-light"),t==="whiteboard"&&(o="whiteboard-semibold"),t==="utility"&&(o="utility-semibold"),t==="utility-duo"&&(o="utility-duo-semibold"),t==="utility-fill"&&(o="utility-fill-semibold"),t==="classic"&&(i==="thin"&&(o="thin"),i==="light"&&(o="light"),i==="regular"&&(o="regular"),i==="solid"&&(o="solid")),t==="sharp"&&(i==="thin"&&(o="sharp-thin"),i==="light"&&(o="sharp-light"),i==="regular"&&(o="sharp-regular"),i==="solid"&&(o="sharp-solid")),t==="duotone"&&(i==="thin"&&(o="duotone-thin"),i==="light"&&(o="duotone-light"),i==="regular"&&(o="duotone-regular"),i==="solid"&&(o="duotone")),t==="sharp-duotone"&&(i==="thin"&&(o="sharp-duotone-thin"),i==="light"&&(o="sharp-duotone-light"),i==="regular"&&(o="sharp-duotone-regular"),i==="solid"&&(o="sharp-duotone-solid")),t==="brands"&&(o="brands"),s?`https://ka-p.fontawesome.com/releases/v${wl}/svgs/${o}/${e}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${wl}/svgs/${o}/${e}.svg`}var Af={name:"default",resolver:(e,t="classic",i="solid")=>Sf(e,t,i),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute("data-duotone-initialized")){const{family:i,variant:r}=t;if(i==="duotone"||i==="sharp-duotone"||i==="notdog-duo"||i==="notdog"&&r==="duo-solid"||i==="jelly-duo"||i==="jelly"&&r==="duo-regular"||i==="utility-duo"||i==="thumbprint"){const s=[...e.querySelectorAll("path")],o=s.find(l=>!l.hasAttribute("opacity")),a=s.find(l=>l.hasAttribute("opacity"));if(!o||!a)return;if(o.setAttribute("data-duotone-primary",""),a.setAttribute("data-duotone-secondary",""),t.swapOpacity&&o&&a){const l=a.getAttribute("opacity")||"0.4";o.style.setProperty("--path-opacity",l),a.style.setProperty("--path-opacity","1")}e.setAttribute("data-duotone-initialized","")}}}},_f=Af;var Lf="classic",ro=[_f,kf],so=[];function Tf(e){so.push(e)}function Df(e){so=so.filter(t=>t!==e)}function ra(e){return ro.find(t=>t.name===e)}function Rf(e,t){zf(e),ro.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),so.forEach(i=>{i.library===e&&i.setIcon()})}function zf(e){ro=ro.filter(t=>t.name!==e)}function Of(){return Lf}var Hr=Symbol(),Ds=Symbol(),sa,oa=new Map,Fe=class extends M{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(e,t)=>{let i;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=p`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const r=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(r,this),this.svg}try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Hr:Ds}catch{return Ds}try{const r=document.createElement("div");r.innerHTML=await i.text();const s=r.firstElementChild;if(s?.tagName?.toLowerCase()!=="svg")return Hr;sa||(sa=new DOMParser);const a=sa.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Hr}catch{return Hr}}}connectedCallback(){super.connectedCallback(),Tf(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Df(this)}getIconSource(){const e=ra(this.library),t=this.family||Of();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:e,fromLibrary:t}=this.getIconSource(),i=t?ra(this.library):void 0;if(!e){this.svg=null;return}let r=oa.get(e);r||(r=this.resolveIcon(e,i),oa.set(e,r));const s=await r;if(s===Ds&&oa.delete(e),e===this.getIconSource().url){if(tu(s)){this.svg=s;return}switch(s){case Ds:case Hr:this.svg=null,this.dispatchEvent(new hr);break;default:this.svg=s.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new vn)}}}updated(e){super.updated(e);const t=ra(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);const i=this.shadowRoot?.querySelector("svg");i&&t?.mutator?.(i,this)}render(){return this.hasUpdated?this.svg:p`<svg part="svg" width="16" height="16"></svg>`}};Fe.css=wf;n([E()],Fe.prototype,"svg",2);n([c({reflect:!0})],Fe.prototype,"name",2);n([c({reflect:!0})],Fe.prototype,"family",2);n([c({reflect:!0})],Fe.prototype,"variant",2);n([c({attribute:"auto-width",type:Boolean,reflect:!0})],Fe.prototype,"autoWidth",2);n([c({attribute:"swap-opacity",type:Boolean,reflect:!0})],Fe.prototype,"swapOpacity",2);n([c()],Fe.prototype,"src",2);n([c()],Fe.prototype,"label",2);n([c({reflect:!0})],Fe.prototype,"library",2);n([c({type:Number,reflect:!0})],Fe.prototype,"rotate",2);n([c({type:String,reflect:!0})],Fe.prototype,"flip",2);n([c({type:String,reflect:!0})],Fe.prototype,"animation",2);n([S("label")],Fe.prototype,"handleLabelChange",1);n([S(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],Fe.prototype,"setIcon",1);Fe=n([C("wa-icon")],Fe);var yl=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}};var If=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}};var Pf=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}};var Mf=A`
  :host {
    display: contents;
  }
`;const Nf=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Ff=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Bf=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Uf=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Vf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],qf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Hf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Wf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],jf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Xf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Gf=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Kf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Yf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Zf=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Qf=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Jf=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],em=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],tm=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],im=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],rm=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],sm=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],om=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],am=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],nm=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],lm=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],cm=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],dm=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],hm=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],um=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],pm=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],fm=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],mm=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],gm=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],bm=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],vm=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],wm=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ym=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xm=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],km=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Cm=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Em=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],$m=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Sm=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Am=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_m=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Lm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Tm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Dm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Rm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],zm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Om=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Im=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Pm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Mm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Nm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Fm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Bm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Um=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Vm=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],qm=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Hm=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Wm=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],jm=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Xm=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Gm=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Km=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Ym=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Zm=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Qm=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Jm=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],eg=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],tg=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],ig=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],rg=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],sg=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],og=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],ag=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ng=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],lg=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],cg=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],dg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],hg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],ug=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],pg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],fg=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],mg=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],gg=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],bg=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],vg=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],wg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],xg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],kg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Cg=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Eg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],$g=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Sg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Ag=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],cd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},_g=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Zf,backInLeft:Qf,backInRight:Jf,backInUp:em,backOutDown:tm,backOutLeft:im,backOutRight:rm,backOutUp:sm,bounce:Nf,bounceIn:om,bounceInDown:am,bounceInLeft:nm,bounceInRight:lm,bounceInUp:cm,bounceOut:dm,bounceOutDown:hm,bounceOutLeft:um,bounceOutRight:pm,bounceOutUp:fm,easings:cd,fadeIn:mm,fadeInBottomLeft:gm,fadeInBottomRight:bm,fadeInDown:vm,fadeInDownBig:wm,fadeInLeft:ym,fadeInLeftBig:xm,fadeInRight:km,fadeInRightBig:Cm,fadeInTopLeft:Em,fadeInTopRight:$m,fadeInUp:Sm,fadeInUpBig:Am,fadeOut:_m,fadeOutBottomLeft:Lm,fadeOutBottomRight:Tm,fadeOutDown:Dm,fadeOutDownBig:Rm,fadeOutLeft:zm,fadeOutLeftBig:Om,fadeOutRight:Im,fadeOutRightBig:Pm,fadeOutTopLeft:Mm,fadeOutTopRight:Nm,fadeOutUp:Fm,fadeOutUpBig:Bm,flash:Ff,flip:Um,flipInX:Vm,flipInY:qm,flipOutX:Hm,flipOutY:Wm,headShake:Bf,heartBeat:Uf,hinge:fg,jackInTheBox:mg,jello:Vf,lightSpeedInLeft:jm,lightSpeedInRight:Xm,lightSpeedOutLeft:Gm,lightSpeedOutRight:Km,pulse:qf,rollIn:gg,rollOut:bg,rotateIn:Ym,rotateInDownLeft:Zm,rotateInDownRight:Qm,rotateInUpLeft:Jm,rotateInUpRight:eg,rotateOut:tg,rotateOutDownLeft:ig,rotateOutDownRight:rg,rotateOutUpLeft:sg,rotateOutUpRight:og,rubberBand:Hf,shake:Wf,shakeX:jf,shakeY:Xf,slideInDown:ag,slideInLeft:ng,slideInRight:lg,slideInUp:cg,slideOutDown:dg,slideOutLeft:hg,slideOutRight:ug,slideOutUp:pg,swing:Gf,tada:Kf,wobble:Yf,zoomIn:vg,zoomInDown:wg,zoomInLeft:yg,zoomInRight:xg,zoomInUp:kg,zoomOut:Cg,zoomOutDown:Eg,zoomOutLeft:$g,zoomOutRight:Sg,zoomOutUp:Ag},Symbol.toStringTag,{value:"Module"}));var Ce=class extends M{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new If)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new Pf)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const e=cd[this.easing]??this.easing,t=this.keyframes??_g[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!t?!1:(this.destroyAnimation(),this.animation=r.animate(t,{delay:this.delay,direction:this.direction,duration:this.duration,easing:e,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new yl)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new yl)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ce.css=Mf;n([gp("slot")],Ce.prototype,"defaultSlot",2);n([c()],Ce.prototype,"name",2);n([c({type:Boolean,reflect:!0})],Ce.prototype,"play",2);n([c({type:Number})],Ce.prototype,"delay",2);n([c()],Ce.prototype,"direction",2);n([c({type:Number})],Ce.prototype,"duration",2);n([c()],Ce.prototype,"easing",2);n([c({attribute:"end-delay",type:Number})],Ce.prototype,"endDelay",2);n([c()],Ce.prototype,"fill",2);n([c({type:Number})],Ce.prototype,"iterations",2);n([c({attribute:"iteration-start",type:Number})],Ce.prototype,"iterationStart",2);n([c({attribute:!1})],Ce.prototype,"keyframes",2);n([c({attribute:"playback-rate",type:Number})],Ce.prototype,"playbackRate",2);n([S(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Ce.prototype,"handleAnimationChange",1);n([S("play")],Ce.prototype,"handlePlayChange",1);n([S("playbackRate")],Ce.prototype,"handlePlaybackRateChange",1);Ce=n([C("wa-animation")],Ce);var Lg=A`
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
`;var Ut=class extends M{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new hr)}render(){const e=p`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `;let t=p``;return this.initials?t=p`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`:t=p`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `,p` ${this.image&&!this.hasError?e:t} `}};Ut.css=Lg;n([E()],Ut.prototype,"hasError",2);n([c()],Ut.prototype,"image",2);n([c()],Ut.prototype,"label",2);n([c()],Ut.prototype,"initials",2);n([c()],Ut.prototype,"loading",2);n([c({reflect:!0})],Ut.prototype,"shape",2);n([S("image")],Ut.prototype,"handleImageChange",1);Ut=n([C("wa-avatar")],Ut);var Lo=A`
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
`;var Tg=A`
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
`;var Bi=class extends M{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return p` <slot part="base" role="status"></slot>`}};Bi.css=[Lo,Tg];n([c({reflect:!0})],Bi.prototype,"variant",2);n([c({reflect:!0})],Bi.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],Bi.prototype,"pill",2);n([c({reflect:!0})],Bi.prototype,"attention",2);Bi=n([C("wa-badge")],Bi);var Dg=A`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var gr=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="wa-breadcrumb-item");e.forEach((t,i)=>{const r=t.querySelector('[slot="separator"]');r===null?t.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),i===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),p`
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
    `}};gr.css=Dg;n([$("slot")],gr.prototype,"defaultSlot",2);n([$('slot[name="separator"]')],gr.prototype,"separatorSlot",2);n([c()],gr.prototype,"label",2);gr=n([C("wa-breadcrumb")],gr);var Rg=A`
  :host {
    color: var(--wa-color-text-link);
    display: inline-flex;
    align-items: center;
    font: inherit;
    font-weight: var(--wa-font-weight-action);
    line-height: var(--wa-line-height-normal);
    white-space: nowrap;
  }

  :host(:last-of-type) {
    color: var(--wa-color-text-quiet);
  }

  .label {
    display: inline-block;
    font: inherit;
    text-decoration: none;
    color: currentColor;
    background: none;
    border: none;
    border-radius: var(--wa-border-radius-m);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:not(:last-of-type)) .label:hover {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:not(:last-of-type)) .label:active {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .label:focus {
    outline: none;
  }

  .label:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .start,
  .end {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start,
  .end {
    display: inline-flex;
    color: var(--wa-color-text-quiet);
  }

  ::slotted([slot='start']) {
    margin-inline-end: var(--wa-space-s);
  }

  ::slotted([slot='end']) {
    margin-inline-start: var(--wa-space-s);
  }

  :host(:last-of-type) .separator {
    display: none;
  }

  .separator {
    color: var(--wa-color-text-quiet);
    display: inline-flex;
    align-items: center;
    margin: 0 var(--wa-space-s);
    user-select: none;
    -webkit-user-select: none;
  }
`;const P=e=>e??B;var ii=class extends M{constructor(){super(...arguments),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="wa-dropdown").length>0;if(this.href){this.renderType="link";return}if(e){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return p`
      <span part="start" class="start">
        <slot name="start"></slot>
      </span>

      ${this.renderType==="link"?p`
            <a
              part="label"
              class="label label-link"
              href="${this.href}"
              target="${P(this.target?this.target:void 0)}"
              rel=${P(this.target?this.rel:void 0)}
            >
              <slot></slot>
            </a>
          `:""}
      ${this.renderType==="button"?p`
            <button part="label" type="button" class="label label-button">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </button>
          `:""}
      ${this.renderType==="dropdown"?p`
            <div part="label" class="label label-dropdown">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
          `:""}

      <span part="end" class="end">
        <slot name="end"></slot>
      </span>

      <span part="separator" class="separator" aria-hidden="true">
        <slot name="separator"></slot>
      </span>
    `}};ii.css=Rg;n([$("slot:not([name])")],ii.prototype,"defaultSlot",2);n([E()],ii.prototype,"renderType",2);n([c()],ii.prototype,"href",2);n([c()],ii.prototype,"target",2);n([c()],ii.prototype,"rel",2);n([S("href",{waitUntilFirstUpdate:!0})],ii.prototype,"hrefChanged",1);ii=n([C("wa-breadcrumb-item")],ii);var ws=()=>({checkValidity(e){const t=e.input,i={message:"",isValid:!0,invalidKeys:[]};if(!t)return i;let r=!0;if("checkValidity"in t&&(r=t.checkValidity()),r)return i;if(i.isValid=!1,"validationMessage"in t&&(i.message=t.validationMessage),!("validity"in t))return i.invalidKeys.push("customError"),i;for(const s in t.validity){if(s==="valid")continue;const o=s;t.validity[o]&&i.invalidKeys.push(o)}return i}});var xn=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var zg=()=>({observedAttributes:["custom-error"],checkValidity(e){const t={message:"",isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}}),ce=class extends M{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new xn))},this.handleInteraction=e=>{const t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[zg()]}static get observedAttributes(){const e=new Set(super.observedAttributes||[]);for(const t of this.validators)if(t.observedAttributes)for(const i of t.observedAttributes)e.add(i);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")){const t=this.value;if(Array.isArray(t)){if(this.name){const i=new FormData;for(const r of t)i.append(this.name,r);this.setValue(i,i)}}else this.setValue(t,t)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute("form",e):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){const t=e[0],i=e[1];let r=e[2];r||(r=this.validationTarget),this.internals.setValidity(t,i,r||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const e=!!this.required,t=this.internals.validity.valid,i=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!t),this.customStates.set("valid",t),this.customStates.set("user-invalid",!t&&i),this.customStates.set("user-valid",t&&i)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...e){const[t,i]=e;this.internals.setFormValue(t,i)}get allValidators(){const e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const e=this.allValidators;if(!e?.length)return;const t={customError:!!this.customError},i=this.validationTarget||this.input||void 0;let r="";for(const s of e){const{isValid:o,message:a,invalidKeys:l}=s.checkValidity(this);o||(r||(r=a),l?.length>=0&&l.forEach(d=>t[d]=!0))}r||(r=this.validationMessage),this.setValidity(t,r,i)}};ce.formAssociated=!0;n([c({reflect:!0})],ce.prototype,"name",2);n([c({type:Boolean})],ce.prototype,"disabled",2);n([c({state:!0,attribute:!1})],ce.prototype,"valueHasChanged",2);n([c({state:!0,attribute:!1})],ce.prototype,"hasInteracted",2);n([c({attribute:"custom-error",reflect:!0})],ce.prototype,"customError",2);n([c({attribute:!1,state:!0,type:Object})],ce.prototype,"validity",1);var Og=A`
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
`;var nt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{const r=i.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===Node.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var Ge=A`
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
`;const N=_r(class extends Lr{constructor(e){if(super(e),e.type!==At.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const i=e.element.classList;for(const r of this.st)r in t||(i.remove(r),this.st.delete(r));for(const r in t){const s=!!t[r];s===this.st.has(r)||this.nt?.has(r)||(s?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return tt}});const dd=Symbol.for(""),Ig=e=>{if(e?.r===dd)return e?._$litStatic$},xl=(e,...t)=>({_$litStatic$:t.reduce((i,r,s)=>i+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[s+1],e[0]),r:dd}),kl=new Map,Pg=e=>(t,...i)=>{const r=i.length;let s,o;const a=[],l=[];let d,h=0,u=!1;for(;h<r;){for(d=t[h];h<r&&(o=i[h],(s=Ig(o))!==void 0);)d+=s+t[++h],u=!0;h!==r&&l.push(o),a.push(d),h++}if(h===r&&a.push(t[r]),u){const f=a.join("$$lit$$");(t=kl.get(f))===void 0&&(a.raw=a,kl.set(f,t=a)),i=l}return e(t,...i)},aa=Pg(p);var se=class extends ce{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new nt(this,"[default]","start","end"),this.localize=new te(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,ws()]}constructLightDOMButton(){const e=document.createElement("button");for(const t of this.attributes)t.name!=="style"&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position="absolute !important",e.style.width="0 !important",e.style.height="0 !important",e.style.clipPath="inset(50%) !important",e.style.overflow="hidden !important",e.style.whiteSpace="nowrap !important",this.name&&(e.name=this.name),e.value=this.value||"",e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;const i=this.constructLightDOMButton();this.parentElement?.append(i),i.click(),i.remove()}handleInvalid(){this.dispatchEvent(new xn)}handleLabelSlotChange(){const e=this.labelSlot.assignedNodes({flatten:!0});let t=!1,i=!1,r=!1,s=!1;[...e].forEach(o=>{if(o.nodeType===Node.ELEMENT_NODE){const a=o;a.localName==="wa-icon"?(i=!0,t||(t=a.label!==void 0)):s=!0}else o.nodeType===Node.TEXT_NODE&&(o.textContent?.trim()||"").length>0&&(r=!0)}),this.isIconButton=i&&!r&&!s,this.isIconButton&&!t&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=this.isLink(),t=e?xl`a`:xl`button`;return aa`
      <${t}
        part="base"
        class=${N({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${P(e?void 0:this.disabled)}
        type=${P(e?void 0:this.type)}
        title=${this.title}
        name=${P(e?void 0:this.name)}
        value=${P(e?void 0:this.value)}
        href=${P(e?this.href:void 0)}
        target=${P(e?this.target:void 0)}
        download=${P(e?this.download:void 0)}
        rel=${P(e&&this.rel?this.rel:void 0)}
        role=${P(e?void 0:"button")}
        aria-disabled=${P(e&&this.disabled?"true":void 0)}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?aa`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?aa`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${t}>
    `}};se.shadowRootOptions={...ce.shadowRootOptions,delegatesFocus:!0};se.css=[Og,Lo,Ge];n([$(".button")],se.prototype,"button",2);n([$("slot:not([name])")],se.prototype,"labelSlot",2);n([E()],se.prototype,"invalid",2);n([E()],se.prototype,"isIconButton",2);n([c()],se.prototype,"title",2);n([c({reflect:!0})],se.prototype,"variant",2);n([c({reflect:!0})],se.prototype,"appearance",2);n([c({reflect:!0})],se.prototype,"size",2);n([c({attribute:"with-caret",type:Boolean,reflect:!0})],se.prototype,"withCaret",2);n([c({type:Boolean})],se.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],se.prototype,"loading",2);n([c({type:Boolean,reflect:!0})],se.prototype,"pill",2);n([c()],se.prototype,"type",2);n([c({reflect:!0})],se.prototype,"name",2);n([c({reflect:!0})],se.prototype,"value",2);n([c({reflect:!0})],se.prototype,"href",2);n([c()],se.prototype,"target",2);n([c()],se.prototype,"rel",2);n([c()],se.prototype,"download",2);n([c({attribute:"formaction"})],se.prototype,"formAction",2);n([c({attribute:"formenctype"})],se.prototype,"formEnctype",2);n([c({attribute:"formmethod"})],se.prototype,"formMethod",2);n([c({attribute:"formnovalidate",type:Boolean})],se.prototype,"formNoValidate",2);n([c({attribute:"formtarget"})],se.prototype,"formTarget",2);n([S("disabled",{waitUntilFirstUpdate:!0})],se.prototype,"handleDisabledChange",1);se=n([C("wa-button")],se);var Mg=A`
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
`;var Ia=class extends M{constructor(){super(...arguments),this.localize=new te(this)}render(){return p`
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
    `}};Ia.css=Mg;Ia=n([C("wa-spinner")],Ia);var Ng=A`
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
`;var gi=class extends M{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(e){super.updated(e),e.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(e){Wr(e.target)?.classList.add("button-focus")}handleBlur(e){Wr(e.target)?.classList.remove("button-focus")}handleMouseOver(e){Wr(e.target)?.classList.add("button-hover")}handleMouseOut(e){Wr(e.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,e.forEach(t=>{const i=e.indexOf(t),r=Wr(t);r&&(r.appearance==="outlined"&&(this.hasOutlined=!0),r.classList.add("wa-button-group__button"),r.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),r.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),r.classList.toggle("wa-button-group__button-first",i===0),r.classList.toggle("wa-button-group__button-inner",i>0&&i<e.length-1),r.classList.toggle("wa-button-group__button-last",i===e.length-1),r.classList.toggle("wa-button-group__button-radio",r.tagName.toLowerCase()==="wa-radio-button"))})}render(){return p`
      <slot
        part="base"
        class=${N({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};gi.css=[Ng];n([$("slot")],gi.prototype,"defaultSlot",2);n([E()],gi.prototype,"disableRole",2);n([E()],gi.prototype,"hasOutlined",2);n([c()],gi.prototype,"label",2);n([c({reflect:!0})],gi.prototype,"orientation",2);gi=n([C("wa-button-group")],gi);function Wr(e){const t="wa-button, wa-radio-button";return e.closest(t)??e.querySelector(t)}var Fg=A`
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
`;var br=class extends M{constructor(){super(...arguments),this.variant="brand",this.size="medium"}render(){return p`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};br.css=[Fg,Lo,Ge];n([c({reflect:!0})],br.prototype,"variant",2);n([c({reflect:!0})],br.prototype,"appearance",2);n([c({reflect:!0})],br.prototype,"size",2);br=n([C("wa-callout")],br);var Bg=A`
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
`;var bi=class extends M{constructor(){super(...arguments),this.hasSlotController=new nt(this,"footer","header","media","header-actions","footer-actions","actions"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.orientation="vertical"}updated(){!this.withHeader&&this.hasSlotController.test("header")&&(this.withHeader=!0),!this.withMedia&&this.hasSlotController.test("media")&&(this.withMedia=!0),!this.withFooter&&this.hasSlotController.test("footer")&&(this.withFooter=!0)}render(){return this.orientation==="horizontal"?p`
        <slot name="media" part="media" class="media"></slot>
        <slot part="body" class="body"></slot>
        <slot name="actions" part="actions" class="actions"></slot>
      `:p`
      <slot name="media" part="media" class="media"></slot>

      ${this.hasSlotController.test("header-actions")?p` <header part="header" class="header has-actions">
            <slot name="header"></slot>
            <slot name="header-actions"></slot>
          </header>`:p` <header part="header" class="header">
            <slot name="header"></slot>
          </header>`}

      <slot part="body" class="body"></slot>
      ${this.hasSlotController.test("footer-actions")?p` <footer part="footer" class="footer has-actions">
            <slot name="footer"></slot>
            <slot name="footer-actions"></slot>
          </footer>`:p` <footer part="footer" class="footer">
            <slot name="footer"></slot>
          </footer>`}
    `}};bi.css=[Ge,Bg];n([c({reflect:!0})],bi.prototype,"appearance",2);n([c({attribute:"with-header",type:Boolean,reflect:!0})],bi.prototype,"withHeader",2);n([c({attribute:"with-media",type:Boolean,reflect:!0})],bi.prototype,"withMedia",2);n([c({attribute:"with-footer",type:Boolean,reflect:!0})],bi.prototype,"withFooter",2);n([c({reflect:!0})],bi.prototype,"orientation",2);bi=n([C("wa-card")],bi);var Ug=class extends Event{constructor(e){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};const Vg="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let qg=(e=21)=>{let t="",i=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=Vg[i[e]&63];return t};function G(e,t,i){const r=s=>Object.is(s,-0)?0:s;return e<t?r(t):e>i?r(i):r(e)}function To(e=""){return`${e}${qg()}`}var Hg=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};var Wg=A`
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
`;function Dt(e,t){return new Promise(i=>{function r(s){s.target===e&&(e.removeEventListener(t,r),i())}e.addEventListener(t,r)})}async function oo(e,t,i){return e.animate(t,i).finished.catch(()=>{})}function he(e,t){return new Promise(i=>{const r=new AbortController,{signal:s}=r;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let o=()=>{e.classList.remove(t),i(),r.abort()};e.addEventListener("animationend",o,{once:!0,signal:s}),e.addEventListener("animationcancel",o,{once:!0,signal:s})})}function ao(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e)||0:e.indexOf("s")>-1?(parseFloat(e)||0)*1e3:parseFloat(e)||0}function Cl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function*jg(e,t){if(e!==void 0){let i=0;for(const r of e)yield t(r,i++)}}function*Xg(e,t,i=1){const r=t===void 0?0:e;t??=e;for(let s=r;i>0?s<t:t<s;s+=i)yield s}(()=>{const e=(r,s)=>{let o=0;return function(...a){window.clearTimeout(o),o=window.setTimeout(()=>{r.call(this,...a)},s)}},t=(r,s,o)=>{const a=r[s];r[s]=function(...l){a.call(this,...l),o.call(this,a,...l)}};if(!("onscrollend"in window)){const r=new Set,s=new WeakMap,o=l=>{r.add(l.pointerId)},a=l=>{r.delete(l.pointerId)};document.addEventListener("pointerdown",o),document.addEventListener("pointerup",a),t(EventTarget.prototype,"addEventListener",function(l,d){if(d!=="scroll")return;const h=e(()=>{r.size?h():this.dispatchEvent(new Event("scrollend"))},100);l.call(this,"scroll",h,{passive:!0}),s.set(this,h)}),t(EventTarget.prototype,"removeEventListener",function(l,d){if(d!=="scroll")return;const h=s.get(this);h&&l.call(this,"scroll",h,{passive:!0})})}})();var ue=class extends M{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Hg(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new te(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const r=e.scrollLeft,s=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==r||i!==s)&&(e.scrollTo({left:r,top:s,behavior:Cl()?"auto":"smooth"}),await Dt(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(i=>[...i.addedNodes,...i.removedNodes].some(r=>this.isCarouselItem(r)&&!r.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:i,loop:r}=this,s=r?e/i:(e-t)/i+1;return Math.ceil(s)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-e.clientX),i=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+i*i)>=10&&e.preventDefault()}}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,i=this.localize.dir()==="rtl",r=t.closest('[part~="pagination-item"]')!==null,s=e.key==="ArrowDown"||!i&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft",o=e.key==="ArrowUp"||!i&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight";e.preventDefault(),o&&this.previous(),s&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{const a=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');a&&a.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const l of t){const d=l.target;d.toggleAttribute("inert",!l.isIntersecting),d.classList.toggle("--in-view",l.isIntersecting),d.setAttribute("aria-hidden",l.isIntersecting?"false":"true")}const i=t.find(l=>l.isIntersecting);if(!i)return;const r=this.getSlides({excludeClones:!1}),s=this.getSlides().length,o=r.indexOf(i.target),a=this.loop?o-this.slidesPerPage:o;if(i&&(this.activeSlide=(Math.ceil(a/this.slidesPerMove)*this.slidesPerMove+s)%s,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone"))){const l=Number(i.target.getAttribute("data-clone"));this.goToSlide(l,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const e=this.getSlides(),t=this.slidesPerPage,i=e.slice(-t),r=e.slice(0,t);i.reverse().forEach((s,o)=>{const a=s.cloneNode(!0);a.setAttribute("data-clone",String(e.length-o-1)),this.prepend(a)}),r.forEach((s,o)=>{const a=s.cloneNode(!0);a.setAttribute("data-clone",String(o)),this.append(a)})}handleSlideChange(){const e=this.getSlides();e.forEach((t,i)=>{t.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new Ug({index:this.activeSlide,slide:e[this.activeSlide]}))}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((i,r)=>{(r+t)%t===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:i,loop:r}=this,s=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!s.length)return;const a=r?(e+s.length)%s.length:G(e,0,s.length-i);this.activeSlide=a;const l=this.localize.dir()==="rtl",d=G(e+(r?i:0)+(l?i-1:0),0,o.length-1),h=o[d];this.scrollToSlide(h,Cl()?"auto":t)}scrollToSlide(e,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,r=i.getBoundingClientRect(),s=e.getBoundingClientRect(),o=s.left-r.left,a=s.top-r.top;o||a?(this.pendingSlideChange=!0,i.scrollTo({left:o+i.scrollLeft,top:a+i.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:e,scrolling:t}=this;let i=0,r=0,s=!1,o=!1;this.hasUpdated&&(i=this.getPageCount(),r=this.getCurrentPage(),s=this.canScrollPrev(),o=this.canScrollNext());const a=this.localize.dir()==="rtl";return p`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${N({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging})}"
          style=${pe({"--slides-per-page":this.slidesPerPage})}
          aria-busy="${t?"true":"false"}"
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

        ${this.navigation?p`
              <div part="navigation" class="navigation">
                <button
                  part="navigation-button navigation-button-previous"
                  class="${N({"navigation-button":!0,"navigation-button-previous":!0,"navigation-button-disabled":!s})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <wa-icon library="system" name="${a?"chevron-right":"chevron-left"}"></wa-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button-next"
                  class=${N({"navigation-button":!0,"navigation-button-next":!0,"navigation-button-disabled":!o})}
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
        ${this.pagination?p`
              <div part="pagination" role="tablist" class="pagination" aria-controls="scroll-container">
                ${jg(Xg(i),l=>{const d=l===r;return p`
                    <button
                      part="pagination-item ${d?"pagination-item-active":""}"
                      class="${N({"pagination-item":!0,"pagination-item-active":d})}"
                      role="tab"
                      aria-selected="${d?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,i)}"
                      tabindex=${d?"0":"-1"}
                      @click=${()=>this.goToSlide(l*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:p``}
      </div>
    `}};ue.css=Wg;n([c({type:Boolean,reflect:!0})],ue.prototype,"loop",2);n([c({type:Number,reflect:!0})],ue.prototype,"slides",2);n([c({type:Number,reflect:!0})],ue.prototype,"currentSlide",2);n([c({type:Boolean,reflect:!0})],ue.prototype,"navigation",2);n([c({type:Boolean,reflect:!0})],ue.prototype,"pagination",2);n([c({type:Boolean,reflect:!0})],ue.prototype,"autoplay",2);n([c({type:Number,attribute:"autoplay-interval"})],ue.prototype,"autoplayInterval",2);n([c({type:Number,attribute:"slides-per-page"})],ue.prototype,"slidesPerPage",2);n([c({type:Number,attribute:"slides-per-move"})],ue.prototype,"slidesPerMove",2);n([c()],ue.prototype,"orientation",2);n([c({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ue.prototype,"mouseDragging",2);n([$(".slides")],ue.prototype,"scrollContainer",2);n([$(".pagination")],ue.prototype,"paginationContainer",2);n([E()],ue.prototype,"activeSlide",2);n([E()],ue.prototype,"scrolling",2);n([E()],ue.prototype,"dragging",2);n([Ao({passive:!0})],ue.prototype,"handleScroll",1);n([S("loop",{waitUntilFirstUpdate:!0}),S("slidesPerPage",{waitUntilFirstUpdate:!0})],ue.prototype,"initializeSlides",1);n([S("activeSlide")],ue.prototype,"handleSlideChange",1);n([S("slidesPerMove")],ue.prototype,"updateSlidesSnap",1);n([S("autoplay")],ue.prototype,"handleAutoplayChange",1);ue=n([C("wa-carousel")],ue);var Gg=A`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;var Pa=class extends M{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return p` <slot></slot> `}};Pa.css=Gg;Pa=n([C("wa-carousel-item")],Pa);var Do=(e={})=>{let{validationElement:t,validationProperty:i}=e;t||(t=Object.assign(document.createElement("input"),{required:!0})),i||(i="value");const r={observedAttributes:["required"],message:t.validationMessage,checkValidity(s){const o={message:"",isValid:!0,invalidKeys:[]};return(s.required??s.hasAttribute("required"))&&!s[i]&&(o.message=typeof r.message=="function"?r.message(s):r.message||"",o.isValid=!1,o.invalidKeys.push("valueMissing")),o}};return r};var Xt=A`
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
`;var Kg=A`
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
`;const Ui=_r(class extends Lr{constructor(e){if(super(e),e.type!==At.PROPERTY&&e.type!==At.ATTRIBUTE&&e.type!==At.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Tc(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===tt||t===B)return t;const i=e.element,r=e.name;if(e.type===At.PROPERTY){if(t===i[r])return tt}else if(e.type===At.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(r))return tt}else if(e.type===At.ATTRIBUTE&&i.getAttribute(r)===t+"")return tt;return Dc(e),t}});var Ae=class extends ce{constructor(){super(...arguments),this.hasSlotController=new nt(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint=""}static get validators(){const e=[Do({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...e]}get value(){const e=this._value||"on";return this.checked?e:null}set value(e){this._value=e}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){const e=this.hasSlotController.test("hint"),t=this.hint?!0:!!e,i=!this.checked&&this.indeterminate,r=i?"indeterminate":"check",s=i?"indeterminate":"check";return p`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${P(this._value)}
            .indeterminate=${Ui(this.indeterminate)}
            .checked=${Ui(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${s}-icon icon" library="system" name=${r}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${t?"false":"true"}
        class="${N({"has-slotted":t})}"
      >
        ${this.hint}
      </slot>
    `}};Ae.css=[Xt,Ge,Kg];Ae.shadowRootOptions={...ce.shadowRootOptions,delegatesFocus:!0};n([$('input[type="checkbox"]')],Ae.prototype,"input",2);n([c()],Ae.prototype,"title",2);n([c({reflect:!0})],Ae.prototype,"name",2);n([c({reflect:!0})],Ae.prototype,"value",1);n([c({reflect:!0})],Ae.prototype,"size",2);n([c({type:Boolean})],Ae.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],Ae.prototype,"indeterminate",2);n([c({type:Boolean,attribute:!1})],Ae.prototype,"checked",2);n([c({type:Boolean,reflect:!0,attribute:"checked"})],Ae.prototype,"defaultChecked",2);n([c({type:Boolean,reflect:!0})],Ae.prototype,"required",2);n([c()],Ae.prototype,"hint",2);n([S("defaultChecked")],Ae.prototype,"handleDefaultCheckedChange",1);n([S(["checked","indeterminate"])],Ae.prototype,"handleStateChange",1);n([S("disabled")],Ae.prototype,"handleDisabledChange",1);Ae=n([C("wa-checkbox")],Ae);var Yg=A`
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
`;function rs(e,t){function i(s){const o=e.getBoundingClientRect(),a=e.ownerDocument.defaultView,l=o.left+a.pageXOffset,d=o.top+a.pageYOffset,h=s.pageX-l,u=s.pageY-d;t?.onMove&&t.onMove(h,u)}function r(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",r),t?.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",r),t?.initialEvent instanceof PointerEvent&&i(t.initialEvent)}var na=typeof window<"u"&&"ontouchstart"in window,Rs=class{constructor(e,t){this.isActive=!1,this.isDragging=!1,this.handleDragStart=i=>{const r="touches"in i?i.touches[0].clientX:i.clientX,s="touches"in i?i.touches[0].clientY:i.clientY;this.isDragging||!na&&i.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("pointercancel",this.handleDragStop),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),document.addEventListener("touchcancel",this.handleDragStop),this.options.start(r,s))},this.handleDragStop=i=>{const r="changedTouches"in i?i.changedTouches[0].clientX:i.clientX,s="changedTouches"in i?i.changedTouches[0].clientY:i.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.options.stop(r,s)},this.handleDragMove=i=>{const r="touches"in i?i.touches[0].clientX:i.clientX,s="touches"in i?i.touches[0].clientY:i.clientY;window.getSelection()?.removeAllRanges(),this.options.move(r,s)},this.element=e,this.options={start:()=>{},stop:()=>{},move:()=>{},...t},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),na&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("pointercancel",this.handleDragStop),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),document.removeEventListener("touchcancel",this.handleDragStop),this.element.removeEventListener("pointerdown",this.handleDragStart),na&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(e){(e!==void 0?e:!this.isActive)?this.start():this.stop()}};var hd=A`
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
`;function Ne(e,t){Zg(e)&&(e="100%");const i=Qg(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),i&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function zs(e){return Math.min(1,Math.max(0,e))}function Zg(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Qg(e){return typeof e=="string"&&e.indexOf("%")!==-1}function ud(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Os(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Oi(e){return e.length===1?"0"+e:String(e)}function Jg(e,t,i){return{r:Ne(e,255)*255,g:Ne(t,255)*255,b:Ne(i,255)*255}}function El(e,t,i){e=Ne(e,255),t=Ne(t,255),i=Ne(i,255);const r=Math.max(e,t,i),s=Math.min(e,t,i);let o=0,a=0;const l=(r+s)/2;if(r===s)a=0,o=0;else{const d=r-s;switch(a=l>.5?d/(2-r-s):d/(r+s),r){case e:o=(t-i)/d+(t<i?6:0);break;case t:o=(i-e)/d+2;break;case i:o=(e-t)/d+4;break}o/=6}return{h:o,s:a,l}}function la(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*(6*i):i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function eb(e,t,i){let r,s,o;if(e=Ne(e,360),t=Ne(t,100),i=Ne(i,100),t===0)s=i,o=i,r=i;else{const a=i<.5?i*(1+t):i+t-i*t,l=2*i-a;r=la(l,a,e+1/3),s=la(l,a,e),o=la(l,a,e-1/3)}return{r:r*255,g:s*255,b:o*255}}function $l(e,t,i){e=Ne(e,255),t=Ne(t,255),i=Ne(i,255);const r=Math.max(e,t,i),s=Math.min(e,t,i);let o=0;const a=r,l=r-s,d=r===0?0:l/r;if(r===s)o=0;else{switch(r){case e:o=(t-i)/l+(t<i?6:0);break;case t:o=(i-e)/l+2;break;case i:o=(e-t)/l+4;break}o/=6}return{h:o,s:d,v:a}}function tb(e,t,i){e=Ne(e,360)*6,t=Ne(t,100),i=Ne(i,100);const r=Math.floor(e),s=e-r,o=i*(1-t),a=i*(1-s*t),l=i*(1-(1-s)*t),d=r%6,h=[i,a,o,o,l,i][d],u=[l,i,i,a,o,o][d],f=[o,o,l,i,i,a][d];return{r:h*255,g:u*255,b:f*255}}function Sl(e,t,i,r){const s=[Oi(Math.round(e).toString(16)),Oi(Math.round(t).toString(16)),Oi(Math.round(i).toString(16))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function ib(e,t,i,r,s){const o=[Oi(Math.round(e).toString(16)),Oi(Math.round(t).toString(16)),Oi(Math.round(i).toString(16)),Oi(sb(r))];return s&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function rb(e,t,i,r){const s=e/100,o=t/100,a=i/100,l=r/100,d=255*(1-s)*(1-l),h=255*(1-o)*(1-l),u=255*(1-a)*(1-l);return{r:d,g:h,b:u}}function Al(e,t,i){let r=1-e/255,s=1-t/255,o=1-i/255,a=Math.min(r,s,o);return a===1?(r=0,s=0,o=0):(r=(r-a)/(1-a)*100,s=(s-a)/(1-a)*100,o=(o-a)/(1-a)*100),a*=100,{c:Math.round(r),m:Math.round(s),y:Math.round(o),k:Math.round(a)}}function sb(e){return Math.round(parseFloat(e)*255).toString(16)}function _l(e){return ht(e)/255}function ht(e){return parseInt(e,16)}function ob(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const Ma={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ab(e){let t={r:0,g:0,b:0},i=1,r=null,s=null,o=null,a=!1,l=!1;return typeof e=="string"&&(e=cb(e)),typeof e=="object"&&(dt(e.r)&&dt(e.g)&&dt(e.b)?(t=Jg(e.r,e.g,e.b),a=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):dt(e.h)&&dt(e.s)&&dt(e.v)?(r=Os(e.s),s=Os(e.v),t=tb(e.h,r,s),a=!0,l="hsv"):dt(e.h)&&dt(e.s)&&dt(e.l)?(r=Os(e.s),o=Os(e.l),t=eb(e.h,r,o),a=!0,l="hsl"):dt(e.c)&&dt(e.m)&&dt(e.y)&&dt(e.k)&&(t=rb(e.c,e.m,e.y,e.k),a=!0,l="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(i=e.a)),i=ud(i),{ok:a,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:i}}const nb="[-\\+]?\\d+%?",lb="[-\\+]?\\d*\\.\\d+%?",hi="(?:"+lb+")|(?:"+nb+")",ca="[\\s|\\(]+("+hi+")[,|\\s]+("+hi+")[,|\\s]+("+hi+")\\s*\\)?",Is="[\\s|\\(]+("+hi+")[,|\\s]+("+hi+")[,|\\s]+("+hi+")[,|\\s]+("+hi+")\\s*\\)?",xt={CSS_UNIT:new RegExp(hi),rgb:new RegExp("rgb"+ca),rgba:new RegExp("rgba"+Is),hsl:new RegExp("hsl"+ca),hsla:new RegExp("hsla"+Is),hsv:new RegExp("hsv"+ca),hsva:new RegExp("hsva"+Is),cmyk:new RegExp("cmyk"+Is),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function cb(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(Ma[e])e=Ma[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=xt.rgb.exec(e);return i?{r:i[1],g:i[2],b:i[3]}:(i=xt.rgba.exec(e),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=xt.hsl.exec(e),i?{h:i[1],s:i[2],l:i[3]}:(i=xt.hsla.exec(e),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=xt.hsv.exec(e),i?{h:i[1],s:i[2],v:i[3]}:(i=xt.hsva.exec(e),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=xt.cmyk.exec(e),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=xt.hex8.exec(e),i?{r:ht(i[1]),g:ht(i[2]),b:ht(i[3]),a:_l(i[4]),format:t?"name":"hex8"}:(i=xt.hex6.exec(e),i?{r:ht(i[1]),g:ht(i[2]),b:ht(i[3]),format:t?"name":"hex"}:(i=xt.hex4.exec(e),i?{r:ht(i[1]+i[1]),g:ht(i[2]+i[2]),b:ht(i[3]+i[3]),a:_l(i[4]+i[4]),format:t?"name":"hex8"}:(i=xt.hex3.exec(e),i?{r:ht(i[1]+i[1]),g:ht(i[2]+i[2]),b:ht(i[3]+i[3]),format:t?"name":"hex"}:!1))))))))))}function dt(e){return typeof e=="number"?!Number.isNaN(e):xt.CSS_UNIT.test(e)}class fe{constructor(t="",i={}){if(t instanceof fe)return t;typeof t=="number"&&(t=ob(t)),this.originalInput=t;const r=ab(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??r.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let i,r,s;const o=t.r/255,a=t.g/255,l=t.b/255;return o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),l<=.03928?s=l/12.92:s=Math.pow((l+.055)/1.055,2.4),.2126*i+.7152*r+.0722*s}getAlpha(){return this.a}setAlpha(t){return this.a=ud(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=$l(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=$l(this.r,this.g,this.b),i=Math.round(t.h*360),r=Math.round(t.s*100),s=Math.round(t.v*100);return this.a===1?`hsv(${i}, ${r}%, ${s}%)`:`hsva(${i}, ${r}%, ${s}%, ${this.roundA})`}toHsl(){const t=El(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=El(this.r,this.g,this.b),i=Math.round(t.h*360),r=Math.round(t.s*100),s=Math.round(t.l*100);return this.a===1?`hsl(${i}, ${r}%, ${s}%)`:`hsla(${i}, ${r}%, ${s}%, ${this.roundA})`}toHex(t=!1){return Sl(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return ib(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),i=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${i}, ${r})`:`rgba(${t}, ${i}, ${r}, ${this.roundA})`}toPercentageRgb(){const t=i=>`${Math.round(Ne(i,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=i=>Math.round(Ne(i,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...Al(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:i,y:r,k:s}=Al(this.r,this.g,this.b);return`cmyk(${t}, ${i}, ${r}, ${s})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+Sl(this.r,this.g,this.b,!1);for(const[i,r]of Object.entries(Ma))if(t===r)return i;return!1}toString(t){const i=!!t;t=t??this.format;let r=!1;const s=this.a<1&&this.a>=0;return!i&&s&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),t==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new fe(this.toString())}lighten(t=10){const i=this.toHsl();return i.l+=t/100,i.l=zs(i.l),new fe(i)}brighten(t=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(t/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(t/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(t/100)))),new fe(i)}darken(t=10){const i=this.toHsl();return i.l-=t/100,i.l=zs(i.l),new fe(i)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const i=this.toHsl();return i.s-=t/100,i.s=zs(i.s),new fe(i)}saturate(t=10){const i=this.toHsl();return i.s+=t/100,i.s=zs(i.s),new fe(i)}greyscale(){return this.desaturate(100)}spin(t){const i=this.toHsl(),r=(i.h+t)%360;return i.h=r<0?360+r:r,new fe(i)}mix(t,i=50){const r=this.toRgb(),s=new fe(t).toRgb(),o=i/100,a={r:(s.r-r.r)*o+r.r,g:(s.g-r.g)*o+r.g,b:(s.b-r.b)*o+r.b,a:(s.a-r.a)*o+r.a};return new fe(a)}analogous(t=6,i=30){const r=this.toHsl(),s=360/i,o=[this];for(r.h=(r.h-(s*t>>1)+720)%360;--t;)r.h=(r.h+s)%360,o.push(new fe(r));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new fe(t)}monochromatic(t=6){const i=this.toHsv(),{h:r}=i,{s}=i;let{v:o}=i;const a=[],l=1/t;for(;t--;)a.push(new fe({h:r,s,v:o})),o=(o+l)%1;return a}splitcomplement(){const t=this.toHsl(),{h:i}=t;return[this,new fe({h:(i+72)%360,s:t.s,l:t.l}),new fe({h:(i+216)%360,s:t.s,l:t.l})]}onBackground(t){const i=this.toRgb(),r=new fe(t).toRgb(),s=i.a+r.a*(1-i.a);return new fe({r:(i.r*i.a+r.r*r.a*(1-i.a))/s,g:(i.g*i.a+r.g*r.a*(1-i.a))/s,b:(i.b*i.a+r.b*r.a*(1-i.a))/s,a:s})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const i=this.toHsl(),{h:r}=i,s=[this],o=360/t;for(let a=1;a<t;a++)s.push(new fe({h:(r+a*o)%360,s:i.s,l:i.l}));return s}equals(t){const i=new fe(t);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}}var q=class extends ce{constructor(){super(),this.hasSlotController=new nt(this,"hint","label"),this.isSafeValue=!1,this.localize=new te(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=e=>{if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focus(),this.hide();return}e.key==="Tab"&&setTimeout(()=>{const t=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||t?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=e=>{const i=e.composedPath().some(r=>r instanceof Element&&(r.closest(".color-picker")||r===this.trigger));this&&!i&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){const e=[Do()];return[...super.validators,...e]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".slider.alpha"),i=t.querySelector(".slider-handle"),{width:r}=t.getBoundingClientRect();let s=this.value,o=this.value;i.focus(),e.preventDefault(),rs(t,{onMove:a=>{this.alpha=G(a/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".slider.hue"),i=t.querySelector(".slider-handle"),{width:r}=t.getBoundingClientRect();let s=this.value,o=this.value;i.focus(),e.preventDefault(),rs(t,{onMove:a=>{this.hue=G(a/r*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".grid"),i=t.querySelector(".grid-handle"),{width:r,height:s}=t.getBoundingClientRect();let o=this.value,a=this.value;i.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,rs(t,{onMove:(l,d)=>{this.saturation=G(l/r*100,0,100),this.brightness=G(100-d/s*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=G(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=G(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=G(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=G(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(e){const t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=G(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=G(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=G(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=G(this.brightness-t,0,100),this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(e){const t=e.target,i=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value||""):this.value="",this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(e){this.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(e){e.preventDefault()}parseColor(e){if(!e||e.trim()==="")return null;const t=new fe(e);if(!t.isValid)return null;const i=t.toHsl(),r=t.toRgb(),s=t.toHsv();if(!r||r.r==null||r.g==null||r.b==null)return null;const o={h:i.h||0,s:(i.s||0)*100,l:(i.l||0)*100,a:i.a||0},a=t.toHexString(),l=t.toHex8String(),d={h:s.h||0,s:(s.s||0)*100,v:(s.v||0)*100,a:s.a||0};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:d.h,s:d.s,v:d.v,string:this.setLetterCase(`hsv(${Math.round(d.h)}, ${Math.round(d.s)}%, ${Math.round(d.v)}%)`)},hsva:{h:d.h,s:d.s,v:d.v,a:d.a,string:this.setLetterCase(`hsva(${Math.round(d.h)}, ${Math.round(d.s)}%, ${Math.round(d.v)}%, ${d.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a||0,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${(r.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(a),hexa:this.setLetterCase(l)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(t=>{const i=this.value;this.setColor(t.sRGBHex),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(e,t,i,r=100){const s=new fe(`hsva(${e}, ${t}%, ${i}%, ${r/100})`);return s.isValid?s.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(e){super.willUpdate(e),e.has("value")&&this.handleValueChange(e.get("value")||"",this.value||"")}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(t);i!==null?(this.inputValue=this.value||"",this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=e??""}this.requestUpdate()}focus(e){this.trigger.focus(e)}blur(){const e=this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),this.popup?.active&&this.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new xn),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(e){super.firstUpdated(e),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}updateAccessibleTrigger(){const e=this.trigger;e&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,Dt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Dt(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await he(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await he(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){const e=this.hasUpdated?this.withLabel||this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.withHint||this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,r=this.hint?!0:!!t,s=this.saturation,o=100-this.brightness,a=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(d=>d.trim()!==""),l=p`
      <div
        part="base"
        class=${N({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${pe({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${N({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${pe({top:`${o}%`,left:`${s}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${P(this.disabled?void 0:"0")}
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
                style=${pe({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${P(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?p`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${pe({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${pe({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${P(this.disabled?void 0:"0")}
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
            style=${pe({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.withoutFormatToggle?"":p`
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
            ${this.hasEyeDropper?p`
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

        ${a.length>0?p`
              <div part="swatches" class="swatches">
                ${a.map(d=>{const h=this.parseColor(d);return h?p`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${P(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${d}
                      @click=${()=>this.selectSwatch(d)}
                      @keydown=${u=>!this.disabled&&u.key==="Enter"&&this.setColor(h.hexa)}
                    >
                      <div class="swatch-color" style=${pe({backgroundColor:h.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return p`
      <div
        class=${N({container:!0,"form-control":!0,"form-control-has-label":i})}
        part="trigger-container form-control"
      >
        <div
          part="form-control-label"
          class=${N({label:!0,"has-label":i})}
          id="form-control-label"
        >
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${N({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
          style=${pe({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
          class=${N({"has-slotted":r})}
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
    `}};q.css=[hd,Ge,Xt,Yg];q.shadowRootOptions={...ce.shadowRootOptions,delegatesFocus:!0};n([$('[part~="base"]')],q.prototype,"base",2);n([$('[part~="input"]')],q.prototype,"input",2);n([$('[part~="form-control-label"]')],q.prototype,"triggerLabel",2);n([$('[part~="form-control-input"]')],q.prototype,"triggerButton",2);n([$(".color-popup")],q.prototype,"popup",2);n([$('[part~="preview"]')],q.prototype,"previewButton",2);n([$('[part~="trigger"]')],q.prototype,"trigger",2);n([E()],q.prototype,"hasFocus",2);n([E()],q.prototype,"isDraggingGridHandle",2);n([E()],q.prototype,"isEmpty",2);n([E()],q.prototype,"inputValue",2);n([E()],q.prototype,"hue",2);n([E()],q.prototype,"saturation",2);n([E()],q.prototype,"brightness",2);n([E()],q.prototype,"alpha",2);n([E()],q.prototype,"value",1);n([c({attribute:"value",reflect:!0})],q.prototype,"defaultValue",2);n([c({attribute:"with-label",reflect:!0,type:Boolean})],q.prototype,"withLabel",2);n([c({attribute:"with-hint",reflect:!0,type:Boolean})],q.prototype,"withHint",2);n([E()],q.prototype,"hasEyeDropper",2);n([c()],q.prototype,"label",2);n([c({attribute:"hint"})],q.prototype,"hint",2);n([c()],q.prototype,"format",2);n([c({reflect:!0})],q.prototype,"size",2);n([c({attribute:"without-format-toggle",type:Boolean})],q.prototype,"withoutFormatToggle",2);n([c({reflect:!0})],q.prototype,"name",2);n([c({type:Boolean})],q.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],q.prototype,"open",2);n([c({type:Boolean})],q.prototype,"opacity",2);n([c({type:Boolean})],q.prototype,"uppercase",2);n([c()],q.prototype,"swatches",2);n([c({type:Boolean,reflect:!0})],q.prototype,"required",2);n([Ao({passive:!1})],q.prototype,"handleTouchMove",1);n([S("format",{waitUntilFirstUpdate:!0})],q.prototype,"handleFormatChange",1);n([S("opacity")],q.prototype,"handleOpacityChange",1);n([S("value")],q.prototype,"handleValueChange",1);n([S("open",{waitUntilFirstUpdate:!0})],q.prototype,"handleOpenChange",1);q=n([C("wa-color-picker")],q);var pd=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function kn(e,t){const i=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!i&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&db(t)})}function db(e){let t=null;if("form"in e&&(t=e.form),!t&&"getForm"in e&&(t=e.getForm()),!t)return;const i=[...t.elements];if(i.length===1){t.requestSubmit(null);return}const r=i.find(s=>s.type==="submit"&&!s.matches(":disabled"));r&&(["input","button"].includes(r.localName)?t.requestSubmit(r):r.click())}var hb=A`
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
`;var X=class extends ce{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new nt(this,"hint","label"),this.localize=new te(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,ws()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new pd),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){kn(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,r="preserve"){const s=t??this.input.selectionStart,o=i??this.input.selectionEnd;this.input.setRangeText(e,s,o,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,r=this.hint?!0:!!t,s=this.withClear&&!this.disabled&&!this.readonly,o=this.hasUpdated&&s&&(typeof this.value=="number"||this.value&&this.value.length>0);return p`
      <label
        part="form-control-label label"
        class=${N({label:!0,"has-label":i})}
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
          name=${P(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${P(this.placeholder)}
          minlength=${P(this.minlength)}
          maxlength=${P(this.maxlength)}
          min=${P(this.min)}
          max=${P(this.max)}
          step=${P(this.step)}
          .value=${Ui(this.value??"")}
          autocapitalize=${P(this.autocapitalize)}
          autocomplete=${P(this.autocomplete)}
          autocorrect=${P(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${P(this.pattern)}
          enterkeyhint=${P(this.enterkeyhint)}
          inputmode=${P(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${o?p`
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
        ${this.passwordToggle&&!this.disabled?p`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?p`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:p`
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
        class=${N({"has-slotted":r})}
        aria-hidden=${r?"false":"true"}
        >${this.hint}</slot
      >
    `}};X.css=[Ge,Xt,hb];X.shadowRootOptions={...ce.shadowRootOptions,delegatesFocus:!0};n([$("input")],X.prototype,"input",2);n([c()],X.prototype,"title",2);n([c({reflect:!0})],X.prototype,"type",2);n([E()],X.prototype,"value",1);n([c({attribute:"value",reflect:!0})],X.prototype,"defaultValue",2);n([c({reflect:!0})],X.prototype,"size",2);n([c({reflect:!0})],X.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],X.prototype,"pill",2);n([c()],X.prototype,"label",2);n([c({attribute:"hint"})],X.prototype,"hint",2);n([c({attribute:"with-clear",type:Boolean})],X.prototype,"withClear",2);n([c()],X.prototype,"placeholder",2);n([c({type:Boolean,reflect:!0})],X.prototype,"readonly",2);n([c({attribute:"password-toggle",type:Boolean})],X.prototype,"passwordToggle",2);n([c({attribute:"password-visible",type:Boolean})],X.prototype,"passwordVisible",2);n([c({attribute:"without-spin-buttons",type:Boolean})],X.prototype,"withoutSpinButtons",2);n([c({type:Boolean,reflect:!0})],X.prototype,"required",2);n([c()],X.prototype,"pattern",2);n([c({type:Number})],X.prototype,"minlength",2);n([c({type:Number})],X.prototype,"maxlength",2);n([c()],X.prototype,"min",2);n([c()],X.prototype,"max",2);n([c()],X.prototype,"step",2);n([c()],X.prototype,"autocapitalize",2);n([c()],X.prototype,"autocorrect",2);n([c()],X.prototype,"autocomplete",2);n([c({type:Boolean})],X.prototype,"autofocus",2);n([c()],X.prototype,"enterkeyhint",2);n([c({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],X.prototype,"spellcheck",2);n([c()],X.prototype,"inputmode",2);n([c({attribute:"with-label",type:Boolean})],X.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],X.prototype,"withHint",2);n([S("step",{waitUntilFirstUpdate:!0})],X.prototype,"handleStepChange",1);X=n([C("wa-input")],X);var fd=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var ub=A`
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
`;const vi=Math.min,pt=Math.max,no=Math.round,Ps=Math.floor,Bt=e=>({x:e,y:e}),pb={left:"right",right:"left",bottom:"top",top:"bottom"},fb={start:"end",end:"start"};function Na(e,t,i){return pt(e,vi(t,i))}function Tr(e,t){return typeof e=="function"?e(t):e}function wi(e){return e.split("-")[0]}function Dr(e){return e.split("-")[1]}function md(e){return e==="x"?"y":"x"}function Cn(e){return e==="y"?"height":"width"}const mb=new Set(["top","bottom"]);function Qt(e){return mb.has(wi(e))?"y":"x"}function En(e){return md(Qt(e))}function gb(e,t,i){i===void 0&&(i=!1);const r=Dr(e),s=En(e),o=Cn(s);let a=s==="x"?r===(i?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(a=lo(a)),[a,lo(a)]}function bb(e){const t=lo(e);return[Fa(e),t,Fa(t)]}function Fa(e){return e.replace(/start|end/g,t=>fb[t])}const Ll=["left","right"],Tl=["right","left"],vb=["top","bottom"],wb=["bottom","top"];function yb(e,t,i){switch(e){case"top":case"bottom":return i?t?Tl:Ll:t?Ll:Tl;case"left":case"right":return t?vb:wb;default:return[]}}function xb(e,t,i,r){const s=Dr(e);let o=yb(wi(e),i==="start",r);return s&&(o=o.map(a=>a+"-"+s),t&&(o=o.concat(o.map(Fa)))),o}function lo(e){return e.replace(/left|right|bottom|top/g,t=>pb[t])}function kb(e){return{top:0,right:0,bottom:0,left:0,...e}}function gd(e){return typeof e!="number"?kb(e):{top:e,right:e,bottom:e,left:e}}function co(e){const{x:t,y:i,width:r,height:s}=e;return{width:r,height:s,top:i,left:t,right:t+r,bottom:i+s,x:t,y:i}}function Dl(e,t,i){let{reference:r,floating:s}=e;const o=Qt(t),a=En(t),l=Cn(a),d=wi(t),h=o==="y",u=r.x+r.width/2-s.width/2,f=r.y+r.height/2-s.height/2,g=r[l]/2-s[l]/2;let b;switch(d){case"top":b={x:u,y:r.y-s.height};break;case"bottom":b={x:u,y:r.y+r.height};break;case"right":b={x:r.x+r.width,y:f};break;case"left":b={x:r.x-s.width,y:f};break;default:b={x:r.x,y:r.y}}switch(Dr(t)){case"start":b[a]-=g*(i&&h?-1:1);break;case"end":b[a]+=g*(i&&h?-1:1);break}return b}async function Cb(e,t){var i;t===void 0&&(t={});const{x:r,y:s,platform:o,rects:a,elements:l,strategy:d}=e,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:g=!1,padding:b=0}=Tr(t,e),w=gd(b),z=l[g?f==="floating"?"reference":"floating":f],O=co(await o.getClippingRect({element:(i=await(o.isElement==null?void 0:o.isElement(z)))==null||i?z:z.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:h,rootBoundary:u,strategy:d})),U=f==="floating"?{x:r,y:s,width:a.floating.width,height:a.floating.height}:a.reference,T=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),D=await(o.isElement==null?void 0:o.isElement(T))?await(o.getScale==null?void 0:o.getScale(T))||{x:1,y:1}:{x:1,y:1},R=co(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:U,offsetParent:T,strategy:d}):U);return{top:(O.top-R.top+w.top)/D.y,bottom:(R.bottom-O.bottom+w.bottom)/D.y,left:(O.left-R.left+w.left)/D.x,right:(R.right-O.right+w.right)/D.x}}const Eb=async(e,t,i)=>{const{placement:r="bottom",strategy:s="absolute",middleware:o=[],platform:a}=i,l=o.filter(Boolean),d=await(a.isRTL==null?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:u,y:f}=Dl(h,r,d),g=r,b={},w=0;for(let z=0;z<l.length;z++){var _;const{name:O,fn:U}=l[z],{x:T,y:D,data:R,reset:F}=await U({x:u,y:f,initialPlacement:r,placement:g,strategy:s,middlewareData:b,rects:h,platform:{...a,detectOverflow:(_=a.detectOverflow)!=null?_:Cb},elements:{reference:e,floating:t}});u=T??u,f=D??f,b={...b,[O]:{...b[O],...R}},F&&w<=50&&(w++,typeof F=="object"&&(F.placement&&(g=F.placement),F.rects&&(h=F.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:s}):F.rects),{x:u,y:f}=Dl(h,g,d)),z=-1)}return{x:u,y:f,placement:g,strategy:s,middlewareData:b}},$b=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:r,placement:s,rects:o,platform:a,elements:l,middlewareData:d}=t,{element:h,padding:u=0}=Tr(e,t)||{};if(h==null)return{};const f=gd(u),g={x:i,y:r},b=En(s),w=Cn(b),_=await a.getDimensions(h),z=b==="y",O=z?"top":"left",U=z?"bottom":"right",T=z?"clientHeight":"clientWidth",D=o.reference[w]+o.reference[b]-g[b]-o.floating[w],R=g[b]-o.reference[b],F=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let ae=F?F[T]:0;(!ae||!await(a.isElement==null?void 0:a.isElement(F)))&&(ae=l.floating[T]||o.floating[w]);const we=D/2-R/2,ge=ae/2-_[w]/2-1,ye=vi(f[O],ge),Ke=vi(f[U],ge),De=ye,qe=ae-_[w]-Ke,Ee=ae/2-_[w]/2+we,Re=Na(De,Ee,qe),H=!d.arrow&&Dr(s)!=null&&Ee!==Re&&o.reference[w]/2-(Ee<De?ye:Ke)-_[w]/2<0,He=H?Ee<De?Ee-De:Ee-qe:0;return{[b]:g[b]+He,data:{[b]:Re,centerOffset:Ee-Re-He,...H&&{alignmentOffset:He}},reset:H}}}),Sb=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,r;const{placement:s,middlewareData:o,rects:a,initialPlacement:l,platform:d,elements:h}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:_=!0,...z}=Tr(e,t);if((i=o.arrow)!=null&&i.alignmentOffset)return{};const O=wi(s),U=Qt(l),T=wi(l)===l,D=await(d.isRTL==null?void 0:d.isRTL(h.floating)),R=g||(T||!_?[lo(l)]:bb(l)),F=w!=="none";!g&&F&&R.push(...xb(l,_,w,D));const ae=[l,...R],we=await d.detectOverflow(t,z),ge=[];let ye=((r=o.flip)==null?void 0:r.overflows)||[];if(u&&ge.push(we[O]),f){const Ee=gb(s,a,D);ge.push(we[Ee[0]],we[Ee[1]])}if(ye=[...ye,{placement:s,overflows:ge}],!ge.every(Ee=>Ee<=0)){var Ke,De;const Ee=(((Ke=o.flip)==null?void 0:Ke.index)||0)+1,Re=ae[Ee];if(Re&&(!(f==="alignment"?U!==Qt(Re):!1)||ye.every(Ye=>Qt(Ye.placement)===U?Ye.overflows[0]>0:!0)))return{data:{index:Ee,overflows:ye},reset:{placement:Re}};let H=(De=ye.filter(He=>He.overflows[0]<=0).sort((He,Ye)=>He.overflows[1]-Ye.overflows[1])[0])==null?void 0:De.placement;if(!H)switch(b){case"bestFit":{var qe;const He=(qe=ye.filter(Ye=>{if(F){const $t=Qt(Ye.placement);return $t===U||$t==="y"}return!0}).map(Ye=>[Ye.placement,Ye.overflows.filter($t=>$t>0).reduce(($t,Si)=>$t+Si,0)]).sort((Ye,$t)=>Ye[1]-$t[1])[0])==null?void 0:qe[0];He&&(H=He);break}case"initialPlacement":H=l;break}if(s!==H)return{reset:{placement:H}}}return{}}}},Ab=new Set(["left","top"]);async function _b(e,t){const{placement:i,platform:r,elements:s}=e,o=await(r.isRTL==null?void 0:r.isRTL(s.floating)),a=wi(i),l=Dr(i),d=Qt(i)==="y",h=Ab.has(a)?-1:1,u=o&&d?-1:1,f=Tr(t,e);let{mainAxis:g,crossAxis:b,alignmentAxis:w}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return l&&typeof w=="number"&&(b=l==="end"?w*-1:w),d?{x:b*u,y:g*h}:{x:g*h,y:b*u}}const Lb=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var i,r;const{x:s,y:o,placement:a,middlewareData:l}=t,d=await _b(t,e);return a===((i=l.offset)==null?void 0:i.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:s+d.x,y:o+d.y,data:{...d,placement:a}}}}},Tb=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:r,placement:s,platform:o}=t,{mainAxis:a=!0,crossAxis:l=!1,limiter:d={fn:O=>{let{x:U,y:T}=O;return{x:U,y:T}}},...h}=Tr(e,t),u={x:i,y:r},f=await o.detectOverflow(t,h),g=Qt(wi(s)),b=md(g);let w=u[b],_=u[g];if(a){const O=b==="y"?"top":"left",U=b==="y"?"bottom":"right",T=w+f[O],D=w-f[U];w=Na(T,w,D)}if(l){const O=g==="y"?"top":"left",U=g==="y"?"bottom":"right",T=_+f[O],D=_-f[U];_=Na(T,_,D)}const z=d.fn({...t,[b]:w,[g]:_});return{...z,data:{x:z.x-i,y:z.y-r,enabled:{[b]:a,[g]:l}}}}}},Db=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var i,r;const{placement:s,rects:o,platform:a,elements:l}=t,{apply:d=()=>{},...h}=Tr(e,t),u=await a.detectOverflow(t,h),f=wi(s),g=Dr(s),b=Qt(s)==="y",{width:w,height:_}=o.floating;let z,O;f==="top"||f==="bottom"?(z=f,O=g===(await(a.isRTL==null?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(O=f,z=g==="end"?"top":"bottom");const U=_-u.top-u.bottom,T=w-u.left-u.right,D=vi(_-u[z],U),R=vi(w-u[O],T),F=!t.middlewareData.shift;let ae=D,we=R;if((i=t.middlewareData.shift)!=null&&i.enabled.x&&(we=T),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(ae=U),F&&!g){const ye=pt(u.left,0),Ke=pt(u.right,0),De=pt(u.top,0),qe=pt(u.bottom,0);b?we=w-2*(ye!==0||Ke!==0?ye+Ke:pt(u.left,u.right)):ae=_-2*(De!==0||qe!==0?De+qe:pt(u.top,u.bottom))}await d({...t,availableWidth:we,availableHeight:ae});const ge=await a.getDimensions(l.floating);return w!==ge.width||_!==ge.height?{reset:{rects:!0}}:{}}}};function Ro(){return typeof window<"u"}function Rr(e){return bd(e)?(e.nodeName||"").toLowerCase():"#document"}function bt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Gt(e){var t;return(t=(bd(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function bd(e){return Ro()?e instanceof Node||e instanceof bt(e).Node:!1}function Rt(e){return Ro()?e instanceof Element||e instanceof bt(e).Element:!1}function Vt(e){return Ro()?e instanceof HTMLElement||e instanceof bt(e).HTMLElement:!1}function Rl(e){return!Ro()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof bt(e).ShadowRoot}const Rb=new Set(["inline","contents"]);function ys(e){const{overflow:t,overflowX:i,overflowY:r,display:s}=zt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!Rb.has(s)}const zb=new Set(["table","td","th"]);function Ob(e){return zb.has(Rr(e))}const Ib=[":popover-open",":modal"];function zo(e){return Ib.some(t=>{try{return e.matches(t)}catch{return!1}})}const Pb=["transform","translate","scale","rotate","perspective"],Mb=["transform","translate","scale","rotate","perspective","filter"],Nb=["paint","layout","strict","content"];function Oo(e){const t=$n(),i=Rt(e)?zt(e):e;return Pb.some(r=>i[r]?i[r]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||Mb.some(r=>(i.willChange||"").includes(r))||Nb.some(r=>(i.contain||"").includes(r))}function Fb(e){let t=yi(e);for(;Vt(t)&&!vr(t);){if(Oo(t))return t;if(zo(t))return null;t=yi(t)}return null}function $n(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Bb=new Set(["html","body","#document"]);function vr(e){return Bb.has(Rr(e))}function zt(e){return bt(e).getComputedStyle(e)}function Io(e){return Rt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function yi(e){if(Rr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Rl(e)&&e.host||Gt(e);return Rl(t)?t.host:t}function vd(e){const t=yi(e);return vr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Vt(t)&&ys(t)?t:vd(t)}function wr(e,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);const s=vd(e),o=s===((r=e.ownerDocument)==null?void 0:r.body),a=bt(s);if(o){const l=Ba(a);return t.concat(a,a.visualViewport||[],ys(s)?s:[],l&&i?wr(l):[])}return t.concat(s,wr(s,[],i))}function Ba(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function wd(e){const t=zt(e);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const s=Vt(e),o=s?e.offsetWidth:i,a=s?e.offsetHeight:r,l=no(i)!==o||no(r)!==a;return l&&(i=o,r=a),{width:i,height:r,$:l}}function Sn(e){return Rt(e)?e:e.contextElement}function ur(e){const t=Sn(e);if(!Vt(t))return Bt(1);const i=t.getBoundingClientRect(),{width:r,height:s,$:o}=wd(t);let a=(o?no(i.width):i.width)/r,l=(o?no(i.height):i.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Ub=Bt(0);function yd(e){const t=bt(e);return!$n()||!t.visualViewport?Ub:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Vb(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==bt(e)?!1:t}function Vi(e,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);const s=e.getBoundingClientRect(),o=Sn(e);let a=Bt(1);t&&(r?Rt(r)&&(a=ur(r)):a=ur(e));const l=Vb(o,i,r)?yd(o):Bt(0);let d=(s.left+l.x)/a.x,h=(s.top+l.y)/a.y,u=s.width/a.x,f=s.height/a.y;if(o){const g=bt(o),b=r&&Rt(r)?bt(r):r;let w=g,_=Ba(w);for(;_&&r&&b!==w;){const z=ur(_),O=_.getBoundingClientRect(),U=zt(_),T=O.left+(_.clientLeft+parseFloat(U.paddingLeft))*z.x,D=O.top+(_.clientTop+parseFloat(U.paddingTop))*z.y;d*=z.x,h*=z.y,u*=z.x,f*=z.y,d+=T,h+=D,w=bt(_),_=Ba(w)}}return co({width:u,height:f,x:d,y:h})}function Po(e,t){const i=Io(e).scrollLeft;return t?t.left+i:Vi(Gt(e)).left+i}function xd(e,t){const i=e.getBoundingClientRect(),r=i.left+t.scrollLeft-Po(e,i),s=i.top+t.scrollTop;return{x:r,y:s}}function qb(e){let{elements:t,rect:i,offsetParent:r,strategy:s}=e;const o=s==="fixed",a=Gt(r),l=t?zo(t.floating):!1;if(r===a||l&&o)return i;let d={scrollLeft:0,scrollTop:0},h=Bt(1);const u=Bt(0),f=Vt(r);if((f||!f&&!o)&&((Rr(r)!=="body"||ys(a))&&(d=Io(r)),Vt(r))){const b=Vi(r);h=ur(r),u.x=b.x+r.clientLeft,u.y=b.y+r.clientTop}const g=a&&!f&&!o?xd(a,d):Bt(0);return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-d.scrollLeft*h.x+u.x+g.x,y:i.y*h.y-d.scrollTop*h.y+u.y+g.y}}function Hb(e){return Array.from(e.getClientRects())}function Wb(e){const t=Gt(e),i=Io(e),r=e.ownerDocument.body,s=pt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=pt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-i.scrollLeft+Po(e);const l=-i.scrollTop;return zt(r).direction==="rtl"&&(a+=pt(t.clientWidth,r.clientWidth)-s),{width:s,height:o,x:a,y:l}}const zl=25;function jb(e,t){const i=bt(e),r=Gt(e),s=i.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,d=0;if(s){o=s.width,a=s.height;const u=$n();(!u||u&&t==="fixed")&&(l=s.offsetLeft,d=s.offsetTop)}const h=Po(r);if(h<=0){const u=r.ownerDocument,f=u.body,g=getComputedStyle(f),b=u.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,w=Math.abs(r.clientWidth-f.clientWidth-b);w<=zl&&(o-=w)}else h<=zl&&(o+=h);return{width:o,height:a,x:l,y:d}}const Xb=new Set(["absolute","fixed"]);function Gb(e,t){const i=Vi(e,!0,t==="fixed"),r=i.top+e.clientTop,s=i.left+e.clientLeft,o=Vt(e)?ur(e):Bt(1),a=e.clientWidth*o.x,l=e.clientHeight*o.y,d=s*o.x,h=r*o.y;return{width:a,height:l,x:d,y:h}}function Ol(e,t,i){let r;if(t==="viewport")r=jb(e,i);else if(t==="document")r=Wb(Gt(e));else if(Rt(t))r=Gb(t,i);else{const s=yd(e);r={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return co(r)}function kd(e,t){const i=yi(e);return i===t||!Rt(i)||vr(i)?!1:zt(i).position==="fixed"||kd(i,t)}function Kb(e,t){const i=t.get(e);if(i)return i;let r=wr(e,[],!1).filter(l=>Rt(l)&&Rr(l)!=="body"),s=null;const o=zt(e).position==="fixed";let a=o?yi(e):e;for(;Rt(a)&&!vr(a);){const l=zt(a),d=Oo(a);!d&&l.position==="fixed"&&(s=null),(o?!d&&!s:!d&&l.position==="static"&&!!s&&Xb.has(s.position)||ys(a)&&!d&&kd(e,a))?r=r.filter(u=>u!==a):s=l,a=yi(a)}return t.set(e,r),r}function Yb(e){let{element:t,boundary:i,rootBoundary:r,strategy:s}=e;const a=[...i==="clippingAncestors"?zo(t)?[]:Kb(t,this._c):[].concat(i),r],l=a[0],d=a.reduce((h,u)=>{const f=Ol(t,u,s);return h.top=pt(f.top,h.top),h.right=vi(f.right,h.right),h.bottom=vi(f.bottom,h.bottom),h.left=pt(f.left,h.left),h},Ol(t,l,s));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function Zb(e){const{width:t,height:i}=wd(e);return{width:t,height:i}}function Qb(e,t,i){const r=Vt(t),s=Gt(t),o=i==="fixed",a=Vi(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const d=Bt(0);function h(){d.x=Po(s)}if(r||!r&&!o)if((Rr(t)!=="body"||ys(s))&&(l=Io(t)),r){const b=Vi(t,!0,o,t);d.x=b.x+t.clientLeft,d.y=b.y+t.clientTop}else s&&h();o&&!r&&s&&h();const u=s&&!r&&!o?xd(s,l):Bt(0),f=a.left+l.scrollLeft-d.x-u.x,g=a.top+l.scrollTop-d.y-u.y;return{x:f,y:g,width:a.width,height:a.height}}function da(e){return zt(e).position==="static"}function Il(e,t){if(!Vt(e)||zt(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return Gt(e)===i&&(i=i.ownerDocument.body),i}function Cd(e,t){const i=bt(e);if(zo(e))return i;if(!Vt(e)){let s=yi(e);for(;s&&!vr(s);){if(Rt(s)&&!da(s))return s;s=yi(s)}return i}let r=Il(e,t);for(;r&&Ob(r)&&da(r);)r=Il(r,t);return r&&vr(r)&&da(r)&&!Oo(r)?i:r||Fb(e)||i}const Jb=async function(e){const t=this.getOffsetParent||Cd,i=this.getDimensions,r=await i(e.floating);return{reference:Qb(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function e0(e){return zt(e).direction==="rtl"}const Hs={convertOffsetParentRelativeRectToViewportRelativeRect:qb,getDocumentElement:Gt,getClippingRect:Yb,getOffsetParent:Cd,getElementRects:Jb,getClientRects:Hb,getDimensions:Zb,getScale:ur,isElement:Rt,isRTL:e0};function Ed(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function t0(e,t){let i=null,r;const s=Gt(e);function o(){var l;clearTimeout(r),(l=i)==null||l.disconnect(),i=null}function a(l,d){l===void 0&&(l=!1),d===void 0&&(d=1),o();const h=e.getBoundingClientRect(),{left:u,top:f,width:g,height:b}=h;if(l||t(),!g||!b)return;const w=Ps(f),_=Ps(s.clientWidth-(u+g)),z=Ps(s.clientHeight-(f+b)),O=Ps(u),T={rootMargin:-w+"px "+-_+"px "+-z+"px "+-O+"px",threshold:pt(0,vi(1,d))||1};let D=!0;function R(F){const ae=F[0].intersectionRatio;if(ae!==d){if(!D)return a();ae?a(!1,ae):r=setTimeout(()=>{a(!1,1e-7)},1e3)}ae===1&&!Ed(h,e.getBoundingClientRect())&&a(),D=!1}try{i=new IntersectionObserver(R,{...T,root:s.ownerDocument})}catch{i=new IntersectionObserver(R,T)}i.observe(e)}return a(!0),o}function $d(e,t,i,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:d=!1}=r,h=Sn(e),u=s||o?[...h?wr(h):[],...wr(t)]:[];u.forEach(O=>{s&&O.addEventListener("scroll",i,{passive:!0}),o&&O.addEventListener("resize",i)});const f=h&&l?t0(h,i):null;let g=-1,b=null;a&&(b=new ResizeObserver(O=>{let[U]=O;U&&U.target===h&&b&&(b.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var T;(T=b)==null||T.observe(t)})),i()}),h&&!d&&b.observe(h),b.observe(t));let w,_=d?Vi(e):null;d&&z();function z(){const O=Vi(e);_&&!Ed(_,O)&&i(),_=O,w=requestAnimationFrame(z)}return i(),()=>{var O;u.forEach(U=>{s&&U.removeEventListener("scroll",i),o&&U.removeEventListener("resize",i)}),f?.(),(O=b)==null||O.disconnect(),b=null,d&&cancelAnimationFrame(w)}}const Sd=Lb,Ad=Tb,_d=Sb,Pl=Db,i0=$b,Ld=(e,t,i)=>{const r=new Map,s={platform:Hs,...i},o={...s.platform,_c:r};return Eb(e,t,{...s,platform:o})};function r0(e){return s0(e)}function ha(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function s0(e){for(let t=e;t;t=ha(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=ha(e);t;t=ha(t)){if(!(t instanceof Element))continue;const i=getComputedStyle(t);if(i.display!=="contents"&&(i.position!=="static"||Oo(i)||t.tagName==="BODY"))return t}return null}function Ml(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var Ms=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),oe=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let r=0,s=0,o=0,a=0,l=0,d=0,h=0,u=0;i?e.top<t.top?(r=e.left,s=e.bottom,o=e.right,a=e.bottom,l=t.left,d=t.top,h=t.right,u=t.top):(r=t.left,s=t.bottom,o=t.right,a=t.bottom,l=e.left,d=e.top,h=e.right,u=e.top):e.left<t.left?(r=e.right,s=e.top,o=t.left,a=t.top,l=e.right,d=e.bottom,h=t.left,u=t.bottom):(r=t.right,s=t.top,o=e.left,a=e.top,l=t.right,d=t.bottom,h=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Ml(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=$d(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;const e=[Sd({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Pl({apply:({rects:r})=>{const s=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${r.reference.width}px`:"",this.popup.style.height=o?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let t;Ms&&!Ml(this.anchor)&&this.boundary==="scroll"&&(t=wr(this.anchorEl).filter(r=>r instanceof Element)),this.flip&&e.push(_d({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Ad({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Pl({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(i0({element:this.arrowEl,padding:this.arrowPadding}));const i=Ms?r=>Hs.getOffsetParent(r,r0):Hs.getOffsetParent;Ld(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:Ms?"absolute":"fixed",platform:{...Hs,getOffsetParent:i}}).then(({x:r,y:s,middlewareData:o,placement:a})=>{const l=this.localize.dir()==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[a.split("-")[0]];if(this.setAttribute("data-current-placement",a),Object.assign(this.popup.style,{left:`${r}px`,top:`${s}px`}),this.arrow){const h=o.arrow.x,u=o.arrow.y;let f="",g="",b="",w="";if(this.arrowPlacement==="start"){const _=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",g=l?_:"",w=l?"":_}else if(this.arrowPlacement==="end"){const _=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";g=l?"":_,w=l?_:"",b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(w=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(w=typeof h=="number"?`${h}px`:"",f=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:f,right:g,bottom:b,left:w,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new fd)}render(){return p`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${N({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${N({popup:!0,"popup-active":this.active,"popup-fixed":!Ms,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?p`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};oe.css=ub;n([$(".popup")],oe.prototype,"popup",2);n([$(".arrow")],oe.prototype,"arrowEl",2);n([c()],oe.prototype,"anchor",2);n([c({type:Boolean,reflect:!0})],oe.prototype,"active",2);n([c({reflect:!0})],oe.prototype,"placement",2);n([c()],oe.prototype,"boundary",2);n([c({type:Number})],oe.prototype,"distance",2);n([c({type:Number})],oe.prototype,"skidding",2);n([c({type:Boolean})],oe.prototype,"arrow",2);n([c({attribute:"arrow-placement"})],oe.prototype,"arrowPlacement",2);n([c({attribute:"arrow-padding",type:Number})],oe.prototype,"arrowPadding",2);n([c({type:Boolean})],oe.prototype,"flip",2);n([c({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],oe.prototype,"flipFallbackPlacements",2);n([c({attribute:"flip-fallback-strategy"})],oe.prototype,"flipFallbackStrategy",2);n([c({type:Object})],oe.prototype,"flipBoundary",2);n([c({attribute:"flip-padding",type:Number})],oe.prototype,"flipPadding",2);n([c({type:Boolean})],oe.prototype,"shift",2);n([c({type:Object})],oe.prototype,"shiftBoundary",2);n([c({attribute:"shift-padding",type:Number})],oe.prototype,"shiftPadding",2);n([c({attribute:"auto-size"})],oe.prototype,"autoSize",2);n([c()],oe.prototype,"sync",2);n([c({type:Object})],oe.prototype,"autoSizeBoundary",2);n([c({attribute:"auto-size-padding",type:Number})],oe.prototype,"autoSizePadding",2);n([c({attribute:"hover-bridge",type:Boolean})],oe.prototype,"hoverBridge",2);oe=n([C("wa-popup")],oe);var o0=A`
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
`;var yr=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.position=50}handleDrag(e){const{width:t}=this.getBoundingClientRect(),i=this.localize.dir()==="rtl";e.preventDefault(),rs(this,{onMove:r=>{this.customStates.set("dragging",!0),this.position=parseFloat(G(r/t*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:e})}handleKeyDown(e){const t=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const r=e.shiftKey?10:1;let s=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight")&&(s-=r),(t&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft")&&(s+=r),e.key==="Home"&&(s=0),e.key==="End"&&(s=100),s=G(s,0,100),this.position=s}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return p`
      <div id="comparison" class="image" part="base">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${pe({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${pe({left:e?`${100-this.position}%`:`${this.position}%`})}
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
    `}};yr.css=o0;n([$(".handle")],yr.prototype,"handle",2);n([c({type:Number,reflect:!0})],yr.prototype,"position",2);n([S("position",{waitUntilFirstUpdate:!0})],yr.prototype,"handlePositionChange",1);yr=n([C("wa-comparison")],yr);var a0=class extends Event{constructor(e){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var n0=A`
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
`;var Be=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),i=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]");let s=this.from,o="";i?[s,o]=this.from.trim().split("."):r&&([s,o]=this.from.trim().replace(/\]$/,"").split("["));const a="getElementById"in t?t.getElementById(s):null;a?r?e=a.getAttribute(o)||"":i?e=a[o]||"":e=a.textContent||"":(this.showStatus("error"),this.dispatchEvent(new hr))}if(!e)this.showStatus("error"),this.dispatchEvent(new hr);else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.dispatchEvent(new a0({value:e}))}catch{this.showStatus("error"),this.dispatchEvent(new hr)}}async showStatus(e){const t=e==="success"?this.successIcon:this.errorIcon;await he(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=e,t.hidden=!1,await he(t,"show"),setTimeout(async()=>{await he(t,"hide"),t.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await he(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return p`
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
          class=${N({"copy-button":!0,"copy-button-success":this.status==="success","copy-button-error":this.status==="error"})}
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
    `}};Be.css=[hd,n0];n([$('slot[name="copy-icon"]')],Be.prototype,"copyIcon",2);n([$('slot[name="success-icon"]')],Be.prototype,"successIcon",2);n([$('slot[name="error-icon"]')],Be.prototype,"errorIcon",2);n([$("wa-tooltip")],Be.prototype,"tooltip",2);n([E()],Be.prototype,"isCopying",2);n([E()],Be.prototype,"status",2);n([c()],Be.prototype,"value",2);n([c()],Be.prototype,"from",2);n([c({type:Boolean,reflect:!0})],Be.prototype,"disabled",2);n([c({attribute:"copy-label"})],Be.prototype,"copyLabel",2);n([c({attribute:"success-label"})],Be.prototype,"successLabel",2);n([c({attribute:"error-label"})],Be.prototype,"errorLabel",2);n([c({attribute:"feedback-duration",type:Number})],Be.prototype,"feedbackDuration",2);n([c({attribute:"tooltip-placement"})],Be.prototype,"tooltipPlacement",2);Be=n([C("wa-copy-button")],Be);var l0=A`
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
`;var Qi=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Ji=class extends Event{constructor(e){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};var er=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var tr=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};var me=class extends M{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=!!this.anchor?.matches(":hover"),t=this.matches(":hover");if(e||t)return;clearTimeout(this.hoverTimeout),e||t||(this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay))}}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=To("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}addToAriaLabelledBy(e,t){const r=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);r.includes(t)||(r.push(t),e.setAttribute("aria-labelledby",r.join(" ")))}removeFromAriaLabelledBy(e,t){const s=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(o=>o!==t);s.length>0?e.setAttribute("aria-labelledby",s.join(" ")):e.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const e=new Qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),this.body.hidden=!1,this.popup.active=!0,await he(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new tr)}else{const e=new Ji;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),await he(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new er)}}handleForChange(){const e=this.getRootNode();if(!e)return;const t=this.for?e.getElementById(this.for):null,i=this.anchor;if(t===i)return;const{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener("blur",this.handleBlur,{capture:!0,signal:r}),t.addEventListener("focus",this.handleFocus,{capture:!0,signal:r}),t.addEventListener("click",this.handleClick,{signal:r}),t.addEventListener("mouseover",this.handleMouseOver,{signal:r}),t.addEventListener("mouseout",this.handleMouseOut,{signal:r})),i&&(this.removeFromAriaLabelledBy(i,this.id),i.removeEventListener("blur",this.handleBlur,{capture:!0}),i.removeEventListener("focus",this.handleFocus,{capture:!0}),i.removeEventListener("click",this.handleClick),i.removeEventListener("mouseover",this.handleMouseOver),i.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Dt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Dt(this,"wa-after-hide")}render(){return p`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${N({tooltip:!0,"tooltip-open":this.open})}
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
    `}};me.css=l0;me.dependencies={"wa-popup":oe};n([$("slot:not([name])")],me.prototype,"defaultSlot",2);n([$(".body")],me.prototype,"body",2);n([$("wa-popup")],me.prototype,"popup",2);n([c()],me.prototype,"placement",2);n([c({type:Boolean,reflect:!0})],me.prototype,"disabled",2);n([c({type:Number})],me.prototype,"distance",2);n([c({type:Boolean,reflect:!0})],me.prototype,"open",2);n([c({type:Number})],me.prototype,"skidding",2);n([c({attribute:"show-delay",type:Number})],me.prototype,"showDelay",2);n([c({attribute:"hide-delay",type:Number})],me.prototype,"hideDelay",2);n([c()],me.prototype,"trigger",2);n([c({attribute:"without-arrow",type:Boolean,reflect:!0})],me.prototype,"withoutArrow",2);n([c()],me.prototype,"for",2);n([E()],me.prototype,"anchor",2);n([S("open",{waitUntilFirstUpdate:!0})],me.prototype,"handleOpenChange",1);n([S("for")],me.prototype,"handleForChange",1);n([S(["distance","placement","skidding"])],me.prototype,"handleOptionsChange",1);n([S("disabled")],me.prototype,"handleDisabledChange",1);me=n([C("wa-tooltip")],me);var c0=A`
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
`;var Qe=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(e){e.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(e){e.composedPath().some(r=>{if(!(r instanceof HTMLElement))return!1;const s=r.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(s)?!0:r instanceof ce?!("disabled"in r)||!r.disabled:!1})||(e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(i=>{i!==this&&i.open&&(i.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const e=new Qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const t=ao(getComputedStyle(this.body).getPropertyValue("--show-duration"));await oo(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:t,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new tr)}else{const e=new Ji;if(this.dispatchEvent(e),e.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const t=ao(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await oo(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:t,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new er)}}async show(){if(!(this.open||this.disabled))return this.open=!0,Dt(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Dt(this,"wa-after-hide")}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return p`
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
              <wa-icon library="system" variant="solid" name=${e?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${e?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
          </span>
        </summary>

        <div
          class=${N({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};Qe.css=c0;n([$("details")],Qe.prototype,"details",2);n([$("summary")],Qe.prototype,"header",2);n([$(".body")],Qe.prototype,"body",2);n([$(".expand-icon-slot")],Qe.prototype,"expandIconSlot",2);n([E()],Qe.prototype,"isAnimating",2);n([c({type:Boolean,reflect:!0})],Qe.prototype,"open",2);n([c()],Qe.prototype,"summary",2);n([c({reflect:!0})],Qe.prototype,"name",2);n([c({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2);n([c({reflect:!0})],Qe.prototype,"appearance",2);n([c({attribute:"icon-placement",reflect:!0})],Qe.prototype,"iconPlacement",2);n([S("open",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleOpenChange",1);Qe=n([C("wa-details")],Qe);var d0=A`
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
`;function h0(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Ua=new Set;function u0(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function p0(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function ho(e){if(Ua.add(e),!document.documentElement.classList.contains("wa-scroll-lock")){const t=u0()+p0();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),t<2&&(i=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",i),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${t}px`)}}function uo(e){Ua.delete(e),Ua.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function Va(e,t,i="vertical",r="smooth"){const s=h0(e,t),o=s.top+t.scrollTop,a=s.left+t.scrollLeft,l=t.scrollLeft,d=t.scrollLeft+t.offsetWidth,h=t.scrollTop,u=t.scrollTop+t.offsetHeight;(i==="horizontal"||i==="both")&&(a<l?t.scrollTo({left:a,behavior:r}):a+e.clientWidth>d&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:r})),(i==="vertical"||i==="both")&&(o<h?t.scrollTo({top:o,behavior:r}):o+e.clientHeight>u&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:r}))}function Mo(e){return e.split(" ").map(t=>t.trim()).filter(t=>t!=="")}var ri=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.hasSlotController=new nt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),ho(this))}disconnectedCallback(){super.disconnectedCallback(),uo(this),this.removeOpenListeners()}async requestClose(e){const t=new Ji({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,he(this.dialog,"pulse");return}this.removeOpenListeners(),await he(this.dialog,"hide"),this.open=!1,this.dialog.close(),uo(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.dispatchEvent(new er)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(e){e.preventDefault(),!this.dialog.classList.contains("hide")&&e.target===this.dialog&&this.requestClose(this.dialog)}handleDialogClick(e){const i=e.target.closest('[data-dialog="close"]');i&&(e.stopPropagation(),this.requestClose(i))}async handleDialogPointerDown(e){e.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await he(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const e=new Qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),ho(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.dialog.focus()}),await he(this.dialog,"show"),this.dispatchEvent(new tr)}render(){const e=!this.withoutHeader,t=this.hasSlotController.test("footer");return p`
      <dialog
        part="dialog"
        class=${N({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?p`
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

        ${t?p`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};ri.css=d0;n([$(".dialog")],ri.prototype,"dialog",2);n([c({type:Boolean,reflect:!0})],ri.prototype,"open",2);n([c({reflect:!0})],ri.prototype,"label",2);n([c({attribute:"without-header",type:Boolean,reflect:!0})],ri.prototype,"withoutHeader",2);n([c({attribute:"light-dismiss",type:Boolean})],ri.prototype,"lightDismiss",2);n([S("open",{waitUntilFirstUpdate:!0})],ri.prototype,"handleOpenChange",1);ri=n([C("wa-dialog")],ri);document.addEventListener("click",e=>{const t=e.target.closest("[data-dialog]");if(t instanceof Element){const[i,r]=Mo(t.getAttribute("data-dialog")||"");if(i==="open"&&r?.length){const o=t.getRootNode().getElementById(r);o?.localName==="wa-dialog"?o.open=!0:console.warn(`A dialog with an ID of "${r}" could not be found in this document.`)}}});document.addEventListener("pointerdown",()=>{});var f0=A`
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
`;var ds=class extends M{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};ds.css=f0;n([c({reflect:!0})],ds.prototype,"orientation",2);n([S("orientation")],ds.prototype,"handleVerticalChange",1);ds=n([C("wa-divider")],ds);var m0=A`
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
`;var qt=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.hasSlotController=new nt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),ho(this))}disconnectedCallback(){super.disconnectedCallback(),uo(this),this.removeOpenListeners()}async requestClose(e){const t=new Ji({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,he(this.drawer,"pulse");return}this.removeOpenListeners(),await he(this.drawer,"hide"),this.open=!1,this.drawer.close(),uo(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.dispatchEvent(new er)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(e){e.preventDefault(),!this.drawer.classList.contains("hide")&&e.target===this.drawer&&this.requestClose(this.drawer)}handleDialogClick(e){const i=e.target.closest('[data-drawer="close"]');i&&(e.stopPropagation(),this.requestClose(i))}async handleDialogPointerDown(e){e.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await he(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const e=new Qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),ho(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.drawer.focus()}),await he(this.drawer,"show"),this.dispatchEvent(new tr)}render(){const e=!this.withoutHeader,t=this.hasSlotController.test("footer");return p`
      <dialog
        part="dialog"
        class=${N({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?p`
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

        ${t?p`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};qt.css=m0;n([$(".drawer")],qt.prototype,"drawer",2);n([c({type:Boolean,reflect:!0})],qt.prototype,"open",2);n([c({reflect:!0})],qt.prototype,"label",2);n([c({reflect:!0})],qt.prototype,"placement",2);n([c({attribute:"without-header",type:Boolean,reflect:!0})],qt.prototype,"withoutHeader",2);n([c({attribute:"light-dismiss",type:Boolean})],qt.prototype,"lightDismiss",2);n([S("open",{waitUntilFirstUpdate:!0})],qt.prototype,"handleOpenChange",1);qt=n([C("wa-drawer")],qt);document.addEventListener("click",e=>{const t=e.target.closest("[data-drawer]");if(t instanceof Element){const[i,r]=Mo(t.getAttribute("data-drawer")||"");if(i==="open"&&r?.length){const o=t.getRootNode().getElementById(r);o?.localName==="wa-drawer"?o.open=!0:console.warn(`A drawer with an ID of "${r}" could not be found in this document.`)}}});document.body.addEventListener("pointerdown",()=>{});var g0=class extends Event{constructor(e){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};var b0=A`
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
`;function*Td(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Td(e.shadowRoot.activeElement)))}var ua=new Set,it=class extends M{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new te(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{const t=this.localize.dir()==="rtl";if(e.key==="Escape"){const u=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,u?.focus();return}const i=[...Td()].find(u=>u.localName==="wa-dropdown-item"),r=i?.localName==="wa-dropdown-item",s=this.getCurrentSubmenuItem(),o=!!s;let a,l,d;o?(a=this.getSubmenuItems(s),l=a.find(u=>u.active||u===i),d=l?a.indexOf(l):-1):(a=this.getItems(),l=a.find(u=>u.active||u===i),d=l?a.indexOf(l):-1);let h;if(e.key==="ArrowUp"&&(e.preventDefault(),e.stopPropagation(),d>0?h=a[d-1]:h=a[a.length-1]),e.key==="ArrowDown"&&(e.preventDefault(),e.stopPropagation(),d!==-1&&d<a.length-1?h=a[d+1]:h=a[0]),e.key===(t?"ArrowLeft":"ArrowRight")&&r&&l&&l.hasSubmenu){e.preventDefault(),e.stopPropagation(),l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((f,g)=>f.active=g===0),u[0].focus())},0);return}if(e.key===(t?"ArrowRight":"ArrowLeft")&&o){e.preventDefault(),e.stopPropagation();const u=this.removeFromSubmenuStack();u&&(u.submenuOpen=!1,setTimeout(()=>{u.focus(),u.active=!0,(u.slot==="submenu"?this.getSubmenuItems(u.parentElement):this.getItems()).forEach(g=>{g!==u&&(g.active=!1)})},0));return}if((e.key==="Home"||e.key==="End")&&(e.preventDefault(),e.stopPropagation(),h=e.key==="Home"?a[0]:a[a.length-1]),e.key==="Tab"&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&!(e.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=e.key,a.some(u=>{const f=(u.textContent||"").trim().toLowerCase(),g=this.userTypedQuery.trim().toLowerCase();return f.startsWith(g)?(h=u,!0):!1})),h){e.preventDefault(),e.stopPropagation(),a.forEach(u=>u.active=u===h),h.focus();return}(e.key==="Enter"||e.key===" "&&this.userTypedQuery==="")&&r&&l&&(e.preventDefault(),e.stopPropagation(),l.hasSubmenu?(l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((f,g)=>f.active=g===0),u[0].focus())},0)):this.makeSelection(l))},this.handleDocumentPointerDown=e=>{e.composedPath().some(r=>r instanceof HTMLElement?r===this||r.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{const t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;const i=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()==="rtl",s=r?i.right:i.left,o=r?Math.max(e.clientX,s):Math.min(e.clientX,s),a=Math.max(i.top,Math.min(e.clientY,i.bottom));t.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${o}px`),t.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${a}px`);const l=e.composedPath(),d=t.matches(":hover"),h=!!t.submenuElement?.matches(":hover"),u=d||!!l.find(g=>g===t),f=h||!!l.find(g=>g instanceof HTMLElement&&g.closest('[part="submenu"]')===t.submenuElement);!u&&!f&&setTimeout(()=>{!d&&!h&&(t.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove)}firstUpdated(){this.syncAriaAttributes()}async updated(e){if(e.has("open")){const t=e.get("open");if(t===this.open||t===void 0&&this.open===!1)return;this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}e.has("size")&&this.syncItemSizes()}getItems(e=!1){const t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(i=>i.localName==="wa-dropdown-item");return e?t:t.filter(i=>!i.disabled)}getSubmenuItems(e,t=!1){const i=e.shadowRoot?.querySelector('slot[name="submenu"]')||e.querySelector('slot[name="submenu"]');if(!i)return[];const r=i.assignedElements({flatten:!0}).filter(s=>s.localName==="wa-dropdown-item");return t?r:r.filter(s=>!s.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(t=>t.localName==="wa-dropdown-item").forEach(t=>t.size=this.size)}addToSubmenuStack(e){const t=this.openSubmenuStack.indexOf(e);t!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1):this.openSubmenuStack.push(e)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(t=>{t.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){const t=e.closest('wa-dropdown-item:not([slot="submenu"])');let i;t?i=this.getSubmenuItems(t,!0):i=this.getItems(!0),i.forEach(r=>{r!==e&&r.submenuOpen&&(r.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;const t=new Qi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}if(this.popup.active)return;ua.forEach(r=>r.open=!1),this.popup.active=!0,this.open=!0,ua.add(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await he(this.menu,"show");const i=this.getItems();i.length>0&&(i.forEach((r,s)=>r.active=s===0),i[0].focus()),this.dispatchEvent(new tr)}async hideMenu(){if(!this.popup||!this.menu)return;const e=new Ji({source:this});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}this.open=!1,ua.delete(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await he(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new er)}handleMenuClick(e){const t=e.target.closest("wa-dropdown-item");if(!(!t||t.disabled)){if(t.hasSubmenu){t.submenuOpen||(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),t.submenuOpen=!0),e.stopPropagation();return}this.makeSelection(t)}}async handleMenuSlotChange(){const e=this.getItems(!0);await Promise.all(e.map(r=>r.updateComplete)),this.syncItemSizes();const t=e.some(r=>r.type==="checkbox"),i=e.some(r=>r.hasSubmenu);e.forEach((r,s)=>{r.active=s===0,r.checkboxAdjacent=t,r.submenuAdjacent=i})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){const t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);const t=$d(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);const i=e.submenuElement.querySelector('slot[name="submenu"]');i&&(i.removeEventListener("slotchange",it.handleSubmenuSlotChange),i.addEventListener("slotchange",it.handleSubmenuSlotChange),it.handleSubmenuSlotChange({target:i}))}static handleSubmenuSlotChange(e){const t=e.target;if(!t)return;const i=t.assignedElements().filter(o=>o.localName==="wa-dropdown-item");if(i.length===0)return;const r=i.some(o=>o.hasSubmenu),s=i.some(o=>o.type==="checkbox");i.forEach(o=>{o.submenuAdjacent=r,o.checkboxAdjacent=s})}processSubmenuItems(e){if(!e.submenuElement)return;const t=this.getSubmenuItems(e,!0),i=t.some(r=>r.hasSubmenu);t.forEach(r=>{r.submenuAdjacent=i})}cleanupSubmenuPosition(e){const t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;const i=this.localize.dir()==="rtl"?"left-start":"right-start";Ld(e,e.submenuElement,{placement:i,middleware:[Sd({mainAxis:0,crossAxis:-5}),_d({fallbackStrategy:"bestFit"}),Ad({padding:8})]}).then(({x:r,y:s,placement:o})=>{e.submenuElement.setAttribute("data-placement",o),Object.assign(e.submenuElement.style,{left:`${r}px`,top:`${s}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){e.submenuElement.style.setProperty("--safe-triangle-visible","none");return}e.submenuElement.style.setProperty("--safe-triangle-visible","block");const i=e.submenuElement.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${r?i.right:i.left}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${i.top}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${r?i.right:i.left}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${i.bottom}px`)}makeSelection(e){const t=this.getTrigger();if(e.disabled)return;e.type==="checkbox"&&(e.checked=!e.checked);const i=new g0({item:e});this.dispatchEvent(i),i.defaultPrevented||(this.open=!1,t?.focus())}async syncAriaAttributes(){const e=this.getTrigger();let t;e&&(e.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await e.updateComplete,t=e.shadowRoot.querySelector('[part="base"]')):t=e,t.hasAttribute("id")||t.setAttribute("id",To("wa-dropdown-trigger-")),t.setAttribute("aria-haspopup","menu"),t.setAttribute("aria-expanded",this.open?"true":"false"),this.menu?.setAttribute("aria-expanded","false"))}render(){let e=this.hasUpdated?this.popup?.active:this.open;return p`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${e}
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
    `}};it.css=[Ge,b0];n([$("slot:not([name])")],it.prototype,"defaultSlot",2);n([$("#menu")],it.prototype,"menu",2);n([$("wa-popup")],it.prototype,"popup",2);n([c({type:Boolean,reflect:!0})],it.prototype,"open",2);n([c({reflect:!0})],it.prototype,"size",2);n([c({reflect:!0})],it.prototype,"placement",2);n([c({type:Number})],it.prototype,"distance",2);n([c({type:Number})],it.prototype,"skidding",2);it=n([C("wa-dropdown")],it);var v0=A`
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
`;var Je=class extends M{constructor(){super(...arguments),this.hasSlotController=new nt(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(e){e.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),e.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),e.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),e.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),e.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){const e=this.submenuElement;!this.hasSubmenu||!e||!this.isConnected||(this.notifyParentOfOpening(),e.showPopover?.(),e.hidden=!1,e.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await he(e,"show"),setTimeout(()=>{const t=this.getSubmenuItems();t.length>0&&(t.forEach((i,r)=>i.active=r===0),t[0].focus())},0))}notifyParentOfOpening(){const e=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);const t=this.parentElement;t&&[...t.children].filter(r=>r!==this&&r.localName==="wa-dropdown-item"&&r.getAttribute("slot")===this.getAttribute("slot")&&r.submenuOpen).forEach(r=>{r.submenuOpen=!1})}async closeSubmenu(){const e=this.submenuElement;!this.hasSubmenu||!e||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),e.hidden||(await he(e,"hide"),e?.isConnected&&(e.hidden=!0,e.removeAttribute("data-visible"),e.hidePopover?.())))}getSubmenuItems(){return[...this.children].filter(e=>e.localName==="wa-dropdown-item"&&e.getAttribute("slot")==="submenu"&&!e.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return p`
      ${this.type==="checkbox"?p`
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

      ${this.hasSubmenu?p`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:""}
      ${this.hasSubmenu?p`
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
    `}};Je.css=v0;n([$("#submenu")],Je.prototype,"submenuElement",2);n([c({type:Boolean})],Je.prototype,"active",2);n([c({reflect:!0})],Je.prototype,"variant",2);n([c({reflect:!0})],Je.prototype,"size",2);n([c({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],Je.prototype,"checkboxAdjacent",2);n([c({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],Je.prototype,"submenuAdjacent",2);n([c()],Je.prototype,"value",2);n([c({reflect:!0})],Je.prototype,"type",2);n([c({type:Boolean})],Je.prototype,"checked",2);n([c({type:Boolean,reflect:!0})],Je.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],Je.prototype,"submenuOpen",2);n([E()],Je.prototype,"hasSubmenu",2);Je=n([C("wa-dropdown-item")],Je);var hs=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?e:t,r=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),s=i[r]+this.unit,o=parseFloat((this.value/Math.pow(1e3,r)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:s,unitDisplay:this.display})}};n([c({type:Number})],hs.prototype,"value",2);n([c()],hs.prototype,"unit",2);n([c()],hs.prototype,"display",2);hs=n([C("wa-format-bytes")],hs);var rt=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(e.getMilliseconds()))return;const i=this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t});return p`<time datetime=${e.toISOString()}>${i}</time>`}};n([c()],rt.prototype,"date",2);n([c()],rt.prototype,"weekday",2);n([c()],rt.prototype,"era",2);n([c()],rt.prototype,"year",2);n([c()],rt.prototype,"month",2);n([c()],rt.prototype,"day",2);n([c()],rt.prototype,"hour",2);n([c()],rt.prototype,"minute",2);n([c()],rt.prototype,"second",2);n([c({attribute:"time-zone-name"})],rt.prototype,"timeZoneName",2);n([c({attribute:"time-zone"})],rt.prototype,"timeZone",2);n([c({attribute:"hour-format"})],rt.prototype,"hourFormat",2);rt=n([C("wa-format-date")],rt);var Ct=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};n([c({type:Number})],Ct.prototype,"value",2);n([c()],Ct.prototype,"type",2);n([c({attribute:"without-grouping",type:Boolean})],Ct.prototype,"withoutGrouping",2);n([c()],Ct.prototype,"currency",2);n([c({attribute:"currency-display"})],Ct.prototype,"currencyDisplay",2);n([c({attribute:"minimum-integer-digits",type:Number})],Ct.prototype,"minimumIntegerDigits",2);n([c({attribute:"minimum-fraction-digits",type:Number})],Ct.prototype,"minimumFractionDigits",2);n([c({attribute:"maximum-fraction-digits",type:Number})],Ct.prototype,"maximumFractionDigits",2);n([c({attribute:"minimum-significant-digits",type:Number})],Ct.prototype,"minimumSignificantDigits",2);n([c({attribute:"maximum-significant-digits",type:Number})],Ct.prototype,"maximumSignificantDigits",2);Ct=n([C("wa-format-number")],Ct);var Nl=class extends Event{constructor(e){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var w0=A`
  :host {
    display: block;
  }
`;var pa=new Map;function y0(e,t="cors"){const i=pa.get(e);if(i!==void 0)return Promise.resolve(i);const r=fetch(e,{mode:t}).then(async s=>{const o={ok:s.ok,status:s.status,html:await s.text()};return pa.set(e,o),o});return pa.set(e,r),r}var qi=class extends M{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(i=>t.setAttribute(i.name,i.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await y0(e,this.mode);if(e!==this.src)return;if(!t.ok){this.dispatchEvent(new Nl({status:t.status}));return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.dispatchEvent(new vn)}catch{this.dispatchEvent(new Nl({status:-1}))}}render(){return p`<slot></slot>`}};qi.css=w0;n([c()],qi.prototype,"src",2);n([c()],qi.prototype,"mode",2);n([c({attribute:"allow-scripts",type:Boolean})],qi.prototype,"allowScripts",2);n([S("src")],qi.prototype,"handleSrcChange",1);qi=n([C("wa-include")],qi);var x0=class extends Event{constructor(e){super("wa-intersect",{bubbles:!1,cancelable:!1,composed:!0}),this.detail=e}};var k0=A`
  :host {
    display: contents;
  }
`;var Ot=class extends M{constructor(){super(...arguments),this.intersectionObserver=null,this.observedElements=new Map,this.root=null,this.rootMargin="0px",this.threshold="0",this.intersectClass="",this.once=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}parseThreshold(){return Mo(this.threshold).map(t=>{const i=parseFloat(t);return isNaN(i)?0:G(i,0,1)})}resolveRoot(){if(!this.root)return null;try{const t=this.getRootNode().getElementById(this.root);return t||console.warn(`Root element with ID "${this.root}" could not be found.`,this),t}catch{return console.warn(`Invalid selector for root: "${this.root}"`,this),null}}startObserver(){if(this.stopObserver(),this.disabled)return;const e=this.parseThreshold(),t=this.resolveRoot();this.intersectionObserver=new IntersectionObserver(r=>{r.forEach(s=>{const o=this.observedElements.get(s.target)??!1,a=s.isIntersecting;this.observedElements.set(s.target,a),this.intersectClass&&(a?s.target.classList.add(this.intersectClass):s.target.classList.remove(this.intersectClass));const l=new x0({entry:s});this.dispatchEvent(l),a&&!o&&this.once&&(this.intersectionObserver?.unobserve(s.target),this.observedElements.delete(s.target))})},{root:t,rootMargin:this.rootMargin,threshold:e});const i=this.shadowRoot.querySelector("slot");i!==null&&i.assignedElements({flatten:!0}).forEach(s=>{this.intersectionObserver?.observe(s),this.observedElements.set(s,!1)})}stopObserver(){this.intersectClass&&this.observedElements.forEach((e,t)=>{t.classList.remove(this.intersectClass)}),this.intersectionObserver?.disconnect(),this.intersectionObserver=null,this.observedElements.clear()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleOptionsChange(){this.startObserver()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ot.css=k0;n([c()],Ot.prototype,"root",2);n([c({attribute:"root-margin"})],Ot.prototype,"rootMargin",2);n([c()],Ot.prototype,"threshold",2);n([c({attribute:"intersect-class"})],Ot.prototype,"intersectClass",2);n([c({type:Boolean,reflect:!0})],Ot.prototype,"once",2);n([c({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);n([S("disabled",{waitUntilFirstUpdate:!0})],Ot.prototype,"handleDisabledChange",1);n([S("root",{waitUntilFirstUpdate:!0}),S("rootMargin",{waitUntilFirstUpdate:!0}),S("threshold",{waitUntilFirstUpdate:!0})],Ot.prototype,"handleOptionsChange",1);Ot=n([C("wa-intersection-observer")],Ot);var C0=class extends Event{constructor(e){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var E0=A`
  :host {
    display: contents;
  }
`;var It=class extends M{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.dispatchEvent(new C0({mutationList:e}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return p` <slot></slot> `}};It.css=E0;n([c({reflect:!0})],It.prototype,"attr",2);n([c({attribute:"attr-old-value",type:Boolean,reflect:!0})],It.prototype,"attrOldValue",2);n([c({attribute:"char-data",type:Boolean,reflect:!0})],It.prototype,"charData",2);n([c({attribute:"char-data-old-value",type:Boolean,reflect:!0})],It.prototype,"charDataOldValue",2);n([c({attribute:"child-list",type:Boolean,reflect:!0})],It.prototype,"childList",2);n([c({type:Boolean,reflect:!0})],It.prototype,"disabled",2);n([S("disabled")],It.prototype,"handleDisabledChange",1);n([S("attr",{waitUntilFirstUpdate:!0}),S("attr-old-value",{waitUntilFirstUpdate:!0}),S("char-data",{waitUntilFirstUpdate:!0}),S("char-data-old-value",{waitUntilFirstUpdate:!0}),S("childList",{waitUntilFirstUpdate:!0})],It.prototype,"handleChange",1);It=n([C("wa-mutation-observer")],It);var $0=A`
  .number-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: inherit;
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
    padding: 0;

    &:focus-within {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }

    /* Style disabled inputs */
    &:has(input:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    .number-field {
      background-color: var(--wa-form-control-background-color);
      border-color: var(--wa-form-control-border-color);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-quiet);
          background-color: var(--wa-color-neutral-fill-quiet);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-quiet), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-quiet), var(--wa-color-mix-active));
      }
    }
  }

  :host([appearance='filled']) {
    .number-field {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-color-neutral-fill-quiet);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-normal);
          background-color: var(--wa-color-neutral-fill-normal);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-normal), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-normal), var(--wa-color-mix-active));
      }
    }
  }

  :host([appearance='filled-outlined']) {
    .number-field {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-form-control-border-color);
    }

    .stepper {
      color: var(--wa-color-neutral-on-quiet);

      @media (hover: hover) {
        &:hover:not(:disabled) {
          color: var(--wa-color-neutral-on-normal);
          background-color: var(--wa-color-neutral-fill-normal);
        }
      }

      &:active:not(:disabled) {
        color: color-mix(in oklab, var(--wa-color-neutral-on-normal), var(--wa-color-mix-active));
        background-color: color-mix(in oklab, var(--wa-color-neutral-fill-normal), var(--wa-color-mix-active));
      }
    }
  }

  :host([pill]) {
    .number-field,
    .stepper {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  .number-field {
    /* Show autofill styles over the entire number field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input {
      flex: auto;
      height: 100%;
      width: auto;
      min-width: 0;
      margin: 0;
      padding: 0 var(--wa-form-control-padding-inline);
      outline: none;
      box-shadow: none;
      border: none;
      background-color: transparent;
      font: inherit;
      transition: inherit;
      cursor: inherit;
      -webkit-appearance: none;

      /* Center-align and use tabular numbers for better alignment */
      text-align: center;
      font-variant-numeric: tabular-nums;

      /* Hide the number spinners in Firefox */
      -moz-appearance: textfield;

      /* Hide the number spinners in Chrome/Safari */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        display: none;
      }

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

    &:focus {
      outline: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 1;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start {
    justify-content: start;
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .end {
    justify-content: end;
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  /*
   * Steppers - horizontal layout with minus on start, plus on end
   */

  .stepper {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    height: calc(100% - var(--wa-form-control-border-width) * 2);
    flex: 0 0 auto;
    border: none;
    border-radius: calc(var(--wa-form-control-border-radius) - var(--wa-form-control-border-width) * 2);
    background: transparent;
    cursor: pointer;
    margin: var(--wa-form-control-border-width);
    padding: 0;
    font-size: inherit;
    transition-property: background-color, color;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
    }
  }

  :host([without-steppers]) .stepper {
    display: none;
  }
`;var le=class extends ce{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new nt(this,"hint","label"),this.localize=new te(this),this.title="",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.placeholder="",this.readonly=!1,this.required=!1,this.step=1,this.withoutSteppers=!1,this.inputmode="numeric",this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,ws()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get isAtMin(){if(this.min===void 0)return!1;const e=parseFloat(this.value||"");return!isNaN(e)&&e<=this.min}get isAtMax(){if(this.max===void 0)return!1;const e=parseFloat(this.value||"");return!isNaN(e)&&e>=this.max}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleInput(){this.value=this.input.value}handleKeyDown(e){kn(e,this),(e.key==="ArrowUp"||e.key==="ArrowDown")&&requestAnimationFrame(()=>{this.value!==this.input.value&&(this.value=this.input.value)})}handleStepperClick(e){this.disabled||this.readonly||(e==="up"?this.input.stepUp():this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.input.focus())}maintainFocusOnPointerDown(e){e.preventDefault(),this.input.focus()}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,r=this.hint?!0:!!t;return p`
      <label
        part="form-control-label label"
        class=${N({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="number-field">
        ${this.withoutSteppers?"":p`
              <button
                part="stepper stepper-decrement"
                class="stepper stepper-decrement"
                type="button"
                tabindex="-1"
                aria-label=${this.localize.term("decrement")}
                ?disabled=${this.disabled||this.readonly||this.isAtMin}
                @pointerdown=${this.maintainFocusOnPointerDown}
                @click=${()=>this.handleStepperClick("down")}
              >
                <slot name="decrement-icon">
                  <wa-icon name="minus" library="system"></wa-icon>
                </slot>
              </button>
            `}

        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type="number"
          inputmode=${P(this.inputmode)}
          title=${this.title}
          name=${P(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${P(this.placeholder)}
          min=${P(this.min)}
          max=${P(this.max)}
          step=${P(this.step)}
          .value=${Ui(this.value??"")}
          autocomplete=${P(this.autocomplete)}
          ?autofocus=${this.autofocus}
          enterkeyhint=${P(this.enterkeyhint)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        <slot name="end" part="end" class="end"></slot>

        ${this.withoutSteppers?"":p`
              <button
                part="stepper stepper-increment"
                class="stepper stepper-increment"
                type="button"
                tabindex="-1"
                aria-label=${this.localize.term("increment")}
                ?disabled=${this.disabled||this.readonly||this.isAtMax}
                @pointerdown=${this.maintainFocusOnPointerDown}
                @click=${()=>this.handleStepperClick("up")}
              >
                <slot name="increment-icon">
                  <wa-icon name="plus" library="system"></wa-icon>
                </slot>
              </button>
            `}
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${N({"has-slotted":r})}
        aria-hidden=${r?"false":"true"}
        >${this.hint}</slot
      >
    `}};le.css=[Ge,Xt,$0];le.shadowRootOptions={...ce.shadowRootOptions,delegatesFocus:!0};n([$("input")],le.prototype,"input",2);n([c()],le.prototype,"title",2);n([E()],le.prototype,"value",1);n([c({attribute:"value",reflect:!0})],le.prototype,"defaultValue",2);n([c({reflect:!0})],le.prototype,"size",2);n([c({reflect:!0})],le.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],le.prototype,"pill",2);n([c()],le.prototype,"label",2);n([c({attribute:"hint"})],le.prototype,"hint",2);n([c()],le.prototype,"placeholder",2);n([c({type:Boolean,reflect:!0})],le.prototype,"readonly",2);n([c({type:Boolean,reflect:!0})],le.prototype,"required",2);n([c({type:Number})],le.prototype,"min",2);n([c({type:Number})],le.prototype,"max",2);n([c()],le.prototype,"step",2);n([c({attribute:"without-steppers",type:Boolean})],le.prototype,"withoutSteppers",2);n([c()],le.prototype,"autocomplete",2);n([c({type:Boolean})],le.prototype,"autofocus",2);n([c()],le.prototype,"enterkeyhint",2);n([c()],le.prototype,"inputmode",2);n([c({attribute:"with-label",type:Boolean})],le.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],le.prototype,"withHint",2);n([S("step",{waitUntilFirstUpdate:!0})],le.prototype,"handleStepChange",1);le=n([C("wa-number-input")],le);var S0=A`
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
`;function Qr(e,t=0){if(!e||!globalThis.Node)return"";if(typeof e[Symbol.iterator]=="function")return(Array.isArray(e)?e:[...e]).map(s=>Qr(s,--t)).join("");let i=e;if(i.nodeType===Node.TEXT_NODE)return i.textContent??"";if(i.nodeType===Node.ELEMENT_NODE){let r=i;if(r.hasAttribute("slot")||r.matches("style, script"))return"";if(r instanceof HTMLSlotElement){let s=r.assignedNodes({flatten:!0});if(s.length>0)return Qr(s,--t)}return t>-1?Qr(r,--t):r.textContent??""}return i.hasChildNodes()?Qr(i.childNodes,--t):""}var Pt=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=e=>{e.type==="mouseenter"?this.customStates.set("hover",!0):e.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(e){const t=this._label;this._label=e||"",this._label!==t&&this.requestUpdate("label",t)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?(customElements.whenDefined("wa-select").then(()=>{const e=this.closest("wa-select");e&&(e.handleDefaultSlotChange(),e.selectionChanged?.())}),customElements.whenDefined("wa-combobox").then(()=>{const e=this.closest("wa-combobox");e&&(e.handleDefaultSlotChange(),e.selectionChanged?.())})):this.isInitialized=!0}willUpdate(e){if(e.has("defaultSelected")&&!this.closest("wa-combobox, wa-select")?.hasInteracted){const t=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",t)}super.willUpdate(e)}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),e.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),e.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has("current")&&this.customStates.set("current",this.current)}updateDefaultLabel(){let e=this.defaultLabel;this.defaultLabel=Qr(this).trim();let t=this.defaultLabel!==e;return!this._label&&t&&this.requestUpdate("label",e),t}render(){return p`
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
    `}};Pt.css=S0;n([$(".label")],Pt.prototype,"defaultSlot",2);n([E()],Pt.prototype,"current",2);n([c({reflect:!0})],Pt.prototype,"value",2);n([c({type:Boolean})],Pt.prototype,"disabled",2);n([c({type:Boolean,attribute:!1})],Pt.prototype,"selected",2);n([c({type:Boolean,attribute:"selected"})],Pt.prototype,"defaultSelected",2);n([c()],Pt.prototype,"label",1);n([E()],Pt.prototype,"defaultLabel",2);Pt=n([C("wa-option")],Pt);var A0=A`
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
`;var fa=new Set,Ue=class extends M{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=e=>{e.target.closest('[data-popover="close"]')&&(e.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.preventDefault(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=e=>{this.anchor&&e.composedPath().includes(this.anchor)||e.composedPath().includes(this)||(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=To("wa-popover-")),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.for&&this.anchor&&(this.anchor=null,this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(e){e.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const e=new Qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}fa.forEach(t=>t.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,fa.add(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.dialog.focus()}),await he(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new tr)}else{const e=new Ji;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),fa.delete(this),await he(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new er)}}handleForChange(){const e=this.getRootNode();if(!e)return;const t=this.for?e.getElementById(this.for):null,i=this.anchor;if(t===i)return;const{signal:r}=this.eventController;t&&t.addEventListener("click",this.handleAnchorClick,{signal:r}),i&&i.removeEventListener("click",this.handleAnchorClick),this.anchor=t,this.for&&!t&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,Dt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Dt(this,"wa-after-hide")}render(){return p`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${N({popover:!0,"popover-open":this.open})}
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
    `}};Ue.css=A0;Ue.dependencies={"wa-popup":oe};n([$("dialog")],Ue.prototype,"dialog",2);n([$(".body")],Ue.prototype,"body",2);n([$("wa-popup")],Ue.prototype,"popup",2);n([E()],Ue.prototype,"anchor",2);n([c()],Ue.prototype,"placement",2);n([c({type:Boolean,reflect:!0})],Ue.prototype,"open",2);n([c({type:Number})],Ue.prototype,"distance",2);n([c({type:Number})],Ue.prototype,"skidding",2);n([c()],Ue.prototype,"for",2);n([c({attribute:"without-arrow",type:Boolean,reflect:!0})],Ue.prototype,"withoutArrow",2);n([S("open",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleOpenChange",1);n([S("for")],Ue.prototype,"handleForChange",1);n([S(["distance","placement","skidding"])],Ue.prototype,"handleOptionsChange",1);Ue=n([C("wa-popover")],Ue);var _0=A`
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
`;var xr=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.value=0,this.indeterminate=!1,this.label=""}updated(e){e.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${G(this.value,0,100)}%`)})}render(){return p`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${P(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":p` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};xr.css=_0;n([c({type:Number,reflect:!0})],xr.prototype,"value",2);n([c({type:Boolean,reflect:!0})],xr.prototype,"indeterminate",2);n([c()],xr.prototype,"label",2);xr=n([C("wa-progress-bar")],xr);var L0=A`
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
`;var Hi=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*t,r=i-this.value/100*i;this.indicatorOffset=`${r}px`}}render(){return p`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${pe({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${pe({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};Hi.css=L0;n([$(".indicator")],Hi.prototype,"indicator",2);n([E()],Hi.prototype,"indicatorOffset",2);n([c({type:Number,reflect:!0})],Hi.prototype,"value",2);n([c()],Hi.prototype,"label",2);Hi=n([C("wa-progress-ring")],Hi);const T0="modulepreload",D0=function(e){return"/"+e},Fl={},ve=function(t,i,r){let s=Promise.resolve();if(i&&i.length>0){let d=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=d(i.map(h=>{if(h=D0(h),h in Fl)return;Fl[h]=!0;const u=h.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${f}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":T0,u||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((b,w)=>{g.addEventListener("load",b),g.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};var R0=A`
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
`,ma,vt=class extends M{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="",this.background="",this.radius=0,this.errorCorrection="H",this.generated=!1}firstUpdated(e){super.firstUpdated(e),this.hasUpdated&&this.generate()}generate(){if(!this.hasUpdated)return;if(!ma){ve(()=>import("./qr-creator.es6.min-DtlEF1Ls.js"),[]).then(t=>{ma=t.default,this.generate()});return}this.canvas.style.maxWidth=`${this.size}px`,this.canvas.style.maxHeight=`${this.size}px`;const e=getComputedStyle(this);ma.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill||e.color,background:this.background||null,size:this.size*2},this.canvas),this.generated=!0}render(){return p`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        @transitionend=${e=>{e.propertyName==="color"&&this.generate()}}
      ></canvas>
    `}};vt.css=R0;n([$("canvas")],vt.prototype,"canvas",2);n([c()],vt.prototype,"value",2);n([c()],vt.prototype,"label",2);n([c({type:Number})],vt.prototype,"size",2);n([c()],vt.prototype,"fill",2);n([c()],vt.prototype,"background",2);n([c({type:Number})],vt.prototype,"radius",2);n([c({attribute:"error-correction"})],vt.prototype,"errorCorrection",2);n([E()],vt.prototype,"generated",2);n([S(["background","errorCorrection","fill","radius","size","value"],{waitUntilFirstUpdate:!0})],vt.prototype,"generate",1);vt=n([C("wa-qr-code")],vt);var z0=A`
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
`;var si=class extends ce{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.appearance="default",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(e){if(super.updated(e),e.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has("disabled")||e.has("forceDisabled")){const t=this.disabled||this.forceDisabled;this.customStates.set("disabled",t),this.setAttribute("aria-disabled",t?"true":"false"),t?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return p`
      <span part="control" class="control">
        ${this.checked?p`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};si.css=[Xt,Ge,z0];n([E()],si.prototype,"checked",2);n([E()],si.prototype,"forceDisabled",2);n([c({reflect:!0})],si.prototype,"value",2);n([c({reflect:!0})],si.prototype,"appearance",2);n([c({reflect:!0})],si.prototype,"size",2);n([c({type:Boolean})],si.prototype,"disabled",2);si=n([C("wa-radio")],si);var O0=A`
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
`;var je=class extends ce{constructor(){super(),this.hasSlotController=new nt(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{const t=e.target.closest("wa-radio");if(!t||t.disabled||t.forceDisabled||this.disabled)return;const i=this.value;this.value=t.value,t.checked=!0;const r=this.getAllRadios();for(const s of r)t!==s&&(s.checked=!1,s.setAttribute("tabindex","-1"));this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const e=[Do({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:To("__wa-radio")})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e=="number"&&(e=String(e)),this.valueHasChanged=!0,this._value=e}get validationTarget(){const e=this.querySelector(":is(wa-radio):not([disabled])");if(e)return e}updated(e){(e.has("disabled")||e.has("size")||e.has("value"))&&this.syncRadioElements()}formResetCallback(...e){this.value=this.defaultValue,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();if(e.forEach((t,i)=>{this.size&&t.setAttribute("size",this.size),t.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),t.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),t.toggleAttribute("data-wa-radio-first",i===0),t.toggleAttribute("data-wa-radio-inner",i!==0&&i!==e.length-1),t.toggleAttribute("data-wa-radio-last",i===e.length-1),t.forceDisabled=this.disabled}),await Promise.all(e.map(async t=>{await t.updateComplete,!t.disabled&&t.value===this.value?t.checked=!0:t.checked=!1})),this.disabled)e.forEach(t=>{t.tabIndex=-1});else{const t=e.filter(r=>!r.disabled),i=t.find(r=>r.checked);t.length>0&&(i?t.forEach(r=>{r.tabIndex=r.checked?0:-1}):t.forEach((r,s)=>{r.tabIndex=s===0?0:-1})),e.filter(r=>r.disabled).forEach(r=>{r.tabIndex=-1})}}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const t=this.getAllRadios().filter(l=>!l.disabled);if(t.length<=0)return;e.preventDefault();const i=this.value,r=t.find(l=>l.checked)??t[0],s=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let o=t.indexOf(r)+s;o||(o=0),o<0&&(o=t.length-1),o>t.length-1&&(o=0);const a=t.some(l=>l.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(l=>{l.checked=!1,a||l.setAttribute("tabindex","-1")}),this.value=t[o].value,t[o].checked=!0,a?t[o].shadowRoot.querySelector("button").focus():(t[o].setAttribute("tabindex","0"),t[o].focus()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;const t=this.getAllRadios(),i=t.find(o=>o.checked),r=t.find(o=>!o.disabled),s=i||r;s&&s.focus(e)}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,r=this.hint?!0:!!t;return p`
      <fieldset
        part="form-control"
        class=${N({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class=${N({label:!0,"has-label":i})}
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
          class=${N({"has-slotted":r})}
          aria-hidden=${r?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};je.css=[Ge,Xt,O0];je.shadowRootOptions={...ce.shadowRootOptions,delegatesFocus:!0};n([$("slot:not([name])")],je.prototype,"defaultSlot",2);n([c()],je.prototype,"label",2);n([c({attribute:"hint"})],je.prototype,"hint",2);n([c({reflect:!0})],je.prototype,"name",2);n([c({type:Boolean,reflect:!0})],je.prototype,"disabled",2);n([c({reflect:!0})],je.prototype,"orientation",2);n([E()],je.prototype,"value",1);n([c({attribute:"value",reflect:!0})],je.prototype,"defaultValue",2);n([c({reflect:!0})],je.prototype,"size",2);n([c({type:Boolean,reflect:!0})],je.prototype,"required",2);n([c({type:Boolean,attribute:"with-label"})],je.prototype,"withLabel",2);n([c({type:Boolean,attribute:"with-hint"})],je.prototype,"withHint",2);je=n([C("wa-radio-group")],je);var Bl=class extends Event{constructor(e){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var I0=A`
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
`;var Ve=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=(e,t)=>t?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="medium"}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:i,right:r,width:s}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((r-e)/s*this.max,this.precision):this.roundToPrecision((e-i)/s*this.max,this.precision);return G(o,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl",r=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"){const s=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-s),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"){const s=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+s),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}roundToPrecision(e,t=.5){const i=1/t;return Math.ceil(e*i)/i}handleHoverValueChange(){this.dispatchEvent(new Bl({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new Bl({phase:this.isHovering?"start":"end",value:this.hoverValue}))}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir,t=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,p`
      <div
        part="base"
        class=${N({rating:!0,"rating-readonly":this.readonly,"rating-disabled":this.disabled})}
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
          ${t.map(r=>{const s=i>=r+1;return i>r&&i<r+1?p`
                <span
                  class=${N({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(i)===r+1})}
                  role="presentation"
                >
                  <div
                    style=${pe({clipPath:e?`inset(0 ${(i-r)*100}% 0 0)`:`inset(0 0 0 ${(i-r)*100}%)`})}
                  >
                    ${Jt(this.getSymbol(r+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${pe({clipPath:e?`inset(0 0 0 ${100-(i-r)*100}%)`:`inset(0 ${100-(i-r)*100}% 0 0)`})}
                  >
                    ${Jt(this.getSymbol(r+1,!0))}
                  </div>
                </span>
              `:p`
              <span
                class=${N({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(i)===r+1,"symbol-active":i>=r+1})}
                role="presentation"
              >
                ${Jt(this.getSymbol(r+1,s))}
              </span>
            `})}
        </span>
      </div>
    `}};Ve.css=[Ge,I0];n([$(".rating")],Ve.prototype,"rating",2);n([E()],Ve.prototype,"hoverValue",2);n([E()],Ve.prototype,"isHovering",2);n([c()],Ve.prototype,"label",2);n([c({type:Number})],Ve.prototype,"value",2);n([c({type:Number})],Ve.prototype,"max",2);n([c({type:Number})],Ve.prototype,"precision",2);n([c({type:Boolean,reflect:!0})],Ve.prototype,"readonly",2);n([c({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2);n([c()],Ve.prototype,"getSymbol",2);n([c({reflect:!0})],Ve.prototype,"size",2);n([Ao({passive:!0})],Ve.prototype,"handleTouchMove",1);n([S("hoverValue")],Ve.prototype,"handleHoverValueChange",1);n([S("isHovering")],Ve.prototype,"handleIsHoveringChange",1);Ve=n([C("wa-rating")],Ve);var P0=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],xi=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=t.getTime()-e.getTime(),{unit:r,value:s}=P0.find(o=>Math.abs(i)<o.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/s),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;r==="minute"?o=Ns("second"):r==="hour"?o=Ns("minute"):r==="day"?o=Ns("hour"):o=Ns("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),o)}return p`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};n([E()],xi.prototype,"isoTime",2);n([E()],xi.prototype,"relativeTime",2);n([c()],xi.prototype,"date",2);n([c()],xi.prototype,"format",2);n([c()],xi.prototype,"numeric",2);n([c({type:Boolean})],xi.prototype,"sync",2);xi=n([C("wa-relative-time")],xi);function Ns(e){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return i-Date.now()%i}var M0=class extends Event{constructor(e){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var N0=A`
  :host {
    display: contents;
  }
`;var us=class extends M{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.dispatchEvent(new M0({entries:e}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],t.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return p` <slot @slotchange=${this.handleSlotChange}></slot> `}};us.css=N0;n([c({type:Boolean,reflect:!0})],us.prototype,"disabled",2);n([S("disabled",{waitUntilFirstUpdate:!0})],us.prototype,"handleDisabledChange",1);us=n([C("wa-resize-observer")],us);var F0=A`
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
`;var oi=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(e){e.key==="Home"&&(e.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),e.key==="End"&&(e.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const e=Math.ceil(this.content.clientWidth),t=Math.abs(Math.ceil(this.content.scrollLeft)),r=Math.ceil(this.content.scrollWidth)-e;this.canScroll=r>0;const s=Math.min(1,t/(r*.05)),o=Math.min(1,(r-t)/(r*.05));this.style.setProperty("--start-shadow-opacity",String(s||0)),this.style.setProperty("--end-shadow-opacity",String(o||0))}else{const e=Math.ceil(this.content.clientHeight),t=Math.abs(Math.ceil(this.content.scrollTop)),r=Math.ceil(this.content.scrollHeight)-e;this.canScroll=r>0;const s=Math.min(1,t/(r*.05)),o=Math.min(1,(r-t)/(r*.05));this.style.setProperty("--start-shadow-opacity",String(s||0)),this.style.setProperty("--end-shadow-opacity",String(o||0))}}render(){return p`
      ${this.withoutShadow?"":p`
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
    `}};oi.css=[F0];n([$("#content")],oi.prototype,"content",2);n([E()],oi.prototype,"canScroll",2);n([c({reflect:!0})],oi.prototype,"orientation",2);n([c({attribute:"without-scrollbar",type:Boolean,reflect:!0})],oi.prototype,"withoutScrollbar",2);n([c({attribute:"without-shadow",type:Boolean,reflect:!0})],oi.prototype,"withoutShadow",2);n([Ao({passive:!0})],oi.prototype,"updateScroll",1);oi=n([C("wa-scroller")],oi);var B0=A`
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
`;var Q=class extends ce{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new nt(this,"hint","label"),this.localize=new te(this),this.selectionOrder=new Map,this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=e=>p`
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
          data-value=${e.value}
          @wa-remove=${t=>this.handleTagRemove(t,e)}
        >
          ${e.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,i=t.closest('[part~="clear-button"]')!==null,r=t.closest("wa-button")!==null;if(!(i||r)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const s=this.getAllOptions(),o=s.indexOf(this.currentOption);let a=Math.max(0,o);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(a=o+1,a>s.length-1&&(a=0)):e.key==="ArrowUp"?(a=o-1,a<0&&(a=s.length-1)):e.key==="Home"?a=0:e.key==="End"&&(a=s.length-1),this.setCurrentOption(s[a])}if(e.key?.length===1||e.key==="Backspace"){const s=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const o of s)if(o.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){const e=[Do({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(e){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]),this._value=e??null,this.value!==t&&(this.valueHasChanged=!0,this.requestUpdate("value",t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),e==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(i=>!i.disabled).map(i=>i.value));let t=e;return e!=null&&(t=e.filter(i=>this.optionValues.has(i)),t=this.multiple?t:t[0],t=t??null),t}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){const t=this.getAllOptions().filter(i=>i.hasAttribute("selected")||i.defaultSelected);if(t.length>0){const i=t.map(r=>r.value);this._defaultValue=this.multiple?i:i[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){const i=e.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="wa-button");this.disabled||i||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==null&&(this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new pd),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const i=e.target.closest("wa-option");i&&!i.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);const i=e.filter(r=>t.includes(r.value));this.setSelectedOptions(i)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let i=t;if(!i){const r=e.target.closest("wa-tag[data-value]");if(r){const s=r.dataset.value;i=this.selectedOptions.find(o=>o.value===s)}}i&&(this.toggleOptionSelection(i,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(e){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(r=>{i.includes(r)||(r.selected=!1)}),i.length&&i.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){const t=this.getAllOptions().filter(a=>{if(!this.hasInteracted&&!this.valueHasChanged){const l=this.defaultValue,d=Array.isArray(l)?l:[l];return a.hasAttribute("selected")||a.defaultSelected||a.selected||d?.includes(a.value)}return a.selected}),i=new Set(t.map(a=>a.value));for(const a of this.selectionOrder.keys())i.has(a)||this.selectionOrder.delete(a);let s=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(const a of t)this.selectionOrder.has(a.value)||this.selectionOrder.set(a.value,s++);this.selectedOptions=t.sort((a,l)=>{const d=this.selectionOrder.get(a.value)??0,h=this.selectionOrder.get(l.value)??0;return d-h});let o=new Set(this.selectedOptions.map(a=>a.value));if(o.size>0||this._value){const a=this._value;if(this._value==null){let l=this.defaultValue??[];this._value=Array.isArray(l)?l:[l]}this._value=this._value?.filter(l=>!this.optionValues?.has(l))??null,this._value?.unshift(...o),this.requestUpdate("value",a)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const a=this.selectedOptions[0];this.displayLabel=a?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(e,t);return i?typeof i=="string"?Jt(i):i:null}else if(t===this.maxOptionsVisible)return p`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-t}</wa-tag
          >
        `;return null})}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],i=e.filter(r=>t.includes(r.value));this.setSelectedOptions(i),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const e=new Qi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await he(this.popup.popup,"show"),this.currentOption&&Va(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new tr)}else{const e=new Ji;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await he(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new er)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Dt(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Dt(this,"wa-after-hide")}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,r=this.hint?!0:!!t,s=(this.hasUpdated||fh)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,o=!!(this.placeholder&&(!this.value||this.value.length===0));return p`
      <div
        part="form-control"
        class=${N({"form-control":!0,"form-control-has-label":i})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${N({label:!0,"has-label":i})}
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${N({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":o})}
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
              ${this.multiple&&this.hasUpdated?p`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

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

              ${s?p`
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
          class=${N({"has-slotted":r})}
          aria-hidden=${r?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};Q.css=[B0,Xt,Ge];n([$(".select")],Q.prototype,"popup",2);n([$(".combobox")],Q.prototype,"combobox",2);n([$(".display-input")],Q.prototype,"displayInput",2);n([$(".value-input")],Q.prototype,"valueInput",2);n([$(".listbox")],Q.prototype,"listbox",2);n([E()],Q.prototype,"displayLabel",2);n([E()],Q.prototype,"currentOption",2);n([E()],Q.prototype,"selectedOptions",2);n([E()],Q.prototype,"optionValues",2);n([c({reflect:!0})],Q.prototype,"name",2);n([c({attribute:!1})],Q.prototype,"defaultValue",1);n([c({attribute:"value",reflect:!1})],Q.prototype,"value",1);n([c({reflect:!0})],Q.prototype,"size",2);n([c()],Q.prototype,"placeholder",2);n([c({type:Boolean,reflect:!0})],Q.prototype,"multiple",2);n([c({attribute:"max-options-visible",type:Number})],Q.prototype,"maxOptionsVisible",2);n([c({type:Boolean})],Q.prototype,"disabled",2);n([c({attribute:"with-clear",type:Boolean})],Q.prototype,"withClear",2);n([c({type:Boolean,reflect:!0})],Q.prototype,"open",2);n([c({reflect:!0})],Q.prototype,"appearance",2);n([c({type:Boolean,reflect:!0})],Q.prototype,"pill",2);n([c()],Q.prototype,"label",2);n([c({reflect:!0})],Q.prototype,"placement",2);n([c({attribute:"hint"})],Q.prototype,"hint",2);n([c({attribute:"with-label",type:Boolean})],Q.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],Q.prototype,"withHint",2);n([c({type:Boolean,reflect:!0})],Q.prototype,"required",2);n([c({attribute:!1})],Q.prototype,"getTag",2);n([S("disabled",{waitUntilFirstUpdate:!0})],Q.prototype,"handleDisabledChange",1);n([S("value",{waitUntilFirstUpdate:!0})],Q.prototype,"handleValueChange",1);n([S("open",{waitUntilFirstUpdate:!0})],Q.prototype,"handleOpenChange",1);Q=n([C("wa-select")],Q);var U0=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}};var V0=A`
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
`;var ki=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.variant="neutral",this.appearance="filled-outlined",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new U0)}render(){return p`
      <slot part="content" class="content"></slot>

      ${this.withRemove?p`
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
    `}};ki.css=[V0,Lo,Ge];n([c({reflect:!0})],ki.prototype,"variant",2);n([c({reflect:!0})],ki.prototype,"appearance",2);n([c({reflect:!0})],ki.prototype,"size",2);n([c({type:Boolean,reflect:!0})],ki.prototype,"pill",2);n([c({attribute:"with-remove",type:Boolean})],ki.prototype,"withRemove",2);ki=n([C("wa-tag")],ki);var q0=A`
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
`;var po=class extends M{constructor(){super(...arguments),this.effect="none"}render(){return p` <div part="indicator" class="indicator"></div> `}};po.css=q0;n([c({reflect:!0})],po.prototype,"effect",2);po=n([C("wa-skeleton")],po);var H0=A`
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
`;var W0=()=>{const e=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(t){const i={message:"",isValid:!0,invalidKeys:[]},r=(s,o,a,l)=>{const d=document.createElement("input");return d.type="range",d.min=String(o),d.max=String(a),d.step=String(l),d.value=String(s),d.checkValidity(),d.validationMessage};if(t.required&&!t.hasInteracted)return i.isValid=!1,i.invalidKeys.push("valueMissing"),i.message=e.validationMessage||"Please fill out this field.",i;if(t.isRange){const s=t.minValue,o=t.maxValue;if(s<t.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=r(s,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,i;if(o>t.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=r(o,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,i;if(t.step&&t.step!==1){const a=(s-t.min)%t.step!==0,l=(o-t.min)%t.step!==0;if(a||l){i.isValid=!1,i.invalidKeys.push("stepMismatch");const d=a?s:o;return i.message=r(d,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,i}}}else{const s=t.value;if(s<t.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=r(s,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,i;if(s>t.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=r(s,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,i;if(t.step&&t.step!==1&&(s-t.min)%t.step!==0)return i.isValid=!1,i.invalidKeys.push("stepMismatch"),i.message=r(s,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,i}return i}}},J=class extends ce{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new nt(this,"hint","label"),this.localize=new te(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=this.defaultValue,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,W0()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){e=Number(e)??this.minValue,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new Rs(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new Rs(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new Rs(this.track,{start:(e,t)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const i=this.getValueFromCoordinates(e,t),r=Math.abs(i-this.minValue),s=Math.abs(i-this.maxValue);if(r===s)if(i>this.maxValue)this.activeThumb="max";else if(i<this.minValue)this.activeThumb="min";else{const o=this.localize.dir()==="rtl",a=this.orientation==="vertical",l=a?t:e,d=this.lastTrackPosition||l;this.lastTrackPosition=l;const h=l>d!==o&&!a||l<d&&a;this.activeThumb=h?"max":"min"}else this.activeThumb=r<=s?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(e,t,this.activeThumb),this.showRangeTooltips()},move:(e,t)=>{this.activeThumb&&this.setThumbValueFromCoordinates(e,t,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new Rs(this.slider,{start:(e,t)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(e,t),this.showTooltip()},move:(e,t)=>{this.setValueFromCoordinates(e,t)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(e){if(e.has("range")&&this.requestUpdate(),this.isRange?(e.has("minValue")||e.has("maxValue"))&&(this.minValue=G(this.minValue,this.min,this.maxValue),this.maxValue=G(this.maxValue,this.minValue,this.max),this.updateFormValue()):e.has("value")&&(this.value=G(this.value,this.min,this.max),this.setValue(String(this.value))),(e.has("min")||e.has("max"))&&(this.isRange?(this.minValue=G(this.minValue,this.min,this.max),this.maxValue=G(this.maxValue,this.min,this.max)):this.value=G(this.value,this.min,this.max)),e.has("disabled")&&this.customStates.set("disabled",this.disabled),e.has("disabled")||e.has("readonly")){const t=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(t),this.draggableThumbMax&&this.draggableThumbMax.toggle(t)),this.draggableTrack&&this.draggableTrack.toggle(t)}super.updated(e)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):this.value=parseFloat(this.getAttribute("value")??String(this.min)),this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(e){const t=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length,i=Number(this.step),r=Number(this.min),s=Number(this.max);return e=Math.round(e/i)*i,e=G(e,r,s),parseFloat(e.toFixed(t))}getPercentageFromValue(e){return(e-this.min)/(this.max-this.min)*100}getValueFromCoordinates(e,t){const i=this.localize.dir()==="rtl",r=this.orientation==="vertical",{top:s,right:o,bottom:a,left:l,height:d,width:h}=this.trackBoundingClientRect,u=r?t:e,f=r?{start:s,end:a,size:d}:{start:l,end:o,size:h},b=(r||i?f.end-u:u-f.start)/f.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*b)}handleBlur(){this.isRange?requestAnimationFrame(()=>{const e=this.shadowRoot?.activeElement;e===this.thumbMin||e===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(e){const t=e.target;this.isRange?(t===this.thumbMin?this.activeThumb="min":t===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(e){const t=this.localize.dir()==="rtl",i=e.target;if(this.disabled||this.readonly||this.isRange&&(i===this.thumbMin?this.activeThumb="min":i===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const r=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let s=r;switch(e.key){case"ArrowUp":case(t?"ArrowLeft":"ArrowRight"):e.preventDefault(),s=this.clampAndRoundToStep(r+this.step);break;case"ArrowDown":case(t?"ArrowRight":"ArrowLeft"):e.preventDefault(),s=this.clampAndRoundToStep(r-this.step);break;case"Home":e.preventDefault(),s=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":e.preventDefault(),s=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":e.preventDefault();const o=Math.max(r+(this.max-this.min)/10,r+this.step);s=this.clampAndRoundToStep(o);break;case"PageDown":e.preventDefault();const a=Math.min(r-(this.max-this.min)/10,r-this.step);s=this.clampAndRoundToStep(a);break;case"Enter":kn(e,this);return}s!==r&&(this.isRange?(this.activeThumb==="min"?s>this.maxValue?(this.maxValue=s,this.minValue=s):this.minValue=Math.max(this.min,s):s<this.minValue?(this.minValue=s,this.maxValue=s):this.maxValue=Math.min(this.max,s),this.updateFormValue()):this.value=G(s,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(e){e.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(e,t){const i=this.value;this.value=this.getValueFromCoordinates(e,t),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(e,t,i){const r=this.getValueFromCoordinates(e,t),s=i==="min"?this.minValue:this.maxValue;i==="min"?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),s!==(i==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const e=this.shadowRoot?.getElementById("tooltip-thumb-min"),t=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(e&&(e.open=!0),t&&(t.open=!1)):this.activeThumb==="max"&&(t&&(t.open=!0),e&&(e.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const e=this.shadowRoot?.getElementById("tooltip-thumb-min"),t=this.shadowRoot?.getElementById("tooltip-thumb-max");e&&(e.open=!1),t&&(t.open=!1)}updateFormValue(){if(this.isRange){const e=new FormData;e.append(this.name||"",String(this.minValue)),e.append(this.name||"",String(this.maxValue)),this.setValue(e)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const e=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=G(e,this.min,this.maxValue),this.updateFormValue()}else{const e=this.clampAndRoundToStep(this.value-this.step);this.value=e}}stepUp(){if(this.isRange){const e=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=G(e,this.minValue,this.max),this.updateFormValue()}else{const e=this.clampAndRoundToStep(this.value+this.step);this.value=e}}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("hint"),i=this.label?!0:!!e,r=this.hint?!0:!!t,s=this.hasSlotController.test("reference"),o=N({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),a=[];if(this.withMarkers)for(let g=this.min;g<=this.max;g+=this.step)a.push(this.getPercentageFromValue(g));const l=p`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${N({vh:!i,"has-label":i})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,d=p`
      <div
        id="hint"
        part="hint"
        class=${N({"has-slotted":r})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,h=this.withMarkers?p`
          <div id="markers" part="markers">
            ${a.map(g=>p`<span part="marker" class="marker" style=${pe({"--position":`${g}%`})}></span>`)}
          </div>
        `:"",u=s?p`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",f=(g,b)=>this.withTooltip?p`
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
          `:"";if(this.isRange){const g=G(this.getPercentageFromValue(this.minValue),0,100),b=G(this.getPercentageFromValue(this.maxValue),0,100);return p`
        ${l}

        <div id="slider" part="slider" class=${o}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${pe({"--start":`${Math.min(g,b)}%`,"--end":`${Math.max(g,b)}%`})}
            ></div>

            ${h}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${pe({"--position":`${g}%`})}
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
              style=${pe({"--position":`${b}%`})}
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

          ${u} ${d}
        </div>

        ${f("thumb-min",this.minValue)} ${f("thumb-max",this.maxValue)}
      `}else{const g=G(this.getPercentageFromValue(this.value),0,100),b=G(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return p`
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
              style=${pe({"--start":`${b}%`,"--end":`${g}%`})}
            ></div>

            ${h}
            <span id="thumb" part="thumb" style=${pe({"--position":`${g}%`})}></span>
          </div>

          ${u} ${d}
        </div>

        ${f("thumb",this.value)}
      `}}};J.formAssociated=!0;J.observeSlots=!0;J.css=[Ge,Xt,H0];n([$("#slider")],J.prototype,"slider",2);n([$("#thumb")],J.prototype,"thumb",2);n([$("#thumb-min")],J.prototype,"thumbMin",2);n([$("#thumb-max")],J.prototype,"thumbMax",2);n([$("#track")],J.prototype,"track",2);n([$("#tooltip")],J.prototype,"tooltip",2);n([c()],J.prototype,"label",2);n([c({attribute:"hint"})],J.prototype,"hint",2);n([c({reflect:!0})],J.prototype,"name",2);n([c({type:Number,attribute:"min-value"})],J.prototype,"minValue",2);n([c({type:Number,attribute:"max-value"})],J.prototype,"maxValue",2);n([c({attribute:"value",reflect:!0,type:Number})],J.prototype,"defaultValue",2);n([E()],J.prototype,"value",1);n([c({type:Boolean,reflect:!0})],J.prototype,"range",2);n([c({type:Boolean})],J.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],J.prototype,"readonly",2);n([c({reflect:!0})],J.prototype,"orientation",2);n([c({reflect:!0})],J.prototype,"size",2);n([c({attribute:"indicator-offset",type:Number})],J.prototype,"indicatorOffset",2);n([c({type:Number})],J.prototype,"min",2);n([c({type:Number})],J.prototype,"max",2);n([c({type:Number})],J.prototype,"step",2);n([c({type:Boolean,reflect:!0})],J.prototype,"required",2);n([c({type:Boolean})],J.prototype,"autofocus",2);n([c({attribute:"tooltip-distance",type:Number})],J.prototype,"tooltipDistance",2);n([c({attribute:"tooltip-placement",reflect:!0})],J.prototype,"tooltipPlacement",2);n([c({attribute:"with-markers",type:Boolean})],J.prototype,"withMarkers",2);n([c({attribute:"with-tooltip",type:Boolean})],J.prototype,"withTooltip",2);n([c({attribute:!1})],J.prototype,"valueFormatter",2);J=n([C("wa-slider")],J);var j0=A`
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
`;var st=class extends M{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new te(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),rs(this,{onMove:(i,r)=>{let s=this.orientation==="vertical"?r:i;this.primary==="end"&&(s=this.size-s),this.snap&&this.snap.split(" ").forEach(a=>{let l;a.endsWith("%")?l=this.size*(parseFloat(a)/100):l=parseFloat(a),t&&this.orientation==="horizontal"&&(l=this.size-l),s>=l-this.snapThreshold&&s<=l+this.snapThreshold&&(s=l)}),this.position=G(this.pixelsToPercentage(s),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const i=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&this.orientation==="horizontal"||e.key==="ArrowUp"&&this.orientation==="vertical")&&(t-=i),(e.key==="ArrowRight"&&this.orientation==="horizontal"||e.key==="ArrowDown"&&this.orientation==="vertical")&&(t+=i),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const r=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=r})}this.position=G(t,0,100)}}handleResize(e){const{width:t,height:i}=e[0].contentRect;this.size=this.orientation==="vertical"?i:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new fd)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",t=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",i=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,s="auto";return this.style||(this.style={}),this.primary==="end"?i&&this.orientation==="horizontal"?this.style[e]=`${r} var(--divider-width) ${s}`:this.style[e]=`${s} var(--divider-width) ${r}`:i&&this.orientation==="horizontal"?this.style[e]=`${s} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${s}`,this.style[t]="",p`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${P(this.disabled?void 0:"0")}
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
    `}};st.css=j0;n([$(".divider")],st.prototype,"divider",2);n([c({type:Number,reflect:!0})],st.prototype,"position",2);n([c({attribute:"position-in-pixels",type:Number})],st.prototype,"positionInPixels",2);n([c({reflect:!0})],st.prototype,"orientation",2);n([c({type:Boolean,reflect:!0})],st.prototype,"disabled",2);n([c()],st.prototype,"primary",2);n([c()],st.prototype,"snap",2);n([c({type:Number,attribute:"snap-threshold"})],st.prototype,"snapThreshold",2);n([S("position")],st.prototype,"handlePositionChange",1);n([S("positionInPixels")],st.prototype,"handlePositionInPixelsChange",1);n([S("vertical")],st.prototype,"handleVerticalChange",1);st=n([C("wa-split-panel")],st);var X0=A`
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
`;var _e=class extends ce{constructor(){super(...arguments),this.hasSlotController=new nt(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,ws()]}get value(){return this._value??"on"}set value(e){this._value=e}firstUpdated(e){super.firstUpdated(e),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}setValue(e,t){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(e??"on",t)}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,t=this.hint?!0:!!e;return p`
      <label
        part="base"
        class=${N({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${P(this.value)}
          .checked=${Ui(this.checked)}
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
        class=${N({"has-slotted":t})}
        aria-hidden=${t?"false":"true"}
        >${this.hint}</slot
      >
    `}};_e.shadowRootOptions={...ce.shadowRootOptions,delegatesFocus:!0};_e.css=[Xt,Ge,X0];n([$('input[type="checkbox"]')],_e.prototype,"input",2);n([c()],_e.prototype,"title",2);n([c({reflect:!0})],_e.prototype,"name",2);n([c({reflect:!0})],_e.prototype,"value",1);n([c({reflect:!0})],_e.prototype,"size",2);n([c({type:Boolean})],_e.prototype,"disabled",2);n([c({type:Boolean,attribute:!1})],_e.prototype,"checked",2);n([c({type:Boolean,attribute:"checked",reflect:!0})],_e.prototype,"defaultChecked",2);n([c({type:Boolean,reflect:!0})],_e.prototype,"required",2);n([c({attribute:"hint"})],_e.prototype,"hint",2);n([c({attribute:"with-hint",type:Boolean})],_e.prototype,"withHint",2);n([S("defaultChecked")],_e.prototype,"handleDefaultCheckedChange",1);n([S(["checked"])],_e.prototype,"handleStateChange",1);n([S("disabled",{waitUntilFirstUpdate:!0})],_e.prototype,"handleDisabledChange",1);_e=n([C("wa-switch")],_e);var G0=A`
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
`;var K0=0,Ht=class extends M{constructor(){super(...arguments),this.attrId=++K0,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,p`
      <div
        part="base"
        class=${N({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};Ht.css=G0;n([$(".tab")],Ht.prototype,"tab",2);n([c({reflect:!0})],Ht.prototype,"panel",2);n([c({type:Boolean,reflect:!0})],Ht.prototype,"active",2);n([c({type:Boolean,reflect:!0})],Ht.prototype,"disabled",2);n([c({type:Number,reflect:!0})],Ht.prototype,"tabIndex",2);n([S("active")],Ht.prototype,"handleActiveChange",1);n([S("disabled")],Ht.prototype,"handleDisabledChange",1);Ht=n([C("wa-tab")],Ht);var Y0=class extends Event{constructor(e){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var Z0=class extends Event{constructor(e){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var Q0=A`
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
`;var wt=class extends M{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new te(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels());const t=e.filter(i=>i.target.closest("wa-tab-group")===this);if(t.some(i=>i.attributeName==="disabled"))this.syncTabsAndPanels();else if(t.some(i=>i.attributeName==="active")){const r=t.filter(s=>s.attributeName==="active"&&s.target.tagName.toLowerCase()==="wa-tab").map(s=>s.target).find(s=>s.active);r&&r.closest("wa-tab-group")===this&&this.setActiveTab(r)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,i)=>{if(t[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const r=this.tabs.find(s=>s.panel===this.active);r&&this.setActiveTab(r)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});i.unobserve(t[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const i=e.target.closest("wa-tab");i?.closest("wa-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(e){const i=e.target.closest("wa-tab");if(i?.closest("wa-tab-group")===this){if(["Enter"," "].includes(e.key)){i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),e.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const s=this.tabs.find(l=>l.matches(":focus")),o=this.localize.dir()==="rtl";let a=null;if(s?.tagName.toLowerCase()==="wa-tab"){if(e.key==="Home")a=this.focusableTabs[0];else if(e.key==="End")a=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const l=this.tabs.findIndex(d=>d===s);a=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const l=this.tabs.findIndex(d=>d===s);a=this.findNextFocusableTab(l,"forward")}if(!a)return;a.tabIndex=0,a.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(a,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===a?0:-1}),["top","bottom"].includes(this.placement)&&Va(a,this.nav,"horizontal"),e.preventDefault()}}}}findNextFocusableTab(e,t){let i=null;const r=t==="forward"?1:-1;let s=e+r;for(;e<this.tabs.length;){if(i=this.tabs[s]||null,i===null){t==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;s+=r}return i}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t={emitEvents:!0,scrollBehavior:"auto",...t},e.closest("wa-tab-group")===this&&e!==this.activeTab&&!e.disabled){const i=this.activeTab;this.active=e.panel,this.activeTab=e,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>r.active=r.name===this.activeTab?.panel),["top","bottom"].includes(this.placement)&&Va(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(i&&this.dispatchEvent(new Y0({name:i.panel})),this.dispatchEvent(new Z0({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(i=>i.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){const e=this.tabs.find(t=>t.panel===this.active);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return p`
      <div
        part="base"
        class=${N({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?p`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${e?"chevron-right":"chevron-left"}
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

          ${this.hasScrollControls?p`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${e?"chevron-left":"chevron-right"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToEnd")}
                  ></wa-icon>
                </wa-button>
              `:""}
        </div>

        <slot part="body" class="body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};wt.css=Q0;n([$(".tab-group")],wt.prototype,"tabGroup",2);n([$(".body")],wt.prototype,"body",2);n([$(".nav")],wt.prototype,"nav",2);n([E()],wt.prototype,"hasScrollControls",2);n([c({reflect:!0})],wt.prototype,"active",2);n([c()],wt.prototype,"placement",2);n([c()],wt.prototype,"activation",2);n([c({attribute:"without-scroll-controls",type:Boolean})],wt.prototype,"withoutScrollControls",2);n([S("active")],wt.prototype,"updateActiveTab",1);n([S("withoutScrollControls",{waitUntilFirstUpdate:!0})],wt.prototype,"updateScrollControls",1);wt=n([C("wa-tab-group")],wt);var J0=A`
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
`;var ev=0,kr=class extends M{constructor(){super(...arguments),this.attrId=++ev,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return p`
      <slot
        part="base"
        class=${N({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};kr.css=J0;n([c({reflect:!0})],kr.prototype,"name",2);n([c({type:Boolean,reflect:!0})],kr.prototype,"active",2);n([S("active")],kr.prototype,"handleActiveChange",1);kr=n([C("wa-tab-panel")],kr);var tv=A`
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
`;var ee=class extends ce{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new nt(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,ws()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const e=this.input.value;this.value=e}})}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.checkValidity()}handleChange(e){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleInput(e){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const e=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${e}px`}if(this.input.style.height){const e=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${e}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(e){e.has("resize")&&this.setTextareaDimensions(),super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,r="preserve"){const s=t??this.input.selectionStart,o=i??this.input.selectionEnd;this.input.setRangeText(e,s,o,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!e,r=this.hint?!0:!!t;return p`
      <label
        part="form-control-label label"
        class=${N({label:!0,"has-label":i})}
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
          name=${P(this.name)}
          .value=${Ui(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${P(this.placeholder)}
          rows=${P(this.rows)}
          minlength=${P(this.minlength)}
          maxlength=${P(this.maxlength)}
          autocapitalize=${P(this.autocapitalize)}
          autocorrect=${P(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${P(this.spellcheck)}
          enterkeyhint=${P(this.enterkeyhint)}
          inputmode=${P(this.inputmode)}
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
        aria-hidden=${r?"false":"true"}
        class=${N({"has-slotted":r})}
        >${this.hint}</slot
      >
    `}};ee.css=[tv,Xt,Ge];n([$(".control")],ee.prototype,"input",2);n([$('[part~="base"]')],ee.prototype,"base",2);n([$(".size-adjuster")],ee.prototype,"sizeAdjuster",2);n([c()],ee.prototype,"title",2);n([c({reflect:!0})],ee.prototype,"name",2);n([E()],ee.prototype,"value",1);n([c({attribute:"value",reflect:!0})],ee.prototype,"defaultValue",2);n([c({reflect:!0})],ee.prototype,"size",2);n([c({reflect:!0})],ee.prototype,"appearance",2);n([c()],ee.prototype,"label",2);n([c({attribute:"hint"})],ee.prototype,"hint",2);n([c()],ee.prototype,"placeholder",2);n([c({type:Number})],ee.prototype,"rows",2);n([c({reflect:!0})],ee.prototype,"resize",2);n([c({type:Boolean})],ee.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],ee.prototype,"readonly",2);n([c({type:Boolean,reflect:!0})],ee.prototype,"required",2);n([c({type:Number})],ee.prototype,"minlength",2);n([c({type:Number})],ee.prototype,"maxlength",2);n([c()],ee.prototype,"autocapitalize",2);n([c()],ee.prototype,"autocorrect",2);n([c()],ee.prototype,"autocomplete",2);n([c({type:Boolean})],ee.prototype,"autofocus",2);n([c()],ee.prototype,"enterkeyhint",2);n([c({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],ee.prototype,"spellcheck",2);n([c()],ee.prototype,"inputmode",2);n([c({attribute:"with-label",type:Boolean})],ee.prototype,"withLabel",2);n([c({attribute:"with-hint",type:Boolean})],ee.prototype,"withHint",2);n([S("rows",{waitUntilFirstUpdate:!0})],ee.prototype,"handleRowsChange",1);n([S("value",{waitUntilFirstUpdate:!0})],ee.prototype,"handleValueChange",1);ee=n([C("wa-textarea")],ee);var iv=class extends Event{constructor(e){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};var rv=A`
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
`;var sv=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}};var ov=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}};var av=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var nv=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}};var lv=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var cv=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}};var dv=A`
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
`;function Pe(e,t,i){return e?t(e):i?.(e)}var re=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.dispatchEvent(new lv);const e=ao(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await oo(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.hidden=!0,this.dispatchEvent(new cv)}isNestedItem(){const e=this.parentElement;return!!e&&re.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.dispatchEvent(new av),this.childrenContainer.hidden=!1;const e=ao(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await oo(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.style.height="auto",this.dispatchEvent(new nv)}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new ov)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.dispatchEvent(new sv)}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>re.isTreeItem(t)&&(e||!t.disabled)):[]}render(){const e=this.localize.dir()==="rtl",t=!this.loading&&(!this.isLeaf||this.lazy);return p`
      <div
        part="base"
        class="${N({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-loading":this.loading,"tree-item-has-expand-button":t})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${N({"expand-button":!0,"expand-button-visible":t})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${Pe(this.loading,()=>p` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `,()=>p`
                  <wa-icon name=${e?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
                `)}
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${e?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${Pe(this.selectable,()=>p`
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
                ?checked="${Ui(this.selected)}"
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
    `}};re.css=dv;n([E()],re.prototype,"indeterminate",2);n([E()],re.prototype,"isLeaf",2);n([E()],re.prototype,"loading",2);n([E()],re.prototype,"selectable",2);n([c({type:Boolean,reflect:!0})],re.prototype,"expanded",2);n([c({type:Boolean,reflect:!0})],re.prototype,"selected",2);n([c({type:Boolean,reflect:!0})],re.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],re.prototype,"lazy",2);n([$("slot:not([name])")],re.prototype,"defaultSlot",2);n([$("slot[name=children]")],re.prototype,"childrenSlot",2);n([$(".item")],re.prototype,"itemElement",2);n([$(".children")],re.prototype,"childrenContainer",2);n([$(".expand-button slot")],re.prototype,"expandButtonSlot",2);n([S("loading",{waitUntilFirstUpdate:!0})],re.prototype,"handleLoadingChange",1);n([S("disabled")],re.prototype,"handleDisabledChange",1);n([S("expanded")],re.prototype,"handleExpandedState",1);n([S("indeterminate")],re.prototype,"handleIndeterminateStateChange",1);n([S("selected")],re.prototype,"handleSelectedChange",1);n([S("expanded",{waitUntilFirstUpdate:!0})],re.prototype,"handleExpandedChange",1);n([S("expanded",{waitUntilFirstUpdate:!0})],re.prototype,"handleExpandAnimation",1);n([S("lazy",{waitUntilFirstUpdate:!0})],re.prototype,"handleLazyChange",1);re=n([C("wa-tree-item")],re);function Ul(e,t=!1){function i(o){const a=o.getChildrenItems({includeDisabled:!1});if(a.length){const l=a.every(h=>h.selected),d=a.every(h=>!h.selected&&!h.indeterminate);o.selected=l,o.indeterminate=!l&&!d}}function r(o){const a=o.parentElement;re.isTreeItem(a)&&(i(a),r(a))}function s(o){for(const a of o.getChildrenItems())a.selected=t?o.selected||a.selected:!a.disabled&&o.selected,s(a);t&&i(o)}s(e),r(e)}var Ci=class extends M{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new te(this),this.initTreeItem=e=>{e.updateComplete.then(()=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const i=e.querySelector(`[slot="${t}-icon"]`),r=this.getExpandButtonIcon(t);r&&(i===null?e.append(r):i.hasAttribute("data-default")&&i.replaceWith(r))})})},this.handleTreeChanged=e=>{for(const t of e){const i=[...t.addedNodes].filter(re.isTreeItem),r=[...t.removedNodes].filter(re.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&r.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),re.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(e){const i=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const r=i.cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),r.setAttribute("data-default",""),r.slot=`${e}-icon`,r}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),Ul(e);else if(this.selection==="single"||e.isLeaf){const r=this.getAllTreeItems();for(const s of r)s.selected=s===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const i=this.selectedItems;(t.length!==i.length||i.some(r=>!t.includes(r)))&&Promise.all(i.map(r=>r.updateComplete)).then(()=>{this.dispatchEvent(new iv({selection:i}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(e){e?.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(s=>["input","textarea"].includes(s?.tagName?.toLowerCase())))return;const t=this.getFocusableItems(),i=this.matches(":dir(ltr)"),r=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const s=t.findIndex(d=>d.matches(":focus")),o=t[s],a=d=>{const h=t[G(d,0,t.length-1)];this.focusItem(h)},l=d=>{o.expanded=d};e.key==="ArrowDown"?a(s+1):e.key==="ArrowUp"?a(s-1):i&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?a(s+1):l(!0):i&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?a(s-1):l(!1):e.key==="Home"?a(0):e.key==="End"?a(t.length-1):(e.key==="Enter"||e.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(e){const t=e.target,i=t.closest("wa-tree-item"),r=e.composedPath().some(s=>s?.classList?.contains("expand-button"));!i||i.disabled||t!==this.clickTarget||(r?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const i of t)i.updateComplete.then(()=>{i.selectable=e});e&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(i=>{i.updateComplete.then(()=>{Ul(i,!0)})}))}get selectedItems(){const e=this.getAllTreeItems(),t=i=>i.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(i=>{if(i.disabled)return!1;const r=i.parentElement?.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||t.has(r))&&t.add(i),!t.has(i)})}render(){return p`
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
    `}};Ci.css=rv;n([$("slot:not([name])")],Ci.prototype,"defaultSlot",2);n([$("slot[name=expand-icon]")],Ci.prototype,"expandedIconSlot",2);n([$("slot[name=collapse-icon]")],Ci.prototype,"collapsedIconSlot",2);n([c()],Ci.prototype,"selection",2);n([S("selection")],Ci.prototype,"handleSelectionChange",1);Ci=n([C("wa-tree")],Ci);var hv=A`
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
`;var ot=class extends M{constructor(){super(...arguments),this.localize=new te(this),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(e){const t=Mo(e),i=[];for(const r of t){let s;if(r.endsWith("%")){const o=parseFloat(r.slice(0,-1));if(!isNaN(o))s=Math.max(0,o/100);else continue}else if(s=parseFloat(r),!isNaN(s))s=Math.max(0,s);else continue;i.push(s)}return[...new Set(i)].sort((r,s)=>r-s)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let e=0,t=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let i=1;i<this.availableZoomLevels.length;i++){const r=Math.abs(this.availableZoomLevels[i]-this.zoom);r<t&&(t=r,e=i)}return e}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}updated(e){if(e.has("zoom")&&this.style.setProperty("--zoom",`${this.zoom}`),e.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){const t=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[t]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[t])}}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}const e=this.getCurrentZoomIndex();e<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[e+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}const e=this.getCurrentZoomIndex();e>0&&(this.zoom=this.availableZoomLevels[e-1])}handleLoad(){this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return p`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${P(this.sandbox??void 0)}
          src=${P(this.src??void 0)}
          srcdoc=${P(this.srcdoc??void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${this.withoutControls?"":p`
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
    `}};ot.css=hv;n([$("#iframe")],ot.prototype,"iframe",2);n([c()],ot.prototype,"src",2);n([c()],ot.prototype,"srcdoc",2);n([c({type:Boolean})],ot.prototype,"allowfullscreen",2);n([c()],ot.prototype,"loading",2);n([c()],ot.prototype,"referrerpolicy",2);n([c()],ot.prototype,"sandbox",2);n([c({type:Number,reflect:!0})],ot.prototype,"zoom",2);n([c({attribute:"zoom-levels"})],ot.prototype,"zoomLevels",2);n([c({type:Boolean,attribute:"without-controls",reflect:!0})],ot.prototype,"withoutControls",2);n([c({type:Boolean,attribute:"without-interaction",reflect:!0})],ot.prototype,"withoutInteraction",2);ot=n([C("wa-zoomable-frame")],ot);var uv=Object.getOwnPropertyDescriptor,pv=(e,t,i,r)=>{for(var s=r>1?void 0:r?uv(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=a(s)||s);return s};let qa=class extends jt{render(){return p`
            <slot></slot>
        `}};qa.styles=A`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;qa=pv([C("k-app")],qa);var fv=Object.defineProperty,mv=Object.getOwnPropertyDescriptor,zr=(e,t,i,r)=>{for(var s=r>1?void 0:r?mv(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&fv(t,i,s),s};let Ei=class extends jt{constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const e=this.getAttribute("id");e&&this.loadContributions(e),We(Wt,t=>{if(!e)return;this.matchesTarget(e,t.target)&&(this.loadContributions(e),this.requestUpdate())})}matchesTarget(e,t){if(t===e)return!0;if(!e.includes(":"))return!1;const[i]=e.split(":");if(t===`${i}:*`)return!0;const r=t.split(":");if(r.length===2){const s=r[1];if(s==="system.editors"||s===".system.editors")return this.isEditor&&e.startsWith(`${i}:`)}return!1}loadContributions(e){const t=I.getContributions(e);if(!e.includes(":")){this.contributions=t;return}const[i]=e.split(":"),r=`${i}:*`,s=I.getContributions(r),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const l of a){const d=`${i}:${l}`,h=I.getContributions(d);o.push(...h)}}this.contributions=[...s,...o,...t]}contributionCreator(e){if("command"in e){const t=e,i=!!t.showLabel;return p`
                <wa-button @click=${()=>this.executeCommand(t.command,t.params||{})}
                           title=${t.label}
                           ?disabled="${t.disabled?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${t.icon} label="${t.label}"></wa-icon>
                    ${i?t.label:""}
                </wa-button>
            `}else if("html"in e){const t=e.html;return t instanceof Function?t():Jt(t)}else return p`<span>unknown contribution type: ${typeof e}</span>`}render(){const e=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return p`
            <div class="toolbar-items" style=${pe({"justify-content":this.position})}>
                <slot name="start">
                    ${this.contributions.filter(t=>t.slot==="start").map(this.contributionCreator.bind(this))}
                </slot>
                ${e}
                ${this.contributions.filter(t=>t.slot===void 0).map(this.contributionCreator.bind(this))}
                <slot>
                </slot>
                <slot name="end">
                    ${this.contributions.filter(t=>t.slot==="end").map(this.contributionCreator.bind(this))}
                </slot>
            </div>
        `}};Ei.styles=A`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;zr([c()],Ei.prototype,"position",2);zr([c({type:Boolean,attribute:"is-editor"})],Ei.prototype,"isEditor",2);zr([c({attribute:!1})],Ei.prototype,"partToolbarContent",2);zr([c({attribute:!1})],Ei.prototype,"partToolbarRenderer",2);zr([E()],Ei.prototype,"contributions",2);Ei=zr([C("k-toolbar")],Ei);const pi=()=>new gv;class gv{}const ga=new WeakMap,fi=_r(class extends nu{render(e){return B}update(e,[t]){const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),B}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=ga.get(t);i===void 0&&(i=new WeakMap,ga.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?ga.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),bv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",vv="/assets/jupyter-C78Cpfql.svg",wv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";new MutationObserver(e=>{for(const{addedNodes:t}of e)for(const i of t)i.nodeType===Node.ELEMENT_NODE&&yv(i)});async function yv(e){const t=e instanceof Element?e.tagName.toLowerCase():"",i=t?.startsWith("wa-"),r=[...e.querySelectorAll(":not(:defined)")].map(a=>a.tagName.toLowerCase()).filter(a=>a.startsWith("wa-"));i&&!customElements.get(t)&&r.push(t);const s=[...new Set(r)],o=await Promise.allSettled(s.map(a=>xv(a)));for(const a of o)a.status==="rejected"&&console.warn(a.reason);await new Promise(requestAnimationFrame),e.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function xv(e){if(customElements.get(e))return Promise.resolve();const t=e.replace(/^wa-/i,""),i=Cf(`components/${t}/${t}.js`);return new Promise((r,s)=>{import(i).then(()=>r()).catch(()=>s(new Error(`Unable to autoload <${e}> from ${i}`)))})}Rf("k",{resolver:e=>new URL(Object.assign({"../icons/js.svg":bv,"../icons/jupyter.svg":vv,"../icons/python.svg":wv})[`../icons/${e}.svg`],import.meta.url).href,mutator:e=>{e.setAttribute("fill","currentColor"),e.setAttribute("stroke","currentColor")}});var kv=Object.defineProperty,Cv=Object.getOwnPropertyDescriptor,xs=(e,t,i,r)=>{for(var s=r>1?void 0:r?Cv(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&kv(t,i,s),s};let Wi=class extends bs{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const e=this.name.trim().split(/ +/),t=e.pop(),i=e.pop();return p`
            <wa-icon library="${i||B}" variant="${this.variant||B}"
                         family="${this.family||B}" name=${t} label="${this.label||this.name||B}"></wa-icon>`}};Wi.styles=A`
        :host {
            display: contents;
        }
    `;xs([c()],Wi.prototype,"name",2);xs([c()],Wi.prototype,"family",2);xs([c()],Wi.prototype,"variant",2);xs([c()],Wi.prototype,"label",2);Wi=xs([C("k-icon")],Wi);var Ev=Object.defineProperty,$v=Object.getOwnPropertyDescriptor,lt=(e,t,i,r)=>{for(var s=r>1?void 0:r?$v(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&Ev(t,i,s),s};let Xe=class extends bs{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(e){if(!this.disabled){if(e&&e.stopPropagation(),this.action){this.action(e);return}if(this.cmd){const t=this.closest("wa-dropdown");t&&t.open!==void 0&&(t.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(e){const t=e.target;t&&t.open!==void 0&&(t.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const e=Pc.getKeyBindingsForCommand(this.cmd);return e.length>0?e[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),We(Wt,e=>{this.dropdown&&e.target===this.dropdown&&(this.dropdownContributions=e.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=I.getContributions(this.dropdown),this.requestUpdate())}renderContribution(e){if("command"in e){const t=e,i=t.disabled?.get();return p`
                <k-command 
                    cmd="${t.command}"
                    icon="${t.icon||""}"
                    .params=${t.params||{}}
                    ?disabled="${i}">
                    ${t.label}
                </k-command>
            `}if("html"in e){const i=e.html;return i instanceof Function?i():Jt(i)}return B}render(){const e=this.getKeybinding();return this.isInDropdown()?p`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${t=>this.handleClick(t)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${e?p`<span class="keybinding">${e}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?p`
                <wa-dropdown 
                    placement=${this.placement}
                    @wa-select=${t=>this.handleSelect(t)}>
                    <wa-button 
                        slot="trigger"
                        appearance=${this.appearance}
                        variant=${this.variant}
                        size=${this.size}
                        ?disabled=${this.disabled}
                        with-caret
                        title=${e?`${this.title} (${e})`:this.title}>
                        <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                        <slot></slot>
                        ${this.label?this.title:B}
                    </wa-button>
                    
                    ${this.title?p`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:B}
                    
                    ${this.dropdownContributions.map(t=>this.renderContribution(t))}
                    
                    ${this.cmd?p`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                            ${this.title}
                        </k-command>
                    `:B}
                </wa-dropdown>
            `:p`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${e?`${this.title} (${e})`:this.title}
                @click=${t=>this.handleClick(t)}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};Xe.styles=A`
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
    `;lt([c()],Xe.prototype,"cmd",2);lt([c({type:Object,attribute:!1})],Xe.prototype,"action",2);lt([c()],Xe.prototype,"title",2);lt([c()],Xe.prototype,"label",2);lt([c()],Xe.prototype,"icon",2);lt([c({type:Boolean})],Xe.prototype,"disabled",2);lt([c()],Xe.prototype,"appearance",2);lt([c()],Xe.prototype,"variant",2);lt([c()],Xe.prototype,"size",2);lt([c({type:Object,attribute:!1})],Xe.prototype,"params",2);lt([c()],Xe.prototype,"dropdown",2);lt([c()],Xe.prototype,"placement",2);lt([E()],Xe.prototype,"dropdownContributions",2);Xe=lt([C("k-command")],Xe);var Sv=Object.defineProperty,Av=Object.getOwnPropertyDescriptor,Or=(e,t,i,r)=>{for(var s=r>1?void 0:r?Av(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&Sv(t,i,s),s};let $i=class extends jt{constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=pi(),this.dropdownRef=pi(),this.boundHandleDocumentPointerDown=this.handleDocumentPointerDown.bind(this)}handleDocumentPointerDown(e){if(!this.isOpen)return;const t=e.composedPath();this.dropdownRef.value&&t.includes(this.dropdownRef.value)||t.some(i=>i.getAttribute?.("part")==="submenu")||this.onClose()}doBeforeUI(){const e=this.getAttribute("id");e&&this.loadContributions(e),We(Wt,t=>{if(!e)return;this.matchesTarget(e,t.target)&&(this.loadContributions(e),this.requestUpdate())})}matchesTarget(e,t){if(t===e)return!0;if(!e.includes(":"))return!1;const[i]=e.split(":");if(t===`${i}:*`)return!0;const r=t.split(":");if(r.length===2){const s=r[1];if(s==="system.editors"||s===".system.editors")return this.isEditor&&e.startsWith(`${i}:`)}return!1}loadContributions(e){const t=I.getContributions(e);if(!e.includes(":")){this.contributions=t;return}const[i]=e.split(":"),r=`${i}:*`,s=I.getContributions(r),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const l of a){const d=`${i}:${l}`,h=I.getContributions(d);o.push(...h)}}this.contributions=[...s,...o,...t]}getElementFromPoint(e,t){let i=document.elementFromPoint(e,t);if(!i)return null;for(;i;){const r=i.shadowRoot;if(r){const s=r.elementFromPoint(e,t);if(s&&s!==i){i=s;continue}}break}return i}triggerClickUnderCursor(e){const t=this.getElementFromPoint(e.clientX,e.clientY);if(t){const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY,button:0,buttons:0,detail:1,which:1});t.dispatchEvent(i)}}show(e,t){t&&this.triggerClickUnderCursor(t),this.position=e,this.isOpen=!0,this.updateComplete.then(()=>{document.addEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})})}onClose(){this.isOpen=!1,document.removeEventListener("pointerdown",this.boundHandleDocumentPointerDown,{capture:!0})}renderContribution(e){if("command"in e){const t=e,i=t.disabled?.get();return p`
                <k-command
                    cmd="${t.command}"
                    icon="${t.icon??""}"
                    .params=${t.params??{}}
                    ?disabled="${i}">
                    ${t.label}
                </k-command>
            `}else if("html"in e){const t=e.html;return t instanceof Function?t():Jt(t)}return B}render(){if(!this.isOpen)return B;const e=this.partContextMenuRenderer?this.partContextMenuRenderer():B;return p`
            <wa-dropdown
                ${fi(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}>
                
                <div 
                    slot="trigger"
                    ${fi(this.anchorRef)}
                    style="position: fixed; 
                           left: ${this.position.x}px; 
                           top: ${this.position.y}px; 
                           width: 1px; 
                           height: 1px; 
                           pointer-events: none;">
                </div>
                
                ${e}
                ${this.contributions.map(t=>this.renderContribution(t))}
            </wa-dropdown>
        `}};$i.styles=A`
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
        
        wa-dropdown::part(menu) {
            min-width: 200px;
        }
    `;Or([c({type:Boolean,attribute:"is-editor"})],$i.prototype,"isEditor",2);Or([c({attribute:!1})],$i.prototype,"partContextMenuRenderer",2);Or([E()],$i.prototype,"contributions",2);Or([E()],$i.prototype,"isOpen",2);Or([E()],$i.prototype,"position",2);$i=Or([C("k-contextmenu")],$i);const Vl=(e,t,i)=>{const r=new Map;for(let s=t;s<=i;s++)r.set(e[s],s);return r},_v=_r(class extends Lr{constructor(e){if(super(e),e.type!==At.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let r;i===void 0?i=t:t!==void 0&&(r=t);const s=[],o=[];let a=0;for(const l of e)s[a]=r?r(l,a):a,o[a]=i(l,a),a++;return{values:o,keys:s}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,r]){const s=ru(e),{values:o,keys:a}=this.dt(t,i,r);if(!Array.isArray(s))return this.ut=a,o;const l=this.ut??=[],d=[];let h,u,f=0,g=s.length-1,b=0,w=o.length-1;for(;f<=g&&b<=w;)if(s[f]===null)f++;else if(s[g]===null)g--;else if(l[f]===a[b])d[b]=_i(s[f],o[b]),f++,b++;else if(l[g]===a[w])d[w]=_i(s[g],o[w]),g--,w--;else if(l[f]===a[w])d[w]=_i(s[f],o[w]),Fr(e,d[w+1],s[f]),f++,w--;else if(l[g]===a[b])d[b]=_i(s[g],o[b]),Fr(e,s[f],s[g]),g--,b++;else if(h===void 0&&(h=Vl(a,b,w),u=Vl(l,f,g)),h.has(l[f]))if(h.has(l[g])){const _=u.get(a[b]),z=_!==void 0?s[_]:null;if(z===null){const O=Fr(e,s[f]);_i(O,o[b]),d[b]=O}else d[b]=_i(z,o[b]),Fr(e,s[f],z),s[_]=null;b++}else ea(s[g]),g--;else ea(s[f]),f++;for(;b<=w;){const _=Fr(e,d[w+1]);_i(_,o[b]),d[b++]=_}for(;f<=g;){const _=s[f++];_!==null&&ea(_)}return this.ut=a,Dc(e,d),tt}});var Lv=Object.defineProperty,Tv=Object.getOwnPropertyDescriptor,Dd=(e,t,i,r)=>{for(var s=r>1?void 0:r?Tv(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&Lv(t,i,s),s};let fo=class extends mn{constructor(){super(...arguments),this.contributions=[],this.tabGroup=pi(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",e=>{const t=this.getTabPanel(e.detail.name);t&&(this.updateToolbarFromComponent(t),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(t),this.setupToolbarResizeObserver(t)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:t})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",e=>{const i=e.target.closest("wa-tab-panel");i&&(this.updateToolbarFromComponent(i),requestAnimationFrame(()=>this.updateToolbarHeightVariable(i)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",e=>{const i=e.target.closest("wa-tab-panel");i&&this.updateContextMenuFromComponent(i)}),this.tabGroup.value.addEventListener("click",e=>{const t=e.target,i=t.closest("wa-tab");if(i){const a=i.getAttribute("panel");if(a){const l=this.getTabPanel(a);if(l){const d=l.querySelector(".tab-content");if(d&&d.firstElementChild){const h=d.firstElementChild;h instanceof ut&&gt.set(h)}}}return}const r=t.closest("wa-scroller.tab-content");if(!r)return;const s=r.closest("wa-tab-panel");if(!s)return;const o=s.querySelector(".tab-content");if(o&&o.firstElementChild){const a=o.firstElementChild;a instanceof ut&&gt.set(a)}}),this.tabGroup.value.addEventListener("contextmenu",e=>{const t=e,i=t.target.closest("wa-scroller.tab-content");if(!i)return;t.preventDefault();const r=i.closest("wa-tab-panel");r&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(r);const s=r.querySelector("k-contextmenu");s&&s.show({x:t.clientX,y:t.clientY},t)})}))}),We(Wt,e=>{!this.containerId||e.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(e){if(super.updated(e),e.has("contributions")){const t=this.containerId===ci;this.contributions.forEach(i=>{const r=this.getTabPanel(i.name);if(!r)return;const s=r.querySelector(".tab-content");if(s&&s.firstElementChild){const o=s.firstElementChild;o instanceof ut&&(o.tabContribution=i,o.isEditor=t)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(r))})}}has(e){return this.tabGroup.value?!!this.getTabPanel(e):!1}activate(e){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",e)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(e){if(this.contributions.find(i=>i.name===e.name)){this.activate(e.name);return}this.contributions.push(e),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(e.name);const i=this.getTabPanel(e.name);if(i){const r=i.querySelector(".tab-content");if(r&&r.firstElementChild){const s=r.firstElementChild;s instanceof ut&&(s.tabContribution=e,s.isEditor=this.containerId===ci)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(i),this.updateToolbarHeightVariable(i),this.setupToolbarResizeObserver(i)})}})}handleTabAuxClick(e,t){e.button===tn.MIDDLE&&t.closable&&this.closeTab(e,t.name)}async closeTab(e,t){if(e.stopPropagation(),this.isDirty(t)&&!await td("Unsaved changes will be lost: Do you really want to close?"))return;const i=this.getTabPanel(t);if(!i)return;const r=this.contributions.find(o=>o.name===t);if(!r)return;this.cleanupTabInstance(i);const s=this.contributions.indexOf(r);s>-1&&this.contributions.splice(s,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:i})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(e,t){this.getTab(e).classList.toggle("part-dirty",t)}isDirty(e){return this.getTab(e).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=I.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(e){const t=this.resizeObservers.get(e);t&&(t.disconnect(),this.resizeObservers.delete(e));const i=e.querySelector(".tab-content");if(i&&i.firstElementChild){const r=i.firstElementChild;"close"in r&&typeof r.close=="function"&&r.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const e=this.tabGroup.value.querySelectorAll("wa-tab");if(e.length>0){const t=e.item(0).getAttribute("panel");t&&this.tabGroup.value.setAttribute("active",t)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(e){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${e}']`):null}getTab(e){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${e}']`):null}updateToolbarFromComponent(e){const t=e.querySelector(".tab-content");if(!t||!t.firstElementChild)return;const i=t.firstElementChild;if(!(i instanceof ut)||!i.renderToolbar)return;const r=e.querySelector("k-toolbar");r&&(r.partToolbarRenderer=()=>i.renderToolbar(),r.requestUpdate())}updateContextMenuFromComponent(e){const t=e.querySelector(".tab-content");if(!t||!t.firstElementChild)return;const i=t.firstElementChild;if(!(i instanceof ut)||!i.renderContextMenu)return;const r=e.querySelector("k-contextmenu");r&&(r.partContextMenuRenderer=()=>i.renderContextMenu(),r.requestUpdate())}updateToolbarHeightVariable(e){const t=e.querySelector(".tab-toolbar");if(!t)return;const i=t.offsetHeight;e.style.setProperty("--toolbar-height",`${i}px`)}setupToolbarResizeObserver(e){if(this.resizeObservers.has(e))return;const t=e.querySelector(".tab-toolbar");if(!t)return;const i=new ResizeObserver(()=>{this.updateToolbarHeightVariable(e)});i.observe(t),this.resizeObservers.set(e,i)}render(){const e=ft.getCurrentApp();return p`
            <wa-tab-group ${fi(this.tabGroup)}>
                ${Pe(this.contributions.length===0,()=>p`
                        <div class="empty-state">
                            ${Pe(e,()=>p`
                                    <div class="empty-content">
                                        <h2 class="empty-title">${e.name}</h2>
                                        ${Pe(e.description,()=>p`<p class="empty-description">${e.description}</p>`)}
                                    </div>
                                `,()=>p`
                                    <wa-icon name="folder-open" class="empty-icon"></wa-icon>
                                `)}
                        </div>
                    `,()=>_v(this.contributions,t=>t.name,t=>p`
                            <wa-tab panel="${t.name}"
                                    @auxclick="${i=>this.handleTabAuxClick(i,t)}">
                                <k-icon name="${t.icon}"></k-icon>
                                ${t.label}
                                ${Pe(t.closable,()=>p`
                                    <wa-icon name="xmark" label="Close"  @click="${i=>this.closeTab(i,t.name)}"></wa-icon>
                                `)}
                            </wa-tab>
                            <wa-tab-panel name="${t.name}">
                                <k-toolbar id="toolbar:${t.editorId??t.name}" 
                                           class="tab-toolbar"
                                           ?is-editor="${this.containerId===ci}"></k-toolbar>
                                <wa-scroller class="tab-content" orientation="vertical">
                                    ${t.component?t.component(t.name):B}
                                </wa-scroller>
                                <k-contextmenu id="contextmenu:${t.name}"
                                               ?is-editor="${this.containerId===ci}"></k-contextmenu>
                            </wa-tab-panel>
                        `))}
            </wa-tab-group>
        `}};fo.styles=A`
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
    `;Dd([E()],fo.prototype,"contributions",2);fo=Dd([C("k-tabs")],fo);var Dv=Object.defineProperty,Rv=Object.getOwnPropertyDescriptor,ks=(e,t,i,r)=>{for(var s=r>1?void 0:r?Rv(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&Dv(t,i,s),s};let Cr=class extends jt{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=e=>{if(!this.resizing)return;const i=(this.orientation==="horizontal"?e.clientX:e.clientY)-this.resizing.startPos,r=[...this.resizing.startSizes];r[this.resizing.handleIndex]+=i,r[this.resizing.handleIndex+1]-=i;const s=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,o=s*.05;if(r[this.resizing.handleIndex]>=o&&r[this.resizing.handleIndex+1]>=o){this.resizing.currentSizes=r;const a=r.map((l,d)=>{const u=`${(l/s*100).toFixed(2)}%`;return d===r.length-1?u:`${u} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=a:this.style.gridTemplateRows=a}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const e=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(t=>`${(t/e*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const e=Array.from(this.children).filter(t=>t.tagName!=="STYLE"&&t.tagName!=="SCRIPT"&&!t.classList.contains("resize-handle"));if(e.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=e,!this.settingsLoaded){this.settingsLoaded=!0;const t=await this.getDialogSetting();if(t&&Array.isArray(t.sizes)&&t.sizes.length===this.gridChildren.length){this.gridSizes=t.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(t=>t.trim());else{const t=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>t)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(e){super.updated(e),e.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((t,i)=>{t.style.overflow="hidden",t.style.height="100%",t.style.width="100%",t.style.gridColumn=this.orientation==="horizontal"?`${i*2+1}`:"1",t.style.gridRow=this.orientation==="vertical"?`${i*2+1}`:"1",t.style.display="flex",t.style.flexDirection="column"}))}startResize(e,t){if(e.preventDefault(),t>=this.gridChildren.length-1)return;const i=this.orientation==="horizontal"?e.clientX:e.clientY,r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=this.gridSizes.map(o=>o.endsWith("%")?parseFloat(o)/100*r:(o.endsWith("px"),parseFloat(o)));this.resizing={handleIndex:t,startPos:i,startSizes:s},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return B;const e=this.gridSizes.flatMap((t,i)=>i===this.gridSizes.length-1?[t]:[t,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=e,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=e),this.style.overflow="hidden",p`
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
            
            ${this.gridChildren.map((t,i)=>{if(i<this.gridChildren.length-1){const r=this.orientation==="horizontal"?`${i*2+2}`:"1",s=this.orientation==="vertical"?`${i*2+2}`:"1";return p`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${r};
                                grid-row: ${s};
                            "
                            @mousedown=${o=>this.startResize(o,i)}
                        ></div>
                    `}return B})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};ks([c()],Cr.prototype,"orientation",2);ks([c()],Cr.prototype,"sizes",2);ks([E()],Cr.prototype,"gridSizes",2);ks([E()],Cr.prototype,"gridChildren",2);Cr=ks([C("k-resizable-grid")],Cr);const ql=(e,t)=>!e.leaf&&t.leaf?-1:e.leaf&&!t.leaf?1:e.label.localeCompare(t.label);var zv=Object.defineProperty,Ov=Object.getOwnPropertyDescriptor,Rd=(e,t,i,r)=>{for(var s=r>1?void 0:r?Ov(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&zv(t,i,s),s};const Mt=Gi("filebrowser"),Iv=250;let mo=class extends ut{constructor(){super(...arguments),this.treeRef=pi(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),We(Wt,e=>{e.target==="system.icons"&&this.requestUpdate()}),this.subscribe(cr,e=>this.onWorkspaceChanged(e)),this.subscribe(ls,e=>this.onWorkspaceConnected(e))}disconnectedCallback(){this.workspaceChangedDebounceId!==void 0&&(clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=void 0),this.pendingWorkspaceDir=void 0,super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),this.setupDragAndDrop()}updated(e){super.updated(e),e.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const e=await Yi.getWorkspace();e?await this.loadWorkspace(e):Ft.execute("help")}renderToolbar(){return p`
            <k-command icon="folder-open" title="${Mt("CONNECT_WORKSPACE")}" dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="${Mt("RELOAD_WORKSPACE")}"></k-command>
            <k-command cmd="touch" icon="plus" title="${Mt("CREATE_NEW")}" dropdown="filebrowser.create"></k-command>
        `}renderContextMenu(){return p`
            <k-command cmd="open_editor" icon="folder-open">${Mt("OPEN")}</k-command>
            <k-command cmd="touch" icon="plus" dropdown="filebrowser.create">${Mt("CREATE_NEW")}</k-command>
        `}onWorkspaceChanged(e){this.pendingWorkspaceDir=e,this.workspaceChangedDebounceId!==void 0&&clearTimeout(this.workspaceChangedDebounceId),this.workspaceChangedDebounceId=setTimeout(()=>{this.workspaceChangedDebounceId=void 0;const t=this.pendingWorkspaceDir;this.pendingWorkspaceDir=void 0,t&&this.applyWorkspaceChange(t)},Iv)}async applyWorkspaceChange(e){Kr.set(void 0),await this.loadWorkspace(e,!0),await this.syncTreeSelection()}async onWorkspaceConnected(e){await this.loadWorkspace(e,!0)}async loadWorkspace(e,t=!1){this.workspaceDir=e,e?this.root=await this.resourceToTreeNode(e,!0,t):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const t=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];t.length>0&&Kr.set(t[0].model?.data)}async resourceToTreeNode(e,t=!1,i=!1){const r=e instanceof cs,s={data:e,label:e.getName(),leaf:r,children:[]};if(e instanceof Vs&&t){for(const o of await e.listChildren(i)){const a=await this.resourceToTreeNode(o,!1);s.children.push(a)}s.children.sort(ql)}return s}createTreeItems(e,t=!1){if(!e)return p``;const i=!e.leaf&&e.children.length===0,r=e.data,s=r instanceof cs,o=s?_o.getFileIcon(r.getName()):e.icon||"folder-open";return p`
            <wa-tree-item 
                draggable=${s}
                @dragstart=${s?this.nobubble(a=>this.onDragStart(a,r)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(a=>this.onLazyLoad(a,e))}
                .model=${e} 
                ?expanded=${t}
                ?lazy=${i}>
                <span><wa-icon name=${o} label="${e.leaf?Mt("FILE"):Mt("FOLDER")}"></wa-icon> ${e.label}</span>
                ${e.children.map(a=>this.createTreeItems(a,!1))}
            </wa-tree-item>`}onDragStart(e,t){if(!e.dataTransfer)return;const i=t.getWorkspacePath(),r=t.getName();if(e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/plain",i),e.dataTransfer.setData("application/x-workspace-file",i),e.dataTransfer.setData("text/uri-list",i),e.dataTransfer.setDragImage){const s=document.createElement("div");s.textContent=r,s.style.position="absolute",s.style.top="-1000px",s.style.padding="4px 8px",s.style.background="var(--wa-color-neutral-10)",s.style.border="1px solid var(--wa-color-neutral-30)",s.style.borderRadius="4px",document.body.appendChild(s),e.dataTransfer.setDragImage(s,0,0),setTimeout(()=>document.body.removeChild(s),0)}}async onLazyLoad(e,t){const i=t.data;i instanceof Vs&&t.children.length===0&&await this.loadNodeChildren(t,i)}async loadNodeChildren(e,t){if(!this.loadingNodes.has(e)){this.loadingNodes.add(e);try{for(const i of await t.listChildren(!1)){Cc&&i.getName().startsWith(".");const r=await this.resourceToTreeNode(i,!1);e.children.push(r)}e.children.sort(ql),this.requestUpdate()}catch(i){console.error("Failed to load directory children:",i)}finally{this.loadingNodes.delete(e)}}}async onFileDoubleClicked(e){const i=e.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:i})}onSelectionChanged(e){const t=e.detail.selection;if(t&&t.length>0){const i=t[0].model;Kr.set(i.data)}else Kr.set(void 0)}setupDragAndDrop(){const e=this.treeRef.value;if(!e)return;const t=o=>{if(!o.dataTransfer?.types.includes("Files"))return;o.preventDefault(),o.dataTransfer.dropEffect="copy",e.classList.add("drag-over");const l=o.target.closest("wa-tree-item");l&&l!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=l,l.classList.add("drop-target"))},i=o=>{o.dataTransfer?.types.includes("Files")&&(o.preventDefault(),e.classList.add("drag-over"))},r=o=>{const a=e.getBoundingClientRect(),l=o.clientX,d=o.clientY;(l<=a.left||l>=a.right||d<=a.top||d>=a.bottom)&&(e.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},s=async o=>{if(o.preventDefault(),e.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!o.dataTransfer||!this.workspaceDir)return;const a=Array.from(o.dataTransfer.files);if(a.length===0)return;const l=await this.getDropTarget(o);await this.handleFilesDrop(a,l)};e.removeEventListener("dragover",t),e.removeEventListener("dragenter",i),e.removeEventListener("dragleave",r),e.removeEventListener("drop",s),e.addEventListener("dragover",t),e.addEventListener("dragenter",i),e.addEventListener("dragleave",r),e.addEventListener("drop",s)}async getDropTarget(e){const i=e.target.closest("wa-tree-item");if(i){const s=i.model.data;if(s instanceof Vs)return s;const o=s.getParent();if(o)return o}return this.workspaceDir}async handleFilesDrop(e,t){const i=e.length;let r=0,s=0,o=0;for(const a of e)try{const l=this.buildTargetPath(t,a.name);if(await this.workspaceDir.getResource(l)&&!await td(Mt("FILE_EXISTS_OVERWRITE",{fileName:a.name}))){o++;continue}await(await this.workspaceDir.getResource(l,{create:!0})).saveContents(a),r++}catch(l){console.error(`Failed to upload ${a.name}:`,l),s++}console.log(`Uploaded ${r}/${i} files${o>0?`, ${o} skipped`:""}${s>0?`, ${s} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(e,t){const i=e.getWorkspacePath();return i?`${i}/${t}`:t}render(){return p`
            <div class="tree" ${fi(this.treeRef)} style="--drop-files-text: '${Mt("DROP_FILES_HERE")}'">
                ${Pe(!this.workspaceDir,()=>p`
                    <k-no-content message="${Mt("SELECT_WORKSPACE")}"></k-no-content>`,()=>p`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};mo.styles=A`
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
    `;Rd([E()],mo.prototype,"root",2);mo=Rd([C("k-filebrowser")],mo);var Pv=Object.getOwnPropertyDescriptor,Mv=(e,t,i,r)=>{for(var s=r>1?void 0:r?Pv(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=a(s)||s);return s};const Ha=Gi("tasks");I.registerContribution(yo,{html:"<k-tasks></k-tasks>"});let jr=null;function zd(){return jr||(jr=document.createElement("div"),jr.id="progress-dialog-container",document.body.appendChild(jr)),jr}function Hl(){return zd().querySelector("wa-dialog")}function Nv(){Od(!0)}function Od(e=!1){const t=zd(),i=mr.getActiveTasks();if(i.length===0){mt(p``,t);return}const s=Hl();if(!(e||s?.open===!0))return;const a=()=>{const h=Hl();h&&(h.open=!1)},l=()=>{mt(p``,t)},d=p`
        <wa-dialog 
            label="${Ha("ACTIVE_TASKS")}" 
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
                ${i.map(h=>{const u=h.progress>=0||h.totalSteps>0,f=h.progress>=0?h.progress:h.totalSteps>0?Math.round(h.currentStep/h.totalSteps*100):0,g=h.progress<0&&h.totalSteps>0;return p`
                        <div class="task-item">
                            <div class="task-header">
                                <wa-icon name="hourglass" style="color: var(--wa-color-warning-fill-loud);"></wa-icon>
                                <div style="flex: 1;">
                                    <div class="task-name">${h.name}</div>
                                    ${h.message?p`
                                        <div class="task-message">${h.message}</div>
                                    `:""}
                                </div>
                            </div>
                            <div class="task-progress">
                                ${u?p`
                                    <wa-progress-bar value="${f}">
                                        ${g?`${h.currentStep}/${h.totalSteps} - `:""}${f}%
                                    </wa-progress-bar>
                                `:p`
                                    <wa-progress-bar indeterminate></wa-progress-bar>
                                `}
                            </div>
                        </div>
                    `})}
            </div>
        </wa-dialog>
    `;mt(d,t)}let Wa=class extends ut{doBeforeUI(){this.watch(Ca,()=>{Od(),this.requestUpdate()})}handleIndicatorClick(){Nv()}render(){Ca.get();const t=mr.getActiveTasks().length;return t===0?p``:p`
            <div class="task-indicator" @click=${this.handleIndicatorClick} title="${Ha("ACTIVE_TASKS_TITLE",{taskCount:t.toString()})}">
                <wa-spinner
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);"
                    label="${Ha("ACTIVE_TASKS")}"
                ></wa-spinner>
                <span class="task-count">${t}</span>
                <div class="task-bar-wrap"><wa-progress-bar indeterminate></wa-progress-bar></div>
            </div>
        `}};Wa.styles=A`
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
        
        .task-bar-wrap {
            width: 3rem;
        }
        
        .task-bar-wrap wa-progress-bar {
            --track-height: 4px;
        }
    `;Wa=Mv([C("k-tasks")],Wa);var Fv=Object.getOwnPropertyDescriptor,Bv=(e,t,i,r)=>{for(var s=r>1?void 0:r?Fv(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=a(s)||s);return s};const ba=Gi("workspace");let Wl=class extends jt{constructor(){super(...arguments),this.workspaceName=ba("NO_WORKSPACE")}doInitUI(){this.updateWorkspaceName(),We(ls,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Yi.getWorkspace().then(e=>{this.workspaceName=e?.getName()||ba("NO_WORKSPACE"),this.requestUpdate()})}handleLoadWorkspace(){Ft.execute("load_workspace",{source:this})}render(){return p`
            <wa-button 
                appearance="plain"
                size="small"
                title="${ba("LOAD_WORKSPACE")}"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};Wl=Bv([C("k-workspace-name")],Wl);var Uv=Object.getOwnPropertyDescriptor,Vv=(e,t,i,r)=>{for(var s=r>1?void 0:r?Uv(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=a(s)||s);return s};const va=Gi("partname");I.registerContribution(yo,{html:"<k-part-name></k-part-name>"});let jl=class extends jt{doBeforeUI(){this.watch(gt,()=>{this.requestUpdate()})}getPartName(){const e=gt.get();return e&&(e.tabContribution?.label||e.getAttribute("id"))||va("NO_PART")}render(){const t=gt.get()?.tabContribution?.icon||"box";return p`
            <wa-button 
                appearance="plain"
                size="small"
                title="${va("ACTIVE_PART")}">
                <k-icon slot="start" name="${t}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};jl=Vv([C("k-part-name")],jl);var qv=Object.defineProperty,Hv=Object.getOwnPropertyDescriptor,Cs=(e,t,i,r)=>{for(var s=r>1?void 0:r?Hv(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&qv(t,i,s),s};const Wv=Xi("KExtensions"),Oe=Gi("extensions");let ji=class extends ut{constructor(){super(...arguments),this.filterText="",this.showRegisterDialog=!1,this.registerExtensionData={}}doInitUI(){We(Yr,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(e){W.enable(e.id,!0),this.requestUpdate()}disable(e){W.disable(e.id,!0),this.requestUpdate()}isExtensionRequired(e){const t=ft.getCurrentApp();return!t||!t.extensions?!1:t.extensions.includes(e)}selectionChanged(e){const t=e.detail.selection||[];t.length>0&&t[0].model?this.selectedExtension=t[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return W.getExtensions();const e=this.filterText.toLowerCase();return W.getExtensions().filter(t=>String(t.name).toLowerCase().includes(e)||(t.description?String(t.description).toLowerCase().includes(e):!1)||t.id.toLowerCase().includes(e))}getGroupedExtensions(){const e=this.getFilteredExtensions(),t=[],i=[];return e.forEach(r=>{W.isEnabled(r.id)?t.push(r):i.push(r)}),t.sort((r,s)=>String(r.name).localeCompare(String(s.name))),i.sort((r,s)=>String(r.name).localeCompare(String(s.name))),{enabled:t,available:i}}isExternalExtension(e){return e.external===!0}handleFilterInput(e){this.filterText=e.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}async handleRegisterExtension(){try{const e=await tf("Enter extension URL or source identifier:","",!1);if(!e)return;await mr.runAsync("Registering extension",async()=>{let t=e;Nt.isGitHubUrl(e)&&(t=Nt.convertGitHubUrlToSource(e));const i=Nt.parseSource(t);i?.type==="github"?await this.fetchGitHubMetadata(i,t):(this.registerExtensionData={url:t,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate())})}catch(e){kt(`Failed to register extension: ${e}`)}}async fetchGitHubMetadata(e,t){try{const i=await Nt.fetchGitHubPackageJson(e),r=e.owner,s=e.repo,o=i.name||`ext.${r}-${s}`,a=i.name||`${r}/${s}`,l=i.description||"",d=i.version||"",h=i.author||(typeof i.author=="string"?i.author:i.author?.name)||"";this.registerExtensionData={id:o,name:a,description:l,url:t,version:d,author:h,icon:"puzzle-piece",external:!0},this.showRegisterDialog=!0,this.requestUpdate()}catch(i){Wv.warn(`Could not fetch package.json, using defaults: ${i}`),this.registerExtensionData={url:t,id:"",name:"",description:""},this.showRegisterDialog=!0,this.requestUpdate()}}async confirmRegisterExtension(){if(!this.registerExtensionData.url){kt("URL is required");return}if(!this.registerExtensionData.id){kt("Extension ID is required");return}if(!this.registerExtensionData.name){kt("Extension name is required");return}try{await mr.runAsync("Registering extension",async()=>{const e={id:this.registerExtensionData.id,name:this.registerExtensionData.name,description:this.registerExtensionData.description,url:this.registerExtensionData.url,version:this.registerExtensionData.version,author:this.registerExtensionData.author,icon:this.registerExtensionData.icon||"puzzle-piece",external:!0};W.registerExtension(e),await W.loadExtensionFromUrl(this.registerExtensionData.url,e.id),di(`Extension ${e.name} registered successfully`),this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()})}catch(e){kt(`Failed to register extension: ${e}`)}}cancelRegisterExtension(){this.showRegisterDialog=!1,this.registerExtensionData={},this.requestUpdate()}renderToolbar(){return p`
            <wa-input
                placeholder="${Oe("FILTER_PLACEHOLDER")}"
                .value=${this.filterText}
                @input=${e=>this.handleFilterInput(e)}
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
        `}render(){const e=this.getGroupedExtensions(),t=e.enabled.length>0||e.available.length>0;return p`
            ${Pe(this.showRegisterDialog,()=>p`
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
                    ${t?p`
                        ${e.enabled.length>0?p`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                    ${Oe("INSTALLED")} (${e.enabled.length})
                                </span>
                                ${e.enabled.map(i=>{const r=this.isExternalExtension(i);return p`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${i}>
                                            <span><k-icon name="${i.icon}"></k-icon></span> ${i.name}${r?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                        </wa-tree-item>
                                    `})}
                            </wa-tree-item>
                        `:""}
                        ${e.available.length>0?p`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    ${Oe("AVAILABLE")} (${e.available.length})
                                </span>
                                ${e.available.map(i=>{const r=this.isExternalExtension(i);return p`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${i}>
                                            <span><k-icon name="${i.icon}"></k-icon></span> ${i.name}${r?p` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                        </wa-tree-item>
                                    `})}
                            </wa-tree-item>
                        `:""}
                    `:""}
                    ${t?"":p`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            ${Oe("NO_MATCHES",{filterText:this.filterText})}
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${Pe(this.selectedExtension,i=>{const r=this.isExternalExtension(i),s=W.isEnabled(i.id);return p`
                                <h1><k-icon name="${i.icon}"></k-icon> ${i.name}${r?" (External)":""}</h1>
                                ${Pe(r,()=>p`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${Oe("EXTERNAL_EXTENSION")}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${Pe(s,()=>p`
                                        <wa-button 
                                            title="${this.isExtensionRequired(i.id)?Oe("REQUIRED_HINT"):Oe("DISABLE_TITLE")}" 
                                            @click="${()=>this.disable(i)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(i.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${Oe("UNINSTALL")}
                                        </wa-button>
                                        ${Pe(this.isExtensionRequired(i.id),()=>p`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>${Oe("REQUIRED_HINT")}</span>
                                            </div>
                                        `)}
                                    `,()=>p`
                                        <wa-button 
                                            title="${Oe("ENABLE_TITLE")}" 
                                            @click="${()=>this.enable(i)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;${Oe("INSTALL")}
                                        </wa-button>
                                    `)}
                                </div>

                                ${Pe(i.experimental,()=>p`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${Oe("EXPERIMENTAL")}</i></small>
                                    </div>
                                `)}

                                ${Pe(i.version||i.author,()=>p`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${Pe(i.version,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${Oe("VERSION")} <strong>${i.version}</strong></span>
                                            </div>
                                        `)}
                                        ${Pe(i.author,()=>p`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${Oe("AUTHOR")} <strong>${i.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${i.description}</p>

                                ${Pe(i.dependencies&&i.dependencies.length>0,()=>p`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${Oe("DEPENDENCIES")}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${i.dependencies.map(o=>{const a=W.getExtensions().find(d=>d.id===o),l=W.isEnabled(o);return p`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${l?"check-circle":"circle"}" 
                                                            style="color: ${l?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        <k-icon name="${a?.icon||"puzzle-piece"}"></k-icon>
                                                        <span>${a?.name||o}</span>
                                                        ${l?"":p`
                                                            <span class="dependency-badge">${Oe("NOT_INSTALLED")}</span>
                                                        `}
                                                    </div>
                                                `})}
                                        </div>
                                        <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                            <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                            ${Oe("DEPENDENCIES_HINT")}
                                        </small>
                                    </div>
                                `)}
                            `})}
                </div>
            </wa-split-panel>
        `}};ji.styles=A`
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
    `;Cs([E()],ji.prototype,"selectedExtension",2);Cs([E()],ji.prototype,"filterText",2);Cs([E()],ji.prototype,"showRegisterDialog",2);Cs([E()],ji.prototype,"registerExtensionData",2);ji=Cs([C("k-extensions")],ji);var jv=Object.defineProperty,Xv=Object.getOwnPropertyDescriptor,No=(e,t,i,r)=>{for(var s=r>1?void 0:r?Xv(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&jv(t,i,s),s};const Ie=Gi("logterminal");let Er=class extends ut{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=pi()}connectedCallback(){super.connectedCallback(),this.loadSettings(),kh(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Ch()}log(e,t,i="info"){const r={timestamp:new Date,level:i,source:e,message:t};this.messages=[...this.messages,r],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const s=this.containerRef.value;s&&(s.scrollTop=s.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(e=>e.level===this.filter)}formatTimestamp(e){return e.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(e){switch(e){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(e){switch(e){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const e=this.messages.filter(s=>s.level==="info").length,t=this.messages.filter(s=>s.level==="warning").length,i=this.messages.filter(s=>s.level==="error").length,r=this.messages.filter(s=>s.level==="debug").length;return p`
            <k-command 
                icon="list"
                title="${Ie("ALL_LOGS")}"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings(),this.updateToolbar()}}>
                ${Ie("ALL")} (${this.messages.length})
            </k-command>

            <k-command 
                icon="circle-info"
                title="${Ie("INFO_LOGS")}"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings(),this.updateToolbar()}}>
                ${Ie("INFO")}${e>0?` (${e})`:""}
            </k-command>

            <k-command 
                icon="triangle-exclamation"
                title="${Ie("WARNING_LOGS")}"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings(),this.updateToolbar()}}>
                ${Ie("WARNINGS")}${t>0?` (${t})`:""}
            </k-command>

            <k-command 
                icon="circle-xmark"
                title="${Ie("ERROR_LOGS")}"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings(),this.updateToolbar()}}>
                ${Ie("ERRORS")}${i>0?` (${i})`:""}
            </k-command>

            <k-command 
                icon="bug"
                title="${Ie("DEBUG_LOGS")}"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings(),this.updateToolbar()}}>
                ${Ie("DEBUG")}${r>0?` (${r})`:""}
            </k-command>

            <wa-divider orientation="vertical"></wa-divider>

            <k-command 
                icon="arrow-down" 
                title="${this.autoScroll?Ie("AUTO_SCROLL_ENABLED"):Ie("AUTO_SCROLL_DISABLED")}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings(),this.updateToolbar()}}>
                ${this.autoScroll?Ie("AUTO_SCROLL"):Ie("MANUAL")}
            </k-command>

            <k-command 
                icon="trash" 
                title="${Ie("CLEAR_LOGS")}"
                .action=${()=>this.clear()}>
                ${Ie("CLEAR")}
            </k-command>
        `}render(){const e=this.getFilteredMessages();return p`
            <div class="log-terminal">
                <div class="messages" ${fi(this.containerRef)}>
                    ${e.length===0?p`<div class="empty-state">${Ie("NO_LOG_MESSAGES")}</div>`:e.map(t=>p`
                            <div class="message" data-level="${t.level}">
                                <span class="timestamp">${this.formatTimestamp(t.timestamp)}</span>
                                <wa-icon 
                                    name="${this.getLevelIcon(t.level)}" 
                                    label="${t.level}"
                                    style="color: ${this.getLevelColor(t.level)}">
                                </wa-icon>
                                <span class="source">[${t.source}]</span>
                                <span class="text">${t.message}</span>
                            </div>
                        `)}
                </div>
            </div>
        `}async loadSettings(){const e=await this.getDialogSetting();e&&(typeof e.filter=="string"&&(e.filter==="all"||["info","warning","error","debug"].includes(e.filter))&&(this.filter=e.filter),typeof e.autoScroll=="boolean"&&(this.autoScroll=e.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};Er.styles=A`
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
    `;No([E()],Er.prototype,"messages",2);No([E()],Er.prototype,"autoScroll",2);No([E()],Er.prototype,"filter",2);Er=No([C("k-log-terminal")],Er);var Gv=Object.defineProperty,Kv=Object.getOwnPropertyDescriptor,Et=(e,t,i,r)=>{for(var s=r>1?void 0:r?Kv(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&Gv(t,i,s),s};const Yv=Gi("fastviews");let at=class extends bs{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=pi(),this.tabsRef=pi(),this.resizeHandleRef=pi(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(e){if(!this.disabled)if(this.containerId){const t=document.querySelector(`k-tabs#${this.containerId}`);if(!t){console.error(`k-fastviews: Tab container with id "${this.containerId}" not found`);return}t.open(e)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const t=this.tabsRef.value;t&&t.open(e)})}handleDrawerHide(){this.drawerOpen=!1}startResize(e){e.preventDefault(),e.stopPropagation();const t=this.drawerRef.value;if(!t)return;let r=(()=>{const a=t.shadowRoot?.querySelector('[part="panel"]');if(a&&a.offsetWidth>0)return a.offsetWidth;const h=(window.getComputedStyle(t).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(h){const u=parseFloat(h[1]),f=h[2];if(f==="px")return u;if(f==="vw")return u/100*window.innerWidth;if(f==="vh")return u/100*window.innerHeight;if(f==="%")return u/100*window.innerWidth}return 0})();r===0&&(r=window.innerWidth*.5);const s=a=>{this.resizing&&(a.preventDefault(),a.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const l=this.resizing.startX-a.clientX,d=Math.round(this.resizing.startSize+l),h=200,u=Math.round(window.innerWidth*.9);if(d>=h&&d<=u){this.drawerSize=`${d}px`;const f=this.drawerRef.value;f&&(f.style.setProperty("--size",this.drawerSize),f.style.setProperty("transition","none"))}this.resizing.rafId=null}))},o=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const a=this.drawerRef.value;a&&a.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:e.clientX,startSize:r,handleMouseMove:s,handleMouseUp:o,rafId:null},document.addEventListener("mousemove",s,{passive:!1}),document.addEventListener("mouseup",o,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),We(Wt,e=>{this.target&&e.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const e=I.getContributions(this.target);this.tabContributions=e.filter(t=>"name"in t),this.requestUpdate()}renderTabContribution(e){return p`
            <wa-dropdown-item 
                @click=${()=>this.handleTabClick(e)}>
                <k-icon name="${e.icon||""}" label="${e.label}" slot="icon"></k-icon>
                ${e.label}
            </wa-dropdown-item>
        `}render(){return!this.target||this.tabContributions.length===0?B:p`
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
                
                ${this.title?p`
                    <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                `:B}
                
                ${this.tabContributions.map(e=>this.renderTabContribution(e))}
            </wa-dropdown>

            ${this.containerId?B:p`
                <wa-drawer 
                    ${fi(this.drawerRef)}
                    label="${this.title||Yv("FAST_VIEWS")}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${fi(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <k-tabs 
                        ${fi(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </k-tabs>
                </wa-drawer>
            `}
        `}};at.styles=A`
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
    `;Et([c()],at.prototype,"target",2);Et([c()],at.prototype,"title",2);Et([c()],at.prototype,"icon",2);Et([c({type:Boolean})],at.prototype,"disabled",2);Et([c()],at.prototype,"appearance",2);Et([c()],at.prototype,"size",2);Et([c()],at.prototype,"placement",2);Et([c()],at.prototype,"containerId",2);Et([E()],at.prototype,"tabContributions",2);Et([E()],at.prototype,"drawerOpen",2);Et([E()],at.prototype,"drawerSize",2);at=Et([C("k-fastviews")],at);var Zv=Object.getOwnPropertyDescriptor,Qv=(e,t,i,r)=>{for(var s=r>1?void 0:r?Zv(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=a(s)||s);return s};function Jv(){let e=document.getElementById("global-dialog-container");return e||(e=document.createElement("div"),e.id="global-dialog-container",document.body.appendChild(e)),e}const Id=e=>{try{return new Intl.DisplayNames([e],{type:"language"}).of(e)||e.toUpperCase()}catch{return e.toUpperCase()}},ew=()=>{const e=pu.get(),t=new Set;for(const i of e)if(i.namespace){const r=i;for(const s in r)s!=="namespace"&&s!=="label"&&s!=="language"&&s!=="translations"&&typeof r[s]=="object"&&t.add(s)}return Array.from(t).sort()},tw=async()=>{const e=ew(),t=zc.get();return new Promise(i=>{const r=Jv();let s=!1;const o=()=>{const h=r.querySelector("wa-dialog");h&&!s&&(h.open=!1)},a=()=>{s||(s=!0,mt(p``,r),i())},l=async h=>{await Se.set(Ea,h),o()},d=p`
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
                    ${e.map(h=>p`
                        <div 
                            class="language-item ${h===t?"active":""}"
                            @click=${()=>l(h)}>
                            <span class="language-code">${h.toUpperCase()}</span>
                            <span class="language-name">${Id(h)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;mt(d,r)})};let ja=class extends jt{render(){const e=zc.get(),t=Id(e),i=`${e.toUpperCase()} ${t}`;return p`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${t}"
                @click=${()=>tw()}>
                ${i}
            </wa-button>
        `}};ja.styles=A`
        :host {
            display: inline-block;
        }
    `;ja=Qv([C("k-language-selector")],ja);var iw=Object.defineProperty,rw=Object.getOwnPropertyDescriptor,Pd=(e,t,i,r)=>{for(var s=r>1?void 0:r?rw(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&iw(t,i,s),s};const Md="app-switcher";I.registerContribution(Ni,{id:Md,label:"Switch Application",buttons:[Zc],component:e=>{const t=e?.apps||[],i=e?.currentAppId,r=e?.selectApp;return p`
            <wa-scroller orientation="vertical" style="min-width: 300px; max-height: 400px; padding: var(--wa-space-m);">
                <div style="display: flex; flex-direction: column; gap: var(--wa-space-s);">
                    ${t.map(s=>p`
                        <wa-card 
                            style="cursor: pointer;"
                            variant=${s.id===i?"brand":"neutral"}
                            @click=${()=>r(s)}>
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--wa-space-xs);">
                                <span style="font-weight: 600;">${s.name}</span>
                                ${s.version?p`<wa-badge variant="neutral">v${s.version}</wa-badge>`:""}
                            </div>
                            ${s.description?p`<p style="margin: 0; font-size: 0.875rem; line-height: 1.4;">${s.description}</p>`:""}
                            <div style="font-size: 0.75rem; color: var(--wa-color-neutral-foreground-quiet); font-family: monospace; margin-top: var(--wa-space-xs);">ID: ${s.id}</div>
                        </wa-card>
                    `)}
                </div>
            </wa-scroller>
        `},onButton:async()=>!0});const sw=async()=>{const e=ft.getRegisteredApps(),t=ft.getCurrentApp();if(e.length===0)return;const i={apps:e,currentAppId:t?.id,selectApp:async r=>{if(r.id===t?.id){i.close?.();return}try{await ft.setPreferredAppId(r.id),await ft.loadApp(r.id,document.body)}catch(s){console.error("Failed to switch app:",s)}finally{i.close?.()}},close:void 0};await So.open(Md,i)};let go=class extends jt{doBeforeUI(){this.currentApp=ft.getCurrentApp();const e=()=>{this.currentApp=ft.getCurrentApp(),this.requestUpdate()};return window.addEventListener("app-loaded",e),()=>{window.removeEventListener("app-loaded",e)}}render(){const e=ft.getRegisteredApps(),t=this.currentApp?.name||"No App";return e.length<=1?p``:p`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current app: ${t}. Click to switch applications."
                @click=${()=>sw()}>
                <wa-icon name="grip" style="margin-right: 0.5rem;"></wa-icon>
                ${t}
            </wa-button>
        `}};go.styles=A`
        :host {
            display: inline-block;
        }
    `;Pd([E()],go.prototype,"currentApp",2);go=Pd([C("k-app-switcher")],go);var ow=Object.defineProperty,aw=Object.getOwnPropertyDescriptor,An=(e,t,i,r)=>{for(var s=r>1?void 0:r?aw(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&ow(t,i,s),s};let ps=class extends bs{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return p`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};ps.styles=A`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;An([c()],ps.prototype,"message",2);An([c()],ps.prototype,"icon",2);ps=An([C("k-no-content")],ps);I.registerContribution(Xs,{name:"filebrowser",label:"Workspace",icon:"folder-open",component:e=>p`<k-filebrowser id="${e}"></k-filebrowser>`});I.registerContribution("system.fastviews-bottomend",{name:"log-terminal",label:"Log Messages",icon:"list",component:e=>p`<k-log-terminal id="${e}"></k-log-terminal>`});I.registerContribution(en,{slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"});I.registerContribution(fs,{label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});I.registerContribution(fs,{label:"Fast Views",html:'<k-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></k-fastviews>'});I.registerContribution(fs,{label:"Language",html:()=>p`<k-language-selector></k-language-selector>`});I.registerContribution(Ar,{label:"App Switcher",html:()=>p`<k-app-switcher></k-app-switcher>`});const nw=Xi("MarketplaceCatalogContributions");nw.debug("Marketplace catalog URLs are set by the app host via applyAppHostConfig()");async function lw(e,t=!0){const i=await Yi.getWorkspace();if(!i)return null;const r=e?.path;return t&&!r?null:{workspace:i,path:r||""}}function _n(e){return e&&typeof e.getContent=="function"&&typeof e.getSelection=="function"&&typeof e.getSnippet=="function"&&typeof e.getLanguage=="function"&&typeof e.getFilePath=="function"}function ui(e=!1){const t={filePath:null,language:null};return e?{...t,snippet:null,cursorLine:null}:t}async function cw(e,t=!0){const i=await lw(e,t);if(!i)return null;const{workspace:r,path:s}=i;if(!s)return null;try{const o=await r.getResource(s);return!o||!(o instanceof cs)?null:{workspace:r,path:s,file:o}}catch{return null}}yt({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async e=>{await window.showDirectoryPicker({mode:"readwrite"}).then(t=>Yi.connectWorkspace(t)).catch(t=>{kt(t.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});yt({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async e=>{const t=await Yi.getWorkspace();t||kt("No workspace selected."),t.touch()}}});yt({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"The path of the file to open within the workspace; if omitted, the active selection is opened",required:!1}]},handler:{execute:async e=>{const t=e.params?.path;let i=null;if(t)i=(await cw({path:t}))?.file??null;else{const r=Kr.get();i=r instanceof cs?r:null}i&&await _o.loadEditor(i)}}});yt({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async e=>{const t=e.activeEditor;if(!_n(t))return{...ui(),content:null};try{return{content:t.getContent(),filePath:t.getFilePath(),language:t.getLanguage()}}catch{return{...ui(),content:null}}}}});yt({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async e=>{const t=e.activeEditor;if(!_n(t))return{...ui(),selection:null};try{return{selection:t.getSelection(),filePath:t.getFilePath(),language:t.getLanguage()}}catch{return{...ui(),selection:null}}}}});yt({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async e=>{const t=e.activeEditor;if(!_n(t))return ui(!0);try{const i=e.params?.lines?parseInt(e.params.lines,10):5;if(isNaN(i)||i<0)return ui(!0);const r=t.getSnippet(i);return r?{snippet:r.snippet,filePath:t.getFilePath(),language:t.getLanguage(),cursorLine:r.cursorLine}:ui(!0)}catch{return ui(!0)}}}});yt({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async e=>{const t=ft.getCurrentApp();if(!t){kt("No app loaded");return}const i=Zs.hasPackages(),r=Zs.renderTree();let s=null;const o=()=>(s||(s=document.getElementById("global-dialog-container")||document.createElement("div"),s.id||(s.id="global-dialog-container",document.body.appendChild(s))),s),a=()=>{s&&mt(p``,s)},l=z=>{const O=ie.parse(z,{async:!1});return p`${Jt(O)}`};let d=[];if(t.releaseHistory)if(typeof t.releaseHistory=="function")try{d=await t.releaseHistory()}catch(z){console.error("Failed to load release history from app:",z),d=[]}else d=t.releaseHistory;t.version;const h=d.length>0?d.findIndex(z=>z.tag_name===t.version):-1,u=h>=0?h:0;let f=u;const g=z=>{if(d.length===0)return"";const O=d[z],U=O.tag_name===t.version;let T=`**Version:** ${O.tag_name}`;U&&(T+=" (Current)"),T+=`

`;const D=new Date(O.published_at).toLocaleDateString();if(T+=`**Released:** ${D}

`,!U){const R=t.version.replace(/^v/,""),F=O.tag_name.replace(/^v/,""),ae=R.split(".").map(Number),we=F.split(".").map(Number);let ge=!1;for(let ye=0;ye<Math.max(ae.length,we.length);ye++){const Ke=ae[ye]||0,De=we[ye]||0;if(De>Ke){ge=!0;break}if(De<Ke)break}ge&&(T+=`⚠️ **Update available - reload page to update**

`)}return O.body&&(T+=`---

${O.body}`),T},b=()=>{a()},w=()=>{a()},_=z=>{const O=g(z),U=d.length>0,T=p`
                    <wa-dialog 
                        label="About ${t.name} - ${t.version}"
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
                        <small>${t.description}</small>
                        <div class="dialog-content">
                            <wa-tab-group>
                                ${d.length>0?p`
                                    <wa-tab slot="nav" panel="release">Release History</wa-tab>
                                    <wa-tab-panel name="release">
                                        ${l(O)}
                                    </wa-tab-panel>
                                `:""}
                                
                                ${i?p`
                                    <wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>
                                    <wa-tab-panel name="packages">
                                        ${r}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${U?p`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${z===d.length-1}
                                    @click=${()=>{z<d.length-1&&(f=z+1,_(f))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${z===0}
                                    @click=${()=>{z>0&&(f=z-1,_(f))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;mt(T,o())};return _(u),new Promise(z=>{const O=()=>{s?.querySelector("wa-dialog[open]")?setTimeout(O,100):z()};O()})}}});yt({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async e=>{const t=is.get()||gt.get();t&&t.isDirty()&&t.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const e=gt.get();return!e||!e.isDirty()}}});const Nd="theme";async function Fd(e){const t=document.documentElement;t.classList.remove("wa-dark","wa-light"),t.classList.add(e)}async function dw(){const e=await Se.get(Nd);await Fd(e||"wa-dark")}async function hw(e){await Se.set(Nd,e)}yt({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async e=>{const i=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await Fd(i),await hw(i)}},contribution:{target:Ar,icon:"circle-half-stroke",label:"Theme Switcher"}});dw().catch(e=>{console.error("Failed to load theme preference:",e)});yt({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async e=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:Ar,icon:"expand",label:"Fullscreen"}});yt({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:e=>{const t={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};t.widgetFactory=()=>p`
                <k-extensions></k-extensions>`,_o.loadEditor(t).then()}},contribution:{target:Ar,icon:"puzzle-piece",label:"Open Extensions"}});yt({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async e=>W.getExtensions().map(i=>({id:i.id,name:i.name,description:i.description,experimental:i.experimental,enabled:W.isEnabled(i.id)}))}});yt({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:e,type:t}})=>{e&&(t==="error"?kt(e):di(e))}}});Le.put("constants",gh);Sr.put("html",p);Sr.put("render",mt);Sr.put("toastInfo",di);Sr.put("toastError",kt);Sr.put("toastWarning",bh);let Xl=!1;function uw(e){Xl||(Xl=!0,e.packageInfo&&Zs.addPackage(e.packageInfo),e.marketplaceCatalogUrls?.length&&e.marketplaceCatalogUrls.forEach(t=>{ed.addCatalogUrl(t).catch(()=>{})}))}var pw=Object.defineProperty,fw=Object.getOwnPropertyDescriptor,Es=(e,t,i,r)=>{for(var s=r>1?void 0:r?fw(t,i):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(s=(r?a(t,i,s):a(s))||s);return r&&s&&pw(t,i,s),s};let $r=class extends mn{constructor(){super(...arguments),this.showBottomSidebar=!1,this.showBottomPanel=!1,this.showLeftSidebar=!0,this.showAuxSidebar=!0}createRenderRoot(){return this}getGridSizes(){return this.showLeftSidebar&&this.showAuxSidebar?"15%, 65%, 20%":this.showLeftSidebar?"15%, 85%":this.showAuxSidebar?"80%, 20%":"100%"}render(){return p`
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
                
                k-standard-layout {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    width: 100%;
                }
                
                k-standard-layout .toolbar-top {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 2fr 1fr;
                    align-items: center;
                    border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    flex-shrink: 0;
                }
                
                k-standard-layout .toolbar-bottom {
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
                
                k-standard-layout .main-layout {
                    flex: 1;
                    min-height: 0;
                }
                
                k-standard-layout .toolbar-end {
                    justify-self: end;
                }
            </style>
            
            <div class="toolbar-top">
                <k-toolbar id=${vc}></k-toolbar>
                <k-toolbar id=${wc}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Ar}></k-toolbar>
            </div>
            
            <k-resizable-grid 
                class="main-layout"
                id="main-layout" 
                orientation="horizontal" 
                sizes=${this.getGridSizes()}>
                
                ${this.showLeftSidebar?p`
                        ${this.showBottomSidebar?p`
                                <k-resizable-grid 
                                    id="left-sidebar-split" 
                                    orientation="vertical" 
                                    sizes="50%, 50%">
                                    <k-tabs id="${Xs}"></k-tabs>
                                    <k-tabs id="${yc}"></k-tabs>
                                </k-resizable-grid>
                            `:p`<k-tabs id="${Xs}"></k-tabs>`}
                    `:B}
                
                ${this.showBottomPanel?p`
                        <k-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <k-tabs id="${ci}"></k-tabs>
                            <k-tabs id="${kc}"></k-tabs>
                        </k-resizable-grid>
                    `:p`<k-tabs id="${ci}"></k-tabs>`}
                
                ${this.showAuxSidebar?p`<k-tabs id="${xc}"></k-tabs>`:B}
            </k-resizable-grid>
            
            <div class="toolbar-bottom">
                <k-toolbar id=${en}></k-toolbar>
                <k-toolbar id=${yo}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${fs}></k-toolbar>
            </div>
        `}};Es([c({type:Boolean,attribute:"show-bottom-sidebar"})],$r.prototype,"showBottomSidebar",2);Es([c({type:Boolean,attribute:"show-bottom-panel"})],$r.prototype,"showBottomPanel",2);Es([c({type:Boolean,attribute:"show-left-sidebar"})],$r.prototype,"showLeftSidebar",2);Es([c({type:Boolean,attribute:"show-aux-sidebar"})],$r.prototype,"showAuxSidebar",2);$r=Es([C("k-standard-layout")],$r);const mw="@kispace-io/app",gw="0.0.0",bw={"@kispace-io/core":"*","@kispace-io/extension-ai-system":"*","@kispace-io/extension-command-palette":"*","@kispace-io/extension-command-shell":"*","@kispace-io/extension-github-service":"*","@kispace-io/extension-howto-system":"*","@kispace-io/extension-in-browser-ml":"*","@kispace-io/extension-linuxterminal":"*","@kispace-io/extension-md-editor":"*","@kispace-io/extension-media-viewer":"*","@kispace-io/extension-memory-usage":"*","@kispace-io/extension-monaco-editor":"*","@kispace-io/extension-notebook":"*","@kispace-io/extension-python-runtime":"*","@kispace-io/extension-rag-system":"*","@kispace-io/extension-settings-tree":"*","@kispace-io/extension-webdav":"*","@kispace-io/extension-webllm":"*","@kispace-io/extension-utils":"*","pace-js":"^1.2.4","@kispace-io/extension-webmcp":"*"},vw={typescript:"^5.9.3",vite:"^7.1.12","vite-plugin-cross-origin-isolation":"^0.1.6","vite-plugin-mkcert":"^1.17.9"},ww={catalogUrls:["https://raw.githubusercontent.com/kispace-io/appspace-marketplace/main/catalogs/extensions.json","https://raw.githubusercontent.com/kispace-io/appspace-marketplace/main/catalogs/apps.json"]},Xr={name:mw,version:gw,dependencies:bw,devDependencies:vw,marketplace:ww},yw="extensions",xw={EXT_UTILS_NAME:"Utilities",EXT_UTILS_DESC:"Utility commands such as wget, unzip and certificate tools.",CMD_WGET_NAME:"wget",CMD_WGET_DESC:"Download a file from a URL to the workspace.",CMD_UNZIP_NAME:"Unzip Archive",CMD_UNZIP_DESC:"Extract a zip archive from the workspace.",CMD_P12SPLIT_NAME:".p12 file splitter",CMD_P12SPLIT_DESC:"Split a .p12 certificate file into separate PEM files.",RENAME:"Rename",DELETE:"Delete"},kw={namespace:yw,en:xw},Cw="@kispace-io/extension-utils",Ew={name:Cw};I.registerContribution(ne,kw);const Gl=Te("extensions");W.registerExtension({id:Ew.name,name:Gl("EXT_UTILS_NAME"),description:Gl("EXT_UTILS_DESC"),loader:()=>ve(()=>import("./index-CWFFzA4M.js"),__vite__mapDeps([0,1,2])),icon:"toolbox",dependencies:["@kispace-io/extension-python-runtime"]});const $w="extensions",Sw={EXT_MDEDITOR_NAME:"Markdown Editor",EXT_MDEDITOR_DESC:"View and render Markdown (.md) files"},Aw={EXT_MDEDITOR_NAME:"Markdown-Editor",EXT_MDEDITOR_DESC:"Anzeigen und Rendern von Markdown (.md) Dateien"},_w={namespace:$w,en:Sw,de:Aw},Lw="@kispace-io/extension-md-editor",Tw={name:Lw};I.registerContribution(ne,_w);const Kl=Te("extensions");W.registerExtension({id:Tw.name,name:Kl("EXT_MDEDITOR_NAME"),description:Kl("EXT_MDEDITOR_DESC"),loader:()=>ve(()=>import("./md-editor-extension-CKY14S4j.js"),[]),icon:"book"});const Dw="extensions",Rw={EXT_MEDIAVIEWER_NAME:"Media Viewer",EXT_MEDIAVIEWER_DESC:"View PDF, image, and HTML files in the browser"},zw={EXT_MEDIAVIEWER_NAME:"Medien-Viewer",EXT_MEDIAVIEWER_DESC:"PDF-, Bild- und HTML-Dateien im Browser anzeigen"},Ow={namespace:Dw,en:Rw,de:zw},Iw="@kispace-io/extension-media-viewer",Pw={name:Iw};I.registerContribution(ne,Ow);const Yl=Te("extensions");W.registerExtension({id:Pw.name,name:Yl("EXT_MEDIAVIEWER_NAME"),description:Yl("EXT_MEDIAVIEWER_DESC"),loader:()=>ve(()=>import("./media-viewer-extension-DmcZgMd4.js"),[]),icon:"image"});const Mw="extensions",Nw={EXT_MEMORYUSAGE_NAME:"Memory Usage Monitor",EXT_MEMORYUSAGE_DESC:"Displays JavaScript heap memory usage in the bottom toolbar"},Fw={EXT_MEMORYUSAGE_NAME:"Speicherverbrauch-Monitor",EXT_MEMORYUSAGE_DESC:"Zeigt die JavaScript-Heap-Speichernutzung in der unteren Symbolleiste an"},Bw={namespace:Mw,en:Nw,de:Fw},Uw="@kispace-io/extension-memory-usage",Vw={name:Uw};I.registerContribution(ne,Bw);const Zl=Te("extensions");W.registerExtension({id:Vw.name,name:Zl("EXT_MEMORYUSAGE_NAME"),description:Zl("EXT_MEMORYUSAGE_DESC"),loader:()=>ve(()=>import("./memory-usage-extension-CNvG21TF.js"),[]),icon:"microchip"});const qw="extensions",Hw={EXT_MONACO_NAME:"Monaco Code Editor",EXT_MONACO_DESC:"Code editor with syntax highlighting, code completion, and Python execution support"},Ww={EXT_MONACO_NAME:"Monaco-Code-Editor",EXT_MONACO_DESC:"Code-Editor mit Syntaxhervorhebung, Code-Vervollständigung und Python-Ausführungsunterstützung"},jw={namespace:qw,en:Hw,de:Ww},Xw="@kispace-io/extension-monaco-editor",Gw={name:Xw};I.registerContribution(ne,jw);const Ql=Te("extensions");W.registerExtension({id:Gw.name,name:Ql("EXT_MONACO_NAME"),description:Ql("EXT_MONACO_DESC"),loader:()=>ve(()=>import("./monaco-editor-extension-CvBBliLs.js"),__vite__mapDeps([3,4,5])),icon:"file-pen",dependencies:["@kispace-io/extension-python-runtime"]});const Kw="extensions",Yw={EXT_SETTINGS_TREE_NAME:"Settings Tree Editor",EXT_SETTINGS_TREE_DESC:"Tree-based editor for settings with in-place editing"},Zw={EXT_SETTINGS_TREE_NAME:"Einstellungs-Baum-Editor",EXT_SETTINGS_TREE_DESC:"Baumbasierter Editor für Einstellungen mit direkter Bearbeitung"},Qw={namespace:Kw,en:Yw,de:Zw},Jw="@kispace-io/extension-settings-tree",ey={name:Jw};I.registerContribution(ne,Qw);const Jl=Te("extensions");W.registerExtension({id:ey.name,name:Jl("EXT_SETTINGS_TREE_NAME"),description:Jl("EXT_SETTINGS_TREE_DESC"),loader:()=>ve(()=>import("./settings-tree-extension-wmXfDjPO.js"),[]),icon:"sitemap"});const ty="extensions",iy={EXT_GITHUB_SERVICE_NAME:"GitHub Service",EXT_GITHUB_SERVICE_DESC:"GitHub API service for fetching release information"},ry={EXT_GITHUB_SERVICE_NAME:"GitHub-Service",EXT_GITHUB_SERVICE_DESC:"GitHub-API-Service zum Abrufen von Release-Informationen"},sy={namespace:ty,en:iy,de:ry},oy="@kispace-io/extension-github-service",ay={name:oy};I.registerContribution(ne,sy);const ec=Te("extensions");W.registerExtension({id:ay.name,name:ec("EXT_GITHUB_SERVICE_NAME"),description:ec("EXT_GITHUB_SERVICE_DESC"),loader:()=>ve(()=>import("./github-service-extension-C-kuSNTI.js"),[]),icon:"code-branch"});const ny="extensions",ly={EXT_PYTHONRUNTIME_NAME:"Python Runtime",EXT_PYTHONRUNTIME_DESC:"Pyodide runtime, Python package management, and Run Python Script command"},cy={EXT_PYTHONRUNTIME_NAME:"Python-Runtime",EXT_PYTHONRUNTIME_DESC:"Pyodide-Runtime, Python-Paketverwaltung und Befehl Python-Skript ausführen"},dy={namespace:ny,en:ly,de:cy},hy="@kispace-io/extension-python-runtime",uy={name:hy};I.registerContribution(ne,dy);const tc=Te("extensions");W.registerExtension({id:uy.name,name:tc("EXT_PYTHONRUNTIME_NAME"),description:tc("EXT_PYTHONRUNTIME_DESC"),loader:()=>Promise.all([ve(()=>import("./python-runtime-extension-DTzaVnGq.js"),__vite__mapDeps([6,1,2])),ve(()=>import("./commands-D8GbZ_CP.js"),__vite__mapDeps([7,1]))]),icon:"k python"});const py="extensions",fy={EXT_LINUXTERMINAL_NAME:"Linux terminal",EXT_LINUXTERMINAL_DESC:"Linux terminal view"},my={EXT_LINUXTERMINAL_NAME:"Linux-Terminal",EXT_LINUXTERMINAL_DESC:"Linux-Terminalansicht"},gy={namespace:py,en:fy,de:my},by="@kispace-io/extension-linuxterminal",vy={name:by};I.registerContribution(ne,gy);const ic=Te("extensions");W.registerExtension({id:vy.name,name:ic("EXT_LINUXTERMINAL_NAME"),description:ic("EXT_LINUXTERMINAL_DESC"),loader:()=>ve(()=>import("./k-linuxterminal-CPHsD9yY.js"),[]),icon:"terminal",experimental:!0});const wy="extensions",yy={EXT_WEBLLM_NAME:"WebLLM",EXT_WEBLLM_DESC:"In-Browser LLM inference"},xy={EXT_WEBLLM_NAME:"WebLLM",EXT_WEBLLM_DESC:"LLM-Inferenz im Browser"},ky={namespace:wy,en:yy,de:xy},Cy="@kispace-io/extension-webllm",Ey={name:Cy};I.registerContribution(ne,ky);const rc=Te("extensions");W.registerExtension({id:Ey.name,name:rc("EXT_WEBLLM_NAME"),description:rc("EXT_WEBLLM_DESC"),loader:()=>ve(()=>import("./webllmservice-CAH3tVX-.js"),__vite__mapDeps([8,4,5])),icon:"robot"});const $y="extensions",Sy={EXT_NOTEBOOK_NAME:"Jupyter-like Notebook Editor",EXT_NOTEBOOK_DESC:"View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering"},Ay={EXT_NOTEBOOK_NAME:"Jupyter-ähnlicher Notebook-Editor",EXT_NOTEBOOK_DESC:"Anzeigen und Ausführen von Jupyter-ähnlichen Notebooks (.ipynb) mit Python-Codeausführung und Markdown-Rendering"},_y={namespace:$y,en:Sy,de:Ay},Ly="@kispace-io/extension-notebook",Ty={name:Ly};I.registerContribution(ne,_y);const sc=Te("extensions");W.registerExtension({id:Ty.name,name:sc("EXT_NOTEBOOK_NAME"),description:sc("EXT_NOTEBOOK_DESC"),loader:()=>ve(()=>import("./notebook-extension-BvKbtaP3.js"),[]),icon:"k jupyter",dependencies:["@kispace-io/extension-python-runtime"]});const Dy="extensions",Ry={EXT_COMMANDPALETTE_NAME:"Command Palette",EXT_COMMANDPALETTE_DESC:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)"},zy={EXT_COMMANDPALETTE_NAME:"Befehls-Palette",EXT_COMMANDPALETTE_DESC:"VS Code-ähnliche Befehls-Palette oben in der Mitte für schnelle Befehlsausführung (Strg+Umschalt+P)"},Oy={namespace:Dy,en:Ry,de:zy},Iy="@kispace-io/extension-command-palette",Py={name:Iy};I.registerContribution(ne,Oy);const oc=Te("extensions");W.registerExtension({id:Py.name,name:oc("EXT_COMMANDPALETTE_NAME"),description:oc("EXT_COMMANDPALETTE_DESC"),loader:()=>ve(()=>import("./command-palette-extension-F8t1Q3Dt.js"),[]),icon:"terminal"});const My="extensions",Ny={EXT_COMMANDSHELL_NAME:"Command Shell",EXT_COMMANDSHELL_DESC:"Shell-like UI for running framework commands",COMMANDSHELL_PROMPT:"Run commands",COMMANDSHELL_EMPTY:"Type a command and press Enter. Examples: open_editor path=test.txt, touch xy.txt && open_editor xy.txt",COMMANDSHELL_CLEAR:"Clear"},Fy={EXT_COMMANDSHELL_NAME:"Befehlsshell",EXT_COMMANDSHELL_DESC:"Shell-ähnliche Oberfläche zum Ausführen von Framework-Befehlen",COMMANDSHELL_PROMPT:"Befehle ausführen",COMMANDSHELL_EMPTY:"Geben Sie einen Befehl ein und drücken Sie Enter.",COMMANDSHELL_CLEAR:"Löschen"},By={namespace:My,en:Ny,de:Fy},Uy="@kispace-io/extension-command-shell",Vy={name:Uy};I.registerContribution(ne,By);const ac=Te("extensions");W.registerExtension({id:Vy.name,name:ac("EXT_COMMANDSHELL_NAME"),description:ac("EXT_COMMANDSHELL_DESC"),loader:()=>ve(()=>import("./command-shell-extension-dZp62ay0.js"),[]),icon:"terminal"});const qy="extensions",Hy={EXT_WEBDAV_NAME:"WebDAV Workspace",EXT_WEBDAV_DESC:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration"},Wy={EXT_WEBDAV_NAME:"WebDAV-Arbeitsbereich",EXT_WEBDAV_DESC:"Verbinden Sie sich mit WebDAV-Servern (Nextcloud, ownCloud) als Arbeitsbereichsordner für Cloud-Speicher-Integration"},jy={namespace:qy,en:Hy,de:Wy},Xy="@kispace-io/extension-webdav",Gy={name:Xy};I.registerContribution(ne,jy);const nc=Te("extensions");W.registerExtension({id:Gy.name,name:nc("EXT_WEBDAV_NAME"),description:nc("EXT_WEBDAV_DESC"),loader:()=>ve(()=>import("./webdav-extension-Bpa60HpG.js"),[]),icon:"cloud"});const Ky="extensions",Yy={EXT_IN_BROWSER_ML_NAME:"In-Browser ML",EXT_IN_BROWSER_ML_DESC:"In-browser machine learning service using transformers.js for specialized tasks (zero-shot classification, embeddings, etc.)"},Zy={EXT_IN_BROWSER_ML_NAME:"ML im Browser",EXT_IN_BROWSER_ML_DESC:"Maschinelles Lernen im Browser mit transformers.js für spezialisierte Aufgaben (Zero-Shot-Klassifizierung, Embeddings usw.)"},Qy={namespace:Ky,en:Yy,de:Zy},Jy="@kispace-io/extension-in-browser-ml",e1={name:Jy};I.registerContribution(ne,Qy);const lc=Te("extensions");W.registerExtension({id:e1.name,name:lc("EXT_IN_BROWSER_ML_NAME"),description:lc("EXT_IN_BROWSER_ML_DESC"),loader:()=>ve(()=>import("./in-browser-ml-extension-DBV-wzs-.js"),__vite__mapDeps([9,5])),icon:"brain"});const t1="extensions",i1={EXT_AI_SYSTEM_NAME:"AI System",EXT_AI_SYSTEM_DESC:"Modern AI service with streaming support and agent workflows"},r1={EXT_AI_SYSTEM_NAME:"KI-System",EXT_AI_SYSTEM_DESC:"Modernes KI-Service mit Streaming-Unterstützung und Agent-Workflows"},s1={namespace:t1,en:i1,de:r1},o1="@kispace-io/extension-ai-system",a1={name:o1};I.registerContribution(ne,s1);const cc=Te("extensions");W.registerExtension({id:a1.name,name:cc("EXT_AI_SYSTEM_NAME"),description:cc("EXT_AI_SYSTEM_DESC"),loader:()=>ve(()=>import("./ai-system-extension-W6DPAgMh.js"),__vite__mapDeps([10,4,5])),icon:"robot",dependencies:["@kispace-io/extension-in-browser-ml"]});const n1="extensions",l1={EXT_RAG_SYSTEM_NAME:"RAG System",EXT_RAG_SYSTEM_DESC:"Retrieval-Augmented Generation system for document indexing, search and retrieval"},c1={EXT_RAG_SYSTEM_NAME:"RAG-System",EXT_RAG_SYSTEM_DESC:"Retrieval-Augmented Generation System für Dokumentenindizierung, Suche und Abruf"},d1={namespace:n1,en:l1,de:c1},h1="@kispace-io/extension-rag-system",u1={name:h1};I.registerContribution(ne,d1);const dc=Te("extensions");W.registerExtension({id:u1.name,name:dc("EXT_RAG_SYSTEM_NAME"),description:dc("EXT_RAG_SYSTEM_DESC"),loader:()=>ve(()=>import("./rag-system-extension-CquydrB5.js").then(e=>e.b),__vite__mapDeps([11,5,4])),icon:"database",experimental:!0,dependencies:["@kispace-io/extension-ai-system","@kispace-io/extension-in-browser-ml"]});const p1="extensions",f1={EXT_HOWTO_NAME:"HowTo System",EXT_HOWTO_DESC:"Step-by-step workflow system with pre and post condition checks"},m1={EXT_HOWTO_NAME:"HowTo-System",EXT_HOWTO_DESC:"Schritt-für-Schritt-Workflow-System mit Vor- und Nachbedingungsprüfungen"},g1={namespace:p1,en:f1,de:m1},b1="@kispace-io/extension-howto-system",v1={name:b1};I.registerContribution(ne,g1);const hc=Te("extensions");W.registerExtension({id:v1.name,name:hc("EXT_HOWTO_NAME"),description:hc("EXT_HOWTO_DESC"),loader:()=>ve(()=>import("./howto-extension-BWBu-cv6.js"),__vite__mapDeps([12,4,5])),icon:"list-check"});const w1="@kispace-io/extension-webmcp",y1={name:w1};W.registerExtension({id:y1.name,name:"WebMCP",description:"Exposes app commands as WebMCP tools for browser agents and MCP clients",loader:()=>ve(()=>import("./webmcp-extension-Ddc2GPz0.js"),__vite__mapDeps([13,4,5])),icon:"plug",dependencies:["@kispace-io/extension-ai-system"]});Wd.start();uw({packageInfo:{name:Xr.name,version:Xr.version,dependencies:Xr.dependencies,devDependencies:Xr.devDependencies},marketplaceCatalogUrls:Xr.marketplace?.catalogUrls});ft.registerApp({id:"dev-standard-app",name:"Default App",version:"0.0.0",description:"Default app!space application",extensions:["@kispace-io/extension-utils","@kispace-io/extension-command-palette","@kispace-io/extension-command-shell","@kispace-io/extension-md-editor","@kispace-io/extension-monaco-editor","@kispace-io/extension-media-viewer","@kispace-io/extension-settings-tree","@kispace-io/extension-memory-usage","@kispace-io/extension-ai-system","@kispace-io/extension-webmcp"]},{autoStart:!0});ft.registerApp({id:"dev-standard-app-2",name:"Default App 2",version:"0.0.0",description:"Default app!space application 2",extensions:["@kispace-io/extension-utils","@kispace-io/extension-md-editor","@kispace-io/extension-monaco-editor","@kispace-io/extension-media-viewer","@kispace-io/extension-settings-tree","@kispace-io/extension-memory-usage","@kispace-io/extension-ai-system","@kispace-io/extension-webmcp"],render:{tag:"k-standard-layout",attributes:{"show-bottom-panel":"true"}}});export{Vs as $,B as A,tf as B,Ar as C,jd as D,is as E,cs as F,wc as G,Gi as H,mi as I,mr as J,ut as K,ke as L,cr as M,Wt as N,ls as O,Kc as P,ka as Q,ft as R,ne as S,Oc as T,bs as U,fs as V,x1 as W,Ud as X,wp as Y,di as Z,ve as _,Le as a,td as a0,Kr as a1,Te as a2,bh as a3,Pe as a4,$ as a5,Sr as a6,xc as a7,St as a8,mt as a9,mh as aa,gu as ab,ci as ac,Cc as ad,mn as ae,ei as af,$r as ag,tn as ah,kc as ai,Xs as aj,yc as ak,yo as al,vc as am,yp as an,gt as ao,Ca as ap,uw as aq,Nt as ar,W as as,Zs as at,ql as au,p as b,yt as c,kt as d,_o as e,Ft as f,pi as g,Y as h,A as i,fi as j,Ii as k,_v as l,Xi as m,c as n,pe as o,Jt as p,jt as q,E as r,We as s,C as t,_h as u,I as v,Yi as w,en as x,Li as y,Se as z};
