const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/k-monaco-editor-D9R71WVl.js","assets/editor.main-C63yZP9G.js","assets/main-BbPsMdsl.js","assets/main-DCTlflHk.css","assets/editor-Dvl_Svmm.css","assets/pyservice-CCynSiP0.js","assets/package-manager-B5xVKQ2i.js"])))=>i.map(i=>d[i]);
import{e as o,b as s,F as c,_ as d,a as i}from"./main-BbPsMdsl.js";import{C as r}from"./ai-service-CWIe4aNU.js";import"./in-browser-ml-service-CNQp0UFm.js";const l=`**Python Programming Assistant:**

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

`;o.registerEditorInputHandler({lazyInit:async()=>{await d(()=>import("./k-monaco-editor-D9R71WVl.js"),__vite__mapDeps([0,1,2,3,4,5,6]))},canHandle:e=>e instanceof c,handle:async e=>{const n={title:e.getName(),data:e,key:e.getName(),editorId:"monaco-editor",icon:"file-pen",noOverflow:!1,state:{}};return n.widgetFactory=()=>s`
            <k-monaco-editor .input=${n}></k-monaco-editor>`,n}});function a(e,n){const t=e.activeEditor;return t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function"&&t.getLanguage()===n}const p={priority:50,enhance:async(e,n)=>a(n,"python")?`${e}

${l}`:e},h={priority:50,enhance:async(e,n)=>a(n,"javascript")?`${e}

${u}`:e};i.registerContribution(r,{label:"Python Programming Enhancer",enhancer:p});i.registerContribution(r,{label:"JavaScript Programming Enhancer",enhancer:h});
