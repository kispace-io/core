const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/k-monaco-editor-Cl00SyVj.js","assets/editor.main-B3_3mFwR.js","assets/main-DWHlzpiY.js","assets/main-DCTlflHk.css","assets/editor-Dvl_Svmm.css","assets/pyservice-B5n_SYhG.js","assets/package-manager-BBcpieQq.js"])))=>i.map(i=>d[i]);
import{k as o,j as s,c,_ as d,f as i,C as a}from"./main-DWHlzpiY.js";const l=`**Python Programming Assistant:**

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

`,u=`**JavaScript Programming Assistant:**

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

`;o.registerEditorInputHandler({lazyInit:async()=>{await d(()=>import("./k-monaco-editor-Cl00SyVj.js"),__vite__mapDeps([0,1,2,3,4,5,6]))},canHandle:e=>e instanceof c,handle:async e=>{const n={title:e.getName(),data:e,key:e.getName(),editorId:"monaco-editor",icon:"file-pen",noOverflow:!1,state:{}};return n.widgetFactory=()=>s`
            <k-monaco-editor .input=${n}></k-monaco-editor>`,n}});function r(e,n){const t=e.activeEditor;return t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function"&&t.getLanguage()===n}const h={priority:50,enhance:async(e,n)=>r(n,"python")?`${e}

${l}`:e},p={priority:50,enhance:async(e,n)=>r(n,"javascript")?`${e}

${u}`:e};i.registerContribution(a,{label:"Python Programming Enhancer",enhancer:h});i.registerContribution(a,{label:"JavaScript Programming Enhancer",enhancer:p});
