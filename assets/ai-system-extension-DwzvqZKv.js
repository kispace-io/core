const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-BEYAOB-D.js","assets/main-DCTlflHk.css"])))=>i.map(i=>d[i]);
import{m as I,h as E,ac as m,N as Ae,w as le,e as X,I as ce,i as $,n as v,f as w,ad as U,d as l,ae as h,o as Ee,k as Se,t as P,af as ye,z as Y,_ as F,K as ie,B as K,a1 as de,U as L,g as M,V as pe,aD as he,u as J,D as ge,s as Q,aF as Te,aG as Z,aH as Ce,l as ue,a2 as ee,S as me,ap as ve,aI as Oe,J as te,b as we,T as fe,r as be,ag as _e,ah as Ie,a9 as $e,ai as Pe,c as Me,F as xe,aj as ke,ak as Re,al as Ne,am as De,a3 as Le,an as Ue,ao as Ge,aq as ze,ar as Ve,as as qe,a5 as Ke,Q as Fe,H as We,X as Be,M as He,Y as je,at as Ye,G as Qe,au as Xe,R as Je,av as Ze,a0 as et,aw as tt,C as at,ax as st,ay as it,az as ot,A as rt,aA as nt,$ as lt,aB as ct,q as dt,L as pt,W as ht,a8 as gt,aC as ut,aE as mt,Z as vt}from"./main-BEYAOB-D.js";const ne=Object.freeze(Object.defineProperty({__proto__:null,COMMAND_SAVE:_e,CommandRegistry:Ie,Directory:$e,EDITOR_AREA_MAIN:Pe,File:Me,FileContentType:xe,HIDE_DOT_RESOURCE:ke,KContainer:Re,KDialogContent:Ne,KElement:ge,KPart:ie,get KStandardApp(){return De},KWidget:Le,MouseButton:Ue,PANEL_BOTTOM:Ge,SIDEBAR_AUXILIARY:ve,SIDEBAR_MAIN:ze,SIDEBAR_MAIN_BOTTOM:Ve,SYSTEM_LANGUAGE_BUNDLES:me,TOOLBAR_BOTTOM:te,TOOLBAR_BOTTOM_CENTER:qe,TOOLBAR_BOTTOM_END:Ke,TOOLBAR_MAIN:Fe,TOOLBAR_MAIN_CENTER:We,TOOLBAR_MAIN_RIGHT:fe,TOPIC_CONTRIBUTEIONS_CHANGED:Be,TOPIC_SETTINGS_CHANGED:ue,TOPIC_WORKSPACE_CHANGED:He,TOPIC_WORKSPACE_CONNECTED:je,WorkspaceService:Ye,activeEditorSignal:Qe,activePartSignal:Xe,activeSelectionSignal:Je,activeTasksSignal:Ze,appLoaderService:et,appSettings:I,applyAppHostConfig:tt,commandRegistry:M,confirmDialog:J,contributionRegistry:E,createLogger:at,editorRegistry:X,esmShService:st,extensionRegistry:it,i18n:ce,i18nLazy:ot,logger:rt,packageInfoService:nt,partDirtySignal:lt,persistenceService:ct,promptDialog:dt,publish:pt,registerAll:we,rootContext:be,subscribe:Q,taskService:pe,toastError:L,toastInfo:ht,toastWarning:gt,treeNodeComparator:ut,uiContext:he,unsubscribe:mt,watchSignal:vt,workspaceService:le},Symbol.toStringTag,{value:"Module"})),wt=`You are an assistant in a web application with workspace, editors, and AI chat.

**Tools:**
Commands are exposed as AI-callable tools. Tools are context-aware - available commands depend on active editor, selected files, and workspace state.

**Tool Usage Rules:**
1. If tools are available and match the request, use them - don't describe manual steps
2. Read tool descriptions/parameters to select the correct tool
3. Call tools in sequence for multi-step tasks
4. After successful tool execution, provide a final response - don't loop or call more tools unless explicitly requested
5. If no tools are available, explain what context is needed

Keep responses concise. Use tools when available rather than discussing alternatives.

`;E.registerContribution(m,{target:m,label:"Ollama (Local)",provider:{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"https://<your-server>/v1/chat/completions",apiKey:""}});E.registerContribution(m,{target:m,label:"OpenWebUI (Self Hosted)",provider:{name:"openwebui",model:"gemma3:12b",chatApiEndpoint:"https://<your-server>/api/v1/chat/completion",apiKey:""}});E.registerContribution(m,{target:m,label:"OpenAI",provider:{name:"openai",model:"gpt-4.1",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"}});E.registerContribution(m,{target:m,label:"Groq",provider:{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"}});E.registerContribution(m,{target:m,label:"Cerebras",provider:{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"}});E.registerContribution(m,{target:m,label:"WebLLM",provider:{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}});E.registerContribution(m,{target:m,label:"Mistral",provider:{name:"mistral",model:"mistral-large-latest",chatApiEndpoint:"https://api.mistral.ai/v1/chat/completions",apiKey:"<your api key>",ocrApiEndpoint:"https://api.mistral.ai/v1/ocr",ocrModel:"mistral-ocr-latest"}});E.registerContribution(m,{target:m,label:"LiteLLM",provider:{name:"litellm",model:"gpt-3.5-turbo",chatApiEndpoint:"https://<your-server>/v1/chat/completions",apiKey:"<your api key>"}});const ft={enhance:async(t,e)=>{try{const s=await le.getWorkspace(),a=X.getEditorArea()?.getActiveEditor(),i={workspace:s?.getName()||null,activeEditor:a?{title:a.input?.title||null,editorId:a.input?.editorId||null}:null},o=`***App's state:***
${JSON.stringify(i,null,2)}`;return`${t}

${o}`}catch{return t}},priority:20};E.registerContribution(Ae,{label:"App State Enhancer",enhancer:ft});const r=ce("aisystem");var bt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,G=(t,e,s,a)=>{for(var i=a>1?void 0:a?At(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(a?n(e,s,i):n(i))||i);return a&&i&&bt(e,s,i),i};let x=class extends U{constructor(){super(...arguments),this.isStreaming=!1,this.showHeader=!0,this.attentionInputValue=""}formatTimestamp(){return new Date().toLocaleTimeString()}copyToClipboard(t){navigator.clipboard.writeText(t).catch(e=>{console.error("Failed to copy:",e)})}processMarkdownContent(t){return t.includes("code-block-wrapper")?t:t.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi,(e,s,a)=>`<div class="code-block-wrapper">
                <div class="code-block-header">
                    <wa-copy-button value="${this.escapeHtmlAttribute(a.trim())}" size="small" label="${r("COPY_CODE")}"></wa-copy-button>
                </div>
                <div class="code-block-content">
                    <pre><code${s}>${a}</code></pre>
                </div>
            </div>`)}escapeHtmlAttribute(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}handleResend(t){t&&(t.preventDefault(),t.stopPropagation()),this.message&&this.dispatchEvent(new CustomEvent("resend",{detail:{message:this.message,messageIndex:this.messageIndex},bubbles:!0,composed:!0}))}getAttentionIcon(t){switch(t){case"confirmation":return"check-circle";case"input":return"input";case"approval":return"hand";case"execution":return"play";case"info":return"info-circle";default:return"bell"}}updated(t){super.updated(t),t.has("attentionInputValue")&&this.dispatchEvent(new CustomEvent("attention-input-change",{detail:{value:this.attentionInputValue},bubbles:!0,composed:!0})),(t.has("message")||!this.hasAttribute("data-is-user"))&&this.updateAlignment()}updateAlignment(){if(this.message){const t=this.message.role==="user";this.setAttribute("data-is-user",String(t))}}handleAttentionResponse(t,e,s){this.message&&this.dispatchEvent(new CustomEvent("attention-response",{detail:{messageIndex:this.messageIndex,requestIndex:t,request:e,response:s},bubbles:!0,composed:!0}))}handleAction(t){const e=t();e instanceof Promise&&e.catch(s=>{console.error("Action failed:",s)})}render(){if(!this.message)return l``;const t=this.message,e=t.role==="user",s=t.requiresAttention&&(t.attentionRequests?.length||0)>0;return l`
            <div class="message-wrapper ${e?"user":"assistant"} ${this.isStreaming?"streaming":""} ${s?"requires-attention":""}">
                ${h(this.showHeader&&!e,()=>l`
                    <div class="message-header">
                        <div class="message-meta">
                            <wa-icon 
                                name="robot" 
                                label="${t.role}">
                            </wa-icon>
                            <span class="role-name">${t.role}</span>
                            ${h(s,()=>l`
                                <wa-icon name="bell" label="${r("REQUIRES_ATTENTION")}"></wa-icon>
                            `)}
                            <span class="timestamp">${this.formatTimestamp()}</span>
                        </div>
                        <div class="message-actions">
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                title="${r("COPY")}"
                                @click="${()=>this.copyToClipboard(t.content)}">
                                <wa-icon slot="label" name="copy" label="${r("COPY")}"></wa-icon>
                            </wa-button>
                            ${h(t.actions?.length,()=>l`
                                ${t.actions.map(a=>l`
                                    <wa-button
                                        variant="neutral"
                                        appearance="plain"
                                        size="small"
                                        title="${a.label}"
                                        @click="${()=>this.handleAction(a.action)}">
                                        <wa-icon slot="label" name="${a.icon}" label="${a.label}"></wa-icon>
                                    </wa-button>
                                `)}
                            `)}
                        </div>
                    </div>
                `)}
                <div class="message-content-wrapper ${e?"user":""}">
                    <div class="message-content">
                        ${Ee(this.processMarkdownContent(Se.parse(t.content||"")))}
                        ${h(this.isStreaming,()=>l`
                            <span class="streaming-cursor">▋</span>
                        `)}
                        ${h(s&&t.attentionRequests,()=>l`
                        <div class="attention-requests">
                            ${t.attentionRequests.map((a,i)=>l`
                                <div class="attention-request attention-${a.type}">
                                    <div class="attention-header">
                                        <wa-icon name="${this.getAttentionIcon(a.type)}" label="${a.type}"></wa-icon>
                                        <strong>${a.title}</strong>
                                        ${h(a.priority==="urgent"||a.priority==="high",()=>l`
                                            <span class="priority-badge priority-${a.priority}">${a.priority}</span>
                                        `)}
                                    </div>
                                    <div class="attention-message">${a.message}</div>
                                    <div class="attention-actions">
                                        ${h(a.type==="confirmation",()=>l`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                @click="${()=>this.handleAttentionResponse(i,a,!0)}">
                                ${r("CONFIRM")}
                            </wa-button>
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                @click="${()=>this.handleAttentionResponse(i,a,!1)}">
                                ${r("CANCEL")}
                            </wa-button>
                                        `)}
                                        ${h(a.type==="input",()=>l`
                                            <div class="input-group">
                                                <wa-input
                                                    value="${this.attentionInputValue}"
                                                    @input="${o=>{this.attentionInputValue=o.target.value}}"
                                                    placeholder="${r("ENTER_RESPONSE")}">
                                                </wa-input>
                                                <wa-button
                                                    variant="brand"
                                                    appearance="filled"
                                                    size="small"
                                                    ?disabled="${!this.attentionInputValue.trim()}"
                                                    @click="${()=>this.handleAttentionResponse(i,a,this.attentionInputValue)}">
                                                    ${r("SUBMIT")}
                                                </wa-button>
                                            </div>
                                        `)}
                                        ${h(a.type==="approval",()=>l`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(i,a,!0)}">
                                                ${r("APPROVE")}
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(i,a,!1)}">
                                                ${r("REJECT")}
                                            </wa-button>
                                        `)}
                                        ${h(a.type==="execution",()=>l`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(i,a,!0)}">
                                                ${r("EXECUTE")}
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(i,a,!1)}">
                                                ${r("CANCEL")}
                                            </wa-button>
                                        `)}
                                    </div>
                                </div>
                            `)}
                        </div>
                        `)}
                        ${h(t.canContinue&&!s,()=>l`
                            <div class="continue-workflow">
                                <wa-button
                                    variant="brand"
                                    appearance="filled"
                                    size="small"
                                    @click="${()=>this.dispatchEvent(new CustomEvent("continue-workflow",{detail:{message:t},bubbles:!0,composed:!0}))}">
                                    ${r("CONTINUE_WORKFLOW")}
                                </wa-button>
                            </div>
                        `)}
                    </div>
                    ${h(e,()=>l`
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${r("COPY")}"
                            @click="${()=>this.copyToClipboard(t.content)}">
                            <wa-icon name="copy" label="${r("COPY")}"></wa-icon>
                        </wa-button>
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${r("RESEND")}"
                            @click="${a=>this.handleResend(a)}">
                            <wa-icon name="rotate-right" label="${r("RESEND")}"></wa-icon>
                        </wa-button>
                    `)}
                </div>
            </div>
        `}};x.styles=$`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 85%;
            box-sizing: border-box;
            animation: slideIn 0.2s ease-out;
        }

        :host([data-is-user="true"]) {
            align-self: flex-end;
        }

        :host([data-is-user="false"]) {
            align-self: flex-start;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .message-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            box-sizing: border-box;
            margin: 0;
        }

        .message-wrapper.user {
            align-self: flex-end;
        }

        .message-wrapper.assistant {
            align-self: flex-start;
        }

        .message-wrapper.streaming .message-content {
            position: relative;
        }

        .streaming-cursor {
            display: inline-block;
            animation: blink 1s infinite;
            color: var(--wa-color-brand-50);
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        .message-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0.5rem;
            padding: 0 0.5rem;
        }

        .message-meta {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: var(--wa-color-text-quiet);
        }

        .role-name {
            text-transform: capitalize;
        }

        .timestamp {
            font-size: 0.75rem;
            opacity: 0.7;
        }


        .message-actions {
            display: flex;
            gap: 0.25rem;
            opacity: 0;
            transition: opacity 0.2s;
        }

        .message-wrapper:hover .message-actions,
        :host:hover .message-actions {
            opacity: 1;
        }

        .message-content-wrapper {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
            width: 100%;
        }

        .message-content-wrapper.user {
            flex-direction: row;
            align-items: center;
        }

        .message-content {
            padding: 0.5rem 0.75rem;
            border-radius: 0.25rem;
            background-color: var(--wa-color-surface-default);
            word-break: break-word;
            overflow-wrap: break-word;
            max-width: 100%;
            box-sizing: border-box;
            line-height: 1.3;
            font-size: 0.9rem;
        }

        .message-content-wrapper.user .message-content {
            padding: 0.0625rem 0.75rem;
            background-color: var(--wa-color-brand-fill-quiet);
            color: var(--wa-color-text-normal);
            line-height: 1.4;
            flex: 1;
        }

        .message-content p {
            margin: 0;
            padding: 0;
        }

        .message-content ul,
        .message-content ol {
            margin: 0.25rem 0;
            padding-left: 1.25rem;
        }

        .message-content li {
            margin: 0.125rem 0;
            padding: 0;
            line-height: 1.3;
        }

        .message-content li p {
            margin: 0;
            padding: 0;
        }

        .message-content-wrapper.user .message-content p {
            margin: 0.25rem 0;
        }

        .message-content :first-child {
            margin-top: 0;
            padding-top: 0;
        }

        .message-content :last-child {
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .message-content pre {
            white-space: pre-wrap;
            word-break: break-all;
            max-width: 100%;
            box-sizing: border-box;
            overflow-x: auto;
            margin: 0;
        }

        .message-content code {
            font-family: 'Courier New', monospace;
            background-color: var(--wa-color-surface-lowered);
            padding: 0.125rem 0.25rem;
            border-radius: 0.125rem;
        }

        .message-content pre code {
            background-color: transparent;
            padding: 0;
            display: block;
        }

        .code-block-wrapper {
            margin: 0.75rem 0;
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            border-radius: var(--wa-border-radius-m);
            background-color: var(--wa-color-surface-lowered);
            overflow: hidden;
        }

        .code-block-header {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0.375rem 0.5rem;
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            background-color: var(--wa-color-surface-default);
        }

        .code-block-content {
            padding: 0.75rem;
            overflow-x: auto;
        }

        .code-block-content pre {
            margin: 0;
            background-color: transparent;
        }

        .code-block-content code {
            background-color: transparent;
            padding: 0;
        }

        .requires-attention {
            border-color: var(--wa-color-warning-border-normal);
        }

        .attention-requests {
            margin-top: 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .attention-request {
            padding: 0.75rem;
            border-radius: 0.25rem;
            border: solid var(--wa-border-width-s);
            background-color: var(--wa-color-overlay-inline);
        }

        .attention-request.attention-confirmation {
            border-color: var(--wa-color-warning-border-normal);
            background-color: var(--wa-color-warning-50);
        }

        .attention-request.attention-input {
            border-color: var(--wa-color-brand-border-quiet);
            background-color: var(--wa-color-brand-fill-quiet);
        }

        .attention-request.attention-approval {
            border-color: var(--wa-color-success-border-quiet);
            background-color: var(--wa-color-success-fill-quiet);
        }

        .attention-request.attention-execution {
            border-color: var(--wa-color-warning-border-quiet);
            background-color: var(--wa-color-warning-fill-quiet);
        }

        .attention-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
        }

        .attention-message {
            margin-bottom: 0.5rem;
            color: var(--wa-color-text-normal);
        }

        .priority-badge {
            padding: 0.125rem 0.375rem;
            border-radius: 0.125rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .priority-badge.priority-urgent {
            background-color: var(--wa-color-danger-fill-normal);
            color: var(--wa-color-danger-on-normal);
        }

        .priority-badge.priority-high {
            background-color: var(--wa-color-warning-fill-normal);
            color: var(--wa-color-warning-on-normal);
        }

        .attention-actions {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }

        .input-group {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            width: 100%;
        }
    `;G([v({type:Object,attribute:!1})],x.prototype,"message",2);G([v({type:Boolean})],x.prototype,"isStreaming",2);G([v({type:Boolean})],x.prototype,"showHeader",2);G([v({type:Number,attribute:!1})],x.prototype,"messageIndex",2);G([w()],x.prototype,"attentionInputValue",2);x=G([P("ai-chat-message")],x);var Et=Object.defineProperty,St=Object.getOwnPropertyDescriptor,z=(t,e,s,a)=>{for(var i=a>1?void 0:a?St(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(a?n(e,s,i):n(i))||i);return a&&i&&Et(e,s,i),i};let k=class extends U{constructor(){super(...arguments),this.value="",this.disabled=!1,this.busy=!1,this.hasProvider=!0}onInput(t){const e=t.target;this.value=e.value,this.dispatchEvent(new CustomEvent("input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.send())}async send(){if(!this.value.trim()||this.disabled||!this.hasProvider)return;const t=this.value;this.value="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),this.dispatchEvent(new CustomEvent("send",{detail:{value:t},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}openSettings(){this.dispatchEvent(new CustomEvent("open-settings",{bubbles:!0,composed:!0}))}render(){return l`
            <div class="input-container">
                <div class="input-row">
                    <wa-textarea
                        placeholder="${r("TYPE_MESSAGE_ENTER")}"
                        size="small"
                        resize="auto"
                        rows="1"
                        .value="${this.value}"
                        ?disabled="${this.disabled||!this.hasProvider}"
                        @input="${this.onInput}"
                        @keydown="${this.onKeyDown}">
                    </wa-textarea>
                    
                    ${h(this.busy,()=>l`
                        <wa-button
                            appearance="plain"
                            size="small"
                            @click="${this.cancel}">
                            <wa-icon name="stop" label="${r("STOP")}"></wa-icon>
                        </wa-button>
                    `)}

                    <wa-button
                        appearance="plain"
                        size="small"
                        @click="${this.openSettings}">
                        <wa-icon name="gear" label="${r("SETTINGS")}"></wa-icon>
                    </wa-button>
                </div>
            </div>
        `}};k.styles=$`
        :host {
            display: block;
            width: 100%;
        }

        .input-container {
            margin-bottom: 0.25rem;
            margin-left: 0.25rem;
        }

        .input-row {
            display: flex;
            gap: 0.5rem;
            align-items: flex-end;
        }

        wa-textarea {
            flex: 1;
            min-width: 0;
        }
    `;z([v({type:String})],k.prototype,"value",2);z([v({type:Boolean})],k.prototype,"disabled",2);z([v({type:Boolean})],k.prototype,"busy",2);z([v({type:Boolean})],k.prototype,"hasProvider",2);z([ye("wa-textarea")],k.prototype,"textareaElement",2);k=z([P("ai-chat-input")],k);var yt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,oe=(t,e,s,a)=>{for(var i=a>1?void 0:a?Tt(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(a?n(e,s,i):n(i))||i);return a&&i&&yt(e,s,i),i};let W=class extends U{constructor(){super(...arguments),this.message=r("NO_PROVIDER_CONFIGURED"),this.hint=r("CLICK_SETTINGS_TO_CONFIGURE")}render(){return l`
            <div class="empty-state">
                <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                <p>${this.message}</p>
                <p class="hint">${this.hint}</p>
            </div>
        `}};W.styles=$`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
            color: var(--wa-color-text-quiet);
        }

        .empty-state p {
            margin: 0.5rem 0;
        }

        .empty-state .hint {
            font-size: 0.875rem;
            opacity: 0.7;
        }
    `;oe([v({type:String})],W.prototype,"message",2);oe([v({type:String})],W.prototype,"hint",2);W=oe([P("ai-empty-state")],W);var Ct=Object.getOwnPropertyDescriptor,Ot=(t,e,s,a)=>{for(var i=a>1?void 0:a?Ct(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=n(i)||i);return i};let ae=class extends U{render(){return l`
            <div class="message-wrapper assistant loading">
                <div class="message-header">
                    <div class="message-meta">
                        <wa-animation name="flip" duration="2000" play>
                            <wa-icon name="robot" label="${r("AI_ASSISTANT")}"></wa-icon>
                        </wa-animation>
                        <span class="role-name">${r("AI_ASSISTANT")}</span>
                    </div>
                </div>
                <div class="message-content loading-dots">
                    <span>Thinking</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                </div>
            </div>
        `}};ae.styles=$`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 85%;
            box-sizing: border-box;
        }

        .message-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-self: flex-start;
        }

        .message-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0.5rem;
            padding: 0 0.5rem;
        }

        .message-meta {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: var(--wa-color-text-quiet);
        }

        .message-content {
            padding: 0.75rem 1rem;
            border-radius: 0.25rem;
            background-color: var(--wa-color-surface-default);
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
        }

        .loading-dots {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .loading-dots .dot {
            animation: pulse 1.5s ease-in-out infinite;
        }

        .loading-dots .dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .loading-dots .dot:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
    `;ae=Ot([P("ai-loading-indicator")],ae);var _t=Object.defineProperty,It=Object.getOwnPropertyDescriptor,H=(t,e,s,a)=>{for(var i=a>1?void 0:a?It(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(a?n(e,s,i):n(i))||i);return a&&i&&_t(e,s,i),i};let R=class extends U{constructor(){super(...arguments),this.isStreaming=!1,this.groupId=""}renderStatusIcon(t){switch(t){case"streaming":return l`<wa-icon name="spinner" class="spinning"></wa-icon>`;case"completed":return l`<wa-icon name="check-circle" class="status-success"></wa-icon>`;case"error":return l`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`}}copyToClipboard(t){navigator.clipboard.writeText(t).catch(e=>{console.error("Failed to copy:",e)})}render(){if(!this.agentInfo)return l``;const t=this.message?.requiresAttention&&(this.message.attentionRequests?.length||0)>0;return this.message?l`
            <div class="agent-response-card status-${this.agentInfo.status} ${t?"requires-attention":""}">
                <div class="agent-card-header">
                    <div class="agent-card-title">
                        <wa-icon name="${this.agentInfo.icon}" label="${this.agentInfo.label}"></wa-icon>
                        <span>${this.agentInfo.label}</span>
                        ${this.renderStatusIcon(this.agentInfo.status)}
                        ${h(t,()=>l`
                            <wa-icon name="bell" class="attention-indicator"></wa-icon>
                        `)}
                    </div>
                    <div class="agent-card-actions">
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${r("COPY")}"
                            @click="${()=>this.copyToClipboard(this.message?.content||"")}">
                            <wa-icon name="copy" label="${r("COPY")}"></wa-icon>
                        </wa-button>
                    </div>
                </div>
                <div class="agent-card-content">
                    <ai-chat-message
                        .message="${this.message}"
                        .isStreaming="${this.isStreaming}"
                        .showHeader="${!1}"
                        .messageIndex="${this.agentInfo.messageIndex}">
                    </ai-chat-message>
                </div>
            </div>
        `:l`
                <div class="agent-response-card status-${this.agentInfo.status}">
                    <div class="agent-card-header">
                        <div class="agent-card-title">
                            <wa-icon name="${this.agentInfo.icon}" label="${this.agentInfo.label}"></wa-icon>
                            <span>${this.agentInfo.label}</span>
                            ${this.renderStatusIcon(this.agentInfo.status)}
                        </div>
                    </div>
                    <div class="agent-card-content">
                        <div class="agent-loading">Waiting for response...</div>
                    </div>
                </div>
            `}};R.styles=$`
        :host {
            display: block;
            width: 100%;
        }

        .agent-response-card {
            display: flex;
            flex-direction: column;
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
            background-color: var(--wa-color-surface-default);
            margin-bottom: 0.5rem;
        }

        .agent-response-card.status-streaming {
            border-color: var(--wa-color-brand-border-quiet);
        }

        .agent-response-card.status-completed {
            border-color: var(--wa-color-success-border-quiet);
        }

        .agent-response-card.status-error {
            border-color: var(--wa-color-danger-border-quiet);
        }

        .agent-response-card.requires-attention {
            border-color: var(--wa-color-warning-border-normal);
        }

        .agent-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.375rem 0.5rem;
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-surface-border);
            background-color: var(--wa-color-surface-lowered);
        }

        .agent-card-title {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            font-weight: 500;
            font-size: 0.875rem;
            flex: 1;
        }

        .agent-card-actions {
            display: flex;
            gap: 0.25rem;
            opacity: 1;
        }

        .attention-indicator {
            color: var(--wa-color-warning-50);
        }

        .agent-card-content {
            padding: 0.375rem;
        }

        .agent-card-content .message-content {
            border: none;
            box-shadow: none;
            border-radius: 0;
        }

        .agent-loading {
            padding: 1rem;
            text-align: center;
            color: var(--wa-color-text-quiet);
        }

        .spinning {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .status-success {
            color: var(--wa-color-success-60);
        }

        .status-error {
            color: var(--wa-color-danger-60);
        }
    `;H([v({type:Object,attribute:!1})],R.prototype,"agentInfo",2);H([v({type:Object,attribute:!1})],R.prototype,"message",2);H([v({type:Boolean})],R.prototype,"isStreaming",2);H([v({type:String})],R.prototype,"groupId",2);R=H([P("ai-agent-response-card")],R);var $t=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,re=(t,e,s,a)=>{for(var i=a>1?void 0:a?Pt(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(a?n(e,s,i):n(i))||i);return a&&i&&$t(e,s,i),i};let B=class extends U{handleAction(t){const e=t();e instanceof Promise&&e.catch(s=>{console.error("Action failed:",s)})}render(){if(!this.group)return l``;const t=Array.from(this.group.agents.values()),e=t.filter(c=>c.status==="completed").length,s=t.filter(c=>c.status==="streaming").length,a=t.filter(c=>c.status==="error").length,i=t.length>0&&e+a===t.length,o=t.length===1,n=t.filter(c=>c.message&&c.message.actions&&c.message.actions.length>0).flatMap(c=>c.message.actions.map(p=>({...p,agentRole:c.role,agentLabel:c.label}))).sort((c,p)=>{const f=c.requiresAttention?1:0;return(p.requiresAttention?1:0)-f});return l`
            <div class="agent-response-group">
                ${h(!o,()=>l`
                    <div class="agent-group-header">
                        <div class="agent-group-title">
                            <wa-icon name="robot" label="${r("MULTIPLE_AGENTS")}"></wa-icon>
                            <span>${r("MULTIPLE_AGENTS")}</span>
                            ${h(!i,()=>l`
                                <span class="agent-status-badge">
                                    ${h(s>0,()=>l`
                                        <span class="status-streaming">${s} responding</span>
                                    `)}
                                    ${h(e>0,()=>l`
                                        <span class="status-completed">${e}/${t.length} completed</span>
                                    `)}
                                </span>
                            `)}
                            ${h(i,()=>l`
                                <span class="agent-status-badge status-all-completed">
                                    All completed (${e})
                                </span>
                            `)}
                        </div>
                    </div>
                `)}
                <div class="agent-group-content">
                    ${Y(t,c=>c.role,c=>{const p=c.message||(c.status==="streaming"&&this.findStreamingMessage?this.findStreamingMessage(c.role):void 0);return l`
                            <ai-agent-response-card
                                .agentInfo="${c}"
                                .message="${p}"
                                .isStreaming="${c.status==="streaming"}"
                                .groupId="${this.group.id}">
                            </ai-agent-response-card>
                        `})}
                </div>
                ${h(n.length>0&&i,()=>l`
                    <div class="quick-actions-bar">
                        <div class="quick-actions-label">
                            <wa-icon name="bolt" label="${r("QUICK_ACTIONS")}"></wa-icon>
                            <span>${r("QUICK_ACTIONS")}</span>
                        </div>
                        <div class="quick-actions-buttons">
                            ${Y(n,(c,p)=>p.toString(),c=>l`
                                <wa-button
                                    variant="${c.requiresAttention?"brand":"neutral"}"
                                    appearance="${c.requiresAttention?"filled":"plain"}"
                                    size="small"
                                    title="${c.label}"
                                    @click="${()=>this.handleAction(c.action)}">
                                    <wa-icon name="${c.icon}" label="${c.label}"></wa-icon>
                                </wa-button>
                            `)}
                        </div>
                    </div>
                `)}
            </div>
        `}};B.styles=$`
        :host {
            display: block;
            width: 100%;
            box-sizing: border-box;
        }

        .agent-response-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            overflow: visible;
        }

        .agent-group-header {
            padding: 0.5rem 0.75rem;
            background-color: var(--wa-color-surface-lowered);
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
        }

        .agent-group-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 500;
        }

        .agent-status-badge {
            display: flex;
            gap: 0.5rem;
            margin-left: auto;
            font-size: 0.875rem;
        }

        .status-streaming {
            color: var(--wa-color-brand-50);
        }

        .status-completed {
            color: var(--wa-color-success-60);
        }

        .status-all-completed {
            color: var(--wa-color-success-70);
            font-weight: 600;
        }

        .agent-group-content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
        }

        .quick-actions-bar {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 0.75rem;
            padding: 0.75rem;
            background-color: var(--wa-color-surface-lowered);
            border: solid var(--wa-border-width-s) var(--wa-color-surface-border);
            border-top: none;
        }

        .quick-actions-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--wa-color-text-quiet);
            flex-shrink: 0;
        }

        .quick-actions-buttons {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            justify-content: flex-end;
            margin-left: auto;
        }
    `;re([v({type:Object,attribute:!1})],B.prototype,"group",2);re([v({type:Function,attribute:!1})],B.prototype,"findStreamingMessage",2);B=re([P("ai-agent-response-group")],B);class Mt{constructor(){this.sessions=new Map,this.sessionTitles=new Map,this.sessionTimestamps=new Map,this.activeSessionId="",this.archivedSessions=new Map}setSaveCallback(e){this.saveCallback=e}async save(){this.saveCallback&&await this.saveCallback()}async loadSessions(){const{appSettings:e}=await F(async()=>{const{appSettings:a}=await Promise.resolve().then(()=>ne);return{appSettings:a}},void 0),s=await e.get("aiChatSessions");if(s&&Array.isArray(s.active)){for(const a of s.active)a.id&&a.history&&Array.isArray(a.history)&&(this.sessions.set(a.id,{history:a.history}),this.sessionTitles.set(a.id,a.title||"New Chat"),this.sessionTimestamps.set(a.id,{createdAt:a.createdAt||Date.now(),updatedAt:a.updatedAt||Date.now()}));s.active.length>0&&s.activeSessionId&&(this.sessions.has(s.activeSessionId)?this.activeSessionId=s.activeSessionId:this.activeSessionId=s.active[0].id)}if(s&&Array.isArray(s.archived))for(const a of s.archived)a.id&&a.history&&Array.isArray(a.history)&&this.archivedSessions.set(a.id,{id:a.id,history:a.history,title:a.title||"New Chat",createdAt:a.createdAt||Date.now(),updatedAt:a.updatedAt||Date.now()})}async persistSessions(){const e=Array.from(this.sessions.entries()).map(([i,o])=>{const n=this.sessionTimestamps.get(i)||{createdAt:Date.now(),updatedAt:Date.now()};return{id:i,history:o.history,title:this.sessionTitles.get(i)||"New Chat",createdAt:n.createdAt,updatedAt:n.updatedAt}}),s=Array.from(this.archivedSessions.values()),{appSettings:a}=await F(async()=>{const{appSettings:i}=await Promise.resolve().then(()=>ne);return{appSettings:i}},void 0);await a.set("aiChatSessions",{active:e,archived:s,activeSessionId:this.activeSessionId})}createSession(){const e=`session-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.sessions.set(e,{history:[]}),this.sessionTitles.set(e,"New Chat"),this.sessionTimestamps.set(e,{createdAt:Date.now(),updatedAt:Date.now()}),this.activeSessionId=e,this.save(),e}async deleteSession(e){if(this.sessions.size<=1)return!1;const s=this.sessions.get(e),a=this.sessionTitles.get(e),i=this.sessionTimestamps.get(e);if(s&&a&&this.archivedSessions.set(e,{id:e,history:s.history,title:a,createdAt:i?.createdAt||Date.now(),updatedAt:Date.now()}),this.sessions.delete(e),this.sessionTitles.delete(e),this.sessionTimestamps.delete(e),this.activeSessionId===e){const o=Array.from(this.sessions.keys())[0];this.activeSessionId=o||""}return await this.save(),!0}async restoreSession(e){const s=this.archivedSessions.get(e);return s?(this.sessions.set(e,{history:s.history}),this.sessionTitles.set(e,s.title),this.sessionTimestamps.set(e,{createdAt:s.createdAt,updatedAt:Date.now()}),this.archivedSessions.delete(e),this.activeSessionId=e,await this.save(),!0):!1}async permanentlyDeleteSession(e){return this.sessions.has(e)?!1:(this.archivedSessions.delete(e),await this.save(),!0)}getSession(e){return this.sessions.get(e)}setSession(e,s){this.sessions.set(e,s)}getActiveSession(){if(this.activeSessionId)return this.sessions.get(this.activeSessionId)}setActiveSession(e){this.sessions.has(e)&&(this.activeSessionId=e)}getActiveSessionId(){return this.activeSessionId}getAllSessionIds(){return Array.from(this.sessions.keys())}getAllSessions(){return Array.from(this.sessions.entries()).map(([e,s])=>({id:e,history:s.history,title:this.sessionTitles.get(e)||"New Chat"}))}getSessionTitle(e){return this.sessionTitles.get(e)||this.archivedSessions.get(e)?.title||"New Chat"}setSessionTitle(e,s){if(this.sessions.has(e)){this.sessionTitles.set(e,s);const a=this.sessionTimestamps.get(e);a&&(a.updatedAt=Date.now()),this.save()}}generateTitle(e){const s=e.trim();if(!s)return"New Chat";const a=30;return s.length<=a?s:s.substring(0,a).trim()+"..."}addMessage(e,s){const a=this.sessions.get(e);if(a){a.history.push(s);const i=this.sessionTimestamps.get(e);i&&(i.updatedAt=Date.now()),this.save()}}getSessionCount(){return this.sessions.size}getArchivedSessions(){return Array.from(this.archivedSessions.values()).sort((e,s)=>s.updatedAt-e.updatedAt)}getArchivedSessionCount(){return this.archivedSessions.size}}class xt{constructor(e){this.streamingMessages=new Map,this.currentStreamingIndex=-1,this.pendingUpdate=!1,this.onUpdate=e}createStreamingMessage(e,s){const a=++this.currentStreamingIndex;return this.streamingMessages.set(a,{message:{role:e,content:""},isStreaming:!0,timestamp:new Date,sessionId:s}),a}getStreamingMessage(e){return this.streamingMessages.get(e)}updateStreamingMessage(e,s){const a=this.streamingMessages.get(e);a&&(a.message.content+=s,this.scheduleUpdate())}completeStreamingMessage(e,s){const a=this.streamingMessages.get(e);a&&(a.message=s,a.isStreaming=!1)}removeStreamingMessage(e){this.streamingMessages.delete(e)}getAllStreamingMessages(){return Array.from(this.streamingMessages.values())}getAllStreamingMessagesByRole(e){return Array.from(this.streamingMessages.values()).filter(s=>s.message.role===e)}findStreamingMessage(e){return Array.from(this.streamingMessages.values()).find(a=>a.message.role===e)?.message}scheduleUpdate(){this.pendingUpdate||(this.pendingUpdate=!0,this.updateAnimationFrame=requestAnimationFrame(()=>{this.pendingUpdate=!1,this.onUpdate?.()}))}cancelUpdates(){this.updateAnimationFrame&&(cancelAnimationFrame(this.updateAnimationFrame),this.updateAnimationFrame=void 0,this.pendingUpdate=!1)}clearAll(){for(const[e,s]of this.streamingMessages.entries())s.isStreaming&&(s.isStreaming=!1);this.streamingMessages.clear(),this.cancelUpdates()}clearForSession(e){const s=[];for(const[a,i]of this.streamingMessages.entries())i.sessionId===e&&(i.isStreaming&&(i.isStreaming=!1),s.push(a));s.forEach(a=>this.streamingMessages.delete(a)),s.length>0&&this.scheduleUpdate()}reset(){this.clearAll(),this.currentStreamingIndex=-1}}class kt{constructor(e){this.aiService=e,this.settingsKey="aiViewChat",this.availableModels=[],this.loadingModels=!1}async initialize(){await this.loadProviders(),await this.loadSettings()}async loadProviders(){this.providers=await this.aiService.getProviders()||[]}async loadSettings(){if(this.providers&&this.providers.length>0){const e=await this.aiService.getDefaultProvider();this.selectedProvider=e,this.settingsProviderName=e.name,this.settingsModel=e.model}}getRequireToolApproval(){return!1}async saveSettings(e,s,a,i,o){const c={...await I.get(this.settingsKey)||{}};i!==void 0&&(c.requireToolApproval=i),o!==void 0&&(c.toolApprovalAllowlist=o),await I.set(this.settingsKey,c);const p=this.providers?.find(f=>f.name===e);if(p){const f={...p,model:s,...a!==void 0&&{apiKey:a}};this.selectedProvider=f,this.settingsProviderName=e,this.settingsModel=s,await this.updateProviderInAIConfig(e,{model:s,...a!==void 0&&{apiKey:a}}),await this.aiService.setDefaultProvider(e)}}async updateProviderInAIConfig(e,s){const{KEY_AI_CONFIG:a}=await F(async()=>{const{KEY_AI_CONFIG:o}=await import("./main-BEYAOB-D.js").then(n=>n.aJ);return{KEY_AI_CONFIG:o}},__vite__mapDeps([0,1])),i=await I.get(a)||{};if(i.providers&&Array.isArray(i.providers)){const o=i.providers.findIndex(n=>n.name===e);o>=0&&(i.providers[o]={...i.providers[o],...s},await I.set(a,i))}}async loadToolApprovalAllowlist(){return(await I.get(this.settingsKey)||{}).toolApprovalAllowlist||[]}async fetchModels(e){const s=this.providers?.find(a=>a.name===e);if(s){this.loadingModels=!0;try{const i=`${s.chatApiEndpoint.replace("/v1/chat/completions","")}/v1/models`,o=await fetch(i,{method:"GET",headers:{Authorization:`Bearer ${s.apiKey}`,"Content-Type":"application/json"}});if(!o.ok)throw new Error(`Failed to fetch models: ${o.statusText}`);const c=(await o.json()).data||[];this.availableModels=c.map(p=>({id:p.id,name:p.name||p.id})),!this.settingsModel&&this.availableModels.length>0&&(this.settingsModel=this.availableModels[0].id)}catch(a){throw this.availableModels=[],a}finally{this.loadingModels=!1}}}getProviders(){return this.providers||[]}getSelectedProvider(){return this.selectedProvider}setSelectedProvider(e){this.selectedProvider=e}async getSettingsProviderName(){if(!this.settingsProviderName){const e=await this.aiService.getDefaultProvider();this.settingsProviderName=e.name}return this.settingsProviderName}setSettingsProviderName(e){this.settingsProviderName=e}async getSettingsModel(){if(!this.settingsModel){const e=await this.aiService.getDefaultProvider();this.settingsModel=e.model}return this.settingsModel}setSettingsModel(e){this.settingsModel=e}getAvailableModels(){return this.availableModels}isLoadingModels(){return this.loadingModels}resetModelSelection(){this.availableModels=[],this.settingsModel=void 0}}class Rt{constructor(){this.groups=new Map,this.pausedWorkflows=new Map}createGroup(e,s,a,i,o){const n=`group-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.currentGroupId=n;const c={id:n,sessionId:e,userMessageIndex:s,userMessage:a,timestamp:new Date,agents:new Map,messageIndices:new Map};return i.forEach(p=>{const{label:f,icon:u}=o(p);c.agents.set(p,{role:p,label:f,icon:u,status:"streaming"})}),this.groups.set(n,c),n}getGroup(e){return this.groups.get(e)}updateAgentStatus(e,s,a,i,o){const n=this.groups.get(e);if(!n)return;const c=n.agents.get(s);c&&(c.status=a,i&&(c.message=i),o!==void 0&&(c.messageIndex=o,n.messageIndices.set(s,o)))}getGroupsForSession(e){return Array.from(this.groups.values()).filter(s=>s.sessionId===e)}findGroupForUserMessage(e,s,a){return Array.from(this.groups.values()).find(i=>i.sessionId===e&&i.userMessageIndex===s&&i.userMessage===a)}findGroupForMessage(e,s,a){return Array.from(this.groups.values()).find(i=>i.sessionId===e&&i.messageIndices.get(s)===a)}getCurrentGroupId(){return this.currentGroupId}setCurrentGroupId(e){this.currentGroupId=e}clearCurrentGroup(){this.currentGroupId=void 0}storePausedWorkflow(e,s,a){this.pausedWorkflows.set(e,{token:e,options:s,results:a})}getPausedWorkflow(e){return this.pausedWorkflows.get(e)}getAllPausedWorkflows(){return Array.from(this.pausedWorkflows.values())}clearPausedWorkflow(e){this.pausedWorkflows.delete(e)}clearAllPausedWorkflows(){this.pausedWorkflows.clear()}getAllGroups(){return Array.from(this.groups.values())}clearAll(){this.groups.clear(),this.currentGroupId=void 0}}var Nt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,j=(t,e,s,a)=>{for(var i=a>1?void 0:a?Dt(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(a?n(e,s,i):n(i))||i);return a&&i&&Nt(e,s,i),i};let N=class extends ie{constructor(){super(...arguments),this.sessionManager=new Mt,this.streamManager=new xt(()=>{this.requestUpdate(),this.scrollDebounceTimer&&clearTimeout(this.scrollDebounceTimer),this.scrollDebounceTimer=setTimeout(async()=>{await this.updateComplete,this.scrollToBottom(),this.scrollDebounceTimer=void 0},100)}),this.providerManager=new kt(K),this.agentGroupManager=new Rt,this.busy=!1,this.inputValue="",this.requireToolApproval=!0,this.toolApprovalAllowlist=new Set,this.pendingToolApprovals=new Map}onAIConfigChanged(){this.providerManager.initialize().then(()=>{this.loadSettings().then(()=>{this.requestUpdate()})})}async doBeforeUI(){this.subscribe(de,()=>this.onAIConfigChanged()),this.sessionManager.setSaveCallback(()=>this.sessionManager.persistSessions()),await this.sessionManager.loadSessions(),this.sessionManager.getSessionCount()===0&&this.sessionManager.createSession(),await this.providerManager.initialize(),await this.loadSettings(),this.requestUpdate()}async loadSettings(){const t=await I.get("aiViewChat")||{};this.requireToolApproval=t.requireToolApproval!==void 0?t.requireToolApproval:!0;const e=await this.providerManager.loadToolApprovalAllowlist();this.toolApprovalAllowlist=new Set(e)}createNewSession(){this.sessionManager.createSession(),this.inputValue="",this.requestUpdate()}async deleteSession(t){if(!await this.sessionManager.deleteSession(t)){L("Cannot delete the last session");return}this.inputValue="",this.requestUpdate()}async scrollToBottom(){await this.updateComplete;const t=this.sessionManager.getActiveSessionId();if(!t)return;const s=this.shadowRoot?.querySelector(`wa-tab-panel[name="${t}"]`)?.querySelector("wa-scroller.chat-messages");if(s){const a=s.shadowRoot?.querySelector(".scroll-container");a?a.scrollTop=a.scrollHeight:s.scrollTo?s.scrollTo({top:s.scrollHeight,behavior:"smooth"}):s.scrollTop!==void 0&&(s.scrollTop=s.scrollHeight)}}updated(t){super.updated(t)}async sendMessage(){const t=this.inputValue.trim();if(!t||this.busy)return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const s=this.shadowRoot?.querySelector("wa-tab-group");s?.active&&(e=s.active,this.sessionManager.setActiveSession(e))}e&&(this.inputValue="",this.requestUpdate(),await this.handlePrompt(t))}async runCommand(t,e){const s=e||M,a=t.trim().split(/\s+/);if(a.length===0)return;const i=a.shift(),o=s.getCommand(i);if(!o){L("Command not found: "+i);return}const n={};o.parameters&&a.forEach((p,f)=>{o.parameters&&o.parameters[f]&&(n[o.parameters[f].name]=p)});const c=s.createExecutionContext(n);await s.execute(i,c),this.requestUpdate()}async handlePrompt(t){if(t.startsWith("/")){await this.runCommand(t.substring(1),M);return}const e=this.providerManager.getSelectedProvider();if(!e){L("Please configure AI provider in settings");return}let s=this.sessionManager.getActiveSessionId();if(!s)this.createNewSession(),s=this.sessionManager.getActiveSessionId();else{const p=this.shadowRoot?.querySelector("wa-tab-group");p?.active&&(s=p.active,this.sessionManager.setActiveSession(s))}if(!s)return;const a=K.createMessage(t),i=s,o=this.sessionManager.getSession(i);if(!o)return;if(o.history.push(a),o.history.length===1){const p=this.sessionManager.generateTitle(t);this.sessionManager.setSessionTitle(i,p)}await this.sessionManager.persistSessions(),this.requestUpdate(),await this.updateComplete,this.scrollToBottom(),this.busy=!0,this.abortController=new AbortController;const n=new Map,c={history:[...o.history]};pe.runAsync("Calling AI assistant",async()=>{const p=M.createExecutionContext(),f=he.createChild({...p}),u=K.getAgentContributions();if(u.length===0)throw new Error("No agents are registered. The App Support agent should be available from the AI system extension.");const C=u.filter(d=>d.canHandle?d.canHandle({...f.getProxy(),userPrompt:t}):!0).sort((d,g)=>(g.priority||0)-(d.priority||0));if(C.length===0)throw new Error(`No agents can handle the current context. Available agents: ${u.map(d=>d.role).join(", ")}`);const A=C.map(d=>d.role),O=this.sessionManager.getSession(i);if(!O)return;const T=this.agentGroupManager.createGroup(i,O.history.length-1,a,A,d=>{const g=u.find(S=>S.role===d);return{label:g?.label||d,icon:g?.icon||"robot"}});return K.executeAgentWorkflow({chatContext:c,chatConfig:e,callContext:f,execution:"parallel",stream:!0,signal:this.abortController.signal,roles:A,requireToolApproval:this.requireToolApproval,onToolApprovalRequest:async(d,g)=>{const{ToolExecutor:S}=await F(async()=>{const{ToolExecutor:q}=await import("./main-BEYAOB-D.js").then(D=>D.aK);return{ToolExecutor:q}},__vite__mapDeps([0,1])),_=new S,V=M.createExecutionContext();return g.toolCalls.every(q=>{const D=_.findCommand(q,V);return D&&this.toolApprovalAllowlist.has(D.id)})?!0:new Promise(q=>{const D=`approval-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.pendingToolApprovals.set(D,{role:d,request:g,resolve:q,allowListSelections:new Map}),this.requestUpdate()})},onAgentStart:async d=>{const g=this.streamManager.createStreamingMessage(d,i);n.set(d,g),this.agentGroupManager.updateAgentStatus(T,d,"streaming"),this.requestUpdate(),await this.updateComplete,this.scrollToBottom()},onToken:(d,g)=>{const S=n.get(d);S!==void 0&&this.streamManager.updateStreamingMessage(S,g),this.requestUpdate()},onAgentComplete:async(d,g)=>{const S=this.sessionManager.getSession(i);if(!S)return;const _=n.get(d);if(_!==void 0){this.streamManager.completeStreamingMessage(_,g);const V=S.history.length;S.history.push(g),n.delete(d),this.streamManager.removeStreamingMessage(_),this.agentGroupManager.updateAgentStatus(T,d,"completed",g,V),await this.sessionManager.persistSessions(),this.requestUpdate(),await this.updateComplete,this.scrollToBottom()}},onAgentError:(d,g)=>{if(!this.sessionManager.getSession(i))return;const _=n.get(d);_!==void 0&&(this.streamManager.removeStreamingMessage(_),n.delete(d)),this.agentGroupManager.updateAgentStatus(T,d,"error",{role:d,content:`Error: ${g.message}`}),this.requestUpdate(),L(`Agent ${d} error: ${g.message}`)}}).then(()=>{this.agentGroupManager.clearCurrentGroup()})}).catch(p=>{p?.name!=="AbortError"&&L(`${p}`)}).finally(async()=>{this.busy=!1,this.abortController=void 0,this.streamManager.clearForSession(i),this.agentGroupManager.clearCurrentGroup(),await this.sessionManager.persistSessions(),this.requestUpdate()})}cancelStream(){this.abortController&&(this.abortController.abort(),this.abortController=void 0,this.busy=!1),this.streamManager.cancelUpdates()}async openSettingsDialog(){M.execute("open_ai_config",{})}renderMessage(t,e,s,a){return l`
            <ai-chat-message
                .message="${e}"
                .isStreaming="${a||!1}"
                .showHeader="${!0}"
                .messageIndex="${s}"
                @resend="${i=>{this.handleResend(i.detail.message)}}">
            </ai-chat-message>
        `}async handleResend(t){if(!t||t.role!=="user")return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const s=this.shadowRoot?.querySelector("wa-tab-group");s?.active&&(e=s.active,this.sessionManager.setActiveSession(e))}e&&await this.handlePrompt(t.content)}render(){const t=this.sessionManager.getAllSessionIds(),e=this.sessionManager.getActiveSessionId(),s=this.providerManager.getSelectedProvider();return l`
            <div class="chat-container">
                ${h(t.length>0,()=>l`
                    <wa-tab-group 
                        active="${e||t[0]||""}" 
                        @wa-tab-show="${a=>{const i=a.detail.panel;this.sessionManager.getSession(i)&&(this.sessionManager.setActiveSession(i),this.inputValue="",this.requestUpdate())}}">
                        ${Y(t,a=>a,(a,i)=>{const o=this.sessionManager.getSession(a);return o?l`
                                <wa-tab panel="${a}">
                                    <span>${this.sessionManager.getSessionTitle(a)||`${r("CHAT")} ${i+1}`}</span>
                                    ${h(t.length>1,()=>l`
                                        <wa-icon 
                                            name="xmark" 
                                            label="${r("CLOSE")}"
                                            @click="${n=>{n.stopPropagation(),this.deleteSession(a)}}">
                                        </wa-icon>
                                    `)}
                                </wa-tab>
                                <wa-tab-panel name="${a}">
                                    <wa-scroller class="chat-messages" orientation="vertical">
                                        <div class="chat-content">
                                            ${o.history.map((n,c)=>{const p=this.agentGroupManager.findGroupForUserMessage(a,c,n);return p&&n.role==="user"?l`
                                                        <ai-chat-message
                                                            .message="${n}"
                                                            .isStreaming="${!1}"
                                                            .showHeader="${!0}"
                                                            .messageIndex="${c}"
                                                            @resend="${u=>{this.handleResend(u.detail.message)}}">
                                                        </ai-chat-message>
                                                        <ai-agent-response-group
                                                            .group="${p}"
                                                            .findStreamingMessage="${u=>this.streamManager.findStreamingMessage(u)}">
                                                        </ai-agent-response-group>
                                                    `:this.agentGroupManager.findGroupForMessage(a,n.role,c)?l``:this.renderMessage(o,n,c)})}
                                            ${this.streamManager.getAllStreamingMessages().filter(n=>n.sessionId===a&&!Array.from(this.agentGroupManager.getAllGroups()).some(c=>c.sessionId===a&&c.agents.has(n.message.role))).map(n=>{const c=this.sessionManager.getSession(a);return this.renderMessage(c,n.message,-1,n.isStreaming)})}
                                            ${h(e===a&&this.busy&&this.streamManager.getAllStreamingMessages().filter(n=>n.sessionId===a).length===0,()=>l`
                                                <ai-loading-indicator></ai-loading-indicator>
                                            `)}
                                        </div>
                                    </wa-scroller>
                                </wa-tab-panel>
                            `:l``})}
                        ${h(this.sessionManager.getArchivedSessionCount()>0,()=>l`
                            <wa-dropdown 
                                slot="nav"
                                placement="bottom-end">
                                <wa-button 
                                    slot="trigger"
                                    variant="neutral"
                                    appearance="plain"
                                    size="small"
                                    title="${r("ARCHIVED_SESSIONS")}"
                                    with-caret>
                                    <wa-icon name="clock-rotate-left" label="${r("ARCHIVED_SESSIONS")}"></wa-icon>
                                    <span style="margin-left: 0.25rem;">${this.sessionManager.getArchivedSessionCount()}</span>
                                </wa-button>
                                <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                                    ${r("ARCHIVED_SESSIONS")}
                                </h6>
                                ${this.sessionManager.getArchivedSessions().map(a=>l`
                                    <wa-dropdown-item 
                                        @click="${async()=>{await this.sessionManager.restoreSession(a.id),this.requestUpdate()}}">
                                        <wa-icon name="history" label="${r("RESTORE")}" slot="icon"></wa-icon>
                                        <span style="flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis;">
                                            ${a.title}
                                        </span>
                                        <span style="font-size: 0.75rem; color: var(--wa-color-neutral-50); margin-left: 0.5rem;">
                                            ${new Date(a.updatedAt).toLocaleDateString()}
                                        </span>
                                    </wa-dropdown-item>
                                `)}
                                <wa-divider></wa-divider>
                                <wa-dropdown-item 
                                    @click="${async()=>{const a=this.sessionManager.getArchivedSessionCount(),i=a>1?"s":"";if(await J(r("DELETE_ALL_CONFIRM",{count:a.toString(),plural:i}))){for(const o of this.sessionManager.getArchivedSessions())await this.sessionManager.permanentlyDeleteSession(o.id);this.requestUpdate()}}}">
                                    <wa-icon name="trash" label="${r("DELETE_ALL_ARCHIVED")}" slot="icon"></wa-icon>
                                    <span>${r("DELETE_ALL_ARCHIVED")}</span>
                                </wa-dropdown-item>
                            </wa-dropdown>
                        `)}
                        <wa-button 
                            slot="nav"
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${r("NEW_CHAT")}"
                            @click="${()=>{this.createNewSession(),this.requestUpdate()}}">
                            <wa-icon name="plus" label="${r("NEW_CHAT")}"></wa-icon>
                        </wa-button>
                    </wa-tab-group>
                `)}
                
                ${h(!s,()=>l`
                    <ai-empty-state
                        message="${r("NO_PROVIDER_CONFIGURED")}"
                        hint="${r("CLICK_SETTINGS_TO_CONFIGURE")}">
                    </ai-empty-state>
                `)}

                ${h(t.length>0,()=>l`
                    ${this.pendingToolApprovals.size>0?l`
                        <div class="tool-approval-section">
                            ${Array.from(this.pendingToolApprovals.entries()).map(([a,i])=>{const o=i.request.toolCalls,n=o.length;o.map(u=>{const C=u.function.arguments||"{}";let A={};try{A=JSON.parse(C)}catch{A={}}const O=Object.entries(A).map(([T,d])=>`${T}=${JSON.stringify(d)}`).join(", ");return`${u.function.name}${O?`(${O})`:"()"}`}).join(", ");const c=n>1?"s":"",p=n>1?", ...":"",f=r("TOOL_EXECUTION_PENDING",{toolCount:n.toString(),plural:c,toolName:o[0]?.function.name||"",more:p});return l`
                                    <wa-details class="approval-details">
                                        <span slot="summary" class="approval-summary">
                                            <span class="approval-summary-text">${f}</span>
                                            <div class="approval-actions-inline">
                                                <wa-button
                                                    appearance="plain"
                                                    size="small"
                                                    variant="brand"
                                                    @click="${u=>{u.stopPropagation(),i.resolve(!1),this.pendingToolApprovals.delete(a),this.requestUpdate()}}">
                                                    <wa-icon name="xmark" label="${r("CANCEL")}"></wa-icon>
                                                </wa-button>
                                                <wa-button
                                                    appearance="plain"
                                                    size="small"
                                                    variant="success"
                                                    @click="${async u=>{u.stopPropagation();for(const[C,A]of i.allowListSelections.entries())if(A){const O=i.request.toolCalls.find(T=>T.id===C);if(O){const{ToolExecutor:T}=await F(async()=>{const{ToolExecutor:_}=await import("./main-BEYAOB-D.js").then(V=>V.aK);return{ToolExecutor:_}},__vite__mapDeps([0,1])),d=new T,g=M.createExecutionContext(),S=d.findCommand(O,g);S&&this.toolApprovalAllowlist.add(S.id)}}if(i.allowListSelections.size>0){const C=await this.providerManager.getSettingsProviderName(),A=await this.providerManager.getSettingsModel();await this.providerManager.saveSettings(C||"",A||"",void 0,this.requireToolApproval,Array.from(this.toolApprovalAllowlist))}i.resolve(!0),this.pendingToolApprovals.delete(a),this.requestUpdate()}}">
                                                    <wa-icon name="check" label="${r("APPROVE")}"></wa-icon>
                                                </wa-button>
                                            </div>
                                        </span>
                                        <div class="approval-content">
                                            <div class="approval-message">
                                                <strong>${r("AGENT_WANTS_TO_EXECUTE",{role:i.role})}</strong>
                                                <ul class="tool-list">
                                                    ${o.map(u=>{const C=u.function.arguments||"{}";let A={};try{A=JSON.parse(C)}catch{A={}}const O=Object.entries(A).length>0?`(${Object.entries(A).map(([d,g])=>`${d}=${JSON.stringify(g)}`).join(", ")})`:"()",T=i.allowListSelections.get(u.id)||!1;return l`
                                                            <li class="tool-list-item">
                                                                <label class="tool-item-label">
                                                                    <wa-checkbox
                                                                        ?checked="${T}"
                                                                        @change="${d=>{const g=d.target.checked;i.allowListSelections.set(u.id,g),this.requestUpdate()}}">
                                                                    </wa-checkbox>
                                                                    <span>${r("ALWAYS_ALLOW")}</span>
                                                                </label>
                                                                <code>${u.function.name}${O}</code>
                                                            </li>
                                                        `})}
                                                </ul>
                                            </div>
                                        </div>
                                    </wa-details>
                                `})}
                        </div>
                    `:""}
                `)}
                
                ${h(t.length>0,()=>l`
                    <ai-chat-input
                        .value="${this.inputValue}"
                        .disabled="${this.busy}"
                        .busy="${this.busy}"
                        .hasProvider="${!!s}"
                        @input-change="${a=>{this.inputValue=a.detail.value}}"
                        @send="${()=>this.sendMessage()}"
                        @cancel="${()=>this.cancelStream()}"
                        @open-settings="${()=>this.openSettingsDialog()}">
                    </ai-chat-input>
                `)}
            </div>
        `}};N.styles=$`
        :host {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .chat-messages {
            margin-right: 0.5rem;
        }

        .toolbar {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            background-color: var(--wa-color-surface-default);
        }


        .tool-approval-section {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            border-top: solid var(--wa-border-width-s) var(--wa-color-warning-border-normal);
            background-color: var(--wa-color-warning-fill-quiet);
        }

        .approval-details {
            width: 100%;
        }

        .approval-summary {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            width: 100%;
        }

        .approval-summary-text {
            flex: 1;
            min-width: 0;
        }

        .approval-actions-inline {
            display: flex;
            gap: 0.5rem;
            flex-shrink: 0;
        }

        .approval-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 0.75rem 0;
        }

        .approval-message {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            font-size: 0.875rem;
        }

        .approval-message strong {
            color: var(--wa-color-text-normal);
        }

        .tool-list {
            margin: 0.5rem 0 0 1.5rem;
            padding: 0;
            list-style: disc;
        }

        .tool-list li {
            margin: 0.25rem 0;
        }

        .tool-list-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: 0.5rem 0;
        }

        .tool-item-label {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            font-size: 0.875rem;
            cursor: pointer;
        }

        .tool-list code {
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            padding: 0.125rem 0.25rem;
            background-color: var(--wa-color-neutral-fill-subtle);
            border-radius: var(--wa-border-radius-s);
        }

        .approval-actions {
            display: flex;
            gap: 0.5rem;
            flex-shrink: 0;
        }

        .chat-container {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            min-height: 0;
            overflow: hidden;
        }


        .chat-content {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        wa-tab-group {
            flex: 1;
            min-height: 0;
            display: flex;
            flex-direction: column;
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

        wa-tab::part(base) {
            padding: 3px 0.5rem;
        }

        wa-tab-panel {
            --padding: 0px;
        }

        ai-chat-input {
            flex-shrink: 0;
        }
    `;j([w()],N.prototype,"busy",2);j([w()],N.prototype,"inputValue",2);j([w()],N.prototype,"requireToolApproval",2);j([w()],N.prototype,"pendingToolApprovals",2);N=j([P("k-aiview")],N);var Lt=Object.getOwnPropertyDescriptor,Ut=(t,e,s,a)=>{for(var i=a>1?void 0:a?Lt(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=n(i)||i);return i};let se=class extends ge{constructor(){super(...arguments),this.totalUsage={promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},this.providerUsage={},this.updateInterval=null}connectedCallback(){super.connectedCallback(),this.loadUsage(),this.updateInterval=window.setInterval(()=>{this.loadUsage()},5e3),Q(Te,()=>{this.loadUsage()})}disconnectedCallback(){super.disconnectedCallback(),this.updateInterval!==null&&(clearInterval(this.updateInterval),this.updateInterval=null)}async loadUsage(){try{this.totalUsage=await Z.getTotalUsage(),this.providerUsage=await Z.getAllProviderUsage(),this.requestUpdate()}catch(t){console.error("Failed to load token usage",t)}}formatNumber(t){return t>=1e6?(t/1e6).toFixed(2)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}async handleReset(){await J(r("RESET_CONFIRM"))&&(await Z.reset(),await this.loadUsage())}render(){return this.totalUsage.totalTokens>0?l`
            <wa-dropdown
                placement="top-end"
                distance="8">
                <wa-button
                    slot="trigger"
                    appearance="plain"
                    size="small"
                    title="${r("TOKEN_USAGE_STATS")}">
                    <wa-icon name="database" label="${r("TOKEN_USAGE")}" slot="start"></wa-icon>
                    ${this.formatNumber(this.totalUsage.totalTokens)} ${r("TOKENS")}
                </wa-button>
                
                <h3>${r("TOKEN_USAGE_STATS")}</h3>
                
                <h6>${r("TOTAL_USAGE")}</h6>
                <wa-dropdown-item>
                    <span>${r("TOTAL")}</span>
                    <div class="total-stats">
                        <div class="stat-item">
                            <span class="stat-label">${r("PROMPT")}</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.promptTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">${r("COMPLETION")}</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.completionTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">${r("TOTAL")}</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.totalTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">${r("REQUESTS")}</span>
                            <span class="stat-value">${this.totalUsage.requestCount}</span>
                        </div>
                    </div>
                </wa-dropdown-item>
                
                ${Object.keys(this.providerUsage).length>0?l`
                    <wa-divider></wa-divider>
                    <h6>${r("BY_PROVIDER")}</h6>
                    ${Object.entries(this.providerUsage).map(([e,s])=>l`
                        <wa-dropdown-item>
                            <span class="provider-name">${e}</span>
                            <div class="provider-stats">
                                <div class="stat-item">
                                    <span class="stat-label">${r("PROMPT")}</span>
                                    <span class="stat-value">${this.formatNumber(s.promptTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">${r("COMPLETION")}</span>
                                    <span class="stat-value">${this.formatNumber(s.completionTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">${r("TOTAL")}</span>
                                    <span class="stat-value">${this.formatNumber(s.totalTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">${r("REQUESTS")}</span>
                                    <span class="stat-value">${s.requestCount}</span>
                                </div>
                            </div>
                        </wa-dropdown-item>
                    `)}
                `:""}
                
                <wa-divider></wa-divider>
                <wa-dropdown-item variant="danger" @click=${this.handleReset}>
                    <wa-icon name="trash" slot="icon"></wa-icon>
                    ${r("RESET_STATISTICS")}
                </wa-dropdown-item>
            </wa-dropdown>
        `:l``}};se.styles=$`
        :host {
            display: inline-block;
        }
        
        wa-dropdown::part(menu) {
            min-width: 300px;
            max-width: 400px;
        }
        
        h3 {
            padding: var(--wa-space-s) var(--wa-space-m);
            margin: 0;
            font-weight: 600;
            font-size: 0.95em;
        }
        
        h6 {
            padding: var(--wa-space-xs) var(--wa-space-m);
            margin: 0;
            font-weight: 600;
            font-size: 0.9em;
            color: var(--wa-color-neutral-text-subtle);
        }
        
        wa-dropdown-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .provider-name {
            font-weight: 500;
        }
        
        .provider-stats {
            display: flex;
            gap: var(--wa-space-m);
            font-size: 0.9em;
        }
        
        .stat-item {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        
        .stat-label {
            font-size: 0.85em;
            color: var(--wa-color-neutral-text-subtle);
        }
        
        .stat-value {
            font-weight: 600;
        }
        
        .total-stats {
            display: flex;
            gap: var(--wa-space-m);
            font-size: 0.9em;
        }
    `;se=Ut([P("k-token-usage")],se);var Gt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,y=(t,e,s,a)=>{for(var i=a>1?void 0:a?zt(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(a?n(e,s,i):n(i))||i);return a&&i&&Gt(e,s,i),i};let b=class extends ie{constructor(){super(...arguments),this.providers=[],this.defaultProvider="",this.editingCell=null,this.editingValue="",this.hasChanges=!1,this.availableModels=[],this.loadingModels=!1,this.requireToolApproval=!0,this.toolApprovalAllowlist=[],this.smartToolDetection=!1,this.availableCommands=[],this.providerFactory=new Ce}async doInitUI(){await this.loadAvailableCommands(),await this.loadConfig(),Q(de,()=>{this.loadConfig()}),Q(ue,()=>{this.loadConfig()})}async loadConfig(){const t=await I.get(ee);this.aiConfig=t;const e=this.getContributedProviders(),s=t?.providers||[];this.providers=this.mergeProviders(s,e);const a=t?.defaultProvider||"";a&&!this.providers.find(i=>i.name===a)?this.defaultProvider="":this.defaultProvider=a,t?.requireToolApproval!==void 0?this.requireToolApproval=t.requireToolApproval:this.requireToolApproval=!0,this.toolApprovalAllowlist=t?.toolApprovalAllowlist||[],t?.smartToolDetection!==void 0?this.smartToolDetection=t.smartToolDetection:this.smartToolDetection=!1,this.hasChanges=!1,this.markDirty(!1),this.editingCell=null,await this.updateComplete,this.syncCheckboxStates(),this.syncToolApprovalCheckbox(),this.syncSmartToolDetectionCheckbox()}async loadAvailableCommands(){const t=M.listCommands();this.availableCommands=Object.entries(t).map(([e,s])=>({id:e,name:s.name||e,description:s.description})).sort((e,s)=>e.name.localeCompare(s.name))}getContributedProviders(){return E.getContributions(m).map(e=>e.provider)}mergeProviders(t,e){const s=new Set(t.map(i=>i.name)),a=e.filter(i=>!s.has(i.name));return a.length>0?[...t,...a]:t}syncCheckboxStates(){const t=this.shadowRoot?.querySelectorAll("tbody tr");t&&this.providers&&t.forEach((e,s)=>{const a=e.querySelector("td:first-child wa-checkbox"),i=this.providers[s];a&&i&&(a.checked=this.defaultProvider===i.name)})}syncToolApprovalCheckbox(){const t=this.shadowRoot?.querySelector(".tool-approval-controls wa-checkbox");t&&(t.checked=this.requireToolApproval)}syncSmartToolDetectionCheckbox(){const t=this.shadowRoot?.querySelector(".tool-detection-section wa-checkbox");t&&(t.checked=this.smartToolDetection)}async saveConfig(){if(!this.aiConfig)return;const t={...this.aiConfig,defaultProvider:this.defaultProvider,providers:this.providers,requireToolApproval:this.requireToolApproval,toolApprovalAllowlist:this.toolApprovalAllowlist,smartToolDetection:this.smartToolDetection};await I.set(ee,t),this.hasChanges=!1,this.markDirty(!1)}async save(){if(this.hasChanges)try{await this.saveConfig()}catch(t){throw console.error("Failed to save AI config:",t),t}}async startCellEditing(t,e){const s=this.providers[t];if(!s)return;const a=this.getProviderFieldValue(s,e);this.editingCell={rowIndex:t,field:e},this.editingValue=a,e==="model"&&(await this.updateComplete,await this.fetchModels(s))}async fetchModels(t){this.loadingModels=!0,this.availableModels=[],await this.updateComplete;try{const e=this.providerFactory.getProvider(t);if(e.getAvailableModels){const s=await e.getAvailableModels(t);this.availableModels=Array.isArray(s)?s:[]}else this.availableModels=[]}catch{this.availableModels=[]}finally{this.loadingModels=!1}}cancelCellEditing(){this.editingCell=null,this.editingValue="",this.availableModels=[],this.loadingModels=!1}saveCellEditing(){if(!this.editingCell)return;const{rowIndex:t,field:e}=this.editingCell;this.updateProviderField(t,e,this.editingValue),this.cancelCellEditing()}markDirtyAndUpdate(){this.hasChanges=!0,this.markDirty(!0)}getProviderFieldValue(t,e){const a={name:"name",model:"model",chatApiEndpoint:"chatApiEndpoint",apiKey:"apiKey",ocrApiEndpoint:"ocrApiEndpoint",ocrModel:"ocrModel"}[e];if(!a)return"";const i=t[a];return typeof i=="string"?i:""}updateProviderField(t,e,s){this.providers=this.providers.map((a,i)=>{if(i===t){const o={...a};return e==="ocrApiEndpoint"||e==="ocrModel"?o[e]=s||void 0:o[e]=s,o}return a}),this.markDirtyAndUpdate()}updateProviderParameter(t,e,s){this.providers=this.providers.map((a,i)=>{if(i===t){const o={...a.parameters||{},[e]:s};return{...a,parameters:o}}return a}),this.markDirtyAndUpdate()}async deleteProvider(t){const e=this.providers[t];await J(r("DELETE_PROVIDER_CONFIRM",{name:e.name}))&&(this.defaultProvider===e.name&&(this.defaultProvider=""),this.providers=this.providers.filter((a,i)=>i!==t),this.markDirtyAndUpdate())}addProvider(){const t={name:"new-provider",model:"",apiKey:"",chatApiEndpoint:""};this.providers=[...this.providers,t],this.markDirtyAndUpdate()}setDefaultProvider(t){this.defaultProvider!==t&&(this.defaultProvider=t,this.markDirtyAndUpdate())}createInputHandlers(){return{onInput:t=>{const e=t.target;this.editingValue=e.value},onKeydown:t=>{t.key==="Enter"?(t.preventDefault(),this.saveCellEditing()):t.key==="Escape"&&(t.preventDefault(),this.cancelCellEditing())},onBlur:()=>{this.saveCellEditing()}}}renderEditableCell(t,e,s,a="text",i,o){const n=this.editingCell?.rowIndex===t&&this.editingCell?.field===e,c=this.createInputHandlers();return n&&o?o:n?l`
                <wa-input
                    type="${a}"
                    .value="${this.editingValue}"
                    placeholder="${i||""}"
                    @input="${c.onInput}"
                    @keydown="${c.onKeydown}"
                    @blur="${c.onBlur}"
                    autofocus>
                </wa-input>
            `:l`<span>${s}</span>`}renderModelCell(t,e){return this.editingCell?.rowIndex===t&&this.editingCell?.field==="model"?l`
            ${h(this.loadingModels,()=>l`
                <wa-input
                    .value="${this.editingValue}"
                    placeholder="${r("LOADING_MODELS")}"
                    readonly>
                    <wa-animation name="spinner" play slot="start"></wa-animation>
                </wa-input>
            `,()=>l`
                ${h(this.availableModels.length>0,()=>l`
                    <wa-dropdown
                        @wa-select="${a=>{const i=a.detail.item.value;i&&(this.editingValue=i,this.saveCellEditing())}}"
                        placement="bottom-start">
                        <wa-input
                            slot="trigger"
                            .value="${this.editingValue}"
                            placeholder="${r("SELECT_MODEL")}"
                            readonly
                            @keydown="${a=>{a.key==="Escape"&&(a.preventDefault(),this.cancelCellEditing())}}">
                        </wa-input>
                        ${this.availableModels.map(a=>l`
                            <wa-dropdown-item value="${a.id}">
                                ${a.name||a.id}
                            </wa-dropdown-item>
                        `)}
                    </wa-dropdown>
                `,()=>l`
                    ${this.renderEditableCell(t,"model",e.model)}
                `)}
            `)}
        `:l`<span>${e.model}</span>`}render(){return l`
            <div class="ai-config-editor">
                <div class="editor-header">
                    <h2>${r("PROVIDERS")}</h2>
                    <div class="header-actions">
                        <wa-button 
                            variant="brand" 
                            appearance="filled"
                            @click="${()=>this.addProvider()}">
                            ${r("ADD_PROVIDER")}
                        </wa-button>
                    </div>
                </div>

                <div class="table-container">
                    <table class="providers-table">
                        <thead>
                            <tr>
                                <th>${r("DEFAULT")}</th>
                                <th>${r("NAME")}</th>
                                <th>${r("MODEL")}</th>
                                <th>${r("API_ENDPOINT")}</th>
                                <th>${r("API_KEY")}</th>
                                <th>${r("OCR_ENDPOINT")}</th>
                                <th>${r("OCR_MODEL")}</th>
                                <th>${r("ACTIONS")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Y(this.providers,(t,e)=>e,(t,e)=>l`
                                <tr class="${this.editingCell?.rowIndex===e?"editing":""}">
                                    <td>
                                        <wa-checkbox
                                            .checked="${this.defaultProvider===t.name}"
                                            @change="${async s=>{const a=s.target;if(a.checked){this.setDefaultProvider(t.name),await this.updateComplete;const i=this.shadowRoot?.querySelectorAll("tbody tr");i&&i.forEach(o=>{const n=o.querySelector("td:first-child wa-checkbox");n&&n!==a&&(n.checked=!1)})}else this.defaultProvider===t.name&&(a.checked=!0)}}">
                                        </wa-checkbox>
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"name")}">
                                        ${this.renderEditableCell(e,"name",t.name)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"model")}">
                                        ${this.renderModelCell(e,t)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"chatApiEndpoint")}">
                                        ${this.renderEditableCell(e,"chatApiEndpoint",l`<span class="endpoint-text">${t.chatApiEndpoint}</span>`)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"apiKey")}">
                                        ${this.renderEditableCell(e,"apiKey",l`<span class="api-key-text">${t.apiKey?"••••••••":""}</span>`,"password",r("API_KEY"))}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"ocrApiEndpoint")}">
                                        ${this.renderEditableCell(e,"ocrApiEndpoint",t.ocrApiEndpoint||"-","text",r("OPTIONAL"))}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"ocrModel")}">
                                        ${this.renderEditableCell(e,"ocrModel",t.ocrModel||"-","text",r("OPTIONAL"))}
                                    </td>
                                    <td>
                                        <wa-button
                                            variant="danger"
                                            appearance="plain"
                                            size="small"
                                            @click="${()=>this.deleteProvider(e)}">
                                            ${r("DELETE_PROVIDER")}
                                        </wa-button>
                                    </td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>

                ${h(this.providers.length===0,()=>l`
                    <div class="empty-state">
                        <p>${r("NO_PROVIDERS_CONFIGURED")}</p>
                    </div>
                `)}

                <div class="tool-approval-section">
                    <h3>${r("TOOL_APPROVALS")}</h3>
                    <div class="tool-approval-controls">
                        <wa-checkbox
                            .checked="${this.requireToolApproval}"
                            @change="${t=>{const e=t.target;this.requireToolApproval=e.checked,this.markDirtyAndUpdate()}}">
                            ${r("REQUIRE_APPROVAL_BEFORE_EXECUTING")}
                        </wa-checkbox>
                    </div>

                    <div class="tool-detection-section" style="margin-top: 1.5rem;">
                        <wa-checkbox
                            .checked="${this.smartToolDetection}"
                            @change="${t=>{const e=t.target;this.smartToolDetection=e.checked,this.markDirtyAndUpdate()}}">
                            ${r("SMART_TOOL_DETECTION")}
                        </wa-checkbox>
                        <p class="hint" style="margin-top: 0.5rem; margin-left: 1.75rem; color: var(--wa-color-text-secondary, #666); font-size: 0.875rem;">
                            ${r("SMART_TOOL_DETECTION_HINT")}
                        </p>
                    </div>

                    <div class="allowlist-section">
                        <h4>
                            ${r("APPROVED_COMMANDS")}
                            <span class="command-stats">
                                (${this.toolApprovalAllowlist.length}/${this.availableCommands.length})
                            </span>
                        </h4>
                        <p class="hint">
                            ${this.requireToolApproval?r("SELECT_COMMANDS_WITHOUT_APPROVAL"):r("COMMANDS_AUTO_APPROVED")}
                        </p>
                        <div class="commands-list ${this.requireToolApproval?"":"disabled"}">
                            ${this.availableCommands.map(t=>l`
                                <div class="command-item">
                                    <wa-checkbox
                                        .checked="${this.toolApprovalAllowlist.includes(t.id)}"
                                        ?disabled="${!this.requireToolApproval}"
                                        @change="${e=>{e.target.checked?this.toolApprovalAllowlist.includes(t.id)||(this.toolApprovalAllowlist=[...this.toolApprovalAllowlist,t.id],this.markDirtyAndUpdate()):(this.toolApprovalAllowlist=this.toolApprovalAllowlist.filter(a=>a!==t.id),this.markDirtyAndUpdate())}}">
                                        <div class="command-label">
                                            ${t.name}
                                            ${t.description?l`
                                                <span class="command-description">${t.description}</span>
                                            `:""}
                                        </div>
                                    </wa-checkbox>
                                </div>
                            `)}
                        </div>
                    </div>
                </div>
            </div>
        `}};b.styles=$`
        :host {
            display: block;
            height: 100%;
            overflow: auto;
        }

        .ai-config-editor {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 1rem;
        }

        .editor-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
        }

        .editor-header h2 {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--wa-color-text-normal);
        }

        .header-actions {
            display: flex;
            gap: 0.5rem;
        }

        .table-container {
            flex: 1;
            overflow: auto;
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            border-radius: var(--wa-border-radius-m);
        }

        .providers-table {
            width: 100%;
            border-collapse: collapse;
            background-color: var(--wa-color-surface-raised);
        }

        .providers-table thead {
            position: sticky;
            top: 0;
            background-color: var(--wa-color-surface-raised);
            z-index: 1;
        }

        .providers-table th {
            padding: 0.75rem;
            text-align: left;
            font-weight: 600;
            font-size: 0.875rem;
            color: var(--wa-color-text-subtle);
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
            white-space: nowrap;
        }

        .providers-table td {
            padding: 0.75rem;
            border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
            vertical-align: middle;
        }

        .providers-table tbody tr:hover {
            background-color: var(--wa-color-surface-lowered);
        }

        .providers-table tbody tr.editing {
            background-color: var(--wa-color-surface-brand-subtle);
        }

        .providers-table tbody tr:last-child td {
            border-bottom: none;
        }

        .providers-table wa-input {
            width: 100%;
            min-width: 150px;
        }

        .providers-table wa-dropdown {
            width: 100%;
            min-width: 150px;
        }

        .providers-table wa-dropdown wa-input {
            width: 100%;
        }

        .providers-table wa-checkbox {
            display: flex;
            justify-content: center;
        }

        .editable-cell {
            cursor: pointer;
            position: relative;
        }

        .editable-cell:hover {
            background-color: var(--wa-color-surface-lowered);
        }

        .editable-cell span {
            display: block;
            min-height: 1.5rem;
            padding: 0.25rem 0;
        }

        .endpoint-text {
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            color: var(--wa-color-text-subtle);
            word-break: break-all;
            max-width: 200px;
            display: inline-block;
        }

        .api-key-text {
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            color: var(--wa-color-text-subtle);
        }

        .empty-state {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3rem;
            color: var(--wa-color-text-subtle);
        }

        .empty-state p {
            margin: 0;
        }

        .tool-approval-section {
            margin-top: 2rem;
            padding-top: 2rem;
        }

        .tool-approval-section h3 {
            margin: 0 0 1rem 0;
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--wa-color-text-normal);
        }

        .tool-approval-controls {
            margin-bottom: 1rem;
        }

        .allowlist-section {
            margin-top: 1.5rem;
        }

        .allowlist-section h4 {
            margin: 0 0 0.5rem 0;
            font-size: 1rem;
            font-weight: 500;
            color: var(--wa-color-text-normal);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .command-stats {
            font-size: 0.875rem;
            font-weight: normal;
            color: var(--wa-color-text-subtle);
        }

        .allowlist-section .hint {
            margin: 0 0 1rem 0;
            font-size: 0.875rem;
            color: var(--wa-color-text-subtle);
        }

        .commands-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-height: 300px;
            overflow-y: auto;
            padding: 0.5rem;
            border: solid var(--wa-border-width-s) var(--wa-color-neutral-border-subtle);
            border-radius: var(--wa-border-radius-m);
            background-color: var(--wa-color-surface-raised);
        }

        .commands-list.disabled {
            opacity: 0.6;
        }

        .command-item {
            padding: 0.25rem 0;
        }

        .command-item wa-checkbox {
            width: 100%;
        }

        .command-label {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
        }

        .command-description {
            font-size: 0.75rem;
            color: var(--wa-color-text-subtle);
            font-weight: normal;
        }

    `;y([v({attribute:!1})],b.prototype,"input",2);y([w()],b.prototype,"aiConfig",2);y([w()],b.prototype,"providers",2);y([w()],b.prototype,"defaultProvider",2);y([w()],b.prototype,"editingCell",2);y([w()],b.prototype,"editingValue",2);y([w()],b.prototype,"hasChanges",2);y([w()],b.prototype,"availableModels",2);y([w()],b.prototype,"loadingModels",2);y([w()],b.prototype,"requireToolApproval",2);y([w()],b.prototype,"toolApprovalAllowlist",2);y([w()],b.prototype,"smartToolDetection",2);y([w()],b.prototype,"availableCommands",2);b=y([P("k-ai-config-editor")],b);const Vt="aisystem",qt={APP_SUPPORT:"App Support",APP_SUPPORT_DESC:"General app support",SIDEBAR_LABEL:"AI",TOKEN_USAGE:"Token Usage",OPEN_AI_CONFIG:"Open AI Config",OPEN_AI_CONFIG_DESC:"Opens the AI settings editor",AI_SETTINGS:"AI Settings",AI_CONFIG:"AI Config",NO_PROVIDER_CONFIGURED:"No AI provider configured",CLICK_SETTINGS_TO_CONFIGURE:"Click the settings button to configure",TYPE_MESSAGE_ENTER:"Type your message and press Enter...",STOP:"Stop",SETTINGS:"Settings",CLOSE:"Close",ARCHIVED_SESSIONS:"Archived Sessions",RESTORE:"Restore",DELETE_ALL_ARCHIVED:"Delete All Archived",DELETE_ALL_CONFIRM:"Are you sure you want to permanently delete all {count} archived session{plural}?",NEW_CHAT:"New Chat",CHAT:"Chat",CANCEL:"Cancel",APPROVE:"Approve",TOOL_APPROVAL_REQUEST:"Tool Approval Request",TOOL_CALLS:"Tool Calls",TOOL_APPROVAL_MESSAGE:"The AI wants to execute {toolCount} tool call{plural}: {toolList}",COPY:"Copy",AI_ASSISTANT:"AI Assistant",MULTIPLE_AGENTS:"Multiple Agents",QUICK_ACTIONS:"Quick Actions",TOKEN_USAGE_STATS:"Token Usage Statistics",TOTAL_USAGE:"Total Usage",TOTAL:"Total",PROMPT:"Prompt",COMPLETION:"Completion",REQUESTS:"Requests",BY_PROVIDER:"By Provider",RESET_STATISTICS:"Reset Statistics",RESET_CONFIRM:"Reset all token usage statistics?",TOKENS:"tokens",LOADING_MODELS:"Loading models...",SELECT_MODEL:"Select a model",TOOL_EXECUTION_PENDING:"Tool execution pending: {toolCount} tool{plural} ({toolName}{more})",AGENT_WANTS_TO_EXECUTE:'Agent "{role}" wants to execute the following tools:',ALWAYS_ALLOW:"Always allow",COPY_CODE:"Copy code",REQUIRES_ATTENTION:"Requires attention",RESEND:"Resend",CONFIRM:"Confirm",REJECT:"Reject",ENTER_RESPONSE:"Enter your response...",SUBMIT:"Submit",CONTINUE_WORKFLOW:"Continue Workflow",PROVIDERS:"Providers",ADD_PROVIDER:"Add Provider",DEFAULT:"Default",NAME:"Name",MODEL:"Model",API_ENDPOINT:"API Endpoint",API_KEY:"API Key",OCR_ENDPOINT:"OCR Endpoint",OCR_MODEL:"OCR Model",ACTIONS:"Actions",DELETE_PROVIDER:"Delete",DELETE_PROVIDER_CONFIRM:'Delete provider "{name}"?',NO_PROVIDERS_CONFIGURED:'No providers configured. Click "Add Provider" to get started.',TOOL_APPROVALS:"Tool Approvals",REQUIRE_APPROVAL_BEFORE_EXECUTING:"Require approval before executing tools",SMART_TOOL_DETECTION:"Use smart tool detection (reduces token usage)",SMART_TOOL_DETECTION_HINT:"When enabled, a small ML model running in your browser will detect if a prompt needs tools. This reduces token usage for simple queries like greetings. Note: The model (approximately 60-80MB quantized) will be downloaded on first use, which may take some time.",APPROVED_COMMANDS:"Approved Commands",SELECT_COMMANDS_WITHOUT_APPROVAL:"Select commands that can be executed without approval:",COMMANDS_AUTO_APPROVED:"These commands will be approved automatically when approval is enabled:",OPTIONAL:"Optional"},Kt={APP_SUPPORT:"App-Unterstützung",APP_SUPPORT_DESC:"Allgemeine App-Unterstützung",SIDEBAR_LABEL:"KI",TOKEN_USAGE:"Token-Verbrauch",OPEN_AI_CONFIG:"KI-Konfiguration öffnen",OPEN_AI_CONFIG_DESC:"Öffnet den KI-Einstellungseditor",AI_SETTINGS:"KI-Einstellungen",AI_CONFIG:"KI-Konfiguration",NO_PROVIDER_CONFIGURED:"Kein KI-Anbieter konfiguriert",CLICK_SETTINGS_TO_CONFIGURE:"Klicken Sie auf die Einstellungsschaltfläche zum Konfigurieren",TYPE_MESSAGE_ENTER:"Geben Sie Ihre Nachricht ein und drücken Sie Enter...",STOP:"Stopp",SETTINGS:"Einstellungen",CLOSE:"Schließen",ARCHIVED_SESSIONS:"Archivierte Sitzungen",RESTORE:"Wiederherstellen",DELETE_ALL_ARCHIVED:"Alle archivierten löschen",DELETE_ALL_CONFIRM:"Möchten Sie wirklich alle {count} archivierte Sitzung{plural} dauerhaft löschen?",NEW_CHAT:"Neuer Chat",CHAT:"Chat",CANCEL:"Abbrechen",APPROVE:"Genehmigen",TOOL_APPROVAL_REQUEST:"Werkzeug-Genehmigungsanfrage",TOOL_CALLS:"Werkzeugaufrufe",TOOL_APPROVAL_MESSAGE:"Die KI möchte {toolCount} Werkzeugaufruf{plural} ausführen: {toolList}",COPY:"Kopieren",AI_ASSISTANT:"KI-Assistent",MULTIPLE_AGENTS:"Mehrere Agenten",QUICK_ACTIONS:"Schnellaktionen",TOKEN_USAGE_STATS:"Token-Verbrauchsstatistiken",TOTAL_USAGE:"Gesamtverbrauch",TOTAL:"Gesamt",PROMPT:"Eingabeaufforderung",COMPLETION:"Vervollständigung",REQUESTS:"Anfragen",BY_PROVIDER:"Nach Anbieter",RESET_STATISTICS:"Statistiken zurücksetzen",RESET_CONFIRM:"Alle Token-Verbrauchsstatistiken zurücksetzen?",TOKENS:"Tokens",LOADING_MODELS:"Modelle werden geladen...",SELECT_MODEL:"Modell auswählen",TOOL_EXECUTION_PENDING:"Werkzeugausführung ausstehend: {toolCount} Werkzeug{plural} ({toolName}{more})",AGENT_WANTS_TO_EXECUTE:'Agent "{role}" möchte die folgenden Werkzeuge ausführen:',ALWAYS_ALLOW:"Immer erlauben",COPY_CODE:"Code kopieren",REQUIRES_ATTENTION:"Erfordert Aufmerksamkeit",RESEND:"Erneut senden",CONFIRM:"Bestätigen",REJECT:"Ablehnen",ENTER_RESPONSE:"Geben Sie Ihre Antwort ein...",SUBMIT:"Absenden",CONTINUE_WORKFLOW:"Workflow fortsetzen",PROVIDERS:"Anbieter",ADD_PROVIDER:"Anbieter hinzufügen",DEFAULT:"Standard",NAME:"Name",MODEL:"Modell",API_ENDPOINT:"API-Endpunkt",API_KEY:"API-Schlüssel",OCR_ENDPOINT:"OCR-Endpunkt",OCR_MODEL:"OCR-Modell",ACTIONS:"Aktionen",DELETE_PROVIDER:"Löschen",DELETE_PROVIDER_CONFIRM:'Anbieter "{name}" löschen?',NO_PROVIDERS_CONFIGURED:'Keine Anbieter konfiguriert. Klicken Sie auf "Anbieter hinzufügen", um zu beginnen.',TOOL_APPROVALS:"Werkzeug-Genehmigungen",REQUIRE_APPROVAL_BEFORE_EXECUTING:"Genehmigung vor der Ausführung von Werkzeugen erforderlich",SMART_TOOL_DETECTION:"Intelligente Werkzeugerkennung verwenden (reduziert Token-Verbrauch)",SMART_TOOL_DETECTION_HINT:"Wenn aktiviert, erkennt ein kleines ML-Modell in Ihrem Browser, ob eine Eingabeaufforderung Werkzeuge benötigt. Dies reduziert den Token-Verbrauch bei einfachen Abfragen wie Begrüßungen. Hinweis: Das Modell (ca. 60-80MB quantisiert) wird bei der ersten Verwendung heruntergeladen, was einige Zeit dauern kann.",APPROVED_COMMANDS:"Genehmigte Befehle",SELECT_COMMANDS_WITHOUT_APPROVAL:"Wählen Sie Befehle aus, die ohne Genehmigung ausgeführt werden können:",COMMANDS_AUTO_APPROVED:"Diese Befehle werden automatisch genehmigt, wenn die Genehmigung aktiviert ist:",OPTIONAL:"Optional"},Ft={namespace:Vt,en:qt,de:Kt};E.registerContribution(me,Ft);E.registerContribution(ve,{name:"aiview",label:r("SIDEBAR_LABEL"),icon:"robot",component:t=>l`<k-aiview id="${t}"></k-aiview>`});E.registerContribution(Oe,{label:r("APP_SUPPORT"),description:r("APP_SUPPORT_DESC"),role:"appsupport",priority:100,icon:"question-circle",sysPrompt:wt,tools:()=>I.get(ee).then(t=>({enabled:!0,smartToolDetection:t?.smartToolDetection??!1}))});E.registerContribution(te,{target:te,label:r("TOKEN_USAGE"),html:"<k-token-usage></k-token-usage>"});X.registerEditorInputHandler({ranking:1e3,canHandle:t=>t.key===".system.ai-config",handle:async t=>(t.editorId="ai-config-editor",t.widgetFactory=()=>l`
                <k-ai-config-editor .input=${t}></k-ai-config-editor>
            `,t)});we({command:{id:"open_ai_config",name:r("OPEN_AI_CONFIG"),description:r("OPEN_AI_CONFIG_DESC"),parameters:[]},handler:{execute:t=>{const e={title:r("AI_SETTINGS"),data:{},key:".system.ai-config",icon:"robot",state:{}};X.loadEditor(e).then()}},contribution:{target:fe,icon:"robot",label:r("AI_CONFIG")}});be.put("aiService",K);
