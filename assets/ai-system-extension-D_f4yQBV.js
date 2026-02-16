const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/in-browser-ml-service-D7AoKjy9.js","assets/main-CymV4qDG.js","assets/main-DCTlflHk.css","assets/ai-service-CdoVf8yq.js"])))=>i.map(i=>d[i]);
import{a as C,w as rt,e as Ee,G as it,i as D,n as S,r as E,u as j,b as p,a2 as b,y as nt,t as L,a3 as ot,v as pe,_ as ae,g as N,K as Ke,m as Z,c as V,I as lt,a4 as ct,h as Te,z as pt,s as be,f as dt,S as ht,a5 as ut,B as ze,l as gt,T as mt,k as ft}from"./main-CymV4qDG.js";import{b as x,C as wt,a as ee,T as We,c as bt,t as we,P as vt,K as ve,d as kt}from"./ai-service-CdoVf8yq.js";import"./in-browser-ml-service-D7AoKjy9.js";const At=`You are an assistant in a web application with workspace, editors, and AI chat.

**Tools:**
Commands are exposed as AI-callable tools. Tools are context-aware - available commands depend on active editor, selected files, and workspace state.

**Tool Usage Rules:**
1. If tools are available and match the request, use them - don't describe manual steps
2. Read tool descriptions/parameters to select the correct tool
3. Call tools in sequence for multi-step tasks
4. After successful tool execution, provide a final response - don't loop or call more tools unless explicitly requested
5. If no tools are available, explain what context is needed

Keep responses concise. Use tools when available rather than discussing alternatives.

`;C.registerContribution(x,{target:x,label:"Ollama (Local)",provider:{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"https://<your-server>/v1/chat/completions",apiKey:""}});C.registerContribution(x,{target:x,label:"OpenWebUI (Self Hosted)",provider:{name:"openwebui",model:"gemma3:12b",chatApiEndpoint:"https://<your-server>/api/v1/chat/completion",apiKey:""}});C.registerContribution(x,{target:x,label:"OpenAI",provider:{name:"openai",model:"gpt-4.1",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"}});C.registerContribution(x,{target:x,label:"Groq",provider:{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"}});C.registerContribution(x,{target:x,label:"Cerebras",provider:{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"}});C.registerContribution(x,{target:x,label:"WebLLM",provider:{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}});C.registerContribution(x,{target:x,label:"Mistral",provider:{name:"mistral",model:"mistral-large-latest",chatApiEndpoint:"https://api.mistral.ai/v1/chat/completions",apiKey:"<your api key>",ocrApiEndpoint:"https://api.mistral.ai/v1/ocr",ocrModel:"mistral-ocr-latest"}});C.registerContribution(x,{target:x,label:"LiteLLM",provider:{name:"litellm",model:"gpt-3.5-turbo",chatApiEndpoint:"https://<your-server>/v1/chat/completions",apiKey:"<your api key>"}});const yt={enhance:async(t,e)=>{try{const r=await rt.getWorkspace(),a=Ee.getEditorArea()?.getActiveEditor(),s={workspace:r?.getName()||null,activeEditor:a?{title:a.input?.title||null,editorId:a.input?.editorId||null}:null},n=`***App's state:***
${JSON.stringify(s,null,2)}`;return`${t}

${n}`}catch{return t}},priority:20};C.registerContribution(wt,{label:"App State Enhancer",enhancer:yt});function $e(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var W=$e();function je(t){W=t}var se={exec:()=>null};function w(t,e=""){let r=typeof t=="string"?t:t.source,a={replace:(s,n)=>{let i=typeof n=="string"?n:n.source;return i=i.replace($.caret,"$1"),r=r.replace(s,i),a},getRegex:()=>new RegExp(r,e)};return a}var xt=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),$={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},St=/^(?:[ \t]*(?:\n|$))+/,Et=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Tt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ne=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,$t=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ce=/(?:[*+-]|\d{1,9}[.)])/,He=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ye=w(He).replace(/bull/g,Ce).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ct=w(He).replace(/bull/g,Ce).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),_e=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,_t=/^[^\n]+/,Ie=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,It=w(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ie).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ot=w(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ce).getRegex(),ge="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Oe=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Pt=w("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Oe).replace("tag",ge).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Qe=w(_e).replace("hr",ne).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ge).getRegex(),Rt=w(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Qe).getRegex(),Pe={blockquote:Rt,code:Et,def:It,fences:Tt,heading:$t,hr:ne,html:Pt,lheading:Ye,list:Ot,newline:St,paragraph:Qe,table:se,text:_t},Ue=w("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ne).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ge).getRegex(),Mt={...Pe,lheading:Ct,table:Ue,paragraph:w(_e).replace("hr",ne).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ue).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ge).getRegex()},Nt={...Pe,html:w(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Oe).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:se,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:w(_e).replace("hr",ne).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ye).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Dt=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Lt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ze=/^( {2,}|\\)\n(?!\s*$)/,zt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,me=/[\p{P}\p{S}]/u,Re=/[\s\p{P}\p{S}]/u,Xe=/[^\s\p{P}\p{S}]/u,Ut=w(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Re).getRegex(),Je=/(?!~)[\p{P}\p{S}]/u,Gt=/(?!~)[\s\p{P}\p{S}]/u,qt=/(?:[^\s\p{P}\p{S}]|~)/u,Vt=w(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",xt?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),et=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Bt=w(et,"u").replace(/punct/g,me).getRegex(),Ft=w(et,"u").replace(/punct/g,Je).getRegex(),tt="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Kt=w(tt,"gu").replace(/notPunctSpace/g,Xe).replace(/punctSpace/g,Re).replace(/punct/g,me).getRegex(),Wt=w(tt,"gu").replace(/notPunctSpace/g,qt).replace(/punctSpace/g,Gt).replace(/punct/g,Je).getRegex(),jt=w("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Xe).replace(/punctSpace/g,Re).replace(/punct/g,me).getRegex(),Ht=w(/\\(punct)/,"gu").replace(/punct/g,me).getRegex(),Yt=w(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Qt=w(Oe).replace("(?:-->|$)","-->").getRegex(),Zt=w("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Qt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),de=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Xt=w(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",de).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),st=w(/^!?\[(label)\]\[(ref)\]/).replace("label",de).replace("ref",Ie).getRegex(),at=w(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ie).getRegex(),Jt=w("reflink|nolink(?!\\()","g").replace("reflink",st).replace("nolink",at).getRegex(),Ge=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Me={_backpedal:se,anyPunctuation:Ht,autolink:Yt,blockSkip:Vt,br:Ze,code:Lt,del:se,emStrongLDelim:Bt,emStrongRDelimAst:Kt,emStrongRDelimUnd:jt,escape:Dt,link:Xt,nolink:at,punctuation:Ut,reflink:st,reflinkSearch:Jt,tag:Zt,text:zt,url:se},es={...Me,link:w(/^!?\[(label)\]\((.*?)\)/).replace("label",de).getRegex(),reflink:w(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",de).getRegex()},ke={...Me,emStrongRDelimAst:Wt,emStrongLDelim:Ft,url:w(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Ge).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:w(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Ge).getRegex()},ts={...ke,br:w(Ze).replace("{2,}","*").getRegex(),text:w(ke.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ce={normal:Pe,gfm:Mt,pedantic:Nt},X={normal:Me,gfm:ke,breaks:ts,pedantic:es},ss={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},qe=t=>ss[t];function M(t,e){if(e){if($.escapeTest.test(t))return t.replace($.escapeReplace,qe)}else if($.escapeTestNoEncode.test(t))return t.replace($.escapeReplaceNoEncode,qe);return t}function Ve(t){try{t=encodeURI(t).replace($.percentDecode,"%")}catch{return null}return t}function Be(t,e){let r=t.replace($.findPipe,(n,i,l)=>{let o=!1,h=i;for(;--h>=0&&l[h]==="\\";)o=!o;return o?"|":" |"}),a=r.split($.splitPipe),s=0;if(a[0].trim()||a.shift(),a.length>0&&!a.at(-1)?.trim()&&a.pop(),e)if(a.length>e)a.splice(e);else for(;a.length<e;)a.push("");for(;s<a.length;s++)a[s]=a[s].trim().replace($.slashPipe,"|");return a}function J(t,e,r){let a=t.length;if(a===0)return"";let s=0;for(;s<a&&t.charAt(a-s-1)===e;)s++;return t.slice(0,a-s)}function as(t,e){if(t.indexOf(e[1])===-1)return-1;let r=0;for(let a=0;a<t.length;a++)if(t[a]==="\\")a++;else if(t[a]===e[0])r++;else if(t[a]===e[1]&&(r--,r<0))return a;return r>0?-2:-1}function Fe(t,e,r,a,s){let n=e.href,i=e.title||null,l=t[1].replace(s.other.outputLinkReplace,"$1");a.state.inLink=!0;let o={type:t[0].charAt(0)==="!"?"image":"link",raw:r,href:n,title:i,text:l,tokens:a.inlineTokens(l)};return a.state.inLink=!1,o}function rs(t,e,r){let a=t.match(r.other.indentCodeCompensation);if(a===null)return e;let s=a[1];return e.split(`
`).map(n=>{let i=n.match(r.other.beginningSpace);if(i===null)return n;let[l]=i;return l.length>=s.length?n.slice(s.length):n}).join(`
`)}var he=class{options;rules;lexer;constructor(t){this.options=t||W}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:J(r,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let r=e[0],a=rs(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:a}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){let a=J(r,"#");(this.options.pedantic||!a||this.rules.other.endingSpaceChar.test(a))&&(r=a.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:J(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let r=J(e[0],`
`).split(`
`),a="",s="",n=[];for(;r.length>0;){let i=!1,l=[],o;for(o=0;o<r.length;o++)if(this.rules.other.blockquoteStart.test(r[o]))l.push(r[o]),i=!0;else if(!i)l.push(r[o]);else break;r=r.slice(o);let h=l.join(`
`),d=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");a=a?`${a}
${h}`:h,s=s?`${s}
${d}`:d;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,n,!0),this.lexer.state.top=m,r.length===0)break;let g=n.at(-1);if(g?.type==="code")break;if(g?.type==="blockquote"){let k=g,f=k.raw+`
`+r.join(`
`),u=this.blockquote(f);n[n.length-1]=u,a=a.substring(0,a.length-k.raw.length)+u.raw,s=s.substring(0,s.length-k.text.length)+u.text;break}else if(g?.type==="list"){let k=g,f=k.raw+`
`+r.join(`
`),u=this.list(f);n[n.length-1]=u,a=a.substring(0,a.length-g.raw.length)+u.raw,s=s.substring(0,s.length-k.raw.length)+u.raw,r=f.substring(n.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:n,text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let r=e[1].trim(),a=r.length>1,s={type:"list",raw:"",ordered:a,start:a?+r.slice(0,-1):"",loose:!1,items:[]};r=a?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=a?r:"[*+-]");let n=this.rules.other.listItemRegex(r),i=!1;for(;t;){let o=!1,h="",d="";if(!(e=n.exec(t))||this.rules.block.hr.test(t))break;h=e[0],t=t.substring(h.length);let m=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,y=>" ".repeat(3*y.length)),g=t.split(`
`,1)[0],k=!m.trim(),f=0;if(this.options.pedantic?(f=2,d=m.trimStart()):k?f=e[1].length+1:(f=e[2].search(this.rules.other.nonSpaceChar),f=f>4?1:f,d=m.slice(f),f+=e[1].length),k&&this.rules.other.blankLine.test(g)&&(h+=g+`
`,t=t.substring(g.length+1),o=!0),!o){let y=this.rules.other.nextBulletRegex(f),I=this.rules.other.hrRegex(f),z=this.rules.other.fencesBeginRegex(f),fe=this.rules.other.headingBeginRegex(f),q=this.rules.other.htmlBeginRegex(f);for(;t;){let R=t.split(`
`,1)[0],Q;if(g=R,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),Q=g):Q=g.replace(this.rules.other.tabCharGlobal,"    "),z.test(g)||fe.test(g)||q.test(g)||y.test(g)||I.test(g))break;if(Q.search(this.rules.other.nonSpaceChar)>=f||!g.trim())d+=`
`+Q.slice(f);else{if(k||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||z.test(m)||fe.test(m)||I.test(m))break;d+=`
`+g}!k&&!g.trim()&&(k=!0),h+=R+`
`,t=t.substring(R.length+1),m=Q.slice(f)}}s.loose||(i?s.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(i=!0));let u=null,A;this.options.gfm&&(u=this.rules.other.listIsTask.exec(d),u&&(A=u[0]!=="[ ] ",d=d.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:h,task:!!u,checked:A,loose:!1,text:d,tokens:[]}),s.raw+=h}let l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let o=0;o<s.items.length;o++)if(this.lexer.state.top=!1,s.items[o].tokens=this.lexer.blockTokens(s.items[o].text,[]),!s.loose){let h=s.items[o].tokens.filter(m=>m.type==="space"),d=h.length>0&&h.some(m=>this.rules.other.anyLine.test(m.raw));s.loose=d}if(s.loose)for(let o=0;o<s.items.length;o++)s.items[o].loose=!0;return s}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),a=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:a,title:s}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let r=Be(e[1]),a=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],n={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===a.length){for(let i of a)this.rules.other.tableAlignRight.test(i)?n.align.push("right"):this.rules.other.tableAlignCenter.test(i)?n.align.push("center"):this.rules.other.tableAlignLeft.test(i)?n.align.push("left"):n.align.push(null);for(let i=0;i<r.length;i++)n.header.push({text:r[i],tokens:this.lexer.inline(r[i]),header:!0,align:n.align[i]});for(let i of s)n.rows.push(Be(i,n.header.length).map((l,o)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:n.align[o]})));return n}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let n=J(r.slice(0,-1),"\\");if((r.length-n.length)%2===0)return}else{let n=as(e[2],"()");if(n===-2)return;if(n>-1){let i=(e[0].indexOf("!")===0?5:4)+e[1].length+n;e[2]=e[2].substring(0,n),e[0]=e[0].substring(0,i).trim(),e[3]=""}}let a=e[2],s="";if(this.options.pedantic){let n=this.rules.other.pedanticHrefTitle.exec(a);n&&(a=n[1],s=n[3])}else s=e[3]?e[3].slice(1,-1):"";return a=a.trim(),this.rules.other.startAngleBracket.test(a)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?a=a.slice(1):a=a.slice(1,-1)),Fe(e,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let a=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[a.toLowerCase()];if(!s){let n=r[0].charAt(0);return{type:"text",raw:n,text:n}}return Fe(r,s,r[0],this.lexer,this.rules)}}emStrong(t,e,r=""){let a=this.rules.inline.emStrongLDelim.exec(t);if(!(!a||a[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(a[1]||a[2])||!r||this.rules.inline.punctuation.exec(r))){let s=[...a[0]].length-1,n,i,l=s,o=0,h=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*t.length+s);(a=h.exec(e))!=null;){if(n=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!n)continue;if(i=[...n].length,a[3]||a[4]){l+=i;continue}else if((a[5]||a[6])&&s%3&&!((s+i)%3)){o+=i;continue}if(l-=i,l>0)continue;i=Math.min(i,i+l+o);let d=[...a[0]][0].length,m=t.slice(0,s+a.index+d+i);if(Math.min(s,i)%2){let k=m.slice(1,-1);return{type:"em",raw:m,text:k,tokens:this.lexer.inlineTokens(k)}}let g=m.slice(2,-2);return{type:"strong",raw:m,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," "),a=this.rules.other.nonSpaceChar.test(r),s=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return a&&s&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let r,a;return e[2]==="@"?(r=e[1],a="mailto:"+r):(r=e[1],a=r),{type:"link",raw:e[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let r,a;if(e[2]==="@")r=e[0],a="mailto:"+r;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(s!==e[0]);r=e[0],e[1]==="www."?a="http://"+e[0]:a=e[0]}return{type:"link",raw:e[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},O=class Ae{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||W,this.options.tokenizer=this.options.tokenizer||new he,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:$,block:ce.normal,inline:X.normal};this.options.pedantic?(r.block=ce.pedantic,r.inline=X.pedantic):this.options.gfm&&(r.block=ce.gfm,this.options.breaks?r.inline=X.breaks:r.inline=X.gfm),this.tokenizer.rules=r}static get rules(){return{block:ce,inline:X}}static lex(e,r){return new Ae(r).lex(e)}static lexInline(e,r){return new Ae(r).inlineTokens(e)}lex(e){e=e.replace($.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let a=this.inlineQueue[r];this.inlineTokens(a.src,a.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],a=!1){for(this.options.pedantic&&(e=e.replace($.tabCharGlobal,"    ").replace($.spaceLine,""));e;){let s;if(this.options.extensions?.block?.some(i=>(s=i.call({lexer:this},e,r))?(e=e.substring(s.raw.length),r.push(s),!0):!1))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);let i=r.at(-1);s.raw.length===1&&i!==void 0?i.raw+=`
`:r.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);let i=r.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+s.raw,i.text+=`
`+s.text,this.inlineQueue.at(-1).src=i.text):r.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);let i=r.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+s.raw,i.text+=`
`+s.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},r.push(s));continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),r.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),r.push(s);continue}let n=e;if(this.options.extensions?.startBlock){let i=1/0,l=e.slice(1),o;this.options.extensions.startBlock.forEach(h=>{o=h.call({lexer:this},l),typeof o=="number"&&o>=0&&(i=Math.min(i,o))}),i<1/0&&i>=0&&(n=e.substring(0,i+1))}if(this.state.top&&(s=this.tokenizer.paragraph(n))){let i=r.at(-1);a&&i?.type==="paragraph"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):r.push(s),a=n.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);let i=r.at(-1);i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+s.raw,i.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):r.push(s);continue}if(e){let i="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){let a=e,s=null;if(this.tokens.links){let o=Object.keys(this.tokens.links);if(o.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)o.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,s.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let n;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)n=s[2]?s[2].length:0,a=a.slice(0,s.index+n)+"["+"a".repeat(s[0].length-n-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);a=this.options.hooks?.emStrongMask?.call({lexer:this},a)??a;let i=!1,l="";for(;e;){i||(l=""),i=!1;let o;if(this.options.extensions?.inline?.some(d=>(o=d.call({lexer:this},e,r))?(e=e.substring(o.raw.length),r.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let d=r.at(-1);o.type==="text"&&d?.type==="text"?(d.raw+=o.raw,d.text+=o.text):r.push(o);continue}if(o=this.tokenizer.emStrong(e,a,l)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.del(e)){e=e.substring(o.raw.length),r.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),r.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),r.push(o);continue}let h=e;if(this.options.extensions?.startInline){let d=1/0,m=e.slice(1),g;this.options.extensions.startInline.forEach(k=>{g=k.call({lexer:this},m),typeof g=="number"&&g>=0&&(d=Math.min(d,g))}),d<1/0&&d>=0&&(h=e.substring(0,d+1))}if(o=this.tokenizer.inlineText(h)){e=e.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(l=o.raw.slice(-1)),i=!0;let d=r.at(-1);d?.type==="text"?(d.raw+=o.raw,d.text+=o.text):r.push(o);continue}if(e){let d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return r}},ue=class{options;parser;constructor(t){this.options=t||W}space(t){return""}code({text:t,lang:e,escaped:r}){let a=(e||"").match($.notSpaceStart)?.[0],s=t.replace($.endingNewline,"")+`
`;return a?'<pre><code class="language-'+M(a)+'">'+(r?s:M(s,!0))+`</code></pre>
`:"<pre><code>"+(r?s:M(s,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,r=t.start,a="";for(let i=0;i<t.items.length;i++){let l=t.items[i];a+=this.listitem(l)}let s=e?"ol":"ul",n=e&&r!==1?' start="'+r+'"':"";return"<"+s+n+`>
`+a+"</"+s+`>
`}listitem(t){let e="";if(t.task){let r=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+M(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",r="";for(let s=0;s<t.header.length;s++)r+=this.tablecell(t.header[s]);e+=this.tablerow({text:r});let a="";for(let s=0;s<t.rows.length;s++){let n=t.rows[s];r="";for(let i=0;i<n.length;i++)r+=this.tablecell(n[i]);a+=this.tablerow({text:r})}return a&&(a=`<tbody>${a}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+a+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${M(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:r}){let a=this.parser.parseInline(r),s=Ve(t);if(s===null)return a;t=s;let n='<a href="'+t+'"';return e&&(n+=' title="'+M(e)+'"'),n+=">"+a+"</a>",n}image({href:t,title:e,text:r,tokens:a}){a&&(r=this.parser.parseInline(a,this.parser.textRenderer));let s=Ve(t);if(s===null)return M(r);t=s;let n=`<img src="${t}" alt="${r}"`;return e&&(n+=` title="${M(e)}"`),n+=">",n}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:M(t.text)}},Ne=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},P=class ye{options;renderer;textRenderer;constructor(e){this.options=e||W,this.options.renderer=this.options.renderer||new ue,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ne}static parse(e,r){return new ye(r).parse(e)}static parseInline(e,r){return new ye(r).parseInline(e)}parse(e,r=!0){let a="";for(let s=0;s<e.length;s++){let n=e[s];if(this.options.extensions?.renderers?.[n.type]){let l=n,o=this.options.extensions.renderers[l.type].call({parser:this},l);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){a+=o||"";continue}}let i=n;switch(i.type){case"space":{a+=this.renderer.space(i);continue}case"hr":{a+=this.renderer.hr(i);continue}case"heading":{a+=this.renderer.heading(i);continue}case"code":{a+=this.renderer.code(i);continue}case"table":{a+=this.renderer.table(i);continue}case"blockquote":{a+=this.renderer.blockquote(i);continue}case"list":{a+=this.renderer.list(i);continue}case"html":{a+=this.renderer.html(i);continue}case"def":{a+=this.renderer.def(i);continue}case"paragraph":{a+=this.renderer.paragraph(i);continue}case"text":{let l=i,o=this.renderer.text(l);for(;s+1<e.length&&e[s+1].type==="text";)l=e[++s],o+=`
`+this.renderer.text(l);r?a+=this.renderer.paragraph({type:"paragraph",raw:o,text:o,tokens:[{type:"text",raw:o,text:o,escaped:!0}]}):a+=o;continue}default:{let l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return a}parseInline(e,r=this.renderer){let a="";for(let s=0;s<e.length;s++){let n=e[s];if(this.options.extensions?.renderers?.[n.type]){let l=this.options.extensions.renderers[n.type].call({parser:this},n);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)){a+=l||"";continue}}let i=n;switch(i.type){case"escape":{a+=r.text(i);break}case"html":{a+=r.html(i);break}case"link":{a+=r.link(i);break}case"image":{a+=r.image(i);break}case"strong":{a+=r.strong(i);break}case"em":{a+=r.em(i);break}case"codespan":{a+=r.codespan(i);break}case"br":{a+=r.br(i);break}case"del":{a+=r.del(i);break}case"text":{a+=r.text(i);break}default:{let l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return a}},te=class{options;block;constructor(t){this.options=t||W}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?O.lex:O.lexInline}provideParser(){return this.block?P.parse:P.parseInline}},is=class{defaults=$e();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=P;Renderer=ue;TextRenderer=Ne;Lexer=O;Tokenizer=he;Hooks=te;constructor(...t){this.use(...t)}walkTokens(t,e){let r=[];for(let a of t)switch(r=r.concat(e.call(this,a)),a.type){case"table":{let s=a;for(let n of s.header)r=r.concat(this.walkTokens(n.tokens,e));for(let n of s.rows)for(let i of n)r=r.concat(this.walkTokens(i.tokens,e));break}case"list":{let s=a;r=r.concat(this.walkTokens(s.items,e));break}default:{let s=a;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(n=>{let i=s[n].flat(1/0);r=r.concat(this.walkTokens(i,e))}):s.tokens&&(r=r.concat(this.walkTokens(s.tokens,e)))}}return r}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{let a={...r};if(a.async=this.defaults.async||a.async||!1,r.extensions&&(r.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let n=e.renderers[s.name];n?e.renderers[s.name]=function(...i){let l=s.renderer.apply(this,i);return l===!1&&(l=n.apply(this,i)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let n=e[s.level];n?n.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),a.extensions=e),r.renderer){let s=this.defaults.renderer||new ue(this.defaults);for(let n in r.renderer){if(!(n in s))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;let i=n,l=r.renderer[i],o=s[i];s[i]=(...h)=>{let d=l.apply(s,h);return d===!1&&(d=o.apply(s,h)),d||""}}a.renderer=s}if(r.tokenizer){let s=this.defaults.tokenizer||new he(this.defaults);for(let n in r.tokenizer){if(!(n in s))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;let i=n,l=r.tokenizer[i],o=s[i];s[i]=(...h)=>{let d=l.apply(s,h);return d===!1&&(d=o.apply(s,h)),d}}a.tokenizer=s}if(r.hooks){let s=this.defaults.hooks||new te;for(let n in r.hooks){if(!(n in s))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;let i=n,l=r.hooks[i],o=s[i];te.passThroughHooks.has(n)?s[i]=h=>{if(this.defaults.async&&te.passThroughHooksRespectAsync.has(n))return(async()=>{let m=await l.call(s,h);return o.call(s,m)})();let d=l.call(s,h);return o.call(s,d)}:s[i]=(...h)=>{if(this.defaults.async)return(async()=>{let m=await l.apply(s,h);return m===!1&&(m=await o.apply(s,h)),m})();let d=l.apply(s,h);return d===!1&&(d=o.apply(s,h)),d}}a.hooks=s}if(r.walkTokens){let s=this.defaults.walkTokens,n=r.walkTokens;a.walkTokens=function(i){let l=[];return l.push(n.call(this,i)),s&&(l=l.concat(s.call(this,i))),l}}this.defaults={...this.defaults,...a}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return O.lex(t,e??this.defaults)}parser(t,e){return P.parse(t,e??this.defaults)}parseMarkdown(t){return(e,r)=>{let a={...r},s={...this.defaults,...a},n=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return n(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return n(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return n(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=t),s.async)return(async()=>{let i=s.hooks?await s.hooks.preprocess(e):e,l=await(s.hooks?await s.hooks.provideLexer():t?O.lex:O.lexInline)(i,s),o=s.hooks?await s.hooks.processAllTokens(l):l;s.walkTokens&&await Promise.all(this.walkTokens(o,s.walkTokens));let h=await(s.hooks?await s.hooks.provideParser():t?P.parse:P.parseInline)(o,s);return s.hooks?await s.hooks.postprocess(h):h})().catch(n);try{s.hooks&&(e=s.hooks.preprocess(e));let i=(s.hooks?s.hooks.provideLexer():t?O.lex:O.lexInline)(e,s);s.hooks&&(i=s.hooks.processAllTokens(i)),s.walkTokens&&this.walkTokens(i,s.walkTokens);let l=(s.hooks?s.hooks.provideParser():t?P.parse:P.parseInline)(i,s);return s.hooks&&(l=s.hooks.postprocess(l)),l}catch(i){return n(i)}}}onError(t,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let a="<p>An error occurred:</p><pre>"+M(r.message+"",!0)+"</pre>";return e?Promise.resolve(a):a}if(e)return Promise.reject(r);throw r}}},B=new is;function v(t,e){return B.parse(t,e)}v.options=v.setOptions=function(t){return B.setOptions(t),v.defaults=B.defaults,je(v.defaults),v};v.getDefaults=$e;v.defaults=W;v.use=function(...t){return B.use(...t),v.defaults=B.defaults,je(v.defaults),v};v.walkTokens=function(t,e){return B.walkTokens(t,e)};v.parseInline=B.parseInline;v.Parser=P;v.parser=P.parse;v.Renderer=ue;v.TextRenderer=Ne;v.Lexer=O;v.lexer=O.lex;v.Tokenizer=he;v.Hooks=te;v.parse=v;v.options;v.setOptions;v.use;v.walkTokens;v.parseInline;P.parse;O.lex;const c=it("aisystem");var ns=Object.defineProperty,os=Object.getOwnPropertyDescriptor,H=(t,e,r,a)=>{for(var s=a>1?void 0:a?os(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&ns(e,r,s),s};let U=class extends j{constructor(){super(...arguments),this.isStreaming=!1,this.showHeader=!0,this.attentionInputValue=""}formatTimestamp(){return new Date().toLocaleTimeString()}copyToClipboard(t){navigator.clipboard.writeText(t).catch(e=>{console.error("Failed to copy:",e)})}processMarkdownContent(t){return t.includes("code-block-wrapper")?t:t.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/gi,(e,r,a)=>`<div class="code-block-wrapper">
                <div class="code-block-header">
                    <wa-copy-button value="${this.escapeHtmlAttribute(a.trim())}" size="small" label="${c("COPY_CODE")}"></wa-copy-button>
                </div>
                <div class="code-block-content">
                    <pre><code${r}>${a}</code></pre>
                </div>
            </div>`)}escapeHtmlAttribute(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}handleResend(t){t&&(t.preventDefault(),t.stopPropagation()),this.message&&this.dispatchEvent(new CustomEvent("resend",{detail:{message:this.message,messageIndex:this.messageIndex},bubbles:!0,composed:!0}))}getAttentionIcon(t){switch(t){case"confirmation":return"check-circle";case"input":return"input";case"approval":return"hand";case"execution":return"play";case"info":return"info-circle";default:return"bell"}}updated(t){super.updated(t),t.has("attentionInputValue")&&this.dispatchEvent(new CustomEvent("attention-input-change",{detail:{value:this.attentionInputValue},bubbles:!0,composed:!0})),(t.has("message")||!this.hasAttribute("data-is-user"))&&this.updateAlignment()}updateAlignment(){if(this.message){const t=this.message.role==="user";this.setAttribute("data-is-user",String(t))}}handleAttentionResponse(t,e,r){this.message&&this.dispatchEvent(new CustomEvent("attention-response",{detail:{messageIndex:this.messageIndex,requestIndex:t,request:e,response:r},bubbles:!0,composed:!0}))}handleAction(t){const e=t();e instanceof Promise&&e.catch(r=>{console.error("Action failed:",r)})}render(){if(!this.message)return p``;const t=this.message,e=t.role==="user",r=t.requiresAttention&&(t.attentionRequests?.length||0)>0;return p`
            <div class="message-wrapper ${e?"user":"assistant"} ${this.isStreaming?"streaming":""} ${r?"requires-attention":""}">
                ${b(this.showHeader&&!e,()=>p`
                    <div class="message-header">
                        <div class="message-meta">
                            <wa-icon 
                                name="robot" 
                                label="${t.role}">
                            </wa-icon>
                            <span class="role-name">${t.role}</span>
                            ${b(r,()=>p`
                                <wa-icon name="bell" label="${c("REQUIRES_ATTENTION")}"></wa-icon>
                            `)}
                            <span class="timestamp">${this.formatTimestamp()}</span>
                        </div>
                        <div class="message-actions">
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                title="${c("COPY")}"
                                @click="${()=>this.copyToClipboard(t.content)}">
                                <wa-icon slot="label" name="copy" label="${c("COPY")}"></wa-icon>
                            </wa-button>
                            ${b(t.actions?.length,()=>p`
                                ${t.actions.map(a=>p`
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
                        ${nt(this.processMarkdownContent(v.parse(t.content||"")))}
                        ${b(this.isStreaming,()=>p`
                            <span class="streaming-cursor">▋</span>
                        `)}
                        ${b(r&&t.attentionRequests,()=>p`
                        <div class="attention-requests">
                            ${t.attentionRequests.map((a,s)=>p`
                                <div class="attention-request attention-${a.type}">
                                    <div class="attention-header">
                                        <wa-icon name="${this.getAttentionIcon(a.type)}" label="${a.type}"></wa-icon>
                                        <strong>${a.title}</strong>
                                        ${b(a.priority==="urgent"||a.priority==="high",()=>p`
                                            <span class="priority-badge priority-${a.priority}">${a.priority}</span>
                                        `)}
                                    </div>
                                    <div class="attention-message">${a.message}</div>
                                    <div class="attention-actions">
                                        ${b(a.type==="confirmation",()=>p`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                @click="${()=>this.handleAttentionResponse(s,a,!0)}">
                                ${c("CONFIRM")}
                            </wa-button>
                            <wa-button
                                variant="neutral"
                                appearance="plain"
                                size="small"
                                @click="${()=>this.handleAttentionResponse(s,a,!1)}">
                                ${c("CANCEL")}
                            </wa-button>
                                        `)}
                                        ${b(a.type==="input",()=>p`
                                            <div class="input-group">
                                                <wa-input
                                                    value="${this.attentionInputValue}"
                                                    @input="${n=>{this.attentionInputValue=n.target.value}}"
                                                    placeholder="${c("ENTER_RESPONSE")}">
                                                </wa-input>
                                                <wa-button
                                                    variant="brand"
                                                    appearance="filled"
                                                    size="small"
                                                    ?disabled="${!this.attentionInputValue.trim()}"
                                                    @click="${()=>this.handleAttentionResponse(s,a,this.attentionInputValue)}">
                                                    ${c("SUBMIT")}
                                                </wa-button>
                                            </div>
                                        `)}
                                        ${b(a.type==="approval",()=>p`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(s,a,!0)}">
                                                ${c("APPROVE")}
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(s,a,!1)}">
                                                ${c("REJECT")}
                                            </wa-button>
                                        `)}
                                        ${b(a.type==="execution",()=>p`
                                            <wa-button
                                                variant="brand"
                                                appearance="filled"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(s,a,!0)}">
                                                ${c("EXECUTE")}
                                            </wa-button>
                                            <wa-button
                                                variant="neutral"
                                                appearance="plain"
                                                size="small"
                                                @click="${()=>this.handleAttentionResponse(s,a,!1)}">
                                                ${c("CANCEL")}
                                            </wa-button>
                                        `)}
                                    </div>
                                </div>
                            `)}
                        </div>
                        `)}
                        ${b(t.canContinue&&!r,()=>p`
                            <div class="continue-workflow">
                                <wa-button
                                    variant="brand"
                                    appearance="filled"
                                    size="small"
                                    @click="${()=>this.dispatchEvent(new CustomEvent("continue-workflow",{detail:{message:t},bubbles:!0,composed:!0}))}">
                                    ${c("CONTINUE_WORKFLOW")}
                                </wa-button>
                            </div>
                        `)}
                    </div>
                    ${b(e,()=>p`
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${c("COPY")}"
                            @click="${()=>this.copyToClipboard(t.content)}">
                            <wa-icon name="copy" label="${c("COPY")}"></wa-icon>
                        </wa-button>
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${c("RESEND")}"
                            @click="${a=>this.handleResend(a)}">
                            <wa-icon name="rotate-right" label="${c("RESEND")}"></wa-icon>
                        </wa-button>
                    `)}
                </div>
            </div>
        `}};U.styles=D`
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
    `;H([S({type:Object,attribute:!1})],U.prototype,"message",2);H([S({type:Boolean})],U.prototype,"isStreaming",2);H([S({type:Boolean})],U.prototype,"showHeader",2);H([S({type:Number,attribute:!1})],U.prototype,"messageIndex",2);H([E()],U.prototype,"attentionInputValue",2);U=H([L("ai-chat-message")],U);var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,Y=(t,e,r,a)=>{for(var s=a>1?void 0:a?cs(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&ls(e,r,s),s};let G=class extends j{constructor(){super(...arguments),this.value="",this.disabled=!1,this.busy=!1,this.hasProvider=!0}onInput(t){const e=t.target;this.value=e.value,this.dispatchEvent(new CustomEvent("input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.send())}async send(){if(!this.value.trim()||this.disabled||!this.hasProvider)return;const t=this.value;this.value="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),this.dispatchEvent(new CustomEvent("send",{detail:{value:t},bubbles:!0,composed:!0}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}openSettings(){this.dispatchEvent(new CustomEvent("open-settings",{bubbles:!0,composed:!0}))}render(){return p`
            <div class="input-container">
                <div class="input-row">
                    <wa-textarea
                        placeholder="${c("TYPE_MESSAGE_ENTER")}"
                        size="small"
                        resize="auto"
                        rows="1"
                        .value="${this.value}"
                        ?disabled="${this.disabled||!this.hasProvider}"
                        @input="${this.onInput}"
                        @keydown="${this.onKeyDown}">
                    </wa-textarea>
                    
                    ${b(this.busy,()=>p`
                        <wa-button
                            appearance="plain"
                            size="small"
                            @click="${this.cancel}">
                            <wa-icon name="stop" label="${c("STOP")}"></wa-icon>
                        </wa-button>
                    `)}

                    <wa-button
                        appearance="plain"
                        size="small"
                        @click="${this.openSettings}">
                        <wa-icon name="gear" label="${c("SETTINGS")}"></wa-icon>
                    </wa-button>
                </div>
            </div>
        `}};G.styles=D`
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
    `;Y([S({type:String})],G.prototype,"value",2);Y([S({type:Boolean})],G.prototype,"disabled",2);Y([S({type:Boolean})],G.prototype,"busy",2);Y([S({type:Boolean})],G.prototype,"hasProvider",2);Y([ot("wa-textarea")],G.prototype,"textareaElement",2);G=Y([L("ai-chat-input")],G);var ps=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,De=(t,e,r,a)=>{for(var s=a>1?void 0:a?ds(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&ps(e,r,s),s};let re=class extends j{constructor(){super(...arguments),this.message=c("NO_PROVIDER_CONFIGURED"),this.hint=c("CLICK_SETTINGS_TO_CONFIGURE")}render(){return p`
            <div class="empty-state">
                <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                <p>${this.message}</p>
                <p class="hint">${this.hint}</p>
            </div>
        `}};re.styles=D`
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
    `;De([S({type:String})],re.prototype,"message",2);De([S({type:String})],re.prototype,"hint",2);re=De([L("ai-empty-state")],re);var hs=Object.getOwnPropertyDescriptor,us=(t,e,r,a)=>{for(var s=a>1?void 0:a?hs(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=i(s)||s);return s};let xe=class extends j{render(){return p`
            <div class="message-wrapper assistant loading">
                <div class="message-header">
                    <div class="message-meta">
                        <wa-animation name="flip" duration="2000" play>
                            <wa-icon name="robot" label="${c("AI_ASSISTANT")}"></wa-icon>
                        </wa-animation>
                        <span class="role-name">${c("AI_ASSISTANT")}</span>
                    </div>
                </div>
                <div class="message-content loading-dots">
                    <span>Thinking</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                </div>
            </div>
        `}};xe.styles=D`
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
    `;xe=us([L("ai-loading-indicator")],xe);var gs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,oe=(t,e,r,a)=>{for(var s=a>1?void 0:a?ms(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&gs(e,r,s),s};let F=class extends j{constructor(){super(...arguments),this.isStreaming=!1,this.groupId=""}renderStatusIcon(t){switch(t){case"streaming":return p`<wa-icon name="spinner" class="spinning"></wa-icon>`;case"completed":return p`<wa-icon name="check-circle" class="status-success"></wa-icon>`;case"error":return p`<wa-icon name="exclamation-circle" class="status-error"></wa-icon>`}}copyToClipboard(t){navigator.clipboard.writeText(t).catch(e=>{console.error("Failed to copy:",e)})}render(){if(!this.agentInfo)return p``;const t=this.message?.requiresAttention&&(this.message.attentionRequests?.length||0)>0;return this.message?p`
            <div class="agent-response-card status-${this.agentInfo.status} ${t?"requires-attention":""}">
                <div class="agent-card-header">
                    <div class="agent-card-title">
                        <wa-icon name="${this.agentInfo.icon}" label="${this.agentInfo.label}"></wa-icon>
                        <span>${this.agentInfo.label}</span>
                        ${this.renderStatusIcon(this.agentInfo.status)}
                        ${b(t,()=>p`
                            <wa-icon name="bell" class="attention-indicator"></wa-icon>
                        `)}
                    </div>
                    <div class="agent-card-actions">
                        <wa-button
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${c("COPY")}"
                            @click="${()=>this.copyToClipboard(this.message?.content||"")}">
                            <wa-icon name="copy" label="${c("COPY")}"></wa-icon>
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
        `:p`
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
            `}};F.styles=D`
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
    `;oe([S({type:Object,attribute:!1})],F.prototype,"agentInfo",2);oe([S({type:Object,attribute:!1})],F.prototype,"message",2);oe([S({type:Boolean})],F.prototype,"isStreaming",2);oe([S({type:String})],F.prototype,"groupId",2);F=oe([L("ai-agent-response-card")],F);var fs=Object.defineProperty,ws=Object.getOwnPropertyDescriptor,Le=(t,e,r,a)=>{for(var s=a>1?void 0:a?ws(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&fs(e,r,s),s};let ie=class extends j{handleAction(t){const e=t();e instanceof Promise&&e.catch(r=>{console.error("Action failed:",r)})}render(){if(!this.group)return p``;const t=Array.from(this.group.agents.values()),e=t.filter(l=>l.status==="completed").length,r=t.filter(l=>l.status==="streaming").length,a=t.filter(l=>l.status==="error").length,s=t.length>0&&e+a===t.length,n=t.length===1,i=t.filter(l=>l.message&&l.message.actions&&l.message.actions.length>0).flatMap(l=>l.message.actions.map(o=>({...o,agentRole:l.role,agentLabel:l.label}))).sort((l,o)=>{const h=l.requiresAttention?1:0;return(o.requiresAttention?1:0)-h});return p`
            <div class="agent-response-group">
                ${b(!n,()=>p`
                    <div class="agent-group-header">
                        <div class="agent-group-title">
                            <wa-icon name="robot" label="${c("MULTIPLE_AGENTS")}"></wa-icon>
                            <span>${c("MULTIPLE_AGENTS")}</span>
                            ${b(!s,()=>p`
                                <span class="agent-status-badge">
                                    ${b(r>0,()=>p`
                                        <span class="status-streaming">${r} responding</span>
                                    `)}
                                    ${b(e>0,()=>p`
                                        <span class="status-completed">${e}/${t.length} completed</span>
                                    `)}
                                </span>
                            `)}
                            ${b(s,()=>p`
                                <span class="agent-status-badge status-all-completed">
                                    All completed (${e})
                                </span>
                            `)}
                        </div>
                    </div>
                `)}
                <div class="agent-group-content">
                    ${pe(t,l=>l.role,l=>{const o=l.message||(l.status==="streaming"&&this.findStreamingMessage?this.findStreamingMessage(l.role):void 0);return p`
                            <ai-agent-response-card
                                .agentInfo="${l}"
                                .message="${o}"
                                .isStreaming="${l.status==="streaming"}"
                                .groupId="${this.group.id}">
                            </ai-agent-response-card>
                        `})}
                </div>
                ${b(i.length>0&&s,()=>p`
                    <div class="quick-actions-bar">
                        <div class="quick-actions-label">
                            <wa-icon name="bolt" label="${c("QUICK_ACTIONS")}"></wa-icon>
                            <span>${c("QUICK_ACTIONS")}</span>
                        </div>
                        <div class="quick-actions-buttons">
                            ${pe(i,(l,o)=>o.toString(),l=>p`
                                <wa-button
                                    variant="${l.requiresAttention?"brand":"neutral"}"
                                    appearance="${l.requiresAttention?"filled":"plain"}"
                                    size="small"
                                    title="${l.label}"
                                    @click="${()=>this.handleAction(l.action)}">
                                    <wa-icon name="${l.icon}" label="${l.label}"></wa-icon>
                                </wa-button>
                            `)}
                        </div>
                    </div>
                `)}
            </div>
        `}};ie.styles=D`
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
    `;Le([S({type:Object,attribute:!1})],ie.prototype,"group",2);Le([S({type:Function,attribute:!1})],ie.prototype,"findStreamingMessage",2);ie=Le([L("ai-agent-response-group")],ie);class bs{constructor(){this.sessions=new Map,this.sessionTitles=new Map,this.sessionTimestamps=new Map,this.activeSessionId="",this.archivedSessions=new Map}setSaveCallback(e){this.saveCallback=e}async save(){this.saveCallback&&await this.saveCallback()}async loadSessions(){const{appSettings:e}=await ae(async()=>{const{appSettings:a}=await import("./in-browser-ml-service-D7AoKjy9.js").then(s=>s.b);return{appSettings:a}},__vite__mapDeps([0,1,2])),r=await e.get("aiChatSessions");if(r&&Array.isArray(r.active)){for(const a of r.active)a.id&&a.history&&Array.isArray(a.history)&&(this.sessions.set(a.id,{history:a.history}),this.sessionTitles.set(a.id,a.title||"New Chat"),this.sessionTimestamps.set(a.id,{createdAt:a.createdAt||Date.now(),updatedAt:a.updatedAt||Date.now()}));r.active.length>0&&r.activeSessionId&&(this.sessions.has(r.activeSessionId)?this.activeSessionId=r.activeSessionId:this.activeSessionId=r.active[0].id)}if(r&&Array.isArray(r.archived))for(const a of r.archived)a.id&&a.history&&Array.isArray(a.history)&&this.archivedSessions.set(a.id,{id:a.id,history:a.history,title:a.title||"New Chat",createdAt:a.createdAt||Date.now(),updatedAt:a.updatedAt||Date.now()})}async persistSessions(){const e=Array.from(this.sessions.entries()).map(([s,n])=>{const i=this.sessionTimestamps.get(s)||{createdAt:Date.now(),updatedAt:Date.now()};return{id:s,history:n.history,title:this.sessionTitles.get(s)||"New Chat",createdAt:i.createdAt,updatedAt:i.updatedAt}}),r=Array.from(this.archivedSessions.values()),{appSettings:a}=await ae(async()=>{const{appSettings:s}=await import("./in-browser-ml-service-D7AoKjy9.js").then(n=>n.b);return{appSettings:s}},__vite__mapDeps([0,1,2]));await a.set("aiChatSessions",{active:e,archived:r,activeSessionId:this.activeSessionId})}createSession(){const e=`session-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.sessions.set(e,{history:[]}),this.sessionTitles.set(e,"New Chat"),this.sessionTimestamps.set(e,{createdAt:Date.now(),updatedAt:Date.now()}),this.activeSessionId=e,this.save(),e}async deleteSession(e){if(this.sessions.size<=1)return!1;const r=this.sessions.get(e),a=this.sessionTitles.get(e),s=this.sessionTimestamps.get(e);if(r&&a&&this.archivedSessions.set(e,{id:e,history:r.history,title:a,createdAt:s?.createdAt||Date.now(),updatedAt:Date.now()}),this.sessions.delete(e),this.sessionTitles.delete(e),this.sessionTimestamps.delete(e),this.activeSessionId===e){const n=Array.from(this.sessions.keys())[0];this.activeSessionId=n||""}return await this.save(),!0}async restoreSession(e){const r=this.archivedSessions.get(e);return r?(this.sessions.set(e,{history:r.history}),this.sessionTitles.set(e,r.title),this.sessionTimestamps.set(e,{createdAt:r.createdAt,updatedAt:Date.now()}),this.archivedSessions.delete(e),this.activeSessionId=e,await this.save(),!0):!1}async permanentlyDeleteSession(e){return this.sessions.has(e)?!1:(this.archivedSessions.delete(e),await this.save(),!0)}getSession(e){return this.sessions.get(e)}setSession(e,r){this.sessions.set(e,r)}getActiveSession(){if(this.activeSessionId)return this.sessions.get(this.activeSessionId)}setActiveSession(e){this.sessions.has(e)&&(this.activeSessionId=e)}getActiveSessionId(){return this.activeSessionId}getAllSessionIds(){return Array.from(this.sessions.keys())}getAllSessions(){return Array.from(this.sessions.entries()).map(([e,r])=>({id:e,history:r.history,title:this.sessionTitles.get(e)||"New Chat"}))}getSessionTitle(e){return this.sessionTitles.get(e)||this.archivedSessions.get(e)?.title||"New Chat"}setSessionTitle(e,r){if(this.sessions.has(e)){this.sessionTitles.set(e,r);const a=this.sessionTimestamps.get(e);a&&(a.updatedAt=Date.now()),this.save()}}generateTitle(e){const r=e.trim();if(!r)return"New Chat";const a=30;return r.length<=a?r:r.substring(0,a).trim()+"..."}addMessage(e,r){const a=this.sessions.get(e);if(a){a.history.push(r);const s=this.sessionTimestamps.get(e);s&&(s.updatedAt=Date.now()),this.save()}}getSessionCount(){return this.sessions.size}getArchivedSessions(){return Array.from(this.archivedSessions.values()).sort((e,r)=>r.updatedAt-e.updatedAt)}getArchivedSessionCount(){return this.archivedSessions.size}}class vs{constructor(e){this.streamingMessages=new Map,this.currentStreamingIndex=-1,this.pendingUpdate=!1,this.onUpdate=e}createStreamingMessage(e,r){const a=++this.currentStreamingIndex;return this.streamingMessages.set(a,{message:{role:e,content:""},isStreaming:!0,timestamp:new Date,sessionId:r}),a}getStreamingMessage(e){return this.streamingMessages.get(e)}updateStreamingMessage(e,r){const a=this.streamingMessages.get(e);a&&(a.message.content+=r,this.scheduleUpdate())}completeStreamingMessage(e,r){const a=this.streamingMessages.get(e);a&&(a.message=r,a.isStreaming=!1)}removeStreamingMessage(e){this.streamingMessages.delete(e)}getAllStreamingMessages(){return Array.from(this.streamingMessages.values())}getAllStreamingMessagesByRole(e){return Array.from(this.streamingMessages.values()).filter(r=>r.message.role===e)}findStreamingMessage(e){return Array.from(this.streamingMessages.values()).find(a=>a.message.role===e)?.message}scheduleUpdate(){this.pendingUpdate||(this.pendingUpdate=!0,this.updateAnimationFrame=requestAnimationFrame(()=>{this.pendingUpdate=!1,this.onUpdate?.()}))}cancelUpdates(){this.updateAnimationFrame&&(cancelAnimationFrame(this.updateAnimationFrame),this.updateAnimationFrame=void 0,this.pendingUpdate=!1)}clearAll(){for(const[e,r]of this.streamingMessages.entries())r.isStreaming&&(r.isStreaming=!1);this.streamingMessages.clear(),this.cancelUpdates()}clearForSession(e){const r=[];for(const[a,s]of this.streamingMessages.entries())s.sessionId===e&&(s.isStreaming&&(s.isStreaming=!1),r.push(a));r.forEach(a=>this.streamingMessages.delete(a)),r.length>0&&this.scheduleUpdate()}reset(){this.clearAll(),this.currentStreamingIndex=-1}}class ks{constructor(e){this.aiService=e,this.settingsKey="aiViewChat",this.availableModels=[],this.loadingModels=!1}async initialize(){await this.loadProviders(),await this.loadSettings()}async loadProviders(){this.providers=await this.aiService.getProviders()||[]}async loadSettings(){if(this.providers&&this.providers.length>0){const e=await this.aiService.getDefaultProvider();this.selectedProvider=e,this.settingsProviderName=e.name,this.settingsModel=e.model}}getRequireToolApproval(){return!1}async saveSettings(e,r,a,s,n){const l={...await N.get(this.settingsKey)||{}};s!==void 0&&(l.requireToolApproval=s),n!==void 0&&(l.toolApprovalAllowlist=n),await N.set(this.settingsKey,l);const o=this.providers?.find(h=>h.name===e);if(o){const h={...o,model:r,...a!==void 0&&{apiKey:a}};this.selectedProvider=h,this.settingsProviderName=e,this.settingsModel=r,await this.updateProviderInAIConfig(e,{model:r,...a!==void 0&&{apiKey:a}}),await this.aiService.setDefaultProvider(e)}}async updateProviderInAIConfig(e,r){const{KEY_AI_CONFIG:a}=await ae(async()=>{const{KEY_AI_CONFIG:n}=await import("./ai-service-CdoVf8yq.js").then(i=>i.e);return{KEY_AI_CONFIG:n}},__vite__mapDeps([3,1,2,0])),s=await N.get(a)||{};if(s.providers&&Array.isArray(s.providers)){const n=s.providers.findIndex(i=>i.name===e);n>=0&&(s.providers[n]={...s.providers[n],...r},await N.set(a,s))}}async loadToolApprovalAllowlist(){return(await N.get(this.settingsKey)||{}).toolApprovalAllowlist||[]}async fetchModels(e){const r=this.providers?.find(a=>a.name===e);if(r){this.loadingModels=!0;try{const s=`${r.chatApiEndpoint.replace("/v1/chat/completions","")}/v1/models`,n=await fetch(s,{method:"GET",headers:{Authorization:`Bearer ${r.apiKey}`,"Content-Type":"application/json"}});if(!n.ok)throw new Error(`Failed to fetch models: ${n.statusText}`);const l=(await n.json()).data||[];this.availableModels=l.map(o=>({id:o.id,name:o.name||o.id})),!this.settingsModel&&this.availableModels.length>0&&(this.settingsModel=this.availableModels[0].id)}catch(a){throw this.availableModels=[],a}finally{this.loadingModels=!1}}}getProviders(){return this.providers||[]}getSelectedProvider(){return this.selectedProvider}setSelectedProvider(e){this.selectedProvider=e}async getSettingsProviderName(){if(!this.settingsProviderName){const e=await this.aiService.getDefaultProvider();this.settingsProviderName=e.name}return this.settingsProviderName}setSettingsProviderName(e){this.settingsProviderName=e}async getSettingsModel(){if(!this.settingsModel){const e=await this.aiService.getDefaultProvider();this.settingsModel=e.model}return this.settingsModel}setSettingsModel(e){this.settingsModel=e}getAvailableModels(){return this.availableModels}isLoadingModels(){return this.loadingModels}resetModelSelection(){this.availableModels=[],this.settingsModel=void 0}}class As{constructor(){this.groups=new Map,this.pausedWorkflows=new Map}createGroup(e,r,a,s,n){const i=`group-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.currentGroupId=i;const l={id:i,sessionId:e,userMessageIndex:r,userMessage:a,timestamp:new Date,agents:new Map,messageIndices:new Map};return s.forEach(o=>{const{label:h,icon:d}=n(o);l.agents.set(o,{role:o,label:h,icon:d,status:"streaming"})}),this.groups.set(i,l),i}getGroup(e){return this.groups.get(e)}updateAgentStatus(e,r,a,s,n){const i=this.groups.get(e);if(!i)return;const l=i.agents.get(r);l&&(l.status=a,s&&(l.message=s),n!==void 0&&(l.messageIndex=n,i.messageIndices.set(r,n)))}getGroupsForSession(e){return Array.from(this.groups.values()).filter(r=>r.sessionId===e)}findGroupForUserMessage(e,r,a){return Array.from(this.groups.values()).find(s=>s.sessionId===e&&s.userMessageIndex===r&&s.userMessage===a)}findGroupForMessage(e,r,a){return Array.from(this.groups.values()).find(s=>s.sessionId===e&&s.messageIndices.get(r)===a)}getCurrentGroupId(){return this.currentGroupId}setCurrentGroupId(e){this.currentGroupId=e}clearCurrentGroup(){this.currentGroupId=void 0}storePausedWorkflow(e,r,a){this.pausedWorkflows.set(e,{token:e,options:r,results:a})}getPausedWorkflow(e){return this.pausedWorkflows.get(e)}getAllPausedWorkflows(){return Array.from(this.pausedWorkflows.values())}clearPausedWorkflow(e){this.pausedWorkflows.delete(e)}clearAllPausedWorkflows(){this.pausedWorkflows.clear()}getAllGroups(){return Array.from(this.groups.values())}clearAll(){this.groups.clear(),this.currentGroupId=void 0}}var ys=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,le=(t,e,r,a)=>{for(var s=a>1?void 0:a?xs(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&ys(e,r,s),s};let K=class extends Ke{constructor(){super(...arguments),this.sessionManager=new bs,this.streamManager=new vs(()=>{this.requestUpdate(),this.scrollDebounceTimer&&clearTimeout(this.scrollDebounceTimer),this.scrollDebounceTimer=setTimeout(async()=>{await this.updateComplete,this.scrollToBottom(),this.scrollDebounceTimer=void 0},100)}),this.providerManager=new ks(ee),this.agentGroupManager=new As,this.busy=!1,this.inputValue="",this.requireToolApproval=!0,this.toolApprovalAllowlist=new Set,this.pendingToolApprovals=new Map}onAIConfigChanged(){this.providerManager.initialize().then(()=>{this.loadSettings().then(()=>{this.requestUpdate()})})}async doBeforeUI(){this.subscribe(We,()=>this.onAIConfigChanged()),this.sessionManager.setSaveCallback(()=>this.sessionManager.persistSessions()),await this.sessionManager.loadSessions(),this.sessionManager.getSessionCount()===0&&this.sessionManager.createSession(),await this.providerManager.initialize(),await this.loadSettings(),this.requestUpdate()}async loadSettings(){const t=await N.get("aiViewChat")||{};this.requireToolApproval=t.requireToolApproval!==void 0?t.requireToolApproval:!0;const e=await this.providerManager.loadToolApprovalAllowlist();this.toolApprovalAllowlist=new Set(e)}createNewSession(){this.sessionManager.createSession(),this.inputValue="",this.requestUpdate()}async deleteSession(t){if(!await this.sessionManager.deleteSession(t)){Z("Cannot delete the last session");return}this.inputValue="",this.requestUpdate()}async scrollToBottom(){await this.updateComplete;const t=this.sessionManager.getActiveSessionId();if(!t)return;const r=this.shadowRoot?.querySelector(`wa-tab-panel[name="${t}"]`)?.querySelector("wa-scroller.chat-messages");if(r){const a=r.shadowRoot?.querySelector(".scroll-container");a?a.scrollTop=a.scrollHeight:r.scrollTo?r.scrollTo({top:r.scrollHeight,behavior:"smooth"}):r.scrollTop!==void 0&&(r.scrollTop=r.scrollHeight)}}updated(t){super.updated(t)}async sendMessage(){const t=this.inputValue.trim();if(!t||this.busy)return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const r=this.shadowRoot?.querySelector("wa-tab-group");r?.active&&(e=r.active,this.sessionManager.setActiveSession(e))}e&&(this.inputValue="",this.requestUpdate(),await this.handlePrompt(t))}async runCommand(t,e){const r=e||V,a=t.trim().split(/\s+/);if(a.length===0)return;const s=a.shift(),n=r.getCommand(s);if(!n){Z("Command not found: "+s);return}const i={};n.parameters&&a.forEach((o,h)=>{n.parameters&&n.parameters[h]&&(i[n.parameters[h].name]=o)});const l=r.createExecutionContext(i);await r.execute(s,l),this.requestUpdate()}async handlePrompt(t){if(t.startsWith("/")){await this.runCommand(t.substring(1),V);return}const e=this.providerManager.getSelectedProvider();if(!e){Z("Please configure AI provider in settings");return}let r=this.sessionManager.getActiveSessionId();if(!r)this.createNewSession(),r=this.sessionManager.getActiveSessionId();else{const o=this.shadowRoot?.querySelector("wa-tab-group");o?.active&&(r=o.active,this.sessionManager.setActiveSession(r))}if(!r)return;const a=ee.createMessage(t),s=r,n=this.sessionManager.getSession(s);if(!n)return;if(n.history.push(a),n.history.length===1){const o=this.sessionManager.generateTitle(t);this.sessionManager.setSessionTitle(s,o)}await this.sessionManager.persistSessions(),this.requestUpdate(),await this.updateComplete,this.scrollToBottom(),this.busy=!0,this.abortController=new AbortController;const i=new Map,l={history:[...n.history]};lt.runAsync("Calling AI assistant",async()=>{const o=V.createExecutionContext(),h=ct.createChild({...o}),d=ee.getAgentContributions();if(d.length===0)throw new Error("No agents are registered. The App Support agent should be available from the AI system extension.");const m=d.filter(u=>u.canHandle?u.canHandle({...h.getProxy(),userPrompt:t}):!0).sort((u,A)=>(A.priority||0)-(u.priority||0));if(m.length===0)throw new Error(`No agents can handle the current context. Available agents: ${d.map(u=>u.role).join(", ")}`);const g=m.map(u=>u.role),k=this.sessionManager.getSession(s);if(!k)return;const f=this.agentGroupManager.createGroup(s,k.history.length-1,a,g,u=>{const A=d.find(y=>y.role===u);return{label:A?.label||u,icon:A?.icon||"robot"}});return ee.executeAgentWorkflow({chatContext:l,chatConfig:e,callContext:h,execution:"parallel",stream:!0,signal:this.abortController.signal,roles:g,requireToolApproval:this.requireToolApproval,onToolApprovalRequest:async(u,A)=>{const{ToolExecutor:y}=await ae(async()=>{const{ToolExecutor:q}=await import("./ai-service-CdoVf8yq.js").then(R=>R.f);return{ToolExecutor:q}},__vite__mapDeps([3,1,2,0])),I=new y,z=V.createExecutionContext();return A.toolCalls.every(q=>{const R=I.findCommand(q,z);return R&&this.toolApprovalAllowlist.has(R.id)})?!0:new Promise(q=>{const R=`approval-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;this.pendingToolApprovals.set(R,{role:u,request:A,resolve:q,allowListSelections:new Map}),this.requestUpdate()})},onAgentStart:async u=>{const A=this.streamManager.createStreamingMessage(u,s);i.set(u,A),this.agentGroupManager.updateAgentStatus(f,u,"streaming"),this.requestUpdate(),await this.updateComplete,this.scrollToBottom()},onToken:(u,A)=>{const y=i.get(u);y!==void 0&&this.streamManager.updateStreamingMessage(y,A),this.requestUpdate()},onAgentComplete:async(u,A)=>{const y=this.sessionManager.getSession(s);if(!y)return;const I=i.get(u);if(I!==void 0){this.streamManager.completeStreamingMessage(I,A);const z=y.history.length;y.history.push(A),i.delete(u),this.streamManager.removeStreamingMessage(I),this.agentGroupManager.updateAgentStatus(f,u,"completed",A,z),await this.sessionManager.persistSessions(),this.requestUpdate(),await this.updateComplete,this.scrollToBottom()}},onAgentError:(u,A)=>{if(!this.sessionManager.getSession(s))return;const I=i.get(u);I!==void 0&&(this.streamManager.removeStreamingMessage(I),i.delete(u)),this.agentGroupManager.updateAgentStatus(f,u,"error",{role:u,content:`Error: ${A.message}`}),this.requestUpdate(),Z(`Agent ${u} error: ${A.message}`)}}).then(()=>{this.agentGroupManager.clearCurrentGroup()})}).catch(o=>{o?.name!=="AbortError"&&Z(`${o}`)}).finally(async()=>{this.busy=!1,this.abortController=void 0,this.streamManager.clearForSession(s),this.agentGroupManager.clearCurrentGroup(),await this.sessionManager.persistSessions(),this.requestUpdate()})}cancelStream(){this.abortController&&(this.abortController.abort(),this.abortController=void 0,this.busy=!1),this.streamManager.cancelUpdates()}async openSettingsDialog(){V.execute("open_ai_config",{})}renderMessage(t,e,r,a){return p`
            <ai-chat-message
                .message="${e}"
                .isStreaming="${a||!1}"
                .showHeader="${!0}"
                .messageIndex="${r}"
                @resend="${s=>{this.handleResend(s.detail.message)}}">
            </ai-chat-message>
        `}async handleResend(t){if(!t||t.role!=="user")return;let e=this.sessionManager.getActiveSessionId();if(!e)this.createNewSession(),e=this.sessionManager.getActiveSessionId();else{const r=this.shadowRoot?.querySelector("wa-tab-group");r?.active&&(e=r.active,this.sessionManager.setActiveSession(e))}e&&await this.handlePrompt(t.content)}render(){const t=this.sessionManager.getAllSessionIds(),e=this.sessionManager.getActiveSessionId(),r=this.providerManager.getSelectedProvider();return p`
            <div class="chat-container">
                ${b(t.length>0,()=>p`
                    <wa-tab-group 
                        active="${e||t[0]||""}" 
                        @wa-tab-show="${a=>{const s=a.detail.panel;this.sessionManager.getSession(s)&&(this.sessionManager.setActiveSession(s),this.inputValue="",this.requestUpdate())}}">
                        ${pe(t,a=>a,(a,s)=>{const n=this.sessionManager.getSession(a);return n?p`
                                <wa-tab panel="${a}">
                                    <span>${this.sessionManager.getSessionTitle(a)||`${c("CHAT")} ${s+1}`}</span>
                                    ${b(t.length>1,()=>p`
                                        <wa-icon 
                                            name="xmark" 
                                            label="${c("CLOSE")}"
                                            @click="${i=>{i.stopPropagation(),this.deleteSession(a)}}">
                                        </wa-icon>
                                    `)}
                                </wa-tab>
                                <wa-tab-panel name="${a}">
                                    <wa-scroller class="chat-messages" orientation="vertical">
                                        <div class="chat-content">
                                            ${n.history.map((i,l)=>{const o=this.agentGroupManager.findGroupForUserMessage(a,l,i);return o&&i.role==="user"?p`
                                                        <ai-chat-message
                                                            .message="${i}"
                                                            .isStreaming="${!1}"
                                                            .showHeader="${!0}"
                                                            .messageIndex="${l}"
                                                            @resend="${d=>{this.handleResend(d.detail.message)}}">
                                                        </ai-chat-message>
                                                        <ai-agent-response-group
                                                            .group="${o}"
                                                            .findStreamingMessage="${d=>this.streamManager.findStreamingMessage(d)}">
                                                        </ai-agent-response-group>
                                                    `:this.agentGroupManager.findGroupForMessage(a,i.role,l)?p``:this.renderMessage(n,i,l)})}
                                            ${this.streamManager.getAllStreamingMessages().filter(i=>i.sessionId===a&&!Array.from(this.agentGroupManager.getAllGroups()).some(l=>l.sessionId===a&&l.agents.has(i.message.role))).map(i=>{const l=this.sessionManager.getSession(a);return this.renderMessage(l,i.message,-1,i.isStreaming)})}
                                            ${b(e===a&&this.busy&&this.streamManager.getAllStreamingMessages().filter(i=>i.sessionId===a).length===0,()=>p`
                                                <ai-loading-indicator></ai-loading-indicator>
                                            `)}
                                        </div>
                                    </wa-scroller>
                                </wa-tab-panel>
                            `:p``})}
                        ${b(this.sessionManager.getArchivedSessionCount()>0,()=>p`
                            <wa-dropdown 
                                slot="nav"
                                placement="bottom-end">
                                <wa-button 
                                    slot="trigger"
                                    variant="neutral"
                                    appearance="plain"
                                    size="small"
                                    title="${c("ARCHIVED_SESSIONS")}"
                                    with-caret>
                                    <wa-icon name="clock-rotate-left" label="${c("ARCHIVED_SESSIONS")}"></wa-icon>
                                    <span style="margin-left: 0.25rem;">${this.sessionManager.getArchivedSessionCount()}</span>
                                </wa-button>
                                <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                                    ${c("ARCHIVED_SESSIONS")}
                                </h6>
                                ${this.sessionManager.getArchivedSessions().map(a=>p`
                                    <wa-dropdown-item 
                                        @click="${async()=>{await this.sessionManager.restoreSession(a.id),this.requestUpdate()}}">
                                        <wa-icon name="history" label="${c("RESTORE")}" slot="icon"></wa-icon>
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
                                    @click="${async()=>{const a=this.sessionManager.getArchivedSessionCount(),s=a>1?"s":"";if(await Te(c("DELETE_ALL_CONFIRM",{count:a.toString(),plural:s}))){for(const n of this.sessionManager.getArchivedSessions())await this.sessionManager.permanentlyDeleteSession(n.id);this.requestUpdate()}}}">
                                    <wa-icon name="trash" label="${c("DELETE_ALL_ARCHIVED")}" slot="icon"></wa-icon>
                                    <span>${c("DELETE_ALL_ARCHIVED")}</span>
                                </wa-dropdown-item>
                            </wa-dropdown>
                        `)}
                        <wa-button 
                            slot="nav"
                            variant="neutral"
                            appearance="plain"
                            size="small"
                            title="${c("NEW_CHAT")}"
                            @click="${()=>{this.createNewSession(),this.requestUpdate()}}">
                            <wa-icon name="plus" label="${c("NEW_CHAT")}"></wa-icon>
                        </wa-button>
                    </wa-tab-group>
                `)}
                
                ${b(!r,()=>p`
                    <ai-empty-state
                        message="${c("NO_PROVIDER_CONFIGURED")}"
                        hint="${c("CLICK_SETTINGS_TO_CONFIGURE")}">
                    </ai-empty-state>
                `)}

                ${b(t.length>0,()=>p`
                    ${this.pendingToolApprovals.size>0?p`
                        <div class="tool-approval-section">
                            ${Array.from(this.pendingToolApprovals.entries()).map(([a,s])=>{const n=s.request.toolCalls,i=n.length;n.map(d=>{const m=d.function.arguments||"{}";let g={};try{g=JSON.parse(m)}catch{g={}}const k=Object.entries(g).map(([f,u])=>`${f}=${JSON.stringify(u)}`).join(", ");return`${d.function.name}${k?`(${k})`:"()"}`}).join(", ");const l=i>1?"s":"",o=i>1?", ...":"",h=c("TOOL_EXECUTION_PENDING",{toolCount:i.toString(),plural:l,toolName:n[0]?.function.name||"",more:o});return p`
                                    <wa-details class="approval-details">
                                        <span slot="summary" class="approval-summary">
                                            <span class="approval-summary-text">${h}</span>
                                            <div class="approval-actions-inline">
                                                <wa-button
                                                    appearance="plain"
                                                    size="small"
                                                    variant="brand"
                                                    @click="${d=>{d.stopPropagation(),s.resolve(!1),this.pendingToolApprovals.delete(a),this.requestUpdate()}}">
                                                    <wa-icon name="xmark" label="${c("CANCEL")}"></wa-icon>
                                                </wa-button>
                                                <wa-button
                                                    appearance="plain"
                                                    size="small"
                                                    variant="success"
                                                    @click="${async d=>{d.stopPropagation();for(const[m,g]of s.allowListSelections.entries())if(g){const k=s.request.toolCalls.find(f=>f.id===m);if(k){const{ToolExecutor:f}=await ae(async()=>{const{ToolExecutor:I}=await import("./ai-service-CdoVf8yq.js").then(z=>z.f);return{ToolExecutor:I}},__vite__mapDeps([3,1,2,0])),u=new f,A=V.createExecutionContext(),y=u.findCommand(k,A);y&&this.toolApprovalAllowlist.add(y.id)}}if(s.allowListSelections.size>0){const m=await this.providerManager.getSettingsProviderName(),g=await this.providerManager.getSettingsModel();await this.providerManager.saveSettings(m||"",g||"",void 0,this.requireToolApproval,Array.from(this.toolApprovalAllowlist))}s.resolve(!0),this.pendingToolApprovals.delete(a),this.requestUpdate()}}">
                                                    <wa-icon name="check" label="${c("APPROVE")}"></wa-icon>
                                                </wa-button>
                                            </div>
                                        </span>
                                        <div class="approval-content">
                                            <div class="approval-message">
                                                <strong>${c("AGENT_WANTS_TO_EXECUTE",{role:s.role})}</strong>
                                                <ul class="tool-list">
                                                    ${n.map(d=>{const m=d.function.arguments||"{}";let g={};try{g=JSON.parse(m)}catch{g={}}const k=Object.entries(g).length>0?`(${Object.entries(g).map(([u,A])=>`${u}=${JSON.stringify(A)}`).join(", ")})`:"()",f=s.allowListSelections.get(d.id)||!1;return p`
                                                            <li class="tool-list-item">
                                                                <label class="tool-item-label">
                                                                    <wa-checkbox
                                                                        ?checked="${f}"
                                                                        @change="${u=>{const A=u.target.checked;s.allowListSelections.set(d.id,A),this.requestUpdate()}}">
                                                                    </wa-checkbox>
                                                                    <span>${c("ALWAYS_ALLOW")}</span>
                                                                </label>
                                                                <code>${d.function.name}${k}</code>
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
                
                ${b(t.length>0,()=>p`
                    <ai-chat-input
                        .value="${this.inputValue}"
                        .disabled="${this.busy}"
                        .busy="${this.busy}"
                        .hasProvider="${!!r}"
                        @input-change="${a=>{this.inputValue=a.detail.value}}"
                        @send="${()=>this.sendMessage()}"
                        @cancel="${()=>this.cancelStream()}"
                        @open-settings="${()=>this.openSettingsDialog()}">
                    </ai-chat-input>
                `)}
            </div>
        `}};K.styles=D`
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
    `;le([E()],K.prototype,"busy",2);le([E()],K.prototype,"inputValue",2);le([E()],K.prototype,"requireToolApproval",2);le([E()],K.prototype,"pendingToolApprovals",2);K=le([L("k-aiview")],K);var Ss=Object.getOwnPropertyDescriptor,Es=(t,e,r,a)=>{for(var s=a>1?void 0:a?Ss(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=i(s)||s);return s};let Se=class extends pt{constructor(){super(...arguments),this.totalUsage={promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},this.providerUsage={},this.updateInterval=null}connectedCallback(){super.connectedCallback(),this.loadUsage(),this.updateInterval=window.setInterval(()=>{this.loadUsage()},5e3),be(bt,()=>{this.loadUsage()})}disconnectedCallback(){super.disconnectedCallback(),this.updateInterval!==null&&(clearInterval(this.updateInterval),this.updateInterval=null)}async loadUsage(){try{this.totalUsage=await we.getTotalUsage(),this.providerUsage=await we.getAllProviderUsage(),this.requestUpdate()}catch(t){console.error("Failed to load token usage",t)}}formatNumber(t){return t>=1e6?(t/1e6).toFixed(2)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}async handleReset(){await Te(c("RESET_CONFIRM"))&&(await we.reset(),await this.loadUsage())}render(){return this.totalUsage.totalTokens>0?p`
            <wa-dropdown
                placement="top-end"
                distance="8">
                <wa-button
                    slot="trigger"
                    appearance="plain"
                    size="small"
                    title="${c("TOKEN_USAGE_STATS")}">
                    <wa-icon name="database" label="${c("TOKEN_USAGE")}" slot="start"></wa-icon>
                    ${this.formatNumber(this.totalUsage.totalTokens)} ${c("TOKENS")}
                </wa-button>
                
                <h3>${c("TOKEN_USAGE_STATS")}</h3>
                
                <h6>${c("TOTAL_USAGE")}</h6>
                <wa-dropdown-item>
                    <span>${c("TOTAL")}</span>
                    <div class="total-stats">
                        <div class="stat-item">
                            <span class="stat-label">${c("PROMPT")}</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.promptTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">${c("COMPLETION")}</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.completionTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">${c("TOTAL")}</span>
                            <span class="stat-value">${this.formatNumber(this.totalUsage.totalTokens)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">${c("REQUESTS")}</span>
                            <span class="stat-value">${this.totalUsage.requestCount}</span>
                        </div>
                    </div>
                </wa-dropdown-item>
                
                ${Object.keys(this.providerUsage).length>0?p`
                    <wa-divider></wa-divider>
                    <h6>${c("BY_PROVIDER")}</h6>
                    ${Object.entries(this.providerUsage).map(([e,r])=>p`
                        <wa-dropdown-item>
                            <span class="provider-name">${e}</span>
                            <div class="provider-stats">
                                <div class="stat-item">
                                    <span class="stat-label">${c("PROMPT")}</span>
                                    <span class="stat-value">${this.formatNumber(r.promptTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">${c("COMPLETION")}</span>
                                    <span class="stat-value">${this.formatNumber(r.completionTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">${c("TOTAL")}</span>
                                    <span class="stat-value">${this.formatNumber(r.totalTokens)}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">${c("REQUESTS")}</span>
                                    <span class="stat-value">${r.requestCount}</span>
                                </div>
                            </div>
                        </wa-dropdown-item>
                    `)}
                `:""}
                
                <wa-divider></wa-divider>
                <wa-dropdown-item variant="danger" @click=${this.handleReset}>
                    <wa-icon name="trash" slot="icon"></wa-icon>
                    ${c("RESET_STATISTICS")}
                </wa-dropdown-item>
            </wa-dropdown>
        `:p``}};Se.styles=D`
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
    `;Se=Es([L("k-token-usage")],Se);var Ts=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,_=(t,e,r,a)=>{for(var s=a>1?void 0:a?$s(e,r):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&Ts(e,r,s),s};let T=class extends Ke{constructor(){super(...arguments),this.providers=[],this.defaultProvider="",this.editingCell=null,this.editingValue="",this.hasChanges=!1,this.availableModels=[],this.loadingModels=!1,this.requireToolApproval=!0,this.toolApprovalAllowlist=[],this.smartToolDetection=!1,this.availableCommands=[],this.providerFactory=new vt}async doInitUI(){await this.loadAvailableCommands(),await this.loadConfig(),be(We,()=>{this.loadConfig()}),be(dt,()=>{this.loadConfig()})}async loadConfig(){const t=await N.get(ve);this.aiConfig=t;const e=this.getContributedProviders(),r=t?.providers||[];this.providers=this.mergeProviders(r,e);const a=t?.defaultProvider||"";a&&!this.providers.find(s=>s.name===a)?this.defaultProvider="":this.defaultProvider=a,t?.requireToolApproval!==void 0?this.requireToolApproval=t.requireToolApproval:this.requireToolApproval=!0,this.toolApprovalAllowlist=t?.toolApprovalAllowlist||[],t?.smartToolDetection!==void 0?this.smartToolDetection=t.smartToolDetection:this.smartToolDetection=!1,this.hasChanges=!1,this.markDirty(!1),this.editingCell=null,await this.updateComplete,this.syncCheckboxStates(),this.syncToolApprovalCheckbox(),this.syncSmartToolDetectionCheckbox()}async loadAvailableCommands(){const t=V.listCommands();this.availableCommands=Object.entries(t).map(([e,r])=>({id:e,name:r.name||e,description:r.description})).sort((e,r)=>e.name.localeCompare(r.name))}getContributedProviders(){return C.getContributions(x).map(e=>e.provider)}mergeProviders(t,e){const r=new Set(t.map(s=>s.name)),a=e.filter(s=>!r.has(s.name));return a.length>0?[...t,...a]:t}syncCheckboxStates(){const t=this.shadowRoot?.querySelectorAll("tbody tr");t&&this.providers&&t.forEach((e,r)=>{const a=e.querySelector("td:first-child wa-checkbox"),s=this.providers[r];a&&s&&(a.checked=this.defaultProvider===s.name)})}syncToolApprovalCheckbox(){const t=this.shadowRoot?.querySelector(".tool-approval-controls wa-checkbox");t&&(t.checked=this.requireToolApproval)}syncSmartToolDetectionCheckbox(){const t=this.shadowRoot?.querySelector(".tool-detection-section wa-checkbox");t&&(t.checked=this.smartToolDetection)}async saveConfig(){if(!this.aiConfig)return;const t={...this.aiConfig,defaultProvider:this.defaultProvider,providers:this.providers,requireToolApproval:this.requireToolApproval,toolApprovalAllowlist:this.toolApprovalAllowlist,smartToolDetection:this.smartToolDetection};await N.set(ve,t),this.hasChanges=!1,this.markDirty(!1)}async save(){if(this.hasChanges)try{await this.saveConfig()}catch(t){throw console.error("Failed to save AI config:",t),t}}async startCellEditing(t,e){const r=this.providers[t];if(!r)return;const a=this.getProviderFieldValue(r,e);this.editingCell={rowIndex:t,field:e},this.editingValue=a,e==="model"&&(await this.updateComplete,await this.fetchModels(r))}async fetchModels(t){this.loadingModels=!0,this.availableModels=[],await this.updateComplete;try{const e=this.providerFactory.getProvider(t);if(e.getAvailableModels){const r=await e.getAvailableModels(t);this.availableModels=Array.isArray(r)?r:[]}else this.availableModels=[]}catch{this.availableModels=[]}finally{this.loadingModels=!1}}cancelCellEditing(){this.editingCell=null,this.editingValue="",this.availableModels=[],this.loadingModels=!1}saveCellEditing(){if(!this.editingCell)return;const{rowIndex:t,field:e}=this.editingCell;this.updateProviderField(t,e,this.editingValue),this.cancelCellEditing()}markDirtyAndUpdate(){this.hasChanges=!0,this.markDirty(!0)}getProviderFieldValue(t,e){const a={name:"name",model:"model",chatApiEndpoint:"chatApiEndpoint",apiKey:"apiKey",ocrApiEndpoint:"ocrApiEndpoint",ocrModel:"ocrModel"}[e];if(!a)return"";const s=t[a];return typeof s=="string"?s:""}updateProviderField(t,e,r){this.providers=this.providers.map((a,s)=>{if(s===t){const n={...a};return e==="ocrApiEndpoint"||e==="ocrModel"?n[e]=r||void 0:n[e]=r,n}return a}),this.markDirtyAndUpdate()}updateProviderParameter(t,e,r){this.providers=this.providers.map((a,s)=>{if(s===t){const n={...a.parameters||{},[e]:r};return{...a,parameters:n}}return a}),this.markDirtyAndUpdate()}async deleteProvider(t){const e=this.providers[t];await Te(c("DELETE_PROVIDER_CONFIRM",{name:e.name}))&&(this.defaultProvider===e.name&&(this.defaultProvider=""),this.providers=this.providers.filter((a,s)=>s!==t),this.markDirtyAndUpdate())}addProvider(){const t={name:"new-provider",model:"",apiKey:"",chatApiEndpoint:""};this.providers=[...this.providers,t],this.markDirtyAndUpdate()}setDefaultProvider(t){this.defaultProvider!==t&&(this.defaultProvider=t,this.markDirtyAndUpdate())}createInputHandlers(){return{onInput:t=>{const e=t.target;this.editingValue=e.value},onKeydown:t=>{t.key==="Enter"?(t.preventDefault(),this.saveCellEditing()):t.key==="Escape"&&(t.preventDefault(),this.cancelCellEditing())},onBlur:()=>{this.saveCellEditing()}}}renderEditableCell(t,e,r,a="text",s,n){const i=this.editingCell?.rowIndex===t&&this.editingCell?.field===e,l=this.createInputHandlers();return i&&n?n:i?p`
                <wa-input
                    type="${a}"
                    .value="${this.editingValue}"
                    placeholder="${s||""}"
                    @input="${l.onInput}"
                    @keydown="${l.onKeydown}"
                    @blur="${l.onBlur}"
                    autofocus>
                </wa-input>
            `:p`<span>${r}</span>`}renderModelCell(t,e){return this.editingCell?.rowIndex===t&&this.editingCell?.field==="model"?p`
            ${b(this.loadingModels,()=>p`
                <wa-input
                    .value="${this.editingValue}"
                    placeholder="${c("LOADING_MODELS")}"
                    readonly>
                    <wa-animation name="spinner" play slot="start"></wa-animation>
                </wa-input>
            `,()=>p`
                ${b(this.availableModels.length>0,()=>p`
                    <wa-dropdown
                        @wa-select="${a=>{const s=a.detail.item.value;s&&(this.editingValue=s,this.saveCellEditing())}}"
                        placement="bottom-start">
                        <wa-input
                            slot="trigger"
                            .value="${this.editingValue}"
                            placeholder="${c("SELECT_MODEL")}"
                            readonly
                            @keydown="${a=>{a.key==="Escape"&&(a.preventDefault(),this.cancelCellEditing())}}">
                        </wa-input>
                        ${this.availableModels.map(a=>p`
                            <wa-dropdown-item value="${a.id}">
                                ${a.name||a.id}
                            </wa-dropdown-item>
                        `)}
                    </wa-dropdown>
                `,()=>p`
                    ${this.renderEditableCell(t,"model",e.model)}
                `)}
            `)}
        `:p`<span>${e.model}</span>`}render(){return p`
            <div class="ai-config-editor">
                <div class="editor-header">
                    <h2>${c("PROVIDERS")}</h2>
                    <div class="header-actions">
                        <wa-button 
                            variant="brand" 
                            appearance="filled"
                            @click="${()=>this.addProvider()}">
                            ${c("ADD_PROVIDER")}
                        </wa-button>
                    </div>
                </div>

                <div class="table-container">
                    <table class="providers-table">
                        <thead>
                            <tr>
                                <th>${c("DEFAULT")}</th>
                                <th>${c("NAME")}</th>
                                <th>${c("MODEL")}</th>
                                <th>${c("API_ENDPOINT")}</th>
                                <th>${c("API_KEY")}</th>
                                <th>${c("OCR_ENDPOINT")}</th>
                                <th>${c("OCR_MODEL")}</th>
                                <th>${c("ACTIONS")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${pe(this.providers,(t,e)=>e,(t,e)=>p`
                                <tr class="${this.editingCell?.rowIndex===e?"editing":""}">
                                    <td>
                                        <wa-checkbox
                                            .checked="${this.defaultProvider===t.name}"
                                            @change="${async r=>{const a=r.target;if(a.checked){this.setDefaultProvider(t.name),await this.updateComplete;const s=this.shadowRoot?.querySelectorAll("tbody tr");s&&s.forEach(n=>{const i=n.querySelector("td:first-child wa-checkbox");i&&i!==a&&(i.checked=!1)})}else this.defaultProvider===t.name&&(a.checked=!0)}}">
                                        </wa-checkbox>
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"name")}">
                                        ${this.renderEditableCell(e,"name",t.name)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"model")}">
                                        ${this.renderModelCell(e,t)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"chatApiEndpoint")}">
                                        ${this.renderEditableCell(e,"chatApiEndpoint",p`<span class="endpoint-text">${t.chatApiEndpoint}</span>`)}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"apiKey")}">
                                        ${this.renderEditableCell(e,"apiKey",p`<span class="api-key-text">${t.apiKey?"••••••••":""}</span>`,"password",c("API_KEY"))}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"ocrApiEndpoint")}">
                                        ${this.renderEditableCell(e,"ocrApiEndpoint",t.ocrApiEndpoint||"-","text",c("OPTIONAL"))}
                                    </td>
                                    <td class="editable-cell" @dblclick="${()=>this.startCellEditing(e,"ocrModel")}">
                                        ${this.renderEditableCell(e,"ocrModel",t.ocrModel||"-","text",c("OPTIONAL"))}
                                    </td>
                                    <td>
                                        <wa-button
                                            variant="danger"
                                            appearance="plain"
                                            size="small"
                                            @click="${()=>this.deleteProvider(e)}">
                                            ${c("DELETE_PROVIDER")}
                                        </wa-button>
                                    </td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>

                ${b(this.providers.length===0,()=>p`
                    <div class="empty-state">
                        <p>${c("NO_PROVIDERS_CONFIGURED")}</p>
                    </div>
                `)}

                <div class="tool-approval-section">
                    <h3>${c("TOOL_APPROVALS")}</h3>
                    <div class="tool-approval-controls">
                        <wa-checkbox
                            .checked="${this.requireToolApproval}"
                            @change="${t=>{const e=t.target;this.requireToolApproval=e.checked,this.markDirtyAndUpdate()}}">
                            ${c("REQUIRE_APPROVAL_BEFORE_EXECUTING")}
                        </wa-checkbox>
                    </div>

                    <div class="tool-detection-section" style="margin-top: 1.5rem;">
                        <wa-checkbox
                            .checked="${this.smartToolDetection}"
                            @change="${t=>{const e=t.target;this.smartToolDetection=e.checked,this.markDirtyAndUpdate()}}">
                            ${c("SMART_TOOL_DETECTION")}
                        </wa-checkbox>
                        <p class="hint" style="margin-top: 0.5rem; margin-left: 1.75rem; color: var(--wa-color-text-secondary, #666); font-size: 0.875rem;">
                            ${c("SMART_TOOL_DETECTION_HINT")}
                        </p>
                    </div>

                    <div class="allowlist-section">
                        <h4>
                            ${c("APPROVED_COMMANDS")}
                            <span class="command-stats">
                                (${this.toolApprovalAllowlist.length}/${this.availableCommands.length})
                            </span>
                        </h4>
                        <p class="hint">
                            ${this.requireToolApproval?c("SELECT_COMMANDS_WITHOUT_APPROVAL"):c("COMMANDS_AUTO_APPROVED")}
                        </p>
                        <div class="commands-list ${this.requireToolApproval?"":"disabled"}">
                            ${this.availableCommands.map(t=>p`
                                <div class="command-item">
                                    <wa-checkbox
                                        .checked="${this.toolApprovalAllowlist.includes(t.id)}"
                                        ?disabled="${!this.requireToolApproval}"
                                        @change="${e=>{e.target.checked?this.toolApprovalAllowlist.includes(t.id)||(this.toolApprovalAllowlist=[...this.toolApprovalAllowlist,t.id],this.markDirtyAndUpdate()):(this.toolApprovalAllowlist=this.toolApprovalAllowlist.filter(a=>a!==t.id),this.markDirtyAndUpdate())}}">
                                        <div class="command-label">
                                            ${t.name}
                                            ${t.description?p`
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
        `}};T.styles=D`
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

    `;_([S({attribute:!1})],T.prototype,"input",2);_([E()],T.prototype,"aiConfig",2);_([E()],T.prototype,"providers",2);_([E()],T.prototype,"defaultProvider",2);_([E()],T.prototype,"editingCell",2);_([E()],T.prototype,"editingValue",2);_([E()],T.prototype,"hasChanges",2);_([E()],T.prototype,"availableModels",2);_([E()],T.prototype,"loadingModels",2);_([E()],T.prototype,"requireToolApproval",2);_([E()],T.prototype,"toolApprovalAllowlist",2);_([E()],T.prototype,"smartToolDetection",2);_([E()],T.prototype,"availableCommands",2);T=_([L("k-ai-config-editor")],T);const Cs="aisystem",_s={APP_SUPPORT:"App Support",APP_SUPPORT_DESC:"General app support",SIDEBAR_LABEL:"AI",TOKEN_USAGE:"Token Usage",OPEN_AI_CONFIG:"Open AI Config",OPEN_AI_CONFIG_DESC:"Opens the AI settings editor",AI_SETTINGS:"AI Settings",AI_CONFIG:"AI Config",NO_PROVIDER_CONFIGURED:"No AI provider configured",CLICK_SETTINGS_TO_CONFIGURE:"Click the settings button to configure",TYPE_MESSAGE_ENTER:"Type your message and press Enter...",STOP:"Stop",SETTINGS:"Settings",CLOSE:"Close",ARCHIVED_SESSIONS:"Archived Sessions",RESTORE:"Restore",DELETE_ALL_ARCHIVED:"Delete All Archived",DELETE_ALL_CONFIRM:"Are you sure you want to permanently delete all {count} archived session{plural}?",NEW_CHAT:"New Chat",CHAT:"Chat",CANCEL:"Cancel",APPROVE:"Approve",TOOL_APPROVAL_REQUEST:"Tool Approval Request",TOOL_CALLS:"Tool Calls",TOOL_APPROVAL_MESSAGE:"The AI wants to execute {toolCount} tool call{plural}: {toolList}",COPY:"Copy",AI_ASSISTANT:"AI Assistant",MULTIPLE_AGENTS:"Multiple Agents",QUICK_ACTIONS:"Quick Actions",TOKEN_USAGE_STATS:"Token Usage Statistics",TOTAL_USAGE:"Total Usage",TOTAL:"Total",PROMPT:"Prompt",COMPLETION:"Completion",REQUESTS:"Requests",BY_PROVIDER:"By Provider",RESET_STATISTICS:"Reset Statistics",RESET_CONFIRM:"Reset all token usage statistics?",TOKENS:"tokens",LOADING_MODELS:"Loading models...",SELECT_MODEL:"Select a model",TOOL_EXECUTION_PENDING:"Tool execution pending: {toolCount} tool{plural} ({toolName}{more})",AGENT_WANTS_TO_EXECUTE:'Agent "{role}" wants to execute the following tools:',ALWAYS_ALLOW:"Always allow",COPY_CODE:"Copy code",REQUIRES_ATTENTION:"Requires attention",RESEND:"Resend",CONFIRM:"Confirm",REJECT:"Reject",ENTER_RESPONSE:"Enter your response...",SUBMIT:"Submit",CONTINUE_WORKFLOW:"Continue Workflow",PROVIDERS:"Providers",ADD_PROVIDER:"Add Provider",DEFAULT:"Default",NAME:"Name",MODEL:"Model",API_ENDPOINT:"API Endpoint",API_KEY:"API Key",OCR_ENDPOINT:"OCR Endpoint",OCR_MODEL:"OCR Model",ACTIONS:"Actions",DELETE_PROVIDER:"Delete",DELETE_PROVIDER_CONFIRM:'Delete provider "{name}"?',NO_PROVIDERS_CONFIGURED:'No providers configured. Click "Add Provider" to get started.',TOOL_APPROVALS:"Tool Approvals",REQUIRE_APPROVAL_BEFORE_EXECUTING:"Require approval before executing tools",SMART_TOOL_DETECTION:"Use smart tool detection (reduces token usage)",SMART_TOOL_DETECTION_HINT:"When enabled, a small ML model running in your browser will detect if a prompt needs tools. This reduces token usage for simple queries like greetings. Note: The model (approximately 60-80MB quantized) will be downloaded on first use, which may take some time.",APPROVED_COMMANDS:"Approved Commands",SELECT_COMMANDS_WITHOUT_APPROVAL:"Select commands that can be executed without approval:",COMMANDS_AUTO_APPROVED:"These commands will be approved automatically when approval is enabled:",OPTIONAL:"Optional"},Is={APP_SUPPORT:"App-Unterstützung",APP_SUPPORT_DESC:"Allgemeine App-Unterstützung",SIDEBAR_LABEL:"KI",TOKEN_USAGE:"Token-Verbrauch",OPEN_AI_CONFIG:"KI-Konfiguration öffnen",OPEN_AI_CONFIG_DESC:"Öffnet den KI-Einstellungseditor",AI_SETTINGS:"KI-Einstellungen",AI_CONFIG:"KI-Konfiguration",NO_PROVIDER_CONFIGURED:"Kein KI-Anbieter konfiguriert",CLICK_SETTINGS_TO_CONFIGURE:"Klicken Sie auf die Einstellungsschaltfläche zum Konfigurieren",TYPE_MESSAGE_ENTER:"Geben Sie Ihre Nachricht ein und drücken Sie Enter...",STOP:"Stopp",SETTINGS:"Einstellungen",CLOSE:"Schließen",ARCHIVED_SESSIONS:"Archivierte Sitzungen",RESTORE:"Wiederherstellen",DELETE_ALL_ARCHIVED:"Alle archivierten löschen",DELETE_ALL_CONFIRM:"Möchten Sie wirklich alle {count} archivierte Sitzung{plural} dauerhaft löschen?",NEW_CHAT:"Neuer Chat",CHAT:"Chat",CANCEL:"Abbrechen",APPROVE:"Genehmigen",TOOL_APPROVAL_REQUEST:"Werkzeug-Genehmigungsanfrage",TOOL_CALLS:"Werkzeugaufrufe",TOOL_APPROVAL_MESSAGE:"Die KI möchte {toolCount} Werkzeugaufruf{plural} ausführen: {toolList}",COPY:"Kopieren",AI_ASSISTANT:"KI-Assistent",MULTIPLE_AGENTS:"Mehrere Agenten",QUICK_ACTIONS:"Schnellaktionen",TOKEN_USAGE_STATS:"Token-Verbrauchsstatistiken",TOTAL_USAGE:"Gesamtverbrauch",TOTAL:"Gesamt",PROMPT:"Eingabeaufforderung",COMPLETION:"Vervollständigung",REQUESTS:"Anfragen",BY_PROVIDER:"Nach Anbieter",RESET_STATISTICS:"Statistiken zurücksetzen",RESET_CONFIRM:"Alle Token-Verbrauchsstatistiken zurücksetzen?",TOKENS:"Tokens",LOADING_MODELS:"Modelle werden geladen...",SELECT_MODEL:"Modell auswählen",TOOL_EXECUTION_PENDING:"Werkzeugausführung ausstehend: {toolCount} Werkzeug{plural} ({toolName}{more})",AGENT_WANTS_TO_EXECUTE:'Agent "{role}" möchte die folgenden Werkzeuge ausführen:',ALWAYS_ALLOW:"Immer erlauben",COPY_CODE:"Code kopieren",REQUIRES_ATTENTION:"Erfordert Aufmerksamkeit",RESEND:"Erneut senden",CONFIRM:"Bestätigen",REJECT:"Ablehnen",ENTER_RESPONSE:"Geben Sie Ihre Antwort ein...",SUBMIT:"Absenden",CONTINUE_WORKFLOW:"Workflow fortsetzen",PROVIDERS:"Anbieter",ADD_PROVIDER:"Anbieter hinzufügen",DEFAULT:"Standard",NAME:"Name",MODEL:"Modell",API_ENDPOINT:"API-Endpunkt",API_KEY:"API-Schlüssel",OCR_ENDPOINT:"OCR-Endpunkt",OCR_MODEL:"OCR-Modell",ACTIONS:"Aktionen",DELETE_PROVIDER:"Löschen",DELETE_PROVIDER_CONFIRM:'Anbieter "{name}" löschen?',NO_PROVIDERS_CONFIGURED:'Keine Anbieter konfiguriert. Klicken Sie auf "Anbieter hinzufügen", um zu beginnen.',TOOL_APPROVALS:"Werkzeug-Genehmigungen",REQUIRE_APPROVAL_BEFORE_EXECUTING:"Genehmigung vor der Ausführung von Werkzeugen erforderlich",SMART_TOOL_DETECTION:"Intelligente Werkzeugerkennung verwenden (reduziert Token-Verbrauch)",SMART_TOOL_DETECTION_HINT:"Wenn aktiviert, erkennt ein kleines ML-Modell in Ihrem Browser, ob eine Eingabeaufforderung Werkzeuge benötigt. Dies reduziert den Token-Verbrauch bei einfachen Abfragen wie Begrüßungen. Hinweis: Das Modell (ca. 60-80MB quantisiert) wird bei der ersten Verwendung heruntergeladen, was einige Zeit dauern kann.",APPROVED_COMMANDS:"Genehmigte Befehle",SELECT_COMMANDS_WITHOUT_APPROVAL:"Wählen Sie Befehle aus, die ohne Genehmigung ausgeführt werden können:",COMMANDS_AUTO_APPROVED:"Diese Befehle werden automatisch genehmigt, wenn die Genehmigung aktiviert ist:",OPTIONAL:"Optional"},Os={namespace:Cs,en:_s,de:Is};C.registerContribution(ht,Os);C.registerContribution(ut,{name:"aiview",label:c("SIDEBAR_LABEL"),icon:"robot",component:t=>p`<k-aiview id="${t}"></k-aiview>`});C.registerContribution(kt,{label:c("APP_SUPPORT"),description:c("APP_SUPPORT_DESC"),role:"appsupport",priority:100,icon:"question-circle",sysPrompt:At,tools:()=>N.get(ve).then(t=>({enabled:!0,smartToolDetection:t?.smartToolDetection??!1}))});C.registerContribution(ze,{target:ze,label:c("TOKEN_USAGE"),html:"<k-token-usage></k-token-usage>"});Ee.registerEditorInputHandler({ranking:1e3,canHandle:t=>t.key===".system.ai-config",handle:async t=>(t.editorId="ai-config-editor",t.widgetFactory=()=>p`
                <k-ai-config-editor .input=${t}></k-ai-config-editor>
            `,t)});gt({command:{id:"open_ai_config",name:c("OPEN_AI_CONFIG"),description:c("OPEN_AI_CONFIG_DESC"),parameters:[]},handler:{execute:t=>{const e={title:c("AI_SETTINGS"),data:{},key:".system.ai-config",icon:"robot",state:{}};Ee.loadEditor(e).then()}},contribution:{target:mt,icon:"robot",label:c("AI_CONFIG")}});ft.put("aiService",ee);
