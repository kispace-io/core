import{K as p,F as c,b as s,A as g,e as m,i as v,n as u,r as n,t as f}from"./main-BbPsMdsl.js";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,l=(t,e,a,o)=>{for(var i=o>1?void 0:o?b(e,a):e,d=t.length-1,h;d>=0;d--)(h=t[d])&&(i=(o?h(e,a,i):h(i))||i);return o&&i&&y(e,a,i),i};const w=[".pdf",".jpg",".jpeg",".png",".gif",".svg",".webp",".bmp",".ico"],N=t=>{const e=t.toLowerCase();return e.endsWith(".pdf")?"file-pdf":e.match(/\.(jpg|jpeg|png|gif|webp|bmp|ico|svg)$/)?"image":"file"},I=t=>{const e=t.getName().toLowerCase();return w.some(a=>e.endsWith(a))},x=[".jpg",".jpeg",".png",".gif",".svg",".webp",".bmp",".ico"],$=t=>{const e=t.getName().toLowerCase();return x.some(a=>e.endsWith(a))};m.registerEditorInputHandler({canHandle:t=>t instanceof c&&I(t),handle:async t=>{const e={title:t.getName(),data:t,key:t.getName(),editorId:"media-viewer",icon:N(t.getName()),noOverflow:!1,state:{}};return e.widgetFactory=()=>s`
            <k-media-viewer .input=${e}></k-media-viewer>`,e},ranking:1e3});let r=class extends p{constructor(){super(...arguments),this.imageNaturalWidth=0,this.imageNaturalHeight=0,this.overlays=[],this.onImageLoad=t=>{const e=t.target;e?.naturalWidth&&e?.naturalHeight&&(this.imageNaturalWidth=e.naturalWidth,this.imageNaturalHeight=e.naturalHeight)}}getMediaUrl(){return this.mediaUrl}getIsImage(){return!!(this.input?.data instanceof c&&this.mediaUrl&&$(this.input.data))}getImageDimensions(){return{width:this.imageNaturalWidth,height:this.imageNaturalHeight}}setOverlays(t){this.overlays=t??[]}getOverlays(){return[...this.overlays]}clearOverlays(){this.overlays=[]}doClose(){this.mediaUrl&&this.mediaUrl.startsWith("blob:")&&URL.revokeObjectURL(this.mediaUrl),this.input=void 0,this.mediaUrl=void 0,this.overlays=[],this.imageNaturalWidth=0,this.imageNaturalHeight=0}async doInitUI(){await this.loadMedia()}async loadMedia(){if(!this.input?.data||!(this.input.data instanceof c))return;const e=await this.input.data.getContents({uri:!0});this.mediaUrl=e,this.overlays=[]}render(){if(!this.mediaUrl)return s`
                <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                    <wa-spinner></wa-spinner>
                </div>
            `;if(this.getIsImage()){const e=this.imageNaturalWidth||1,a=this.imageNaturalHeight||1,o=e/a;return s`
                <div class="image-container">
                    <div
                        class="image-wrapper"
                        style="aspect-ratio: ${o};"
                    >
                        <img
                            class="media-image"
                            src="${this.mediaUrl}"
                            alt=""
                            @load=${this.onImageLoad}
                        />
                        ${this.overlays.length>0?s`
                            <div class="overlay-layer">
                                ${this.overlays.map(i=>i.type==="bbox"?s`
                                    <div
                                        class="overlay-bbox"
                                        style="left: ${i.left*100}%; top: ${i.top*100}%; width: ${i.width*100}%; height: ${i.height*100}%;${i.color?` --overlay-color: ${i.color};`:""}"
                                        title="${i.label??""}"
                                    >
                                        ${i.label?s`<span class="overlay-label">${i.label}</span>`:g}
                                    </div>
                                `:g)}
                            </div>
                        `:g}
                    </div>
                </div>
            `}return s`
            <iframe
                src="${this.mediaUrl}"
                class="media-iframe"
                title="Media Viewer">
            </iframe>
        `}};r.styles=v`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
            background: var(--wa-color-surface-default, #1a1a1a);
        }

        .image-container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .image-wrapper {
            position: relative;
            max-width: 100%;
            max-height: 100%;
        }

        .media-image {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .overlay-layer {
            position: absolute;
            inset: 0;
            pointer-events: none;
        }

        .overlay-bbox {
            position: absolute;
            border: 2px solid var(--overlay-color, var(--wa-color-brand-fill, #0d6efd));
            background: color-mix(in srgb, var(--overlay-color, #0d6efd) 15%, transparent);
            pointer-events: auto;
            box-sizing: border-box;
        }

        .overlay-label {
            position: absolute;
            left: 0;
            top: -1.25em;
            font-size: 0.7rem;
            white-space: nowrap;
            background: var(--overlay-color, var(--wa-color-brand-fill, #0d6efd));
            color: var(--wa-color-surface-default, #fff);
            padding: 1px 4px;
            border-radius: 2px;
        }
    `;l([u({attribute:!1})],r.prototype,"input",2);l([n()],r.prototype,"mediaUrl",2);l([n()],r.prototype,"imageNaturalWidth",2);l([n()],r.prototype,"imageNaturalHeight",2);l([n()],r.prototype,"overlays",2);r=l([f("k-media-viewer")],r);export{r as KMediaViewer};
