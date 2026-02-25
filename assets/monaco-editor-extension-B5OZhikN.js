const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/k-monaco-editor-BrEXuJ12.js","assets/editor.main-BKD1TVVT.js","assets/main-CKpV1Fmo.js","assets/main-DCTlflHk.css","assets/editor-Dvl_Svmm.css"])))=>i.map(i=>d[i]);
import{f as i,R as o,l as s,k as c,c as d,_ as l}from"./main-CKpV1Fmo.js";import{C as r}from"./ai-service-CQQZNZjX.js";const u=`**Python Programming Assistant:**

You are helping with Python code. Python code is executed in the browser using Pyodide.

**Python-Specific Responsibilities:**
- Explain Python code and help debug Python errors
- Help with \`js\` module interaction: calling JavaScript functions from Python and passing data between Python and JavaScript
- Provide Python code examples
- Remember code runs in a browser environment (Pyodide) - be mindful of browser limitations

**Python Environment:**
- Working directory is \`/workspace\` (linked to user's local file system)
- Install packages by adding them to \`requirements.txt\` in the workspace
- Packages in \`requirements.txt\` are automatically installed before code execution

`,m=`**JavaScript Programming Assistant:**

You are helping with JavaScript code. JavaScript code is executed in a worker.

**JavaScript-Specific Focus:**
- Help with JavaScript, OpenLayers usage, and module patterns
- When a user requests a starter module, provide this template:

\`\`\`javascript
export default function ({ map, env, render, html, style, when, ref, createRef, events, settings }) {
    const state = {};
    return () => html\`
        <div>
            <h3>Hello!</h3>
            <button @click=\${() => {}}>Click me</button>
        </div>
    \`;
}
\`\`\`

`;i.registerContribution("toolbar:monaco-editor",{command:o,icon:"play",label:"Run"});s.registerEditorInputHandler({lazyInit:async()=>{await l(()=>import("./k-monaco-editor-BrEXuJ12.js"),__vite__mapDeps([0,1,2,3,4]))},canHandle:n=>n instanceof d,handle:async n=>{const e={title:n.getName(),data:n,key:n.getName(),editorId:"monaco-editor",icon:"file-pen",noOverflow:!1,state:{}};return e.widgetFactory=()=>c`
            <k-monaco-editor .input=${e}></k-monaco-editor>`,e}});function a(n,e){const t=n.activeEditor;return t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function"&&t.getLanguage()===e}const p={priority:50,enhance:async(n,e)=>a(e,"python")?`${n}

${u}`:n},h={priority:50,enhance:async(n,e)=>a(e,"javascript")?`${n}

${m}`:n};i.registerContribution(r,{label:"Python Programming Enhancer",enhancer:p});i.registerContribution(r,{label:"JavaScript Programming Enhancer",enhancer:h});
