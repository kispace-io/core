import{b,e as g,j as f,d as i,k as p,t as C}from"./vendor-DlX8FWQM.js";import{L as y,s as T,z as w,A as $,c as d,B as u,C as s,D as S}from"./monaco-BbC9iOIH.js";var x=Object.defineProperty,A=Object.getOwnPropertyDescriptor,h=(e,t,o,r)=>{for(var n=r>1?void 0:r?A(t,o):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(r?c(t,o,n):c(n))||n);return r&&n&&x(t,o,n),n};const m="catalog.root";let a=class extends y{constructor(){super(...arguments),this.treeRef=f()}doBeforeUI(){this.rebuildTree(),this.contributionsSubscriptionToken=T(w,e=>{(e.target===m||e.target?.startsWith("catalog."))&&this.rebuildTree()})}doClose(){this.contributionsSubscriptionToken&&($(this.contributionsSubscriptionToken),this.contributionsSubscriptionToken=void 0),super.doClose()}rebuildTree(){const e=d.getContributions(m);this.rootNodes=this.toTreeNodes(e),this.requestUpdate()}renderToolbar(){const e=u.get()instanceof a&&s.get()!==void 0;return i`
            <lyra-command
                icon="file-arrow-down"
                title="Checkout"
                ?disabled=${!e}
                .action=${()=>this.runWgetForSelection()}
            ></lyra-command>
            <lyra-command icon="arrows-rotate" title="Refresh Catalog" .action=${()=>this.refresh()}></lyra-command>
            <lyra-command icon="angles-down" slot="end" title="Expand All" .action=${()=>this.setAllExpanded(!0)}></lyra-command>
            <lyra-command icon="angles-up" slot="end" title="Collapse All" .action=${()=>this.setAllExpanded(!1)}></lyra-command>
        `}toTreeNodes(e){return e.map(t=>{const o={data:t.state,icon:t.icon,label:t.label,leaf:!1};if(t.contributionId){const r=d.getContributions(t.contributionId);o.leaf=r.length===0,o.children=this.toTreeNodes(r)}return o})}onItemDblClicked(e){const t=e.currentTarget.model.data.url;t&&this.executeCommand("wget",{url:t})}runWgetForSelection(){const e=s.get();e&&"url"in e&&e.url&&this.executeCommand("wget",{url:e.url})}onSelectionChanged(e){const t=e.detail.selection[0].model;s.set(t.data),this.updateContextMenu()}renderContextMenu(){const e=u.get()instanceof a?s.get():void 0,t=e&&"url"in e&&e.url;return i`
            <lyra-command
                icon="file-arrow-down"
                title="Checkout"
                ?disabled=${!t}
                .action=${()=>this.runWgetForSelection()}
            >Checkout</lyra-command>
        `}setAllExpanded(e){const t=this.treeRef.value;t&&t.querySelectorAll("wa-tree-item").forEach(o=>{o.expanded=e})}refresh(){this.rebuildTree()}createTreeItems(e,t=!1){return e?i`
            <wa-tree-item
                @dblclick=${this.nobubble(this.onItemDblClicked)}
                .model=${e}
                ?expanded=${t}
            >
                <span><lyra-icon name="${e.icon}"></lyra-icon> ${e.label}</span>
                ${e.children?.map(o=>this.createTreeItems(o))}
            </wa-tree-item>
        `:i``}render(){return i`
            <wa-tree
                ${p(this.treeRef)}
                @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                style="--indent-guide-width: 1px;"
            >
                ${this.rootNodes?.map(e=>this.createTreeItems(e,!0))}
            </wa-tree>
        `}};a.styles=b`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;h([g()],a.prototype,"rootNodes",2);a=h([C("lyra-catalog")],a);d.registerContribution(S,{name:"catalog",label:"Catalog",icon:"book",component:e=>i`<lyra-catalog id="${e}"></lyra-catalog>`});
