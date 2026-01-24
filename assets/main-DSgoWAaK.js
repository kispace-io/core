const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pyterminal-extension-CiYooRre.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-CpJKBzJe.js","assets/transformers-CCl8SIVb.js","assets/__vite-browser-external-DTHgcB49.js","assets/k-monaco-editor-DO62Rz3r.js","assets/editor.main-B-VwInZX.js","assets/editor-Dvl_Svmm.css","assets/package-manager-extension-DvVstccy.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var K0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ih(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Y0(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var n=function i(){var r=!1;try{r=this instanceof i}catch{}return r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var Yr={exports:{}};var rh=Yr.exports,al;function sh(){return al||(al=1,(function(t,e){(function(){var n,i,r,s,o,l,c,h,u,p,g,b,w,k,L,C,z,R,O,_,X,P,be,we,de,Pe,ke,_e,Se,De,W,We,Ye,At,On,eo,Dr,dt,li,to,Hi,zr,no,Mr,Nr,Za,Ja,io,Qa,el,Wi=[].slice,tl={}.hasOwnProperty,nl=function(v,m){for(var y in m)tl.call(m,y)&&(v[y]=m[y]);function x(){this.constructor=v}return x.prototype=m.prototype,v.prototype=new x,v.__super__=m.prototype,v},nh=[].indexOf||function(v){for(var m=0,y=this.length;m<y;m++)if(m in this&&this[m]===v)return m;return-1},il=function(v,m){return function(){return v.apply(m,arguments)}};for(P={className:"",catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},De=function(){var v;return(v=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance.now():void 0)!=null?v:+new Date},We=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,X=window.cancelAnimationFrame||window.mozCancelAnimationFrame,C=function(v,m,y){return typeof v.addEventListener=="function"?v.addEventListener(m,y,!1):(function(){if(typeof v["on"+m]!="function"||typeof v["on"+m].eventListeners!="object"){var x=new h;typeof v["on"+m]=="function"&&x.on(m,v["on"+m]),v["on"+m]=function(E){return x.trigger(m,E)},v["on"+m].eventListeners=x}else var x=v["on"+m].eventListeners;x.on(m,y)})()},We==null&&(We=function(v){return setTimeout(v,50)},X=function(v){return clearTimeout(v)}),At=function(v){var m,y;return m=De(),y=function(){var x;return x=De()-m,x>=33?(m=De(),v(x,function(){return We(y)})):setTimeout(y,33-x)},y()},Ye=function(){var v,m,y;return y=arguments[0],m=arguments[1],v=3<=arguments.length?Wi.call(arguments,2):[],typeof y[m]=="function"?y[m].apply(y,v):y[m]},be=function(){var v,m,y,x,E,T,H;for(m=arguments[0],x=2<=arguments.length?Wi.call(arguments,1):[],T=0,H=x.length;T<H;T++)if(y=x[T],y)for(v in y)tl.call(y,v)&&(E=y[v],m[v]!=null&&typeof m[v]=="object"&&E!=null&&typeof E=="object"?be(m[v],E):m[v]=E);return m},R=function(v){var m,y,x,E,T;for(y=m=0,E=0,T=v.length;E<T;E++)x=v[E],y+=Math.abs(x),m++;return y/m},de=function(v,m){var y,x,E;if(v==null&&(v="options"),m==null&&(m=!0),E=document.querySelector("[data-pace-"+v+"]"),!!E){if(y=E.getAttribute("data-pace-"+v),!m)return y;try{return JSON.parse(y)}catch(T){return x=T,typeof console<"u"&&console!==null?console.error("Error parsing inline pace options",x):void 0}}},c=(function(){function v(){}return v.prototype.on=function(m,y,x,E){var T;return E==null&&(E=!1),this.bindings==null&&(this.bindings={}),(T=this.bindings)[m]==null&&(T[m]=[]),this.bindings[m].push({handler:y,ctx:x,once:E})},v.prototype.once=function(m,y,x){return this.on(m,y,x,!0)},v.prototype.off=function(m,y){var x,E,T;if(((E=this.bindings)!=null?E[m]:void 0)!=null){if(y==null)return delete this.bindings[m];for(x=0,T=[];x<this.bindings[m].length;)this.bindings[m][x].handler===y?T.push(this.bindings[m].splice(x,1)):T.push(x++);return T}},v.prototype.trigger=function(){var m,y,x,E,T,H,K,he,Ee;if(x=arguments[0],m=2<=arguments.length?Wi.call(arguments,1):[],(K=this.bindings)!=null&&K[x]){for(T=0,Ee=[];T<this.bindings[x].length;)he=this.bindings[x][T],E=he.handler,y=he.ctx,H=he.once,E.apply(y??this,m),H?Ee.push(this.bindings[x].splice(T,1)):Ee.push(T++);return Ee}},v})(),p=window.Pace||{},window.Pace=p,be(p,c.prototype),W=p.options=be({},P,window.paceOptions,de()),io=["ajax","document","eventLag","elements"],Mr=0,Za=io.length;Mr<Za;Mr++)dt=io[Mr],W[dt]===!0&&(W[dt]=P[dt]);u=(function(v){nl(m,v);function m(){return Qa=m.__super__.constructor.apply(this,arguments),Qa}return m})(Error),i=(function(){function v(){this.progress=0}return v.prototype.getElement=function(){var m;if(this.el==null){if(m=document.querySelector(W.target),!m)throw new u;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running ");var y=W.className!==""?" "+W.className:"";this.el.innerHTML='<div class="pace-progress'+y+`">
  <div class="pace-progress-inner"></div>
</div>
<div class="pace-activity"></div>`,m.firstChild!=null?m.insertBefore(this.el,m.firstChild):m.appendChild(this.el)}return this.el},v.prototype.finish=function(){var m;return m=this.getElement(),m.className=m.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ")},v.prototype.update=function(m){return this.progress=m,p.trigger("progress",m),this.render()},v.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(m){u=m}return this.el=void 0},v.prototype.render=function(){var m,y,x,E,T,H,K;if(document.querySelector(W.target)==null)return!1;for(m=this.getElement(),E="translate3d("+this.progress+"%, 0, 0)",K=["webkitTransform","msTransform","transform"],T=0,H=K.length;T<H;T++)y=K[T],m.children[0].style[y]=E;return(!this.lastRenderedProgress||this.lastRenderedProgress|this.progress!==0|0)&&(m.children[0].setAttribute("data-progress-text",""+(this.progress|0)+"%"),this.progress>=100?x="99":(x=this.progress<10?"0":"",x+=this.progress|0),m.children[0].setAttribute("data-progress",""+x)),p.trigger("change",this.progress),this.lastRenderedProgress=this.progress},v.prototype.done=function(){return this.progress>=100},v})(),h=(function(){function v(){this.bindings={}}return v.prototype.trigger=function(m,y){var x,E,T,H,K;if(this.bindings[m]!=null){for(H=this.bindings[m],K=[],E=0,T=H.length;E<T;E++)x=H[E],K.push(x.call(this,y));return K}},v.prototype.on=function(m,y){var x;return(x=this.bindings)[m]==null&&(x[m]=[]),this.bindings[m].push(y)},v})(),no=window.XMLHttpRequest,zr=window.XDomainRequest,Hi=window.WebSocket,we=function(v,m){var y,x;x=[];for(y in m.prototype)try{v[y]==null&&typeof m[y]!="function"?typeof Object.defineProperty=="function"?x.push(Object.defineProperty(v,y,{get:(function(E){return function(){return m.prototype[E]}})(y),configurable:!0,enumerable:!0})):x.push(v[y]=m.prototype[y]):x.push(void 0)}catch{}return x},_e=[],p.ignore=function(){var v,m,y;return m=arguments[0],v=2<=arguments.length?Wi.call(arguments,1):[],_e.unshift("ignore"),y=m.apply(null,v),_e.shift(),y},p.track=function(){var v,m,y;return m=arguments[0],v=2<=arguments.length?Wi.call(arguments,1):[],_e.unshift("track"),y=m.apply(null,v),_e.shift(),y},Dr=function(v){var m;if(v==null&&(v="GET"),_e[0]==="track")return"force";if(!_e.length&&W.ajax){if(v==="socket"&&W.ajax.trackWebSockets)return!0;if(m=v.toUpperCase(),nh.call(W.ajax.trackMethods,m)>=0)return!0}return!1},g=(function(v){nl(m,v);function m(){var y,x=this;m.__super__.constructor.apply(this,arguments),y=function(E){var T;return T=E.open,E.open=function(H,K,he){return Dr(H)&&x.trigger("request",{type:H,url:K,request:E}),T.apply(E,arguments)}},window.XMLHttpRequest=function(E){var T;return T=new no(E),y(T),T};try{we(window.XMLHttpRequest,no)}catch{}if(zr!=null){window.XDomainRequest=function(){var E;return E=new zr,y(E),E};try{we(window.XDomainRequest,zr)}catch{}}if(Hi!=null&&W.ajax.trackWebSockets){window.WebSocket=function(E,T){var H;return T!=null?H=new Hi(E,T):H=new Hi(E),Dr("socket")&&x.trigger("request",{type:"socket",url:E,protocols:T,request:H}),H};try{we(window.WebSocket,Hi)}catch{}}}return m})(h),Nr=null,Pe=function(){return Nr==null&&(Nr=new g),Nr},eo=function(v){var m,y,x,E;for(E=W.ajax.ignoreURLs,y=0,x=E.length;y<x;y++)if(m=E[y],typeof m=="string"){if(v.indexOf(m)!==-1)return!0}else if(m.test(v))return!0;return!1},Pe().on("request",function(v){var m,y,x,E,T;if(E=v.type,x=v.request,T=v.url,!eo(T)&&!p.running&&(W.restartOnRequestAfter!==!1||Dr(E)==="force"))return y=arguments,m=W.restartOnRequestAfter||0,typeof m=="boolean"&&(m=0),setTimeout(function(){var H,K,he,Ee,pn,fn;if(E==="socket"?H=x.readyState<1:H=0<(Ee=x.readyState)&&Ee<4,H){for(p.restart(),pn=p.sources,fn=[],K=0,he=pn.length;K<he;K++)if(dt=pn[K],dt instanceof n){dt.watch.apply(dt,y);break}else fn.push(void 0);return fn}},m)}),n=(function(){function v(){this.complete=il(this.complete,this);var m=this;this.elements=[],Pe().on("request",function(){return m.watch.apply(m,arguments)})}return v.prototype.watch=function(m){var y,x,E,T;if(E=m.type,y=m.request,T=m.url,!eo(T))return E==="socket"?x=new k(y,this.complete):x=new L(y,this.complete),this.elements.push(x)},v.prototype.complete=function(m){return this.elements=this.elements.filter(function(y){return y!==m})},v})(),L=(function(){function v(m,y){var x,E,T,H,K,he=this;if(this.progress=0,window.ProgressEvent!=null)for(C(m,"progress",function(Ee){return Ee.lengthComputable?he.progress=100*Ee.loaded/Ee.total:he.progress=he.progress+(100-he.progress)/2},!1),K=["load","abort","timeout","error"],E=0,T=K.length;E<T;E++)x=K[E],C(m,x,function(){return y(he),he.progress=100},!1);else H=m.onreadystatechange,m.onreadystatechange=function(){var Ee;return(Ee=m.readyState)===0||Ee===4?(y(he),he.progress=100):m.readyState===3&&(he.progress=50),typeof H=="function"?H.apply(null,arguments):void 0}}return v})(),k=(function(){function v(m,y){var x,E,T,H,K=this;for(this.progress=0,H=["error","open"],E=0,T=H.length;E<T;E++)x=H[E],C(m,x,function(){return y(K),K.progress=100},!1)}return v})(),s=(function(){function v(m){var y,x,E,T;for(m==null&&(m={}),this.complete=il(this.complete,this),this.elements=[],m.selectors==null&&(m.selectors=[]),T=m.selectors,x=0,E=T.length;x<E;x++)y=T[x],this.elements.push(new o(y,this.complete))}return v.prototype.complete=function(m){return this.elements=this.elements.filter(function(y){return y!==m})},v})(),o=(function(){function v(m,y){this.selector=m,this.completeCallback=y,this.progress=0,this.check()}return v.prototype.check=function(){var m=this;return document.querySelector(this.selector)?this.done():setTimeout((function(){return m.check()}),W.elements.checkInterval)},v.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100},v})(),r=(function(){v.prototype.states={loading:0,interactive:50,complete:100};function v(){var m,y,x=this;this.progress=(y=this.states[document.readyState])!=null?y:100,m=document.onreadystatechange,document.onreadystatechange=function(){return x.states[document.readyState]!=null&&(x.progress=x.states[document.readyState]),typeof m=="function"?m.apply(null,arguments):void 0}}return v})(),l=(function(){function v(){var m,y,x,E,T,H=this;this.progress=0,m=0,T=[],E=0,x=De(),y=setInterval(function(){var K;return K=De()-x-50,x=De(),T.push(K),T.length>W.eventLag.sampleCount&&T.shift(),m=R(T),++E>=W.eventLag.minSamples&&m<W.eventLag.lagThreshold?(H.progress=100,clearInterval(y)):H.progress=100*(3/(m+3))},50)}return v})(),w=(function(){function v(m){this.source=m,this.last=this.sinceLastUpdate=0,this.rate=W.initialRate,this.catchup=0,this.progress=this.lastProgress=0,this.source!=null&&(this.progress=Ye(this.source,"progress"))}return v.prototype.tick=function(m,y){var x;return y==null&&(y=Ye(this.source,"progress")),y>=100&&(this.done=!0),y===this.last?this.sinceLastUpdate+=m:(this.sinceLastUpdate&&(this.rate=(y-this.last)/this.sinceLastUpdate),this.catchup=(y-this.progress)/W.catchupTime,this.sinceLastUpdate=0,this.last=y),y>this.progress&&(this.progress+=this.catchup*m),x=1-Math.pow(this.progress/100,W.easeFactor),this.progress+=x*this.rate*m,this.progress=Math.min(this.lastProgress+W.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},v})(),li=null,On=null,O=null,to=null,z=null,_=null,p.running=!1,ke=function(){if(W.restartOnPushState)return p.restart()},window.history.pushState!=null&&(Ja=window.history.pushState,window.history.pushState=function(){return ke(),Ja.apply(window.history,arguments)}),window.history.replaceState!=null&&(el=window.history.replaceState,window.history.replaceState=function(){return ke(),el.apply(window.history,arguments)}),b={ajax:n,elements:s,document:r,eventLag:l},(Se=function(){var v,m,y,x,E,T,H,K;for(p.sources=li=[],T=["ajax","elements","document","eventLag"],m=0,x=T.length;m<x;m++)v=T[m],W[v]!==!1&&li.push(new b[v](W[v]));for(K=(H=W.extraSources)!=null?H:[],y=0,E=K.length;y<E;y++)dt=K[y],li.push(new dt(W));return p.bar=O=new i,On=[],to=new w})(),p.stop=function(){return p.trigger("stop"),p.running=!1,O.destroy(),_=!0,z!=null&&(typeof X=="function"&&X(z),z=null),Se()},p.restart=function(){return p.trigger("restart"),p.stop(),p.start()},p.go=function(){var v;return p.running=!0,O.render(),v=De(),_=!1,z=At(function(m,y){var x,E,T,H,K,he,Ee,pn,fn,ro,so,oo,rl,sl,ol;for(100-O.progress,E=ro=0,T=!0,he=so=0,rl=li.length;so<rl;he=++so)for(dt=li[he],fn=On[he]!=null?On[he]:On[he]=[],K=(ol=dt.elements)!=null?ol:[dt],Ee=oo=0,sl=K.length;oo<sl;Ee=++oo)H=K[Ee],pn=fn[Ee]!=null?fn[Ee]:fn[Ee]=new w(H),T&=pn.done,!pn.done&&(E++,ro+=pn.tick(m));return x=ro/E,O.update(to.tick(m,x)),O.done()||T||_?(O.update(100),p.trigger("done"),setTimeout(function(){return O.finish(),p.running=!1,p.trigger("hide")},Math.max(W.ghostTime,Math.max(W.minTime-(De()-v),0)))):y()})},p.start=function(v){be(W,v),p.running=!0;try{O.render()}catch(m){u=m}return document.querySelector(".pace")?(p.trigger("start"),p.go()):setTimeout(p.start,50)},t.exports=p}).call(rh)})(Yr)),Yr.exports}var oh=sh();const ah=ih(oh);ah.start();var lh=Object.defineProperty,ch=(t,e,n)=>e in t?lh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ao=(t,e,n)=>(ch(t,typeof e!="symbol"?e+"":e,n),n),dh=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},lo=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Fr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},ll=(t,e,n)=>(dh(t,e,"access private method"),n);function hc(t,e){return Object.is(t,e)}let $e=null,ar=!1,Zr=1;const is=Symbol("SIGNAL");function pi(t){const e=$e;return $e=t,e}function hh(){return $e}function uh(){return ar}const ca={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Is(t){if(ar)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if($e===null)return;$e.consumerOnSignalRead(t);const e=$e.nextProducerIndex++;if(vi($e),e<$e.producerNode.length&&$e.producerNode[e]!==t&&Po($e)){const n=$e.producerNode[e];Ls(n,$e.producerIndexOfThis[e])}$e.producerNode[e]!==t&&($e.producerNode[e]=t,$e.producerIndexOfThis[e]=Po($e)?fc(t,$e,e):0),$e.producerLastReadVersion[e]=t.version}function ph(){Zr++}function uc(t){if(!(!t.dirty&&t.lastCleanEpoch===Zr)){if(!t.producerMustRecompute(t)&&!wh(t)){t.dirty=!1,t.lastCleanEpoch=Zr;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Zr}}function pc(t){if(t.liveConsumerNode===void 0)return;const e=ar;ar=!0;try{for(const n of t.liveConsumerNode)n.dirty||mh(n)}finally{ar=e}}function fh(){return $e?.consumerAllowSignalWrites!==!1}function mh(t){var e;t.dirty=!0,pc(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function gh(t){return t&&(t.nextProducerIndex=0),pi(t)}function bh(t,e){if(pi(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(Po(t))for(let n=t.nextProducerIndex;n<t.producerNode.length;n++)Ls(t.producerNode[n],t.producerIndexOfThis[n]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function wh(t){vi(t);for(let e=0;e<t.producerNode.length;e++){const n=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==n.version||(uc(n),i!==n.version))return!0}return!1}function fc(t,e,n){var i;if(da(t),vi(t),t.liveConsumerNode.length===0){(i=t.watched)==null||i.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)t.producerIndexOfThis[r]=fc(t.producerNode[r],t,r)}return t.liveConsumerIndexOfThis.push(n),t.liveConsumerNode.push(e)-1}function Ls(t,e){var n;if(da(t),vi(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(n=t.unwatched)==null||n.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)Ls(t.producerNode[r],t.producerIndexOfThis[r])}const i=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[i],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[i],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const r=t.liveConsumerIndexOfThis[e],s=t.liveConsumerNode[e];vi(s),s.producerIndexOfThis[r]=e}}function Po(t){var e;return t.consumerIsAlwaysLive||(((e=t?.liveConsumerNode)==null?void 0:e.length)??0)>0}function vi(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function da(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}function mc(t){if(uc(t),Is(t),t.value===Do)throw t.error;return t.value}function vh(t){const e=Object.create(yh);e.computation=t;const n=()=>mc(e);return n[is]=e,n}const co=Symbol("UNSET"),ho=Symbol("COMPUTING"),Do=Symbol("ERRORED"),yh={...ca,value:co,dirty:!0,error:null,equal:hc,producerMustRecompute(t){return t.value===co||t.value===ho},producerRecomputeValue(t){if(t.value===ho)throw new Error("Detected cycle in computations.");const e=t.value;t.value=ho;const n=gh(t);let i,r=!1;try{i=t.computation.call(t.wrapper),r=e!==co&&e!==Do&&t.equal.call(t.wrapper,e,i)}catch(s){i=Do,t.error=s}finally{bh(t,n)}if(r){t.value=e;return}t.value=i,t.version++}};function xh(){throw new Error}let kh=xh;function Eh(){kh()}function Ch(t){const e=Object.create(Ah);e.value=t;const n=()=>(Is(e),e.value);return n[is]=e,n}function Sh(){return Is(this),this.value}function $h(t,e){fh()||Eh(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,_h(t))}const Ah={...ca,equal:hc,value:void 0};function _h(t){t.version++,ph(),pc(t)}const ze=Symbol("node");var Bt;(t=>{var e,n,i,r;class s{constructor(c,h={}){Fr(this,n),ao(this,e);const p=Ch(c)[is];if(this[ze]=p,p.wrapper=this,h){const g=h.equals;g&&(p.equal=g),p.watched=h[t.subtle.watched],p.unwatched=h[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Sh.call(this[ze])}set(c){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(uh())throw new Error("Writes to signals not permitted during Watcher callback");const h=this[ze];$h(h,c)}}e=ze,n=new WeakSet,t.isState=l=>typeof l=="object"&&lo(n,l),t.State=s;class o{constructor(c,h){Fr(this,r),ao(this,i);const p=vh(c)[is];if(p.consumerAllowSignalWrites=!0,this[ze]=p,p.wrapper=this,h){const g=h.equals;g&&(p.equal=g),p.watched=h[t.subtle.watched],p.unwatched=h[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return mc(this[ze])}}i=ze,r=new WeakSet,t.isComputed=l=>typeof l=="object"&&lo(r,l),t.Computed=o,(l=>{var c,h,u,p;function g(R){let O,_=null;try{_=pi(null),O=R()}finally{pi(_)}return O}l.untrack=g;function b(R){var O;if(!(0,t.isComputed)(R)&&!(0,t.isWatcher)(R))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((O=R[ze].producerNode)==null?void 0:O.map(_=>_.wrapper))??[]}l.introspectSources=b;function w(R){var O;if(!(0,t.isComputed)(R)&&!(0,t.isState)(R))throw new TypeError("Called introspectSinks without a Signal argument");return((O=R[ze].liveConsumerNode)==null?void 0:O.map(_=>_.wrapper))??[]}l.introspectSinks=w;function k(R){if(!(0,t.isComputed)(R)&&!(0,t.isState)(R))throw new TypeError("Called hasSinks without a Signal argument");const O=R[ze].liveConsumerNode;return O?O.length>0:!1}l.hasSinks=k;function L(R){if(!(0,t.isComputed)(R)&&!(0,t.isWatcher)(R))throw new TypeError("Called hasSources without a Computed or Watcher argument");const O=R[ze].producerNode;return O?O.length>0:!1}l.hasSources=L;class C{constructor(O){Fr(this,h),Fr(this,u),ao(this,c);let _=Object.create(ca);_.wrapper=this,_.consumerMarkedDirty=O,_.consumerIsAlwaysLive=!0,_.consumerAllowSignalWrites=!1,_.producerNode=[],this[ze]=_}watch(...O){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");ll(this,u,p).call(this,O);const _=this[ze];_.dirty=!1;const X=pi(_);for(const P of O)Is(P[ze]);pi(X)}unwatch(...O){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");ll(this,u,p).call(this,O);const _=this[ze];vi(_);for(let X=_.producerNode.length-1;X>=0;X--)if(O.includes(_.producerNode[X].wrapper)){Ls(_.producerNode[X],_.producerIndexOfThis[X]);const P=_.producerNode.length-1;if(_.producerNode[X]=_.producerNode[P],_.producerIndexOfThis[X]=_.producerIndexOfThis[P],_.producerNode.length--,_.producerIndexOfThis.length--,_.nextProducerIndex--,X<_.producerNode.length){const be=_.producerIndexOfThis[X],we=_.producerNode[X];da(we),we.liveConsumerIndexOfThis[be]=X}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[ze].producerNode.filter(_=>_.dirty).map(_=>_.wrapper)}}c=ze,h=new WeakSet,u=new WeakSet,p=function(R){for(const O of R)if(!(0,t.isComputed)(O)&&!(0,t.isState)(O))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=R=>lo(h,R),l.Watcher=C;function z(){var R;return(R=hh())==null?void 0:R.wrapper}l.currentComputed=z,l.watched=Symbol("watched"),l.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(Bt||(Bt={}));const Th=Symbol("SignalWatcherBrand"),Rh=new FinalizationRegistry((({watcher:t,signal:e})=>{t.unwatch(e)})),cl=new WeakMap;function Ih(t){return t[Th]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new Bt.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new Bt.Computed((()=>{this._$St.get(),super.performUpdate()}));const e=this._$Su=new Bt.subtle.Watcher((function(){const n=cl.get(this);n!==void 0&&(n._$Si===!1&&n.requestUpdate(),this.watch())}));cl.set(e,this),Rh.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach((n=>n.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,n,i){this._$So=!0,super.requestUpdate(e,n,i)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(e){this._$Sh.add(e);const n=this._$So;this.requestUpdate(),this._$So=n}m(e){this._$Sh.delete(e)}}}const _t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Pi=t=>(...e)=>({_$litDirective$:t,values:e});let Di=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};const ha=globalThis,rs=ha.trustedTypes,dl=rs?rs.createPolicy("lit-html",{createHTML:t=>t}):void 0,gc="$lit$",gn=`lit$${Math.random().toFixed(9).slice(2)}$`,bc="?"+gn,Lh=`<${bc}>`,Wn=document,gr=()=>Wn.createComment(""),br=t=>t===null||typeof t!="object"&&typeof t!="function",ua=Array.isArray,Oh=t=>ua(t)||typeof t?.[Symbol.iterator]=="function",uo=`[ 	
\f\r]`,ji=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hl=/-->/g,ul=/>/g,Pn=RegExp(`>|${uo}(?:([^\\s"'>=/]+)(${uo}*=${uo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pl=/'/g,fl=/"/g,wc=/^(?:script|style|textarea|title)$/i,Ph=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),f=Ph(1),nt=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),ml=new WeakMap,Bn=Wn.createTreeWalker(Wn,129);function vc(t,e){if(!ua(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return dl!==void 0?dl.createHTML(e):e}const Dh=(t,e)=>{const n=t.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",o=ji;for(let l=0;l<n;l++){const c=t[l];let h,u,p=-1,g=0;for(;g<c.length&&(o.lastIndex=g,u=o.exec(c),u!==null);)g=o.lastIndex,o===ji?u[1]==="!--"?o=hl:u[1]!==void 0?o=ul:u[2]!==void 0?(wc.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=Pn):u[3]!==void 0&&(o=Pn):o===Pn?u[0]===">"?(o=r??ji,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?Pn:u[3]==='"'?fl:pl):o===fl||o===pl?o=Pn:o===hl||o===ul?o=ji:(o=Pn,r=void 0);const b=o===Pn&&t[l+1].startsWith("/>")?" ":"";s+=o===ji?c+Lh:p>=0?(i.push(h),c.slice(0,p)+gc+c.slice(p)+gn+b):c+gn+(p===-2?l:b)}return[vc(t,s+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let zo=class yc{constructor({strings:e,_$litType$:n},i){let r;this.parts=[];let s=0,o=0;const l=e.length-1,c=this.parts,[h,u]=Dh(e,n);if(this.el=yc.createElement(h,i),Bn.currentNode=this.el.content,n===2||n===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Bn.nextNode())!==null&&c.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(gc)){const g=u[o++],b=r.getAttribute(p).split(gn),w=/([.?@])?(.*)/.exec(g);c.push({type:1,index:s,name:w[2],strings:b,ctor:w[1]==="."?Mh:w[1]==="?"?Nh:w[1]==="@"?Fh:Os}),r.removeAttribute(p)}else p.startsWith(gn)&&(c.push({type:6,index:s}),r.removeAttribute(p));if(wc.test(r.tagName)){const p=r.textContent.split(gn),g=p.length-1;if(g>0){r.textContent=rs?rs.emptyScript:"";for(let b=0;b<g;b++)r.append(p[b],gr()),Bn.nextNode(),c.push({type:2,index:++s});r.append(p[g],gr())}}}else if(r.nodeType===8)if(r.data===bc)c.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(gn,p+1))!==-1;)c.push({type:7,index:s}),p+=gn.length-1}s++}}static createElement(e,n){const i=Wn.createElement("template");return i.innerHTML=e,i}};function yi(t,e,n=t,i){if(e===nt)return e;let r=i!==void 0?n._$Co?.[i]:n._$Cl;const s=br(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,n,i)),i!==void 0?(n._$Co??=[])[i]=r:n._$Cl=r),r!==void 0&&(e=yi(t,r._$AS(t,e.values),r,i)),e}let zh=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:i}=this._$AD,r=(e?.creationScope??Wn).importNode(n,!0);Bn.currentNode=r;let s=Bn.nextNode(),o=0,l=0,c=i[0];for(;c!==void 0;){if(o===c.index){let h;c.type===2?h=new zi(s,s.nextSibling,this,e):c.type===1?h=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(h=new Uh(s,this,e)),this._$AV.push(h),c=i[++l]}o!==c?.index&&(s=Bn.nextNode(),o++)}return Bn.currentNode=Wn,r}p(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}};class zi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,i,r){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=yi(this,e,n),br(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==nt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Oh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==N&&br(this._$AH)?this._$AA.nextSibling.data=e:this.T(Wn.createTextNode(e)),this._$AH=e}$(e){const{values:n,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=zo.createElement(vc(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(n);else{const s=new zh(r,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(e){let n=ml.get(e.strings);return n===void 0&&ml.set(e.strings,n=new zo(e)),n}k(e){ua(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const s of e)r===n.length?n.push(i=new zi(this.O(gr()),this.O(gr()),this,this.options)):i=n[r],i._$AI(s),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}let Os=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,i,r,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}_$AI(e,n=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=yi(this,e,n,0),o=!br(e)||e!==this._$AH&&e!==nt,o&&(this._$AH=e);else{const l=e;let c,h;for(e=s[0],c=0;c<s.length-1;c++)h=yi(this,l[i+c],n,c),h===nt&&(h=this._$AH[c]),o||=!br(h)||h!==this._$AH[c],h===N?e=N:e!==N&&(e+=(h??"")+s[c+1]),this._$AH[c]=h}o&&!r&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class Mh extends Os{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}}let Nh=class extends Os{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}},Fh=class extends Os{constructor(e,n,i,r,s){super(e,n,i,r,s),this.type=5}_$AI(e,n=this){if((e=yi(this,e,n,0)??N)===nt)return;const i=this._$AH,r=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==N&&(i===N||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Uh=class{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){yi(this,e)}};const Bh={I:zi},Vh=ha.litHtmlPolyfillSupport;Vh?.(zo,zi),(ha.litHtmlVersions??=[]).push("3.3.1");const Ct=(t,e,n)=>{const i=n?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const s=n?.renderBefore??null;i._$litPart$=r=new zi(e.insertBefore(gr(),s),s,void 0,n??{})}return r._$AI(t),r};const{I:qh}=Bh,Hh=(t,e)=>t?._$litType$!==void 0,xc=t=>t.strings===void 0,gl=()=>document.createComment(""),Xi=(t,e,n)=>{const i=t._$AA.parentNode,r=e===void 0?t._$AB:e._$AA;if(n===void 0){const s=i.insertBefore(gl(),r),o=i.insertBefore(gl(),r);n=new qh(s,o,t,t.options)}else{const s=n._$AB.nextSibling,o=n._$AM,l=o!==t;if(l){let c;n._$AQ?.(t),n._$AM=t,n._$AP!==void 0&&(c=t._$AU)!==o._$AU&&n._$AP(c)}if(s!==r||l){let c=n._$AA;for(;c!==s;){const h=c.nextSibling;i.insertBefore(c,r),c=h}}}return n},Dn=(t,e,n=t)=>(t._$AI(e,n),t),Wh={},kc=(t,e=Wh)=>t._$AH=e,jh=t=>t._$AH,po=t=>{t._$AR(),t._$AA.remove()};const lr=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const i of n)i._$AO?.(e,!1),lr(i,e);return!0},ss=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},Ec=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Kh(e)}};function Xh(t){this._$AN!==void 0?(ss(this),this._$AM=t,Ec(this)):this._$AM=t}function Gh(t,e=!1,n=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let s=n;s<i.length;s++)lr(i[s],!1),ss(i[s]);else i!=null&&(lr(i,!1),ss(i));else lr(this,t)}const Kh=t=>{t.type==_t.CHILD&&(t._$AP??=Gh,t._$AQ??=Xh)};let Yh=class extends Di{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,i){super._$AT(e,n,i),Ec(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(lr(this,e),ss(this))}setValue(e){if(xc(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};Bt.State;Bt.Computed;const En=(t,e)=>new Bt.State(t,e);class Zh{constructor(){this.subscriptions=new Map,this.tokenCounter=0}subscribe(e,n){this.subscriptions.has(e)||this.subscriptions.set(e,new Map);const i=`token_${++this.tokenCounter}_${Date.now()}`;return this.subscriptions.get(e).set(i,n),i}unsubscribe(e){for(const[n,i]of this.subscriptions.entries())if(i.has(e)){i.delete(e),i.size===0&&this.subscriptions.delete(n);return}}publish(e,n){const i=this.subscriptions.get(e);return!i||i.size===0?!1:(queueMicrotask(()=>{i.forEach(r=>{try{r(n)}catch(s){console.error(`Error in event callback for topic "${e}":`,s)}})}),!0)}clearAllSubscriptions(){this.subscriptions.clear()}clearSubscriptions(e){this.subscriptions.delete(e)}}const pa=new Zh,Ce=(t,e)=>pa.subscribe(t,e),Jh=t=>{pa.unsubscribe(t)},te=(t,e)=>pa.publish(t,e);const Jr=globalThis,fa=Jr.ShadowRoot&&(Jr.ShadyCSS===void 0||Jr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ma=Symbol(),bl=new WeakMap;let Cc=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==ma)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(fa&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=bl.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&bl.set(n,e))}return e}toString(){return this.cssText}};const Sc=t=>new Cc(typeof t=="string"?t:t+"",void 0,ma),qe=(t,...e)=>{const n=t.length===1?t[0]:e.reduce(((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1]),t[0]);return new Cc(n,t,ma)},Qh=(t,e)=>{if(fa)t.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of e){const i=document.createElement("style"),r=Jr.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=n.cssText,t.appendChild(i)}},wl=fa?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return Sc(n)})(t):t;const{is:eu,defineProperty:tu,getOwnPropertyDescriptor:nu,getOwnPropertyNames:iu,getOwnPropertySymbols:ru,getPrototypeOf:su}=Object,Ps=globalThis,vl=Ps.trustedTypes,ou=vl?vl.emptyScript:"",au=Ps.reactiveElementPolyfillSupport,cr=(t,e)=>t,os={toAttribute(t,e){switch(e){case Boolean:t=t?ou:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},ga=(t,e)=>!eu(t,e),yl={attribute:!0,type:String,converter:os,reflect:!1,useDefault:!1,hasChanged:ga};Symbol.metadata??=Symbol("metadata"),Ps.litPropertyMetadata??=new WeakMap;let ci=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=yl){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,n);r!==void 0&&tu(this.prototype,e,r)}}static getPropertyDescriptor(e,n,i){const{get:r,set:s}=nu(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get:r,set(o){const l=r?.call(this);s?.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??yl}static _$Ei(){if(this.hasOwnProperty(cr("elementProperties")))return;const e=su(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(cr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(cr("properties"))){const n=this.properties,i=[...iu(n),...ru(n)];for(const r of i)this.createProperty(r,n[r])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[i,r]of n)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const r=this._$Eu(n,i);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)n.unshift(wl(r))}else e!==void 0&&n.push(wl(e));return n}static _$Eu(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qh(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$ET(e,n){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:os).toAttribute(n,i.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,n){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:os;this._$Em=r;const l=o.fromAttribute(n,s.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(e,n,i){if(e!==void 0){const r=this.constructor,s=this[e];if(i??=r.getPropertyOptions(e),!((i.hasChanged??ga)(s,n)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:i,reflect:r,wrapped:s},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??n??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(n=void 0),this._$AL.set(e,n)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,s]of i){const{wrapped:o}=s,l=this[r];o!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,s,l)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(n)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(e){}firstUpdated(e){}};ci.elementStyles=[],ci.shadowRootOptions={mode:"open"},ci[cr("elementProperties")]=new Map,ci[cr("finalized")]=new Map,au?.({ReactiveElement:ci}),(Ps.reactiveElementVersions??=[]).push("2.1.1");const ba=globalThis;let qn=class extends ci{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ct(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return nt}};qn._$litElement$=!0,qn.finalized=!0,ba.litElementHydrateSupport?.({LitElement:qn});const lu=ba.litElementPolyfillSupport;lu?.({LitElement:qn});(ba.litElementVersions??=[]).push("4.2.1");const cu=!1,$c="app-toolbars-main",ei="app-toolbars-main-right",Ac="app-toolbars-main-center",wa="app-toolbars-bottom",Ds="app-toolbars-bottom-center",Cr="app-toolbars-bottom-end",bn="editor-area-main",as="sidebar-main",_c="sidebar-main-bottom",va="sidebar-auxiliary",Tc="panel-bottom",du="command-save",Rc=!1;var ya=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(ya||{});const hu=Object.freeze(Object.defineProperty({__proto__:null,COMMAND_SAVE:du,EDITOR_AREA_MAIN:bn,HIDE_DOT_RESOURCE:Rc,MouseButton:ya,PANEL_BOTTOM:Tc,SIDEBAR_AUXILIARY:va,SIDEBAR_MAIN:as,SIDEBAR_MAIN_BOTTOM:_c,TOOLBAR_BOTTOM:wa,TOOLBAR_BOTTOM_CENTER:Ds,TOOLBAR_BOTTOM_END:Cr,TOOLBAR_MAIN:$c,TOOLBAR_MAIN_CENTER:Ac,TOOLBAR_MAIN_RIGHT:ei},Symbol.toStringTag,{value:"Module"}));class xa{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,n){return e[n]||this.parent?.getProxy()[n]}set(e,n,i){e[n]=i}put(e,n){this.variables[e]=n}getProxy(){return this.proxy}createChild(e={}){const n=new xa(e);return n.parent=this,this.children.push(n),n}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const He=new xa({}),Mi=He.createChild({});Mi.put("html",f);Mi.put("render",Ct);He.put("constants",hu);const Ft="events/contributionregistry/contributionsChanged";class uu{constructor(){this.contributions=new Map}registerContribution(e,n){const i=this.getContributions(e);if(n.disabled instanceof Function){const r=n.disabled;n.disabled=new Bt.Computed(r)}i.push(n),te(Ft,{target:e,contributions:i})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const D=new uu;He.put("contributionRegistry",D);function ka(t){return new Promise((e,n)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>n(t.error)})}function pu(t,e){let n;const i=()=>{if(n)return n;const r=indexedDB.open(t);return r.onupgradeneeded=()=>r.result.createObjectStore(e),n=ka(r),n.then(s=>{s.onclose=()=>n=void 0},()=>{}),n};return(r,s)=>i().then(o=>s(o.transaction(e,r).objectStore(e)))}let fo;function Ic(){return fo||(fo=pu("keyval-store","keyval")),fo}function fu(t,e=Ic()){return e("readonly",n=>ka(n.get(t)))}function mu(t,e,n=Ic()){return n("readwrite",i=>(i.put(e,t),ka(i.transaction)))}class gu{async persistObject(e,n){return mu(e,n)}async getObject(e){return fu(e)}}const Et=new gu;He.put("persistenceService",Et);const di=".geospace/settings.json",Qr="dialogSettings",wn="events/settings/changed";class bu{async checkSettings(){this.appSettings||(this.appSettings=await Et.getObject(di),this.appSettings||(this.appSettings={},await Et.persistObject(di,this.appSettings)),te(wn,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,n){await this.checkSettings(),this.appSettings[e]=n,await Et.persistObject(di,this.appSettings),te(wn,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await Et.persistObject(di,this.appSettings),te(wn,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[Qr]||{})[e]}async setDialogSetting(e,n){await this.checkSettings();const i=this.appSettings[Qr]||{};i[e]=n,this.appSettings[Qr]=i,await Et.persistObject(di,this.appSettings),te(wn,this.appSettings)}}const le=new bu;He.put("appSettings",le);const ay=Object.freeze(Object.defineProperty({__proto__:null,DIALOG_SETTINGS_KEY:Qr,SETTINGS_FILE_PATH:di,TOPIC_SETTINGS_CHANGED:wn,appSettings:le},Symbol.toStringTag,{value:"Module"})),rn="system.language_bundles",Mo="language";function wu(t,e){return e?t.replace(/\{(\w+)\}/g,(n,i)=>e[i]!==void 0?e[i]:n):t}class vu extends String{constructor(e,n,i,r){super(""),this.i18nService=e,this.namespace=n,this.key=i,this.params=r}toString(){const e=this.i18nService.currentLanguageSignal.get();return this.cachedValue!==void 0&&this.cachedLanguage===e?this.cachedValue:(this.cachedValue=this.i18nService.translate(this.namespace,this.key,this.params),this.cachedLanguage=e,this.cachedValue)}valueOf(){return this.toString()}[Symbol.toPrimitive](e){if(e==="number"){const n=Number(this.toString());return isNaN(n)?0:n}return this.toString()}toJSON(){return this.toString()}}const Un=class Un{constructor(){this.translationCache=new Map,this.currentLanguageSignal=En(this.getBrowserLanguage()),this.languageContributionsSignal=En([]),this.initialize()}getBrowserLanguage(){return(navigator.language||navigator.languages?.[0]||Un.DEFAULT_LANGUAGE).split("-")[0].toLowerCase()}async initializeLanguage(){return await le.get(Mo)||this.getBrowserLanguage()}async updateLanguageFromSettings(){const e=await this.initializeLanguage();this.currentLanguageSignal.set(e)}getPrimaryLanguage(e){return e.split("-")[0].toLowerCase()}updateLanguageContributions(){const e=D.getContributions(rn);this.languageContributionsSignal.set(e)}createCacheKey(e,n){return`${e}:${n}`}mergeTranslationsForLanguage(e,n,i){const r=this.createCacheKey(n,i),s=this.translationCache.get(r);if(s!==void 0)return s;const o={};for(const l of e){if(l.namespace!==n)continue;let c;l.translations&&l.language===i?c=l.translations:l[i]&&typeof l[i]=="object"&&(c=l[i]),c&&Object.assign(o,c)}return this.translationCache.set(r,o),o}invalidateTranslationCache(){this.translationCache.clear()}translate(e,n,i){const r=this.currentLanguageSignal.get(),s=this.getPrimaryLanguage(r),o=this.languageContributionsSignal.get();let l;const c=this.mergeTranslationsForLanguage(o,e,r);if(c[n])l=c[n];else{const h=r!==s?this.mergeTranslationsForLanguage(o,e,s):c;if(h[n])l=h[n];else if(s!==Un.DEFAULT_LANGUAGE&&r!==Un.DEFAULT_LANGUAGE){const u=this.mergeTranslationsForLanguage(o,e,Un.DEFAULT_LANGUAGE);u[n]&&(l=u[n])}}return l?wu(l,i):n}initialize(){Ce(wn,async e=>{const n=e?.[Mo]||this.getBrowserLanguage();this.currentLanguageSignal.set(n),this.invalidateTranslationCache()}),Ce(Ft,e=>{e.target===rn&&(this.invalidateTranslationCache(),this.updateLanguageContributions())}),this.updateLanguageFromSettings(),this.updateLanguageContributions()}i18n(e){return(n,i)=>this.translate(e,n,i)}i18nLazy(e){return(n,i)=>new vu(this,e,n,i)}};Un.DEFAULT_LANGUAGE="en";let No=Un;const Sr=new No;He.put("i18nService",Sr);const Lc=Sr.currentLanguageSignal,yu=Sr.languageContributionsSignal,ti=t=>Sr.i18n(t),xu=t=>Sr.i18nLazy(t),ku="filebrowser",Eu={CONNECT_WORKSPACE:"Connect Workspace...",RELOAD_WORKSPACE:"Reload workspace folder",CREATE_NEW:"Create new...",RENAME_RESOURCE:"Rename selected resource",DELETE_RESOURCE:"Delete selected resource",OPEN:"Open",RENAME:"Rename",DELETE:"Delete",FILE:"File",FOLDER:"Folder",FILE_EXISTS_OVERWRITE:'File "{fileName}" already exists. Do you want to overwrite it?',SELECT_WORKSPACE:"Select a workspace.",DROP_FILES_HERE:"📁 Drop files here"},Cu={CONNECT_WORKSPACE:"Arbeitsbereich verbinden...",RELOAD_WORKSPACE:"Arbeitsbereich-Ordner neu laden",CREATE_NEW:"Neu erstellen...",RENAME_RESOURCE:"Ausgewählte Ressource umbenennen",DELETE_RESOURCE:"Ausgewählte Ressource löschen",OPEN:"Öffnen",RENAME:"Umbenennen",DELETE:"Löschen",FILE:"Datei",FOLDER:"Ordner",FILE_EXISTS_OVERWRITE:'Die Datei "{fileName}" existiert bereits. Möchten Sie sie überschreiben?',SELECT_WORKSPACE:"Wählen Sie einen Arbeitsbereich aus.",DROP_FILES_HERE:"📁 Dateien hier ablegen"},Su={namespace:ku,en:Eu,de:Cu},$u="extensions",Au={FILTER_PLACEHOLDER:"Filter extensions...",INSTALLED:"Installed",AVAILABLE:"Available",NO_MATCHES:'No extensions match "{filterText}"',EXTERNAL_EXTENSION:"External Extension",UNINSTALL:"Uninstall (requires restart)",REQUIRED_HINT:"This extension is required by the current app and cannot be uninstalled",INSTALL:"Install",EXPERIMENTAL:"This is an experimental extension!",VERSION:"Version:",AUTHOR:"Author:",DEPENDENCIES:"Dependencies",NOT_INSTALLED:"Not Installed",DEPENDENCIES_HINT:"Dependencies are automatically installed when this extension is enabled.",DISABLE_TITLE:"Disable this extension",ENABLE_TITLE:"Enable this extension",EXT_GIT_NAME:"Git Support",EXT_GIT_DESC:"Git commands and UI elements",EXT_GITHUB_SERVICE_NAME:"GitHub Service",EXT_GITHUB_SERVICE_DESC:"GitHub API service for fetching release information",EXT_PYTERMINAL_NAME:"Python terminal",EXT_PYTERMINAL_DESC:"Python terminal view",EXT_LINUXTERMINAL_NAME:"Linux terminal",EXT_LINUXTERMINAL_DESC:"Linux terminal view",EXT_WEBLLM_NAME:"WebLLM",EXT_WEBLLM_DESC:"In-Browser LLM inference",EXT_P12SPLITTER_NAME:".p12 file splitter",EXT_P12SPLITTER_DESC:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",EXT_PYTHONPACKAGEMANAGER_NAME:"Python Package Manager",EXT_PYTHONPACKAGEMANAGER_DESC:"Manage Python packages for notebooks and other Python-based extensions",EXT_NOTEBOOK_NAME:"Jupyter-like Notebook Editor",EXT_NOTEBOOK_DESC:"View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering",EXT_COMMANDPALETTE_NAME:"Command Palette",EXT_COMMANDPALETTE_DESC:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",EXT_DOWNLOAD_NAME:"Download Files",EXT_DOWNLOAD_DESC:"Download files from URLs to the workspace",EXT_UNZIP_NAME:"Unzip Archives",EXT_UNZIP_DESC:"Extract zip archives to the workspace",EXT_MDEDITOR_NAME:"Markdown Editor",EXT_MDEDITOR_DESC:"View and render Markdown (.md) files",EXT_MEDIAVIEWER_NAME:"Media Viewer",EXT_MEDIAVIEWER_DESC:"View PDF, image, and HTML files in the browser",EXT_MONACO_NAME:"Monaco Code Editor",EXT_MONACO_DESC:"Code editor with syntax highlighting, code completion, and Python execution support",EXT_MEMORYUSAGE_NAME:"Memory Usage Monitor",EXT_MEMORYUSAGE_DESC:"Displays JavaScript heap memory usage in the bottom toolbar",EXT_WEBDAV_NAME:"WebDAV Workspace",EXT_WEBDAV_DESC:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",EXT_SETTINGS_TREE_NAME:"Settings Tree Editor",EXT_SETTINGS_TREE_DESC:"Tree-based editor for settings with in-place editing",EXT_IN_BROWSER_ML_NAME:"In-Browser ML",EXT_IN_BROWSER_ML_DESC:"In-browser machine learning service using transformers.js for specialized tasks (zero-shot classification, embeddings, etc.)",EXT_AI_SYSTEM_NAME:"AI System",EXT_AI_SYSTEM_DESC:"Modern AI service with streaming support and agent workflows",EXT_RAG_SYSTEM_NAME:"RAG System",EXT_RAG_SYSTEM_DESC:"Retrieval-Augmented Generation system for document indexing, search and retrieval",EXT_HOWTO_NAME:"HowTo System",EXT_HOWTO_DESC:"Step-by-step workflow system with pre and post condition checks"},_u={FILTER_PLACEHOLDER:"Erweiterungen filtern...",INSTALLED:"Installiert",AVAILABLE:"Verfügbar",NO_MATCHES:'Keine Erweiterungen entsprechen "{filterText}"',EXTERNAL_EXTENSION:"Externe Erweiterung",UNINSTALL:"Deinstallieren (Neustart erforderlich)",REQUIRED_HINT:"Diese Erweiterung ist für die aktuelle App erforderlich und kann nicht deinstalliert werden",INSTALL:"Installieren",EXPERIMENTAL:"Dies ist eine experimentelle Erweiterung!",VERSION:"Version:",AUTHOR:"Autor:",DEPENDENCIES:"Abhängigkeiten",NOT_INSTALLED:"Nicht installiert",DEPENDENCIES_HINT:"Abhängigkeiten werden automatisch installiert, wenn diese Erweiterung aktiviert wird.",DISABLE_TITLE:"Diese Erweiterung deaktivieren",ENABLE_TITLE:"Diese Erweiterung aktivieren",EXT_GIT_NAME:"Git-Unterstützung",EXT_GIT_DESC:"Git-Befehle und UI-Elemente",EXT_GITHUB_SERVICE_NAME:"GitHub-Service",EXT_GITHUB_SERVICE_DESC:"GitHub-API-Service zum Abrufen von Release-Informationen",EXT_PYTERMINAL_NAME:"Python-Terminal",EXT_PYTERMINAL_DESC:"Python-Terminalansicht",EXT_LINUXTERMINAL_NAME:"Linux-Terminal",EXT_LINUXTERMINAL_DESC:"Linux-Terminalansicht",EXT_WEBLLM_NAME:"WebLLM",EXT_WEBLLM_DESC:"LLM-Inferenz im Browser",EXT_P12SPLITTER_NAME:".p12-Datei-Splitter",EXT_P12SPLITTER_DESC:"Fügt einen Befehl hinzu, um eine .p12-Datei in private/öffentliche und zusätzliche .pem-Dateien zu trennen",EXT_PYTHONPACKAGEMANAGER_NAME:"Python-Paket-Manager",EXT_PYTHONPACKAGEMANAGER_DESC:"Verwaltet Python-Pakete für Notebooks und andere Python-basierte Erweiterungen",EXT_NOTEBOOK_NAME:"Jupyter-ähnlicher Notebook-Editor",EXT_NOTEBOOK_DESC:"Anzeigen und Ausführen von Jupyter-ähnlichen Notebooks (.ipynb) mit Python-Codeausführung und Markdown-Rendering",EXT_COMMANDPALETTE_NAME:"Befehls-Palette",EXT_COMMANDPALETTE_DESC:"VS Code-ähnliche Befehls-Palette oben in der Mitte für schnelle Befehlsausführung (Strg+Umschalt+P)",EXT_DOWNLOAD_NAME:"Dateien herunterladen",EXT_DOWNLOAD_DESC:"Dateien von URLs in den Arbeitsbereich herunterladen",EXT_UNZIP_NAME:"Archive entpacken",EXT_UNZIP_DESC:"Zip-Archive in den Arbeitsbereich extrahieren",EXT_MDEDITOR_NAME:"Markdown-Editor",EXT_MDEDITOR_DESC:"Anzeigen und Rendern von Markdown (.md) Dateien",EXT_MEDIAVIEWER_NAME:"Medien-Viewer",EXT_MEDIAVIEWER_DESC:"PDF-, Bild- und HTML-Dateien im Browser anzeigen",EXT_MONACO_NAME:"Monaco-Code-Editor",EXT_MONACO_DESC:"Code-Editor mit Syntaxhervorhebung, Code-Vervollständigung und Python-Ausführungsunterstützung",EXT_MEMORYUSAGE_NAME:"Speicherverbrauch-Monitor",EXT_MEMORYUSAGE_DESC:"Zeigt die JavaScript-Heap-Speichernutzung in der unteren Symbolleiste an",EXT_WEBDAV_NAME:"WebDAV-Arbeitsbereich",EXT_WEBDAV_DESC:"Verbinden Sie sich mit WebDAV-Servern (Nextcloud, ownCloud) als Arbeitsbereichsordner für Cloud-Speicher-Integration",EXT_SETTINGS_TREE_NAME:"Einstellungs-Baum-Editor",EXT_SETTINGS_TREE_DESC:"Baumbasierter Editor für Einstellungen mit direkter Bearbeitung",EXT_IN_BROWSER_ML_NAME:"ML im Browser",EXT_IN_BROWSER_ML_DESC:"Maschinelles Lernen im Browser mit transformers.js für spezialisierte Aufgaben (Zero-Shot-Klassifizierung, Embeddings usw.)",EXT_AI_SYSTEM_NAME:"KI-System",EXT_AI_SYSTEM_DESC:"Modernes KI-Service mit Streaming-Unterstützung und Agent-Workflows",EXT_RAG_SYSTEM_NAME:"RAG-System",EXT_RAG_SYSTEM_DESC:"Retrieval-Augmented Generation System für Dokumentenindizierung, Suche und Abruf",EXT_HOWTO_NAME:"HowTo-System",EXT_HOWTO_DESC:"Schritt-für-Schritt-Workflow-System mit Vor- und Nachbedingungsprüfungen"},Tu={namespace:$u,en:Au,de:_u},Ru="tasks",Iu={ACTIVE_TASKS:"Active Tasks",ACTIVE_TASKS_TITLE:"Active tasks: {taskCount}. Click to view details."},Lu={ACTIVE_TASKS:"Aktive Aufgaben",ACTIVE_TASKS_TITLE:"Aktive Aufgaben: {taskCount}. Klicken Sie, um Details anzuzeigen."},Ou={namespace:Ru,en:Iu,de:Lu},Pu="workspace",Du={NO_WORKSPACE:"<no workspace>",LOAD_WORKSPACE:"Load workspace"},zu={NO_WORKSPACE:"<kein Arbeitsbereich>",LOAD_WORKSPACE:"Arbeitsbereich laden"},Mu={namespace:Pu,en:Du,de:zu},Nu="fastviews",Fu={FAST_VIEWS:"Fast Views"},Uu={FAST_VIEWS:"Schnellansichten"},Bu={namespace:Nu,en:Fu,de:Uu},Vu="logterminal",qu={ALL_LOGS:"All logs",ALL:"All",INFO_LOGS:"Info logs",INFO:"Info",WARNING_LOGS:"Warning logs",WARNINGS:"Warnings",ERROR_LOGS:"Error logs",ERRORS:"Errors",DEBUG_LOGS:"Debug logs",DEBUG:"Debug",AUTO_SCROLL_ENABLED:"Auto-scroll enabled",AUTO_SCROLL_DISABLED:"Auto-scroll disabled",AUTO_SCROLL:"Auto-scroll",MANUAL:"Manual",CLEAR_LOGS:"Clear logs",CLEAR:"Clear",NO_LOG_MESSAGES:"No log messages"},Hu={ALL_LOGS:"Alle Protokolle",ALL:"Alle",INFO_LOGS:"Info-Protokolle",INFO:"Info",WARNING_LOGS:"Warnungsprotokolle",WARNINGS:"Warnungen",ERROR_LOGS:"Fehlerprotokolle",ERRORS:"Fehler",DEBUG_LOGS:"Debug-Protokolle",DEBUG:"Debug",AUTO_SCROLL_ENABLED:"Automatisches Scrollen aktiviert",AUTO_SCROLL_DISABLED:"Automatisches Scrollen deaktiviert",AUTO_SCROLL:"Automatisches Scrollen",MANUAL:"Manuell",CLEAR_LOGS:"Protokolle löschen",CLEAR:"Löschen",NO_LOG_MESSAGES:"Keine Protokollnachrichten"},Wu={namespace:Vu,en:qu,de:Hu},ju="partname",Xu={NO_PART:"<no part>",ACTIVE_PART:"Active part"},Gu={NO_PART:"<kein Bereich>",ACTIVE_PART:"Aktiver Bereich"},Ku={namespace:ju,en:Xu,de:Gu};D.registerContribution(rn,Su);D.registerContribution(rn,Tu);D.registerContribution(rn,Ou);D.registerContribution(rn,Mu);D.registerContribution(rn,Bu);D.registerContribution(rn,Wu);D.registerContribution(rn,Ku);const xl={debug:0,info:1,warning:2,error:3};let Yu="debug";const hi={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let ls=null;const Fo=[];function Gi(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class Zu{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,n){ui(this.source,e,n)}}function Ju(t){return xl[t]>=xl[Yu]}function ui(t,e,n){Ju(n)&&(ls?ls(t,e,n):(Fo.push({source:t,message:e,level:n}),hi[n==="error"?"error":n==="warning"?"warn":n==="debug"?"debug":"log"](`[${t}] ${e}`)))}function Qu(){console.log=function(...t){hi.log.apply(console,t),ui("Console",t.map(e=>Gi(e)).join(" "),"info")},console.info=function(...t){hi.info.apply(console,t),ui("Console",t.map(e=>Gi(e)).join(" "),"info")},console.warn=function(...t){hi.warn.apply(console,t),ui("Console",t.map(e=>Gi(e)).join(" "),"warning")},console.error=function(...t){hi.error.apply(console,t),ui("Console",t.map(e=>Gi(e)).join(" "),"error")},console.debug=function(...t){hi.debug.apply(console,t),ui("Console",t.map(e=>Gi(e)).join(" "),"debug")}}Qu();function ep(t){for(ls=t;Fo.length>0;){const e=Fo.shift();e&&t(e.source,e.message,e.level)}}function tp(){ls=null}function hn(t){return new Zu(t)}const ee=hn("System");He.put("logger",ee);const gt=En(null),Lt=En(null),wr=En(null),Uo=En(0),Mn=En(void 0);En({name:"",timestamp:0});class Oc{constructor(e,n,i,r,s){this.id=e,this.name=n,this.description=i,this.parameters=r||[],this.output=s||[]}}class Pc{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,n){this.handlers.has(e)||this.handlers.set(e,[]);const i=this.handlers.get(e);i.push(n),i.sort((r,s)=>(s.ranking??0)-(r.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:gt.get(),activeEditor:Lt.get()}}execute(e,n={}){const i=this.getHandler(e);if(!i)throw ee.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const r=this.getCommand(e),s=n.params?` params: ${JSON.stringify(n.params)}`:"";ee.debug(`[CommandRegistry] Executing command: ${e}${r?` (${r.name})`:""}${s}`);for(const o of i)if(o.canExecute===void 0||o.canExecute(n))try{const l=o.execute(n);return ee.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${l})`),l}catch(l){const c=l instanceof Error?l.message:String(l);throw ee.error(`[CommandRegistry] Command execution failed: ${e} - ${c}`),l}ee.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,n,i,r,s){const o=new Oc(e,n,i,r);this.registerCommand(o),s&&this.registerHandler(e,s)}registerCommand(e){this.commands[e.id]=e,ee.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(n=>(Te.getHandler(n.id)||[]).some(r=>r.canExecute===void 0||r.canExecute(e))).reduce((n,i)=>(n[i.id]=i,n),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const n=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(n,e.handler),e.contribution&&e.contribution.target&&D.registerContribution(e.contribution.target,{command:n,...e.contribution})}}const Te=new Pc;He.put("commandRegistry",Te);const ce=t=>{Te.registerAll(t)},ly=Object.freeze(Object.defineProperty({__proto__:null,Command:Oc,CommandRegistry:Pc,commandRegistry:Te,registerAll:ce},Symbol.toStringTag,{value:"Module"}));class np{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=Te.listCommands();Object.values(e).forEach(n=>{n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)})}watchCommandRegistry(){const e=Te.registerCommand.bind(Te);Te.registerCommand=n=>{e(n),n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const n=e.toUpperCase().split("+").map(o=>o.trim());if(n.length===0)return null;const i={ctrl:!1,alt:!1,shift:!1,meta:!1},r=n[n.length-1],s=n.slice(0,-1);for(const o of s)switch(o){case"CTRL":case"CONTROL":i.ctrl=!0;break;case"ALT":case"OPTION":i.alt=!0;break;case"SHIFT":i.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":i.meta=!0;break;default:ee.warn(`Unknown modifier: ${o}`)}return i.key=this.normalizeKey(r),i}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const n=[];return e.ctrl&&n.push("ctrl"),e.alt&&n.push("alt"),e.shift&&n.push("shift"),e.meta&&n.push("meta"),n.sort(),`${n.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,n){const i=this.parseKeyBinding(n);if(!i)return ee.error(`Invalid key binding: ${n}`),!1;i.commandId=e;const r=this.getBindingKey(i);this.bindings.has(r)||this.bindings.set(r,[]);const s=this.bindings.get(r);return s.find(l=>l.commandId===e)?(ee.error(`Key binding ${n} already registered for command ${e}`),!1):(s.push(i),ee.debug(`Key binding registered: ${n} -> ${e}`),!0)}unregisterKeyBinding(e,n){if(n){const i=this.parseKeyBinding(n);if(i){const r=this.getBindingKey(i),s=this.bindings.get(r);if(s){const o=s.filter(l=>l.commandId!==e);o.length===0?this.bindings.delete(r):this.bindings.set(r,o)}}}else for(const[i,r]of this.bindings.entries()){const s=r.filter(o=>o.commandId!==e);s.length===0?this.bindings.delete(i):this.bindings.set(i,s)}}getKeyBindingsForCommand(e){const n=[];for(const i of this.bindings.values())for(const r of i)r.commandId===e&&n.push(this.formatKeyBinding(r));return n}formatKeyBinding(e){const n=[];e.ctrl&&n.push("Ctrl"),e.alt&&n.push("Alt"),e.shift&&n.push("Shift"),e.meta&&n.push("Cmd");let i=e.key;return i.length===1?i=i.toUpperCase():i=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase(),n.push(i),n.join("+")}handleKeyDown(e){if(!this.enabled)return;const n=e.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)){const o=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&o==="P"))return}const i={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},r=this.getBindingKey(i),s=this.bindings.get(r);if(s&&s.length>0){const o=s[0];try{e.preventDefault(),e.stopPropagation();const l=Te.createExecutionContext({});Te.execute(o.commandId,l),ee.info(`Executed command via key binding: ${o.commandId}`)}catch(l){ee.error(`Failed to execute command ${o.commandId}: ${l.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}ee.debug("KeyBindingManager initializing...");const Dc=new np;ee.debug("KeyBindingManager initialized");He.put("keyBindingManager",Dc);const S=t=>(e,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};const ip={attribute:!0,type:String,converter:os,reflect:!1,hasChanged:ga},rp=(t=ip,e,n)=>{const{kind:i,metadata:r}=n;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(n.name,t),i==="accessor"){const{name:o}=n;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,c,t)},init(l){return l!==void 0&&this.C(o,void 0,t,l),l}}}if(i==="setter"){const{name:o}=n;return function(l){const c=this[o];e.call(this,l),this.requestUpdate(o,c,t)}}throw Error("Unsupported decorator location: "+i)};function d(t){return(e,n)=>typeof n=="object"?rp(t,e,n):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,n)}function A(t){return d({...t,state:!0,attribute:!1})}function zs(t){return(e,n)=>{const i=typeof e=="function"?e:e[n];Object.assign(i,t)}}const zc=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);function $(t,e){return(n,i,r)=>{const s=o=>o.renderRoot?.querySelector(t)??null;return zc(n,i,{get(){return s(this)}})}}function sp(t){return(e,n)=>zc(e,n,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}let Bo=class extends Di{constructor(e){if(super(e),this.it=N,e.type!==_t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||e==null)return this._t=void 0,this.it=e;if(e===nt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Bo.directiveName="unsafeHTML",Bo.resultType=1;const nn=Pi(Bo);function Ea(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ni=Ea();function Mc(t){ni=t}var dr={exec:()=>null};function ne(t,e=""){let n=typeof t=="string"?t:t.source,i={replace:(r,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(Ze.caret,"$1"),n=n.replace(r,o),i},getRegex:()=>new RegExp(n,e)};return i}var op=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Ze={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},ap=/^(?:[ \t]*(?:\n|$))+/,lp=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,cp=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,$r=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,dp=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ca=/(?:[*+-]|\d{1,9}[.)])/,Nc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Fc=ne(Nc).replace(/bull/g,Ca).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),hp=ne(Nc).replace(/bull/g,Ca).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Sa=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,up=/^[^\n]+/,$a=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,pp=ne(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",$a).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),fp=ne(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ca).getRegex(),Ms="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Aa=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,mp=ne("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Aa).replace("tag",Ms).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Uc=ne(Sa).replace("hr",$r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex(),gp=ne(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Uc).getRegex(),_a={blockquote:gp,code:lp,def:pp,fences:cp,heading:dp,hr:$r,html:mp,lheading:Fc,list:fp,newline:ap,paragraph:Uc,table:dr,text:up},kl=ne("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",$r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex(),bp={..._a,lheading:hp,table:kl,paragraph:ne(Sa).replace("hr",$r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",kl).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex()},wp={..._a,html:ne(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Aa).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:dr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ne(Sa).replace("hr",$r).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Fc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},vp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,yp=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Bc=/^( {2,}|\\)\n(?!\s*$)/,xp=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ns=/[\p{P}\p{S}]/u,Ta=/[\s\p{P}\p{S}]/u,Vc=/[^\s\p{P}\p{S}]/u,kp=ne(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ta).getRegex(),qc=/(?!~)[\p{P}\p{S}]/u,Ep=/(?!~)[\s\p{P}\p{S}]/u,Cp=/(?:[^\s\p{P}\p{S}]|~)/u,Sp=ne(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",op?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Hc=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,$p=ne(Hc,"u").replace(/punct/g,Ns).getRegex(),Ap=ne(Hc,"u").replace(/punct/g,qc).getRegex(),Wc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",_p=ne(Wc,"gu").replace(/notPunctSpace/g,Vc).replace(/punctSpace/g,Ta).replace(/punct/g,Ns).getRegex(),Tp=ne(Wc,"gu").replace(/notPunctSpace/g,Cp).replace(/punctSpace/g,Ep).replace(/punct/g,qc).getRegex(),Rp=ne("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Vc).replace(/punctSpace/g,Ta).replace(/punct/g,Ns).getRegex(),Ip=ne(/\\(punct)/,"gu").replace(/punct/g,Ns).getRegex(),Lp=ne(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Op=ne(Aa).replace("(?:-->|$)","-->").getRegex(),Pp=ne("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Op).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),cs=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Dp=ne(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",cs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),jc=ne(/^!?\[(label)\]\[(ref)\]/).replace("label",cs).replace("ref",$a).getRegex(),Xc=ne(/^!?\[(ref)\](?:\[\])?/).replace("ref",$a).getRegex(),zp=ne("reflink|nolink(?!\\()","g").replace("reflink",jc).replace("nolink",Xc).getRegex(),El=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ra={_backpedal:dr,anyPunctuation:Ip,autolink:Lp,blockSkip:Sp,br:Bc,code:yp,del:dr,emStrongLDelim:$p,emStrongRDelimAst:_p,emStrongRDelimUnd:Rp,escape:vp,link:Dp,nolink:Xc,punctuation:kp,reflink:jc,reflinkSearch:zp,tag:Pp,text:xp,url:dr},Mp={...Ra,link:ne(/^!?\[(label)\]\((.*?)\)/).replace("label",cs).getRegex(),reflink:ne(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",cs).getRegex()},Vo={...Ra,emStrongRDelimAst:Tp,emStrongLDelim:Ap,url:ne(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",El).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ne(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",El).getRegex()},Np={...Vo,br:ne(Bc).replace("{2,}","*").getRegex(),text:ne(Vo.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ur={normal:_a,gfm:bp,pedantic:wp},Ki={normal:Ra,gfm:Vo,breaks:Np,pedantic:Mp},Fp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Cl=t=>Fp[t];function Ut(t,e){if(e){if(Ze.escapeTest.test(t))return t.replace(Ze.escapeReplace,Cl)}else if(Ze.escapeTestNoEncode.test(t))return t.replace(Ze.escapeReplaceNoEncode,Cl);return t}function Sl(t){try{t=encodeURI(t).replace(Ze.percentDecode,"%")}catch{return null}return t}function $l(t,e){let n=t.replace(Ze.findPipe,(s,o,l)=>{let c=!1,h=o;for(;--h>=0&&l[h]==="\\";)c=!c;return c?"|":" |"}),i=n.split(Ze.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(Ze.slashPipe,"|");return i}function Yi(t,e,n){let i=t.length;if(i===0)return"";let r=0;for(;r<i&&t.charAt(i-r-1)===e;)r++;return t.slice(0,i-r)}function Up(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return n>0?-2:-1}function Al(t,e,n,i,r){let s=e.href,o=e.title||null,l=t[1].replace(r.other.outputLinkReplace,"$1");i.state.inLink=!0;let c={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:s,title:o,text:l,tokens:i.inlineTokens(l)};return i.state.inLink=!1,c}function Bp(t,e,n){let i=t.match(n.other.indentCodeCompensation);if(i===null)return e;let r=i[1];return e.split(`
`).map(s=>{let o=s.match(n.other.beginningSpace);if(o===null)return s;let[l]=o;return l.length>=r.length?s.slice(r.length):s}).join(`
`)}var ds=class{options;rules;lexer;constructor(t){this.options=t||ni}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Yi(n,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],i=Bp(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let i=Yi(n,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(n=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Yi(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=Yi(e[0],`
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
`,t=t.substring(g.length+1),c=!0),!c){let C=this.rules.other.nextBulletRegex(w),z=this.rules.other.hrRegex(w),R=this.rules.other.fencesBeginRegex(w),O=this.rules.other.headingBeginRegex(w),_=this.rules.other.htmlBeginRegex(w);for(;t;){let X=t.split(`
`,1)[0],P;if(g=X,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),P=g):P=g.replace(this.rules.other.tabCharGlobal,"    "),R.test(g)||O.test(g)||_.test(g)||C.test(g)||z.test(g))break;if(P.search(this.rules.other.nonSpaceChar)>=w||!g.trim())u+=`
`+P.slice(w);else{if(b||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||R.test(p)||O.test(p)||z.test(p))break;u+=`
`+g}!b&&!g.trim()&&(b=!0),h+=X+`
`,t=t.substring(X.length+1),p=P.slice(w)}}r.loose||(o?r.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(o=!0));let k=null,L;this.options.gfm&&(k=this.rules.other.listIsTask.exec(u),k&&(L=k[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:h,task:!!k,checked:L,loose:!1,text:u,tokens:[]}),r.raw+=h}let l=r.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){let h=r.items[c].tokens.filter(p=>p.type==="space"),u=h.length>0&&h.some(p=>this.rules.other.anyLine.test(p.raw));r.loose=u}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:i,title:r}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=$l(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===i.length){for(let o of i)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<n.length;o++)s.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:s.align[o]});for(let o of r)s.rows.push($l(o,s.header.length).map((l,c)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:s.align[c]})));return s}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let s=Yi(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{let s=Up(e[2],"()");if(s===-2)return;if(s>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(i);s&&(i=s[1],r=s[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?i=i.slice(1):i=i.slice(1,-1)),Al(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let i=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[i.toLowerCase()];if(!r){let s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return Al(n,r,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let i=this.rules.inline.emStrongLDelim.exec(t);if(!(!i||i[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[2])||!n||this.rules.inline.punctuation.exec(n))){let r=[...i[0]].length-1,s,o,l=r,c=0,h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*t.length+r);(i=h.exec(e))!=null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(o=[...s].length,i[3]||i[4]){l+=o;continue}else if((i[5]||i[6])&&r%3&&!((r+o)%3)){c+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l+c);let u=[...i[0]][0].length,p=t.slice(0,r+i.index+u+o);if(Math.min(r,o)%2){let b=p.slice(1,-1);return{type:"em",raw:p,text:b,tokens:this.lexer.inlineTokens(b)}}let g=p.slice(2,-2);return{type:"strong",raw:p,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return i&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,i;return e[2]==="@"?(n=e[1],i="mailto:"+n):(n=e[1],i=n),{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,i;if(e[2]==="@")n=e[0],i="mailto:"+n;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);n=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},Tt=class qo{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ni,this.options.tokenizer=this.options.tokenizer||new ds,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:Ze,block:Ur.normal,inline:Ki.normal};this.options.pedantic?(n.block=Ur.pedantic,n.inline=Ki.pedantic):this.options.gfm&&(n.block=Ur.gfm,this.options.breaks?n.inline=Ki.breaks:n.inline=Ki.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ur,inline:Ki}}static lex(e,n){return new qo(n).lex(e)}static lexInline(e,n){return new qo(n).inlineTokens(e)}lex(e){e=e.replace(Ze.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],i=!1){for(this.options.pedantic&&(e=e.replace(Ze.tabCharGlobal,"    ").replace(Ze.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(o=>(r=o.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let o=n.at(-1);r.raw.length===1&&o!==void 0?o.raw+=`
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
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(r);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let i=e,r=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)s=r[2]?r[2].length:0,i=i.slice(0,r.index+s)+"["+"a".repeat(r[0].length-s-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let o=!1,l="";for(;e;){o||(l=""),o=!1;let c;if(this.options.extensions?.inline?.some(u=>(c=u.call({lexer:this},e,n))?(e=e.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);let u=n.at(-1);c.type==="text"&&u?.type==="text"?(u.raw+=c.raw,u.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(e,i,l)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(e)){e=e.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),n.push(c);continue}let h=e;if(this.options.extensions?.startInline){let u=1/0,p=e.slice(1),g;this.options.extensions.startInline.forEach(b=>{g=b.call({lexer:this},p),typeof g=="number"&&g>=0&&(u=Math.min(u,g))}),u<1/0&&u>=0&&(h=e.substring(0,u+1))}if(c=this.tokenizer.inlineText(h)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),o=!0;let u=n.at(-1);u?.type==="text"?(u.raw+=c.raw,u.text+=c.text):n.push(c);continue}if(e){let u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}},hs=class{options;parser;constructor(t){this.options=t||ni}space(t){return""}code({text:t,lang:e,escaped:n}){let i=(e||"").match(Ze.notSpaceStart)?.[0],r=t.replace(Ze.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Ut(i)+'">'+(n?r:Ut(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:Ut(r,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,n=t.start,i="";for(let o=0;o<t.items.length;o++){let l=t.items[o];i+=this.listitem(l)}let r=e?"ol":"ul",s=e&&n!==1?' start="'+n+'"':"";return"<"+r+s+`>
`+i+"</"+r+`>
`}listitem(t){let e="";if(t.task){let n=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=n+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=n+" "+Ut(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):e+=n+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let r=0;r<t.header.length;r++)n+=this.tablecell(t.header[r]);e+=this.tablerow({text:n});let i="";for(let r=0;r<t.rows.length;r++){let s=t.rows[r];n="";for(let o=0;o<s.length;o++)n+=this.tablecell(s[o]);i+=this.tablerow({text:n})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+i+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Ut(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){let i=this.parser.parseInline(n),r=Sl(t);if(r===null)return i;t=r;let s='<a href="'+t+'"';return e&&(s+=' title="'+Ut(e)+'"'),s+=">"+i+"</a>",s}image({href:t,title:e,text:n,tokens:i}){i&&(n=this.parser.parseInline(i,this.parser.textRenderer));let r=Sl(t);if(r===null)return Ut(n);t=r;let s=`<img src="${t}" alt="${n}"`;return e&&(s+=` title="${Ut(e)}"`),s+=">",s}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Ut(t.text)}},Ia=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},Rt=class Ho{options;renderer;textRenderer;constructor(e){this.options=e||ni,this.options.renderer=this.options.renderer||new hs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ia}static parse(e,n){return new Ho(n).parse(e)}static parseInline(e,n){return new Ho(n).parseInline(e)}parse(e,n=!0){let i="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let l=s,c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){i+=c||"";continue}}let o=s;switch(o.type){case"space":{i+=this.renderer.space(o);continue}case"hr":{i+=this.renderer.hr(o);continue}case"heading":{i+=this.renderer.heading(o);continue}case"code":{i+=this.renderer.code(o);continue}case"table":{i+=this.renderer.table(o);continue}case"blockquote":{i+=this.renderer.blockquote(o);continue}case"list":{i+=this.renderer.list(o);continue}case"html":{i+=this.renderer.html(o);continue}case"def":{i+=this.renderer.def(o);continue}case"paragraph":{i+=this.renderer.paragraph(o);continue}case"text":{let l=o,c=this.renderer.text(l);for(;r+1<e.length&&e[r+1].type==="text";)l=e[++r],c+=`
`+this.renderer.text(l);n?i+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):i+=c;continue}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}parseInline(e,n=this.renderer){let i="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=l||"";continue}}let o=s;switch(o.type){case"escape":{i+=n.text(o);break}case"html":{i+=n.html(o);break}case"link":{i+=n.link(o);break}case"image":{i+=n.image(o);break}case"strong":{i+=n.strong(o);break}case"em":{i+=n.em(o);break}case"codespan":{i+=n.codespan(o);break}case"br":{i+=n.br(o);break}case"del":{i+=n.del(o);break}case"text":{i+=n.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return i}},rr=class{options;block;constructor(t){this.options=t||ni}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?Tt.lex:Tt.lexInline}provideParser(){return this.block?Rt.parse:Rt.parseInline}},Vp=class{defaults=Ea();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Rt;Renderer=hs;TextRenderer=Ia;Lexer=Tt;Tokenizer=ds;Hooks=rr;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let i of t)switch(n=n.concat(e.call(this,i)),i.type){case"table":{let r=i;for(let s of r.header)n=n.concat(this.walkTokens(s.tokens,e));for(let s of r.rows)for(let o of s)n=n.concat(this.walkTokens(o.tokens,e));break}case"list":{let r=i;n=n.concat(this.walkTokens(r.items,e));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{let o=r[s].flat(1/0);n=n.concat(this.walkTokens(o,e))}):r.tokens&&(n=n.concat(this.walkTokens(r.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let s=e.renderers[r.name];s?e.renderers[r.name]=function(...o){let l=r.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[r.level];s?s.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),n.renderer){let r=this.defaults.renderer||new hs(this.defaults);for(let s in n.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let o=s,l=n.renderer[o],c=r[o];r[o]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=c.apply(r,h)),u||""}}i.renderer=r}if(n.tokenizer){let r=this.defaults.tokenizer||new ds(this.defaults);for(let s in n.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let o=s,l=n.tokenizer[o],c=r[o];r[o]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=c.apply(r,h)),u}}i.tokenizer=r}if(n.hooks){let r=this.defaults.hooks||new rr;for(let s in n.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let o=s,l=n.hooks[o],c=r[o];rr.passThroughHooks.has(s)?r[o]=h=>{if(this.defaults.async&&rr.passThroughHooksRespectAsync.has(s))return(async()=>{let p=await l.call(r,h);return c.call(r,p)})();let u=l.call(r,h);return c.call(r,u)}:r[o]=(...h)=>{if(this.defaults.async)return(async()=>{let p=await l.apply(r,h);return p===!1&&(p=await c.apply(r,h)),p})();let u=l.apply(r,h);return u===!1&&(u=c.apply(r,h)),u}}i.hooks=r}if(n.walkTokens){let r=this.defaults.walkTokens,s=n.walkTokens;i.walkTokens=function(o){let l=[];return l.push(s.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return Tt.lex(t,e??this.defaults)}parser(t,e){return Rt.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let i={...n},r={...this.defaults,...i},s=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=t),r.async)return(async()=>{let o=r.hooks?await r.hooks.preprocess(e):e,l=await(r.hooks?await r.hooks.provideLexer():t?Tt.lex:Tt.lexInline)(o,r),c=r.hooks?await r.hooks.processAllTokens(l):l;r.walkTokens&&await Promise.all(this.walkTokens(c,r.walkTokens));let h=await(r.hooks?await r.hooks.provideParser():t?Rt.parse:Rt.parseInline)(c,r);return r.hooks?await r.hooks.postprocess(h):h})().catch(s);try{r.hooks&&(e=r.hooks.preprocess(e));let o=(r.hooks?r.hooks.provideLexer():t?Tt.lex:Tt.lexInline)(e,r);r.hooks&&(o=r.hooks.processAllTokens(o)),r.walkTokens&&this.walkTokens(o,r.walkTokens);let l=(r.hooks?r.hooks.provideParser():t?Rt.parse:Rt.parseInline)(o,r);return r.hooks&&(l=r.hooks.postprocess(l)),l}catch(o){return s(o)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let i="<p>An error occurred:</p><pre>"+Ut(n.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(n);throw n}}},jn=new Vp;function re(t,e){return jn.parse(t,e)}re.options=re.setOptions=function(t){return jn.setOptions(t),re.defaults=jn.defaults,Mc(re.defaults),re};re.getDefaults=Ea;re.defaults=ni;re.use=function(...t){return jn.use(...t),re.defaults=jn.defaults,Mc(re.defaults),re};re.walkTokens=function(t,e){return jn.walkTokens(t,e)};re.parseInline=jn.parseInline;re.Parser=Rt;re.parser=Rt.parse;re.Renderer=hs;re.TextRenderer=Ia;re.Lexer=Tt;re.lexer=Tt.lex;re.Tokenizer=ds;re.Hooks=rr;re.parse=re;re.options;re.setOptions;re.use;re.walkTokens;re.parseInline;Rt.parse;Tt.lex;const en=t=>{console.info("[TOAST] INFO:",t)},Ae=t=>{console.error("[TOAST] ERROR:",t)},qp=t=>{console.warn("[TOAST] WARNING:",t)};Mi.put("toastInfo",en);Mi.put("toastError",Ae);Mi.put("toastWarning",qp);const xi=(t,e)=>{const n=new Bt.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{n.watch(t)}});return n.watch(t),t.get(),()=>{n.unwatch(t)}};Object.defineProperty(qn.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class Ar extends Ih(qn){constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(e=>Jh(e)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(e=>e()),this.signalCleanups.clear()}subscribe(e,n){const i=Ce(e,n.bind(this));this.eventSubscriptions.add(i)}showInfo(e){en(e)}showError(e){Ae(e)}nobubble(e){return n=>{n.stopPropagation(),e.bind(this)(n)}}command(e,n={}){return()=>{this.executeCommand(e,n)}}executeCommand(e,n){const i=Te.createExecutionContext(n);Te.execute(e,i)}watch(e,n){const i=xi(e,n.bind(this));this.signalCleanups.add(i)}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}class Gt extends Ar{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let n=this;for(;n&&n!==document.body&&n!==document.documentElement;){const i=n.getAttribute("id");if(i){e.unshift(`#${i}`);break}const r=n.tagName.toLowerCase(),s=n.parentElement;if(!s)break;const l=Array.from(s.children).filter(c=>c.tagName.toLowerCase()===r).indexOf(n);l>=0?e.unshift(`${r}:${l}`):e.unshift(r),n=s}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),n=this.getAttribute("id");if(n){this.settingsKey=`${e}:${n}`;return}const i=this.buildDOMTreePath();i&&(this.settingsKey=`${e}:${i}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await le.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await le.setDialogSetting(this.settingsKey,e)}}const Ya=class Ya extends Gt{dispose(){}getResult(){}renderMessage(e,n=!1){if(n){const i=re.parse(e,{async:!1});return f`<div class="dialog-message" style="white-space: normal;">${nn(i)}</div>`}return f`<div class="dialog-message" style="white-space: pre-line;">${e}</div>`}};Ya.styles=[qe`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let sn=Ya;const Yt=hn("DialogService"),Xn="dialogs",Fs={id:"ok",label:"OK",variant:"primary"},Gc={id:"cancel",label:"Cancel",variant:"default"},Kc={id:"close",label:"Close",variant:"default"};let Zi=null;function Hp(){return Zi||(Zi=document.createElement("div"),Zi.id="global-dialog-container",document.body.appendChild(Zi)),Zi}class Wp{constructor(){this.contributions=new Map,this.loadContributions(),Ce(Ft,e=>{e.target===Xn&&this.loadContributions()})}loadContributions(){const e=D.getContributions(Xn);this.contributions.clear();for(const n of e){if(!n.id){Yt.warn("Dialog contribution missing id, skipping");continue}if(!n.component){Yt.warn(`Dialog contribution "${n.id}" has no component function, skipping`);continue}if(!n.onButton){Yt.warn(`Dialog contribution "${n.id}" has no onButton callback, skipping`);continue}this.contributions.set(n.id,n),Yt.debug(`Loaded dialog contribution: ${n.id}`)}Yt.info(`Loaded ${this.contributions.size} dialog contributions`)}async open(e,n){const i=this.contributions.get(e);if(!i)throw Yt.error(`Dialog "${e}" not found`),new Error(`Dialog "${e}" not found`);return new Promise(r=>{const s=Hp();let o=!0,l=null;const c=async()=>{if(o){if(o=!1,l)try{await l.dispose()}catch(b){const w=b instanceof Error?b.message:String(b);Yt.error(`Error disposing dialog content for "${e}": ${w}`)}try{const b=l?l.getResult():void 0;await i.onButton("close",b,p)}catch(b){const w=b instanceof Error?b.message:String(b);Yt.error(`Error executing close callback for dialog "${e}": ${w}`)}Ct(f``,s),r()}},h=async b=>{try{const w=l?l.getResult():void 0;await i.onButton(b,w,p)!==!1&&c()}catch(w){const k=w instanceof Error?w.message:String(w);Yt.error(`Error executing button callback for dialog "${e}": ${k}`),c()}},u=i.buttons&&i.buttons.length>0?i.buttons:[Fs];n&&typeof n=="object"&&(n.close=c);const p={...n,close:c},g=f`
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
            `;Ct(g,s),(async()=>{const b=Array.from(s.querySelectorAll("*"));for(const w of b)if(w instanceof sn){await w.updateComplete,l=w;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(e){return this.contributions.has(e)}}const Us=new Wp;He.put("dialogService",Us);var jp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,_r=(t,e,n,i)=>{for(var r=i>1?void 0:i?Xp(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&jp(e,n,r),r};let Gn=class extends sn{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(t){super.firstUpdated(t),this.inputValue=this.defaultValue,await this.updateComplete;const e=this.shadowRoot?.querySelector("wa-input");if(e){const n=e.shadowRoot?.querySelector("input");n&&(n.focus(),n.select())}}getResult(){return this.inputValue}handleInput(t){this.inputValue=t.target.value}handleKeyDown(t){t.key==="Enter"?(t.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):t.key==="Escape"&&(t.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return f`
            ${this.renderMessage(this.message,this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `}};Gn.styles=[...sn.styles,qe`
            wa-input {
                width: 100%;
            }
        `];_r([d({type:String})],Gn.prototype,"message",2);_r([d({type:String,attribute:"default-value"})],Gn.prototype,"defaultValue",2);_r([d({type:Boolean})],Gn.prototype,"markdown",2);_r([A()],Gn.prototype,"inputValue",2);Gn=_r([S("k-prompt-dialog-content")],Gn);D.registerContribution(Xn,{id:"prompt",label:"Input",buttons:[Fs,Gc],component:t=>t?f`
            <k-prompt-dialog-content 
                .message="${t.message}"
                .defaultValue="${t.defaultValue}"
                .markdown="${t.markdown}"
            ></k-prompt-dialog-content>
        `:f`<div>Error: No prompt dialog state</div>`,onButton:async(t,e,n)=>(n&&(t==="ok"?n.resolve(e||""):n.resolve(null)),!0)});async function Yc(t,e="",n=!1){return new Promise(i=>{Us.open("prompt",{message:t,defaultValue:e,markdown:n,resolve:i})})}var Gp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,La=(t,e,n,i)=>{for(var r=i>1?void 0:i?Kp(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Gp(e,n,r),r};let us=class extends sn{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return f`
            ${this.renderMessage(this.message,this.markdown)}
        `}};La([d({type:String})],us.prototype,"message",2);La([d({type:Boolean})],us.prototype,"markdown",2);us=La([S("k-info-dialog-content")],us);D.registerContribution(Xn,{id:"info",label:"Information",buttons:[Fs],component:t=>t?f`
            <k-info-dialog-content 
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></k-info-dialog-content>
        `:f`<div>Error: No info dialog state</div>`,onButton:async(t,e,n)=>(n&&n.resolve&&n.resolve(),!0)});var Yp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,Oa=(t,e,n,i)=>{for(var r=i>1?void 0:i?Zp(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Yp(e,n,r),r};let ps=class extends sn{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return f`
            ${this.renderMessage(this.message,this.markdown)}
        `}};Oa([d({type:String})],ps.prototype,"message",2);Oa([d({type:Boolean})],ps.prototype,"markdown",2);ps=Oa([S("k-confirm-dialog-content")],ps);D.registerContribution(Xn,{id:"confirm",label:"Confirm",buttons:[Fs,Gc],component:t=>t?f`
            <k-confirm-dialog-content 
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></k-confirm-dialog-content>
        `:f`<div>Error: No confirm dialog state</div>`,onButton:async(t,e,n)=>(n&&(t==="ok"?n.resolve(!0):n.resolve(!1)),!0)});async function Bs(t,e=!1){return new Promise(n=>{Us.open("confirm",{message:t,markdown:e,resolve:n})})}var Jp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,ii=(t,e,n,i)=>{for(var r=i>1?void 0:i?Qp(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Jp(e,n,r),r};let on=class extends sn{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(t){super.firstUpdated(t),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const e=this.closest("wa-dialog");e&&(this.dialogElement=e,this.updateDialogLabel());const n=this.closest(".dialog-service-content");if(n){const i=n.parentElement?.querySelector(".dialog-service-footer");i&&(i.style.display="none")}}updated(t){super.updated(t),t.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),t.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(t,e,n){this.currentTitle=t,this.currentMessage=e,this.actions=[...n],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(t){t.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const t=this.actions.filter(n=>n.label!=="Close"),e=this.actions.filter(n=>n.label==="Close");return f`
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
        `}};on.styles=[...sn.styles,qe`
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
        `];ii([d({type:String})],on.prototype,"title",2);ii([d({type:String})],on.prototype,"message",2);ii([d({type:Boolean})],on.prototype,"markdown",2);ii([A()],on.prototype,"actions",2);ii([A()],on.prototype,"currentTitle",2);ii([A()],on.prototype,"currentMessage",2);on=ii([S("k-navigable-info-dialog-content")],on);D.registerContribution(Xn,{id:"navigable-info",label:"Information",buttons:[Kc],component:t=>{if(!t)return f`<div>Error: No navigable info dialog state</div>`;const e=f`
            <k-navigable-info-dialog-content 
                .title="${t.title}"
                .message="${t.message}"
                .markdown="${t.markdown}"
            ></k-navigable-info-dialog-content>
        `;return(async()=>{const n=document.querySelector("k-navigable-info-dialog-content");n&&(await n.updateComplete,n.actions=t.actions||[],n.resolveCallback=t.resolve,t.updateDialogRef&&(t.updateDialogRef.current=(i,r,s)=>{n.updateDialog(i,r,s)}))})(),e},onButton:async(t,e,n)=>n&&t==="close"&&n.resolve?(n.resolve(),!0):!1});const Wo=new Set,fi=new Map;let Nn,Pa="ltr",Da="en";const Zc=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Zc){const t=new MutationObserver(Qc);Pa=document.documentElement.dir||"ltr",Da=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Jc(...t){t.map(e=>{const n=e.$code.toLowerCase();fi.has(n)?fi.set(n,Object.assign(Object.assign({},fi.get(n)),e)):fi.set(n,e),Nn||(Nn=e)}),Qc()}function Qc(){Zc&&(Pa=document.documentElement.dir||"ltr",Da=document.documentElement.lang||navigator.language),[...Wo.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let ef=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Wo.add(this.host)}hostDisconnected(){Wo.delete(this.host)}dir(){return`${this.host.dir||Pa}`.toLowerCase()}lang(){return`${this.host.lang||Da}`.toLowerCase()}getTranslationData(e){var n,i;const r=new Intl.Locale(e.replace(/_/g,"-")),s=r?.language.toLowerCase(),o=(i=(n=r?.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&i!==void 0?i:"",l=fi.get(`${s}-${o}`),c=fi.get(s);return{locale:r,language:s,region:o,primary:l,secondary:c}}exists(e,n){var i;const{primary:r,secondary:s}=this.getTranslationData((i=n.lang)!==null&&i!==void 0?i:this.lang());return n=Object.assign({includeFallback:!1},n),!!(r&&r[e]||s&&s[e]||n.includeFallback&&Nn&&Nn[e])}term(e,...n){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(r&&r[e])s=r[e];else if(Nn&&Nn[e])s=Nn[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...n):s}date(e,n){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),n).format(e)}number(e,n){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),n).format(e)}relativeTime(e,n,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,n)}};var ed={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};Jc(ed);var tf=ed;var ie=class extends ef{};Jc(tf);var za=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var jo="",Xo="";function _l(t){jo=t}function nf(t=""){if(!jo){const e=document.querySelector("[data-webawesome]");if(e?.hasAttribute("data-webawesome")){const n=new URL(e.getAttribute("data-webawesome")??"",window.location.href).pathname;_l(n)}else{const i=[...document.getElementsByTagName("script")].find(r=>r.src.endsWith("webawesome.js")||r.src.endsWith("webawesome.loader.js")||r.src.endsWith("webawesome.ssr-loader.js"));if(i){const r=String(i.getAttribute("src"));_l(r.split("/").slice(0,-1).join("/"))}}}return jo.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}function rf(t){Xo=t}function sf(){if(!Xo){const t=document.querySelector("[data-fa-kit-code]");t&&rf(t.getAttribute("data-fa-kit-code")||"")}return Xo}var Zt="7.0.1";function of(t,e,n){const i=sf(),r=i.length>0;let s="solid";return e==="notdog"?(n==="solid"&&(s="solid"),n==="duo-solid"&&(s="duo-solid"),`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/notdog-${s}/${t}.svg?token=${encodeURIComponent(i)}`):e==="chisel"?`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/chisel-regular/${t}.svg?token=${encodeURIComponent(i)}`:e==="etch"?`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/etch-solid/${t}.svg?token=${encodeURIComponent(i)}`:e==="jelly"?(n==="regular"&&(s="regular"),n==="duo-regular"&&(s="duo-regular"),n==="fill-regular"&&(s="fill-regular"),`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/jelly-${s}/${t}.svg?token=${encodeURIComponent(i)}`):e==="slab"?((n==="solid"||n==="regular")&&(s="regular"),n==="press-regular"&&(s="press-regular"),`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/slab-${s}/${t}.svg?token=${encodeURIComponent(i)}`):e==="thumbprint"?`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/thumbprint-light/${t}.svg?token=${encodeURIComponent(i)}`:e==="whiteboard"?`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/whiteboard-semibold/${t}.svg?token=${encodeURIComponent(i)}`:(e==="classic"&&(n==="thin"&&(s="thin"),n==="light"&&(s="light"),n==="regular"&&(s="regular"),n==="solid"&&(s="solid")),e==="sharp"&&(n==="thin"&&(s="sharp-thin"),n==="light"&&(s="sharp-light"),n==="regular"&&(s="sharp-regular"),n==="solid"&&(s="sharp-solid")),e==="duotone"&&(n==="thin"&&(s="duotone-thin"),n==="light"&&(s="duotone-light"),n==="regular"&&(s="duotone-regular"),n==="solid"&&(s="duotone")),e==="sharp-duotone"&&(n==="thin"&&(s="sharp-duotone-thin"),n==="light"&&(s="sharp-duotone-light"),n==="regular"&&(s="sharp-duotone-regular"),n==="solid"&&(s="sharp-duotone-solid")),e==="brands"&&(s="brands"),r?`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/${s}/${t}.svg?token=${encodeURIComponent(i)}`:`https://ka-f.fontawesome.com/releases/v${Zt}/svgs/${s}/${t}.svg`)}var af={name:"default",resolver:(t,e="classic",n="solid")=>of(t,e,n),mutator:(t,e)=>{if(e?.family&&!t.hasAttribute("data-duotone-initialized")){const{family:n,variant:i}=e;if(n==="duotone"||n==="sharp-duotone"||n==="notdog"&&i==="duo-solid"||n==="jelly"&&i==="duo-regular"||n==="thumbprint"){const r=[...t.querySelectorAll("path")],s=r.find(l=>!l.hasAttribute("opacity")),o=r.find(l=>l.hasAttribute("opacity"));if(!s||!o)return;if(s.setAttribute("data-duotone-primary",""),o.setAttribute("data-duotone-secondary",""),e.swapOpacity&&s&&o){const l=o.getAttribute("opacity")||"0.4";s.style.setProperty("--path-opacity",l),o.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},lf=af;function cf(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var mo={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},df={name:"system",resolver:(t,e="classic",n="solid")=>{let r=mo[n][t]??mo.regular[t]??mo.regular["circle-question"];return r?cf(r):""}},hf=df;var uf="classic",fs=[lf,hf],ms=[];function pf(t){ms.push(t)}function ff(t){ms=ms.filter(e=>e!==t)}function go(t){return fs.find(e=>e.name===t)}function mf(t,e){gf(t),fs.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),ms.forEach(n=>{n.library===t&&n.setIcon()})}function gf(t){fs=fs.filter(e=>e.name!==t)}function bf(){return uf}function I(t,e){const n={waitUntilFirstUpdate:!1,...e};return(i,r)=>{const{update:s}=i,o=Array.isArray(t)?t:[t];i.update=function(l){o.forEach(c=>{const h=c;if(l.has(h)){const u=l.get(h),p=this[h];u!==p&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,p)}}),s.call(this,l)}}}var wf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,td=t=>{throw TypeError(t)},a=(t,e,n,i)=>{for(var r=i>1?void 0:i?vf(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&wf(e,n,r),r},nd=(t,e,n)=>e.has(t)||td("Cannot "+n),yf=(t,e,n)=>(nd(t,e,"read from private field"),e.get(t)),xf=(t,e,n)=>e.has(t)?td("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),kf=(t,e,n,i)=>(nd(t,e,"write to private field"),e.set(t,n),n);var Ef=`:host {
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
`,es,M=class extends qn{constructor(){super(),xf(this,es,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,n)=>{if(this.internals?.states)try{n?this.internals.states.add(e):this.internals.states.delete(e)}catch(i){if(String(i).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw i}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,n]of t.elementProperties)n.default==="inherit"&&n.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${n.initial}`,!0)}static get styles(){const t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Ef,...t].map(e=>typeof e=="string"?Sc(e):e)}attributeChangedCallback(t,e,n){yf(this,es)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),kf(this,es,!0)),super.attributeChangedCallback(t,e,n)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,n)=>{t.has(n)&&this[n]==null&&(this[n]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){const n=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});n.error=e,this.dispatchEvent(n)}throw e}}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};es=new WeakMap;a([d()],M.prototype,"dir",2);a([d()],M.prototype,"lang",2);a([d({type:Boolean,reflect:!0,attribute:"did-ssr"})],M.prototype,"didSSR",2);var gi=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},Cf=`:host {
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
`,Ji=Symbol(),Br=Symbol(),bo,wo=new Map,rt=class extends M{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.resolveIcon=async(t,e)=>{let n;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=f`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(i,this),this.svg}try{if(n=await fetch(t,{mode:"cors"}),!n.ok)return n.status===410?Ji:Br}catch{return Br}try{const i=document.createElement("div");i.innerHTML=await n.text();const r=i.firstElementChild;if(r?.tagName?.toLowerCase()!=="svg")return Ji;bo||(bo=new DOMParser);const o=bo.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):Ji}catch{return Ji}}}connectedCallback(){super.connectedCallback(),pf(this)}firstUpdated(t){super.firstUpdated(t),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ff(this)}getIconSource(){const t=go(this.library),e=this.family||bf();return this.name&&t?{url:t.resolver(this.name,e,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:t,fromLibrary:e}=this.getIconSource(),n=e?go(this.library):void 0;if(!t){this.svg=null;return}let i=wo.get(t);i||(i=this.resolveIcon(t,n),wo.set(t,i));const r=await i;if(r===Br&&wo.delete(t),t===this.getIconSource().url){if(Hh(r)){this.svg=r;return}switch(r){case Br:case Ji:this.svg=null,this.dispatchEvent(new gi);break;default:this.svg=r.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new za)}}}updated(t){super.updated(t);const e=go(this.library),n=this.shadowRoot?.querySelector("svg");n&&e?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:f`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};rt.css=Cf;a([A()],rt.prototype,"svg",2);a([d({reflect:!0})],rt.prototype,"name",2);a([d({reflect:!0})],rt.prototype,"family",2);a([d({reflect:!0})],rt.prototype,"variant",2);a([d({attribute:"auto-width",type:Boolean,reflect:!0})],rt.prototype,"autoWidth",2);a([d({attribute:"swap-opacity",type:Boolean,reflect:!0})],rt.prototype,"swapOpacity",2);a([d()],rt.prototype,"src",2);a([d()],rt.prototype,"label",2);a([d({reflect:!0})],rt.prototype,"library",2);a([I("label")],rt.prototype,"handleLabelChange",1);a([I(["family","name","library","variant","src","autoWidth","swapOpacity"])],rt.prototype,"setIcon",1);rt=a([S("wa-icon")],rt);var Sf=`:host {
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
`,Ot=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.play=!this.play)}handleLoad(){const t=document.createElement("canvas"),{width:e,height:n}=this.animatedImage;t.width=e,t.height=n,t.getContext("2d").drawImage(this.animatedImage,0,0,e,n),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new za),this.isLoaded=!0)}handleError(){this.dispatchEvent(new gi)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){const e=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`;return f`
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
    `}};Ot.css=Sf;a([$(".animated")],Ot.prototype,"animatedImage",2);a([A()],Ot.prototype,"frozenFrame",2);a([A()],Ot.prototype,"isLoaded",2);a([d()],Ot.prototype,"src",2);a([d()],Ot.prototype,"alt",2);a([d({type:Boolean,reflect:!0})],Ot.prototype,"play",2);a([I("play",{waitUntilFirstUpdate:!0})],Ot.prototype,"handlePlayChange",1);a([I("src")],Ot.prototype,"handleSrcChange",1);Ot=a([S("wa-animated-image")],Ot);const $f=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Af=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],_f=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Tf=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Rf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],If=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Lf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Of=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Pf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Df=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],zf=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Mf=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Nf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ff=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Uf=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Bf=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Vf=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],qf=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Hf=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Wf=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],jf=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Xf=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Gf=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Kf=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Yf=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Zf=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Jf=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Qf=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],em=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],tm=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],nm=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],im=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],rm=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sm=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],om=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],am=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],lm=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],cm=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],dm=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hm=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],um=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pm=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fm=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],mm=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],gm=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],bm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],wm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],vm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],ym=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],xm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],km=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Em=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Cm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Sm=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],$m=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Am=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],_m=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Tm=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Rm=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Im=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Lm=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Om=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Pm=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Dm=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],zm=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Mm=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Nm=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Fm=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Um=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Bm=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Vm=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],qm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Hm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Wm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],jm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Xm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Gm=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Km=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ym=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Zm=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Jm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Qm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],eg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],tg=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],ng=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],ig=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],rg=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sg=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],og=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],ag=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],lg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],cg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],dg=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],hg=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],ug=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],pg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],fg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],mg=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],id={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},gg=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Ff,backInLeft:Uf,backInRight:Bf,backInUp:Vf,backOutDown:qf,backOutLeft:Hf,backOutRight:Wf,backOutUp:jf,bounce:$f,bounceIn:Xf,bounceInDown:Gf,bounceInLeft:Kf,bounceInRight:Yf,bounceInUp:Zf,bounceOut:Jf,bounceOutDown:Qf,bounceOutLeft:em,bounceOutRight:tm,bounceOutUp:nm,easings:id,fadeIn:im,fadeInBottomLeft:rm,fadeInBottomRight:sm,fadeInDown:om,fadeInDownBig:am,fadeInLeft:lm,fadeInLeftBig:cm,fadeInRight:dm,fadeInRightBig:hm,fadeInTopLeft:um,fadeInTopRight:pm,fadeInUp:fm,fadeInUpBig:mm,fadeOut:gm,fadeOutBottomLeft:bm,fadeOutBottomRight:wm,fadeOutDown:vm,fadeOutDownBig:ym,fadeOutLeft:xm,fadeOutLeftBig:km,fadeOutRight:Em,fadeOutRightBig:Cm,fadeOutTopLeft:Sm,fadeOutTopRight:$m,fadeOutUp:Am,fadeOutUpBig:_m,flash:Af,flip:Tm,flipInX:Rm,flipInY:Im,flipOutX:Lm,flipOutY:Om,headShake:_f,heartBeat:Tf,hinge:ng,jackInTheBox:ig,jello:Rf,lightSpeedInLeft:Pm,lightSpeedInRight:Dm,lightSpeedOutLeft:zm,lightSpeedOutRight:Mm,pulse:If,rollIn:rg,rollOut:sg,rotateIn:Nm,rotateInDownLeft:Fm,rotateInDownRight:Um,rotateInUpLeft:Bm,rotateInUpRight:Vm,rotateOut:qm,rotateOutDownLeft:Hm,rotateOutDownRight:Wm,rotateOutUpLeft:jm,rotateOutUpRight:Xm,rubberBand:Lf,shake:Of,shakeX:Pf,shakeY:Df,slideInDown:Gm,slideInLeft:Km,slideInRight:Ym,slideInUp:Zm,slideOutDown:Jm,slideOutLeft:Qm,slideOutRight:eg,slideOutUp:tg,swing:zf,tada:Mf,wobble:Nf,zoomIn:og,zoomInDown:ag,zoomInLeft:lg,zoomInRight:cg,zoomInUp:dg,zoomOut:hg,zoomOutDown:ug,zoomOutLeft:pg,zoomOutRight:fg,zoomOutUp:mg},Symbol.toStringTag,{value:"Module"}));var bg=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}},wg=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}},Tl=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}},vg=`:host {
  display: contents;
}
`,Re=class extends M{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new wg)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new bg)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const t=id[this.easing]??this.easing,e=this.keyframes??gg[this.name],i=(await this.defaultSlot).assignedElements()[0];return!i||!e?!1:(this.destroyAnimation(),this.animation=i.animate(e,{delay:this.delay,direction:this.direction,duration:this.duration,easing:t,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new Tl)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new Tl)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return f` <slot @slotchange=${this.handleSlotChange}></slot> `}};Re.css=vg;a([sp("slot")],Re.prototype,"defaultSlot",2);a([d()],Re.prototype,"name",2);a([d({type:Boolean,reflect:!0})],Re.prototype,"play",2);a([d({type:Number})],Re.prototype,"delay",2);a([d()],Re.prototype,"direction",2);a([d({type:Number})],Re.prototype,"duration",2);a([d()],Re.prototype,"easing",2);a([d({attribute:"end-delay",type:Number})],Re.prototype,"endDelay",2);a([d()],Re.prototype,"fill",2);a([d({type:Number})],Re.prototype,"iterations",2);a([d({attribute:"iteration-start",type:Number})],Re.prototype,"iterationStart",2);a([d({attribute:!1})],Re.prototype,"keyframes",2);a([d({attribute:"playback-rate",type:Number})],Re.prototype,"playbackRate",2);a([I(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Re.prototype,"handleAnimationChange",1);a([I("play")],Re.prototype,"handlePlayChange",1);a([I("playbackRate")],Re.prototype,"handlePlaybackRateChange",1);Re=a([S("wa-animation")],Re);var yg=`:host {
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
`,qt=class extends M{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new gi)}render(){const t=f`
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
      `,f` ${this.image&&!this.hasError?t:e} `}};qt.css=yg;a([A()],qt.prototype,"hasError",2);a([d()],qt.prototype,"image",2);a([d()],qt.prototype,"label",2);a([d()],qt.prototype,"initials",2);a([d()],qt.prototype,"loading",2);a([d({reflect:!0})],qt.prototype,"shape",2);a([I("image")],qt.prototype,"handleImageChange",1);qt=a([S("wa-avatar")],qt);var Tr=`@layer wa-utilities {
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
`;var xg=`:host {
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
`,Kn=class extends M{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return f` <slot part="base" role="status"></slot>`}};Kn.css=[Tr,xg];a([d({reflect:!0})],Kn.prototype,"variant",2);a([d({reflect:!0})],Kn.prototype,"appearance",2);a([d({type:Boolean,reflect:!0})],Kn.prototype,"pill",2);a([d({reflect:!0})],Kn.prototype,"attention",2);Kn=a([S("wa-badge")],Kn);var kg=`.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
`,ki=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(n=>n.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="wa-breadcrumb-item");t.forEach((e,n)=>{const i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),n===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),f`
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
    `}};ki.css=kg;a([$("slot")],ki.prototype,"defaultSlot",2);a([$('slot[name="separator"]')],ki.prototype,"separatorSlot",2);a([d()],ki.prototype,"label",2);ki=a([S("wa-breadcrumb")],ki);var Vs=()=>({checkValidity(t){const e=t.input,n={message:"",isValid:!0,invalidKeys:[]};if(!e)return n;let i=!0;if("checkValidity"in e&&(i=e.checkValidity()),i)return n;if(n.isValid=!1,"validationMessage"in e&&(n.message=e.validationMessage),!("validity"in e))return n.invalidKeys.push("customError"),n;for(const r in e.validity){if(r==="valid")continue;const s=r;e.validity[s]&&n.invalidKeys.push(s)}return n}});var Ma=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},Eg=()=>({observedAttributes:["custom-error"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),me=class extends M{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Ma))},this.handleInteraction=t=>{const e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[Eg()]}static get observedAttributes(){const t=new Set(super.observedAttributes||[]);for(const e of this.validators)if(e.observedAttributes)for(const n of e.observedAttributes)t.add(n);return[...t]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")){const e=this.value;if(Array.isArray(e)){if(this.name){const n=new FormData;for(const i of e)n.append(this.name,i);this.setValue(n,n)}}else this.setValue(e,e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){const e=t[0],n=t[1];let i=t[2];i||(i=this.validationTarget),this.internals.setValidity(e,n,i||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const t=!!this.required,e=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&n),this.customStates.set("user-valid",e&&n)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...t){const[e,n]=t;this.internals.setFormValue(e,n)}get allValidators(){const t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const t=this.allValidators;if(!t?.length)return;const e={customError:!!this.customError},n=this.validationTarget||this.input||void 0;let i="";for(const r of t){const{isValid:s,message:o,invalidKeys:l}=r.checkValidity(this);s||(i||(i=o),l?.length>=0&&l.forEach(c=>e[c]=!0))}i||(i=this.validationMessage),this.setValidity(e,i,n)}};me.formAssociated=!0;a([d({reflect:!0})],me.prototype,"name",2);a([d({type:Boolean})],me.prototype,"disabled",2);a([d({state:!0,attribute:!1})],me.prototype,"valueHasChanged",2);a([d({state:!0,attribute:!1})],me.prototype,"hasInteracted",2);a([d({attribute:"custom-error",reflect:!0})],me.prototype,"customError",2);a([d({attribute:!1,state:!0,type:Object})],me.prototype,"validity",1);var yt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=n=>{const i=n.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var et=`@layer wa-utilities {
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
`;const j=Pi(class extends Di{constructor(t){if(super(t),t.type!==_t.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const n=t.element.classList;for(const i of this.st)i in e||(n.remove(i),this.st.delete(i));for(const i in e){const r=!!e[i];r===this.st.has(i)||this.nt?.has(i)||(r?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return nt}});const B=t=>t??N;const rd=Symbol.for(""),Cg=t=>{if(t?.r===rd)return t?._$litStatic$},Rl=(t,...e)=>({_$litStatic$:e.reduce(((n,i,r)=>n+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1]),t[0]),r:rd}),Il=new Map,Sg=t=>(e,...n)=>{const i=n.length;let r,s;const o=[],l=[];let c,h=0,u=!1;for(;h<i;){for(c=e[h];h<i&&(s=n[h],(r=Cg(s))!==void 0);)c+=r+e[++h],u=!0;h!==i&&l.push(s),o.push(c),h++}if(h===i&&o.push(e[i]),u){const p=o.join("$$lit$$");(e=Il.get(p))===void 0&&(o.raw=o,Il.set(p,e=o)),n=l}return t(e,...n)},vo=Sg(f);var $g=`@layer wa-component {
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
`,oe=class extends me{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new yt(this,"[default]","start","end"),this.localize=new ie(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static get validators(){return[...super.validators,Vs()]}constructLightDOMButton(){const t=document.createElement("button");return t.type=this.type,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",this.name&&(t.name=this.name),t.value=this.value||"",["form","formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{this.hasAttribute(e)&&t.setAttribute(e,this.getAttribute(e))}),t}handleClick(){if(!this.getForm())return;const e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new Ma)}handleLabelSlotChange(){const t=this.labelSlot.assignedNodes({flatten:!0});let e=!1,n=!1,i=!1,r=!1;[...t].forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){const o=s;o.localName==="wa-icon"?(n=!0,e||(e=o.label!==void 0)):r=!0}else s.nodeType===Node.TEXT_NODE&&(s.textContent?.trim()||"").length>0&&(i=!0)}),this.isIconButton=n&&!i&&!r,this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=this.isLink(),e=t?Rl`a`:Rl`button`;return vo`
      <${e}
        part="base"
        class=${j({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${B(t?void 0:this.disabled)}
        type=${B(t?void 0:this.type)}
        title=${this.title}
        name=${B(t?void 0:this.name)}
        value=${B(t?void 0:this.value)}
        href=${B(t?this.href:void 0)}
        target=${B(t?this.target:void 0)}
        download=${B(t?this.download:void 0)}
        rel=${B(t&&this.rel?this.rel:void 0)}
        role=${B(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?vo`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?vo`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};oe.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0};oe.css=[$g,Tr,et];a([$(".button")],oe.prototype,"button",2);a([$("slot:not([name])")],oe.prototype,"labelSlot",2);a([A()],oe.prototype,"invalid",2);a([A()],oe.prototype,"isIconButton",2);a([d()],oe.prototype,"title",2);a([d({reflect:!0})],oe.prototype,"variant",2);a([d({reflect:!0})],oe.prototype,"appearance",2);a([d({reflect:!0})],oe.prototype,"size",2);a([d({attribute:"with-caret",type:Boolean,reflect:!0})],oe.prototype,"withCaret",2);a([d({type:Boolean})],oe.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],oe.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],oe.prototype,"pill",2);a([d()],oe.prototype,"type",2);a([d({reflect:!0})],oe.prototype,"name",2);a([d({reflect:!0})],oe.prototype,"value",2);a([d({reflect:!0})],oe.prototype,"href",2);a([d()],oe.prototype,"target",2);a([d()],oe.prototype,"rel",2);a([d()],oe.prototype,"download",2);a([d({reflect:!0})],oe.prototype,"form",2);a([d({attribute:"formaction"})],oe.prototype,"formAction",2);a([d({attribute:"formenctype"})],oe.prototype,"formEnctype",2);a([d({attribute:"formmethod"})],oe.prototype,"formMethod",2);a([d({attribute:"formnovalidate",type:Boolean})],oe.prototype,"formNoValidate",2);a([d({attribute:"formtarget"})],oe.prototype,"formTarget",2);a([I("disabled",{waitUntilFirstUpdate:!0})],oe.prototype,"handleDisabledChange",1);oe=a([S("wa-button")],oe);var Ag=`:host {
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
`,Go=class extends M{constructor(){super(...arguments),this.localize=new ie(this)}render(){return f`
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
    `}};Go.css=Ag;Go=a([S("wa-spinner")],Go);var _g=`:host {
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
`,an=class extends M{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal",this.variant="neutral"}updated(t){super.updated(t),t.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(t){Qi(t.target)?.classList.add("button-focus")}handleBlur(t){Qi(t.target)?.classList.remove("button-focus")}handleMouseOver(t){Qi(t.target)?.classList.add("button-hover")}handleMouseOut(t){Qi(t.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,t.forEach(e=>{const n=t.indexOf(e),i=Qi(e);i&&(i.appearance==="outlined"&&(this.hasOutlined=!0),i.classList.add("wa-button-group__button"),i.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),i.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),i.classList.toggle("wa-button-group__button-first",n===0),i.classList.toggle("wa-button-group__button-inner",n>0&&n<t.length-1),i.classList.toggle("wa-button-group__button-last",n===t.length-1),i.classList.toggle("wa-button-group__button-radio",i.tagName.toLowerCase()==="wa-radio-button"))})}render(){return f`
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
    `}};an.css=[Tr,_g];a([$("slot")],an.prototype,"defaultSlot",2);a([A()],an.prototype,"disableRole",2);a([A()],an.prototype,"hasOutlined",2);a([d()],an.prototype,"label",2);a([d({reflect:!0})],an.prototype,"orientation",2);a([d({reflect:!0})],an.prototype,"variant",2);an=a([S("wa-button-group")],an);function Qi(t){const e="wa-button, wa-radio-button";return t.closest(e)??t.querySelector(e)}var Tg=`:host {
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
`,Ei=class extends M{constructor(){super(...arguments),this.variant="brand",this.size="medium"}render(){return f`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};Ei.css=[Tg,Tr,et];a([d({reflect:!0})],Ei.prototype,"variant",2);a([d({reflect:!0})],Ei.prototype,"appearance",2);a([d({reflect:!0})],Ei.prototype,"size",2);Ei=a([S("wa-callout")],Ei);var Rg=`:host {
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
`,Cn=class extends M{constructor(){super(...arguments),this.hasSlotController=new yt(this,"footer","header","media"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.orientation="vertical"}updated(){!this.withHeader&&this.hasSlotController.test("header")&&(this.withHeader=!0),!this.withMedia&&this.hasSlotController.test("media")&&(this.withMedia=!0),!this.withFooter&&this.hasSlotController.test("footer")&&(this.withFooter=!0)}render(){return this.orientation==="horizontal"?f`
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
    `}};Cn.css=[et,Rg];a([d({reflect:!0})],Cn.prototype,"appearance",2);a([d({attribute:"with-header",type:Boolean,reflect:!0})],Cn.prototype,"withHeader",2);a([d({attribute:"with-media",type:Boolean,reflect:!0})],Cn.prototype,"withMedia",2);a([d({attribute:"with-footer",type:Boolean,reflect:!0})],Cn.prototype,"withFooter",2);a([d({reflect:!0})],Cn.prototype,"orientation",2);Cn=a([S("wa-card")],Cn);const Ig="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Lg=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=Ig[n[t]&63];return e};function Y(t,e,n){const i=r=>Object.is(r,-0)?0:r;return t<e?i(e):t>n?i(n):i(t)}function qs(t=""){return`${t}${Lg()}`}function Pt(t,e){return new Promise(n=>{function i(r){r.target===t&&(t.removeEventListener(e,i),n())}t.addEventListener(e,i)})}async function gs(t,e,n){return t.animate(e,n).finished.catch(()=>{})}function pe(t,e){return new Promise(n=>{const i=new AbortController,{signal:r}=i;if(t.classList.contains(e))return;t.classList.remove(e),t.classList.add(e);let s=()=>{t.classList.remove(e),n(),i.abort()};t.addEventListener("animationend",s,{once:!0,signal:r}),t.addEventListener("animationcancel",s,{once:!0,signal:r})})}function bs(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t)||0:t.indexOf("s")>-1?(parseFloat(t)||0)*1e3:parseFloat(t)||0}function Ll(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}var Og=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};function*Pg(t,e){if(t!==void 0){let n=0;for(const i of t)yield e(i,n++)}}function*Dg(t,e,n=1){const i=e===void 0?0:t;e??=t;for(let r=i;n>0?r<e:e<r;r+=n)yield r}(()=>{const t=(i,r)=>{let s=0;return function(...o){window.clearTimeout(s),s=window.setTimeout(()=>{i.call(this,...o)},r)}},e=(i,r,s)=>{const o=i[r];i[r]=function(...l){o.call(this,...l),s.call(this,o,...l)}};if(!("onscrollend"in window)){const i=new Set,r=new WeakMap,s=l=>{i.add(l.pointerId)},o=l=>{i.delete(l.pointerId)};document.addEventListener("pointerdown",s),document.addEventListener("pointerup",o),e(EventTarget.prototype,"addEventListener",function(l,c){if(c!=="scroll")return;const h=t(()=>{i.size?h():this.dispatchEvent(new Event("scrollend"))},100);l.call(this,"scroll",h,{passive:!0}),r.set(this,h)}),e(EventTarget.prototype,"removeEventListener",function(l,c){if(c!=="scroll")return;const h=r.get(this);h&&l.call(this,"scroll",h,{passive:!0})})}})();var zg=class extends Event{constructor(t){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Mg=`:host {
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
`,fe=class extends M{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Og(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new ie(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,n=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:n,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||n!==r)&&(t.scrollTo({left:i,top:r,behavior:Ll()?"auto":"smooth"}),await Pt(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(n=>[...n.addedNodes,...n.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:n,loop:i}=this,r=i?t/n:(t-e)/n+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),n=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+n*n)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,n=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,r=t.key==="ArrowDown"||!n&&t.key==="ArrowRight"||n&&t.key==="ArrowLeft",s=t.key==="ArrowUp"||!n&&t.key==="ArrowLeft"||n&&t.key==="ArrowRight";t.preventDefault(),s&&this.previous(),r&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{const o=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');o&&o.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const l of e){const c=l.target;c.toggleAttribute("inert",!l.isIntersecting),c.classList.toggle("--in-view",l.isIntersecting),c.setAttribute("aria-hidden",l.isIntersecting?"false":"true")}const n=e.find(l=>l.isIntersecting);if(!n)return;const i=this.getSlides({excludeClones:!1}),r=this.getSlides().length,s=i.indexOf(n.target),o=this.loop?s-this.slidesPerPage:s;if(n&&(this.activeSlide=(Math.ceil(o/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&n.target.hasAttribute("data-clone"))){const l=Number(n.target.getAttribute("data-clone"));this.goToSlide(l,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,n=t.slice(-e),i=t.slice(0,e);n.reverse().forEach((r,s)=>{const o=r.cloneNode(!0);o.setAttribute("data-clone",String(t.length-s-1)),this.prepend(o)}),i.forEach((r,s)=>{const o=r.cloneNode(!0);o.setAttribute("data-clone",String(s)),this.append(o)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,n)=>{e.classList.toggle("--is-active",n===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new zg({index:this.activeSlide,slide:t[this.activeSlide]}))}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((n,i)=>{(i+e)%e===0?n.style.removeProperty("scroll-snap-align"):n.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:n,loop:i}=this,r=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!r.length)return;const o=i?(t+r.length)%r.length:Y(t,0,r.length-n);this.activeSlide=o;const l=this.localize.dir()==="rtl",c=Y(t+(i?n:0)+(l?n-1:0),0,s.length-1),h=s[c];this.scrollToSlide(h,Ll()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const n=this.scrollContainer,i=n.getBoundingClientRect(),r=t.getBoundingClientRect(),s=r.left-i.left,o=r.top-i.top;s||o?(this.pendingSlideChange=!0,n.scrollTo({left:s+n.scrollLeft,top:o+n.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this;let n=0,i=0,r=!1,s=!1;this.hasUpdated&&(n=this.getPageCount(),i=this.getCurrentPage(),r=this.canScrollPrev(),s=this.canScrollNext());const o=this.localize.dir()==="rtl";return f`
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
                ${Pg(Dg(n),l=>{const c=l===i;return f`
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
    `}};fe.css=Mg;a([d({type:Boolean,reflect:!0})],fe.prototype,"loop",2);a([d({type:Number,reflect:!0})],fe.prototype,"slides",2);a([d({type:Number,reflect:!0})],fe.prototype,"currentSlide",2);a([d({type:Boolean,reflect:!0})],fe.prototype,"navigation",2);a([d({type:Boolean,reflect:!0})],fe.prototype,"pagination",2);a([d({type:Boolean,reflect:!0})],fe.prototype,"autoplay",2);a([d({type:Number,attribute:"autoplay-interval"})],fe.prototype,"autoplayInterval",2);a([d({type:Number,attribute:"slides-per-page"})],fe.prototype,"slidesPerPage",2);a([d({type:Number,attribute:"slides-per-move"})],fe.prototype,"slidesPerMove",2);a([d()],fe.prototype,"orientation",2);a([d({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],fe.prototype,"mouseDragging",2);a([$(".slides")],fe.prototype,"scrollContainer",2);a([$(".pagination")],fe.prototype,"paginationContainer",2);a([A()],fe.prototype,"activeSlide",2);a([A()],fe.prototype,"scrolling",2);a([A()],fe.prototype,"dragging",2);a([zs({passive:!0})],fe.prototype,"handleScroll",1);a([I("loop",{waitUntilFirstUpdate:!0}),I("slidesPerPage",{waitUntilFirstUpdate:!0})],fe.prototype,"initializeSlides",1);a([I("activeSlide")],fe.prototype,"handleSlideChange",1);a([I("slidesPerMove")],fe.prototype,"updateSlidesSnap",1);a([I("autoplay")],fe.prototype,"handleAutoplayChange",1);fe=a([S("wa-carousel")],fe);var Hs=(t={})=>{let{validationElement:e,validationProperty:n}=t;e||(e=Object.assign(document.createElement("input"),{required:!0})),n||(n="value");const i={observedAttributes:["required"],message:e.validationMessage,checkValidity(r){const s={message:"",isValid:!0,invalidKeys:[]};return(r.required??r.hasAttribute("required"))&&!r[n]&&(s.message=typeof i.message=="function"?i.message(r):i.message||"",s.isValid=!1,s.invalidKeys.push("valueMissing")),s}};return i};var un=`:host {
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
`;const Ci=Pi(class extends Di{constructor(t){if(super(t),t.type!==_t.PROPERTY&&t.type!==_t.ATTRIBUTE&&t.type!==_t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!xc(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===nt||e===N)return e;const n=t.element,i=t.name;if(t.type===_t.PROPERTY){if(e===n[i])return nt}else if(t.type===_t.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(i))return nt}else if(t.type===_t.ATTRIBUTE&&n.getAttribute(i)===e+"")return nt;return kc(t),e}});var Ng=`:host {
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
`,Ie=class extends me{constructor(){super(...arguments),this.hasSlotController=new yt(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint=""}static get validators(){const t=[Hs({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...t]}get value(){const t=this._value||"on";return this.checked?t:null}set value(t){this._value=t}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(t){super.willUpdate(t),t.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(t.has("value")||t.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){const t=this.hasSlotController.test("hint"),e=this.hint?!0:!!t,n=!this.checked&&this.indeterminate,i=n?"indeterminate":"check",r=n?"indeterminate":"check";return f`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${B(this._value)}
            .indeterminate=${Ci(this.indeterminate)}
            .checked=${Ci(this.checked)}
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
    `}};Ie.css=[un,et,Ng];Ie.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0};a([$('input[type="checkbox"]')],Ie.prototype,"input",2);a([d()],Ie.prototype,"title",2);a([d({reflect:!0})],Ie.prototype,"name",2);a([d({reflect:!0})],Ie.prototype,"value",1);a([d({reflect:!0})],Ie.prototype,"size",2);a([d({type:Boolean})],Ie.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],Ie.prototype,"indeterminate",2);a([d({type:Boolean,attribute:!1})],Ie.prototype,"checked",2);a([d({type:Boolean,reflect:!0,attribute:"checked"})],Ie.prototype,"defaultChecked",2);a([d({reflect:!0})],Ie.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Ie.prototype,"required",2);a([d()],Ie.prototype,"hint",2);a([I("defaultChecked")],Ie.prototype,"handleDefaultCheckedChange",1);a([I(["checked","indeterminate"])],Ie.prototype,"handleStateChange",1);a([I("disabled")],Ie.prototype,"handleDisabledChange",1);Ie=a([S("wa-checkbox")],Ie);function hr(t,e){function n(r){const s=t.getBoundingClientRect(),o=t.ownerDocument.defaultView,l=s.left+o.pageXOffset,c=s.top+o.pageYOffset,h=r.pageX-l,u=r.pageY-c;e?.onMove&&e.onMove(h,u)}function i(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",i),e?.onStop&&e.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",i),e?.initialEvent instanceof PointerEvent&&n(e.initialEvent)}var Jt=typeof window<"u"&&"ontouchstart"in window,Vr=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=n=>{const i=Jt&&"touches"in n?n.touches[0].clientX:n.clientX,r=Jt&&"touches"in n?n.touches[0].clientY:n.clientY;this.isDragging||!Jt&&n.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),this.options.start(i,r))},this.handleDragStop=n=>{const i=Jt&&"touches"in n?n.touches[0].clientX:n.clientX,r=Jt&&"touches"in n?n.touches[0].clientY:n.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.options.stop(i,r)},this.handleDragMove=n=>{const i=Jt&&"touches"in n?n.touches[0].clientX:n.clientX,r=Jt&&"touches"in n?n.touches[0].clientY:n.clientY;window.getSelection()?.removeAllRanges(),this.options.move(i,r)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),Jt&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.element.removeEventListener("pointerdown",this.handleDragStart),Jt&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(t!==void 0?t:!this.isActive)?this.start():this.stop()}};var sd=`@layer wa-utilities {
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
`;function Fe(t,e){Fg(t)&&(t="100%");const n=Ug(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function qr(t){return Math.min(1,Math.max(0,t))}function Fg(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Ug(t){return typeof t=="string"&&t.indexOf("%")!==-1}function od(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Hr(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Vn(t){return t.length===1?"0"+t:String(t)}function Bg(t,e,n){return{r:Fe(t,255)*255,g:Fe(e,255)*255,b:Fe(n,255)*255}}function Ol(t,e,n){t=Fe(t,255),e=Fe(e,255),n=Fe(n,255);const i=Math.max(t,e,n),r=Math.min(t,e,n);let s=0,o=0;const l=(i+r)/2;if(i===r)o=0,s=0;else{const c=i-r;switch(o=l>.5?c/(2-i-r):c/(i+r),i){case t:s=(e-n)/c+(e<n?6:0);break;case e:s=(n-t)/c+2;break;case n:s=(t-e)/c+4;break}s/=6}return{h:s,s:o,l}}function yo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Vg(t,e,n){let i,r,s;if(t=Fe(t,360),e=Fe(e,100),n=Fe(n,100),e===0)r=n,s=n,i=n;else{const o=n<.5?n*(1+e):n+e-n*e,l=2*n-o;i=yo(l,o,t+1/3),r=yo(l,o,t),s=yo(l,o,t-1/3)}return{r:i*255,g:r*255,b:s*255}}function Pl(t,e,n){t=Fe(t,255),e=Fe(e,255),n=Fe(n,255);const i=Math.max(t,e,n),r=Math.min(t,e,n);let s=0;const o=i,l=i-r,c=i===0?0:l/i;if(i===r)s=0;else{switch(i){case t:s=(e-n)/l+(e<n?6:0);break;case e:s=(n-t)/l+2;break;case n:s=(t-e)/l+4;break}s/=6}return{h:s,s:c,v:o}}function qg(t,e,n){t=Fe(t,360)*6,e=Fe(e,100),n=Fe(n,100);const i=Math.floor(t),r=t-i,s=n*(1-e),o=n*(1-r*e),l=n*(1-(1-r)*e),c=i%6,h=[n,o,s,s,l,n][c],u=[l,n,n,o,s,s][c],p=[s,s,l,n,n,o][c];return{r:h*255,g:u*255,b:p*255}}function Dl(t,e,n,i){const r=[Vn(Math.round(t).toString(16)),Vn(Math.round(e).toString(16)),Vn(Math.round(n).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Hg(t,e,n,i,r){const s=[Vn(Math.round(t).toString(16)),Vn(Math.round(e).toString(16)),Vn(Math.round(n).toString(16)),Vn(jg(i))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function Wg(t,e,n,i){const r=t/100,s=e/100,o=n/100,l=i/100,c=255*(1-r)*(1-l),h=255*(1-s)*(1-l),u=255*(1-o)*(1-l);return{r:c,g:h,b:u}}function zl(t,e,n){let i=1-t/255,r=1-e/255,s=1-n/255,o=Math.min(i,r,s);return o===1?(i=0,r=0,s=0):(i=(i-o)/(1-o)*100,r=(r-o)/(1-o)*100,s=(s-o)/(1-o)*100),o*=100,{c:Math.round(i),m:Math.round(r),y:Math.round(s),k:Math.round(o)}}function jg(t){return Math.round(parseFloat(t)*255).toString(16)}function Ml(t){return ut(t)/255}function ut(t){return parseInt(t,16)}function Xg(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const Ko={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Gg(t){let e={r:0,g:0,b:0},n=1,i=null,r=null,s=null,o=!1,l=!1;return typeof t=="string"&&(t=Zg(t)),typeof t=="object"&&(ht(t.r)&&ht(t.g)&&ht(t.b)?(e=Bg(t.r,t.g,t.b),o=!0,l=String(t.r).substr(-1)==="%"?"prgb":"rgb"):ht(t.h)&&ht(t.s)&&ht(t.v)?(i=Hr(t.s),r=Hr(t.v),e=qg(t.h,i,r),o=!0,l="hsv"):ht(t.h)&&ht(t.s)&&ht(t.l)?(i=Hr(t.s),s=Hr(t.l),e=Vg(t.h,i,s),o=!0,l="hsl"):ht(t.c)&&ht(t.m)&&ht(t.y)&&ht(t.k)&&(e=Wg(t.c,t.m,t.y,t.k),o=!0,l="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=od(n),{ok:o,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}const Kg="[-\\+]?\\d+%?",Yg="[-\\+]?\\d*\\.\\d+%?",vn="(?:"+Yg+")|(?:"+Kg+")",xo="[\\s|\\(]+("+vn+")[,|\\s]+("+vn+")[,|\\s]+("+vn+")\\s*\\)?",Wr="[\\s|\\(]+("+vn+")[,|\\s]+("+vn+")[,|\\s]+("+vn+")[,|\\s]+("+vn+")\\s*\\)?",kt={CSS_UNIT:new RegExp(vn),rgb:new RegExp("rgb"+xo),rgba:new RegExp("rgba"+Wr),hsl:new RegExp("hsl"+xo),hsla:new RegExp("hsla"+Wr),hsv:new RegExp("hsv"+xo),hsva:new RegExp("hsva"+Wr),cmyk:new RegExp("cmyk"+Wr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Zg(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(Ko[t])t=Ko[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let n=kt.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=kt.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=kt.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=kt.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=kt.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=kt.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=kt.cmyk.exec(t),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=kt.hex8.exec(t),n?{r:ut(n[1]),g:ut(n[2]),b:ut(n[3]),a:Ml(n[4]),format:e?"name":"hex8"}:(n=kt.hex6.exec(t),n?{r:ut(n[1]),g:ut(n[2]),b:ut(n[3]),format:e?"name":"hex"}:(n=kt.hex4.exec(t),n?{r:ut(n[1]+n[1]),g:ut(n[2]+n[2]),b:ut(n[3]+n[3]),a:Ml(n[4]+n[4]),format:e?"name":"hex8"}:(n=kt.hex3.exec(t),n?{r:ut(n[1]+n[1]),g:ut(n[2]+n[2]),b:ut(n[3]+n[3]),format:e?"name":"hex"}:!1))))))))))}function ht(t){return typeof t=="number"?!Number.isNaN(t):kt.CSS_UNIT.test(t)}class ve{constructor(e="",n={}){if(e instanceof ve)return e;typeof e=="number"&&(e=Xg(e)),this.originalInput=e;const i=Gg(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??i.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let n,i,r;const s=e.r/255,o=e.g/255,l=e.b/255;return s<=.03928?n=s/12.92:n=Math.pow((s+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),.2126*n+.7152*i+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=od(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Pl(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Pl(this.r,this.g,this.b),n=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${n}, ${i}%, ${r}%)`:`hsva(${n}, ${i}%, ${r}%, ${this.roundA})`}toHsl(){const e=Ol(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Ol(this.r,this.g,this.b),n=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${n}, ${i}%, ${r}%)`:`hsla(${n}, ${i}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Dl(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Hg(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),n=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${n}, ${i})`:`rgba(${e}, ${n}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=n=>`${Math.round(Fe(n,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=n=>Math.round(Fe(n,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...zl(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:n,y:i,k:r}=zl(this.r,this.g,this.b);return`cmyk(${e}, ${n}, ${i}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Dl(this.r,this.g,this.b,!1);for(const[n,i]of Object.entries(Ko))if(e===i)return n;return!1}toString(e){const n=!!e;e=e??this.format;let i=!1;const r=this.a<1&&this.a>=0;return!n&&r&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ve(this.toString())}lighten(e=10){const n=this.toHsl();return n.l+=e/100,n.l=qr(n.l),new ve(n)}brighten(e=10){const n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new ve(n)}darken(e=10){const n=this.toHsl();return n.l-=e/100,n.l=qr(n.l),new ve(n)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const n=this.toHsl();return n.s-=e/100,n.s=qr(n.s),new ve(n)}saturate(e=10){const n=this.toHsl();return n.s+=e/100,n.s=qr(n.s),new ve(n)}greyscale(){return this.desaturate(100)}spin(e){const n=this.toHsl(),i=(n.h+e)%360;return n.h=i<0?360+i:i,new ve(n)}mix(e,n=50){const i=this.toRgb(),r=new ve(e).toRgb(),s=n/100,o={r:(r.r-i.r)*s+i.r,g:(r.g-i.g)*s+i.g,b:(r.b-i.b)*s+i.b,a:(r.a-i.a)*s+i.a};return new ve(o)}analogous(e=6,n=30){const i=this.toHsl(),r=360/n,s=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,s.push(new ve(i));return s}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new ve(e)}monochromatic(e=6){const n=this.toHsv(),{h:i}=n,{s:r}=n;let{v:s}=n;const o=[],l=1/e;for(;e--;)o.push(new ve({h:i,s:r,v:s})),s=(s+l)%1;return o}splitcomplement(){const e=this.toHsl(),{h:n}=e;return[this,new ve({h:(n+72)%360,s:e.s,l:e.l}),new ve({h:(n+216)%360,s:e.s,l:e.l})]}onBackground(e){const n=this.toRgb(),i=new ve(e).toRgb(),r=n.a+i.a*(1-n.a);return new ve({r:(n.r*n.a+i.r*i.a*(1-n.a))/r,g:(n.g*n.a+i.g*i.a*(1-n.a))/r,b:(n.b*n.a+i.b*i.a*(1-n.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const n=this.toHsl(),{h:i}=n,r=[this],s=360/e;for(let o=1;o<e;o++)r.push(new ve({h:(i+o*s)%360,s:n.s,l:n.l}));return r}equals(e){const n=new ve(e);return this.format==="cmyk"||n.format==="cmyk"?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}}const ad="important",Jg=" !"+ad,pt=Pi(class extends Di{constructor(t){if(super(t),t.type!==_t.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,n)=>{const i=t[n];return i==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?n.removeProperty(i):n[i]=null);for(const i in e){const r=e[i];if(r!=null){this.ft.add(i);const s=typeof r=="string"&&r.endsWith(Jg);i.includes("-")||s?n.setProperty(i,s?r.slice(0,-11):r,s?ad:""):n[i]=r}}return nt}});var Qg=`:host {
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
`,V=class extends me{constructor(){super(),this.hasSlotController=new yt(this,"hint","label"),this.isSafeValue=!1,this.localize=new ie(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form=null,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open){t.stopPropagation(),this.focus(),this.hide();return}t.key==="Tab"&&setTimeout(()=>{const e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=t=>{const n=t.composedPath().some(i=>i instanceof Element&&(i.closest(".color-picker")||i===this.trigger));this&&!n&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){const t=[Hs()];return[...super.validators,...t]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".slider.alpha"),n=e.querySelector(".slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,s=this.value;n.focus(),t.preventDefault(),hr(e,{onMove:o=>{this.alpha=Y(o/i*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".slider.hue"),n=e.querySelector(".slider-handle"),{width:i}=e.getBoundingClientRect();let r=this.value,s=this.value;n.focus(),t.preventDefault(),hr(e,{onMove:o=>{this.hue=Y(o/i*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".grid"),n=e.querySelector(".grid-handle"),{width:i,height:r}=e.getBoundingClientRect();let s=this.value,o=this.value;n.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,hr(e,{onMove:(l,c)=>{this.saturation=Y(l/i*100,0,100),this.brightness=Y(100-c/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,n=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=Y(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=Y(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(t){const e=t.shiftKey?10:1,n=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=Y(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=Y(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(t){const e=t.shiftKey?10:1,n=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=Y(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=Y(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=Y(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=Y(this.brightness-e,0,100),this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(t){const e=t.target,n=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value||""):this.value="",this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(t){this.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(t){t.preventDefault()}parseColor(t){if(!t||t.trim()==="")return null;const e=new ve(t);if(!e.isValid)return null;const n=e.toHsl(),i=e.toRgb(),r=e.toHsv();if(!i||i.r==null||i.g==null||i.b==null)return null;const s={h:n.h||0,s:(n.s||0)*100,l:(n.l||0)*100,a:n.a||0},o=e.toHexString(),l=e.toHex8String(),c={h:r.h||0,s:(r.s||0)*100,v:(r.v||0)*100,a:r.a||0};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a||0,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${(i.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(l)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(e=>{const n=this.value;this.setColor(e.sRGBHex),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(t,e,n,i=100){const r=new ve(`hsva(${t}, ${e}%, ${n}%, ${i/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(t){super.willUpdate(t),t.has("value")&&this.handleValueChange(t.get("value")||"",this.value||"")}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(e);n!==null?(this.inputValue=this.value||"",this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=t??""}this.requestUpdate()}focus(t){this.trigger.focus(t)}blur(){const t=this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.popup?.active&&this.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new Ma),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(t){super.firstUpdated(t),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}updateAccessibleTrigger(){const t=this.trigger;t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,Pt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Pt(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await pe(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await pe(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){const t=this.hasUpdated?this.withLabel||this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.withHint||this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e,r=this.saturation,s=100-this.brightness,o=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(c=>c.trim()!==""),l=f`
      <div
        part="base"
        class=${j({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${pt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${j({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${pt({top:`${s}%`,left:`${r}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${B(this.disabled?void 0:"0")}
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
                style=${pt({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${B(this.disabled?void 0:"0")}
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
                      style=${pt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${pt({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${B(this.disabled?void 0:"0")}
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
            style=${pt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
                      tabindex=${B(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${c}
                      @click=${()=>this.selectSwatch(c)}
                      @keydown=${u=>!this.disabled&&u.key==="Enter"&&this.setColor(h.hexa)}
                    >
                      <div class="swatch-color" style=${pt({backgroundColor:h.hexa})}></div>
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
          style=${pt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
    `}};V.css=[sd,et,un,Qg];V.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0};a([$('[part~="base"]')],V.prototype,"base",2);a([$('[part~="input"]')],V.prototype,"input",2);a([$('[part~="form-control-label"]')],V.prototype,"triggerLabel",2);a([$('[part~="form-control-input"]')],V.prototype,"triggerButton",2);a([$(".color-popup")],V.prototype,"popup",2);a([$('[part~="preview"]')],V.prototype,"previewButton",2);a([$('[part~="trigger"]')],V.prototype,"trigger",2);a([A()],V.prototype,"hasFocus",2);a([A()],V.prototype,"isDraggingGridHandle",2);a([A()],V.prototype,"isEmpty",2);a([A()],V.prototype,"inputValue",2);a([A()],V.prototype,"hue",2);a([A()],V.prototype,"saturation",2);a([A()],V.prototype,"brightness",2);a([A()],V.prototype,"alpha",2);a([A()],V.prototype,"value",1);a([d({attribute:"value",reflect:!0})],V.prototype,"defaultValue",2);a([d({attribute:"with-label",reflect:!0,type:Boolean})],V.prototype,"withLabel",2);a([d({attribute:"with-hint",reflect:!0,type:Boolean})],V.prototype,"withHint",2);a([A()],V.prototype,"hasEyeDropper",2);a([d()],V.prototype,"label",2);a([d({attribute:"hint"})],V.prototype,"hint",2);a([d()],V.prototype,"format",2);a([d({reflect:!0})],V.prototype,"size",2);a([d({attribute:"without-format-toggle",type:Boolean})],V.prototype,"withoutFormatToggle",2);a([d({reflect:!0})],V.prototype,"name",2);a([d({type:Boolean})],V.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],V.prototype,"open",2);a([d({type:Boolean})],V.prototype,"opacity",2);a([d({type:Boolean})],V.prototype,"uppercase",2);a([d()],V.prototype,"swatches",2);a([d({reflect:!0})],V.prototype,"form",2);a([d({type:Boolean,reflect:!0})],V.prototype,"required",2);a([zs({passive:!1})],V.prototype,"handleTouchMove",1);a([I("format",{waitUntilFirstUpdate:!0})],V.prototype,"handleFormatChange",1);a([I("opacity")],V.prototype,"handleOpacityChange",1);a([I("value")],V.prototype,"handleValueChange",1);a([I("open",{waitUntilFirstUpdate:!0})],V.prototype,"handleOpenChange",1);V=a([S("wa-color-picker")],V);var ld=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function cd(t,e){const n=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!n&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&eb(e)})}function eb(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;const n=[...e.elements];if(n.length===1){e.requestSubmit(null);return}const i=n.find(r=>r.type==="submit"&&!r.matches(":disabled"));i&&(["input","button"].includes(i.localName)?e.requestSubmit(i):i.click())}var tb=`:host {
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
`,G=class extends me{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new yt(this,"hint","label"),this.localize=new ie(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Vs()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new ld),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){cd(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,n="none"){this.input.setSelectionRange(t,e,n)}setRangeText(t,e,n,i="preserve"){const r=e??this.input.selectionStart,s=n??this.input.selectionEnd;this.input.setRangeText(t,r,s,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e,r=this.withClear&&!this.disabled&&!this.readonly,s=this.hasUpdated&&r&&(typeof this.value=="number"||this.value&&this.value.length>0);return f`
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
          name=${B(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${B(this.placeholder)}
          minlength=${B(this.minlength)}
          maxlength=${B(this.maxlength)}
          min=${B(this.min)}
          max=${B(this.max)}
          step=${B(this.step)}
          .value=${Ci(this.value??"")}
          autocapitalize=${B(this.autocapitalize)}
          autocomplete=${B(this.autocomplete)}
          autocorrect=${B(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${B(this.pattern)}
          enterkeyhint=${B(this.enterkeyhint)}
          inputmode=${B(this.inputmode)}
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
    `}};G.css=[et,un,tb];G.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0};a([$("input")],G.prototype,"input",2);a([d()],G.prototype,"title",2);a([d({reflect:!0})],G.prototype,"type",2);a([A()],G.prototype,"value",1);a([d({attribute:"value",reflect:!0})],G.prototype,"defaultValue",2);a([d({reflect:!0})],G.prototype,"size",2);a([d({reflect:!0})],G.prototype,"appearance",2);a([d({type:Boolean,reflect:!0})],G.prototype,"pill",2);a([d()],G.prototype,"label",2);a([d({attribute:"hint"})],G.prototype,"hint",2);a([d({attribute:"with-clear",type:Boolean})],G.prototype,"withClear",2);a([d()],G.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],G.prototype,"readonly",2);a([d({attribute:"password-toggle",type:Boolean})],G.prototype,"passwordToggle",2);a([d({attribute:"password-visible",type:Boolean})],G.prototype,"passwordVisible",2);a([d({attribute:"without-spin-buttons",type:Boolean})],G.prototype,"withoutSpinButtons",2);a([d({reflect:!0})],G.prototype,"form",2);a([d({type:Boolean,reflect:!0})],G.prototype,"required",2);a([d()],G.prototype,"pattern",2);a([d({type:Number})],G.prototype,"minlength",2);a([d({type:Number})],G.prototype,"maxlength",2);a([d()],G.prototype,"min",2);a([d()],G.prototype,"max",2);a([d()],G.prototype,"step",2);a([d()],G.prototype,"autocapitalize",2);a([d()],G.prototype,"autocorrect",2);a([d()],G.prototype,"autocomplete",2);a([d({type:Boolean})],G.prototype,"autofocus",2);a([d()],G.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],G.prototype,"spellcheck",2);a([d()],G.prototype,"inputmode",2);a([d({attribute:"with-label",type:Boolean})],G.prototype,"withLabel",2);a([d({attribute:"with-hint",type:Boolean})],G.prototype,"withHint",2);a([I("step",{waitUntilFirstUpdate:!0})],G.prototype,"handleStepChange",1);G=a([S("wa-input")],G);var dd=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};const Sn=Math.min,ft=Math.max,ws=Math.round,jr=Math.floor,Vt=t=>({x:t,y:t}),nb={left:"right",right:"left",bottom:"top",top:"bottom"},ib={start:"end",end:"start"};function Yo(t,e,n){return ft(t,Sn(e,n))}function Ni(t,e){return typeof t=="function"?t(e):t}function $n(t){return t.split("-")[0]}function Fi(t){return t.split("-")[1]}function hd(t){return t==="x"?"y":"x"}function Na(t){return t==="y"?"height":"width"}const rb=new Set(["top","bottom"]);function tn(t){return rb.has($n(t))?"y":"x"}function Fa(t){return hd(tn(t))}function sb(t,e,n){n===void 0&&(n=!1);const i=Fi(t),r=Fa(t),s=Na(r);let o=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=vs(o)),[o,vs(o)]}function ob(t){const e=vs(t);return[Zo(t),e,Zo(e)]}function Zo(t){return t.replace(/start|end/g,e=>ib[e])}const Nl=["left","right"],Fl=["right","left"],ab=["top","bottom"],lb=["bottom","top"];function cb(t,e,n){switch(t){case"top":case"bottom":return n?e?Fl:Nl:e?Nl:Fl;case"left":case"right":return e?ab:lb;default:return[]}}function db(t,e,n,i){const r=Fi(t);let s=cb($n(t),n==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(Zo)))),s}function vs(t){return t.replace(/left|right|bottom|top/g,e=>nb[e])}function hb(t){return{top:0,right:0,bottom:0,left:0,...t}}function ud(t){return typeof t!="number"?hb(t):{top:t,right:t,bottom:t,left:t}}function ys(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function Ul(t,e,n){let{reference:i,floating:r}=t;const s=tn(e),o=Fa(e),l=Na(o),c=$n(e),h=s==="y",u=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,g=i[l]/2-r[l]/2;let b;switch(c){case"top":b={x:u,y:i.y-r.height};break;case"bottom":b={x:u,y:i.y+i.height};break;case"right":b={x:i.x+i.width,y:p};break;case"left":b={x:i.x-r.width,y:p};break;default:b={x:i.x,y:i.y}}switch(Fi(e)){case"start":b[o]-=g*(n&&h?-1:1);break;case"end":b[o]+=g*(n&&h?-1:1);break}return b}const ub=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,l=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let h=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:p}=Ul(h,i,c),g=i,b={},w=0;for(let k=0;k<l.length;k++){const{name:L,fn:C}=l[k],{x:z,y:R,data:O,reset:_}=await C({x:u,y:p,initialPlacement:i,placement:g,strategy:r,middlewareData:b,rects:h,platform:o,elements:{reference:t,floating:e}});u=z??u,p=R??p,b={...b,[L]:{...b[L],...O}},_&&w<=50&&(w++,typeof _=="object"&&(_.placement&&(g=_.placement),_.rects&&(h=_.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):_.rects),{x:u,y:p}=Ul(h,g,c)),k=-1)}return{x:u,y:p,placement:g,strategy:r,middlewareData:b}};async function Ua(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:l,strategy:c}=t,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:g=!1,padding:b=0}=Ni(e,t),w=ud(b),L=l[g?p==="floating"?"reference":"floating":p],C=ys(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(L)))==null||n?L:L.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:h,rootBoundary:u,strategy:c})),z=p==="floating"?{x:i,y:r,width:o.floating.width,height:o.floating.height}:o.reference,R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),O=await(s.isElement==null?void 0:s.isElement(R))?await(s.getScale==null?void 0:s.getScale(R))||{x:1,y:1}:{x:1,y:1},_=ys(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:z,offsetParent:R,strategy:c}):z);return{top:(C.top-_.top+w.top)/O.y,bottom:(_.bottom-C.bottom+w.bottom)/O.y,left:(C.left-_.left+w.left)/O.x,right:(_.right-C.right+w.right)/O.x}}const pb=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:o,elements:l,middlewareData:c}=e,{element:h,padding:u=0}=Ni(t,e)||{};if(h==null)return{};const p=ud(u),g={x:n,y:i},b=Fa(r),w=Na(b),k=await o.getDimensions(h),L=b==="y",C=L?"top":"left",z=L?"bottom":"right",R=L?"clientHeight":"clientWidth",O=s.reference[w]+s.reference[b]-g[b]-s.floating[w],_=g[b]-s.reference[b],X=await(o.getOffsetParent==null?void 0:o.getOffsetParent(h));let P=X?X[R]:0;(!P||!await(o.isElement==null?void 0:o.isElement(X)))&&(P=l.floating[R]||s.floating[w]);const be=O/2-_/2,we=P/2-k[w]/2-1,de=Sn(p[C],we),Pe=Sn(p[z],we),ke=de,_e=P-k[w]-Pe,Se=P/2-k[w]/2+be,De=Yo(ke,Se,_e),W=!c.arrow&&Fi(r)!=null&&Se!==De&&s.reference[w]/2-(Se<ke?de:Pe)-k[w]/2<0,We=W?Se<ke?Se-ke:Se-_e:0;return{[b]:g[b]+We,data:{[b]:De,centerOffset:Se-De-We,...W&&{alignmentOffset:We}},reset:W}}}),fb=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:s,rects:o,initialPlacement:l,platform:c,elements:h}=e,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:k=!0,...L}=Ni(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const C=$n(r),z=tn(l),R=$n(l)===l,O=await(c.isRTL==null?void 0:c.isRTL(h.floating)),_=g||(R||!k?[vs(l)]:ob(l)),X=w!=="none";!g&&X&&_.push(...db(l,k,w,O));const P=[l,..._],be=await Ua(e,L),we=[];let de=((i=s.flip)==null?void 0:i.overflows)||[];if(u&&we.push(be[C]),p){const Se=sb(r,o,O);we.push(be[Se[0]],be[Se[1]])}if(de=[...de,{placement:r,overflows:we}],!we.every(Se=>Se<=0)){var Pe,ke;const Se=(((Pe=s.flip)==null?void 0:Pe.index)||0)+1,De=P[Se];if(De&&(!(p==="alignment"?z!==tn(De):!1)||de.every(Ye=>tn(Ye.placement)===z?Ye.overflows[0]>0:!0)))return{data:{index:Se,overflows:de},reset:{placement:De}};let W=(ke=de.filter(We=>We.overflows[0]<=0).sort((We,Ye)=>We.overflows[1]-Ye.overflows[1])[0])==null?void 0:ke.placement;if(!W)switch(b){case"bestFit":{var _e;const We=(_e=de.filter(Ye=>{if(X){const At=tn(Ye.placement);return At===z||At==="y"}return!0}).map(Ye=>[Ye.placement,Ye.overflows.filter(At=>At>0).reduce((At,On)=>At+On,0)]).sort((Ye,At)=>Ye[1]-At[1])[0])==null?void 0:_e[0];We&&(W=We);break}case"initialPlacement":W=l;break}if(r!==W)return{reset:{placement:W}}}return{}}}},mb=new Set(["left","top"]);async function gb(t,e){const{placement:n,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=$n(n),l=Fi(n),c=tn(n)==="y",h=mb.has(o)?-1:1,u=s&&c?-1:1,p=Ni(e,t);let{mainAxis:g,crossAxis:b,alignmentAxis:w}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof w=="number"&&(b=l==="end"?w*-1:w),c?{x:b*u,y:g*h}:{x:g*h,y:b*u}}const bb=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:s,placement:o,middlewareData:l}=e,c=await gb(e,t);return o===((n=l.offset)==null?void 0:n.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:o}}}}},wb=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:l={fn:L=>{let{x:C,y:z}=L;return{x:C,y:z}}},...c}=Ni(t,e),h={x:n,y:i},u=await Ua(e,c),p=tn($n(r)),g=hd(p);let b=h[g],w=h[p];if(s){const L=g==="y"?"top":"left",C=g==="y"?"bottom":"right",z=b+u[L],R=b-u[C];b=Yo(z,b,R)}if(o){const L=p==="y"?"top":"left",C=p==="y"?"bottom":"right",z=w+u[L],R=w-u[C];w=Yo(z,w,R)}const k=l.fn({...e,[g]:b,[p]:w});return{...k,data:{x:k.x-n,y:k.y-i,enabled:{[g]:s,[p]:o}}}}}},vb=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,i;const{placement:r,rects:s,platform:o,elements:l}=e,{apply:c=()=>{},...h}=Ni(t,e),u=await Ua(e,h),p=$n(r),g=Fi(r),b=tn(r)==="y",{width:w,height:k}=s.floating;let L,C;p==="top"||p==="bottom"?(L=p,C=g===(await(o.isRTL==null?void 0:o.isRTL(l.floating))?"start":"end")?"left":"right"):(C=p,L=g==="end"?"top":"bottom");const z=k-u.top-u.bottom,R=w-u.left-u.right,O=Sn(k-u[L],z),_=Sn(w-u[C],R),X=!e.middlewareData.shift;let P=O,be=_;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(be=R),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(P=z),X&&!g){const de=ft(u.left,0),Pe=ft(u.right,0),ke=ft(u.top,0),_e=ft(u.bottom,0);b?be=w-2*(de!==0||Pe!==0?de+Pe:ft(u.left,u.right)):P=k-2*(ke!==0||_e!==0?ke+_e:ft(u.top,u.bottom))}await c({...e,availableWidth:be,availableHeight:P});const we=await o.getDimensions(l.floating);return w!==we.width||k!==we.height?{reset:{rects:!0}}:{}}}};function Ws(){return typeof window<"u"}function Ui(t){return pd(t)?(t.nodeName||"").toLowerCase():"#document"}function bt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Kt(t){var e;return(e=(pd(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function pd(t){return Ws()?t instanceof Node||t instanceof bt(t).Node:!1}function Dt(t){return Ws()?t instanceof Element||t instanceof bt(t).Element:!1}function Ht(t){return Ws()?t instanceof HTMLElement||t instanceof bt(t).HTMLElement:!1}function Bl(t){return!Ws()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof bt(t).ShadowRoot}const yb=new Set(["inline","contents"]);function Rr(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=zt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!yb.has(r)}const xb=new Set(["table","td","th"]);function kb(t){return xb.has(Ui(t))}const Eb=[":popover-open",":modal"];function js(t){return Eb.some(e=>{try{return t.matches(e)}catch{return!1}})}const Cb=["transform","translate","scale","rotate","perspective"],Sb=["transform","translate","scale","rotate","perspective","filter"],$b=["paint","layout","strict","content"];function Xs(t){const e=Ba(),n=Dt(t)?zt(t):t;return Cb.some(i=>n[i]?n[i]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||Sb.some(i=>(n.willChange||"").includes(i))||$b.some(i=>(n.contain||"").includes(i))}function Ab(t){let e=An(t);for(;Ht(e)&&!Si(e);){if(Xs(e))return e;if(js(e))return null;e=An(e)}return null}function Ba(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const _b=new Set(["html","body","#document"]);function Si(t){return _b.has(Ui(t))}function zt(t){return bt(t).getComputedStyle(t)}function Gs(t){return Dt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function An(t){if(Ui(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Bl(t)&&t.host||Kt(t);return Bl(e)?e.host:e}function fd(t){const e=An(t);return Si(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ht(e)&&Rr(e)?e:fd(e)}function $i(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=fd(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),o=bt(r);if(s){const l=Jo(o);return e.concat(o,o.visualViewport||[],Rr(r)?r:[],l&&n?$i(l):[])}return e.concat(r,$i(r,[],n))}function Jo(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function md(t){const e=zt(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Ht(t),s=r?t.offsetWidth:n,o=r?t.offsetHeight:i,l=ws(n)!==s||ws(i)!==o;return l&&(n=s,i=o),{width:n,height:i,$:l}}function Va(t){return Dt(t)?t:t.contextElement}function bi(t){const e=Va(t);if(!Ht(e))return Vt(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:s}=md(e);let o=(s?ws(n.width):n.width)/i,l=(s?ws(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Tb=Vt(0);function gd(t){const e=bt(t);return!Ba()||!e.visualViewport?Tb:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Rb(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==bt(t)?!1:e}function Yn(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=Va(t);let o=Vt(1);e&&(i?Dt(i)&&(o=bi(i)):o=bi(t));const l=Rb(s,n,i)?gd(s):Vt(0);let c=(r.left+l.x)/o.x,h=(r.top+l.y)/o.y,u=r.width/o.x,p=r.height/o.y;if(s){const g=bt(s),b=i&&Dt(i)?bt(i):i;let w=g,k=Jo(w);for(;k&&i&&b!==w;){const L=bi(k),C=k.getBoundingClientRect(),z=zt(k),R=C.left+(k.clientLeft+parseFloat(z.paddingLeft))*L.x,O=C.top+(k.clientTop+parseFloat(z.paddingTop))*L.y;c*=L.x,h*=L.y,u*=L.x,p*=L.y,c+=R,h+=O,w=bt(k),k=Jo(w)}}return ys({width:u,height:p,x:c,y:h})}function Ks(t,e){const n=Gs(t).scrollLeft;return e?e.left+n:Yn(Kt(t)).left+n}function bd(t,e){const n=t.getBoundingClientRect(),i=n.left+e.scrollLeft-Ks(t,n),r=n.top+e.scrollTop;return{x:i,y:r}}function Ib(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const s=r==="fixed",o=Kt(i),l=e?js(e.floating):!1;if(i===o||l&&s)return n;let c={scrollLeft:0,scrollTop:0},h=Vt(1);const u=Vt(0),p=Ht(i);if((p||!p&&!s)&&((Ui(i)!=="body"||Rr(o))&&(c=Gs(i)),Ht(i))){const b=Yn(i);h=bi(i),u.x=b.x+i.clientLeft,u.y=b.y+i.clientTop}const g=o&&!p&&!s?bd(o,c):Vt(0);return{width:n.width*h.x,height:n.height*h.y,x:n.x*h.x-c.scrollLeft*h.x+u.x+g.x,y:n.y*h.y-c.scrollTop*h.y+u.y+g.y}}function Lb(t){return Array.from(t.getClientRects())}function Ob(t){const e=Kt(t),n=Gs(t),i=t.ownerDocument.body,r=ft(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=ft(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+Ks(t);const l=-n.scrollTop;return zt(i).direction==="rtl"&&(o+=ft(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:l}}const Vl=25;function Pb(t,e){const n=bt(t),i=Kt(t),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,l=0,c=0;if(r){s=r.width,o=r.height;const u=Ba();(!u||u&&e==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}const h=Ks(i);if(h<=0){const u=i.ownerDocument,p=u.body,g=getComputedStyle(p),b=u.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,w=Math.abs(i.clientWidth-p.clientWidth-b);w<=Vl&&(s-=w)}else h<=Vl&&(s+=h);return{width:s,height:o,x:l,y:c}}const Db=new Set(["absolute","fixed"]);function zb(t,e){const n=Yn(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,s=Ht(t)?bi(t):Vt(1),o=t.clientWidth*s.x,l=t.clientHeight*s.y,c=r*s.x,h=i*s.y;return{width:o,height:l,x:c,y:h}}function ql(t,e,n){let i;if(e==="viewport")i=Pb(t,n);else if(e==="document")i=Ob(Kt(t));else if(Dt(e))i=zb(e,n);else{const r=gd(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return ys(i)}function wd(t,e){const n=An(t);return n===e||!Dt(n)||Si(n)?!1:zt(n).position==="fixed"||wd(n,e)}function Mb(t,e){const n=e.get(t);if(n)return n;let i=$i(t,[],!1).filter(l=>Dt(l)&&Ui(l)!=="body"),r=null;const s=zt(t).position==="fixed";let o=s?An(t):t;for(;Dt(o)&&!Si(o);){const l=zt(o),c=Xs(o);!c&&l.position==="fixed"&&(r=null),(s?!c&&!r:!c&&l.position==="static"&&!!r&&Db.has(r.position)||Rr(o)&&!c&&wd(t,o))?i=i.filter(u=>u!==o):r=l,o=An(o)}return e.set(t,i),i}function Nb(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[...n==="clippingAncestors"?js(e)?[]:Mb(e,this._c):[].concat(n),i],l=o[0],c=o.reduce((h,u)=>{const p=ql(e,u,r);return h.top=ft(p.top,h.top),h.right=Sn(p.right,h.right),h.bottom=Sn(p.bottom,h.bottom),h.left=ft(p.left,h.left),h},ql(e,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Fb(t){const{width:e,height:n}=md(t);return{width:e,height:n}}function Ub(t,e,n){const i=Ht(e),r=Kt(e),s=n==="fixed",o=Yn(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=Vt(0);function h(){c.x=Ks(r)}if(i||!i&&!s)if((Ui(e)!=="body"||Rr(r))&&(l=Gs(e)),i){const b=Yn(e,!0,s,e);c.x=b.x+e.clientLeft,c.y=b.y+e.clientTop}else r&&h();s&&!i&&r&&h();const u=r&&!i&&!s?bd(r,l):Vt(0),p=o.left+l.scrollLeft-c.x-u.x,g=o.top+l.scrollTop-c.y-u.y;return{x:p,y:g,width:o.width,height:o.height}}function ko(t){return zt(t).position==="static"}function Hl(t,e){if(!Ht(t)||zt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Kt(t)===n&&(n=n.ownerDocument.body),n}function vd(t,e){const n=bt(t);if(js(t))return n;if(!Ht(t)){let r=An(t);for(;r&&!Si(r);){if(Dt(r)&&!ko(r))return r;r=An(r)}return n}let i=Hl(t,e);for(;i&&kb(i)&&ko(i);)i=Hl(i,e);return i&&Si(i)&&ko(i)&&!Xs(i)?n:i||Ab(t)||n}const Bb=async function(t){const e=this.getOffsetParent||vd,n=this.getDimensions,i=await n(t.floating);return{reference:Ub(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Vb(t){return zt(t).direction==="rtl"}const ts={convertOffsetParentRelativeRectToViewportRelativeRect:Ib,getDocumentElement:Kt,getClippingRect:Nb,getOffsetParent:vd,getElementRects:Bb,getClientRects:Lb,getDimensions:Fb,getScale:bi,isElement:Dt,isRTL:Vb};function yd(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function qb(t,e){let n=null,i;const r=Kt(t);function s(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const h=t.getBoundingClientRect(),{left:u,top:p,width:g,height:b}=h;if(l||e(),!g||!b)return;const w=jr(p),k=jr(r.clientWidth-(u+g)),L=jr(r.clientHeight-(p+b)),C=jr(u),R={rootMargin:-w+"px "+-k+"px "+-L+"px "+-C+"px",threshold:ft(0,Sn(1,c))||1};let O=!0;function _(X){const P=X[0].intersectionRatio;if(P!==c){if(!O)return o();P?o(!1,P):i=setTimeout(()=>{o(!1,1e-7)},1e3)}P===1&&!yd(h,t.getBoundingClientRect())&&o(),O=!1}try{n=new IntersectionObserver(_,{...R,root:r.ownerDocument})}catch{n=new IntersectionObserver(_,R)}n.observe(t)}return o(!0),s}function xd(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,h=Va(t),u=r||s?[...h?$i(h):[],...$i(e)]:[];u.forEach(C=>{r&&C.addEventListener("scroll",n,{passive:!0}),s&&C.addEventListener("resize",n)});const p=h&&l?qb(h,n):null;let g=-1,b=null;o&&(b=new ResizeObserver(C=>{let[z]=C;z&&z.target===h&&b&&(b.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var R;(R=b)==null||R.observe(e)})),n()}),h&&!c&&b.observe(h),b.observe(e));let w,k=c?Yn(t):null;c&&L();function L(){const C=Yn(t);k&&!yd(k,C)&&n(),k=C,w=requestAnimationFrame(L)}return n(),()=>{var C;u.forEach(z=>{r&&z.removeEventListener("scroll",n),s&&z.removeEventListener("resize",n)}),p?.(),(C=b)==null||C.disconnect(),b=null,c&&cancelAnimationFrame(w)}}const kd=bb,Ed=wb,Cd=fb,Wl=vb,Hb=pb,Sd=(t,e,n)=>{const i=new Map,r={platform:ts,...n},s={...r.platform,_c:i};return ub(t,e,{...r,platform:s})};function Wb(t){return jb(t)}function Eo(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function jb(t){for(let e=t;e;e=Eo(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Eo(t);e;e=Eo(e)){if(!(e instanceof Element))continue;const n=getComputedStyle(e);if(n.display!=="contents"&&(n.position!=="static"||Xs(n)||e.tagName==="BODY"))return e}return null}var Xb=`:host {
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
`;function jl(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var Xr=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),ae=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),n=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,s=0,o=0,l=0,c=0,h=0,u=0;n?t.top<e.top?(i=t.left,r=t.bottom,s=t.right,o=t.bottom,l=e.left,c=e.top,h=e.right,u=e.top):(i=e.left,r=e.bottom,s=e.right,o=e.bottom,l=t.left,c=t.top,h=t.right,u=t.top):t.left<e.left?(i=t.right,r=t.top,s=e.left,o=e.top,l=t.right,c=t.bottom,h=e.left,u=e.bottom):(i=e.right,r=e.top,s=t.left,o=t.top,l=e.right,c=e.bottom,h=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${o}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||jl(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||(this.popup.showPopover?.(),this.cleanup=xd(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[kd({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Wl({apply:({rects:i})=>{const r=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${i.reference.width}px`:"",this.popup.style.height=s?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;Xr&&!jl(this.anchor)&&this.boundary==="scroll"&&(e=$i(this.anchorEl).filter(i=>i instanceof Element)),this.flip&&t.push(Cd({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Ed({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(Wl({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Hb({element:this.arrowEl,padding:this.arrowPadding}));const n=Xr?i=>ts.getOffsetParent(i,Wb):ts.getOffsetParent;Sd(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:Xr?"absolute":"fixed",platform:{...ts,getOffsetParent:n}}).then(({x:i,y:r,middlewareData:s,placement:o})=>{const l=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${i}px`,top:`${r}px`}),this.arrow){const h=s.arrow.x,u=s.arrow.y;let p="",g="",b="",w="";if(this.arrowPlacement==="start"){const k=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",g=l?k:"",w=l?"":k}else if(this.arrowPlacement==="end"){const k=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";g=l?"":k,w=l?k:"",b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(w=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(w=typeof h=="number"?`${h}px`:"",p=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:p,right:g,bottom:b,left:w,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new dd)}render(){return f`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${j({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${j({popup:!0,"popup-active":this.active,"popup-fixed":!Xr,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?f`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};ae.css=Xb;a([$(".popup")],ae.prototype,"popup",2);a([$(".arrow")],ae.prototype,"arrowEl",2);a([d()],ae.prototype,"anchor",2);a([d({type:Boolean,reflect:!0})],ae.prototype,"active",2);a([d({reflect:!0})],ae.prototype,"placement",2);a([d()],ae.prototype,"boundary",2);a([d({type:Number})],ae.prototype,"distance",2);a([d({type:Number})],ae.prototype,"skidding",2);a([d({type:Boolean})],ae.prototype,"arrow",2);a([d({attribute:"arrow-placement"})],ae.prototype,"arrowPlacement",2);a([d({attribute:"arrow-padding",type:Number})],ae.prototype,"arrowPadding",2);a([d({type:Boolean})],ae.prototype,"flip",2);a([d({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],ae.prototype,"flipFallbackPlacements",2);a([d({attribute:"flip-fallback-strategy"})],ae.prototype,"flipFallbackStrategy",2);a([d({type:Object})],ae.prototype,"flipBoundary",2);a([d({attribute:"flip-padding",type:Number})],ae.prototype,"flipPadding",2);a([d({type:Boolean})],ae.prototype,"shift",2);a([d({type:Object})],ae.prototype,"shiftBoundary",2);a([d({attribute:"shift-padding",type:Number})],ae.prototype,"shiftPadding",2);a([d({attribute:"auto-size"})],ae.prototype,"autoSize",2);a([d()],ae.prototype,"sync",2);a([d({type:Object})],ae.prototype,"autoSizeBoundary",2);a([d({attribute:"auto-size-padding",type:Number})],ae.prototype,"autoSizePadding",2);a([d({attribute:"hover-bridge",type:Boolean})],ae.prototype,"hoverBridge",2);ae=a([S("wa-popup")],ae);var Gb=`:host {
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
`,Ai=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.position=50}handleDrag(t){const{width:e}=this.getBoundingClientRect(),n=this.localize.dir()==="rtl";t.preventDefault(),hr(this,{onMove:i=>{this.customStates.set("dragging",!0),this.position=parseFloat(Y(i/e*100,0,100).toFixed(2)),n&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:t})}handleKeyDown(t){const e=this.matches(":dir(ltr)"),n=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const i=t.shiftKey?10:1;let r=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||n&&t.key==="ArrowRight")&&(r-=i),(e&&t.key==="ArrowRight"||n&&t.key==="ArrowLeft")&&(r+=i),t.key==="Home"&&(r=0),t.key==="End"&&(r=100),r=Y(r,0,100),this.position=r}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return f`
      <div id="comparison" class="image" part="base">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${pt({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${pt({left:t?`${100-this.position}%`:`${this.position}%`})}
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
    `}};Ai.css=Gb;a([$(".handle")],Ai.prototype,"handle",2);a([d({type:Number,reflect:!0})],Ai.prototype,"position",2);a([I("position",{waitUntilFirstUpdate:!0})],Ai.prototype,"handlePositionChange",1);Ai=a([S("wa-comparison")],Ai);var Kb=class extends Event{constructor(t){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Yb=`:host {
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
`,Ue=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),n=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let r=this.from,s="";n?[r,s]=this.from.trim().split("."):i&&([r,s]=this.from.trim().replace(/\]$/,"").split("["));const o="getElementById"in e?e.getElementById(r):null;o?i?t=o.getAttribute(s)||"":n?t=o[s]||"":t=o.textContent||"":(this.showStatus("error"),this.dispatchEvent(new gi))}if(!t)this.showStatus("error"),this.dispatchEvent(new gi);else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.dispatchEvent(new Kb({value:t}))}catch{this.showStatus("error"),this.dispatchEvent(new gi)}}async showStatus(t){const e=t==="success"?this.successIcon:this.errorIcon;await pe(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=t,e.hidden=!1,await pe(e,"show"),setTimeout(async()=>{await pe(e,"hide"),e.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await pe(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return f`
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
    `}};Ue.css=[sd,Yb];a([$('slot[name="copy-icon"]')],Ue.prototype,"copyIcon",2);a([$('slot[name="success-icon"]')],Ue.prototype,"successIcon",2);a([$('slot[name="error-icon"]')],Ue.prototype,"errorIcon",2);a([$("wa-tooltip")],Ue.prototype,"tooltip",2);a([A()],Ue.prototype,"isCopying",2);a([A()],Ue.prototype,"status",2);a([d()],Ue.prototype,"value",2);a([d()],Ue.prototype,"from",2);a([d({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);a([d({attribute:"copy-label"})],Ue.prototype,"copyLabel",2);a([d({attribute:"success-label"})],Ue.prototype,"successLabel",2);a([d({attribute:"error-label"})],Ue.prototype,"errorLabel",2);a([d({attribute:"feedback-duration",type:Number})],Ue.prototype,"feedbackDuration",2);a([d({attribute:"tooltip-placement"})],Ue.prototype,"tooltipPlacement",2);Ue=a([S("wa-copy-button")],Ue);var ri=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},si=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},oi=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}},ai=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Zb=`:host {
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
`,xe=class extends M{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),this.hideDelay))}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=qs("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){const i=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);i.includes(e)||(i.push(e),t.setAttribute("aria-labelledby",i.join(" ")))}removeFromAriaLabelledBy(t,e){const r=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(s=>s!==e);r.length>0?t.setAttribute("aria-labelledby",r.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const t=new ai;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),this.body.hidden=!1,this.popup.active=!0,await pe(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new si)}else{const t=new oi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),await pe(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new ri)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,n=this.anchor;if(e===n)return;const{signal:i}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:i}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:i}),e.addEventListener("click",this.handleClick,{signal:i}),e.addEventListener("mouseover",this.handleMouseOver,{signal:i}),e.addEventListener("mouseout",this.handleMouseOut,{signal:i})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener("blur",this.handleBlur,{capture:!0}),n.removeEventListener("focus",this.handleFocus,{capture:!0}),n.removeEventListener("click",this.handleClick),n.removeEventListener("mouseover",this.handleMouseOver),n.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Pt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Pt(this,"wa-after-hide")}render(){return f`
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
    `}};xe.css=Zb;xe.dependencies={"wa-popup":ae};a([$("slot:not([name])")],xe.prototype,"defaultSlot",2);a([$(".body")],xe.prototype,"body",2);a([$("wa-popup")],xe.prototype,"popup",2);a([d()],xe.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);a([d({type:Number})],xe.prototype,"distance",2);a([d({type:Boolean,reflect:!0})],xe.prototype,"open",2);a([d({type:Number})],xe.prototype,"skidding",2);a([d({attribute:"show-delay",type:Number})],xe.prototype,"showDelay",2);a([d({attribute:"hide-delay",type:Number})],xe.prototype,"hideDelay",2);a([d()],xe.prototype,"trigger",2);a([d({attribute:"without-arrow",type:Boolean,reflect:!0})],xe.prototype,"withoutArrow",2);a([d()],xe.prototype,"for",2);a([A()],xe.prototype,"anchor",2);a([I("open",{waitUntilFirstUpdate:!0})],xe.prototype,"handleOpenChange",1);a([I("for")],xe.prototype,"handleForChange",1);a([I(["distance","placement","skidding"])],xe.prototype,"handleOptionsChange",1);a([I("disabled")],xe.prototype,"handleDisabledChange",1);xe=a([S("wa-tooltip")],xe);var Jb=`:host {
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
`,Je=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(t){t.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(t){t.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;const r=i.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(r)?!0:i instanceof me?!("disabled"in i)||!i.disabled:!1})||(t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(n=>{n!==this&&n.open&&(n.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const t=new ai;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const e=bs(getComputedStyle(this.body).getPropertyValue("--show-duration"));await gs(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new si)}else{const t=new oi;if(this.dispatchEvent(t),t.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const e=bs(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await gs(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:e,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new ri)}}async show(){if(!(this.open||this.disabled))return this.open=!0,Pt(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Pt(this,"wa-after-hide")}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return f`
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
    `}};Je.css=Jb;a([$("details")],Je.prototype,"details",2);a([$("summary")],Je.prototype,"header",2);a([$(".body")],Je.prototype,"body",2);a([$(".expand-icon-slot")],Je.prototype,"expandIconSlot",2);a([A()],Je.prototype,"isAnimating",2);a([d({type:Boolean,reflect:!0})],Je.prototype,"open",2);a([d()],Je.prototype,"summary",2);a([d({reflect:!0})],Je.prototype,"name",2);a([d({type:Boolean,reflect:!0})],Je.prototype,"disabled",2);a([d({reflect:!0})],Je.prototype,"appearance",2);a([d({attribute:"icon-placement",reflect:!0})],Je.prototype,"iconPlacement",2);a([I("open",{waitUntilFirstUpdate:!0})],Je.prototype,"handleOpenChange",1);Je=a([S("wa-details")],Je);function Qb(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Qo=new Set;function ew(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function tw(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function xs(t){if(Qo.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){const e=ew()+tw();let n=getComputedStyle(document.documentElement).scrollbarGutter;(!n||n==="auto")&&(n="stable"),e<2&&(n=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",n),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${e}px`)}}function ks(t){Qo.delete(t),Qo.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function ea(t,e,n="vertical",i="smooth"){const r=Qb(t,e),s=r.top+e.scrollTop,o=r.left+e.scrollLeft,l=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,h=e.scrollTop,u=e.scrollTop+e.offsetHeight;(n==="horizontal"||n==="both")&&(o<l?e.scrollTo({left:o,behavior:i}):o+t.clientWidth>c&&e.scrollTo({left:o-e.offsetWidth+t.clientWidth,behavior:i})),(n==="vertical"||n==="both")&&(s<h?e.scrollTo({top:s,behavior:i}):s+t.clientHeight>u&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:i}))}function qa(t){return t.split(" ").map(e=>e.trim()).filter(e=>e!=="")}var nw=`:host {
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
`,ln=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.hasSlotController=new yt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),xs(this))}disconnectedCallback(){super.disconnectedCallback(),ks(this),this.removeOpenListeners()}async requestClose(t){const e=new oi({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,pe(this.dialog,"pulse");return}this.removeOpenListeners(),await pe(this.dialog,"hide"),this.open=!1,this.dialog.close(),ks(this);const n=this.originalTrigger;typeof n?.focus=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new ri)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(t){t.preventDefault(),!this.dialog.classList.contains("hide")&&t.target===this.dialog&&this.requestClose(this.dialog)}handleDialogClick(t){const n=t.target.closest('[data-dialog="close"]');n&&(t.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await pe(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const t=new ai;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),xs(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await pe(this.dialog,"show"),this.dispatchEvent(new si)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return f`
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
    `}};ln.css=nw;a([$(".dialog")],ln.prototype,"dialog",2);a([d({type:Boolean,reflect:!0})],ln.prototype,"open",2);a([d({reflect:!0})],ln.prototype,"label",2);a([d({attribute:"without-header",type:Boolean,reflect:!0})],ln.prototype,"withoutHeader",2);a([d({attribute:"light-dismiss",type:Boolean})],ln.prototype,"lightDismiss",2);a([I("open",{waitUntilFirstUpdate:!0})],ln.prototype,"handleOpenChange",1);ln=a([S("wa-dialog")],ln);document.addEventListener("click",t=>{const e=t.target.closest("[data-dialog]");if(e instanceof Element){const[n,i]=qa(e.getAttribute("data-dialog")||"");if(n==="open"&&i?.length){const s=e.getRootNode().getElementById(i);s?.localName==="wa-dialog"?s.open=!0:console.warn(`A dialog with an ID of "${i}" could not be found in this document.`)}}});document.addEventListener("pointerdown",()=>{});var iw=`:host {
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
`,vr=class extends M{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};vr.css=iw;a([d({reflect:!0})],vr.prototype,"orientation",2);a([I("orientation")],vr.prototype,"handleVerticalChange",1);vr=a([S("wa-divider")],vr);var rw=`:host {
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
`,Wt=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.hasSlotController=new yt(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),xs(this))}disconnectedCallback(){super.disconnectedCallback(),ks(this),this.removeOpenListeners()}async requestClose(t){const e=new oi({source:t});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0,pe(this.drawer,"pulse");return}this.removeOpenListeners(),await pe(this.drawer,"hide"),this.open=!1,this.drawer.close(),ks(this);const n=this.originalTrigger;typeof n?.focus=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new ri)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(t){t.preventDefault(),!this.drawer.classList.contains("hide")&&t.target===this.drawer&&this.requestClose(this.drawer)}handleDialogClick(t){const n=t.target.closest('[data-drawer="close"]');n&&(t.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(t){t.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await pe(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const t=new ai;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),xs(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.drawer.focus()}),await pe(this.drawer,"show"),this.dispatchEvent(new si)}render(){const t=!this.withoutHeader,e=this.hasSlotController.test("footer");return f`
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
    `}};Wt.css=rw;a([$(".drawer")],Wt.prototype,"drawer",2);a([d({type:Boolean,reflect:!0})],Wt.prototype,"open",2);a([d({reflect:!0})],Wt.prototype,"label",2);a([d({reflect:!0})],Wt.prototype,"placement",2);a([d({attribute:"without-header",type:Boolean,reflect:!0})],Wt.prototype,"withoutHeader",2);a([d({attribute:"light-dismiss",type:Boolean})],Wt.prototype,"lightDismiss",2);a([I("open",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleOpenChange",1);Wt=a([S("wa-drawer")],Wt);document.addEventListener("click",t=>{const e=t.target.closest("[data-drawer]");if(e instanceof Element){const[n,i]=qa(e.getAttribute("data-drawer")||"");if(n==="open"&&i?.length){const s=e.getRootNode().getElementById(i);s?.localName==="wa-drawer"?s.open=!0:console.warn(`A drawer with an ID of "${i}" could not be found in this document.`)}}});document.body.addEventListener("pointerdown",()=>{});var sw=class extends Event{constructor(t){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};function*$d(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*$d(t.shadowRoot.activeElement)))}var ow=`:host {
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
`,Co=new Set,it=class extends M{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new ie(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async t=>{const e=this.localize.dir()==="rtl";if(t.key==="Escape"){const u=this.getTrigger();t.preventDefault(),t.stopPropagation(),this.open=!1,u?.focus();return}const n=[...$d()].find(u=>u.localName==="wa-dropdown-item"),i=n?.localName==="wa-dropdown-item",r=this.getCurrentSubmenuItem(),s=!!r;let o,l,c;s?(o=this.getSubmenuItems(r),l=o.find(u=>u.active||u===n),c=l?o.indexOf(l):-1):(o=this.getItems(),l=o.find(u=>u.active||u===n),c=l?o.indexOf(l):-1);let h;if(t.key==="ArrowUp"&&(t.preventDefault(),t.stopPropagation(),c>0?h=o[c-1]:h=o[o.length-1]),t.key==="ArrowDown"&&(t.preventDefault(),t.stopPropagation(),c!==-1&&c<o.length-1?h=o[c+1]:h=o[0]),t.key===(e?"ArrowLeft":"ArrowRight")&&i&&l&&l.hasSubmenu){t.preventDefault(),t.stopPropagation(),l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((p,g)=>p.active=g===0),u[0].focus())},0);return}if(t.key===(e?"ArrowRight":"ArrowLeft")&&s){t.preventDefault(),t.stopPropagation();const u=this.removeFromSubmenuStack();u&&(u.submenuOpen=!1,setTimeout(()=>{u.focus(),u.active=!0,(u.slot==="submenu"?this.getSubmenuItems(u.parentElement):this.getItems()).forEach(g=>{g!==u&&(g.active=!1)})},0));return}if((t.key==="Home"||t.key==="End")&&(t.preventDefault(),t.stopPropagation(),h=t.key==="Home"?o[0]:o[o.length-1]),t.key==="Tab"&&await this.hideMenu(),t.key.length===1&&!(t.metaKey||t.ctrlKey||t.altKey)&&!(t.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=t.key,o.some(u=>{const p=(u.textContent||"").trim().toLowerCase(),g=this.userTypedQuery.trim().toLowerCase();return p.startsWith(g)?(h=u,!0):!1})),h){t.preventDefault(),t.stopPropagation(),o.forEach(u=>u.active=u===h),h.focus();return}(t.key==="Enter"||t.key===" "&&this.userTypedQuery==="")&&i&&l&&(t.preventDefault(),t.stopPropagation(),l.hasSubmenu?(l.submenuOpen=!0,this.addToSubmenuStack(l),setTimeout(()=>{const u=this.getSubmenuItems(l);u.length>0&&(u.forEach((p,g)=>p.active=g===0),u[0].focus())},0)):this.makeSelection(l))},this.handleDocumentPointerDown=t=>{t.composedPath().some(i=>i instanceof HTMLElement?i===this||i.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=t=>{const e=this.getCurrentSubmenuItem();if(!e?.submenuOpen||!e.submenuElement)return;const n=e.submenuElement.getBoundingClientRect(),i=this.localize.dir()==="rtl",r=i?n.right:n.left,s=i?Math.max(t.clientX,r):Math.min(t.clientX,r),o=Math.max(n.top,Math.min(t.clientY,n.bottom));e.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${s}px`),e.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${o}px`);const l=e.matches(":hover"),c=e.submenuElement?.matches(":hover")||!!t.composedPath().find(h=>h instanceof HTMLElement&&h.closest('[part="submenu"]')===e.submenuElement);!l&&!c&&setTimeout(()=>{!e.matches(":hover")&&!e.submenuElement?.matches(":hover")&&(e.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(t=>t()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove)}firstUpdated(){this.syncAriaAttributes()}async updated(t){t.has("open")&&(this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())),t.has("size")&&this.syncItemSizes()}getItems(t=!1){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(n=>n.localName==="wa-dropdown-item");return t?e:e.filter(n=>!n.disabled)}getSubmenuItems(t,e=!1){const n=t.shadowRoot?.querySelector('slot[name="submenu"]')||t.querySelector('slot[name="submenu"]');if(!n)return[];const i=n.assignedElements({flatten:!0}).filter(r=>r.localName==="wa-dropdown-item");return e?i:i.filter(r=>!r.disabled)}syncItemSizes(){this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.localName==="wa-dropdown-item").forEach(e=>e.size=this.size)}addToSubmenuStack(t){const e=this.openSubmenuStack.indexOf(t);e!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,e+1):this.openSubmenuStack.push(t)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(t){const e=t.closest('wa-dropdown-item:not([slot="submenu"])');let n;e?n=this.getSubmenuItems(e,!0):n=this.getItems(!0),n.forEach(i=>{i!==t&&i.submenuOpen&&(i.submenuOpen=!1)}),this.openSubmenuStack.includes(t)||this.openSubmenuStack.push(t)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger())return;const e=new ai;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}Co.forEach(i=>i.open=!1),this.popup.active=!0,this.open=!0,Co.add(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await pe(this.menu,"show");const n=this.getItems();n.length>0&&(n.forEach((i,r)=>i.active=r===0),n[0].focus()),this.dispatchEvent(new si)}async hideMenu(){const t=new oi({source:this});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}this.open=!1,Co.delete(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await pe(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new ri)}handleMenuClick(t){const e=t.target.closest("wa-dropdown-item");if(!(!e||e.disabled)){if(e.hasSubmenu){e.submenuOpen||(this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),e.submenuOpen=!0),t.stopPropagation();return}this.makeSelection(e)}}async handleMenuSlotChange(){const t=this.getItems(!0);await Promise.all(t.map(i=>i.updateComplete)),this.syncItemSizes();const e=t.some(i=>i.type==="checkbox"),n=t.some(i=>i.hasSubmenu);t.forEach((i,r)=>{i.active=r===0,i.checkboxAdjacent=e,i.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(t){const e=t.detail.item;this.closeSiblingSubmenus(e),this.addToSubmenuStack(e),this.setupSubmenuPosition(e),this.processSubmenuItems(e)}setupSubmenuPosition(t){if(!t.submenuElement)return;this.cleanupSubmenuPosition(t);const e=xd(t,t.submenuElement,()=>{this.positionSubmenu(t),this.updateSafeTriangleCoordinates(t)});this.submenuCleanups.set(t,e);const n=t.submenuElement.querySelector('slot[name="submenu"]');n&&(n.removeEventListener("slotchange",it.handleSubmenuSlotChange),n.addEventListener("slotchange",it.handleSubmenuSlotChange),it.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(t){const e=t.target;if(!e)return;const n=e.assignedElements().filter(s=>s.localName==="wa-dropdown-item");if(n.length===0)return;const i=n.some(s=>s.hasSubmenu),r=n.some(s=>s.type==="checkbox");n.forEach(s=>{s.submenuAdjacent=i,s.checkboxAdjacent=r})}processSubmenuItems(t){if(!t.submenuElement)return;const e=this.getSubmenuItems(t,!0),n=e.some(i=>i.hasSubmenu);e.forEach(i=>{i.submenuAdjacent=n})}cleanupSubmenuPosition(t){const e=this.submenuCleanups.get(t);e&&(e(),this.submenuCleanups.delete(t))}positionSubmenu(t){if(!t.submenuElement)return;const n=this.localize.dir()==="rtl"?"left-start":"right-start";Sd(t,t.submenuElement,{placement:n,middleware:[kd({mainAxis:0,crossAxis:-5}),Cd({fallbackStrategy:"bestFit"}),Ed({padding:8})]}).then(({x:i,y:r,placement:s})=>{t.submenuElement.setAttribute("data-placement",s),Object.assign(t.submenuElement.style,{left:`${i}px`,top:`${r}px`})})}updateSafeTriangleCoordinates(t){if(!t.submenuElement||!t.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){t.submenuElement.style.setProperty("--safe-triangle-visible","none");return}t.submenuElement.style.setProperty("--safe-triangle-visible","block");const n=t.submenuElement.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${i?n.right:n.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${n.top}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${i?n.right:n.left}px`),t.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${n.bottom}px`)}makeSelection(t){const e=this.getTrigger();if(t.disabled)return;t.type==="checkbox"&&(t.checked=!t.checked);const n=new sw({item:t});this.dispatchEvent(n),n.defaultPrevented||(this.open=!1,e?.focus())}async syncAriaAttributes(){const t=this.getTrigger();let e;t&&(t.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await t.updateComplete,e=t.shadowRoot.querySelector('[part="base"]')):e=t,e.hasAttribute("id")||e.setAttribute("id",qs("wa-dropdown-trigger-")),e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded",this.open?"true":"false"),this.menu.setAttribute("aria-expanded","false"))}render(){let t=this.hasUpdated?this.popup.active:this.open;return f`
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
    `}};it.css=[et,ow];a([$("slot:not([name])")],it.prototype,"defaultSlot",2);a([$("#menu")],it.prototype,"menu",2);a([$("wa-popup")],it.prototype,"popup",2);a([d({type:Boolean,reflect:!0})],it.prototype,"open",2);a([d({reflect:!0})],it.prototype,"size",2);a([d({reflect:!0})],it.prototype,"placement",2);a([d({type:Number})],it.prototype,"distance",2);a([d({type:Number})],it.prototype,"skidding",2);it=a([S("wa-dropdown")],it);var aw=`:host {
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
`,Qe=class extends M{constructor(){super(...arguments),this.hasSlotController=new yt(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(t){t.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),t.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),t.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),t.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),t.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.notifyParentOfOpening(),this.submenuElement.showPopover(),this.submenuElement.hidden=!1,this.submenuElement.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await pe(this.submenuElement,"show"),setTimeout(()=>{const t=this.getSubmenuItems();t.length>0&&(t.forEach((e,n)=>e.active=n===0),t[0].focus())},0))}notifyParentOfOpening(){const t=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(t);const e=this.parentElement;e&&[...e.children].filter(i=>i!==this&&i.localName==="wa-dropdown-item"&&i.getAttribute("slot")===this.getAttribute("slot")&&i.submenuOpen).forEach(i=>{i.submenuOpen=!1})}async closeSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),this.submenuElement.hidden||(await pe(this.submenuElement,"hide"),this.submenuElement.hidden=!0,this.submenuElement.removeAttribute("data-visible"),this.submenuElement.hidePopover()))}getSubmenuItems(){return[...this.children].filter(t=>t.localName==="wa-dropdown-item"&&t.getAttribute("slot")==="submenu"&&!t.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return f`
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
    `}};Qe.css=aw;a([$("#submenu")],Qe.prototype,"submenuElement",2);a([d({type:Boolean})],Qe.prototype,"active",2);a([d({reflect:!0})],Qe.prototype,"variant",2);a([d({reflect:!0})],Qe.prototype,"size",2);a([d({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],Qe.prototype,"checkboxAdjacent",2);a([d({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],Qe.prototype,"submenuAdjacent",2);a([d()],Qe.prototype,"value",2);a([d({reflect:!0})],Qe.prototype,"type",2);a([d({type:Boolean})],Qe.prototype,"checked",2);a([d({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],Qe.prototype,"submenuOpen",2);a([A()],Qe.prototype,"hasSubmenu",2);Qe=a([S("wa-dropdown-item")],Qe);var yr=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],n=this.unit==="bit"?t:e,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),n.length-1)),r=n[i]+this.unit,s=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:r,unitDisplay:this.display})}};a([d({type:Number})],yr.prototype,"value",2);a([d()],yr.prototype,"unit",2);a([d()],yr.prototype,"display",2);yr=a([S("wa-format-bytes")],yr);var st=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(t.getMilliseconds()))return;const n=this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e});return f`<time datetime=${t.toISOString()}>${n}</time>`}};a([d()],st.prototype,"date",2);a([d()],st.prototype,"weekday",2);a([d()],st.prototype,"era",2);a([d()],st.prototype,"year",2);a([d()],st.prototype,"month",2);a([d()],st.prototype,"day",2);a([d()],st.prototype,"hour",2);a([d()],st.prototype,"minute",2);a([d()],st.prototype,"second",2);a([d({attribute:"time-zone-name"})],st.prototype,"timeZoneName",2);a([d({attribute:"time-zone"})],st.prototype,"timeZone",2);a([d({attribute:"hour-format"})],st.prototype,"hourFormat",2);st=a([S("wa-format-date")],st);var St=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};a([d({type:Number})],St.prototype,"value",2);a([d()],St.prototype,"type",2);a([d({attribute:"without-grouping",type:Boolean})],St.prototype,"withoutGrouping",2);a([d()],St.prototype,"currency",2);a([d({attribute:"currency-display"})],St.prototype,"currencyDisplay",2);a([d({attribute:"minimum-integer-digits",type:Number})],St.prototype,"minimumIntegerDigits",2);a([d({attribute:"minimum-fraction-digits",type:Number})],St.prototype,"minimumFractionDigits",2);a([d({attribute:"maximum-fraction-digits",type:Number})],St.prototype,"maximumFractionDigits",2);a([d({attribute:"minimum-significant-digits",type:Number})],St.prototype,"minimumSignificantDigits",2);a([d({attribute:"maximum-significant-digits",type:Number})],St.prototype,"maximumSignificantDigits",2);St=a([S("wa-format-number")],St);var So=new Map;function lw(t,e="cors"){const n=So.get(t);if(n!==void 0)return Promise.resolve(n);const i=fetch(t,{mode:e}).then(async r=>{const s={ok:r.ok,status:r.status,html:await r.text()};return So.set(t,s),s});return So.set(t,i),i}var Xl=class extends Event{constructor(t){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},cw=`:host {
  display: block;
}
`,Zn=class extends M{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(n=>e.setAttribute(n.name,n.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await lw(t,this.mode);if(t!==this.src)return;if(!e.ok){this.dispatchEvent(new Xl({status:e.status}));return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(n=>this.executeScript(n)),this.dispatchEvent(new za)}catch{this.dispatchEvent(new Xl({status:-1}))}}render(){return f`<slot></slot>`}};Zn.css=cw;a([d()],Zn.prototype,"src",2);a([d()],Zn.prototype,"mode",2);a([d({attribute:"allow-scripts",type:Boolean})],Zn.prototype,"allowScripts",2);a([I("src")],Zn.prototype,"handleSrcChange",1);Zn=a([S("wa-include")],Zn);var dw=class extends Event{constructor(t){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},hw=`:host {
  display: contents;
}
`,Mt=class extends M{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.dispatchEvent(new dw({mutationList:t}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return f` <slot></slot> `}};Mt.css=hw;a([d({reflect:!0})],Mt.prototype,"attr",2);a([d({attribute:"attr-old-value",type:Boolean,reflect:!0})],Mt.prototype,"attrOldValue",2);a([d({attribute:"char-data",type:Boolean,reflect:!0})],Mt.prototype,"charData",2);a([d({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Mt.prototype,"charDataOldValue",2);a([d({attribute:"child-list",type:Boolean,reflect:!0})],Mt.prototype,"childList",2);a([d({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);a([I("disabled")],Mt.prototype,"handleDisabledChange",1);a([I("attr",{waitUntilFirstUpdate:!0}),I("attr-old-value",{waitUntilFirstUpdate:!0}),I("char-data",{waitUntilFirstUpdate:!0}),I("char-data-old-value",{waitUntilFirstUpdate:!0}),I("childList",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleChange",1);Mt=a([S("wa-mutation-observer")],Mt);var uw=`:host {
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
`,$o=new Set,Be=class extends M{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=t=>{t.target.closest('[data-popover="close"]')&&(t.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.preventDefault(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=t=>{const e=t.target;this.anchor&&t.composedPath().includes(this.anchor)||e.closest("wa-popover")!==this&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=qs("wa-popover-"))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(t){t.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const t=new ai;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}$o.forEach(e=>e.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,$o.add(this),requestAnimationFrame(()=>{const e=this.querySelector("[autofocus]");e&&typeof e.focus=="function"?e.focus():this.dialog.focus()}),await pe(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new si)}else{const t=new oi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),$o.delete(this),await pe(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new ri)}}handleForChange(){const t=this.getRootNode();if(!t)return;const e=this.for?t.getElementById(this.for):null,n=this.anchor;if(e===n)return;const{signal:i}=this.eventController;e&&e.addEventListener("click",this.handleAnchorClick,{signal:i}),n&&n.removeEventListener("click",this.handleAnchorClick),this.anchor=e,this.for&&!e&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,Pt(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Pt(this,"wa-after-hide")}render(){return f`
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
    `}};Be.css=uw;Be.dependencies={"wa-popup":ae};a([$("dialog")],Be.prototype,"dialog",2);a([$(".body")],Be.prototype,"body",2);a([$("wa-popup")],Be.prototype,"popup",2);a([A()],Be.prototype,"anchor",2);a([d()],Be.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],Be.prototype,"open",2);a([d({type:Number})],Be.prototype,"distance",2);a([d({type:Number})],Be.prototype,"skidding",2);a([d()],Be.prototype,"for",2);a([d({attribute:"without-arrow",type:Boolean,reflect:!0})],Be.prototype,"withoutArrow",2);a([I("open",{waitUntilFirstUpdate:!0})],Be.prototype,"handleOpenChange",1);a([I("for")],Be.prototype,"handleForChange",1);a([I(["distance","placement","skidding"])],Be.prototype,"handleOptionsChange",1);Be=a([S("wa-popover")],Be);var pw=`:host {
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
`,_i=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.indeterminate=!1,this.label=""}updated(t){t.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${Y(this.value,0,100)}%`)})}render(){return f`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${B(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":f` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};_i.css=pw;a([d({type:Number,reflect:!0})],_i.prototype,"value",2);a([d({type:Boolean,reflect:!0})],_i.prototype,"indeterminate",2);a([d()],_i.prototype,"label",2);_i=a([S("wa-progress-bar")],_i);var fw=`:host {
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
`,Jn=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),n=2*Math.PI*e,i=n-this.value/100*n;this.indicatorOffset=`${i}px`}}render(){return f`
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
    `}};Jn.css=fw;a([$(".indicator")],Jn.prototype,"indicator",2);a([A()],Jn.prototype,"indicatorOffset",2);a([d({type:Number,reflect:!0})],Jn.prototype,"value",2);a([d()],Jn.prototype,"label",2);Jn=a([S("wa-progress-ring")],Jn);const mw="modulepreload",gw=function(t){return"/"+t},Gl={},ue=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(n.map(h=>{if(h=gw(h),h in Gl)return;Gl[h]=!0;const u=h.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":mw,u||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((b,w)=>{g.addEventListener("load",b),g.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var bw=`:host {
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
`,Ao,wt=class extends M{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H",this.generated=!1}firstUpdated(t){super.firstUpdated(t),this.hasUpdated&&this.generate()}generate(){if(this.style.setProperty("--size",`${this.size}px`),!!this.hasUpdated){if(!Ao){ue(()=>import("./qr-creator.es6.min-DtlEF1Ls.js"),[]).then(t=>{Ao=t.default,this.generate()});return}Ao.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas),this.generated=!0}}render(){return f`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
      ></canvas>
    `}};wt.css=bw;a([$("canvas")],wt.prototype,"canvas",2);a([d()],wt.prototype,"value",2);a([d()],wt.prototype,"label",2);a([d({type:Number})],wt.prototype,"size",2);a([d()],wt.prototype,"fill",2);a([d()],wt.prototype,"background",2);a([d({type:Number})],wt.prototype,"radius",2);a([d({attribute:"error-correction"})],wt.prototype,"errorCorrection",2);a([A()],wt.prototype,"generated",2);a([I(["background","errorCorrection","fill","radius","size","value"])],wt.prototype,"generate",1);wt=a([S("wa-qr-code")],wt);var ww=`:host {
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
`,Ge=class extends me{constructor(){super(),this.hasSlotController=new yt(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("wa-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const n=this.value;this.value=e.value,e.checked=!0;const i=this.getAllRadios();for(const r of i)e!==r&&(r.checked=!1,r.setAttribute("tabindex","-1"));this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const t=[Hs({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:qs("__wa-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}get validationTarget(){const t=this.querySelector(":is(wa-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("value"))&&this.syncRadioElements()}formResetCallback(...t){this.value=this.defaultValue,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();if(t.forEach((e,n)=>{e.setAttribute("size",this.size),e.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),e.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),e.toggleAttribute("data-wa-radio-first",n===0),e.toggleAttribute("data-wa-radio-inner",n!==0&&n!==t.length-1),e.toggleAttribute("data-wa-radio-last",n===t.length-1),e.forceDisabled=this.disabled}),await Promise.all(t.map(async e=>{await e.updateComplete,!e.disabled&&e.value===this.value?e.checked=!0:e.checked=!1})),this.disabled)t.forEach(e=>{e.tabIndex=-1});else{const e=t.filter(i=>!i.disabled),n=e.find(i=>i.checked);e.length>0&&(n?e.forEach(i=>{i.tabIndex=i.checked?0:-1}):e.forEach((i,r)=>{i.tabIndex=r===0?0:-1})),t.filter(i=>i.disabled).forEach(i=>{i.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter(l=>!l.disabled);if(e.length<=0)return;t.preventDefault();const n=this.value,i=e.find(l=>l.checked)??e[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let s=e.indexOf(i)+r;s||(s=0),s<0&&(s=e.length-1),s>e.length-1&&(s=0);const o=e.some(l=>l.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(l=>{l.checked=!1,o||l.setAttribute("tabindex","-1")}),this.value=e[s].value,e[s].checked=!0,o?e[s].shadowRoot.querySelector("button").focus():(e[s].setAttribute("tabindex","0"),e[s].focus()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),n=e.find(s=>s.checked),i=e.find(s=>!s.disabled),r=n||i;r&&r.focus(t)}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e;return f`
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
    `}};Ge.css=[et,un,ww];Ge.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0};a([$("slot:not([name])")],Ge.prototype,"defaultSlot",2);a([d()],Ge.prototype,"label",2);a([d({attribute:"hint"})],Ge.prototype,"hint",2);a([d({reflect:!0})],Ge.prototype,"name",2);a([d({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);a([d({reflect:!0})],Ge.prototype,"orientation",2);a([A()],Ge.prototype,"value",1);a([d({attribute:"value",reflect:!0})],Ge.prototype,"defaultValue",2);a([d({reflect:!0})],Ge.prototype,"size",2);a([d({type:Boolean,reflect:!0})],Ge.prototype,"required",2);a([d({type:Boolean,attribute:"with-label"})],Ge.prototype,"withLabel",2);a([d({type:Boolean,attribute:"with-hint"})],Ge.prototype,"withHint",2);Ge=a([S("wa-radio-group")],Ge);var vw=`:host {
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
`,jt=class extends me{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return f`
      <span part="control" class="control">
        ${this.checked?f`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};jt.css=[un,et,vw];a([A()],jt.prototype,"checked",2);a([A()],jt.prototype,"forceDisabled",2);a([d({reflect:!0})],jt.prototype,"form",2);a([d({reflect:!0})],jt.prototype,"value",2);a([d({reflect:!0})],jt.prototype,"appearance",2);a([d({reflect:!0})],jt.prototype,"size",2);a([d({type:Boolean})],jt.prototype,"disabled",2);jt=a([S("wa-radio")],jt);var Kl=class extends Event{constructor(t){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},yw=`:host {
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
`,Ve=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=(t,e)=>e?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="medium"}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:n,right:i,width:r}=this.rating.getBoundingClientRect(),s=e?this.roundToPrecision((i-t)/r*this.max,this.precision):this.roundToPrecision((t-n)/r*this.max,this.precision);return Y(s,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.matches(":dir(ltr)"),n=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||n&&t.key==="ArrowRight"){const r=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||n&&t.key==="ArrowLeft"){const r=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}roundToPrecision(t,e=.5){const n=1/e;return Math.ceil(t*n)/n}handleHoverValueChange(){this.dispatchEvent(new Kl({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new Kl({phase:this.isHovering?"start":"end",value:this.hoverValue}))}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir,e=Array.from(Array(this.max).keys());let n=0;return this.disabled||this.readonly?n=this.value:n=this.isHovering?this.hoverValue:this.value,f`
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
                    style=${pt({clipPath:t?`inset(0 ${(n-i)*100}% 0 0)`:`inset(0 0 0 ${(n-i)*100}%)`})}
                  >
                    ${nn(this.getSymbol(i+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${pt({clipPath:t?`inset(0 0 0 ${100-(n-i)*100}%)`:`inset(0 ${100-(n-i)*100}% 0 0)`})}
                  >
                    ${nn(this.getSymbol(i+1,!0))}
                  </div>
                </span>
              `:f`
              <span
                class=${j({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(n)===i+1,"symbol-active":n>=i+1})}
                role="presentation"
              >
                ${nn(this.getSymbol(i+1,r))}
              </span>
            `})}
        </span>
      </div>
    `}};Ve.css=[et,yw];a([$(".rating")],Ve.prototype,"rating",2);a([A()],Ve.prototype,"hoverValue",2);a([A()],Ve.prototype,"isHovering",2);a([d()],Ve.prototype,"label",2);a([d({type:Number})],Ve.prototype,"value",2);a([d({type:Number})],Ve.prototype,"max",2);a([d({type:Number})],Ve.prototype,"precision",2);a([d({type:Boolean,reflect:!0})],Ve.prototype,"readonly",2);a([d({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2);a([d()],Ve.prototype,"getSymbol",2);a([d({reflect:!0})],Ve.prototype,"size",2);a([zs({passive:!0})],Ve.prototype,"handleTouchMove",1);a([I("hoverValue")],Ve.prototype,"handleHoverValueChange",1);a([I("isHovering")],Ve.prototype,"handleIsHoveringChange",1);Ve=a([S("wa-rating")],Ve);var xw=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],_n=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const n=e.getTime()-t.getTime(),{unit:i,value:r}=xw.find(s=>Math.abs(n)<s.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(n/r),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let s;i==="minute"?s=Gr("second"):i==="hour"?s=Gr("minute"):i==="day"?s=Gr("hour"):s=Gr("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),s)}return f`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};a([A()],_n.prototype,"isoTime",2);a([A()],_n.prototype,"relativeTime",2);a([d()],_n.prototype,"date",2);a([d()],_n.prototype,"format",2);a([d()],_n.prototype,"numeric",2);a([d({type:Boolean})],_n.prototype,"sync",2);_n=a([S("wa-relative-time")],_n);function Gr(t){const n={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return n-Date.now()%n}var kw=class extends Event{constructor(t){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Ew=`:host {
  display: contents;
}
`,xr=class extends M{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.dispatchEvent(new kw({entries:t}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(n=>this.resizeObserver.unobserve(n)),this.observedElements=[],e.forEach(n=>{this.resizeObserver.observe(n),this.observedElements.push(n)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return f` <slot @slotchange=${this.handleSlotChange}></slot> `}};xr.css=Ew;a([d({type:Boolean,reflect:!0})],xr.prototype,"disabled",2);a([I("disabled",{waitUntilFirstUpdate:!0})],xr.prototype,"handleDisabledChange",1);xr=a([S("wa-resize-observer")],xr);var Cw=`:host {
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
`,cn=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(t){t.key==="Home"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),t.key==="End"&&(t.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const t=Math.ceil(this.content.clientWidth),e=Math.abs(Math.ceil(this.content.scrollLeft)),i=Math.ceil(this.content.scrollWidth)-t;this.canScroll=i>0;const r=Math.min(1,e/(i*.05)),s=Math.min(1,(i-e)/(i*.05));this.style.setProperty("--start-shadow-opacity",String(r||0)),this.style.setProperty("--end-shadow-opacity",String(s||0))}else{const t=Math.ceil(this.content.clientHeight),e=Math.abs(Math.ceil(this.content.scrollTop)),i=Math.ceil(this.content.scrollHeight)-t;this.canScroll=i>0;const r=Math.min(1,e/(i*.05)),s=Math.min(1,(i-e)/(i*.05));this.style.setProperty("--start-shadow-opacity",String(r||0)),this.style.setProperty("--end-shadow-opacity",String(s||0))}}render(){return f`
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
    `}};cn.css=[Cw];a([$("#content")],cn.prototype,"content",2);a([A()],cn.prototype,"canScroll",2);a([d({reflect:!0})],cn.prototype,"orientation",2);a([d({attribute:"without-scrollbar",type:Boolean,reflect:!0})],cn.prototype,"withoutScrollbar",2);a([d({attribute:"without-shadow",type:Boolean,reflect:!0})],cn.prototype,"withoutShadow",2);a([zs({passive:!0})],cn.prototype,"updateScroll",1);cn=a([S("wa-scroller")],cn);var Sw=`:host {
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
`,Z=class extends me{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new yt(this,"hint","label"),this.localize=new ie(this),this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.form=null,this.required=!1,this.getTag=t=>f`
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
      `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,n=e.closest('[part~="clear-button"]')!==null,i=e.closest("wa-button")!==null;if(!(n||i)){if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),s=r.indexOf(this.currentOption);let o=Math.max(0,s);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(o=s+1,o>r.length-1&&(o=0)):t.key==="ArrowUp"?(o=s-1,o<0&&(o=r.length-1)):t.key==="Home"?o=0:t.key==="End"&&(o=r.length-1),this.setCurrentOption(r[o])}if(t.key?.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const s of r)if(s.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}static get validators(){const t=[Hs({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...t]}get validationTarget(){return this.valueInput}set defaultValue(t){this._defaultValue=this.convertDefaultValue(t)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(t){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(t)&&(t=t[0]),t}set value(t){let e=this.value;t instanceof FormData&&(t=t.getAll(this.name)),t!=null&&!Array.isArray(t)&&(t=[t]),this._value=t??null,this.value!==e&&(this.valueHasChanged=!0,this.requestUpdate("value",e))}get value(){let t=this._value??this.defaultValue??null;t!=null&&(t=Array.isArray(t)?t:[t]),t==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(n=>!n.disabled).map(n=>n.value));let e=t;return t!=null&&(e=t.filter(n=>this.optionValues.has(n)),e=this.multiple?e:e[0],e=e??null),e}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){const e=this.getAllOptions().filter(n=>n.hasAttribute("selected")||n.defaultSelected);if(e.length>0){const n=e.map(i=>i.value);this._defaultValue=this.multiple?n:n[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(t){t.preventDefault()}handleComboboxMouseDown(t){const n=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="wa-button");this.disabled||n||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==null&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new ld),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const n=t.target.closest("wa-option");n&&!n.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(n):this.setSelectedOptions(n),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let e=this.value;if(e==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(e)||(e=[e]);const n=t.filter(i=>e.includes(i.value));this.setSelectedOptions(n)}handleTagRemove(t,e){if(t.stopPropagation(),this.disabled)return;let n=e;if(!n){const i=t.target.closest("wa-tag[part~=tag]");if(i){const r=this.shadowRoot?.querySelector('[part="tags"]');if(r){const o=Array.from(r.children).indexOf(i);o>=0&&o<this.selectedOptions.length&&(n=this.selectedOptions[o])}}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(t){this.getAllOptions().forEach(n=>{n.current=!1,n.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),n=Array.isArray(t)?t:[t];e.forEach(i=>{n.includes(i)||(i.selected=!1)}),n.length&&n.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){const t=this.getAllOptions();this.selectedOptions=t.filter(n=>{if(!this.hasInteracted&&!this.valueHasChanged){const i=this.defaultValue,r=Array.isArray(i)?i:[i];return n.hasAttribute("selected")||n.defaultSelected||n.selected||r?.includes(n.value)}return n.selected});let e=new Set(this.selectedOptions.map(n=>n.value));if(e.size>0||this._value){const n=this._value;if(this._value==null){let i=this.defaultValue??[];this._value=Array.isArray(i)?i:[i]}this._value=this._value?.filter(i=>!this.optionValues?.has(i))??null,this._value?.unshift(...e),this.requestUpdate("value",n)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const n=this.selectedOptions[0];this.displayLabel=n?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const n=this.getTag(t,e);return n?typeof n=="string"?nn(n):n:null}else if(e===this.maxOptionsVisible)return f`
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
        `;return null})}updated(t){super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],n=t.filter(i=>e.includes(i.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const t=new ai;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await pe(this.popup.popup,"show"),this.currentOption&&ea(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new si)}else{const t=new oi;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await pe(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new ri)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Pt(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Pt(this,"wa-after-hide")}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e,r=(this.hasUpdated||cu)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,s=!!(this.placeholder&&(!this.value||this.value.length===0));return f`
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
    `}};Z.css=[Sw,un,et];a([$(".select")],Z.prototype,"popup",2);a([$(".combobox")],Z.prototype,"combobox",2);a([$(".display-input")],Z.prototype,"displayInput",2);a([$(".value-input")],Z.prototype,"valueInput",2);a([$(".listbox")],Z.prototype,"listbox",2);a([A()],Z.prototype,"displayLabel",2);a([A()],Z.prototype,"currentOption",2);a([A()],Z.prototype,"selectedOptions",2);a([A()],Z.prototype,"optionValues",2);a([d()],Z.prototype,"name",2);a([d({attribute:!1})],Z.prototype,"defaultValue",1);a([d({attribute:"value",reflect:!1})],Z.prototype,"value",1);a([d({reflect:!0})],Z.prototype,"size",2);a([d()],Z.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],Z.prototype,"multiple",2);a([d({attribute:"max-options-visible",type:Number})],Z.prototype,"maxOptionsVisible",2);a([d({type:Boolean})],Z.prototype,"disabled",2);a([d({attribute:"with-clear",type:Boolean})],Z.prototype,"withClear",2);a([d({type:Boolean,reflect:!0})],Z.prototype,"open",2);a([d({reflect:!0})],Z.prototype,"appearance",2);a([d({type:Boolean,reflect:!0})],Z.prototype,"pill",2);a([d()],Z.prototype,"label",2);a([d({reflect:!0})],Z.prototype,"placement",2);a([d({attribute:"hint"})],Z.prototype,"hint",2);a([d({attribute:"with-label",type:Boolean})],Z.prototype,"withLabel",2);a([d({attribute:"with-hint",type:Boolean})],Z.prototype,"withHint",2);a([d({reflect:!0})],Z.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Z.prototype,"required",2);a([d({attribute:!1})],Z.prototype,"getTag",2);a([I("disabled",{waitUntilFirstUpdate:!0})],Z.prototype,"handleDisabledChange",1);a([I("value",{waitUntilFirstUpdate:!0})],Z.prototype,"handleValueChange",1);a([I("open",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpenChange",1);Z=a([S("wa-select")],Z);var $w=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}},Aw=`@layer wa-component {
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
`,Tn=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.variant="neutral",this.appearance="filled-outlined",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new $w)}render(){return f`
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
    `}};Tn.css=[Aw,Tr,et];a([d({reflect:!0})],Tn.prototype,"variant",2);a([d({reflect:!0})],Tn.prototype,"appearance",2);a([d({reflect:!0})],Tn.prototype,"size",2);a([d({type:Boolean,reflect:!0})],Tn.prototype,"pill",2);a([d({attribute:"with-remove",type:Boolean})],Tn.prototype,"withRemove",2);Tn=a([S("wa-tag")],Tn);function sr(t,e=0){if(!t||!globalThis.Node)return"";if(typeof t[Symbol.iterator]=="function")return(Array.isArray(t)?t:[...t]).map(r=>sr(r,--e)).join("");let n=t;if(n.nodeType===Node.TEXT_NODE)return n.textContent??"";if(n.nodeType===Node.ELEMENT_NODE){let i=n;if(i.hasAttribute("slot")||i.matches("style, script"))return"";if(i instanceof HTMLSlotElement){let r=i.assignedNodes({flatten:!0});if(r.length>0)return sr(r,--e)}return e>-1?sr(i,--e):i.textContent??""}return n.hasChildNodes()?sr(n.childNodes,--e):""}var _w=`:host {
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
`,Nt=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=t=>{t.type==="mouseenter"?this.customStates.set("hover",!0):t.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(t){const e=this._label;this._label=t||"",this._label!==e&&this.requestUpdate("label",e)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?customElements.whenDefined("wa-select").then(()=>{const t=this.closest("wa-select");t&&(t.handleDefaultSlotChange(),t.selectionChanged?.())}):this.isInitialized=!0}willUpdate(t){if(t.has("defaultSelected")&&!this.closest("wa-select")?.hasInteracted){const e=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",e)}super.willUpdate(t)}updated(t){super.updated(t),t.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),t.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),t.has("current")&&this.customStates.set("current",this.current)}updateDefaultLabel(){let t=this.defaultLabel;this.defaultLabel=sr(this).trim();let e=this.defaultLabel!==t;return!this._label&&e&&this.requestUpdate("label",t),e}render(){return f`
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
    `}};Nt.css=_w;a([$(".label")],Nt.prototype,"defaultSlot",2);a([A()],Nt.prototype,"current",2);a([d({reflect:!0})],Nt.prototype,"value",2);a([d({type:Boolean})],Nt.prototype,"disabled",2);a([d({type:Boolean,attribute:!1})],Nt.prototype,"selected",2);a([d({type:Boolean,attribute:"selected"})],Nt.prototype,"defaultSelected",2);a([d()],Nt.prototype,"label",1);a([A()],Nt.prototype,"defaultLabel",2);Nt=a([S("wa-option")],Nt);var Tw=`:host {
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
`,Es=class extends M{constructor(){super(...arguments),this.effect="none"}render(){return f` <div part="indicator" class="indicator"></div> `}};Es.css=Tw;a([d({reflect:!0})],Es.prototype,"effect",2);Es=a([S("wa-skeleton")],Es);var Rw=()=>{const t=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(e){const n={message:"",isValid:!0,invalidKeys:[]},i=(r,s,o,l)=>{const c=document.createElement("input");return c.type="range",c.min=String(s),c.max=String(o),c.step=String(l),c.value=String(r),c.checkValidity(),c.validationMessage};if(e.required&&!e.hasInteracted)return n.isValid=!1,n.invalidKeys.push("valueMissing"),n.message=t.validationMessage||"Please fill out this field.",n;if(e.isRange){const r=e.minValue,s=e.maxValue;if(r<e.min)return n.isValid=!1,n.invalidKeys.push("rangeUnderflow"),n.message=i(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,n;if(s>e.max)return n.isValid=!1,n.invalidKeys.push("rangeOverflow"),n.message=i(s,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,n;if(e.step&&e.step!==1){const o=(r-e.min)%e.step!==0,l=(s-e.min)%e.step!==0;if(o||l){n.isValid=!1,n.invalidKeys.push("stepMismatch");const c=o?r:s;return n.message=i(c,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,n}}}else{const r=e.value;if(r<e.min)return n.isValid=!1,n.invalidKeys.push("rangeUnderflow"),n.message=i(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,n;if(r>e.max)return n.isValid=!1,n.invalidKeys.push("rangeOverflow"),n.message=i(r,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,n;if(e.step&&e.step!==1&&(r-e.min)%e.step!==0)return n.isValid=!1,n.invalidKeys.push("stepMismatch"),n.message=i(r,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,n}return n}}},Iw=`:host {
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
`,J=class extends me{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new yt(this,"hint","label"),this.localize=new ie(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=this.defaultValue,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.form=null,this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,Rw()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){t=Number(t)??this.minValue,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new Vr(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new Vr(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new Vr(this.track,{start:(t,e)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const n=this.getValueFromCoordinates(t,e),i=Math.abs(n-this.minValue),r=Math.abs(n-this.maxValue);if(i===r)if(n>this.maxValue)this.activeThumb="max";else if(n<this.minValue)this.activeThumb="min";else{const s=this.localize.dir()==="rtl",o=this.orientation==="vertical",l=o?e:t,c=this.lastTrackPosition||l;this.lastTrackPosition=l;const h=l>c!==s&&!o||l<c&&o;this.activeThumb=h?"max":"min"}else this.activeThumb=i<=r?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(t,e,this.activeThumb),this.showRangeTooltips()},move:(t,e)=>{this.activeThumb&&this.setThumbValueFromCoordinates(t,e,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new Vr(this.slider,{start:(t,e)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(t,e),this.showTooltip()},move:(t,e)=>{this.setValueFromCoordinates(t,e)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(t){if(t.has("range")&&this.requestUpdate(),this.isRange?(t.has("minValue")||t.has("maxValue"))&&(this.minValue=Y(this.minValue,this.min,this.maxValue),this.maxValue=Y(this.maxValue,this.minValue,this.max),this.updateFormValue()):t.has("value")&&(this.value=Y(this.value,this.min,this.max),this.setValue(String(this.value))),(t.has("min")||t.has("max"))&&(this.isRange?(this.minValue=Y(this.minValue,this.min,this.max),this.maxValue=Y(this.maxValue,this.min,this.max)):this.value=Y(this.value,this.min,this.max)),t.has("disabled")&&this.customStates.set("disabled",this.disabled),t.has("disabled")||t.has("readonly")){const e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):this.value=parseFloat(this.getAttribute("value")??String(this.min)),this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){const e=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length;return t=Math.round(t/this.step)*this.step,t=Y(t,this.min,this.max),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){const n=this.localize.dir()==="rtl",i=this.orientation==="vertical",{top:r,right:s,bottom:o,left:l,height:c,width:h}=this.trackBoundingClientRect,u=i?e:t,p=i?{start:r,end:o,size:c}:{start:l,end:s,size:h},b=(i||n?p.end-u:u-p.start)/p.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*b)}handleBlur(){this.isRange?requestAnimationFrame(()=>{const t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){const e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){const e=this.localize.dir()==="rtl",n=t.target;if(this.disabled||this.readonly||this.isRange&&(n===this.thumbMin?this.activeThumb="min":n===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const i=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let r=i;switch(t.key){case"ArrowUp":case(e?"ArrowLeft":"ArrowRight"):t.preventDefault(),r=this.clampAndRoundToStep(i+this.step);break;case"ArrowDown":case(e?"ArrowRight":"ArrowLeft"):t.preventDefault(),r=this.clampAndRoundToStep(i-this.step);break;case"Home":t.preventDefault(),r=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),r=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault();const s=Math.max(i+(this.max-this.min)/10,i+this.step);r=this.clampAndRoundToStep(s);break;case"PageDown":t.preventDefault();const o=Math.min(i-(this.max-this.min)/10,i-this.step);r=this.clampAndRoundToStep(o);break;case"Enter":cd(t,this);return}r!==i&&(this.isRange?(this.activeThumb==="min"?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),this.updateFormValue()):this.value=Y(r,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){const n=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(t,e,n){const i=this.getValueFromCoordinates(t,e),r=n==="min"?this.minValue:this.maxValue;n==="min"?i>this.maxValue?(this.maxValue=i,this.minValue=i):this.minValue=Math.max(this.min,i):i<this.minValue?(this.minValue=i,this.maxValue=i):this.maxValue=Math.min(this.max,i),r!==(n==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(t&&(t.open=!0),e&&(e.open=!1)):this.activeThumb==="max"&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(){if(this.isRange){const t=new FormData;t.append(this.name||"",String(this.minValue)),t.append(this.name||"",String(this.maxValue)),this.setValue(t)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=Y(t,this.min,this.maxValue),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){const t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=Y(t,this.minValue,this.max),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("hint"),n=this.label?!0:!!t,i=this.hint?!0:!!e,r=this.hasSlotController.test("reference"),s=j({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),o=[];if(this.withMarkers)for(let g=this.min;g<=this.max;g+=this.step)o.push(this.getPercentageFromValue(g));const l=f`
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
      `}}};J.formAssociated=!0;J.observeSlots=!0;J.css=[et,un,Iw];a([$("#slider")],J.prototype,"slider",2);a([$("#thumb")],J.prototype,"thumb",2);a([$("#thumb-min")],J.prototype,"thumbMin",2);a([$("#thumb-max")],J.prototype,"thumbMax",2);a([$("#track")],J.prototype,"track",2);a([$("#tooltip")],J.prototype,"tooltip",2);a([d()],J.prototype,"label",2);a([d({attribute:"hint"})],J.prototype,"hint",2);a([d({reflect:!0})],J.prototype,"name",2);a([d({type:Number,attribute:"min-value"})],J.prototype,"minValue",2);a([d({type:Number,attribute:"max-value"})],J.prototype,"maxValue",2);a([d({attribute:"value",reflect:!0,type:Number})],J.prototype,"defaultValue",2);a([A()],J.prototype,"value",1);a([d({type:Boolean,reflect:!0})],J.prototype,"range",2);a([d({type:Boolean})],J.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],J.prototype,"readonly",2);a([d({reflect:!0})],J.prototype,"orientation",2);a([d({reflect:!0})],J.prototype,"size",2);a([d({attribute:"indicator-offset",type:Number})],J.prototype,"indicatorOffset",2);a([d({reflect:!0})],J.prototype,"form",2);a([d({type:Number})],J.prototype,"min",2);a([d({type:Number})],J.prototype,"max",2);a([d({type:Number})],J.prototype,"step",2);a([d({type:Boolean,reflect:!0})],J.prototype,"required",2);a([d({type:Boolean})],J.prototype,"autofocus",2);a([d({attribute:"tooltip-distance",type:Number})],J.prototype,"tooltipDistance",2);a([d({attribute:"tooltip-placement",reflect:!0})],J.prototype,"tooltipPlacement",2);a([d({attribute:"with-markers",type:Boolean})],J.prototype,"withMarkers",2);a([d({attribute:"with-tooltip",type:Boolean})],J.prototype,"withTooltip",2);a([d({attribute:!1})],J.prototype,"valueFormatter",2);J=a([S("wa-slider")],J);var Lw=`:host {
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
`,ot=class extends M{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new ie(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),hr(this,{onMove:(n,i)=>{let r=this.orientation==="vertical"?i:n;this.primary==="end"&&(r=this.size-r),this.snap&&this.snap.split(" ").forEach(o=>{let l;o.endsWith("%")?l=this.size*(parseFloat(o)/100):l=parseFloat(o),e&&this.orientation==="horizontal"&&(l=this.size-l),r>=l-this.snapThreshold&&r<=l+this.snapThreshold&&(r=l)}),this.position=Y(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const n=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&this.orientation==="horizontal"||t.key==="ArrowUp"&&this.orientation==="vertical")&&(e-=n),(t.key==="ArrowRight"&&this.orientation==="horizontal"||t.key==="ArrowDown"&&this.orientation==="vertical")&&(e+=n),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const i=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=i})}this.position=Y(e,0,100)}}handleResize(t){const{width:e,height:n}=t[0].contentRect;this.size=this.orientation==="vertical"?n:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new dd)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",e=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",n=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",i=`
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
        tabindex=${B(this.disabled?void 0:"0")}
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
    `}};ot.css=Lw;a([$(".divider")],ot.prototype,"divider",2);a([d({type:Number,reflect:!0})],ot.prototype,"position",2);a([d({attribute:"position-in-pixels",type:Number})],ot.prototype,"positionInPixels",2);a([d({reflect:!0})],ot.prototype,"orientation",2);a([d({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);a([d()],ot.prototype,"primary",2);a([d()],ot.prototype,"snap",2);a([d({type:Number,attribute:"snap-threshold"})],ot.prototype,"snapThreshold",2);a([I("position")],ot.prototype,"handlePositionChange",1);a([I("positionInPixels")],ot.prototype,"handlePositionInPixelsChange",1);a([I("vertical")],ot.prototype,"handleVerticalChange",1);ot=a([S("wa-split-panel")],ot);var Ow=`:host {
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
`,Le=class extends me{constructor(){super(...arguments),this.hasSlotController=new yt(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,Vs()]}get value(){return this._value??"on"}set value(t){this._value=t}firstUpdated(t){super.firstUpdated(t),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(t){super.willUpdate(t),t.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(t.has("value")||t.has("checked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}setValue(t,e){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(t??"on",e)}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,e=this.hint?!0:!!t;return f`
      <label
        part="base"
        class=${j({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${B(this.value)}
          .checked=${Ci(this.checked)}
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
    `}};Le.shadowRootOptions={...me.shadowRootOptions,delegatesFocus:!0};Le.css=[un,et,Ow];a([$('input[type="checkbox"]')],Le.prototype,"input",2);a([d()],Le.prototype,"title",2);a([d({reflect:!0})],Le.prototype,"name",2);a([d({reflect:!0})],Le.prototype,"value",1);a([d({reflect:!0})],Le.prototype,"size",2);a([d({type:Boolean})],Le.prototype,"disabled",2);a([d({type:Boolean,attribute:!1})],Le.prototype,"checked",2);a([d({type:Boolean,attribute:"checked",reflect:!0})],Le.prototype,"defaultChecked",2);a([d({reflect:!0})],Le.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Le.prototype,"required",2);a([d({attribute:"hint"})],Le.prototype,"hint",2);a([d({attribute:"with-hint",type:Boolean})],Le.prototype,"withHint",2);a([I("defaultChecked")],Le.prototype,"handleDefaultCheckedChange",1);a([I(["checked"])],Le.prototype,"handleStateChange",1);a([I("disabled",{waitUntilFirstUpdate:!0})],Le.prototype,"handleDisabledChange",1);Le=a([S("wa-switch")],Le);var Pw=class extends Event{constructor(t){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Dw=class extends Event{constructor(t){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},zw=`:host {
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
`,vt=class extends M{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ie(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(n=>!["aria-labelledby","aria-controls"].includes(n.attributeName))&&setTimeout(()=>this.setAriaLabels());const e=t.filter(n=>n.target.closest("wa-tab-group")===this);if(e.some(n=>n.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(n=>n.attributeName==="active")){const i=e.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="wa-tab").map(r=>r.target).find(r=>r.active);i&&i.closest("wa-tab-group")===this&&this.setActiveTab(i)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,n)=>{if(e[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const i=this.tabs.find(r=>r.panel===this.active);i&&this.setActiveTab(i)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});n.unobserve(e[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const n=t.target.closest("wa-tab");n?.closest("wa-tab-group")===this&&n!==null&&this.setActiveTab(n,{scrollBehavior:"smooth"})}handleKeyDown(t){const n=t.target.closest("wa-tab");if(n?.closest("wa-tab-group")===this){if(["Enter"," "].includes(t.key)){n!==null&&(this.setActiveTab(n,{scrollBehavior:"smooth"}),t.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.tabs.find(l=>l.matches(":focus")),s=this.localize.dir()==="rtl";let o=null;if(r?.tagName.toLowerCase()==="wa-tab"){if(t.key==="Home")o=this.focusableTabs[0];else if(t.key==="End")o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const l=this.tabs.findIndex(c=>c===r);o=this.findNextFocusableTab(l,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const l=this.tabs.findIndex(c=>c===r);o=this.findNextFocusableTab(l,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(l=>{l.tabIndex=l===o?0:-1}),["top","bottom"].includes(this.placement)&&ea(o,this.nav,"horizontal"),t.preventDefault()}}}}findNextFocusableTab(t,e){let n=null;const i=e==="forward"?1:-1;let r=t+i;for(;t<this.tabs.length;){if(n=this.tabs[r]||null,n===null){e==="forward"?n=this.focusableTabs[0]:n=this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;r+=i}return n}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t.closest("wa-tab-group")===this&&t!==this.activeTab&&!t.disabled){const n=this.activeTab;this.active=t.panel,this.activeTab=t,this.tabs.forEach(i=>{i.active=i===this.activeTab,i.tabIndex=i===this.activeTab?0:-1}),this.panels.forEach(i=>i.active=i.name===this.activeTab?.panel),["top","bottom"].includes(this.placement)&&ea(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(n&&this.dispatchEvent(new Pw({name:n.panel})),this.dispatchEvent(new Dw({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(n=>n.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){const t=this.tabs.find(e=>e.panel===this.active);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return f`
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
    `}};vt.css=zw;a([$(".tab-group")],vt.prototype,"tabGroup",2);a([$(".body")],vt.prototype,"body",2);a([$(".nav")],vt.prototype,"nav",2);a([A()],vt.prototype,"hasScrollControls",2);a([d({reflect:!0})],vt.prototype,"active",2);a([d()],vt.prototype,"placement",2);a([d()],vt.prototype,"activation",2);a([d({attribute:"without-scroll-controls",type:Boolean})],vt.prototype,"withoutScrollControls",2);a([I("active")],vt.prototype,"updateActiveTab",1);a([I("withoutScrollControls",{waitUntilFirstUpdate:!0})],vt.prototype,"updateScrollControls",1);vt=a([S("wa-tab-group")],vt);var Mw=`:host {
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
`,Nw=0,Xt=class extends M{constructor(){super(...arguments),this.attrId=++Nw,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,f`
      <div
        part="base"
        class=${j({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};Xt.css=Mw;a([$(".tab")],Xt.prototype,"tab",2);a([d({reflect:!0})],Xt.prototype,"panel",2);a([d({type:Boolean,reflect:!0})],Xt.prototype,"active",2);a([d({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);a([d({type:Number,reflect:!0})],Xt.prototype,"tabIndex",2);a([I("active")],Xt.prototype,"handleActiveChange",1);a([I("disabled")],Xt.prototype,"handleDisabledChange",1);Xt=a([S("wa-tab")],Xt);var Fw=`:host {
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
`,Uw=0,Ti=class extends M{constructor(){super(...arguments),this.attrId=++Uw,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return f`
      <slot
        part="base"
        class=${j({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};Ti.css=Fw;a([d({reflect:!0})],Ti.prototype,"name",2);a([d({type:Boolean,reflect:!0})],Ti.prototype,"active",2);a([I("active")],Ti.prototype,"handleActiveChange",1);Ti=a([S("wa-tab-panel")],Ti);var Bw=`:host {
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
`,Q=class extends me{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new yt(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Vs()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const t=this.input.value;this.value=t}})}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.checkValidity()}handleChange(t){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleInput(t){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const t=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${t}px`}if(this.input.style.height){const t=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${t}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(t){t.has("resize")&&this.setTextareaDimensions(),super.updated(t),t.has("value")&&this.customStates.set("blank",!this.value)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,n="none"){this.input.setSelectionRange(t,e,n)}setRangeText(t,e,n,i="preserve"){const r=e??this.input.selectionStart,s=n??this.input.selectionEnd;this.input.setRangeText(t,r,s,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!t,i=this.hint?!0:!!e;return f`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${n?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${B(this.name)}
          .value=${Ci(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${B(this.placeholder)}
          rows=${B(this.rows)}
          minlength=${B(this.minlength)}
          maxlength=${B(this.maxlength)}
          autocapitalize=${B(this.autocapitalize)}
          autocorrect=${B(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${B(this.spellcheck)}
          enterkeyhint=${B(this.enterkeyhint)}
          inputmode=${B(this.inputmode)}
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
    `}};Q.css=[Bw,un,et];a([$(".control")],Q.prototype,"input",2);a([$('[part~="base"]')],Q.prototype,"base",2);a([$(".size-adjuster")],Q.prototype,"sizeAdjuster",2);a([d()],Q.prototype,"title",2);a([d({reflect:!0})],Q.prototype,"name",2);a([A()],Q.prototype,"value",1);a([d({attribute:"value",reflect:!0})],Q.prototype,"defaultValue",2);a([d({reflect:!0})],Q.prototype,"size",2);a([d({reflect:!0})],Q.prototype,"appearance",2);a([d()],Q.prototype,"label",2);a([d({attribute:"hint"})],Q.prototype,"hint",2);a([d()],Q.prototype,"placeholder",2);a([d({type:Number})],Q.prototype,"rows",2);a([d({reflect:!0})],Q.prototype,"resize",2);a([d({type:Boolean})],Q.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],Q.prototype,"readonly",2);a([d({reflect:!0})],Q.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Q.prototype,"required",2);a([d({type:Number})],Q.prototype,"minlength",2);a([d({type:Number})],Q.prototype,"maxlength",2);a([d()],Q.prototype,"autocapitalize",2);a([d()],Q.prototype,"autocorrect",2);a([d()],Q.prototype,"autocomplete",2);a([d({type:Boolean})],Q.prototype,"autofocus",2);a([d()],Q.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],Q.prototype,"spellcheck",2);a([d()],Q.prototype,"inputmode",2);a([d({attribute:"with-label",type:Boolean})],Q.prototype,"withLabel",2);a([d({attribute:"with-hint",type:Boolean})],Q.prototype,"withHint",2);a([I("rows",{waitUntilFirstUpdate:!0})],Q.prototype,"handleRowsChange",1);a([I("value",{waitUntilFirstUpdate:!0})],Q.prototype,"handleValueChange",1);Q=a([S("wa-textarea")],Q);function Xe(t,e,n){return t?e(t):n?.(t)}var Vw=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},qw=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}},Hw=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},Ww=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}},jw=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}},Xw=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}},Gw=`:host {
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
`,se=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.dispatchEvent(new Hw);const t=bs(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await gs(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.hidden=!0,this.dispatchEvent(new Vw)}isNestedItem(){const t=this.parentElement;return!!t&&se.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.dispatchEvent(new Ww),this.childrenContainer.hidden=!1;const t=bs(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await gs(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:t,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.style.height="auto",this.dispatchEvent(new qw)}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new Xw)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.dispatchEvent(new jw)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(e=>se.isTreeItem(e)&&(t||!e.disabled)):[]}render(){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",e=!this.loading&&(!this.isLeaf||this.lazy);return f`
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
              ${Xe(this.loading,()=>f` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `)}
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${t?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${Xe(this.selectable,()=>f`
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
                ?checked="${Ci(this.selected)}"
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
    `}};se.css=Gw;a([A()],se.prototype,"indeterminate",2);a([A()],se.prototype,"isLeaf",2);a([A()],se.prototype,"loading",2);a([A()],se.prototype,"selectable",2);a([d({type:Boolean,reflect:!0})],se.prototype,"expanded",2);a([d({type:Boolean,reflect:!0})],se.prototype,"selected",2);a([d({type:Boolean,reflect:!0})],se.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],se.prototype,"lazy",2);a([$("slot:not([name])")],se.prototype,"defaultSlot",2);a([$("slot[name=children]")],se.prototype,"childrenSlot",2);a([$(".item")],se.prototype,"itemElement",2);a([$(".children")],se.prototype,"childrenContainer",2);a([$(".expand-button slot")],se.prototype,"expandButtonSlot",2);a([I("loading",{waitUntilFirstUpdate:!0})],se.prototype,"handleLoadingChange",1);a([I("disabled")],se.prototype,"handleDisabledChange",1);a([I("expanded")],se.prototype,"handleExpandedState",1);a([I("indeterminate")],se.prototype,"handleIndeterminateStateChange",1);a([I("selected")],se.prototype,"handleSelectedChange",1);a([I("expanded",{waitUntilFirstUpdate:!0})],se.prototype,"handleExpandedChange",1);a([I("expanded",{waitUntilFirstUpdate:!0})],se.prototype,"handleExpandAnimation",1);a([I("lazy",{waitUntilFirstUpdate:!0})],se.prototype,"handleLazyChange",1);se=a([S("wa-tree-item")],se);var Kw=class extends Event{constructor(t){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}},Yw=`:host {
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
`;function Yl(t,e=!1){function n(s){const o=s.getChildrenItems({includeDisabled:!1});if(o.length){const l=o.every(h=>h.selected),c=o.every(h=>!h.selected&&!h.indeterminate);s.selected=l,s.indeterminate=!l&&!c}}function i(s){const o=s.parentElement;se.isTreeItem(o)&&(n(o),i(o))}function r(s){for(const o of s.getChildrenItems())o.selected=e?s.selected||o.selected:!o.disabled&&s.selected,r(o);e&&n(s)}r(t),i(t)}var Rn=class extends M{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new ie(this),this.initTreeItem=t=>{t.updateComplete.then(()=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const n=t.querySelector(`[slot="${e}-icon"]`),i=this.getExpandButtonIcon(e);i&&(n===null?t.append(i):n.hasAttribute("data-default")&&n.replaceWith(i))})})},this.handleTreeChanged=t=>{for(const e of t){const n=[...e.addedNodes].filter(se.isTreeItem),i=[...e.removedNodes].filter(se.isTreeItem);n.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),se.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(t){const n=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(n){const i=n.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Yl(t);else if(this.selection==="single"||t.isLeaf){const i=this.getAllTreeItems();for(const r of i)r.selected=r===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const n=this.selectedItems;(e.length!==n.length||n.some(i=>!e.includes(i)))&&Promise.all(n.map(i=>i.updateComplete)).then(()=>{this.dispatchEvent(new Kw({selection:n}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(r=>["input","textarea"].includes(r?.tagName?.toLowerCase())))return;const e=this.getFocusableItems(),n=this.matches(":dir(ltr)"),i=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const r=e.findIndex(c=>c.matches(":focus")),s=e[r],o=c=>{const h=e[Y(c,0,e.length-1)];this.focusItem(h)},l=c=>{s.expanded=c};t.key==="ArrowDown"?o(r+1):t.key==="ArrowUp"?o(r-1):n&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?o(r+1):l(!0):n&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"?!s||s.disabled||s.isLeaf||!s.expanded?o(r-1):l(!1):t.key==="Home"?o(0):t.key==="End"?o(e.length-1):(t.key==="Enter"||t.key===" ")&&(s.disabled||this.selectItem(s))}}handleClick(t){const e=t.target,n=e.closest("wa-tree-item"),i=t.composedPath().some(r=>r?.classList?.contains("expand-button"));!n||n.disabled||e!==this.clickTarget||(i?n.expanded=!n.expanded:this.selectItem(n))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const n of e)n.updateComplete.then(()=>{n.selectable=t});t&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(n=>{n.updateComplete.then(()=>{Yl(n,!0)})}))}get selectedItems(){const t=this.getAllTreeItems(),e=n=>n.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(n=>{if(n.disabled)return!1;const i=n.parentElement?.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||e.has(i))&&e.add(n),!e.has(n)})}render(){return f`
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
    `}};Rn.css=Yw;a([$("slot:not([name])")],Rn.prototype,"defaultSlot",2);a([$("slot[name=expand-icon]")],Rn.prototype,"expandedIconSlot",2);a([$("slot[name=collapse-icon]")],Rn.prototype,"collapsedIconSlot",2);a([d()],Rn.prototype,"selection",2);a([I("selection")],Rn.prototype,"handleSelectionChange",1);Rn=a([S("wa-tree")],Rn);var Zw=`:host {
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
`,at=class extends M{constructor(){super(...arguments),this.localize=new ie(this),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(t){const e=qa(t),n=[];for(const i of e){let r;if(i.endsWith("%")){const s=parseFloat(i.slice(0,-1));if(!isNaN(s))r=Math.max(0,s/100);else continue}else if(r=parseFloat(i),!isNaN(r))r=Math.max(0,r);else continue;n.push(r)}return[...new Set(n)].sort((i,r)=>i-r)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let t=0,e=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let n=1;n<this.availableZoomLevels.length;n++){const i=Math.abs(this.availableZoomLevels[n]-this.zoom);i<e&&(e=i,t=n)}return t}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}updated(t){if(t.has("zoom")&&this.style.setProperty("--zoom",`${this.zoom}`),t.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){const e=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[e]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[e])}}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}const t=this.getCurrentZoomIndex();t<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[t+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}const t=this.getCurrentZoomIndex();t>0&&(this.zoom=this.availableZoomLevels[t-1])}handleLoad(){this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return f`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${B(this.sandbox??void 0)}
          src=${B(this.src??void 0)}
          srcdoc=${B(this.srcdoc??void 0)}
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
    `}};at.css=Zw;a([$("#iframe")],at.prototype,"iframe",2);a([d()],at.prototype,"src",2);a([d()],at.prototype,"srcdoc",2);a([d({type:Boolean})],at.prototype,"allowfullscreen",2);a([d()],at.prototype,"loading",2);a([d()],at.prototype,"referrerpolicy",2);a([d()],at.prototype,"sandbox",2);a([d({type:Number,reflect:!0})],at.prototype,"zoom",2);a([d({attribute:"zoom-levels"})],at.prototype,"zoomLevels",2);a([d({type:Boolean,attribute:"without-controls",reflect:!0})],at.prototype,"withoutControls",2);a([d({type:Boolean,attribute:"without-interaction",reflect:!0})],at.prototype,"withoutInteraction",2);at=a([S("wa-zoomable-frame")],at);var Jw=Object.getOwnPropertyDescriptor,Qw=(t,e,n,i)=>{for(var r=i>1?void 0:i?Jw(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};let ta=class extends Gt{render(){return f`
            <slot></slot>
        `}};ta.styles=qe`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;ta=Qw([S("k-app")],ta);var ev=Object.defineProperty,tv=Object.getOwnPropertyDescriptor,Bi=(t,e,n,i)=>{for(var r=i>1?void 0:i?tv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&ev(e,n,r),r};let In=class extends Gt{constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),Ce(Ft,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[n]=t.split(":");if(e===`${n}:*`)return!0;const i=e.split(":");if(i.length===2){const r=i[1];if(r==="system.editors"||r===".system.editors")return this.isEditor&&t.startsWith(`${n}:`)}return!1}loadContributions(t){const e=D.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[n]=t.split(":"),i=`${n}:*`,r=D.getContributions(i),s=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const l of o){const c=`${n}:${l}`,h=D.getContributions(c);s.push(...h)}}this.contributions=[...r,...s,...e]}contributionCreator(t){if("command"in t){const e=t,n=!!e.showLabel;return f`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${e.icon} label="${e.label}"></wa-icon>
                    ${n?e.label:""}
                </wa-button>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():nn(e)}else return f`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return f`
            <div class="toolbar-items" style=${pt({"justify-content":this.position})}>
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
        `}};In.styles=qe`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;Bi([d()],In.prototype,"position",2);Bi([d({type:Boolean,attribute:"is-editor"})],In.prototype,"isEditor",2);Bi([d({attribute:!1})],In.prototype,"partToolbarContent",2);Bi([d({attribute:!1})],In.prototype,"partToolbarRenderer",2);Bi([A()],In.prototype,"contributions",2);In=Bi([S("k-toolbar")],In);const xn=()=>new nv;class nv{}const _o=new WeakMap,kn=Pi(class extends Yh{render(t){return N}update(t,[e]){const n=e!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),N}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=_o.get(e);n===void 0&&(n=new WeakMap,_o.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?_o.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var iv=Object.defineProperty,rv=Object.getOwnPropertyDescriptor,Vi=(t,e,n,i)=>{for(var r=i>1?void 0:i?rv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&iv(e,n,r),r};let Ln=class extends Gt{constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=xn(),this.dropdownRef=xn()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),Ce(Ft,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[n]=t.split(":");if(e===`${n}:*`)return!0;const i=e.split(":");if(i.length===2){const r=i[1];if(r==="system.editors"||r===".system.editors")return this.isEditor&&t.startsWith(`${n}:`)}return!1}loadContributions(t){const e=D.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[n]=t.split(":"),i=`${n}:*`,r=D.getContributions(i),s=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const l of o){const c=`${n}:${l}`,h=D.getContributions(c);s.push(...h)}}this.contributions=[...r,...s,...e]}getElementFromPoint(t,e){let n=document.elementFromPoint(t,e);if(!n)return null;for(;n;){const i=n.shadowRoot;if(i){const r=i.elementFromPoint(t,e);if(r&&r!==n){n=r;continue}}break}return n}triggerClickUnderCursor(t){const e=this.getElementFromPoint(t.clientX,t.clientY);if(e){const n=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:t.clientX,clientY:t.clientY,screenX:t.screenX,screenY:t.screenY,button:0,buttons:0,detail:1,which:1});e.dispatchEvent(n)}}show(t,e){e&&this.triggerClickUnderCursor(e),this.position=t,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(t,e){return async()=>{this.executeCommand(t,e||{})}}renderContribution(t){if("command"in t){const e=t;return f`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(e.command,e.params)}
                    ?disabled="${e.disabled?.get()}">
                    ${e.icon?f`<wa-icon slot="icon" name=${e.icon}></wa-icon>`:""}
                    ${e.label}
                </wa-dropdown-item>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():nn(e)}return N}render(){if(!this.isOpen)return N;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():N;return f`
            <wa-dropdown 
                ${kn(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${kn(this.anchorRef)}
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
        `}};Ln.styles=qe`
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
    `;Vi([d({type:Boolean,attribute:"is-editor"})],Ln.prototype,"isEditor",2);Vi([d({attribute:!1})],Ln.prototype,"partContextMenuRenderer",2);Vi([A()],Ln.prototype,"contributions",2);Vi([A()],Ln.prototype,"isOpen",2);Vi([A()],Ln.prototype,"position",2);Ln=Vi([S("k-contextmenu")],Ln);class Ha extends Gt{}const Zl=(t,e,n)=>{const i=new Map;for(let r=e;r<=n;r++)i.set(t[r],r);return i},sv=Pi(class extends Di{constructor(t){if(super(t),t.type!==_t.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let i;n===void 0?n=e:e!==void 0&&(i=e);const r=[],s=[];let o=0;for(const l of t)r[o]=i?i(l,o):o,s[o]=n(l,o),o++;return{values:s,keys:r}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,i]){const r=jh(t),{values:s,keys:o}=this.dt(e,n,i);if(!Array.isArray(r))return this.ut=o,s;const l=this.ut??=[],c=[];let h,u,p=0,g=r.length-1,b=0,w=s.length-1;for(;p<=g&&b<=w;)if(r[p]===null)p++;else if(r[g]===null)g--;else if(l[p]===o[b])c[b]=Dn(r[p],s[b]),p++,b++;else if(l[g]===o[w])c[w]=Dn(r[g],s[w]),g--,w--;else if(l[p]===o[w])c[w]=Dn(r[p],s[w]),Xi(t,c[w+1],r[p]),p++,w--;else if(l[g]===o[b])c[b]=Dn(r[g],s[b]),Xi(t,r[p],r[g]),g--,b++;else if(h===void 0&&(h=Zl(o,b,w),u=Zl(l,p,g)),h.has(l[p]))if(h.has(l[g])){const k=u.get(o[b]),L=k!==void 0?r[k]:null;if(L===null){const C=Xi(t,r[p]);Dn(C,s[b]),c[b]=C}else c[b]=Dn(L,s[b]),Xi(t,r[p],L),r[k]=null;b++}else po(r[g]),g--;else po(r[p]),p++;for(;b<=w;){const k=Xi(t,c[w+1]);Dn(k,s[b]),c[b++]=k}for(;p<=g;){const k=r[p++];k!==null&&po(k)}return this.ut=o,kc(t,c),nt}}),ov="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",av="/assets/jupyter-C78Cpfql.svg",lv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";new MutationObserver(t=>{for(const{addedNodes:e}of t)for(const n of e)n.nodeType===Node.ELEMENT_NODE&&cv(n)});async function cv(t){const e=t instanceof Element?t.tagName.toLowerCase():"",n=e?.startsWith("wa-"),i=[...t.querySelectorAll(":not(:defined)")].map(o=>o.tagName.toLowerCase()).filter(o=>o.startsWith("wa-"));n&&!customElements.get(e)&&i.push(e);const r=[...new Set(i)],s=await Promise.allSettled(r.map(o=>dv(o)));for(const o of s)o.status==="rejected"&&console.warn(o.reason);await new Promise(requestAnimationFrame),t.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function dv(t){if(customElements.get(t))return Promise.resolve();const e=t.replace(/^wa-/i,""),n=nf(`components/${e}/${e}.js`);return new Promise((i,r)=>{import(n).then(()=>i()).catch(()=>r(new Error(`Unable to autoload <${t}> from ${n}`)))})}mf("k",{resolver:t=>new URL(Object.assign({"../icons/js.svg":ov,"../icons/jupyter.svg":av,"../icons/python.svg":lv})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});var hv=Object.defineProperty,uv=Object.getOwnPropertyDescriptor,Ir=(t,e,n,i)=>{for(var r=i>1?void 0:i?uv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&hv(e,n,r),r};let Qn=class extends Ar{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const t=this.name.trim().split(/ +/),e=t.pop(),n=t.pop();return f`
            <wa-icon library="${n||N}" variant="${this.variant||N}"
                         family="${this.family||N}" name=${e} label="${this.label||this.name||N}"></wa-icon>`}};Qn.styles=qe`
        :host {
            display: contents;
        }
    `;Ir([d()],Qn.prototype,"name",2);Ir([d()],Qn.prototype,"family",2);Ir([d()],Qn.prototype,"variant",2);Ir([d()],Qn.prototype,"label",2);Qn=Ir([S("k-icon")],Qn);var pv=Object.defineProperty,fv=(t,e,n,i)=>{for(var r=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(e,n,r)||r);return r&&pv(e,n,r),r};class mt extends Ha{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return N}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return N}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,wr.set(null),wr.set(this),gt.set(null),gt.set(this)}}fv([d()],mt.prototype,"dirty");class mv{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,Uo.set(this.updateCounter)}run(e,n){const i=this.createProgressMonitor(e);try{this.tasks.push(i),this.notifyUpdate(),n(i)}finally{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()}}async runAsync(e,n){const i=this.createProgressMonitor(e);return this.tasks.push(i),this.notifyUpdate(),n(i).finally(()=>{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()})}createProgressMonitor(e){const n={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(n,{set:(i,r,s)=>(i[r]=s,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const Ys=new mv;He.put("taskService",Ys);const gv=hn("EsmShService"),je=class je{isEsmShUrl(e){try{const n=new URL(e);return n.hostname==="esm.sh"||n.hostname==="raw.esm.sh"}catch{return!1}}isSourceIdentifier(e){return this.isEsmShUrl(e)||this.isHttpUrl(e)?!1:this.parseSource(e)!==null}isHttpUrl(e){try{const n=new URL(e);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}parseSource(e){return!e||typeof e!="string"||(e=e.trim(),this.isHttpUrl(e))?null:e.startsWith(je.GITHUB_PREFIX)?this.parseGitHubSource(e):e.startsWith(je.JSR_PREFIX)?this.parseJsrSource(e):e.startsWith(je.PR_PREFIX)?this.parsePrSource(e):this.parseNpmSource(e)}parseGitHubSource(e){const i=e.substring(je.GITHUB_PREFIX.length).split("/");if(i.length<2)return null;const r=i[0],s=i[1];let o,l,c;const h=s.match(/^(.+?)(@(.+))?$/);return h?(o=h[1],l=h[3],i.length>2&&(c=i.slice(2).join("/")),{type:"github",owner:r,repo:o,version:l,path:c}):null}parseJsrSource(e){const n=e.substring(je.JSR_PREFIX.length);if(!n.startsWith("@"))return null;const i=n.split("/");if(i.length<2)return null;const r=i[0],s=i[1];let o,l,c;const h=s.match(/^(.+?)(@(.+))?$/);return h?(o=`${r}/${h[1]}`,l=h[3],i.length>2&&(c=i.slice(2).join("/")),{type:"jsr",package:o,version:l,path:c}):null}parsePrSource(e){const i=e.substring(je.PR_PREFIX.length).split("/");if(i.length<2)return null;const r=i[0],s=i[1];let o,l;const c=s.match(/^(.+?)@(.+)$/);return c?(o=c[1],l=c[2]):o=s,{type:"pr",owner:r,repo:o,commit:l}}parseNpmSource(e){const n=e.split("/"),i=n[0];let r,s,o;const l=i.match(/^(.+?)(@(.+))?$/);return l?(r=l[1],s=l[3],n.length>1&&(o=n.slice(1).join("/")),{type:"npm",package:r,version:s,path:o}):null}buildEsmShUrl(e,n){let i=je.ESM_SH_BASE;switch(e.type){case"npm":i+=`/${e.package}`,e.version&&(i+=`@${e.version}`),e.path&&(i+=`/${e.path}`);break;case"github":i+=`/${je.GITHUB_PREFIX}${e.owner}/${e.repo}`,e.version&&(i+=`@${e.version}`),e.path&&(i+=`/${e.path}`);break;case"jsr":i+=`/${je.JSR_PREFIX}${e.package}`,e.version&&(i+=`@${e.version}`),e.path&&(i+=`/${e.path}`);break;case"pr":i+=`/${je.PR_PREFIX}${e.owner}/${e.repo}`,e.commit&&(i+=`@${e.commit}`);break}const r=[];if(n?.deps){const s=Object.entries(n.deps).map(([o,l])=>`${o}@${l}`).join(",");r.push(`deps=${encodeURIComponent(s)}`)}return n?.target&&r.push(`target=${encodeURIComponent(n.target)}`),n?.dev&&r.push("dev"),n?.bundle===!1?r.push("bundle=false"):n?.bundle===!0&&r.push("bundle"),r.length>0&&(i+=`?${r.join("&")}`),i}normalizeToEsmSh(e,n){if(this.isEsmShUrl(e)||this.isHttpUrl(e))return e;const i=this.parseSource(e);return i?this.buildEsmShUrl(i,n):(gv.warn(`Could not parse source identifier: ${e}`),e)}extractPackageName(e){const n=this.parseSource(e);if(!n)return null;switch(n.type){case"npm":return n.package||null;case"github":return`${n.owner}/${n.repo}`;case"jsr":return n.package||null;case"pr":return`${n.owner}/${n.repo}`}}};je.ESM_SH_BASE="https://esm.sh",je.GITHUB_PREFIX="gh/",je.JSR_PREFIX="jsr/",je.PR_PREFIX="pr/";let na=je;const Hn=new na,or="events/extensionsregistry/extensionsConfigChanged",er="extensions",Jl="extensions.external";class bv{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,Ce(wn,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then(async()=>{const e=this.extensionsSettings?.filter(n=>this.isEnabled(n.id)).map(n=>this.load(n.id).catch(i=>{Ae("Extension could not be loaded: "+i.message)}))||[];await Promise.all(e)})})}async loadPersistedExternalExtensions(){try{const e=await le.get(Jl);e&&Array.isArray(e)&&(e.forEach(n=>{this.extensions[n.id]=n}),ee.debug(`Loaded ${e.length} persisted external extensions`))}catch(e){ee.error(`Failed to load persisted external extensions: ${e}`)}}async savePersistedExternalExtensions(){try{const e=Object.values(this.extensions).filter(n=>n.external);await le.set(Jl,e)}catch(e){ee.error(`Failed to save persisted external extensions: ${e}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await le.get(er),this.extensionsSettings||(await le.set(er,[]),this.extensionsSettings=await le.get(er)),te(or,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e,e.external&&this.savePersistedExternalExtensions().catch(n=>{ee.error(`Failed to persist external extension: ${n}`)}),te(or,this.extensionsSettings)}getExtensions(){return Object.values(this.extensions)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(n=>n.id===e&&n.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,n=!1){this.isEnabled(e)||(ee.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,n)}).catch(i=>{ee.error(`Could not load extension: ${e}: ${i}`)}))}async load(e,n=[]){if(this.loadedExtensions.has(e))return;const i=this.loadingPromises.get(e);if(i)return i;if(n.includes(e)){const o=[...n,e].join(" → ");throw new Error(`Circular dependency detected: ${o}`)}const r=this.extensions[e];if(!r)throw new Error("Extension not found: "+e);const s=(async()=>{try{if(r.dependencies&&r.dependencies.length>0){ee.debug(`Loading dependencies for ${e}: ${r.dependencies.join(", ")}`);const l=[...n,e];for(const c of r.dependencies)await this.load(c,l),this.isEnabled(c)||(await this.updateEnablementAsync(c,!0,!1),ee.debug(`Auto-enabled dependency: ${c}`))}const o=await Ys.runAsync("Loading extension: "+r.name,async()=>{if(r.loader)return r.loader();if(r.url){let l=r.url;return Hn.isSourceIdentifier(r.url)&&(l=Hn.normalizeToEsmSh(r.url),ee.debug(`Normalized extension URL: ${r.url} -> ${l}`)),import(l)}});if(this.loadedExtensions.add(e),o?.default instanceof Function){ee.debug(`Executing extension function for: ${e}`);try{o?.default(Mi.getProxy()),ee.debug(`Extension function executed successfully: ${e}`)}catch(l){throw ee.error(`Error executing extension function for ${e}: ${l}`),l}}else ee.warn(`Extension ${e} does not export a default function`);ee.debug(`Extension loaded: ${e}`)}catch(o){throw this.loadedExtensions.delete(e),o}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,s),s}disable(e,n=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,n)}updateEnablement(e,n,i){this.checkExtensionsConfig().then(()=>{const r=this.extensionsSettings?.find(s=>s.id==e);r?r.enabled=n:this.extensionsSettings?.push({id:e,enabled:n}),le.set(er,this.extensionsSettings).then(()=>{if(i){const s=this.extensions[e];en(n?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}te(or,this.extensionsSettings)})})}async updateEnablementAsync(e,n,i){await this.checkExtensionsConfig();const r=this.extensionsSettings?.find(s=>s.id==e);if(r?r.enabled=n:this.extensionsSettings?.push({id:e,enabled:n}),await le.set(er,this.extensionsSettings),i){const s=this.extensions[e];en(n?s.name+" enabled.":s.name+" disabled  - Please restart to take effect")}te(or,this.extensionsSettings)}}ee.debug("ExtensionRegistry initializing...");const F=new bv;He.put("extensionRegistry",F);ee.debug("ExtensionRegistry initialized");const U=hn("AppLoader");function zn(t){return t instanceof Error?t.message:String(t)}function wv(t){try{const n=new URL(t).pathname.split("/").filter(Boolean);return n.length>0?n[n.length-1]:void 0}catch{const e=t.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function vv(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const n=e[0];if(!(!n||n==="index.html"||n.endsWith(".html")))return n}const fr=class fr{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(e,n){this.apps.has(e.id)&&U.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),U.info(`Registered app: ${e.name} (${e.id}) v${e.version}`),n?.defaultAppId&&(this.defaultAppId=n.defaultAppId),n?.container&&(this.container=n.container),n?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(e){this.systemRequiredExtensions.add(e)}async loadExtensionFromUrl(e){U.info(`Loading extension from URL: ${e}...`);try{let n=e,i=`Extension from ${e}`;if(Hn.isSourceIdentifier(e)){const o=Hn.extractPackageName(e);o&&(i=`Extension: ${o}`),n=Hn.normalizeToEsmSh(e),U.debug(`Converted source identifier to esm.sh URL: ${e} -> ${n}`)}const r=`url:${n}`;if(F.isEnabled(r)){U.info(`Extension from URL ${n} is already enabled`);return}const s={id:r,name:i,description:`Extension loaded from: ${e}`,url:n};F.registerExtension(s),U.info(`Registered extension from URL: ${r}`),F.enable(r,!1),U.info(`Successfully enabled extension from URL: ${n}`)}catch(n){throw U.error(`Failed to load extension from URL ${e}: ${zn(n)}`),n}}async loadAppFromUrl(e){U.info(`Loading app from URL: ${e}...`);try{const n=await import(e);if(!n.default)throw new Error(`Module at ${e} does not have a default export`);const i=n.default;if(!i.id||!i.name||!i.version)throw new Error(`Module at ${e} does not export a valid AppDefinition`);return U.info(`Successfully loaded app definition from URL: ${i.name} (${i.id})`),i}catch(n){throw U.error(`Failed to load app from URL ${e}: ${zn(n)}`),n}}async start(){if(this.started){U.debug("AppLoader already started");return}this.started=!0,U.info("Starting AppLoader...");const e=new URLSearchParams(window.location.search),n=e.get("app"),i=e.get("appId"),r=vv(),s=this.apps.size;let o;if(n&&(o=wv(n),o&&U.info(`Extracted app ID from URL path: ${o}`)),r&&U.info(`Extracted app ID from current page path: ${r}`),n)try{U.info(`URL parameter 'app' found: ${n}, attempting to load extension or app`);try{await this.loadExtensionFromUrl(n),U.info(`Successfully loaded extension from URL: ${n}`)}catch(c){U.info(`Failed to load as extension, trying as app definition: ${zn(c)}`);try{const h=await this.loadAppFromUrl(n);this.registerApp(h),await this.loadApp(h.id,this.container),U.info(`Successfully loaded app from URL: ${n}`);return}catch(h){throw U.error(`Failed to load from URL as both extension and app: ${zn(h)}`),h}}}catch(c){U.error(`Failed to load from URL parameter, falling back to default app: ${zn(c)}`)}const l=await this.selectAppToLoad({appIdFromUrl:i,appIdFromPath:r,appIdFromAppUrl:o,appsBeforeExtension:s});if(!l)throw new Error("No apps registered");await this.loadApp(l,this.container)}async loadApp(e,n){const i=this.apps.get(e);if(!i)throw new Error(`App '${e}' not found. Make sure it's registered.`);U.info(`Loading app: ${i.name}...`),this.currentApp&&(U.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(U.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(s=>{F.disable(s)}))),i.contributions&&(U.info("Registering app contributions..."),i.contributions.ui&&(i.contributions.ui.forEach(s=>{const o=s.target;o&&D.registerContribution(o,s)}),U.info(`Registered ${i.contributions.ui.length} UI contributions`)),i.contributions.extensions&&(i.contributions.extensions.forEach(s=>{F.registerExtension(s)}),U.info(`Registered ${i.contributions.extensions.length} app extensions`)));const r=new Set(i.extensions||[]);this.systemRequiredExtensions.forEach(s=>r.add(s)),i.extensions=Array.from(r),i.extensions.length>0&&(U.info(`Enabling ${i.extensions.length} extensions...`),i.extensions.forEach(s=>{F.enable(s)})),i.initialize&&(U.info(`Initializing ${i.name}...`),await i.initialize()),this.currentApp=i,U.info(`App ${i.name} loaded successfully`),this.updateDocumentMetadata(i),n&&this.renderApp(n),window.dispatchEvent(new CustomEvent("app-loaded",{detail:{appId:i.id}}))}updateDocumentMetadata(e){if(document.title=e.name,e.metadata?.favicon){const n=e.metadata.favicon;let i=document.querySelector("link[rel*='icon']");i||(i=document.createElement("link"),i.rel="icon",document.head.appendChild(i)),i.type="image/svg+xml",i.href=n}}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const n=this.currentApp.render?this.currentApp.render():f`<k-standard-app></k-standard-app>`;Ct(n,e),U.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}async getPreferredAppId(){try{return await le.get(fr.PREFERRED_APP_KEY)}catch(e){U.debug(`Failed to get preferred app ID from settings: ${zn(e)}`);return}}async setPreferredAppId(e){if(!this.apps.has(e))throw new Error(`App '${e}' not found. Make sure it's registered.`);try{await le.set(fr.PREFERRED_APP_KEY,e),this.defaultAppId=e,U.info(`Set preferred app to: ${e}`)}catch(n){throw U.error(`Failed to persist preferred app ID: ${zn(n)}`),n}}async selectAppToLoad(e){const{appIdFromUrl:n,appIdFromPath:i,appIdFromAppUrl:r,appsBeforeExtension:s}=e;if(n){if(this.apps.has(n))return U.info(`Loading app specified by URL parameter 'appId': ${n}`),n;U.warn(`App ID '${n}' from URL parameter not found`)}if(i){if(this.apps.has(i))return U.info(`Loading app from URL path: ${i}`),i;U.debug(`App ID '${i}' from URL path not found, continuing search`)}if(r&&this.apps.has(r))return U.info(`Loading app using ID extracted from app URL path: ${r}`),r;if(this.apps.size>s){const c=Array.from(this.apps.values()).slice(s);if(c.length>0){const h=c[0];return U.info(`Loading app registered by extension: ${h.name} (${h.id})`),h.id}}const o=await this.getPreferredAppId();if(o&&this.apps.has(o))return U.info(`Loading preferred app from settings: ${o}`),o;if(this.defaultAppId){if(this.apps.has(this.defaultAppId))return this.defaultAppId;U.warn(`Default app '${this.defaultAppId}' not found`)}const l=this.getRegisteredApps();if(l.length>0){const c=l[0];return U.info(`Loading first registered app: ${c.name} (${c.id})`),c.id}}};fr.PREFERRED_APP_KEY="preferredAppId";let ia=fr;const ye=new ia;He.put("appLoaderService",ye);var yv=Object.defineProperty,xv=Object.getOwnPropertyDescriptor,Ad=(t,e,n,i)=>{for(var r=i>1?void 0:i?xv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&yv(e,n,r),r};let Cs=class extends Ha{constructor(){super(...arguments),this.contributions=[],this.tabGroup=xn(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(e),this.setupToolbarResizeObserver(e)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&(this.updateToolbarFromComponent(n),requestAnimationFrame(()=>this.updateToolbarHeightVariable(n)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&this.updateContextMenuFromComponent(n)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,n=e.closest("wa-tab");if(n){const o=n.getAttribute("panel");if(o){const l=this.getTabPanel(o);if(l){const c=l.querySelector(".tab-content");if(c&&c.firstElementChild){const h=c.firstElementChild;h instanceof mt&&gt.set(h)}}}return}const i=e.closest("wa-scroller.tab-content");if(!i)return;const r=i.closest("wa-tab-panel");if(!r)return;const s=r.querySelector(".tab-content");if(s&&s.firstElementChild){const o=s.firstElementChild;o instanceof mt&&gt.set(o)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,n=e.target.closest("wa-scroller.tab-content");if(!n)return;e.preventDefault();const i=n.closest("wa-tab-panel");i&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(i);const r=i.querySelector("k-contextmenu");r&&r.show({x:e.clientX,y:e.clientY},e)})}))}),Ce(Ft,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===bn;this.contributions.forEach(n=>{const i=this.getTabPanel(n.name);if(!i)return;const r=i.querySelector(".tab-content");if(r&&r.firstElementChild){const s=r.firstElementChild;s instanceof mt&&(s.tabContribution=n,s.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(i))})}}has(t){return this.tabGroup.value?!!this.getTabPanel(t):!1}activate(t){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(t){if(this.contributions.find(n=>n.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const n=this.getTabPanel(t.name);if(n){const i=n.querySelector(".tab-content");if(i&&i.firstElementChild){const r=i.firstElementChild;r instanceof mt&&(r.tabContribution=t,r.isEditor=this.containerId===bn)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(n),this.updateToolbarHeightVariable(n),this.setupToolbarResizeObserver(n)})}})}handleTabAuxClick(t,e){t.button===ya.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await Bs("Unsaved changes will be lost: Do you really want to close?"))return;const n=this.getTabPanel(e);if(!n)return;const i=this.contributions.find(s=>s.name===e);if(!i)return;this.cleanupTabInstance(n);const r=this.contributions.indexOf(i);r>-1&&this.contributions.splice(r,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:n})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=D.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=this.resizeObservers.get(t);e&&(e.disconnect(),this.resizeObservers.delete(t));const n=t.querySelector(".tab-content");if(n&&n.firstElementChild){const i=n.firstElementChild;"close"in i&&typeof i.close=="function"&&i.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`):null}getTab(t){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`):null}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof mt)||!n.renderToolbar)return;const i=t.querySelector("k-toolbar");i&&(i.partToolbarRenderer=()=>n.renderToolbar(),i.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof mt)||!n.renderContextMenu)return;const i=t.querySelector("k-contextmenu");i&&(i.partContextMenuRenderer=()=>n.renderContextMenu(),i.requestUpdate())}updateToolbarHeightVariable(t){const e=t.querySelector(".tab-toolbar");if(!e)return;const n=e.offsetHeight;t.style.setProperty("--toolbar-height",`${n}px`)}setupToolbarResizeObserver(t){if(this.resizeObservers.has(t))return;const e=t.querySelector(".tab-toolbar");if(!e)return;const n=new ResizeObserver(()=>{this.updateToolbarHeightVariable(t)});n.observe(e),this.resizeObservers.set(t,n)}render(){const t=ye.getCurrentApp();return f`
            <wa-tab-group ${kn(this.tabGroup)}>
                ${Xe(this.contributions.length===0,()=>f`
                        <div class="empty-state">
                            ${Xe(t,()=>f`
                                    <div class="empty-content">
                                        <h2 class="empty-title">${t.name}</h2>
                                        ${Xe(t.description,()=>f`<p class="empty-description">${t.description}</p>`)}
                                    </div>
                                `,()=>f`
                                    <wa-icon name="folder-open" class="empty-icon"></wa-icon>
                                `)}
                        </div>
                    `,()=>sv(this.contributions,e=>e.name,e=>f`
                            <wa-tab panel="${e.name}"
                                    @auxclick="${n=>this.handleTabAuxClick(n,e)}">
                                <k-icon name="${e.icon}"></k-icon>
                                ${e.label}
                                ${Xe(e.closable,()=>f`
                                    <wa-icon name="xmark" label="Close"  @click="${n=>this.closeTab(n,e.name)}"></wa-icon>
                                `)}
                            </wa-tab>
                            <wa-tab-panel name="${e.name}">
                                <k-toolbar id="toolbar:${e.editorId??e.name}" 
                                           class="tab-toolbar"
                                           ?is-editor="${this.containerId===bn}"></k-toolbar>
                                <wa-scroller class="tab-content" orientation="vertical">
                                    ${e.component?e.component(e.name):N}
                                </wa-scroller>
                                <k-contextmenu id="contextmenu:${e.name}"
                                               ?is-editor="${this.containerId===bn}"></k-contextmenu>
                            </wa-tab-panel>
                        `))}
            </wa-tab-group>
        `}};Cs.styles=qe`
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
    `;Ad([A()],Cs.prototype,"contributions",2);Cs=Ad([S("k-tabs")],Cs);var kv=Object.defineProperty,Ev=Object.getOwnPropertyDescriptor,Lr=(t,e,n,i)=>{for(var r=i>1?void 0:i?Ev(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&kv(e,n,r),r};let Ri=class extends Gt{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=t=>{if(!this.resizing)return;const n=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,i=[...this.resizing.startSizes];i[this.resizing.handleIndex]+=n,i[this.resizing.handleIndex+1]-=n;const r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=r*.05;if(i[this.resizing.handleIndex]>=s&&i[this.resizing.handleIndex+1]>=s){this.resizing.currentSizes=i;const o=i.map((l,c)=>{const u=`${(l/r*100).toFixed(2)}%`;return c===i.length-1?u:`${u} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=o:this.style.gridTemplateRows=o}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const t=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/t*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,n)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${n*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${n*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const n=this.orientation==="horizontal"?t.clientX:t.clientY,i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,r=this.gridSizes.map(s=>s.endsWith("%")?parseFloat(s)/100*i:(s.endsWith("px"),parseFloat(s)));this.resizing={handleIndex:e,startPos:n,startSizes:r},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return N;const t=this.gridSizes.flatMap((e,n)=>n===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",f`
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
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Lr([d()],Ri.prototype,"orientation",2);Lr([d()],Ri.prototype,"sizes",2);Lr([A()],Ri.prototype,"gridSizes",2);Lr([A()],Ri.prototype,"gridChildren",2);Ri=Lr([S("k-resizable-grid")],Ri);const It="events/filesys/workspaceChanged",Ii="events/filesys/workspaceConnected";class Ss{constructor(){this.state={}}getWorkspacePath(){const e=[];let n=this;for(;n;)e.push(n.getName()),n=n.getParent();return e.reverse(),e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const n=e.getParent();if(n)e=n;else break}return e}}var Cv=(t=>(t[t.TEXT=0]="TEXT",t[t.BINARY=1]="BINARY",t))(Cv||{});class dn extends Ss{}class wi extends Ss{}class Ql extends dn{constructor(e,n){super(),this.fileHandle=e,this.parent=n}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const n=await this.fileHandle.getFile();return!e||e?.contentType==0?await n.text():e?.encoding==0||e?.uri?URL.createObjectURL(n):e?.blob?n:n.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(e,n){const i=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(i);else{const r=i.getWriter();try{await r.write(e)}finally{await r.close()}}}async copyTo(e){const n=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(n)}async rename(e){const n=this.getParent();if(!n)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(i){throw i.name==="NotAllowedError"||i.message?.includes("not allowed")||i.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):i}await n.listChildren(!0),te(It,this.getWorkspace())}}}class Qt extends wi{constructor(e,n){super(),this.dirHandle=e,this.parent=n}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const n={};try{for await(const i of this.dirHandle.values()){const s=i.kind==="file"?new Ql(i,this):new Qt(i,this);n[s.getName()]=s}}catch(i){if(i.name==="NotFoundError")return this.files={},[];throw i}return this.files=n,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,n){if(!e)throw new Error("No path provided");const i=e.split("/");let r=this,s=!1;try{for(let o=0;o<i.length;o++){let l=i[o];if(l&&(l=l.trim()),!l)break;if(r instanceof Qt){if(await r.listChildren(),!r.files)return null;const c=r.files[l];if(c)r=c;else if(n?.create)if(s=!0,o<i.length-1)try{const h=await r.dirHandle.getDirectoryHandle(l,{create:!0}),u=new Qt(h,r);r.files[l]=u,r=u,r instanceof Qt&&await r.listChildren();continue}catch(h){throw h.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${i.slice(0,o+1).join("/")}`):h}else try{const h=await r.dirHandle.getFileHandle(l,{create:!0}),u=new Ql(h,r);return r.files[l]=u,u}catch(h){throw h.name==="NotFoundError"?new Error(`File not found or not accessible: ${i.join("/")}`):h}else return null}}}finally{s&&te(It,this.getWorkspace())}return r}touch(){te(It,this.getWorkspace())}async delete(e,n=!0){if(!e){const i=this.getParent();return i instanceof Qt&&(await i.listChildren(),i.files&&delete i.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,i?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:n}).then(async()=>{this.files&&delete this.files[e],te(It,this.getWorkspace())})}async copyTo(e){for(const n of await this.listChildren()){const i=[e,n.getName()].join("/");await n.copyTo(i)}}async rename(e){const n=this.getParent();if(!n)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(i){throw i.name==="NotAllowedError"||i.message?.includes("not allowed")||i.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):i}await n.listChildren(!0),te(It,this.getWorkspace())}}}class Sv{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(e=>{e&&te(Ii,e)})}registerContribution(e){this.contributions.set(e.type,e),console.log(`Workspace contribution registered: ${e.name} (${e.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const e=await Et.getObject("workspace_data");if(!e)return;const n=this.contributions.get(e.type);if(!n){console.warn(`No contribution found for workspace type: ${e.type}`);return}try{if(n.restore){const i=await n.restore(e.data);return i&&(this.currentType=e.type),i}}catch(i){console.error(`Failed to restore workspace of type ${e.type}:`,i)}}async connectWorkspace(e){const n=Array.from(this.contributions.values()).find(o=>o.canHandle(e));if(!n)throw new Error("No workspace contribution can handle this input");const i=await n.connect(e),r=n.persist?await n.persist(i):e,s={type:n.type,data:r};return await Et.persistObject("workspace_data",s),this.currentType=n.type,this.workspace=Promise.resolve(i),te(Ii,i),i}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await Et.persistObject("workspace_data",null),await Et.persistObject("workspace",null)}}const xt=new Sv;He.put("workspaceService",xt);xt.registerContribution({type:"filesystem",name:"Local File System",canHandle(t){return t&&"kind"in t&&t.kind==="directory"},async connect(t){return new Qt(t)},async restore(t){if(t&&"kind"in t&&t.kind==="directory")return new Qt(t,void 0)},async persist(t){return t instanceof Qt?t.getHandle():null}});const ec=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);class $v{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,this.cachedIconContributions=null,Ce(Ii,()=>{}),Ce(Ft,e=>{e.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const e=D.getContributions("system.icons");return this.cachedIconContributions=[...e].sort((n,i)=>{const r=n.priority??0,s=i.priority??0;return s!==r?s-r:n.label.localeCompare(i.label)}),this.cachedIconContributions}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const n=s=>{const o=s.detail;o&&Array.from(o.querySelectorAll("*")).filter(c=>c instanceof mt).forEach(c=>{gt.set(c),c.isEditor&&Lt.set(c)})};e.addEventListener("tab-shown",n);const i=s=>{const o=s.detail;Array.from(o.querySelectorAll("*")).filter(c=>c instanceof mt).forEach(c=>{gt.get()==c&&gt.set(null),Lt.get()==c&&Lt.set(null)})};e.addEventListener("tab-closed",i);const r=s=>{const l=s.closest("wa-tab-panel").getAttribute("name");e.markDirty(l,s.isDirty())};this.signalCleanup=xi(wr,r)}registerEditorInputHandler(e){this.editorInputHandlers.push({definition:e,initialized:!1}),this.editorInputHandlers.sort((n,i)=>{const r=n.definition.ranking??0;return(i.definition.ranking??0)-r})}async ensureHandlerInitialized(e){const n=e.definition;!n.lazyInit||e.initialized||(e.lazyInitPromise||(e.lazyInitPromise=Promise.resolve(n.lazyInit()).then(()=>{e.initialized=!0,e.lazyInitPromise=void 0}).catch(i=>{throw e.lazyInitPromise=void 0,i})),await e.lazyInitPromise)}async handleInput(e){for(let n=0;n<this.editorInputHandlers.length;n++){const i=this.editorInputHandlers[n],r=i.definition;if(r.canHandle(e))return await this.ensureHandlerInitialized(i),await r.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${bn}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const n=this.getEditorArea();if(!n){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(n),n.has(e.key)){n.activate(e.key);return}n.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}getFileIcon(e){const n=e.includes(".")?e.split(".").pop()?.toLowerCase()||"":e.toLowerCase(),i=this.getSortedIconContributions();if(i.length===0)return"file";for(const r of i)if(r.mappings&&r.mappings[n])return r.mappings[n];return"file"}}const qi=new $v;He.put("editorRegistry",qi);D.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});var Av=Object.defineProperty,_v=Object.getOwnPropertyDescriptor,_d=(t,e,n,i)=>{for(var r=i>1?void 0:i?_v(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Av(e,n,r),r};const tt=ti("filebrowser");let $s=class extends mt{constructor(){super(...arguments),this.treeRef=xn(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),Ce(Ft,t=>{t.target==="system.icons"&&this.requestUpdate()}),this.subscribe(It,t=>this.onWorkspaceChanged(t)),this.subscribe(Ii,t=>this.onWorkspaceConnected(t))}firstUpdated(t){super.firstUpdated(t),this.setupDragAndDrop()}updated(t){super.updated(t),t.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const t=await xt.getWorkspace();t?await this.loadWorkspace(t):Te.execute("help")}renderToolbar(){const t=Mn.get()instanceof Ss;return f`
            <k-command icon="folder-open" title="${tt("CONNECT_WORKSPACE")}" dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="${tt("RELOAD_WORKSPACE")}"></k-command>
            <k-command cmd="create_file" icon="plus" title="${tt("CREATE_NEW")}" dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t} title="${tt("RENAME_RESOURCE")}"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t} title="${tt("DELETE_RESOURCE")}"></k-command>
        `}renderContextMenu(){const t=Mn.get()instanceof Ss;return f`
            <k-command cmd="open_editor" icon="folder-open">${tt("OPEN")}</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">${tt("CREATE_NEW")}</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t}>${tt("RENAME")}</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t}>${tt("DELETE")}</k-command>
        `}async onWorkspaceChanged(t){Mn.set(void 0),await this.loadWorkspace(t),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t,!0):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&Mn.set(e[0].model?.data)}async resourceToTreeNode(t,e=!1){const n=t instanceof dn,i={data:t,label:t.getName(),leaf:n,children:[]};if(t instanceof wi&&e){for(const r of await t.listChildren(!1)){const s=await this.resourceToTreeNode(r,!1);i.children.push(s)}i.children.sort(ec)}return i}createTreeItems(t,e=!1){if(!t)return f``;const n=!t.leaf&&t.children.length===0,i=t.data,r=i instanceof dn,s=r?qi.getFileIcon(i.getName()):t.icon||"folder-open";return f`
            <wa-tree-item 
                draggable=${r}
                @dragstart=${r?this.nobubble(o=>this.onDragStart(o,i)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(o=>this.onLazyLoad(o,t))}
                .model=${t} 
                ?expanded=${e}
                ?lazy=${n}>
                <span><wa-icon name=${s} label="${t.leaf?tt("FILE"):tt("FOLDER")}"></wa-icon> ${t.label}</span>
                ${t.children.map(o=>this.createTreeItems(o,!1))}
            </wa-tree-item>`}onDragStart(t,e){if(!t.dataTransfer)return;const n=e.getWorkspacePath(),i=e.getName();if(t.dataTransfer.effectAllowed="copy",t.dataTransfer.setData("text/plain",n),t.dataTransfer.setData("application/x-workspace-file",n),t.dataTransfer.setData("text/uri-list",n),t.dataTransfer.setDragImage){const r=document.createElement("div");r.textContent=i,r.style.position="absolute",r.style.top="-1000px",r.style.padding="4px 8px",r.style.background="var(--wa-color-neutral-10)",r.style.border="1px solid var(--wa-color-neutral-30)",r.style.borderRadius="4px",document.body.appendChild(r),t.dataTransfer.setDragImage(r,0,0),setTimeout(()=>document.body.removeChild(r),0)}}async onLazyLoad(t,e){const n=e.data;n instanceof wi&&e.children.length===0&&await this.loadNodeChildren(e,n)}async loadNodeChildren(t,e){if(!this.loadingNodes.has(t)){this.loadingNodes.add(t);try{for(const n of await e.listChildren(!1)){Rc&&n.getName().startsWith(".");const i=await this.resourceToTreeNode(n,!1);t.children.push(i)}t.children.sort(ec),this.requestUpdate()}catch(n){console.error("Failed to load directory children:",n)}finally{this.loadingNodes.delete(t)}}}async onFileDoubleClicked(t){const n=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:n})}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const n=e[0].model;Mn.set(n.data)}else Mn.set(void 0)}setupDragAndDrop(){const t=this.treeRef.value;if(!t)return;const e=s=>{if(!s.dataTransfer?.types.includes("Files"))return;s.preventDefault(),s.dataTransfer.dropEffect="copy",t.classList.add("drag-over");const l=s.target.closest("wa-tree-item");l&&l!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=l,l.classList.add("drop-target"))},n=s=>{s.dataTransfer?.types.includes("Files")&&(s.preventDefault(),t.classList.add("drag-over"))},i=s=>{const o=t.getBoundingClientRect(),l=s.clientX,c=s.clientY;(l<=o.left||l>=o.right||c<=o.top||c>=o.bottom)&&(t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},r=async s=>{if(s.preventDefault(),t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!s.dataTransfer||!this.workspaceDir)return;const o=Array.from(s.dataTransfer.files);if(o.length===0)return;const l=await this.getDropTarget(s);await this.handleFilesDrop(o,l)};t.removeEventListener("dragover",e),t.removeEventListener("dragenter",n),t.removeEventListener("dragleave",i),t.removeEventListener("drop",r),t.addEventListener("dragover",e),t.addEventListener("dragenter",n),t.addEventListener("dragleave",i),t.addEventListener("drop",r)}async getDropTarget(t){const n=t.target.closest("wa-tree-item");if(n){const r=n.model.data;if(r instanceof wi)return r;const s=r.getParent();if(s)return s}return this.workspaceDir}async handleFilesDrop(t,e){const n=t.length;let i=0,r=0,s=0;for(const o of t)try{const l=this.buildTargetPath(e,o.name);if(await this.workspaceDir.getResource(l)&&!await Bs(tt("FILE_EXISTS_OVERWRITE",{fileName:o.name}))){s++;continue}await(await this.workspaceDir.getResource(l,{create:!0})).saveContents(o),i++}catch(l){console.error(`Failed to upload ${o.name}:`,l),r++}console.log(`Uploaded ${i}/${n} files${s>0?`, ${s} skipped`:""}${r>0?`, ${r} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(t,e){const n=t.getWorkspacePath();return n?`${n}/${e}`:e}render(){return f`
            <div class="tree" ${kn(this.treeRef)} style="--drop-files-text: '${tt("DROP_FILES_HERE")}'">
                ${Xe(!this.workspaceDir,()=>f`
                    <k-no-content message="${tt("SELECT_WORKSPACE")}"></k-no-content>`,()=>f`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};$s.styles=qe`
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
    `;_d([A()],$s.prototype,"root",2);$s=_d([S("k-filebrowser")],$s);var Tv=Object.getOwnPropertyDescriptor,Rv=(t,e,n,i)=>{for(var r=i>1?void 0:i?Tv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};const ra=ti("tasks");D.registerContribution(Ds,{html:"<k-tasks></k-tasks>"});let tr=null;function Td(){return tr||(tr=document.createElement("div"),tr.id="progress-dialog-container",document.body.appendChild(tr)),tr}function tc(){return Td().querySelector("wa-dialog")}function Iv(){Rd(!0)}function Rd(t=!1){const e=Td(),n=Ys.getActiveTasks();if(n.length===0){Ct(f``,e);return}const r=tc();if(!(t||r?.open===!0))return;const o=()=>{const h=tc();h&&(h.open=!1)},l=()=>{Ct(f``,e)},c=f`
        <wa-dialog 
            label="${ra("ACTIVE_TASKS")}" 
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
    `;Ct(c,e)}let sa=class extends mt{doBeforeUI(){this.watch(Uo,()=>{Rd(),this.requestUpdate()})}handleIndicatorClick(){Iv()}render(){Uo.get();const e=Ys.getActiveTasks().length;return e===0?f``:f`
            <div class="task-indicator" @click=${this.handleIndicatorClick} title="${ra("ACTIVE_TASKS_TITLE",{taskCount:e.toString()})}">
                <wa-spinner 
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);" 
                    label="${ra("ACTIVE_TASKS")}"
                ></wa-spinner>
                <span class="task-count">${e}</span>
            </div>
        `}};sa.styles=qe`
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
    `;sa=Rv([S("k-tasks")],sa);var Lv=Object.getOwnPropertyDescriptor,Ov=(t,e,n,i)=>{for(var r=i>1?void 0:i?Lv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};const To=ti("workspace");let nc=class extends Gt{constructor(){super(...arguments),this.workspaceName=To("NO_WORKSPACE")}doInitUI(){this.updateWorkspaceName(),Ce(Ii,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){xt.getWorkspace().then(t=>{this.workspaceName=t?.getName()||To("NO_WORKSPACE"),this.requestUpdate()})}handleLoadWorkspace(){Te.execute("load_workspace",{source:this})}render(){return f`
            <wa-button 
                appearance="plain"
                size="small"
                title="${To("LOAD_WORKSPACE")}"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};nc=Ov([S("k-workspace-name")],nc);var Pv=Object.getOwnPropertyDescriptor,Dv=(t,e,n,i)=>{for(var r=i>1?void 0:i?Pv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};const Ro=ti("partname");D.registerContribution(Ds,{html:"<k-part-name></k-part-name>"});let ic=class extends Gt{doBeforeUI(){this.watch(gt,()=>{this.requestUpdate()})}getPartName(){const t=gt.get();return t&&(t.tabContribution?.label||t.getAttribute("id"))||Ro("NO_PART")}render(){const e=gt.get()?.tabContribution?.icon||"box";return f`
            <wa-button 
                appearance="plain"
                size="small"
                title="${Ro("ACTIVE_PART")}">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};ic=Dv([S("k-part-name")],ic);var zv=Object.defineProperty,Mv=Object.getOwnPropertyDescriptor,Wa=(t,e,n,i)=>{for(var r=i>1?void 0:i?Mv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&zv(e,n,r),r};const Me=ti("extensions");let kr=class extends mt{constructor(){super(...arguments),this.filterText=""}doInitUI(){Ce(or,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){F.enable(t.id,!0),this.requestUpdate()}disable(t){F.disable(t.id,!0),this.requestUpdate()}isExtensionRequired(t){const e=ye.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(t)}selectionChanged(t){const e=t.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return F.getExtensions();const t=this.filterText.toLowerCase();return F.getExtensions().filter(e=>String(e.name).toLowerCase().includes(t)||(e.description?String(e.description).toLowerCase().includes(t):!1)||e.id.toLowerCase().includes(t))}getGroupedExtensions(){const t=this.getFilteredExtensions(),e=[],n=[];return t.forEach(i=>{F.isEnabled(i.id)?e.push(i):n.push(i)}),e.sort((i,r)=>String(i.name).localeCompare(String(r.name))),n.sort((i,r)=>String(i.name).localeCompare(String(r.name))),{enabled:e,available:n}}isExternalExtension(t){return t.external===!0}handleFilterInput(t){this.filterText=t.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}renderToolbar(){return f`
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
                    ${Xe(this.selectedExtension,n=>{const i=this.isExternalExtension(n),r=F.isEnabled(n.id);return f`
                                <h1><k-icon name="${n.icon}"></k-icon> ${n.name}${i?" (External)":""}</h1>
                                ${Xe(i,()=>f`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${Me("EXTERNAL_EXTENSION")}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${Xe(r,()=>f`
                                        <wa-button 
                                            title="${this.isExtensionRequired(n.id)?Me("REQUIRED_HINT"):Me("DISABLE_TITLE")}" 
                                            @click="${()=>this.disable(n)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(n.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${Me("UNINSTALL")}
                                        </wa-button>
                                        ${Xe(this.isExtensionRequired(n.id),()=>f`
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

                                ${Xe(n.experimental,()=>f`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${Me("EXPERIMENTAL")}</i></small>
                                    </div>
                                `)}

                                ${Xe(n.version||n.author,()=>f`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${Xe(n.version,()=>f`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${Me("VERSION")} <strong>${n.version}</strong></span>
                                            </div>
                                        `)}
                                        ${Xe(n.author,()=>f`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${Me("AUTHOR")} <strong>${n.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${n.description}</p>

                                ${Xe(n.dependencies&&n.dependencies.length>0,()=>f`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${Me("DEPENDENCIES")}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${n.dependencies.map(s=>{const o=F.getExtensions().find(c=>c.id===s),l=F.isEnabled(s);return f`
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
        `}};kr.styles=qe`
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
    `;Wa([A()],kr.prototype,"selectedExtension",2);Wa([A()],kr.prototype,"filterText",2);kr=Wa([S("k-extensions")],kr);var Nv=Object.defineProperty,Fv=Object.getOwnPropertyDescriptor,Zs=(t,e,n,i)=>{for(var r=i>1?void 0:i?Fv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Nv(e,n,r),r};const Ne=ti("logterminal");let Li=class extends mt{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=xn()}connectedCallback(){super.connectedCallback(),this.loadSettings(),ep(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),tp()}log(t,e,n="info"){const i={timestamp:new Date,level:n,source:t,message:e};this.messages=[...this.messages,i],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const r=this.containerRef.value;r&&(r.scrollTop=r.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const t=this.messages.filter(r=>r.level==="info").length,e=this.messages.filter(r=>r.level==="warning").length,n=this.messages.filter(r=>r.level==="error").length,i=this.messages.filter(r=>r.level==="debug").length;return f`
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
                <div class="messages" ${kn(this.containerRef)}>
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
        `}async loadSettings(){const t=await this.getDialogSetting();t&&(typeof t.filter=="string"&&(t.filter==="all"||["info","warning","error","debug"].includes(t.filter))&&(this.filter=t.filter),typeof t.autoScroll=="boolean"&&(this.autoScroll=t.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};Li.styles=qe`
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
    `;Zs([A()],Li.prototype,"messages",2);Zs([A()],Li.prototype,"autoScroll",2);Zs([A()],Li.prototype,"filter",2);Li=Zs([S("k-log-terminal")],Li);var Uv=Object.defineProperty,Bv=Object.getOwnPropertyDescriptor,ct=(t,e,n,i)=>{for(var r=i>1?void 0:i?Bv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Uv(e,n,r),r};let Ke=class extends Ar{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(t){if(!this.disabled){if(t&&t.stopPropagation(),this.action){this.action(t);return}if(this.cmd){const e=this.closest("wa-dropdown");e&&e.open!==void 0&&(e.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(t){const e=t.target;e&&e.open!==void 0&&(e.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const t=Dc.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),Ce(Ft,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=D.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){if("command"in t){const e=t,n=e.disabled?.get();return f`
                <k-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    .params=${e.params||{}}
                    ?disabled="${n}">
                    ${e.label}
                </k-command>
            `}if("html"in t){const n=t.html;return n instanceof Function?n():nn(n)}return N}render(){const t=this.getKeybinding();return this.isInDropdown()?f`
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
        `}};Ke.styles=qe`
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
    `;ct([d()],Ke.prototype,"cmd",2);ct([d({type:Object,attribute:!1})],Ke.prototype,"action",2);ct([d()],Ke.prototype,"title",2);ct([d()],Ke.prototype,"label",2);ct([d()],Ke.prototype,"icon",2);ct([d({type:Boolean})],Ke.prototype,"disabled",2);ct([d()],Ke.prototype,"appearance",2);ct([d()],Ke.prototype,"variant",2);ct([d()],Ke.prototype,"size",2);ct([d({type:Object,attribute:!1})],Ke.prototype,"params",2);ct([d()],Ke.prototype,"dropdown",2);ct([d()],Ke.prototype,"placement",2);ct([A()],Ke.prototype,"dropdownContributions",2);Ke=ct([S("k-command")],Ke);var Vv=Object.defineProperty,qv=Object.getOwnPropertyDescriptor,$t=(t,e,n,i)=>{for(var r=i>1?void 0:i?qv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Vv(e,n,r),r};const Hv=ti("fastviews");let lt=class extends Ar{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=xn(),this.tabsRef=xn(),this.resizeHandleRef=xn(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(t){if(!this.disabled)if(this.containerId){const e=document.querySelector(`k-tabs#${this.containerId}`);if(!e){console.error(`k-fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(t)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(t)})}handleDrawerHide(){this.drawerOpen=!1}startResize(t){t.preventDefault(),t.stopPropagation();const e=this.drawerRef.value;if(!e)return;let i=(()=>{const o=e.shadowRoot?.querySelector('[part="panel"]');if(o&&o.offsetWidth>0)return o.offsetWidth;const h=(window.getComputedStyle(e).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(h){const u=parseFloat(h[1]),p=h[2];if(p==="px")return u;if(p==="vw")return u/100*window.innerWidth;if(p==="vh")return u/100*window.innerHeight;if(p==="%")return u/100*window.innerWidth}return 0})();i===0&&(i=window.innerWidth*.5);const r=o=>{this.resizing&&(o.preventDefault(),o.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const l=this.resizing.startX-o.clientX,c=Math.round(this.resizing.startSize+l),h=200,u=Math.round(window.innerWidth*.9);if(c>=h&&c<=u){this.drawerSize=`${c}px`;const p=this.drawerRef.value;p&&(p.style.setProperty("--size",this.drawerSize),p.style.setProperty("transition","none"))}this.resizing.rafId=null}))},s=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const o=this.drawerRef.value;o&&o.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:t.clientX,startSize:i,handleMouseMove:r,handleMouseUp:s,rafId:null},document.addEventListener("mousemove",r,{passive:!1}),document.addEventListener("mouseup",s,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),Ce(Ft,t=>{this.target&&t.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const t=D.getContributions(this.target);this.tabContributions=t.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(t){const e=t.disabled?.get();return f`
            <wa-dropdown-item 
                ?disabled=${e}
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
                    ${kn(this.drawerRef)}
                    label="${this.title||Hv("FAST_VIEWS")}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${kn(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <k-tabs 
                        ${kn(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </k-tabs>
                </wa-drawer>
            `}
        `}};lt.styles=qe`
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
    `;$t([d()],lt.prototype,"target",2);$t([d()],lt.prototype,"title",2);$t([d()],lt.prototype,"icon",2);$t([d({type:Boolean})],lt.prototype,"disabled",2);$t([d()],lt.prototype,"appearance",2);$t([d()],lt.prototype,"size",2);$t([d()],lt.prototype,"placement",2);$t([d()],lt.prototype,"containerId",2);$t([A()],lt.prototype,"tabContributions",2);$t([A()],lt.prototype,"drawerOpen",2);$t([A()],lt.prototype,"drawerSize",2);lt=$t([S("k-fastviews")],lt);var Wv=Object.getOwnPropertyDescriptor,jv=(t,e,n,i)=>{for(var r=i>1?void 0:i?Wv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=o(r)||r);return r};function Xv(){let t=document.getElementById("global-dialog-container");return t||(t=document.createElement("div"),t.id="global-dialog-container",document.body.appendChild(t)),t}const Id=t=>{try{return new Intl.DisplayNames([t],{type:"language"}).of(t)||t.toUpperCase()}catch{return t.toUpperCase()}},Gv=()=>{const t=yu.get(),e=new Set;for(const n of t)if(n.namespace){const i=n;for(const r in i)r!=="namespace"&&r!=="label"&&r!=="language"&&r!=="translations"&&typeof i[r]=="object"&&e.add(r)}return Array.from(e).sort()},Kv=async()=>{const t=Gv(),e=Lc.get();return new Promise(n=>{const i=Xv();let r=!1;const s=()=>{const h=i.querySelector("wa-dialog");h&&!r&&(h.open=!1)},o=()=>{r||(r=!0,Ct(f``,i),n())},l=async h=>{await le.set(Mo,h),s()},c=f`
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
                            <span class="language-name">${Id(h)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;Ct(c,i)})};let oa=class extends Gt{render(){const t=Lc.get(),e=Id(t),n=`${t.toUpperCase()} ${e}`;return f`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${e}"
                @click=${()=>Kv()}>
                ${n}
            </wa-button>
        `}};oa.styles=qe`
        :host {
            display: inline-block;
        }
    `;oa=jv([S("k-language-selector")],oa);var Yv=Object.defineProperty,Zv=Object.getOwnPropertyDescriptor,Ld=(t,e,n,i)=>{for(var r=i>1?void 0:i?Zv(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Yv(e,n,r),r};const Od="app-switcher";D.registerContribution(Xn,{id:Od,label:"Switch Application",buttons:[Kc],component:t=>{const e=t?.apps||[],n=t?.currentAppId,i=t?.selectApp;return f`
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
        `},onButton:async()=>!0});const Jv=async()=>{const t=ye.getRegisteredApps(),e=ye.getCurrentApp();if(t.length===0)return;const n={apps:t,currentAppId:e?.id,selectApp:async i=>{if(i.id===e?.id){n.close?.();return}try{await ye.setPreferredAppId(i.id),await ye.loadApp(i.id,document.body)}catch(r){console.error("Failed to switch app:",r)}finally{n.close?.()}},close:void 0};await Us.open(Od,n)};let As=class extends Gt{doBeforeUI(){this.currentApp=ye.getCurrentApp();const t=()=>{this.currentApp=ye.getCurrentApp(),this.requestUpdate()};return window.addEventListener("app-loaded",t),()=>{window.removeEventListener("app-loaded",t)}}render(){const t=ye.getRegisteredApps(),e=this.currentApp?.name||"No App";return t.length<=1?f``:f`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current app: ${e}. Click to switch applications."
                @click=${()=>Jv()}>
                <wa-icon name="grip" style="margin-right: 0.5rem;"></wa-icon>
                ${e}
            </wa-button>
        `}};As.styles=qe`
        :host {
            display: inline-block;
        }
    `;Ld([A()],As.prototype,"currentApp",2);As=Ld([S("k-app-switcher")],As);var Qv=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,ja=(t,e,n,i)=>{for(var r=i>1?void 0:i?e0(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Qv(e,n,r),r};let Er=class extends Ar{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return f`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};Er.styles=qe`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;ja([d()],Er.prototype,"message",2);ja([d()],Er.prototype,"icon",2);Er=ja([S("k-no-content")],Er);const q=xu("extensions");F.registerExtension({id:"system.git",name:q("EXT_GIT_NAME"),description:q("EXT_GIT_DESC"),loader:()=>ue(()=>import("./git-extension-SWwkmXyp.js"),[]),icon:"code-branch",experimental:!0});F.registerExtension({id:"system.github-service",name:q("EXT_GITHUB_SERVICE_NAME"),description:q("EXT_GITHUB_SERVICE_DESC"),loader:()=>ue(()=>import("./github-service-extension-C-kuSNTI.js"),[]),icon:"code-branch"});F.registerExtension({id:"system.pyterminal",name:q("EXT_PYTERMINAL_NAME"),description:q("EXT_PYTERMINAL_DESC"),loader:()=>ue(()=>import("./pyterminal-extension-CiYooRre.js"),__vite__mapDeps([0,1])),icon:"k python",experimental:!0});F.registerExtension({id:"system.linuxterminal",name:q("EXT_LINUXTERMINAL_NAME"),description:q("EXT_LINUXTERMINAL_DESC"),loader:()=>ue(()=>import("./k-linuxterminal-CpJKBzJe.js"),__vite__mapDeps([2,1])),icon:"terminal",experimental:!0});F.registerExtension({id:"system.webllm",name:q("EXT_WEBLLM_NAME"),description:q("EXT_WEBLLM_DESC"),loader:()=>ue(()=>import("./webllmservice-DRRH11uC.js"),[]),icon:"robot"});F.registerExtension({id:"system.p12splitter",name:q("EXT_P12SPLITTER_NAME"),description:q("EXT_P12SPLITTER_DESC"),loader:()=>ue(()=>import("./p12-splitter-C_9QHAWe.js"),[]),icon:"certificate"});F.registerExtension({id:"system.pythonpackagemanager",name:q("EXT_PYTHONPACKAGEMANAGER_NAME"),description:q("EXT_PYTHONPACKAGEMANAGER_DESC"),loader:()=>ue(()=>import("./package-manager-extension-DvVstccy.js"),[]),icon:"box"});F.registerExtension({id:"system.notebook",name:q("EXT_NOTEBOOK_NAME"),description:q("EXT_NOTEBOOK_DESC"),loader:()=>ue(()=>import("./notebook-extension-BLRHvZIb.js"),[]),icon:"k jupyter",dependencies:["system.pythonpackagemanager"]});F.registerExtension({id:"system.commandpalette",name:q("EXT_COMMANDPALETTE_NAME"),description:q("EXT_COMMANDPALETTE_DESC"),loader:()=>ue(()=>import("./command-palette-extension-DdlfkuT3.js"),[]),icon:"terminal"});F.registerExtension({id:"system.download",name:q("EXT_DOWNLOAD_NAME"),description:q("EXT_DOWNLOAD_DESC"),loader:()=>ue(()=>import("./download-extension-CEYRz5H9.js"),[]),icon:"download"});F.registerExtension({id:"system.unzip",name:q("EXT_UNZIP_NAME"),description:q("EXT_UNZIP_DESC"),loader:()=>ue(()=>import("./unzip-extension-B-J2VbPL.js"),[]),icon:"box-archive"});F.registerExtension({id:"system.mdeditor",name:q("EXT_MDEDITOR_NAME"),description:q("EXT_MDEDITOR_DESC"),loader:()=>ue(()=>import("./md-editor-extension-MyPFoDTz.js"),[]),icon:"book"});F.registerExtension({id:"system.mediaviewer",name:q("EXT_MEDIAVIEWER_NAME"),description:q("EXT_MEDIAVIEWER_DESC"),loader:()=>ue(()=>import("./media-viewer-extension-BECygvIn.js"),[]),icon:"image"});F.registerExtension({id:"system.monaco",name:q("EXT_MONACO_NAME"),description:q("EXT_MONACO_DESC"),loader:()=>ue(()=>import("./monaco-editor-extension-CKElaHX0.js"),[]),icon:"file-pen",dependencies:["system.pythonpackagemanager"]});F.registerExtension({id:"system.memoryusage",name:q("EXT_MEMORYUSAGE_NAME"),description:q("EXT_MEMORYUSAGE_DESC"),loader:()=>ue(()=>import("./memory-usage-extension-CZGBM2Er.js"),[]),icon:"microchip"});F.registerExtension({id:"system.webdav",name:q("EXT_WEBDAV_NAME"),description:q("EXT_WEBDAV_DESC"),loader:()=>ue(()=>import("./webdav-extension-BfhG9q7D.js"),[]),icon:"cloud"});F.registerExtension({id:"system.settings-tree",name:q("EXT_SETTINGS_TREE_NAME"),description:q("EXT_SETTINGS_TREE_DESC"),loader:()=>ue(()=>import("./settings-tree-extension-BvNXSSNC.js"),[]),icon:"sitemap"});F.registerExtension({id:"system.in-browser-ml",name:q("EXT_IN_BROWSER_ML_NAME"),description:q("EXT_IN_BROWSER_ML_DESC"),loader:()=>ue(()=>import("./in-browser-ml-extension-CbkJFuEN.js"),[]),icon:"brain"});F.registerExtension({id:"system.ai-system",name:q("EXT_AI_SYSTEM_NAME"),description:q("EXT_AI_SYSTEM_DESC"),loader:()=>ue(()=>import("./ai-system-extension-BUjdPfkC.js"),[]),icon:"robot",dependencies:["system.in-browser-ml"]});F.registerExtension({id:"system.rag-system",name:q("EXT_RAG_SYSTEM_NAME"),description:q("EXT_RAG_SYSTEM_DESC"),loader:()=>ue(()=>import("./rag-system-extension-gM8ZL9az.js").then(t=>t.b),[]),icon:"database",experimental:!0,dependencies:["system.ai-system"]});F.registerExtension({id:"system.howto",name:q("EXT_HOWTO_NAME"),description:q("EXT_HOWTO_DESC"),loader:()=>ue(()=>import("./howto-extension-BM1CEsHm.js"),[]),icon:"list-check"});const Pd="events/aiservice/streamStarted",Dd="events/aiservice/streamChunk",zd="events/aiservice/streamComplete",ns="events/aiservice/streamError",Xa="events/aiservice/aiConfigChanged",Md="events/aiservice/agentWorkflowStarted",Nd="events/aiservice/agentWorkflowComplete",Fd="events/aiservice/agentWorkflowError",Ud="aiservice.agents",Oe="aiservice.chatProviders",Ga="aiservice.promptEnhancers",Fn="aiConfig",Bd={defaultProvider:"openai",providers:[]},aa=10,hy=Object.freeze(Object.defineProperty({__proto__:null,AI_CONFIG_TEMPLATE:Bd,CID_AGENTS:Ud,CID_CHAT_PROVIDERS:Oe,CID_PROMPT_ENHANCERS:Ga,KEY_AI_CONFIG:Fn,MAX_TOOL_ITERATIONS:aa,TOPIC_AGENT_WORKFLOW_COMPLETE:Nd,TOPIC_AGENT_WORKFLOW_ERROR:Fd,TOPIC_AGENT_WORKFLOW_STARTED:Md,TOPIC_AICONFIG_CHANGED:Xa,TOPIC_AI_STREAM_CHUNK:Dd,TOPIC_AI_STREAM_COMPLETE:zd,TOPIC_AI_STREAM_ERROR:ns,TOPIC_AI_STREAM_STARTED:Pd},Symbol.toStringTag,{value:"Module"}));class Vd{constructor(){this.decoder=new TextDecoder}*processLines(e){for(const n of e)n.trim()!==""&&(yield n)}}class t0 extends Vd{constructor(){super(...arguments),this.usage=null}async*parse(e){let n="";this.usage=null;try{for(;;){const{done:r,value:s}=await e.read();if(r)break;n+=this.decoder.decode(s,{stream:!0});const o=n.split(`
`);n=o.pop()||"";for(const l of this.processLines(o))if(l.startsWith("data: ")){const c=l.slice(6).trim();if(c==="[DONE]"){const h={type:"done",content:""};this.usage&&(h.metadata={usage:this.usage}),yield h;continue}try{const h=JSON.parse(c);if(h.error){yield{type:"error",content:h.error.message||"Unknown error",metadata:h.error};continue}this.extractUsage(h);const u=this.parseChunk(h);u&&(yield u)}catch{continue}}}if(n.trim()&&n.startsWith("data: ")){const r=n.slice(6).trim();if(r!=="[DONE]")try{const s=JSON.parse(r);this.extractUsage(s);const o=this.parseChunk(s);o&&(yield o)}catch{}}const i={type:"done",content:""};this.usage&&(i.metadata={usage:this.usage}),yield i}finally{e.releaseLock()}}extractUsage(e){if(e.usage){const n=e.usage;this.usage={promptTokens:n.prompt_tokens||0,completionTokens:n.completion_tokens||0,totalTokens:n.total_tokens||0,estimated:!1}}}parseChunk(e){const n=e.choices?.[0]?.delta,i=e.choices?.[0];if(n?.content)return{type:"token",content:n.content,message:{role:n.role||"assistant",content:i?.message?.content||n.content}};if(i?.message?.tool_calls){const r=this.parseToolCalls(i.message.tool_calls,!0);if(r.length>0)return{type:"token",content:"",toolCalls:r}}else if(n?.tool_calls||i?.delta?.tool_calls){const r=this.parseToolCalls(n?.tool_calls||i?.delta?.tool_calls||[],!1);if(r.length>0)return{type:"token",content:"",toolCalls:r}}return null}parseToolCalls(e,n=!1){return e.filter(i=>i.function!==void 0).map((i,r)=>({id:i.id||`call_${i.index!==void 0?i.index:r}_${Date.now()}`,type:"function",function:{name:i.function?.name||"",arguments:i.function?.arguments||(n?"{}":"")},_index:i.index!==void 0?i.index:r}))}}class n0 extends Vd{constructor(){super(...arguments),this.usage=null}async*parse(e){let n="";this.usage=null;try{for(;;){const{done:r,value:s}=await e.read();if(r)break;n+=this.decoder.decode(s,{stream:!0});const o=n.split(`
`);n=o.pop()||"";for(const l of this.processLines(o))try{const c=JSON.parse(l);if(c.error){yield{type:"error",content:c.error,metadata:c};continue}if(c.done){this.extractUsage(c);const h={type:"done",content:""};this.usage&&(h.metadata={usage:this.usage}),yield h;continue}c.message?.content?yield{type:"token",content:c.message.content,message:{role:c.message.role||"assistant",content:c.message.content}}:c.response&&(yield{type:"token",content:c.response,message:{role:"assistant",content:c.response}})}catch{continue}}if(n.trim())try{const r=JSON.parse(n);r.done&&this.extractUsage(r),r.message?.content&&(yield{type:"token",content:r.message.content,message:{role:r.message.role||"assistant",content:r.message.content}})}catch{}const i={type:"done",content:""};this.usage&&(i.metadata={usage:this.usage}),yield i}finally{e.releaseLock()}}extractUsage(e){if(e.prompt_eval_count!==void 0||e.eval_count!==void 0){const n=e.prompt_eval_count||0,i=e.eval_count||0;this.usage={promptTokens:n,completionTokens:i,totalTokens:n+i,estimated:!1}}}}class qd{createParser(e,n){return e.includes("text/event-stream")||n.includes("openai")?new t0:new n0}async getAvailableModels(e){if(!e.chatApiEndpoint)return[];try{const n=e.chatApiEndpoint;let i=n;if(n.includes("/v1/chat/completions"))i=n.replace("/v1/chat/completions","");else if(n.includes("/api/v1/chat/completions"))i=n.replace("/api/v1/chat/completions","");else if(n.includes("/api/chat/completion"))i=n.replace("/api/chat/completion","");else try{const h=new URL(n);i=`${h.protocol}//${h.host}`}catch{return[]}const r=`${i}/v1/models`,s={"Content-Type":"application/json"};e.apiKey&&(s.Authorization=`Bearer ${e.apiKey}`);const o=await fetch(r,{method:"GET",headers:s});return o.ok?((await o.json()).data||[]).map(h=>({id:h.id,name:h.name||h.id})):[]}catch{return[]}}async*stream(e){const n={model:e.model,stream:!0,messages:e.messages,...e.chatConfig.parameters};e.tools&&e.tools.length>0&&(n.tools=e.tools,n.tool_choice="auto");const i=await fetch(e.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${e.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(n),signal:e.signal});if(!i.ok){const c=await i.text().catch(()=>"Unknown error");yield{type:"error",content:`HTTP ${i.status}: ${c}`,metadata:{status:i.status,statusText:i.statusText}};return}const r=i.headers.get("content-type")||"",s=i.headers.get("content-length");if(!i.body){yield{type:"error",content:`Response body is null or empty (Content-Length: ${s||"unknown"}). This may indicate: 1) The endpoint doesn't support streaming, 2) Authentication is required/invalid, 3) The endpoint URL is incorrect. For Open WebUI, ensure you're using the correct endpoint and API key.`,metadata:{status:i.status,contentType:r,contentLength:s,endpoint:e.chatConfig.chatApiEndpoint,hasApiKey:!!e.chatConfig.apiKey}};return}const o=i.body.getReader();if(!o){yield{type:"error",content:"Response body is not readable"};return}const l=this.createParser(r,e.chatConfig.chatApiEndpoint);try{for await(const c of l.parse(o))yield c}catch(c){yield{type:"error",content:c instanceof Error?c.message:"Failed to parse response stream",metadata:{error:c,contentType:r,endpoint:e.chatConfig.chatApiEndpoint}}}}}class i0 extends qd{constructor(){super(...arguments),this.name="openai"}canHandle(e){return e.chatApiEndpoint.includes("openai")||e.chatApiEndpoint.includes("v1/chat/completions")}}class r0 extends qd{constructor(){super(...arguments),this.name="ollama"}canHandle(e){return e.name.toLowerCase()==="ollama"||e.chatApiEndpoint.includes("ollama")||e.chatApiEndpoint.includes("localhost:11434")}}class s0{constructor(){this.providers=[],this.registerDefaultProviders()}registerDefaultProviders(){this.providers.push(new i0),this.providers.push(new r0)}registerProvider(e){this.providers.push(e)}getProvider(e){const n=this.providers.find(i=>i.canHandle(e));return n||this.providers[0]}getAllProviders(){return[...this.providers]}}class o0{getAgentContributions(){return D.getContributions(Ud)}filterAndSortAgents(e,n){return e.filter(i=>i.canHandle?i.canHandle(n):!0).sort((i,r)=>(r.priority||0)-(i.priority||0))}getMatchingAgents(e,n){const i=this.getAgentContributions();if(i.length===0)throw new Error("No agents are registered. The App Support agent should be available from the AI system extension.");let r=i.filter(s=>n&&!n.includes(s.role)?!1:s.canHandle?s.canHandle(e):!0);if(n&&n.length>0){if(r=r.sort((s,o)=>(o.priority||0)-(s.priority||0)),r.length===0){const s=n.join(", ");throw new Error(`No agents found for requested roles: ${s}. Available agents: ${i.map(o=>o.role).join(", ")}`)}}else if(r=this.filterAndSortAgents(r,e),r.length===0)throw new Error(`No agents can handle the current context. Available agents: ${i.map(s=>s.role).join(", ")}`);return r}}class Hd{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}commandToTool(e,n){const i={},r=[];return e.parameters?.forEach(l=>{const c=this.sanitizeFunctionName(l.name);i[c]={type:l.type||"string",description:l.description,...l.allowedValues&&{enum:l.allowedValues}},l.required===!0&&r.push(c)}),{type:"function",function:{name:this.sanitizeFunctionName(e.id),description:e.description||e.name,parameters:{type:"object",properties:i,required:r}}}}getAvailableTools(e,n){const i=Te.listCommands();let r=Object.values(i);return n&&(r=r.filter(s=>n(s,e))),r.map(s=>this.commandToTool(s,e))}}var Wd=(t=>(t.ZERO_SHOT_CLASSIFICATION="Xenova/distilbert-base-uncased-mnli",t.FEATURE_EXTRACTION="Xenova/all-MiniLM-L6-v2",t.TEXT_CLASSIFICATION="Xenova/distilbert-base-uncased-finetuned-sst-2-english",t.QUESTION_ANSWERING="Xenova/distilbert-base-cased-distilled-squad",t.SUMMARIZATION="Xenova/distilbart-cnn-6-6",t.TRANSLATION_EN_FR="Xenova/opus-mt-en-fr",t.FILL_MASK="Xenova/distilbert-base-uncased",t.SENTENCE_SIMILARITY="Xenova/all-MiniLM-L6-v2",t.TOKEN_CLASSIFICATION="Xenova/distilbert-base-uncased-finetuned-conll03-english",t.IMAGE_CLASSIFICATION="Xenova/vit-base-patch16-224",t.OBJECT_DETECTION="Xenova/detr-resnet-50",t.AUTOMATIC_SPEECH_RECOGNITION="Xenova/whisper-tiny",t.AUDIO_CLASSIFICATION="Xenova/wav2vec2-base",t))(Wd||{}),jd=(t=>(t.ZERO_SHOT_CLASSIFICATION="zero-shot-classification",t.FEATURE_EXTRACTION="feature-extraction",t.TEXT_CLASSIFICATION="text-classification",t.SENTIMENT_ANALYSIS="sentiment-analysis",t.QUESTION_ANSWERING="question-answering",t.SUMMARIZATION="summarization",t.TRANSLATION="translation",t.FILL_MASK="fill-mask",t.SENTENCE_SIMILARITY="sentence-similarity",t.TOKEN_CLASSIFICATION="token-classification",t.IMAGE_CLASSIFICATION="image-classification",t.OBJECT_DETECTION="object-detection",t.AUTOMATIC_SPEECH_RECOGNITION="automatic-speech-recognition",t.AUDIO_CLASSIFICATION="audio-classification",t.IMAGE_TO_TEXT="image-to-text",t.TEXT_TO_IMAGE="text-to-image",t.IMAGE_SEGMENTATION="image-segmentation",t.DEPTH_ESTIMATION="depth-estimation",t))(jd||{});function a0(t){switch(t){case"zero-shot-classification":return"Xenova/distilbert-base-uncased-mnli";case"feature-extraction":return"Xenova/all-MiniLM-L6-v2";case"text-classification":case"sentiment-analysis":return"Xenova/distilbert-base-uncased-finetuned-sst-2-english";case"question-answering":return"Xenova/distilbert-base-cased-distilled-squad";case"summarization":return"Xenova/distilbart-cnn-6-6";case"translation":return"Xenova/opus-mt-en-fr";case"fill-mask":return"Xenova/distilbert-base-uncased";case"sentence-similarity":return"Xenova/all-MiniLM-L6-v2";case"token-classification":return"Xenova/distilbert-base-uncased-finetuned-conll03-english";case"image-classification":return"Xenova/vit-base-patch16-224";case"object-detection":return"Xenova/detr-resnet-50";case"automatic-speech-recognition":return"Xenova/whisper-tiny";case"audio-classification":return"Xenova/wav2vec2-base";default:return null}}let Io=null,rc=!1;async function Xd(){Io||(Io=ue(()=>import("./transformers-CCl8SIVb.js"),__vite__mapDeps([3,4])));const t=await Io;return rc||(t.env.allowRemoteModels=!0,t.env.allowLocalModels=!1,t.env.remoteHost="https://huggingface.co",rc=!0),t}async function l0(t){const{env:e}=await Xd();t&&t.trim()?e.useAuthToken=t.trim():e.useAuthToken=null}const nr=hn("InBrowserMLService");class mi{constructor(){this.pipelines=new Map,this.loadingPipelines=new Set}static getInstance(){return mi.instance||(mi.instance=new mi),mi.instance}setAuthToken(e){l0(e).then(()=>{e&&e.trim()&&nr.info("Hugging Face token set for authenticated model access")}).catch(n=>{nr.warn(`Failed to configure auth token: ${n instanceof Error?n.message:String(n)}`)})}async getPipeline(e,n,i={}){if(!n&&typeof e!="string"){const l=a0(e);l&&(n=l)}const r=e,s=n,o=`${r}:${s}`;if(this.pipelines.has(o))return this.pipelines.get(o);if(this.loadingPipelines.has(o)){for(;this.loadingPipelines.has(o);)await new Promise(l=>setTimeout(l,100));return this.pipelines.get(o)}this.loadingPipelines.add(o);try{nr.info(`Loading transformers.js pipeline: ${r} with model ${s}...`);const{pipeline:l}=await Xd(),c=await l(r,s,{quantized:!0,...i});return this.pipelines.set(o,c),nr.info(`Pipeline ${o} loaded successfully`),c}catch(l){const c=l instanceof Error?l.message:String(l);throw nr.error(`Failed to load pipeline ${o}: ${c}`),l}finally{this.loadingPipelines.delete(o)}}clearPipeline(e,n){const s=`${e}:${n}`;this.pipelines.delete(s)}clearAllPipelines(){this.pipelines.clear()}}const c0=mi.getInstance(),mn=hn("ToolDetector");class d0{constructor(){this.classifier=null,this.loading=!1,this.loadPromise=null}async ensureLoaded(){if(!this.classifier)return this.loading&&this.loadPromise?this.loadPromise:(this.loading=!0,this.loadPromise=(async()=>{try{mn.info("Loading ML model for tool detection..."),this.classifier=await c0.getPipeline(jd.ZERO_SHOT_CLASSIFICATION,Wd.ZERO_SHOT_CLASSIFICATION,{quantized:!0}),mn.info("ML model loaded successfully - will use for tool detection")}catch(e){const n=e instanceof Error?e.message:String(e);mn.warn(`Failed to load ML model, will use keyword-based detection fallback: ${n}`),this.classifier=null}finally{this.loading=!1}})(),this.loadPromise)}async needsTools(e){if(!e||e.trim().length===0)return!1;const n=e.toLowerCase().trim();if(["hello","hi","hey","thanks","thank you","bye","goodbye"].some(s=>n===s||n.startsWith(s+" ")))return!1;try{if(await this.ensureLoaded(),this.classifier){mn.info(`Using ML model to classify prompt: "${n.substring(0,50)}${n.length>50?"...":""}"`);const s=await this.classifier(n,["requires executing commands or actions","is a simple greeting or question"]),o=s.labels[0]==="requires executing commands or actions"&&s.scores[0]>.6;return mn.info(`ML classification result: ${s.labels[0]} (confidence: ${(s.scores[0]*100).toFixed(1)}%) - needsTools: ${o}`),o}}catch(s){const o=s instanceof Error?s.message:String(s);mn.warn(`ML classification failed, using keyword fallback: ${o}`)}mn.info("Using keyword-based detection (ML model not available)");const r=this.keywordBasedDetection(n);return mn.info(`Keyword detection result: needsTools=${r}`),r}keywordBasedDetection(e){const n=["create","open","delete","read","write","edit","save","rename","move","copy","list","show","display","run","execute","build","add","remove","update","modify","change","set","get","find","search","filter","sort","install","uninstall","load","import","export","generate","make","do","perform","call","invoke"],i=["file","folder","directory","workspace","editor","map","layer","command","tool","extension","script","code","project"],r=n.some(o=>e.includes(o)),s=i.some(o=>e.includes(o));return r&&(s||e.length>20)}dispose(){this.classifier=null,this.loading=!1,this.loadPromise=null}}const h0=new d0;class u0{constructor(){this.toolRegistry=new Hd,this.enhancers=[]}addEnhancer(e){this.enhancers.push(e)}async getSysPrompt(e,n){let i=e.sysPrompt;if(typeof i=="function"&&(i=i()),!i||typeof i!="string")throw new Error(`Agent "${e.role}" (${e.label}) is missing a system prompt. All agents must provide a sysPrompt.`);const r=[...e.promptEnhancers||[],...this.enhancers,...this.getContributedEnhancers()].sort((o,l)=>(l.priority||0)-(o.priority||0));let s=i;for(const o of r)try{s=await o.enhance(s,n),(!s||typeof s!="string")&&(s=i)}catch(l){console.warn("[PromptBuilder] Enhancer failed:",l)}return s}rewriteChatHistoryForAgent(e,n){return e.map(i=>i.role==="user"?{role:i.role,content:i.content}:i.role===n?{role:"assistant",content:i.content}:{role:"user",content:`***Agent '${i.role}' replied:***
${i.content}`})}getContributedEnhancers(){return D.getContributions(Ga).map(n=>({...n.enhancer,priority:n.priority??n.enhancer.priority}))}async build(e,n,i,r){r?.beforeSend&&await r.beforeSend(n,i);const s=this.sanitizeMessagesForAPI(n),o=this.rewriteChatHistoryForAgent(s,e.role);let l=e.tools;typeof l=="function"&&(l=await l());let c;if(l?.enabled)if(l.smartToolDetection){const g=n[n.length-1]?.content||"";await h0.needsTools(g)&&(c=this.toolRegistry.getAvailableTools(i,l.commandFilter))}else c=this.toolRegistry.getAvailableTools(i,l.commandFilter);const h=await this.getSysPrompt(e,i);o.unshift({role:"system",content:h});const u=o.length-1;return{messages:o,userPromptIndex:u,tools:c}}sanitizeMessageForAPI(e){const n={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(n.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(n.tool_calls=e.tool_calls),n}sanitizeMessagesForAPI(e){return e.map(n=>this.sanitizeMessageForAPI(n))}}class p0{constructor(){this.processors=[]}addProcessor(e){this.processors.push(e)}getSortedProcessors(){return[...this.processors].sort((e,n)=>(n.priority||0)-(e.priority||0))}async process(e,n,i){let r={...e};const s=[...n.messageProcessors||[],...this.processors].sort((l,c)=>(c.priority||0)-(l.priority||0));for(const l of s)r=await l.process(r,i);const o=r.actions?.some(l=>l.requiresAttention)||r.attentionRequests?.some(l=>l.requiresAction)||!1;return{...r,requiresAttention:o}}checkRequiresAttention(e){return e.actions?.some(n=>n.requiresAttention)||e.attentionRequests?.some(n=>n.requiresAction)||!1}}class f0{constructor(){this.accumulatedToolCalls=new Map,this.toolCallIndexMap=new Map}processChunk(e){if(e.type==="token"&&e.toolCalls&&e.toolCalls.length>0)for(const n of e.toolCalls){const i=n._index,r=n.id;let s,o;if(i!==void 0&&this.toolCallIndexMap.has(i)?(o=this.toolCallIndexMap.get(i),s=this.accumulatedToolCalls.get(o)):r&&this.accumulatedToolCalls.has(r)?(o=r,s=this.accumulatedToolCalls.get(o)):(o=r||`call_${i!==void 0?i:Date.now()}_${Math.random()}`,s=void 0),s){const l=s.function.arguments||"",c=n.function.arguments||"",h=l+c;this.accumulatedToolCalls.set(o,{id:o,type:n.type||s.type,function:{name:n.function.name||s.function.name,arguments:h}}),i!==void 0&&!this.toolCallIndexMap.has(i)&&this.toolCallIndexMap.set(i,o)}else this.accumulatedToolCalls.set(o,{...n,id:o}),i!==void 0&&this.toolCallIndexMap.set(i,o)}}getFinalToolCalls(){return Array.from(this.accumulatedToolCalls.values()).filter(e=>e.function.name&&e.function.name.trim().length>0).map(e=>{let n=e.function.arguments||"";return(!n||n.trim()==="")&&(n="{}"),{...e,function:{...e.function,arguments:n}}})}reset(){this.accumulatedToolCalls.clear(),this.toolCallIndexMap.clear()}}class Gd{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}findCommand(e,n){const i=e.function.name,r=Te.getCommand(i);if(r)return r;const s=Te.listCommands();for(const[o,l]of Object.entries(s))if(this.sanitizeFunctionName(o)===i)return l;return null}parseArguments(e){if(!e||e.trim()===""||e==="{}")return{};try{const n=JSON.parse(e);return n&&typeof n=="object"?n:{}}catch(n){const i=n instanceof Error?n.message:String(n);return console.error(`[ToolExecutor] Failed to parse arguments: ${e} - ${i}`),{}}}sanitizeArguments(e,n){if(!n||!n.parameters||!e||typeof e!="object")return e||{};const i={};return n.parameters.forEach(r=>{const s=this.sanitizeFunctionName(r.name);s in e&&(i[r.name]=e[s])}),i}async executeToolCall(e,n){try{const i=this.findCommand(e,n),r=i?.id||e.function.name,s=e.function.arguments||"{}",o=this.parseArguments(s),l=this.sanitizeArguments(o,i),c=Te.createExecutionContext(l),h={...n,...c,params:l};let u=await Te.execute(r,h);const g={success:!0,message:`Command "${i?.name||r}" executed successfully`,command:r};if(l&&typeof l=="object"&&Object.keys(l).length>0&&(g.parameters=l),u){let b=u;if(b instanceof Promise&&(b=await b),g.result=b,i?.output&&i.output.length>0){const w=i.output.map(k=>`${k.name}: ${k.description||k.type||"value"}`).join(", ");g.output=w}}return{id:e.id,result:g}}catch(i){const r=i instanceof Error?i.message:String(i);let s=null;try{s=this.findCommand(e,n)}catch{s=null}const o=s?.name||e.function.name;let l=r;return r.includes("No handler found")||r.includes("No handlers registered")?l=`Command "${o}" cannot be executed. ${r}. This usually means the command is not available in the current context (e.g., a map editor may not be open or active).`:(r.includes("not available")||r.includes("GsMapEditor"))&&(l=`Command "${o}" cannot be executed: ${r}. Please ensure the required editor or component is open and active.`),{id:e.id,result:null,error:l}}}async executeToolCalls(e,n){const i=[];for(const r of e){const s=await this.executeToolCall(r,n);i.push(s)}return i}createToolCallAccumulator(){return new f0}createToolCallSignature(e){const n=e.function.arguments||"{}";let i={};try{const s=JSON.parse(n);i=s&&typeof s=="object"?s:{}}catch{i={}}const r=i&&typeof i=="object"?Object.keys(i).sort().reduce((s,o)=>(s[o]=i[o],s),{}):{};return`${e.function.name}:${JSON.stringify(r)}`}}const uy=Object.freeze(Object.defineProperty({__proto__:null,ToolExecutor:Gd},Symbol.toStringTag,{value:"Module"}));class m0{async execute(e,n,i,r){const s=n.chatConfig;if(!s)throw new Error("Chat config is required");const o=e.map(async l=>{try{await r(l,n.chatContext.history,i.sharedState,s,n,i)}catch(c){const h=c instanceof Error?c:new Error(String(c));i.errors.set(l.role,h),n.onAgentError?.(l.role,h)}});await Promise.all(o)}}class g0{async execute(e,n,i,r){const s=n.chatConfig;if(!s)throw new Error("Chat config is required");let o=[...n.chatContext.history],l={...i.sharedState};for(const c of e)try{const h=this.createAgentContextWithPreviousAgents(l,n,i),u=await r(c,o,l,s,n,i);if(!u)break;const p=this.updateWorkflowState(u,o,l,h,i);o=p.currentMessages,l=p.accumulatedState}catch(h){const u=h instanceof Error?h:new Error(String(h));i.errors.set(c.role,u),n.onAgentError?.(c.role,u);break}}createAgentContextWithPreviousAgents(e,n,i){return{...e,...n.callContext.getProxy(),previousAgents:Array.from(i.messages.entries()).map(([r,s])=>({role:r,content:s.content}))}}updateWorkflowState(e,n,i,r,s){return n.push(e),i={...i,...r,message:e},s.sharedState=i,{currentMessages:n,accumulatedState:i}}}class b0{async execute(e,n,i,r){const s=n.chatConfig;if(!s)throw new Error("Chat config is required");let o=[...n.chatContext.history],l={...i.sharedState};for(const c of e)try{const h=this.createAgentContextWithPreviousAgents(l,n,i);if(c.canHandle&&!c.canHandle(h))continue;const u=await r(c,o,l,s,n,i);if(!u)break;const p=this.updateWorkflowState(u,o,l,h,i);o=p.currentMessages,l=p.accumulatedState}catch(h){const u=h instanceof Error?h:new Error(String(h));i.errors.set(c.role,u),n.onAgentError?.(c.role,u)}}createAgentContextWithPreviousAgents(e,n,i){return{...e,...n.callContext.getProxy(),previousAgents:Array.from(i.messages.entries()).map(([r,s])=>({role:r,content:s.content}))}}updateWorkflowState(e,n,i,r,s){return n.push(e),i={...i,...r,message:e},s.sharedState=i,{currentMessages:n,accumulatedState:i}}}class w0{constructor(){this.strategies=new Map([["parallel",new m0],["sequential",new g0],["conditional",new b0]])}registerStrategy(e,n){this.strategies.set(e,n)}async execute(e,n,i){const r=`workflow-${Date.now()}-${Math.random()}`,s=n.execution||"parallel",o=n.sharedState||{},l={messages:new Map,sharedState:{...o},errors:new Map};te(Md,{workflowId:r,options:n});try{const c=this.strategies.get(s);if(!c)throw new Error(`Unknown workflow execution strategy: ${s}`);return await c.execute(e,n,l,i),te(Nd,{workflowId:r,results:l}),l}catch(c){const h=c instanceof Error?c:new Error(String(c));throw te(Fd,{workflowId:r,error:h}),h}}}const mr=class mr{static estimateTokens(e){if(!e||e.trim().length===0)return 0;const n=e.trim(),i=n.length,r=n.split(/\s+/).filter(o=>o.length>0).length,s=Math.ceil(i/this.AVERAGE_CHARS_PER_TOKEN+r*.3);return Math.max(1,s)}static estimateMessageTokens(e){let n=this.MESSAGE_OVERHEAD;if(e.content&&(n+=this.estimateTokens(e.content)),e.role&&(n+=this.estimateTokens(e.role)),e.tool_calls)for(const i of e.tool_calls)n+=this.estimateTokens(i.function.name||""),n+=this.estimateTokens(i.function.arguments||"{}"),n+=10;return e.tool_call_id&&(n+=this.estimateTokens(e.tool_call_id)),n}static estimatePromptTokens(e,n){let i=0;for(const r of e)i+=this.estimateMessageTokens(r);if(n&&n.length>0){for(const r of n)if(i+=this.TOOL_DEFINITION_OVERHEAD,i+=this.estimateTokens(r.function.name||""),i+=this.estimateTokens(r.function.description||""),r.function.parameters){const s=JSON.stringify(r.function.parameters);i+=this.estimateTokens(s)}}return i}static estimateCompletionTokens(e,n){let i=this.estimateTokens(e);if(n&&n.length>0)for(const r of n)i+=10,i+=this.estimateTokens(r.function?.name||""),i+=this.estimateTokens(r.function?.arguments||"{}");return i}};mr.AVERAGE_CHARS_PER_TOKEN=4,mr.TOOL_DEFINITION_OVERHEAD=50,mr.MESSAGE_OVERHEAD=4;let _s=mr;const sc="ai_token_usage";class v0{constructor(){this.data=null,this.loadPromise=null}async loadData(){return this.data?this.data:this.loadPromise?this.loadPromise:(this.loadPromise=(async()=>{const e=await Et.getObject(sc);return e?this.data=e:(this.data={providers:{},total:{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},lastUpdated:Date.now()},await this.saveData()),this.loadPromise=null,this.data})(),this.loadPromise)}async saveData(){this.data&&(this.data.lastUpdated=Date.now(),await Et.persistObject(sc,this.data))}async recordUsage(e,n){if(await this.loadData(),!this.data)return;this.data.providers[e]||(this.data.providers[e]={promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0});const i=this.data.providers[e];i.promptTokens+=n.promptTokens,i.completionTokens+=n.completionTokens,i.totalTokens+=n.totalTokens,i.requestCount+=1,this.data.total.promptTokens+=n.promptTokens,this.data.total.completionTokens+=n.completionTokens,this.data.total.totalTokens+=n.totalTokens,this.data.total.requestCount+=1,await this.saveData()}async getProviderUsage(e){return await this.loadData(),this.data?.providers[e]||null}async getAllProviderUsage(){return await this.loadData(),this.data?.providers||{}}async getTotalUsage(){return await this.loadData(),this.data?.total||{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0}}async reset(){this.data={providers:{},total:{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},lastUpdated:Date.now()},await this.saveData()}async resetProvider(e){if(await this.loadData(),!this.data)return;const n=this.data.providers[e];n&&(this.data.total.promptTokens-=n.promptTokens,this.data.total.completionTokens-=n.completionTokens,this.data.total.totalTokens-=n.totalTokens,this.data.total.requestCount-=n.requestCount,delete this.data.providers[e],await this.saveData())}}const y0=new v0;class x0{constructor(){this.activeRequests=new Map,this.providerFactory=new s0,this.agentRegistry=new o0,this.promptBuilder=new u0,this.messageProcessor=new p0,this.toolExecutor=new Gd,this.workflowEngine=new w0,this.toolRegistry=new Hd,Ce(wn,()=>{this.aiConfig=void 0,this.configCheckPromise=void 0,this.checkAIConfig().then()}),this.checkAIConfig().then()}getAgentContributions(){return this.agentRegistry.getAgentContributions()}async getProviders(){return await this.checkAIConfig(),this.aiConfig?.providers||[]}async getDefaultProvider(){await this.checkAIConfig();const e=await this.getProviders();if(this.aiConfig?.defaultProvider){const n=e.find(i=>i.name===this.aiConfig?.defaultProvider);if(n)return n}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig&&(this.aiConfig.defaultProvider=e,await le.set(Fn,this.aiConfig)),this.getDefaultProvider()}createMessage(e){return{role:"user",content:e}}registerStreamingFetcher(e){this.providerFactory.registerProvider(e)}getContributedProviders(){return D.getContributions(Oe).map(n=>n.provider)}mergeProviders(e,n){const i=new Set(e.map(s=>s.name)),r=n.filter(s=>!i.has(s.name));return r.length>0?[...e,...r]:e}async createInitialConfig(){const e=this.getContributedProviders(),n={...Bd,providers:e};return await le.set(Fn,n),await le.get(Fn)}async updateConfigWithMissingProviders(e){const n=this.getContributedProviders(),i=this.mergeProviders(e.providers,n);if(i.length!==e.providers.length){const r={...e,providers:i};return await le.set(Fn,r),r}return e}async checkAIConfig(){if(!this.aiConfig)return this.configCheckPromise?this.configCheckPromise:(this.configCheckPromise=this.performConfigCheck(),this.configCheckPromise)}async performConfigCheck(){try{this.aiConfig=await le.get(Fn),this.aiConfig?this.aiConfig=await this.updateConfigWithMissingProviders(this.aiConfig):this.aiConfig=await this.createInitialConfig(),te(Xa,this.aiConfig)}finally{this.configCheckPromise=void 0}}createAgentContext(e,n,i={}){return{...e,...n.getProxy(),...i}}createFinalMessage(e,n){return{role:e.role,content:n.content,actions:n.actions,requiresAttention:n.requiresAttention,attentionRequests:n.attentionRequests,canContinue:n.canContinue}}async handleUserAttention(e,n,i,r){if(!n.requiresAttention||!i.userAttentionHandler)return!0;const s=[];if(n.attentionRequests&&s.push(...n.attentionRequests),n.actions)for(const c of n.actions)c.requiresAttention&&c.attentionRequest&&s.push(c.attentionRequest);if(s.length===0)return!0;if(r.pendingAttention||(r.pendingAttention=new Map),r.pendingAttention.set(e,s),i.onAttentionRequest)for(const c of s)i.onAttentionRequest(e,c);if(i.pauseOnAttention)return r.paused=!0,r.continuationToken=`${e}-${Date.now()}-${Math.random()}`,!1;const o=i.userAttentionHandler,l=this.createAgentContext(i.sharedState||{},i.callContext,{message:n});for(const c of s)if(o.onAttentionRequest){const h=await o.onAttentionRequest(c,l);if(c.requiresAction&&(h===!1||h===null))return!1;h&&typeof h=="string"&&(l[`attention_${c.type}_result`]=h)}else switch(c.type){case"confirmation":if(o.onConfirmation&&!await o.onConfirmation(c.message,l)&&c.requiresAction)return!1;break;case"input":if(o.onInput){const h=await o.onInput(c.message,void 0,l);if(!h&&c.requiresAction)return!1;h&&(l.attention_input_result=h)}break}return!0}async*streamCompletion(e){const n=`${Date.now()}-${Math.random()}`,i=new AbortController;this.activeRequests.set(n,i),e.signal&&e.signal.addEventListener("abort",()=>{i.abort()});const r=e.signal||i.signal;try{e.onStatus?.("starting"),te(Pd,{requestId:n,options:e});const s=e.chatConfig||await this.getDefaultProvider(),o=this.sanitizeMessagesForAPI(e.chatContext.history),l=this.providerFactory.getProvider(s),c=this.toolExecutor.createToolCallAccumulator();let h="",u={role:"assistant",content:""},p;for await(const w of l.stream({model:s.model,messages:o,chatConfig:s,tools:e.tools,signal:r})){if(w.type==="error"){e.onStatus?.("error"),te(ns,{requestId:n,chunk:w}),yield w;break}if(w.type==="token")c.processChunk(w),(!w.toolCalls||w.toolCalls.length===0)&&(h+=w.content,u.content=h),w.message?.role&&(u.role=w.message.role),w.content&&e.onToken?.(w.content),e.onStatus?.("streaming"),e.onProgress?.({received:h.length}),te(Dd,{requestId:n,chunk:w}),yield w;else if(w.type==="done"){w.metadata?.usage&&(p=w.metadata.usage),e.onStatus?.("complete"),te(zd,{requestId:n}),yield w;break}else yield w}const g=c.getFinalToolCalls(),b={role:u.role||"assistant",content:h||"",...g.length>0&&{toolCalls:g}};if(!p){const w=_s.estimatePromptTokens(o,e.tools),k=_s.estimateCompletionTokens(h,g);p={promptTokens:w,completionTokens:k,totalTokens:w+k,estimated:!0}}return y0.recordUsage(s.name,p).catch(w=>{ee.error(`Failed to record token usage: ${w instanceof Error?w.message:String(w)}`)}),{message:b,tokenUsage:p}}catch(s){if(s instanceof Error&&s.name==="AbortError")throw e.onStatus?.("error"),te(ns,{requestId:n,error:"Request cancelled"}),s;e.onStatus?.("error");const o=s instanceof Error?s.message:String(s);throw te(ns,{requestId:n,error:o}),yield{type:"error",content:o,metadata:{error:s}},s}finally{this.activeRequests.delete(n)}}async handleStreamingPromptDirect(e){const n=this.streamCompletion(e);let i;for(;;){if(i=await n.next(),i.done)return i.value.message;const r=i.value;if(r.type==="error")throw new Error(r.content);if(r.type==="done"){const s=await n.next();if(s.done&&s.value)return s.value.message;if(!s.done)continue;throw new Error("Stream completed without return value")}}}sanitizeMessageForAPI(e){const n={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(n.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(n.tool_calls=e.tool_calls),n}sanitizeMessagesForAPI(e){return e.map(n=>this.sanitizeMessageForAPI(n))}async handleStreamingPrompt(e){const n=e.callContext||He.createChild({}),i=this.createAgentContext({},n,{userPrompt:e.chatContext.history[e.chatContext.history.length-1]?.content||""}),r=this.agentRegistry.getMatchingAgents(i),s=r.length>0?r.map(c=>c.role):["assistant"],o=await this.executeAgentWorkflow({chatContext:e.chatContext,chatConfig:e.chatConfig,callContext:n,execution:"parallel",stream:e.stream,signal:e.signal,onToken:(c,h)=>{e.onToken?.(h)},onStatus:(c,h)=>{e.onStatus?.(h)},roles:s}),l=Array.from(o.messages.values());return l.length===1?l[0]:l}async continueWorkflow(e,n,i){const r={sharedState:{...i.sharedState,...Object.fromEntries(n)}},s={...i,sharedState:r.sharedState,pauseOnAttention:!1};return this.executeAgentWorkflow(s)}cancelRequest(e){const n=this.activeRequests.get(e);return n?(n.abort(),this.activeRequests.delete(e),!0):!1}async executeAgentWorkflow(e){const n=this.createAgentContext(e.sharedState||{},e.callContext),i=this.agentRegistry.getMatchingAgents(n,e.roles);return this.workflowEngine.execute(i,e,async(r,s,o,l,c,h)=>this.executeAgent(r,s,o,l,c,h))}async executeAgent(e,n,i,r,s,o){s.onAgentStart?.(e.role);const l=this.createAgentContext(i,s.callContext,{userPrompt:n[n.length-1]?.content||""}),{messages:c,tools:h}=await this.promptBuilder.build(e,n,l,e.hooks),u=c.map(C=>{const z={role:C.role,content:C.content};return C.tool_call_id&&(z.tool_call_id=C.tool_call_id),C.tool_calls&&(z.tool_calls=C.tool_calls),z});let p=await this.handleStreamingPromptDirect({chatContext:{history:u},chatConfig:r,callContext:s.callContext,stream:s.stream??!0,signal:s.signal,tools:h}),g=0;const b=[...c];for(;p.toolCalls&&p.toolCalls.length>0;){if(g++,g>aa){console.warn(`[AIService] Maximum tool call iterations (${aa}) reached`);break}let C=[];if(s.requireToolApproval&&s.onToolApprovalRequest){const P=p.toolCalls.map(de=>{const Pe=de.function.arguments||"{}";let ke={};try{ke=JSON.parse(Pe)}catch{ke={}}return`${de.function.name}(${Object.entries(ke).map(([_e,Se])=>`${_e}=${Se}`).join(", ")})`}).join(", "),be={toolCalls:p.toolCalls,message:`The AI wants to execute: ${P}`};await s.onToolApprovalRequest(e.role,be)?C=await this.toolExecutor.executeToolCalls(p.toolCalls,l):C=p.toolCalls.map(de=>({id:de.id,result:{success:!1,message:"Tool execution cancelled by user",cancelled:!0}}))}else C=await this.toolExecutor.executeToolCalls(p.toolCalls,l);const z=C.map(P=>({role:"tool",content:P.error?JSON.stringify({error:P.error}):JSON.stringify(P.result),tool_call_id:P.id})),R={role:"assistant",content:p.content||""};p.toolCalls&&p.toolCalls.length>0&&(R.tool_calls=p.toolCalls.filter(P=>P.function.name&&P.function.name.trim().length>0).map(P=>({id:P.id,type:P.type,function:{name:P.function.name,arguments:P.function.arguments||"{}"}}))),b.push(R,...z);const O=b;p=await this.handleStreamingPromptDirect({chatContext:{history:O.map(P=>({role:P.role,content:P.content,...P.tool_call_id&&{tool_call_id:P.tool_call_id},...P.tool_calls&&{tool_calls:P.tool_calls}}))},chatConfig:r,callContext:s.callContext,stream:s.stream??!0,signal:s.signal,tools:h});const _=p.content&&p.content.trim().length>0,X=p.toolCalls&&p.toolCalls.length>0;if(_&&!X)break;if(_&&X){console.warn("[AIService] Model provided content but also called tools - treating as completion");break}}const w=await this.messageProcessor.process(p,e,this.createAgentContext(i,s.callContext,{message:p}));e.hooks?.afterReceive&&await e.hooks.afterReceive(w,this.createAgentContext(i,s.callContext));const k=this.createFinalMessage(e,w);return!await this.handleUserAttention(e.role,k,s,o)&&s.pauseOnAttention?null:(o.messages.set(e.role,k),s.onAgentComplete?.(e.role,k),k)}}const py=new x0;D.registerContribution(Oe,{target:Oe,label:"Ollama (Local)",provider:{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"https://<your-server>/v1/chat/completions",apiKey:""}});D.registerContribution(Oe,{target:Oe,label:"OpenWebUI (Self Hosted)",provider:{name:"openwebui",model:"gemma3:12b",chatApiEndpoint:"https://<your-server>/api/v1/chat/completion",apiKey:""}});D.registerContribution(Oe,{target:Oe,label:"OpenAI",provider:{name:"openai",model:"gpt-4.1",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"}});D.registerContribution(Oe,{target:Oe,label:"Groq",provider:{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"}});D.registerContribution(Oe,{target:Oe,label:"Cerebras",provider:{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"}});D.registerContribution(Oe,{target:Oe,label:"WebLLM",provider:{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}});D.registerContribution(Oe,{target:Oe,label:"Mistral",provider:{name:"mistral",model:"mistral-large-latest",chatApiEndpoint:"https://api.mistral.ai/v1/chat/completions",apiKey:"<your api key>",ocrApiEndpoint:"https://api.mistral.ai/v1/ocr",ocrModel:"mistral-ocr-latest"}});D.registerContribution(Oe,{target:Oe,label:"LiteLLM",provider:{name:"litellm",model:"gpt-3.5-turbo",chatApiEndpoint:"https://<your-server>/v1/chat/completions",apiKey:"<your api key>"}});D.registerContribution(as,{name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>f`<k-filebrowser id="${t}"></k-filebrowser>`});D.registerContribution(va,{name:"aiview",label:"AI",icon:"robot",component:t=>f`<k-aiview id="${t}"></k-aiview>`});D.registerContribution("system.fastviews-bottomend",{name:"log-terminal",label:"Log Messages",icon:"list",component:t=>f`<k-log-terminal id="${t}"></k-log-terminal>`});D.registerContribution(wa,{slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"});D.registerContribution(Cr,{label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});D.registerContribution(Cr,{label:"Fast Views",html:'<k-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></k-fastviews>'});D.registerContribution(Cr,{label:"Language",html:()=>f`<k-language-selector></k-language-selector>`});D.registerContribution(ei,{label:"App Switcher",html:()=>f`<k-app-switcher></k-app-switcher>`});const ge=hn("MarketplaceRegistry"),Lo="events/marketplaceregistry/changed",oc="marketplace.catalogUrls";class k0{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(e=>{ge.error(`Failed to refresh catalogs on init: ${e.message}`)})}),Ce(Lo,()=>{this.registerMarketplaceExtensions()})}async loadCatalogUrls(){try{const e=await le.get(oc);this.catalogUrls=Array.isArray(e)?e:[],ge.debug(`Loaded ${this.catalogUrls.length} catalog URLs`)}catch(e){ge.error(`Failed to load catalog URLs: ${e}`),this.catalogUrls=[]}}async saveCatalogUrls(){await le.set(oc,this.catalogUrls),te(Lo,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(e){if(!this.isValidUrl(e))throw new Error(`Invalid catalog URL: ${e}`);if(this.catalogUrls.includes(e)){ge.debug(`Catalog URL already exists: ${e}`);return}this.catalogUrls.push(e),await this.saveCatalogUrls(),ge.info(`Added catalog URL: ${e}`);try{await this.refreshCatalogs()}catch(n){ge.warn(`Failed to refresh catalogs immediately after adding: ${n}`)}}async removeCatalogUrl(e){const n=this.catalogUrls.indexOf(e);n!==-1&&(this.catalogUrls.splice(n,1),await this.saveCatalogUrls(),ge.info(`Removed catalog URL: ${e}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(e){try{const n=new URL(e);return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}}async fetchCatalog(e){const n=this.loadingPromises.get(e);if(n)return n;const i=(async()=>{try{ge.debug(`Fetching catalog from: ${e}`);const r=await fetch(e,{method:"GET",headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const s=await r.json();if((!s.extensions||!Array.isArray(s.extensions))&&(!s.apps||!Array.isArray(s.apps)))throw new Error("Invalid catalog format: at least one of extensions or apps array is required");const o={name:s.name,description:s.description,extensions:s.extensions||[],apps:s.apps||[]},l=o.extensions?.length||0,c=o.apps?.length||0;return ge.debug(`Successfully fetched catalog from ${e}: ${l} extensions, ${c} apps`),o}catch(r){throw ge.error(`Failed to fetch catalog from ${e}: ${r}`),r}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,i),i}async refreshCatalogs(){ge.info(`Refreshing ${this.catalogUrls.length} catalogs...`);const e=this.catalogUrls.map(i=>this.fetchCatalog(i).catch(r=>(ge.warn(`Failed to refresh catalog ${i}: ${r.message}`),null)));(await Promise.allSettled(e)).forEach((i,r)=>{if(i.status==="fulfilled"&&i.value){const s=i.value;s.extensions&&s.extensions.forEach(o=>{if(!F.getExtensions().find(l=>l.id===o.id)){const l={...o,external:!0};F.registerExtension(l),ge.debug(`Registered marketplace extension: ${o.id}`)}}),s.apps&&s.apps.forEach(o=>{if(!ye.getRegisteredApps().find(l=>l.id===o.id)){const l={...o,metadata:{...o.metadata,marketplaceUrl:o.url}};ye.registerApp(l),ge.debug(`Registered marketplace app: ${o.id} from ${o.url}`)}})}}),te(Lo,{type:"refreshed"}),ge.info("Catalog refresh completed")}registerMarketplaceExtensions(){}getMarketplaceExtensions(){return[]}getMarketplaceExtension(e){const n=F.getExtensions().find(i=>i.id===e);if(n&&n.external)return n}getCatalogsWithExtensions(){return[]}async installExtension(e){if(F.isEnabled(e.id)){ge.info(`Extension ${e.id} is already installed`);return}if(!e.url)throw new Error(`Extension ${e.id} does not have a URL`);let n=e.url;Hn.isSourceIdentifier(e.url)&&(n=Hn.normalizeToEsmSh(e.url),ge.debug(`Converted source identifier to esm.sh URL: ${e.url} -> ${n}`)),ge.info(`Installing marketplace extension: ${e.name} from ${n}`);const i={...e,url:n,external:!0};F.registerExtension(i),await ye.loadExtensionFromUrl(n),ge.info(`Successfully installed marketplace extension: ${e.id}`)}isMarketplaceExtension(e){const n=F.getExtensions().find(i=>i.id===e);return n!==void 0&&n.external===!0}getMarketplaceApps(){return ye.getRegisteredApps().filter(e=>this.getMarketplaceApp(e.id)!==void 0)}getMarketplaceApp(e){const n=ye.getRegisteredApps().find(r=>r.id===e);if(!n)return;const i=n.metadata?.marketplaceUrl;if(!(!i||typeof i!="string"))return{id:n.id,name:n.name,version:n.version,description:n.description,metadata:n.metadata,extensions:n.extensions,contributions:n.contributions,releaseHistory:n.releaseHistory,url:i}}async installApp(e){if(ye.getRegisteredApps().find(i=>i.id===e.id)){ge.info(`App ${e.id} is already registered`);return}ge.info(`Installing marketplace app: ${e.name} from ${e.url}`);try{const i=await ye.loadAppFromUrl(e.url);ye.registerApp(i),ge.info(`Successfully installed marketplace app: ${e.id}`)}catch(i){throw ge.error(`Failed to install marketplace app ${e.id}: ${i}`),i}}isMarketplaceApp(e){return this.getMarketplaceApp(e)!==void 0}}const Kd=new k0;He.put("marketplaceRegistry",Kd);const E0=hn("MarketplaceCatalogContributions");Kd.addCatalogUrl("https://marketplace.kispace.de/externals.json").catch(t=>{E0.warn(`Failed to add commercial catalog: ${t}`)});const C0={enhance:async(t,e)=>{try{const n=await xt.getWorkspace(),i=qi.getEditorArea()?.getActiveEditor(),r={workspace:n?.getName()||null,activeEditor:i?{title:i.input?.title||null,editorId:i.input?.editorId||null}:null},s=`***App's state:***
${JSON.stringify(r,null,2)}`;return`${t}

${s}`}catch{return t}},priority:20};D.registerContribution(Ga,{label:"App State Enhancer",enhancer:C0});const ir=hn("HowToService"),Ts="system.howtos";class S0{constructor(){this.contributions=new Map,this.loadContributions(),Ce(Ft,e=>{e.target===Ts&&this.loadContributions()})}loadContributions(){const e=D.getContributions(Ts);this.contributions.clear();for(const n of e){if(!n.id){ir.warn("HowTo contribution missing id, skipping");continue}if(!n.label){const s=typeof n.title=="function"?n.title():n.title;n.label=s}if(!n.steps||n.steps.length===0){ir.warn(`HowTo contribution "${n.id}" has no steps, skipping`);continue}const i=new Set;for(const s of n.steps){if(i.has(s.id)){ir.warn(`HowTo contribution "${n.id}" has duplicate step ID: "${s.id}"`);continue}i.add(s.id)}this.contributions.set(n.id,n);const r=typeof n.title=="function"?n.title():n.title;ir.debug(`Loaded HowTo contribution: ${r} (${n.id})`)}ir.info(`Loaded ${this.contributions.size} HowTo contributions`)}getContribution(e){return this.contributions.get(e)}getAllContributions(){return Array.from(this.contributions.values())}getContributionsByCategory(e){return Array.from(this.contributions.values()).filter(n=>n.category===e)}hasContribution(e){return this.contributions.has(e)}}const fy=new S0,Rs="welcome.txt";function $0(t){return t&&typeof t.getFilePath=="function"}async function A0(){return xt.isConnected()}async function ac(){const t=await xt.getWorkspace();if(!t)return!1;try{return await t.getResource(Rs)instanceof dn}catch{return!1}}function ur(){const t=Lt.get();return!t||!$0(t)?!1:t.getFilePath()===Rs}function _0(){if(!ur())return!1;const t=Lt.get();return t?t.isDirty()===!1:!1}function T0(){return!ur()}function lc(){return ye.getCurrentApp()?.name||"AppSpace"}const R0={id:"appspace.onboarding",title:()=>`Welcome to ${lc()}`,description:()=>`Get started with ${lc()} by learning the basics of workspace and file management`,icon:"graduation-cap",label:"",category:"Getting Started",initialize:t=>{const e=[];return Ce(It,()=>{t.requestUpdate()}),Ce(Ii,()=>{t.requestUpdate()}),e.push(xi(Lt,()=>{t.requestUpdate()})),e.push(xi(wr,()=>{t.requestUpdate()})),()=>{e.forEach(n=>n())}},steps:[{id:"create-text-file",title:"Create welcome.txt",description:`Create a new text file called "welcome.txt" in your workspace. If you don't have a workspace selected, choose one first.`,preCondition:async()=>await A0(),postCondition:async()=>await ac(),command:"create_file",commandParams:{path:Rs,contents:`Welcome to AppSpace!

This is your first file. You can edit it and save your changes.`}},{id:"open-text-file",title:"Open welcome.txt",description:'Open the "welcome.txt" file in the editor.',preCondition:async()=>await ac(),postCondition:()=>ur(),command:"open_editor",commandParams:{path:Rs}},{id:"edit-and-save",title:"Type something and save",description:"Type some text in the editor to modify the file, then save it using Ctrl+S or the save button.",preCondition:()=>ur(),postCondition:()=>_0()},{id:"close-text-file",title:"Close the file",description:"Close the editor tab by clicking the X button on the tab.",preCondition:()=>ur(),postCondition:()=>T0()}]};D.registerContribution(Ts,R0);const Yd=".system.ai-config";function Zd(t){return t&&typeof t.getFilePath=="function"}function pr(){const t=Lt.get();return!t||!Zd(t)?!1:t.getFilePath()===Yd}async function cc(){try{const t=await le.get(Fn);if(!t||!t.defaultProvider)return!1;const e=t.providers?.find(n=>n.name===t.defaultProvider);return e?!!e.apiKey&&e.apiKey.trim()!=="":!1}catch{return!1}}function I0(){const t=Lt.get();return!t||!Zd(t)||t.getFilePath()!==Yd?!1:t.isDirty()===!0}function L0(){return pr()?!I0():!1}function O0(){return!pr()}async function P0(){try{const t=await le.get("aiChatSessions");if(!t||typeof t!="object")return!1;for(const e in t){const n=t[e];if(n?.history&&Array.isArray(n.history)&&n.history.some(r=>r.role==="user"&&r.content&&r.content.trim()!==""))return!0}return!1}catch{return!1}}function dc(){return ye.getCurrentApp()?.name||"AppSpace"}const D0={id:"appspace.ai-setup",title:()=>`Set up AI in ${dc()}`,description:()=>`Configure an LLM provider to enable AI chat features in ${dc()}`,icon:"robot",label:"",category:"Getting Started",initialize:t=>{const e=[];return e.push(xi(Lt,()=>{t.requestUpdate()})),e.push(xi(wr,()=>{t.requestUpdate()})),Ce(Xa,()=>{t.requestUpdate()}),()=>{e.forEach(n=>n())}},steps:[{id:"open-ai-settings",title:"Open AI Settings",description:"Open the AI settings editor by clicking the robot icon in the toolbar or using the command palette.",preCondition:()=>!0,postCondition:()=>pr(),command:"open_ai_config"},{id:"configure-llm-provider",title:"Configure LLM Provider",description:"Select a provider as default and enter an API key. Make sure to save your changes using Ctrl+S or the save button.",preCondition:()=>pr(),postCondition:async()=>{const t=await cc(),e=L0();return t&&e}},{id:"save-and-close",title:"Save and Close",description:"Save your changes (if not already saved) and close the AI settings editor tab.",preCondition:()=>pr(),postCondition:()=>O0()},{id:"type-in-chat",title:"Type in Chat",description:"Open the AI chat view (if not already open) and type a message to test your AI configuration.",preCondition:async()=>await cc(),postCondition:async()=>await P0()}]};D.registerContribution(Ts,D0);async function Js(t,e=!0){const n=await xt.getWorkspace();if(!n)return null;const i=t?.path;return e&&!i?null:{workspace:n,path:i||""}}function Ka(t){return t&&typeof t.getContent=="function"&&typeof t.getSelection=="function"&&typeof t.getSnippet=="function"&&typeof t.getLanguage=="function"&&typeof t.getFilePath=="function"}async function Jd(t,e){let n;const i=t.params?.path;if(i){const r=await xt.getWorkspace();r&&(n=await r.getResource(i))}return n||(n=Mn.get()),n}async function Qs(t){try{const e=await t.getContents();return typeof e!="string"?(Ae("File is not a text file"),null):e}catch(e){return Ae(`Failed to read file: ${e.message}`),null}}function yn(t=!1){const e={filePath:null,language:null};return t?{...e,snippet:null,cursorLine:null}:e}async function Or(t,e=!0){const n=await Js(t,e);if(!n)return null;const{workspace:i,path:r}=n;if(!r)return null;try{const s=await i.getResource(r);return!s||!(s instanceof dn)?null:{workspace:i,path:r,file:s}}catch{return null}}ce({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace. For .geospace map files, use create_map_file instead.",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async({params:t})=>{let e=t?.path;const n=t?.contents,i=t?.ask,r=t?.extension;if((i||!e)&&(e=await Yc("Enter path to new file (directories will be created if not exist):",e||""),!e))return;r&&!e.endsWith(r)&&(e+=r);const s=await Js({path:e},!0);if(!s)return;const{workspace:o}=s;if(await o.getResource(e)&&!await Bs(`File "${e}" already exists. Do you want to overwrite it?`))return;const c=await o.getResource(e,{create:!0});return c?(n&&await c.saveContents(n),ee.info("File created: "+e)):Ae("Could not create file: "+e),e}}});ce({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{const e=await Jd(t);if(!e){Ae("No resource to rename provided!");return}const n=e.getName(),i=t.params?.newName||await Yc(`Enter new name for "${n}":`,n);if(!(!i||i===n))try{await e.rename(i),en(`Resource renamed to: ${i}`)}catch(r){Ae(`Failed to rename ${n}: ${r.message}`)}}}});ce({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{const e=await Jd(t);if(!e){Ae("No resource to delete provided!");return}const n=e.getWorkspacePath(),i=t.params&&t.params.confirm;let r=!0;if((i===void 0||i===!0)&&(r=await Bs(`Are you sure you want to delete ${n}?`)),r)try{await e.delete(),en("Resource deleted: "+n)}catch(s){Ae(`Resource ${n} could not be deleted: ${s.message||s}`)}}}});ce({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>xt.connectWorkspace(e)).catch(e=>{Ae(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});ce({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await xt.getWorkspace();e||Ae("No workspace selected."),e.touch()}}});ce({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Or({path:t.params?.path});if(!e)return;const{file:n}=e;await qi.loadEditor(n)}}});ce({command:{id:"head_file",name:"Head - Show first lines",description:"Shows the first N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the beginning (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the first N lines of the file"}]},handler:{execute:async({params:t})=>{const e=await Or(t);if(!e)return;const{file:n}=e,i=t?.lines?parseInt(t.lines,10):10;if(isNaN(i)||i<1){Ae("Number of lines must be a positive integer");return}const r=await Qs(n);return r?r.split(`
`).slice(0,i).join(`
`):void 0}}});ce({command:{id:"tail_file",name:"Tail - Show last lines",description:"Shows the last N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the end (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the last N lines of the file"}]},handler:{execute:async({params:t})=>{const e=await Or(t);if(!e)return;const{file:n}=e,i=t?.lines?parseInt(t.lines,10):10;if(isNaN(i)||i<1){Ae("Number of lines must be a positive integer");return}const r=await Qs(n);return r?r.split(`
`).slice(-i).join(`
`):void 0}}});ce({command:{id:"cat_file",name:"Cat - Show file contents",description:"Shows the complete contents of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0}],output:[{name:"content",description:"the complete contents of the file"}]},handler:{execute:async({params:t})=>{const e=await Or(t);if(!e)return;const{file:n}=e;return await Qs(n)}}});ce({command:{id:"wc_file",name:"Word count",description:"Counts lines, words, and characters in a file",parameters:[{name:"path",description:"the path of the file to analyze",required:!0}],output:[{name:"lines",description:"number of lines in the file"},{name:"words",description:"number of words in the file"},{name:"characters",description:"number of characters in the file"}]},handler:{execute:async({params:t})=>{const e=await Or(t);if(!e)return;const{file:n}=e,i=await Qs(n);if(!i)return;const s=i.split(`
`).length,o=i.trim()===""?0:i.trim().split(/\s+/).filter(c=>c.length>0).length,l=i.length;return{lines:s,words:o,characters:l}}}});ce({command:{id:"file_exists",name:"Check if file exists",description:"Checks if a file exists at the given path",parameters:[{name:"path",description:"the path of the file to check, relative to the workspace",required:!0}],output:[{name:"exists",description:"true if the file exists, false otherwise"}]},handler:{execute:async({params:t})=>{const e=await Js(t);if(!e)return!1;const{workspace:n,path:i}=e;try{return await n.getResource(i)instanceof dn}catch{return!1}}}});async function Qd(t){const e=[],n=await t.listChildren(!0);for(const i of n)if(i instanceof dn)e.push(i.getWorkspacePath());else if(i instanceof wi){const r=await Qd(i);e.push(...r)}return e}ce({command:{id:"ls",name:"List files",description:"Lists files from a directory. If recursive is provided, it traverses from the provided directory down to all leaves. If no directory is provided, it will traverse from the workspace root.",parameters:[{name:"path",description:"the path of the directory to list, relative to the workspace. If not provided, uses workspace root",required:!1},{name:"recursive",description:"whether to recursively traverse all subdirectories",type:"boolean",required:!1}],output:[{name:"files",description:"array of file objects with path and size information"}]},handler:{execute:async({params:t})=>{const e=await Js(t,!1);if(!e)return Ae("No workspace available"),[];const{workspace:n,path:i}=e,r=t?.recursive===!0||t?.recursive==="true";try{let s=n;if(i){const o=await n.getResource(i);if(!o)return Ae(`Path not found: ${i}`),[];if(!(o instanceof wi))return Ae(`Path is not a directory: ${i}`),[];s=o}if(r){const o=await Qd(s),l=[];for(const c of o){const h=await n.getResource(c);if(h instanceof dn){const u=await h.size();l.push({path:c,size:u})}}return l}else{const o=await s.listChildren(!0),l=[];for(const c of o)if(c instanceof dn){const h=await c.size();l.push({path:c.getWorkspacePath(),size:h})}return l}}catch(s){return Ae(`Failed to list files: ${s.message}`),[]}}}});ce({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!Ka(e))return{...yn(),content:null};try{return{content:e.getContent(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...yn(),content:null}}}}});ce({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!Ka(e))return{...yn(),selection:null};try{return{selection:e.getSelection(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...yn(),selection:null}}}}});ce({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async t=>{const e=t.activeEditor;if(!Ka(e))return yn(!0);try{const n=t.params?.lines?parseInt(t.params.lines,10):5;if(isNaN(n)||n<0)return yn(!0);const i=e.getSnippet(n);return i?{snippet:i.snippet,filePath:e.getFilePath(),language:e.getLanguage(),cursorLine:i.cursorLine}:yn(!0)}catch{return yn(!0)}}}});function z0(t){return new Worker("/assets/pyworker-Drd8fvVW.js",{type:"module",name:t?.name})}let Oo=null;async function M0(){return Oo||(Oo=ue(()=>import("./index-u8CfTVz1.js").then(t=>t.i),[])),Oo}let N0=0;class F0{constructor(){this.pendingMessages=new Map}async init(e,n){this.workspace=e,this.vars=n??{},this.worker=new z0,this.worker.onmessage=i=>{this.handleWorkerMessage(i.data)},this.worker.onerror=i=>{console.error("Python Worker error:",i)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const i=e.payload.prompt||"Input:",r=window.prompt(i);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:r,cancelled:r===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:i,message:r}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",r,i);return}const n=this.pendingMessages.get(e.id);n&&(this.pendingMessages.delete(e.id),e.type==="success"?n.resolve(e.payload):e.type==="error"&&n.reject(new Error(e.payload.message)))}async sendMessage(e,n){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const i=`msg-${N0++}`,r={id:i,type:e,payload:n};return new Promise((s,o)=>{this.pendingMessages.set(i,{resolve:s,reject:o}),this.worker.postMessage(r)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,n){const i=await this.sendMessage("runFunction",{name:e,args:n});return te(It,this.workspace),i}async setGlobal(e,n){await this.sendMessage("setGlobal",{key:e,value:n})}async mountWorkspace(e="/workspace"){const n=await xt.getWorkspace();await this.sendMessage("mountWorkspace",{handle:n.getHandle(),mountPoint:e})}async installDependencies(){const e=await this.workspace?.getResource("requirements.txt");if(e){const n=(await e.getContents()).replaceAll("\r",""),{parsePipRequirementsFile:i}=await M0(),r=i(n).filter(s=>"name"in s).map(s=>s.name);await this.loadPackages(r)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),te(It,this.workspace)}async execCode(e){const n=await this.sendMessage("execCode",{code:e});return te(It,this.workspace),n}async execScript(e){const n=e.split(".")[0],i=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(n,i)}async execModule(e,n){const i=await this.sendMessage("execModule",{moduleName:e,entryName:n,vars:this.vars});return te(It,this.workspace),i}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class U0{constructor(){this.packages=[]}addPackage(e){this.packages.push(e)}hasPackages(){return this.packages.length>0&&this.packages.some(e=>e.dependencies&&Object.keys(e.dependencies).length>0)}renderTree(){return this.packages.length===0?f``:f`
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
        `}}const la=new U0;ce({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{const e=ye.getCurrentApp();if(!e){Ae("No app loaded");return}const n=la.hasPackages(),i=la.renderTree();let r=null;const s=()=>(r||(r=document.getElementById("global-dialog-container")||document.createElement("div"),r.id||(r.id="global-dialog-container",document.body.appendChild(r))),r),o=()=>{r&&Ct(f``,r)},l=L=>{const C=re.parse(L,{async:!1});return f`${nn(C)}`};let c=[];if(e.releaseHistory)if(typeof e.releaseHistory=="function")try{c=await e.releaseHistory()}catch(L){console.error("Failed to load release history from app:",L),c=[]}else c=e.releaseHistory;e.version;const h=c.length>0?c.findIndex(L=>L.tag_name===e.version):-1,u=h>=0?h:0;let p=u;const g=L=>{if(c.length===0)return"";const C=c[L],z=C.tag_name===e.version;let R=`**Version:** ${C.tag_name}`;z&&(R+=" (Current)"),R+=`

`;const O=new Date(C.published_at).toLocaleDateString();if(R+=`**Released:** ${O}

`,!z){const _=e.version.replace(/^v/,""),X=C.tag_name.replace(/^v/,""),P=_.split(".").map(Number),be=X.split(".").map(Number);let we=!1;for(let de=0;de<Math.max(P.length,be.length);de++){const Pe=P[de]||0,ke=be[de]||0;if(ke>Pe){we=!0;break}if(ke<Pe)break}we&&(R+=`⚠️ **Update available - reload page to update**

`)}return C.body&&(R+=`---

${C.body}`),R},b=()=>{o()},w=()=>{o()},k=L=>{const C=g(L),z=c.length>0,R=f`
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
                            ${z?f`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${L===c.length-1}
                                    @click=${()=>{L<c.length-1&&(p=L+1,k(p))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${L===0}
                                    @click=${()=>{L>0&&(p=L-1,k(p))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;Ct(R,s())};return k(u),new Promise(L=>{const C=()=>{r?.querySelector("wa-dialog[open]")?setTimeout(C,100):L()};C()})}}});ce({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async t=>{const e=t.params.script;if(!e)return;const n=new F0,i=await xt.getWorkspace();await n.init(i,t),await n.installDependencies(),await n.execScript(e)}}});ce({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});ce({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=Lt.get()||gt.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const t=gt.get();return!t||!t.isDirty()}}});ce({command:{id:"run_python",name:"Run Python Cell",description:"Runs active Python code in a supporting context (e.g. notebook, terminal, etc.)",keyBinding:"CTRL+R",parameters:[]}});const eh="theme";async function th(t){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(t)}async function B0(){const t=await le.get(eh);await th(t||"wa-dark")}async function V0(t){await le.set(eh,t)}ce({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{const n=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await th(n),await V0(n)}},contribution:{target:ei,icon:"circle-half-stroke",label:"Theme Switcher"}});B0().catch(t=>{console.error("Failed to load theme preference:",t)});ce({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:ei,icon:"expand",label:"Fullscreen"}});ce({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:async t=>{await ue(()=>import("./k-monaco-editor-DO62Rz3r.js"),__vite__mapDeps([5,6,7,8]));const e={title:"settings.json",data:{async getContents(){const n=await le.getAll();return JSON.stringify(n,void 0,2)},getName(){return e.key},saveContents(n){const i=JSON.parse(n);return le.setAll(i)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};e.widgetFactory=()=>f`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,qi.loadEditor(e).then()}},contribution:{target:ei,icon:"gear",label:"Open Settings"}});ce({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>f`
                <k-extensions></k-extensions>`,qi.loadEditor(e).then()}},contribution:{target:ei,icon:"puzzle-piece",label:"Open Extensions"}});ce({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async t=>F.getExtensions().map(n=>({id:n.id,name:n.name,description:n.description,experimental:n.experimental,enabled:F.isEnabled(n.id)}))}});ce({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?Ae(t):en(t))}}});const q0="@kispace-io/appspace",H0="1.2.2",W0={"@awesome.me/webawesome":"^3.0.0","@fortawesome/fontawesome-free":"^7.1.0","@fortawesome/fontawesome-svg-core":"^7.1.0","@fortawesome/free-solid-svg-icons":"^7.1.0","@langchain/textsplitters":"^1.0.0","@lit-labs/signals":"^0.1.3","@mlc-ai/web-llm":"^0.2.79","@xenova/transformers":"^2.17.2","@xterm/xterm":"^5.5.0",axios:"^1.13.1",dotenv:"^17.2.3","idb-keyval":"^6.2.2",jsonata:"^2.1.0",jszip:"^3.10.1",lit:"^3.2.1",marked:"^12.0.0 || ^16.4.1","monaco-editor":"0.55.1","pace-js":"^1.2.4","pdfjs-dist":"^4.0.0","pip-requirements-js":"^1.0.2",pyodide:"^0.27.7",rxdb:"^15.0.0",uuid:"^13.0.0","wasm-git":"^0.0.13"},j0={typescript:"^5.9.3",vite:"^7.1.12","vite-plugin-dts":"^4.5.4"},Kr={name:q0,version:H0,dependencies:W0,devDependencies:j0};la.addPackage({name:Kr.name,version:Kr.version,dependencies:Kr.dependencies,devDependencies:Kr.devDependencies});var X0=Object.defineProperty,G0=Object.getOwnPropertyDescriptor,Pr=(t,e,n,i)=>{for(var r=i>1?void 0:i?G0(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&X0(e,n,r),r};let Oi=class extends Ha{constructor(){super(...arguments),this.showBottomSidebar=!1,this.showBottomPanel=!1,this.showLeftSidebar=!0,this.showAuxSidebar=!0}createRenderRoot(){return this}getGridSizes(){return this.showLeftSidebar&&this.showAuxSidebar?"15%, 65%, 20%":this.showLeftSidebar?"15%, 85%":this.showAuxSidebar?"80%, 20%":"100%"}render(){return f`
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
                <k-toolbar id=${$c}></k-toolbar>
                <k-toolbar id=${Ac}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${ei}></k-toolbar>
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
                                    <k-tabs id="${as}"></k-tabs>
                                    <k-tabs id="${_c}"></k-tabs>
                                </k-resizable-grid>
                            `:f`<k-tabs id="${as}"></k-tabs>`}
                    `:N}
                
                ${this.showBottomPanel?f`
                        <k-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <k-tabs id="${bn}"></k-tabs>
                            <k-tabs id="${Tc}"></k-tabs>
                        </k-resizable-grid>
                    `:f`<k-tabs id="${bn}"></k-tabs>`}
                
                ${this.showAuxSidebar?f`<k-tabs id="${va}"></k-tabs>`:N}
            </k-resizable-grid>
            
            <div class="toolbar-bottom">
                <k-toolbar id=${wa}></k-toolbar>
                <k-toolbar id=${Ds}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Cr}></k-toolbar>
            </div>
        `}};Pr([d({type:Boolean,attribute:"show-bottom-sidebar"})],Oi.prototype,"showBottomSidebar",2);Pr([d({type:Boolean,attribute:"show-bottom-panel"})],Oi.prototype,"showBottomPanel",2);Pr([d({type:Boolean,attribute:"show-left-sidebar"})],Oi.prototype,"showLeftSidebar",2);Pr([d({type:Boolean,attribute:"show-aux-sidebar"})],Oi.prototype,"showAuxSidebar",2);Oi=Pr([S("k-standard-app")],Oi);ye.registerApp({id:"dev-standard-app",name:"Default App",version:"0.0.0",description:"Default app!space application",extensions:["system.commandpalette","system.mdeditor","system.monaco","system.mediaviewer","system.settings-tree","system.memoryusage","system.ai-system"]},{autoStart:!0});export{Mi as $,qi as A,d as B,D as C,Ga as D,wa as E,dn as F,te as G,It as H,wi as I,hn as J,Gt as K,Ct as L,wn as M,le as N,Yc as O,F0 as P,Bs as Q,He as R,rn as S,$c as T,c0 as U,qn as V,Xe as W,$ as X,sv as Y,Xa as Z,ue as _,Sc as a,zd as a0,y0 as a1,s0 as a2,Fn as a3,Oe as a4,Ud as a5,ei as a6,Wd as a7,jd as a8,qp as a9,Ii as aa,N as ab,Ar as ac,Ts as ad,Ft as ae,fy as af,pt as ag,Cr as ah,ee as ai,Y0 as aj,ay as ak,ly as al,hy as am,uy as an,S as b,Tc as c,py as d,xn as e,Lt as f,ti as g,Ac as h,qe as i,mt as j,Te as k,A as l,Ae as m,kn as n,Ys as o,Cv as p,K0 as q,ce as r,Ce as s,en as t,ih as u,Mn as v,xt as w,f as x,nn as y,re as z};
