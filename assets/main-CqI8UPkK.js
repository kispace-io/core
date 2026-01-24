const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/github-extension-loader-BMVCpzTL.js","assets/github-url-parser-DrTlzD8v.js","assets/vsix-extension-loader-_6bonKdo.js","assets/jszip.min-DvwSm7v9.js","assets/pyterminal-extension-CZBB43nH.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-CiGIxQnH.js","assets/unzip-extension-B5aAIgSM.js","assets/transformers-BHZH0_8_.js","assets/__vite-browser-external-DTHgcB49.js","assets/k-monaco-editor-CpUYCult.js","assets/editor.main-v0tJv16h.js","assets/editor-Dvl_Svmm.css","assets/package-manager-extension-UAcLzdAc.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var G0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function X0(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var n=function i(){var r=!1;try{r=this instanceof i}catch{}return r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var Xr={exports:{}};var Jd=Xr.exports,rl;function eh(){return rl||(rl=1,(function(t,e){(function(){var n,i,r,s,o,l,c,h,u,p,g,b,w,k,O,C,P,R,I,_,G,D,be,we,ue,De,Ee,_e,$e,ze,W,He,Ke,$t,Ln,Zs,Or,ct,si,Qs,Vi,Ir,Js,Dr,zr,Xa,Ka,eo,Ya,Za,qi=[].slice,Qa={}.hasOwnProperty,Ja=function(v,m){for(var y in m)Qa.call(m,y)&&(v[y]=m[y]);function x(){this.constructor=v}return x.prototype=m.prototype,v.prototype=new x,v.__super__=m.prototype,v},Zd=[].indexOf||function(v){for(var m=0,y=this.length;m<y;m++)if(m in this&&this[m]===v)return m;return-1},el=function(v,m){return function(){return v.apply(m,arguments)}};for(D={className:"",catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},ze=function(){var v;return(v=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance.now():void 0)!=null?v:+new Date},He=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,G=window.cancelAnimationFrame||window.mozCancelAnimationFrame,C=function(v,m,y){return typeof v.addEventListener=="function"?v.addEventListener(m,y,!1):(function(){if(typeof v["on"+m]!="function"||typeof v["on"+m].eventListeners!="object"){var x=new h;typeof v["on"+m]=="function"&&x.on(m,v["on"+m]),v["on"+m]=function(E){return x.trigger(m,E)},v["on"+m].eventListeners=x}else var x=v["on"+m].eventListeners;x.on(m,y)})()},He==null&&(He=function(v){return setTimeout(v,50)},G=function(v){return clearTimeout(v)}),$t=function(v){var m,y;return m=ze(),y=function(){var x;return x=ze()-m,x>=33?(m=ze(),v(x,function(){return He(y)})):setTimeout(y,33-x)},y()},Ke=function(){var v,m,y;return y=arguments[0],m=arguments[1],v=3<=arguments.length?qi.call(arguments,2):[],typeof y[m]=="function"?y[m].apply(y,v):y[m]},be=function(){var v,m,y,x,E,T,H;for(m=arguments[0],x=2<=arguments.length?qi.call(arguments,1):[],T=0,H=x.length;T<H;T++)if(y=x[T],y)for(v in y)Qa.call(y,v)&&(E=y[v],m[v]!=null&&typeof m[v]=="object"&&E!=null&&typeof E=="object"?be(m[v],E):m[v]=E);return m},R=function(v){var m,y,x,E,T;for(y=m=0,E=0,T=v.length;E<T;E++)x=v[E],y+=Math.abs(x),m++;return y/m},ue=function(v,m){var y,x,E;if(v==null&&(v="options"),m==null&&(m=!0),E=document.querySelector("[data-pace-"+v+"]"),!!E){if(y=E.getAttribute("data-pace-"+v),!m)return y;try{return JSON.parse(y)}catch(T){return x=T,typeof console<"u"&&console!==null?console.error("Error parsing inline pace options",x):void 0}}},c=(function(){function v(){}return v.prototype.on=function(m,y,x,E){var T;return E==null&&(E=!1),this.bindings==null&&(this.bindings={}),(T=this.bindings)[m]==null&&(T[m]=[]),this.bindings[m].push({handler:y,ctx:x,once:E})},v.prototype.once=function(m,y,x){return this.on(m,y,x,!0)},v.prototype.off=function(m,y){var x,E,T;if(((E=this.bindings)!=null?E[m]:void 0)!=null){if(y==null)return delete this.bindings[m];for(x=0,T=[];x<this.bindings[m].length;)this.bindings[m][x].handler===y?T.push(this.bindings[m].splice(x,1)):T.push(x++);return T}},v.prototype.trigger=function(){var m,y,x,E,T,H,K,pe,Ce;if(x=arguments[0],m=2<=arguments.length?qi.call(arguments,1):[],(K=this.bindings)!=null&&K[x]){for(T=0,Ce=[];T<this.bindings[x].length;)pe=this.bindings[x][T],E=pe.handler,y=pe.ctx,H=pe.once,E.apply(y??this,m),H?Ce.push(this.bindings[x].splice(T,1)):Ce.push(T++);return Ce}},v})(),p=window.Pace||{},window.Pace=p,be(p,c.prototype),W=p.options=be({},D,window.paceOptions,ue()),eo=["ajax","document","eventLag","elements"],Dr=0,Xa=eo.length;Dr<Xa;Dr++)ct=eo[Dr],W[ct]===!0&&(W[ct]=D[ct]);u=(function(v){Ja(m,v);function m(){return Ya=m.__super__.constructor.apply(this,arguments),Ya}return m})(Error),i=(function(){function v(){this.progress=0}return v.prototype.getElement=function(){var m;if(this.el==null){if(m=document.querySelector(W.target),!m)throw new u;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running ");var y=W.className!==""?" "+W.className:"";this.el.innerHTML='<div class="pace-progress'+y+`">
  <div class="pace-progress-inner"></div>
</div>
<div class="pace-activity"></div>`,m.firstChild!=null?m.insertBefore(this.el,m.firstChild):m.appendChild(this.el)}return this.el},v.prototype.finish=function(){var m;return m=this.getElement(),m.className=m.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ")},v.prototype.update=function(m){return this.progress=m,p.trigger("progress",m),this.render()},v.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(m){u=m}return this.el=void 0},v.prototype.render=function(){var m,y,x,E,T,H,K;if(document.querySelector(W.target)==null)return!1;for(m=this.getElement(),E="translate3d("+this.progress+"%, 0, 0)",K=["webkitTransform","msTransform","transform"],T=0,H=K.length;T<H;T++)y=K[T],m.children[0].style[y]=E;return(!this.lastRenderedProgress||this.lastRenderedProgress|this.progress!==0|0)&&(m.children[0].setAttribute("data-progress-text",""+(this.progress|0)+"%"),this.progress>=100?x="99":(x=this.progress<10?"0":"",x+=this.progress|0),m.children[0].setAttribute("data-progress",""+x)),p.trigger("change",this.progress),this.lastRenderedProgress=this.progress},v.prototype.done=function(){return this.progress>=100},v})(),h=(function(){function v(){this.bindings={}}return v.prototype.trigger=function(m,y){var x,E,T,H,K;if(this.bindings[m]!=null){for(H=this.bindings[m],K=[],E=0,T=H.length;E<T;E++)x=H[E],K.push(x.call(this,y));return K}},v.prototype.on=function(m,y){var x;return(x=this.bindings)[m]==null&&(x[m]=[]),this.bindings[m].push(y)},v})(),Js=window.XMLHttpRequest,Ir=window.XDomainRequest,Vi=window.WebSocket,we=function(v,m){var y,x;x=[];for(y in m.prototype)try{v[y]==null&&typeof m[y]!="function"?typeof Object.defineProperty=="function"?x.push(Object.defineProperty(v,y,{get:(function(E){return function(){return m.prototype[E]}})(y),configurable:!0,enumerable:!0})):x.push(v[y]=m.prototype[y]):x.push(void 0)}catch{}return x},_e=[],p.ignore=function(){var v,m,y;return m=arguments[0],v=2<=arguments.length?qi.call(arguments,1):[],_e.unshift("ignore"),y=m.apply(null,v),_e.shift(),y},p.track=function(){var v,m,y;return m=arguments[0],v=2<=arguments.length?qi.call(arguments,1):[],_e.unshift("track"),y=m.apply(null,v),_e.shift(),y},Or=function(v){var m;if(v==null&&(v="GET"),_e[0]==="track")return"force";if(!_e.length&&W.ajax){if(v==="socket"&&W.ajax.trackWebSockets)return!0;if(m=v.toUpperCase(),Zd.call(W.ajax.trackMethods,m)>=0)return!0}return!1},g=(function(v){Ja(m,v);function m(){var y,x=this;m.__super__.constructor.apply(this,arguments),y=function(E){var T;return T=E.open,E.open=function(H,K,pe){return Or(H)&&x.trigger("request",{type:H,url:K,request:E}),T.apply(E,arguments)}},window.XMLHttpRequest=function(E){var T;return T=new Js(E),y(T),T};try{we(window.XMLHttpRequest,Js)}catch{}if(Ir!=null){window.XDomainRequest=function(){var E;return E=new Ir,y(E),E};try{we(window.XDomainRequest,Ir)}catch{}}if(Vi!=null&&W.ajax.trackWebSockets){window.WebSocket=function(E,T){var H;return T!=null?H=new Vi(E,T):H=new Vi(E),Or("socket")&&x.trigger("request",{type:"socket",url:E,protocols:T,request:H}),H};try{we(window.WebSocket,Vi)}catch{}}}return m})(h),zr=null,De=function(){return zr==null&&(zr=new g),zr},Zs=function(v){var m,y,x,E;for(E=W.ajax.ignoreURLs,y=0,x=E.length;y<x;y++)if(m=E[y],typeof m=="string"){if(v.indexOf(m)!==-1)return!0}else if(m.test(v))return!0;return!1},De().on("request",function(v){var m,y,x,E,T;if(E=v.type,x=v.request,T=v.url,!Zs(T)&&!p.running&&(W.restartOnRequestAfter!==!1||Or(E)==="force"))return y=arguments,m=W.restartOnRequestAfter||0,typeof m=="boolean"&&(m=0),setTimeout(function(){var H,K,pe,Ce,un,pn;if(E==="socket"?H=x.readyState<1:H=0<(Ce=x.readyState)&&Ce<4,H){for(p.restart(),un=p.sources,pn=[],K=0,pe=un.length;K<pe;K++)if(ct=un[K],ct instanceof n){ct.watch.apply(ct,y);break}else pn.push(void 0);return pn}},m)}),n=(function(){function v(){this.complete=el(this.complete,this);var m=this;this.elements=[],De().on("request",function(){return m.watch.apply(m,arguments)})}return v.prototype.watch=function(m){var y,x,E,T;if(E=m.type,y=m.request,T=m.url,!Zs(T))return E==="socket"?x=new k(y,this.complete):x=new O(y,this.complete),this.elements.push(x)},v.prototype.complete=function(m){return this.elements=this.elements.filter(function(y){return y!==m})},v})(),O=(function(){function v(m,y){var x,E,T,H,K,pe=this;if(this.progress=0,window.ProgressEvent!=null)for(C(m,"progress",function(Ce){return Ce.lengthComputable?pe.progress=100*Ce.loaded/Ce.total:pe.progress=pe.progress+(100-pe.progress)/2},!1),K=["load","abort","timeout","error"],E=0,T=K.length;E<T;E++)x=K[E],C(m,x,function(){return y(pe),pe.progress=100},!1);else H=m.onreadystatechange,m.onreadystatechange=function(){var Ce;return(Ce=m.readyState)===0||Ce===4?(y(pe),pe.progress=100):m.readyState===3&&(pe.progress=50),typeof H=="function"?H.apply(null,arguments):void 0}}return v})(),k=(function(){function v(m,y){var x,E,T,H,K=this;for(this.progress=0,H=["error","open"],E=0,T=H.length;E<T;E++)x=H[E],C(m,x,function(){return y(K),K.progress=100},!1)}return v})(),s=(function(){function v(m){var y,x,E,T;for(m==null&&(m={}),this.complete=el(this.complete,this),this.elements=[],m.selectors==null&&(m.selectors=[]),T=m.selectors,x=0,E=T.length;x<E;x++)y=T[x],this.elements.push(new o(y,this.complete))}return v.prototype.complete=function(m){return this.elements=this.elements.filter(function(y){return y!==m})},v})(),o=(function(){function v(m,y){this.selector=m,this.completeCallback=y,this.progress=0,this.check()}return v.prototype.check=function(){var m=this;return document.querySelector(this.selector)?this.done():setTimeout((function(){return m.check()}),W.elements.checkInterval)},v.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100},v})(),r=(function(){v.prototype.states={loading:0,interactive:50,complete:100};function v(){var m,y,x=this;this.progress=(y=this.states[document.readyState])!=null?y:100,m=document.onreadystatechange,document.onreadystatechange=function(){return x.states[document.readyState]!=null&&(x.progress=x.states[document.readyState]),typeof m=="function"?m.apply(null,arguments):void 0}}return v})(),l=(function(){function v(){var m,y,x,E,T,H=this;this.progress=0,m=0,T=[],E=0,x=ze(),y=setInterval(function(){var K;return K=ze()-x-50,x=ze(),T.push(K),T.length>W.eventLag.sampleCount&&T.shift(),m=R(T),++E>=W.eventLag.minSamples&&m<W.eventLag.lagThreshold?(H.progress=100,clearInterval(y)):H.progress=100*(3/(m+3))},50)}return v})(),w=(function(){function v(m){this.source=m,this.last=this.sinceLastUpdate=0,this.rate=W.initialRate,this.catchup=0,this.progress=this.lastProgress=0,this.source!=null&&(this.progress=Ke(this.source,"progress"))}return v.prototype.tick=function(m,y){var x;return y==null&&(y=Ke(this.source,"progress")),y>=100&&(this.done=!0),y===this.last?this.sinceLastUpdate+=m:(this.sinceLastUpdate&&(this.rate=(y-this.last)/this.sinceLastUpdate),this.catchup=(y-this.progress)/W.catchupTime,this.sinceLastUpdate=0,this.last=y),y>this.progress&&(this.progress+=this.catchup*m),x=1-Math.pow(this.progress/100,W.easeFactor),this.progress+=x*this.rate*m,this.progress=Math.min(this.lastProgress+W.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},v})(),si=null,Ln=null,I=null,Qs=null,P=null,_=null,p.running=!1,Ee=function(){if(W.restartOnPushState)return p.restart()},window.history.pushState!=null&&(Ka=window.history.pushState,window.history.pushState=function(){return Ee(),Ka.apply(window.history,arguments)}),window.history.replaceState!=null&&(Za=window.history.replaceState,window.history.replaceState=function(){return Ee(),Za.apply(window.history,arguments)}),b={ajax:n,elements:s,document:r,eventLag:l},($e=function(){var v,m,y,x,E,T,H,K;for(p.sources=si=[],T=["ajax","elements","document","eventLag"],m=0,x=T.length;m<x;m++)v=T[m],W[v]!==!1&&si.push(new b[v](W[v]));for(K=(H=W.extraSources)!=null?H:[],y=0,E=K.length;y<E;y++)ct=K[y],si.push(new ct(W));return p.bar=I=new i,Ln=[],Qs=new w})(),p.stop=function(){return p.trigger("stop"),p.running=!1,I.destroy(),_=!0,P!=null&&(typeof G=="function"&&G(P),P=null),$e()},p.restart=function(){return p.trigger("restart"),p.stop(),p.start()},p.go=function(){var v;return p.running=!0,I.render(),v=ze(),_=!1,P=$t(function(m,y){var x,E,T,H,K,pe,Ce,un,pn,to,no,io,tl,nl,il;for(100-I.progress,E=to=0,T=!0,pe=no=0,tl=si.length;no<tl;pe=++no)for(ct=si[pe],pn=Ln[pe]!=null?Ln[pe]:Ln[pe]=[],K=(il=ct.elements)!=null?il:[ct],Ce=io=0,nl=K.length;io<nl;Ce=++io)H=K[Ce],un=pn[Ce]!=null?pn[Ce]:pn[Ce]=new w(H),T&=un.done,!un.done&&(E++,to+=un.tick(m));return x=to/E,I.update(Qs.tick(m,x)),I.done()||T||_?(I.update(100),p.trigger("done"),setTimeout(function(){return I.finish(),p.running=!1,p.trigger("hide")},Math.max(W.ghostTime,Math.max(W.minTime-(ze()-v),0)))):y()})},p.start=function(v){be(W,v),p.running=!0;try{I.render()}catch(m){u=m}return document.querySelector(".pace")?(p.trigger("start"),p.go()):setTimeout(p.start,50)},t.exports=p}).call(Jd)})(Xr)),Xr.exports}var th=eh();const nh=Qd(th);nh.start();var ih=Object.defineProperty,rh=(t,e,n)=>e in t?ih(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ro=(t,e,n)=>(rh(t,typeof e!="symbol"?e+"":e,n),n),sh=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},so=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Pr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},sl=(t,e,n)=>(sh(t,e,"access private method"),n);function lc(t,e){return Object.is(t,e)}let Ae=null,sr=!1,Kr=1;const ts=Symbol("SIGNAL");function di(t){const e=Ae;return Ae=t,e}function oh(){return Ae}function ah(){return sr}const aa={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function _s(t){if(sr)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(Ae===null)return;Ae.consumerOnSignalRead(t);const e=Ae.nextProducerIndex++;if(gi(Ae),e<Ae.producerNode.length&&Ae.producerNode[e]!==t&&Lo(Ae)){const n=Ae.producerNode[e];Ts(n,Ae.producerIndexOfThis[e])}Ae.producerNode[e]!==t&&(Ae.producerNode[e]=t,Ae.producerIndexOfThis[e]=Lo(Ae)?hc(t,Ae,e):0),Ae.producerLastReadVersion[e]=t.version}function lh(){Kr++}function cc(t){if(!(!t.dirty&&t.lastCleanEpoch===Kr)){if(!t.producerMustRecompute(t)&&!ph(t)){t.dirty=!1,t.lastCleanEpoch=Kr;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Kr}}function dc(t){if(t.liveConsumerNode===void 0)return;const e=sr;sr=!0;try{for(const n of t.liveConsumerNode)n.dirty||dh(n)}finally{sr=e}}function ch(){return Ae?.consumerAllowSignalWrites!==!1}function dh(t){var e;t.dirty=!0,dc(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function hh(t){return t&&(t.nextProducerIndex=0),di(t)}function uh(t,e){if(di(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(Lo(t))for(let n=t.nextProducerIndex;n<t.producerNode.length;n++)Ts(t.producerNode[n],t.producerIndexOfThis[n]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function ph(t){gi(t);for(let e=0;e<t.producerNode.length;e++){const n=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==n.version||(cc(n),i!==n.version))return!0}return!1}function hc(t,e,n){var i;if(la(t),gi(t),t.liveConsumerNode.length===0){(i=t.watched)==null||i.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)t.producerIndexOfThis[r]=hc(t.producerNode[r],t,r)}return t.liveConsumerIndexOfThis.push(n),t.liveConsumerNode.push(e)-1}function Ts(t,e){var n;if(la(t),gi(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(n=t.unwatched)==null||n.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)Ts(t.producerNode[r],t.producerIndexOfThis[r])}const i=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[i],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[i],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const r=t.liveConsumerIndexOfThis[e],s=t.liveConsumerNode[e];gi(s),s.producerIndexOfThis[r]=e}}function Lo(t){var e;return t.consumerIsAlwaysLive||(((e=t?.liveConsumerNode)==null?void 0:e.length)??0)>0}function gi(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function la(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}function uc(t){if(cc(t),_s(t),t.value===Oo)throw t.error;return t.value}function fh(t){const e=Object.create(mh);e.computation=t;const n=()=>uc(e);return n[ts]=e,n}const oo=Symbol("UNSET"),ao=Symbol("COMPUTING"),Oo=Symbol("ERRORED"),mh={...aa,value:oo,dirty:!0,error:null,equal:lc,producerMustRecompute(t){return t.value===oo||t.value===ao},producerRecomputeValue(t){if(t.value===ao)throw new Error("Detected cycle in computations.");const e=t.value;t.value=ao;const n=hh(t);let i,r=!1;try{i=t.computation.call(t.wrapper),r=e!==oo&&e!==Oo&&t.equal.call(t.wrapper,e,i)}catch(s){i=Oo,t.error=s}finally{uh(t,n)}if(r){t.value=e;return}t.value=i,t.version++}};function gh(){throw new Error}let bh=gh;function wh(){bh()}function vh(t){const e=Object.create(kh);e.value=t;const n=()=>(_s(e),e.value);return n[ts]=e,n}function yh(){return _s(this),this.value}function xh(t,e){ch()||wh(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,Eh(t))}const kh={...aa,equal:lc,value:void 0};function Eh(t){t.version++,lh(),dc(t)}const Pe=Symbol("node");var Bt;(t=>{var e,n,i,r;class s{constructor(c,h={}){Pr(this,n),ro(this,e);const p=vh(c)[ts];if(this[Pe]=p,p.wrapper=this,h){const g=h.equals;g&&(p.equal=g),p.watched=h[t.subtle.watched],p.unwatched=h[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return yh.call(this[Pe])}set(c){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(ah())throw new Error("Writes to signals not permitted during Watcher callback");const h=this[Pe];xh(h,c)}}e=Pe,n=new WeakSet,t.isState=l=>typeof l=="object"&&so(n,l),t.State=s;class o{constructor(c,h){Pr(this,r),ro(this,i);const p=fh(c)[ts];if(p.consumerAllowSignalWrites=!0,this[Pe]=p,p.wrapper=this,h){const g=h.equals;g&&(p.equal=g),p.watched=h[t.subtle.watched],p.unwatched=h[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return uc(this[Pe])}}i=Pe,r=new WeakSet,t.isComputed=l=>typeof l=="object"&&so(r,l),t.Computed=o,(l=>{var c,h,u,p;function g(R){let I,_=null;try{_=di(null),I=R()}finally{di(_)}return I}l.untrack=g;function b(R){var I;if(!(0,t.isComputed)(R)&&!(0,t.isWatcher)(R))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((I=R[Pe].producerNode)==null?void 0:I.map(_=>_.wrapper))??[]}l.introspectSources=b;function w(R){var I;if(!(0,t.isComputed)(R)&&!(0,t.isState)(R))throw new TypeError("Called introspectSinks without a Signal argument");return((I=R[Pe].liveConsumerNode)==null?void 0:I.map(_=>_.wrapper))??[]}l.introspectSinks=w;function k(R){if(!(0,t.isComputed)(R)&&!(0,t.isState)(R))throw new TypeError("Called hasSinks without a Signal argument");const I=R[Pe].liveConsumerNode;return I?I.length>0:!1}l.hasSinks=k;function O(R){if(!(0,t.isComputed)(R)&&!(0,t.isWatcher)(R))throw new TypeError("Called hasSources without a Computed or Watcher argument");const I=R[Pe].producerNode;return I?I.length>0:!1}l.hasSources=O;class C{constructor(I){Pr(this,h),Pr(this,u),ro(this,c);let _=Object.create(aa);_.wrapper=this,_.consumerMarkedDirty=I,_.consumerIsAlwaysLive=!0,_.consumerAllowSignalWrites=!1,_.producerNode=[],this[Pe]=_}watch(...I){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");sl(this,u,p).call(this,I);const _=this[Pe];_.dirty=!1;const G=di(_);for(const D of I)_s(D[Pe]);di(G)}unwatch(...I){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");sl(this,u,p).call(this,I);const _=this[Pe];gi(_);for(let G=_.producerNode.length-1;G>=0;G--)if(I.includes(_.producerNode[G].wrapper)){Ts(_.producerNode[G],_.producerIndexOfThis[G]);const D=_.producerNode.length-1;if(_.producerNode[G]=_.producerNode[D],_.producerIndexOfThis[G]=_.producerIndexOfThis[D],_.producerNode.length--,_.producerIndexOfThis.length--,_.nextProducerIndex--,G<_.producerNode.length){const be=_.producerIndexOfThis[G],we=_.producerNode[G];la(we),we.liveConsumerIndexOfThis[be]=G}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[Pe].producerNode.filter(_=>_.dirty).map(_=>_.wrapper)}}c=Pe,h=new WeakSet,u=new WeakSet,p=function(R){for(const I of R)if(!(0,t.isComputed)(I)&&!(0,t.isState)(I))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=R=>so(h,R),l.Watcher=C;function P(){var R;return(R=oh())==null?void 0:R.wrapper}l.currentComputed=P,l.watched=Symbol("watched"),l.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(Bt||(Bt={}));const Ch=Symbol("SignalWatcherBrand"),Sh=new FinalizationRegistry((({watcher:t,signal:e})=>{t.unwatch(e)})),ol=new WeakMap;function $h(t){return t[Ch]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new Bt.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new Bt.Computed((()=>{this._$St.get(),super.performUpdate()}));const e=this._$Su=new Bt.subtle.Watcher((function(){const n=ol.get(this);n!==void 0&&(n._$Si===!1&&n.requestUpdate(),this.watch())}));ol.set(e,this),Sh.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach((n=>n.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,n,i){this._$So=!0,super.requestUpdate(e,n,i)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(e){this._$Sh.add(e);const n=this._$So;this.requestUpdate(),this._$So=n}m(e){this._$Sh.delete(e)}}}const At={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Li=t=>(...e)=>({_$litDirective$:t,values:e});let Oi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};const ca=globalThis,ns=ca.trustedTypes,al=ns?ns.createPolicy("lit-html",{createHTML:t=>t}):void 0,pc="$lit$",mn=`lit$${Math.random().toFixed(9).slice(2)}$`,fc="?"+mn,Ah=`<${fc}>`,qn=document,fr=()=>qn.createComment(""),mr=t=>t===null||typeof t!="object"&&typeof t!="function",da=Array.isArray,_h=t=>da(t)||typeof t?.[Symbol.iterator]=="function",lo=`[ 	
\f\r]`,Hi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ll=/-->/g,cl=/>/g,On=RegExp(`>|${lo}(?:([^\\s"'>=/]+)(${lo}*=${lo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dl=/'/g,hl=/"/g,mc=/^(?:script|style|textarea|title)$/i,Th=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),f=Th(1),tt=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),ul=new WeakMap,Fn=qn.createTreeWalker(qn,129);function gc(t,e){if(!da(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return al!==void 0?al.createHTML(e):e}const Rh=(t,e)=>{const n=t.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",o=Hi;for(let l=0;l<n;l++){const c=t[l];let h,u,p=-1,g=0;for(;g<c.length&&(o.lastIndex=g,u=o.exec(c),u!==null);)g=o.lastIndex,o===Hi?u[1]==="!--"?o=ll:u[1]!==void 0?o=cl:u[2]!==void 0?(mc.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=On):u[3]!==void 0&&(o=On):o===On?u[0]===">"?(o=r??Hi,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?On:u[3]==='"'?hl:dl):o===hl||o===dl?o=On:o===ll||o===cl?o=Hi:(o=On,r=void 0);const b=o===On&&t[l+1].startsWith("/>")?" ":"";s+=o===Hi?c+Ah:p>=0?(i.push(h),c.slice(0,p)+pc+c.slice(p)+mn+b):c+mn+(p===-2?l:b)}return[gc(t,s+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Io=class bc{constructor({strings:e,_$litType$:n},i){let r;this.parts=[];let s=0,o=0;const l=e.length-1,c=this.parts,[h,u]=Rh(e,n);if(this.el=bc.createElement(h,i),Fn.currentNode=this.el.content,n===2||n===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Fn.nextNode())!==null&&c.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(pc)){const g=u[o++],b=r.getAttribute(p).split(mn),w=/([.?@])?(.*)/.exec(g);c.push({type:1,index:s,name:w[2],strings:b,ctor:w[1]==="."?Oh:w[1]==="?"?Ih:w[1]==="@"?Dh:Rs}),r.removeAttribute(p)}else p.startsWith(mn)&&(c.push({type:6,index:s}),r.removeAttribute(p));if(mc.test(r.tagName)){const p=r.textContent.split(mn),g=p.length-1;if(g>0){r.textContent=ns?ns.emptyScript:"";for(let b=0;b<g;b++)r.append(p[b],fr()),Fn.nextNode(),c.push({type:2,index:++s});r.append(p[g],fr())}}}else if(r.nodeType===8)if(r.data===fc)c.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(mn,p+1))!==-1;)c.push({type:7,index:s}),p+=mn.length-1}s++}}static createElement(e,n){const i=qn.createElement("template");return i.innerHTML=e,i}};function bi(t,e,n=t,i){if(e===tt)return e;let r=i!==void 0?n._$Co?.[i]:n._$Cl;const s=mr(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,n,i)),i!==void 0?(n._$Co??=[])[i]=r:n._$Cl=r),r!==void 0&&(e=bi(t,r._$AS(t,e.values),r,i)),e}let Lh=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:i}=this._$AD,r=(e?.creationScope??qn).importNode(n,!0);Fn.currentNode=r;let s=Fn.nextNode(),o=0,l=0,c=i[0];for(;c!==void 0;){if(o===c.index){let h;c.type===2?h=new Ii(s,s.nextSibling,this,e):c.type===1?h=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(h=new zh(s,this,e)),this._$AV.push(h),c=i[++l]}o!==c?.index&&(s=Fn.nextNode(),o++)}return Fn.currentNode=qn,r}p(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}};class Ii{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,i,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=bi(this,e,n),mr(e)?e===F||e==null||e===""?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==tt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):_h(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&mr(this._$AH)?this._$AA.nextSibling.data=e:this.T(qn.createTextNode(e)),this._$AH=e}$(e){const{values:n,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Io.createElement(gc(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(n);else{const s=new Lh(r,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(e){let n=ul.get(e.strings);return n===void 0&&ul.set(e.strings,n=new Io(e)),n}k(e){da(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const s of e)r===n.length?n.push(i=new Ii(this.O(fr()),this.O(fr()),this,this.options)):i=n[r],i._$AI(s),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}let Rs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,i,r,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(e,n=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=bi(this,e,n,0),o=!mr(e)||e!==this._$AH&&e!==tt,o&&(this._$AH=e);else{const l=e;let c,h;for(e=s[0],c=0;c<s.length-1;c++)h=bi(this,l[i+c],n,c),h===tt&&(h=this._$AH[c]),o||=!mr(h)||h!==this._$AH[c],h===F?e=F:e!==F&&(e+=(h??"")+s[c+1]),this._$AH[c]=h}o&&!r&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class Oh extends Rs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}let Ih=class extends Rs{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}},Dh=class extends Rs{constructor(e,n,i,r,s){super(e,n,i,r,s),this.type=5}_$AI(e,n=this){if((e=bi(this,e,n,0)??F)===tt)return;const i=this._$AH,r=e===F&&i!==F||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==F&&(i===F||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},zh=class{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){bi(this,e)}};const Ph={I:Ii},Mh=ca.litHtmlPolyfillSupport;Mh?.(Io,Ii),(ca.litHtmlVersions??=[]).push("3.3.1");const Et=(t,e,n)=>{const i=n?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const s=n?.renderBefore??null;i._$litPart$=r=new Ii(e.insertBefore(fr(),s),s,void 0,n??{})}return r._$AI(t),r};const{I:Nh}=Ph,Fh=(t,e)=>t?._$litType$!==void 0,wc=t=>t.strings===void 0,pl=()=>document.createComment(""),Wi=(t,e,n)=>{const i=t._$AA.parentNode,r=e===void 0?t._$AB:e._$AA;if(n===void 0){const s=i.insertBefore(pl(),r),o=i.insertBefore(pl(),r);n=new Nh(s,o,t,t.options)}else{const s=n._$AB.nextSibling,o=n._$AM,l=o!==t;if(l){let c;n._$AQ?.(t),n._$AM=t,n._$AP!==void 0&&(c=t._$AU)!==o._$AU&&n._$AP(c)}if(s!==r||l){let c=n._$AA;for(;c!==s;){const h=c.nextSibling;i.insertBefore(c,r),c=h}}}return n},In=(t,e,n=t)=>(t._$AI(e,n),t),Uh={},vc=(t,e=Uh)=>t._$AH=e,Bh=t=>t._$AH,co=t=>{t._$AR(),t._$AA.remove()};const or=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const i of n)i._$AO?.(e,!1),or(i,e);return!0},is=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},yc=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Hh(e)}};function Vh(t){this._$AN!==void 0?(is(this),this._$AM=t,yc(this)):this._$AM=t}function qh(t,e=!1,n=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let s=n;s<i.length;s++)or(i[s],!1),is(i[s]);else i!=null&&(or(i,!1),is(i));else or(this,t)}const Hh=t=>{t.type==At.CHILD&&(t._$AP??=qh,t._$AQ??=Vh)};let Wh=class extends Oi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,i){super._$AT(e,n,i),yc(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(or(this,e),is(this))}setValue(e){if(wc(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};Bt.State;Bt.Computed;const xn=(t,e)=>new Bt.State(t,e);class jh{constructor(){this.subscriptions=new Map,this.tokenCounter=0}subscribe(e,n){this.subscriptions.has(e)||this.subscriptions.set(e,new Map);const i=`token_${++this.tokenCounter}_${Date.now()}`;return this.subscriptions.get(e).set(i,n),i}unsubscribe(e){for(const[n,i]of this.subscriptions.entries())if(i.has(e)){i.delete(e),i.size===0&&this.subscriptions.delete(n);return}}publish(e,n){const i=this.subscriptions.get(e);return!i||i.size===0?!1:(queueMicrotask(()=>{i.forEach(r=>{try{r(n)}catch(s){console.error(`Error in event callback for topic "${e}":`,s)}})}),!0)}clearAllSubscriptions(){this.subscriptions.clear()}clearSubscriptions(e){this.subscriptions.delete(e)}}const ha=new jh,Se=(t,e)=>ha.subscribe(t,e),Gh=t=>{ha.unsubscribe(t)},te=(t,e)=>ha.publish(t,e);const Yr=globalThis,ua=Yr.ShadowRoot&&(Yr.ShadyCSS===void 0||Yr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pa=Symbol(),fl=new WeakMap;let xc=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==pa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(ua&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=fl.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&fl.set(n,e))}return e}toString(){return this.cssText}};const kc=t=>new xc(typeof t=="string"?t:t+"",void 0,pa),qe=(t,...e)=>{const n=t.length===1?t[0]:e.reduce(((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1]),t[0]);return new xc(n,t,pa)},Xh=(t,e)=>{if(ua)t.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of e){const i=document.createElement("style"),r=Yr.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=n.cssText,t.appendChild(i)}},ml=ua?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return kc(n)})(t):t;const{is:Kh,defineProperty:Yh,getOwnPropertyDescriptor:Zh,getOwnPropertyNames:Qh,getOwnPropertySymbols:Jh,getPrototypeOf:eu}=Object,Ls=globalThis,gl=Ls.trustedTypes,tu=gl?gl.emptyScript:"",nu=Ls.reactiveElementPolyfillSupport,ar=(t,e)=>t,rs={toAttribute(t,e){switch(e){case Boolean:t=t?tu:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},fa=(t,e)=>!Kh(t,e),bl={attribute:!0,type:String,converter:rs,reflect:!1,useDefault:!1,hasChanged:fa};Symbol.metadata??=Symbol("metadata"),Ls.litPropertyMetadata??=new WeakMap;let oi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=bl){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,n);r!==void 0&&Yh(this.prototype,e,r)}}static getPropertyDescriptor(e,n,i){const{get:r,set:s}=Zh(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get:r,set(o){const l=r?.call(this);s?.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??bl}static _$Ei(){if(this.hasOwnProperty(ar("elementProperties")))return;const e=eu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ar("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ar("properties"))){const n=this.properties,i=[...Qh(n),...Jh(n)];for(const r of i)this.createProperty(r,n[r])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[i,r]of n)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const r=this._$Eu(n,i);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)n.unshift(ml(r))}else e!==void 0&&n.push(ml(e));return n}static _$Eu(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xh(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$ET(e,n){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:rs).toAttribute(n,i.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,n){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:rs;this._$Em=r;const l=o.fromAttribute(n,s.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(e,n,i){if(e!==void 0){const r=this.constructor,s=this[e];if(i??=r.getPropertyOptions(e),!((i.hasChanged??fa)(s,n)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:i,reflect:r,wrapped:s},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??n??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(n=void 0),this._$AL.set(e,n)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,s]of i){const{wrapped:o}=s,l=this[r];o!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,s,l)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(n)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(e){}firstUpdated(e){}};oi.elementStyles=[],oi.shadowRootOptions={mode:"open"},oi[ar("elementProperties")]=new Map,oi[ar("finalized")]=new Map,nu?.({ReactiveElement:oi}),(Ls.reactiveElementVersions??=[]).push("2.1.1");const ma=globalThis;let Vn=class extends oi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Et(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tt}};Vn._$litElement$=!0,Vn.finalized=!0,ma.litElementHydrateSupport?.({LitElement:Vn});const iu=ma.litElementPolyfillSupport;iu?.({LitElement:Vn});(ma.litElementVersions??=[]).push("4.2.1");const ru=!1;class ga{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,n){return e[n]||this.parent?.getProxy()[n]}set(e,n,i){e[n]=i}put(e,n){this.variables[e]=n}getProxy(){return this.proxy}createChild(e={}){const n=new ga(e);return n.parent=this,this.children.push(n),n}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const Xe=new ga({}),Di=Xe.createChild({});Di.put("html",f);Di.put("render",Et);const Nt="events/contributionregistry/contributionsChanged";class su{constructor(){this.contributions=new Map}registerContribution(e,n){const i=this.getContributions(e);if(n.disabled instanceof Function){const r=n.disabled;n.disabled=new Bt.Computed(r)}i.push(n),te(Nt,{target:e,contributions:i})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const z=new su;Xe.put("contributionRegistry",z);function ba(t){return new Promise((e,n)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>n(t.error)})}function ou(t,e){let n;const i=()=>{if(n)return n;const r=indexedDB.open(t);return r.onupgradeneeded=()=>r.result.createObjectStore(e),n=ba(r),n.then(s=>{s.onclose=()=>n=void 0},()=>{}),n};return(r,s)=>i().then(o=>s(o.transaction(e,r).objectStore(e)))}let ho;function Ec(){return ho||(ho=ou("keyval-store","keyval")),ho}function au(t,e=Ec()){return e("readonly",n=>ba(n.get(t)))}function lu(t,e,n=Ec()){return n("readwrite",i=>(i.put(e,t),ba(i.transaction)))}class cu{async persistObject(e,n){return lu(e,n)}async getObject(e){return au(e)}}const kt=new cu;Xe.put("persistenceService",kt);const ai=".geospace/settings.json",Zr="dialogSettings",gn="events/settings/changed";class du{async checkSettings(){this.appSettings||(this.appSettings=await kt.getObject(ai),this.appSettings||(this.appSettings={},await kt.persistObject(ai,this.appSettings)),te(gn,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,n){await this.checkSettings(),this.appSettings[e]=n,await kt.persistObject(ai,this.appSettings),te(gn,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await kt.persistObject(ai,this.appSettings),te(gn,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[Zr]||{})[e]}async setDialogSetting(e,n){await this.checkSettings();const i=this.appSettings[Zr]||{};i[e]=n,this.appSettings[Zr]=i,await kt.persistObject(ai,this.appSettings),te(gn,this.appSettings)}}const de=new du;Xe.put("appSettings",de);const sy=Object.freeze(Object.defineProperty({__proto__:null,DIALOG_SETTINGS_KEY:Zr,SETTINGS_FILE_PATH:ai,TOPIC_SETTINGS_CHANGED:gn,appSettings:de},Symbol.toStringTag,{value:"Module"})),nn="system.language_bundles",Do="language";function hu(t,e){return e?t.replace(/\{(\w+)\}/g,(n,i)=>e[i]!==void 0?e[i]:n):t}class uu extends String{constructor(e,n,i,r){super(""),this.i18nService=e,this.namespace=n,this.key=i,this.params=r}toString(){const e=this.i18nService.currentLanguageSignal.get();return this.cachedValue!==void 0&&this.cachedLanguage===e?this.cachedValue:(this.cachedValue=this.i18nService.translate(this.namespace,this.key,this.params),this.cachedLanguage=e,this.cachedValue)}valueOf(){return this.toString()}[Symbol.toPrimitive](e){if(e==="number"){const n=Number(this.toString());return isNaN(n)?0:n}return this.toString()}toJSON(){return this.toString()}}const Nn=class Nn{constructor(){this.translationCache=new Map,this.currentLanguageSignal=xn(this.getBrowserLanguage()),this.languageContributionsSignal=xn([]),this.initialize()}getBrowserLanguage(){return(navigator.language||navigator.languages?.[0]||Nn.DEFAULT_LANGUAGE).split("-")[0].toLowerCase()}async initializeLanguage(){return await de.get(Do)||this.getBrowserLanguage()}async updateLanguageFromSettings(){const e=await this.initializeLanguage();this.currentLanguageSignal.set(e)}getPrimaryLanguage(e){return e.split("-")[0].toLowerCase()}updateLanguageContributions(){const e=z.getContributions(nn);this.languageContributionsSignal.set(e)}createCacheKey(e,n){return`${e}:${n}`}mergeTranslationsForLanguage(e,n,i){const r=this.createCacheKey(n,i),s=this.translationCache.get(r);if(s!==void 0)return s;const o={};for(const l of e){if(l.namespace!==n)continue;let c;l.translations&&l.language===i?c=l.translations:l[i]&&typeof l[i]=="object"&&(c=l[i]),c&&Object.assign(o,c)}return this.translationCache.set(r,o),o}invalidateTranslationCache(){this.translationCache.clear()}translate(e,n,i){const r=this.currentLanguageSignal.get(),s=this.getPrimaryLanguage(r),o=this.languageContributionsSignal.get();let l;const c=this.mergeTranslationsForLanguage(o,e,r);if(c[n])l=c[n];else{const h=r!==s?this.mergeTranslationsForLanguage(o,e,s):c;if(h[n])l=h[n];else if(s!==Nn.DEFAULT_LANGUAGE&&r!==Nn.DEFAULT_LANGUAGE){const u=this.mergeTranslationsForLanguage(o,e,Nn.DEFAULT_LANGUAGE);u[n]&&(l=u[n])}}return l?hu(l,i):n}initialize(){Se(gn,async e=>{const n=e?.[Do]||this.getBrowserLanguage();this.currentLanguageSignal.set(n),this.invalidateTranslationCache()}),Se(Nt,e=>{e.target===nn&&(this.invalidateTranslationCache(),this.updateLanguageContributions())}),this.updateLanguageFromSettings(),this.updateLanguageContributions()}i18n(e){return(n,i)=>this.translate(e,n,i)}i18nLazy(e){return(n,i)=>new uu(this,e,n,i)}};Nn.DEFAULT_LANGUAGE="en";let zo=Nn;const kr=new zo;Xe.put("i18nService",kr);const Cc=kr.currentLanguageSignal,pu=kr.languageContributionsSignal,Qn=t=>kr.i18n(t),fu=t=>kr.i18nLazy(t),mu="filebrowser",gu={CONNECT_WORKSPACE:"Connect Workspace...",RELOAD_WORKSPACE:"Reload workspace folder",CREATE_NEW:"Create new...",RENAME_RESOURCE:"Rename selected resource",DELETE_RESOURCE:"Delete selected resource",OPEN:"Open",RENAME:"Rename",DELETE:"Delete",FILE:"File",FOLDER:"Folder",FILE_EXISTS_OVERWRITE:'File "{fileName}" already exists. Do you want to overwrite it?',SELECT_WORKSPACE:"Select a workspace.",DROP_FILES_HERE:"📁 Drop files here"},bu={CONNECT_WORKSPACE:"Arbeitsbereich verbinden...",RELOAD_WORKSPACE:"Arbeitsbereich-Ordner neu laden",CREATE_NEW:"Neu erstellen...",RENAME_RESOURCE:"Ausgewählte Ressource umbenennen",DELETE_RESOURCE:"Ausgewählte Ressource löschen",OPEN:"Öffnen",RENAME:"Umbenennen",DELETE:"Löschen",FILE:"Datei",FOLDER:"Ordner",FILE_EXISTS_OVERWRITE:'Die Datei "{fileName}" existiert bereits. Möchten Sie sie überschreiben?',SELECT_WORKSPACE:"Wählen Sie einen Arbeitsbereich aus.",DROP_FILES_HERE:"📁 Dateien hier ablegen"},wu={namespace:mu,en:gu,de:bu},vu="extensions",yu={FILTER_PLACEHOLDER:"Filter extensions...",INSTALLED:"Installed",AVAILABLE:"Available",NO_MATCHES:'No extensions match "{filterText}"',EXTERNAL_EXTENSION:"External Extension",UNINSTALL:"Uninstall (requires restart)",REQUIRED_HINT:"This extension is required by the current app and cannot be uninstalled",INSTALL:"Install",EXPERIMENTAL:"This is an experimental extension!",VERSION:"Version:",AUTHOR:"Author:",DEPENDENCIES:"Dependencies",NOT_INSTALLED:"Not Installed",DEPENDENCIES_HINT:"Dependencies are automatically installed when this extension is enabled.",DISABLE_TITLE:"Disable this extension",ENABLE_TITLE:"Enable this extension",EXT_GIT_NAME:"Git Support",EXT_GIT_DESC:"Git commands and UI elements",EXT_GITHUB_SERVICE_NAME:"GitHub Service",EXT_GITHUB_SERVICE_DESC:"GitHub API service for fetching release information",EXT_PYTERMINAL_NAME:"Python terminal",EXT_PYTERMINAL_DESC:"Python terminal view",EXT_LINUXTERMINAL_NAME:"Linux terminal",EXT_LINUXTERMINAL_DESC:"Linux terminal view",EXT_WEBLLM_NAME:"WebLLM",EXT_WEBLLM_DESC:"In-Browser LLM inference",EXT_P12SPLITTER_NAME:".p12 file splitter",EXT_P12SPLITTER_DESC:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",EXT_PYTHONPACKAGEMANAGER_NAME:"Python Package Manager",EXT_PYTHONPACKAGEMANAGER_DESC:"Manage Python packages for notebooks and other Python-based extensions",EXT_NOTEBOOK_NAME:"Jupyter-like Notebook Editor",EXT_NOTEBOOK_DESC:"View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering",EXT_COMMANDPALETTE_NAME:"Command Palette",EXT_COMMANDPALETTE_DESC:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",EXT_DOWNLOAD_NAME:"Download Files",EXT_DOWNLOAD_DESC:"Download files from URLs to the workspace",EXT_UNZIP_NAME:"Unzip Archives",EXT_UNZIP_DESC:"Extract zip archives to the workspace",EXT_MDEDITOR_NAME:"Markdown Editor",EXT_MDEDITOR_DESC:"View and render Markdown (.md) files",EXT_MEDIAVIEWER_NAME:"Media Viewer",EXT_MEDIAVIEWER_DESC:"View PDF, image, and HTML files in the browser",EXT_MONACO_NAME:"Monaco Code Editor",EXT_MONACO_DESC:"Code editor with syntax highlighting, code completion, and Python execution support",EXT_MEMORYUSAGE_NAME:"Memory Usage Monitor",EXT_MEMORYUSAGE_DESC:"Displays JavaScript heap memory usage in the bottom toolbar",EXT_WEBDAV_NAME:"WebDAV Workspace",EXT_WEBDAV_DESC:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",EXT_SETTINGS_TREE_NAME:"Settings Tree Editor",EXT_SETTINGS_TREE_DESC:"Tree-based editor for settings with in-place editing",EXT_IN_BROWSER_ML_NAME:"In-Browser ML",EXT_IN_BROWSER_ML_DESC:"In-browser machine learning service using transformers.js for specialized tasks (zero-shot classification, embeddings, etc.)",EXT_AI_SYSTEM_NAME:"AI System",EXT_AI_SYSTEM_DESC:"Modern AI service with streaming support and agent workflows",EXT_RAG_SYSTEM_NAME:"RAG System",EXT_RAG_SYSTEM_DESC:"Retrieval-Augmented Generation system for document indexing, search and retrieval",EXT_HOWTO_NAME:"HowTo System",EXT_HOWTO_DESC:"Step-by-step workflow system with pre and post condition checks"},xu={FILTER_PLACEHOLDER:"Erweiterungen filtern...",INSTALLED:"Installiert",AVAILABLE:"Verfügbar",NO_MATCHES:'Keine Erweiterungen entsprechen "{filterText}"',EXTERNAL_EXTENSION:"Externe Erweiterung",UNINSTALL:"Deinstallieren (Neustart erforderlich)",REQUIRED_HINT:"Diese Erweiterung ist für die aktuelle App erforderlich und kann nicht deinstalliert werden",INSTALL:"Installieren",EXPERIMENTAL:"Dies ist eine experimentelle Erweiterung!",VERSION:"Version:",AUTHOR:"Autor:",DEPENDENCIES:"Abhängigkeiten",NOT_INSTALLED:"Nicht installiert",DEPENDENCIES_HINT:"Abhängigkeiten werden automatisch installiert, wenn diese Erweiterung aktiviert wird.",DISABLE_TITLE:"Diese Erweiterung deaktivieren",ENABLE_TITLE:"Diese Erweiterung aktivieren",EXT_GIT_NAME:"Git-Unterstützung",EXT_GIT_DESC:"Git-Befehle und UI-Elemente",EXT_GITHUB_SERVICE_NAME:"GitHub-Service",EXT_GITHUB_SERVICE_DESC:"GitHub-API-Service zum Abrufen von Release-Informationen",EXT_PYTERMINAL_NAME:"Python-Terminal",EXT_PYTERMINAL_DESC:"Python-Terminalansicht",EXT_LINUXTERMINAL_NAME:"Linux-Terminal",EXT_LINUXTERMINAL_DESC:"Linux-Terminalansicht",EXT_WEBLLM_NAME:"WebLLM",EXT_WEBLLM_DESC:"LLM-Inferenz im Browser",EXT_P12SPLITTER_NAME:".p12-Datei-Splitter",EXT_P12SPLITTER_DESC:"Fügt einen Befehl hinzu, um eine .p12-Datei in private/öffentliche und zusätzliche .pem-Dateien zu trennen",EXT_PYTHONPACKAGEMANAGER_NAME:"Python-Paket-Manager",EXT_PYTHONPACKAGEMANAGER_DESC:"Verwaltet Python-Pakete für Notebooks und andere Python-basierte Erweiterungen",EXT_NOTEBOOK_NAME:"Jupyter-ähnlicher Notebook-Editor",EXT_NOTEBOOK_DESC:"Anzeigen und Ausführen von Jupyter-ähnlichen Notebooks (.ipynb) mit Python-Codeausführung und Markdown-Rendering",EXT_COMMANDPALETTE_NAME:"Befehls-Palette",EXT_COMMANDPALETTE_DESC:"VS Code-ähnliche Befehls-Palette oben in der Mitte für schnelle Befehlsausführung (Strg+Umschalt+P)",EXT_DOWNLOAD_NAME:"Dateien herunterladen",EXT_DOWNLOAD_DESC:"Dateien von URLs in den Arbeitsbereich herunterladen",EXT_UNZIP_NAME:"Archive entpacken",EXT_UNZIP_DESC:"Zip-Archive in den Arbeitsbereich extrahieren",EXT_MDEDITOR_NAME:"Markdown-Editor",EXT_MDEDITOR_DESC:"Anzeigen und Rendern von Markdown (.md) Dateien",EXT_MEDIAVIEWER_NAME:"Medien-Viewer",EXT_MEDIAVIEWER_DESC:"PDF-, Bild- und HTML-Dateien im Browser anzeigen",EXT_MONACO_NAME:"Monaco-Code-Editor",EXT_MONACO_DESC:"Code-Editor mit Syntaxhervorhebung, Code-Vervollständigung und Python-Ausführungsunterstützung",EXT_MEMORYUSAGE_NAME:"Speicherverbrauch-Monitor",EXT_MEMORYUSAGE_DESC:"Zeigt die JavaScript-Heap-Speichernutzung in der unteren Symbolleiste an",EXT_WEBDAV_NAME:"WebDAV-Arbeitsbereich",EXT_WEBDAV_DESC:"Verbinden Sie sich mit WebDAV-Servern (Nextcloud, ownCloud) als Arbeitsbereichsordner für Cloud-Speicher-Integration",EXT_SETTINGS_TREE_NAME:"Einstellungs-Baum-Editor",EXT_SETTINGS_TREE_DESC:"Baumbasierter Editor für Einstellungen mit direkter Bearbeitung",EXT_IN_BROWSER_ML_NAME:"ML im Browser",EXT_IN_BROWSER_ML_DESC:"Maschinelles Lernen im Browser mit transformers.js für spezialisierte Aufgaben (Zero-Shot-Klassifizierung, Embeddings usw.)",EXT_AI_SYSTEM_NAME:"KI-System",EXT_AI_SYSTEM_DESC:"Modernes KI-Service mit Streaming-Unterstützung und Agent-Workflows",EXT_RAG_SYSTEM_NAME:"RAG-System",EXT_RAG_SYSTEM_DESC:"Retrieval-Augmented Generation System für Dokumentenindizierung, Suche und Abruf",EXT_HOWTO_NAME:"HowTo-System",EXT_HOWTO_DESC:"Schritt-für-Schritt-Workflow-System mit Vor- und Nachbedingungsprüfungen"},ku={namespace:vu,en:yu,de:xu},Eu="tasks",Cu={ACTIVE_TASKS:"Active Tasks",ACTIVE_TASKS_TITLE:"Active tasks: {taskCount}. Click to view details."},Su={ACTIVE_TASKS:"Aktive Aufgaben",ACTIVE_TASKS_TITLE:"Aktive Aufgaben: {taskCount}. Klicken Sie, um Details anzuzeigen."},$u={namespace:Eu,en:Cu,de:Su},Au="workspace",_u={NO_WORKSPACE:"<no workspace>",LOAD_WORKSPACE:"Load workspace"},Tu={NO_WORKSPACE:"<kein Arbeitsbereich>",LOAD_WORKSPACE:"Arbeitsbereich laden"},Ru={namespace:Au,en:_u,de:Tu},Lu="fastviews",Ou={FAST_VIEWS:"Fast Views"},Iu={FAST_VIEWS:"Schnellansichten"},Du={namespace:Lu,en:Ou,de:Iu},zu="logterminal",Pu={ALL_LOGS:"All logs",ALL:"All",INFO_LOGS:"Info logs",INFO:"Info",WARNING_LOGS:"Warning logs",WARNINGS:"Warnings",ERROR_LOGS:"Error logs",ERRORS:"Errors",DEBUG_LOGS:"Debug logs",DEBUG:"Debug",AUTO_SCROLL_ENABLED:"Auto-scroll enabled",AUTO_SCROLL_DISABLED:"Auto-scroll disabled",AUTO_SCROLL:"Auto-scroll",MANUAL:"Manual",CLEAR_LOGS:"Clear logs",CLEAR:"Clear",NO_LOG_MESSAGES:"No log messages"},Mu={ALL_LOGS:"Alle Protokolle",ALL:"Alle",INFO_LOGS:"Info-Protokolle",INFO:"Info",WARNING_LOGS:"Warnungsprotokolle",WARNINGS:"Warnungen",ERROR_LOGS:"Fehlerprotokolle",ERRORS:"Fehler",DEBUG_LOGS:"Debug-Protokolle",DEBUG:"Debug",AUTO_SCROLL_ENABLED:"Automatisches Scrollen aktiviert",AUTO_SCROLL_DISABLED:"Automatisches Scrollen deaktiviert",AUTO_SCROLL:"Automatisches Scrollen",MANUAL:"Manuell",CLEAR_LOGS:"Protokolle löschen",CLEAR:"Löschen",NO_LOG_MESSAGES:"Keine Protokollnachrichten"},Nu={namespace:zu,en:Pu,de:Mu},Fu="partname",Uu={NO_PART:"<no part>",ACTIVE_PART:"Active part"},Bu={NO_PART:"<kein Bereich>",ACTIVE_PART:"Aktiver Bereich"},Vu={namespace:Fu,en:Uu,de:Bu};z.registerContribution(nn,wu);z.registerContribution(nn,ku);z.registerContribution(nn,$u);z.registerContribution(nn,Ru);z.registerContribution(nn,Du);z.registerContribution(nn,Nu);z.registerContribution(nn,Vu);const wl={debug:0,info:1,warning:2,error:3};let qu="debug";const li={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let ss=null;const Po=[];function ji(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class Hu{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,n){ci(this.source,e,n)}}function Wu(t){return wl[t]>=wl[qu]}function ci(t,e,n){Wu(n)&&(ss?ss(t,e,n):(Po.push({source:t,message:e,level:n}),li[n==="error"?"error":n==="warning"?"warn":n==="debug"?"debug":"log"](`[${t}] ${e}`)))}function ju(){console.log=function(...t){li.log.apply(console,t),ci("Console",t.map(e=>ji(e)).join(" "),"info")},console.info=function(...t){li.info.apply(console,t),ci("Console",t.map(e=>ji(e)).join(" "),"info")},console.warn=function(...t){li.warn.apply(console,t),ci("Console",t.map(e=>ji(e)).join(" "),"warning")},console.error=function(...t){li.error.apply(console,t),ci("Console",t.map(e=>ji(e)).join(" "),"error")},console.debug=function(...t){li.debug.apply(console,t),ci("Console",t.map(e=>ji(e)).join(" "),"debug")}}ju();function Gu(t){for(ss=t;Po.length>0;){const e=Po.shift();e&&t(e.source,e.message,e.level)}}function Xu(){ss=null}function dn(t){return new Hu(t)}const Y=dn("System");Xe.put("logger",Y);const mt=xn(null),Lt=xn(null),gr=xn(null),Mo=xn(0),zn=xn(void 0);xn({name:"",timestamp:0});class Sc{constructor(e,n,i,r,s){this.id=e,this.name=n,this.description=i,this.parameters=r||[],this.output=s||[]}}class $c{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,n){this.handlers.has(e)||this.handlers.set(e,[]);const i=this.handlers.get(e);i.push(n),i.sort((r,s)=>(s.ranking??0)-(r.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:mt.get(),activeEditor:Lt.get()}}execute(e,n={}){const i=this.getHandler(e);if(!i)throw Y.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const r=this.getCommand(e),s=n.params?` params: ${JSON.stringify(n.params)}`:"";Y.debug(`[CommandRegistry] Executing command: ${e}${r?` (${r.name})`:""}${s}`);for(const o of i)if(o.canExecute===void 0||o.canExecute(n))try{const l=o.execute(n);return Y.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${l})`),l}catch(l){const c=l instanceof Error?l.message:String(l);throw Y.error(`[CommandRegistry] Command execution failed: ${e} - ${c}`),l}Y.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,n,i,r,s){const o=new Sc(e,n,i,r);this.registerCommand(o),s&&this.registerHandler(e,s)}registerCommand(e){this.commands[e.id]=e,Y.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(n=>(Te.getHandler(n.id)||[]).some(r=>r.canExecute===void 0||r.canExecute(e))).reduce((n,i)=>(n[i.id]=i,n),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const n=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(n,e.handler),e.contribution&&e.contribution.target&&z.registerContribution(e.contribution.target,{command:n,...e.contribution})}}const Te=new $c;Xe.put("commandRegistry",Te);const he=t=>{Te.registerAll(t)},oy=Object.freeze(Object.defineProperty({__proto__:null,Command:Sc,CommandRegistry:$c,commandRegistry:Te,registerAll:he},Symbol.toStringTag,{value:"Module"}));class Ku{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=Te.listCommands();Object.values(e).forEach(n=>{n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)})}watchCommandRegistry(){const e=Te.registerCommand.bind(Te);Te.registerCommand=n=>{e(n),n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const n=e.toUpperCase().split("+").map(o=>o.trim());if(n.length===0)return null;const i={ctrl:!1,alt:!1,shift:!1,meta:!1},r=n[n.length-1],s=n.slice(0,-1);for(const o of s)switch(o){case"CTRL":case"CONTROL":i.ctrl=!0;break;case"ALT":case"OPTION":i.alt=!0;break;case"SHIFT":i.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":i.meta=!0;break;default:Y.warn(`Unknown modifier: ${o}`)}return i.key=this.normalizeKey(r),i}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const n=[];return e.ctrl&&n.push("ctrl"),e.alt&&n.push("alt"),e.shift&&n.push("shift"),e.meta&&n.push("meta"),n.sort(),`${n.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,n){const i=this.parseKeyBinding(n);if(!i)return Y.error(`Invalid key binding: ${n}`),!1;i.commandId=e;const r=this.getBindingKey(i);this.bindings.has(r)||this.bindings.set(r,[]);const s=this.bindings.get(r);return s.find(l=>l.commandId===e)?(Y.error(`Key binding ${n} already registered for command ${e}`),!1):(s.push(i),Y.debug(`Key binding registered: ${n} -> ${e}`),!0)}unregisterKeyBinding(e,n){if(n){const i=this.parseKeyBinding(n);if(i){const r=this.getBindingKey(i),s=this.bindings.get(r);if(s){const o=s.filter(l=>l.commandId!==e);o.length===0?this.bindings.delete(r):this.bindings.set(r,o)}}}else for(const[i,r]of this.bindings.entries()){const s=r.filter(o=>o.commandId!==e);s.length===0?this.bindings.delete(i):this.bindings.set(i,s)}}getKeyBindingsForCommand(e){const n=[];for(const i of this.bindings.values())for(const r of i)r.commandId===e&&n.push(this.formatKeyBinding(r));return n}formatKeyBinding(e){const n=[];e.ctrl&&n.push("Ctrl"),e.alt&&n.push("Alt"),e.shift&&n.push("Shift"),e.meta&&n.push("Cmd");let i=e.key;return i.length===1?i=i.toUpperCase():i=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase(),n.push(i),n.join("+")}handleKeyDown(e){if(!this.enabled)return;const n=e.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)){const o=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&o==="P"))return}const i={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},r=this.getBindingKey(i),s=this.bindings.get(r);if(s&&s.length>0){const o=s[0];try{e.preventDefault(),e.stopPropagation();const l=Te.createExecutionContext({});Te.execute(o.commandId,l),Y.info(`Executed command via key binding: ${o.commandId}`)}catch(l){Y.error(`Failed to execute command ${o.commandId}: ${l.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}Y.debug("KeyBindingManager initializing...");const Ac=new Ku;Y.debug("KeyBindingManager initialized");Xe.put("keyBindingManager",Ac);const S=t=>(e,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};const Yu={attribute:!0,type:String,converter:rs,reflect:!1,hasChanged:fa},Zu=(t=Yu,e,n)=>{const{kind:i,metadata:r}=n;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(n.name,t),i==="accessor"){const{name:o}=n;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,c,t)},init(l){return l!==void 0&&this.C(o,void 0,t,l),l}}}if(i==="setter"){const{name:o}=n;return function(l){const c=this[o];e.call(this,l),this.requestUpdate(o,c,t)}}throw Error("Unsupported decorator location: "+i)};function d(t){return(e,n)=>typeof n=="object"?Zu(t,e,n):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,n)}function A(t){return d({...t,state:!0,attribute:!1})}function Os(t){return(e,n)=>{const i=typeof e=="function"?e:e[n];Object.assign(i,t)}}const _c=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);function $(t,e){return(n,i,r)=>{const s=o=>o.renderRoot?.querySelector(t)??null;return _c(n,i,{get(){return s(this)}})}}function Qu(t){return(e,n)=>_c(e,n,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}let No=class extends Oi{constructor(e){if(super(e),this.it=F,e.type!==At.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===F||e==null)return this._t=void 0,this.it=e;if(e===tt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};No.directiveName="unsafeHTML",No.resultType=1;const tn=Li(No);function wa(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Jn=wa();function Tc(t){Jn=t}var lr={exec:()=>null};function ne(t,e=""){let n=typeof t=="string"?t:t.source,i={replace:(r,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(Ye.caret,"$1"),n=n.replace(r,o),i},getRegex:()=>new RegExp(n,e)};return i}var Ju=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ye={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},ep=/^(?:[ \t]*(?:\n|$))+/,tp=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,np=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Er=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ip=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,va=/(?:[*+-]|\d{1,9}[.)])/,Rc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Lc=ne(Rc).replace(/bull/g,va).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),rp=ne(Rc).replace(/bull/g,va).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ya=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,sp=/^[^\n]+/,xa=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,op=ne(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",xa).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ap=ne(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,va).getRegex(),Is="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ka=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,lp=ne("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ka).replace("tag",Is).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Oc=ne(ya).replace("hr",Er).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Is).getRegex(),cp=ne(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Oc).getRegex(),Ea={blockquote:cp,code:tp,def:op,fences:np,heading:ip,hr:Er,html:lp,lheading:Lc,list:ap,newline:ep,paragraph:Oc,table:lr,text:sp},vl=ne("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Er).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Is).getRegex(),dp={...Ea,lheading:rp,table:vl,paragraph:ne(ya).replace("hr",Er).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",vl).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Is).getRegex()},hp={...Ea,html:ne(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ka).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:lr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ne(ya).replace("hr",Er).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Lc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},up=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,pp=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ic=/^( {2,}|\\)\n(?!\s*$)/,fp=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ds=/[\p{P}\p{S}]/u,Ca=/[\s\p{P}\p{S}]/u,Dc=/[^\s\p{P}\p{S}]/u,mp=ne(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ca).getRegex(),zc=/(?!~)[\p{P}\p{S}]/u,gp=/(?!~)[\s\p{P}\p{S}]/u,bp=/(?:[^\s\p{P}\p{S}]|~)/u,wp=ne(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Ju?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Pc=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,vp=ne(Pc,"u").replace(/punct/g,Ds).getRegex(),yp=ne(Pc,"u").replace(/punct/g,zc).getRegex(),Mc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",xp=ne(Mc,"gu").replace(/notPunctSpace/g,Dc).replace(/punctSpace/g,Ca).replace(/punct/g,Ds).getRegex(),kp=ne(Mc,"gu").replace(/notPunctSpace/g,bp).replace(/punctSpace/g,gp).replace(/punct/g,zc).getRegex(),Ep=ne("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Dc).replace(/punctSpace/g,Ca).replace(/punct/g,Ds).getRegex(),Cp=ne(/\\(punct)/,"gu").replace(/punct/g,Ds).getRegex(),Sp=ne(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),$p=ne(ka).replace("(?:-->|$)","-->").getRegex(),Ap=ne("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",$p).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),os=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,_p=ne(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",os).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Nc=ne(/^!?\[(label)\]\[(ref)\]/).replace("label",os).replace("ref",xa).getRegex(),Fc=ne(/^!?\[(ref)\](?:\[\])?/).replace("ref",xa).getRegex(),Tp=ne("reflink|nolink(?!\\()","g").replace("reflink",Nc).replace("nolink",Fc).getRegex(),yl=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Sa={_backpedal:lr,anyPunctuation:Cp,autolink:Sp,blockSkip:wp,br:Ic,code:pp,del:lr,emStrongLDelim:vp,emStrongRDelimAst:xp,emStrongRDelimUnd:Ep,escape:up,link:_p,nolink:Fc,punctuation:mp,reflink:Nc,reflinkSearch:Tp,tag:Ap,text:fp,url:lr},Rp={...Sa,link:ne(/^!?\[(label)\]\((.*?)\)/).replace("label",os).getRegex(),reflink:ne(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",os).getRegex()},Fo={...Sa,emStrongRDelimAst:kp,emStrongLDelim:yp,url:ne(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",yl).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ne(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",yl).getRegex()},Lp={...Fo,br:ne(Ic).replace("{2,}","*").getRegex(),text:ne(Fo.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Mr={normal:Ea,gfm:dp,pedantic:hp},Gi={normal:Sa,gfm:Fo,breaks:Lp,pedantic:Rp},Op={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xl=t=>Op[t];function Ft(t,e){if(e){if(Ye.escapeTest.test(t))return t.replace(Ye.escapeReplace,xl)}else if(Ye.escapeTestNoEncode.test(t))return t.replace(Ye.escapeReplaceNoEncode,xl);return t}function kl(t){try{t=encodeURI(t).replace(Ye.percentDecode,"%")}catch{return null}return t}function El(t,e){let n=t.replace(Ye.findPipe,(s,o,l)=>{let c=!1,h=o;for(;--h>=0&&l[h]==="\\";)c=!c;return c?"|":" |"}),i=n.split(Ye.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(Ye.slashPipe,"|");return i}function Xi(t,e,n){let i=t.length;if(i===0)return"";let r=0;for(;r<i&&t.charAt(i-r-1)===e;)r++;return t.slice(0,i-r)}function Ip(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return n>0?-2:-1}function Cl(t,e,n,i,r){let s=e.href,o=e.title||null,l=t[1].replace(r.other.outputLinkReplace,"$1");i.state.inLink=!0;let c={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:s,title:o,text:l,tokens:i.inlineTokens(l)};return i.state.inLink=!1,c}function Dp(t,e,n){let i=t.match(n.other.indentCodeCompensation);if(i===null)return e;let r=i[1];return e.split(`
`).map(s=>{let o=s.match(n.other.beginningSpace);if(o===null)return s;let[l]=o;return l.length>=r.length?s.slice(r.length):s}).join(`
`)}var as=class{options;rules;lexer;constructor(t){this.options=t||Jn}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Xi(n,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],i=Dp(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let i=Xi(n,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(n=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Xi(e[0],`
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
`,1)[0].replace(this.rules.other.listReplaceTabs,C=>" ".repeat(3*C.length)),g=t.split(`
`,1)[0],b=!p.trim(),w=0;if(this.options.pedantic?(w=2,u=p.trimStart()):b?w=e[1].length+1:(w=e[2].search(this.rules.other.nonSpaceChar),w=w>4?1:w,u=p.slice(w),w+=e[1].length),b&&this.rules.other.blankLine.test(g)&&(h+=g+`
`,t=t.substring(g.length+1),c=!0),!c){let C=this.rules.other.nextBulletRegex(w),P=this.rules.other.hrRegex(w),R=this.rules.other.fencesBeginRegex(w),I=this.rules.other.headingBeginRegex(w),_=this.rules.other.htmlBeginRegex(w);for(;t;){let G=t.split(`
`,1)[0],D;if(g=G,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),D=g):D=g.replace(this.rules.other.tabCharGlobal,"    "),R.test(g)||I.test(g)||_.test(g)||C.test(g)||P.test(g))break;if(D.search(this.rules.other.nonSpaceChar)>=w||!g.trim())u+=`
`+D.slice(w);else{if(b||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||R.test(p)||I.test(p)||P.test(p))break;u+=`
`+g}!b&&!g.trim()&&(b=!0),h+=G+`
`,t=t.substring(G.length+1),p=D.slice(w)}}r.loose||(o?r.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(o=!0));let k=null,O;this.options.gfm&&(k=this.rules.other.listIsTask.exec(u),k&&(O=k[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:h,task:!!k,checked:O,loose:!1,text:u,tokens:[]}),r.raw+=h}let l=r.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){let h=r.items[c].tokens.filter(p=>p.type==="space"),u=h.length>0&&h.some(p=>this.rules.other.anyLine.test(p.raw));r.loose=u}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:i,title:r}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=El(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===i.length){for(let o of i)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<n.length;o++)s.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:s.align[o]});for(let o of r)s.rows.push(El(o,s.header.length).map((l,c)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:s.align[c]})));return s}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let s=Xi(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{let s=Ip(e[2],"()");if(s===-2)return;if(s>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(i);s&&(i=s[1],r=s[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?i=i.slice(1):i=i.slice(1,-1)),Cl(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let i=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[i.toLowerCase()];if(!r){let s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return Cl(n,r,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let i=this.rules.inline.emStrongLDelim.exec(t);if(!(!i||i[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[2])||!n||this.rules.inline.punctuation.exec(n))){let r=[...i[0]].length-1,s,o,l=r,c=0,h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*t.length+r);(i=h.exec(e))!=null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(o=[...s].length,i[3]||i[4]){l+=o;continue}else if((i[5]||i[6])&&r%3&&!((r+o)%3)){c+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l+c);let u=[...i[0]][0].length,p=t.slice(0,r+i.index+u+o);if(Math.min(r,o)%2){let b=p.slice(1,-1);return{type:"em",raw:p,text:b,tokens:this.lexer.inlineTokens(b)}}let g=p.slice(2,-2);return{type:"strong",raw:p,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return i&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,i;return e[2]==="@"?(n=e[1],i="mailto:"+n):(n=e[1],i=n),{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,i;if(e[2]==="@")n=e[0],i="mailto:"+n;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);n=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},_t=class Uo{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Jn,this.options.tokenizer=this.options.tokenizer||new as,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:Ye,block:Mr.normal,inline:Gi.normal};this.options.pedantic?(n.block=Mr.pedantic,n.inline=Gi.pedantic):this.options.gfm&&(n.block=Mr.gfm,this.options.breaks?n.inline=Gi.breaks:n.inline=Gi.gfm),this.tokenizer.rules=n}static get rules(){return{block:Mr,inline:Gi}}static lex(e,n){return new Uo(n).lex(e)}static lexInline(e,n){return new Uo(n).inlineTokens(e)}lex(e){e=e.replace(Ye.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],i=!1){for(this.options.pedantic&&(e=e.replace(Ye.tabCharGlobal,"    ").replace(Ye.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(o=>(r=o.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let o=n.at(-1);r.raw.length===1&&o!==void 0?o.raw+=`
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
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(r);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let i=e,r=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)s=r[2]?r[2].length:0,i=i.slice(0,r.index+s)+"["+"a".repeat(r[0].length-s-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let o=!1,l="";for(;e;){o||(l=""),o=!1;let c;if(this.options.extensions?.inline?.some(u=>(c=u.call({lexer:this},e,n))?(e=e.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);let u=n.at(-1);c.type==="text"&&u?.type==="text"?(u.raw+=c.raw,u.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(e,i,l)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),n.push(c);continue}let h=e;if(this.options.extensions?.startInline){let u=1/0,p=e.slice(1),g;this.options.extensions.startInline.forEach(b=>{g=b.call({lexer:this},p),typeof g=="number"&&g>=0&&(u=Math.min(u,g))}),u<1/0&&u>=0&&(h=e.substring(0,u+1))}if(c=this.tokenizer.inlineText(h)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),o=!0;let u=n.at(-1);u?.type==="text"?(u.raw+=c.raw,u.text+=c.text):n.push(c);continue}if(e){let u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}},ls=class{options;parser;constructor(t){this.options=t||Jn}space(t){return""}code({text:t,lang:e,escaped:n}){let i=(e||"").match(Ye.notSpaceStart)?.[0],r=t.replace(Ye.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Ft(i)+'">'+(n?r:Ft(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:Ft(r,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,n=t.start,i="";for(let o=0;o<t.items.length;o++){let l=t.items[o];i+=this.listitem(l)}let r=e?"ol":"ul",s=e&&n!==1?' start="'+n+'"':"";return"<"+r+s+`>
`+i+"</"+r+`>
`}listitem(t){let e="";if(t.task){let n=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=n+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=n+" "+Ft(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):e+=n+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let r=0;r<t.header.length;r++)n+=this.tablecell(t.header[r]);e+=this.tablerow({text:n});let i="";for(let r=0;r<t.rows.length;r++){let s=t.rows[r];n="";for(let o=0;o<s.length;o++)n+=this.tablecell(s[o]);i+=this.tablerow({text:n})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+i+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Ft(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){let i=this.parser.parseInline(n),r=kl(t);if(r===null)return i;t=r;let s='<a href="'+t+'"';return e&&(s+=' title="'+Ft(e)+'"'),s+=">"+i+"</a>",s}image({href:t,title:e,text:n,tokens:i}){i&&(n=this.parser.parseInline(i,this.parser.textRenderer));let r=kl(t);if(r===null)return Ft(n);t=r;let s=`<img src="${t}" alt="${n}"`;return e&&(s+=` title="${Ft(e)}"`),s+=">",s}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Ft(t.text)}},$a=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},Tt=class Bo{options;renderer;textRenderer;constructor(e){this.options=e||Jn,this.options.renderer=this.options.renderer||new ls,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new $a}static parse(e,n){return new Bo(n).parse(e)}static parseInline(e,n){return new Bo(n).parseInline(e)}parse(e,n=!0){let i="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let l=s,c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){i+=c||"";continue}}let o=s;switch(o.type){case"space":{i+=this.renderer.space(o);continue}case"hr":{i+=this.renderer.hr(o);continue}case"heading":{i+=this.renderer.heading(o);continue}case"code":{i+=this.renderer.code(o);continue}case"table":{i+=this.renderer.table(o);continue}case"blockquote":{i+=this.renderer.blockquote(o);continue}case"list":{i+=this.renderer.list(o);continue}case"html":{i+=this.renderer.html(o);continue}case"def":{i+=this.renderer.def(o);continue}case"paragraph":{i+=this.renderer.paragraph(o);continue}case"text":{let l=o,c=this.renderer.text(l);for(;r+1<e.length&&e[r+1].type==="text";)l=e[++r],c+=`
`+this.renderer.text(l);n?i+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):i+=c;continue}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}parseInline(e,n=this.renderer){let i="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=l||"";continue}}let o=s;switch(o.type){case"escape":{i+=n.text(o);break}case"html":{i+=n.html(o);break}case"link":{i+=n.link(o);break}case"image":{i+=n.image(o);break}case"strong":{i+=n.strong(o);break}case"em":{i+=n.em(o);break}case"codespan":{i+=n.codespan(o);break}case"br":{i+=n.br(o);break}case"del":{i+=n.del(o);break}case"text":{i+=n.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}},nr=class{options;block;constructor(t){this.options=t||Jn}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?_t.lex:_t.lexInline}provideParser(){return this.block?Tt.parse:Tt.parseInline}},zp=class{defaults=wa();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Tt;Renderer=ls;TextRenderer=$a;Lexer=_t;Tokenizer=as;Hooks=nr;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let i of t)switch(n=n.concat(e.call(this,i)),i.type){case"table":{let r=i;for(let s of r.header)n=n.concat(this.walkTokens(s.tokens,e));for(let s of r.rows)for(let o of s)n=n.concat(this.walkTokens(o.tokens,e));break}case"list":{let r=i;n=n.concat(this.walkTokens(r.items,e));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{let o=r[s].flat(1/0);n=n.concat(this.walkTokens(o,e))}):r.tokens&&(n=n.concat(this.walkTokens(r.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let s=e.renderers[r.name];s?e.renderers[r.name]=function(...o){let l=r.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[r.level];s?s.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),n.renderer){let r=this.defaults.renderer||new ls(this.defaults);for(let s in n.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let o=s,l=n.renderer[o],c=r[o];r[o]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=c.apply(r,h)),u||""}}i.renderer=r}if(n.tokenizer){let r=this.defaults.tokenizer||new as(this.defaults);for(let s in n.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let o=s,l=n.tokenizer[o],c=r[o];r[o]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=c.apply(r,h)),u}}i.tokenizer=r}if(n.hooks){let r=this.defaults.hooks||new nr;for(let s in n.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let o=s,l=n.hooks[o],c=r[o];nr.passThroughHooks.has(s)?r[o]=h=>{if(this.defaults.async&&nr.passThroughHooksRespectAsync.has(s))return(async()=>{let p=await l.call(r,h);return c.call(r,p)})();let u=l.call(r,h);return c.call(r,u)}:r[o]=(...h)=>{if(this.defaults.async)return(async()=>{let p=await l.apply(r,h);return p===!1&&(p=await c.apply(r,h)),p})();let u=l.apply(r,h);return u===!1&&(u=c.apply(r,h)),u}}i.hooks=r}if(n.walkTokens){let r=this.defaults.walkTokens,s=n.walkTokens;i.walkTokens=function(o){let l=[];return l.push(s.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return _t.lex(t,e??this.defaults)}parser(t,e){return Tt.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let i={...n},r={...this.defaults,...i},s=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=t),r.async)return(async()=>{let o=r.hooks?await r.hooks.preprocess(e):e,l=await(r.hooks?await r.hooks.provideLexer():t?_t.lex:_t.lexInline)(o,r),c=r.hooks?await r.hooks.processAllTokens(l):l;r.walkTokens&&await Promise.all(this.walkTokens(c,r.walkTokens));let h=await(r.hooks?await r.hooks.provideParser():t?Tt.parse:Tt.parseInline)(c,r);return r.hooks?await r.hooks.postprocess(h):h})().catch(s);try{r.hooks&&(e=r.hooks.preprocess(e));let o=(r.hooks?r.hooks.provideLexer():t?_t.lex:_t.lexInline)(e,r);r.hooks&&(o=r.hooks.processAllTokens(o)),r.walkTokens&&this.walkTokens(o,r.walkTokens);let l=(r.hooks?r.hooks.provideParser():t?Tt.parse:Tt.parseInline)(o,r);return r.hooks&&(l=r.hooks.postprocess(l)),l}catch(o){return s(o)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let i="<p>An error occurred:</p><pre>"+Ft(n.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(n);throw n}}},Hn=new zp;function re(t,e){return Hn.parse(t,e)}re.options=re.setOptions=function(t){return Hn.setOptions(t),re.defaults=Hn.defaults,Tc(re.defaults),re};re.getDefaults=wa;re.defaults=Jn;re.use=function(...t){return Hn.use(...t),re.defaults=Hn.defaults,Tc(re.defaults),re};re.walkTokens=function(t,e){return Hn.walkTokens(t,e)};re.parseInline=Hn.parseInline;re.Parser=Tt;re.parser=Tt.parse;re.Renderer=ls;re.TextRenderer=$a;re.Lexer=_t;re.lexer=_t.lex;re.Tokenizer=as;re.Hooks=nr;re.parse=re;re.options;re.setOptions;re.use;re.walkTokens;re.parseInline;Tt.parse;_t.lex;const Ut=t=>{console.info("[TOAST] INFO:",t)},xe=t=>{console.error("[TOAST] ERROR:",t)},Pp=t=>{console.warn("[TOAST] WARNING:",t)};Di.put("toastInfo",Ut);Di.put("toastError",xe);Di.put("toastWarning",Pp);const wi=(t,e)=>{const n=new Bt.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{n.watch(t)}});return n.watch(t),t.get(),()=>{n.unwatch(t)}};Object.defineProperty(Vn.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class Cr extends $h(Vn){constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(e=>Gh(e)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(e=>e()),this.signalCleanups.clear()}subscribe(e,n){const i=Se(e,n.bind(this));this.eventSubscriptions.add(i)}showInfo(e){Ut(e)}showError(e){xe(e)}nobubble(e){return n=>{n.stopPropagation(),e.bind(this)(n)}}command(e,n={}){return()=>{this.executeCommand(e,n)}}executeCommand(e,n){const i=Te.createExecutionContext(n);Te.execute(e,i)}watch(e,n){const i=wi(e,n.bind(this));this.signalCleanups.add(i)}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}class Xt extends Cr{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let n=this;for(;n&&n!==document.body&&n!==document.documentElement;){const i=n.getAttribute("id");if(i){e.unshift(`#${i}`);break}const r=n.tagName.toLowerCase(),s=n.parentElement;if(!s)break;const l=Array.from(s.children).filter(c=>c.tagName.toLowerCase()===r).indexOf(n);l>=0?e.unshift(`${r}:${l}`):e.unshift(r),n=s}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),n=this.getAttribute("id");if(n){this.settingsKey=`${e}:${n}`;return}const i=this.buildDOMTreePath();i&&(this.settingsKey=`${e}:${i}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await de.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await de.setDialogSetting(this.settingsKey,e)}}const Ga=class Ga extends Xt{dispose(){}getResult(){}renderMessage(e,n=!1){if(n){const i=re.parse(e,{async:!1});return f`<div class="dialog-message" style="white-space: normal;">${tn(i)}</div>`}return f`<div class="dialog-message" style="white-space: pre-line;">${e}</div>`}};Ga.styles=[qe`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let rn=Ga;const Yt=dn("DialogService"),Wn="dialogs",zs={id:"ok",label:"OK",variant:"primary"},Uc={id:"cancel",label:"Cancel",variant:"default"},Bc={id:"close",label:"Close",variant:"default"};let Ki=null;function Mp(){return Ki||(Ki=document.createElement("div"),Ki.id="global-dialog-container",document.body.appendChild(Ki)),Ki}class Np{constructor(){this.contributions=new Map,this.loadContributions(),Se(Nt,e=>{e.target===Wn&&this.loadContributions()})}loadContributions(){const e=z.getContributions(Wn);this.contributions.clear();for(const n of e){if(!n.id){Yt.warn("Dialog contribution missing id, skipping");continue}if(!n.component){Yt.warn(`Dialog contribution "${n.id}" has no component function, skipping`);continue}if(!n.onButton){Yt.warn(`Dialog contribution "${n.id}" has no onButton callback, skipping`);continue}this.contributions.set(n.id,n),Yt.debug(`Loaded dialog contribution: ${n.id}`)}Yt.info(`Loaded ${this.contributions.size} dialog contributions`)}async open(e,n){const i=this.contributions.get(e);if(!i)throw Yt.error(`Dialog "${e}" not found`),new Error(`Dialog "${e}" not found`);return new Promise(r=>{const s=Mp();let o=!0,l=null;const c=async()=>{if(o){if(o=!1,l)try{await l.dispose()}catch(b){const w=b instanceof Error?b.message:String(b);Yt.error(`Error disposing dialog content for "${e}": ${w}`)}try{const b=l?l.getResult():void 0;await i.onButton("close",b,p)}catch(b){const w=b instanceof Error?b.message:String(b);Yt.error(`Error executing close callback for dialog "${e}": ${w}`)}Et(f``,s),r()}},h=async b=>{try{const w=l?l.getResult():void 0;await i.onButton(b,w,p)!==!1&&c()}catch(w){const k=w instanceof Error?w.message:String(w);Yt.error(`Error executing button callback for dialog "${e}": ${k}`),c()}},u=i.buttons&&i.buttons.length>0?i.buttons:[zs];n&&typeof n=="object"&&(n.close=c);const p={...n,close:c},g=f`
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
            `;Et(g,s),(async()=>{const b=Array.from(s.querySelectorAll("*"));for(const w of b)if(w instanceof rn){await w.updateComplete,l=w;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(e){return this.contributions.has(e)}}const Ps=new Np;Xe.put("dialogService",Ps);var Fp=Object.defineProperty,Up=Object.getOwnPropertyDescriptor,Sr=(t,e,n,i)=>{for(var r=i>1?void 0:i?Up(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Fp(e,n,r),r};let jn=class extends rn{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(t){super.firstUpdated(t),this.inputValue=this.defaultValue,await this.updateComplete;const e=this.shadowRoot?.querySelector("wa-input");if(e){const n=e.shadowRoot?.querySelector("input");n&&(n.focus(),n.select())}}getResult(){return this.inputValue}handleInput(t){this.inputValue=t.target.value}handleKeyDown(t){t.key==="Enter"?(t.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):t.key==="Escape"&&(t.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return f`
            ${this.renderMessage(this.message,this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `}};jn.styles=[...rn.styles,qe`
            wa-input {
                width: 100%;
            }
        `];Sr([d({type:String})],jn.prototype,"message",2);Sr([d({type:String,attribute:"default-value"})],jn.prototype,"defaultValue",2);Sr([d({type:Boolean})],jn.prototype,"markdown",2);Sr([A()],jn.prototype,"inputValue",2);jn=Sr([S("k-prompt-dialog-content")],jn);z.registerContribution(Wn,{id:"prompt",label:"Input",buttons:[zs,Uc],component:t=>t?f`
            <k-prompt-dialog-content 
                .message="${t.message}"
                .defaultValue="${t.defaultValue}"
                .markdown="${t.markdown}"
            ></k-prompt-dialog-content>
        `:f`<div>Error: No prompt dialog state</div>`,onButton:async(t,e,n)=>(n&&(t==="ok"?n.resolve(e||""):n.resolve(null)),!0)});async function Vc(t,e="",n=!1){return new Promise(i=>{Ps.open("prompt",{message:t,defaultValue:e,markdown:n,resolve:i})})}var Bp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,Aa=(t,e,n,i)=>{for(var r=i>1?void 0:i?Vp(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Bp(e,n,r),r};let cs=class extends rn{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return f`
            ${this.renderMessage(this.message,this.markdown)}
        `}};Aa([d({type:String})],cs.prototype,"message",2);Aa([d({type:Boolean})],cs.prototype,"markdown",2);cs=Aa([S("k-info-dialog-content")],cs);z.registerContribution(Wn,{id:"info",label:"Information",buttons:[zs],component:t=>t?f`
            <k-info-dialog-content 
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></k-info-dialog-content>
        `:f`<div>Error: No info dialog state</div>`,onButton:async(t,e,n)=>(n&&n.resolve&&n.resolve(),!0)});var qp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,_a=(t,e,n,i)=>{for(var r=i>1?void 0:i?Hp(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&qp(e,n,r),r};let ds=class extends rn{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return f`
            ${this.renderMessage(this.message,this.markdown)}
        `}};_a([d({type:String})],ds.prototype,"message",2);_a([d({type:Boolean})],ds.prototype,"markdown",2);ds=_a([S("k-confirm-dialog-content")],ds);z.registerContribution(Wn,{id:"confirm",label:"Confirm",buttons:[zs,Uc],component:t=>t?f`
            <k-confirm-dialog-content 
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></k-confirm-dialog-content>
        `:f`<div>Error: No confirm dialog state</div>`,onButton:async(t,e,n)=>(n&&(t==="ok"?n.resolve(!0):n.resolve(!1)),!0)});async function Ms(t,e=!1){return new Promise(n=>{Ps.open("confirm",{message:t,markdown:e,resolve:n})})}var Wp=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,ei=(t,e,n,i)=>{for(var r=i>1?void 0:i?jp(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Wp(e,n,r),r};let sn=class extends rn{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(t){super.firstUpdated(t),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const e=this.closest("wa-dialog");e&&(this.dialogElement=e,this.updateDialogLabel());const n=this.closest(".dialog-service-content");if(n){const i=n.parentElement?.querySelector(".dialog-service-footer");i&&(i.style.display="none")}}updated(t){super.updated(t),t.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),t.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(t,e,n){this.currentTitle=t,this.currentMessage=e,this.actions=[...n],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(t){t.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const t=this.actions.filter(n=>n.label!=="Close"),e=this.actions.filter(n=>n.label==="Close");return f`
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
        `}};sn.styles=[...rn.styles,qe`
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
        `];ei([d({type:String})],sn.prototype,"title",2);ei([d({type:String})],sn.prototype,"message",2);ei([d({type:Boolean})],sn.prototype,"markdown",2);ei([A()],sn.prototype,"actions",2);ei([A()],sn.prototype,"currentTitle",2);ei([A()],sn.prototype,"currentMessage",2);sn=ei([S("k-navigable-info-dialog-content")],sn);z.registerContribution(Wn,{id:"navigable-info",label:"Information",buttons:[Bc],component:t=>{if(!t)return f`<div>Error: No navigable info dialog state</div>`;const e=f`
            <k-navigable-info-dialog-content 
                .title="${t.title}"
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></k-navigable-info-dialog-content>
        `;return(async()=>{const n=document.querySelector("k-navigable-info-dialog-content");n&&(await n.updateComplete,n.actions=t.actions||[],n.resolveCallback=t.resolve,t.updateDialogRef&&(t.updateDialogRef.current=(i,r,s)=>{n.updateDialog(i,r,s)}))})(),e},onButton:async(t,e,n)=>n&&t==="close"&&n.resolve?(n.resolve(),!0):!1});const Vo=new Set,hi=new Map;let Pn,Ta="ltr",Ra="en";const qc=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(qc){const t=new MutationObserver(Wc);Ta=document.documentElement.dir||"ltr",Ra=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Hc(...t){t.map(e=>{const n=e.$code.toLowerCase();hi.has(n)?hi.set(n,Object.assign(Object.assign({},hi.get(n)),e)):hi.set(n,e),Pn||(Pn=e)}),Wc()}function Wc(){qc&&(Ta=document.documentElement.dir||"ltr",Ra=document.documentElement.lang||navigator.language),[...Vo.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Gp=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Vo.add(this.host)}hostDisconnected(){Vo.delete(this.host)}dir(){return`${this.host.dir||Ta}`.toLowerCase()}lang(){return`${this.host.lang||Ra}`.toLowerCase()}getTranslationData(e){var n,i;const r=new Intl.Locale(e.replace(/_/g,"-")),s=r?.language.toLowerCase(),o=(i=(n=r?.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&i!==void 0?i:"",l=hi.get(`${s}-${o}`),c=hi.get(s);return{locale:r,language:s,region:o,primary:l,secondary:c}}exists(e,n){var i;const{primary:r,secondary:s}=this.getTranslationData((i=n.lang)!==null&&i!==void 0?i:this.lang());return n=Object.assign({includeFallback:!1},n),!!(r&&r[e]||s&&s[e]||n.includeFallback&&Pn&&Pn[e])}term(e,...n){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(r&&r[e])s=r[e];else if(Pn&&Pn[e])s=Pn[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...n):s}date(e,n){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),n).format(e)}number(e,n){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),n).format(e)}relativeTime(e,n,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,n)}};var jc={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};Hc(jc);var Xp=jc;var ie=class extends Gp{};Hc(Xp);var La=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var qo="",Ho="";function Sl(t){qo=t}function Kp(t=""){if(!qo){const e=document.querySelector("[data-webawesome]");if(e?.hasAttribute("data-webawesome")){const n=new URL(e.getAttribute("data-webawesome")??"",window.location.href).pathname;Sl(n)}else{const i=[...document.getElementsByTagName("script")].find(r=>r.src.endsWith("webawesome.js")||r.src.endsWith("webawesome.loader.js")||r.src.endsWith("webawesome.ssr-loader.js"));if(i){const r=String(i.getAttribute("src"));Sl(r.split("/").slice(0,-1).join("/"))}}}return qo.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}function Yp(t){Ho=t}function Zp(){if(!Ho){const t=document.querySelector("[data-fa-kit-code]");t&&Yp(t.getAttribute("data-fa-kit-code")||"")}return Ho}var Zt="7.0.1";function Qp(t,e,n){const i=Zp(),r=i.length>0;let s="solid";return e==="notdog"?(n==="solid"&&(s="solid"),n==="duo-solid"&&(s="duo-solid"),`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/notdog-${s}/${t}.svg?token=${encodeURIComponent(i)}`):e==="chisel"?`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/chisel-regular/${t}.svg?token=${encodeURIComponent(i)}`:e==="etch"?`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/etch-solid/${t}.svg?token=${encodeURIComponent(i)}`:e==="jelly"?(n==="regular"&&(s="regular"),n==="duo-regular"&&(s="duo-regular"),n==="fill-regular"&&(s="fill-regular"),`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/jelly-${s}/${t}.svg?token=${encodeURIComponent(i)}`):e==="slab"?((n==="solid"||n==="regular")&&(s="regular"),n==="press-regular"&&(s="press-regular"),`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/slab-${s}/${t}.svg?token=${encodeURIComponent(i)}`):e==="thumbprint"?`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/thumbprint-light/${t}.svg?token=${encodeURIComponent(i)}`:e==="whiteboard"?`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/whiteboard-semibold/${t}.svg?token=${encodeURIComponent(i)}`:(e==="classic"&&(n==="thin"&&(s="thin"),n==="light"&&(s="light"),n==="regular"&&(s="regular"),n==="solid"&&(s="solid")),e==="sharp"&&(n==="thin"&&(s="sharp-thin"),n==="light"&&(s="sharp-light"),n==="regular"&&(s="sharp-regular"),n==="solid"&&(s="sharp-solid")),e==="duotone"&&(n==="thin"&&(s="duotone-thin"),n==="light"&&(s="duotone-light"),n==="regular"&&(s="duotone-regular"),n==="solid"&&(s="duotone")),e==="sharp-duotone"&&(n==="thin"&&(s="sharp-duotone-thin"),n==="light"&&(s="sharp-duotone-light"),n==="regular"&&(s="sharp-duotone-regular"),n==="solid"&&(s="sharp-duotone-solid")),e==="brands"&&(s="brands"),r?`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/${s}/${t}.svg?token=${encodeURIComponent(i)}`:`https://ka-f.fontawesome.com/releases/v${Zt}/svgs/${s}/${t}.svg`)}var Jp={name:"default",resolver:(t,e="classic",n="solid")=>Qp(t,e,n),mutator:(t,e)=>{if(e?.family&&!t.hasAttribute("data-duotone-initialized")){const{family:n,variant:i}=e;if(n==="duotone"||n==="sharp-duotone"||n==="notdog"&&i==="duo-solid"||n==="jelly"&&i==="duo-regular"||n==="thumbprint"){const r=[...t.querySelectorAll("path")],s=r.find(l=>!l.hasAttribute("opacity")),o=r.find(l=>l.hasAttribute("opacity"));if(!s||!o)return;if(s.setAttribute("data-duotone-primary",""),o.setAttribute("data-duotone-secondary",""),e.swapOpacity&&s&&o){const l=o.getAttribute("opacity")||"0.4";s.style.setProperty("--path-opacity",l),o.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},ef=Jp;function tf(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var uo={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},nf={name:"system",resolver:(t,e="classic",n="solid")=>{let r=uo[n][t]??uo.regular[t]??uo.regular["circle-question"];return r?tf(r):""}},rf=nf;var sf="classic",hs=[ef,rf],us=[];function of(t){us.push(t)}function af(t){us=us.filter(e=>e!==t)}function po(t){return hs.find(e=>e.name===t)}function lf(t,e){cf(t),hs.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),us.forEach(n=>{n.library===t&&n.setIcon()})}function cf(t){hs=hs.filter(e=>e.name!==t)}function df(){return sf}function L(t,e){const n={waitUntilFirstUpdate:!1,...e};return(i,r)=>{const{update:s}=i,o=Array.isArray(t)?t:[t];i.update=function(l){o.forEach(c=>{const h=c;if(l.has(h)){const u=l.get(h),p=this[h];u!==p&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,p)}}),s.call(this,l)}}}var hf=Object.defineProperty,uf=Object.getOwnPropertyDescriptor,Gc=t=>{throw TypeError(t)},a=(t,e,n,i)=>{for(var r=i>1?void 0:i?uf(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&hf(e,n,r),r},Xc=(t,e,n)=>e.has(t)||Gc("Cannot "+n),pf=(t,e,n)=>(Xc(t,e,"read from private field"),e.get(t)),ff=(t,e,n)=>e.has(t)?Gc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),mf=(t,e,n,i)=>(Xc(t,e,"write to private field"),e.set(t,n),n);var gf=`:host {
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
`,Qr,N=class extends Vn{constructor(){super(),ff(this,Qr,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,n)=>{if(this.internals?.states)try{n?this.internals.states.add(e):this.internals.states.delete(e)}catch(i){if(String(i).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw i}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,n]of t.elementProperties)n.default==="inherit"&&n.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${n.initial}`,!0)}static get styles(){const t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[gf,...t].map(e=>typeof e=="string"?kc(e):e)}attributeChangedCallback(t,e,n){pf(this,Qr)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),mf(this,Qr,!0)),super.attributeChangedCallback(t,e,n)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,n)=>{t.has(n)&&this[n]==null&&(this[n]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){const n=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});n.error=e,this.dispatchEvent(n)}throw e}}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};Qr=new WeakMap;a([d()],N.prototype,"dir",2);a([d()],N.prototype,"lang",2);a([d({type:Boolean,reflect:!0,attribute:"did-ssr"})],N.prototype,"didSSR",2);var pi=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},bf=`:host {
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
`,Yi=Symbol(),Nr=Symbol(),fo,mo=new Map,it=class extends N{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.resolveIcon=async(t,e)=>{let n;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=f`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(i,this),this.svg}try{if(n=await fetch(t,{mode:"cors"}),!n.ok)return n.status===410?Yi:Nr}catch{return Nr}try{const i=document.createElement("div");i.innerHTML=await n.text();const r=i.firstElementChild;if(r?.tagName?.toLowerCase()!=="svg")return Yi;fo||(fo=new DOMParser);const o=fo.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):Yi}catch{return Yi}}}connectedCallback(){super.connectedCallback(),of(this)}firstUpdated(t){super.firstUpdated(t),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),af(this)}getIconSource(){const t=po(this.library),e=this.family||df();return this.name&&t?{url:t.resolver(this.name,e,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:e}=this.getIconSource(),n=e?po(this.library):void 0;if(!t){this.svg=null;return}let i=mo.get(t);i||(i=this.resolveIcon(t,n),mo.set(t,i));const r=await i;if(r===Nr&&mo.delete(t),t===this.getIconSource().url){if(Fh(r)){this.svg=r;return}switch(r){case Nr:case Yi:this.svg=null,this.dispatchEvent(new pi);break;default:this.svg=r.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new La)}}}updated(t){super.updated(t);const e=po(this.library),n=this.shadowRoot?.querySelector("svg");n&&e?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:f`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};it.css=bf;a([A()],it.prototype,"svg",2);a([d({reflect:!0})],it.prototype,"name",2);a([d({reflect:!0})],it.prototype,"family",2);a([d({reflect:!0})],it.prototype,"variant",2);a([d({attribute:"auto-width",type:Boolean,reflect:!0})],it.prototype,"autoWidth",2);a([d({attribute:"swap-opacity",type:Boolean,reflect:!0})],it.prototype,"swapOpacity",2);a([d()],it.prototype,"src",2);a([d()],it.prototype,"label",2);a([d({reflect:!0})],it.prototype,"library",2);a([L("label")],it.prototype,"handleLabelChange",1);a([L(["family","name","library","variant","src","autoWidth","swapOpacity"])],it.prototype,"setIcon",1);it=a([S("wa-icon")],it);var wf=`:host {
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
`,Ot=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.play=!this.play)}handleLoad(){const t=document.createElement("canvas"),{width:e,height:n}=this.animatedImage;t.width=e,t.height=n,t.getContext("2d").drawImage(this.animatedImage,0,0,e,n),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new La),this.isLoaded=!0)}handleError(){this.dispatchEvent(new pi)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){const e=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`;return f`
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
    `}};Ot.css=wf;a([$(".animated")],Ot.prototype,"animatedImage",2);a([A()],Ot.prototype,"frozenFrame",2);a([A()],Ot.prototype,"isLoaded",2);a([d()],Ot.prototype,"src",2);a([d()],Ot.prototype,"alt",2);a([d({type:Boolean,reflect:!0})],Ot.prototype,"play",2);a([L("play",{waitUntilFirstUpdate:!0})],Ot.prototype,"handlePlayChange",1);a([L("src")],Ot.prototype,"handleSrcChange",1);Ot=a([S("wa-animated-image")],Ot);const vf=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],yf=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],xf=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],kf=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Ef=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Cf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Sf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],$f=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Af=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],_f=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Tf=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Rf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Lf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Of=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],If=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Df=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],zf=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Pf=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Mf=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Nf=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Ff=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Uf=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Bf=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Vf=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],qf=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Hf=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Wf=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],jf=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Gf=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Xf=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Kf=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Yf=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Zf=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qf=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Jf=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],em=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],tm=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],nm=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],im=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rm=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sm=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],om=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],am=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],lm=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],cm=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],dm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],hm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],um=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],pm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],fm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],mm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],gm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],bm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],wm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],vm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],ym=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],xm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],km=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Em=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Cm=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Sm=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],$m=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Am=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],_m=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Tm=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Rm=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Lm=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Om=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Im=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Dm=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],zm=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Pm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Mm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Nm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Fm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Um=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Bm=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Vm=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],qm=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Hm=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Wm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],jm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Gm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Xm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Km=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Ym=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Zm=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Jm=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],eg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],tg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ng=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ig=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],rg=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],sg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],og=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],ag=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],lg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Kc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},cg=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Of,backInLeft:If,backInRight:Df,backInUp:zf,backOutDown:Pf,backOutLeft:Mf,backOutRight:Nf,backOutUp:Ff,bounce:vf,bounceIn:Uf,bounceInDown:Bf,bounceInLeft:Vf,bounceInRight:qf,bounceInUp:Hf,bounceOut:Wf,bounceOutDown:jf,bounceOutLeft:Gf,bounceOutRight:Xf,bounceOutUp:Kf,easings:Kc,fadeIn:Yf,fadeInBottomLeft:Zf,fadeInBottomRight:Qf,fadeInDown:Jf,fadeInDownBig:em,fadeInLeft:tm,fadeInLeftBig:nm,fadeInRight:im,fadeInRightBig:rm,fadeInTopLeft:sm,fadeInTopRight:om,fadeInUp:am,fadeInUpBig:lm,fadeOut:cm,fadeOutBottomLeft:dm,fadeOutBottomRight:hm,fadeOutDown:um,fadeOutDownBig:pm,fadeOutLeft:fm,fadeOutLeftBig:mm,fadeOutRight:gm,fadeOutRightBig:bm,fadeOutTopLeft:wm,fadeOutTopRight:vm,fadeOutUp:ym,fadeOutUpBig:xm,flash:yf,flip:km,flipInX:Em,flipInY:Cm,flipOutX:Sm,flipOutY:$m,headShake:xf,heartBeat:kf,hinge:Km,jackInTheBox:Ym,jello:Ef,lightSpeedInLeft:Am,lightSpeedInRight:_m,lightSpeedOutLeft:Tm,lightSpeedOutRight:Rm,pulse:Cf,rollIn:Zm,rollOut:Qm,rotateIn:Lm,rotateInDownLeft:Om,rotateInDownRight:Im,rotateInUpLeft:Dm,rotateInUpRight:zm,rotateOut:Pm,rotateOutDownLeft:Mm,rotateOutDownRight:Nm,rotateOutUpLeft:Fm,rotateOutUpRight:Um,rubberBand:Sf,shake:$f,shakeX:Af,shakeY:_f,slideInDown:Bm,slideInLeft:Vm,slideInRight:qm,slideInUp:Hm,slideOutDown:Wm,slideOutLeft:jm,slideOutRight:Gm,slideOutUp:Xm,swing:Tf,tada:Rf,wobble:Lf,zoomIn:Jm,zoomInDown:eg,zoomInLeft:tg,zoomInRight:ng,zoomInUp:ig,zoomOut:rg,zoomOutDown:sg,zoomOutLeft:og,zoomOutRight:ag,zoomOutUp:lg},Symbol.toStringTag,{value:"Module"}));var dg=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}},hg=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}},$l=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}},ug=`:host {
  display: contents;
}
`,Re=class extends N{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new hg)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new dg)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const t=Kc[this.easing]??this.easing,e=this.keyframes??cg[this.name],i=(await this.defaultSlot).assignedElements()[0];return!i||!e?!1:(this.destroyAnimation(),this.animation=i.animate(e,{delay:this.delay,direction:this.direction,duration:this.duration,easing:t,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new $l)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new $l)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return f` <slot @slotchange=${this.handleSlotChange}></slot> `}};Re.css=ug;a([Qu("slot")],Re.prototype,"defaultSlot",2);a([d()],Re.prototype,"name",2);a([d({type:Boolean,reflect:!0})],Re.prototype,"play",2);a([d({type:Number})],Re.prototype,"delay",2);a([d()],Re.prototype,"direction",2);a([d({type:Number})],Re.prototype,"duration",2);a([d()],Re.prototype,"easing",2);a([d({attribute:"end-delay",type:Number})],Re.prototype,"endDelay",2);a([d()],Re.prototype,"fill",2);a([d({type:Number})],Re.prototype,"iterations",2);a([d({attribute:"iteration-start",type:Number})],Re.prototype,"iterationStart",2);a([d({attribute:!1})],Re.prototype,"keyframes",2);a([d({attribute:"playback-rate",type:Number})],Re.prototype,"playbackRate",2);a([L(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Re.prototype,"handleAnimationChange",1);a([L("play")],Re.prototype,"handlePlayChange",1);a([L("playbackRate")],Re.prototype,"handlePlaybackRateChange",1);Re=a([S("wa-animation")],Re);var pg=`:host {
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
`,qt=class extends N{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new pi)}render(){const t=f`
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
      `,f` ${this.image&&!this.hasError?t:e} `}};qt.css=pg;a([A()],qt.prototype,"hasError",2);a([d()],qt.prototype,"image",2);a([d()],qt.prototype,"label",2);a([d()],qt.prototype,"initials",2);a([d()],qt.prototype,"loading",2);a([d({reflect:!0})],qt.prototype,"shape",2);a([L("image")],qt.prototype,"handleImageChange",1);qt=a([S("wa-avatar")],qt);var $r=`@layer wa-utilities {
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
`;var fg=`:host {
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
`,Gn=class extends N{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return f` <slot part="base" role="status"></slot>`}};Gn.css=[$r,fg];a([d({reflect:!0})],Gn.prototype,"variant",2);a([d({reflect:!0})],Gn.prototype,"appearance",2);a([d({type:Boolean,reflect:!0})],Gn.prototype,"pill",2);a([d({reflect:!0})],Gn.prototype,"attention",2);Gn=a([S("wa-badge")],Gn);var mg=`.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
`,vi=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(n=>n.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="wa-breadcrumb-item");t.forEach((e,n)=>{const i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),n===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),f`
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
    `}};vi.css=mg;a([$("slot")],vi.prototype,"defaultSlot",2);a([$('slot[name="separator"]')],vi.prototype,"separatorSlot",2);a([d()],vi.prototype,"label",2);vi=a([S("wa-breadcrumb")],vi);var Ns=()=>({checkValidity(t){const e=t.input,n={message:"",isValid:!0,invalidKeys:[]};if(!e)return n;let i=!0;if("checkValidity"in e&&(i=e.checkValidity()),i)return n;if(n.isValid=!1,"validationMessage"in e&&(n.message=e.validationMessage),!("validity"in e))return n.invalidKeys.push("customError"),n;for(const r in e.validity){if(r==="valid")continue;const s=r;e.validity[s]&&n.invalidKeys.push(s)}return n}});var Oa=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},gg=()=>({observedAttributes:["custom-error"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),ge=class extends N{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Oa))},this.handleInteraction=t=>{const e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[gg()]}static get observedAttributes(){const t=new Set(super.observedAttributes||[]);for(const e of this.validators)if(e.observedAttributes)for(const n of e.observedAttributes)t.add(n);return[...t]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")){const e=this.value;if(Array.isArray(e)){if(this.name){const n=new FormData;for(const i of e)n.append(this.name,i);this.setValue(n,n)}}else this.setValue(e,e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){const e=t[0],n=t[1];let i=t[2];i||(i=this.validationTarget),this.internals.setValidity(e,n,i||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const t=!!this.required,e=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&n),this.customStates.set("user-valid",e&&n)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...t){const[e,n]=t;this.internals.setFormValue(e,n)}get allValidators(){const t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const t=this.allValidators;if(!t?.length)return;const e={customError:!!this.customError},n=this.validationTarget||this.input||void 0;let i="";for(const r of t){const{isValid:s,message:o,invalidKeys:l}=r.checkValidity(this);s||(i||(i=o),l?.length>=0&&l.forEach(c=>e[c]=!0))}i||(i=this.validationMessage),this.setValidity(e,i,n)}};ge.formAssociated=!0;a([d({reflect:!0})],ge.prototype,"name",2);a([d({type:Boolean})],ge.prototype,"disabled",2);a([d({state:!0,attribute:!1})],ge.prototype,"valueHasChanged",2);a([d({state:!0,attribute:!1})],ge.prototype,"hasInteracted",2);a([d({attribute:"custom-error",reflect:!0})],ge.prototype,"customError",2);a([d({attribute:!1,state:!0,type:Object})],ge.prototype,"validity",1);var vt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=n=>{const i=n.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var Je=`@layer wa-utilities {
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
`;const j=Li(class extends Oi{constructor(t){if(super(t),t.type!==At.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const n=t.element.classList;for(const i of this.st)i in e||(n.remove(i),this.st.delete(i));for(const i in e){const r=!!e[i];r===this.st.has(i)||this.nt?.has(i)||(r?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return tt}});const U=t=>t??F;const Yc=Symbol.for(""),bg=t=>{if(t?.r===Yc)return t?._$litStatic$},Al=(t,...e)=>({_$litStatic$:e.reduce(((n,i,r)=>n+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1]),t[0]),r:Yc}),_l=new Map,wg=t=>(e,...n)=>{const i=n.length;let r,s;const o=[],l=[];let c,h=0,u=!1;for(;h<i;){for(c=e[h];h<i&&(s=n[h],(r=bg(s))!==void 0);)c+=r+e[++h],u=!0;h!==i&&l.push(s),o.push(c),h++}if(h===i&&o.push(e[i]),u){const p=o.join("$$lit$$");(e=_l.get(p))===void 0&&(o.raw=o,_l.set(p,e=o)),n=l}return t(e,...n)},go=wg(f);var vg=`@layer wa-component {
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
`,ae=class extends ge{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new vt(this,"[default]","start","end"),this.localize=new ie(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static get validators(){return[...super.validators,Ns()]}constructLightDOMButton(){const t=document.createElement("button");return t.type=this.type,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",this.name&&(t.name=this.name),t.value=this.value||"",["form","formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{this.hasAttribute(e)&&t.setAttribute(e,this.getAttribute(e))}),t}handleClick(){if(!this.getForm())return;const e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new Oa)}handleLabelSlotChange(){const t=this.labelSlot.assignedNodes({flatten:!0});let e=!1,n=!1,i=!1,r=!1;[...t].forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){const o=s;o.localName==="wa-icon"?(n=!0,e||(e=o.label!==void 0)):r=!0}else s.nodeType===Node.TEXT_NODE&&(s.textContent?.trim()||"").length>0&&(i=!0)}),this.isIconButton=n&&!i&&!r,this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=this.isLink(),e=t?Al`a`:Al`button`;return go`
      <${e}
        part="base"
        class=${j({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${U(t?void 0:this.disabled)}
        type=${U(t?void 0:this.type)}
        title=${this.title}
        name=${U(t?void 0:this.name)}
        value=${U(t?void 0:this.value)}
        href=${U(t?this.href:void 0)}
        target=${U(t?this.target:void 0)}
        download=${U(t?this.download:void 0)}
        rel=${U(t&&this.rel?this.rel:void 0)}
        role=${U(t?void 0:"button")}
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
    `}};ae.shadowRootOptions={...ge.shadowRootOptions,delegatesFocus:!0};ae.css=[vg,$r,Je];a([$(".button")],ae.prototype,"button",2);a([$("slot:not([name])")],ae.prototype,"labelSlot",2);a([A()],ae.prototype,"invalid",2);a([A()],ae.prototype,"isIconButton",2);a([d()],ae.prototype,"title",2);a([d({reflect:!0})],ae.prototype,"variant",2);a([d({reflect:!0})],ae.prototype,"appearance",2);a([d({reflect:!0})],ae.prototype,"size",2);a([d({attribute:"with-caret",type:Boolean,reflect:!0})],ae.prototype,"withCaret",2);a([d({type:Boolean})],ae.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],ae.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],ae.prototype,"pill",2);a([d()],ae.prototype,"type",2);a([d({reflect:!0})],ae.prototype,"name",2);a([d({reflect:!0})],ae.prototype,"value",2);a([d({reflect:!0})],ae.prototype,"href",2);a([d()],ae.prototype,"target",2);a([d()],ae.prototype,"rel",2);a([d()],ae.prototype,"download",2);a([d({reflect:!0})],ae.prototype,"form",2);a([d({attribute:"formaction"})],ae.prototype,"formAction",2);a([d({attribute:"formenctype"})],ae.prototype,"formEnctype",2);a([d({attribute:"formmethod"})],ae.prototype,"formMethod",2);a([d({attribute:"formnovalidate",type:Boolean})],ae.prototype,"formNoValidate",2);a([d({attribute:"formtarget"})],ae.prototype,"formTarget",2);a([L("disabled",{waitUntilFirstUpdate:!0})],ae.prototype,"handleDisabledChange",1);ae=a([S("wa-button")],ae);var yg=`:host {
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
`,Wo=class extends N{constructor(){super(...arguments),this.localize=new ie(this)}render(){return f`
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
    `}};Wo.css=yg;Wo=a([S("wa-spinner")],Wo);var xg=`:host {
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
`,on=class extends N{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal",this.variant="neutral"}updated(t){super.updated(t),t.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(t){Zi(t.target)?.classList.add("button-focus")}handleBlur(t){Zi(t.target)?.classList.remove("button-focus")}handleMouseOver(t){Zi(t.target)?.classList.add("button-hover")}handleMouseOut(t){Zi(t.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,t.forEach(e=>{const n=t.indexOf(e),i=Zi(e);i&&(i.appearance==="outlined"&&(this.hasOutlined=!0),i.classList.add("wa-button-group__button"),i.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),i.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),i.classList.toggle("wa-button-group__button-first",n===0),i.classList.toggle("wa-button-group__button-inner",n>0&&n<t.length-1),i.classList.toggle("wa-button-group__button-last",n===t.length-1),i.classList.toggle("wa-button-group__button-radio",i.tagName.toLowerCase()==="wa-radio-button"))})}render(){return f`
      <slot
        part="base"
        class=${j({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};on.css=[$r,xg];a([$("slot")],on.prototype,"defaultSlot",2);a([A()],on.prototype,"disableRole",2);a([A()],on.prototype,"hasOutlined",2);a([d()],on.prototype,"label",2);a([d({reflect:!0})],on.prototype,"orientation",2);a([d({reflect:!0})],on.prototype,"variant",2);on=a([S("wa-button-group")],on);function Zi(t){const e="wa-button, wa-radio-button";return t.closest(e)??t.querySelector(e)}var kg=`:host {
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
`,yi=class extends N{constructor(){super(...arguments),this.variant="brand",this.size="medium"}render(){return f`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};yi.css=[kg,$r,Je];a([d({reflect:!0})],yi.prototype,"variant",2);a([d({reflect:!0})],yi.prototype,"appearance",2);a([d({reflect:!0})],yi.prototype,"size",2);yi=a([S("wa-callout")],yi);var Eg=`:host {
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
`,kn=class extends N{constructor(){super(...arguments),this.hasSlotController=new vt(this,"footer","header","media"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.orientation="vertical"}updated(){!this.withHeader&&this.hasSlotController.test("header")&&(this.withHeader=!0),!this.withMedia&&this.hasSlotController.test("media")&&(this.withMedia=!0),!this.withFooter&&this.hasSlotController.test("footer")&&(this.withFooter=!0)}render(){return this.orientation==="horizontal"?f`
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
    `}};kn.css=[Je,Eg];a([d({reflect:!0})],kn.prototype,"appearance",2);a([d({attribute:"with-header",type:Boolean,reflect:!0})],kn.prototype,"withHeader",2);a([d({attribute:"with-media",type:Boolean,reflect:!0})],kn.prototype,"withMedia",2);a([d({attribute:"with-footer",type:Boolean,reflect:!0})],kn.prototype,"withFooter",2);a([d({reflect:!0})],kn.prototype,"orientation",2);kn=a([S("wa-card")],kn);const Cg="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Sg=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=Cg[n[t]&63];return e};function Z(t,e,n){const i=r=>Object.is(r,-0)?0:r;return t<e?i(e):t>n?i(n):i(t)}function Fs(t=""){return`${t}${Sg()}`}function It(t,e){return new Promise(n=>{function i(r){r.target===t&&(t.removeEventListener(e,i),n())}t.addEventListener(e,i)})}async function ps(t,e,n){return t.animate(e,n).finished.catch(()=>{})}function fe(t,e){return new Promise(n=>{const i=new AbortController,{signal:r}=i;if(t.classList.contains(e))return;t.classList.remove(e),t.classList.add(e);let s=()=>{t.classList.remove(e),n(),i.abort()};t.addEventListener("animationend",s,{once:!0,signal:r}),t.addEventListener("animationcancel",s,{once:!0,signal:r})})}function fs(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t)||0:t.indexOf("s")>-1?(parseFloat(t)||0)*1e3:parseFloat(t)||0}function Tl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}var $g=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};function*Ag(t,e){if(t!==void 0){let n=0;for(const i of t)yield e(i,n++)}}function*_g(t,e,n=1){const i=e===void 0?0:t;e??=t;for(let r=i;n>0?r<e:e<r;r+=n)yield r}(()=>{const t=(i,r)=>{let s=0;return function(...o){window.clearTimeout(s),s=window.setTimeout(()=>{i.call(this,...o)},r)}},e=(i,r,s)=>{const o=i[r];i[r]=function(...l){o.call(this,...l),s.call(this,o,...l)}};if(!("onscrollend"in window)){const i=new Set,r=new WeakMap,s=l=>{i.add(l.pointerId)},o=l=>{i.delete(l.pointerId)};document.addEventListener("pointerdown",s),document.addEventListener("pointerup",o),e(EventTarget.prototype,"addEventListener",function(l,c){if(c!=="scroll")return;const h=t(()=>{i.size?h():this.dispatchEvent(new Event("scrollend"))},100);l.call(this,"scroll",h,{passive:!0}),r.set(this,h)}),e(EventTarget.prototype,"removeEventListener",function(l,c){if(c!=="scroll")return;const h=r.get(this);h&&l.call(this,"scroll",h,{passive:!0})})}})();var Tg=class extends Event{constructor(t){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Rg=`:host {
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
`,me=class extends N{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new $g(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new ie(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,n=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:n,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||n!==r)&&(t.scrollTo({left:i,top:r,behavior:Tl()?"auto":"smooth"}),await It(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(n=>[...n.addedNodes,...n.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:n,loop:i}=this,r=i?t/n:(t-e)/n+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),n=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+n*n)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,n=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,r=t.key==="ArrowDown"||!n&&t.key==="ArrowRight"||n&&t.key==="ArrowLeft",s=t.key==="ArrowUp"||!n&&t.key==="ArrowLeft"||n&&t.key==="ArrowRight";t.preventDefault(),s&&this.previous(),r&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{const o=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');o&&o.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const l of e){const c=l.target;c.toggleAttribute("inert",!l.isIntersecting),c.classList.toggle("--in-view",l.isIntersecting),c.setAttribute("aria-hidden",l.isIntersecting?"false":"true")}const n=e.find(l=>l.isIntersecting);if(!n)return;const i=this.getSlides({excludeClones:!1}),r=this.getSlides().length,s=i.indexOf(n.target),o=this.loop?s-this.slidesPerPage:s;if(n&&(this.activeSlide=(Math.ceil(o/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&n.target.hasAttribute("data-clone"))){const l=Number(n.target.getAttribute("data-clone"));this.goToSlide(l,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,n=t.slice(-e),i=t.slice(0,e);n.reverse().forEach((r,s)=>{const o=r.cloneNode(!0);o.setAttribute("data-clone",String(t.length-s-1)),this.prepend(o)}),i.forEach((r,s)=>{const o=r.cloneNode(!0);o.setAttribute("data-clone",String(s)),this.append(o)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,n)=>{e.classList.toggle("--is-active",n===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new Tg({index:this.activeSlide,slide:t[this.activeSlide]}))}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((n,i)=>{(i+e)%e===0?n.style.removeProperty("scroll-snap-align"):n.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:n,loop:i}=this,r=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!r.length)return;const o=i?(t+r.length)%r.length:Z(t,0,r.length-n);this.activeSlide=o;const l=this.localize.dir()==="rtl",c=Z(t+(i?n:0)+(l?n-1:0),0,s.length-1),h=s[c];this.scrollToSlide(h,Tl()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const n=this.scrollContainer,i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),s=r.left-i.left,o=r.top-i.top;s||o?(this.pendingSlideChange=!0,n.scrollTo({left:s+n.scrollLeft,top:o+n.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this;let n=0,i=0,r=!1,s=!1;this.hasUpdated&&(n=this.getPageCount(),i=this.getCurrentPage(),r=this.canScrollPrev(),s=this.canScrollNext());const o=this.localize.dir()==="rtl";return f`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${j({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging})}"
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
                  class="${j({"navigation-button":!0,"navigation-button-previous":!0,"navigation-button-disabled":!r})}"
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
                  class=${j({"navigation-button":!0,"navigation-button-next":!0,"navigation-button-disabled":!s})}
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
                ${Ag(_g(n),l=>{const c=l===i;return f`
                    <button
                      part="pagination-item ${c?"pagination-item-active":""}"
                      class="${j({"pagination-item":!0,"pagination-item-active":c})}"
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
    `}};me.css=Rg;a([d({type:Boolean,reflect:!0})],me.prototype,"loop",2);a([d({type:Number,reflect:!0})],me.prototype,"slides",2);a([d({type:Number,reflect:!0})],me.prototype,"currentSlide",2);a([d({type:Boolean,reflect:!0})],me.prototype,"navigation",2);a([d({type:Boolean,reflect:!0})],me.prototype,"pagination",2);a([d({type:Boolean,reflect:!0})],me.prototype,"autoplay",2);a([d({type:Number,attribute:"autoplay-interval"})],me.prototype,"autoplayInterval",2);a([d({type:Number,attribute:"slides-per-page"})],me.prototype,"slidesPerPage",2);a([d({type:Number,attribute:"slides-per-move"})],me.prototype,"slidesPerMove",2);a([d()],me.prototype,"orientation",2);a([d({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],me.prototype,"mouseDragging",2);a([$(".slides")],me.prototype,"scrollContainer",2);a([$(".pagination")],me.prototype,"paginationContainer",2);a([A()],me.prototype,"activeSlide",2);a([A()],me.prototype,"scrolling",2);a([A()],me.prototype,"dragging",2);a([Os({passive:!0})],me.prototype,"handleScroll",1);a([L("loop",{waitUntilFirstUpdate:!0}),L("slidesPerPage",{waitUntilFirstUpdate:!0})],me.prototype,"initializeSlides",1);a([L("activeSlide")],me.prototype,"handleSlideChange",1);a([L("slidesPerMove")],me.prototype,"updateSlidesSnap",1);a([L("autoplay")],me.prototype,"handleAutoplayChange",1);me=a([S("wa-carousel")],me);var Us=(t={})=>{let{validationElement:e,validationProperty:n}=t;e||(e=Object.assign(document.createElement("input"),{required:!0})),n||(n="value");const i={observedAttributes:["required"],message:e.validationMessage,checkValidity(r){const s={message:"",isValid:!0,invalidKeys:[]};return(r.required??r.hasAttribute("required"))&&!r[n]&&(s.message=typeof i.message=="function"?i.message(r):i.message||"",s.isValid=!1,s.invalidKeys.push("valueMissing")),s}};return i};var hn=`:host {
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
`;const xi=Li(class extends Oi{constructor(t){if(super(t),t.type!==At.PROPERTY&&t.type!==At.ATTRIBUTE&&t.type!==At.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!wc(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===tt||e===F)return e;const n=t.element,i=t.name;if(t.type===At.PROPERTY){if(e===n[i])return tt}else if(t.type===At.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(i))return tt}else if(t.type===At.ATTRIBUTE&&n.getAttribute(i)===e+"")return tt;return vc(t),e}});var Lg=`:host {
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
`,Le=class extends ge{constructor(){super(...arguments),this.hasSlotController=new vt(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint=""}static get validators(){const t=[Us({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...t]}get value(){const t=this._value||"on";return this.checked?t:null}set value(t){this._value=t}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(t){super.willUpdate(t),t.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(t.has("value")||t.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){const t=this.hasSlotController.test("hint"),e=this.hint?!0:!!t,n=!this.checked&&this.indeterminate,i=n?"indeterminate":"check",r=n?"indeterminate":"check";return f`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${U(this._value)}
            .indeterminate=${xi(this.indeterminate)}
            .checked=${xi(this.checked)}
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
        class="${j({"has-slotted":e})}"
      >
        ${this.hint}
      </slot>
    `}};Le.css=[hn,Je,Lg];Le.shadowRootOptions={...ge.shadowRootOptions,delegatesFocus:!0};a([$('input[type="checkbox"]')],Le.prototype,"input",2);a([d()],Le.prototype,"title",2);a([d({reflect:!0})],Le.prototype,"name",2);a([d({reflect:!0})],Le.prototype,"value",1);a([d({reflect:!0})],Le.prototype,"size",2);a([d({type:Boolean})],Le.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],Le.prototype,"indeterminate",2);a([d({type:Boolean,attribute:!1})],Le.prototype,"checked",2);a([d({type:Boolean,reflect:!0,attribute:"checked"})],Le.prototype,"defaultChecked",2);a([d({reflect:!0})],Le.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Le.prototype,"required",2);a([d()],Le.prototype,"hint",2);a([L("defaultChecked")],Le.prototype,"handleDefaultCheckedChange",1);a([L(["checked","indeterminate"])],Le.prototype,"handleStateChange",1);a([L("disabled")],Le.prototype,"handleDisabledChange",1);Le=a([S("wa-checkbox")],Le);function cr(t,e){function n(r){const s=t.getBoundingClientRect(),o=t.ownerDocument.defaultView,l=s.left+o.pageXOffset,c=s.top+o.pageYOffset,h=r.pageX-l,u=r.pageY-c;e?.onMove&&e.onMove(h,u)}function i(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&n(e.initialEvent)}var Qt=typeof window<"u"&&"ontouchstart"in window,Fr=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=n=>{const i=Qt&&"touches"in n?n.touches[0].clientX:n.clientX,r=Qt&&"touches"in n?n.touches[0].clientY:n.clientY;this.isDragging||!Qt&&n.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),this.options.start(i,r))},this.handleDragStop=n=>{const i=Qt&&"touches"in n?n.touches[0].clientX:n.clientX,r=Qt&&"touches"in n?n.touches[0].clientY:n.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.options.stop(i,r)},this.handleDragMove=n=>{const i=Qt&&"touches"in n?n.touches[0].clientX:n.clientX,r=Qt&&"touches"in n?n.touches[0].clientY:n.clientY;window.getSelection()?.removeAllRanges(),this.options.move(i,r)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),Qt&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.element.removeEventListener("pointerdown",this.handleDragStart),Qt&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(t!==void 0?t:!this.isActive)?this.start():this.stop()}};var Zc=`@layer wa-utilities {
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
`;function Fe(t,e){Og(t)&&(t="100%");const n=Ig(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Ur(t){return Math.min(1,Math.max(0,t))}function Og(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Ig(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Qc(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Br(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Un(t){return t.length===1?"0"+t:String(t)}function Dg(t,e,n){return{r:Fe(t,255)*255,g:Fe(e,255)*255,b:Fe(n,255)*255}}function Rl(t,e,n){t=Fe(t,255),e=Fe(e,255),n=Fe(n,255);const i=Math.max(t,e,n),r=Math.min(t,e,n);let s=0,o=0;const l=(i+r)/2;if(i===r)o=0,s=0;else{const c=i-r;switch(o=l>.5?c/(2-i-r):c/(i+r),i){case t:s=(e-n)/c+(e<n?6:0);break;case e:s=(n-t)/c+2;break;case n:s=(t-e)/c+4;break}s/=6}return{h:s,s:o,l}}function bo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function zg(t,e,n){let i,r,s;if(t=Fe(t,360),e=Fe(e,100),n=Fe(n,100),e===0)r=n,s=n,i=n;else{const o=n<.5?n*(1+e):n+e-n*e,l=2*n-o;i=bo(l,o,t+1/3),r=bo(l,o,t),s=bo(l,o,t-1/3)}return{r:i*255,g:r*255,b:s*255}}function Ll(t,e,n){t=Fe(t,255),e=Fe(e,255),n=Fe(n,255);const i=Math.max(t,e,n),r=Math.min(t,e,n);let s=0;const o=i,l=i-r,c=i===0?0:l/i;if(i===r)s=0;else{switch(i){case t:s=(e-n)/l+(e<n?6:0);break;case e:s=(n-t)/l+2;break;case n:s=(t-e)/l+4;break}s/=6}return{h:s,s:c,v:o}}function Pg(t,e,n){t=Fe(t,360)*6,e=Fe(e,100),n=Fe(n,100);const i=Math.floor(t),r=t-i,s=n*(1-e),o=n*(1-r*e),l=n*(1-(1-r)*e),c=i%6,h=[n,o,s,s,l,n][c],u=[l,n,n,o,s,s][c],p=[s,s,l,n,n,o][c];return{r:h*255,g:u*255,b:p*255}}function Ol(t,e,n,i){const r=[Un(Math.round(t).toString(16)),Un(Math.round(e).toString(16)),Un(Math.round(n).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Mg(t,e,n,i,r){const s=[Un(Math.round(t).toString(16)),Un(Math.round(e).toString(16)),Un(Math.round(n).toString(16)),Un(Fg(i))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function Ng(t,e,n,i){const r=t/100,s=e/100,o=n/100,l=i/100,c=255*(1-r)*(1-l),h=255*(1-s)*(1-l),u=255*(1-o)*(1-l);return{r:c,g:h,b:u}}function Il(t,e,n){let i=1-t/255,r=1-e/255,s=1-n/255,o=Math.min(i,r,s);return o===1?(i=0,r=0,s=0):(i=(i-o)/(1-o)*100,r=(r-o)/(1-o)*100,s=(s-o)/(1-o)*100),o*=100,{c:Math.round(i),m:Math.round(r),y:Math.round(s),k:Math.round(o)}}function Fg(t){return Math.round(parseFloat(t)*255).toString(16)}function Dl(t){return ht(t)/255}function ht(t){return parseInt(t,16)}function Ug(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const jo={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Bg(t){let e={r:0,g:0,b:0},n=1,i=null,r=null,s=null,o=!1,l=!1;return typeof t=="string"&&(t=Hg(t)),typeof t=="object"&&(dt(t.r)&&dt(t.g)&&dt(t.b)?(e=Dg(t.r,t.g,t.b),o=!0,l=String(t.r).substr(-1)==="%"?"prgb":"rgb"):dt(t.h)&&dt(t.s)&&dt(t.v)?(i=Br(t.s),r=Br(t.v),e=Pg(t.h,i,r),o=!0,l="hsv"):dt(t.h)&&dt(t.s)&&dt(t.l)?(i=Br(t.s),s=Br(t.l),e=zg(t.h,i,s),o=!0,l="hsl"):dt(t.c)&&dt(t.m)&&dt(t.y)&&dt(t.k)&&(e=Ng(t.c,t.m,t.y,t.k),o=!0,l="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=Qc(n),{ok:o,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}const Vg="[-\\+]?\\d+%?",qg="[-\\+]?\\d*\\.\\d+%?",bn="(?:"+qg+")|(?:"+Vg+")",wo="[\\s|\\(]+("+bn+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")\\s*\\)?",Vr="[\\s|\\(]+("+bn+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")\\s*\\)?",xt={CSS_UNIT:new RegExp(bn),rgb:new RegExp("rgb"+wo),rgba:new RegExp("rgba"+Vr),hsl:new RegExp("hsl"+wo),hsla:new RegExp("hsla"+Vr),hsv:new RegExp("hsv"+wo),hsva:new RegExp("hsva"+Vr),cmyk:new RegExp("cmyk"+Vr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Hg(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(jo[t])t=jo[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let n=xt.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=xt.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=xt.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=xt.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=xt.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=xt.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=xt.cmyk.exec(t),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=xt.hex8.exec(t),n?{r:ht(n[1]),g:ht(n[2]),b:ht(n[3]),a:Dl(n[4]),format:e?"name":"hex8"}:(n=xt.hex6.exec(t),n?{r:ht(n[1]),g:ht(n[2]),b:ht(n[3]),format:e?"name":"hex"}:(n=xt.hex4.exec(t),n?{r:ht(n[1]+n[1]),g:ht(n[2]+n[2]),b:ht(n[3]+n[3]),a:Dl(n[4]+n[4]),format:e?"name":"hex8"}:(n=xt.hex3.exec(t),n?{r:ht(n[1]+n[1]),g:ht(n[2]+n[2]),b:ht(n[3]+n[3]),format:e?"name":"hex"}:!1))))))))))}function dt(t){return typeof t=="number"?!Number.isNaN(t):xt.CSS_UNIT.test(t)}class ve{constructor(e="",n={}){if(e instanceof ve)return e;typeof e=="number"&&(e=Ug(e)),this.originalInput=e;const i=Bg(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??i.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let n,i,r;const s=e.r/255,o=e.g/255,l=e.b/255;return s<=.03928?n=s/12.92:n=Math.pow((s+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*n+.7152*i+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=Qc(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Ll(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Ll(this.r,this.g,this.b),n=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${n}, ${i}%, ${r}%)`:`hsva(${n}, ${i}%, ${r}%, ${this.roundA})`}toHsl(){const e=Rl(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Rl(this.r,this.g,this.b),n=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${n}, ${i}%, ${r}%)`:`hsla(${n}, ${i}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Ol(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Mg(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),n=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${n}, ${i})`:`rgba(${e}, ${n}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=n=>`${Math.round(Fe(n,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=n=>Math.round(Fe(n,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Il(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:n,y:i,k:r}=Il(this.r,this.g,this.b);return`cmyk(${e}, ${n}, ${i}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Ol(this.r,this.g,this.b,!1);for(const[n,i]of Object.entries(jo))if(e===i)return n;return!1}toString(e){const n=!!e;e=e??this.format;let i=!1;const r=this.a<1&&this.a>=0;return!n&&r&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ve(this.toString())}lighten(e=10){const n=this.toHsl();return n.l+=e/100,n.l=Ur(n.l),new ve(n)}brighten(e=10){const n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new ve(n)}darken(e=10){const n=this.toHsl();return n.l-=e/100,n.l=Ur(n.l),new ve(n)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const n=this.toHsl();return n.s-=e/100,n.s=Ur(n.s),new ve(n)}saturate(e=10){const n=this.toHsl();return n.s+=e/100,n.s=Ur(n.s),new ve(n)}greyscale(){return this.desaturate(100)}spin(e){const n=this.toHsl(),i=(n.h+e)%360;return n.h=i<0?360+i:i,new ve(n)}mix(e,n=50){const i=this.toRgb(),r=new ve(e).toRgb(),s=n/100,o={r:(r.r-i.r)*s+i.r,g:(r.g-i.g)*s+i.g,b:(r.b-i.b)*s+i.b,a:(r.a-i.a)*s+i.a};return new ve(o)}analogous(e=6,n=30){const i=this.toHsl(),r=360/n,s=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,s.push(new ve(i));return s}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new ve(e)}monochromatic(e=6){const n=this.toHsv(),{h:i}=n,{s:r}=n;let{v:s}=n;const o=[],l=1/e;for(;e--;)o.push(new ve({h:i,s:r,v:s})),s=(s+l)%1;return o}splitcomplement(){const e=this.toHsl(),{h:n}=e;return[this,new ve({h:(n+72)%360,s:e.s,l:e.l}),new ve({h:(n+216)%360,s:e.s,l:e.l})]}onBackground(e){const n=this.toRgb(),i=new ve(e).toRgb(),r=n.a+i.a*(1-n.a);return new ve({r:(n.r*n.a+i.r*i.a*(1-n.a))/r,g:(n.g*n.a+i.g*i.a*(1-n.a))/r,b:(n.b*n.a+i.b*i.a*(1-n.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const n=this.toHsl(),{h:i}=n,r=[this],s=360/e;for(let o=1;o<e;o++)r.push(new ve({h:(i+o*s)%360,s:n.s,l:n.l}));return r}equals(e){const n=new ve(e);return this.format==="cmyk"||n.format==="cmyk"?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}}const Jc="important",Wg=" !"+Jc,ut=Li(class extends Oi{constructor(t){if(super(t),t.type!==At.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,n)=>{const i=t[n];return i==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?n.removeProperty(i):n[i]=null);for(const i in e){const r=e[i];if(r!=null){this.ft.add(i);const s=typeof r=="string"&&r.endsWith(Wg);i.includes("-")||s?n.setProperty(i,s?r.slice(0,-11):r,s?Jc:""):n[i]=r}}return tt}});var jg=`:host {
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
`,V=class extends ge{constructor(){super(),this.hasSlotController=new vt(this,"hint","label"),this.isSafeValue=!1,this.localize=new ie(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form=null,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open){t.stopPropagation(),this.focus(),this.hide();return}t.key==="Tab"&&setTimeout(()=>{const e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=t=>{const n=t.composedPath().some(i=>i instanceof Element&&(i.closest(".color-picker")||i===this.trigger));this&&!n&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){const t=[Us()];return[...super.validators,...t]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".slider.alpha"),n=e.querySelector(".slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,s=this.value;n.focus(),t.preventDefault(),cr(e,{onMove:o=>{this.alpha=Z(o/i*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".slider.hue"),n=e.querySelector(".slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,s=this.value;n.focus(),t.preventDefault(),cr(e,{onMove:o=>{this.hue=Z(o/i*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".grid"),n=e.querySelector(".grid-handle"),{width:i,height:r}=e.getBoundingClientRect();let s=this.value,o=this.value;n.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,cr(e,{onMove:(l,c)=>{this.saturation=Z(l/i*100,0,100),this.brightness=Z(100-c/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,n=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=Z(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=Z(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(t){const e=t.shiftKey?10:1,n=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=Z(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=Z(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(t){const e=t.shiftKey?10:1,n=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=Z(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=Z(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=Z(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=Z(this.brightness-e,0,100),this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(t){const e=t.target,n=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value||""):this.value="",this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(t){this.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(t){t.preventDefault()}parseColor(t){if(!t||t.trim()==="")return null;const e=new ve(t);if(!e.isValid)return null;const n=e.toHsl(),i=e.toRgb(),r=e.toHsv();if(!i||i.r==null||i.g==null||i.b==null)return null;const s={h:n.h||0,s:(n.s||0)*100,l:(n.l||0)*100,a:n.a||0},o=e.toHexString(),l=e.toHex8String(),c={h:r.h||0,s:(r.s||0)*100,v:(r.v||0)*100,a:r.a||0};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a||0,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${(i.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(l)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(e=>{const n=this.value;this.setColor(e.sRGBHex),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(t,e,n,i=100){const r=new ve(`hsva(${t}, ${e}%, ${n}%, ${i/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(t){super.willUpdate(t),t.has("value")&&this.handleValueChange(t.get("value")||"",this.value||"")}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(e);n!==null?(this.inputValue=this.value||"",this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=t??""}this.requestUpdate()}focus(t){this.trigger.focus(t)}blur(){const t=this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.popup?.active&&this.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new Oa),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(t){super.firstUpdated(t),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}updateAccessibleTrigger(){const t=this.trigger;t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,It(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,It(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await fe(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await fe(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){const t=this.hasUpdated?this.withLabel||this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.withHint||this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e,r=this.saturation,s=100-this.brightness,o=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(c=>c.trim()!==""),l=f`
      <div
        part="base"
        class=${j({"color-picker":!0})}
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
            class=${j({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${ut({top:`${s}%`,left:`${r}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${U(this.disabled?void 0:"0")}
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
                tabindex=${U(this.disabled?void 0:"0")}
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
                      tabindex=${U(this.disabled?void 0:"0")}
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
                      tabindex=${U(this.disabled?void 0:"0")}
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
        class=${j({container:!0,"form-control":!0,"form-control-has-label":n})}
        part="trigger-container form-control"
      >
        <div part="form-control-label" class="label" id="form-control-label">
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${j({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
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
          class=${j({"has-slotted":i})}
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
    `}};V.css=[Zc,Je,hn,jg];V.shadowRootOptions={...ge.shadowRootOptions,delegatesFocus:!0};a([$('[part~="base"]')],V.prototype,"base",2);a([$('[part~="input"]')],V.prototype,"input",2);a([$('[part~="form-control-label"]')],V.prototype,"triggerLabel",2);a([$('[part~="form-control-input"]')],V.prototype,"triggerButton",2);a([$(".color-popup")],V.prototype,"popup",2);a([$('[part~="preview"]')],V.prototype,"previewButton",2);a([$('[part~="trigger"]')],V.prototype,"trigger",2);a([A()],V.prototype,"hasFocus",2);a([A()],V.prototype,"isDraggingGridHandle",2);a([A()],V.prototype,"isEmpty",2);a([A()],V.prototype,"inputValue",2);a([A()],V.prototype,"hue",2);a([A()],V.prototype,"saturation",2);a([A()],V.prototype,"brightness",2);a([A()],V.prototype,"alpha",2);a([A()],V.prototype,"value",1);a([d({attribute:"value",reflect:!0})],V.prototype,"defaultValue",2);a([d({attribute:"with-label",reflect:!0,type:Boolean})],V.prototype,"withLabel",2);a([d({attribute:"with-hint",reflect:!0,type:Boolean})],V.prototype,"withHint",2);a([A()],V.prototype,"hasEyeDropper",2);a([d()],V.prototype,"label",2);a([d({attribute:"hint"})],V.prototype,"hint",2);a([d()],V.prototype,"format",2);a([d({reflect:!0})],V.prototype,"size",2);a([d({attribute:"without-format-toggle",type:Boolean})],V.prototype,"withoutFormatToggle",2);a([d({reflect:!0})],V.prototype,"name",2);a([d({type:Boolean})],V.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],V.prototype,"open",2);a([d({type:Boolean})],V.prototype,"opacity",2);a([d({type:Boolean})],V.prototype,"uppercase",2);a([d()],V.prototype,"swatches",2);a([d({reflect:!0})],V.prototype,"form",2);a([d({type:Boolean,reflect:!0})],V.prototype,"required",2);a([Os({passive:!1})],V.prototype,"handleTouchMove",1);a([L("format",{waitUntilFirstUpdate:!0})],V.prototype,"handleFormatChange",1);a([L("opacity")],V.prototype,"handleOpacityChange",1);a([L("value")],V.prototype,"handleValueChange",1);a([L("open",{waitUntilFirstUpdate:!0})],V.prototype,"handleOpenChange",1);V=a([S("wa-color-picker")],V);var ed=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function td(t,e){const n=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!n&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&Gg(e)})}function Gg(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;const n=[...e.elements];if(n.length===1){e.requestSubmit(null);return}const i=n.find(r=>r.type==="submit"&&!r.matches(":disabled"));i&&(["input","button"].includes(i.localName)?e.requestSubmit(i):i.click())}var Xg=`:host {
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
`,X=class extends ge{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new vt(this,"hint","label"),this.localize=new ie(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Ns()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new ed),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){td(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,n="none"){this.input.setSelectionRange(t,e,n)}setRangeText(t,e,n,i="preserve"){const r=e??this.input.selectionStart,s=n??this.input.selectionEnd;this.input.setRangeText(t,r,s,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e,r=this.withClear&&!this.disabled&&!this.readonly,s=this.hasUpdated&&r&&(typeof this.value=="number"||this.value&&this.value.length>0);return f`
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
          name=${U(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${U(this.placeholder)}
          minlength=${U(this.minlength)}
          maxlength=${U(this.maxlength)}
          min=${U(this.min)}
          max=${U(this.max)}
          step=${U(this.step)}
          .value=${xi(this.value??"")}
          autocapitalize=${U(this.autocapitalize)}
          autocomplete=${U(this.autocomplete)}
          autocorrect=${U(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${U(this.pattern)}
          enterkeyhint=${U(this.enterkeyhint)}
          inputmode=${U(this.inputmode)}
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
        class=${j({"has-slotted":i})}
        aria-hidden=${i?"false":"true"}
        >${this.hint}</slot
      >
    `}};X.css=[Je,hn,Xg];X.shadowRootOptions={...ge.shadowRootOptions,delegatesFocus:!0};a([$("input")],X.prototype,"input",2);a([d()],X.prototype,"title",2);a([d({reflect:!0})],X.prototype,"type",2);a([A()],X.prototype,"value",1);a([d({attribute:"value",reflect:!0})],X.prototype,"defaultValue",2);a([d({reflect:!0})],X.prototype,"size",2);a([d({reflect:!0})],X.prototype,"appearance",2);a([d({type:Boolean,reflect:!0})],X.prototype,"pill",2);a([d()],X.prototype,"label",2);a([d({attribute:"hint"})],X.prototype,"hint",2);a([d({attribute:"with-clear",type:Boolean})],X.prototype,"withClear",2);a([d()],X.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],X.prototype,"readonly",2);a([d({attribute:"password-toggle",type:Boolean})],X.prototype,"passwordToggle",2);a([d({attribute:"password-visible",type:Boolean})],X.prototype,"passwordVisible",2);a([d({attribute:"without-spin-buttons",type:Boolean})],X.prototype,"withoutSpinButtons",2);a([d({reflect:!0})],X.prototype,"form",2);a([d({type:Boolean,reflect:!0})],X.prototype,"required",2);a([d()],X.prototype,"pattern",2);a([d({type:Number})],X.prototype,"minlength",2);a([d({type:Number})],X.prototype,"maxlength",2);a([d()],X.prototype,"min",2);a([d()],X.prototype,"max",2);a([d()],X.prototype,"step",2);a([d()],X.prototype,"autocapitalize",2);a([d()],X.prototype,"autocorrect",2);a([d()],X.prototype,"autocomplete",2);a([d({type:Boolean})],X.prototype,"autofocus",2);a([d()],X.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],X.prototype,"spellcheck",2);a([d()],X.prototype,"inputmode",2);a([d({attribute:"with-label",type:Boolean})],X.prototype,"withLabel",2);a([d({attribute:"with-hint",type:Boolean})],X.prototype,"withHint",2);a([L("step",{waitUntilFirstUpdate:!0})],X.prototype,"handleStepChange",1);X=a([S("wa-input")],X);var nd=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};const En=Math.min,pt=Math.max,ms=Math.round,qr=Math.floor,Vt=t=>({x:t,y:t}),Kg={left:"right",right:"left",bottom:"top",top:"bottom"},Yg={start:"end",end:"start"};function Go(t,e,n){return pt(t,En(e,n))}function zi(t,e){return typeof t=="function"?t(e):t}function Cn(t){return t.split("-")[0]}function Pi(t){return t.split("-")[1]}function id(t){return t==="x"?"y":"x"}function Ia(t){return t==="y"?"height":"width"}const Zg=new Set(["top","bottom"]);function en(t){return Zg.has(Cn(t))?"y":"x"}function Da(t){return id(en(t))}function Qg(t,e,n){n===void 0&&(n=!1);const i=Pi(t),r=Da(t),s=Ia(r);let o=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=gs(o)),[o,gs(o)]}function Jg(t){const e=gs(t);return[Xo(t),e,Xo(e)]}function Xo(t){return t.replace(/start|end/g,e=>Yg[e])}const zl=["left","right"],Pl=["right","left"],eb=["top","bottom"],tb=["bottom","top"];function nb(t,e,n){switch(t){case"top":case"bottom":return n?e?Pl:zl:e?zl:Pl;case"left":case"right":return e?eb:tb;default:return[]}}function ib(t,e,n,i){const r=Pi(t);let s=nb(Cn(t),n==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(Xo)))),s}function gs(t){return t.replace(/left|right|bottom|top/g,e=>Kg[e])}function rb(t){return{top:0,right:0,bottom:0,left:0,...t}}function rd(t){return typeof t!="number"?rb(t):{top:t,right:t,bottom:t,left:t}}function bs(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function Ml(t,e,n){let{reference:i,floating:r}=t;const s=en(e),o=Da(e),l=Ia(o),c=Cn(e),h=s==="y",u=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,g=i[l]/2-r[l]/2;let b;switch(c){case"top":b={x:u,y:i.y-r.height};break;case"bottom":b={x:u,y:i.y+i.height};break;case"right":b={x:i.x+i.width,y:p};break;case"left":b={x:i.x-r.width,y:p};break;default:b={x:i.x,y:i.y}}switch(Pi(e)){case"start":b[o]-=g*(n&&h?-1:1);break;case"end":b[o]+=g*(n&&h?-1:1);break}return b}const sb=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,l=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let h=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:p}=Ml(h,i,c),g=i,b={},w=0;for(let k=0;k<l.length;k++){const{name:O,fn:C}=l[k],{x:P,y:R,data:I,reset:_}=await C({x:u,y:p,initialPlacement:i,placement:g,strategy:r,middlewareData:b,rects:h,platform:o,elements:{reference:t,floating:e}});u=P??u,p=R??p,b={...b,[O]:{...b[O],...I}},_&&w<=50&&(w++,typeof _=="object"&&(_.placement&&(g=_.placement),_.rects&&(h=_.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):_.rects),{x:u,y:p}=Ml(h,g,c)),k=-1)}return{x:u,y:p,placement:g,strategy:r,middlewareData:b}};async function za(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:l,strategy:c}=t,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:g=!1,padding:b=0}=zi(e,t),w=rd(b),O=l[g?p==="floating"?"reference":"floating":p],C=bs(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(O)))==null||n?O:O.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:h,rootBoundary:u,strategy:c})),P=p==="floating"?{x:i,y:r,width:o.floating.width,height:o.floating.height}:o.reference,R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),I=await(s.isElement==null?void 0:s.isElement(R))?await(s.getScale==null?void 0:s.getScale(R))||{x:1,y:1}:{x:1,y:1},_=bs(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:P,offsetParent:R,strategy:c}):P);return{top:(C.top-_.top+w.top)/I.y,bottom:(_.bottom-C.bottom+w.bottom)/I.y,left:(C.left-_.left+w.left)/I.x,right:(_.right-C.right+w.right)/I.x}}const ob=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:o,elements:l,middlewareData:c}=e,{element:h,padding:u=0}=zi(t,e)||{};if(h==null)return{};const p=rd(u),g={x:n,y:i},b=Da(r),w=Ia(b),k=await o.getDimensions(h),O=b==="y",C=O?"top":"left",P=O?"bottom":"right",R=O?"clientHeight":"clientWidth",I=s.reference[w]+s.reference[b]-g[b]-s.floating[w],_=g[b]-s.reference[b],G=await(o.getOffsetParent==null?void 0:o.getOffsetParent(h));let D=G?G[R]:0;(!D||!await(o.isElement==null?void 0:o.isElement(G)))&&(D=l.floating[R]||s.floating[w]);const be=I/2-_/2,we=D/2-k[w]/2-1,ue=En(p[C],we),De=En(p[P],we),Ee=ue,_e=D-k[w]-De,$e=D/2-k[w]/2+be,ze=Go(Ee,$e,_e),W=!c.arrow&&Pi(r)!=null&&$e!==ze&&s.reference[w]/2-($e<Ee?ue:De)-k[w]/2<0,He=W?$e<Ee?$e-Ee:$e-_e:0;return{[b]:g[b]+He,data:{[b]:ze,centerOffset:$e-ze-He,...W&&{alignmentOffset:He}},reset:W}}}),ab=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:s,rects:o,initialPlacement:l,platform:c,elements:h}=e,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:k=!0,...O}=zi(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const C=Cn(r),P=en(l),R=Cn(l)===l,I=await(c.isRTL==null?void 0:c.isRTL(h.floating)),_=g||(R||!k?[gs(l)]:Jg(l)),G=w!=="none";!g&&G&&_.push(...ib(l,k,w,I));const D=[l,..._],be=await za(e,O),we=[];let ue=((i=s.flip)==null?void 0:i.overflows)||[];if(u&&we.push(be[C]),p){const $e=Qg(r,o,I);we.push(be[$e[0]],be[$e[1]])}if(ue=[...ue,{placement:r,overflows:we}],!we.every($e=>$e<=0)){var De,Ee;const $e=(((De=s.flip)==null?void 0:De.index)||0)+1,ze=D[$e];if(ze&&(!(p==="alignment"?P!==en(ze):!1)||ue.every(Ke=>en(Ke.placement)===P?Ke.overflows[0]>0:!0)))return{data:{index:$e,overflows:ue},reset:{placement:ze}};let W=(Ee=ue.filter(He=>He.overflows[0]<=0).sort((He,Ke)=>He.overflows[1]-Ke.overflows[1])[0])==null?void 0:Ee.placement;if(!W)switch(b){case"bestFit":{var _e;const He=(_e=ue.filter(Ke=>{if(G){const $t=en(Ke.placement);return $t===P||$t==="y"}return!0}).map(Ke=>[Ke.placement,Ke.overflows.filter($t=>$t>0).reduce(($t,Ln)=>$t+Ln,0)]).sort((Ke,$t)=>Ke[1]-$t[1])[0])==null?void 0:_e[0];He&&(W=He);break}case"initialPlacement":W=l;break}if(r!==W)return{reset:{placement:W}}}return{}}}},lb=new Set(["left","top"]);async function cb(t,e){const{placement:n,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=Cn(n),l=Pi(n),c=en(n)==="y",h=lb.has(o)?-1:1,u=s&&c?-1:1,p=zi(e,t);let{mainAxis:g,crossAxis:b,alignmentAxis:w}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof w=="number"&&(b=l==="end"?w*-1:w),c?{x:b*u,y:g*h}:{x:g*h,y:b*u}}const db=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:s,placement:o,middlewareData:l}=e,c=await cb(e,t);return o===((n=l.offset)==null?void 0:n.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:o}}}}},hb=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:l={fn:O=>{let{x:C,y:P}=O;return{x:C,y:P}}},...c}=zi(t,e),h={x:n,y:i},u=await za(e,c),p=en(Cn(r)),g=id(p);let b=h[g],w=h[p];if(s){const O=g==="y"?"top":"left",C=g==="y"?"bottom":"right",P=b+u[O],R=b-u[C];b=Go(P,b,R)}if(o){const O=p==="y"?"top":"left",C=p==="y"?"bottom":"right",P=w+u[O],R=w-u[C];w=Go(P,w,R)}const k=l.fn({...e,[g]:b,[p]:w});return{...k,data:{x:k.x-n,y:k.y-i,enabled:{[g]:s,[p]:o}}}}}},ub=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,i;const{placement:r,rects:s,platform:o,elements:l}=e,{apply:c=()=>{},...h}=zi(t,e),u=await za(e,h),p=Cn(r),g=Pi(r),b=en(r)==="y",{width:w,height:k}=s.floating;let O,C;p==="top"||p==="bottom"?(O=p,C=g===(await(o.isRTL==null?void 0:o.isRTL(l.floating))?"start":"end")?"left":"right"):(C=p,O=g==="end"?"top":"bottom");const P=k-u.top-u.bottom,R=w-u.left-u.right,I=En(k-u[O],P),_=En(w-u[C],R),G=!e.middlewareData.shift;let D=I,be=_;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(be=R),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(D=P),G&&!g){const ue=pt(u.left,0),De=pt(u.right,0),Ee=pt(u.top,0),_e=pt(u.bottom,0);b?be=w-2*(ue!==0||De!==0?ue+De:pt(u.left,u.right)):D=k-2*(Ee!==0||_e!==0?Ee+_e:pt(u.top,u.bottom))}await c({...e,availableWidth:be,availableHeight:D});const we=await o.getDimensions(l.floating);return w!==we.width||k!==we.height?{reset:{rects:!0}}:{}}}};function Bs(){return typeof window<"u"}function Mi(t){return sd(t)?(t.nodeName||"").toLowerCase():"#document"}function gt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Kt(t){var e;return(e=(sd(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function sd(t){return Bs()?t instanceof Node||t instanceof gt(t).Node:!1}function Dt(t){return Bs()?t instanceof Element||t instanceof gt(t).Element:!1}function Ht(t){return Bs()?t instanceof HTMLElement||t instanceof gt(t).HTMLElement:!1}function Nl(t){return!Bs()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof gt(t).ShadowRoot}const pb=new Set(["inline","contents"]);function Ar(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=zt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!pb.has(r)}const fb=new Set(["table","td","th"]);function mb(t){return fb.has(Mi(t))}const gb=[":popover-open",":modal"];function Vs(t){return gb.some(e=>{try{return t.matches(e)}catch{return!1}})}const bb=["transform","translate","scale","rotate","perspective"],wb=["transform","translate","scale","rotate","perspective","filter"],vb=["paint","layout","strict","content"];function qs(t){const e=Pa(),n=Dt(t)?zt(t):t;return bb.some(i=>n[i]?n[i]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||wb.some(i=>(n.willChange||"").includes(i))||vb.some(i=>(n.contain||"").includes(i))}function yb(t){let e=Sn(t);for(;Ht(e)&&!ki(e);){if(qs(e))return e;if(Vs(e))return null;e=Sn(e)}return null}function Pa(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const xb=new Set(["html","body","#document"]);function ki(t){return xb.has(Mi(t))}function zt(t){return gt(t).getComputedStyle(t)}function Hs(t){return Dt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Sn(t){if(Mi(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Nl(t)&&t.host||Kt(t);return Nl(e)?e.host:e}function od(t){const e=Sn(t);return ki(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ht(e)&&Ar(e)?e:od(e)}function Ei(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=od(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),o=gt(r);if(s){const l=Ko(o);return e.concat(o,o.visualViewport||[],Ar(r)?r:[],l&&n?Ei(l):[])}return e.concat(r,Ei(r,[],n))}function Ko(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ad(t){const e=zt(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Ht(t),s=r?t.offsetWidth:n,o=r?t.offsetHeight:i,l=ms(n)!==s||ms(i)!==o;return l&&(n=s,i=o),{width:n,height:i,$:l}}function Ma(t){return Dt(t)?t:t.contextElement}function fi(t){const e=Ma(t);if(!Ht(e))return Vt(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:s}=ad(e);let o=(s?ms(n.width):n.width)/i,l=(s?ms(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const kb=Vt(0);function ld(t){const e=gt(t);return!Pa()||!e.visualViewport?kb:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Eb(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==gt(t)?!1:e}function Xn(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=Ma(t);let o=Vt(1);e&&(i?Dt(i)&&(o=fi(i)):o=fi(t));const l=Eb(s,n,i)?ld(s):Vt(0);let c=(r.left+l.x)/o.x,h=(r.top+l.y)/o.y,u=r.width/o.x,p=r.height/o.y;if(s){const g=gt(s),b=i&&Dt(i)?gt(i):i;let w=g,k=Ko(w);for(;k&&i&&b!==w;){const O=fi(k),C=k.getBoundingClientRect(),P=zt(k),R=C.left+(k.clientLeft+parseFloat(P.paddingLeft))*O.x,I=C.top+(k.clientTop+parseFloat(P.paddingTop))*O.y;c*=O.x,h*=O.y,u*=O.x,p*=O.y,c+=R,h+=I,w=gt(k),k=Ko(w)}}return bs({width:u,height:p,x:c,y:h})}function Ws(t,e){const n=Hs(t).scrollLeft;return e?e.left+n:Xn(Kt(t)).left+n}function cd(t,e){const n=t.getBoundingClientRect(),i=n.left+e.scrollLeft-Ws(t,n),r=n.top+e.scrollTop;return{x:i,y:r}}function Cb(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const s=r==="fixed",o=Kt(i),l=e?Vs(e.floating):!1;if(i===o||l&&s)return n;let c={scrollLeft:0,scrollTop:0},h=Vt(1);const u=Vt(0),p=Ht(i);if((p||!p&&!s)&&((Mi(i)!=="body"||Ar(o))&&(c=Hs(i)),Ht(i))){const b=Xn(i);h=fi(i),u.x=b.x+i.clientLeft,u.y=b.y+i.clientTop}const g=o&&!p&&!s?cd(o,c):Vt(0);return{width:n.width*h.x,height:n.height*h.y,x:n.x*h.x-c.scrollLeft*h.x+u.x+g.x,y:n.y*h.y-c.scrollTop*h.y+u.y+g.y}}function Sb(t){return Array.from(t.getClientRects())}function $b(t){const e=Kt(t),n=Hs(t),i=t.ownerDocument.body,r=pt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=pt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+Ws(t);const l=-n.scrollTop;return zt(i).direction==="rtl"&&(o+=pt(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:l}}const Fl=25;function Ab(t,e){const n=gt(t),i=Kt(t),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,l=0,c=0;if(r){s=r.width,o=r.height;const u=Pa();(!u||u&&e==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}const h=Ws(i);if(h<=0){const u=i.ownerDocument,p=u.body,g=getComputedStyle(p),b=u.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,w=Math.abs(i.clientWidth-p.clientWidth-b);w<=Fl&&(s-=w)}else h<=Fl&&(s+=h);return{width:s,height:o,x:l,y:c}}const _b=new Set(["absolute","fixed"]);function Tb(t,e){const n=Xn(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,s=Ht(t)?fi(t):Vt(1),o=t.clientWidth*s.x,l=t.clientHeight*s.y,c=r*s.x,h=i*s.y;return{width:o,height:l,x:c,y:h}}function Ul(t,e,n){let i;if(e==="viewport")i=Ab(t,n);else if(e==="document")i=$b(Kt(t));else if(Dt(e))i=Tb(e,n);else{const r=ld(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return bs(i)}function dd(t,e){const n=Sn(t);return n===e||!Dt(n)||ki(n)?!1:zt(n).position==="fixed"||dd(n,e)}function Rb(t,e){const n=e.get(t);if(n)return n;let i=Ei(t,[],!1).filter(l=>Dt(l)&&Mi(l)!=="body"),r=null;const s=zt(t).position==="fixed";let o=s?Sn(t):t;for(;Dt(o)&&!ki(o);){const l=zt(o),c=qs(o);!c&&l.position==="fixed"&&(r=null),(s?!c&&!r:!c&&l.position==="static"&&!!r&&_b.has(r.position)||Ar(o)&&!c&&dd(t,o))?i=i.filter(u=>u!==o):r=l,o=Sn(o)}return e.set(t,i),i}function Lb(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[...n==="clippingAncestors"?Vs(e)?[]:Rb(e,this._c):[].concat(n),i],l=o[0],c=o.reduce((h,u)=>{const p=Ul(e,u,r);return h.top=pt(p.top,h.top),h.right=En(p.right,h.right),h.bottom=En(p.bottom,h.bottom),h.left=pt(p.left,h.left),h},Ul(e,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Ob(t){const{width:e,height:n}=ad(t);return{width:e,height:n}}function Ib(t,e,n){const i=Ht(e),r=Kt(e),s=n==="fixed",o=Xn(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=Vt(0);function h(){c.x=Ws(r)}if(i||!i&&!s)if((Mi(e)!=="body"||Ar(r))&&(l=Hs(e)),i){const b=Xn(e,!0,s,e);c.x=b.x+e.clientLeft,c.y=b.y+e.clientTop}else r&&h();s&&!i&&r&&h();const u=r&&!i&&!s?cd(r,l):Vt(0),p=o.left+l.scrollLeft-c.x-u.x,g=o.top+l.scrollTop-c.y-u.y;return{x:p,y:g,width:o.width,height:o.height}}function vo(t){return zt(t).position==="static"}function Bl(t,e){if(!Ht(t)||zt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Kt(t)===n&&(n=n.ownerDocument.body),n}function hd(t,e){const n=gt(t);if(Vs(t))return n;if(!Ht(t)){let r=Sn(t);for(;r&&!ki(r);){if(Dt(r)&&!vo(r))return r;r=Sn(r)}return n}let i=Bl(t,e);for(;i&&mb(i)&&vo(i);)i=Bl(i,e);return i&&ki(i)&&vo(i)&&!qs(i)?n:i||yb(t)||n}const Db=async function(t){const e=this.getOffsetParent||hd,n=this.getDimensions,i=await n(t.floating);return{reference:Ib(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function zb(t){return zt(t).direction==="rtl"}const Jr={convertOffsetParentRelativeRectToViewportRelativeRect:Cb,getDocumentElement:Kt,getClippingRect:Lb,getOffsetParent:hd,getElementRects:Db,getClientRects:Sb,getDimensions:Ob,getScale:fi,isElement:Dt,isRTL:zb};function ud(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Pb(t,e){let n=null,i;const r=Kt(t);function s(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const h=t.getBoundingClientRect(),{left:u,top:p,width:g,height:b}=h;if(l||e(),!g||!b)return;const w=qr(p),k=qr(r.clientWidth-(u+g)),O=qr(r.clientHeight-(p+b)),C=qr(u),R={rootMargin:-w+"px "+-k+"px "+-O+"px "+-C+"px",threshold:pt(0,En(1,c))||1};let I=!0;function _(G){const D=G[0].intersectionRatio;if(D!==c){if(!I)return o();D?o(!1,D):i=setTimeout(()=>{o(!1,1e-7)},1e3)}D===1&&!ud(h,t.getBoundingClientRect())&&o(),I=!1}try{n=new IntersectionObserver(_,{...R,root:r.ownerDocument})}catch{n=new IntersectionObserver(_,R)}n.observe(t)}return o(!0),s}function pd(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,h=Ma(t),u=r||s?[...h?Ei(h):[],...Ei(e)]:[];u.forEach(C=>{r&&C.addEventListener("scroll",n,{passive:!0}),s&&C.addEventListener("resize",n)});const p=h&&l?Pb(h,n):null;let g=-1,b=null;o&&(b=new ResizeObserver(C=>{let[P]=C;P&&P.target===h&&b&&(b.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var R;(R=b)==null||R.observe(e)})),n()}),h&&!c&&b.observe(h),b.observe(e));let w,k=c?Xn(t):null;c&&O();function O(){const C=Xn(t);k&&!ud(k,C)&&n(),k=C,w=requestAnimationFrame(O)}return n(),()=>{var C;u.forEach(P=>{r&&P.removeEventListener("scroll",n),s&&P.removeEventListener("resize",n)}),p?.(),(C=b)==null||C.disconnect(),b=null,c&&cancelAnimationFrame(w)}}const fd=db,md=hb,gd=ab,Vl=ub,Mb=ob,bd=(t,e,n)=>{const i=new Map,r={platform:Jr,...n},s={...r.platform,_c:i};return sb(t,e,{...r,platform:s})};function Nb(t){return Fb(t)}function yo(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Fb(t){for(let e=t;e;e=yo(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=yo(t);e;e=yo(e)){if(!(e instanceof Element))continue;const n=getComputedStyle(e);if(n.display!=="contents"&&(n.position!=="static"||qs(n)||e.tagName==="BODY"))return e}return null}var Ub=`:host {
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
`;function ql(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var Hr=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),ce=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),n=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,s=0,o=0,l=0,c=0,h=0,u=0;n?t.top<e.top?(i=t.left,r=t.bottom,s=t.right,o=t.bottom,l=e.left,c=e.top,h=e.right,u=e.top):(i=e.left,r=e.bottom,s=e.right,o=e.bottom,l=t.left,c=t.top,h=t.right,u=t.top):t.left<e.left?(i=t.right,r=t.top,s=e.left,o=e.top,l=t.right,c=t.bottom,h=e.left,u=e.bottom):(i=e.right,r=e.top,s=t.left,o=t.top,l=e.right,c=e.bottom,h=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${o}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||ql(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||(this.popup.showPopover?.(),this.cleanup=pd(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[fd({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Vl({apply:({rects:i})=>{const r=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${i.reference.width}px`:"",this.popup.style.height=s?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;Hr&&!ql(this.anchor)&&this.boundary==="scroll"&&(e=Ei(this.anchorEl).filter(i=>i instanceof Element)),this.flip&&t.push(gd({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(md({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(Vl({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Mb({element:this.arrowEl,padding:this.arrowPadding}));const n=Hr?i=>Jr.getOffsetParent(i,Nb):Jr.getOffsetParent;bd(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:Hr?"absolute":"fixed",platform:{...Jr,getOffsetParent:n}}).then(({x:i,y:r,middlewareData:s,placement:o})=>{const l=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${i}px`,top:`${r}px`}),this.arrow){const h=s.arrow.x,u=s.arrow.y;let p="",g="",b="",w="";if(this.arrowPlacement==="start"){const k=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",g=l?k:"",w=l?"":k}else if(this.arrowPlacement==="end"){const k=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";g=l?"":k,w=l?k:"",b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(w=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(w=typeof h=="number"?`${h}px`:"",p=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:p,right:g,bottom:b,left:w,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new nd)}render(){return f`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${j({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${j({popup:!0,"popup-active":this.active,"popup-fixed":!Hr,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?f`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};ce.css=Ub;a([$(".popup")],ce.prototype,"popup",2);a([$(".arrow")],ce.prototype,"arrowEl",2);a([d()],ce.prototype,"anchor",2);a([d({type:Boolean,reflect:!0})],ce.prototype,"active",2);a([d({reflect:!0})],ce.prototype,"placement",2);a([d()],ce.prototype,"boundary",2);a([d({type:Number})],ce.prototype,"distance",2);a([d({type:Number})],ce.prototype,"skidding",2);a([d({type:Boolean})],ce.prototype,"arrow",2);a([d({attribute:"arrow-placement"})],ce.prototype,"arrowPlacement",2);a([d({attribute:"arrow-padding",type:Number})],ce.prototype,"arrowPadding",2);a([d({type:Boolean})],ce.prototype,"flip",2);a([d({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],ce.prototype,"flipFallbackPlacements",2);a([d({attribute:"flip-fallback-strategy"})],ce.prototype,"flipFallbackStrategy",2);a([d({type:Object})],ce.prototype,"flipBoundary",2);a([d({attribute:"flip-padding",type:Number})],ce.prototype,"flipPadding",2);a([d({type:Boolean})],ce.prototype,"shift",2);a([d({type:Object})],ce.prototype,"shiftBoundary",2);a([d({attribute:"shift-padding",type:Number})],ce.prototype,"shiftPadding",2);a([d({attribute:"auto-size"})],ce.prototype,"autoSize",2);a([d()],ce.prototype,"sync",2);a([d({type:Object})],ce.prototype,"autoSizeBoundary",2);a([d({attribute:"auto-size-padding",type:Number})],ce.prototype,"autoSizePadding",2);a([d({attribute:"hover-bridge",type:Boolean})],ce.prototype,"hoverBridge",2);ce=a([S("wa-popup")],ce);var Bb=`:host {
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
`,Ci=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.position=50}handleDrag(t){const{width:e}=this.getBoundingClientRect(),n=this.localize.dir()==="rtl";t.preventDefault(),cr(this,{onMove:i=>{this.customStates.set("dragging",!0),this.position=parseFloat(Z(i/e*100,0,100).toFixed(2)),n&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:t})}handleKeyDown(t){const e=this.matches(":dir(ltr)"),n=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const i=t.shiftKey?10:1;let r=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||n&&t.key==="ArrowRight")&&(r-=i),(e&&t.key==="ArrowRight"||n&&t.key==="ArrowLeft")&&(r+=i),t.key==="Home"&&(r=0),t.key==="End"&&(r=100),r=Z(r,0,100),this.position=r}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return f`
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
    `}};Ci.css=Bb;a([$(".handle")],Ci.prototype,"handle",2);a([d({type:Number,reflect:!0})],Ci.prototype,"position",2);a([L("position",{waitUntilFirstUpdate:!0})],Ci.prototype,"handlePositionChange",1);Ci=a([S("wa-comparison")],Ci);var Vb=class extends Event{constructor(t){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},qb=`:host {
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
`,Ue=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),n=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let r=this.from,s="";n?[r,s]=this.from.trim().split("."):i&&([r,s]=this.from.trim().replace(/\]$/,"").split("["));const o="getElementById"in e?e.getElementById(r):null;o?i?t=o.getAttribute(s)||"":n?t=o[s]||"":t=o.textContent||"":(this.showStatus("error"),this.dispatchEvent(new pi))}if(!t)this.showStatus("error"),this.dispatchEvent(new pi);else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.dispatchEvent(new Vb({value:t}))}catch{this.showStatus("error"),this.dispatchEvent(new pi)}}async showStatus(t){const e=t==="success"?this.successIcon:this.errorIcon;await fe(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=t,e.hidden=!1,await fe(e,"show"),setTimeout(async()=>{await fe(e,"hide"),e.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await fe(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return f`
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
          class=${j({"copy-button":!0,"copy-button-success":this.status==="success","copy-button-error":this.status==="error"})}
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
    `}};Ue.css=[Zc,qb];a([$('slot[name="copy-icon"]')],Ue.prototype,"copyIcon",2);a([$('slot[name="success-icon"]')],Ue.prototype,"successIcon",2);a([$('slot[name="error-icon"]')],Ue.prototype,"errorIcon",2);a([$("wa-tooltip")],Ue.prototype,"tooltip",2);a([A()],Ue.prototype,"isCopying",2);a([A()],Ue.prototype,"status",2);a([d()],Ue.prototype,"value",2);a([d()],Ue.prototype,"from",2);a([d({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);a([d({attribute:"copy-label"})],Ue.prototype,"copyLabel",2);a([d({attribute:"success-label"})],Ue.prototype,"successLabel",2);a([d({attribute:"error-label"})],Ue.prototype,"errorLabel",2);a([d({attribute:"feedback-duration",type:Number})],Ue.prototype,"feedbackDuration",2);a([d({attribute:"tooltip-placement"})],Ue.prototype,"tooltipPlacement",2);Ue=a([S("wa-copy-button")],Ue);var ti=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},ni=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},ii=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}},ri=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Hb=`:host {
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
`,ke=class extends N{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),this.hideDelay))}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=Fs("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){const i=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);i.includes(e)||(i.push(e),t.setAttribute("aria-labelledby",i.join(" ")))}removeFromAriaLabelledBy(t,e){const r=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(s=>s!==e);r.length>0?t.setAttribute("aria-labelledby",r.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const t=new ri;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),this.body.hidden=!1,this.popup.active=!0,await fe(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new ni)}else{const t=new ii;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),await fe(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new ti)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,n=this.anchor;if(e===n)return;const{signal:i}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:i}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:i}),e.addEventListener("click",this.handleClick,{signal:i}),e.addEventListener("mouseover",this.handleMouseOver,{signal:i}),e.addEventListener("mouseout",this.handleMouseOut,{signal:i})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener("blur",this.handleBlur,{capture:!0}),n.removeEventListener("focus",this.handleFocus,{capture:!0}),n.removeEventListener("click",this.handleClick),n.removeEventListener("mouseover",this.handleMouseOver),n.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,It(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,It(this,"wa-after-hide")}render(){return f`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${j({tooltip:!0,"tooltip-open":this.open})}
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
    `}};ke.css=Hb;ke.dependencies={"wa-popup":ce};a([$("slot:not([name])")],ke.prototype,"defaultSlot",2);a([$(".body")],ke.prototype,"body",2);a([$("wa-popup")],ke.prototype,"popup",2);a([d()],ke.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);a([d({type:Number})],ke.prototype,"distance",2);a([d({type:Boolean,reflect:!0})],ke.prototype,"open",2);a([d({type:Number})],ke.prototype,"skidding",2);a([d({attribute:"show-delay",type:Number})],ke.prototype,"showDelay",2);a([d({attribute:"hide-delay",type:Number})],ke.prototype,"hideDelay",2);a([d()],ke.prototype,"trigger",2);a([d({attribute:"without-arrow",type:Boolean,reflect:!0})],ke.prototype,"withoutArrow",2);a([d()],ke.prototype,"for",2);a([A()],ke.prototype,"anchor",2);a([L("open",{waitUntilFirstUpdate:!0})],ke.prototype,"handleOpenChange",1);a([L("for")],ke.prototype,"handleForChange",1);a([L(["distance","placement","skidding"])],ke.prototype,"handleOptionsChange",1);a([L("disabled")],ke.prototype,"handleDisabledChange",1);ke=a([S("wa-tooltip")],ke);var Wb=`:host {
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
`,Ze=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(t){t.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(t){t.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;const r=i.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(r)?!0:i instanceof ge?!("disabled"in i)||!i.disabled:!1})||(t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(n=>{n!==this&&n.open&&(n.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const t=new ri;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const e=fs(getComputedStyle(this.body).getPropertyValue("--show-duration"));await ps(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new ni)}else{const t=new ii;if(this.dispatchEvent(t),t.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const e=fs(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await ps(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new ti)}}async show(){if(!(this.open||this.disabled))return this.open=!0,It(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,It(this,"wa-after-hide")}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return f`
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
          class=${j({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};Ze.css=Wb;a([$("details")],Ze.prototype,"details",2);a([$("summary")],Ze.prototype,"header",2);a([$(".body")],Ze.prototype,"body",2);a([$(".expand-icon-slot")],Ze.prototype,"expandIconSlot",2);a([A()],Ze.prototype,"isAnimating",2);a([d({type:Boolean,reflect:!0})],Ze.prototype,"open",2);a([d()],Ze.prototype,"summary",2);a([d({reflect:!0})],Ze.prototype,"name",2);a([d({type:Boolean,reflect:!0})],Ze.prototype,"disabled",2);a([d({reflect:!0})],Ze.prototype,"appearance",2);a([d({attribute:"icon-placement",reflect:!0})],Ze.prototype,"iconPlacement",2);a([L("open",{waitUntilFirstUpdate:!0})],Ze.prototype,"handleOpenChange",1);Ze=a([S("wa-details")],Ze);function jb(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Yo=new Set;function Gb(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Xb(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function ws(t){if(Yo.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){const e=Gb()+Xb();let n=getComputedStyle(document.documentElement).scrollbarGutter;(!n||n==="auto")&&(n="stable"),e<2&&(n=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",n),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${e}px`)}}function vs(t){Yo.delete(t),Yo.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function Zo(t,e,n="vertical",i="smooth"){const r=jb(t,e),s=r.top+e.scrollTop,o=r.left+e.scrollLeft,l=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,h=e.scrollTop,u=e.scrollTop+e.offsetHeight;(n==="horizontal"||n==="both")&&(o<l?e.scrollTo({left:o,behavior:i}):o+t.clientWidth>c&&e.scrollTo({left:o-e.offsetWidth+t.clientWidth,behavior:i})),(n==="vertical"||n==="both")&&(s<h?e.scrollTo({top:s,behavior:i}):s+t.clientHeight>u&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:i}))}function Na(t){return t.split(" ").map(e=>e.trim()).filter(e=>e!=="")}var Kb=`:host {
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
`,an=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.hasSlotController=new vt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),ws(this))}disconnectedCallback(){super.disconnectedCallback(),vs(this),this.removeOpenListeners()}async requestClose(t){const e=new ii({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,fe(this.dialog,"pulse");return}this.removeOpenListeners(),await fe(this.dialog,"hide"),this.open=!1,this.dialog.close(),vs(this);const n=this.originalTrigger;typeof n?.focus=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new ti)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(t){t.preventDefault(),!this.dialog.classList.contains("hide")&&t.target===this.dialog&&this.requestClose(this.dialog)}handleDialogClick(t){const n=t.target.closest('[data-dialog="close"]');n&&(t.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await fe(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const t=new ri;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),ws(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await fe(this.dialog,"show"),this.dispatchEvent(new ni)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return f`
      <dialog
        part="dialog"
        class=${j({dialog:!0,open:this.open})}
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
    `}};an.css=Kb;a([$(".dialog")],an.prototype,"dialog",2);a([d({type:Boolean,reflect:!0})],an.prototype,"open",2);a([d({reflect:!0})],an.prototype,"label",2);a([d({attribute:"without-header",type:Boolean,reflect:!0})],an.prototype,"withoutHeader",2);a([d({attribute:"light-dismiss",type:Boolean})],an.prototype,"lightDismiss",2);a([L("open",{waitUntilFirstUpdate:!0})],an.prototype,"handleOpenChange",1);an=a([S("wa-dialog")],an);document.addEventListener("click",t=>{const e=t.target.closest("[data-dialog]");if(e instanceof Element){const[n,i]=Na(e.getAttribute("data-dialog")||"");if(n==="open"&&i?.length){const s=e.getRootNode().getElementById(i);s?.localName==="wa-dialog"?s.open=!0:console.warn(`A dialog with an ID of "${i}" could not be found in this document.`)}}});document.addEventListener("pointerdown",()=>{});var Yb=`:host {
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
`,br=class extends N{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};br.css=Yb;a([d({reflect:!0})],br.prototype,"orientation",2);a([L("orientation")],br.prototype,"handleVerticalChange",1);br=a([S("wa-divider")],br);var Zb=`:host {
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
`,Wt=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.hasSlotController=new vt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),ws(this))}disconnectedCallback(){super.disconnectedCallback(),vs(this),this.removeOpenListeners()}async requestClose(t){const e=new ii({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,fe(this.drawer,"pulse");return}this.removeOpenListeners(),await fe(this.drawer,"hide"),this.open=!1,this.drawer.close(),vs(this);const n=this.originalTrigger;typeof n?.focus=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new ti)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(t){t.preventDefault(),!this.drawer.classList.contains("hide")&&t.target===this.drawer&&this.requestClose(this.drawer)}handleDialogClick(t){const n=t.target.closest('[data-drawer="close"]');n&&(t.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(t){t.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await fe(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const t=new ri;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),ws(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.drawer.focus()}),await fe(this.drawer,"show"),this.dispatchEvent(new ni)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return f`
      <dialog
        part="dialog"
        class=${j({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
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
    `}};Wt.css=Zb;a([$(".drawer")],Wt.prototype,"drawer",2);a([d({type:Boolean,reflect:!0})],Wt.prototype,"open",2);a([d({reflect:!0})],Wt.prototype,"label",2);a([d({reflect:!0})],Wt.prototype,"placement",2);a([d({attribute:"without-header",type:Boolean,reflect:!0})],Wt.prototype,"withoutHeader",2);a([d({attribute:"light-dismiss",type:Boolean})],Wt.prototype,"lightDismiss",2);a([L("open",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleOpenChange",1);Wt=a([S("wa-drawer")],Wt);document.addEventListener("click",t=>{const e=t.target.closest("[data-drawer]");if(e instanceof Element){const[n,i]=Na(e.getAttribute("data-drawer")||"");if(n==="open"&&i?.length){const s=e.getRootNode().getElementById(i);s?.localName==="wa-drawer"?s.open=!0:console.warn(`A drawer with an ID of "${i}" could not be found in this document.`)}}});document.body.addEventListener("pointerdown",()=>{});var Qb=class extends Event{constructor(t){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};function*wd(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*wd(t.shadowRoot.activeElement)))}var Jb=`:host {
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
`,xo=new Set,nt=class extends N{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new ie(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async t=>{const e=this.localize.dir()==="rtl";if(t.key==="Escape"){const u=this.getTrigger();t.preventDefault(),t.stopPropagation(),this.open=!1,u?.focus();return}const n=[...wd()].find(u=>u.localName==="wa-dropdown-item"),i=n?.localName==="wa-dropdown-item",r=this.getCurrentSubmenuItem(),s=!!r;let o,l,c;s?(o=this.getSubmenuItems(r),l=o.find(u=>u.active||u===n),c=l?o.indexOf(l):-1):(o=this.getItems(),l=o.find(u=>u.active||u===n),c=l?o.indexOf(l):-1);let h;if(t.key==="ArrowUp"&&(t.preventDefault(),t.stopPropagation(),c>0?h=o[c-1]:h=o[o.length-1]),t.key==="ArrowDown"&&(t.preventDefault(),t.stopPropagation(),c!==-1&&c<o.length-1?h=o[c+1]:h=o[0]),t.key===(e?"ArrowLeft":"ArrowRight")&&i&&l&&l.hasSubmenu){t.preventDefault(),t.stopPropagation(),l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((p,g)=>p.active=g===0),u[0].focus())},0);return}if(t.key===(e?"ArrowRight":"ArrowLeft")&&s){t.preventDefault(),t.stopPropagation();const u=this.removeFromSubmenuStack();u&&(u.submenuOpen=!1,setTimeout(()=>{u.focus(),u.active=!0,(u.slot==="submenu"?this.getSubmenuItems(u.parentElement):this.getItems()).forEach(g=>{g!==u&&(g.active=!1)})},0));return}if((t.key==="Home"||t.key==="End")&&(t.preventDefault(),t.stopPropagation(),h=t.key==="Home"?o[0]:o[o.length-1]),t.key==="Tab"&&await this.hideMenu(),t.key.length===1&&!(t.metaKey||t.ctrlKey||t.altKey)&&!(t.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=t.key,o.some(u=>{const p=(u.textContent||"").trim().toLowerCase(),g=this.userTypedQuery.trim().toLowerCase();return p.startsWith(g)?(h=u,!0):!1})),h){t.preventDefault(),t.stopPropagation(),o.forEach(u=>u.active=u===h),h.focus();return}(t.key==="Enter"||t.key===" "&&this.userTypedQuery==="")&&i&&l&&(t.preventDefault(),t.stopPropagation(),l.hasSubmenu?(l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((p,g)=>p.active=g===0),u[0].focus())},0)):this.makeSelection(l))},this.handleDocumentPointerDown=t=>{t.composedPath().some(i=>i instanceof HTMLElement?i===this||i.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=t=>{const e=this.getCurrentSubmenuItem();if(!e?.submenuOpen||!e.submenuElement)return;const n=e.submenuElement.getBoundingClientRect(),i=this.localize.dir()==="rtl",r=i?n.right:n.left,s=i?Math.max(t.clientX,r):Math.min(t.clientX,r),o=Math.max(n.top,Math.min(t.clientY,n.bottom));e.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${s}px`),e.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${o}px`);const l=e.matches(":hover"),c=e.submenuElement?.matches(":hover")||!!t.composedPath().find(h=>h instanceof HTMLElement&&h.closest('[part="submenu"]')===e.submenuElement);!l&&!c&&setTimeout(()=>{!e.matches(":hover")&&!e.submenuElement?.matches(":hover")&&(e.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(t=>t()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove)}firstUpdated(){this.syncAriaAttributes()}async updated(t){t.has("open")&&(this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())),t.has("size")&&this.syncItemSizes()}getItems(t=!1){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(n=>n.localName==="wa-dropdown-item");return t?e:e.filter(n=>!n.disabled)}getSubmenuItems(t,e=!1){const n=t.shadowRoot?.querySelector('slot[name="submenu"]')||t.querySelector('slot[name="submenu"]');if(!n)return[];const i=n.assignedElements({flatten:!0}).filter(r=>r.localName==="wa-dropdown-item");return e?i:i.filter(r=>!r.disabled)}syncItemSizes(){this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.localName==="wa-dropdown-item").forEach(e=>e.size=this.size)}addToSubmenuStack(t){const e=this.openSubmenuStack.indexOf(t);e!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,e+1):this.openSubmenuStack.push(t)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(t){const e=t.closest('wa-dropdown-item:not([slot="submenu"])');let n;e?n=this.getSubmenuItems(e,!0):n=this.getItems(!0),n.forEach(i=>{i!==t&&i.submenuOpen&&(i.submenuOpen=!1)}),this.openSubmenuStack.includes(t)||this.openSubmenuStack.push(t)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger())return;const e=new ri;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}xo.forEach(i=>i.open=!1),this.popup.active=!0,this.open=!0,xo.add(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await fe(this.menu,"show");const n=this.getItems();n.length>0&&(n.forEach((i,r)=>i.active=r===0),n[0].focus()),this.dispatchEvent(new ni)}async hideMenu(){const t=new ii({source:this});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}this.open=!1,xo.delete(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await fe(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new ti)}handleMenuClick(t){const e=t.target.closest("wa-dropdown-item");if(!(!e||e.disabled)){if(e.hasSubmenu){e.submenuOpen||(this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),e.submenuOpen=!0),t.stopPropagation();return}this.makeSelection(e)}}async handleMenuSlotChange(){const t=this.getItems(!0);await Promise.all(t.map(i=>i.updateComplete)),this.syncItemSizes();const e=t.some(i=>i.type==="checkbox"),n=t.some(i=>i.hasSubmenu);t.forEach((i,r)=>{i.active=r===0,i.checkboxAdjacent=e,i.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(t){const e=t.detail.item;this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),this.setupSubmenuPosition(e),this.processSubmenuItems(e)}setupSubmenuPosition(t){if(!t.submenuElement)return;this.cleanupSubmenuPosition(t);const e=pd(t,t.submenuElement,()=>{this.positionSubmenu(t),this.updateSafeTriangleCoordinates(t)});this.submenuCleanups.set(t,e);const n=t.submenuElement.querySelector('slot[name="submenu"]');n&&(n.removeEventListener("slotchange",nt.handleSubmenuSlotChange),n.addEventListener("slotchange",nt.handleSubmenuSlotChange),nt.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(t){const e=t.target;if(!e)return;const n=e.assignedElements().filter(s=>s.localName==="wa-dropdown-item");if(n.length===0)return;const i=n.some(s=>s.hasSubmenu),r=n.some(s=>s.type==="checkbox");n.forEach(s=>{s.submenuAdjacent=i,s.checkboxAdjacent=r})}processSubmenuItems(t){if(!t.submenuElement)return;const e=this.getSubmenuItems(t,!0),n=e.some(i=>i.hasSubmenu);e.forEach(i=>{i.submenuAdjacent=n})}cleanupSubmenuPosition(t){const e=this.submenuCleanups.get(t);e&&(e(),this.submenuCleanups.delete(t))}positionSubmenu(t){if(!t.submenuElement)return;const n=this.localize.dir()==="rtl"?"left-start":"right-start";bd(t,t.submenuElement,{placement:n,middleware:[fd({mainAxis:0,crossAxis:-5}),gd({fallbackStrategy:"bestFit"}),md({padding:8})]}).then(({x:i,y:r,placement:s})=>{t.submenuElement.setAttribute("data-placement",s),Object.assign(t.submenuElement.style,{left:`${i}px`,top:`${r}px`})})}updateSafeTriangleCoordinates(t){if(!t.submenuElement||!t.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){t.submenuElement.style.setProperty("--safe-triangle-visible","none");return}t.submenuElement.style.setProperty("--safe-triangle-visible","block");const n=t.submenuElement.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${i?n.right:n.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${n.top}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${i?n.right:n.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${n.bottom}px`)}makeSelection(t){const e=this.getTrigger();if(t.disabled)return;t.type==="checkbox"&&(t.checked=!t.checked);const n=new Qb({item:t});this.dispatchEvent(n),n.defaultPrevented||(this.open=!1,e?.focus())}async syncAriaAttributes(){const t=this.getTrigger();let e;t&&(t.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await t.updateComplete,e=t.shadowRoot.querySelector('[part="base"]')):e=t,e.hasAttribute("id")||e.setAttribute("id",Fs("wa-dropdown-trigger-")),e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded",this.open?"true":"false"),this.menu.setAttribute("aria-expanded","false"))}render(){let t=this.hasUpdated?this.popup.active:this.open;return f`
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
    `}};nt.css=[Je,Jb];a([$("slot:not([name])")],nt.prototype,"defaultSlot",2);a([$("#menu")],nt.prototype,"menu",2);a([$("wa-popup")],nt.prototype,"popup",2);a([d({type:Boolean,reflect:!0})],nt.prototype,"open",2);a([d({reflect:!0})],nt.prototype,"size",2);a([d({reflect:!0})],nt.prototype,"placement",2);a([d({type:Number})],nt.prototype,"distance",2);a([d({type:Number})],nt.prototype,"skidding",2);nt=a([S("wa-dropdown")],nt);var ew=`:host {
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
`,Qe=class extends N{constructor(){super(...arguments),this.hasSlotController=new vt(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(t){t.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),t.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),t.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.notifyParentOfOpening(),this.submenuElement.showPopover(),this.submenuElement.hidden=!1,this.submenuElement.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await fe(this.submenuElement,"show"),setTimeout(()=>{const t=this.getSubmenuItems();t.length>0&&(t.forEach((e,n)=>e.active=n===0),t[0].focus())},0))}notifyParentOfOpening(){const t=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(t);const e=this.parentElement;e&&[...e.children].filter(i=>i!==this&&i.localName==="wa-dropdown-item"&&i.getAttribute("slot")===this.getAttribute("slot")&&i.submenuOpen).forEach(i=>{i.submenuOpen=!1})}async closeSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),this.submenuElement.hidden||(await fe(this.submenuElement,"hide"),this.submenuElement.hidden=!0,this.submenuElement.removeAttribute("data-visible"),this.submenuElement.hidePopover()))}getSubmenuItems(){return[...this.children].filter(t=>t.localName==="wa-dropdown-item"&&t.getAttribute("slot")==="submenu"&&!t.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return f`
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
    `}};Qe.css=ew;a([$("#submenu")],Qe.prototype,"submenuElement",2);a([d({type:Boolean})],Qe.prototype,"active",2);a([d({reflect:!0})],Qe.prototype,"variant",2);a([d({reflect:!0})],Qe.prototype,"size",2);a([d({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],Qe.prototype,"checkboxAdjacent",2);a([d({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],Qe.prototype,"submenuAdjacent",2);a([d()],Qe.prototype,"value",2);a([d({reflect:!0})],Qe.prototype,"type",2);a([d({type:Boolean})],Qe.prototype,"checked",2);a([d({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],Qe.prototype,"submenuOpen",2);a([A()],Qe.prototype,"hasSubmenu",2);Qe=a([S("wa-dropdown-item")],Qe);var wr=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],n=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),n.length-1)),r=n[i]+this.unit,s=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:r,unitDisplay:this.display})}};a([d({type:Number})],wr.prototype,"value",2);a([d()],wr.prototype,"unit",2);a([d()],wr.prototype,"display",2);wr=a([S("wa-format-bytes")],wr);var rt=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(t.getMilliseconds()))return;const n=this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e});return f`<time datetime=${t.toISOString()}>${n}</time>`}};a([d()],rt.prototype,"date",2);a([d()],rt.prototype,"weekday",2);a([d()],rt.prototype,"era",2);a([d()],rt.prototype,"year",2);a([d()],rt.prototype,"month",2);a([d()],rt.prototype,"day",2);a([d()],rt.prototype,"hour",2);a([d()],rt.prototype,"minute",2);a([d()],rt.prototype,"second",2);a([d({attribute:"time-zone-name"})],rt.prototype,"timeZoneName",2);a([d({attribute:"time-zone"})],rt.prototype,"timeZone",2);a([d({attribute:"hour-format"})],rt.prototype,"hourFormat",2);rt=a([S("wa-format-date")],rt);var Ct=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};a([d({type:Number})],Ct.prototype,"value",2);a([d()],Ct.prototype,"type",2);a([d({attribute:"without-grouping",type:Boolean})],Ct.prototype,"withoutGrouping",2);a([d()],Ct.prototype,"currency",2);a([d({attribute:"currency-display"})],Ct.prototype,"currencyDisplay",2);a([d({attribute:"minimum-integer-digits",type:Number})],Ct.prototype,"minimumIntegerDigits",2);a([d({attribute:"minimum-fraction-digits",type:Number})],Ct.prototype,"minimumFractionDigits",2);a([d({attribute:"maximum-fraction-digits",type:Number})],Ct.prototype,"maximumFractionDigits",2);a([d({attribute:"minimum-significant-digits",type:Number})],Ct.prototype,"minimumSignificantDigits",2);a([d({attribute:"maximum-significant-digits",type:Number})],Ct.prototype,"maximumSignificantDigits",2);Ct=a([S("wa-format-number")],Ct);var ko=new Map;function tw(t,e="cors"){const n=ko.get(t);if(n!==void 0)return Promise.resolve(n);const i=fetch(t,{mode:e}).then(async r=>{const s={ok:r.ok,status:r.status,html:await r.text()};return ko.set(t,s),s});return ko.set(t,i),i}var Hl=class extends Event{constructor(t){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},nw=`:host {
  display: block;
}
`,Kn=class extends N{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(n=>e.setAttribute(n.name,n.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await tw(t,this.mode);if(t!==this.src)return;if(!e.ok){this.dispatchEvent(new Hl({status:e.status}));return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(n=>this.executeScript(n)),this.dispatchEvent(new La)}catch{this.dispatchEvent(new Hl({status:-1}))}}render(){return f`<slot></slot>`}};Kn.css=nw;a([d()],Kn.prototype,"src",2);a([d()],Kn.prototype,"mode",2);a([d({attribute:"allow-scripts",type:Boolean})],Kn.prototype,"allowScripts",2);a([L("src")],Kn.prototype,"handleSrcChange",1);Kn=a([S("wa-include")],Kn);var iw=class extends Event{constructor(t){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},rw=`:host {
  display: contents;
}
`,Pt=class extends N{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.dispatchEvent(new iw({mutationList:t}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return f` <slot></slot> `}};Pt.css=rw;a([d({reflect:!0})],Pt.prototype,"attr",2);a([d({attribute:"attr-old-value",type:Boolean,reflect:!0})],Pt.prototype,"attrOldValue",2);a([d({attribute:"char-data",type:Boolean,reflect:!0})],Pt.prototype,"charData",2);a([d({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Pt.prototype,"charDataOldValue",2);a([d({attribute:"child-list",type:Boolean,reflect:!0})],Pt.prototype,"childList",2);a([d({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);a([L("disabled")],Pt.prototype,"handleDisabledChange",1);a([L("attr",{waitUntilFirstUpdate:!0}),L("attr-old-value",{waitUntilFirstUpdate:!0}),L("char-data",{waitUntilFirstUpdate:!0}),L("char-data-old-value",{waitUntilFirstUpdate:!0}),L("childList",{waitUntilFirstUpdate:!0})],Pt.prototype,"handleChange",1);Pt=a([S("wa-mutation-observer")],Pt);var sw=`:host {
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
`,Eo=new Set,Be=class extends N{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=t=>{t.target.closest('[data-popover="close"]')&&(t.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.preventDefault(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=t=>{const e=t.target;this.anchor&&t.composedPath().includes(this.anchor)||e.closest("wa-popover")!==this&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=Fs("wa-popover-"))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(t){t.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const t=new ri;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}Eo.forEach(e=>e.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,Eo.add(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await fe(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new ni)}else{const t=new ii;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),Eo.delete(this),await fe(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new ti)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,n=this.anchor;if(e===n)return;const{signal:i}=this.eventController;e&&e.addEventListener("click",this.handleAnchorClick,{signal:i}),n&&n.removeEventListener("click",this.handleAnchorClick),this.anchor=e,this.for&&!e&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,It(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,It(this,"wa-after-hide")}render(){return f`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${j({popover:!0,"popover-open":this.open})}
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
    `}};Be.css=sw;Be.dependencies={"wa-popup":ce};a([$("dialog")],Be.prototype,"dialog",2);a([$(".body")],Be.prototype,"body",2);a([$("wa-popup")],Be.prototype,"popup",2);a([A()],Be.prototype,"anchor",2);a([d()],Be.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],Be.prototype,"open",2);a([d({type:Number})],Be.prototype,"distance",2);a([d({type:Number})],Be.prototype,"skidding",2);a([d()],Be.prototype,"for",2);a([d({attribute:"without-arrow",type:Boolean,reflect:!0})],Be.prototype,"withoutArrow",2);a([L("open",{waitUntilFirstUpdate:!0})],Be.prototype,"handleOpenChange",1);a([L("for")],Be.prototype,"handleForChange",1);a([L(["distance","placement","skidding"])],Be.prototype,"handleOptionsChange",1);Be=a([S("wa-popover")],Be);var ow=`:host {
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
`,Si=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.indeterminate=!1,this.label=""}updated(t){t.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${Z(this.value,0,100)}%`)})}render(){return f`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${U(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":f` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};Si.css=ow;a([d({type:Number,reflect:!0})],Si.prototype,"value",2);a([d({type:Boolean,reflect:!0})],Si.prototype,"indeterminate",2);a([d()],Si.prototype,"label",2);Si=a([S("wa-progress-bar")],Si);var aw=`:host {
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
`,Yn=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),n=2*Math.PI*e,i=n-this.value/100*n;this.indicatorOffset=`${i}px`}}render(){return f`
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
    `}};Yn.css=aw;a([$(".indicator")],Yn.prototype,"indicator",2);a([A()],Yn.prototype,"indicatorOffset",2);a([d({type:Number,reflect:!0})],Yn.prototype,"value",2);a([d()],Yn.prototype,"label",2);Yn=a([S("wa-progress-ring")],Yn);const lw="modulepreload",cw=function(t){return"/"+t},Wl={},se=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(n.map(h=>{if(h=cw(h),h in Wl)return;Wl[h]=!0;const u=h.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":lw,u||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((b,w)=>{g.addEventListener("load",b),g.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var dw=`:host {
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
`,Co,bt=class extends N{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H",this.generated=!1}firstUpdated(t){super.firstUpdated(t),this.hasUpdated&&this.generate()}generate(){if(this.style.setProperty("--size",`${this.size}px`),!!this.hasUpdated){if(!Co){se(()=>import("./qr-creator.es6.min-DtlEF1Ls.js"),[]).then(t=>{Co=t.default,this.generate()});return}Co.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas),this.generated=!0}}render(){return f`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
      ></canvas>
    `}};bt.css=dw;a([$("canvas")],bt.prototype,"canvas",2);a([d()],bt.prototype,"value",2);a([d()],bt.prototype,"label",2);a([d({type:Number})],bt.prototype,"size",2);a([d()],bt.prototype,"fill",2);a([d()],bt.prototype,"background",2);a([d({type:Number})],bt.prototype,"radius",2);a([d({attribute:"error-correction"})],bt.prototype,"errorCorrection",2);a([A()],bt.prototype,"generated",2);a([L(["background","errorCorrection","fill","radius","size","value"])],bt.prototype,"generate",1);bt=a([S("wa-qr-code")],bt);var hw=`:host {
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
`,je=class extends ge{constructor(){super(),this.hasSlotController=new vt(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("wa-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const n=this.value;this.value=e.value,e.checked=!0;const i=this.getAllRadios();for(const r of i)e!==r&&(r.checked=!1,r.setAttribute("tabindex","-1"));this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const t=[Us({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:Fs("__wa-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}get validationTarget(){const t=this.querySelector(":is(wa-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("value"))&&this.syncRadioElements()}formResetCallback(...t){this.value=this.defaultValue,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();if(t.forEach((e,n)=>{e.setAttribute("size",this.size),e.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),e.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),e.toggleAttribute("data-wa-radio-first",n===0),e.toggleAttribute("data-wa-radio-inner",n!==0&&n!==t.length-1),e.toggleAttribute("data-wa-radio-last",n===t.length-1),e.forceDisabled=this.disabled}),await Promise.all(t.map(async e=>{await e.updateComplete,!e.disabled&&e.value===this.value?e.checked=!0:e.checked=!1})),this.disabled)t.forEach(e=>{e.tabIndex=-1});else{const e=t.filter(i=>!i.disabled),n=e.find(i=>i.checked);e.length>0&&(n?e.forEach(i=>{i.tabIndex=i.checked?0:-1}):e.forEach((i,r)=>{i.tabIndex=r===0?0:-1})),t.filter(i=>i.disabled).forEach(i=>{i.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter(l=>!l.disabled);if(e.length<=0)return;t.preventDefault();const n=this.value,i=e.find(l=>l.checked)??e[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let s=e.indexOf(i)+r;s||(s=0),s<0&&(s=e.length-1),s>e.length-1&&(s=0);const o=e.some(l=>l.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(l=>{l.checked=!1,o||l.setAttribute("tabindex","-1")}),this.value=e[s].value,e[s].checked=!0,o?e[s].shadowRoot.querySelector("button").focus():(e[s].setAttribute("tabindex","0"),e[s].focus()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),n=e.find(s=>s.checked),i=e.find(s=>!s.disabled),r=n||i;r&&r.focus(t)}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e;return f`
      <fieldset
        part="form-control"
        class=${j({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":n})}
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
          class=${j({"has-slotted":i})}
          aria-hidden=${i?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};je.css=[Je,hn,hw];je.shadowRootOptions={...ge.shadowRootOptions,delegatesFocus:!0};a([$("slot:not([name])")],je.prototype,"defaultSlot",2);a([d()],je.prototype,"label",2);a([d({attribute:"hint"})],je.prototype,"hint",2);a([d({reflect:!0})],je.prototype,"name",2);a([d({type:Boolean,reflect:!0})],je.prototype,"disabled",2);a([d({reflect:!0})],je.prototype,"orientation",2);a([A()],je.prototype,"value",1);a([d({attribute:"value",reflect:!0})],je.prototype,"defaultValue",2);a([d({reflect:!0})],je.prototype,"size",2);a([d({type:Boolean,reflect:!0})],je.prototype,"required",2);a([d({type:Boolean,attribute:"with-label"})],je.prototype,"withLabel",2);a([d({type:Boolean,attribute:"with-hint"})],je.prototype,"withHint",2);je=a([S("wa-radio-group")],je);var uw=`:host {
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
`,jt=class extends ge{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return f`
      <span part="control" class="control">
        ${this.checked?f`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};jt.css=[hn,Je,uw];a([A()],jt.prototype,"checked",2);a([A()],jt.prototype,"forceDisabled",2);a([d({reflect:!0})],jt.prototype,"form",2);a([d({reflect:!0})],jt.prototype,"value",2);a([d({reflect:!0})],jt.prototype,"appearance",2);a([d({reflect:!0})],jt.prototype,"size",2);a([d({type:Boolean})],jt.prototype,"disabled",2);jt=a([S("wa-radio")],jt);var jl=class extends Event{constructor(t){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},pw=`:host {
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
`,Ve=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=(t,e)=>e?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="medium"}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:n,right:i,width:r}=this.rating.getBoundingClientRect(),s=e?this.roundToPrecision((i-t)/r*this.max,this.precision):this.roundToPrecision((t-n)/r*this.max,this.precision);return Z(s,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.matches(":dir(ltr)"),n=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||n&&t.key==="ArrowRight"){const r=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||n&&t.key==="ArrowLeft"){const r=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}roundToPrecision(t,e=.5){const n=1/e;return Math.ceil(t*n)/n}handleHoverValueChange(){this.dispatchEvent(new jl({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new jl({phase:this.isHovering?"start":"end",value:this.hoverValue}))}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir,e=Array.from(Array(this.max).keys());let n=0;return this.disabled||this.readonly?n=this.value:n=this.isHovering?this.hoverValue:this.value,f`
      <div
        part="base"
        class=${j({rating:!0,"rating-readonly":this.readonly,"rating-disabled":this.disabled})}
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
                  class=${j({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(n)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${ut({clipPath:t?`inset(0 ${(n-i)*100}% 0 0)`:`inset(0 0 0 ${(n-i)*100}%)`})}
                  >
                    ${tn(this.getSymbol(i+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${ut({clipPath:t?`inset(0 0 0 ${100-(n-i)*100}%)`:`inset(0 ${100-(n-i)*100}% 0 0)`})}
                  >
                    ${tn(this.getSymbol(i+1,!0))}
                  </div>
                </span>
              `:f`
              <span
                class=${j({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(n)===i+1,"symbol-active":n>=i+1})}
                role="presentation"
              >
                ${tn(this.getSymbol(i+1,r))}
              </span>
            `})}
        </span>
      </div>
    `}};Ve.css=[Je,pw];a([$(".rating")],Ve.prototype,"rating",2);a([A()],Ve.prototype,"hoverValue",2);a([A()],Ve.prototype,"isHovering",2);a([d()],Ve.prototype,"label",2);a([d({type:Number})],Ve.prototype,"value",2);a([d({type:Number})],Ve.prototype,"max",2);a([d({type:Number})],Ve.prototype,"precision",2);a([d({type:Boolean,reflect:!0})],Ve.prototype,"readonly",2);a([d({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2);a([d()],Ve.prototype,"getSymbol",2);a([d({reflect:!0})],Ve.prototype,"size",2);a([Os({passive:!0})],Ve.prototype,"handleTouchMove",1);a([L("hoverValue")],Ve.prototype,"handleHoverValueChange",1);a([L("isHovering")],Ve.prototype,"handleIsHoveringChange",1);Ve=a([S("wa-rating")],Ve);var fw=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],$n=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const n=e.getTime()-t.getTime(),{unit:i,value:r}=fw.find(s=>Math.abs(n)<s.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(n/r),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let s;i==="minute"?s=Wr("second"):i==="hour"?s=Wr("minute"):i==="day"?s=Wr("hour"):s=Wr("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),s)}return f`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};a([A()],$n.prototype,"isoTime",2);a([A()],$n.prototype,"relativeTime",2);a([d()],$n.prototype,"date",2);a([d()],$n.prototype,"format",2);a([d()],$n.prototype,"numeric",2);a([d({type:Boolean})],$n.prototype,"sync",2);$n=a([S("wa-relative-time")],$n);function Wr(t){const n={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return n-Date.now()%n}var mw=class extends Event{constructor(t){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},gw=`:host {
  display: contents;
}
`,vr=class extends N{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.dispatchEvent(new mw({entries:t}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(n=>this.resizeObserver.unobserve(n)),this.observedElements=[],e.forEach(n=>{this.resizeObserver.observe(n),this.observedElements.push(n)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return f` <slot @slotchange=${this.handleSlotChange}></slot> `}};vr.css=gw;a([d({type:Boolean,reflect:!0})],vr.prototype,"disabled",2);a([L("disabled",{waitUntilFirstUpdate:!0})],vr.prototype,"handleDisabledChange",1);vr=a([S("wa-resize-observer")],vr);var bw=`:host {
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
`,ln=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(t){t.key==="Home"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),t.key==="End"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const t=Math.ceil(this.content.clientWidth),e=Math.abs(Math.ceil(this.content.scrollLeft)),i=Math.ceil(this.content.scrollWidth)-t;this.canScroll=i>0;const r=Math.min(1,e/(i*.05)),s=Math.min(1,(i-e)/(i*.05));this.style.setProperty("--start-shadow-opacity",String(r||0)),this.style.setProperty("--end-shadow-opacity",String(s||0))}else{const t=Math.ceil(this.content.clientHeight),e=Math.abs(Math.ceil(this.content.scrollTop)),i=Math.ceil(this.content.scrollHeight)-t;this.canScroll=i>0;const r=Math.min(1,e/(i*.05)),s=Math.min(1,(i-e)/(i*.05));this.style.setProperty("--start-shadow-opacity",String(r||0)),this.style.setProperty("--end-shadow-opacity",String(s||0))}}render(){return f`
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
    `}};ln.css=[bw];a([$("#content")],ln.prototype,"content",2);a([A()],ln.prototype,"canScroll",2);a([d({reflect:!0})],ln.prototype,"orientation",2);a([d({attribute:"without-scrollbar",type:Boolean,reflect:!0})],ln.prototype,"withoutScrollbar",2);a([d({attribute:"without-shadow",type:Boolean,reflect:!0})],ln.prototype,"withoutShadow",2);a([Os({passive:!0})],ln.prototype,"updateScroll",1);ln=a([S("wa-scroller")],ln);var ww=`:host {
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
`,Q=class extends ge{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new vt(this,"hint","label"),this.localize=new ie(this),this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.form=null,this.required=!1,this.getTag=t=>f`
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
      `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,n=e.closest('[part~="clear-button"]')!==null,i=e.closest("wa-button")!==null;if(!(n||i)){if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),s=r.indexOf(this.currentOption);let o=Math.max(0,s);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(o=s+1,o>r.length-1&&(o=0)):t.key==="ArrowUp"?(o=s-1,o<0&&(o=r.length-1)):t.key==="Home"?o=0:t.key==="End"&&(o=r.length-1),this.setCurrentOption(r[o])}if(t.key?.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const s of r)if(s.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static get validators(){const t=[Us({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...t]}get validationTarget(){return this.valueInput}set defaultValue(t){this._defaultValue=this.convertDefaultValue(t)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(t){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(t)&&(t=t[0]),t}set value(t){let e=this.value;t instanceof FormData&&(t=t.getAll(this.name)),t!=null&&!Array.isArray(t)&&(t=[t]),this._value=t??null,this.value!==e&&(this.valueHasChanged=!0,this.requestUpdate("value",e))}get value(){let t=this._value??this.defaultValue??null;t!=null&&(t=Array.isArray(t)?t:[t]),t==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(n=>!n.disabled).map(n=>n.value));let e=t;return t!=null&&(e=t.filter(n=>this.optionValues.has(n)),e=this.multiple?e:e[0],e=e??null),e}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){const e=this.getAllOptions().filter(n=>n.hasAttribute("selected")||n.defaultSelected);if(e.length>0){const n=e.map(i=>i.value);this._defaultValue=this.multiple?n:n[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(t){t.preventDefault()}handleComboboxMouseDown(t){const n=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="wa-button");this.disabled||n||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==null&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new ed),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const n=t.target.closest("wa-option");n&&!n.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(n):this.setSelectedOptions(n),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let e=this.value;if(e==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(e)||(e=[e]);const n=t.filter(i=>e.includes(i.value));this.setSelectedOptions(n)}handleTagRemove(t,e){if(t.stopPropagation(),this.disabled)return;let n=e;if(!n){const i=t.target.closest("wa-tag[part~=tag]");if(i){const r=this.shadowRoot?.querySelector('[part="tags"]');if(r){const o=Array.from(r.children).indexOf(i);o>=0&&o<this.selectedOptions.length&&(n=this.selectedOptions[o])}}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(t){this.getAllOptions().forEach(n=>{n.current=!1,n.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),n=Array.isArray(t)?t:[t];e.forEach(i=>{n.includes(i)||(i.selected=!1)}),n.length&&n.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){const t=this.getAllOptions();this.selectedOptions=t.filter(n=>{if(!this.hasInteracted&&!this.valueHasChanged){const i=this.defaultValue,r=Array.isArray(i)?i:[i];return n.hasAttribute("selected")||n.defaultSelected||n.selected||r?.includes(n.value)}return n.selected});let e=new Set(this.selectedOptions.map(n=>n.value));if(e.size>0||this._value){const n=this._value;if(this._value==null){let i=this.defaultValue??[];this._value=Array.isArray(i)?i:[i]}this._value=this._value?.filter(i=>!this.optionValues?.has(i))??null,this._value?.unshift(...e),this.requestUpdate("value",n)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const n=this.selectedOptions[0];this.displayLabel=n?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const n=this.getTag(t,e);return n?typeof n=="string"?tn(n):n:null}else if(e===this.maxOptionsVisible)return f`
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
        `;return null})}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],n=t.filter(i=>e.includes(i.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const t=new ri;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await fe(this.popup.popup,"show"),this.currentOption&&Zo(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new ni)}else{const t=new ii;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await fe(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new ti)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,It(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,It(this,"wa-after-hide")}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e,r=(this.hasUpdated||ru)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,s=!!(this.placeholder&&(!this.value||this.value.length===0));return f`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control-has-label":n})}
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
            class=${j({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":s})}
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
          class=${j({"has-slotted":i})}
          aria-hidden=${i?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};Q.css=[ww,hn,Je];a([$(".select")],Q.prototype,"popup",2);a([$(".combobox")],Q.prototype,"combobox",2);a([$(".display-input")],Q.prototype,"displayInput",2);a([$(".value-input")],Q.prototype,"valueInput",2);a([$(".listbox")],Q.prototype,"listbox",2);a([A()],Q.prototype,"displayLabel",2);a([A()],Q.prototype,"currentOption",2);a([A()],Q.prototype,"selectedOptions",2);a([A()],Q.prototype,"optionValues",2);a([d()],Q.prototype,"name",2);a([d({attribute:!1})],Q.prototype,"defaultValue",1);a([d({attribute:"value",reflect:!1})],Q.prototype,"value",1);a([d({reflect:!0})],Q.prototype,"size",2);a([d()],Q.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],Q.prototype,"multiple",2);a([d({attribute:"max-options-visible",type:Number})],Q.prototype,"maxOptionsVisible",2);a([d({type:Boolean})],Q.prototype,"disabled",2);a([d({attribute:"with-clear",type:Boolean})],Q.prototype,"withClear",2);a([d({type:Boolean,reflect:!0})],Q.prototype,"open",2);a([d({reflect:!0})],Q.prototype,"appearance",2);a([d({type:Boolean,reflect:!0})],Q.prototype,"pill",2);a([d()],Q.prototype,"label",2);a([d({reflect:!0})],Q.prototype,"placement",2);a([d({attribute:"hint"})],Q.prototype,"hint",2);a([d({attribute:"with-label",type:Boolean})],Q.prototype,"withLabel",2);a([d({attribute:"with-hint",type:Boolean})],Q.prototype,"withHint",2);a([d({reflect:!0})],Q.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Q.prototype,"required",2);a([d({attribute:!1})],Q.prototype,"getTag",2);a([L("disabled",{waitUntilFirstUpdate:!0})],Q.prototype,"handleDisabledChange",1);a([L("value",{waitUntilFirstUpdate:!0})],Q.prototype,"handleValueChange",1);a([L("open",{waitUntilFirstUpdate:!0})],Q.prototype,"handleOpenChange",1);Q=a([S("wa-select")],Q);var vw=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}},yw=`@layer wa-component {
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
`,An=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.variant="neutral",this.appearance="filled-outlined",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new vw)}render(){return f`
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
    `}};An.css=[yw,$r,Je];a([d({reflect:!0})],An.prototype,"variant",2);a([d({reflect:!0})],An.prototype,"appearance",2);a([d({reflect:!0})],An.prototype,"size",2);a([d({type:Boolean,reflect:!0})],An.prototype,"pill",2);a([d({attribute:"with-remove",type:Boolean})],An.prototype,"withRemove",2);An=a([S("wa-tag")],An);function ir(t,e=0){if(!t||!globalThis.Node)return"";if(typeof t[Symbol.iterator]=="function")return(Array.isArray(t)?t:[...t]).map(r=>ir(r,--e)).join("");let n=t;if(n.nodeType===Node.TEXT_NODE)return n.textContent??"";if(n.nodeType===Node.ELEMENT_NODE){let i=n;if(i.hasAttribute("slot")||i.matches("style, script"))return"";if(i instanceof HTMLSlotElement){let r=i.assignedNodes({flatten:!0});if(r.length>0)return ir(r,--e)}return e>-1?ir(i,--e):i.textContent??""}return n.hasChildNodes()?ir(n.childNodes,--e):""}var xw=`:host {
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
`,Mt=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=t=>{t.type==="mouseenter"?this.customStates.set("hover",!0):t.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(t){const e=this._label;this._label=t||"",this._label!==e&&this.requestUpdate("label",e)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?customElements.whenDefined("wa-select").then(()=>{const t=this.closest("wa-select");t&&(t.handleDefaultSlotChange(),t.selectionChanged?.())}):this.isInitialized=!0}willUpdate(t){if(t.has("defaultSelected")&&!this.closest("wa-select")?.hasInteracted){const e=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",e)}super.willUpdate(t)}updated(t){super.updated(t),t.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),t.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),t.has("current")&&this.customStates.set("current",this.current)}updateDefaultLabel(){let t=this.defaultLabel;this.defaultLabel=ir(this).trim();let e=this.defaultLabel!==t;return!this._label&&e&&this.requestUpdate("label",t),e}render(){return f`
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
    `}};Mt.css=xw;a([$(".label")],Mt.prototype,"defaultSlot",2);a([A()],Mt.prototype,"current",2);a([d({reflect:!0})],Mt.prototype,"value",2);a([d({type:Boolean})],Mt.prototype,"disabled",2);a([d({type:Boolean,attribute:!1})],Mt.prototype,"selected",2);a([d({type:Boolean,attribute:"selected"})],Mt.prototype,"defaultSelected",2);a([d()],Mt.prototype,"label",1);a([A()],Mt.prototype,"defaultLabel",2);Mt=a([S("wa-option")],Mt);var kw=`:host {
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
`,ys=class extends N{constructor(){super(...arguments),this.effect="none"}render(){return f` <div part="indicator" class="indicator"></div> `}};ys.css=kw;a([d({reflect:!0})],ys.prototype,"effect",2);ys=a([S("wa-skeleton")],ys);var Ew=()=>{const t=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(e){const n={message:"",isValid:!0,invalidKeys:[]},i=(r,s,o,l)=>{const c=document.createElement("input");return c.type="range",c.min=String(s),c.max=String(o),c.step=String(l),c.value=String(r),c.checkValidity(),c.validationMessage};if(e.required&&!e.hasInteracted)return n.isValid=!1,n.invalidKeys.push("valueMissing"),n.message=t.validationMessage||"Please fill out this field.",n;if(e.isRange){const r=e.minValue,s=e.maxValue;if(r<e.min)return n.isValid=!1,n.invalidKeys.push("rangeUnderflow"),n.message=i(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,n;if(s>e.max)return n.isValid=!1,n.invalidKeys.push("rangeOverflow"),n.message=i(s,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,n;if(e.step&&e.step!==1){const o=(r-e.min)%e.step!==0,l=(s-e.min)%e.step!==0;if(o||l){n.isValid=!1,n.invalidKeys.push("stepMismatch");const c=o?r:s;return n.message=i(c,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,n}}}else{const r=e.value;if(r<e.min)return n.isValid=!1,n.invalidKeys.push("rangeUnderflow"),n.message=i(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,n;if(r>e.max)return n.isValid=!1,n.invalidKeys.push("rangeOverflow"),n.message=i(r,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,n;if(e.step&&e.step!==1&&(r-e.min)%e.step!==0)return n.isValid=!1,n.invalidKeys.push("stepMismatch"),n.message=i(r,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,n}return n}}},Cw=`:host {
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
`,J=class extends ge{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new vt(this,"hint","label"),this.localize=new ie(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=this.defaultValue,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.form=null,this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,Ew()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){t=Number(t)??this.minValue,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new Fr(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new Fr(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new Fr(this.track,{start:(t,e)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const n=this.getValueFromCoordinates(t,e),i=Math.abs(n-this.minValue),r=Math.abs(n-this.maxValue);if(i===r)if(n>this.maxValue)this.activeThumb="max";else if(n<this.minValue)this.activeThumb="min";else{const s=this.localize.dir()==="rtl",o=this.orientation==="vertical",l=o?e:t,c=this.lastTrackPosition||l;this.lastTrackPosition=l;const h=l>c!==s&&!o||l<c&&o;this.activeThumb=h?"max":"min"}else this.activeThumb=i<=r?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(t,e,this.activeThumb),this.showRangeTooltips()},move:(t,e)=>{this.activeThumb&&this.setThumbValueFromCoordinates(t,e,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new Fr(this.slider,{start:(t,e)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(t,e),this.showTooltip()},move:(t,e)=>{this.setValueFromCoordinates(t,e)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(t){if(t.has("range")&&this.requestUpdate(),this.isRange?(t.has("minValue")||t.has("maxValue"))&&(this.minValue=Z(this.minValue,this.min,this.maxValue),this.maxValue=Z(this.maxValue,this.minValue,this.max),this.updateFormValue()):t.has("value")&&(this.value=Z(this.value,this.min,this.max),this.setValue(String(this.value))),(t.has("min")||t.has("max"))&&(this.isRange?(this.minValue=Z(this.minValue,this.min,this.max),this.maxValue=Z(this.maxValue,this.min,this.max)):this.value=Z(this.value,this.min,this.max)),t.has("disabled")&&this.customStates.set("disabled",this.disabled),t.has("disabled")||t.has("readonly")){const e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):this.value=parseFloat(this.getAttribute("value")??String(this.min)),this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){const e=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length;return t=Math.round(t/this.step)*this.step,t=Z(t,this.min,this.max),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){const n=this.localize.dir()==="rtl",i=this.orientation==="vertical",{top:r,right:s,bottom:o,left:l,height:c,width:h}=this.trackBoundingClientRect,u=i?e:t,p=i?{start:r,end:o,size:c}:{start:l,end:s,size:h},b=(i||n?p.end-u:u-p.start)/p.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*b)}handleBlur(){this.isRange?requestAnimationFrame(()=>{const t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){const e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){const e=this.localize.dir()==="rtl",n=t.target;if(this.disabled||this.readonly||this.isRange&&(n===this.thumbMin?this.activeThumb="min":n===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const i=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let r=i;switch(t.key){case"ArrowUp":case(e?"ArrowLeft":"ArrowRight"):t.preventDefault(),r=this.clampAndRoundToStep(i+this.step);break;case"ArrowDown":case(e?"ArrowRight":"ArrowLeft"):t.preventDefault(),r=this.clampAndRoundToStep(i-this.step);break;case"Home":t.preventDefault(),r=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),r=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault();const s=Math.max(i+(this.max-this.min)/10,i+this.step);r=this.clampAndRoundToStep(s);break;case"PageDown":t.preventDefault();const o=Math.min(i-(this.max-this.min)/10,i-this.step);r=this.clampAndRoundToStep(o);break;case"Enter":td(t,this);return}r!==i&&(this.isRange?(this.activeThumb==="min"?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),this.updateFormValue()):this.value=Z(r,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){const n=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(t,e,n){const i=this.getValueFromCoordinates(t,e),r=n==="min"?this.minValue:this.maxValue;n==="min"?i>this.maxValue?(this.maxValue=i,this.minValue=i):this.minValue=Math.max(this.min,i):i<this.minValue?(this.minValue=i,this.maxValue=i):this.maxValue=Math.min(this.max,i),r!==(n==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(t&&(t.open=!0),e&&(e.open=!1)):this.activeThumb==="max"&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(){if(this.isRange){const t=new FormData;t.append(this.name||"",String(this.minValue)),t.append(this.name||"",String(this.maxValue)),this.setValue(t)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=Z(t,this.min,this.maxValue),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){const t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=Z(t,this.minValue,this.max),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("hint"),n=this.label?!0:!!t,i=this.hint?!0:!!e,r=this.hasSlotController.test("reference"),s=j({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),o=[];if(this.withMarkers)for(let g=this.min;g<=this.max;g+=this.step)o.push(this.getPercentageFromValue(g));const l=f`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${j({vh:!n})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,c=f`
      <div
        id="hint"
        part="hint"
        class=${j({"has-slotted":i})}
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
          `:"";if(this.isRange){const g=Z(this.getPercentageFromValue(this.minValue),0,100),b=Z(this.getPercentageFromValue(this.maxValue),0,100);return f`
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
      `}else{const g=Z(this.getPercentageFromValue(this.value),0,100),b=Z(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return f`
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
      `}}};J.formAssociated=!0;J.observeSlots=!0;J.css=[Je,hn,Cw];a([$("#slider")],J.prototype,"slider",2);a([$("#thumb")],J.prototype,"thumb",2);a([$("#thumb-min")],J.prototype,"thumbMin",2);a([$("#thumb-max")],J.prototype,"thumbMax",2);a([$("#track")],J.prototype,"track",2);a([$("#tooltip")],J.prototype,"tooltip",2);a([d()],J.prototype,"label",2);a([d({attribute:"hint"})],J.prototype,"hint",2);a([d({reflect:!0})],J.prototype,"name",2);a([d({type:Number,attribute:"min-value"})],J.prototype,"minValue",2);a([d({type:Number,attribute:"max-value"})],J.prototype,"maxValue",2);a([d({attribute:"value",reflect:!0,type:Number})],J.prototype,"defaultValue",2);a([A()],J.prototype,"value",1);a([d({type:Boolean,reflect:!0})],J.prototype,"range",2);a([d({type:Boolean})],J.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],J.prototype,"readonly",2);a([d({reflect:!0})],J.prototype,"orientation",2);a([d({reflect:!0})],J.prototype,"size",2);a([d({attribute:"indicator-offset",type:Number})],J.prototype,"indicatorOffset",2);a([d({reflect:!0})],J.prototype,"form",2);a([d({type:Number})],J.prototype,"min",2);a([d({type:Number})],J.prototype,"max",2);a([d({type:Number})],J.prototype,"step",2);a([d({type:Boolean,reflect:!0})],J.prototype,"required",2);a([d({type:Boolean})],J.prototype,"autofocus",2);a([d({attribute:"tooltip-distance",type:Number})],J.prototype,"tooltipDistance",2);a([d({attribute:"tooltip-placement",reflect:!0})],J.prototype,"tooltipPlacement",2);a([d({attribute:"with-markers",type:Boolean})],J.prototype,"withMarkers",2);a([d({attribute:"with-tooltip",type:Boolean})],J.prototype,"withTooltip",2);a([d({attribute:!1})],J.prototype,"valueFormatter",2);J=a([S("wa-slider")],J);var Sw=`:host {
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
`,st=class extends N{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new ie(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),cr(this,{onMove:(n,i)=>{let r=this.orientation==="vertical"?i:n;this.primary==="end"&&(r=this.size-r),this.snap&&this.snap.split(" ").forEach(o=>{let l;o.endsWith("%")?l=this.size*(parseFloat(o)/100):l=parseFloat(o),e&&this.orientation==="horizontal"&&(l=this.size-l),r>=l-this.snapThreshold&&r<=l+this.snapThreshold&&(r=l)}),this.position=Z(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const n=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&this.orientation==="horizontal"||t.key==="ArrowUp"&&this.orientation==="vertical")&&(e-=n),(t.key==="ArrowRight"&&this.orientation==="horizontal"||t.key==="ArrowDown"&&this.orientation==="vertical")&&(e+=n),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=Z(e,0,100)}}handleResize(t){const{width:e,height:n}=t[0].contentRect;this.size=this.orientation==="vertical"?n:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new nd)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",e=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",n=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",i=`
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
        tabindex=${U(this.disabled?void 0:"0")}
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
    `}};st.css=Sw;a([$(".divider")],st.prototype,"divider",2);a([d({type:Number,reflect:!0})],st.prototype,"position",2);a([d({attribute:"position-in-pixels",type:Number})],st.prototype,"positionInPixels",2);a([d({reflect:!0})],st.prototype,"orientation",2);a([d({type:Boolean,reflect:!0})],st.prototype,"disabled",2);a([d()],st.prototype,"primary",2);a([d()],st.prototype,"snap",2);a([d({type:Number,attribute:"snap-threshold"})],st.prototype,"snapThreshold",2);a([L("position")],st.prototype,"handlePositionChange",1);a([L("positionInPixels")],st.prototype,"handlePositionInPixelsChange",1);a([L("vertical")],st.prototype,"handleVerticalChange",1);st=a([S("wa-split-panel")],st);var $w=`:host {
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
`,Oe=class extends ge{constructor(){super(...arguments),this.hasSlotController=new vt(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,Ns()]}get value(){return this._value??"on"}set value(t){this._value=t}firstUpdated(t){super.firstUpdated(t),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(t){super.willUpdate(t),t.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(t.has("value")||t.has("checked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}setValue(t,e){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(t??"on",e)}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,e=this.hint?!0:!!t;return f`
      <label
        part="base"
        class=${j({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${U(this.value)}
          .checked=${xi(this.checked)}
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
        class=${j({"has-slotted":e})}
        aria-hidden=${e?"false":"true"}
        >${this.hint}</slot
      >
    `}};Oe.shadowRootOptions={...ge.shadowRootOptions,delegatesFocus:!0};Oe.css=[hn,Je,$w];a([$('input[type="checkbox"]')],Oe.prototype,"input",2);a([d()],Oe.prototype,"title",2);a([d({reflect:!0})],Oe.prototype,"name",2);a([d({reflect:!0})],Oe.prototype,"value",1);a([d({reflect:!0})],Oe.prototype,"size",2);a([d({type:Boolean})],Oe.prototype,"disabled",2);a([d({type:Boolean,attribute:!1})],Oe.prototype,"checked",2);a([d({type:Boolean,attribute:"checked",reflect:!0})],Oe.prototype,"defaultChecked",2);a([d({reflect:!0})],Oe.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Oe.prototype,"required",2);a([d({attribute:"hint"})],Oe.prototype,"hint",2);a([d({attribute:"with-hint",type:Boolean})],Oe.prototype,"withHint",2);a([L("defaultChecked")],Oe.prototype,"handleDefaultCheckedChange",1);a([L(["checked"])],Oe.prototype,"handleStateChange",1);a([L("disabled",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleDisabledChange",1);Oe=a([S("wa-switch")],Oe);var Aw=class extends Event{constructor(t){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},_w=class extends Event{constructor(t){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Tw=`:host {
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
`,wt=class extends N{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ie(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(n=>!["aria-labelledby","aria-controls"].includes(n.attributeName))&&setTimeout(()=>this.setAriaLabels());const e=t.filter(n=>n.target.closest("wa-tab-group")===this);if(e.some(n=>n.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(n=>n.attributeName==="active")){const i=e.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="wa-tab").map(r=>r.target).find(r=>r.active);i&&i.closest("wa-tab-group")===this&&this.setActiveTab(i)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,n)=>{if(e[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const i=this.tabs.find(r=>r.panel===this.active);i&&this.setActiveTab(i)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});n.unobserve(e[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const n=t.target.closest("wa-tab");n?.closest("wa-tab-group")===this&&n!==null&&this.setActiveTab(n,{scrollBehavior:"smooth"})}handleKeyDown(t){const n=t.target.closest("wa-tab");if(n?.closest("wa-tab-group")===this){if(["Enter"," "].includes(t.key)){n!==null&&(this.setActiveTab(n,{scrollBehavior:"smooth"}),t.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.tabs.find(l=>l.matches(":focus")),s=this.localize.dir()==="rtl";let o=null;if(r?.tagName.toLowerCase()==="wa-tab"){if(t.key==="Home")o=this.focusableTabs[0];else if(t.key==="End")o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const l=this.tabs.findIndex(c=>c===r);o=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const l=this.tabs.findIndex(c=>c===r);o=this.findNextFocusableTab(l,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===o?0:-1}),["top","bottom"].includes(this.placement)&&Zo(o,this.nav,"horizontal"),t.preventDefault()}}}}findNextFocusableTab(t,e){let n=null;const i=e==="forward"?1:-1;let r=t+i;for(;t<this.tabs.length;){if(n=this.tabs[r]||null,n===null){e==="forward"?n=this.focusableTabs[0]:n=this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;r+=i}return n}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t.closest("wa-tab-group")===this&&t!==this.activeTab&&!t.disabled){const n=this.activeTab;this.active=t.panel,this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>i.active=i.name===this.activeTab?.panel),["top","bottom"].includes(this.placement)&&Zo(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(n&&this.dispatchEvent(new Aw({name:n.panel})),this.dispatchEvent(new _w({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(n=>n.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){const t=this.tabs.find(e=>e.panel===this.active);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return f`
      <div
        part="base"
        class=${j({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
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
    `}};wt.css=Tw;a([$(".tab-group")],wt.prototype,"tabGroup",2);a([$(".body")],wt.prototype,"body",2);a([$(".nav")],wt.prototype,"nav",2);a([A()],wt.prototype,"hasScrollControls",2);a([d({reflect:!0})],wt.prototype,"active",2);a([d()],wt.prototype,"placement",2);a([d()],wt.prototype,"activation",2);a([d({attribute:"without-scroll-controls",type:Boolean})],wt.prototype,"withoutScrollControls",2);a([L("active")],wt.prototype,"updateActiveTab",1);a([L("withoutScrollControls",{waitUntilFirstUpdate:!0})],wt.prototype,"updateScrollControls",1);wt=a([S("wa-tab-group")],wt);var Rw=`:host {
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
`,Lw=0,Gt=class extends N{constructor(){super(...arguments),this.attrId=++Lw,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,f`
      <div
        part="base"
        class=${j({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};Gt.css=Rw;a([$(".tab")],Gt.prototype,"tab",2);a([d({reflect:!0})],Gt.prototype,"panel",2);a([d({type:Boolean,reflect:!0})],Gt.prototype,"active",2);a([d({type:Boolean,reflect:!0})],Gt.prototype,"disabled",2);a([d({type:Number,reflect:!0})],Gt.prototype,"tabIndex",2);a([L("active")],Gt.prototype,"handleActiveChange",1);a([L("disabled")],Gt.prototype,"handleDisabledChange",1);Gt=a([S("wa-tab")],Gt);var Ow=`:host {
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
`,Iw=0,$i=class extends N{constructor(){super(...arguments),this.attrId=++Iw,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return f`
      <slot
        part="base"
        class=${j({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};$i.css=Ow;a([d({reflect:!0})],$i.prototype,"name",2);a([d({type:Boolean,reflect:!0})],$i.prototype,"active",2);a([L("active")],$i.prototype,"handleActiveChange",1);$i=a([S("wa-tab-panel")],$i);var Dw=`:host {
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
`,ee=class extends ge{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new vt(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Ns()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const t=this.input.value;this.value=t}})}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.checkValidity()}handleChange(t){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(t){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const t=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${t}px`}if(this.input.style.height){const t=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${t}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(t){t.has("resize")&&this.setTextareaDimensions(),super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,n="none"){this.input.setSelectionRange(t,e,n)}setRangeText(t,e,n,i="preserve"){const r=e??this.input.selectionStart,s=n??this.input.selectionEnd;this.input.setRangeText(t,r,s,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e;return f`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${n?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${U(this.name)}
          .value=${xi(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${U(this.placeholder)}
          rows=${U(this.rows)}
          minlength=${U(this.minlength)}
          maxlength=${U(this.maxlength)}
          autocapitalize=${U(this.autocapitalize)}
          autocorrect=${U(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${U(this.spellcheck)}
          enterkeyhint=${U(this.enterkeyhint)}
          inputmode=${U(this.inputmode)}
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
        class=${j({"has-slotted":i})}
        >${this.hint}</slot
      >
    `}};ee.css=[Dw,hn,Je];a([$(".control")],ee.prototype,"input",2);a([$('[part~="base"]')],ee.prototype,"base",2);a([$(".size-adjuster")],ee.prototype,"sizeAdjuster",2);a([d()],ee.prototype,"title",2);a([d({reflect:!0})],ee.prototype,"name",2);a([A()],ee.prototype,"value",1);a([d({attribute:"value",reflect:!0})],ee.prototype,"defaultValue",2);a([d({reflect:!0})],ee.prototype,"size",2);a([d({reflect:!0})],ee.prototype,"appearance",2);a([d()],ee.prototype,"label",2);a([d({attribute:"hint"})],ee.prototype,"hint",2);a([d()],ee.prototype,"placeholder",2);a([d({type:Number})],ee.prototype,"rows",2);a([d({reflect:!0})],ee.prototype,"resize",2);a([d({type:Boolean})],ee.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],ee.prototype,"readonly",2);a([d({reflect:!0})],ee.prototype,"form",2);a([d({type:Boolean,reflect:!0})],ee.prototype,"required",2);a([d({type:Number})],ee.prototype,"minlength",2);a([d({type:Number})],ee.prototype,"maxlength",2);a([d()],ee.prototype,"autocapitalize",2);a([d()],ee.prototype,"autocorrect",2);a([d()],ee.prototype,"autocomplete",2);a([d({type:Boolean})],ee.prototype,"autofocus",2);a([d()],ee.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],ee.prototype,"spellcheck",2);a([d()],ee.prototype,"inputmode",2);a([d({attribute:"with-label",type:Boolean})],ee.prototype,"withLabel",2);a([d({attribute:"with-hint",type:Boolean})],ee.prototype,"withHint",2);a([L("rows",{waitUntilFirstUpdate:!0})],ee.prototype,"handleRowsChange",1);a([L("value",{waitUntilFirstUpdate:!0})],ee.prototype,"handleValueChange",1);ee=a([S("wa-textarea")],ee);function We(t,e,n){return t?e(t):n?.(t)}var zw=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},Pw=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}},Mw=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},Nw=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}},Fw=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}},Uw=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}},Bw=`:host {
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
`,oe=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.dispatchEvent(new Mw);const t=fs(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await ps(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.hidden=!0,this.dispatchEvent(new zw)}isNestedItem(){const t=this.parentElement;return!!t&&oe.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.dispatchEvent(new Nw),this.childrenContainer.hidden=!1;const t=fs(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await ps(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.style.height="auto",this.dispatchEvent(new Pw)}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new Uw)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.dispatchEvent(new Fw)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(e=>oe.isTreeItem(e)&&(t||!e.disabled)):[]}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",e=!this.loading&&(!this.isLeaf||this.lazy);return f`
      <div
        part="base"
        class="${j({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-has-expand-button":e})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${j({"expand-button":!0,"expand-button-visible":e})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${We(this.loading,()=>f` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `)}
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${We(this.selectable,()=>f`
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
                ?checked="${xi(this.selected)}"
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
    `}};oe.css=Bw;a([A()],oe.prototype,"indeterminate",2);a([A()],oe.prototype,"isLeaf",2);a([A()],oe.prototype,"loading",2);a([A()],oe.prototype,"selectable",2);a([d({type:Boolean,reflect:!0})],oe.prototype,"expanded",2);a([d({type:Boolean,reflect:!0})],oe.prototype,"selected",2);a([d({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],oe.prototype,"lazy",2);a([$("slot:not([name])")],oe.prototype,"defaultSlot",2);a([$("slot[name=children]")],oe.prototype,"childrenSlot",2);a([$(".item")],oe.prototype,"itemElement",2);a([$(".children")],oe.prototype,"childrenContainer",2);a([$(".expand-button slot")],oe.prototype,"expandButtonSlot",2);a([L("loading",{waitUntilFirstUpdate:!0})],oe.prototype,"handleLoadingChange",1);a([L("disabled")],oe.prototype,"handleDisabledChange",1);a([L("expanded")],oe.prototype,"handleExpandedState",1);a([L("indeterminate")],oe.prototype,"handleIndeterminateStateChange",1);a([L("selected")],oe.prototype,"handleSelectedChange",1);a([L("expanded",{waitUntilFirstUpdate:!0})],oe.prototype,"handleExpandedChange",1);a([L("expanded",{waitUntilFirstUpdate:!0})],oe.prototype,"handleExpandAnimation",1);a([L("lazy",{waitUntilFirstUpdate:!0})],oe.prototype,"handleLazyChange",1);oe=a([S("wa-tree-item")],oe);var Vw=class extends Event{constructor(t){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},qw=`:host {
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
`;function Gl(t,e=!1){function n(s){const o=s.getChildrenItems({includeDisabled:!1});if(o.length){const l=o.every(h=>h.selected),c=o.every(h=>!h.selected&&!h.indeterminate);s.selected=l,s.indeterminate=!l&&!c}}function i(s){const o=s.parentElement;oe.isTreeItem(o)&&(n(o),i(o))}function r(s){for(const o of s.getChildrenItems())o.selected=e?s.selected||o.selected:!o.disabled&&s.selected,r(o);e&&n(s)}r(t),i(t)}var _n=class extends N{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new ie(this),this.initTreeItem=t=>{t.updateComplete.then(()=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const n=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(n===null?t.append(i):n.hasAttribute("data-default")&&n.replaceWith(i))})})},this.handleTreeChanged=t=>{for(const e of t){const n=[...e.addedNodes].filter(oe.isTreeItem),i=[...e.removedNodes].filter(oe.isTreeItem);n.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),oe.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(t){const n=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(n){const i=n.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Gl(t);else if(this.selection==="single"||t.isLeaf){const i=this.getAllTreeItems();for(const r of i)r.selected=r===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const n=this.selectedItems;(e.length!==n.length||n.some(i=>!e.includes(i)))&&Promise.all(n.map(i=>i.updateComplete)).then(()=>{this.dispatchEvent(new Vw({selection:n}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(r=>["input","textarea"].includes(r?.tagName?.toLowerCase())))return;const e=this.getFocusableItems(),n=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const r=e.findIndex(c=>c.matches(":focus")),s=e[r],o=c=>{const h=e[Z(c,0,e.length-1)];this.focusItem(h)},l=c=>{s.expanded=c};t.key==="ArrowDown"?o(r+1):t.key==="ArrowUp"?o(r-1):n&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?o(r+1):l(!0):n&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!s||s.disabled||s.isLeaf||!s.expanded?o(r-1):l(!1):t.key==="Home"?o(0):t.key==="End"?o(e.length-1):(t.key==="Enter"||t.key===" ")&&(s.disabled||this.selectItem(s))}}handleClick(t){const e=t.target,n=e.closest("wa-tree-item"),i=t.composedPath().some(r=>r?.classList?.contains("expand-button"));!n||n.disabled||e!==this.clickTarget||(i?n.expanded=!n.expanded:this.selectItem(n))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const n of e)n.updateComplete.then(()=>{n.selectable=t});t&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(n=>{n.updateComplete.then(()=>{Gl(n,!0)})}))}get selectedItems(){const t=this.getAllTreeItems(),e=n=>n.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(n=>{if(n.disabled)return!1;const i=n.parentElement?.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||e.has(i))&&e.add(n),!e.has(n)})}render(){return f`
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
    `}};_n.css=qw;a([$("slot:not([name])")],_n.prototype,"defaultSlot",2);a([$("slot[name=expand-icon]")],_n.prototype,"expandedIconSlot",2);a([$("slot[name=collapse-icon]")],_n.prototype,"collapsedIconSlot",2);a([d()],_n.prototype,"selection",2);a([L("selection")],_n.prototype,"handleSelectionChange",1);_n=a([S("wa-tree")],_n);var Hw=`:host {
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
`,ot=class extends N{constructor(){super(...arguments),this.localize=new ie(this),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(t){const e=Na(t),n=[];for(const i of e){let r;if(i.endsWith("%")){const s=parseFloat(i.slice(0,-1));if(!isNaN(s))r=Math.max(0,s/100);else continue}else if(r=parseFloat(i),!isNaN(r))r=Math.max(0,r);else continue;n.push(r)}return[...new Set(n)].sort((i,r)=>i-r)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let t=0,e=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let n=1;n<this.availableZoomLevels.length;n++){const i=Math.abs(this.availableZoomLevels[n]-this.zoom);i<e&&(e=i,t=n)}return t}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}updated(t){if(t.has("zoom")&&this.style.setProperty("--zoom",`${this.zoom}`),t.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){const e=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[e]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[e])}}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}const t=this.getCurrentZoomIndex();t<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[t+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}const t=this.getCurrentZoomIndex();t>0&&(this.zoom=this.availableZoomLevels[t-1])}handleLoad(){this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return f`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${U(this.sandbox??void 0)}
          src=${U(this.src??void 0)}
          srcdoc=${U(this.srcdoc??void 0)}
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
    `}};ot.css=Hw;a([$("#iframe")],ot.prototype,"iframe",2);a([d()],ot.prototype,"src",2);a([d()],ot.prototype,"srcdoc",2);a([d({type:Boolean})],ot.prototype,"allowfullscreen",2);a([d()],ot.prototype,"loading",2);a([d()],ot.prototype,"referrerpolicy",2);a([d()],ot.prototype,"sandbox",2);a([d({type:Number,reflect:!0})],ot.prototype,"zoom",2);a([d({attribute:"zoom-levels"})],ot.prototype,"zoomLevels",2);a([d({type:Boolean,attribute:"without-controls",reflect:!0})],ot.prototype,"withoutControls",2);a([d({type:Boolean,attribute:"without-interaction",reflect:!0})],ot.prototype,"withoutInteraction",2);ot=a([S("wa-zoomable-frame")],ot);var Ww=Object.getOwnPropertyDescriptor,jw=(t,e,n,i)=>{for(var r=i>1?void 0:i?Ww(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};let Qo=class extends Xt{render(){return f`
            <slot></slot>
        `}};Qo.styles=qe`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;Qo=jw([S("k-app")],Qo);var Gw=Object.defineProperty,Xw=Object.getOwnPropertyDescriptor,Ni=(t,e,n,i)=>{for(var r=i>1?void 0:i?Xw(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Gw(e,n,r),r};let Tn=class extends Xt{constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),Se(Nt,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[n]=t.split(":");if(e===`${n}:*`)return!0;const i=e.split(":");if(i.length===2){const r=i[1];if(r==="system.editors"||r===".system.editors")return this.isEditor&&t.startsWith(`${n}:`)}return!1}loadContributions(t){const e=z.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[n]=t.split(":"),i=`${n}:*`,r=z.getContributions(i),s=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const l of o){const c=`${n}:${l}`,h=z.getContributions(c);s.push(...h)}}this.contributions=[...r,...s,...e]}contributionCreator(t){if("command"in t){const e=t,n=!!e.showLabel;return f`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${e.icon} label="${e.label}"></wa-icon>
                    ${n?e.label:""}
                </wa-button>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():tn(e)}else return f`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return f`
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
        `}};Tn.styles=qe`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;Ni([d()],Tn.prototype,"position",2);Ni([d({type:Boolean,attribute:"is-editor"})],Tn.prototype,"isEditor",2);Ni([d({attribute:!1})],Tn.prototype,"partToolbarContent",2);Ni([d({attribute:!1})],Tn.prototype,"partToolbarRenderer",2);Ni([A()],Tn.prototype,"contributions",2);Tn=Ni([S("k-toolbar")],Tn);const vn=()=>new Kw;class Kw{}const So=new WeakMap,yn=Li(class extends Wh{render(t){return F}update(t,[e]){const n=e!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),F}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=So.get(e);n===void 0&&(n=new WeakMap,So.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?So.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Yw=Object.defineProperty,Zw=Object.getOwnPropertyDescriptor,Fi=(t,e,n,i)=>{for(var r=i>1?void 0:i?Zw(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Yw(e,n,r),r};let Rn=class extends Xt{constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=vn(),this.dropdownRef=vn()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),Se(Nt,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[n]=t.split(":");if(e===`${n}:*`)return!0;const i=e.split(":");if(i.length===2){const r=i[1];if(r==="system.editors"||r===".system.editors")return this.isEditor&&t.startsWith(`${n}:`)}return!1}loadContributions(t){const e=z.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[n]=t.split(":"),i=`${n}:*`,r=z.getContributions(i),s=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const l of o){const c=`${n}:${l}`,h=z.getContributions(c);s.push(...h)}}this.contributions=[...r,...s,...e]}getElementFromPoint(t,e){let n=document.elementFromPoint(t,e);if(!n)return null;for(;n;){const i=n.shadowRoot;if(i){const r=i.elementFromPoint(t,e);if(r&&r!==n){n=r;continue}}break}return n}triggerClickUnderCursor(t){const e=this.getElementFromPoint(t.clientX,t.clientY);if(e){const n=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:t.clientX,clientY:t.clientY,screenX:t.screenX,screenY:t.screenY,button:0,buttons:0,detail:1,which:1});e.dispatchEvent(n)}}show(t,e){e&&this.triggerClickUnderCursor(e),this.position=t,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(t,e){return async()=>{this.executeCommand(t,e||{})}}renderContribution(t){if("command"in t){const e=t;return f`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(e.command,e.params)}
                    ?disabled="${e.disabled?.get()}">
                    ${e.icon?f`<wa-icon slot="icon" name=${e.icon}></wa-icon>`:""}
                    ${e.label}
                </wa-dropdown-item>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():tn(e)}return F}render(){if(!this.isOpen)return F;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():F;return f`
            <wa-dropdown 
                ${yn(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${yn(this.anchorRef)}
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
        `}};Rn.styles=qe`
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
    `;Fi([d({type:Boolean,attribute:"is-editor"})],Rn.prototype,"isEditor",2);Fi([d({attribute:!1})],Rn.prototype,"partContextMenuRenderer",2);Fi([A()],Rn.prototype,"contributions",2);Fi([A()],Rn.prototype,"isOpen",2);Fi([A()],Rn.prototype,"position",2);Rn=Fi([S("k-contextmenu")],Rn);class Fa extends Xt{}const Xl=(t,e,n)=>{const i=new Map;for(let r=e;r<=n;r++)i.set(t[r],r);return i},Qw=Li(class extends Oi{constructor(t){if(super(t),t.type!==At.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let i;n===void 0?n=e:e!==void 0&&(i=e);const r=[],s=[];let o=0;for(const l of t)r[o]=i?i(l,o):o,s[o]=n(l,o),o++;return{values:s,keys:r}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,i]){const r=Bh(t),{values:s,keys:o}=this.dt(e,n,i);if(!Array.isArray(r))return this.ut=o,s;const l=this.ut??=[],c=[];let h,u,p=0,g=r.length-1,b=0,w=s.length-1;for(;p<=g&&b<=w;)if(r[p]===null)p++;else if(r[g]===null)g--;else if(l[p]===o[b])c[b]=In(r[p],s[b]),p++,b++;else if(l[g]===o[w])c[w]=In(r[g],s[w]),g--,w--;else if(l[p]===o[w])c[w]=In(r[p],s[w]),Wi(t,c[w+1],r[p]),p++,w--;else if(l[g]===o[b])c[b]=In(r[g],s[b]),Wi(t,r[p],r[g]),g--,b++;else if(h===void 0&&(h=Xl(o,b,w),u=Xl(l,p,g)),h.has(l[p]))if(h.has(l[g])){const k=u.get(o[b]),O=k!==void 0?r[k]:null;if(O===null){const C=Wi(t,r[p]);In(C,s[b]),c[b]=C}else c[b]=In(O,s[b]),Wi(t,r[p],O),r[k]=null;b++}else co(r[g]),g--;else co(r[p]),p++;for(;b<=w;){const k=Wi(t,c[w+1]);In(k,s[b]),c[b++]=k}for(;p<=g;){const k=r[p++];k!==null&&co(k)}return this.ut=o,vc(t,c),tt}}),Jw="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",ev="/assets/jupyter-C78Cpfql.svg",tv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";new MutationObserver(t=>{for(const{addedNodes:e}of t)for(const n of e)n.nodeType===Node.ELEMENT_NODE&&nv(n)});async function nv(t){const e=t instanceof Element?t.tagName.toLowerCase():"",n=e?.startsWith("wa-"),i=[...t.querySelectorAll(":not(:defined)")].map(o=>o.tagName.toLowerCase()).filter(o=>o.startsWith("wa-"));n&&!customElements.get(e)&&i.push(e);const r=[...new Set(i)],s=await Promise.allSettled(r.map(o=>iv(o)));for(const o of s)o.status==="rejected"&&console.warn(o.reason);await new Promise(requestAnimationFrame),t.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function iv(t){if(customElements.get(t))return Promise.resolve();const e=t.replace(/^wa-/i,""),n=Kp(`components/${e}/${e}.js`);return new Promise((i,r)=>{import(n).then(()=>i()).catch(()=>r(new Error(`Unable to autoload <${t}> from ${n}`)))})}lf("k",{resolver:t=>new URL(Object.assign({"../icons/js.svg":Jw,"../icons/jupyter.svg":ev,"../icons/python.svg":tv})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});var rv=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,_r=(t,e,n,i)=>{for(var r=i>1?void 0:i?sv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&rv(e,n,r),r};let Zn=class extends Cr{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const t=this.name.trim().split(/ +/),e=t.pop(),n=t.pop();return f`
            <wa-icon library="${n||F}" variant="${this.variant||F}"
                         family="${this.family||F}" name=${e} label="${this.label||this.name||F}"></wa-icon>`}};Zn.styles=qe`
        :host {
            display: contents;
        }
    `;_r([d()],Zn.prototype,"name",2);_r([d()],Zn.prototype,"family",2);_r([d()],Zn.prototype,"variant",2);_r([d()],Zn.prototype,"label",2);Zn=_r([S("k-icon")],Zn);var ov=Object.defineProperty,av=(t,e,n,i)=>{for(var r=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(e,n,r)||r);return r&&ov(e,n,r),r};class ft extends Fa{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return F}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return F}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,gr.set(null),gr.set(this),mt.set(null),mt.set(this)}}av([d()],ft.prototype,"dirty");const lv="app-toolbars-main",Ui="app-toolbars-main-right",cv="app-toolbars-main-center",vd="app-toolbars-bottom",Ua="app-toolbars-bottom-center",js="app-toolbars-bottom-end",Bn="editor-area-main",Jo="sidebar-main",dv="sidebar-main-bottom",yd="sidebar-auxiliary",hv="panel-bottom",uv=!1;var xd=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(xd||{});class pv{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,Mo.set(this.updateCounter)}run(e,n){const i=this.createProgressMonitor(e);try{this.tasks.push(i),this.notifyUpdate(),n(i)}finally{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()}}async runAsync(e,n){const i=this.createProgressMonitor(e);return this.tasks.push(i),this.notifyUpdate(),n(i).finally(()=>{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()})}createProgressMonitor(e){const n={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(n,{set:(i,r,s)=>(i[r]=s,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const Gs=new pv;Xe.put("taskService",Gs);const rr="events/extensionsregistry/extensionsConfigChanged",Qi="extensions",Kl="extensions.external";class fv{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,Se(gn,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then(async()=>{const e=this.extensionsSettings?.filter(n=>this.isEnabled(n.id)).map(n=>this.load(n.id).catch(i=>{xe("Extension could not be loaded: "+i.message)}))||[];await Promise.all(e)})})}async loadPersistedExternalExtensions(){try{const e=await de.get(Kl);e&&Array.isArray(e)&&(e.forEach(n=>{this.extensions[n.id]=n}),Y.debug(`Loaded ${e.length} persisted external extensions`))}catch(e){Y.error(`Failed to load persisted external extensions: ${e}`)}}async savePersistedExternalExtensions(){try{const e=Object.values(this.extensions).filter(n=>n.external);await de.set(Kl,e)}catch(e){Y.error(`Failed to save persisted external extensions: ${e}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await de.get(Qi),this.extensionsSettings||(await de.set(Qi,[]),this.extensionsSettings=await de.get(Qi)),te(rr,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e,e.external&&this.savePersistedExternalExtensions().catch(n=>{Y.error(`Failed to persist external extension: ${n}`)}),te(rr,this.extensionsSettings)}getExtensions(){return Object.values(this.extensions)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(n=>n.id===e&&n.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,n=!1){this.isEnabled(e)||(Y.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,n)}).catch(i=>{Y.error(`Could not load extension: ${e}: ${i}`)}))}async load(e,n=[]){if(this.loadedExtensions.has(e))return;const i=this.loadingPromises.get(e);if(i)return i;if(n.includes(e)){const o=[...n,e].join(" → ");throw new Error(`Circular dependency detected: ${o}`)}const r=this.extensions[e];if(!r)throw new Error("Extension not found: "+e);const s=(async()=>{try{if(r.dependencies&&r.dependencies.length>0){Y.debug(`Loading dependencies for ${e}: ${r.dependencies.join(", ")}`);const l=[...n,e];for(const c of r.dependencies)await this.load(c,l),this.isEnabled(c)||(await this.updateEnablementAsync(c,!0,!1),Y.debug(`Auto-enabled dependency: ${c}`))}const o=await Gs.runAsync("Loading extension: "+r.name,async()=>{if(r.loader)return r.loader();if(r.url){let l=r.url;const{GitHubExtensionLoader:c}=await se(async()=>{const{GitHubExtensionLoader:h}=await import("./github-extension-loader-BMVCpzTL.js");return{GitHubExtensionLoader:h}},__vite__mapDeps([0,1]));if(c.isGitHubUrl(l))try{l=await c.resolveExtensionUrl(l),Y.debug(`Resolved GitHub URL to CDN: ${r.url} -> ${l}`)}catch(h){throw Y.error(`Failed to resolve GitHub URL ${r.url}: ${h}`),new Error(`Failed to resolve GitHub extension URL: ${h}`)}if(l?.endsWith(".vsix")){const{vsixExtensionLoader:h}=await se(async()=>{const{vsixExtensionLoader:w}=await import("./vsix-extension-loader-_6bonKdo.js");return{vsixExtensionLoader:w}},__vite__mapDeps([2,3])),{openVSXClient:u}=await se(async()=>{const{openVSXClient:w}=await Promise.resolve().then(()=>v0);return{openVSXClient:w}},void 0),p=r.id,[g,b]=p.split(".");if(g&&b)try{const w=await u.getExtension(g,b);await h.loadFromOpenVSX(w)}catch(w){Y.warn(`Could not fetch Open VSX metadata for ${p}, loading from URL: ${w}`),await h.loadFromUrl(l)}else await h.loadFromUrl(l);return{default:()=>{}}}return import(l)}});if(this.loadedExtensions.add(e),o?.default instanceof Function){Y.debug(`Executing extension function for: ${e}`);try{o?.default(Di.getProxy()),Y.debug(`Extension function executed successfully: ${e}`)}catch(l){throw Y.error(`Error executing extension function for ${e}: ${l}`),l}}else Y.warn(`Extension ${e} does not export a default function`);Y.debug(`Extension loaded: ${e}`)}catch(o){throw this.loadedExtensions.delete(e),o}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,s),s}disable(e,n=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,n)}updateEnablement(e,n,i){this.checkExtensionsConfig().then(()=>{const r=this.extensionsSettings?.find(s=>s.id==e);r?r.enabled=n:this.extensionsSettings?.push({id:e,enabled:n}),de.set(Qi,this.extensionsSettings).then(()=>{if(i){const s=this.extensions[e];Ut(n?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}te(rr,this.extensionsSettings)})})}async updateEnablementAsync(e,n,i){await this.checkExtensionsConfig();const r=this.extensionsSettings?.find(s=>s.id==e);if(r?r.enabled=n:this.extensionsSettings?.push({id:e,enabled:n}),await de.set(Qi,this.extensionsSettings),i){const s=this.extensions[e];Ut(n?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}te(rr,this.extensionsSettings)}}Y.debug("ExtensionRegistry initializing...");const M=new fv;Xe.put("extensionRegistry",M);Y.debug("ExtensionRegistry initialized");const B=dn("AppLoader");function Dn(t){return t instanceof Error?t.message:String(t)}function mv(t){try{const n=new URL(t).pathname.split("/").filter(Boolean);return n.length>0?n[n.length-1]:void 0}catch{const e=t.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function gv(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const n=e[0];if(!(!n||n==="index.html"||n.endsWith(".html")))return n}const ur=class ur{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(e,n){this.apps.has(e.id)&&B.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),B.info(`Registered app: ${e.name} (${e.id}) v${e.version}`),n?.defaultAppId&&(this.defaultAppId=n.defaultAppId),n?.container&&(this.container=n.container),n?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(e){this.systemRequiredExtensions.add(e)}async loadExtensionFromUrl(e){B.info(`Loading extension from URL: ${e}...`);try{const n=`url:${e}`;if(M.isEnabled(n)){B.info(`Extension from URL ${e} is already enabled`);return}const i={id:n,name:`Extension from ${e}`,description:`Extension loaded from URL: ${e}`,url:e};M.registerExtension(i),B.info(`Registered extension from URL: ${n}`),M.enable(n,!1),B.info(`Successfully enabled extension from URL: ${e}`)}catch(n){throw B.error(`Failed to load extension from URL ${e}: ${Dn(n)}`),n}}async loadAppFromUrl(e){B.info(`Loading app from URL: ${e}...`);try{const n=await import(e);if(!n.default)throw new Error(`Module at ${e} does not have a default export`);const i=n.default;if(!i.id||!i.name||!i.version)throw new Error(`Module at ${e} does not export a valid AppDefinition`);return B.info(`Successfully loaded app definition from URL: ${i.name} (${i.id})`),i}catch(n){throw B.error(`Failed to load app from URL ${e}: ${Dn(n)}`),n}}async start(){if(this.started){B.debug("AppLoader already started");return}this.started=!0,B.info("Starting AppLoader...");const e=new URLSearchParams(window.location.search),n=e.get("app"),i=e.get("appId"),r=gv(),s=this.apps.size;let o;if(n&&(o=mv(n),o&&B.info(`Extracted app ID from URL path: ${o}`)),r&&B.info(`Extracted app ID from current page path: ${r}`),n)try{B.info(`URL parameter 'app' found: ${n}, attempting to load extension or app`);try{await this.loadExtensionFromUrl(n),B.info(`Successfully loaded extension from URL: ${n}`)}catch(c){B.info(`Failed to load as extension, trying as app definition: ${Dn(c)}`);try{const h=await this.loadAppFromUrl(n);this.registerApp(h),await this.loadApp(h.id,this.container),B.info(`Successfully loaded app from URL: ${n}`);return}catch(h){throw B.error(`Failed to load from URL as both extension and app: ${Dn(h)}`),h}}}catch(c){B.error(`Failed to load from URL parameter, falling back to default app: ${Dn(c)}`)}const l=await this.selectAppToLoad({appIdFromUrl:i,appIdFromPath:r,appIdFromAppUrl:o,appsBeforeExtension:s});if(!l)throw new Error("No apps registered");await this.loadApp(l,this.container)}async loadApp(e,n){const i=this.apps.get(e);if(!i)throw new Error(`App '${e}' not found. Make sure it's registered.`);B.info(`Loading app: ${i.name}...`),this.currentApp&&(B.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(B.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(s=>{M.disable(s)}))),i.contributions&&(B.info("Registering app contributions..."),i.contributions.ui&&(i.contributions.ui.forEach(s=>{const o=s.target;o&&z.registerContribution(o,s)}),B.info(`Registered ${i.contributions.ui.length} UI contributions`)),i.contributions.extensions&&(i.contributions.extensions.forEach(s=>{M.registerExtension(s)}),B.info(`Registered ${i.contributions.extensions.length} app extensions`)));const r=new Set(i.extensions||[]);this.systemRequiredExtensions.forEach(s=>r.add(s)),i.extensions=Array.from(r),i.extensions.length>0&&(B.info(`Enabling ${i.extensions.length} extensions...`),i.extensions.forEach(s=>{M.enable(s)})),i.initialize&&(B.info(`Initializing ${i.name}...`),await i.initialize()),this.currentApp=i,B.info(`App ${i.name} loaded successfully`),this.updateDocumentMetadata(i),n&&this.renderApp(n),window.dispatchEvent(new CustomEvent("app-loaded",{detail:{appId:i.id}}))}updateDocumentMetadata(e){if(document.title=e.name,e.metadata?.favicon){const n=e.metadata.favicon;let i=document.querySelector("link[rel*='icon']");i||(i=document.createElement("link"),i.rel="icon",document.head.appendChild(i)),i.type="image/svg+xml",i.href=n}}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const n=this.currentApp.render?this.currentApp.render():f`<k-standard-app></k-standard-app>`;Et(n,e),B.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}async getPreferredAppId(){try{return await de.get(ur.PREFERRED_APP_KEY)}catch(e){B.debug(`Failed to get preferred app ID from settings: ${Dn(e)}`);return}}async setPreferredAppId(e){if(!this.apps.has(e))throw new Error(`App '${e}' not found. Make sure it's registered.`);try{await de.set(ur.PREFERRED_APP_KEY,e),this.defaultAppId=e,B.info(`Set preferred app to: ${e}`)}catch(n){throw B.error(`Failed to persist preferred app ID: ${Dn(n)}`),n}}async selectAppToLoad(e){const{appIdFromUrl:n,appIdFromPath:i,appIdFromAppUrl:r,appsBeforeExtension:s}=e;if(n){if(this.apps.has(n))return B.info(`Loading app specified by URL parameter 'appId': ${n}`),n;B.warn(`App ID '${n}' from URL parameter not found`)}if(i){if(this.apps.has(i))return B.info(`Loading app from URL path: ${i}`),i;B.debug(`App ID '${i}' from URL path not found, continuing search`)}if(r&&this.apps.has(r))return B.info(`Loading app using ID extracted from app URL path: ${r}`),r;if(this.apps.size>s){const c=Array.from(this.apps.values()).slice(s);if(c.length>0){const h=c[0];return B.info(`Loading app registered by extension: ${h.name} (${h.id})`),h.id}}const o=await this.getPreferredAppId();if(o&&this.apps.has(o))return B.info(`Loading preferred app from settings: ${o}`),o;if(this.defaultAppId){if(this.apps.has(this.defaultAppId))return this.defaultAppId;B.warn(`Default app '${this.defaultAppId}' not found`)}const l=this.getRegisteredApps();if(l.length>0){const c=l[0];return B.info(`Loading first registered app: ${c.name} (${c.id})`),c.id}}};ur.PREFERRED_APP_KEY="preferredAppId";let ea=ur;const ye=new ea;Xe.put("appLoaderService",ye);var bv=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,kd=(t,e,n,i)=>{for(var r=i>1?void 0:i?wv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&bv(e,n,r),r};let xs=class extends Fa{constructor(){super(...arguments),this.contributions=[],this.tabGroup=vn(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(e),this.setupToolbarResizeObserver(e)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&(this.updateToolbarFromComponent(n),requestAnimationFrame(()=>this.updateToolbarHeightVariable(n)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&this.updateContextMenuFromComponent(n)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,n=e.closest("wa-tab");if(n){const o=n.getAttribute("panel");if(o){const l=this.getTabPanel(o);if(l){const c=l.querySelector(".tab-content");if(c&&c.firstElementChild){const h=c.firstElementChild;h instanceof ft&&mt.set(h)}}}return}const i=e.closest("wa-scroller.tab-content");if(!i)return;const r=i.closest("wa-tab-panel");if(!r)return;const s=r.querySelector(".tab-content");if(s&&s.firstElementChild){const o=s.firstElementChild;o instanceof ft&&mt.set(o)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,n=e.target.closest("wa-scroller.tab-content");if(!n)return;e.preventDefault();const i=n.closest("wa-tab-panel");i&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(i);const r=i.querySelector("k-contextmenu");r&&r.show({x:e.clientX,y:e.clientY},e)})}))}),Se(Nt,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===Bn;this.contributions.forEach(n=>{const i=this.getTabPanel(n.name);if(!i)return;const r=i.querySelector(".tab-content");if(r&&r.firstElementChild){const s=r.firstElementChild;s instanceof ft&&(s.tabContribution=n,s.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(i))})}}has(t){return this.tabGroup.value?!!this.getTabPanel(t):!1}activate(t){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(t){if(this.contributions.find(n=>n.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const n=this.getTabPanel(t.name);if(n){const i=n.querySelector(".tab-content");if(i&&i.firstElementChild){const r=i.firstElementChild;r instanceof ft&&(r.tabContribution=t,r.isEditor=this.containerId===Bn)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(n),this.updateToolbarHeightVariable(n),this.setupToolbarResizeObserver(n)})}})}handleTabAuxClick(t,e){t.button===xd.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await Ms("Unsaved changes will be lost: Do you really want to close?"))return;const n=this.getTabPanel(e);if(!n)return;const i=this.contributions.find(s=>s.name===e);if(!i)return;this.cleanupTabInstance(n);const r=this.contributions.indexOf(i);r>-1&&this.contributions.splice(r,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:n})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=z.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=this.resizeObservers.get(t);e&&(e.disconnect(),this.resizeObservers.delete(t));const n=t.querySelector(".tab-content");if(n&&n.firstElementChild){const i=n.firstElementChild;"close"in i&&typeof i.close=="function"&&i.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`):null}getTab(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`):null}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof ft)||!n.renderToolbar)return;const i=t.querySelector("k-toolbar");i&&(i.partToolbarRenderer=()=>n.renderToolbar(),i.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof ft)||!n.renderContextMenu)return;const i=t.querySelector("k-contextmenu");i&&(i.partContextMenuRenderer=()=>n.renderContextMenu(),i.requestUpdate())}updateToolbarHeightVariable(t){const e=t.querySelector(".tab-toolbar");if(!e)return;const n=e.offsetHeight;t.style.setProperty("--toolbar-height",`${n}px`)}setupToolbarResizeObserver(t){if(this.resizeObservers.has(t))return;const e=t.querySelector(".tab-toolbar");if(!e)return;const n=new ResizeObserver(()=>{this.updateToolbarHeightVariable(t)});n.observe(e),this.resizeObservers.set(t,n)}render(){const t=ye.getCurrentApp();return f`
            <wa-tab-group ${yn(this.tabGroup)}>
                ${We(this.contributions.length===0,()=>f`
                        <div class="empty-state">
                            ${We(t,()=>f`
                                    <div class="empty-content">
                                        <h2 class="empty-title">${t.name}</h2>
                                        ${We(t.description,()=>f`<p class="empty-description">${t.description}</p>`)}
                                    </div>
                                `,()=>f`
                                    <wa-icon name="folder-open" class="empty-icon"></wa-icon>
                                `)}
                        </div>
                    `,()=>Qw(this.contributions,e=>e.name,e=>f`
                            <wa-tab panel="${e.name}"
                                    @auxclick="${n=>this.handleTabAuxClick(n,e)}">
                                <k-icon name="${e.icon}"></k-icon>
                                ${e.label}
                                ${We(e.closable,()=>f`
                                    <wa-icon name="xmark" label="Close"  @click="${n=>this.closeTab(n,e.name)}"></wa-icon>
                                `)}
                            </wa-tab>
                            <wa-tab-panel name="${e.name}">
                                <k-toolbar id="toolbar:${e.editorId??e.name}" 
                                           class="tab-toolbar"
                                           ?is-editor="${this.containerId===Bn}"></k-toolbar>
                                <wa-scroller class="tab-content" orientation="vertical">
                                    ${e.component?e.component(e.name):F}
                                </wa-scroller>
                                <k-contextmenu id="contextmenu:${e.name}"
                                               ?is-editor="${this.containerId===Bn}"></k-contextmenu>
                            </wa-tab-panel>
                        `))}
            </wa-tab-group>
        `}};xs.styles=qe`
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
    `;kd([A()],xs.prototype,"contributions",2);xs=kd([S("k-tabs")],xs);var vv=Object.defineProperty,yv=Object.getOwnPropertyDescriptor,Tr=(t,e,n,i)=>{for(var r=i>1?void 0:i?yv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&vv(e,n,r),r};let Ai=class extends Xt{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=t=>{if(!this.resizing)return;const n=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,i=[...this.resizing.startSizes];i[this.resizing.handleIndex]+=n,i[this.resizing.handleIndex+1]-=n;const r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=r*.05;if(i[this.resizing.handleIndex]>=s&&i[this.resizing.handleIndex+1]>=s){this.resizing.currentSizes=i;const o=i.map((l,c)=>{const u=`${(l/r*100).toFixed(2)}%`;return c===i.length-1?u:`${u} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=o:this.style.gridTemplateRows=o}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const t=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/t*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,n)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${n*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${n*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const n=this.orientation==="horizontal"?t.clientX:t.clientY,i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,r=this.gridSizes.map(s=>s.endsWith("%")?parseFloat(s)/100*i:(s.endsWith("px"),parseFloat(s)));this.resizing={handleIndex:e,startPos:n,startSizes:r},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return F;const t=this.gridSizes.flatMap((e,n)=>n===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",f`
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
                    `}return F})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Tr([d()],Ai.prototype,"orientation",2);Tr([d()],Ai.prototype,"sizes",2);Tr([A()],Ai.prototype,"gridSizes",2);Tr([A()],Ai.prototype,"gridChildren",2);Ai=Tr([S("k-resizable-grid")],Ai);const Rt="events/filesys/workspaceChanged",_i="events/filesys/workspaceConnected";class ks{constructor(){this.state={}}getWorkspacePath(){const e=[];let n=this;for(;n;)e.push(n.getName()),n=n.getParent();return e.reverse(),e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const n=e.getParent();if(n)e=n;else break}return e}}var xv=(t=>(t[t.TEXT=0]="TEXT",t[t.BINARY=1]="BINARY",t))(xv||{});class cn extends ks{}class mi extends ks{}class Yl extends cn{constructor(e,n){super(),this.fileHandle=e,this.parent=n}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const n=await this.fileHandle.getFile();return!e||e?.contentType==0?await n.text():e?.encoding==0||e?.uri?URL.createObjectURL(n):e?.blob?n:n.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(e,n){const i=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(i);else{const r=i.getWriter();try{await r.write(e)}finally{await r.close()}}}async copyTo(e){const n=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(n)}async rename(e){const n=this.getParent();if(!n)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(i){throw i.name==="NotAllowedError"||i.message?.includes("not allowed")||i.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):i}await n.listChildren(!0),te(Rt,this.getWorkspace())}}}class Jt extends mi{constructor(e,n){super(),this.dirHandle=e,this.parent=n}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const n={};try{for await(const i of this.dirHandle.values()){const s=i.kind==="file"?new Yl(i,this):new Jt(i,this);n[s.getName()]=s}}catch(i){if(i.name==="NotFoundError")return this.files={},[];throw i}return this.files=n,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,n){if(!e)throw new Error("No path provided");const i=e.split("/");let r=this,s=!1;try{for(let o=0;o<i.length;o++){let l=i[o];if(l&&(l=l.trim()),!l)break;if(r instanceof Jt){if(await r.listChildren(),!r.files)return null;const c=r.files[l];if(c)r=c;else if(n?.create)if(s=!0,o<i.length-1)try{const h=await r.dirHandle.getDirectoryHandle(l,{create:!0}),u=new Jt(h,r);r.files[l]=u,r=u,r instanceof Jt&&await r.listChildren();continue}catch(h){throw h.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${i.slice(0,o+1).join("/")}`):h}else try{const h=await r.dirHandle.getFileHandle(l,{create:!0}),u=new Yl(h,r);return r.files[l]=u,u}catch(h){throw h.name==="NotFoundError"?new Error(`File not found or not accessible: ${i.join("/")}`):h}else return null}}}finally{s&&te(Rt,this.getWorkspace())}return r}touch(){te(Rt,this.getWorkspace())}async delete(e,n=!0){if(!e){const i=this.getParent();return i instanceof Jt&&(await i.listChildren(),i.files&&delete i.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,i?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:n}).then(async()=>{this.files&&delete this.files[e],te(Rt,this.getWorkspace())})}async copyTo(e){for(const n of await this.listChildren()){const i=[e,n.getName()].join("/");await n.copyTo(i)}}async rename(e){const n=this.getParent();if(!n)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(i){throw i.name==="NotAllowedError"||i.message?.includes("not allowed")||i.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):i}await n.listChildren(!0),te(Rt,this.getWorkspace())}}}class kv{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(e=>{e&&te(_i,e)})}registerContribution(e){this.contributions.set(e.type,e),console.log(`Workspace contribution registered: ${e.name} (${e.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const e=await kt.getObject("workspace_data");if(!e)return;const n=this.contributions.get(e.type);if(!n){console.warn(`No contribution found for workspace type: ${e.type}`);return}try{if(n.restore){const i=await n.restore(e.data);return i&&(this.currentType=e.type),i}}catch(i){console.error(`Failed to restore workspace of type ${e.type}:`,i)}}async connectWorkspace(e){const n=Array.from(this.contributions.values()).find(o=>o.canHandle(e));if(!n)throw new Error("No workspace contribution can handle this input");const i=await n.connect(e),r=n.persist?await n.persist(i):e,s={type:n.type,data:r};return await kt.persistObject("workspace_data",s),this.currentType=n.type,this.workspace=Promise.resolve(i),te(_i,i),i}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await kt.persistObject("workspace_data",null),await kt.persistObject("workspace",null)}}const yt=new kv;Xe.put("workspaceService",yt);yt.registerContribution({type:"filesystem",name:"Local File System",canHandle(t){return t&&"kind"in t&&t.kind==="directory"},async connect(t){return new Jt(t)},async restore(t){if(t&&"kind"in t&&t.kind==="directory")return new Jt(t,void 0)},async persist(t){return t instanceof Jt?t.getHandle():null}});const Zl=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);class Ev{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,this.cachedIconContributions=null,Se(_i,()=>{}),Se(Nt,e=>{e.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const e=z.getContributions("system.icons");return this.cachedIconContributions=[...e].sort((n,i)=>{const r=n.priority??0,s=i.priority??0;return s!==r?s-r:n.label.localeCompare(i.label)}),this.cachedIconContributions}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const n=s=>{const o=s.detail;o&&Array.from(o.querySelectorAll("*")).filter(c=>c instanceof ft).forEach(c=>{mt.set(c),c.isEditor&&Lt.set(c)})};e.addEventListener("tab-shown",n);const i=s=>{const o=s.detail;Array.from(o.querySelectorAll("*")).filter(c=>c instanceof ft).forEach(c=>{mt.get()==c&&mt.set(null),Lt.get()==c&&Lt.set(null)})};e.addEventListener("tab-closed",i);const r=s=>{const l=s.closest("wa-tab-panel").getAttribute("name");e.markDirty(l,s.isDirty())};this.signalCleanup=wi(gr,r)}registerEditorInputHandler(e){this.editorInputHandlers.push({definition:e,initialized:!1}),this.editorInputHandlers.sort((n,i)=>{const r=n.definition.ranking??0;return(i.definition.ranking??0)-r})}async ensureHandlerInitialized(e){const n=e.definition;!n.lazyInit||e.initialized||(e.lazyInitPromise||(e.lazyInitPromise=Promise.resolve(n.lazyInit()).then(()=>{e.initialized=!0,e.lazyInitPromise=void 0}).catch(i=>{throw e.lazyInitPromise=void 0,i})),await e.lazyInitPromise)}async handleInput(e){for(let n=0;n<this.editorInputHandlers.length;n++){const i=this.editorInputHandlers[n],r=i.definition;if(r.canHandle(e))return await this.ensureHandlerInitialized(i),await r.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${Bn}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const n=this.getEditorArea();if(!n){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(n),n.has(e.key)){n.activate(e.key);return}n.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}getFileIcon(e){const n=e.includes(".")?e.split(".").pop()?.toLowerCase()||"":e.toLowerCase(),i=this.getSortedIconContributions();if(i.length===0)return"file";for(const r of i)if(r.mappings&&r.mappings[n])return r.mappings[n];return"file"}}const Bi=new Ev;Xe.put("editorRegistry",Bi);z.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});var Cv=Object.defineProperty,Sv=Object.getOwnPropertyDescriptor,Ed=(t,e,n,i)=>{for(var r=i>1?void 0:i?Sv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Cv(e,n,r),r};const et=Qn("filebrowser");let Es=class extends ft{constructor(){super(...arguments),this.treeRef=vn(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),Se(Nt,t=>{t.target==="system.icons"&&this.requestUpdate()}),this.subscribe(Rt,t=>this.onWorkspaceChanged(t)),this.subscribe(_i,t=>this.onWorkspaceConnected(t))}firstUpdated(t){super.firstUpdated(t),this.setupDragAndDrop()}updated(t){super.updated(t),t.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const t=await yt.getWorkspace();t?await this.loadWorkspace(t):Te.execute("help")}renderToolbar(){const t=zn.get()instanceof ks;return f`
            <k-command icon="folder-open" title="${et("CONNECT_WORKSPACE")}" dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="${et("RELOAD_WORKSPACE")}"></k-command>
            <k-command cmd="create_file" icon="plus" title="${et("CREATE_NEW")}" dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t} title="${et("RENAME_RESOURCE")}"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t} title="${et("DELETE_RESOURCE")}"></k-command>
        `}renderContextMenu(){const t=zn.get()instanceof ks;return f`
            <k-command cmd="open_editor" icon="folder-open">${et("OPEN")}</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">${et("CREATE_NEW")}</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t}>${et("RENAME")}</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t}>${et("DELETE")}</k-command>
        `}async onWorkspaceChanged(t){zn.set(void 0),await this.loadWorkspace(t),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t,!0):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&zn.set(e[0].model?.data)}async resourceToTreeNode(t,e=!1){const n=t instanceof cn,i={data:t,label:t.getName(),leaf:n,children:[]};if(t instanceof mi&&e){for(const r of await t.listChildren(!1)){const s=await this.resourceToTreeNode(r,!1);i.children.push(s)}i.children.sort(Zl)}return i}createTreeItems(t,e=!1){if(!t)return f``;const n=!t.leaf&&t.children.length===0,i=t.data,r=i instanceof cn,s=r?Bi.getFileIcon(i.getName()):t.icon||"folder-open";return f`
            <wa-tree-item 
                draggable=${r}
                @dragstart=${r?this.nobubble(o=>this.onDragStart(o,i)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(o=>this.onLazyLoad(o,t))}
                .model=${t} 
                ?expanded=${e}
                ?lazy=${n}>
                <span><wa-icon name=${s} label="${t.leaf?et("FILE"):et("FOLDER")}"></wa-icon> ${t.label}</span>
                ${t.children.map(o=>this.createTreeItems(o,!1))}
            </wa-tree-item>`}onDragStart(t,e){if(!t.dataTransfer)return;const n=e.getWorkspacePath(),i=e.getName();if(t.dataTransfer.effectAllowed="copy",t.dataTransfer.setData("text/plain",n),t.dataTransfer.setData("application/x-workspace-file",n),t.dataTransfer.setData("text/uri-list",n),t.dataTransfer.setDragImage){const r=document.createElement("div");r.textContent=i,r.style.position="absolute",r.style.top="-1000px",r.style.padding="4px 8px",r.style.background="var(--wa-color-neutral-10)",r.style.border="1px solid var(--wa-color-neutral-30)",r.style.borderRadius="4px",document.body.appendChild(r),t.dataTransfer.setDragImage(r,0,0),setTimeout(()=>document.body.removeChild(r),0)}}async onLazyLoad(t,e){const n=e.data;n instanceof mi&&e.children.length===0&&await this.loadNodeChildren(e,n)}async loadNodeChildren(t,e){if(!this.loadingNodes.has(t)){this.loadingNodes.add(t);try{for(const n of await e.listChildren(!1)){uv&&n.getName().startsWith(".");const i=await this.resourceToTreeNode(n,!1);t.children.push(i)}t.children.sort(Zl),this.requestUpdate()}catch(n){console.error("Failed to load directory children:",n)}finally{this.loadingNodes.delete(t)}}}async onFileDoubleClicked(t){const n=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:n})}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const n=e[0].model;zn.set(n.data)}else zn.set(void 0)}setupDragAndDrop(){const t=this.treeRef.value;if(!t)return;const e=s=>{if(!s.dataTransfer?.types.includes("Files"))return;s.preventDefault(),s.dataTransfer.dropEffect="copy",t.classList.add("drag-over");const l=s.target.closest("wa-tree-item");l&&l!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=l,l.classList.add("drop-target"))},n=s=>{s.dataTransfer?.types.includes("Files")&&(s.preventDefault(),t.classList.add("drag-over"))},i=s=>{const o=t.getBoundingClientRect(),l=s.clientX,c=s.clientY;(l<=o.left||l>=o.right||c<=o.top||c>=o.bottom)&&(t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},r=async s=>{if(s.preventDefault(),t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!s.dataTransfer||!this.workspaceDir)return;const o=Array.from(s.dataTransfer.files);if(o.length===0)return;const l=await this.getDropTarget(s);await this.handleFilesDrop(o,l)};t.removeEventListener("dragover",e),t.removeEventListener("dragenter",n),t.removeEventListener("dragleave",i),t.removeEventListener("drop",r),t.addEventListener("dragover",e),t.addEventListener("dragenter",n),t.addEventListener("dragleave",i),t.addEventListener("drop",r)}async getDropTarget(t){const n=t.target.closest("wa-tree-item");if(n){const r=n.model.data;if(r instanceof mi)return r;const s=r.getParent();if(s)return s}return this.workspaceDir}async handleFilesDrop(t,e){const n=t.length;let i=0,r=0,s=0;for(const o of t)try{const l=this.buildTargetPath(e,o.name);if(await this.workspaceDir.getResource(l)&&!await Ms(et("FILE_EXISTS_OVERWRITE",{fileName:o.name}))){s++;continue}await(await this.workspaceDir.getResource(l,{create:!0})).saveContents(o),i++}catch(l){console.error(`Failed to upload ${o.name}:`,l),r++}console.log(`Uploaded ${i}/${n} files${s>0?`, ${s} skipped`:""}${r>0?`, ${r} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(t,e){const n=t.getWorkspacePath();return n?`${n}/${e}`:e}render(){return f`
            <div class="tree" ${yn(this.treeRef)} style="--drop-files-text: '${et("DROP_FILES_HERE")}'">
                ${We(!this.workspaceDir,()=>f`
                    <k-no-content message="${et("SELECT_WORKSPACE")}"></k-no-content>`,()=>f`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};Es.styles=qe`
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
    `;Ed([A()],Es.prototype,"root",2);Es=Ed([S("k-filebrowser")],Es);var $v=Object.getOwnPropertyDescriptor,Av=(t,e,n,i)=>{for(var r=i>1?void 0:i?$v(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};const ta=Qn("tasks");z.registerContribution(Ua,{html:"<k-tasks></k-tasks>"});let Ji=null;function Cd(){return Ji||(Ji=document.createElement("div"),Ji.id="progress-dialog-container",document.body.appendChild(Ji)),Ji}function Ql(){return Cd().querySelector("wa-dialog")}function _v(){Sd(!0)}function Sd(t=!1){const e=Cd(),n=Gs.getActiveTasks();if(n.length===0){Et(f``,e);return}const r=Ql();if(!(t||r?.open===!0))return;const o=()=>{const h=Ql();h&&(h.open=!1)},l=()=>{Et(f``,e)},c=f`
        <wa-dialog 
            label="${ta("ACTIVE_TASKS")}" 
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
    `;Et(c,e)}let na=class extends ft{doBeforeUI(){this.watch(Mo,()=>{Sd(),this.requestUpdate()})}handleIndicatorClick(){_v()}render(){Mo.get();const e=Gs.getActiveTasks().length;return e===0?f``:f`
            <div class="task-indicator" @click=${this.handleIndicatorClick} title="${ta("ACTIVE_TASKS_TITLE",{taskCount:e.toString()})}">
                <wa-spinner 
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);" 
                    label="${ta("ACTIVE_TASKS")}"
                ></wa-spinner>
                <span class="task-count">${e}</span>
            </div>
        `}};na.styles=qe`
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
    `;na=Av([S("k-tasks")],na);var Tv=Object.getOwnPropertyDescriptor,Rv=(t,e,n,i)=>{for(var r=i>1?void 0:i?Tv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};const $o=Qn("workspace");let Jl=class extends Xt{constructor(){super(...arguments),this.workspaceName=$o("NO_WORKSPACE")}doInitUI(){this.updateWorkspaceName(),Se(_i,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){yt.getWorkspace().then(t=>{this.workspaceName=t?.getName()||$o("NO_WORKSPACE"),this.requestUpdate()})}handleLoadWorkspace(){Te.execute("load_workspace",{source:this})}render(){return f`
            <wa-button 
                appearance="plain"
                size="small"
                title="${$o("LOAD_WORKSPACE")}"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};Jl=Rv([S("k-workspace-name")],Jl);var Lv=Object.getOwnPropertyDescriptor,Ov=(t,e,n,i)=>{for(var r=i>1?void 0:i?Lv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};const Ao=Qn("partname");z.registerContribution(Ua,{html:"<k-part-name></k-part-name>"});let ec=class extends Xt{doBeforeUI(){this.watch(mt,()=>{this.requestUpdate()})}getPartName(){const t=mt.get();return t&&(t.tabContribution?.label||t.getAttribute("id"))||Ao("NO_PART")}render(){const e=mt.get()?.tabContribution?.icon||"box";return f`
            <wa-button 
                appearance="plain"
                size="small"
                title="${Ao("ACTIVE_PART")}">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};ec=Ov([S("k-part-name")],ec);var Iv=Object.defineProperty,Dv=Object.getOwnPropertyDescriptor,Ba=(t,e,n,i)=>{for(var r=i>1?void 0:i?Dv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Iv(e,n,r),r};const Me=Qn("extensions");let yr=class extends ft{constructor(){super(...arguments),this.filterText=""}doInitUI(){Se(rr,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){M.enable(t.id,!0),this.requestUpdate()}disable(t){M.disable(t.id,!0),this.requestUpdate()}isExtensionRequired(t){const e=ye.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(t)}selectionChanged(t){const e=t.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return M.getExtensions();const t=this.filterText.toLowerCase();return M.getExtensions().filter(e=>String(e.name).toLowerCase().includes(t)||(e.description?String(e.description).toLowerCase().includes(t):!1)||e.id.toLowerCase().includes(t))}getGroupedExtensions(){const t=this.getFilteredExtensions(),e=[],n=[];return t.forEach(i=>{M.isEnabled(i.id)?e.push(i):n.push(i)}),e.sort((i,r)=>String(i.name).localeCompare(String(r.name))),n.sort((i,r)=>String(i.name).localeCompare(String(r.name))),{enabled:e,available:n}}isExternalExtension(t){return t.external===!0}handleFilterInput(t){this.filterText=t.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}renderToolbar(){return f`
            <wa-input
                placeholder="${Me("FILTER_PLACEHOLDER")}"
                .value=${this.filterText}
                @input=${t=>this.handleFilterInput(t)}
                @wa-clear=${()=>this.clearFilter()}
                with-clear
                size="small"
                style="width: 300px;">
                <wa-icon slot="start" name="magnifying-glass" label="Filter"></wa-icon>
            </wa-input>
        `}render(){const t=this.getGroupedExtensions(),e=t.enabled.length>0||t.available.length>0;return f`
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
                                    ${Me("INSTALLED")} (${t.enabled.length})
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
                                    ${Me("AVAILABLE")} (${t.available.length})
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
                            ${Me("NO_MATCHES",{filterText:this.filterText})}
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${We(this.selectedExtension,n=>{const i=this.isExternalExtension(n),r=M.isEnabled(n.id);return f`
                                <h1><k-icon name="${n.icon}"></k-icon> ${n.name}${i?" (External)":""}</h1>
                                ${We(i,()=>f`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${Me("EXTERNAL_EXTENSION")}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${We(r,()=>f`
                                        <wa-button 
                                            title="${this.isExtensionRequired(n.id)?Me("REQUIRED_HINT"):Me("DISABLE_TITLE")}" 
                                            @click="${()=>this.disable(n)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(n.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${Me("UNINSTALL")}
                                        </wa-button>
                                        ${We(this.isExtensionRequired(n.id),()=>f`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>${Me("REQUIRED_HINT")}</span>
                                            </div>
                                        `)}
                                    `,()=>f`
                                        <wa-button 
                                            title="${Me("ENABLE_TITLE")}" 
                                            @click="${()=>this.enable(n)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;${Me("INSTALL")}
                                        </wa-button>
                                    `)}
                                </div>

                                ${We(n.experimental,()=>f`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${Me("EXPERIMENTAL")}</i></small>
                                    </div>
                                `)}

                                ${We(n.version||n.author,()=>f`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${We(n.version,()=>f`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${Me("VERSION")} <strong>${n.version}</strong></span>
                                            </div>
                                        `)}
                                        ${We(n.author,()=>f`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${Me("AUTHOR")} <strong>${n.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${n.description}</p>

                                ${We(n.dependencies&&n.dependencies.length>0,()=>f`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${Me("DEPENDENCIES")}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${n.dependencies.map(s=>{const o=M.getExtensions().find(c=>c.id===s),l=M.isEnabled(s);return f`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${l?"check-circle":"circle"}" 
                                                            style="color: ${l?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        <k-icon name="${o?.icon||"puzzle-piece"}"></k-icon>
                                                        <span>${o?.name||s}</span>
                                                        ${l?"":f`
                                                            <span class="dependency-badge">${Me("NOT_INSTALLED")}</span>
                                                        `}
                                                    </div>
                                                `})}
                                        </div>
                                        <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                            <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                            ${Me("DEPENDENCIES_HINT")}
                                        </small>
                                    </div>
                                `)}
                            `})}
                </div>
            </wa-split-panel>
        `}};yr.styles=qe`
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
    `;Ba([A()],yr.prototype,"selectedExtension",2);Ba([A()],yr.prototype,"filterText",2);yr=Ba([S("k-extensions")],yr);var zv=Object.defineProperty,Pv=Object.getOwnPropertyDescriptor,Xs=(t,e,n,i)=>{for(var r=i>1?void 0:i?Pv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&zv(e,n,r),r};const Ne=Qn("logterminal");let Ti=class extends ft{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=vn()}connectedCallback(){super.connectedCallback(),this.loadSettings(),Gu(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Xu()}log(t,e,n="info"){const i={timestamp:new Date,level:n,source:t,message:e};this.messages=[...this.messages,i],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const r=this.containerRef.value;r&&(r.scrollTop=r.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const t=this.messages.filter(r=>r.level==="info").length,e=this.messages.filter(r=>r.level==="warning").length,n=this.messages.filter(r=>r.level==="error").length,i=this.messages.filter(r=>r.level==="debug").length;return f`
            <k-command 
                icon="list"
                title="${Ne("ALL_LOGS")}"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings(),this.updateToolbar()}}>
                ${Ne("ALL")} (${this.messages.length})
            </k-command>

            <k-command 
                icon="circle-info"
                title="${Ne("INFO_LOGS")}"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings(),this.updateToolbar()}}>
                ${Ne("INFO")}${t>0?` (${t})`:""}
            </k-command>

            <k-command 
                icon="triangle-exclamation"
                title="${Ne("WARNING_LOGS")}"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings(),this.updateToolbar()}}>
                ${Ne("WARNINGS")}${e>0?` (${e})`:""}
            </k-command>

            <k-command 
                icon="circle-xmark"
                title="${Ne("ERROR_LOGS")}"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings(),this.updateToolbar()}}>
                ${Ne("ERRORS")}${n>0?` (${n})`:""}
            </k-command>

            <k-command 
                icon="bug"
                title="${Ne("DEBUG_LOGS")}"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings(),this.updateToolbar()}}>
                ${Ne("DEBUG")}${i>0?` (${i})`:""}
            </k-command>

            <wa-divider orientation="vertical"></wa-divider>

            <k-command 
                icon="arrow-down" 
                title="${this.autoScroll?Ne("AUTO_SCROLL_ENABLED"):Ne("AUTO_SCROLL_DISABLED")}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings(),this.updateToolbar()}}>
                ${this.autoScroll?Ne("AUTO_SCROLL"):Ne("MANUAL")}
            </k-command>

            <k-command 
                icon="trash" 
                title="${Ne("CLEAR_LOGS")}"
                .action=${()=>this.clear()}>
                ${Ne("CLEAR")}
            </k-command>
        `}render(){const t=this.getFilteredMessages();return f`
            <div class="log-terminal">
                <div class="messages" ${yn(this.containerRef)}>
                    ${t.length===0?f`<div class="empty-state">${Ne("NO_LOG_MESSAGES")}</div>`:t.map(e=>f`
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
        `}async loadSettings(){const t=await this.getDialogSetting();t&&(typeof t.filter=="string"&&(t.filter==="all"||["info","warning","error","debug"].includes(t.filter))&&(this.filter=t.filter),typeof t.autoScroll=="boolean"&&(this.autoScroll=t.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};Ti.styles=qe`
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
    `;Xs([A()],Ti.prototype,"messages",2);Xs([A()],Ti.prototype,"autoScroll",2);Xs([A()],Ti.prototype,"filter",2);Ti=Xs([S("k-log-terminal")],Ti);var Mv=Object.defineProperty,Nv=Object.getOwnPropertyDescriptor,lt=(t,e,n,i)=>{for(var r=i>1?void 0:i?Nv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Mv(e,n,r),r};let Ge=class extends Cr{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(t){if(!this.disabled){if(t&&t.stopPropagation(),this.action){this.action(t);return}if(this.cmd){const e=this.closest("wa-dropdown");e&&e.open!==void 0&&(e.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(t){const e=t.target;e&&e.open!==void 0&&(e.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const t=Ac.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),Se(Nt,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=z.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){if("command"in t){const e=t,n=e.disabled?.get();return f`
                <k-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    .params=${e.params||{}}
                    ?disabled="${n}">
                    ${e.label}
                </k-command>
            `}if("html"in t){const n=t.html;return n instanceof Function?n():tn(n)}return F}render(){const t=this.getKeybinding();return this.isInDropdown()?f`
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
                        ${this.label?this.title:F}
                    </wa-button>
                    
                    ${this.title?f`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:F}
                    
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
                    `:F}
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
        `}};Ge.styles=qe`
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
    `;lt([d()],Ge.prototype,"cmd",2);lt([d({type:Object,attribute:!1})],Ge.prototype,"action",2);lt([d()],Ge.prototype,"title",2);lt([d()],Ge.prototype,"label",2);lt([d()],Ge.prototype,"icon",2);lt([d({type:Boolean})],Ge.prototype,"disabled",2);lt([d()],Ge.prototype,"appearance",2);lt([d()],Ge.prototype,"variant",2);lt([d()],Ge.prototype,"size",2);lt([d({type:Object,attribute:!1})],Ge.prototype,"params",2);lt([d()],Ge.prototype,"dropdown",2);lt([d()],Ge.prototype,"placement",2);lt([A()],Ge.prototype,"dropdownContributions",2);Ge=lt([S("k-command")],Ge);var Fv=Object.defineProperty,Uv=Object.getOwnPropertyDescriptor,St=(t,e,n,i)=>{for(var r=i>1?void 0:i?Uv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Fv(e,n,r),r};const Bv=Qn("fastviews");let at=class extends Cr{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=vn(),this.tabsRef=vn(),this.resizeHandleRef=vn(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(t){if(!this.disabled)if(this.containerId){const e=document.querySelector(`k-tabs#${this.containerId}`);if(!e){console.error(`k-fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(t)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(t)})}handleDrawerHide(){this.drawerOpen=!1}startResize(t){t.preventDefault(),t.stopPropagation();const e=this.drawerRef.value;if(!e)return;let i=(()=>{const o=e.shadowRoot?.querySelector('[part="panel"]');if(o&&o.offsetWidth>0)return o.offsetWidth;const h=(window.getComputedStyle(e).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(h){const u=parseFloat(h[1]),p=h[2];if(p==="px")return u;if(p==="vw")return u/100*window.innerWidth;if(p==="vh")return u/100*window.innerHeight;if(p==="%")return u/100*window.innerWidth}return 0})();i===0&&(i=window.innerWidth*.5);const r=o=>{this.resizing&&(o.preventDefault(),o.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const l=this.resizing.startX-o.clientX,c=Math.round(this.resizing.startSize+l),h=200,u=Math.round(window.innerWidth*.9);if(c>=h&&c<=u){this.drawerSize=`${c}px`;const p=this.drawerRef.value;p&&(p.style.setProperty("--size",this.drawerSize),p.style.setProperty("transition","none"))}this.resizing.rafId=null}))},s=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const o=this.drawerRef.value;o&&o.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:t.clientX,startSize:i,handleMouseMove:r,handleMouseUp:s,rafId:null},document.addEventListener("mousemove",r,{passive:!1}),document.addEventListener("mouseup",s,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),Se(Nt,t=>{this.target&&t.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const t=z.getContributions(this.target);this.tabContributions=t.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(t){const e=t.disabled?.get();return f`
            <wa-dropdown-item 
                ?disabled=${e}
                @click=${()=>this.handleTabClick(t)}>
                <k-icon name="${t.icon||""}" label="${t.label}" slot="icon"></k-icon>
                ${t.label}
            </wa-dropdown-item>
        `}render(){return!this.target||this.tabContributions.length===0?F:f`
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
                `:F}
                
                ${this.tabContributions.map(t=>this.renderTabContribution(t))}
            </wa-dropdown>

            ${this.containerId?F:f`
                <wa-drawer 
                    ${yn(this.drawerRef)}
                    label="${this.title||Bv("FAST_VIEWS")}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${yn(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <k-tabs 
                        ${yn(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </k-tabs>
                </wa-drawer>
            `}
        `}};at.styles=qe`
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
    `;St([d()],at.prototype,"target",2);St([d()],at.prototype,"title",2);St([d()],at.prototype,"icon",2);St([d({type:Boolean})],at.prototype,"disabled",2);St([d()],at.prototype,"appearance",2);St([d()],at.prototype,"size",2);St([d()],at.prototype,"placement",2);St([d()],at.prototype,"containerId",2);St([A()],at.prototype,"tabContributions",2);St([A()],at.prototype,"drawerOpen",2);St([A()],at.prototype,"drawerSize",2);at=St([S("k-fastviews")],at);var Vv=Object.getOwnPropertyDescriptor,qv=(t,e,n,i)=>{for(var r=i>1?void 0:i?Vv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};function Hv(){let t=document.getElementById("global-dialog-container");return t||(t=document.createElement("div"),t.id="global-dialog-container",document.body.appendChild(t)),t}const $d=t=>{try{return new Intl.DisplayNames([t],{type:"language"}).of(t)||t.toUpperCase()}catch{return t.toUpperCase()}},Wv=()=>{const t=pu.get(),e=new Set;for(const n of t)if(n.namespace){const i=n;for(const r in i)r!=="namespace"&&r!=="label"&&r!=="language"&&r!=="translations"&&typeof i[r]=="object"&&e.add(r)}return Array.from(e).sort()},jv=async()=>{const t=Wv(),e=Cc.get();return new Promise(n=>{const i=Hv();let r=!1;const s=()=>{const h=i.querySelector("wa-dialog");h&&!r&&(h.open=!1)},o=()=>{r||(r=!0,Et(f``,i),n())},l=async h=>{await de.set(Do,h),s()},c=f`
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
                            <span class="language-name">${$d(h)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;Et(c,i)})};let ia=class extends Xt{render(){const t=Cc.get(),e=$d(t),n=`${t.toUpperCase()} ${e}`;return f`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${e}"
                @click=${()=>jv()}>
                ${n}
            </wa-button>
        `}};ia.styles=qe`
        :host {
            display: inline-block;
        }
    `;ia=qv([S("k-language-selector")],ia);var Gv=Object.defineProperty,Xv=Object.getOwnPropertyDescriptor,Ad=(t,e,n,i)=>{for(var r=i>1?void 0:i?Xv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Gv(e,n,r),r};const _d="app-switcher";z.registerContribution(Wn,{id:_d,label:"Switch Application",buttons:[Bc],component:t=>{const e=t?.apps||[],n=t?.currentAppId,i=t?.selectApp;return f`
            <style>
                .app-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    padding: 1rem;
                    min-width: 300px;
                    max-height: 400px;
                    overflow-y: auto;
                }
                
                .app-item {
                    display: flex;
                    flex-direction: column;
                    padding: 0.75rem;
                    border-radius: var(--wa-border-radius-small);
                    cursor: pointer;
                    transition: background-color 0.2s;
                    border: 1px solid transparent;
                }
                
                .app-item:hover {
                    background-color: var(--wa-color-neutral-fill-quiet);
                    border-color: var(--wa-color-brand-border-loud);
                }
                
                .app-item.active {
                    background-color: var(--wa-color-brand-fill-quiet);
                    border-color: var(--wa-color-brand-border-loud);
                    font-weight: 600;
                }
                
                .app-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 0.25rem;
                }
                
                .app-name {
                    font-weight: 600;
                    color: var(--wa-color-neutral-foreground-loud);
                }
                
                .app-version {
                    font-size: 0.75rem;
                    color: var(--wa-color-neutral-foreground-quiet);
                    padding: 0.125rem 0.375rem;
                    background: var(--wa-color-neutral-fill-loud);
                    border-radius: var(--wa-border-radius-small);
                }
                
                .app-description {
                    font-size: 0.875rem;
                    color: var(--wa-color-neutral-foreground-base);
                    margin: 0;
                    line-height: 1.4;
                }
                
                .app-id {
                    font-size: 0.75rem;
                    color: var(--wa-color-neutral-foreground-quiet);
                    font-family: monospace;
                    margin-top: 0.25rem;
                }
            </style>
            
            <div class="app-list">
                ${e.map(r=>f`
                    <div 
                        class="app-item ${r.id===n?"active":""}"
                        @click=${()=>i(r)}>
                        <div class="app-header">
                            <span class="app-name">${r.name}</span>
                            ${r.version?f`<span class="app-version">v${r.version}</span>`:""}
                        </div>
                        ${r.description?f`<p class="app-description">${r.description}</p>`:""}
                        <div class="app-id">ID: ${r.id}</div>
                    </div>
                `)}
            </div>
        `},onButton:async()=>!0});const Kv=async()=>{const t=ye.getRegisteredApps(),e=ye.getCurrentApp();if(t.length===0)return;const n={apps:t,currentAppId:e?.id,selectApp:async i=>{if(i.id===e?.id){n.close?.();return}try{await ye.setPreferredAppId(i.id),await ye.loadApp(i.id,document.body)}catch(r){console.error("Failed to switch app:",r)}finally{n.close?.()}},close:void 0};await Ps.open(_d,n)};let Cs=class extends Xt{doBeforeUI(){this.currentApp=ye.getCurrentApp();const t=()=>{this.currentApp=ye.getCurrentApp(),this.requestUpdate()};return window.addEventListener("app-loaded",t),()=>{window.removeEventListener("app-loaded",t)}}render(){const t=ye.getRegisteredApps(),e=this.currentApp?.name||"No App";return t.length<=1?f``:f`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current app: ${e}. Click to switch applications."
                @click=${()=>Kv()}>
                <wa-icon name="grip" style="margin-right: 0.5rem;"></wa-icon>
                ${e}
            </wa-button>
        `}};Cs.styles=qe`
        :host {
            display: inline-block;
        }
    `;Ad([A()],Cs.prototype,"currentApp",2);Cs=Ad([S("k-app-switcher")],Cs);var Yv=Object.defineProperty,Zv=Object.getOwnPropertyDescriptor,Va=(t,e,n,i)=>{for(var r=i>1?void 0:i?Zv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Yv(e,n,r),r};let xr=class extends Cr{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return f`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};xr.styles=qe`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;Va([d()],xr.prototype,"message",2);Va([d()],xr.prototype,"icon",2);xr=Va([S("k-no-content")],xr);const q=fu("extensions");M.registerExtension({id:"system.git",name:q("EXT_GIT_NAME"),description:q("EXT_GIT_DESC"),loader:()=>se(()=>import("./git-extension-DrORkCLU.js"),[]),icon:"code-branch",experimental:!0});M.registerExtension({id:"system.github-service",name:q("EXT_GITHUB_SERVICE_NAME"),description:q("EXT_GITHUB_SERVICE_DESC"),loader:()=>se(()=>import("./github-service-extension-C-kuSNTI.js"),[]),icon:"code-branch"});M.registerExtension({id:"system.pyterminal",name:q("EXT_PYTERMINAL_NAME"),description:q("EXT_PYTERMINAL_DESC"),loader:()=>se(()=>import("./pyterminal-extension-CZBB43nH.js"),__vite__mapDeps([4,5])),icon:"k python",experimental:!0});M.registerExtension({id:"system.linuxterminal",name:q("EXT_LINUXTERMINAL_NAME"),description:q("EXT_LINUXTERMINAL_DESC"),loader:()=>se(()=>import("./k-linuxterminal-CiGIxQnH.js"),__vite__mapDeps([6,5])),icon:"terminal",experimental:!0});M.registerExtension({id:"system.webllm",name:q("EXT_WEBLLM_NAME"),description:q("EXT_WEBLLM_DESC"),loader:()=>se(()=>import("./webllmservice-BLOx0hlw.js"),[]),icon:"robot"});M.registerExtension({id:"system.p12splitter",name:q("EXT_P12SPLITTER_NAME"),description:q("EXT_P12SPLITTER_DESC"),loader:()=>se(()=>import("./p12-splitter-BO4VBRUy.js"),[]),icon:"certificate"});M.registerExtension({id:"system.pythonpackagemanager",name:q("EXT_PYTHONPACKAGEMANAGER_NAME"),description:q("EXT_PYTHONPACKAGEMANAGER_DESC"),loader:()=>se(()=>import("./package-manager-extension-UAcLzdAc.js"),[]),icon:"box"});M.registerExtension({id:"system.notebook",name:q("EXT_NOTEBOOK_NAME"),description:q("EXT_NOTEBOOK_DESC"),loader:()=>se(()=>import("./notebook-extension-BtTUi7Cc.js"),[]),icon:"k jupyter",dependencies:["system.pythonpackagemanager"]});M.registerExtension({id:"system.commandpalette",name:q("EXT_COMMANDPALETTE_NAME"),description:q("EXT_COMMANDPALETTE_DESC"),loader:()=>se(()=>import("./command-palette-extension-Dk1m0S7f.js"),[]),icon:"terminal"});M.registerExtension({id:"system.download",name:q("EXT_DOWNLOAD_NAME"),description:q("EXT_DOWNLOAD_DESC"),loader:()=>se(()=>import("./download-extension-Cl4IieWQ.js"),[]),icon:"download"});M.registerExtension({id:"system.unzip",name:q("EXT_UNZIP_NAME"),description:q("EXT_UNZIP_DESC"),loader:()=>se(()=>import("./unzip-extension-B5aAIgSM.js"),__vite__mapDeps([7,3])),icon:"box-archive"});M.registerExtension({id:"system.mdeditor",name:q("EXT_MDEDITOR_NAME"),description:q("EXT_MDEDITOR_DESC"),loader:()=>se(()=>import("./md-editor-extension-CmP7mxmT.js"),[]),icon:"book"});M.registerExtension({id:"system.mediaviewer",name:q("EXT_MEDIAVIEWER_NAME"),description:q("EXT_MEDIAVIEWER_DESC"),loader:()=>se(()=>import("./media-viewer-extension-BXpCw5-m.js"),[]),icon:"image"});M.registerExtension({id:"system.monaco",name:q("EXT_MONACO_NAME"),description:q("EXT_MONACO_DESC"),loader:()=>se(()=>import("./monaco-editor-extension-DCD3_RFy.js"),[]),icon:"file-pen",dependencies:["system.pythonpackagemanager"]});M.registerExtension({id:"system.memoryusage",name:q("EXT_MEMORYUSAGE_NAME"),description:q("EXT_MEMORYUSAGE_DESC"),loader:()=>se(()=>import("./memory-usage-extension-CiNIk_yh.js"),[]),icon:"microchip"});M.registerExtension({id:"system.webdav",name:q("EXT_WEBDAV_NAME"),description:q("EXT_WEBDAV_DESC"),loader:()=>se(()=>import("./webdav-extension-DUz1JRTu.js"),[]),icon:"cloud"});M.registerExtension({id:"system.settings-tree",name:q("EXT_SETTINGS_TREE_NAME"),description:q("EXT_SETTINGS_TREE_DESC"),loader:()=>se(()=>import("./settings-tree-extension-D6gQOzbE.js"),[]),icon:"sitemap"});M.registerExtension({id:"system.in-browser-ml",name:q("EXT_IN_BROWSER_ML_NAME"),description:q("EXT_IN_BROWSER_ML_DESC"),loader:()=>se(()=>import("./in-browser-ml-extension-B4ee-msJ.js"),[]),icon:"brain"});M.registerExtension({id:"system.ai-system",name:q("EXT_AI_SYSTEM_NAME"),description:q("EXT_AI_SYSTEM_DESC"),loader:()=>se(()=>import("./ai-system-extension-D6Iqfp_8.js"),[]),icon:"robot",dependencies:["system.in-browser-ml"]});M.registerExtension({id:"system.rag-system",name:q("EXT_RAG_SYSTEM_NAME"),description:q("EXT_RAG_SYSTEM_DESC"),loader:()=>se(()=>import("./rag-system-extension-CfW7jDea.js").then(t=>t.b),[]),icon:"database",experimental:!0,dependencies:["system.ai-system"]});M.registerExtension({id:"system.howto",name:q("EXT_HOWTO_NAME"),description:q("EXT_HOWTO_DESC"),loader:()=>se(()=>import("./howto-extension-CQ_7ZpLo.js"),[]),icon:"list-check"});const Td="events/aiservice/streamStarted",Rd="events/aiservice/streamChunk",Ld="events/aiservice/streamComplete",es="events/aiservice/streamError",qa="events/aiservice/aiConfigChanged",Od="events/aiservice/agentWorkflowStarted",Id="events/aiservice/agentWorkflowComplete",Dd="events/aiservice/agentWorkflowError",zd="aiservice.agents",Ie="aiservice.chatProviders",Ha="aiservice.promptEnhancers",Mn="aiConfig",Pd={defaultProvider:"openai",providers:[]},ra=10,cy=Object.freeze(Object.defineProperty({__proto__:null,AI_CONFIG_TEMPLATE:Pd,CID_AGENTS:zd,CID_CHAT_PROVIDERS:Ie,CID_PROMPT_ENHANCERS:Ha,KEY_AI_CONFIG:Mn,MAX_TOOL_ITERATIONS:ra,TOPIC_AGENT_WORKFLOW_COMPLETE:Id,TOPIC_AGENT_WORKFLOW_ERROR:Dd,TOPIC_AGENT_WORKFLOW_STARTED:Od,TOPIC_AICONFIG_CHANGED:qa,TOPIC_AI_STREAM_CHUNK:Rd,TOPIC_AI_STREAM_COMPLETE:Ld,TOPIC_AI_STREAM_ERROR:es,TOPIC_AI_STREAM_STARTED:Td},Symbol.toStringTag,{value:"Module"}));class Md{constructor(){this.decoder=new TextDecoder}*processLines(e){for(const n of e)n.trim()!==""&&(yield n)}}class Qv extends Md{constructor(){super(...arguments),this.usage=null}async*parse(e){let n="";this.usage=null;try{for(;;){const{done:r,value:s}=await e.read();if(r)break;n+=this.decoder.decode(s,{stream:!0});const o=n.split(`
`);n=o.pop()||"";for(const l of this.processLines(o))if(l.startsWith("data: ")){const c=l.slice(6).trim();if(c==="[DONE]"){const h={type:"done",content:""};this.usage&&(h.metadata={usage:this.usage}),yield h;continue}try{const h=JSON.parse(c);if(h.error){yield{type:"error",content:h.error.message||"Unknown error",metadata:h.error};continue}this.extractUsage(h);const u=this.parseChunk(h);u&&(yield u)}catch{continue}}}if(n.trim()&&n.startsWith("data: ")){const r=n.slice(6).trim();if(r!=="[DONE]")try{const s=JSON.parse(r);this.extractUsage(s);const o=this.parseChunk(s);o&&(yield o)}catch{}}const i={type:"done",content:""};this.usage&&(i.metadata={usage:this.usage}),yield i}finally{e.releaseLock()}}extractUsage(e){if(e.usage){const n=e.usage;this.usage={promptTokens:n.prompt_tokens||0,completionTokens:n.completion_tokens||0,totalTokens:n.total_tokens||0,estimated:!1}}}parseChunk(e){const n=e.choices?.[0]?.delta,i=e.choices?.[0];if(n?.content)return{type:"token",content:n.content,message:{role:n.role||"assistant",content:i?.message?.content||n.content}};if(i?.message?.tool_calls){const r=this.parseToolCalls(i.message.tool_calls,!0);if(r.length>0)return{type:"token",content:"",toolCalls:r}}else if(n?.tool_calls||i?.delta?.tool_calls){const r=this.parseToolCalls(n?.tool_calls||i?.delta?.tool_calls||[],!1);if(r.length>0)return{type:"token",content:"",toolCalls:r}}return null}parseToolCalls(e,n=!1){return e.filter(i=>i.function!==void 0).map((i,r)=>({id:i.id||`call_${i.index!==void 0?i.index:r}_${Date.now()}`,type:"function",function:{name:i.function?.name||"",arguments:i.function?.arguments||(n?"{}":"")},_index:i.index!==void 0?i.index:r}))}}class Jv extends Md{constructor(){super(...arguments),this.usage=null}async*parse(e){let n="";this.usage=null;try{for(;;){const{done:r,value:s}=await e.read();if(r)break;n+=this.decoder.decode(s,{stream:!0});const o=n.split(`
`);n=o.pop()||"";for(const l of this.processLines(o))try{const c=JSON.parse(l);if(c.error){yield{type:"error",content:c.error,metadata:c};continue}if(c.done){this.extractUsage(c);const h={type:"done",content:""};this.usage&&(h.metadata={usage:this.usage}),yield h;continue}c.message?.content?yield{type:"token",content:c.message.content,message:{role:c.message.role||"assistant",content:c.message.content}}:c.response&&(yield{type:"token",content:c.response,message:{role:"assistant",content:c.response}})}catch{continue}}if(n.trim())try{const r=JSON.parse(n);r.done&&this.extractUsage(r),r.message?.content&&(yield{type:"token",content:r.message.content,message:{role:r.message.role||"assistant",content:r.message.content}})}catch{}const i={type:"done",content:""};this.usage&&(i.metadata={usage:this.usage}),yield i}finally{e.releaseLock()}}extractUsage(e){if(e.prompt_eval_count!==void 0||e.eval_count!==void 0){const n=e.prompt_eval_count||0,i=e.eval_count||0;this.usage={promptTokens:n,completionTokens:i,totalTokens:n+i,estimated:!1}}}}class Nd{createParser(e,n){return e.includes("text/event-stream")||n.includes("openai")?new Qv:new Jv}async getAvailableModels(e){if(!e.chatApiEndpoint)return[];try{const n=e.chatApiEndpoint;let i=n;if(n.includes("/v1/chat/completions"))i=n.replace("/v1/chat/completions","");else if(n.includes("/api/v1/chat/completions"))i=n.replace("/api/v1/chat/completions","");else if(n.includes("/api/chat/completion"))i=n.replace("/api/chat/completion","");else try{const h=new URL(n);i=`${h.protocol}//${h.host}`}catch{return[]}const r=`${i}/v1/models`,s={"Content-Type":"application/json"};e.apiKey&&(s.Authorization=`Bearer ${e.apiKey}`);const o=await fetch(r,{method:"GET",headers:s});return o.ok?((await o.json()).data||[]).map(h=>({id:h.id,name:h.name||h.id})):[]}catch{return[]}}async*stream(e){const n={model:e.model,stream:!0,messages:e.messages,...e.chatConfig.parameters};e.tools&&e.tools.length>0&&(n.tools=e.tools,n.tool_choice="auto");const i=await fetch(e.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${e.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(n),signal:e.signal});if(!i.ok){const c=await i.text().catch(()=>"Unknown error");yield{type:"error",content:`HTTP ${i.status}: ${c}`,metadata:{status:i.status,statusText:i.statusText}};return}const r=i.headers.get("content-type")||"",s=i.headers.get("content-length");if(!i.body){yield{type:"error",content:`Response body is null or empty (Content-Length: ${s||"unknown"}). This may indicate: 1) The endpoint doesn't support streaming, 2) Authentication is required/invalid, 3) The endpoint URL is incorrect. For Open WebUI, ensure you're using the correct endpoint and API key.`,metadata:{status:i.status,contentType:r,contentLength:s,endpoint:e.chatConfig.chatApiEndpoint,hasApiKey:!!e.chatConfig.apiKey}};return}const o=i.body.getReader();if(!o){yield{type:"error",content:"Response body is not readable"};return}const l=this.createParser(r,e.chatConfig.chatApiEndpoint);try{for await(const c of l.parse(o))yield c}catch(c){yield{type:"error",content:c instanceof Error?c.message:"Failed to parse response stream",metadata:{error:c,contentType:r,endpoint:e.chatConfig.chatApiEndpoint}}}}}class e0 extends Nd{constructor(){super(...arguments),this.name="openai"}canHandle(e){return e.chatApiEndpoint.includes("openai")||e.chatApiEndpoint.includes("v1/chat/completions")}}class t0 extends Nd{constructor(){super(...arguments),this.name="ollama"}canHandle(e){return e.name.toLowerCase()==="ollama"||e.chatApiEndpoint.includes("ollama")||e.chatApiEndpoint.includes("localhost:11434")}}class n0{constructor(){this.providers=[],this.registerDefaultProviders()}registerDefaultProviders(){this.providers.push(new e0),this.providers.push(new t0)}registerProvider(e){this.providers.push(e)}getProvider(e){const n=this.providers.find(i=>i.canHandle(e));return n||this.providers[0]}getAllProviders(){return[...this.providers]}}class i0{getAgentContributions(){return z.getContributions(zd)}filterAndSortAgents(e,n){return e.filter(i=>i.canHandle?i.canHandle(n):!0).sort((i,r)=>(r.priority||0)-(i.priority||0))}getMatchingAgents(e,n){const i=this.getAgentContributions();if(i.length===0)throw new Error("No agents are registered. The App Support agent should be available from the AI system extension.");let r=i.filter(s=>n&&!n.includes(s.role)?!1:s.canHandle?s.canHandle(e):!0);if(n&&n.length>0){if(r=r.sort((s,o)=>(o.priority||0)-(s.priority||0)),r.length===0){const s=n.join(", ");throw new Error(`No agents found for requested roles: ${s}. Available agents: ${i.map(o=>o.role).join(", ")}`)}}else if(r=this.filterAndSortAgents(r,e),r.length===0)throw new Error(`No agents can handle the current context. Available agents: ${i.map(s=>s.role).join(", ")}`);return r}}class Fd{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}commandToTool(e,n){const i={},r=[];return e.parameters?.forEach(l=>{const c=this.sanitizeFunctionName(l.name);i[c]={type:l.type||"string",description:l.description,...l.allowedValues&&{enum:l.allowedValues}},l.required===!0&&r.push(c)}),{type:"function",function:{name:this.sanitizeFunctionName(e.id),description:e.description||e.name,parameters:{type:"object",properties:i,required:r}}}}getAvailableTools(e,n){const i=Te.listCommands();let r=Object.values(i);return n&&(r=r.filter(s=>n(s,e))),r.map(s=>this.commandToTool(s,e))}}var Ud=(t=>(t.ZERO_SHOT_CLASSIFICATION="Xenova/distilbert-base-uncased-mnli",t.FEATURE_EXTRACTION="Xenova/all-MiniLM-L6-v2",t.TEXT_CLASSIFICATION="Xenova/distilbert-base-uncased-finetuned-sst-2-english",t.QUESTION_ANSWERING="Xenova/distilbert-base-cased-distilled-squad",t.SUMMARIZATION="Xenova/distilbart-cnn-6-6",t.TRANSLATION_EN_FR="Xenova/opus-mt-en-fr",t.FILL_MASK="Xenova/distilbert-base-uncased",t.SENTENCE_SIMILARITY="Xenova/all-MiniLM-L6-v2",t.TOKEN_CLASSIFICATION="Xenova/distilbert-base-uncased-finetuned-conll03-english",t.IMAGE_CLASSIFICATION="Xenova/vit-base-patch16-224",t.OBJECT_DETECTION="Xenova/detr-resnet-50",t.AUTOMATIC_SPEECH_RECOGNITION="Xenova/whisper-tiny",t.AUDIO_CLASSIFICATION="Xenova/wav2vec2-base",t))(Ud||{}),Bd=(t=>(t.ZERO_SHOT_CLASSIFICATION="zero-shot-classification",t.FEATURE_EXTRACTION="feature-extraction",t.TEXT_CLASSIFICATION="text-classification",t.SENTIMENT_ANALYSIS="sentiment-analysis",t.QUESTION_ANSWERING="question-answering",t.SUMMARIZATION="summarization",t.TRANSLATION="translation",t.FILL_MASK="fill-mask",t.SENTENCE_SIMILARITY="sentence-similarity",t.TOKEN_CLASSIFICATION="token-classification",t.IMAGE_CLASSIFICATION="image-classification",t.OBJECT_DETECTION="object-detection",t.AUTOMATIC_SPEECH_RECOGNITION="automatic-speech-recognition",t.AUDIO_CLASSIFICATION="audio-classification",t.IMAGE_TO_TEXT="image-to-text",t.TEXT_TO_IMAGE="text-to-image",t.IMAGE_SEGMENTATION="image-segmentation",t.DEPTH_ESTIMATION="depth-estimation",t))(Bd||{});function r0(t){switch(t){case"zero-shot-classification":return"Xenova/distilbert-base-uncased-mnli";case"feature-extraction":return"Xenova/all-MiniLM-L6-v2";case"text-classification":case"sentiment-analysis":return"Xenova/distilbert-base-uncased-finetuned-sst-2-english";case"question-answering":return"Xenova/distilbert-base-cased-distilled-squad";case"summarization":return"Xenova/distilbart-cnn-6-6";case"translation":return"Xenova/opus-mt-en-fr";case"fill-mask":return"Xenova/distilbert-base-uncased";case"sentence-similarity":return"Xenova/all-MiniLM-L6-v2";case"token-classification":return"Xenova/distilbert-base-uncased-finetuned-conll03-english";case"image-classification":return"Xenova/vit-base-patch16-224";case"object-detection":return"Xenova/detr-resnet-50";case"automatic-speech-recognition":return"Xenova/whisper-tiny";case"audio-classification":return"Xenova/wav2vec2-base";default:return null}}let _o=null,tc=!1;async function Vd(){_o||(_o=se(()=>import("./transformers-BHZH0_8_.js"),__vite__mapDeps([8,9])));const t=await _o;return tc||(t.env.allowRemoteModels=!0,t.env.allowLocalModels=!1,t.env.remoteHost="https://huggingface.co",tc=!0),t}async function s0(t){const{env:e}=await Vd();t&&t.trim()?e.useAuthToken=t.trim():e.useAuthToken=null}const er=dn("InBrowserMLService");class ui{constructor(){this.pipelines=new Map,this.loadingPipelines=new Set}static getInstance(){return ui.instance||(ui.instance=new ui),ui.instance}setAuthToken(e){s0(e).then(()=>{e&&e.trim()&&er.info("Hugging Face token set for authenticated model access")}).catch(n=>{er.warn(`Failed to configure auth token: ${n instanceof Error?n.message:String(n)}`)})}async getPipeline(e,n,i={}){if(!n&&typeof e!="string"){const l=r0(e);l&&(n=l)}const r=e,s=n,o=`${r}:${s}`;if(this.pipelines.has(o))return this.pipelines.get(o);if(this.loadingPipelines.has(o)){for(;this.loadingPipelines.has(o);)await new Promise(l=>setTimeout(l,100));return this.pipelines.get(o)}this.loadingPipelines.add(o);try{er.info(`Loading transformers.js pipeline: ${r} with model ${s}...`);const{pipeline:l}=await Vd(),c=await l(r,s,{quantized:!0,...i});return this.pipelines.set(o,c),er.info(`Pipeline ${o} loaded successfully`),c}catch(l){const c=l instanceof Error?l.message:String(l);throw er.error(`Failed to load pipeline ${o}: ${c}`),l}finally{this.loadingPipelines.delete(o)}}clearPipeline(e,n){const s=`${e}:${n}`;this.pipelines.delete(s)}clearAllPipelines(){this.pipelines.clear()}}const o0=ui.getInstance(),fn=dn("ToolDetector");class a0{constructor(){this.classifier=null,this.loading=!1,this.loadPromise=null}async ensureLoaded(){if(!this.classifier)return this.loading&&this.loadPromise?this.loadPromise:(this.loading=!0,this.loadPromise=(async()=>{try{fn.info("Loading ML model for tool detection..."),this.classifier=await o0.getPipeline(Bd.ZERO_SHOT_CLASSIFICATION,Ud.ZERO_SHOT_CLASSIFICATION,{quantized:!0}),fn.info("ML model loaded successfully - will use for tool detection")}catch(e){const n=e instanceof Error?e.message:String(e);fn.warn(`Failed to load ML model, will use keyword-based detection fallback: ${n}`),this.classifier=null}finally{this.loading=!1}})(),this.loadPromise)}async needsTools(e){if(!e||e.trim().length===0)return!1;const n=e.toLowerCase().trim();if(["hello","hi","hey","thanks","thank you","bye","goodbye"].some(s=>n===s||n.startsWith(s+" ")))return!1;try{if(await this.ensureLoaded(),this.classifier){fn.info(`Using ML model to classify prompt: "${n.substring(0,50)}${n.length>50?"...":""}"`);const s=await this.classifier(n,["requires executing commands or actions","is a simple greeting or question"]),o=s.labels[0]==="requires executing commands or actions"&&s.scores[0]>.6;return fn.info(`ML classification result: ${s.labels[0]} (confidence: ${(s.scores[0]*100).toFixed(1)}%) - needsTools: ${o}`),o}}catch(s){const o=s instanceof Error?s.message:String(s);fn.warn(`ML classification failed, using keyword fallback: ${o}`)}fn.info("Using keyword-based detection (ML model not available)");const r=this.keywordBasedDetection(n);return fn.info(`Keyword detection result: needsTools=${r}`),r}keywordBasedDetection(e){const n=["create","open","delete","read","write","edit","save","rename","move","copy","list","show","display","run","execute","build","add","remove","update","modify","change","set","get","find","search","filter","sort","install","uninstall","load","import","export","generate","make","do","perform","call","invoke"],i=["file","folder","directory","workspace","editor","map","layer","command","tool","extension","script","code","project"],r=n.some(o=>e.includes(o)),s=i.some(o=>e.includes(o));return r&&(s||e.length>20)}dispose(){this.classifier=null,this.loading=!1,this.loadPromise=null}}const l0=new a0;class c0{constructor(){this.toolRegistry=new Fd,this.enhancers=[]}addEnhancer(e){this.enhancers.push(e)}async getSysPrompt(e,n){let i=e.sysPrompt;if(typeof i=="function"&&(i=i()),!i||typeof i!="string")throw new Error(`Agent "${e.role}" (${e.label}) is missing a system prompt. All agents must provide a sysPrompt.`);const r=[...e.promptEnhancers||[],...this.enhancers,...this.getContributedEnhancers()].sort((o,l)=>(l.priority||0)-(o.priority||0));let s=i;for(const o of r)try{s=await o.enhance(s,n),(!s||typeof s!="string")&&(s=i)}catch(l){console.warn("[PromptBuilder] Enhancer failed:",l)}return s}rewriteChatHistoryForAgent(e,n){return e.map(i=>i.role==="user"?{role:i.role,content:i.content}:i.role===n?{role:"assistant",content:i.content}:{role:"user",content:`***Agent '${i.role}' replied:***
${i.content}`})}getContributedEnhancers(){return z.getContributions(Ha).map(n=>({...n.enhancer,priority:n.priority??n.enhancer.priority}))}async build(e,n,i,r){r?.beforeSend&&await r.beforeSend(n,i);const s=this.sanitizeMessagesForAPI(n),o=this.rewriteChatHistoryForAgent(s,e.role);let l=e.tools;typeof l=="function"&&(l=await l());let c;if(l?.enabled)if(l.smartToolDetection){const g=n[n.length-1]?.content||"";await l0.needsTools(g)&&(c=this.toolRegistry.getAvailableTools(i,l.commandFilter))}else c=this.toolRegistry.getAvailableTools(i,l.commandFilter);const h=await this.getSysPrompt(e,i);o.unshift({role:"system",content:h});const u=o.length-1;return{messages:o,userPromptIndex:u,tools:c}}sanitizeMessageForAPI(e){const n={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(n.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(n.tool_calls=e.tool_calls),n}sanitizeMessagesForAPI(e){return e.map(n=>this.sanitizeMessageForAPI(n))}}class d0{constructor(){this.processors=[]}addProcessor(e){this.processors.push(e)}getSortedProcessors(){return[...this.processors].sort((e,n)=>(n.priority||0)-(e.priority||0))}async process(e,n,i){let r={...e};const s=[...n.messageProcessors||[],...this.processors].sort((l,c)=>(c.priority||0)-(l.priority||0));for(const l of s)r=await l.process(r,i);const o=r.actions?.some(l=>l.requiresAttention)||r.attentionRequests?.some(l=>l.requiresAction)||!1;return{...r,requiresAttention:o}}checkRequiresAttention(e){return e.actions?.some(n=>n.requiresAttention)||e.attentionRequests?.some(n=>n.requiresAction)||!1}}class h0{constructor(){this.accumulatedToolCalls=new Map,this.toolCallIndexMap=new Map}processChunk(e){if(e.type==="token"&&e.toolCalls&&e.toolCalls.length>0)for(const n of e.toolCalls){const i=n._index,r=n.id;let s,o;if(i!==void 0&&this.toolCallIndexMap.has(i)?(o=this.toolCallIndexMap.get(i),s=this.accumulatedToolCalls.get(o)):r&&this.accumulatedToolCalls.has(r)?(o=r,s=this.accumulatedToolCalls.get(o)):(o=r||`call_${i!==void 0?i:Date.now()}_${Math.random()}`,s=void 0),s){const l=s.function.arguments||"",c=n.function.arguments||"",h=l+c;this.accumulatedToolCalls.set(o,{id:o,type:n.type||s.type,function:{name:n.function.name||s.function.name,arguments:h}}),i!==void 0&&!this.toolCallIndexMap.has(i)&&this.toolCallIndexMap.set(i,o)}else this.accumulatedToolCalls.set(o,{...n,id:o}),i!==void 0&&this.toolCallIndexMap.set(i,o)}}getFinalToolCalls(){return Array.from(this.accumulatedToolCalls.values()).filter(e=>e.function.name&&e.function.name.trim().length>0).map(e=>{let n=e.function.arguments||"";return(!n||n.trim()==="")&&(n="{}"),{...e,function:{...e.function,arguments:n}}})}reset(){this.accumulatedToolCalls.clear(),this.toolCallIndexMap.clear()}}class qd{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}findCommand(e,n){const i=e.function.name,r=Te.getCommand(i);if(r)return r;const s=Te.listCommands();for(const[o,l]of Object.entries(s))if(this.sanitizeFunctionName(o)===i)return l;return null}parseArguments(e){if(!e||e.trim()===""||e==="{}")return{};try{const n=JSON.parse(e);return n&&typeof n=="object"?n:{}}catch(n){const i=n instanceof Error?n.message:String(n);return console.error(`[ToolExecutor] Failed to parse arguments: ${e} - ${i}`),{}}}sanitizeArguments(e,n){if(!n||!n.parameters||!e||typeof e!="object")return e||{};const i={};return n.parameters.forEach(r=>{const s=this.sanitizeFunctionName(r.name);s in e&&(i[r.name]=e[s])}),i}async executeToolCall(e,n){try{const i=this.findCommand(e,n),r=i?.id||e.function.name,s=e.function.arguments||"{}",o=this.parseArguments(s),l=this.sanitizeArguments(o,i),c=Te.createExecutionContext(l),h={...n,...c,params:l};let u=await Te.execute(r,h);const g={success:!0,message:`Command "${i?.name||r}" executed successfully`,command:r};if(l&&typeof l=="object"&&Object.keys(l).length>0&&(g.parameters=l),u){let b=u;if(b instanceof Promise&&(b=await b),g.result=b,i?.output&&i.output.length>0){const w=i.output.map(k=>`${k.name}: ${k.description||k.type||"value"}`).join(", ");g.output=w}}return{id:e.id,result:g}}catch(i){const r=i instanceof Error?i.message:String(i);let s=null;try{s=this.findCommand(e,n)}catch{s=null}const o=s?.name||e.function.name;let l=r;return r.includes("No handler found")||r.includes("No handlers registered")?l=`Command "${o}" cannot be executed. ${r}. This usually means the command is not available in the current context (e.g., a map editor may not be open or active).`:(r.includes("not available")||r.includes("GsMapEditor"))&&(l=`Command "${o}" cannot be executed: ${r}. Please ensure the required editor or component is open and active.`),{id:e.id,result:null,error:l}}}async executeToolCalls(e,n){const i=[];for(const r of e){const s=await this.executeToolCall(r,n);i.push(s)}return i}createToolCallAccumulator(){return new h0}createToolCallSignature(e){const n=e.function.arguments||"{}";let i={};try{const s=JSON.parse(n);i=s&&typeof s=="object"?s:{}}catch{i={}}const r=i&&typeof i=="object"?Object.keys(i).sort().reduce((s,o)=>(s[o]=i[o],s),{}):{};return`${e.function.name}:${JSON.stringify(r)}`}}const dy=Object.freeze(Object.defineProperty({__proto__:null,ToolExecutor:qd},Symbol.toStringTag,{value:"Module"}));class u0{async execute(e,n,i,r){const s=n.chatConfig;if(!s)throw new Error("Chat config is required");const o=e.map(async l=>{try{await r(l,n.chatContext.history,i.sharedState,s,n,i)}catch(c){const h=c instanceof Error?c:new Error(String(c));i.errors.set(l.role,h),n.onAgentError?.(l.role,h)}});await Promise.all(o)}}class p0{async execute(e,n,i,r){const s=n.chatConfig;if(!s)throw new Error("Chat config is required");let o=[...n.chatContext.history],l={...i.sharedState};for(const c of e)try{const h=this.createAgentContextWithPreviousAgents(l,n,i),u=await r(c,o,l,s,n,i);if(!u)break;const p=this.updateWorkflowState(u,o,l,h,i);o=p.currentMessages,l=p.accumulatedState}catch(h){const u=h instanceof Error?h:new Error(String(h));i.errors.set(c.role,u),n.onAgentError?.(c.role,u);break}}createAgentContextWithPreviousAgents(e,n,i){return{...e,...n.callContext.getProxy(),previousAgents:Array.from(i.messages.entries()).map(([r,s])=>({role:r,content:s.content}))}}updateWorkflowState(e,n,i,r,s){return n.push(e),i={...i,...r,message:e},s.sharedState=i,{currentMessages:n,accumulatedState:i}}}class f0{async execute(e,n,i,r){const s=n.chatConfig;if(!s)throw new Error("Chat config is required");let o=[...n.chatContext.history],l={...i.sharedState};for(const c of e)try{const h=this.createAgentContextWithPreviousAgents(l,n,i);if(c.canHandle&&!c.canHandle(h))continue;const u=await r(c,o,l,s,n,i);if(!u)break;const p=this.updateWorkflowState(u,o,l,h,i);o=p.currentMessages,l=p.accumulatedState}catch(h){const u=h instanceof Error?h:new Error(String(h));i.errors.set(c.role,u),n.onAgentError?.(c.role,u)}}createAgentContextWithPreviousAgents(e,n,i){return{...e,...n.callContext.getProxy(),previousAgents:Array.from(i.messages.entries()).map(([r,s])=>({role:r,content:s.content}))}}updateWorkflowState(e,n,i,r,s){return n.push(e),i={...i,...r,message:e},s.sharedState=i,{currentMessages:n,accumulatedState:i}}}class m0{constructor(){this.strategies=new Map([["parallel",new u0],["sequential",new p0],["conditional",new f0]])}registerStrategy(e,n){this.strategies.set(e,n)}async execute(e,n,i){const r=`workflow-${Date.now()}-${Math.random()}`,s=n.execution||"parallel",o=n.sharedState||{},l={messages:new Map,sharedState:{...o},errors:new Map};te(Od,{workflowId:r,options:n});try{const c=this.strategies.get(s);if(!c)throw new Error(`Unknown workflow execution strategy: ${s}`);return await c.execute(e,n,l,i),te(Id,{workflowId:r,results:l}),l}catch(c){const h=c instanceof Error?c:new Error(String(c));throw te(Dd,{workflowId:r,error:h}),h}}}const pr=class pr{static estimateTokens(e){if(!e||e.trim().length===0)return 0;const n=e.trim(),i=n.length,r=n.split(/\s+/).filter(o=>o.length>0).length,s=Math.ceil(i/this.AVERAGE_CHARS_PER_TOKEN+r*.3);return Math.max(1,s)}static estimateMessageTokens(e){let n=this.MESSAGE_OVERHEAD;if(e.content&&(n+=this.estimateTokens(e.content)),e.role&&(n+=this.estimateTokens(e.role)),e.tool_calls)for(const i of e.tool_calls)n+=this.estimateTokens(i.function.name||""),n+=this.estimateTokens(i.function.arguments||"{}"),n+=10;return e.tool_call_id&&(n+=this.estimateTokens(e.tool_call_id)),n}static estimatePromptTokens(e,n){let i=0;for(const r of e)i+=this.estimateMessageTokens(r);if(n&&n.length>0){for(const r of n)if(i+=this.TOOL_DEFINITION_OVERHEAD,i+=this.estimateTokens(r.function.name||""),i+=this.estimateTokens(r.function.description||""),r.function.parameters){const s=JSON.stringify(r.function.parameters);i+=this.estimateTokens(s)}}return i}static estimateCompletionTokens(e,n){let i=this.estimateTokens(e);if(n&&n.length>0)for(const r of n)i+=10,i+=this.estimateTokens(r.function?.name||""),i+=this.estimateTokens(r.function?.arguments||"{}");return i}};pr.AVERAGE_CHARS_PER_TOKEN=4,pr.TOOL_DEFINITION_OVERHEAD=50,pr.MESSAGE_OVERHEAD=4;let Ss=pr;const nc="ai_token_usage";class g0{constructor(){this.data=null,this.loadPromise=null}async loadData(){return this.data?this.data:this.loadPromise?this.loadPromise:(this.loadPromise=(async()=>{const e=await kt.getObject(nc);return e?this.data=e:(this.data={providers:{},total:{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},lastUpdated:Date.now()},await this.saveData()),this.loadPromise=null,this.data})(),this.loadPromise)}async saveData(){this.data&&(this.data.lastUpdated=Date.now(),await kt.persistObject(nc,this.data))}async recordUsage(e,n){if(await this.loadData(),!this.data)return;this.data.providers[e]||(this.data.providers[e]={promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0});const i=this.data.providers[e];i.promptTokens+=n.promptTokens,i.completionTokens+=n.completionTokens,i.totalTokens+=n.totalTokens,i.requestCount+=1,this.data.total.promptTokens+=n.promptTokens,this.data.total.completionTokens+=n.completionTokens,this.data.total.totalTokens+=n.totalTokens,this.data.total.requestCount+=1,await this.saveData()}async getProviderUsage(e){return await this.loadData(),this.data?.providers[e]||null}async getAllProviderUsage(){return await this.loadData(),this.data?.providers||{}}async getTotalUsage(){return await this.loadData(),this.data?.total||{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0}}async reset(){this.data={providers:{},total:{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},lastUpdated:Date.now()},await this.saveData()}async resetProvider(e){if(await this.loadData(),!this.data)return;const n=this.data.providers[e];n&&(this.data.total.promptTokens-=n.promptTokens,this.data.total.completionTokens-=n.completionTokens,this.data.total.totalTokens-=n.totalTokens,this.data.total.requestCount-=n.requestCount,delete this.data.providers[e],await this.saveData())}}const b0=new g0;class w0{constructor(){this.activeRequests=new Map,this.providerFactory=new n0,this.agentRegistry=new i0,this.promptBuilder=new c0,this.messageProcessor=new d0,this.toolExecutor=new qd,this.workflowEngine=new m0,this.toolRegistry=new Fd,Se(gn,()=>{this.aiConfig=void 0,this.configCheckPromise=void 0,this.checkAIConfig().then()}),this.checkAIConfig().then()}getAgentContributions(){return this.agentRegistry.getAgentContributions()}async getProviders(){return await this.checkAIConfig(),this.aiConfig?.providers||[]}async getDefaultProvider(){await this.checkAIConfig();const e=await this.getProviders();if(this.aiConfig?.defaultProvider){const n=e.find(i=>i.name===this.aiConfig?.defaultProvider);if(n)return n}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig&&(this.aiConfig.defaultProvider=e,await de.set(Mn,this.aiConfig)),this.getDefaultProvider()}createMessage(e){return{role:"user",content:e}}registerStreamingFetcher(e){this.providerFactory.registerProvider(e)}getContributedProviders(){return z.getContributions(Ie).map(n=>n.provider)}mergeProviders(e,n){const i=new Set(e.map(s=>s.name)),r=n.filter(s=>!i.has(s.name));return r.length>0?[...e,...r]:e}async createInitialConfig(){const e=this.getContributedProviders(),n={...Pd,providers:e};return await de.set(Mn,n),await de.get(Mn)}async updateConfigWithMissingProviders(e){const n=this.getContributedProviders(),i=this.mergeProviders(e.providers,n);if(i.length!==e.providers.length){const r={...e,providers:i};return await de.set(Mn,r),r}return e}async checkAIConfig(){if(!this.aiConfig)return this.configCheckPromise?this.configCheckPromise:(this.configCheckPromise=this.performConfigCheck(),this.configCheckPromise)}async performConfigCheck(){try{this.aiConfig=await de.get(Mn),this.aiConfig?this.aiConfig=await this.updateConfigWithMissingProviders(this.aiConfig):this.aiConfig=await this.createInitialConfig(),te(qa,this.aiConfig)}finally{this.configCheckPromise=void 0}}createAgentContext(e,n,i={}){return{...e,...n.getProxy(),...i}}createFinalMessage(e,n){return{role:e.role,content:n.content,actions:n.actions,requiresAttention:n.requiresAttention,attentionRequests:n.attentionRequests,canContinue:n.canContinue}}async handleUserAttention(e,n,i,r){if(!n.requiresAttention||!i.userAttentionHandler)return!0;const s=[];if(n.attentionRequests&&s.push(...n.attentionRequests),n.actions)for(const c of n.actions)c.requiresAttention&&c.attentionRequest&&s.push(c.attentionRequest);if(s.length===0)return!0;if(r.pendingAttention||(r.pendingAttention=new Map),r.pendingAttention.set(e,s),i.onAttentionRequest)for(const c of s)i.onAttentionRequest(e,c);if(i.pauseOnAttention)return r.paused=!0,r.continuationToken=`${e}-${Date.now()}-${Math.random()}`,!1;const o=i.userAttentionHandler,l=this.createAgentContext(i.sharedState||{},i.callContext,{message:n});for(const c of s)if(o.onAttentionRequest){const h=await o.onAttentionRequest(c,l);if(c.requiresAction&&(h===!1||h===null))return!1;h&&typeof h=="string"&&(l[`attention_${c.type}_result`]=h)}else switch(c.type){case"confirmation":if(o.onConfirmation&&!await o.onConfirmation(c.message,l)&&c.requiresAction)return!1;break;case"input":if(o.onInput){const h=await o.onInput(c.message,void 0,l);if(!h&&c.requiresAction)return!1;h&&(l.attention_input_result=h)}break}return!0}async*streamCompletion(e){const n=`${Date.now()}-${Math.random()}`,i=new AbortController;this.activeRequests.set(n,i),e.signal&&e.signal.addEventListener("abort",()=>{i.abort()});const r=e.signal||i.signal;try{e.onStatus?.("starting"),te(Td,{requestId:n,options:e});const s=e.chatConfig||await this.getDefaultProvider(),o=this.sanitizeMessagesForAPI(e.chatContext.history),l=this.providerFactory.getProvider(s),c=this.toolExecutor.createToolCallAccumulator();let h="",u={role:"assistant",content:""},p;for await(const w of l.stream({model:s.model,messages:o,chatConfig:s,tools:e.tools,signal:r})){if(w.type==="error"){e.onStatus?.("error"),te(es,{requestId:n,chunk:w}),yield w;break}if(w.type==="token")c.processChunk(w),(!w.toolCalls||w.toolCalls.length===0)&&(h+=w.content,u.content=h),w.message?.role&&(u.role=w.message.role),w.content&&e.onToken?.(w.content),e.onStatus?.("streaming"),e.onProgress?.({received:h.length}),te(Rd,{requestId:n,chunk:w}),yield w;else if(w.type==="done"){w.metadata?.usage&&(p=w.metadata.usage),e.onStatus?.("complete"),te(Ld,{requestId:n}),yield w;break}else yield w}const g=c.getFinalToolCalls(),b={role:u.role||"assistant",content:h||"",...g.length>0&&{toolCalls:g}};if(!p){const w=Ss.estimatePromptTokens(o,e.tools),k=Ss.estimateCompletionTokens(h,g);p={promptTokens:w,completionTokens:k,totalTokens:w+k,estimated:!0}}return b0.recordUsage(s.name,p).catch(w=>{Y.error(`Failed to record token usage: ${w instanceof Error?w.message:String(w)}`)}),{message:b,tokenUsage:p}}catch(s){if(s instanceof Error&&s.name==="AbortError")throw e.onStatus?.("error"),te(es,{requestId:n,error:"Request cancelled"}),s;e.onStatus?.("error");const o=s instanceof Error?s.message:String(s);throw te(es,{requestId:n,error:o}),yield{type:"error",content:o,metadata:{error:s}},s}finally{this.activeRequests.delete(n)}}async handleStreamingPromptDirect(e){const n=this.streamCompletion(e);let i;for(;;){if(i=await n.next(),i.done)return i.value.message;const r=i.value;if(r.type==="error")throw new Error(r.content);if(r.type==="done"){const s=await n.next();if(s.done&&s.value)return s.value.message;if(!s.done)continue;throw new Error("Stream completed without return value")}}}sanitizeMessageForAPI(e){const n={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(n.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(n.tool_calls=e.tool_calls),n}sanitizeMessagesForAPI(e){return e.map(n=>this.sanitizeMessageForAPI(n))}async handleStreamingPrompt(e){const n=e.callContext||Xe.createChild({}),i=this.createAgentContext({},n,{userPrompt:e.chatContext.history[e.chatContext.history.length-1]?.content||""}),r=this.agentRegistry.getMatchingAgents(i),s=r.length>0?r.map(c=>c.role):["assistant"],o=await this.executeAgentWorkflow({chatContext:e.chatContext,chatConfig:e.chatConfig,callContext:n,execution:"parallel",stream:e.stream,signal:e.signal,onToken:(c,h)=>{e.onToken?.(h)},onStatus:(c,h)=>{e.onStatus?.(h)},roles:s}),l=Array.from(o.messages.values());return l.length===1?l[0]:l}async continueWorkflow(e,n,i){const r={sharedState:{...i.sharedState,...Object.fromEntries(n)}},s={...i,sharedState:r.sharedState,pauseOnAttention:!1};return this.executeAgentWorkflow(s)}cancelRequest(e){const n=this.activeRequests.get(e);return n?(n.abort(),this.activeRequests.delete(e),!0):!1}async executeAgentWorkflow(e){const n=this.createAgentContext(e.sharedState||{},e.callContext),i=this.agentRegistry.getMatchingAgents(n,e.roles);return this.workflowEngine.execute(i,e,async(r,s,o,l,c,h)=>this.executeAgent(r,s,o,l,c,h))}async executeAgent(e,n,i,r,s,o){s.onAgentStart?.(e.role);const l=this.createAgentContext(i,s.callContext,{userPrompt:n[n.length-1]?.content||""}),{messages:c,tools:h}=await this.promptBuilder.build(e,n,l,e.hooks),u=c.map(C=>{const P={role:C.role,content:C.content};return C.tool_call_id&&(P.tool_call_id=C.tool_call_id),C.tool_calls&&(P.tool_calls=C.tool_calls),P});let p=await this.handleStreamingPromptDirect({chatContext:{history:u},chatConfig:r,callContext:s.callContext,stream:s.stream??!0,signal:s.signal,tools:h}),g=0;const b=[...c];for(;p.toolCalls&&p.toolCalls.length>0;){if(g++,g>ra){console.warn(`[AIService] Maximum tool call iterations (${ra}) reached`);break}let C=[];if(s.requireToolApproval&&s.onToolApprovalRequest){const D=p.toolCalls.map(ue=>{const De=ue.function.arguments||"{}";let Ee={};try{Ee=JSON.parse(De)}catch{Ee={}}return`${ue.function.name}(${Object.entries(Ee).map(([_e,$e])=>`${_e}=${$e}`).join(", ")})`}).join(", "),be={toolCalls:p.toolCalls,message:`The AI wants to execute: ${D}`};await s.onToolApprovalRequest(e.role,be)?C=await this.toolExecutor.executeToolCalls(p.toolCalls,l):C=p.toolCalls.map(ue=>({id:ue.id,result:{success:!1,message:"Tool execution cancelled by user",cancelled:!0}}))}else C=await this.toolExecutor.executeToolCalls(p.toolCalls,l);const P=C.map(D=>({role:"tool",content:D.error?JSON.stringify({error:D.error}):JSON.stringify(D.result),tool_call_id:D.id})),R={role:"assistant",content:p.content||""};p.toolCalls&&p.toolCalls.length>0&&(R.tool_calls=p.toolCalls.filter(D=>D.function.name&&D.function.name.trim().length>0).map(D=>({id:D.id,type:D.type,function:{name:D.function.name,arguments:D.function.arguments||"{}"}}))),b.push(R,...P);const I=b;p=await this.handleStreamingPromptDirect({chatContext:{history:I.map(D=>({role:D.role,content:D.content,...D.tool_call_id&&{tool_call_id:D.tool_call_id},...D.tool_calls&&{tool_calls:D.tool_calls}}))},chatConfig:r,callContext:s.callContext,stream:s.stream??!0,signal:s.signal,tools:h});const _=p.content&&p.content.trim().length>0,G=p.toolCalls&&p.toolCalls.length>0;if(_&&!G)break;if(_&&G){console.warn("[AIService] Model provided content but also called tools - treating as completion");break}}const w=await this.messageProcessor.process(p,e,this.createAgentContext(i,s.callContext,{message:p}));e.hooks?.afterReceive&&await e.hooks.afterReceive(w,this.createAgentContext(i,s.callContext));const k=this.createFinalMessage(e,w);return!await this.handleUserAttention(e.role,k,s,o)&&s.pauseOnAttention?null:(o.messages.set(e.role,k),s.onAgentComplete?.(e.role,k),k)}}const hy=new w0;z.registerContribution(Ie,{target:Ie,label:"Ollama (Local)",provider:{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"https://<your-server>/v1/chat/completions",apiKey:""}});z.registerContribution(Ie,{target:Ie,label:"OpenWebUI (Self Hosted)",provider:{name:"openwebui",model:"gemma3:12b",chatApiEndpoint:"https://<your-server>/api/v1/chat/completion",apiKey:""}});z.registerContribution(Ie,{target:Ie,label:"OpenAI",provider:{name:"openai",model:"gpt-4.1",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"}});z.registerContribution(Ie,{target:Ie,label:"Groq",provider:{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"}});z.registerContribution(Ie,{target:Ie,label:"Cerebras",provider:{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"}});z.registerContribution(Ie,{target:Ie,label:"WebLLM",provider:{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}});z.registerContribution(Ie,{target:Ie,label:"Mistral",provider:{name:"mistral",model:"mistral-large-latest",chatApiEndpoint:"https://api.mistral.ai/v1/chat/completions",apiKey:"<your api key>",ocrApiEndpoint:"https://api.mistral.ai/v1/ocr",ocrModel:"mistral-ocr-latest"}});z.registerContribution(Ie,{target:Ie,label:"LiteLLM",provider:{name:"litellm",model:"gpt-3.5-turbo",chatApiEndpoint:"https://<your-server>/v1/chat/completions",apiKey:"<your api key>"}});z.registerContribution(Jo,{name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>f`<k-filebrowser id="${t}"></k-filebrowser>`});z.registerContribution(yd,{name:"aiview",label:"AI",icon:"robot",component:t=>f`<k-aiview id="${t}"></k-aiview>`});z.registerContribution("system.fastviews-bottomend",{name:"log-terminal",label:"Log Messages",icon:"list",component:t=>f`<k-log-terminal id="${t}"></k-log-terminal>`});z.registerContribution(vd,{slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"});z.registerContribution(js,{label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});z.registerContribution(js,{label:"Fast Views",html:'<k-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></k-fastviews>'});z.registerContribution(js,{label:"Language",html:()=>f`<k-language-selector></k-language-selector>`});z.registerContribution(Ui,{label:"App Switcher",html:()=>f`<k-app-switcher></k-app-switcher>`});const jr=dn("OpenVSXClient");class Hd{constructor(e="https://open-vsx.org/api"){this.baseUrl=e.replace(/\/$/,"")}async search(e,n=20,i=0){try{const r=`${this.baseUrl}/-/search?query=${encodeURIComponent(e)}&size=${n}&offset=${i}`;jr.debug(`Searching Open VSX: ${r}`);const s=await fetch(r,{method:"GET",headers:{Accept:"application/json"}});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const o=await s.json();return{extensions:o.extensions||[],offset:o.offset||i,totalSize:o.totalSize||0}}catch(r){throw jr.error(`Failed to search Open VSX: ${r}`),r}}async getExtension(e,n,i){try{const r=i?`${this.baseUrl}/${e}/${n}/${i}`:`${this.baseUrl}/${e}/${n}`;jr.debug(`Fetching extension from Open VSX: ${r}`);const s=await fetch(r,{method:"GET",headers:{Accept:"application/json"}});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);return await s.json()}catch(r){throw jr.error(`Failed to get extension from Open VSX: ${r}`),r}}getDownloadUrl(e){if(e.files?.download)return e.files.download;const n=e.namespace,i=e.name,r=e.version;if(n&&i&&r)return`${this.baseUrl}/${n}/${i}/${r}/file/${n}.${i}-${r}.vsix`}getExtensionId(e){return`${e.namespace}.${e.name}`}}const sa=new Hd,v0=Object.freeze(Object.defineProperty({__proto__:null,OpenVSXClient:Hd,openVSXClient:sa},Symbol.toStringTag,{value:"Module"})),le=dn("MarketplaceRegistry"),To="events/marketplaceregistry/changed",ic="marketplace.catalogUrls";class y0{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(e=>{le.error(`Failed to refresh catalogs on init: ${e.message}`)})}),Se(To,()=>{this.registerMarketplaceExtensions()})}async loadCatalogUrls(){try{const e=await de.get(ic);this.catalogUrls=Array.isArray(e)?e:[],le.debug(`Loaded ${this.catalogUrls.length} catalog URLs`)}catch(e){le.error(`Failed to load catalog URLs: ${e}`),this.catalogUrls=[]}}async saveCatalogUrls(){await de.set(ic,this.catalogUrls),te(To,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(e){if(!this.isValidUrl(e))throw new Error(`Invalid catalog URL: ${e}`);if(this.catalogUrls.includes(e)){le.debug(`Catalog URL already exists: ${e}`);return}this.catalogUrls.push(e),await this.saveCatalogUrls(),le.info(`Added catalog URL: ${e}`);try{await this.refreshCatalogs()}catch(n){le.warn(`Failed to refresh catalogs immediately after adding: ${n}`)}}async removeCatalogUrl(e){const n=this.catalogUrls.indexOf(e);n!==-1&&(this.catalogUrls.splice(n,1),await this.saveCatalogUrls(),le.info(`Removed catalog URL: ${e}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(e){try{const n=new URL(e);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}async fetchCatalog(e){const n=this.loadingPromises.get(e);if(n)return n;const i=(async()=>{try{le.debug(`Fetching catalog from: ${e}`);const r=await fetch(e,{method:"GET",headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const s=await r.json();if((!s.extensions||!Array.isArray(s.extensions))&&(!s.apps||!Array.isArray(s.apps)))throw new Error("Invalid catalog format: at least one of extensions or apps array is required");const o={name:s.name,description:s.description,extensions:s.extensions||[],apps:s.apps||[]},l=o.extensions?.length||0,c=o.apps?.length||0;return le.debug(`Successfully fetched catalog from ${e}: ${l} extensions, ${c} apps`),o}catch(r){throw le.error(`Failed to fetch catalog from ${e}: ${r}`),r}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,i),i}async refreshCatalogs(){le.info(`Refreshing ${this.catalogUrls.length} catalogs...`);const e=this.catalogUrls.map(i=>this.fetchCatalog(i).catch(r=>(le.warn(`Failed to refresh catalog ${i}: ${r.message}`),null)));(await Promise.allSettled(e)).forEach((i,r)=>{if(i.status==="fulfilled"&&i.value){const s=i.value;s.extensions&&s.extensions.forEach(o=>{if(!M.getExtensions().find(l=>l.id===o.id)){const l={...o,external:!0};M.registerExtension(l),le.debug(`Registered marketplace extension: ${o.id}${l.url?.endsWith(".vsix")?" (VSIX)":""}`)}}),s.apps&&s.apps.forEach(o=>{if(!ye.getRegisteredApps().find(l=>l.id===o.id)){const l={...o,metadata:{...o.metadata,marketplaceUrl:o.url}};ye.registerApp(l),le.debug(`Registered marketplace app: ${o.id} from ${o.url}`)}})}}),te(To,{type:"refreshed"}),le.info("Catalog refresh completed")}registerMarketplaceExtensions(){}getMarketplaceExtensions(){return[]}getMarketplaceExtension(e){const n=M.getExtensions().find(i=>i.id===e);if(n&&n.external)return n}getCatalogsWithExtensions(){return[]}async installExtension(e){if(M.isEnabled(e.id)){le.info(`Extension ${e.id} is already installed`);return}le.info(`Installing marketplace extension: ${e.name} from ${e.url}`);const n={...e,external:!0};M.registerExtension(n),e.url?.endsWith(".vsix")?await M.enable(e.id):await ye.loadExtensionFromUrl(e.url),le.info(`Successfully installed marketplace extension: ${e.id}`)}async installOpenVSXExtension(e){const n=sa.getExtensionId(e);if(M.isEnabled(n)){le.info(`Open VSX extension ${n} is already installed`);return}le.info(`Installing Open VSX extension: ${e.metadata?.displayName||n}`);const i=sa.getDownloadUrl(e);if(!i)throw new Error(`No download URL available for extension ${n}`);const r={id:n,name:e.metadata?.displayName||e.name,description:e.metadata?.description||e.description,version:e.version,author:e.publisher||e.metadata?.publisher,url:i,external:!0};M.registerExtension(r),await M.enable(n),le.info(`Successfully installed Open VSX extension: ${n}`)}async installExtensionFromGitHub(e,n){const{GitHubUrlParser:i}=await se(async()=>{const{GitHubUrlParser:l}=await import("./github-url-parser-DrTlzD8v.js");return{GitHubUrlParser:l}},[]),{GitHubExtensionLoader:r}=await se(async()=>{const{GitHubExtensionLoader:l}=await import("./github-extension-loader-BMVCpzTL.js");return{GitHubExtensionLoader:l}},__vite__mapDeps([0,1]));let s;try{s=i.parse(e),n?.ref&&(s.ref=n.ref),n?.path&&(s.path=n.path)}catch(l){throw new Error(`Invalid GitHub URL: ${l}`)}const o=n?.extensionId||`github.${s.owner}.${s.repo}`;if(M.isEnabled(o)){le.info(`Extension ${o} is already installed`);return}le.info(`Installing extension from GitHub: ${s.owner}/${s.repo}@${s.ref||"main"}`);try{const l=await r.resolveExtensionUrl(i.toGitHubUrl(s)),c={id:o,name:n?.name||`${s.owner}/${s.repo}`,description:`Extension from GitHub: ${s.owner}/${s.repo}`,url:l,external:!0,github:{owner:s.owner,repo:s.repo,ref:s.ref,path:s.path}};M.registerExtension(c),await M.enable(o),le.info(`Successfully installed GitHub extension: ${o}`)}catch(l){throw le.error(`Failed to install GitHub extension: ${l}`),new Error(`Failed to install extension from GitHub: ${l}`)}}isMarketplaceExtension(e){const n=M.getExtensions().find(i=>i.id===e);return n!==void 0&&n.external===!0}getMarketplaceApps(){return ye.getRegisteredApps().filter(e=>this.getMarketplaceApp(e.id)!==void 0)}getMarketplaceApp(e){const n=ye.getRegisteredApps().find(r=>r.id===e);if(!n)return;const i=n.metadata?.marketplaceUrl;if(!(!i||typeof i!="string"))return{id:n.id,name:n.name,version:n.version,description:n.description,metadata:n.metadata,extensions:n.extensions,contributions:n.contributions,releaseHistory:n.releaseHistory,url:i}}async installApp(e){if(ye.getRegisteredApps().find(i=>i.id===e.id)){le.info(`App ${e.id} is already registered`);return}le.info(`Installing marketplace app: ${e.name} from ${e.url}`);try{const i=await ye.loadAppFromUrl(e.url);ye.registerApp(i),le.info(`Successfully installed marketplace app: ${e.id}`)}catch(i){throw le.error(`Failed to install marketplace app ${e.id}: ${i}`),i}}isMarketplaceApp(e){return this.getMarketplaceApp(e)!==void 0}}const Wa=new y0;Xe.put("marketplaceRegistry",Wa);const x0=dn("MarketplaceCatalogContributions");Wa.addCatalogUrl("https://marketplace.kispace.de/externals.json").catch(t=>{x0.warn(`Failed to add commercial catalog: ${t}`)});const k0={enhance:async(t,e)=>{try{const n=await yt.getWorkspace(),i=Bi.getEditorArea()?.getActiveEditor(),r={workspace:n?.getName()||null,activeEditor:i?{title:i.input?.title||null,editorId:i.input?.editorId||null}:null},s=`***App's state:***
${JSON.stringify(r,null,2)}`;return`${t}

${s}`}catch{return t}},priority:20};z.registerContribution(Ha,{label:"App State Enhancer",enhancer:k0});const tr=dn("HowToService"),$s="system.howtos";class E0{constructor(){this.contributions=new Map,this.loadContributions(),Se(Nt,e=>{e.target===$s&&this.loadContributions()})}loadContributions(){const e=z.getContributions($s);this.contributions.clear();for(const n of e){if(!n.id){tr.warn("HowTo contribution missing id, skipping");continue}if(!n.label){const s=typeof n.title=="function"?n.title():n.title;n.label=s}if(!n.steps||n.steps.length===0){tr.warn(`HowTo contribution "${n.id}" has no steps, skipping`);continue}const i=new Set;for(const s of n.steps){if(i.has(s.id)){tr.warn(`HowTo contribution "${n.id}" has duplicate step ID: "${s.id}"`);continue}i.add(s.id)}this.contributions.set(n.id,n);const r=typeof n.title=="function"?n.title():n.title;tr.debug(`Loaded HowTo contribution: ${r} (${n.id})`)}tr.info(`Loaded ${this.contributions.size} HowTo contributions`)}getContribution(e){return this.contributions.get(e)}getAllContributions(){return Array.from(this.contributions.values())}getContributionsByCategory(e){return Array.from(this.contributions.values()).filter(n=>n.category===e)}hasContribution(e){return this.contributions.has(e)}}const uy=new E0,As="welcome.txt";function C0(t){return t&&typeof t.getFilePath=="function"}async function S0(){return yt.isConnected()}async function rc(){const t=await yt.getWorkspace();if(!t)return!1;try{return await t.getResource(As)instanceof cn}catch{return!1}}function dr(){const t=Lt.get();return!t||!C0(t)?!1:t.getFilePath()===As}function $0(){if(!dr())return!1;const t=Lt.get();return t?t.isDirty()===!1:!1}function A0(){return!dr()}function sc(){return ye.getCurrentApp()?.name||"AppSpace"}const _0={id:"appspace.onboarding",title:()=>`Welcome to ${sc()}`,description:()=>`Get started with ${sc()} by learning the basics of workspace and file management`,icon:"graduation-cap",label:"",category:"Getting Started",initialize:t=>{const e=[];return Se(Rt,()=>{t.requestUpdate()}),Se(_i,()=>{t.requestUpdate()}),e.push(wi(Lt,()=>{t.requestUpdate()})),e.push(wi(gr,()=>{t.requestUpdate()})),()=>{e.forEach(n=>n())}},steps:[{id:"create-text-file",title:"Create welcome.txt",description:`Create a new text file called "welcome.txt" in your workspace. If you don't have a workspace selected, choose one first.`,preCondition:async()=>await S0(),postCondition:async()=>await rc(),command:"create_file",commandParams:{path:As,contents:`Welcome to AppSpace!

This is your first file. You can edit it and save your changes.`}},{id:"open-text-file",title:"Open welcome.txt",description:'Open the "welcome.txt" file in the editor.',preCondition:async()=>await rc(),postCondition:()=>dr(),command:"open_editor",commandParams:{path:As}},{id:"edit-and-save",title:"Type something and save",description:"Type some text in the editor to modify the file, then save it using Ctrl+S or the save button.",preCondition:()=>dr(),postCondition:()=>$0()},{id:"close-text-file",title:"Close the file",description:"Close the editor tab by clicking the X button on the tab.",preCondition:()=>dr(),postCondition:()=>A0()}]};z.registerContribution($s,_0);const Wd=".system.ai-config";function jd(t){return t&&typeof t.getFilePath=="function"}function hr(){const t=Lt.get();return!t||!jd(t)?!1:t.getFilePath()===Wd}async function oc(){try{const t=await de.get(Mn);if(!t||!t.defaultProvider)return!1;const e=t.providers?.find(n=>n.name===t.defaultProvider);return e?!!e.apiKey&&e.apiKey.trim()!=="":!1}catch{return!1}}function T0(){const t=Lt.get();return!t||!jd(t)||t.getFilePath()!==Wd?!1:t.isDirty()===!0}function R0(){return hr()?!T0():!1}function L0(){return!hr()}async function O0(){try{const t=await de.get("aiChatSessions");if(!t||typeof t!="object")return!1;for(const e in t){const n=t[e];if(n?.history&&Array.isArray(n.history)&&n.history.some(r=>r.role==="user"&&r.content&&r.content.trim()!==""))return!0}return!1}catch{return!1}}function ac(){return ye.getCurrentApp()?.name||"AppSpace"}const I0={id:"appspace.ai-setup",title:()=>`Set up AI in ${ac()}`,description:()=>`Configure an LLM provider to enable AI chat features in ${ac()}`,icon:"robot",label:"",category:"Getting Started",initialize:t=>{const e=[];return e.push(wi(Lt,()=>{t.requestUpdate()})),e.push(wi(gr,()=>{t.requestUpdate()})),Se(qa,()=>{t.requestUpdate()}),()=>{e.forEach(n=>n())}},steps:[{id:"open-ai-settings",title:"Open AI Settings",description:"Open the AI settings editor by clicking the robot icon in the toolbar or using the command palette.",preCondition:()=>!0,postCondition:()=>hr(),command:"open_ai_config"},{id:"configure-llm-provider",title:"Configure LLM Provider",description:"Select a provider as default and enter an API key. Make sure to save your changes using Ctrl+S or the save button.",preCondition:()=>hr(),postCondition:async()=>{const t=await oc(),e=R0();return t&&e}},{id:"save-and-close",title:"Save and Close",description:"Save your changes (if not already saved) and close the AI settings editor tab.",preCondition:()=>hr(),postCondition:()=>L0()},{id:"type-in-chat",title:"Type in Chat",description:"Open the AI chat view (if not already open) and type a message to test your AI configuration.",preCondition:async()=>await oc(),postCondition:async()=>await O0()}]};z.registerContribution($s,I0);async function Ks(t,e=!0){const n=await yt.getWorkspace();if(!n)return null;const i=t?.path;return e&&!i?null:{workspace:n,path:i||""}}function ja(t){return t&&typeof t.getContent=="function"&&typeof t.getSelection=="function"&&typeof t.getSnippet=="function"&&typeof t.getLanguage=="function"&&typeof t.getFilePath=="function"}async function Gd(t,e){let n;const i=t.params?.path;if(i){const r=await yt.getWorkspace();r&&(n=await r.getResource(i))}return n||(n=zn.get()),n}async function Ys(t){try{const e=await t.getContents();return typeof e!="string"?(xe("File is not a text file"),null):e}catch(e){return xe(`Failed to read file: ${e.message}`),null}}function wn(t=!1){const e={filePath:null,language:null};return t?{...e,snippet:null,cursorLine:null}:e}async function Rr(t,e=!0){const n=await Ks(t,e);if(!n)return null;const{workspace:i,path:r}=n;if(!r)return null;try{const s=await i.getResource(r);return!s||!(s instanceof cn)?null:{workspace:i,path:r,file:s}}catch{return null}}he({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace. For .geospace map files, use create_map_file instead.",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async({params:t})=>{let e=t?.path;const n=t?.contents,i=t?.ask,r=t?.extension;if((i||!e)&&(e=await Vc("Enter path to new file (directories will be created if not exist):",e||""),!e))return;r&&!e.endsWith(r)&&(e+=r);const s=await Ks({path:e},!0);if(!s)return;const{workspace:o}=s;if(await o.getResource(e)&&!await Ms(`File "${e}" already exists. Do you want to overwrite it?`))return;const c=await o.getResource(e,{create:!0});return c?(n&&await c.saveContents(n),Y.info("File created: "+e)):xe("Could not create file: "+e),e}}});he({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{const e=await Gd(t);if(!e){xe("No resource to rename provided!");return}const n=e.getName(),i=t.params?.newName||await Vc(`Enter new name for "${n}":`,n);if(!(!i||i===n))try{await e.rename(i),Ut(`Resource renamed to: ${i}`)}catch(r){xe(`Failed to rename ${n}: ${r.message}`)}}}});he({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{const e=await Gd(t);if(!e){xe("No resource to delete provided!");return}const n=e.getWorkspacePath(),i=t.params&&t.params.confirm;let r=!0;if((i===void 0||i===!0)&&(r=await Ms(`Are you sure you want to delete ${n}?`)),r)try{await e.delete(),Ut("Resource deleted: "+n)}catch(s){xe(`Resource ${n} could not be deleted: ${s.message||s}`)}}}});he({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>yt.connectWorkspace(e)).catch(e=>{xe(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});he({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await yt.getWorkspace();e||xe("No workspace selected."),e.touch()}}});he({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Rr({path:t.params?.path});if(!e)return;const{file:n}=e;await Bi.loadEditor(n)}}});he({command:{id:"head_file",name:"Head - Show first lines",description:"Shows the first N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the beginning (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the first N lines of the file"}]},handler:{execute:async({params:t})=>{const e=await Rr(t);if(!e)return;const{file:n}=e,i=t?.lines?parseInt(t.lines,10):10;if(isNaN(i)||i<1){xe("Number of lines must be a positive integer");return}const r=await Ys(n);return r?r.split(`
`).slice(0,i).join(`
`):void 0}}});he({command:{id:"tail_file",name:"Tail - Show last lines",description:"Shows the last N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the end (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the last N lines of the file"}]},handler:{execute:async({params:t})=>{const e=await Rr(t);if(!e)return;const{file:n}=e,i=t?.lines?parseInt(t.lines,10):10;if(isNaN(i)||i<1){xe("Number of lines must be a positive integer");return}const r=await Ys(n);return r?r.split(`
`).slice(-i).join(`
`):void 0}}});he({command:{id:"cat_file",name:"Cat - Show file contents",description:"Shows the complete contents of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0}],output:[{name:"content",description:"the complete contents of the file"}]},handler:{execute:async({params:t})=>{const e=await Rr(t);if(!e)return;const{file:n}=e;return await Ys(n)}}});he({command:{id:"wc_file",name:"Word count",description:"Counts lines, words, and characters in a file",parameters:[{name:"path",description:"the path of the file to analyze",required:!0}],output:[{name:"lines",description:"number of lines in the file"},{name:"words",description:"number of words in the file"},{name:"characters",description:"number of characters in the file"}]},handler:{execute:async({params:t})=>{const e=await Rr(t);if(!e)return;const{file:n}=e,i=await Ys(n);if(!i)return;const s=i.split(`
`).length,o=i.trim()===""?0:i.trim().split(/\s+/).filter(c=>c.length>0).length,l=i.length;return{lines:s,words:o,characters:l}}}});he({command:{id:"file_exists",name:"Check if file exists",description:"Checks if a file exists at the given path",parameters:[{name:"path",description:"the path of the file to check, relative to the workspace",required:!0}],output:[{name:"exists",description:"true if the file exists, false otherwise"}]},handler:{execute:async({params:t})=>{const e=await Ks(t);if(!e)return!1;const{workspace:n,path:i}=e;try{return await n.getResource(i)instanceof cn}catch{return!1}}}});async function Xd(t){const e=[],n=await t.listChildren(!0);for(const i of n)if(i instanceof cn)e.push(i.getWorkspacePath());else if(i instanceof mi){const r=await Xd(i);e.push(...r)}return e}he({command:{id:"ls",name:"List files",description:"Lists files from a directory. If recursive is provided, it traverses from the provided directory down to all leaves. If no directory is provided, it will traverse from the workspace root.",parameters:[{name:"path",description:"the path of the directory to list, relative to the workspace. If not provided, uses workspace root",required:!1},{name:"recursive",description:"whether to recursively traverse all subdirectories",type:"boolean",required:!1}],output:[{name:"files",description:"array of file objects with path and size information"}]},handler:{execute:async({params:t})=>{const e=await Ks(t,!1);if(!e)return xe("No workspace available"),[];const{workspace:n,path:i}=e,r=t?.recursive===!0||t?.recursive==="true";try{let s=n;if(i){const o=await n.getResource(i);if(!o)return xe(`Path not found: ${i}`),[];if(!(o instanceof mi))return xe(`Path is not a directory: ${i}`),[];s=o}if(r){const o=await Xd(s),l=[];for(const c of o){const h=await n.getResource(c);if(h instanceof cn){const u=await h.size();l.push({path:c,size:u})}}return l}else{const o=await s.listChildren(!0),l=[];for(const c of o)if(c instanceof cn){const h=await c.size();l.push({path:c.getWorkspacePath(),size:h})}return l}}catch(s){return xe(`Failed to list files: ${s.message}`),[]}}}});he({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!ja(e))return{...wn(),content:null};try{return{content:e.getContent(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...wn(),content:null}}}}});he({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!ja(e))return{...wn(),selection:null};try{return{selection:e.getSelection(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...wn(),selection:null}}}}});he({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!ja(e))return wn(!0);try{const n=t.params?.lines?parseInt(t.params.lines,10):5;if(isNaN(n)||n<0)return wn(!0);const i=e.getSnippet(n);return i?{snippet:i.snippet,filePath:e.getFilePath(),language:e.getLanguage(),cursorLine:i.cursorLine}:wn(!0)}catch{return wn(!0)}}}});function D0(t){return new Worker("/assets/pyworker-Drd8fvVW.js",{type:"module",name:t?.name})}let Ro=null;async function z0(){return Ro||(Ro=se(()=>import("./index-BWy4JpWt.js").then(t=>t.i),[])),Ro}let P0=0;class M0{constructor(){this.pendingMessages=new Map}async init(e,n){this.workspace=e,this.vars=n??{},this.worker=new D0,this.worker.onmessage=i=>{this.handleWorkerMessage(i.data)},this.worker.onerror=i=>{console.error("Python Worker error:",i)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const i=e.payload.prompt||"Input:",r=window.prompt(i);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:r,cancelled:r===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:i,message:r}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",r,i);return}const n=this.pendingMessages.get(e.id);n&&(this.pendingMessages.delete(e.id),e.type==="success"?n.resolve(e.payload):e.type==="error"&&n.reject(new Error(e.payload.message)))}async sendMessage(e,n){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const i=`msg-${P0++}`,r={id:i,type:e,payload:n};return new Promise((s,o)=>{this.pendingMessages.set(i,{resolve:s,reject:o}),this.worker.postMessage(r)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,n){const i=await this.sendMessage("runFunction",{name:e,args:n});return te(Rt,this.workspace),i}async setGlobal(e,n){await this.sendMessage("setGlobal",{key:e,value:n})}async mountWorkspace(e="/workspace"){const n=await yt.getWorkspace();await this.sendMessage("mountWorkspace",{handle:n.getHandle(),mountPoint:e})}async installDependencies(){const e=await this.workspace?.getResource("requirements.txt");if(e){const n=(await e.getContents()).replaceAll("\r",""),{parsePipRequirementsFile:i}=await z0(),r=i(n).filter(s=>"name"in s).map(s=>s.name);await this.loadPackages(r)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),te(Rt,this.workspace)}async execCode(e){const n=await this.sendMessage("execCode",{code:e});return te(Rt,this.workspace),n}async execScript(e){const n=e.split(".")[0],i=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(n,i)}async execModule(e,n){const i=await this.sendMessage("execModule",{moduleName:e,entryName:n,vars:this.vars});return te(Rt,this.workspace),i}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class N0{constructor(){this.packages=[]}addPackage(e){this.packages.push(e)}hasPackages(){return this.packages.length>0&&this.packages.some(e=>e.dependencies&&Object.keys(e.dependencies).length>0)}renderTree(){return this.packages.length===0?f``:f`
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
        `}}const oa=new N0;he({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{const e=ye.getCurrentApp();if(!e){xe("No app loaded");return}const n=oa.hasPackages(),i=oa.renderTree();let r=null;const s=()=>(r||(r=document.getElementById("global-dialog-container")||document.createElement("div"),r.id||(r.id="global-dialog-container",document.body.appendChild(r))),r),o=()=>{r&&Et(f``,r)},l=O=>{const C=re.parse(O,{async:!1});return f`${tn(C)}`};let c=[];if(e.releaseHistory)if(typeof e.releaseHistory=="function")try{c=await e.releaseHistory()}catch(O){console.error("Failed to load release history from app:",O),c=[]}else c=e.releaseHistory;e.version;const h=c.length>0?c.findIndex(O=>O.tag_name===e.version):-1,u=h>=0?h:0;let p=u;const g=O=>{if(c.length===0)return"";const C=c[O],P=C.tag_name===e.version;let R=`**Version:** ${C.tag_name}`;P&&(R+=" (Current)"),R+=`

`;const I=new Date(C.published_at).toLocaleDateString();if(R+=`**Released:** ${I}

`,!P){const _=e.version.replace(/^v/,""),G=C.tag_name.replace(/^v/,""),D=_.split(".").map(Number),be=G.split(".").map(Number);let we=!1;for(let ue=0;ue<Math.max(D.length,be.length);ue++){const De=D[ue]||0,Ee=be[ue]||0;if(Ee>De){we=!0;break}if(Ee<De)break}we&&(R+=`⚠️ **Update available - reload page to update**

`)}return C.body&&(R+=`---

${C.body}`),R},b=()=>{o()},w=()=>{o()},k=O=>{const C=g(O),P=c.length>0,R=f`
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
                                        ${l(C)}
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
                                    ?disabled=${O===c.length-1}
                                    @click=${()=>{O<c.length-1&&(p=O+1,k(p))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${O===0}
                                    @click=${()=>{O>0&&(p=O-1,k(p))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;Et(R,s())};return k(u),new Promise(O=>{const C=()=>{r?.querySelector("wa-dialog[open]")?setTimeout(C,100):O()};C()})}}});he({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async t=>{const e=t.params.script;if(!e)return;const n=new M0,i=await yt.getWorkspace();await n.init(i,t),await n.installDependencies(),await n.execScript(e)}}});he({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});he({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=Lt.get()||mt.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const t=mt.get();return!t||!t.isDirty()}}});he({command:{id:"run_python",name:"Run Python Cell",description:"Runs active Python code in a supporting context (e.g. notebook, terminal, etc.)",keyBinding:"CTRL+R",parameters:[]}});const Kd="theme";async function Yd(t){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(t)}async function F0(){const t=await de.get(Kd);await Yd(t||"wa-dark")}async function U0(t){await de.set(Kd,t)}he({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{const n=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await Yd(n),await U0(n)}},contribution:{target:Ui,icon:"circle-half-stroke",label:"Theme Switcher"}});F0().catch(t=>{console.error("Failed to load theme preference:",t)});he({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:Ui,icon:"expand",label:"Fullscreen"}});he({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:async t=>{await se(()=>import("./k-monaco-editor-CpUYCult.js"),__vite__mapDeps([10,11,12,13]));const e={title:"settings.json",data:{async getContents(){const n=await de.getAll();return JSON.stringify(n,void 0,2)},getName(){return e.key},saveContents(n){const i=JSON.parse(n);return de.setAll(i)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};e.widgetFactory=()=>f`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,Bi.loadEditor(e).then()}},contribution:{target:Ui,icon:"gear",label:"Open Settings"}});he({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>f`
                <k-extensions></k-extensions>`,Bi.loadEditor(e).then()}},contribution:{target:Ui,icon:"puzzle-piece",label:"Open Extensions"}});he({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async t=>M.getExtensions().map(n=>({id:n.id,name:n.name,description:n.description,experimental:n.experimental,enabled:M.isEnabled(n.id)}))}});he({command:{id:"extensions.installFromGitHub",name:"Install Extension from GitHub",description:"Installs an extension directly from a GitHub repository. Supports formats: owner/repo, owner/repo@branch, owner/repo@tag, or full GitHub URLs.",parameters:[{name:"repoUrl",description:"GitHub repository URL or short format (e.g., 'owner/repo', 'owner/repo@main', 'https://github.com/owner/repo')",required:!0},{name:"ref",description:"Optional branch, tag, or commit hash (overrides ref in URL)",required:!1},{name:"path",description:"Optional path to extension entry file (overrides auto-discovery)",required:!1},{name:"extensionId",description:"Optional custom extension ID (defaults to github.owner.repo)",required:!1},{name:"name",description:"Optional custom extension name (defaults to owner/repo)",required:!1}]},handler:{execute:async t=>{const e=t.params?.repoUrl;if(!e){xe("GitHub repository URL is required");return}try{const n={};t.params?.ref&&(n.ref=t.params.ref),t.params?.path&&(n.path=t.params.path),t.params?.extensionId&&(n.extensionId=t.params.extensionId),t.params?.name&&(n.name=t.params.name),await Wa.installExtensionFromGitHub(e,n),Ut(`Successfully installed extension from GitHub: ${e}`)}catch(n){throw xe(`Failed to install extension from GitHub: ${n.message||n}`),n}}}});he({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?xe(t):Ut(t))}}});const B0="@kispace-io/appspace",V0="1.2.1",q0={"@awesome.me/webawesome":"^3.0.0","@fortawesome/fontawesome-free":"^7.1.0","@fortawesome/fontawesome-svg-core":"^7.1.0","@fortawesome/free-solid-svg-icons":"^7.1.0","@langchain/textsplitters":"^1.0.0","@lit-labs/signals":"^0.1.3","@mlc-ai/web-llm":"^0.2.79","@xenova/transformers":"^2.17.2","@xterm/xterm":"^5.5.0",axios:"^1.13.1",dotenv:"^17.2.3","idb-keyval":"^6.2.2",jsonata:"^2.1.0",jszip:"^3.10.1",lit:"^3.2.1",marked:"^12.0.0 || ^16.4.1","monaco-editor":"0.55.1","pace-js":"^1.2.4","pdfjs-dist":"^4.0.0","pip-requirements-js":"^1.0.2",pyodide:"^0.27.7",rxdb:"^15.0.0",uuid:"^13.0.0","wasm-git":"^0.0.13"},H0={typescript:"^5.9.3",vite:"^7.1.12","vite-plugin-dts":"^4.5.4"},Gr={name:B0,version:V0,dependencies:q0,devDependencies:H0};oa.addPackage({name:Gr.name,version:Gr.version,dependencies:Gr.dependencies,devDependencies:Gr.devDependencies});var W0=Object.defineProperty,j0=Object.getOwnPropertyDescriptor,Lr=(t,e,n,i)=>{for(var r=i>1?void 0:i?j0(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&W0(e,n,r),r};let Ri=class extends Fa{constructor(){super(...arguments),this.showBottomSidebar=!1,this.showBottomPanel=!1,this.showLeftSidebar=!0,this.showAuxSidebar=!0}createRenderRoot(){return this}getGridSizes(){return this.showLeftSidebar&&this.showAuxSidebar?"15%, 65%, 20%":this.showLeftSidebar?"15%, 85%":this.showAuxSidebar?"80%, 20%":"100%"}render(){return f`
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
                <k-toolbar id=${lv}></k-toolbar>
                <k-toolbar id=${cv}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Ui}></k-toolbar>
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
                                    <k-tabs id="${Jo}"></k-tabs>
                                    <k-tabs id="${dv}"></k-tabs>
                                </k-resizable-grid>
                            `:f`<k-tabs id="${Jo}"></k-tabs>`}
                    `:F}
                
                ${this.showBottomPanel?f`
                        <k-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <k-tabs id="${Bn}"></k-tabs>
                            <k-tabs id="${hv}"></k-tabs>
                        </k-resizable-grid>
                    `:f`<k-tabs id="${Bn}"></k-tabs>`}
                
                ${this.showAuxSidebar?f`<k-tabs id="${yd}"></k-tabs>`:F}
            </k-resizable-grid>
            
            <div class="toolbar-bottom">
                <k-toolbar id=${vd}></k-toolbar>
                <k-toolbar id=${Ua}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${js}></k-toolbar>
            </div>
        `}};Lr([d({type:Boolean,attribute:"show-bottom-sidebar"})],Ri.prototype,"showBottomSidebar",2);Lr([d({type:Boolean,attribute:"show-bottom-panel"})],Ri.prototype,"showBottomPanel",2);Lr([d({type:Boolean,attribute:"show-left-sidebar"})],Ri.prototype,"showLeftSidebar",2);Lr([d({type:Boolean,attribute:"show-aux-sidebar"})],Ri.prototype,"showAuxSidebar",2);Ri=Lr([S("k-standard-app")],Ri);ye.registerApp({id:"dev-standard-app",name:"Default App",version:"0.0.0",description:"Default app!space application",extensions:["system.commandpalette","system.mdeditor","system.monaco","system.mediaviewer","system.settings-tree","system.memoryusage","system.ai-system"]},{autoStart:!0});export{$,Qd as A,tn as B,Sc as C,re as D,Bi as E,cn as F,d as G,z as H,Ha as I,vd as J,Xt as K,te as L,Rt as M,mi as N,Et as O,M0 as P,gn as Q,de as R,nn as S,lv as T,Vc as U,Ms as V,Xe as W,o0 as X,Vn as Y,We as Z,se as _,xv as a,Qw as a0,qa as a1,Di as a2,Ld as a3,b0 as a4,n0 as a5,Mn as a6,Ie as a7,zd as a8,Ui as a9,Ud as aa,Bd as ab,Pp as ac,_i as ad,F as ae,Cr as af,$s as ag,Nt as ah,uy as ai,ut as aj,js as ak,Y as al,X0 as am,sy as an,oy as ao,cy as ap,dy as aq,Te as b,dn as c,kc as d,vn as e,S as f,hv as g,hy as h,qe as i,Lt as j,Qn as k,cv as l,ft as m,yn as n,sa as o,kt as p,A as q,he as r,Se as s,Ut as t,xe as u,Gs as v,yt as w,f as x,zn as y,G0 as z};
